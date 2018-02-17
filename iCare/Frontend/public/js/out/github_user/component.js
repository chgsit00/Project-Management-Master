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
return (function (p1__33249_SHARP_){
return cljs.core.reset_BANG_.call(null,github_user.component.github_name,p1__33249_SHARP_.target.value);
});})(x))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x){
return (function (){
return (function (){var c__30531__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30531__auto__,x){
return (function (){
var f__30532__auto__ = (function (){var switch__30510__auto__ = ((function (c__30531__auto__,x){
return (function (state_33261){
var state_val_33262 = (state_33261[(1)]);
if((state_val_33262 === (1))){
var inst_33250 = cljs.core.deref.call(null,github_user.component.github_name);
var inst_33251 = ["https://api.github.com/users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33250)].join('');
var inst_33252 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_33253 = [false];
var inst_33254 = cljs.core.PersistentHashMap.fromArrays(inst_33252,inst_33253);
var inst_33255 = cljs_http.client.get.call(null,inst_33251,inst_33254);
var state_33261__$1 = state_33261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33261__$1,(2),inst_33255);
} else {
if((state_val_33262 === (2))){
var inst_33257 = (state_33261[(2)]);
var inst_33258 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_33257);
var inst_33259 = cljs.core.reset_BANG_.call(null,github_user.component.click_count,inst_33258);
var state_33261__$1 = state_33261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33261__$1,inst_33259);
} else {
return null;
}
}
});})(c__30531__auto__,x))
;
return ((function (switch__30510__auto__,c__30531__auto__,x){
return (function() {
var github_user$component$github_user_component_$_state_machine__30511__auto__ = null;
var github_user$component$github_user_component_$_state_machine__30511__auto____0 = (function (){
var statearr_33263 = [null,null,null,null,null,null,null];
(statearr_33263[(0)] = github_user$component$github_user_component_$_state_machine__30511__auto__);

(statearr_33263[(1)] = (1));

return statearr_33263;
});
var github_user$component$github_user_component_$_state_machine__30511__auto____1 = (function (state_33261){
while(true){
var ret_value__30512__auto__ = (function (){try{while(true){
var result__30513__auto__ = switch__30510__auto__.call(null,state_33261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30513__auto__;
}
break;
}
}catch (e33264){if((e33264 instanceof Object)){
var ex__30514__auto__ = e33264;
var statearr_33265_33267 = state_33261;
(statearr_33265_33267[(5)] = ex__30514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33268 = state_33261;
state_33261 = G__33268;
continue;
} else {
return ret_value__30512__auto__;
}
break;
}
});
github_user$component$github_user_component_$_state_machine__30511__auto__ = function(state_33261){
switch(arguments.length){
case 0:
return github_user$component$github_user_component_$_state_machine__30511__auto____0.call(this);
case 1:
return github_user$component$github_user_component_$_state_machine__30511__auto____1.call(this,state_33261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
github_user$component$github_user_component_$_state_machine__30511__auto__.cljs$core$IFn$_invoke$arity$0 = github_user$component$github_user_component_$_state_machine__30511__auto____0;
github_user$component$github_user_component_$_state_machine__30511__auto__.cljs$core$IFn$_invoke$arity$1 = github_user$component$github_user_component_$_state_machine__30511__auto____1;
return github_user$component$github_user_component_$_state_machine__30511__auto__;
})()
;})(switch__30510__auto__,c__30531__auto__,x))
})();
var state__30533__auto__ = (function (){var statearr_33266 = f__30532__auto__.call(null);
(statearr_33266[(6)] = c__30531__auto__);

return statearr_33266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30533__auto__);
});})(c__30531__auto__,x))
);

return c__30531__auto__;
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

//# sourceMappingURL=component.js.map?rel=1518875215196
