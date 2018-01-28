(ns hello-seymore.core
    (:require 
        [sablono.core :as sab]
        [hello-seymore.components :refer [like-seymore login layout]]))
  
  (defonce app-state (atom { :likes 0 :text "hello wolrd" }))
  
  
  (defn render! []
    (.render js/ReactDOM
            (layout app-state)
            (.getElementById js/document "app"))    
            )
  
  (add-watch app-state :on-change (fn [_ _ _ _] (render!)))
  
  (render!)

