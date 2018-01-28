// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36773){
var map__36774 = p__36773;
var map__36774__$1 = ((((!((map__36774 == null)))?((((map__36774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36774):map__36774);
var m = map__36774__$1;
var n = cljs.core.get.call(null,map__36774__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36774__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36776_36798 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36777_36799 = null;
var count__36778_36800 = (0);
var i__36779_36801 = (0);
while(true){
if((i__36779_36801 < count__36778_36800)){
var f_36802 = cljs.core._nth.call(null,chunk__36777_36799,i__36779_36801);
cljs.core.println.call(null,"  ",f_36802);

var G__36803 = seq__36776_36798;
var G__36804 = chunk__36777_36799;
var G__36805 = count__36778_36800;
var G__36806 = (i__36779_36801 + (1));
seq__36776_36798 = G__36803;
chunk__36777_36799 = G__36804;
count__36778_36800 = G__36805;
i__36779_36801 = G__36806;
continue;
} else {
var temp__4657__auto___36807 = cljs.core.seq.call(null,seq__36776_36798);
if(temp__4657__auto___36807){
var seq__36776_36808__$1 = temp__4657__auto___36807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36776_36808__$1)){
var c__28828__auto___36809 = cljs.core.chunk_first.call(null,seq__36776_36808__$1);
var G__36810 = cljs.core.chunk_rest.call(null,seq__36776_36808__$1);
var G__36811 = c__28828__auto___36809;
var G__36812 = cljs.core.count.call(null,c__28828__auto___36809);
var G__36813 = (0);
seq__36776_36798 = G__36810;
chunk__36777_36799 = G__36811;
count__36778_36800 = G__36812;
i__36779_36801 = G__36813;
continue;
} else {
var f_36814 = cljs.core.first.call(null,seq__36776_36808__$1);
cljs.core.println.call(null,"  ",f_36814);

var G__36815 = cljs.core.next.call(null,seq__36776_36808__$1);
var G__36816 = null;
var G__36817 = (0);
var G__36818 = (0);
seq__36776_36798 = G__36815;
chunk__36777_36799 = G__36816;
count__36778_36800 = G__36817;
i__36779_36801 = G__36818;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36819 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36819);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36819)))?cljs.core.second.call(null,arglists_36819):arglists_36819));
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
var seq__36780_36820 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36781_36821 = null;
var count__36782_36822 = (0);
var i__36783_36823 = (0);
while(true){
if((i__36783_36823 < count__36782_36822)){
var vec__36784_36824 = cljs.core._nth.call(null,chunk__36781_36821,i__36783_36823);
var name_36825 = cljs.core.nth.call(null,vec__36784_36824,(0),null);
var map__36787_36826 = cljs.core.nth.call(null,vec__36784_36824,(1),null);
var map__36787_36827__$1 = ((((!((map__36787_36826 == null)))?((((map__36787_36826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36787_36826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36787_36826):map__36787_36826);
var doc_36828 = cljs.core.get.call(null,map__36787_36827__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36829 = cljs.core.get.call(null,map__36787_36827__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36825);

cljs.core.println.call(null," ",arglists_36829);

if(cljs.core.truth_(doc_36828)){
cljs.core.println.call(null," ",doc_36828);
} else {
}

var G__36830 = seq__36780_36820;
var G__36831 = chunk__36781_36821;
var G__36832 = count__36782_36822;
var G__36833 = (i__36783_36823 + (1));
seq__36780_36820 = G__36830;
chunk__36781_36821 = G__36831;
count__36782_36822 = G__36832;
i__36783_36823 = G__36833;
continue;
} else {
var temp__4657__auto___36834 = cljs.core.seq.call(null,seq__36780_36820);
if(temp__4657__auto___36834){
var seq__36780_36835__$1 = temp__4657__auto___36834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36780_36835__$1)){
var c__28828__auto___36836 = cljs.core.chunk_first.call(null,seq__36780_36835__$1);
var G__36837 = cljs.core.chunk_rest.call(null,seq__36780_36835__$1);
var G__36838 = c__28828__auto___36836;
var G__36839 = cljs.core.count.call(null,c__28828__auto___36836);
var G__36840 = (0);
seq__36780_36820 = G__36837;
chunk__36781_36821 = G__36838;
count__36782_36822 = G__36839;
i__36783_36823 = G__36840;
continue;
} else {
var vec__36789_36841 = cljs.core.first.call(null,seq__36780_36835__$1);
var name_36842 = cljs.core.nth.call(null,vec__36789_36841,(0),null);
var map__36792_36843 = cljs.core.nth.call(null,vec__36789_36841,(1),null);
var map__36792_36844__$1 = ((((!((map__36792_36843 == null)))?((((map__36792_36843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36792_36843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36792_36843):map__36792_36843);
var doc_36845 = cljs.core.get.call(null,map__36792_36844__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36846 = cljs.core.get.call(null,map__36792_36844__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36842);

cljs.core.println.call(null," ",arglists_36846);

if(cljs.core.truth_(doc_36845)){
cljs.core.println.call(null," ",doc_36845);
} else {
}

var G__36847 = cljs.core.next.call(null,seq__36780_36835__$1);
var G__36848 = null;
var G__36849 = (0);
var G__36850 = (0);
seq__36780_36820 = G__36847;
chunk__36781_36821 = G__36848;
count__36782_36822 = G__36849;
i__36783_36823 = G__36850;
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

var seq__36794 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36795 = null;
var count__36796 = (0);
var i__36797 = (0);
while(true){
if((i__36797 < count__36796)){
var role = cljs.core._nth.call(null,chunk__36795,i__36797);
var temp__4657__auto___36851__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36851__$1)){
var spec_36852 = temp__4657__auto___36851__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36852));
} else {
}

var G__36853 = seq__36794;
var G__36854 = chunk__36795;
var G__36855 = count__36796;
var G__36856 = (i__36797 + (1));
seq__36794 = G__36853;
chunk__36795 = G__36854;
count__36796 = G__36855;
i__36797 = G__36856;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36794);
if(temp__4657__auto____$1){
var seq__36794__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36794__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__36794__$1);
var G__36857 = cljs.core.chunk_rest.call(null,seq__36794__$1);
var G__36858 = c__28828__auto__;
var G__36859 = cljs.core.count.call(null,c__28828__auto__);
var G__36860 = (0);
seq__36794 = G__36857;
chunk__36795 = G__36858;
count__36796 = G__36859;
i__36797 = G__36860;
continue;
} else {
var role = cljs.core.first.call(null,seq__36794__$1);
var temp__4657__auto___36861__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36861__$2)){
var spec_36862 = temp__4657__auto___36861__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36862));
} else {
}

var G__36863 = cljs.core.next.call(null,seq__36794__$1);
var G__36864 = null;
var G__36865 = (0);
var G__36866 = (0);
seq__36794 = G__36863;
chunk__36795 = G__36864;
count__36796 = G__36865;
i__36797 = G__36866;
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

//# sourceMappingURL=repl.js.map?rel=1517063744125
