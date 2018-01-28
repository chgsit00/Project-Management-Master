// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31361 = arguments.length;
switch (G__31361) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31362 = (function (f,blockable,meta31363){
this.f = f;
this.blockable = blockable;
this.meta31363 = meta31363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31364,meta31363__$1){
var self__ = this;
var _31364__$1 = this;
return (new cljs.core.async.t_cljs$core$async31362(self__.f,self__.blockable,meta31363__$1));
});

cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31364){
var self__ = this;
var _31364__$1 = this;
return self__.meta31363;
});

cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31363","meta31363",-1506075322,null)], null);
});

cljs.core.async.t_cljs$core$async31362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31362";

cljs.core.async.t_cljs$core$async31362.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async31362");
});

cljs.core.async.__GT_t_cljs$core$async31362 = (function cljs$core$async$__GT_t_cljs$core$async31362(f__$1,blockable__$1,meta31363){
return (new cljs.core.async.t_cljs$core$async31362(f__$1,blockable__$1,meta31363));
});

}

return (new cljs.core.async.t_cljs$core$async31362(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31368 = arguments.length;
switch (G__31368) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31371 = arguments.length;
switch (G__31371) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31374 = arguments.length;
switch (G__31374) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31376 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31376);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31376,ret){
return (function (){
return fn1.call(null,val_31376);
});})(val_31376,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31378 = arguments.length;
switch (G__31378) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28998__auto___31380 = n;
var x_31381 = (0);
while(true){
if((x_31381 < n__28998__auto___31380)){
(a[x_31381] = (0));

var G__31382 = (x_31381 + (1));
x_31381 = G__31382;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31383 = (i + (1));
i = G__31383;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31384 = (function (flag,meta31385){
this.flag = flag;
this.meta31385 = meta31385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31386,meta31385__$1){
var self__ = this;
var _31386__$1 = this;
return (new cljs.core.async.t_cljs$core$async31384(self__.flag,meta31385__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31386){
var self__ = this;
var _31386__$1 = this;
return self__.meta31385;
});})(flag))
;

cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31384.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31385","meta31385",-1922077284,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31384";

cljs.core.async.t_cljs$core$async31384.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async31384");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31384 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31384(flag__$1,meta31385){
return (new cljs.core.async.t_cljs$core$async31384(flag__$1,meta31385));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31384(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31387 = (function (flag,cb,meta31388){
this.flag = flag;
this.cb = cb;
this.meta31388 = meta31388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31389,meta31388__$1){
var self__ = this;
var _31389__$1 = this;
return (new cljs.core.async.t_cljs$core$async31387(self__.flag,self__.cb,meta31388__$1));
});

cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31389){
var self__ = this;
var _31389__$1 = this;
return self__.meta31388;
});

cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31388","meta31388",-1769290576,null)], null);
});

cljs.core.async.t_cljs$core$async31387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31387";

cljs.core.async.t_cljs$core$async31387.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async31387");
});

cljs.core.async.__GT_t_cljs$core$async31387 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31387(flag__$1,cb__$1,meta31388){
return (new cljs.core.async.t_cljs$core$async31387(flag__$1,cb__$1,meta31388));
});

}

return (new cljs.core.async.t_cljs$core$async31387(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31390_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31390_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31391_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31391_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28051__auto__ = wport;
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31392 = (i + (1));
i = G__31392;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28051__auto__ = ret;
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28039__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28039__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28039__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29229__auto__ = [];
var len__29222__auto___31398 = arguments.length;
var i__29223__auto___31399 = (0);
while(true){
if((i__29223__auto___31399 < len__29222__auto___31398)){
args__29229__auto__.push((arguments[i__29223__auto___31399]));

var G__31400 = (i__29223__auto___31399 + (1));
i__29223__auto___31399 = G__31400;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31395){
var map__31396 = p__31395;
var map__31396__$1 = ((((!((map__31396 == null)))?((((map__31396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31396):map__31396);
var opts = map__31396__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31393){
var G__31394 = cljs.core.first.call(null,seq31393);
var seq31393__$1 = cljs.core.next.call(null,seq31393);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31394,seq31393__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31402 = arguments.length;
switch (G__31402) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31315__auto___31448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___31448){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___31448){
return (function (state_31426){
var state_val_31427 = (state_31426[(1)]);
if((state_val_31427 === (7))){
var inst_31422 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31428_31449 = state_31426__$1;
(statearr_31428_31449[(2)] = inst_31422);

(statearr_31428_31449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (1))){
var state_31426__$1 = state_31426;
var statearr_31429_31450 = state_31426__$1;
(statearr_31429_31450[(2)] = null);

(statearr_31429_31450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (4))){
var inst_31405 = (state_31426[(7)]);
var inst_31405__$1 = (state_31426[(2)]);
var inst_31406 = (inst_31405__$1 == null);
var state_31426__$1 = (function (){var statearr_31430 = state_31426;
(statearr_31430[(7)] = inst_31405__$1);

return statearr_31430;
})();
if(cljs.core.truth_(inst_31406)){
var statearr_31431_31451 = state_31426__$1;
(statearr_31431_31451[(1)] = (5));

} else {
var statearr_31432_31452 = state_31426__$1;
(statearr_31432_31452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (13))){
var state_31426__$1 = state_31426;
var statearr_31433_31453 = state_31426__$1;
(statearr_31433_31453[(2)] = null);

(statearr_31433_31453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (6))){
var inst_31405 = (state_31426[(7)]);
var state_31426__$1 = state_31426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31426__$1,(11),to,inst_31405);
} else {
if((state_val_31427 === (3))){
var inst_31424 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31426__$1,inst_31424);
} else {
if((state_val_31427 === (12))){
var state_31426__$1 = state_31426;
var statearr_31434_31454 = state_31426__$1;
(statearr_31434_31454[(2)] = null);

(statearr_31434_31454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (2))){
var state_31426__$1 = state_31426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31426__$1,(4),from);
} else {
if((state_val_31427 === (11))){
var inst_31415 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
if(cljs.core.truth_(inst_31415)){
var statearr_31435_31455 = state_31426__$1;
(statearr_31435_31455[(1)] = (12));

} else {
var statearr_31436_31456 = state_31426__$1;
(statearr_31436_31456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (9))){
var state_31426__$1 = state_31426;
var statearr_31437_31457 = state_31426__$1;
(statearr_31437_31457[(2)] = null);

(statearr_31437_31457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (5))){
var state_31426__$1 = state_31426;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31438_31458 = state_31426__$1;
(statearr_31438_31458[(1)] = (8));

} else {
var statearr_31439_31459 = state_31426__$1;
(statearr_31439_31459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (14))){
var inst_31420 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31440_31460 = state_31426__$1;
(statearr_31440_31460[(2)] = inst_31420);

(statearr_31440_31460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (10))){
var inst_31412 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31441_31461 = state_31426__$1;
(statearr_31441_31461[(2)] = inst_31412);

(statearr_31441_31461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (8))){
var inst_31409 = cljs.core.async.close_BANG_.call(null,to);
var state_31426__$1 = state_31426;
var statearr_31442_31462 = state_31426__$1;
(statearr_31442_31462[(2)] = inst_31409);

(statearr_31442_31462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___31448))
;
return ((function (switch__31227__auto__,c__31315__auto___31448){
return (function() {
var cljs$core$async$state_machine__31228__auto__ = null;
var cljs$core$async$state_machine__31228__auto____0 = (function (){
var statearr_31443 = [null,null,null,null,null,null,null,null];
(statearr_31443[(0)] = cljs$core$async$state_machine__31228__auto__);

(statearr_31443[(1)] = (1));

return statearr_31443;
});
var cljs$core$async$state_machine__31228__auto____1 = (function (state_31426){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_31426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e31444){if((e31444 instanceof Object)){
var ex__31231__auto__ = e31444;
var statearr_31445_31463 = state_31426;
(statearr_31445_31463[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31464 = state_31426;
state_31426 = G__31464;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$state_machine__31228__auto__ = function(state_31426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31228__auto____1.call(this,state_31426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31228__auto____0;
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31228__auto____1;
return cljs$core$async$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___31448))
})();
var state__31317__auto__ = (function (){var statearr_31446 = f__31316__auto__.call(null);
(statearr_31446[(6)] = c__31315__auto___31448);

return statearr_31446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___31448))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31465){
var vec__31466 = p__31465;
var v = cljs.core.nth.call(null,vec__31466,(0),null);
var p = cljs.core.nth.call(null,vec__31466,(1),null);
var job = vec__31466;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31315__auto___31637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___31637,res,vec__31466,v,p,job,jobs,results){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___31637,res,vec__31466,v,p,job,jobs,results){
return (function (state_31473){
var state_val_31474 = (state_31473[(1)]);
if((state_val_31474 === (1))){
var state_31473__$1 = state_31473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31473__$1,(2),res,v);
} else {
if((state_val_31474 === (2))){
var inst_31470 = (state_31473[(2)]);
var inst_31471 = cljs.core.async.close_BANG_.call(null,res);
var state_31473__$1 = (function (){var statearr_31475 = state_31473;
(statearr_31475[(7)] = inst_31470);

return statearr_31475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31473__$1,inst_31471);
} else {
return null;
}
}
});})(c__31315__auto___31637,res,vec__31466,v,p,job,jobs,results))
;
return ((function (switch__31227__auto__,c__31315__auto___31637,res,vec__31466,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0 = (function (){
var statearr_31476 = [null,null,null,null,null,null,null,null];
(statearr_31476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__);

(statearr_31476[(1)] = (1));

return statearr_31476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1 = (function (state_31473){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_31473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e31477){if((e31477 instanceof Object)){
var ex__31231__auto__ = e31477;
var statearr_31478_31638 = state_31473;
(statearr_31478_31638[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31639 = state_31473;
state_31473 = G__31639;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__ = function(state_31473){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1.call(this,state_31473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___31637,res,vec__31466,v,p,job,jobs,results))
})();
var state__31317__auto__ = (function (){var statearr_31479 = f__31316__auto__.call(null);
(statearr_31479[(6)] = c__31315__auto___31637);

return statearr_31479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___31637,res,vec__31466,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31480){
var vec__31481 = p__31480;
var v = cljs.core.nth.call(null,vec__31481,(0),null);
var p = cljs.core.nth.call(null,vec__31481,(1),null);
var job = vec__31481;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28998__auto___31640 = n;
var __31641 = (0);
while(true){
if((__31641 < n__28998__auto___31640)){
var G__31484_31642 = type;
var G__31484_31643__$1 = (((G__31484_31642 instanceof cljs.core.Keyword))?G__31484_31642.fqn:null);
switch (G__31484_31643__$1) {
case "compute":
var c__31315__auto___31645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31641,c__31315__auto___31645,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (__31641,c__31315__auto___31645,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async){
return (function (state_31497){
var state_val_31498 = (state_31497[(1)]);
if((state_val_31498 === (1))){
var state_31497__$1 = state_31497;
var statearr_31499_31646 = state_31497__$1;
(statearr_31499_31646[(2)] = null);

(statearr_31499_31646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (2))){
var state_31497__$1 = state_31497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31497__$1,(4),jobs);
} else {
if((state_val_31498 === (3))){
var inst_31495 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31497__$1,inst_31495);
} else {
if((state_val_31498 === (4))){
var inst_31487 = (state_31497[(2)]);
var inst_31488 = process.call(null,inst_31487);
var state_31497__$1 = state_31497;
if(cljs.core.truth_(inst_31488)){
var statearr_31500_31647 = state_31497__$1;
(statearr_31500_31647[(1)] = (5));

} else {
var statearr_31501_31648 = state_31497__$1;
(statearr_31501_31648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (5))){
var state_31497__$1 = state_31497;
var statearr_31502_31649 = state_31497__$1;
(statearr_31502_31649[(2)] = null);

(statearr_31502_31649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (6))){
var state_31497__$1 = state_31497;
var statearr_31503_31650 = state_31497__$1;
(statearr_31503_31650[(2)] = null);

(statearr_31503_31650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (7))){
var inst_31493 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
var statearr_31504_31651 = state_31497__$1;
(statearr_31504_31651[(2)] = inst_31493);

(statearr_31504_31651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31641,c__31315__auto___31645,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async))
;
return ((function (__31641,switch__31227__auto__,c__31315__auto___31645,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0 = (function (){
var statearr_31505 = [null,null,null,null,null,null,null];
(statearr_31505[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__);

(statearr_31505[(1)] = (1));

return statearr_31505;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1 = (function (state_31497){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_31497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e31506){if((e31506 instanceof Object)){
var ex__31231__auto__ = e31506;
var statearr_31507_31652 = state_31497;
(statearr_31507_31652[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31653 = state_31497;
state_31497 = G__31653;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__ = function(state_31497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1.call(this,state_31497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__;
})()
;})(__31641,switch__31227__auto__,c__31315__auto___31645,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async))
})();
var state__31317__auto__ = (function (){var statearr_31508 = f__31316__auto__.call(null);
(statearr_31508[(6)] = c__31315__auto___31645);

return statearr_31508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(__31641,c__31315__auto___31645,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async))
);


break;
case "async":
var c__31315__auto___31654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31641,c__31315__auto___31654,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (__31641,c__31315__auto___31654,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async){
return (function (state_31521){
var state_val_31522 = (state_31521[(1)]);
if((state_val_31522 === (1))){
var state_31521__$1 = state_31521;
var statearr_31523_31655 = state_31521__$1;
(statearr_31523_31655[(2)] = null);

(statearr_31523_31655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (2))){
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31521__$1,(4),jobs);
} else {
if((state_val_31522 === (3))){
var inst_31519 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31521__$1,inst_31519);
} else {
if((state_val_31522 === (4))){
var inst_31511 = (state_31521[(2)]);
var inst_31512 = async.call(null,inst_31511);
var state_31521__$1 = state_31521;
if(cljs.core.truth_(inst_31512)){
var statearr_31524_31656 = state_31521__$1;
(statearr_31524_31656[(1)] = (5));

} else {
var statearr_31525_31657 = state_31521__$1;
(statearr_31525_31657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (5))){
var state_31521__$1 = state_31521;
var statearr_31526_31658 = state_31521__$1;
(statearr_31526_31658[(2)] = null);

(statearr_31526_31658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (6))){
var state_31521__$1 = state_31521;
var statearr_31527_31659 = state_31521__$1;
(statearr_31527_31659[(2)] = null);

(statearr_31527_31659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (7))){
var inst_31517 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31528_31660 = state_31521__$1;
(statearr_31528_31660[(2)] = inst_31517);

(statearr_31528_31660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31641,c__31315__auto___31654,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async))
;
return ((function (__31641,switch__31227__auto__,c__31315__auto___31654,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0 = (function (){
var statearr_31529 = [null,null,null,null,null,null,null];
(statearr_31529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__);

(statearr_31529[(1)] = (1));

return statearr_31529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1 = (function (state_31521){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_31521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e31530){if((e31530 instanceof Object)){
var ex__31231__auto__ = e31530;
var statearr_31531_31661 = state_31521;
(statearr_31531_31661[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31662 = state_31521;
state_31521 = G__31662;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__ = function(state_31521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1.call(this,state_31521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__;
})()
;})(__31641,switch__31227__auto__,c__31315__auto___31654,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async))
})();
var state__31317__auto__ = (function (){var statearr_31532 = f__31316__auto__.call(null);
(statearr_31532[(6)] = c__31315__auto___31654);

return statearr_31532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(__31641,c__31315__auto___31654,G__31484_31642,G__31484_31643__$1,n__28998__auto___31640,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31484_31643__$1)].join('')));

}

var G__31663 = (__31641 + (1));
__31641 = G__31663;
continue;
} else {
}
break;
}

var c__31315__auto___31664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___31664,jobs,results,process,async){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___31664,jobs,results,process,async){
return (function (state_31554){
var state_val_31555 = (state_31554[(1)]);
if((state_val_31555 === (1))){
var state_31554__$1 = state_31554;
var statearr_31556_31665 = state_31554__$1;
(statearr_31556_31665[(2)] = null);

(statearr_31556_31665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (2))){
var state_31554__$1 = state_31554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31554__$1,(4),from);
} else {
if((state_val_31555 === (3))){
var inst_31552 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31554__$1,inst_31552);
} else {
if((state_val_31555 === (4))){
var inst_31535 = (state_31554[(7)]);
var inst_31535__$1 = (state_31554[(2)]);
var inst_31536 = (inst_31535__$1 == null);
var state_31554__$1 = (function (){var statearr_31557 = state_31554;
(statearr_31557[(7)] = inst_31535__$1);

return statearr_31557;
})();
if(cljs.core.truth_(inst_31536)){
var statearr_31558_31666 = state_31554__$1;
(statearr_31558_31666[(1)] = (5));

} else {
var statearr_31559_31667 = state_31554__$1;
(statearr_31559_31667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (5))){
var inst_31538 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31554__$1 = state_31554;
var statearr_31560_31668 = state_31554__$1;
(statearr_31560_31668[(2)] = inst_31538);

(statearr_31560_31668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (6))){
var inst_31540 = (state_31554[(8)]);
var inst_31535 = (state_31554[(7)]);
var inst_31540__$1 = cljs.core.async.chan.call(null,(1));
var inst_31541 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31542 = [inst_31535,inst_31540__$1];
var inst_31543 = (new cljs.core.PersistentVector(null,2,(5),inst_31541,inst_31542,null));
var state_31554__$1 = (function (){var statearr_31561 = state_31554;
(statearr_31561[(8)] = inst_31540__$1);

return statearr_31561;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31554__$1,(8),jobs,inst_31543);
} else {
if((state_val_31555 === (7))){
var inst_31550 = (state_31554[(2)]);
var state_31554__$1 = state_31554;
var statearr_31562_31669 = state_31554__$1;
(statearr_31562_31669[(2)] = inst_31550);

(statearr_31562_31669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31555 === (8))){
var inst_31540 = (state_31554[(8)]);
var inst_31545 = (state_31554[(2)]);
var state_31554__$1 = (function (){var statearr_31563 = state_31554;
(statearr_31563[(9)] = inst_31545);

return statearr_31563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31554__$1,(9),results,inst_31540);
} else {
if((state_val_31555 === (9))){
var inst_31547 = (state_31554[(2)]);
var state_31554__$1 = (function (){var statearr_31564 = state_31554;
(statearr_31564[(10)] = inst_31547);

return statearr_31564;
})();
var statearr_31565_31670 = state_31554__$1;
(statearr_31565_31670[(2)] = null);

(statearr_31565_31670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___31664,jobs,results,process,async))
;
return ((function (switch__31227__auto__,c__31315__auto___31664,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0 = (function (){
var statearr_31566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__);

(statearr_31566[(1)] = (1));

return statearr_31566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1 = (function (state_31554){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_31554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e31567){if((e31567 instanceof Object)){
var ex__31231__auto__ = e31567;
var statearr_31568_31671 = state_31554;
(statearr_31568_31671[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31672 = state_31554;
state_31554 = G__31672;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__ = function(state_31554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1.call(this,state_31554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___31664,jobs,results,process,async))
})();
var state__31317__auto__ = (function (){var statearr_31569 = f__31316__auto__.call(null);
(statearr_31569[(6)] = c__31315__auto___31664);

return statearr_31569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___31664,jobs,results,process,async))
);


var c__31315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto__,jobs,results,process,async){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto__,jobs,results,process,async){
return (function (state_31607){
var state_val_31608 = (state_31607[(1)]);
if((state_val_31608 === (7))){
var inst_31603 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31609_31673 = state_31607__$1;
(statearr_31609_31673[(2)] = inst_31603);

(statearr_31609_31673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (20))){
var state_31607__$1 = state_31607;
var statearr_31610_31674 = state_31607__$1;
(statearr_31610_31674[(2)] = null);

(statearr_31610_31674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (1))){
var state_31607__$1 = state_31607;
var statearr_31611_31675 = state_31607__$1;
(statearr_31611_31675[(2)] = null);

(statearr_31611_31675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (4))){
var inst_31572 = (state_31607[(7)]);
var inst_31572__$1 = (state_31607[(2)]);
var inst_31573 = (inst_31572__$1 == null);
var state_31607__$1 = (function (){var statearr_31612 = state_31607;
(statearr_31612[(7)] = inst_31572__$1);

return statearr_31612;
})();
if(cljs.core.truth_(inst_31573)){
var statearr_31613_31676 = state_31607__$1;
(statearr_31613_31676[(1)] = (5));

} else {
var statearr_31614_31677 = state_31607__$1;
(statearr_31614_31677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (15))){
var inst_31585 = (state_31607[(8)]);
var state_31607__$1 = state_31607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31607__$1,(18),to,inst_31585);
} else {
if((state_val_31608 === (21))){
var inst_31598 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31615_31678 = state_31607__$1;
(statearr_31615_31678[(2)] = inst_31598);

(statearr_31615_31678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (13))){
var inst_31600 = (state_31607[(2)]);
var state_31607__$1 = (function (){var statearr_31616 = state_31607;
(statearr_31616[(9)] = inst_31600);

return statearr_31616;
})();
var statearr_31617_31679 = state_31607__$1;
(statearr_31617_31679[(2)] = null);

(statearr_31617_31679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (6))){
var inst_31572 = (state_31607[(7)]);
var state_31607__$1 = state_31607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31607__$1,(11),inst_31572);
} else {
if((state_val_31608 === (17))){
var inst_31593 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31593)){
var statearr_31618_31680 = state_31607__$1;
(statearr_31618_31680[(1)] = (19));

} else {
var statearr_31619_31681 = state_31607__$1;
(statearr_31619_31681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (3))){
var inst_31605 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31607__$1,inst_31605);
} else {
if((state_val_31608 === (12))){
var inst_31582 = (state_31607[(10)]);
var state_31607__$1 = state_31607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31607__$1,(14),inst_31582);
} else {
if((state_val_31608 === (2))){
var state_31607__$1 = state_31607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31607__$1,(4),results);
} else {
if((state_val_31608 === (19))){
var state_31607__$1 = state_31607;
var statearr_31620_31682 = state_31607__$1;
(statearr_31620_31682[(2)] = null);

(statearr_31620_31682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (11))){
var inst_31582 = (state_31607[(2)]);
var state_31607__$1 = (function (){var statearr_31621 = state_31607;
(statearr_31621[(10)] = inst_31582);

return statearr_31621;
})();
var statearr_31622_31683 = state_31607__$1;
(statearr_31622_31683[(2)] = null);

(statearr_31622_31683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (9))){
var state_31607__$1 = state_31607;
var statearr_31623_31684 = state_31607__$1;
(statearr_31623_31684[(2)] = null);

(statearr_31623_31684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (5))){
var state_31607__$1 = state_31607;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31624_31685 = state_31607__$1;
(statearr_31624_31685[(1)] = (8));

} else {
var statearr_31625_31686 = state_31607__$1;
(statearr_31625_31686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (14))){
var inst_31587 = (state_31607[(11)]);
var inst_31585 = (state_31607[(8)]);
var inst_31585__$1 = (state_31607[(2)]);
var inst_31586 = (inst_31585__$1 == null);
var inst_31587__$1 = cljs.core.not.call(null,inst_31586);
var state_31607__$1 = (function (){var statearr_31626 = state_31607;
(statearr_31626[(11)] = inst_31587__$1);

(statearr_31626[(8)] = inst_31585__$1);

return statearr_31626;
})();
if(inst_31587__$1){
var statearr_31627_31687 = state_31607__$1;
(statearr_31627_31687[(1)] = (15));

} else {
var statearr_31628_31688 = state_31607__$1;
(statearr_31628_31688[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (16))){
var inst_31587 = (state_31607[(11)]);
var state_31607__$1 = state_31607;
var statearr_31629_31689 = state_31607__$1;
(statearr_31629_31689[(2)] = inst_31587);

(statearr_31629_31689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (10))){
var inst_31579 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31630_31690 = state_31607__$1;
(statearr_31630_31690[(2)] = inst_31579);

(statearr_31630_31690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (18))){
var inst_31590 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31631_31691 = state_31607__$1;
(statearr_31631_31691[(2)] = inst_31590);

(statearr_31631_31691[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (8))){
var inst_31576 = cljs.core.async.close_BANG_.call(null,to);
var state_31607__$1 = state_31607;
var statearr_31632_31692 = state_31607__$1;
(statearr_31632_31692[(2)] = inst_31576);

(statearr_31632_31692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto__,jobs,results,process,async))
;
return ((function (switch__31227__auto__,c__31315__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0 = (function (){
var statearr_31633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31633[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__);

(statearr_31633[(1)] = (1));

return statearr_31633;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1 = (function (state_31607){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_31607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e31634){if((e31634 instanceof Object)){
var ex__31231__auto__ = e31634;
var statearr_31635_31693 = state_31607;
(statearr_31635_31693[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31694 = state_31607;
state_31607 = G__31694;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__ = function(state_31607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1.call(this,state_31607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto__,jobs,results,process,async))
})();
var state__31317__auto__ = (function (){var statearr_31636 = f__31316__auto__.call(null);
(statearr_31636[(6)] = c__31315__auto__);

return statearr_31636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto__,jobs,results,process,async))
);

return c__31315__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31696 = arguments.length;
switch (G__31696) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31699 = arguments.length;
switch (G__31699) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31702 = arguments.length;
switch (G__31702) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31315__auto___31751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___31751,tc,fc){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___31751,tc,fc){
return (function (state_31728){
var state_val_31729 = (state_31728[(1)]);
if((state_val_31729 === (7))){
var inst_31724 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31730_31752 = state_31728__$1;
(statearr_31730_31752[(2)] = inst_31724);

(statearr_31730_31752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (1))){
var state_31728__$1 = state_31728;
var statearr_31731_31753 = state_31728__$1;
(statearr_31731_31753[(2)] = null);

(statearr_31731_31753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (4))){
var inst_31705 = (state_31728[(7)]);
var inst_31705__$1 = (state_31728[(2)]);
var inst_31706 = (inst_31705__$1 == null);
var state_31728__$1 = (function (){var statearr_31732 = state_31728;
(statearr_31732[(7)] = inst_31705__$1);

return statearr_31732;
})();
if(cljs.core.truth_(inst_31706)){
var statearr_31733_31754 = state_31728__$1;
(statearr_31733_31754[(1)] = (5));

} else {
var statearr_31734_31755 = state_31728__$1;
(statearr_31734_31755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (13))){
var state_31728__$1 = state_31728;
var statearr_31735_31756 = state_31728__$1;
(statearr_31735_31756[(2)] = null);

(statearr_31735_31756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (6))){
var inst_31705 = (state_31728[(7)]);
var inst_31711 = p.call(null,inst_31705);
var state_31728__$1 = state_31728;
if(cljs.core.truth_(inst_31711)){
var statearr_31736_31757 = state_31728__$1;
(statearr_31736_31757[(1)] = (9));

} else {
var statearr_31737_31758 = state_31728__$1;
(statearr_31737_31758[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (3))){
var inst_31726 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31728__$1,inst_31726);
} else {
if((state_val_31729 === (12))){
var state_31728__$1 = state_31728;
var statearr_31738_31759 = state_31728__$1;
(statearr_31738_31759[(2)] = null);

(statearr_31738_31759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (2))){
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(4),ch);
} else {
if((state_val_31729 === (11))){
var inst_31705 = (state_31728[(7)]);
var inst_31715 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31728__$1,(8),inst_31715,inst_31705);
} else {
if((state_val_31729 === (9))){
var state_31728__$1 = state_31728;
var statearr_31739_31760 = state_31728__$1;
(statearr_31739_31760[(2)] = tc);

(statearr_31739_31760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (5))){
var inst_31708 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31709 = cljs.core.async.close_BANG_.call(null,fc);
var state_31728__$1 = (function (){var statearr_31740 = state_31728;
(statearr_31740[(8)] = inst_31708);

return statearr_31740;
})();
var statearr_31741_31761 = state_31728__$1;
(statearr_31741_31761[(2)] = inst_31709);

(statearr_31741_31761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (14))){
var inst_31722 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31742_31762 = state_31728__$1;
(statearr_31742_31762[(2)] = inst_31722);

(statearr_31742_31762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (10))){
var state_31728__$1 = state_31728;
var statearr_31743_31763 = state_31728__$1;
(statearr_31743_31763[(2)] = fc);

(statearr_31743_31763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (8))){
var inst_31717 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
if(cljs.core.truth_(inst_31717)){
var statearr_31744_31764 = state_31728__$1;
(statearr_31744_31764[(1)] = (12));

} else {
var statearr_31745_31765 = state_31728__$1;
(statearr_31745_31765[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___31751,tc,fc))
;
return ((function (switch__31227__auto__,c__31315__auto___31751,tc,fc){
return (function() {
var cljs$core$async$state_machine__31228__auto__ = null;
var cljs$core$async$state_machine__31228__auto____0 = (function (){
var statearr_31746 = [null,null,null,null,null,null,null,null,null];
(statearr_31746[(0)] = cljs$core$async$state_machine__31228__auto__);

(statearr_31746[(1)] = (1));

return statearr_31746;
});
var cljs$core$async$state_machine__31228__auto____1 = (function (state_31728){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_31728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e31747){if((e31747 instanceof Object)){
var ex__31231__auto__ = e31747;
var statearr_31748_31766 = state_31728;
(statearr_31748_31766[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31767 = state_31728;
state_31728 = G__31767;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$state_machine__31228__auto__ = function(state_31728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31228__auto____1.call(this,state_31728);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31228__auto____0;
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31228__auto____1;
return cljs$core$async$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___31751,tc,fc))
})();
var state__31317__auto__ = (function (){var statearr_31749 = f__31316__auto__.call(null);
(statearr_31749[(6)] = c__31315__auto___31751);

return statearr_31749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___31751,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto__){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto__){
return (function (state_31788){
var state_val_31789 = (state_31788[(1)]);
if((state_val_31789 === (7))){
var inst_31784 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31790_31808 = state_31788__$1;
(statearr_31790_31808[(2)] = inst_31784);

(statearr_31790_31808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (1))){
var inst_31768 = init;
var state_31788__$1 = (function (){var statearr_31791 = state_31788;
(statearr_31791[(7)] = inst_31768);

return statearr_31791;
})();
var statearr_31792_31809 = state_31788__$1;
(statearr_31792_31809[(2)] = null);

(statearr_31792_31809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (4))){
var inst_31771 = (state_31788[(8)]);
var inst_31771__$1 = (state_31788[(2)]);
var inst_31772 = (inst_31771__$1 == null);
var state_31788__$1 = (function (){var statearr_31793 = state_31788;
(statearr_31793[(8)] = inst_31771__$1);

return statearr_31793;
})();
if(cljs.core.truth_(inst_31772)){
var statearr_31794_31810 = state_31788__$1;
(statearr_31794_31810[(1)] = (5));

} else {
var statearr_31795_31811 = state_31788__$1;
(statearr_31795_31811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (6))){
var inst_31768 = (state_31788[(7)]);
var inst_31775 = (state_31788[(9)]);
var inst_31771 = (state_31788[(8)]);
var inst_31775__$1 = f.call(null,inst_31768,inst_31771);
var inst_31776 = cljs.core.reduced_QMARK_.call(null,inst_31775__$1);
var state_31788__$1 = (function (){var statearr_31796 = state_31788;
(statearr_31796[(9)] = inst_31775__$1);

return statearr_31796;
})();
if(inst_31776){
var statearr_31797_31812 = state_31788__$1;
(statearr_31797_31812[(1)] = (8));

} else {
var statearr_31798_31813 = state_31788__$1;
(statearr_31798_31813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (3))){
var inst_31786 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31788__$1,inst_31786);
} else {
if((state_val_31789 === (2))){
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31788__$1,(4),ch);
} else {
if((state_val_31789 === (9))){
var inst_31775 = (state_31788[(9)]);
var inst_31768 = inst_31775;
var state_31788__$1 = (function (){var statearr_31799 = state_31788;
(statearr_31799[(7)] = inst_31768);

return statearr_31799;
})();
var statearr_31800_31814 = state_31788__$1;
(statearr_31800_31814[(2)] = null);

(statearr_31800_31814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (5))){
var inst_31768 = (state_31788[(7)]);
var state_31788__$1 = state_31788;
var statearr_31801_31815 = state_31788__$1;
(statearr_31801_31815[(2)] = inst_31768);

(statearr_31801_31815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (10))){
var inst_31782 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31802_31816 = state_31788__$1;
(statearr_31802_31816[(2)] = inst_31782);

(statearr_31802_31816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (8))){
var inst_31775 = (state_31788[(9)]);
var inst_31778 = cljs.core.deref.call(null,inst_31775);
var state_31788__$1 = state_31788;
var statearr_31803_31817 = state_31788__$1;
(statearr_31803_31817[(2)] = inst_31778);

(statearr_31803_31817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto__))
;
return ((function (switch__31227__auto__,c__31315__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31228__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31228__auto____0 = (function (){
var statearr_31804 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31804[(0)] = cljs$core$async$reduce_$_state_machine__31228__auto__);

(statearr_31804[(1)] = (1));

return statearr_31804;
});
var cljs$core$async$reduce_$_state_machine__31228__auto____1 = (function (state_31788){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_31788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e31805){if((e31805 instanceof Object)){
var ex__31231__auto__ = e31805;
var statearr_31806_31818 = state_31788;
(statearr_31806_31818[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31819 = state_31788;
state_31788 = G__31819;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31228__auto__ = function(state_31788){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31228__auto____1.call(this,state_31788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31228__auto____0;
cljs$core$async$reduce_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31228__auto____1;
return cljs$core$async$reduce_$_state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto__))
})();
var state__31317__auto__ = (function (){var statearr_31807 = f__31316__auto__.call(null);
(statearr_31807[(6)] = c__31315__auto__);

return statearr_31807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto__))
);

return c__31315__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto__,f__$1){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto__,f__$1){
return (function (state_31825){
var state_val_31826 = (state_31825[(1)]);
if((state_val_31826 === (1))){
var inst_31820 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31825__$1 = state_31825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31825__$1,(2),inst_31820);
} else {
if((state_val_31826 === (2))){
var inst_31822 = (state_31825[(2)]);
var inst_31823 = f__$1.call(null,inst_31822);
var state_31825__$1 = state_31825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31825__$1,inst_31823);
} else {
return null;
}
}
});})(c__31315__auto__,f__$1))
;
return ((function (switch__31227__auto__,c__31315__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31228__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31228__auto____0 = (function (){
var statearr_31827 = [null,null,null,null,null,null,null];
(statearr_31827[(0)] = cljs$core$async$transduce_$_state_machine__31228__auto__);

(statearr_31827[(1)] = (1));

return statearr_31827;
});
var cljs$core$async$transduce_$_state_machine__31228__auto____1 = (function (state_31825){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_31825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e31828){if((e31828 instanceof Object)){
var ex__31231__auto__ = e31828;
var statearr_31829_31831 = state_31825;
(statearr_31829_31831[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31832 = state_31825;
state_31825 = G__31832;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31228__auto__ = function(state_31825){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31228__auto____1.call(this,state_31825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31228__auto____0;
cljs$core$async$transduce_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31228__auto____1;
return cljs$core$async$transduce_$_state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto__,f__$1))
})();
var state__31317__auto__ = (function (){var statearr_31830 = f__31316__auto__.call(null);
(statearr_31830[(6)] = c__31315__auto__);

return statearr_31830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto__,f__$1))
);

return c__31315__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31834 = arguments.length;
switch (G__31834) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto__){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto__){
return (function (state_31859){
var state_val_31860 = (state_31859[(1)]);
if((state_val_31860 === (7))){
var inst_31841 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
var statearr_31861_31882 = state_31859__$1;
(statearr_31861_31882[(2)] = inst_31841);

(statearr_31861_31882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (1))){
var inst_31835 = cljs.core.seq.call(null,coll);
var inst_31836 = inst_31835;
var state_31859__$1 = (function (){var statearr_31862 = state_31859;
(statearr_31862[(7)] = inst_31836);

return statearr_31862;
})();
var statearr_31863_31883 = state_31859__$1;
(statearr_31863_31883[(2)] = null);

(statearr_31863_31883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (4))){
var inst_31836 = (state_31859[(7)]);
var inst_31839 = cljs.core.first.call(null,inst_31836);
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31859__$1,(7),ch,inst_31839);
} else {
if((state_val_31860 === (13))){
var inst_31853 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
var statearr_31864_31884 = state_31859__$1;
(statearr_31864_31884[(2)] = inst_31853);

(statearr_31864_31884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (6))){
var inst_31844 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
if(cljs.core.truth_(inst_31844)){
var statearr_31865_31885 = state_31859__$1;
(statearr_31865_31885[(1)] = (8));

} else {
var statearr_31866_31886 = state_31859__$1;
(statearr_31866_31886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (3))){
var inst_31857 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31859__$1,inst_31857);
} else {
if((state_val_31860 === (12))){
var state_31859__$1 = state_31859;
var statearr_31867_31887 = state_31859__$1;
(statearr_31867_31887[(2)] = null);

(statearr_31867_31887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (2))){
var inst_31836 = (state_31859[(7)]);
var state_31859__$1 = state_31859;
if(cljs.core.truth_(inst_31836)){
var statearr_31868_31888 = state_31859__$1;
(statearr_31868_31888[(1)] = (4));

} else {
var statearr_31869_31889 = state_31859__$1;
(statearr_31869_31889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (11))){
var inst_31850 = cljs.core.async.close_BANG_.call(null,ch);
var state_31859__$1 = state_31859;
var statearr_31870_31890 = state_31859__$1;
(statearr_31870_31890[(2)] = inst_31850);

(statearr_31870_31890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (9))){
var state_31859__$1 = state_31859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31871_31891 = state_31859__$1;
(statearr_31871_31891[(1)] = (11));

} else {
var statearr_31872_31892 = state_31859__$1;
(statearr_31872_31892[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (5))){
var inst_31836 = (state_31859[(7)]);
var state_31859__$1 = state_31859;
var statearr_31873_31893 = state_31859__$1;
(statearr_31873_31893[(2)] = inst_31836);

(statearr_31873_31893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (10))){
var inst_31855 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
var statearr_31874_31894 = state_31859__$1;
(statearr_31874_31894[(2)] = inst_31855);

(statearr_31874_31894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (8))){
var inst_31836 = (state_31859[(7)]);
var inst_31846 = cljs.core.next.call(null,inst_31836);
var inst_31836__$1 = inst_31846;
var state_31859__$1 = (function (){var statearr_31875 = state_31859;
(statearr_31875[(7)] = inst_31836__$1);

return statearr_31875;
})();
var statearr_31876_31895 = state_31859__$1;
(statearr_31876_31895[(2)] = null);

(statearr_31876_31895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto__))
;
return ((function (switch__31227__auto__,c__31315__auto__){
return (function() {
var cljs$core$async$state_machine__31228__auto__ = null;
var cljs$core$async$state_machine__31228__auto____0 = (function (){
var statearr_31877 = [null,null,null,null,null,null,null,null];
(statearr_31877[(0)] = cljs$core$async$state_machine__31228__auto__);

(statearr_31877[(1)] = (1));

return statearr_31877;
});
var cljs$core$async$state_machine__31228__auto____1 = (function (state_31859){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_31859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e31878){if((e31878 instanceof Object)){
var ex__31231__auto__ = e31878;
var statearr_31879_31896 = state_31859;
(statearr_31879_31896[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31897 = state_31859;
state_31859 = G__31897;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$state_machine__31228__auto__ = function(state_31859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31228__auto____1.call(this,state_31859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31228__auto____0;
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31228__auto____1;
return cljs$core$async$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto__))
})();
var state__31317__auto__ = (function (){var statearr_31880 = f__31316__auto__.call(null);
(statearr_31880[(6)] = c__31315__auto__);

return statearr_31880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto__))
);

return c__31315__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28734__auto__ = (((_ == null))?null:_);
var m__28735__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,_);
} else {
var m__28735__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28735__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m);
} else {
var m__28735__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31898 = (function (ch,cs,meta31899){
this.ch = ch;
this.cs = cs;
this.meta31899 = meta31899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31900,meta31899__$1){
var self__ = this;
var _31900__$1 = this;
return (new cljs.core.async.t_cljs$core$async31898(self__.ch,self__.cs,meta31899__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31900){
var self__ = this;
var _31900__$1 = this;
return self__.meta31899;
});})(cs))
;

cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31898.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31899","meta31899",-1471684907,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31898";

cljs.core.async.t_cljs$core$async31898.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async31898");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31898 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31898(ch__$1,cs__$1,meta31899){
return (new cljs.core.async.t_cljs$core$async31898(ch__$1,cs__$1,meta31899));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31898(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31315__auto___32120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___32120,cs,m,dchan,dctr,done){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___32120,cs,m,dchan,dctr,done){
return (function (state_32035){
var state_val_32036 = (state_32035[(1)]);
if((state_val_32036 === (7))){
var inst_32031 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
var statearr_32037_32121 = state_32035__$1;
(statearr_32037_32121[(2)] = inst_32031);

(statearr_32037_32121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (20))){
var inst_31934 = (state_32035[(7)]);
var inst_31946 = cljs.core.first.call(null,inst_31934);
var inst_31947 = cljs.core.nth.call(null,inst_31946,(0),null);
var inst_31948 = cljs.core.nth.call(null,inst_31946,(1),null);
var state_32035__$1 = (function (){var statearr_32038 = state_32035;
(statearr_32038[(8)] = inst_31947);

return statearr_32038;
})();
if(cljs.core.truth_(inst_31948)){
var statearr_32039_32122 = state_32035__$1;
(statearr_32039_32122[(1)] = (22));

} else {
var statearr_32040_32123 = state_32035__$1;
(statearr_32040_32123[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (27))){
var inst_31903 = (state_32035[(9)]);
var inst_31976 = (state_32035[(10)]);
var inst_31978 = (state_32035[(11)]);
var inst_31983 = (state_32035[(12)]);
var inst_31983__$1 = cljs.core._nth.call(null,inst_31976,inst_31978);
var inst_31984 = cljs.core.async.put_BANG_.call(null,inst_31983__$1,inst_31903,done);
var state_32035__$1 = (function (){var statearr_32041 = state_32035;
(statearr_32041[(12)] = inst_31983__$1);

return statearr_32041;
})();
if(cljs.core.truth_(inst_31984)){
var statearr_32042_32124 = state_32035__$1;
(statearr_32042_32124[(1)] = (30));

} else {
var statearr_32043_32125 = state_32035__$1;
(statearr_32043_32125[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (1))){
var state_32035__$1 = state_32035;
var statearr_32044_32126 = state_32035__$1;
(statearr_32044_32126[(2)] = null);

(statearr_32044_32126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (24))){
var inst_31934 = (state_32035[(7)]);
var inst_31953 = (state_32035[(2)]);
var inst_31954 = cljs.core.next.call(null,inst_31934);
var inst_31912 = inst_31954;
var inst_31913 = null;
var inst_31914 = (0);
var inst_31915 = (0);
var state_32035__$1 = (function (){var statearr_32045 = state_32035;
(statearr_32045[(13)] = inst_31953);

(statearr_32045[(14)] = inst_31912);

(statearr_32045[(15)] = inst_31915);

(statearr_32045[(16)] = inst_31914);

(statearr_32045[(17)] = inst_31913);

return statearr_32045;
})();
var statearr_32046_32127 = state_32035__$1;
(statearr_32046_32127[(2)] = null);

(statearr_32046_32127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (39))){
var state_32035__$1 = state_32035;
var statearr_32050_32128 = state_32035__$1;
(statearr_32050_32128[(2)] = null);

(statearr_32050_32128[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (4))){
var inst_31903 = (state_32035[(9)]);
var inst_31903__$1 = (state_32035[(2)]);
var inst_31904 = (inst_31903__$1 == null);
var state_32035__$1 = (function (){var statearr_32051 = state_32035;
(statearr_32051[(9)] = inst_31903__$1);

return statearr_32051;
})();
if(cljs.core.truth_(inst_31904)){
var statearr_32052_32129 = state_32035__$1;
(statearr_32052_32129[(1)] = (5));

} else {
var statearr_32053_32130 = state_32035__$1;
(statearr_32053_32130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (15))){
var inst_31912 = (state_32035[(14)]);
var inst_31915 = (state_32035[(15)]);
var inst_31914 = (state_32035[(16)]);
var inst_31913 = (state_32035[(17)]);
var inst_31930 = (state_32035[(2)]);
var inst_31931 = (inst_31915 + (1));
var tmp32047 = inst_31912;
var tmp32048 = inst_31914;
var tmp32049 = inst_31913;
var inst_31912__$1 = tmp32047;
var inst_31913__$1 = tmp32049;
var inst_31914__$1 = tmp32048;
var inst_31915__$1 = inst_31931;
var state_32035__$1 = (function (){var statearr_32054 = state_32035;
(statearr_32054[(14)] = inst_31912__$1);

(statearr_32054[(18)] = inst_31930);

(statearr_32054[(15)] = inst_31915__$1);

(statearr_32054[(16)] = inst_31914__$1);

(statearr_32054[(17)] = inst_31913__$1);

return statearr_32054;
})();
var statearr_32055_32131 = state_32035__$1;
(statearr_32055_32131[(2)] = null);

(statearr_32055_32131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (21))){
var inst_31957 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
var statearr_32059_32132 = state_32035__$1;
(statearr_32059_32132[(2)] = inst_31957);

(statearr_32059_32132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (31))){
var inst_31983 = (state_32035[(12)]);
var inst_31987 = done.call(null,null);
var inst_31988 = cljs.core.async.untap_STAR_.call(null,m,inst_31983);
var state_32035__$1 = (function (){var statearr_32060 = state_32035;
(statearr_32060[(19)] = inst_31987);

return statearr_32060;
})();
var statearr_32061_32133 = state_32035__$1;
(statearr_32061_32133[(2)] = inst_31988);

(statearr_32061_32133[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (32))){
var inst_31975 = (state_32035[(20)]);
var inst_31976 = (state_32035[(10)]);
var inst_31977 = (state_32035[(21)]);
var inst_31978 = (state_32035[(11)]);
var inst_31990 = (state_32035[(2)]);
var inst_31991 = (inst_31978 + (1));
var tmp32056 = inst_31975;
var tmp32057 = inst_31976;
var tmp32058 = inst_31977;
var inst_31975__$1 = tmp32056;
var inst_31976__$1 = tmp32057;
var inst_31977__$1 = tmp32058;
var inst_31978__$1 = inst_31991;
var state_32035__$1 = (function (){var statearr_32062 = state_32035;
(statearr_32062[(20)] = inst_31975__$1);

(statearr_32062[(10)] = inst_31976__$1);

(statearr_32062[(21)] = inst_31977__$1);

(statearr_32062[(11)] = inst_31978__$1);

(statearr_32062[(22)] = inst_31990);

return statearr_32062;
})();
var statearr_32063_32134 = state_32035__$1;
(statearr_32063_32134[(2)] = null);

(statearr_32063_32134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (40))){
var inst_32003 = (state_32035[(23)]);
var inst_32007 = done.call(null,null);
var inst_32008 = cljs.core.async.untap_STAR_.call(null,m,inst_32003);
var state_32035__$1 = (function (){var statearr_32064 = state_32035;
(statearr_32064[(24)] = inst_32007);

return statearr_32064;
})();
var statearr_32065_32135 = state_32035__$1;
(statearr_32065_32135[(2)] = inst_32008);

(statearr_32065_32135[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (33))){
var inst_31994 = (state_32035[(25)]);
var inst_31996 = cljs.core.chunked_seq_QMARK_.call(null,inst_31994);
var state_32035__$1 = state_32035;
if(inst_31996){
var statearr_32066_32136 = state_32035__$1;
(statearr_32066_32136[(1)] = (36));

} else {
var statearr_32067_32137 = state_32035__$1;
(statearr_32067_32137[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (13))){
var inst_31924 = (state_32035[(26)]);
var inst_31927 = cljs.core.async.close_BANG_.call(null,inst_31924);
var state_32035__$1 = state_32035;
var statearr_32068_32138 = state_32035__$1;
(statearr_32068_32138[(2)] = inst_31927);

(statearr_32068_32138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (22))){
var inst_31947 = (state_32035[(8)]);
var inst_31950 = cljs.core.async.close_BANG_.call(null,inst_31947);
var state_32035__$1 = state_32035;
var statearr_32069_32139 = state_32035__$1;
(statearr_32069_32139[(2)] = inst_31950);

(statearr_32069_32139[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (36))){
var inst_31994 = (state_32035[(25)]);
var inst_31998 = cljs.core.chunk_first.call(null,inst_31994);
var inst_31999 = cljs.core.chunk_rest.call(null,inst_31994);
var inst_32000 = cljs.core.count.call(null,inst_31998);
var inst_31975 = inst_31999;
var inst_31976 = inst_31998;
var inst_31977 = inst_32000;
var inst_31978 = (0);
var state_32035__$1 = (function (){var statearr_32070 = state_32035;
(statearr_32070[(20)] = inst_31975);

(statearr_32070[(10)] = inst_31976);

(statearr_32070[(21)] = inst_31977);

(statearr_32070[(11)] = inst_31978);

return statearr_32070;
})();
var statearr_32071_32140 = state_32035__$1;
(statearr_32071_32140[(2)] = null);

(statearr_32071_32140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (41))){
var inst_31994 = (state_32035[(25)]);
var inst_32010 = (state_32035[(2)]);
var inst_32011 = cljs.core.next.call(null,inst_31994);
var inst_31975 = inst_32011;
var inst_31976 = null;
var inst_31977 = (0);
var inst_31978 = (0);
var state_32035__$1 = (function (){var statearr_32072 = state_32035;
(statearr_32072[(20)] = inst_31975);

(statearr_32072[(10)] = inst_31976);

(statearr_32072[(21)] = inst_31977);

(statearr_32072[(11)] = inst_31978);

(statearr_32072[(27)] = inst_32010);

return statearr_32072;
})();
var statearr_32073_32141 = state_32035__$1;
(statearr_32073_32141[(2)] = null);

(statearr_32073_32141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (43))){
var state_32035__$1 = state_32035;
var statearr_32074_32142 = state_32035__$1;
(statearr_32074_32142[(2)] = null);

(statearr_32074_32142[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (29))){
var inst_32019 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
var statearr_32075_32143 = state_32035__$1;
(statearr_32075_32143[(2)] = inst_32019);

(statearr_32075_32143[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (44))){
var inst_32028 = (state_32035[(2)]);
var state_32035__$1 = (function (){var statearr_32076 = state_32035;
(statearr_32076[(28)] = inst_32028);

return statearr_32076;
})();
var statearr_32077_32144 = state_32035__$1;
(statearr_32077_32144[(2)] = null);

(statearr_32077_32144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (6))){
var inst_31967 = (state_32035[(29)]);
var inst_31966 = cljs.core.deref.call(null,cs);
var inst_31967__$1 = cljs.core.keys.call(null,inst_31966);
var inst_31968 = cljs.core.count.call(null,inst_31967__$1);
var inst_31969 = cljs.core.reset_BANG_.call(null,dctr,inst_31968);
var inst_31974 = cljs.core.seq.call(null,inst_31967__$1);
var inst_31975 = inst_31974;
var inst_31976 = null;
var inst_31977 = (0);
var inst_31978 = (0);
var state_32035__$1 = (function (){var statearr_32078 = state_32035;
(statearr_32078[(20)] = inst_31975);

(statearr_32078[(29)] = inst_31967__$1);

(statearr_32078[(10)] = inst_31976);

(statearr_32078[(21)] = inst_31977);

(statearr_32078[(30)] = inst_31969);

(statearr_32078[(11)] = inst_31978);

return statearr_32078;
})();
var statearr_32079_32145 = state_32035__$1;
(statearr_32079_32145[(2)] = null);

(statearr_32079_32145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (28))){
var inst_31975 = (state_32035[(20)]);
var inst_31994 = (state_32035[(25)]);
var inst_31994__$1 = cljs.core.seq.call(null,inst_31975);
var state_32035__$1 = (function (){var statearr_32080 = state_32035;
(statearr_32080[(25)] = inst_31994__$1);

return statearr_32080;
})();
if(inst_31994__$1){
var statearr_32081_32146 = state_32035__$1;
(statearr_32081_32146[(1)] = (33));

} else {
var statearr_32082_32147 = state_32035__$1;
(statearr_32082_32147[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (25))){
var inst_31977 = (state_32035[(21)]);
var inst_31978 = (state_32035[(11)]);
var inst_31980 = (inst_31978 < inst_31977);
var inst_31981 = inst_31980;
var state_32035__$1 = state_32035;
if(cljs.core.truth_(inst_31981)){
var statearr_32083_32148 = state_32035__$1;
(statearr_32083_32148[(1)] = (27));

} else {
var statearr_32084_32149 = state_32035__$1;
(statearr_32084_32149[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (34))){
var state_32035__$1 = state_32035;
var statearr_32085_32150 = state_32035__$1;
(statearr_32085_32150[(2)] = null);

(statearr_32085_32150[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (17))){
var state_32035__$1 = state_32035;
var statearr_32086_32151 = state_32035__$1;
(statearr_32086_32151[(2)] = null);

(statearr_32086_32151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (3))){
var inst_32033 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32035__$1,inst_32033);
} else {
if((state_val_32036 === (12))){
var inst_31962 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
var statearr_32087_32152 = state_32035__$1;
(statearr_32087_32152[(2)] = inst_31962);

(statearr_32087_32152[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (2))){
var state_32035__$1 = state_32035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32035__$1,(4),ch);
} else {
if((state_val_32036 === (23))){
var state_32035__$1 = state_32035;
var statearr_32088_32153 = state_32035__$1;
(statearr_32088_32153[(2)] = null);

(statearr_32088_32153[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (35))){
var inst_32017 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
var statearr_32089_32154 = state_32035__$1;
(statearr_32089_32154[(2)] = inst_32017);

(statearr_32089_32154[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (19))){
var inst_31934 = (state_32035[(7)]);
var inst_31938 = cljs.core.chunk_first.call(null,inst_31934);
var inst_31939 = cljs.core.chunk_rest.call(null,inst_31934);
var inst_31940 = cljs.core.count.call(null,inst_31938);
var inst_31912 = inst_31939;
var inst_31913 = inst_31938;
var inst_31914 = inst_31940;
var inst_31915 = (0);
var state_32035__$1 = (function (){var statearr_32090 = state_32035;
(statearr_32090[(14)] = inst_31912);

(statearr_32090[(15)] = inst_31915);

(statearr_32090[(16)] = inst_31914);

(statearr_32090[(17)] = inst_31913);

return statearr_32090;
})();
var statearr_32091_32155 = state_32035__$1;
(statearr_32091_32155[(2)] = null);

(statearr_32091_32155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (11))){
var inst_31912 = (state_32035[(14)]);
var inst_31934 = (state_32035[(7)]);
var inst_31934__$1 = cljs.core.seq.call(null,inst_31912);
var state_32035__$1 = (function (){var statearr_32092 = state_32035;
(statearr_32092[(7)] = inst_31934__$1);

return statearr_32092;
})();
if(inst_31934__$1){
var statearr_32093_32156 = state_32035__$1;
(statearr_32093_32156[(1)] = (16));

} else {
var statearr_32094_32157 = state_32035__$1;
(statearr_32094_32157[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (9))){
var inst_31964 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
var statearr_32095_32158 = state_32035__$1;
(statearr_32095_32158[(2)] = inst_31964);

(statearr_32095_32158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (5))){
var inst_31910 = cljs.core.deref.call(null,cs);
var inst_31911 = cljs.core.seq.call(null,inst_31910);
var inst_31912 = inst_31911;
var inst_31913 = null;
var inst_31914 = (0);
var inst_31915 = (0);
var state_32035__$1 = (function (){var statearr_32096 = state_32035;
(statearr_32096[(14)] = inst_31912);

(statearr_32096[(15)] = inst_31915);

(statearr_32096[(16)] = inst_31914);

(statearr_32096[(17)] = inst_31913);

return statearr_32096;
})();
var statearr_32097_32159 = state_32035__$1;
(statearr_32097_32159[(2)] = null);

(statearr_32097_32159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (14))){
var state_32035__$1 = state_32035;
var statearr_32098_32160 = state_32035__$1;
(statearr_32098_32160[(2)] = null);

(statearr_32098_32160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (45))){
var inst_32025 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
var statearr_32099_32161 = state_32035__$1;
(statearr_32099_32161[(2)] = inst_32025);

(statearr_32099_32161[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (26))){
var inst_31967 = (state_32035[(29)]);
var inst_32021 = (state_32035[(2)]);
var inst_32022 = cljs.core.seq.call(null,inst_31967);
var state_32035__$1 = (function (){var statearr_32100 = state_32035;
(statearr_32100[(31)] = inst_32021);

return statearr_32100;
})();
if(inst_32022){
var statearr_32101_32162 = state_32035__$1;
(statearr_32101_32162[(1)] = (42));

} else {
var statearr_32102_32163 = state_32035__$1;
(statearr_32102_32163[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (16))){
var inst_31934 = (state_32035[(7)]);
var inst_31936 = cljs.core.chunked_seq_QMARK_.call(null,inst_31934);
var state_32035__$1 = state_32035;
if(inst_31936){
var statearr_32103_32164 = state_32035__$1;
(statearr_32103_32164[(1)] = (19));

} else {
var statearr_32104_32165 = state_32035__$1;
(statearr_32104_32165[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (38))){
var inst_32014 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
var statearr_32105_32166 = state_32035__$1;
(statearr_32105_32166[(2)] = inst_32014);

(statearr_32105_32166[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (30))){
var state_32035__$1 = state_32035;
var statearr_32106_32167 = state_32035__$1;
(statearr_32106_32167[(2)] = null);

(statearr_32106_32167[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (10))){
var inst_31915 = (state_32035[(15)]);
var inst_31913 = (state_32035[(17)]);
var inst_31923 = cljs.core._nth.call(null,inst_31913,inst_31915);
var inst_31924 = cljs.core.nth.call(null,inst_31923,(0),null);
var inst_31925 = cljs.core.nth.call(null,inst_31923,(1),null);
var state_32035__$1 = (function (){var statearr_32107 = state_32035;
(statearr_32107[(26)] = inst_31924);

return statearr_32107;
})();
if(cljs.core.truth_(inst_31925)){
var statearr_32108_32168 = state_32035__$1;
(statearr_32108_32168[(1)] = (13));

} else {
var statearr_32109_32169 = state_32035__$1;
(statearr_32109_32169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (18))){
var inst_31960 = (state_32035[(2)]);
var state_32035__$1 = state_32035;
var statearr_32110_32170 = state_32035__$1;
(statearr_32110_32170[(2)] = inst_31960);

(statearr_32110_32170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (42))){
var state_32035__$1 = state_32035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32035__$1,(45),dchan);
} else {
if((state_val_32036 === (37))){
var inst_31903 = (state_32035[(9)]);
var inst_32003 = (state_32035[(23)]);
var inst_31994 = (state_32035[(25)]);
var inst_32003__$1 = cljs.core.first.call(null,inst_31994);
var inst_32004 = cljs.core.async.put_BANG_.call(null,inst_32003__$1,inst_31903,done);
var state_32035__$1 = (function (){var statearr_32111 = state_32035;
(statearr_32111[(23)] = inst_32003__$1);

return statearr_32111;
})();
if(cljs.core.truth_(inst_32004)){
var statearr_32112_32171 = state_32035__$1;
(statearr_32112_32171[(1)] = (39));

} else {
var statearr_32113_32172 = state_32035__$1;
(statearr_32113_32172[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32036 === (8))){
var inst_31915 = (state_32035[(15)]);
var inst_31914 = (state_32035[(16)]);
var inst_31917 = (inst_31915 < inst_31914);
var inst_31918 = inst_31917;
var state_32035__$1 = state_32035;
if(cljs.core.truth_(inst_31918)){
var statearr_32114_32173 = state_32035__$1;
(statearr_32114_32173[(1)] = (10));

} else {
var statearr_32115_32174 = state_32035__$1;
(statearr_32115_32174[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___32120,cs,m,dchan,dctr,done))
;
return ((function (switch__31227__auto__,c__31315__auto___32120,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31228__auto__ = null;
var cljs$core$async$mult_$_state_machine__31228__auto____0 = (function (){
var statearr_32116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32116[(0)] = cljs$core$async$mult_$_state_machine__31228__auto__);

(statearr_32116[(1)] = (1));

return statearr_32116;
});
var cljs$core$async$mult_$_state_machine__31228__auto____1 = (function (state_32035){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_32035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e32117){if((e32117 instanceof Object)){
var ex__31231__auto__ = e32117;
var statearr_32118_32175 = state_32035;
(statearr_32118_32175[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32176 = state_32035;
state_32035 = G__32176;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31228__auto__ = function(state_32035){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31228__auto____1.call(this,state_32035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31228__auto____0;
cljs$core$async$mult_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31228__auto____1;
return cljs$core$async$mult_$_state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___32120,cs,m,dchan,dctr,done))
})();
var state__31317__auto__ = (function (){var statearr_32119 = f__31316__auto__.call(null);
(statearr_32119[(6)] = c__31315__auto___32120);

return statearr_32119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___32120,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32178 = arguments.length;
switch (G__32178) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m);
} else {
var m__28735__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,state_map);
} else {
var m__28735__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28734__auto__ = (((m == null))?null:m);
var m__28735__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,m,mode);
} else {
var m__28735__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29229__auto__ = [];
var len__29222__auto___32190 = arguments.length;
var i__29223__auto___32191 = (0);
while(true){
if((i__29223__auto___32191 < len__29222__auto___32190)){
args__29229__auto__.push((arguments[i__29223__auto___32191]));

var G__32192 = (i__29223__auto___32191 + (1));
i__29223__auto___32191 = G__32192;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((3) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29230__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32184){
var map__32185 = p__32184;
var map__32185__$1 = ((((!((map__32185 == null)))?((((map__32185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32185):map__32185);
var opts = map__32185__$1;
var statearr_32187_32193 = state;
(statearr_32187_32193[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32185,map__32185__$1,opts){
return (function (val){
var statearr_32188_32194 = state;
(statearr_32188_32194[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32185,map__32185__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32189_32195 = state;
(statearr_32189_32195[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32180){
var G__32181 = cljs.core.first.call(null,seq32180);
var seq32180__$1 = cljs.core.next.call(null,seq32180);
var G__32182 = cljs.core.first.call(null,seq32180__$1);
var seq32180__$2 = cljs.core.next.call(null,seq32180__$1);
var G__32183 = cljs.core.first.call(null,seq32180__$2);
var seq32180__$3 = cljs.core.next.call(null,seq32180__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32181,G__32182,G__32183,seq32180__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32196 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32197){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32197 = meta32197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32198,meta32197__$1){
var self__ = this;
var _32198__$1 = this;
return (new cljs.core.async.t_cljs$core$async32196(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32197__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32198){
var self__ = this;
var _32198__$1 = this;
return self__.meta32197;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32196.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32197","meta32197",-1644013231,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32196";

cljs.core.async.t_cljs$core$async32196.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32196");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32196 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32196(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32197){
return (new cljs.core.async.t_cljs$core$async32196(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32197));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32196(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31315__auto___32360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32300){
var state_val_32301 = (state_32300[(1)]);
if((state_val_32301 === (7))){
var inst_32215 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32302_32361 = state_32300__$1;
(statearr_32302_32361[(2)] = inst_32215);

(statearr_32302_32361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (20))){
var inst_32227 = (state_32300[(7)]);
var state_32300__$1 = state_32300;
var statearr_32303_32362 = state_32300__$1;
(statearr_32303_32362[(2)] = inst_32227);

(statearr_32303_32362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (27))){
var state_32300__$1 = state_32300;
var statearr_32304_32363 = state_32300__$1;
(statearr_32304_32363[(2)] = null);

(statearr_32304_32363[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (1))){
var inst_32202 = (state_32300[(8)]);
var inst_32202__$1 = calc_state.call(null);
var inst_32204 = (inst_32202__$1 == null);
var inst_32205 = cljs.core.not.call(null,inst_32204);
var state_32300__$1 = (function (){var statearr_32305 = state_32300;
(statearr_32305[(8)] = inst_32202__$1);

return statearr_32305;
})();
if(inst_32205){
var statearr_32306_32364 = state_32300__$1;
(statearr_32306_32364[(1)] = (2));

} else {
var statearr_32307_32365 = state_32300__$1;
(statearr_32307_32365[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (24))){
var inst_32274 = (state_32300[(9)]);
var inst_32260 = (state_32300[(10)]);
var inst_32251 = (state_32300[(11)]);
var inst_32274__$1 = inst_32251.call(null,inst_32260);
var state_32300__$1 = (function (){var statearr_32308 = state_32300;
(statearr_32308[(9)] = inst_32274__$1);

return statearr_32308;
})();
if(cljs.core.truth_(inst_32274__$1)){
var statearr_32309_32366 = state_32300__$1;
(statearr_32309_32366[(1)] = (29));

} else {
var statearr_32310_32367 = state_32300__$1;
(statearr_32310_32367[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (4))){
var inst_32218 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
if(cljs.core.truth_(inst_32218)){
var statearr_32311_32368 = state_32300__$1;
(statearr_32311_32368[(1)] = (8));

} else {
var statearr_32312_32369 = state_32300__$1;
(statearr_32312_32369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (15))){
var inst_32245 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
if(cljs.core.truth_(inst_32245)){
var statearr_32313_32370 = state_32300__$1;
(statearr_32313_32370[(1)] = (19));

} else {
var statearr_32314_32371 = state_32300__$1;
(statearr_32314_32371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (21))){
var inst_32250 = (state_32300[(12)]);
var inst_32250__$1 = (state_32300[(2)]);
var inst_32251 = cljs.core.get.call(null,inst_32250__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32252 = cljs.core.get.call(null,inst_32250__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32253 = cljs.core.get.call(null,inst_32250__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32300__$1 = (function (){var statearr_32315 = state_32300;
(statearr_32315[(13)] = inst_32252);

(statearr_32315[(11)] = inst_32251);

(statearr_32315[(12)] = inst_32250__$1);

return statearr_32315;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32300__$1,(22),inst_32253);
} else {
if((state_val_32301 === (31))){
var inst_32282 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
if(cljs.core.truth_(inst_32282)){
var statearr_32316_32372 = state_32300__$1;
(statearr_32316_32372[(1)] = (32));

} else {
var statearr_32317_32373 = state_32300__$1;
(statearr_32317_32373[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (32))){
var inst_32259 = (state_32300[(14)]);
var state_32300__$1 = state_32300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32300__$1,(35),out,inst_32259);
} else {
if((state_val_32301 === (33))){
var inst_32250 = (state_32300[(12)]);
var inst_32227 = inst_32250;
var state_32300__$1 = (function (){var statearr_32318 = state_32300;
(statearr_32318[(7)] = inst_32227);

return statearr_32318;
})();
var statearr_32319_32374 = state_32300__$1;
(statearr_32319_32374[(2)] = null);

(statearr_32319_32374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (13))){
var inst_32227 = (state_32300[(7)]);
var inst_32234 = inst_32227.cljs$lang$protocol_mask$partition0$;
var inst_32235 = (inst_32234 & (64));
var inst_32236 = inst_32227.cljs$core$ISeq$;
var inst_32237 = (cljs.core.PROTOCOL_SENTINEL === inst_32236);
var inst_32238 = (inst_32235) || (inst_32237);
var state_32300__$1 = state_32300;
if(cljs.core.truth_(inst_32238)){
var statearr_32320_32375 = state_32300__$1;
(statearr_32320_32375[(1)] = (16));

} else {
var statearr_32321_32376 = state_32300__$1;
(statearr_32321_32376[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (22))){
var inst_32260 = (state_32300[(10)]);
var inst_32259 = (state_32300[(14)]);
var inst_32258 = (state_32300[(2)]);
var inst_32259__$1 = cljs.core.nth.call(null,inst_32258,(0),null);
var inst_32260__$1 = cljs.core.nth.call(null,inst_32258,(1),null);
var inst_32261 = (inst_32259__$1 == null);
var inst_32262 = cljs.core._EQ_.call(null,inst_32260__$1,change);
var inst_32263 = (inst_32261) || (inst_32262);
var state_32300__$1 = (function (){var statearr_32322 = state_32300;
(statearr_32322[(10)] = inst_32260__$1);

(statearr_32322[(14)] = inst_32259__$1);

return statearr_32322;
})();
if(cljs.core.truth_(inst_32263)){
var statearr_32323_32377 = state_32300__$1;
(statearr_32323_32377[(1)] = (23));

} else {
var statearr_32324_32378 = state_32300__$1;
(statearr_32324_32378[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (36))){
var inst_32250 = (state_32300[(12)]);
var inst_32227 = inst_32250;
var state_32300__$1 = (function (){var statearr_32325 = state_32300;
(statearr_32325[(7)] = inst_32227);

return statearr_32325;
})();
var statearr_32326_32379 = state_32300__$1;
(statearr_32326_32379[(2)] = null);

(statearr_32326_32379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (29))){
var inst_32274 = (state_32300[(9)]);
var state_32300__$1 = state_32300;
var statearr_32327_32380 = state_32300__$1;
(statearr_32327_32380[(2)] = inst_32274);

(statearr_32327_32380[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (6))){
var state_32300__$1 = state_32300;
var statearr_32328_32381 = state_32300__$1;
(statearr_32328_32381[(2)] = false);

(statearr_32328_32381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (28))){
var inst_32270 = (state_32300[(2)]);
var inst_32271 = calc_state.call(null);
var inst_32227 = inst_32271;
var state_32300__$1 = (function (){var statearr_32329 = state_32300;
(statearr_32329[(15)] = inst_32270);

(statearr_32329[(7)] = inst_32227);

return statearr_32329;
})();
var statearr_32330_32382 = state_32300__$1;
(statearr_32330_32382[(2)] = null);

(statearr_32330_32382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (25))){
var inst_32296 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32331_32383 = state_32300__$1;
(statearr_32331_32383[(2)] = inst_32296);

(statearr_32331_32383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (34))){
var inst_32294 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32332_32384 = state_32300__$1;
(statearr_32332_32384[(2)] = inst_32294);

(statearr_32332_32384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (17))){
var state_32300__$1 = state_32300;
var statearr_32333_32385 = state_32300__$1;
(statearr_32333_32385[(2)] = false);

(statearr_32333_32385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (3))){
var state_32300__$1 = state_32300;
var statearr_32334_32386 = state_32300__$1;
(statearr_32334_32386[(2)] = false);

(statearr_32334_32386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (12))){
var inst_32298 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32300__$1,inst_32298);
} else {
if((state_val_32301 === (2))){
var inst_32202 = (state_32300[(8)]);
var inst_32207 = inst_32202.cljs$lang$protocol_mask$partition0$;
var inst_32208 = (inst_32207 & (64));
var inst_32209 = inst_32202.cljs$core$ISeq$;
var inst_32210 = (cljs.core.PROTOCOL_SENTINEL === inst_32209);
var inst_32211 = (inst_32208) || (inst_32210);
var state_32300__$1 = state_32300;
if(cljs.core.truth_(inst_32211)){
var statearr_32335_32387 = state_32300__$1;
(statearr_32335_32387[(1)] = (5));

} else {
var statearr_32336_32388 = state_32300__$1;
(statearr_32336_32388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (23))){
var inst_32259 = (state_32300[(14)]);
var inst_32265 = (inst_32259 == null);
var state_32300__$1 = state_32300;
if(cljs.core.truth_(inst_32265)){
var statearr_32337_32389 = state_32300__$1;
(statearr_32337_32389[(1)] = (26));

} else {
var statearr_32338_32390 = state_32300__$1;
(statearr_32338_32390[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (35))){
var inst_32285 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
if(cljs.core.truth_(inst_32285)){
var statearr_32339_32391 = state_32300__$1;
(statearr_32339_32391[(1)] = (36));

} else {
var statearr_32340_32392 = state_32300__$1;
(statearr_32340_32392[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (19))){
var inst_32227 = (state_32300[(7)]);
var inst_32247 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32227);
var state_32300__$1 = state_32300;
var statearr_32341_32393 = state_32300__$1;
(statearr_32341_32393[(2)] = inst_32247);

(statearr_32341_32393[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (11))){
var inst_32227 = (state_32300[(7)]);
var inst_32231 = (inst_32227 == null);
var inst_32232 = cljs.core.not.call(null,inst_32231);
var state_32300__$1 = state_32300;
if(inst_32232){
var statearr_32342_32394 = state_32300__$1;
(statearr_32342_32394[(1)] = (13));

} else {
var statearr_32343_32395 = state_32300__$1;
(statearr_32343_32395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (9))){
var inst_32202 = (state_32300[(8)]);
var state_32300__$1 = state_32300;
var statearr_32344_32396 = state_32300__$1;
(statearr_32344_32396[(2)] = inst_32202);

(statearr_32344_32396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (5))){
var state_32300__$1 = state_32300;
var statearr_32345_32397 = state_32300__$1;
(statearr_32345_32397[(2)] = true);

(statearr_32345_32397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (14))){
var state_32300__$1 = state_32300;
var statearr_32346_32398 = state_32300__$1;
(statearr_32346_32398[(2)] = false);

(statearr_32346_32398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (26))){
var inst_32260 = (state_32300[(10)]);
var inst_32267 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32260);
var state_32300__$1 = state_32300;
var statearr_32347_32399 = state_32300__$1;
(statearr_32347_32399[(2)] = inst_32267);

(statearr_32347_32399[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (16))){
var state_32300__$1 = state_32300;
var statearr_32348_32400 = state_32300__$1;
(statearr_32348_32400[(2)] = true);

(statearr_32348_32400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (38))){
var inst_32290 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32349_32401 = state_32300__$1;
(statearr_32349_32401[(2)] = inst_32290);

(statearr_32349_32401[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (30))){
var inst_32260 = (state_32300[(10)]);
var inst_32252 = (state_32300[(13)]);
var inst_32251 = (state_32300[(11)]);
var inst_32277 = cljs.core.empty_QMARK_.call(null,inst_32251);
var inst_32278 = inst_32252.call(null,inst_32260);
var inst_32279 = cljs.core.not.call(null,inst_32278);
var inst_32280 = (inst_32277) && (inst_32279);
var state_32300__$1 = state_32300;
var statearr_32350_32402 = state_32300__$1;
(statearr_32350_32402[(2)] = inst_32280);

(statearr_32350_32402[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (10))){
var inst_32202 = (state_32300[(8)]);
var inst_32223 = (state_32300[(2)]);
var inst_32224 = cljs.core.get.call(null,inst_32223,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32225 = cljs.core.get.call(null,inst_32223,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32226 = cljs.core.get.call(null,inst_32223,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32227 = inst_32202;
var state_32300__$1 = (function (){var statearr_32351 = state_32300;
(statearr_32351[(16)] = inst_32224);

(statearr_32351[(17)] = inst_32226);

(statearr_32351[(7)] = inst_32227);

(statearr_32351[(18)] = inst_32225);

return statearr_32351;
})();
var statearr_32352_32403 = state_32300__$1;
(statearr_32352_32403[(2)] = null);

(statearr_32352_32403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (18))){
var inst_32242 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32353_32404 = state_32300__$1;
(statearr_32353_32404[(2)] = inst_32242);

(statearr_32353_32404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (37))){
var state_32300__$1 = state_32300;
var statearr_32354_32405 = state_32300__$1;
(statearr_32354_32405[(2)] = null);

(statearr_32354_32405[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (8))){
var inst_32202 = (state_32300[(8)]);
var inst_32220 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32202);
var state_32300__$1 = state_32300;
var statearr_32355_32406 = state_32300__$1;
(statearr_32355_32406[(2)] = inst_32220);

(statearr_32355_32406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31227__auto__,c__31315__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31228__auto__ = null;
var cljs$core$async$mix_$_state_machine__31228__auto____0 = (function (){
var statearr_32356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32356[(0)] = cljs$core$async$mix_$_state_machine__31228__auto__);

(statearr_32356[(1)] = (1));

return statearr_32356;
});
var cljs$core$async$mix_$_state_machine__31228__auto____1 = (function (state_32300){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_32300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e32357){if((e32357 instanceof Object)){
var ex__31231__auto__ = e32357;
var statearr_32358_32407 = state_32300;
(statearr_32358_32407[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32408 = state_32300;
state_32300 = G__32408;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31228__auto__ = function(state_32300){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31228__auto____1.call(this,state_32300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31228__auto____0;
cljs$core$async$mix_$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31228__auto____1;
return cljs$core$async$mix_$_state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31317__auto__ = (function (){var statearr_32359 = f__31316__auto__.call(null);
(statearr_32359[(6)] = c__31315__auto___32360);

return statearr_32359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28735__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p,v,ch);
} else {
var m__28735__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32410 = arguments.length;
switch (G__32410) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p);
} else {
var m__28735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28734__auto__ = (((p == null))?null:p);
var m__28735__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28734__auto__)]);
if(!((m__28735__auto__ == null))){
return m__28735__auto__.call(null,p,v);
} else {
var m__28735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28735__auto____$1 == null))){
return m__28735__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32414 = arguments.length;
switch (G__32414) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28051__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28051__auto__)){
return or__28051__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28051__auto__,mults){
return (function (p1__32412_SHARP_){
if(cljs.core.truth_(p1__32412_SHARP_.call(null,topic))){
return p1__32412_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32412_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28051__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32415 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32416){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32416 = meta32416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32417,meta32416__$1){
var self__ = this;
var _32417__$1 = this;
return (new cljs.core.async.t_cljs$core$async32415(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32416__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32417){
var self__ = this;
var _32417__$1 = this;
return self__.meta32416;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32416","meta32416",-884320320,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32415";

cljs.core.async.t_cljs$core$async32415.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32415");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32415 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32415(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32416){
return (new cljs.core.async.t_cljs$core$async32415(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32416));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32415(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31315__auto___32536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___32536,mults,ensure_mult,p){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___32536,mults,ensure_mult,p){
return (function (state_32490){
var state_val_32491 = (state_32490[(1)]);
if((state_val_32491 === (7))){
var inst_32486 = (state_32490[(2)]);
var state_32490__$1 = state_32490;
var statearr_32492_32537 = state_32490__$1;
(statearr_32492_32537[(2)] = inst_32486);

(statearr_32492_32537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (20))){
var state_32490__$1 = state_32490;
var statearr_32493_32538 = state_32490__$1;
(statearr_32493_32538[(2)] = null);

(statearr_32493_32538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (1))){
var state_32490__$1 = state_32490;
var statearr_32494_32539 = state_32490__$1;
(statearr_32494_32539[(2)] = null);

(statearr_32494_32539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (24))){
var inst_32469 = (state_32490[(7)]);
var inst_32478 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32469);
var state_32490__$1 = state_32490;
var statearr_32495_32540 = state_32490__$1;
(statearr_32495_32540[(2)] = inst_32478);

(statearr_32495_32540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (4))){
var inst_32420 = (state_32490[(8)]);
var inst_32420__$1 = (state_32490[(2)]);
var inst_32421 = (inst_32420__$1 == null);
var state_32490__$1 = (function (){var statearr_32496 = state_32490;
(statearr_32496[(8)] = inst_32420__$1);

return statearr_32496;
})();
if(cljs.core.truth_(inst_32421)){
var statearr_32497_32541 = state_32490__$1;
(statearr_32497_32541[(1)] = (5));

} else {
var statearr_32498_32542 = state_32490__$1;
(statearr_32498_32542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (15))){
var inst_32463 = (state_32490[(2)]);
var state_32490__$1 = state_32490;
var statearr_32499_32543 = state_32490__$1;
(statearr_32499_32543[(2)] = inst_32463);

(statearr_32499_32543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (21))){
var inst_32483 = (state_32490[(2)]);
var state_32490__$1 = (function (){var statearr_32500 = state_32490;
(statearr_32500[(9)] = inst_32483);

return statearr_32500;
})();
var statearr_32501_32544 = state_32490__$1;
(statearr_32501_32544[(2)] = null);

(statearr_32501_32544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (13))){
var inst_32444 = (state_32490[(10)]);
var inst_32447 = cljs.core.chunked_seq_QMARK_.call(null,inst_32444);
var state_32490__$1 = state_32490;
if(inst_32447){
var statearr_32502_32545 = state_32490__$1;
(statearr_32502_32545[(1)] = (16));

} else {
var statearr_32503_32546 = state_32490__$1;
(statearr_32503_32546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (22))){
var inst_32475 = (state_32490[(2)]);
var state_32490__$1 = state_32490;
if(cljs.core.truth_(inst_32475)){
var statearr_32504_32547 = state_32490__$1;
(statearr_32504_32547[(1)] = (23));

} else {
var statearr_32505_32548 = state_32490__$1;
(statearr_32505_32548[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (6))){
var inst_32420 = (state_32490[(8)]);
var inst_32471 = (state_32490[(11)]);
var inst_32469 = (state_32490[(7)]);
var inst_32469__$1 = topic_fn.call(null,inst_32420);
var inst_32470 = cljs.core.deref.call(null,mults);
var inst_32471__$1 = cljs.core.get.call(null,inst_32470,inst_32469__$1);
var state_32490__$1 = (function (){var statearr_32506 = state_32490;
(statearr_32506[(11)] = inst_32471__$1);

(statearr_32506[(7)] = inst_32469__$1);

return statearr_32506;
})();
if(cljs.core.truth_(inst_32471__$1)){
var statearr_32507_32549 = state_32490__$1;
(statearr_32507_32549[(1)] = (19));

} else {
var statearr_32508_32550 = state_32490__$1;
(statearr_32508_32550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (25))){
var inst_32480 = (state_32490[(2)]);
var state_32490__$1 = state_32490;
var statearr_32509_32551 = state_32490__$1;
(statearr_32509_32551[(2)] = inst_32480);

(statearr_32509_32551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (17))){
var inst_32444 = (state_32490[(10)]);
var inst_32454 = cljs.core.first.call(null,inst_32444);
var inst_32455 = cljs.core.async.muxch_STAR_.call(null,inst_32454);
var inst_32456 = cljs.core.async.close_BANG_.call(null,inst_32455);
var inst_32457 = cljs.core.next.call(null,inst_32444);
var inst_32430 = inst_32457;
var inst_32431 = null;
var inst_32432 = (0);
var inst_32433 = (0);
var state_32490__$1 = (function (){var statearr_32510 = state_32490;
(statearr_32510[(12)] = inst_32433);

(statearr_32510[(13)] = inst_32430);

(statearr_32510[(14)] = inst_32432);

(statearr_32510[(15)] = inst_32431);

(statearr_32510[(16)] = inst_32456);

return statearr_32510;
})();
var statearr_32511_32552 = state_32490__$1;
(statearr_32511_32552[(2)] = null);

(statearr_32511_32552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (3))){
var inst_32488 = (state_32490[(2)]);
var state_32490__$1 = state_32490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32490__$1,inst_32488);
} else {
if((state_val_32491 === (12))){
var inst_32465 = (state_32490[(2)]);
var state_32490__$1 = state_32490;
var statearr_32512_32553 = state_32490__$1;
(statearr_32512_32553[(2)] = inst_32465);

(statearr_32512_32553[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (2))){
var state_32490__$1 = state_32490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32490__$1,(4),ch);
} else {
if((state_val_32491 === (23))){
var state_32490__$1 = state_32490;
var statearr_32513_32554 = state_32490__$1;
(statearr_32513_32554[(2)] = null);

(statearr_32513_32554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (19))){
var inst_32420 = (state_32490[(8)]);
var inst_32471 = (state_32490[(11)]);
var inst_32473 = cljs.core.async.muxch_STAR_.call(null,inst_32471);
var state_32490__$1 = state_32490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32490__$1,(22),inst_32473,inst_32420);
} else {
if((state_val_32491 === (11))){
var inst_32444 = (state_32490[(10)]);
var inst_32430 = (state_32490[(13)]);
var inst_32444__$1 = cljs.core.seq.call(null,inst_32430);
var state_32490__$1 = (function (){var statearr_32514 = state_32490;
(statearr_32514[(10)] = inst_32444__$1);

return statearr_32514;
})();
if(inst_32444__$1){
var statearr_32515_32555 = state_32490__$1;
(statearr_32515_32555[(1)] = (13));

} else {
var statearr_32516_32556 = state_32490__$1;
(statearr_32516_32556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (9))){
var inst_32467 = (state_32490[(2)]);
var state_32490__$1 = state_32490;
var statearr_32517_32557 = state_32490__$1;
(statearr_32517_32557[(2)] = inst_32467);

(statearr_32517_32557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (5))){
var inst_32427 = cljs.core.deref.call(null,mults);
var inst_32428 = cljs.core.vals.call(null,inst_32427);
var inst_32429 = cljs.core.seq.call(null,inst_32428);
var inst_32430 = inst_32429;
var inst_32431 = null;
var inst_32432 = (0);
var inst_32433 = (0);
var state_32490__$1 = (function (){var statearr_32518 = state_32490;
(statearr_32518[(12)] = inst_32433);

(statearr_32518[(13)] = inst_32430);

(statearr_32518[(14)] = inst_32432);

(statearr_32518[(15)] = inst_32431);

return statearr_32518;
})();
var statearr_32519_32558 = state_32490__$1;
(statearr_32519_32558[(2)] = null);

(statearr_32519_32558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (14))){
var state_32490__$1 = state_32490;
var statearr_32523_32559 = state_32490__$1;
(statearr_32523_32559[(2)] = null);

(statearr_32523_32559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (16))){
var inst_32444 = (state_32490[(10)]);
var inst_32449 = cljs.core.chunk_first.call(null,inst_32444);
var inst_32450 = cljs.core.chunk_rest.call(null,inst_32444);
var inst_32451 = cljs.core.count.call(null,inst_32449);
var inst_32430 = inst_32450;
var inst_32431 = inst_32449;
var inst_32432 = inst_32451;
var inst_32433 = (0);
var state_32490__$1 = (function (){var statearr_32524 = state_32490;
(statearr_32524[(12)] = inst_32433);

(statearr_32524[(13)] = inst_32430);

(statearr_32524[(14)] = inst_32432);

(statearr_32524[(15)] = inst_32431);

return statearr_32524;
})();
var statearr_32525_32560 = state_32490__$1;
(statearr_32525_32560[(2)] = null);

(statearr_32525_32560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (10))){
var inst_32433 = (state_32490[(12)]);
var inst_32430 = (state_32490[(13)]);
var inst_32432 = (state_32490[(14)]);
var inst_32431 = (state_32490[(15)]);
var inst_32438 = cljs.core._nth.call(null,inst_32431,inst_32433);
var inst_32439 = cljs.core.async.muxch_STAR_.call(null,inst_32438);
var inst_32440 = cljs.core.async.close_BANG_.call(null,inst_32439);
var inst_32441 = (inst_32433 + (1));
var tmp32520 = inst_32430;
var tmp32521 = inst_32432;
var tmp32522 = inst_32431;
var inst_32430__$1 = tmp32520;
var inst_32431__$1 = tmp32522;
var inst_32432__$1 = tmp32521;
var inst_32433__$1 = inst_32441;
var state_32490__$1 = (function (){var statearr_32526 = state_32490;
(statearr_32526[(12)] = inst_32433__$1);

(statearr_32526[(13)] = inst_32430__$1);

(statearr_32526[(14)] = inst_32432__$1);

(statearr_32526[(17)] = inst_32440);

(statearr_32526[(15)] = inst_32431__$1);

return statearr_32526;
})();
var statearr_32527_32561 = state_32490__$1;
(statearr_32527_32561[(2)] = null);

(statearr_32527_32561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (18))){
var inst_32460 = (state_32490[(2)]);
var state_32490__$1 = state_32490;
var statearr_32528_32562 = state_32490__$1;
(statearr_32528_32562[(2)] = inst_32460);

(statearr_32528_32562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (8))){
var inst_32433 = (state_32490[(12)]);
var inst_32432 = (state_32490[(14)]);
var inst_32435 = (inst_32433 < inst_32432);
var inst_32436 = inst_32435;
var state_32490__$1 = state_32490;
if(cljs.core.truth_(inst_32436)){
var statearr_32529_32563 = state_32490__$1;
(statearr_32529_32563[(1)] = (10));

} else {
var statearr_32530_32564 = state_32490__$1;
(statearr_32530_32564[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___32536,mults,ensure_mult,p))
;
return ((function (switch__31227__auto__,c__31315__auto___32536,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31228__auto__ = null;
var cljs$core$async$state_machine__31228__auto____0 = (function (){
var statearr_32531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32531[(0)] = cljs$core$async$state_machine__31228__auto__);

(statearr_32531[(1)] = (1));

return statearr_32531;
});
var cljs$core$async$state_machine__31228__auto____1 = (function (state_32490){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_32490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e32532){if((e32532 instanceof Object)){
var ex__31231__auto__ = e32532;
var statearr_32533_32565 = state_32490;
(statearr_32533_32565[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32566 = state_32490;
state_32490 = G__32566;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$state_machine__31228__auto__ = function(state_32490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31228__auto____1.call(this,state_32490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31228__auto____0;
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31228__auto____1;
return cljs$core$async$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___32536,mults,ensure_mult,p))
})();
var state__31317__auto__ = (function (){var statearr_32534 = f__31316__auto__.call(null);
(statearr_32534[(6)] = c__31315__auto___32536);

return statearr_32534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___32536,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32568 = arguments.length;
switch (G__32568) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32571 = arguments.length;
switch (G__32571) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32574 = arguments.length;
switch (G__32574) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31315__auto___32641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___32641,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___32641,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32613){
var state_val_32614 = (state_32613[(1)]);
if((state_val_32614 === (7))){
var state_32613__$1 = state_32613;
var statearr_32615_32642 = state_32613__$1;
(statearr_32615_32642[(2)] = null);

(statearr_32615_32642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (1))){
var state_32613__$1 = state_32613;
var statearr_32616_32643 = state_32613__$1;
(statearr_32616_32643[(2)] = null);

(statearr_32616_32643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (4))){
var inst_32577 = (state_32613[(7)]);
var inst_32579 = (inst_32577 < cnt);
var state_32613__$1 = state_32613;
if(cljs.core.truth_(inst_32579)){
var statearr_32617_32644 = state_32613__$1;
(statearr_32617_32644[(1)] = (6));

} else {
var statearr_32618_32645 = state_32613__$1;
(statearr_32618_32645[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (15))){
var inst_32609 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32619_32646 = state_32613__$1;
(statearr_32619_32646[(2)] = inst_32609);

(statearr_32619_32646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (13))){
var inst_32602 = cljs.core.async.close_BANG_.call(null,out);
var state_32613__$1 = state_32613;
var statearr_32620_32647 = state_32613__$1;
(statearr_32620_32647[(2)] = inst_32602);

(statearr_32620_32647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (6))){
var state_32613__$1 = state_32613;
var statearr_32621_32648 = state_32613__$1;
(statearr_32621_32648[(2)] = null);

(statearr_32621_32648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (3))){
var inst_32611 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32613__$1,inst_32611);
} else {
if((state_val_32614 === (12))){
var inst_32599 = (state_32613[(8)]);
var inst_32599__$1 = (state_32613[(2)]);
var inst_32600 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32599__$1);
var state_32613__$1 = (function (){var statearr_32622 = state_32613;
(statearr_32622[(8)] = inst_32599__$1);

return statearr_32622;
})();
if(cljs.core.truth_(inst_32600)){
var statearr_32623_32649 = state_32613__$1;
(statearr_32623_32649[(1)] = (13));

} else {
var statearr_32624_32650 = state_32613__$1;
(statearr_32624_32650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (2))){
var inst_32576 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32577 = (0);
var state_32613__$1 = (function (){var statearr_32625 = state_32613;
(statearr_32625[(7)] = inst_32577);

(statearr_32625[(9)] = inst_32576);

return statearr_32625;
})();
var statearr_32626_32651 = state_32613__$1;
(statearr_32626_32651[(2)] = null);

(statearr_32626_32651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (11))){
var inst_32577 = (state_32613[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32613,(10),Object,null,(9));
var inst_32586 = chs__$1.call(null,inst_32577);
var inst_32587 = done.call(null,inst_32577);
var inst_32588 = cljs.core.async.take_BANG_.call(null,inst_32586,inst_32587);
var state_32613__$1 = state_32613;
var statearr_32627_32652 = state_32613__$1;
(statearr_32627_32652[(2)] = inst_32588);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (9))){
var inst_32577 = (state_32613[(7)]);
var inst_32590 = (state_32613[(2)]);
var inst_32591 = (inst_32577 + (1));
var inst_32577__$1 = inst_32591;
var state_32613__$1 = (function (){var statearr_32628 = state_32613;
(statearr_32628[(7)] = inst_32577__$1);

(statearr_32628[(10)] = inst_32590);

return statearr_32628;
})();
var statearr_32629_32653 = state_32613__$1;
(statearr_32629_32653[(2)] = null);

(statearr_32629_32653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (5))){
var inst_32597 = (state_32613[(2)]);
var state_32613__$1 = (function (){var statearr_32630 = state_32613;
(statearr_32630[(11)] = inst_32597);

return statearr_32630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32613__$1,(12),dchan);
} else {
if((state_val_32614 === (14))){
var inst_32599 = (state_32613[(8)]);
var inst_32604 = cljs.core.apply.call(null,f,inst_32599);
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32613__$1,(16),out,inst_32604);
} else {
if((state_val_32614 === (16))){
var inst_32606 = (state_32613[(2)]);
var state_32613__$1 = (function (){var statearr_32631 = state_32613;
(statearr_32631[(12)] = inst_32606);

return statearr_32631;
})();
var statearr_32632_32654 = state_32613__$1;
(statearr_32632_32654[(2)] = null);

(statearr_32632_32654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (10))){
var inst_32581 = (state_32613[(2)]);
var inst_32582 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32613__$1 = (function (){var statearr_32633 = state_32613;
(statearr_32633[(13)] = inst_32581);

return statearr_32633;
})();
var statearr_32634_32655 = state_32613__$1;
(statearr_32634_32655[(2)] = inst_32582);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (8))){
var inst_32595 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32635_32656 = state_32613__$1;
(statearr_32635_32656[(2)] = inst_32595);

(statearr_32635_32656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___32641,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31227__auto__,c__31315__auto___32641,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31228__auto__ = null;
var cljs$core$async$state_machine__31228__auto____0 = (function (){
var statearr_32636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32636[(0)] = cljs$core$async$state_machine__31228__auto__);

(statearr_32636[(1)] = (1));

return statearr_32636;
});
var cljs$core$async$state_machine__31228__auto____1 = (function (state_32613){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_32613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e32637){if((e32637 instanceof Object)){
var ex__31231__auto__ = e32637;
var statearr_32638_32657 = state_32613;
(statearr_32638_32657[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32658 = state_32613;
state_32613 = G__32658;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$state_machine__31228__auto__ = function(state_32613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31228__auto____1.call(this,state_32613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31228__auto____0;
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31228__auto____1;
return cljs$core$async$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___32641,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31317__auto__ = (function (){var statearr_32639 = f__31316__auto__.call(null);
(statearr_32639[(6)] = c__31315__auto___32641);

return statearr_32639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___32641,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32661 = arguments.length;
switch (G__32661) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31315__auto___32715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___32715,out){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___32715,out){
return (function (state_32693){
var state_val_32694 = (state_32693[(1)]);
if((state_val_32694 === (7))){
var inst_32672 = (state_32693[(7)]);
var inst_32673 = (state_32693[(8)]);
var inst_32672__$1 = (state_32693[(2)]);
var inst_32673__$1 = cljs.core.nth.call(null,inst_32672__$1,(0),null);
var inst_32674 = cljs.core.nth.call(null,inst_32672__$1,(1),null);
var inst_32675 = (inst_32673__$1 == null);
var state_32693__$1 = (function (){var statearr_32695 = state_32693;
(statearr_32695[(9)] = inst_32674);

(statearr_32695[(7)] = inst_32672__$1);

(statearr_32695[(8)] = inst_32673__$1);

return statearr_32695;
})();
if(cljs.core.truth_(inst_32675)){
var statearr_32696_32716 = state_32693__$1;
(statearr_32696_32716[(1)] = (8));

} else {
var statearr_32697_32717 = state_32693__$1;
(statearr_32697_32717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (1))){
var inst_32662 = cljs.core.vec.call(null,chs);
var inst_32663 = inst_32662;
var state_32693__$1 = (function (){var statearr_32698 = state_32693;
(statearr_32698[(10)] = inst_32663);

return statearr_32698;
})();
var statearr_32699_32718 = state_32693__$1;
(statearr_32699_32718[(2)] = null);

(statearr_32699_32718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (4))){
var inst_32663 = (state_32693[(10)]);
var state_32693__$1 = state_32693;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32693__$1,(7),inst_32663);
} else {
if((state_val_32694 === (6))){
var inst_32689 = (state_32693[(2)]);
var state_32693__$1 = state_32693;
var statearr_32700_32719 = state_32693__$1;
(statearr_32700_32719[(2)] = inst_32689);

(statearr_32700_32719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (3))){
var inst_32691 = (state_32693[(2)]);
var state_32693__$1 = state_32693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32693__$1,inst_32691);
} else {
if((state_val_32694 === (2))){
var inst_32663 = (state_32693[(10)]);
var inst_32665 = cljs.core.count.call(null,inst_32663);
var inst_32666 = (inst_32665 > (0));
var state_32693__$1 = state_32693;
if(cljs.core.truth_(inst_32666)){
var statearr_32702_32720 = state_32693__$1;
(statearr_32702_32720[(1)] = (4));

} else {
var statearr_32703_32721 = state_32693__$1;
(statearr_32703_32721[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (11))){
var inst_32663 = (state_32693[(10)]);
var inst_32682 = (state_32693[(2)]);
var tmp32701 = inst_32663;
var inst_32663__$1 = tmp32701;
var state_32693__$1 = (function (){var statearr_32704 = state_32693;
(statearr_32704[(11)] = inst_32682);

(statearr_32704[(10)] = inst_32663__$1);

return statearr_32704;
})();
var statearr_32705_32722 = state_32693__$1;
(statearr_32705_32722[(2)] = null);

(statearr_32705_32722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (9))){
var inst_32673 = (state_32693[(8)]);
var state_32693__$1 = state_32693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32693__$1,(11),out,inst_32673);
} else {
if((state_val_32694 === (5))){
var inst_32687 = cljs.core.async.close_BANG_.call(null,out);
var state_32693__$1 = state_32693;
var statearr_32706_32723 = state_32693__$1;
(statearr_32706_32723[(2)] = inst_32687);

(statearr_32706_32723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (10))){
var inst_32685 = (state_32693[(2)]);
var state_32693__$1 = state_32693;
var statearr_32707_32724 = state_32693__$1;
(statearr_32707_32724[(2)] = inst_32685);

(statearr_32707_32724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (8))){
var inst_32674 = (state_32693[(9)]);
var inst_32663 = (state_32693[(10)]);
var inst_32672 = (state_32693[(7)]);
var inst_32673 = (state_32693[(8)]);
var inst_32677 = (function (){var cs = inst_32663;
var vec__32668 = inst_32672;
var v = inst_32673;
var c = inst_32674;
return ((function (cs,vec__32668,v,c,inst_32674,inst_32663,inst_32672,inst_32673,state_val_32694,c__31315__auto___32715,out){
return (function (p1__32659_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32659_SHARP_);
});
;})(cs,vec__32668,v,c,inst_32674,inst_32663,inst_32672,inst_32673,state_val_32694,c__31315__auto___32715,out))
})();
var inst_32678 = cljs.core.filterv.call(null,inst_32677,inst_32663);
var inst_32663__$1 = inst_32678;
var state_32693__$1 = (function (){var statearr_32708 = state_32693;
(statearr_32708[(10)] = inst_32663__$1);

return statearr_32708;
})();
var statearr_32709_32725 = state_32693__$1;
(statearr_32709_32725[(2)] = null);

(statearr_32709_32725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___32715,out))
;
return ((function (switch__31227__auto__,c__31315__auto___32715,out){
return (function() {
var cljs$core$async$state_machine__31228__auto__ = null;
var cljs$core$async$state_machine__31228__auto____0 = (function (){
var statearr_32710 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32710[(0)] = cljs$core$async$state_machine__31228__auto__);

(statearr_32710[(1)] = (1));

return statearr_32710;
});
var cljs$core$async$state_machine__31228__auto____1 = (function (state_32693){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_32693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e32711){if((e32711 instanceof Object)){
var ex__31231__auto__ = e32711;
var statearr_32712_32726 = state_32693;
(statearr_32712_32726[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32727 = state_32693;
state_32693 = G__32727;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$state_machine__31228__auto__ = function(state_32693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31228__auto____1.call(this,state_32693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31228__auto____0;
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31228__auto____1;
return cljs$core$async$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___32715,out))
})();
var state__31317__auto__ = (function (){var statearr_32713 = f__31316__auto__.call(null);
(statearr_32713[(6)] = c__31315__auto___32715);

return statearr_32713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___32715,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32729 = arguments.length;
switch (G__32729) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31315__auto___32774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___32774,out){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___32774,out){
return (function (state_32753){
var state_val_32754 = (state_32753[(1)]);
if((state_val_32754 === (7))){
var inst_32735 = (state_32753[(7)]);
var inst_32735__$1 = (state_32753[(2)]);
var inst_32736 = (inst_32735__$1 == null);
var inst_32737 = cljs.core.not.call(null,inst_32736);
var state_32753__$1 = (function (){var statearr_32755 = state_32753;
(statearr_32755[(7)] = inst_32735__$1);

return statearr_32755;
})();
if(inst_32737){
var statearr_32756_32775 = state_32753__$1;
(statearr_32756_32775[(1)] = (8));

} else {
var statearr_32757_32776 = state_32753__$1;
(statearr_32757_32776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (1))){
var inst_32730 = (0);
var state_32753__$1 = (function (){var statearr_32758 = state_32753;
(statearr_32758[(8)] = inst_32730);

return statearr_32758;
})();
var statearr_32759_32777 = state_32753__$1;
(statearr_32759_32777[(2)] = null);

(statearr_32759_32777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (4))){
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32753__$1,(7),ch);
} else {
if((state_val_32754 === (6))){
var inst_32748 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32760_32778 = state_32753__$1;
(statearr_32760_32778[(2)] = inst_32748);

(statearr_32760_32778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (3))){
var inst_32750 = (state_32753[(2)]);
var inst_32751 = cljs.core.async.close_BANG_.call(null,out);
var state_32753__$1 = (function (){var statearr_32761 = state_32753;
(statearr_32761[(9)] = inst_32750);

return statearr_32761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32753__$1,inst_32751);
} else {
if((state_val_32754 === (2))){
var inst_32730 = (state_32753[(8)]);
var inst_32732 = (inst_32730 < n);
var state_32753__$1 = state_32753;
if(cljs.core.truth_(inst_32732)){
var statearr_32762_32779 = state_32753__$1;
(statearr_32762_32779[(1)] = (4));

} else {
var statearr_32763_32780 = state_32753__$1;
(statearr_32763_32780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (11))){
var inst_32730 = (state_32753[(8)]);
var inst_32740 = (state_32753[(2)]);
var inst_32741 = (inst_32730 + (1));
var inst_32730__$1 = inst_32741;
var state_32753__$1 = (function (){var statearr_32764 = state_32753;
(statearr_32764[(10)] = inst_32740);

(statearr_32764[(8)] = inst_32730__$1);

return statearr_32764;
})();
var statearr_32765_32781 = state_32753__$1;
(statearr_32765_32781[(2)] = null);

(statearr_32765_32781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (9))){
var state_32753__$1 = state_32753;
var statearr_32766_32782 = state_32753__$1;
(statearr_32766_32782[(2)] = null);

(statearr_32766_32782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (5))){
var state_32753__$1 = state_32753;
var statearr_32767_32783 = state_32753__$1;
(statearr_32767_32783[(2)] = null);

(statearr_32767_32783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (10))){
var inst_32745 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32768_32784 = state_32753__$1;
(statearr_32768_32784[(2)] = inst_32745);

(statearr_32768_32784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (8))){
var inst_32735 = (state_32753[(7)]);
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32753__$1,(11),out,inst_32735);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___32774,out))
;
return ((function (switch__31227__auto__,c__31315__auto___32774,out){
return (function() {
var cljs$core$async$state_machine__31228__auto__ = null;
var cljs$core$async$state_machine__31228__auto____0 = (function (){
var statearr_32769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32769[(0)] = cljs$core$async$state_machine__31228__auto__);

(statearr_32769[(1)] = (1));

return statearr_32769;
});
var cljs$core$async$state_machine__31228__auto____1 = (function (state_32753){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_32753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e32770){if((e32770 instanceof Object)){
var ex__31231__auto__ = e32770;
var statearr_32771_32785 = state_32753;
(statearr_32771_32785[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32786 = state_32753;
state_32753 = G__32786;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$state_machine__31228__auto__ = function(state_32753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31228__auto____1.call(this,state_32753);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31228__auto____0;
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31228__auto____1;
return cljs$core$async$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___32774,out))
})();
var state__31317__auto__ = (function (){var statearr_32772 = f__31316__auto__.call(null);
(statearr_32772[(6)] = c__31315__auto___32774);

return statearr_32772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___32774,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32788 = (function (f,ch,meta32789){
this.f = f;
this.ch = ch;
this.meta32789 = meta32789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32790,meta32789__$1){
var self__ = this;
var _32790__$1 = this;
return (new cljs.core.async.t_cljs$core$async32788(self__.f,self__.ch,meta32789__$1));
});

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32790){
var self__ = this;
var _32790__$1 = this;
return self__.meta32789;
});

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32791 = (function (f,ch,meta32789,_,fn1,meta32792){
this.f = f;
this.ch = ch;
this.meta32789 = meta32789;
this._ = _;
this.fn1 = fn1;
this.meta32792 = meta32792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32793,meta32792__$1){
var self__ = this;
var _32793__$1 = this;
return (new cljs.core.async.t_cljs$core$async32791(self__.f,self__.ch,self__.meta32789,self__._,self__.fn1,meta32792__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32793){
var self__ = this;
var _32793__$1 = this;
return self__.meta32792;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32787_SHARP_){
return f1.call(null,(((p1__32787_SHARP_ == null))?null:self__.f.call(null,p1__32787_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32791.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32789","meta32789",1580762687,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32788","cljs.core.async/t_cljs$core$async32788",-1933858694,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32792","meta32792",-865681959,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32791";

cljs.core.async.t_cljs$core$async32791.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32791");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32791 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32791(f__$1,ch__$1,meta32789__$1,___$2,fn1__$1,meta32792){
return (new cljs.core.async.t_cljs$core$async32791(f__$1,ch__$1,meta32789__$1,___$2,fn1__$1,meta32792));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32791(self__.f,self__.ch,self__.meta32789,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28039__auto__ = ret;
if(cljs.core.truth_(and__28039__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28039__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32789","meta32789",1580762687,null)], null);
});

cljs.core.async.t_cljs$core$async32788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32788";

cljs.core.async.t_cljs$core$async32788.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32788");
});

cljs.core.async.__GT_t_cljs$core$async32788 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32788(f__$1,ch__$1,meta32789){
return (new cljs.core.async.t_cljs$core$async32788(f__$1,ch__$1,meta32789));
});

}

return (new cljs.core.async.t_cljs$core$async32788(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32794 = (function (f,ch,meta32795){
this.f = f;
this.ch = ch;
this.meta32795 = meta32795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32796,meta32795__$1){
var self__ = this;
var _32796__$1 = this;
return (new cljs.core.async.t_cljs$core$async32794(self__.f,self__.ch,meta32795__$1));
});

cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32796){
var self__ = this;
var _32796__$1 = this;
return self__.meta32795;
});

cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32794.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32795","meta32795",1170017713,null)], null);
});

cljs.core.async.t_cljs$core$async32794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32794";

cljs.core.async.t_cljs$core$async32794.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32794");
});

cljs.core.async.__GT_t_cljs$core$async32794 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32794(f__$1,ch__$1,meta32795){
return (new cljs.core.async.t_cljs$core$async32794(f__$1,ch__$1,meta32795));
});

}

return (new cljs.core.async.t_cljs$core$async32794(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32797 = (function (p,ch,meta32798){
this.p = p;
this.ch = ch;
this.meta32798 = meta32798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32799,meta32798__$1){
var self__ = this;
var _32799__$1 = this;
return (new cljs.core.async.t_cljs$core$async32797(self__.p,self__.ch,meta32798__$1));
});

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32799){
var self__ = this;
var _32799__$1 = this;
return self__.meta32798;
});

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32798","meta32798",-1253703578,null)], null);
});

cljs.core.async.t_cljs$core$async32797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32797";

cljs.core.async.t_cljs$core$async32797.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32797");
});

cljs.core.async.__GT_t_cljs$core$async32797 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32797(p__$1,ch__$1,meta32798){
return (new cljs.core.async.t_cljs$core$async32797(p__$1,ch__$1,meta32798));
});

}

return (new cljs.core.async.t_cljs$core$async32797(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32801 = arguments.length;
switch (G__32801) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31315__auto___32841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___32841,out){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___32841,out){
return (function (state_32822){
var state_val_32823 = (state_32822[(1)]);
if((state_val_32823 === (7))){
var inst_32818 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32824_32842 = state_32822__$1;
(statearr_32824_32842[(2)] = inst_32818);

(statearr_32824_32842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (1))){
var state_32822__$1 = state_32822;
var statearr_32825_32843 = state_32822__$1;
(statearr_32825_32843[(2)] = null);

(statearr_32825_32843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (4))){
var inst_32804 = (state_32822[(7)]);
var inst_32804__$1 = (state_32822[(2)]);
var inst_32805 = (inst_32804__$1 == null);
var state_32822__$1 = (function (){var statearr_32826 = state_32822;
(statearr_32826[(7)] = inst_32804__$1);

return statearr_32826;
})();
if(cljs.core.truth_(inst_32805)){
var statearr_32827_32844 = state_32822__$1;
(statearr_32827_32844[(1)] = (5));

} else {
var statearr_32828_32845 = state_32822__$1;
(statearr_32828_32845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (6))){
var inst_32804 = (state_32822[(7)]);
var inst_32809 = p.call(null,inst_32804);
var state_32822__$1 = state_32822;
if(cljs.core.truth_(inst_32809)){
var statearr_32829_32846 = state_32822__$1;
(statearr_32829_32846[(1)] = (8));

} else {
var statearr_32830_32847 = state_32822__$1;
(statearr_32830_32847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (3))){
var inst_32820 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32822__$1,inst_32820);
} else {
if((state_val_32823 === (2))){
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32822__$1,(4),ch);
} else {
if((state_val_32823 === (11))){
var inst_32812 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32831_32848 = state_32822__$1;
(statearr_32831_32848[(2)] = inst_32812);

(statearr_32831_32848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (9))){
var state_32822__$1 = state_32822;
var statearr_32832_32849 = state_32822__$1;
(statearr_32832_32849[(2)] = null);

(statearr_32832_32849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (5))){
var inst_32807 = cljs.core.async.close_BANG_.call(null,out);
var state_32822__$1 = state_32822;
var statearr_32833_32850 = state_32822__$1;
(statearr_32833_32850[(2)] = inst_32807);

(statearr_32833_32850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (10))){
var inst_32815 = (state_32822[(2)]);
var state_32822__$1 = (function (){var statearr_32834 = state_32822;
(statearr_32834[(8)] = inst_32815);

return statearr_32834;
})();
var statearr_32835_32851 = state_32822__$1;
(statearr_32835_32851[(2)] = null);

(statearr_32835_32851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (8))){
var inst_32804 = (state_32822[(7)]);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32822__$1,(11),out,inst_32804);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___32841,out))
;
return ((function (switch__31227__auto__,c__31315__auto___32841,out){
return (function() {
var cljs$core$async$state_machine__31228__auto__ = null;
var cljs$core$async$state_machine__31228__auto____0 = (function (){
var statearr_32836 = [null,null,null,null,null,null,null,null,null];
(statearr_32836[(0)] = cljs$core$async$state_machine__31228__auto__);

(statearr_32836[(1)] = (1));

return statearr_32836;
});
var cljs$core$async$state_machine__31228__auto____1 = (function (state_32822){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_32822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e32837){if((e32837 instanceof Object)){
var ex__31231__auto__ = e32837;
var statearr_32838_32852 = state_32822;
(statearr_32838_32852[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32853 = state_32822;
state_32822 = G__32853;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$state_machine__31228__auto__ = function(state_32822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31228__auto____1.call(this,state_32822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31228__auto____0;
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31228__auto____1;
return cljs$core$async$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___32841,out))
})();
var state__31317__auto__ = (function (){var statearr_32839 = f__31316__auto__.call(null);
(statearr_32839[(6)] = c__31315__auto___32841);

return statearr_32839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___32841,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32855 = arguments.length;
switch (G__32855) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto__){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto__){
return (function (state_32918){
var state_val_32919 = (state_32918[(1)]);
if((state_val_32919 === (7))){
var inst_32914 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
var statearr_32920_32958 = state_32918__$1;
(statearr_32920_32958[(2)] = inst_32914);

(statearr_32920_32958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (20))){
var inst_32884 = (state_32918[(7)]);
var inst_32895 = (state_32918[(2)]);
var inst_32896 = cljs.core.next.call(null,inst_32884);
var inst_32870 = inst_32896;
var inst_32871 = null;
var inst_32872 = (0);
var inst_32873 = (0);
var state_32918__$1 = (function (){var statearr_32921 = state_32918;
(statearr_32921[(8)] = inst_32870);

(statearr_32921[(9)] = inst_32871);

(statearr_32921[(10)] = inst_32872);

(statearr_32921[(11)] = inst_32873);

(statearr_32921[(12)] = inst_32895);

return statearr_32921;
})();
var statearr_32922_32959 = state_32918__$1;
(statearr_32922_32959[(2)] = null);

(statearr_32922_32959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (1))){
var state_32918__$1 = state_32918;
var statearr_32923_32960 = state_32918__$1;
(statearr_32923_32960[(2)] = null);

(statearr_32923_32960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (4))){
var inst_32859 = (state_32918[(13)]);
var inst_32859__$1 = (state_32918[(2)]);
var inst_32860 = (inst_32859__$1 == null);
var state_32918__$1 = (function (){var statearr_32924 = state_32918;
(statearr_32924[(13)] = inst_32859__$1);

return statearr_32924;
})();
if(cljs.core.truth_(inst_32860)){
var statearr_32925_32961 = state_32918__$1;
(statearr_32925_32961[(1)] = (5));

} else {
var statearr_32926_32962 = state_32918__$1;
(statearr_32926_32962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (15))){
var state_32918__$1 = state_32918;
var statearr_32930_32963 = state_32918__$1;
(statearr_32930_32963[(2)] = null);

(statearr_32930_32963[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (21))){
var state_32918__$1 = state_32918;
var statearr_32931_32964 = state_32918__$1;
(statearr_32931_32964[(2)] = null);

(statearr_32931_32964[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (13))){
var inst_32870 = (state_32918[(8)]);
var inst_32871 = (state_32918[(9)]);
var inst_32872 = (state_32918[(10)]);
var inst_32873 = (state_32918[(11)]);
var inst_32880 = (state_32918[(2)]);
var inst_32881 = (inst_32873 + (1));
var tmp32927 = inst_32870;
var tmp32928 = inst_32871;
var tmp32929 = inst_32872;
var inst_32870__$1 = tmp32927;
var inst_32871__$1 = tmp32928;
var inst_32872__$1 = tmp32929;
var inst_32873__$1 = inst_32881;
var state_32918__$1 = (function (){var statearr_32932 = state_32918;
(statearr_32932[(8)] = inst_32870__$1);

(statearr_32932[(9)] = inst_32871__$1);

(statearr_32932[(10)] = inst_32872__$1);

(statearr_32932[(11)] = inst_32873__$1);

(statearr_32932[(14)] = inst_32880);

return statearr_32932;
})();
var statearr_32933_32965 = state_32918__$1;
(statearr_32933_32965[(2)] = null);

(statearr_32933_32965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (22))){
var state_32918__$1 = state_32918;
var statearr_32934_32966 = state_32918__$1;
(statearr_32934_32966[(2)] = null);

(statearr_32934_32966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (6))){
var inst_32859 = (state_32918[(13)]);
var inst_32868 = f.call(null,inst_32859);
var inst_32869 = cljs.core.seq.call(null,inst_32868);
var inst_32870 = inst_32869;
var inst_32871 = null;
var inst_32872 = (0);
var inst_32873 = (0);
var state_32918__$1 = (function (){var statearr_32935 = state_32918;
(statearr_32935[(8)] = inst_32870);

(statearr_32935[(9)] = inst_32871);

(statearr_32935[(10)] = inst_32872);

(statearr_32935[(11)] = inst_32873);

return statearr_32935;
})();
var statearr_32936_32967 = state_32918__$1;
(statearr_32936_32967[(2)] = null);

(statearr_32936_32967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (17))){
var inst_32884 = (state_32918[(7)]);
var inst_32888 = cljs.core.chunk_first.call(null,inst_32884);
var inst_32889 = cljs.core.chunk_rest.call(null,inst_32884);
var inst_32890 = cljs.core.count.call(null,inst_32888);
var inst_32870 = inst_32889;
var inst_32871 = inst_32888;
var inst_32872 = inst_32890;
var inst_32873 = (0);
var state_32918__$1 = (function (){var statearr_32937 = state_32918;
(statearr_32937[(8)] = inst_32870);

(statearr_32937[(9)] = inst_32871);

(statearr_32937[(10)] = inst_32872);

(statearr_32937[(11)] = inst_32873);

return statearr_32937;
})();
var statearr_32938_32968 = state_32918__$1;
(statearr_32938_32968[(2)] = null);

(statearr_32938_32968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (3))){
var inst_32916 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32918__$1,inst_32916);
} else {
if((state_val_32919 === (12))){
var inst_32904 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
var statearr_32939_32969 = state_32918__$1;
(statearr_32939_32969[(2)] = inst_32904);

(statearr_32939_32969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (2))){
var state_32918__$1 = state_32918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32918__$1,(4),in$);
} else {
if((state_val_32919 === (23))){
var inst_32912 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
var statearr_32940_32970 = state_32918__$1;
(statearr_32940_32970[(2)] = inst_32912);

(statearr_32940_32970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (19))){
var inst_32899 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
var statearr_32941_32971 = state_32918__$1;
(statearr_32941_32971[(2)] = inst_32899);

(statearr_32941_32971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (11))){
var inst_32870 = (state_32918[(8)]);
var inst_32884 = (state_32918[(7)]);
var inst_32884__$1 = cljs.core.seq.call(null,inst_32870);
var state_32918__$1 = (function (){var statearr_32942 = state_32918;
(statearr_32942[(7)] = inst_32884__$1);

return statearr_32942;
})();
if(inst_32884__$1){
var statearr_32943_32972 = state_32918__$1;
(statearr_32943_32972[(1)] = (14));

} else {
var statearr_32944_32973 = state_32918__$1;
(statearr_32944_32973[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (9))){
var inst_32906 = (state_32918[(2)]);
var inst_32907 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32918__$1 = (function (){var statearr_32945 = state_32918;
(statearr_32945[(15)] = inst_32906);

return statearr_32945;
})();
if(cljs.core.truth_(inst_32907)){
var statearr_32946_32974 = state_32918__$1;
(statearr_32946_32974[(1)] = (21));

} else {
var statearr_32947_32975 = state_32918__$1;
(statearr_32947_32975[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (5))){
var inst_32862 = cljs.core.async.close_BANG_.call(null,out);
var state_32918__$1 = state_32918;
var statearr_32948_32976 = state_32918__$1;
(statearr_32948_32976[(2)] = inst_32862);

(statearr_32948_32976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (14))){
var inst_32884 = (state_32918[(7)]);
var inst_32886 = cljs.core.chunked_seq_QMARK_.call(null,inst_32884);
var state_32918__$1 = state_32918;
if(inst_32886){
var statearr_32949_32977 = state_32918__$1;
(statearr_32949_32977[(1)] = (17));

} else {
var statearr_32950_32978 = state_32918__$1;
(statearr_32950_32978[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (16))){
var inst_32902 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
var statearr_32951_32979 = state_32918__$1;
(statearr_32951_32979[(2)] = inst_32902);

(statearr_32951_32979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (10))){
var inst_32871 = (state_32918[(9)]);
var inst_32873 = (state_32918[(11)]);
var inst_32878 = cljs.core._nth.call(null,inst_32871,inst_32873);
var state_32918__$1 = state_32918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32918__$1,(13),out,inst_32878);
} else {
if((state_val_32919 === (18))){
var inst_32884 = (state_32918[(7)]);
var inst_32893 = cljs.core.first.call(null,inst_32884);
var state_32918__$1 = state_32918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32918__$1,(20),out,inst_32893);
} else {
if((state_val_32919 === (8))){
var inst_32872 = (state_32918[(10)]);
var inst_32873 = (state_32918[(11)]);
var inst_32875 = (inst_32873 < inst_32872);
var inst_32876 = inst_32875;
var state_32918__$1 = state_32918;
if(cljs.core.truth_(inst_32876)){
var statearr_32952_32980 = state_32918__$1;
(statearr_32952_32980[(1)] = (10));

} else {
var statearr_32953_32981 = state_32918__$1;
(statearr_32953_32981[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto__))
;
return ((function (switch__31227__auto__,c__31315__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31228__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31228__auto____0 = (function (){
var statearr_32954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32954[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31228__auto__);

(statearr_32954[(1)] = (1));

return statearr_32954;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31228__auto____1 = (function (state_32918){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_32918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e32955){if((e32955 instanceof Object)){
var ex__31231__auto__ = e32955;
var statearr_32956_32982 = state_32918;
(statearr_32956_32982[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32983 = state_32918;
state_32918 = G__32983;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31228__auto__ = function(state_32918){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31228__auto____1.call(this,state_32918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31228__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31228__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto__))
})();
var state__31317__auto__ = (function (){var statearr_32957 = f__31316__auto__.call(null);
(statearr_32957[(6)] = c__31315__auto__);

return statearr_32957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto__))
);

return c__31315__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32985 = arguments.length;
switch (G__32985) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32988 = arguments.length;
switch (G__32988) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32991 = arguments.length;
switch (G__32991) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31315__auto___33038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___33038,out){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___33038,out){
return (function (state_33015){
var state_val_33016 = (state_33015[(1)]);
if((state_val_33016 === (7))){
var inst_33010 = (state_33015[(2)]);
var state_33015__$1 = state_33015;
var statearr_33017_33039 = state_33015__$1;
(statearr_33017_33039[(2)] = inst_33010);

(statearr_33017_33039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (1))){
var inst_32992 = null;
var state_33015__$1 = (function (){var statearr_33018 = state_33015;
(statearr_33018[(7)] = inst_32992);

return statearr_33018;
})();
var statearr_33019_33040 = state_33015__$1;
(statearr_33019_33040[(2)] = null);

(statearr_33019_33040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (4))){
var inst_32995 = (state_33015[(8)]);
var inst_32995__$1 = (state_33015[(2)]);
var inst_32996 = (inst_32995__$1 == null);
var inst_32997 = cljs.core.not.call(null,inst_32996);
var state_33015__$1 = (function (){var statearr_33020 = state_33015;
(statearr_33020[(8)] = inst_32995__$1);

return statearr_33020;
})();
if(inst_32997){
var statearr_33021_33041 = state_33015__$1;
(statearr_33021_33041[(1)] = (5));

} else {
var statearr_33022_33042 = state_33015__$1;
(statearr_33022_33042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (6))){
var state_33015__$1 = state_33015;
var statearr_33023_33043 = state_33015__$1;
(statearr_33023_33043[(2)] = null);

(statearr_33023_33043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (3))){
var inst_33012 = (state_33015[(2)]);
var inst_33013 = cljs.core.async.close_BANG_.call(null,out);
var state_33015__$1 = (function (){var statearr_33024 = state_33015;
(statearr_33024[(9)] = inst_33012);

return statearr_33024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33015__$1,inst_33013);
} else {
if((state_val_33016 === (2))){
var state_33015__$1 = state_33015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33015__$1,(4),ch);
} else {
if((state_val_33016 === (11))){
var inst_32995 = (state_33015[(8)]);
var inst_33004 = (state_33015[(2)]);
var inst_32992 = inst_32995;
var state_33015__$1 = (function (){var statearr_33025 = state_33015;
(statearr_33025[(10)] = inst_33004);

(statearr_33025[(7)] = inst_32992);

return statearr_33025;
})();
var statearr_33026_33044 = state_33015__$1;
(statearr_33026_33044[(2)] = null);

(statearr_33026_33044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (9))){
var inst_32995 = (state_33015[(8)]);
var state_33015__$1 = state_33015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33015__$1,(11),out,inst_32995);
} else {
if((state_val_33016 === (5))){
var inst_32995 = (state_33015[(8)]);
var inst_32992 = (state_33015[(7)]);
var inst_32999 = cljs.core._EQ_.call(null,inst_32995,inst_32992);
var state_33015__$1 = state_33015;
if(inst_32999){
var statearr_33028_33045 = state_33015__$1;
(statearr_33028_33045[(1)] = (8));

} else {
var statearr_33029_33046 = state_33015__$1;
(statearr_33029_33046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (10))){
var inst_33007 = (state_33015[(2)]);
var state_33015__$1 = state_33015;
var statearr_33030_33047 = state_33015__$1;
(statearr_33030_33047[(2)] = inst_33007);

(statearr_33030_33047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (8))){
var inst_32992 = (state_33015[(7)]);
var tmp33027 = inst_32992;
var inst_32992__$1 = tmp33027;
var state_33015__$1 = (function (){var statearr_33031 = state_33015;
(statearr_33031[(7)] = inst_32992__$1);

return statearr_33031;
})();
var statearr_33032_33048 = state_33015__$1;
(statearr_33032_33048[(2)] = null);

(statearr_33032_33048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___33038,out))
;
return ((function (switch__31227__auto__,c__31315__auto___33038,out){
return (function() {
var cljs$core$async$state_machine__31228__auto__ = null;
var cljs$core$async$state_machine__31228__auto____0 = (function (){
var statearr_33033 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33033[(0)] = cljs$core$async$state_machine__31228__auto__);

(statearr_33033[(1)] = (1));

return statearr_33033;
});
var cljs$core$async$state_machine__31228__auto____1 = (function (state_33015){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_33015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e33034){if((e33034 instanceof Object)){
var ex__31231__auto__ = e33034;
var statearr_33035_33049 = state_33015;
(statearr_33035_33049[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33050 = state_33015;
state_33015 = G__33050;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$state_machine__31228__auto__ = function(state_33015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31228__auto____1.call(this,state_33015);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31228__auto____0;
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31228__auto____1;
return cljs$core$async$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___33038,out))
})();
var state__31317__auto__ = (function (){var statearr_33036 = f__31316__auto__.call(null);
(statearr_33036[(6)] = c__31315__auto___33038);

return statearr_33036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___33038,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33052 = arguments.length;
switch (G__33052) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31315__auto___33118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___33118,out){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___33118,out){
return (function (state_33090){
var state_val_33091 = (state_33090[(1)]);
if((state_val_33091 === (7))){
var inst_33086 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
var statearr_33092_33119 = state_33090__$1;
(statearr_33092_33119[(2)] = inst_33086);

(statearr_33092_33119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (1))){
var inst_33053 = (new Array(n));
var inst_33054 = inst_33053;
var inst_33055 = (0);
var state_33090__$1 = (function (){var statearr_33093 = state_33090;
(statearr_33093[(7)] = inst_33055);

(statearr_33093[(8)] = inst_33054);

return statearr_33093;
})();
var statearr_33094_33120 = state_33090__$1;
(statearr_33094_33120[(2)] = null);

(statearr_33094_33120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (4))){
var inst_33058 = (state_33090[(9)]);
var inst_33058__$1 = (state_33090[(2)]);
var inst_33059 = (inst_33058__$1 == null);
var inst_33060 = cljs.core.not.call(null,inst_33059);
var state_33090__$1 = (function (){var statearr_33095 = state_33090;
(statearr_33095[(9)] = inst_33058__$1);

return statearr_33095;
})();
if(inst_33060){
var statearr_33096_33121 = state_33090__$1;
(statearr_33096_33121[(1)] = (5));

} else {
var statearr_33097_33122 = state_33090__$1;
(statearr_33097_33122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (15))){
var inst_33080 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
var statearr_33098_33123 = state_33090__$1;
(statearr_33098_33123[(2)] = inst_33080);

(statearr_33098_33123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (13))){
var state_33090__$1 = state_33090;
var statearr_33099_33124 = state_33090__$1;
(statearr_33099_33124[(2)] = null);

(statearr_33099_33124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (6))){
var inst_33055 = (state_33090[(7)]);
var inst_33076 = (inst_33055 > (0));
var state_33090__$1 = state_33090;
if(cljs.core.truth_(inst_33076)){
var statearr_33100_33125 = state_33090__$1;
(statearr_33100_33125[(1)] = (12));

} else {
var statearr_33101_33126 = state_33090__$1;
(statearr_33101_33126[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (3))){
var inst_33088 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33090__$1,inst_33088);
} else {
if((state_val_33091 === (12))){
var inst_33054 = (state_33090[(8)]);
var inst_33078 = cljs.core.vec.call(null,inst_33054);
var state_33090__$1 = state_33090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33090__$1,(15),out,inst_33078);
} else {
if((state_val_33091 === (2))){
var state_33090__$1 = state_33090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33090__$1,(4),ch);
} else {
if((state_val_33091 === (11))){
var inst_33070 = (state_33090[(2)]);
var inst_33071 = (new Array(n));
var inst_33054 = inst_33071;
var inst_33055 = (0);
var state_33090__$1 = (function (){var statearr_33102 = state_33090;
(statearr_33102[(7)] = inst_33055);

(statearr_33102[(8)] = inst_33054);

(statearr_33102[(10)] = inst_33070);

return statearr_33102;
})();
var statearr_33103_33127 = state_33090__$1;
(statearr_33103_33127[(2)] = null);

(statearr_33103_33127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (9))){
var inst_33054 = (state_33090[(8)]);
var inst_33068 = cljs.core.vec.call(null,inst_33054);
var state_33090__$1 = state_33090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33090__$1,(11),out,inst_33068);
} else {
if((state_val_33091 === (5))){
var inst_33055 = (state_33090[(7)]);
var inst_33063 = (state_33090[(11)]);
var inst_33054 = (state_33090[(8)]);
var inst_33058 = (state_33090[(9)]);
var inst_33062 = (inst_33054[inst_33055] = inst_33058);
var inst_33063__$1 = (inst_33055 + (1));
var inst_33064 = (inst_33063__$1 < n);
var state_33090__$1 = (function (){var statearr_33104 = state_33090;
(statearr_33104[(11)] = inst_33063__$1);

(statearr_33104[(12)] = inst_33062);

return statearr_33104;
})();
if(cljs.core.truth_(inst_33064)){
var statearr_33105_33128 = state_33090__$1;
(statearr_33105_33128[(1)] = (8));

} else {
var statearr_33106_33129 = state_33090__$1;
(statearr_33106_33129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (14))){
var inst_33083 = (state_33090[(2)]);
var inst_33084 = cljs.core.async.close_BANG_.call(null,out);
var state_33090__$1 = (function (){var statearr_33108 = state_33090;
(statearr_33108[(13)] = inst_33083);

return statearr_33108;
})();
var statearr_33109_33130 = state_33090__$1;
(statearr_33109_33130[(2)] = inst_33084);

(statearr_33109_33130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (10))){
var inst_33074 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
var statearr_33110_33131 = state_33090__$1;
(statearr_33110_33131[(2)] = inst_33074);

(statearr_33110_33131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (8))){
var inst_33063 = (state_33090[(11)]);
var inst_33054 = (state_33090[(8)]);
var tmp33107 = inst_33054;
var inst_33054__$1 = tmp33107;
var inst_33055 = inst_33063;
var state_33090__$1 = (function (){var statearr_33111 = state_33090;
(statearr_33111[(7)] = inst_33055);

(statearr_33111[(8)] = inst_33054__$1);

return statearr_33111;
})();
var statearr_33112_33132 = state_33090__$1;
(statearr_33112_33132[(2)] = null);

(statearr_33112_33132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___33118,out))
;
return ((function (switch__31227__auto__,c__31315__auto___33118,out){
return (function() {
var cljs$core$async$state_machine__31228__auto__ = null;
var cljs$core$async$state_machine__31228__auto____0 = (function (){
var statearr_33113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33113[(0)] = cljs$core$async$state_machine__31228__auto__);

(statearr_33113[(1)] = (1));

return statearr_33113;
});
var cljs$core$async$state_machine__31228__auto____1 = (function (state_33090){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_33090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e33114){if((e33114 instanceof Object)){
var ex__31231__auto__ = e33114;
var statearr_33115_33133 = state_33090;
(statearr_33115_33133[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33134 = state_33090;
state_33090 = G__33134;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$state_machine__31228__auto__ = function(state_33090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31228__auto____1.call(this,state_33090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31228__auto____0;
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31228__auto____1;
return cljs$core$async$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___33118,out))
})();
var state__31317__auto__ = (function (){var statearr_33116 = f__31316__auto__.call(null);
(statearr_33116[(6)] = c__31315__auto___33118);

return statearr_33116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___33118,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33136 = arguments.length;
switch (G__33136) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31315__auto___33206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31315__auto___33206,out){
return (function (){
var f__31316__auto__ = (function (){var switch__31227__auto__ = ((function (c__31315__auto___33206,out){
return (function (state_33178){
var state_val_33179 = (state_33178[(1)]);
if((state_val_33179 === (7))){
var inst_33174 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
var statearr_33180_33207 = state_33178__$1;
(statearr_33180_33207[(2)] = inst_33174);

(statearr_33180_33207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (1))){
var inst_33137 = [];
var inst_33138 = inst_33137;
var inst_33139 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33178__$1 = (function (){var statearr_33181 = state_33178;
(statearr_33181[(7)] = inst_33139);

(statearr_33181[(8)] = inst_33138);

return statearr_33181;
})();
var statearr_33182_33208 = state_33178__$1;
(statearr_33182_33208[(2)] = null);

(statearr_33182_33208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (4))){
var inst_33142 = (state_33178[(9)]);
var inst_33142__$1 = (state_33178[(2)]);
var inst_33143 = (inst_33142__$1 == null);
var inst_33144 = cljs.core.not.call(null,inst_33143);
var state_33178__$1 = (function (){var statearr_33183 = state_33178;
(statearr_33183[(9)] = inst_33142__$1);

return statearr_33183;
})();
if(inst_33144){
var statearr_33184_33209 = state_33178__$1;
(statearr_33184_33209[(1)] = (5));

} else {
var statearr_33185_33210 = state_33178__$1;
(statearr_33185_33210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (15))){
var inst_33168 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
var statearr_33186_33211 = state_33178__$1;
(statearr_33186_33211[(2)] = inst_33168);

(statearr_33186_33211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (13))){
var state_33178__$1 = state_33178;
var statearr_33187_33212 = state_33178__$1;
(statearr_33187_33212[(2)] = null);

(statearr_33187_33212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (6))){
var inst_33138 = (state_33178[(8)]);
var inst_33163 = inst_33138.length;
var inst_33164 = (inst_33163 > (0));
var state_33178__$1 = state_33178;
if(cljs.core.truth_(inst_33164)){
var statearr_33188_33213 = state_33178__$1;
(statearr_33188_33213[(1)] = (12));

} else {
var statearr_33189_33214 = state_33178__$1;
(statearr_33189_33214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (3))){
var inst_33176 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33178__$1,inst_33176);
} else {
if((state_val_33179 === (12))){
var inst_33138 = (state_33178[(8)]);
var inst_33166 = cljs.core.vec.call(null,inst_33138);
var state_33178__$1 = state_33178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33178__$1,(15),out,inst_33166);
} else {
if((state_val_33179 === (2))){
var state_33178__$1 = state_33178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33178__$1,(4),ch);
} else {
if((state_val_33179 === (11))){
var inst_33146 = (state_33178[(10)]);
var inst_33142 = (state_33178[(9)]);
var inst_33156 = (state_33178[(2)]);
var inst_33157 = [];
var inst_33158 = inst_33157.push(inst_33142);
var inst_33138 = inst_33157;
var inst_33139 = inst_33146;
var state_33178__$1 = (function (){var statearr_33190 = state_33178;
(statearr_33190[(11)] = inst_33158);

(statearr_33190[(7)] = inst_33139);

(statearr_33190[(8)] = inst_33138);

(statearr_33190[(12)] = inst_33156);

return statearr_33190;
})();
var statearr_33191_33215 = state_33178__$1;
(statearr_33191_33215[(2)] = null);

(statearr_33191_33215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (9))){
var inst_33138 = (state_33178[(8)]);
var inst_33154 = cljs.core.vec.call(null,inst_33138);
var state_33178__$1 = state_33178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33178__$1,(11),out,inst_33154);
} else {
if((state_val_33179 === (5))){
var inst_33146 = (state_33178[(10)]);
var inst_33139 = (state_33178[(7)]);
var inst_33142 = (state_33178[(9)]);
var inst_33146__$1 = f.call(null,inst_33142);
var inst_33147 = cljs.core._EQ_.call(null,inst_33146__$1,inst_33139);
var inst_33148 = cljs.core.keyword_identical_QMARK_.call(null,inst_33139,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33149 = (inst_33147) || (inst_33148);
var state_33178__$1 = (function (){var statearr_33192 = state_33178;
(statearr_33192[(10)] = inst_33146__$1);

return statearr_33192;
})();
if(cljs.core.truth_(inst_33149)){
var statearr_33193_33216 = state_33178__$1;
(statearr_33193_33216[(1)] = (8));

} else {
var statearr_33194_33217 = state_33178__$1;
(statearr_33194_33217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (14))){
var inst_33171 = (state_33178[(2)]);
var inst_33172 = cljs.core.async.close_BANG_.call(null,out);
var state_33178__$1 = (function (){var statearr_33196 = state_33178;
(statearr_33196[(13)] = inst_33171);

return statearr_33196;
})();
var statearr_33197_33218 = state_33178__$1;
(statearr_33197_33218[(2)] = inst_33172);

(statearr_33197_33218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (10))){
var inst_33161 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
var statearr_33198_33219 = state_33178__$1;
(statearr_33198_33219[(2)] = inst_33161);

(statearr_33198_33219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (8))){
var inst_33146 = (state_33178[(10)]);
var inst_33138 = (state_33178[(8)]);
var inst_33142 = (state_33178[(9)]);
var inst_33151 = inst_33138.push(inst_33142);
var tmp33195 = inst_33138;
var inst_33138__$1 = tmp33195;
var inst_33139 = inst_33146;
var state_33178__$1 = (function (){var statearr_33199 = state_33178;
(statearr_33199[(7)] = inst_33139);

(statearr_33199[(8)] = inst_33138__$1);

(statearr_33199[(14)] = inst_33151);

return statearr_33199;
})();
var statearr_33200_33220 = state_33178__$1;
(statearr_33200_33220[(2)] = null);

(statearr_33200_33220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31315__auto___33206,out))
;
return ((function (switch__31227__auto__,c__31315__auto___33206,out){
return (function() {
var cljs$core$async$state_machine__31228__auto__ = null;
var cljs$core$async$state_machine__31228__auto____0 = (function (){
var statearr_33201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33201[(0)] = cljs$core$async$state_machine__31228__auto__);

(statearr_33201[(1)] = (1));

return statearr_33201;
});
var cljs$core$async$state_machine__31228__auto____1 = (function (state_33178){
while(true){
var ret_value__31229__auto__ = (function (){try{while(true){
var result__31230__auto__ = switch__31227__auto__.call(null,state_33178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31230__auto__;
}
break;
}
}catch (e33202){if((e33202 instanceof Object)){
var ex__31231__auto__ = e33202;
var statearr_33203_33221 = state_33178;
(statearr_33203_33221[(5)] = ex__31231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33222 = state_33178;
state_33178 = G__33222;
continue;
} else {
return ret_value__31229__auto__;
}
break;
}
});
cljs$core$async$state_machine__31228__auto__ = function(state_33178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31228__auto____1.call(this,state_33178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31228__auto____0;
cljs$core$async$state_machine__31228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31228__auto____1;
return cljs$core$async$state_machine__31228__auto__;
})()
;})(switch__31227__auto__,c__31315__auto___33206,out))
})();
var state__31317__auto__ = (function (){var statearr_33204 = f__31316__auto__.call(null);
(statearr_33204[(6)] = c__31315__auto___33206);

return statearr_33204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31317__auto__);
});})(c__31315__auto___33206,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1517067015712
