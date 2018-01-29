// Compiled by ClojureScript 1.9.946 {}
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
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e44160){if((e44160 instanceof Error)){
var e = e44160;
return "Error: Unable to stringify";
} else {
throw e44160;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__44163 = arguments.length;
switch (G__44163) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__44161_SHARP_){
if(typeof p1__44161_SHARP_ === 'string'){
return p1__44161_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__44161_SHARP_);
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
var args__39469__auto__ = [];
var len__39462__auto___44166 = arguments.length;
var i__39463__auto___44167 = (0);
while(true){
if((i__39463__auto___44167 < len__39462__auto___44166)){
args__39469__auto__.push((arguments[i__39463__auto___44167]));

var G__44168 = (i__39463__auto___44167 + (1));
i__39463__auto___44167 = G__44168;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((0) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__39470__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq44165){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44165));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__39469__auto__ = [];
var len__39462__auto___44170 = arguments.length;
var i__39463__auto___44171 = (0);
while(true){
if((i__39463__auto___44171 < len__39462__auto___44170)){
args__39469__auto__.push((arguments[i__39463__auto___44171]));

var G__44172 = (i__39463__auto___44171 + (1));
i__39463__auto___44171 = G__44172;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((0) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__39470__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq44169){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44169));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__44173){
var map__44174 = p__44173;
var map__44174__$1 = ((((!((map__44174 == null)))?((((map__44174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44174):map__44174);
var message = cljs.core.get.call(null,map__44174__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__44174__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__38291__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__38279__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__38279__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__38279__auto__;
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
var c__40843__auto___44253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___44253,ch){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___44253,ch){
return (function (state_44225){
var state_val_44226 = (state_44225[(1)]);
if((state_val_44226 === (7))){
var inst_44221 = (state_44225[(2)]);
var state_44225__$1 = state_44225;
var statearr_44227_44254 = state_44225__$1;
(statearr_44227_44254[(2)] = inst_44221);

(statearr_44227_44254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (1))){
var state_44225__$1 = state_44225;
var statearr_44228_44255 = state_44225__$1;
(statearr_44228_44255[(2)] = null);

(statearr_44228_44255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (4))){
var inst_44178 = (state_44225[(7)]);
var inst_44178__$1 = (state_44225[(2)]);
var state_44225__$1 = (function (){var statearr_44229 = state_44225;
(statearr_44229[(7)] = inst_44178__$1);

return statearr_44229;
})();
if(cljs.core.truth_(inst_44178__$1)){
var statearr_44230_44256 = state_44225__$1;
(statearr_44230_44256[(1)] = (5));

} else {
var statearr_44231_44257 = state_44225__$1;
(statearr_44231_44257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (15))){
var inst_44185 = (state_44225[(8)]);
var inst_44200 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44185);
var inst_44201 = cljs.core.first.call(null,inst_44200);
var inst_44202 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44201);
var inst_44203 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44202)].join('');
var inst_44204 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44203);
var state_44225__$1 = state_44225;
var statearr_44232_44258 = state_44225__$1;
(statearr_44232_44258[(2)] = inst_44204);

(statearr_44232_44258[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (13))){
var inst_44209 = (state_44225[(2)]);
var state_44225__$1 = state_44225;
var statearr_44233_44259 = state_44225__$1;
(statearr_44233_44259[(2)] = inst_44209);

(statearr_44233_44259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (6))){
var state_44225__$1 = state_44225;
var statearr_44234_44260 = state_44225__$1;
(statearr_44234_44260[(2)] = null);

(statearr_44234_44260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (17))){
var inst_44207 = (state_44225[(2)]);
var state_44225__$1 = state_44225;
var statearr_44235_44261 = state_44225__$1;
(statearr_44235_44261[(2)] = inst_44207);

(statearr_44235_44261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (3))){
var inst_44223 = (state_44225[(2)]);
var state_44225__$1 = state_44225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44225__$1,inst_44223);
} else {
if((state_val_44226 === (12))){
var inst_44184 = (state_44225[(9)]);
var inst_44198 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44184,opts);
var state_44225__$1 = state_44225;
if(cljs.core.truth_(inst_44198)){
var statearr_44236_44262 = state_44225__$1;
(statearr_44236_44262[(1)] = (15));

} else {
var statearr_44237_44263 = state_44225__$1;
(statearr_44237_44263[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (2))){
var state_44225__$1 = state_44225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44225__$1,(4),ch);
} else {
if((state_val_44226 === (11))){
var inst_44185 = (state_44225[(8)]);
var inst_44190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44191 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44185);
var inst_44192 = cljs.core.async.timeout.call(null,(1000));
var inst_44193 = [inst_44191,inst_44192];
var inst_44194 = (new cljs.core.PersistentVector(null,2,(5),inst_44190,inst_44193,null));
var state_44225__$1 = state_44225;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44225__$1,(14),inst_44194);
} else {
if((state_val_44226 === (9))){
var inst_44185 = (state_44225[(8)]);
var inst_44211 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44212 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44185);
var inst_44213 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44212);
var inst_44214 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44213)].join('');
var inst_44215 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44214);
var state_44225__$1 = (function (){var statearr_44238 = state_44225;
(statearr_44238[(10)] = inst_44211);

return statearr_44238;
})();
var statearr_44239_44264 = state_44225__$1;
(statearr_44239_44264[(2)] = inst_44215);

(statearr_44239_44264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (5))){
var inst_44178 = (state_44225[(7)]);
var inst_44180 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44181 = (new cljs.core.PersistentArrayMap(null,2,inst_44180,null));
var inst_44182 = (new cljs.core.PersistentHashSet(null,inst_44181,null));
var inst_44183 = figwheel.client.focus_msgs.call(null,inst_44182,inst_44178);
var inst_44184 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44183);
var inst_44185 = cljs.core.first.call(null,inst_44183);
var inst_44186 = figwheel.client.autoload_QMARK_.call(null);
var state_44225__$1 = (function (){var statearr_44240 = state_44225;
(statearr_44240[(8)] = inst_44185);

(statearr_44240[(9)] = inst_44184);

return statearr_44240;
})();
if(cljs.core.truth_(inst_44186)){
var statearr_44241_44265 = state_44225__$1;
(statearr_44241_44265[(1)] = (8));

} else {
var statearr_44242_44266 = state_44225__$1;
(statearr_44242_44266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (14))){
var inst_44196 = (state_44225[(2)]);
var state_44225__$1 = state_44225;
var statearr_44243_44267 = state_44225__$1;
(statearr_44243_44267[(2)] = inst_44196);

(statearr_44243_44267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (16))){
var state_44225__$1 = state_44225;
var statearr_44244_44268 = state_44225__$1;
(statearr_44244_44268[(2)] = null);

(statearr_44244_44268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (10))){
var inst_44217 = (state_44225[(2)]);
var state_44225__$1 = (function (){var statearr_44245 = state_44225;
(statearr_44245[(11)] = inst_44217);

return statearr_44245;
})();
var statearr_44246_44269 = state_44225__$1;
(statearr_44246_44269[(2)] = null);

(statearr_44246_44269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44226 === (8))){
var inst_44184 = (state_44225[(9)]);
var inst_44188 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44184,opts);
var state_44225__$1 = state_44225;
if(cljs.core.truth_(inst_44188)){
var statearr_44247_44270 = state_44225__$1;
(statearr_44247_44270[(1)] = (11));

} else {
var statearr_44248_44271 = state_44225__$1;
(statearr_44248_44271[(1)] = (12));

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
});})(c__40843__auto___44253,ch))
;
return ((function (switch__40755__auto__,c__40843__auto___44253,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40756__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40756__auto____0 = (function (){
var statearr_44249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44249[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40756__auto__);

(statearr_44249[(1)] = (1));

return statearr_44249;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40756__auto____1 = (function (state_44225){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_44225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e44250){if((e44250 instanceof Object)){
var ex__40759__auto__ = e44250;
var statearr_44251_44272 = state_44225;
(statearr_44251_44272[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44273 = state_44225;
state_44225 = G__44273;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40756__auto__ = function(state_44225){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40756__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40756__auto____1.call(this,state_44225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40756__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40756__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___44253,ch))
})();
var state__40845__auto__ = (function (){var statearr_44252 = f__40844__auto__.call(null);
(statearr_44252[(6)] = c__40843__auto___44253);

return statearr_44252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___44253,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44274_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44274_SHARP_));
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
var base_path_44276 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44276){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e44275){if((e44275 instanceof Error)){
var e = e44275;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44276], null));
} else {
var e = e44275;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_44276))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44277){
var map__44278 = p__44277;
var map__44278__$1 = ((((!((map__44278 == null)))?((((map__44278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44278):map__44278);
var opts = map__44278__$1;
var build_id = cljs.core.get.call(null,map__44278__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44278,map__44278__$1,opts,build_id){
return (function (p__44280){
var vec__44281 = p__44280;
var seq__44282 = cljs.core.seq.call(null,vec__44281);
var first__44283 = cljs.core.first.call(null,seq__44282);
var seq__44282__$1 = cljs.core.next.call(null,seq__44282);
var map__44284 = first__44283;
var map__44284__$1 = ((((!((map__44284 == null)))?((((map__44284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44284):map__44284);
var msg = map__44284__$1;
var msg_name = cljs.core.get.call(null,map__44284__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44282__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44281,seq__44282,first__44283,seq__44282__$1,map__44284,map__44284__$1,msg,msg_name,_,map__44278,map__44278__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44281,seq__44282,first__44283,seq__44282__$1,map__44284,map__44284__$1,msg,msg_name,_,map__44278,map__44278__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44278,map__44278__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44286){
var vec__44287 = p__44286;
var seq__44288 = cljs.core.seq.call(null,vec__44287);
var first__44289 = cljs.core.first.call(null,seq__44288);
var seq__44288__$1 = cljs.core.next.call(null,seq__44288);
var map__44290 = first__44289;
var map__44290__$1 = ((((!((map__44290 == null)))?((((map__44290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44290):map__44290);
var msg = map__44290__$1;
var msg_name = cljs.core.get.call(null,map__44290__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44288__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44292){
var map__44293 = p__44292;
var map__44293__$1 = ((((!((map__44293 == null)))?((((map__44293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44293):map__44293);
var on_compile_warning = cljs.core.get.call(null,map__44293__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44293__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44293,map__44293__$1,on_compile_warning,on_compile_fail){
return (function (p__44295){
var vec__44296 = p__44295;
var seq__44297 = cljs.core.seq.call(null,vec__44296);
var first__44298 = cljs.core.first.call(null,seq__44297);
var seq__44297__$1 = cljs.core.next.call(null,seq__44297);
var map__44299 = first__44298;
var map__44299__$1 = ((((!((map__44299 == null)))?((((map__44299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44299):map__44299);
var msg = map__44299__$1;
var msg_name = cljs.core.get.call(null,map__44299__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44297__$1;
var pred__44301 = cljs.core._EQ_;
var expr__44302 = msg_name;
if(cljs.core.truth_(pred__44301.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44302))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44301.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44302))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44293,map__44293__$1,on_compile_warning,on_compile_fail))
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
var c__40843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto__,msg_hist,msg_names,msg){
return (function (state_44391){
var state_val_44392 = (state_44391[(1)]);
if((state_val_44392 === (7))){
var inst_44311 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
if(cljs.core.truth_(inst_44311)){
var statearr_44393_44440 = state_44391__$1;
(statearr_44393_44440[(1)] = (8));

} else {
var statearr_44394_44441 = state_44391__$1;
(statearr_44394_44441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (20))){
var inst_44385 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44395_44442 = state_44391__$1;
(statearr_44395_44442[(2)] = inst_44385);

(statearr_44395_44442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (27))){
var inst_44381 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44396_44443 = state_44391__$1;
(statearr_44396_44443[(2)] = inst_44381);

(statearr_44396_44443[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (1))){
var inst_44304 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44391__$1 = state_44391;
if(cljs.core.truth_(inst_44304)){
var statearr_44397_44444 = state_44391__$1;
(statearr_44397_44444[(1)] = (2));

} else {
var statearr_44398_44445 = state_44391__$1;
(statearr_44398_44445[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (24))){
var inst_44383 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44399_44446 = state_44391__$1;
(statearr_44399_44446[(2)] = inst_44383);

(statearr_44399_44446[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (4))){
var inst_44389 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44391__$1,inst_44389);
} else {
if((state_val_44392 === (15))){
var inst_44387 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44400_44447 = state_44391__$1;
(statearr_44400_44447[(2)] = inst_44387);

(statearr_44400_44447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (21))){
var inst_44340 = (state_44391[(2)]);
var inst_44341 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44342 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44341);
var state_44391__$1 = (function (){var statearr_44401 = state_44391;
(statearr_44401[(7)] = inst_44340);

return statearr_44401;
})();
var statearr_44402_44448 = state_44391__$1;
(statearr_44402_44448[(2)] = inst_44342);

(statearr_44402_44448[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (31))){
var inst_44370 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44391__$1 = state_44391;
if(cljs.core.truth_(inst_44370)){
var statearr_44403_44449 = state_44391__$1;
(statearr_44403_44449[(1)] = (34));

} else {
var statearr_44404_44450 = state_44391__$1;
(statearr_44404_44450[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (32))){
var inst_44379 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44405_44451 = state_44391__$1;
(statearr_44405_44451[(2)] = inst_44379);

(statearr_44405_44451[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (33))){
var inst_44366 = (state_44391[(2)]);
var inst_44367 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44368 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44367);
var state_44391__$1 = (function (){var statearr_44406 = state_44391;
(statearr_44406[(8)] = inst_44366);

return statearr_44406;
})();
var statearr_44407_44452 = state_44391__$1;
(statearr_44407_44452[(2)] = inst_44368);

(statearr_44407_44452[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (13))){
var inst_44325 = figwheel.client.heads_up.clear.call(null);
var state_44391__$1 = state_44391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44391__$1,(16),inst_44325);
} else {
if((state_val_44392 === (22))){
var inst_44346 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44347 = figwheel.client.heads_up.append_warning_message.call(null,inst_44346);
var state_44391__$1 = state_44391;
var statearr_44408_44453 = state_44391__$1;
(statearr_44408_44453[(2)] = inst_44347);

(statearr_44408_44453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (36))){
var inst_44377 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44409_44454 = state_44391__$1;
(statearr_44409_44454[(2)] = inst_44377);

(statearr_44409_44454[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (29))){
var inst_44357 = (state_44391[(2)]);
var inst_44358 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44359 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44358);
var state_44391__$1 = (function (){var statearr_44410 = state_44391;
(statearr_44410[(9)] = inst_44357);

return statearr_44410;
})();
var statearr_44411_44455 = state_44391__$1;
(statearr_44411_44455[(2)] = inst_44359);

(statearr_44411_44455[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (6))){
var inst_44306 = (state_44391[(10)]);
var state_44391__$1 = state_44391;
var statearr_44412_44456 = state_44391__$1;
(statearr_44412_44456[(2)] = inst_44306);

(statearr_44412_44456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (28))){
var inst_44353 = (state_44391[(2)]);
var inst_44354 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44355 = figwheel.client.heads_up.display_warning.call(null,inst_44354);
var state_44391__$1 = (function (){var statearr_44413 = state_44391;
(statearr_44413[(11)] = inst_44353);

return statearr_44413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44391__$1,(29),inst_44355);
} else {
if((state_val_44392 === (25))){
var inst_44351 = figwheel.client.heads_up.clear.call(null);
var state_44391__$1 = state_44391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44391__$1,(28),inst_44351);
} else {
if((state_val_44392 === (34))){
var inst_44372 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44391__$1 = state_44391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44391__$1,(37),inst_44372);
} else {
if((state_val_44392 === (17))){
var inst_44331 = (state_44391[(2)]);
var inst_44332 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44333 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44332);
var state_44391__$1 = (function (){var statearr_44414 = state_44391;
(statearr_44414[(12)] = inst_44331);

return statearr_44414;
})();
var statearr_44415_44457 = state_44391__$1;
(statearr_44415_44457[(2)] = inst_44333);

(statearr_44415_44457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (3))){
var inst_44323 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44391__$1 = state_44391;
if(cljs.core.truth_(inst_44323)){
var statearr_44416_44458 = state_44391__$1;
(statearr_44416_44458[(1)] = (13));

} else {
var statearr_44417_44459 = state_44391__$1;
(statearr_44417_44459[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (12))){
var inst_44319 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44418_44460 = state_44391__$1;
(statearr_44418_44460[(2)] = inst_44319);

(statearr_44418_44460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (2))){
var inst_44306 = (state_44391[(10)]);
var inst_44306__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44391__$1 = (function (){var statearr_44419 = state_44391;
(statearr_44419[(10)] = inst_44306__$1);

return statearr_44419;
})();
if(cljs.core.truth_(inst_44306__$1)){
var statearr_44420_44461 = state_44391__$1;
(statearr_44420_44461[(1)] = (5));

} else {
var statearr_44421_44462 = state_44391__$1;
(statearr_44421_44462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (23))){
var inst_44349 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44391__$1 = state_44391;
if(cljs.core.truth_(inst_44349)){
var statearr_44422_44463 = state_44391__$1;
(statearr_44422_44463[(1)] = (25));

} else {
var statearr_44423_44464 = state_44391__$1;
(statearr_44423_44464[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (35))){
var state_44391__$1 = state_44391;
var statearr_44424_44465 = state_44391__$1;
(statearr_44424_44465[(2)] = null);

(statearr_44424_44465[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (19))){
var inst_44344 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44391__$1 = state_44391;
if(cljs.core.truth_(inst_44344)){
var statearr_44425_44466 = state_44391__$1;
(statearr_44425_44466[(1)] = (22));

} else {
var statearr_44426_44467 = state_44391__$1;
(statearr_44426_44467[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (11))){
var inst_44315 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44427_44468 = state_44391__$1;
(statearr_44427_44468[(2)] = inst_44315);

(statearr_44427_44468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (9))){
var inst_44317 = figwheel.client.heads_up.clear.call(null);
var state_44391__$1 = state_44391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44391__$1,(12),inst_44317);
} else {
if((state_val_44392 === (5))){
var inst_44308 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44391__$1 = state_44391;
var statearr_44428_44469 = state_44391__$1;
(statearr_44428_44469[(2)] = inst_44308);

(statearr_44428_44469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (14))){
var inst_44335 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44391__$1 = state_44391;
if(cljs.core.truth_(inst_44335)){
var statearr_44429_44470 = state_44391__$1;
(statearr_44429_44470[(1)] = (18));

} else {
var statearr_44430_44471 = state_44391__$1;
(statearr_44430_44471[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (26))){
var inst_44361 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44391__$1 = state_44391;
if(cljs.core.truth_(inst_44361)){
var statearr_44431_44472 = state_44391__$1;
(statearr_44431_44472[(1)] = (30));

} else {
var statearr_44432_44473 = state_44391__$1;
(statearr_44432_44473[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (16))){
var inst_44327 = (state_44391[(2)]);
var inst_44328 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44329 = figwheel.client.heads_up.display_exception.call(null,inst_44328);
var state_44391__$1 = (function (){var statearr_44433 = state_44391;
(statearr_44433[(13)] = inst_44327);

return statearr_44433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44391__$1,(17),inst_44329);
} else {
if((state_val_44392 === (30))){
var inst_44363 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44364 = figwheel.client.heads_up.display_warning.call(null,inst_44363);
var state_44391__$1 = state_44391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44391__$1,(33),inst_44364);
} else {
if((state_val_44392 === (10))){
var inst_44321 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44434_44474 = state_44391__$1;
(statearr_44434_44474[(2)] = inst_44321);

(statearr_44434_44474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (18))){
var inst_44337 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44338 = figwheel.client.heads_up.display_exception.call(null,inst_44337);
var state_44391__$1 = state_44391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44391__$1,(21),inst_44338);
} else {
if((state_val_44392 === (37))){
var inst_44374 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44435_44475 = state_44391__$1;
(statearr_44435_44475[(2)] = inst_44374);

(statearr_44435_44475[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (8))){
var inst_44313 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44391__$1 = state_44391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44391__$1,(11),inst_44313);
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
});})(c__40843__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__40755__auto__,c__40843__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto____0 = (function (){
var statearr_44436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44436[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto__);

(statearr_44436[(1)] = (1));

return statearr_44436;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto____1 = (function (state_44391){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_44391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e44437){if((e44437 instanceof Object)){
var ex__40759__auto__ = e44437;
var statearr_44438_44476 = state_44391;
(statearr_44438_44476[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44477 = state_44391;
state_44391 = G__44477;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto__ = function(state_44391){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto____1.call(this,state_44391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto__,msg_hist,msg_names,msg))
})();
var state__40845__auto__ = (function (){var statearr_44439 = f__40844__auto__.call(null);
(statearr_44439[(6)] = c__40843__auto__);

return statearr_44439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto__,msg_hist,msg_names,msg))
);

return c__40843__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40843__auto___44506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___44506,ch){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___44506,ch){
return (function (state_44492){
var state_val_44493 = (state_44492[(1)]);
if((state_val_44493 === (1))){
var state_44492__$1 = state_44492;
var statearr_44494_44507 = state_44492__$1;
(statearr_44494_44507[(2)] = null);

(statearr_44494_44507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (2))){
var state_44492__$1 = state_44492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44492__$1,(4),ch);
} else {
if((state_val_44493 === (3))){
var inst_44490 = (state_44492[(2)]);
var state_44492__$1 = state_44492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44492__$1,inst_44490);
} else {
if((state_val_44493 === (4))){
var inst_44480 = (state_44492[(7)]);
var inst_44480__$1 = (state_44492[(2)]);
var state_44492__$1 = (function (){var statearr_44495 = state_44492;
(statearr_44495[(7)] = inst_44480__$1);

return statearr_44495;
})();
if(cljs.core.truth_(inst_44480__$1)){
var statearr_44496_44508 = state_44492__$1;
(statearr_44496_44508[(1)] = (5));

} else {
var statearr_44497_44509 = state_44492__$1;
(statearr_44497_44509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (5))){
var inst_44480 = (state_44492[(7)]);
var inst_44482 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44480);
var state_44492__$1 = state_44492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44492__$1,(8),inst_44482);
} else {
if((state_val_44493 === (6))){
var state_44492__$1 = state_44492;
var statearr_44498_44510 = state_44492__$1;
(statearr_44498_44510[(2)] = null);

(statearr_44498_44510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (7))){
var inst_44488 = (state_44492[(2)]);
var state_44492__$1 = state_44492;
var statearr_44499_44511 = state_44492__$1;
(statearr_44499_44511[(2)] = inst_44488);

(statearr_44499_44511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (8))){
var inst_44484 = (state_44492[(2)]);
var state_44492__$1 = (function (){var statearr_44500 = state_44492;
(statearr_44500[(8)] = inst_44484);

return statearr_44500;
})();
var statearr_44501_44512 = state_44492__$1;
(statearr_44501_44512[(2)] = null);

(statearr_44501_44512[(1)] = (2));


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
});})(c__40843__auto___44506,ch))
;
return ((function (switch__40755__auto__,c__40843__auto___44506,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40756__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40756__auto____0 = (function (){
var statearr_44502 = [null,null,null,null,null,null,null,null,null];
(statearr_44502[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40756__auto__);

(statearr_44502[(1)] = (1));

return statearr_44502;
});
var figwheel$client$heads_up_plugin_$_state_machine__40756__auto____1 = (function (state_44492){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_44492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e44503){if((e44503 instanceof Object)){
var ex__40759__auto__ = e44503;
var statearr_44504_44513 = state_44492;
(statearr_44504_44513[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44514 = state_44492;
state_44492 = G__44514;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40756__auto__ = function(state_44492){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40756__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40756__auto____1.call(this,state_44492);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40756__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40756__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___44506,ch))
})();
var state__40845__auto__ = (function (){var statearr_44505 = f__40844__auto__.call(null);
(statearr_44505[(6)] = c__40843__auto___44506);

return statearr_44505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___44506,ch))
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
var c__40843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto__){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto__){
return (function (state_44520){
var state_val_44521 = (state_44520[(1)]);
if((state_val_44521 === (1))){
var inst_44515 = cljs.core.async.timeout.call(null,(3000));
var state_44520__$1 = state_44520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44520__$1,(2),inst_44515);
} else {
if((state_val_44521 === (2))){
var inst_44517 = (state_44520[(2)]);
var inst_44518 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44520__$1 = (function (){var statearr_44522 = state_44520;
(statearr_44522[(7)] = inst_44517);

return statearr_44522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44520__$1,inst_44518);
} else {
return null;
}
}
});})(c__40843__auto__))
;
return ((function (switch__40755__auto__,c__40843__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__40756__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__40756__auto____0 = (function (){
var statearr_44523 = [null,null,null,null,null,null,null,null];
(statearr_44523[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40756__auto__);

(statearr_44523[(1)] = (1));

return statearr_44523;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40756__auto____1 = (function (state_44520){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_44520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e44524){if((e44524 instanceof Object)){
var ex__40759__auto__ = e44524;
var statearr_44525_44527 = state_44520;
(statearr_44525_44527[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44528 = state_44520;
state_44520 = G__44528;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40756__auto__ = function(state_44520){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40756__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40756__auto____1.call(this,state_44520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40756__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40756__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto__))
})();
var state__40845__auto__ = (function (){var statearr_44526 = f__40844__auto__.call(null);
(statearr_44526[(6)] = c__40843__auto__);

return statearr_44526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto__))
);

return c__40843__auto__;
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
var c__40843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto__,figwheel_version,temp__4657__auto__){
return (function (state_44535){
var state_val_44536 = (state_44535[(1)]);
if((state_val_44536 === (1))){
var inst_44529 = cljs.core.async.timeout.call(null,(2000));
var state_44535__$1 = state_44535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44535__$1,(2),inst_44529);
} else {
if((state_val_44536 === (2))){
var inst_44531 = (state_44535[(2)]);
var inst_44532 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_44533 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44532);
var state_44535__$1 = (function (){var statearr_44537 = state_44535;
(statearr_44537[(7)] = inst_44531);

return statearr_44537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44535__$1,inst_44533);
} else {
return null;
}
}
});})(c__40843__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__40755__auto__,c__40843__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto____0 = (function (){
var statearr_44538 = [null,null,null,null,null,null,null,null];
(statearr_44538[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto__);

(statearr_44538[(1)] = (1));

return statearr_44538;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto____1 = (function (state_44535){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_44535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e44539){if((e44539 instanceof Object)){
var ex__40759__auto__ = e44539;
var statearr_44540_44542 = state_44535;
(statearr_44540_44542[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44543 = state_44535;
state_44535 = G__44543;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto__ = function(state_44535){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto____1.call(this,state_44535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto__,figwheel_version,temp__4657__auto__))
})();
var state__40845__auto__ = (function (){var statearr_44541 = f__40844__auto__.call(null);
(statearr_44541[(6)] = c__40843__auto__);

return statearr_44541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto__,figwheel_version,temp__4657__auto__))
);

return c__40843__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44544){
var map__44545 = p__44544;
var map__44545__$1 = ((((!((map__44545 == null)))?((((map__44545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44545):map__44545);
var file = cljs.core.get.call(null,map__44545__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44545__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44545__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44547 = "";
var G__44547__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44547),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__44547);
var G__44547__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44547__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44547__$1);
if(cljs.core.truth_((function (){var and__38279__auto__ = line;
if(cljs.core.truth_(and__38279__auto__)){
return column;
} else {
return and__38279__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44547__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__44547__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44548){
var map__44549 = p__44548;
var map__44549__$1 = ((((!((map__44549 == null)))?((((map__44549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44549):map__44549);
var ed = map__44549__$1;
var formatted_exception = cljs.core.get.call(null,map__44549__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44549__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44549__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44551_44555 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44552_44556 = null;
var count__44553_44557 = (0);
var i__44554_44558 = (0);
while(true){
if((i__44554_44558 < count__44553_44557)){
var msg_44559 = cljs.core._nth.call(null,chunk__44552_44556,i__44554_44558);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44559);

var G__44560 = seq__44551_44555;
var G__44561 = chunk__44552_44556;
var G__44562 = count__44553_44557;
var G__44563 = (i__44554_44558 + (1));
seq__44551_44555 = G__44560;
chunk__44552_44556 = G__44561;
count__44553_44557 = G__44562;
i__44554_44558 = G__44563;
continue;
} else {
var temp__4657__auto___44564 = cljs.core.seq.call(null,seq__44551_44555);
if(temp__4657__auto___44564){
var seq__44551_44565__$1 = temp__4657__auto___44564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44551_44565__$1)){
var c__39130__auto___44566 = cljs.core.chunk_first.call(null,seq__44551_44565__$1);
var G__44567 = cljs.core.chunk_rest.call(null,seq__44551_44565__$1);
var G__44568 = c__39130__auto___44566;
var G__44569 = cljs.core.count.call(null,c__39130__auto___44566);
var G__44570 = (0);
seq__44551_44555 = G__44567;
chunk__44552_44556 = G__44568;
count__44553_44557 = G__44569;
i__44554_44558 = G__44570;
continue;
} else {
var msg_44571 = cljs.core.first.call(null,seq__44551_44565__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44571);

var G__44572 = cljs.core.next.call(null,seq__44551_44565__$1);
var G__44573 = null;
var G__44574 = (0);
var G__44575 = (0);
seq__44551_44555 = G__44572;
chunk__44552_44556 = G__44573;
count__44553_44557 = G__44574;
i__44554_44558 = G__44575;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44576){
var map__44577 = p__44576;
var map__44577__$1 = ((((!((map__44577 == null)))?((((map__44577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44577):map__44577);
var w = map__44577__$1;
var message = cljs.core.get.call(null,map__44577__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__38279__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__38279__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__38279__auto__;
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
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44579 = cljs.core.seq.call(null,plugins);
var chunk__44580 = null;
var count__44581 = (0);
var i__44582 = (0);
while(true){
if((i__44582 < count__44581)){
var vec__44583 = cljs.core._nth.call(null,chunk__44580,i__44582);
var k = cljs.core.nth.call(null,vec__44583,(0),null);
var plugin = cljs.core.nth.call(null,vec__44583,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44589 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44579,chunk__44580,count__44581,i__44582,pl_44589,vec__44583,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44589.call(null,msg_hist);
});})(seq__44579,chunk__44580,count__44581,i__44582,pl_44589,vec__44583,k,plugin))
);
} else {
}

var G__44590 = seq__44579;
var G__44591 = chunk__44580;
var G__44592 = count__44581;
var G__44593 = (i__44582 + (1));
seq__44579 = G__44590;
chunk__44580 = G__44591;
count__44581 = G__44592;
i__44582 = G__44593;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44579);
if(temp__4657__auto__){
var seq__44579__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44579__$1)){
var c__39130__auto__ = cljs.core.chunk_first.call(null,seq__44579__$1);
var G__44594 = cljs.core.chunk_rest.call(null,seq__44579__$1);
var G__44595 = c__39130__auto__;
var G__44596 = cljs.core.count.call(null,c__39130__auto__);
var G__44597 = (0);
seq__44579 = G__44594;
chunk__44580 = G__44595;
count__44581 = G__44596;
i__44582 = G__44597;
continue;
} else {
var vec__44586 = cljs.core.first.call(null,seq__44579__$1);
var k = cljs.core.nth.call(null,vec__44586,(0),null);
var plugin = cljs.core.nth.call(null,vec__44586,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44598 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44579,chunk__44580,count__44581,i__44582,pl_44598,vec__44586,k,plugin,seq__44579__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44598.call(null,msg_hist);
});})(seq__44579,chunk__44580,count__44581,i__44582,pl_44598,vec__44586,k,plugin,seq__44579__$1,temp__4657__auto__))
);
} else {
}

var G__44599 = cljs.core.next.call(null,seq__44579__$1);
var G__44600 = null;
var G__44601 = (0);
var G__44602 = (0);
seq__44579 = G__44599;
chunk__44580 = G__44600;
count__44581 = G__44601;
i__44582 = G__44602;
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
var G__44604 = arguments.length;
switch (G__44604) {
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

var seq__44605_44610 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44606_44611 = null;
var count__44607_44612 = (0);
var i__44608_44613 = (0);
while(true){
if((i__44608_44613 < count__44607_44612)){
var msg_44614 = cljs.core._nth.call(null,chunk__44606_44611,i__44608_44613);
figwheel.client.socket.handle_incoming_message.call(null,msg_44614);

var G__44615 = seq__44605_44610;
var G__44616 = chunk__44606_44611;
var G__44617 = count__44607_44612;
var G__44618 = (i__44608_44613 + (1));
seq__44605_44610 = G__44615;
chunk__44606_44611 = G__44616;
count__44607_44612 = G__44617;
i__44608_44613 = G__44618;
continue;
} else {
var temp__4657__auto___44619 = cljs.core.seq.call(null,seq__44605_44610);
if(temp__4657__auto___44619){
var seq__44605_44620__$1 = temp__4657__auto___44619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44605_44620__$1)){
var c__39130__auto___44621 = cljs.core.chunk_first.call(null,seq__44605_44620__$1);
var G__44622 = cljs.core.chunk_rest.call(null,seq__44605_44620__$1);
var G__44623 = c__39130__auto___44621;
var G__44624 = cljs.core.count.call(null,c__39130__auto___44621);
var G__44625 = (0);
seq__44605_44610 = G__44622;
chunk__44606_44611 = G__44623;
count__44607_44612 = G__44624;
i__44608_44613 = G__44625;
continue;
} else {
var msg_44626 = cljs.core.first.call(null,seq__44605_44620__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44626);

var G__44627 = cljs.core.next.call(null,seq__44605_44620__$1);
var G__44628 = null;
var G__44629 = (0);
var G__44630 = (0);
seq__44605_44610 = G__44627;
chunk__44606_44611 = G__44628;
count__44607_44612 = G__44629;
i__44608_44613 = G__44630;
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
var args__39469__auto__ = [];
var len__39462__auto___44635 = arguments.length;
var i__39463__auto___44636 = (0);
while(true){
if((i__39463__auto___44636 < len__39462__auto___44635)){
args__39469__auto__.push((arguments[i__39463__auto___44636]));

var G__44637 = (i__39463__auto___44636 + (1));
i__39463__auto___44636 = G__44637;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((0) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__39470__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44632){
var map__44633 = p__44632;
var map__44633__$1 = ((((!((map__44633 == null)))?((((map__44633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44633):map__44633);
var opts = map__44633__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44631){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44631));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44638){if((e44638 instanceof Error)){
var e = e44638;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44638;

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
return (function (p__44639){
var map__44640 = p__44639;
var map__44640__$1 = ((((!((map__44640 == null)))?((((map__44640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44640):map__44640);
var msg_name = cljs.core.get.call(null,map__44640__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1517176492746
