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
var G__23956 = arguments.length;
switch (G__23956) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23957 = (function (f,blockable,meta23958){
this.f = f;
this.blockable = blockable;
this.meta23958 = meta23958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23959,meta23958__$1){
var self__ = this;
var _23959__$1 = this;
return (new cljs.core.async.t_cljs$core$async23957(self__.f,self__.blockable,meta23958__$1));
}));

(cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23959){
var self__ = this;
var _23959__$1 = this;
return self__.meta23958;
}));

(cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async23957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23958","meta23958",253356558,null)], null);
}));

(cljs.core.async.t_cljs$core$async23957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23957");

(cljs.core.async.t_cljs$core$async23957.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async23957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23957.
 */
cljs.core.async.__GT_t_cljs$core$async23957 = (function cljs$core$async$__GT_t_cljs$core$async23957(f__$1,blockable__$1,meta23958){
return (new cljs.core.async.t_cljs$core$async23957(f__$1,blockable__$1,meta23958));
});

}

return (new cljs.core.async.t_cljs$core$async23957(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23963 = arguments.length;
switch (G__23963) {
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
var G__23966 = arguments.length;
switch (G__23966) {
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
var G__23969 = arguments.length;
switch (G__23969) {
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
var val_23971 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23971);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_23971);
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
var G__23973 = arguments.length;
switch (G__23973) {
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
var n__5593__auto___23975 = n;
var x_23976 = (0);
while(true){
if((x_23976 < n__5593__auto___23975)){
(a[x_23976] = x_23976);

var G__23977 = (x_23976 + (1));
x_23976 = G__23977;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23978 = (function (flag,meta23979){
this.flag = flag;
this.meta23979 = meta23979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23980,meta23979__$1){
var self__ = this;
var _23980__$1 = this;
return (new cljs.core.async.t_cljs$core$async23978(self__.flag,meta23979__$1));
}));

(cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23980){
var self__ = this;
var _23980__$1 = this;
return self__.meta23979;
}));

(cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23979","meta23979",1415578600,null)], null);
}));

(cljs.core.async.t_cljs$core$async23978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23978");

(cljs.core.async.t_cljs$core$async23978.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async23978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23978.
 */
cljs.core.async.__GT_t_cljs$core$async23978 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23978(flag__$1,meta23979){
return (new cljs.core.async.t_cljs$core$async23978(flag__$1,meta23979));
});

}

return (new cljs.core.async.t_cljs$core$async23978(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23981 = (function (flag,cb,meta23982){
this.flag = flag;
this.cb = cb;
this.meta23982 = meta23982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23983,meta23982__$1){
var self__ = this;
var _23983__$1 = this;
return (new cljs.core.async.t_cljs$core$async23981(self__.flag,self__.cb,meta23982__$1));
}));

(cljs.core.async.t_cljs$core$async23981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23983){
var self__ = this;
var _23983__$1 = this;
return self__.meta23982;
}));

(cljs.core.async.t_cljs$core$async23981.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23982","meta23982",787985991,null)], null);
}));

(cljs.core.async.t_cljs$core$async23981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23981");

(cljs.core.async.t_cljs$core$async23981.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async23981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23981.
 */
cljs.core.async.__GT_t_cljs$core$async23981 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23981(flag__$1,cb__$1,meta23982){
return (new cljs.core.async.t_cljs$core$async23981(flag__$1,cb__$1,meta23982));
});

}

return (new cljs.core.async.t_cljs$core$async23981(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23984_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23984_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__23985_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23985_SHARP_,port], null));
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
var G__23986 = (i + (1));
i = G__23986;
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
var len__5726__auto___23991 = arguments.length;
var i__5727__auto___23992 = (0);
while(true){
if((i__5727__auto___23992 < len__5726__auto___23991)){
args__5732__auto__.push((arguments[i__5727__auto___23992]));

var G__23993 = (i__5727__auto___23992 + (1));
i__5727__auto___23992 = G__23993;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23989){
var map__23990 = p__23989;
var map__23990__$1 = cljs.core.__destructure_map.call(null,map__23990);
var opts = map__23990__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23987){
var G__23988 = cljs.core.first.call(null,seq23987);
var seq23987__$1 = cljs.core.next.call(null,seq23987);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23988,seq23987__$1);
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
var G__23995 = arguments.length;
switch (G__23995) {
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
var c__22023__auto___24042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_24019){
var state_val_24020 = (state_24019[(1)]);
if((state_val_24020 === (7))){
var inst_24015 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
var statearr_24021_24043 = state_24019__$1;
(statearr_24021_24043[(2)] = inst_24015);

(statearr_24021_24043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (1))){
var state_24019__$1 = state_24019;
var statearr_24022_24044 = state_24019__$1;
(statearr_24022_24044[(2)] = null);

(statearr_24022_24044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (4))){
var inst_23998 = (state_24019[(7)]);
var inst_23998__$1 = (state_24019[(2)]);
var inst_23999 = (inst_23998__$1 == null);
var state_24019__$1 = (function (){var statearr_24023 = state_24019;
(statearr_24023[(7)] = inst_23998__$1);

return statearr_24023;
})();
if(cljs.core.truth_(inst_23999)){
var statearr_24024_24045 = state_24019__$1;
(statearr_24024_24045[(1)] = (5));

} else {
var statearr_24025_24046 = state_24019__$1;
(statearr_24025_24046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (13))){
var state_24019__$1 = state_24019;
var statearr_24026_24047 = state_24019__$1;
(statearr_24026_24047[(2)] = null);

(statearr_24026_24047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (6))){
var inst_23998 = (state_24019[(7)]);
var state_24019__$1 = state_24019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24019__$1,(11),to,inst_23998);
} else {
if((state_val_24020 === (3))){
var inst_24017 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24019__$1,inst_24017);
} else {
if((state_val_24020 === (12))){
var state_24019__$1 = state_24019;
var statearr_24027_24048 = state_24019__$1;
(statearr_24027_24048[(2)] = null);

(statearr_24027_24048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (2))){
var state_24019__$1 = state_24019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24019__$1,(4),from);
} else {
if((state_val_24020 === (11))){
var inst_24008 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
if(cljs.core.truth_(inst_24008)){
var statearr_24028_24049 = state_24019__$1;
(statearr_24028_24049[(1)] = (12));

} else {
var statearr_24029_24050 = state_24019__$1;
(statearr_24029_24050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (9))){
var state_24019__$1 = state_24019;
var statearr_24030_24051 = state_24019__$1;
(statearr_24030_24051[(2)] = null);

(statearr_24030_24051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (5))){
var state_24019__$1 = state_24019;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24031_24052 = state_24019__$1;
(statearr_24031_24052[(1)] = (8));

} else {
var statearr_24032_24053 = state_24019__$1;
(statearr_24032_24053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (14))){
var inst_24013 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
var statearr_24033_24054 = state_24019__$1;
(statearr_24033_24054[(2)] = inst_24013);

(statearr_24033_24054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (10))){
var inst_24005 = (state_24019[(2)]);
var state_24019__$1 = state_24019;
var statearr_24034_24055 = state_24019__$1;
(statearr_24034_24055[(2)] = inst_24005);

(statearr_24034_24055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24020 === (8))){
var inst_24002 = cljs.core.async.close_BANG_.call(null,to);
var state_24019__$1 = state_24019;
var statearr_24035_24056 = state_24019__$1;
(statearr_24035_24056[(2)] = inst_24002);

(statearr_24035_24056[(1)] = (10));


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
var cljs$core$async$state_machine__21899__auto__ = null;
var cljs$core$async$state_machine__21899__auto____0 = (function (){
var statearr_24036 = [null,null,null,null,null,null,null,null];
(statearr_24036[(0)] = cljs$core$async$state_machine__21899__auto__);

(statearr_24036[(1)] = (1));

return statearr_24036;
});
var cljs$core$async$state_machine__21899__auto____1 = (function (state_24019){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24037){var ex__21902__auto__ = e24037;
var statearr_24038_24057 = state_24019;
(statearr_24038_24057[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24019[(4)]))){
var statearr_24039_24058 = state_24019;
(statearr_24039_24058[(1)] = cljs.core.first.call(null,(state_24019[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24059 = state_24019;
state_24019 = G__24059;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$state_machine__21899__auto__ = function(state_24019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21899__auto____1.call(this,state_24019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21899__auto____0;
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21899__auto____1;
return cljs$core$async$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_24040 = f__22024__auto__.call(null);
(statearr_24040[(6)] = c__22023__auto___24042);

return statearr_24040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
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
var process__$1 = (function (p__24060){
var vec__24061 = p__24060;
var v = cljs.core.nth.call(null,vec__24061,(0),null);
var p = cljs.core.nth.call(null,vec__24061,(1),null);
var job = vec__24061;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22023__auto___24237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_24068){
var state_val_24069 = (state_24068[(1)]);
if((state_val_24069 === (1))){
var state_24068__$1 = state_24068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24068__$1,(2),res,v);
} else {
if((state_val_24069 === (2))){
var inst_24065 = (state_24068[(2)]);
var inst_24066 = cljs.core.async.close_BANG_.call(null,res);
var state_24068__$1 = (function (){var statearr_24070 = state_24068;
(statearr_24070[(7)] = inst_24065);

return statearr_24070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24068__$1,inst_24066);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0 = (function (){
var statearr_24071 = [null,null,null,null,null,null,null,null];
(statearr_24071[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__);

(statearr_24071[(1)] = (1));

return statearr_24071;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1 = (function (state_24068){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24072){var ex__21902__auto__ = e24072;
var statearr_24073_24238 = state_24068;
(statearr_24073_24238[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24068[(4)]))){
var statearr_24074_24239 = state_24068;
(statearr_24074_24239[(1)] = cljs.core.first.call(null,(state_24068[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24240 = state_24068;
state_24068 = G__24240;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__ = function(state_24068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1.call(this,state_24068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_24075 = f__22024__auto__.call(null);
(statearr_24075[(6)] = c__22023__auto___24237);

return statearr_24075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__24076){
var vec__24077 = p__24076;
var v = cljs.core.nth.call(null,vec__24077,(0),null);
var p = cljs.core.nth.call(null,vec__24077,(1),null);
var job = vec__24077;
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
var n__5593__auto___24241 = n;
var __24242 = (0);
while(true){
if((__24242 < n__5593__auto___24241)){
var G__24080_24243 = type;
var G__24080_24244__$1 = (((G__24080_24243 instanceof cljs.core.Keyword))?G__24080_24243.fqn:null);
switch (G__24080_24244__$1) {
case "compute":
var c__22023__auto___24246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24242,c__22023__auto___24246,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async){
return (function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = ((function (__24242,c__22023__auto___24246,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async){
return (function (state_24093){
var state_val_24094 = (state_24093[(1)]);
if((state_val_24094 === (1))){
var state_24093__$1 = state_24093;
var statearr_24095_24247 = state_24093__$1;
(statearr_24095_24247[(2)] = null);

(statearr_24095_24247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (2))){
var state_24093__$1 = state_24093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24093__$1,(4),jobs);
} else {
if((state_val_24094 === (3))){
var inst_24091 = (state_24093[(2)]);
var state_24093__$1 = state_24093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24093__$1,inst_24091);
} else {
if((state_val_24094 === (4))){
var inst_24083 = (state_24093[(2)]);
var inst_24084 = process__$1.call(null,inst_24083);
var state_24093__$1 = state_24093;
if(cljs.core.truth_(inst_24084)){
var statearr_24096_24248 = state_24093__$1;
(statearr_24096_24248[(1)] = (5));

} else {
var statearr_24097_24249 = state_24093__$1;
(statearr_24097_24249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (5))){
var state_24093__$1 = state_24093;
var statearr_24098_24250 = state_24093__$1;
(statearr_24098_24250[(2)] = null);

(statearr_24098_24250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (6))){
var state_24093__$1 = state_24093;
var statearr_24099_24251 = state_24093__$1;
(statearr_24099_24251[(2)] = null);

(statearr_24099_24251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24094 === (7))){
var inst_24089 = (state_24093[(2)]);
var state_24093__$1 = state_24093;
var statearr_24100_24252 = state_24093__$1;
(statearr_24100_24252[(2)] = inst_24089);

(statearr_24100_24252[(1)] = (3));


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
});})(__24242,c__22023__auto___24246,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async))
;
return ((function (__24242,switch__21898__auto__,c__22023__auto___24246,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0 = (function (){
var statearr_24101 = [null,null,null,null,null,null,null];
(statearr_24101[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__);

(statearr_24101[(1)] = (1));

return statearr_24101;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1 = (function (state_24093){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24102){var ex__21902__auto__ = e24102;
var statearr_24103_24253 = state_24093;
(statearr_24103_24253[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24093[(4)]))){
var statearr_24104_24254 = state_24093;
(statearr_24104_24254[(1)] = cljs.core.first.call(null,(state_24093[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24255 = state_24093;
state_24093 = G__24255;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__ = function(state_24093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1.call(this,state_24093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__;
})()
;})(__24242,switch__21898__auto__,c__22023__auto___24246,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async))
})();
var state__22025__auto__ = (function (){var statearr_24105 = f__22024__auto__.call(null);
(statearr_24105[(6)] = c__22023__auto___24246);

return statearr_24105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(__24242,c__22023__auto___24246,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async))
);


break;
case "async":
var c__22023__auto___24256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24242,c__22023__auto___24256,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async){
return (function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = ((function (__24242,c__22023__auto___24256,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async){
return (function (state_24118){
var state_val_24119 = (state_24118[(1)]);
if((state_val_24119 === (1))){
var state_24118__$1 = state_24118;
var statearr_24120_24257 = state_24118__$1;
(statearr_24120_24257[(2)] = null);

(statearr_24120_24257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (2))){
var state_24118__$1 = state_24118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24118__$1,(4),jobs);
} else {
if((state_val_24119 === (3))){
var inst_24116 = (state_24118[(2)]);
var state_24118__$1 = state_24118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24118__$1,inst_24116);
} else {
if((state_val_24119 === (4))){
var inst_24108 = (state_24118[(2)]);
var inst_24109 = async.call(null,inst_24108);
var state_24118__$1 = state_24118;
if(cljs.core.truth_(inst_24109)){
var statearr_24121_24258 = state_24118__$1;
(statearr_24121_24258[(1)] = (5));

} else {
var statearr_24122_24259 = state_24118__$1;
(statearr_24122_24259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (5))){
var state_24118__$1 = state_24118;
var statearr_24123_24260 = state_24118__$1;
(statearr_24123_24260[(2)] = null);

(statearr_24123_24260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (6))){
var state_24118__$1 = state_24118;
var statearr_24124_24261 = state_24118__$1;
(statearr_24124_24261[(2)] = null);

(statearr_24124_24261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (7))){
var inst_24114 = (state_24118[(2)]);
var state_24118__$1 = state_24118;
var statearr_24125_24262 = state_24118__$1;
(statearr_24125_24262[(2)] = inst_24114);

(statearr_24125_24262[(1)] = (3));


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
});})(__24242,c__22023__auto___24256,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async))
;
return ((function (__24242,switch__21898__auto__,c__22023__auto___24256,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0 = (function (){
var statearr_24126 = [null,null,null,null,null,null,null];
(statearr_24126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__);

(statearr_24126[(1)] = (1));

return statearr_24126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1 = (function (state_24118){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24127){var ex__21902__auto__ = e24127;
var statearr_24128_24263 = state_24118;
(statearr_24128_24263[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24118[(4)]))){
var statearr_24129_24264 = state_24118;
(statearr_24129_24264[(1)] = cljs.core.first.call(null,(state_24118[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24265 = state_24118;
state_24118 = G__24265;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__ = function(state_24118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1.call(this,state_24118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__;
})()
;})(__24242,switch__21898__auto__,c__22023__auto___24256,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async))
})();
var state__22025__auto__ = (function (){var statearr_24130 = f__22024__auto__.call(null);
(statearr_24130[(6)] = c__22023__auto___24256);

return statearr_24130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(__24242,c__22023__auto___24256,G__24080_24243,G__24080_24244__$1,n__5593__auto___24241,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24080_24244__$1)].join('')));

}

var G__24266 = (__24242 + (1));
__24242 = G__24266;
continue;
} else {
}
break;
}

var c__22023__auto___24267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_24152){
var state_val_24153 = (state_24152[(1)]);
if((state_val_24153 === (7))){
var inst_24148 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
var statearr_24154_24268 = state_24152__$1;
(statearr_24154_24268[(2)] = inst_24148);

(statearr_24154_24268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (1))){
var state_24152__$1 = state_24152;
var statearr_24155_24269 = state_24152__$1;
(statearr_24155_24269[(2)] = null);

(statearr_24155_24269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (4))){
var inst_24133 = (state_24152[(7)]);
var inst_24133__$1 = (state_24152[(2)]);
var inst_24134 = (inst_24133__$1 == null);
var state_24152__$1 = (function (){var statearr_24156 = state_24152;
(statearr_24156[(7)] = inst_24133__$1);

return statearr_24156;
})();
if(cljs.core.truth_(inst_24134)){
var statearr_24157_24270 = state_24152__$1;
(statearr_24157_24270[(1)] = (5));

} else {
var statearr_24158_24271 = state_24152__$1;
(statearr_24158_24271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (6))){
var inst_24133 = (state_24152[(7)]);
var inst_24138 = (state_24152[(8)]);
var inst_24138__$1 = cljs.core.async.chan.call(null,(1));
var inst_24139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24140 = [inst_24133,inst_24138__$1];
var inst_24141 = (new cljs.core.PersistentVector(null,2,(5),inst_24139,inst_24140,null));
var state_24152__$1 = (function (){var statearr_24159 = state_24152;
(statearr_24159[(8)] = inst_24138__$1);

return statearr_24159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24152__$1,(8),jobs,inst_24141);
} else {
if((state_val_24153 === (3))){
var inst_24150 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24152__$1,inst_24150);
} else {
if((state_val_24153 === (2))){
var state_24152__$1 = state_24152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24152__$1,(4),from);
} else {
if((state_val_24153 === (9))){
var inst_24145 = (state_24152[(2)]);
var state_24152__$1 = (function (){var statearr_24160 = state_24152;
(statearr_24160[(9)] = inst_24145);

return statearr_24160;
})();
var statearr_24161_24272 = state_24152__$1;
(statearr_24161_24272[(2)] = null);

(statearr_24161_24272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (5))){
var inst_24136 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24152__$1 = state_24152;
var statearr_24162_24273 = state_24152__$1;
(statearr_24162_24273[(2)] = inst_24136);

(statearr_24162_24273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24153 === (8))){
var inst_24138 = (state_24152[(8)]);
var inst_24143 = (state_24152[(2)]);
var state_24152__$1 = (function (){var statearr_24163 = state_24152;
(statearr_24163[(10)] = inst_24143);

return statearr_24163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24152__$1,(9),results,inst_24138);
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
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0 = (function (){
var statearr_24164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__);

(statearr_24164[(1)] = (1));

return statearr_24164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1 = (function (state_24152){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24165){var ex__21902__auto__ = e24165;
var statearr_24166_24274 = state_24152;
(statearr_24166_24274[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24152[(4)]))){
var statearr_24167_24275 = state_24152;
(statearr_24167_24275[(1)] = cljs.core.first.call(null,(state_24152[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24276 = state_24152;
state_24152 = G__24276;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__ = function(state_24152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1.call(this,state_24152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_24168 = f__22024__auto__.call(null);
(statearr_24168[(6)] = c__22023__auto___24267);

return statearr_24168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));


var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_24206){
var state_val_24207 = (state_24206[(1)]);
if((state_val_24207 === (7))){
var inst_24202 = (state_24206[(2)]);
var state_24206__$1 = state_24206;
var statearr_24208_24277 = state_24206__$1;
(statearr_24208_24277[(2)] = inst_24202);

(statearr_24208_24277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (20))){
var state_24206__$1 = state_24206;
var statearr_24209_24278 = state_24206__$1;
(statearr_24209_24278[(2)] = null);

(statearr_24209_24278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (1))){
var state_24206__$1 = state_24206;
var statearr_24210_24279 = state_24206__$1;
(statearr_24210_24279[(2)] = null);

(statearr_24210_24279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (4))){
var inst_24171 = (state_24206[(7)]);
var inst_24171__$1 = (state_24206[(2)]);
var inst_24172 = (inst_24171__$1 == null);
var state_24206__$1 = (function (){var statearr_24211 = state_24206;
(statearr_24211[(7)] = inst_24171__$1);

return statearr_24211;
})();
if(cljs.core.truth_(inst_24172)){
var statearr_24212_24280 = state_24206__$1;
(statearr_24212_24280[(1)] = (5));

} else {
var statearr_24213_24281 = state_24206__$1;
(statearr_24213_24281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (15))){
var inst_24184 = (state_24206[(8)]);
var state_24206__$1 = state_24206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24206__$1,(18),to,inst_24184);
} else {
if((state_val_24207 === (21))){
var inst_24197 = (state_24206[(2)]);
var state_24206__$1 = state_24206;
var statearr_24214_24282 = state_24206__$1;
(statearr_24214_24282[(2)] = inst_24197);

(statearr_24214_24282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (13))){
var inst_24199 = (state_24206[(2)]);
var state_24206__$1 = (function (){var statearr_24215 = state_24206;
(statearr_24215[(9)] = inst_24199);

return statearr_24215;
})();
var statearr_24216_24283 = state_24206__$1;
(statearr_24216_24283[(2)] = null);

(statearr_24216_24283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (6))){
var inst_24171 = (state_24206[(7)]);
var state_24206__$1 = state_24206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24206__$1,(11),inst_24171);
} else {
if((state_val_24207 === (17))){
var inst_24192 = (state_24206[(2)]);
var state_24206__$1 = state_24206;
if(cljs.core.truth_(inst_24192)){
var statearr_24217_24284 = state_24206__$1;
(statearr_24217_24284[(1)] = (19));

} else {
var statearr_24218_24285 = state_24206__$1;
(statearr_24218_24285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (3))){
var inst_24204 = (state_24206[(2)]);
var state_24206__$1 = state_24206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24206__$1,inst_24204);
} else {
if((state_val_24207 === (12))){
var inst_24181 = (state_24206[(10)]);
var state_24206__$1 = state_24206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24206__$1,(14),inst_24181);
} else {
if((state_val_24207 === (2))){
var state_24206__$1 = state_24206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24206__$1,(4),results);
} else {
if((state_val_24207 === (19))){
var state_24206__$1 = state_24206;
var statearr_24219_24286 = state_24206__$1;
(statearr_24219_24286[(2)] = null);

(statearr_24219_24286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (11))){
var inst_24181 = (state_24206[(2)]);
var state_24206__$1 = (function (){var statearr_24220 = state_24206;
(statearr_24220[(10)] = inst_24181);

return statearr_24220;
})();
var statearr_24221_24287 = state_24206__$1;
(statearr_24221_24287[(2)] = null);

(statearr_24221_24287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (9))){
var state_24206__$1 = state_24206;
var statearr_24222_24288 = state_24206__$1;
(statearr_24222_24288[(2)] = null);

(statearr_24222_24288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (5))){
var state_24206__$1 = state_24206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24223_24289 = state_24206__$1;
(statearr_24223_24289[(1)] = (8));

} else {
var statearr_24224_24290 = state_24206__$1;
(statearr_24224_24290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (14))){
var inst_24184 = (state_24206[(8)]);
var inst_24186 = (state_24206[(11)]);
var inst_24184__$1 = (state_24206[(2)]);
var inst_24185 = (inst_24184__$1 == null);
var inst_24186__$1 = cljs.core.not.call(null,inst_24185);
var state_24206__$1 = (function (){var statearr_24225 = state_24206;
(statearr_24225[(8)] = inst_24184__$1);

(statearr_24225[(11)] = inst_24186__$1);

return statearr_24225;
})();
if(inst_24186__$1){
var statearr_24226_24291 = state_24206__$1;
(statearr_24226_24291[(1)] = (15));

} else {
var statearr_24227_24292 = state_24206__$1;
(statearr_24227_24292[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (16))){
var inst_24186 = (state_24206[(11)]);
var state_24206__$1 = state_24206;
var statearr_24228_24293 = state_24206__$1;
(statearr_24228_24293[(2)] = inst_24186);

(statearr_24228_24293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (10))){
var inst_24178 = (state_24206[(2)]);
var state_24206__$1 = state_24206;
var statearr_24229_24294 = state_24206__$1;
(statearr_24229_24294[(2)] = inst_24178);

(statearr_24229_24294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (18))){
var inst_24189 = (state_24206[(2)]);
var state_24206__$1 = state_24206;
var statearr_24230_24295 = state_24206__$1;
(statearr_24230_24295[(2)] = inst_24189);

(statearr_24230_24295[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24207 === (8))){
var inst_24175 = cljs.core.async.close_BANG_.call(null,to);
var state_24206__$1 = state_24206;
var statearr_24231_24296 = state_24206__$1;
(statearr_24231_24296[(2)] = inst_24175);

(statearr_24231_24296[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0 = (function (){
var statearr_24232 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__);

(statearr_24232[(1)] = (1));

return statearr_24232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1 = (function (state_24206){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24233){var ex__21902__auto__ = e24233;
var statearr_24234_24297 = state_24206;
(statearr_24234_24297[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24206[(4)]))){
var statearr_24235_24298 = state_24206;
(statearr_24235_24298[(1)] = cljs.core.first.call(null,(state_24206[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24299 = state_24206;
state_24206 = G__24299;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__ = function(state_24206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1.call(this,state_24206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_24236 = f__22024__auto__.call(null);
(statearr_24236[(6)] = c__22023__auto__);

return statearr_24236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
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
var G__24301 = arguments.length;
switch (G__24301) {
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
var G__24304 = arguments.length;
switch (G__24304) {
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
var G__24307 = arguments.length;
switch (G__24307) {
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
var c__22023__auto___24357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_24333){
var state_val_24334 = (state_24333[(1)]);
if((state_val_24334 === (7))){
var inst_24329 = (state_24333[(2)]);
var state_24333__$1 = state_24333;
var statearr_24335_24358 = state_24333__$1;
(statearr_24335_24358[(2)] = inst_24329);

(statearr_24335_24358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (1))){
var state_24333__$1 = state_24333;
var statearr_24336_24359 = state_24333__$1;
(statearr_24336_24359[(2)] = null);

(statearr_24336_24359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (4))){
var inst_24310 = (state_24333[(7)]);
var inst_24310__$1 = (state_24333[(2)]);
var inst_24311 = (inst_24310__$1 == null);
var state_24333__$1 = (function (){var statearr_24337 = state_24333;
(statearr_24337[(7)] = inst_24310__$1);

return statearr_24337;
})();
if(cljs.core.truth_(inst_24311)){
var statearr_24338_24360 = state_24333__$1;
(statearr_24338_24360[(1)] = (5));

} else {
var statearr_24339_24361 = state_24333__$1;
(statearr_24339_24361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (13))){
var state_24333__$1 = state_24333;
var statearr_24340_24362 = state_24333__$1;
(statearr_24340_24362[(2)] = null);

(statearr_24340_24362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (6))){
var inst_24310 = (state_24333[(7)]);
var inst_24316 = p.call(null,inst_24310);
var state_24333__$1 = state_24333;
if(cljs.core.truth_(inst_24316)){
var statearr_24341_24363 = state_24333__$1;
(statearr_24341_24363[(1)] = (9));

} else {
var statearr_24342_24364 = state_24333__$1;
(statearr_24342_24364[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (3))){
var inst_24331 = (state_24333[(2)]);
var state_24333__$1 = state_24333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24333__$1,inst_24331);
} else {
if((state_val_24334 === (12))){
var state_24333__$1 = state_24333;
var statearr_24343_24365 = state_24333__$1;
(statearr_24343_24365[(2)] = null);

(statearr_24343_24365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (2))){
var state_24333__$1 = state_24333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24333__$1,(4),ch);
} else {
if((state_val_24334 === (11))){
var inst_24310 = (state_24333[(7)]);
var inst_24320 = (state_24333[(2)]);
var state_24333__$1 = state_24333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24333__$1,(8),inst_24320,inst_24310);
} else {
if((state_val_24334 === (9))){
var state_24333__$1 = state_24333;
var statearr_24344_24366 = state_24333__$1;
(statearr_24344_24366[(2)] = tc);

(statearr_24344_24366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (5))){
var inst_24313 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24314 = cljs.core.async.close_BANG_.call(null,fc);
var state_24333__$1 = (function (){var statearr_24345 = state_24333;
(statearr_24345[(8)] = inst_24313);

return statearr_24345;
})();
var statearr_24346_24367 = state_24333__$1;
(statearr_24346_24367[(2)] = inst_24314);

(statearr_24346_24367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (14))){
var inst_24327 = (state_24333[(2)]);
var state_24333__$1 = state_24333;
var statearr_24347_24368 = state_24333__$1;
(statearr_24347_24368[(2)] = inst_24327);

(statearr_24347_24368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (10))){
var state_24333__$1 = state_24333;
var statearr_24348_24369 = state_24333__$1;
(statearr_24348_24369[(2)] = fc);

(statearr_24348_24369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (8))){
var inst_24322 = (state_24333[(2)]);
var state_24333__$1 = state_24333;
if(cljs.core.truth_(inst_24322)){
var statearr_24349_24370 = state_24333__$1;
(statearr_24349_24370[(1)] = (12));

} else {
var statearr_24350_24371 = state_24333__$1;
(statearr_24350_24371[(1)] = (13));

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
var cljs$core$async$state_machine__21899__auto__ = null;
var cljs$core$async$state_machine__21899__auto____0 = (function (){
var statearr_24351 = [null,null,null,null,null,null,null,null,null];
(statearr_24351[(0)] = cljs$core$async$state_machine__21899__auto__);

(statearr_24351[(1)] = (1));

return statearr_24351;
});
var cljs$core$async$state_machine__21899__auto____1 = (function (state_24333){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24352){var ex__21902__auto__ = e24352;
var statearr_24353_24372 = state_24333;
(statearr_24353_24372[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24333[(4)]))){
var statearr_24354_24373 = state_24333;
(statearr_24354_24373[(1)] = cljs.core.first.call(null,(state_24333[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24374 = state_24333;
state_24333 = G__24374;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$state_machine__21899__auto__ = function(state_24333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21899__auto____1.call(this,state_24333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21899__auto____0;
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21899__auto____1;
return cljs$core$async$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_24355 = f__22024__auto__.call(null);
(statearr_24355[(6)] = c__22023__auto___24357);

return statearr_24355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
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
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_24396){
var state_val_24397 = (state_24396[(1)]);
if((state_val_24397 === (7))){
var inst_24392 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24398_24417 = state_24396__$1;
(statearr_24398_24417[(2)] = inst_24392);

(statearr_24398_24417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (1))){
var inst_24375 = init;
var inst_24376 = inst_24375;
var state_24396__$1 = (function (){var statearr_24399 = state_24396;
(statearr_24399[(7)] = inst_24376);

return statearr_24399;
})();
var statearr_24400_24418 = state_24396__$1;
(statearr_24400_24418[(2)] = null);

(statearr_24400_24418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (4))){
var inst_24379 = (state_24396[(8)]);
var inst_24379__$1 = (state_24396[(2)]);
var inst_24380 = (inst_24379__$1 == null);
var state_24396__$1 = (function (){var statearr_24401 = state_24396;
(statearr_24401[(8)] = inst_24379__$1);

return statearr_24401;
})();
if(cljs.core.truth_(inst_24380)){
var statearr_24402_24419 = state_24396__$1;
(statearr_24402_24419[(1)] = (5));

} else {
var statearr_24403_24420 = state_24396__$1;
(statearr_24403_24420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (6))){
var inst_24376 = (state_24396[(7)]);
var inst_24379 = (state_24396[(8)]);
var inst_24383 = (state_24396[(9)]);
var inst_24383__$1 = f.call(null,inst_24376,inst_24379);
var inst_24384 = cljs.core.reduced_QMARK_.call(null,inst_24383__$1);
var state_24396__$1 = (function (){var statearr_24404 = state_24396;
(statearr_24404[(9)] = inst_24383__$1);

return statearr_24404;
})();
if(inst_24384){
var statearr_24405_24421 = state_24396__$1;
(statearr_24405_24421[(1)] = (8));

} else {
var statearr_24406_24422 = state_24396__$1;
(statearr_24406_24422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (3))){
var inst_24394 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24396__$1,inst_24394);
} else {
if((state_val_24397 === (2))){
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24396__$1,(4),ch);
} else {
if((state_val_24397 === (9))){
var inst_24383 = (state_24396[(9)]);
var inst_24376 = inst_24383;
var state_24396__$1 = (function (){var statearr_24407 = state_24396;
(statearr_24407[(7)] = inst_24376);

return statearr_24407;
})();
var statearr_24408_24423 = state_24396__$1;
(statearr_24408_24423[(2)] = null);

(statearr_24408_24423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (5))){
var inst_24376 = (state_24396[(7)]);
var state_24396__$1 = state_24396;
var statearr_24409_24424 = state_24396__$1;
(statearr_24409_24424[(2)] = inst_24376);

(statearr_24409_24424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (10))){
var inst_24390 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24410_24425 = state_24396__$1;
(statearr_24410_24425[(2)] = inst_24390);

(statearr_24410_24425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (8))){
var inst_24383 = (state_24396[(9)]);
var inst_24386 = cljs.core.deref.call(null,inst_24383);
var state_24396__$1 = state_24396;
var statearr_24411_24426 = state_24396__$1;
(statearr_24411_24426[(2)] = inst_24386);

(statearr_24411_24426[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__21899__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21899__auto____0 = (function (){
var statearr_24412 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24412[(0)] = cljs$core$async$reduce_$_state_machine__21899__auto__);

(statearr_24412[(1)] = (1));

return statearr_24412;
});
var cljs$core$async$reduce_$_state_machine__21899__auto____1 = (function (state_24396){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24413){var ex__21902__auto__ = e24413;
var statearr_24414_24427 = state_24396;
(statearr_24414_24427[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24396[(4)]))){
var statearr_24415_24428 = state_24396;
(statearr_24415_24428[(1)] = cljs.core.first.call(null,(state_24396[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24429 = state_24396;
state_24396 = G__24429;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21899__auto__ = function(state_24396){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21899__auto____1.call(this,state_24396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21899__auto____0;
cljs$core$async$reduce_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21899__auto____1;
return cljs$core$async$reduce_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_24416 = f__22024__auto__.call(null);
(statearr_24416[(6)] = c__22023__auto__);

return statearr_24416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_24435){
var state_val_24436 = (state_24435[(1)]);
if((state_val_24436 === (1))){
var inst_24430 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24435__$1 = state_24435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24435__$1,(2),inst_24430);
} else {
if((state_val_24436 === (2))){
var inst_24432 = (state_24435[(2)]);
var inst_24433 = f__$1.call(null,inst_24432);
var state_24435__$1 = state_24435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24435__$1,inst_24433);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21899__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21899__auto____0 = (function (){
var statearr_24437 = [null,null,null,null,null,null,null];
(statearr_24437[(0)] = cljs$core$async$transduce_$_state_machine__21899__auto__);

(statearr_24437[(1)] = (1));

return statearr_24437;
});
var cljs$core$async$transduce_$_state_machine__21899__auto____1 = (function (state_24435){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24438){var ex__21902__auto__ = e24438;
var statearr_24439_24442 = state_24435;
(statearr_24439_24442[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24435[(4)]))){
var statearr_24440_24443 = state_24435;
(statearr_24440_24443[(1)] = cljs.core.first.call(null,(state_24435[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24444 = state_24435;
state_24435 = G__24444;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21899__auto__ = function(state_24435){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21899__auto____1.call(this,state_24435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21899__auto____0;
cljs$core$async$transduce_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21899__auto____1;
return cljs$core$async$transduce_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_24441 = f__22024__auto__.call(null);
(statearr_24441[(6)] = c__22023__auto__);

return statearr_24441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
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
var G__24446 = arguments.length;
switch (G__24446) {
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
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_24471){
var state_val_24472 = (state_24471[(1)]);
if((state_val_24472 === (7))){
var inst_24453 = (state_24471[(2)]);
var state_24471__$1 = state_24471;
var statearr_24473_24495 = state_24471__$1;
(statearr_24473_24495[(2)] = inst_24453);

(statearr_24473_24495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (1))){
var inst_24447 = cljs.core.seq.call(null,coll);
var inst_24448 = inst_24447;
var state_24471__$1 = (function (){var statearr_24474 = state_24471;
(statearr_24474[(7)] = inst_24448);

return statearr_24474;
})();
var statearr_24475_24496 = state_24471__$1;
(statearr_24475_24496[(2)] = null);

(statearr_24475_24496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (4))){
var inst_24448 = (state_24471[(7)]);
var inst_24451 = cljs.core.first.call(null,inst_24448);
var state_24471__$1 = state_24471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24471__$1,(7),ch,inst_24451);
} else {
if((state_val_24472 === (13))){
var inst_24465 = (state_24471[(2)]);
var state_24471__$1 = state_24471;
var statearr_24476_24497 = state_24471__$1;
(statearr_24476_24497[(2)] = inst_24465);

(statearr_24476_24497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (6))){
var inst_24456 = (state_24471[(2)]);
var state_24471__$1 = state_24471;
if(cljs.core.truth_(inst_24456)){
var statearr_24477_24498 = state_24471__$1;
(statearr_24477_24498[(1)] = (8));

} else {
var statearr_24478_24499 = state_24471__$1;
(statearr_24478_24499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (3))){
var inst_24469 = (state_24471[(2)]);
var state_24471__$1 = state_24471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24471__$1,inst_24469);
} else {
if((state_val_24472 === (12))){
var state_24471__$1 = state_24471;
var statearr_24479_24500 = state_24471__$1;
(statearr_24479_24500[(2)] = null);

(statearr_24479_24500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (2))){
var inst_24448 = (state_24471[(7)]);
var state_24471__$1 = state_24471;
if(cljs.core.truth_(inst_24448)){
var statearr_24480_24501 = state_24471__$1;
(statearr_24480_24501[(1)] = (4));

} else {
var statearr_24481_24502 = state_24471__$1;
(statearr_24481_24502[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (11))){
var inst_24462 = cljs.core.async.close_BANG_.call(null,ch);
var state_24471__$1 = state_24471;
var statearr_24482_24503 = state_24471__$1;
(statearr_24482_24503[(2)] = inst_24462);

(statearr_24482_24503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (9))){
var state_24471__$1 = state_24471;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24483_24504 = state_24471__$1;
(statearr_24483_24504[(1)] = (11));

} else {
var statearr_24484_24505 = state_24471__$1;
(statearr_24484_24505[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (5))){
var inst_24448 = (state_24471[(7)]);
var state_24471__$1 = state_24471;
var statearr_24485_24506 = state_24471__$1;
(statearr_24485_24506[(2)] = inst_24448);

(statearr_24485_24506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (10))){
var inst_24467 = (state_24471[(2)]);
var state_24471__$1 = state_24471;
var statearr_24486_24507 = state_24471__$1;
(statearr_24486_24507[(2)] = inst_24467);

(statearr_24486_24507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24472 === (8))){
var inst_24448 = (state_24471[(7)]);
var inst_24458 = cljs.core.next.call(null,inst_24448);
var inst_24448__$1 = inst_24458;
var state_24471__$1 = (function (){var statearr_24487 = state_24471;
(statearr_24487[(7)] = inst_24448__$1);

return statearr_24487;
})();
var statearr_24488_24508 = state_24471__$1;
(statearr_24488_24508[(2)] = null);

(statearr_24488_24508[(1)] = (2));


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
var cljs$core$async$state_machine__21899__auto__ = null;
var cljs$core$async$state_machine__21899__auto____0 = (function (){
var statearr_24489 = [null,null,null,null,null,null,null,null];
(statearr_24489[(0)] = cljs$core$async$state_machine__21899__auto__);

(statearr_24489[(1)] = (1));

return statearr_24489;
});
var cljs$core$async$state_machine__21899__auto____1 = (function (state_24471){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24490){var ex__21902__auto__ = e24490;
var statearr_24491_24509 = state_24471;
(statearr_24491_24509[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24471[(4)]))){
var statearr_24492_24510 = state_24471;
(statearr_24492_24510[(1)] = cljs.core.first.call(null,(state_24471[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24511 = state_24471;
state_24471 = G__24511;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$state_machine__21899__auto__ = function(state_24471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21899__auto____1.call(this,state_24471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21899__auto____0;
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21899__auto____1;
return cljs$core$async$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_24493 = f__22024__auto__.call(null);
(statearr_24493[(6)] = c__22023__auto__);

return statearr_24493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
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
var G__24513 = arguments.length;
switch (G__24513) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_24515 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_24515.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_24516 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_24516.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_24517 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_24517.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_24518 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_24518.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24519 = (function (ch,cs,meta24520){
this.ch = ch;
this.cs = cs;
this.meta24520 = meta24520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24521,meta24520__$1){
var self__ = this;
var _24521__$1 = this;
return (new cljs.core.async.t_cljs$core$async24519(self__.ch,self__.cs,meta24520__$1));
}));

(cljs.core.async.t_cljs$core$async24519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24521){
var self__ = this;
var _24521__$1 = this;
return self__.meta24520;
}));

(cljs.core.async.t_cljs$core$async24519.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24519.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24519.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24519.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24519.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24520","meta24520",-938782018,null)], null);
}));

(cljs.core.async.t_cljs$core$async24519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24519");

(cljs.core.async.t_cljs$core$async24519.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async24519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24519.
 */
cljs.core.async.__GT_t_cljs$core$async24519 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24519(ch__$1,cs__$1,meta24520){
return (new cljs.core.async.t_cljs$core$async24519(ch__$1,cs__$1,meta24520));
});

}

return (new cljs.core.async.t_cljs$core$async24519(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22023__auto___24738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_24654){
var state_val_24655 = (state_24654[(1)]);
if((state_val_24655 === (7))){
var inst_24650 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24656_24739 = state_24654__$1;
(statearr_24656_24739[(2)] = inst_24650);

(statearr_24656_24739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (20))){
var inst_24555 = (state_24654[(7)]);
var inst_24567 = cljs.core.first.call(null,inst_24555);
var inst_24568 = cljs.core.nth.call(null,inst_24567,(0),null);
var inst_24569 = cljs.core.nth.call(null,inst_24567,(1),null);
var state_24654__$1 = (function (){var statearr_24657 = state_24654;
(statearr_24657[(8)] = inst_24568);

return statearr_24657;
})();
if(cljs.core.truth_(inst_24569)){
var statearr_24658_24740 = state_24654__$1;
(statearr_24658_24740[(1)] = (22));

} else {
var statearr_24659_24741 = state_24654__$1;
(statearr_24659_24741[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (27))){
var inst_24597 = (state_24654[(9)]);
var inst_24599 = (state_24654[(10)]);
var inst_24604 = (state_24654[(11)]);
var inst_24524 = (state_24654[(12)]);
var inst_24604__$1 = cljs.core._nth.call(null,inst_24597,inst_24599);
var inst_24605 = cljs.core.async.put_BANG_.call(null,inst_24604__$1,inst_24524,done);
var state_24654__$1 = (function (){var statearr_24660 = state_24654;
(statearr_24660[(11)] = inst_24604__$1);

return statearr_24660;
})();
if(cljs.core.truth_(inst_24605)){
var statearr_24661_24742 = state_24654__$1;
(statearr_24661_24742[(1)] = (30));

} else {
var statearr_24662_24743 = state_24654__$1;
(statearr_24662_24743[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (1))){
var state_24654__$1 = state_24654;
var statearr_24663_24744 = state_24654__$1;
(statearr_24663_24744[(2)] = null);

(statearr_24663_24744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (24))){
var inst_24555 = (state_24654[(7)]);
var inst_24574 = (state_24654[(2)]);
var inst_24575 = cljs.core.next.call(null,inst_24555);
var inst_24533 = inst_24575;
var inst_24534 = null;
var inst_24535 = (0);
var inst_24536 = (0);
var state_24654__$1 = (function (){var statearr_24664 = state_24654;
(statearr_24664[(13)] = inst_24574);

(statearr_24664[(14)] = inst_24533);

(statearr_24664[(15)] = inst_24534);

(statearr_24664[(16)] = inst_24535);

(statearr_24664[(17)] = inst_24536);

return statearr_24664;
})();
var statearr_24665_24745 = state_24654__$1;
(statearr_24665_24745[(2)] = null);

(statearr_24665_24745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (39))){
var state_24654__$1 = state_24654;
var statearr_24669_24746 = state_24654__$1;
(statearr_24669_24746[(2)] = null);

(statearr_24669_24746[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (4))){
var inst_24524 = (state_24654[(12)]);
var inst_24524__$1 = (state_24654[(2)]);
var inst_24525 = (inst_24524__$1 == null);
var state_24654__$1 = (function (){var statearr_24670 = state_24654;
(statearr_24670[(12)] = inst_24524__$1);

return statearr_24670;
})();
if(cljs.core.truth_(inst_24525)){
var statearr_24671_24747 = state_24654__$1;
(statearr_24671_24747[(1)] = (5));

} else {
var statearr_24672_24748 = state_24654__$1;
(statearr_24672_24748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (15))){
var inst_24536 = (state_24654[(17)]);
var inst_24533 = (state_24654[(14)]);
var inst_24534 = (state_24654[(15)]);
var inst_24535 = (state_24654[(16)]);
var inst_24551 = (state_24654[(2)]);
var inst_24552 = (inst_24536 + (1));
var tmp24666 = inst_24535;
var tmp24667 = inst_24534;
var tmp24668 = inst_24533;
var inst_24533__$1 = tmp24668;
var inst_24534__$1 = tmp24667;
var inst_24535__$1 = tmp24666;
var inst_24536__$1 = inst_24552;
var state_24654__$1 = (function (){var statearr_24673 = state_24654;
(statearr_24673[(18)] = inst_24551);

(statearr_24673[(14)] = inst_24533__$1);

(statearr_24673[(15)] = inst_24534__$1);

(statearr_24673[(16)] = inst_24535__$1);

(statearr_24673[(17)] = inst_24536__$1);

return statearr_24673;
})();
var statearr_24674_24749 = state_24654__$1;
(statearr_24674_24749[(2)] = null);

(statearr_24674_24749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (21))){
var inst_24578 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24678_24750 = state_24654__$1;
(statearr_24678_24750[(2)] = inst_24578);

(statearr_24678_24750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (31))){
var inst_24604 = (state_24654[(11)]);
var inst_24608 = cljs.core.async.untap_STAR_.call(null,m,inst_24604);
var state_24654__$1 = state_24654;
var statearr_24679_24751 = state_24654__$1;
(statearr_24679_24751[(2)] = inst_24608);

(statearr_24679_24751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (32))){
var inst_24599 = (state_24654[(10)]);
var inst_24596 = (state_24654[(19)]);
var inst_24597 = (state_24654[(9)]);
var inst_24598 = (state_24654[(20)]);
var inst_24610 = (state_24654[(2)]);
var inst_24611 = (inst_24599 + (1));
var tmp24675 = inst_24598;
var tmp24676 = inst_24596;
var tmp24677 = inst_24597;
var inst_24596__$1 = tmp24676;
var inst_24597__$1 = tmp24677;
var inst_24598__$1 = tmp24675;
var inst_24599__$1 = inst_24611;
var state_24654__$1 = (function (){var statearr_24680 = state_24654;
(statearr_24680[(21)] = inst_24610);

(statearr_24680[(19)] = inst_24596__$1);

(statearr_24680[(9)] = inst_24597__$1);

(statearr_24680[(20)] = inst_24598__$1);

(statearr_24680[(10)] = inst_24599__$1);

return statearr_24680;
})();
var statearr_24681_24752 = state_24654__$1;
(statearr_24681_24752[(2)] = null);

(statearr_24681_24752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (40))){
var inst_24623 = (state_24654[(22)]);
var inst_24627 = cljs.core.async.untap_STAR_.call(null,m,inst_24623);
var state_24654__$1 = state_24654;
var statearr_24682_24753 = state_24654__$1;
(statearr_24682_24753[(2)] = inst_24627);

(statearr_24682_24753[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (33))){
var inst_24614 = (state_24654[(23)]);
var inst_24616 = cljs.core.chunked_seq_QMARK_.call(null,inst_24614);
var state_24654__$1 = state_24654;
if(inst_24616){
var statearr_24683_24754 = state_24654__$1;
(statearr_24683_24754[(1)] = (36));

} else {
var statearr_24684_24755 = state_24654__$1;
(statearr_24684_24755[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (13))){
var inst_24545 = (state_24654[(24)]);
var inst_24548 = cljs.core.async.close_BANG_.call(null,inst_24545);
var state_24654__$1 = state_24654;
var statearr_24685_24756 = state_24654__$1;
(statearr_24685_24756[(2)] = inst_24548);

(statearr_24685_24756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (22))){
var inst_24568 = (state_24654[(8)]);
var inst_24571 = cljs.core.async.close_BANG_.call(null,inst_24568);
var state_24654__$1 = state_24654;
var statearr_24686_24757 = state_24654__$1;
(statearr_24686_24757[(2)] = inst_24571);

(statearr_24686_24757[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (36))){
var inst_24614 = (state_24654[(23)]);
var inst_24618 = cljs.core.chunk_first.call(null,inst_24614);
var inst_24619 = cljs.core.chunk_rest.call(null,inst_24614);
var inst_24620 = cljs.core.count.call(null,inst_24618);
var inst_24596 = inst_24619;
var inst_24597 = inst_24618;
var inst_24598 = inst_24620;
var inst_24599 = (0);
var state_24654__$1 = (function (){var statearr_24687 = state_24654;
(statearr_24687[(19)] = inst_24596);

(statearr_24687[(9)] = inst_24597);

(statearr_24687[(20)] = inst_24598);

(statearr_24687[(10)] = inst_24599);

return statearr_24687;
})();
var statearr_24688_24758 = state_24654__$1;
(statearr_24688_24758[(2)] = null);

(statearr_24688_24758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (41))){
var inst_24614 = (state_24654[(23)]);
var inst_24629 = (state_24654[(2)]);
var inst_24630 = cljs.core.next.call(null,inst_24614);
var inst_24596 = inst_24630;
var inst_24597 = null;
var inst_24598 = (0);
var inst_24599 = (0);
var state_24654__$1 = (function (){var statearr_24689 = state_24654;
(statearr_24689[(25)] = inst_24629);

(statearr_24689[(19)] = inst_24596);

(statearr_24689[(9)] = inst_24597);

(statearr_24689[(20)] = inst_24598);

(statearr_24689[(10)] = inst_24599);

return statearr_24689;
})();
var statearr_24690_24759 = state_24654__$1;
(statearr_24690_24759[(2)] = null);

(statearr_24690_24759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (43))){
var state_24654__$1 = state_24654;
var statearr_24691_24760 = state_24654__$1;
(statearr_24691_24760[(2)] = null);

(statearr_24691_24760[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (29))){
var inst_24638 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24692_24761 = state_24654__$1;
(statearr_24692_24761[(2)] = inst_24638);

(statearr_24692_24761[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (44))){
var inst_24647 = (state_24654[(2)]);
var state_24654__$1 = (function (){var statearr_24693 = state_24654;
(statearr_24693[(26)] = inst_24647);

return statearr_24693;
})();
var statearr_24694_24762 = state_24654__$1;
(statearr_24694_24762[(2)] = null);

(statearr_24694_24762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (6))){
var inst_24588 = (state_24654[(27)]);
var inst_24587 = cljs.core.deref.call(null,cs);
var inst_24588__$1 = cljs.core.keys.call(null,inst_24587);
var inst_24589 = cljs.core.count.call(null,inst_24588__$1);
var inst_24590 = cljs.core.reset_BANG_.call(null,dctr,inst_24589);
var inst_24595 = cljs.core.seq.call(null,inst_24588__$1);
var inst_24596 = inst_24595;
var inst_24597 = null;
var inst_24598 = (0);
var inst_24599 = (0);
var state_24654__$1 = (function (){var statearr_24695 = state_24654;
(statearr_24695[(27)] = inst_24588__$1);

(statearr_24695[(28)] = inst_24590);

(statearr_24695[(19)] = inst_24596);

(statearr_24695[(9)] = inst_24597);

(statearr_24695[(20)] = inst_24598);

(statearr_24695[(10)] = inst_24599);

return statearr_24695;
})();
var statearr_24696_24763 = state_24654__$1;
(statearr_24696_24763[(2)] = null);

(statearr_24696_24763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (28))){
var inst_24596 = (state_24654[(19)]);
var inst_24614 = (state_24654[(23)]);
var inst_24614__$1 = cljs.core.seq.call(null,inst_24596);
var state_24654__$1 = (function (){var statearr_24697 = state_24654;
(statearr_24697[(23)] = inst_24614__$1);

return statearr_24697;
})();
if(inst_24614__$1){
var statearr_24698_24764 = state_24654__$1;
(statearr_24698_24764[(1)] = (33));

} else {
var statearr_24699_24765 = state_24654__$1;
(statearr_24699_24765[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (25))){
var inst_24599 = (state_24654[(10)]);
var inst_24598 = (state_24654[(20)]);
var inst_24601 = (inst_24599 < inst_24598);
var inst_24602 = inst_24601;
var state_24654__$1 = state_24654;
if(cljs.core.truth_(inst_24602)){
var statearr_24700_24766 = state_24654__$1;
(statearr_24700_24766[(1)] = (27));

} else {
var statearr_24701_24767 = state_24654__$1;
(statearr_24701_24767[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (34))){
var state_24654__$1 = state_24654;
var statearr_24702_24768 = state_24654__$1;
(statearr_24702_24768[(2)] = null);

(statearr_24702_24768[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (17))){
var state_24654__$1 = state_24654;
var statearr_24703_24769 = state_24654__$1;
(statearr_24703_24769[(2)] = null);

(statearr_24703_24769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (3))){
var inst_24652 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24654__$1,inst_24652);
} else {
if((state_val_24655 === (12))){
var inst_24583 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24704_24770 = state_24654__$1;
(statearr_24704_24770[(2)] = inst_24583);

(statearr_24704_24770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (2))){
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24654__$1,(4),ch);
} else {
if((state_val_24655 === (23))){
var state_24654__$1 = state_24654;
var statearr_24705_24771 = state_24654__$1;
(statearr_24705_24771[(2)] = null);

(statearr_24705_24771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (35))){
var inst_24636 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24706_24772 = state_24654__$1;
(statearr_24706_24772[(2)] = inst_24636);

(statearr_24706_24772[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (19))){
var inst_24555 = (state_24654[(7)]);
var inst_24559 = cljs.core.chunk_first.call(null,inst_24555);
var inst_24560 = cljs.core.chunk_rest.call(null,inst_24555);
var inst_24561 = cljs.core.count.call(null,inst_24559);
var inst_24533 = inst_24560;
var inst_24534 = inst_24559;
var inst_24535 = inst_24561;
var inst_24536 = (0);
var state_24654__$1 = (function (){var statearr_24707 = state_24654;
(statearr_24707[(14)] = inst_24533);

(statearr_24707[(15)] = inst_24534);

(statearr_24707[(16)] = inst_24535);

(statearr_24707[(17)] = inst_24536);

return statearr_24707;
})();
var statearr_24708_24773 = state_24654__$1;
(statearr_24708_24773[(2)] = null);

(statearr_24708_24773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (11))){
var inst_24533 = (state_24654[(14)]);
var inst_24555 = (state_24654[(7)]);
var inst_24555__$1 = cljs.core.seq.call(null,inst_24533);
var state_24654__$1 = (function (){var statearr_24709 = state_24654;
(statearr_24709[(7)] = inst_24555__$1);

return statearr_24709;
})();
if(inst_24555__$1){
var statearr_24710_24774 = state_24654__$1;
(statearr_24710_24774[(1)] = (16));

} else {
var statearr_24711_24775 = state_24654__$1;
(statearr_24711_24775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (9))){
var inst_24585 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24712_24776 = state_24654__$1;
(statearr_24712_24776[(2)] = inst_24585);

(statearr_24712_24776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (5))){
var inst_24531 = cljs.core.deref.call(null,cs);
var inst_24532 = cljs.core.seq.call(null,inst_24531);
var inst_24533 = inst_24532;
var inst_24534 = null;
var inst_24535 = (0);
var inst_24536 = (0);
var state_24654__$1 = (function (){var statearr_24713 = state_24654;
(statearr_24713[(14)] = inst_24533);

(statearr_24713[(15)] = inst_24534);

(statearr_24713[(16)] = inst_24535);

(statearr_24713[(17)] = inst_24536);

return statearr_24713;
})();
var statearr_24714_24777 = state_24654__$1;
(statearr_24714_24777[(2)] = null);

(statearr_24714_24777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (14))){
var state_24654__$1 = state_24654;
var statearr_24715_24778 = state_24654__$1;
(statearr_24715_24778[(2)] = null);

(statearr_24715_24778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (45))){
var inst_24644 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24716_24779 = state_24654__$1;
(statearr_24716_24779[(2)] = inst_24644);

(statearr_24716_24779[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (26))){
var inst_24588 = (state_24654[(27)]);
var inst_24640 = (state_24654[(2)]);
var inst_24641 = cljs.core.seq.call(null,inst_24588);
var state_24654__$1 = (function (){var statearr_24717 = state_24654;
(statearr_24717[(29)] = inst_24640);

return statearr_24717;
})();
if(inst_24641){
var statearr_24718_24780 = state_24654__$1;
(statearr_24718_24780[(1)] = (42));

} else {
var statearr_24719_24781 = state_24654__$1;
(statearr_24719_24781[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (16))){
var inst_24555 = (state_24654[(7)]);
var inst_24557 = cljs.core.chunked_seq_QMARK_.call(null,inst_24555);
var state_24654__$1 = state_24654;
if(inst_24557){
var statearr_24720_24782 = state_24654__$1;
(statearr_24720_24782[(1)] = (19));

} else {
var statearr_24721_24783 = state_24654__$1;
(statearr_24721_24783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (38))){
var inst_24633 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24722_24784 = state_24654__$1;
(statearr_24722_24784[(2)] = inst_24633);

(statearr_24722_24784[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (30))){
var state_24654__$1 = state_24654;
var statearr_24723_24785 = state_24654__$1;
(statearr_24723_24785[(2)] = null);

(statearr_24723_24785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (10))){
var inst_24534 = (state_24654[(15)]);
var inst_24536 = (state_24654[(17)]);
var inst_24544 = cljs.core._nth.call(null,inst_24534,inst_24536);
var inst_24545 = cljs.core.nth.call(null,inst_24544,(0),null);
var inst_24546 = cljs.core.nth.call(null,inst_24544,(1),null);
var state_24654__$1 = (function (){var statearr_24724 = state_24654;
(statearr_24724[(24)] = inst_24545);

return statearr_24724;
})();
if(cljs.core.truth_(inst_24546)){
var statearr_24725_24786 = state_24654__$1;
(statearr_24725_24786[(1)] = (13));

} else {
var statearr_24726_24787 = state_24654__$1;
(statearr_24726_24787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (18))){
var inst_24581 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24727_24788 = state_24654__$1;
(statearr_24727_24788[(2)] = inst_24581);

(statearr_24727_24788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (42))){
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24654__$1,(45),dchan);
} else {
if((state_val_24655 === (37))){
var inst_24614 = (state_24654[(23)]);
var inst_24623 = (state_24654[(22)]);
var inst_24524 = (state_24654[(12)]);
var inst_24623__$1 = cljs.core.first.call(null,inst_24614);
var inst_24624 = cljs.core.async.put_BANG_.call(null,inst_24623__$1,inst_24524,done);
var state_24654__$1 = (function (){var statearr_24728 = state_24654;
(statearr_24728[(22)] = inst_24623__$1);

return statearr_24728;
})();
if(cljs.core.truth_(inst_24624)){
var statearr_24729_24789 = state_24654__$1;
(statearr_24729_24789[(1)] = (39));

} else {
var statearr_24730_24790 = state_24654__$1;
(statearr_24730_24790[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (8))){
var inst_24536 = (state_24654[(17)]);
var inst_24535 = (state_24654[(16)]);
var inst_24538 = (inst_24536 < inst_24535);
var inst_24539 = inst_24538;
var state_24654__$1 = state_24654;
if(cljs.core.truth_(inst_24539)){
var statearr_24731_24791 = state_24654__$1;
(statearr_24731_24791[(1)] = (10));

} else {
var statearr_24732_24792 = state_24654__$1;
(statearr_24732_24792[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__21899__auto__ = null;
var cljs$core$async$mult_$_state_machine__21899__auto____0 = (function (){
var statearr_24733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24733[(0)] = cljs$core$async$mult_$_state_machine__21899__auto__);

(statearr_24733[(1)] = (1));

return statearr_24733;
});
var cljs$core$async$mult_$_state_machine__21899__auto____1 = (function (state_24654){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24734){var ex__21902__auto__ = e24734;
var statearr_24735_24793 = state_24654;
(statearr_24735_24793[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24654[(4)]))){
var statearr_24736_24794 = state_24654;
(statearr_24736_24794[(1)] = cljs.core.first.call(null,(state_24654[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24795 = state_24654;
state_24654 = G__24795;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21899__auto__ = function(state_24654){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21899__auto____1.call(this,state_24654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21899__auto____0;
cljs$core$async$mult_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21899__auto____1;
return cljs$core$async$mult_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_24737 = f__22024__auto__.call(null);
(statearr_24737[(6)] = c__22023__auto___24738);

return statearr_24737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
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
var G__24797 = arguments.length;
switch (G__24797) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_24799 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_24799.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_24800 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_24800.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_24801 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_24801.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_24802 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_24802.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_24803 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_24803.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___24813 = arguments.length;
var i__5727__auto___24814 = (0);
while(true){
if((i__5727__auto___24814 < len__5726__auto___24813)){
args__5732__auto__.push((arguments[i__5727__auto___24814]));

var G__24815 = (i__5727__auto___24814 + (1));
i__5727__auto___24814 = G__24815;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24808){
var map__24809 = p__24808;
var map__24809__$1 = cljs.core.__destructure_map.call(null,map__24809);
var opts = map__24809__$1;
var statearr_24810_24816 = state;
(statearr_24810_24816[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_24811_24817 = state;
(statearr_24811_24817[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_24812_24818 = state;
(statearr_24812_24818[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24804){
var G__24805 = cljs.core.first.call(null,seq24804);
var seq24804__$1 = cljs.core.next.call(null,seq24804);
var G__24806 = cljs.core.first.call(null,seq24804__$1);
var seq24804__$2 = cljs.core.next.call(null,seq24804__$1);
var G__24807 = cljs.core.first.call(null,seq24804__$2);
var seq24804__$3 = cljs.core.next.call(null,seq24804__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24805,G__24806,G__24807,seq24804__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24819 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24820){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24820 = meta24820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24821,meta24820__$1){
var self__ = this;
var _24821__$1 = this;
return (new cljs.core.async.t_cljs$core$async24819(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24820__$1));
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24821){
var self__ = this;
var _24821__$1 = this;
return self__.meta24820;
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24819.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24820","meta24820",-418121620,null)], null);
}));

(cljs.core.async.t_cljs$core$async24819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24819");

(cljs.core.async.t_cljs$core$async24819.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async24819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24819.
 */
cljs.core.async.__GT_t_cljs$core$async24819 = (function cljs$core$async$mix_$___GT_t_cljs$core$async24819(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24820){
return (new cljs.core.async.t_cljs$core$async24819(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24820));
});

}

return (new cljs.core.async.t_cljs$core$async24819(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22023__auto___24934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_24889){
var state_val_24890 = (state_24889[(1)]);
if((state_val_24890 === (7))){
var inst_24849 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
if(cljs.core.truth_(inst_24849)){
var statearr_24891_24935 = state_24889__$1;
(statearr_24891_24935[(1)] = (8));

} else {
var statearr_24892_24936 = state_24889__$1;
(statearr_24892_24936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (20))){
var inst_24842 = (state_24889[(7)]);
var state_24889__$1 = state_24889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24889__$1,(23),out,inst_24842);
} else {
if((state_val_24890 === (1))){
var inst_24825 = calc_state.call(null);
var inst_24826 = cljs.core.__destructure_map.call(null,inst_24825);
var inst_24827 = cljs.core.get.call(null,inst_24826,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24828 = cljs.core.get.call(null,inst_24826,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24829 = cljs.core.get.call(null,inst_24826,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24830 = inst_24825;
var state_24889__$1 = (function (){var statearr_24893 = state_24889;
(statearr_24893[(8)] = inst_24827);

(statearr_24893[(9)] = inst_24828);

(statearr_24893[(10)] = inst_24829);

(statearr_24893[(11)] = inst_24830);

return statearr_24893;
})();
var statearr_24894_24937 = state_24889__$1;
(statearr_24894_24937[(2)] = null);

(statearr_24894_24937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (24))){
var inst_24833 = (state_24889[(12)]);
var inst_24830 = inst_24833;
var state_24889__$1 = (function (){var statearr_24895 = state_24889;
(statearr_24895[(11)] = inst_24830);

return statearr_24895;
})();
var statearr_24896_24938 = state_24889__$1;
(statearr_24896_24938[(2)] = null);

(statearr_24896_24938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (4))){
var inst_24842 = (state_24889[(7)]);
var inst_24844 = (state_24889[(13)]);
var inst_24841 = (state_24889[(2)]);
var inst_24842__$1 = cljs.core.nth.call(null,inst_24841,(0),null);
var inst_24843 = cljs.core.nth.call(null,inst_24841,(1),null);
var inst_24844__$1 = (inst_24842__$1 == null);
var state_24889__$1 = (function (){var statearr_24897 = state_24889;
(statearr_24897[(7)] = inst_24842__$1);

(statearr_24897[(14)] = inst_24843);

(statearr_24897[(13)] = inst_24844__$1);

return statearr_24897;
})();
if(cljs.core.truth_(inst_24844__$1)){
var statearr_24898_24939 = state_24889__$1;
(statearr_24898_24939[(1)] = (5));

} else {
var statearr_24899_24940 = state_24889__$1;
(statearr_24899_24940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (15))){
var inst_24834 = (state_24889[(15)]);
var inst_24863 = (state_24889[(16)]);
var inst_24863__$1 = cljs.core.empty_QMARK_.call(null,inst_24834);
var state_24889__$1 = (function (){var statearr_24900 = state_24889;
(statearr_24900[(16)] = inst_24863__$1);

return statearr_24900;
})();
if(inst_24863__$1){
var statearr_24901_24941 = state_24889__$1;
(statearr_24901_24941[(1)] = (17));

} else {
var statearr_24902_24942 = state_24889__$1;
(statearr_24902_24942[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (21))){
var inst_24833 = (state_24889[(12)]);
var inst_24830 = inst_24833;
var state_24889__$1 = (function (){var statearr_24903 = state_24889;
(statearr_24903[(11)] = inst_24830);

return statearr_24903;
})();
var statearr_24904_24943 = state_24889__$1;
(statearr_24904_24943[(2)] = null);

(statearr_24904_24943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (13))){
var inst_24856 = (state_24889[(2)]);
var inst_24857 = calc_state.call(null);
var inst_24830 = inst_24857;
var state_24889__$1 = (function (){var statearr_24905 = state_24889;
(statearr_24905[(17)] = inst_24856);

(statearr_24905[(11)] = inst_24830);

return statearr_24905;
})();
var statearr_24906_24944 = state_24889__$1;
(statearr_24906_24944[(2)] = null);

(statearr_24906_24944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (22))){
var inst_24883 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
var statearr_24907_24945 = state_24889__$1;
(statearr_24907_24945[(2)] = inst_24883);

(statearr_24907_24945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (6))){
var inst_24843 = (state_24889[(14)]);
var inst_24847 = cljs.core._EQ_.call(null,inst_24843,change);
var state_24889__$1 = state_24889;
var statearr_24908_24946 = state_24889__$1;
(statearr_24908_24946[(2)] = inst_24847);

(statearr_24908_24946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (25))){
var state_24889__$1 = state_24889;
var statearr_24909_24947 = state_24889__$1;
(statearr_24909_24947[(2)] = null);

(statearr_24909_24947[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (17))){
var inst_24835 = (state_24889[(18)]);
var inst_24843 = (state_24889[(14)]);
var inst_24865 = inst_24835.call(null,inst_24843);
var inst_24866 = cljs.core.not.call(null,inst_24865);
var state_24889__$1 = state_24889;
var statearr_24910_24948 = state_24889__$1;
(statearr_24910_24948[(2)] = inst_24866);

(statearr_24910_24948[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (3))){
var inst_24887 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24889__$1,inst_24887);
} else {
if((state_val_24890 === (12))){
var state_24889__$1 = state_24889;
var statearr_24911_24949 = state_24889__$1;
(statearr_24911_24949[(2)] = null);

(statearr_24911_24949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (2))){
var inst_24830 = (state_24889[(11)]);
var inst_24833 = (state_24889[(12)]);
var inst_24833__$1 = cljs.core.__destructure_map.call(null,inst_24830);
var inst_24834 = cljs.core.get.call(null,inst_24833__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24835 = cljs.core.get.call(null,inst_24833__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24836 = cljs.core.get.call(null,inst_24833__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24889__$1 = (function (){var statearr_24912 = state_24889;
(statearr_24912[(12)] = inst_24833__$1);

(statearr_24912[(15)] = inst_24834);

(statearr_24912[(18)] = inst_24835);

return statearr_24912;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24889__$1,(4),inst_24836);
} else {
if((state_val_24890 === (23))){
var inst_24874 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
if(cljs.core.truth_(inst_24874)){
var statearr_24913_24950 = state_24889__$1;
(statearr_24913_24950[(1)] = (24));

} else {
var statearr_24914_24951 = state_24889__$1;
(statearr_24914_24951[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (19))){
var inst_24869 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
var statearr_24915_24952 = state_24889__$1;
(statearr_24915_24952[(2)] = inst_24869);

(statearr_24915_24952[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (11))){
var inst_24843 = (state_24889[(14)]);
var inst_24853 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24843);
var state_24889__$1 = state_24889;
var statearr_24916_24953 = state_24889__$1;
(statearr_24916_24953[(2)] = inst_24853);

(statearr_24916_24953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (9))){
var inst_24834 = (state_24889[(15)]);
var inst_24843 = (state_24889[(14)]);
var inst_24860 = (state_24889[(19)]);
var inst_24860__$1 = inst_24834.call(null,inst_24843);
var state_24889__$1 = (function (){var statearr_24917 = state_24889;
(statearr_24917[(19)] = inst_24860__$1);

return statearr_24917;
})();
if(cljs.core.truth_(inst_24860__$1)){
var statearr_24918_24954 = state_24889__$1;
(statearr_24918_24954[(1)] = (14));

} else {
var statearr_24919_24955 = state_24889__$1;
(statearr_24919_24955[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (5))){
var inst_24844 = (state_24889[(13)]);
var state_24889__$1 = state_24889;
var statearr_24920_24956 = state_24889__$1;
(statearr_24920_24956[(2)] = inst_24844);

(statearr_24920_24956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (14))){
var inst_24860 = (state_24889[(19)]);
var state_24889__$1 = state_24889;
var statearr_24921_24957 = state_24889__$1;
(statearr_24921_24957[(2)] = inst_24860);

(statearr_24921_24957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (26))){
var inst_24879 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
var statearr_24922_24958 = state_24889__$1;
(statearr_24922_24958[(2)] = inst_24879);

(statearr_24922_24958[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (16))){
var inst_24871 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
if(cljs.core.truth_(inst_24871)){
var statearr_24923_24959 = state_24889__$1;
(statearr_24923_24959[(1)] = (20));

} else {
var statearr_24924_24960 = state_24889__$1;
(statearr_24924_24960[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (10))){
var inst_24885 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
var statearr_24925_24961 = state_24889__$1;
(statearr_24925_24961[(2)] = inst_24885);

(statearr_24925_24961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (18))){
var inst_24863 = (state_24889[(16)]);
var state_24889__$1 = state_24889;
var statearr_24926_24962 = state_24889__$1;
(statearr_24926_24962[(2)] = inst_24863);

(statearr_24926_24962[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (8))){
var inst_24842 = (state_24889[(7)]);
var inst_24851 = (inst_24842 == null);
var state_24889__$1 = state_24889;
if(cljs.core.truth_(inst_24851)){
var statearr_24927_24963 = state_24889__$1;
(statearr_24927_24963[(1)] = (11));

} else {
var statearr_24928_24964 = state_24889__$1;
(statearr_24928_24964[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__21899__auto__ = null;
var cljs$core$async$mix_$_state_machine__21899__auto____0 = (function (){
var statearr_24929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24929[(0)] = cljs$core$async$mix_$_state_machine__21899__auto__);

(statearr_24929[(1)] = (1));

return statearr_24929;
});
var cljs$core$async$mix_$_state_machine__21899__auto____1 = (function (state_24889){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_24889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e24930){var ex__21902__auto__ = e24930;
var statearr_24931_24965 = state_24889;
(statearr_24931_24965[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_24889[(4)]))){
var statearr_24932_24966 = state_24889;
(statearr_24932_24966[(1)] = cljs.core.first.call(null,(state_24889[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24967 = state_24889;
state_24889 = G__24967;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21899__auto__ = function(state_24889){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21899__auto____1.call(this,state_24889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21899__auto____0;
cljs$core$async$mix_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21899__auto____1;
return cljs$core$async$mix_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_24933 = f__22024__auto__.call(null);
(statearr_24933[(6)] = c__22023__auto___24934);

return statearr_24933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_24970 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_24970.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_24971 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_24971.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_24972 = (function() {
var G__24973 = null;
var G__24973__1 = (function (p){
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
var G__24973__2 = (function (p,v){
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
G__24973 = function(p,v){
switch(arguments.length){
case 1:
return G__24973__1.call(this,p);
case 2:
return G__24973__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24973.cljs$core$IFn$_invoke$arity$1 = G__24973__1;
G__24973.cljs$core$IFn$_invoke$arity$2 = G__24973__2;
return G__24973;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24969 = arguments.length;
switch (G__24969) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24972.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24972.call(null,p,v);
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
var G__24977 = arguments.length;
switch (G__24977) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__24975_SHARP_){
if(cljs.core.truth_(p1__24975_SHARP_.call(null,topic))){
return p1__24975_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24975_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24978 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24979){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24979 = meta24979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24980,meta24979__$1){
var self__ = this;
var _24980__$1 = this;
return (new cljs.core.async.t_cljs$core$async24978(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24979__$1));
}));

(cljs.core.async.t_cljs$core$async24978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24980){
var self__ = this;
var _24980__$1 = this;
return self__.meta24979;
}));

(cljs.core.async.t_cljs$core$async24978.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24978.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24978.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async24978.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async24978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async24978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async24978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24979","meta24979",1051391667,null)], null);
}));

(cljs.core.async.t_cljs$core$async24978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24978");

(cljs.core.async.t_cljs$core$async24978.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async24978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24978.
 */
cljs.core.async.__GT_t_cljs$core$async24978 = (function cljs$core$async$__GT_t_cljs$core$async24978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24979){
return (new cljs.core.async.t_cljs$core$async24978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24979));
});

}

return (new cljs.core.async.t_cljs$core$async24978(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22023__auto___25099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_25052){
var state_val_25053 = (state_25052[(1)]);
if((state_val_25053 === (7))){
var inst_25048 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25054_25100 = state_25052__$1;
(statearr_25054_25100[(2)] = inst_25048);

(statearr_25054_25100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (20))){
var state_25052__$1 = state_25052;
var statearr_25055_25101 = state_25052__$1;
(statearr_25055_25101[(2)] = null);

(statearr_25055_25101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (1))){
var state_25052__$1 = state_25052;
var statearr_25056_25102 = state_25052__$1;
(statearr_25056_25102[(2)] = null);

(statearr_25056_25102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (24))){
var inst_25031 = (state_25052[(7)]);
var inst_25040 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25031);
var state_25052__$1 = state_25052;
var statearr_25057_25103 = state_25052__$1;
(statearr_25057_25103[(2)] = inst_25040);

(statearr_25057_25103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (4))){
var inst_24983 = (state_25052[(8)]);
var inst_24983__$1 = (state_25052[(2)]);
var inst_24984 = (inst_24983__$1 == null);
var state_25052__$1 = (function (){var statearr_25058 = state_25052;
(statearr_25058[(8)] = inst_24983__$1);

return statearr_25058;
})();
if(cljs.core.truth_(inst_24984)){
var statearr_25059_25104 = state_25052__$1;
(statearr_25059_25104[(1)] = (5));

} else {
var statearr_25060_25105 = state_25052__$1;
(statearr_25060_25105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (15))){
var inst_25025 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25061_25106 = state_25052__$1;
(statearr_25061_25106[(2)] = inst_25025);

(statearr_25061_25106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (21))){
var inst_25045 = (state_25052[(2)]);
var state_25052__$1 = (function (){var statearr_25062 = state_25052;
(statearr_25062[(9)] = inst_25045);

return statearr_25062;
})();
var statearr_25063_25107 = state_25052__$1;
(statearr_25063_25107[(2)] = null);

(statearr_25063_25107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (13))){
var inst_25007 = (state_25052[(10)]);
var inst_25009 = cljs.core.chunked_seq_QMARK_.call(null,inst_25007);
var state_25052__$1 = state_25052;
if(inst_25009){
var statearr_25064_25108 = state_25052__$1;
(statearr_25064_25108[(1)] = (16));

} else {
var statearr_25065_25109 = state_25052__$1;
(statearr_25065_25109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (22))){
var inst_25037 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
if(cljs.core.truth_(inst_25037)){
var statearr_25066_25110 = state_25052__$1;
(statearr_25066_25110[(1)] = (23));

} else {
var statearr_25067_25111 = state_25052__$1;
(statearr_25067_25111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (6))){
var inst_24983 = (state_25052[(8)]);
var inst_25031 = (state_25052[(7)]);
var inst_25033 = (state_25052[(11)]);
var inst_25031__$1 = topic_fn.call(null,inst_24983);
var inst_25032 = cljs.core.deref.call(null,mults);
var inst_25033__$1 = cljs.core.get.call(null,inst_25032,inst_25031__$1);
var state_25052__$1 = (function (){var statearr_25068 = state_25052;
(statearr_25068[(7)] = inst_25031__$1);

(statearr_25068[(11)] = inst_25033__$1);

return statearr_25068;
})();
if(cljs.core.truth_(inst_25033__$1)){
var statearr_25069_25112 = state_25052__$1;
(statearr_25069_25112[(1)] = (19));

} else {
var statearr_25070_25113 = state_25052__$1;
(statearr_25070_25113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (25))){
var inst_25042 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25071_25114 = state_25052__$1;
(statearr_25071_25114[(2)] = inst_25042);

(statearr_25071_25114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (17))){
var inst_25007 = (state_25052[(10)]);
var inst_25016 = cljs.core.first.call(null,inst_25007);
var inst_25017 = cljs.core.async.muxch_STAR_.call(null,inst_25016);
var inst_25018 = cljs.core.async.close_BANG_.call(null,inst_25017);
var inst_25019 = cljs.core.next.call(null,inst_25007);
var inst_24993 = inst_25019;
var inst_24994 = null;
var inst_24995 = (0);
var inst_24996 = (0);
var state_25052__$1 = (function (){var statearr_25072 = state_25052;
(statearr_25072[(12)] = inst_25018);

(statearr_25072[(13)] = inst_24993);

(statearr_25072[(14)] = inst_24994);

(statearr_25072[(15)] = inst_24995);

(statearr_25072[(16)] = inst_24996);

return statearr_25072;
})();
var statearr_25073_25115 = state_25052__$1;
(statearr_25073_25115[(2)] = null);

(statearr_25073_25115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (3))){
var inst_25050 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25052__$1,inst_25050);
} else {
if((state_val_25053 === (12))){
var inst_25027 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25074_25116 = state_25052__$1;
(statearr_25074_25116[(2)] = inst_25027);

(statearr_25074_25116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (2))){
var state_25052__$1 = state_25052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25052__$1,(4),ch);
} else {
if((state_val_25053 === (23))){
var state_25052__$1 = state_25052;
var statearr_25075_25117 = state_25052__$1;
(statearr_25075_25117[(2)] = null);

(statearr_25075_25117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (19))){
var inst_25033 = (state_25052[(11)]);
var inst_24983 = (state_25052[(8)]);
var inst_25035 = cljs.core.async.muxch_STAR_.call(null,inst_25033);
var state_25052__$1 = state_25052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25052__$1,(22),inst_25035,inst_24983);
} else {
if((state_val_25053 === (11))){
var inst_24993 = (state_25052[(13)]);
var inst_25007 = (state_25052[(10)]);
var inst_25007__$1 = cljs.core.seq.call(null,inst_24993);
var state_25052__$1 = (function (){var statearr_25076 = state_25052;
(statearr_25076[(10)] = inst_25007__$1);

return statearr_25076;
})();
if(inst_25007__$1){
var statearr_25077_25118 = state_25052__$1;
(statearr_25077_25118[(1)] = (13));

} else {
var statearr_25078_25119 = state_25052__$1;
(statearr_25078_25119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (9))){
var inst_25029 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25079_25120 = state_25052__$1;
(statearr_25079_25120[(2)] = inst_25029);

(statearr_25079_25120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (5))){
var inst_24990 = cljs.core.deref.call(null,mults);
var inst_24991 = cljs.core.vals.call(null,inst_24990);
var inst_24992 = cljs.core.seq.call(null,inst_24991);
var inst_24993 = inst_24992;
var inst_24994 = null;
var inst_24995 = (0);
var inst_24996 = (0);
var state_25052__$1 = (function (){var statearr_25080 = state_25052;
(statearr_25080[(13)] = inst_24993);

(statearr_25080[(14)] = inst_24994);

(statearr_25080[(15)] = inst_24995);

(statearr_25080[(16)] = inst_24996);

return statearr_25080;
})();
var statearr_25081_25121 = state_25052__$1;
(statearr_25081_25121[(2)] = null);

(statearr_25081_25121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (14))){
var state_25052__$1 = state_25052;
var statearr_25085_25122 = state_25052__$1;
(statearr_25085_25122[(2)] = null);

(statearr_25085_25122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (16))){
var inst_25007 = (state_25052[(10)]);
var inst_25011 = cljs.core.chunk_first.call(null,inst_25007);
var inst_25012 = cljs.core.chunk_rest.call(null,inst_25007);
var inst_25013 = cljs.core.count.call(null,inst_25011);
var inst_24993 = inst_25012;
var inst_24994 = inst_25011;
var inst_24995 = inst_25013;
var inst_24996 = (0);
var state_25052__$1 = (function (){var statearr_25086 = state_25052;
(statearr_25086[(13)] = inst_24993);

(statearr_25086[(14)] = inst_24994);

(statearr_25086[(15)] = inst_24995);

(statearr_25086[(16)] = inst_24996);

return statearr_25086;
})();
var statearr_25087_25123 = state_25052__$1;
(statearr_25087_25123[(2)] = null);

(statearr_25087_25123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (10))){
var inst_24994 = (state_25052[(14)]);
var inst_24996 = (state_25052[(16)]);
var inst_24993 = (state_25052[(13)]);
var inst_24995 = (state_25052[(15)]);
var inst_25001 = cljs.core._nth.call(null,inst_24994,inst_24996);
var inst_25002 = cljs.core.async.muxch_STAR_.call(null,inst_25001);
var inst_25003 = cljs.core.async.close_BANG_.call(null,inst_25002);
var inst_25004 = (inst_24996 + (1));
var tmp25082 = inst_24995;
var tmp25083 = inst_24994;
var tmp25084 = inst_24993;
var inst_24993__$1 = tmp25084;
var inst_24994__$1 = tmp25083;
var inst_24995__$1 = tmp25082;
var inst_24996__$1 = inst_25004;
var state_25052__$1 = (function (){var statearr_25088 = state_25052;
(statearr_25088[(17)] = inst_25003);

(statearr_25088[(13)] = inst_24993__$1);

(statearr_25088[(14)] = inst_24994__$1);

(statearr_25088[(15)] = inst_24995__$1);

(statearr_25088[(16)] = inst_24996__$1);

return statearr_25088;
})();
var statearr_25089_25124 = state_25052__$1;
(statearr_25089_25124[(2)] = null);

(statearr_25089_25124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (18))){
var inst_25022 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25090_25125 = state_25052__$1;
(statearr_25090_25125[(2)] = inst_25022);

(statearr_25090_25125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (8))){
var inst_24996 = (state_25052[(16)]);
var inst_24995 = (state_25052[(15)]);
var inst_24998 = (inst_24996 < inst_24995);
var inst_24999 = inst_24998;
var state_25052__$1 = state_25052;
if(cljs.core.truth_(inst_24999)){
var statearr_25091_25126 = state_25052__$1;
(statearr_25091_25126[(1)] = (10));

} else {
var statearr_25092_25127 = state_25052__$1;
(statearr_25092_25127[(1)] = (11));

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
var cljs$core$async$state_machine__21899__auto__ = null;
var cljs$core$async$state_machine__21899__auto____0 = (function (){
var statearr_25093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25093[(0)] = cljs$core$async$state_machine__21899__auto__);

(statearr_25093[(1)] = (1));

return statearr_25093;
});
var cljs$core$async$state_machine__21899__auto____1 = (function (state_25052){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_25052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e25094){var ex__21902__auto__ = e25094;
var statearr_25095_25128 = state_25052;
(statearr_25095_25128[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_25052[(4)]))){
var statearr_25096_25129 = state_25052;
(statearr_25096_25129[(1)] = cljs.core.first.call(null,(state_25052[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25130 = state_25052;
state_25052 = G__25130;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$state_machine__21899__auto__ = function(state_25052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21899__auto____1.call(this,state_25052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21899__auto____0;
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21899__auto____1;
return cljs$core$async$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_25097 = f__22024__auto__.call(null);
(statearr_25097[(6)] = c__22023__auto___25099);

return statearr_25097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
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
var G__25132 = arguments.length;
switch (G__25132) {
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
var G__25135 = arguments.length;
switch (G__25135) {
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
var G__25138 = arguments.length;
switch (G__25138) {
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
var c__22023__auto___25216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_25181){
var state_val_25182 = (state_25181[(1)]);
if((state_val_25182 === (7))){
var state_25181__$1 = state_25181;
var statearr_25183_25217 = state_25181__$1;
(statearr_25183_25217[(2)] = null);

(statearr_25183_25217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (1))){
var state_25181__$1 = state_25181;
var statearr_25184_25218 = state_25181__$1;
(statearr_25184_25218[(2)] = null);

(statearr_25184_25218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (4))){
var inst_25142 = (state_25181[(7)]);
var inst_25141 = (state_25181[(8)]);
var inst_25144 = (inst_25142 < inst_25141);
var state_25181__$1 = state_25181;
if(cljs.core.truth_(inst_25144)){
var statearr_25185_25219 = state_25181__$1;
(statearr_25185_25219[(1)] = (6));

} else {
var statearr_25186_25220 = state_25181__$1;
(statearr_25186_25220[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (15))){
var inst_25167 = (state_25181[(9)]);
var inst_25172 = cljs.core.apply.call(null,f,inst_25167);
var state_25181__$1 = state_25181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25181__$1,(17),out,inst_25172);
} else {
if((state_val_25182 === (13))){
var inst_25167 = (state_25181[(9)]);
var inst_25167__$1 = (state_25181[(2)]);
var inst_25168 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25167__$1);
var state_25181__$1 = (function (){var statearr_25187 = state_25181;
(statearr_25187[(9)] = inst_25167__$1);

return statearr_25187;
})();
if(cljs.core.truth_(inst_25168)){
var statearr_25188_25221 = state_25181__$1;
(statearr_25188_25221[(1)] = (14));

} else {
var statearr_25189_25222 = state_25181__$1;
(statearr_25189_25222[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (6))){
var state_25181__$1 = state_25181;
var statearr_25190_25223 = state_25181__$1;
(statearr_25190_25223[(2)] = null);

(statearr_25190_25223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (17))){
var inst_25174 = (state_25181[(2)]);
var state_25181__$1 = (function (){var statearr_25192 = state_25181;
(statearr_25192[(10)] = inst_25174);

return statearr_25192;
})();
var statearr_25193_25224 = state_25181__$1;
(statearr_25193_25224[(2)] = null);

(statearr_25193_25224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (3))){
var inst_25179 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25181__$1,inst_25179);
} else {
if((state_val_25182 === (12))){
var _ = (function (){var statearr_25194 = state_25181;
(statearr_25194[(4)] = cljs.core.rest.call(null,(state_25181[(4)])));

return statearr_25194;
})();
var state_25181__$1 = state_25181;
var ex25191 = (state_25181__$1[(2)]);
var statearr_25195_25225 = state_25181__$1;
(statearr_25195_25225[(5)] = ex25191);


if((ex25191 instanceof Object)){
var statearr_25196_25226 = state_25181__$1;
(statearr_25196_25226[(1)] = (11));

(statearr_25196_25226[(5)] = null);

} else {
throw ex25191;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (2))){
var inst_25140 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25141 = cnt;
var inst_25142 = (0);
var state_25181__$1 = (function (){var statearr_25197 = state_25181;
(statearr_25197[(11)] = inst_25140);

(statearr_25197[(8)] = inst_25141);

(statearr_25197[(7)] = inst_25142);

return statearr_25197;
})();
var statearr_25198_25227 = state_25181__$1;
(statearr_25198_25227[(2)] = null);

(statearr_25198_25227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (11))){
var inst_25146 = (state_25181[(2)]);
var inst_25147 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25181__$1 = (function (){var statearr_25199 = state_25181;
(statearr_25199[(12)] = inst_25146);

return statearr_25199;
})();
var statearr_25200_25228 = state_25181__$1;
(statearr_25200_25228[(2)] = inst_25147);

(statearr_25200_25228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (9))){
var inst_25142 = (state_25181[(7)]);
var _ = (function (){var statearr_25201 = state_25181;
(statearr_25201[(4)] = cljs.core.cons.call(null,(12),(state_25181[(4)])));

return statearr_25201;
})();
var inst_25153 = chs__$1.call(null,inst_25142);
var inst_25154 = done.call(null,inst_25142);
var inst_25155 = cljs.core.async.take_BANG_.call(null,inst_25153,inst_25154);
var ___$1 = (function (){var statearr_25202 = state_25181;
(statearr_25202[(4)] = cljs.core.rest.call(null,(state_25181[(4)])));

return statearr_25202;
})();
var state_25181__$1 = state_25181;
var statearr_25203_25229 = state_25181__$1;
(statearr_25203_25229[(2)] = inst_25155);

(statearr_25203_25229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (5))){
var inst_25165 = (state_25181[(2)]);
var state_25181__$1 = (function (){var statearr_25204 = state_25181;
(statearr_25204[(13)] = inst_25165);

return statearr_25204;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25181__$1,(13),dchan);
} else {
if((state_val_25182 === (14))){
var inst_25170 = cljs.core.async.close_BANG_.call(null,out);
var state_25181__$1 = state_25181;
var statearr_25205_25230 = state_25181__$1;
(statearr_25205_25230[(2)] = inst_25170);

(statearr_25205_25230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (16))){
var inst_25177 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
var statearr_25206_25231 = state_25181__$1;
(statearr_25206_25231[(2)] = inst_25177);

(statearr_25206_25231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (10))){
var inst_25142 = (state_25181[(7)]);
var inst_25158 = (state_25181[(2)]);
var inst_25159 = (inst_25142 + (1));
var inst_25142__$1 = inst_25159;
var state_25181__$1 = (function (){var statearr_25207 = state_25181;
(statearr_25207[(14)] = inst_25158);

(statearr_25207[(7)] = inst_25142__$1);

return statearr_25207;
})();
var statearr_25208_25232 = state_25181__$1;
(statearr_25208_25232[(2)] = null);

(statearr_25208_25232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (8))){
var inst_25163 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
var statearr_25209_25233 = state_25181__$1;
(statearr_25209_25233[(2)] = inst_25163);

(statearr_25209_25233[(1)] = (5));


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
var cljs$core$async$state_machine__21899__auto__ = null;
var cljs$core$async$state_machine__21899__auto____0 = (function (){
var statearr_25210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25210[(0)] = cljs$core$async$state_machine__21899__auto__);

(statearr_25210[(1)] = (1));

return statearr_25210;
});
var cljs$core$async$state_machine__21899__auto____1 = (function (state_25181){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_25181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e25211){var ex__21902__auto__ = e25211;
var statearr_25212_25234 = state_25181;
(statearr_25212_25234[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_25181[(4)]))){
var statearr_25213_25235 = state_25181;
(statearr_25213_25235[(1)] = cljs.core.first.call(null,(state_25181[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25236 = state_25181;
state_25181 = G__25236;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$state_machine__21899__auto__ = function(state_25181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21899__auto____1.call(this,state_25181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21899__auto____0;
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21899__auto____1;
return cljs$core$async$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_25214 = f__22024__auto__.call(null);
(statearr_25214[(6)] = c__22023__auto___25216);

return statearr_25214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
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
var G__25239 = arguments.length;
switch (G__25239) {
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
var c__22023__auto___25294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_25271){
var state_val_25272 = (state_25271[(1)]);
if((state_val_25272 === (7))){
var inst_25250 = (state_25271[(7)]);
var inst_25251 = (state_25271[(8)]);
var inst_25250__$1 = (state_25271[(2)]);
var inst_25251__$1 = cljs.core.nth.call(null,inst_25250__$1,(0),null);
var inst_25252 = cljs.core.nth.call(null,inst_25250__$1,(1),null);
var inst_25253 = (inst_25251__$1 == null);
var state_25271__$1 = (function (){var statearr_25273 = state_25271;
(statearr_25273[(7)] = inst_25250__$1);

(statearr_25273[(8)] = inst_25251__$1);

(statearr_25273[(9)] = inst_25252);

return statearr_25273;
})();
if(cljs.core.truth_(inst_25253)){
var statearr_25274_25295 = state_25271__$1;
(statearr_25274_25295[(1)] = (8));

} else {
var statearr_25275_25296 = state_25271__$1;
(statearr_25275_25296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (1))){
var inst_25240 = cljs.core.vec.call(null,chs);
var inst_25241 = inst_25240;
var state_25271__$1 = (function (){var statearr_25276 = state_25271;
(statearr_25276[(10)] = inst_25241);

return statearr_25276;
})();
var statearr_25277_25297 = state_25271__$1;
(statearr_25277_25297[(2)] = null);

(statearr_25277_25297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (4))){
var inst_25241 = (state_25271[(10)]);
var state_25271__$1 = state_25271;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25271__$1,(7),inst_25241);
} else {
if((state_val_25272 === (6))){
var inst_25267 = (state_25271[(2)]);
var state_25271__$1 = state_25271;
var statearr_25278_25298 = state_25271__$1;
(statearr_25278_25298[(2)] = inst_25267);

(statearr_25278_25298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (3))){
var inst_25269 = (state_25271[(2)]);
var state_25271__$1 = state_25271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25271__$1,inst_25269);
} else {
if((state_val_25272 === (2))){
var inst_25241 = (state_25271[(10)]);
var inst_25243 = cljs.core.count.call(null,inst_25241);
var inst_25244 = (inst_25243 > (0));
var state_25271__$1 = state_25271;
if(cljs.core.truth_(inst_25244)){
var statearr_25280_25299 = state_25271__$1;
(statearr_25280_25299[(1)] = (4));

} else {
var statearr_25281_25300 = state_25271__$1;
(statearr_25281_25300[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (11))){
var inst_25241 = (state_25271[(10)]);
var inst_25260 = (state_25271[(2)]);
var tmp25279 = inst_25241;
var inst_25241__$1 = tmp25279;
var state_25271__$1 = (function (){var statearr_25282 = state_25271;
(statearr_25282[(11)] = inst_25260);

(statearr_25282[(10)] = inst_25241__$1);

return statearr_25282;
})();
var statearr_25283_25301 = state_25271__$1;
(statearr_25283_25301[(2)] = null);

(statearr_25283_25301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (9))){
var inst_25251 = (state_25271[(8)]);
var state_25271__$1 = state_25271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25271__$1,(11),out,inst_25251);
} else {
if((state_val_25272 === (5))){
var inst_25265 = cljs.core.async.close_BANG_.call(null,out);
var state_25271__$1 = state_25271;
var statearr_25284_25302 = state_25271__$1;
(statearr_25284_25302[(2)] = inst_25265);

(statearr_25284_25302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (10))){
var inst_25263 = (state_25271[(2)]);
var state_25271__$1 = state_25271;
var statearr_25285_25303 = state_25271__$1;
(statearr_25285_25303[(2)] = inst_25263);

(statearr_25285_25303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25272 === (8))){
var inst_25241 = (state_25271[(10)]);
var inst_25250 = (state_25271[(7)]);
var inst_25251 = (state_25271[(8)]);
var inst_25252 = (state_25271[(9)]);
var inst_25255 = (function (){var cs = inst_25241;
var vec__25246 = inst_25250;
var v = inst_25251;
var c = inst_25252;
return (function (p1__25237_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25237_SHARP_);
});
})();
var inst_25256 = cljs.core.filterv.call(null,inst_25255,inst_25241);
var inst_25241__$1 = inst_25256;
var state_25271__$1 = (function (){var statearr_25286 = state_25271;
(statearr_25286[(10)] = inst_25241__$1);

return statearr_25286;
})();
var statearr_25287_25304 = state_25271__$1;
(statearr_25287_25304[(2)] = null);

(statearr_25287_25304[(1)] = (2));


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
var cljs$core$async$state_machine__21899__auto__ = null;
var cljs$core$async$state_machine__21899__auto____0 = (function (){
var statearr_25288 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25288[(0)] = cljs$core$async$state_machine__21899__auto__);

(statearr_25288[(1)] = (1));

return statearr_25288;
});
var cljs$core$async$state_machine__21899__auto____1 = (function (state_25271){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_25271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e25289){var ex__21902__auto__ = e25289;
var statearr_25290_25305 = state_25271;
(statearr_25290_25305[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_25271[(4)]))){
var statearr_25291_25306 = state_25271;
(statearr_25291_25306[(1)] = cljs.core.first.call(null,(state_25271[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25307 = state_25271;
state_25271 = G__25307;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$state_machine__21899__auto__ = function(state_25271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21899__auto____1.call(this,state_25271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21899__auto____0;
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21899__auto____1;
return cljs$core$async$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_25292 = f__22024__auto__.call(null);
(statearr_25292[(6)] = c__22023__auto___25294);

return statearr_25292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
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
var G__25309 = arguments.length;
switch (G__25309) {
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
var c__22023__auto___25355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_25333){
var state_val_25334 = (state_25333[(1)]);
if((state_val_25334 === (7))){
var inst_25315 = (state_25333[(7)]);
var inst_25315__$1 = (state_25333[(2)]);
var inst_25316 = (inst_25315__$1 == null);
var inst_25317 = cljs.core.not.call(null,inst_25316);
var state_25333__$1 = (function (){var statearr_25335 = state_25333;
(statearr_25335[(7)] = inst_25315__$1);

return statearr_25335;
})();
if(inst_25317){
var statearr_25336_25356 = state_25333__$1;
(statearr_25336_25356[(1)] = (8));

} else {
var statearr_25337_25357 = state_25333__$1;
(statearr_25337_25357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (1))){
var inst_25310 = (0);
var state_25333__$1 = (function (){var statearr_25338 = state_25333;
(statearr_25338[(8)] = inst_25310);

return statearr_25338;
})();
var statearr_25339_25358 = state_25333__$1;
(statearr_25339_25358[(2)] = null);

(statearr_25339_25358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (4))){
var state_25333__$1 = state_25333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25333__$1,(7),ch);
} else {
if((state_val_25334 === (6))){
var inst_25328 = (state_25333[(2)]);
var state_25333__$1 = state_25333;
var statearr_25340_25359 = state_25333__$1;
(statearr_25340_25359[(2)] = inst_25328);

(statearr_25340_25359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (3))){
var inst_25330 = (state_25333[(2)]);
var inst_25331 = cljs.core.async.close_BANG_.call(null,out);
var state_25333__$1 = (function (){var statearr_25341 = state_25333;
(statearr_25341[(9)] = inst_25330);

return statearr_25341;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25333__$1,inst_25331);
} else {
if((state_val_25334 === (2))){
var inst_25310 = (state_25333[(8)]);
var inst_25312 = (inst_25310 < n);
var state_25333__$1 = state_25333;
if(cljs.core.truth_(inst_25312)){
var statearr_25342_25360 = state_25333__$1;
(statearr_25342_25360[(1)] = (4));

} else {
var statearr_25343_25361 = state_25333__$1;
(statearr_25343_25361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (11))){
var inst_25310 = (state_25333[(8)]);
var inst_25320 = (state_25333[(2)]);
var inst_25321 = (inst_25310 + (1));
var inst_25310__$1 = inst_25321;
var state_25333__$1 = (function (){var statearr_25344 = state_25333;
(statearr_25344[(10)] = inst_25320);

(statearr_25344[(8)] = inst_25310__$1);

return statearr_25344;
})();
var statearr_25345_25362 = state_25333__$1;
(statearr_25345_25362[(2)] = null);

(statearr_25345_25362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (9))){
var state_25333__$1 = state_25333;
var statearr_25346_25363 = state_25333__$1;
(statearr_25346_25363[(2)] = null);

(statearr_25346_25363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (5))){
var state_25333__$1 = state_25333;
var statearr_25347_25364 = state_25333__$1;
(statearr_25347_25364[(2)] = null);

(statearr_25347_25364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (10))){
var inst_25325 = (state_25333[(2)]);
var state_25333__$1 = state_25333;
var statearr_25348_25365 = state_25333__$1;
(statearr_25348_25365[(2)] = inst_25325);

(statearr_25348_25365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (8))){
var inst_25315 = (state_25333[(7)]);
var state_25333__$1 = state_25333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25333__$1,(11),out,inst_25315);
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
var cljs$core$async$state_machine__21899__auto__ = null;
var cljs$core$async$state_machine__21899__auto____0 = (function (){
var statearr_25349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25349[(0)] = cljs$core$async$state_machine__21899__auto__);

(statearr_25349[(1)] = (1));

return statearr_25349;
});
var cljs$core$async$state_machine__21899__auto____1 = (function (state_25333){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_25333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e25350){var ex__21902__auto__ = e25350;
var statearr_25351_25366 = state_25333;
(statearr_25351_25366[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_25333[(4)]))){
var statearr_25352_25367 = state_25333;
(statearr_25352_25367[(1)] = cljs.core.first.call(null,(state_25333[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25368 = state_25333;
state_25333 = G__25368;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$state_machine__21899__auto__ = function(state_25333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21899__auto____1.call(this,state_25333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21899__auto____0;
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21899__auto____1;
return cljs$core$async$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_25353 = f__22024__auto__.call(null);
(statearr_25353[(6)] = c__22023__auto___25355);

return statearr_25353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25370 = (function (f,ch,meta25371){
this.f = f;
this.ch = ch;
this.meta25371 = meta25371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25372,meta25371__$1){
var self__ = this;
var _25372__$1 = this;
return (new cljs.core.async.t_cljs$core$async25370(self__.f,self__.ch,meta25371__$1));
}));

(cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25372){
var self__ = this;
var _25372__$1 = this;
return self__.meta25371;
}));

(cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25373 = (function (f,ch,meta25371,_,fn1,meta25374){
this.f = f;
this.ch = ch;
this.meta25371 = meta25371;
this._ = _;
this.fn1 = fn1;
this.meta25374 = meta25374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25375,meta25374__$1){
var self__ = this;
var _25375__$1 = this;
return (new cljs.core.async.t_cljs$core$async25373(self__.f,self__.ch,self__.meta25371,self__._,self__.fn1,meta25374__$1));
}));

(cljs.core.async.t_cljs$core$async25373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25375){
var self__ = this;
var _25375__$1 = this;
return self__.meta25374;
}));

(cljs.core.async.t_cljs$core$async25373.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__25369_SHARP_){
return f1.call(null,(((p1__25369_SHARP_ == null))?null:self__.f.call(null,p1__25369_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async25373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25371","meta25371",1127910191,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25370","cljs.core.async/t_cljs$core$async25370",928642101,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25374","meta25374",137790779,null)], null);
}));

(cljs.core.async.t_cljs$core$async25373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25373");

(cljs.core.async.t_cljs$core$async25373.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async25373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25373.
 */
cljs.core.async.__GT_t_cljs$core$async25373 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25373(f__$1,ch__$1,meta25371__$1,___$2,fn1__$1,meta25374){
return (new cljs.core.async.t_cljs$core$async25373(f__$1,ch__$1,meta25371__$1,___$2,fn1__$1,meta25374));
});

}

return (new cljs.core.async.t_cljs$core$async25373(self__.f,self__.ch,self__.meta25371,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25371","meta25371",1127910191,null)], null);
}));

(cljs.core.async.t_cljs$core$async25370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25370");

(cljs.core.async.t_cljs$core$async25370.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async25370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25370.
 */
cljs.core.async.__GT_t_cljs$core$async25370 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25370(f__$1,ch__$1,meta25371){
return (new cljs.core.async.t_cljs$core$async25370(f__$1,ch__$1,meta25371));
});

}

return (new cljs.core.async.t_cljs$core$async25370(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25376 = (function (f,ch,meta25377){
this.f = f;
this.ch = ch;
this.meta25377 = meta25377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25378,meta25377__$1){
var self__ = this;
var _25378__$1 = this;
return (new cljs.core.async.t_cljs$core$async25376(self__.f,self__.ch,meta25377__$1));
}));

(cljs.core.async.t_cljs$core$async25376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25378){
var self__ = this;
var _25378__$1 = this;
return self__.meta25377;
}));

(cljs.core.async.t_cljs$core$async25376.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25376.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25376.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async25376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25377","meta25377",-1751932205,null)], null);
}));

(cljs.core.async.t_cljs$core$async25376.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25376");

(cljs.core.async.t_cljs$core$async25376.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async25376");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25376.
 */
cljs.core.async.__GT_t_cljs$core$async25376 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25376(f__$1,ch__$1,meta25377){
return (new cljs.core.async.t_cljs$core$async25376(f__$1,ch__$1,meta25377));
});

}

return (new cljs.core.async.t_cljs$core$async25376(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25379 = (function (p,ch,meta25380){
this.p = p;
this.ch = ch;
this.meta25380 = meta25380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25381,meta25380__$1){
var self__ = this;
var _25381__$1 = this;
return (new cljs.core.async.t_cljs$core$async25379(self__.p,self__.ch,meta25380__$1));
}));

(cljs.core.async.t_cljs$core$async25379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25381){
var self__ = this;
var _25381__$1 = this;
return self__.meta25380;
}));

(cljs.core.async.t_cljs$core$async25379.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25379.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25379.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25380","meta25380",113318582,null)], null);
}));

(cljs.core.async.t_cljs$core$async25379.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25379");

(cljs.core.async.t_cljs$core$async25379.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async25379");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25379.
 */
cljs.core.async.__GT_t_cljs$core$async25379 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25379(p__$1,ch__$1,meta25380){
return (new cljs.core.async.t_cljs$core$async25379(p__$1,ch__$1,meta25380));
});

}

return (new cljs.core.async.t_cljs$core$async25379(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25383 = arguments.length;
switch (G__25383) {
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
var c__22023__auto___25424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_25404){
var state_val_25405 = (state_25404[(1)]);
if((state_val_25405 === (7))){
var inst_25400 = (state_25404[(2)]);
var state_25404__$1 = state_25404;
var statearr_25406_25425 = state_25404__$1;
(statearr_25406_25425[(2)] = inst_25400);

(statearr_25406_25425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (1))){
var state_25404__$1 = state_25404;
var statearr_25407_25426 = state_25404__$1;
(statearr_25407_25426[(2)] = null);

(statearr_25407_25426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (4))){
var inst_25386 = (state_25404[(7)]);
var inst_25386__$1 = (state_25404[(2)]);
var inst_25387 = (inst_25386__$1 == null);
var state_25404__$1 = (function (){var statearr_25408 = state_25404;
(statearr_25408[(7)] = inst_25386__$1);

return statearr_25408;
})();
if(cljs.core.truth_(inst_25387)){
var statearr_25409_25427 = state_25404__$1;
(statearr_25409_25427[(1)] = (5));

} else {
var statearr_25410_25428 = state_25404__$1;
(statearr_25410_25428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (6))){
var inst_25386 = (state_25404[(7)]);
var inst_25391 = p.call(null,inst_25386);
var state_25404__$1 = state_25404;
if(cljs.core.truth_(inst_25391)){
var statearr_25411_25429 = state_25404__$1;
(statearr_25411_25429[(1)] = (8));

} else {
var statearr_25412_25430 = state_25404__$1;
(statearr_25412_25430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (3))){
var inst_25402 = (state_25404[(2)]);
var state_25404__$1 = state_25404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25404__$1,inst_25402);
} else {
if((state_val_25405 === (2))){
var state_25404__$1 = state_25404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25404__$1,(4),ch);
} else {
if((state_val_25405 === (11))){
var inst_25394 = (state_25404[(2)]);
var state_25404__$1 = state_25404;
var statearr_25413_25431 = state_25404__$1;
(statearr_25413_25431[(2)] = inst_25394);

(statearr_25413_25431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (9))){
var state_25404__$1 = state_25404;
var statearr_25414_25432 = state_25404__$1;
(statearr_25414_25432[(2)] = null);

(statearr_25414_25432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (5))){
var inst_25389 = cljs.core.async.close_BANG_.call(null,out);
var state_25404__$1 = state_25404;
var statearr_25415_25433 = state_25404__$1;
(statearr_25415_25433[(2)] = inst_25389);

(statearr_25415_25433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (10))){
var inst_25397 = (state_25404[(2)]);
var state_25404__$1 = (function (){var statearr_25416 = state_25404;
(statearr_25416[(8)] = inst_25397);

return statearr_25416;
})();
var statearr_25417_25434 = state_25404__$1;
(statearr_25417_25434[(2)] = null);

(statearr_25417_25434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (8))){
var inst_25386 = (state_25404[(7)]);
var state_25404__$1 = state_25404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25404__$1,(11),out,inst_25386);
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
var cljs$core$async$state_machine__21899__auto__ = null;
var cljs$core$async$state_machine__21899__auto____0 = (function (){
var statearr_25418 = [null,null,null,null,null,null,null,null,null];
(statearr_25418[(0)] = cljs$core$async$state_machine__21899__auto__);

(statearr_25418[(1)] = (1));

return statearr_25418;
});
var cljs$core$async$state_machine__21899__auto____1 = (function (state_25404){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_25404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e25419){var ex__21902__auto__ = e25419;
var statearr_25420_25435 = state_25404;
(statearr_25420_25435[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_25404[(4)]))){
var statearr_25421_25436 = state_25404;
(statearr_25421_25436[(1)] = cljs.core.first.call(null,(state_25404[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25437 = state_25404;
state_25404 = G__25437;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$state_machine__21899__auto__ = function(state_25404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21899__auto____1.call(this,state_25404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21899__auto____0;
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21899__auto____1;
return cljs$core$async$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_25422 = f__22024__auto__.call(null);
(statearr_25422[(6)] = c__22023__auto___25424);

return statearr_25422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25439 = arguments.length;
switch (G__25439) {
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
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_25502){
var state_val_25503 = (state_25502[(1)]);
if((state_val_25503 === (7))){
var inst_25498 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
var statearr_25504_25543 = state_25502__$1;
(statearr_25504_25543[(2)] = inst_25498);

(statearr_25504_25543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (20))){
var inst_25468 = (state_25502[(7)]);
var inst_25479 = (state_25502[(2)]);
var inst_25480 = cljs.core.next.call(null,inst_25468);
var inst_25454 = inst_25480;
var inst_25455 = null;
var inst_25456 = (0);
var inst_25457 = (0);
var state_25502__$1 = (function (){var statearr_25505 = state_25502;
(statearr_25505[(8)] = inst_25479);

(statearr_25505[(9)] = inst_25454);

(statearr_25505[(10)] = inst_25455);

(statearr_25505[(11)] = inst_25456);

(statearr_25505[(12)] = inst_25457);

return statearr_25505;
})();
var statearr_25506_25544 = state_25502__$1;
(statearr_25506_25544[(2)] = null);

(statearr_25506_25544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (1))){
var state_25502__$1 = state_25502;
var statearr_25507_25545 = state_25502__$1;
(statearr_25507_25545[(2)] = null);

(statearr_25507_25545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (4))){
var inst_25443 = (state_25502[(13)]);
var inst_25443__$1 = (state_25502[(2)]);
var inst_25444 = (inst_25443__$1 == null);
var state_25502__$1 = (function (){var statearr_25508 = state_25502;
(statearr_25508[(13)] = inst_25443__$1);

return statearr_25508;
})();
if(cljs.core.truth_(inst_25444)){
var statearr_25509_25546 = state_25502__$1;
(statearr_25509_25546[(1)] = (5));

} else {
var statearr_25510_25547 = state_25502__$1;
(statearr_25510_25547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (15))){
var state_25502__$1 = state_25502;
var statearr_25514_25548 = state_25502__$1;
(statearr_25514_25548[(2)] = null);

(statearr_25514_25548[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (21))){
var state_25502__$1 = state_25502;
var statearr_25515_25549 = state_25502__$1;
(statearr_25515_25549[(2)] = null);

(statearr_25515_25549[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (13))){
var inst_25457 = (state_25502[(12)]);
var inst_25454 = (state_25502[(9)]);
var inst_25455 = (state_25502[(10)]);
var inst_25456 = (state_25502[(11)]);
var inst_25464 = (state_25502[(2)]);
var inst_25465 = (inst_25457 + (1));
var tmp25511 = inst_25456;
var tmp25512 = inst_25454;
var tmp25513 = inst_25455;
var inst_25454__$1 = tmp25512;
var inst_25455__$1 = tmp25513;
var inst_25456__$1 = tmp25511;
var inst_25457__$1 = inst_25465;
var state_25502__$1 = (function (){var statearr_25516 = state_25502;
(statearr_25516[(14)] = inst_25464);

(statearr_25516[(9)] = inst_25454__$1);

(statearr_25516[(10)] = inst_25455__$1);

(statearr_25516[(11)] = inst_25456__$1);

(statearr_25516[(12)] = inst_25457__$1);

return statearr_25516;
})();
var statearr_25517_25550 = state_25502__$1;
(statearr_25517_25550[(2)] = null);

(statearr_25517_25550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (22))){
var state_25502__$1 = state_25502;
var statearr_25518_25551 = state_25502__$1;
(statearr_25518_25551[(2)] = null);

(statearr_25518_25551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (6))){
var inst_25443 = (state_25502[(13)]);
var inst_25452 = f.call(null,inst_25443);
var inst_25453 = cljs.core.seq.call(null,inst_25452);
var inst_25454 = inst_25453;
var inst_25455 = null;
var inst_25456 = (0);
var inst_25457 = (0);
var state_25502__$1 = (function (){var statearr_25519 = state_25502;
(statearr_25519[(9)] = inst_25454);

(statearr_25519[(10)] = inst_25455);

(statearr_25519[(11)] = inst_25456);

(statearr_25519[(12)] = inst_25457);

return statearr_25519;
})();
var statearr_25520_25552 = state_25502__$1;
(statearr_25520_25552[(2)] = null);

(statearr_25520_25552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (17))){
var inst_25468 = (state_25502[(7)]);
var inst_25472 = cljs.core.chunk_first.call(null,inst_25468);
var inst_25473 = cljs.core.chunk_rest.call(null,inst_25468);
var inst_25474 = cljs.core.count.call(null,inst_25472);
var inst_25454 = inst_25473;
var inst_25455 = inst_25472;
var inst_25456 = inst_25474;
var inst_25457 = (0);
var state_25502__$1 = (function (){var statearr_25521 = state_25502;
(statearr_25521[(9)] = inst_25454);

(statearr_25521[(10)] = inst_25455);

(statearr_25521[(11)] = inst_25456);

(statearr_25521[(12)] = inst_25457);

return statearr_25521;
})();
var statearr_25522_25553 = state_25502__$1;
(statearr_25522_25553[(2)] = null);

(statearr_25522_25553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (3))){
var inst_25500 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25502__$1,inst_25500);
} else {
if((state_val_25503 === (12))){
var inst_25488 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
var statearr_25523_25554 = state_25502__$1;
(statearr_25523_25554[(2)] = inst_25488);

(statearr_25523_25554[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (2))){
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25502__$1,(4),in$);
} else {
if((state_val_25503 === (23))){
var inst_25496 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
var statearr_25524_25555 = state_25502__$1;
(statearr_25524_25555[(2)] = inst_25496);

(statearr_25524_25555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (19))){
var inst_25483 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
var statearr_25525_25556 = state_25502__$1;
(statearr_25525_25556[(2)] = inst_25483);

(statearr_25525_25556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (11))){
var inst_25454 = (state_25502[(9)]);
var inst_25468 = (state_25502[(7)]);
var inst_25468__$1 = cljs.core.seq.call(null,inst_25454);
var state_25502__$1 = (function (){var statearr_25526 = state_25502;
(statearr_25526[(7)] = inst_25468__$1);

return statearr_25526;
})();
if(inst_25468__$1){
var statearr_25527_25557 = state_25502__$1;
(statearr_25527_25557[(1)] = (14));

} else {
var statearr_25528_25558 = state_25502__$1;
(statearr_25528_25558[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (9))){
var inst_25490 = (state_25502[(2)]);
var inst_25491 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25502__$1 = (function (){var statearr_25529 = state_25502;
(statearr_25529[(15)] = inst_25490);

return statearr_25529;
})();
if(cljs.core.truth_(inst_25491)){
var statearr_25530_25559 = state_25502__$1;
(statearr_25530_25559[(1)] = (21));

} else {
var statearr_25531_25560 = state_25502__$1;
(statearr_25531_25560[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (5))){
var inst_25446 = cljs.core.async.close_BANG_.call(null,out);
var state_25502__$1 = state_25502;
var statearr_25532_25561 = state_25502__$1;
(statearr_25532_25561[(2)] = inst_25446);

(statearr_25532_25561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (14))){
var inst_25468 = (state_25502[(7)]);
var inst_25470 = cljs.core.chunked_seq_QMARK_.call(null,inst_25468);
var state_25502__$1 = state_25502;
if(inst_25470){
var statearr_25533_25562 = state_25502__$1;
(statearr_25533_25562[(1)] = (17));

} else {
var statearr_25534_25563 = state_25502__$1;
(statearr_25534_25563[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (16))){
var inst_25486 = (state_25502[(2)]);
var state_25502__$1 = state_25502;
var statearr_25535_25564 = state_25502__$1;
(statearr_25535_25564[(2)] = inst_25486);

(statearr_25535_25564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25503 === (10))){
var inst_25455 = (state_25502[(10)]);
var inst_25457 = (state_25502[(12)]);
var inst_25462 = cljs.core._nth.call(null,inst_25455,inst_25457);
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25502__$1,(13),out,inst_25462);
} else {
if((state_val_25503 === (18))){
var inst_25468 = (state_25502[(7)]);
var inst_25477 = cljs.core.first.call(null,inst_25468);
var state_25502__$1 = state_25502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25502__$1,(20),out,inst_25477);
} else {
if((state_val_25503 === (8))){
var inst_25457 = (state_25502[(12)]);
var inst_25456 = (state_25502[(11)]);
var inst_25459 = (inst_25457 < inst_25456);
var inst_25460 = inst_25459;
var state_25502__$1 = state_25502;
if(cljs.core.truth_(inst_25460)){
var statearr_25536_25565 = state_25502__$1;
(statearr_25536_25565[(1)] = (10));

} else {
var statearr_25537_25566 = state_25502__$1;
(statearr_25537_25566[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__21899__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21899__auto____0 = (function (){
var statearr_25538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25538[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21899__auto__);

(statearr_25538[(1)] = (1));

return statearr_25538;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21899__auto____1 = (function (state_25502){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_25502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e25539){var ex__21902__auto__ = e25539;
var statearr_25540_25567 = state_25502;
(statearr_25540_25567[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_25502[(4)]))){
var statearr_25541_25568 = state_25502;
(statearr_25541_25568[(1)] = cljs.core.first.call(null,(state_25502[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25569 = state_25502;
state_25502 = G__25569;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21899__auto__ = function(state_25502){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21899__auto____1.call(this,state_25502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21899__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21899__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_25542 = f__22024__auto__.call(null);
(statearr_25542[(6)] = c__22023__auto__);

return statearr_25542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25571 = arguments.length;
switch (G__25571) {
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
var G__25574 = arguments.length;
switch (G__25574) {
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
var G__25577 = arguments.length;
switch (G__25577) {
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
var c__22023__auto___25625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_25601){
var state_val_25602 = (state_25601[(1)]);
if((state_val_25602 === (7))){
var inst_25596 = (state_25601[(2)]);
var state_25601__$1 = state_25601;
var statearr_25603_25626 = state_25601__$1;
(statearr_25603_25626[(2)] = inst_25596);

(statearr_25603_25626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (1))){
var inst_25578 = null;
var state_25601__$1 = (function (){var statearr_25604 = state_25601;
(statearr_25604[(7)] = inst_25578);

return statearr_25604;
})();
var statearr_25605_25627 = state_25601__$1;
(statearr_25605_25627[(2)] = null);

(statearr_25605_25627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (4))){
var inst_25581 = (state_25601[(8)]);
var inst_25581__$1 = (state_25601[(2)]);
var inst_25582 = (inst_25581__$1 == null);
var inst_25583 = cljs.core.not.call(null,inst_25582);
var state_25601__$1 = (function (){var statearr_25606 = state_25601;
(statearr_25606[(8)] = inst_25581__$1);

return statearr_25606;
})();
if(inst_25583){
var statearr_25607_25628 = state_25601__$1;
(statearr_25607_25628[(1)] = (5));

} else {
var statearr_25608_25629 = state_25601__$1;
(statearr_25608_25629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (6))){
var state_25601__$1 = state_25601;
var statearr_25609_25630 = state_25601__$1;
(statearr_25609_25630[(2)] = null);

(statearr_25609_25630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (3))){
var inst_25598 = (state_25601[(2)]);
var inst_25599 = cljs.core.async.close_BANG_.call(null,out);
var state_25601__$1 = (function (){var statearr_25610 = state_25601;
(statearr_25610[(9)] = inst_25598);

return statearr_25610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25601__$1,inst_25599);
} else {
if((state_val_25602 === (2))){
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25601__$1,(4),ch);
} else {
if((state_val_25602 === (11))){
var inst_25581 = (state_25601[(8)]);
var inst_25590 = (state_25601[(2)]);
var inst_25578 = inst_25581;
var state_25601__$1 = (function (){var statearr_25611 = state_25601;
(statearr_25611[(10)] = inst_25590);

(statearr_25611[(7)] = inst_25578);

return statearr_25611;
})();
var statearr_25612_25631 = state_25601__$1;
(statearr_25612_25631[(2)] = null);

(statearr_25612_25631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (9))){
var inst_25581 = (state_25601[(8)]);
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25601__$1,(11),out,inst_25581);
} else {
if((state_val_25602 === (5))){
var inst_25581 = (state_25601[(8)]);
var inst_25578 = (state_25601[(7)]);
var inst_25585 = cljs.core._EQ_.call(null,inst_25581,inst_25578);
var state_25601__$1 = state_25601;
if(inst_25585){
var statearr_25614_25632 = state_25601__$1;
(statearr_25614_25632[(1)] = (8));

} else {
var statearr_25615_25633 = state_25601__$1;
(statearr_25615_25633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (10))){
var inst_25593 = (state_25601[(2)]);
var state_25601__$1 = state_25601;
var statearr_25616_25634 = state_25601__$1;
(statearr_25616_25634[(2)] = inst_25593);

(statearr_25616_25634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (8))){
var inst_25578 = (state_25601[(7)]);
var tmp25613 = inst_25578;
var inst_25578__$1 = tmp25613;
var state_25601__$1 = (function (){var statearr_25617 = state_25601;
(statearr_25617[(7)] = inst_25578__$1);

return statearr_25617;
})();
var statearr_25618_25635 = state_25601__$1;
(statearr_25618_25635[(2)] = null);

(statearr_25618_25635[(1)] = (2));


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
var cljs$core$async$state_machine__21899__auto__ = null;
var cljs$core$async$state_machine__21899__auto____0 = (function (){
var statearr_25619 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25619[(0)] = cljs$core$async$state_machine__21899__auto__);

(statearr_25619[(1)] = (1));

return statearr_25619;
});
var cljs$core$async$state_machine__21899__auto____1 = (function (state_25601){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_25601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e25620){var ex__21902__auto__ = e25620;
var statearr_25621_25636 = state_25601;
(statearr_25621_25636[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_25601[(4)]))){
var statearr_25622_25637 = state_25601;
(statearr_25622_25637[(1)] = cljs.core.first.call(null,(state_25601[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25638 = state_25601;
state_25601 = G__25638;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$state_machine__21899__auto__ = function(state_25601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21899__auto____1.call(this,state_25601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21899__auto____0;
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21899__auto____1;
return cljs$core$async$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_25623 = f__22024__auto__.call(null);
(statearr_25623[(6)] = c__22023__auto___25625);

return statearr_25623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25640 = arguments.length;
switch (G__25640) {
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
var c__22023__auto___25707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_25678){
var state_val_25679 = (state_25678[(1)]);
if((state_val_25679 === (7))){
var inst_25674 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25680_25708 = state_25678__$1;
(statearr_25680_25708[(2)] = inst_25674);

(statearr_25680_25708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (1))){
var inst_25641 = (new Array(n));
var inst_25642 = inst_25641;
var inst_25643 = (0);
var state_25678__$1 = (function (){var statearr_25681 = state_25678;
(statearr_25681[(7)] = inst_25642);

(statearr_25681[(8)] = inst_25643);

return statearr_25681;
})();
var statearr_25682_25709 = state_25678__$1;
(statearr_25682_25709[(2)] = null);

(statearr_25682_25709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (4))){
var inst_25646 = (state_25678[(9)]);
var inst_25646__$1 = (state_25678[(2)]);
var inst_25647 = (inst_25646__$1 == null);
var inst_25648 = cljs.core.not.call(null,inst_25647);
var state_25678__$1 = (function (){var statearr_25683 = state_25678;
(statearr_25683[(9)] = inst_25646__$1);

return statearr_25683;
})();
if(inst_25648){
var statearr_25684_25710 = state_25678__$1;
(statearr_25684_25710[(1)] = (5));

} else {
var statearr_25685_25711 = state_25678__$1;
(statearr_25685_25711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (15))){
var inst_25668 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25686_25712 = state_25678__$1;
(statearr_25686_25712[(2)] = inst_25668);

(statearr_25686_25712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (13))){
var state_25678__$1 = state_25678;
var statearr_25687_25713 = state_25678__$1;
(statearr_25687_25713[(2)] = null);

(statearr_25687_25713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (6))){
var inst_25643 = (state_25678[(8)]);
var inst_25664 = (inst_25643 > (0));
var state_25678__$1 = state_25678;
if(cljs.core.truth_(inst_25664)){
var statearr_25688_25714 = state_25678__$1;
(statearr_25688_25714[(1)] = (12));

} else {
var statearr_25689_25715 = state_25678__$1;
(statearr_25689_25715[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (3))){
var inst_25676 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25678__$1,inst_25676);
} else {
if((state_val_25679 === (12))){
var inst_25642 = (state_25678[(7)]);
var inst_25666 = cljs.core.vec.call(null,inst_25642);
var state_25678__$1 = state_25678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25678__$1,(15),out,inst_25666);
} else {
if((state_val_25679 === (2))){
var state_25678__$1 = state_25678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25678__$1,(4),ch);
} else {
if((state_val_25679 === (11))){
var inst_25658 = (state_25678[(2)]);
var inst_25659 = (new Array(n));
var inst_25642 = inst_25659;
var inst_25643 = (0);
var state_25678__$1 = (function (){var statearr_25690 = state_25678;
(statearr_25690[(10)] = inst_25658);

(statearr_25690[(7)] = inst_25642);

(statearr_25690[(8)] = inst_25643);

return statearr_25690;
})();
var statearr_25691_25716 = state_25678__$1;
(statearr_25691_25716[(2)] = null);

(statearr_25691_25716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (9))){
var inst_25642 = (state_25678[(7)]);
var inst_25656 = cljs.core.vec.call(null,inst_25642);
var state_25678__$1 = state_25678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25678__$1,(11),out,inst_25656);
} else {
if((state_val_25679 === (5))){
var inst_25642 = (state_25678[(7)]);
var inst_25643 = (state_25678[(8)]);
var inst_25646 = (state_25678[(9)]);
var inst_25651 = (state_25678[(11)]);
var inst_25650 = (inst_25642[inst_25643] = inst_25646);
var inst_25651__$1 = (inst_25643 + (1));
var inst_25652 = (inst_25651__$1 < n);
var state_25678__$1 = (function (){var statearr_25692 = state_25678;
(statearr_25692[(12)] = inst_25650);

(statearr_25692[(11)] = inst_25651__$1);

return statearr_25692;
})();
if(cljs.core.truth_(inst_25652)){
var statearr_25693_25717 = state_25678__$1;
(statearr_25693_25717[(1)] = (8));

} else {
var statearr_25694_25718 = state_25678__$1;
(statearr_25694_25718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (14))){
var inst_25671 = (state_25678[(2)]);
var inst_25672 = cljs.core.async.close_BANG_.call(null,out);
var state_25678__$1 = (function (){var statearr_25696 = state_25678;
(statearr_25696[(13)] = inst_25671);

return statearr_25696;
})();
var statearr_25697_25719 = state_25678__$1;
(statearr_25697_25719[(2)] = inst_25672);

(statearr_25697_25719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (10))){
var inst_25662 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25698_25720 = state_25678__$1;
(statearr_25698_25720[(2)] = inst_25662);

(statearr_25698_25720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (8))){
var inst_25642 = (state_25678[(7)]);
var inst_25651 = (state_25678[(11)]);
var tmp25695 = inst_25642;
var inst_25642__$1 = tmp25695;
var inst_25643 = inst_25651;
var state_25678__$1 = (function (){var statearr_25699 = state_25678;
(statearr_25699[(7)] = inst_25642__$1);

(statearr_25699[(8)] = inst_25643);

return statearr_25699;
})();
var statearr_25700_25721 = state_25678__$1;
(statearr_25700_25721[(2)] = null);

(statearr_25700_25721[(1)] = (2));


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
var cljs$core$async$state_machine__21899__auto__ = null;
var cljs$core$async$state_machine__21899__auto____0 = (function (){
var statearr_25701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25701[(0)] = cljs$core$async$state_machine__21899__auto__);

(statearr_25701[(1)] = (1));

return statearr_25701;
});
var cljs$core$async$state_machine__21899__auto____1 = (function (state_25678){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_25678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e25702){var ex__21902__auto__ = e25702;
var statearr_25703_25722 = state_25678;
(statearr_25703_25722[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_25678[(4)]))){
var statearr_25704_25723 = state_25678;
(statearr_25704_25723[(1)] = cljs.core.first.call(null,(state_25678[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25724 = state_25678;
state_25678 = G__25724;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$state_machine__21899__auto__ = function(state_25678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21899__auto____1.call(this,state_25678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21899__auto____0;
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21899__auto____1;
return cljs$core$async$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_25705 = f__22024__auto__.call(null);
(statearr_25705[(6)] = c__22023__auto___25707);

return statearr_25705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25726 = arguments.length;
switch (G__25726) {
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
var c__22023__auto___25804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_25771){
var state_val_25772 = (state_25771[(1)]);
if((state_val_25772 === (7))){
var inst_25767 = (state_25771[(2)]);
var state_25771__$1 = state_25771;
var statearr_25773_25805 = state_25771__$1;
(statearr_25773_25805[(2)] = inst_25767);

(statearr_25773_25805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (1))){
var inst_25727 = [];
var inst_25728 = inst_25727;
var inst_25729 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25771__$1 = (function (){var statearr_25774 = state_25771;
(statearr_25774[(7)] = inst_25728);

(statearr_25774[(8)] = inst_25729);

return statearr_25774;
})();
var statearr_25775_25806 = state_25771__$1;
(statearr_25775_25806[(2)] = null);

(statearr_25775_25806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (4))){
var inst_25732 = (state_25771[(9)]);
var inst_25732__$1 = (state_25771[(2)]);
var inst_25733 = (inst_25732__$1 == null);
var inst_25734 = cljs.core.not.call(null,inst_25733);
var state_25771__$1 = (function (){var statearr_25776 = state_25771;
(statearr_25776[(9)] = inst_25732__$1);

return statearr_25776;
})();
if(inst_25734){
var statearr_25777_25807 = state_25771__$1;
(statearr_25777_25807[(1)] = (5));

} else {
var statearr_25778_25808 = state_25771__$1;
(statearr_25778_25808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (15))){
var inst_25728 = (state_25771[(7)]);
var inst_25759 = cljs.core.vec.call(null,inst_25728);
var state_25771__$1 = state_25771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25771__$1,(18),out,inst_25759);
} else {
if((state_val_25772 === (13))){
var inst_25754 = (state_25771[(2)]);
var state_25771__$1 = state_25771;
var statearr_25779_25809 = state_25771__$1;
(statearr_25779_25809[(2)] = inst_25754);

(statearr_25779_25809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (6))){
var inst_25728 = (state_25771[(7)]);
var inst_25756 = inst_25728.length;
var inst_25757 = (inst_25756 > (0));
var state_25771__$1 = state_25771;
if(cljs.core.truth_(inst_25757)){
var statearr_25780_25810 = state_25771__$1;
(statearr_25780_25810[(1)] = (15));

} else {
var statearr_25781_25811 = state_25771__$1;
(statearr_25781_25811[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (17))){
var inst_25764 = (state_25771[(2)]);
var inst_25765 = cljs.core.async.close_BANG_.call(null,out);
var state_25771__$1 = (function (){var statearr_25782 = state_25771;
(statearr_25782[(10)] = inst_25764);

return statearr_25782;
})();
var statearr_25783_25812 = state_25771__$1;
(statearr_25783_25812[(2)] = inst_25765);

(statearr_25783_25812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (3))){
var inst_25769 = (state_25771[(2)]);
var state_25771__$1 = state_25771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25771__$1,inst_25769);
} else {
if((state_val_25772 === (12))){
var inst_25728 = (state_25771[(7)]);
var inst_25747 = cljs.core.vec.call(null,inst_25728);
var state_25771__$1 = state_25771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25771__$1,(14),out,inst_25747);
} else {
if((state_val_25772 === (2))){
var state_25771__$1 = state_25771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25771__$1,(4),ch);
} else {
if((state_val_25772 === (11))){
var inst_25728 = (state_25771[(7)]);
var inst_25732 = (state_25771[(9)]);
var inst_25736 = (state_25771[(11)]);
var inst_25744 = inst_25728.push(inst_25732);
var tmp25784 = inst_25728;
var inst_25728__$1 = tmp25784;
var inst_25729 = inst_25736;
var state_25771__$1 = (function (){var statearr_25785 = state_25771;
(statearr_25785[(12)] = inst_25744);

(statearr_25785[(7)] = inst_25728__$1);

(statearr_25785[(8)] = inst_25729);

return statearr_25785;
})();
var statearr_25786_25813 = state_25771__$1;
(statearr_25786_25813[(2)] = null);

(statearr_25786_25813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (9))){
var inst_25729 = (state_25771[(8)]);
var inst_25740 = cljs.core.keyword_identical_QMARK_.call(null,inst_25729,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_25771__$1 = state_25771;
var statearr_25787_25814 = state_25771__$1;
(statearr_25787_25814[(2)] = inst_25740);

(statearr_25787_25814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (5))){
var inst_25732 = (state_25771[(9)]);
var inst_25736 = (state_25771[(11)]);
var inst_25729 = (state_25771[(8)]);
var inst_25737 = (state_25771[(13)]);
var inst_25736__$1 = f.call(null,inst_25732);
var inst_25737__$1 = cljs.core._EQ_.call(null,inst_25736__$1,inst_25729);
var state_25771__$1 = (function (){var statearr_25788 = state_25771;
(statearr_25788[(11)] = inst_25736__$1);

(statearr_25788[(13)] = inst_25737__$1);

return statearr_25788;
})();
if(inst_25737__$1){
var statearr_25789_25815 = state_25771__$1;
(statearr_25789_25815[(1)] = (8));

} else {
var statearr_25790_25816 = state_25771__$1;
(statearr_25790_25816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (14))){
var inst_25732 = (state_25771[(9)]);
var inst_25736 = (state_25771[(11)]);
var inst_25749 = (state_25771[(2)]);
var inst_25750 = [];
var inst_25751 = inst_25750.push(inst_25732);
var inst_25728 = inst_25750;
var inst_25729 = inst_25736;
var state_25771__$1 = (function (){var statearr_25791 = state_25771;
(statearr_25791[(14)] = inst_25749);

(statearr_25791[(15)] = inst_25751);

(statearr_25791[(7)] = inst_25728);

(statearr_25791[(8)] = inst_25729);

return statearr_25791;
})();
var statearr_25792_25817 = state_25771__$1;
(statearr_25792_25817[(2)] = null);

(statearr_25792_25817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (16))){
var state_25771__$1 = state_25771;
var statearr_25793_25818 = state_25771__$1;
(statearr_25793_25818[(2)] = null);

(statearr_25793_25818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (10))){
var inst_25742 = (state_25771[(2)]);
var state_25771__$1 = state_25771;
if(cljs.core.truth_(inst_25742)){
var statearr_25794_25819 = state_25771__$1;
(statearr_25794_25819[(1)] = (11));

} else {
var statearr_25795_25820 = state_25771__$1;
(statearr_25795_25820[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (18))){
var inst_25761 = (state_25771[(2)]);
var state_25771__$1 = state_25771;
var statearr_25796_25821 = state_25771__$1;
(statearr_25796_25821[(2)] = inst_25761);

(statearr_25796_25821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25772 === (8))){
var inst_25737 = (state_25771[(13)]);
var state_25771__$1 = state_25771;
var statearr_25797_25822 = state_25771__$1;
(statearr_25797_25822[(2)] = inst_25737);

(statearr_25797_25822[(1)] = (10));


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
var cljs$core$async$state_machine__21899__auto__ = null;
var cljs$core$async$state_machine__21899__auto____0 = (function (){
var statearr_25798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25798[(0)] = cljs$core$async$state_machine__21899__auto__);

(statearr_25798[(1)] = (1));

return statearr_25798;
});
var cljs$core$async$state_machine__21899__auto____1 = (function (state_25771){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_25771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e25799){var ex__21902__auto__ = e25799;
var statearr_25800_25823 = state_25771;
(statearr_25800_25823[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_25771[(4)]))){
var statearr_25801_25824 = state_25771;
(statearr_25801_25824[(1)] = cljs.core.first.call(null,(state_25771[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25825 = state_25771;
state_25771 = G__25825;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
cljs$core$async$state_machine__21899__auto__ = function(state_25771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21899__auto____1.call(this,state_25771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21899__auto____0;
cljs$core$async$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21899__auto____1;
return cljs$core$async$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_25802 = f__22024__auto__.call(null);
(statearr_25802[(6)] = c__22023__auto___25804);

return statearr_25802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
