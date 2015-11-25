(ns clojurescript-css-modules-demo.macros)

(defmacro defcomponent [fname args fbody]
  `(defn ~fname ~args (css/get-css ~fbody)))