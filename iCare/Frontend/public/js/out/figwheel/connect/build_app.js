// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('myfrontend.dev');
goog.require('myfrontend.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__42273__delegate = function (x){
if(cljs.core.truth_(myfrontend.core.mount_root)){
return cljs.core.apply.call(null,myfrontend.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'myfrontend.core/mount-root' is missing");
}
};
var G__42273 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__42274__i = 0, G__42274__a = new Array(arguments.length -  0);
while (G__42274__i < G__42274__a.length) {G__42274__a[G__42274__i] = arguments[G__42274__i + 0]; ++G__42274__i;}
  x = new cljs.core.IndexedSeq(G__42274__a,0,null);
} 
return G__42273__delegate.call(this,x);};
G__42273.cljs$lang$maxFixedArity = 0;
G__42273.cljs$lang$applyTo = (function (arglist__42275){
var x = cljs.core.seq(arglist__42275);
return G__42273__delegate(x);
});
G__42273.cljs$core$IFn$_invoke$arity$variadic = G__42273__delegate;
return G__42273;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1517180064846
