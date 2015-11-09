(ns ^:figwheel-always clojurescript-css-modules-demo.js.core
  (:require [cssModules]
            [reagent.core :as r]
            [clojure.string :as string]
            [cljs.reader :as reader]
            ))

(enable-console-print!)

(println "CSS Modules:" js/cssModules)

(defn get-css
  "Helper fn that takes Reagent's hiccup syntax and replaces .CSS>x classes with their respective CSS module name(s). See usage in header below."
  [i]
  (let [stringified (str i)
        class-lookup (re-find #"(?:CSS>)[^\s][a-zA-Z>-]+" stringified)
        tree (rest (string/split class-lookup #">"))
        class-names (apply aget (js* "cssModules") tree)
        joined-class-names (string/replace-all class-names #" " ".")
        output (reader/read-string (string/replace-first stringified #"(?:CSS>)[^\s][a-zA-Z>-]+" joined-class-names))
        finished? (nil? (re-find #"(?:CSS>)[^\s][a-zA-Z>-]+" (str output)))]

    (if finished?
      output
      (recur output))))

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