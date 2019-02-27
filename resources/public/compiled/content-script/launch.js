if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = true;
goog.require("process.env");
goog.require("chrepl.load");
