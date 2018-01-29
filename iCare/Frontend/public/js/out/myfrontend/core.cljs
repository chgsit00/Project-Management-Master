(ns myfrontend.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [github-user.component :refer [github-user-component]]
   [reagent.core :as r]
   [secretary.core :as secretary :refer-macros [defroute]]
   [hello-seymore.components :refer [navi-component content-component]]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]))

;; -------------------------
;; Views

(defn layout []
  [:div {:class "container-fluid"}
   [:div {:class "row content"}
    [:div {:style {:width "200px"} :class "col-sm-2 sidenav"}
     [navi-component]]
    [:div {:class "col-sm-10"}
     [content-component]
     [github-user-component]]]])


(defroute "/users/:id" {:as params}
  (js/console.log (str "User: " (:id params))))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [layout] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
