// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e37061){if((e37061 instanceof Error)){
var e = e37061;
return "Error: Unable to stringify";
} else {
throw e37061;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37064 = arguments.length;
switch (G__37064) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37062_SHARP_){
if(typeof p1__37062_SHARP_ === 'string'){
return p1__37062_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37062_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29165__auto__ = [];
var len__29158__auto___37067 = arguments.length;
var i__29159__auto___37068 = (0);
while(true){
if((i__29159__auto___37068 < len__29158__auto___37067)){
args__29165__auto__.push((arguments[i__29159__auto___37068]));

var G__37069 = (i__29159__auto___37068 + (1));
i__29159__auto___37068 = G__37069;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37066){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37066));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29165__auto__ = [];
var len__29158__auto___37071 = arguments.length;
var i__29159__auto___37072 = (0);
while(true){
if((i__29159__auto___37072 < len__29158__auto___37071)){
args__29165__auto__.push((arguments[i__29159__auto___37072]));

var G__37073 = (i__29159__auto___37072 + (1));
i__29159__auto___37072 = G__37073;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37070){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37070));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37074){
var map__37075 = p__37074;
var map__37075__$1 = ((((!((map__37075 == null)))?((((map__37075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37075):map__37075);
var message = cljs.core.get.call(null,map__37075__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37075__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27989__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27977__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27977__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27977__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31356__auto___37154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___37154,ch){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___37154,ch){
return (function (state_37126){
var state_val_37127 = (state_37126[(1)]);
if((state_val_37127 === (7))){
var inst_37122 = (state_37126[(2)]);
var state_37126__$1 = state_37126;
var statearr_37128_37155 = state_37126__$1;
(statearr_37128_37155[(2)] = inst_37122);

(statearr_37128_37155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (1))){
var state_37126__$1 = state_37126;
var statearr_37129_37156 = state_37126__$1;
(statearr_37129_37156[(2)] = null);

(statearr_37129_37156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (4))){
var inst_37079 = (state_37126[(7)]);
var inst_37079__$1 = (state_37126[(2)]);
var state_37126__$1 = (function (){var statearr_37130 = state_37126;
(statearr_37130[(7)] = inst_37079__$1);

return statearr_37130;
})();
if(cljs.core.truth_(inst_37079__$1)){
var statearr_37131_37157 = state_37126__$1;
(statearr_37131_37157[(1)] = (5));

} else {
var statearr_37132_37158 = state_37126__$1;
(statearr_37132_37158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (15))){
var inst_37086 = (state_37126[(8)]);
var inst_37101 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37086);
var inst_37102 = cljs.core.first.call(null,inst_37101);
var inst_37103 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37102);
var inst_37104 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37103)].join('');
var inst_37105 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37104);
var state_37126__$1 = state_37126;
var statearr_37133_37159 = state_37126__$1;
(statearr_37133_37159[(2)] = inst_37105);

(statearr_37133_37159[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (13))){
var inst_37110 = (state_37126[(2)]);
var state_37126__$1 = state_37126;
var statearr_37134_37160 = state_37126__$1;
(statearr_37134_37160[(2)] = inst_37110);

(statearr_37134_37160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (6))){
var state_37126__$1 = state_37126;
var statearr_37135_37161 = state_37126__$1;
(statearr_37135_37161[(2)] = null);

(statearr_37135_37161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (17))){
var inst_37108 = (state_37126[(2)]);
var state_37126__$1 = state_37126;
var statearr_37136_37162 = state_37126__$1;
(statearr_37136_37162[(2)] = inst_37108);

(statearr_37136_37162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (3))){
var inst_37124 = (state_37126[(2)]);
var state_37126__$1 = state_37126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37126__$1,inst_37124);
} else {
if((state_val_37127 === (12))){
var inst_37085 = (state_37126[(9)]);
var inst_37099 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37085,opts);
var state_37126__$1 = state_37126;
if(cljs.core.truth_(inst_37099)){
var statearr_37137_37163 = state_37126__$1;
(statearr_37137_37163[(1)] = (15));

} else {
var statearr_37138_37164 = state_37126__$1;
(statearr_37138_37164[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (2))){
var state_37126__$1 = state_37126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37126__$1,(4),ch);
} else {
if((state_val_37127 === (11))){
var inst_37086 = (state_37126[(8)]);
var inst_37091 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37092 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37086);
var inst_37093 = cljs.core.async.timeout.call(null,(1000));
var inst_37094 = [inst_37092,inst_37093];
var inst_37095 = (new cljs.core.PersistentVector(null,2,(5),inst_37091,inst_37094,null));
var state_37126__$1 = state_37126;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37126__$1,(14),inst_37095);
} else {
if((state_val_37127 === (9))){
var inst_37086 = (state_37126[(8)]);
var inst_37112 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37113 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37086);
var inst_37114 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37113);
var inst_37115 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37114)].join('');
var inst_37116 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37115);
var state_37126__$1 = (function (){var statearr_37139 = state_37126;
(statearr_37139[(10)] = inst_37112);

return statearr_37139;
})();
var statearr_37140_37165 = state_37126__$1;
(statearr_37140_37165[(2)] = inst_37116);

(statearr_37140_37165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (5))){
var inst_37079 = (state_37126[(7)]);
var inst_37081 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37082 = (new cljs.core.PersistentArrayMap(null,2,inst_37081,null));
var inst_37083 = (new cljs.core.PersistentHashSet(null,inst_37082,null));
var inst_37084 = figwheel.client.focus_msgs.call(null,inst_37083,inst_37079);
var inst_37085 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37084);
var inst_37086 = cljs.core.first.call(null,inst_37084);
var inst_37087 = figwheel.client.autoload_QMARK_.call(null);
var state_37126__$1 = (function (){var statearr_37141 = state_37126;
(statearr_37141[(9)] = inst_37085);

(statearr_37141[(8)] = inst_37086);

return statearr_37141;
})();
if(cljs.core.truth_(inst_37087)){
var statearr_37142_37166 = state_37126__$1;
(statearr_37142_37166[(1)] = (8));

} else {
var statearr_37143_37167 = state_37126__$1;
(statearr_37143_37167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (14))){
var inst_37097 = (state_37126[(2)]);
var state_37126__$1 = state_37126;
var statearr_37144_37168 = state_37126__$1;
(statearr_37144_37168[(2)] = inst_37097);

(statearr_37144_37168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (16))){
var state_37126__$1 = state_37126;
var statearr_37145_37169 = state_37126__$1;
(statearr_37145_37169[(2)] = null);

(statearr_37145_37169[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (10))){
var inst_37118 = (state_37126[(2)]);
var state_37126__$1 = (function (){var statearr_37146 = state_37126;
(statearr_37146[(11)] = inst_37118);

return statearr_37146;
})();
var statearr_37147_37170 = state_37126__$1;
(statearr_37147_37170[(2)] = null);

(statearr_37147_37170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37127 === (8))){
var inst_37085 = (state_37126[(9)]);
var inst_37089 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37085,opts);
var state_37126__$1 = state_37126;
if(cljs.core.truth_(inst_37089)){
var statearr_37148_37171 = state_37126__$1;
(statearr_37148_37171[(1)] = (11));

} else {
var statearr_37149_37172 = state_37126__$1;
(statearr_37149_37172[(1)] = (12));

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
});})(c__31356__auto___37154,ch))
;
return ((function (switch__31268__auto__,c__31356__auto___37154,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31269__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31269__auto____0 = (function (){
var statearr_37150 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37150[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31269__auto__);

(statearr_37150[(1)] = (1));

return statearr_37150;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31269__auto____1 = (function (state_37126){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_37126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e37151){if((e37151 instanceof Object)){
var ex__31272__auto__ = e37151;
var statearr_37152_37173 = state_37126;
(statearr_37152_37173[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37174 = state_37126;
state_37126 = G__37174;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31269__auto__ = function(state_37126){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31269__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31269__auto____1.call(this,state_37126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31269__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31269__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___37154,ch))
})();
var state__31358__auto__ = (function (){var statearr_37153 = f__31357__auto__.call(null);
(statearr_37153[(6)] = c__31356__auto___37154);

return statearr_37153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___37154,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37175_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37175_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37177 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37177){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37176){if((e37176 instanceof Error)){
var e = e37176;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37177], null));
} else {
var e = e37176;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37177))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37178){
var map__37179 = p__37178;
var map__37179__$1 = ((((!((map__37179 == null)))?((((map__37179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37179):map__37179);
var opts = map__37179__$1;
var build_id = cljs.core.get.call(null,map__37179__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37179,map__37179__$1,opts,build_id){
return (function (p__37181){
var vec__37182 = p__37181;
var seq__37183 = cljs.core.seq.call(null,vec__37182);
var first__37184 = cljs.core.first.call(null,seq__37183);
var seq__37183__$1 = cljs.core.next.call(null,seq__37183);
var map__37185 = first__37184;
var map__37185__$1 = ((((!((map__37185 == null)))?((((map__37185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37185):map__37185);
var msg = map__37185__$1;
var msg_name = cljs.core.get.call(null,map__37185__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37183__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37182,seq__37183,first__37184,seq__37183__$1,map__37185,map__37185__$1,msg,msg_name,_,map__37179,map__37179__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37182,seq__37183,first__37184,seq__37183__$1,map__37185,map__37185__$1,msg,msg_name,_,map__37179,map__37179__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37179,map__37179__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37187){
var vec__37188 = p__37187;
var seq__37189 = cljs.core.seq.call(null,vec__37188);
var first__37190 = cljs.core.first.call(null,seq__37189);
var seq__37189__$1 = cljs.core.next.call(null,seq__37189);
var map__37191 = first__37190;
var map__37191__$1 = ((((!((map__37191 == null)))?((((map__37191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37191):map__37191);
var msg = map__37191__$1;
var msg_name = cljs.core.get.call(null,map__37191__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37189__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37193){
var map__37194 = p__37193;
var map__37194__$1 = ((((!((map__37194 == null)))?((((map__37194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37194):map__37194);
var on_compile_warning = cljs.core.get.call(null,map__37194__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37194__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37194,map__37194__$1,on_compile_warning,on_compile_fail){
return (function (p__37196){
var vec__37197 = p__37196;
var seq__37198 = cljs.core.seq.call(null,vec__37197);
var first__37199 = cljs.core.first.call(null,seq__37198);
var seq__37198__$1 = cljs.core.next.call(null,seq__37198);
var map__37200 = first__37199;
var map__37200__$1 = ((((!((map__37200 == null)))?((((map__37200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37200):map__37200);
var msg = map__37200__$1;
var msg_name = cljs.core.get.call(null,map__37200__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37198__$1;
var pred__37202 = cljs.core._EQ_;
var expr__37203 = msg_name;
if(cljs.core.truth_(pred__37202.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37203))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37202.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37203))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37194,map__37194__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto__,msg_hist,msg_names,msg){
return (function (state_37292){
var state_val_37293 = (state_37292[(1)]);
if((state_val_37293 === (7))){
var inst_37212 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
if(cljs.core.truth_(inst_37212)){
var statearr_37294_37341 = state_37292__$1;
(statearr_37294_37341[(1)] = (8));

} else {
var statearr_37295_37342 = state_37292__$1;
(statearr_37295_37342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (20))){
var inst_37286 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37296_37343 = state_37292__$1;
(statearr_37296_37343[(2)] = inst_37286);

(statearr_37296_37343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (27))){
var inst_37282 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37297_37344 = state_37292__$1;
(statearr_37297_37344[(2)] = inst_37282);

(statearr_37297_37344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (1))){
var inst_37205 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37292__$1 = state_37292;
if(cljs.core.truth_(inst_37205)){
var statearr_37298_37345 = state_37292__$1;
(statearr_37298_37345[(1)] = (2));

} else {
var statearr_37299_37346 = state_37292__$1;
(statearr_37299_37346[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (24))){
var inst_37284 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37300_37347 = state_37292__$1;
(statearr_37300_37347[(2)] = inst_37284);

(statearr_37300_37347[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (4))){
var inst_37290 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37292__$1,inst_37290);
} else {
if((state_val_37293 === (15))){
var inst_37288 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37301_37348 = state_37292__$1;
(statearr_37301_37348[(2)] = inst_37288);

(statearr_37301_37348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (21))){
var inst_37241 = (state_37292[(2)]);
var inst_37242 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37243 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37242);
var state_37292__$1 = (function (){var statearr_37302 = state_37292;
(statearr_37302[(7)] = inst_37241);

return statearr_37302;
})();
var statearr_37303_37349 = state_37292__$1;
(statearr_37303_37349[(2)] = inst_37243);

(statearr_37303_37349[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (31))){
var inst_37271 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37292__$1 = state_37292;
if(cljs.core.truth_(inst_37271)){
var statearr_37304_37350 = state_37292__$1;
(statearr_37304_37350[(1)] = (34));

} else {
var statearr_37305_37351 = state_37292__$1;
(statearr_37305_37351[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (32))){
var inst_37280 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37306_37352 = state_37292__$1;
(statearr_37306_37352[(2)] = inst_37280);

(statearr_37306_37352[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (33))){
var inst_37267 = (state_37292[(2)]);
var inst_37268 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37269 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37268);
var state_37292__$1 = (function (){var statearr_37307 = state_37292;
(statearr_37307[(8)] = inst_37267);

return statearr_37307;
})();
var statearr_37308_37353 = state_37292__$1;
(statearr_37308_37353[(2)] = inst_37269);

(statearr_37308_37353[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (13))){
var inst_37226 = figwheel.client.heads_up.clear.call(null);
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(16),inst_37226);
} else {
if((state_val_37293 === (22))){
var inst_37247 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37248 = figwheel.client.heads_up.append_warning_message.call(null,inst_37247);
var state_37292__$1 = state_37292;
var statearr_37309_37354 = state_37292__$1;
(statearr_37309_37354[(2)] = inst_37248);

(statearr_37309_37354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (36))){
var inst_37278 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37310_37355 = state_37292__$1;
(statearr_37310_37355[(2)] = inst_37278);

(statearr_37310_37355[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (29))){
var inst_37258 = (state_37292[(2)]);
var inst_37259 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37260 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37259);
var state_37292__$1 = (function (){var statearr_37311 = state_37292;
(statearr_37311[(9)] = inst_37258);

return statearr_37311;
})();
var statearr_37312_37356 = state_37292__$1;
(statearr_37312_37356[(2)] = inst_37260);

(statearr_37312_37356[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (6))){
var inst_37207 = (state_37292[(10)]);
var state_37292__$1 = state_37292;
var statearr_37313_37357 = state_37292__$1;
(statearr_37313_37357[(2)] = inst_37207);

(statearr_37313_37357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (28))){
var inst_37254 = (state_37292[(2)]);
var inst_37255 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37256 = figwheel.client.heads_up.display_warning.call(null,inst_37255);
var state_37292__$1 = (function (){var statearr_37314 = state_37292;
(statearr_37314[(11)] = inst_37254);

return statearr_37314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(29),inst_37256);
} else {
if((state_val_37293 === (25))){
var inst_37252 = figwheel.client.heads_up.clear.call(null);
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(28),inst_37252);
} else {
if((state_val_37293 === (34))){
var inst_37273 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(37),inst_37273);
} else {
if((state_val_37293 === (17))){
var inst_37232 = (state_37292[(2)]);
var inst_37233 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37234 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37233);
var state_37292__$1 = (function (){var statearr_37315 = state_37292;
(statearr_37315[(12)] = inst_37232);

return statearr_37315;
})();
var statearr_37316_37358 = state_37292__$1;
(statearr_37316_37358[(2)] = inst_37234);

(statearr_37316_37358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (3))){
var inst_37224 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37292__$1 = state_37292;
if(cljs.core.truth_(inst_37224)){
var statearr_37317_37359 = state_37292__$1;
(statearr_37317_37359[(1)] = (13));

} else {
var statearr_37318_37360 = state_37292__$1;
(statearr_37318_37360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (12))){
var inst_37220 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37319_37361 = state_37292__$1;
(statearr_37319_37361[(2)] = inst_37220);

(statearr_37319_37361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (2))){
var inst_37207 = (state_37292[(10)]);
var inst_37207__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37292__$1 = (function (){var statearr_37320 = state_37292;
(statearr_37320[(10)] = inst_37207__$1);

return statearr_37320;
})();
if(cljs.core.truth_(inst_37207__$1)){
var statearr_37321_37362 = state_37292__$1;
(statearr_37321_37362[(1)] = (5));

} else {
var statearr_37322_37363 = state_37292__$1;
(statearr_37322_37363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (23))){
var inst_37250 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37292__$1 = state_37292;
if(cljs.core.truth_(inst_37250)){
var statearr_37323_37364 = state_37292__$1;
(statearr_37323_37364[(1)] = (25));

} else {
var statearr_37324_37365 = state_37292__$1;
(statearr_37324_37365[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (35))){
var state_37292__$1 = state_37292;
var statearr_37325_37366 = state_37292__$1;
(statearr_37325_37366[(2)] = null);

(statearr_37325_37366[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (19))){
var inst_37245 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37292__$1 = state_37292;
if(cljs.core.truth_(inst_37245)){
var statearr_37326_37367 = state_37292__$1;
(statearr_37326_37367[(1)] = (22));

} else {
var statearr_37327_37368 = state_37292__$1;
(statearr_37327_37368[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (11))){
var inst_37216 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37328_37369 = state_37292__$1;
(statearr_37328_37369[(2)] = inst_37216);

(statearr_37328_37369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (9))){
var inst_37218 = figwheel.client.heads_up.clear.call(null);
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(12),inst_37218);
} else {
if((state_val_37293 === (5))){
var inst_37209 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37292__$1 = state_37292;
var statearr_37329_37370 = state_37292__$1;
(statearr_37329_37370[(2)] = inst_37209);

(statearr_37329_37370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (14))){
var inst_37236 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37292__$1 = state_37292;
if(cljs.core.truth_(inst_37236)){
var statearr_37330_37371 = state_37292__$1;
(statearr_37330_37371[(1)] = (18));

} else {
var statearr_37331_37372 = state_37292__$1;
(statearr_37331_37372[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (26))){
var inst_37262 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37292__$1 = state_37292;
if(cljs.core.truth_(inst_37262)){
var statearr_37332_37373 = state_37292__$1;
(statearr_37332_37373[(1)] = (30));

} else {
var statearr_37333_37374 = state_37292__$1;
(statearr_37333_37374[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (16))){
var inst_37228 = (state_37292[(2)]);
var inst_37229 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37230 = figwheel.client.heads_up.display_exception.call(null,inst_37229);
var state_37292__$1 = (function (){var statearr_37334 = state_37292;
(statearr_37334[(13)] = inst_37228);

return statearr_37334;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(17),inst_37230);
} else {
if((state_val_37293 === (30))){
var inst_37264 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37265 = figwheel.client.heads_up.display_warning.call(null,inst_37264);
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(33),inst_37265);
} else {
if((state_val_37293 === (10))){
var inst_37222 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37335_37375 = state_37292__$1;
(statearr_37335_37375[(2)] = inst_37222);

(statearr_37335_37375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (18))){
var inst_37238 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37239 = figwheel.client.heads_up.display_exception.call(null,inst_37238);
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(21),inst_37239);
} else {
if((state_val_37293 === (37))){
var inst_37275 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37336_37376 = state_37292__$1;
(statearr_37336_37376[(2)] = inst_37275);

(statearr_37336_37376[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (8))){
var inst_37214 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(11),inst_37214);
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
});})(c__31356__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31268__auto__,c__31356__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto____0 = (function (){
var statearr_37337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37337[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto__);

(statearr_37337[(1)] = (1));

return statearr_37337;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto____1 = (function (state_37292){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_37292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e37338){if((e37338 instanceof Object)){
var ex__31272__auto__ = e37338;
var statearr_37339_37377 = state_37292;
(statearr_37339_37377[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37378 = state_37292;
state_37292 = G__37378;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto__ = function(state_37292){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto____1.call(this,state_37292);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto__,msg_hist,msg_names,msg))
})();
var state__31358__auto__ = (function (){var statearr_37340 = f__31357__auto__.call(null);
(statearr_37340[(6)] = c__31356__auto__);

return statearr_37340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto__,msg_hist,msg_names,msg))
);

return c__31356__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31356__auto___37407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___37407,ch){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___37407,ch){
return (function (state_37393){
var state_val_37394 = (state_37393[(1)]);
if((state_val_37394 === (1))){
var state_37393__$1 = state_37393;
var statearr_37395_37408 = state_37393__$1;
(statearr_37395_37408[(2)] = null);

(statearr_37395_37408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (2))){
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(4),ch);
} else {
if((state_val_37394 === (3))){
var inst_37391 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37393__$1,inst_37391);
} else {
if((state_val_37394 === (4))){
var inst_37381 = (state_37393[(7)]);
var inst_37381__$1 = (state_37393[(2)]);
var state_37393__$1 = (function (){var statearr_37396 = state_37393;
(statearr_37396[(7)] = inst_37381__$1);

return statearr_37396;
})();
if(cljs.core.truth_(inst_37381__$1)){
var statearr_37397_37409 = state_37393__$1;
(statearr_37397_37409[(1)] = (5));

} else {
var statearr_37398_37410 = state_37393__$1;
(statearr_37398_37410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (5))){
var inst_37381 = (state_37393[(7)]);
var inst_37383 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37381);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(8),inst_37383);
} else {
if((state_val_37394 === (6))){
var state_37393__$1 = state_37393;
var statearr_37399_37411 = state_37393__$1;
(statearr_37399_37411[(2)] = null);

(statearr_37399_37411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (7))){
var inst_37389 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37400_37412 = state_37393__$1;
(statearr_37400_37412[(2)] = inst_37389);

(statearr_37400_37412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (8))){
var inst_37385 = (state_37393[(2)]);
var state_37393__$1 = (function (){var statearr_37401 = state_37393;
(statearr_37401[(8)] = inst_37385);

return statearr_37401;
})();
var statearr_37402_37413 = state_37393__$1;
(statearr_37402_37413[(2)] = null);

(statearr_37402_37413[(1)] = (2));


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
});})(c__31356__auto___37407,ch))
;
return ((function (switch__31268__auto__,c__31356__auto___37407,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31269__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31269__auto____0 = (function (){
var statearr_37403 = [null,null,null,null,null,null,null,null,null];
(statearr_37403[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31269__auto__);

(statearr_37403[(1)] = (1));

return statearr_37403;
});
var figwheel$client$heads_up_plugin_$_state_machine__31269__auto____1 = (function (state_37393){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_37393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e37404){if((e37404 instanceof Object)){
var ex__31272__auto__ = e37404;
var statearr_37405_37414 = state_37393;
(statearr_37405_37414[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37415 = state_37393;
state_37393 = G__37415;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31269__auto__ = function(state_37393){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31269__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31269__auto____1.call(this,state_37393);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31269__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31269__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___37407,ch))
})();
var state__31358__auto__ = (function (){var statearr_37406 = f__31357__auto__.call(null);
(statearr_37406[(6)] = c__31356__auto___37407);

return statearr_37406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___37407,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto__){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto__){
return (function (state_37421){
var state_val_37422 = (state_37421[(1)]);
if((state_val_37422 === (1))){
var inst_37416 = cljs.core.async.timeout.call(null,(3000));
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37421__$1,(2),inst_37416);
} else {
if((state_val_37422 === (2))){
var inst_37418 = (state_37421[(2)]);
var inst_37419 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37421__$1 = (function (){var statearr_37423 = state_37421;
(statearr_37423[(7)] = inst_37418);

return statearr_37423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37421__$1,inst_37419);
} else {
return null;
}
}
});})(c__31356__auto__))
;
return ((function (switch__31268__auto__,c__31356__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31269__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31269__auto____0 = (function (){
var statearr_37424 = [null,null,null,null,null,null,null,null];
(statearr_37424[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31269__auto__);

(statearr_37424[(1)] = (1));

return statearr_37424;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31269__auto____1 = (function (state_37421){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_37421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e37425){if((e37425 instanceof Object)){
var ex__31272__auto__ = e37425;
var statearr_37426_37428 = state_37421;
(statearr_37426_37428[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37429 = state_37421;
state_37421 = G__37429;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31269__auto__ = function(state_37421){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31269__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31269__auto____1.call(this,state_37421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31269__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31269__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto__))
})();
var state__31358__auto__ = (function (){var statearr_37427 = f__31357__auto__.call(null);
(statearr_37427[(6)] = c__31356__auto__);

return statearr_37427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto__))
);

return c__31356__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37436){
var state_val_37437 = (state_37436[(1)]);
if((state_val_37437 === (1))){
var inst_37430 = cljs.core.async.timeout.call(null,(2000));
var state_37436__$1 = state_37436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37436__$1,(2),inst_37430);
} else {
if((state_val_37437 === (2))){
var inst_37432 = (state_37436[(2)]);
var inst_37433 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37434 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37433);
var state_37436__$1 = (function (){var statearr_37438 = state_37436;
(statearr_37438[(7)] = inst_37432);

return statearr_37438;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37436__$1,inst_37434);
} else {
return null;
}
}
});})(c__31356__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31268__auto__,c__31356__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto____0 = (function (){
var statearr_37439 = [null,null,null,null,null,null,null,null];
(statearr_37439[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto__);

(statearr_37439[(1)] = (1));

return statearr_37439;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto____1 = (function (state_37436){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_37436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e37440){if((e37440 instanceof Object)){
var ex__31272__auto__ = e37440;
var statearr_37441_37443 = state_37436;
(statearr_37441_37443[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37444 = state_37436;
state_37436 = G__37444;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto__ = function(state_37436){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto____1.call(this,state_37436);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31358__auto__ = (function (){var statearr_37442 = f__31357__auto__.call(null);
(statearr_37442[(6)] = c__31356__auto__);

return statearr_37442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto__,figwheel_version,temp__4657__auto__))
);

return c__31356__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37445){
var map__37446 = p__37445;
var map__37446__$1 = ((((!((map__37446 == null)))?((((map__37446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37446):map__37446);
var file = cljs.core.get.call(null,map__37446__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37446__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37446__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37448 = "";
var G__37448__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37448),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37448);
var G__37448__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37448__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37448__$1);
if(cljs.core.truth_((function (){var and__27977__auto__ = line;
if(cljs.core.truth_(and__27977__auto__)){
return column;
} else {
return and__27977__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37448__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37448__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37449){
var map__37450 = p__37449;
var map__37450__$1 = ((((!((map__37450 == null)))?((((map__37450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37450):map__37450);
var ed = map__37450__$1;
var formatted_exception = cljs.core.get.call(null,map__37450__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37450__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37450__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37452_37456 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37453_37457 = null;
var count__37454_37458 = (0);
var i__37455_37459 = (0);
while(true){
if((i__37455_37459 < count__37454_37458)){
var msg_37460 = cljs.core._nth.call(null,chunk__37453_37457,i__37455_37459);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37460);

var G__37461 = seq__37452_37456;
var G__37462 = chunk__37453_37457;
var G__37463 = count__37454_37458;
var G__37464 = (i__37455_37459 + (1));
seq__37452_37456 = G__37461;
chunk__37453_37457 = G__37462;
count__37454_37458 = G__37463;
i__37455_37459 = G__37464;
continue;
} else {
var temp__4657__auto___37465 = cljs.core.seq.call(null,seq__37452_37456);
if(temp__4657__auto___37465){
var seq__37452_37466__$1 = temp__4657__auto___37465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37452_37466__$1)){
var c__28828__auto___37467 = cljs.core.chunk_first.call(null,seq__37452_37466__$1);
var G__37468 = cljs.core.chunk_rest.call(null,seq__37452_37466__$1);
var G__37469 = c__28828__auto___37467;
var G__37470 = cljs.core.count.call(null,c__28828__auto___37467);
var G__37471 = (0);
seq__37452_37456 = G__37468;
chunk__37453_37457 = G__37469;
count__37454_37458 = G__37470;
i__37455_37459 = G__37471;
continue;
} else {
var msg_37472 = cljs.core.first.call(null,seq__37452_37466__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37472);

var G__37473 = cljs.core.next.call(null,seq__37452_37466__$1);
var G__37474 = null;
var G__37475 = (0);
var G__37476 = (0);
seq__37452_37456 = G__37473;
chunk__37453_37457 = G__37474;
count__37454_37458 = G__37475;
i__37455_37459 = G__37476;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37477){
var map__37478 = p__37477;
var map__37478__$1 = ((((!((map__37478 == null)))?((((map__37478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37478):map__37478);
var w = map__37478__$1;
var message = cljs.core.get.call(null,map__37478__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27977__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27977__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27977__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37480 = cljs.core.seq.call(null,plugins);
var chunk__37481 = null;
var count__37482 = (0);
var i__37483 = (0);
while(true){
if((i__37483 < count__37482)){
var vec__37484 = cljs.core._nth.call(null,chunk__37481,i__37483);
var k = cljs.core.nth.call(null,vec__37484,(0),null);
var plugin = cljs.core.nth.call(null,vec__37484,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37490 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37480,chunk__37481,count__37482,i__37483,pl_37490,vec__37484,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37490.call(null,msg_hist);
});})(seq__37480,chunk__37481,count__37482,i__37483,pl_37490,vec__37484,k,plugin))
);
} else {
}

var G__37491 = seq__37480;
var G__37492 = chunk__37481;
var G__37493 = count__37482;
var G__37494 = (i__37483 + (1));
seq__37480 = G__37491;
chunk__37481 = G__37492;
count__37482 = G__37493;
i__37483 = G__37494;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37480);
if(temp__4657__auto__){
var seq__37480__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37480__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__37480__$1);
var G__37495 = cljs.core.chunk_rest.call(null,seq__37480__$1);
var G__37496 = c__28828__auto__;
var G__37497 = cljs.core.count.call(null,c__28828__auto__);
var G__37498 = (0);
seq__37480 = G__37495;
chunk__37481 = G__37496;
count__37482 = G__37497;
i__37483 = G__37498;
continue;
} else {
var vec__37487 = cljs.core.first.call(null,seq__37480__$1);
var k = cljs.core.nth.call(null,vec__37487,(0),null);
var plugin = cljs.core.nth.call(null,vec__37487,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37499 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37480,chunk__37481,count__37482,i__37483,pl_37499,vec__37487,k,plugin,seq__37480__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37499.call(null,msg_hist);
});})(seq__37480,chunk__37481,count__37482,i__37483,pl_37499,vec__37487,k,plugin,seq__37480__$1,temp__4657__auto__))
);
} else {
}

var G__37500 = cljs.core.next.call(null,seq__37480__$1);
var G__37501 = null;
var G__37502 = (0);
var G__37503 = (0);
seq__37480 = G__37500;
chunk__37481 = G__37501;
count__37482 = G__37502;
i__37483 = G__37503;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37505 = arguments.length;
switch (G__37505) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37506_37511 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37507_37512 = null;
var count__37508_37513 = (0);
var i__37509_37514 = (0);
while(true){
if((i__37509_37514 < count__37508_37513)){
var msg_37515 = cljs.core._nth.call(null,chunk__37507_37512,i__37509_37514);
figwheel.client.socket.handle_incoming_message.call(null,msg_37515);

var G__37516 = seq__37506_37511;
var G__37517 = chunk__37507_37512;
var G__37518 = count__37508_37513;
var G__37519 = (i__37509_37514 + (1));
seq__37506_37511 = G__37516;
chunk__37507_37512 = G__37517;
count__37508_37513 = G__37518;
i__37509_37514 = G__37519;
continue;
} else {
var temp__4657__auto___37520 = cljs.core.seq.call(null,seq__37506_37511);
if(temp__4657__auto___37520){
var seq__37506_37521__$1 = temp__4657__auto___37520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37506_37521__$1)){
var c__28828__auto___37522 = cljs.core.chunk_first.call(null,seq__37506_37521__$1);
var G__37523 = cljs.core.chunk_rest.call(null,seq__37506_37521__$1);
var G__37524 = c__28828__auto___37522;
var G__37525 = cljs.core.count.call(null,c__28828__auto___37522);
var G__37526 = (0);
seq__37506_37511 = G__37523;
chunk__37507_37512 = G__37524;
count__37508_37513 = G__37525;
i__37509_37514 = G__37526;
continue;
} else {
var msg_37527 = cljs.core.first.call(null,seq__37506_37521__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37527);

var G__37528 = cljs.core.next.call(null,seq__37506_37521__$1);
var G__37529 = null;
var G__37530 = (0);
var G__37531 = (0);
seq__37506_37511 = G__37528;
chunk__37507_37512 = G__37529;
count__37508_37513 = G__37530;
i__37509_37514 = G__37531;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29165__auto__ = [];
var len__29158__auto___37536 = arguments.length;
var i__29159__auto___37537 = (0);
while(true){
if((i__29159__auto___37537 < len__29158__auto___37536)){
args__29165__auto__.push((arguments[i__29159__auto___37537]));

var G__37538 = (i__29159__auto___37537 + (1));
i__29159__auto___37537 = G__37538;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37533){
var map__37534 = p__37533;
var map__37534__$1 = ((((!((map__37534 == null)))?((((map__37534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37534):map__37534);
var opts = map__37534__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37532){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37532));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37539){if((e37539 instanceof Error)){
var e = e37539;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37539;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37540){
var map__37541 = p__37540;
var map__37541__$1 = ((((!((map__37541 == null)))?((((map__37541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37541):map__37541);
var msg_name = cljs.core.get.call(null,map__37541__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1517063745763
