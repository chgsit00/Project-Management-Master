(ns hello-seymore.components
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require 
        [sablono.core :as sab]
        [cljs-http.client :as http]
        [cljs.core.async :refer [<!]]
        [goog.dom :as dom]
        [goog.events :as events]
        ))

    (go (let [response 
        (<! (http/get "https://api.github.com/users"
            {:with-credentials? false
                :query-params {"since" 135}})
        )]
        (def *names 
        (map :login (:body response)))))

    (def pages '("Dashboard" "Tickets"  "Reports" "Settings" "Eco-Monitor" "Develop Tools" "Info"))
    (def pages-icons '(
        ["Dashboard" "glyphicon-leaf"] 
        ["Eco Monitor" "glyphicon-leaf"] 
        ["Reports" "glyphicon-leaf"] ))

    (defn simple-component []
        [:div
            [:p "I am a component!"]
            [:p.someclass
            "I have " [:strong "bold"]
            [:span {:style {:color "red"}} " and red "] "text."]])

    (defn navi-component [] 
        [:div [
            [:div.text-center 
            [:img {:width "180" :src "assets/logo.jpeg"}]]   
            [:ul {:class "nav nav-pills nav-stacked"}
                (map (fn [x] 
                    (if (= x "Dashboard")
                        [:li.active  [:a {:href "#"} [:span {:class "glyphicon glyphicon-dashboard"}] " " x ]]
                        [:li [:a {:href "#"} x]])) pages  )  
            ]]])

    (defn panel-component [title body panel-type icon]
        [:div.col-sm-3 
            [:div.panel-group [
                [:div {:class (str "panel " panel-type)}
        
                [:div.panel-heading
                        [:div.row [
                            [:div.col-sm-8  [:h4 title]]
                            [:div.col-sm-3 {:style {:font-size "3em"} :class (str "glyphicon " icon)}]                   
                            ]]] 
                [:div.panel-body                 
                    body
                    [:span {:style {:font-size "1.3em"} :class "pull-right glyphicon glyphicon-circle-arrow-right"}]                
                ]]
        ]]]
       
        )

    (defn listen [el type f]
            (let [e (dom/getElement el)]
              (events/listen e type (partial f))))



    (defn content-component [] 
        [:div [

            (simple-component)
            [:br]
            [:h4 [:small "DASHBOARD"]]
            [:hr]
            [:div.row [
                (panel-component "Messages" "View Details" "panel-primary" "glyphicon-envelope")
                (panel-component "Alarms" "0 alarms occured" "panel-danger" "glyphicon glyphicon-warning-sign")
                (panel-component "Tickets" "0 open tickets" "panel-success" "glyphicon glyphicon-wrench")
                (panel-component "Tasks" "2 todo's" "panel-warning" "glyphicon glyphicon-list-alt")
            ]]
            [:h2 "Recent"]
            [:hr]
            ; [:input {:type "button" :value "Click me!"
            ;     :on-click #(swap! *names '("hi" "jo"))}]
            ; [:p (map (fn [x] [:p x]) *names)]
            ; (let [seconds-elapsed (r/atom 0)]
            ;     (fn []
            ;       (js/setTimeout #(swap! seconds-elapsed inc) 1000)
            ;       [:div
            ;        "Seconds Elapsed: " @seconds-elapsed]))
            [:table.table  [
                [:thead    
                    [:tr [
                        [:th  "Time"]
                        [:th  "Type"]
                        [:th  "Info"]
                        ] ]]             
                [:tbody [
                    [:tr.danger  [:td {:width "20%"}  "21.01.18 10:01 pm"] [:td {:width "20%"}  "Alarm (Room 121)"] [:td "Mrs. Schmith is dead ☠️"]]
                    [:tr  [:td "21.01.18 10:01 pm"] [:td "Info"] [:td "It is rainig ⚠️ "] ]
                    [:tr  [:td "21.01.18 10:01 pm"] [:td "Info"] [:td "Breakfast plan changed 🥐"] ]
                    [:tr  [:td "21.01.18 10:01 pm"] [:td "Info"] [:td "Mrs. Smith asked for stripper visit"] ]
                    [:tr  [:td "21.01.18 10:01 pm"] [:td "Info"] [:td "Fat power shacking course canceled - Trainer wants more money "] ]
                    ]
                ]
            ]]

        ]])

(defn layout [data]
    (sab/html [:div {:class "container-fluid"}
        [:div {:class "row content"}
            [:div {:style {:width "200px"} :class "col-sm-2 sidenav"}[
            (navi-component)]]
            [:div {:class "col-sm-10"} [
            (content-component)]]]]))



(defn login [data] 
    (sab/html 
        [:div [
            [:div {:class "jumbotron text-center"} 
                [:h1 "iCare"]
                [:p "we fucking care for people"]
                [:br]          
                [:input {:type "text" :placeholder "user"}]
                [:br]
                [:br]
                [:input {:type "password" :placeholder "password"}]
                [:br]
                [:br]                
                [:button {:type "button" :class "btn btn-primary"} "Login" ]
            ]]]    
        ))

(defn like-seymore [data]
    (sab/html [:div {:class "jumbotron"}
           
            [:h1 "Seymore' popularity: " (:likes @data)
            ]
            [:div [:a {:href "#"
                        :onClick (fn [] 
                        (swap! data update-in [:likes] inc)
                        )}
                    "Thumbs up"]]])
    (listen "mybutton" "click" (js/alert *names))
                    
                    
)

