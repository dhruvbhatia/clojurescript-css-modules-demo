(ns ^:figwheel-always clojurescript-css-modules-demo.js.core
  (:require [cssModules]
            [reagent.core :as r]
            [clojure.string :as string]
            [cljs.reader :as reader]
            [clojure.walk :refer [prewalk]]
            ))

(enable-console-print!)

(println "CSS Modules:" js/cssModules)

(defn ^:private populate-css-module-classes [e]
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
  "Helper fn that takes Reagent's hiccup syntax and replaces .CSS>x classes with their respective CSS module name(s). See usage in header below."
  [v]
  (into [] (map #(populate-css-module-classes %) v))
  )

(defn header []
  (get-css
    ; we can wrap out reagent templates with get-css and use the syntax below to lookup/replace with the correct css classes
    [:div.CSS>header>container
     ;alternatively, you can use the below and lookup the cssModules object directly
     ;{:class-name (aget js/cssModules "header" "container")}
     [:p ".container from header.css"]

     [:div.CSS>header>logo
      ;{:class-name (aget js/cssModules "header" "logo")}
      [:p ".logo from header.css"]
      ]

     [:div.CSS>header>site-name
      ;{:class-name (aget js/cssModules "header" "site-name")}
      [:p ".site-name from header.css"]
      ]

     ]
    )
  )

(defn mount-root []
  (r/render [header]
            (.getElementById js/document "app")))

(defn ^:export init []
  (do
    (println "Loading")
    (mount-root)
    ))

(init)