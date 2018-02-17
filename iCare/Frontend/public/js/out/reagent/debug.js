// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__36804__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36805__i = 0, G__36805__a = new Array(arguments.length -  0);
while (G__36805__i < G__36805__a.length) {G__36805__a[G__36805__i] = arguments[G__36805__i + 0]; ++G__36805__i;}
  args = new cljs.core.IndexedSeq(G__36805__a,0,null);
} 
return G__36804__delegate.call(this,args);};
G__36804.cljs$lang$maxFixedArity = 0;
G__36804.cljs$lang$applyTo = (function (arglist__36806){
var args = cljs.core.seq(arglist__36806);
return G__36804__delegate(args);
});
G__36804.cljs$core$IFn$_invoke$arity$variadic = G__36804__delegate;
return G__36804;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36807__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36808__i = 0, G__36808__a = new Array(arguments.length -  0);
while (G__36808__i < G__36808__a.length) {G__36808__a[G__36808__i] = arguments[G__36808__i + 0]; ++G__36808__i;}
  args = new cljs.core.IndexedSeq(G__36808__a,0,null);
} 
return G__36807__delegate.call(this,args);};
G__36807.cljs$lang$maxFixedArity = 0;
G__36807.cljs$lang$applyTo = (function (arglist__36809){
var args = cljs.core.seq(arglist__36809);
return G__36807__delegate(args);
});
G__36807.cljs$core$IFn$_invoke$arity$variadic = G__36807__delegate;
return G__36807;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1518027917029
