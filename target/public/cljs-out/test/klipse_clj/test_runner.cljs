
(ns klipse-clj.test-runner
  (:require
    [klipse-clj.lang.clojure.io]
    [cljs-test-display.core]
    [cljs.test :refer-macros [run-tests] :refer [report]]
    [figwheel.main.async-result :as async-result]
    [klipse-clj.eval-test]
    [klipse-clj.compile-test]))

;; tests can be asynchronous, we must hook test end
(defmethod report [:cljs.test/default :end-run-tests] [test-data]
  (if (cljs.test/successful? test-data)
    (async-result/send "Tests passed!!")
    (async-result/throw-ex (ex-info "Tests Failed" test-data))))

(run-tests (cljs-test-display.core/init! "app-testing")
           'klipse-clj.eval-test
           'klipse-clj.compile-test)