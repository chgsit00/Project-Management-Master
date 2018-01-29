(ns hello-seymore.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
   [reagent.core :as r]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]

   ))

(def pages '("Dashboard" "Tickets"  "Reports" "Settings" "Eco-Monitor" "Develop Tools" "Info"))
(def pages-icons '(
                   ["Dashboard" "glyphicon-leaf"] 
                   ["Eco Monitor" "glyphicon-leaf"] 
                   ["Reports" "glyphicon-leaf"] ))


(defn navi-component [] 
  [:div 
   [:div.text-center 
    [:img {:width "180" :src "assets/logo.jpeg"}]]   
   [:ul {:class "nav nav-pills nav-stacked"}
    (map (fn [x] 
           (if (= x "Dashboard")
             [:li.active  [:a {:href "#"} [:span.glyphicon.glyphicon-dashboard] " " x ]]
             [:li [:a {:href "#"} x]])) pages  )  
    ]])

(defn panel-component [title body panel-type icon]
  [:div.col-sm-3 
   [:div.panel-group 
    [:div {:class (str "panel " panel-type)}
     [:div.panel-heading
      [:div.row 
       [:div.col-sm-8  [:h4 title]]
       [:div.col-sm-3 {:style {:font-size "3em"} :class (str "glyphicon " icon)}]                   
       ]] 
     [:div.panel-body                 
      body
      [:span {:style {:font-size "1.3em"} :class "pull-right glyphicon glyphicon-circle-arrow-right"}]                
      ]]
    ]]
  )



(defn content-component []  
  [:div 
   [:br]
   [:h4 [:small "DASHBOARD"]]
   [:hr]
   [:div.row 
    (panel-component "Messages" "View Details" "panel-primary" "glyphicon-envelope")
    (panel-component "Alarms" "0 alarms occured" "panel-danger" "glyphicon glyphicon-warning-sign")
    (panel-component "Tickets" "0 open tickets" "panel-success" "glyphicon glyphicon-wrench")
    (panel-component "Tasks" "2 todo's" "panel-warning" "glyphicon glyphicon-list-alt")
    ]
   [:h2 "Recent"]
   [:hr]
   [:table.table  
    [:thead    
     [:tr 
      [:th  "Time"]
      [:th  "Type"]
      [:th  "Info"]
      ]]             
    [:tbody 
     [:tr.danger  [:td {:width "20%"}  "21.01.18 10:01 pm"] [:td {:width "20%"}  "Alarm (Room 121)"] [:td "Mrs. Schmith is dead ☠️"]]
     [:tr  [:td "21.01.18 10:01 pm"] [:td "Info"] [:td "It is rainig ⚠️ "] ]
     [:tr  [:td "21.01.18 10:01 pm"] [:td "Info"] [:td "Breakfast plan changed 🥐"] ]
     [:tr  [:td "21.01.18 10:01 pm"] [:td "Info"] [:td "Mrs. Smith asked for stripper visit"] ]
     [:tr  [:td "21.01.18 10:01 pm"] [:td "Info"] [:td "Fat power shacking course canceled - Trainer wants more money "] ]                  
     ]
    ]
   ]
  )





