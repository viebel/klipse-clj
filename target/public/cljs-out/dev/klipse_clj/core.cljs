(ns klipse-clj.core
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require [klipse-clj.lang.clojure :refer [str-eval-prom]]
            [cljs.core.async :refer [<!]]))

(defn eval [exp]
  (str-eval-prom exp {:verbose true}))
