(ns clojurescript-css-modules-demo.js.css
  (:require [cssModules]
            [clojure.string :as string]
            [cljs.reader :as reader]
            [clojure.walk :refer [prewalk]]))

(enable-console-print!)

(defn ^:private populate-css-module-classes
  "Walks through an element within Reagent's hiccup-style syntax to replace our CSS module syntax with the actual CSS class name(s) from the exposed cssModules foreign-lib."
  [e]
  (prewalk (fn [x]
             (let [key (if (keyword? x) (str (name x)))
                   class-lookup (if (some? key) (re-find #"(?:CSS>)[^\s][a-zA-Z>-]+" key))
                   tree (if (some? key) (rest (string/split class-lookup #">")))
                   class-names (or (if (not (empty? tree)) (apply aget (js* "cssModules") tree)) ".")
                   joined-class-names (string/replace-all class-names #" " ".")
                   new-key (if (some? key) (keyword (string/replace-first key #"(?:CSS>)[^\s][a-zA-Z>-]+" joined-class-names)))
                   ]

               (if (some? key) new-key x)
               )
             ) e)
  )

(defn get-css
  "Helper fn that takes Reagent's hiccup syntax and replaces .CSS>x classes with their respective CSS module name(s).
  Reagent components can either be wrapped with this function, or you can use the defcomponent macro for cleaner syntax."
  [v]
  (into [] (map #(populate-css-module-classes %) v))
  )