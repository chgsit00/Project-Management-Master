// Compiled by ClojureScript 1.9.946 {}
goog.provide('github_user.component');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
if(typeof github_user.component.click_count !== 'undefined'){
} else {
github_user.component.click_count = reagent.core.atom.call(null,(0));
}
if(typeof github_user.component.github_name !== 'undefined'){
} else {
github_user.component.github_name = reagent.core.atom.call(null,"username");
}
github_user.component.github_user_component = (function github_user$component$github_user_component(){
var x = (12);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Github user finder"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"type in the user name an press the button"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,github_user.component.github_name),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (x){
return (function (p1__45055_SHARP_){
return cljs.core.reset_BANG_.call(null,github_user.component.github_name,p1__45055_SHARP_.target.value);
});})(x))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x){
return (function (){
return (function (){var c__40843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto__,x){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto__,x){
return (function (state_45067){
var state_val_45068 = (state_45067[(1)]);
if((state_val_45068 === (1))){
var inst_45056 = cljs.core.deref.call(null,github_user.component.github_name);
var inst_45057 = ["https://api.github.com/users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45056)].join('');
var inst_45058 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_45059 = [false];
var inst_45060 = cljs.core.PersistentHashMap.fromArrays(inst_45058,inst_45059);
var inst_45061 = cljs_http.client.get.call(null,inst_45057,inst_45060);
var state_45067__$1 = state_45067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45067__$1,(2),inst_45061);
} else {
if((state_val_45068 === (2))){
var inst_45063 = (state_45067[(2)]);
var inst_45064 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_45063);
var inst_45065 = cljs.core.reset_BANG_.call(null,github_user.component.click_count,inst_45064);
var state_45067__$1 = state_45067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45067__$1,inst_45065);
} else {
return null;
}
}
});})(c__40843__auto__,x))
;
return ((function (switch__40755__auto__,c__40843__auto__,x){
return (function() {
var github_user$component$github_user_component_$_state_machine__40756__auto__ = null;
var github_user$component$github_user_component_$_state_machine__40756__auto____0 = (function (){
var statearr_45069 = [null,null,null,null,null,null,null];
(statearr_45069[(0)] = github_user$component$github_user_component_$_state_machine__40756__auto__);

(statearr_45069[(1)] = (1));

return statearr_45069;
});
var github_user$component$github_user_component_$_state_machine__40756__auto____1 = (function (state_45067){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_45067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e45070){if((e45070 instanceof Object)){
var ex__40759__auto__ = e45070;
var statearr_45071_45073 = state_45067;
(statearr_45071_45073[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45074 = state_45067;
state_45067 = G__45074;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
github_user$component$github_user_component_$_state_machine__40756__auto__ = function(state_45067){
switch(arguments.length){
case 0:
return github_user$component$github_user_component_$_state_machine__40756__auto____0.call(this);
case 1:
return github_user$component$github_user_component_$_state_machine__40756__auto____1.call(this,state_45067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
github_user$component$github_user_component_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = github_user$component$github_user_component_$_state_machine__40756__auto____0;
github_user$component$github_user_component_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = github_user$component$github_user_component_$_state_machine__40756__auto____1;
return github_user$component$github_user_component_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto__,x))
})();
var state__40845__auto__ = (function (){var statearr_45072 = f__40844__auto__.call(null);
(statearr_45072[(6)] = c__40843__auto__);

return statearr_45072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto__,x))
);

return c__40843__auto__;
})().call(null);
});})(x))
], null),"load github users"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-danger","button.btn-danger",-631909226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x){
return (function (){
return cljs.core.swap_BANG_.call(null,github_user.component.click_count,((function (x){
return (function (_){
return "cleared";
});})(x))
).call(null);
});})(x))
], null),"clear"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"avatar_url","avatar_url",1520721439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,github_user.component.click_count)),new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Field"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Value"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20%"], null),"Login name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,github_user.component.click_count))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Public repos:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"public_repos","public_repos",-1544064903).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,github_user.component.click_count))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Url:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"html_url","html_url",-1914714112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,github_user.component.click_count))], null),new cljs.core.Keyword(null,"html_url","html_url",-1914714112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,github_user.component.click_count))], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=component.js.map?rel=1517176493432
