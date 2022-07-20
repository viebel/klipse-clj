(ns klipse-clj.core
  (:refer-clojure :exclude [eval])
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require [klipse-clj.lang.clojure :refer [str-eval-prom]]
            [cljs.core.async :refer [<!]]))

(defn eval 
  "Returns a promise with the result of the evaluation of exp"
  [exp]
  (str-eval-prom exp {:verbose true}))
