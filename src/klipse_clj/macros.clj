(ns klipse-clj.macros)

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defmacro dbg [x]
  `(let [x# ~x]
     (println (str '~x ": ") x#)
     x#))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defmacro inferred-type
  "Returns the inferred type tag for the supplied form."
  [form]
  `'~#_{:clj-kondo/ignore [:unresolved-namespace]}
     (cljs.analyzer/infer-tag &env
                              #_{:clj-kondo/ignore [:unresolved-namespace]}
                              (cljs.analyzer/analyze &env form)))
