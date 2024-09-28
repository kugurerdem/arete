(ns ^:figwheel-hooks arete.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [clojure.string :as str]))


(defonce selected-gender (r/atom :male))
(defonce selected-table-type (r/atom :bw))
(defonce selected-age (r/atom nil))
(defonce selected-bodyweight (r/atom nil))


(defn get-app-element []
  (gdom/getElement "app"))

(defn radio-option [{:keys [value label selected-value]}]
  [:label
   [:input {:type "radio" :value value
            :checked (= @selected-value value)
            :on-change #(reset! selected-value value)}]
   label])

(defn option-selector [{:keys [name selected-value options]}]
  [:div
   [:label (str/capitalize name)]
   (for [{:keys [value label]} options]
     [radio-option {:value value
                    :label label
                    :selected-value selected-value
                    :name name
                    :key value}])])

(defn app []
  [:div
   [:h1 "Arete!"]
   [:h3 "How strong you should be?"]

   [option-selector {:selected-value selected-gender
                     :name "gender"
                     :options [{:value :male :label " Male"}
                               {:value :female :label " Female"}]}]

   [option-selector {:selected-value selected-table-type
                     :name "table type"
                     :options [{:value :bw :label " Bodyweight"}
                               {:value :age :label " Age"}]}]

   ; TODO: Get rid of repetition
   ; Conditionally render
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
