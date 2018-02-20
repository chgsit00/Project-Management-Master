(ns ^:figwheel-no-load myfrontend.dev
  (:require
    [myfrontend.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
