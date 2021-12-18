(ns klipse-clj.lang.clojure.io
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.js :as cljs]
    [clojure.string :as s :refer [join split lower-case]]
    [klipse-clj.repl :refer [def-a-var]]
    [cljs-http.client :as http]
    [cljs-http.util :refer [transit-decode]]
    [clojure.core.async :refer [chan <! put!]]
    [applied-science.js-interop :as j]
    [shadow.cljs.bootstrap.browser :as boot]))

(def ^:dynamic *klipse-settings* {})
(def ^:dynamic *verbose?* true)
(def ^:dynamic *cache-buster?* false)

(defn edn [json]
  (-> json
      clj->js
      js/JSON.stringify
      (transit-decode :json nil)))

(def macro-suffixes [".clj" ".cljc"])
(def cljs-suffixes [".cljs" ".cljc"])

(defmulti load-ns
  "
  Each runtime environment provides a different way to load a library.
  Received two arguments - a map and a callback function:
  The map will have the following keys:

    :name   - the name of the library (a symbol)
    :macros - modifier signaling a macros namespace load
    :path   - munged relative library path (a string)

    It is up to the implementor to correctly resolve the corresponding .cljs,
    .cljc, or .js resource (the order must be respected).
    If :macros is true, resolution should only consider .clj or .cljc resources (the order must be respected).
  Upon resolution the callback should be invoked with a map containing the following keys:

    :lang       - the language, :clj or :js
    :source     - the source of the library (a string)
    :file       - optional, the file path, it will be added to AST's :file keyword (but not in :meta)
    :cache      - optional, if a :clj namespace has been precompiled to :js, can give an analysis cache for faster loads.
    :source-map - optional, if a :clj namespace has been precompiled to :js, can give a V3 source map JSON

    If the resource could not be resolved, the callback should be invoked with
    nil."
  (fn [_ {:keys [name macros path]} _src-cb]
                    [name macros path]
                  (cond
                    macros :macro
                    (re-matches #"^goog\..*" (str name)) :goog
                    (re-matches #".*\.gist-.*" (str name)) :gist
                    :else :cljs)))

;https://github.com/clojure/clojurescript/blob/master/src/test/self/self_parity/test.cljs#L166
;Indicates namespaces that we either don't need to load,
;shouldn't load, or cannot load (owing to unresolved
;                                          technical issues).

(def skip-ns-macros #{'cljs.core
                      'cljs.pprint
                      'cljs.repl
                      'cljs.env.macros
                      'cljs.analyzer.macros
                      'cljs.js
                      'cljs.compiler.macros})

(def the-ns-map 
  '{cljs.test "https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs/"
    clojure.template "https://raw.githubusercontent.com/viebel/clojure/master/src/clj/"})

(def skip-ns-cljs #{'cljs.core
                    'cljs.env
                    'cljs.source-map
;                    'cljs.tools.reader.reader-types
 ;                   'cljs.tools.reader
                    })

(defn filename-of [s]
  (if *cache-buster?*
    (str s "?" (rand))
    s))

(defn try-to-load-ns
  "Tries to load one namespace from filenames.
  Will call the src-cb upon first success.
  If can-recover? is false, will call src-cb with nil if it cannot load any namespace.
  Returns :success if a nampespace was loaded otherwise, returns nil.
  "
  [filenames lang src-key src-cb & {:keys [transform can-recover?] :or {transform identity can-recover? false}}]
  (when *verbose?* (js/console.info "try-to-load-ns " filenames (str lang) (str src-key)))
  (go
    (if
      (loop [filenames filenames]
        (when (seq filenames)
          (let [filename (first filenames)
                {:keys [status body]} (<! (http/get (filename-of filename) {:with-credentials? false}))]
            (if (= 200 status)
              (do
                (when *verbose?*
                  (js/console.info "file loaded successfully" (str lang) (str src-key) filename))
                (src-cb {:lang lang
                         src-key (transform body)
                         :file filename})
                  :success)
              (recur (rest filenames))))))
      :success
      (do (when-not can-recover?
            (src-cb nil))
          false))))

(defn external-libs-files
  "returns a list of files provided list of external-libs and suffixes"
  [external-libs suffixes path]
  (for [lib external-libs
        suffix suffixes]
    (str lib "/" path suffix)))



(defn name->cached-resource [name]
  (-> (str (munge name))
      (s/replace #"\." "_SLASH_")))

(defn cached-ns-root []
  #_"http://localhost:8080/cache2" (:cached_ns_root *klipse-settings* "https://viebel.github.io/cljs-analysis-cache/cache/"))

(defn boot-init [compile-state-ref]
  (let [c (chan)]
    (boot/init compile-state-ref
               {:path  "/bootstrap"}
               (fn []
                 (println "Bootstrapped!")
                 (put! c :ok)))
    c))

(defn load-ns-from-cache [name src-cb macro? on-failure-cb]
  (when *verbose?* (js/console.info "load-ns-from-cache:" (str name) "macro: " macro?))
  (go
    (let [nn (name->cached-resource name)
          suffix (if macro? "$macros" "")
          root (str (cached-ns-root) "/")
          src-filename  (str root nn suffix ".js")
          cache-filename (str root nn suffix ".cache.json")
          src (<! (http/get (filename-of src-filename) {:with-credentials? false}))
          cache (<! (http/get (filename-of cache-filename) {:with-credentials? false}))]
      (if (every? #(= 200 %) [(:status cache) (:status src)])
        (src-cb {:lang :js :cache (edn (:body cache)) :source (:body src)})
        (on-failure-cb)))))


(defn load-ns-from-file [st ns-sym filename]
  (when *verbose?* (js/console.info "load-ns-from-file" filename))
  (go
    (let [{:keys [body status]} (<! (http/get filename {:with-credentials? false}))]
      (if (= 200 status)
        (let [data (edn body)]
          (cljs/load-analysis-cache! st ns-sym data))
        (println "load-ns-from-file: cannot fetch" filename)))))

(defn cached-macro-ns-regexp []
  (:clojure_cached_macro_ns_regexp *klipse-settings* #".*" #_#"cljs.core.specs.alpha|klipse-clj\..*|klipse-clj\.repl|cljs\.reader|cljs\.core\.[async|match].*|clojure\.math\.macros|gadjett\.core|cljs\.test|cljs.tools.reader.*|clojure.test.check.*|reagent\..*|om\..*|cljs\.spec.*|cljs-time\..*|re-frame\..*|net\.cgrand\.macrovich|reagent-forms\..*|ajax\.macros|poppea|expound\..*"))

(defn cached-macro-ns? [name]
  (re-matches (cached-macro-ns-regexp) (str name)))

(defn cached-ns-regexp []
  (:clojure_cached_ns_regexp *klipse-settings* #".*" #_#"cljs.core.specs.alpha|cljs\.stacktrace|cljs\.core\.[async|match].*|cljs\.spec.*|clojure.math\.combinatorics|clojure.test.check.*|reagent\..*|om\..*|clojure\.data|cljs.tools.reader.*|cljs-time\..*|re-frame\..*|day8\.re-frame\..*|reagent-forms\..*|re-frisk\..*|re-frisk-shell\..*|datafrisk\..*|ajax\..*|cljs\.tools\.reader\..*|cljs-bean\..*|expound\..*"))


(defn cached-cljs-ns? [name]
  (re-matches (cached-ns-regexp) (str name)))

(defmethod load-ns :macro [external-libs {:keys [name path try-cache?] :as args  :or {try-cache? true}} src-cb-original]
  (let [load-ns-skip-cache #(load-ns external-libs (assoc args :try-cache? false) src-cb-original)
        src-cb (if (not= name 'cljs.spec.test.alpha)
                 src-cb-original
                 (fn [& args]
                   (when *verbose?*
                     (js/console.info "src-cb: patch cljs.spec.test.alpha/eval"))
                   (apply src-cb-original args)
                   (def-a-var 'cljs.spec.test.alpha$macros 'eval 'identity) ; The spec.test.alpha/instrument macro uses eval, which doesn’t exist in ClojureScript. It seems that `identity` as eval works
                   ))]
    (when *verbose?* (js/console.info "load-ns :macro :" (str name)))
    (cond
      (skip-ns-macros name) (do
                              (when *verbose?* (js/console.info "load-ns :macro skipping:" (str name)))
                              (src-cb {:lang :clj :source ""}))
      (and try-cache? (cached-macro-ns? name)) (do
                                                 (when *verbose?* (js/console.info "load-ns :macro cached:" (str name)))
                                                 (load-ns-from-cache name src-cb true load-ns-skip-cache))
      (the-ns-map name) (do
                          (when *verbose?* (js/console.info "load-ns :macro known:" (str name)))
                          (let [prefix (str (the-ns-map name) "/" path)
                                filenames (map (partial str prefix) macro-suffixes)]
                            (try-to-load-ns filenames :clj :source src-cb)))
      :else (do
              (when *verbose?* (js/console.info "load-ns :macro external-libs:" (str name)))
              (let [filenames (external-libs-files external-libs macro-suffixes path)]
                (try-to-load-ns filenames :clj :source src-cb))))))

(defmethod load-ns :gist [_external-libs {:keys [path]} src-cb]
  (let [path (s/replace path #"gist_" "")
        filenames (map #(str "https://gist.githubusercontent.com/" path %) cljs-suffixes)]
    (try-to-load-ns filenames :clj :source src-cb)))

(defn bundled-ns-ignore-regexp []
  (:clojure_bundled_ns_ignore_regexp *klipse-settings*))

(defn custom-bundled-ns-ignore? [name]
  (when-let [regexp (bundled-ns-ignore-regexp)]
    (re-matches regexp (str name))))

(defn buggy-bundled-ns-ignore? [name]
  ;; for some reason, during the load of reagent namespaces, a `reagent.dom` object is created - but it's not the real `reagent.dom` namespace
  ;; cljs.core.async should be loaded from cache - as we use andare for self-host core.async
  (re-matches #".*reagent.*|cljs.core.async.*|cljs.core.specs.alpha" (str name)))

(defn bundled-ns?
  "Checks whether a namespace is present at run-time"
  [name]
  (if (or (buggy-bundled-ns-ignore? name)
          (custom-bundled-ns-ignore? name))
    false
    (not (nil? (j/call js/goog :getObjectByName (str (munge name))))))) ; (:require goog breaks the build see http://dev.clojure.org/jira/browse/CLJS-1677

(defn cljsjs? [name]
  (re-matches #"cljsjs\..*" (str name)))

(defn cljsjs-libname [name]
  (as-> (str name) $
    (re-matches #"cljsjs\.(.*)" $)
    (second $)
    (s/replace $ #"\." "-")))

(defn bundled-cljsjs-ns?
  "some cljsjs packages are already loaded e.g react in klipse app"
  [name]
  (or
   (and (= name 'cljsjs.react) (j/get js/window :React))
   (and (= name 'cljsjs.react.dom.server) (j/get js/window :ReactDOMServer))
   (and (= name 'cljsjs.react.dom) (j/get js/window :ReactDOM))))

(defn try-to-load-cljsjs-ns
  "Try to load the js file corresponding to a cljsjs package.
  For that, we have to convert the package name into a full path - hosted on this git repo: https://github.com/viebel/cljsjs-hosted
  "
  [name src-cb]
  (when *verbose?* (js/console.log "load-ns :cljs try-to-load-cljsjs-ns" (str name)))
  (if (bundled-cljsjs-ns? name)
    (do
      (when *verbose?*
        (js/console.info "load-ns bundled-cljsjs-ns" (str name)))
      (src-cb {:lang :js :source ""}))
    (let [root-path "https://viebel.github.io/cljsjs-hosted/cljsjs/"
          lib-name (cljsjs-libname name)
          full-names [(str root-path lib-name "/production/" lib-name ".min.inc.js")
                      (str root-path "/production/" lib-name ".min.inc.js")
                      (str root-path lib-name "/development/" lib-name ".inc.js")
                      (str root-path "/development/" lib-name ".inc.js")]]
      (try-to-load-ns full-names :js :source src-cb))))

(comment
  (some? (j/call js/goog :getObjectByName (str (munge "goog")))))

(defn ignore-ns? [name]
  (or (some? (j/call js/goog :getObjectByName (str (munge name))))
      (skip-ns-cljs name)))

(defmethod load-ns :cljs [external-libs {:keys [name path try-cache?] :as args :or {try-cache? true}} src-cb]
  (def path path)
  (def my-name name)
  (when *verbose?* (js/console.info "load-ns :cljs :" (str name) "external-libs: " external-libs))
  (let [load-ns-skip-cache #(load-ns external-libs (assoc args :try-cache? false) src-cb)]
    (cond
      (ignore-ns? name) (do
                          (when *verbose?* (js/console.info "load-ns :cljs skipping" (str name)))
                          (src-cb {:lang :js :source ""}))
      (and try-cache? (cached-cljs-ns? name)) (load-ns-from-cache name src-cb false load-ns-skip-cache)
      (cljsjs? name) (try-to-load-cljsjs-ns name src-cb)
      (the-ns-map name) (let [prefix (str (the-ns-map name) "/" path)
                              filenames (map (partial str prefix) cljs-suffixes)]
                          (when *verbose?* (js/console.info "load-ns :cljs from external libs" (str name)))
                          (go
                            (when-not
                              (<! (try-to-load-ns filenames :clj :source src-cb :can-recover? true))
                              (try-to-load-ns (str prefix ".js") :js :source src-cb))))
      (seq external-libs) (let [filenames (external-libs-files external-libs cljs-suffixes path)]
                            (go
                              (when-not
                                (<! (try-to-load-ns filenames :clj :source src-cb :can-recover? true))
                                (let [filenames (external-libs-files external-libs [".js"] path)]
                                  (try-to-load-ns filenames :js :source src-cb)))))
      :else (do
              (when *verbose?* (js/console.info "load-ns :cljs nothing can be done" (str name)))
              (src-cb nil)))))

(defn fix-goog-path [path]; https://github.com/oakes/eval-soup/blob/master/src/eval_soup/core.cljs
  ; goog/string -> goog/string/string
  ; goog/string/StringBuffer -> goog/string/stringbuffer
  (let [parts (split path #"/")
        last-part (last parts)
        new-parts (concat
                    (butlast parts)
                    (if (= last-part (lower-case last-part))
                      [last-part last-part]
                      [(lower-case last-part)]))]
    (join "/" new-parts)))

(defn simple-goog-path [path]
  ; goog/date/interval -> goog/date/date
  (let [parts (split path #"/")
        butlast-parts (butlast parts)
        new-parts (concat butlast-parts [(last butlast-parts)])]
    (join "/" new-parts)))

(defn another-goog-path [path]
  ; goog/string/format -> goog/string/stringformat
  (let [parts (split path #"/")
        _last-part (last parts)
        new-parts (concat
                    (butlast parts)
                    [(join "" (take-last 2 parts))])]
    (join "/" new-parts)))

(defmethod load-ns :goog [_ {:keys [name path]} src-cb]
  (cond
    (j/call js/goog :getObjectByName (str name)) (src-cb {:lang :js :source ""}); isProvided and nameToPath don't work with :optimizations :simple or :whitespace
    :else (let [closure-github-path "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/"
                filenames (map #(str closure-github-path % ".js") ((juxt fix-goog-path identity another-goog-path simple-goog-path) path))]
            (try-to-load-ns filenames :js :source src-cb))))


