# chrepl example

First, install chrepl in Chrome from the [Web Store](https://chrome.google.com/webstore/detail/chrepl/ablpgchfbbfachdiakmieocbdgflgfjj).

Next, `git clone (this repo)` and `cd` into this project.

Then, run `clj -A:fig:build` in this project.

You can now update the code in `src/ex/core.cljs` and all code updates will be pushed to all tabs.

Reload a particular tab to force its focus into the repl. `(js/console.log "hi")` will then print `hi` in that tab's console.

To focus on a specific tab, just `(figwheel.repl/focus ...` on the assigned name for that tab:

```clojure
cljs.user=> (figwheel.repl/focus Emilio)
"Focused On: Emilio"
```

repl evaluations will be directed towards that tab.

Now, in that tab, go to Google and search for `asdf`. The first search result should be for `https://en.wikipedia.org/wiki/ASDF`. Type the following code into the repl:

```clojure
(let [div (.querySelector js/document "#rso > div:nth-child(3) > div > div:nth-child(1)")]
       (.removeChild (.-parentNode div) div))
```

Congrats, the first google search result just disappeared!

So, you've really got a lot of power to manipulate websites in any way you want.

## License

Copyright © 2018 John M. Newman III

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
