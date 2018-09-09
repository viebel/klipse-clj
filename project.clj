(defproject viebel/klipse-clj "7.4.0"
  :description "Self-hosted clojurescript library"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [org.clojure/tools.reader "1.3.0"]
                 [org.clojure/core.async "0.4.474"]
                 [im.chit/purnam "0.5.2"]
                 [viebel/codemirror-parinfer "0.0.3"]
                 [cljs-http "0.1.42"]
                 [viebel/gadjett "0.5.2"]]
  :clean-targets ^{:protect false} ["resources/public"
                                    "resources/private"]
  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-hiera "0.9.5"]
            [lein-doo "0.1.10"]]
  :resource-paths ["scripts" "src" "resources" "target"]
  :profiles {:dev {:dependencies [[cider/piggieback "0.3.9"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]
                                  [com.bhauman/figwheel-main "0.1.9"]]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}}
  :hiera {:path "deps-graph.png"
          :vertical true
          :show-external false
          :cluster-depth 2
          :trim-ns-prefix true}
  :cljsbuild {:builds {:dev {:source-paths ["src"]
                             :compiler {:output-to "resources/public/main.js"
                                        :output-dir "resources/public"
                                        :verbose false
                                        :optimizations :none}}
                       :test {:source-paths ["src" "test"]
                              :compiler {
                                         :output-to "resources/private/test/klipse.testable.js"
                                         :verbose false
                                         :target :nodejs
                                         :main test.runner
                                         :optimizations :none}}}})
