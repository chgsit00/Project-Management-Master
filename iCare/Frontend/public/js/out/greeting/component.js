// Compiled by ClojureScript 1.9.946 {}
goog.provide('greeting.component');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
if(typeof greeting.component.json_response !== 'undefined'){
} else {
greeting.component.json_response = reagent.core.atom.call(null,(0));
}
greeting.component.greeting_component = (function greeting$component$greeting_component(){
var x = (12);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Greetings from Java server"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x){
return (function (){
return (function (){var c__30531__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30531__auto__,x){
return (function (){
var f__30532__auto__ = (function (){var switch__30510__auto__ = ((function (c__30531__auto__,x){
return (function (state_33183){
var state_val_33184 = (state_33183[(1)]);
if((state_val_33184 === (1))){
var inst_33174 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_33175 = [false];
var inst_33176 = cljs.core.PersistentHashMap.fromArrays(inst_33174,inst_33175);
var inst_33177 = cljs_http.client.get.call(null,"http://localhost:8080/greeting",inst_33176);
var state_33183__$1 = state_33183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33183__$1,(2),inst_33177);
} else {
if((state_val_33184 === (2))){
var inst_33179 = (state_33183[(2)]);
var inst_33180 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_33179);
var inst_33181 = cljs.core.reset_BANG_.call(null,greeting.component.json_response,inst_33180);
var state_33183__$1 = state_33183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33183__$1,inst_33181);
} else {
return null;
}
}
});})(c__30531__auto__,x))
;
return ((function (switch__30510__auto__,c__30531__auto__,x){
return (function() {
var greeting$component$greeting_component_$_state_machine__30511__auto__ = null;
var greeting$component$greeting_component_$_state_machine__30511__auto____0 = (function (){
var statearr_33185 = [null,null,null,null,null,null,null];
(statearr_33185[(0)] = greeting$component$greeting_component_$_state_machine__30511__auto__);

(statearr_33185[(1)] = (1));

return statearr_33185;
});
var greeting$component$greeting_component_$_state_machine__30511__auto____1 = (function (state_33183){
while(true){
var ret_value__30512__auto__ = (function (){try{while(true){
var result__30513__auto__ = switch__30510__auto__.call(null,state_33183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30513__auto__;
}
break;
}
}catch (e33186){if((e33186 instanceof Object)){
var ex__30514__auto__ = e33186;
var statearr_33187_33189 = state_33183;
(statearr_33187_33189[(5)] = ex__30514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33190 = state_33183;
state_33183 = G__33190;
continue;
} else {
return ret_value__30512__auto__;
}
break;
}
});
greeting$component$greeting_component_$_state_machine__30511__auto__ = function(state_33183){
switch(arguments.length){
case 0:
return greeting$component$greeting_component_$_state_machine__30511__auto____0.call(this);
case 1:
return greeting$component$greeting_component_$_state_machine__30511__auto____1.call(this,state_33183);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
greeting$component$greeting_component_$_state_machine__30511__auto__.cljs$core$IFn$_invoke$arity$0 = greeting$component$greeting_component_$_state_machine__30511__auto____0;
greeting$component$greeting_component_$_state_machine__30511__auto__.cljs$core$IFn$_invoke$arity$1 = greeting$component$greeting_component_$_state_machine__30511__auto____1;
return greeting$component$greeting_component_$_state_machine__30511__auto__;
})()
;})(switch__30510__auto__,c__30531__auto__,x))
})();
var state__30533__auto__ = (function (){var statearr_33188 = f__30532__auto__.call(null);
(statearr_33188[(6)] = c__30531__auto__);

return statearr_33188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30533__auto__);
});})(c__30531__auto__,x))
);

return c__30531__auto__;
})().call(null);
});})(x))
], null),"call greeting REST"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-danger","button.btn-danger",-631909226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x){
return (function (){
return cljs.core.swap_BANG_.call(null,greeting.component.json_response,((function (x){
return (function (_){
return "cleared";
});})(x))
).call(null);
});})(x))
], null),"clear"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Value"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20%"], null),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,greeting.component.json_response))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Content:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,greeting.component.json_response))], null)], null)], null)], null)], null);
});

//# sourceMappingURL=component.js.map?rel=1518875048628
