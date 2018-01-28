// Compiled by ClojureScript 1.9.946 {}
goog.provide('github_user.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
if(typeof github_user.components.click_count !== 'undefined'){
} else {
github_user.components.click_count = reagent.core.atom.call(null,(0));
}
if(typeof github_user.components.github_name !== 'undefined'){
} else {
github_user.components.github_name = reagent.core.atom.call(null,"username");
}
github_user.components.github_user_component = (function github_user$components$github_user_component(){
var x = (12);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,github_user.components.github_name),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (x){
return (function (p1__35222_SHARP_){
return cljs.core.reset_BANG_.call(null,github_user.components.github_name,p1__35222_SHARP_.target.value);
});})(x))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x){
return (function (){
return (function (){var c__30689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30689__auto__,x){
return (function (){
var f__30690__auto__ = (function (){var switch__30668__auto__ = ((function (c__30689__auto__,x){
return (function (state_35234){
var state_val_35235 = (state_35234[(1)]);
if((state_val_35235 === (1))){
var inst_35223 = cljs.core.deref.call(null,github_user.components.github_name);
var inst_35224 = ["https://api.github.com/users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35223)].join('');
var inst_35225 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_35226 = [false];
var inst_35227 = cljs.core.PersistentHashMap.fromArrays(inst_35225,inst_35226);
var inst_35228 = cljs_http.client.get.call(null,inst_35224,inst_35227);
var state_35234__$1 = state_35234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35234__$1,(2),inst_35228);
} else {
if((state_val_35235 === (2))){
var inst_35230 = (state_35234[(2)]);
var inst_35231 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35230);
var inst_35232 = cljs.core.reset_BANG_.call(null,github_user.components.click_count,inst_35231);
var state_35234__$1 = state_35234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35234__$1,inst_35232);
} else {
return null;
}
}
});})(c__30689__auto__,x))
;
return ((function (switch__30668__auto__,c__30689__auto__,x){
return (function() {
var github_user$components$github_user_component_$_state_machine__30669__auto__ = null;
var github_user$components$github_user_component_$_state_machine__30669__auto____0 = (function (){
var statearr_35236 = [null,null,null,null,null,null,null];
(statearr_35236[(0)] = github_user$components$github_user_component_$_state_machine__30669__auto__);

(statearr_35236[(1)] = (1));

return statearr_35236;
});
var github_user$components$github_user_component_$_state_machine__30669__auto____1 = (function (state_35234){
while(true){
var ret_value__30670__auto__ = (function (){try{while(true){
var result__30671__auto__ = switch__30668__auto__.call(null,state_35234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30671__auto__;
}
break;
}
}catch (e35237){if((e35237 instanceof Object)){
var ex__30672__auto__ = e35237;
var statearr_35238_35240 = state_35234;
(statearr_35238_35240[(5)] = ex__30672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35241 = state_35234;
state_35234 = G__35241;
continue;
} else {
return ret_value__30670__auto__;
}
break;
}
});
github_user$components$github_user_component_$_state_machine__30669__auto__ = function(state_35234){
switch(arguments.length){
case 0:
return github_user$components$github_user_component_$_state_machine__30669__auto____0.call(this);
case 1:
return github_user$components$github_user_component_$_state_machine__30669__auto____1.call(this,state_35234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
github_user$components$github_user_component_$_state_machine__30669__auto__.cljs$core$IFn$_invoke$arity$0 = github_user$components$github_user_component_$_state_machine__30669__auto____0;
github_user$components$github_user_component_$_state_machine__30669__auto__.cljs$core$IFn$_invoke$arity$1 = github_user$components$github_user_component_$_state_machine__30669__auto____1;
return github_user$components$github_user_component_$_state_machine__30669__auto__;
})()
;})(switch__30668__auto__,c__30689__auto__,x))
})();
var state__30691__auto__ = (function (){var statearr_35239 = f__30690__auto__.call(null);
(statearr_35239[(6)] = c__30689__auto__);

return statearr_35239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30691__auto__);
});})(c__30689__auto__,x))
);

return c__30689__auto__;
})().call(null);
});})(x))
], null),"load github users"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-danger","button.btn-danger",-631909226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x){
return (function (){
return cljs.core.swap_BANG_.call(null,github_user.components.click_count,((function (x){
return (function (_){
return "cleared";
});})(x))
).call(null);
});})(x))
], null),"clear"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"avatar_url","avatar_url",1520721439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,github_user.components.click_count)),new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Value"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20%"], null),"Login name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,github_user.components.click_count))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Public repos:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"public_repos","public_repos",-1544064903).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,github_user.components.click_count))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Url:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"html_url","html_url",-1914714112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,github_user.components.click_count))], null),new cljs.core.Keyword(null,"html_url","html_url",-1914714112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,github_user.components.click_count))], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=components.js.map?rel=1517144567208
