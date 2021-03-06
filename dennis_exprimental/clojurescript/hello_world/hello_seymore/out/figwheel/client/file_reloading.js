// Compiled by ClojureScript 1.9.908 {}
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
var or__27989__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27989__auto__){
return or__27989__auto__;
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
var or__27989__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35341_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35341_SHARP_));
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
var seq__35342 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35343 = null;
var count__35344 = (0);
var i__35345 = (0);
while(true){
if((i__35345 < count__35344)){
var n = cljs.core._nth.call(null,chunk__35343,i__35345);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35346 = seq__35342;
var G__35347 = chunk__35343;
var G__35348 = count__35344;
var G__35349 = (i__35345 + (1));
seq__35342 = G__35346;
chunk__35343 = G__35347;
count__35344 = G__35348;
i__35345 = G__35349;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35342);
if(temp__4657__auto__){
var seq__35342__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35342__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__35342__$1);
var G__35350 = cljs.core.chunk_rest.call(null,seq__35342__$1);
var G__35351 = c__28828__auto__;
var G__35352 = cljs.core.count.call(null,c__28828__auto__);
var G__35353 = (0);
seq__35342 = G__35350;
chunk__35343 = G__35351;
count__35344 = G__35352;
i__35345 = G__35353;
continue;
} else {
var n = cljs.core.first.call(null,seq__35342__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35354 = cljs.core.next.call(null,seq__35342__$1);
var G__35355 = null;
var G__35356 = (0);
var G__35357 = (0);
seq__35342 = G__35354;
chunk__35343 = G__35355;
count__35344 = G__35356;
i__35345 = G__35357;
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

var seq__35367_35375 = cljs.core.seq.call(null,deps);
var chunk__35368_35376 = null;
var count__35369_35377 = (0);
var i__35370_35378 = (0);
while(true){
if((i__35370_35378 < count__35369_35377)){
var dep_35379 = cljs.core._nth.call(null,chunk__35368_35376,i__35370_35378);
topo_sort_helper_STAR_.call(null,dep_35379,(depth + (1)),state);

var G__35380 = seq__35367_35375;
var G__35381 = chunk__35368_35376;
var G__35382 = count__35369_35377;
var G__35383 = (i__35370_35378 + (1));
seq__35367_35375 = G__35380;
chunk__35368_35376 = G__35381;
count__35369_35377 = G__35382;
i__35370_35378 = G__35383;
continue;
} else {
var temp__4657__auto___35384 = cljs.core.seq.call(null,seq__35367_35375);
if(temp__4657__auto___35384){
var seq__35367_35385__$1 = temp__4657__auto___35384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35367_35385__$1)){
var c__28828__auto___35386 = cljs.core.chunk_first.call(null,seq__35367_35385__$1);
var G__35387 = cljs.core.chunk_rest.call(null,seq__35367_35385__$1);
var G__35388 = c__28828__auto___35386;
var G__35389 = cljs.core.count.call(null,c__28828__auto___35386);
var G__35390 = (0);
seq__35367_35375 = G__35387;
chunk__35368_35376 = G__35388;
count__35369_35377 = G__35389;
i__35370_35378 = G__35390;
continue;
} else {
var dep_35391 = cljs.core.first.call(null,seq__35367_35385__$1);
topo_sort_helper_STAR_.call(null,dep_35391,(depth + (1)),state);

var G__35392 = cljs.core.next.call(null,seq__35367_35385__$1);
var G__35393 = null;
var G__35394 = (0);
var G__35395 = (0);
seq__35367_35375 = G__35392;
chunk__35368_35376 = G__35393;
count__35369_35377 = G__35394;
i__35370_35378 = G__35395;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35371){
var vec__35372 = p__35371;
var seq__35373 = cljs.core.seq.call(null,vec__35372);
var first__35374 = cljs.core.first.call(null,seq__35373);
var seq__35373__$1 = cljs.core.next.call(null,seq__35373);
var x = first__35374;
var xs = seq__35373__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35372,seq__35373,first__35374,seq__35373__$1,x,xs,get_deps__$1){
return (function (p1__35358_SHARP_){
return clojure.set.difference.call(null,p1__35358_SHARP_,x);
});})(vec__35372,seq__35373,first__35374,seq__35373__$1,x,xs,get_deps__$1))
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
var seq__35396 = cljs.core.seq.call(null,provides);
var chunk__35397 = null;
var count__35398 = (0);
var i__35399 = (0);
while(true){
if((i__35399 < count__35398)){
var prov = cljs.core._nth.call(null,chunk__35397,i__35399);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35400_35408 = cljs.core.seq.call(null,requires);
var chunk__35401_35409 = null;
var count__35402_35410 = (0);
var i__35403_35411 = (0);
while(true){
if((i__35403_35411 < count__35402_35410)){
var req_35412 = cljs.core._nth.call(null,chunk__35401_35409,i__35403_35411);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35412,prov);

var G__35413 = seq__35400_35408;
var G__35414 = chunk__35401_35409;
var G__35415 = count__35402_35410;
var G__35416 = (i__35403_35411 + (1));
seq__35400_35408 = G__35413;
chunk__35401_35409 = G__35414;
count__35402_35410 = G__35415;
i__35403_35411 = G__35416;
continue;
} else {
var temp__4657__auto___35417 = cljs.core.seq.call(null,seq__35400_35408);
if(temp__4657__auto___35417){
var seq__35400_35418__$1 = temp__4657__auto___35417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35400_35418__$1)){
var c__28828__auto___35419 = cljs.core.chunk_first.call(null,seq__35400_35418__$1);
var G__35420 = cljs.core.chunk_rest.call(null,seq__35400_35418__$1);
var G__35421 = c__28828__auto___35419;
var G__35422 = cljs.core.count.call(null,c__28828__auto___35419);
var G__35423 = (0);
seq__35400_35408 = G__35420;
chunk__35401_35409 = G__35421;
count__35402_35410 = G__35422;
i__35403_35411 = G__35423;
continue;
} else {
var req_35424 = cljs.core.first.call(null,seq__35400_35418__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35424,prov);

var G__35425 = cljs.core.next.call(null,seq__35400_35418__$1);
var G__35426 = null;
var G__35427 = (0);
var G__35428 = (0);
seq__35400_35408 = G__35425;
chunk__35401_35409 = G__35426;
count__35402_35410 = G__35427;
i__35403_35411 = G__35428;
continue;
}
} else {
}
}
break;
}

var G__35429 = seq__35396;
var G__35430 = chunk__35397;
var G__35431 = count__35398;
var G__35432 = (i__35399 + (1));
seq__35396 = G__35429;
chunk__35397 = G__35430;
count__35398 = G__35431;
i__35399 = G__35432;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35396);
if(temp__4657__auto__){
var seq__35396__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35396__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__35396__$1);
var G__35433 = cljs.core.chunk_rest.call(null,seq__35396__$1);
var G__35434 = c__28828__auto__;
var G__35435 = cljs.core.count.call(null,c__28828__auto__);
var G__35436 = (0);
seq__35396 = G__35433;
chunk__35397 = G__35434;
count__35398 = G__35435;
i__35399 = G__35436;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35396__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35404_35437 = cljs.core.seq.call(null,requires);
var chunk__35405_35438 = null;
var count__35406_35439 = (0);
var i__35407_35440 = (0);
while(true){
if((i__35407_35440 < count__35406_35439)){
var req_35441 = cljs.core._nth.call(null,chunk__35405_35438,i__35407_35440);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35441,prov);

var G__35442 = seq__35404_35437;
var G__35443 = chunk__35405_35438;
var G__35444 = count__35406_35439;
var G__35445 = (i__35407_35440 + (1));
seq__35404_35437 = G__35442;
chunk__35405_35438 = G__35443;
count__35406_35439 = G__35444;
i__35407_35440 = G__35445;
continue;
} else {
var temp__4657__auto___35446__$1 = cljs.core.seq.call(null,seq__35404_35437);
if(temp__4657__auto___35446__$1){
var seq__35404_35447__$1 = temp__4657__auto___35446__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35404_35447__$1)){
var c__28828__auto___35448 = cljs.core.chunk_first.call(null,seq__35404_35447__$1);
var G__35449 = cljs.core.chunk_rest.call(null,seq__35404_35447__$1);
var G__35450 = c__28828__auto___35448;
var G__35451 = cljs.core.count.call(null,c__28828__auto___35448);
var G__35452 = (0);
seq__35404_35437 = G__35449;
chunk__35405_35438 = G__35450;
count__35406_35439 = G__35451;
i__35407_35440 = G__35452;
continue;
} else {
var req_35453 = cljs.core.first.call(null,seq__35404_35447__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35453,prov);

var G__35454 = cljs.core.next.call(null,seq__35404_35447__$1);
var G__35455 = null;
var G__35456 = (0);
var G__35457 = (0);
seq__35404_35437 = G__35454;
chunk__35405_35438 = G__35455;
count__35406_35439 = G__35456;
i__35407_35440 = G__35457;
continue;
}
} else {
}
}
break;
}

var G__35458 = cljs.core.next.call(null,seq__35396__$1);
var G__35459 = null;
var G__35460 = (0);
var G__35461 = (0);
seq__35396 = G__35458;
chunk__35397 = G__35459;
count__35398 = G__35460;
i__35399 = G__35461;
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
var seq__35462_35466 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35463_35467 = null;
var count__35464_35468 = (0);
var i__35465_35469 = (0);
while(true){
if((i__35465_35469 < count__35464_35468)){
var ns_35470 = cljs.core._nth.call(null,chunk__35463_35467,i__35465_35469);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35470);

var G__35471 = seq__35462_35466;
var G__35472 = chunk__35463_35467;
var G__35473 = count__35464_35468;
var G__35474 = (i__35465_35469 + (1));
seq__35462_35466 = G__35471;
chunk__35463_35467 = G__35472;
count__35464_35468 = G__35473;
i__35465_35469 = G__35474;
continue;
} else {
var temp__4657__auto___35475 = cljs.core.seq.call(null,seq__35462_35466);
if(temp__4657__auto___35475){
var seq__35462_35476__$1 = temp__4657__auto___35475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35462_35476__$1)){
var c__28828__auto___35477 = cljs.core.chunk_first.call(null,seq__35462_35476__$1);
var G__35478 = cljs.core.chunk_rest.call(null,seq__35462_35476__$1);
var G__35479 = c__28828__auto___35477;
var G__35480 = cljs.core.count.call(null,c__28828__auto___35477);
var G__35481 = (0);
seq__35462_35466 = G__35478;
chunk__35463_35467 = G__35479;
count__35464_35468 = G__35480;
i__35465_35469 = G__35481;
continue;
} else {
var ns_35482 = cljs.core.first.call(null,seq__35462_35476__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35482);

var G__35483 = cljs.core.next.call(null,seq__35462_35476__$1);
var G__35484 = null;
var G__35485 = (0);
var G__35486 = (0);
seq__35462_35466 = G__35483;
chunk__35463_35467 = G__35484;
count__35464_35468 = G__35485;
i__35465_35469 = G__35486;
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
goog.require_figwheel_backup_ = (function (){var or__27989__auto__ = goog.require__;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
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
var G__35487__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35488__i = 0, G__35488__a = new Array(arguments.length -  0);
while (G__35488__i < G__35488__a.length) {G__35488__a[G__35488__i] = arguments[G__35488__i + 0]; ++G__35488__i;}
  args = new cljs.core.IndexedSeq(G__35488__a,0,null);
} 
return G__35487__delegate.call(this,args);};
G__35487.cljs$lang$maxFixedArity = 0;
G__35487.cljs$lang$applyTo = (function (arglist__35489){
var args = cljs.core.seq(arglist__35489);
return G__35487__delegate(args);
});
G__35487.cljs$core$IFn$_invoke$arity$variadic = G__35487__delegate;
return G__35487;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35490_SHARP_,p2__35491_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35490_SHARP_)].join('')),p2__35491_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35492_SHARP_,p2__35493_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35492_SHARP_)].join(''),p2__35493_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35494 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35494.addCallback(((function (G__35494){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35494))
);

G__35494.addErrback(((function (G__35494){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35494))
);

return G__35494;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35495 = cljs.core._EQ_;
var expr__35496 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35495.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35496))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35495,expr__35496){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35495,expr__35496))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35495,expr__35496){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35498){if((e35498 instanceof Error)){
var e = e35498;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35498;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35495,expr__35496))
} else {
if(cljs.core.truth_(pred__35495.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35496))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35495.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35496))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35495.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35496))){
return ((function (pred__35495,expr__35496){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35499){if((e35499 instanceof Error)){
var e = e35499;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35499;

}
}})());
});
;})(pred__35495,expr__35496))
} else {
return ((function (pred__35495,expr__35496){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35495,expr__35496))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35500,callback){
var map__35501 = p__35500;
var map__35501__$1 = ((((!((map__35501 == null)))?((((map__35501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35501):map__35501);
var file_msg = map__35501__$1;
var request_url = cljs.core.get.call(null,map__35501__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35501,map__35501__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35501,map__35501__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto__){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto__){
return (function (state_35525){
var state_val_35526 = (state_35525[(1)]);
if((state_val_35526 === (7))){
var inst_35521 = (state_35525[(2)]);
var state_35525__$1 = state_35525;
var statearr_35527_35544 = state_35525__$1;
(statearr_35527_35544[(2)] = inst_35521);

(statearr_35527_35544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (1))){
var state_35525__$1 = state_35525;
var statearr_35528_35545 = state_35525__$1;
(statearr_35528_35545[(2)] = null);

(statearr_35528_35545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (4))){
var inst_35505 = (state_35525[(7)]);
var inst_35505__$1 = (state_35525[(2)]);
var state_35525__$1 = (function (){var statearr_35529 = state_35525;
(statearr_35529[(7)] = inst_35505__$1);

return statearr_35529;
})();
if(cljs.core.truth_(inst_35505__$1)){
var statearr_35530_35546 = state_35525__$1;
(statearr_35530_35546[(1)] = (5));

} else {
var statearr_35531_35547 = state_35525__$1;
(statearr_35531_35547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (6))){
var state_35525__$1 = state_35525;
var statearr_35532_35548 = state_35525__$1;
(statearr_35532_35548[(2)] = null);

(statearr_35532_35548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (3))){
var inst_35523 = (state_35525[(2)]);
var state_35525__$1 = state_35525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35525__$1,inst_35523);
} else {
if((state_val_35526 === (2))){
var state_35525__$1 = state_35525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35525__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35526 === (11))){
var inst_35517 = (state_35525[(2)]);
var state_35525__$1 = (function (){var statearr_35533 = state_35525;
(statearr_35533[(8)] = inst_35517);

return statearr_35533;
})();
var statearr_35534_35549 = state_35525__$1;
(statearr_35534_35549[(2)] = null);

(statearr_35534_35549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (9))){
var inst_35511 = (state_35525[(9)]);
var inst_35509 = (state_35525[(10)]);
var inst_35513 = inst_35511.call(null,inst_35509);
var state_35525__$1 = state_35525;
var statearr_35535_35550 = state_35525__$1;
(statearr_35535_35550[(2)] = inst_35513);

(statearr_35535_35550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (5))){
var inst_35505 = (state_35525[(7)]);
var inst_35507 = figwheel.client.file_reloading.blocking_load.call(null,inst_35505);
var state_35525__$1 = state_35525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35525__$1,(8),inst_35507);
} else {
if((state_val_35526 === (10))){
var inst_35509 = (state_35525[(10)]);
var inst_35515 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35509);
var state_35525__$1 = state_35525;
var statearr_35536_35551 = state_35525__$1;
(statearr_35536_35551[(2)] = inst_35515);

(statearr_35536_35551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35526 === (8))){
var inst_35511 = (state_35525[(9)]);
var inst_35505 = (state_35525[(7)]);
var inst_35509 = (state_35525[(2)]);
var inst_35510 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35511__$1 = cljs.core.get.call(null,inst_35510,inst_35505);
var state_35525__$1 = (function (){var statearr_35537 = state_35525;
(statearr_35537[(9)] = inst_35511__$1);

(statearr_35537[(10)] = inst_35509);

return statearr_35537;
})();
if(cljs.core.truth_(inst_35511__$1)){
var statearr_35538_35552 = state_35525__$1;
(statearr_35538_35552[(1)] = (9));

} else {
var statearr_35539_35553 = state_35525__$1;
(statearr_35539_35553[(1)] = (10));

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
});})(c__31356__auto__))
;
return ((function (switch__31268__auto__,c__31356__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31269__auto__ = null;
var figwheel$client$file_reloading$state_machine__31269__auto____0 = (function (){
var statearr_35540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35540[(0)] = figwheel$client$file_reloading$state_machine__31269__auto__);

(statearr_35540[(1)] = (1));

return statearr_35540;
});
var figwheel$client$file_reloading$state_machine__31269__auto____1 = (function (state_35525){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_35525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e35541){if((e35541 instanceof Object)){
var ex__31272__auto__ = e35541;
var statearr_35542_35554 = state_35525;
(statearr_35542_35554[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35555 = state_35525;
state_35525 = G__35555;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31269__auto__ = function(state_35525){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31269__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31269__auto____1.call(this,state_35525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31269__auto____0;
figwheel$client$file_reloading$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31269__auto____1;
return figwheel$client$file_reloading$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto__))
})();
var state__31358__auto__ = (function (){var statearr_35543 = f__31357__auto__.call(null);
(statearr_35543[(6)] = c__31356__auto__);

return statearr_35543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto__))
);

return c__31356__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35556,callback){
var map__35557 = p__35556;
var map__35557__$1 = ((((!((map__35557 == null)))?((((map__35557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35557):map__35557);
var file_msg = map__35557__$1;
var namespace = cljs.core.get.call(null,map__35557__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35557,map__35557__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35557,map__35557__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35559){
var map__35560 = p__35559;
var map__35560__$1 = ((((!((map__35560 == null)))?((((map__35560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35560):map__35560);
var file_msg = map__35560__$1;
var namespace = cljs.core.get.call(null,map__35560__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35562){
var map__35563 = p__35562;
var map__35563__$1 = ((((!((map__35563 == null)))?((((map__35563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35563):map__35563);
var file_msg = map__35563__$1;
var namespace = cljs.core.get.call(null,map__35563__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27977__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27977__auto__){
var or__27989__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27977__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35565,callback){
var map__35566 = p__35565;
var map__35566__$1 = ((((!((map__35566 == null)))?((((map__35566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35566):map__35566);
var file_msg = map__35566__$1;
var request_url = cljs.core.get.call(null,map__35566__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35566__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31356__auto___35616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___35616,out){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___35616,out){
return (function (state_35601){
var state_val_35602 = (state_35601[(1)]);
if((state_val_35602 === (1))){
var inst_35575 = cljs.core.seq.call(null,files);
var inst_35576 = cljs.core.first.call(null,inst_35575);
var inst_35577 = cljs.core.next.call(null,inst_35575);
var inst_35578 = files;
var state_35601__$1 = (function (){var statearr_35603 = state_35601;
(statearr_35603[(7)] = inst_35578);

(statearr_35603[(8)] = inst_35576);

(statearr_35603[(9)] = inst_35577);

return statearr_35603;
})();
var statearr_35604_35617 = state_35601__$1;
(statearr_35604_35617[(2)] = null);

(statearr_35604_35617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (2))){
var inst_35578 = (state_35601[(7)]);
var inst_35584 = (state_35601[(10)]);
var inst_35583 = cljs.core.seq.call(null,inst_35578);
var inst_35584__$1 = cljs.core.first.call(null,inst_35583);
var inst_35585 = cljs.core.next.call(null,inst_35583);
var inst_35586 = (inst_35584__$1 == null);
var inst_35587 = cljs.core.not.call(null,inst_35586);
var state_35601__$1 = (function (){var statearr_35605 = state_35601;
(statearr_35605[(11)] = inst_35585);

(statearr_35605[(10)] = inst_35584__$1);

return statearr_35605;
})();
if(inst_35587){
var statearr_35606_35618 = state_35601__$1;
(statearr_35606_35618[(1)] = (4));

} else {
var statearr_35607_35619 = state_35601__$1;
(statearr_35607_35619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (3))){
var inst_35599 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35601__$1,inst_35599);
} else {
if((state_val_35602 === (4))){
var inst_35584 = (state_35601[(10)]);
var inst_35589 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35584);
var state_35601__$1 = state_35601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35601__$1,(7),inst_35589);
} else {
if((state_val_35602 === (5))){
var inst_35595 = cljs.core.async.close_BANG_.call(null,out);
var state_35601__$1 = state_35601;
var statearr_35608_35620 = state_35601__$1;
(statearr_35608_35620[(2)] = inst_35595);

(statearr_35608_35620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (6))){
var inst_35597 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
var statearr_35609_35621 = state_35601__$1;
(statearr_35609_35621[(2)] = inst_35597);

(statearr_35609_35621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (7))){
var inst_35585 = (state_35601[(11)]);
var inst_35591 = (state_35601[(2)]);
var inst_35592 = cljs.core.async.put_BANG_.call(null,out,inst_35591);
var inst_35578 = inst_35585;
var state_35601__$1 = (function (){var statearr_35610 = state_35601;
(statearr_35610[(12)] = inst_35592);

(statearr_35610[(7)] = inst_35578);

return statearr_35610;
})();
var statearr_35611_35622 = state_35601__$1;
(statearr_35611_35622[(2)] = null);

(statearr_35611_35622[(1)] = (2));


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
});})(c__31356__auto___35616,out))
;
return ((function (switch__31268__auto__,c__31356__auto___35616,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto____0 = (function (){
var statearr_35612 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35612[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto__);

(statearr_35612[(1)] = (1));

return statearr_35612;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto____1 = (function (state_35601){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_35601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e35613){if((e35613 instanceof Object)){
var ex__31272__auto__ = e35613;
var statearr_35614_35623 = state_35601;
(statearr_35614_35623[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35624 = state_35601;
state_35601 = G__35624;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto__ = function(state_35601){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto____1.call(this,state_35601);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___35616,out))
})();
var state__31358__auto__ = (function (){var statearr_35615 = f__31357__auto__.call(null);
(statearr_35615[(6)] = c__31356__auto___35616);

return statearr_35615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___35616,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35625,opts){
var map__35626 = p__35625;
var map__35626__$1 = ((((!((map__35626 == null)))?((((map__35626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35626):map__35626);
var eval_body = cljs.core.get.call(null,map__35626__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35626__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27977__auto__ = eval_body;
if(cljs.core.truth_(and__27977__auto__)){
return typeof eval_body === 'string';
} else {
return and__27977__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35628){var e = e35628;
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
return (function (p1__35629_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35629_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35630){
var vec__35631 = p__35630;
var k = cljs.core.nth.call(null,vec__35631,(0),null);
var v = cljs.core.nth.call(null,vec__35631,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35634){
var vec__35635 = p__35634;
var k = cljs.core.nth.call(null,vec__35635,(0),null);
var v = cljs.core.nth.call(null,vec__35635,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35641,p__35642){
var map__35643 = p__35641;
var map__35643__$1 = ((((!((map__35643 == null)))?((((map__35643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35643):map__35643);
var opts = map__35643__$1;
var before_jsload = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35644 = p__35642;
var map__35644__$1 = ((((!((map__35644 == null)))?((((map__35644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35644):map__35644);
var msg = map__35644__$1;
var files = cljs.core.get.call(null,map__35644__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35644__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35644__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35798){
var state_val_35799 = (state_35798[(1)]);
if((state_val_35799 === (7))){
var inst_35659 = (state_35798[(7)]);
var inst_35660 = (state_35798[(8)]);
var inst_35661 = (state_35798[(9)]);
var inst_35658 = (state_35798[(10)]);
var inst_35666 = cljs.core._nth.call(null,inst_35659,inst_35661);
var inst_35667 = figwheel.client.file_reloading.eval_body.call(null,inst_35666,opts);
var inst_35668 = (inst_35661 + (1));
var tmp35800 = inst_35659;
var tmp35801 = inst_35660;
var tmp35802 = inst_35658;
var inst_35658__$1 = tmp35802;
var inst_35659__$1 = tmp35800;
var inst_35660__$1 = tmp35801;
var inst_35661__$1 = inst_35668;
var state_35798__$1 = (function (){var statearr_35803 = state_35798;
(statearr_35803[(7)] = inst_35659__$1);

(statearr_35803[(11)] = inst_35667);

(statearr_35803[(8)] = inst_35660__$1);

(statearr_35803[(9)] = inst_35661__$1);

(statearr_35803[(10)] = inst_35658__$1);

return statearr_35803;
})();
var statearr_35804_35887 = state_35798__$1;
(statearr_35804_35887[(2)] = null);

(statearr_35804_35887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (20))){
var inst_35701 = (state_35798[(12)]);
var inst_35709 = figwheel.client.file_reloading.sort_files.call(null,inst_35701);
var state_35798__$1 = state_35798;
var statearr_35805_35888 = state_35798__$1;
(statearr_35805_35888[(2)] = inst_35709);

(statearr_35805_35888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (27))){
var state_35798__$1 = state_35798;
var statearr_35806_35889 = state_35798__$1;
(statearr_35806_35889[(2)] = null);

(statearr_35806_35889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (1))){
var inst_35650 = (state_35798[(13)]);
var inst_35647 = before_jsload.call(null,files);
var inst_35648 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35649 = (function (){return ((function (inst_35650,inst_35647,inst_35648,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35638_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35638_SHARP_);
});
;})(inst_35650,inst_35647,inst_35648,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35650__$1 = cljs.core.filter.call(null,inst_35649,files);
var inst_35651 = cljs.core.not_empty.call(null,inst_35650__$1);
var state_35798__$1 = (function (){var statearr_35807 = state_35798;
(statearr_35807[(13)] = inst_35650__$1);

(statearr_35807[(14)] = inst_35647);

(statearr_35807[(15)] = inst_35648);

return statearr_35807;
})();
if(cljs.core.truth_(inst_35651)){
var statearr_35808_35890 = state_35798__$1;
(statearr_35808_35890[(1)] = (2));

} else {
var statearr_35809_35891 = state_35798__$1;
(statearr_35809_35891[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (24))){
var state_35798__$1 = state_35798;
var statearr_35810_35892 = state_35798__$1;
(statearr_35810_35892[(2)] = null);

(statearr_35810_35892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (39))){
var inst_35751 = (state_35798[(16)]);
var state_35798__$1 = state_35798;
var statearr_35811_35893 = state_35798__$1;
(statearr_35811_35893[(2)] = inst_35751);

(statearr_35811_35893[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (46))){
var inst_35793 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
var statearr_35812_35894 = state_35798__$1;
(statearr_35812_35894[(2)] = inst_35793);

(statearr_35812_35894[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (4))){
var inst_35695 = (state_35798[(2)]);
var inst_35696 = cljs.core.List.EMPTY;
var inst_35697 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35696);
var inst_35698 = (function (){return ((function (inst_35695,inst_35696,inst_35697,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35639_SHARP_){
var and__27977__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35639_SHARP_);
if(cljs.core.truth_(and__27977__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35639_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35639_SHARP_)));
} else {
return and__27977__auto__;
}
});
;})(inst_35695,inst_35696,inst_35697,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35699 = cljs.core.filter.call(null,inst_35698,files);
var inst_35700 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35701 = cljs.core.concat.call(null,inst_35699,inst_35700);
var state_35798__$1 = (function (){var statearr_35813 = state_35798;
(statearr_35813[(17)] = inst_35695);

(statearr_35813[(18)] = inst_35697);

(statearr_35813[(12)] = inst_35701);

return statearr_35813;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35814_35895 = state_35798__$1;
(statearr_35814_35895[(1)] = (16));

} else {
var statearr_35815_35896 = state_35798__$1;
(statearr_35815_35896[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (15))){
var inst_35685 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
var statearr_35816_35897 = state_35798__$1;
(statearr_35816_35897[(2)] = inst_35685);

(statearr_35816_35897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (21))){
var inst_35711 = (state_35798[(19)]);
var inst_35711__$1 = (state_35798[(2)]);
var inst_35712 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35711__$1);
var state_35798__$1 = (function (){var statearr_35817 = state_35798;
(statearr_35817[(19)] = inst_35711__$1);

return statearr_35817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35798__$1,(22),inst_35712);
} else {
if((state_val_35799 === (31))){
var inst_35796 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35798__$1,inst_35796);
} else {
if((state_val_35799 === (32))){
var inst_35751 = (state_35798[(16)]);
var inst_35756 = inst_35751.cljs$lang$protocol_mask$partition0$;
var inst_35757 = (inst_35756 & (64));
var inst_35758 = inst_35751.cljs$core$ISeq$;
var inst_35759 = (cljs.core.PROTOCOL_SENTINEL === inst_35758);
var inst_35760 = (inst_35757) || (inst_35759);
var state_35798__$1 = state_35798;
if(cljs.core.truth_(inst_35760)){
var statearr_35818_35898 = state_35798__$1;
(statearr_35818_35898[(1)] = (35));

} else {
var statearr_35819_35899 = state_35798__$1;
(statearr_35819_35899[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (40))){
var inst_35773 = (state_35798[(20)]);
var inst_35772 = (state_35798[(2)]);
var inst_35773__$1 = cljs.core.get.call(null,inst_35772,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35774 = cljs.core.get.call(null,inst_35772,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35775 = cljs.core.not_empty.call(null,inst_35773__$1);
var state_35798__$1 = (function (){var statearr_35820 = state_35798;
(statearr_35820[(20)] = inst_35773__$1);

(statearr_35820[(21)] = inst_35774);

return statearr_35820;
})();
if(cljs.core.truth_(inst_35775)){
var statearr_35821_35900 = state_35798__$1;
(statearr_35821_35900[(1)] = (41));

} else {
var statearr_35822_35901 = state_35798__$1;
(statearr_35822_35901[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (33))){
var state_35798__$1 = state_35798;
var statearr_35823_35902 = state_35798__$1;
(statearr_35823_35902[(2)] = false);

(statearr_35823_35902[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (13))){
var inst_35671 = (state_35798[(22)]);
var inst_35675 = cljs.core.chunk_first.call(null,inst_35671);
var inst_35676 = cljs.core.chunk_rest.call(null,inst_35671);
var inst_35677 = cljs.core.count.call(null,inst_35675);
var inst_35658 = inst_35676;
var inst_35659 = inst_35675;
var inst_35660 = inst_35677;
var inst_35661 = (0);
var state_35798__$1 = (function (){var statearr_35824 = state_35798;
(statearr_35824[(7)] = inst_35659);

(statearr_35824[(8)] = inst_35660);

(statearr_35824[(9)] = inst_35661);

(statearr_35824[(10)] = inst_35658);

return statearr_35824;
})();
var statearr_35825_35903 = state_35798__$1;
(statearr_35825_35903[(2)] = null);

(statearr_35825_35903[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (22))){
var inst_35719 = (state_35798[(23)]);
var inst_35711 = (state_35798[(19)]);
var inst_35715 = (state_35798[(24)]);
var inst_35714 = (state_35798[(25)]);
var inst_35714__$1 = (state_35798[(2)]);
var inst_35715__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35714__$1);
var inst_35716 = (function (){var all_files = inst_35711;
var res_SINGLEQUOTE_ = inst_35714__$1;
var res = inst_35715__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35719,inst_35711,inst_35715,inst_35714,inst_35714__$1,inst_35715__$1,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35640_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35640_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35719,inst_35711,inst_35715,inst_35714,inst_35714__$1,inst_35715__$1,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35717 = cljs.core.filter.call(null,inst_35716,inst_35714__$1);
var inst_35718 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35719__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35718);
var inst_35720 = cljs.core.not_empty.call(null,inst_35719__$1);
var state_35798__$1 = (function (){var statearr_35826 = state_35798;
(statearr_35826[(26)] = inst_35717);

(statearr_35826[(23)] = inst_35719__$1);

(statearr_35826[(24)] = inst_35715__$1);

(statearr_35826[(25)] = inst_35714__$1);

return statearr_35826;
})();
if(cljs.core.truth_(inst_35720)){
var statearr_35827_35904 = state_35798__$1;
(statearr_35827_35904[(1)] = (23));

} else {
var statearr_35828_35905 = state_35798__$1;
(statearr_35828_35905[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (36))){
var state_35798__$1 = state_35798;
var statearr_35829_35906 = state_35798__$1;
(statearr_35829_35906[(2)] = false);

(statearr_35829_35906[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (41))){
var inst_35773 = (state_35798[(20)]);
var inst_35777 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35778 = cljs.core.map.call(null,inst_35777,inst_35773);
var inst_35779 = cljs.core.pr_str.call(null,inst_35778);
var inst_35780 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35779)].join('');
var inst_35781 = figwheel.client.utils.log.call(null,inst_35780);
var state_35798__$1 = state_35798;
var statearr_35830_35907 = state_35798__$1;
(statearr_35830_35907[(2)] = inst_35781);

(statearr_35830_35907[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (43))){
var inst_35774 = (state_35798[(21)]);
var inst_35784 = (state_35798[(2)]);
var inst_35785 = cljs.core.not_empty.call(null,inst_35774);
var state_35798__$1 = (function (){var statearr_35831 = state_35798;
(statearr_35831[(27)] = inst_35784);

return statearr_35831;
})();
if(cljs.core.truth_(inst_35785)){
var statearr_35832_35908 = state_35798__$1;
(statearr_35832_35908[(1)] = (44));

} else {
var statearr_35833_35909 = state_35798__$1;
(statearr_35833_35909[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (29))){
var inst_35717 = (state_35798[(26)]);
var inst_35719 = (state_35798[(23)]);
var inst_35711 = (state_35798[(19)]);
var inst_35751 = (state_35798[(16)]);
var inst_35715 = (state_35798[(24)]);
var inst_35714 = (state_35798[(25)]);
var inst_35747 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35750 = (function (){var all_files = inst_35711;
var res_SINGLEQUOTE_ = inst_35714;
var res = inst_35715;
var files_not_loaded = inst_35717;
var dependencies_that_loaded = inst_35719;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35717,inst_35719,inst_35711,inst_35751,inst_35715,inst_35714,inst_35747,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35749){
var map__35834 = p__35749;
var map__35834__$1 = ((((!((map__35834 == null)))?((((map__35834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35834):map__35834);
var namespace = cljs.core.get.call(null,map__35834__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35717,inst_35719,inst_35711,inst_35751,inst_35715,inst_35714,inst_35747,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35751__$1 = cljs.core.group_by.call(null,inst_35750,inst_35717);
var inst_35753 = (inst_35751__$1 == null);
var inst_35754 = cljs.core.not.call(null,inst_35753);
var state_35798__$1 = (function (){var statearr_35836 = state_35798;
(statearr_35836[(16)] = inst_35751__$1);

(statearr_35836[(28)] = inst_35747);

return statearr_35836;
})();
if(inst_35754){
var statearr_35837_35910 = state_35798__$1;
(statearr_35837_35910[(1)] = (32));

} else {
var statearr_35838_35911 = state_35798__$1;
(statearr_35838_35911[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (44))){
var inst_35774 = (state_35798[(21)]);
var inst_35787 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35774);
var inst_35788 = cljs.core.pr_str.call(null,inst_35787);
var inst_35789 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35788)].join('');
var inst_35790 = figwheel.client.utils.log.call(null,inst_35789);
var state_35798__$1 = state_35798;
var statearr_35839_35912 = state_35798__$1;
(statearr_35839_35912[(2)] = inst_35790);

(statearr_35839_35912[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (6))){
var inst_35692 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
var statearr_35840_35913 = state_35798__$1;
(statearr_35840_35913[(2)] = inst_35692);

(statearr_35840_35913[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (28))){
var inst_35717 = (state_35798[(26)]);
var inst_35744 = (state_35798[(2)]);
var inst_35745 = cljs.core.not_empty.call(null,inst_35717);
var state_35798__$1 = (function (){var statearr_35841 = state_35798;
(statearr_35841[(29)] = inst_35744);

return statearr_35841;
})();
if(cljs.core.truth_(inst_35745)){
var statearr_35842_35914 = state_35798__$1;
(statearr_35842_35914[(1)] = (29));

} else {
var statearr_35843_35915 = state_35798__$1;
(statearr_35843_35915[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (25))){
var inst_35715 = (state_35798[(24)]);
var inst_35731 = (state_35798[(2)]);
var inst_35732 = cljs.core.not_empty.call(null,inst_35715);
var state_35798__$1 = (function (){var statearr_35844 = state_35798;
(statearr_35844[(30)] = inst_35731);

return statearr_35844;
})();
if(cljs.core.truth_(inst_35732)){
var statearr_35845_35916 = state_35798__$1;
(statearr_35845_35916[(1)] = (26));

} else {
var statearr_35846_35917 = state_35798__$1;
(statearr_35846_35917[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (34))){
var inst_35767 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
if(cljs.core.truth_(inst_35767)){
var statearr_35847_35918 = state_35798__$1;
(statearr_35847_35918[(1)] = (38));

} else {
var statearr_35848_35919 = state_35798__$1;
(statearr_35848_35919[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (17))){
var state_35798__$1 = state_35798;
var statearr_35849_35920 = state_35798__$1;
(statearr_35849_35920[(2)] = recompile_dependents);

(statearr_35849_35920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (3))){
var state_35798__$1 = state_35798;
var statearr_35850_35921 = state_35798__$1;
(statearr_35850_35921[(2)] = null);

(statearr_35850_35921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (12))){
var inst_35688 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
var statearr_35851_35922 = state_35798__$1;
(statearr_35851_35922[(2)] = inst_35688);

(statearr_35851_35922[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (2))){
var inst_35650 = (state_35798[(13)]);
var inst_35657 = cljs.core.seq.call(null,inst_35650);
var inst_35658 = inst_35657;
var inst_35659 = null;
var inst_35660 = (0);
var inst_35661 = (0);
var state_35798__$1 = (function (){var statearr_35852 = state_35798;
(statearr_35852[(7)] = inst_35659);

(statearr_35852[(8)] = inst_35660);

(statearr_35852[(9)] = inst_35661);

(statearr_35852[(10)] = inst_35658);

return statearr_35852;
})();
var statearr_35853_35923 = state_35798__$1;
(statearr_35853_35923[(2)] = null);

(statearr_35853_35923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (23))){
var inst_35717 = (state_35798[(26)]);
var inst_35719 = (state_35798[(23)]);
var inst_35711 = (state_35798[(19)]);
var inst_35715 = (state_35798[(24)]);
var inst_35714 = (state_35798[(25)]);
var inst_35722 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35724 = (function (){var all_files = inst_35711;
var res_SINGLEQUOTE_ = inst_35714;
var res = inst_35715;
var files_not_loaded = inst_35717;
var dependencies_that_loaded = inst_35719;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35717,inst_35719,inst_35711,inst_35715,inst_35714,inst_35722,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35723){
var map__35854 = p__35723;
var map__35854__$1 = ((((!((map__35854 == null)))?((((map__35854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35854):map__35854);
var request_url = cljs.core.get.call(null,map__35854__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35717,inst_35719,inst_35711,inst_35715,inst_35714,inst_35722,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35725 = cljs.core.reverse.call(null,inst_35719);
var inst_35726 = cljs.core.map.call(null,inst_35724,inst_35725);
var inst_35727 = cljs.core.pr_str.call(null,inst_35726);
var inst_35728 = figwheel.client.utils.log.call(null,inst_35727);
var state_35798__$1 = (function (){var statearr_35856 = state_35798;
(statearr_35856[(31)] = inst_35722);

return statearr_35856;
})();
var statearr_35857_35924 = state_35798__$1;
(statearr_35857_35924[(2)] = inst_35728);

(statearr_35857_35924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (35))){
var state_35798__$1 = state_35798;
var statearr_35858_35925 = state_35798__$1;
(statearr_35858_35925[(2)] = true);

(statearr_35858_35925[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (19))){
var inst_35701 = (state_35798[(12)]);
var inst_35707 = figwheel.client.file_reloading.expand_files.call(null,inst_35701);
var state_35798__$1 = state_35798;
var statearr_35859_35926 = state_35798__$1;
(statearr_35859_35926[(2)] = inst_35707);

(statearr_35859_35926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (11))){
var state_35798__$1 = state_35798;
var statearr_35860_35927 = state_35798__$1;
(statearr_35860_35927[(2)] = null);

(statearr_35860_35927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (9))){
var inst_35690 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
var statearr_35861_35928 = state_35798__$1;
(statearr_35861_35928[(2)] = inst_35690);

(statearr_35861_35928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (5))){
var inst_35660 = (state_35798[(8)]);
var inst_35661 = (state_35798[(9)]);
var inst_35663 = (inst_35661 < inst_35660);
var inst_35664 = inst_35663;
var state_35798__$1 = state_35798;
if(cljs.core.truth_(inst_35664)){
var statearr_35862_35929 = state_35798__$1;
(statearr_35862_35929[(1)] = (7));

} else {
var statearr_35863_35930 = state_35798__$1;
(statearr_35863_35930[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (14))){
var inst_35671 = (state_35798[(22)]);
var inst_35680 = cljs.core.first.call(null,inst_35671);
var inst_35681 = figwheel.client.file_reloading.eval_body.call(null,inst_35680,opts);
var inst_35682 = cljs.core.next.call(null,inst_35671);
var inst_35658 = inst_35682;
var inst_35659 = null;
var inst_35660 = (0);
var inst_35661 = (0);
var state_35798__$1 = (function (){var statearr_35864 = state_35798;
(statearr_35864[(7)] = inst_35659);

(statearr_35864[(8)] = inst_35660);

(statearr_35864[(9)] = inst_35661);

(statearr_35864[(32)] = inst_35681);

(statearr_35864[(10)] = inst_35658);

return statearr_35864;
})();
var statearr_35865_35931 = state_35798__$1;
(statearr_35865_35931[(2)] = null);

(statearr_35865_35931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (45))){
var state_35798__$1 = state_35798;
var statearr_35866_35932 = state_35798__$1;
(statearr_35866_35932[(2)] = null);

(statearr_35866_35932[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (26))){
var inst_35717 = (state_35798[(26)]);
var inst_35719 = (state_35798[(23)]);
var inst_35711 = (state_35798[(19)]);
var inst_35715 = (state_35798[(24)]);
var inst_35714 = (state_35798[(25)]);
var inst_35734 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35736 = (function (){var all_files = inst_35711;
var res_SINGLEQUOTE_ = inst_35714;
var res = inst_35715;
var files_not_loaded = inst_35717;
var dependencies_that_loaded = inst_35719;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35717,inst_35719,inst_35711,inst_35715,inst_35714,inst_35734,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35735){
var map__35867 = p__35735;
var map__35867__$1 = ((((!((map__35867 == null)))?((((map__35867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35867):map__35867);
var namespace = cljs.core.get.call(null,map__35867__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35867__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35717,inst_35719,inst_35711,inst_35715,inst_35714,inst_35734,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35737 = cljs.core.map.call(null,inst_35736,inst_35715);
var inst_35738 = cljs.core.pr_str.call(null,inst_35737);
var inst_35739 = figwheel.client.utils.log.call(null,inst_35738);
var inst_35740 = (function (){var all_files = inst_35711;
var res_SINGLEQUOTE_ = inst_35714;
var res = inst_35715;
var files_not_loaded = inst_35717;
var dependencies_that_loaded = inst_35719;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35717,inst_35719,inst_35711,inst_35715,inst_35714,inst_35734,inst_35736,inst_35737,inst_35738,inst_35739,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35717,inst_35719,inst_35711,inst_35715,inst_35714,inst_35734,inst_35736,inst_35737,inst_35738,inst_35739,state_val_35799,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35741 = setTimeout(inst_35740,(10));
var state_35798__$1 = (function (){var statearr_35869 = state_35798;
(statearr_35869[(33)] = inst_35739);

(statearr_35869[(34)] = inst_35734);

return statearr_35869;
})();
var statearr_35870_35933 = state_35798__$1;
(statearr_35870_35933[(2)] = inst_35741);

(statearr_35870_35933[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (16))){
var state_35798__$1 = state_35798;
var statearr_35871_35934 = state_35798__$1;
(statearr_35871_35934[(2)] = reload_dependents);

(statearr_35871_35934[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (38))){
var inst_35751 = (state_35798[(16)]);
var inst_35769 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35751);
var state_35798__$1 = state_35798;
var statearr_35872_35935 = state_35798__$1;
(statearr_35872_35935[(2)] = inst_35769);

(statearr_35872_35935[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (30))){
var state_35798__$1 = state_35798;
var statearr_35873_35936 = state_35798__$1;
(statearr_35873_35936[(2)] = null);

(statearr_35873_35936[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (10))){
var inst_35671 = (state_35798[(22)]);
var inst_35673 = cljs.core.chunked_seq_QMARK_.call(null,inst_35671);
var state_35798__$1 = state_35798;
if(inst_35673){
var statearr_35874_35937 = state_35798__$1;
(statearr_35874_35937[(1)] = (13));

} else {
var statearr_35875_35938 = state_35798__$1;
(statearr_35875_35938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (18))){
var inst_35705 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
if(cljs.core.truth_(inst_35705)){
var statearr_35876_35939 = state_35798__$1;
(statearr_35876_35939[(1)] = (19));

} else {
var statearr_35877_35940 = state_35798__$1;
(statearr_35877_35940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (42))){
var state_35798__$1 = state_35798;
var statearr_35878_35941 = state_35798__$1;
(statearr_35878_35941[(2)] = null);

(statearr_35878_35941[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (37))){
var inst_35764 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
var statearr_35879_35942 = state_35798__$1;
(statearr_35879_35942[(2)] = inst_35764);

(statearr_35879_35942[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (8))){
var inst_35671 = (state_35798[(22)]);
var inst_35658 = (state_35798[(10)]);
var inst_35671__$1 = cljs.core.seq.call(null,inst_35658);
var state_35798__$1 = (function (){var statearr_35880 = state_35798;
(statearr_35880[(22)] = inst_35671__$1);

return statearr_35880;
})();
if(inst_35671__$1){
var statearr_35881_35943 = state_35798__$1;
(statearr_35881_35943[(1)] = (10));

} else {
var statearr_35882_35944 = state_35798__$1;
(statearr_35882_35944[(1)] = (11));

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
});})(c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31268__auto__,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto____0 = (function (){
var statearr_35883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35883[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto__);

(statearr_35883[(1)] = (1));

return statearr_35883;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto____1 = (function (state_35798){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_35798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e35884){if((e35884 instanceof Object)){
var ex__31272__auto__ = e35884;
var statearr_35885_35945 = state_35798;
(statearr_35885_35945[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35946 = state_35798;
state_35798 = G__35946;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto__ = function(state_35798){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto____1.call(this,state_35798);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31358__auto__ = (function (){var statearr_35886 = f__31357__auto__.call(null);
(statearr_35886[(6)] = c__31356__auto__);

return statearr_35886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto__,map__35643,map__35643__$1,opts,before_jsload,on_jsload,reload_dependents,map__35644,map__35644__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31356__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35949,link){
var map__35950 = p__35949;
var map__35950__$1 = ((((!((map__35950 == null)))?((((map__35950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35950):map__35950);
var file = cljs.core.get.call(null,map__35950__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35950,map__35950__$1,file){
return (function (p1__35947_SHARP_,p2__35948_SHARP_){
if(cljs.core._EQ_.call(null,p1__35947_SHARP_,p2__35948_SHARP_)){
return p1__35947_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35950,map__35950__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35953){
var map__35954 = p__35953;
var map__35954__$1 = ((((!((map__35954 == null)))?((((map__35954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35954):map__35954);
var match_length = cljs.core.get.call(null,map__35954__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35954__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35952_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35952_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35956_SHARP_,p2__35957_SHARP_){
return cljs.core.assoc.call(null,p1__35956_SHARP_,cljs.core.get.call(null,p2__35957_SHARP_,key),p2__35957_SHARP_);
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
var loaded_f_datas_35958 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35958);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35958);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35959,p__35960){
var map__35961 = p__35959;
var map__35961__$1 = ((((!((map__35961 == null)))?((((map__35961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35961):map__35961);
var on_cssload = cljs.core.get.call(null,map__35961__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35962 = p__35960;
var map__35962__$1 = ((((!((map__35962 == null)))?((((map__35962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35962):map__35962);
var files_msg = map__35962__$1;
var files = cljs.core.get.call(null,map__35962__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1517063741383
