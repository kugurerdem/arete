(ns ^:figwheel-hooks arete.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r]
   [reagent.dom :as rdom]))

(defonce selected-gender (r/atom :male))
(defonce selected-table-type (r/atom :bw))
(defonce selected-age (r/atom nil))
(defonce selected-bodyweight (r/atom nil))


(defn get-app-element []
  (gdom/getElement "app"))

(defn app []
  [:div
   [:h1 "Arete!"]
   [:h3 "How strong you should be?"]

   [:label "Your gender:"]
   [:label
    [:input {:type "radio" :name "gender" :value "male"
             :checked (= @selected-gender :male)
             :on-change #(reset! selected-gender :male)}] " Male"]
   [:label
    [:input {:type "radio" :name "gender" :value "female"
             :checked (= @selected-gender :female)
             :on-change #(reset! selected-gender :female)}] " Female"]

   [:br]

   [:label "Table type:"]
   [:label
    [:input {:type "radio" :name "table-type" :value "body-weight"
             :checked (= @selected-table-type :bw)
             :on-change #(reset! selected-table-type :bw)}] " Bodyweight"]
   [:label
    [:input {:type "radio" :name "table-type" :value "age"
             :checked (= @selected-table-type :age)
             :on-change #(reset! selected-table-type :age)}] " Age"]

   [:br]
   [:label "Your age:"]
   [:input {:type "number"
            :on-change #(reset! selected-age (-> %
                                                 .-target
                                                 .-value
                                                 int))}]

   [:br]
   [:label "Your bodyweight"]
   [:input {:type "number"
            :on-change #(reset! selected-bodyweight (-> %
                                                        .-target
                                                        .-value
                                                        int))}]
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
