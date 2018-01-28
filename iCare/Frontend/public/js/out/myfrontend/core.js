// Compiled by ClojureScript 1.9.946 {}
goog.provide('myfrontend.core');
goog.require('cljs.core');
goog.require('github_user.component');
goog.require('reagent.core');
goog.require('hello_seymore.components');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
myfrontend.core.layout = (function myfrontend$core$layout(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container-fluid"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-2 sidenav"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_seymore.components.navi_component], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-10"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_seymore.components.content_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [github_user.component.github_user_component], null)], null)], null)], null);
});
myfrontend.core.mount_root = (function myfrontend$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myfrontend.core.layout], null),document.getElementById("app"));
});
myfrontend.core.init_BANG_ = (function myfrontend$core$init_BANG_(){
return myfrontend.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1517145287642
