(ns ^:figwheel-always clojurescript-css-modules-demo.js.core
    (:require [cssModules]
              [reagent.core :as r]))

(enable-console-print!)

(println "CSS Modules:" js/cssModules)

(defn header []
      [:div
       {:class-name (aget js/cssModules "header" "container")}
       [:p ".container from header.css"]

       [:div
        {:class-name (aget js/cssModules "header" "logo")}
        [:p ".logo from header.css"]
        ]

       [:div
        {:class-name (aget js/cssModules "header" "site-name")}
        [:p ".site-name from header.css"]
        ]

       ])

(defn mount-root []
      (r/render [header]
                      (.getElementById js/document "app")))

(defn ^:export init []
      (do
        (println "Loading")
        (mount-root)
        ))

(init)

