// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28734__auto__ = (((value == null))?null:value);
var m__28735__auto__ = (devtools.format._header[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,value);
} else {
var m__28735__auto____$1 = (devtools.format._header["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28734__auto__ = (((value == null))?null:value);
var m__28735__auto__ = (devtools.format._has_body[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,value);
} else {
var m__28735__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28734__auto__ = (((value == null))?null:value);
var m__28735__auto__ = (devtools.format._body[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,value);
} else {
var m__28735__auto____$1 = (devtools.format._body["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37636 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37636["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37637 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37637["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37638 = temp__4655__auto____$2;
return (o37638["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37639 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37639["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37640 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37640["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37641 = temp__4655__auto____$2;
return (o37641["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37642 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37642["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37643 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37643["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37644 = temp__4655__auto____$2;
return (o37644["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37645 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37645["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37646 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37646["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37647 = temp__4655__auto____$2;
return (o37647["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37648 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37648["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37649 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37649["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37650 = temp__4655__auto____$2;
return (o37650["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37651 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37651["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37652 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37652["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37653 = temp__4655__auto____$2;
return (o37653["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o37654 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37654["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37655 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37655["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37656 = temp__4655__auto____$2;
return (o37656["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37658 = arguments.length;
var i__29223__auto___37659 = (0);
while(true){
if((i__29223__auto___37659 < len__29222__auto___37658)){
args__29229__auto__.push((arguments[i__29223__auto___37659]));

var G__37660 = (i__29223__auto___37659 + (1));
i__29223__auto___37659 = G__37660;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37657){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37657));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37662 = arguments.length;
var i__29223__auto___37663 = (0);
while(true){
if((i__29223__auto___37663 < len__29222__auto___37662)){
args__29229__auto__.push((arguments[i__29223__auto___37663]));

var G__37664 = (i__29223__auto___37663 + (1));
i__29223__auto___37663 = G__37664;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq37661){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37661));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37666 = arguments.length;
var i__29223__auto___37667 = (0);
while(true){
if((i__29223__auto___37667 < len__29222__auto___37666)){
args__29229__auto__.push((arguments[i__29223__auto___37667]));

var G__37668 = (i__29223__auto___37667 + (1));
i__29223__auto___37667 = G__37668;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq37665){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37665));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37670 = arguments.length;
var i__29223__auto___37671 = (0);
while(true){
if((i__29223__auto___37671 < len__29222__auto___37670)){
args__29229__auto__.push((arguments[i__29223__auto___37671]));

var G__37672 = (i__29223__auto___37671 + (1));
i__29223__auto___37671 = G__37672;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37669){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37669));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37674 = arguments.length;
var i__29223__auto___37675 = (0);
while(true){
if((i__29223__auto___37675 < len__29222__auto___37674)){
args__29229__auto__.push((arguments[i__29223__auto___37675]));

var G__37676 = (i__29223__auto___37675 + (1));
i__29223__auto___37675 = G__37676;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq37673){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37673));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37678 = arguments.length;
var i__29223__auto___37679 = (0);
while(true){
if((i__29223__auto___37679 < len__29222__auto___37678)){
args__29229__auto__.push((arguments[i__29223__auto___37679]));

var G__37680 = (i__29223__auto___37679 + (1));
i__29223__auto___37679 = G__37680;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq37677){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37677));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37682 = arguments.length;
var i__29223__auto___37683 = (0);
while(true){
if((i__29223__auto___37683 < len__29222__auto___37682)){
args__29229__auto__.push((arguments[i__29223__auto___37683]));

var G__37684 = (i__29223__auto___37683 + (1));
i__29223__auto___37683 = G__37684;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37681){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37681));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37692 = arguments.length;
var i__29223__auto___37693 = (0);
while(true){
if((i__29223__auto___37693 < len__29222__auto___37692)){
args__29229__auto__.push((arguments[i__29223__auto___37693]));

var G__37694 = (i__29223__auto___37693 + (1));
i__29223__auto___37693 = G__37694;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37688){
var vec__37689 = p__37688;
var state_override = cljs.core.nth.call(null,vec__37689,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37689,state_override){
return (function (p1__37685_SHARP_){
return cljs.core.merge.call(null,p1__37685_SHARP_,state_override);
});})(vec__37689,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37686){
var G__37687 = cljs.core.first.call(null,seq37686);
var seq37686__$1 = cljs.core.next.call(null,seq37686);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37687,seq37686__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37696 = arguments.length;
var i__29223__auto___37697 = (0);
while(true){
if((i__29223__auto___37697 < len__29222__auto___37696)){
args__29229__auto__.push((arguments[i__29223__auto___37697]));

var G__37698 = (i__29223__auto___37697 + (1));
i__29223__auto___37697 = G__37698;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq37695){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37695));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37701 = arguments.length;
var i__29223__auto___37702 = (0);
while(true){
if((i__29223__auto___37702 < len__29222__auto___37701)){
args__29229__auto__.push((arguments[i__29223__auto___37702]));

var G__37703 = (i__29223__auto___37702 + (1));
i__29223__auto___37702 = G__37703;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37699){
var G__37700 = cljs.core.first.call(null,seq37699);
var seq37699__$1 = cljs.core.next.call(null,seq37699);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37700,seq37699__$1);
});


//# sourceMappingURL=format.js.map?rel=1518027923153
