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
var c__40843__auto___45671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___45671){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___45671){
return (function (state_45665){
var state_val_45666 = (state_45665[(1)]);
if((state_val_45666 === (1))){
var inst_45652 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_45653 = ["since"];
var inst_45654 = [(135)];
var inst_45655 = cljs.core.PersistentHashMap.fromArrays(inst_45653,inst_45654);
var inst_45656 = [false,inst_45655];
var inst_45657 = cljs.core.PersistentHashMap.fromArrays(inst_45652,inst_45656);
var inst_45658 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_45657);
var state_45665__$1 = state_45665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45665__$1,(2),inst_45658);
} else {
if((state_val_45666 === (2))){
var inst_45660 = (state_45665[(2)]);
var inst_45661 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_45660);
var inst_45662 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_45661);
var inst_45663 = timer.component.foo = inst_45662;
var state_45665__$1 = state_45665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45665__$1,inst_45663);
} else {
return null;
}
}
});})(c__40843__auto___45671))
;
return ((function (switch__40755__auto__,c__40843__auto___45671){
return (function() {
var timer$component$state_machine__40756__auto__ = null;
var timer$component$state_machine__40756__auto____0 = (function (){
var statearr_45667 = [null,null,null,null,null,null,null];
(statearr_45667[(0)] = timer$component$state_machine__40756__auto__);

(statearr_45667[(1)] = (1));

return statearr_45667;
});
var timer$component$state_machine__40756__auto____1 = (function (state_45665){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_45665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e45668){if((e45668 instanceof Object)){
var ex__40759__auto__ = e45668;
var statearr_45669_45672 = state_45665;
(statearr_45669_45672[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45673 = state_45665;
state_45665 = G__45673;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
timer$component$state_machine__40756__auto__ = function(state_45665){
switch(arguments.length){
case 0:
return timer$component$state_machine__40756__auto____0.call(this);
case 1:
return timer$component$state_machine__40756__auto____1.call(this,state_45665);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
timer$component$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = timer$component$state_machine__40756__auto____0;
timer$component$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = timer$component$state_machine__40756__auto____1;
return timer$component$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___45671))
})();
var state__40845__auto__ = (function (){var statearr_45670 = f__40844__auto__.call(null);
(statearr_45670[(6)] = c__40843__auto___45671);

return statearr_45670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___45671))
);


//# sourceMappingURL=component.js.map?rel=1517176494290
