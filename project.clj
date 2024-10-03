(defproject viebel/klipse-clj "10.2.0"
  :description "Self-hosted clojurescript library"
  :license "GPL-3.0"
  :url "https://github.com/viebel/klipse-clj"
  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-hiera "0.9.5"]
            [lein-tools-deps "0.4.1" :exclusions [commons-logging org.slf4j/slf4j-api]]]
  :pedantic? :abort
  :hiera {:path "deps-graph.png"
          :vertical true
          :show-external false
          :cluster-depth 2
          :trim-ns-prefix true})
