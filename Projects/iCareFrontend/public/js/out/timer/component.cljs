(ns timer.component
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require 
        [reagent.core :as r]
        [cljs-http.client :as http]
        [cljs.core.async :refer [<!]]
        ))

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