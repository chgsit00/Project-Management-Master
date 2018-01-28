// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31402 = arguments.length;
switch (G__31402) {
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
if(typeof cljs.core.async.t_cljs$core$async31403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31403 = (function (f,blockable,meta31404){
this.f = f;
this.blockable = blockable;
this.meta31404 = meta31404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31405,meta31404__$1){
var self__ = this;
var _31405__$1 = this;
return (new cljs.core.async.t_cljs$core$async31403(self__.f,self__.blockable,meta31404__$1));
});

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31405){
var self__ = this;
var _31405__$1 = this;
return self__.meta31404;
});

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31404","meta31404",-1477428575,null)], null);
});

cljs.core.async.t_cljs$core$async31403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31403";

cljs.core.async.t_cljs$core$async31403.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31403");
});

cljs.core.async.__GT_t_cljs$core$async31403 = (function cljs$core$async$__GT_t_cljs$core$async31403(f__$1,blockable__$1,meta31404){
return (new cljs.core.async.t_cljs$core$async31403(f__$1,blockable__$1,meta31404));
});

}

return (new cljs.core.async.t_cljs$core$async31403(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31409 = arguments.length;
switch (G__31409) {
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
var G__31412 = arguments.length;
switch (G__31412) {
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
var G__31415 = arguments.length;
switch (G__31415) {
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
var val_31417 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31417);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31417,ret){
return (function (){
return fn1.call(null,val_31417);
});})(val_31417,ret))
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
var G__31419 = arguments.length;
switch (G__31419) {
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
var n__28934__auto___31421 = n;
var x_31422 = (0);
while(true){
if((x_31422 < n__28934__auto___31421)){
(a[x_31422] = (0));

var G__31423 = (x_31422 + (1));
x_31422 = G__31423;
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

var G__31424 = (i + (1));
i = G__31424;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31425 = (function (flag,meta31426){
this.flag = flag;
this.meta31426 = meta31426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31427,meta31426__$1){
var self__ = this;
var _31427__$1 = this;
return (new cljs.core.async.t_cljs$core$async31425(self__.flag,meta31426__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31427){
var self__ = this;
var _31427__$1 = this;
return self__.meta31426;
});})(flag))
;

cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31425.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31426","meta31426",2094766588,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31425";

cljs.core.async.t_cljs$core$async31425.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31425");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31425 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31425(flag__$1,meta31426){
return (new cljs.core.async.t_cljs$core$async31425(flag__$1,meta31426));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31425(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31428 = (function (flag,cb,meta31429){
this.flag = flag;
this.cb = cb;
this.meta31429 = meta31429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31430,meta31429__$1){
var self__ = this;
var _31430__$1 = this;
return (new cljs.core.async.t_cljs$core$async31428(self__.flag,self__.cb,meta31429__$1));
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31430){
var self__ = this;
var _31430__$1 = this;
return self__.meta31429;
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31429","meta31429",-1697874909,null)], null);
});

cljs.core.async.t_cljs$core$async31428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31428";

cljs.core.async.t_cljs$core$async31428.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31428");
});

cljs.core.async.__GT_t_cljs$core$async31428 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31428(flag__$1,cb__$1,meta31429){
return (new cljs.core.async.t_cljs$core$async31428(flag__$1,cb__$1,meta31429));
});

}

return (new cljs.core.async.t_cljs$core$async31428(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31431_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31431_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31432_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31432_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27989__auto__ = wport;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31433 = (i + (1));
i = G__31433;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27989__auto__ = ret;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27977__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27977__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27977__auto__;
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
var args__29165__auto__ = [];
var len__29158__auto___31439 = arguments.length;
var i__29159__auto___31440 = (0);
while(true){
if((i__29159__auto___31440 < len__29158__auto___31439)){
args__29165__auto__.push((arguments[i__29159__auto___31440]));

var G__31441 = (i__29159__auto___31440 + (1));
i__29159__auto___31440 = G__31441;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31436){
var map__31437 = p__31436;
var map__31437__$1 = ((((!((map__31437 == null)))?((((map__31437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31437):map__31437);
var opts = map__31437__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31434){
var G__31435 = cljs.core.first.call(null,seq31434);
var seq31434__$1 = cljs.core.next.call(null,seq31434);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31435,seq31434__$1);
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
var G__31443 = arguments.length;
switch (G__31443) {
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
var c__31356__auto___31489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___31489){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___31489){
return (function (state_31467){
var state_val_31468 = (state_31467[(1)]);
if((state_val_31468 === (7))){
var inst_31463 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31469_31490 = state_31467__$1;
(statearr_31469_31490[(2)] = inst_31463);

(statearr_31469_31490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (1))){
var state_31467__$1 = state_31467;
var statearr_31470_31491 = state_31467__$1;
(statearr_31470_31491[(2)] = null);

(statearr_31470_31491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (4))){
var inst_31446 = (state_31467[(7)]);
var inst_31446__$1 = (state_31467[(2)]);
var inst_31447 = (inst_31446__$1 == null);
var state_31467__$1 = (function (){var statearr_31471 = state_31467;
(statearr_31471[(7)] = inst_31446__$1);

return statearr_31471;
})();
if(cljs.core.truth_(inst_31447)){
var statearr_31472_31492 = state_31467__$1;
(statearr_31472_31492[(1)] = (5));

} else {
var statearr_31473_31493 = state_31467__$1;
(statearr_31473_31493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (13))){
var state_31467__$1 = state_31467;
var statearr_31474_31494 = state_31467__$1;
(statearr_31474_31494[(2)] = null);

(statearr_31474_31494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (6))){
var inst_31446 = (state_31467[(7)]);
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31467__$1,(11),to,inst_31446);
} else {
if((state_val_31468 === (3))){
var inst_31465 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31467__$1,inst_31465);
} else {
if((state_val_31468 === (12))){
var state_31467__$1 = state_31467;
var statearr_31475_31495 = state_31467__$1;
(statearr_31475_31495[(2)] = null);

(statearr_31475_31495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (2))){
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31467__$1,(4),from);
} else {
if((state_val_31468 === (11))){
var inst_31456 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
if(cljs.core.truth_(inst_31456)){
var statearr_31476_31496 = state_31467__$1;
(statearr_31476_31496[(1)] = (12));

} else {
var statearr_31477_31497 = state_31467__$1;
(statearr_31477_31497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (9))){
var state_31467__$1 = state_31467;
var statearr_31478_31498 = state_31467__$1;
(statearr_31478_31498[(2)] = null);

(statearr_31478_31498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (5))){
var state_31467__$1 = state_31467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31479_31499 = state_31467__$1;
(statearr_31479_31499[(1)] = (8));

} else {
var statearr_31480_31500 = state_31467__$1;
(statearr_31480_31500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (14))){
var inst_31461 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31481_31501 = state_31467__$1;
(statearr_31481_31501[(2)] = inst_31461);

(statearr_31481_31501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (10))){
var inst_31453 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31482_31502 = state_31467__$1;
(statearr_31482_31502[(2)] = inst_31453);

(statearr_31482_31502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (8))){
var inst_31450 = cljs.core.async.close_BANG_.call(null,to);
var state_31467__$1 = state_31467;
var statearr_31483_31503 = state_31467__$1;
(statearr_31483_31503[(2)] = inst_31450);

(statearr_31483_31503[(1)] = (10));


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
});})(c__31356__auto___31489))
;
return ((function (switch__31268__auto__,c__31356__auto___31489){
return (function() {
var cljs$core$async$state_machine__31269__auto__ = null;
var cljs$core$async$state_machine__31269__auto____0 = (function (){
var statearr_31484 = [null,null,null,null,null,null,null,null];
(statearr_31484[(0)] = cljs$core$async$state_machine__31269__auto__);

(statearr_31484[(1)] = (1));

return statearr_31484;
});
var cljs$core$async$state_machine__31269__auto____1 = (function (state_31467){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_31467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e31485){if((e31485 instanceof Object)){
var ex__31272__auto__ = e31485;
var statearr_31486_31504 = state_31467;
(statearr_31486_31504[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31505 = state_31467;
state_31467 = G__31505;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$state_machine__31269__auto__ = function(state_31467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31269__auto____1.call(this,state_31467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31269__auto____0;
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31269__auto____1;
return cljs$core$async$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___31489))
})();
var state__31358__auto__ = (function (){var statearr_31487 = f__31357__auto__.call(null);
(statearr_31487[(6)] = c__31356__auto___31489);

return statearr_31487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___31489))
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
return (function (p__31506){
var vec__31507 = p__31506;
var v = cljs.core.nth.call(null,vec__31507,(0),null);
var p = cljs.core.nth.call(null,vec__31507,(1),null);
var job = vec__31507;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31356__auto___31678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___31678,res,vec__31507,v,p,job,jobs,results){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___31678,res,vec__31507,v,p,job,jobs,results){
return (function (state_31514){
var state_val_31515 = (state_31514[(1)]);
if((state_val_31515 === (1))){
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31514__$1,(2),res,v);
} else {
if((state_val_31515 === (2))){
var inst_31511 = (state_31514[(2)]);
var inst_31512 = cljs.core.async.close_BANG_.call(null,res);
var state_31514__$1 = (function (){var statearr_31516 = state_31514;
(statearr_31516[(7)] = inst_31511);

return statearr_31516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31514__$1,inst_31512);
} else {
return null;
}
}
});})(c__31356__auto___31678,res,vec__31507,v,p,job,jobs,results))
;
return ((function (switch__31268__auto__,c__31356__auto___31678,res,vec__31507,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0 = (function (){
var statearr_31517 = [null,null,null,null,null,null,null,null];
(statearr_31517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__);

(statearr_31517[(1)] = (1));

return statearr_31517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1 = (function (state_31514){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_31514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e31518){if((e31518 instanceof Object)){
var ex__31272__auto__ = e31518;
var statearr_31519_31679 = state_31514;
(statearr_31519_31679[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31680 = state_31514;
state_31514 = G__31680;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__ = function(state_31514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1.call(this,state_31514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___31678,res,vec__31507,v,p,job,jobs,results))
})();
var state__31358__auto__ = (function (){var statearr_31520 = f__31357__auto__.call(null);
(statearr_31520[(6)] = c__31356__auto___31678);

return statearr_31520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___31678,res,vec__31507,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31521){
var vec__31522 = p__31521;
var v = cljs.core.nth.call(null,vec__31522,(0),null);
var p = cljs.core.nth.call(null,vec__31522,(1),null);
var job = vec__31522;
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
var n__28934__auto___31681 = n;
var __31682 = (0);
while(true){
if((__31682 < n__28934__auto___31681)){
var G__31525_31683 = type;
var G__31525_31684__$1 = (((G__31525_31683 instanceof cljs.core.Keyword))?G__31525_31683.fqn:null);
switch (G__31525_31684__$1) {
case "compute":
var c__31356__auto___31686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31682,c__31356__auto___31686,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (__31682,c__31356__auto___31686,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async){
return (function (state_31538){
var state_val_31539 = (state_31538[(1)]);
if((state_val_31539 === (1))){
var state_31538__$1 = state_31538;
var statearr_31540_31687 = state_31538__$1;
(statearr_31540_31687[(2)] = null);

(statearr_31540_31687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31539 === (2))){
var state_31538__$1 = state_31538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31538__$1,(4),jobs);
} else {
if((state_val_31539 === (3))){
var inst_31536 = (state_31538[(2)]);
var state_31538__$1 = state_31538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31538__$1,inst_31536);
} else {
if((state_val_31539 === (4))){
var inst_31528 = (state_31538[(2)]);
var inst_31529 = process.call(null,inst_31528);
var state_31538__$1 = state_31538;
if(cljs.core.truth_(inst_31529)){
var statearr_31541_31688 = state_31538__$1;
(statearr_31541_31688[(1)] = (5));

} else {
var statearr_31542_31689 = state_31538__$1;
(statearr_31542_31689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31539 === (5))){
var state_31538__$1 = state_31538;
var statearr_31543_31690 = state_31538__$1;
(statearr_31543_31690[(2)] = null);

(statearr_31543_31690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31539 === (6))){
var state_31538__$1 = state_31538;
var statearr_31544_31691 = state_31538__$1;
(statearr_31544_31691[(2)] = null);

(statearr_31544_31691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31539 === (7))){
var inst_31534 = (state_31538[(2)]);
var state_31538__$1 = state_31538;
var statearr_31545_31692 = state_31538__$1;
(statearr_31545_31692[(2)] = inst_31534);

(statearr_31545_31692[(1)] = (3));


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
});})(__31682,c__31356__auto___31686,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async))
;
return ((function (__31682,switch__31268__auto__,c__31356__auto___31686,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0 = (function (){
var statearr_31546 = [null,null,null,null,null,null,null];
(statearr_31546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__);

(statearr_31546[(1)] = (1));

return statearr_31546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1 = (function (state_31538){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_31538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e31547){if((e31547 instanceof Object)){
var ex__31272__auto__ = e31547;
var statearr_31548_31693 = state_31538;
(statearr_31548_31693[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31694 = state_31538;
state_31538 = G__31694;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__ = function(state_31538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1.call(this,state_31538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__;
})()
;})(__31682,switch__31268__auto__,c__31356__auto___31686,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async))
})();
var state__31358__auto__ = (function (){var statearr_31549 = f__31357__auto__.call(null);
(statearr_31549[(6)] = c__31356__auto___31686);

return statearr_31549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(__31682,c__31356__auto___31686,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async))
);


break;
case "async":
var c__31356__auto___31695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31682,c__31356__auto___31695,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (__31682,c__31356__auto___31695,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async){
return (function (state_31562){
var state_val_31563 = (state_31562[(1)]);
if((state_val_31563 === (1))){
var state_31562__$1 = state_31562;
var statearr_31564_31696 = state_31562__$1;
(statearr_31564_31696[(2)] = null);

(statearr_31564_31696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (2))){
var state_31562__$1 = state_31562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31562__$1,(4),jobs);
} else {
if((state_val_31563 === (3))){
var inst_31560 = (state_31562[(2)]);
var state_31562__$1 = state_31562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31562__$1,inst_31560);
} else {
if((state_val_31563 === (4))){
var inst_31552 = (state_31562[(2)]);
var inst_31553 = async.call(null,inst_31552);
var state_31562__$1 = state_31562;
if(cljs.core.truth_(inst_31553)){
var statearr_31565_31697 = state_31562__$1;
(statearr_31565_31697[(1)] = (5));

} else {
var statearr_31566_31698 = state_31562__$1;
(statearr_31566_31698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (5))){
var state_31562__$1 = state_31562;
var statearr_31567_31699 = state_31562__$1;
(statearr_31567_31699[(2)] = null);

(statearr_31567_31699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (6))){
var state_31562__$1 = state_31562;
var statearr_31568_31700 = state_31562__$1;
(statearr_31568_31700[(2)] = null);

(statearr_31568_31700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (7))){
var inst_31558 = (state_31562[(2)]);
var state_31562__$1 = state_31562;
var statearr_31569_31701 = state_31562__$1;
(statearr_31569_31701[(2)] = inst_31558);

(statearr_31569_31701[(1)] = (3));


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
});})(__31682,c__31356__auto___31695,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async))
;
return ((function (__31682,switch__31268__auto__,c__31356__auto___31695,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0 = (function (){
var statearr_31570 = [null,null,null,null,null,null,null];
(statearr_31570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__);

(statearr_31570[(1)] = (1));

return statearr_31570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1 = (function (state_31562){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_31562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e31571){if((e31571 instanceof Object)){
var ex__31272__auto__ = e31571;
var statearr_31572_31702 = state_31562;
(statearr_31572_31702[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31703 = state_31562;
state_31562 = G__31703;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__ = function(state_31562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1.call(this,state_31562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__;
})()
;})(__31682,switch__31268__auto__,c__31356__auto___31695,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async))
})();
var state__31358__auto__ = (function (){var statearr_31573 = f__31357__auto__.call(null);
(statearr_31573[(6)] = c__31356__auto___31695);

return statearr_31573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(__31682,c__31356__auto___31695,G__31525_31683,G__31525_31684__$1,n__28934__auto___31681,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31525_31684__$1)].join('')));

}

var G__31704 = (__31682 + (1));
__31682 = G__31704;
continue;
} else {
}
break;
}

var c__31356__auto___31705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___31705,jobs,results,process,async){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___31705,jobs,results,process,async){
return (function (state_31595){
var state_val_31596 = (state_31595[(1)]);
if((state_val_31596 === (1))){
var state_31595__$1 = state_31595;
var statearr_31597_31706 = state_31595__$1;
(statearr_31597_31706[(2)] = null);

(statearr_31597_31706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (2))){
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31595__$1,(4),from);
} else {
if((state_val_31596 === (3))){
var inst_31593 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31595__$1,inst_31593);
} else {
if((state_val_31596 === (4))){
var inst_31576 = (state_31595[(7)]);
var inst_31576__$1 = (state_31595[(2)]);
var inst_31577 = (inst_31576__$1 == null);
var state_31595__$1 = (function (){var statearr_31598 = state_31595;
(statearr_31598[(7)] = inst_31576__$1);

return statearr_31598;
})();
if(cljs.core.truth_(inst_31577)){
var statearr_31599_31707 = state_31595__$1;
(statearr_31599_31707[(1)] = (5));

} else {
var statearr_31600_31708 = state_31595__$1;
(statearr_31600_31708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (5))){
var inst_31579 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31595__$1 = state_31595;
var statearr_31601_31709 = state_31595__$1;
(statearr_31601_31709[(2)] = inst_31579);

(statearr_31601_31709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (6))){
var inst_31576 = (state_31595[(7)]);
var inst_31581 = (state_31595[(8)]);
var inst_31581__$1 = cljs.core.async.chan.call(null,(1));
var inst_31582 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31583 = [inst_31576,inst_31581__$1];
var inst_31584 = (new cljs.core.PersistentVector(null,2,(5),inst_31582,inst_31583,null));
var state_31595__$1 = (function (){var statearr_31602 = state_31595;
(statearr_31602[(8)] = inst_31581__$1);

return statearr_31602;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31595__$1,(8),jobs,inst_31584);
} else {
if((state_val_31596 === (7))){
var inst_31591 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31603_31710 = state_31595__$1;
(statearr_31603_31710[(2)] = inst_31591);

(statearr_31603_31710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (8))){
var inst_31581 = (state_31595[(8)]);
var inst_31586 = (state_31595[(2)]);
var state_31595__$1 = (function (){var statearr_31604 = state_31595;
(statearr_31604[(9)] = inst_31586);

return statearr_31604;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31595__$1,(9),results,inst_31581);
} else {
if((state_val_31596 === (9))){
var inst_31588 = (state_31595[(2)]);
var state_31595__$1 = (function (){var statearr_31605 = state_31595;
(statearr_31605[(10)] = inst_31588);

return statearr_31605;
})();
var statearr_31606_31711 = state_31595__$1;
(statearr_31606_31711[(2)] = null);

(statearr_31606_31711[(1)] = (2));


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
});})(c__31356__auto___31705,jobs,results,process,async))
;
return ((function (switch__31268__auto__,c__31356__auto___31705,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0 = (function (){
var statearr_31607 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__);

(statearr_31607[(1)] = (1));

return statearr_31607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1 = (function (state_31595){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_31595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e31608){if((e31608 instanceof Object)){
var ex__31272__auto__ = e31608;
var statearr_31609_31712 = state_31595;
(statearr_31609_31712[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31713 = state_31595;
state_31595 = G__31713;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__ = function(state_31595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1.call(this,state_31595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___31705,jobs,results,process,async))
})();
var state__31358__auto__ = (function (){var statearr_31610 = f__31357__auto__.call(null);
(statearr_31610[(6)] = c__31356__auto___31705);

return statearr_31610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___31705,jobs,results,process,async))
);


var c__31356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto__,jobs,results,process,async){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto__,jobs,results,process,async){
return (function (state_31648){
var state_val_31649 = (state_31648[(1)]);
if((state_val_31649 === (7))){
var inst_31644 = (state_31648[(2)]);
var state_31648__$1 = state_31648;
var statearr_31650_31714 = state_31648__$1;
(statearr_31650_31714[(2)] = inst_31644);

(statearr_31650_31714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (20))){
var state_31648__$1 = state_31648;
var statearr_31651_31715 = state_31648__$1;
(statearr_31651_31715[(2)] = null);

(statearr_31651_31715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (1))){
var state_31648__$1 = state_31648;
var statearr_31652_31716 = state_31648__$1;
(statearr_31652_31716[(2)] = null);

(statearr_31652_31716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (4))){
var inst_31613 = (state_31648[(7)]);
var inst_31613__$1 = (state_31648[(2)]);
var inst_31614 = (inst_31613__$1 == null);
var state_31648__$1 = (function (){var statearr_31653 = state_31648;
(statearr_31653[(7)] = inst_31613__$1);

return statearr_31653;
})();
if(cljs.core.truth_(inst_31614)){
var statearr_31654_31717 = state_31648__$1;
(statearr_31654_31717[(1)] = (5));

} else {
var statearr_31655_31718 = state_31648__$1;
(statearr_31655_31718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (15))){
var inst_31626 = (state_31648[(8)]);
var state_31648__$1 = state_31648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31648__$1,(18),to,inst_31626);
} else {
if((state_val_31649 === (21))){
var inst_31639 = (state_31648[(2)]);
var state_31648__$1 = state_31648;
var statearr_31656_31719 = state_31648__$1;
(statearr_31656_31719[(2)] = inst_31639);

(statearr_31656_31719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (13))){
var inst_31641 = (state_31648[(2)]);
var state_31648__$1 = (function (){var statearr_31657 = state_31648;
(statearr_31657[(9)] = inst_31641);

return statearr_31657;
})();
var statearr_31658_31720 = state_31648__$1;
(statearr_31658_31720[(2)] = null);

(statearr_31658_31720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (6))){
var inst_31613 = (state_31648[(7)]);
var state_31648__$1 = state_31648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31648__$1,(11),inst_31613);
} else {
if((state_val_31649 === (17))){
var inst_31634 = (state_31648[(2)]);
var state_31648__$1 = state_31648;
if(cljs.core.truth_(inst_31634)){
var statearr_31659_31721 = state_31648__$1;
(statearr_31659_31721[(1)] = (19));

} else {
var statearr_31660_31722 = state_31648__$1;
(statearr_31660_31722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (3))){
var inst_31646 = (state_31648[(2)]);
var state_31648__$1 = state_31648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31648__$1,inst_31646);
} else {
if((state_val_31649 === (12))){
var inst_31623 = (state_31648[(10)]);
var state_31648__$1 = state_31648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31648__$1,(14),inst_31623);
} else {
if((state_val_31649 === (2))){
var state_31648__$1 = state_31648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31648__$1,(4),results);
} else {
if((state_val_31649 === (19))){
var state_31648__$1 = state_31648;
var statearr_31661_31723 = state_31648__$1;
(statearr_31661_31723[(2)] = null);

(statearr_31661_31723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (11))){
var inst_31623 = (state_31648[(2)]);
var state_31648__$1 = (function (){var statearr_31662 = state_31648;
(statearr_31662[(10)] = inst_31623);

return statearr_31662;
})();
var statearr_31663_31724 = state_31648__$1;
(statearr_31663_31724[(2)] = null);

(statearr_31663_31724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (9))){
var state_31648__$1 = state_31648;
var statearr_31664_31725 = state_31648__$1;
(statearr_31664_31725[(2)] = null);

(statearr_31664_31725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (5))){
var state_31648__$1 = state_31648;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31665_31726 = state_31648__$1;
(statearr_31665_31726[(1)] = (8));

} else {
var statearr_31666_31727 = state_31648__$1;
(statearr_31666_31727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (14))){
var inst_31628 = (state_31648[(11)]);
var inst_31626 = (state_31648[(8)]);
var inst_31626__$1 = (state_31648[(2)]);
var inst_31627 = (inst_31626__$1 == null);
var inst_31628__$1 = cljs.core.not.call(null,inst_31627);
var state_31648__$1 = (function (){var statearr_31667 = state_31648;
(statearr_31667[(11)] = inst_31628__$1);

(statearr_31667[(8)] = inst_31626__$1);

return statearr_31667;
})();
if(inst_31628__$1){
var statearr_31668_31728 = state_31648__$1;
(statearr_31668_31728[(1)] = (15));

} else {
var statearr_31669_31729 = state_31648__$1;
(statearr_31669_31729[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (16))){
var inst_31628 = (state_31648[(11)]);
var state_31648__$1 = state_31648;
var statearr_31670_31730 = state_31648__$1;
(statearr_31670_31730[(2)] = inst_31628);

(statearr_31670_31730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (10))){
var inst_31620 = (state_31648[(2)]);
var state_31648__$1 = state_31648;
var statearr_31671_31731 = state_31648__$1;
(statearr_31671_31731[(2)] = inst_31620);

(statearr_31671_31731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (18))){
var inst_31631 = (state_31648[(2)]);
var state_31648__$1 = state_31648;
var statearr_31672_31732 = state_31648__$1;
(statearr_31672_31732[(2)] = inst_31631);

(statearr_31672_31732[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (8))){
var inst_31617 = cljs.core.async.close_BANG_.call(null,to);
var state_31648__$1 = state_31648;
var statearr_31673_31733 = state_31648__$1;
(statearr_31673_31733[(2)] = inst_31617);

(statearr_31673_31733[(1)] = (10));


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
});})(c__31356__auto__,jobs,results,process,async))
;
return ((function (switch__31268__auto__,c__31356__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0 = (function (){
var statearr_31674 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__);

(statearr_31674[(1)] = (1));

return statearr_31674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1 = (function (state_31648){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_31648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e31675){if((e31675 instanceof Object)){
var ex__31272__auto__ = e31675;
var statearr_31676_31734 = state_31648;
(statearr_31676_31734[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31735 = state_31648;
state_31648 = G__31735;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__ = function(state_31648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1.call(this,state_31648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31269__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto__,jobs,results,process,async))
})();
var state__31358__auto__ = (function (){var statearr_31677 = f__31357__auto__.call(null);
(statearr_31677[(6)] = c__31356__auto__);

return statearr_31677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto__,jobs,results,process,async))
);

return c__31356__auto__;
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
var G__31737 = arguments.length;
switch (G__31737) {
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
var G__31740 = arguments.length;
switch (G__31740) {
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
var G__31743 = arguments.length;
switch (G__31743) {
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
var c__31356__auto___31792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___31792,tc,fc){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___31792,tc,fc){
return (function (state_31769){
var state_val_31770 = (state_31769[(1)]);
if((state_val_31770 === (7))){
var inst_31765 = (state_31769[(2)]);
var state_31769__$1 = state_31769;
var statearr_31771_31793 = state_31769__$1;
(statearr_31771_31793[(2)] = inst_31765);

(statearr_31771_31793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (1))){
var state_31769__$1 = state_31769;
var statearr_31772_31794 = state_31769__$1;
(statearr_31772_31794[(2)] = null);

(statearr_31772_31794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (4))){
var inst_31746 = (state_31769[(7)]);
var inst_31746__$1 = (state_31769[(2)]);
var inst_31747 = (inst_31746__$1 == null);
var state_31769__$1 = (function (){var statearr_31773 = state_31769;
(statearr_31773[(7)] = inst_31746__$1);

return statearr_31773;
})();
if(cljs.core.truth_(inst_31747)){
var statearr_31774_31795 = state_31769__$1;
(statearr_31774_31795[(1)] = (5));

} else {
var statearr_31775_31796 = state_31769__$1;
(statearr_31775_31796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (13))){
var state_31769__$1 = state_31769;
var statearr_31776_31797 = state_31769__$1;
(statearr_31776_31797[(2)] = null);

(statearr_31776_31797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (6))){
var inst_31746 = (state_31769[(7)]);
var inst_31752 = p.call(null,inst_31746);
var state_31769__$1 = state_31769;
if(cljs.core.truth_(inst_31752)){
var statearr_31777_31798 = state_31769__$1;
(statearr_31777_31798[(1)] = (9));

} else {
var statearr_31778_31799 = state_31769__$1;
(statearr_31778_31799[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (3))){
var inst_31767 = (state_31769[(2)]);
var state_31769__$1 = state_31769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31769__$1,inst_31767);
} else {
if((state_val_31770 === (12))){
var state_31769__$1 = state_31769;
var statearr_31779_31800 = state_31769__$1;
(statearr_31779_31800[(2)] = null);

(statearr_31779_31800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (2))){
var state_31769__$1 = state_31769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31769__$1,(4),ch);
} else {
if((state_val_31770 === (11))){
var inst_31746 = (state_31769[(7)]);
var inst_31756 = (state_31769[(2)]);
var state_31769__$1 = state_31769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31769__$1,(8),inst_31756,inst_31746);
} else {
if((state_val_31770 === (9))){
var state_31769__$1 = state_31769;
var statearr_31780_31801 = state_31769__$1;
(statearr_31780_31801[(2)] = tc);

(statearr_31780_31801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (5))){
var inst_31749 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31750 = cljs.core.async.close_BANG_.call(null,fc);
var state_31769__$1 = (function (){var statearr_31781 = state_31769;
(statearr_31781[(8)] = inst_31749);

return statearr_31781;
})();
var statearr_31782_31802 = state_31769__$1;
(statearr_31782_31802[(2)] = inst_31750);

(statearr_31782_31802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (14))){
var inst_31763 = (state_31769[(2)]);
var state_31769__$1 = state_31769;
var statearr_31783_31803 = state_31769__$1;
(statearr_31783_31803[(2)] = inst_31763);

(statearr_31783_31803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (10))){
var state_31769__$1 = state_31769;
var statearr_31784_31804 = state_31769__$1;
(statearr_31784_31804[(2)] = fc);

(statearr_31784_31804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31770 === (8))){
var inst_31758 = (state_31769[(2)]);
var state_31769__$1 = state_31769;
if(cljs.core.truth_(inst_31758)){
var statearr_31785_31805 = state_31769__$1;
(statearr_31785_31805[(1)] = (12));

} else {
var statearr_31786_31806 = state_31769__$1;
(statearr_31786_31806[(1)] = (13));

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
});})(c__31356__auto___31792,tc,fc))
;
return ((function (switch__31268__auto__,c__31356__auto___31792,tc,fc){
return (function() {
var cljs$core$async$state_machine__31269__auto__ = null;
var cljs$core$async$state_machine__31269__auto____0 = (function (){
var statearr_31787 = [null,null,null,null,null,null,null,null,null];
(statearr_31787[(0)] = cljs$core$async$state_machine__31269__auto__);

(statearr_31787[(1)] = (1));

return statearr_31787;
});
var cljs$core$async$state_machine__31269__auto____1 = (function (state_31769){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_31769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e31788){if((e31788 instanceof Object)){
var ex__31272__auto__ = e31788;
var statearr_31789_31807 = state_31769;
(statearr_31789_31807[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31808 = state_31769;
state_31769 = G__31808;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$state_machine__31269__auto__ = function(state_31769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31269__auto____1.call(this,state_31769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31269__auto____0;
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31269__auto____1;
return cljs$core$async$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___31792,tc,fc))
})();
var state__31358__auto__ = (function (){var statearr_31790 = f__31357__auto__.call(null);
(statearr_31790[(6)] = c__31356__auto___31792);

return statearr_31790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___31792,tc,fc))
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
var c__31356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto__){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto__){
return (function (state_31829){
var state_val_31830 = (state_31829[(1)]);
if((state_val_31830 === (7))){
var inst_31825 = (state_31829[(2)]);
var state_31829__$1 = state_31829;
var statearr_31831_31849 = state_31829__$1;
(statearr_31831_31849[(2)] = inst_31825);

(statearr_31831_31849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (1))){
var inst_31809 = init;
var state_31829__$1 = (function (){var statearr_31832 = state_31829;
(statearr_31832[(7)] = inst_31809);

return statearr_31832;
})();
var statearr_31833_31850 = state_31829__$1;
(statearr_31833_31850[(2)] = null);

(statearr_31833_31850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (4))){
var inst_31812 = (state_31829[(8)]);
var inst_31812__$1 = (state_31829[(2)]);
var inst_31813 = (inst_31812__$1 == null);
var state_31829__$1 = (function (){var statearr_31834 = state_31829;
(statearr_31834[(8)] = inst_31812__$1);

return statearr_31834;
})();
if(cljs.core.truth_(inst_31813)){
var statearr_31835_31851 = state_31829__$1;
(statearr_31835_31851[(1)] = (5));

} else {
var statearr_31836_31852 = state_31829__$1;
(statearr_31836_31852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (6))){
var inst_31809 = (state_31829[(7)]);
var inst_31812 = (state_31829[(8)]);
var inst_31816 = (state_31829[(9)]);
var inst_31816__$1 = f.call(null,inst_31809,inst_31812);
var inst_31817 = cljs.core.reduced_QMARK_.call(null,inst_31816__$1);
var state_31829__$1 = (function (){var statearr_31837 = state_31829;
(statearr_31837[(9)] = inst_31816__$1);

return statearr_31837;
})();
if(inst_31817){
var statearr_31838_31853 = state_31829__$1;
(statearr_31838_31853[(1)] = (8));

} else {
var statearr_31839_31854 = state_31829__$1;
(statearr_31839_31854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (3))){
var inst_31827 = (state_31829[(2)]);
var state_31829__$1 = state_31829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31829__$1,inst_31827);
} else {
if((state_val_31830 === (2))){
var state_31829__$1 = state_31829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31829__$1,(4),ch);
} else {
if((state_val_31830 === (9))){
var inst_31816 = (state_31829[(9)]);
var inst_31809 = inst_31816;
var state_31829__$1 = (function (){var statearr_31840 = state_31829;
(statearr_31840[(7)] = inst_31809);

return statearr_31840;
})();
var statearr_31841_31855 = state_31829__$1;
(statearr_31841_31855[(2)] = null);

(statearr_31841_31855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (5))){
var inst_31809 = (state_31829[(7)]);
var state_31829__$1 = state_31829;
var statearr_31842_31856 = state_31829__$1;
(statearr_31842_31856[(2)] = inst_31809);

(statearr_31842_31856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (10))){
var inst_31823 = (state_31829[(2)]);
var state_31829__$1 = state_31829;
var statearr_31843_31857 = state_31829__$1;
(statearr_31843_31857[(2)] = inst_31823);

(statearr_31843_31857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31830 === (8))){
var inst_31816 = (state_31829[(9)]);
var inst_31819 = cljs.core.deref.call(null,inst_31816);
var state_31829__$1 = state_31829;
var statearr_31844_31858 = state_31829__$1;
(statearr_31844_31858[(2)] = inst_31819);

(statearr_31844_31858[(1)] = (10));


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
});})(c__31356__auto__))
;
return ((function (switch__31268__auto__,c__31356__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31269__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31269__auto____0 = (function (){
var statearr_31845 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31845[(0)] = cljs$core$async$reduce_$_state_machine__31269__auto__);

(statearr_31845[(1)] = (1));

return statearr_31845;
});
var cljs$core$async$reduce_$_state_machine__31269__auto____1 = (function (state_31829){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_31829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e31846){if((e31846 instanceof Object)){
var ex__31272__auto__ = e31846;
var statearr_31847_31859 = state_31829;
(statearr_31847_31859[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31860 = state_31829;
state_31829 = G__31860;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31269__auto__ = function(state_31829){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31269__auto____1.call(this,state_31829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31269__auto____0;
cljs$core$async$reduce_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31269__auto____1;
return cljs$core$async$reduce_$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto__))
})();
var state__31358__auto__ = (function (){var statearr_31848 = f__31357__auto__.call(null);
(statearr_31848[(6)] = c__31356__auto__);

return statearr_31848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto__))
);

return c__31356__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto__,f__$1){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto__,f__$1){
return (function (state_31866){
var state_val_31867 = (state_31866[(1)]);
if((state_val_31867 === (1))){
var inst_31861 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31866__$1 = state_31866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31866__$1,(2),inst_31861);
} else {
if((state_val_31867 === (2))){
var inst_31863 = (state_31866[(2)]);
var inst_31864 = f__$1.call(null,inst_31863);
var state_31866__$1 = state_31866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31866__$1,inst_31864);
} else {
return null;
}
}
});})(c__31356__auto__,f__$1))
;
return ((function (switch__31268__auto__,c__31356__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31269__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31269__auto____0 = (function (){
var statearr_31868 = [null,null,null,null,null,null,null];
(statearr_31868[(0)] = cljs$core$async$transduce_$_state_machine__31269__auto__);

(statearr_31868[(1)] = (1));

return statearr_31868;
});
var cljs$core$async$transduce_$_state_machine__31269__auto____1 = (function (state_31866){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_31866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e31869){if((e31869 instanceof Object)){
var ex__31272__auto__ = e31869;
var statearr_31870_31872 = state_31866;
(statearr_31870_31872[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31873 = state_31866;
state_31866 = G__31873;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31269__auto__ = function(state_31866){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31269__auto____1.call(this,state_31866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31269__auto____0;
cljs$core$async$transduce_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31269__auto____1;
return cljs$core$async$transduce_$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto__,f__$1))
})();
var state__31358__auto__ = (function (){var statearr_31871 = f__31357__auto__.call(null);
(statearr_31871[(6)] = c__31356__auto__);

return statearr_31871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto__,f__$1))
);

return c__31356__auto__;
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
var G__31875 = arguments.length;
switch (G__31875) {
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
var c__31356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto__){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto__){
return (function (state_31900){
var state_val_31901 = (state_31900[(1)]);
if((state_val_31901 === (7))){
var inst_31882 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31902_31923 = state_31900__$1;
(statearr_31902_31923[(2)] = inst_31882);

(statearr_31902_31923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (1))){
var inst_31876 = cljs.core.seq.call(null,coll);
var inst_31877 = inst_31876;
var state_31900__$1 = (function (){var statearr_31903 = state_31900;
(statearr_31903[(7)] = inst_31877);

return statearr_31903;
})();
var statearr_31904_31924 = state_31900__$1;
(statearr_31904_31924[(2)] = null);

(statearr_31904_31924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (4))){
var inst_31877 = (state_31900[(7)]);
var inst_31880 = cljs.core.first.call(null,inst_31877);
var state_31900__$1 = state_31900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31900__$1,(7),ch,inst_31880);
} else {
if((state_val_31901 === (13))){
var inst_31894 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31905_31925 = state_31900__$1;
(statearr_31905_31925[(2)] = inst_31894);

(statearr_31905_31925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (6))){
var inst_31885 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
if(cljs.core.truth_(inst_31885)){
var statearr_31906_31926 = state_31900__$1;
(statearr_31906_31926[(1)] = (8));

} else {
var statearr_31907_31927 = state_31900__$1;
(statearr_31907_31927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (3))){
var inst_31898 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31900__$1,inst_31898);
} else {
if((state_val_31901 === (12))){
var state_31900__$1 = state_31900;
var statearr_31908_31928 = state_31900__$1;
(statearr_31908_31928[(2)] = null);

(statearr_31908_31928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (2))){
var inst_31877 = (state_31900[(7)]);
var state_31900__$1 = state_31900;
if(cljs.core.truth_(inst_31877)){
var statearr_31909_31929 = state_31900__$1;
(statearr_31909_31929[(1)] = (4));

} else {
var statearr_31910_31930 = state_31900__$1;
(statearr_31910_31930[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (11))){
var inst_31891 = cljs.core.async.close_BANG_.call(null,ch);
var state_31900__$1 = state_31900;
var statearr_31911_31931 = state_31900__$1;
(statearr_31911_31931[(2)] = inst_31891);

(statearr_31911_31931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (9))){
var state_31900__$1 = state_31900;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31912_31932 = state_31900__$1;
(statearr_31912_31932[(1)] = (11));

} else {
var statearr_31913_31933 = state_31900__$1;
(statearr_31913_31933[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (5))){
var inst_31877 = (state_31900[(7)]);
var state_31900__$1 = state_31900;
var statearr_31914_31934 = state_31900__$1;
(statearr_31914_31934[(2)] = inst_31877);

(statearr_31914_31934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (10))){
var inst_31896 = (state_31900[(2)]);
var state_31900__$1 = state_31900;
var statearr_31915_31935 = state_31900__$1;
(statearr_31915_31935[(2)] = inst_31896);

(statearr_31915_31935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31901 === (8))){
var inst_31877 = (state_31900[(7)]);
var inst_31887 = cljs.core.next.call(null,inst_31877);
var inst_31877__$1 = inst_31887;
var state_31900__$1 = (function (){var statearr_31916 = state_31900;
(statearr_31916[(7)] = inst_31877__$1);

return statearr_31916;
})();
var statearr_31917_31936 = state_31900__$1;
(statearr_31917_31936[(2)] = null);

(statearr_31917_31936[(1)] = (2));


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
});})(c__31356__auto__))
;
return ((function (switch__31268__auto__,c__31356__auto__){
return (function() {
var cljs$core$async$state_machine__31269__auto__ = null;
var cljs$core$async$state_machine__31269__auto____0 = (function (){
var statearr_31918 = [null,null,null,null,null,null,null,null];
(statearr_31918[(0)] = cljs$core$async$state_machine__31269__auto__);

(statearr_31918[(1)] = (1));

return statearr_31918;
});
var cljs$core$async$state_machine__31269__auto____1 = (function (state_31900){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_31900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e31919){if((e31919 instanceof Object)){
var ex__31272__auto__ = e31919;
var statearr_31920_31937 = state_31900;
(statearr_31920_31937[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31938 = state_31900;
state_31900 = G__31938;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$state_machine__31269__auto__ = function(state_31900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31269__auto____1.call(this,state_31900);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31269__auto____0;
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31269__auto____1;
return cljs$core$async$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto__))
})();
var state__31358__auto__ = (function (){var statearr_31921 = f__31357__auto__.call(null);
(statearr_31921[(6)] = c__31356__auto__);

return statearr_31921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto__))
);

return c__31356__auto__;
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
var x__28672__auto__ = (((_ == null))?null:_);
var m__28673__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,_);
} else {
var m__28673__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,_);
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
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28673__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
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
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m);
} else {
var m__28673__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31939 = (function (ch,cs,meta31940){
this.ch = ch;
this.cs = cs;
this.meta31940 = meta31940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31941,meta31940__$1){
var self__ = this;
var _31941__$1 = this;
return (new cljs.core.async.t_cljs$core$async31939(self__.ch,self__.cs,meta31940__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31941){
var self__ = this;
var _31941__$1 = this;
return self__.meta31940;
});})(cs))
;

cljs.core.async.t_cljs$core$async31939.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31939.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31939.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31939.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31939.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31939.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31939.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31940","meta31940",2009596529,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31939";

cljs.core.async.t_cljs$core$async31939.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31939");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31939 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31939(ch__$1,cs__$1,meta31940){
return (new cljs.core.async.t_cljs$core$async31939(ch__$1,cs__$1,meta31940));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31939(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31356__auto___32161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___32161,cs,m,dchan,dctr,done){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___32161,cs,m,dchan,dctr,done){
return (function (state_32076){
var state_val_32077 = (state_32076[(1)]);
if((state_val_32077 === (7))){
var inst_32072 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32078_32162 = state_32076__$1;
(statearr_32078_32162[(2)] = inst_32072);

(statearr_32078_32162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (20))){
var inst_31975 = (state_32076[(7)]);
var inst_31987 = cljs.core.first.call(null,inst_31975);
var inst_31988 = cljs.core.nth.call(null,inst_31987,(0),null);
var inst_31989 = cljs.core.nth.call(null,inst_31987,(1),null);
var state_32076__$1 = (function (){var statearr_32079 = state_32076;
(statearr_32079[(8)] = inst_31988);

return statearr_32079;
})();
if(cljs.core.truth_(inst_31989)){
var statearr_32080_32163 = state_32076__$1;
(statearr_32080_32163[(1)] = (22));

} else {
var statearr_32081_32164 = state_32076__$1;
(statearr_32081_32164[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (27))){
var inst_32024 = (state_32076[(9)]);
var inst_31944 = (state_32076[(10)]);
var inst_32017 = (state_32076[(11)]);
var inst_32019 = (state_32076[(12)]);
var inst_32024__$1 = cljs.core._nth.call(null,inst_32017,inst_32019);
var inst_32025 = cljs.core.async.put_BANG_.call(null,inst_32024__$1,inst_31944,done);
var state_32076__$1 = (function (){var statearr_32082 = state_32076;
(statearr_32082[(9)] = inst_32024__$1);

return statearr_32082;
})();
if(cljs.core.truth_(inst_32025)){
var statearr_32083_32165 = state_32076__$1;
(statearr_32083_32165[(1)] = (30));

} else {
var statearr_32084_32166 = state_32076__$1;
(statearr_32084_32166[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (1))){
var state_32076__$1 = state_32076;
var statearr_32085_32167 = state_32076__$1;
(statearr_32085_32167[(2)] = null);

(statearr_32085_32167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (24))){
var inst_31975 = (state_32076[(7)]);
var inst_31994 = (state_32076[(2)]);
var inst_31995 = cljs.core.next.call(null,inst_31975);
var inst_31953 = inst_31995;
var inst_31954 = null;
var inst_31955 = (0);
var inst_31956 = (0);
var state_32076__$1 = (function (){var statearr_32086 = state_32076;
(statearr_32086[(13)] = inst_31954);

(statearr_32086[(14)] = inst_31955);

(statearr_32086[(15)] = inst_31953);

(statearr_32086[(16)] = inst_31956);

(statearr_32086[(17)] = inst_31994);

return statearr_32086;
})();
var statearr_32087_32168 = state_32076__$1;
(statearr_32087_32168[(2)] = null);

(statearr_32087_32168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (39))){
var state_32076__$1 = state_32076;
var statearr_32091_32169 = state_32076__$1;
(statearr_32091_32169[(2)] = null);

(statearr_32091_32169[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (4))){
var inst_31944 = (state_32076[(10)]);
var inst_31944__$1 = (state_32076[(2)]);
var inst_31945 = (inst_31944__$1 == null);
var state_32076__$1 = (function (){var statearr_32092 = state_32076;
(statearr_32092[(10)] = inst_31944__$1);

return statearr_32092;
})();
if(cljs.core.truth_(inst_31945)){
var statearr_32093_32170 = state_32076__$1;
(statearr_32093_32170[(1)] = (5));

} else {
var statearr_32094_32171 = state_32076__$1;
(statearr_32094_32171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (15))){
var inst_31954 = (state_32076[(13)]);
var inst_31955 = (state_32076[(14)]);
var inst_31953 = (state_32076[(15)]);
var inst_31956 = (state_32076[(16)]);
var inst_31971 = (state_32076[(2)]);
var inst_31972 = (inst_31956 + (1));
var tmp32088 = inst_31954;
var tmp32089 = inst_31955;
var tmp32090 = inst_31953;
var inst_31953__$1 = tmp32090;
var inst_31954__$1 = tmp32088;
var inst_31955__$1 = tmp32089;
var inst_31956__$1 = inst_31972;
var state_32076__$1 = (function (){var statearr_32095 = state_32076;
(statearr_32095[(13)] = inst_31954__$1);

(statearr_32095[(14)] = inst_31955__$1);

(statearr_32095[(15)] = inst_31953__$1);

(statearr_32095[(16)] = inst_31956__$1);

(statearr_32095[(18)] = inst_31971);

return statearr_32095;
})();
var statearr_32096_32172 = state_32076__$1;
(statearr_32096_32172[(2)] = null);

(statearr_32096_32172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (21))){
var inst_31998 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32100_32173 = state_32076__$1;
(statearr_32100_32173[(2)] = inst_31998);

(statearr_32100_32173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (31))){
var inst_32024 = (state_32076[(9)]);
var inst_32028 = done.call(null,null);
var inst_32029 = cljs.core.async.untap_STAR_.call(null,m,inst_32024);
var state_32076__$1 = (function (){var statearr_32101 = state_32076;
(statearr_32101[(19)] = inst_32028);

return statearr_32101;
})();
var statearr_32102_32174 = state_32076__$1;
(statearr_32102_32174[(2)] = inst_32029);

(statearr_32102_32174[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (32))){
var inst_32018 = (state_32076[(20)]);
var inst_32017 = (state_32076[(11)]);
var inst_32019 = (state_32076[(12)]);
var inst_32016 = (state_32076[(21)]);
var inst_32031 = (state_32076[(2)]);
var inst_32032 = (inst_32019 + (1));
var tmp32097 = inst_32018;
var tmp32098 = inst_32017;
var tmp32099 = inst_32016;
var inst_32016__$1 = tmp32099;
var inst_32017__$1 = tmp32098;
var inst_32018__$1 = tmp32097;
var inst_32019__$1 = inst_32032;
var state_32076__$1 = (function (){var statearr_32103 = state_32076;
(statearr_32103[(20)] = inst_32018__$1);

(statearr_32103[(11)] = inst_32017__$1);

(statearr_32103[(22)] = inst_32031);

(statearr_32103[(12)] = inst_32019__$1);

(statearr_32103[(21)] = inst_32016__$1);

return statearr_32103;
})();
var statearr_32104_32175 = state_32076__$1;
(statearr_32104_32175[(2)] = null);

(statearr_32104_32175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (40))){
var inst_32044 = (state_32076[(23)]);
var inst_32048 = done.call(null,null);
var inst_32049 = cljs.core.async.untap_STAR_.call(null,m,inst_32044);
var state_32076__$1 = (function (){var statearr_32105 = state_32076;
(statearr_32105[(24)] = inst_32048);

return statearr_32105;
})();
var statearr_32106_32176 = state_32076__$1;
(statearr_32106_32176[(2)] = inst_32049);

(statearr_32106_32176[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (33))){
var inst_32035 = (state_32076[(25)]);
var inst_32037 = cljs.core.chunked_seq_QMARK_.call(null,inst_32035);
var state_32076__$1 = state_32076;
if(inst_32037){
var statearr_32107_32177 = state_32076__$1;
(statearr_32107_32177[(1)] = (36));

} else {
var statearr_32108_32178 = state_32076__$1;
(statearr_32108_32178[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (13))){
var inst_31965 = (state_32076[(26)]);
var inst_31968 = cljs.core.async.close_BANG_.call(null,inst_31965);
var state_32076__$1 = state_32076;
var statearr_32109_32179 = state_32076__$1;
(statearr_32109_32179[(2)] = inst_31968);

(statearr_32109_32179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (22))){
var inst_31988 = (state_32076[(8)]);
var inst_31991 = cljs.core.async.close_BANG_.call(null,inst_31988);
var state_32076__$1 = state_32076;
var statearr_32110_32180 = state_32076__$1;
(statearr_32110_32180[(2)] = inst_31991);

(statearr_32110_32180[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (36))){
var inst_32035 = (state_32076[(25)]);
var inst_32039 = cljs.core.chunk_first.call(null,inst_32035);
var inst_32040 = cljs.core.chunk_rest.call(null,inst_32035);
var inst_32041 = cljs.core.count.call(null,inst_32039);
var inst_32016 = inst_32040;
var inst_32017 = inst_32039;
var inst_32018 = inst_32041;
var inst_32019 = (0);
var state_32076__$1 = (function (){var statearr_32111 = state_32076;
(statearr_32111[(20)] = inst_32018);

(statearr_32111[(11)] = inst_32017);

(statearr_32111[(12)] = inst_32019);

(statearr_32111[(21)] = inst_32016);

return statearr_32111;
})();
var statearr_32112_32181 = state_32076__$1;
(statearr_32112_32181[(2)] = null);

(statearr_32112_32181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (41))){
var inst_32035 = (state_32076[(25)]);
var inst_32051 = (state_32076[(2)]);
var inst_32052 = cljs.core.next.call(null,inst_32035);
var inst_32016 = inst_32052;
var inst_32017 = null;
var inst_32018 = (0);
var inst_32019 = (0);
var state_32076__$1 = (function (){var statearr_32113 = state_32076;
(statearr_32113[(20)] = inst_32018);

(statearr_32113[(11)] = inst_32017);

(statearr_32113[(27)] = inst_32051);

(statearr_32113[(12)] = inst_32019);

(statearr_32113[(21)] = inst_32016);

return statearr_32113;
})();
var statearr_32114_32182 = state_32076__$1;
(statearr_32114_32182[(2)] = null);

(statearr_32114_32182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (43))){
var state_32076__$1 = state_32076;
var statearr_32115_32183 = state_32076__$1;
(statearr_32115_32183[(2)] = null);

(statearr_32115_32183[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (29))){
var inst_32060 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32116_32184 = state_32076__$1;
(statearr_32116_32184[(2)] = inst_32060);

(statearr_32116_32184[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (44))){
var inst_32069 = (state_32076[(2)]);
var state_32076__$1 = (function (){var statearr_32117 = state_32076;
(statearr_32117[(28)] = inst_32069);

return statearr_32117;
})();
var statearr_32118_32185 = state_32076__$1;
(statearr_32118_32185[(2)] = null);

(statearr_32118_32185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (6))){
var inst_32008 = (state_32076[(29)]);
var inst_32007 = cljs.core.deref.call(null,cs);
var inst_32008__$1 = cljs.core.keys.call(null,inst_32007);
var inst_32009 = cljs.core.count.call(null,inst_32008__$1);
var inst_32010 = cljs.core.reset_BANG_.call(null,dctr,inst_32009);
var inst_32015 = cljs.core.seq.call(null,inst_32008__$1);
var inst_32016 = inst_32015;
var inst_32017 = null;
var inst_32018 = (0);
var inst_32019 = (0);
var state_32076__$1 = (function (){var statearr_32119 = state_32076;
(statearr_32119[(20)] = inst_32018);

(statearr_32119[(11)] = inst_32017);

(statearr_32119[(29)] = inst_32008__$1);

(statearr_32119[(12)] = inst_32019);

(statearr_32119[(30)] = inst_32010);

(statearr_32119[(21)] = inst_32016);

return statearr_32119;
})();
var statearr_32120_32186 = state_32076__$1;
(statearr_32120_32186[(2)] = null);

(statearr_32120_32186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (28))){
var inst_32035 = (state_32076[(25)]);
var inst_32016 = (state_32076[(21)]);
var inst_32035__$1 = cljs.core.seq.call(null,inst_32016);
var state_32076__$1 = (function (){var statearr_32121 = state_32076;
(statearr_32121[(25)] = inst_32035__$1);

return statearr_32121;
})();
if(inst_32035__$1){
var statearr_32122_32187 = state_32076__$1;
(statearr_32122_32187[(1)] = (33));

} else {
var statearr_32123_32188 = state_32076__$1;
(statearr_32123_32188[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (25))){
var inst_32018 = (state_32076[(20)]);
var inst_32019 = (state_32076[(12)]);
var inst_32021 = (inst_32019 < inst_32018);
var inst_32022 = inst_32021;
var state_32076__$1 = state_32076;
if(cljs.core.truth_(inst_32022)){
var statearr_32124_32189 = state_32076__$1;
(statearr_32124_32189[(1)] = (27));

} else {
var statearr_32125_32190 = state_32076__$1;
(statearr_32125_32190[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (34))){
var state_32076__$1 = state_32076;
var statearr_32126_32191 = state_32076__$1;
(statearr_32126_32191[(2)] = null);

(statearr_32126_32191[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (17))){
var state_32076__$1 = state_32076;
var statearr_32127_32192 = state_32076__$1;
(statearr_32127_32192[(2)] = null);

(statearr_32127_32192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (3))){
var inst_32074 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32076__$1,inst_32074);
} else {
if((state_val_32077 === (12))){
var inst_32003 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32128_32193 = state_32076__$1;
(statearr_32128_32193[(2)] = inst_32003);

(statearr_32128_32193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (2))){
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32076__$1,(4),ch);
} else {
if((state_val_32077 === (23))){
var state_32076__$1 = state_32076;
var statearr_32129_32194 = state_32076__$1;
(statearr_32129_32194[(2)] = null);

(statearr_32129_32194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (35))){
var inst_32058 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32130_32195 = state_32076__$1;
(statearr_32130_32195[(2)] = inst_32058);

(statearr_32130_32195[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (19))){
var inst_31975 = (state_32076[(7)]);
var inst_31979 = cljs.core.chunk_first.call(null,inst_31975);
var inst_31980 = cljs.core.chunk_rest.call(null,inst_31975);
var inst_31981 = cljs.core.count.call(null,inst_31979);
var inst_31953 = inst_31980;
var inst_31954 = inst_31979;
var inst_31955 = inst_31981;
var inst_31956 = (0);
var state_32076__$1 = (function (){var statearr_32131 = state_32076;
(statearr_32131[(13)] = inst_31954);

(statearr_32131[(14)] = inst_31955);

(statearr_32131[(15)] = inst_31953);

(statearr_32131[(16)] = inst_31956);

return statearr_32131;
})();
var statearr_32132_32196 = state_32076__$1;
(statearr_32132_32196[(2)] = null);

(statearr_32132_32196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (11))){
var inst_31975 = (state_32076[(7)]);
var inst_31953 = (state_32076[(15)]);
var inst_31975__$1 = cljs.core.seq.call(null,inst_31953);
var state_32076__$1 = (function (){var statearr_32133 = state_32076;
(statearr_32133[(7)] = inst_31975__$1);

return statearr_32133;
})();
if(inst_31975__$1){
var statearr_32134_32197 = state_32076__$1;
(statearr_32134_32197[(1)] = (16));

} else {
var statearr_32135_32198 = state_32076__$1;
(statearr_32135_32198[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (9))){
var inst_32005 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32136_32199 = state_32076__$1;
(statearr_32136_32199[(2)] = inst_32005);

(statearr_32136_32199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (5))){
var inst_31951 = cljs.core.deref.call(null,cs);
var inst_31952 = cljs.core.seq.call(null,inst_31951);
var inst_31953 = inst_31952;
var inst_31954 = null;
var inst_31955 = (0);
var inst_31956 = (0);
var state_32076__$1 = (function (){var statearr_32137 = state_32076;
(statearr_32137[(13)] = inst_31954);

(statearr_32137[(14)] = inst_31955);

(statearr_32137[(15)] = inst_31953);

(statearr_32137[(16)] = inst_31956);

return statearr_32137;
})();
var statearr_32138_32200 = state_32076__$1;
(statearr_32138_32200[(2)] = null);

(statearr_32138_32200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (14))){
var state_32076__$1 = state_32076;
var statearr_32139_32201 = state_32076__$1;
(statearr_32139_32201[(2)] = null);

(statearr_32139_32201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (45))){
var inst_32066 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32140_32202 = state_32076__$1;
(statearr_32140_32202[(2)] = inst_32066);

(statearr_32140_32202[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (26))){
var inst_32008 = (state_32076[(29)]);
var inst_32062 = (state_32076[(2)]);
var inst_32063 = cljs.core.seq.call(null,inst_32008);
var state_32076__$1 = (function (){var statearr_32141 = state_32076;
(statearr_32141[(31)] = inst_32062);

return statearr_32141;
})();
if(inst_32063){
var statearr_32142_32203 = state_32076__$1;
(statearr_32142_32203[(1)] = (42));

} else {
var statearr_32143_32204 = state_32076__$1;
(statearr_32143_32204[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (16))){
var inst_31975 = (state_32076[(7)]);
var inst_31977 = cljs.core.chunked_seq_QMARK_.call(null,inst_31975);
var state_32076__$1 = state_32076;
if(inst_31977){
var statearr_32144_32205 = state_32076__$1;
(statearr_32144_32205[(1)] = (19));

} else {
var statearr_32145_32206 = state_32076__$1;
(statearr_32145_32206[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (38))){
var inst_32055 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32146_32207 = state_32076__$1;
(statearr_32146_32207[(2)] = inst_32055);

(statearr_32146_32207[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (30))){
var state_32076__$1 = state_32076;
var statearr_32147_32208 = state_32076__$1;
(statearr_32147_32208[(2)] = null);

(statearr_32147_32208[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (10))){
var inst_31954 = (state_32076[(13)]);
var inst_31956 = (state_32076[(16)]);
var inst_31964 = cljs.core._nth.call(null,inst_31954,inst_31956);
var inst_31965 = cljs.core.nth.call(null,inst_31964,(0),null);
var inst_31966 = cljs.core.nth.call(null,inst_31964,(1),null);
var state_32076__$1 = (function (){var statearr_32148 = state_32076;
(statearr_32148[(26)] = inst_31965);

return statearr_32148;
})();
if(cljs.core.truth_(inst_31966)){
var statearr_32149_32209 = state_32076__$1;
(statearr_32149_32209[(1)] = (13));

} else {
var statearr_32150_32210 = state_32076__$1;
(statearr_32150_32210[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (18))){
var inst_32001 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32151_32211 = state_32076__$1;
(statearr_32151_32211[(2)] = inst_32001);

(statearr_32151_32211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (42))){
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32076__$1,(45),dchan);
} else {
if((state_val_32077 === (37))){
var inst_32035 = (state_32076[(25)]);
var inst_31944 = (state_32076[(10)]);
var inst_32044 = (state_32076[(23)]);
var inst_32044__$1 = cljs.core.first.call(null,inst_32035);
var inst_32045 = cljs.core.async.put_BANG_.call(null,inst_32044__$1,inst_31944,done);
var state_32076__$1 = (function (){var statearr_32152 = state_32076;
(statearr_32152[(23)] = inst_32044__$1);

return statearr_32152;
})();
if(cljs.core.truth_(inst_32045)){
var statearr_32153_32212 = state_32076__$1;
(statearr_32153_32212[(1)] = (39));

} else {
var statearr_32154_32213 = state_32076__$1;
(statearr_32154_32213[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (8))){
var inst_31955 = (state_32076[(14)]);
var inst_31956 = (state_32076[(16)]);
var inst_31958 = (inst_31956 < inst_31955);
var inst_31959 = inst_31958;
var state_32076__$1 = state_32076;
if(cljs.core.truth_(inst_31959)){
var statearr_32155_32214 = state_32076__$1;
(statearr_32155_32214[(1)] = (10));

} else {
var statearr_32156_32215 = state_32076__$1;
(statearr_32156_32215[(1)] = (11));

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
});})(c__31356__auto___32161,cs,m,dchan,dctr,done))
;
return ((function (switch__31268__auto__,c__31356__auto___32161,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31269__auto__ = null;
var cljs$core$async$mult_$_state_machine__31269__auto____0 = (function (){
var statearr_32157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32157[(0)] = cljs$core$async$mult_$_state_machine__31269__auto__);

(statearr_32157[(1)] = (1));

return statearr_32157;
});
var cljs$core$async$mult_$_state_machine__31269__auto____1 = (function (state_32076){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_32076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e32158){if((e32158 instanceof Object)){
var ex__31272__auto__ = e32158;
var statearr_32159_32216 = state_32076;
(statearr_32159_32216[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32217 = state_32076;
state_32076 = G__32217;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31269__auto__ = function(state_32076){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31269__auto____1.call(this,state_32076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31269__auto____0;
cljs$core$async$mult_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31269__auto____1;
return cljs$core$async$mult_$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___32161,cs,m,dchan,dctr,done))
})();
var state__31358__auto__ = (function (){var statearr_32160 = f__31357__auto__.call(null);
(statearr_32160[(6)] = c__31356__auto___32161);

return statearr_32160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___32161,cs,m,dchan,dctr,done))
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
var G__32219 = arguments.length;
switch (G__32219) {
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
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
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
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
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
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m);
} else {
var m__28673__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m);
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
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,state_map);
} else {
var m__28673__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,state_map);
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
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,mode);
} else {
var m__28673__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___32231 = arguments.length;
var i__29159__auto___32232 = (0);
while(true){
if((i__29159__auto___32232 < len__29158__auto___32231)){
args__29165__auto__.push((arguments[i__29159__auto___32232]));

var G__32233 = (i__29159__auto___32232 + (1));
i__29159__auto___32232 = G__32233;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((3) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29166__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32225){
var map__32226 = p__32225;
var map__32226__$1 = ((((!((map__32226 == null)))?((((map__32226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32226):map__32226);
var opts = map__32226__$1;
var statearr_32228_32234 = state;
(statearr_32228_32234[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32226,map__32226__$1,opts){
return (function (val){
var statearr_32229_32235 = state;
(statearr_32229_32235[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32226,map__32226__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32230_32236 = state;
(statearr_32230_32236[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32221){
var G__32222 = cljs.core.first.call(null,seq32221);
var seq32221__$1 = cljs.core.next.call(null,seq32221);
var G__32223 = cljs.core.first.call(null,seq32221__$1);
var seq32221__$2 = cljs.core.next.call(null,seq32221__$1);
var G__32224 = cljs.core.first.call(null,seq32221__$2);
var seq32221__$3 = cljs.core.next.call(null,seq32221__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32222,G__32223,G__32224,seq32221__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32237 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32238){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32238 = meta32238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32239,meta32238__$1){
var self__ = this;
var _32239__$1 = this;
return (new cljs.core.async.t_cljs$core$async32237(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32238__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32239){
var self__ = this;
var _32239__$1 = this;
return self__.meta32238;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32237.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32238","meta32238",-1131352719,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32237";

cljs.core.async.t_cljs$core$async32237.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32237");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32237 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32237(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32238){
return (new cljs.core.async.t_cljs$core$async32237(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32238));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32237(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31356__auto___32401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___32401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___32401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32341){
var state_val_32342 = (state_32341[(1)]);
if((state_val_32342 === (7))){
var inst_32256 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
var statearr_32343_32402 = state_32341__$1;
(statearr_32343_32402[(2)] = inst_32256);

(statearr_32343_32402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (20))){
var inst_32268 = (state_32341[(7)]);
var state_32341__$1 = state_32341;
var statearr_32344_32403 = state_32341__$1;
(statearr_32344_32403[(2)] = inst_32268);

(statearr_32344_32403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (27))){
var state_32341__$1 = state_32341;
var statearr_32345_32404 = state_32341__$1;
(statearr_32345_32404[(2)] = null);

(statearr_32345_32404[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (1))){
var inst_32243 = (state_32341[(8)]);
var inst_32243__$1 = calc_state.call(null);
var inst_32245 = (inst_32243__$1 == null);
var inst_32246 = cljs.core.not.call(null,inst_32245);
var state_32341__$1 = (function (){var statearr_32346 = state_32341;
(statearr_32346[(8)] = inst_32243__$1);

return statearr_32346;
})();
if(inst_32246){
var statearr_32347_32405 = state_32341__$1;
(statearr_32347_32405[(1)] = (2));

} else {
var statearr_32348_32406 = state_32341__$1;
(statearr_32348_32406[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (24))){
var inst_32315 = (state_32341[(9)]);
var inst_32292 = (state_32341[(10)]);
var inst_32301 = (state_32341[(11)]);
var inst_32315__$1 = inst_32292.call(null,inst_32301);
var state_32341__$1 = (function (){var statearr_32349 = state_32341;
(statearr_32349[(9)] = inst_32315__$1);

return statearr_32349;
})();
if(cljs.core.truth_(inst_32315__$1)){
var statearr_32350_32407 = state_32341__$1;
(statearr_32350_32407[(1)] = (29));

} else {
var statearr_32351_32408 = state_32341__$1;
(statearr_32351_32408[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (4))){
var inst_32259 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
if(cljs.core.truth_(inst_32259)){
var statearr_32352_32409 = state_32341__$1;
(statearr_32352_32409[(1)] = (8));

} else {
var statearr_32353_32410 = state_32341__$1;
(statearr_32353_32410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (15))){
var inst_32286 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
if(cljs.core.truth_(inst_32286)){
var statearr_32354_32411 = state_32341__$1;
(statearr_32354_32411[(1)] = (19));

} else {
var statearr_32355_32412 = state_32341__$1;
(statearr_32355_32412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (21))){
var inst_32291 = (state_32341[(12)]);
var inst_32291__$1 = (state_32341[(2)]);
var inst_32292 = cljs.core.get.call(null,inst_32291__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32293 = cljs.core.get.call(null,inst_32291__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32294 = cljs.core.get.call(null,inst_32291__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32341__$1 = (function (){var statearr_32356 = state_32341;
(statearr_32356[(12)] = inst_32291__$1);

(statearr_32356[(10)] = inst_32292);

(statearr_32356[(13)] = inst_32293);

return statearr_32356;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32341__$1,(22),inst_32294);
} else {
if((state_val_32342 === (31))){
var inst_32323 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
if(cljs.core.truth_(inst_32323)){
var statearr_32357_32413 = state_32341__$1;
(statearr_32357_32413[(1)] = (32));

} else {
var statearr_32358_32414 = state_32341__$1;
(statearr_32358_32414[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (32))){
var inst_32300 = (state_32341[(14)]);
var state_32341__$1 = state_32341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32341__$1,(35),out,inst_32300);
} else {
if((state_val_32342 === (33))){
var inst_32291 = (state_32341[(12)]);
var inst_32268 = inst_32291;
var state_32341__$1 = (function (){var statearr_32359 = state_32341;
(statearr_32359[(7)] = inst_32268);

return statearr_32359;
})();
var statearr_32360_32415 = state_32341__$1;
(statearr_32360_32415[(2)] = null);

(statearr_32360_32415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (13))){
var inst_32268 = (state_32341[(7)]);
var inst_32275 = inst_32268.cljs$lang$protocol_mask$partition0$;
var inst_32276 = (inst_32275 & (64));
var inst_32277 = inst_32268.cljs$core$ISeq$;
var inst_32278 = (cljs.core.PROTOCOL_SENTINEL === inst_32277);
var inst_32279 = (inst_32276) || (inst_32278);
var state_32341__$1 = state_32341;
if(cljs.core.truth_(inst_32279)){
var statearr_32361_32416 = state_32341__$1;
(statearr_32361_32416[(1)] = (16));

} else {
var statearr_32362_32417 = state_32341__$1;
(statearr_32362_32417[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (22))){
var inst_32300 = (state_32341[(14)]);
var inst_32301 = (state_32341[(11)]);
var inst_32299 = (state_32341[(2)]);
var inst_32300__$1 = cljs.core.nth.call(null,inst_32299,(0),null);
var inst_32301__$1 = cljs.core.nth.call(null,inst_32299,(1),null);
var inst_32302 = (inst_32300__$1 == null);
var inst_32303 = cljs.core._EQ_.call(null,inst_32301__$1,change);
var inst_32304 = (inst_32302) || (inst_32303);
var state_32341__$1 = (function (){var statearr_32363 = state_32341;
(statearr_32363[(14)] = inst_32300__$1);

(statearr_32363[(11)] = inst_32301__$1);

return statearr_32363;
})();
if(cljs.core.truth_(inst_32304)){
var statearr_32364_32418 = state_32341__$1;
(statearr_32364_32418[(1)] = (23));

} else {
var statearr_32365_32419 = state_32341__$1;
(statearr_32365_32419[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (36))){
var inst_32291 = (state_32341[(12)]);
var inst_32268 = inst_32291;
var state_32341__$1 = (function (){var statearr_32366 = state_32341;
(statearr_32366[(7)] = inst_32268);

return statearr_32366;
})();
var statearr_32367_32420 = state_32341__$1;
(statearr_32367_32420[(2)] = null);

(statearr_32367_32420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (29))){
var inst_32315 = (state_32341[(9)]);
var state_32341__$1 = state_32341;
var statearr_32368_32421 = state_32341__$1;
(statearr_32368_32421[(2)] = inst_32315);

(statearr_32368_32421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (6))){
var state_32341__$1 = state_32341;
var statearr_32369_32422 = state_32341__$1;
(statearr_32369_32422[(2)] = false);

(statearr_32369_32422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (28))){
var inst_32311 = (state_32341[(2)]);
var inst_32312 = calc_state.call(null);
var inst_32268 = inst_32312;
var state_32341__$1 = (function (){var statearr_32370 = state_32341;
(statearr_32370[(15)] = inst_32311);

(statearr_32370[(7)] = inst_32268);

return statearr_32370;
})();
var statearr_32371_32423 = state_32341__$1;
(statearr_32371_32423[(2)] = null);

(statearr_32371_32423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (25))){
var inst_32337 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
var statearr_32372_32424 = state_32341__$1;
(statearr_32372_32424[(2)] = inst_32337);

(statearr_32372_32424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (34))){
var inst_32335 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
var statearr_32373_32425 = state_32341__$1;
(statearr_32373_32425[(2)] = inst_32335);

(statearr_32373_32425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (17))){
var state_32341__$1 = state_32341;
var statearr_32374_32426 = state_32341__$1;
(statearr_32374_32426[(2)] = false);

(statearr_32374_32426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (3))){
var state_32341__$1 = state_32341;
var statearr_32375_32427 = state_32341__$1;
(statearr_32375_32427[(2)] = false);

(statearr_32375_32427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (12))){
var inst_32339 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32341__$1,inst_32339);
} else {
if((state_val_32342 === (2))){
var inst_32243 = (state_32341[(8)]);
var inst_32248 = inst_32243.cljs$lang$protocol_mask$partition0$;
var inst_32249 = (inst_32248 & (64));
var inst_32250 = inst_32243.cljs$core$ISeq$;
var inst_32251 = (cljs.core.PROTOCOL_SENTINEL === inst_32250);
var inst_32252 = (inst_32249) || (inst_32251);
var state_32341__$1 = state_32341;
if(cljs.core.truth_(inst_32252)){
var statearr_32376_32428 = state_32341__$1;
(statearr_32376_32428[(1)] = (5));

} else {
var statearr_32377_32429 = state_32341__$1;
(statearr_32377_32429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (23))){
var inst_32300 = (state_32341[(14)]);
var inst_32306 = (inst_32300 == null);
var state_32341__$1 = state_32341;
if(cljs.core.truth_(inst_32306)){
var statearr_32378_32430 = state_32341__$1;
(statearr_32378_32430[(1)] = (26));

} else {
var statearr_32379_32431 = state_32341__$1;
(statearr_32379_32431[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (35))){
var inst_32326 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
if(cljs.core.truth_(inst_32326)){
var statearr_32380_32432 = state_32341__$1;
(statearr_32380_32432[(1)] = (36));

} else {
var statearr_32381_32433 = state_32341__$1;
(statearr_32381_32433[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (19))){
var inst_32268 = (state_32341[(7)]);
var inst_32288 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32268);
var state_32341__$1 = state_32341;
var statearr_32382_32434 = state_32341__$1;
(statearr_32382_32434[(2)] = inst_32288);

(statearr_32382_32434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (11))){
var inst_32268 = (state_32341[(7)]);
var inst_32272 = (inst_32268 == null);
var inst_32273 = cljs.core.not.call(null,inst_32272);
var state_32341__$1 = state_32341;
if(inst_32273){
var statearr_32383_32435 = state_32341__$1;
(statearr_32383_32435[(1)] = (13));

} else {
var statearr_32384_32436 = state_32341__$1;
(statearr_32384_32436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (9))){
var inst_32243 = (state_32341[(8)]);
var state_32341__$1 = state_32341;
var statearr_32385_32437 = state_32341__$1;
(statearr_32385_32437[(2)] = inst_32243);

(statearr_32385_32437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (5))){
var state_32341__$1 = state_32341;
var statearr_32386_32438 = state_32341__$1;
(statearr_32386_32438[(2)] = true);

(statearr_32386_32438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (14))){
var state_32341__$1 = state_32341;
var statearr_32387_32439 = state_32341__$1;
(statearr_32387_32439[(2)] = false);

(statearr_32387_32439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (26))){
var inst_32301 = (state_32341[(11)]);
var inst_32308 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32301);
var state_32341__$1 = state_32341;
var statearr_32388_32440 = state_32341__$1;
(statearr_32388_32440[(2)] = inst_32308);

(statearr_32388_32440[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (16))){
var state_32341__$1 = state_32341;
var statearr_32389_32441 = state_32341__$1;
(statearr_32389_32441[(2)] = true);

(statearr_32389_32441[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (38))){
var inst_32331 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
var statearr_32390_32442 = state_32341__$1;
(statearr_32390_32442[(2)] = inst_32331);

(statearr_32390_32442[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (30))){
var inst_32292 = (state_32341[(10)]);
var inst_32293 = (state_32341[(13)]);
var inst_32301 = (state_32341[(11)]);
var inst_32318 = cljs.core.empty_QMARK_.call(null,inst_32292);
var inst_32319 = inst_32293.call(null,inst_32301);
var inst_32320 = cljs.core.not.call(null,inst_32319);
var inst_32321 = (inst_32318) && (inst_32320);
var state_32341__$1 = state_32341;
var statearr_32391_32443 = state_32341__$1;
(statearr_32391_32443[(2)] = inst_32321);

(statearr_32391_32443[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (10))){
var inst_32243 = (state_32341[(8)]);
var inst_32264 = (state_32341[(2)]);
var inst_32265 = cljs.core.get.call(null,inst_32264,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32266 = cljs.core.get.call(null,inst_32264,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32267 = cljs.core.get.call(null,inst_32264,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32268 = inst_32243;
var state_32341__$1 = (function (){var statearr_32392 = state_32341;
(statearr_32392[(16)] = inst_32266);

(statearr_32392[(17)] = inst_32265);

(statearr_32392[(18)] = inst_32267);

(statearr_32392[(7)] = inst_32268);

return statearr_32392;
})();
var statearr_32393_32444 = state_32341__$1;
(statearr_32393_32444[(2)] = null);

(statearr_32393_32444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (18))){
var inst_32283 = (state_32341[(2)]);
var state_32341__$1 = state_32341;
var statearr_32394_32445 = state_32341__$1;
(statearr_32394_32445[(2)] = inst_32283);

(statearr_32394_32445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (37))){
var state_32341__$1 = state_32341;
var statearr_32395_32446 = state_32341__$1;
(statearr_32395_32446[(2)] = null);

(statearr_32395_32446[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32342 === (8))){
var inst_32243 = (state_32341[(8)]);
var inst_32261 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32243);
var state_32341__$1 = state_32341;
var statearr_32396_32447 = state_32341__$1;
(statearr_32396_32447[(2)] = inst_32261);

(statearr_32396_32447[(1)] = (10));


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
});})(c__31356__auto___32401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31268__auto__,c__31356__auto___32401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31269__auto__ = null;
var cljs$core$async$mix_$_state_machine__31269__auto____0 = (function (){
var statearr_32397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32397[(0)] = cljs$core$async$mix_$_state_machine__31269__auto__);

(statearr_32397[(1)] = (1));

return statearr_32397;
});
var cljs$core$async$mix_$_state_machine__31269__auto____1 = (function (state_32341){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_32341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e32398){if((e32398 instanceof Object)){
var ex__31272__auto__ = e32398;
var statearr_32399_32448 = state_32341;
(statearr_32399_32448[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32449 = state_32341;
state_32341 = G__32449;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31269__auto__ = function(state_32341){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31269__auto____1.call(this,state_32341);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31269__auto____0;
cljs$core$async$mix_$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31269__auto____1;
return cljs$core$async$mix_$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___32401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31358__auto__ = (function (){var statearr_32400 = f__31357__auto__.call(null);
(statearr_32400[(6)] = c__31356__auto___32401);

return statearr_32400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___32401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28673__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32451 = arguments.length;
switch (G__32451) {
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
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p);
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
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v);
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
var G__32455 = arguments.length;
switch (G__32455) {
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
var or__27989__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27989__auto__,mults){
return (function (p1__32453_SHARP_){
if(cljs.core.truth_(p1__32453_SHARP_.call(null,topic))){
return p1__32453_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32453_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27989__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32456 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32457){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32457 = meta32457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32458,meta32457__$1){
var self__ = this;
var _32458__$1 = this;
return (new cljs.core.async.t_cljs$core$async32456(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32457__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32458){
var self__ = this;
var _32458__$1 = this;
return self__.meta32457;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32456.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32457","meta32457",1650371050,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32456";

cljs.core.async.t_cljs$core$async32456.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32456");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32456 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32456(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32457){
return (new cljs.core.async.t_cljs$core$async32456(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32457));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32456(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31356__auto___32576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___32576,mults,ensure_mult,p){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___32576,mults,ensure_mult,p){
return (function (state_32530){
var state_val_32531 = (state_32530[(1)]);
if((state_val_32531 === (7))){
var inst_32526 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
var statearr_32532_32577 = state_32530__$1;
(statearr_32532_32577[(2)] = inst_32526);

(statearr_32532_32577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (20))){
var state_32530__$1 = state_32530;
var statearr_32533_32578 = state_32530__$1;
(statearr_32533_32578[(2)] = null);

(statearr_32533_32578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (1))){
var state_32530__$1 = state_32530;
var statearr_32534_32579 = state_32530__$1;
(statearr_32534_32579[(2)] = null);

(statearr_32534_32579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (24))){
var inst_32509 = (state_32530[(7)]);
var inst_32518 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32509);
var state_32530__$1 = state_32530;
var statearr_32535_32580 = state_32530__$1;
(statearr_32535_32580[(2)] = inst_32518);

(statearr_32535_32580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (4))){
var inst_32461 = (state_32530[(8)]);
var inst_32461__$1 = (state_32530[(2)]);
var inst_32462 = (inst_32461__$1 == null);
var state_32530__$1 = (function (){var statearr_32536 = state_32530;
(statearr_32536[(8)] = inst_32461__$1);

return statearr_32536;
})();
if(cljs.core.truth_(inst_32462)){
var statearr_32537_32581 = state_32530__$1;
(statearr_32537_32581[(1)] = (5));

} else {
var statearr_32538_32582 = state_32530__$1;
(statearr_32538_32582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (15))){
var inst_32503 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
var statearr_32539_32583 = state_32530__$1;
(statearr_32539_32583[(2)] = inst_32503);

(statearr_32539_32583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (21))){
var inst_32523 = (state_32530[(2)]);
var state_32530__$1 = (function (){var statearr_32540 = state_32530;
(statearr_32540[(9)] = inst_32523);

return statearr_32540;
})();
var statearr_32541_32584 = state_32530__$1;
(statearr_32541_32584[(2)] = null);

(statearr_32541_32584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (13))){
var inst_32485 = (state_32530[(10)]);
var inst_32487 = cljs.core.chunked_seq_QMARK_.call(null,inst_32485);
var state_32530__$1 = state_32530;
if(inst_32487){
var statearr_32542_32585 = state_32530__$1;
(statearr_32542_32585[(1)] = (16));

} else {
var statearr_32543_32586 = state_32530__$1;
(statearr_32543_32586[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (22))){
var inst_32515 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
if(cljs.core.truth_(inst_32515)){
var statearr_32544_32587 = state_32530__$1;
(statearr_32544_32587[(1)] = (23));

} else {
var statearr_32545_32588 = state_32530__$1;
(statearr_32545_32588[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (6))){
var inst_32509 = (state_32530[(7)]);
var inst_32461 = (state_32530[(8)]);
var inst_32511 = (state_32530[(11)]);
var inst_32509__$1 = topic_fn.call(null,inst_32461);
var inst_32510 = cljs.core.deref.call(null,mults);
var inst_32511__$1 = cljs.core.get.call(null,inst_32510,inst_32509__$1);
var state_32530__$1 = (function (){var statearr_32546 = state_32530;
(statearr_32546[(7)] = inst_32509__$1);

(statearr_32546[(11)] = inst_32511__$1);

return statearr_32546;
})();
if(cljs.core.truth_(inst_32511__$1)){
var statearr_32547_32589 = state_32530__$1;
(statearr_32547_32589[(1)] = (19));

} else {
var statearr_32548_32590 = state_32530__$1;
(statearr_32548_32590[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (25))){
var inst_32520 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
var statearr_32549_32591 = state_32530__$1;
(statearr_32549_32591[(2)] = inst_32520);

(statearr_32549_32591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (17))){
var inst_32485 = (state_32530[(10)]);
var inst_32494 = cljs.core.first.call(null,inst_32485);
var inst_32495 = cljs.core.async.muxch_STAR_.call(null,inst_32494);
var inst_32496 = cljs.core.async.close_BANG_.call(null,inst_32495);
var inst_32497 = cljs.core.next.call(null,inst_32485);
var inst_32471 = inst_32497;
var inst_32472 = null;
var inst_32473 = (0);
var inst_32474 = (0);
var state_32530__$1 = (function (){var statearr_32550 = state_32530;
(statearr_32550[(12)] = inst_32474);

(statearr_32550[(13)] = inst_32473);

(statearr_32550[(14)] = inst_32496);

(statearr_32550[(15)] = inst_32471);

(statearr_32550[(16)] = inst_32472);

return statearr_32550;
})();
var statearr_32551_32592 = state_32530__$1;
(statearr_32551_32592[(2)] = null);

(statearr_32551_32592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (3))){
var inst_32528 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32530__$1,inst_32528);
} else {
if((state_val_32531 === (12))){
var inst_32505 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
var statearr_32552_32593 = state_32530__$1;
(statearr_32552_32593[(2)] = inst_32505);

(statearr_32552_32593[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (2))){
var state_32530__$1 = state_32530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32530__$1,(4),ch);
} else {
if((state_val_32531 === (23))){
var state_32530__$1 = state_32530;
var statearr_32553_32594 = state_32530__$1;
(statearr_32553_32594[(2)] = null);

(statearr_32553_32594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (19))){
var inst_32461 = (state_32530[(8)]);
var inst_32511 = (state_32530[(11)]);
var inst_32513 = cljs.core.async.muxch_STAR_.call(null,inst_32511);
var state_32530__$1 = state_32530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32530__$1,(22),inst_32513,inst_32461);
} else {
if((state_val_32531 === (11))){
var inst_32485 = (state_32530[(10)]);
var inst_32471 = (state_32530[(15)]);
var inst_32485__$1 = cljs.core.seq.call(null,inst_32471);
var state_32530__$1 = (function (){var statearr_32554 = state_32530;
(statearr_32554[(10)] = inst_32485__$1);

return statearr_32554;
})();
if(inst_32485__$1){
var statearr_32555_32595 = state_32530__$1;
(statearr_32555_32595[(1)] = (13));

} else {
var statearr_32556_32596 = state_32530__$1;
(statearr_32556_32596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (9))){
var inst_32507 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
var statearr_32557_32597 = state_32530__$1;
(statearr_32557_32597[(2)] = inst_32507);

(statearr_32557_32597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (5))){
var inst_32468 = cljs.core.deref.call(null,mults);
var inst_32469 = cljs.core.vals.call(null,inst_32468);
var inst_32470 = cljs.core.seq.call(null,inst_32469);
var inst_32471 = inst_32470;
var inst_32472 = null;
var inst_32473 = (0);
var inst_32474 = (0);
var state_32530__$1 = (function (){var statearr_32558 = state_32530;
(statearr_32558[(12)] = inst_32474);

(statearr_32558[(13)] = inst_32473);

(statearr_32558[(15)] = inst_32471);

(statearr_32558[(16)] = inst_32472);

return statearr_32558;
})();
var statearr_32559_32598 = state_32530__$1;
(statearr_32559_32598[(2)] = null);

(statearr_32559_32598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (14))){
var state_32530__$1 = state_32530;
var statearr_32563_32599 = state_32530__$1;
(statearr_32563_32599[(2)] = null);

(statearr_32563_32599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (16))){
var inst_32485 = (state_32530[(10)]);
var inst_32489 = cljs.core.chunk_first.call(null,inst_32485);
var inst_32490 = cljs.core.chunk_rest.call(null,inst_32485);
var inst_32491 = cljs.core.count.call(null,inst_32489);
var inst_32471 = inst_32490;
var inst_32472 = inst_32489;
var inst_32473 = inst_32491;
var inst_32474 = (0);
var state_32530__$1 = (function (){var statearr_32564 = state_32530;
(statearr_32564[(12)] = inst_32474);

(statearr_32564[(13)] = inst_32473);

(statearr_32564[(15)] = inst_32471);

(statearr_32564[(16)] = inst_32472);

return statearr_32564;
})();
var statearr_32565_32600 = state_32530__$1;
(statearr_32565_32600[(2)] = null);

(statearr_32565_32600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (10))){
var inst_32474 = (state_32530[(12)]);
var inst_32473 = (state_32530[(13)]);
var inst_32471 = (state_32530[(15)]);
var inst_32472 = (state_32530[(16)]);
var inst_32479 = cljs.core._nth.call(null,inst_32472,inst_32474);
var inst_32480 = cljs.core.async.muxch_STAR_.call(null,inst_32479);
var inst_32481 = cljs.core.async.close_BANG_.call(null,inst_32480);
var inst_32482 = (inst_32474 + (1));
var tmp32560 = inst_32473;
var tmp32561 = inst_32471;
var tmp32562 = inst_32472;
var inst_32471__$1 = tmp32561;
var inst_32472__$1 = tmp32562;
var inst_32473__$1 = tmp32560;
var inst_32474__$1 = inst_32482;
var state_32530__$1 = (function (){var statearr_32566 = state_32530;
(statearr_32566[(12)] = inst_32474__$1);

(statearr_32566[(13)] = inst_32473__$1);

(statearr_32566[(15)] = inst_32471__$1);

(statearr_32566[(17)] = inst_32481);

(statearr_32566[(16)] = inst_32472__$1);

return statearr_32566;
})();
var statearr_32567_32601 = state_32530__$1;
(statearr_32567_32601[(2)] = null);

(statearr_32567_32601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (18))){
var inst_32500 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
var statearr_32568_32602 = state_32530__$1;
(statearr_32568_32602[(2)] = inst_32500);

(statearr_32568_32602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32531 === (8))){
var inst_32474 = (state_32530[(12)]);
var inst_32473 = (state_32530[(13)]);
var inst_32476 = (inst_32474 < inst_32473);
var inst_32477 = inst_32476;
var state_32530__$1 = state_32530;
if(cljs.core.truth_(inst_32477)){
var statearr_32569_32603 = state_32530__$1;
(statearr_32569_32603[(1)] = (10));

} else {
var statearr_32570_32604 = state_32530__$1;
(statearr_32570_32604[(1)] = (11));

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
});})(c__31356__auto___32576,mults,ensure_mult,p))
;
return ((function (switch__31268__auto__,c__31356__auto___32576,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31269__auto__ = null;
var cljs$core$async$state_machine__31269__auto____0 = (function (){
var statearr_32571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32571[(0)] = cljs$core$async$state_machine__31269__auto__);

(statearr_32571[(1)] = (1));

return statearr_32571;
});
var cljs$core$async$state_machine__31269__auto____1 = (function (state_32530){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_32530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e32572){if((e32572 instanceof Object)){
var ex__31272__auto__ = e32572;
var statearr_32573_32605 = state_32530;
(statearr_32573_32605[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32606 = state_32530;
state_32530 = G__32606;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$state_machine__31269__auto__ = function(state_32530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31269__auto____1.call(this,state_32530);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31269__auto____0;
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31269__auto____1;
return cljs$core$async$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___32576,mults,ensure_mult,p))
})();
var state__31358__auto__ = (function (){var statearr_32574 = f__31357__auto__.call(null);
(statearr_32574[(6)] = c__31356__auto___32576);

return statearr_32574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___32576,mults,ensure_mult,p))
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
var G__32608 = arguments.length;
switch (G__32608) {
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
var G__32611 = arguments.length;
switch (G__32611) {
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
var G__32614 = arguments.length;
switch (G__32614) {
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
var c__31356__auto___32681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___32681,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___32681,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32653){
var state_val_32654 = (state_32653[(1)]);
if((state_val_32654 === (7))){
var state_32653__$1 = state_32653;
var statearr_32655_32682 = state_32653__$1;
(statearr_32655_32682[(2)] = null);

(statearr_32655_32682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (1))){
var state_32653__$1 = state_32653;
var statearr_32656_32683 = state_32653__$1;
(statearr_32656_32683[(2)] = null);

(statearr_32656_32683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (4))){
var inst_32617 = (state_32653[(7)]);
var inst_32619 = (inst_32617 < cnt);
var state_32653__$1 = state_32653;
if(cljs.core.truth_(inst_32619)){
var statearr_32657_32684 = state_32653__$1;
(statearr_32657_32684[(1)] = (6));

} else {
var statearr_32658_32685 = state_32653__$1;
(statearr_32658_32685[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (15))){
var inst_32649 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32659_32686 = state_32653__$1;
(statearr_32659_32686[(2)] = inst_32649);

(statearr_32659_32686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (13))){
var inst_32642 = cljs.core.async.close_BANG_.call(null,out);
var state_32653__$1 = state_32653;
var statearr_32660_32687 = state_32653__$1;
(statearr_32660_32687[(2)] = inst_32642);

(statearr_32660_32687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (6))){
var state_32653__$1 = state_32653;
var statearr_32661_32688 = state_32653__$1;
(statearr_32661_32688[(2)] = null);

(statearr_32661_32688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (3))){
var inst_32651 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32653__$1,inst_32651);
} else {
if((state_val_32654 === (12))){
var inst_32639 = (state_32653[(8)]);
var inst_32639__$1 = (state_32653[(2)]);
var inst_32640 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32639__$1);
var state_32653__$1 = (function (){var statearr_32662 = state_32653;
(statearr_32662[(8)] = inst_32639__$1);

return statearr_32662;
})();
if(cljs.core.truth_(inst_32640)){
var statearr_32663_32689 = state_32653__$1;
(statearr_32663_32689[(1)] = (13));

} else {
var statearr_32664_32690 = state_32653__$1;
(statearr_32664_32690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (2))){
var inst_32616 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32617 = (0);
var state_32653__$1 = (function (){var statearr_32665 = state_32653;
(statearr_32665[(9)] = inst_32616);

(statearr_32665[(7)] = inst_32617);

return statearr_32665;
})();
var statearr_32666_32691 = state_32653__$1;
(statearr_32666_32691[(2)] = null);

(statearr_32666_32691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (11))){
var inst_32617 = (state_32653[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32653,(10),Object,null,(9));
var inst_32626 = chs__$1.call(null,inst_32617);
var inst_32627 = done.call(null,inst_32617);
var inst_32628 = cljs.core.async.take_BANG_.call(null,inst_32626,inst_32627);
var state_32653__$1 = state_32653;
var statearr_32667_32692 = state_32653__$1;
(statearr_32667_32692[(2)] = inst_32628);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32653__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (9))){
var inst_32617 = (state_32653[(7)]);
var inst_32630 = (state_32653[(2)]);
var inst_32631 = (inst_32617 + (1));
var inst_32617__$1 = inst_32631;
var state_32653__$1 = (function (){var statearr_32668 = state_32653;
(statearr_32668[(7)] = inst_32617__$1);

(statearr_32668[(10)] = inst_32630);

return statearr_32668;
})();
var statearr_32669_32693 = state_32653__$1;
(statearr_32669_32693[(2)] = null);

(statearr_32669_32693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (5))){
var inst_32637 = (state_32653[(2)]);
var state_32653__$1 = (function (){var statearr_32670 = state_32653;
(statearr_32670[(11)] = inst_32637);

return statearr_32670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32653__$1,(12),dchan);
} else {
if((state_val_32654 === (14))){
var inst_32639 = (state_32653[(8)]);
var inst_32644 = cljs.core.apply.call(null,f,inst_32639);
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32653__$1,(16),out,inst_32644);
} else {
if((state_val_32654 === (16))){
var inst_32646 = (state_32653[(2)]);
var state_32653__$1 = (function (){var statearr_32671 = state_32653;
(statearr_32671[(12)] = inst_32646);

return statearr_32671;
})();
var statearr_32672_32694 = state_32653__$1;
(statearr_32672_32694[(2)] = null);

(statearr_32672_32694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (10))){
var inst_32621 = (state_32653[(2)]);
var inst_32622 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32653__$1 = (function (){var statearr_32673 = state_32653;
(statearr_32673[(13)] = inst_32621);

return statearr_32673;
})();
var statearr_32674_32695 = state_32653__$1;
(statearr_32674_32695[(2)] = inst_32622);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32653__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (8))){
var inst_32635 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32675_32696 = state_32653__$1;
(statearr_32675_32696[(2)] = inst_32635);

(statearr_32675_32696[(1)] = (5));


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
});})(c__31356__auto___32681,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31268__auto__,c__31356__auto___32681,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31269__auto__ = null;
var cljs$core$async$state_machine__31269__auto____0 = (function (){
var statearr_32676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32676[(0)] = cljs$core$async$state_machine__31269__auto__);

(statearr_32676[(1)] = (1));

return statearr_32676;
});
var cljs$core$async$state_machine__31269__auto____1 = (function (state_32653){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_32653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e32677){if((e32677 instanceof Object)){
var ex__31272__auto__ = e32677;
var statearr_32678_32697 = state_32653;
(statearr_32678_32697[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32698 = state_32653;
state_32653 = G__32698;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$state_machine__31269__auto__ = function(state_32653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31269__auto____1.call(this,state_32653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31269__auto____0;
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31269__auto____1;
return cljs$core$async$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___32681,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31358__auto__ = (function (){var statearr_32679 = f__31357__auto__.call(null);
(statearr_32679[(6)] = c__31356__auto___32681);

return statearr_32679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___32681,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32701 = arguments.length;
switch (G__32701) {
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
var c__31356__auto___32755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___32755,out){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___32755,out){
return (function (state_32733){
var state_val_32734 = (state_32733[(1)]);
if((state_val_32734 === (7))){
var inst_32713 = (state_32733[(7)]);
var inst_32712 = (state_32733[(8)]);
var inst_32712__$1 = (state_32733[(2)]);
var inst_32713__$1 = cljs.core.nth.call(null,inst_32712__$1,(0),null);
var inst_32714 = cljs.core.nth.call(null,inst_32712__$1,(1),null);
var inst_32715 = (inst_32713__$1 == null);
var state_32733__$1 = (function (){var statearr_32735 = state_32733;
(statearr_32735[(9)] = inst_32714);

(statearr_32735[(7)] = inst_32713__$1);

(statearr_32735[(8)] = inst_32712__$1);

return statearr_32735;
})();
if(cljs.core.truth_(inst_32715)){
var statearr_32736_32756 = state_32733__$1;
(statearr_32736_32756[(1)] = (8));

} else {
var statearr_32737_32757 = state_32733__$1;
(statearr_32737_32757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (1))){
var inst_32702 = cljs.core.vec.call(null,chs);
var inst_32703 = inst_32702;
var state_32733__$1 = (function (){var statearr_32738 = state_32733;
(statearr_32738[(10)] = inst_32703);

return statearr_32738;
})();
var statearr_32739_32758 = state_32733__$1;
(statearr_32739_32758[(2)] = null);

(statearr_32739_32758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (4))){
var inst_32703 = (state_32733[(10)]);
var state_32733__$1 = state_32733;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32733__$1,(7),inst_32703);
} else {
if((state_val_32734 === (6))){
var inst_32729 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
var statearr_32740_32759 = state_32733__$1;
(statearr_32740_32759[(2)] = inst_32729);

(statearr_32740_32759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (3))){
var inst_32731 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32733__$1,inst_32731);
} else {
if((state_val_32734 === (2))){
var inst_32703 = (state_32733[(10)]);
var inst_32705 = cljs.core.count.call(null,inst_32703);
var inst_32706 = (inst_32705 > (0));
var state_32733__$1 = state_32733;
if(cljs.core.truth_(inst_32706)){
var statearr_32742_32760 = state_32733__$1;
(statearr_32742_32760[(1)] = (4));

} else {
var statearr_32743_32761 = state_32733__$1;
(statearr_32743_32761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (11))){
var inst_32703 = (state_32733[(10)]);
var inst_32722 = (state_32733[(2)]);
var tmp32741 = inst_32703;
var inst_32703__$1 = tmp32741;
var state_32733__$1 = (function (){var statearr_32744 = state_32733;
(statearr_32744[(11)] = inst_32722);

(statearr_32744[(10)] = inst_32703__$1);

return statearr_32744;
})();
var statearr_32745_32762 = state_32733__$1;
(statearr_32745_32762[(2)] = null);

(statearr_32745_32762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (9))){
var inst_32713 = (state_32733[(7)]);
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32733__$1,(11),out,inst_32713);
} else {
if((state_val_32734 === (5))){
var inst_32727 = cljs.core.async.close_BANG_.call(null,out);
var state_32733__$1 = state_32733;
var statearr_32746_32763 = state_32733__$1;
(statearr_32746_32763[(2)] = inst_32727);

(statearr_32746_32763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (10))){
var inst_32725 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
var statearr_32747_32764 = state_32733__$1;
(statearr_32747_32764[(2)] = inst_32725);

(statearr_32747_32764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (8))){
var inst_32714 = (state_32733[(9)]);
var inst_32713 = (state_32733[(7)]);
var inst_32703 = (state_32733[(10)]);
var inst_32712 = (state_32733[(8)]);
var inst_32717 = (function (){var cs = inst_32703;
var vec__32708 = inst_32712;
var v = inst_32713;
var c = inst_32714;
return ((function (cs,vec__32708,v,c,inst_32714,inst_32713,inst_32703,inst_32712,state_val_32734,c__31356__auto___32755,out){
return (function (p1__32699_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32699_SHARP_);
});
;})(cs,vec__32708,v,c,inst_32714,inst_32713,inst_32703,inst_32712,state_val_32734,c__31356__auto___32755,out))
})();
var inst_32718 = cljs.core.filterv.call(null,inst_32717,inst_32703);
var inst_32703__$1 = inst_32718;
var state_32733__$1 = (function (){var statearr_32748 = state_32733;
(statearr_32748[(10)] = inst_32703__$1);

return statearr_32748;
})();
var statearr_32749_32765 = state_32733__$1;
(statearr_32749_32765[(2)] = null);

(statearr_32749_32765[(1)] = (2));


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
});})(c__31356__auto___32755,out))
;
return ((function (switch__31268__auto__,c__31356__auto___32755,out){
return (function() {
var cljs$core$async$state_machine__31269__auto__ = null;
var cljs$core$async$state_machine__31269__auto____0 = (function (){
var statearr_32750 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32750[(0)] = cljs$core$async$state_machine__31269__auto__);

(statearr_32750[(1)] = (1));

return statearr_32750;
});
var cljs$core$async$state_machine__31269__auto____1 = (function (state_32733){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_32733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e32751){if((e32751 instanceof Object)){
var ex__31272__auto__ = e32751;
var statearr_32752_32766 = state_32733;
(statearr_32752_32766[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32767 = state_32733;
state_32733 = G__32767;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$state_machine__31269__auto__ = function(state_32733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31269__auto____1.call(this,state_32733);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31269__auto____0;
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31269__auto____1;
return cljs$core$async$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___32755,out))
})();
var state__31358__auto__ = (function (){var statearr_32753 = f__31357__auto__.call(null);
(statearr_32753[(6)] = c__31356__auto___32755);

return statearr_32753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___32755,out))
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
var G__32769 = arguments.length;
switch (G__32769) {
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
var c__31356__auto___32814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___32814,out){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___32814,out){
return (function (state_32793){
var state_val_32794 = (state_32793[(1)]);
if((state_val_32794 === (7))){
var inst_32775 = (state_32793[(7)]);
var inst_32775__$1 = (state_32793[(2)]);
var inst_32776 = (inst_32775__$1 == null);
var inst_32777 = cljs.core.not.call(null,inst_32776);
var state_32793__$1 = (function (){var statearr_32795 = state_32793;
(statearr_32795[(7)] = inst_32775__$1);

return statearr_32795;
})();
if(inst_32777){
var statearr_32796_32815 = state_32793__$1;
(statearr_32796_32815[(1)] = (8));

} else {
var statearr_32797_32816 = state_32793__$1;
(statearr_32797_32816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (1))){
var inst_32770 = (0);
var state_32793__$1 = (function (){var statearr_32798 = state_32793;
(statearr_32798[(8)] = inst_32770);

return statearr_32798;
})();
var statearr_32799_32817 = state_32793__$1;
(statearr_32799_32817[(2)] = null);

(statearr_32799_32817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (4))){
var state_32793__$1 = state_32793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32793__$1,(7),ch);
} else {
if((state_val_32794 === (6))){
var inst_32788 = (state_32793[(2)]);
var state_32793__$1 = state_32793;
var statearr_32800_32818 = state_32793__$1;
(statearr_32800_32818[(2)] = inst_32788);

(statearr_32800_32818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (3))){
var inst_32790 = (state_32793[(2)]);
var inst_32791 = cljs.core.async.close_BANG_.call(null,out);
var state_32793__$1 = (function (){var statearr_32801 = state_32793;
(statearr_32801[(9)] = inst_32790);

return statearr_32801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32793__$1,inst_32791);
} else {
if((state_val_32794 === (2))){
var inst_32770 = (state_32793[(8)]);
var inst_32772 = (inst_32770 < n);
var state_32793__$1 = state_32793;
if(cljs.core.truth_(inst_32772)){
var statearr_32802_32819 = state_32793__$1;
(statearr_32802_32819[(1)] = (4));

} else {
var statearr_32803_32820 = state_32793__$1;
(statearr_32803_32820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (11))){
var inst_32770 = (state_32793[(8)]);
var inst_32780 = (state_32793[(2)]);
var inst_32781 = (inst_32770 + (1));
var inst_32770__$1 = inst_32781;
var state_32793__$1 = (function (){var statearr_32804 = state_32793;
(statearr_32804[(10)] = inst_32780);

(statearr_32804[(8)] = inst_32770__$1);

return statearr_32804;
})();
var statearr_32805_32821 = state_32793__$1;
(statearr_32805_32821[(2)] = null);

(statearr_32805_32821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (9))){
var state_32793__$1 = state_32793;
var statearr_32806_32822 = state_32793__$1;
(statearr_32806_32822[(2)] = null);

(statearr_32806_32822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (5))){
var state_32793__$1 = state_32793;
var statearr_32807_32823 = state_32793__$1;
(statearr_32807_32823[(2)] = null);

(statearr_32807_32823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (10))){
var inst_32785 = (state_32793[(2)]);
var state_32793__$1 = state_32793;
var statearr_32808_32824 = state_32793__$1;
(statearr_32808_32824[(2)] = inst_32785);

(statearr_32808_32824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (8))){
var inst_32775 = (state_32793[(7)]);
var state_32793__$1 = state_32793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32793__$1,(11),out,inst_32775);
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
});})(c__31356__auto___32814,out))
;
return ((function (switch__31268__auto__,c__31356__auto___32814,out){
return (function() {
var cljs$core$async$state_machine__31269__auto__ = null;
var cljs$core$async$state_machine__31269__auto____0 = (function (){
var statearr_32809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32809[(0)] = cljs$core$async$state_machine__31269__auto__);

(statearr_32809[(1)] = (1));

return statearr_32809;
});
var cljs$core$async$state_machine__31269__auto____1 = (function (state_32793){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_32793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e32810){if((e32810 instanceof Object)){
var ex__31272__auto__ = e32810;
var statearr_32811_32825 = state_32793;
(statearr_32811_32825[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32826 = state_32793;
state_32793 = G__32826;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$state_machine__31269__auto__ = function(state_32793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31269__auto____1.call(this,state_32793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31269__auto____0;
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31269__auto____1;
return cljs$core$async$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___32814,out))
})();
var state__31358__auto__ = (function (){var statearr_32812 = f__31357__auto__.call(null);
(statearr_32812[(6)] = c__31356__auto___32814);

return statearr_32812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___32814,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32828 = (function (f,ch,meta32829){
this.f = f;
this.ch = ch;
this.meta32829 = meta32829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32830,meta32829__$1){
var self__ = this;
var _32830__$1 = this;
return (new cljs.core.async.t_cljs$core$async32828(self__.f,self__.ch,meta32829__$1));
});

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32830){
var self__ = this;
var _32830__$1 = this;
return self__.meta32829;
});

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32831 = (function (f,ch,meta32829,_,fn1,meta32832){
this.f = f;
this.ch = ch;
this.meta32829 = meta32829;
this._ = _;
this.fn1 = fn1;
this.meta32832 = meta32832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32833,meta32832__$1){
var self__ = this;
var _32833__$1 = this;
return (new cljs.core.async.t_cljs$core$async32831(self__.f,self__.ch,self__.meta32829,self__._,self__.fn1,meta32832__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32833){
var self__ = this;
var _32833__$1 = this;
return self__.meta32832;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32827_SHARP_){
return f1.call(null,(((p1__32827_SHARP_ == null))?null:self__.f.call(null,p1__32827_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32829","meta32829",-1753990631,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32828","cljs.core.async/t_cljs$core$async32828",505402571,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32832","meta32832",-709029909,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32831";

cljs.core.async.t_cljs$core$async32831.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32831");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32831 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32831(f__$1,ch__$1,meta32829__$1,___$2,fn1__$1,meta32832){
return (new cljs.core.async.t_cljs$core$async32831(f__$1,ch__$1,meta32829__$1,___$2,fn1__$1,meta32832));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32831(self__.f,self__.ch,self__.meta32829,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27977__auto__ = ret;
if(cljs.core.truth_(and__27977__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27977__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32829","meta32829",-1753990631,null)], null);
});

cljs.core.async.t_cljs$core$async32828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32828";

cljs.core.async.t_cljs$core$async32828.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32828");
});

cljs.core.async.__GT_t_cljs$core$async32828 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32828(f__$1,ch__$1,meta32829){
return (new cljs.core.async.t_cljs$core$async32828(f__$1,ch__$1,meta32829));
});

}

return (new cljs.core.async.t_cljs$core$async32828(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32834 = (function (f,ch,meta32835){
this.f = f;
this.ch = ch;
this.meta32835 = meta32835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32836,meta32835__$1){
var self__ = this;
var _32836__$1 = this;
return (new cljs.core.async.t_cljs$core$async32834(self__.f,self__.ch,meta32835__$1));
});

cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32836){
var self__ = this;
var _32836__$1 = this;
return self__.meta32835;
});

cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32835","meta32835",-1325066514,null)], null);
});

cljs.core.async.t_cljs$core$async32834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32834";

cljs.core.async.t_cljs$core$async32834.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32834");
});

cljs.core.async.__GT_t_cljs$core$async32834 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32834(f__$1,ch__$1,meta32835){
return (new cljs.core.async.t_cljs$core$async32834(f__$1,ch__$1,meta32835));
});

}

return (new cljs.core.async.t_cljs$core$async32834(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32837 = (function (p,ch,meta32838){
this.p = p;
this.ch = ch;
this.meta32838 = meta32838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32839,meta32838__$1){
var self__ = this;
var _32839__$1 = this;
return (new cljs.core.async.t_cljs$core$async32837(self__.p,self__.ch,meta32838__$1));
});

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32839){
var self__ = this;
var _32839__$1 = this;
return self__.meta32838;
});

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32837.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32838","meta32838",1074754630,null)], null);
});

cljs.core.async.t_cljs$core$async32837.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32837";

cljs.core.async.t_cljs$core$async32837.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32837");
});

cljs.core.async.__GT_t_cljs$core$async32837 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32837(p__$1,ch__$1,meta32838){
return (new cljs.core.async.t_cljs$core$async32837(p__$1,ch__$1,meta32838));
});

}

return (new cljs.core.async.t_cljs$core$async32837(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32841 = arguments.length;
switch (G__32841) {
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
var c__31356__auto___32881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___32881,out){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___32881,out){
return (function (state_32862){
var state_val_32863 = (state_32862[(1)]);
if((state_val_32863 === (7))){
var inst_32858 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32864_32882 = state_32862__$1;
(statearr_32864_32882[(2)] = inst_32858);

(statearr_32864_32882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (1))){
var state_32862__$1 = state_32862;
var statearr_32865_32883 = state_32862__$1;
(statearr_32865_32883[(2)] = null);

(statearr_32865_32883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (4))){
var inst_32844 = (state_32862[(7)]);
var inst_32844__$1 = (state_32862[(2)]);
var inst_32845 = (inst_32844__$1 == null);
var state_32862__$1 = (function (){var statearr_32866 = state_32862;
(statearr_32866[(7)] = inst_32844__$1);

return statearr_32866;
})();
if(cljs.core.truth_(inst_32845)){
var statearr_32867_32884 = state_32862__$1;
(statearr_32867_32884[(1)] = (5));

} else {
var statearr_32868_32885 = state_32862__$1;
(statearr_32868_32885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (6))){
var inst_32844 = (state_32862[(7)]);
var inst_32849 = p.call(null,inst_32844);
var state_32862__$1 = state_32862;
if(cljs.core.truth_(inst_32849)){
var statearr_32869_32886 = state_32862__$1;
(statearr_32869_32886[(1)] = (8));

} else {
var statearr_32870_32887 = state_32862__$1;
(statearr_32870_32887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (3))){
var inst_32860 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32862__$1,inst_32860);
} else {
if((state_val_32863 === (2))){
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32862__$1,(4),ch);
} else {
if((state_val_32863 === (11))){
var inst_32852 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32871_32888 = state_32862__$1;
(statearr_32871_32888[(2)] = inst_32852);

(statearr_32871_32888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (9))){
var state_32862__$1 = state_32862;
var statearr_32872_32889 = state_32862__$1;
(statearr_32872_32889[(2)] = null);

(statearr_32872_32889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (5))){
var inst_32847 = cljs.core.async.close_BANG_.call(null,out);
var state_32862__$1 = state_32862;
var statearr_32873_32890 = state_32862__$1;
(statearr_32873_32890[(2)] = inst_32847);

(statearr_32873_32890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (10))){
var inst_32855 = (state_32862[(2)]);
var state_32862__$1 = (function (){var statearr_32874 = state_32862;
(statearr_32874[(8)] = inst_32855);

return statearr_32874;
})();
var statearr_32875_32891 = state_32862__$1;
(statearr_32875_32891[(2)] = null);

(statearr_32875_32891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (8))){
var inst_32844 = (state_32862[(7)]);
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32862__$1,(11),out,inst_32844);
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
});})(c__31356__auto___32881,out))
;
return ((function (switch__31268__auto__,c__31356__auto___32881,out){
return (function() {
var cljs$core$async$state_machine__31269__auto__ = null;
var cljs$core$async$state_machine__31269__auto____0 = (function (){
var statearr_32876 = [null,null,null,null,null,null,null,null,null];
(statearr_32876[(0)] = cljs$core$async$state_machine__31269__auto__);

(statearr_32876[(1)] = (1));

return statearr_32876;
});
var cljs$core$async$state_machine__31269__auto____1 = (function (state_32862){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_32862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e32877){if((e32877 instanceof Object)){
var ex__31272__auto__ = e32877;
var statearr_32878_32892 = state_32862;
(statearr_32878_32892[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32893 = state_32862;
state_32862 = G__32893;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$state_machine__31269__auto__ = function(state_32862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31269__auto____1.call(this,state_32862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31269__auto____0;
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31269__auto____1;
return cljs$core$async$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___32881,out))
})();
var state__31358__auto__ = (function (){var statearr_32879 = f__31357__auto__.call(null);
(statearr_32879[(6)] = c__31356__auto___32881);

return statearr_32879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___32881,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32895 = arguments.length;
switch (G__32895) {
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
var c__31356__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto__){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto__){
return (function (state_32958){
var state_val_32959 = (state_32958[(1)]);
if((state_val_32959 === (7))){
var inst_32954 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_32960_32998 = state_32958__$1;
(statearr_32960_32998[(2)] = inst_32954);

(statearr_32960_32998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (20))){
var inst_32924 = (state_32958[(7)]);
var inst_32935 = (state_32958[(2)]);
var inst_32936 = cljs.core.next.call(null,inst_32924);
var inst_32910 = inst_32936;
var inst_32911 = null;
var inst_32912 = (0);
var inst_32913 = (0);
var state_32958__$1 = (function (){var statearr_32961 = state_32958;
(statearr_32961[(8)] = inst_32911);

(statearr_32961[(9)] = inst_32935);

(statearr_32961[(10)] = inst_32913);

(statearr_32961[(11)] = inst_32912);

(statearr_32961[(12)] = inst_32910);

return statearr_32961;
})();
var statearr_32962_32999 = state_32958__$1;
(statearr_32962_32999[(2)] = null);

(statearr_32962_32999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (1))){
var state_32958__$1 = state_32958;
var statearr_32963_33000 = state_32958__$1;
(statearr_32963_33000[(2)] = null);

(statearr_32963_33000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (4))){
var inst_32899 = (state_32958[(13)]);
var inst_32899__$1 = (state_32958[(2)]);
var inst_32900 = (inst_32899__$1 == null);
var state_32958__$1 = (function (){var statearr_32964 = state_32958;
(statearr_32964[(13)] = inst_32899__$1);

return statearr_32964;
})();
if(cljs.core.truth_(inst_32900)){
var statearr_32965_33001 = state_32958__$1;
(statearr_32965_33001[(1)] = (5));

} else {
var statearr_32966_33002 = state_32958__$1;
(statearr_32966_33002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (15))){
var state_32958__$1 = state_32958;
var statearr_32970_33003 = state_32958__$1;
(statearr_32970_33003[(2)] = null);

(statearr_32970_33003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (21))){
var state_32958__$1 = state_32958;
var statearr_32971_33004 = state_32958__$1;
(statearr_32971_33004[(2)] = null);

(statearr_32971_33004[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (13))){
var inst_32911 = (state_32958[(8)]);
var inst_32913 = (state_32958[(10)]);
var inst_32912 = (state_32958[(11)]);
var inst_32910 = (state_32958[(12)]);
var inst_32920 = (state_32958[(2)]);
var inst_32921 = (inst_32913 + (1));
var tmp32967 = inst_32911;
var tmp32968 = inst_32912;
var tmp32969 = inst_32910;
var inst_32910__$1 = tmp32969;
var inst_32911__$1 = tmp32967;
var inst_32912__$1 = tmp32968;
var inst_32913__$1 = inst_32921;
var state_32958__$1 = (function (){var statearr_32972 = state_32958;
(statearr_32972[(8)] = inst_32911__$1);

(statearr_32972[(10)] = inst_32913__$1);

(statearr_32972[(14)] = inst_32920);

(statearr_32972[(11)] = inst_32912__$1);

(statearr_32972[(12)] = inst_32910__$1);

return statearr_32972;
})();
var statearr_32973_33005 = state_32958__$1;
(statearr_32973_33005[(2)] = null);

(statearr_32973_33005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (22))){
var state_32958__$1 = state_32958;
var statearr_32974_33006 = state_32958__$1;
(statearr_32974_33006[(2)] = null);

(statearr_32974_33006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (6))){
var inst_32899 = (state_32958[(13)]);
var inst_32908 = f.call(null,inst_32899);
var inst_32909 = cljs.core.seq.call(null,inst_32908);
var inst_32910 = inst_32909;
var inst_32911 = null;
var inst_32912 = (0);
var inst_32913 = (0);
var state_32958__$1 = (function (){var statearr_32975 = state_32958;
(statearr_32975[(8)] = inst_32911);

(statearr_32975[(10)] = inst_32913);

(statearr_32975[(11)] = inst_32912);

(statearr_32975[(12)] = inst_32910);

return statearr_32975;
})();
var statearr_32976_33007 = state_32958__$1;
(statearr_32976_33007[(2)] = null);

(statearr_32976_33007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (17))){
var inst_32924 = (state_32958[(7)]);
var inst_32928 = cljs.core.chunk_first.call(null,inst_32924);
var inst_32929 = cljs.core.chunk_rest.call(null,inst_32924);
var inst_32930 = cljs.core.count.call(null,inst_32928);
var inst_32910 = inst_32929;
var inst_32911 = inst_32928;
var inst_32912 = inst_32930;
var inst_32913 = (0);
var state_32958__$1 = (function (){var statearr_32977 = state_32958;
(statearr_32977[(8)] = inst_32911);

(statearr_32977[(10)] = inst_32913);

(statearr_32977[(11)] = inst_32912);

(statearr_32977[(12)] = inst_32910);

return statearr_32977;
})();
var statearr_32978_33008 = state_32958__$1;
(statearr_32978_33008[(2)] = null);

(statearr_32978_33008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (3))){
var inst_32956 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32958__$1,inst_32956);
} else {
if((state_val_32959 === (12))){
var inst_32944 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_32979_33009 = state_32958__$1;
(statearr_32979_33009[(2)] = inst_32944);

(statearr_32979_33009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (2))){
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32958__$1,(4),in$);
} else {
if((state_val_32959 === (23))){
var inst_32952 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_32980_33010 = state_32958__$1;
(statearr_32980_33010[(2)] = inst_32952);

(statearr_32980_33010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (19))){
var inst_32939 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_32981_33011 = state_32958__$1;
(statearr_32981_33011[(2)] = inst_32939);

(statearr_32981_33011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (11))){
var inst_32924 = (state_32958[(7)]);
var inst_32910 = (state_32958[(12)]);
var inst_32924__$1 = cljs.core.seq.call(null,inst_32910);
var state_32958__$1 = (function (){var statearr_32982 = state_32958;
(statearr_32982[(7)] = inst_32924__$1);

return statearr_32982;
})();
if(inst_32924__$1){
var statearr_32983_33012 = state_32958__$1;
(statearr_32983_33012[(1)] = (14));

} else {
var statearr_32984_33013 = state_32958__$1;
(statearr_32984_33013[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (9))){
var inst_32946 = (state_32958[(2)]);
var inst_32947 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32958__$1 = (function (){var statearr_32985 = state_32958;
(statearr_32985[(15)] = inst_32946);

return statearr_32985;
})();
if(cljs.core.truth_(inst_32947)){
var statearr_32986_33014 = state_32958__$1;
(statearr_32986_33014[(1)] = (21));

} else {
var statearr_32987_33015 = state_32958__$1;
(statearr_32987_33015[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (5))){
var inst_32902 = cljs.core.async.close_BANG_.call(null,out);
var state_32958__$1 = state_32958;
var statearr_32988_33016 = state_32958__$1;
(statearr_32988_33016[(2)] = inst_32902);

(statearr_32988_33016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (14))){
var inst_32924 = (state_32958[(7)]);
var inst_32926 = cljs.core.chunked_seq_QMARK_.call(null,inst_32924);
var state_32958__$1 = state_32958;
if(inst_32926){
var statearr_32989_33017 = state_32958__$1;
(statearr_32989_33017[(1)] = (17));

} else {
var statearr_32990_33018 = state_32958__$1;
(statearr_32990_33018[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (16))){
var inst_32942 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_32991_33019 = state_32958__$1;
(statearr_32991_33019[(2)] = inst_32942);

(statearr_32991_33019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (10))){
var inst_32911 = (state_32958[(8)]);
var inst_32913 = (state_32958[(10)]);
var inst_32918 = cljs.core._nth.call(null,inst_32911,inst_32913);
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32958__$1,(13),out,inst_32918);
} else {
if((state_val_32959 === (18))){
var inst_32924 = (state_32958[(7)]);
var inst_32933 = cljs.core.first.call(null,inst_32924);
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32958__$1,(20),out,inst_32933);
} else {
if((state_val_32959 === (8))){
var inst_32913 = (state_32958[(10)]);
var inst_32912 = (state_32958[(11)]);
var inst_32915 = (inst_32913 < inst_32912);
var inst_32916 = inst_32915;
var state_32958__$1 = state_32958;
if(cljs.core.truth_(inst_32916)){
var statearr_32992_33020 = state_32958__$1;
(statearr_32992_33020[(1)] = (10));

} else {
var statearr_32993_33021 = state_32958__$1;
(statearr_32993_33021[(1)] = (11));

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
});})(c__31356__auto__))
;
return ((function (switch__31268__auto__,c__31356__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31269__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31269__auto____0 = (function (){
var statearr_32994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32994[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31269__auto__);

(statearr_32994[(1)] = (1));

return statearr_32994;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31269__auto____1 = (function (state_32958){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_32958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e32995){if((e32995 instanceof Object)){
var ex__31272__auto__ = e32995;
var statearr_32996_33022 = state_32958;
(statearr_32996_33022[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33023 = state_32958;
state_32958 = G__33023;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31269__auto__ = function(state_32958){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31269__auto____1.call(this,state_32958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31269__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31269__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto__))
})();
var state__31358__auto__ = (function (){var statearr_32997 = f__31357__auto__.call(null);
(statearr_32997[(6)] = c__31356__auto__);

return statearr_32997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto__))
);

return c__31356__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33025 = arguments.length;
switch (G__33025) {
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
var G__33028 = arguments.length;
switch (G__33028) {
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
var G__33031 = arguments.length;
switch (G__33031) {
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
var c__31356__auto___33078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___33078,out){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___33078,out){
return (function (state_33055){
var state_val_33056 = (state_33055[(1)]);
if((state_val_33056 === (7))){
var inst_33050 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33057_33079 = state_33055__$1;
(statearr_33057_33079[(2)] = inst_33050);

(statearr_33057_33079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (1))){
var inst_33032 = null;
var state_33055__$1 = (function (){var statearr_33058 = state_33055;
(statearr_33058[(7)] = inst_33032);

return statearr_33058;
})();
var statearr_33059_33080 = state_33055__$1;
(statearr_33059_33080[(2)] = null);

(statearr_33059_33080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (4))){
var inst_33035 = (state_33055[(8)]);
var inst_33035__$1 = (state_33055[(2)]);
var inst_33036 = (inst_33035__$1 == null);
var inst_33037 = cljs.core.not.call(null,inst_33036);
var state_33055__$1 = (function (){var statearr_33060 = state_33055;
(statearr_33060[(8)] = inst_33035__$1);

return statearr_33060;
})();
if(inst_33037){
var statearr_33061_33081 = state_33055__$1;
(statearr_33061_33081[(1)] = (5));

} else {
var statearr_33062_33082 = state_33055__$1;
(statearr_33062_33082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (6))){
var state_33055__$1 = state_33055;
var statearr_33063_33083 = state_33055__$1;
(statearr_33063_33083[(2)] = null);

(statearr_33063_33083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (3))){
var inst_33052 = (state_33055[(2)]);
var inst_33053 = cljs.core.async.close_BANG_.call(null,out);
var state_33055__$1 = (function (){var statearr_33064 = state_33055;
(statearr_33064[(9)] = inst_33052);

return statearr_33064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33055__$1,inst_33053);
} else {
if((state_val_33056 === (2))){
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33055__$1,(4),ch);
} else {
if((state_val_33056 === (11))){
var inst_33035 = (state_33055[(8)]);
var inst_33044 = (state_33055[(2)]);
var inst_33032 = inst_33035;
var state_33055__$1 = (function (){var statearr_33065 = state_33055;
(statearr_33065[(7)] = inst_33032);

(statearr_33065[(10)] = inst_33044);

return statearr_33065;
})();
var statearr_33066_33084 = state_33055__$1;
(statearr_33066_33084[(2)] = null);

(statearr_33066_33084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (9))){
var inst_33035 = (state_33055[(8)]);
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33055__$1,(11),out,inst_33035);
} else {
if((state_val_33056 === (5))){
var inst_33032 = (state_33055[(7)]);
var inst_33035 = (state_33055[(8)]);
var inst_33039 = cljs.core._EQ_.call(null,inst_33035,inst_33032);
var state_33055__$1 = state_33055;
if(inst_33039){
var statearr_33068_33085 = state_33055__$1;
(statearr_33068_33085[(1)] = (8));

} else {
var statearr_33069_33086 = state_33055__$1;
(statearr_33069_33086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (10))){
var inst_33047 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33070_33087 = state_33055__$1;
(statearr_33070_33087[(2)] = inst_33047);

(statearr_33070_33087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (8))){
var inst_33032 = (state_33055[(7)]);
var tmp33067 = inst_33032;
var inst_33032__$1 = tmp33067;
var state_33055__$1 = (function (){var statearr_33071 = state_33055;
(statearr_33071[(7)] = inst_33032__$1);

return statearr_33071;
})();
var statearr_33072_33088 = state_33055__$1;
(statearr_33072_33088[(2)] = null);

(statearr_33072_33088[(1)] = (2));


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
});})(c__31356__auto___33078,out))
;
return ((function (switch__31268__auto__,c__31356__auto___33078,out){
return (function() {
var cljs$core$async$state_machine__31269__auto__ = null;
var cljs$core$async$state_machine__31269__auto____0 = (function (){
var statearr_33073 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33073[(0)] = cljs$core$async$state_machine__31269__auto__);

(statearr_33073[(1)] = (1));

return statearr_33073;
});
var cljs$core$async$state_machine__31269__auto____1 = (function (state_33055){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_33055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e33074){if((e33074 instanceof Object)){
var ex__31272__auto__ = e33074;
var statearr_33075_33089 = state_33055;
(statearr_33075_33089[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33090 = state_33055;
state_33055 = G__33090;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$state_machine__31269__auto__ = function(state_33055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31269__auto____1.call(this,state_33055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31269__auto____0;
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31269__auto____1;
return cljs$core$async$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___33078,out))
})();
var state__31358__auto__ = (function (){var statearr_33076 = f__31357__auto__.call(null);
(statearr_33076[(6)] = c__31356__auto___33078);

return statearr_33076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___33078,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33092 = arguments.length;
switch (G__33092) {
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
var c__31356__auto___33158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___33158,out){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___33158,out){
return (function (state_33130){
var state_val_33131 = (state_33130[(1)]);
if((state_val_33131 === (7))){
var inst_33126 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
var statearr_33132_33159 = state_33130__$1;
(statearr_33132_33159[(2)] = inst_33126);

(statearr_33132_33159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (1))){
var inst_33093 = (new Array(n));
var inst_33094 = inst_33093;
var inst_33095 = (0);
var state_33130__$1 = (function (){var statearr_33133 = state_33130;
(statearr_33133[(7)] = inst_33095);

(statearr_33133[(8)] = inst_33094);

return statearr_33133;
})();
var statearr_33134_33160 = state_33130__$1;
(statearr_33134_33160[(2)] = null);

(statearr_33134_33160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (4))){
var inst_33098 = (state_33130[(9)]);
var inst_33098__$1 = (state_33130[(2)]);
var inst_33099 = (inst_33098__$1 == null);
var inst_33100 = cljs.core.not.call(null,inst_33099);
var state_33130__$1 = (function (){var statearr_33135 = state_33130;
(statearr_33135[(9)] = inst_33098__$1);

return statearr_33135;
})();
if(inst_33100){
var statearr_33136_33161 = state_33130__$1;
(statearr_33136_33161[(1)] = (5));

} else {
var statearr_33137_33162 = state_33130__$1;
(statearr_33137_33162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (15))){
var inst_33120 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
var statearr_33138_33163 = state_33130__$1;
(statearr_33138_33163[(2)] = inst_33120);

(statearr_33138_33163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (13))){
var state_33130__$1 = state_33130;
var statearr_33139_33164 = state_33130__$1;
(statearr_33139_33164[(2)] = null);

(statearr_33139_33164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (6))){
var inst_33095 = (state_33130[(7)]);
var inst_33116 = (inst_33095 > (0));
var state_33130__$1 = state_33130;
if(cljs.core.truth_(inst_33116)){
var statearr_33140_33165 = state_33130__$1;
(statearr_33140_33165[(1)] = (12));

} else {
var statearr_33141_33166 = state_33130__$1;
(statearr_33141_33166[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (3))){
var inst_33128 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33130__$1,inst_33128);
} else {
if((state_val_33131 === (12))){
var inst_33094 = (state_33130[(8)]);
var inst_33118 = cljs.core.vec.call(null,inst_33094);
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33130__$1,(15),out,inst_33118);
} else {
if((state_val_33131 === (2))){
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33130__$1,(4),ch);
} else {
if((state_val_33131 === (11))){
var inst_33110 = (state_33130[(2)]);
var inst_33111 = (new Array(n));
var inst_33094 = inst_33111;
var inst_33095 = (0);
var state_33130__$1 = (function (){var statearr_33142 = state_33130;
(statearr_33142[(7)] = inst_33095);

(statearr_33142[(8)] = inst_33094);

(statearr_33142[(10)] = inst_33110);

return statearr_33142;
})();
var statearr_33143_33167 = state_33130__$1;
(statearr_33143_33167[(2)] = null);

(statearr_33143_33167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (9))){
var inst_33094 = (state_33130[(8)]);
var inst_33108 = cljs.core.vec.call(null,inst_33094);
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33130__$1,(11),out,inst_33108);
} else {
if((state_val_33131 === (5))){
var inst_33095 = (state_33130[(7)]);
var inst_33103 = (state_33130[(11)]);
var inst_33094 = (state_33130[(8)]);
var inst_33098 = (state_33130[(9)]);
var inst_33102 = (inst_33094[inst_33095] = inst_33098);
var inst_33103__$1 = (inst_33095 + (1));
var inst_33104 = (inst_33103__$1 < n);
var state_33130__$1 = (function (){var statearr_33144 = state_33130;
(statearr_33144[(11)] = inst_33103__$1);

(statearr_33144[(12)] = inst_33102);

return statearr_33144;
})();
if(cljs.core.truth_(inst_33104)){
var statearr_33145_33168 = state_33130__$1;
(statearr_33145_33168[(1)] = (8));

} else {
var statearr_33146_33169 = state_33130__$1;
(statearr_33146_33169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (14))){
var inst_33123 = (state_33130[(2)]);
var inst_33124 = cljs.core.async.close_BANG_.call(null,out);
var state_33130__$1 = (function (){var statearr_33148 = state_33130;
(statearr_33148[(13)] = inst_33123);

return statearr_33148;
})();
var statearr_33149_33170 = state_33130__$1;
(statearr_33149_33170[(2)] = inst_33124);

(statearr_33149_33170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (10))){
var inst_33114 = (state_33130[(2)]);
var state_33130__$1 = state_33130;
var statearr_33150_33171 = state_33130__$1;
(statearr_33150_33171[(2)] = inst_33114);

(statearr_33150_33171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33131 === (8))){
var inst_33103 = (state_33130[(11)]);
var inst_33094 = (state_33130[(8)]);
var tmp33147 = inst_33094;
var inst_33094__$1 = tmp33147;
var inst_33095 = inst_33103;
var state_33130__$1 = (function (){var statearr_33151 = state_33130;
(statearr_33151[(7)] = inst_33095);

(statearr_33151[(8)] = inst_33094__$1);

return statearr_33151;
})();
var statearr_33152_33172 = state_33130__$1;
(statearr_33152_33172[(2)] = null);

(statearr_33152_33172[(1)] = (2));


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
});})(c__31356__auto___33158,out))
;
return ((function (switch__31268__auto__,c__31356__auto___33158,out){
return (function() {
var cljs$core$async$state_machine__31269__auto__ = null;
var cljs$core$async$state_machine__31269__auto____0 = (function (){
var statearr_33153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33153[(0)] = cljs$core$async$state_machine__31269__auto__);

(statearr_33153[(1)] = (1));

return statearr_33153;
});
var cljs$core$async$state_machine__31269__auto____1 = (function (state_33130){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_33130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e33154){if((e33154 instanceof Object)){
var ex__31272__auto__ = e33154;
var statearr_33155_33173 = state_33130;
(statearr_33155_33173[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33174 = state_33130;
state_33130 = G__33174;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$state_machine__31269__auto__ = function(state_33130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31269__auto____1.call(this,state_33130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31269__auto____0;
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31269__auto____1;
return cljs$core$async$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___33158,out))
})();
var state__31358__auto__ = (function (){var statearr_33156 = f__31357__auto__.call(null);
(statearr_33156[(6)] = c__31356__auto___33158);

return statearr_33156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___33158,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33176 = arguments.length;
switch (G__33176) {
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
var c__31356__auto___33246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31356__auto___33246,out){
return (function (){
var f__31357__auto__ = (function (){var switch__31268__auto__ = ((function (c__31356__auto___33246,out){
return (function (state_33218){
var state_val_33219 = (state_33218[(1)]);
if((state_val_33219 === (7))){
var inst_33214 = (state_33218[(2)]);
var state_33218__$1 = state_33218;
var statearr_33220_33247 = state_33218__$1;
(statearr_33220_33247[(2)] = inst_33214);

(statearr_33220_33247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (1))){
var inst_33177 = [];
var inst_33178 = inst_33177;
var inst_33179 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33218__$1 = (function (){var statearr_33221 = state_33218;
(statearr_33221[(7)] = inst_33179);

(statearr_33221[(8)] = inst_33178);

return statearr_33221;
})();
var statearr_33222_33248 = state_33218__$1;
(statearr_33222_33248[(2)] = null);

(statearr_33222_33248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (4))){
var inst_33182 = (state_33218[(9)]);
var inst_33182__$1 = (state_33218[(2)]);
var inst_33183 = (inst_33182__$1 == null);
var inst_33184 = cljs.core.not.call(null,inst_33183);
var state_33218__$1 = (function (){var statearr_33223 = state_33218;
(statearr_33223[(9)] = inst_33182__$1);

return statearr_33223;
})();
if(inst_33184){
var statearr_33224_33249 = state_33218__$1;
(statearr_33224_33249[(1)] = (5));

} else {
var statearr_33225_33250 = state_33218__$1;
(statearr_33225_33250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (15))){
var inst_33208 = (state_33218[(2)]);
var state_33218__$1 = state_33218;
var statearr_33226_33251 = state_33218__$1;
(statearr_33226_33251[(2)] = inst_33208);

(statearr_33226_33251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (13))){
var state_33218__$1 = state_33218;
var statearr_33227_33252 = state_33218__$1;
(statearr_33227_33252[(2)] = null);

(statearr_33227_33252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (6))){
var inst_33178 = (state_33218[(8)]);
var inst_33203 = inst_33178.length;
var inst_33204 = (inst_33203 > (0));
var state_33218__$1 = state_33218;
if(cljs.core.truth_(inst_33204)){
var statearr_33228_33253 = state_33218__$1;
(statearr_33228_33253[(1)] = (12));

} else {
var statearr_33229_33254 = state_33218__$1;
(statearr_33229_33254[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (3))){
var inst_33216 = (state_33218[(2)]);
var state_33218__$1 = state_33218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33218__$1,inst_33216);
} else {
if((state_val_33219 === (12))){
var inst_33178 = (state_33218[(8)]);
var inst_33206 = cljs.core.vec.call(null,inst_33178);
var state_33218__$1 = state_33218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33218__$1,(15),out,inst_33206);
} else {
if((state_val_33219 === (2))){
var state_33218__$1 = state_33218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33218__$1,(4),ch);
} else {
if((state_val_33219 === (11))){
var inst_33186 = (state_33218[(10)]);
var inst_33182 = (state_33218[(9)]);
var inst_33196 = (state_33218[(2)]);
var inst_33197 = [];
var inst_33198 = inst_33197.push(inst_33182);
var inst_33178 = inst_33197;
var inst_33179 = inst_33186;
var state_33218__$1 = (function (){var statearr_33230 = state_33218;
(statearr_33230[(7)] = inst_33179);

(statearr_33230[(8)] = inst_33178);

(statearr_33230[(11)] = inst_33198);

(statearr_33230[(12)] = inst_33196);

return statearr_33230;
})();
var statearr_33231_33255 = state_33218__$1;
(statearr_33231_33255[(2)] = null);

(statearr_33231_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (9))){
var inst_33178 = (state_33218[(8)]);
var inst_33194 = cljs.core.vec.call(null,inst_33178);
var state_33218__$1 = state_33218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33218__$1,(11),out,inst_33194);
} else {
if((state_val_33219 === (5))){
var inst_33179 = (state_33218[(7)]);
var inst_33186 = (state_33218[(10)]);
var inst_33182 = (state_33218[(9)]);
var inst_33186__$1 = f.call(null,inst_33182);
var inst_33187 = cljs.core._EQ_.call(null,inst_33186__$1,inst_33179);
var inst_33188 = cljs.core.keyword_identical_QMARK_.call(null,inst_33179,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33189 = (inst_33187) || (inst_33188);
var state_33218__$1 = (function (){var statearr_33232 = state_33218;
(statearr_33232[(10)] = inst_33186__$1);

return statearr_33232;
})();
if(cljs.core.truth_(inst_33189)){
var statearr_33233_33256 = state_33218__$1;
(statearr_33233_33256[(1)] = (8));

} else {
var statearr_33234_33257 = state_33218__$1;
(statearr_33234_33257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (14))){
var inst_33211 = (state_33218[(2)]);
var inst_33212 = cljs.core.async.close_BANG_.call(null,out);
var state_33218__$1 = (function (){var statearr_33236 = state_33218;
(statearr_33236[(13)] = inst_33211);

return statearr_33236;
})();
var statearr_33237_33258 = state_33218__$1;
(statearr_33237_33258[(2)] = inst_33212);

(statearr_33237_33258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (10))){
var inst_33201 = (state_33218[(2)]);
var state_33218__$1 = state_33218;
var statearr_33238_33259 = state_33218__$1;
(statearr_33238_33259[(2)] = inst_33201);

(statearr_33238_33259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33219 === (8))){
var inst_33178 = (state_33218[(8)]);
var inst_33186 = (state_33218[(10)]);
var inst_33182 = (state_33218[(9)]);
var inst_33191 = inst_33178.push(inst_33182);
var tmp33235 = inst_33178;
var inst_33178__$1 = tmp33235;
var inst_33179 = inst_33186;
var state_33218__$1 = (function (){var statearr_33239 = state_33218;
(statearr_33239[(7)] = inst_33179);

(statearr_33239[(8)] = inst_33178__$1);

(statearr_33239[(14)] = inst_33191);

return statearr_33239;
})();
var statearr_33240_33260 = state_33218__$1;
(statearr_33240_33260[(2)] = null);

(statearr_33240_33260[(1)] = (2));


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
});})(c__31356__auto___33246,out))
;
return ((function (switch__31268__auto__,c__31356__auto___33246,out){
return (function() {
var cljs$core$async$state_machine__31269__auto__ = null;
var cljs$core$async$state_machine__31269__auto____0 = (function (){
var statearr_33241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33241[(0)] = cljs$core$async$state_machine__31269__auto__);

(statearr_33241[(1)] = (1));

return statearr_33241;
});
var cljs$core$async$state_machine__31269__auto____1 = (function (state_33218){
while(true){
var ret_value__31270__auto__ = (function (){try{while(true){
var result__31271__auto__ = switch__31268__auto__.call(null,state_33218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31271__auto__;
}
break;
}
}catch (e33242){if((e33242 instanceof Object)){
var ex__31272__auto__ = e33242;
var statearr_33243_33261 = state_33218;
(statearr_33243_33261[(5)] = ex__31272__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33262 = state_33218;
state_33218 = G__33262;
continue;
} else {
return ret_value__31270__auto__;
}
break;
}
});
cljs$core$async$state_machine__31269__auto__ = function(state_33218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31269__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31269__auto____1.call(this,state_33218);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31269__auto____0;
cljs$core$async$state_machine__31269__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31269__auto____1;
return cljs$core$async$state_machine__31269__auto__;
})()
;})(switch__31268__auto__,c__31356__auto___33246,out))
})();
var state__31358__auto__ = (function (){var statearr_33244 = f__31357__auto__.call(null);
(statearr_33244[(6)] = c__31356__auto___33246);

return statearr_33244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31358__auto__);
});})(c__31356__auto___33246,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1517063735626
