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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34443_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34443_SHARP_));
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
var seq__34444 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34445 = null;
var count__34446 = (0);
var i__34447 = (0);
while(true){
if((i__34447 < count__34446)){
var n = cljs.core._nth.call(null,chunk__34445,i__34447);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34448 = seq__34444;
var G__34449 = chunk__34445;
var G__34450 = count__34446;
var G__34451 = (i__34447 + (1));
seq__34444 = G__34448;
chunk__34445 = G__34449;
count__34446 = G__34450;
i__34447 = G__34451;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34444);
if(temp__4657__auto__){
var seq__34444__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34444__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__34444__$1);
var G__34452 = cljs.core.chunk_rest.call(null,seq__34444__$1);
var G__34453 = c__28890__auto__;
var G__34454 = cljs.core.count.call(null,c__28890__auto__);
var G__34455 = (0);
seq__34444 = G__34452;
chunk__34445 = G__34453;
count__34446 = G__34454;
i__34447 = G__34455;
continue;
} else {
var n = cljs.core.first.call(null,seq__34444__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34456 = cljs.core.next.call(null,seq__34444__$1);
var G__34457 = null;
var G__34458 = (0);
var G__34459 = (0);
seq__34444 = G__34456;
chunk__34445 = G__34457;
count__34446 = G__34458;
i__34447 = G__34459;
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
return cljs.core.some.call(null,(function (p__34460){
var vec__34461 = p__34460;
var _ = cljs.core.nth.call(null,vec__34461,(0),null);
var v = cljs.core.nth.call(null,vec__34461,(1),null);
var and__28039__auto__ = v;
if(cljs.core.truth_(and__28039__auto__)){
return v.call(null,dep);
} else {
return and__28039__auto__;
}
}),cljs.core.filter.call(null,(function (p__34464){
var vec__34465 = p__34464;
var k = cljs.core.nth.call(null,vec__34465,(0),null);
var v = cljs.core.nth.call(null,vec__34465,(1),null);
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

var seq__34477_34485 = cljs.core.seq.call(null,deps);
var chunk__34478_34486 = null;
var count__34479_34487 = (0);
var i__34480_34488 = (0);
while(true){
if((i__34480_34488 < count__34479_34487)){
var dep_34489 = cljs.core._nth.call(null,chunk__34478_34486,i__34480_34488);
if(cljs.core.truth_((function (){var and__28039__auto__ = dep_34489;
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34489));
} else {
return and__28039__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34489,(depth + (1)),state);
} else {
}

var G__34490 = seq__34477_34485;
var G__34491 = chunk__34478_34486;
var G__34492 = count__34479_34487;
var G__34493 = (i__34480_34488 + (1));
seq__34477_34485 = G__34490;
chunk__34478_34486 = G__34491;
count__34479_34487 = G__34492;
i__34480_34488 = G__34493;
continue;
} else {
var temp__4657__auto___34494 = cljs.core.seq.call(null,seq__34477_34485);
if(temp__4657__auto___34494){
var seq__34477_34495__$1 = temp__4657__auto___34494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34477_34495__$1)){
var c__28890__auto___34496 = cljs.core.chunk_first.call(null,seq__34477_34495__$1);
var G__34497 = cljs.core.chunk_rest.call(null,seq__34477_34495__$1);
var G__34498 = c__28890__auto___34496;
var G__34499 = cljs.core.count.call(null,c__28890__auto___34496);
var G__34500 = (0);
seq__34477_34485 = G__34497;
chunk__34478_34486 = G__34498;
count__34479_34487 = G__34499;
i__34480_34488 = G__34500;
continue;
} else {
var dep_34501 = cljs.core.first.call(null,seq__34477_34495__$1);
if(cljs.core.truth_((function (){var and__28039__auto__ = dep_34501;
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34501));
} else {
return and__28039__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34501,(depth + (1)),state);
} else {
}

var G__34502 = cljs.core.next.call(null,seq__34477_34495__$1);
var G__34503 = null;
var G__34504 = (0);
var G__34505 = (0);
seq__34477_34485 = G__34502;
chunk__34478_34486 = G__34503;
count__34479_34487 = G__34504;
i__34480_34488 = G__34505;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34481){
var vec__34482 = p__34481;
var seq__34483 = cljs.core.seq.call(null,vec__34482);
var first__34484 = cljs.core.first.call(null,seq__34483);
var seq__34483__$1 = cljs.core.next.call(null,seq__34483);
var x = first__34484;
var xs = seq__34483__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34482,seq__34483,first__34484,seq__34483__$1,x,xs,get_deps__$1){
return (function (p1__34468_SHARP_){
return clojure.set.difference.call(null,p1__34468_SHARP_,x);
});})(vec__34482,seq__34483,first__34484,seq__34483__$1,x,xs,get_deps__$1))
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
var seq__34506 = cljs.core.seq.call(null,provides);
var chunk__34507 = null;
var count__34508 = (0);
var i__34509 = (0);
while(true){
if((i__34509 < count__34508)){
var prov = cljs.core._nth.call(null,chunk__34507,i__34509);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34510_34518 = cljs.core.seq.call(null,requires);
var chunk__34511_34519 = null;
var count__34512_34520 = (0);
var i__34513_34521 = (0);
while(true){
if((i__34513_34521 < count__34512_34520)){
var req_34522 = cljs.core._nth.call(null,chunk__34511_34519,i__34513_34521);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34522,prov);

var G__34523 = seq__34510_34518;
var G__34524 = chunk__34511_34519;
var G__34525 = count__34512_34520;
var G__34526 = (i__34513_34521 + (1));
seq__34510_34518 = G__34523;
chunk__34511_34519 = G__34524;
count__34512_34520 = G__34525;
i__34513_34521 = G__34526;
continue;
} else {
var temp__4657__auto___34527 = cljs.core.seq.call(null,seq__34510_34518);
if(temp__4657__auto___34527){
var seq__34510_34528__$1 = temp__4657__auto___34527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34510_34528__$1)){
var c__28890__auto___34529 = cljs.core.chunk_first.call(null,seq__34510_34528__$1);
var G__34530 = cljs.core.chunk_rest.call(null,seq__34510_34528__$1);
var G__34531 = c__28890__auto___34529;
var G__34532 = cljs.core.count.call(null,c__28890__auto___34529);
var G__34533 = (0);
seq__34510_34518 = G__34530;
chunk__34511_34519 = G__34531;
count__34512_34520 = G__34532;
i__34513_34521 = G__34533;
continue;
} else {
var req_34534 = cljs.core.first.call(null,seq__34510_34528__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34534,prov);

var G__34535 = cljs.core.next.call(null,seq__34510_34528__$1);
var G__34536 = null;
var G__34537 = (0);
var G__34538 = (0);
seq__34510_34518 = G__34535;
chunk__34511_34519 = G__34536;
count__34512_34520 = G__34537;
i__34513_34521 = G__34538;
continue;
}
} else {
}
}
break;
}

var G__34539 = seq__34506;
var G__34540 = chunk__34507;
var G__34541 = count__34508;
var G__34542 = (i__34509 + (1));
seq__34506 = G__34539;
chunk__34507 = G__34540;
count__34508 = G__34541;
i__34509 = G__34542;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34506);
if(temp__4657__auto__){
var seq__34506__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34506__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__34506__$1);
var G__34543 = cljs.core.chunk_rest.call(null,seq__34506__$1);
var G__34544 = c__28890__auto__;
var G__34545 = cljs.core.count.call(null,c__28890__auto__);
var G__34546 = (0);
seq__34506 = G__34543;
chunk__34507 = G__34544;
count__34508 = G__34545;
i__34509 = G__34546;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34506__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34514_34547 = cljs.core.seq.call(null,requires);
var chunk__34515_34548 = null;
var count__34516_34549 = (0);
var i__34517_34550 = (0);
while(true){
if((i__34517_34550 < count__34516_34549)){
var req_34551 = cljs.core._nth.call(null,chunk__34515_34548,i__34517_34550);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34551,prov);

var G__34552 = seq__34514_34547;
var G__34553 = chunk__34515_34548;
var G__34554 = count__34516_34549;
var G__34555 = (i__34517_34550 + (1));
seq__34514_34547 = G__34552;
chunk__34515_34548 = G__34553;
count__34516_34549 = G__34554;
i__34517_34550 = G__34555;
continue;
} else {
var temp__4657__auto___34556__$1 = cljs.core.seq.call(null,seq__34514_34547);
if(temp__4657__auto___34556__$1){
var seq__34514_34557__$1 = temp__4657__auto___34556__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34514_34557__$1)){
var c__28890__auto___34558 = cljs.core.chunk_first.call(null,seq__34514_34557__$1);
var G__34559 = cljs.core.chunk_rest.call(null,seq__34514_34557__$1);
var G__34560 = c__28890__auto___34558;
var G__34561 = cljs.core.count.call(null,c__28890__auto___34558);
var G__34562 = (0);
seq__34514_34547 = G__34559;
chunk__34515_34548 = G__34560;
count__34516_34549 = G__34561;
i__34517_34550 = G__34562;
continue;
} else {
var req_34563 = cljs.core.first.call(null,seq__34514_34557__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34563,prov);

var G__34564 = cljs.core.next.call(null,seq__34514_34557__$1);
var G__34565 = null;
var G__34566 = (0);
var G__34567 = (0);
seq__34514_34547 = G__34564;
chunk__34515_34548 = G__34565;
count__34516_34549 = G__34566;
i__34517_34550 = G__34567;
continue;
}
} else {
}
}
break;
}

var G__34568 = cljs.core.next.call(null,seq__34506__$1);
var G__34569 = null;
var G__34570 = (0);
var G__34571 = (0);
seq__34506 = G__34568;
chunk__34507 = G__34569;
count__34508 = G__34570;
i__34509 = G__34571;
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
var seq__34572_34576 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34573_34577 = null;
var count__34574_34578 = (0);
var i__34575_34579 = (0);
while(true){
if((i__34575_34579 < count__34574_34578)){
var ns_34580 = cljs.core._nth.call(null,chunk__34573_34577,i__34575_34579);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34580);

var G__34581 = seq__34572_34576;
var G__34582 = chunk__34573_34577;
var G__34583 = count__34574_34578;
var G__34584 = (i__34575_34579 + (1));
seq__34572_34576 = G__34581;
chunk__34573_34577 = G__34582;
count__34574_34578 = G__34583;
i__34575_34579 = G__34584;
continue;
} else {
var temp__4657__auto___34585 = cljs.core.seq.call(null,seq__34572_34576);
if(temp__4657__auto___34585){
var seq__34572_34586__$1 = temp__4657__auto___34585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34572_34586__$1)){
var c__28890__auto___34587 = cljs.core.chunk_first.call(null,seq__34572_34586__$1);
var G__34588 = cljs.core.chunk_rest.call(null,seq__34572_34586__$1);
var G__34589 = c__28890__auto___34587;
var G__34590 = cljs.core.count.call(null,c__28890__auto___34587);
var G__34591 = (0);
seq__34572_34576 = G__34588;
chunk__34573_34577 = G__34589;
count__34574_34578 = G__34590;
i__34575_34579 = G__34591;
continue;
} else {
var ns_34592 = cljs.core.first.call(null,seq__34572_34586__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34592);

var G__34593 = cljs.core.next.call(null,seq__34572_34586__$1);
var G__34594 = null;
var G__34595 = (0);
var G__34596 = (0);
seq__34572_34576 = G__34593;
chunk__34573_34577 = G__34594;
count__34574_34578 = G__34595;
i__34575_34579 = G__34596;
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
var G__34597__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34598__i = 0, G__34598__a = new Array(arguments.length -  0);
while (G__34598__i < G__34598__a.length) {G__34598__a[G__34598__i] = arguments[G__34598__i + 0]; ++G__34598__i;}
  args = new cljs.core.IndexedSeq(G__34598__a,0,null);
} 
return G__34597__delegate.call(this,args);};
G__34597.cljs$lang$maxFixedArity = 0;
G__34597.cljs$lang$applyTo = (function (arglist__34599){
var args = cljs.core.seq(arglist__34599);
return G__34597__delegate(args);
});
G__34597.cljs$core$IFn$_invoke$arity$variadic = G__34597__delegate;
return G__34597;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34600_SHARP_,p2__34601_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34600_SHARP_)].join('')),p2__34601_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34602_SHARP_,p2__34603_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34602_SHARP_)].join(''),p2__34603_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34604 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34604.addCallback(((function (G__34604){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34604))
);

G__34604.addErrback(((function (G__34604){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34604))
);

return G__34604;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34605){if((e34605 instanceof Error)){
var e = e34605;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34605;

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
}catch (e34606){if((e34606 instanceof Error)){
var e = e34606;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34606;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34607 = cljs.core._EQ_;
var expr__34608 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34607.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34608))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34607.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34608))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34607.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34608))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34607,expr__34608){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34607,expr__34608))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34610,callback){
var map__34611 = p__34610;
var map__34611__$1 = ((((!((map__34611 == null)))?((((map__34611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34611):map__34611);
var file_msg = map__34611__$1;
var request_url = cljs.core.get.call(null,map__34611__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28051__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34611,map__34611__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34611,map__34611__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto__){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto__){
return (function (state_34651){
var state_val_34652 = (state_34651[(1)]);
if((state_val_34652 === (7))){
var inst_34647 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
var statearr_34653_34680 = state_34651__$1;
(statearr_34653_34680[(2)] = inst_34647);

(statearr_34653_34680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (1))){
var state_34651__$1 = state_34651;
var statearr_34654_34681 = state_34651__$1;
(statearr_34654_34681[(2)] = null);

(statearr_34654_34681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (4))){
var inst_34615 = (state_34651[(7)]);
var inst_34615__$1 = (state_34651[(2)]);
var state_34651__$1 = (function (){var statearr_34655 = state_34651;
(statearr_34655[(7)] = inst_34615__$1);

return statearr_34655;
})();
if(cljs.core.truth_(inst_34615__$1)){
var statearr_34656_34682 = state_34651__$1;
(statearr_34656_34682[(1)] = (5));

} else {
var statearr_34657_34683 = state_34651__$1;
(statearr_34657_34683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (15))){
var inst_34632 = (state_34651[(8)]);
var inst_34629 = (state_34651[(9)]);
var inst_34634 = inst_34632.call(null,inst_34629);
var state_34651__$1 = state_34651;
var statearr_34658_34684 = state_34651__$1;
(statearr_34658_34684[(2)] = inst_34634);

(statearr_34658_34684[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (13))){
var inst_34641 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
var statearr_34659_34685 = state_34651__$1;
(statearr_34659_34685[(2)] = inst_34641);

(statearr_34659_34685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (6))){
var state_34651__$1 = state_34651;
var statearr_34660_34686 = state_34651__$1;
(statearr_34660_34686[(2)] = null);

(statearr_34660_34686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (17))){
var inst_34638 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
var statearr_34661_34687 = state_34651__$1;
(statearr_34661_34687[(2)] = inst_34638);

(statearr_34661_34687[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (3))){
var inst_34649 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34651__$1,inst_34649);
} else {
if((state_val_34652 === (12))){
var state_34651__$1 = state_34651;
var statearr_34662_34688 = state_34651__$1;
(statearr_34662_34688[(2)] = null);

(statearr_34662_34688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (2))){
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34651__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34652 === (11))){
var inst_34620 = (state_34651[(10)]);
var inst_34627 = figwheel.client.file_reloading.blocking_load.call(null,inst_34620);
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34651__$1,(14),inst_34627);
} else {
if((state_val_34652 === (9))){
var inst_34620 = (state_34651[(10)]);
var state_34651__$1 = state_34651;
if(cljs.core.truth_(inst_34620)){
var statearr_34663_34689 = state_34651__$1;
(statearr_34663_34689[(1)] = (11));

} else {
var statearr_34664_34690 = state_34651__$1;
(statearr_34664_34690[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (5))){
var inst_34621 = (state_34651[(11)]);
var inst_34615 = (state_34651[(7)]);
var inst_34620 = cljs.core.nth.call(null,inst_34615,(0),null);
var inst_34621__$1 = cljs.core.nth.call(null,inst_34615,(1),null);
var state_34651__$1 = (function (){var statearr_34665 = state_34651;
(statearr_34665[(11)] = inst_34621__$1);

(statearr_34665[(10)] = inst_34620);

return statearr_34665;
})();
if(cljs.core.truth_(inst_34621__$1)){
var statearr_34666_34691 = state_34651__$1;
(statearr_34666_34691[(1)] = (8));

} else {
var statearr_34667_34692 = state_34651__$1;
(statearr_34667_34692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (14))){
var inst_34632 = (state_34651[(8)]);
var inst_34620 = (state_34651[(10)]);
var inst_34629 = (state_34651[(2)]);
var inst_34630 = console.log("Loading!",inst_34620);
var inst_34631 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34632__$1 = cljs.core.get.call(null,inst_34631,inst_34620);
var state_34651__$1 = (function (){var statearr_34668 = state_34651;
(statearr_34668[(8)] = inst_34632__$1);

(statearr_34668[(9)] = inst_34629);

(statearr_34668[(12)] = inst_34630);

return statearr_34668;
})();
if(cljs.core.truth_(inst_34632__$1)){
var statearr_34669_34693 = state_34651__$1;
(statearr_34669_34693[(1)] = (15));

} else {
var statearr_34670_34694 = state_34651__$1;
(statearr_34670_34694[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (16))){
var inst_34629 = (state_34651[(9)]);
var inst_34636 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34629);
var state_34651__$1 = state_34651;
var statearr_34671_34695 = state_34651__$1;
(statearr_34671_34695[(2)] = inst_34636);

(statearr_34671_34695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (10))){
var inst_34643 = (state_34651[(2)]);
var state_34651__$1 = (function (){var statearr_34672 = state_34651;
(statearr_34672[(13)] = inst_34643);

return statearr_34672;
})();
var statearr_34673_34696 = state_34651__$1;
(statearr_34673_34696[(2)] = null);

(statearr_34673_34696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (8))){
var inst_34621 = (state_34651[(11)]);
var inst_34623 = console.log("Evaling!",inst_34621);
var inst_34624 = eval(inst_34621);
var state_34651__$1 = (function (){var statearr_34674 = state_34651;
(statearr_34674[(14)] = inst_34623);

return statearr_34674;
})();
var statearr_34675_34697 = state_34651__$1;
(statearr_34675_34697[(2)] = inst_34624);

(statearr_34675_34697[(1)] = (10));


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
});})(c__31314__auto__))
;
return ((function (switch__31226__auto__,c__31314__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31227__auto__ = null;
var figwheel$client$file_reloading$state_machine__31227__auto____0 = (function (){
var statearr_34676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34676[(0)] = figwheel$client$file_reloading$state_machine__31227__auto__);

(statearr_34676[(1)] = (1));

return statearr_34676;
});
var figwheel$client$file_reloading$state_machine__31227__auto____1 = (function (state_34651){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_34651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e34677){if((e34677 instanceof Object)){
var ex__31230__auto__ = e34677;
var statearr_34678_34698 = state_34651;
(statearr_34678_34698[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34699 = state_34651;
state_34651 = G__34699;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31227__auto__ = function(state_34651){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31227__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31227__auto____1.call(this,state_34651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31227__auto____0;
figwheel$client$file_reloading$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31227__auto____1;
return figwheel$client$file_reloading$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto__))
})();
var state__31316__auto__ = (function (){var statearr_34679 = f__31315__auto__.call(null);
(statearr_34679[(6)] = c__31314__auto__);

return statearr_34679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto__))
);

return c__31314__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34701 = arguments.length;
switch (G__34701) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34703,callback){
var map__34704 = p__34703;
var map__34704__$1 = ((((!((map__34704 == null)))?((((map__34704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34704):map__34704);
var file_msg = map__34704__$1;
var namespace = cljs.core.get.call(null,map__34704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34704,map__34704__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34704,map__34704__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34706){
var map__34707 = p__34706;
var map__34707__$1 = ((((!((map__34707 == null)))?((((map__34707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34707):map__34707);
var file_msg = map__34707__$1;
var namespace = cljs.core.get.call(null,map__34707__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34709){
var map__34710 = p__34709;
var map__34710__$1 = ((((!((map__34710 == null)))?((((map__34710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34710):map__34710);
var file_msg = map__34710__$1;
var namespace = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34712,callback){
var map__34713 = p__34712;
var map__34713__$1 = ((((!((map__34713 == null)))?((((map__34713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34713):map__34713);
var file_msg = map__34713__$1;
var request_url = cljs.core.get.call(null,map__34713__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34713__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31314__auto___34763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___34763,out){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___34763,out){
return (function (state_34748){
var state_val_34749 = (state_34748[(1)]);
if((state_val_34749 === (1))){
var inst_34722 = cljs.core.seq.call(null,files);
var inst_34723 = cljs.core.first.call(null,inst_34722);
var inst_34724 = cljs.core.next.call(null,inst_34722);
var inst_34725 = files;
var state_34748__$1 = (function (){var statearr_34750 = state_34748;
(statearr_34750[(7)] = inst_34725);

(statearr_34750[(8)] = inst_34724);

(statearr_34750[(9)] = inst_34723);

return statearr_34750;
})();
var statearr_34751_34764 = state_34748__$1;
(statearr_34751_34764[(2)] = null);

(statearr_34751_34764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (2))){
var inst_34725 = (state_34748[(7)]);
var inst_34731 = (state_34748[(10)]);
var inst_34730 = cljs.core.seq.call(null,inst_34725);
var inst_34731__$1 = cljs.core.first.call(null,inst_34730);
var inst_34732 = cljs.core.next.call(null,inst_34730);
var inst_34733 = (inst_34731__$1 == null);
var inst_34734 = cljs.core.not.call(null,inst_34733);
var state_34748__$1 = (function (){var statearr_34752 = state_34748;
(statearr_34752[(10)] = inst_34731__$1);

(statearr_34752[(11)] = inst_34732);

return statearr_34752;
})();
if(inst_34734){
var statearr_34753_34765 = state_34748__$1;
(statearr_34753_34765[(1)] = (4));

} else {
var statearr_34754_34766 = state_34748__$1;
(statearr_34754_34766[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (3))){
var inst_34746 = (state_34748[(2)]);
var state_34748__$1 = state_34748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34748__$1,inst_34746);
} else {
if((state_val_34749 === (4))){
var inst_34731 = (state_34748[(10)]);
var inst_34736 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34731);
var state_34748__$1 = state_34748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34748__$1,(7),inst_34736);
} else {
if((state_val_34749 === (5))){
var inst_34742 = cljs.core.async.close_BANG_.call(null,out);
var state_34748__$1 = state_34748;
var statearr_34755_34767 = state_34748__$1;
(statearr_34755_34767[(2)] = inst_34742);

(statearr_34755_34767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (6))){
var inst_34744 = (state_34748[(2)]);
var state_34748__$1 = state_34748;
var statearr_34756_34768 = state_34748__$1;
(statearr_34756_34768[(2)] = inst_34744);

(statearr_34756_34768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (7))){
var inst_34732 = (state_34748[(11)]);
var inst_34738 = (state_34748[(2)]);
var inst_34739 = cljs.core.async.put_BANG_.call(null,out,inst_34738);
var inst_34725 = inst_34732;
var state_34748__$1 = (function (){var statearr_34757 = state_34748;
(statearr_34757[(7)] = inst_34725);

(statearr_34757[(12)] = inst_34739);

return statearr_34757;
})();
var statearr_34758_34769 = state_34748__$1;
(statearr_34758_34769[(2)] = null);

(statearr_34758_34769[(1)] = (2));


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
});})(c__31314__auto___34763,out))
;
return ((function (switch__31226__auto__,c__31314__auto___34763,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto____0 = (function (){
var statearr_34759 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34759[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto__);

(statearr_34759[(1)] = (1));

return statearr_34759;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto____1 = (function (state_34748){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_34748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__31230__auto__ = e34760;
var statearr_34761_34770 = state_34748;
(statearr_34761_34770[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34771 = state_34748;
state_34748 = G__34771;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto__ = function(state_34748){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto____1.call(this,state_34748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___34763,out))
})();
var state__31316__auto__ = (function (){var statearr_34762 = f__31315__auto__.call(null);
(statearr_34762[(6)] = c__31314__auto___34763);

return statearr_34762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___34763,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34772,opts){
var map__34773 = p__34772;
var map__34773__$1 = ((((!((map__34773 == null)))?((((map__34773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34773):map__34773);
var eval_body = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34775){var e = e34775;
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
return (function (p1__34776_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34776_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34777){
var vec__34778 = p__34777;
var k = cljs.core.nth.call(null,vec__34778,(0),null);
var v = cljs.core.nth.call(null,vec__34778,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34781){
var vec__34782 = p__34781;
var k = cljs.core.nth.call(null,vec__34782,(0),null);
var v = cljs.core.nth.call(null,vec__34782,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34788,p__34789){
var map__34790 = p__34788;
var map__34790__$1 = ((((!((map__34790 == null)))?((((map__34790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34790):map__34790);
var opts = map__34790__$1;
var before_jsload = cljs.core.get.call(null,map__34790__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34790__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34790__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34791 = p__34789;
var map__34791__$1 = ((((!((map__34791 == null)))?((((map__34791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34791):map__34791);
var msg = map__34791__$1;
var files = cljs.core.get.call(null,map__34791__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34791__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34791__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34945){
var state_val_34946 = (state_34945[(1)]);
if((state_val_34946 === (7))){
var inst_34808 = (state_34945[(7)]);
var inst_34807 = (state_34945[(8)]);
var inst_34805 = (state_34945[(9)]);
var inst_34806 = (state_34945[(10)]);
var inst_34813 = cljs.core._nth.call(null,inst_34806,inst_34808);
var inst_34814 = figwheel.client.file_reloading.eval_body.call(null,inst_34813,opts);
var inst_34815 = (inst_34808 + (1));
var tmp34947 = inst_34807;
var tmp34948 = inst_34805;
var tmp34949 = inst_34806;
var inst_34805__$1 = tmp34948;
var inst_34806__$1 = tmp34949;
var inst_34807__$1 = tmp34947;
var inst_34808__$1 = inst_34815;
var state_34945__$1 = (function (){var statearr_34950 = state_34945;
(statearr_34950[(7)] = inst_34808__$1);

(statearr_34950[(8)] = inst_34807__$1);

(statearr_34950[(9)] = inst_34805__$1);

(statearr_34950[(11)] = inst_34814);

(statearr_34950[(10)] = inst_34806__$1);

return statearr_34950;
})();
var statearr_34951_35034 = state_34945__$1;
(statearr_34951_35034[(2)] = null);

(statearr_34951_35034[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (20))){
var inst_34848 = (state_34945[(12)]);
var inst_34856 = figwheel.client.file_reloading.sort_files.call(null,inst_34848);
var state_34945__$1 = state_34945;
var statearr_34952_35035 = state_34945__$1;
(statearr_34952_35035[(2)] = inst_34856);

(statearr_34952_35035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (27))){
var state_34945__$1 = state_34945;
var statearr_34953_35036 = state_34945__$1;
(statearr_34953_35036[(2)] = null);

(statearr_34953_35036[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (1))){
var inst_34797 = (state_34945[(13)]);
var inst_34794 = before_jsload.call(null,files);
var inst_34795 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34796 = (function (){return ((function (inst_34797,inst_34794,inst_34795,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34785_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34785_SHARP_);
});
;})(inst_34797,inst_34794,inst_34795,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34797__$1 = cljs.core.filter.call(null,inst_34796,files);
var inst_34798 = cljs.core.not_empty.call(null,inst_34797__$1);
var state_34945__$1 = (function (){var statearr_34954 = state_34945;
(statearr_34954[(13)] = inst_34797__$1);

(statearr_34954[(14)] = inst_34795);

(statearr_34954[(15)] = inst_34794);

return statearr_34954;
})();
if(cljs.core.truth_(inst_34798)){
var statearr_34955_35037 = state_34945__$1;
(statearr_34955_35037[(1)] = (2));

} else {
var statearr_34956_35038 = state_34945__$1;
(statearr_34956_35038[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (24))){
var state_34945__$1 = state_34945;
var statearr_34957_35039 = state_34945__$1;
(statearr_34957_35039[(2)] = null);

(statearr_34957_35039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (39))){
var inst_34898 = (state_34945[(16)]);
var state_34945__$1 = state_34945;
var statearr_34958_35040 = state_34945__$1;
(statearr_34958_35040[(2)] = inst_34898);

(statearr_34958_35040[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (46))){
var inst_34940 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34959_35041 = state_34945__$1;
(statearr_34959_35041[(2)] = inst_34940);

(statearr_34959_35041[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (4))){
var inst_34842 = (state_34945[(2)]);
var inst_34843 = cljs.core.List.EMPTY;
var inst_34844 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34843);
var inst_34845 = (function (){return ((function (inst_34842,inst_34843,inst_34844,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34786_SHARP_){
var and__28039__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34786_SHARP_);
if(cljs.core.truth_(and__28039__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34786_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34786_SHARP_)));
} else {
return and__28039__auto__;
}
});
;})(inst_34842,inst_34843,inst_34844,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34846 = cljs.core.filter.call(null,inst_34845,files);
var inst_34847 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34848 = cljs.core.concat.call(null,inst_34846,inst_34847);
var state_34945__$1 = (function (){var statearr_34960 = state_34945;
(statearr_34960[(12)] = inst_34848);

(statearr_34960[(17)] = inst_34844);

(statearr_34960[(18)] = inst_34842);

return statearr_34960;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34961_35042 = state_34945__$1;
(statearr_34961_35042[(1)] = (16));

} else {
var statearr_34962_35043 = state_34945__$1;
(statearr_34962_35043[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (15))){
var inst_34832 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34963_35044 = state_34945__$1;
(statearr_34963_35044[(2)] = inst_34832);

(statearr_34963_35044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (21))){
var inst_34858 = (state_34945[(19)]);
var inst_34858__$1 = (state_34945[(2)]);
var inst_34859 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34858__$1);
var state_34945__$1 = (function (){var statearr_34964 = state_34945;
(statearr_34964[(19)] = inst_34858__$1);

return statearr_34964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34945__$1,(22),inst_34859);
} else {
if((state_val_34946 === (31))){
var inst_34943 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34945__$1,inst_34943);
} else {
if((state_val_34946 === (32))){
var inst_34898 = (state_34945[(16)]);
var inst_34903 = inst_34898.cljs$lang$protocol_mask$partition0$;
var inst_34904 = (inst_34903 & (64));
var inst_34905 = inst_34898.cljs$core$ISeq$;
var inst_34906 = (cljs.core.PROTOCOL_SENTINEL === inst_34905);
var inst_34907 = (inst_34904) || (inst_34906);
var state_34945__$1 = state_34945;
if(cljs.core.truth_(inst_34907)){
var statearr_34965_35045 = state_34945__$1;
(statearr_34965_35045[(1)] = (35));

} else {
var statearr_34966_35046 = state_34945__$1;
(statearr_34966_35046[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (40))){
var inst_34920 = (state_34945[(20)]);
var inst_34919 = (state_34945[(2)]);
var inst_34920__$1 = cljs.core.get.call(null,inst_34919,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34921 = cljs.core.get.call(null,inst_34919,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34922 = cljs.core.not_empty.call(null,inst_34920__$1);
var state_34945__$1 = (function (){var statearr_34967 = state_34945;
(statearr_34967[(20)] = inst_34920__$1);

(statearr_34967[(21)] = inst_34921);

return statearr_34967;
})();
if(cljs.core.truth_(inst_34922)){
var statearr_34968_35047 = state_34945__$1;
(statearr_34968_35047[(1)] = (41));

} else {
var statearr_34969_35048 = state_34945__$1;
(statearr_34969_35048[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (33))){
var state_34945__$1 = state_34945;
var statearr_34970_35049 = state_34945__$1;
(statearr_34970_35049[(2)] = false);

(statearr_34970_35049[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (13))){
var inst_34818 = (state_34945[(22)]);
var inst_34822 = cljs.core.chunk_first.call(null,inst_34818);
var inst_34823 = cljs.core.chunk_rest.call(null,inst_34818);
var inst_34824 = cljs.core.count.call(null,inst_34822);
var inst_34805 = inst_34823;
var inst_34806 = inst_34822;
var inst_34807 = inst_34824;
var inst_34808 = (0);
var state_34945__$1 = (function (){var statearr_34971 = state_34945;
(statearr_34971[(7)] = inst_34808);

(statearr_34971[(8)] = inst_34807);

(statearr_34971[(9)] = inst_34805);

(statearr_34971[(10)] = inst_34806);

return statearr_34971;
})();
var statearr_34972_35050 = state_34945__$1;
(statearr_34972_35050[(2)] = null);

(statearr_34972_35050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (22))){
var inst_34862 = (state_34945[(23)]);
var inst_34866 = (state_34945[(24)]);
var inst_34858 = (state_34945[(19)]);
var inst_34861 = (state_34945[(25)]);
var inst_34861__$1 = (state_34945[(2)]);
var inst_34862__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34861__$1);
var inst_34863 = (function (){var all_files = inst_34858;
var res_SINGLEQUOTE_ = inst_34861__$1;
var res = inst_34862__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34862,inst_34866,inst_34858,inst_34861,inst_34861__$1,inst_34862__$1,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34787_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34787_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34862,inst_34866,inst_34858,inst_34861,inst_34861__$1,inst_34862__$1,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34864 = cljs.core.filter.call(null,inst_34863,inst_34861__$1);
var inst_34865 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34866__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34865);
var inst_34867 = cljs.core.not_empty.call(null,inst_34866__$1);
var state_34945__$1 = (function (){var statearr_34973 = state_34945;
(statearr_34973[(23)] = inst_34862__$1);

(statearr_34973[(24)] = inst_34866__$1);

(statearr_34973[(26)] = inst_34864);

(statearr_34973[(25)] = inst_34861__$1);

return statearr_34973;
})();
if(cljs.core.truth_(inst_34867)){
var statearr_34974_35051 = state_34945__$1;
(statearr_34974_35051[(1)] = (23));

} else {
var statearr_34975_35052 = state_34945__$1;
(statearr_34975_35052[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (36))){
var state_34945__$1 = state_34945;
var statearr_34976_35053 = state_34945__$1;
(statearr_34976_35053[(2)] = false);

(statearr_34976_35053[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (41))){
var inst_34920 = (state_34945[(20)]);
var inst_34924 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34925 = cljs.core.map.call(null,inst_34924,inst_34920);
var inst_34926 = cljs.core.pr_str.call(null,inst_34925);
var inst_34927 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34926)].join('');
var inst_34928 = figwheel.client.utils.log.call(null,inst_34927);
var state_34945__$1 = state_34945;
var statearr_34977_35054 = state_34945__$1;
(statearr_34977_35054[(2)] = inst_34928);

(statearr_34977_35054[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (43))){
var inst_34921 = (state_34945[(21)]);
var inst_34931 = (state_34945[(2)]);
var inst_34932 = cljs.core.not_empty.call(null,inst_34921);
var state_34945__$1 = (function (){var statearr_34978 = state_34945;
(statearr_34978[(27)] = inst_34931);

return statearr_34978;
})();
if(cljs.core.truth_(inst_34932)){
var statearr_34979_35055 = state_34945__$1;
(statearr_34979_35055[(1)] = (44));

} else {
var statearr_34980_35056 = state_34945__$1;
(statearr_34980_35056[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (29))){
var inst_34862 = (state_34945[(23)]);
var inst_34898 = (state_34945[(16)]);
var inst_34866 = (state_34945[(24)]);
var inst_34858 = (state_34945[(19)]);
var inst_34864 = (state_34945[(26)]);
var inst_34861 = (state_34945[(25)]);
var inst_34894 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34897 = (function (){var all_files = inst_34858;
var res_SINGLEQUOTE_ = inst_34861;
var res = inst_34862;
var files_not_loaded = inst_34864;
var dependencies_that_loaded = inst_34866;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34862,inst_34898,inst_34866,inst_34858,inst_34864,inst_34861,inst_34894,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34896){
var map__34981 = p__34896;
var map__34981__$1 = ((((!((map__34981 == null)))?((((map__34981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34981):map__34981);
var namespace = cljs.core.get.call(null,map__34981__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34862,inst_34898,inst_34866,inst_34858,inst_34864,inst_34861,inst_34894,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34898__$1 = cljs.core.group_by.call(null,inst_34897,inst_34864);
var inst_34900 = (inst_34898__$1 == null);
var inst_34901 = cljs.core.not.call(null,inst_34900);
var state_34945__$1 = (function (){var statearr_34983 = state_34945;
(statearr_34983[(16)] = inst_34898__$1);

(statearr_34983[(28)] = inst_34894);

return statearr_34983;
})();
if(inst_34901){
var statearr_34984_35057 = state_34945__$1;
(statearr_34984_35057[(1)] = (32));

} else {
var statearr_34985_35058 = state_34945__$1;
(statearr_34985_35058[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (44))){
var inst_34921 = (state_34945[(21)]);
var inst_34934 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34921);
var inst_34935 = cljs.core.pr_str.call(null,inst_34934);
var inst_34936 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34935)].join('');
var inst_34937 = figwheel.client.utils.log.call(null,inst_34936);
var state_34945__$1 = state_34945;
var statearr_34986_35059 = state_34945__$1;
(statearr_34986_35059[(2)] = inst_34937);

(statearr_34986_35059[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (6))){
var inst_34839 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34987_35060 = state_34945__$1;
(statearr_34987_35060[(2)] = inst_34839);

(statearr_34987_35060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (28))){
var inst_34864 = (state_34945[(26)]);
var inst_34891 = (state_34945[(2)]);
var inst_34892 = cljs.core.not_empty.call(null,inst_34864);
var state_34945__$1 = (function (){var statearr_34988 = state_34945;
(statearr_34988[(29)] = inst_34891);

return statearr_34988;
})();
if(cljs.core.truth_(inst_34892)){
var statearr_34989_35061 = state_34945__$1;
(statearr_34989_35061[(1)] = (29));

} else {
var statearr_34990_35062 = state_34945__$1;
(statearr_34990_35062[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (25))){
var inst_34862 = (state_34945[(23)]);
var inst_34878 = (state_34945[(2)]);
var inst_34879 = cljs.core.not_empty.call(null,inst_34862);
var state_34945__$1 = (function (){var statearr_34991 = state_34945;
(statearr_34991[(30)] = inst_34878);

return statearr_34991;
})();
if(cljs.core.truth_(inst_34879)){
var statearr_34992_35063 = state_34945__$1;
(statearr_34992_35063[(1)] = (26));

} else {
var statearr_34993_35064 = state_34945__$1;
(statearr_34993_35064[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (34))){
var inst_34914 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
if(cljs.core.truth_(inst_34914)){
var statearr_34994_35065 = state_34945__$1;
(statearr_34994_35065[(1)] = (38));

} else {
var statearr_34995_35066 = state_34945__$1;
(statearr_34995_35066[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (17))){
var state_34945__$1 = state_34945;
var statearr_34996_35067 = state_34945__$1;
(statearr_34996_35067[(2)] = recompile_dependents);

(statearr_34996_35067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (3))){
var state_34945__$1 = state_34945;
var statearr_34997_35068 = state_34945__$1;
(statearr_34997_35068[(2)] = null);

(statearr_34997_35068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (12))){
var inst_34835 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34998_35069 = state_34945__$1;
(statearr_34998_35069[(2)] = inst_34835);

(statearr_34998_35069[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (2))){
var inst_34797 = (state_34945[(13)]);
var inst_34804 = cljs.core.seq.call(null,inst_34797);
var inst_34805 = inst_34804;
var inst_34806 = null;
var inst_34807 = (0);
var inst_34808 = (0);
var state_34945__$1 = (function (){var statearr_34999 = state_34945;
(statearr_34999[(7)] = inst_34808);

(statearr_34999[(8)] = inst_34807);

(statearr_34999[(9)] = inst_34805);

(statearr_34999[(10)] = inst_34806);

return statearr_34999;
})();
var statearr_35000_35070 = state_34945__$1;
(statearr_35000_35070[(2)] = null);

(statearr_35000_35070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (23))){
var inst_34862 = (state_34945[(23)]);
var inst_34866 = (state_34945[(24)]);
var inst_34858 = (state_34945[(19)]);
var inst_34864 = (state_34945[(26)]);
var inst_34861 = (state_34945[(25)]);
var inst_34869 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34871 = (function (){var all_files = inst_34858;
var res_SINGLEQUOTE_ = inst_34861;
var res = inst_34862;
var files_not_loaded = inst_34864;
var dependencies_that_loaded = inst_34866;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34862,inst_34866,inst_34858,inst_34864,inst_34861,inst_34869,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34870){
var map__35001 = p__34870;
var map__35001__$1 = ((((!((map__35001 == null)))?((((map__35001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35001):map__35001);
var request_url = cljs.core.get.call(null,map__35001__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34862,inst_34866,inst_34858,inst_34864,inst_34861,inst_34869,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34872 = cljs.core.reverse.call(null,inst_34866);
var inst_34873 = cljs.core.map.call(null,inst_34871,inst_34872);
var inst_34874 = cljs.core.pr_str.call(null,inst_34873);
var inst_34875 = figwheel.client.utils.log.call(null,inst_34874);
var state_34945__$1 = (function (){var statearr_35003 = state_34945;
(statearr_35003[(31)] = inst_34869);

return statearr_35003;
})();
var statearr_35004_35071 = state_34945__$1;
(statearr_35004_35071[(2)] = inst_34875);

(statearr_35004_35071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (35))){
var state_34945__$1 = state_34945;
var statearr_35005_35072 = state_34945__$1;
(statearr_35005_35072[(2)] = true);

(statearr_35005_35072[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (19))){
var inst_34848 = (state_34945[(12)]);
var inst_34854 = figwheel.client.file_reloading.expand_files.call(null,inst_34848);
var state_34945__$1 = state_34945;
var statearr_35006_35073 = state_34945__$1;
(statearr_35006_35073[(2)] = inst_34854);

(statearr_35006_35073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (11))){
var state_34945__$1 = state_34945;
var statearr_35007_35074 = state_34945__$1;
(statearr_35007_35074[(2)] = null);

(statearr_35007_35074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (9))){
var inst_34837 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_35008_35075 = state_34945__$1;
(statearr_35008_35075[(2)] = inst_34837);

(statearr_35008_35075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (5))){
var inst_34808 = (state_34945[(7)]);
var inst_34807 = (state_34945[(8)]);
var inst_34810 = (inst_34808 < inst_34807);
var inst_34811 = inst_34810;
var state_34945__$1 = state_34945;
if(cljs.core.truth_(inst_34811)){
var statearr_35009_35076 = state_34945__$1;
(statearr_35009_35076[(1)] = (7));

} else {
var statearr_35010_35077 = state_34945__$1;
(statearr_35010_35077[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (14))){
var inst_34818 = (state_34945[(22)]);
var inst_34827 = cljs.core.first.call(null,inst_34818);
var inst_34828 = figwheel.client.file_reloading.eval_body.call(null,inst_34827,opts);
var inst_34829 = cljs.core.next.call(null,inst_34818);
var inst_34805 = inst_34829;
var inst_34806 = null;
var inst_34807 = (0);
var inst_34808 = (0);
var state_34945__$1 = (function (){var statearr_35011 = state_34945;
(statearr_35011[(7)] = inst_34808);

(statearr_35011[(32)] = inst_34828);

(statearr_35011[(8)] = inst_34807);

(statearr_35011[(9)] = inst_34805);

(statearr_35011[(10)] = inst_34806);

return statearr_35011;
})();
var statearr_35012_35078 = state_34945__$1;
(statearr_35012_35078[(2)] = null);

(statearr_35012_35078[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (45))){
var state_34945__$1 = state_34945;
var statearr_35013_35079 = state_34945__$1;
(statearr_35013_35079[(2)] = null);

(statearr_35013_35079[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (26))){
var inst_34862 = (state_34945[(23)]);
var inst_34866 = (state_34945[(24)]);
var inst_34858 = (state_34945[(19)]);
var inst_34864 = (state_34945[(26)]);
var inst_34861 = (state_34945[(25)]);
var inst_34881 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34883 = (function (){var all_files = inst_34858;
var res_SINGLEQUOTE_ = inst_34861;
var res = inst_34862;
var files_not_loaded = inst_34864;
var dependencies_that_loaded = inst_34866;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34862,inst_34866,inst_34858,inst_34864,inst_34861,inst_34881,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34882){
var map__35014 = p__34882;
var map__35014__$1 = ((((!((map__35014 == null)))?((((map__35014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35014):map__35014);
var namespace = cljs.core.get.call(null,map__35014__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35014__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34862,inst_34866,inst_34858,inst_34864,inst_34861,inst_34881,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34884 = cljs.core.map.call(null,inst_34883,inst_34862);
var inst_34885 = cljs.core.pr_str.call(null,inst_34884);
var inst_34886 = figwheel.client.utils.log.call(null,inst_34885);
var inst_34887 = (function (){var all_files = inst_34858;
var res_SINGLEQUOTE_ = inst_34861;
var res = inst_34862;
var files_not_loaded = inst_34864;
var dependencies_that_loaded = inst_34866;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34862,inst_34866,inst_34858,inst_34864,inst_34861,inst_34881,inst_34883,inst_34884,inst_34885,inst_34886,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34862,inst_34866,inst_34858,inst_34864,inst_34861,inst_34881,inst_34883,inst_34884,inst_34885,inst_34886,state_val_34946,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34888 = setTimeout(inst_34887,(10));
var state_34945__$1 = (function (){var statearr_35016 = state_34945;
(statearr_35016[(33)] = inst_34886);

(statearr_35016[(34)] = inst_34881);

return statearr_35016;
})();
var statearr_35017_35080 = state_34945__$1;
(statearr_35017_35080[(2)] = inst_34888);

(statearr_35017_35080[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (16))){
var state_34945__$1 = state_34945;
var statearr_35018_35081 = state_34945__$1;
(statearr_35018_35081[(2)] = reload_dependents);

(statearr_35018_35081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (38))){
var inst_34898 = (state_34945[(16)]);
var inst_34916 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34898);
var state_34945__$1 = state_34945;
var statearr_35019_35082 = state_34945__$1;
(statearr_35019_35082[(2)] = inst_34916);

(statearr_35019_35082[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (30))){
var state_34945__$1 = state_34945;
var statearr_35020_35083 = state_34945__$1;
(statearr_35020_35083[(2)] = null);

(statearr_35020_35083[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (10))){
var inst_34818 = (state_34945[(22)]);
var inst_34820 = cljs.core.chunked_seq_QMARK_.call(null,inst_34818);
var state_34945__$1 = state_34945;
if(inst_34820){
var statearr_35021_35084 = state_34945__$1;
(statearr_35021_35084[(1)] = (13));

} else {
var statearr_35022_35085 = state_34945__$1;
(statearr_35022_35085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (18))){
var inst_34852 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
if(cljs.core.truth_(inst_34852)){
var statearr_35023_35086 = state_34945__$1;
(statearr_35023_35086[(1)] = (19));

} else {
var statearr_35024_35087 = state_34945__$1;
(statearr_35024_35087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (42))){
var state_34945__$1 = state_34945;
var statearr_35025_35088 = state_34945__$1;
(statearr_35025_35088[(2)] = null);

(statearr_35025_35088[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (37))){
var inst_34911 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_35026_35089 = state_34945__$1;
(statearr_35026_35089[(2)] = inst_34911);

(statearr_35026_35089[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (8))){
var inst_34818 = (state_34945[(22)]);
var inst_34805 = (state_34945[(9)]);
var inst_34818__$1 = cljs.core.seq.call(null,inst_34805);
var state_34945__$1 = (function (){var statearr_35027 = state_34945;
(statearr_35027[(22)] = inst_34818__$1);

return statearr_35027;
})();
if(inst_34818__$1){
var statearr_35028_35090 = state_34945__$1;
(statearr_35028_35090[(1)] = (10));

} else {
var statearr_35029_35091 = state_34945__$1;
(statearr_35029_35091[(1)] = (11));

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
});})(c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31226__auto__,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto____0 = (function (){
var statearr_35030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35030[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto__);

(statearr_35030[(1)] = (1));

return statearr_35030;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto____1 = (function (state_34945){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_34945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e35031){if((e35031 instanceof Object)){
var ex__31230__auto__ = e35031;
var statearr_35032_35092 = state_34945;
(statearr_35032_35092[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35093 = state_34945;
state_34945 = G__35093;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto__ = function(state_34945){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto____1.call(this,state_34945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31316__auto__ = (function (){var statearr_35033 = f__31315__auto__.call(null);
(statearr_35033[(6)] = c__31314__auto__);

return statearr_35033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto__,map__34790,map__34790__$1,opts,before_jsload,on_jsload,reload_dependents,map__34791,map__34791__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31314__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35096,link){
var map__35097 = p__35096;
var map__35097__$1 = ((((!((map__35097 == null)))?((((map__35097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35097):map__35097);
var file = cljs.core.get.call(null,map__35097__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35097,map__35097__$1,file){
return (function (p1__35094_SHARP_,p2__35095_SHARP_){
if(cljs.core._EQ_.call(null,p1__35094_SHARP_,p2__35095_SHARP_)){
return p1__35094_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35097,map__35097__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35100){
var map__35101 = p__35100;
var map__35101__$1 = ((((!((map__35101 == null)))?((((map__35101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35101):map__35101);
var match_length = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35099_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35099_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35103_SHARP_,p2__35104_SHARP_){
return cljs.core.assoc.call(null,p1__35103_SHARP_,cljs.core.get.call(null,p2__35104_SHARP_,key),p2__35104_SHARP_);
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
var loaded_f_datas_35105 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35105);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35105);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35106,p__35107){
var map__35108 = p__35106;
var map__35108__$1 = ((((!((map__35108 == null)))?((((map__35108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35108):map__35108);
var on_cssload = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35109 = p__35107;
var map__35109__$1 = ((((!((map__35109 == null)))?((((map__35109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35109):map__35109);
var files_msg = map__35109__$1;
var files = cljs.core.get.call(null,map__35109__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1518027902318
