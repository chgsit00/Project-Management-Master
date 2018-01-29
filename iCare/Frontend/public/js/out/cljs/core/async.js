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
var G__40889 = arguments.length;
switch (G__40889) {
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
if(typeof cljs.core.async.t_cljs$core$async40890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40890 = (function (f,blockable,meta40891){
this.f = f;
this.blockable = blockable;
this.meta40891 = meta40891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40892,meta40891__$1){
var self__ = this;
var _40892__$1 = this;
return (new cljs.core.async.t_cljs$core$async40890(self__.f,self__.blockable,meta40891__$1));
});

cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40892){
var self__ = this;
var _40892__$1 = this;
return self__.meta40891;
});

cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40891","meta40891",1924157531,null)], null);
});

cljs.core.async.t_cljs$core$async40890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40890";

cljs.core.async.t_cljs$core$async40890.cljs$lang$ctorPrWriter = (function (this__38916__auto__,writer__38917__auto__,opt__38918__auto__){
return cljs.core._write.call(null,writer__38917__auto__,"cljs.core.async/t_cljs$core$async40890");
});

cljs.core.async.__GT_t_cljs$core$async40890 = (function cljs$core$async$__GT_t_cljs$core$async40890(f__$1,blockable__$1,meta40891){
return (new cljs.core.async.t_cljs$core$async40890(f__$1,blockable__$1,meta40891));
});

}

return (new cljs.core.async.t_cljs$core$async40890(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40896 = arguments.length;
switch (G__40896) {
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
var G__40899 = arguments.length;
switch (G__40899) {
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
var G__40902 = arguments.length;
switch (G__40902) {
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
var val_40904 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40904);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40904,ret){
return (function (){
return fn1.call(null,val_40904);
});})(val_40904,ret))
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
var G__40906 = arguments.length;
switch (G__40906) {
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
var n__39238__auto___40908 = n;
var x_40909 = (0);
while(true){
if((x_40909 < n__39238__auto___40908)){
(a[x_40909] = (0));

var G__40910 = (x_40909 + (1));
x_40909 = G__40910;
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

var G__40911 = (i + (1));
i = G__40911;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40912 = (function (flag,meta40913){
this.flag = flag;
this.meta40913 = meta40913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40914,meta40913__$1){
var self__ = this;
var _40914__$1 = this;
return (new cljs.core.async.t_cljs$core$async40912(self__.flag,meta40913__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40914){
var self__ = this;
var _40914__$1 = this;
return self__.meta40913;
});})(flag))
;

cljs.core.async.t_cljs$core$async40912.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40912.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40912.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40913","meta40913",188829588,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40912";

cljs.core.async.t_cljs$core$async40912.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__38916__auto__,writer__38917__auto__,opt__38918__auto__){
return cljs.core._write.call(null,writer__38917__auto__,"cljs.core.async/t_cljs$core$async40912");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40912 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40912(flag__$1,meta40913){
return (new cljs.core.async.t_cljs$core$async40912(flag__$1,meta40913));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40912(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40915 = (function (flag,cb,meta40916){
this.flag = flag;
this.cb = cb;
this.meta40916 = meta40916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40917,meta40916__$1){
var self__ = this;
var _40917__$1 = this;
return (new cljs.core.async.t_cljs$core$async40915(self__.flag,self__.cb,meta40916__$1));
});

cljs.core.async.t_cljs$core$async40915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40917){
var self__ = this;
var _40917__$1 = this;
return self__.meta40916;
});

cljs.core.async.t_cljs$core$async40915.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40915.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40916","meta40916",-740260265,null)], null);
});

cljs.core.async.t_cljs$core$async40915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40915";

cljs.core.async.t_cljs$core$async40915.cljs$lang$ctorPrWriter = (function (this__38916__auto__,writer__38917__auto__,opt__38918__auto__){
return cljs.core._write.call(null,writer__38917__auto__,"cljs.core.async/t_cljs$core$async40915");
});

cljs.core.async.__GT_t_cljs$core$async40915 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40915(flag__$1,cb__$1,meta40916){
return (new cljs.core.async.t_cljs$core$async40915(flag__$1,cb__$1,meta40916));
});

}

return (new cljs.core.async.t_cljs$core$async40915(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40918_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40918_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40919_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40919_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__38291__auto__ = wport;
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40920 = (i + (1));
i = G__40920;
continue;
}
} else {
return null;
}
break;
}
})();
var or__38291__auto__ = ret;
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__38279__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__38279__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__38279__auto__;
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
var args__39469__auto__ = [];
var len__39462__auto___40926 = arguments.length;
var i__39463__auto___40927 = (0);
while(true){
if((i__39463__auto___40927 < len__39462__auto___40926)){
args__39469__auto__.push((arguments[i__39463__auto___40927]));

var G__40928 = (i__39463__auto___40927 + (1));
i__39463__auto___40927 = G__40928;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((1) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39470__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40923){
var map__40924 = p__40923;
var map__40924__$1 = ((((!((map__40924 == null)))?((((map__40924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40924):map__40924);
var opts = map__40924__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40921){
var G__40922 = cljs.core.first.call(null,seq40921);
var seq40921__$1 = cljs.core.next.call(null,seq40921);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40922,seq40921__$1);
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
var G__40930 = arguments.length;
switch (G__40930) {
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
var c__40843__auto___40976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___40976){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___40976){
return (function (state_40954){
var state_val_40955 = (state_40954[(1)]);
if((state_val_40955 === (7))){
var inst_40950 = (state_40954[(2)]);
var state_40954__$1 = state_40954;
var statearr_40956_40977 = state_40954__$1;
(statearr_40956_40977[(2)] = inst_40950);

(statearr_40956_40977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40955 === (1))){
var state_40954__$1 = state_40954;
var statearr_40957_40978 = state_40954__$1;
(statearr_40957_40978[(2)] = null);

(statearr_40957_40978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40955 === (4))){
var inst_40933 = (state_40954[(7)]);
var inst_40933__$1 = (state_40954[(2)]);
var inst_40934 = (inst_40933__$1 == null);
var state_40954__$1 = (function (){var statearr_40958 = state_40954;
(statearr_40958[(7)] = inst_40933__$1);

return statearr_40958;
})();
if(cljs.core.truth_(inst_40934)){
var statearr_40959_40979 = state_40954__$1;
(statearr_40959_40979[(1)] = (5));

} else {
var statearr_40960_40980 = state_40954__$1;
(statearr_40960_40980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40955 === (13))){
var state_40954__$1 = state_40954;
var statearr_40961_40981 = state_40954__$1;
(statearr_40961_40981[(2)] = null);

(statearr_40961_40981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40955 === (6))){
var inst_40933 = (state_40954[(7)]);
var state_40954__$1 = state_40954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40954__$1,(11),to,inst_40933);
} else {
if((state_val_40955 === (3))){
var inst_40952 = (state_40954[(2)]);
var state_40954__$1 = state_40954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40954__$1,inst_40952);
} else {
if((state_val_40955 === (12))){
var state_40954__$1 = state_40954;
var statearr_40962_40982 = state_40954__$1;
(statearr_40962_40982[(2)] = null);

(statearr_40962_40982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40955 === (2))){
var state_40954__$1 = state_40954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40954__$1,(4),from);
} else {
if((state_val_40955 === (11))){
var inst_40943 = (state_40954[(2)]);
var state_40954__$1 = state_40954;
if(cljs.core.truth_(inst_40943)){
var statearr_40963_40983 = state_40954__$1;
(statearr_40963_40983[(1)] = (12));

} else {
var statearr_40964_40984 = state_40954__$1;
(statearr_40964_40984[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40955 === (9))){
var state_40954__$1 = state_40954;
var statearr_40965_40985 = state_40954__$1;
(statearr_40965_40985[(2)] = null);

(statearr_40965_40985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40955 === (5))){
var state_40954__$1 = state_40954;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40966_40986 = state_40954__$1;
(statearr_40966_40986[(1)] = (8));

} else {
var statearr_40967_40987 = state_40954__$1;
(statearr_40967_40987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40955 === (14))){
var inst_40948 = (state_40954[(2)]);
var state_40954__$1 = state_40954;
var statearr_40968_40988 = state_40954__$1;
(statearr_40968_40988[(2)] = inst_40948);

(statearr_40968_40988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40955 === (10))){
var inst_40940 = (state_40954[(2)]);
var state_40954__$1 = state_40954;
var statearr_40969_40989 = state_40954__$1;
(statearr_40969_40989[(2)] = inst_40940);

(statearr_40969_40989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40955 === (8))){
var inst_40937 = cljs.core.async.close_BANG_.call(null,to);
var state_40954__$1 = state_40954;
var statearr_40970_40990 = state_40954__$1;
(statearr_40970_40990[(2)] = inst_40937);

(statearr_40970_40990[(1)] = (10));


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
});})(c__40843__auto___40976))
;
return ((function (switch__40755__auto__,c__40843__auto___40976){
return (function() {
var cljs$core$async$state_machine__40756__auto__ = null;
var cljs$core$async$state_machine__40756__auto____0 = (function (){
var statearr_40971 = [null,null,null,null,null,null,null,null];
(statearr_40971[(0)] = cljs$core$async$state_machine__40756__auto__);

(statearr_40971[(1)] = (1));

return statearr_40971;
});
var cljs$core$async$state_machine__40756__auto____1 = (function (state_40954){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_40954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e40972){if((e40972 instanceof Object)){
var ex__40759__auto__ = e40972;
var statearr_40973_40991 = state_40954;
(statearr_40973_40991[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40992 = state_40954;
state_40954 = G__40992;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$state_machine__40756__auto__ = function(state_40954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40756__auto____1.call(this,state_40954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40756__auto____0;
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40756__auto____1;
return cljs$core$async$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___40976))
})();
var state__40845__auto__ = (function (){var statearr_40974 = f__40844__auto__.call(null);
(statearr_40974[(6)] = c__40843__auto___40976);

return statearr_40974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___40976))
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
return (function (p__40993){
var vec__40994 = p__40993;
var v = cljs.core.nth.call(null,vec__40994,(0),null);
var p = cljs.core.nth.call(null,vec__40994,(1),null);
var job = vec__40994;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40843__auto___41165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___41165,res,vec__40994,v,p,job,jobs,results){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___41165,res,vec__40994,v,p,job,jobs,results){
return (function (state_41001){
var state_val_41002 = (state_41001[(1)]);
if((state_val_41002 === (1))){
var state_41001__$1 = state_41001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41001__$1,(2),res,v);
} else {
if((state_val_41002 === (2))){
var inst_40998 = (state_41001[(2)]);
var inst_40999 = cljs.core.async.close_BANG_.call(null,res);
var state_41001__$1 = (function (){var statearr_41003 = state_41001;
(statearr_41003[(7)] = inst_40998);

return statearr_41003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41001__$1,inst_40999);
} else {
return null;
}
}
});})(c__40843__auto___41165,res,vec__40994,v,p,job,jobs,results))
;
return ((function (switch__40755__auto__,c__40843__auto___41165,res,vec__40994,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0 = (function (){
var statearr_41004 = [null,null,null,null,null,null,null,null];
(statearr_41004[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__);

(statearr_41004[(1)] = (1));

return statearr_41004;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1 = (function (state_41001){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_41001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e41005){if((e41005 instanceof Object)){
var ex__40759__auto__ = e41005;
var statearr_41006_41166 = state_41001;
(statearr_41006_41166[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41167 = state_41001;
state_41001 = G__41167;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__ = function(state_41001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1.call(this,state_41001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___41165,res,vec__40994,v,p,job,jobs,results))
})();
var state__40845__auto__ = (function (){var statearr_41007 = f__40844__auto__.call(null);
(statearr_41007[(6)] = c__40843__auto___41165);

return statearr_41007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___41165,res,vec__40994,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41008){
var vec__41009 = p__41008;
var v = cljs.core.nth.call(null,vec__41009,(0),null);
var p = cljs.core.nth.call(null,vec__41009,(1),null);
var job = vec__41009;
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
var n__39238__auto___41168 = n;
var __41169 = (0);
while(true){
if((__41169 < n__39238__auto___41168)){
var G__41012_41170 = type;
var G__41012_41171__$1 = (((G__41012_41170 instanceof cljs.core.Keyword))?G__41012_41170.fqn:null);
switch (G__41012_41171__$1) {
case "compute":
var c__40843__auto___41173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41169,c__40843__auto___41173,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (__41169,c__40843__auto___41173,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async){
return (function (state_41025){
var state_val_41026 = (state_41025[(1)]);
if((state_val_41026 === (1))){
var state_41025__$1 = state_41025;
var statearr_41027_41174 = state_41025__$1;
(statearr_41027_41174[(2)] = null);

(statearr_41027_41174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (2))){
var state_41025__$1 = state_41025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41025__$1,(4),jobs);
} else {
if((state_val_41026 === (3))){
var inst_41023 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41025__$1,inst_41023);
} else {
if((state_val_41026 === (4))){
var inst_41015 = (state_41025[(2)]);
var inst_41016 = process.call(null,inst_41015);
var state_41025__$1 = state_41025;
if(cljs.core.truth_(inst_41016)){
var statearr_41028_41175 = state_41025__$1;
(statearr_41028_41175[(1)] = (5));

} else {
var statearr_41029_41176 = state_41025__$1;
(statearr_41029_41176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (5))){
var state_41025__$1 = state_41025;
var statearr_41030_41177 = state_41025__$1;
(statearr_41030_41177[(2)] = null);

(statearr_41030_41177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (6))){
var state_41025__$1 = state_41025;
var statearr_41031_41178 = state_41025__$1;
(statearr_41031_41178[(2)] = null);

(statearr_41031_41178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (7))){
var inst_41021 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41032_41179 = state_41025__$1;
(statearr_41032_41179[(2)] = inst_41021);

(statearr_41032_41179[(1)] = (3));


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
});})(__41169,c__40843__auto___41173,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async))
;
return ((function (__41169,switch__40755__auto__,c__40843__auto___41173,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0 = (function (){
var statearr_41033 = [null,null,null,null,null,null,null];
(statearr_41033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__);

(statearr_41033[(1)] = (1));

return statearr_41033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1 = (function (state_41025){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_41025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e41034){if((e41034 instanceof Object)){
var ex__40759__auto__ = e41034;
var statearr_41035_41180 = state_41025;
(statearr_41035_41180[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41181 = state_41025;
state_41025 = G__41181;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__ = function(state_41025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1.call(this,state_41025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__;
})()
;})(__41169,switch__40755__auto__,c__40843__auto___41173,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async))
})();
var state__40845__auto__ = (function (){var statearr_41036 = f__40844__auto__.call(null);
(statearr_41036[(6)] = c__40843__auto___41173);

return statearr_41036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(__41169,c__40843__auto___41173,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async))
);


break;
case "async":
var c__40843__auto___41182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41169,c__40843__auto___41182,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (__41169,c__40843__auto___41182,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async){
return (function (state_41049){
var state_val_41050 = (state_41049[(1)]);
if((state_val_41050 === (1))){
var state_41049__$1 = state_41049;
var statearr_41051_41183 = state_41049__$1;
(statearr_41051_41183[(2)] = null);

(statearr_41051_41183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41050 === (2))){
var state_41049__$1 = state_41049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41049__$1,(4),jobs);
} else {
if((state_val_41050 === (3))){
var inst_41047 = (state_41049[(2)]);
var state_41049__$1 = state_41049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41049__$1,inst_41047);
} else {
if((state_val_41050 === (4))){
var inst_41039 = (state_41049[(2)]);
var inst_41040 = async.call(null,inst_41039);
var state_41049__$1 = state_41049;
if(cljs.core.truth_(inst_41040)){
var statearr_41052_41184 = state_41049__$1;
(statearr_41052_41184[(1)] = (5));

} else {
var statearr_41053_41185 = state_41049__$1;
(statearr_41053_41185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41050 === (5))){
var state_41049__$1 = state_41049;
var statearr_41054_41186 = state_41049__$1;
(statearr_41054_41186[(2)] = null);

(statearr_41054_41186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41050 === (6))){
var state_41049__$1 = state_41049;
var statearr_41055_41187 = state_41049__$1;
(statearr_41055_41187[(2)] = null);

(statearr_41055_41187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41050 === (7))){
var inst_41045 = (state_41049[(2)]);
var state_41049__$1 = state_41049;
var statearr_41056_41188 = state_41049__$1;
(statearr_41056_41188[(2)] = inst_41045);

(statearr_41056_41188[(1)] = (3));


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
});})(__41169,c__40843__auto___41182,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async))
;
return ((function (__41169,switch__40755__auto__,c__40843__auto___41182,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0 = (function (){
var statearr_41057 = [null,null,null,null,null,null,null];
(statearr_41057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__);

(statearr_41057[(1)] = (1));

return statearr_41057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1 = (function (state_41049){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_41049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e41058){if((e41058 instanceof Object)){
var ex__40759__auto__ = e41058;
var statearr_41059_41189 = state_41049;
(statearr_41059_41189[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41190 = state_41049;
state_41049 = G__41190;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__ = function(state_41049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1.call(this,state_41049);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__;
})()
;})(__41169,switch__40755__auto__,c__40843__auto___41182,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async))
})();
var state__40845__auto__ = (function (){var statearr_41060 = f__40844__auto__.call(null);
(statearr_41060[(6)] = c__40843__auto___41182);

return statearr_41060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(__41169,c__40843__auto___41182,G__41012_41170,G__41012_41171__$1,n__39238__auto___41168,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41012_41171__$1)].join('')));

}

var G__41191 = (__41169 + (1));
__41169 = G__41191;
continue;
} else {
}
break;
}

var c__40843__auto___41192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___41192,jobs,results,process,async){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___41192,jobs,results,process,async){
return (function (state_41082){
var state_val_41083 = (state_41082[(1)]);
if((state_val_41083 === (1))){
var state_41082__$1 = state_41082;
var statearr_41084_41193 = state_41082__$1;
(statearr_41084_41193[(2)] = null);

(statearr_41084_41193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41083 === (2))){
var state_41082__$1 = state_41082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41082__$1,(4),from);
} else {
if((state_val_41083 === (3))){
var inst_41080 = (state_41082[(2)]);
var state_41082__$1 = state_41082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41082__$1,inst_41080);
} else {
if((state_val_41083 === (4))){
var inst_41063 = (state_41082[(7)]);
var inst_41063__$1 = (state_41082[(2)]);
var inst_41064 = (inst_41063__$1 == null);
var state_41082__$1 = (function (){var statearr_41085 = state_41082;
(statearr_41085[(7)] = inst_41063__$1);

return statearr_41085;
})();
if(cljs.core.truth_(inst_41064)){
var statearr_41086_41194 = state_41082__$1;
(statearr_41086_41194[(1)] = (5));

} else {
var statearr_41087_41195 = state_41082__$1;
(statearr_41087_41195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41083 === (5))){
var inst_41066 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41082__$1 = state_41082;
var statearr_41088_41196 = state_41082__$1;
(statearr_41088_41196[(2)] = inst_41066);

(statearr_41088_41196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41083 === (6))){
var inst_41063 = (state_41082[(7)]);
var inst_41068 = (state_41082[(8)]);
var inst_41068__$1 = cljs.core.async.chan.call(null,(1));
var inst_41069 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41070 = [inst_41063,inst_41068__$1];
var inst_41071 = (new cljs.core.PersistentVector(null,2,(5),inst_41069,inst_41070,null));
var state_41082__$1 = (function (){var statearr_41089 = state_41082;
(statearr_41089[(8)] = inst_41068__$1);

return statearr_41089;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41082__$1,(8),jobs,inst_41071);
} else {
if((state_val_41083 === (7))){
var inst_41078 = (state_41082[(2)]);
var state_41082__$1 = state_41082;
var statearr_41090_41197 = state_41082__$1;
(statearr_41090_41197[(2)] = inst_41078);

(statearr_41090_41197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41083 === (8))){
var inst_41068 = (state_41082[(8)]);
var inst_41073 = (state_41082[(2)]);
var state_41082__$1 = (function (){var statearr_41091 = state_41082;
(statearr_41091[(9)] = inst_41073);

return statearr_41091;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41082__$1,(9),results,inst_41068);
} else {
if((state_val_41083 === (9))){
var inst_41075 = (state_41082[(2)]);
var state_41082__$1 = (function (){var statearr_41092 = state_41082;
(statearr_41092[(10)] = inst_41075);

return statearr_41092;
})();
var statearr_41093_41198 = state_41082__$1;
(statearr_41093_41198[(2)] = null);

(statearr_41093_41198[(1)] = (2));


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
});})(c__40843__auto___41192,jobs,results,process,async))
;
return ((function (switch__40755__auto__,c__40843__auto___41192,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0 = (function (){
var statearr_41094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__);

(statearr_41094[(1)] = (1));

return statearr_41094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1 = (function (state_41082){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_41082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e41095){if((e41095 instanceof Object)){
var ex__40759__auto__ = e41095;
var statearr_41096_41199 = state_41082;
(statearr_41096_41199[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41200 = state_41082;
state_41082 = G__41200;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__ = function(state_41082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1.call(this,state_41082);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___41192,jobs,results,process,async))
})();
var state__40845__auto__ = (function (){var statearr_41097 = f__40844__auto__.call(null);
(statearr_41097[(6)] = c__40843__auto___41192);

return statearr_41097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___41192,jobs,results,process,async))
);


var c__40843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto__,jobs,results,process,async){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto__,jobs,results,process,async){
return (function (state_41135){
var state_val_41136 = (state_41135[(1)]);
if((state_val_41136 === (7))){
var inst_41131 = (state_41135[(2)]);
var state_41135__$1 = state_41135;
var statearr_41137_41201 = state_41135__$1;
(statearr_41137_41201[(2)] = inst_41131);

(statearr_41137_41201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (20))){
var state_41135__$1 = state_41135;
var statearr_41138_41202 = state_41135__$1;
(statearr_41138_41202[(2)] = null);

(statearr_41138_41202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (1))){
var state_41135__$1 = state_41135;
var statearr_41139_41203 = state_41135__$1;
(statearr_41139_41203[(2)] = null);

(statearr_41139_41203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (4))){
var inst_41100 = (state_41135[(7)]);
var inst_41100__$1 = (state_41135[(2)]);
var inst_41101 = (inst_41100__$1 == null);
var state_41135__$1 = (function (){var statearr_41140 = state_41135;
(statearr_41140[(7)] = inst_41100__$1);

return statearr_41140;
})();
if(cljs.core.truth_(inst_41101)){
var statearr_41141_41204 = state_41135__$1;
(statearr_41141_41204[(1)] = (5));

} else {
var statearr_41142_41205 = state_41135__$1;
(statearr_41142_41205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (15))){
var inst_41113 = (state_41135[(8)]);
var state_41135__$1 = state_41135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41135__$1,(18),to,inst_41113);
} else {
if((state_val_41136 === (21))){
var inst_41126 = (state_41135[(2)]);
var state_41135__$1 = state_41135;
var statearr_41143_41206 = state_41135__$1;
(statearr_41143_41206[(2)] = inst_41126);

(statearr_41143_41206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (13))){
var inst_41128 = (state_41135[(2)]);
var state_41135__$1 = (function (){var statearr_41144 = state_41135;
(statearr_41144[(9)] = inst_41128);

return statearr_41144;
})();
var statearr_41145_41207 = state_41135__$1;
(statearr_41145_41207[(2)] = null);

(statearr_41145_41207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (6))){
var inst_41100 = (state_41135[(7)]);
var state_41135__$1 = state_41135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41135__$1,(11),inst_41100);
} else {
if((state_val_41136 === (17))){
var inst_41121 = (state_41135[(2)]);
var state_41135__$1 = state_41135;
if(cljs.core.truth_(inst_41121)){
var statearr_41146_41208 = state_41135__$1;
(statearr_41146_41208[(1)] = (19));

} else {
var statearr_41147_41209 = state_41135__$1;
(statearr_41147_41209[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (3))){
var inst_41133 = (state_41135[(2)]);
var state_41135__$1 = state_41135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41135__$1,inst_41133);
} else {
if((state_val_41136 === (12))){
var inst_41110 = (state_41135[(10)]);
var state_41135__$1 = state_41135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41135__$1,(14),inst_41110);
} else {
if((state_val_41136 === (2))){
var state_41135__$1 = state_41135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41135__$1,(4),results);
} else {
if((state_val_41136 === (19))){
var state_41135__$1 = state_41135;
var statearr_41148_41210 = state_41135__$1;
(statearr_41148_41210[(2)] = null);

(statearr_41148_41210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (11))){
var inst_41110 = (state_41135[(2)]);
var state_41135__$1 = (function (){var statearr_41149 = state_41135;
(statearr_41149[(10)] = inst_41110);

return statearr_41149;
})();
var statearr_41150_41211 = state_41135__$1;
(statearr_41150_41211[(2)] = null);

(statearr_41150_41211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (9))){
var state_41135__$1 = state_41135;
var statearr_41151_41212 = state_41135__$1;
(statearr_41151_41212[(2)] = null);

(statearr_41151_41212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (5))){
var state_41135__$1 = state_41135;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41152_41213 = state_41135__$1;
(statearr_41152_41213[(1)] = (8));

} else {
var statearr_41153_41214 = state_41135__$1;
(statearr_41153_41214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (14))){
var inst_41115 = (state_41135[(11)]);
var inst_41113 = (state_41135[(8)]);
var inst_41113__$1 = (state_41135[(2)]);
var inst_41114 = (inst_41113__$1 == null);
var inst_41115__$1 = cljs.core.not.call(null,inst_41114);
var state_41135__$1 = (function (){var statearr_41154 = state_41135;
(statearr_41154[(11)] = inst_41115__$1);

(statearr_41154[(8)] = inst_41113__$1);

return statearr_41154;
})();
if(inst_41115__$1){
var statearr_41155_41215 = state_41135__$1;
(statearr_41155_41215[(1)] = (15));

} else {
var statearr_41156_41216 = state_41135__$1;
(statearr_41156_41216[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (16))){
var inst_41115 = (state_41135[(11)]);
var state_41135__$1 = state_41135;
var statearr_41157_41217 = state_41135__$1;
(statearr_41157_41217[(2)] = inst_41115);

(statearr_41157_41217[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (10))){
var inst_41107 = (state_41135[(2)]);
var state_41135__$1 = state_41135;
var statearr_41158_41218 = state_41135__$1;
(statearr_41158_41218[(2)] = inst_41107);

(statearr_41158_41218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (18))){
var inst_41118 = (state_41135[(2)]);
var state_41135__$1 = state_41135;
var statearr_41159_41219 = state_41135__$1;
(statearr_41159_41219[(2)] = inst_41118);

(statearr_41159_41219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41136 === (8))){
var inst_41104 = cljs.core.async.close_BANG_.call(null,to);
var state_41135__$1 = state_41135;
var statearr_41160_41220 = state_41135__$1;
(statearr_41160_41220[(2)] = inst_41104);

(statearr_41160_41220[(1)] = (10));


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
});})(c__40843__auto__,jobs,results,process,async))
;
return ((function (switch__40755__auto__,c__40843__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0 = (function (){
var statearr_41161 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__);

(statearr_41161[(1)] = (1));

return statearr_41161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1 = (function (state_41135){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_41135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e41162){if((e41162 instanceof Object)){
var ex__40759__auto__ = e41162;
var statearr_41163_41221 = state_41135;
(statearr_41163_41221[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41222 = state_41135;
state_41135 = G__41222;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__ = function(state_41135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1.call(this,state_41135);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto__,jobs,results,process,async))
})();
var state__40845__auto__ = (function (){var statearr_41164 = f__40844__auto__.call(null);
(statearr_41164[(6)] = c__40843__auto__);

return statearr_41164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto__,jobs,results,process,async))
);

return c__40843__auto__;
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
var G__41224 = arguments.length;
switch (G__41224) {
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
var G__41227 = arguments.length;
switch (G__41227) {
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
var G__41230 = arguments.length;
switch (G__41230) {
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
var c__40843__auto___41279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___41279,tc,fc){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___41279,tc,fc){
return (function (state_41256){
var state_val_41257 = (state_41256[(1)]);
if((state_val_41257 === (7))){
var inst_41252 = (state_41256[(2)]);
var state_41256__$1 = state_41256;
var statearr_41258_41280 = state_41256__$1;
(statearr_41258_41280[(2)] = inst_41252);

(statearr_41258_41280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (1))){
var state_41256__$1 = state_41256;
var statearr_41259_41281 = state_41256__$1;
(statearr_41259_41281[(2)] = null);

(statearr_41259_41281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (4))){
var inst_41233 = (state_41256[(7)]);
var inst_41233__$1 = (state_41256[(2)]);
var inst_41234 = (inst_41233__$1 == null);
var state_41256__$1 = (function (){var statearr_41260 = state_41256;
(statearr_41260[(7)] = inst_41233__$1);

return statearr_41260;
})();
if(cljs.core.truth_(inst_41234)){
var statearr_41261_41282 = state_41256__$1;
(statearr_41261_41282[(1)] = (5));

} else {
var statearr_41262_41283 = state_41256__$1;
(statearr_41262_41283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (13))){
var state_41256__$1 = state_41256;
var statearr_41263_41284 = state_41256__$1;
(statearr_41263_41284[(2)] = null);

(statearr_41263_41284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (6))){
var inst_41233 = (state_41256[(7)]);
var inst_41239 = p.call(null,inst_41233);
var state_41256__$1 = state_41256;
if(cljs.core.truth_(inst_41239)){
var statearr_41264_41285 = state_41256__$1;
(statearr_41264_41285[(1)] = (9));

} else {
var statearr_41265_41286 = state_41256__$1;
(statearr_41265_41286[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (3))){
var inst_41254 = (state_41256[(2)]);
var state_41256__$1 = state_41256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41256__$1,inst_41254);
} else {
if((state_val_41257 === (12))){
var state_41256__$1 = state_41256;
var statearr_41266_41287 = state_41256__$1;
(statearr_41266_41287[(2)] = null);

(statearr_41266_41287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (2))){
var state_41256__$1 = state_41256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41256__$1,(4),ch);
} else {
if((state_val_41257 === (11))){
var inst_41233 = (state_41256[(7)]);
var inst_41243 = (state_41256[(2)]);
var state_41256__$1 = state_41256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41256__$1,(8),inst_41243,inst_41233);
} else {
if((state_val_41257 === (9))){
var state_41256__$1 = state_41256;
var statearr_41267_41288 = state_41256__$1;
(statearr_41267_41288[(2)] = tc);

(statearr_41267_41288[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (5))){
var inst_41236 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41237 = cljs.core.async.close_BANG_.call(null,fc);
var state_41256__$1 = (function (){var statearr_41268 = state_41256;
(statearr_41268[(8)] = inst_41236);

return statearr_41268;
})();
var statearr_41269_41289 = state_41256__$1;
(statearr_41269_41289[(2)] = inst_41237);

(statearr_41269_41289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (14))){
var inst_41250 = (state_41256[(2)]);
var state_41256__$1 = state_41256;
var statearr_41270_41290 = state_41256__$1;
(statearr_41270_41290[(2)] = inst_41250);

(statearr_41270_41290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (10))){
var state_41256__$1 = state_41256;
var statearr_41271_41291 = state_41256__$1;
(statearr_41271_41291[(2)] = fc);

(statearr_41271_41291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41257 === (8))){
var inst_41245 = (state_41256[(2)]);
var state_41256__$1 = state_41256;
if(cljs.core.truth_(inst_41245)){
var statearr_41272_41292 = state_41256__$1;
(statearr_41272_41292[(1)] = (12));

} else {
var statearr_41273_41293 = state_41256__$1;
(statearr_41273_41293[(1)] = (13));

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
});})(c__40843__auto___41279,tc,fc))
;
return ((function (switch__40755__auto__,c__40843__auto___41279,tc,fc){
return (function() {
var cljs$core$async$state_machine__40756__auto__ = null;
var cljs$core$async$state_machine__40756__auto____0 = (function (){
var statearr_41274 = [null,null,null,null,null,null,null,null,null];
(statearr_41274[(0)] = cljs$core$async$state_machine__40756__auto__);

(statearr_41274[(1)] = (1));

return statearr_41274;
});
var cljs$core$async$state_machine__40756__auto____1 = (function (state_41256){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_41256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e41275){if((e41275 instanceof Object)){
var ex__40759__auto__ = e41275;
var statearr_41276_41294 = state_41256;
(statearr_41276_41294[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41295 = state_41256;
state_41256 = G__41295;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$state_machine__40756__auto__ = function(state_41256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40756__auto____1.call(this,state_41256);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40756__auto____0;
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40756__auto____1;
return cljs$core$async$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___41279,tc,fc))
})();
var state__40845__auto__ = (function (){var statearr_41277 = f__40844__auto__.call(null);
(statearr_41277[(6)] = c__40843__auto___41279);

return statearr_41277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___41279,tc,fc))
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
var c__40843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto__){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto__){
return (function (state_41316){
var state_val_41317 = (state_41316[(1)]);
if((state_val_41317 === (7))){
var inst_41312 = (state_41316[(2)]);
var state_41316__$1 = state_41316;
var statearr_41318_41336 = state_41316__$1;
(statearr_41318_41336[(2)] = inst_41312);

(statearr_41318_41336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (1))){
var inst_41296 = init;
var state_41316__$1 = (function (){var statearr_41319 = state_41316;
(statearr_41319[(7)] = inst_41296);

return statearr_41319;
})();
var statearr_41320_41337 = state_41316__$1;
(statearr_41320_41337[(2)] = null);

(statearr_41320_41337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (4))){
var inst_41299 = (state_41316[(8)]);
var inst_41299__$1 = (state_41316[(2)]);
var inst_41300 = (inst_41299__$1 == null);
var state_41316__$1 = (function (){var statearr_41321 = state_41316;
(statearr_41321[(8)] = inst_41299__$1);

return statearr_41321;
})();
if(cljs.core.truth_(inst_41300)){
var statearr_41322_41338 = state_41316__$1;
(statearr_41322_41338[(1)] = (5));

} else {
var statearr_41323_41339 = state_41316__$1;
(statearr_41323_41339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (6))){
var inst_41299 = (state_41316[(8)]);
var inst_41303 = (state_41316[(9)]);
var inst_41296 = (state_41316[(7)]);
var inst_41303__$1 = f.call(null,inst_41296,inst_41299);
var inst_41304 = cljs.core.reduced_QMARK_.call(null,inst_41303__$1);
var state_41316__$1 = (function (){var statearr_41324 = state_41316;
(statearr_41324[(9)] = inst_41303__$1);

return statearr_41324;
})();
if(inst_41304){
var statearr_41325_41340 = state_41316__$1;
(statearr_41325_41340[(1)] = (8));

} else {
var statearr_41326_41341 = state_41316__$1;
(statearr_41326_41341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (3))){
var inst_41314 = (state_41316[(2)]);
var state_41316__$1 = state_41316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41316__$1,inst_41314);
} else {
if((state_val_41317 === (2))){
var state_41316__$1 = state_41316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41316__$1,(4),ch);
} else {
if((state_val_41317 === (9))){
var inst_41303 = (state_41316[(9)]);
var inst_41296 = inst_41303;
var state_41316__$1 = (function (){var statearr_41327 = state_41316;
(statearr_41327[(7)] = inst_41296);

return statearr_41327;
})();
var statearr_41328_41342 = state_41316__$1;
(statearr_41328_41342[(2)] = null);

(statearr_41328_41342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (5))){
var inst_41296 = (state_41316[(7)]);
var state_41316__$1 = state_41316;
var statearr_41329_41343 = state_41316__$1;
(statearr_41329_41343[(2)] = inst_41296);

(statearr_41329_41343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (10))){
var inst_41310 = (state_41316[(2)]);
var state_41316__$1 = state_41316;
var statearr_41330_41344 = state_41316__$1;
(statearr_41330_41344[(2)] = inst_41310);

(statearr_41330_41344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (8))){
var inst_41303 = (state_41316[(9)]);
var inst_41306 = cljs.core.deref.call(null,inst_41303);
var state_41316__$1 = state_41316;
var statearr_41331_41345 = state_41316__$1;
(statearr_41331_41345[(2)] = inst_41306);

(statearr_41331_41345[(1)] = (10));


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
});})(c__40843__auto__))
;
return ((function (switch__40755__auto__,c__40843__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40756__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40756__auto____0 = (function (){
var statearr_41332 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41332[(0)] = cljs$core$async$reduce_$_state_machine__40756__auto__);

(statearr_41332[(1)] = (1));

return statearr_41332;
});
var cljs$core$async$reduce_$_state_machine__40756__auto____1 = (function (state_41316){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_41316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e41333){if((e41333 instanceof Object)){
var ex__40759__auto__ = e41333;
var statearr_41334_41346 = state_41316;
(statearr_41334_41346[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41347 = state_41316;
state_41316 = G__41347;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40756__auto__ = function(state_41316){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40756__auto____1.call(this,state_41316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40756__auto____0;
cljs$core$async$reduce_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40756__auto____1;
return cljs$core$async$reduce_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto__))
})();
var state__40845__auto__ = (function (){var statearr_41335 = f__40844__auto__.call(null);
(statearr_41335[(6)] = c__40843__auto__);

return statearr_41335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto__))
);

return c__40843__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto__,f__$1){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto__,f__$1){
return (function (state_41353){
var state_val_41354 = (state_41353[(1)]);
if((state_val_41354 === (1))){
var inst_41348 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41353__$1 = state_41353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41353__$1,(2),inst_41348);
} else {
if((state_val_41354 === (2))){
var inst_41350 = (state_41353[(2)]);
var inst_41351 = f__$1.call(null,inst_41350);
var state_41353__$1 = state_41353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41353__$1,inst_41351);
} else {
return null;
}
}
});})(c__40843__auto__,f__$1))
;
return ((function (switch__40755__auto__,c__40843__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40756__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40756__auto____0 = (function (){
var statearr_41355 = [null,null,null,null,null,null,null];
(statearr_41355[(0)] = cljs$core$async$transduce_$_state_machine__40756__auto__);

(statearr_41355[(1)] = (1));

return statearr_41355;
});
var cljs$core$async$transduce_$_state_machine__40756__auto____1 = (function (state_41353){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_41353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e41356){if((e41356 instanceof Object)){
var ex__40759__auto__ = e41356;
var statearr_41357_41359 = state_41353;
(statearr_41357_41359[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41360 = state_41353;
state_41353 = G__41360;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40756__auto__ = function(state_41353){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40756__auto____1.call(this,state_41353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40756__auto____0;
cljs$core$async$transduce_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40756__auto____1;
return cljs$core$async$transduce_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto__,f__$1))
})();
var state__40845__auto__ = (function (){var statearr_41358 = f__40844__auto__.call(null);
(statearr_41358[(6)] = c__40843__auto__);

return statearr_41358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto__,f__$1))
);

return c__40843__auto__;
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
var G__41362 = arguments.length;
switch (G__41362) {
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
var c__40843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto__){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto__){
return (function (state_41387){
var state_val_41388 = (state_41387[(1)]);
if((state_val_41388 === (7))){
var inst_41369 = (state_41387[(2)]);
var state_41387__$1 = state_41387;
var statearr_41389_41410 = state_41387__$1;
(statearr_41389_41410[(2)] = inst_41369);

(statearr_41389_41410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41388 === (1))){
var inst_41363 = cljs.core.seq.call(null,coll);
var inst_41364 = inst_41363;
var state_41387__$1 = (function (){var statearr_41390 = state_41387;
(statearr_41390[(7)] = inst_41364);

return statearr_41390;
})();
var statearr_41391_41411 = state_41387__$1;
(statearr_41391_41411[(2)] = null);

(statearr_41391_41411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41388 === (4))){
var inst_41364 = (state_41387[(7)]);
var inst_41367 = cljs.core.first.call(null,inst_41364);
var state_41387__$1 = state_41387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41387__$1,(7),ch,inst_41367);
} else {
if((state_val_41388 === (13))){
var inst_41381 = (state_41387[(2)]);
var state_41387__$1 = state_41387;
var statearr_41392_41412 = state_41387__$1;
(statearr_41392_41412[(2)] = inst_41381);

(statearr_41392_41412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41388 === (6))){
var inst_41372 = (state_41387[(2)]);
var state_41387__$1 = state_41387;
if(cljs.core.truth_(inst_41372)){
var statearr_41393_41413 = state_41387__$1;
(statearr_41393_41413[(1)] = (8));

} else {
var statearr_41394_41414 = state_41387__$1;
(statearr_41394_41414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41388 === (3))){
var inst_41385 = (state_41387[(2)]);
var state_41387__$1 = state_41387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41387__$1,inst_41385);
} else {
if((state_val_41388 === (12))){
var state_41387__$1 = state_41387;
var statearr_41395_41415 = state_41387__$1;
(statearr_41395_41415[(2)] = null);

(statearr_41395_41415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41388 === (2))){
var inst_41364 = (state_41387[(7)]);
var state_41387__$1 = state_41387;
if(cljs.core.truth_(inst_41364)){
var statearr_41396_41416 = state_41387__$1;
(statearr_41396_41416[(1)] = (4));

} else {
var statearr_41397_41417 = state_41387__$1;
(statearr_41397_41417[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41388 === (11))){
var inst_41378 = cljs.core.async.close_BANG_.call(null,ch);
var state_41387__$1 = state_41387;
var statearr_41398_41418 = state_41387__$1;
(statearr_41398_41418[(2)] = inst_41378);

(statearr_41398_41418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41388 === (9))){
var state_41387__$1 = state_41387;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41399_41419 = state_41387__$1;
(statearr_41399_41419[(1)] = (11));

} else {
var statearr_41400_41420 = state_41387__$1;
(statearr_41400_41420[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41388 === (5))){
var inst_41364 = (state_41387[(7)]);
var state_41387__$1 = state_41387;
var statearr_41401_41421 = state_41387__$1;
(statearr_41401_41421[(2)] = inst_41364);

(statearr_41401_41421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41388 === (10))){
var inst_41383 = (state_41387[(2)]);
var state_41387__$1 = state_41387;
var statearr_41402_41422 = state_41387__$1;
(statearr_41402_41422[(2)] = inst_41383);

(statearr_41402_41422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41388 === (8))){
var inst_41364 = (state_41387[(7)]);
var inst_41374 = cljs.core.next.call(null,inst_41364);
var inst_41364__$1 = inst_41374;
var state_41387__$1 = (function (){var statearr_41403 = state_41387;
(statearr_41403[(7)] = inst_41364__$1);

return statearr_41403;
})();
var statearr_41404_41423 = state_41387__$1;
(statearr_41404_41423[(2)] = null);

(statearr_41404_41423[(1)] = (2));


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
});})(c__40843__auto__))
;
return ((function (switch__40755__auto__,c__40843__auto__){
return (function() {
var cljs$core$async$state_machine__40756__auto__ = null;
var cljs$core$async$state_machine__40756__auto____0 = (function (){
var statearr_41405 = [null,null,null,null,null,null,null,null];
(statearr_41405[(0)] = cljs$core$async$state_machine__40756__auto__);

(statearr_41405[(1)] = (1));

return statearr_41405;
});
var cljs$core$async$state_machine__40756__auto____1 = (function (state_41387){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_41387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e41406){if((e41406 instanceof Object)){
var ex__40759__auto__ = e41406;
var statearr_41407_41424 = state_41387;
(statearr_41407_41424[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41425 = state_41387;
state_41387 = G__41425;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$state_machine__40756__auto__ = function(state_41387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40756__auto____1.call(this,state_41387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40756__auto____0;
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40756__auto____1;
return cljs$core$async$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto__))
})();
var state__40845__auto__ = (function (){var statearr_41408 = f__40844__auto__.call(null);
(statearr_41408[(6)] = c__40843__auto__);

return statearr_41408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto__))
);

return c__40843__auto__;
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
var x__38974__auto__ = (((_ == null))?null:_);
var m__38975__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,_);
} else {
var m__38975__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,_);
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
var x__38974__auto__ = (((m == null))?null:m);
var m__38975__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__38975__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__38974__auto__ = (((m == null))?null:m);
var m__38975__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,m,ch);
} else {
var m__38975__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,m,ch);
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
var x__38974__auto__ = (((m == null))?null:m);
var m__38975__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,m);
} else {
var m__38975__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async41426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41426 = (function (ch,cs,meta41427){
this.ch = ch;
this.cs = cs;
this.meta41427 = meta41427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41428,meta41427__$1){
var self__ = this;
var _41428__$1 = this;
return (new cljs.core.async.t_cljs$core$async41426(self__.ch,self__.cs,meta41427__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41428){
var self__ = this;
var _41428__$1 = this;
return self__.meta41427;
});})(cs))
;

cljs.core.async.t_cljs$core$async41426.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41426.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41426.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41426.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41426.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41426.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41426.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41427","meta41427",-915489198,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41426";

cljs.core.async.t_cljs$core$async41426.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__38916__auto__,writer__38917__auto__,opt__38918__auto__){
return cljs.core._write.call(null,writer__38917__auto__,"cljs.core.async/t_cljs$core$async41426");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41426 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41426(ch__$1,cs__$1,meta41427){
return (new cljs.core.async.t_cljs$core$async41426(ch__$1,cs__$1,meta41427));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41426(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40843__auto___41648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___41648,cs,m,dchan,dctr,done){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___41648,cs,m,dchan,dctr,done){
return (function (state_41563){
var state_val_41564 = (state_41563[(1)]);
if((state_val_41564 === (7))){
var inst_41559 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41565_41649 = state_41563__$1;
(statearr_41565_41649[(2)] = inst_41559);

(statearr_41565_41649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (20))){
var inst_41462 = (state_41563[(7)]);
var inst_41474 = cljs.core.first.call(null,inst_41462);
var inst_41475 = cljs.core.nth.call(null,inst_41474,(0),null);
var inst_41476 = cljs.core.nth.call(null,inst_41474,(1),null);
var state_41563__$1 = (function (){var statearr_41566 = state_41563;
(statearr_41566[(8)] = inst_41475);

return statearr_41566;
})();
if(cljs.core.truth_(inst_41476)){
var statearr_41567_41650 = state_41563__$1;
(statearr_41567_41650[(1)] = (22));

} else {
var statearr_41568_41651 = state_41563__$1;
(statearr_41568_41651[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (27))){
var inst_41431 = (state_41563[(9)]);
var inst_41511 = (state_41563[(10)]);
var inst_41506 = (state_41563[(11)]);
var inst_41504 = (state_41563[(12)]);
var inst_41511__$1 = cljs.core._nth.call(null,inst_41504,inst_41506);
var inst_41512 = cljs.core.async.put_BANG_.call(null,inst_41511__$1,inst_41431,done);
var state_41563__$1 = (function (){var statearr_41569 = state_41563;
(statearr_41569[(10)] = inst_41511__$1);

return statearr_41569;
})();
if(cljs.core.truth_(inst_41512)){
var statearr_41570_41652 = state_41563__$1;
(statearr_41570_41652[(1)] = (30));

} else {
var statearr_41571_41653 = state_41563__$1;
(statearr_41571_41653[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (1))){
var state_41563__$1 = state_41563;
var statearr_41572_41654 = state_41563__$1;
(statearr_41572_41654[(2)] = null);

(statearr_41572_41654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (24))){
var inst_41462 = (state_41563[(7)]);
var inst_41481 = (state_41563[(2)]);
var inst_41482 = cljs.core.next.call(null,inst_41462);
var inst_41440 = inst_41482;
var inst_41441 = null;
var inst_41442 = (0);
var inst_41443 = (0);
var state_41563__$1 = (function (){var statearr_41573 = state_41563;
(statearr_41573[(13)] = inst_41442);

(statearr_41573[(14)] = inst_41441);

(statearr_41573[(15)] = inst_41443);

(statearr_41573[(16)] = inst_41481);

(statearr_41573[(17)] = inst_41440);

return statearr_41573;
})();
var statearr_41574_41655 = state_41563__$1;
(statearr_41574_41655[(2)] = null);

(statearr_41574_41655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (39))){
var state_41563__$1 = state_41563;
var statearr_41578_41656 = state_41563__$1;
(statearr_41578_41656[(2)] = null);

(statearr_41578_41656[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (4))){
var inst_41431 = (state_41563[(9)]);
var inst_41431__$1 = (state_41563[(2)]);
var inst_41432 = (inst_41431__$1 == null);
var state_41563__$1 = (function (){var statearr_41579 = state_41563;
(statearr_41579[(9)] = inst_41431__$1);

return statearr_41579;
})();
if(cljs.core.truth_(inst_41432)){
var statearr_41580_41657 = state_41563__$1;
(statearr_41580_41657[(1)] = (5));

} else {
var statearr_41581_41658 = state_41563__$1;
(statearr_41581_41658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (15))){
var inst_41442 = (state_41563[(13)]);
var inst_41441 = (state_41563[(14)]);
var inst_41443 = (state_41563[(15)]);
var inst_41440 = (state_41563[(17)]);
var inst_41458 = (state_41563[(2)]);
var inst_41459 = (inst_41443 + (1));
var tmp41575 = inst_41442;
var tmp41576 = inst_41441;
var tmp41577 = inst_41440;
var inst_41440__$1 = tmp41577;
var inst_41441__$1 = tmp41576;
var inst_41442__$1 = tmp41575;
var inst_41443__$1 = inst_41459;
var state_41563__$1 = (function (){var statearr_41582 = state_41563;
(statearr_41582[(13)] = inst_41442__$1);

(statearr_41582[(18)] = inst_41458);

(statearr_41582[(14)] = inst_41441__$1);

(statearr_41582[(15)] = inst_41443__$1);

(statearr_41582[(17)] = inst_41440__$1);

return statearr_41582;
})();
var statearr_41583_41659 = state_41563__$1;
(statearr_41583_41659[(2)] = null);

(statearr_41583_41659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (21))){
var inst_41485 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41587_41660 = state_41563__$1;
(statearr_41587_41660[(2)] = inst_41485);

(statearr_41587_41660[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (31))){
var inst_41511 = (state_41563[(10)]);
var inst_41515 = done.call(null,null);
var inst_41516 = cljs.core.async.untap_STAR_.call(null,m,inst_41511);
var state_41563__$1 = (function (){var statearr_41588 = state_41563;
(statearr_41588[(19)] = inst_41515);

return statearr_41588;
})();
var statearr_41589_41661 = state_41563__$1;
(statearr_41589_41661[(2)] = inst_41516);

(statearr_41589_41661[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (32))){
var inst_41503 = (state_41563[(20)]);
var inst_41506 = (state_41563[(11)]);
var inst_41504 = (state_41563[(12)]);
var inst_41505 = (state_41563[(21)]);
var inst_41518 = (state_41563[(2)]);
var inst_41519 = (inst_41506 + (1));
var tmp41584 = inst_41503;
var tmp41585 = inst_41504;
var tmp41586 = inst_41505;
var inst_41503__$1 = tmp41584;
var inst_41504__$1 = tmp41585;
var inst_41505__$1 = tmp41586;
var inst_41506__$1 = inst_41519;
var state_41563__$1 = (function (){var statearr_41590 = state_41563;
(statearr_41590[(22)] = inst_41518);

(statearr_41590[(20)] = inst_41503__$1);

(statearr_41590[(11)] = inst_41506__$1);

(statearr_41590[(12)] = inst_41504__$1);

(statearr_41590[(21)] = inst_41505__$1);

return statearr_41590;
})();
var statearr_41591_41662 = state_41563__$1;
(statearr_41591_41662[(2)] = null);

(statearr_41591_41662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (40))){
var inst_41531 = (state_41563[(23)]);
var inst_41535 = done.call(null,null);
var inst_41536 = cljs.core.async.untap_STAR_.call(null,m,inst_41531);
var state_41563__$1 = (function (){var statearr_41592 = state_41563;
(statearr_41592[(24)] = inst_41535);

return statearr_41592;
})();
var statearr_41593_41663 = state_41563__$1;
(statearr_41593_41663[(2)] = inst_41536);

(statearr_41593_41663[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (33))){
var inst_41522 = (state_41563[(25)]);
var inst_41524 = cljs.core.chunked_seq_QMARK_.call(null,inst_41522);
var state_41563__$1 = state_41563;
if(inst_41524){
var statearr_41594_41664 = state_41563__$1;
(statearr_41594_41664[(1)] = (36));

} else {
var statearr_41595_41665 = state_41563__$1;
(statearr_41595_41665[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (13))){
var inst_41452 = (state_41563[(26)]);
var inst_41455 = cljs.core.async.close_BANG_.call(null,inst_41452);
var state_41563__$1 = state_41563;
var statearr_41596_41666 = state_41563__$1;
(statearr_41596_41666[(2)] = inst_41455);

(statearr_41596_41666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (22))){
var inst_41475 = (state_41563[(8)]);
var inst_41478 = cljs.core.async.close_BANG_.call(null,inst_41475);
var state_41563__$1 = state_41563;
var statearr_41597_41667 = state_41563__$1;
(statearr_41597_41667[(2)] = inst_41478);

(statearr_41597_41667[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (36))){
var inst_41522 = (state_41563[(25)]);
var inst_41526 = cljs.core.chunk_first.call(null,inst_41522);
var inst_41527 = cljs.core.chunk_rest.call(null,inst_41522);
var inst_41528 = cljs.core.count.call(null,inst_41526);
var inst_41503 = inst_41527;
var inst_41504 = inst_41526;
var inst_41505 = inst_41528;
var inst_41506 = (0);
var state_41563__$1 = (function (){var statearr_41598 = state_41563;
(statearr_41598[(20)] = inst_41503);

(statearr_41598[(11)] = inst_41506);

(statearr_41598[(12)] = inst_41504);

(statearr_41598[(21)] = inst_41505);

return statearr_41598;
})();
var statearr_41599_41668 = state_41563__$1;
(statearr_41599_41668[(2)] = null);

(statearr_41599_41668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (41))){
var inst_41522 = (state_41563[(25)]);
var inst_41538 = (state_41563[(2)]);
var inst_41539 = cljs.core.next.call(null,inst_41522);
var inst_41503 = inst_41539;
var inst_41504 = null;
var inst_41505 = (0);
var inst_41506 = (0);
var state_41563__$1 = (function (){var statearr_41600 = state_41563;
(statearr_41600[(20)] = inst_41503);

(statearr_41600[(27)] = inst_41538);

(statearr_41600[(11)] = inst_41506);

(statearr_41600[(12)] = inst_41504);

(statearr_41600[(21)] = inst_41505);

return statearr_41600;
})();
var statearr_41601_41669 = state_41563__$1;
(statearr_41601_41669[(2)] = null);

(statearr_41601_41669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (43))){
var state_41563__$1 = state_41563;
var statearr_41602_41670 = state_41563__$1;
(statearr_41602_41670[(2)] = null);

(statearr_41602_41670[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (29))){
var inst_41547 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41603_41671 = state_41563__$1;
(statearr_41603_41671[(2)] = inst_41547);

(statearr_41603_41671[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (44))){
var inst_41556 = (state_41563[(2)]);
var state_41563__$1 = (function (){var statearr_41604 = state_41563;
(statearr_41604[(28)] = inst_41556);

return statearr_41604;
})();
var statearr_41605_41672 = state_41563__$1;
(statearr_41605_41672[(2)] = null);

(statearr_41605_41672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (6))){
var inst_41495 = (state_41563[(29)]);
var inst_41494 = cljs.core.deref.call(null,cs);
var inst_41495__$1 = cljs.core.keys.call(null,inst_41494);
var inst_41496 = cljs.core.count.call(null,inst_41495__$1);
var inst_41497 = cljs.core.reset_BANG_.call(null,dctr,inst_41496);
var inst_41502 = cljs.core.seq.call(null,inst_41495__$1);
var inst_41503 = inst_41502;
var inst_41504 = null;
var inst_41505 = (0);
var inst_41506 = (0);
var state_41563__$1 = (function (){var statearr_41606 = state_41563;
(statearr_41606[(30)] = inst_41497);

(statearr_41606[(29)] = inst_41495__$1);

(statearr_41606[(20)] = inst_41503);

(statearr_41606[(11)] = inst_41506);

(statearr_41606[(12)] = inst_41504);

(statearr_41606[(21)] = inst_41505);

return statearr_41606;
})();
var statearr_41607_41673 = state_41563__$1;
(statearr_41607_41673[(2)] = null);

(statearr_41607_41673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (28))){
var inst_41503 = (state_41563[(20)]);
var inst_41522 = (state_41563[(25)]);
var inst_41522__$1 = cljs.core.seq.call(null,inst_41503);
var state_41563__$1 = (function (){var statearr_41608 = state_41563;
(statearr_41608[(25)] = inst_41522__$1);

return statearr_41608;
})();
if(inst_41522__$1){
var statearr_41609_41674 = state_41563__$1;
(statearr_41609_41674[(1)] = (33));

} else {
var statearr_41610_41675 = state_41563__$1;
(statearr_41610_41675[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (25))){
var inst_41506 = (state_41563[(11)]);
var inst_41505 = (state_41563[(21)]);
var inst_41508 = (inst_41506 < inst_41505);
var inst_41509 = inst_41508;
var state_41563__$1 = state_41563;
if(cljs.core.truth_(inst_41509)){
var statearr_41611_41676 = state_41563__$1;
(statearr_41611_41676[(1)] = (27));

} else {
var statearr_41612_41677 = state_41563__$1;
(statearr_41612_41677[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (34))){
var state_41563__$1 = state_41563;
var statearr_41613_41678 = state_41563__$1;
(statearr_41613_41678[(2)] = null);

(statearr_41613_41678[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (17))){
var state_41563__$1 = state_41563;
var statearr_41614_41679 = state_41563__$1;
(statearr_41614_41679[(2)] = null);

(statearr_41614_41679[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (3))){
var inst_41561 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41563__$1,inst_41561);
} else {
if((state_val_41564 === (12))){
var inst_41490 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41615_41680 = state_41563__$1;
(statearr_41615_41680[(2)] = inst_41490);

(statearr_41615_41680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (2))){
var state_41563__$1 = state_41563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41563__$1,(4),ch);
} else {
if((state_val_41564 === (23))){
var state_41563__$1 = state_41563;
var statearr_41616_41681 = state_41563__$1;
(statearr_41616_41681[(2)] = null);

(statearr_41616_41681[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (35))){
var inst_41545 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41617_41682 = state_41563__$1;
(statearr_41617_41682[(2)] = inst_41545);

(statearr_41617_41682[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (19))){
var inst_41462 = (state_41563[(7)]);
var inst_41466 = cljs.core.chunk_first.call(null,inst_41462);
var inst_41467 = cljs.core.chunk_rest.call(null,inst_41462);
var inst_41468 = cljs.core.count.call(null,inst_41466);
var inst_41440 = inst_41467;
var inst_41441 = inst_41466;
var inst_41442 = inst_41468;
var inst_41443 = (0);
var state_41563__$1 = (function (){var statearr_41618 = state_41563;
(statearr_41618[(13)] = inst_41442);

(statearr_41618[(14)] = inst_41441);

(statearr_41618[(15)] = inst_41443);

(statearr_41618[(17)] = inst_41440);

return statearr_41618;
})();
var statearr_41619_41683 = state_41563__$1;
(statearr_41619_41683[(2)] = null);

(statearr_41619_41683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (11))){
var inst_41462 = (state_41563[(7)]);
var inst_41440 = (state_41563[(17)]);
var inst_41462__$1 = cljs.core.seq.call(null,inst_41440);
var state_41563__$1 = (function (){var statearr_41620 = state_41563;
(statearr_41620[(7)] = inst_41462__$1);

return statearr_41620;
})();
if(inst_41462__$1){
var statearr_41621_41684 = state_41563__$1;
(statearr_41621_41684[(1)] = (16));

} else {
var statearr_41622_41685 = state_41563__$1;
(statearr_41622_41685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (9))){
var inst_41492 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41623_41686 = state_41563__$1;
(statearr_41623_41686[(2)] = inst_41492);

(statearr_41623_41686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (5))){
var inst_41438 = cljs.core.deref.call(null,cs);
var inst_41439 = cljs.core.seq.call(null,inst_41438);
var inst_41440 = inst_41439;
var inst_41441 = null;
var inst_41442 = (0);
var inst_41443 = (0);
var state_41563__$1 = (function (){var statearr_41624 = state_41563;
(statearr_41624[(13)] = inst_41442);

(statearr_41624[(14)] = inst_41441);

(statearr_41624[(15)] = inst_41443);

(statearr_41624[(17)] = inst_41440);

return statearr_41624;
})();
var statearr_41625_41687 = state_41563__$1;
(statearr_41625_41687[(2)] = null);

(statearr_41625_41687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (14))){
var state_41563__$1 = state_41563;
var statearr_41626_41688 = state_41563__$1;
(statearr_41626_41688[(2)] = null);

(statearr_41626_41688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (45))){
var inst_41553 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41627_41689 = state_41563__$1;
(statearr_41627_41689[(2)] = inst_41553);

(statearr_41627_41689[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (26))){
var inst_41495 = (state_41563[(29)]);
var inst_41549 = (state_41563[(2)]);
var inst_41550 = cljs.core.seq.call(null,inst_41495);
var state_41563__$1 = (function (){var statearr_41628 = state_41563;
(statearr_41628[(31)] = inst_41549);

return statearr_41628;
})();
if(inst_41550){
var statearr_41629_41690 = state_41563__$1;
(statearr_41629_41690[(1)] = (42));

} else {
var statearr_41630_41691 = state_41563__$1;
(statearr_41630_41691[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (16))){
var inst_41462 = (state_41563[(7)]);
var inst_41464 = cljs.core.chunked_seq_QMARK_.call(null,inst_41462);
var state_41563__$1 = state_41563;
if(inst_41464){
var statearr_41631_41692 = state_41563__$1;
(statearr_41631_41692[(1)] = (19));

} else {
var statearr_41632_41693 = state_41563__$1;
(statearr_41632_41693[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (38))){
var inst_41542 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41633_41694 = state_41563__$1;
(statearr_41633_41694[(2)] = inst_41542);

(statearr_41633_41694[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (30))){
var state_41563__$1 = state_41563;
var statearr_41634_41695 = state_41563__$1;
(statearr_41634_41695[(2)] = null);

(statearr_41634_41695[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (10))){
var inst_41441 = (state_41563[(14)]);
var inst_41443 = (state_41563[(15)]);
var inst_41451 = cljs.core._nth.call(null,inst_41441,inst_41443);
var inst_41452 = cljs.core.nth.call(null,inst_41451,(0),null);
var inst_41453 = cljs.core.nth.call(null,inst_41451,(1),null);
var state_41563__$1 = (function (){var statearr_41635 = state_41563;
(statearr_41635[(26)] = inst_41452);

return statearr_41635;
})();
if(cljs.core.truth_(inst_41453)){
var statearr_41636_41696 = state_41563__$1;
(statearr_41636_41696[(1)] = (13));

} else {
var statearr_41637_41697 = state_41563__$1;
(statearr_41637_41697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (18))){
var inst_41488 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41638_41698 = state_41563__$1;
(statearr_41638_41698[(2)] = inst_41488);

(statearr_41638_41698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (42))){
var state_41563__$1 = state_41563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41563__$1,(45),dchan);
} else {
if((state_val_41564 === (37))){
var inst_41431 = (state_41563[(9)]);
var inst_41522 = (state_41563[(25)]);
var inst_41531 = (state_41563[(23)]);
var inst_41531__$1 = cljs.core.first.call(null,inst_41522);
var inst_41532 = cljs.core.async.put_BANG_.call(null,inst_41531__$1,inst_41431,done);
var state_41563__$1 = (function (){var statearr_41639 = state_41563;
(statearr_41639[(23)] = inst_41531__$1);

return statearr_41639;
})();
if(cljs.core.truth_(inst_41532)){
var statearr_41640_41699 = state_41563__$1;
(statearr_41640_41699[(1)] = (39));

} else {
var statearr_41641_41700 = state_41563__$1;
(statearr_41641_41700[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (8))){
var inst_41442 = (state_41563[(13)]);
var inst_41443 = (state_41563[(15)]);
var inst_41445 = (inst_41443 < inst_41442);
var inst_41446 = inst_41445;
var state_41563__$1 = state_41563;
if(cljs.core.truth_(inst_41446)){
var statearr_41642_41701 = state_41563__$1;
(statearr_41642_41701[(1)] = (10));

} else {
var statearr_41643_41702 = state_41563__$1;
(statearr_41643_41702[(1)] = (11));

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
});})(c__40843__auto___41648,cs,m,dchan,dctr,done))
;
return ((function (switch__40755__auto__,c__40843__auto___41648,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40756__auto__ = null;
var cljs$core$async$mult_$_state_machine__40756__auto____0 = (function (){
var statearr_41644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41644[(0)] = cljs$core$async$mult_$_state_machine__40756__auto__);

(statearr_41644[(1)] = (1));

return statearr_41644;
});
var cljs$core$async$mult_$_state_machine__40756__auto____1 = (function (state_41563){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_41563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e41645){if((e41645 instanceof Object)){
var ex__40759__auto__ = e41645;
var statearr_41646_41703 = state_41563;
(statearr_41646_41703[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41704 = state_41563;
state_41563 = G__41704;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40756__auto__ = function(state_41563){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40756__auto____1.call(this,state_41563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40756__auto____0;
cljs$core$async$mult_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40756__auto____1;
return cljs$core$async$mult_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___41648,cs,m,dchan,dctr,done))
})();
var state__40845__auto__ = (function (){var statearr_41647 = f__40844__auto__.call(null);
(statearr_41647[(6)] = c__40843__auto___41648);

return statearr_41647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___41648,cs,m,dchan,dctr,done))
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
var G__41706 = arguments.length;
switch (G__41706) {
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
var x__38974__auto__ = (((m == null))?null:m);
var m__38975__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,m,ch);
} else {
var m__38975__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,m,ch);
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
var x__38974__auto__ = (((m == null))?null:m);
var m__38975__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,m,ch);
} else {
var m__38975__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,m,ch);
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
var x__38974__auto__ = (((m == null))?null:m);
var m__38975__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,m);
} else {
var m__38975__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,m);
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
var x__38974__auto__ = (((m == null))?null:m);
var m__38975__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,m,state_map);
} else {
var m__38975__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,m,state_map);
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
var x__38974__auto__ = (((m == null))?null:m);
var m__38975__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,m,mode);
} else {
var m__38975__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__39469__auto__ = [];
var len__39462__auto___41718 = arguments.length;
var i__39463__auto___41719 = (0);
while(true){
if((i__39463__auto___41719 < len__39462__auto___41718)){
args__39469__auto__.push((arguments[i__39463__auto___41719]));

var G__41720 = (i__39463__auto___41719 + (1));
i__39463__auto___41719 = G__41720;
continue;
} else {
}
break;
}

var argseq__39470__auto__ = ((((3) < args__39469__auto__.length))?(new cljs.core.IndexedSeq(args__39469__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__39470__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41712){
var map__41713 = p__41712;
var map__41713__$1 = ((((!((map__41713 == null)))?((((map__41713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41713):map__41713);
var opts = map__41713__$1;
var statearr_41715_41721 = state;
(statearr_41715_41721[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__41713,map__41713__$1,opts){
return (function (val){
var statearr_41716_41722 = state;
(statearr_41716_41722[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41713,map__41713__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_41717_41723 = state;
(statearr_41717_41723[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41708){
var G__41709 = cljs.core.first.call(null,seq41708);
var seq41708__$1 = cljs.core.next.call(null,seq41708);
var G__41710 = cljs.core.first.call(null,seq41708__$1);
var seq41708__$2 = cljs.core.next.call(null,seq41708__$1);
var G__41711 = cljs.core.first.call(null,seq41708__$2);
var seq41708__$3 = cljs.core.next.call(null,seq41708__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41709,G__41710,G__41711,seq41708__$3);
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
if(typeof cljs.core.async.t_cljs$core$async41724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41724 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta41725){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta41725 = meta41725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41726,meta41725__$1){
var self__ = this;
var _41726__$1 = this;
return (new cljs.core.async.t_cljs$core$async41724(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta41725__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41726){
var self__ = this;
var _41726__$1 = this;
return self__.meta41725;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41724.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41724.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41724.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41724.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41724.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41724.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41724.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41724.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async41724.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta41725","meta41725",828251303,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41724";

cljs.core.async.t_cljs$core$async41724.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__38916__auto__,writer__38917__auto__,opt__38918__auto__){
return cljs.core._write.call(null,writer__38917__auto__,"cljs.core.async/t_cljs$core$async41724");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41724 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41724(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41725){
return (new cljs.core.async.t_cljs$core$async41724(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41725));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41724(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40843__auto___41888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___41888,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___41888,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41828){
var state_val_41829 = (state_41828[(1)]);
if((state_val_41829 === (7))){
var inst_41743 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
var statearr_41830_41889 = state_41828__$1;
(statearr_41830_41889[(2)] = inst_41743);

(statearr_41830_41889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (20))){
var inst_41755 = (state_41828[(7)]);
var state_41828__$1 = state_41828;
var statearr_41831_41890 = state_41828__$1;
(statearr_41831_41890[(2)] = inst_41755);

(statearr_41831_41890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (27))){
var state_41828__$1 = state_41828;
var statearr_41832_41891 = state_41828__$1;
(statearr_41832_41891[(2)] = null);

(statearr_41832_41891[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (1))){
var inst_41730 = (state_41828[(8)]);
var inst_41730__$1 = calc_state.call(null);
var inst_41732 = (inst_41730__$1 == null);
var inst_41733 = cljs.core.not.call(null,inst_41732);
var state_41828__$1 = (function (){var statearr_41833 = state_41828;
(statearr_41833[(8)] = inst_41730__$1);

return statearr_41833;
})();
if(inst_41733){
var statearr_41834_41892 = state_41828__$1;
(statearr_41834_41892[(1)] = (2));

} else {
var statearr_41835_41893 = state_41828__$1;
(statearr_41835_41893[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (24))){
var inst_41802 = (state_41828[(9)]);
var inst_41779 = (state_41828[(10)]);
var inst_41788 = (state_41828[(11)]);
var inst_41802__$1 = inst_41779.call(null,inst_41788);
var state_41828__$1 = (function (){var statearr_41836 = state_41828;
(statearr_41836[(9)] = inst_41802__$1);

return statearr_41836;
})();
if(cljs.core.truth_(inst_41802__$1)){
var statearr_41837_41894 = state_41828__$1;
(statearr_41837_41894[(1)] = (29));

} else {
var statearr_41838_41895 = state_41828__$1;
(statearr_41838_41895[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (4))){
var inst_41746 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
if(cljs.core.truth_(inst_41746)){
var statearr_41839_41896 = state_41828__$1;
(statearr_41839_41896[(1)] = (8));

} else {
var statearr_41840_41897 = state_41828__$1;
(statearr_41840_41897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (15))){
var inst_41773 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
if(cljs.core.truth_(inst_41773)){
var statearr_41841_41898 = state_41828__$1;
(statearr_41841_41898[(1)] = (19));

} else {
var statearr_41842_41899 = state_41828__$1;
(statearr_41842_41899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (21))){
var inst_41778 = (state_41828[(12)]);
var inst_41778__$1 = (state_41828[(2)]);
var inst_41779 = cljs.core.get.call(null,inst_41778__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41780 = cljs.core.get.call(null,inst_41778__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41781 = cljs.core.get.call(null,inst_41778__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41828__$1 = (function (){var statearr_41843 = state_41828;
(statearr_41843[(13)] = inst_41780);

(statearr_41843[(10)] = inst_41779);

(statearr_41843[(12)] = inst_41778__$1);

return statearr_41843;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41828__$1,(22),inst_41781);
} else {
if((state_val_41829 === (31))){
var inst_41810 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
if(cljs.core.truth_(inst_41810)){
var statearr_41844_41900 = state_41828__$1;
(statearr_41844_41900[(1)] = (32));

} else {
var statearr_41845_41901 = state_41828__$1;
(statearr_41845_41901[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (32))){
var inst_41787 = (state_41828[(14)]);
var state_41828__$1 = state_41828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41828__$1,(35),out,inst_41787);
} else {
if((state_val_41829 === (33))){
var inst_41778 = (state_41828[(12)]);
var inst_41755 = inst_41778;
var state_41828__$1 = (function (){var statearr_41846 = state_41828;
(statearr_41846[(7)] = inst_41755);

return statearr_41846;
})();
var statearr_41847_41902 = state_41828__$1;
(statearr_41847_41902[(2)] = null);

(statearr_41847_41902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (13))){
var inst_41755 = (state_41828[(7)]);
var inst_41762 = inst_41755.cljs$lang$protocol_mask$partition0$;
var inst_41763 = (inst_41762 & (64));
var inst_41764 = inst_41755.cljs$core$ISeq$;
var inst_41765 = (cljs.core.PROTOCOL_SENTINEL === inst_41764);
var inst_41766 = (inst_41763) || (inst_41765);
var state_41828__$1 = state_41828;
if(cljs.core.truth_(inst_41766)){
var statearr_41848_41903 = state_41828__$1;
(statearr_41848_41903[(1)] = (16));

} else {
var statearr_41849_41904 = state_41828__$1;
(statearr_41849_41904[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (22))){
var inst_41787 = (state_41828[(14)]);
var inst_41788 = (state_41828[(11)]);
var inst_41786 = (state_41828[(2)]);
var inst_41787__$1 = cljs.core.nth.call(null,inst_41786,(0),null);
var inst_41788__$1 = cljs.core.nth.call(null,inst_41786,(1),null);
var inst_41789 = (inst_41787__$1 == null);
var inst_41790 = cljs.core._EQ_.call(null,inst_41788__$1,change);
var inst_41791 = (inst_41789) || (inst_41790);
var state_41828__$1 = (function (){var statearr_41850 = state_41828;
(statearr_41850[(14)] = inst_41787__$1);

(statearr_41850[(11)] = inst_41788__$1);

return statearr_41850;
})();
if(cljs.core.truth_(inst_41791)){
var statearr_41851_41905 = state_41828__$1;
(statearr_41851_41905[(1)] = (23));

} else {
var statearr_41852_41906 = state_41828__$1;
(statearr_41852_41906[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (36))){
var inst_41778 = (state_41828[(12)]);
var inst_41755 = inst_41778;
var state_41828__$1 = (function (){var statearr_41853 = state_41828;
(statearr_41853[(7)] = inst_41755);

return statearr_41853;
})();
var statearr_41854_41907 = state_41828__$1;
(statearr_41854_41907[(2)] = null);

(statearr_41854_41907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (29))){
var inst_41802 = (state_41828[(9)]);
var state_41828__$1 = state_41828;
var statearr_41855_41908 = state_41828__$1;
(statearr_41855_41908[(2)] = inst_41802);

(statearr_41855_41908[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (6))){
var state_41828__$1 = state_41828;
var statearr_41856_41909 = state_41828__$1;
(statearr_41856_41909[(2)] = false);

(statearr_41856_41909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (28))){
var inst_41798 = (state_41828[(2)]);
var inst_41799 = calc_state.call(null);
var inst_41755 = inst_41799;
var state_41828__$1 = (function (){var statearr_41857 = state_41828;
(statearr_41857[(7)] = inst_41755);

(statearr_41857[(15)] = inst_41798);

return statearr_41857;
})();
var statearr_41858_41910 = state_41828__$1;
(statearr_41858_41910[(2)] = null);

(statearr_41858_41910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (25))){
var inst_41824 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
var statearr_41859_41911 = state_41828__$1;
(statearr_41859_41911[(2)] = inst_41824);

(statearr_41859_41911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (34))){
var inst_41822 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
var statearr_41860_41912 = state_41828__$1;
(statearr_41860_41912[(2)] = inst_41822);

(statearr_41860_41912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (17))){
var state_41828__$1 = state_41828;
var statearr_41861_41913 = state_41828__$1;
(statearr_41861_41913[(2)] = false);

(statearr_41861_41913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (3))){
var state_41828__$1 = state_41828;
var statearr_41862_41914 = state_41828__$1;
(statearr_41862_41914[(2)] = false);

(statearr_41862_41914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (12))){
var inst_41826 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41828__$1,inst_41826);
} else {
if((state_val_41829 === (2))){
var inst_41730 = (state_41828[(8)]);
var inst_41735 = inst_41730.cljs$lang$protocol_mask$partition0$;
var inst_41736 = (inst_41735 & (64));
var inst_41737 = inst_41730.cljs$core$ISeq$;
var inst_41738 = (cljs.core.PROTOCOL_SENTINEL === inst_41737);
var inst_41739 = (inst_41736) || (inst_41738);
var state_41828__$1 = state_41828;
if(cljs.core.truth_(inst_41739)){
var statearr_41863_41915 = state_41828__$1;
(statearr_41863_41915[(1)] = (5));

} else {
var statearr_41864_41916 = state_41828__$1;
(statearr_41864_41916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (23))){
var inst_41787 = (state_41828[(14)]);
var inst_41793 = (inst_41787 == null);
var state_41828__$1 = state_41828;
if(cljs.core.truth_(inst_41793)){
var statearr_41865_41917 = state_41828__$1;
(statearr_41865_41917[(1)] = (26));

} else {
var statearr_41866_41918 = state_41828__$1;
(statearr_41866_41918[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (35))){
var inst_41813 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
if(cljs.core.truth_(inst_41813)){
var statearr_41867_41919 = state_41828__$1;
(statearr_41867_41919[(1)] = (36));

} else {
var statearr_41868_41920 = state_41828__$1;
(statearr_41868_41920[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (19))){
var inst_41755 = (state_41828[(7)]);
var inst_41775 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41755);
var state_41828__$1 = state_41828;
var statearr_41869_41921 = state_41828__$1;
(statearr_41869_41921[(2)] = inst_41775);

(statearr_41869_41921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (11))){
var inst_41755 = (state_41828[(7)]);
var inst_41759 = (inst_41755 == null);
var inst_41760 = cljs.core.not.call(null,inst_41759);
var state_41828__$1 = state_41828;
if(inst_41760){
var statearr_41870_41922 = state_41828__$1;
(statearr_41870_41922[(1)] = (13));

} else {
var statearr_41871_41923 = state_41828__$1;
(statearr_41871_41923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (9))){
var inst_41730 = (state_41828[(8)]);
var state_41828__$1 = state_41828;
var statearr_41872_41924 = state_41828__$1;
(statearr_41872_41924[(2)] = inst_41730);

(statearr_41872_41924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (5))){
var state_41828__$1 = state_41828;
var statearr_41873_41925 = state_41828__$1;
(statearr_41873_41925[(2)] = true);

(statearr_41873_41925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (14))){
var state_41828__$1 = state_41828;
var statearr_41874_41926 = state_41828__$1;
(statearr_41874_41926[(2)] = false);

(statearr_41874_41926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (26))){
var inst_41788 = (state_41828[(11)]);
var inst_41795 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41788);
var state_41828__$1 = state_41828;
var statearr_41875_41927 = state_41828__$1;
(statearr_41875_41927[(2)] = inst_41795);

(statearr_41875_41927[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (16))){
var state_41828__$1 = state_41828;
var statearr_41876_41928 = state_41828__$1;
(statearr_41876_41928[(2)] = true);

(statearr_41876_41928[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (38))){
var inst_41818 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
var statearr_41877_41929 = state_41828__$1;
(statearr_41877_41929[(2)] = inst_41818);

(statearr_41877_41929[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (30))){
var inst_41780 = (state_41828[(13)]);
var inst_41779 = (state_41828[(10)]);
var inst_41788 = (state_41828[(11)]);
var inst_41805 = cljs.core.empty_QMARK_.call(null,inst_41779);
var inst_41806 = inst_41780.call(null,inst_41788);
var inst_41807 = cljs.core.not.call(null,inst_41806);
var inst_41808 = (inst_41805) && (inst_41807);
var state_41828__$1 = state_41828;
var statearr_41878_41930 = state_41828__$1;
(statearr_41878_41930[(2)] = inst_41808);

(statearr_41878_41930[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (10))){
var inst_41730 = (state_41828[(8)]);
var inst_41751 = (state_41828[(2)]);
var inst_41752 = cljs.core.get.call(null,inst_41751,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41753 = cljs.core.get.call(null,inst_41751,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41754 = cljs.core.get.call(null,inst_41751,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41755 = inst_41730;
var state_41828__$1 = (function (){var statearr_41879 = state_41828;
(statearr_41879[(7)] = inst_41755);

(statearr_41879[(16)] = inst_41754);

(statearr_41879[(17)] = inst_41753);

(statearr_41879[(18)] = inst_41752);

return statearr_41879;
})();
var statearr_41880_41931 = state_41828__$1;
(statearr_41880_41931[(2)] = null);

(statearr_41880_41931[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (18))){
var inst_41770 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
var statearr_41881_41932 = state_41828__$1;
(statearr_41881_41932[(2)] = inst_41770);

(statearr_41881_41932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (37))){
var state_41828__$1 = state_41828;
var statearr_41882_41933 = state_41828__$1;
(statearr_41882_41933[(2)] = null);

(statearr_41882_41933[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (8))){
var inst_41730 = (state_41828[(8)]);
var inst_41748 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41730);
var state_41828__$1 = state_41828;
var statearr_41883_41934 = state_41828__$1;
(statearr_41883_41934[(2)] = inst_41748);

(statearr_41883_41934[(1)] = (10));


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
});})(c__40843__auto___41888,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40755__auto__,c__40843__auto___41888,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40756__auto__ = null;
var cljs$core$async$mix_$_state_machine__40756__auto____0 = (function (){
var statearr_41884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41884[(0)] = cljs$core$async$mix_$_state_machine__40756__auto__);

(statearr_41884[(1)] = (1));

return statearr_41884;
});
var cljs$core$async$mix_$_state_machine__40756__auto____1 = (function (state_41828){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_41828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e41885){if((e41885 instanceof Object)){
var ex__40759__auto__ = e41885;
var statearr_41886_41935 = state_41828;
(statearr_41886_41935[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41936 = state_41828;
state_41828 = G__41936;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40756__auto__ = function(state_41828){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40756__auto____1.call(this,state_41828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40756__auto____0;
cljs$core$async$mix_$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40756__auto____1;
return cljs$core$async$mix_$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___41888,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40845__auto__ = (function (){var statearr_41887 = f__40844__auto__.call(null);
(statearr_41887[(6)] = c__40843__auto___41888);

return statearr_41887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___41888,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__38974__auto__ = (((p == null))?null:p);
var m__38975__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__38975__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__38974__auto__ = (((p == null))?null:p);
var m__38975__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,p,v,ch);
} else {
var m__38975__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41938 = arguments.length;
switch (G__41938) {
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
var x__38974__auto__ = (((p == null))?null:p);
var m__38975__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,p);
} else {
var m__38975__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,p);
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
var x__38974__auto__ = (((p == null))?null:p);
var m__38975__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38974__auto__)]);
if(!((m__38975__auto__ == null))){
return m__38975__auto__.call(null,p,v);
} else {
var m__38975__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38975__auto____$1 == null))){
return m__38975__auto____$1.call(null,p,v);
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
var G__41942 = arguments.length;
switch (G__41942) {
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
var or__38291__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__38291__auto__)){
return or__38291__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__38291__auto__,mults){
return (function (p1__41940_SHARP_){
if(cljs.core.truth_(p1__41940_SHARP_.call(null,topic))){
return p1__41940_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41940_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__38291__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41943 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41944){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41944 = meta41944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41945,meta41944__$1){
var self__ = this;
var _41945__$1 = this;
return (new cljs.core.async.t_cljs$core$async41943(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41944__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41945){
var self__ = this;
var _41945__$1 = this;
return self__.meta41944;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41943.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41943.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41943.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41943.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41943.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async41943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41943.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41944","meta41944",1345620729,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41943";

cljs.core.async.t_cljs$core$async41943.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__38916__auto__,writer__38917__auto__,opt__38918__auto__){
return cljs.core._write.call(null,writer__38917__auto__,"cljs.core.async/t_cljs$core$async41943");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41943 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41943(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41944){
return (new cljs.core.async.t_cljs$core$async41943(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41944));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41943(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40843__auto___42063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___42063,mults,ensure_mult,p){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___42063,mults,ensure_mult,p){
return (function (state_42017){
var state_val_42018 = (state_42017[(1)]);
if((state_val_42018 === (7))){
var inst_42013 = (state_42017[(2)]);
var state_42017__$1 = state_42017;
var statearr_42019_42064 = state_42017__$1;
(statearr_42019_42064[(2)] = inst_42013);

(statearr_42019_42064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (20))){
var state_42017__$1 = state_42017;
var statearr_42020_42065 = state_42017__$1;
(statearr_42020_42065[(2)] = null);

(statearr_42020_42065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (1))){
var state_42017__$1 = state_42017;
var statearr_42021_42066 = state_42017__$1;
(statearr_42021_42066[(2)] = null);

(statearr_42021_42066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (24))){
var inst_41996 = (state_42017[(7)]);
var inst_42005 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41996);
var state_42017__$1 = state_42017;
var statearr_42022_42067 = state_42017__$1;
(statearr_42022_42067[(2)] = inst_42005);

(statearr_42022_42067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (4))){
var inst_41948 = (state_42017[(8)]);
var inst_41948__$1 = (state_42017[(2)]);
var inst_41949 = (inst_41948__$1 == null);
var state_42017__$1 = (function (){var statearr_42023 = state_42017;
(statearr_42023[(8)] = inst_41948__$1);

return statearr_42023;
})();
if(cljs.core.truth_(inst_41949)){
var statearr_42024_42068 = state_42017__$1;
(statearr_42024_42068[(1)] = (5));

} else {
var statearr_42025_42069 = state_42017__$1;
(statearr_42025_42069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (15))){
var inst_41990 = (state_42017[(2)]);
var state_42017__$1 = state_42017;
var statearr_42026_42070 = state_42017__$1;
(statearr_42026_42070[(2)] = inst_41990);

(statearr_42026_42070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (21))){
var inst_42010 = (state_42017[(2)]);
var state_42017__$1 = (function (){var statearr_42027 = state_42017;
(statearr_42027[(9)] = inst_42010);

return statearr_42027;
})();
var statearr_42028_42071 = state_42017__$1;
(statearr_42028_42071[(2)] = null);

(statearr_42028_42071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (13))){
var inst_41972 = (state_42017[(10)]);
var inst_41974 = cljs.core.chunked_seq_QMARK_.call(null,inst_41972);
var state_42017__$1 = state_42017;
if(inst_41974){
var statearr_42029_42072 = state_42017__$1;
(statearr_42029_42072[(1)] = (16));

} else {
var statearr_42030_42073 = state_42017__$1;
(statearr_42030_42073[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (22))){
var inst_42002 = (state_42017[(2)]);
var state_42017__$1 = state_42017;
if(cljs.core.truth_(inst_42002)){
var statearr_42031_42074 = state_42017__$1;
(statearr_42031_42074[(1)] = (23));

} else {
var statearr_42032_42075 = state_42017__$1;
(statearr_42032_42075[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (6))){
var inst_41996 = (state_42017[(7)]);
var inst_41948 = (state_42017[(8)]);
var inst_41998 = (state_42017[(11)]);
var inst_41996__$1 = topic_fn.call(null,inst_41948);
var inst_41997 = cljs.core.deref.call(null,mults);
var inst_41998__$1 = cljs.core.get.call(null,inst_41997,inst_41996__$1);
var state_42017__$1 = (function (){var statearr_42033 = state_42017;
(statearr_42033[(7)] = inst_41996__$1);

(statearr_42033[(11)] = inst_41998__$1);

return statearr_42033;
})();
if(cljs.core.truth_(inst_41998__$1)){
var statearr_42034_42076 = state_42017__$1;
(statearr_42034_42076[(1)] = (19));

} else {
var statearr_42035_42077 = state_42017__$1;
(statearr_42035_42077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (25))){
var inst_42007 = (state_42017[(2)]);
var state_42017__$1 = state_42017;
var statearr_42036_42078 = state_42017__$1;
(statearr_42036_42078[(2)] = inst_42007);

(statearr_42036_42078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (17))){
var inst_41972 = (state_42017[(10)]);
var inst_41981 = cljs.core.first.call(null,inst_41972);
var inst_41982 = cljs.core.async.muxch_STAR_.call(null,inst_41981);
var inst_41983 = cljs.core.async.close_BANG_.call(null,inst_41982);
var inst_41984 = cljs.core.next.call(null,inst_41972);
var inst_41958 = inst_41984;
var inst_41959 = null;
var inst_41960 = (0);
var inst_41961 = (0);
var state_42017__$1 = (function (){var statearr_42037 = state_42017;
(statearr_42037[(12)] = inst_41961);

(statearr_42037[(13)] = inst_41983);

(statearr_42037[(14)] = inst_41958);

(statearr_42037[(15)] = inst_41960);

(statearr_42037[(16)] = inst_41959);

return statearr_42037;
})();
var statearr_42038_42079 = state_42017__$1;
(statearr_42038_42079[(2)] = null);

(statearr_42038_42079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (3))){
var inst_42015 = (state_42017[(2)]);
var state_42017__$1 = state_42017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42017__$1,inst_42015);
} else {
if((state_val_42018 === (12))){
var inst_41992 = (state_42017[(2)]);
var state_42017__$1 = state_42017;
var statearr_42039_42080 = state_42017__$1;
(statearr_42039_42080[(2)] = inst_41992);

(statearr_42039_42080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (2))){
var state_42017__$1 = state_42017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42017__$1,(4),ch);
} else {
if((state_val_42018 === (23))){
var state_42017__$1 = state_42017;
var statearr_42040_42081 = state_42017__$1;
(statearr_42040_42081[(2)] = null);

(statearr_42040_42081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (19))){
var inst_41948 = (state_42017[(8)]);
var inst_41998 = (state_42017[(11)]);
var inst_42000 = cljs.core.async.muxch_STAR_.call(null,inst_41998);
var state_42017__$1 = state_42017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42017__$1,(22),inst_42000,inst_41948);
} else {
if((state_val_42018 === (11))){
var inst_41958 = (state_42017[(14)]);
var inst_41972 = (state_42017[(10)]);
var inst_41972__$1 = cljs.core.seq.call(null,inst_41958);
var state_42017__$1 = (function (){var statearr_42041 = state_42017;
(statearr_42041[(10)] = inst_41972__$1);

return statearr_42041;
})();
if(inst_41972__$1){
var statearr_42042_42082 = state_42017__$1;
(statearr_42042_42082[(1)] = (13));

} else {
var statearr_42043_42083 = state_42017__$1;
(statearr_42043_42083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (9))){
var inst_41994 = (state_42017[(2)]);
var state_42017__$1 = state_42017;
var statearr_42044_42084 = state_42017__$1;
(statearr_42044_42084[(2)] = inst_41994);

(statearr_42044_42084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (5))){
var inst_41955 = cljs.core.deref.call(null,mults);
var inst_41956 = cljs.core.vals.call(null,inst_41955);
var inst_41957 = cljs.core.seq.call(null,inst_41956);
var inst_41958 = inst_41957;
var inst_41959 = null;
var inst_41960 = (0);
var inst_41961 = (0);
var state_42017__$1 = (function (){var statearr_42045 = state_42017;
(statearr_42045[(12)] = inst_41961);

(statearr_42045[(14)] = inst_41958);

(statearr_42045[(15)] = inst_41960);

(statearr_42045[(16)] = inst_41959);

return statearr_42045;
})();
var statearr_42046_42085 = state_42017__$1;
(statearr_42046_42085[(2)] = null);

(statearr_42046_42085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (14))){
var state_42017__$1 = state_42017;
var statearr_42050_42086 = state_42017__$1;
(statearr_42050_42086[(2)] = null);

(statearr_42050_42086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (16))){
var inst_41972 = (state_42017[(10)]);
var inst_41976 = cljs.core.chunk_first.call(null,inst_41972);
var inst_41977 = cljs.core.chunk_rest.call(null,inst_41972);
var inst_41978 = cljs.core.count.call(null,inst_41976);
var inst_41958 = inst_41977;
var inst_41959 = inst_41976;
var inst_41960 = inst_41978;
var inst_41961 = (0);
var state_42017__$1 = (function (){var statearr_42051 = state_42017;
(statearr_42051[(12)] = inst_41961);

(statearr_42051[(14)] = inst_41958);

(statearr_42051[(15)] = inst_41960);

(statearr_42051[(16)] = inst_41959);

return statearr_42051;
})();
var statearr_42052_42087 = state_42017__$1;
(statearr_42052_42087[(2)] = null);

(statearr_42052_42087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (10))){
var inst_41961 = (state_42017[(12)]);
var inst_41958 = (state_42017[(14)]);
var inst_41960 = (state_42017[(15)]);
var inst_41959 = (state_42017[(16)]);
var inst_41966 = cljs.core._nth.call(null,inst_41959,inst_41961);
var inst_41967 = cljs.core.async.muxch_STAR_.call(null,inst_41966);
var inst_41968 = cljs.core.async.close_BANG_.call(null,inst_41967);
var inst_41969 = (inst_41961 + (1));
var tmp42047 = inst_41958;
var tmp42048 = inst_41960;
var tmp42049 = inst_41959;
var inst_41958__$1 = tmp42047;
var inst_41959__$1 = tmp42049;
var inst_41960__$1 = tmp42048;
var inst_41961__$1 = inst_41969;
var state_42017__$1 = (function (){var statearr_42053 = state_42017;
(statearr_42053[(12)] = inst_41961__$1);

(statearr_42053[(14)] = inst_41958__$1);

(statearr_42053[(17)] = inst_41968);

(statearr_42053[(15)] = inst_41960__$1);

(statearr_42053[(16)] = inst_41959__$1);

return statearr_42053;
})();
var statearr_42054_42088 = state_42017__$1;
(statearr_42054_42088[(2)] = null);

(statearr_42054_42088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (18))){
var inst_41987 = (state_42017[(2)]);
var state_42017__$1 = state_42017;
var statearr_42055_42089 = state_42017__$1;
(statearr_42055_42089[(2)] = inst_41987);

(statearr_42055_42089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42018 === (8))){
var inst_41961 = (state_42017[(12)]);
var inst_41960 = (state_42017[(15)]);
var inst_41963 = (inst_41961 < inst_41960);
var inst_41964 = inst_41963;
var state_42017__$1 = state_42017;
if(cljs.core.truth_(inst_41964)){
var statearr_42056_42090 = state_42017__$1;
(statearr_42056_42090[(1)] = (10));

} else {
var statearr_42057_42091 = state_42017__$1;
(statearr_42057_42091[(1)] = (11));

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
});})(c__40843__auto___42063,mults,ensure_mult,p))
;
return ((function (switch__40755__auto__,c__40843__auto___42063,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40756__auto__ = null;
var cljs$core$async$state_machine__40756__auto____0 = (function (){
var statearr_42058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42058[(0)] = cljs$core$async$state_machine__40756__auto__);

(statearr_42058[(1)] = (1));

return statearr_42058;
});
var cljs$core$async$state_machine__40756__auto____1 = (function (state_42017){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_42017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e42059){if((e42059 instanceof Object)){
var ex__40759__auto__ = e42059;
var statearr_42060_42092 = state_42017;
(statearr_42060_42092[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42093 = state_42017;
state_42017 = G__42093;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$state_machine__40756__auto__ = function(state_42017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40756__auto____1.call(this,state_42017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40756__auto____0;
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40756__auto____1;
return cljs$core$async$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___42063,mults,ensure_mult,p))
})();
var state__40845__auto__ = (function (){var statearr_42061 = f__40844__auto__.call(null);
(statearr_42061[(6)] = c__40843__auto___42063);

return statearr_42061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___42063,mults,ensure_mult,p))
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
var G__42095 = arguments.length;
switch (G__42095) {
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
var G__42098 = arguments.length;
switch (G__42098) {
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
var G__42101 = arguments.length;
switch (G__42101) {
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
var c__40843__auto___42168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___42168,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___42168,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42140){
var state_val_42141 = (state_42140[(1)]);
if((state_val_42141 === (7))){
var state_42140__$1 = state_42140;
var statearr_42142_42169 = state_42140__$1;
(statearr_42142_42169[(2)] = null);

(statearr_42142_42169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (1))){
var state_42140__$1 = state_42140;
var statearr_42143_42170 = state_42140__$1;
(statearr_42143_42170[(2)] = null);

(statearr_42143_42170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (4))){
var inst_42104 = (state_42140[(7)]);
var inst_42106 = (inst_42104 < cnt);
var state_42140__$1 = state_42140;
if(cljs.core.truth_(inst_42106)){
var statearr_42144_42171 = state_42140__$1;
(statearr_42144_42171[(1)] = (6));

} else {
var statearr_42145_42172 = state_42140__$1;
(statearr_42145_42172[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (15))){
var inst_42136 = (state_42140[(2)]);
var state_42140__$1 = state_42140;
var statearr_42146_42173 = state_42140__$1;
(statearr_42146_42173[(2)] = inst_42136);

(statearr_42146_42173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (13))){
var inst_42129 = cljs.core.async.close_BANG_.call(null,out);
var state_42140__$1 = state_42140;
var statearr_42147_42174 = state_42140__$1;
(statearr_42147_42174[(2)] = inst_42129);

(statearr_42147_42174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (6))){
var state_42140__$1 = state_42140;
var statearr_42148_42175 = state_42140__$1;
(statearr_42148_42175[(2)] = null);

(statearr_42148_42175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (3))){
var inst_42138 = (state_42140[(2)]);
var state_42140__$1 = state_42140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42140__$1,inst_42138);
} else {
if((state_val_42141 === (12))){
var inst_42126 = (state_42140[(8)]);
var inst_42126__$1 = (state_42140[(2)]);
var inst_42127 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42126__$1);
var state_42140__$1 = (function (){var statearr_42149 = state_42140;
(statearr_42149[(8)] = inst_42126__$1);

return statearr_42149;
})();
if(cljs.core.truth_(inst_42127)){
var statearr_42150_42176 = state_42140__$1;
(statearr_42150_42176[(1)] = (13));

} else {
var statearr_42151_42177 = state_42140__$1;
(statearr_42151_42177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (2))){
var inst_42103 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42104 = (0);
var state_42140__$1 = (function (){var statearr_42152 = state_42140;
(statearr_42152[(9)] = inst_42103);

(statearr_42152[(7)] = inst_42104);

return statearr_42152;
})();
var statearr_42153_42178 = state_42140__$1;
(statearr_42153_42178[(2)] = null);

(statearr_42153_42178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (11))){
var inst_42104 = (state_42140[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42140,(10),Object,null,(9));
var inst_42113 = chs__$1.call(null,inst_42104);
var inst_42114 = done.call(null,inst_42104);
var inst_42115 = cljs.core.async.take_BANG_.call(null,inst_42113,inst_42114);
var state_42140__$1 = state_42140;
var statearr_42154_42179 = state_42140__$1;
(statearr_42154_42179[(2)] = inst_42115);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42140__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (9))){
var inst_42104 = (state_42140[(7)]);
var inst_42117 = (state_42140[(2)]);
var inst_42118 = (inst_42104 + (1));
var inst_42104__$1 = inst_42118;
var state_42140__$1 = (function (){var statearr_42155 = state_42140;
(statearr_42155[(7)] = inst_42104__$1);

(statearr_42155[(10)] = inst_42117);

return statearr_42155;
})();
var statearr_42156_42180 = state_42140__$1;
(statearr_42156_42180[(2)] = null);

(statearr_42156_42180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (5))){
var inst_42124 = (state_42140[(2)]);
var state_42140__$1 = (function (){var statearr_42157 = state_42140;
(statearr_42157[(11)] = inst_42124);

return statearr_42157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42140__$1,(12),dchan);
} else {
if((state_val_42141 === (14))){
var inst_42126 = (state_42140[(8)]);
var inst_42131 = cljs.core.apply.call(null,f,inst_42126);
var state_42140__$1 = state_42140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42140__$1,(16),out,inst_42131);
} else {
if((state_val_42141 === (16))){
var inst_42133 = (state_42140[(2)]);
var state_42140__$1 = (function (){var statearr_42158 = state_42140;
(statearr_42158[(12)] = inst_42133);

return statearr_42158;
})();
var statearr_42159_42181 = state_42140__$1;
(statearr_42159_42181[(2)] = null);

(statearr_42159_42181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (10))){
var inst_42108 = (state_42140[(2)]);
var inst_42109 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42140__$1 = (function (){var statearr_42160 = state_42140;
(statearr_42160[(13)] = inst_42108);

return statearr_42160;
})();
var statearr_42161_42182 = state_42140__$1;
(statearr_42161_42182[(2)] = inst_42109);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42140__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (8))){
var inst_42122 = (state_42140[(2)]);
var state_42140__$1 = state_42140;
var statearr_42162_42183 = state_42140__$1;
(statearr_42162_42183[(2)] = inst_42122);

(statearr_42162_42183[(1)] = (5));


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
});})(c__40843__auto___42168,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40755__auto__,c__40843__auto___42168,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40756__auto__ = null;
var cljs$core$async$state_machine__40756__auto____0 = (function (){
var statearr_42163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42163[(0)] = cljs$core$async$state_machine__40756__auto__);

(statearr_42163[(1)] = (1));

return statearr_42163;
});
var cljs$core$async$state_machine__40756__auto____1 = (function (state_42140){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_42140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e42164){if((e42164 instanceof Object)){
var ex__40759__auto__ = e42164;
var statearr_42165_42184 = state_42140;
(statearr_42165_42184[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42185 = state_42140;
state_42140 = G__42185;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$state_machine__40756__auto__ = function(state_42140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40756__auto____1.call(this,state_42140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40756__auto____0;
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40756__auto____1;
return cljs$core$async$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___42168,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40845__auto__ = (function (){var statearr_42166 = f__40844__auto__.call(null);
(statearr_42166[(6)] = c__40843__auto___42168);

return statearr_42166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___42168,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__42188 = arguments.length;
switch (G__42188) {
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
var c__40843__auto___42242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___42242,out){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___42242,out){
return (function (state_42220){
var state_val_42221 = (state_42220[(1)]);
if((state_val_42221 === (7))){
var inst_42199 = (state_42220[(7)]);
var inst_42200 = (state_42220[(8)]);
var inst_42199__$1 = (state_42220[(2)]);
var inst_42200__$1 = cljs.core.nth.call(null,inst_42199__$1,(0),null);
var inst_42201 = cljs.core.nth.call(null,inst_42199__$1,(1),null);
var inst_42202 = (inst_42200__$1 == null);
var state_42220__$1 = (function (){var statearr_42222 = state_42220;
(statearr_42222[(9)] = inst_42201);

(statearr_42222[(7)] = inst_42199__$1);

(statearr_42222[(8)] = inst_42200__$1);

return statearr_42222;
})();
if(cljs.core.truth_(inst_42202)){
var statearr_42223_42243 = state_42220__$1;
(statearr_42223_42243[(1)] = (8));

} else {
var statearr_42224_42244 = state_42220__$1;
(statearr_42224_42244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42221 === (1))){
var inst_42189 = cljs.core.vec.call(null,chs);
var inst_42190 = inst_42189;
var state_42220__$1 = (function (){var statearr_42225 = state_42220;
(statearr_42225[(10)] = inst_42190);

return statearr_42225;
})();
var statearr_42226_42245 = state_42220__$1;
(statearr_42226_42245[(2)] = null);

(statearr_42226_42245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42221 === (4))){
var inst_42190 = (state_42220[(10)]);
var state_42220__$1 = state_42220;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42220__$1,(7),inst_42190);
} else {
if((state_val_42221 === (6))){
var inst_42216 = (state_42220[(2)]);
var state_42220__$1 = state_42220;
var statearr_42227_42246 = state_42220__$1;
(statearr_42227_42246[(2)] = inst_42216);

(statearr_42227_42246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42221 === (3))){
var inst_42218 = (state_42220[(2)]);
var state_42220__$1 = state_42220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42220__$1,inst_42218);
} else {
if((state_val_42221 === (2))){
var inst_42190 = (state_42220[(10)]);
var inst_42192 = cljs.core.count.call(null,inst_42190);
var inst_42193 = (inst_42192 > (0));
var state_42220__$1 = state_42220;
if(cljs.core.truth_(inst_42193)){
var statearr_42229_42247 = state_42220__$1;
(statearr_42229_42247[(1)] = (4));

} else {
var statearr_42230_42248 = state_42220__$1;
(statearr_42230_42248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42221 === (11))){
var inst_42190 = (state_42220[(10)]);
var inst_42209 = (state_42220[(2)]);
var tmp42228 = inst_42190;
var inst_42190__$1 = tmp42228;
var state_42220__$1 = (function (){var statearr_42231 = state_42220;
(statearr_42231[(11)] = inst_42209);

(statearr_42231[(10)] = inst_42190__$1);

return statearr_42231;
})();
var statearr_42232_42249 = state_42220__$1;
(statearr_42232_42249[(2)] = null);

(statearr_42232_42249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42221 === (9))){
var inst_42200 = (state_42220[(8)]);
var state_42220__$1 = state_42220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42220__$1,(11),out,inst_42200);
} else {
if((state_val_42221 === (5))){
var inst_42214 = cljs.core.async.close_BANG_.call(null,out);
var state_42220__$1 = state_42220;
var statearr_42233_42250 = state_42220__$1;
(statearr_42233_42250[(2)] = inst_42214);

(statearr_42233_42250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42221 === (10))){
var inst_42212 = (state_42220[(2)]);
var state_42220__$1 = state_42220;
var statearr_42234_42251 = state_42220__$1;
(statearr_42234_42251[(2)] = inst_42212);

(statearr_42234_42251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42221 === (8))){
var inst_42201 = (state_42220[(9)]);
var inst_42199 = (state_42220[(7)]);
var inst_42190 = (state_42220[(10)]);
var inst_42200 = (state_42220[(8)]);
var inst_42204 = (function (){var cs = inst_42190;
var vec__42195 = inst_42199;
var v = inst_42200;
var c = inst_42201;
return ((function (cs,vec__42195,v,c,inst_42201,inst_42199,inst_42190,inst_42200,state_val_42221,c__40843__auto___42242,out){
return (function (p1__42186_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42186_SHARP_);
});
;})(cs,vec__42195,v,c,inst_42201,inst_42199,inst_42190,inst_42200,state_val_42221,c__40843__auto___42242,out))
})();
var inst_42205 = cljs.core.filterv.call(null,inst_42204,inst_42190);
var inst_42190__$1 = inst_42205;
var state_42220__$1 = (function (){var statearr_42235 = state_42220;
(statearr_42235[(10)] = inst_42190__$1);

return statearr_42235;
})();
var statearr_42236_42252 = state_42220__$1;
(statearr_42236_42252[(2)] = null);

(statearr_42236_42252[(1)] = (2));


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
});})(c__40843__auto___42242,out))
;
return ((function (switch__40755__auto__,c__40843__auto___42242,out){
return (function() {
var cljs$core$async$state_machine__40756__auto__ = null;
var cljs$core$async$state_machine__40756__auto____0 = (function (){
var statearr_42237 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42237[(0)] = cljs$core$async$state_machine__40756__auto__);

(statearr_42237[(1)] = (1));

return statearr_42237;
});
var cljs$core$async$state_machine__40756__auto____1 = (function (state_42220){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_42220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e42238){if((e42238 instanceof Object)){
var ex__40759__auto__ = e42238;
var statearr_42239_42253 = state_42220;
(statearr_42239_42253[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42254 = state_42220;
state_42220 = G__42254;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$state_machine__40756__auto__ = function(state_42220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40756__auto____1.call(this,state_42220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40756__auto____0;
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40756__auto____1;
return cljs$core$async$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___42242,out))
})();
var state__40845__auto__ = (function (){var statearr_42240 = f__40844__auto__.call(null);
(statearr_42240[(6)] = c__40843__auto___42242);

return statearr_42240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___42242,out))
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
var G__42256 = arguments.length;
switch (G__42256) {
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
var c__40843__auto___42301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___42301,out){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___42301,out){
return (function (state_42280){
var state_val_42281 = (state_42280[(1)]);
if((state_val_42281 === (7))){
var inst_42262 = (state_42280[(7)]);
var inst_42262__$1 = (state_42280[(2)]);
var inst_42263 = (inst_42262__$1 == null);
var inst_42264 = cljs.core.not.call(null,inst_42263);
var state_42280__$1 = (function (){var statearr_42282 = state_42280;
(statearr_42282[(7)] = inst_42262__$1);

return statearr_42282;
})();
if(inst_42264){
var statearr_42283_42302 = state_42280__$1;
(statearr_42283_42302[(1)] = (8));

} else {
var statearr_42284_42303 = state_42280__$1;
(statearr_42284_42303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (1))){
var inst_42257 = (0);
var state_42280__$1 = (function (){var statearr_42285 = state_42280;
(statearr_42285[(8)] = inst_42257);

return statearr_42285;
})();
var statearr_42286_42304 = state_42280__$1;
(statearr_42286_42304[(2)] = null);

(statearr_42286_42304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (4))){
var state_42280__$1 = state_42280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42280__$1,(7),ch);
} else {
if((state_val_42281 === (6))){
var inst_42275 = (state_42280[(2)]);
var state_42280__$1 = state_42280;
var statearr_42287_42305 = state_42280__$1;
(statearr_42287_42305[(2)] = inst_42275);

(statearr_42287_42305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (3))){
var inst_42277 = (state_42280[(2)]);
var inst_42278 = cljs.core.async.close_BANG_.call(null,out);
var state_42280__$1 = (function (){var statearr_42288 = state_42280;
(statearr_42288[(9)] = inst_42277);

return statearr_42288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42280__$1,inst_42278);
} else {
if((state_val_42281 === (2))){
var inst_42257 = (state_42280[(8)]);
var inst_42259 = (inst_42257 < n);
var state_42280__$1 = state_42280;
if(cljs.core.truth_(inst_42259)){
var statearr_42289_42306 = state_42280__$1;
(statearr_42289_42306[(1)] = (4));

} else {
var statearr_42290_42307 = state_42280__$1;
(statearr_42290_42307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (11))){
var inst_42257 = (state_42280[(8)]);
var inst_42267 = (state_42280[(2)]);
var inst_42268 = (inst_42257 + (1));
var inst_42257__$1 = inst_42268;
var state_42280__$1 = (function (){var statearr_42291 = state_42280;
(statearr_42291[(8)] = inst_42257__$1);

(statearr_42291[(10)] = inst_42267);

return statearr_42291;
})();
var statearr_42292_42308 = state_42280__$1;
(statearr_42292_42308[(2)] = null);

(statearr_42292_42308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (9))){
var state_42280__$1 = state_42280;
var statearr_42293_42309 = state_42280__$1;
(statearr_42293_42309[(2)] = null);

(statearr_42293_42309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (5))){
var state_42280__$1 = state_42280;
var statearr_42294_42310 = state_42280__$1;
(statearr_42294_42310[(2)] = null);

(statearr_42294_42310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (10))){
var inst_42272 = (state_42280[(2)]);
var state_42280__$1 = state_42280;
var statearr_42295_42311 = state_42280__$1;
(statearr_42295_42311[(2)] = inst_42272);

(statearr_42295_42311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (8))){
var inst_42262 = (state_42280[(7)]);
var state_42280__$1 = state_42280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42280__$1,(11),out,inst_42262);
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
});})(c__40843__auto___42301,out))
;
return ((function (switch__40755__auto__,c__40843__auto___42301,out){
return (function() {
var cljs$core$async$state_machine__40756__auto__ = null;
var cljs$core$async$state_machine__40756__auto____0 = (function (){
var statearr_42296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42296[(0)] = cljs$core$async$state_machine__40756__auto__);

(statearr_42296[(1)] = (1));

return statearr_42296;
});
var cljs$core$async$state_machine__40756__auto____1 = (function (state_42280){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_42280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e42297){if((e42297 instanceof Object)){
var ex__40759__auto__ = e42297;
var statearr_42298_42312 = state_42280;
(statearr_42298_42312[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42313 = state_42280;
state_42280 = G__42313;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$state_machine__40756__auto__ = function(state_42280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40756__auto____1.call(this,state_42280);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40756__auto____0;
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40756__auto____1;
return cljs$core$async$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___42301,out))
})();
var state__40845__auto__ = (function (){var statearr_42299 = f__40844__auto__.call(null);
(statearr_42299[(6)] = c__40843__auto___42301);

return statearr_42299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___42301,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42315 = (function (f,ch,meta42316){
this.f = f;
this.ch = ch;
this.meta42316 = meta42316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42317,meta42316__$1){
var self__ = this;
var _42317__$1 = this;
return (new cljs.core.async.t_cljs$core$async42315(self__.f,self__.ch,meta42316__$1));
});

cljs.core.async.t_cljs$core$async42315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42317){
var self__ = this;
var _42317__$1 = this;
return self__.meta42316;
});

cljs.core.async.t_cljs$core$async42315.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42315.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42315.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42318 = (function (f,ch,meta42316,_,fn1,meta42319){
this.f = f;
this.ch = ch;
this.meta42316 = meta42316;
this._ = _;
this.fn1 = fn1;
this.meta42319 = meta42319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42320,meta42319__$1){
var self__ = this;
var _42320__$1 = this;
return (new cljs.core.async.t_cljs$core$async42318(self__.f,self__.ch,self__.meta42316,self__._,self__.fn1,meta42319__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42320){
var self__ = this;
var _42320__$1 = this;
return self__.meta42319;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42318.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42314_SHARP_){
return f1.call(null,(((p1__42314_SHARP_ == null))?null:self__.f.call(null,p1__42314_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42318.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42316","meta42316",-14787239,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42315","cljs.core.async/t_cljs$core$async42315",331912192,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42319","meta42319",1527305165,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42318.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42318";

cljs.core.async.t_cljs$core$async42318.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__38916__auto__,writer__38917__auto__,opt__38918__auto__){
return cljs.core._write.call(null,writer__38917__auto__,"cljs.core.async/t_cljs$core$async42318");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42318 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42318(f__$1,ch__$1,meta42316__$1,___$2,fn1__$1,meta42319){
return (new cljs.core.async.t_cljs$core$async42318(f__$1,ch__$1,meta42316__$1,___$2,fn1__$1,meta42319));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42318(self__.f,self__.ch,self__.meta42316,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__38279__auto__ = ret;
if(cljs.core.truth_(and__38279__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__38279__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42315.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42316","meta42316",-14787239,null)], null);
});

cljs.core.async.t_cljs$core$async42315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42315";

cljs.core.async.t_cljs$core$async42315.cljs$lang$ctorPrWriter = (function (this__38916__auto__,writer__38917__auto__,opt__38918__auto__){
return cljs.core._write.call(null,writer__38917__auto__,"cljs.core.async/t_cljs$core$async42315");
});

cljs.core.async.__GT_t_cljs$core$async42315 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42315(f__$1,ch__$1,meta42316){
return (new cljs.core.async.t_cljs$core$async42315(f__$1,ch__$1,meta42316));
});

}

return (new cljs.core.async.t_cljs$core$async42315(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42321 = (function (f,ch,meta42322){
this.f = f;
this.ch = ch;
this.meta42322 = meta42322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42323,meta42322__$1){
var self__ = this;
var _42323__$1 = this;
return (new cljs.core.async.t_cljs$core$async42321(self__.f,self__.ch,meta42322__$1));
});

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42323){
var self__ = this;
var _42323__$1 = this;
return self__.meta42322;
});

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42322","meta42322",1270316863,null)], null);
});

cljs.core.async.t_cljs$core$async42321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42321";

cljs.core.async.t_cljs$core$async42321.cljs$lang$ctorPrWriter = (function (this__38916__auto__,writer__38917__auto__,opt__38918__auto__){
return cljs.core._write.call(null,writer__38917__auto__,"cljs.core.async/t_cljs$core$async42321");
});

cljs.core.async.__GT_t_cljs$core$async42321 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42321(f__$1,ch__$1,meta42322){
return (new cljs.core.async.t_cljs$core$async42321(f__$1,ch__$1,meta42322));
});

}

return (new cljs.core.async.t_cljs$core$async42321(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42324 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42324 = (function (p,ch,meta42325){
this.p = p;
this.ch = ch;
this.meta42325 = meta42325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42326,meta42325__$1){
var self__ = this;
var _42326__$1 = this;
return (new cljs.core.async.t_cljs$core$async42324(self__.p,self__.ch,meta42325__$1));
});

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42326){
var self__ = this;
var _42326__$1 = this;
return self__.meta42325;
});

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42325","meta42325",-1276802413,null)], null);
});

cljs.core.async.t_cljs$core$async42324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42324";

cljs.core.async.t_cljs$core$async42324.cljs$lang$ctorPrWriter = (function (this__38916__auto__,writer__38917__auto__,opt__38918__auto__){
return cljs.core._write.call(null,writer__38917__auto__,"cljs.core.async/t_cljs$core$async42324");
});

cljs.core.async.__GT_t_cljs$core$async42324 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42324(p__$1,ch__$1,meta42325){
return (new cljs.core.async.t_cljs$core$async42324(p__$1,ch__$1,meta42325));
});

}

return (new cljs.core.async.t_cljs$core$async42324(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42328 = arguments.length;
switch (G__42328) {
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
var c__40843__auto___42368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___42368,out){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___42368,out){
return (function (state_42349){
var state_val_42350 = (state_42349[(1)]);
if((state_val_42350 === (7))){
var inst_42345 = (state_42349[(2)]);
var state_42349__$1 = state_42349;
var statearr_42351_42369 = state_42349__$1;
(statearr_42351_42369[(2)] = inst_42345);

(statearr_42351_42369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (1))){
var state_42349__$1 = state_42349;
var statearr_42352_42370 = state_42349__$1;
(statearr_42352_42370[(2)] = null);

(statearr_42352_42370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (4))){
var inst_42331 = (state_42349[(7)]);
var inst_42331__$1 = (state_42349[(2)]);
var inst_42332 = (inst_42331__$1 == null);
var state_42349__$1 = (function (){var statearr_42353 = state_42349;
(statearr_42353[(7)] = inst_42331__$1);

return statearr_42353;
})();
if(cljs.core.truth_(inst_42332)){
var statearr_42354_42371 = state_42349__$1;
(statearr_42354_42371[(1)] = (5));

} else {
var statearr_42355_42372 = state_42349__$1;
(statearr_42355_42372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (6))){
var inst_42331 = (state_42349[(7)]);
var inst_42336 = p.call(null,inst_42331);
var state_42349__$1 = state_42349;
if(cljs.core.truth_(inst_42336)){
var statearr_42356_42373 = state_42349__$1;
(statearr_42356_42373[(1)] = (8));

} else {
var statearr_42357_42374 = state_42349__$1;
(statearr_42357_42374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (3))){
var inst_42347 = (state_42349[(2)]);
var state_42349__$1 = state_42349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42349__$1,inst_42347);
} else {
if((state_val_42350 === (2))){
var state_42349__$1 = state_42349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42349__$1,(4),ch);
} else {
if((state_val_42350 === (11))){
var inst_42339 = (state_42349[(2)]);
var state_42349__$1 = state_42349;
var statearr_42358_42375 = state_42349__$1;
(statearr_42358_42375[(2)] = inst_42339);

(statearr_42358_42375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (9))){
var state_42349__$1 = state_42349;
var statearr_42359_42376 = state_42349__$1;
(statearr_42359_42376[(2)] = null);

(statearr_42359_42376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (5))){
var inst_42334 = cljs.core.async.close_BANG_.call(null,out);
var state_42349__$1 = state_42349;
var statearr_42360_42377 = state_42349__$1;
(statearr_42360_42377[(2)] = inst_42334);

(statearr_42360_42377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (10))){
var inst_42342 = (state_42349[(2)]);
var state_42349__$1 = (function (){var statearr_42361 = state_42349;
(statearr_42361[(8)] = inst_42342);

return statearr_42361;
})();
var statearr_42362_42378 = state_42349__$1;
(statearr_42362_42378[(2)] = null);

(statearr_42362_42378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42350 === (8))){
var inst_42331 = (state_42349[(7)]);
var state_42349__$1 = state_42349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42349__$1,(11),out,inst_42331);
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
});})(c__40843__auto___42368,out))
;
return ((function (switch__40755__auto__,c__40843__auto___42368,out){
return (function() {
var cljs$core$async$state_machine__40756__auto__ = null;
var cljs$core$async$state_machine__40756__auto____0 = (function (){
var statearr_42363 = [null,null,null,null,null,null,null,null,null];
(statearr_42363[(0)] = cljs$core$async$state_machine__40756__auto__);

(statearr_42363[(1)] = (1));

return statearr_42363;
});
var cljs$core$async$state_machine__40756__auto____1 = (function (state_42349){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_42349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e42364){if((e42364 instanceof Object)){
var ex__40759__auto__ = e42364;
var statearr_42365_42379 = state_42349;
(statearr_42365_42379[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42380 = state_42349;
state_42349 = G__42380;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$state_machine__40756__auto__ = function(state_42349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40756__auto____1.call(this,state_42349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40756__auto____0;
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40756__auto____1;
return cljs$core$async$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___42368,out))
})();
var state__40845__auto__ = (function (){var statearr_42366 = f__40844__auto__.call(null);
(statearr_42366[(6)] = c__40843__auto___42368);

return statearr_42366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___42368,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42382 = arguments.length;
switch (G__42382) {
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
var c__40843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto__){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto__){
return (function (state_42445){
var state_val_42446 = (state_42445[(1)]);
if((state_val_42446 === (7))){
var inst_42441 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42447_42485 = state_42445__$1;
(statearr_42447_42485[(2)] = inst_42441);

(statearr_42447_42485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (20))){
var inst_42411 = (state_42445[(7)]);
var inst_42422 = (state_42445[(2)]);
var inst_42423 = cljs.core.next.call(null,inst_42411);
var inst_42397 = inst_42423;
var inst_42398 = null;
var inst_42399 = (0);
var inst_42400 = (0);
var state_42445__$1 = (function (){var statearr_42448 = state_42445;
(statearr_42448[(8)] = inst_42399);

(statearr_42448[(9)] = inst_42422);

(statearr_42448[(10)] = inst_42400);

(statearr_42448[(11)] = inst_42398);

(statearr_42448[(12)] = inst_42397);

return statearr_42448;
})();
var statearr_42449_42486 = state_42445__$1;
(statearr_42449_42486[(2)] = null);

(statearr_42449_42486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (1))){
var state_42445__$1 = state_42445;
var statearr_42450_42487 = state_42445__$1;
(statearr_42450_42487[(2)] = null);

(statearr_42450_42487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (4))){
var inst_42386 = (state_42445[(13)]);
var inst_42386__$1 = (state_42445[(2)]);
var inst_42387 = (inst_42386__$1 == null);
var state_42445__$1 = (function (){var statearr_42451 = state_42445;
(statearr_42451[(13)] = inst_42386__$1);

return statearr_42451;
})();
if(cljs.core.truth_(inst_42387)){
var statearr_42452_42488 = state_42445__$1;
(statearr_42452_42488[(1)] = (5));

} else {
var statearr_42453_42489 = state_42445__$1;
(statearr_42453_42489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (15))){
var state_42445__$1 = state_42445;
var statearr_42457_42490 = state_42445__$1;
(statearr_42457_42490[(2)] = null);

(statearr_42457_42490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (21))){
var state_42445__$1 = state_42445;
var statearr_42458_42491 = state_42445__$1;
(statearr_42458_42491[(2)] = null);

(statearr_42458_42491[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (13))){
var inst_42399 = (state_42445[(8)]);
var inst_42400 = (state_42445[(10)]);
var inst_42398 = (state_42445[(11)]);
var inst_42397 = (state_42445[(12)]);
var inst_42407 = (state_42445[(2)]);
var inst_42408 = (inst_42400 + (1));
var tmp42454 = inst_42399;
var tmp42455 = inst_42398;
var tmp42456 = inst_42397;
var inst_42397__$1 = tmp42456;
var inst_42398__$1 = tmp42455;
var inst_42399__$1 = tmp42454;
var inst_42400__$1 = inst_42408;
var state_42445__$1 = (function (){var statearr_42459 = state_42445;
(statearr_42459[(8)] = inst_42399__$1);

(statearr_42459[(10)] = inst_42400__$1);

(statearr_42459[(11)] = inst_42398__$1);

(statearr_42459[(14)] = inst_42407);

(statearr_42459[(12)] = inst_42397__$1);

return statearr_42459;
})();
var statearr_42460_42492 = state_42445__$1;
(statearr_42460_42492[(2)] = null);

(statearr_42460_42492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (22))){
var state_42445__$1 = state_42445;
var statearr_42461_42493 = state_42445__$1;
(statearr_42461_42493[(2)] = null);

(statearr_42461_42493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (6))){
var inst_42386 = (state_42445[(13)]);
var inst_42395 = f.call(null,inst_42386);
var inst_42396 = cljs.core.seq.call(null,inst_42395);
var inst_42397 = inst_42396;
var inst_42398 = null;
var inst_42399 = (0);
var inst_42400 = (0);
var state_42445__$1 = (function (){var statearr_42462 = state_42445;
(statearr_42462[(8)] = inst_42399);

(statearr_42462[(10)] = inst_42400);

(statearr_42462[(11)] = inst_42398);

(statearr_42462[(12)] = inst_42397);

return statearr_42462;
})();
var statearr_42463_42494 = state_42445__$1;
(statearr_42463_42494[(2)] = null);

(statearr_42463_42494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (17))){
var inst_42411 = (state_42445[(7)]);
var inst_42415 = cljs.core.chunk_first.call(null,inst_42411);
var inst_42416 = cljs.core.chunk_rest.call(null,inst_42411);
var inst_42417 = cljs.core.count.call(null,inst_42415);
var inst_42397 = inst_42416;
var inst_42398 = inst_42415;
var inst_42399 = inst_42417;
var inst_42400 = (0);
var state_42445__$1 = (function (){var statearr_42464 = state_42445;
(statearr_42464[(8)] = inst_42399);

(statearr_42464[(10)] = inst_42400);

(statearr_42464[(11)] = inst_42398);

(statearr_42464[(12)] = inst_42397);

return statearr_42464;
})();
var statearr_42465_42495 = state_42445__$1;
(statearr_42465_42495[(2)] = null);

(statearr_42465_42495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (3))){
var inst_42443 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42445__$1,inst_42443);
} else {
if((state_val_42446 === (12))){
var inst_42431 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42466_42496 = state_42445__$1;
(statearr_42466_42496[(2)] = inst_42431);

(statearr_42466_42496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (2))){
var state_42445__$1 = state_42445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42445__$1,(4),in$);
} else {
if((state_val_42446 === (23))){
var inst_42439 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42467_42497 = state_42445__$1;
(statearr_42467_42497[(2)] = inst_42439);

(statearr_42467_42497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (19))){
var inst_42426 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42468_42498 = state_42445__$1;
(statearr_42468_42498[(2)] = inst_42426);

(statearr_42468_42498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (11))){
var inst_42411 = (state_42445[(7)]);
var inst_42397 = (state_42445[(12)]);
var inst_42411__$1 = cljs.core.seq.call(null,inst_42397);
var state_42445__$1 = (function (){var statearr_42469 = state_42445;
(statearr_42469[(7)] = inst_42411__$1);

return statearr_42469;
})();
if(inst_42411__$1){
var statearr_42470_42499 = state_42445__$1;
(statearr_42470_42499[(1)] = (14));

} else {
var statearr_42471_42500 = state_42445__$1;
(statearr_42471_42500[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (9))){
var inst_42433 = (state_42445[(2)]);
var inst_42434 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42445__$1 = (function (){var statearr_42472 = state_42445;
(statearr_42472[(15)] = inst_42433);

return statearr_42472;
})();
if(cljs.core.truth_(inst_42434)){
var statearr_42473_42501 = state_42445__$1;
(statearr_42473_42501[(1)] = (21));

} else {
var statearr_42474_42502 = state_42445__$1;
(statearr_42474_42502[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (5))){
var inst_42389 = cljs.core.async.close_BANG_.call(null,out);
var state_42445__$1 = state_42445;
var statearr_42475_42503 = state_42445__$1;
(statearr_42475_42503[(2)] = inst_42389);

(statearr_42475_42503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (14))){
var inst_42411 = (state_42445[(7)]);
var inst_42413 = cljs.core.chunked_seq_QMARK_.call(null,inst_42411);
var state_42445__$1 = state_42445;
if(inst_42413){
var statearr_42476_42504 = state_42445__$1;
(statearr_42476_42504[(1)] = (17));

} else {
var statearr_42477_42505 = state_42445__$1;
(statearr_42477_42505[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (16))){
var inst_42429 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42478_42506 = state_42445__$1;
(statearr_42478_42506[(2)] = inst_42429);

(statearr_42478_42506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (10))){
var inst_42400 = (state_42445[(10)]);
var inst_42398 = (state_42445[(11)]);
var inst_42405 = cljs.core._nth.call(null,inst_42398,inst_42400);
var state_42445__$1 = state_42445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42445__$1,(13),out,inst_42405);
} else {
if((state_val_42446 === (18))){
var inst_42411 = (state_42445[(7)]);
var inst_42420 = cljs.core.first.call(null,inst_42411);
var state_42445__$1 = state_42445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42445__$1,(20),out,inst_42420);
} else {
if((state_val_42446 === (8))){
var inst_42399 = (state_42445[(8)]);
var inst_42400 = (state_42445[(10)]);
var inst_42402 = (inst_42400 < inst_42399);
var inst_42403 = inst_42402;
var state_42445__$1 = state_42445;
if(cljs.core.truth_(inst_42403)){
var statearr_42479_42507 = state_42445__$1;
(statearr_42479_42507[(1)] = (10));

} else {
var statearr_42480_42508 = state_42445__$1;
(statearr_42480_42508[(1)] = (11));

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
});})(c__40843__auto__))
;
return ((function (switch__40755__auto__,c__40843__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40756__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40756__auto____0 = (function (){
var statearr_42481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42481[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40756__auto__);

(statearr_42481[(1)] = (1));

return statearr_42481;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40756__auto____1 = (function (state_42445){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_42445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e42482){if((e42482 instanceof Object)){
var ex__40759__auto__ = e42482;
var statearr_42483_42509 = state_42445;
(statearr_42483_42509[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42510 = state_42445;
state_42445 = G__42510;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40756__auto__ = function(state_42445){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40756__auto____1.call(this,state_42445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40756__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40756__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto__))
})();
var state__40845__auto__ = (function (){var statearr_42484 = f__40844__auto__.call(null);
(statearr_42484[(6)] = c__40843__auto__);

return statearr_42484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto__))
);

return c__40843__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42512 = arguments.length;
switch (G__42512) {
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
var G__42515 = arguments.length;
switch (G__42515) {
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
var G__42518 = arguments.length;
switch (G__42518) {
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
var c__40843__auto___42565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___42565,out){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___42565,out){
return (function (state_42542){
var state_val_42543 = (state_42542[(1)]);
if((state_val_42543 === (7))){
var inst_42537 = (state_42542[(2)]);
var state_42542__$1 = state_42542;
var statearr_42544_42566 = state_42542__$1;
(statearr_42544_42566[(2)] = inst_42537);

(statearr_42544_42566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42543 === (1))){
var inst_42519 = null;
var state_42542__$1 = (function (){var statearr_42545 = state_42542;
(statearr_42545[(7)] = inst_42519);

return statearr_42545;
})();
var statearr_42546_42567 = state_42542__$1;
(statearr_42546_42567[(2)] = null);

(statearr_42546_42567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42543 === (4))){
var inst_42522 = (state_42542[(8)]);
var inst_42522__$1 = (state_42542[(2)]);
var inst_42523 = (inst_42522__$1 == null);
var inst_42524 = cljs.core.not.call(null,inst_42523);
var state_42542__$1 = (function (){var statearr_42547 = state_42542;
(statearr_42547[(8)] = inst_42522__$1);

return statearr_42547;
})();
if(inst_42524){
var statearr_42548_42568 = state_42542__$1;
(statearr_42548_42568[(1)] = (5));

} else {
var statearr_42549_42569 = state_42542__$1;
(statearr_42549_42569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42543 === (6))){
var state_42542__$1 = state_42542;
var statearr_42550_42570 = state_42542__$1;
(statearr_42550_42570[(2)] = null);

(statearr_42550_42570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42543 === (3))){
var inst_42539 = (state_42542[(2)]);
var inst_42540 = cljs.core.async.close_BANG_.call(null,out);
var state_42542__$1 = (function (){var statearr_42551 = state_42542;
(statearr_42551[(9)] = inst_42539);

return statearr_42551;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42542__$1,inst_42540);
} else {
if((state_val_42543 === (2))){
var state_42542__$1 = state_42542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42542__$1,(4),ch);
} else {
if((state_val_42543 === (11))){
var inst_42522 = (state_42542[(8)]);
var inst_42531 = (state_42542[(2)]);
var inst_42519 = inst_42522;
var state_42542__$1 = (function (){var statearr_42552 = state_42542;
(statearr_42552[(10)] = inst_42531);

(statearr_42552[(7)] = inst_42519);

return statearr_42552;
})();
var statearr_42553_42571 = state_42542__$1;
(statearr_42553_42571[(2)] = null);

(statearr_42553_42571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42543 === (9))){
var inst_42522 = (state_42542[(8)]);
var state_42542__$1 = state_42542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42542__$1,(11),out,inst_42522);
} else {
if((state_val_42543 === (5))){
var inst_42522 = (state_42542[(8)]);
var inst_42519 = (state_42542[(7)]);
var inst_42526 = cljs.core._EQ_.call(null,inst_42522,inst_42519);
var state_42542__$1 = state_42542;
if(inst_42526){
var statearr_42555_42572 = state_42542__$1;
(statearr_42555_42572[(1)] = (8));

} else {
var statearr_42556_42573 = state_42542__$1;
(statearr_42556_42573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42543 === (10))){
var inst_42534 = (state_42542[(2)]);
var state_42542__$1 = state_42542;
var statearr_42557_42574 = state_42542__$1;
(statearr_42557_42574[(2)] = inst_42534);

(statearr_42557_42574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42543 === (8))){
var inst_42519 = (state_42542[(7)]);
var tmp42554 = inst_42519;
var inst_42519__$1 = tmp42554;
var state_42542__$1 = (function (){var statearr_42558 = state_42542;
(statearr_42558[(7)] = inst_42519__$1);

return statearr_42558;
})();
var statearr_42559_42575 = state_42542__$1;
(statearr_42559_42575[(2)] = null);

(statearr_42559_42575[(1)] = (2));


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
});})(c__40843__auto___42565,out))
;
return ((function (switch__40755__auto__,c__40843__auto___42565,out){
return (function() {
var cljs$core$async$state_machine__40756__auto__ = null;
var cljs$core$async$state_machine__40756__auto____0 = (function (){
var statearr_42560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42560[(0)] = cljs$core$async$state_machine__40756__auto__);

(statearr_42560[(1)] = (1));

return statearr_42560;
});
var cljs$core$async$state_machine__40756__auto____1 = (function (state_42542){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_42542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e42561){if((e42561 instanceof Object)){
var ex__40759__auto__ = e42561;
var statearr_42562_42576 = state_42542;
(statearr_42562_42576[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42577 = state_42542;
state_42542 = G__42577;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$state_machine__40756__auto__ = function(state_42542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40756__auto____1.call(this,state_42542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40756__auto____0;
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40756__auto____1;
return cljs$core$async$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___42565,out))
})();
var state__40845__auto__ = (function (){var statearr_42563 = f__40844__auto__.call(null);
(statearr_42563[(6)] = c__40843__auto___42565);

return statearr_42563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___42565,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42579 = arguments.length;
switch (G__42579) {
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
var c__40843__auto___42645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___42645,out){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___42645,out){
return (function (state_42617){
var state_val_42618 = (state_42617[(1)]);
if((state_val_42618 === (7))){
var inst_42613 = (state_42617[(2)]);
var state_42617__$1 = state_42617;
var statearr_42619_42646 = state_42617__$1;
(statearr_42619_42646[(2)] = inst_42613);

(statearr_42619_42646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (1))){
var inst_42580 = (new Array(n));
var inst_42581 = inst_42580;
var inst_42582 = (0);
var state_42617__$1 = (function (){var statearr_42620 = state_42617;
(statearr_42620[(7)] = inst_42581);

(statearr_42620[(8)] = inst_42582);

return statearr_42620;
})();
var statearr_42621_42647 = state_42617__$1;
(statearr_42621_42647[(2)] = null);

(statearr_42621_42647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (4))){
var inst_42585 = (state_42617[(9)]);
var inst_42585__$1 = (state_42617[(2)]);
var inst_42586 = (inst_42585__$1 == null);
var inst_42587 = cljs.core.not.call(null,inst_42586);
var state_42617__$1 = (function (){var statearr_42622 = state_42617;
(statearr_42622[(9)] = inst_42585__$1);

return statearr_42622;
})();
if(inst_42587){
var statearr_42623_42648 = state_42617__$1;
(statearr_42623_42648[(1)] = (5));

} else {
var statearr_42624_42649 = state_42617__$1;
(statearr_42624_42649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (15))){
var inst_42607 = (state_42617[(2)]);
var state_42617__$1 = state_42617;
var statearr_42625_42650 = state_42617__$1;
(statearr_42625_42650[(2)] = inst_42607);

(statearr_42625_42650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (13))){
var state_42617__$1 = state_42617;
var statearr_42626_42651 = state_42617__$1;
(statearr_42626_42651[(2)] = null);

(statearr_42626_42651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (6))){
var inst_42582 = (state_42617[(8)]);
var inst_42603 = (inst_42582 > (0));
var state_42617__$1 = state_42617;
if(cljs.core.truth_(inst_42603)){
var statearr_42627_42652 = state_42617__$1;
(statearr_42627_42652[(1)] = (12));

} else {
var statearr_42628_42653 = state_42617__$1;
(statearr_42628_42653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (3))){
var inst_42615 = (state_42617[(2)]);
var state_42617__$1 = state_42617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42617__$1,inst_42615);
} else {
if((state_val_42618 === (12))){
var inst_42581 = (state_42617[(7)]);
var inst_42605 = cljs.core.vec.call(null,inst_42581);
var state_42617__$1 = state_42617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42617__$1,(15),out,inst_42605);
} else {
if((state_val_42618 === (2))){
var state_42617__$1 = state_42617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42617__$1,(4),ch);
} else {
if((state_val_42618 === (11))){
var inst_42597 = (state_42617[(2)]);
var inst_42598 = (new Array(n));
var inst_42581 = inst_42598;
var inst_42582 = (0);
var state_42617__$1 = (function (){var statearr_42629 = state_42617;
(statearr_42629[(10)] = inst_42597);

(statearr_42629[(7)] = inst_42581);

(statearr_42629[(8)] = inst_42582);

return statearr_42629;
})();
var statearr_42630_42654 = state_42617__$1;
(statearr_42630_42654[(2)] = null);

(statearr_42630_42654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (9))){
var inst_42581 = (state_42617[(7)]);
var inst_42595 = cljs.core.vec.call(null,inst_42581);
var state_42617__$1 = state_42617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42617__$1,(11),out,inst_42595);
} else {
if((state_val_42618 === (5))){
var inst_42585 = (state_42617[(9)]);
var inst_42590 = (state_42617[(11)]);
var inst_42581 = (state_42617[(7)]);
var inst_42582 = (state_42617[(8)]);
var inst_42589 = (inst_42581[inst_42582] = inst_42585);
var inst_42590__$1 = (inst_42582 + (1));
var inst_42591 = (inst_42590__$1 < n);
var state_42617__$1 = (function (){var statearr_42631 = state_42617;
(statearr_42631[(12)] = inst_42589);

(statearr_42631[(11)] = inst_42590__$1);

return statearr_42631;
})();
if(cljs.core.truth_(inst_42591)){
var statearr_42632_42655 = state_42617__$1;
(statearr_42632_42655[(1)] = (8));

} else {
var statearr_42633_42656 = state_42617__$1;
(statearr_42633_42656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (14))){
var inst_42610 = (state_42617[(2)]);
var inst_42611 = cljs.core.async.close_BANG_.call(null,out);
var state_42617__$1 = (function (){var statearr_42635 = state_42617;
(statearr_42635[(13)] = inst_42610);

return statearr_42635;
})();
var statearr_42636_42657 = state_42617__$1;
(statearr_42636_42657[(2)] = inst_42611);

(statearr_42636_42657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (10))){
var inst_42601 = (state_42617[(2)]);
var state_42617__$1 = state_42617;
var statearr_42637_42658 = state_42617__$1;
(statearr_42637_42658[(2)] = inst_42601);

(statearr_42637_42658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42618 === (8))){
var inst_42590 = (state_42617[(11)]);
var inst_42581 = (state_42617[(7)]);
var tmp42634 = inst_42581;
var inst_42581__$1 = tmp42634;
var inst_42582 = inst_42590;
var state_42617__$1 = (function (){var statearr_42638 = state_42617;
(statearr_42638[(7)] = inst_42581__$1);

(statearr_42638[(8)] = inst_42582);

return statearr_42638;
})();
var statearr_42639_42659 = state_42617__$1;
(statearr_42639_42659[(2)] = null);

(statearr_42639_42659[(1)] = (2));


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
});})(c__40843__auto___42645,out))
;
return ((function (switch__40755__auto__,c__40843__auto___42645,out){
return (function() {
var cljs$core$async$state_machine__40756__auto__ = null;
var cljs$core$async$state_machine__40756__auto____0 = (function (){
var statearr_42640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42640[(0)] = cljs$core$async$state_machine__40756__auto__);

(statearr_42640[(1)] = (1));

return statearr_42640;
});
var cljs$core$async$state_machine__40756__auto____1 = (function (state_42617){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_42617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e42641){if((e42641 instanceof Object)){
var ex__40759__auto__ = e42641;
var statearr_42642_42660 = state_42617;
(statearr_42642_42660[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42661 = state_42617;
state_42617 = G__42661;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$state_machine__40756__auto__ = function(state_42617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40756__auto____1.call(this,state_42617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40756__auto____0;
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40756__auto____1;
return cljs$core$async$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___42645,out))
})();
var state__40845__auto__ = (function (){var statearr_42643 = f__40844__auto__.call(null);
(statearr_42643[(6)] = c__40843__auto___42645);

return statearr_42643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___42645,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42663 = arguments.length;
switch (G__42663) {
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
var c__40843__auto___42733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40843__auto___42733,out){
return (function (){
var f__40844__auto__ = (function (){var switch__40755__auto__ = ((function (c__40843__auto___42733,out){
return (function (state_42705){
var state_val_42706 = (state_42705[(1)]);
if((state_val_42706 === (7))){
var inst_42701 = (state_42705[(2)]);
var state_42705__$1 = state_42705;
var statearr_42707_42734 = state_42705__$1;
(statearr_42707_42734[(2)] = inst_42701);

(statearr_42707_42734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42706 === (1))){
var inst_42664 = [];
var inst_42665 = inst_42664;
var inst_42666 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42705__$1 = (function (){var statearr_42708 = state_42705;
(statearr_42708[(7)] = inst_42666);

(statearr_42708[(8)] = inst_42665);

return statearr_42708;
})();
var statearr_42709_42735 = state_42705__$1;
(statearr_42709_42735[(2)] = null);

(statearr_42709_42735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42706 === (4))){
var inst_42669 = (state_42705[(9)]);
var inst_42669__$1 = (state_42705[(2)]);
var inst_42670 = (inst_42669__$1 == null);
var inst_42671 = cljs.core.not.call(null,inst_42670);
var state_42705__$1 = (function (){var statearr_42710 = state_42705;
(statearr_42710[(9)] = inst_42669__$1);

return statearr_42710;
})();
if(inst_42671){
var statearr_42711_42736 = state_42705__$1;
(statearr_42711_42736[(1)] = (5));

} else {
var statearr_42712_42737 = state_42705__$1;
(statearr_42712_42737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42706 === (15))){
var inst_42695 = (state_42705[(2)]);
var state_42705__$1 = state_42705;
var statearr_42713_42738 = state_42705__$1;
(statearr_42713_42738[(2)] = inst_42695);

(statearr_42713_42738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42706 === (13))){
var state_42705__$1 = state_42705;
var statearr_42714_42739 = state_42705__$1;
(statearr_42714_42739[(2)] = null);

(statearr_42714_42739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42706 === (6))){
var inst_42665 = (state_42705[(8)]);
var inst_42690 = inst_42665.length;
var inst_42691 = (inst_42690 > (0));
var state_42705__$1 = state_42705;
if(cljs.core.truth_(inst_42691)){
var statearr_42715_42740 = state_42705__$1;
(statearr_42715_42740[(1)] = (12));

} else {
var statearr_42716_42741 = state_42705__$1;
(statearr_42716_42741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42706 === (3))){
var inst_42703 = (state_42705[(2)]);
var state_42705__$1 = state_42705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42705__$1,inst_42703);
} else {
if((state_val_42706 === (12))){
var inst_42665 = (state_42705[(8)]);
var inst_42693 = cljs.core.vec.call(null,inst_42665);
var state_42705__$1 = state_42705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42705__$1,(15),out,inst_42693);
} else {
if((state_val_42706 === (2))){
var state_42705__$1 = state_42705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42705__$1,(4),ch);
} else {
if((state_val_42706 === (11))){
var inst_42673 = (state_42705[(10)]);
var inst_42669 = (state_42705[(9)]);
var inst_42683 = (state_42705[(2)]);
var inst_42684 = [];
var inst_42685 = inst_42684.push(inst_42669);
var inst_42665 = inst_42684;
var inst_42666 = inst_42673;
var state_42705__$1 = (function (){var statearr_42717 = state_42705;
(statearr_42717[(7)] = inst_42666);

(statearr_42717[(11)] = inst_42683);

(statearr_42717[(12)] = inst_42685);

(statearr_42717[(8)] = inst_42665);

return statearr_42717;
})();
var statearr_42718_42742 = state_42705__$1;
(statearr_42718_42742[(2)] = null);

(statearr_42718_42742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42706 === (9))){
var inst_42665 = (state_42705[(8)]);
var inst_42681 = cljs.core.vec.call(null,inst_42665);
var state_42705__$1 = state_42705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42705__$1,(11),out,inst_42681);
} else {
if((state_val_42706 === (5))){
var inst_42666 = (state_42705[(7)]);
var inst_42673 = (state_42705[(10)]);
var inst_42669 = (state_42705[(9)]);
var inst_42673__$1 = f.call(null,inst_42669);
var inst_42674 = cljs.core._EQ_.call(null,inst_42673__$1,inst_42666);
var inst_42675 = cljs.core.keyword_identical_QMARK_.call(null,inst_42666,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42676 = (inst_42674) || (inst_42675);
var state_42705__$1 = (function (){var statearr_42719 = state_42705;
(statearr_42719[(10)] = inst_42673__$1);

return statearr_42719;
})();
if(cljs.core.truth_(inst_42676)){
var statearr_42720_42743 = state_42705__$1;
(statearr_42720_42743[(1)] = (8));

} else {
var statearr_42721_42744 = state_42705__$1;
(statearr_42721_42744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42706 === (14))){
var inst_42698 = (state_42705[(2)]);
var inst_42699 = cljs.core.async.close_BANG_.call(null,out);
var state_42705__$1 = (function (){var statearr_42723 = state_42705;
(statearr_42723[(13)] = inst_42698);

return statearr_42723;
})();
var statearr_42724_42745 = state_42705__$1;
(statearr_42724_42745[(2)] = inst_42699);

(statearr_42724_42745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42706 === (10))){
var inst_42688 = (state_42705[(2)]);
var state_42705__$1 = state_42705;
var statearr_42725_42746 = state_42705__$1;
(statearr_42725_42746[(2)] = inst_42688);

(statearr_42725_42746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42706 === (8))){
var inst_42673 = (state_42705[(10)]);
var inst_42669 = (state_42705[(9)]);
var inst_42665 = (state_42705[(8)]);
var inst_42678 = inst_42665.push(inst_42669);
var tmp42722 = inst_42665;
var inst_42665__$1 = tmp42722;
var inst_42666 = inst_42673;
var state_42705__$1 = (function (){var statearr_42726 = state_42705;
(statearr_42726[(7)] = inst_42666);

(statearr_42726[(8)] = inst_42665__$1);

(statearr_42726[(14)] = inst_42678);

return statearr_42726;
})();
var statearr_42727_42747 = state_42705__$1;
(statearr_42727_42747[(2)] = null);

(statearr_42727_42747[(1)] = (2));


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
});})(c__40843__auto___42733,out))
;
return ((function (switch__40755__auto__,c__40843__auto___42733,out){
return (function() {
var cljs$core$async$state_machine__40756__auto__ = null;
var cljs$core$async$state_machine__40756__auto____0 = (function (){
var statearr_42728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42728[(0)] = cljs$core$async$state_machine__40756__auto__);

(statearr_42728[(1)] = (1));

return statearr_42728;
});
var cljs$core$async$state_machine__40756__auto____1 = (function (state_42705){
while(true){
var ret_value__40757__auto__ = (function (){try{while(true){
var result__40758__auto__ = switch__40755__auto__.call(null,state_42705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40758__auto__;
}
break;
}
}catch (e42729){if((e42729 instanceof Object)){
var ex__40759__auto__ = e42729;
var statearr_42730_42748 = state_42705;
(statearr_42730_42748[(5)] = ex__40759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42749 = state_42705;
state_42705 = G__42749;
continue;
} else {
return ret_value__40757__auto__;
}
break;
}
});
cljs$core$async$state_machine__40756__auto__ = function(state_42705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40756__auto____1.call(this,state_42705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40756__auto____0;
cljs$core$async$state_machine__40756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40756__auto____1;
return cljs$core$async$state_machine__40756__auto__;
})()
;})(switch__40755__auto__,c__40843__auto___42733,out))
})();
var state__40845__auto__ = (function (){var statearr_42731 = f__40844__auto__.call(null);
(statearr_42731[(6)] = c__40843__auto___42733);

return statearr_42731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40845__auto__);
});})(c__40843__auto___42733,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1517176490202
