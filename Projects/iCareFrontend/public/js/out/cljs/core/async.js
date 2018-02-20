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
var G__31360 = arguments.length;
switch (G__31360) {
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
if(typeof cljs.core.async.t_cljs$core$async31361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31361 = (function (f,blockable,meta31362){
this.f = f;
this.blockable = blockable;
this.meta31362 = meta31362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31363,meta31362__$1){
var self__ = this;
var _31363__$1 = this;
return (new cljs.core.async.t_cljs$core$async31361(self__.f,self__.blockable,meta31362__$1));
});

cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31363){
var self__ = this;
var _31363__$1 = this;
return self__.meta31362;
});

cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31362","meta31362",-1250317436,null)], null);
});

cljs.core.async.t_cljs$core$async31361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31361";

cljs.core.async.t_cljs$core$async31361.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async31361");
});

cljs.core.async.__GT_t_cljs$core$async31361 = (function cljs$core$async$__GT_t_cljs$core$async31361(f__$1,blockable__$1,meta31362){
return (new cljs.core.async.t_cljs$core$async31361(f__$1,blockable__$1,meta31362));
});

}

return (new cljs.core.async.t_cljs$core$async31361(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31367 = arguments.length;
switch (G__31367) {
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
var G__31370 = arguments.length;
switch (G__31370) {
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
var G__31373 = arguments.length;
switch (G__31373) {
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
var val_31375 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31375);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31375,ret){
return (function (){
return fn1.call(null,val_31375);
});})(val_31375,ret))
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
var G__31377 = arguments.length;
switch (G__31377) {
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
var n__28998__auto___31379 = n;
var x_31380 = (0);
while(true){
if((x_31380 < n__28998__auto___31379)){
(a[x_31380] = (0));

var G__31381 = (x_31380 + (1));
x_31380 = G__31381;
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

var G__31382 = (i + (1));
i = G__31382;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31383 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31383 = (function (flag,meta31384){
this.flag = flag;
this.meta31384 = meta31384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31385,meta31384__$1){
var self__ = this;
var _31385__$1 = this;
return (new cljs.core.async.t_cljs$core$async31383(self__.flag,meta31384__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31385){
var self__ = this;
var _31385__$1 = this;
return self__.meta31384;
});})(flag))
;

cljs.core.async.t_cljs$core$async31383.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31383.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31383.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31384","meta31384",1476276533,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31383.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31383";

cljs.core.async.t_cljs$core$async31383.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async31383");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31383 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31383(flag__$1,meta31384){
return (new cljs.core.async.t_cljs$core$async31383(flag__$1,meta31384));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31383(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31386 = (function (flag,cb,meta31387){
this.flag = flag;
this.cb = cb;
this.meta31387 = meta31387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31388,meta31387__$1){
var self__ = this;
var _31388__$1 = this;
return (new cljs.core.async.t_cljs$core$async31386(self__.flag,self__.cb,meta31387__$1));
});

cljs.core.async.t_cljs$core$async31386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31388){
var self__ = this;
var _31388__$1 = this;
return self__.meta31387;
});

cljs.core.async.t_cljs$core$async31386.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31387","meta31387",-1028902403,null)], null);
});

cljs.core.async.t_cljs$core$async31386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31386";

cljs.core.async.t_cljs$core$async31386.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async31386");
});

cljs.core.async.__GT_t_cljs$core$async31386 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31386(flag__$1,cb__$1,meta31387){
return (new cljs.core.async.t_cljs$core$async31386(flag__$1,cb__$1,meta31387));
});

}

return (new cljs.core.async.t_cljs$core$async31386(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31389_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31389_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31390_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31390_SHARP_,port], null));
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
var G__31391 = (i + (1));
i = G__31391;
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
var len__29222__auto___31397 = arguments.length;
var i__29223__auto___31398 = (0);
while(true){
if((i__29223__auto___31398 < len__29222__auto___31397)){
args__29229__auto__.push((arguments[i__29223__auto___31398]));

var G__31399 = (i__29223__auto___31398 + (1));
i__29223__auto___31398 = G__31399;
continue;
} else {
}
break;
}

var argseq__29230__auto__ = ((((1) < args__29229__auto__.length))?(new cljs.core.IndexedSeq(args__29229__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29230__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31394){
var map__31395 = p__31394;
var map__31395__$1 = ((((!((map__31395 == null)))?((((map__31395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31395):map__31395);
var opts = map__31395__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31392){
var G__31393 = cljs.core.first.call(null,seq31392);
var seq31392__$1 = cljs.core.next.call(null,seq31392);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31393,seq31392__$1);
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
var G__31401 = arguments.length;
switch (G__31401) {
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
var c__31314__auto___31447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___31447){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___31447){
return (function (state_31425){
var state_val_31426 = (state_31425[(1)]);
if((state_val_31426 === (7))){
var inst_31421 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31427_31448 = state_31425__$1;
(statearr_31427_31448[(2)] = inst_31421);

(statearr_31427_31448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (1))){
var state_31425__$1 = state_31425;
var statearr_31428_31449 = state_31425__$1;
(statearr_31428_31449[(2)] = null);

(statearr_31428_31449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (4))){
var inst_31404 = (state_31425[(7)]);
var inst_31404__$1 = (state_31425[(2)]);
var inst_31405 = (inst_31404__$1 == null);
var state_31425__$1 = (function (){var statearr_31429 = state_31425;
(statearr_31429[(7)] = inst_31404__$1);

return statearr_31429;
})();
if(cljs.core.truth_(inst_31405)){
var statearr_31430_31450 = state_31425__$1;
(statearr_31430_31450[(1)] = (5));

} else {
var statearr_31431_31451 = state_31425__$1;
(statearr_31431_31451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (13))){
var state_31425__$1 = state_31425;
var statearr_31432_31452 = state_31425__$1;
(statearr_31432_31452[(2)] = null);

(statearr_31432_31452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (6))){
var inst_31404 = (state_31425[(7)]);
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31425__$1,(11),to,inst_31404);
} else {
if((state_val_31426 === (3))){
var inst_31423 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31425__$1,inst_31423);
} else {
if((state_val_31426 === (12))){
var state_31425__$1 = state_31425;
var statearr_31433_31453 = state_31425__$1;
(statearr_31433_31453[(2)] = null);

(statearr_31433_31453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (2))){
var state_31425__$1 = state_31425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31425__$1,(4),from);
} else {
if((state_val_31426 === (11))){
var inst_31414 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
if(cljs.core.truth_(inst_31414)){
var statearr_31434_31454 = state_31425__$1;
(statearr_31434_31454[(1)] = (12));

} else {
var statearr_31435_31455 = state_31425__$1;
(statearr_31435_31455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (9))){
var state_31425__$1 = state_31425;
var statearr_31436_31456 = state_31425__$1;
(statearr_31436_31456[(2)] = null);

(statearr_31436_31456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (5))){
var state_31425__$1 = state_31425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31437_31457 = state_31425__$1;
(statearr_31437_31457[(1)] = (8));

} else {
var statearr_31438_31458 = state_31425__$1;
(statearr_31438_31458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (14))){
var inst_31419 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31439_31459 = state_31425__$1;
(statearr_31439_31459[(2)] = inst_31419);

(statearr_31439_31459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (10))){
var inst_31411 = (state_31425[(2)]);
var state_31425__$1 = state_31425;
var statearr_31440_31460 = state_31425__$1;
(statearr_31440_31460[(2)] = inst_31411);

(statearr_31440_31460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31426 === (8))){
var inst_31408 = cljs.core.async.close_BANG_.call(null,to);
var state_31425__$1 = state_31425;
var statearr_31441_31461 = state_31425__$1;
(statearr_31441_31461[(2)] = inst_31408);

(statearr_31441_31461[(1)] = (10));


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
});})(c__31314__auto___31447))
;
return ((function (switch__31226__auto__,c__31314__auto___31447){
return (function() {
var cljs$core$async$state_machine__31227__auto__ = null;
var cljs$core$async$state_machine__31227__auto____0 = (function (){
var statearr_31442 = [null,null,null,null,null,null,null,null];
(statearr_31442[(0)] = cljs$core$async$state_machine__31227__auto__);

(statearr_31442[(1)] = (1));

return statearr_31442;
});
var cljs$core$async$state_machine__31227__auto____1 = (function (state_31425){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_31425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e31443){if((e31443 instanceof Object)){
var ex__31230__auto__ = e31443;
var statearr_31444_31462 = state_31425;
(statearr_31444_31462[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31463 = state_31425;
state_31425 = G__31463;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$state_machine__31227__auto__ = function(state_31425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31227__auto____1.call(this,state_31425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31227__auto____0;
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31227__auto____1;
return cljs$core$async$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___31447))
})();
var state__31316__auto__ = (function (){var statearr_31445 = f__31315__auto__.call(null);
(statearr_31445[(6)] = c__31314__auto___31447);

return statearr_31445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___31447))
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
return (function (p__31464){
var vec__31465 = p__31464;
var v = cljs.core.nth.call(null,vec__31465,(0),null);
var p = cljs.core.nth.call(null,vec__31465,(1),null);
var job = vec__31465;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31314__auto___31636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___31636,res,vec__31465,v,p,job,jobs,results){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___31636,res,vec__31465,v,p,job,jobs,results){
return (function (state_31472){
var state_val_31473 = (state_31472[(1)]);
if((state_val_31473 === (1))){
var state_31472__$1 = state_31472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31472__$1,(2),res,v);
} else {
if((state_val_31473 === (2))){
var inst_31469 = (state_31472[(2)]);
var inst_31470 = cljs.core.async.close_BANG_.call(null,res);
var state_31472__$1 = (function (){var statearr_31474 = state_31472;
(statearr_31474[(7)] = inst_31469);

return statearr_31474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31472__$1,inst_31470);
} else {
return null;
}
}
});})(c__31314__auto___31636,res,vec__31465,v,p,job,jobs,results))
;
return ((function (switch__31226__auto__,c__31314__auto___31636,res,vec__31465,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0 = (function (){
var statearr_31475 = [null,null,null,null,null,null,null,null];
(statearr_31475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__);

(statearr_31475[(1)] = (1));

return statearr_31475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1 = (function (state_31472){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_31472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e31476){if((e31476 instanceof Object)){
var ex__31230__auto__ = e31476;
var statearr_31477_31637 = state_31472;
(statearr_31477_31637[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31638 = state_31472;
state_31472 = G__31638;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__ = function(state_31472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1.call(this,state_31472);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___31636,res,vec__31465,v,p,job,jobs,results))
})();
var state__31316__auto__ = (function (){var statearr_31478 = f__31315__auto__.call(null);
(statearr_31478[(6)] = c__31314__auto___31636);

return statearr_31478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___31636,res,vec__31465,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31479){
var vec__31480 = p__31479;
var v = cljs.core.nth.call(null,vec__31480,(0),null);
var p = cljs.core.nth.call(null,vec__31480,(1),null);
var job = vec__31480;
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
var n__28998__auto___31639 = n;
var __31640 = (0);
while(true){
if((__31640 < n__28998__auto___31639)){
var G__31483_31641 = type;
var G__31483_31642__$1 = (((G__31483_31641 instanceof cljs.core.Keyword))?G__31483_31641.fqn:null);
switch (G__31483_31642__$1) {
case "compute":
var c__31314__auto___31644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31640,c__31314__auto___31644,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (__31640,c__31314__auto___31644,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async){
return (function (state_31496){
var state_val_31497 = (state_31496[(1)]);
if((state_val_31497 === (1))){
var state_31496__$1 = state_31496;
var statearr_31498_31645 = state_31496__$1;
(statearr_31498_31645[(2)] = null);

(statearr_31498_31645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (2))){
var state_31496__$1 = state_31496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31496__$1,(4),jobs);
} else {
if((state_val_31497 === (3))){
var inst_31494 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31496__$1,inst_31494);
} else {
if((state_val_31497 === (4))){
var inst_31486 = (state_31496[(2)]);
var inst_31487 = process.call(null,inst_31486);
var state_31496__$1 = state_31496;
if(cljs.core.truth_(inst_31487)){
var statearr_31499_31646 = state_31496__$1;
(statearr_31499_31646[(1)] = (5));

} else {
var statearr_31500_31647 = state_31496__$1;
(statearr_31500_31647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (5))){
var state_31496__$1 = state_31496;
var statearr_31501_31648 = state_31496__$1;
(statearr_31501_31648[(2)] = null);

(statearr_31501_31648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (6))){
var state_31496__$1 = state_31496;
var statearr_31502_31649 = state_31496__$1;
(statearr_31502_31649[(2)] = null);

(statearr_31502_31649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (7))){
var inst_31492 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
var statearr_31503_31650 = state_31496__$1;
(statearr_31503_31650[(2)] = inst_31492);

(statearr_31503_31650[(1)] = (3));


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
});})(__31640,c__31314__auto___31644,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async))
;
return ((function (__31640,switch__31226__auto__,c__31314__auto___31644,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0 = (function (){
var statearr_31504 = [null,null,null,null,null,null,null];
(statearr_31504[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__);

(statearr_31504[(1)] = (1));

return statearr_31504;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1 = (function (state_31496){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_31496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e31505){if((e31505 instanceof Object)){
var ex__31230__auto__ = e31505;
var statearr_31506_31651 = state_31496;
(statearr_31506_31651[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31652 = state_31496;
state_31496 = G__31652;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__ = function(state_31496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1.call(this,state_31496);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__;
})()
;})(__31640,switch__31226__auto__,c__31314__auto___31644,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async))
})();
var state__31316__auto__ = (function (){var statearr_31507 = f__31315__auto__.call(null);
(statearr_31507[(6)] = c__31314__auto___31644);

return statearr_31507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(__31640,c__31314__auto___31644,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async))
);


break;
case "async":
var c__31314__auto___31653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31640,c__31314__auto___31653,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (__31640,c__31314__auto___31653,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async){
return (function (state_31520){
var state_val_31521 = (state_31520[(1)]);
if((state_val_31521 === (1))){
var state_31520__$1 = state_31520;
var statearr_31522_31654 = state_31520__$1;
(statearr_31522_31654[(2)] = null);

(statearr_31522_31654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (2))){
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31520__$1,(4),jobs);
} else {
if((state_val_31521 === (3))){
var inst_31518 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31520__$1,inst_31518);
} else {
if((state_val_31521 === (4))){
var inst_31510 = (state_31520[(2)]);
var inst_31511 = async.call(null,inst_31510);
var state_31520__$1 = state_31520;
if(cljs.core.truth_(inst_31511)){
var statearr_31523_31655 = state_31520__$1;
(statearr_31523_31655[(1)] = (5));

} else {
var statearr_31524_31656 = state_31520__$1;
(statearr_31524_31656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (5))){
var state_31520__$1 = state_31520;
var statearr_31525_31657 = state_31520__$1;
(statearr_31525_31657[(2)] = null);

(statearr_31525_31657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (6))){
var state_31520__$1 = state_31520;
var statearr_31526_31658 = state_31520__$1;
(statearr_31526_31658[(2)] = null);

(statearr_31526_31658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (7))){
var inst_31516 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31527_31659 = state_31520__$1;
(statearr_31527_31659[(2)] = inst_31516);

(statearr_31527_31659[(1)] = (3));


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
});})(__31640,c__31314__auto___31653,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async))
;
return ((function (__31640,switch__31226__auto__,c__31314__auto___31653,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0 = (function (){
var statearr_31528 = [null,null,null,null,null,null,null];
(statearr_31528[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__);

(statearr_31528[(1)] = (1));

return statearr_31528;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1 = (function (state_31520){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_31520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e31529){if((e31529 instanceof Object)){
var ex__31230__auto__ = e31529;
var statearr_31530_31660 = state_31520;
(statearr_31530_31660[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31661 = state_31520;
state_31520 = G__31661;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__ = function(state_31520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1.call(this,state_31520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__;
})()
;})(__31640,switch__31226__auto__,c__31314__auto___31653,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async))
})();
var state__31316__auto__ = (function (){var statearr_31531 = f__31315__auto__.call(null);
(statearr_31531[(6)] = c__31314__auto___31653);

return statearr_31531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(__31640,c__31314__auto___31653,G__31483_31641,G__31483_31642__$1,n__28998__auto___31639,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31483_31642__$1)].join('')));

}

var G__31662 = (__31640 + (1));
__31640 = G__31662;
continue;
} else {
}
break;
}

var c__31314__auto___31663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___31663,jobs,results,process,async){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___31663,jobs,results,process,async){
return (function (state_31553){
var state_val_31554 = (state_31553[(1)]);
if((state_val_31554 === (1))){
var state_31553__$1 = state_31553;
var statearr_31555_31664 = state_31553__$1;
(statearr_31555_31664[(2)] = null);

(statearr_31555_31664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (2))){
var state_31553__$1 = state_31553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31553__$1,(4),from);
} else {
if((state_val_31554 === (3))){
var inst_31551 = (state_31553[(2)]);
var state_31553__$1 = state_31553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31553__$1,inst_31551);
} else {
if((state_val_31554 === (4))){
var inst_31534 = (state_31553[(7)]);
var inst_31534__$1 = (state_31553[(2)]);
var inst_31535 = (inst_31534__$1 == null);
var state_31553__$1 = (function (){var statearr_31556 = state_31553;
(statearr_31556[(7)] = inst_31534__$1);

return statearr_31556;
})();
if(cljs.core.truth_(inst_31535)){
var statearr_31557_31665 = state_31553__$1;
(statearr_31557_31665[(1)] = (5));

} else {
var statearr_31558_31666 = state_31553__$1;
(statearr_31558_31666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (5))){
var inst_31537 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31553__$1 = state_31553;
var statearr_31559_31667 = state_31553__$1;
(statearr_31559_31667[(2)] = inst_31537);

(statearr_31559_31667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (6))){
var inst_31534 = (state_31553[(7)]);
var inst_31539 = (state_31553[(8)]);
var inst_31539__$1 = cljs.core.async.chan.call(null,(1));
var inst_31540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31541 = [inst_31534,inst_31539__$1];
var inst_31542 = (new cljs.core.PersistentVector(null,2,(5),inst_31540,inst_31541,null));
var state_31553__$1 = (function (){var statearr_31560 = state_31553;
(statearr_31560[(8)] = inst_31539__$1);

return statearr_31560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31553__$1,(8),jobs,inst_31542);
} else {
if((state_val_31554 === (7))){
var inst_31549 = (state_31553[(2)]);
var state_31553__$1 = state_31553;
var statearr_31561_31668 = state_31553__$1;
(statearr_31561_31668[(2)] = inst_31549);

(statearr_31561_31668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31554 === (8))){
var inst_31539 = (state_31553[(8)]);
var inst_31544 = (state_31553[(2)]);
var state_31553__$1 = (function (){var statearr_31562 = state_31553;
(statearr_31562[(9)] = inst_31544);

return statearr_31562;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31553__$1,(9),results,inst_31539);
} else {
if((state_val_31554 === (9))){
var inst_31546 = (state_31553[(2)]);
var state_31553__$1 = (function (){var statearr_31563 = state_31553;
(statearr_31563[(10)] = inst_31546);

return statearr_31563;
})();
var statearr_31564_31669 = state_31553__$1;
(statearr_31564_31669[(2)] = null);

(statearr_31564_31669[(1)] = (2));


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
});})(c__31314__auto___31663,jobs,results,process,async))
;
return ((function (switch__31226__auto__,c__31314__auto___31663,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0 = (function (){
var statearr_31565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__);

(statearr_31565[(1)] = (1));

return statearr_31565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1 = (function (state_31553){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_31553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e31566){if((e31566 instanceof Object)){
var ex__31230__auto__ = e31566;
var statearr_31567_31670 = state_31553;
(statearr_31567_31670[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31671 = state_31553;
state_31553 = G__31671;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__ = function(state_31553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1.call(this,state_31553);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___31663,jobs,results,process,async))
})();
var state__31316__auto__ = (function (){var statearr_31568 = f__31315__auto__.call(null);
(statearr_31568[(6)] = c__31314__auto___31663);

return statearr_31568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___31663,jobs,results,process,async))
);


var c__31314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto__,jobs,results,process,async){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto__,jobs,results,process,async){
return (function (state_31606){
var state_val_31607 = (state_31606[(1)]);
if((state_val_31607 === (7))){
var inst_31602 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31608_31672 = state_31606__$1;
(statearr_31608_31672[(2)] = inst_31602);

(statearr_31608_31672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (20))){
var state_31606__$1 = state_31606;
var statearr_31609_31673 = state_31606__$1;
(statearr_31609_31673[(2)] = null);

(statearr_31609_31673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (1))){
var state_31606__$1 = state_31606;
var statearr_31610_31674 = state_31606__$1;
(statearr_31610_31674[(2)] = null);

(statearr_31610_31674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (4))){
var inst_31571 = (state_31606[(7)]);
var inst_31571__$1 = (state_31606[(2)]);
var inst_31572 = (inst_31571__$1 == null);
var state_31606__$1 = (function (){var statearr_31611 = state_31606;
(statearr_31611[(7)] = inst_31571__$1);

return statearr_31611;
})();
if(cljs.core.truth_(inst_31572)){
var statearr_31612_31675 = state_31606__$1;
(statearr_31612_31675[(1)] = (5));

} else {
var statearr_31613_31676 = state_31606__$1;
(statearr_31613_31676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (15))){
var inst_31584 = (state_31606[(8)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31606__$1,(18),to,inst_31584);
} else {
if((state_val_31607 === (21))){
var inst_31597 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31614_31677 = state_31606__$1;
(statearr_31614_31677[(2)] = inst_31597);

(statearr_31614_31677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (13))){
var inst_31599 = (state_31606[(2)]);
var state_31606__$1 = (function (){var statearr_31615 = state_31606;
(statearr_31615[(9)] = inst_31599);

return statearr_31615;
})();
var statearr_31616_31678 = state_31606__$1;
(statearr_31616_31678[(2)] = null);

(statearr_31616_31678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (6))){
var inst_31571 = (state_31606[(7)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31606__$1,(11),inst_31571);
} else {
if((state_val_31607 === (17))){
var inst_31592 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
if(cljs.core.truth_(inst_31592)){
var statearr_31617_31679 = state_31606__$1;
(statearr_31617_31679[(1)] = (19));

} else {
var statearr_31618_31680 = state_31606__$1;
(statearr_31618_31680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (3))){
var inst_31604 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31606__$1,inst_31604);
} else {
if((state_val_31607 === (12))){
var inst_31581 = (state_31606[(10)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31606__$1,(14),inst_31581);
} else {
if((state_val_31607 === (2))){
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31606__$1,(4),results);
} else {
if((state_val_31607 === (19))){
var state_31606__$1 = state_31606;
var statearr_31619_31681 = state_31606__$1;
(statearr_31619_31681[(2)] = null);

(statearr_31619_31681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (11))){
var inst_31581 = (state_31606[(2)]);
var state_31606__$1 = (function (){var statearr_31620 = state_31606;
(statearr_31620[(10)] = inst_31581);

return statearr_31620;
})();
var statearr_31621_31682 = state_31606__$1;
(statearr_31621_31682[(2)] = null);

(statearr_31621_31682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (9))){
var state_31606__$1 = state_31606;
var statearr_31622_31683 = state_31606__$1;
(statearr_31622_31683[(2)] = null);

(statearr_31622_31683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (5))){
var state_31606__$1 = state_31606;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31623_31684 = state_31606__$1;
(statearr_31623_31684[(1)] = (8));

} else {
var statearr_31624_31685 = state_31606__$1;
(statearr_31624_31685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (14))){
var inst_31586 = (state_31606[(11)]);
var inst_31584 = (state_31606[(8)]);
var inst_31584__$1 = (state_31606[(2)]);
var inst_31585 = (inst_31584__$1 == null);
var inst_31586__$1 = cljs.core.not.call(null,inst_31585);
var state_31606__$1 = (function (){var statearr_31625 = state_31606;
(statearr_31625[(11)] = inst_31586__$1);

(statearr_31625[(8)] = inst_31584__$1);

return statearr_31625;
})();
if(inst_31586__$1){
var statearr_31626_31686 = state_31606__$1;
(statearr_31626_31686[(1)] = (15));

} else {
var statearr_31627_31687 = state_31606__$1;
(statearr_31627_31687[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (16))){
var inst_31586 = (state_31606[(11)]);
var state_31606__$1 = state_31606;
var statearr_31628_31688 = state_31606__$1;
(statearr_31628_31688[(2)] = inst_31586);

(statearr_31628_31688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (10))){
var inst_31578 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31629_31689 = state_31606__$1;
(statearr_31629_31689[(2)] = inst_31578);

(statearr_31629_31689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (18))){
var inst_31589 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31630_31690 = state_31606__$1;
(statearr_31630_31690[(2)] = inst_31589);

(statearr_31630_31690[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (8))){
var inst_31575 = cljs.core.async.close_BANG_.call(null,to);
var state_31606__$1 = state_31606;
var statearr_31631_31691 = state_31606__$1;
(statearr_31631_31691[(2)] = inst_31575);

(statearr_31631_31691[(1)] = (10));


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
});})(c__31314__auto__,jobs,results,process,async))
;
return ((function (switch__31226__auto__,c__31314__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0 = (function (){
var statearr_31632 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__);

(statearr_31632[(1)] = (1));

return statearr_31632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1 = (function (state_31606){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_31606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e31633){if((e31633 instanceof Object)){
var ex__31230__auto__ = e31633;
var statearr_31634_31692 = state_31606;
(statearr_31634_31692[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31693 = state_31606;
state_31606 = G__31693;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__ = function(state_31606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1.call(this,state_31606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto__,jobs,results,process,async))
})();
var state__31316__auto__ = (function (){var statearr_31635 = f__31315__auto__.call(null);
(statearr_31635[(6)] = c__31314__auto__);

return statearr_31635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto__,jobs,results,process,async))
);

return c__31314__auto__;
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
var G__31695 = arguments.length;
switch (G__31695) {
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
var G__31698 = arguments.length;
switch (G__31698) {
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
var G__31701 = arguments.length;
switch (G__31701) {
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
var c__31314__auto___31750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___31750,tc,fc){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___31750,tc,fc){
return (function (state_31727){
var state_val_31728 = (state_31727[(1)]);
if((state_val_31728 === (7))){
var inst_31723 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
var statearr_31729_31751 = state_31727__$1;
(statearr_31729_31751[(2)] = inst_31723);

(statearr_31729_31751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (1))){
var state_31727__$1 = state_31727;
var statearr_31730_31752 = state_31727__$1;
(statearr_31730_31752[(2)] = null);

(statearr_31730_31752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (4))){
var inst_31704 = (state_31727[(7)]);
var inst_31704__$1 = (state_31727[(2)]);
var inst_31705 = (inst_31704__$1 == null);
var state_31727__$1 = (function (){var statearr_31731 = state_31727;
(statearr_31731[(7)] = inst_31704__$1);

return statearr_31731;
})();
if(cljs.core.truth_(inst_31705)){
var statearr_31732_31753 = state_31727__$1;
(statearr_31732_31753[(1)] = (5));

} else {
var statearr_31733_31754 = state_31727__$1;
(statearr_31733_31754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (13))){
var state_31727__$1 = state_31727;
var statearr_31734_31755 = state_31727__$1;
(statearr_31734_31755[(2)] = null);

(statearr_31734_31755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (6))){
var inst_31704 = (state_31727[(7)]);
var inst_31710 = p.call(null,inst_31704);
var state_31727__$1 = state_31727;
if(cljs.core.truth_(inst_31710)){
var statearr_31735_31756 = state_31727__$1;
(statearr_31735_31756[(1)] = (9));

} else {
var statearr_31736_31757 = state_31727__$1;
(statearr_31736_31757[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (3))){
var inst_31725 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31727__$1,inst_31725);
} else {
if((state_val_31728 === (12))){
var state_31727__$1 = state_31727;
var statearr_31737_31758 = state_31727__$1;
(statearr_31737_31758[(2)] = null);

(statearr_31737_31758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (2))){
var state_31727__$1 = state_31727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31727__$1,(4),ch);
} else {
if((state_val_31728 === (11))){
var inst_31704 = (state_31727[(7)]);
var inst_31714 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31727__$1,(8),inst_31714,inst_31704);
} else {
if((state_val_31728 === (9))){
var state_31727__$1 = state_31727;
var statearr_31738_31759 = state_31727__$1;
(statearr_31738_31759[(2)] = tc);

(statearr_31738_31759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (5))){
var inst_31707 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31708 = cljs.core.async.close_BANG_.call(null,fc);
var state_31727__$1 = (function (){var statearr_31739 = state_31727;
(statearr_31739[(8)] = inst_31707);

return statearr_31739;
})();
var statearr_31740_31760 = state_31727__$1;
(statearr_31740_31760[(2)] = inst_31708);

(statearr_31740_31760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (14))){
var inst_31721 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
var statearr_31741_31761 = state_31727__$1;
(statearr_31741_31761[(2)] = inst_31721);

(statearr_31741_31761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (10))){
var state_31727__$1 = state_31727;
var statearr_31742_31762 = state_31727__$1;
(statearr_31742_31762[(2)] = fc);

(statearr_31742_31762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (8))){
var inst_31716 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
if(cljs.core.truth_(inst_31716)){
var statearr_31743_31763 = state_31727__$1;
(statearr_31743_31763[(1)] = (12));

} else {
var statearr_31744_31764 = state_31727__$1;
(statearr_31744_31764[(1)] = (13));

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
});})(c__31314__auto___31750,tc,fc))
;
return ((function (switch__31226__auto__,c__31314__auto___31750,tc,fc){
return (function() {
var cljs$core$async$state_machine__31227__auto__ = null;
var cljs$core$async$state_machine__31227__auto____0 = (function (){
var statearr_31745 = [null,null,null,null,null,null,null,null,null];
(statearr_31745[(0)] = cljs$core$async$state_machine__31227__auto__);

(statearr_31745[(1)] = (1));

return statearr_31745;
});
var cljs$core$async$state_machine__31227__auto____1 = (function (state_31727){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_31727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e31746){if((e31746 instanceof Object)){
var ex__31230__auto__ = e31746;
var statearr_31747_31765 = state_31727;
(statearr_31747_31765[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31766 = state_31727;
state_31727 = G__31766;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$state_machine__31227__auto__ = function(state_31727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31227__auto____1.call(this,state_31727);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31227__auto____0;
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31227__auto____1;
return cljs$core$async$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___31750,tc,fc))
})();
var state__31316__auto__ = (function (){var statearr_31748 = f__31315__auto__.call(null);
(statearr_31748[(6)] = c__31314__auto___31750);

return statearr_31748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___31750,tc,fc))
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
var c__31314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto__){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto__){
return (function (state_31787){
var state_val_31788 = (state_31787[(1)]);
if((state_val_31788 === (7))){
var inst_31783 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31789_31807 = state_31787__$1;
(statearr_31789_31807[(2)] = inst_31783);

(statearr_31789_31807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (1))){
var inst_31767 = init;
var state_31787__$1 = (function (){var statearr_31790 = state_31787;
(statearr_31790[(7)] = inst_31767);

return statearr_31790;
})();
var statearr_31791_31808 = state_31787__$1;
(statearr_31791_31808[(2)] = null);

(statearr_31791_31808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (4))){
var inst_31770 = (state_31787[(8)]);
var inst_31770__$1 = (state_31787[(2)]);
var inst_31771 = (inst_31770__$1 == null);
var state_31787__$1 = (function (){var statearr_31792 = state_31787;
(statearr_31792[(8)] = inst_31770__$1);

return statearr_31792;
})();
if(cljs.core.truth_(inst_31771)){
var statearr_31793_31809 = state_31787__$1;
(statearr_31793_31809[(1)] = (5));

} else {
var statearr_31794_31810 = state_31787__$1;
(statearr_31794_31810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (6))){
var inst_31770 = (state_31787[(8)]);
var inst_31767 = (state_31787[(7)]);
var inst_31774 = (state_31787[(9)]);
var inst_31774__$1 = f.call(null,inst_31767,inst_31770);
var inst_31775 = cljs.core.reduced_QMARK_.call(null,inst_31774__$1);
var state_31787__$1 = (function (){var statearr_31795 = state_31787;
(statearr_31795[(9)] = inst_31774__$1);

return statearr_31795;
})();
if(inst_31775){
var statearr_31796_31811 = state_31787__$1;
(statearr_31796_31811[(1)] = (8));

} else {
var statearr_31797_31812 = state_31787__$1;
(statearr_31797_31812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (3))){
var inst_31785 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31787__$1,inst_31785);
} else {
if((state_val_31788 === (2))){
var state_31787__$1 = state_31787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31787__$1,(4),ch);
} else {
if((state_val_31788 === (9))){
var inst_31774 = (state_31787[(9)]);
var inst_31767 = inst_31774;
var state_31787__$1 = (function (){var statearr_31798 = state_31787;
(statearr_31798[(7)] = inst_31767);

return statearr_31798;
})();
var statearr_31799_31813 = state_31787__$1;
(statearr_31799_31813[(2)] = null);

(statearr_31799_31813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (5))){
var inst_31767 = (state_31787[(7)]);
var state_31787__$1 = state_31787;
var statearr_31800_31814 = state_31787__$1;
(statearr_31800_31814[(2)] = inst_31767);

(statearr_31800_31814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (10))){
var inst_31781 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31801_31815 = state_31787__$1;
(statearr_31801_31815[(2)] = inst_31781);

(statearr_31801_31815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (8))){
var inst_31774 = (state_31787[(9)]);
var inst_31777 = cljs.core.deref.call(null,inst_31774);
var state_31787__$1 = state_31787;
var statearr_31802_31816 = state_31787__$1;
(statearr_31802_31816[(2)] = inst_31777);

(statearr_31802_31816[(1)] = (10));


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
});})(c__31314__auto__))
;
return ((function (switch__31226__auto__,c__31314__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31227__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31227__auto____0 = (function (){
var statearr_31803 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31803[(0)] = cljs$core$async$reduce_$_state_machine__31227__auto__);

(statearr_31803[(1)] = (1));

return statearr_31803;
});
var cljs$core$async$reduce_$_state_machine__31227__auto____1 = (function (state_31787){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_31787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e31804){if((e31804 instanceof Object)){
var ex__31230__auto__ = e31804;
var statearr_31805_31817 = state_31787;
(statearr_31805_31817[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31818 = state_31787;
state_31787 = G__31818;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31227__auto__ = function(state_31787){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31227__auto____1.call(this,state_31787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31227__auto____0;
cljs$core$async$reduce_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31227__auto____1;
return cljs$core$async$reduce_$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto__))
})();
var state__31316__auto__ = (function (){var statearr_31806 = f__31315__auto__.call(null);
(statearr_31806[(6)] = c__31314__auto__);

return statearr_31806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto__))
);

return c__31314__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto__,f__$1){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto__,f__$1){
return (function (state_31824){
var state_val_31825 = (state_31824[(1)]);
if((state_val_31825 === (1))){
var inst_31819 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31824__$1,(2),inst_31819);
} else {
if((state_val_31825 === (2))){
var inst_31821 = (state_31824[(2)]);
var inst_31822 = f__$1.call(null,inst_31821);
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31824__$1,inst_31822);
} else {
return null;
}
}
});})(c__31314__auto__,f__$1))
;
return ((function (switch__31226__auto__,c__31314__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31227__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31227__auto____0 = (function (){
var statearr_31826 = [null,null,null,null,null,null,null];
(statearr_31826[(0)] = cljs$core$async$transduce_$_state_machine__31227__auto__);

(statearr_31826[(1)] = (1));

return statearr_31826;
});
var cljs$core$async$transduce_$_state_machine__31227__auto____1 = (function (state_31824){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_31824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e31827){if((e31827 instanceof Object)){
var ex__31230__auto__ = e31827;
var statearr_31828_31830 = state_31824;
(statearr_31828_31830[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31831 = state_31824;
state_31824 = G__31831;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31227__auto__ = function(state_31824){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31227__auto____1.call(this,state_31824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31227__auto____0;
cljs$core$async$transduce_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31227__auto____1;
return cljs$core$async$transduce_$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto__,f__$1))
})();
var state__31316__auto__ = (function (){var statearr_31829 = f__31315__auto__.call(null);
(statearr_31829[(6)] = c__31314__auto__);

return statearr_31829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto__,f__$1))
);

return c__31314__auto__;
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
var G__31833 = arguments.length;
switch (G__31833) {
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
var c__31314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto__){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto__){
return (function (state_31858){
var state_val_31859 = (state_31858[(1)]);
if((state_val_31859 === (7))){
var inst_31840 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31860_31882 = state_31858__$1;
(statearr_31860_31882[(2)] = inst_31840);

(statearr_31860_31882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (1))){
var inst_31834 = cljs.core.seq.call(null,coll);
var inst_31835 = inst_31834;
var state_31858__$1 = (function (){var statearr_31861 = state_31858;
(statearr_31861[(7)] = inst_31835);

return statearr_31861;
})();
var statearr_31862_31883 = state_31858__$1;
(statearr_31862_31883[(2)] = null);

(statearr_31862_31883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (4))){
var inst_31835 = (state_31858[(7)]);
var inst_31838 = cljs.core.first.call(null,inst_31835);
var state_31858__$1 = state_31858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31858__$1,(7),ch,inst_31838);
} else {
if((state_val_31859 === (13))){
var inst_31852 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31863_31884 = state_31858__$1;
(statearr_31863_31884[(2)] = inst_31852);

(statearr_31863_31884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (6))){
var inst_31843 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
if(cljs.core.truth_(inst_31843)){
var statearr_31864_31885 = state_31858__$1;
(statearr_31864_31885[(1)] = (8));

} else {
var statearr_31865_31886 = state_31858__$1;
(statearr_31865_31886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (3))){
var inst_31856 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31858__$1,inst_31856);
} else {
if((state_val_31859 === (12))){
var state_31858__$1 = state_31858;
var statearr_31866_31887 = state_31858__$1;
(statearr_31866_31887[(2)] = null);

(statearr_31866_31887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (2))){
var inst_31835 = (state_31858[(7)]);
var state_31858__$1 = state_31858;
if(cljs.core.truth_(inst_31835)){
var statearr_31867_31888 = state_31858__$1;
(statearr_31867_31888[(1)] = (4));

} else {
var statearr_31868_31889 = state_31858__$1;
(statearr_31868_31889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (11))){
var inst_31849 = cljs.core.async.close_BANG_.call(null,ch);
var state_31858__$1 = state_31858;
var statearr_31869_31890 = state_31858__$1;
(statearr_31869_31890[(2)] = inst_31849);

(statearr_31869_31890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (9))){
var state_31858__$1 = state_31858;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31870_31891 = state_31858__$1;
(statearr_31870_31891[(1)] = (11));

} else {
var statearr_31871_31892 = state_31858__$1;
(statearr_31871_31892[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (5))){
var inst_31835 = (state_31858[(7)]);
var state_31858__$1 = state_31858;
var statearr_31872_31893 = state_31858__$1;
(statearr_31872_31893[(2)] = inst_31835);

(statearr_31872_31893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (10))){
var inst_31854 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31874_31894 = state_31858__$1;
(statearr_31874_31894[(2)] = inst_31854);

(statearr_31874_31894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (8))){
var inst_31835 = (state_31858[(7)]);
var inst_31845 = cljs.core.next.call(null,inst_31835);
var inst_31835__$1 = inst_31845;
var state_31858__$1 = (function (){var statearr_31875 = state_31858;
(statearr_31875[(7)] = inst_31835__$1);

return statearr_31875;
})();
var statearr_31876_31895 = state_31858__$1;
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
});})(c__31314__auto__))
;
return ((function (switch__31226__auto__,c__31314__auto__){
return (function() {
var cljs$core$async$state_machine__31227__auto__ = null;
var cljs$core$async$state_machine__31227__auto____0 = (function (){
var statearr_31877 = [null,null,null,null,null,null,null,null];
(statearr_31877[(0)] = cljs$core$async$state_machine__31227__auto__);

(statearr_31877[(1)] = (1));

return statearr_31877;
});
var cljs$core$async$state_machine__31227__auto____1 = (function (state_31858){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_31858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e31878){if((e31878 instanceof Object)){
var ex__31230__auto__ = e31878;
var statearr_31879_31896 = state_31858;
(statearr_31879_31896[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31897 = state_31858;
state_31858 = G__31897;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$state_machine__31227__auto__ = function(state_31858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31227__auto____1.call(this,state_31858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31227__auto____0;
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31227__auto____1;
return cljs$core$async$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto__))
})();
var state__31316__auto__ = (function (){var statearr_31880 = f__31315__auto__.call(null);
(statearr_31880[(6)] = c__31314__auto__);

return statearr_31880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto__))
);

return c__31314__auto__;
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
var c__31314__auto___32120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___32120,cs,m,dchan,dctr,done){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___32120,cs,m,dchan,dctr,done){
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
});})(c__31314__auto___32120,cs,m,dchan,dctr,done))
;
return ((function (switch__31226__auto__,c__31314__auto___32120,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31227__auto__ = null;
var cljs$core$async$mult_$_state_machine__31227__auto____0 = (function (){
var statearr_32116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32116[(0)] = cljs$core$async$mult_$_state_machine__31227__auto__);

(statearr_32116[(1)] = (1));

return statearr_32116;
});
var cljs$core$async$mult_$_state_machine__31227__auto____1 = (function (state_32035){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_32035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e32117){if((e32117 instanceof Object)){
var ex__31230__auto__ = e32117;
var statearr_32118_32175 = state_32035;
(statearr_32118_32175[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32176 = state_32035;
state_32035 = G__32176;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31227__auto__ = function(state_32035){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31227__auto____1.call(this,state_32035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31227__auto____0;
cljs$core$async$mult_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31227__auto____1;
return cljs$core$async$mult_$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___32120,cs,m,dchan,dctr,done))
})();
var state__31316__auto__ = (function (){var statearr_32119 = f__31315__auto__.call(null);
(statearr_32119[(6)] = c__31314__auto___32120);

return statearr_32119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___32120,cs,m,dchan,dctr,done))
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
var c__31314__auto___32360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
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
});})(c__31314__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31226__auto__,c__31314__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31227__auto__ = null;
var cljs$core$async$mix_$_state_machine__31227__auto____0 = (function (){
var statearr_32356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32356[(0)] = cljs$core$async$mix_$_state_machine__31227__auto__);

(statearr_32356[(1)] = (1));

return statearr_32356;
});
var cljs$core$async$mix_$_state_machine__31227__auto____1 = (function (state_32300){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_32300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e32357){if((e32357 instanceof Object)){
var ex__31230__auto__ = e32357;
var statearr_32358_32407 = state_32300;
(statearr_32358_32407[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32408 = state_32300;
state_32300 = G__32408;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31227__auto__ = function(state_32300){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31227__auto____1.call(this,state_32300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31227__auto____0;
cljs$core$async$mix_$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31227__auto____1;
return cljs$core$async$mix_$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31316__auto__ = (function (){var statearr_32359 = f__31315__auto__.call(null);
(statearr_32359[(6)] = c__31314__auto___32360);

return statearr_32359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___32360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var c__31314__auto___32535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___32535,mults,ensure_mult,p){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___32535,mults,ensure_mult,p){
return (function (state_32489){
var state_val_32490 = (state_32489[(1)]);
if((state_val_32490 === (7))){
var inst_32485 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32491_32536 = state_32489__$1;
(statearr_32491_32536[(2)] = inst_32485);

(statearr_32491_32536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (20))){
var state_32489__$1 = state_32489;
var statearr_32492_32537 = state_32489__$1;
(statearr_32492_32537[(2)] = null);

(statearr_32492_32537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (1))){
var state_32489__$1 = state_32489;
var statearr_32493_32538 = state_32489__$1;
(statearr_32493_32538[(2)] = null);

(statearr_32493_32538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (24))){
var inst_32468 = (state_32489[(7)]);
var inst_32477 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32468);
var state_32489__$1 = state_32489;
var statearr_32494_32539 = state_32489__$1;
(statearr_32494_32539[(2)] = inst_32477);

(statearr_32494_32539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (4))){
var inst_32420 = (state_32489[(8)]);
var inst_32420__$1 = (state_32489[(2)]);
var inst_32421 = (inst_32420__$1 == null);
var state_32489__$1 = (function (){var statearr_32495 = state_32489;
(statearr_32495[(8)] = inst_32420__$1);

return statearr_32495;
})();
if(cljs.core.truth_(inst_32421)){
var statearr_32496_32540 = state_32489__$1;
(statearr_32496_32540[(1)] = (5));

} else {
var statearr_32497_32541 = state_32489__$1;
(statearr_32497_32541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (15))){
var inst_32462 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32498_32542 = state_32489__$1;
(statearr_32498_32542[(2)] = inst_32462);

(statearr_32498_32542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (21))){
var inst_32482 = (state_32489[(2)]);
var state_32489__$1 = (function (){var statearr_32499 = state_32489;
(statearr_32499[(9)] = inst_32482);

return statearr_32499;
})();
var statearr_32500_32543 = state_32489__$1;
(statearr_32500_32543[(2)] = null);

(statearr_32500_32543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (13))){
var inst_32444 = (state_32489[(10)]);
var inst_32446 = cljs.core.chunked_seq_QMARK_.call(null,inst_32444);
var state_32489__$1 = state_32489;
if(inst_32446){
var statearr_32501_32544 = state_32489__$1;
(statearr_32501_32544[(1)] = (16));

} else {
var statearr_32502_32545 = state_32489__$1;
(statearr_32502_32545[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (22))){
var inst_32474 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
if(cljs.core.truth_(inst_32474)){
var statearr_32503_32546 = state_32489__$1;
(statearr_32503_32546[(1)] = (23));

} else {
var statearr_32504_32547 = state_32489__$1;
(statearr_32504_32547[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (6))){
var inst_32420 = (state_32489[(8)]);
var inst_32468 = (state_32489[(7)]);
var inst_32470 = (state_32489[(11)]);
var inst_32468__$1 = topic_fn.call(null,inst_32420);
var inst_32469 = cljs.core.deref.call(null,mults);
var inst_32470__$1 = cljs.core.get.call(null,inst_32469,inst_32468__$1);
var state_32489__$1 = (function (){var statearr_32505 = state_32489;
(statearr_32505[(7)] = inst_32468__$1);

(statearr_32505[(11)] = inst_32470__$1);

return statearr_32505;
})();
if(cljs.core.truth_(inst_32470__$1)){
var statearr_32506_32548 = state_32489__$1;
(statearr_32506_32548[(1)] = (19));

} else {
var statearr_32507_32549 = state_32489__$1;
(statearr_32507_32549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (25))){
var inst_32479 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32508_32550 = state_32489__$1;
(statearr_32508_32550[(2)] = inst_32479);

(statearr_32508_32550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (17))){
var inst_32444 = (state_32489[(10)]);
var inst_32453 = cljs.core.first.call(null,inst_32444);
var inst_32454 = cljs.core.async.muxch_STAR_.call(null,inst_32453);
var inst_32455 = cljs.core.async.close_BANG_.call(null,inst_32454);
var inst_32456 = cljs.core.next.call(null,inst_32444);
var inst_32430 = inst_32456;
var inst_32431 = null;
var inst_32432 = (0);
var inst_32433 = (0);
var state_32489__$1 = (function (){var statearr_32509 = state_32489;
(statearr_32509[(12)] = inst_32433);

(statearr_32509[(13)] = inst_32430);

(statearr_32509[(14)] = inst_32432);

(statearr_32509[(15)] = inst_32431);

(statearr_32509[(16)] = inst_32455);

return statearr_32509;
})();
var statearr_32510_32551 = state_32489__$1;
(statearr_32510_32551[(2)] = null);

(statearr_32510_32551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (3))){
var inst_32487 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32489__$1,inst_32487);
} else {
if((state_val_32490 === (12))){
var inst_32464 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32511_32552 = state_32489__$1;
(statearr_32511_32552[(2)] = inst_32464);

(statearr_32511_32552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (2))){
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32489__$1,(4),ch);
} else {
if((state_val_32490 === (23))){
var state_32489__$1 = state_32489;
var statearr_32512_32553 = state_32489__$1;
(statearr_32512_32553[(2)] = null);

(statearr_32512_32553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (19))){
var inst_32420 = (state_32489[(8)]);
var inst_32470 = (state_32489[(11)]);
var inst_32472 = cljs.core.async.muxch_STAR_.call(null,inst_32470);
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32489__$1,(22),inst_32472,inst_32420);
} else {
if((state_val_32490 === (11))){
var inst_32444 = (state_32489[(10)]);
var inst_32430 = (state_32489[(13)]);
var inst_32444__$1 = cljs.core.seq.call(null,inst_32430);
var state_32489__$1 = (function (){var statearr_32513 = state_32489;
(statearr_32513[(10)] = inst_32444__$1);

return statearr_32513;
})();
if(inst_32444__$1){
var statearr_32514_32554 = state_32489__$1;
(statearr_32514_32554[(1)] = (13));

} else {
var statearr_32515_32555 = state_32489__$1;
(statearr_32515_32555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (9))){
var inst_32466 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32516_32556 = state_32489__$1;
(statearr_32516_32556[(2)] = inst_32466);

(statearr_32516_32556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (5))){
var inst_32427 = cljs.core.deref.call(null,mults);
var inst_32428 = cljs.core.vals.call(null,inst_32427);
var inst_32429 = cljs.core.seq.call(null,inst_32428);
var inst_32430 = inst_32429;
var inst_32431 = null;
var inst_32432 = (0);
var inst_32433 = (0);
var state_32489__$1 = (function (){var statearr_32517 = state_32489;
(statearr_32517[(12)] = inst_32433);

(statearr_32517[(13)] = inst_32430);

(statearr_32517[(14)] = inst_32432);

(statearr_32517[(15)] = inst_32431);

return statearr_32517;
})();
var statearr_32518_32557 = state_32489__$1;
(statearr_32518_32557[(2)] = null);

(statearr_32518_32557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (14))){
var state_32489__$1 = state_32489;
var statearr_32522_32558 = state_32489__$1;
(statearr_32522_32558[(2)] = null);

(statearr_32522_32558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (16))){
var inst_32444 = (state_32489[(10)]);
var inst_32448 = cljs.core.chunk_first.call(null,inst_32444);
var inst_32449 = cljs.core.chunk_rest.call(null,inst_32444);
var inst_32450 = cljs.core.count.call(null,inst_32448);
var inst_32430 = inst_32449;
var inst_32431 = inst_32448;
var inst_32432 = inst_32450;
var inst_32433 = (0);
var state_32489__$1 = (function (){var statearr_32523 = state_32489;
(statearr_32523[(12)] = inst_32433);

(statearr_32523[(13)] = inst_32430);

(statearr_32523[(14)] = inst_32432);

(statearr_32523[(15)] = inst_32431);

return statearr_32523;
})();
var statearr_32524_32559 = state_32489__$1;
(statearr_32524_32559[(2)] = null);

(statearr_32524_32559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (10))){
var inst_32433 = (state_32489[(12)]);
var inst_32430 = (state_32489[(13)]);
var inst_32432 = (state_32489[(14)]);
var inst_32431 = (state_32489[(15)]);
var inst_32438 = cljs.core._nth.call(null,inst_32431,inst_32433);
var inst_32439 = cljs.core.async.muxch_STAR_.call(null,inst_32438);
var inst_32440 = cljs.core.async.close_BANG_.call(null,inst_32439);
var inst_32441 = (inst_32433 + (1));
var tmp32519 = inst_32430;
var tmp32520 = inst_32432;
var tmp32521 = inst_32431;
var inst_32430__$1 = tmp32519;
var inst_32431__$1 = tmp32521;
var inst_32432__$1 = tmp32520;
var inst_32433__$1 = inst_32441;
var state_32489__$1 = (function (){var statearr_32525 = state_32489;
(statearr_32525[(12)] = inst_32433__$1);

(statearr_32525[(13)] = inst_32430__$1);

(statearr_32525[(14)] = inst_32432__$1);

(statearr_32525[(17)] = inst_32440);

(statearr_32525[(15)] = inst_32431__$1);

return statearr_32525;
})();
var statearr_32526_32560 = state_32489__$1;
(statearr_32526_32560[(2)] = null);

(statearr_32526_32560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (18))){
var inst_32459 = (state_32489[(2)]);
var state_32489__$1 = state_32489;
var statearr_32527_32561 = state_32489__$1;
(statearr_32527_32561[(2)] = inst_32459);

(statearr_32527_32561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32490 === (8))){
var inst_32433 = (state_32489[(12)]);
var inst_32432 = (state_32489[(14)]);
var inst_32435 = (inst_32433 < inst_32432);
var inst_32436 = inst_32435;
var state_32489__$1 = state_32489;
if(cljs.core.truth_(inst_32436)){
var statearr_32528_32562 = state_32489__$1;
(statearr_32528_32562[(1)] = (10));

} else {
var statearr_32529_32563 = state_32489__$1;
(statearr_32529_32563[(1)] = (11));

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
});})(c__31314__auto___32535,mults,ensure_mult,p))
;
return ((function (switch__31226__auto__,c__31314__auto___32535,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31227__auto__ = null;
var cljs$core$async$state_machine__31227__auto____0 = (function (){
var statearr_32530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32530[(0)] = cljs$core$async$state_machine__31227__auto__);

(statearr_32530[(1)] = (1));

return statearr_32530;
});
var cljs$core$async$state_machine__31227__auto____1 = (function (state_32489){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_32489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e32531){if((e32531 instanceof Object)){
var ex__31230__auto__ = e32531;
var statearr_32532_32564 = state_32489;
(statearr_32532_32564[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32565 = state_32489;
state_32489 = G__32565;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$state_machine__31227__auto__ = function(state_32489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31227__auto____1.call(this,state_32489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31227__auto____0;
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31227__auto____1;
return cljs$core$async$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___32535,mults,ensure_mult,p))
})();
var state__31316__auto__ = (function (){var statearr_32533 = f__31315__auto__.call(null);
(statearr_32533[(6)] = c__31314__auto___32535);

return statearr_32533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___32535,mults,ensure_mult,p))
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
var G__32567 = arguments.length;
switch (G__32567) {
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
var G__32570 = arguments.length;
switch (G__32570) {
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
var G__32573 = arguments.length;
switch (G__32573) {
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
var c__31314__auto___32640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___32640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___32640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32612){
var state_val_32613 = (state_32612[(1)]);
if((state_val_32613 === (7))){
var state_32612__$1 = state_32612;
var statearr_32614_32641 = state_32612__$1;
(statearr_32614_32641[(2)] = null);

(statearr_32614_32641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (1))){
var state_32612__$1 = state_32612;
var statearr_32615_32642 = state_32612__$1;
(statearr_32615_32642[(2)] = null);

(statearr_32615_32642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (4))){
var inst_32576 = (state_32612[(7)]);
var inst_32578 = (inst_32576 < cnt);
var state_32612__$1 = state_32612;
if(cljs.core.truth_(inst_32578)){
var statearr_32616_32643 = state_32612__$1;
(statearr_32616_32643[(1)] = (6));

} else {
var statearr_32617_32644 = state_32612__$1;
(statearr_32617_32644[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (15))){
var inst_32608 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32618_32645 = state_32612__$1;
(statearr_32618_32645[(2)] = inst_32608);

(statearr_32618_32645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (13))){
var inst_32601 = cljs.core.async.close_BANG_.call(null,out);
var state_32612__$1 = state_32612;
var statearr_32619_32646 = state_32612__$1;
(statearr_32619_32646[(2)] = inst_32601);

(statearr_32619_32646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (6))){
var state_32612__$1 = state_32612;
var statearr_32620_32647 = state_32612__$1;
(statearr_32620_32647[(2)] = null);

(statearr_32620_32647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (3))){
var inst_32610 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32612__$1,inst_32610);
} else {
if((state_val_32613 === (12))){
var inst_32598 = (state_32612[(8)]);
var inst_32598__$1 = (state_32612[(2)]);
var inst_32599 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32598__$1);
var state_32612__$1 = (function (){var statearr_32621 = state_32612;
(statearr_32621[(8)] = inst_32598__$1);

return statearr_32621;
})();
if(cljs.core.truth_(inst_32599)){
var statearr_32622_32648 = state_32612__$1;
(statearr_32622_32648[(1)] = (13));

} else {
var statearr_32623_32649 = state_32612__$1;
(statearr_32623_32649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (2))){
var inst_32575 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32576 = (0);
var state_32612__$1 = (function (){var statearr_32624 = state_32612;
(statearr_32624[(9)] = inst_32575);

(statearr_32624[(7)] = inst_32576);

return statearr_32624;
})();
var statearr_32625_32650 = state_32612__$1;
(statearr_32625_32650[(2)] = null);

(statearr_32625_32650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (11))){
var inst_32576 = (state_32612[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32612,(10),Object,null,(9));
var inst_32585 = chs__$1.call(null,inst_32576);
var inst_32586 = done.call(null,inst_32576);
var inst_32587 = cljs.core.async.take_BANG_.call(null,inst_32585,inst_32586);
var state_32612__$1 = state_32612;
var statearr_32626_32651 = state_32612__$1;
(statearr_32626_32651[(2)] = inst_32587);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32612__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (9))){
var inst_32576 = (state_32612[(7)]);
var inst_32589 = (state_32612[(2)]);
var inst_32590 = (inst_32576 + (1));
var inst_32576__$1 = inst_32590;
var state_32612__$1 = (function (){var statearr_32627 = state_32612;
(statearr_32627[(10)] = inst_32589);

(statearr_32627[(7)] = inst_32576__$1);

return statearr_32627;
})();
var statearr_32628_32652 = state_32612__$1;
(statearr_32628_32652[(2)] = null);

(statearr_32628_32652[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (5))){
var inst_32596 = (state_32612[(2)]);
var state_32612__$1 = (function (){var statearr_32629 = state_32612;
(statearr_32629[(11)] = inst_32596);

return statearr_32629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32612__$1,(12),dchan);
} else {
if((state_val_32613 === (14))){
var inst_32598 = (state_32612[(8)]);
var inst_32603 = cljs.core.apply.call(null,f,inst_32598);
var state_32612__$1 = state_32612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32612__$1,(16),out,inst_32603);
} else {
if((state_val_32613 === (16))){
var inst_32605 = (state_32612[(2)]);
var state_32612__$1 = (function (){var statearr_32630 = state_32612;
(statearr_32630[(12)] = inst_32605);

return statearr_32630;
})();
var statearr_32631_32653 = state_32612__$1;
(statearr_32631_32653[(2)] = null);

(statearr_32631_32653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (10))){
var inst_32580 = (state_32612[(2)]);
var inst_32581 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32612__$1 = (function (){var statearr_32632 = state_32612;
(statearr_32632[(13)] = inst_32580);

return statearr_32632;
})();
var statearr_32633_32654 = state_32612__$1;
(statearr_32633_32654[(2)] = inst_32581);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32612__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (8))){
var inst_32594 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32634_32655 = state_32612__$1;
(statearr_32634_32655[(2)] = inst_32594);

(statearr_32634_32655[(1)] = (5));


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
});})(c__31314__auto___32640,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31226__auto__,c__31314__auto___32640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31227__auto__ = null;
var cljs$core$async$state_machine__31227__auto____0 = (function (){
var statearr_32635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32635[(0)] = cljs$core$async$state_machine__31227__auto__);

(statearr_32635[(1)] = (1));

return statearr_32635;
});
var cljs$core$async$state_machine__31227__auto____1 = (function (state_32612){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_32612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e32636){if((e32636 instanceof Object)){
var ex__31230__auto__ = e32636;
var statearr_32637_32656 = state_32612;
(statearr_32637_32656[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32657 = state_32612;
state_32612 = G__32657;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$state_machine__31227__auto__ = function(state_32612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31227__auto____1.call(this,state_32612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31227__auto____0;
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31227__auto____1;
return cljs$core$async$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___32640,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31316__auto__ = (function (){var statearr_32638 = f__31315__auto__.call(null);
(statearr_32638[(6)] = c__31314__auto___32640);

return statearr_32638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___32640,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32660 = arguments.length;
switch (G__32660) {
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
var c__31314__auto___32714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___32714,out){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___32714,out){
return (function (state_32692){
var state_val_32693 = (state_32692[(1)]);
if((state_val_32693 === (7))){
var inst_32671 = (state_32692[(7)]);
var inst_32672 = (state_32692[(8)]);
var inst_32671__$1 = (state_32692[(2)]);
var inst_32672__$1 = cljs.core.nth.call(null,inst_32671__$1,(0),null);
var inst_32673 = cljs.core.nth.call(null,inst_32671__$1,(1),null);
var inst_32674 = (inst_32672__$1 == null);
var state_32692__$1 = (function (){var statearr_32694 = state_32692;
(statearr_32694[(7)] = inst_32671__$1);

(statearr_32694[(8)] = inst_32672__$1);

(statearr_32694[(9)] = inst_32673);

return statearr_32694;
})();
if(cljs.core.truth_(inst_32674)){
var statearr_32695_32715 = state_32692__$1;
(statearr_32695_32715[(1)] = (8));

} else {
var statearr_32696_32716 = state_32692__$1;
(statearr_32696_32716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (1))){
var inst_32661 = cljs.core.vec.call(null,chs);
var inst_32662 = inst_32661;
var state_32692__$1 = (function (){var statearr_32697 = state_32692;
(statearr_32697[(10)] = inst_32662);

return statearr_32697;
})();
var statearr_32698_32717 = state_32692__$1;
(statearr_32698_32717[(2)] = null);

(statearr_32698_32717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (4))){
var inst_32662 = (state_32692[(10)]);
var state_32692__$1 = state_32692;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32692__$1,(7),inst_32662);
} else {
if((state_val_32693 === (6))){
var inst_32688 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32699_32718 = state_32692__$1;
(statearr_32699_32718[(2)] = inst_32688);

(statearr_32699_32718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (3))){
var inst_32690 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32692__$1,inst_32690);
} else {
if((state_val_32693 === (2))){
var inst_32662 = (state_32692[(10)]);
var inst_32664 = cljs.core.count.call(null,inst_32662);
var inst_32665 = (inst_32664 > (0));
var state_32692__$1 = state_32692;
if(cljs.core.truth_(inst_32665)){
var statearr_32701_32719 = state_32692__$1;
(statearr_32701_32719[(1)] = (4));

} else {
var statearr_32702_32720 = state_32692__$1;
(statearr_32702_32720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (11))){
var inst_32662 = (state_32692[(10)]);
var inst_32681 = (state_32692[(2)]);
var tmp32700 = inst_32662;
var inst_32662__$1 = tmp32700;
var state_32692__$1 = (function (){var statearr_32703 = state_32692;
(statearr_32703[(11)] = inst_32681);

(statearr_32703[(10)] = inst_32662__$1);

return statearr_32703;
})();
var statearr_32704_32721 = state_32692__$1;
(statearr_32704_32721[(2)] = null);

(statearr_32704_32721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (9))){
var inst_32672 = (state_32692[(8)]);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32692__$1,(11),out,inst_32672);
} else {
if((state_val_32693 === (5))){
var inst_32686 = cljs.core.async.close_BANG_.call(null,out);
var state_32692__$1 = state_32692;
var statearr_32705_32722 = state_32692__$1;
(statearr_32705_32722[(2)] = inst_32686);

(statearr_32705_32722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (10))){
var inst_32684 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32706_32723 = state_32692__$1;
(statearr_32706_32723[(2)] = inst_32684);

(statearr_32706_32723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (8))){
var inst_32671 = (state_32692[(7)]);
var inst_32672 = (state_32692[(8)]);
var inst_32662 = (state_32692[(10)]);
var inst_32673 = (state_32692[(9)]);
var inst_32676 = (function (){var cs = inst_32662;
var vec__32667 = inst_32671;
var v = inst_32672;
var c = inst_32673;
return ((function (cs,vec__32667,v,c,inst_32671,inst_32672,inst_32662,inst_32673,state_val_32693,c__31314__auto___32714,out){
return (function (p1__32658_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32658_SHARP_);
});
;})(cs,vec__32667,v,c,inst_32671,inst_32672,inst_32662,inst_32673,state_val_32693,c__31314__auto___32714,out))
})();
var inst_32677 = cljs.core.filterv.call(null,inst_32676,inst_32662);
var inst_32662__$1 = inst_32677;
var state_32692__$1 = (function (){var statearr_32707 = state_32692;
(statearr_32707[(10)] = inst_32662__$1);

return statearr_32707;
})();
var statearr_32708_32724 = state_32692__$1;
(statearr_32708_32724[(2)] = null);

(statearr_32708_32724[(1)] = (2));


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
});})(c__31314__auto___32714,out))
;
return ((function (switch__31226__auto__,c__31314__auto___32714,out){
return (function() {
var cljs$core$async$state_machine__31227__auto__ = null;
var cljs$core$async$state_machine__31227__auto____0 = (function (){
var statearr_32709 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32709[(0)] = cljs$core$async$state_machine__31227__auto__);

(statearr_32709[(1)] = (1));

return statearr_32709;
});
var cljs$core$async$state_machine__31227__auto____1 = (function (state_32692){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_32692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e32710){if((e32710 instanceof Object)){
var ex__31230__auto__ = e32710;
var statearr_32711_32725 = state_32692;
(statearr_32711_32725[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32726 = state_32692;
state_32692 = G__32726;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$state_machine__31227__auto__ = function(state_32692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31227__auto____1.call(this,state_32692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31227__auto____0;
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31227__auto____1;
return cljs$core$async$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___32714,out))
})();
var state__31316__auto__ = (function (){var statearr_32712 = f__31315__auto__.call(null);
(statearr_32712[(6)] = c__31314__auto___32714);

return statearr_32712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___32714,out))
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
var G__32728 = arguments.length;
switch (G__32728) {
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
var c__31314__auto___32773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___32773,out){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___32773,out){
return (function (state_32752){
var state_val_32753 = (state_32752[(1)]);
if((state_val_32753 === (7))){
var inst_32734 = (state_32752[(7)]);
var inst_32734__$1 = (state_32752[(2)]);
var inst_32735 = (inst_32734__$1 == null);
var inst_32736 = cljs.core.not.call(null,inst_32735);
var state_32752__$1 = (function (){var statearr_32754 = state_32752;
(statearr_32754[(7)] = inst_32734__$1);

return statearr_32754;
})();
if(inst_32736){
var statearr_32755_32774 = state_32752__$1;
(statearr_32755_32774[(1)] = (8));

} else {
var statearr_32756_32775 = state_32752__$1;
(statearr_32756_32775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32753 === (1))){
var inst_32729 = (0);
var state_32752__$1 = (function (){var statearr_32757 = state_32752;
(statearr_32757[(8)] = inst_32729);

return statearr_32757;
})();
var statearr_32758_32776 = state_32752__$1;
(statearr_32758_32776[(2)] = null);

(statearr_32758_32776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32753 === (4))){
var state_32752__$1 = state_32752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32752__$1,(7),ch);
} else {
if((state_val_32753 === (6))){
var inst_32747 = (state_32752[(2)]);
var state_32752__$1 = state_32752;
var statearr_32759_32777 = state_32752__$1;
(statearr_32759_32777[(2)] = inst_32747);

(statearr_32759_32777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32753 === (3))){
var inst_32749 = (state_32752[(2)]);
var inst_32750 = cljs.core.async.close_BANG_.call(null,out);
var state_32752__$1 = (function (){var statearr_32760 = state_32752;
(statearr_32760[(9)] = inst_32749);

return statearr_32760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32752__$1,inst_32750);
} else {
if((state_val_32753 === (2))){
var inst_32729 = (state_32752[(8)]);
var inst_32731 = (inst_32729 < n);
var state_32752__$1 = state_32752;
if(cljs.core.truth_(inst_32731)){
var statearr_32761_32778 = state_32752__$1;
(statearr_32761_32778[(1)] = (4));

} else {
var statearr_32762_32779 = state_32752__$1;
(statearr_32762_32779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32753 === (11))){
var inst_32729 = (state_32752[(8)]);
var inst_32739 = (state_32752[(2)]);
var inst_32740 = (inst_32729 + (1));
var inst_32729__$1 = inst_32740;
var state_32752__$1 = (function (){var statearr_32763 = state_32752;
(statearr_32763[(10)] = inst_32739);

(statearr_32763[(8)] = inst_32729__$1);

return statearr_32763;
})();
var statearr_32764_32780 = state_32752__$1;
(statearr_32764_32780[(2)] = null);

(statearr_32764_32780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32753 === (9))){
var state_32752__$1 = state_32752;
var statearr_32765_32781 = state_32752__$1;
(statearr_32765_32781[(2)] = null);

(statearr_32765_32781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32753 === (5))){
var state_32752__$1 = state_32752;
var statearr_32766_32782 = state_32752__$1;
(statearr_32766_32782[(2)] = null);

(statearr_32766_32782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32753 === (10))){
var inst_32744 = (state_32752[(2)]);
var state_32752__$1 = state_32752;
var statearr_32767_32783 = state_32752__$1;
(statearr_32767_32783[(2)] = inst_32744);

(statearr_32767_32783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32753 === (8))){
var inst_32734 = (state_32752[(7)]);
var state_32752__$1 = state_32752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32752__$1,(11),out,inst_32734);
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
});})(c__31314__auto___32773,out))
;
return ((function (switch__31226__auto__,c__31314__auto___32773,out){
return (function() {
var cljs$core$async$state_machine__31227__auto__ = null;
var cljs$core$async$state_machine__31227__auto____0 = (function (){
var statearr_32768 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32768[(0)] = cljs$core$async$state_machine__31227__auto__);

(statearr_32768[(1)] = (1));

return statearr_32768;
});
var cljs$core$async$state_machine__31227__auto____1 = (function (state_32752){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_32752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e32769){if((e32769 instanceof Object)){
var ex__31230__auto__ = e32769;
var statearr_32770_32784 = state_32752;
(statearr_32770_32784[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32785 = state_32752;
state_32752 = G__32785;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$state_machine__31227__auto__ = function(state_32752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31227__auto____1.call(this,state_32752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31227__auto____0;
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31227__auto____1;
return cljs$core$async$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___32773,out))
})();
var state__31316__auto__ = (function (){var statearr_32771 = f__31315__auto__.call(null);
(statearr_32771[(6)] = c__31314__auto___32773);

return statearr_32771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___32773,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32787 = (function (f,ch,meta32788){
this.f = f;
this.ch = ch;
this.meta32788 = meta32788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32789,meta32788__$1){
var self__ = this;
var _32789__$1 = this;
return (new cljs.core.async.t_cljs$core$async32787(self__.f,self__.ch,meta32788__$1));
});

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32789){
var self__ = this;
var _32789__$1 = this;
return self__.meta32788;
});

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32790 = (function (f,ch,meta32788,_,fn1,meta32791){
this.f = f;
this.ch = ch;
this.meta32788 = meta32788;
this._ = _;
this.fn1 = fn1;
this.meta32791 = meta32791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32792,meta32791__$1){
var self__ = this;
var _32792__$1 = this;
return (new cljs.core.async.t_cljs$core$async32790(self__.f,self__.ch,self__.meta32788,self__._,self__.fn1,meta32791__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32792){
var self__ = this;
var _32792__$1 = this;
return self__.meta32791;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32790.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32786_SHARP_){
return f1.call(null,(((p1__32786_SHARP_ == null))?null:self__.f.call(null,p1__32786_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32790.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32788","meta32788",448234998,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32787","cljs.core.async/t_cljs$core$async32787",-1822136935,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32791","meta32791",153071733,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32790";

cljs.core.async.t_cljs$core$async32790.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32790");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32790 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32790(f__$1,ch__$1,meta32788__$1,___$2,fn1__$1,meta32791){
return (new cljs.core.async.t_cljs$core$async32790(f__$1,ch__$1,meta32788__$1,___$2,fn1__$1,meta32791));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32790(self__.f,self__.ch,self__.meta32788,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32788","meta32788",448234998,null)], null);
});

cljs.core.async.t_cljs$core$async32787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32787";

cljs.core.async.t_cljs$core$async32787.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32787");
});

cljs.core.async.__GT_t_cljs$core$async32787 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32787(f__$1,ch__$1,meta32788){
return (new cljs.core.async.t_cljs$core$async32787(f__$1,ch__$1,meta32788));
});

}

return (new cljs.core.async.t_cljs$core$async32787(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32793 = (function (f,ch,meta32794){
this.f = f;
this.ch = ch;
this.meta32794 = meta32794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32795,meta32794__$1){
var self__ = this;
var _32795__$1 = this;
return (new cljs.core.async.t_cljs$core$async32793(self__.f,self__.ch,meta32794__$1));
});

cljs.core.async.t_cljs$core$async32793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32795){
var self__ = this;
var _32795__$1 = this;
return self__.meta32794;
});

cljs.core.async.t_cljs$core$async32793.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32793.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32793.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32794","meta32794",1718518648,null)], null);
});

cljs.core.async.t_cljs$core$async32793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32793";

cljs.core.async.t_cljs$core$async32793.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32793");
});

cljs.core.async.__GT_t_cljs$core$async32793 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32793(f__$1,ch__$1,meta32794){
return (new cljs.core.async.t_cljs$core$async32793(f__$1,ch__$1,meta32794));
});

}

return (new cljs.core.async.t_cljs$core$async32793(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32796 = (function (p,ch,meta32797){
this.p = p;
this.ch = ch;
this.meta32797 = meta32797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32798,meta32797__$1){
var self__ = this;
var _32798__$1 = this;
return (new cljs.core.async.t_cljs$core$async32796(self__.p,self__.ch,meta32797__$1));
});

cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32798){
var self__ = this;
var _32798__$1 = this;
return self__.meta32797;
});

cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32797","meta32797",588873685,null)], null);
});

cljs.core.async.t_cljs$core$async32796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32796";

cljs.core.async.t_cljs$core$async32796.cljs$lang$ctorPrWriter = (function (this__28676__auto__,writer__28677__auto__,opt__28678__auto__){
return cljs.core._write.call(null,writer__28677__auto__,"cljs.core.async/t_cljs$core$async32796");
});

cljs.core.async.__GT_t_cljs$core$async32796 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32796(p__$1,ch__$1,meta32797){
return (new cljs.core.async.t_cljs$core$async32796(p__$1,ch__$1,meta32797));
});

}

return (new cljs.core.async.t_cljs$core$async32796(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32800 = arguments.length;
switch (G__32800) {
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
var c__31314__auto___32840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___32840,out){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___32840,out){
return (function (state_32821){
var state_val_32822 = (state_32821[(1)]);
if((state_val_32822 === (7))){
var inst_32817 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32823_32841 = state_32821__$1;
(statearr_32823_32841[(2)] = inst_32817);

(statearr_32823_32841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (1))){
var state_32821__$1 = state_32821;
var statearr_32824_32842 = state_32821__$1;
(statearr_32824_32842[(2)] = null);

(statearr_32824_32842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (4))){
var inst_32803 = (state_32821[(7)]);
var inst_32803__$1 = (state_32821[(2)]);
var inst_32804 = (inst_32803__$1 == null);
var state_32821__$1 = (function (){var statearr_32825 = state_32821;
(statearr_32825[(7)] = inst_32803__$1);

return statearr_32825;
})();
if(cljs.core.truth_(inst_32804)){
var statearr_32826_32843 = state_32821__$1;
(statearr_32826_32843[(1)] = (5));

} else {
var statearr_32827_32844 = state_32821__$1;
(statearr_32827_32844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (6))){
var inst_32803 = (state_32821[(7)]);
var inst_32808 = p.call(null,inst_32803);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32808)){
var statearr_32828_32845 = state_32821__$1;
(statearr_32828_32845[(1)] = (8));

} else {
var statearr_32829_32846 = state_32821__$1;
(statearr_32829_32846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (3))){
var inst_32819 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32821__$1,inst_32819);
} else {
if((state_val_32822 === (2))){
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32821__$1,(4),ch);
} else {
if((state_val_32822 === (11))){
var inst_32811 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32830_32847 = state_32821__$1;
(statearr_32830_32847[(2)] = inst_32811);

(statearr_32830_32847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (9))){
var state_32821__$1 = state_32821;
var statearr_32831_32848 = state_32821__$1;
(statearr_32831_32848[(2)] = null);

(statearr_32831_32848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (5))){
var inst_32806 = cljs.core.async.close_BANG_.call(null,out);
var state_32821__$1 = state_32821;
var statearr_32832_32849 = state_32821__$1;
(statearr_32832_32849[(2)] = inst_32806);

(statearr_32832_32849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (10))){
var inst_32814 = (state_32821[(2)]);
var state_32821__$1 = (function (){var statearr_32833 = state_32821;
(statearr_32833[(8)] = inst_32814);

return statearr_32833;
})();
var statearr_32834_32850 = state_32821__$1;
(statearr_32834_32850[(2)] = null);

(statearr_32834_32850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (8))){
var inst_32803 = (state_32821[(7)]);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32821__$1,(11),out,inst_32803);
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
});})(c__31314__auto___32840,out))
;
return ((function (switch__31226__auto__,c__31314__auto___32840,out){
return (function() {
var cljs$core$async$state_machine__31227__auto__ = null;
var cljs$core$async$state_machine__31227__auto____0 = (function (){
var statearr_32835 = [null,null,null,null,null,null,null,null,null];
(statearr_32835[(0)] = cljs$core$async$state_machine__31227__auto__);

(statearr_32835[(1)] = (1));

return statearr_32835;
});
var cljs$core$async$state_machine__31227__auto____1 = (function (state_32821){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_32821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e32836){if((e32836 instanceof Object)){
var ex__31230__auto__ = e32836;
var statearr_32837_32851 = state_32821;
(statearr_32837_32851[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32852 = state_32821;
state_32821 = G__32852;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$state_machine__31227__auto__ = function(state_32821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31227__auto____1.call(this,state_32821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31227__auto____0;
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31227__auto____1;
return cljs$core$async$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___32840,out))
})();
var state__31316__auto__ = (function (){var statearr_32838 = f__31315__auto__.call(null);
(statearr_32838[(6)] = c__31314__auto___32840);

return statearr_32838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___32840,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32854 = arguments.length;
switch (G__32854) {
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
var c__31314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto__){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto__){
return (function (state_32917){
var state_val_32918 = (state_32917[(1)]);
if((state_val_32918 === (7))){
var inst_32913 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32919_32957 = state_32917__$1;
(statearr_32919_32957[(2)] = inst_32913);

(statearr_32919_32957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (20))){
var inst_32883 = (state_32917[(7)]);
var inst_32894 = (state_32917[(2)]);
var inst_32895 = cljs.core.next.call(null,inst_32883);
var inst_32869 = inst_32895;
var inst_32870 = null;
var inst_32871 = (0);
var inst_32872 = (0);
var state_32917__$1 = (function (){var statearr_32920 = state_32917;
(statearr_32920[(8)] = inst_32894);

(statearr_32920[(9)] = inst_32870);

(statearr_32920[(10)] = inst_32871);

(statearr_32920[(11)] = inst_32872);

(statearr_32920[(12)] = inst_32869);

return statearr_32920;
})();
var statearr_32921_32958 = state_32917__$1;
(statearr_32921_32958[(2)] = null);

(statearr_32921_32958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (1))){
var state_32917__$1 = state_32917;
var statearr_32922_32959 = state_32917__$1;
(statearr_32922_32959[(2)] = null);

(statearr_32922_32959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (4))){
var inst_32858 = (state_32917[(13)]);
var inst_32858__$1 = (state_32917[(2)]);
var inst_32859 = (inst_32858__$1 == null);
var state_32917__$1 = (function (){var statearr_32923 = state_32917;
(statearr_32923[(13)] = inst_32858__$1);

return statearr_32923;
})();
if(cljs.core.truth_(inst_32859)){
var statearr_32924_32960 = state_32917__$1;
(statearr_32924_32960[(1)] = (5));

} else {
var statearr_32925_32961 = state_32917__$1;
(statearr_32925_32961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (15))){
var state_32917__$1 = state_32917;
var statearr_32929_32962 = state_32917__$1;
(statearr_32929_32962[(2)] = null);

(statearr_32929_32962[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (21))){
var state_32917__$1 = state_32917;
var statearr_32930_32963 = state_32917__$1;
(statearr_32930_32963[(2)] = null);

(statearr_32930_32963[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (13))){
var inst_32870 = (state_32917[(9)]);
var inst_32871 = (state_32917[(10)]);
var inst_32872 = (state_32917[(11)]);
var inst_32869 = (state_32917[(12)]);
var inst_32879 = (state_32917[(2)]);
var inst_32880 = (inst_32872 + (1));
var tmp32926 = inst_32870;
var tmp32927 = inst_32871;
var tmp32928 = inst_32869;
var inst_32869__$1 = tmp32928;
var inst_32870__$1 = tmp32926;
var inst_32871__$1 = tmp32927;
var inst_32872__$1 = inst_32880;
var state_32917__$1 = (function (){var statearr_32931 = state_32917;
(statearr_32931[(14)] = inst_32879);

(statearr_32931[(9)] = inst_32870__$1);

(statearr_32931[(10)] = inst_32871__$1);

(statearr_32931[(11)] = inst_32872__$1);

(statearr_32931[(12)] = inst_32869__$1);

return statearr_32931;
})();
var statearr_32932_32964 = state_32917__$1;
(statearr_32932_32964[(2)] = null);

(statearr_32932_32964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (22))){
var state_32917__$1 = state_32917;
var statearr_32933_32965 = state_32917__$1;
(statearr_32933_32965[(2)] = null);

(statearr_32933_32965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (6))){
var inst_32858 = (state_32917[(13)]);
var inst_32867 = f.call(null,inst_32858);
var inst_32868 = cljs.core.seq.call(null,inst_32867);
var inst_32869 = inst_32868;
var inst_32870 = null;
var inst_32871 = (0);
var inst_32872 = (0);
var state_32917__$1 = (function (){var statearr_32934 = state_32917;
(statearr_32934[(9)] = inst_32870);

(statearr_32934[(10)] = inst_32871);

(statearr_32934[(11)] = inst_32872);

(statearr_32934[(12)] = inst_32869);

return statearr_32934;
})();
var statearr_32935_32966 = state_32917__$1;
(statearr_32935_32966[(2)] = null);

(statearr_32935_32966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (17))){
var inst_32883 = (state_32917[(7)]);
var inst_32887 = cljs.core.chunk_first.call(null,inst_32883);
var inst_32888 = cljs.core.chunk_rest.call(null,inst_32883);
var inst_32889 = cljs.core.count.call(null,inst_32887);
var inst_32869 = inst_32888;
var inst_32870 = inst_32887;
var inst_32871 = inst_32889;
var inst_32872 = (0);
var state_32917__$1 = (function (){var statearr_32936 = state_32917;
(statearr_32936[(9)] = inst_32870);

(statearr_32936[(10)] = inst_32871);

(statearr_32936[(11)] = inst_32872);

(statearr_32936[(12)] = inst_32869);

return statearr_32936;
})();
var statearr_32937_32967 = state_32917__$1;
(statearr_32937_32967[(2)] = null);

(statearr_32937_32967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (3))){
var inst_32915 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32917__$1,inst_32915);
} else {
if((state_val_32918 === (12))){
var inst_32903 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32938_32968 = state_32917__$1;
(statearr_32938_32968[(2)] = inst_32903);

(statearr_32938_32968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (2))){
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32917__$1,(4),in$);
} else {
if((state_val_32918 === (23))){
var inst_32911 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32939_32969 = state_32917__$1;
(statearr_32939_32969[(2)] = inst_32911);

(statearr_32939_32969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (19))){
var inst_32898 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32940_32970 = state_32917__$1;
(statearr_32940_32970[(2)] = inst_32898);

(statearr_32940_32970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (11))){
var inst_32883 = (state_32917[(7)]);
var inst_32869 = (state_32917[(12)]);
var inst_32883__$1 = cljs.core.seq.call(null,inst_32869);
var state_32917__$1 = (function (){var statearr_32941 = state_32917;
(statearr_32941[(7)] = inst_32883__$1);

return statearr_32941;
})();
if(inst_32883__$1){
var statearr_32942_32971 = state_32917__$1;
(statearr_32942_32971[(1)] = (14));

} else {
var statearr_32943_32972 = state_32917__$1;
(statearr_32943_32972[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (9))){
var inst_32905 = (state_32917[(2)]);
var inst_32906 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32917__$1 = (function (){var statearr_32944 = state_32917;
(statearr_32944[(15)] = inst_32905);

return statearr_32944;
})();
if(cljs.core.truth_(inst_32906)){
var statearr_32945_32973 = state_32917__$1;
(statearr_32945_32973[(1)] = (21));

} else {
var statearr_32946_32974 = state_32917__$1;
(statearr_32946_32974[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (5))){
var inst_32861 = cljs.core.async.close_BANG_.call(null,out);
var state_32917__$1 = state_32917;
var statearr_32947_32975 = state_32917__$1;
(statearr_32947_32975[(2)] = inst_32861);

(statearr_32947_32975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (14))){
var inst_32883 = (state_32917[(7)]);
var inst_32885 = cljs.core.chunked_seq_QMARK_.call(null,inst_32883);
var state_32917__$1 = state_32917;
if(inst_32885){
var statearr_32948_32976 = state_32917__$1;
(statearr_32948_32976[(1)] = (17));

} else {
var statearr_32949_32977 = state_32917__$1;
(statearr_32949_32977[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (16))){
var inst_32901 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32950_32978 = state_32917__$1;
(statearr_32950_32978[(2)] = inst_32901);

(statearr_32950_32978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (10))){
var inst_32870 = (state_32917[(9)]);
var inst_32872 = (state_32917[(11)]);
var inst_32877 = cljs.core._nth.call(null,inst_32870,inst_32872);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32917__$1,(13),out,inst_32877);
} else {
if((state_val_32918 === (18))){
var inst_32883 = (state_32917[(7)]);
var inst_32892 = cljs.core.first.call(null,inst_32883);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32917__$1,(20),out,inst_32892);
} else {
if((state_val_32918 === (8))){
var inst_32871 = (state_32917[(10)]);
var inst_32872 = (state_32917[(11)]);
var inst_32874 = (inst_32872 < inst_32871);
var inst_32875 = inst_32874;
var state_32917__$1 = state_32917;
if(cljs.core.truth_(inst_32875)){
var statearr_32951_32979 = state_32917__$1;
(statearr_32951_32979[(1)] = (10));

} else {
var statearr_32952_32980 = state_32917__$1;
(statearr_32952_32980[(1)] = (11));

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
});})(c__31314__auto__))
;
return ((function (switch__31226__auto__,c__31314__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31227__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31227__auto____0 = (function (){
var statearr_32953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32953[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31227__auto__);

(statearr_32953[(1)] = (1));

return statearr_32953;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31227__auto____1 = (function (state_32917){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_32917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e32954){if((e32954 instanceof Object)){
var ex__31230__auto__ = e32954;
var statearr_32955_32981 = state_32917;
(statearr_32955_32981[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32982 = state_32917;
state_32917 = G__32982;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31227__auto__ = function(state_32917){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31227__auto____1.call(this,state_32917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31227__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31227__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto__))
})();
var state__31316__auto__ = (function (){var statearr_32956 = f__31315__auto__.call(null);
(statearr_32956[(6)] = c__31314__auto__);

return statearr_32956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto__))
);

return c__31314__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32984 = arguments.length;
switch (G__32984) {
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
var G__32987 = arguments.length;
switch (G__32987) {
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
var G__32990 = arguments.length;
switch (G__32990) {
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
var c__31314__auto___33037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___33037,out){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___33037,out){
return (function (state_33014){
var state_val_33015 = (state_33014[(1)]);
if((state_val_33015 === (7))){
var inst_33009 = (state_33014[(2)]);
var state_33014__$1 = state_33014;
var statearr_33016_33038 = state_33014__$1;
(statearr_33016_33038[(2)] = inst_33009);

(statearr_33016_33038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (1))){
var inst_32991 = null;
var state_33014__$1 = (function (){var statearr_33017 = state_33014;
(statearr_33017[(7)] = inst_32991);

return statearr_33017;
})();
var statearr_33018_33039 = state_33014__$1;
(statearr_33018_33039[(2)] = null);

(statearr_33018_33039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (4))){
var inst_32994 = (state_33014[(8)]);
var inst_32994__$1 = (state_33014[(2)]);
var inst_32995 = (inst_32994__$1 == null);
var inst_32996 = cljs.core.not.call(null,inst_32995);
var state_33014__$1 = (function (){var statearr_33019 = state_33014;
(statearr_33019[(8)] = inst_32994__$1);

return statearr_33019;
})();
if(inst_32996){
var statearr_33020_33040 = state_33014__$1;
(statearr_33020_33040[(1)] = (5));

} else {
var statearr_33021_33041 = state_33014__$1;
(statearr_33021_33041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (6))){
var state_33014__$1 = state_33014;
var statearr_33022_33042 = state_33014__$1;
(statearr_33022_33042[(2)] = null);

(statearr_33022_33042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (3))){
var inst_33011 = (state_33014[(2)]);
var inst_33012 = cljs.core.async.close_BANG_.call(null,out);
var state_33014__$1 = (function (){var statearr_33023 = state_33014;
(statearr_33023[(9)] = inst_33011);

return statearr_33023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33014__$1,inst_33012);
} else {
if((state_val_33015 === (2))){
var state_33014__$1 = state_33014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33014__$1,(4),ch);
} else {
if((state_val_33015 === (11))){
var inst_32994 = (state_33014[(8)]);
var inst_33003 = (state_33014[(2)]);
var inst_32991 = inst_32994;
var state_33014__$1 = (function (){var statearr_33024 = state_33014;
(statearr_33024[(10)] = inst_33003);

(statearr_33024[(7)] = inst_32991);

return statearr_33024;
})();
var statearr_33025_33043 = state_33014__$1;
(statearr_33025_33043[(2)] = null);

(statearr_33025_33043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (9))){
var inst_32994 = (state_33014[(8)]);
var state_33014__$1 = state_33014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33014__$1,(11),out,inst_32994);
} else {
if((state_val_33015 === (5))){
var inst_32991 = (state_33014[(7)]);
var inst_32994 = (state_33014[(8)]);
var inst_32998 = cljs.core._EQ_.call(null,inst_32994,inst_32991);
var state_33014__$1 = state_33014;
if(inst_32998){
var statearr_33027_33044 = state_33014__$1;
(statearr_33027_33044[(1)] = (8));

} else {
var statearr_33028_33045 = state_33014__$1;
(statearr_33028_33045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (10))){
var inst_33006 = (state_33014[(2)]);
var state_33014__$1 = state_33014;
var statearr_33029_33046 = state_33014__$1;
(statearr_33029_33046[(2)] = inst_33006);

(statearr_33029_33046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33015 === (8))){
var inst_32991 = (state_33014[(7)]);
var tmp33026 = inst_32991;
var inst_32991__$1 = tmp33026;
var state_33014__$1 = (function (){var statearr_33030 = state_33014;
(statearr_33030[(7)] = inst_32991__$1);

return statearr_33030;
})();
var statearr_33031_33047 = state_33014__$1;
(statearr_33031_33047[(2)] = null);

(statearr_33031_33047[(1)] = (2));


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
});})(c__31314__auto___33037,out))
;
return ((function (switch__31226__auto__,c__31314__auto___33037,out){
return (function() {
var cljs$core$async$state_machine__31227__auto__ = null;
var cljs$core$async$state_machine__31227__auto____0 = (function (){
var statearr_33032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33032[(0)] = cljs$core$async$state_machine__31227__auto__);

(statearr_33032[(1)] = (1));

return statearr_33032;
});
var cljs$core$async$state_machine__31227__auto____1 = (function (state_33014){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_33014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e33033){if((e33033 instanceof Object)){
var ex__31230__auto__ = e33033;
var statearr_33034_33048 = state_33014;
(statearr_33034_33048[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33049 = state_33014;
state_33014 = G__33049;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$state_machine__31227__auto__ = function(state_33014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31227__auto____1.call(this,state_33014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31227__auto____0;
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31227__auto____1;
return cljs$core$async$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___33037,out))
})();
var state__31316__auto__ = (function (){var statearr_33035 = f__31315__auto__.call(null);
(statearr_33035[(6)] = c__31314__auto___33037);

return statearr_33035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___33037,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33051 = arguments.length;
switch (G__33051) {
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
var c__31314__auto___33117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___33117,out){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___33117,out){
return (function (state_33089){
var state_val_33090 = (state_33089[(1)]);
if((state_val_33090 === (7))){
var inst_33085 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33091_33118 = state_33089__$1;
(statearr_33091_33118[(2)] = inst_33085);

(statearr_33091_33118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (1))){
var inst_33052 = (new Array(n));
var inst_33053 = inst_33052;
var inst_33054 = (0);
var state_33089__$1 = (function (){var statearr_33092 = state_33089;
(statearr_33092[(7)] = inst_33054);

(statearr_33092[(8)] = inst_33053);

return statearr_33092;
})();
var statearr_33093_33119 = state_33089__$1;
(statearr_33093_33119[(2)] = null);

(statearr_33093_33119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (4))){
var inst_33057 = (state_33089[(9)]);
var inst_33057__$1 = (state_33089[(2)]);
var inst_33058 = (inst_33057__$1 == null);
var inst_33059 = cljs.core.not.call(null,inst_33058);
var state_33089__$1 = (function (){var statearr_33094 = state_33089;
(statearr_33094[(9)] = inst_33057__$1);

return statearr_33094;
})();
if(inst_33059){
var statearr_33095_33120 = state_33089__$1;
(statearr_33095_33120[(1)] = (5));

} else {
var statearr_33096_33121 = state_33089__$1;
(statearr_33096_33121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (15))){
var inst_33079 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33097_33122 = state_33089__$1;
(statearr_33097_33122[(2)] = inst_33079);

(statearr_33097_33122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (13))){
var state_33089__$1 = state_33089;
var statearr_33098_33123 = state_33089__$1;
(statearr_33098_33123[(2)] = null);

(statearr_33098_33123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (6))){
var inst_33054 = (state_33089[(7)]);
var inst_33075 = (inst_33054 > (0));
var state_33089__$1 = state_33089;
if(cljs.core.truth_(inst_33075)){
var statearr_33099_33124 = state_33089__$1;
(statearr_33099_33124[(1)] = (12));

} else {
var statearr_33100_33125 = state_33089__$1;
(statearr_33100_33125[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (3))){
var inst_33087 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33089__$1,inst_33087);
} else {
if((state_val_33090 === (12))){
var inst_33053 = (state_33089[(8)]);
var inst_33077 = cljs.core.vec.call(null,inst_33053);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33089__$1,(15),out,inst_33077);
} else {
if((state_val_33090 === (2))){
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33089__$1,(4),ch);
} else {
if((state_val_33090 === (11))){
var inst_33069 = (state_33089[(2)]);
var inst_33070 = (new Array(n));
var inst_33053 = inst_33070;
var inst_33054 = (0);
var state_33089__$1 = (function (){var statearr_33101 = state_33089;
(statearr_33101[(7)] = inst_33054);

(statearr_33101[(10)] = inst_33069);

(statearr_33101[(8)] = inst_33053);

return statearr_33101;
})();
var statearr_33102_33126 = state_33089__$1;
(statearr_33102_33126[(2)] = null);

(statearr_33102_33126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (9))){
var inst_33053 = (state_33089[(8)]);
var inst_33067 = cljs.core.vec.call(null,inst_33053);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33089__$1,(11),out,inst_33067);
} else {
if((state_val_33090 === (5))){
var inst_33054 = (state_33089[(7)]);
var inst_33057 = (state_33089[(9)]);
var inst_33053 = (state_33089[(8)]);
var inst_33062 = (state_33089[(11)]);
var inst_33061 = (inst_33053[inst_33054] = inst_33057);
var inst_33062__$1 = (inst_33054 + (1));
var inst_33063 = (inst_33062__$1 < n);
var state_33089__$1 = (function (){var statearr_33103 = state_33089;
(statearr_33103[(12)] = inst_33061);

(statearr_33103[(11)] = inst_33062__$1);

return statearr_33103;
})();
if(cljs.core.truth_(inst_33063)){
var statearr_33104_33127 = state_33089__$1;
(statearr_33104_33127[(1)] = (8));

} else {
var statearr_33105_33128 = state_33089__$1;
(statearr_33105_33128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (14))){
var inst_33082 = (state_33089[(2)]);
var inst_33083 = cljs.core.async.close_BANG_.call(null,out);
var state_33089__$1 = (function (){var statearr_33107 = state_33089;
(statearr_33107[(13)] = inst_33082);

return statearr_33107;
})();
var statearr_33108_33129 = state_33089__$1;
(statearr_33108_33129[(2)] = inst_33083);

(statearr_33108_33129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (10))){
var inst_33073 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33109_33130 = state_33089__$1;
(statearr_33109_33130[(2)] = inst_33073);

(statearr_33109_33130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (8))){
var inst_33053 = (state_33089[(8)]);
var inst_33062 = (state_33089[(11)]);
var tmp33106 = inst_33053;
var inst_33053__$1 = tmp33106;
var inst_33054 = inst_33062;
var state_33089__$1 = (function (){var statearr_33110 = state_33089;
(statearr_33110[(7)] = inst_33054);

(statearr_33110[(8)] = inst_33053__$1);

return statearr_33110;
})();
var statearr_33111_33131 = state_33089__$1;
(statearr_33111_33131[(2)] = null);

(statearr_33111_33131[(1)] = (2));


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
});})(c__31314__auto___33117,out))
;
return ((function (switch__31226__auto__,c__31314__auto___33117,out){
return (function() {
var cljs$core$async$state_machine__31227__auto__ = null;
var cljs$core$async$state_machine__31227__auto____0 = (function (){
var statearr_33112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33112[(0)] = cljs$core$async$state_machine__31227__auto__);

(statearr_33112[(1)] = (1));

return statearr_33112;
});
var cljs$core$async$state_machine__31227__auto____1 = (function (state_33089){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_33089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e33113){if((e33113 instanceof Object)){
var ex__31230__auto__ = e33113;
var statearr_33114_33132 = state_33089;
(statearr_33114_33132[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33133 = state_33089;
state_33089 = G__33133;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$state_machine__31227__auto__ = function(state_33089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31227__auto____1.call(this,state_33089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31227__auto____0;
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31227__auto____1;
return cljs$core$async$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___33117,out))
})();
var state__31316__auto__ = (function (){var statearr_33115 = f__31315__auto__.call(null);
(statearr_33115[(6)] = c__31314__auto___33117);

return statearr_33115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___33117,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33135 = arguments.length;
switch (G__33135) {
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
var c__31314__auto___33205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31314__auto___33205,out){
return (function (){
var f__31315__auto__ = (function (){var switch__31226__auto__ = ((function (c__31314__auto___33205,out){
return (function (state_33177){
var state_val_33178 = (state_33177[(1)]);
if((state_val_33178 === (7))){
var inst_33173 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33179_33206 = state_33177__$1;
(statearr_33179_33206[(2)] = inst_33173);

(statearr_33179_33206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (1))){
var inst_33136 = [];
var inst_33137 = inst_33136;
var inst_33138 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33177__$1 = (function (){var statearr_33180 = state_33177;
(statearr_33180[(7)] = inst_33137);

(statearr_33180[(8)] = inst_33138);

return statearr_33180;
})();
var statearr_33181_33207 = state_33177__$1;
(statearr_33181_33207[(2)] = null);

(statearr_33181_33207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (4))){
var inst_33141 = (state_33177[(9)]);
var inst_33141__$1 = (state_33177[(2)]);
var inst_33142 = (inst_33141__$1 == null);
var inst_33143 = cljs.core.not.call(null,inst_33142);
var state_33177__$1 = (function (){var statearr_33182 = state_33177;
(statearr_33182[(9)] = inst_33141__$1);

return statearr_33182;
})();
if(inst_33143){
var statearr_33183_33208 = state_33177__$1;
(statearr_33183_33208[(1)] = (5));

} else {
var statearr_33184_33209 = state_33177__$1;
(statearr_33184_33209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (15))){
var inst_33167 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33185_33210 = state_33177__$1;
(statearr_33185_33210[(2)] = inst_33167);

(statearr_33185_33210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (13))){
var state_33177__$1 = state_33177;
var statearr_33186_33211 = state_33177__$1;
(statearr_33186_33211[(2)] = null);

(statearr_33186_33211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (6))){
var inst_33137 = (state_33177[(7)]);
var inst_33162 = inst_33137.length;
var inst_33163 = (inst_33162 > (0));
var state_33177__$1 = state_33177;
if(cljs.core.truth_(inst_33163)){
var statearr_33187_33212 = state_33177__$1;
(statearr_33187_33212[(1)] = (12));

} else {
var statearr_33188_33213 = state_33177__$1;
(statearr_33188_33213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (3))){
var inst_33175 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33177__$1,inst_33175);
} else {
if((state_val_33178 === (12))){
var inst_33137 = (state_33177[(7)]);
var inst_33165 = cljs.core.vec.call(null,inst_33137);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33177__$1,(15),out,inst_33165);
} else {
if((state_val_33178 === (2))){
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(4),ch);
} else {
if((state_val_33178 === (11))){
var inst_33141 = (state_33177[(9)]);
var inst_33145 = (state_33177[(10)]);
var inst_33155 = (state_33177[(2)]);
var inst_33156 = [];
var inst_33157 = inst_33156.push(inst_33141);
var inst_33137 = inst_33156;
var inst_33138 = inst_33145;
var state_33177__$1 = (function (){var statearr_33189 = state_33177;
(statearr_33189[(7)] = inst_33137);

(statearr_33189[(11)] = inst_33157);

(statearr_33189[(12)] = inst_33155);

(statearr_33189[(8)] = inst_33138);

return statearr_33189;
})();
var statearr_33190_33214 = state_33177__$1;
(statearr_33190_33214[(2)] = null);

(statearr_33190_33214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (9))){
var inst_33137 = (state_33177[(7)]);
var inst_33153 = cljs.core.vec.call(null,inst_33137);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33177__$1,(11),out,inst_33153);
} else {
if((state_val_33178 === (5))){
var inst_33141 = (state_33177[(9)]);
var inst_33145 = (state_33177[(10)]);
var inst_33138 = (state_33177[(8)]);
var inst_33145__$1 = f.call(null,inst_33141);
var inst_33146 = cljs.core._EQ_.call(null,inst_33145__$1,inst_33138);
var inst_33147 = cljs.core.keyword_identical_QMARK_.call(null,inst_33138,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33148 = (inst_33146) || (inst_33147);
var state_33177__$1 = (function (){var statearr_33191 = state_33177;
(statearr_33191[(10)] = inst_33145__$1);

return statearr_33191;
})();
if(cljs.core.truth_(inst_33148)){
var statearr_33192_33215 = state_33177__$1;
(statearr_33192_33215[(1)] = (8));

} else {
var statearr_33193_33216 = state_33177__$1;
(statearr_33193_33216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (14))){
var inst_33170 = (state_33177[(2)]);
var inst_33171 = cljs.core.async.close_BANG_.call(null,out);
var state_33177__$1 = (function (){var statearr_33195 = state_33177;
(statearr_33195[(13)] = inst_33170);

return statearr_33195;
})();
var statearr_33196_33217 = state_33177__$1;
(statearr_33196_33217[(2)] = inst_33171);

(statearr_33196_33217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (10))){
var inst_33160 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33197_33218 = state_33177__$1;
(statearr_33197_33218[(2)] = inst_33160);

(statearr_33197_33218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (8))){
var inst_33141 = (state_33177[(9)]);
var inst_33137 = (state_33177[(7)]);
var inst_33145 = (state_33177[(10)]);
var inst_33150 = inst_33137.push(inst_33141);
var tmp33194 = inst_33137;
var inst_33137__$1 = tmp33194;
var inst_33138 = inst_33145;
var state_33177__$1 = (function (){var statearr_33198 = state_33177;
(statearr_33198[(7)] = inst_33137__$1);

(statearr_33198[(8)] = inst_33138);

(statearr_33198[(14)] = inst_33150);

return statearr_33198;
})();
var statearr_33199_33219 = state_33177__$1;
(statearr_33199_33219[(2)] = null);

(statearr_33199_33219[(1)] = (2));


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
});})(c__31314__auto___33205,out))
;
return ((function (switch__31226__auto__,c__31314__auto___33205,out){
return (function() {
var cljs$core$async$state_machine__31227__auto__ = null;
var cljs$core$async$state_machine__31227__auto____0 = (function (){
var statearr_33200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33200[(0)] = cljs$core$async$state_machine__31227__auto__);

(statearr_33200[(1)] = (1));

return statearr_33200;
});
var cljs$core$async$state_machine__31227__auto____1 = (function (state_33177){
while(true){
var ret_value__31228__auto__ = (function (){try{while(true){
var result__31229__auto__ = switch__31226__auto__.call(null,state_33177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31229__auto__;
}
break;
}
}catch (e33201){if((e33201 instanceof Object)){
var ex__31230__auto__ = e33201;
var statearr_33202_33220 = state_33177;
(statearr_33202_33220[(5)] = ex__31230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33221 = state_33177;
state_33177 = G__33221;
continue;
} else {
return ret_value__31228__auto__;
}
break;
}
});
cljs$core$async$state_machine__31227__auto__ = function(state_33177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31227__auto____1.call(this,state_33177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31227__auto____0;
cljs$core$async$state_machine__31227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31227__auto____1;
return cljs$core$async$state_machine__31227__auto__;
})()
;})(switch__31226__auto__,c__31314__auto___33205,out))
})();
var state__31316__auto__ = (function (){var statearr_33203 = f__31315__auto__.call(null);
(statearr_33203[(6)] = c__31314__auto___33205);

return statearr_33203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31316__auto__);
});})(c__31314__auto___33205,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518027887329
