(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer [run-tests]]
            [cljs-test-display.core] [arete.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote arete.core-test))