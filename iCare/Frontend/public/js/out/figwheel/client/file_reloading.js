// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28051__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28051__auto__){
return or__28051__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28051__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
var or__28051__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28051__auto____$1)){
return or__28051__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34444_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34444_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34445 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34446 = null;
var count__34447 = (0);
var i__34448 = (0);
while(true){
if((i__34448 < count__34447)){
var n = cljs.core._nth.call(null,chunk__34446,i__34448);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34449 = seq__34445;
var G__34450 = chunk__34446;
var G__34451 = count__34447;
var G__34452 = (i__34448 + (1));
seq__34445 = G__34449;
chunk__34446 = G__34450;
count__34447 = G__34451;
i__34448 = G__34452;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34445);
if(temp__4657__auto__){
var seq__34445__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34445__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__34445__$1);
var G__34453 = cljs.core.chunk_rest.call(null,seq__34445__$1);
var G__34454 = c__28890__auto__;
var G__34455 = cljs.core.count.call(null,c__28890__auto__);
var G__34456 = (0);
seq__34445 = G__34453;
chunk__34446 = G__34454;
count__34447 = G__34455;
i__34448 = G__34456;
continue;
} else {
var n = cljs.core.first.call(null,seq__34445__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34457 = cljs.core.next.call(null,seq__34445__$1);
var G__34458 = null;
var G__34459 = (0);
var G__34460 = (0);
seq__34445 = G__34457;
chunk__34446 = G__34458;
count__34447 = G__34459;
i__34448 = G__34460;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__34461){
var vec__34462 = p__34461;
var _ = cljs.core.nth.call(null,vec__34462,(0),null);
var v = cljs.core.nth.call(null,vec__34462,(1),null);
var and__28039__auto__ = v;
if(cljs.core.truth_(and__28039__auto__)){
return v.call(null,dep);
} else {
return and__28039__auto__;
}
}),cljs.core.filter.call(null,(function (p__34465){
var vec__34466 = p__34465;
var k = cljs.core.nth.call(null,vec__34466,(0),null);
var v = cljs.core.nth.call(null,vec__34466,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34478_34486 = cljs.core.seq.call(null,deps);
var chunk__34479_34487 = null;
var count__34480_34488 = (0);
var i__34481_34489 = (0);
while(true){
if((i__34481_34489 < count__34480_34488)){
var dep_34490 = cljs.core._nth.call(null,chunk__34479_34487,i__34481_34489);
if(cljs.core.truth_((function (){var and__28039__auto__ = dep_34490;
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34490));
} else {
return and__28039__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34490,(depth + (1)),state);
} else {
}

var G__34491 = seq__34478_34486;
var G__34492 = chunk__34479_34487;
var G__34493 = count__34480_34488;
var G__34494 = (i__34481_34489 + (1));
seq__34478_34486 = G__34491;
chunk__34479_34487 = G__34492;
count__34480_34488 = G__34493;
i__34481_34489 = G__34494;
continue;
} else {
var temp__4657__auto___34495 = cljs.core.seq.call(null,seq__34478_34486);
if(temp__4657__auto___34495){
var seq__34478_34496__$1 = temp__4657__auto___34495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34478_34496__$1)){
var c__28890__auto___34497 = cljs.core.chunk_first.call(null,seq__34478_34496__$1);
var G__34498 = cljs.core.chunk_rest.call(null,seq__34478_34496__$1);
var G__34499 = c__28890__auto___34497;
var G__34500 = cljs.core.count.call(null,c__28890__auto___34497);
var G__34501 = (0);
seq__34478_34486 = G__34498;
chunk__34479_34487 = G__34499;
count__34480_34488 = G__34500;
i__34481_34489 = G__34501;
continue;
} else {
var dep_34502 = cljs.core.first.call(null,seq__34478_34496__$1);
if(cljs.core.truth_((function (){var and__28039__auto__ = dep_34502;
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34502));
} else {
return and__28039__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34502,(depth + (1)),state);
} else {
}

var G__34503 = cljs.core.next.call(null,seq__34478_34496__$1);
var G__34504 = null;
var G__34505 = (0);
var G__34506 = (0);
seq__34478_34486 = G__34503;
chunk__34479_34487 = G__34504;
count__34480_34488 = G__34505;
i__34481_34489 = G__34506;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34482){
var vec__34483 = p__34482;
var seq__34484 = cljs.core.seq.call(null,vec__34483);
var first__34485 = cljs.core.first.call(null,seq__34484);
var seq__34484__$1 = cljs.core.next.call(null,seq__34484);
var x = first__34485;
var xs = seq__34484__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34483,seq__34484,first__34485,seq__34484__$1,x,xs,get_deps__$1){
return (function (p1__34469_SHARP_){
return clojure.set.difference.call(null,p1__34469_SHARP_,x);
});})(vec__34483,seq__34484,first__34485,seq__34484__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34507 = cljs.core.seq.call(null,provides);
var chunk__34508 = null;
var count__34509 = (0);
var i__34510 = (0);
while(true){
if((i__34510 < count__34509)){
var prov = cljs.core._nth.call(null,chunk__34508,i__34510);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34511_34519 = cljs.core.seq.call(null,requires);
var chunk__34512_34520 = null;
var count__34513_34521 = (0);
var i__34514_34522 = (0);
while(true){
if((i__34514_34522 < count__34513_34521)){
var req_34523 = cljs.core._nth.call(null,chunk__34512_34520,i__34514_34522);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34523,prov);

var G__34524 = seq__34511_34519;
var G__34525 = chunk__34512_34520;
var G__34526 = count__34513_34521;
var G__34527 = (i__34514_34522 + (1));
seq__34511_34519 = G__34524;
chunk__34512_34520 = G__34525;
count__34513_34521 = G__34526;
i__34514_34522 = G__34527;
continue;
} else {
var temp__4657__auto___34528 = cljs.core.seq.call(null,seq__34511_34519);
if(temp__4657__auto___34528){
var seq__34511_34529__$1 = temp__4657__auto___34528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34511_34529__$1)){
var c__28890__auto___34530 = cljs.core.chunk_first.call(null,seq__34511_34529__$1);
var G__34531 = cljs.core.chunk_rest.call(null,seq__34511_34529__$1);
var G__34532 = c__28890__auto___34530;
var G__34533 = cljs.core.count.call(null,c__28890__auto___34530);
var G__34534 = (0);
seq__34511_34519 = G__34531;
chunk__34512_34520 = G__34532;
count__34513_34521 = G__34533;
i__34514_34522 = G__34534;
continue;
} else {
var req_34535 = cljs.core.first.call(null,seq__34511_34529__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34535,prov);

var G__34536 = cljs.core.next.call(null,seq__34511_34529__$1);
var G__34537 = null;
var G__34538 = (0);
var G__34539 = (0);
seq__34511_34519 = G__34536;
chunk__34512_34520 = G__34537;
count__34513_34521 = G__34538;
i__34514_34522 = G__34539;
continue;
}
} else {
}
}
break;
}

var G__34540 = seq__34507;
var G__34541 = chunk__34508;
var G__34542 = count__34509;
var G__34543 = (i__34510 + (1));
seq__34507 = G__34540;
chunk__34508 = G__34541;
count__34509 = G__34542;
i__34510 = G__34543;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34507);
if(temp__4657__auto__){
var seq__34507__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34507__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__34507__$1);
var G__34544 = cljs.core.chunk_rest.call(null,seq__34507__$1);
var G__34545 = c__28890__auto__;
var G__34546 = cljs.core.count.call(null,c__28890__auto__);
var G__34547 = (0);
seq__34507 = G__34544;
chunk__34508 = G__34545;
count__34509 = G__34546;
i__34510 = G__34547;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34507__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34515_34548 = cljs.core.seq.call(null,requires);
var chunk__34516_34549 = null;
var count__34517_34550 = (0);
var i__34518_34551 = (0);
while(true){
if((i__34518_34551 < count__34517_34550)){
var req_34552 = cljs.core._nth.call(null,chunk__34516_34549,i__34518_34551);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34552,prov);

var G__34553 = seq__34515_34548;
var G__34554 = chunk__34516_34549;
var G__34555 = count__34517_34550;
var G__34556 = (i__34518_34551 + (1));
seq__34515_34548 = G__34553;
chunk__34516_34549 = G__34554;
count__34517_34550 = G__34555;
i__34518_34551 = G__34556;
continue;
} else {
var temp__4657__auto___34557__$1 = cljs.core.seq.call(null,seq__34515_34548);
if(temp__4657__auto___34557__$1){
var seq__34515_34558__$1 = temp__4657__auto___34557__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34515_34558__$1)){
var c__28890__auto___34559 = cljs.core.chunk_first.call(null,seq__34515_34558__$1);
var G__34560 = cljs.core.chunk_rest.call(null,seq__34515_34558__$1);
var G__34561 = c__28890__auto___34559;
var G__34562 = cljs.core.count.call(null,c__28890__auto___34559);
var G__34563 = (0);
seq__34515_34548 = G__34560;
chunk__34516_34549 = G__34561;
count__34517_34550 = G__34562;
i__34518_34551 = G__34563;
continue;
} else {
var req_34564 = cljs.core.first.call(null,seq__34515_34558__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34564,prov);

var G__34565 = cljs.core.next.call(null,seq__34515_34558__$1);
var G__34566 = null;
var G__34567 = (0);
var G__34568 = (0);
seq__34515_34548 = G__34565;
chunk__34516_34549 = G__34566;
count__34517_34550 = G__34567;
i__34518_34551 = G__34568;
continue;
}
} else {
}
}
break;
}

var G__34569 = cljs.core.next.call(null,seq__34507__$1);
var G__34570 = null;
var G__34571 = (0);
var G__34572 = (0);
seq__34507 = G__34569;
chunk__34508 = G__34570;
count__34509 = G__34571;
i__34510 = G__34572;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34573_34577 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34574_34578 = null;
var count__34575_34579 = (0);
var i__34576_34580 = (0);
while(true){
if((i__34576_34580 < count__34575_34579)){
var ns_34581 = cljs.core._nth.call(null,chunk__34574_34578,i__34576_34580);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34581);

var G__34582 = seq__34573_34577;
var G__34583 = chunk__34574_34578;
var G__34584 = count__34575_34579;
var G__34585 = (i__34576_34580 + (1));
seq__34573_34577 = G__34582;
chunk__34574_34578 = G__34583;
count__34575_34579 = G__34584;
i__34576_34580 = G__34585;
continue;
} else {
var temp__4657__auto___34586 = cljs.core.seq.call(null,seq__34573_34577);
if(temp__4657__auto___34586){
var seq__34573_34587__$1 = temp__4657__auto___34586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34573_34587__$1)){
var c__28890__auto___34588 = cljs.core.chunk_first.call(null,seq__34573_34587__$1);
var G__34589 = cljs.core.chunk_rest.call(null,seq__34573_34587__$1);
var G__34590 = c__28890__auto___34588;
var G__34591 = cljs.core.count.call(null,c__28890__auto___34588);
var G__34592 = (0);
seq__34573_34577 = G__34589;
chunk__34574_34578 = G__34590;
count__34575_34579 = G__34591;
i__34576_34580 = G__34592;
continue;
} else {
var ns_34593 = cljs.core.first.call(null,seq__34573_34587__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34593);

var G__34594 = cljs.core.next.call(null,seq__34573_34587__$1);
var G__34595 = null;
var G__34596 = (0);
var G__34597 = (0);
seq__34573_34577 = G__34594;
chunk__34574_34578 = G__34595;
count__34575_34579 = G__34596;
i__34576_34580 = G__34597;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28051__auto__ = goog.require__;
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34598__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34599__i = 0, G__34599__a = new Array(arguments.length -  0);
while (G__34599__i < G__34599__a.length) {G__34599__a[G__34599__i] = arguments[G__34599__i + 0]; ++G__34599__i;}
  args = new cljs.core.IndexedSeq(G__34599__a,0,null);
} 
return G__34598__delegate.call(this,args);};
G__34598.cljs$lang$maxFixedArity = 0;
G__34598.cljs$lang$applyTo = (function (arglist__34600){
var args = cljs.core.seq(arglist__34600);
return G__34598__delegate(args);
});
G__34598.cljs$core$IFn$_invoke$arity$variadic = G__34598__delegate;
return G__34598;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34601_SHARP_,p2__34602_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34601_SHARP_)].join('')),p2__34602_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34603_SHARP_,p2__34604_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34603_SHARP_)].join(''),p2__34604_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34605 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34605.addCallback(((function (G__34605){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34605))
);

G__34605.addErrback(((function (G__34605){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34605))
);

return G__34605;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34606){if((e34606 instanceof Error)){
var e = e34606;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34606;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34607){if((e34607 instanceof Error)){
var e = e34607;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34607;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34608 = cljs.core._EQ_;
var expr__34609 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34608.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34609))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34608.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34609))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34608.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34609))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34608,expr__34609){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34608,expr__34609))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34611,callback){
var map__34612 = p__34611;
var map__34612__$1 = ((((!((map__34612 == null)))?((((map__34612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34612):map__34612);
var file_msg = map__34612__$1;
var request_url = cljs.core.get.call(null,map__34612__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28051__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34612,map__34612__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34612,map__34612__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto__){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto__){
return (function (state_34652){
var state_val_34653 = (state_34652[(1)]);
if((state_val_34653 === (7))){
var inst_34648 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
var statearr_34654_34681 = state_34652__$1;
(statearr_34654_34681[(2)] = inst_34648);

(statearr_34654_34681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (1))){
var state_34652__$1 = state_34652;
var statearr_34655_34682 = state_34652__$1;
(statearr_34655_34682[(2)] = null);

(statearr_34655_34682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (4))){
var inst_34616 = (state_34652[(7)]);
var inst_34616__$1 = (state_34652[(2)]);
var state_34652__$1 = (function (){var statearr_34656 = state_34652;
(statearr_34656[(7)] = inst_34616__$1);

return statearr_34656;
})();
if(cljs.core.truth_(inst_34616__$1)){
var statearr_34657_34683 = state_34652__$1;
(statearr_34657_34683[(1)] = (5));

} else {
var statearr_34658_34684 = state_34652__$1;
(statearr_34658_34684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (15))){
var inst_34633 = (state_34652[(8)]);
var inst_34630 = (state_34652[(9)]);
var inst_34635 = inst_34633.call(null,inst_34630);
var state_34652__$1 = state_34652;
var statearr_34659_34685 = state_34652__$1;
(statearr_34659_34685[(2)] = inst_34635);

(statearr_34659_34685[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (13))){
var inst_34642 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
var statearr_34660_34686 = state_34652__$1;
(statearr_34660_34686[(2)] = inst_34642);

(statearr_34660_34686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (6))){
var state_34652__$1 = state_34652;
var statearr_34661_34687 = state_34652__$1;
(statearr_34661_34687[(2)] = null);

(statearr_34661_34687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (17))){
var inst_34639 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
var statearr_34662_34688 = state_34652__$1;
(statearr_34662_34688[(2)] = inst_34639);

(statearr_34662_34688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (3))){
var inst_34650 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34652__$1,inst_34650);
} else {
if((state_val_34653 === (12))){
var state_34652__$1 = state_34652;
var statearr_34663_34689 = state_34652__$1;
(statearr_34663_34689[(2)] = null);

(statearr_34663_34689[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (2))){
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34652__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34653 === (11))){
var inst_34621 = (state_34652[(10)]);
var inst_34628 = figwheel.client.file_reloading.blocking_load.call(null,inst_34621);
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34652__$1,(14),inst_34628);
} else {
if((state_val_34653 === (9))){
var inst_34621 = (state_34652[(10)]);
var state_34652__$1 = state_34652;
if(cljs.core.truth_(inst_34621)){
var statearr_34664_34690 = state_34652__$1;
(statearr_34664_34690[(1)] = (11));

} else {
var statearr_34665_34691 = state_34652__$1;
(statearr_34665_34691[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (5))){
var inst_34616 = (state_34652[(7)]);
var inst_34622 = (state_34652[(11)]);
var inst_34621 = cljs.core.nth.call(null,inst_34616,(0),null);
var inst_34622__$1 = cljs.core.nth.call(null,inst_34616,(1),null);
var state_34652__$1 = (function (){var statearr_34666 = state_34652;
(statearr_34666[(10)] = inst_34621);

(statearr_34666[(11)] = inst_34622__$1);

return statearr_34666;
})();
if(cljs.core.truth_(inst_34622__$1)){
var statearr_34667_34692 = state_34652__$1;
(statearr_34667_34692[(1)] = (8));

} else {
var statearr_34668_34693 = state_34652__$1;
(statearr_34668_34693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (14))){
var inst_34621 = (state_34652[(10)]);
var inst_34633 = (state_34652[(8)]);
var inst_34630 = (state_34652[(2)]);
var inst_34631 = console.log("Loading!",inst_34621);
var inst_34632 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34633__$1 = cljs.core.get.call(null,inst_34632,inst_34621);
var state_34652__$1 = (function (){var statearr_34669 = state_34652;
(statearr_34669[(12)] = inst_34631);

(statearr_34669[(8)] = inst_34633__$1);

(statearr_34669[(9)] = inst_34630);

return statearr_34669;
})();
if(cljs.core.truth_(inst_34633__$1)){
var statearr_34670_34694 = state_34652__$1;
(statearr_34670_34694[(1)] = (15));

} else {
var statearr_34671_34695 = state_34652__$1;
(statearr_34671_34695[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (16))){
var inst_34630 = (state_34652[(9)]);
var inst_34637 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34630);
var state_34652__$1 = state_34652;
var statearr_34672_34696 = state_34652__$1;
(statearr_34672_34696[(2)] = inst_34637);

(statearr_34672_34696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (10))){
var inst_34644 = (state_34652[(2)]);
var state_34652__$1 = (function (){var statearr_34673 = state_34652;
(statearr_34673[(13)] = inst_34644);

return statearr_34673;
})();
var statearr_34674_34697 = state_34652__$1;
(statearr_34674_34697[(2)] = null);

(statearr_34674_34697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (8))){
var inst_34622 = (state_34652[(11)]);
var inst_34624 = console.log("Evaling!",inst_34622);
var inst_34625 = eval(inst_34622);
var state_34652__$1 = (function (){var statearr_34675 = state_34652;
(statearr_34675[(14)] = inst_34624);

return statearr_34675;
})();
var statearr_34676_34698 = state_34652__$1;
(statearr_34676_34698[(2)] = inst_34625);

(statearr_34676_34698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto__))
;
return ((function (switch__31227__auto__,c__31315__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31228__auto__ = null;
var figwheel$client$file_reloading$state_machine__31228__auto____0 = (function (){
var statearr_34677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34677[(0)] = figwheel$client$file_reloading$state_machine__31228__auto__);

(statearr_34677[(1)] = (1));

return statearr_34677;
});
var figwheel$client$file_reloading$state_machine__31228__auto____1 = (function (state_34652){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_34652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e34678){if((e34678 instanceof Object)){
var ex__31231__auto__ = e34678;
var statearr_34679_34699 = state_34652;
(statearr_34679_34699[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34700 = state_34652;
state_34652 = G__34700;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31228__auto__ = function(state_34652){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31228__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31228__auto____1.call(this,state_34652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31228__auto____0;
figwheel$client$file_reloading$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31228__auto____1;
return figwheel$client$file_reloading$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto__))
})();
var state__31317__auto__ = (function (){var statearr_34680 = f__31316__auto__.call(null);
(statearr_34680[(6)] = c__31315__auto__);

return statearr_34680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto__))
);

return c__31315__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34702 = arguments.length;
switch (G__34702) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34704,callback){
var map__34705 = p__34704;
var map__34705__$1 = ((((!((map__34705 == null)))?((((map__34705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34705):map__34705);
var file_msg = map__34705__$1;
var namespace = cljs.core.get.call(null,map__34705__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34705,map__34705__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34705,map__34705__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34707){
var map__34708 = p__34707;
var map__34708__$1 = ((((!((map__34708 == null)))?((((map__34708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34708):map__34708);
var file_msg = map__34708__$1;
var namespace = cljs.core.get.call(null,map__34708__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34710){
var map__34711 = p__34710;
var map__34711__$1 = ((((!((map__34711 == null)))?((((map__34711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34711):map__34711);
var file_msg = map__34711__$1;
var namespace = cljs.core.get.call(null,map__34711__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28039__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28039__auto__){
var or__28051__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
var or__28051__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28051__auto____$1)){
return or__28051__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28039__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34713,callback){
var map__34714 = p__34713;
var map__34714__$1 = ((((!((map__34714 == null)))?((((map__34714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34714):map__34714);
var file_msg = map__34714__$1;
var request_url = cljs.core.get.call(null,map__34714__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34714__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31315__auto___34764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___34764,out){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___34764,out){
return (function (state_34749){
var state_val_34750 = (state_34749[(1)]);
if((state_val_34750 === (1))){
var inst_34723 = cljs.core.seq.call(null,files);
var inst_34724 = cljs.core.first.call(null,inst_34723);
var inst_34725 = cljs.core.next.call(null,inst_34723);
var inst_34726 = files;
var state_34749__$1 = (function (){var statearr_34751 = state_34749;
(statearr_34751[(7)] = inst_34725);

(statearr_34751[(8)] = inst_34724);

(statearr_34751[(9)] = inst_34726);

return statearr_34751;
})();
var statearr_34752_34765 = state_34749__$1;
(statearr_34752_34765[(2)] = null);

(statearr_34752_34765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (2))){
var inst_34726 = (state_34749[(9)]);
var inst_34732 = (state_34749[(10)]);
var inst_34731 = cljs.core.seq.call(null,inst_34726);
var inst_34732__$1 = cljs.core.first.call(null,inst_34731);
var inst_34733 = cljs.core.next.call(null,inst_34731);
var inst_34734 = (inst_34732__$1 == null);
var inst_34735 = cljs.core.not.call(null,inst_34734);
var state_34749__$1 = (function (){var statearr_34753 = state_34749;
(statearr_34753[(10)] = inst_34732__$1);

(statearr_34753[(11)] = inst_34733);

return statearr_34753;
})();
if(inst_34735){
var statearr_34754_34766 = state_34749__$1;
(statearr_34754_34766[(1)] = (4));

} else {
var statearr_34755_34767 = state_34749__$1;
(statearr_34755_34767[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (3))){
var inst_34747 = (state_34749[(2)]);
var state_34749__$1 = state_34749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34749__$1,inst_34747);
} else {
if((state_val_34750 === (4))){
var inst_34732 = (state_34749[(10)]);
var inst_34737 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34732);
var state_34749__$1 = state_34749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34749__$1,(7),inst_34737);
} else {
if((state_val_34750 === (5))){
var inst_34743 = cljs.core.async.close_BANG_.call(null,out);
var state_34749__$1 = state_34749;
var statearr_34756_34768 = state_34749__$1;
(statearr_34756_34768[(2)] = inst_34743);

(statearr_34756_34768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (6))){
var inst_34745 = (state_34749[(2)]);
var state_34749__$1 = state_34749;
var statearr_34757_34769 = state_34749__$1;
(statearr_34757_34769[(2)] = inst_34745);

(statearr_34757_34769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (7))){
var inst_34733 = (state_34749[(11)]);
var inst_34739 = (state_34749[(2)]);
var inst_34740 = cljs.core.async.put_BANG_.call(null,out,inst_34739);
var inst_34726 = inst_34733;
var state_34749__$1 = (function (){var statearr_34758 = state_34749;
(statearr_34758[(12)] = inst_34740);

(statearr_34758[(9)] = inst_34726);

return statearr_34758;
})();
var statearr_34759_34770 = state_34749__$1;
(statearr_34759_34770[(2)] = null);

(statearr_34759_34770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31315__auto___34764,out))
;
return ((function (switch__31227__auto__,c__31315__auto___34764,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto____0 = (function (){
var statearr_34760 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34760[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto__);

(statearr_34760[(1)] = (1));

return statearr_34760;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto____1 = (function (state_34749){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_34749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e34761){if((e34761 instanceof Object)){
var ex__31231__auto__ = e34761;
var statearr_34762_34771 = state_34749;
(statearr_34762_34771[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34772 = state_34749;
state_34749 = G__34772;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto__ = function(state_34749){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto____1.call(this,state_34749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___34764,out))
})();
var state__31317__auto__ = (function (){var statearr_34763 = f__31316__auto__.call(null);
(statearr_34763[(6)] = c__31315__auto___34764);

return statearr_34763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___34764,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34773,opts){
var map__34774 = p__34773;
var map__34774__$1 = ((((!((map__34774 == null)))?((((map__34774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34774):map__34774);
var eval_body = cljs.core.get.call(null,map__34774__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34774__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28039__auto__ = eval_body;
if(cljs.core.truth_(and__28039__auto__)){
return typeof eval_body === 'string';
} else {
return and__28039__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34776){var e = e34776;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34777_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34777_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34778){
var vec__34779 = p__34778;
var k = cljs.core.nth.call(null,vec__34779,(0),null);
var v = cljs.core.nth.call(null,vec__34779,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34782){
var vec__34783 = p__34782;
var k = cljs.core.nth.call(null,vec__34783,(0),null);
var v = cljs.core.nth.call(null,vec__34783,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34789,p__34790){
var map__34791 = p__34789;
var map__34791__$1 = ((((!((map__34791 == null)))?((((map__34791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34791):map__34791);
var opts = map__34791__$1;
var before_jsload = cljs.core.get.call(null,map__34791__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34791__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34791__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34792 = p__34790;
var map__34792__$1 = ((((!((map__34792 == null)))?((((map__34792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34792):map__34792);
var msg = map__34792__$1;
var files = cljs.core.get.call(null,map__34792__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34792__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34792__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34946){
var state_val_34947 = (state_34946[(1)]);
if((state_val_34947 === (7))){
var inst_34808 = (state_34946[(7)]);
var inst_34807 = (state_34946[(8)]);
var inst_34809 = (state_34946[(9)]);
var inst_34806 = (state_34946[(10)]);
var inst_34814 = cljs.core._nth.call(null,inst_34807,inst_34809);
var inst_34815 = figwheel.client.file_reloading.eval_body.call(null,inst_34814,opts);
var inst_34816 = (inst_34809 + (1));
var tmp34948 = inst_34808;
var tmp34949 = inst_34807;
var tmp34950 = inst_34806;
var inst_34806__$1 = tmp34950;
var inst_34807__$1 = tmp34949;
var inst_34808__$1 = tmp34948;
var inst_34809__$1 = inst_34816;
var state_34946__$1 = (function (){var statearr_34951 = state_34946;
(statearr_34951[(7)] = inst_34808__$1);

(statearr_34951[(8)] = inst_34807__$1);

(statearr_34951[(9)] = inst_34809__$1);

(statearr_34951[(10)] = inst_34806__$1);

(statearr_34951[(11)] = inst_34815);

return statearr_34951;
})();
var statearr_34952_35035 = state_34946__$1;
(statearr_34952_35035[(2)] = null);

(statearr_34952_35035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (20))){
var inst_34849 = (state_34946[(12)]);
var inst_34857 = figwheel.client.file_reloading.sort_files.call(null,inst_34849);
var state_34946__$1 = state_34946;
var statearr_34953_35036 = state_34946__$1;
(statearr_34953_35036[(2)] = inst_34857);

(statearr_34953_35036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (27))){
var state_34946__$1 = state_34946;
var statearr_34954_35037 = state_34946__$1;
(statearr_34954_35037[(2)] = null);

(statearr_34954_35037[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (1))){
var inst_34798 = (state_34946[(13)]);
var inst_34795 = before_jsload.call(null,files);
var inst_34796 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34797 = (function (){return ((function (inst_34798,inst_34795,inst_34796,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34786_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34786_SHARP_);
});
;})(inst_34798,inst_34795,inst_34796,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34798__$1 = cljs.core.filter.call(null,inst_34797,files);
var inst_34799 = cljs.core.not_empty.call(null,inst_34798__$1);
var state_34946__$1 = (function (){var statearr_34955 = state_34946;
(statearr_34955[(14)] = inst_34796);

(statearr_34955[(13)] = inst_34798__$1);

(statearr_34955[(15)] = inst_34795);

return statearr_34955;
})();
if(cljs.core.truth_(inst_34799)){
var statearr_34956_35038 = state_34946__$1;
(statearr_34956_35038[(1)] = (2));

} else {
var statearr_34957_35039 = state_34946__$1;
(statearr_34957_35039[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (24))){
var state_34946__$1 = state_34946;
var statearr_34958_35040 = state_34946__$1;
(statearr_34958_35040[(2)] = null);

(statearr_34958_35040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (39))){
var inst_34899 = (state_34946[(16)]);
var state_34946__$1 = state_34946;
var statearr_34959_35041 = state_34946__$1;
(statearr_34959_35041[(2)] = inst_34899);

(statearr_34959_35041[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (46))){
var inst_34941 = (state_34946[(2)]);
var state_34946__$1 = state_34946;
var statearr_34960_35042 = state_34946__$1;
(statearr_34960_35042[(2)] = inst_34941);

(statearr_34960_35042[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (4))){
var inst_34843 = (state_34946[(2)]);
var inst_34844 = cljs.core.List.EMPTY;
var inst_34845 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34844);
var inst_34846 = (function (){return ((function (inst_34843,inst_34844,inst_34845,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34787_SHARP_){
var and__28039__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34787_SHARP_);
if(cljs.core.truth_(and__28039__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34787_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34787_SHARP_)));
} else {
return and__28039__auto__;
}
});
;})(inst_34843,inst_34844,inst_34845,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34847 = cljs.core.filter.call(null,inst_34846,files);
var inst_34848 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34849 = cljs.core.concat.call(null,inst_34847,inst_34848);
var state_34946__$1 = (function (){var statearr_34961 = state_34946;
(statearr_34961[(17)] = inst_34843);

(statearr_34961[(18)] = inst_34845);

(statearr_34961[(12)] = inst_34849);

return statearr_34961;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34962_35043 = state_34946__$1;
(statearr_34962_35043[(1)] = (16));

} else {
var statearr_34963_35044 = state_34946__$1;
(statearr_34963_35044[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (15))){
var inst_34833 = (state_34946[(2)]);
var state_34946__$1 = state_34946;
var statearr_34964_35045 = state_34946__$1;
(statearr_34964_35045[(2)] = inst_34833);

(statearr_34964_35045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (21))){
var inst_34859 = (state_34946[(19)]);
var inst_34859__$1 = (state_34946[(2)]);
var inst_34860 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34859__$1);
var state_34946__$1 = (function (){var statearr_34965 = state_34946;
(statearr_34965[(19)] = inst_34859__$1);

return statearr_34965;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34946__$1,(22),inst_34860);
} else {
if((state_val_34947 === (31))){
var inst_34944 = (state_34946[(2)]);
var state_34946__$1 = state_34946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34946__$1,inst_34944);
} else {
if((state_val_34947 === (32))){
var inst_34899 = (state_34946[(16)]);
var inst_34904 = inst_34899.cljs$lang$protocol_mask$partition0$;
var inst_34905 = (inst_34904 & (64));
var inst_34906 = inst_34899.cljs$core$ISeq$;
var inst_34907 = (cljs.core.PROTOCOL_SENTINEL === inst_34906);
var inst_34908 = (inst_34905) || (inst_34907);
var state_34946__$1 = state_34946;
if(cljs.core.truth_(inst_34908)){
var statearr_34966_35046 = state_34946__$1;
(statearr_34966_35046[(1)] = (35));

} else {
var statearr_34967_35047 = state_34946__$1;
(statearr_34967_35047[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (40))){
var inst_34921 = (state_34946[(20)]);
var inst_34920 = (state_34946[(2)]);
var inst_34921__$1 = cljs.core.get.call(null,inst_34920,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34922 = cljs.core.get.call(null,inst_34920,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34923 = cljs.core.not_empty.call(null,inst_34921__$1);
var state_34946__$1 = (function (){var statearr_34968 = state_34946;
(statearr_34968[(20)] = inst_34921__$1);

(statearr_34968[(21)] = inst_34922);

return statearr_34968;
})();
if(cljs.core.truth_(inst_34923)){
var statearr_34969_35048 = state_34946__$1;
(statearr_34969_35048[(1)] = (41));

} else {
var statearr_34970_35049 = state_34946__$1;
(statearr_34970_35049[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (33))){
var state_34946__$1 = state_34946;
var statearr_34971_35050 = state_34946__$1;
(statearr_34971_35050[(2)] = false);

(statearr_34971_35050[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (13))){
var inst_34819 = (state_34946[(22)]);
var inst_34823 = cljs.core.chunk_first.call(null,inst_34819);
var inst_34824 = cljs.core.chunk_rest.call(null,inst_34819);
var inst_34825 = cljs.core.count.call(null,inst_34823);
var inst_34806 = inst_34824;
var inst_34807 = inst_34823;
var inst_34808 = inst_34825;
var inst_34809 = (0);
var state_34946__$1 = (function (){var statearr_34972 = state_34946;
(statearr_34972[(7)] = inst_34808);

(statearr_34972[(8)] = inst_34807);

(statearr_34972[(9)] = inst_34809);

(statearr_34972[(10)] = inst_34806);

return statearr_34972;
})();
var statearr_34973_35051 = state_34946__$1;
(statearr_34973_35051[(2)] = null);

(statearr_34973_35051[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (22))){
var inst_34863 = (state_34946[(23)]);
var inst_34862 = (state_34946[(24)]);
var inst_34859 = (state_34946[(19)]);
var inst_34867 = (state_34946[(25)]);
var inst_34862__$1 = (state_34946[(2)]);
var inst_34863__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34862__$1);
var inst_34864 = (function (){var all_files = inst_34859;
var res_SINGLEQUOTE_ = inst_34862__$1;
var res = inst_34863__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34863,inst_34862,inst_34859,inst_34867,inst_34862__$1,inst_34863__$1,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34788_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34788_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34863,inst_34862,inst_34859,inst_34867,inst_34862__$1,inst_34863__$1,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34865 = cljs.core.filter.call(null,inst_34864,inst_34862__$1);
var inst_34866 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34867__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34866);
var inst_34868 = cljs.core.not_empty.call(null,inst_34867__$1);
var state_34946__$1 = (function (){var statearr_34974 = state_34946;
(statearr_34974[(23)] = inst_34863__$1);

(statearr_34974[(24)] = inst_34862__$1);

(statearr_34974[(26)] = inst_34865);

(statearr_34974[(25)] = inst_34867__$1);

return statearr_34974;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_34975_35052 = state_34946__$1;
(statearr_34975_35052[(1)] = (23));

} else {
var statearr_34976_35053 = state_34946__$1;
(statearr_34976_35053[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (36))){
var state_34946__$1 = state_34946;
var statearr_34977_35054 = state_34946__$1;
(statearr_34977_35054[(2)] = false);

(statearr_34977_35054[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (41))){
var inst_34921 = (state_34946[(20)]);
var inst_34925 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34926 = cljs.core.map.call(null,inst_34925,inst_34921);
var inst_34927 = cljs.core.pr_str.call(null,inst_34926);
var inst_34928 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34927)].join('');
var inst_34929 = figwheel.client.utils.log.call(null,inst_34928);
var state_34946__$1 = state_34946;
var statearr_34978_35055 = state_34946__$1;
(statearr_34978_35055[(2)] = inst_34929);

(statearr_34978_35055[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (43))){
var inst_34922 = (state_34946[(21)]);
var inst_34932 = (state_34946[(2)]);
var inst_34933 = cljs.core.not_empty.call(null,inst_34922);
var state_34946__$1 = (function (){var statearr_34979 = state_34946;
(statearr_34979[(27)] = inst_34932);

return statearr_34979;
})();
if(cljs.core.truth_(inst_34933)){
var statearr_34980_35056 = state_34946__$1;
(statearr_34980_35056[(1)] = (44));

} else {
var statearr_34981_35057 = state_34946__$1;
(statearr_34981_35057[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (29))){
var inst_34863 = (state_34946[(23)]);
var inst_34862 = (state_34946[(24)]);
var inst_34899 = (state_34946[(16)]);
var inst_34865 = (state_34946[(26)]);
var inst_34859 = (state_34946[(19)]);
var inst_34867 = (state_34946[(25)]);
var inst_34895 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34898 = (function (){var all_files = inst_34859;
var res_SINGLEQUOTE_ = inst_34862;
var res = inst_34863;
var files_not_loaded = inst_34865;
var dependencies_that_loaded = inst_34867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34863,inst_34862,inst_34899,inst_34865,inst_34859,inst_34867,inst_34895,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34897){
var map__34982 = p__34897;
var map__34982__$1 = ((((!((map__34982 == null)))?((((map__34982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34982):map__34982);
var namespace = cljs.core.get.call(null,map__34982__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34863,inst_34862,inst_34899,inst_34865,inst_34859,inst_34867,inst_34895,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34899__$1 = cljs.core.group_by.call(null,inst_34898,inst_34865);
var inst_34901 = (inst_34899__$1 == null);
var inst_34902 = cljs.core.not.call(null,inst_34901);
var state_34946__$1 = (function (){var statearr_34984 = state_34946;
(statearr_34984[(28)] = inst_34895);

(statearr_34984[(16)] = inst_34899__$1);

return statearr_34984;
})();
if(inst_34902){
var statearr_34985_35058 = state_34946__$1;
(statearr_34985_35058[(1)] = (32));

} else {
var statearr_34986_35059 = state_34946__$1;
(statearr_34986_35059[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (44))){
var inst_34922 = (state_34946[(21)]);
var inst_34935 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34922);
var inst_34936 = cljs.core.pr_str.call(null,inst_34935);
var inst_34937 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34936)].join('');
var inst_34938 = figwheel.client.utils.log.call(null,inst_34937);
var state_34946__$1 = state_34946;
var statearr_34987_35060 = state_34946__$1;
(statearr_34987_35060[(2)] = inst_34938);

(statearr_34987_35060[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (6))){
var inst_34840 = (state_34946[(2)]);
var state_34946__$1 = state_34946;
var statearr_34988_35061 = state_34946__$1;
(statearr_34988_35061[(2)] = inst_34840);

(statearr_34988_35061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (28))){
var inst_34865 = (state_34946[(26)]);
var inst_34892 = (state_34946[(2)]);
var inst_34893 = cljs.core.not_empty.call(null,inst_34865);
var state_34946__$1 = (function (){var statearr_34989 = state_34946;
(statearr_34989[(29)] = inst_34892);

return statearr_34989;
})();
if(cljs.core.truth_(inst_34893)){
var statearr_34990_35062 = state_34946__$1;
(statearr_34990_35062[(1)] = (29));

} else {
var statearr_34991_35063 = state_34946__$1;
(statearr_34991_35063[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (25))){
var inst_34863 = (state_34946[(23)]);
var inst_34879 = (state_34946[(2)]);
var inst_34880 = cljs.core.not_empty.call(null,inst_34863);
var state_34946__$1 = (function (){var statearr_34992 = state_34946;
(statearr_34992[(30)] = inst_34879);

return statearr_34992;
})();
if(cljs.core.truth_(inst_34880)){
var statearr_34993_35064 = state_34946__$1;
(statearr_34993_35064[(1)] = (26));

} else {
var statearr_34994_35065 = state_34946__$1;
(statearr_34994_35065[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (34))){
var inst_34915 = (state_34946[(2)]);
var state_34946__$1 = state_34946;
if(cljs.core.truth_(inst_34915)){
var statearr_34995_35066 = state_34946__$1;
(statearr_34995_35066[(1)] = (38));

} else {
var statearr_34996_35067 = state_34946__$1;
(statearr_34996_35067[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (17))){
var state_34946__$1 = state_34946;
var statearr_34997_35068 = state_34946__$1;
(statearr_34997_35068[(2)] = recompile_dependents);

(statearr_34997_35068[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (3))){
var state_34946__$1 = state_34946;
var statearr_34998_35069 = state_34946__$1;
(statearr_34998_35069[(2)] = null);

(statearr_34998_35069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (12))){
var inst_34836 = (state_34946[(2)]);
var state_34946__$1 = state_34946;
var statearr_34999_35070 = state_34946__$1;
(statearr_34999_35070[(2)] = inst_34836);

(statearr_34999_35070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (2))){
var inst_34798 = (state_34946[(13)]);
var inst_34805 = cljs.core.seq.call(null,inst_34798);
var inst_34806 = inst_34805;
var inst_34807 = null;
var inst_34808 = (0);
var inst_34809 = (0);
var state_34946__$1 = (function (){var statearr_35000 = state_34946;
(statearr_35000[(7)] = inst_34808);

(statearr_35000[(8)] = inst_34807);

(statearr_35000[(9)] = inst_34809);

(statearr_35000[(10)] = inst_34806);

return statearr_35000;
})();
var statearr_35001_35071 = state_34946__$1;
(statearr_35001_35071[(2)] = null);

(statearr_35001_35071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (23))){
var inst_34863 = (state_34946[(23)]);
var inst_34862 = (state_34946[(24)]);
var inst_34865 = (state_34946[(26)]);
var inst_34859 = (state_34946[(19)]);
var inst_34867 = (state_34946[(25)]);
var inst_34870 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34872 = (function (){var all_files = inst_34859;
var res_SINGLEQUOTE_ = inst_34862;
var res = inst_34863;
var files_not_loaded = inst_34865;
var dependencies_that_loaded = inst_34867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34863,inst_34862,inst_34865,inst_34859,inst_34867,inst_34870,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34871){
var map__35002 = p__34871;
var map__35002__$1 = ((((!((map__35002 == null)))?((((map__35002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35002):map__35002);
var request_url = cljs.core.get.call(null,map__35002__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34863,inst_34862,inst_34865,inst_34859,inst_34867,inst_34870,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34873 = cljs.core.reverse.call(null,inst_34867);
var inst_34874 = cljs.core.map.call(null,inst_34872,inst_34873);
var inst_34875 = cljs.core.pr_str.call(null,inst_34874);
var inst_34876 = figwheel.client.utils.log.call(null,inst_34875);
var state_34946__$1 = (function (){var statearr_35004 = state_34946;
(statearr_35004[(31)] = inst_34870);

return statearr_35004;
})();
var statearr_35005_35072 = state_34946__$1;
(statearr_35005_35072[(2)] = inst_34876);

(statearr_35005_35072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (35))){
var state_34946__$1 = state_34946;
var statearr_35006_35073 = state_34946__$1;
(statearr_35006_35073[(2)] = true);

(statearr_35006_35073[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (19))){
var inst_34849 = (state_34946[(12)]);
var inst_34855 = figwheel.client.file_reloading.expand_files.call(null,inst_34849);
var state_34946__$1 = state_34946;
var statearr_35007_35074 = state_34946__$1;
(statearr_35007_35074[(2)] = inst_34855);

(statearr_35007_35074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (11))){
var state_34946__$1 = state_34946;
var statearr_35008_35075 = state_34946__$1;
(statearr_35008_35075[(2)] = null);

(statearr_35008_35075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (9))){
var inst_34838 = (state_34946[(2)]);
var state_34946__$1 = state_34946;
var statearr_35009_35076 = state_34946__$1;
(statearr_35009_35076[(2)] = inst_34838);

(statearr_35009_35076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (5))){
var inst_34808 = (state_34946[(7)]);
var inst_34809 = (state_34946[(9)]);
var inst_34811 = (inst_34809 < inst_34808);
var inst_34812 = inst_34811;
var state_34946__$1 = state_34946;
if(cljs.core.truth_(inst_34812)){
var statearr_35010_35077 = state_34946__$1;
(statearr_35010_35077[(1)] = (7));

} else {
var statearr_35011_35078 = state_34946__$1;
(statearr_35011_35078[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (14))){
var inst_34819 = (state_34946[(22)]);
var inst_34828 = cljs.core.first.call(null,inst_34819);
var inst_34829 = figwheel.client.file_reloading.eval_body.call(null,inst_34828,opts);
var inst_34830 = cljs.core.next.call(null,inst_34819);
var inst_34806 = inst_34830;
var inst_34807 = null;
var inst_34808 = (0);
var inst_34809 = (0);
var state_34946__$1 = (function (){var statearr_35012 = state_34946;
(statearr_35012[(32)] = inst_34829);

(statearr_35012[(7)] = inst_34808);

(statearr_35012[(8)] = inst_34807);

(statearr_35012[(9)] = inst_34809);

(statearr_35012[(10)] = inst_34806);

return statearr_35012;
})();
var statearr_35013_35079 = state_34946__$1;
(statearr_35013_35079[(2)] = null);

(statearr_35013_35079[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (45))){
var state_34946__$1 = state_34946;
var statearr_35014_35080 = state_34946__$1;
(statearr_35014_35080[(2)] = null);

(statearr_35014_35080[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (26))){
var inst_34863 = (state_34946[(23)]);
var inst_34862 = (state_34946[(24)]);
var inst_34865 = (state_34946[(26)]);
var inst_34859 = (state_34946[(19)]);
var inst_34867 = (state_34946[(25)]);
var inst_34882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34884 = (function (){var all_files = inst_34859;
var res_SINGLEQUOTE_ = inst_34862;
var res = inst_34863;
var files_not_loaded = inst_34865;
var dependencies_that_loaded = inst_34867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34863,inst_34862,inst_34865,inst_34859,inst_34867,inst_34882,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34883){
var map__35015 = p__34883;
var map__35015__$1 = ((((!((map__35015 == null)))?((((map__35015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35015):map__35015);
var namespace = cljs.core.get.call(null,map__35015__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35015__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34863,inst_34862,inst_34865,inst_34859,inst_34867,inst_34882,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34885 = cljs.core.map.call(null,inst_34884,inst_34863);
var inst_34886 = cljs.core.pr_str.call(null,inst_34885);
var inst_34887 = figwheel.client.utils.log.call(null,inst_34886);
var inst_34888 = (function (){var all_files = inst_34859;
var res_SINGLEQUOTE_ = inst_34862;
var res = inst_34863;
var files_not_loaded = inst_34865;
var dependencies_that_loaded = inst_34867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34863,inst_34862,inst_34865,inst_34859,inst_34867,inst_34882,inst_34884,inst_34885,inst_34886,inst_34887,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34863,inst_34862,inst_34865,inst_34859,inst_34867,inst_34882,inst_34884,inst_34885,inst_34886,inst_34887,state_val_34947,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34889 = setTimeout(inst_34888,(10));
var state_34946__$1 = (function (){var statearr_35017 = state_34946;
(statearr_35017[(33)] = inst_34882);

(statearr_35017[(34)] = inst_34887);

return statearr_35017;
})();
var statearr_35018_35081 = state_34946__$1;
(statearr_35018_35081[(2)] = inst_34889);

(statearr_35018_35081[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (16))){
var state_34946__$1 = state_34946;
var statearr_35019_35082 = state_34946__$1;
(statearr_35019_35082[(2)] = reload_dependents);

(statearr_35019_35082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (38))){
var inst_34899 = (state_34946[(16)]);
var inst_34917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34899);
var state_34946__$1 = state_34946;
var statearr_35020_35083 = state_34946__$1;
(statearr_35020_35083[(2)] = inst_34917);

(statearr_35020_35083[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (30))){
var state_34946__$1 = state_34946;
var statearr_35021_35084 = state_34946__$1;
(statearr_35021_35084[(2)] = null);

(statearr_35021_35084[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (10))){
var inst_34819 = (state_34946[(22)]);
var inst_34821 = cljs.core.chunked_seq_QMARK_.call(null,inst_34819);
var state_34946__$1 = state_34946;
if(inst_34821){
var statearr_35022_35085 = state_34946__$1;
(statearr_35022_35085[(1)] = (13));

} else {
var statearr_35023_35086 = state_34946__$1;
(statearr_35023_35086[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (18))){
var inst_34853 = (state_34946[(2)]);
var state_34946__$1 = state_34946;
if(cljs.core.truth_(inst_34853)){
var statearr_35024_35087 = state_34946__$1;
(statearr_35024_35087[(1)] = (19));

} else {
var statearr_35025_35088 = state_34946__$1;
(statearr_35025_35088[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (42))){
var state_34946__$1 = state_34946;
var statearr_35026_35089 = state_34946__$1;
(statearr_35026_35089[(2)] = null);

(statearr_35026_35089[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (37))){
var inst_34912 = (state_34946[(2)]);
var state_34946__$1 = state_34946;
var statearr_35027_35090 = state_34946__$1;
(statearr_35027_35090[(2)] = inst_34912);

(statearr_35027_35090[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34947 === (8))){
var inst_34819 = (state_34946[(22)]);
var inst_34806 = (state_34946[(10)]);
var inst_34819__$1 = cljs.core.seq.call(null,inst_34806);
var state_34946__$1 = (function (){var statearr_35028 = state_34946;
(statearr_35028[(22)] = inst_34819__$1);

return statearr_35028;
})();
if(inst_34819__$1){
var statearr_35029_35091 = state_34946__$1;
(statearr_35029_35091[(1)] = (10));

} else {
var statearr_35030_35092 = state_34946__$1;
(statearr_35030_35092[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31227__auto__,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto____0 = (function (){
var statearr_35031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35031[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto__);

(statearr_35031[(1)] = (1));

return statearr_35031;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto____1 = (function (state_34946){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_34946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e35032){if((e35032 instanceof Object)){
var ex__31231__auto__ = e35032;
var statearr_35033_35093 = state_34946;
(statearr_35033_35093[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35094 = state_34946;
state_34946 = G__35094;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto__ = function(state_34946){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto____1.call(this,state_34946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31317__auto__ = (function (){var statearr_35034 = f__31316__auto__.call(null);
(statearr_35034[(6)] = c__31315__auto__);

return statearr_35034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto__,map__34791,map__34791__$1,opts,before_jsload,on_jsload,reload_dependents,map__34792,map__34792__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31315__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35097,link){
var map__35098 = p__35097;
var map__35098__$1 = ((((!((map__35098 == null)))?((((map__35098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35098):map__35098);
var file = cljs.core.get.call(null,map__35098__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35098,map__35098__$1,file){
return (function (p1__35095_SHARP_,p2__35096_SHARP_){
if(cljs.core._EQ_.call(null,p1__35095_SHARP_,p2__35096_SHARP_)){
return p1__35095_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35098,map__35098__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35101){
var map__35102 = p__35101;
var map__35102__$1 = ((((!((map__35102 == null)))?((((map__35102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35102):map__35102);
var match_length = cljs.core.get.call(null,map__35102__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35102__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35100_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35100_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35104_SHARP_,p2__35105_SHARP_){
return cljs.core.assoc.call(null,p1__35104_SHARP_,cljs.core.get.call(null,p2__35105_SHARP_,key),p2__35105_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35106 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35106);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35106);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35107,p__35108){
var map__35109 = p__35107;
var map__35109__$1 = ((((!((map__35109 == null)))?((((map__35109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35109):map__35109);
var on_cssload = cljs.core.get.call(null,map__35109__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35110 = p__35108;
var map__35110__$1 = ((((!((map__35110 == null)))?((((map__35110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35110):map__35110);
var files_msg = map__35110__$1;
var files = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1517067019374
