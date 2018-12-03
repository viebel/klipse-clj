(defproject viebel/klipse-clj "7.6.4"
  :description "Self-hosted clojurescript library"
  :license "GPL-3.0"
  :url "https://github.com/viebel/klipse-clj"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [org.clojure/tools.reader "1.3.0"]
                 [org.clojure/core.async "0.4.474"]
                 [im.chit/purnam "0.5.2"]
                 [viebel/codemirror-parinfer "0.0.3"]
                 [cljs-http "0.1.42"]
                 [viebel/gadjett "0.5.2"]
                 [com.bhauman/figwheel-main "0.1.9-SNAPSHOT"]]
  :clean-targets ^{:protect false} ["resources/public"
                                    "resources/private"]
  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-hiera "0.9.5"]
            [lein-tools-deps "0.4.1"]]
  :hiera {:path "deps-graph.png"
          :vertical true
          :show-external false
          :cluster-depth 2
          :trim-ns-prefix true})
