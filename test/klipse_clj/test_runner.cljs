(ns klipse-clj.test-runner
  (:require
    [cljs.test :refer [run-tests]]
    [klipse-clj.eval-test]
    [klipse-clj.compile-test]))

(defn start []
  (run-tests 'klipse-clj.eval-test
             'klipse-clj.compile-test))

(defn stop [done]
  (done))

(defn ^:export init []
  (start))
