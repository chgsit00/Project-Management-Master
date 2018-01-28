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
var c__30689__auto___35687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30689__auto___35687){
return (function (){
var f__30690__auto__ = (function (){var switch__30668__auto__ = ((function (c__30689__auto___35687){
return (function (state_35681){
var state_val_35682 = (state_35681[(1)]);
if((state_val_35682 === (1))){
var inst_35668 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_35669 = ["since"];
var inst_35670 = [(135)];
var inst_35671 = cljs.core.PersistentHashMap.fromArrays(inst_35669,inst_35670);
var inst_35672 = [false,inst_35671];
var inst_35673 = cljs.core.PersistentHashMap.fromArrays(inst_35668,inst_35672);
var inst_35674 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_35673);
var state_35681__$1 = state_35681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35681__$1,(2),inst_35674);
} else {
if((state_val_35682 === (2))){
var inst_35676 = (state_35681[(2)]);
var inst_35677 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35676);
var inst_35678 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_35677);
var inst_35679 = timer.component.foo = inst_35678;
var state_35681__$1 = state_35681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35681__$1,inst_35679);
} else {
return null;
}
}
});})(c__30689__auto___35687))
;
return ((function (switch__30668__auto__,c__30689__auto___35687){
return (function() {
var timer$component$state_machine__30669__auto__ = null;
var timer$component$state_machine__30669__auto____0 = (function (){
var statearr_35683 = [null,null,null,null,null,null,null];
(statearr_35683[(0)] = timer$component$state_machine__30669__auto__);

(statearr_35683[(1)] = (1));

return statearr_35683;
});
var timer$component$state_machine__30669__auto____1 = (function (state_35681){
while(true){
var ret_value__30670__auto__ = (function (){try{while(true){
var result__30671__auto__ = switch__30668__auto__.call(null,state_35681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30671__auto__;
}
break;
}
}catch (e35684){if((e35684 instanceof Object)){
var ex__30672__auto__ = e35684;
var statearr_35685_35688 = state_35681;
(statearr_35685_35688[(5)] = ex__30672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35689 = state_35681;
state_35681 = G__35689;
continue;
} else {
return ret_value__30670__auto__;
}
break;
}
});
timer$component$state_machine__30669__auto__ = function(state_35681){
switch(arguments.length){
case 0:
return timer$component$state_machine__30669__auto____0.call(this);
case 1:
return timer$component$state_machine__30669__auto____1.call(this,state_35681);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
timer$component$state_machine__30669__auto__.cljs$core$IFn$_invoke$arity$0 = timer$component$state_machine__30669__auto____0;
timer$component$state_machine__30669__auto__.cljs$core$IFn$_invoke$arity$1 = timer$component$state_machine__30669__auto____1;
return timer$component$state_machine__30669__auto__;
})()
;})(switch__30668__auto__,c__30689__auto___35687))
})();
var state__30691__auto__ = (function (){var statearr_35686 = f__30690__auto__.call(null);
(statearr_35686[(6)] = c__30689__auto___35687);

return statearr_35686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30691__auto__);
});})(c__30689__auto___35687))
);


//# sourceMappingURL=component.js.map?rel=1517145141704
