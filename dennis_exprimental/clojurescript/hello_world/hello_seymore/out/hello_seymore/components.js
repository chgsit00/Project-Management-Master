// Compiled by ClojureScript 1.9.908 {}
goog.provide('hello_seymore.components');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.events');
var c__31356__auto___37755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___37755){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___37755){
return (function (state_37749){
var state_val_37750 = (state_37749[(1)]);
if((state_val_37750 === (1))){
var inst_37736 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_37737 = ["since"];
var inst_37738 = [(135)];
var inst_37739 = cljs.core.PersistentHashMap.fromArrays(inst_37737,inst_37738);
var inst_37740 = [false,inst_37739];
var inst_37741 = cljs.core.PersistentHashMap.fromArrays(inst_37736,inst_37740);
var inst_37742 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_37741);
var state_37749__$1 = state_37749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37749__$1,(2),inst_37742);
} else {
if((state_val_37750 === (2))){
var inst_37744 = (state_37749[(2)]);
var inst_37745 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37744);
var inst_37746 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_37745);
var inst_37747 = hello_seymore.components._STAR_names = inst_37746;
var state_37749__$1 = state_37749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37749__$1,inst_37747);
} else {
return null;
}
}
});})(c__31356__auto___37755))
;
return ((function (switch__31268__auto__,c__31356__auto___37755){
return (function() {
var hello_seymore$components$state_machine__31269__auto__ = null;
var hello_seymore$components$state_machine__31269__auto____0 = (function (){
var statearr_37751 = [null,null,null,null,null,null,null];
(statearr_37751[(0)] = hello_seymore$components$state_machine__31269__auto__);

(statearr_37751[(1)] = (1));

return statearr_37751;
});
var hello_seymore$components$state_machine__31269__auto____1 = (function (state_37749){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_37749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e37752){if((e37752 instanceof Object)){
var ex__31272__auto__ = e37752;
var statearr_37753_37756 = state_37749;
(statearr_37753_37756[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37757 = state_37749;
state_37749 = G__37757;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
hello_seymore$components$state_machine__31269__auto__ = function(state_37749){
switch(arguments.length){
case 0:
return hello_seymore$components$state_machine__31269__auto____0.call(this);
case 1:
return hello_seymore$components$state_machine__31269__auto____1.call(this,state_37749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
hello_seymore$components$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = hello_seymore$components$state_machine__31269__auto____0;
hello_seymore$components$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = hello_seymore$components$state_machine__31269__auto____1;
return hello_seymore$components$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___37755))
})();
var state__31358__auto__ = (function (){var statearr_37754 = f__31357__auto__.call(null);
(statearr_37754[(6)] = c__31356__auto___37755);

return statearr_37754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___37755))
);

hello_seymore.components.pages = cljs.core.list("Dashboard","Tickets","Reports","Settings","Eco-Monitor","Develop Tools","Info");
hello_seymore.components.pages_icons = cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dashboard","glyphicon-leaf"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Eco Monitor","glyphicon-leaf"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reports","glyphicon-leaf"], null));
hello_seymore.components.simple_component = (function hello_seymore$components$simple_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a component!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null)], null);
});
hello_seymore.components.navi_component = (function hello_seymore$components$navi_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"180",new cljs.core.Keyword(null,"src","src",-1651076051),"assets/logo.jpeg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nav nav-pills nav-stacked"], null),cljs.core.map.call(null,(function (x){
if(cljs.core._EQ_.call(null,x,"Dashboard")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.active","li.active",-1051611101),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon-dashboard"], null)], null)," ",x], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),x], null)], null);
}
}),hello_seymore.components.pages)], null)], null)], null);
});
hello_seymore.components.panel_component = (function hello_seymore$components$panel_component(title,body,panel_type,icon){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-3","div.col-sm-3",1173288798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-group","div.panel-group",-990510016),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["panel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_type)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-8","div.col-sm-8",-1138088481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-3","div.col-sm-3",1173288798),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3em"], null),new cljs.core.Keyword(null,"class","class",-2030961996),["glyphicon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3em"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"pull-right glyphicon glyphicon-circle-arrow-right"], null)], null)], null)], null)], null)], null)], null);
});
hello_seymore.components.listen = (function hello_seymore$components$listen(el,type,f){
var e = goog.dom.getElement(el);
return goog.events.listen(e,type,cljs.core.partial.call(null,f));
});
hello_seymore.components.content_component = (function hello_seymore$components$content_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_seymore.components.simple_component.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"DASHBOARD"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_seymore.components.panel_component.call(null,"Messages","View Details","panel-primary","glyphicon-envelope"),hello_seymore.components.panel_component.call(null,"Alarms","0 alarms occured","panel-danger","glyphicon glyphicon-warning-sign"),hello_seymore.components.panel_component.call(null,"Tickets","0 open tickets","panel-success","glyphicon glyphicon-wrench"),hello_seymore.components.panel_component.call(null,"Tasks","2 todo's","panel-warning","glyphicon glyphicon-list-alt")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Recent"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Time"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Info"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.danger","tr.danger",-65063027),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20%"], null),"21.01.18 10:01 pm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20%"], null),"Alarm (Room 121)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Mrs. Schmith is dead \u2620\uFE0F"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"21.01.18 10:01 pm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"It is rainig \u26A0\uFE0F "], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"21.01.18 10:01 pm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Breakfast plan changed \uD83E\uDD50"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"21.01.18 10:01 pm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Mrs. Smith asked for stripper visit"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"21.01.18 10:01 pm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Fat power shacking course canceled - Trainer wants more money "], null)], null)], null)], null)], null)], null)], null)], null);
});
hello_seymore.components.layout = (function hello_seymore$components$layout(data){
return React.createElement("div",({"className": "container-fluid"}),React.createElement("div",({"className": "row content"}),React.createElement("div",({"style": ({"width": "200px"}), "className": "col-sm-2 sidenav"}),sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_seymore.components.navi_component.call(null)], null))),React.createElement("div",({"className": "col-sm-10"}),sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_seymore.components.content_component.call(null)], null)))));
});
hello_seymore.components.login = (function hello_seymore$components$login(data){
return React.createElement("div",null,React.createElement("div",({"className": "jumbotron text-center"}),React.createElement("h1",null,"iCare"),React.createElement("p",null,"we fucking care for people"),React.createElement("br",null),sablono.interpreter.create_element.call(null,"input",({"type": "text", "placeholder": "user"})),React.createElement("br",null),React.createElement("br",null),sablono.interpreter.create_element.call(null,"input",({"type": "password", "placeholder": "password"})),React.createElement("br",null),React.createElement("br",null),React.createElement("button",({"type": "button", "className": "btn btn-primary"}),"Login")));
});
hello_seymore.components.like_seymore = (function hello_seymore$components$like_seymore(data){
React.createElement("div",({"className": "jumbotron"}),React.createElement("h1",null,"Seymore' popularity: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"likes","likes",792554542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"likes","likes",792554542)], null),cljs.core.inc);
})}),"Thumbs up")));

return hello_seymore.components.listen.call(null,"mybutton","click",alert(hello_seymore.components._STAR_names));
});

//# sourceMappingURL=components.js.map?rel=1517063906459
