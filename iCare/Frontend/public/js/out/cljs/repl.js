// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35921){
var map__35922 = p__35921;
var map__35922__$1 = ((((!((map__35922 == null)))?((((map__35922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35922):map__35922);
var m = map__35922__$1;
var n = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35924_35946 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35925_35947 = null;
var count__35926_35948 = (0);
var i__35927_35949 = (0);
while(true){
if((i__35927_35949 < count__35926_35948)){
var f_35950 = cljs.core._nth.call(null,chunk__35925_35947,i__35927_35949);
cljs.core.println.call(null,"  ",f_35950);

var G__35951 = seq__35924_35946;
var G__35952 = chunk__35925_35947;
var G__35953 = count__35926_35948;
var G__35954 = (i__35927_35949 + (1));
seq__35924_35946 = G__35951;
chunk__35925_35947 = G__35952;
count__35926_35948 = G__35953;
i__35927_35949 = G__35954;
continue;
} else {
var temp__4657__auto___35955 = cljs.core.seq.call(null,seq__35924_35946);
if(temp__4657__auto___35955){
var seq__35924_35956__$1 = temp__4657__auto___35955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35924_35956__$1)){
var c__28890__auto___35957 = cljs.core.chunk_first.call(null,seq__35924_35956__$1);
var G__35958 = cljs.core.chunk_rest.call(null,seq__35924_35956__$1);
var G__35959 = c__28890__auto___35957;
var G__35960 = cljs.core.count.call(null,c__28890__auto___35957);
var G__35961 = (0);
seq__35924_35946 = G__35958;
chunk__35925_35947 = G__35959;
count__35926_35948 = G__35960;
i__35927_35949 = G__35961;
continue;
} else {
var f_35962 = cljs.core.first.call(null,seq__35924_35956__$1);
cljs.core.println.call(null,"  ",f_35962);

var G__35963 = cljs.core.next.call(null,seq__35924_35956__$1);
var G__35964 = null;
var G__35965 = (0);
var G__35966 = (0);
seq__35924_35946 = G__35963;
chunk__35925_35947 = G__35964;
count__35926_35948 = G__35965;
i__35927_35949 = G__35966;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35967 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28051__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35967);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35967)))?cljs.core.second.call(null,arglists_35967):arglists_35967));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35928_35968 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35929_35969 = null;
var count__35930_35970 = (0);
var i__35931_35971 = (0);
while(true){
if((i__35931_35971 < count__35930_35970)){
var vec__35932_35972 = cljs.core._nth.call(null,chunk__35929_35969,i__35931_35971);
var name_35973 = cljs.core.nth.call(null,vec__35932_35972,(0),null);
var map__35935_35974 = cljs.core.nth.call(null,vec__35932_35972,(1),null);
var map__35935_35975__$1 = ((((!((map__35935_35974 == null)))?((((map__35935_35974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35935_35974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35935_35974):map__35935_35974);
var doc_35976 = cljs.core.get.call(null,map__35935_35975__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35977 = cljs.core.get.call(null,map__35935_35975__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35973);

cljs.core.println.call(null," ",arglists_35977);

if(cljs.core.truth_(doc_35976)){
cljs.core.println.call(null," ",doc_35976);
} else {
}

var G__35978 = seq__35928_35968;
var G__35979 = chunk__35929_35969;
var G__35980 = count__35930_35970;
var G__35981 = (i__35931_35971 + (1));
seq__35928_35968 = G__35978;
chunk__35929_35969 = G__35979;
count__35930_35970 = G__35980;
i__35931_35971 = G__35981;
continue;
} else {
var temp__4657__auto___35982 = cljs.core.seq.call(null,seq__35928_35968);
if(temp__4657__auto___35982){
var seq__35928_35983__$1 = temp__4657__auto___35982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35928_35983__$1)){
var c__28890__auto___35984 = cljs.core.chunk_first.call(null,seq__35928_35983__$1);
var G__35985 = cljs.core.chunk_rest.call(null,seq__35928_35983__$1);
var G__35986 = c__28890__auto___35984;
var G__35987 = cljs.core.count.call(null,c__28890__auto___35984);
var G__35988 = (0);
seq__35928_35968 = G__35985;
chunk__35929_35969 = G__35986;
count__35930_35970 = G__35987;
i__35931_35971 = G__35988;
continue;
} else {
var vec__35937_35989 = cljs.core.first.call(null,seq__35928_35983__$1);
var name_35990 = cljs.core.nth.call(null,vec__35937_35989,(0),null);
var map__35940_35991 = cljs.core.nth.call(null,vec__35937_35989,(1),null);
var map__35940_35992__$1 = ((((!((map__35940_35991 == null)))?((((map__35940_35991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35940_35991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35940_35991):map__35940_35991);
var doc_35993 = cljs.core.get.call(null,map__35940_35992__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35994 = cljs.core.get.call(null,map__35940_35992__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35990);

cljs.core.println.call(null," ",arglists_35994);

if(cljs.core.truth_(doc_35993)){
cljs.core.println.call(null," ",doc_35993);
} else {
}

var G__35995 = cljs.core.next.call(null,seq__35928_35983__$1);
var G__35996 = null;
var G__35997 = (0);
var G__35998 = (0);
seq__35928_35968 = G__35995;
chunk__35929_35969 = G__35996;
count__35930_35970 = G__35997;
i__35931_35971 = G__35998;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35942 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35943 = null;
var count__35944 = (0);
var i__35945 = (0);
while(true){
if((i__35945 < count__35944)){
var role = cljs.core._nth.call(null,chunk__35943,i__35945);
var temp__4657__auto___35999__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35999__$1)){
var spec_36000 = temp__4657__auto___35999__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36000));
} else {
}

var G__36001 = seq__35942;
var G__36002 = chunk__35943;
var G__36003 = count__35944;
var G__36004 = (i__35945 + (1));
seq__35942 = G__36001;
chunk__35943 = G__36002;
count__35944 = G__36003;
i__35945 = G__36004;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35942);
if(temp__4657__auto____$1){
var seq__35942__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35942__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__35942__$1);
var G__36005 = cljs.core.chunk_rest.call(null,seq__35942__$1);
var G__36006 = c__28890__auto__;
var G__36007 = cljs.core.count.call(null,c__28890__auto__);
var G__36008 = (0);
seq__35942 = G__36005;
chunk__35943 = G__36006;
count__35944 = G__36007;
i__35945 = G__36008;
continue;
} else {
var role = cljs.core.first.call(null,seq__35942__$1);
var temp__4657__auto___36009__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36009__$2)){
var spec_36010 = temp__4657__auto___36009__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36010));
} else {
}

var G__36011 = cljs.core.next.call(null,seq__35942__$1);
var G__36012 = null;
var G__36013 = (0);
var G__36014 = (0);
seq__35942 = G__36011;
chunk__35943 = G__36012;
count__35944 = G__36013;
i__35945 = G__36014;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1517067021769
