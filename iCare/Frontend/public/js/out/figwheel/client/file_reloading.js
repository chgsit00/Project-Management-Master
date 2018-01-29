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
var or__38291__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__38291__auto__){
return or__38291__auto__;
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
var or__38291__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
var or__38291__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__38291__auto____$1)){
return or__38291__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42911_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42911_SHARP_));
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
var seq__42912 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42913 = null;
var count__42914 = (0);
var i__42915 = (0);
while(true){
if((i__42915 < count__42914)){
var n = cljs.core._nth.call(null,chunk__42913,i__42915);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42916 = seq__42912;
var G__42917 = chunk__42913;
var G__42918 = count__42914;
var G__42919 = (i__42915 + (1));
seq__42912 = G__42916;
chunk__42913 = G__42917;
count__42914 = G__42918;
i__42915 = G__42919;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42912);
if(temp__4657__auto__){
var seq__42912__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42912__$1)){
var c__39130__auto__ = cljs.core.chunk_first.call(null,seq__42912__$1);
var G__42920 = cljs.core.chunk_rest.call(null,seq__42912__$1);
var G__42921 = c__39130__auto__;
var G__42922 = cljs.core.count.call(null,c__39130__auto__);
var G__42923 = (0);
seq__42912 = G__42920;
chunk__42913 = G__42921;
count__42914 = G__42922;
i__42915 = G__42923;
continue;
} else {
var n = cljs.core.first.call(null,seq__42912__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42924 = cljs.core.next.call(null,seq__42912__$1);
var G__42925 = null;
var G__42926 = (0);
var G__42927 = (0);
seq__42912 = G__42924;
chunk__42913 = G__42925;
count__42914 = G__42926;
i__42915 = G__42927;
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
return cljs.core.some.call(null,(function (p__42928){
var vec__42929 = p__42928;
var _ = cljs.core.nth.call(null,vec__42929,(0),null);
var v = cljs.core.nth.call(null,vec__42929,(1),null);
var and__38279__auto__ = v;
if(cljs.core.truth_(and__38279__auto__)){
return v.call(null,dep);
} else {
return and__38279__auto__;
}
}),cljs.core.filter.call(null,(function (p__42932){
var vec__42933 = p__42932;
var k = cljs.core.nth.call(null,vec__42933,(0),null);
var v = cljs.core.nth.call(null,vec__42933,(1),null);
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

var seq__42945_42953 = cljs.core.seq.call(null,deps);
var chunk__42946_42954 = null;
var count__42947_42955 = (0);
var i__42948_42956 = (0);
while(true){
if((i__42948_42956 < count__42947_42955)){
var dep_42957 = cljs.core._nth.call(null,chunk__42946_42954,i__42948_42956);
if(cljs.core.truth_((function (){var and__38279__auto__ = dep_42957;
if(cljs.core.truth_(and__38279__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_42957));
} else {
return and__38279__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_42957,(depth + (1)),state);
} else {
}

var G__42958 = seq__42945_42953;
var G__42959 = chunk__42946_42954;
var G__42960 = count__42947_42955;
var G__42961 = (i__42948_42956 + (1));
seq__42945_42953 = G__42958;
chunk__42946_42954 = G__42959;
count__42947_42955 = G__42960;
i__42948_42956 = G__42961;
continue;
} else {
var temp__4657__auto___42962 = cljs.core.seq.call(null,seq__42945_42953);
if(temp__4657__auto___42962){
var seq__42945_42963__$1 = temp__4657__auto___42962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42945_42963__$1)){
var c__39130__auto___42964 = cljs.core.chunk_first.call(null,seq__42945_42963__$1);
var G__42965 = cljs.core.chunk_rest.call(null,seq__42945_42963__$1);
var G__42966 = c__39130__auto___42964;
var G__42967 = cljs.core.count.call(null,c__39130__auto___42964);
var G__42968 = (0);
seq__42945_42953 = G__42965;
chunk__42946_42954 = G__42966;
count__42947_42955 = G__42967;
i__42948_42956 = G__42968;
continue;
} else {
var dep_42969 = cljs.core.first.call(null,seq__42945_42963__$1);
if(cljs.core.truth_((function (){var and__38279__auto__ = dep_42969;
if(cljs.core.truth_(and__38279__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_42969));
} else {
return and__38279__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_42969,(depth + (1)),state);
} else {
}

var G__42970 = cljs.core.next.call(null,seq__42945_42963__$1);
var G__42971 = null;
var G__42972 = (0);
var G__42973 = (0);
seq__42945_42953 = G__42970;
chunk__42946_42954 = G__42971;
count__42947_42955 = G__42972;
i__42948_42956 = G__42973;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42949){
var vec__42950 = p__42949;
var seq__42951 = cljs.core.seq.call(null,vec__42950);
var first__42952 = cljs.core.first.call(null,seq__42951);
var seq__42951__$1 = cljs.core.next.call(null,seq__42951);
var x = first__42952;
var xs = seq__42951__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42950,seq__42951,first__42952,seq__42951__$1,x,xs,get_deps__$1){
return (function (p1__42936_SHARP_){
return clojure.set.difference.call(null,p1__42936_SHARP_,x);
});})(vec__42950,seq__42951,first__42952,seq__42951__$1,x,xs,get_deps__$1))
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
var seq__42974 = cljs.core.seq.call(null,provides);
var chunk__42975 = null;
var count__42976 = (0);
var i__42977 = (0);
while(true){
if((i__42977 < count__42976)){
var prov = cljs.core._nth.call(null,chunk__42975,i__42977);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42978_42986 = cljs.core.seq.call(null,requires);
var chunk__42979_42987 = null;
var count__42980_42988 = (0);
var i__42981_42989 = (0);
while(true){
if((i__42981_42989 < count__42980_42988)){
var req_42990 = cljs.core._nth.call(null,chunk__42979_42987,i__42981_42989);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42990,prov);

var G__42991 = seq__42978_42986;
var G__42992 = chunk__42979_42987;
var G__42993 = count__42980_42988;
var G__42994 = (i__42981_42989 + (1));
seq__42978_42986 = G__42991;
chunk__42979_42987 = G__42992;
count__42980_42988 = G__42993;
i__42981_42989 = G__42994;
continue;
} else {
var temp__4657__auto___42995 = cljs.core.seq.call(null,seq__42978_42986);
if(temp__4657__auto___42995){
var seq__42978_42996__$1 = temp__4657__auto___42995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42978_42996__$1)){
var c__39130__auto___42997 = cljs.core.chunk_first.call(null,seq__42978_42996__$1);
var G__42998 = cljs.core.chunk_rest.call(null,seq__42978_42996__$1);
var G__42999 = c__39130__auto___42997;
var G__43000 = cljs.core.count.call(null,c__39130__auto___42997);
var G__43001 = (0);
seq__42978_42986 = G__42998;
chunk__42979_42987 = G__42999;
count__42980_42988 = G__43000;
i__42981_42989 = G__43001;
continue;
} else {
var req_43002 = cljs.core.first.call(null,seq__42978_42996__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43002,prov);

var G__43003 = cljs.core.next.call(null,seq__42978_42996__$1);
var G__43004 = null;
var G__43005 = (0);
var G__43006 = (0);
seq__42978_42986 = G__43003;
chunk__42979_42987 = G__43004;
count__42980_42988 = G__43005;
i__42981_42989 = G__43006;
continue;
}
} else {
}
}
break;
}

var G__43007 = seq__42974;
var G__43008 = chunk__42975;
var G__43009 = count__42976;
var G__43010 = (i__42977 + (1));
seq__42974 = G__43007;
chunk__42975 = G__43008;
count__42976 = G__43009;
i__42977 = G__43010;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42974);
if(temp__4657__auto__){
var seq__42974__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42974__$1)){
var c__39130__auto__ = cljs.core.chunk_first.call(null,seq__42974__$1);
var G__43011 = cljs.core.chunk_rest.call(null,seq__42974__$1);
var G__43012 = c__39130__auto__;
var G__43013 = cljs.core.count.call(null,c__39130__auto__);
var G__43014 = (0);
seq__42974 = G__43011;
chunk__42975 = G__43012;
count__42976 = G__43013;
i__42977 = G__43014;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42974__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42982_43015 = cljs.core.seq.call(null,requires);
var chunk__42983_43016 = null;
var count__42984_43017 = (0);
var i__42985_43018 = (0);
while(true){
if((i__42985_43018 < count__42984_43017)){
var req_43019 = cljs.core._nth.call(null,chunk__42983_43016,i__42985_43018);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43019,prov);

var G__43020 = seq__42982_43015;
var G__43021 = chunk__42983_43016;
var G__43022 = count__42984_43017;
var G__43023 = (i__42985_43018 + (1));
seq__42982_43015 = G__43020;
chunk__42983_43016 = G__43021;
count__42984_43017 = G__43022;
i__42985_43018 = G__43023;
continue;
} else {
var temp__4657__auto___43024__$1 = cljs.core.seq.call(null,seq__42982_43015);
if(temp__4657__auto___43024__$1){
var seq__42982_43025__$1 = temp__4657__auto___43024__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42982_43025__$1)){
var c__39130__auto___43026 = cljs.core.chunk_first.call(null,seq__42982_43025__$1);
var G__43027 = cljs.core.chunk_rest.call(null,seq__42982_43025__$1);
var G__43028 = c__39130__auto___43026;
var G__43029 = cljs.core.count.call(null,c__39130__auto___43026);
var G__43030 = (0);
seq__42982_43015 = G__43027;
chunk__42983_43016 = G__43028;
count__42984_43017 = G__43029;
i__42985_43018 = G__43030;
continue;
} else {
var req_43031 = cljs.core.first.call(null,seq__42982_43025__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43031,prov);

var G__43032 = cljs.core.next.call(null,seq__42982_43025__$1);
var G__43033 = null;
var G__43034 = (0);
var G__43035 = (0);
seq__42982_43015 = G__43032;
chunk__42983_43016 = G__43033;
count__42984_43017 = G__43034;
i__42985_43018 = G__43035;
continue;
}
} else {
}
}
break;
}

var G__43036 = cljs.core.next.call(null,seq__42974__$1);
var G__43037 = null;
var G__43038 = (0);
var G__43039 = (0);
seq__42974 = G__43036;
chunk__42975 = G__43037;
count__42976 = G__43038;
i__42977 = G__43039;
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
var seq__43040_43044 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__43041_43045 = null;
var count__43042_43046 = (0);
var i__43043_43047 = (0);
while(true){
if((i__43043_43047 < count__43042_43046)){
var ns_43048 = cljs.core._nth.call(null,chunk__43041_43045,i__43043_43047);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43048);

var G__43049 = seq__43040_43044;
var G__43050 = chunk__43041_43045;
var G__43051 = count__43042_43046;
var G__43052 = (i__43043_43047 + (1));
seq__43040_43044 = G__43049;
chunk__43041_43045 = G__43050;
count__43042_43046 = G__43051;
i__43043_43047 = G__43052;
continue;
} else {
var temp__4657__auto___43053 = cljs.core.seq.call(null,seq__43040_43044);
if(temp__4657__auto___43053){
var seq__43040_43054__$1 = temp__4657__auto___43053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43040_43054__$1)){
var c__39130__auto___43055 = cljs.core.chunk_first.call(null,seq__43040_43054__$1);
var G__43056 = cljs.core.chunk_rest.call(null,seq__43040_43054__$1);
var G__43057 = c__39130__auto___43055;
var G__43058 = cljs.core.count.call(null,c__39130__auto___43055);
var G__43059 = (0);
seq__43040_43044 = G__43056;
chunk__43041_43045 = G__43057;
count__43042_43046 = G__43058;
i__43043_43047 = G__43059;
continue;
} else {
var ns_43060 = cljs.core.first.call(null,seq__43040_43054__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43060);

var G__43061 = cljs.core.next.call(null,seq__43040_43054__$1);
var G__43062 = null;
var G__43063 = (0);
var G__43064 = (0);
seq__43040_43044 = G__43061;
chunk__43041_43045 = G__43062;
count__43042_43046 = G__43063;
i__43043_43047 = G__43064;
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
goog.require_figwheel_backup_ = (function (){var or__38291__auto__ = goog.require__;
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
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
var G__43065__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__43065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43066__i = 0, G__43066__a = new Array(arguments.length -  0);
while (G__43066__i < G__43066__a.length) {G__43066__a[G__43066__i] = arguments[G__43066__i + 0]; ++G__43066__i;}
  args = new cljs.core.IndexedSeq(G__43066__a,0,null);
} 
return G__43065__delegate.call(this,args);};
G__43065.cljs$lang$maxFixedArity = 0;
G__43065.cljs$lang$applyTo = (function (arglist__43067){
var args = cljs.core.seq(arglist__43067);
return G__43065__delegate(args);
});
G__43065.cljs$core$IFn$_invoke$arity$variadic = G__43065__delegate;
return G__43065;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__43068_SHARP_,p2__43069_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43068_SHARP_)].join('')),p2__43069_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__43070_SHARP_,p2__43071_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43070_SHARP_)].join(''),p2__43071_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__43072 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__43072.addCallback(((function (G__43072){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__43072))
);

G__43072.addErrback(((function (G__43072){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__43072))
);

return G__43072;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e43073){if((e43073 instanceof Error)){
var e = e43073;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43073;

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
}catch (e43074){if((e43074 instanceof Error)){
var e = e43074;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43074;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__43075 = cljs.core._EQ_;
var expr__43076 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__43075.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__43076))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__43075.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__43076))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__43075.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__43076))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__43075,expr__43076){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__43075,expr__43076))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__43078,callback){
var map__43079 = p__43078;
var map__43079__$1 = ((((!((map__43079 == null)))?((((map__43079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43079):map__43079);
var file_msg = map__43079__$1;
var request_url = cljs.core.get.call(null,map__43079__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__38291__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__43079,map__43079__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__43079,map__43079__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__40843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto__){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto__){
return (function (state_43119){
var state_val_43120 = (state_43119[(1)]);
if((state_val_43120 === (7))){
var inst_43115 = (state_43119[(2)]);
var state_43119__$1 = state_43119;
var statearr_43121_43148 = state_43119__$1;
(statearr_43121_43148[(2)] = inst_43115);

(statearr_43121_43148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (1))){
var state_43119__$1 = state_43119;
var statearr_43122_43149 = state_43119__$1;
(statearr_43122_43149[(2)] = null);

(statearr_43122_43149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (4))){
var inst_43083 = (state_43119[(7)]);
var inst_43083__$1 = (state_43119[(2)]);
var state_43119__$1 = (function (){var statearr_43123 = state_43119;
(statearr_43123[(7)] = inst_43083__$1);

return statearr_43123;
})();
if(cljs.core.truth_(inst_43083__$1)){
var statearr_43124_43150 = state_43119__$1;
(statearr_43124_43150[(1)] = (5));

} else {
var statearr_43125_43151 = state_43119__$1;
(statearr_43125_43151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (15))){
var inst_43100 = (state_43119[(8)]);
var inst_43097 = (state_43119[(9)]);
var inst_43102 = inst_43100.call(null,inst_43097);
var state_43119__$1 = state_43119;
var statearr_43126_43152 = state_43119__$1;
(statearr_43126_43152[(2)] = inst_43102);

(statearr_43126_43152[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (13))){
var inst_43109 = (state_43119[(2)]);
var state_43119__$1 = state_43119;
var statearr_43127_43153 = state_43119__$1;
(statearr_43127_43153[(2)] = inst_43109);

(statearr_43127_43153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (6))){
var state_43119__$1 = state_43119;
var statearr_43128_43154 = state_43119__$1;
(statearr_43128_43154[(2)] = null);

(statearr_43128_43154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (17))){
var inst_43106 = (state_43119[(2)]);
var state_43119__$1 = state_43119;
var statearr_43129_43155 = state_43119__$1;
(statearr_43129_43155[(2)] = inst_43106);

(statearr_43129_43155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (3))){
var inst_43117 = (state_43119[(2)]);
var state_43119__$1 = state_43119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43119__$1,inst_43117);
} else {
if((state_val_43120 === (12))){
var state_43119__$1 = state_43119;
var statearr_43130_43156 = state_43119__$1;
(statearr_43130_43156[(2)] = null);

(statearr_43130_43156[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (2))){
var state_43119__$1 = state_43119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43119__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_43120 === (11))){
var inst_43088 = (state_43119[(10)]);
var inst_43095 = figwheel.client.file_reloading.blocking_load.call(null,inst_43088);
var state_43119__$1 = state_43119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43119__$1,(14),inst_43095);
} else {
if((state_val_43120 === (9))){
var inst_43088 = (state_43119[(10)]);
var state_43119__$1 = state_43119;
if(cljs.core.truth_(inst_43088)){
var statearr_43131_43157 = state_43119__$1;
(statearr_43131_43157[(1)] = (11));

} else {
var statearr_43132_43158 = state_43119__$1;
(statearr_43132_43158[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (5))){
var inst_43083 = (state_43119[(7)]);
var inst_43089 = (state_43119[(11)]);
var inst_43088 = cljs.core.nth.call(null,inst_43083,(0),null);
var inst_43089__$1 = cljs.core.nth.call(null,inst_43083,(1),null);
var state_43119__$1 = (function (){var statearr_43133 = state_43119;
(statearr_43133[(10)] = inst_43088);

(statearr_43133[(11)] = inst_43089__$1);

return statearr_43133;
})();
if(cljs.core.truth_(inst_43089__$1)){
var statearr_43134_43159 = state_43119__$1;
(statearr_43134_43159[(1)] = (8));

} else {
var statearr_43135_43160 = state_43119__$1;
(statearr_43135_43160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (14))){
var inst_43088 = (state_43119[(10)]);
var inst_43100 = (state_43119[(8)]);
var inst_43097 = (state_43119[(2)]);
var inst_43098 = console.log("Loading!",inst_43088);
var inst_43099 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_43100__$1 = cljs.core.get.call(null,inst_43099,inst_43088);
var state_43119__$1 = (function (){var statearr_43136 = state_43119;
(statearr_43136[(8)] = inst_43100__$1);

(statearr_43136[(12)] = inst_43098);

(statearr_43136[(9)] = inst_43097);

return statearr_43136;
})();
if(cljs.core.truth_(inst_43100__$1)){
var statearr_43137_43161 = state_43119__$1;
(statearr_43137_43161[(1)] = (15));

} else {
var statearr_43138_43162 = state_43119__$1;
(statearr_43138_43162[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (16))){
var inst_43097 = (state_43119[(9)]);
var inst_43104 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_43097);
var state_43119__$1 = state_43119;
var statearr_43139_43163 = state_43119__$1;
(statearr_43139_43163[(2)] = inst_43104);

(statearr_43139_43163[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (10))){
var inst_43111 = (state_43119[(2)]);
var state_43119__$1 = (function (){var statearr_43140 = state_43119;
(statearr_43140[(13)] = inst_43111);

return statearr_43140;
})();
var statearr_43141_43164 = state_43119__$1;
(statearr_43141_43164[(2)] = null);

(statearr_43141_43164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43120 === (8))){
var inst_43089 = (state_43119[(11)]);
var inst_43091 = console.log("Evaling!",inst_43089);
var inst_43092 = eval(inst_43089);
var state_43119__$1 = (function (){var statearr_43142 = state_43119;
(statearr_43142[(14)] = inst_43091);

return statearr_43142;
})();
var statearr_43143_43165 = state_43119__$1;
(statearr_43143_43165[(2)] = inst_43092);

(statearr_43143_43165[(1)] = (10));


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
});})(c__40843__auto__))
;
return ((function (switch__40755__auto__,c__40843__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__40756__auto__ = null;
var figwheel$client$file_reloading$state_machine__40756__auto____0 = (function (){
var statearr_43144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43144[(0)] = figwheel$client$file_reloading$state_machine__40756__auto__);

(statearr_43144[(1)] = (1));

return statearr_43144;
});
var figwheel$client$file_reloading$state_machine__40756__auto____1 = (function (state_43119){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_43119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e43145){if((e43145 instanceof Object)){
var ex__40759__auto__ = e43145;
var statearr_43146_43166 = state_43119;
(statearr_43146_43166[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43167 = state_43119;
state_43119 = G__43167;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40756__auto__ = function(state_43119){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40756__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40756__auto____1.call(this,state_43119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40756__auto____0;
figwheel$client$file_reloading$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40756__auto____1;
return figwheel$client$file_reloading$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto__))
})();
var state__40845__auto__ = (function (){var statearr_43147 = f__40844__auto__.call(null);
(statearr_43147[(6)] = c__40843__auto__);

return statearr_43147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto__))
);

return c__40843__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__43169 = arguments.length;
switch (G__43169) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__43171,callback){
var map__43172 = p__43171;
var map__43172__$1 = ((((!((map__43172 == null)))?((((map__43172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43172):map__43172);
var file_msg = map__43172__$1;
var namespace = cljs.core.get.call(null,map__43172__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__43172,map__43172__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__43172,map__43172__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__43174){
var map__43175 = p__43174;
var map__43175__$1 = ((((!((map__43175 == null)))?((((map__43175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43175):map__43175);
var file_msg = map__43175__$1;
var namespace = cljs.core.get.call(null,map__43175__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__43177){
var map__43178 = p__43177;
var map__43178__$1 = ((((!((map__43178 == null)))?((((map__43178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43178):map__43178);
var file_msg = map__43178__$1;
var namespace = cljs.core.get.call(null,map__43178__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__38279__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__38279__auto__){
var or__38291__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
var or__38291__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__38291__auto____$1)){
return or__38291__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__38279__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__43180,callback){
var map__43181 = p__43180;
var map__43181__$1 = ((((!((map__43181 == null)))?((((map__43181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43181):map__43181);
var file_msg = map__43181__$1;
var request_url = cljs.core.get.call(null,map__43181__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__43181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__40843__auto___43231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___43231,out){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___43231,out){
return (function (state_43216){
var state_val_43217 = (state_43216[(1)]);
if((state_val_43217 === (1))){
var inst_43190 = cljs.core.seq.call(null,files);
var inst_43191 = cljs.core.first.call(null,inst_43190);
var inst_43192 = cljs.core.next.call(null,inst_43190);
var inst_43193 = files;
var state_43216__$1 = (function (){var statearr_43218 = state_43216;
(statearr_43218[(7)] = inst_43193);

(statearr_43218[(8)] = inst_43192);

(statearr_43218[(9)] = inst_43191);

return statearr_43218;
})();
var statearr_43219_43232 = state_43216__$1;
(statearr_43219_43232[(2)] = null);

(statearr_43219_43232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (2))){
var inst_43193 = (state_43216[(7)]);
var inst_43199 = (state_43216[(10)]);
var inst_43198 = cljs.core.seq.call(null,inst_43193);
var inst_43199__$1 = cljs.core.first.call(null,inst_43198);
var inst_43200 = cljs.core.next.call(null,inst_43198);
var inst_43201 = (inst_43199__$1 == null);
var inst_43202 = cljs.core.not.call(null,inst_43201);
var state_43216__$1 = (function (){var statearr_43220 = state_43216;
(statearr_43220[(10)] = inst_43199__$1);

(statearr_43220[(11)] = inst_43200);

return statearr_43220;
})();
if(inst_43202){
var statearr_43221_43233 = state_43216__$1;
(statearr_43221_43233[(1)] = (4));

} else {
var statearr_43222_43234 = state_43216__$1;
(statearr_43222_43234[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (3))){
var inst_43214 = (state_43216[(2)]);
var state_43216__$1 = state_43216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43216__$1,inst_43214);
} else {
if((state_val_43217 === (4))){
var inst_43199 = (state_43216[(10)]);
var inst_43204 = figwheel.client.file_reloading.reload_js_file.call(null,inst_43199);
var state_43216__$1 = state_43216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43216__$1,(7),inst_43204);
} else {
if((state_val_43217 === (5))){
var inst_43210 = cljs.core.async.close_BANG_.call(null,out);
var state_43216__$1 = state_43216;
var statearr_43223_43235 = state_43216__$1;
(statearr_43223_43235[(2)] = inst_43210);

(statearr_43223_43235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (6))){
var inst_43212 = (state_43216[(2)]);
var state_43216__$1 = state_43216;
var statearr_43224_43236 = state_43216__$1;
(statearr_43224_43236[(2)] = inst_43212);

(statearr_43224_43236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (7))){
var inst_43200 = (state_43216[(11)]);
var inst_43206 = (state_43216[(2)]);
var inst_43207 = cljs.core.async.put_BANG_.call(null,out,inst_43206);
var inst_43193 = inst_43200;
var state_43216__$1 = (function (){var statearr_43225 = state_43216;
(statearr_43225[(12)] = inst_43207);

(statearr_43225[(7)] = inst_43193);

return statearr_43225;
})();
var statearr_43226_43237 = state_43216__$1;
(statearr_43226_43237[(2)] = null);

(statearr_43226_43237[(1)] = (2));


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
});})(c__40843__auto___43231,out))
;
return ((function (switch__40755__auto__,c__40843__auto___43231,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto____0 = (function (){
var statearr_43227 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43227[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto__);

(statearr_43227[(1)] = (1));

return statearr_43227;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto____1 = (function (state_43216){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_43216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e43228){if((e43228 instanceof Object)){
var ex__40759__auto__ = e43228;
var statearr_43229_43238 = state_43216;
(statearr_43229_43238[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43239 = state_43216;
state_43216 = G__43239;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto__ = function(state_43216){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto____1.call(this,state_43216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___43231,out))
})();
var state__40845__auto__ = (function (){var statearr_43230 = f__40844__auto__.call(null);
(statearr_43230[(6)] = c__40843__auto___43231);

return statearr_43230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___43231,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__43240,opts){
var map__43241 = p__43240;
var map__43241__$1 = ((((!((map__43241 == null)))?((((map__43241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43241):map__43241);
var eval_body = cljs.core.get.call(null,map__43241__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__43241__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__38279__auto__ = eval_body;
if(cljs.core.truth_(and__38279__auto__)){
return typeof eval_body === 'string';
} else {
return and__38279__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e43243){var e = e43243;
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
return (function (p1__43244_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43244_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__43245){
var vec__43246 = p__43245;
var k = cljs.core.nth.call(null,vec__43246,(0),null);
var v = cljs.core.nth.call(null,vec__43246,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__43249){
var vec__43250 = p__43249;
var k = cljs.core.nth.call(null,vec__43250,(0),null);
var v = cljs.core.nth.call(null,vec__43250,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__43256,p__43257){
var map__43258 = p__43256;
var map__43258__$1 = ((((!((map__43258 == null)))?((((map__43258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43258):map__43258);
var opts = map__43258__$1;
var before_jsload = cljs.core.get.call(null,map__43258__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43258__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43258__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43259 = p__43257;
var map__43259__$1 = ((((!((map__43259 == null)))?((((map__43259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43259):map__43259);
var msg = map__43259__$1;
var files = cljs.core.get.call(null,map__43259__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43259__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43259__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43413){
var state_val_43414 = (state_43413[(1)]);
if((state_val_43414 === (7))){
var inst_43274 = (state_43413[(7)]);
var inst_43275 = (state_43413[(8)]);
var inst_43276 = (state_43413[(9)]);
var inst_43273 = (state_43413[(10)]);
var inst_43281 = cljs.core._nth.call(null,inst_43274,inst_43276);
var inst_43282 = figwheel.client.file_reloading.eval_body.call(null,inst_43281,opts);
var inst_43283 = (inst_43276 + (1));
var tmp43415 = inst_43274;
var tmp43416 = inst_43275;
var tmp43417 = inst_43273;
var inst_43273__$1 = tmp43417;
var inst_43274__$1 = tmp43415;
var inst_43275__$1 = tmp43416;
var inst_43276__$1 = inst_43283;
var state_43413__$1 = (function (){var statearr_43418 = state_43413;
(statearr_43418[(7)] = inst_43274__$1);

(statearr_43418[(11)] = inst_43282);

(statearr_43418[(8)] = inst_43275__$1);

(statearr_43418[(9)] = inst_43276__$1);

(statearr_43418[(10)] = inst_43273__$1);

return statearr_43418;
})();
var statearr_43419_43502 = state_43413__$1;
(statearr_43419_43502[(2)] = null);

(statearr_43419_43502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (20))){
var inst_43316 = (state_43413[(12)]);
var inst_43324 = figwheel.client.file_reloading.sort_files.call(null,inst_43316);
var state_43413__$1 = state_43413;
var statearr_43420_43503 = state_43413__$1;
(statearr_43420_43503[(2)] = inst_43324);

(statearr_43420_43503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (27))){
var state_43413__$1 = state_43413;
var statearr_43421_43504 = state_43413__$1;
(statearr_43421_43504[(2)] = null);

(statearr_43421_43504[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (1))){
var inst_43265 = (state_43413[(13)]);
var inst_43262 = before_jsload.call(null,files);
var inst_43263 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43264 = (function (){return ((function (inst_43265,inst_43262,inst_43263,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43253_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43253_SHARP_);
});
;})(inst_43265,inst_43262,inst_43263,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43265__$1 = cljs.core.filter.call(null,inst_43264,files);
var inst_43266 = cljs.core.not_empty.call(null,inst_43265__$1);
var state_43413__$1 = (function (){var statearr_43422 = state_43413;
(statearr_43422[(13)] = inst_43265__$1);

(statearr_43422[(14)] = inst_43263);

(statearr_43422[(15)] = inst_43262);

return statearr_43422;
})();
if(cljs.core.truth_(inst_43266)){
var statearr_43423_43505 = state_43413__$1;
(statearr_43423_43505[(1)] = (2));

} else {
var statearr_43424_43506 = state_43413__$1;
(statearr_43424_43506[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (24))){
var state_43413__$1 = state_43413;
var statearr_43425_43507 = state_43413__$1;
(statearr_43425_43507[(2)] = null);

(statearr_43425_43507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (39))){
var inst_43366 = (state_43413[(16)]);
var state_43413__$1 = state_43413;
var statearr_43426_43508 = state_43413__$1;
(statearr_43426_43508[(2)] = inst_43366);

(statearr_43426_43508[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (46))){
var inst_43408 = (state_43413[(2)]);
var state_43413__$1 = state_43413;
var statearr_43427_43509 = state_43413__$1;
(statearr_43427_43509[(2)] = inst_43408);

(statearr_43427_43509[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (4))){
var inst_43310 = (state_43413[(2)]);
var inst_43311 = cljs.core.List.EMPTY;
var inst_43312 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43311);
var inst_43313 = (function (){return ((function (inst_43310,inst_43311,inst_43312,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43254_SHARP_){
var and__38279__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43254_SHARP_);
if(cljs.core.truth_(and__38279__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43254_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__43254_SHARP_)));
} else {
return and__38279__auto__;
}
});
;})(inst_43310,inst_43311,inst_43312,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43314 = cljs.core.filter.call(null,inst_43313,files);
var inst_43315 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43316 = cljs.core.concat.call(null,inst_43314,inst_43315);
var state_43413__$1 = (function (){var statearr_43428 = state_43413;
(statearr_43428[(17)] = inst_43310);

(statearr_43428[(18)] = inst_43312);

(statearr_43428[(12)] = inst_43316);

return statearr_43428;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43429_43510 = state_43413__$1;
(statearr_43429_43510[(1)] = (16));

} else {
var statearr_43430_43511 = state_43413__$1;
(statearr_43430_43511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (15))){
var inst_43300 = (state_43413[(2)]);
var state_43413__$1 = state_43413;
var statearr_43431_43512 = state_43413__$1;
(statearr_43431_43512[(2)] = inst_43300);

(statearr_43431_43512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (21))){
var inst_43326 = (state_43413[(19)]);
var inst_43326__$1 = (state_43413[(2)]);
var inst_43327 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43326__$1);
var state_43413__$1 = (function (){var statearr_43432 = state_43413;
(statearr_43432[(19)] = inst_43326__$1);

return statearr_43432;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43413__$1,(22),inst_43327);
} else {
if((state_val_43414 === (31))){
var inst_43411 = (state_43413[(2)]);
var state_43413__$1 = state_43413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43413__$1,inst_43411);
} else {
if((state_val_43414 === (32))){
var inst_43366 = (state_43413[(16)]);
var inst_43371 = inst_43366.cljs$lang$protocol_mask$partition0$;
var inst_43372 = (inst_43371 & (64));
var inst_43373 = inst_43366.cljs$core$ISeq$;
var inst_43374 = (cljs.core.PROTOCOL_SENTINEL === inst_43373);
var inst_43375 = (inst_43372) || (inst_43374);
var state_43413__$1 = state_43413;
if(cljs.core.truth_(inst_43375)){
var statearr_43433_43513 = state_43413__$1;
(statearr_43433_43513[(1)] = (35));

} else {
var statearr_43434_43514 = state_43413__$1;
(statearr_43434_43514[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (40))){
var inst_43388 = (state_43413[(20)]);
var inst_43387 = (state_43413[(2)]);
var inst_43388__$1 = cljs.core.get.call(null,inst_43387,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43389 = cljs.core.get.call(null,inst_43387,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43390 = cljs.core.not_empty.call(null,inst_43388__$1);
var state_43413__$1 = (function (){var statearr_43435 = state_43413;
(statearr_43435[(20)] = inst_43388__$1);

(statearr_43435[(21)] = inst_43389);

return statearr_43435;
})();
if(cljs.core.truth_(inst_43390)){
var statearr_43436_43515 = state_43413__$1;
(statearr_43436_43515[(1)] = (41));

} else {
var statearr_43437_43516 = state_43413__$1;
(statearr_43437_43516[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (33))){
var state_43413__$1 = state_43413;
var statearr_43438_43517 = state_43413__$1;
(statearr_43438_43517[(2)] = false);

(statearr_43438_43517[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (13))){
var inst_43286 = (state_43413[(22)]);
var inst_43290 = cljs.core.chunk_first.call(null,inst_43286);
var inst_43291 = cljs.core.chunk_rest.call(null,inst_43286);
var inst_43292 = cljs.core.count.call(null,inst_43290);
var inst_43273 = inst_43291;
var inst_43274 = inst_43290;
var inst_43275 = inst_43292;
var inst_43276 = (0);
var state_43413__$1 = (function (){var statearr_43439 = state_43413;
(statearr_43439[(7)] = inst_43274);

(statearr_43439[(8)] = inst_43275);

(statearr_43439[(9)] = inst_43276);

(statearr_43439[(10)] = inst_43273);

return statearr_43439;
})();
var statearr_43440_43518 = state_43413__$1;
(statearr_43440_43518[(2)] = null);

(statearr_43440_43518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (22))){
var inst_43330 = (state_43413[(23)]);
var inst_43334 = (state_43413[(24)]);
var inst_43326 = (state_43413[(19)]);
var inst_43329 = (state_43413[(25)]);
var inst_43329__$1 = (state_43413[(2)]);
var inst_43330__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43329__$1);
var inst_43331 = (function (){var all_files = inst_43326;
var res_SINGLEQUOTE_ = inst_43329__$1;
var res = inst_43330__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43330,inst_43334,inst_43326,inst_43329,inst_43329__$1,inst_43330__$1,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43255_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__43255_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43330,inst_43334,inst_43326,inst_43329,inst_43329__$1,inst_43330__$1,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43332 = cljs.core.filter.call(null,inst_43331,inst_43329__$1);
var inst_43333 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43334__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43333);
var inst_43335 = cljs.core.not_empty.call(null,inst_43334__$1);
var state_43413__$1 = (function (){var statearr_43441 = state_43413;
(statearr_43441[(23)] = inst_43330__$1);

(statearr_43441[(24)] = inst_43334__$1);

(statearr_43441[(26)] = inst_43332);

(statearr_43441[(25)] = inst_43329__$1);

return statearr_43441;
})();
if(cljs.core.truth_(inst_43335)){
var statearr_43442_43519 = state_43413__$1;
(statearr_43442_43519[(1)] = (23));

} else {
var statearr_43443_43520 = state_43413__$1;
(statearr_43443_43520[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (36))){
var state_43413__$1 = state_43413;
var statearr_43444_43521 = state_43413__$1;
(statearr_43444_43521[(2)] = false);

(statearr_43444_43521[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (41))){
var inst_43388 = (state_43413[(20)]);
var inst_43392 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43393 = cljs.core.map.call(null,inst_43392,inst_43388);
var inst_43394 = cljs.core.pr_str.call(null,inst_43393);
var inst_43395 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43394)].join('');
var inst_43396 = figwheel.client.utils.log.call(null,inst_43395);
var state_43413__$1 = state_43413;
var statearr_43445_43522 = state_43413__$1;
(statearr_43445_43522[(2)] = inst_43396);

(statearr_43445_43522[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (43))){
var inst_43389 = (state_43413[(21)]);
var inst_43399 = (state_43413[(2)]);
var inst_43400 = cljs.core.not_empty.call(null,inst_43389);
var state_43413__$1 = (function (){var statearr_43446 = state_43413;
(statearr_43446[(27)] = inst_43399);

return statearr_43446;
})();
if(cljs.core.truth_(inst_43400)){
var statearr_43447_43523 = state_43413__$1;
(statearr_43447_43523[(1)] = (44));

} else {
var statearr_43448_43524 = state_43413__$1;
(statearr_43448_43524[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (29))){
var inst_43330 = (state_43413[(23)]);
var inst_43334 = (state_43413[(24)]);
var inst_43366 = (state_43413[(16)]);
var inst_43326 = (state_43413[(19)]);
var inst_43332 = (state_43413[(26)]);
var inst_43329 = (state_43413[(25)]);
var inst_43362 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43365 = (function (){var all_files = inst_43326;
var res_SINGLEQUOTE_ = inst_43329;
var res = inst_43330;
var files_not_loaded = inst_43332;
var dependencies_that_loaded = inst_43334;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43330,inst_43334,inst_43366,inst_43326,inst_43332,inst_43329,inst_43362,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43364){
var map__43449 = p__43364;
var map__43449__$1 = ((((!((map__43449 == null)))?((((map__43449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43449):map__43449);
var namespace = cljs.core.get.call(null,map__43449__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43330,inst_43334,inst_43366,inst_43326,inst_43332,inst_43329,inst_43362,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43366__$1 = cljs.core.group_by.call(null,inst_43365,inst_43332);
var inst_43368 = (inst_43366__$1 == null);
var inst_43369 = cljs.core.not.call(null,inst_43368);
var state_43413__$1 = (function (){var statearr_43451 = state_43413;
(statearr_43451[(16)] = inst_43366__$1);

(statearr_43451[(28)] = inst_43362);

return statearr_43451;
})();
if(inst_43369){
var statearr_43452_43525 = state_43413__$1;
(statearr_43452_43525[(1)] = (32));

} else {
var statearr_43453_43526 = state_43413__$1;
(statearr_43453_43526[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (44))){
var inst_43389 = (state_43413[(21)]);
var inst_43402 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43389);
var inst_43403 = cljs.core.pr_str.call(null,inst_43402);
var inst_43404 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43403)].join('');
var inst_43405 = figwheel.client.utils.log.call(null,inst_43404);
var state_43413__$1 = state_43413;
var statearr_43454_43527 = state_43413__$1;
(statearr_43454_43527[(2)] = inst_43405);

(statearr_43454_43527[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (6))){
var inst_43307 = (state_43413[(2)]);
var state_43413__$1 = state_43413;
var statearr_43455_43528 = state_43413__$1;
(statearr_43455_43528[(2)] = inst_43307);

(statearr_43455_43528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (28))){
var inst_43332 = (state_43413[(26)]);
var inst_43359 = (state_43413[(2)]);
var inst_43360 = cljs.core.not_empty.call(null,inst_43332);
var state_43413__$1 = (function (){var statearr_43456 = state_43413;
(statearr_43456[(29)] = inst_43359);

return statearr_43456;
})();
if(cljs.core.truth_(inst_43360)){
var statearr_43457_43529 = state_43413__$1;
(statearr_43457_43529[(1)] = (29));

} else {
var statearr_43458_43530 = state_43413__$1;
(statearr_43458_43530[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (25))){
var inst_43330 = (state_43413[(23)]);
var inst_43346 = (state_43413[(2)]);
var inst_43347 = cljs.core.not_empty.call(null,inst_43330);
var state_43413__$1 = (function (){var statearr_43459 = state_43413;
(statearr_43459[(30)] = inst_43346);

return statearr_43459;
})();
if(cljs.core.truth_(inst_43347)){
var statearr_43460_43531 = state_43413__$1;
(statearr_43460_43531[(1)] = (26));

} else {
var statearr_43461_43532 = state_43413__$1;
(statearr_43461_43532[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (34))){
var inst_43382 = (state_43413[(2)]);
var state_43413__$1 = state_43413;
if(cljs.core.truth_(inst_43382)){
var statearr_43462_43533 = state_43413__$1;
(statearr_43462_43533[(1)] = (38));

} else {
var statearr_43463_43534 = state_43413__$1;
(statearr_43463_43534[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (17))){
var state_43413__$1 = state_43413;
var statearr_43464_43535 = state_43413__$1;
(statearr_43464_43535[(2)] = recompile_dependents);

(statearr_43464_43535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (3))){
var state_43413__$1 = state_43413;
var statearr_43465_43536 = state_43413__$1;
(statearr_43465_43536[(2)] = null);

(statearr_43465_43536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (12))){
var inst_43303 = (state_43413[(2)]);
var state_43413__$1 = state_43413;
var statearr_43466_43537 = state_43413__$1;
(statearr_43466_43537[(2)] = inst_43303);

(statearr_43466_43537[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (2))){
var inst_43265 = (state_43413[(13)]);
var inst_43272 = cljs.core.seq.call(null,inst_43265);
var inst_43273 = inst_43272;
var inst_43274 = null;
var inst_43275 = (0);
var inst_43276 = (0);
var state_43413__$1 = (function (){var statearr_43467 = state_43413;
(statearr_43467[(7)] = inst_43274);

(statearr_43467[(8)] = inst_43275);

(statearr_43467[(9)] = inst_43276);

(statearr_43467[(10)] = inst_43273);

return statearr_43467;
})();
var statearr_43468_43538 = state_43413__$1;
(statearr_43468_43538[(2)] = null);

(statearr_43468_43538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (23))){
var inst_43330 = (state_43413[(23)]);
var inst_43334 = (state_43413[(24)]);
var inst_43326 = (state_43413[(19)]);
var inst_43332 = (state_43413[(26)]);
var inst_43329 = (state_43413[(25)]);
var inst_43337 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43339 = (function (){var all_files = inst_43326;
var res_SINGLEQUOTE_ = inst_43329;
var res = inst_43330;
var files_not_loaded = inst_43332;
var dependencies_that_loaded = inst_43334;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43330,inst_43334,inst_43326,inst_43332,inst_43329,inst_43337,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43338){
var map__43469 = p__43338;
var map__43469__$1 = ((((!((map__43469 == null)))?((((map__43469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43469):map__43469);
var request_url = cljs.core.get.call(null,map__43469__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43330,inst_43334,inst_43326,inst_43332,inst_43329,inst_43337,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43340 = cljs.core.reverse.call(null,inst_43334);
var inst_43341 = cljs.core.map.call(null,inst_43339,inst_43340);
var inst_43342 = cljs.core.pr_str.call(null,inst_43341);
var inst_43343 = figwheel.client.utils.log.call(null,inst_43342);
var state_43413__$1 = (function (){var statearr_43471 = state_43413;
(statearr_43471[(31)] = inst_43337);

return statearr_43471;
})();
var statearr_43472_43539 = state_43413__$1;
(statearr_43472_43539[(2)] = inst_43343);

(statearr_43472_43539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (35))){
var state_43413__$1 = state_43413;
var statearr_43473_43540 = state_43413__$1;
(statearr_43473_43540[(2)] = true);

(statearr_43473_43540[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (19))){
var inst_43316 = (state_43413[(12)]);
var inst_43322 = figwheel.client.file_reloading.expand_files.call(null,inst_43316);
var state_43413__$1 = state_43413;
var statearr_43474_43541 = state_43413__$1;
(statearr_43474_43541[(2)] = inst_43322);

(statearr_43474_43541[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (11))){
var state_43413__$1 = state_43413;
var statearr_43475_43542 = state_43413__$1;
(statearr_43475_43542[(2)] = null);

(statearr_43475_43542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (9))){
var inst_43305 = (state_43413[(2)]);
var state_43413__$1 = state_43413;
var statearr_43476_43543 = state_43413__$1;
(statearr_43476_43543[(2)] = inst_43305);

(statearr_43476_43543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (5))){
var inst_43275 = (state_43413[(8)]);
var inst_43276 = (state_43413[(9)]);
var inst_43278 = (inst_43276 < inst_43275);
var inst_43279 = inst_43278;
var state_43413__$1 = state_43413;
if(cljs.core.truth_(inst_43279)){
var statearr_43477_43544 = state_43413__$1;
(statearr_43477_43544[(1)] = (7));

} else {
var statearr_43478_43545 = state_43413__$1;
(statearr_43478_43545[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (14))){
var inst_43286 = (state_43413[(22)]);
var inst_43295 = cljs.core.first.call(null,inst_43286);
var inst_43296 = figwheel.client.file_reloading.eval_body.call(null,inst_43295,opts);
var inst_43297 = cljs.core.next.call(null,inst_43286);
var inst_43273 = inst_43297;
var inst_43274 = null;
var inst_43275 = (0);
var inst_43276 = (0);
var state_43413__$1 = (function (){var statearr_43479 = state_43413;
(statearr_43479[(7)] = inst_43274);

(statearr_43479[(8)] = inst_43275);

(statearr_43479[(32)] = inst_43296);

(statearr_43479[(9)] = inst_43276);

(statearr_43479[(10)] = inst_43273);

return statearr_43479;
})();
var statearr_43480_43546 = state_43413__$1;
(statearr_43480_43546[(2)] = null);

(statearr_43480_43546[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (45))){
var state_43413__$1 = state_43413;
var statearr_43481_43547 = state_43413__$1;
(statearr_43481_43547[(2)] = null);

(statearr_43481_43547[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (26))){
var inst_43330 = (state_43413[(23)]);
var inst_43334 = (state_43413[(24)]);
var inst_43326 = (state_43413[(19)]);
var inst_43332 = (state_43413[(26)]);
var inst_43329 = (state_43413[(25)]);
var inst_43349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43351 = (function (){var all_files = inst_43326;
var res_SINGLEQUOTE_ = inst_43329;
var res = inst_43330;
var files_not_loaded = inst_43332;
var dependencies_that_loaded = inst_43334;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43330,inst_43334,inst_43326,inst_43332,inst_43329,inst_43349,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43350){
var map__43482 = p__43350;
var map__43482__$1 = ((((!((map__43482 == null)))?((((map__43482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43482):map__43482);
var namespace = cljs.core.get.call(null,map__43482__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43482__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43330,inst_43334,inst_43326,inst_43332,inst_43329,inst_43349,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43352 = cljs.core.map.call(null,inst_43351,inst_43330);
var inst_43353 = cljs.core.pr_str.call(null,inst_43352);
var inst_43354 = figwheel.client.utils.log.call(null,inst_43353);
var inst_43355 = (function (){var all_files = inst_43326;
var res_SINGLEQUOTE_ = inst_43329;
var res = inst_43330;
var files_not_loaded = inst_43332;
var dependencies_that_loaded = inst_43334;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43330,inst_43334,inst_43326,inst_43332,inst_43329,inst_43349,inst_43351,inst_43352,inst_43353,inst_43354,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43330,inst_43334,inst_43326,inst_43332,inst_43329,inst_43349,inst_43351,inst_43352,inst_43353,inst_43354,state_val_43414,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43356 = setTimeout(inst_43355,(10));
var state_43413__$1 = (function (){var statearr_43484 = state_43413;
(statearr_43484[(33)] = inst_43354);

(statearr_43484[(34)] = inst_43349);

return statearr_43484;
})();
var statearr_43485_43548 = state_43413__$1;
(statearr_43485_43548[(2)] = inst_43356);

(statearr_43485_43548[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (16))){
var state_43413__$1 = state_43413;
var statearr_43486_43549 = state_43413__$1;
(statearr_43486_43549[(2)] = reload_dependents);

(statearr_43486_43549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (38))){
var inst_43366 = (state_43413[(16)]);
var inst_43384 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43366);
var state_43413__$1 = state_43413;
var statearr_43487_43550 = state_43413__$1;
(statearr_43487_43550[(2)] = inst_43384);

(statearr_43487_43550[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (30))){
var state_43413__$1 = state_43413;
var statearr_43488_43551 = state_43413__$1;
(statearr_43488_43551[(2)] = null);

(statearr_43488_43551[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (10))){
var inst_43286 = (state_43413[(22)]);
var inst_43288 = cljs.core.chunked_seq_QMARK_.call(null,inst_43286);
var state_43413__$1 = state_43413;
if(inst_43288){
var statearr_43489_43552 = state_43413__$1;
(statearr_43489_43552[(1)] = (13));

} else {
var statearr_43490_43553 = state_43413__$1;
(statearr_43490_43553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (18))){
var inst_43320 = (state_43413[(2)]);
var state_43413__$1 = state_43413;
if(cljs.core.truth_(inst_43320)){
var statearr_43491_43554 = state_43413__$1;
(statearr_43491_43554[(1)] = (19));

} else {
var statearr_43492_43555 = state_43413__$1;
(statearr_43492_43555[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (42))){
var state_43413__$1 = state_43413;
var statearr_43493_43556 = state_43413__$1;
(statearr_43493_43556[(2)] = null);

(statearr_43493_43556[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (37))){
var inst_43379 = (state_43413[(2)]);
var state_43413__$1 = state_43413;
var statearr_43494_43557 = state_43413__$1;
(statearr_43494_43557[(2)] = inst_43379);

(statearr_43494_43557[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43414 === (8))){
var inst_43286 = (state_43413[(22)]);
var inst_43273 = (state_43413[(10)]);
var inst_43286__$1 = cljs.core.seq.call(null,inst_43273);
var state_43413__$1 = (function (){var statearr_43495 = state_43413;
(statearr_43495[(22)] = inst_43286__$1);

return statearr_43495;
})();
if(inst_43286__$1){
var statearr_43496_43558 = state_43413__$1;
(statearr_43496_43558[(1)] = (10));

} else {
var statearr_43497_43559 = state_43413__$1;
(statearr_43497_43559[(1)] = (11));

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
});})(c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40755__auto__,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto____0 = (function (){
var statearr_43498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43498[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto__);

(statearr_43498[(1)] = (1));

return statearr_43498;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto____1 = (function (state_43413){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_43413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e43499){if((e43499 instanceof Object)){
var ex__40759__auto__ = e43499;
var statearr_43500_43560 = state_43413;
(statearr_43500_43560[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43561 = state_43413;
state_43413 = G__43561;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto__ = function(state_43413){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto____1.call(this,state_43413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40845__auto__ = (function (){var statearr_43501 = f__40844__auto__.call(null);
(statearr_43501[(6)] = c__40843__auto__);

return statearr_43501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto__,map__43258,map__43258__$1,opts,before_jsload,on_jsload,reload_dependents,map__43259,map__43259__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40843__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43564,link){
var map__43565 = p__43564;
var map__43565__$1 = ((((!((map__43565 == null)))?((((map__43565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43565):map__43565);
var file = cljs.core.get.call(null,map__43565__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__43565,map__43565__$1,file){
return (function (p1__43562_SHARP_,p2__43563_SHARP_){
if(cljs.core._EQ_.call(null,p1__43562_SHARP_,p2__43563_SHARP_)){
return p1__43562_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__43565,map__43565__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43568){
var map__43569 = p__43568;
var map__43569__$1 = ((((!((map__43569 == null)))?((((map__43569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43569):map__43569);
var match_length = cljs.core.get.call(null,map__43569__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43569__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43567_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43567_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43571_SHARP_,p2__43572_SHARP_){
return cljs.core.assoc.call(null,p1__43571_SHARP_,cljs.core.get.call(null,p2__43572_SHARP_,key),p2__43572_SHARP_);
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
var loaded_f_datas_43573 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_43573);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_43573);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43574,p__43575){
var map__43576 = p__43574;
var map__43576__$1 = ((((!((map__43576 == null)))?((((map__43576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43576):map__43576);
var on_cssload = cljs.core.get.call(null,map__43576__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__43577 = p__43575;
var map__43577__$1 = ((((!((map__43577 == null)))?((((map__43577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43577):map__43577);
var files_msg = map__43577__$1;
var files = cljs.core.get.call(null,map__43577__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1517176491241
