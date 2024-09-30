(ns ^:figwheel-hooks arete.core
  (:require [goog.dom :as gdom]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

(def header-infos
  {:disciple "Working out for about 6 months."
   :artisan  "Working out for about 2 years."
   :master   "Working out for approximately 5 years."})

(defonce exercise-map (r/atom nil))

(-> (js/fetch "exercises.json")
    (.then (fn [response] (.json response)))
    (.then
      (fn [json-data]
        (reset! exercise-map (js->clj json-data :keywordize-keys true))))
    (.catch (fn [error] (js/console.error "Error loading Exercises" error))))

(defonce selected-gender (r/atom :male))
(defonce selected-table-type (r/atom :bw))
(defonce selected-weight-unit (r/atom :kg))
(defonce selected-value (r/atom nil))

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

(defn input-with-label [{:keys [label state]}]
  [:div
   [:label label]
   [:input {:type "number"
            :on-change #(reset! state (-> % .-target .-value int))}]])

(defn create-standards-table-by [[gender type value]]
  (->> @exercise-map
       (map
         (fn [[exercise standards]]
           (->> (get-in standards [gender type])
                (sort-by #(Math/abs (- value (:value %))))
                first
                (conj {:exercise exercise})))
         )
       (sort-by #(- (:disciple %)))))

(defn tooltip [tooltiptext] [:span.tooltip [:span.tooltiptext tooltiptext]])

(defn table-component [{:keys [headers data]}]
  [:table
   [:thead
    [:tr (for [header headers]
           [:th (str/capitalize (name header))
            (when-let [tooltip-text (header header-infos)]
              [tooltip tooltip-text])])]]
   [:tbody
    (for [row data]
      [:tr
       (for [header headers]
         [:td (-> (get row header)
                  (str)
                  (str/replace #"[-:]" " ")
                  (str/trim)
                  (str/capitalize))])])]])

(defn app []
  [:div
   [:h1 "Arete!"]
   [:h3 "How strong you are?"]

   [:div#inputs
    [option-selector {:selected-value selected-gender
                      :name "gender"
                      :options [{:value :male :label " Male"}
                                {:value :female :label " Female"}]}]

    [option-selector {:selected-value selected-table-type
                      :name "table type"
                      :options [{:value :bw :label " Bodyweight"}
                                {:value :age :label " Age"}]}]

    [option-selector {:selected-value selected-weight-unit
                      :name "unit"
                      :options [{:value :kg :label " kg"}
                                {:value :lbs :label " lbs"}]}]

    [input-with-label
     {:label (if (= @selected-table-type :age)
               "Your age:"
               (str "Bodyweight (" (name @selected-weight-unit) ") "))
      :state selected-value}]]

   [:h3 "Standards for You"]
   [table-component
    {:headers [:exercise :disciple :artisan :master]
     :data (create-standards-table-by
             [@selected-gender @selected-table-type
              (* @selected-value (@selected-weight-unit {:lbs 1 :kg 2.2}))])}]
   ])

(defn mount [el] (rdom/render [app] el))

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")] (mount el)))

(mount-app-element)

(defn ^:after-load on-reload [] (mount-app-element))
