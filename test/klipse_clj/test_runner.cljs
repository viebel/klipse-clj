(ns klipse-clj.test-runner
  (:require
    [cljs-test-display.core]
    [cljs.test :refer-macros [run-tests] :refer [report]]
    [klipse-clj.eval-test]
    [klipse-clj.compile-test]))

(defn -main []
  (run-tests (cljs-test-display.core/init! "app-testing")
             'klipse-clj.eval-test
             'klipse-clj.compile-test)
  )

(defn ^:dev/after-load-async start [done]
  (-main))

(-main)
