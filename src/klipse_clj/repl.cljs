(ns klipse-clj.repl
  (:require-macros
    klipse-clj.repl
    [cljs.env.macros :refer [with-compiler-env]])
  (:require
    [klipse-clj.repl-resources :refer [repl-special-doc-map special-doc-map]]
    [cljs.analyzer :as ana]
    [cljs.spec.alpha :as s]
    [clojure.string :as string]
    [cljs.js :as cljs]))

;; create cljs.user
;(set! (.. js/window -cljs -user) #js {})
; the following code is advanced compilation friendly
(js* "if(typeof window !== \"undefined\") {window.cljs.user = {}}")


(defonce ^:public current-ns-eval (atom 'cljs.user))
(defonce ^:public current-ns-compile (atom 'cljs.user))

(defn reset-ns-eval! []
  (reset! current-ns-eval 'cljs.user))

(defn reset-ns-compile! []
  (reset! current-ns-compile 'cljs.user))


(defonce st (atom nil))

(defn reset-state-eval! []
  (reset! st nil))

(def st-compile (atom nil))

(defn create-state-compile []
  (when (nil? @st-compile)
    (reset! st-compile (cljs/empty-state)))
  @st-compile)

(defn reset-state-compile! []
  (reset! st-compile nil))

(defn- add-macros-suffix
  [sym]
  (symbol (str (name sym) "$macros")))

(defn eval-form
  ([form]
   (eval-form (.-name *ns*)))
  ([form ns]
   (let [result (atom nil)]
     (cljs/eval @st form
                {:ns            ns
                 :context       :expr
                 :eval          cljs/js-eval
                 :def-emits-var true}
                (fn [{:keys [value error]}]
                  (if error
                    error
                    (reset! result value))))
     @result)))

(defn def-a-var
  ([ns name]
   (when-let [the-ns (find-ns (cond-> ns (instance? Namespace ns) ns-name))]
     (eval-form `(def ~name) (ns-name the-ns))))
  ([ns name val]
   (when-let [the-ns (find-ns (cond-> ns (instance? Namespace ns) ns-name))]
     (eval-form `(def ~name ~val) (ns-name the-ns)))))





;; doc stuff


(defn- resolve-var
  "Given an analysis environment resolve a var. Analogous to
   clojure.core/resolve"
  [env sym]
  {:pre [(map? env) (symbol? sym)]}
  (try
    (ana/resolve-var env sym
                     (ana/confirm-var-exists-throw))
    (catch :default _
      (ana/resolve-macro-var env sym))))

(defn- print-value
  [value opts]
  ;; TODO: find a better implementaion - look at planck.repl
  (prn value))


(defn- str-butlast
  [s]
  (subs s 0 (dec (count s))))

(defn- format-spec
  [spec left-margin ns]
  (let [raw-print (with-out-str (print-value (s/describe spec)
                                             {::keyword-ns     ns
                                              ::spec?          true
                                              ::as-code?       true
                                              ::term-width-adj (- left-margin)}))]
    (string/replace (str-butlast raw-print) #"\n"
                    (apply str \newline (repeat left-margin " ")))))

(defn- drop-macros-suffix
  [ns-name]
  (if (string/ends-with? ns-name "$macros")
    (apply str (drop-last 7 ns-name))
    ns-name))

(defn- undo-reader-conditional-whitespace-docstring
  "Undoes the effect that wrapping a reader conditional around a defn has on a
  docstring."
  [s]
  ;; We look for five spaces (or six, in case that the docstring
  ;; is not aligned under the first quote) after the first newline
  ;; (or two, in case the doctring has an unpadded blank line
  ;; after the first), and then replace all five (or six) spaces
  ;; after newlines with two.
  (when-not (nil? s)
    (if (re-find #"[^\n]*\n\n?      ?\S.*" s)
      (string/replace s #"\n      ?" "\n  ")
      s)))

(defn- print-doc [{n :ns nm :name :as m}]
  (println "-------------------------")
  (if-let [spec (:spec m)]
    (print-value spec {})
    (println (str (when-let [ns (:ns m)] (str ns "/")) (:name m))))
  (when (:protocol m)
    (println "Protocol"))
  (cond
    (:forms m) (doseq [f (:forms m)]
                 (println "  " f))
    (:arglists m) (let [arglists (:arglists m)]
                    (if (or (:macro m)
                            (:repl-special-function m))
                      (prn arglists)
                      (prn
                        (if (= 'quote (first arglists))
                          (second arglists)
                          arglists)))))
  (if (:special-form m)
    (do
      (println "Special Form")
      (println " " (:doc m))
      (if (contains? m :url)
        (when (:url m)
          (println (str "\n  Please see http://clojure.org/" (:url m))))
        (println (str "\n  Please see http://clojure.org/special_forms#"
                      (:name m)))))
    (do
      (when (:macro m)
        (println "Macro"))
      (when (:spec m)
        (println "Spec"))
      (when (:repl-special-function m)
        (println "REPL Special Function"))
      (println " " (:doc m))
      (when (:protocol m)
        (doseq [[name {:keys [doc arglists]}] (:methods m)]
          (println)
          (println " " name)
          (println " " arglists)
          (when doc
            (println " " doc))))
      (when n
        (let [spec-lookup (fn [ns-suffix]
                            (s/get-spec (symbol (str (ns-name n) ns-suffix) (name nm))))]
          (when-let [fnspec (or (spec-lookup "")
                                (spec-lookup "$macros"))]
            (print "Spec")
            (doseq [role [:args :ret :fn]]
              (when-let [spec (get fnspec role)]
                (print (str "\n " (name role) ":") (format-spec spec (+ 3 (count (name role))) n))))
            (println)))))))

(defn- special-doc
  [name-symbol]
  (assoc (special-doc-map name-symbol)
    :name name-symbol
    :special-form true))

(defn- repl-special-doc
  [name-symbol]
  (assoc (repl-special-doc-map name-symbol)
    :name name-symbol
    :repl-special-function true))

(defn- get-namespace
  "Gets the AST for a given namespace."
  [ns]
  {:pre [(symbol? ns)]}
  (get-in @@st [::ana/namespaces ns]))


(defn- get-macro-var
  [env sym macros-ns]
  {:pre [(symbol? macros-ns)]}
  (when-let [macro-var (with-compiler-env @st
                                          (resolve-var env (symbol macros-ns (name sym))))]
    (assoc macro-var :ns macros-ns)))


(defn- get-aenv
  []
  (assoc (ana/empty-env)
    :ns (get-namespace @current-ns-eval)
    :context :expr))

(defn- get-var
  [env sym]
  (binding [ana/*cljs-warning-handlers* nil]
    (let [var (or (with-compiler-env @st (resolve-var env sym))
                  (when-let [macros-ns (sym (get-in @@st [::ana/namespaces @current-ns-eval :use-macros]))]
                    (get-macro-var env sym macros-ns)))]
      (when var
        (-> (cond-> var
                    (not (:ns var))
                    (assoc :ns (symbol (namespace (:name var))))
                    (= (namespace (:name var)) (str (:ns var)))
                    (update :name #(symbol (name %))))
            (update :ns (comp symbol drop-macros-suffix str)))))))

(defn doc*
  [name]
  (if-let [special-name ('{&       fn
                           catch   try
                           finally try} name)]
    (doc* special-name)
    (cond

      (special-doc-map name)
      (print-doc (special-doc name))

      (repl-special-doc-map name)
      (print-doc (repl-special-doc name))

      (qualified-keyword? name)
      (print-doc {:spec name :doc (format-spec (s/get-spec name) 3 (symbol (namespace name)))})

      (get-namespace name)
      (print-doc
        (select-keys (get-namespace name) [:name :doc]))

      (get-var (get-aenv) name)
      (print-doc
        (let [var (get-var (get-aenv) name)
              var (assoc var :forms (-> var :meta :forms second)
                             :arglists (-> var :meta :arglists second))
              m   (select-keys var
                               [:ns :name :doc :forms :arglists :macro :url])
              m   (update m :doc undo-reader-conditional-whitespace-docstring)]
          (cond-> (update-in m [:name] cljs.core/name)
                  (:protocol-symbol var)
                  (assoc :protocol true
                         :methods
                         (->> (get-in var [:protocol-info :methods])
                              (map (fn [[fname sigs]]
                                     [fname {:doc      (:doc
                                                         (get-var (get-aenv)
                                                                  (symbol (str (:ns var)) (str fname))))
                                             :arglists (seq sigs)}]))
                              (into {})))))))))


(defn- completion-candidates-for-ns
  [ns-sym allow-private?]
  (if (string/starts-with? (str ns-sym) "goog")
    (if (find-ns ns-sym)
      (into [] (js-keys (.getObjectByName js/goog (str ns-sym))))
      [])
    (map (comp str key)
      (into []
        (comp
          (filter (if allow-private?
                    identity
                    #(not (:private (val %)))))
          (remove #(:anonymous (val %))))
        (apply merge
          ((juxt :defs :macros)
           (get-namespace ns-sym)))))))

(defn- completion-candidates-for-current-ns []
  (let [cur-ns @current-ns-eval]
    (into (completion-candidates-for-ns cur-ns true)
      (comp (mapcat keys) (map str))
      ((juxt :renames :rename-macros :uses :use-macros) (get-namespace cur-ns)))))

(defn- is-completion?
  [match-suffix candidate]
  (let [escaped-suffix (string/replace match-suffix #"[-\/\\^$*+?.()|\[\]{}]" "\\$&")]
    (re-find (js/RegExp. (str "^" escaped-suffix) "i") candidate)))

(def ^:private keyword-completions
  [:require :require-macros :import
   :refer :refer-macros :include-macros
   :refer-clojure :exclude
   :keys :strs :syms
   :as :or
   :pre :post
   :let :when :while
   :clj :cljs
   :default
   :else
   :gen-class
   :keywordize-keys
   :req :req-un :opt :opt-un
   :args :ret :fn])

(def ^:private namespace-completion-exclusions
  '[planck.from.io.aviso.ansi
    planck.pprint.code
    planck.pprint.data
    planck.bundle
    planck.closure
    planck.js-deps
    planck.repl
    planck.repl-resources
    planck.themes
    clojure.core.rrb-vector
    clojure.core.rrb-vector.interop
    clojure.core.rrb-vector.nodes
    clojure.core.rrb-vector.protocols
    clojure.core.rrb-vector.rrbt
    clojure.core.rrb-vector.transients
    clojure.core.rrb-vector.trees
    cognitect.transit
    fipp.deque
    fipp.engine
    fipp.visit
    lazy-map.core
    cljs.source-map
    cljs.source-map.base64
    cljs.source-map.base64-vlq
    cljs.tools.reader.impl.commons
    cljs.tools.reader.impl.utils
    cljs.stacktrace])

(def ^:private namespace-completion-additons
  '[clojure.core
    clojure.test
    clojure.spec.alpha
    clojure.spec.test.alpha
    clojure.spec.gen.alpha
    clojure.pprint])

(defn- all-ns
  "Returns a sequence of all namespaces."
  []
  (keys (::ana/namespaces @@st)))

(defn current-alias-map
  ([] (current-alias-map @current-ns-eval @st))
  ([ns state]
   (->> (merge (get-in @state [::ana/namespaces ns :requires])
               (get-in @state [::ana/namespaces ns :require-macros]))
        (remove (fn [[k v]] (= k v)))
        (into {}))))

(defn- namespace-completions
  []
  (->> (all-ns)
    (map #(drop-macros-suffix (str %)))
    (remove (into #{} (map str namespace-completion-exclusions)))
    (concat (map str namespace-completion-additons))
    sort
    distinct))

(defn- expand-typed-ns
  "Expand the typed namespace symbol to a known namespace, consulting current
  namespace aliases if necessary."
  [alias]
  (let [alias (if (symbol-identical? alias 'clojure.core)
                'cljs.core
                alias)]
    (or (get-in st [:cljs.analyzer/namespaces alias :name])
        (alias (current-alias-map))
        alias)))


(defn- completion-candidates
  [top-form? typed-ns]
  (set (if typed-ns
         (let [expanded-ns (expand-typed-ns (symbol typed-ns))]
           (concat
             (completion-candidates-for-ns expanded-ns false)
             (completion-candidates-for-ns (add-macros-suffix expanded-ns) false)))
         (concat
           (map str keyword-completions)
           (namespace-completions)
           (map #(str % "/") (keys (current-alias-map)))
           (completion-candidates-for-ns 'cljs.core false)
           (completion-candidates-for-ns 'cljs.core$macros false)
           (completion-candidates-for-current-ns)
           (when top-form?
             (concat
               (map str (keys special-doc-map))
               (map str (keys repl-special-doc-map))))))))

(defn- longest-common-prefix
  [strings]
  (let [minl (apply min (map count strings))]
    (loop [l minl]
      (if (> l 0)
        (if (every? #{(subs (first strings) 0 l)}
              (map #(subs % 0 l) (rest strings)))
          (subs (first strings) 0 l)
          (recur (dec l)))
        ""))))

(defn- spec-registered-keywords
  [ns]
  (eduction
    (filter keyword?)
    (filter #(= (str ns) (namespace %)))
    (keys (s/registry))))

(defn- local-keyword-str
  [kw]
  (str "::" (name kw)))

(defn- local-keyword
  "Returns foo for ::foo, otherwise nil"
  [buffer]
  (second (re-find #"::([a-zA-Z-]*)$" buffer)))

(defn- local-keyword-completions
  [kw-name]
  (let [kw-source (str "::" kw-name)]
    (clj->js (into [kw-source]
               (sequence
                 (comp
                   (map local-keyword-str)
                   (filter #(string/starts-with? % kw-source)))
                 (spec-registered-keywords @current-ns-eval))))))

(defn get-completions
  "Returns an array of the buffer-match-suffix, along with completions for the
  entered text. If one completion is returned the line should be completed to
  match it (in which the completion may actually only be a longest prefix from
  the list of candiates), otherwise the list of completions should be
  displayed."
  [buffer]
  (if (nil? @st)
    (with-meta [buffer] {:ready false})
    (if-let [kw-name (local-keyword buffer)]
      (local-keyword-completions kw-name)
      (let [top-form? (re-find #"^\s*\(\s*[^()\s]*$" buffer)
            typed-ns  (second (re-find #"\(*(\b[a-zA-Z0-9-.<>*=&?]+)/[a-zA-Z0-9-]*$" buffer))]
        (let [buffer-match-suffix (first (re-find #":?([a-zA-Z0-9-.<>*=&?]*|^\(/)$" buffer))
              completions         (sort (filter (partial is-completion? buffer-match-suffix)
                                                (completion-candidates top-form? typed-ns)))
              common-prefix (longest-common-prefix completions)]
          (with-meta
            (if (or (empty? common-prefix)
                    (= common-prefix buffer-match-suffix))
              (into [buffer-match-suffix] completions)
              [buffer-match-suffix common-prefix])
            {:ready true}))))))
