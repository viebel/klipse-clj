(ns klipse-clj.macros)

(defmacro dbg [x]
  `(let [x# ~x]
     (println (str '~x ": ") x#)
     x#))

(defmacro inferred-type
  "Returns the inferred type tag for the supplied form."
  [form]
  `'~(cljs.analyzer/infer-tag &env
                              (cljs.analyzer/analyze &env form)))