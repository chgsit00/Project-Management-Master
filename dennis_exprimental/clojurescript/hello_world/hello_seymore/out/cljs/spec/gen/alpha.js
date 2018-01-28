// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35978 = arguments.length;
var i__29159__auto___35979 = (0);
while(true){
if((i__29159__auto___35979 < len__29158__auto___35978)){
args__29165__auto__.push((arguments[i__29159__auto___35979]));

var G__35980 = (i__29159__auto___35979 + (1));
i__29159__auto___35979 = G__35980;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35977){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35977));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35982 = arguments.length;
var i__29159__auto___35983 = (0);
while(true){
if((i__29159__auto___35983 < len__29158__auto___35982)){
args__29165__auto__.push((arguments[i__29159__auto___35983]));

var G__35984 = (i__29159__auto___35983 + (1));
i__29159__auto___35983 = G__35984;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35981){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35981));
});

var g_QMARK__35985 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_35986 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35985){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__35985))
,null));
var mkg_35987 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35985,g_35986){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__35985,g_35986))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35985,g_35986,mkg_35987){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35985).call(null,x);
});})(g_QMARK__35985,g_35986,mkg_35987))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35985,g_35986,mkg_35987){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35987).call(null,gfn);
});})(g_QMARK__35985,g_35986,mkg_35987))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35985,g_35986,mkg_35987){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35986).call(null,generator);
});})(g_QMARK__35985,g_35986,mkg_35987))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29251__auto___36007 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29251__auto___36007){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36008 = arguments.length;
var i__29159__auto___36009 = (0);
while(true){
if((i__29159__auto___36009 < len__29158__auto___36008)){
args__29165__auto__.push((arguments[i__29159__auto___36009]));

var G__36010 = (i__29159__auto___36009 + (1));
i__29159__auto___36009 = G__36010;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36007))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36007){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36007),args);
});})(g__29251__auto___36007))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29251__auto___36007){
return (function (seq35988){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35988));
});})(g__29251__auto___36007))
;


var g__29251__auto___36011 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29251__auto___36011){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36012 = arguments.length;
var i__29159__auto___36013 = (0);
while(true){
if((i__29159__auto___36013 < len__29158__auto___36012)){
args__29165__auto__.push((arguments[i__29159__auto___36013]));

var G__36014 = (i__29159__auto___36013 + (1));
i__29159__auto___36013 = G__36014;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36011))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36011){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36011),args);
});})(g__29251__auto___36011))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29251__auto___36011){
return (function (seq35989){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35989));
});})(g__29251__auto___36011))
;


var g__29251__auto___36015 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29251__auto___36015){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36016 = arguments.length;
var i__29159__auto___36017 = (0);
while(true){
if((i__29159__auto___36017 < len__29158__auto___36016)){
args__29165__auto__.push((arguments[i__29159__auto___36017]));

var G__36018 = (i__29159__auto___36017 + (1));
i__29159__auto___36017 = G__36018;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36015))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36015){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36015),args);
});})(g__29251__auto___36015))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29251__auto___36015){
return (function (seq35990){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35990));
});})(g__29251__auto___36015))
;


var g__29251__auto___36019 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29251__auto___36019){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36020 = arguments.length;
var i__29159__auto___36021 = (0);
while(true){
if((i__29159__auto___36021 < len__29158__auto___36020)){
args__29165__auto__.push((arguments[i__29159__auto___36021]));

var G__36022 = (i__29159__auto___36021 + (1));
i__29159__auto___36021 = G__36022;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36019))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36019){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36019),args);
});})(g__29251__auto___36019))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29251__auto___36019){
return (function (seq35991){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35991));
});})(g__29251__auto___36019))
;


var g__29251__auto___36023 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29251__auto___36023){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36024 = arguments.length;
var i__29159__auto___36025 = (0);
while(true){
if((i__29159__auto___36025 < len__29158__auto___36024)){
args__29165__auto__.push((arguments[i__29159__auto___36025]));

var G__36026 = (i__29159__auto___36025 + (1));
i__29159__auto___36025 = G__36026;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36023))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36023){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36023),args);
});})(g__29251__auto___36023))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29251__auto___36023){
return (function (seq35992){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35992));
});})(g__29251__auto___36023))
;


var g__29251__auto___36027 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29251__auto___36027){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36028 = arguments.length;
var i__29159__auto___36029 = (0);
while(true){
if((i__29159__auto___36029 < len__29158__auto___36028)){
args__29165__auto__.push((arguments[i__29159__auto___36029]));

var G__36030 = (i__29159__auto___36029 + (1));
i__29159__auto___36029 = G__36030;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36027))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36027){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36027),args);
});})(g__29251__auto___36027))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29251__auto___36027){
return (function (seq35993){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35993));
});})(g__29251__auto___36027))
;


var g__29251__auto___36031 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29251__auto___36031){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36032 = arguments.length;
var i__29159__auto___36033 = (0);
while(true){
if((i__29159__auto___36033 < len__29158__auto___36032)){
args__29165__auto__.push((arguments[i__29159__auto___36033]));

var G__36034 = (i__29159__auto___36033 + (1));
i__29159__auto___36033 = G__36034;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36031))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36031){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36031),args);
});})(g__29251__auto___36031))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29251__auto___36031){
return (function (seq35994){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35994));
});})(g__29251__auto___36031))
;


var g__29251__auto___36035 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29251__auto___36035){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36036 = arguments.length;
var i__29159__auto___36037 = (0);
while(true){
if((i__29159__auto___36037 < len__29158__auto___36036)){
args__29165__auto__.push((arguments[i__29159__auto___36037]));

var G__36038 = (i__29159__auto___36037 + (1));
i__29159__auto___36037 = G__36038;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36035))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36035){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36035),args);
});})(g__29251__auto___36035))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29251__auto___36035){
return (function (seq35995){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35995));
});})(g__29251__auto___36035))
;


var g__29251__auto___36039 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29251__auto___36039){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36040 = arguments.length;
var i__29159__auto___36041 = (0);
while(true){
if((i__29159__auto___36041 < len__29158__auto___36040)){
args__29165__auto__.push((arguments[i__29159__auto___36041]));

var G__36042 = (i__29159__auto___36041 + (1));
i__29159__auto___36041 = G__36042;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36039))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36039){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36039),args);
});})(g__29251__auto___36039))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29251__auto___36039){
return (function (seq35996){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35996));
});})(g__29251__auto___36039))
;


var g__29251__auto___36043 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29251__auto___36043){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36044 = arguments.length;
var i__29159__auto___36045 = (0);
while(true){
if((i__29159__auto___36045 < len__29158__auto___36044)){
args__29165__auto__.push((arguments[i__29159__auto___36045]));

var G__36046 = (i__29159__auto___36045 + (1));
i__29159__auto___36045 = G__36046;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36043))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36043){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36043),args);
});})(g__29251__auto___36043))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29251__auto___36043){
return (function (seq35997){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35997));
});})(g__29251__auto___36043))
;


var g__29251__auto___36047 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29251__auto___36047){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36048 = arguments.length;
var i__29159__auto___36049 = (0);
while(true){
if((i__29159__auto___36049 < len__29158__auto___36048)){
args__29165__auto__.push((arguments[i__29159__auto___36049]));

var G__36050 = (i__29159__auto___36049 + (1));
i__29159__auto___36049 = G__36050;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36047))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36047){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36047),args);
});})(g__29251__auto___36047))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29251__auto___36047){
return (function (seq35998){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35998));
});})(g__29251__auto___36047))
;


var g__29251__auto___36051 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29251__auto___36051){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36052 = arguments.length;
var i__29159__auto___36053 = (0);
while(true){
if((i__29159__auto___36053 < len__29158__auto___36052)){
args__29165__auto__.push((arguments[i__29159__auto___36053]));

var G__36054 = (i__29159__auto___36053 + (1));
i__29159__auto___36053 = G__36054;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36051))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36051){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36051),args);
});})(g__29251__auto___36051))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29251__auto___36051){
return (function (seq35999){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35999));
});})(g__29251__auto___36051))
;


var g__29251__auto___36055 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29251__auto___36055){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36056 = arguments.length;
var i__29159__auto___36057 = (0);
while(true){
if((i__29159__auto___36057 < len__29158__auto___36056)){
args__29165__auto__.push((arguments[i__29159__auto___36057]));

var G__36058 = (i__29159__auto___36057 + (1));
i__29159__auto___36057 = G__36058;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36055))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36055){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36055),args);
});})(g__29251__auto___36055))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29251__auto___36055){
return (function (seq36000){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36000));
});})(g__29251__auto___36055))
;


var g__29251__auto___36059 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29251__auto___36059){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36060 = arguments.length;
var i__29159__auto___36061 = (0);
while(true){
if((i__29159__auto___36061 < len__29158__auto___36060)){
args__29165__auto__.push((arguments[i__29159__auto___36061]));

var G__36062 = (i__29159__auto___36061 + (1));
i__29159__auto___36061 = G__36062;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36059))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36059){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36059),args);
});})(g__29251__auto___36059))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29251__auto___36059){
return (function (seq36001){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36001));
});})(g__29251__auto___36059))
;


var g__29251__auto___36063 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29251__auto___36063){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36064 = arguments.length;
var i__29159__auto___36065 = (0);
while(true){
if((i__29159__auto___36065 < len__29158__auto___36064)){
args__29165__auto__.push((arguments[i__29159__auto___36065]));

var G__36066 = (i__29159__auto___36065 + (1));
i__29159__auto___36065 = G__36066;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36063))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36063){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36063),args);
});})(g__29251__auto___36063))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29251__auto___36063){
return (function (seq36002){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36002));
});})(g__29251__auto___36063))
;


var g__29251__auto___36067 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29251__auto___36067){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36068 = arguments.length;
var i__29159__auto___36069 = (0);
while(true){
if((i__29159__auto___36069 < len__29158__auto___36068)){
args__29165__auto__.push((arguments[i__29159__auto___36069]));

var G__36070 = (i__29159__auto___36069 + (1));
i__29159__auto___36069 = G__36070;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36067))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36067){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36067),args);
});})(g__29251__auto___36067))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29251__auto___36067){
return (function (seq36003){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36003));
});})(g__29251__auto___36067))
;


var g__29251__auto___36071 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29251__auto___36071){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36072 = arguments.length;
var i__29159__auto___36073 = (0);
while(true){
if((i__29159__auto___36073 < len__29158__auto___36072)){
args__29165__auto__.push((arguments[i__29159__auto___36073]));

var G__36074 = (i__29159__auto___36073 + (1));
i__29159__auto___36073 = G__36074;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36071))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36071){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36071),args);
});})(g__29251__auto___36071))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29251__auto___36071){
return (function (seq36004){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36004));
});})(g__29251__auto___36071))
;


var g__29251__auto___36075 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29251__auto___36075){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36076 = arguments.length;
var i__29159__auto___36077 = (0);
while(true){
if((i__29159__auto___36077 < len__29158__auto___36076)){
args__29165__auto__.push((arguments[i__29159__auto___36077]));

var G__36078 = (i__29159__auto___36077 + (1));
i__29159__auto___36077 = G__36078;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36075))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36075){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36075),args);
});})(g__29251__auto___36075))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29251__auto___36075){
return (function (seq36005){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36005));
});})(g__29251__auto___36075))
;


var g__29251__auto___36079 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29251__auto___36079){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36080 = arguments.length;
var i__29159__auto___36081 = (0);
while(true){
if((i__29159__auto___36081 < len__29158__auto___36080)){
args__29165__auto__.push((arguments[i__29159__auto___36081]));

var G__36082 = (i__29159__auto___36081 + (1));
i__29159__auto___36081 = G__36082;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___36079))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___36079){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___36079),args);
});})(g__29251__auto___36079))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29251__auto___36079){
return (function (seq36006){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36006));
});})(g__29251__auto___36079))
;

var g__29264__auto___36104 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29264__auto___36104){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36105 = arguments.length;
var i__29159__auto___36106 = (0);
while(true){
if((i__29159__auto___36106 < len__29158__auto___36105)){
args__29165__auto__.push((arguments[i__29159__auto___36106]));

var G__36107 = (i__29159__auto___36106 + (1));
i__29159__auto___36106 = G__36107;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36104))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36104){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36104);
});})(g__29264__auto___36104))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29264__auto___36104){
return (function (seq36083){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36083));
});})(g__29264__auto___36104))
;


var g__29264__auto___36108 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29264__auto___36108){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36109 = arguments.length;
var i__29159__auto___36110 = (0);
while(true){
if((i__29159__auto___36110 < len__29158__auto___36109)){
args__29165__auto__.push((arguments[i__29159__auto___36110]));

var G__36111 = (i__29159__auto___36110 + (1));
i__29159__auto___36110 = G__36111;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36108))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36108){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36108);
});})(g__29264__auto___36108))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29264__auto___36108){
return (function (seq36084){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36084));
});})(g__29264__auto___36108))
;


var g__29264__auto___36112 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29264__auto___36112){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36113 = arguments.length;
var i__29159__auto___36114 = (0);
while(true){
if((i__29159__auto___36114 < len__29158__auto___36113)){
args__29165__auto__.push((arguments[i__29159__auto___36114]));

var G__36115 = (i__29159__auto___36114 + (1));
i__29159__auto___36114 = G__36115;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36112))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36112){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36112);
});})(g__29264__auto___36112))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29264__auto___36112){
return (function (seq36085){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36085));
});})(g__29264__auto___36112))
;


var g__29264__auto___36116 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29264__auto___36116){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36117 = arguments.length;
var i__29159__auto___36118 = (0);
while(true){
if((i__29159__auto___36118 < len__29158__auto___36117)){
args__29165__auto__.push((arguments[i__29159__auto___36118]));

var G__36119 = (i__29159__auto___36118 + (1));
i__29159__auto___36118 = G__36119;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36116))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36116){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36116);
});})(g__29264__auto___36116))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29264__auto___36116){
return (function (seq36086){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36086));
});})(g__29264__auto___36116))
;


var g__29264__auto___36120 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29264__auto___36120){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36121 = arguments.length;
var i__29159__auto___36122 = (0);
while(true){
if((i__29159__auto___36122 < len__29158__auto___36121)){
args__29165__auto__.push((arguments[i__29159__auto___36122]));

var G__36123 = (i__29159__auto___36122 + (1));
i__29159__auto___36122 = G__36123;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36120))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36120){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36120);
});})(g__29264__auto___36120))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29264__auto___36120){
return (function (seq36087){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36087));
});})(g__29264__auto___36120))
;


var g__29264__auto___36124 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29264__auto___36124){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36125 = arguments.length;
var i__29159__auto___36126 = (0);
while(true){
if((i__29159__auto___36126 < len__29158__auto___36125)){
args__29165__auto__.push((arguments[i__29159__auto___36126]));

var G__36127 = (i__29159__auto___36126 + (1));
i__29159__auto___36126 = G__36127;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36124))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36124){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36124);
});})(g__29264__auto___36124))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29264__auto___36124){
return (function (seq36088){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36088));
});})(g__29264__auto___36124))
;


var g__29264__auto___36128 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29264__auto___36128){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36129 = arguments.length;
var i__29159__auto___36130 = (0);
while(true){
if((i__29159__auto___36130 < len__29158__auto___36129)){
args__29165__auto__.push((arguments[i__29159__auto___36130]));

var G__36131 = (i__29159__auto___36130 + (1));
i__29159__auto___36130 = G__36131;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36128))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36128){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36128);
});})(g__29264__auto___36128))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29264__auto___36128){
return (function (seq36089){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36089));
});})(g__29264__auto___36128))
;


var g__29264__auto___36132 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29264__auto___36132){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36133 = arguments.length;
var i__29159__auto___36134 = (0);
while(true){
if((i__29159__auto___36134 < len__29158__auto___36133)){
args__29165__auto__.push((arguments[i__29159__auto___36134]));

var G__36135 = (i__29159__auto___36134 + (1));
i__29159__auto___36134 = G__36135;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36132))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36132){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36132);
});})(g__29264__auto___36132))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29264__auto___36132){
return (function (seq36090){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36090));
});})(g__29264__auto___36132))
;


var g__29264__auto___36136 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29264__auto___36136){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36137 = arguments.length;
var i__29159__auto___36138 = (0);
while(true){
if((i__29159__auto___36138 < len__29158__auto___36137)){
args__29165__auto__.push((arguments[i__29159__auto___36138]));

var G__36139 = (i__29159__auto___36138 + (1));
i__29159__auto___36138 = G__36139;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36136))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36136){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36136);
});})(g__29264__auto___36136))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29264__auto___36136){
return (function (seq36091){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36091));
});})(g__29264__auto___36136))
;


var g__29264__auto___36140 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29264__auto___36140){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36141 = arguments.length;
var i__29159__auto___36142 = (0);
while(true){
if((i__29159__auto___36142 < len__29158__auto___36141)){
args__29165__auto__.push((arguments[i__29159__auto___36142]));

var G__36143 = (i__29159__auto___36142 + (1));
i__29159__auto___36142 = G__36143;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36140))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36140){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36140);
});})(g__29264__auto___36140))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29264__auto___36140){
return (function (seq36092){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36092));
});})(g__29264__auto___36140))
;


var g__29264__auto___36144 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29264__auto___36144){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36145 = arguments.length;
var i__29159__auto___36146 = (0);
while(true){
if((i__29159__auto___36146 < len__29158__auto___36145)){
args__29165__auto__.push((arguments[i__29159__auto___36146]));

var G__36147 = (i__29159__auto___36146 + (1));
i__29159__auto___36146 = G__36147;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36144))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36144){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36144);
});})(g__29264__auto___36144))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29264__auto___36144){
return (function (seq36093){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36093));
});})(g__29264__auto___36144))
;


var g__29264__auto___36148 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29264__auto___36148){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36149 = arguments.length;
var i__29159__auto___36150 = (0);
while(true){
if((i__29159__auto___36150 < len__29158__auto___36149)){
args__29165__auto__.push((arguments[i__29159__auto___36150]));

var G__36151 = (i__29159__auto___36150 + (1));
i__29159__auto___36150 = G__36151;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36148))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36148){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36148);
});})(g__29264__auto___36148))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29264__auto___36148){
return (function (seq36094){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36094));
});})(g__29264__auto___36148))
;


var g__29264__auto___36152 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29264__auto___36152){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36153 = arguments.length;
var i__29159__auto___36154 = (0);
while(true){
if((i__29159__auto___36154 < len__29158__auto___36153)){
args__29165__auto__.push((arguments[i__29159__auto___36154]));

var G__36155 = (i__29159__auto___36154 + (1));
i__29159__auto___36154 = G__36155;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36152))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36152){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36152);
});})(g__29264__auto___36152))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29264__auto___36152){
return (function (seq36095){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36095));
});})(g__29264__auto___36152))
;


var g__29264__auto___36156 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29264__auto___36156){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36157 = arguments.length;
var i__29159__auto___36158 = (0);
while(true){
if((i__29159__auto___36158 < len__29158__auto___36157)){
args__29165__auto__.push((arguments[i__29159__auto___36158]));

var G__36159 = (i__29159__auto___36158 + (1));
i__29159__auto___36158 = G__36159;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36156))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36156){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36156);
});})(g__29264__auto___36156))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29264__auto___36156){
return (function (seq36096){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36096));
});})(g__29264__auto___36156))
;


var g__29264__auto___36160 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29264__auto___36160){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36161 = arguments.length;
var i__29159__auto___36162 = (0);
while(true){
if((i__29159__auto___36162 < len__29158__auto___36161)){
args__29165__auto__.push((arguments[i__29159__auto___36162]));

var G__36163 = (i__29159__auto___36162 + (1));
i__29159__auto___36162 = G__36163;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36160))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36160){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36160);
});})(g__29264__auto___36160))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29264__auto___36160){
return (function (seq36097){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36097));
});})(g__29264__auto___36160))
;


var g__29264__auto___36164 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29264__auto___36164){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36165 = arguments.length;
var i__29159__auto___36166 = (0);
while(true){
if((i__29159__auto___36166 < len__29158__auto___36165)){
args__29165__auto__.push((arguments[i__29159__auto___36166]));

var G__36167 = (i__29159__auto___36166 + (1));
i__29159__auto___36166 = G__36167;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36164))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36164){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36164);
});})(g__29264__auto___36164))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29264__auto___36164){
return (function (seq36098){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36098));
});})(g__29264__auto___36164))
;


var g__29264__auto___36168 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29264__auto___36168){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36169 = arguments.length;
var i__29159__auto___36170 = (0);
while(true){
if((i__29159__auto___36170 < len__29158__auto___36169)){
args__29165__auto__.push((arguments[i__29159__auto___36170]));

var G__36171 = (i__29159__auto___36170 + (1));
i__29159__auto___36170 = G__36171;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36168))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36168){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36168);
});})(g__29264__auto___36168))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29264__auto___36168){
return (function (seq36099){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36099));
});})(g__29264__auto___36168))
;


var g__29264__auto___36172 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29264__auto___36172){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36173 = arguments.length;
var i__29159__auto___36174 = (0);
while(true){
if((i__29159__auto___36174 < len__29158__auto___36173)){
args__29165__auto__.push((arguments[i__29159__auto___36174]));

var G__36175 = (i__29159__auto___36174 + (1));
i__29159__auto___36174 = G__36175;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36172))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36172){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36172);
});})(g__29264__auto___36172))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29264__auto___36172){
return (function (seq36100){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36100));
});})(g__29264__auto___36172))
;


var g__29264__auto___36176 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29264__auto___36176){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36177 = arguments.length;
var i__29159__auto___36178 = (0);
while(true){
if((i__29159__auto___36178 < len__29158__auto___36177)){
args__29165__auto__.push((arguments[i__29159__auto___36178]));

var G__36179 = (i__29159__auto___36178 + (1));
i__29159__auto___36178 = G__36179;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36176))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36176){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36176);
});})(g__29264__auto___36176))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29264__auto___36176){
return (function (seq36101){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36101));
});})(g__29264__auto___36176))
;


var g__29264__auto___36180 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29264__auto___36180){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36181 = arguments.length;
var i__29159__auto___36182 = (0);
while(true){
if((i__29159__auto___36182 < len__29158__auto___36181)){
args__29165__auto__.push((arguments[i__29159__auto___36182]));

var G__36183 = (i__29159__auto___36182 + (1));
i__29159__auto___36182 = G__36183;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36180))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36180){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36180);
});})(g__29264__auto___36180))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29264__auto___36180){
return (function (seq36102){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36102));
});})(g__29264__auto___36180))
;


var g__29264__auto___36184 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29264__auto___36184){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36185 = arguments.length;
var i__29159__auto___36186 = (0);
while(true){
if((i__29159__auto___36186 < len__29158__auto___36185)){
args__29165__auto__.push((arguments[i__29159__auto___36186]));

var G__36187 = (i__29159__auto___36186 + (1));
i__29159__auto___36186 = G__36187;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___36184))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___36184){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___36184);
});})(g__29264__auto___36184))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29264__auto___36184){
return (function (seq36103){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36103));
});})(g__29264__auto___36184))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36190 = arguments.length;
var i__29159__auto___36191 = (0);
while(true){
if((i__29159__auto___36191 < len__29158__auto___36190)){
args__29165__auto__.push((arguments[i__29159__auto___36191]));

var G__36192 = (i__29159__auto___36191 + (1));
i__29159__auto___36191 = G__36192;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__36188_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36188_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq36189){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36189));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__36193_SHARP_){
return (new Date(p1__36193_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1517063742024
