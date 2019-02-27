(ns ex.core
  (:require [chrepl.load]))

(defn hi [] (println "hi from ex.core"))

(defn -main []
  (hi))
