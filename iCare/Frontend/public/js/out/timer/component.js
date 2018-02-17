// Compiled by ClojureScript 1.9.946 {}
goog.provide('timer.component');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
timer.component.timer_component = (function timer$component$timer_component(){
var seconds_elapsed = reagent.core.atom.call(null,(0));
return ((function (seconds_elapsed){
return (function (){
setTimeout(((function (seconds_elapsed){
return (function (){
return cljs.core.swap_BANG_.call(null,seconds_elapsed,cljs.core.inc);
});})(seconds_elapsed))
,(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Seconds Elapsed: ",cljs.core.deref.call(null,seconds_elapsed)], null);
});
;})(seconds_elapsed))
});
var c__31314__auto___39331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___39331){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___39331){
return (function (state_39325){
var state_val_39326 = (state_39325[(1)]);
if((state_val_39326 === (1))){
var inst_39312 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_39313 = ["since"];
var inst_39314 = [(135)];
var inst_39315 = cljs.core.PersistentHashMap.fromArrays(inst_39313,inst_39314);
var inst_39316 = [false,inst_39315];
var inst_39317 = cljs.core.PersistentHashMap.fromArrays(inst_39312,inst_39316);
var inst_39318 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_39317);
var state_39325__$1 = state_39325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39325__$1,(2),inst_39318);
} else {
if((state_val_39326 === (2))){
var inst_39320 = (state_39325[(2)]);
var inst_39321 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_39320);
var inst_39322 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_39321);
var inst_39323 = timer.component.foo = inst_39322;
var state_39325__$1 = state_39325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39325__$1,inst_39323);
} else {
return null;
}
}
});})(c__31314__auto___39331))
;
return ((function (switch__31226__auto__,c__31314__auto___39331){
return (function() {
var timer$component$state_machine__31227__auto__ = null;
var timer$component$state_machine__31227__auto____0 = (function (){
var statearr_39327 = [null,null,null,null,null,null,null];
(statearr_39327[(0)] = timer$component$state_machine__31227__auto__);

(statearr_39327[(1)] = (1));

return statearr_39327;
});
var timer$component$state_machine__31227__auto____1 = (function (state_39325){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_39325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e39328){if((e39328 instanceof Object)){
var ex__31230__auto__ = e39328;
var statearr_39329_39332 = state_39325;
(statearr_39329_39332[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39333 = state_39325;
state_39325 = G__39333;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
timer$component$state_machine__31227__auto__ = function(state_39325){
switch(arguments.length){
case 0:
return timer$component$state_machine__31227__auto____0.call(this);
case 1:
return timer$component$state_machine__31227__auto____1.call(this,state_39325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
timer$component$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = timer$component$state_machine__31227__auto____0;
timer$component$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = timer$component$state_machine__31227__auto____1;
return timer$component$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___39331))
})();
var state__31316__auto__ = (function (){var statearr_39330 = f__31315__auto__.call(null);
(statearr_39330[(6)] = c__31314__auto___39331);

return statearr_39330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___39331))
);


//# sourceMappingURL=component.js.map?rel=1518027931031
