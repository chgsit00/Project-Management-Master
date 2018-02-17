(ns greeting.component
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require 
        [reagent.core :as r]
        [cljs-http.client :as http]
        [cljs.core.async :refer [<!]]
        ))
        
(defonce json-response (r/atom 0))

(defn greeting-component []
    (let 
        [x 12]
        [:div 
        [:h2 "Get Greeting from Java REST Endpoint"]
        [:button.btn-primary {:on-click #(
            (go (let [response 
            (<! (http/get "http://localhost:8080/greeting"
                {:with-credentials? false})
            )]
            (reset! json-response (:body response))
            )))}
            "Call Endpoint"]
        [:button.btn-danger {:on-click #(        
                (swap! json-response (fn [_] "cleared")))
                }
            "clear"]
        [:br]
        [:table.table 
            [:thead 
            [:tr 
            [:th "Field"]
            [:th "Value"]
            ]
            ]
        [:tbody
            [:tr
            [:td {:width "20%"} "ID:"]
            [:td (:id @json-response)]
            ]
            
            [:tr
            [:td "Content:"]
            [:td (:content @json-response)]
            ]
        ]
        ] 
        ]
    ))
          