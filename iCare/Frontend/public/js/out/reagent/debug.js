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
var G__36805__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36806__i = 0, G__36806__a = new Array(arguments.length -  0);
while (G__36806__i < G__36806__a.length) {G__36806__a[G__36806__i] = arguments[G__36806__i + 0]; ++G__36806__i;}
  args = new cljs.core.IndexedSeq(G__36806__a,0,null);
} 
return G__36805__delegate.call(this,args);};
G__36805.cljs$lang$maxFixedArity = 0;
G__36805.cljs$lang$applyTo = (function (arglist__36807){
var args = cljs.core.seq(arglist__36807);
return G__36805__delegate(args);
});
G__36805.cljs$core$IFn$_invoke$arity$variadic = G__36805__delegate;
return G__36805;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36808__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36809__i = 0, G__36809__a = new Array(arguments.length -  0);
while (G__36809__i < G__36809__a.length) {G__36809__a[G__36809__i] = arguments[G__36809__i + 0]; ++G__36809__i;}
  args = new cljs.core.IndexedSeq(G__36809__a,0,null);
} 
return G__36808__delegate.call(this,args);};
G__36808.cljs$lang$maxFixedArity = 0;
G__36808.cljs$lang$applyTo = (function (arglist__36810){
var args = cljs.core.seq(arglist__36810);
return G__36808__delegate(args);
});
G__36808.cljs$core$IFn$_invoke$arity$variadic = G__36808__delegate;
return G__36808;
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

//# sourceMappingURL=debug.js.map?rel=1517067022692
