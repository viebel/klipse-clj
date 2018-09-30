(ns klipse-clj.macros)

(defmacro dbg [x]
  `(let [x# ~x]
     (println (str '~x ": ") x#)
     x#))