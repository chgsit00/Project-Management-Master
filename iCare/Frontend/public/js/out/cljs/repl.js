// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35920){
var map__35921 = p__35920;
var map__35921__$1 = ((((!((map__35921 == null)))?((((map__35921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35921):map__35921);
var m = map__35921__$1;
var n = cljs.core.get.call(null,map__35921__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35921__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35923_35945 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35924_35946 = null;
var count__35925_35947 = (0);
var i__35926_35948 = (0);
while(true){
if((i__35926_35948 < count__35925_35947)){
var f_35949 = cljs.core._nth.call(null,chunk__35924_35946,i__35926_35948);
cljs.core.println.call(null,"  ",f_35949);

var G__35950 = seq__35923_35945;
var G__35951 = chunk__35924_35946;
var G__35952 = count__35925_35947;
var G__35953 = (i__35926_35948 + (1));
seq__35923_35945 = G__35950;
chunk__35924_35946 = G__35951;
count__35925_35947 = G__35952;
i__35926_35948 = G__35953;
continue;
} else {
var temp__4657__auto___35954 = cljs.core.seq.call(null,seq__35923_35945);
if(temp__4657__auto___35954){
var seq__35923_35955__$1 = temp__4657__auto___35954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35923_35955__$1)){
var c__28890__auto___35956 = cljs.core.chunk_first.call(null,seq__35923_35955__$1);
var G__35957 = cljs.core.chunk_rest.call(null,seq__35923_35955__$1);
var G__35958 = c__28890__auto___35956;
var G__35959 = cljs.core.count.call(null,c__28890__auto___35956);
var G__35960 = (0);
seq__35923_35945 = G__35957;
chunk__35924_35946 = G__35958;
count__35925_35947 = G__35959;
i__35926_35948 = G__35960;
continue;
} else {
var f_35961 = cljs.core.first.call(null,seq__35923_35955__$1);
cljs.core.println.call(null,"  ",f_35961);

var G__35962 = cljs.core.next.call(null,seq__35923_35955__$1);
var G__35963 = null;
var G__35964 = (0);
var G__35965 = (0);
seq__35923_35945 = G__35962;
chunk__35924_35946 = G__35963;
count__35925_35947 = G__35964;
i__35926_35948 = G__35965;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35966 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28051__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35966);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35966)))?cljs.core.second.call(null,arglists_35966):arglists_35966));
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
var seq__35927_35967 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35928_35968 = null;
var count__35929_35969 = (0);
var i__35930_35970 = (0);
while(true){
if((i__35930_35970 < count__35929_35969)){
var vec__35931_35971 = cljs.core._nth.call(null,chunk__35928_35968,i__35930_35970);
var name_35972 = cljs.core.nth.call(null,vec__35931_35971,(0),null);
var map__35934_35973 = cljs.core.nth.call(null,vec__35931_35971,(1),null);
var map__35934_35974__$1 = ((((!((map__35934_35973 == null)))?((((map__35934_35973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35934_35973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35934_35973):map__35934_35973);
var doc_35975 = cljs.core.get.call(null,map__35934_35974__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35976 = cljs.core.get.call(null,map__35934_35974__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35972);

cljs.core.println.call(null," ",arglists_35976);

if(cljs.core.truth_(doc_35975)){
cljs.core.println.call(null," ",doc_35975);
} else {
}

var G__35977 = seq__35927_35967;
var G__35978 = chunk__35928_35968;
var G__35979 = count__35929_35969;
var G__35980 = (i__35930_35970 + (1));
seq__35927_35967 = G__35977;
chunk__35928_35968 = G__35978;
count__35929_35969 = G__35979;
i__35930_35970 = G__35980;
continue;
} else {
var temp__4657__auto___35981 = cljs.core.seq.call(null,seq__35927_35967);
if(temp__4657__auto___35981){
var seq__35927_35982__$1 = temp__4657__auto___35981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35927_35982__$1)){
var c__28890__auto___35983 = cljs.core.chunk_first.call(null,seq__35927_35982__$1);
var G__35984 = cljs.core.chunk_rest.call(null,seq__35927_35982__$1);
var G__35985 = c__28890__auto___35983;
var G__35986 = cljs.core.count.call(null,c__28890__auto___35983);
var G__35987 = (0);
seq__35927_35967 = G__35984;
chunk__35928_35968 = G__35985;
count__35929_35969 = G__35986;
i__35930_35970 = G__35987;
continue;
} else {
var vec__35936_35988 = cljs.core.first.call(null,seq__35927_35982__$1);
var name_35989 = cljs.core.nth.call(null,vec__35936_35988,(0),null);
var map__35939_35990 = cljs.core.nth.call(null,vec__35936_35988,(1),null);
var map__35939_35991__$1 = ((((!((map__35939_35990 == null)))?((((map__35939_35990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35939_35990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35939_35990):map__35939_35990);
var doc_35992 = cljs.core.get.call(null,map__35939_35991__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35993 = cljs.core.get.call(null,map__35939_35991__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35989);

cljs.core.println.call(null," ",arglists_35993);

if(cljs.core.truth_(doc_35992)){
cljs.core.println.call(null," ",doc_35992);
} else {
}

var G__35994 = cljs.core.next.call(null,seq__35927_35982__$1);
var G__35995 = null;
var G__35996 = (0);
var G__35997 = (0);
seq__35927_35967 = G__35994;
chunk__35928_35968 = G__35995;
count__35929_35969 = G__35996;
i__35930_35970 = G__35997;
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

var seq__35941 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35942 = null;
var count__35943 = (0);
var i__35944 = (0);
while(true){
if((i__35944 < count__35943)){
var role = cljs.core._nth.call(null,chunk__35942,i__35944);
var temp__4657__auto___35998__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35998__$1)){
var spec_35999 = temp__4657__auto___35998__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35999));
} else {
}

var G__36000 = seq__35941;
var G__36001 = chunk__35942;
var G__36002 = count__35943;
var G__36003 = (i__35944 + (1));
seq__35941 = G__36000;
chunk__35942 = G__36001;
count__35943 = G__36002;
i__35944 = G__36003;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35941);
if(temp__4657__auto____$1){
var seq__35941__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35941__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__35941__$1);
var G__36004 = cljs.core.chunk_rest.call(null,seq__35941__$1);
var G__36005 = c__28890__auto__;
var G__36006 = cljs.core.count.call(null,c__28890__auto__);
var G__36007 = (0);
seq__35941 = G__36004;
chunk__35942 = G__36005;
count__35943 = G__36006;
i__35944 = G__36007;
continue;
} else {
var role = cljs.core.first.call(null,seq__35941__$1);
var temp__4657__auto___36008__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36008__$2)){
var spec_36009 = temp__4657__auto___36008__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36009));
} else {
}

var G__36010 = cljs.core.next.call(null,seq__35941__$1);
var G__36011 = null;
var G__36012 = (0);
var G__36013 = (0);
seq__35941 = G__36010;
chunk__35942 = G__36011;
count__35943 = G__36012;
i__35944 = G__36013;
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

//# sourceMappingURL=repl.js.map?rel=1518027913776
