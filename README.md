# clojurescript-css-modules-demo

A sample Clojurescript project with live-reloadable [CSS Modules](http://glenmaddern.com/articles/css-modules) using Gulp & Figwheel.

## How
Clone, `npm install` and `gulp watch` in one REPL.
`lein figwheel` in another REPL.
Change your .css modules and notice how CLJS live reloads.

Note: change `css/settings.js` to reflect your CSS Module names.


## Usage With Reagent
At first - import CSS modules to project with foreign-libs. After it you can use `aget` to lookup and replace classes in Reagent templates with the correct css classes from your files.


For example: in `filename.css` we get CSS rule with selector `.logo`:

```clojure
(defn my-component[]
	[:div { :class-name (aget js/cssModules "filename" "logo") }])
```

#### Syntax Sugar

There is a pretty syntax sugar inside demo:

```clojure
(defn my-component[]
	(get-css 
		[:div.CSS>filename>logo]))
```

Which is equivalent to code below. Or you can use macro `defcomponent` which wraps your component function with `get-css`.

```clojure
(defcomponent my-component[]
	[:div.CSS>filename>logo])
```

##TODO:
* [ ] Expand on this documentation!
* [ ] Structure CSS Modules, add advanced examples.
