(ns ^:figwheel-hooks arete.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]))

(defonce selected-gender (atom nil))
(defonce selected-age (atom nil))
(defonce selected-bodyweight (atom nil))

(defn get-app-element []
  (gdom/getElement "app"))

(defn app []
  [:div
   [:h1 "Arete!"]
   [:h3 "How strong you should be?"]

   [:label "Your gender:"]
   [:label
    [:input {:type "radio" :name "gender" :value "male"
             :checked (= @selected-gender "male")
             :on-change #(reset! selected-gender "male")}] " Male"]
   [:label
    [:input {:type "radio" :name "gender" :value "female"
             :checked (= @selected-gender "female")
             :on-change #(reset! selected-gender "female")}] " Female"]

   [:br]
   [:label "Your age:"]
   [:input {:type "number"
            :on-change #(reset! selected-age (-> % .-target .-value))}]

   [:br]
   [:label "Your bodyweight"]
   [:input {:type "number"
            :on-change #(reset! selected-bodyweight (-> % .-target .-value))}]
   [:div
    [:p @selected-gender]]
    [:p @selected-age]
    [:p @selected-bodyweight]
   ])

(defn mount [el]
  (rdom/render [app] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element)
)
