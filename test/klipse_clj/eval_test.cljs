(ns klipse-clj.eval-test
  (:require-macros
    [gadjett.core :refer [dbg]]
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.test :refer [deftest is are async use-fixtures]]
    [klipse-clj.lang.clojure.io :refer [*klipse-settings* *verbose?*]]
    [klipse-clj.repl :refer [reset-state-eval! reset-ns-eval!]]
    [cljs.core.async :refer [<!]]
    [clojure.string :as string]
    [klipse-clj.lang.clojure :refer [read-string create-state-eval the-eval result-as-str split-expressions]]))

(set! *klipse-settings* {;:cached_ns_root "http://localhost:8080/"
                         ;:bundled_ns_root "cljs-out/dev/"
                         :verbose true})

(set! *verbose?* true)

(defn remove-chars [s]
  (if (string? s)
    (string/replace s #"\n|\s" "")
    s))

(use-fixtures :each
              {:before #(async done
                          (go (reset-state-eval!)
                              (reset-ns-eval!)
                              (<! (create-state-eval))
                              (done)))})

(defn a= [& args]
  (apply = (map remove-chars args)))

(defn b= [[status-a a] [status-b b]]
  (and (= status-a status-b)
       (a= a b)))

(deftest doc-test
  "doc macro"
  (async done
    (go (are [input-clj output-clj]
          (b= (str (second (<! (the-eval input-clj)))) output-clj)
          "(with-out-str (doc map))" "-------------------------\ncljs.core/map\n([f] [f coll] [f c1 c2] [f c1 c2 c3] [f c1 c2 c3 & colls])\n  Returns a lazy sequence consisting of the result of applying f to\n  the set of first items of each coll, followed by applying f to the\n  set of second items in each coll, until any one of the colls is\n  exhausted.  Any remaining items in other colls are ignored. Function\n  f should accept number-of-colls arguments. Returns a transducer when\n  no collection is provided.\n"
          "(with-out-str (doc when))" "-------------------------\ncljs.core/when\n([test & body])\nMacro\n  Evaluates test. If logical true, evaluates body in an implicit do.\n"
          "(require 'clojure.set) (with-out-str (doc clojure.set))" "-------------------------\nclojure.set\n  Set operations such as union/intersection.\n"
          ;"(ns aa.bb \"great ns\") (with-out-str (doc aa.bb)) " "bb"
          )
        (done))))

(deftest dbg-test
  "dbg macro"
  (async done
    (go (are [input-clj output-clj]
          (b= (str (second (<! (the-eval input-clj)))) output-clj)
          "(with-out-str (dbg (map inc [1 2 3])))" "(map inc [1 2 3]):  (2 3 4)\n"
          "(dbg (map inc [1 2 3]))" "(2 3 4)"
          )
        (done))))

(deftest test-eval-error
  "eval with expected failures"
  (async done
    (go
      (are [input-clj]
        (= :error (first (<! (the-eval input-clj))))
        "(+ 1 2"
        "(a)")
      (done))))

(deftest test-eval-2
  "eval with several expressions"
  (async done
    (go (are [input-clj output-clj]
          (b= (<! (the-eval input-clj)) [:ok output-clj])
          "(if (> 100 10) 1 2)" 1
          "(ns aa.cc) (def x 12)
          (+ x 5)" 17
          "(+ 1 2)" 3
          "(+ 1 2)\n\n   \n" 3
          "(if 1 2 3)" 2
          "(map inc [1 2 3])" '(2 3 4)
          "(defn append-cyclic[lst a] (concat (rest lst) [a]))
          (-> (repeat 3 nil)
              (append-cyclic  9)
              (append-cyclic  10)
              (append-cyclic  11)
              (append-cyclic  12))" '(10 11 12)
          "(ns foo.core) ::aa" :foo.core/aa
          "(ns my.aa) (+ 1 2)" 3
          "`(1 2)" '(1 2)
          "(ns my.bb) (def a 1) `(1 a)" '(1 my.bb/a))
        (done))))



(deftest test-eval-macros
    "eval with macros"
    (async done
      (go (are [input-clj output-clj]
            (b= (<! (the-eval input-clj)) [:ok output-clj])

            "(ns my.hello$macros)
            (defmacro hello
            [x]
            `(inc ~x))
            (my.hello/hello 12)" 13
            )
          (done))))

(deftest test-eval-3
  "eval with namespaces"
  (async done
    (go (are [input-clj output-clj]
          (b= (<! (the-eval input-clj)) [:ok output-clj])
          "(ns my-ns.core (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")" false)
        (done))))


(deftest test-eval-spec-alpha
  "eval with namespaces"
  (async done
         (go (are [input-clj output-clj]
                 (b= (<! (the-eval input-clj)) [:ok output-clj])
               "(ns your.spec)
          (require '[clojure.spec.alpha :as s])" nil
               "(s/def ::x integer?)" :your.spec/x
               "(require '[clojure.spec.alpha :as s]
             '[cljs.spec.test.alpha :as stest]
             '[clojure.spec.gen.alpha :as gen])" nil
               "(defn foo [x] x)
          (s/fdef foo :args (s/cat :x ::x)
           :ret string?)
           (s/describe (s/get-spec `foo))" '(fspec :args (cat :x :your.spec/x) :ret string? :fn nil)
               "(s/describe (:args (s/get-spec `foo)))" '(cat :x :your.spec/x)
               "(stest/instrument `foo)" ['your.spec/foo]
               "(foo 1)" 1
               "(stest/unstrument `foo)" ['your.spec/foo]
               "(foo :a)" :a
               )
             (done))))

(deftest test-eval-require-cljsjs
  "eval with namespaces"
  (async done
         (go (are [input-clj output-clj]
                 (b= (<! (the-eval input-clj)) [:ok output-clj])
               "(ns my.ns)
          (require '[cljsjs.react])" nil

               )
             (done))))


(deftest test-eval-spec-errors
  "eval with expected failures related to spec"
  (async done
         (go
           (are [input-clj]
               (= :error (first (<! (the-eval input-clj))))
             "(require '[clojure.spec.alpha :as s]
             '[cljs.spec.test.alpha :as stest]
             '[clojure.spec.gen.alpha :as gen])
         (defn foo [x] x)
        (s/fdef foo :args (s/cat :x ::x)
                :ret string?)
         (stest/instrument `foo) (foo :a)")
           (done))))

(deftest test-eval-4
  "eval with types"
  (async done
    (go (are [input-clj output-clj]
          (a= (str (second (<! (the-eval input-clj)))) output-clj)
          "(type 1)" "function Number() {[native code]}")
        (done))))


(deftest test-eval-macro-chars
  "tagged literals"
  (async done
    (go (are [input-clj type-res]
          (= (type (second (<! (the-eval input-clj)))) type-res)
          "#queue [1]" cljs.core/PersistentQueue
          "#js []" js/Array
          "#inst \"2018-09-08\"" js/Date
          "#uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\"" cljs.core/UUID)
        (done))))



(deftest test-eval-functions
  "eval with functions"
  (async done
    (go (are [input-clj output-clj]
          (a= (str (second (<! (the-eval input-clj)))) output-clj)
          "(ns my.func) (defn foo [] 1)" "#'my.func/foo"
          )
        (done))))

(deftest test-eval-vars
  "eval with vars"
  (async done
    (go (are [input-clj output-clj]
          (b= (str (second (<! (the-eval input-clj)))) output-clj)
          "(ns my.vars) (def a 1)" "#'my.vars/a"
          "(ns my.vars2) (def b 1) b" "1"
          )
        (done))))

(deftest eval-in-ns
  "eval properly code that is related to ns"
  (async done
    (go (are [input-clj output-clj]
          (a= (second (<! (the-eval input-clj))) output-clj)
          "(ns my.foo) ::foo" :my.foo/foo

          )
        (done))))

(deftest split-expressions-test
  (are [in out]
    (= out (split-expressions in))
    "(+ 1 2)" ["(+ 1 2)"]
    "(+ 1 2)    (+ 2 3)" ["(+ 1 2)" "(+ 2 3)"]
    ":foo" [":foo"]
    "::foo" ["::foo"]))

(deftest read-string-test
  (are [in out]
      (= out (read-string in))
      "(def a 1)" '(def a 1)
      "(def a (atom 1))" '(def a (atom 1))
      "(def a @(atom 1))" '(def a @(atom 1))))


;;;; DISPLAY


(deftest display-evaluation-and-beautify
  "displays evaluation properly and beautify it"
  (async done
    (go (are [in out]
          (a= (second (result-as-str {:success? true :value in} {:beautify-strings true :print-length 2})) out)
          nil "nil"
          "\n1" "\n1"
          "ab" "ab"
          [1 2] "[1 2]"
          [1 2 3 4 5] "[1 2 ...]"
          "abcdef" "abcdef"
          (range) "(0 1 ...)")
        (done))))

(deftest display-evaluation-and-crop
  "displays evaluation properly and crop it"
  (async done
    (go (are [in out]
          (a= (second (result-as-str {:success? true :value in} {:print-length 2})) out)
          nil "nil"
          "\n1" "\"\\n1\""
          "ab" "\"ab\""
          [1 2] "[1 2]"
          [1 2 3 4 5] "[1 2 ...]"
          "abcdef" "\"abcdef\""                             ; strings are not cropped
          (range) "(0 1 ...)")
        (done))))

