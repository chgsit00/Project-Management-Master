(ns github-user.component
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require 
        [reagent.core :as r]
        [cljs-http.client :as http]
        [cljs.core.async :refer [<!]]
        ))
        
(defonce click-count (r/atom 0))
(defonce github-name (r/atom "username"))

(defn github-user-component []
    (let 
        [x 12]
        [:div 
        [:h2 "Welcome to Github user finder"]
        [:p "type in the user name an press the button"]
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
          