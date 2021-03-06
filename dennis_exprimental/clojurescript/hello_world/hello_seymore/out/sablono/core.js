// Compiled by ClojureScript 1.9.908 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__33988__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__33985 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__33986 = cljs.core.seq.call(null,vec__33985);
var first__33987 = cljs.core.first.call(null,seq__33986);
var seq__33986__$1 = cljs.core.next.call(null,seq__33986);
var tag = first__33987;
var body = seq__33986__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__33988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33989__i = 0, G__33989__a = new Array(arguments.length -  0);
while (G__33989__i < G__33989__a.length) {G__33989__a[G__33989__i] = arguments[G__33989__i + 0]; ++G__33989__i;}
  args = new cljs.core.IndexedSeq(G__33989__a,0,null);
} 
return G__33988__delegate.call(this,args);};
G__33988.cljs$lang$maxFixedArity = 0;
G__33988.cljs$lang$applyTo = (function (arglist__33990){
var args = cljs.core.seq(arglist__33990);
return G__33988__delegate(args);
});
G__33988.cljs$core$IFn$_invoke$arity$variadic = G__33988__delegate;
return G__33988;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__28797__auto__ = (function sablono$core$update_arglists_$_iter__33991(s__33992){
return (new cljs.core.LazySeq(null,(function (){
var s__33992__$1 = s__33992;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33992__$1);
if(temp__4657__auto__){
var s__33992__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33992__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__33992__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__33994 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__33993 = (0);
while(true){
if((i__33993 < size__28796__auto__)){
var args = cljs.core._nth.call(null,c__28795__auto__,i__33993);
cljs.core.chunk_append.call(null,b__33994,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__33995 = (i__33993 + (1));
i__33993 = G__33995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33994),sablono$core$update_arglists_$_iter__33991.call(null,cljs.core.chunk_rest.call(null,s__33992__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33994),null);
}
} else {
var args = cljs.core.first.call(null,s__33992__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__33991.call(null,cljs.core.rest.call(null,s__33992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__29165__auto__ = [];
var len__29158__auto___34001 = arguments.length;
var i__29159__auto___34002 = (0);
while(true){
if((i__29159__auto___34002 < len__29158__auto___34001)){
args__29165__auto__.push((arguments[i__29159__auto___34002]));

var G__34003 = (i__29159__auto___34002 + (1));
i__29159__auto___34002 = G__34003;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__28797__auto__ = (function sablono$core$iter__33997(s__33998){
return (new cljs.core.LazySeq(null,(function (){
var s__33998__$1 = s__33998;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33998__$1);
if(temp__4657__auto__){
var s__33998__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33998__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__33998__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__34000 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__33999 = (0);
while(true){
if((i__33999 < size__28796__auto__)){
var style = cljs.core._nth.call(null,c__28795__auto__,i__33999);
cljs.core.chunk_append.call(null,b__34000,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__34004 = (i__33999 + (1));
i__33999 = G__34004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34000),sablono$core$iter__33997.call(null,cljs.core.chunk_rest.call(null,s__33998__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34000),null);
}
} else {
var style = cljs.core.first.call(null,s__33998__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__33997.call(null,cljs.core.rest.call(null,s__33998__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq33996){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33996));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to34005 = (function sablono$core$link_to34005(var_args){
var args__29165__auto__ = [];
var len__29158__auto___34008 = arguments.length;
var i__29159__auto___34009 = (0);
while(true){
if((i__29159__auto___34009 < len__29158__auto___34008)){
args__29165__auto__.push((arguments[i__29159__auto___34009]));

var G__34010 = (i__29159__auto___34009 + (1));
i__29159__auto___34009 = G__34010;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to34005.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

sablono.core.link_to34005.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to34005.cljs$lang$maxFixedArity = (1);

sablono.core.link_to34005.cljs$lang$applyTo = (function (seq34006){
var G__34007 = cljs.core.first.call(null,seq34006);
var seq34006__$1 = cljs.core.next.call(null,seq34006);
return sablono.core.link_to34005.cljs$core$IFn$_invoke$arity$variadic(G__34007,seq34006__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34005);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to34011 = (function sablono$core$mail_to34011(var_args){
var args__29165__auto__ = [];
var len__29158__auto___34018 = arguments.length;
var i__29159__auto___34019 = (0);
while(true){
if((i__29159__auto___34019 < len__29158__auto___34018)){
args__29165__auto__.push((arguments[i__29159__auto___34019]));

var G__34020 = (i__29159__auto___34019 + (1));
i__29159__auto___34019 = G__34020;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to34011.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

sablono.core.mail_to34011.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__34014){
var vec__34015 = p__34014;
var content = cljs.core.nth.call(null,vec__34015,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__27989__auto__ = content;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to34011.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to34011.cljs$lang$applyTo = (function (seq34012){
var G__34013 = cljs.core.first.call(null,seq34012);
var seq34012__$1 = cljs.core.next.call(null,seq34012);
return sablono.core.mail_to34011.cljs$core$IFn$_invoke$arity$variadic(G__34013,seq34012__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34011);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list34021 = (function sablono$core$unordered_list34021(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__28797__auto__ = (function sablono$core$unordered_list34021_$_iter__34022(s__34023){
return (new cljs.core.LazySeq(null,(function (){
var s__34023__$1 = s__34023;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34023__$1);
if(temp__4657__auto__){
var s__34023__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34023__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__34023__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__34025 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__34024 = (0);
while(true){
if((i__34024 < size__28796__auto__)){
var x = cljs.core._nth.call(null,c__28795__auto__,i__34024);
cljs.core.chunk_append.call(null,b__34025,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34026 = (i__34024 + (1));
i__34024 = G__34026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34025),sablono$core$unordered_list34021_$_iter__34022.call(null,cljs.core.chunk_rest.call(null,s__34023__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34025),null);
}
} else {
var x = cljs.core.first.call(null,s__34023__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list34021_$_iter__34022.call(null,cljs.core.rest.call(null,s__34023__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34021);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list34027 = (function sablono$core$ordered_list34027(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__28797__auto__ = (function sablono$core$ordered_list34027_$_iter__34028(s__34029){
return (new cljs.core.LazySeq(null,(function (){
var s__34029__$1 = s__34029;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34029__$1);
if(temp__4657__auto__){
var s__34029__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34029__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__34029__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__34031 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__34030 = (0);
while(true){
if((i__34030 < size__28796__auto__)){
var x = cljs.core._nth.call(null,c__28795__auto__,i__34030);
cljs.core.chunk_append.call(null,b__34031,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34032 = (i__34030 + (1));
i__34030 = G__34032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34031),sablono$core$ordered_list34027_$_iter__34028.call(null,cljs.core.chunk_rest.call(null,s__34029__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34031),null);
}
} else {
var x = cljs.core.first.call(null,s__34029__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list34027_$_iter__34028.call(null,cljs.core.rest.call(null,s__34029__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34027);
/**
 * Create an image element.
 */
sablono.core.image34033 = (function sablono$core$image34033(var_args){
var G__34035 = arguments.length;
switch (G__34035) {
case 1:
return sablono.core.image34033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image34033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image34033.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image34033.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image34033.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34033);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__34037_SHARP_,p2__34038_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34037_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34038_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__34039_SHARP_,p2__34040_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34039_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34040_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27989__auto__ = value;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field34041 = (function sablono$core$color_field34041(var_args){
var G__34043 = arguments.length;
switch (G__34043) {
case 1:
return sablono.core.color_field34041.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field34041.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field34041.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.color_field34041.call(null,name__33975__auto__,null);
});

sablono.core.color_field34041.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.color_field34041.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field34041);

/**
 * Creates a date input field.
 */
sablono.core.date_field34044 = (function sablono$core$date_field34044(var_args){
var G__34046 = arguments.length;
switch (G__34046) {
case 1:
return sablono.core.date_field34044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field34044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field34044.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.date_field34044.call(null,name__33975__auto__,null);
});

sablono.core.date_field34044.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.date_field34044.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field34044);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field34047 = (function sablono$core$datetime_field34047(var_args){
var G__34049 = arguments.length;
switch (G__34049) {
case 1:
return sablono.core.datetime_field34047.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field34047.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field34047.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.datetime_field34047.call(null,name__33975__auto__,null);
});

sablono.core.datetime_field34047.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.datetime_field34047.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field34047);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field34050 = (function sablono$core$datetime_local_field34050(var_args){
var G__34052 = arguments.length;
switch (G__34052) {
case 1:
return sablono.core.datetime_local_field34050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field34050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field34050.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.datetime_local_field34050.call(null,name__33975__auto__,null);
});

sablono.core.datetime_local_field34050.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.datetime_local_field34050.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field34050);

/**
 * Creates a email input field.
 */
sablono.core.email_field34053 = (function sablono$core$email_field34053(var_args){
var G__34055 = arguments.length;
switch (G__34055) {
case 1:
return sablono.core.email_field34053.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field34053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field34053.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.email_field34053.call(null,name__33975__auto__,null);
});

sablono.core.email_field34053.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.email_field34053.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34053);

/**
 * Creates a file input field.
 */
sablono.core.file_field34056 = (function sablono$core$file_field34056(var_args){
var G__34058 = arguments.length;
switch (G__34058) {
case 1:
return sablono.core.file_field34056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field34056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field34056.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.file_field34056.call(null,name__33975__auto__,null);
});

sablono.core.file_field34056.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.file_field34056.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field34056);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field34059 = (function sablono$core$hidden_field34059(var_args){
var G__34061 = arguments.length;
switch (G__34061) {
case 1:
return sablono.core.hidden_field34059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field34059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field34059.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.hidden_field34059.call(null,name__33975__auto__,null);
});

sablono.core.hidden_field34059.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.hidden_field34059.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34059);

/**
 * Creates a month input field.
 */
sablono.core.month_field34062 = (function sablono$core$month_field34062(var_args){
var G__34064 = arguments.length;
switch (G__34064) {
case 1:
return sablono.core.month_field34062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field34062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field34062.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.month_field34062.call(null,name__33975__auto__,null);
});

sablono.core.month_field34062.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.month_field34062.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field34062);

/**
 * Creates a number input field.
 */
sablono.core.number_field34065 = (function sablono$core$number_field34065(var_args){
var G__34067 = arguments.length;
switch (G__34067) {
case 1:
return sablono.core.number_field34065.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field34065.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field34065.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.number_field34065.call(null,name__33975__auto__,null);
});

sablono.core.number_field34065.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.number_field34065.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field34065);

/**
 * Creates a password input field.
 */
sablono.core.password_field34068 = (function sablono$core$password_field34068(var_args){
var G__34070 = arguments.length;
switch (G__34070) {
case 1:
return sablono.core.password_field34068.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field34068.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field34068.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.password_field34068.call(null,name__33975__auto__,null);
});

sablono.core.password_field34068.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.password_field34068.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34068);

/**
 * Creates a range input field.
 */
sablono.core.range_field34071 = (function sablono$core$range_field34071(var_args){
var G__34073 = arguments.length;
switch (G__34073) {
case 1:
return sablono.core.range_field34071.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field34071.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field34071.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.range_field34071.call(null,name__33975__auto__,null);
});

sablono.core.range_field34071.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.range_field34071.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field34071);

/**
 * Creates a search input field.
 */
sablono.core.search_field34074 = (function sablono$core$search_field34074(var_args){
var G__34076 = arguments.length;
switch (G__34076) {
case 1:
return sablono.core.search_field34074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field34074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field34074.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.search_field34074.call(null,name__33975__auto__,null);
});

sablono.core.search_field34074.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.search_field34074.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field34074);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field34077 = (function sablono$core$tel_field34077(var_args){
var G__34079 = arguments.length;
switch (G__34079) {
case 1:
return sablono.core.tel_field34077.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field34077.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field34077.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.tel_field34077.call(null,name__33975__auto__,null);
});

sablono.core.tel_field34077.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.tel_field34077.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field34077);

/**
 * Creates a text input field.
 */
sablono.core.text_field34080 = (function sablono$core$text_field34080(var_args){
var G__34082 = arguments.length;
switch (G__34082) {
case 1:
return sablono.core.text_field34080.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field34080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field34080.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.text_field34080.call(null,name__33975__auto__,null);
});

sablono.core.text_field34080.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.text_field34080.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34080);

/**
 * Creates a time input field.
 */
sablono.core.time_field34083 = (function sablono$core$time_field34083(var_args){
var G__34085 = arguments.length;
switch (G__34085) {
case 1:
return sablono.core.time_field34083.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field34083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field34083.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.time_field34083.call(null,name__33975__auto__,null);
});

sablono.core.time_field34083.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.time_field34083.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field34083);

/**
 * Creates a url input field.
 */
sablono.core.url_field34086 = (function sablono$core$url_field34086(var_args){
var G__34088 = arguments.length;
switch (G__34088) {
case 1:
return sablono.core.url_field34086.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field34086.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field34086.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.url_field34086.call(null,name__33975__auto__,null);
});

sablono.core.url_field34086.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.url_field34086.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field34086);

/**
 * Creates a week input field.
 */
sablono.core.week_field34089 = (function sablono$core$week_field34089(var_args){
var G__34091 = arguments.length;
switch (G__34091) {
case 1:
return sablono.core.week_field34089.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field34089.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field34089.cljs$core$IFn$_invoke$arity$1 = (function (name__33975__auto__){
return sablono.core.week_field34089.call(null,name__33975__auto__,null);
});

sablono.core.week_field34089.cljs$core$IFn$_invoke$arity$2 = (function (name__33975__auto__,value__33976__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__33975__auto__,value__33976__auto__);
});

sablono.core.week_field34089.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field34089);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box34109 = (function sablono$core$check_box34109(var_args){
var G__34111 = arguments.length;
switch (G__34111) {
case 1:
return sablono.core.check_box34109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box34109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box34109.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box34109.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box34109.call(null,name,null);
});

sablono.core.check_box34109.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box34109.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box34109.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27989__auto__ = value;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box34109.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34109);
/**
 * Creates a radio button.
 */
sablono.core.radio_button34113 = (function sablono$core$radio_button34113(var_args){
var G__34115 = arguments.length;
switch (G__34115) {
case 1:
return sablono.core.radio_button34113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button34113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button34113.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button34113.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button34113.call(null,group,null);
});

sablono.core.radio_button34113.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button34113.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button34113.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27989__auto__ = value;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button34113.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34113);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options34117 = (function sablono$core$select_options34117(coll){
var iter__28797__auto__ = (function sablono$core$select_options34117_$_iter__34118(s__34119){
return (new cljs.core.LazySeq(null,(function (){
var s__34119__$1 = s__34119;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34119__$1);
if(temp__4657__auto__){
var s__34119__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34119__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__34119__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__34121 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__34120 = (0);
while(true){
if((i__34120 < size__28796__auto__)){
var x = cljs.core._nth.call(null,c__28795__auto__,i__34120);
cljs.core.chunk_append.call(null,b__34121,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34122 = x;
var text = cljs.core.nth.call(null,vec__34122,(0),null);
var val = cljs.core.nth.call(null,vec__34122,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34122,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options34117.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__34128 = (i__34120 + (1));
i__34120 = G__34128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34121),sablono$core$select_options34117_$_iter__34118.call(null,cljs.core.chunk_rest.call(null,s__34119__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34121),null);
}
} else {
var x = cljs.core.first.call(null,s__34119__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34125 = x;
var text = cljs.core.nth.call(null,vec__34125,(0),null);
var val = cljs.core.nth.call(null,vec__34125,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34125,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options34117.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options34117_$_iter__34118.call(null,cljs.core.rest.call(null,s__34119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34117);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down34129 = (function sablono$core$drop_down34129(var_args){
var G__34131 = arguments.length;
switch (G__34131) {
case 2:
return sablono.core.drop_down34129.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down34129.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down34129.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down34129.call(null,name,options,null);
});

sablono.core.drop_down34129.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down34129.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34129);
/**
 * Creates a text area element.
 */
sablono.core.text_area34133 = (function sablono$core$text_area34133(var_args){
var G__34135 = arguments.length;
switch (G__34135) {
case 1:
return sablono.core.text_area34133.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area34133.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area34133.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area34133.call(null,name,null);
});

sablono.core.text_area34133.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27989__auto__ = value;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area34133.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34133);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label34137 = (function sablono$core$label34137(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34137);
/**
 * Creates a submit button.
 */
sablono.core.submit_button34138 = (function sablono$core$submit_button34138(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34138);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button34139 = (function sablono$core$reset_button34139(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34139);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to34140 = (function sablono$core$form_to34140(var_args){
var args__29165__auto__ = [];
var len__29158__auto___34147 = arguments.length;
var i__29159__auto___34148 = (0);
while(true){
if((i__29159__auto___34148 < len__29158__auto___34147)){
args__29165__auto__.push((arguments[i__29159__auto___34148]));

var G__34149 = (i__29159__auto___34148 + (1));
i__29159__auto___34148 = G__34149;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to34140.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

sablono.core.form_to34140.cljs$core$IFn$_invoke$arity$variadic = (function (p__34143,body){
var vec__34144 = p__34143;
var method = cljs.core.nth.call(null,vec__34144,(0),null);
var action = cljs.core.nth.call(null,vec__34144,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to34140.cljs$lang$maxFixedArity = (1);

sablono.core.form_to34140.cljs$lang$applyTo = (function (seq34141){
var G__34142 = cljs.core.first.call(null,seq34141);
var seq34141__$1 = cljs.core.next.call(null,seq34141);
return sablono.core.form_to34140.cljs$core$IFn$_invoke$arity$variadic(G__34142,seq34141__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34140);

//# sourceMappingURL=core.js.map?rel=1517063737200
