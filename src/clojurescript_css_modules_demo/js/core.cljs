(ns ^:figwheel-always clojurescript-css-modules-demo.js.core
  (:require [cssModules]
            [reagent.core :as r]
            [clojurescript-css-modules-demo.css :as css :refer [get-css]]
            )
  (:require-macros [clojurescript-css-modules-demo.macros :refer [defcomponent]]))

(enable-console-print!)

(println "CSS Modules:" js/cssModules)

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

;; alternatively, you can use macros from macros namespace which 
;; wraps your component function with get-css function
(defcomponent body []
    [:div.CSS>body>container
      [:h1 ".container from body.css"]

      [:article.CSS>body>article
        [:p ".article from body.css"]]

      [:div.CSS>body>footer ".footer from header.css"]]]
    )

(defcomponent root []
  [header]
  [body]
  )

(defn mount-root []
  (r/render [css-header]
            (.getElementById js/document "app")))

(defn ^:export init []
  (do
    (println "Loading")
    (mount-root)
    ))

(init)