(ns klipse-clj.test-runner-ci
  (:require 
    [cljs.test :refer-macros [run-tests] :refer [report]]
    [figwheel.main.testing :refer [run-tests-async]]
    ;; require all the namespaces that have tests in them
    [klipse-clj.eval-test]
    [klipse-clj.compile-test]))

(defn -main [& args]
  ;; this needs to be the last statement in the main function so that it can
  ;; return the value `[:figwheel.main.async-result/wait 10000]`
  (run-tests-async 10000))
