// Compiled by ClojureScript 1.9.946 {}
goog.provide('myfrontend.core');
goog.require('cljs.core');
goog.require('github_user.component');
goog.require('greeting.component');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('hello_seymore.components');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
myfrontend.core.layout = (function myfrontend$core$layout(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container-fluid"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-2 sidenav"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_seymore.components.navi_component], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-10"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_seymore.components.content_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [greeting.component.greeting_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [github_user.component.github_user_component], null)], null)], null)], null);
});
var action__31257__auto___33275 = (function (params__31258__auto__){
if(cljs.core.map_QMARK_.call(null,params__31258__auto__)){
var map__33271 = params__31258__auto__;
var map__33271__$1 = ((((!((map__33271 == null)))?((((map__33271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33271):map__33271);
var params = map__33271__$1;
return console.log(["User: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31258__auto__)){
var map__33273 = params__31258__auto__;
var map__33273__$1 = ((((!((map__33273 == null)))?((((map__33273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33273):map__33273);
var params = map__33273__$1;
return console.log(["User: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/users/:id",action__31257__auto___33275);

myfrontend.core.mount_root = (function myfrontend$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myfrontend.core.layout], null),document.getElementById("app"));
});
myfrontend.core.init_BANG_ = (function myfrontend$core$init_BANG_(){
return myfrontend.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1518875215242
