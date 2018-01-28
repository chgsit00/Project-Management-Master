// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x38572_38573 = value;
x38572_38573.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x38575_38576 = value;
x38575_38576.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x38578_38579 = value;
x38578_38579.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__28039__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__28039__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__29229__auto__ = [];
var len__29222__auto___38586 = arguments.length;
var i__29223__auto___38587 = (0);
while(true){
if((i__29223__auto___38587 < len__29222__auto___38586)){
args__29229__auto__.push((arguments[i__29223__auto___38587]));

var G__38588 = (i__29223__auto___38587 + (1));
i__29223__auto___38587 = G__38588;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__38582_38589 = cljs.core.seq.call(null,items);
var chunk__38583_38590 = null;
var count__38584_38591 = (0);
var i__38585_38592 = (0);
while(true){
if((i__38585_38592 < count__38584_38591)){
var item_38593 = cljs.core._nth.call(null,chunk__38583_38590,i__38585_38592);
if(!((item_38593 == null))){
if(cljs.core.coll_QMARK_.call(null,item_38593)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38593)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38593));
}
} else {
}

var G__38594 = seq__38582_38589;
var G__38595 = chunk__38583_38590;
var G__38596 = count__38584_38591;
var G__38597 = (i__38585_38592 + (1));
seq__38582_38589 = G__38594;
chunk__38583_38590 = G__38595;
count__38584_38591 = G__38596;
i__38585_38592 = G__38597;
continue;
} else {
var temp__4657__auto___38598 = cljs.core.seq.call(null,seq__38582_38589);
if(temp__4657__auto___38598){
var seq__38582_38599__$1 = temp__4657__auto___38598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38582_38599__$1)){
var c__28890__auto___38600 = cljs.core.chunk_first.call(null,seq__38582_38599__$1);
var G__38601 = cljs.core.chunk_rest.call(null,seq__38582_38599__$1);
var G__38602 = c__28890__auto___38600;
var G__38603 = cljs.core.count.call(null,c__28890__auto___38600);
var G__38604 = (0);
seq__38582_38589 = G__38601;
chunk__38583_38590 = G__38602;
count__38584_38591 = G__38603;
i__38585_38592 = G__38604;
continue;
} else {
var item_38605 = cljs.core.first.call(null,seq__38582_38599__$1);
if(!((item_38605 == null))){
if(cljs.core.coll_QMARK_.call(null,item_38605)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38605)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38605));
}
} else {
}

var G__38606 = cljs.core.next.call(null,seq__38582_38599__$1);
var G__38607 = null;
var G__38608 = (0);
var G__38609 = (0);
seq__38582_38589 = G__38606;
chunk__38583_38590 = G__38607;
count__38584_38591 = G__38608;
i__38585_38592 = G__38609;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq38581){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38581));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__29229__auto__ = [];
var len__29222__auto___38617 = arguments.length;
var i__29223__auto___38618 = (0);
while(true){
if((i__29223__auto___38618 < len__29222__auto___38617)){
args__29229__auto__.push((arguments[i__29223__auto___38618]));

var G__38619 = (i__29223__auto___38618 + (1));
i__29223__auto___38618 = G__38619;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((2) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29230__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__38613_38620 = cljs.core.seq.call(null,children);
var chunk__38614_38621 = null;
var count__38615_38622 = (0);
var i__38616_38623 = (0);
while(true){
if((i__38616_38623 < count__38615_38622)){
var child_38624 = cljs.core._nth.call(null,chunk__38614_38621,i__38616_38623);
if(!((child_38624 == null))){
if(cljs.core.coll_QMARK_.call(null,child_38624)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38624))));
} else {
var temp__4655__auto___38625 = devtools.formatters.helpers.pref.call(null,child_38624);
if(cljs.core.truth_(temp__4655__auto___38625)){
var child_value_38626 = temp__4655__auto___38625;
template.push(child_value_38626);
} else {
}
}
} else {
}

var G__38627 = seq__38613_38620;
var G__38628 = chunk__38614_38621;
var G__38629 = count__38615_38622;
var G__38630 = (i__38616_38623 + (1));
seq__38613_38620 = G__38627;
chunk__38614_38621 = G__38628;
count__38615_38622 = G__38629;
i__38616_38623 = G__38630;
continue;
} else {
var temp__4657__auto___38631 = cljs.core.seq.call(null,seq__38613_38620);
if(temp__4657__auto___38631){
var seq__38613_38632__$1 = temp__4657__auto___38631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38613_38632__$1)){
var c__28890__auto___38633 = cljs.core.chunk_first.call(null,seq__38613_38632__$1);
var G__38634 = cljs.core.chunk_rest.call(null,seq__38613_38632__$1);
var G__38635 = c__28890__auto___38633;
var G__38636 = cljs.core.count.call(null,c__28890__auto___38633);
var G__38637 = (0);
seq__38613_38620 = G__38634;
chunk__38614_38621 = G__38635;
count__38615_38622 = G__38636;
i__38616_38623 = G__38637;
continue;
} else {
var child_38638 = cljs.core.first.call(null,seq__38613_38632__$1);
if(!((child_38638 == null))){
if(cljs.core.coll_QMARK_.call(null,child_38638)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38638))));
} else {
var temp__4655__auto___38639 = devtools.formatters.helpers.pref.call(null,child_38638);
if(cljs.core.truth_(temp__4655__auto___38639)){
var child_value_38640 = temp__4655__auto___38639;
template.push(child_value_38640);
} else {
}
}
} else {
}

var G__38641 = cljs.core.next.call(null,seq__38613_38632__$1);
var G__38642 = null;
var G__38643 = (0);
var G__38644 = (0);
seq__38613_38620 = G__38641;
chunk__38614_38621 = G__38642;
count__38615_38622 = G__38643;
i__38616_38623 = G__38644;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq38610){
var G__38611 = cljs.core.first.call(null,seq38610);
var seq38610__$1 = cljs.core.next.call(null,seq38610);
var G__38612 = cljs.core.first.call(null,seq38610__$1);
var seq38610__$2 = cljs.core.next.call(null,seq38610__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__38611,G__38612,seq38610__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__29229__auto__ = [];
var len__29222__auto___38647 = arguments.length;
var i__29223__auto___38648 = (0);
while(true){
if((i__29223__auto___38648 < len__29222__auto___38647)){
args__29229__auto__.push((arguments[i__29223__auto___38648]));

var G__38649 = (i__29223__auto___38648 + (1));
i__29223__auto___38648 = G__38649;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq38645){
var G__38646 = cljs.core.first.call(null,seq38645);
var seq38645__$1 = cljs.core.next.call(null,seq38645);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38646,seq38645__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__29229__auto__ = [];
var len__29222__auto___38652 = arguments.length;
var i__29223__auto___38653 = (0);
while(true){
if((i__29223__auto___38653 < len__29222__auto___38652)){
args__29229__auto__.push((arguments[i__29223__auto___38653]));

var G__38654 = (i__29223__auto___38653 + (1));
i__29223__auto___38653 = G__38654;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq38650){
var G__38651 = cljs.core.first.call(null,seq38650);
var seq38650__$1 = cljs.core.next.call(null,seq38650);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38651,seq38650__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__38656 = arguments.length;
switch (G__38656) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj38658 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__28051__auto__ = start_index;
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return (0);
}
})()};
return obj38658;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__29229__auto__ = [];
var len__29222__auto___38666 = arguments.length;
var i__29223__auto___38667 = (0);
while(true){
if((i__29223__auto___38667 < len__29222__auto___38666)){
args__29229__auto__.push((arguments[i__29223__auto___38667]));

var G__38668 = (i__29223__auto___38667 + (1));
i__29223__auto___38667 = G__38668;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38662){
var vec__38663 = p__38662;
var state_override_fn = cljs.core.nth.call(null,vec__38663,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq38660){
var G__38661 = cljs.core.first.call(null,seq38660);
var seq38660__$1 = cljs.core.next.call(null,seq38660);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__38661,seq38660__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_38669 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38669;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__38670 = name;
switch (G__38670) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__38672 = tag;
var html_tag = cljs.core.nth.call(null,vec__38672,(0),null);
var style = cljs.core.nth.call(null,vec__38672,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_38675 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38675;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_38676 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_38677 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38677;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_38676;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__38678 = initial_value;
var G__38679 = value.call(null);
initial_value = G__38678;
value = G__38679;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__38680 = initial_value;
var G__38681 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__38680;
value = G__38681;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__38682 = initial_value;
var G__38683 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__38682;
value = G__38683;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1517067027282
