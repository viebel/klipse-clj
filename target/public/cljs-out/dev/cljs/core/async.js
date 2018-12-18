// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21031 = arguments.length;
switch (G__21031) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21032 = (function (f,blockable,meta21033){
this.f = f;
this.blockable = blockable;
this.meta21033 = meta21033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21034,meta21033__$1){
var self__ = this;
var _21034__$1 = this;
return (new cljs.core.async.t_cljs$core$async21032(self__.f,self__.blockable,meta21033__$1));
});

cljs.core.async.t_cljs$core$async21032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21034){
var self__ = this;
var _21034__$1 = this;
return self__.meta21033;
});

cljs.core.async.t_cljs$core$async21032.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21032.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21033","meta21033",-1836392987,null)], null);
});

cljs.core.async.t_cljs$core$async21032.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21032";

cljs.core.async.t_cljs$core$async21032.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async21032");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21032.
 */
cljs.core.async.__GT_t_cljs$core$async21032 = (function cljs$core$async$__GT_t_cljs$core$async21032(f__$1,blockable__$1,meta21033){
return (new cljs.core.async.t_cljs$core$async21032(f__$1,blockable__$1,meta21033));
});

}

return (new cljs.core.async.t_cljs$core$async21032(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21038 = arguments.length;
switch (G__21038) {
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
var G__21041 = arguments.length;
switch (G__21041) {
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
var G__21044 = arguments.length;
switch (G__21044) {
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
var val_21046 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21046);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21046,ret){
return (function (){
return fn1.call(null,val_21046);
});})(val_21046,ret))
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
var G__21048 = arguments.length;
switch (G__21048) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
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
var n__4518__auto___21050 = n;
var x_21051 = (0);
while(true){
if((x_21051 < n__4518__auto___21050)){
(a[x_21051] = (0));

var G__21052 = (x_21051 + (1));
x_21051 = G__21052;
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

var G__21053 = (i + (1));
i = G__21053;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21054 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21054 = (function (flag,meta21055){
this.flag = flag;
this.meta21055 = meta21055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21056,meta21055__$1){
var self__ = this;
var _21056__$1 = this;
return (new cljs.core.async.t_cljs$core$async21054(self__.flag,meta21055__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21056){
var self__ = this;
var _21056__$1 = this;
return self__.meta21055;
});})(flag))
;

cljs.core.async.t_cljs$core$async21054.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21054.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21054.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21055","meta21055",-1141182563,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21054";

cljs.core.async.t_cljs$core$async21054.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async21054");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21054.
 */
cljs.core.async.__GT_t_cljs$core$async21054 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21054(flag__$1,meta21055){
return (new cljs.core.async.t_cljs$core$async21054(flag__$1,meta21055));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21054(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21057 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21057 = (function (flag,cb,meta21058){
this.flag = flag;
this.cb = cb;
this.meta21058 = meta21058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21059,meta21058__$1){
var self__ = this;
var _21059__$1 = this;
return (new cljs.core.async.t_cljs$core$async21057(self__.flag,self__.cb,meta21058__$1));
});

cljs.core.async.t_cljs$core$async21057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21059){
var self__ = this;
var _21059__$1 = this;
return self__.meta21058;
});

cljs.core.async.t_cljs$core$async21057.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21058","meta21058",1859993911,null)], null);
});

cljs.core.async.t_cljs$core$async21057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21057";

cljs.core.async.t_cljs$core$async21057.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async21057");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21057.
 */
cljs.core.async.__GT_t_cljs$core$async21057 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21057(flag__$1,cb__$1,meta21058){
return (new cljs.core.async.t_cljs$core$async21057(flag__$1,cb__$1,meta21058));
});

}

return (new cljs.core.async.t_cljs$core$async21057(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21060_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21060_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21061_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21061_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21062 = (i + (1));
i = G__21062;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4647__auto__ = [];
var len__4641__auto___21068 = arguments.length;
var i__4642__auto___21069 = (0);
while(true){
if((i__4642__auto___21069 < len__4641__auto___21068)){
args__4647__auto__.push((arguments[i__4642__auto___21069]));

var G__21070 = (i__4642__auto___21069 + (1));
i__4642__auto___21069 = G__21070;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21065){
var map__21066 = p__21065;
var map__21066__$1 = (((((!((map__21066 == null))))?(((((map__21066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21066):map__21066);
var opts = map__21066__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21063){
var G__21064 = cljs.core.first.call(null,seq21063);
var seq21063__$1 = cljs.core.next.call(null,seq21063);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21064,seq21063__$1);
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
var G__21072 = arguments.length;
switch (G__21072) {
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
var c__19107__auto___21118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___21118){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___21118){
return (function (state_21096){
var state_val_21097 = (state_21096[(1)]);
if((state_val_21097 === (7))){
var inst_21092 = (state_21096[(2)]);
var state_21096__$1 = state_21096;
var statearr_21098_21119 = state_21096__$1;
(statearr_21098_21119[(2)] = inst_21092);

(statearr_21098_21119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (1))){
var state_21096__$1 = state_21096;
var statearr_21099_21120 = state_21096__$1;
(statearr_21099_21120[(2)] = null);

(statearr_21099_21120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (4))){
var inst_21075 = (state_21096[(7)]);
var inst_21075__$1 = (state_21096[(2)]);
var inst_21076 = (inst_21075__$1 == null);
var state_21096__$1 = (function (){var statearr_21100 = state_21096;
(statearr_21100[(7)] = inst_21075__$1);

return statearr_21100;
})();
if(cljs.core.truth_(inst_21076)){
var statearr_21101_21121 = state_21096__$1;
(statearr_21101_21121[(1)] = (5));

} else {
var statearr_21102_21122 = state_21096__$1;
(statearr_21102_21122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (13))){
var state_21096__$1 = state_21096;
var statearr_21103_21123 = state_21096__$1;
(statearr_21103_21123[(2)] = null);

(statearr_21103_21123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (6))){
var inst_21075 = (state_21096[(7)]);
var state_21096__$1 = state_21096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21096__$1,(11),to,inst_21075);
} else {
if((state_val_21097 === (3))){
var inst_21094 = (state_21096[(2)]);
var state_21096__$1 = state_21096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21096__$1,inst_21094);
} else {
if((state_val_21097 === (12))){
var state_21096__$1 = state_21096;
var statearr_21104_21124 = state_21096__$1;
(statearr_21104_21124[(2)] = null);

(statearr_21104_21124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (2))){
var state_21096__$1 = state_21096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21096__$1,(4),from);
} else {
if((state_val_21097 === (11))){
var inst_21085 = (state_21096[(2)]);
var state_21096__$1 = state_21096;
if(cljs.core.truth_(inst_21085)){
var statearr_21105_21125 = state_21096__$1;
(statearr_21105_21125[(1)] = (12));

} else {
var statearr_21106_21126 = state_21096__$1;
(statearr_21106_21126[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (9))){
var state_21096__$1 = state_21096;
var statearr_21107_21127 = state_21096__$1;
(statearr_21107_21127[(2)] = null);

(statearr_21107_21127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (5))){
var state_21096__$1 = state_21096;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21108_21128 = state_21096__$1;
(statearr_21108_21128[(1)] = (8));

} else {
var statearr_21109_21129 = state_21096__$1;
(statearr_21109_21129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (14))){
var inst_21090 = (state_21096[(2)]);
var state_21096__$1 = state_21096;
var statearr_21110_21130 = state_21096__$1;
(statearr_21110_21130[(2)] = inst_21090);

(statearr_21110_21130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (10))){
var inst_21082 = (state_21096[(2)]);
var state_21096__$1 = state_21096;
var statearr_21111_21131 = state_21096__$1;
(statearr_21111_21131[(2)] = inst_21082);

(statearr_21111_21131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (8))){
var inst_21079 = cljs.core.async.close_BANG_.call(null,to);
var state_21096__$1 = state_21096;
var statearr_21112_21132 = state_21096__$1;
(statearr_21112_21132[(2)] = inst_21079);

(statearr_21112_21132[(1)] = (10));


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
});})(c__19107__auto___21118))
;
return ((function (switch__18940__auto__,c__19107__auto___21118){
return (function() {
var cljs$core$async$state_machine__18941__auto__ = null;
var cljs$core$async$state_machine__18941__auto____0 = (function (){
var statearr_21113 = [null,null,null,null,null,null,null,null];
(statearr_21113[(0)] = cljs$core$async$state_machine__18941__auto__);

(statearr_21113[(1)] = (1));

return statearr_21113;
});
var cljs$core$async$state_machine__18941__auto____1 = (function (state_21096){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e21114){if((e21114 instanceof Object)){
var ex__18944__auto__ = e21114;
var statearr_21115_21133 = state_21096;
(statearr_21115_21133[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21134 = state_21096;
state_21096 = G__21134;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$state_machine__18941__auto__ = function(state_21096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18941__auto____1.call(this,state_21096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18941__auto____0;
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18941__auto____1;
return cljs$core$async$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___21118))
})();
var state__19109__auto__ = (function (){var statearr_21116 = f__19108__auto__.call(null);
(statearr_21116[(6)] = c__19107__auto___21118);

return statearr_21116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___21118))
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
return (function (p__21135){
var vec__21136 = p__21135;
var v = cljs.core.nth.call(null,vec__21136,(0),null);
var p = cljs.core.nth.call(null,vec__21136,(1),null);
var job = vec__21136;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19107__auto___21307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___21307,res,vec__21136,v,p,job,jobs,results){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___21307,res,vec__21136,v,p,job,jobs,results){
return (function (state_21143){
var state_val_21144 = (state_21143[(1)]);
if((state_val_21144 === (1))){
var state_21143__$1 = state_21143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21143__$1,(2),res,v);
} else {
if((state_val_21144 === (2))){
var inst_21140 = (state_21143[(2)]);
var inst_21141 = cljs.core.async.close_BANG_.call(null,res);
var state_21143__$1 = (function (){var statearr_21145 = state_21143;
(statearr_21145[(7)] = inst_21140);

return statearr_21145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21143__$1,inst_21141);
} else {
return null;
}
}
});})(c__19107__auto___21307,res,vec__21136,v,p,job,jobs,results))
;
return ((function (switch__18940__auto__,c__19107__auto___21307,res,vec__21136,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0 = (function (){
var statearr_21146 = [null,null,null,null,null,null,null,null];
(statearr_21146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__);

(statearr_21146[(1)] = (1));

return statearr_21146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1 = (function (state_21143){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e21147){if((e21147 instanceof Object)){
var ex__18944__auto__ = e21147;
var statearr_21148_21308 = state_21143;
(statearr_21148_21308[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21309 = state_21143;
state_21143 = G__21309;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__ = function(state_21143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1.call(this,state_21143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___21307,res,vec__21136,v,p,job,jobs,results))
})();
var state__19109__auto__ = (function (){var statearr_21149 = f__19108__auto__.call(null);
(statearr_21149[(6)] = c__19107__auto___21307);

return statearr_21149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___21307,res,vec__21136,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21150){
var vec__21151 = p__21150;
var v = cljs.core.nth.call(null,vec__21151,(0),null);
var p = cljs.core.nth.call(null,vec__21151,(1),null);
var job = vec__21151;
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
var n__4518__auto___21310 = n;
var __21311 = (0);
while(true){
if((__21311 < n__4518__auto___21310)){
var G__21154_21312 = type;
var G__21154_21313__$1 = (((G__21154_21312 instanceof cljs.core.Keyword))?G__21154_21312.fqn:null);
switch (G__21154_21313__$1) {
case "compute":
var c__19107__auto___21315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21311,c__19107__auto___21315,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (__21311,c__19107__auto___21315,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async){
return (function (state_21167){
var state_val_21168 = (state_21167[(1)]);
if((state_val_21168 === (1))){
var state_21167__$1 = state_21167;
var statearr_21169_21316 = state_21167__$1;
(statearr_21169_21316[(2)] = null);

(statearr_21169_21316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (2))){
var state_21167__$1 = state_21167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21167__$1,(4),jobs);
} else {
if((state_val_21168 === (3))){
var inst_21165 = (state_21167[(2)]);
var state_21167__$1 = state_21167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21167__$1,inst_21165);
} else {
if((state_val_21168 === (4))){
var inst_21157 = (state_21167[(2)]);
var inst_21158 = process.call(null,inst_21157);
var state_21167__$1 = state_21167;
if(cljs.core.truth_(inst_21158)){
var statearr_21170_21317 = state_21167__$1;
(statearr_21170_21317[(1)] = (5));

} else {
var statearr_21171_21318 = state_21167__$1;
(statearr_21171_21318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (5))){
var state_21167__$1 = state_21167;
var statearr_21172_21319 = state_21167__$1;
(statearr_21172_21319[(2)] = null);

(statearr_21172_21319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (6))){
var state_21167__$1 = state_21167;
var statearr_21173_21320 = state_21167__$1;
(statearr_21173_21320[(2)] = null);

(statearr_21173_21320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (7))){
var inst_21163 = (state_21167[(2)]);
var state_21167__$1 = state_21167;
var statearr_21174_21321 = state_21167__$1;
(statearr_21174_21321[(2)] = inst_21163);

(statearr_21174_21321[(1)] = (3));


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
});})(__21311,c__19107__auto___21315,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async))
;
return ((function (__21311,switch__18940__auto__,c__19107__auto___21315,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0 = (function (){
var statearr_21175 = [null,null,null,null,null,null,null];
(statearr_21175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__);

(statearr_21175[(1)] = (1));

return statearr_21175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1 = (function (state_21167){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e21176){if((e21176 instanceof Object)){
var ex__18944__auto__ = e21176;
var statearr_21177_21322 = state_21167;
(statearr_21177_21322[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21323 = state_21167;
state_21167 = G__21323;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__ = function(state_21167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1.call(this,state_21167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__;
})()
;})(__21311,switch__18940__auto__,c__19107__auto___21315,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async))
})();
var state__19109__auto__ = (function (){var statearr_21178 = f__19108__auto__.call(null);
(statearr_21178[(6)] = c__19107__auto___21315);

return statearr_21178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(__21311,c__19107__auto___21315,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async))
);


break;
case "async":
var c__19107__auto___21324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21311,c__19107__auto___21324,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (__21311,c__19107__auto___21324,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async){
return (function (state_21191){
var state_val_21192 = (state_21191[(1)]);
if((state_val_21192 === (1))){
var state_21191__$1 = state_21191;
var statearr_21193_21325 = state_21191__$1;
(statearr_21193_21325[(2)] = null);

(statearr_21193_21325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (2))){
var state_21191__$1 = state_21191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21191__$1,(4),jobs);
} else {
if((state_val_21192 === (3))){
var inst_21189 = (state_21191[(2)]);
var state_21191__$1 = state_21191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21191__$1,inst_21189);
} else {
if((state_val_21192 === (4))){
var inst_21181 = (state_21191[(2)]);
var inst_21182 = async.call(null,inst_21181);
var state_21191__$1 = state_21191;
if(cljs.core.truth_(inst_21182)){
var statearr_21194_21326 = state_21191__$1;
(statearr_21194_21326[(1)] = (5));

} else {
var statearr_21195_21327 = state_21191__$1;
(statearr_21195_21327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (5))){
var state_21191__$1 = state_21191;
var statearr_21196_21328 = state_21191__$1;
(statearr_21196_21328[(2)] = null);

(statearr_21196_21328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (6))){
var state_21191__$1 = state_21191;
var statearr_21197_21329 = state_21191__$1;
(statearr_21197_21329[(2)] = null);

(statearr_21197_21329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21192 === (7))){
var inst_21187 = (state_21191[(2)]);
var state_21191__$1 = state_21191;
var statearr_21198_21330 = state_21191__$1;
(statearr_21198_21330[(2)] = inst_21187);

(statearr_21198_21330[(1)] = (3));


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
});})(__21311,c__19107__auto___21324,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async))
;
return ((function (__21311,switch__18940__auto__,c__19107__auto___21324,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0 = (function (){
var statearr_21199 = [null,null,null,null,null,null,null];
(statearr_21199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__);

(statearr_21199[(1)] = (1));

return statearr_21199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1 = (function (state_21191){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e21200){if((e21200 instanceof Object)){
var ex__18944__auto__ = e21200;
var statearr_21201_21331 = state_21191;
(statearr_21201_21331[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21332 = state_21191;
state_21191 = G__21332;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__ = function(state_21191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1.call(this,state_21191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__;
})()
;})(__21311,switch__18940__auto__,c__19107__auto___21324,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async))
})();
var state__19109__auto__ = (function (){var statearr_21202 = f__19108__auto__.call(null);
(statearr_21202[(6)] = c__19107__auto___21324);

return statearr_21202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(__21311,c__19107__auto___21324,G__21154_21312,G__21154_21313__$1,n__4518__auto___21310,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21154_21313__$1)].join('')));

}

var G__21333 = (__21311 + (1));
__21311 = G__21333;
continue;
} else {
}
break;
}

var c__19107__auto___21334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___21334,jobs,results,process,async){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___21334,jobs,results,process,async){
return (function (state_21224){
var state_val_21225 = (state_21224[(1)]);
if((state_val_21225 === (7))){
var inst_21220 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
var statearr_21226_21335 = state_21224__$1;
(statearr_21226_21335[(2)] = inst_21220);

(statearr_21226_21335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (1))){
var state_21224__$1 = state_21224;
var statearr_21227_21336 = state_21224__$1;
(statearr_21227_21336[(2)] = null);

(statearr_21227_21336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (4))){
var inst_21205 = (state_21224[(7)]);
var inst_21205__$1 = (state_21224[(2)]);
var inst_21206 = (inst_21205__$1 == null);
var state_21224__$1 = (function (){var statearr_21228 = state_21224;
(statearr_21228[(7)] = inst_21205__$1);

return statearr_21228;
})();
if(cljs.core.truth_(inst_21206)){
var statearr_21229_21337 = state_21224__$1;
(statearr_21229_21337[(1)] = (5));

} else {
var statearr_21230_21338 = state_21224__$1;
(statearr_21230_21338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (6))){
var inst_21205 = (state_21224[(7)]);
var inst_21210 = (state_21224[(8)]);
var inst_21210__$1 = cljs.core.async.chan.call(null,(1));
var inst_21211 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21212 = [inst_21205,inst_21210__$1];
var inst_21213 = (new cljs.core.PersistentVector(null,2,(5),inst_21211,inst_21212,null));
var state_21224__$1 = (function (){var statearr_21231 = state_21224;
(statearr_21231[(8)] = inst_21210__$1);

return statearr_21231;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21224__$1,(8),jobs,inst_21213);
} else {
if((state_val_21225 === (3))){
var inst_21222 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21224__$1,inst_21222);
} else {
if((state_val_21225 === (2))){
var state_21224__$1 = state_21224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21224__$1,(4),from);
} else {
if((state_val_21225 === (9))){
var inst_21217 = (state_21224[(2)]);
var state_21224__$1 = (function (){var statearr_21232 = state_21224;
(statearr_21232[(9)] = inst_21217);

return statearr_21232;
})();
var statearr_21233_21339 = state_21224__$1;
(statearr_21233_21339[(2)] = null);

(statearr_21233_21339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (5))){
var inst_21208 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21224__$1 = state_21224;
var statearr_21234_21340 = state_21224__$1;
(statearr_21234_21340[(2)] = inst_21208);

(statearr_21234_21340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (8))){
var inst_21210 = (state_21224[(8)]);
var inst_21215 = (state_21224[(2)]);
var state_21224__$1 = (function (){var statearr_21235 = state_21224;
(statearr_21235[(10)] = inst_21215);

return statearr_21235;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21224__$1,(9),results,inst_21210);
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
});})(c__19107__auto___21334,jobs,results,process,async))
;
return ((function (switch__18940__auto__,c__19107__auto___21334,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0 = (function (){
var statearr_21236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__);

(statearr_21236[(1)] = (1));

return statearr_21236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1 = (function (state_21224){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e21237){if((e21237 instanceof Object)){
var ex__18944__auto__ = e21237;
var statearr_21238_21341 = state_21224;
(statearr_21238_21341[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21342 = state_21224;
state_21224 = G__21342;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__ = function(state_21224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1.call(this,state_21224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___21334,jobs,results,process,async))
})();
var state__19109__auto__ = (function (){var statearr_21239 = f__19108__auto__.call(null);
(statearr_21239[(6)] = c__19107__auto___21334);

return statearr_21239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___21334,jobs,results,process,async))
);


var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__,jobs,results,process,async){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__,jobs,results,process,async){
return (function (state_21277){
var state_val_21278 = (state_21277[(1)]);
if((state_val_21278 === (7))){
var inst_21273 = (state_21277[(2)]);
var state_21277__$1 = state_21277;
var statearr_21279_21343 = state_21277__$1;
(statearr_21279_21343[(2)] = inst_21273);

(statearr_21279_21343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (20))){
var state_21277__$1 = state_21277;
var statearr_21280_21344 = state_21277__$1;
(statearr_21280_21344[(2)] = null);

(statearr_21280_21344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (1))){
var state_21277__$1 = state_21277;
var statearr_21281_21345 = state_21277__$1;
(statearr_21281_21345[(2)] = null);

(statearr_21281_21345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (4))){
var inst_21242 = (state_21277[(7)]);
var inst_21242__$1 = (state_21277[(2)]);
var inst_21243 = (inst_21242__$1 == null);
var state_21277__$1 = (function (){var statearr_21282 = state_21277;
(statearr_21282[(7)] = inst_21242__$1);

return statearr_21282;
})();
if(cljs.core.truth_(inst_21243)){
var statearr_21283_21346 = state_21277__$1;
(statearr_21283_21346[(1)] = (5));

} else {
var statearr_21284_21347 = state_21277__$1;
(statearr_21284_21347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (15))){
var inst_21255 = (state_21277[(8)]);
var state_21277__$1 = state_21277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21277__$1,(18),to,inst_21255);
} else {
if((state_val_21278 === (21))){
var inst_21268 = (state_21277[(2)]);
var state_21277__$1 = state_21277;
var statearr_21285_21348 = state_21277__$1;
(statearr_21285_21348[(2)] = inst_21268);

(statearr_21285_21348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (13))){
var inst_21270 = (state_21277[(2)]);
var state_21277__$1 = (function (){var statearr_21286 = state_21277;
(statearr_21286[(9)] = inst_21270);

return statearr_21286;
})();
var statearr_21287_21349 = state_21277__$1;
(statearr_21287_21349[(2)] = null);

(statearr_21287_21349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (6))){
var inst_21242 = (state_21277[(7)]);
var state_21277__$1 = state_21277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21277__$1,(11),inst_21242);
} else {
if((state_val_21278 === (17))){
var inst_21263 = (state_21277[(2)]);
var state_21277__$1 = state_21277;
if(cljs.core.truth_(inst_21263)){
var statearr_21288_21350 = state_21277__$1;
(statearr_21288_21350[(1)] = (19));

} else {
var statearr_21289_21351 = state_21277__$1;
(statearr_21289_21351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (3))){
var inst_21275 = (state_21277[(2)]);
var state_21277__$1 = state_21277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21277__$1,inst_21275);
} else {
if((state_val_21278 === (12))){
var inst_21252 = (state_21277[(10)]);
var state_21277__$1 = state_21277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21277__$1,(14),inst_21252);
} else {
if((state_val_21278 === (2))){
var state_21277__$1 = state_21277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21277__$1,(4),results);
} else {
if((state_val_21278 === (19))){
var state_21277__$1 = state_21277;
var statearr_21290_21352 = state_21277__$1;
(statearr_21290_21352[(2)] = null);

(statearr_21290_21352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (11))){
var inst_21252 = (state_21277[(2)]);
var state_21277__$1 = (function (){var statearr_21291 = state_21277;
(statearr_21291[(10)] = inst_21252);

return statearr_21291;
})();
var statearr_21292_21353 = state_21277__$1;
(statearr_21292_21353[(2)] = null);

(statearr_21292_21353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (9))){
var state_21277__$1 = state_21277;
var statearr_21293_21354 = state_21277__$1;
(statearr_21293_21354[(2)] = null);

(statearr_21293_21354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (5))){
var state_21277__$1 = state_21277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21294_21355 = state_21277__$1;
(statearr_21294_21355[(1)] = (8));

} else {
var statearr_21295_21356 = state_21277__$1;
(statearr_21295_21356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (14))){
var inst_21257 = (state_21277[(11)]);
var inst_21255 = (state_21277[(8)]);
var inst_21255__$1 = (state_21277[(2)]);
var inst_21256 = (inst_21255__$1 == null);
var inst_21257__$1 = cljs.core.not.call(null,inst_21256);
var state_21277__$1 = (function (){var statearr_21296 = state_21277;
(statearr_21296[(11)] = inst_21257__$1);

(statearr_21296[(8)] = inst_21255__$1);

return statearr_21296;
})();
if(inst_21257__$1){
var statearr_21297_21357 = state_21277__$1;
(statearr_21297_21357[(1)] = (15));

} else {
var statearr_21298_21358 = state_21277__$1;
(statearr_21298_21358[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (16))){
var inst_21257 = (state_21277[(11)]);
var state_21277__$1 = state_21277;
var statearr_21299_21359 = state_21277__$1;
(statearr_21299_21359[(2)] = inst_21257);

(statearr_21299_21359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (10))){
var inst_21249 = (state_21277[(2)]);
var state_21277__$1 = state_21277;
var statearr_21300_21360 = state_21277__$1;
(statearr_21300_21360[(2)] = inst_21249);

(statearr_21300_21360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (18))){
var inst_21260 = (state_21277[(2)]);
var state_21277__$1 = state_21277;
var statearr_21301_21361 = state_21277__$1;
(statearr_21301_21361[(2)] = inst_21260);

(statearr_21301_21361[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21278 === (8))){
var inst_21246 = cljs.core.async.close_BANG_.call(null,to);
var state_21277__$1 = state_21277;
var statearr_21302_21362 = state_21277__$1;
(statearr_21302_21362[(2)] = inst_21246);

(statearr_21302_21362[(1)] = (10));


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
});})(c__19107__auto__,jobs,results,process,async))
;
return ((function (switch__18940__auto__,c__19107__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0 = (function (){
var statearr_21303 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__);

(statearr_21303[(1)] = (1));

return statearr_21303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1 = (function (state_21277){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e21304){if((e21304 instanceof Object)){
var ex__18944__auto__ = e21304;
var statearr_21305_21363 = state_21277;
(statearr_21305_21363[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21364 = state_21277;
state_21277 = G__21364;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__ = function(state_21277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1.call(this,state_21277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18941__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__,jobs,results,process,async))
})();
var state__19109__auto__ = (function (){var statearr_21306 = f__19108__auto__.call(null);
(statearr_21306[(6)] = c__19107__auto__);

return statearr_21306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__,jobs,results,process,async))
);

return c__19107__auto__;
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
var G__21366 = arguments.length;
switch (G__21366) {
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
var G__21369 = arguments.length;
switch (G__21369) {
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
var G__21372 = arguments.length;
switch (G__21372) {
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
var c__19107__auto___21421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___21421,tc,fc){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___21421,tc,fc){
return (function (state_21398){
var state_val_21399 = (state_21398[(1)]);
if((state_val_21399 === (7))){
var inst_21394 = (state_21398[(2)]);
var state_21398__$1 = state_21398;
var statearr_21400_21422 = state_21398__$1;
(statearr_21400_21422[(2)] = inst_21394);

(statearr_21400_21422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (1))){
var state_21398__$1 = state_21398;
var statearr_21401_21423 = state_21398__$1;
(statearr_21401_21423[(2)] = null);

(statearr_21401_21423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (4))){
var inst_21375 = (state_21398[(7)]);
var inst_21375__$1 = (state_21398[(2)]);
var inst_21376 = (inst_21375__$1 == null);
var state_21398__$1 = (function (){var statearr_21402 = state_21398;
(statearr_21402[(7)] = inst_21375__$1);

return statearr_21402;
})();
if(cljs.core.truth_(inst_21376)){
var statearr_21403_21424 = state_21398__$1;
(statearr_21403_21424[(1)] = (5));

} else {
var statearr_21404_21425 = state_21398__$1;
(statearr_21404_21425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (13))){
var state_21398__$1 = state_21398;
var statearr_21405_21426 = state_21398__$1;
(statearr_21405_21426[(2)] = null);

(statearr_21405_21426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (6))){
var inst_21375 = (state_21398[(7)]);
var inst_21381 = p.call(null,inst_21375);
var state_21398__$1 = state_21398;
if(cljs.core.truth_(inst_21381)){
var statearr_21406_21427 = state_21398__$1;
(statearr_21406_21427[(1)] = (9));

} else {
var statearr_21407_21428 = state_21398__$1;
(statearr_21407_21428[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (3))){
var inst_21396 = (state_21398[(2)]);
var state_21398__$1 = state_21398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21398__$1,inst_21396);
} else {
if((state_val_21399 === (12))){
var state_21398__$1 = state_21398;
var statearr_21408_21429 = state_21398__$1;
(statearr_21408_21429[(2)] = null);

(statearr_21408_21429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (2))){
var state_21398__$1 = state_21398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21398__$1,(4),ch);
} else {
if((state_val_21399 === (11))){
var inst_21375 = (state_21398[(7)]);
var inst_21385 = (state_21398[(2)]);
var state_21398__$1 = state_21398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21398__$1,(8),inst_21385,inst_21375);
} else {
if((state_val_21399 === (9))){
var state_21398__$1 = state_21398;
var statearr_21409_21430 = state_21398__$1;
(statearr_21409_21430[(2)] = tc);

(statearr_21409_21430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (5))){
var inst_21378 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21379 = cljs.core.async.close_BANG_.call(null,fc);
var state_21398__$1 = (function (){var statearr_21410 = state_21398;
(statearr_21410[(8)] = inst_21378);

return statearr_21410;
})();
var statearr_21411_21431 = state_21398__$1;
(statearr_21411_21431[(2)] = inst_21379);

(statearr_21411_21431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (14))){
var inst_21392 = (state_21398[(2)]);
var state_21398__$1 = state_21398;
var statearr_21412_21432 = state_21398__$1;
(statearr_21412_21432[(2)] = inst_21392);

(statearr_21412_21432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (10))){
var state_21398__$1 = state_21398;
var statearr_21413_21433 = state_21398__$1;
(statearr_21413_21433[(2)] = fc);

(statearr_21413_21433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (8))){
var inst_21387 = (state_21398[(2)]);
var state_21398__$1 = state_21398;
if(cljs.core.truth_(inst_21387)){
var statearr_21414_21434 = state_21398__$1;
(statearr_21414_21434[(1)] = (12));

} else {
var statearr_21415_21435 = state_21398__$1;
(statearr_21415_21435[(1)] = (13));

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
});})(c__19107__auto___21421,tc,fc))
;
return ((function (switch__18940__auto__,c__19107__auto___21421,tc,fc){
return (function() {
var cljs$core$async$state_machine__18941__auto__ = null;
var cljs$core$async$state_machine__18941__auto____0 = (function (){
var statearr_21416 = [null,null,null,null,null,null,null,null,null];
(statearr_21416[(0)] = cljs$core$async$state_machine__18941__auto__);

(statearr_21416[(1)] = (1));

return statearr_21416;
});
var cljs$core$async$state_machine__18941__auto____1 = (function (state_21398){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e21417){if((e21417 instanceof Object)){
var ex__18944__auto__ = e21417;
var statearr_21418_21436 = state_21398;
(statearr_21418_21436[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21437 = state_21398;
state_21398 = G__21437;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$state_machine__18941__auto__ = function(state_21398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18941__auto____1.call(this,state_21398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18941__auto____0;
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18941__auto____1;
return cljs$core$async$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___21421,tc,fc))
})();
var state__19109__auto__ = (function (){var statearr_21419 = f__19108__auto__.call(null);
(statearr_21419[(6)] = c__19107__auto___21421);

return statearr_21419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___21421,tc,fc))
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
var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__){
return (function (state_21458){
var state_val_21459 = (state_21458[(1)]);
if((state_val_21459 === (7))){
var inst_21454 = (state_21458[(2)]);
var state_21458__$1 = state_21458;
var statearr_21460_21478 = state_21458__$1;
(statearr_21460_21478[(2)] = inst_21454);

(statearr_21460_21478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (1))){
var inst_21438 = init;
var state_21458__$1 = (function (){var statearr_21461 = state_21458;
(statearr_21461[(7)] = inst_21438);

return statearr_21461;
})();
var statearr_21462_21479 = state_21458__$1;
(statearr_21462_21479[(2)] = null);

(statearr_21462_21479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (4))){
var inst_21441 = (state_21458[(8)]);
var inst_21441__$1 = (state_21458[(2)]);
var inst_21442 = (inst_21441__$1 == null);
var state_21458__$1 = (function (){var statearr_21463 = state_21458;
(statearr_21463[(8)] = inst_21441__$1);

return statearr_21463;
})();
if(cljs.core.truth_(inst_21442)){
var statearr_21464_21480 = state_21458__$1;
(statearr_21464_21480[(1)] = (5));

} else {
var statearr_21465_21481 = state_21458__$1;
(statearr_21465_21481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (6))){
var inst_21445 = (state_21458[(9)]);
var inst_21441 = (state_21458[(8)]);
var inst_21438 = (state_21458[(7)]);
var inst_21445__$1 = f.call(null,inst_21438,inst_21441);
var inst_21446 = cljs.core.reduced_QMARK_.call(null,inst_21445__$1);
var state_21458__$1 = (function (){var statearr_21466 = state_21458;
(statearr_21466[(9)] = inst_21445__$1);

return statearr_21466;
})();
if(inst_21446){
var statearr_21467_21482 = state_21458__$1;
(statearr_21467_21482[(1)] = (8));

} else {
var statearr_21468_21483 = state_21458__$1;
(statearr_21468_21483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (3))){
var inst_21456 = (state_21458[(2)]);
var state_21458__$1 = state_21458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21458__$1,inst_21456);
} else {
if((state_val_21459 === (2))){
var state_21458__$1 = state_21458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21458__$1,(4),ch);
} else {
if((state_val_21459 === (9))){
var inst_21445 = (state_21458[(9)]);
var inst_21438 = inst_21445;
var state_21458__$1 = (function (){var statearr_21469 = state_21458;
(statearr_21469[(7)] = inst_21438);

return statearr_21469;
})();
var statearr_21470_21484 = state_21458__$1;
(statearr_21470_21484[(2)] = null);

(statearr_21470_21484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (5))){
var inst_21438 = (state_21458[(7)]);
var state_21458__$1 = state_21458;
var statearr_21471_21485 = state_21458__$1;
(statearr_21471_21485[(2)] = inst_21438);

(statearr_21471_21485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (10))){
var inst_21452 = (state_21458[(2)]);
var state_21458__$1 = state_21458;
var statearr_21472_21486 = state_21458__$1;
(statearr_21472_21486[(2)] = inst_21452);

(statearr_21472_21486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21459 === (8))){
var inst_21445 = (state_21458[(9)]);
var inst_21448 = cljs.core.deref.call(null,inst_21445);
var state_21458__$1 = state_21458;
var statearr_21473_21487 = state_21458__$1;
(statearr_21473_21487[(2)] = inst_21448);

(statearr_21473_21487[(1)] = (10));


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
});})(c__19107__auto__))
;
return ((function (switch__18940__auto__,c__19107__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18941__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18941__auto____0 = (function (){
var statearr_21474 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21474[(0)] = cljs$core$async$reduce_$_state_machine__18941__auto__);

(statearr_21474[(1)] = (1));

return statearr_21474;
});
var cljs$core$async$reduce_$_state_machine__18941__auto____1 = (function (state_21458){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e21475){if((e21475 instanceof Object)){
var ex__18944__auto__ = e21475;
var statearr_21476_21488 = state_21458;
(statearr_21476_21488[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21489 = state_21458;
state_21458 = G__21489;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18941__auto__ = function(state_21458){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18941__auto____1.call(this,state_21458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18941__auto____0;
cljs$core$async$reduce_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18941__auto____1;
return cljs$core$async$reduce_$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__))
})();
var state__19109__auto__ = (function (){var statearr_21477 = f__19108__auto__.call(null);
(statearr_21477[(6)] = c__19107__auto__);

return statearr_21477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__))
);

return c__19107__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__,f__$1){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__,f__$1){
return (function (state_21495){
var state_val_21496 = (state_21495[(1)]);
if((state_val_21496 === (1))){
var inst_21490 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_21495__$1 = state_21495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21495__$1,(2),inst_21490);
} else {
if((state_val_21496 === (2))){
var inst_21492 = (state_21495[(2)]);
var inst_21493 = f__$1.call(null,inst_21492);
var state_21495__$1 = state_21495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21495__$1,inst_21493);
} else {
return null;
}
}
});})(c__19107__auto__,f__$1))
;
return ((function (switch__18940__auto__,c__19107__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__18941__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18941__auto____0 = (function (){
var statearr_21497 = [null,null,null,null,null,null,null];
(statearr_21497[(0)] = cljs$core$async$transduce_$_state_machine__18941__auto__);

(statearr_21497[(1)] = (1));

return statearr_21497;
});
var cljs$core$async$transduce_$_state_machine__18941__auto____1 = (function (state_21495){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e21498){if((e21498 instanceof Object)){
var ex__18944__auto__ = e21498;
var statearr_21499_21501 = state_21495;
(statearr_21499_21501[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21502 = state_21495;
state_21495 = G__21502;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18941__auto__ = function(state_21495){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18941__auto____1.call(this,state_21495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18941__auto____0;
cljs$core$async$transduce_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18941__auto____1;
return cljs$core$async$transduce_$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__,f__$1))
})();
var state__19109__auto__ = (function (){var statearr_21500 = f__19108__auto__.call(null);
(statearr_21500[(6)] = c__19107__auto__);

return statearr_21500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__,f__$1))
);

return c__19107__auto__;
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
var G__21504 = arguments.length;
switch (G__21504) {
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
var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__){
return (function (state_21529){
var state_val_21530 = (state_21529[(1)]);
if((state_val_21530 === (7))){
var inst_21511 = (state_21529[(2)]);
var state_21529__$1 = state_21529;
var statearr_21531_21552 = state_21529__$1;
(statearr_21531_21552[(2)] = inst_21511);

(statearr_21531_21552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21530 === (1))){
var inst_21505 = cljs.core.seq.call(null,coll);
var inst_21506 = inst_21505;
var state_21529__$1 = (function (){var statearr_21532 = state_21529;
(statearr_21532[(7)] = inst_21506);

return statearr_21532;
})();
var statearr_21533_21553 = state_21529__$1;
(statearr_21533_21553[(2)] = null);

(statearr_21533_21553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21530 === (4))){
var inst_21506 = (state_21529[(7)]);
var inst_21509 = cljs.core.first.call(null,inst_21506);
var state_21529__$1 = state_21529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21529__$1,(7),ch,inst_21509);
} else {
if((state_val_21530 === (13))){
var inst_21523 = (state_21529[(2)]);
var state_21529__$1 = state_21529;
var statearr_21534_21554 = state_21529__$1;
(statearr_21534_21554[(2)] = inst_21523);

(statearr_21534_21554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21530 === (6))){
var inst_21514 = (state_21529[(2)]);
var state_21529__$1 = state_21529;
if(cljs.core.truth_(inst_21514)){
var statearr_21535_21555 = state_21529__$1;
(statearr_21535_21555[(1)] = (8));

} else {
var statearr_21536_21556 = state_21529__$1;
(statearr_21536_21556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21530 === (3))){
var inst_21527 = (state_21529[(2)]);
var state_21529__$1 = state_21529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21529__$1,inst_21527);
} else {
if((state_val_21530 === (12))){
var state_21529__$1 = state_21529;
var statearr_21537_21557 = state_21529__$1;
(statearr_21537_21557[(2)] = null);

(statearr_21537_21557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21530 === (2))){
var inst_21506 = (state_21529[(7)]);
var state_21529__$1 = state_21529;
if(cljs.core.truth_(inst_21506)){
var statearr_21538_21558 = state_21529__$1;
(statearr_21538_21558[(1)] = (4));

} else {
var statearr_21539_21559 = state_21529__$1;
(statearr_21539_21559[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21530 === (11))){
var inst_21520 = cljs.core.async.close_BANG_.call(null,ch);
var state_21529__$1 = state_21529;
var statearr_21540_21560 = state_21529__$1;
(statearr_21540_21560[(2)] = inst_21520);

(statearr_21540_21560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21530 === (9))){
var state_21529__$1 = state_21529;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21541_21561 = state_21529__$1;
(statearr_21541_21561[(1)] = (11));

} else {
var statearr_21542_21562 = state_21529__$1;
(statearr_21542_21562[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21530 === (5))){
var inst_21506 = (state_21529[(7)]);
var state_21529__$1 = state_21529;
var statearr_21543_21563 = state_21529__$1;
(statearr_21543_21563[(2)] = inst_21506);

(statearr_21543_21563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21530 === (10))){
var inst_21525 = (state_21529[(2)]);
var state_21529__$1 = state_21529;
var statearr_21544_21564 = state_21529__$1;
(statearr_21544_21564[(2)] = inst_21525);

(statearr_21544_21564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21530 === (8))){
var inst_21506 = (state_21529[(7)]);
var inst_21516 = cljs.core.next.call(null,inst_21506);
var inst_21506__$1 = inst_21516;
var state_21529__$1 = (function (){var statearr_21545 = state_21529;
(statearr_21545[(7)] = inst_21506__$1);

return statearr_21545;
})();
var statearr_21546_21565 = state_21529__$1;
(statearr_21546_21565[(2)] = null);

(statearr_21546_21565[(1)] = (2));


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
});})(c__19107__auto__))
;
return ((function (switch__18940__auto__,c__19107__auto__){
return (function() {
var cljs$core$async$state_machine__18941__auto__ = null;
var cljs$core$async$state_machine__18941__auto____0 = (function (){
var statearr_21547 = [null,null,null,null,null,null,null,null];
(statearr_21547[(0)] = cljs$core$async$state_machine__18941__auto__);

(statearr_21547[(1)] = (1));

return statearr_21547;
});
var cljs$core$async$state_machine__18941__auto____1 = (function (state_21529){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e21548){if((e21548 instanceof Object)){
var ex__18944__auto__ = e21548;
var statearr_21549_21566 = state_21529;
(statearr_21549_21566[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21567 = state_21529;
state_21529 = G__21567;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$state_machine__18941__auto__ = function(state_21529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18941__auto____1.call(this,state_21529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18941__auto____0;
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18941__auto____1;
return cljs$core$async$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__))
})();
var state__19109__auto__ = (function (){var statearr_21550 = f__19108__auto__.call(null);
(statearr_21550[(6)] = c__19107__auto__);

return statearr_21550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__))
);

return c__19107__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21568 = (function (ch,cs,meta21569){
this.ch = ch;
this.cs = cs;
this.meta21569 = meta21569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21570,meta21569__$1){
var self__ = this;
var _21570__$1 = this;
return (new cljs.core.async.t_cljs$core$async21568(self__.ch,self__.cs,meta21569__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21570){
var self__ = this;
var _21570__$1 = this;
return self__.meta21569;
});})(cs))
;

cljs.core.async.t_cljs$core$async21568.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21568.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21568.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21568.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21568.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21568.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21568.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21569","meta21569",-820045944,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21568";

cljs.core.async.t_cljs$core$async21568.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async21568");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21568.
 */
cljs.core.async.__GT_t_cljs$core$async21568 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21568(ch__$1,cs__$1,meta21569){
return (new cljs.core.async.t_cljs$core$async21568(ch__$1,cs__$1,meta21569));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21568(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19107__auto___21790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___21790,cs,m,dchan,dctr,done){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___21790,cs,m,dchan,dctr,done){
return (function (state_21705){
var state_val_21706 = (state_21705[(1)]);
if((state_val_21706 === (7))){
var inst_21701 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21707_21791 = state_21705__$1;
(statearr_21707_21791[(2)] = inst_21701);

(statearr_21707_21791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (20))){
var inst_21604 = (state_21705[(7)]);
var inst_21616 = cljs.core.first.call(null,inst_21604);
var inst_21617 = cljs.core.nth.call(null,inst_21616,(0),null);
var inst_21618 = cljs.core.nth.call(null,inst_21616,(1),null);
var state_21705__$1 = (function (){var statearr_21708 = state_21705;
(statearr_21708[(8)] = inst_21617);

return statearr_21708;
})();
if(cljs.core.truth_(inst_21618)){
var statearr_21709_21792 = state_21705__$1;
(statearr_21709_21792[(1)] = (22));

} else {
var statearr_21710_21793 = state_21705__$1;
(statearr_21710_21793[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (27))){
var inst_21646 = (state_21705[(9)]);
var inst_21573 = (state_21705[(10)]);
var inst_21648 = (state_21705[(11)]);
var inst_21653 = (state_21705[(12)]);
var inst_21653__$1 = cljs.core._nth.call(null,inst_21646,inst_21648);
var inst_21654 = cljs.core.async.put_BANG_.call(null,inst_21653__$1,inst_21573,done);
var state_21705__$1 = (function (){var statearr_21711 = state_21705;
(statearr_21711[(12)] = inst_21653__$1);

return statearr_21711;
})();
if(cljs.core.truth_(inst_21654)){
var statearr_21712_21794 = state_21705__$1;
(statearr_21712_21794[(1)] = (30));

} else {
var statearr_21713_21795 = state_21705__$1;
(statearr_21713_21795[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (1))){
var state_21705__$1 = state_21705;
var statearr_21714_21796 = state_21705__$1;
(statearr_21714_21796[(2)] = null);

(statearr_21714_21796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (24))){
var inst_21604 = (state_21705[(7)]);
var inst_21623 = (state_21705[(2)]);
var inst_21624 = cljs.core.next.call(null,inst_21604);
var inst_21582 = inst_21624;
var inst_21583 = null;
var inst_21584 = (0);
var inst_21585 = (0);
var state_21705__$1 = (function (){var statearr_21715 = state_21705;
(statearr_21715[(13)] = inst_21623);

(statearr_21715[(14)] = inst_21583);

(statearr_21715[(15)] = inst_21585);

(statearr_21715[(16)] = inst_21584);

(statearr_21715[(17)] = inst_21582);

return statearr_21715;
})();
var statearr_21716_21797 = state_21705__$1;
(statearr_21716_21797[(2)] = null);

(statearr_21716_21797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (39))){
var state_21705__$1 = state_21705;
var statearr_21720_21798 = state_21705__$1;
(statearr_21720_21798[(2)] = null);

(statearr_21720_21798[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (4))){
var inst_21573 = (state_21705[(10)]);
var inst_21573__$1 = (state_21705[(2)]);
var inst_21574 = (inst_21573__$1 == null);
var state_21705__$1 = (function (){var statearr_21721 = state_21705;
(statearr_21721[(10)] = inst_21573__$1);

return statearr_21721;
})();
if(cljs.core.truth_(inst_21574)){
var statearr_21722_21799 = state_21705__$1;
(statearr_21722_21799[(1)] = (5));

} else {
var statearr_21723_21800 = state_21705__$1;
(statearr_21723_21800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (15))){
var inst_21583 = (state_21705[(14)]);
var inst_21585 = (state_21705[(15)]);
var inst_21584 = (state_21705[(16)]);
var inst_21582 = (state_21705[(17)]);
var inst_21600 = (state_21705[(2)]);
var inst_21601 = (inst_21585 + (1));
var tmp21717 = inst_21583;
var tmp21718 = inst_21584;
var tmp21719 = inst_21582;
var inst_21582__$1 = tmp21719;
var inst_21583__$1 = tmp21717;
var inst_21584__$1 = tmp21718;
var inst_21585__$1 = inst_21601;
var state_21705__$1 = (function (){var statearr_21724 = state_21705;
(statearr_21724[(18)] = inst_21600);

(statearr_21724[(14)] = inst_21583__$1);

(statearr_21724[(15)] = inst_21585__$1);

(statearr_21724[(16)] = inst_21584__$1);

(statearr_21724[(17)] = inst_21582__$1);

return statearr_21724;
})();
var statearr_21725_21801 = state_21705__$1;
(statearr_21725_21801[(2)] = null);

(statearr_21725_21801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (21))){
var inst_21627 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21729_21802 = state_21705__$1;
(statearr_21729_21802[(2)] = inst_21627);

(statearr_21729_21802[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (31))){
var inst_21653 = (state_21705[(12)]);
var inst_21657 = done.call(null,null);
var inst_21658 = cljs.core.async.untap_STAR_.call(null,m,inst_21653);
var state_21705__$1 = (function (){var statearr_21730 = state_21705;
(statearr_21730[(19)] = inst_21657);

return statearr_21730;
})();
var statearr_21731_21803 = state_21705__$1;
(statearr_21731_21803[(2)] = inst_21658);

(statearr_21731_21803[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (32))){
var inst_21645 = (state_21705[(20)]);
var inst_21646 = (state_21705[(9)]);
var inst_21648 = (state_21705[(11)]);
var inst_21647 = (state_21705[(21)]);
var inst_21660 = (state_21705[(2)]);
var inst_21661 = (inst_21648 + (1));
var tmp21726 = inst_21645;
var tmp21727 = inst_21646;
var tmp21728 = inst_21647;
var inst_21645__$1 = tmp21726;
var inst_21646__$1 = tmp21727;
var inst_21647__$1 = tmp21728;
var inst_21648__$1 = inst_21661;
var state_21705__$1 = (function (){var statearr_21732 = state_21705;
(statearr_21732[(20)] = inst_21645__$1);

(statearr_21732[(9)] = inst_21646__$1);

(statearr_21732[(22)] = inst_21660);

(statearr_21732[(11)] = inst_21648__$1);

(statearr_21732[(21)] = inst_21647__$1);

return statearr_21732;
})();
var statearr_21733_21804 = state_21705__$1;
(statearr_21733_21804[(2)] = null);

(statearr_21733_21804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (40))){
var inst_21673 = (state_21705[(23)]);
var inst_21677 = done.call(null,null);
var inst_21678 = cljs.core.async.untap_STAR_.call(null,m,inst_21673);
var state_21705__$1 = (function (){var statearr_21734 = state_21705;
(statearr_21734[(24)] = inst_21677);

return statearr_21734;
})();
var statearr_21735_21805 = state_21705__$1;
(statearr_21735_21805[(2)] = inst_21678);

(statearr_21735_21805[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (33))){
var inst_21664 = (state_21705[(25)]);
var inst_21666 = cljs.core.chunked_seq_QMARK_.call(null,inst_21664);
var state_21705__$1 = state_21705;
if(inst_21666){
var statearr_21736_21806 = state_21705__$1;
(statearr_21736_21806[(1)] = (36));

} else {
var statearr_21737_21807 = state_21705__$1;
(statearr_21737_21807[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (13))){
var inst_21594 = (state_21705[(26)]);
var inst_21597 = cljs.core.async.close_BANG_.call(null,inst_21594);
var state_21705__$1 = state_21705;
var statearr_21738_21808 = state_21705__$1;
(statearr_21738_21808[(2)] = inst_21597);

(statearr_21738_21808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (22))){
var inst_21617 = (state_21705[(8)]);
var inst_21620 = cljs.core.async.close_BANG_.call(null,inst_21617);
var state_21705__$1 = state_21705;
var statearr_21739_21809 = state_21705__$1;
(statearr_21739_21809[(2)] = inst_21620);

(statearr_21739_21809[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (36))){
var inst_21664 = (state_21705[(25)]);
var inst_21668 = cljs.core.chunk_first.call(null,inst_21664);
var inst_21669 = cljs.core.chunk_rest.call(null,inst_21664);
var inst_21670 = cljs.core.count.call(null,inst_21668);
var inst_21645 = inst_21669;
var inst_21646 = inst_21668;
var inst_21647 = inst_21670;
var inst_21648 = (0);
var state_21705__$1 = (function (){var statearr_21740 = state_21705;
(statearr_21740[(20)] = inst_21645);

(statearr_21740[(9)] = inst_21646);

(statearr_21740[(11)] = inst_21648);

(statearr_21740[(21)] = inst_21647);

return statearr_21740;
})();
var statearr_21741_21810 = state_21705__$1;
(statearr_21741_21810[(2)] = null);

(statearr_21741_21810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (41))){
var inst_21664 = (state_21705[(25)]);
var inst_21680 = (state_21705[(2)]);
var inst_21681 = cljs.core.next.call(null,inst_21664);
var inst_21645 = inst_21681;
var inst_21646 = null;
var inst_21647 = (0);
var inst_21648 = (0);
var state_21705__$1 = (function (){var statearr_21742 = state_21705;
(statearr_21742[(20)] = inst_21645);

(statearr_21742[(9)] = inst_21646);

(statearr_21742[(11)] = inst_21648);

(statearr_21742[(27)] = inst_21680);

(statearr_21742[(21)] = inst_21647);

return statearr_21742;
})();
var statearr_21743_21811 = state_21705__$1;
(statearr_21743_21811[(2)] = null);

(statearr_21743_21811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (43))){
var state_21705__$1 = state_21705;
var statearr_21744_21812 = state_21705__$1;
(statearr_21744_21812[(2)] = null);

(statearr_21744_21812[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (29))){
var inst_21689 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21745_21813 = state_21705__$1;
(statearr_21745_21813[(2)] = inst_21689);

(statearr_21745_21813[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (44))){
var inst_21698 = (state_21705[(2)]);
var state_21705__$1 = (function (){var statearr_21746 = state_21705;
(statearr_21746[(28)] = inst_21698);

return statearr_21746;
})();
var statearr_21747_21814 = state_21705__$1;
(statearr_21747_21814[(2)] = null);

(statearr_21747_21814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (6))){
var inst_21637 = (state_21705[(29)]);
var inst_21636 = cljs.core.deref.call(null,cs);
var inst_21637__$1 = cljs.core.keys.call(null,inst_21636);
var inst_21638 = cljs.core.count.call(null,inst_21637__$1);
var inst_21639 = cljs.core.reset_BANG_.call(null,dctr,inst_21638);
var inst_21644 = cljs.core.seq.call(null,inst_21637__$1);
var inst_21645 = inst_21644;
var inst_21646 = null;
var inst_21647 = (0);
var inst_21648 = (0);
var state_21705__$1 = (function (){var statearr_21748 = state_21705;
(statearr_21748[(20)] = inst_21645);

(statearr_21748[(9)] = inst_21646);

(statearr_21748[(30)] = inst_21639);

(statearr_21748[(11)] = inst_21648);

(statearr_21748[(29)] = inst_21637__$1);

(statearr_21748[(21)] = inst_21647);

return statearr_21748;
})();
var statearr_21749_21815 = state_21705__$1;
(statearr_21749_21815[(2)] = null);

(statearr_21749_21815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (28))){
var inst_21645 = (state_21705[(20)]);
var inst_21664 = (state_21705[(25)]);
var inst_21664__$1 = cljs.core.seq.call(null,inst_21645);
var state_21705__$1 = (function (){var statearr_21750 = state_21705;
(statearr_21750[(25)] = inst_21664__$1);

return statearr_21750;
})();
if(inst_21664__$1){
var statearr_21751_21816 = state_21705__$1;
(statearr_21751_21816[(1)] = (33));

} else {
var statearr_21752_21817 = state_21705__$1;
(statearr_21752_21817[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (25))){
var inst_21648 = (state_21705[(11)]);
var inst_21647 = (state_21705[(21)]);
var inst_21650 = (inst_21648 < inst_21647);
var inst_21651 = inst_21650;
var state_21705__$1 = state_21705;
if(cljs.core.truth_(inst_21651)){
var statearr_21753_21818 = state_21705__$1;
(statearr_21753_21818[(1)] = (27));

} else {
var statearr_21754_21819 = state_21705__$1;
(statearr_21754_21819[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (34))){
var state_21705__$1 = state_21705;
var statearr_21755_21820 = state_21705__$1;
(statearr_21755_21820[(2)] = null);

(statearr_21755_21820[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (17))){
var state_21705__$1 = state_21705;
var statearr_21756_21821 = state_21705__$1;
(statearr_21756_21821[(2)] = null);

(statearr_21756_21821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (3))){
var inst_21703 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21705__$1,inst_21703);
} else {
if((state_val_21706 === (12))){
var inst_21632 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21757_21822 = state_21705__$1;
(statearr_21757_21822[(2)] = inst_21632);

(statearr_21757_21822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (2))){
var state_21705__$1 = state_21705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21705__$1,(4),ch);
} else {
if((state_val_21706 === (23))){
var state_21705__$1 = state_21705;
var statearr_21758_21823 = state_21705__$1;
(statearr_21758_21823[(2)] = null);

(statearr_21758_21823[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (35))){
var inst_21687 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21759_21824 = state_21705__$1;
(statearr_21759_21824[(2)] = inst_21687);

(statearr_21759_21824[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (19))){
var inst_21604 = (state_21705[(7)]);
var inst_21608 = cljs.core.chunk_first.call(null,inst_21604);
var inst_21609 = cljs.core.chunk_rest.call(null,inst_21604);
var inst_21610 = cljs.core.count.call(null,inst_21608);
var inst_21582 = inst_21609;
var inst_21583 = inst_21608;
var inst_21584 = inst_21610;
var inst_21585 = (0);
var state_21705__$1 = (function (){var statearr_21760 = state_21705;
(statearr_21760[(14)] = inst_21583);

(statearr_21760[(15)] = inst_21585);

(statearr_21760[(16)] = inst_21584);

(statearr_21760[(17)] = inst_21582);

return statearr_21760;
})();
var statearr_21761_21825 = state_21705__$1;
(statearr_21761_21825[(2)] = null);

(statearr_21761_21825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (11))){
var inst_21604 = (state_21705[(7)]);
var inst_21582 = (state_21705[(17)]);
var inst_21604__$1 = cljs.core.seq.call(null,inst_21582);
var state_21705__$1 = (function (){var statearr_21762 = state_21705;
(statearr_21762[(7)] = inst_21604__$1);

return statearr_21762;
})();
if(inst_21604__$1){
var statearr_21763_21826 = state_21705__$1;
(statearr_21763_21826[(1)] = (16));

} else {
var statearr_21764_21827 = state_21705__$1;
(statearr_21764_21827[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (9))){
var inst_21634 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21765_21828 = state_21705__$1;
(statearr_21765_21828[(2)] = inst_21634);

(statearr_21765_21828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (5))){
var inst_21580 = cljs.core.deref.call(null,cs);
var inst_21581 = cljs.core.seq.call(null,inst_21580);
var inst_21582 = inst_21581;
var inst_21583 = null;
var inst_21584 = (0);
var inst_21585 = (0);
var state_21705__$1 = (function (){var statearr_21766 = state_21705;
(statearr_21766[(14)] = inst_21583);

(statearr_21766[(15)] = inst_21585);

(statearr_21766[(16)] = inst_21584);

(statearr_21766[(17)] = inst_21582);

return statearr_21766;
})();
var statearr_21767_21829 = state_21705__$1;
(statearr_21767_21829[(2)] = null);

(statearr_21767_21829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (14))){
var state_21705__$1 = state_21705;
var statearr_21768_21830 = state_21705__$1;
(statearr_21768_21830[(2)] = null);

(statearr_21768_21830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (45))){
var inst_21695 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21769_21831 = state_21705__$1;
(statearr_21769_21831[(2)] = inst_21695);

(statearr_21769_21831[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (26))){
var inst_21637 = (state_21705[(29)]);
var inst_21691 = (state_21705[(2)]);
var inst_21692 = cljs.core.seq.call(null,inst_21637);
var state_21705__$1 = (function (){var statearr_21770 = state_21705;
(statearr_21770[(31)] = inst_21691);

return statearr_21770;
})();
if(inst_21692){
var statearr_21771_21832 = state_21705__$1;
(statearr_21771_21832[(1)] = (42));

} else {
var statearr_21772_21833 = state_21705__$1;
(statearr_21772_21833[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (16))){
var inst_21604 = (state_21705[(7)]);
var inst_21606 = cljs.core.chunked_seq_QMARK_.call(null,inst_21604);
var state_21705__$1 = state_21705;
if(inst_21606){
var statearr_21773_21834 = state_21705__$1;
(statearr_21773_21834[(1)] = (19));

} else {
var statearr_21774_21835 = state_21705__$1;
(statearr_21774_21835[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (38))){
var inst_21684 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21775_21836 = state_21705__$1;
(statearr_21775_21836[(2)] = inst_21684);

(statearr_21775_21836[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (30))){
var state_21705__$1 = state_21705;
var statearr_21776_21837 = state_21705__$1;
(statearr_21776_21837[(2)] = null);

(statearr_21776_21837[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (10))){
var inst_21583 = (state_21705[(14)]);
var inst_21585 = (state_21705[(15)]);
var inst_21593 = cljs.core._nth.call(null,inst_21583,inst_21585);
var inst_21594 = cljs.core.nth.call(null,inst_21593,(0),null);
var inst_21595 = cljs.core.nth.call(null,inst_21593,(1),null);
var state_21705__$1 = (function (){var statearr_21777 = state_21705;
(statearr_21777[(26)] = inst_21594);

return statearr_21777;
})();
if(cljs.core.truth_(inst_21595)){
var statearr_21778_21838 = state_21705__$1;
(statearr_21778_21838[(1)] = (13));

} else {
var statearr_21779_21839 = state_21705__$1;
(statearr_21779_21839[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (18))){
var inst_21630 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21780_21840 = state_21705__$1;
(statearr_21780_21840[(2)] = inst_21630);

(statearr_21780_21840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (42))){
var state_21705__$1 = state_21705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21705__$1,(45),dchan);
} else {
if((state_val_21706 === (37))){
var inst_21664 = (state_21705[(25)]);
var inst_21573 = (state_21705[(10)]);
var inst_21673 = (state_21705[(23)]);
var inst_21673__$1 = cljs.core.first.call(null,inst_21664);
var inst_21674 = cljs.core.async.put_BANG_.call(null,inst_21673__$1,inst_21573,done);
var state_21705__$1 = (function (){var statearr_21781 = state_21705;
(statearr_21781[(23)] = inst_21673__$1);

return statearr_21781;
})();
if(cljs.core.truth_(inst_21674)){
var statearr_21782_21841 = state_21705__$1;
(statearr_21782_21841[(1)] = (39));

} else {
var statearr_21783_21842 = state_21705__$1;
(statearr_21783_21842[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (8))){
var inst_21585 = (state_21705[(15)]);
var inst_21584 = (state_21705[(16)]);
var inst_21587 = (inst_21585 < inst_21584);
var inst_21588 = inst_21587;
var state_21705__$1 = state_21705;
if(cljs.core.truth_(inst_21588)){
var statearr_21784_21843 = state_21705__$1;
(statearr_21784_21843[(1)] = (10));

} else {
var statearr_21785_21844 = state_21705__$1;
(statearr_21785_21844[(1)] = (11));

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
});})(c__19107__auto___21790,cs,m,dchan,dctr,done))
;
return ((function (switch__18940__auto__,c__19107__auto___21790,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18941__auto__ = null;
var cljs$core$async$mult_$_state_machine__18941__auto____0 = (function (){
var statearr_21786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21786[(0)] = cljs$core$async$mult_$_state_machine__18941__auto__);

(statearr_21786[(1)] = (1));

return statearr_21786;
});
var cljs$core$async$mult_$_state_machine__18941__auto____1 = (function (state_21705){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e21787){if((e21787 instanceof Object)){
var ex__18944__auto__ = e21787;
var statearr_21788_21845 = state_21705;
(statearr_21788_21845[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21846 = state_21705;
state_21705 = G__21846;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18941__auto__ = function(state_21705){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18941__auto____1.call(this,state_21705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18941__auto____0;
cljs$core$async$mult_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18941__auto____1;
return cljs$core$async$mult_$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___21790,cs,m,dchan,dctr,done))
})();
var state__19109__auto__ = (function (){var statearr_21789 = f__19108__auto__.call(null);
(statearr_21789[(6)] = c__19107__auto___21790);

return statearr_21789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___21790,cs,m,dchan,dctr,done))
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
var G__21848 = arguments.length;
switch (G__21848) {
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___21860 = arguments.length;
var i__4642__auto___21861 = (0);
while(true){
if((i__4642__auto___21861 < len__4641__auto___21860)){
args__4647__auto__.push((arguments[i__4642__auto___21861]));

var G__21862 = (i__4642__auto___21861 + (1));
i__4642__auto___21861 = G__21862;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21854){
var map__21855 = p__21854;
var map__21855__$1 = (((((!((map__21855 == null))))?(((((map__21855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21855):map__21855);
var opts = map__21855__$1;
var statearr_21857_21863 = state;
(statearr_21857_21863[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__21855,map__21855__$1,opts){
return (function (val){
var statearr_21858_21864 = state;
(statearr_21858_21864[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21855,map__21855__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_21859_21865 = state;
(statearr_21859_21865[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21850){
var G__21851 = cljs.core.first.call(null,seq21850);
var seq21850__$1 = cljs.core.next.call(null,seq21850);
var G__21852 = cljs.core.first.call(null,seq21850__$1);
var seq21850__$2 = cljs.core.next.call(null,seq21850__$1);
var G__21853 = cljs.core.first.call(null,seq21850__$2);
var seq21850__$3 = cljs.core.next.call(null,seq21850__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21851,G__21852,G__21853,seq21850__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21866 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21867){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21867 = meta21867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21868,meta21867__$1){
var self__ = this;
var _21868__$1 = this;
return (new cljs.core.async.t_cljs$core$async21866(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21867__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21868){
var self__ = this;
var _21868__$1 = this;
return self__.meta21867;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async21866.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21867","meta21867",917774921,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21866";

cljs.core.async.t_cljs$core$async21866.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async21866");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21866.
 */
cljs.core.async.__GT_t_cljs$core$async21866 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21866(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21867){
return (new cljs.core.async.t_cljs$core$async21866(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21867));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21866(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19107__auto___22030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___22030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___22030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21970){
var state_val_21971 = (state_21970[(1)]);
if((state_val_21971 === (7))){
var inst_21885 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_21972_22031 = state_21970__$1;
(statearr_21972_22031[(2)] = inst_21885);

(statearr_21972_22031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (20))){
var inst_21897 = (state_21970[(7)]);
var state_21970__$1 = state_21970;
var statearr_21973_22032 = state_21970__$1;
(statearr_21973_22032[(2)] = inst_21897);

(statearr_21973_22032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (27))){
var state_21970__$1 = state_21970;
var statearr_21974_22033 = state_21970__$1;
(statearr_21974_22033[(2)] = null);

(statearr_21974_22033[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (1))){
var inst_21872 = (state_21970[(8)]);
var inst_21872__$1 = calc_state.call(null);
var inst_21874 = (inst_21872__$1 == null);
var inst_21875 = cljs.core.not.call(null,inst_21874);
var state_21970__$1 = (function (){var statearr_21975 = state_21970;
(statearr_21975[(8)] = inst_21872__$1);

return statearr_21975;
})();
if(inst_21875){
var statearr_21976_22034 = state_21970__$1;
(statearr_21976_22034[(1)] = (2));

} else {
var statearr_21977_22035 = state_21970__$1;
(statearr_21977_22035[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (24))){
var inst_21921 = (state_21970[(9)]);
var inst_21930 = (state_21970[(10)]);
var inst_21944 = (state_21970[(11)]);
var inst_21944__$1 = inst_21921.call(null,inst_21930);
var state_21970__$1 = (function (){var statearr_21978 = state_21970;
(statearr_21978[(11)] = inst_21944__$1);

return statearr_21978;
})();
if(cljs.core.truth_(inst_21944__$1)){
var statearr_21979_22036 = state_21970__$1;
(statearr_21979_22036[(1)] = (29));

} else {
var statearr_21980_22037 = state_21970__$1;
(statearr_21980_22037[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (4))){
var inst_21888 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
if(cljs.core.truth_(inst_21888)){
var statearr_21981_22038 = state_21970__$1;
(statearr_21981_22038[(1)] = (8));

} else {
var statearr_21982_22039 = state_21970__$1;
(statearr_21982_22039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (15))){
var inst_21915 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
if(cljs.core.truth_(inst_21915)){
var statearr_21983_22040 = state_21970__$1;
(statearr_21983_22040[(1)] = (19));

} else {
var statearr_21984_22041 = state_21970__$1;
(statearr_21984_22041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (21))){
var inst_21920 = (state_21970[(12)]);
var inst_21920__$1 = (state_21970[(2)]);
var inst_21921 = cljs.core.get.call(null,inst_21920__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21922 = cljs.core.get.call(null,inst_21920__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21923 = cljs.core.get.call(null,inst_21920__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21970__$1 = (function (){var statearr_21985 = state_21970;
(statearr_21985[(12)] = inst_21920__$1);

(statearr_21985[(9)] = inst_21921);

(statearr_21985[(13)] = inst_21922);

return statearr_21985;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21970__$1,(22),inst_21923);
} else {
if((state_val_21971 === (31))){
var inst_21952 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
if(cljs.core.truth_(inst_21952)){
var statearr_21986_22042 = state_21970__$1;
(statearr_21986_22042[(1)] = (32));

} else {
var statearr_21987_22043 = state_21970__$1;
(statearr_21987_22043[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (32))){
var inst_21929 = (state_21970[(14)]);
var state_21970__$1 = state_21970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21970__$1,(35),out,inst_21929);
} else {
if((state_val_21971 === (33))){
var inst_21920 = (state_21970[(12)]);
var inst_21897 = inst_21920;
var state_21970__$1 = (function (){var statearr_21988 = state_21970;
(statearr_21988[(7)] = inst_21897);

return statearr_21988;
})();
var statearr_21989_22044 = state_21970__$1;
(statearr_21989_22044[(2)] = null);

(statearr_21989_22044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (13))){
var inst_21897 = (state_21970[(7)]);
var inst_21904 = inst_21897.cljs$lang$protocol_mask$partition0$;
var inst_21905 = (inst_21904 & (64));
var inst_21906 = inst_21897.cljs$core$ISeq$;
var inst_21907 = (cljs.core.PROTOCOL_SENTINEL === inst_21906);
var inst_21908 = ((inst_21905) || (inst_21907));
var state_21970__$1 = state_21970;
if(cljs.core.truth_(inst_21908)){
var statearr_21990_22045 = state_21970__$1;
(statearr_21990_22045[(1)] = (16));

} else {
var statearr_21991_22046 = state_21970__$1;
(statearr_21991_22046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (22))){
var inst_21929 = (state_21970[(14)]);
var inst_21930 = (state_21970[(10)]);
var inst_21928 = (state_21970[(2)]);
var inst_21929__$1 = cljs.core.nth.call(null,inst_21928,(0),null);
var inst_21930__$1 = cljs.core.nth.call(null,inst_21928,(1),null);
var inst_21931 = (inst_21929__$1 == null);
var inst_21932 = cljs.core._EQ_.call(null,inst_21930__$1,change);
var inst_21933 = ((inst_21931) || (inst_21932));
var state_21970__$1 = (function (){var statearr_21992 = state_21970;
(statearr_21992[(14)] = inst_21929__$1);

(statearr_21992[(10)] = inst_21930__$1);

return statearr_21992;
})();
if(cljs.core.truth_(inst_21933)){
var statearr_21993_22047 = state_21970__$1;
(statearr_21993_22047[(1)] = (23));

} else {
var statearr_21994_22048 = state_21970__$1;
(statearr_21994_22048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (36))){
var inst_21920 = (state_21970[(12)]);
var inst_21897 = inst_21920;
var state_21970__$1 = (function (){var statearr_21995 = state_21970;
(statearr_21995[(7)] = inst_21897);

return statearr_21995;
})();
var statearr_21996_22049 = state_21970__$1;
(statearr_21996_22049[(2)] = null);

(statearr_21996_22049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (29))){
var inst_21944 = (state_21970[(11)]);
var state_21970__$1 = state_21970;
var statearr_21997_22050 = state_21970__$1;
(statearr_21997_22050[(2)] = inst_21944);

(statearr_21997_22050[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (6))){
var state_21970__$1 = state_21970;
var statearr_21998_22051 = state_21970__$1;
(statearr_21998_22051[(2)] = false);

(statearr_21998_22051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (28))){
var inst_21940 = (state_21970[(2)]);
var inst_21941 = calc_state.call(null);
var inst_21897 = inst_21941;
var state_21970__$1 = (function (){var statearr_21999 = state_21970;
(statearr_21999[(7)] = inst_21897);

(statearr_21999[(15)] = inst_21940);

return statearr_21999;
})();
var statearr_22000_22052 = state_21970__$1;
(statearr_22000_22052[(2)] = null);

(statearr_22000_22052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (25))){
var inst_21966 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_22001_22053 = state_21970__$1;
(statearr_22001_22053[(2)] = inst_21966);

(statearr_22001_22053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (34))){
var inst_21964 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_22002_22054 = state_21970__$1;
(statearr_22002_22054[(2)] = inst_21964);

(statearr_22002_22054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (17))){
var state_21970__$1 = state_21970;
var statearr_22003_22055 = state_21970__$1;
(statearr_22003_22055[(2)] = false);

(statearr_22003_22055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (3))){
var state_21970__$1 = state_21970;
var statearr_22004_22056 = state_21970__$1;
(statearr_22004_22056[(2)] = false);

(statearr_22004_22056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (12))){
var inst_21968 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21970__$1,inst_21968);
} else {
if((state_val_21971 === (2))){
var inst_21872 = (state_21970[(8)]);
var inst_21877 = inst_21872.cljs$lang$protocol_mask$partition0$;
var inst_21878 = (inst_21877 & (64));
var inst_21879 = inst_21872.cljs$core$ISeq$;
var inst_21880 = (cljs.core.PROTOCOL_SENTINEL === inst_21879);
var inst_21881 = ((inst_21878) || (inst_21880));
var state_21970__$1 = state_21970;
if(cljs.core.truth_(inst_21881)){
var statearr_22005_22057 = state_21970__$1;
(statearr_22005_22057[(1)] = (5));

} else {
var statearr_22006_22058 = state_21970__$1;
(statearr_22006_22058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (23))){
var inst_21929 = (state_21970[(14)]);
var inst_21935 = (inst_21929 == null);
var state_21970__$1 = state_21970;
if(cljs.core.truth_(inst_21935)){
var statearr_22007_22059 = state_21970__$1;
(statearr_22007_22059[(1)] = (26));

} else {
var statearr_22008_22060 = state_21970__$1;
(statearr_22008_22060[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (35))){
var inst_21955 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
if(cljs.core.truth_(inst_21955)){
var statearr_22009_22061 = state_21970__$1;
(statearr_22009_22061[(1)] = (36));

} else {
var statearr_22010_22062 = state_21970__$1;
(statearr_22010_22062[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (19))){
var inst_21897 = (state_21970[(7)]);
var inst_21917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21897);
var state_21970__$1 = state_21970;
var statearr_22011_22063 = state_21970__$1;
(statearr_22011_22063[(2)] = inst_21917);

(statearr_22011_22063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (11))){
var inst_21897 = (state_21970[(7)]);
var inst_21901 = (inst_21897 == null);
var inst_21902 = cljs.core.not.call(null,inst_21901);
var state_21970__$1 = state_21970;
if(inst_21902){
var statearr_22012_22064 = state_21970__$1;
(statearr_22012_22064[(1)] = (13));

} else {
var statearr_22013_22065 = state_21970__$1;
(statearr_22013_22065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (9))){
var inst_21872 = (state_21970[(8)]);
var state_21970__$1 = state_21970;
var statearr_22014_22066 = state_21970__$1;
(statearr_22014_22066[(2)] = inst_21872);

(statearr_22014_22066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (5))){
var state_21970__$1 = state_21970;
var statearr_22015_22067 = state_21970__$1;
(statearr_22015_22067[(2)] = true);

(statearr_22015_22067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (14))){
var state_21970__$1 = state_21970;
var statearr_22016_22068 = state_21970__$1;
(statearr_22016_22068[(2)] = false);

(statearr_22016_22068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (26))){
var inst_21930 = (state_21970[(10)]);
var inst_21937 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21930);
var state_21970__$1 = state_21970;
var statearr_22017_22069 = state_21970__$1;
(statearr_22017_22069[(2)] = inst_21937);

(statearr_22017_22069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (16))){
var state_21970__$1 = state_21970;
var statearr_22018_22070 = state_21970__$1;
(statearr_22018_22070[(2)] = true);

(statearr_22018_22070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (38))){
var inst_21960 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_22019_22071 = state_21970__$1;
(statearr_22019_22071[(2)] = inst_21960);

(statearr_22019_22071[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (30))){
var inst_21921 = (state_21970[(9)]);
var inst_21930 = (state_21970[(10)]);
var inst_21922 = (state_21970[(13)]);
var inst_21947 = cljs.core.empty_QMARK_.call(null,inst_21921);
var inst_21948 = inst_21922.call(null,inst_21930);
var inst_21949 = cljs.core.not.call(null,inst_21948);
var inst_21950 = ((inst_21947) && (inst_21949));
var state_21970__$1 = state_21970;
var statearr_22020_22072 = state_21970__$1;
(statearr_22020_22072[(2)] = inst_21950);

(statearr_22020_22072[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (10))){
var inst_21872 = (state_21970[(8)]);
var inst_21893 = (state_21970[(2)]);
var inst_21894 = cljs.core.get.call(null,inst_21893,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21895 = cljs.core.get.call(null,inst_21893,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21896 = cljs.core.get.call(null,inst_21893,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21897 = inst_21872;
var state_21970__$1 = (function (){var statearr_22021 = state_21970;
(statearr_22021[(16)] = inst_21894);

(statearr_22021[(17)] = inst_21896);

(statearr_22021[(7)] = inst_21897);

(statearr_22021[(18)] = inst_21895);

return statearr_22021;
})();
var statearr_22022_22073 = state_21970__$1;
(statearr_22022_22073[(2)] = null);

(statearr_22022_22073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (18))){
var inst_21912 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_22023_22074 = state_21970__$1;
(statearr_22023_22074[(2)] = inst_21912);

(statearr_22023_22074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (37))){
var state_21970__$1 = state_21970;
var statearr_22024_22075 = state_21970__$1;
(statearr_22024_22075[(2)] = null);

(statearr_22024_22075[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (8))){
var inst_21872 = (state_21970[(8)]);
var inst_21890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21872);
var state_21970__$1 = state_21970;
var statearr_22025_22076 = state_21970__$1;
(statearr_22025_22076[(2)] = inst_21890);

(statearr_22025_22076[(1)] = (10));


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
});})(c__19107__auto___22030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18940__auto__,c__19107__auto___22030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18941__auto__ = null;
var cljs$core$async$mix_$_state_machine__18941__auto____0 = (function (){
var statearr_22026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22026[(0)] = cljs$core$async$mix_$_state_machine__18941__auto__);

(statearr_22026[(1)] = (1));

return statearr_22026;
});
var cljs$core$async$mix_$_state_machine__18941__auto____1 = (function (state_21970){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_21970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e22027){if((e22027 instanceof Object)){
var ex__18944__auto__ = e22027;
var statearr_22028_22077 = state_21970;
(statearr_22028_22077[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22078 = state_21970;
state_21970 = G__22078;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18941__auto__ = function(state_21970){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18941__auto____1.call(this,state_21970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18941__auto____0;
cljs$core$async$mix_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18941__auto____1;
return cljs$core$async$mix_$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___22030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19109__auto__ = (function (){var statearr_22029 = f__19108__auto__.call(null);
(statearr_22029[(6)] = c__19107__auto___22030);

return statearr_22029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___22030,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22080 = arguments.length;
switch (G__22080) {
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
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
var G__22084 = arguments.length;
switch (G__22084) {
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
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__22082_SHARP_){
if(cljs.core.truth_(p1__22082_SHARP_.call(null,topic))){
return p1__22082_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22082_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22085 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22086){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22086 = meta22086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22087,meta22086__$1){
var self__ = this;
var _22087__$1 = this;
return (new cljs.core.async.t_cljs$core$async22085(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22086__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22087){
var self__ = this;
var _22087__$1 = this;
return self__.meta22086;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22085.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22085.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22086","meta22086",970313801,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22085";

cljs.core.async.t_cljs$core$async22085.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async22085");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22085.
 */
cljs.core.async.__GT_t_cljs$core$async22085 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22085(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22086){
return (new cljs.core.async.t_cljs$core$async22085(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22086));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22085(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19107__auto___22205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___22205,mults,ensure_mult,p){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___22205,mults,ensure_mult,p){
return (function (state_22159){
var state_val_22160 = (state_22159[(1)]);
if((state_val_22160 === (7))){
var inst_22155 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
var statearr_22161_22206 = state_22159__$1;
(statearr_22161_22206[(2)] = inst_22155);

(statearr_22161_22206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (20))){
var state_22159__$1 = state_22159;
var statearr_22162_22207 = state_22159__$1;
(statearr_22162_22207[(2)] = null);

(statearr_22162_22207[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (1))){
var state_22159__$1 = state_22159;
var statearr_22163_22208 = state_22159__$1;
(statearr_22163_22208[(2)] = null);

(statearr_22163_22208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (24))){
var inst_22138 = (state_22159[(7)]);
var inst_22147 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22138);
var state_22159__$1 = state_22159;
var statearr_22164_22209 = state_22159__$1;
(statearr_22164_22209[(2)] = inst_22147);

(statearr_22164_22209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (4))){
var inst_22090 = (state_22159[(8)]);
var inst_22090__$1 = (state_22159[(2)]);
var inst_22091 = (inst_22090__$1 == null);
var state_22159__$1 = (function (){var statearr_22165 = state_22159;
(statearr_22165[(8)] = inst_22090__$1);

return statearr_22165;
})();
if(cljs.core.truth_(inst_22091)){
var statearr_22166_22210 = state_22159__$1;
(statearr_22166_22210[(1)] = (5));

} else {
var statearr_22167_22211 = state_22159__$1;
(statearr_22167_22211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (15))){
var inst_22132 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
var statearr_22168_22212 = state_22159__$1;
(statearr_22168_22212[(2)] = inst_22132);

(statearr_22168_22212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (21))){
var inst_22152 = (state_22159[(2)]);
var state_22159__$1 = (function (){var statearr_22169 = state_22159;
(statearr_22169[(9)] = inst_22152);

return statearr_22169;
})();
var statearr_22170_22213 = state_22159__$1;
(statearr_22170_22213[(2)] = null);

(statearr_22170_22213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (13))){
var inst_22114 = (state_22159[(10)]);
var inst_22116 = cljs.core.chunked_seq_QMARK_.call(null,inst_22114);
var state_22159__$1 = state_22159;
if(inst_22116){
var statearr_22171_22214 = state_22159__$1;
(statearr_22171_22214[(1)] = (16));

} else {
var statearr_22172_22215 = state_22159__$1;
(statearr_22172_22215[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (22))){
var inst_22144 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
if(cljs.core.truth_(inst_22144)){
var statearr_22173_22216 = state_22159__$1;
(statearr_22173_22216[(1)] = (23));

} else {
var statearr_22174_22217 = state_22159__$1;
(statearr_22174_22217[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (6))){
var inst_22140 = (state_22159[(11)]);
var inst_22138 = (state_22159[(7)]);
var inst_22090 = (state_22159[(8)]);
var inst_22138__$1 = topic_fn.call(null,inst_22090);
var inst_22139 = cljs.core.deref.call(null,mults);
var inst_22140__$1 = cljs.core.get.call(null,inst_22139,inst_22138__$1);
var state_22159__$1 = (function (){var statearr_22175 = state_22159;
(statearr_22175[(11)] = inst_22140__$1);

(statearr_22175[(7)] = inst_22138__$1);

return statearr_22175;
})();
if(cljs.core.truth_(inst_22140__$1)){
var statearr_22176_22218 = state_22159__$1;
(statearr_22176_22218[(1)] = (19));

} else {
var statearr_22177_22219 = state_22159__$1;
(statearr_22177_22219[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (25))){
var inst_22149 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
var statearr_22178_22220 = state_22159__$1;
(statearr_22178_22220[(2)] = inst_22149);

(statearr_22178_22220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (17))){
var inst_22114 = (state_22159[(10)]);
var inst_22123 = cljs.core.first.call(null,inst_22114);
var inst_22124 = cljs.core.async.muxch_STAR_.call(null,inst_22123);
var inst_22125 = cljs.core.async.close_BANG_.call(null,inst_22124);
var inst_22126 = cljs.core.next.call(null,inst_22114);
var inst_22100 = inst_22126;
var inst_22101 = null;
var inst_22102 = (0);
var inst_22103 = (0);
var state_22159__$1 = (function (){var statearr_22179 = state_22159;
(statearr_22179[(12)] = inst_22125);

(statearr_22179[(13)] = inst_22101);

(statearr_22179[(14)] = inst_22103);

(statearr_22179[(15)] = inst_22100);

(statearr_22179[(16)] = inst_22102);

return statearr_22179;
})();
var statearr_22180_22221 = state_22159__$1;
(statearr_22180_22221[(2)] = null);

(statearr_22180_22221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (3))){
var inst_22157 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22159__$1,inst_22157);
} else {
if((state_val_22160 === (12))){
var inst_22134 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
var statearr_22181_22222 = state_22159__$1;
(statearr_22181_22222[(2)] = inst_22134);

(statearr_22181_22222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (2))){
var state_22159__$1 = state_22159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22159__$1,(4),ch);
} else {
if((state_val_22160 === (23))){
var state_22159__$1 = state_22159;
var statearr_22182_22223 = state_22159__$1;
(statearr_22182_22223[(2)] = null);

(statearr_22182_22223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (19))){
var inst_22140 = (state_22159[(11)]);
var inst_22090 = (state_22159[(8)]);
var inst_22142 = cljs.core.async.muxch_STAR_.call(null,inst_22140);
var state_22159__$1 = state_22159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22159__$1,(22),inst_22142,inst_22090);
} else {
if((state_val_22160 === (11))){
var inst_22100 = (state_22159[(15)]);
var inst_22114 = (state_22159[(10)]);
var inst_22114__$1 = cljs.core.seq.call(null,inst_22100);
var state_22159__$1 = (function (){var statearr_22183 = state_22159;
(statearr_22183[(10)] = inst_22114__$1);

return statearr_22183;
})();
if(inst_22114__$1){
var statearr_22184_22224 = state_22159__$1;
(statearr_22184_22224[(1)] = (13));

} else {
var statearr_22185_22225 = state_22159__$1;
(statearr_22185_22225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (9))){
var inst_22136 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
var statearr_22186_22226 = state_22159__$1;
(statearr_22186_22226[(2)] = inst_22136);

(statearr_22186_22226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (5))){
var inst_22097 = cljs.core.deref.call(null,mults);
var inst_22098 = cljs.core.vals.call(null,inst_22097);
var inst_22099 = cljs.core.seq.call(null,inst_22098);
var inst_22100 = inst_22099;
var inst_22101 = null;
var inst_22102 = (0);
var inst_22103 = (0);
var state_22159__$1 = (function (){var statearr_22187 = state_22159;
(statearr_22187[(13)] = inst_22101);

(statearr_22187[(14)] = inst_22103);

(statearr_22187[(15)] = inst_22100);

(statearr_22187[(16)] = inst_22102);

return statearr_22187;
})();
var statearr_22188_22227 = state_22159__$1;
(statearr_22188_22227[(2)] = null);

(statearr_22188_22227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (14))){
var state_22159__$1 = state_22159;
var statearr_22192_22228 = state_22159__$1;
(statearr_22192_22228[(2)] = null);

(statearr_22192_22228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (16))){
var inst_22114 = (state_22159[(10)]);
var inst_22118 = cljs.core.chunk_first.call(null,inst_22114);
var inst_22119 = cljs.core.chunk_rest.call(null,inst_22114);
var inst_22120 = cljs.core.count.call(null,inst_22118);
var inst_22100 = inst_22119;
var inst_22101 = inst_22118;
var inst_22102 = inst_22120;
var inst_22103 = (0);
var state_22159__$1 = (function (){var statearr_22193 = state_22159;
(statearr_22193[(13)] = inst_22101);

(statearr_22193[(14)] = inst_22103);

(statearr_22193[(15)] = inst_22100);

(statearr_22193[(16)] = inst_22102);

return statearr_22193;
})();
var statearr_22194_22229 = state_22159__$1;
(statearr_22194_22229[(2)] = null);

(statearr_22194_22229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (10))){
var inst_22101 = (state_22159[(13)]);
var inst_22103 = (state_22159[(14)]);
var inst_22100 = (state_22159[(15)]);
var inst_22102 = (state_22159[(16)]);
var inst_22108 = cljs.core._nth.call(null,inst_22101,inst_22103);
var inst_22109 = cljs.core.async.muxch_STAR_.call(null,inst_22108);
var inst_22110 = cljs.core.async.close_BANG_.call(null,inst_22109);
var inst_22111 = (inst_22103 + (1));
var tmp22189 = inst_22101;
var tmp22190 = inst_22100;
var tmp22191 = inst_22102;
var inst_22100__$1 = tmp22190;
var inst_22101__$1 = tmp22189;
var inst_22102__$1 = tmp22191;
var inst_22103__$1 = inst_22111;
var state_22159__$1 = (function (){var statearr_22195 = state_22159;
(statearr_22195[(13)] = inst_22101__$1);

(statearr_22195[(14)] = inst_22103__$1);

(statearr_22195[(15)] = inst_22100__$1);

(statearr_22195[(16)] = inst_22102__$1);

(statearr_22195[(17)] = inst_22110);

return statearr_22195;
})();
var statearr_22196_22230 = state_22159__$1;
(statearr_22196_22230[(2)] = null);

(statearr_22196_22230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (18))){
var inst_22129 = (state_22159[(2)]);
var state_22159__$1 = state_22159;
var statearr_22197_22231 = state_22159__$1;
(statearr_22197_22231[(2)] = inst_22129);

(statearr_22197_22231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22160 === (8))){
var inst_22103 = (state_22159[(14)]);
var inst_22102 = (state_22159[(16)]);
var inst_22105 = (inst_22103 < inst_22102);
var inst_22106 = inst_22105;
var state_22159__$1 = state_22159;
if(cljs.core.truth_(inst_22106)){
var statearr_22198_22232 = state_22159__$1;
(statearr_22198_22232[(1)] = (10));

} else {
var statearr_22199_22233 = state_22159__$1;
(statearr_22199_22233[(1)] = (11));

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
});})(c__19107__auto___22205,mults,ensure_mult,p))
;
return ((function (switch__18940__auto__,c__19107__auto___22205,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18941__auto__ = null;
var cljs$core$async$state_machine__18941__auto____0 = (function (){
var statearr_22200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22200[(0)] = cljs$core$async$state_machine__18941__auto__);

(statearr_22200[(1)] = (1));

return statearr_22200;
});
var cljs$core$async$state_machine__18941__auto____1 = (function (state_22159){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_22159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e22201){if((e22201 instanceof Object)){
var ex__18944__auto__ = e22201;
var statearr_22202_22234 = state_22159;
(statearr_22202_22234[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22235 = state_22159;
state_22159 = G__22235;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$state_machine__18941__auto__ = function(state_22159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18941__auto____1.call(this,state_22159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18941__auto____0;
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18941__auto____1;
return cljs$core$async$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___22205,mults,ensure_mult,p))
})();
var state__19109__auto__ = (function (){var statearr_22203 = f__19108__auto__.call(null);
(statearr_22203[(6)] = c__19107__auto___22205);

return statearr_22203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___22205,mults,ensure_mult,p))
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
var G__22237 = arguments.length;
switch (G__22237) {
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
var G__22240 = arguments.length;
switch (G__22240) {
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
var G__22243 = arguments.length;
switch (G__22243) {
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
var c__19107__auto___22310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___22310,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___22310,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22282){
var state_val_22283 = (state_22282[(1)]);
if((state_val_22283 === (7))){
var state_22282__$1 = state_22282;
var statearr_22284_22311 = state_22282__$1;
(statearr_22284_22311[(2)] = null);

(statearr_22284_22311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (1))){
var state_22282__$1 = state_22282;
var statearr_22285_22312 = state_22282__$1;
(statearr_22285_22312[(2)] = null);

(statearr_22285_22312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (4))){
var inst_22246 = (state_22282[(7)]);
var inst_22248 = (inst_22246 < cnt);
var state_22282__$1 = state_22282;
if(cljs.core.truth_(inst_22248)){
var statearr_22286_22313 = state_22282__$1;
(statearr_22286_22313[(1)] = (6));

} else {
var statearr_22287_22314 = state_22282__$1;
(statearr_22287_22314[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (15))){
var inst_22278 = (state_22282[(2)]);
var state_22282__$1 = state_22282;
var statearr_22288_22315 = state_22282__$1;
(statearr_22288_22315[(2)] = inst_22278);

(statearr_22288_22315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (13))){
var inst_22271 = cljs.core.async.close_BANG_.call(null,out);
var state_22282__$1 = state_22282;
var statearr_22289_22316 = state_22282__$1;
(statearr_22289_22316[(2)] = inst_22271);

(statearr_22289_22316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (6))){
var state_22282__$1 = state_22282;
var statearr_22290_22317 = state_22282__$1;
(statearr_22290_22317[(2)] = null);

(statearr_22290_22317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (3))){
var inst_22280 = (state_22282[(2)]);
var state_22282__$1 = state_22282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22282__$1,inst_22280);
} else {
if((state_val_22283 === (12))){
var inst_22268 = (state_22282[(8)]);
var inst_22268__$1 = (state_22282[(2)]);
var inst_22269 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22268__$1);
var state_22282__$1 = (function (){var statearr_22291 = state_22282;
(statearr_22291[(8)] = inst_22268__$1);

return statearr_22291;
})();
if(cljs.core.truth_(inst_22269)){
var statearr_22292_22318 = state_22282__$1;
(statearr_22292_22318[(1)] = (13));

} else {
var statearr_22293_22319 = state_22282__$1;
(statearr_22293_22319[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (2))){
var inst_22245 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22246 = (0);
var state_22282__$1 = (function (){var statearr_22294 = state_22282;
(statearr_22294[(9)] = inst_22245);

(statearr_22294[(7)] = inst_22246);

return statearr_22294;
})();
var statearr_22295_22320 = state_22282__$1;
(statearr_22295_22320[(2)] = null);

(statearr_22295_22320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (11))){
var inst_22246 = (state_22282[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22282,(10),Object,null,(9));
var inst_22255 = chs__$1.call(null,inst_22246);
var inst_22256 = done.call(null,inst_22246);
var inst_22257 = cljs.core.async.take_BANG_.call(null,inst_22255,inst_22256);
var state_22282__$1 = state_22282;
var statearr_22296_22321 = state_22282__$1;
(statearr_22296_22321[(2)] = inst_22257);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (9))){
var inst_22246 = (state_22282[(7)]);
var inst_22259 = (state_22282[(2)]);
var inst_22260 = (inst_22246 + (1));
var inst_22246__$1 = inst_22260;
var state_22282__$1 = (function (){var statearr_22297 = state_22282;
(statearr_22297[(10)] = inst_22259);

(statearr_22297[(7)] = inst_22246__$1);

return statearr_22297;
})();
var statearr_22298_22322 = state_22282__$1;
(statearr_22298_22322[(2)] = null);

(statearr_22298_22322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (5))){
var inst_22266 = (state_22282[(2)]);
var state_22282__$1 = (function (){var statearr_22299 = state_22282;
(statearr_22299[(11)] = inst_22266);

return statearr_22299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22282__$1,(12),dchan);
} else {
if((state_val_22283 === (14))){
var inst_22268 = (state_22282[(8)]);
var inst_22273 = cljs.core.apply.call(null,f,inst_22268);
var state_22282__$1 = state_22282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22282__$1,(16),out,inst_22273);
} else {
if((state_val_22283 === (16))){
var inst_22275 = (state_22282[(2)]);
var state_22282__$1 = (function (){var statearr_22300 = state_22282;
(statearr_22300[(12)] = inst_22275);

return statearr_22300;
})();
var statearr_22301_22323 = state_22282__$1;
(statearr_22301_22323[(2)] = null);

(statearr_22301_22323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (10))){
var inst_22250 = (state_22282[(2)]);
var inst_22251 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22282__$1 = (function (){var statearr_22302 = state_22282;
(statearr_22302[(13)] = inst_22250);

return statearr_22302;
})();
var statearr_22303_22324 = state_22282__$1;
(statearr_22303_22324[(2)] = inst_22251);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (8))){
var inst_22264 = (state_22282[(2)]);
var state_22282__$1 = state_22282;
var statearr_22304_22325 = state_22282__$1;
(statearr_22304_22325[(2)] = inst_22264);

(statearr_22304_22325[(1)] = (5));


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
});})(c__19107__auto___22310,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18940__auto__,c__19107__auto___22310,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18941__auto__ = null;
var cljs$core$async$state_machine__18941__auto____0 = (function (){
var statearr_22305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22305[(0)] = cljs$core$async$state_machine__18941__auto__);

(statearr_22305[(1)] = (1));

return statearr_22305;
});
var cljs$core$async$state_machine__18941__auto____1 = (function (state_22282){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_22282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e22306){if((e22306 instanceof Object)){
var ex__18944__auto__ = e22306;
var statearr_22307_22326 = state_22282;
(statearr_22307_22326[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22327 = state_22282;
state_22282 = G__22327;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$state_machine__18941__auto__ = function(state_22282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18941__auto____1.call(this,state_22282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18941__auto____0;
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18941__auto____1;
return cljs$core$async$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___22310,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19109__auto__ = (function (){var statearr_22308 = f__19108__auto__.call(null);
(statearr_22308[(6)] = c__19107__auto___22310);

return statearr_22308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___22310,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__22330 = arguments.length;
switch (G__22330) {
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
var c__19107__auto___22384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___22384,out){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___22384,out){
return (function (state_22362){
var state_val_22363 = (state_22362[(1)]);
if((state_val_22363 === (7))){
var inst_22341 = (state_22362[(7)]);
var inst_22342 = (state_22362[(8)]);
var inst_22341__$1 = (state_22362[(2)]);
var inst_22342__$1 = cljs.core.nth.call(null,inst_22341__$1,(0),null);
var inst_22343 = cljs.core.nth.call(null,inst_22341__$1,(1),null);
var inst_22344 = (inst_22342__$1 == null);
var state_22362__$1 = (function (){var statearr_22364 = state_22362;
(statearr_22364[(9)] = inst_22343);

(statearr_22364[(7)] = inst_22341__$1);

(statearr_22364[(8)] = inst_22342__$1);

return statearr_22364;
})();
if(cljs.core.truth_(inst_22344)){
var statearr_22365_22385 = state_22362__$1;
(statearr_22365_22385[(1)] = (8));

} else {
var statearr_22366_22386 = state_22362__$1;
(statearr_22366_22386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (1))){
var inst_22331 = cljs.core.vec.call(null,chs);
var inst_22332 = inst_22331;
var state_22362__$1 = (function (){var statearr_22367 = state_22362;
(statearr_22367[(10)] = inst_22332);

return statearr_22367;
})();
var statearr_22368_22387 = state_22362__$1;
(statearr_22368_22387[(2)] = null);

(statearr_22368_22387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (4))){
var inst_22332 = (state_22362[(10)]);
var state_22362__$1 = state_22362;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22362__$1,(7),inst_22332);
} else {
if((state_val_22363 === (6))){
var inst_22358 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
var statearr_22369_22388 = state_22362__$1;
(statearr_22369_22388[(2)] = inst_22358);

(statearr_22369_22388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (3))){
var inst_22360 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22362__$1,inst_22360);
} else {
if((state_val_22363 === (2))){
var inst_22332 = (state_22362[(10)]);
var inst_22334 = cljs.core.count.call(null,inst_22332);
var inst_22335 = (inst_22334 > (0));
var state_22362__$1 = state_22362;
if(cljs.core.truth_(inst_22335)){
var statearr_22371_22389 = state_22362__$1;
(statearr_22371_22389[(1)] = (4));

} else {
var statearr_22372_22390 = state_22362__$1;
(statearr_22372_22390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (11))){
var inst_22332 = (state_22362[(10)]);
var inst_22351 = (state_22362[(2)]);
var tmp22370 = inst_22332;
var inst_22332__$1 = tmp22370;
var state_22362__$1 = (function (){var statearr_22373 = state_22362;
(statearr_22373[(11)] = inst_22351);

(statearr_22373[(10)] = inst_22332__$1);

return statearr_22373;
})();
var statearr_22374_22391 = state_22362__$1;
(statearr_22374_22391[(2)] = null);

(statearr_22374_22391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (9))){
var inst_22342 = (state_22362[(8)]);
var state_22362__$1 = state_22362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22362__$1,(11),out,inst_22342);
} else {
if((state_val_22363 === (5))){
var inst_22356 = cljs.core.async.close_BANG_.call(null,out);
var state_22362__$1 = state_22362;
var statearr_22375_22392 = state_22362__$1;
(statearr_22375_22392[(2)] = inst_22356);

(statearr_22375_22392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (10))){
var inst_22354 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
var statearr_22376_22393 = state_22362__$1;
(statearr_22376_22393[(2)] = inst_22354);

(statearr_22376_22393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (8))){
var inst_22343 = (state_22362[(9)]);
var inst_22332 = (state_22362[(10)]);
var inst_22341 = (state_22362[(7)]);
var inst_22342 = (state_22362[(8)]);
var inst_22346 = (function (){var cs = inst_22332;
var vec__22337 = inst_22341;
var v = inst_22342;
var c = inst_22343;
return ((function (cs,vec__22337,v,c,inst_22343,inst_22332,inst_22341,inst_22342,state_val_22363,c__19107__auto___22384,out){
return (function (p1__22328_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22328_SHARP_);
});
;})(cs,vec__22337,v,c,inst_22343,inst_22332,inst_22341,inst_22342,state_val_22363,c__19107__auto___22384,out))
})();
var inst_22347 = cljs.core.filterv.call(null,inst_22346,inst_22332);
var inst_22332__$1 = inst_22347;
var state_22362__$1 = (function (){var statearr_22377 = state_22362;
(statearr_22377[(10)] = inst_22332__$1);

return statearr_22377;
})();
var statearr_22378_22394 = state_22362__$1;
(statearr_22378_22394[(2)] = null);

(statearr_22378_22394[(1)] = (2));


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
});})(c__19107__auto___22384,out))
;
return ((function (switch__18940__auto__,c__19107__auto___22384,out){
return (function() {
var cljs$core$async$state_machine__18941__auto__ = null;
var cljs$core$async$state_machine__18941__auto____0 = (function (){
var statearr_22379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22379[(0)] = cljs$core$async$state_machine__18941__auto__);

(statearr_22379[(1)] = (1));

return statearr_22379;
});
var cljs$core$async$state_machine__18941__auto____1 = (function (state_22362){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_22362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e22380){if((e22380 instanceof Object)){
var ex__18944__auto__ = e22380;
var statearr_22381_22395 = state_22362;
(statearr_22381_22395[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22396 = state_22362;
state_22362 = G__22396;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$state_machine__18941__auto__ = function(state_22362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18941__auto____1.call(this,state_22362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18941__auto____0;
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18941__auto____1;
return cljs$core$async$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___22384,out))
})();
var state__19109__auto__ = (function (){var statearr_22382 = f__19108__auto__.call(null);
(statearr_22382[(6)] = c__19107__auto___22384);

return statearr_22382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___22384,out))
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
var G__22398 = arguments.length;
switch (G__22398) {
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
var c__19107__auto___22443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___22443,out){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___22443,out){
return (function (state_22422){
var state_val_22423 = (state_22422[(1)]);
if((state_val_22423 === (7))){
var inst_22404 = (state_22422[(7)]);
var inst_22404__$1 = (state_22422[(2)]);
var inst_22405 = (inst_22404__$1 == null);
var inst_22406 = cljs.core.not.call(null,inst_22405);
var state_22422__$1 = (function (){var statearr_22424 = state_22422;
(statearr_22424[(7)] = inst_22404__$1);

return statearr_22424;
})();
if(inst_22406){
var statearr_22425_22444 = state_22422__$1;
(statearr_22425_22444[(1)] = (8));

} else {
var statearr_22426_22445 = state_22422__$1;
(statearr_22426_22445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (1))){
var inst_22399 = (0);
var state_22422__$1 = (function (){var statearr_22427 = state_22422;
(statearr_22427[(8)] = inst_22399);

return statearr_22427;
})();
var statearr_22428_22446 = state_22422__$1;
(statearr_22428_22446[(2)] = null);

(statearr_22428_22446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (4))){
var state_22422__$1 = state_22422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22422__$1,(7),ch);
} else {
if((state_val_22423 === (6))){
var inst_22417 = (state_22422[(2)]);
var state_22422__$1 = state_22422;
var statearr_22429_22447 = state_22422__$1;
(statearr_22429_22447[(2)] = inst_22417);

(statearr_22429_22447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (3))){
var inst_22419 = (state_22422[(2)]);
var inst_22420 = cljs.core.async.close_BANG_.call(null,out);
var state_22422__$1 = (function (){var statearr_22430 = state_22422;
(statearr_22430[(9)] = inst_22419);

return statearr_22430;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22422__$1,inst_22420);
} else {
if((state_val_22423 === (2))){
var inst_22399 = (state_22422[(8)]);
var inst_22401 = (inst_22399 < n);
var state_22422__$1 = state_22422;
if(cljs.core.truth_(inst_22401)){
var statearr_22431_22448 = state_22422__$1;
(statearr_22431_22448[(1)] = (4));

} else {
var statearr_22432_22449 = state_22422__$1;
(statearr_22432_22449[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (11))){
var inst_22399 = (state_22422[(8)]);
var inst_22409 = (state_22422[(2)]);
var inst_22410 = (inst_22399 + (1));
var inst_22399__$1 = inst_22410;
var state_22422__$1 = (function (){var statearr_22433 = state_22422;
(statearr_22433[(8)] = inst_22399__$1);

(statearr_22433[(10)] = inst_22409);

return statearr_22433;
})();
var statearr_22434_22450 = state_22422__$1;
(statearr_22434_22450[(2)] = null);

(statearr_22434_22450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (9))){
var state_22422__$1 = state_22422;
var statearr_22435_22451 = state_22422__$1;
(statearr_22435_22451[(2)] = null);

(statearr_22435_22451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (5))){
var state_22422__$1 = state_22422;
var statearr_22436_22452 = state_22422__$1;
(statearr_22436_22452[(2)] = null);

(statearr_22436_22452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (10))){
var inst_22414 = (state_22422[(2)]);
var state_22422__$1 = state_22422;
var statearr_22437_22453 = state_22422__$1;
(statearr_22437_22453[(2)] = inst_22414);

(statearr_22437_22453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (8))){
var inst_22404 = (state_22422[(7)]);
var state_22422__$1 = state_22422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22422__$1,(11),out,inst_22404);
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
});})(c__19107__auto___22443,out))
;
return ((function (switch__18940__auto__,c__19107__auto___22443,out){
return (function() {
var cljs$core$async$state_machine__18941__auto__ = null;
var cljs$core$async$state_machine__18941__auto____0 = (function (){
var statearr_22438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22438[(0)] = cljs$core$async$state_machine__18941__auto__);

(statearr_22438[(1)] = (1));

return statearr_22438;
});
var cljs$core$async$state_machine__18941__auto____1 = (function (state_22422){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_22422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e22439){if((e22439 instanceof Object)){
var ex__18944__auto__ = e22439;
var statearr_22440_22454 = state_22422;
(statearr_22440_22454[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22455 = state_22422;
state_22422 = G__22455;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$state_machine__18941__auto__ = function(state_22422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18941__auto____1.call(this,state_22422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18941__auto____0;
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18941__auto____1;
return cljs$core$async$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___22443,out))
})();
var state__19109__auto__ = (function (){var statearr_22441 = f__19108__auto__.call(null);
(statearr_22441[(6)] = c__19107__auto___22443);

return statearr_22441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___22443,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22457 = (function (f,ch,meta22458){
this.f = f;
this.ch = ch;
this.meta22458 = meta22458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22459,meta22458__$1){
var self__ = this;
var _22459__$1 = this;
return (new cljs.core.async.t_cljs$core$async22457(self__.f,self__.ch,meta22458__$1));
});

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22459){
var self__ = this;
var _22459__$1 = this;
return self__.meta22458;
});

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22460 = (function (f,ch,meta22458,_,fn1,meta22461){
this.f = f;
this.ch = ch;
this.meta22458 = meta22458;
this._ = _;
this.fn1 = fn1;
this.meta22461 = meta22461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22462,meta22461__$1){
var self__ = this;
var _22462__$1 = this;
return (new cljs.core.async.t_cljs$core$async22460(self__.f,self__.ch,self__.meta22458,self__._,self__.fn1,meta22461__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22462){
var self__ = this;
var _22462__$1 = this;
return self__.meta22461;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22460.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22456_SHARP_){
return f1.call(null,(((p1__22456_SHARP_ == null))?null:self__.f.call(null,p1__22456_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22460.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22458","meta22458",-1102917667,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22457","cljs.core.async/t_cljs$core$async22457",-1692286141,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22461","meta22461",-149644924,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22460";

cljs.core.async.t_cljs$core$async22460.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async22460");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22460.
 */
cljs.core.async.__GT_t_cljs$core$async22460 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22460(f__$1,ch__$1,meta22458__$1,___$2,fn1__$1,meta22461){
return (new cljs.core.async.t_cljs$core$async22460(f__$1,ch__$1,meta22458__$1,___$2,fn1__$1,meta22461));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22460(self__.f,self__.ch,self__.meta22458,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22458","meta22458",-1102917667,null)], null);
});

cljs.core.async.t_cljs$core$async22457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22457";

cljs.core.async.t_cljs$core$async22457.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async22457");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22457.
 */
cljs.core.async.__GT_t_cljs$core$async22457 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22457(f__$1,ch__$1,meta22458){
return (new cljs.core.async.t_cljs$core$async22457(f__$1,ch__$1,meta22458));
});

}

return (new cljs.core.async.t_cljs$core$async22457(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22463 = (function (f,ch,meta22464){
this.f = f;
this.ch = ch;
this.meta22464 = meta22464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22465,meta22464__$1){
var self__ = this;
var _22465__$1 = this;
return (new cljs.core.async.t_cljs$core$async22463(self__.f,self__.ch,meta22464__$1));
});

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22465){
var self__ = this;
var _22465__$1 = this;
return self__.meta22464;
});

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22464","meta22464",1690192552,null)], null);
});

cljs.core.async.t_cljs$core$async22463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22463";

cljs.core.async.t_cljs$core$async22463.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async22463");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22463.
 */
cljs.core.async.__GT_t_cljs$core$async22463 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22463(f__$1,ch__$1,meta22464){
return (new cljs.core.async.t_cljs$core$async22463(f__$1,ch__$1,meta22464));
});

}

return (new cljs.core.async.t_cljs$core$async22463(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22466 = (function (p,ch,meta22467){
this.p = p;
this.ch = ch;
this.meta22467 = meta22467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22468,meta22467__$1){
var self__ = this;
var _22468__$1 = this;
return (new cljs.core.async.t_cljs$core$async22466(self__.p,self__.ch,meta22467__$1));
});

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22468){
var self__ = this;
var _22468__$1 = this;
return self__.meta22467;
});

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22467","meta22467",-2006042641,null)], null);
});

cljs.core.async.t_cljs$core$async22466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22466";

cljs.core.async.t_cljs$core$async22466.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async22466");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22466.
 */
cljs.core.async.__GT_t_cljs$core$async22466 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22466(p__$1,ch__$1,meta22467){
return (new cljs.core.async.t_cljs$core$async22466(p__$1,ch__$1,meta22467));
});

}

return (new cljs.core.async.t_cljs$core$async22466(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22470 = arguments.length;
switch (G__22470) {
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
var c__19107__auto___22510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___22510,out){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___22510,out){
return (function (state_22491){
var state_val_22492 = (state_22491[(1)]);
if((state_val_22492 === (7))){
var inst_22487 = (state_22491[(2)]);
var state_22491__$1 = state_22491;
var statearr_22493_22511 = state_22491__$1;
(statearr_22493_22511[(2)] = inst_22487);

(statearr_22493_22511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (1))){
var state_22491__$1 = state_22491;
var statearr_22494_22512 = state_22491__$1;
(statearr_22494_22512[(2)] = null);

(statearr_22494_22512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (4))){
var inst_22473 = (state_22491[(7)]);
var inst_22473__$1 = (state_22491[(2)]);
var inst_22474 = (inst_22473__$1 == null);
var state_22491__$1 = (function (){var statearr_22495 = state_22491;
(statearr_22495[(7)] = inst_22473__$1);

return statearr_22495;
})();
if(cljs.core.truth_(inst_22474)){
var statearr_22496_22513 = state_22491__$1;
(statearr_22496_22513[(1)] = (5));

} else {
var statearr_22497_22514 = state_22491__$1;
(statearr_22497_22514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (6))){
var inst_22473 = (state_22491[(7)]);
var inst_22478 = p.call(null,inst_22473);
var state_22491__$1 = state_22491;
if(cljs.core.truth_(inst_22478)){
var statearr_22498_22515 = state_22491__$1;
(statearr_22498_22515[(1)] = (8));

} else {
var statearr_22499_22516 = state_22491__$1;
(statearr_22499_22516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (3))){
var inst_22489 = (state_22491[(2)]);
var state_22491__$1 = state_22491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22491__$1,inst_22489);
} else {
if((state_val_22492 === (2))){
var state_22491__$1 = state_22491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22491__$1,(4),ch);
} else {
if((state_val_22492 === (11))){
var inst_22481 = (state_22491[(2)]);
var state_22491__$1 = state_22491;
var statearr_22500_22517 = state_22491__$1;
(statearr_22500_22517[(2)] = inst_22481);

(statearr_22500_22517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (9))){
var state_22491__$1 = state_22491;
var statearr_22501_22518 = state_22491__$1;
(statearr_22501_22518[(2)] = null);

(statearr_22501_22518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (5))){
var inst_22476 = cljs.core.async.close_BANG_.call(null,out);
var state_22491__$1 = state_22491;
var statearr_22502_22519 = state_22491__$1;
(statearr_22502_22519[(2)] = inst_22476);

(statearr_22502_22519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (10))){
var inst_22484 = (state_22491[(2)]);
var state_22491__$1 = (function (){var statearr_22503 = state_22491;
(statearr_22503[(8)] = inst_22484);

return statearr_22503;
})();
var statearr_22504_22520 = state_22491__$1;
(statearr_22504_22520[(2)] = null);

(statearr_22504_22520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (8))){
var inst_22473 = (state_22491[(7)]);
var state_22491__$1 = state_22491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22491__$1,(11),out,inst_22473);
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
});})(c__19107__auto___22510,out))
;
return ((function (switch__18940__auto__,c__19107__auto___22510,out){
return (function() {
var cljs$core$async$state_machine__18941__auto__ = null;
var cljs$core$async$state_machine__18941__auto____0 = (function (){
var statearr_22505 = [null,null,null,null,null,null,null,null,null];
(statearr_22505[(0)] = cljs$core$async$state_machine__18941__auto__);

(statearr_22505[(1)] = (1));

return statearr_22505;
});
var cljs$core$async$state_machine__18941__auto____1 = (function (state_22491){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_22491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e22506){if((e22506 instanceof Object)){
var ex__18944__auto__ = e22506;
var statearr_22507_22521 = state_22491;
(statearr_22507_22521[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22522 = state_22491;
state_22491 = G__22522;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$state_machine__18941__auto__ = function(state_22491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18941__auto____1.call(this,state_22491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18941__auto____0;
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18941__auto____1;
return cljs$core$async$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___22510,out))
})();
var state__19109__auto__ = (function (){var statearr_22508 = f__19108__auto__.call(null);
(statearr_22508[(6)] = c__19107__auto___22510);

return statearr_22508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___22510,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22524 = arguments.length;
switch (G__22524) {
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
var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__){
return (function (state_22587){
var state_val_22588 = (state_22587[(1)]);
if((state_val_22588 === (7))){
var inst_22583 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
var statearr_22589_22627 = state_22587__$1;
(statearr_22589_22627[(2)] = inst_22583);

(statearr_22589_22627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (20))){
var inst_22553 = (state_22587[(7)]);
var inst_22564 = (state_22587[(2)]);
var inst_22565 = cljs.core.next.call(null,inst_22553);
var inst_22539 = inst_22565;
var inst_22540 = null;
var inst_22541 = (0);
var inst_22542 = (0);
var state_22587__$1 = (function (){var statearr_22590 = state_22587;
(statearr_22590[(8)] = inst_22539);

(statearr_22590[(9)] = inst_22564);

(statearr_22590[(10)] = inst_22542);

(statearr_22590[(11)] = inst_22541);

(statearr_22590[(12)] = inst_22540);

return statearr_22590;
})();
var statearr_22591_22628 = state_22587__$1;
(statearr_22591_22628[(2)] = null);

(statearr_22591_22628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (1))){
var state_22587__$1 = state_22587;
var statearr_22592_22629 = state_22587__$1;
(statearr_22592_22629[(2)] = null);

(statearr_22592_22629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (4))){
var inst_22528 = (state_22587[(13)]);
var inst_22528__$1 = (state_22587[(2)]);
var inst_22529 = (inst_22528__$1 == null);
var state_22587__$1 = (function (){var statearr_22593 = state_22587;
(statearr_22593[(13)] = inst_22528__$1);

return statearr_22593;
})();
if(cljs.core.truth_(inst_22529)){
var statearr_22594_22630 = state_22587__$1;
(statearr_22594_22630[(1)] = (5));

} else {
var statearr_22595_22631 = state_22587__$1;
(statearr_22595_22631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (15))){
var state_22587__$1 = state_22587;
var statearr_22599_22632 = state_22587__$1;
(statearr_22599_22632[(2)] = null);

(statearr_22599_22632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (21))){
var state_22587__$1 = state_22587;
var statearr_22600_22633 = state_22587__$1;
(statearr_22600_22633[(2)] = null);

(statearr_22600_22633[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (13))){
var inst_22539 = (state_22587[(8)]);
var inst_22542 = (state_22587[(10)]);
var inst_22541 = (state_22587[(11)]);
var inst_22540 = (state_22587[(12)]);
var inst_22549 = (state_22587[(2)]);
var inst_22550 = (inst_22542 + (1));
var tmp22596 = inst_22539;
var tmp22597 = inst_22541;
var tmp22598 = inst_22540;
var inst_22539__$1 = tmp22596;
var inst_22540__$1 = tmp22598;
var inst_22541__$1 = tmp22597;
var inst_22542__$1 = inst_22550;
var state_22587__$1 = (function (){var statearr_22601 = state_22587;
(statearr_22601[(8)] = inst_22539__$1);

(statearr_22601[(14)] = inst_22549);

(statearr_22601[(10)] = inst_22542__$1);

(statearr_22601[(11)] = inst_22541__$1);

(statearr_22601[(12)] = inst_22540__$1);

return statearr_22601;
})();
var statearr_22602_22634 = state_22587__$1;
(statearr_22602_22634[(2)] = null);

(statearr_22602_22634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (22))){
var state_22587__$1 = state_22587;
var statearr_22603_22635 = state_22587__$1;
(statearr_22603_22635[(2)] = null);

(statearr_22603_22635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (6))){
var inst_22528 = (state_22587[(13)]);
var inst_22537 = f.call(null,inst_22528);
var inst_22538 = cljs.core.seq.call(null,inst_22537);
var inst_22539 = inst_22538;
var inst_22540 = null;
var inst_22541 = (0);
var inst_22542 = (0);
var state_22587__$1 = (function (){var statearr_22604 = state_22587;
(statearr_22604[(8)] = inst_22539);

(statearr_22604[(10)] = inst_22542);

(statearr_22604[(11)] = inst_22541);

(statearr_22604[(12)] = inst_22540);

return statearr_22604;
})();
var statearr_22605_22636 = state_22587__$1;
(statearr_22605_22636[(2)] = null);

(statearr_22605_22636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (17))){
var inst_22553 = (state_22587[(7)]);
var inst_22557 = cljs.core.chunk_first.call(null,inst_22553);
var inst_22558 = cljs.core.chunk_rest.call(null,inst_22553);
var inst_22559 = cljs.core.count.call(null,inst_22557);
var inst_22539 = inst_22558;
var inst_22540 = inst_22557;
var inst_22541 = inst_22559;
var inst_22542 = (0);
var state_22587__$1 = (function (){var statearr_22606 = state_22587;
(statearr_22606[(8)] = inst_22539);

(statearr_22606[(10)] = inst_22542);

(statearr_22606[(11)] = inst_22541);

(statearr_22606[(12)] = inst_22540);

return statearr_22606;
})();
var statearr_22607_22637 = state_22587__$1;
(statearr_22607_22637[(2)] = null);

(statearr_22607_22637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (3))){
var inst_22585 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22587__$1,inst_22585);
} else {
if((state_val_22588 === (12))){
var inst_22573 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
var statearr_22608_22638 = state_22587__$1;
(statearr_22608_22638[(2)] = inst_22573);

(statearr_22608_22638[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (2))){
var state_22587__$1 = state_22587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22587__$1,(4),in$);
} else {
if((state_val_22588 === (23))){
var inst_22581 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
var statearr_22609_22639 = state_22587__$1;
(statearr_22609_22639[(2)] = inst_22581);

(statearr_22609_22639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (19))){
var inst_22568 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
var statearr_22610_22640 = state_22587__$1;
(statearr_22610_22640[(2)] = inst_22568);

(statearr_22610_22640[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (11))){
var inst_22539 = (state_22587[(8)]);
var inst_22553 = (state_22587[(7)]);
var inst_22553__$1 = cljs.core.seq.call(null,inst_22539);
var state_22587__$1 = (function (){var statearr_22611 = state_22587;
(statearr_22611[(7)] = inst_22553__$1);

return statearr_22611;
})();
if(inst_22553__$1){
var statearr_22612_22641 = state_22587__$1;
(statearr_22612_22641[(1)] = (14));

} else {
var statearr_22613_22642 = state_22587__$1;
(statearr_22613_22642[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (9))){
var inst_22575 = (state_22587[(2)]);
var inst_22576 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22587__$1 = (function (){var statearr_22614 = state_22587;
(statearr_22614[(15)] = inst_22575);

return statearr_22614;
})();
if(cljs.core.truth_(inst_22576)){
var statearr_22615_22643 = state_22587__$1;
(statearr_22615_22643[(1)] = (21));

} else {
var statearr_22616_22644 = state_22587__$1;
(statearr_22616_22644[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (5))){
var inst_22531 = cljs.core.async.close_BANG_.call(null,out);
var state_22587__$1 = state_22587;
var statearr_22617_22645 = state_22587__$1;
(statearr_22617_22645[(2)] = inst_22531);

(statearr_22617_22645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (14))){
var inst_22553 = (state_22587[(7)]);
var inst_22555 = cljs.core.chunked_seq_QMARK_.call(null,inst_22553);
var state_22587__$1 = state_22587;
if(inst_22555){
var statearr_22618_22646 = state_22587__$1;
(statearr_22618_22646[(1)] = (17));

} else {
var statearr_22619_22647 = state_22587__$1;
(statearr_22619_22647[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (16))){
var inst_22571 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
var statearr_22620_22648 = state_22587__$1;
(statearr_22620_22648[(2)] = inst_22571);

(statearr_22620_22648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (10))){
var inst_22542 = (state_22587[(10)]);
var inst_22540 = (state_22587[(12)]);
var inst_22547 = cljs.core._nth.call(null,inst_22540,inst_22542);
var state_22587__$1 = state_22587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22587__$1,(13),out,inst_22547);
} else {
if((state_val_22588 === (18))){
var inst_22553 = (state_22587[(7)]);
var inst_22562 = cljs.core.first.call(null,inst_22553);
var state_22587__$1 = state_22587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22587__$1,(20),out,inst_22562);
} else {
if((state_val_22588 === (8))){
var inst_22542 = (state_22587[(10)]);
var inst_22541 = (state_22587[(11)]);
var inst_22544 = (inst_22542 < inst_22541);
var inst_22545 = inst_22544;
var state_22587__$1 = state_22587;
if(cljs.core.truth_(inst_22545)){
var statearr_22621_22649 = state_22587__$1;
(statearr_22621_22649[(1)] = (10));

} else {
var statearr_22622_22650 = state_22587__$1;
(statearr_22622_22650[(1)] = (11));

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
});})(c__19107__auto__))
;
return ((function (switch__18940__auto__,c__19107__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18941__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18941__auto____0 = (function (){
var statearr_22623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22623[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18941__auto__);

(statearr_22623[(1)] = (1));

return statearr_22623;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18941__auto____1 = (function (state_22587){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_22587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e22624){if((e22624 instanceof Object)){
var ex__18944__auto__ = e22624;
var statearr_22625_22651 = state_22587;
(statearr_22625_22651[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22652 = state_22587;
state_22587 = G__22652;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18941__auto__ = function(state_22587){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18941__auto____1.call(this,state_22587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18941__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18941__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__))
})();
var state__19109__auto__ = (function (){var statearr_22626 = f__19108__auto__.call(null);
(statearr_22626[(6)] = c__19107__auto__);

return statearr_22626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__))
);

return c__19107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22654 = arguments.length;
switch (G__22654) {
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
var G__22657 = arguments.length;
switch (G__22657) {
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
var G__22660 = arguments.length;
switch (G__22660) {
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
var c__19107__auto___22707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___22707,out){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___22707,out){
return (function (state_22684){
var state_val_22685 = (state_22684[(1)]);
if((state_val_22685 === (7))){
var inst_22679 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22686_22708 = state_22684__$1;
(statearr_22686_22708[(2)] = inst_22679);

(statearr_22686_22708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (1))){
var inst_22661 = null;
var state_22684__$1 = (function (){var statearr_22687 = state_22684;
(statearr_22687[(7)] = inst_22661);

return statearr_22687;
})();
var statearr_22688_22709 = state_22684__$1;
(statearr_22688_22709[(2)] = null);

(statearr_22688_22709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (4))){
var inst_22664 = (state_22684[(8)]);
var inst_22664__$1 = (state_22684[(2)]);
var inst_22665 = (inst_22664__$1 == null);
var inst_22666 = cljs.core.not.call(null,inst_22665);
var state_22684__$1 = (function (){var statearr_22689 = state_22684;
(statearr_22689[(8)] = inst_22664__$1);

return statearr_22689;
})();
if(inst_22666){
var statearr_22690_22710 = state_22684__$1;
(statearr_22690_22710[(1)] = (5));

} else {
var statearr_22691_22711 = state_22684__$1;
(statearr_22691_22711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (6))){
var state_22684__$1 = state_22684;
var statearr_22692_22712 = state_22684__$1;
(statearr_22692_22712[(2)] = null);

(statearr_22692_22712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (3))){
var inst_22681 = (state_22684[(2)]);
var inst_22682 = cljs.core.async.close_BANG_.call(null,out);
var state_22684__$1 = (function (){var statearr_22693 = state_22684;
(statearr_22693[(9)] = inst_22681);

return statearr_22693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22684__$1,inst_22682);
} else {
if((state_val_22685 === (2))){
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22684__$1,(4),ch);
} else {
if((state_val_22685 === (11))){
var inst_22664 = (state_22684[(8)]);
var inst_22673 = (state_22684[(2)]);
var inst_22661 = inst_22664;
var state_22684__$1 = (function (){var statearr_22694 = state_22684;
(statearr_22694[(7)] = inst_22661);

(statearr_22694[(10)] = inst_22673);

return statearr_22694;
})();
var statearr_22695_22713 = state_22684__$1;
(statearr_22695_22713[(2)] = null);

(statearr_22695_22713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (9))){
var inst_22664 = (state_22684[(8)]);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22684__$1,(11),out,inst_22664);
} else {
if((state_val_22685 === (5))){
var inst_22661 = (state_22684[(7)]);
var inst_22664 = (state_22684[(8)]);
var inst_22668 = cljs.core._EQ_.call(null,inst_22664,inst_22661);
var state_22684__$1 = state_22684;
if(inst_22668){
var statearr_22697_22714 = state_22684__$1;
(statearr_22697_22714[(1)] = (8));

} else {
var statearr_22698_22715 = state_22684__$1;
(statearr_22698_22715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (10))){
var inst_22676 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22699_22716 = state_22684__$1;
(statearr_22699_22716[(2)] = inst_22676);

(statearr_22699_22716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (8))){
var inst_22661 = (state_22684[(7)]);
var tmp22696 = inst_22661;
var inst_22661__$1 = tmp22696;
var state_22684__$1 = (function (){var statearr_22700 = state_22684;
(statearr_22700[(7)] = inst_22661__$1);

return statearr_22700;
})();
var statearr_22701_22717 = state_22684__$1;
(statearr_22701_22717[(2)] = null);

(statearr_22701_22717[(1)] = (2));


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
});})(c__19107__auto___22707,out))
;
return ((function (switch__18940__auto__,c__19107__auto___22707,out){
return (function() {
var cljs$core$async$state_machine__18941__auto__ = null;
var cljs$core$async$state_machine__18941__auto____0 = (function (){
var statearr_22702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22702[(0)] = cljs$core$async$state_machine__18941__auto__);

(statearr_22702[(1)] = (1));

return statearr_22702;
});
var cljs$core$async$state_machine__18941__auto____1 = (function (state_22684){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_22684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e22703){if((e22703 instanceof Object)){
var ex__18944__auto__ = e22703;
var statearr_22704_22718 = state_22684;
(statearr_22704_22718[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22719 = state_22684;
state_22684 = G__22719;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$state_machine__18941__auto__ = function(state_22684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18941__auto____1.call(this,state_22684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18941__auto____0;
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18941__auto____1;
return cljs$core$async$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___22707,out))
})();
var state__19109__auto__ = (function (){var statearr_22705 = f__19108__auto__.call(null);
(statearr_22705[(6)] = c__19107__auto___22707);

return statearr_22705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___22707,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22721 = arguments.length;
switch (G__22721) {
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
var c__19107__auto___22787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___22787,out){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___22787,out){
return (function (state_22759){
var state_val_22760 = (state_22759[(1)]);
if((state_val_22760 === (7))){
var inst_22755 = (state_22759[(2)]);
var state_22759__$1 = state_22759;
var statearr_22761_22788 = state_22759__$1;
(statearr_22761_22788[(2)] = inst_22755);

(statearr_22761_22788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (1))){
var inst_22722 = (new Array(n));
var inst_22723 = inst_22722;
var inst_22724 = (0);
var state_22759__$1 = (function (){var statearr_22762 = state_22759;
(statearr_22762[(7)] = inst_22724);

(statearr_22762[(8)] = inst_22723);

return statearr_22762;
})();
var statearr_22763_22789 = state_22759__$1;
(statearr_22763_22789[(2)] = null);

(statearr_22763_22789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (4))){
var inst_22727 = (state_22759[(9)]);
var inst_22727__$1 = (state_22759[(2)]);
var inst_22728 = (inst_22727__$1 == null);
var inst_22729 = cljs.core.not.call(null,inst_22728);
var state_22759__$1 = (function (){var statearr_22764 = state_22759;
(statearr_22764[(9)] = inst_22727__$1);

return statearr_22764;
})();
if(inst_22729){
var statearr_22765_22790 = state_22759__$1;
(statearr_22765_22790[(1)] = (5));

} else {
var statearr_22766_22791 = state_22759__$1;
(statearr_22766_22791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (15))){
var inst_22749 = (state_22759[(2)]);
var state_22759__$1 = state_22759;
var statearr_22767_22792 = state_22759__$1;
(statearr_22767_22792[(2)] = inst_22749);

(statearr_22767_22792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (13))){
var state_22759__$1 = state_22759;
var statearr_22768_22793 = state_22759__$1;
(statearr_22768_22793[(2)] = null);

(statearr_22768_22793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (6))){
var inst_22724 = (state_22759[(7)]);
var inst_22745 = (inst_22724 > (0));
var state_22759__$1 = state_22759;
if(cljs.core.truth_(inst_22745)){
var statearr_22769_22794 = state_22759__$1;
(statearr_22769_22794[(1)] = (12));

} else {
var statearr_22770_22795 = state_22759__$1;
(statearr_22770_22795[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (3))){
var inst_22757 = (state_22759[(2)]);
var state_22759__$1 = state_22759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22759__$1,inst_22757);
} else {
if((state_val_22760 === (12))){
var inst_22723 = (state_22759[(8)]);
var inst_22747 = cljs.core.vec.call(null,inst_22723);
var state_22759__$1 = state_22759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22759__$1,(15),out,inst_22747);
} else {
if((state_val_22760 === (2))){
var state_22759__$1 = state_22759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22759__$1,(4),ch);
} else {
if((state_val_22760 === (11))){
var inst_22739 = (state_22759[(2)]);
var inst_22740 = (new Array(n));
var inst_22723 = inst_22740;
var inst_22724 = (0);
var state_22759__$1 = (function (){var statearr_22771 = state_22759;
(statearr_22771[(10)] = inst_22739);

(statearr_22771[(7)] = inst_22724);

(statearr_22771[(8)] = inst_22723);

return statearr_22771;
})();
var statearr_22772_22796 = state_22759__$1;
(statearr_22772_22796[(2)] = null);

(statearr_22772_22796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (9))){
var inst_22723 = (state_22759[(8)]);
var inst_22737 = cljs.core.vec.call(null,inst_22723);
var state_22759__$1 = state_22759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22759__$1,(11),out,inst_22737);
} else {
if((state_val_22760 === (5))){
var inst_22724 = (state_22759[(7)]);
var inst_22723 = (state_22759[(8)]);
var inst_22727 = (state_22759[(9)]);
var inst_22732 = (state_22759[(11)]);
var inst_22731 = (inst_22723[inst_22724] = inst_22727);
var inst_22732__$1 = (inst_22724 + (1));
var inst_22733 = (inst_22732__$1 < n);
var state_22759__$1 = (function (){var statearr_22773 = state_22759;
(statearr_22773[(11)] = inst_22732__$1);

(statearr_22773[(12)] = inst_22731);

return statearr_22773;
})();
if(cljs.core.truth_(inst_22733)){
var statearr_22774_22797 = state_22759__$1;
(statearr_22774_22797[(1)] = (8));

} else {
var statearr_22775_22798 = state_22759__$1;
(statearr_22775_22798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (14))){
var inst_22752 = (state_22759[(2)]);
var inst_22753 = cljs.core.async.close_BANG_.call(null,out);
var state_22759__$1 = (function (){var statearr_22777 = state_22759;
(statearr_22777[(13)] = inst_22752);

return statearr_22777;
})();
var statearr_22778_22799 = state_22759__$1;
(statearr_22778_22799[(2)] = inst_22753);

(statearr_22778_22799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (10))){
var inst_22743 = (state_22759[(2)]);
var state_22759__$1 = state_22759;
var statearr_22779_22800 = state_22759__$1;
(statearr_22779_22800[(2)] = inst_22743);

(statearr_22779_22800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22760 === (8))){
var inst_22723 = (state_22759[(8)]);
var inst_22732 = (state_22759[(11)]);
var tmp22776 = inst_22723;
var inst_22723__$1 = tmp22776;
var inst_22724 = inst_22732;
var state_22759__$1 = (function (){var statearr_22780 = state_22759;
(statearr_22780[(7)] = inst_22724);

(statearr_22780[(8)] = inst_22723__$1);

return statearr_22780;
})();
var statearr_22781_22801 = state_22759__$1;
(statearr_22781_22801[(2)] = null);

(statearr_22781_22801[(1)] = (2));


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
});})(c__19107__auto___22787,out))
;
return ((function (switch__18940__auto__,c__19107__auto___22787,out){
return (function() {
var cljs$core$async$state_machine__18941__auto__ = null;
var cljs$core$async$state_machine__18941__auto____0 = (function (){
var statearr_22782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22782[(0)] = cljs$core$async$state_machine__18941__auto__);

(statearr_22782[(1)] = (1));

return statearr_22782;
});
var cljs$core$async$state_machine__18941__auto____1 = (function (state_22759){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_22759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e22783){if((e22783 instanceof Object)){
var ex__18944__auto__ = e22783;
var statearr_22784_22802 = state_22759;
(statearr_22784_22802[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22803 = state_22759;
state_22759 = G__22803;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$state_machine__18941__auto__ = function(state_22759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18941__auto____1.call(this,state_22759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18941__auto____0;
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18941__auto____1;
return cljs$core$async$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___22787,out))
})();
var state__19109__auto__ = (function (){var statearr_22785 = f__19108__auto__.call(null);
(statearr_22785[(6)] = c__19107__auto___22787);

return statearr_22785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___22787,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22805 = arguments.length;
switch (G__22805) {
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
var c__19107__auto___22875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto___22875,out){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto___22875,out){
return (function (state_22847){
var state_val_22848 = (state_22847[(1)]);
if((state_val_22848 === (7))){
var inst_22843 = (state_22847[(2)]);
var state_22847__$1 = state_22847;
var statearr_22849_22876 = state_22847__$1;
(statearr_22849_22876[(2)] = inst_22843);

(statearr_22849_22876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (1))){
var inst_22806 = [];
var inst_22807 = inst_22806;
var inst_22808 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22847__$1 = (function (){var statearr_22850 = state_22847;
(statearr_22850[(7)] = inst_22808);

(statearr_22850[(8)] = inst_22807);

return statearr_22850;
})();
var statearr_22851_22877 = state_22847__$1;
(statearr_22851_22877[(2)] = null);

(statearr_22851_22877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (4))){
var inst_22811 = (state_22847[(9)]);
var inst_22811__$1 = (state_22847[(2)]);
var inst_22812 = (inst_22811__$1 == null);
var inst_22813 = cljs.core.not.call(null,inst_22812);
var state_22847__$1 = (function (){var statearr_22852 = state_22847;
(statearr_22852[(9)] = inst_22811__$1);

return statearr_22852;
})();
if(inst_22813){
var statearr_22853_22878 = state_22847__$1;
(statearr_22853_22878[(1)] = (5));

} else {
var statearr_22854_22879 = state_22847__$1;
(statearr_22854_22879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (15))){
var inst_22837 = (state_22847[(2)]);
var state_22847__$1 = state_22847;
var statearr_22855_22880 = state_22847__$1;
(statearr_22855_22880[(2)] = inst_22837);

(statearr_22855_22880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (13))){
var state_22847__$1 = state_22847;
var statearr_22856_22881 = state_22847__$1;
(statearr_22856_22881[(2)] = null);

(statearr_22856_22881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (6))){
var inst_22807 = (state_22847[(8)]);
var inst_22832 = inst_22807.length;
var inst_22833 = (inst_22832 > (0));
var state_22847__$1 = state_22847;
if(cljs.core.truth_(inst_22833)){
var statearr_22857_22882 = state_22847__$1;
(statearr_22857_22882[(1)] = (12));

} else {
var statearr_22858_22883 = state_22847__$1;
(statearr_22858_22883[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (3))){
var inst_22845 = (state_22847[(2)]);
var state_22847__$1 = state_22847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22847__$1,inst_22845);
} else {
if((state_val_22848 === (12))){
var inst_22807 = (state_22847[(8)]);
var inst_22835 = cljs.core.vec.call(null,inst_22807);
var state_22847__$1 = state_22847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22847__$1,(15),out,inst_22835);
} else {
if((state_val_22848 === (2))){
var state_22847__$1 = state_22847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22847__$1,(4),ch);
} else {
if((state_val_22848 === (11))){
var inst_22815 = (state_22847[(10)]);
var inst_22811 = (state_22847[(9)]);
var inst_22825 = (state_22847[(2)]);
var inst_22826 = [];
var inst_22827 = inst_22826.push(inst_22811);
var inst_22807 = inst_22826;
var inst_22808 = inst_22815;
var state_22847__$1 = (function (){var statearr_22859 = state_22847;
(statearr_22859[(7)] = inst_22808);

(statearr_22859[(11)] = inst_22825);

(statearr_22859[(8)] = inst_22807);

(statearr_22859[(12)] = inst_22827);

return statearr_22859;
})();
var statearr_22860_22884 = state_22847__$1;
(statearr_22860_22884[(2)] = null);

(statearr_22860_22884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (9))){
var inst_22807 = (state_22847[(8)]);
var inst_22823 = cljs.core.vec.call(null,inst_22807);
var state_22847__$1 = state_22847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22847__$1,(11),out,inst_22823);
} else {
if((state_val_22848 === (5))){
var inst_22808 = (state_22847[(7)]);
var inst_22815 = (state_22847[(10)]);
var inst_22811 = (state_22847[(9)]);
var inst_22815__$1 = f.call(null,inst_22811);
var inst_22816 = cljs.core._EQ_.call(null,inst_22815__$1,inst_22808);
var inst_22817 = cljs.core.keyword_identical_QMARK_.call(null,inst_22808,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22818 = ((inst_22816) || (inst_22817));
var state_22847__$1 = (function (){var statearr_22861 = state_22847;
(statearr_22861[(10)] = inst_22815__$1);

return statearr_22861;
})();
if(cljs.core.truth_(inst_22818)){
var statearr_22862_22885 = state_22847__$1;
(statearr_22862_22885[(1)] = (8));

} else {
var statearr_22863_22886 = state_22847__$1;
(statearr_22863_22886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (14))){
var inst_22840 = (state_22847[(2)]);
var inst_22841 = cljs.core.async.close_BANG_.call(null,out);
var state_22847__$1 = (function (){var statearr_22865 = state_22847;
(statearr_22865[(13)] = inst_22840);

return statearr_22865;
})();
var statearr_22866_22887 = state_22847__$1;
(statearr_22866_22887[(2)] = inst_22841);

(statearr_22866_22887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (10))){
var inst_22830 = (state_22847[(2)]);
var state_22847__$1 = state_22847;
var statearr_22867_22888 = state_22847__$1;
(statearr_22867_22888[(2)] = inst_22830);

(statearr_22867_22888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22848 === (8))){
var inst_22815 = (state_22847[(10)]);
var inst_22807 = (state_22847[(8)]);
var inst_22811 = (state_22847[(9)]);
var inst_22820 = inst_22807.push(inst_22811);
var tmp22864 = inst_22807;
var inst_22807__$1 = tmp22864;
var inst_22808 = inst_22815;
var state_22847__$1 = (function (){var statearr_22868 = state_22847;
(statearr_22868[(7)] = inst_22808);

(statearr_22868[(8)] = inst_22807__$1);

(statearr_22868[(14)] = inst_22820);

return statearr_22868;
})();
var statearr_22869_22889 = state_22847__$1;
(statearr_22869_22889[(2)] = null);

(statearr_22869_22889[(1)] = (2));


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
});})(c__19107__auto___22875,out))
;
return ((function (switch__18940__auto__,c__19107__auto___22875,out){
return (function() {
var cljs$core$async$state_machine__18941__auto__ = null;
var cljs$core$async$state_machine__18941__auto____0 = (function (){
var statearr_22870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22870[(0)] = cljs$core$async$state_machine__18941__auto__);

(statearr_22870[(1)] = (1));

return statearr_22870;
});
var cljs$core$async$state_machine__18941__auto____1 = (function (state_22847){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_22847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e22871){if((e22871 instanceof Object)){
var ex__18944__auto__ = e22871;
var statearr_22872_22890 = state_22847;
(statearr_22872_22890[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22891 = state_22847;
state_22847 = G__22891;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
cljs$core$async$state_machine__18941__auto__ = function(state_22847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18941__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18941__auto____1.call(this,state_22847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18941__auto____0;
cljs$core$async$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18941__auto____1;
return cljs$core$async$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto___22875,out))
})();
var state__19109__auto__ = (function (){var statearr_22873 = f__19108__auto__.call(null);
(statearr_22873[(6)] = c__19107__auto___22875);

return statearr_22873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto___22875,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
