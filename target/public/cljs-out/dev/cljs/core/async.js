// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24041 = arguments.length;
switch (G__24041) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24042 = (function (f,blockable,meta24043){
this.f = f;
this.blockable = blockable;
this.meta24043 = meta24043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24044,meta24043__$1){
var self__ = this;
var _24044__$1 = this;
return (new cljs.core.async.t_cljs$core$async24042(self__.f,self__.blockable,meta24043__$1));
}));

(cljs.core.async.t_cljs$core$async24042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24044){
var self__ = this;
var _24044__$1 = this;
return self__.meta24043;
}));

(cljs.core.async.t_cljs$core$async24042.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24042.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24043","meta24043",1539690416,null)], null);
}));

(cljs.core.async.t_cljs$core$async24042.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24042");

(cljs.core.async.t_cljs$core$async24042.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async24042");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24042.
 */
cljs.core.async.__GT_t_cljs$core$async24042 = (function cljs$core$async$__GT_t_cljs$core$async24042(f__$1,blockable__$1,meta24043){
return (new cljs.core.async.t_cljs$core$async24042(f__$1,blockable__$1,meta24043));
});

}

return (new cljs.core.async.t_cljs$core$async24042(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__24048 = arguments.length;
switch (G__24048) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24051 = arguments.length;
switch (G__24051) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__24054 = arguments.length;
switch (G__24054) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24056 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24056);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_24056);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24058 = arguments.length;
switch (G__24058) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___24060 = n;
var x_24061 = (0);
while(true){
if((x_24061 < n__5593__auto___24060)){
(a[x_24061] = x_24061);

var G__24062 = (x_24061 + (1));
x_24061 = G__24062;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24063 = (function (flag,meta24064){
this.flag = flag;
this.meta24064 = meta24064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24065,meta24064__$1){
var self__ = this;
var _24065__$1 = this;
return (new cljs.core.async.t_cljs$core$async24063(self__.flag,meta24064__$1));
}));

(cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24065){
var self__ = this;
var _24065__$1 = this;
return self__.meta24064;
}));

(cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24064","meta24064",-1086962182,null)], null);
}));

(cljs.core.async.t_cljs$core$async24063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24063");

(cljs.core.async.t_cljs$core$async24063.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async24063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24063.
 */
cljs.core.async.__GT_t_cljs$core$async24063 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24063(flag__$1,meta24064){
return (new cljs.core.async.t_cljs$core$async24063(flag__$1,meta24064));
});

}

return (new cljs.core.async.t_cljs$core$async24063(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24066 = (function (flag,cb,meta24067){
this.flag = flag;
this.cb = cb;
this.meta24067 = meta24067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24068,meta24067__$1){
var self__ = this;
var _24068__$1 = this;
return (new cljs.core.async.t_cljs$core$async24066(self__.flag,self__.cb,meta24067__$1));
}));

(cljs.core.async.t_cljs$core$async24066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24068){
var self__ = this;
var _24068__$1 = this;
return self__.meta24067;
}));

(cljs.core.async.t_cljs$core$async24066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24067","meta24067",-396410487,null)], null);
}));

(cljs.core.async.t_cljs$core$async24066.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24066");

(cljs.core.async.t_cljs$core$async24066.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async24066");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24066.
 */
cljs.core.async.__GT_t_cljs$core$async24066 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24066(flag__$1,cb__$1,meta24067){
return (new cljs.core.async.t_cljs$core$async24066(flag__$1,cb__$1,meta24067));
});

}

return (new cljs.core.async.t_cljs$core$async24066(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__24069_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24069_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__24070_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24070_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24071 = (i + (1));
i = G__24071;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
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
var args__5732__auto__ = [];
var len__5726__auto___24076 = arguments.length;
var i__5727__auto___24077 = (0);
while(true){
if((i__5727__auto___24077 < len__5726__auto___24076)){
args__5732__auto__.push((arguments[i__5727__auto___24077]));

var G__24078 = (i__5727__auto___24077 + (1));
i__5727__auto___24077 = G__24078;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24074){
var map__24075 = p__24074;
var map__24075__$1 = cljs.core.__destructure_map.call(null,map__24075);
var opts = map__24075__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24072){
var G__24073 = cljs.core.first.call(null,seq24072);
var seq24072__$1 = cljs.core.next.call(null,seq24072);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24073,seq24072__$1);
}));

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
var G__24080 = arguments.length;
switch (G__24080) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22108__auto___24127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_24104){
var state_val_24105 = (state_24104[(1)]);
if((state_val_24105 === (7))){
var inst_24100 = (state_24104[(2)]);
var state_24104__$1 = state_24104;
var statearr_24106_24128 = state_24104__$1;
(statearr_24106_24128[(2)] = inst_24100);

(statearr_24106_24128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (1))){
var state_24104__$1 = state_24104;
var statearr_24107_24129 = state_24104__$1;
(statearr_24107_24129[(2)] = null);

(statearr_24107_24129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (4))){
var inst_24083 = (state_24104[(7)]);
var inst_24083__$1 = (state_24104[(2)]);
var inst_24084 = (inst_24083__$1 == null);
var state_24104__$1 = (function (){var statearr_24108 = state_24104;
(statearr_24108[(7)] = inst_24083__$1);

return statearr_24108;
})();
if(cljs.core.truth_(inst_24084)){
var statearr_24109_24130 = state_24104__$1;
(statearr_24109_24130[(1)] = (5));

} else {
var statearr_24110_24131 = state_24104__$1;
(statearr_24110_24131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (13))){
var state_24104__$1 = state_24104;
var statearr_24111_24132 = state_24104__$1;
(statearr_24111_24132[(2)] = null);

(statearr_24111_24132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (6))){
var inst_24083 = (state_24104[(7)]);
var state_24104__$1 = state_24104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24104__$1,(11),to,inst_24083);
} else {
if((state_val_24105 === (3))){
var inst_24102 = (state_24104[(2)]);
var state_24104__$1 = state_24104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24104__$1,inst_24102);
} else {
if((state_val_24105 === (12))){
var state_24104__$1 = state_24104;
var statearr_24112_24133 = state_24104__$1;
(statearr_24112_24133[(2)] = null);

(statearr_24112_24133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (2))){
var state_24104__$1 = state_24104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24104__$1,(4),from);
} else {
if((state_val_24105 === (11))){
var inst_24093 = (state_24104[(2)]);
var state_24104__$1 = state_24104;
if(cljs.core.truth_(inst_24093)){
var statearr_24113_24134 = state_24104__$1;
(statearr_24113_24134[(1)] = (12));

} else {
var statearr_24114_24135 = state_24104__$1;
(statearr_24114_24135[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (9))){
var state_24104__$1 = state_24104;
var statearr_24115_24136 = state_24104__$1;
(statearr_24115_24136[(2)] = null);

(statearr_24115_24136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (5))){
var state_24104__$1 = state_24104;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24116_24137 = state_24104__$1;
(statearr_24116_24137[(1)] = (8));

} else {
var statearr_24117_24138 = state_24104__$1;
(statearr_24117_24138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (14))){
var inst_24098 = (state_24104[(2)]);
var state_24104__$1 = state_24104;
var statearr_24118_24139 = state_24104__$1;
(statearr_24118_24139[(2)] = inst_24098);

(statearr_24118_24139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (10))){
var inst_24090 = (state_24104[(2)]);
var state_24104__$1 = state_24104;
var statearr_24119_24140 = state_24104__$1;
(statearr_24119_24140[(2)] = inst_24090);

(statearr_24119_24140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (8))){
var inst_24087 = cljs.core.async.close_BANG_.call(null,to);
var state_24104__$1 = state_24104;
var statearr_24120_24141 = state_24104__$1;
(statearr_24120_24141[(2)] = inst_24087);

(statearr_24120_24141[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_24121 = [null,null,null,null,null,null,null,null];
(statearr_24121[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_24121[(1)] = (1));

return statearr_24121;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_24104){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24122){var ex__21987__auto__ = e24122;
var statearr_24123_24142 = state_24104;
(statearr_24123_24142[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24104[(4)]))){
var statearr_24124_24143 = state_24104;
(statearr_24124_24143[(1)] = cljs.core.first.call(null,(state_24104[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24144 = state_24104;
state_24104 = G__24144;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_24104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_24104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_24125 = f__22109__auto__.call(null);
(statearr_24125[(6)] = c__22108__auto___24127);

return statearr_24125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__24145){
var vec__24146 = p__24145;
var v = cljs.core.nth.call(null,vec__24146,(0),null);
var p = cljs.core.nth.call(null,vec__24146,(1),null);
var job = vec__24146;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22108__auto___24322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_24153){
var state_val_24154 = (state_24153[(1)]);
if((state_val_24154 === (1))){
var state_24153__$1 = state_24153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24153__$1,(2),res,v);
} else {
if((state_val_24154 === (2))){
var inst_24150 = (state_24153[(2)]);
var inst_24151 = cljs.core.async.close_BANG_.call(null,res);
var state_24153__$1 = (function (){var statearr_24155 = state_24153;
(statearr_24155[(7)] = inst_24150);

return statearr_24155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24153__$1,inst_24151);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_24156 = [null,null,null,null,null,null,null,null];
(statearr_24156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__);

(statearr_24156[(1)] = (1));

return statearr_24156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1 = (function (state_24153){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24157){var ex__21987__auto__ = e24157;
var statearr_24158_24323 = state_24153;
(statearr_24158_24323[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24153[(4)]))){
var statearr_24159_24324 = state_24153;
(statearr_24159_24324[(1)] = cljs.core.first.call(null,(state_24153[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24325 = state_24153;
state_24153 = G__24325;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = function(state_24153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1.call(this,state_24153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_24160 = f__22109__auto__.call(null);
(statearr_24160[(6)] = c__22108__auto___24322);

return statearr_24160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__24161){
var vec__24162 = p__24161;
var v = cljs.core.nth.call(null,vec__24162,(0),null);
var p = cljs.core.nth.call(null,vec__24162,(1),null);
var job = vec__24162;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5593__auto___24326 = n;
var __24327 = (0);
while(true){
if((__24327 < n__5593__auto___24326)){
var G__24165_24328 = type;
var G__24165_24329__$1 = (((G__24165_24328 instanceof cljs.core.Keyword))?G__24165_24328.fqn:null);
switch (G__24165_24329__$1) {
case "compute":
var c__22108__auto___24331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24327,c__22108__auto___24331,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async){
return (function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = ((function (__24327,c__22108__auto___24331,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async){
return (function (state_24178){
var state_val_24179 = (state_24178[(1)]);
if((state_val_24179 === (1))){
var state_24178__$1 = state_24178;
var statearr_24180_24332 = state_24178__$1;
(statearr_24180_24332[(2)] = null);

(statearr_24180_24332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (2))){
var state_24178__$1 = state_24178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24178__$1,(4),jobs);
} else {
if((state_val_24179 === (3))){
var inst_24176 = (state_24178[(2)]);
var state_24178__$1 = state_24178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24178__$1,inst_24176);
} else {
if((state_val_24179 === (4))){
var inst_24168 = (state_24178[(2)]);
var inst_24169 = process__$1.call(null,inst_24168);
var state_24178__$1 = state_24178;
if(cljs.core.truth_(inst_24169)){
var statearr_24181_24333 = state_24178__$1;
(statearr_24181_24333[(1)] = (5));

} else {
var statearr_24182_24334 = state_24178__$1;
(statearr_24182_24334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (5))){
var state_24178__$1 = state_24178;
var statearr_24183_24335 = state_24178__$1;
(statearr_24183_24335[(2)] = null);

(statearr_24183_24335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (6))){
var state_24178__$1 = state_24178;
var statearr_24184_24336 = state_24178__$1;
(statearr_24184_24336[(2)] = null);

(statearr_24184_24336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (7))){
var inst_24174 = (state_24178[(2)]);
var state_24178__$1 = state_24178;
var statearr_24185_24337 = state_24178__$1;
(statearr_24185_24337[(2)] = inst_24174);

(statearr_24185_24337[(1)] = (3));


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
});})(__24327,c__22108__auto___24331,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async))
;
return ((function (__24327,switch__21983__auto__,c__22108__auto___24331,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_24186 = [null,null,null,null,null,null,null];
(statearr_24186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__);

(statearr_24186[(1)] = (1));

return statearr_24186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1 = (function (state_24178){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24187){var ex__21987__auto__ = e24187;
var statearr_24188_24338 = state_24178;
(statearr_24188_24338[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24178[(4)]))){
var statearr_24189_24339 = state_24178;
(statearr_24189_24339[(1)] = cljs.core.first.call(null,(state_24178[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24340 = state_24178;
state_24178 = G__24340;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = function(state_24178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1.call(this,state_24178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__;
})()
;})(__24327,switch__21983__auto__,c__22108__auto___24331,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async))
})();
var state__22110__auto__ = (function (){var statearr_24190 = f__22109__auto__.call(null);
(statearr_24190[(6)] = c__22108__auto___24331);

return statearr_24190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
});})(__24327,c__22108__auto___24331,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async))
);


break;
case "async":
var c__22108__auto___24341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24327,c__22108__auto___24341,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async){
return (function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = ((function (__24327,c__22108__auto___24341,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async){
return (function (state_24203){
var state_val_24204 = (state_24203[(1)]);
if((state_val_24204 === (1))){
var state_24203__$1 = state_24203;
var statearr_24205_24342 = state_24203__$1;
(statearr_24205_24342[(2)] = null);

(statearr_24205_24342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (2))){
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24203__$1,(4),jobs);
} else {
if((state_val_24204 === (3))){
var inst_24201 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24203__$1,inst_24201);
} else {
if((state_val_24204 === (4))){
var inst_24193 = (state_24203[(2)]);
var inst_24194 = async.call(null,inst_24193);
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24194)){
var statearr_24206_24343 = state_24203__$1;
(statearr_24206_24343[(1)] = (5));

} else {
var statearr_24207_24344 = state_24203__$1;
(statearr_24207_24344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (5))){
var state_24203__$1 = state_24203;
var statearr_24208_24345 = state_24203__$1;
(statearr_24208_24345[(2)] = null);

(statearr_24208_24345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (6))){
var state_24203__$1 = state_24203;
var statearr_24209_24346 = state_24203__$1;
(statearr_24209_24346[(2)] = null);

(statearr_24209_24346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (7))){
var inst_24199 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24210_24347 = state_24203__$1;
(statearr_24210_24347[(2)] = inst_24199);

(statearr_24210_24347[(1)] = (3));


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
});})(__24327,c__22108__auto___24341,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async))
;
return ((function (__24327,switch__21983__auto__,c__22108__auto___24341,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_24211 = [null,null,null,null,null,null,null];
(statearr_24211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__);

(statearr_24211[(1)] = (1));

return statearr_24211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1 = (function (state_24203){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24212){var ex__21987__auto__ = e24212;
var statearr_24213_24348 = state_24203;
(statearr_24213_24348[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24203[(4)]))){
var statearr_24214_24349 = state_24203;
(statearr_24214_24349[(1)] = cljs.core.first.call(null,(state_24203[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24350 = state_24203;
state_24203 = G__24350;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = function(state_24203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1.call(this,state_24203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__;
})()
;})(__24327,switch__21983__auto__,c__22108__auto___24341,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async))
})();
var state__22110__auto__ = (function (){var statearr_24215 = f__22109__auto__.call(null);
(statearr_24215[(6)] = c__22108__auto___24341);

return statearr_24215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
});})(__24327,c__22108__auto___24341,G__24165_24328,G__24165_24329__$1,n__5593__auto___24326,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24165_24329__$1)].join('')));

}

var G__24351 = (__24327 + (1));
__24327 = G__24351;
continue;
} else {
}
break;
}

var c__22108__auto___24352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_24237){
var state_val_24238 = (state_24237[(1)]);
if((state_val_24238 === (7))){
var inst_24233 = (state_24237[(2)]);
var state_24237__$1 = state_24237;
var statearr_24239_24353 = state_24237__$1;
(statearr_24239_24353[(2)] = inst_24233);

(statearr_24239_24353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (1))){
var state_24237__$1 = state_24237;
var statearr_24240_24354 = state_24237__$1;
(statearr_24240_24354[(2)] = null);

(statearr_24240_24354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (4))){
var inst_24218 = (state_24237[(7)]);
var inst_24218__$1 = (state_24237[(2)]);
var inst_24219 = (inst_24218__$1 == null);
var state_24237__$1 = (function (){var statearr_24241 = state_24237;
(statearr_24241[(7)] = inst_24218__$1);

return statearr_24241;
})();
if(cljs.core.truth_(inst_24219)){
var statearr_24242_24355 = state_24237__$1;
(statearr_24242_24355[(1)] = (5));

} else {
var statearr_24243_24356 = state_24237__$1;
(statearr_24243_24356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (6))){
var inst_24218 = (state_24237[(7)]);
var inst_24223 = (state_24237[(8)]);
var inst_24223__$1 = cljs.core.async.chan.call(null,(1));
var inst_24224 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24225 = [inst_24218,inst_24223__$1];
var inst_24226 = (new cljs.core.PersistentVector(null,2,(5),inst_24224,inst_24225,null));
var state_24237__$1 = (function (){var statearr_24244 = state_24237;
(statearr_24244[(8)] = inst_24223__$1);

return statearr_24244;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24237__$1,(8),jobs,inst_24226);
} else {
if((state_val_24238 === (3))){
var inst_24235 = (state_24237[(2)]);
var state_24237__$1 = state_24237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24237__$1,inst_24235);
} else {
if((state_val_24238 === (2))){
var state_24237__$1 = state_24237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24237__$1,(4),from);
} else {
if((state_val_24238 === (9))){
var inst_24230 = (state_24237[(2)]);
var state_24237__$1 = (function (){var statearr_24245 = state_24237;
(statearr_24245[(9)] = inst_24230);

return statearr_24245;
})();
var statearr_24246_24357 = state_24237__$1;
(statearr_24246_24357[(2)] = null);

(statearr_24246_24357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (5))){
var inst_24221 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24237__$1 = state_24237;
var statearr_24247_24358 = state_24237__$1;
(statearr_24247_24358[(2)] = inst_24221);

(statearr_24247_24358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (8))){
var inst_24223 = (state_24237[(8)]);
var inst_24228 = (state_24237[(2)]);
var state_24237__$1 = (function (){var statearr_24248 = state_24237;
(statearr_24248[(10)] = inst_24228);

return statearr_24248;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24237__$1,(9),results,inst_24223);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_24249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__);

(statearr_24249[(1)] = (1));

return statearr_24249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1 = (function (state_24237){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24250){var ex__21987__auto__ = e24250;
var statearr_24251_24359 = state_24237;
(statearr_24251_24359[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24237[(4)]))){
var statearr_24252_24360 = state_24237;
(statearr_24252_24360[(1)] = cljs.core.first.call(null,(state_24237[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24361 = state_24237;
state_24237 = G__24361;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = function(state_24237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1.call(this,state_24237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_24253 = f__22109__auto__.call(null);
(statearr_24253[(6)] = c__22108__auto___24352);

return statearr_24253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_24291){
var state_val_24292 = (state_24291[(1)]);
if((state_val_24292 === (7))){
var inst_24287 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
var statearr_24293_24362 = state_24291__$1;
(statearr_24293_24362[(2)] = inst_24287);

(statearr_24293_24362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (20))){
var state_24291__$1 = state_24291;
var statearr_24294_24363 = state_24291__$1;
(statearr_24294_24363[(2)] = null);

(statearr_24294_24363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (1))){
var state_24291__$1 = state_24291;
var statearr_24295_24364 = state_24291__$1;
(statearr_24295_24364[(2)] = null);

(statearr_24295_24364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (4))){
var inst_24256 = (state_24291[(7)]);
var inst_24256__$1 = (state_24291[(2)]);
var inst_24257 = (inst_24256__$1 == null);
var state_24291__$1 = (function (){var statearr_24296 = state_24291;
(statearr_24296[(7)] = inst_24256__$1);

return statearr_24296;
})();
if(cljs.core.truth_(inst_24257)){
var statearr_24297_24365 = state_24291__$1;
(statearr_24297_24365[(1)] = (5));

} else {
var statearr_24298_24366 = state_24291__$1;
(statearr_24298_24366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (15))){
var inst_24269 = (state_24291[(8)]);
var state_24291__$1 = state_24291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24291__$1,(18),to,inst_24269);
} else {
if((state_val_24292 === (21))){
var inst_24282 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
var statearr_24299_24367 = state_24291__$1;
(statearr_24299_24367[(2)] = inst_24282);

(statearr_24299_24367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (13))){
var inst_24284 = (state_24291[(2)]);
var state_24291__$1 = (function (){var statearr_24300 = state_24291;
(statearr_24300[(9)] = inst_24284);

return statearr_24300;
})();
var statearr_24301_24368 = state_24291__$1;
(statearr_24301_24368[(2)] = null);

(statearr_24301_24368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (6))){
var inst_24256 = (state_24291[(7)]);
var state_24291__$1 = state_24291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24291__$1,(11),inst_24256);
} else {
if((state_val_24292 === (17))){
var inst_24277 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
if(cljs.core.truth_(inst_24277)){
var statearr_24302_24369 = state_24291__$1;
(statearr_24302_24369[(1)] = (19));

} else {
var statearr_24303_24370 = state_24291__$1;
(statearr_24303_24370[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (3))){
var inst_24289 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24291__$1,inst_24289);
} else {
if((state_val_24292 === (12))){
var inst_24266 = (state_24291[(10)]);
var state_24291__$1 = state_24291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24291__$1,(14),inst_24266);
} else {
if((state_val_24292 === (2))){
var state_24291__$1 = state_24291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24291__$1,(4),results);
} else {
if((state_val_24292 === (19))){
var state_24291__$1 = state_24291;
var statearr_24304_24371 = state_24291__$1;
(statearr_24304_24371[(2)] = null);

(statearr_24304_24371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (11))){
var inst_24266 = (state_24291[(2)]);
var state_24291__$1 = (function (){var statearr_24305 = state_24291;
(statearr_24305[(10)] = inst_24266);

return statearr_24305;
})();
var statearr_24306_24372 = state_24291__$1;
(statearr_24306_24372[(2)] = null);

(statearr_24306_24372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (9))){
var state_24291__$1 = state_24291;
var statearr_24307_24373 = state_24291__$1;
(statearr_24307_24373[(2)] = null);

(statearr_24307_24373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (5))){
var state_24291__$1 = state_24291;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24308_24374 = state_24291__$1;
(statearr_24308_24374[(1)] = (8));

} else {
var statearr_24309_24375 = state_24291__$1;
(statearr_24309_24375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (14))){
var inst_24269 = (state_24291[(8)]);
var inst_24271 = (state_24291[(11)]);
var inst_24269__$1 = (state_24291[(2)]);
var inst_24270 = (inst_24269__$1 == null);
var inst_24271__$1 = cljs.core.not.call(null,inst_24270);
var state_24291__$1 = (function (){var statearr_24310 = state_24291;
(statearr_24310[(8)] = inst_24269__$1);

(statearr_24310[(11)] = inst_24271__$1);

return statearr_24310;
})();
if(inst_24271__$1){
var statearr_24311_24376 = state_24291__$1;
(statearr_24311_24376[(1)] = (15));

} else {
var statearr_24312_24377 = state_24291__$1;
(statearr_24312_24377[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (16))){
var inst_24271 = (state_24291[(11)]);
var state_24291__$1 = state_24291;
var statearr_24313_24378 = state_24291__$1;
(statearr_24313_24378[(2)] = inst_24271);

(statearr_24313_24378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (10))){
var inst_24263 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
var statearr_24314_24379 = state_24291__$1;
(statearr_24314_24379[(2)] = inst_24263);

(statearr_24314_24379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (18))){
var inst_24274 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
var statearr_24315_24380 = state_24291__$1;
(statearr_24315_24380[(2)] = inst_24274);

(statearr_24315_24380[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24292 === (8))){
var inst_24260 = cljs.core.async.close_BANG_.call(null,to);
var state_24291__$1 = state_24291;
var statearr_24316_24381 = state_24291__$1;
(statearr_24316_24381[(2)] = inst_24260);

(statearr_24316_24381[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_24317 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__);

(statearr_24317[(1)] = (1));

return statearr_24317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1 = (function (state_24291){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24318){var ex__21987__auto__ = e24318;
var statearr_24319_24382 = state_24291;
(statearr_24319_24382[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24291[(4)]))){
var statearr_24320_24383 = state_24291;
(statearr_24320_24383[(1)] = cljs.core.first.call(null,(state_24291[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24384 = state_24291;
state_24291 = G__24384;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = function(state_24291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1.call(this,state_24291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_24321 = f__22109__auto__.call(null);
(statearr_24321[(6)] = c__22108__auto__);

return statearr_24321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24386 = arguments.length;
switch (G__24386) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__24389 = arguments.length;
switch (G__24389) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__24392 = arguments.length;
switch (G__24392) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22108__auto___24442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_24418){
var state_val_24419 = (state_24418[(1)]);
if((state_val_24419 === (7))){
var inst_24414 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
var statearr_24420_24443 = state_24418__$1;
(statearr_24420_24443[(2)] = inst_24414);

(statearr_24420_24443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (1))){
var state_24418__$1 = state_24418;
var statearr_24421_24444 = state_24418__$1;
(statearr_24421_24444[(2)] = null);

(statearr_24421_24444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (4))){
var inst_24395 = (state_24418[(7)]);
var inst_24395__$1 = (state_24418[(2)]);
var inst_24396 = (inst_24395__$1 == null);
var state_24418__$1 = (function (){var statearr_24422 = state_24418;
(statearr_24422[(7)] = inst_24395__$1);

return statearr_24422;
})();
if(cljs.core.truth_(inst_24396)){
var statearr_24423_24445 = state_24418__$1;
(statearr_24423_24445[(1)] = (5));

} else {
var statearr_24424_24446 = state_24418__$1;
(statearr_24424_24446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (13))){
var state_24418__$1 = state_24418;
var statearr_24425_24447 = state_24418__$1;
(statearr_24425_24447[(2)] = null);

(statearr_24425_24447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (6))){
var inst_24395 = (state_24418[(7)]);
var inst_24401 = p.call(null,inst_24395);
var state_24418__$1 = state_24418;
if(cljs.core.truth_(inst_24401)){
var statearr_24426_24448 = state_24418__$1;
(statearr_24426_24448[(1)] = (9));

} else {
var statearr_24427_24449 = state_24418__$1;
(statearr_24427_24449[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (3))){
var inst_24416 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24418__$1,inst_24416);
} else {
if((state_val_24419 === (12))){
var state_24418__$1 = state_24418;
var statearr_24428_24450 = state_24418__$1;
(statearr_24428_24450[(2)] = null);

(statearr_24428_24450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (2))){
var state_24418__$1 = state_24418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24418__$1,(4),ch);
} else {
if((state_val_24419 === (11))){
var inst_24395 = (state_24418[(7)]);
var inst_24405 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24418__$1,(8),inst_24405,inst_24395);
} else {
if((state_val_24419 === (9))){
var state_24418__$1 = state_24418;
var statearr_24429_24451 = state_24418__$1;
(statearr_24429_24451[(2)] = tc);

(statearr_24429_24451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (5))){
var inst_24398 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24399 = cljs.core.async.close_BANG_.call(null,fc);
var state_24418__$1 = (function (){var statearr_24430 = state_24418;
(statearr_24430[(8)] = inst_24398);

return statearr_24430;
})();
var statearr_24431_24452 = state_24418__$1;
(statearr_24431_24452[(2)] = inst_24399);

(statearr_24431_24452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (14))){
var inst_24412 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
var statearr_24432_24453 = state_24418__$1;
(statearr_24432_24453[(2)] = inst_24412);

(statearr_24432_24453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (10))){
var state_24418__$1 = state_24418;
var statearr_24433_24454 = state_24418__$1;
(statearr_24433_24454[(2)] = fc);

(statearr_24433_24454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (8))){
var inst_24407 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
if(cljs.core.truth_(inst_24407)){
var statearr_24434_24455 = state_24418__$1;
(statearr_24434_24455[(1)] = (12));

} else {
var statearr_24435_24456 = state_24418__$1;
(statearr_24435_24456[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_24436 = [null,null,null,null,null,null,null,null,null];
(statearr_24436[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_24436[(1)] = (1));

return statearr_24436;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_24418){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24437){var ex__21987__auto__ = e24437;
var statearr_24438_24457 = state_24418;
(statearr_24438_24457[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24418[(4)]))){
var statearr_24439_24458 = state_24418;
(statearr_24439_24458[(1)] = cljs.core.first.call(null,(state_24418[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24459 = state_24418;
state_24418 = G__24459;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_24418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_24418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_24440 = f__22109__auto__.call(null);
(statearr_24440[(6)] = c__22108__auto___24442);

return statearr_24440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_24481){
var state_val_24482 = (state_24481[(1)]);
if((state_val_24482 === (7))){
var inst_24477 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24483_24502 = state_24481__$1;
(statearr_24483_24502[(2)] = inst_24477);

(statearr_24483_24502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (1))){
var inst_24460 = init;
var inst_24461 = inst_24460;
var state_24481__$1 = (function (){var statearr_24484 = state_24481;
(statearr_24484[(7)] = inst_24461);

return statearr_24484;
})();
var statearr_24485_24503 = state_24481__$1;
(statearr_24485_24503[(2)] = null);

(statearr_24485_24503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (4))){
var inst_24464 = (state_24481[(8)]);
var inst_24464__$1 = (state_24481[(2)]);
var inst_24465 = (inst_24464__$1 == null);
var state_24481__$1 = (function (){var statearr_24486 = state_24481;
(statearr_24486[(8)] = inst_24464__$1);

return statearr_24486;
})();
if(cljs.core.truth_(inst_24465)){
var statearr_24487_24504 = state_24481__$1;
(statearr_24487_24504[(1)] = (5));

} else {
var statearr_24488_24505 = state_24481__$1;
(statearr_24488_24505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (6))){
var inst_24461 = (state_24481[(7)]);
var inst_24464 = (state_24481[(8)]);
var inst_24468 = (state_24481[(9)]);
var inst_24468__$1 = f.call(null,inst_24461,inst_24464);
var inst_24469 = cljs.core.reduced_QMARK_.call(null,inst_24468__$1);
var state_24481__$1 = (function (){var statearr_24489 = state_24481;
(statearr_24489[(9)] = inst_24468__$1);

return statearr_24489;
})();
if(inst_24469){
var statearr_24490_24506 = state_24481__$1;
(statearr_24490_24506[(1)] = (8));

} else {
var statearr_24491_24507 = state_24481__$1;
(statearr_24491_24507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (3))){
var inst_24479 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24481__$1,inst_24479);
} else {
if((state_val_24482 === (2))){
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24481__$1,(4),ch);
} else {
if((state_val_24482 === (9))){
var inst_24468 = (state_24481[(9)]);
var inst_24461 = inst_24468;
var state_24481__$1 = (function (){var statearr_24492 = state_24481;
(statearr_24492[(7)] = inst_24461);

return statearr_24492;
})();
var statearr_24493_24508 = state_24481__$1;
(statearr_24493_24508[(2)] = null);

(statearr_24493_24508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (5))){
var inst_24461 = (state_24481[(7)]);
var state_24481__$1 = state_24481;
var statearr_24494_24509 = state_24481__$1;
(statearr_24494_24509[(2)] = inst_24461);

(statearr_24494_24509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (10))){
var inst_24475 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24495_24510 = state_24481__$1;
(statearr_24495_24510[(2)] = inst_24475);

(statearr_24495_24510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (8))){
var inst_24468 = (state_24481[(9)]);
var inst_24471 = cljs.core.deref.call(null,inst_24468);
var state_24481__$1 = state_24481;
var statearr_24496_24511 = state_24481__$1;
(statearr_24496_24511[(2)] = inst_24471);

(statearr_24496_24511[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__21984__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21984__auto____0 = (function (){
var statearr_24497 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24497[(0)] = cljs$core$async$reduce_$_state_machine__21984__auto__);

(statearr_24497[(1)] = (1));

return statearr_24497;
});
var cljs$core$async$reduce_$_state_machine__21984__auto____1 = (function (state_24481){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24498){var ex__21987__auto__ = e24498;
var statearr_24499_24512 = state_24481;
(statearr_24499_24512[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24481[(4)]))){
var statearr_24500_24513 = state_24481;
(statearr_24500_24513[(1)] = cljs.core.first.call(null,(state_24481[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24514 = state_24481;
state_24481 = G__24514;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21984__auto__ = function(state_24481){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21984__auto____1.call(this,state_24481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21984__auto____0;
cljs$core$async$reduce_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21984__auto____1;
return cljs$core$async$reduce_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_24501 = f__22109__auto__.call(null);
(statearr_24501[(6)] = c__22108__auto__);

return statearr_24501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_24520){
var state_val_24521 = (state_24520[(1)]);
if((state_val_24521 === (1))){
var inst_24515 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24520__$1 = state_24520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24520__$1,(2),inst_24515);
} else {
if((state_val_24521 === (2))){
var inst_24517 = (state_24520[(2)]);
var inst_24518 = f__$1.call(null,inst_24517);
var state_24520__$1 = state_24520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24520__$1,inst_24518);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21984__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21984__auto____0 = (function (){
var statearr_24522 = [null,null,null,null,null,null,null];
(statearr_24522[(0)] = cljs$core$async$transduce_$_state_machine__21984__auto__);

(statearr_24522[(1)] = (1));

return statearr_24522;
});
var cljs$core$async$transduce_$_state_machine__21984__auto____1 = (function (state_24520){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24523){var ex__21987__auto__ = e24523;
var statearr_24524_24527 = state_24520;
(statearr_24524_24527[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24520[(4)]))){
var statearr_24525_24528 = state_24520;
(statearr_24525_24528[(1)] = cljs.core.first.call(null,(state_24520[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24529 = state_24520;
state_24520 = G__24529;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21984__auto__ = function(state_24520){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21984__auto____1.call(this,state_24520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21984__auto____0;
cljs$core$async$transduce_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21984__auto____1;
return cljs$core$async$transduce_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_24526 = f__22109__auto__.call(null);
(statearr_24526[(6)] = c__22108__auto__);

return statearr_24526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__24531 = arguments.length;
switch (G__24531) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_24556){
var state_val_24557 = (state_24556[(1)]);
if((state_val_24557 === (7))){
var inst_24538 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24558_24580 = state_24556__$1;
(statearr_24558_24580[(2)] = inst_24538);

(statearr_24558_24580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (1))){
var inst_24532 = cljs.core.seq.call(null,coll);
var inst_24533 = inst_24532;
var state_24556__$1 = (function (){var statearr_24559 = state_24556;
(statearr_24559[(7)] = inst_24533);

return statearr_24559;
})();
var statearr_24560_24581 = state_24556__$1;
(statearr_24560_24581[(2)] = null);

(statearr_24560_24581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (4))){
var inst_24533 = (state_24556[(7)]);
var inst_24536 = cljs.core.first.call(null,inst_24533);
var state_24556__$1 = state_24556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24556__$1,(7),ch,inst_24536);
} else {
if((state_val_24557 === (13))){
var inst_24550 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24561_24582 = state_24556__$1;
(statearr_24561_24582[(2)] = inst_24550);

(statearr_24561_24582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (6))){
var inst_24541 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
if(cljs.core.truth_(inst_24541)){
var statearr_24562_24583 = state_24556__$1;
(statearr_24562_24583[(1)] = (8));

} else {
var statearr_24563_24584 = state_24556__$1;
(statearr_24563_24584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (3))){
var inst_24554 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24556__$1,inst_24554);
} else {
if((state_val_24557 === (12))){
var state_24556__$1 = state_24556;
var statearr_24564_24585 = state_24556__$1;
(statearr_24564_24585[(2)] = null);

(statearr_24564_24585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (2))){
var inst_24533 = (state_24556[(7)]);
var state_24556__$1 = state_24556;
if(cljs.core.truth_(inst_24533)){
var statearr_24565_24586 = state_24556__$1;
(statearr_24565_24586[(1)] = (4));

} else {
var statearr_24566_24587 = state_24556__$1;
(statearr_24566_24587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (11))){
var inst_24547 = cljs.core.async.close_BANG_.call(null,ch);
var state_24556__$1 = state_24556;
var statearr_24567_24588 = state_24556__$1;
(statearr_24567_24588[(2)] = inst_24547);

(statearr_24567_24588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (9))){
var state_24556__$1 = state_24556;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24568_24589 = state_24556__$1;
(statearr_24568_24589[(1)] = (11));

} else {
var statearr_24569_24590 = state_24556__$1;
(statearr_24569_24590[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (5))){
var inst_24533 = (state_24556[(7)]);
var state_24556__$1 = state_24556;
var statearr_24570_24591 = state_24556__$1;
(statearr_24570_24591[(2)] = inst_24533);

(statearr_24570_24591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (10))){
var inst_24552 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24571_24592 = state_24556__$1;
(statearr_24571_24592[(2)] = inst_24552);

(statearr_24571_24592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (8))){
var inst_24533 = (state_24556[(7)]);
var inst_24543 = cljs.core.next.call(null,inst_24533);
var inst_24533__$1 = inst_24543;
var state_24556__$1 = (function (){var statearr_24572 = state_24556;
(statearr_24572[(7)] = inst_24533__$1);

return statearr_24572;
})();
var statearr_24573_24593 = state_24556__$1;
(statearr_24573_24593[(2)] = null);

(statearr_24573_24593[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_24574 = [null,null,null,null,null,null,null,null];
(statearr_24574[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_24574[(1)] = (1));

return statearr_24574;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_24556){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24575){var ex__21987__auto__ = e24575;
var statearr_24576_24594 = state_24556;
(statearr_24576_24594[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24556[(4)]))){
var statearr_24577_24595 = state_24556;
(statearr_24577_24595[(1)] = cljs.core.first.call(null,(state_24556[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24596 = state_24556;
state_24556 = G__24596;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_24556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_24556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_24578 = f__22109__auto__.call(null);
(statearr_24578[(6)] = c__22108__auto__);

return statearr_24578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24598 = arguments.length;
switch (G__24598) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_24600 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_24600.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_24601 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_24601.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_24602 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_24602.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_24603 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m);
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_24603.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24604 = (function (ch,cs,meta24605){
this.ch = ch;
this.cs = cs;
this.meta24605 = meta24605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24606,meta24605__$1){
var self__ = this;
var _24606__$1 = this;
return (new cljs.core.async.t_cljs$core$async24604(self__.ch,self__.cs,meta24605__$1));
}));

(cljs.core.async.t_cljs$core$async24604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24606){
var self__ = this;
var _24606__$1 = this;
return self__.meta24605;
}));

(cljs.core.async.t_cljs$core$async24604.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24604.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24604.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24604.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24604.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24605","meta24605",-1696080936,null)], null);
}));

(cljs.core.async.t_cljs$core$async24604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24604");

(cljs.core.async.t_cljs$core$async24604.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async24604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24604.
 */
cljs.core.async.__GT_t_cljs$core$async24604 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24604(ch__$1,cs__$1,meta24605){
return (new cljs.core.async.t_cljs$core$async24604(ch__$1,cs__$1,meta24605));
});

}

return (new cljs.core.async.t_cljs$core$async24604(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__22108__auto___24823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_24739){
var state_val_24740 = (state_24739[(1)]);
if((state_val_24740 === (7))){
var inst_24735 = (state_24739[(2)]);
var state_24739__$1 = state_24739;
var statearr_24741_24824 = state_24739__$1;
(statearr_24741_24824[(2)] = inst_24735);

(statearr_24741_24824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (20))){
var inst_24640 = (state_24739[(7)]);
var inst_24652 = cljs.core.first.call(null,inst_24640);
var inst_24653 = cljs.core.nth.call(null,inst_24652,(0),null);
var inst_24654 = cljs.core.nth.call(null,inst_24652,(1),null);
var state_24739__$1 = (function (){var statearr_24742 = state_24739;
(statearr_24742[(8)] = inst_24653);

return statearr_24742;
})();
if(cljs.core.truth_(inst_24654)){
var statearr_24743_24825 = state_24739__$1;
(statearr_24743_24825[(1)] = (22));

} else {
var statearr_24744_24826 = state_24739__$1;
(statearr_24744_24826[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (27))){
var inst_24682 = (state_24739[(9)]);
var inst_24684 = (state_24739[(10)]);
var inst_24689 = (state_24739[(11)]);
var inst_24609 = (state_24739[(12)]);
var inst_24689__$1 = cljs.core._nth.call(null,inst_24682,inst_24684);
var inst_24690 = cljs.core.async.put_BANG_.call(null,inst_24689__$1,inst_24609,done);
var state_24739__$1 = (function (){var statearr_24745 = state_24739;
(statearr_24745[(11)] = inst_24689__$1);

return statearr_24745;
})();
if(cljs.core.truth_(inst_24690)){
var statearr_24746_24827 = state_24739__$1;
(statearr_24746_24827[(1)] = (30));

} else {
var statearr_24747_24828 = state_24739__$1;
(statearr_24747_24828[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (1))){
var state_24739__$1 = state_24739;
var statearr_24748_24829 = state_24739__$1;
(statearr_24748_24829[(2)] = null);

(statearr_24748_24829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (24))){
var inst_24640 = (state_24739[(7)]);
var inst_24659 = (state_24739[(2)]);
var inst_24660 = cljs.core.next.call(null,inst_24640);
var inst_24618 = inst_24660;
var inst_24619 = null;
var inst_24620 = (0);
var inst_24621 = (0);
var state_24739__$1 = (function (){var statearr_24749 = state_24739;
(statearr_24749[(13)] = inst_24659);

(statearr_24749[(14)] = inst_24618);

(statearr_24749[(15)] = inst_24619);

(statearr_24749[(16)] = inst_24620);

(statearr_24749[(17)] = inst_24621);

return statearr_24749;
})();
var statearr_24750_24830 = state_24739__$1;
(statearr_24750_24830[(2)] = null);

(statearr_24750_24830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (39))){
var state_24739__$1 = state_24739;
var statearr_24754_24831 = state_24739__$1;
(statearr_24754_24831[(2)] = null);

(statearr_24754_24831[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (4))){
var inst_24609 = (state_24739[(12)]);
var inst_24609__$1 = (state_24739[(2)]);
var inst_24610 = (inst_24609__$1 == null);
var state_24739__$1 = (function (){var statearr_24755 = state_24739;
(statearr_24755[(12)] = inst_24609__$1);

return statearr_24755;
})();
if(cljs.core.truth_(inst_24610)){
var statearr_24756_24832 = state_24739__$1;
(statearr_24756_24832[(1)] = (5));

} else {
var statearr_24757_24833 = state_24739__$1;
(statearr_24757_24833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (15))){
var inst_24621 = (state_24739[(17)]);
var inst_24618 = (state_24739[(14)]);
var inst_24619 = (state_24739[(15)]);
var inst_24620 = (state_24739[(16)]);
var inst_24636 = (state_24739[(2)]);
var inst_24637 = (inst_24621 + (1));
var tmp24751 = inst_24619;
var tmp24752 = inst_24618;
var tmp24753 = inst_24620;
var inst_24618__$1 = tmp24752;
var inst_24619__$1 = tmp24751;
var inst_24620__$1 = tmp24753;
var inst_24621__$1 = inst_24637;
var state_24739__$1 = (function (){var statearr_24758 = state_24739;
(statearr_24758[(18)] = inst_24636);

(statearr_24758[(14)] = inst_24618__$1);

(statearr_24758[(15)] = inst_24619__$1);

(statearr_24758[(16)] = inst_24620__$1);

(statearr_24758[(17)] = inst_24621__$1);

return statearr_24758;
})();
var statearr_24759_24834 = state_24739__$1;
(statearr_24759_24834[(2)] = null);

(statearr_24759_24834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (21))){
var inst_24663 = (state_24739[(2)]);
var state_24739__$1 = state_24739;
var statearr_24763_24835 = state_24739__$1;
(statearr_24763_24835[(2)] = inst_24663);

(statearr_24763_24835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (31))){
var inst_24689 = (state_24739[(11)]);
var inst_24693 = cljs.core.async.untap_STAR_.call(null,m,inst_24689);
var state_24739__$1 = state_24739;
var statearr_24764_24836 = state_24739__$1;
(statearr_24764_24836[(2)] = inst_24693);

(statearr_24764_24836[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (32))){
var inst_24684 = (state_24739[(10)]);
var inst_24681 = (state_24739[(19)]);
var inst_24682 = (state_24739[(9)]);
var inst_24683 = (state_24739[(20)]);
var inst_24695 = (state_24739[(2)]);
var inst_24696 = (inst_24684 + (1));
var tmp24760 = inst_24683;
var tmp24761 = inst_24681;
var tmp24762 = inst_24682;
var inst_24681__$1 = tmp24761;
var inst_24682__$1 = tmp24762;
var inst_24683__$1 = tmp24760;
var inst_24684__$1 = inst_24696;
var state_24739__$1 = (function (){var statearr_24765 = state_24739;
(statearr_24765[(21)] = inst_24695);

(statearr_24765[(19)] = inst_24681__$1);

(statearr_24765[(9)] = inst_24682__$1);

(statearr_24765[(20)] = inst_24683__$1);

(statearr_24765[(10)] = inst_24684__$1);

return statearr_24765;
})();
var statearr_24766_24837 = state_24739__$1;
(statearr_24766_24837[(2)] = null);

(statearr_24766_24837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (40))){
var inst_24708 = (state_24739[(22)]);
var inst_24712 = cljs.core.async.untap_STAR_.call(null,m,inst_24708);
var state_24739__$1 = state_24739;
var statearr_24767_24838 = state_24739__$1;
(statearr_24767_24838[(2)] = inst_24712);

(statearr_24767_24838[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (33))){
var inst_24699 = (state_24739[(23)]);
var inst_24701 = cljs.core.chunked_seq_QMARK_.call(null,inst_24699);
var state_24739__$1 = state_24739;
if(inst_24701){
var statearr_24768_24839 = state_24739__$1;
(statearr_24768_24839[(1)] = (36));

} else {
var statearr_24769_24840 = state_24739__$1;
(statearr_24769_24840[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (13))){
var inst_24630 = (state_24739[(24)]);
var inst_24633 = cljs.core.async.close_BANG_.call(null,inst_24630);
var state_24739__$1 = state_24739;
var statearr_24770_24841 = state_24739__$1;
(statearr_24770_24841[(2)] = inst_24633);

(statearr_24770_24841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (22))){
var inst_24653 = (state_24739[(8)]);
var inst_24656 = cljs.core.async.close_BANG_.call(null,inst_24653);
var state_24739__$1 = state_24739;
var statearr_24771_24842 = state_24739__$1;
(statearr_24771_24842[(2)] = inst_24656);

(statearr_24771_24842[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (36))){
var inst_24699 = (state_24739[(23)]);
var inst_24703 = cljs.core.chunk_first.call(null,inst_24699);
var inst_24704 = cljs.core.chunk_rest.call(null,inst_24699);
var inst_24705 = cljs.core.count.call(null,inst_24703);
var inst_24681 = inst_24704;
var inst_24682 = inst_24703;
var inst_24683 = inst_24705;
var inst_24684 = (0);
var state_24739__$1 = (function (){var statearr_24772 = state_24739;
(statearr_24772[(19)] = inst_24681);

(statearr_24772[(9)] = inst_24682);

(statearr_24772[(20)] = inst_24683);

(statearr_24772[(10)] = inst_24684);

return statearr_24772;
})();
var statearr_24773_24843 = state_24739__$1;
(statearr_24773_24843[(2)] = null);

(statearr_24773_24843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (41))){
var inst_24699 = (state_24739[(23)]);
var inst_24714 = (state_24739[(2)]);
var inst_24715 = cljs.core.next.call(null,inst_24699);
var inst_24681 = inst_24715;
var inst_24682 = null;
var inst_24683 = (0);
var inst_24684 = (0);
var state_24739__$1 = (function (){var statearr_24774 = state_24739;
(statearr_24774[(25)] = inst_24714);

(statearr_24774[(19)] = inst_24681);

(statearr_24774[(9)] = inst_24682);

(statearr_24774[(20)] = inst_24683);

(statearr_24774[(10)] = inst_24684);

return statearr_24774;
})();
var statearr_24775_24844 = state_24739__$1;
(statearr_24775_24844[(2)] = null);

(statearr_24775_24844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (43))){
var state_24739__$1 = state_24739;
var statearr_24776_24845 = state_24739__$1;
(statearr_24776_24845[(2)] = null);

(statearr_24776_24845[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (29))){
var inst_24723 = (state_24739[(2)]);
var state_24739__$1 = state_24739;
var statearr_24777_24846 = state_24739__$1;
(statearr_24777_24846[(2)] = inst_24723);

(statearr_24777_24846[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (44))){
var inst_24732 = (state_24739[(2)]);
var state_24739__$1 = (function (){var statearr_24778 = state_24739;
(statearr_24778[(26)] = inst_24732);

return statearr_24778;
})();
var statearr_24779_24847 = state_24739__$1;
(statearr_24779_24847[(2)] = null);

(statearr_24779_24847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (6))){
var inst_24673 = (state_24739[(27)]);
var inst_24672 = cljs.core.deref.call(null,cs);
var inst_24673__$1 = cljs.core.keys.call(null,inst_24672);
var inst_24674 = cljs.core.count.call(null,inst_24673__$1);
var inst_24675 = cljs.core.reset_BANG_.call(null,dctr,inst_24674);
var inst_24680 = cljs.core.seq.call(null,inst_24673__$1);
var inst_24681 = inst_24680;
var inst_24682 = null;
var inst_24683 = (0);
var inst_24684 = (0);
var state_24739__$1 = (function (){var statearr_24780 = state_24739;
(statearr_24780[(27)] = inst_24673__$1);

(statearr_24780[(28)] = inst_24675);

(statearr_24780[(19)] = inst_24681);

(statearr_24780[(9)] = inst_24682);

(statearr_24780[(20)] = inst_24683);

(statearr_24780[(10)] = inst_24684);

return statearr_24780;
})();
var statearr_24781_24848 = state_24739__$1;
(statearr_24781_24848[(2)] = null);

(statearr_24781_24848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (28))){
var inst_24681 = (state_24739[(19)]);
var inst_24699 = (state_24739[(23)]);
var inst_24699__$1 = cljs.core.seq.call(null,inst_24681);
var state_24739__$1 = (function (){var statearr_24782 = state_24739;
(statearr_24782[(23)] = inst_24699__$1);

return statearr_24782;
})();
if(inst_24699__$1){
var statearr_24783_24849 = state_24739__$1;
(statearr_24783_24849[(1)] = (33));

} else {
var statearr_24784_24850 = state_24739__$1;
(statearr_24784_24850[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (25))){
var inst_24684 = (state_24739[(10)]);
var inst_24683 = (state_24739[(20)]);
var inst_24686 = (inst_24684 < inst_24683);
var inst_24687 = inst_24686;
var state_24739__$1 = state_24739;
if(cljs.core.truth_(inst_24687)){
var statearr_24785_24851 = state_24739__$1;
(statearr_24785_24851[(1)] = (27));

} else {
var statearr_24786_24852 = state_24739__$1;
(statearr_24786_24852[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (34))){
var state_24739__$1 = state_24739;
var statearr_24787_24853 = state_24739__$1;
(statearr_24787_24853[(2)] = null);

(statearr_24787_24853[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (17))){
var state_24739__$1 = state_24739;
var statearr_24788_24854 = state_24739__$1;
(statearr_24788_24854[(2)] = null);

(statearr_24788_24854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (3))){
var inst_24737 = (state_24739[(2)]);
var state_24739__$1 = state_24739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24739__$1,inst_24737);
} else {
if((state_val_24740 === (12))){
var inst_24668 = (state_24739[(2)]);
var state_24739__$1 = state_24739;
var statearr_24789_24855 = state_24739__$1;
(statearr_24789_24855[(2)] = inst_24668);

(statearr_24789_24855[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (2))){
var state_24739__$1 = state_24739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24739__$1,(4),ch);
} else {
if((state_val_24740 === (23))){
var state_24739__$1 = state_24739;
var statearr_24790_24856 = state_24739__$1;
(statearr_24790_24856[(2)] = null);

(statearr_24790_24856[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (35))){
var inst_24721 = (state_24739[(2)]);
var state_24739__$1 = state_24739;
var statearr_24791_24857 = state_24739__$1;
(statearr_24791_24857[(2)] = inst_24721);

(statearr_24791_24857[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (19))){
var inst_24640 = (state_24739[(7)]);
var inst_24644 = cljs.core.chunk_first.call(null,inst_24640);
var inst_24645 = cljs.core.chunk_rest.call(null,inst_24640);
var inst_24646 = cljs.core.count.call(null,inst_24644);
var inst_24618 = inst_24645;
var inst_24619 = inst_24644;
var inst_24620 = inst_24646;
var inst_24621 = (0);
var state_24739__$1 = (function (){var statearr_24792 = state_24739;
(statearr_24792[(14)] = inst_24618);

(statearr_24792[(15)] = inst_24619);

(statearr_24792[(16)] = inst_24620);

(statearr_24792[(17)] = inst_24621);

return statearr_24792;
})();
var statearr_24793_24858 = state_24739__$1;
(statearr_24793_24858[(2)] = null);

(statearr_24793_24858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (11))){
var inst_24618 = (state_24739[(14)]);
var inst_24640 = (state_24739[(7)]);
var inst_24640__$1 = cljs.core.seq.call(null,inst_24618);
var state_24739__$1 = (function (){var statearr_24794 = state_24739;
(statearr_24794[(7)] = inst_24640__$1);

return statearr_24794;
})();
if(inst_24640__$1){
var statearr_24795_24859 = state_24739__$1;
(statearr_24795_24859[(1)] = (16));

} else {
var statearr_24796_24860 = state_24739__$1;
(statearr_24796_24860[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (9))){
var inst_24670 = (state_24739[(2)]);
var state_24739__$1 = state_24739;
var statearr_24797_24861 = state_24739__$1;
(statearr_24797_24861[(2)] = inst_24670);

(statearr_24797_24861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (5))){
var inst_24616 = cljs.core.deref.call(null,cs);
var inst_24617 = cljs.core.seq.call(null,inst_24616);
var inst_24618 = inst_24617;
var inst_24619 = null;
var inst_24620 = (0);
var inst_24621 = (0);
var state_24739__$1 = (function (){var statearr_24798 = state_24739;
(statearr_24798[(14)] = inst_24618);

(statearr_24798[(15)] = inst_24619);

(statearr_24798[(16)] = inst_24620);

(statearr_24798[(17)] = inst_24621);

return statearr_24798;
})();
var statearr_24799_24862 = state_24739__$1;
(statearr_24799_24862[(2)] = null);

(statearr_24799_24862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (14))){
var state_24739__$1 = state_24739;
var statearr_24800_24863 = state_24739__$1;
(statearr_24800_24863[(2)] = null);

(statearr_24800_24863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (45))){
var inst_24729 = (state_24739[(2)]);
var state_24739__$1 = state_24739;
var statearr_24801_24864 = state_24739__$1;
(statearr_24801_24864[(2)] = inst_24729);

(statearr_24801_24864[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (26))){
var inst_24673 = (state_24739[(27)]);
var inst_24725 = (state_24739[(2)]);
var inst_24726 = cljs.core.seq.call(null,inst_24673);
var state_24739__$1 = (function (){var statearr_24802 = state_24739;
(statearr_24802[(29)] = inst_24725);

return statearr_24802;
})();
if(inst_24726){
var statearr_24803_24865 = state_24739__$1;
(statearr_24803_24865[(1)] = (42));

} else {
var statearr_24804_24866 = state_24739__$1;
(statearr_24804_24866[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (16))){
var inst_24640 = (state_24739[(7)]);
var inst_24642 = cljs.core.chunked_seq_QMARK_.call(null,inst_24640);
var state_24739__$1 = state_24739;
if(inst_24642){
var statearr_24805_24867 = state_24739__$1;
(statearr_24805_24867[(1)] = (19));

} else {
var statearr_24806_24868 = state_24739__$1;
(statearr_24806_24868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (38))){
var inst_24718 = (state_24739[(2)]);
var state_24739__$1 = state_24739;
var statearr_24807_24869 = state_24739__$1;
(statearr_24807_24869[(2)] = inst_24718);

(statearr_24807_24869[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (30))){
var state_24739__$1 = state_24739;
var statearr_24808_24870 = state_24739__$1;
(statearr_24808_24870[(2)] = null);

(statearr_24808_24870[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (10))){
var inst_24619 = (state_24739[(15)]);
var inst_24621 = (state_24739[(17)]);
var inst_24629 = cljs.core._nth.call(null,inst_24619,inst_24621);
var inst_24630 = cljs.core.nth.call(null,inst_24629,(0),null);
var inst_24631 = cljs.core.nth.call(null,inst_24629,(1),null);
var state_24739__$1 = (function (){var statearr_24809 = state_24739;
(statearr_24809[(24)] = inst_24630);

return statearr_24809;
})();
if(cljs.core.truth_(inst_24631)){
var statearr_24810_24871 = state_24739__$1;
(statearr_24810_24871[(1)] = (13));

} else {
var statearr_24811_24872 = state_24739__$1;
(statearr_24811_24872[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (18))){
var inst_24666 = (state_24739[(2)]);
var state_24739__$1 = state_24739;
var statearr_24812_24873 = state_24739__$1;
(statearr_24812_24873[(2)] = inst_24666);

(statearr_24812_24873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (42))){
var state_24739__$1 = state_24739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24739__$1,(45),dchan);
} else {
if((state_val_24740 === (37))){
var inst_24699 = (state_24739[(23)]);
var inst_24708 = (state_24739[(22)]);
var inst_24609 = (state_24739[(12)]);
var inst_24708__$1 = cljs.core.first.call(null,inst_24699);
var inst_24709 = cljs.core.async.put_BANG_.call(null,inst_24708__$1,inst_24609,done);
var state_24739__$1 = (function (){var statearr_24813 = state_24739;
(statearr_24813[(22)] = inst_24708__$1);

return statearr_24813;
})();
if(cljs.core.truth_(inst_24709)){
var statearr_24814_24874 = state_24739__$1;
(statearr_24814_24874[(1)] = (39));

} else {
var statearr_24815_24875 = state_24739__$1;
(statearr_24815_24875[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24740 === (8))){
var inst_24621 = (state_24739[(17)]);
var inst_24620 = (state_24739[(16)]);
var inst_24623 = (inst_24621 < inst_24620);
var inst_24624 = inst_24623;
var state_24739__$1 = state_24739;
if(cljs.core.truth_(inst_24624)){
var statearr_24816_24876 = state_24739__$1;
(statearr_24816_24876[(1)] = (10));

} else {
var statearr_24817_24877 = state_24739__$1;
(statearr_24817_24877[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__21984__auto__ = null;
var cljs$core$async$mult_$_state_machine__21984__auto____0 = (function (){
var statearr_24818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24818[(0)] = cljs$core$async$mult_$_state_machine__21984__auto__);

(statearr_24818[(1)] = (1));

return statearr_24818;
});
var cljs$core$async$mult_$_state_machine__21984__auto____1 = (function (state_24739){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24819){var ex__21987__auto__ = e24819;
var statearr_24820_24878 = state_24739;
(statearr_24820_24878[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24739[(4)]))){
var statearr_24821_24879 = state_24739;
(statearr_24821_24879[(1)] = cljs.core.first.call(null,(state_24739[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24880 = state_24739;
state_24739 = G__24880;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21984__auto__ = function(state_24739){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21984__auto____1.call(this,state_24739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21984__auto____0;
cljs$core$async$mult_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21984__auto____1;
return cljs$core$async$mult_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_24822 = f__22109__auto__.call(null);
(statearr_24822[(6)] = c__22108__auto___24823);

return statearr_24822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24882 = arguments.length;
switch (G__24882) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_24884 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_24884.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_24885 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_24885.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_24886 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m);
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_24886.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_24887 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,state_map);
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_24887.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_24888 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,mode);
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_24888.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___24898 = arguments.length;
var i__5727__auto___24899 = (0);
while(true){
if((i__5727__auto___24899 < len__5726__auto___24898)){
args__5732__auto__.push((arguments[i__5727__auto___24899]));

var G__24900 = (i__5727__auto___24899 + (1));
i__5727__auto___24899 = G__24900;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24893){
var map__24894 = p__24893;
var map__24894__$1 = cljs.core.__destructure_map.call(null,map__24894);
var opts = map__24894__$1;
var statearr_24895_24901 = state;
(statearr_24895_24901[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_24896_24902 = state;
(statearr_24896_24902[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_24897_24903 = state;
(statearr_24897_24903[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24889){
var G__24890 = cljs.core.first.call(null,seq24889);
var seq24889__$1 = cljs.core.next.call(null,seq24889);
var G__24891 = cljs.core.first.call(null,seq24889__$1);
var seq24889__$2 = cljs.core.next.call(null,seq24889__$1);
var G__24892 = cljs.core.first.call(null,seq24889__$2);
var seq24889__$3 = cljs.core.next.call(null,seq24889__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24890,G__24891,G__24892,seq24889__$3);
}));

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
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24904 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24905){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24905 = meta24905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24906,meta24905__$1){
var self__ = this;
var _24906__$1 = this;
return (new cljs.core.async.t_cljs$core$async24904(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24905__$1));
}));

(cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24906){
var self__ = this;
var _24906__$1 = this;
return self__.meta24905;
}));

(cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24905","meta24905",-930006838,null)], null);
}));

(cljs.core.async.t_cljs$core$async24904.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24904");

(cljs.core.async.t_cljs$core$async24904.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async24904");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24904.
 */
cljs.core.async.__GT_t_cljs$core$async24904 = (function cljs$core$async$mix_$___GT_t_cljs$core$async24904(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24905){
return (new cljs.core.async.t_cljs$core$async24904(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24905));
});

}

return (new cljs.core.async.t_cljs$core$async24904(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22108__auto___25019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_24974){
var state_val_24975 = (state_24974[(1)]);
if((state_val_24975 === (7))){
var inst_24934 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
if(cljs.core.truth_(inst_24934)){
var statearr_24976_25020 = state_24974__$1;
(statearr_24976_25020[(1)] = (8));

} else {
var statearr_24977_25021 = state_24974__$1;
(statearr_24977_25021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (20))){
var inst_24927 = (state_24974[(7)]);
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24974__$1,(23),out,inst_24927);
} else {
if((state_val_24975 === (1))){
var inst_24910 = calc_state.call(null);
var inst_24911 = cljs.core.__destructure_map.call(null,inst_24910);
var inst_24912 = cljs.core.get.call(null,inst_24911,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24913 = cljs.core.get.call(null,inst_24911,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24914 = cljs.core.get.call(null,inst_24911,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24915 = inst_24910;
var state_24974__$1 = (function (){var statearr_24978 = state_24974;
(statearr_24978[(8)] = inst_24912);

(statearr_24978[(9)] = inst_24913);

(statearr_24978[(10)] = inst_24914);

(statearr_24978[(11)] = inst_24915);

return statearr_24978;
})();
var statearr_24979_25022 = state_24974__$1;
(statearr_24979_25022[(2)] = null);

(statearr_24979_25022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (24))){
var inst_24918 = (state_24974[(12)]);
var inst_24915 = inst_24918;
var state_24974__$1 = (function (){var statearr_24980 = state_24974;
(statearr_24980[(11)] = inst_24915);

return statearr_24980;
})();
var statearr_24981_25023 = state_24974__$1;
(statearr_24981_25023[(2)] = null);

(statearr_24981_25023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (4))){
var inst_24927 = (state_24974[(7)]);
var inst_24929 = (state_24974[(13)]);
var inst_24926 = (state_24974[(2)]);
var inst_24927__$1 = cljs.core.nth.call(null,inst_24926,(0),null);
var inst_24928 = cljs.core.nth.call(null,inst_24926,(1),null);
var inst_24929__$1 = (inst_24927__$1 == null);
var state_24974__$1 = (function (){var statearr_24982 = state_24974;
(statearr_24982[(7)] = inst_24927__$1);

(statearr_24982[(14)] = inst_24928);

(statearr_24982[(13)] = inst_24929__$1);

return statearr_24982;
})();
if(cljs.core.truth_(inst_24929__$1)){
var statearr_24983_25024 = state_24974__$1;
(statearr_24983_25024[(1)] = (5));

} else {
var statearr_24984_25025 = state_24974__$1;
(statearr_24984_25025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (15))){
var inst_24919 = (state_24974[(15)]);
var inst_24948 = (state_24974[(16)]);
var inst_24948__$1 = cljs.core.empty_QMARK_.call(null,inst_24919);
var state_24974__$1 = (function (){var statearr_24985 = state_24974;
(statearr_24985[(16)] = inst_24948__$1);

return statearr_24985;
})();
if(inst_24948__$1){
var statearr_24986_25026 = state_24974__$1;
(statearr_24986_25026[(1)] = (17));

} else {
var statearr_24987_25027 = state_24974__$1;
(statearr_24987_25027[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (21))){
var inst_24918 = (state_24974[(12)]);
var inst_24915 = inst_24918;
var state_24974__$1 = (function (){var statearr_24988 = state_24974;
(statearr_24988[(11)] = inst_24915);

return statearr_24988;
})();
var statearr_24989_25028 = state_24974__$1;
(statearr_24989_25028[(2)] = null);

(statearr_24989_25028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (13))){
var inst_24941 = (state_24974[(2)]);
var inst_24942 = calc_state.call(null);
var inst_24915 = inst_24942;
var state_24974__$1 = (function (){var statearr_24990 = state_24974;
(statearr_24990[(17)] = inst_24941);

(statearr_24990[(11)] = inst_24915);

return statearr_24990;
})();
var statearr_24991_25029 = state_24974__$1;
(statearr_24991_25029[(2)] = null);

(statearr_24991_25029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (22))){
var inst_24968 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_24992_25030 = state_24974__$1;
(statearr_24992_25030[(2)] = inst_24968);

(statearr_24992_25030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (6))){
var inst_24928 = (state_24974[(14)]);
var inst_24932 = cljs.core._EQ_.call(null,inst_24928,change);
var state_24974__$1 = state_24974;
var statearr_24993_25031 = state_24974__$1;
(statearr_24993_25031[(2)] = inst_24932);

(statearr_24993_25031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (25))){
var state_24974__$1 = state_24974;
var statearr_24994_25032 = state_24974__$1;
(statearr_24994_25032[(2)] = null);

(statearr_24994_25032[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (17))){
var inst_24920 = (state_24974[(18)]);
var inst_24928 = (state_24974[(14)]);
var inst_24950 = inst_24920.call(null,inst_24928);
var inst_24951 = cljs.core.not.call(null,inst_24950);
var state_24974__$1 = state_24974;
var statearr_24995_25033 = state_24974__$1;
(statearr_24995_25033[(2)] = inst_24951);

(statearr_24995_25033[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (3))){
var inst_24972 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24974__$1,inst_24972);
} else {
if((state_val_24975 === (12))){
var state_24974__$1 = state_24974;
var statearr_24996_25034 = state_24974__$1;
(statearr_24996_25034[(2)] = null);

(statearr_24996_25034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (2))){
var inst_24915 = (state_24974[(11)]);
var inst_24918 = (state_24974[(12)]);
var inst_24918__$1 = cljs.core.__destructure_map.call(null,inst_24915);
var inst_24919 = cljs.core.get.call(null,inst_24918__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24920 = cljs.core.get.call(null,inst_24918__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24921 = cljs.core.get.call(null,inst_24918__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24974__$1 = (function (){var statearr_24997 = state_24974;
(statearr_24997[(12)] = inst_24918__$1);

(statearr_24997[(15)] = inst_24919);

(statearr_24997[(18)] = inst_24920);

return statearr_24997;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24974__$1,(4),inst_24921);
} else {
if((state_val_24975 === (23))){
var inst_24959 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
if(cljs.core.truth_(inst_24959)){
var statearr_24998_25035 = state_24974__$1;
(statearr_24998_25035[(1)] = (24));

} else {
var statearr_24999_25036 = state_24974__$1;
(statearr_24999_25036[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (19))){
var inst_24954 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_25000_25037 = state_24974__$1;
(statearr_25000_25037[(2)] = inst_24954);

(statearr_25000_25037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (11))){
var inst_24928 = (state_24974[(14)]);
var inst_24938 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24928);
var state_24974__$1 = state_24974;
var statearr_25001_25038 = state_24974__$1;
(statearr_25001_25038[(2)] = inst_24938);

(statearr_25001_25038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (9))){
var inst_24919 = (state_24974[(15)]);
var inst_24928 = (state_24974[(14)]);
var inst_24945 = (state_24974[(19)]);
var inst_24945__$1 = inst_24919.call(null,inst_24928);
var state_24974__$1 = (function (){var statearr_25002 = state_24974;
(statearr_25002[(19)] = inst_24945__$1);

return statearr_25002;
})();
if(cljs.core.truth_(inst_24945__$1)){
var statearr_25003_25039 = state_24974__$1;
(statearr_25003_25039[(1)] = (14));

} else {
var statearr_25004_25040 = state_24974__$1;
(statearr_25004_25040[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (5))){
var inst_24929 = (state_24974[(13)]);
var state_24974__$1 = state_24974;
var statearr_25005_25041 = state_24974__$1;
(statearr_25005_25041[(2)] = inst_24929);

(statearr_25005_25041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (14))){
var inst_24945 = (state_24974[(19)]);
var state_24974__$1 = state_24974;
var statearr_25006_25042 = state_24974__$1;
(statearr_25006_25042[(2)] = inst_24945);

(statearr_25006_25042[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (26))){
var inst_24964 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_25007_25043 = state_24974__$1;
(statearr_25007_25043[(2)] = inst_24964);

(statearr_25007_25043[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (16))){
var inst_24956 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
if(cljs.core.truth_(inst_24956)){
var statearr_25008_25044 = state_24974__$1;
(statearr_25008_25044[(1)] = (20));

} else {
var statearr_25009_25045 = state_24974__$1;
(statearr_25009_25045[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (10))){
var inst_24970 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_25010_25046 = state_24974__$1;
(statearr_25010_25046[(2)] = inst_24970);

(statearr_25010_25046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (18))){
var inst_24948 = (state_24974[(16)]);
var state_24974__$1 = state_24974;
var statearr_25011_25047 = state_24974__$1;
(statearr_25011_25047[(2)] = inst_24948);

(statearr_25011_25047[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (8))){
var inst_24927 = (state_24974[(7)]);
var inst_24936 = (inst_24927 == null);
var state_24974__$1 = state_24974;
if(cljs.core.truth_(inst_24936)){
var statearr_25012_25048 = state_24974__$1;
(statearr_25012_25048[(1)] = (11));

} else {
var statearr_25013_25049 = state_24974__$1;
(statearr_25013_25049[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__21984__auto__ = null;
var cljs$core$async$mix_$_state_machine__21984__auto____0 = (function (){
var statearr_25014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25014[(0)] = cljs$core$async$mix_$_state_machine__21984__auto__);

(statearr_25014[(1)] = (1));

return statearr_25014;
});
var cljs$core$async$mix_$_state_machine__21984__auto____1 = (function (state_24974){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_24974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25015){var ex__21987__auto__ = e25015;
var statearr_25016_25050 = state_24974;
(statearr_25016_25050[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_24974[(4)]))){
var statearr_25017_25051 = state_24974;
(statearr_25017_25051[(1)] = cljs.core.first.call(null,(state_24974[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25052 = state_24974;
state_24974 = G__25052;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21984__auto__ = function(state_24974){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21984__auto____1.call(this,state_24974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21984__auto____0;
cljs$core$async$mix_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21984__auto____1;
return cljs$core$async$mix_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_25018 = f__22109__auto__.call(null);
(statearr_25018[(6)] = c__22108__auto___25019);

return statearr_25018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_25055 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_25055.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25056 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v,ch);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_25056.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25057 = (function() {
var G__25058 = null;
var G__25058__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__25058__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__25058 = function(p,v){
switch(arguments.length){
case 1:
return G__25058__1.call(this,p);
case 2:
return G__25058__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25058.cljs$core$IFn$_invoke$arity$1 = G__25058__1;
G__25058.cljs$core$IFn$_invoke$arity$2 = G__25058__2;
return G__25058;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25054 = arguments.length;
switch (G__25054) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25057.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25057.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__25062 = arguments.length;
switch (G__25062) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__25060_SHARP_){
if(cljs.core.truth_(p1__25060_SHARP_.call(null,topic))){
return p1__25060_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25060_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25063 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25064){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25064 = meta25064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25065,meta25064__$1){
var self__ = this;
var _25065__$1 = this;
return (new cljs.core.async.t_cljs$core$async25063(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25064__$1));
}));

(cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25065){
var self__ = this;
var _25065__$1 = this;
return self__.meta25064;
}));

(cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25064","meta25064",1650142104,null)], null);
}));

(cljs.core.async.t_cljs$core$async25063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25063");

(cljs.core.async.t_cljs$core$async25063.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async25063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25063.
 */
cljs.core.async.__GT_t_cljs$core$async25063 = (function cljs$core$async$__GT_t_cljs$core$async25063(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25064){
return (new cljs.core.async.t_cljs$core$async25063(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25064));
});

}

return (new cljs.core.async.t_cljs$core$async25063(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22108__auto___25184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_25137){
var state_val_25138 = (state_25137[(1)]);
if((state_val_25138 === (7))){
var inst_25133 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25139_25185 = state_25137__$1;
(statearr_25139_25185[(2)] = inst_25133);

(statearr_25139_25185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (20))){
var state_25137__$1 = state_25137;
var statearr_25140_25186 = state_25137__$1;
(statearr_25140_25186[(2)] = null);

(statearr_25140_25186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (1))){
var state_25137__$1 = state_25137;
var statearr_25141_25187 = state_25137__$1;
(statearr_25141_25187[(2)] = null);

(statearr_25141_25187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (24))){
var inst_25116 = (state_25137[(7)]);
var inst_25125 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25116);
var state_25137__$1 = state_25137;
var statearr_25142_25188 = state_25137__$1;
(statearr_25142_25188[(2)] = inst_25125);

(statearr_25142_25188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (4))){
var inst_25068 = (state_25137[(8)]);
var inst_25068__$1 = (state_25137[(2)]);
var inst_25069 = (inst_25068__$1 == null);
var state_25137__$1 = (function (){var statearr_25143 = state_25137;
(statearr_25143[(8)] = inst_25068__$1);

return statearr_25143;
})();
if(cljs.core.truth_(inst_25069)){
var statearr_25144_25189 = state_25137__$1;
(statearr_25144_25189[(1)] = (5));

} else {
var statearr_25145_25190 = state_25137__$1;
(statearr_25145_25190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (15))){
var inst_25110 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25146_25191 = state_25137__$1;
(statearr_25146_25191[(2)] = inst_25110);

(statearr_25146_25191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (21))){
var inst_25130 = (state_25137[(2)]);
var state_25137__$1 = (function (){var statearr_25147 = state_25137;
(statearr_25147[(9)] = inst_25130);

return statearr_25147;
})();
var statearr_25148_25192 = state_25137__$1;
(statearr_25148_25192[(2)] = null);

(statearr_25148_25192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (13))){
var inst_25092 = (state_25137[(10)]);
var inst_25094 = cljs.core.chunked_seq_QMARK_.call(null,inst_25092);
var state_25137__$1 = state_25137;
if(inst_25094){
var statearr_25149_25193 = state_25137__$1;
(statearr_25149_25193[(1)] = (16));

} else {
var statearr_25150_25194 = state_25137__$1;
(statearr_25150_25194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (22))){
var inst_25122 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
if(cljs.core.truth_(inst_25122)){
var statearr_25151_25195 = state_25137__$1;
(statearr_25151_25195[(1)] = (23));

} else {
var statearr_25152_25196 = state_25137__$1;
(statearr_25152_25196[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (6))){
var inst_25068 = (state_25137[(8)]);
var inst_25116 = (state_25137[(7)]);
var inst_25118 = (state_25137[(11)]);
var inst_25116__$1 = topic_fn.call(null,inst_25068);
var inst_25117 = cljs.core.deref.call(null,mults);
var inst_25118__$1 = cljs.core.get.call(null,inst_25117,inst_25116__$1);
var state_25137__$1 = (function (){var statearr_25153 = state_25137;
(statearr_25153[(7)] = inst_25116__$1);

(statearr_25153[(11)] = inst_25118__$1);

return statearr_25153;
})();
if(cljs.core.truth_(inst_25118__$1)){
var statearr_25154_25197 = state_25137__$1;
(statearr_25154_25197[(1)] = (19));

} else {
var statearr_25155_25198 = state_25137__$1;
(statearr_25155_25198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (25))){
var inst_25127 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25156_25199 = state_25137__$1;
(statearr_25156_25199[(2)] = inst_25127);

(statearr_25156_25199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (17))){
var inst_25092 = (state_25137[(10)]);
var inst_25101 = cljs.core.first.call(null,inst_25092);
var inst_25102 = cljs.core.async.muxch_STAR_.call(null,inst_25101);
var inst_25103 = cljs.core.async.close_BANG_.call(null,inst_25102);
var inst_25104 = cljs.core.next.call(null,inst_25092);
var inst_25078 = inst_25104;
var inst_25079 = null;
var inst_25080 = (0);
var inst_25081 = (0);
var state_25137__$1 = (function (){var statearr_25157 = state_25137;
(statearr_25157[(12)] = inst_25103);

(statearr_25157[(13)] = inst_25078);

(statearr_25157[(14)] = inst_25079);

(statearr_25157[(15)] = inst_25080);

(statearr_25157[(16)] = inst_25081);

return statearr_25157;
})();
var statearr_25158_25200 = state_25137__$1;
(statearr_25158_25200[(2)] = null);

(statearr_25158_25200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (3))){
var inst_25135 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25137__$1,inst_25135);
} else {
if((state_val_25138 === (12))){
var inst_25112 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25159_25201 = state_25137__$1;
(statearr_25159_25201[(2)] = inst_25112);

(statearr_25159_25201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (2))){
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25137__$1,(4),ch);
} else {
if((state_val_25138 === (23))){
var state_25137__$1 = state_25137;
var statearr_25160_25202 = state_25137__$1;
(statearr_25160_25202[(2)] = null);

(statearr_25160_25202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (19))){
var inst_25118 = (state_25137[(11)]);
var inst_25068 = (state_25137[(8)]);
var inst_25120 = cljs.core.async.muxch_STAR_.call(null,inst_25118);
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25137__$1,(22),inst_25120,inst_25068);
} else {
if((state_val_25138 === (11))){
var inst_25078 = (state_25137[(13)]);
var inst_25092 = (state_25137[(10)]);
var inst_25092__$1 = cljs.core.seq.call(null,inst_25078);
var state_25137__$1 = (function (){var statearr_25161 = state_25137;
(statearr_25161[(10)] = inst_25092__$1);

return statearr_25161;
})();
if(inst_25092__$1){
var statearr_25162_25203 = state_25137__$1;
(statearr_25162_25203[(1)] = (13));

} else {
var statearr_25163_25204 = state_25137__$1;
(statearr_25163_25204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (9))){
var inst_25114 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25164_25205 = state_25137__$1;
(statearr_25164_25205[(2)] = inst_25114);

(statearr_25164_25205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (5))){
var inst_25075 = cljs.core.deref.call(null,mults);
var inst_25076 = cljs.core.vals.call(null,inst_25075);
var inst_25077 = cljs.core.seq.call(null,inst_25076);
var inst_25078 = inst_25077;
var inst_25079 = null;
var inst_25080 = (0);
var inst_25081 = (0);
var state_25137__$1 = (function (){var statearr_25165 = state_25137;
(statearr_25165[(13)] = inst_25078);

(statearr_25165[(14)] = inst_25079);

(statearr_25165[(15)] = inst_25080);

(statearr_25165[(16)] = inst_25081);

return statearr_25165;
})();
var statearr_25166_25206 = state_25137__$1;
(statearr_25166_25206[(2)] = null);

(statearr_25166_25206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (14))){
var state_25137__$1 = state_25137;
var statearr_25170_25207 = state_25137__$1;
(statearr_25170_25207[(2)] = null);

(statearr_25170_25207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (16))){
var inst_25092 = (state_25137[(10)]);
var inst_25096 = cljs.core.chunk_first.call(null,inst_25092);
var inst_25097 = cljs.core.chunk_rest.call(null,inst_25092);
var inst_25098 = cljs.core.count.call(null,inst_25096);
var inst_25078 = inst_25097;
var inst_25079 = inst_25096;
var inst_25080 = inst_25098;
var inst_25081 = (0);
var state_25137__$1 = (function (){var statearr_25171 = state_25137;
(statearr_25171[(13)] = inst_25078);

(statearr_25171[(14)] = inst_25079);

(statearr_25171[(15)] = inst_25080);

(statearr_25171[(16)] = inst_25081);

return statearr_25171;
})();
var statearr_25172_25208 = state_25137__$1;
(statearr_25172_25208[(2)] = null);

(statearr_25172_25208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (10))){
var inst_25079 = (state_25137[(14)]);
var inst_25081 = (state_25137[(16)]);
var inst_25078 = (state_25137[(13)]);
var inst_25080 = (state_25137[(15)]);
var inst_25086 = cljs.core._nth.call(null,inst_25079,inst_25081);
var inst_25087 = cljs.core.async.muxch_STAR_.call(null,inst_25086);
var inst_25088 = cljs.core.async.close_BANG_.call(null,inst_25087);
var inst_25089 = (inst_25081 + (1));
var tmp25167 = inst_25079;
var tmp25168 = inst_25078;
var tmp25169 = inst_25080;
var inst_25078__$1 = tmp25168;
var inst_25079__$1 = tmp25167;
var inst_25080__$1 = tmp25169;
var inst_25081__$1 = inst_25089;
var state_25137__$1 = (function (){var statearr_25173 = state_25137;
(statearr_25173[(17)] = inst_25088);

(statearr_25173[(13)] = inst_25078__$1);

(statearr_25173[(14)] = inst_25079__$1);

(statearr_25173[(15)] = inst_25080__$1);

(statearr_25173[(16)] = inst_25081__$1);

return statearr_25173;
})();
var statearr_25174_25209 = state_25137__$1;
(statearr_25174_25209[(2)] = null);

(statearr_25174_25209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (18))){
var inst_25107 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25175_25210 = state_25137__$1;
(statearr_25175_25210[(2)] = inst_25107);

(statearr_25175_25210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (8))){
var inst_25081 = (state_25137[(16)]);
var inst_25080 = (state_25137[(15)]);
var inst_25083 = (inst_25081 < inst_25080);
var inst_25084 = inst_25083;
var state_25137__$1 = state_25137;
if(cljs.core.truth_(inst_25084)){
var statearr_25176_25211 = state_25137__$1;
(statearr_25176_25211[(1)] = (10));

} else {
var statearr_25177_25212 = state_25137__$1;
(statearr_25177_25212[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25178[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25178[(1)] = (1));

return statearr_25178;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25137){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_25137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25179){var ex__21987__auto__ = e25179;
var statearr_25180_25213 = state_25137;
(statearr_25180_25213[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_25137[(4)]))){
var statearr_25181_25214 = state_25137;
(statearr_25181_25214[(1)] = cljs.core.first.call(null,(state_25137[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25215 = state_25137;
state_25137 = G__25215;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_25182 = f__22109__auto__.call(null);
(statearr_25182[(6)] = c__22108__auto___25184);

return statearr_25182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25217 = arguments.length;
switch (G__25217) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__25220 = arguments.length;
switch (G__25220) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__25223 = arguments.length;
switch (G__25223) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__22108__auto___25301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_25266){
var state_val_25267 = (state_25266[(1)]);
if((state_val_25267 === (7))){
var state_25266__$1 = state_25266;
var statearr_25268_25302 = state_25266__$1;
(statearr_25268_25302[(2)] = null);

(statearr_25268_25302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (1))){
var state_25266__$1 = state_25266;
var statearr_25269_25303 = state_25266__$1;
(statearr_25269_25303[(2)] = null);

(statearr_25269_25303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (4))){
var inst_25227 = (state_25266[(7)]);
var inst_25226 = (state_25266[(8)]);
var inst_25229 = (inst_25227 < inst_25226);
var state_25266__$1 = state_25266;
if(cljs.core.truth_(inst_25229)){
var statearr_25270_25304 = state_25266__$1;
(statearr_25270_25304[(1)] = (6));

} else {
var statearr_25271_25305 = state_25266__$1;
(statearr_25271_25305[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (15))){
var inst_25252 = (state_25266[(9)]);
var inst_25257 = cljs.core.apply.call(null,f,inst_25252);
var state_25266__$1 = state_25266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25266__$1,(17),out,inst_25257);
} else {
if((state_val_25267 === (13))){
var inst_25252 = (state_25266[(9)]);
var inst_25252__$1 = (state_25266[(2)]);
var inst_25253 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25252__$1);
var state_25266__$1 = (function (){var statearr_25272 = state_25266;
(statearr_25272[(9)] = inst_25252__$1);

return statearr_25272;
})();
if(cljs.core.truth_(inst_25253)){
var statearr_25273_25306 = state_25266__$1;
(statearr_25273_25306[(1)] = (14));

} else {
var statearr_25274_25307 = state_25266__$1;
(statearr_25274_25307[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (6))){
var state_25266__$1 = state_25266;
var statearr_25275_25308 = state_25266__$1;
(statearr_25275_25308[(2)] = null);

(statearr_25275_25308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (17))){
var inst_25259 = (state_25266[(2)]);
var state_25266__$1 = (function (){var statearr_25277 = state_25266;
(statearr_25277[(10)] = inst_25259);

return statearr_25277;
})();
var statearr_25278_25309 = state_25266__$1;
(statearr_25278_25309[(2)] = null);

(statearr_25278_25309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (3))){
var inst_25264 = (state_25266[(2)]);
var state_25266__$1 = state_25266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25266__$1,inst_25264);
} else {
if((state_val_25267 === (12))){
var _ = (function (){var statearr_25279 = state_25266;
(statearr_25279[(4)] = cljs.core.rest.call(null,(state_25266[(4)])));

return statearr_25279;
})();
var state_25266__$1 = state_25266;
var ex25276 = (state_25266__$1[(2)]);
var statearr_25280_25310 = state_25266__$1;
(statearr_25280_25310[(5)] = ex25276);


if((ex25276 instanceof Object)){
var statearr_25281_25311 = state_25266__$1;
(statearr_25281_25311[(1)] = (11));

(statearr_25281_25311[(5)] = null);

} else {
throw ex25276;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (2))){
var inst_25225 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25226 = cnt;
var inst_25227 = (0);
var state_25266__$1 = (function (){var statearr_25282 = state_25266;
(statearr_25282[(11)] = inst_25225);

(statearr_25282[(8)] = inst_25226);

(statearr_25282[(7)] = inst_25227);

return statearr_25282;
})();
var statearr_25283_25312 = state_25266__$1;
(statearr_25283_25312[(2)] = null);

(statearr_25283_25312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (11))){
var inst_25231 = (state_25266[(2)]);
var inst_25232 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25266__$1 = (function (){var statearr_25284 = state_25266;
(statearr_25284[(12)] = inst_25231);

return statearr_25284;
})();
var statearr_25285_25313 = state_25266__$1;
(statearr_25285_25313[(2)] = inst_25232);

(statearr_25285_25313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (9))){
var inst_25227 = (state_25266[(7)]);
var _ = (function (){var statearr_25286 = state_25266;
(statearr_25286[(4)] = cljs.core.cons.call(null,(12),(state_25266[(4)])));

return statearr_25286;
})();
var inst_25238 = chs__$1.call(null,inst_25227);
var inst_25239 = done.call(null,inst_25227);
var inst_25240 = cljs.core.async.take_BANG_.call(null,inst_25238,inst_25239);
var ___$1 = (function (){var statearr_25287 = state_25266;
(statearr_25287[(4)] = cljs.core.rest.call(null,(state_25266[(4)])));

return statearr_25287;
})();
var state_25266__$1 = state_25266;
var statearr_25288_25314 = state_25266__$1;
(statearr_25288_25314[(2)] = inst_25240);

(statearr_25288_25314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (5))){
var inst_25250 = (state_25266[(2)]);
var state_25266__$1 = (function (){var statearr_25289 = state_25266;
(statearr_25289[(13)] = inst_25250);

return statearr_25289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25266__$1,(13),dchan);
} else {
if((state_val_25267 === (14))){
var inst_25255 = cljs.core.async.close_BANG_.call(null,out);
var state_25266__$1 = state_25266;
var statearr_25290_25315 = state_25266__$1;
(statearr_25290_25315[(2)] = inst_25255);

(statearr_25290_25315[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (16))){
var inst_25262 = (state_25266[(2)]);
var state_25266__$1 = state_25266;
var statearr_25291_25316 = state_25266__$1;
(statearr_25291_25316[(2)] = inst_25262);

(statearr_25291_25316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (10))){
var inst_25227 = (state_25266[(7)]);
var inst_25243 = (state_25266[(2)]);
var inst_25244 = (inst_25227 + (1));
var inst_25227__$1 = inst_25244;
var state_25266__$1 = (function (){var statearr_25292 = state_25266;
(statearr_25292[(14)] = inst_25243);

(statearr_25292[(7)] = inst_25227__$1);

return statearr_25292;
})();
var statearr_25293_25317 = state_25266__$1;
(statearr_25293_25317[(2)] = null);

(statearr_25293_25317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (8))){
var inst_25248 = (state_25266[(2)]);
var state_25266__$1 = state_25266;
var statearr_25294_25318 = state_25266__$1;
(statearr_25294_25318[(2)] = inst_25248);

(statearr_25294_25318[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25295[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25295[(1)] = (1));

return statearr_25295;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25266){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_25266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25296){var ex__21987__auto__ = e25296;
var statearr_25297_25319 = state_25266;
(statearr_25297_25319[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_25266[(4)]))){
var statearr_25298_25320 = state_25266;
(statearr_25298_25320[(1)] = cljs.core.first.call(null,(state_25266[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25321 = state_25266;
state_25266 = G__25321;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_25299 = f__22109__auto__.call(null);
(statearr_25299[(6)] = c__22108__auto___25301);

return statearr_25299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25324 = arguments.length;
switch (G__25324) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22108__auto___25379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_25356){
var state_val_25357 = (state_25356[(1)]);
if((state_val_25357 === (7))){
var inst_25335 = (state_25356[(7)]);
var inst_25336 = (state_25356[(8)]);
var inst_25335__$1 = (state_25356[(2)]);
var inst_25336__$1 = cljs.core.nth.call(null,inst_25335__$1,(0),null);
var inst_25337 = cljs.core.nth.call(null,inst_25335__$1,(1),null);
var inst_25338 = (inst_25336__$1 == null);
var state_25356__$1 = (function (){var statearr_25358 = state_25356;
(statearr_25358[(7)] = inst_25335__$1);

(statearr_25358[(8)] = inst_25336__$1);

(statearr_25358[(9)] = inst_25337);

return statearr_25358;
})();
if(cljs.core.truth_(inst_25338)){
var statearr_25359_25380 = state_25356__$1;
(statearr_25359_25380[(1)] = (8));

} else {
var statearr_25360_25381 = state_25356__$1;
(statearr_25360_25381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (1))){
var inst_25325 = cljs.core.vec.call(null,chs);
var inst_25326 = inst_25325;
var state_25356__$1 = (function (){var statearr_25361 = state_25356;
(statearr_25361[(10)] = inst_25326);

return statearr_25361;
})();
var statearr_25362_25382 = state_25356__$1;
(statearr_25362_25382[(2)] = null);

(statearr_25362_25382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (4))){
var inst_25326 = (state_25356[(10)]);
var state_25356__$1 = state_25356;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25356__$1,(7),inst_25326);
} else {
if((state_val_25357 === (6))){
var inst_25352 = (state_25356[(2)]);
var state_25356__$1 = state_25356;
var statearr_25363_25383 = state_25356__$1;
(statearr_25363_25383[(2)] = inst_25352);

(statearr_25363_25383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (3))){
var inst_25354 = (state_25356[(2)]);
var state_25356__$1 = state_25356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25356__$1,inst_25354);
} else {
if((state_val_25357 === (2))){
var inst_25326 = (state_25356[(10)]);
var inst_25328 = cljs.core.count.call(null,inst_25326);
var inst_25329 = (inst_25328 > (0));
var state_25356__$1 = state_25356;
if(cljs.core.truth_(inst_25329)){
var statearr_25365_25384 = state_25356__$1;
(statearr_25365_25384[(1)] = (4));

} else {
var statearr_25366_25385 = state_25356__$1;
(statearr_25366_25385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (11))){
var inst_25326 = (state_25356[(10)]);
var inst_25345 = (state_25356[(2)]);
var tmp25364 = inst_25326;
var inst_25326__$1 = tmp25364;
var state_25356__$1 = (function (){var statearr_25367 = state_25356;
(statearr_25367[(11)] = inst_25345);

(statearr_25367[(10)] = inst_25326__$1);

return statearr_25367;
})();
var statearr_25368_25386 = state_25356__$1;
(statearr_25368_25386[(2)] = null);

(statearr_25368_25386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (9))){
var inst_25336 = (state_25356[(8)]);
var state_25356__$1 = state_25356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25356__$1,(11),out,inst_25336);
} else {
if((state_val_25357 === (5))){
var inst_25350 = cljs.core.async.close_BANG_.call(null,out);
var state_25356__$1 = state_25356;
var statearr_25369_25387 = state_25356__$1;
(statearr_25369_25387[(2)] = inst_25350);

(statearr_25369_25387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (10))){
var inst_25348 = (state_25356[(2)]);
var state_25356__$1 = state_25356;
var statearr_25370_25388 = state_25356__$1;
(statearr_25370_25388[(2)] = inst_25348);

(statearr_25370_25388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (8))){
var inst_25326 = (state_25356[(10)]);
var inst_25335 = (state_25356[(7)]);
var inst_25336 = (state_25356[(8)]);
var inst_25337 = (state_25356[(9)]);
var inst_25340 = (function (){var cs = inst_25326;
var vec__25331 = inst_25335;
var v = inst_25336;
var c = inst_25337;
return (function (p1__25322_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25322_SHARP_);
});
})();
var inst_25341 = cljs.core.filterv.call(null,inst_25340,inst_25326);
var inst_25326__$1 = inst_25341;
var state_25356__$1 = (function (){var statearr_25371 = state_25356;
(statearr_25371[(10)] = inst_25326__$1);

return statearr_25371;
})();
var statearr_25372_25389 = state_25356__$1;
(statearr_25372_25389[(2)] = null);

(statearr_25372_25389[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25373 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25373[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25373[(1)] = (1));

return statearr_25373;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25356){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_25356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25374){var ex__21987__auto__ = e25374;
var statearr_25375_25390 = state_25356;
(statearr_25375_25390[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_25356[(4)]))){
var statearr_25376_25391 = state_25356;
(statearr_25376_25391[(1)] = cljs.core.first.call(null,(state_25356[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25392 = state_25356;
state_25356 = G__25392;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_25377 = f__22109__auto__.call(null);
(statearr_25377[(6)] = c__22108__auto___25379);

return statearr_25377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__25394 = arguments.length;
switch (G__25394) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22108__auto___25440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_25418){
var state_val_25419 = (state_25418[(1)]);
if((state_val_25419 === (7))){
var inst_25400 = (state_25418[(7)]);
var inst_25400__$1 = (state_25418[(2)]);
var inst_25401 = (inst_25400__$1 == null);
var inst_25402 = cljs.core.not.call(null,inst_25401);
var state_25418__$1 = (function (){var statearr_25420 = state_25418;
(statearr_25420[(7)] = inst_25400__$1);

return statearr_25420;
})();
if(inst_25402){
var statearr_25421_25441 = state_25418__$1;
(statearr_25421_25441[(1)] = (8));

} else {
var statearr_25422_25442 = state_25418__$1;
(statearr_25422_25442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (1))){
var inst_25395 = (0);
var state_25418__$1 = (function (){var statearr_25423 = state_25418;
(statearr_25423[(8)] = inst_25395);

return statearr_25423;
})();
var statearr_25424_25443 = state_25418__$1;
(statearr_25424_25443[(2)] = null);

(statearr_25424_25443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (4))){
var state_25418__$1 = state_25418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25418__$1,(7),ch);
} else {
if((state_val_25419 === (6))){
var inst_25413 = (state_25418[(2)]);
var state_25418__$1 = state_25418;
var statearr_25425_25444 = state_25418__$1;
(statearr_25425_25444[(2)] = inst_25413);

(statearr_25425_25444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (3))){
var inst_25415 = (state_25418[(2)]);
var inst_25416 = cljs.core.async.close_BANG_.call(null,out);
var state_25418__$1 = (function (){var statearr_25426 = state_25418;
(statearr_25426[(9)] = inst_25415);

return statearr_25426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25418__$1,inst_25416);
} else {
if((state_val_25419 === (2))){
var inst_25395 = (state_25418[(8)]);
var inst_25397 = (inst_25395 < n);
var state_25418__$1 = state_25418;
if(cljs.core.truth_(inst_25397)){
var statearr_25427_25445 = state_25418__$1;
(statearr_25427_25445[(1)] = (4));

} else {
var statearr_25428_25446 = state_25418__$1;
(statearr_25428_25446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (11))){
var inst_25395 = (state_25418[(8)]);
var inst_25405 = (state_25418[(2)]);
var inst_25406 = (inst_25395 + (1));
var inst_25395__$1 = inst_25406;
var state_25418__$1 = (function (){var statearr_25429 = state_25418;
(statearr_25429[(10)] = inst_25405);

(statearr_25429[(8)] = inst_25395__$1);

return statearr_25429;
})();
var statearr_25430_25447 = state_25418__$1;
(statearr_25430_25447[(2)] = null);

(statearr_25430_25447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (9))){
var state_25418__$1 = state_25418;
var statearr_25431_25448 = state_25418__$1;
(statearr_25431_25448[(2)] = null);

(statearr_25431_25448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (5))){
var state_25418__$1 = state_25418;
var statearr_25432_25449 = state_25418__$1;
(statearr_25432_25449[(2)] = null);

(statearr_25432_25449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (10))){
var inst_25410 = (state_25418[(2)]);
var state_25418__$1 = state_25418;
var statearr_25433_25450 = state_25418__$1;
(statearr_25433_25450[(2)] = inst_25410);

(statearr_25433_25450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25419 === (8))){
var inst_25400 = (state_25418[(7)]);
var state_25418__$1 = state_25418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25418__$1,(11),out,inst_25400);
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
});
return (function() {
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25434 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25434[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25434[(1)] = (1));

return statearr_25434;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25418){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_25418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25435){var ex__21987__auto__ = e25435;
var statearr_25436_25451 = state_25418;
(statearr_25436_25451[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_25418[(4)]))){
var statearr_25437_25452 = state_25418;
(statearr_25437_25452[(1)] = cljs.core.first.call(null,(state_25418[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25453 = state_25418;
state_25418 = G__25453;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_25438 = f__22109__auto__.call(null);
(statearr_25438[(6)] = c__22108__auto___25440);

return statearr_25438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25455 = (function (f,ch,meta25456){
this.f = f;
this.ch = ch;
this.meta25456 = meta25456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25457,meta25456__$1){
var self__ = this;
var _25457__$1 = this;
return (new cljs.core.async.t_cljs$core$async25455(self__.f,self__.ch,meta25456__$1));
}));

(cljs.core.async.t_cljs$core$async25455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25457){
var self__ = this;
var _25457__$1 = this;
return self__.meta25456;
}));

(cljs.core.async.t_cljs$core$async25455.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25455.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25455.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25458 = (function (f,ch,meta25456,_,fn1,meta25459){
this.f = f;
this.ch = ch;
this.meta25456 = meta25456;
this._ = _;
this.fn1 = fn1;
this.meta25459 = meta25459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25460,meta25459__$1){
var self__ = this;
var _25460__$1 = this;
return (new cljs.core.async.t_cljs$core$async25458(self__.f,self__.ch,self__.meta25456,self__._,self__.fn1,meta25459__$1));
}));

(cljs.core.async.t_cljs$core$async25458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25460){
var self__ = this;
var _25460__$1 = this;
return self__.meta25459;
}));

(cljs.core.async.t_cljs$core$async25458.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25458.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__25454_SHARP_){
return f1.call(null,(((p1__25454_SHARP_ == null))?null:self__.f.call(null,p1__25454_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async25458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25456","meta25456",610039483,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25455","cljs.core.async/t_cljs$core$async25455",-1476835033,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25459","meta25459",1814552284,null)], null);
}));

(cljs.core.async.t_cljs$core$async25458.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25458");

(cljs.core.async.t_cljs$core$async25458.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async25458");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25458.
 */
cljs.core.async.__GT_t_cljs$core$async25458 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25458(f__$1,ch__$1,meta25456__$1,___$2,fn1__$1,meta25459){
return (new cljs.core.async.t_cljs$core$async25458(f__$1,ch__$1,meta25456__$1,___$2,fn1__$1,meta25459));
});

}

return (new cljs.core.async.t_cljs$core$async25458(self__.f,self__.ch,self__.meta25456,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async25455.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25456","meta25456",610039483,null)], null);
}));

(cljs.core.async.t_cljs$core$async25455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25455");

(cljs.core.async.t_cljs$core$async25455.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async25455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25455.
 */
cljs.core.async.__GT_t_cljs$core$async25455 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25455(f__$1,ch__$1,meta25456){
return (new cljs.core.async.t_cljs$core$async25455(f__$1,ch__$1,meta25456));
});

}

return (new cljs.core.async.t_cljs$core$async25455(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25461 = (function (f,ch,meta25462){
this.f = f;
this.ch = ch;
this.meta25462 = meta25462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25463,meta25462__$1){
var self__ = this;
var _25463__$1 = this;
return (new cljs.core.async.t_cljs$core$async25461(self__.f,self__.ch,meta25462__$1));
}));

(cljs.core.async.t_cljs$core$async25461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25463){
var self__ = this;
var _25463__$1 = this;
return self__.meta25462;
}));

(cljs.core.async.t_cljs$core$async25461.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25461.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25461.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async25461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25462","meta25462",-265815372,null)], null);
}));

(cljs.core.async.t_cljs$core$async25461.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25461");

(cljs.core.async.t_cljs$core$async25461.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async25461");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25461.
 */
cljs.core.async.__GT_t_cljs$core$async25461 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25461(f__$1,ch__$1,meta25462){
return (new cljs.core.async.t_cljs$core$async25461(f__$1,ch__$1,meta25462));
});

}

return (new cljs.core.async.t_cljs$core$async25461(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25464 = (function (p,ch,meta25465){
this.p = p;
this.ch = ch;
this.meta25465 = meta25465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25466,meta25465__$1){
var self__ = this;
var _25466__$1 = this;
return (new cljs.core.async.t_cljs$core$async25464(self__.p,self__.ch,meta25465__$1));
}));

(cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25466){
var self__ = this;
var _25466__$1 = this;
return self__.meta25465;
}));

(cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25465","meta25465",1379729734,null)], null);
}));

(cljs.core.async.t_cljs$core$async25464.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25464");

(cljs.core.async.t_cljs$core$async25464.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async25464");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25464.
 */
cljs.core.async.__GT_t_cljs$core$async25464 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25464(p__$1,ch__$1,meta25465){
return (new cljs.core.async.t_cljs$core$async25464(p__$1,ch__$1,meta25465));
});

}

return (new cljs.core.async.t_cljs$core$async25464(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25468 = arguments.length;
switch (G__25468) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22108__auto___25509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_25489){
var state_val_25490 = (state_25489[(1)]);
if((state_val_25490 === (7))){
var inst_25485 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
var statearr_25491_25510 = state_25489__$1;
(statearr_25491_25510[(2)] = inst_25485);

(statearr_25491_25510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (1))){
var state_25489__$1 = state_25489;
var statearr_25492_25511 = state_25489__$1;
(statearr_25492_25511[(2)] = null);

(statearr_25492_25511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (4))){
var inst_25471 = (state_25489[(7)]);
var inst_25471__$1 = (state_25489[(2)]);
var inst_25472 = (inst_25471__$1 == null);
var state_25489__$1 = (function (){var statearr_25493 = state_25489;
(statearr_25493[(7)] = inst_25471__$1);

return statearr_25493;
})();
if(cljs.core.truth_(inst_25472)){
var statearr_25494_25512 = state_25489__$1;
(statearr_25494_25512[(1)] = (5));

} else {
var statearr_25495_25513 = state_25489__$1;
(statearr_25495_25513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (6))){
var inst_25471 = (state_25489[(7)]);
var inst_25476 = p.call(null,inst_25471);
var state_25489__$1 = state_25489;
if(cljs.core.truth_(inst_25476)){
var statearr_25496_25514 = state_25489__$1;
(statearr_25496_25514[(1)] = (8));

} else {
var statearr_25497_25515 = state_25489__$1;
(statearr_25497_25515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (3))){
var inst_25487 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25489__$1,inst_25487);
} else {
if((state_val_25490 === (2))){
var state_25489__$1 = state_25489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25489__$1,(4),ch);
} else {
if((state_val_25490 === (11))){
var inst_25479 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
var statearr_25498_25516 = state_25489__$1;
(statearr_25498_25516[(2)] = inst_25479);

(statearr_25498_25516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (9))){
var state_25489__$1 = state_25489;
var statearr_25499_25517 = state_25489__$1;
(statearr_25499_25517[(2)] = null);

(statearr_25499_25517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (5))){
var inst_25474 = cljs.core.async.close_BANG_.call(null,out);
var state_25489__$1 = state_25489;
var statearr_25500_25518 = state_25489__$1;
(statearr_25500_25518[(2)] = inst_25474);

(statearr_25500_25518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (10))){
var inst_25482 = (state_25489[(2)]);
var state_25489__$1 = (function (){var statearr_25501 = state_25489;
(statearr_25501[(8)] = inst_25482);

return statearr_25501;
})();
var statearr_25502_25519 = state_25489__$1;
(statearr_25502_25519[(2)] = null);

(statearr_25502_25519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25490 === (8))){
var inst_25471 = (state_25489[(7)]);
var state_25489__$1 = state_25489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25489__$1,(11),out,inst_25471);
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
});
return (function() {
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25503 = [null,null,null,null,null,null,null,null,null];
(statearr_25503[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25503[(1)] = (1));

return statearr_25503;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25489){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_25489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25504){var ex__21987__auto__ = e25504;
var statearr_25505_25520 = state_25489;
(statearr_25505_25520[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_25489[(4)]))){
var statearr_25506_25521 = state_25489;
(statearr_25506_25521[(1)] = cljs.core.first.call(null,(state_25489[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25522 = state_25489;
state_25489 = G__25522;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_25507 = f__22109__auto__.call(null);
(statearr_25507[(6)] = c__22108__auto___25509);

return statearr_25507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25524 = arguments.length;
switch (G__25524) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_25587){
var state_val_25588 = (state_25587[(1)]);
if((state_val_25588 === (7))){
var inst_25583 = (state_25587[(2)]);
var state_25587__$1 = state_25587;
var statearr_25589_25628 = state_25587__$1;
(statearr_25589_25628[(2)] = inst_25583);

(statearr_25589_25628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (20))){
var inst_25553 = (state_25587[(7)]);
var inst_25564 = (state_25587[(2)]);
var inst_25565 = cljs.core.next.call(null,inst_25553);
var inst_25539 = inst_25565;
var inst_25540 = null;
var inst_25541 = (0);
var inst_25542 = (0);
var state_25587__$1 = (function (){var statearr_25590 = state_25587;
(statearr_25590[(8)] = inst_25564);

(statearr_25590[(9)] = inst_25539);

(statearr_25590[(10)] = inst_25540);

(statearr_25590[(11)] = inst_25541);

(statearr_25590[(12)] = inst_25542);

return statearr_25590;
})();
var statearr_25591_25629 = state_25587__$1;
(statearr_25591_25629[(2)] = null);

(statearr_25591_25629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (1))){
var state_25587__$1 = state_25587;
var statearr_25592_25630 = state_25587__$1;
(statearr_25592_25630[(2)] = null);

(statearr_25592_25630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (4))){
var inst_25528 = (state_25587[(13)]);
var inst_25528__$1 = (state_25587[(2)]);
var inst_25529 = (inst_25528__$1 == null);
var state_25587__$1 = (function (){var statearr_25593 = state_25587;
(statearr_25593[(13)] = inst_25528__$1);

return statearr_25593;
})();
if(cljs.core.truth_(inst_25529)){
var statearr_25594_25631 = state_25587__$1;
(statearr_25594_25631[(1)] = (5));

} else {
var statearr_25595_25632 = state_25587__$1;
(statearr_25595_25632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (15))){
var state_25587__$1 = state_25587;
var statearr_25599_25633 = state_25587__$1;
(statearr_25599_25633[(2)] = null);

(statearr_25599_25633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (21))){
var state_25587__$1 = state_25587;
var statearr_25600_25634 = state_25587__$1;
(statearr_25600_25634[(2)] = null);

(statearr_25600_25634[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (13))){
var inst_25542 = (state_25587[(12)]);
var inst_25539 = (state_25587[(9)]);
var inst_25540 = (state_25587[(10)]);
var inst_25541 = (state_25587[(11)]);
var inst_25549 = (state_25587[(2)]);
var inst_25550 = (inst_25542 + (1));
var tmp25596 = inst_25539;
var tmp25597 = inst_25541;
var tmp25598 = inst_25540;
var inst_25539__$1 = tmp25596;
var inst_25540__$1 = tmp25598;
var inst_25541__$1 = tmp25597;
var inst_25542__$1 = inst_25550;
var state_25587__$1 = (function (){var statearr_25601 = state_25587;
(statearr_25601[(14)] = inst_25549);

(statearr_25601[(9)] = inst_25539__$1);

(statearr_25601[(10)] = inst_25540__$1);

(statearr_25601[(11)] = inst_25541__$1);

(statearr_25601[(12)] = inst_25542__$1);

return statearr_25601;
})();
var statearr_25602_25635 = state_25587__$1;
(statearr_25602_25635[(2)] = null);

(statearr_25602_25635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (22))){
var state_25587__$1 = state_25587;
var statearr_25603_25636 = state_25587__$1;
(statearr_25603_25636[(2)] = null);

(statearr_25603_25636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (6))){
var inst_25528 = (state_25587[(13)]);
var inst_25537 = f.call(null,inst_25528);
var inst_25538 = cljs.core.seq.call(null,inst_25537);
var inst_25539 = inst_25538;
var inst_25540 = null;
var inst_25541 = (0);
var inst_25542 = (0);
var state_25587__$1 = (function (){var statearr_25604 = state_25587;
(statearr_25604[(9)] = inst_25539);

(statearr_25604[(10)] = inst_25540);

(statearr_25604[(11)] = inst_25541);

(statearr_25604[(12)] = inst_25542);

return statearr_25604;
})();
var statearr_25605_25637 = state_25587__$1;
(statearr_25605_25637[(2)] = null);

(statearr_25605_25637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (17))){
var inst_25553 = (state_25587[(7)]);
var inst_25557 = cljs.core.chunk_first.call(null,inst_25553);
var inst_25558 = cljs.core.chunk_rest.call(null,inst_25553);
var inst_25559 = cljs.core.count.call(null,inst_25557);
var inst_25539 = inst_25558;
var inst_25540 = inst_25557;
var inst_25541 = inst_25559;
var inst_25542 = (0);
var state_25587__$1 = (function (){var statearr_25606 = state_25587;
(statearr_25606[(9)] = inst_25539);

(statearr_25606[(10)] = inst_25540);

(statearr_25606[(11)] = inst_25541);

(statearr_25606[(12)] = inst_25542);

return statearr_25606;
})();
var statearr_25607_25638 = state_25587__$1;
(statearr_25607_25638[(2)] = null);

(statearr_25607_25638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (3))){
var inst_25585 = (state_25587[(2)]);
var state_25587__$1 = state_25587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25587__$1,inst_25585);
} else {
if((state_val_25588 === (12))){
var inst_25573 = (state_25587[(2)]);
var state_25587__$1 = state_25587;
var statearr_25608_25639 = state_25587__$1;
(statearr_25608_25639[(2)] = inst_25573);

(statearr_25608_25639[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (2))){
var state_25587__$1 = state_25587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25587__$1,(4),in$);
} else {
if((state_val_25588 === (23))){
var inst_25581 = (state_25587[(2)]);
var state_25587__$1 = state_25587;
var statearr_25609_25640 = state_25587__$1;
(statearr_25609_25640[(2)] = inst_25581);

(statearr_25609_25640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (19))){
var inst_25568 = (state_25587[(2)]);
var state_25587__$1 = state_25587;
var statearr_25610_25641 = state_25587__$1;
(statearr_25610_25641[(2)] = inst_25568);

(statearr_25610_25641[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (11))){
var inst_25539 = (state_25587[(9)]);
var inst_25553 = (state_25587[(7)]);
var inst_25553__$1 = cljs.core.seq.call(null,inst_25539);
var state_25587__$1 = (function (){var statearr_25611 = state_25587;
(statearr_25611[(7)] = inst_25553__$1);

return statearr_25611;
})();
if(inst_25553__$1){
var statearr_25612_25642 = state_25587__$1;
(statearr_25612_25642[(1)] = (14));

} else {
var statearr_25613_25643 = state_25587__$1;
(statearr_25613_25643[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (9))){
var inst_25575 = (state_25587[(2)]);
var inst_25576 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25587__$1 = (function (){var statearr_25614 = state_25587;
(statearr_25614[(15)] = inst_25575);

return statearr_25614;
})();
if(cljs.core.truth_(inst_25576)){
var statearr_25615_25644 = state_25587__$1;
(statearr_25615_25644[(1)] = (21));

} else {
var statearr_25616_25645 = state_25587__$1;
(statearr_25616_25645[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (5))){
var inst_25531 = cljs.core.async.close_BANG_.call(null,out);
var state_25587__$1 = state_25587;
var statearr_25617_25646 = state_25587__$1;
(statearr_25617_25646[(2)] = inst_25531);

(statearr_25617_25646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (14))){
var inst_25553 = (state_25587[(7)]);
var inst_25555 = cljs.core.chunked_seq_QMARK_.call(null,inst_25553);
var state_25587__$1 = state_25587;
if(inst_25555){
var statearr_25618_25647 = state_25587__$1;
(statearr_25618_25647[(1)] = (17));

} else {
var statearr_25619_25648 = state_25587__$1;
(statearr_25619_25648[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (16))){
var inst_25571 = (state_25587[(2)]);
var state_25587__$1 = state_25587;
var statearr_25620_25649 = state_25587__$1;
(statearr_25620_25649[(2)] = inst_25571);

(statearr_25620_25649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (10))){
var inst_25540 = (state_25587[(10)]);
var inst_25542 = (state_25587[(12)]);
var inst_25547 = cljs.core._nth.call(null,inst_25540,inst_25542);
var state_25587__$1 = state_25587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25587__$1,(13),out,inst_25547);
} else {
if((state_val_25588 === (18))){
var inst_25553 = (state_25587[(7)]);
var inst_25562 = cljs.core.first.call(null,inst_25553);
var state_25587__$1 = state_25587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25587__$1,(20),out,inst_25562);
} else {
if((state_val_25588 === (8))){
var inst_25542 = (state_25587[(12)]);
var inst_25541 = (state_25587[(11)]);
var inst_25544 = (inst_25542 < inst_25541);
var inst_25545 = inst_25544;
var state_25587__$1 = state_25587;
if(cljs.core.truth_(inst_25545)){
var statearr_25621_25650 = state_25587__$1;
(statearr_25621_25650[(1)] = (10));

} else {
var statearr_25622_25651 = state_25587__$1;
(statearr_25622_25651[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_25623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25623[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__);

(statearr_25623[(1)] = (1));

return statearr_25623;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____1 = (function (state_25587){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_25587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25624){var ex__21987__auto__ = e25624;
var statearr_25625_25652 = state_25587;
(statearr_25625_25652[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_25587[(4)]))){
var statearr_25626_25653 = state_25587;
(statearr_25626_25653[(1)] = cljs.core.first.call(null,(state_25587[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25654 = state_25587;
state_25587 = G__25654;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__ = function(state_25587){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____1.call(this,state_25587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_25627 = f__22109__auto__.call(null);
(statearr_25627[(6)] = c__22108__auto__);

return statearr_25627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25656 = arguments.length;
switch (G__25656) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25659 = arguments.length;
switch (G__25659) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25662 = arguments.length;
switch (G__25662) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22108__auto___25710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_25686){
var state_val_25687 = (state_25686[(1)]);
if((state_val_25687 === (7))){
var inst_25681 = (state_25686[(2)]);
var state_25686__$1 = state_25686;
var statearr_25688_25711 = state_25686__$1;
(statearr_25688_25711[(2)] = inst_25681);

(statearr_25688_25711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (1))){
var inst_25663 = null;
var state_25686__$1 = (function (){var statearr_25689 = state_25686;
(statearr_25689[(7)] = inst_25663);

return statearr_25689;
})();
var statearr_25690_25712 = state_25686__$1;
(statearr_25690_25712[(2)] = null);

(statearr_25690_25712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (4))){
var inst_25666 = (state_25686[(8)]);
var inst_25666__$1 = (state_25686[(2)]);
var inst_25667 = (inst_25666__$1 == null);
var inst_25668 = cljs.core.not.call(null,inst_25667);
var state_25686__$1 = (function (){var statearr_25691 = state_25686;
(statearr_25691[(8)] = inst_25666__$1);

return statearr_25691;
})();
if(inst_25668){
var statearr_25692_25713 = state_25686__$1;
(statearr_25692_25713[(1)] = (5));

} else {
var statearr_25693_25714 = state_25686__$1;
(statearr_25693_25714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (6))){
var state_25686__$1 = state_25686;
var statearr_25694_25715 = state_25686__$1;
(statearr_25694_25715[(2)] = null);

(statearr_25694_25715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (3))){
var inst_25683 = (state_25686[(2)]);
var inst_25684 = cljs.core.async.close_BANG_.call(null,out);
var state_25686__$1 = (function (){var statearr_25695 = state_25686;
(statearr_25695[(9)] = inst_25683);

return statearr_25695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25686__$1,inst_25684);
} else {
if((state_val_25687 === (2))){
var state_25686__$1 = state_25686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25686__$1,(4),ch);
} else {
if((state_val_25687 === (11))){
var inst_25666 = (state_25686[(8)]);
var inst_25675 = (state_25686[(2)]);
var inst_25663 = inst_25666;
var state_25686__$1 = (function (){var statearr_25696 = state_25686;
(statearr_25696[(10)] = inst_25675);

(statearr_25696[(7)] = inst_25663);

return statearr_25696;
})();
var statearr_25697_25716 = state_25686__$1;
(statearr_25697_25716[(2)] = null);

(statearr_25697_25716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (9))){
var inst_25666 = (state_25686[(8)]);
var state_25686__$1 = state_25686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25686__$1,(11),out,inst_25666);
} else {
if((state_val_25687 === (5))){
var inst_25666 = (state_25686[(8)]);
var inst_25663 = (state_25686[(7)]);
var inst_25670 = cljs.core._EQ_.call(null,inst_25666,inst_25663);
var state_25686__$1 = state_25686;
if(inst_25670){
var statearr_25699_25717 = state_25686__$1;
(statearr_25699_25717[(1)] = (8));

} else {
var statearr_25700_25718 = state_25686__$1;
(statearr_25700_25718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (10))){
var inst_25678 = (state_25686[(2)]);
var state_25686__$1 = state_25686;
var statearr_25701_25719 = state_25686__$1;
(statearr_25701_25719[(2)] = inst_25678);

(statearr_25701_25719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (8))){
var inst_25663 = (state_25686[(7)]);
var tmp25698 = inst_25663;
var inst_25663__$1 = tmp25698;
var state_25686__$1 = (function (){var statearr_25702 = state_25686;
(statearr_25702[(7)] = inst_25663__$1);

return statearr_25702;
})();
var statearr_25703_25720 = state_25686__$1;
(statearr_25703_25720[(2)] = null);

(statearr_25703_25720[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25704[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25704[(1)] = (1));

return statearr_25704;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25686){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_25686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25705){var ex__21987__auto__ = e25705;
var statearr_25706_25721 = state_25686;
(statearr_25706_25721[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_25686[(4)]))){
var statearr_25707_25722 = state_25686;
(statearr_25707_25722[(1)] = cljs.core.first.call(null,(state_25686[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25723 = state_25686;
state_25686 = G__25723;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_25708 = f__22109__auto__.call(null);
(statearr_25708[(6)] = c__22108__auto___25710);

return statearr_25708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25725 = arguments.length;
switch (G__25725) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22108__auto___25792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_25763){
var state_val_25764 = (state_25763[(1)]);
if((state_val_25764 === (7))){
var inst_25759 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
var statearr_25765_25793 = state_25763__$1;
(statearr_25765_25793[(2)] = inst_25759);

(statearr_25765_25793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (1))){
var inst_25726 = (new Array(n));
var inst_25727 = inst_25726;
var inst_25728 = (0);
var state_25763__$1 = (function (){var statearr_25766 = state_25763;
(statearr_25766[(7)] = inst_25727);

(statearr_25766[(8)] = inst_25728);

return statearr_25766;
})();
var statearr_25767_25794 = state_25763__$1;
(statearr_25767_25794[(2)] = null);

(statearr_25767_25794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (4))){
var inst_25731 = (state_25763[(9)]);
var inst_25731__$1 = (state_25763[(2)]);
var inst_25732 = (inst_25731__$1 == null);
var inst_25733 = cljs.core.not.call(null,inst_25732);
var state_25763__$1 = (function (){var statearr_25768 = state_25763;
(statearr_25768[(9)] = inst_25731__$1);

return statearr_25768;
})();
if(inst_25733){
var statearr_25769_25795 = state_25763__$1;
(statearr_25769_25795[(1)] = (5));

} else {
var statearr_25770_25796 = state_25763__$1;
(statearr_25770_25796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (15))){
var inst_25753 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
var statearr_25771_25797 = state_25763__$1;
(statearr_25771_25797[(2)] = inst_25753);

(statearr_25771_25797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (13))){
var state_25763__$1 = state_25763;
var statearr_25772_25798 = state_25763__$1;
(statearr_25772_25798[(2)] = null);

(statearr_25772_25798[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (6))){
var inst_25728 = (state_25763[(8)]);
var inst_25749 = (inst_25728 > (0));
var state_25763__$1 = state_25763;
if(cljs.core.truth_(inst_25749)){
var statearr_25773_25799 = state_25763__$1;
(statearr_25773_25799[(1)] = (12));

} else {
var statearr_25774_25800 = state_25763__$1;
(statearr_25774_25800[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (3))){
var inst_25761 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25763__$1,inst_25761);
} else {
if((state_val_25764 === (12))){
var inst_25727 = (state_25763[(7)]);
var inst_25751 = cljs.core.vec.call(null,inst_25727);
var state_25763__$1 = state_25763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25763__$1,(15),out,inst_25751);
} else {
if((state_val_25764 === (2))){
var state_25763__$1 = state_25763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25763__$1,(4),ch);
} else {
if((state_val_25764 === (11))){
var inst_25743 = (state_25763[(2)]);
var inst_25744 = (new Array(n));
var inst_25727 = inst_25744;
var inst_25728 = (0);
var state_25763__$1 = (function (){var statearr_25775 = state_25763;
(statearr_25775[(10)] = inst_25743);

(statearr_25775[(7)] = inst_25727);

(statearr_25775[(8)] = inst_25728);

return statearr_25775;
})();
var statearr_25776_25801 = state_25763__$1;
(statearr_25776_25801[(2)] = null);

(statearr_25776_25801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (9))){
var inst_25727 = (state_25763[(7)]);
var inst_25741 = cljs.core.vec.call(null,inst_25727);
var state_25763__$1 = state_25763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25763__$1,(11),out,inst_25741);
} else {
if((state_val_25764 === (5))){
var inst_25727 = (state_25763[(7)]);
var inst_25728 = (state_25763[(8)]);
var inst_25731 = (state_25763[(9)]);
var inst_25736 = (state_25763[(11)]);
var inst_25735 = (inst_25727[inst_25728] = inst_25731);
var inst_25736__$1 = (inst_25728 + (1));
var inst_25737 = (inst_25736__$1 < n);
var state_25763__$1 = (function (){var statearr_25777 = state_25763;
(statearr_25777[(12)] = inst_25735);

(statearr_25777[(11)] = inst_25736__$1);

return statearr_25777;
})();
if(cljs.core.truth_(inst_25737)){
var statearr_25778_25802 = state_25763__$1;
(statearr_25778_25802[(1)] = (8));

} else {
var statearr_25779_25803 = state_25763__$1;
(statearr_25779_25803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (14))){
var inst_25756 = (state_25763[(2)]);
var inst_25757 = cljs.core.async.close_BANG_.call(null,out);
var state_25763__$1 = (function (){var statearr_25781 = state_25763;
(statearr_25781[(13)] = inst_25756);

return statearr_25781;
})();
var statearr_25782_25804 = state_25763__$1;
(statearr_25782_25804[(2)] = inst_25757);

(statearr_25782_25804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (10))){
var inst_25747 = (state_25763[(2)]);
var state_25763__$1 = state_25763;
var statearr_25783_25805 = state_25763__$1;
(statearr_25783_25805[(2)] = inst_25747);

(statearr_25783_25805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25764 === (8))){
var inst_25727 = (state_25763[(7)]);
var inst_25736 = (state_25763[(11)]);
var tmp25780 = inst_25727;
var inst_25727__$1 = tmp25780;
var inst_25728 = inst_25736;
var state_25763__$1 = (function (){var statearr_25784 = state_25763;
(statearr_25784[(7)] = inst_25727__$1);

(statearr_25784[(8)] = inst_25728);

return statearr_25784;
})();
var statearr_25785_25806 = state_25763__$1;
(statearr_25785_25806[(2)] = null);

(statearr_25785_25806[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25786[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25786[(1)] = (1));

return statearr_25786;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25763){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_25763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25787){var ex__21987__auto__ = e25787;
var statearr_25788_25807 = state_25763;
(statearr_25788_25807[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_25763[(4)]))){
var statearr_25789_25808 = state_25763;
(statearr_25789_25808[(1)] = cljs.core.first.call(null,(state_25763[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25809 = state_25763;
state_25763 = G__25809;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_25790 = f__22109__auto__.call(null);
(statearr_25790[(6)] = c__22108__auto___25792);

return statearr_25790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25811 = arguments.length;
switch (G__25811) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22108__auto___25889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_25856){
var state_val_25857 = (state_25856[(1)]);
if((state_val_25857 === (7))){
var inst_25852 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
var statearr_25858_25890 = state_25856__$1;
(statearr_25858_25890[(2)] = inst_25852);

(statearr_25858_25890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (1))){
var inst_25812 = [];
var inst_25813 = inst_25812;
var inst_25814 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25856__$1 = (function (){var statearr_25859 = state_25856;
(statearr_25859[(7)] = inst_25813);

(statearr_25859[(8)] = inst_25814);

return statearr_25859;
})();
var statearr_25860_25891 = state_25856__$1;
(statearr_25860_25891[(2)] = null);

(statearr_25860_25891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (4))){
var inst_25817 = (state_25856[(9)]);
var inst_25817__$1 = (state_25856[(2)]);
var inst_25818 = (inst_25817__$1 == null);
var inst_25819 = cljs.core.not.call(null,inst_25818);
var state_25856__$1 = (function (){var statearr_25861 = state_25856;
(statearr_25861[(9)] = inst_25817__$1);

return statearr_25861;
})();
if(inst_25819){
var statearr_25862_25892 = state_25856__$1;
(statearr_25862_25892[(1)] = (5));

} else {
var statearr_25863_25893 = state_25856__$1;
(statearr_25863_25893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (15))){
var inst_25813 = (state_25856[(7)]);
var inst_25844 = cljs.core.vec.call(null,inst_25813);
var state_25856__$1 = state_25856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25856__$1,(18),out,inst_25844);
} else {
if((state_val_25857 === (13))){
var inst_25839 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
var statearr_25864_25894 = state_25856__$1;
(statearr_25864_25894[(2)] = inst_25839);

(statearr_25864_25894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (6))){
var inst_25813 = (state_25856[(7)]);
var inst_25841 = inst_25813.length;
var inst_25842 = (inst_25841 > (0));
var state_25856__$1 = state_25856;
if(cljs.core.truth_(inst_25842)){
var statearr_25865_25895 = state_25856__$1;
(statearr_25865_25895[(1)] = (15));

} else {
var statearr_25866_25896 = state_25856__$1;
(statearr_25866_25896[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (17))){
var inst_25849 = (state_25856[(2)]);
var inst_25850 = cljs.core.async.close_BANG_.call(null,out);
var state_25856__$1 = (function (){var statearr_25867 = state_25856;
(statearr_25867[(10)] = inst_25849);

return statearr_25867;
})();
var statearr_25868_25897 = state_25856__$1;
(statearr_25868_25897[(2)] = inst_25850);

(statearr_25868_25897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (3))){
var inst_25854 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25856__$1,inst_25854);
} else {
if((state_val_25857 === (12))){
var inst_25813 = (state_25856[(7)]);
var inst_25832 = cljs.core.vec.call(null,inst_25813);
var state_25856__$1 = state_25856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25856__$1,(14),out,inst_25832);
} else {
if((state_val_25857 === (2))){
var state_25856__$1 = state_25856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25856__$1,(4),ch);
} else {
if((state_val_25857 === (11))){
var inst_25813 = (state_25856[(7)]);
var inst_25817 = (state_25856[(9)]);
var inst_25821 = (state_25856[(11)]);
var inst_25829 = inst_25813.push(inst_25817);
var tmp25869 = inst_25813;
var inst_25813__$1 = tmp25869;
var inst_25814 = inst_25821;
var state_25856__$1 = (function (){var statearr_25870 = state_25856;
(statearr_25870[(12)] = inst_25829);

(statearr_25870[(7)] = inst_25813__$1);

(statearr_25870[(8)] = inst_25814);

return statearr_25870;
})();
var statearr_25871_25898 = state_25856__$1;
(statearr_25871_25898[(2)] = null);

(statearr_25871_25898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (9))){
var inst_25814 = (state_25856[(8)]);
var inst_25825 = cljs.core.keyword_identical_QMARK_.call(null,inst_25814,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_25856__$1 = state_25856;
var statearr_25872_25899 = state_25856__$1;
(statearr_25872_25899[(2)] = inst_25825);

(statearr_25872_25899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (5))){
var inst_25817 = (state_25856[(9)]);
var inst_25821 = (state_25856[(11)]);
var inst_25814 = (state_25856[(8)]);
var inst_25822 = (state_25856[(13)]);
var inst_25821__$1 = f.call(null,inst_25817);
var inst_25822__$1 = cljs.core._EQ_.call(null,inst_25821__$1,inst_25814);
var state_25856__$1 = (function (){var statearr_25873 = state_25856;
(statearr_25873[(11)] = inst_25821__$1);

(statearr_25873[(13)] = inst_25822__$1);

return statearr_25873;
})();
if(inst_25822__$1){
var statearr_25874_25900 = state_25856__$1;
(statearr_25874_25900[(1)] = (8));

} else {
var statearr_25875_25901 = state_25856__$1;
(statearr_25875_25901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (14))){
var inst_25817 = (state_25856[(9)]);
var inst_25821 = (state_25856[(11)]);
var inst_25834 = (state_25856[(2)]);
var inst_25835 = [];
var inst_25836 = inst_25835.push(inst_25817);
var inst_25813 = inst_25835;
var inst_25814 = inst_25821;
var state_25856__$1 = (function (){var statearr_25876 = state_25856;
(statearr_25876[(14)] = inst_25834);

(statearr_25876[(15)] = inst_25836);

(statearr_25876[(7)] = inst_25813);

(statearr_25876[(8)] = inst_25814);

return statearr_25876;
})();
var statearr_25877_25902 = state_25856__$1;
(statearr_25877_25902[(2)] = null);

(statearr_25877_25902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (16))){
var state_25856__$1 = state_25856;
var statearr_25878_25903 = state_25856__$1;
(statearr_25878_25903[(2)] = null);

(statearr_25878_25903[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (10))){
var inst_25827 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
if(cljs.core.truth_(inst_25827)){
var statearr_25879_25904 = state_25856__$1;
(statearr_25879_25904[(1)] = (11));

} else {
var statearr_25880_25905 = state_25856__$1;
(statearr_25880_25905[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (18))){
var inst_25846 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
var statearr_25881_25906 = state_25856__$1;
(statearr_25881_25906[(2)] = inst_25846);

(statearr_25881_25906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (8))){
var inst_25822 = (state_25856[(13)]);
var state_25856__$1 = state_25856;
var statearr_25882_25907 = state_25856__$1;
(statearr_25882_25907[(2)] = inst_25822);

(statearr_25882_25907[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25883[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25883[(1)] = (1));

return statearr_25883;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25856){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_25856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25884){var ex__21987__auto__ = e25884;
var statearr_25885_25908 = state_25856;
(statearr_25885_25908[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_25856[(4)]))){
var statearr_25886_25909 = state_25856;
(statearr_25886_25909[(1)] = cljs.core.first.call(null,(state_25856[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25910 = state_25856;
state_25856 = G__25910;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_25887 = f__22109__auto__.call(null);
(statearr_25887[(6)] = c__22108__auto___25889);

return statearr_25887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
