(ns myfrontend.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require
      [reagent.core :as r]
      [cljs-http.client :as http]
      [cljs.core.async :refer [<!]]
      ))

;; -------------------------
;; Views

(go (let [response 
  (<! (http/get "https://api.github.com/users"
      {:with-credentials? false
          :query-params {"since" 135}})
  )]
  (def *names 
  (map :login (:body response)))))

(defn child [name]
  [:p "Hi, I am " name])

(defonce click-count (r/atom 0))
(defonce github-name (r/atom "username"))

(defn timer-component []
  (let [seconds-elapsed (r/atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div
       "Seconds Elapsed: " @seconds-elapsed])))


       (go (let [response 
        (<! (http/get "https://api.github.com/users"
            {:with-credentials? false
                :query-params {"since" 135}})
        )]
        (def foo (map :login (:body response)))
        ))

(defn github-user-component []
  (let 
    [x 12]
    [:div 
      [:input {
        :type "text" 
        :value @github-name
        :on-change #(reset! github-name (-> % .-target .-value))}]
      [:button.btn-primary {:on-click #(
        (go (let [response 
          (<! (http/get (str "https://api.github.com/users/" @github-name)
              {:with-credentials? false})
          )]
          (reset! click-count (:body response))
          )))}
          "load github users"]
      [:button.btn-danger {:on-click #(        
              (swap! click-count (fn [_] "cleared")))
              }
        "clear"]
      [:br]
      [:img {:src (:avatar_url @click-count) :width "100px" :style {:padding "10px"} }]
      [:table.table 
        [:thead 
        [:tr 
        [:th "Field"]
        [:th "Value"]
        ]
        ]
      [:tbody
        [:tr
        [:td {:width "20%"} "Login name:"]
        [:td (:login @click-count)]
        ]
        
        [:tr
        [:td "Public repos:"]
        [:td (:public_repos @click-count)]
        ]

        [:tr
        [:td "Url:"]
        [:td [:a  {:href (:html_url @click-count)} (:html_url @click-count)]]
        ]
      ]
    ] 
    ]
  ))

(defn childcaller []
  [child "Foo Bar"])

(defn home-page []
  [:div 
  [:h2 "Welcome to Github user finder"]
  [:p "type in the user name an press the button"]
  ; [timer-component]
  [github-user-component]
  ; [:div>p>b "Nested Element"] 

  ])

  

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
