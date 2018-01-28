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
var o37496 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37496["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37497 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37497["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37498 = temp__4655__auto____$2;
return (o37498["make_template"]);
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
var o37499 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37499["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37500 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37500["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37501 = temp__4655__auto____$2;
return (o37501["make_group"]);
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
var o37502 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37502["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37503 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37503["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37504 = temp__4655__auto____$2;
return (o37504["make_reference"]);
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
var o37505 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37505["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37506 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37506["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37507 = temp__4655__auto____$2;
return (o37507["make_surrogate"]);
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
var o37508 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37508["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37509 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37509["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37510 = temp__4655__auto____$2;
return (o37510["render_markup"]);
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
var o37511 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37511["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37512 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37512["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37513 = temp__4655__auto____$2;
return (o37513["_LT_header_GT_"]);
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
var o37514 = temp__4655__auto__;
var temp__4655__auto____$1 = (o37514["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o37515 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o37515["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o37516 = temp__4655__auto____$2;
return (o37516["_LT_standard_body_GT_"]);
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
var len__29222__auto___37518 = arguments.length;
var i__29223__auto___37519 = (0);
while(true){
if((i__29223__auto___37519 < len__29222__auto___37518)){
args__29229__auto__.push((arguments[i__29223__auto___37519]));

var G__37520 = (i__29223__auto___37519 + (1));
i__29223__auto___37519 = G__37520;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37517){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37517));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37522 = arguments.length;
var i__29223__auto___37523 = (0);
while(true){
if((i__29223__auto___37523 < len__29222__auto___37522)){
args__29229__auto__.push((arguments[i__29223__auto___37523]));

var G__37524 = (i__29223__auto___37523 + (1));
i__29223__auto___37523 = G__37524;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq37521){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37521));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37526 = arguments.length;
var i__29223__auto___37527 = (0);
while(true){
if((i__29223__auto___37527 < len__29222__auto___37526)){
args__29229__auto__.push((arguments[i__29223__auto___37527]));

var G__37528 = (i__29223__auto___37527 + (1));
i__29223__auto___37527 = G__37528;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq37525){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37525));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37530 = arguments.length;
var i__29223__auto___37531 = (0);
while(true){
if((i__29223__auto___37531 < len__29222__auto___37530)){
args__29229__auto__.push((arguments[i__29223__auto___37531]));

var G__37532 = (i__29223__auto___37531 + (1));
i__29223__auto___37531 = G__37532;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37529){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37529));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37534 = arguments.length;
var i__29223__auto___37535 = (0);
while(true){
if((i__29223__auto___37535 < len__29222__auto___37534)){
args__29229__auto__.push((arguments[i__29223__auto___37535]));

var G__37536 = (i__29223__auto___37535 + (1));
i__29223__auto___37535 = G__37536;
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

devtools.format.template.cljs$lang$applyTo = (function (seq37533){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37533));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37538 = arguments.length;
var i__29223__auto___37539 = (0);
while(true){
if((i__29223__auto___37539 < len__29222__auto___37538)){
args__29229__auto__.push((arguments[i__29223__auto___37539]));

var G__37540 = (i__29223__auto___37539 + (1));
i__29223__auto___37539 = G__37540;
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

devtools.format.group.cljs$lang$applyTo = (function (seq37537){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37537));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37542 = arguments.length;
var i__29223__auto___37543 = (0);
while(true){
if((i__29223__auto___37543 < len__29222__auto___37542)){
args__29229__auto__.push((arguments[i__29223__auto___37543]));

var G__37544 = (i__29223__auto___37543 + (1));
i__29223__auto___37543 = G__37544;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37541){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37541));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37552 = arguments.length;
var i__29223__auto___37553 = (0);
while(true){
if((i__29223__auto___37553 < len__29222__auto___37552)){
args__29229__auto__.push((arguments[i__29223__auto___37553]));

var G__37554 = (i__29223__auto___37553 + (1));
i__29223__auto___37553 = G__37554;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37548){
var vec__37549 = p__37548;
var state_override = cljs.core.nth.call(null,vec__37549,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37549,state_override){
return (function (p1__37545_SHARP_){
return cljs.core.merge.call(null,p1__37545_SHARP_,state_override);
});})(vec__37549,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37546){
var G__37547 = cljs.core.first.call(null,seq37546);
var seq37546__$1 = cljs.core.next.call(null,seq37546);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37547,seq37546__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37556 = arguments.length;
var i__29223__auto___37557 = (0);
while(true){
if((i__29223__auto___37557 < len__29222__auto___37556)){
args__29229__auto__.push((arguments[i__29223__auto___37557]));

var G__37558 = (i__29223__auto___37557 + (1));
i__29223__auto___37557 = G__37558;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq37555){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37555));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29229__auto__ = [];
var len__29222__auto___37561 = arguments.length;
var i__29223__auto___37562 = (0);
while(true){
if((i__29223__auto___37562 < len__29222__auto___37561)){
args__29229__auto__.push((arguments[i__29223__auto___37562]));

var G__37563 = (i__29223__auto___37562 + (1));
i__29223__auto___37562 = G__37563;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37559){
var G__37560 = cljs.core.first.call(null,seq37559);
var seq37559__$1 = cljs.core.next.call(null,seq37559);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37560,seq37559__$1);
});


//# sourceMappingURL=format.js.map?rel=1517067024816
