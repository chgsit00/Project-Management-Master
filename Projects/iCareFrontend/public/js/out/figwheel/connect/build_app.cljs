(ns figwheel.connect.build-app (:require [figwheel.client] [myfrontend.dev] [myfrontend.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/myfrontend.core.mount-root (apply js/myfrontend.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'myfrontend.core/mount-root' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

