(ns klipse-clj.repl)


(defmacro doc
  "Prints documentation for a var or special form given its name"
  [name]
  `(klipse-clj.repl/doc* '~name))