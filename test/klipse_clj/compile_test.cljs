(ns klipse-clj.compile-test
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.test :refer [is are async deftest use-fixtures]]
    [cljs.core.async :refer [<!]]
    [clojure.string :as string]
    [klipse-clj.lang.clojure.include :refer [reset-state-compile!]]
    [klipse-clj.lang.clojure :refer [str-compile reset-ns-compile!]]))

(use-fixtures :each
              {:before (fn []
                         (reset-state-compile!)
                         (reset-ns-compile!))})

(defn remove-chars [s]
  (try
    (string/replace s #"\n|\s" "")
    (catch js/Object e
      (println "error in remove-chars " s)
      (throw e))))

(defn a= [& args]
  (apply = (map remove-chars args)))

(defn error->clj [[status error]]
  [status {:message (.. error -message)}])

(deftest success
  "compile with success"
  (async done
    (go
      (are [input output]
        (a= (second (<! (str-compile input))) output)
        "(ns my-project.my-ns) (def x 1) (def y 2)" "goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);"
        "(if 2 3) (def x (if 2 3))" "my_project.my_ns.x= (3);"
        "(= 1 2)" "cljs.core._EQ_.call(null,(1),(2));"
        "(ns my-project.my-ns) (def a ::a)" "goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));"
        )
      (done))))

(deftest success2
  "compile with success 2"
  (async done
    (go
      (are [input output]
        (a= (second (<! (str-compile input {:verbose? true}))) output)
        "(def abb ::a)" "cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n")
      (done))))

(deftest test-tagged-literals
  "tagged literals"
  (async done
    (go
      (are [input output]
        (a= (second (<! (str-compile input {:verbose? true}))) output)
        "#js []" "[];"
        "(def c #queue [1])" "cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n"
        "(def b #inst \"2018-09-01\")" "cljs.user.b = new Date(1535760000000);\n"
        "(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")" "cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n")
      (done))))

(deftest static-fn
  "compile with static dispatch (:static-fns true)"
  (async done
         (go (are [input output]
                 (a= (second (<! (str-compile input {:static-fns true}))) output)
               "(= 1 2)" "cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));")
             (done))))

