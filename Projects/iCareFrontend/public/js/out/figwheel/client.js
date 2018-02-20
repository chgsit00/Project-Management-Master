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
}catch (e36208){if((e36208 instanceof Error)){
var e = e36208;
return "Error: Unable to stringify";
} else {
throw e36208;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36211 = arguments.length;
switch (G__36211) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36209_SHARP_){
if(typeof p1__36209_SHARP_ === 'string'){
return p1__36209_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36209_SHARP_);
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
var args__29229__auto__ = [];
var len__29222__auto___36214 = arguments.length;
var i__29223__auto___36215 = (0);
while(true){
if((i__29223__auto___36215 < len__29222__auto___36214)){
args__29229__auto__.push((arguments[i__29223__auto___36215]));

var G__36216 = (i__29223__auto___36215 + (1));
i__29223__auto___36215 = G__36216;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36213){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36213));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29229__auto__ = [];
var len__29222__auto___36218 = arguments.length;
var i__29223__auto___36219 = (0);
while(true){
if((i__29223__auto___36219 < len__29222__auto___36218)){
args__29229__auto__.push((arguments[i__29223__auto___36219]));

var G__36220 = (i__29223__auto___36219 + (1));
i__29223__auto___36219 = G__36220;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36217){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36217));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36221){
var map__36222 = p__36221;
var map__36222__$1 = ((((!((map__36222 == null)))?((((map__36222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36222):map__36222);
var message = cljs.core.get.call(null,map__36222__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36222__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28051__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28039__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28039__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28039__auto__;
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
var c__31314__auto___36301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___36301,ch){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___36301,ch){
return (function (state_36273){
var state_val_36274 = (state_36273[(1)]);
if((state_val_36274 === (7))){
var inst_36269 = (state_36273[(2)]);
var state_36273__$1 = state_36273;
var statearr_36275_36302 = state_36273__$1;
(statearr_36275_36302[(2)] = inst_36269);

(statearr_36275_36302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (1))){
var state_36273__$1 = state_36273;
var statearr_36276_36303 = state_36273__$1;
(statearr_36276_36303[(2)] = null);

(statearr_36276_36303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (4))){
var inst_36226 = (state_36273[(7)]);
var inst_36226__$1 = (state_36273[(2)]);
var state_36273__$1 = (function (){var statearr_36277 = state_36273;
(statearr_36277[(7)] = inst_36226__$1);

return statearr_36277;
})();
if(cljs.core.truth_(inst_36226__$1)){
var statearr_36278_36304 = state_36273__$1;
(statearr_36278_36304[(1)] = (5));

} else {
var statearr_36279_36305 = state_36273__$1;
(statearr_36279_36305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (15))){
var inst_36233 = (state_36273[(8)]);
var inst_36248 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36233);
var inst_36249 = cljs.core.first.call(null,inst_36248);
var inst_36250 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36249);
var inst_36251 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36250)].join('');
var inst_36252 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36251);
var state_36273__$1 = state_36273;
var statearr_36280_36306 = state_36273__$1;
(statearr_36280_36306[(2)] = inst_36252);

(statearr_36280_36306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (13))){
var inst_36257 = (state_36273[(2)]);
var state_36273__$1 = state_36273;
var statearr_36281_36307 = state_36273__$1;
(statearr_36281_36307[(2)] = inst_36257);

(statearr_36281_36307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (6))){
var state_36273__$1 = state_36273;
var statearr_36282_36308 = state_36273__$1;
(statearr_36282_36308[(2)] = null);

(statearr_36282_36308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (17))){
var inst_36255 = (state_36273[(2)]);
var state_36273__$1 = state_36273;
var statearr_36283_36309 = state_36273__$1;
(statearr_36283_36309[(2)] = inst_36255);

(statearr_36283_36309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (3))){
var inst_36271 = (state_36273[(2)]);
var state_36273__$1 = state_36273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36273__$1,inst_36271);
} else {
if((state_val_36274 === (12))){
var inst_36232 = (state_36273[(9)]);
var inst_36246 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36232,opts);
var state_36273__$1 = state_36273;
if(cljs.core.truth_(inst_36246)){
var statearr_36284_36310 = state_36273__$1;
(statearr_36284_36310[(1)] = (15));

} else {
var statearr_36285_36311 = state_36273__$1;
(statearr_36285_36311[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (2))){
var state_36273__$1 = state_36273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36273__$1,(4),ch);
} else {
if((state_val_36274 === (11))){
var inst_36233 = (state_36273[(8)]);
var inst_36238 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36239 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36233);
var inst_36240 = cljs.core.async.timeout.call(null,(1000));
var inst_36241 = [inst_36239,inst_36240];
var inst_36242 = (new cljs.core.PersistentVector(null,2,(5),inst_36238,inst_36241,null));
var state_36273__$1 = state_36273;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36273__$1,(14),inst_36242);
} else {
if((state_val_36274 === (9))){
var inst_36233 = (state_36273[(8)]);
var inst_36259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36260 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36233);
var inst_36261 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36260);
var inst_36262 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36261)].join('');
var inst_36263 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36262);
var state_36273__$1 = (function (){var statearr_36286 = state_36273;
(statearr_36286[(10)] = inst_36259);

return statearr_36286;
})();
var statearr_36287_36312 = state_36273__$1;
(statearr_36287_36312[(2)] = inst_36263);

(statearr_36287_36312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (5))){
var inst_36226 = (state_36273[(7)]);
var inst_36228 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36229 = (new cljs.core.PersistentArrayMap(null,2,inst_36228,null));
var inst_36230 = (new cljs.core.PersistentHashSet(null,inst_36229,null));
var inst_36231 = figwheel.client.focus_msgs.call(null,inst_36230,inst_36226);
var inst_36232 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36231);
var inst_36233 = cljs.core.first.call(null,inst_36231);
var inst_36234 = figwheel.client.autoload_QMARK_.call(null);
var state_36273__$1 = (function (){var statearr_36288 = state_36273;
(statearr_36288[(8)] = inst_36233);

(statearr_36288[(9)] = inst_36232);

return statearr_36288;
})();
if(cljs.core.truth_(inst_36234)){
var statearr_36289_36313 = state_36273__$1;
(statearr_36289_36313[(1)] = (8));

} else {
var statearr_36290_36314 = state_36273__$1;
(statearr_36290_36314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (14))){
var inst_36244 = (state_36273[(2)]);
var state_36273__$1 = state_36273;
var statearr_36291_36315 = state_36273__$1;
(statearr_36291_36315[(2)] = inst_36244);

(statearr_36291_36315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (16))){
var state_36273__$1 = state_36273;
var statearr_36292_36316 = state_36273__$1;
(statearr_36292_36316[(2)] = null);

(statearr_36292_36316[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (10))){
var inst_36265 = (state_36273[(2)]);
var state_36273__$1 = (function (){var statearr_36293 = state_36273;
(statearr_36293[(11)] = inst_36265);

return statearr_36293;
})();
var statearr_36294_36317 = state_36273__$1;
(statearr_36294_36317[(2)] = null);

(statearr_36294_36317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36274 === (8))){
var inst_36232 = (state_36273[(9)]);
var inst_36236 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36232,opts);
var state_36273__$1 = state_36273;
if(cljs.core.truth_(inst_36236)){
var statearr_36295_36318 = state_36273__$1;
(statearr_36295_36318[(1)] = (11));

} else {
var statearr_36296_36319 = state_36273__$1;
(statearr_36296_36319[(1)] = (12));

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
});})(c__31314__auto___36301,ch))
;
return ((function (switch__31226__auto__,c__31314__auto___36301,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31227__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31227__auto____0 = (function (){
var statearr_36297 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36297[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31227__auto__);

(statearr_36297[(1)] = (1));

return statearr_36297;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31227__auto____1 = (function (state_36273){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_36273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e36298){if((e36298 instanceof Object)){
var ex__31230__auto__ = e36298;
var statearr_36299_36320 = state_36273;
(statearr_36299_36320[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36321 = state_36273;
state_36273 = G__36321;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31227__auto__ = function(state_36273){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31227__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31227__auto____1.call(this,state_36273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31227__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31227__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___36301,ch))
})();
var state__31316__auto__ = (function (){var statearr_36300 = f__31315__auto__.call(null);
(statearr_36300[(6)] = c__31314__auto___36301);

return statearr_36300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___36301,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36322_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36322_SHARP_));
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
var base_path_36324 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36324){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36323){if((e36323 instanceof Error)){
var e = e36323;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36324], null));
} else {
var e = e36323;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36324))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36325){
var map__36326 = p__36325;
var map__36326__$1 = ((((!((map__36326 == null)))?((((map__36326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36326):map__36326);
var opts = map__36326__$1;
var build_id = cljs.core.get.call(null,map__36326__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36326,map__36326__$1,opts,build_id){
return (function (p__36328){
var vec__36329 = p__36328;
var seq__36330 = cljs.core.seq.call(null,vec__36329);
var first__36331 = cljs.core.first.call(null,seq__36330);
var seq__36330__$1 = cljs.core.next.call(null,seq__36330);
var map__36332 = first__36331;
var map__36332__$1 = ((((!((map__36332 == null)))?((((map__36332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36332):map__36332);
var msg = map__36332__$1;
var msg_name = cljs.core.get.call(null,map__36332__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36330__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36329,seq__36330,first__36331,seq__36330__$1,map__36332,map__36332__$1,msg,msg_name,_,map__36326,map__36326__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36329,seq__36330,first__36331,seq__36330__$1,map__36332,map__36332__$1,msg,msg_name,_,map__36326,map__36326__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36326,map__36326__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36334){
var vec__36335 = p__36334;
var seq__36336 = cljs.core.seq.call(null,vec__36335);
var first__36337 = cljs.core.first.call(null,seq__36336);
var seq__36336__$1 = cljs.core.next.call(null,seq__36336);
var map__36338 = first__36337;
var map__36338__$1 = ((((!((map__36338 == null)))?((((map__36338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36338):map__36338);
var msg = map__36338__$1;
var msg_name = cljs.core.get.call(null,map__36338__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36336__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36340){
var map__36341 = p__36340;
var map__36341__$1 = ((((!((map__36341 == null)))?((((map__36341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36341):map__36341);
var on_compile_warning = cljs.core.get.call(null,map__36341__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36341__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36341,map__36341__$1,on_compile_warning,on_compile_fail){
return (function (p__36343){
var vec__36344 = p__36343;
var seq__36345 = cljs.core.seq.call(null,vec__36344);
var first__36346 = cljs.core.first.call(null,seq__36345);
var seq__36345__$1 = cljs.core.next.call(null,seq__36345);
var map__36347 = first__36346;
var map__36347__$1 = ((((!((map__36347 == null)))?((((map__36347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36347):map__36347);
var msg = map__36347__$1;
var msg_name = cljs.core.get.call(null,map__36347__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36345__$1;
var pred__36349 = cljs.core._EQ_;
var expr__36350 = msg_name;
if(cljs.core.truth_(pred__36349.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36350))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36349.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36350))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36341,map__36341__$1,on_compile_warning,on_compile_fail))
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
var c__31314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto__,msg_hist,msg_names,msg){
return (function (state_36439){
var state_val_36440 = (state_36439[(1)]);
if((state_val_36440 === (7))){
var inst_36359 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36359)){
var statearr_36441_36488 = state_36439__$1;
(statearr_36441_36488[(1)] = (8));

} else {
var statearr_36442_36489 = state_36439__$1;
(statearr_36442_36489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (20))){
var inst_36433 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36443_36490 = state_36439__$1;
(statearr_36443_36490[(2)] = inst_36433);

(statearr_36443_36490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (27))){
var inst_36429 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36444_36491 = state_36439__$1;
(statearr_36444_36491[(2)] = inst_36429);

(statearr_36444_36491[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (1))){
var inst_36352 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36352)){
var statearr_36445_36492 = state_36439__$1;
(statearr_36445_36492[(1)] = (2));

} else {
var statearr_36446_36493 = state_36439__$1;
(statearr_36446_36493[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (24))){
var inst_36431 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36447_36494 = state_36439__$1;
(statearr_36447_36494[(2)] = inst_36431);

(statearr_36447_36494[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (4))){
var inst_36437 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36439__$1,inst_36437);
} else {
if((state_val_36440 === (15))){
var inst_36435 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36448_36495 = state_36439__$1;
(statearr_36448_36495[(2)] = inst_36435);

(statearr_36448_36495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (21))){
var inst_36388 = (state_36439[(2)]);
var inst_36389 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36390 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36389);
var state_36439__$1 = (function (){var statearr_36449 = state_36439;
(statearr_36449[(7)] = inst_36388);

return statearr_36449;
})();
var statearr_36450_36496 = state_36439__$1;
(statearr_36450_36496[(2)] = inst_36390);

(statearr_36450_36496[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (31))){
var inst_36418 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36418)){
var statearr_36451_36497 = state_36439__$1;
(statearr_36451_36497[(1)] = (34));

} else {
var statearr_36452_36498 = state_36439__$1;
(statearr_36452_36498[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (32))){
var inst_36427 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36453_36499 = state_36439__$1;
(statearr_36453_36499[(2)] = inst_36427);

(statearr_36453_36499[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (33))){
var inst_36414 = (state_36439[(2)]);
var inst_36415 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36416 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36415);
var state_36439__$1 = (function (){var statearr_36454 = state_36439;
(statearr_36454[(8)] = inst_36414);

return statearr_36454;
})();
var statearr_36455_36500 = state_36439__$1;
(statearr_36455_36500[(2)] = inst_36416);

(statearr_36455_36500[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (13))){
var inst_36373 = figwheel.client.heads_up.clear.call(null);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(16),inst_36373);
} else {
if((state_val_36440 === (22))){
var inst_36394 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36395 = figwheel.client.heads_up.append_warning_message.call(null,inst_36394);
var state_36439__$1 = state_36439;
var statearr_36456_36501 = state_36439__$1;
(statearr_36456_36501[(2)] = inst_36395);

(statearr_36456_36501[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (36))){
var inst_36425 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36457_36502 = state_36439__$1;
(statearr_36457_36502[(2)] = inst_36425);

(statearr_36457_36502[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (29))){
var inst_36405 = (state_36439[(2)]);
var inst_36406 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36407 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36406);
var state_36439__$1 = (function (){var statearr_36458 = state_36439;
(statearr_36458[(9)] = inst_36405);

return statearr_36458;
})();
var statearr_36459_36503 = state_36439__$1;
(statearr_36459_36503[(2)] = inst_36407);

(statearr_36459_36503[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (6))){
var inst_36354 = (state_36439[(10)]);
var state_36439__$1 = state_36439;
var statearr_36460_36504 = state_36439__$1;
(statearr_36460_36504[(2)] = inst_36354);

(statearr_36460_36504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (28))){
var inst_36401 = (state_36439[(2)]);
var inst_36402 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36403 = figwheel.client.heads_up.display_warning.call(null,inst_36402);
var state_36439__$1 = (function (){var statearr_36461 = state_36439;
(statearr_36461[(11)] = inst_36401);

return statearr_36461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(29),inst_36403);
} else {
if((state_val_36440 === (25))){
var inst_36399 = figwheel.client.heads_up.clear.call(null);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(28),inst_36399);
} else {
if((state_val_36440 === (34))){
var inst_36420 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(37),inst_36420);
} else {
if((state_val_36440 === (17))){
var inst_36379 = (state_36439[(2)]);
var inst_36380 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36381 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36380);
var state_36439__$1 = (function (){var statearr_36462 = state_36439;
(statearr_36462[(12)] = inst_36379);

return statearr_36462;
})();
var statearr_36463_36505 = state_36439__$1;
(statearr_36463_36505[(2)] = inst_36381);

(statearr_36463_36505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (3))){
var inst_36371 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36371)){
var statearr_36464_36506 = state_36439__$1;
(statearr_36464_36506[(1)] = (13));

} else {
var statearr_36465_36507 = state_36439__$1;
(statearr_36465_36507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (12))){
var inst_36367 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36466_36508 = state_36439__$1;
(statearr_36466_36508[(2)] = inst_36367);

(statearr_36466_36508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (2))){
var inst_36354 = (state_36439[(10)]);
var inst_36354__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36439__$1 = (function (){var statearr_36467 = state_36439;
(statearr_36467[(10)] = inst_36354__$1);

return statearr_36467;
})();
if(cljs.core.truth_(inst_36354__$1)){
var statearr_36468_36509 = state_36439__$1;
(statearr_36468_36509[(1)] = (5));

} else {
var statearr_36469_36510 = state_36439__$1;
(statearr_36469_36510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (23))){
var inst_36397 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36397)){
var statearr_36470_36511 = state_36439__$1;
(statearr_36470_36511[(1)] = (25));

} else {
var statearr_36471_36512 = state_36439__$1;
(statearr_36471_36512[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (35))){
var state_36439__$1 = state_36439;
var statearr_36472_36513 = state_36439__$1;
(statearr_36472_36513[(2)] = null);

(statearr_36472_36513[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (19))){
var inst_36392 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36392)){
var statearr_36473_36514 = state_36439__$1;
(statearr_36473_36514[(1)] = (22));

} else {
var statearr_36474_36515 = state_36439__$1;
(statearr_36474_36515[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (11))){
var inst_36363 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36475_36516 = state_36439__$1;
(statearr_36475_36516[(2)] = inst_36363);

(statearr_36475_36516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (9))){
var inst_36365 = figwheel.client.heads_up.clear.call(null);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(12),inst_36365);
} else {
if((state_val_36440 === (5))){
var inst_36356 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36439__$1 = state_36439;
var statearr_36476_36517 = state_36439__$1;
(statearr_36476_36517[(2)] = inst_36356);

(statearr_36476_36517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (14))){
var inst_36383 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36383)){
var statearr_36477_36518 = state_36439__$1;
(statearr_36477_36518[(1)] = (18));

} else {
var statearr_36478_36519 = state_36439__$1;
(statearr_36478_36519[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (26))){
var inst_36409 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36409)){
var statearr_36479_36520 = state_36439__$1;
(statearr_36479_36520[(1)] = (30));

} else {
var statearr_36480_36521 = state_36439__$1;
(statearr_36480_36521[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (16))){
var inst_36375 = (state_36439[(2)]);
var inst_36376 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36377 = figwheel.client.heads_up.display_exception.call(null,inst_36376);
var state_36439__$1 = (function (){var statearr_36481 = state_36439;
(statearr_36481[(13)] = inst_36375);

return statearr_36481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(17),inst_36377);
} else {
if((state_val_36440 === (30))){
var inst_36411 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36412 = figwheel.client.heads_up.display_warning.call(null,inst_36411);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(33),inst_36412);
} else {
if((state_val_36440 === (10))){
var inst_36369 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36482_36522 = state_36439__$1;
(statearr_36482_36522[(2)] = inst_36369);

(statearr_36482_36522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (18))){
var inst_36385 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36386 = figwheel.client.heads_up.display_exception.call(null,inst_36385);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(21),inst_36386);
} else {
if((state_val_36440 === (37))){
var inst_36422 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36483_36523 = state_36439__$1;
(statearr_36483_36523[(2)] = inst_36422);

(statearr_36483_36523[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (8))){
var inst_36361 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(11),inst_36361);
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
});})(c__31314__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31226__auto__,c__31314__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto____0 = (function (){
var statearr_36484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36484[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto__);

(statearr_36484[(1)] = (1));

return statearr_36484;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto____1 = (function (state_36439){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_36439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e36485){if((e36485 instanceof Object)){
var ex__31230__auto__ = e36485;
var statearr_36486_36524 = state_36439;
(statearr_36486_36524[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36525 = state_36439;
state_36439 = G__36525;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto__ = function(state_36439){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto____1.call(this,state_36439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto__,msg_hist,msg_names,msg))
})();
var state__31316__auto__ = (function (){var statearr_36487 = f__31315__auto__.call(null);
(statearr_36487[(6)] = c__31314__auto__);

return statearr_36487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto__,msg_hist,msg_names,msg))
);

return c__31314__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31314__auto___36554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___36554,ch){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___36554,ch){
return (function (state_36540){
var state_val_36541 = (state_36540[(1)]);
if((state_val_36541 === (1))){
var state_36540__$1 = state_36540;
var statearr_36542_36555 = state_36540__$1;
(statearr_36542_36555[(2)] = null);

(statearr_36542_36555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (2))){
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36540__$1,(4),ch);
} else {
if((state_val_36541 === (3))){
var inst_36538 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36540__$1,inst_36538);
} else {
if((state_val_36541 === (4))){
var inst_36528 = (state_36540[(7)]);
var inst_36528__$1 = (state_36540[(2)]);
var state_36540__$1 = (function (){var statearr_36543 = state_36540;
(statearr_36543[(7)] = inst_36528__$1);

return statearr_36543;
})();
if(cljs.core.truth_(inst_36528__$1)){
var statearr_36544_36556 = state_36540__$1;
(statearr_36544_36556[(1)] = (5));

} else {
var statearr_36545_36557 = state_36540__$1;
(statearr_36545_36557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (5))){
var inst_36528 = (state_36540[(7)]);
var inst_36530 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36528);
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36540__$1,(8),inst_36530);
} else {
if((state_val_36541 === (6))){
var state_36540__$1 = state_36540;
var statearr_36546_36558 = state_36540__$1;
(statearr_36546_36558[(2)] = null);

(statearr_36546_36558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (7))){
var inst_36536 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36547_36559 = state_36540__$1;
(statearr_36547_36559[(2)] = inst_36536);

(statearr_36547_36559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (8))){
var inst_36532 = (state_36540[(2)]);
var state_36540__$1 = (function (){var statearr_36548 = state_36540;
(statearr_36548[(8)] = inst_36532);

return statearr_36548;
})();
var statearr_36549_36560 = state_36540__$1;
(statearr_36549_36560[(2)] = null);

(statearr_36549_36560[(1)] = (2));


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
});})(c__31314__auto___36554,ch))
;
return ((function (switch__31226__auto__,c__31314__auto___36554,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31227__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31227__auto____0 = (function (){
var statearr_36550 = [null,null,null,null,null,null,null,null,null];
(statearr_36550[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31227__auto__);

(statearr_36550[(1)] = (1));

return statearr_36550;
});
var figwheel$client$heads_up_plugin_$_state_machine__31227__auto____1 = (function (state_36540){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_36540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e36551){if((e36551 instanceof Object)){
var ex__31230__auto__ = e36551;
var statearr_36552_36561 = state_36540;
(statearr_36552_36561[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36562 = state_36540;
state_36540 = G__36562;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31227__auto__ = function(state_36540){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31227__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31227__auto____1.call(this,state_36540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31227__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31227__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___36554,ch))
})();
var state__31316__auto__ = (function (){var statearr_36553 = f__31315__auto__.call(null);
(statearr_36553[(6)] = c__31314__auto___36554);

return statearr_36553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___36554,ch))
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
var c__31314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto__){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto__){
return (function (state_36568){
var state_val_36569 = (state_36568[(1)]);
if((state_val_36569 === (1))){
var inst_36563 = cljs.core.async.timeout.call(null,(3000));
var state_36568__$1 = state_36568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36568__$1,(2),inst_36563);
} else {
if((state_val_36569 === (2))){
var inst_36565 = (state_36568[(2)]);
var inst_36566 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36568__$1 = (function (){var statearr_36570 = state_36568;
(statearr_36570[(7)] = inst_36565);

return statearr_36570;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36568__$1,inst_36566);
} else {
return null;
}
}
});})(c__31314__auto__))
;
return ((function (switch__31226__auto__,c__31314__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31227__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31227__auto____0 = (function (){
var statearr_36571 = [null,null,null,null,null,null,null,null];
(statearr_36571[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31227__auto__);

(statearr_36571[(1)] = (1));

return statearr_36571;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31227__auto____1 = (function (state_36568){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_36568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e36572){if((e36572 instanceof Object)){
var ex__31230__auto__ = e36572;
var statearr_36573_36575 = state_36568;
(statearr_36573_36575[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36576 = state_36568;
state_36568 = G__36576;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31227__auto__ = function(state_36568){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31227__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31227__auto____1.call(this,state_36568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31227__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31227__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto__))
})();
var state__31316__auto__ = (function (){var statearr_36574 = f__31315__auto__.call(null);
(statearr_36574[(6)] = c__31314__auto__);

return statearr_36574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto__))
);

return c__31314__auto__;
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
var c__31314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36583){
var state_val_36584 = (state_36583[(1)]);
if((state_val_36584 === (1))){
var inst_36577 = cljs.core.async.timeout.call(null,(2000));
var state_36583__$1 = state_36583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36583__$1,(2),inst_36577);
} else {
if((state_val_36584 === (2))){
var inst_36579 = (state_36583[(2)]);
var inst_36580 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36581 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36580);
var state_36583__$1 = (function (){var statearr_36585 = state_36583;
(statearr_36585[(7)] = inst_36579);

return statearr_36585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36583__$1,inst_36581);
} else {
return null;
}
}
});})(c__31314__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31226__auto__,c__31314__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto____0 = (function (){
var statearr_36586 = [null,null,null,null,null,null,null,null];
(statearr_36586[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto__);

(statearr_36586[(1)] = (1));

return statearr_36586;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto____1 = (function (state_36583){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_36583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e36587){if((e36587 instanceof Object)){
var ex__31230__auto__ = e36587;
var statearr_36588_36590 = state_36583;
(statearr_36588_36590[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36591 = state_36583;
state_36583 = G__36591;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto__ = function(state_36583){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto____1.call(this,state_36583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31316__auto__ = (function (){var statearr_36589 = f__31315__auto__.call(null);
(statearr_36589[(6)] = c__31314__auto__);

return statearr_36589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto__,figwheel_version,temp__4657__auto__))
);

return c__31314__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36592){
var map__36593 = p__36592;
var map__36593__$1 = ((((!((map__36593 == null)))?((((map__36593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36593):map__36593);
var file = cljs.core.get.call(null,map__36593__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36593__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36593__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36595 = "";
var G__36595__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36595),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36595);
var G__36595__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36595__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36595__$1);
if(cljs.core.truth_((function (){var and__28039__auto__ = line;
if(cljs.core.truth_(and__28039__auto__)){
return column;
} else {
return and__28039__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36595__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36595__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36596){
var map__36597 = p__36596;
var map__36597__$1 = ((((!((map__36597 == null)))?((((map__36597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36597):map__36597);
var ed = map__36597__$1;
var formatted_exception = cljs.core.get.call(null,map__36597__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36597__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36597__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36599_36603 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36600_36604 = null;
var count__36601_36605 = (0);
var i__36602_36606 = (0);
while(true){
if((i__36602_36606 < count__36601_36605)){
var msg_36607 = cljs.core._nth.call(null,chunk__36600_36604,i__36602_36606);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36607);

var G__36608 = seq__36599_36603;
var G__36609 = chunk__36600_36604;
var G__36610 = count__36601_36605;
var G__36611 = (i__36602_36606 + (1));
seq__36599_36603 = G__36608;
chunk__36600_36604 = G__36609;
count__36601_36605 = G__36610;
i__36602_36606 = G__36611;
continue;
} else {
var temp__4657__auto___36612 = cljs.core.seq.call(null,seq__36599_36603);
if(temp__4657__auto___36612){
var seq__36599_36613__$1 = temp__4657__auto___36612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36599_36613__$1)){
var c__28890__auto___36614 = cljs.core.chunk_first.call(null,seq__36599_36613__$1);
var G__36615 = cljs.core.chunk_rest.call(null,seq__36599_36613__$1);
var G__36616 = c__28890__auto___36614;
var G__36617 = cljs.core.count.call(null,c__28890__auto___36614);
var G__36618 = (0);
seq__36599_36603 = G__36615;
chunk__36600_36604 = G__36616;
count__36601_36605 = G__36617;
i__36602_36606 = G__36618;
continue;
} else {
var msg_36619 = cljs.core.first.call(null,seq__36599_36613__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36619);

var G__36620 = cljs.core.next.call(null,seq__36599_36613__$1);
var G__36621 = null;
var G__36622 = (0);
var G__36623 = (0);
seq__36599_36603 = G__36620;
chunk__36600_36604 = G__36621;
count__36601_36605 = G__36622;
i__36602_36606 = G__36623;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36624){
var map__36625 = p__36624;
var map__36625__$1 = ((((!((map__36625 == null)))?((((map__36625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36625):map__36625);
var w = map__36625__$1;
var message = cljs.core.get.call(null,map__36625__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__28039__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28039__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28039__auto__;
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
var seq__36627 = cljs.core.seq.call(null,plugins);
var chunk__36628 = null;
var count__36629 = (0);
var i__36630 = (0);
while(true){
if((i__36630 < count__36629)){
var vec__36631 = cljs.core._nth.call(null,chunk__36628,i__36630);
var k = cljs.core.nth.call(null,vec__36631,(0),null);
var plugin = cljs.core.nth.call(null,vec__36631,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36637 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36627,chunk__36628,count__36629,i__36630,pl_36637,vec__36631,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36637.call(null,msg_hist);
});})(seq__36627,chunk__36628,count__36629,i__36630,pl_36637,vec__36631,k,plugin))
);
} else {
}

var G__36638 = seq__36627;
var G__36639 = chunk__36628;
var G__36640 = count__36629;
var G__36641 = (i__36630 + (1));
seq__36627 = G__36638;
chunk__36628 = G__36639;
count__36629 = G__36640;
i__36630 = G__36641;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36627);
if(temp__4657__auto__){
var seq__36627__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36627__$1)){
var c__28890__auto__ = cljs.core.chunk_first.call(null,seq__36627__$1);
var G__36642 = cljs.core.chunk_rest.call(null,seq__36627__$1);
var G__36643 = c__28890__auto__;
var G__36644 = cljs.core.count.call(null,c__28890__auto__);
var G__36645 = (0);
seq__36627 = G__36642;
chunk__36628 = G__36643;
count__36629 = G__36644;
i__36630 = G__36645;
continue;
} else {
var vec__36634 = cljs.core.first.call(null,seq__36627__$1);
var k = cljs.core.nth.call(null,vec__36634,(0),null);
var plugin = cljs.core.nth.call(null,vec__36634,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36646 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36627,chunk__36628,count__36629,i__36630,pl_36646,vec__36634,k,plugin,seq__36627__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36646.call(null,msg_hist);
});})(seq__36627,chunk__36628,count__36629,i__36630,pl_36646,vec__36634,k,plugin,seq__36627__$1,temp__4657__auto__))
);
} else {
}

var G__36647 = cljs.core.next.call(null,seq__36627__$1);
var G__36648 = null;
var G__36649 = (0);
var G__36650 = (0);
seq__36627 = G__36647;
chunk__36628 = G__36648;
count__36629 = G__36649;
i__36630 = G__36650;
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
var G__36652 = arguments.length;
switch (G__36652) {
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

var seq__36653_36658 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36654_36659 = null;
var count__36655_36660 = (0);
var i__36656_36661 = (0);
while(true){
if((i__36656_36661 < count__36655_36660)){
var msg_36662 = cljs.core._nth.call(null,chunk__36654_36659,i__36656_36661);
figwheel.client.socket.handle_incoming_message.call(null,msg_36662);

var G__36663 = seq__36653_36658;
var G__36664 = chunk__36654_36659;
var G__36665 = count__36655_36660;
var G__36666 = (i__36656_36661 + (1));
seq__36653_36658 = G__36663;
chunk__36654_36659 = G__36664;
count__36655_36660 = G__36665;
i__36656_36661 = G__36666;
continue;
} else {
var temp__4657__auto___36667 = cljs.core.seq.call(null,seq__36653_36658);
if(temp__4657__auto___36667){
var seq__36653_36668__$1 = temp__4657__auto___36667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36653_36668__$1)){
var c__28890__auto___36669 = cljs.core.chunk_first.call(null,seq__36653_36668__$1);
var G__36670 = cljs.core.chunk_rest.call(null,seq__36653_36668__$1);
var G__36671 = c__28890__auto___36669;
var G__36672 = cljs.core.count.call(null,c__28890__auto___36669);
var G__36673 = (0);
seq__36653_36658 = G__36670;
chunk__36654_36659 = G__36671;
count__36655_36660 = G__36672;
i__36656_36661 = G__36673;
continue;
} else {
var msg_36674 = cljs.core.first.call(null,seq__36653_36668__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36674);

var G__36675 = cljs.core.next.call(null,seq__36653_36668__$1);
var G__36676 = null;
var G__36677 = (0);
var G__36678 = (0);
seq__36653_36658 = G__36675;
chunk__36654_36659 = G__36676;
count__36655_36660 = G__36677;
i__36656_36661 = G__36678;
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
var args__29229__auto__ = [];
var len__29222__auto___36683 = arguments.length;
var i__29223__auto___36684 = (0);
while(true){
if((i__29223__auto___36684 < len__29222__auto___36683)){
args__29229__auto__.push((arguments[i__29223__auto___36684]));

var G__36685 = (i__29223__auto___36684 + (1));
i__29223__auto___36684 = G__36685;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((0) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29230__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36680){
var map__36681 = p__36680;
var map__36681__$1 = ((((!((map__36681 == null)))?((((map__36681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36681):map__36681);
var opts = map__36681__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36679){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36679));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36686){if((e36686 instanceof Error)){
var e = e36686;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36686;

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
return (function (p__36687){
var map__36688 = p__36687;
var map__36688__$1 = ((((!((map__36688 == null)))?((((map__36688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36688):map__36688);
var msg_name = cljs.core.get.call(null,map__36688__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518027916424
