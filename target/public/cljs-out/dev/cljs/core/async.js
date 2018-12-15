// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33448 = arguments.length;
switch (G__33448) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33449 = (function (f,blockable,meta33450){
this.f = f;
this.blockable = blockable;
this.meta33450 = meta33450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33451,meta33450__$1){
var self__ = this;
var _33451__$1 = this;
return (new cljs.core.async.t_cljs$core$async33449(self__.f,self__.blockable,meta33450__$1));
});

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33451){
var self__ = this;
var _33451__$1 = this;
return self__.meta33450;
});

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33450","meta33450",-1723182053,null)], null);
});

cljs.core.async.t_cljs$core$async33449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33449";

cljs.core.async.t_cljs$core$async33449.cljs$lang$ctorPrWriter = (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async/t_cljs$core$async33449");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33449.
 */
cljs.core.async.__GT_t_cljs$core$async33449 = (function cljs$core$async$__GT_t_cljs$core$async33449(f__$1,blockable__$1,meta33450){
return (new cljs.core.async.t_cljs$core$async33449(f__$1,blockable__$1,meta33450));
});

}

return (new cljs.core.async.t_cljs$core$async33449(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33455 = arguments.length;
switch (G__33455) {
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
var G__33458 = arguments.length;
switch (G__33458) {
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
var G__33461 = arguments.length;
switch (G__33461) {
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
var val_33463 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33463);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33463,ret){
return (function (){
return fn1.call(null,val_33463);
});})(val_33463,ret))
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
var G__33465 = arguments.length;
switch (G__33465) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__18893__auto___33467 = n;
var x_33468 = (0);
while(true){
if((x_33468 < n__18893__auto___33467)){
(a[x_33468] = (0));

var G__33469 = (x_33468 + (1));
x_33468 = G__33469;
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

var G__33470 = (i + (1));
i = G__33470;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33471 = (function (flag,meta33472){
this.flag = flag;
this.meta33472 = meta33472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33473,meta33472__$1){
var self__ = this;
var _33473__$1 = this;
return (new cljs.core.async.t_cljs$core$async33471(self__.flag,meta33472__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33473){
var self__ = this;
var _33473__$1 = this;
return self__.meta33472;
});})(flag))
;

cljs.core.async.t_cljs$core$async33471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33471.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33472","meta33472",-1522018710,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33471";

cljs.core.async.t_cljs$core$async33471.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async/t_cljs$core$async33471");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33471.
 */
cljs.core.async.__GT_t_cljs$core$async33471 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33471(flag__$1,meta33472){
return (new cljs.core.async.t_cljs$core$async33471(flag__$1,meta33472));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33471(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33474 = (function (flag,cb,meta33475){
this.flag = flag;
this.cb = cb;
this.meta33475 = meta33475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33476,meta33475__$1){
var self__ = this;
var _33476__$1 = this;
return (new cljs.core.async.t_cljs$core$async33474(self__.flag,self__.cb,meta33475__$1));
});

cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33476){
var self__ = this;
var _33476__$1 = this;
return self__.meta33475;
});

cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33475","meta33475",-1233807284,null)], null);
});

cljs.core.async.t_cljs$core$async33474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33474";

cljs.core.async.t_cljs$core$async33474.cljs$lang$ctorPrWriter = (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async/t_cljs$core$async33474");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33474.
 */
cljs.core.async.__GT_t_cljs$core$async33474 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33474(flag__$1,cb__$1,meta33475){
return (new cljs.core.async.t_cljs$core$async33474(flag__$1,cb__$1,meta33475));
});

}

return (new cljs.core.async.t_cljs$core$async33474(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33477_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33477_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33478_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33478_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17825__auto__ = wport;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33479 = (i + (1));
i = G__33479;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17825__auto__ = ret;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__17810__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17810__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17810__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__19144__auto__ = [];
var len__19134__auto___33485 = arguments.length;
var i__19135__auto___33486 = (0);
while(true){
if((i__19135__auto___33486 < len__19134__auto___33485)){
args__19144__auto__.push((arguments[i__19135__auto___33486]));

var G__33487 = (i__19135__auto___33486 + (1));
i__19135__auto___33486 = G__33487;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33482){
var map__33483 = p__33482;
var map__33483__$1 = (((((!((map__33483 == null))))?(((((map__33483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33483):map__33483);
var opts = map__33483__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33480){
var G__33481 = cljs.core.first.call(null,seq33480);
var seq33480__$1 = cljs.core.next.call(null,seq33480);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33481,seq33480__$1);
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
var G__33489 = arguments.length;
switch (G__33489) {
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
var c__31524__auto___33535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___33535){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___33535){
return (function (state_33513){
var state_val_33514 = (state_33513[(1)]);
if((state_val_33514 === (7))){
var inst_33509 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33515_33536 = state_33513__$1;
(statearr_33515_33536[(2)] = inst_33509);

(statearr_33515_33536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (1))){
var state_33513__$1 = state_33513;
var statearr_33516_33537 = state_33513__$1;
(statearr_33516_33537[(2)] = null);

(statearr_33516_33537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (4))){
var inst_33492 = (state_33513[(7)]);
var inst_33492__$1 = (state_33513[(2)]);
var inst_33493 = (inst_33492__$1 == null);
var state_33513__$1 = (function (){var statearr_33517 = state_33513;
(statearr_33517[(7)] = inst_33492__$1);

return statearr_33517;
})();
if(cljs.core.truth_(inst_33493)){
var statearr_33518_33538 = state_33513__$1;
(statearr_33518_33538[(1)] = (5));

} else {
var statearr_33519_33539 = state_33513__$1;
(statearr_33519_33539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (13))){
var state_33513__$1 = state_33513;
var statearr_33520_33540 = state_33513__$1;
(statearr_33520_33540[(2)] = null);

(statearr_33520_33540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (6))){
var inst_33492 = (state_33513[(7)]);
var state_33513__$1 = state_33513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33513__$1,(11),to,inst_33492);
} else {
if((state_val_33514 === (3))){
var inst_33511 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33513__$1,inst_33511);
} else {
if((state_val_33514 === (12))){
var state_33513__$1 = state_33513;
var statearr_33521_33541 = state_33513__$1;
(statearr_33521_33541[(2)] = null);

(statearr_33521_33541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (2))){
var state_33513__$1 = state_33513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33513__$1,(4),from);
} else {
if((state_val_33514 === (11))){
var inst_33502 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
if(cljs.core.truth_(inst_33502)){
var statearr_33522_33542 = state_33513__$1;
(statearr_33522_33542[(1)] = (12));

} else {
var statearr_33523_33543 = state_33513__$1;
(statearr_33523_33543[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (9))){
var state_33513__$1 = state_33513;
var statearr_33524_33544 = state_33513__$1;
(statearr_33524_33544[(2)] = null);

(statearr_33524_33544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (5))){
var state_33513__$1 = state_33513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33525_33545 = state_33513__$1;
(statearr_33525_33545[(1)] = (8));

} else {
var statearr_33526_33546 = state_33513__$1;
(statearr_33526_33546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (14))){
var inst_33507 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33527_33547 = state_33513__$1;
(statearr_33527_33547[(2)] = inst_33507);

(statearr_33527_33547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (10))){
var inst_33499 = (state_33513[(2)]);
var state_33513__$1 = state_33513;
var statearr_33528_33548 = state_33513__$1;
(statearr_33528_33548[(2)] = inst_33499);

(statearr_33528_33548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (8))){
var inst_33496 = cljs.core.async.close_BANG_.call(null,to);
var state_33513__$1 = state_33513;
var statearr_33529_33549 = state_33513__$1;
(statearr_33529_33549[(2)] = inst_33496);

(statearr_33529_33549[(1)] = (10));


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
});})(c__31524__auto___33535))
;
return ((function (switch__31357__auto__,c__31524__auto___33535){
return (function() {
var cljs$core$async$state_machine__31358__auto__ = null;
var cljs$core$async$state_machine__31358__auto____0 = (function (){
var statearr_33530 = [null,null,null,null,null,null,null,null];
(statearr_33530[(0)] = cljs$core$async$state_machine__31358__auto__);

(statearr_33530[(1)] = (1));

return statearr_33530;
});
var cljs$core$async$state_machine__31358__auto____1 = (function (state_33513){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_33513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e33531){if((e33531 instanceof Object)){
var ex__31361__auto__ = e33531;
var statearr_33532_33550 = state_33513;
(statearr_33532_33550[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33551 = state_33513;
state_33513 = G__33551;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$state_machine__31358__auto__ = function(state_33513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31358__auto____1.call(this,state_33513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31358__auto____0;
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31358__auto____1;
return cljs$core$async$state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___33535))
})();
var state__31526__auto__ = (function (){var statearr_33533 = f__31525__auto__.call(null);
(statearr_33533[(6)] = c__31524__auto___33535);

return statearr_33533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___33535))
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
return (function (p__33552){
var vec__33553 = p__33552;
var v = cljs.core.nth.call(null,vec__33553,(0),null);
var p = cljs.core.nth.call(null,vec__33553,(1),null);
var job = vec__33553;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31524__auto___33724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___33724,res,vec__33553,v,p,job,jobs,results){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___33724,res,vec__33553,v,p,job,jobs,results){
return (function (state_33560){
var state_val_33561 = (state_33560[(1)]);
if((state_val_33561 === (1))){
var state_33560__$1 = state_33560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33560__$1,(2),res,v);
} else {
if((state_val_33561 === (2))){
var inst_33557 = (state_33560[(2)]);
var inst_33558 = cljs.core.async.close_BANG_.call(null,res);
var state_33560__$1 = (function (){var statearr_33562 = state_33560;
(statearr_33562[(7)] = inst_33557);

return statearr_33562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33560__$1,inst_33558);
} else {
return null;
}
}
});})(c__31524__auto___33724,res,vec__33553,v,p,job,jobs,results))
;
return ((function (switch__31357__auto__,c__31524__auto___33724,res,vec__33553,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0 = (function (){
var statearr_33563 = [null,null,null,null,null,null,null,null];
(statearr_33563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__);

(statearr_33563[(1)] = (1));

return statearr_33563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1 = (function (state_33560){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_33560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e33564){if((e33564 instanceof Object)){
var ex__31361__auto__ = e33564;
var statearr_33565_33725 = state_33560;
(statearr_33565_33725[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33726 = state_33560;
state_33560 = G__33726;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__ = function(state_33560){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1.call(this,state_33560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___33724,res,vec__33553,v,p,job,jobs,results))
})();
var state__31526__auto__ = (function (){var statearr_33566 = f__31525__auto__.call(null);
(statearr_33566[(6)] = c__31524__auto___33724);

return statearr_33566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___33724,res,vec__33553,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33567){
var vec__33568 = p__33567;
var v = cljs.core.nth.call(null,vec__33568,(0),null);
var p = cljs.core.nth.call(null,vec__33568,(1),null);
var job = vec__33568;
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
var n__18893__auto___33727 = n;
var __33728 = (0);
while(true){
if((__33728 < n__18893__auto___33727)){
var G__33571_33729 = type;
var G__33571_33730__$1 = (((G__33571_33729 instanceof cljs.core.Keyword))?G__33571_33729.fqn:null);
switch (G__33571_33730__$1) {
case "compute":
var c__31524__auto___33732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33728,c__31524__auto___33732,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (__33728,c__31524__auto___33732,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async){
return (function (state_33584){
var state_val_33585 = (state_33584[(1)]);
if((state_val_33585 === (1))){
var state_33584__$1 = state_33584;
var statearr_33586_33733 = state_33584__$1;
(statearr_33586_33733[(2)] = null);

(statearr_33586_33733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33585 === (2))){
var state_33584__$1 = state_33584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33584__$1,(4),jobs);
} else {
if((state_val_33585 === (3))){
var inst_33582 = (state_33584[(2)]);
var state_33584__$1 = state_33584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33584__$1,inst_33582);
} else {
if((state_val_33585 === (4))){
var inst_33574 = (state_33584[(2)]);
var inst_33575 = process.call(null,inst_33574);
var state_33584__$1 = state_33584;
if(cljs.core.truth_(inst_33575)){
var statearr_33587_33734 = state_33584__$1;
(statearr_33587_33734[(1)] = (5));

} else {
var statearr_33588_33735 = state_33584__$1;
(statearr_33588_33735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33585 === (5))){
var state_33584__$1 = state_33584;
var statearr_33589_33736 = state_33584__$1;
(statearr_33589_33736[(2)] = null);

(statearr_33589_33736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33585 === (6))){
var state_33584__$1 = state_33584;
var statearr_33590_33737 = state_33584__$1;
(statearr_33590_33737[(2)] = null);

(statearr_33590_33737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33585 === (7))){
var inst_33580 = (state_33584[(2)]);
var state_33584__$1 = state_33584;
var statearr_33591_33738 = state_33584__$1;
(statearr_33591_33738[(2)] = inst_33580);

(statearr_33591_33738[(1)] = (3));


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
});})(__33728,c__31524__auto___33732,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async))
;
return ((function (__33728,switch__31357__auto__,c__31524__auto___33732,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0 = (function (){
var statearr_33592 = [null,null,null,null,null,null,null];
(statearr_33592[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__);

(statearr_33592[(1)] = (1));

return statearr_33592;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1 = (function (state_33584){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_33584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e33593){if((e33593 instanceof Object)){
var ex__31361__auto__ = e33593;
var statearr_33594_33739 = state_33584;
(statearr_33594_33739[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33740 = state_33584;
state_33584 = G__33740;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__ = function(state_33584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1.call(this,state_33584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__;
})()
;})(__33728,switch__31357__auto__,c__31524__auto___33732,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async))
})();
var state__31526__auto__ = (function (){var statearr_33595 = f__31525__auto__.call(null);
(statearr_33595[(6)] = c__31524__auto___33732);

return statearr_33595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(__33728,c__31524__auto___33732,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async))
);


break;
case "async":
var c__31524__auto___33741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33728,c__31524__auto___33741,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (__33728,c__31524__auto___33741,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async){
return (function (state_33608){
var state_val_33609 = (state_33608[(1)]);
if((state_val_33609 === (1))){
var state_33608__$1 = state_33608;
var statearr_33610_33742 = state_33608__$1;
(statearr_33610_33742[(2)] = null);

(statearr_33610_33742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (2))){
var state_33608__$1 = state_33608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33608__$1,(4),jobs);
} else {
if((state_val_33609 === (3))){
var inst_33606 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33608__$1,inst_33606);
} else {
if((state_val_33609 === (4))){
var inst_33598 = (state_33608[(2)]);
var inst_33599 = async.call(null,inst_33598);
var state_33608__$1 = state_33608;
if(cljs.core.truth_(inst_33599)){
var statearr_33611_33743 = state_33608__$1;
(statearr_33611_33743[(1)] = (5));

} else {
var statearr_33612_33744 = state_33608__$1;
(statearr_33612_33744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (5))){
var state_33608__$1 = state_33608;
var statearr_33613_33745 = state_33608__$1;
(statearr_33613_33745[(2)] = null);

(statearr_33613_33745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (6))){
var state_33608__$1 = state_33608;
var statearr_33614_33746 = state_33608__$1;
(statearr_33614_33746[(2)] = null);

(statearr_33614_33746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (7))){
var inst_33604 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
var statearr_33615_33747 = state_33608__$1;
(statearr_33615_33747[(2)] = inst_33604);

(statearr_33615_33747[(1)] = (3));


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
});})(__33728,c__31524__auto___33741,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async))
;
return ((function (__33728,switch__31357__auto__,c__31524__auto___33741,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0 = (function (){
var statearr_33616 = [null,null,null,null,null,null,null];
(statearr_33616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__);

(statearr_33616[(1)] = (1));

return statearr_33616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1 = (function (state_33608){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_33608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e33617){if((e33617 instanceof Object)){
var ex__31361__auto__ = e33617;
var statearr_33618_33748 = state_33608;
(statearr_33618_33748[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33749 = state_33608;
state_33608 = G__33749;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__ = function(state_33608){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1.call(this,state_33608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__;
})()
;})(__33728,switch__31357__auto__,c__31524__auto___33741,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async))
})();
var state__31526__auto__ = (function (){var statearr_33619 = f__31525__auto__.call(null);
(statearr_33619[(6)] = c__31524__auto___33741);

return statearr_33619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(__33728,c__31524__auto___33741,G__33571_33729,G__33571_33730__$1,n__18893__auto___33727,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33571_33730__$1)].join('')));

}

var G__33750 = (__33728 + (1));
__33728 = G__33750;
continue;
} else {
}
break;
}

var c__31524__auto___33751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___33751,jobs,results,process,async){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___33751,jobs,results,process,async){
return (function (state_33641){
var state_val_33642 = (state_33641[(1)]);
if((state_val_33642 === (1))){
var state_33641__$1 = state_33641;
var statearr_33643_33752 = state_33641__$1;
(statearr_33643_33752[(2)] = null);

(statearr_33643_33752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (2))){
var state_33641__$1 = state_33641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33641__$1,(4),from);
} else {
if((state_val_33642 === (3))){
var inst_33639 = (state_33641[(2)]);
var state_33641__$1 = state_33641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33641__$1,inst_33639);
} else {
if((state_val_33642 === (4))){
var inst_33622 = (state_33641[(7)]);
var inst_33622__$1 = (state_33641[(2)]);
var inst_33623 = (inst_33622__$1 == null);
var state_33641__$1 = (function (){var statearr_33644 = state_33641;
(statearr_33644[(7)] = inst_33622__$1);

return statearr_33644;
})();
if(cljs.core.truth_(inst_33623)){
var statearr_33645_33753 = state_33641__$1;
(statearr_33645_33753[(1)] = (5));

} else {
var statearr_33646_33754 = state_33641__$1;
(statearr_33646_33754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (5))){
var inst_33625 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33641__$1 = state_33641;
var statearr_33647_33755 = state_33641__$1;
(statearr_33647_33755[(2)] = inst_33625);

(statearr_33647_33755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (6))){
var inst_33627 = (state_33641[(8)]);
var inst_33622 = (state_33641[(7)]);
var inst_33627__$1 = cljs.core.async.chan.call(null,(1));
var inst_33628 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33629 = [inst_33622,inst_33627__$1];
var inst_33630 = (new cljs.core.PersistentVector(null,2,(5),inst_33628,inst_33629,null));
var state_33641__$1 = (function (){var statearr_33648 = state_33641;
(statearr_33648[(8)] = inst_33627__$1);

return statearr_33648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33641__$1,(8),jobs,inst_33630);
} else {
if((state_val_33642 === (7))){
var inst_33637 = (state_33641[(2)]);
var state_33641__$1 = state_33641;
var statearr_33649_33756 = state_33641__$1;
(statearr_33649_33756[(2)] = inst_33637);

(statearr_33649_33756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33642 === (8))){
var inst_33627 = (state_33641[(8)]);
var inst_33632 = (state_33641[(2)]);
var state_33641__$1 = (function (){var statearr_33650 = state_33641;
(statearr_33650[(9)] = inst_33632);

return statearr_33650;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33641__$1,(9),results,inst_33627);
} else {
if((state_val_33642 === (9))){
var inst_33634 = (state_33641[(2)]);
var state_33641__$1 = (function (){var statearr_33651 = state_33641;
(statearr_33651[(10)] = inst_33634);

return statearr_33651;
})();
var statearr_33652_33757 = state_33641__$1;
(statearr_33652_33757[(2)] = null);

(statearr_33652_33757[(1)] = (2));


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
});})(c__31524__auto___33751,jobs,results,process,async))
;
return ((function (switch__31357__auto__,c__31524__auto___33751,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0 = (function (){
var statearr_33653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__);

(statearr_33653[(1)] = (1));

return statearr_33653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1 = (function (state_33641){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_33641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e33654){if((e33654 instanceof Object)){
var ex__31361__auto__ = e33654;
var statearr_33655_33758 = state_33641;
(statearr_33655_33758[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33759 = state_33641;
state_33641 = G__33759;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__ = function(state_33641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1.call(this,state_33641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___33751,jobs,results,process,async))
})();
var state__31526__auto__ = (function (){var statearr_33656 = f__31525__auto__.call(null);
(statearr_33656[(6)] = c__31524__auto___33751);

return statearr_33656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___33751,jobs,results,process,async))
);


var c__31524__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto__,jobs,results,process,async){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto__,jobs,results,process,async){
return (function (state_33694){
var state_val_33695 = (state_33694[(1)]);
if((state_val_33695 === (7))){
var inst_33690 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33696_33760 = state_33694__$1;
(statearr_33696_33760[(2)] = inst_33690);

(statearr_33696_33760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (20))){
var state_33694__$1 = state_33694;
var statearr_33697_33761 = state_33694__$1;
(statearr_33697_33761[(2)] = null);

(statearr_33697_33761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (1))){
var state_33694__$1 = state_33694;
var statearr_33698_33762 = state_33694__$1;
(statearr_33698_33762[(2)] = null);

(statearr_33698_33762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (4))){
var inst_33659 = (state_33694[(7)]);
var inst_33659__$1 = (state_33694[(2)]);
var inst_33660 = (inst_33659__$1 == null);
var state_33694__$1 = (function (){var statearr_33699 = state_33694;
(statearr_33699[(7)] = inst_33659__$1);

return statearr_33699;
})();
if(cljs.core.truth_(inst_33660)){
var statearr_33700_33763 = state_33694__$1;
(statearr_33700_33763[(1)] = (5));

} else {
var statearr_33701_33764 = state_33694__$1;
(statearr_33701_33764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (15))){
var inst_33672 = (state_33694[(8)]);
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33694__$1,(18),to,inst_33672);
} else {
if((state_val_33695 === (21))){
var inst_33685 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33702_33765 = state_33694__$1;
(statearr_33702_33765[(2)] = inst_33685);

(statearr_33702_33765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (13))){
var inst_33687 = (state_33694[(2)]);
var state_33694__$1 = (function (){var statearr_33703 = state_33694;
(statearr_33703[(9)] = inst_33687);

return statearr_33703;
})();
var statearr_33704_33766 = state_33694__$1;
(statearr_33704_33766[(2)] = null);

(statearr_33704_33766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (6))){
var inst_33659 = (state_33694[(7)]);
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(11),inst_33659);
} else {
if((state_val_33695 === (17))){
var inst_33680 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33680)){
var statearr_33705_33767 = state_33694__$1;
(statearr_33705_33767[(1)] = (19));

} else {
var statearr_33706_33768 = state_33694__$1;
(statearr_33706_33768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (3))){
var inst_33692 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33694__$1,inst_33692);
} else {
if((state_val_33695 === (12))){
var inst_33669 = (state_33694[(10)]);
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(14),inst_33669);
} else {
if((state_val_33695 === (2))){
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(4),results);
} else {
if((state_val_33695 === (19))){
var state_33694__$1 = state_33694;
var statearr_33707_33769 = state_33694__$1;
(statearr_33707_33769[(2)] = null);

(statearr_33707_33769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (11))){
var inst_33669 = (state_33694[(2)]);
var state_33694__$1 = (function (){var statearr_33708 = state_33694;
(statearr_33708[(10)] = inst_33669);

return statearr_33708;
})();
var statearr_33709_33770 = state_33694__$1;
(statearr_33709_33770[(2)] = null);

(statearr_33709_33770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (9))){
var state_33694__$1 = state_33694;
var statearr_33710_33771 = state_33694__$1;
(statearr_33710_33771[(2)] = null);

(statearr_33710_33771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (5))){
var state_33694__$1 = state_33694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33711_33772 = state_33694__$1;
(statearr_33711_33772[(1)] = (8));

} else {
var statearr_33712_33773 = state_33694__$1;
(statearr_33712_33773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (14))){
var inst_33674 = (state_33694[(11)]);
var inst_33672 = (state_33694[(8)]);
var inst_33672__$1 = (state_33694[(2)]);
var inst_33673 = (inst_33672__$1 == null);
var inst_33674__$1 = cljs.core.not.call(null,inst_33673);
var state_33694__$1 = (function (){var statearr_33713 = state_33694;
(statearr_33713[(11)] = inst_33674__$1);

(statearr_33713[(8)] = inst_33672__$1);

return statearr_33713;
})();
if(inst_33674__$1){
var statearr_33714_33774 = state_33694__$1;
(statearr_33714_33774[(1)] = (15));

} else {
var statearr_33715_33775 = state_33694__$1;
(statearr_33715_33775[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (16))){
var inst_33674 = (state_33694[(11)]);
var state_33694__$1 = state_33694;
var statearr_33716_33776 = state_33694__$1;
(statearr_33716_33776[(2)] = inst_33674);

(statearr_33716_33776[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (10))){
var inst_33666 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33717_33777 = state_33694__$1;
(statearr_33717_33777[(2)] = inst_33666);

(statearr_33717_33777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (18))){
var inst_33677 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33718_33778 = state_33694__$1;
(statearr_33718_33778[(2)] = inst_33677);

(statearr_33718_33778[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (8))){
var inst_33663 = cljs.core.async.close_BANG_.call(null,to);
var state_33694__$1 = state_33694;
var statearr_33719_33779 = state_33694__$1;
(statearr_33719_33779[(2)] = inst_33663);

(statearr_33719_33779[(1)] = (10));


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
});})(c__31524__auto__,jobs,results,process,async))
;
return ((function (switch__31357__auto__,c__31524__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0 = (function (){
var statearr_33720 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__);

(statearr_33720[(1)] = (1));

return statearr_33720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1 = (function (state_33694){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_33694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e33721){if((e33721 instanceof Object)){
var ex__31361__auto__ = e33721;
var statearr_33722_33780 = state_33694;
(statearr_33722_33780[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33781 = state_33694;
state_33694 = G__33781;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__ = function(state_33694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1.call(this,state_33694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto__,jobs,results,process,async))
})();
var state__31526__auto__ = (function (){var statearr_33723 = f__31525__auto__.call(null);
(statearr_33723[(6)] = c__31524__auto__);

return statearr_33723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto__,jobs,results,process,async))
);

return c__31524__auto__;
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
var G__33783 = arguments.length;
switch (G__33783) {
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
var G__33786 = arguments.length;
switch (G__33786) {
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
var G__33789 = arguments.length;
switch (G__33789) {
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
var c__31524__auto___33838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___33838,tc,fc){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___33838,tc,fc){
return (function (state_33815){
var state_val_33816 = (state_33815[(1)]);
if((state_val_33816 === (7))){
var inst_33811 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33817_33839 = state_33815__$1;
(statearr_33817_33839[(2)] = inst_33811);

(statearr_33817_33839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (1))){
var state_33815__$1 = state_33815;
var statearr_33818_33840 = state_33815__$1;
(statearr_33818_33840[(2)] = null);

(statearr_33818_33840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (4))){
var inst_33792 = (state_33815[(7)]);
var inst_33792__$1 = (state_33815[(2)]);
var inst_33793 = (inst_33792__$1 == null);
var state_33815__$1 = (function (){var statearr_33819 = state_33815;
(statearr_33819[(7)] = inst_33792__$1);

return statearr_33819;
})();
if(cljs.core.truth_(inst_33793)){
var statearr_33820_33841 = state_33815__$1;
(statearr_33820_33841[(1)] = (5));

} else {
var statearr_33821_33842 = state_33815__$1;
(statearr_33821_33842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (13))){
var state_33815__$1 = state_33815;
var statearr_33822_33843 = state_33815__$1;
(statearr_33822_33843[(2)] = null);

(statearr_33822_33843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (6))){
var inst_33792 = (state_33815[(7)]);
var inst_33798 = p.call(null,inst_33792);
var state_33815__$1 = state_33815;
if(cljs.core.truth_(inst_33798)){
var statearr_33823_33844 = state_33815__$1;
(statearr_33823_33844[(1)] = (9));

} else {
var statearr_33824_33845 = state_33815__$1;
(statearr_33824_33845[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (3))){
var inst_33813 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33815__$1,inst_33813);
} else {
if((state_val_33816 === (12))){
var state_33815__$1 = state_33815;
var statearr_33825_33846 = state_33815__$1;
(statearr_33825_33846[(2)] = null);

(statearr_33825_33846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (2))){
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33815__$1,(4),ch);
} else {
if((state_val_33816 === (11))){
var inst_33792 = (state_33815[(7)]);
var inst_33802 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33815__$1,(8),inst_33802,inst_33792);
} else {
if((state_val_33816 === (9))){
var state_33815__$1 = state_33815;
var statearr_33826_33847 = state_33815__$1;
(statearr_33826_33847[(2)] = tc);

(statearr_33826_33847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (5))){
var inst_33795 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33796 = cljs.core.async.close_BANG_.call(null,fc);
var state_33815__$1 = (function (){var statearr_33827 = state_33815;
(statearr_33827[(8)] = inst_33795);

return statearr_33827;
})();
var statearr_33828_33848 = state_33815__$1;
(statearr_33828_33848[(2)] = inst_33796);

(statearr_33828_33848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (14))){
var inst_33809 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33829_33849 = state_33815__$1;
(statearr_33829_33849[(2)] = inst_33809);

(statearr_33829_33849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (10))){
var state_33815__$1 = state_33815;
var statearr_33830_33850 = state_33815__$1;
(statearr_33830_33850[(2)] = fc);

(statearr_33830_33850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (8))){
var inst_33804 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
if(cljs.core.truth_(inst_33804)){
var statearr_33831_33851 = state_33815__$1;
(statearr_33831_33851[(1)] = (12));

} else {
var statearr_33832_33852 = state_33815__$1;
(statearr_33832_33852[(1)] = (13));

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
});})(c__31524__auto___33838,tc,fc))
;
return ((function (switch__31357__auto__,c__31524__auto___33838,tc,fc){
return (function() {
var cljs$core$async$state_machine__31358__auto__ = null;
var cljs$core$async$state_machine__31358__auto____0 = (function (){
var statearr_33833 = [null,null,null,null,null,null,null,null,null];
(statearr_33833[(0)] = cljs$core$async$state_machine__31358__auto__);

(statearr_33833[(1)] = (1));

return statearr_33833;
});
var cljs$core$async$state_machine__31358__auto____1 = (function (state_33815){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_33815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e33834){if((e33834 instanceof Object)){
var ex__31361__auto__ = e33834;
var statearr_33835_33853 = state_33815;
(statearr_33835_33853[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33854 = state_33815;
state_33815 = G__33854;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$state_machine__31358__auto__ = function(state_33815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31358__auto____1.call(this,state_33815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31358__auto____0;
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31358__auto____1;
return cljs$core$async$state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___33838,tc,fc))
})();
var state__31526__auto__ = (function (){var statearr_33836 = f__31525__auto__.call(null);
(statearr_33836[(6)] = c__31524__auto___33838);

return statearr_33836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___33838,tc,fc))
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
var c__31524__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto__){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto__){
return (function (state_33875){
var state_val_33876 = (state_33875[(1)]);
if((state_val_33876 === (7))){
var inst_33871 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
var statearr_33877_33895 = state_33875__$1;
(statearr_33877_33895[(2)] = inst_33871);

(statearr_33877_33895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (1))){
var inst_33855 = init;
var state_33875__$1 = (function (){var statearr_33878 = state_33875;
(statearr_33878[(7)] = inst_33855);

return statearr_33878;
})();
var statearr_33879_33896 = state_33875__$1;
(statearr_33879_33896[(2)] = null);

(statearr_33879_33896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (4))){
var inst_33858 = (state_33875[(8)]);
var inst_33858__$1 = (state_33875[(2)]);
var inst_33859 = (inst_33858__$1 == null);
var state_33875__$1 = (function (){var statearr_33880 = state_33875;
(statearr_33880[(8)] = inst_33858__$1);

return statearr_33880;
})();
if(cljs.core.truth_(inst_33859)){
var statearr_33881_33897 = state_33875__$1;
(statearr_33881_33897[(1)] = (5));

} else {
var statearr_33882_33898 = state_33875__$1;
(statearr_33882_33898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (6))){
var inst_33858 = (state_33875[(8)]);
var inst_33862 = (state_33875[(9)]);
var inst_33855 = (state_33875[(7)]);
var inst_33862__$1 = f.call(null,inst_33855,inst_33858);
var inst_33863 = cljs.core.reduced_QMARK_.call(null,inst_33862__$1);
var state_33875__$1 = (function (){var statearr_33883 = state_33875;
(statearr_33883[(9)] = inst_33862__$1);

return statearr_33883;
})();
if(inst_33863){
var statearr_33884_33899 = state_33875__$1;
(statearr_33884_33899[(1)] = (8));

} else {
var statearr_33885_33900 = state_33875__$1;
(statearr_33885_33900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (3))){
var inst_33873 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33875__$1,inst_33873);
} else {
if((state_val_33876 === (2))){
var state_33875__$1 = state_33875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33875__$1,(4),ch);
} else {
if((state_val_33876 === (9))){
var inst_33862 = (state_33875[(9)]);
var inst_33855 = inst_33862;
var state_33875__$1 = (function (){var statearr_33886 = state_33875;
(statearr_33886[(7)] = inst_33855);

return statearr_33886;
})();
var statearr_33887_33901 = state_33875__$1;
(statearr_33887_33901[(2)] = null);

(statearr_33887_33901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (5))){
var inst_33855 = (state_33875[(7)]);
var state_33875__$1 = state_33875;
var statearr_33888_33902 = state_33875__$1;
(statearr_33888_33902[(2)] = inst_33855);

(statearr_33888_33902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (10))){
var inst_33869 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
var statearr_33889_33903 = state_33875__$1;
(statearr_33889_33903[(2)] = inst_33869);

(statearr_33889_33903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (8))){
var inst_33862 = (state_33875[(9)]);
var inst_33865 = cljs.core.deref.call(null,inst_33862);
var state_33875__$1 = state_33875;
var statearr_33890_33904 = state_33875__$1;
(statearr_33890_33904[(2)] = inst_33865);

(statearr_33890_33904[(1)] = (10));


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
});})(c__31524__auto__))
;
return ((function (switch__31357__auto__,c__31524__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31358__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31358__auto____0 = (function (){
var statearr_33891 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33891[(0)] = cljs$core$async$reduce_$_state_machine__31358__auto__);

(statearr_33891[(1)] = (1));

return statearr_33891;
});
var cljs$core$async$reduce_$_state_machine__31358__auto____1 = (function (state_33875){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_33875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e33892){if((e33892 instanceof Object)){
var ex__31361__auto__ = e33892;
var statearr_33893_33905 = state_33875;
(statearr_33893_33905[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33906 = state_33875;
state_33875 = G__33906;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31358__auto__ = function(state_33875){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31358__auto____1.call(this,state_33875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31358__auto____0;
cljs$core$async$reduce_$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31358__auto____1;
return cljs$core$async$reduce_$_state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto__))
})();
var state__31526__auto__ = (function (){var statearr_33894 = f__31525__auto__.call(null);
(statearr_33894[(6)] = c__31524__auto__);

return statearr_33894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto__))
);

return c__31524__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31524__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto__,f__$1){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto__,f__$1){
return (function (state_33912){
var state_val_33913 = (state_33912[(1)]);
if((state_val_33913 === (1))){
var inst_33907 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33912__$1 = state_33912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33912__$1,(2),inst_33907);
} else {
if((state_val_33913 === (2))){
var inst_33909 = (state_33912[(2)]);
var inst_33910 = f__$1.call(null,inst_33909);
var state_33912__$1 = state_33912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33912__$1,inst_33910);
} else {
return null;
}
}
});})(c__31524__auto__,f__$1))
;
return ((function (switch__31357__auto__,c__31524__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31358__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31358__auto____0 = (function (){
var statearr_33914 = [null,null,null,null,null,null,null];
(statearr_33914[(0)] = cljs$core$async$transduce_$_state_machine__31358__auto__);

(statearr_33914[(1)] = (1));

return statearr_33914;
});
var cljs$core$async$transduce_$_state_machine__31358__auto____1 = (function (state_33912){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_33912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e33915){if((e33915 instanceof Object)){
var ex__31361__auto__ = e33915;
var statearr_33916_33918 = state_33912;
(statearr_33916_33918[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33919 = state_33912;
state_33912 = G__33919;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31358__auto__ = function(state_33912){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31358__auto____1.call(this,state_33912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31358__auto____0;
cljs$core$async$transduce_$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31358__auto____1;
return cljs$core$async$transduce_$_state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto__,f__$1))
})();
var state__31526__auto__ = (function (){var statearr_33917 = f__31525__auto__.call(null);
(statearr_33917[(6)] = c__31524__auto__);

return statearr_33917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto__,f__$1))
);

return c__31524__auto__;
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
var G__33921 = arguments.length;
switch (G__33921) {
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
var c__31524__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto__){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto__){
return (function (state_33946){
var state_val_33947 = (state_33946[(1)]);
if((state_val_33947 === (7))){
var inst_33928 = (state_33946[(2)]);
var state_33946__$1 = state_33946;
var statearr_33948_33969 = state_33946__$1;
(statearr_33948_33969[(2)] = inst_33928);

(statearr_33948_33969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (1))){
var inst_33922 = cljs.core.seq.call(null,coll);
var inst_33923 = inst_33922;
var state_33946__$1 = (function (){var statearr_33949 = state_33946;
(statearr_33949[(7)] = inst_33923);

return statearr_33949;
})();
var statearr_33950_33970 = state_33946__$1;
(statearr_33950_33970[(2)] = null);

(statearr_33950_33970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (4))){
var inst_33923 = (state_33946[(7)]);
var inst_33926 = cljs.core.first.call(null,inst_33923);
var state_33946__$1 = state_33946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33946__$1,(7),ch,inst_33926);
} else {
if((state_val_33947 === (13))){
var inst_33940 = (state_33946[(2)]);
var state_33946__$1 = state_33946;
var statearr_33951_33971 = state_33946__$1;
(statearr_33951_33971[(2)] = inst_33940);

(statearr_33951_33971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (6))){
var inst_33931 = (state_33946[(2)]);
var state_33946__$1 = state_33946;
if(cljs.core.truth_(inst_33931)){
var statearr_33952_33972 = state_33946__$1;
(statearr_33952_33972[(1)] = (8));

} else {
var statearr_33953_33973 = state_33946__$1;
(statearr_33953_33973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (3))){
var inst_33944 = (state_33946[(2)]);
var state_33946__$1 = state_33946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33946__$1,inst_33944);
} else {
if((state_val_33947 === (12))){
var state_33946__$1 = state_33946;
var statearr_33954_33974 = state_33946__$1;
(statearr_33954_33974[(2)] = null);

(statearr_33954_33974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (2))){
var inst_33923 = (state_33946[(7)]);
var state_33946__$1 = state_33946;
if(cljs.core.truth_(inst_33923)){
var statearr_33955_33975 = state_33946__$1;
(statearr_33955_33975[(1)] = (4));

} else {
var statearr_33956_33976 = state_33946__$1;
(statearr_33956_33976[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (11))){
var inst_33937 = cljs.core.async.close_BANG_.call(null,ch);
var state_33946__$1 = state_33946;
var statearr_33957_33977 = state_33946__$1;
(statearr_33957_33977[(2)] = inst_33937);

(statearr_33957_33977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (9))){
var state_33946__$1 = state_33946;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33958_33978 = state_33946__$1;
(statearr_33958_33978[(1)] = (11));

} else {
var statearr_33959_33979 = state_33946__$1;
(statearr_33959_33979[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (5))){
var inst_33923 = (state_33946[(7)]);
var state_33946__$1 = state_33946;
var statearr_33960_33980 = state_33946__$1;
(statearr_33960_33980[(2)] = inst_33923);

(statearr_33960_33980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (10))){
var inst_33942 = (state_33946[(2)]);
var state_33946__$1 = state_33946;
var statearr_33961_33981 = state_33946__$1;
(statearr_33961_33981[(2)] = inst_33942);

(statearr_33961_33981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (8))){
var inst_33923 = (state_33946[(7)]);
var inst_33933 = cljs.core.next.call(null,inst_33923);
var inst_33923__$1 = inst_33933;
var state_33946__$1 = (function (){var statearr_33962 = state_33946;
(statearr_33962[(7)] = inst_33923__$1);

return statearr_33962;
})();
var statearr_33963_33982 = state_33946__$1;
(statearr_33963_33982[(2)] = null);

(statearr_33963_33982[(1)] = (2));


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
});})(c__31524__auto__))
;
return ((function (switch__31357__auto__,c__31524__auto__){
return (function() {
var cljs$core$async$state_machine__31358__auto__ = null;
var cljs$core$async$state_machine__31358__auto____0 = (function (){
var statearr_33964 = [null,null,null,null,null,null,null,null];
(statearr_33964[(0)] = cljs$core$async$state_machine__31358__auto__);

(statearr_33964[(1)] = (1));

return statearr_33964;
});
var cljs$core$async$state_machine__31358__auto____1 = (function (state_33946){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_33946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e33965){if((e33965 instanceof Object)){
var ex__31361__auto__ = e33965;
var statearr_33966_33983 = state_33946;
(statearr_33966_33983[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33984 = state_33946;
state_33946 = G__33984;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$state_machine__31358__auto__ = function(state_33946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31358__auto____1.call(this,state_33946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31358__auto____0;
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31358__auto____1;
return cljs$core$async$state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto__))
})();
var state__31526__auto__ = (function (){var statearr_33967 = f__31525__auto__.call(null);
(statearr_33967[(6)] = c__31524__auto__);

return statearr_33967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto__))
);

return c__31524__auto__;
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
var x__18573__auto__ = (((_ == null))?null:_);
var m__18574__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,_);
} else {
var m__18571__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,_);
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
var x__18573__auto__ = (((m == null))?null:m);
var m__18574__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18571__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,m,ch,close_QMARK_);
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
var x__18573__auto__ = (((m == null))?null:m);
var m__18574__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,m,ch);
} else {
var m__18571__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,m,ch);
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
var x__18573__auto__ = (((m == null))?null:m);
var m__18574__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,m);
} else {
var m__18571__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33985 = (function (ch,cs,meta33986){
this.ch = ch;
this.cs = cs;
this.meta33986 = meta33986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33987,meta33986__$1){
var self__ = this;
var _33987__$1 = this;
return (new cljs.core.async.t_cljs$core$async33985(self__.ch,self__.cs,meta33986__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33987){
var self__ = this;
var _33987__$1 = this;
return self__.meta33986;
});})(cs))
;

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33985.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33985.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33986","meta33986",1397355647,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33985";

cljs.core.async.t_cljs$core$async33985.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async/t_cljs$core$async33985");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33985.
 */
cljs.core.async.__GT_t_cljs$core$async33985 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33985(ch__$1,cs__$1,meta33986){
return (new cljs.core.async.t_cljs$core$async33985(ch__$1,cs__$1,meta33986));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33985(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31524__auto___34207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___34207,cs,m,dchan,dctr,done){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___34207,cs,m,dchan,dctr,done){
return (function (state_34122){
var state_val_34123 = (state_34122[(1)]);
if((state_val_34123 === (7))){
var inst_34118 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34124_34208 = state_34122__$1;
(statearr_34124_34208[(2)] = inst_34118);

(statearr_34124_34208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (20))){
var inst_34021 = (state_34122[(7)]);
var inst_34033 = cljs.core.first.call(null,inst_34021);
var inst_34034 = cljs.core.nth.call(null,inst_34033,(0),null);
var inst_34035 = cljs.core.nth.call(null,inst_34033,(1),null);
var state_34122__$1 = (function (){var statearr_34125 = state_34122;
(statearr_34125[(8)] = inst_34034);

return statearr_34125;
})();
if(cljs.core.truth_(inst_34035)){
var statearr_34126_34209 = state_34122__$1;
(statearr_34126_34209[(1)] = (22));

} else {
var statearr_34127_34210 = state_34122__$1;
(statearr_34127_34210[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (27))){
var inst_34063 = (state_34122[(9)]);
var inst_33990 = (state_34122[(10)]);
var inst_34070 = (state_34122[(11)]);
var inst_34065 = (state_34122[(12)]);
var inst_34070__$1 = cljs.core._nth.call(null,inst_34063,inst_34065);
var inst_34071 = cljs.core.async.put_BANG_.call(null,inst_34070__$1,inst_33990,done);
var state_34122__$1 = (function (){var statearr_34128 = state_34122;
(statearr_34128[(11)] = inst_34070__$1);

return statearr_34128;
})();
if(cljs.core.truth_(inst_34071)){
var statearr_34129_34211 = state_34122__$1;
(statearr_34129_34211[(1)] = (30));

} else {
var statearr_34130_34212 = state_34122__$1;
(statearr_34130_34212[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (1))){
var state_34122__$1 = state_34122;
var statearr_34131_34213 = state_34122__$1;
(statearr_34131_34213[(2)] = null);

(statearr_34131_34213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (24))){
var inst_34021 = (state_34122[(7)]);
var inst_34040 = (state_34122[(2)]);
var inst_34041 = cljs.core.next.call(null,inst_34021);
var inst_33999 = inst_34041;
var inst_34000 = null;
var inst_34001 = (0);
var inst_34002 = (0);
var state_34122__$1 = (function (){var statearr_34132 = state_34122;
(statearr_34132[(13)] = inst_34000);

(statearr_34132[(14)] = inst_34001);

(statearr_34132[(15)] = inst_33999);

(statearr_34132[(16)] = inst_34002);

(statearr_34132[(17)] = inst_34040);

return statearr_34132;
})();
var statearr_34133_34214 = state_34122__$1;
(statearr_34133_34214[(2)] = null);

(statearr_34133_34214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (39))){
var state_34122__$1 = state_34122;
var statearr_34137_34215 = state_34122__$1;
(statearr_34137_34215[(2)] = null);

(statearr_34137_34215[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (4))){
var inst_33990 = (state_34122[(10)]);
var inst_33990__$1 = (state_34122[(2)]);
var inst_33991 = (inst_33990__$1 == null);
var state_34122__$1 = (function (){var statearr_34138 = state_34122;
(statearr_34138[(10)] = inst_33990__$1);

return statearr_34138;
})();
if(cljs.core.truth_(inst_33991)){
var statearr_34139_34216 = state_34122__$1;
(statearr_34139_34216[(1)] = (5));

} else {
var statearr_34140_34217 = state_34122__$1;
(statearr_34140_34217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (15))){
var inst_34000 = (state_34122[(13)]);
var inst_34001 = (state_34122[(14)]);
var inst_33999 = (state_34122[(15)]);
var inst_34002 = (state_34122[(16)]);
var inst_34017 = (state_34122[(2)]);
var inst_34018 = (inst_34002 + (1));
var tmp34134 = inst_34000;
var tmp34135 = inst_34001;
var tmp34136 = inst_33999;
var inst_33999__$1 = tmp34136;
var inst_34000__$1 = tmp34134;
var inst_34001__$1 = tmp34135;
var inst_34002__$1 = inst_34018;
var state_34122__$1 = (function (){var statearr_34141 = state_34122;
(statearr_34141[(13)] = inst_34000__$1);

(statearr_34141[(14)] = inst_34001__$1);

(statearr_34141[(15)] = inst_33999__$1);

(statearr_34141[(18)] = inst_34017);

(statearr_34141[(16)] = inst_34002__$1);

return statearr_34141;
})();
var statearr_34142_34218 = state_34122__$1;
(statearr_34142_34218[(2)] = null);

(statearr_34142_34218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (21))){
var inst_34044 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34146_34219 = state_34122__$1;
(statearr_34146_34219[(2)] = inst_34044);

(statearr_34146_34219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (31))){
var inst_34070 = (state_34122[(11)]);
var inst_34074 = done.call(null,null);
var inst_34075 = cljs.core.async.untap_STAR_.call(null,m,inst_34070);
var state_34122__$1 = (function (){var statearr_34147 = state_34122;
(statearr_34147[(19)] = inst_34074);

return statearr_34147;
})();
var statearr_34148_34220 = state_34122__$1;
(statearr_34148_34220[(2)] = inst_34075);

(statearr_34148_34220[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (32))){
var inst_34064 = (state_34122[(20)]);
var inst_34063 = (state_34122[(9)]);
var inst_34062 = (state_34122[(21)]);
var inst_34065 = (state_34122[(12)]);
var inst_34077 = (state_34122[(2)]);
var inst_34078 = (inst_34065 + (1));
var tmp34143 = inst_34064;
var tmp34144 = inst_34063;
var tmp34145 = inst_34062;
var inst_34062__$1 = tmp34145;
var inst_34063__$1 = tmp34144;
var inst_34064__$1 = tmp34143;
var inst_34065__$1 = inst_34078;
var state_34122__$1 = (function (){var statearr_34149 = state_34122;
(statearr_34149[(22)] = inst_34077);

(statearr_34149[(20)] = inst_34064__$1);

(statearr_34149[(9)] = inst_34063__$1);

(statearr_34149[(21)] = inst_34062__$1);

(statearr_34149[(12)] = inst_34065__$1);

return statearr_34149;
})();
var statearr_34150_34221 = state_34122__$1;
(statearr_34150_34221[(2)] = null);

(statearr_34150_34221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (40))){
var inst_34090 = (state_34122[(23)]);
var inst_34094 = done.call(null,null);
var inst_34095 = cljs.core.async.untap_STAR_.call(null,m,inst_34090);
var state_34122__$1 = (function (){var statearr_34151 = state_34122;
(statearr_34151[(24)] = inst_34094);

return statearr_34151;
})();
var statearr_34152_34222 = state_34122__$1;
(statearr_34152_34222[(2)] = inst_34095);

(statearr_34152_34222[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (33))){
var inst_34081 = (state_34122[(25)]);
var inst_34083 = cljs.core.chunked_seq_QMARK_.call(null,inst_34081);
var state_34122__$1 = state_34122;
if(inst_34083){
var statearr_34153_34223 = state_34122__$1;
(statearr_34153_34223[(1)] = (36));

} else {
var statearr_34154_34224 = state_34122__$1;
(statearr_34154_34224[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (13))){
var inst_34011 = (state_34122[(26)]);
var inst_34014 = cljs.core.async.close_BANG_.call(null,inst_34011);
var state_34122__$1 = state_34122;
var statearr_34155_34225 = state_34122__$1;
(statearr_34155_34225[(2)] = inst_34014);

(statearr_34155_34225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (22))){
var inst_34034 = (state_34122[(8)]);
var inst_34037 = cljs.core.async.close_BANG_.call(null,inst_34034);
var state_34122__$1 = state_34122;
var statearr_34156_34226 = state_34122__$1;
(statearr_34156_34226[(2)] = inst_34037);

(statearr_34156_34226[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (36))){
var inst_34081 = (state_34122[(25)]);
var inst_34085 = cljs.core.chunk_first.call(null,inst_34081);
var inst_34086 = cljs.core.chunk_rest.call(null,inst_34081);
var inst_34087 = cljs.core.count.call(null,inst_34085);
var inst_34062 = inst_34086;
var inst_34063 = inst_34085;
var inst_34064 = inst_34087;
var inst_34065 = (0);
var state_34122__$1 = (function (){var statearr_34157 = state_34122;
(statearr_34157[(20)] = inst_34064);

(statearr_34157[(9)] = inst_34063);

(statearr_34157[(21)] = inst_34062);

(statearr_34157[(12)] = inst_34065);

return statearr_34157;
})();
var statearr_34158_34227 = state_34122__$1;
(statearr_34158_34227[(2)] = null);

(statearr_34158_34227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (41))){
var inst_34081 = (state_34122[(25)]);
var inst_34097 = (state_34122[(2)]);
var inst_34098 = cljs.core.next.call(null,inst_34081);
var inst_34062 = inst_34098;
var inst_34063 = null;
var inst_34064 = (0);
var inst_34065 = (0);
var state_34122__$1 = (function (){var statearr_34159 = state_34122;
(statearr_34159[(20)] = inst_34064);

(statearr_34159[(9)] = inst_34063);

(statearr_34159[(27)] = inst_34097);

(statearr_34159[(21)] = inst_34062);

(statearr_34159[(12)] = inst_34065);

return statearr_34159;
})();
var statearr_34160_34228 = state_34122__$1;
(statearr_34160_34228[(2)] = null);

(statearr_34160_34228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (43))){
var state_34122__$1 = state_34122;
var statearr_34161_34229 = state_34122__$1;
(statearr_34161_34229[(2)] = null);

(statearr_34161_34229[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (29))){
var inst_34106 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34162_34230 = state_34122__$1;
(statearr_34162_34230[(2)] = inst_34106);

(statearr_34162_34230[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (44))){
var inst_34115 = (state_34122[(2)]);
var state_34122__$1 = (function (){var statearr_34163 = state_34122;
(statearr_34163[(28)] = inst_34115);

return statearr_34163;
})();
var statearr_34164_34231 = state_34122__$1;
(statearr_34164_34231[(2)] = null);

(statearr_34164_34231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (6))){
var inst_34054 = (state_34122[(29)]);
var inst_34053 = cljs.core.deref.call(null,cs);
var inst_34054__$1 = cljs.core.keys.call(null,inst_34053);
var inst_34055 = cljs.core.count.call(null,inst_34054__$1);
var inst_34056 = cljs.core.reset_BANG_.call(null,dctr,inst_34055);
var inst_34061 = cljs.core.seq.call(null,inst_34054__$1);
var inst_34062 = inst_34061;
var inst_34063 = null;
var inst_34064 = (0);
var inst_34065 = (0);
var state_34122__$1 = (function (){var statearr_34165 = state_34122;
(statearr_34165[(20)] = inst_34064);

(statearr_34165[(9)] = inst_34063);

(statearr_34165[(21)] = inst_34062);

(statearr_34165[(29)] = inst_34054__$1);

(statearr_34165[(30)] = inst_34056);

(statearr_34165[(12)] = inst_34065);

return statearr_34165;
})();
var statearr_34166_34232 = state_34122__$1;
(statearr_34166_34232[(2)] = null);

(statearr_34166_34232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (28))){
var inst_34081 = (state_34122[(25)]);
var inst_34062 = (state_34122[(21)]);
var inst_34081__$1 = cljs.core.seq.call(null,inst_34062);
var state_34122__$1 = (function (){var statearr_34167 = state_34122;
(statearr_34167[(25)] = inst_34081__$1);

return statearr_34167;
})();
if(inst_34081__$1){
var statearr_34168_34233 = state_34122__$1;
(statearr_34168_34233[(1)] = (33));

} else {
var statearr_34169_34234 = state_34122__$1;
(statearr_34169_34234[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (25))){
var inst_34064 = (state_34122[(20)]);
var inst_34065 = (state_34122[(12)]);
var inst_34067 = (inst_34065 < inst_34064);
var inst_34068 = inst_34067;
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34068)){
var statearr_34170_34235 = state_34122__$1;
(statearr_34170_34235[(1)] = (27));

} else {
var statearr_34171_34236 = state_34122__$1;
(statearr_34171_34236[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (34))){
var state_34122__$1 = state_34122;
var statearr_34172_34237 = state_34122__$1;
(statearr_34172_34237[(2)] = null);

(statearr_34172_34237[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (17))){
var state_34122__$1 = state_34122;
var statearr_34173_34238 = state_34122__$1;
(statearr_34173_34238[(2)] = null);

(statearr_34173_34238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (3))){
var inst_34120 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34122__$1,inst_34120);
} else {
if((state_val_34123 === (12))){
var inst_34049 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34174_34239 = state_34122__$1;
(statearr_34174_34239[(2)] = inst_34049);

(statearr_34174_34239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (2))){
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34122__$1,(4),ch);
} else {
if((state_val_34123 === (23))){
var state_34122__$1 = state_34122;
var statearr_34175_34240 = state_34122__$1;
(statearr_34175_34240[(2)] = null);

(statearr_34175_34240[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (35))){
var inst_34104 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34176_34241 = state_34122__$1;
(statearr_34176_34241[(2)] = inst_34104);

(statearr_34176_34241[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (19))){
var inst_34021 = (state_34122[(7)]);
var inst_34025 = cljs.core.chunk_first.call(null,inst_34021);
var inst_34026 = cljs.core.chunk_rest.call(null,inst_34021);
var inst_34027 = cljs.core.count.call(null,inst_34025);
var inst_33999 = inst_34026;
var inst_34000 = inst_34025;
var inst_34001 = inst_34027;
var inst_34002 = (0);
var state_34122__$1 = (function (){var statearr_34177 = state_34122;
(statearr_34177[(13)] = inst_34000);

(statearr_34177[(14)] = inst_34001);

(statearr_34177[(15)] = inst_33999);

(statearr_34177[(16)] = inst_34002);

return statearr_34177;
})();
var statearr_34178_34242 = state_34122__$1;
(statearr_34178_34242[(2)] = null);

(statearr_34178_34242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (11))){
var inst_33999 = (state_34122[(15)]);
var inst_34021 = (state_34122[(7)]);
var inst_34021__$1 = cljs.core.seq.call(null,inst_33999);
var state_34122__$1 = (function (){var statearr_34179 = state_34122;
(statearr_34179[(7)] = inst_34021__$1);

return statearr_34179;
})();
if(inst_34021__$1){
var statearr_34180_34243 = state_34122__$1;
(statearr_34180_34243[(1)] = (16));

} else {
var statearr_34181_34244 = state_34122__$1;
(statearr_34181_34244[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (9))){
var inst_34051 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34182_34245 = state_34122__$1;
(statearr_34182_34245[(2)] = inst_34051);

(statearr_34182_34245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (5))){
var inst_33997 = cljs.core.deref.call(null,cs);
var inst_33998 = cljs.core.seq.call(null,inst_33997);
var inst_33999 = inst_33998;
var inst_34000 = null;
var inst_34001 = (0);
var inst_34002 = (0);
var state_34122__$1 = (function (){var statearr_34183 = state_34122;
(statearr_34183[(13)] = inst_34000);

(statearr_34183[(14)] = inst_34001);

(statearr_34183[(15)] = inst_33999);

(statearr_34183[(16)] = inst_34002);

return statearr_34183;
})();
var statearr_34184_34246 = state_34122__$1;
(statearr_34184_34246[(2)] = null);

(statearr_34184_34246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (14))){
var state_34122__$1 = state_34122;
var statearr_34185_34247 = state_34122__$1;
(statearr_34185_34247[(2)] = null);

(statearr_34185_34247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (45))){
var inst_34112 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34186_34248 = state_34122__$1;
(statearr_34186_34248[(2)] = inst_34112);

(statearr_34186_34248[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (26))){
var inst_34054 = (state_34122[(29)]);
var inst_34108 = (state_34122[(2)]);
var inst_34109 = cljs.core.seq.call(null,inst_34054);
var state_34122__$1 = (function (){var statearr_34187 = state_34122;
(statearr_34187[(31)] = inst_34108);

return statearr_34187;
})();
if(inst_34109){
var statearr_34188_34249 = state_34122__$1;
(statearr_34188_34249[(1)] = (42));

} else {
var statearr_34189_34250 = state_34122__$1;
(statearr_34189_34250[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (16))){
var inst_34021 = (state_34122[(7)]);
var inst_34023 = cljs.core.chunked_seq_QMARK_.call(null,inst_34021);
var state_34122__$1 = state_34122;
if(inst_34023){
var statearr_34190_34251 = state_34122__$1;
(statearr_34190_34251[(1)] = (19));

} else {
var statearr_34191_34252 = state_34122__$1;
(statearr_34191_34252[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (38))){
var inst_34101 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34192_34253 = state_34122__$1;
(statearr_34192_34253[(2)] = inst_34101);

(statearr_34192_34253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (30))){
var state_34122__$1 = state_34122;
var statearr_34193_34254 = state_34122__$1;
(statearr_34193_34254[(2)] = null);

(statearr_34193_34254[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (10))){
var inst_34000 = (state_34122[(13)]);
var inst_34002 = (state_34122[(16)]);
var inst_34010 = cljs.core._nth.call(null,inst_34000,inst_34002);
var inst_34011 = cljs.core.nth.call(null,inst_34010,(0),null);
var inst_34012 = cljs.core.nth.call(null,inst_34010,(1),null);
var state_34122__$1 = (function (){var statearr_34194 = state_34122;
(statearr_34194[(26)] = inst_34011);

return statearr_34194;
})();
if(cljs.core.truth_(inst_34012)){
var statearr_34195_34255 = state_34122__$1;
(statearr_34195_34255[(1)] = (13));

} else {
var statearr_34196_34256 = state_34122__$1;
(statearr_34196_34256[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (18))){
var inst_34047 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34197_34257 = state_34122__$1;
(statearr_34197_34257[(2)] = inst_34047);

(statearr_34197_34257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (42))){
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34122__$1,(45),dchan);
} else {
if((state_val_34123 === (37))){
var inst_34081 = (state_34122[(25)]);
var inst_33990 = (state_34122[(10)]);
var inst_34090 = (state_34122[(23)]);
var inst_34090__$1 = cljs.core.first.call(null,inst_34081);
var inst_34091 = cljs.core.async.put_BANG_.call(null,inst_34090__$1,inst_33990,done);
var state_34122__$1 = (function (){var statearr_34198 = state_34122;
(statearr_34198[(23)] = inst_34090__$1);

return statearr_34198;
})();
if(cljs.core.truth_(inst_34091)){
var statearr_34199_34258 = state_34122__$1;
(statearr_34199_34258[(1)] = (39));

} else {
var statearr_34200_34259 = state_34122__$1;
(statearr_34200_34259[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (8))){
var inst_34001 = (state_34122[(14)]);
var inst_34002 = (state_34122[(16)]);
var inst_34004 = (inst_34002 < inst_34001);
var inst_34005 = inst_34004;
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34005)){
var statearr_34201_34260 = state_34122__$1;
(statearr_34201_34260[(1)] = (10));

} else {
var statearr_34202_34261 = state_34122__$1;
(statearr_34202_34261[(1)] = (11));

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
});})(c__31524__auto___34207,cs,m,dchan,dctr,done))
;
return ((function (switch__31357__auto__,c__31524__auto___34207,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31358__auto__ = null;
var cljs$core$async$mult_$_state_machine__31358__auto____0 = (function (){
var statearr_34203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34203[(0)] = cljs$core$async$mult_$_state_machine__31358__auto__);

(statearr_34203[(1)] = (1));

return statearr_34203;
});
var cljs$core$async$mult_$_state_machine__31358__auto____1 = (function (state_34122){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_34122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e34204){if((e34204 instanceof Object)){
var ex__31361__auto__ = e34204;
var statearr_34205_34262 = state_34122;
(statearr_34205_34262[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34263 = state_34122;
state_34122 = G__34263;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31358__auto__ = function(state_34122){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31358__auto____1.call(this,state_34122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31358__auto____0;
cljs$core$async$mult_$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31358__auto____1;
return cljs$core$async$mult_$_state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___34207,cs,m,dchan,dctr,done))
})();
var state__31526__auto__ = (function (){var statearr_34206 = f__31525__auto__.call(null);
(statearr_34206[(6)] = c__31524__auto___34207);

return statearr_34206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___34207,cs,m,dchan,dctr,done))
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
var G__34265 = arguments.length;
switch (G__34265) {
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
var x__18573__auto__ = (((m == null))?null:m);
var m__18574__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,m,ch);
} else {
var m__18571__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,m,ch);
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
var x__18573__auto__ = (((m == null))?null:m);
var m__18574__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,m,ch);
} else {
var m__18571__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,m,ch);
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
var x__18573__auto__ = (((m == null))?null:m);
var m__18574__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,m);
} else {
var m__18571__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,m);
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
var x__18573__auto__ = (((m == null))?null:m);
var m__18574__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,m,state_map);
} else {
var m__18571__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,m,state_map);
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
var x__18573__auto__ = (((m == null))?null:m);
var m__18574__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,m,mode);
} else {
var m__18571__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19144__auto__ = [];
var len__19134__auto___34277 = arguments.length;
var i__19135__auto___34278 = (0);
while(true){
if((i__19135__auto___34278 < len__19134__auto___34277)){
args__19144__auto__.push((arguments[i__19135__auto___34278]));

var G__34279 = (i__19135__auto___34278 + (1));
i__19135__auto___34278 = G__34279;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((3) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19145__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34271){
var map__34272 = p__34271;
var map__34272__$1 = (((((!((map__34272 == null))))?(((((map__34272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34272):map__34272);
var opts = map__34272__$1;
var statearr_34274_34280 = state;
(statearr_34274_34280[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__34272,map__34272__$1,opts){
return (function (val){
var statearr_34275_34281 = state;
(statearr_34275_34281[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34272,map__34272__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_34276_34282 = state;
(statearr_34276_34282[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34267){
var G__34268 = cljs.core.first.call(null,seq34267);
var seq34267__$1 = cljs.core.next.call(null,seq34267);
var G__34269 = cljs.core.first.call(null,seq34267__$1);
var seq34267__$2 = cljs.core.next.call(null,seq34267__$1);
var G__34270 = cljs.core.first.call(null,seq34267__$2);
var seq34267__$3 = cljs.core.next.call(null,seq34267__$2);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34268,G__34269,G__34270,seq34267__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34283 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34284){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34284 = meta34284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34285,meta34284__$1){
var self__ = this;
var _34285__$1 = this;
return (new cljs.core.async.t_cljs$core$async34283(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34284__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34285){
var self__ = this;
var _34285__$1 = this;
return self__.meta34284;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34283.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34284","meta34284",-2033898664,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34283";

cljs.core.async.t_cljs$core$async34283.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async/t_cljs$core$async34283");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34283.
 */
cljs.core.async.__GT_t_cljs$core$async34283 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34283(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34284){
return (new cljs.core.async.t_cljs$core$async34283(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34284));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34283(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31524__auto___34447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___34447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___34447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34387){
var state_val_34388 = (state_34387[(1)]);
if((state_val_34388 === (7))){
var inst_34302 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34389_34448 = state_34387__$1;
(statearr_34389_34448[(2)] = inst_34302);

(statearr_34389_34448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (20))){
var inst_34314 = (state_34387[(7)]);
var state_34387__$1 = state_34387;
var statearr_34390_34449 = state_34387__$1;
(statearr_34390_34449[(2)] = inst_34314);

(statearr_34390_34449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (27))){
var state_34387__$1 = state_34387;
var statearr_34391_34450 = state_34387__$1;
(statearr_34391_34450[(2)] = null);

(statearr_34391_34450[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (1))){
var inst_34289 = (state_34387[(8)]);
var inst_34289__$1 = calc_state.call(null);
var inst_34291 = (inst_34289__$1 == null);
var inst_34292 = cljs.core.not.call(null,inst_34291);
var state_34387__$1 = (function (){var statearr_34392 = state_34387;
(statearr_34392[(8)] = inst_34289__$1);

return statearr_34392;
})();
if(inst_34292){
var statearr_34393_34451 = state_34387__$1;
(statearr_34393_34451[(1)] = (2));

} else {
var statearr_34394_34452 = state_34387__$1;
(statearr_34394_34452[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (24))){
var inst_34347 = (state_34387[(9)]);
var inst_34338 = (state_34387[(10)]);
var inst_34361 = (state_34387[(11)]);
var inst_34361__$1 = inst_34338.call(null,inst_34347);
var state_34387__$1 = (function (){var statearr_34395 = state_34387;
(statearr_34395[(11)] = inst_34361__$1);

return statearr_34395;
})();
if(cljs.core.truth_(inst_34361__$1)){
var statearr_34396_34453 = state_34387__$1;
(statearr_34396_34453[(1)] = (29));

} else {
var statearr_34397_34454 = state_34387__$1;
(statearr_34397_34454[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (4))){
var inst_34305 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34305)){
var statearr_34398_34455 = state_34387__$1;
(statearr_34398_34455[(1)] = (8));

} else {
var statearr_34399_34456 = state_34387__$1;
(statearr_34399_34456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (15))){
var inst_34332 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34332)){
var statearr_34400_34457 = state_34387__$1;
(statearr_34400_34457[(1)] = (19));

} else {
var statearr_34401_34458 = state_34387__$1;
(statearr_34401_34458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (21))){
var inst_34337 = (state_34387[(12)]);
var inst_34337__$1 = (state_34387[(2)]);
var inst_34338 = cljs.core.get.call(null,inst_34337__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34339 = cljs.core.get.call(null,inst_34337__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34340 = cljs.core.get.call(null,inst_34337__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34387__$1 = (function (){var statearr_34402 = state_34387;
(statearr_34402[(12)] = inst_34337__$1);

(statearr_34402[(10)] = inst_34338);

(statearr_34402[(13)] = inst_34339);

return statearr_34402;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34387__$1,(22),inst_34340);
} else {
if((state_val_34388 === (31))){
var inst_34369 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34369)){
var statearr_34403_34459 = state_34387__$1;
(statearr_34403_34459[(1)] = (32));

} else {
var statearr_34404_34460 = state_34387__$1;
(statearr_34404_34460[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (32))){
var inst_34346 = (state_34387[(14)]);
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34387__$1,(35),out,inst_34346);
} else {
if((state_val_34388 === (33))){
var inst_34337 = (state_34387[(12)]);
var inst_34314 = inst_34337;
var state_34387__$1 = (function (){var statearr_34405 = state_34387;
(statearr_34405[(7)] = inst_34314);

return statearr_34405;
})();
var statearr_34406_34461 = state_34387__$1;
(statearr_34406_34461[(2)] = null);

(statearr_34406_34461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (13))){
var inst_34314 = (state_34387[(7)]);
var inst_34321 = inst_34314.cljs$lang$protocol_mask$partition0$;
var inst_34322 = (inst_34321 & (64));
var inst_34323 = inst_34314.cljs$core$ISeq$;
var inst_34324 = (cljs.core.PROTOCOL_SENTINEL === inst_34323);
var inst_34325 = ((inst_34322) || (inst_34324));
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34325)){
var statearr_34407_34462 = state_34387__$1;
(statearr_34407_34462[(1)] = (16));

} else {
var statearr_34408_34463 = state_34387__$1;
(statearr_34408_34463[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (22))){
var inst_34346 = (state_34387[(14)]);
var inst_34347 = (state_34387[(9)]);
var inst_34345 = (state_34387[(2)]);
var inst_34346__$1 = cljs.core.nth.call(null,inst_34345,(0),null);
var inst_34347__$1 = cljs.core.nth.call(null,inst_34345,(1),null);
var inst_34348 = (inst_34346__$1 == null);
var inst_34349 = cljs.core._EQ_.call(null,inst_34347__$1,change);
var inst_34350 = ((inst_34348) || (inst_34349));
var state_34387__$1 = (function (){var statearr_34409 = state_34387;
(statearr_34409[(14)] = inst_34346__$1);

(statearr_34409[(9)] = inst_34347__$1);

return statearr_34409;
})();
if(cljs.core.truth_(inst_34350)){
var statearr_34410_34464 = state_34387__$1;
(statearr_34410_34464[(1)] = (23));

} else {
var statearr_34411_34465 = state_34387__$1;
(statearr_34411_34465[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (36))){
var inst_34337 = (state_34387[(12)]);
var inst_34314 = inst_34337;
var state_34387__$1 = (function (){var statearr_34412 = state_34387;
(statearr_34412[(7)] = inst_34314);

return statearr_34412;
})();
var statearr_34413_34466 = state_34387__$1;
(statearr_34413_34466[(2)] = null);

(statearr_34413_34466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (29))){
var inst_34361 = (state_34387[(11)]);
var state_34387__$1 = state_34387;
var statearr_34414_34467 = state_34387__$1;
(statearr_34414_34467[(2)] = inst_34361);

(statearr_34414_34467[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (6))){
var state_34387__$1 = state_34387;
var statearr_34415_34468 = state_34387__$1;
(statearr_34415_34468[(2)] = false);

(statearr_34415_34468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (28))){
var inst_34357 = (state_34387[(2)]);
var inst_34358 = calc_state.call(null);
var inst_34314 = inst_34358;
var state_34387__$1 = (function (){var statearr_34416 = state_34387;
(statearr_34416[(15)] = inst_34357);

(statearr_34416[(7)] = inst_34314);

return statearr_34416;
})();
var statearr_34417_34469 = state_34387__$1;
(statearr_34417_34469[(2)] = null);

(statearr_34417_34469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (25))){
var inst_34383 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34418_34470 = state_34387__$1;
(statearr_34418_34470[(2)] = inst_34383);

(statearr_34418_34470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (34))){
var inst_34381 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34419_34471 = state_34387__$1;
(statearr_34419_34471[(2)] = inst_34381);

(statearr_34419_34471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (17))){
var state_34387__$1 = state_34387;
var statearr_34420_34472 = state_34387__$1;
(statearr_34420_34472[(2)] = false);

(statearr_34420_34472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (3))){
var state_34387__$1 = state_34387;
var statearr_34421_34473 = state_34387__$1;
(statearr_34421_34473[(2)] = false);

(statearr_34421_34473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (12))){
var inst_34385 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34387__$1,inst_34385);
} else {
if((state_val_34388 === (2))){
var inst_34289 = (state_34387[(8)]);
var inst_34294 = inst_34289.cljs$lang$protocol_mask$partition0$;
var inst_34295 = (inst_34294 & (64));
var inst_34296 = inst_34289.cljs$core$ISeq$;
var inst_34297 = (cljs.core.PROTOCOL_SENTINEL === inst_34296);
var inst_34298 = ((inst_34295) || (inst_34297));
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34298)){
var statearr_34422_34474 = state_34387__$1;
(statearr_34422_34474[(1)] = (5));

} else {
var statearr_34423_34475 = state_34387__$1;
(statearr_34423_34475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (23))){
var inst_34346 = (state_34387[(14)]);
var inst_34352 = (inst_34346 == null);
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34352)){
var statearr_34424_34476 = state_34387__$1;
(statearr_34424_34476[(1)] = (26));

} else {
var statearr_34425_34477 = state_34387__$1;
(statearr_34425_34477[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (35))){
var inst_34372 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34372)){
var statearr_34426_34478 = state_34387__$1;
(statearr_34426_34478[(1)] = (36));

} else {
var statearr_34427_34479 = state_34387__$1;
(statearr_34427_34479[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (19))){
var inst_34314 = (state_34387[(7)]);
var inst_34334 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34314);
var state_34387__$1 = state_34387;
var statearr_34428_34480 = state_34387__$1;
(statearr_34428_34480[(2)] = inst_34334);

(statearr_34428_34480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (11))){
var inst_34314 = (state_34387[(7)]);
var inst_34318 = (inst_34314 == null);
var inst_34319 = cljs.core.not.call(null,inst_34318);
var state_34387__$1 = state_34387;
if(inst_34319){
var statearr_34429_34481 = state_34387__$1;
(statearr_34429_34481[(1)] = (13));

} else {
var statearr_34430_34482 = state_34387__$1;
(statearr_34430_34482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (9))){
var inst_34289 = (state_34387[(8)]);
var state_34387__$1 = state_34387;
var statearr_34431_34483 = state_34387__$1;
(statearr_34431_34483[(2)] = inst_34289);

(statearr_34431_34483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (5))){
var state_34387__$1 = state_34387;
var statearr_34432_34484 = state_34387__$1;
(statearr_34432_34484[(2)] = true);

(statearr_34432_34484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (14))){
var state_34387__$1 = state_34387;
var statearr_34433_34485 = state_34387__$1;
(statearr_34433_34485[(2)] = false);

(statearr_34433_34485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (26))){
var inst_34347 = (state_34387[(9)]);
var inst_34354 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34347);
var state_34387__$1 = state_34387;
var statearr_34434_34486 = state_34387__$1;
(statearr_34434_34486[(2)] = inst_34354);

(statearr_34434_34486[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (16))){
var state_34387__$1 = state_34387;
var statearr_34435_34487 = state_34387__$1;
(statearr_34435_34487[(2)] = true);

(statearr_34435_34487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (38))){
var inst_34377 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34436_34488 = state_34387__$1;
(statearr_34436_34488[(2)] = inst_34377);

(statearr_34436_34488[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (30))){
var inst_34347 = (state_34387[(9)]);
var inst_34338 = (state_34387[(10)]);
var inst_34339 = (state_34387[(13)]);
var inst_34364 = cljs.core.empty_QMARK_.call(null,inst_34338);
var inst_34365 = inst_34339.call(null,inst_34347);
var inst_34366 = cljs.core.not.call(null,inst_34365);
var inst_34367 = ((inst_34364) && (inst_34366));
var state_34387__$1 = state_34387;
var statearr_34437_34489 = state_34387__$1;
(statearr_34437_34489[(2)] = inst_34367);

(statearr_34437_34489[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (10))){
var inst_34289 = (state_34387[(8)]);
var inst_34310 = (state_34387[(2)]);
var inst_34311 = cljs.core.get.call(null,inst_34310,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34312 = cljs.core.get.call(null,inst_34310,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34313 = cljs.core.get.call(null,inst_34310,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34314 = inst_34289;
var state_34387__$1 = (function (){var statearr_34438 = state_34387;
(statearr_34438[(16)] = inst_34313);

(statearr_34438[(7)] = inst_34314);

(statearr_34438[(17)] = inst_34311);

(statearr_34438[(18)] = inst_34312);

return statearr_34438;
})();
var statearr_34439_34490 = state_34387__$1;
(statearr_34439_34490[(2)] = null);

(statearr_34439_34490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (18))){
var inst_34329 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34440_34491 = state_34387__$1;
(statearr_34440_34491[(2)] = inst_34329);

(statearr_34440_34491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (37))){
var state_34387__$1 = state_34387;
var statearr_34441_34492 = state_34387__$1;
(statearr_34441_34492[(2)] = null);

(statearr_34441_34492[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (8))){
var inst_34289 = (state_34387[(8)]);
var inst_34307 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34289);
var state_34387__$1 = state_34387;
var statearr_34442_34493 = state_34387__$1;
(statearr_34442_34493[(2)] = inst_34307);

(statearr_34442_34493[(1)] = (10));


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
});})(c__31524__auto___34447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31357__auto__,c__31524__auto___34447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31358__auto__ = null;
var cljs$core$async$mix_$_state_machine__31358__auto____0 = (function (){
var statearr_34443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34443[(0)] = cljs$core$async$mix_$_state_machine__31358__auto__);

(statearr_34443[(1)] = (1));

return statearr_34443;
});
var cljs$core$async$mix_$_state_machine__31358__auto____1 = (function (state_34387){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_34387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e34444){if((e34444 instanceof Object)){
var ex__31361__auto__ = e34444;
var statearr_34445_34494 = state_34387;
(statearr_34445_34494[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34495 = state_34387;
state_34387 = G__34495;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31358__auto__ = function(state_34387){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31358__auto____1.call(this,state_34387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31358__auto____0;
cljs$core$async$mix_$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31358__auto____1;
return cljs$core$async$mix_$_state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___34447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31526__auto__ = (function (){var statearr_34446 = f__31525__auto__.call(null);
(statearr_34446[(6)] = c__31524__auto___34447);

return statearr_34446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___34447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__18573__auto__ = (((p == null))?null:p);
var m__18574__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18571__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,p,v,ch,close_QMARK_);
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
var x__18573__auto__ = (((p == null))?null:p);
var m__18574__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,p,v,ch);
} else {
var m__18571__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34497 = arguments.length;
switch (G__34497) {
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
var x__18573__auto__ = (((p == null))?null:p);
var m__18574__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,p);
} else {
var m__18571__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,p);
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
var x__18573__auto__ = (((p == null))?null:p);
var m__18574__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18573__auto__)]);
if((!((m__18574__auto__ == null)))){
return m__18574__auto__.call(null,p,v);
} else {
var m__18571__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__18571__auto__ == null)))){
return m__18571__auto__.call(null,p,v);
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
var G__34501 = arguments.length;
switch (G__34501) {
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
var or__17825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17825__auto__,mults){
return (function (p1__34499_SHARP_){
if(cljs.core.truth_(p1__34499_SHARP_.call(null,topic))){
return p1__34499_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34499_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17825__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34502 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34503){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34503 = meta34503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34504,meta34503__$1){
var self__ = this;
var _34504__$1 = this;
return (new cljs.core.async.t_cljs$core$async34502(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34503__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34504){
var self__ = this;
var _34504__$1 = this;
return self__.meta34503;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34502.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34502.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34502.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34502.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34502.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34502.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34502.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34502.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34503","meta34503",1939818380,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34502";

cljs.core.async.t_cljs$core$async34502.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async/t_cljs$core$async34502");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34502.
 */
cljs.core.async.__GT_t_cljs$core$async34502 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34502(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34503){
return (new cljs.core.async.t_cljs$core$async34502(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34503));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34502(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31524__auto___34622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___34622,mults,ensure_mult,p){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___34622,mults,ensure_mult,p){
return (function (state_34576){
var state_val_34577 = (state_34576[(1)]);
if((state_val_34577 === (7))){
var inst_34572 = (state_34576[(2)]);
var state_34576__$1 = state_34576;
var statearr_34578_34623 = state_34576__$1;
(statearr_34578_34623[(2)] = inst_34572);

(statearr_34578_34623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (20))){
var state_34576__$1 = state_34576;
var statearr_34579_34624 = state_34576__$1;
(statearr_34579_34624[(2)] = null);

(statearr_34579_34624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (1))){
var state_34576__$1 = state_34576;
var statearr_34580_34625 = state_34576__$1;
(statearr_34580_34625[(2)] = null);

(statearr_34580_34625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (24))){
var inst_34555 = (state_34576[(7)]);
var inst_34564 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34555);
var state_34576__$1 = state_34576;
var statearr_34581_34626 = state_34576__$1;
(statearr_34581_34626[(2)] = inst_34564);

(statearr_34581_34626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (4))){
var inst_34507 = (state_34576[(8)]);
var inst_34507__$1 = (state_34576[(2)]);
var inst_34508 = (inst_34507__$1 == null);
var state_34576__$1 = (function (){var statearr_34582 = state_34576;
(statearr_34582[(8)] = inst_34507__$1);

return statearr_34582;
})();
if(cljs.core.truth_(inst_34508)){
var statearr_34583_34627 = state_34576__$1;
(statearr_34583_34627[(1)] = (5));

} else {
var statearr_34584_34628 = state_34576__$1;
(statearr_34584_34628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (15))){
var inst_34549 = (state_34576[(2)]);
var state_34576__$1 = state_34576;
var statearr_34585_34629 = state_34576__$1;
(statearr_34585_34629[(2)] = inst_34549);

(statearr_34585_34629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (21))){
var inst_34569 = (state_34576[(2)]);
var state_34576__$1 = (function (){var statearr_34586 = state_34576;
(statearr_34586[(9)] = inst_34569);

return statearr_34586;
})();
var statearr_34587_34630 = state_34576__$1;
(statearr_34587_34630[(2)] = null);

(statearr_34587_34630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (13))){
var inst_34531 = (state_34576[(10)]);
var inst_34533 = cljs.core.chunked_seq_QMARK_.call(null,inst_34531);
var state_34576__$1 = state_34576;
if(inst_34533){
var statearr_34588_34631 = state_34576__$1;
(statearr_34588_34631[(1)] = (16));

} else {
var statearr_34589_34632 = state_34576__$1;
(statearr_34589_34632[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (22))){
var inst_34561 = (state_34576[(2)]);
var state_34576__$1 = state_34576;
if(cljs.core.truth_(inst_34561)){
var statearr_34590_34633 = state_34576__$1;
(statearr_34590_34633[(1)] = (23));

} else {
var statearr_34591_34634 = state_34576__$1;
(statearr_34591_34634[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (6))){
var inst_34507 = (state_34576[(8)]);
var inst_34555 = (state_34576[(7)]);
var inst_34557 = (state_34576[(11)]);
var inst_34555__$1 = topic_fn.call(null,inst_34507);
var inst_34556 = cljs.core.deref.call(null,mults);
var inst_34557__$1 = cljs.core.get.call(null,inst_34556,inst_34555__$1);
var state_34576__$1 = (function (){var statearr_34592 = state_34576;
(statearr_34592[(7)] = inst_34555__$1);

(statearr_34592[(11)] = inst_34557__$1);

return statearr_34592;
})();
if(cljs.core.truth_(inst_34557__$1)){
var statearr_34593_34635 = state_34576__$1;
(statearr_34593_34635[(1)] = (19));

} else {
var statearr_34594_34636 = state_34576__$1;
(statearr_34594_34636[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (25))){
var inst_34566 = (state_34576[(2)]);
var state_34576__$1 = state_34576;
var statearr_34595_34637 = state_34576__$1;
(statearr_34595_34637[(2)] = inst_34566);

(statearr_34595_34637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (17))){
var inst_34531 = (state_34576[(10)]);
var inst_34540 = cljs.core.first.call(null,inst_34531);
var inst_34541 = cljs.core.async.muxch_STAR_.call(null,inst_34540);
var inst_34542 = cljs.core.async.close_BANG_.call(null,inst_34541);
var inst_34543 = cljs.core.next.call(null,inst_34531);
var inst_34517 = inst_34543;
var inst_34518 = null;
var inst_34519 = (0);
var inst_34520 = (0);
var state_34576__$1 = (function (){var statearr_34596 = state_34576;
(statearr_34596[(12)] = inst_34542);

(statearr_34596[(13)] = inst_34520);

(statearr_34596[(14)] = inst_34517);

(statearr_34596[(15)] = inst_34518);

(statearr_34596[(16)] = inst_34519);

return statearr_34596;
})();
var statearr_34597_34638 = state_34576__$1;
(statearr_34597_34638[(2)] = null);

(statearr_34597_34638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (3))){
var inst_34574 = (state_34576[(2)]);
var state_34576__$1 = state_34576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34576__$1,inst_34574);
} else {
if((state_val_34577 === (12))){
var inst_34551 = (state_34576[(2)]);
var state_34576__$1 = state_34576;
var statearr_34598_34639 = state_34576__$1;
(statearr_34598_34639[(2)] = inst_34551);

(statearr_34598_34639[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (2))){
var state_34576__$1 = state_34576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34576__$1,(4),ch);
} else {
if((state_val_34577 === (23))){
var state_34576__$1 = state_34576;
var statearr_34599_34640 = state_34576__$1;
(statearr_34599_34640[(2)] = null);

(statearr_34599_34640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (19))){
var inst_34507 = (state_34576[(8)]);
var inst_34557 = (state_34576[(11)]);
var inst_34559 = cljs.core.async.muxch_STAR_.call(null,inst_34557);
var state_34576__$1 = state_34576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34576__$1,(22),inst_34559,inst_34507);
} else {
if((state_val_34577 === (11))){
var inst_34517 = (state_34576[(14)]);
var inst_34531 = (state_34576[(10)]);
var inst_34531__$1 = cljs.core.seq.call(null,inst_34517);
var state_34576__$1 = (function (){var statearr_34600 = state_34576;
(statearr_34600[(10)] = inst_34531__$1);

return statearr_34600;
})();
if(inst_34531__$1){
var statearr_34601_34641 = state_34576__$1;
(statearr_34601_34641[(1)] = (13));

} else {
var statearr_34602_34642 = state_34576__$1;
(statearr_34602_34642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (9))){
var inst_34553 = (state_34576[(2)]);
var state_34576__$1 = state_34576;
var statearr_34603_34643 = state_34576__$1;
(statearr_34603_34643[(2)] = inst_34553);

(statearr_34603_34643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (5))){
var inst_34514 = cljs.core.deref.call(null,mults);
var inst_34515 = cljs.core.vals.call(null,inst_34514);
var inst_34516 = cljs.core.seq.call(null,inst_34515);
var inst_34517 = inst_34516;
var inst_34518 = null;
var inst_34519 = (0);
var inst_34520 = (0);
var state_34576__$1 = (function (){var statearr_34604 = state_34576;
(statearr_34604[(13)] = inst_34520);

(statearr_34604[(14)] = inst_34517);

(statearr_34604[(15)] = inst_34518);

(statearr_34604[(16)] = inst_34519);

return statearr_34604;
})();
var statearr_34605_34644 = state_34576__$1;
(statearr_34605_34644[(2)] = null);

(statearr_34605_34644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (14))){
var state_34576__$1 = state_34576;
var statearr_34609_34645 = state_34576__$1;
(statearr_34609_34645[(2)] = null);

(statearr_34609_34645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (16))){
var inst_34531 = (state_34576[(10)]);
var inst_34535 = cljs.core.chunk_first.call(null,inst_34531);
var inst_34536 = cljs.core.chunk_rest.call(null,inst_34531);
var inst_34537 = cljs.core.count.call(null,inst_34535);
var inst_34517 = inst_34536;
var inst_34518 = inst_34535;
var inst_34519 = inst_34537;
var inst_34520 = (0);
var state_34576__$1 = (function (){var statearr_34610 = state_34576;
(statearr_34610[(13)] = inst_34520);

(statearr_34610[(14)] = inst_34517);

(statearr_34610[(15)] = inst_34518);

(statearr_34610[(16)] = inst_34519);

return statearr_34610;
})();
var statearr_34611_34646 = state_34576__$1;
(statearr_34611_34646[(2)] = null);

(statearr_34611_34646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (10))){
var inst_34520 = (state_34576[(13)]);
var inst_34517 = (state_34576[(14)]);
var inst_34518 = (state_34576[(15)]);
var inst_34519 = (state_34576[(16)]);
var inst_34525 = cljs.core._nth.call(null,inst_34518,inst_34520);
var inst_34526 = cljs.core.async.muxch_STAR_.call(null,inst_34525);
var inst_34527 = cljs.core.async.close_BANG_.call(null,inst_34526);
var inst_34528 = (inst_34520 + (1));
var tmp34606 = inst_34517;
var tmp34607 = inst_34518;
var tmp34608 = inst_34519;
var inst_34517__$1 = tmp34606;
var inst_34518__$1 = tmp34607;
var inst_34519__$1 = tmp34608;
var inst_34520__$1 = inst_34528;
var state_34576__$1 = (function (){var statearr_34612 = state_34576;
(statearr_34612[(17)] = inst_34527);

(statearr_34612[(13)] = inst_34520__$1);

(statearr_34612[(14)] = inst_34517__$1);

(statearr_34612[(15)] = inst_34518__$1);

(statearr_34612[(16)] = inst_34519__$1);

return statearr_34612;
})();
var statearr_34613_34647 = state_34576__$1;
(statearr_34613_34647[(2)] = null);

(statearr_34613_34647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (18))){
var inst_34546 = (state_34576[(2)]);
var state_34576__$1 = state_34576;
var statearr_34614_34648 = state_34576__$1;
(statearr_34614_34648[(2)] = inst_34546);

(statearr_34614_34648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34577 === (8))){
var inst_34520 = (state_34576[(13)]);
var inst_34519 = (state_34576[(16)]);
var inst_34522 = (inst_34520 < inst_34519);
var inst_34523 = inst_34522;
var state_34576__$1 = state_34576;
if(cljs.core.truth_(inst_34523)){
var statearr_34615_34649 = state_34576__$1;
(statearr_34615_34649[(1)] = (10));

} else {
var statearr_34616_34650 = state_34576__$1;
(statearr_34616_34650[(1)] = (11));

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
});})(c__31524__auto___34622,mults,ensure_mult,p))
;
return ((function (switch__31357__auto__,c__31524__auto___34622,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31358__auto__ = null;
var cljs$core$async$state_machine__31358__auto____0 = (function (){
var statearr_34617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34617[(0)] = cljs$core$async$state_machine__31358__auto__);

(statearr_34617[(1)] = (1));

return statearr_34617;
});
var cljs$core$async$state_machine__31358__auto____1 = (function (state_34576){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_34576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e34618){if((e34618 instanceof Object)){
var ex__31361__auto__ = e34618;
var statearr_34619_34651 = state_34576;
(statearr_34619_34651[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34652 = state_34576;
state_34576 = G__34652;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$state_machine__31358__auto__ = function(state_34576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31358__auto____1.call(this,state_34576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31358__auto____0;
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31358__auto____1;
return cljs$core$async$state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___34622,mults,ensure_mult,p))
})();
var state__31526__auto__ = (function (){var statearr_34620 = f__31525__auto__.call(null);
(statearr_34620[(6)] = c__31524__auto___34622);

return statearr_34620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___34622,mults,ensure_mult,p))
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
var G__34654 = arguments.length;
switch (G__34654) {
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
var G__34657 = arguments.length;
switch (G__34657) {
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
var G__34660 = arguments.length;
switch (G__34660) {
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
var c__31524__auto___34727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___34727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___34727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34699){
var state_val_34700 = (state_34699[(1)]);
if((state_val_34700 === (7))){
var state_34699__$1 = state_34699;
var statearr_34701_34728 = state_34699__$1;
(statearr_34701_34728[(2)] = null);

(statearr_34701_34728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (1))){
var state_34699__$1 = state_34699;
var statearr_34702_34729 = state_34699__$1;
(statearr_34702_34729[(2)] = null);

(statearr_34702_34729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (4))){
var inst_34663 = (state_34699[(7)]);
var inst_34665 = (inst_34663 < cnt);
var state_34699__$1 = state_34699;
if(cljs.core.truth_(inst_34665)){
var statearr_34703_34730 = state_34699__$1;
(statearr_34703_34730[(1)] = (6));

} else {
var statearr_34704_34731 = state_34699__$1;
(statearr_34704_34731[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (15))){
var inst_34695 = (state_34699[(2)]);
var state_34699__$1 = state_34699;
var statearr_34705_34732 = state_34699__$1;
(statearr_34705_34732[(2)] = inst_34695);

(statearr_34705_34732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (13))){
var inst_34688 = cljs.core.async.close_BANG_.call(null,out);
var state_34699__$1 = state_34699;
var statearr_34706_34733 = state_34699__$1;
(statearr_34706_34733[(2)] = inst_34688);

(statearr_34706_34733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (6))){
var state_34699__$1 = state_34699;
var statearr_34707_34734 = state_34699__$1;
(statearr_34707_34734[(2)] = null);

(statearr_34707_34734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (3))){
var inst_34697 = (state_34699[(2)]);
var state_34699__$1 = state_34699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34699__$1,inst_34697);
} else {
if((state_val_34700 === (12))){
var inst_34685 = (state_34699[(8)]);
var inst_34685__$1 = (state_34699[(2)]);
var inst_34686 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34685__$1);
var state_34699__$1 = (function (){var statearr_34708 = state_34699;
(statearr_34708[(8)] = inst_34685__$1);

return statearr_34708;
})();
if(cljs.core.truth_(inst_34686)){
var statearr_34709_34735 = state_34699__$1;
(statearr_34709_34735[(1)] = (13));

} else {
var statearr_34710_34736 = state_34699__$1;
(statearr_34710_34736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (2))){
var inst_34662 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34663 = (0);
var state_34699__$1 = (function (){var statearr_34711 = state_34699;
(statearr_34711[(7)] = inst_34663);

(statearr_34711[(9)] = inst_34662);

return statearr_34711;
})();
var statearr_34712_34737 = state_34699__$1;
(statearr_34712_34737[(2)] = null);

(statearr_34712_34737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (11))){
var inst_34663 = (state_34699[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34699,(10),Object,null,(9));
var inst_34672 = chs__$1.call(null,inst_34663);
var inst_34673 = done.call(null,inst_34663);
var inst_34674 = cljs.core.async.take_BANG_.call(null,inst_34672,inst_34673);
var state_34699__$1 = state_34699;
var statearr_34713_34738 = state_34699__$1;
(statearr_34713_34738[(2)] = inst_34674);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34699__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (9))){
var inst_34663 = (state_34699[(7)]);
var inst_34676 = (state_34699[(2)]);
var inst_34677 = (inst_34663 + (1));
var inst_34663__$1 = inst_34677;
var state_34699__$1 = (function (){var statearr_34714 = state_34699;
(statearr_34714[(7)] = inst_34663__$1);

(statearr_34714[(10)] = inst_34676);

return statearr_34714;
})();
var statearr_34715_34739 = state_34699__$1;
(statearr_34715_34739[(2)] = null);

(statearr_34715_34739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (5))){
var inst_34683 = (state_34699[(2)]);
var state_34699__$1 = (function (){var statearr_34716 = state_34699;
(statearr_34716[(11)] = inst_34683);

return statearr_34716;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34699__$1,(12),dchan);
} else {
if((state_val_34700 === (14))){
var inst_34685 = (state_34699[(8)]);
var inst_34690 = cljs.core.apply.call(null,f,inst_34685);
var state_34699__$1 = state_34699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34699__$1,(16),out,inst_34690);
} else {
if((state_val_34700 === (16))){
var inst_34692 = (state_34699[(2)]);
var state_34699__$1 = (function (){var statearr_34717 = state_34699;
(statearr_34717[(12)] = inst_34692);

return statearr_34717;
})();
var statearr_34718_34740 = state_34699__$1;
(statearr_34718_34740[(2)] = null);

(statearr_34718_34740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (10))){
var inst_34667 = (state_34699[(2)]);
var inst_34668 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34699__$1 = (function (){var statearr_34719 = state_34699;
(statearr_34719[(13)] = inst_34667);

return statearr_34719;
})();
var statearr_34720_34741 = state_34699__$1;
(statearr_34720_34741[(2)] = inst_34668);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34699__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34700 === (8))){
var inst_34681 = (state_34699[(2)]);
var state_34699__$1 = state_34699;
var statearr_34721_34742 = state_34699__$1;
(statearr_34721_34742[(2)] = inst_34681);

(statearr_34721_34742[(1)] = (5));


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
});})(c__31524__auto___34727,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31357__auto__,c__31524__auto___34727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31358__auto__ = null;
var cljs$core$async$state_machine__31358__auto____0 = (function (){
var statearr_34722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34722[(0)] = cljs$core$async$state_machine__31358__auto__);

(statearr_34722[(1)] = (1));

return statearr_34722;
});
var cljs$core$async$state_machine__31358__auto____1 = (function (state_34699){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_34699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e34723){if((e34723 instanceof Object)){
var ex__31361__auto__ = e34723;
var statearr_34724_34743 = state_34699;
(statearr_34724_34743[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34744 = state_34699;
state_34699 = G__34744;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$state_machine__31358__auto__ = function(state_34699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31358__auto____1.call(this,state_34699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31358__auto____0;
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31358__auto____1;
return cljs$core$async$state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___34727,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31526__auto__ = (function (){var statearr_34725 = f__31525__auto__.call(null);
(statearr_34725[(6)] = c__31524__auto___34727);

return statearr_34725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___34727,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34747 = arguments.length;
switch (G__34747) {
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
var c__31524__auto___34801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___34801,out){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___34801,out){
return (function (state_34779){
var state_val_34780 = (state_34779[(1)]);
if((state_val_34780 === (7))){
var inst_34758 = (state_34779[(7)]);
var inst_34759 = (state_34779[(8)]);
var inst_34758__$1 = (state_34779[(2)]);
var inst_34759__$1 = cljs.core.nth.call(null,inst_34758__$1,(0),null);
var inst_34760 = cljs.core.nth.call(null,inst_34758__$1,(1),null);
var inst_34761 = (inst_34759__$1 == null);
var state_34779__$1 = (function (){var statearr_34781 = state_34779;
(statearr_34781[(9)] = inst_34760);

(statearr_34781[(7)] = inst_34758__$1);

(statearr_34781[(8)] = inst_34759__$1);

return statearr_34781;
})();
if(cljs.core.truth_(inst_34761)){
var statearr_34782_34802 = state_34779__$1;
(statearr_34782_34802[(1)] = (8));

} else {
var statearr_34783_34803 = state_34779__$1;
(statearr_34783_34803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (1))){
var inst_34748 = cljs.core.vec.call(null,chs);
var inst_34749 = inst_34748;
var state_34779__$1 = (function (){var statearr_34784 = state_34779;
(statearr_34784[(10)] = inst_34749);

return statearr_34784;
})();
var statearr_34785_34804 = state_34779__$1;
(statearr_34785_34804[(2)] = null);

(statearr_34785_34804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (4))){
var inst_34749 = (state_34779[(10)]);
var state_34779__$1 = state_34779;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34779__$1,(7),inst_34749);
} else {
if((state_val_34780 === (6))){
var inst_34775 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34786_34805 = state_34779__$1;
(statearr_34786_34805[(2)] = inst_34775);

(statearr_34786_34805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (3))){
var inst_34777 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34779__$1,inst_34777);
} else {
if((state_val_34780 === (2))){
var inst_34749 = (state_34779[(10)]);
var inst_34751 = cljs.core.count.call(null,inst_34749);
var inst_34752 = (inst_34751 > (0));
var state_34779__$1 = state_34779;
if(cljs.core.truth_(inst_34752)){
var statearr_34788_34806 = state_34779__$1;
(statearr_34788_34806[(1)] = (4));

} else {
var statearr_34789_34807 = state_34779__$1;
(statearr_34789_34807[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (11))){
var inst_34749 = (state_34779[(10)]);
var inst_34768 = (state_34779[(2)]);
var tmp34787 = inst_34749;
var inst_34749__$1 = tmp34787;
var state_34779__$1 = (function (){var statearr_34790 = state_34779;
(statearr_34790[(11)] = inst_34768);

(statearr_34790[(10)] = inst_34749__$1);

return statearr_34790;
})();
var statearr_34791_34808 = state_34779__$1;
(statearr_34791_34808[(2)] = null);

(statearr_34791_34808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (9))){
var inst_34759 = (state_34779[(8)]);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34779__$1,(11),out,inst_34759);
} else {
if((state_val_34780 === (5))){
var inst_34773 = cljs.core.async.close_BANG_.call(null,out);
var state_34779__$1 = state_34779;
var statearr_34792_34809 = state_34779__$1;
(statearr_34792_34809[(2)] = inst_34773);

(statearr_34792_34809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (10))){
var inst_34771 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34793_34810 = state_34779__$1;
(statearr_34793_34810[(2)] = inst_34771);

(statearr_34793_34810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (8))){
var inst_34760 = (state_34779[(9)]);
var inst_34758 = (state_34779[(7)]);
var inst_34759 = (state_34779[(8)]);
var inst_34749 = (state_34779[(10)]);
var inst_34763 = (function (){var cs = inst_34749;
var vec__34754 = inst_34758;
var v = inst_34759;
var c = inst_34760;
return ((function (cs,vec__34754,v,c,inst_34760,inst_34758,inst_34759,inst_34749,state_val_34780,c__31524__auto___34801,out){
return (function (p1__34745_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34745_SHARP_);
});
;})(cs,vec__34754,v,c,inst_34760,inst_34758,inst_34759,inst_34749,state_val_34780,c__31524__auto___34801,out))
})();
var inst_34764 = cljs.core.filterv.call(null,inst_34763,inst_34749);
var inst_34749__$1 = inst_34764;
var state_34779__$1 = (function (){var statearr_34794 = state_34779;
(statearr_34794[(10)] = inst_34749__$1);

return statearr_34794;
})();
var statearr_34795_34811 = state_34779__$1;
(statearr_34795_34811[(2)] = null);

(statearr_34795_34811[(1)] = (2));


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
});})(c__31524__auto___34801,out))
;
return ((function (switch__31357__auto__,c__31524__auto___34801,out){
return (function() {
var cljs$core$async$state_machine__31358__auto__ = null;
var cljs$core$async$state_machine__31358__auto____0 = (function (){
var statearr_34796 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34796[(0)] = cljs$core$async$state_machine__31358__auto__);

(statearr_34796[(1)] = (1));

return statearr_34796;
});
var cljs$core$async$state_machine__31358__auto____1 = (function (state_34779){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_34779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e34797){if((e34797 instanceof Object)){
var ex__31361__auto__ = e34797;
var statearr_34798_34812 = state_34779;
(statearr_34798_34812[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34813 = state_34779;
state_34779 = G__34813;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$state_machine__31358__auto__ = function(state_34779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31358__auto____1.call(this,state_34779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31358__auto____0;
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31358__auto____1;
return cljs$core$async$state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___34801,out))
})();
var state__31526__auto__ = (function (){var statearr_34799 = f__31525__auto__.call(null);
(statearr_34799[(6)] = c__31524__auto___34801);

return statearr_34799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___34801,out))
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
var G__34815 = arguments.length;
switch (G__34815) {
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
var c__31524__auto___34860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___34860,out){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___34860,out){
return (function (state_34839){
var state_val_34840 = (state_34839[(1)]);
if((state_val_34840 === (7))){
var inst_34821 = (state_34839[(7)]);
var inst_34821__$1 = (state_34839[(2)]);
var inst_34822 = (inst_34821__$1 == null);
var inst_34823 = cljs.core.not.call(null,inst_34822);
var state_34839__$1 = (function (){var statearr_34841 = state_34839;
(statearr_34841[(7)] = inst_34821__$1);

return statearr_34841;
})();
if(inst_34823){
var statearr_34842_34861 = state_34839__$1;
(statearr_34842_34861[(1)] = (8));

} else {
var statearr_34843_34862 = state_34839__$1;
(statearr_34843_34862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (1))){
var inst_34816 = (0);
var state_34839__$1 = (function (){var statearr_34844 = state_34839;
(statearr_34844[(8)] = inst_34816);

return statearr_34844;
})();
var statearr_34845_34863 = state_34839__$1;
(statearr_34845_34863[(2)] = null);

(statearr_34845_34863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (4))){
var state_34839__$1 = state_34839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34839__$1,(7),ch);
} else {
if((state_val_34840 === (6))){
var inst_34834 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_34846_34864 = state_34839__$1;
(statearr_34846_34864[(2)] = inst_34834);

(statearr_34846_34864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (3))){
var inst_34836 = (state_34839[(2)]);
var inst_34837 = cljs.core.async.close_BANG_.call(null,out);
var state_34839__$1 = (function (){var statearr_34847 = state_34839;
(statearr_34847[(9)] = inst_34836);

return statearr_34847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34839__$1,inst_34837);
} else {
if((state_val_34840 === (2))){
var inst_34816 = (state_34839[(8)]);
var inst_34818 = (inst_34816 < n);
var state_34839__$1 = state_34839;
if(cljs.core.truth_(inst_34818)){
var statearr_34848_34865 = state_34839__$1;
(statearr_34848_34865[(1)] = (4));

} else {
var statearr_34849_34866 = state_34839__$1;
(statearr_34849_34866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (11))){
var inst_34816 = (state_34839[(8)]);
var inst_34826 = (state_34839[(2)]);
var inst_34827 = (inst_34816 + (1));
var inst_34816__$1 = inst_34827;
var state_34839__$1 = (function (){var statearr_34850 = state_34839;
(statearr_34850[(10)] = inst_34826);

(statearr_34850[(8)] = inst_34816__$1);

return statearr_34850;
})();
var statearr_34851_34867 = state_34839__$1;
(statearr_34851_34867[(2)] = null);

(statearr_34851_34867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (9))){
var state_34839__$1 = state_34839;
var statearr_34852_34868 = state_34839__$1;
(statearr_34852_34868[(2)] = null);

(statearr_34852_34868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (5))){
var state_34839__$1 = state_34839;
var statearr_34853_34869 = state_34839__$1;
(statearr_34853_34869[(2)] = null);

(statearr_34853_34869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (10))){
var inst_34831 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_34854_34870 = state_34839__$1;
(statearr_34854_34870[(2)] = inst_34831);

(statearr_34854_34870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (8))){
var inst_34821 = (state_34839[(7)]);
var state_34839__$1 = state_34839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34839__$1,(11),out,inst_34821);
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
});})(c__31524__auto___34860,out))
;
return ((function (switch__31357__auto__,c__31524__auto___34860,out){
return (function() {
var cljs$core$async$state_machine__31358__auto__ = null;
var cljs$core$async$state_machine__31358__auto____0 = (function (){
var statearr_34855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34855[(0)] = cljs$core$async$state_machine__31358__auto__);

(statearr_34855[(1)] = (1));

return statearr_34855;
});
var cljs$core$async$state_machine__31358__auto____1 = (function (state_34839){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_34839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e34856){if((e34856 instanceof Object)){
var ex__31361__auto__ = e34856;
var statearr_34857_34871 = state_34839;
(statearr_34857_34871[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34872 = state_34839;
state_34839 = G__34872;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$state_machine__31358__auto__ = function(state_34839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31358__auto____1.call(this,state_34839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31358__auto____0;
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31358__auto____1;
return cljs$core$async$state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___34860,out))
})();
var state__31526__auto__ = (function (){var statearr_34858 = f__31525__auto__.call(null);
(statearr_34858[(6)] = c__31524__auto___34860);

return statearr_34858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___34860,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34874 = (function (f,ch,meta34875){
this.f = f;
this.ch = ch;
this.meta34875 = meta34875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34876,meta34875__$1){
var self__ = this;
var _34876__$1 = this;
return (new cljs.core.async.t_cljs$core$async34874(self__.f,self__.ch,meta34875__$1));
});

cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34876){
var self__ = this;
var _34876__$1 = this;
return self__.meta34875;
});

cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34877 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34877 = (function (f,ch,meta34875,_,fn1,meta34878){
this.f = f;
this.ch = ch;
this.meta34875 = meta34875;
this._ = _;
this.fn1 = fn1;
this.meta34878 = meta34878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34879,meta34878__$1){
var self__ = this;
var _34879__$1 = this;
return (new cljs.core.async.t_cljs$core$async34877(self__.f,self__.ch,self__.meta34875,self__._,self__.fn1,meta34878__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34879){
var self__ = this;
var _34879__$1 = this;
return self__.meta34878;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34873_SHARP_){
return f1.call(null,(((p1__34873_SHARP_ == null))?null:self__.f.call(null,p1__34873_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34877.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34875","meta34875",-707667394,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34874","cljs.core.async/t_cljs$core$async34874",26030203,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34878","meta34878",-299324894,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34877";

cljs.core.async.t_cljs$core$async34877.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async/t_cljs$core$async34877");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34877.
 */
cljs.core.async.__GT_t_cljs$core$async34877 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34877(f__$1,ch__$1,meta34875__$1,___$2,fn1__$1,meta34878){
return (new cljs.core.async.t_cljs$core$async34877(f__$1,ch__$1,meta34875__$1,___$2,fn1__$1,meta34878));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34877(self__.f,self__.ch,self__.meta34875,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17810__auto__ = ret;
if(cljs.core.truth_(and__17810__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__17810__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34875","meta34875",-707667394,null)], null);
});

cljs.core.async.t_cljs$core$async34874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34874";

cljs.core.async.t_cljs$core$async34874.cljs$lang$ctorPrWriter = (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async/t_cljs$core$async34874");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34874.
 */
cljs.core.async.__GT_t_cljs$core$async34874 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34874(f__$1,ch__$1,meta34875){
return (new cljs.core.async.t_cljs$core$async34874(f__$1,ch__$1,meta34875));
});

}

return (new cljs.core.async.t_cljs$core$async34874(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34880 = (function (f,ch,meta34881){
this.f = f;
this.ch = ch;
this.meta34881 = meta34881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34882,meta34881__$1){
var self__ = this;
var _34882__$1 = this;
return (new cljs.core.async.t_cljs$core$async34880(self__.f,self__.ch,meta34881__$1));
});

cljs.core.async.t_cljs$core$async34880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34882){
var self__ = this;
var _34882__$1 = this;
return self__.meta34881;
});

cljs.core.async.t_cljs$core$async34880.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34880.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34880.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34880.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34880.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34880.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34881","meta34881",1279836361,null)], null);
});

cljs.core.async.t_cljs$core$async34880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34880";

cljs.core.async.t_cljs$core$async34880.cljs$lang$ctorPrWriter = (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async/t_cljs$core$async34880");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34880.
 */
cljs.core.async.__GT_t_cljs$core$async34880 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34880(f__$1,ch__$1,meta34881){
return (new cljs.core.async.t_cljs$core$async34880(f__$1,ch__$1,meta34881));
});

}

return (new cljs.core.async.t_cljs$core$async34880(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34883 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34883 = (function (p,ch,meta34884){
this.p = p;
this.ch = ch;
this.meta34884 = meta34884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34885,meta34884__$1){
var self__ = this;
var _34885__$1 = this;
return (new cljs.core.async.t_cljs$core$async34883(self__.p,self__.ch,meta34884__$1));
});

cljs.core.async.t_cljs$core$async34883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34885){
var self__ = this;
var _34885__$1 = this;
return self__.meta34884;
});

cljs.core.async.t_cljs$core$async34883.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34883.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34883.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34883.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34883.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34883.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34883.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34884","meta34884",494292437,null)], null);
});

cljs.core.async.t_cljs$core$async34883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34883";

cljs.core.async.t_cljs$core$async34883.cljs$lang$ctorPrWriter = (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.core.async/t_cljs$core$async34883");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34883.
 */
cljs.core.async.__GT_t_cljs$core$async34883 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34883(p__$1,ch__$1,meta34884){
return (new cljs.core.async.t_cljs$core$async34883(p__$1,ch__$1,meta34884));
});

}

return (new cljs.core.async.t_cljs$core$async34883(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34887 = arguments.length;
switch (G__34887) {
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
var c__31524__auto___34927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___34927,out){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___34927,out){
return (function (state_34908){
var state_val_34909 = (state_34908[(1)]);
if((state_val_34909 === (7))){
var inst_34904 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34910_34928 = state_34908__$1;
(statearr_34910_34928[(2)] = inst_34904);

(statearr_34910_34928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (1))){
var state_34908__$1 = state_34908;
var statearr_34911_34929 = state_34908__$1;
(statearr_34911_34929[(2)] = null);

(statearr_34911_34929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (4))){
var inst_34890 = (state_34908[(7)]);
var inst_34890__$1 = (state_34908[(2)]);
var inst_34891 = (inst_34890__$1 == null);
var state_34908__$1 = (function (){var statearr_34912 = state_34908;
(statearr_34912[(7)] = inst_34890__$1);

return statearr_34912;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34913_34930 = state_34908__$1;
(statearr_34913_34930[(1)] = (5));

} else {
var statearr_34914_34931 = state_34908__$1;
(statearr_34914_34931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (6))){
var inst_34890 = (state_34908[(7)]);
var inst_34895 = p.call(null,inst_34890);
var state_34908__$1 = state_34908;
if(cljs.core.truth_(inst_34895)){
var statearr_34915_34932 = state_34908__$1;
(statearr_34915_34932[(1)] = (8));

} else {
var statearr_34916_34933 = state_34908__$1;
(statearr_34916_34933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (3))){
var inst_34906 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34908__$1,inst_34906);
} else {
if((state_val_34909 === (2))){
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34908__$1,(4),ch);
} else {
if((state_val_34909 === (11))){
var inst_34898 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34917_34934 = state_34908__$1;
(statearr_34917_34934[(2)] = inst_34898);

(statearr_34917_34934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (9))){
var state_34908__$1 = state_34908;
var statearr_34918_34935 = state_34908__$1;
(statearr_34918_34935[(2)] = null);

(statearr_34918_34935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (5))){
var inst_34893 = cljs.core.async.close_BANG_.call(null,out);
var state_34908__$1 = state_34908;
var statearr_34919_34936 = state_34908__$1;
(statearr_34919_34936[(2)] = inst_34893);

(statearr_34919_34936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (10))){
var inst_34901 = (state_34908[(2)]);
var state_34908__$1 = (function (){var statearr_34920 = state_34908;
(statearr_34920[(8)] = inst_34901);

return statearr_34920;
})();
var statearr_34921_34937 = state_34908__$1;
(statearr_34921_34937[(2)] = null);

(statearr_34921_34937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (8))){
var inst_34890 = (state_34908[(7)]);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34908__$1,(11),out,inst_34890);
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
});})(c__31524__auto___34927,out))
;
return ((function (switch__31357__auto__,c__31524__auto___34927,out){
return (function() {
var cljs$core$async$state_machine__31358__auto__ = null;
var cljs$core$async$state_machine__31358__auto____0 = (function (){
var statearr_34922 = [null,null,null,null,null,null,null,null,null];
(statearr_34922[(0)] = cljs$core$async$state_machine__31358__auto__);

(statearr_34922[(1)] = (1));

return statearr_34922;
});
var cljs$core$async$state_machine__31358__auto____1 = (function (state_34908){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_34908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e34923){if((e34923 instanceof Object)){
var ex__31361__auto__ = e34923;
var statearr_34924_34938 = state_34908;
(statearr_34924_34938[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34939 = state_34908;
state_34908 = G__34939;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$state_machine__31358__auto__ = function(state_34908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31358__auto____1.call(this,state_34908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31358__auto____0;
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31358__auto____1;
return cljs$core$async$state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___34927,out))
})();
var state__31526__auto__ = (function (){var statearr_34925 = f__31525__auto__.call(null);
(statearr_34925[(6)] = c__31524__auto___34927);

return statearr_34925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___34927,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34941 = arguments.length;
switch (G__34941) {
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
var c__31524__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto__){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto__){
return (function (state_35004){
var state_val_35005 = (state_35004[(1)]);
if((state_val_35005 === (7))){
var inst_35000 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35006_35044 = state_35004__$1;
(statearr_35006_35044[(2)] = inst_35000);

(statearr_35006_35044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (20))){
var inst_34970 = (state_35004[(7)]);
var inst_34981 = (state_35004[(2)]);
var inst_34982 = cljs.core.next.call(null,inst_34970);
var inst_34956 = inst_34982;
var inst_34957 = null;
var inst_34958 = (0);
var inst_34959 = (0);
var state_35004__$1 = (function (){var statearr_35007 = state_35004;
(statearr_35007[(8)] = inst_34958);

(statearr_35007[(9)] = inst_34959);

(statearr_35007[(10)] = inst_34956);

(statearr_35007[(11)] = inst_34957);

(statearr_35007[(12)] = inst_34981);

return statearr_35007;
})();
var statearr_35008_35045 = state_35004__$1;
(statearr_35008_35045[(2)] = null);

(statearr_35008_35045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (1))){
var state_35004__$1 = state_35004;
var statearr_35009_35046 = state_35004__$1;
(statearr_35009_35046[(2)] = null);

(statearr_35009_35046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (4))){
var inst_34945 = (state_35004[(13)]);
var inst_34945__$1 = (state_35004[(2)]);
var inst_34946 = (inst_34945__$1 == null);
var state_35004__$1 = (function (){var statearr_35010 = state_35004;
(statearr_35010[(13)] = inst_34945__$1);

return statearr_35010;
})();
if(cljs.core.truth_(inst_34946)){
var statearr_35011_35047 = state_35004__$1;
(statearr_35011_35047[(1)] = (5));

} else {
var statearr_35012_35048 = state_35004__$1;
(statearr_35012_35048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (15))){
var state_35004__$1 = state_35004;
var statearr_35016_35049 = state_35004__$1;
(statearr_35016_35049[(2)] = null);

(statearr_35016_35049[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (21))){
var state_35004__$1 = state_35004;
var statearr_35017_35050 = state_35004__$1;
(statearr_35017_35050[(2)] = null);

(statearr_35017_35050[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (13))){
var inst_34958 = (state_35004[(8)]);
var inst_34959 = (state_35004[(9)]);
var inst_34956 = (state_35004[(10)]);
var inst_34957 = (state_35004[(11)]);
var inst_34966 = (state_35004[(2)]);
var inst_34967 = (inst_34959 + (1));
var tmp35013 = inst_34958;
var tmp35014 = inst_34956;
var tmp35015 = inst_34957;
var inst_34956__$1 = tmp35014;
var inst_34957__$1 = tmp35015;
var inst_34958__$1 = tmp35013;
var inst_34959__$1 = inst_34967;
var state_35004__$1 = (function (){var statearr_35018 = state_35004;
(statearr_35018[(8)] = inst_34958__$1);

(statearr_35018[(9)] = inst_34959__$1);

(statearr_35018[(10)] = inst_34956__$1);

(statearr_35018[(11)] = inst_34957__$1);

(statearr_35018[(14)] = inst_34966);

return statearr_35018;
})();
var statearr_35019_35051 = state_35004__$1;
(statearr_35019_35051[(2)] = null);

(statearr_35019_35051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (22))){
var state_35004__$1 = state_35004;
var statearr_35020_35052 = state_35004__$1;
(statearr_35020_35052[(2)] = null);

(statearr_35020_35052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (6))){
var inst_34945 = (state_35004[(13)]);
var inst_34954 = f.call(null,inst_34945);
var inst_34955 = cljs.core.seq.call(null,inst_34954);
var inst_34956 = inst_34955;
var inst_34957 = null;
var inst_34958 = (0);
var inst_34959 = (0);
var state_35004__$1 = (function (){var statearr_35021 = state_35004;
(statearr_35021[(8)] = inst_34958);

(statearr_35021[(9)] = inst_34959);

(statearr_35021[(10)] = inst_34956);

(statearr_35021[(11)] = inst_34957);

return statearr_35021;
})();
var statearr_35022_35053 = state_35004__$1;
(statearr_35022_35053[(2)] = null);

(statearr_35022_35053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (17))){
var inst_34970 = (state_35004[(7)]);
var inst_34974 = cljs.core.chunk_first.call(null,inst_34970);
var inst_34975 = cljs.core.chunk_rest.call(null,inst_34970);
var inst_34976 = cljs.core.count.call(null,inst_34974);
var inst_34956 = inst_34975;
var inst_34957 = inst_34974;
var inst_34958 = inst_34976;
var inst_34959 = (0);
var state_35004__$1 = (function (){var statearr_35023 = state_35004;
(statearr_35023[(8)] = inst_34958);

(statearr_35023[(9)] = inst_34959);

(statearr_35023[(10)] = inst_34956);

(statearr_35023[(11)] = inst_34957);

return statearr_35023;
})();
var statearr_35024_35054 = state_35004__$1;
(statearr_35024_35054[(2)] = null);

(statearr_35024_35054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (3))){
var inst_35002 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35004__$1,inst_35002);
} else {
if((state_val_35005 === (12))){
var inst_34990 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35025_35055 = state_35004__$1;
(statearr_35025_35055[(2)] = inst_34990);

(statearr_35025_35055[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (2))){
var state_35004__$1 = state_35004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35004__$1,(4),in$);
} else {
if((state_val_35005 === (23))){
var inst_34998 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35026_35056 = state_35004__$1;
(statearr_35026_35056[(2)] = inst_34998);

(statearr_35026_35056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (19))){
var inst_34985 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35027_35057 = state_35004__$1;
(statearr_35027_35057[(2)] = inst_34985);

(statearr_35027_35057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (11))){
var inst_34956 = (state_35004[(10)]);
var inst_34970 = (state_35004[(7)]);
var inst_34970__$1 = cljs.core.seq.call(null,inst_34956);
var state_35004__$1 = (function (){var statearr_35028 = state_35004;
(statearr_35028[(7)] = inst_34970__$1);

return statearr_35028;
})();
if(inst_34970__$1){
var statearr_35029_35058 = state_35004__$1;
(statearr_35029_35058[(1)] = (14));

} else {
var statearr_35030_35059 = state_35004__$1;
(statearr_35030_35059[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (9))){
var inst_34992 = (state_35004[(2)]);
var inst_34993 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35004__$1 = (function (){var statearr_35031 = state_35004;
(statearr_35031[(15)] = inst_34992);

return statearr_35031;
})();
if(cljs.core.truth_(inst_34993)){
var statearr_35032_35060 = state_35004__$1;
(statearr_35032_35060[(1)] = (21));

} else {
var statearr_35033_35061 = state_35004__$1;
(statearr_35033_35061[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (5))){
var inst_34948 = cljs.core.async.close_BANG_.call(null,out);
var state_35004__$1 = state_35004;
var statearr_35034_35062 = state_35004__$1;
(statearr_35034_35062[(2)] = inst_34948);

(statearr_35034_35062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (14))){
var inst_34970 = (state_35004[(7)]);
var inst_34972 = cljs.core.chunked_seq_QMARK_.call(null,inst_34970);
var state_35004__$1 = state_35004;
if(inst_34972){
var statearr_35035_35063 = state_35004__$1;
(statearr_35035_35063[(1)] = (17));

} else {
var statearr_35036_35064 = state_35004__$1;
(statearr_35036_35064[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (16))){
var inst_34988 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35037_35065 = state_35004__$1;
(statearr_35037_35065[(2)] = inst_34988);

(statearr_35037_35065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (10))){
var inst_34959 = (state_35004[(9)]);
var inst_34957 = (state_35004[(11)]);
var inst_34964 = cljs.core._nth.call(null,inst_34957,inst_34959);
var state_35004__$1 = state_35004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35004__$1,(13),out,inst_34964);
} else {
if((state_val_35005 === (18))){
var inst_34970 = (state_35004[(7)]);
var inst_34979 = cljs.core.first.call(null,inst_34970);
var state_35004__$1 = state_35004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35004__$1,(20),out,inst_34979);
} else {
if((state_val_35005 === (8))){
var inst_34958 = (state_35004[(8)]);
var inst_34959 = (state_35004[(9)]);
var inst_34961 = (inst_34959 < inst_34958);
var inst_34962 = inst_34961;
var state_35004__$1 = state_35004;
if(cljs.core.truth_(inst_34962)){
var statearr_35038_35066 = state_35004__$1;
(statearr_35038_35066[(1)] = (10));

} else {
var statearr_35039_35067 = state_35004__$1;
(statearr_35039_35067[(1)] = (11));

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
});})(c__31524__auto__))
;
return ((function (switch__31357__auto__,c__31524__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31358__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31358__auto____0 = (function (){
var statearr_35040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35040[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31358__auto__);

(statearr_35040[(1)] = (1));

return statearr_35040;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31358__auto____1 = (function (state_35004){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_35004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e35041){if((e35041 instanceof Object)){
var ex__31361__auto__ = e35041;
var statearr_35042_35068 = state_35004;
(statearr_35042_35068[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35069 = state_35004;
state_35004 = G__35069;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31358__auto__ = function(state_35004){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31358__auto____1.call(this,state_35004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31358__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31358__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto__))
})();
var state__31526__auto__ = (function (){var statearr_35043 = f__31525__auto__.call(null);
(statearr_35043[(6)] = c__31524__auto__);

return statearr_35043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto__))
);

return c__31524__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35071 = arguments.length;
switch (G__35071) {
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
var G__35074 = arguments.length;
switch (G__35074) {
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
var G__35077 = arguments.length;
switch (G__35077) {
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
var c__31524__auto___35124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___35124,out){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___35124,out){
return (function (state_35101){
var state_val_35102 = (state_35101[(1)]);
if((state_val_35102 === (7))){
var inst_35096 = (state_35101[(2)]);
var state_35101__$1 = state_35101;
var statearr_35103_35125 = state_35101__$1;
(statearr_35103_35125[(2)] = inst_35096);

(statearr_35103_35125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35102 === (1))){
var inst_35078 = null;
var state_35101__$1 = (function (){var statearr_35104 = state_35101;
(statearr_35104[(7)] = inst_35078);

return statearr_35104;
})();
var statearr_35105_35126 = state_35101__$1;
(statearr_35105_35126[(2)] = null);

(statearr_35105_35126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35102 === (4))){
var inst_35081 = (state_35101[(8)]);
var inst_35081__$1 = (state_35101[(2)]);
var inst_35082 = (inst_35081__$1 == null);
var inst_35083 = cljs.core.not.call(null,inst_35082);
var state_35101__$1 = (function (){var statearr_35106 = state_35101;
(statearr_35106[(8)] = inst_35081__$1);

return statearr_35106;
})();
if(inst_35083){
var statearr_35107_35127 = state_35101__$1;
(statearr_35107_35127[(1)] = (5));

} else {
var statearr_35108_35128 = state_35101__$1;
(statearr_35108_35128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35102 === (6))){
var state_35101__$1 = state_35101;
var statearr_35109_35129 = state_35101__$1;
(statearr_35109_35129[(2)] = null);

(statearr_35109_35129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35102 === (3))){
var inst_35098 = (state_35101[(2)]);
var inst_35099 = cljs.core.async.close_BANG_.call(null,out);
var state_35101__$1 = (function (){var statearr_35110 = state_35101;
(statearr_35110[(9)] = inst_35098);

return statearr_35110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35101__$1,inst_35099);
} else {
if((state_val_35102 === (2))){
var state_35101__$1 = state_35101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35101__$1,(4),ch);
} else {
if((state_val_35102 === (11))){
var inst_35081 = (state_35101[(8)]);
var inst_35090 = (state_35101[(2)]);
var inst_35078 = inst_35081;
var state_35101__$1 = (function (){var statearr_35111 = state_35101;
(statearr_35111[(10)] = inst_35090);

(statearr_35111[(7)] = inst_35078);

return statearr_35111;
})();
var statearr_35112_35130 = state_35101__$1;
(statearr_35112_35130[(2)] = null);

(statearr_35112_35130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35102 === (9))){
var inst_35081 = (state_35101[(8)]);
var state_35101__$1 = state_35101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35101__$1,(11),out,inst_35081);
} else {
if((state_val_35102 === (5))){
var inst_35081 = (state_35101[(8)]);
var inst_35078 = (state_35101[(7)]);
var inst_35085 = cljs.core._EQ_.call(null,inst_35081,inst_35078);
var state_35101__$1 = state_35101;
if(inst_35085){
var statearr_35114_35131 = state_35101__$1;
(statearr_35114_35131[(1)] = (8));

} else {
var statearr_35115_35132 = state_35101__$1;
(statearr_35115_35132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35102 === (10))){
var inst_35093 = (state_35101[(2)]);
var state_35101__$1 = state_35101;
var statearr_35116_35133 = state_35101__$1;
(statearr_35116_35133[(2)] = inst_35093);

(statearr_35116_35133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35102 === (8))){
var inst_35078 = (state_35101[(7)]);
var tmp35113 = inst_35078;
var inst_35078__$1 = tmp35113;
var state_35101__$1 = (function (){var statearr_35117 = state_35101;
(statearr_35117[(7)] = inst_35078__$1);

return statearr_35117;
})();
var statearr_35118_35134 = state_35101__$1;
(statearr_35118_35134[(2)] = null);

(statearr_35118_35134[(1)] = (2));


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
});})(c__31524__auto___35124,out))
;
return ((function (switch__31357__auto__,c__31524__auto___35124,out){
return (function() {
var cljs$core$async$state_machine__31358__auto__ = null;
var cljs$core$async$state_machine__31358__auto____0 = (function (){
var statearr_35119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35119[(0)] = cljs$core$async$state_machine__31358__auto__);

(statearr_35119[(1)] = (1));

return statearr_35119;
});
var cljs$core$async$state_machine__31358__auto____1 = (function (state_35101){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_35101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e35120){if((e35120 instanceof Object)){
var ex__31361__auto__ = e35120;
var statearr_35121_35135 = state_35101;
(statearr_35121_35135[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35136 = state_35101;
state_35101 = G__35136;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$state_machine__31358__auto__ = function(state_35101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31358__auto____1.call(this,state_35101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31358__auto____0;
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31358__auto____1;
return cljs$core$async$state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___35124,out))
})();
var state__31526__auto__ = (function (){var statearr_35122 = f__31525__auto__.call(null);
(statearr_35122[(6)] = c__31524__auto___35124);

return statearr_35122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___35124,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35138 = arguments.length;
switch (G__35138) {
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
var c__31524__auto___35204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___35204,out){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___35204,out){
return (function (state_35176){
var state_val_35177 = (state_35176[(1)]);
if((state_val_35177 === (7))){
var inst_35172 = (state_35176[(2)]);
var state_35176__$1 = state_35176;
var statearr_35178_35205 = state_35176__$1;
(statearr_35178_35205[(2)] = inst_35172);

(statearr_35178_35205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (1))){
var inst_35139 = (new Array(n));
var inst_35140 = inst_35139;
var inst_35141 = (0);
var state_35176__$1 = (function (){var statearr_35179 = state_35176;
(statearr_35179[(7)] = inst_35140);

(statearr_35179[(8)] = inst_35141);

return statearr_35179;
})();
var statearr_35180_35206 = state_35176__$1;
(statearr_35180_35206[(2)] = null);

(statearr_35180_35206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (4))){
var inst_35144 = (state_35176[(9)]);
var inst_35144__$1 = (state_35176[(2)]);
var inst_35145 = (inst_35144__$1 == null);
var inst_35146 = cljs.core.not.call(null,inst_35145);
var state_35176__$1 = (function (){var statearr_35181 = state_35176;
(statearr_35181[(9)] = inst_35144__$1);

return statearr_35181;
})();
if(inst_35146){
var statearr_35182_35207 = state_35176__$1;
(statearr_35182_35207[(1)] = (5));

} else {
var statearr_35183_35208 = state_35176__$1;
(statearr_35183_35208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (15))){
var inst_35166 = (state_35176[(2)]);
var state_35176__$1 = state_35176;
var statearr_35184_35209 = state_35176__$1;
(statearr_35184_35209[(2)] = inst_35166);

(statearr_35184_35209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (13))){
var state_35176__$1 = state_35176;
var statearr_35185_35210 = state_35176__$1;
(statearr_35185_35210[(2)] = null);

(statearr_35185_35210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (6))){
var inst_35141 = (state_35176[(8)]);
var inst_35162 = (inst_35141 > (0));
var state_35176__$1 = state_35176;
if(cljs.core.truth_(inst_35162)){
var statearr_35186_35211 = state_35176__$1;
(statearr_35186_35211[(1)] = (12));

} else {
var statearr_35187_35212 = state_35176__$1;
(statearr_35187_35212[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (3))){
var inst_35174 = (state_35176[(2)]);
var state_35176__$1 = state_35176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35176__$1,inst_35174);
} else {
if((state_val_35177 === (12))){
var inst_35140 = (state_35176[(7)]);
var inst_35164 = cljs.core.vec.call(null,inst_35140);
var state_35176__$1 = state_35176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35176__$1,(15),out,inst_35164);
} else {
if((state_val_35177 === (2))){
var state_35176__$1 = state_35176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35176__$1,(4),ch);
} else {
if((state_val_35177 === (11))){
var inst_35156 = (state_35176[(2)]);
var inst_35157 = (new Array(n));
var inst_35140 = inst_35157;
var inst_35141 = (0);
var state_35176__$1 = (function (){var statearr_35188 = state_35176;
(statearr_35188[(7)] = inst_35140);

(statearr_35188[(10)] = inst_35156);

(statearr_35188[(8)] = inst_35141);

return statearr_35188;
})();
var statearr_35189_35213 = state_35176__$1;
(statearr_35189_35213[(2)] = null);

(statearr_35189_35213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (9))){
var inst_35140 = (state_35176[(7)]);
var inst_35154 = cljs.core.vec.call(null,inst_35140);
var state_35176__$1 = state_35176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35176__$1,(11),out,inst_35154);
} else {
if((state_val_35177 === (5))){
var inst_35149 = (state_35176[(11)]);
var inst_35144 = (state_35176[(9)]);
var inst_35140 = (state_35176[(7)]);
var inst_35141 = (state_35176[(8)]);
var inst_35148 = (inst_35140[inst_35141] = inst_35144);
var inst_35149__$1 = (inst_35141 + (1));
var inst_35150 = (inst_35149__$1 < n);
var state_35176__$1 = (function (){var statearr_35190 = state_35176;
(statearr_35190[(11)] = inst_35149__$1);

(statearr_35190[(12)] = inst_35148);

return statearr_35190;
})();
if(cljs.core.truth_(inst_35150)){
var statearr_35191_35214 = state_35176__$1;
(statearr_35191_35214[(1)] = (8));

} else {
var statearr_35192_35215 = state_35176__$1;
(statearr_35192_35215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (14))){
var inst_35169 = (state_35176[(2)]);
var inst_35170 = cljs.core.async.close_BANG_.call(null,out);
var state_35176__$1 = (function (){var statearr_35194 = state_35176;
(statearr_35194[(13)] = inst_35169);

return statearr_35194;
})();
var statearr_35195_35216 = state_35176__$1;
(statearr_35195_35216[(2)] = inst_35170);

(statearr_35195_35216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (10))){
var inst_35160 = (state_35176[(2)]);
var state_35176__$1 = state_35176;
var statearr_35196_35217 = state_35176__$1;
(statearr_35196_35217[(2)] = inst_35160);

(statearr_35196_35217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (8))){
var inst_35149 = (state_35176[(11)]);
var inst_35140 = (state_35176[(7)]);
var tmp35193 = inst_35140;
var inst_35140__$1 = tmp35193;
var inst_35141 = inst_35149;
var state_35176__$1 = (function (){var statearr_35197 = state_35176;
(statearr_35197[(7)] = inst_35140__$1);

(statearr_35197[(8)] = inst_35141);

return statearr_35197;
})();
var statearr_35198_35218 = state_35176__$1;
(statearr_35198_35218[(2)] = null);

(statearr_35198_35218[(1)] = (2));


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
});})(c__31524__auto___35204,out))
;
return ((function (switch__31357__auto__,c__31524__auto___35204,out){
return (function() {
var cljs$core$async$state_machine__31358__auto__ = null;
var cljs$core$async$state_machine__31358__auto____0 = (function (){
var statearr_35199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35199[(0)] = cljs$core$async$state_machine__31358__auto__);

(statearr_35199[(1)] = (1));

return statearr_35199;
});
var cljs$core$async$state_machine__31358__auto____1 = (function (state_35176){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_35176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e35200){if((e35200 instanceof Object)){
var ex__31361__auto__ = e35200;
var statearr_35201_35219 = state_35176;
(statearr_35201_35219[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35220 = state_35176;
state_35176 = G__35220;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$state_machine__31358__auto__ = function(state_35176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31358__auto____1.call(this,state_35176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31358__auto____0;
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31358__auto____1;
return cljs$core$async$state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___35204,out))
})();
var state__31526__auto__ = (function (){var statearr_35202 = f__31525__auto__.call(null);
(statearr_35202[(6)] = c__31524__auto___35204);

return statearr_35202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___35204,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35222 = arguments.length;
switch (G__35222) {
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
var c__31524__auto___35292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto___35292,out){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto___35292,out){
return (function (state_35264){
var state_val_35265 = (state_35264[(1)]);
if((state_val_35265 === (7))){
var inst_35260 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35266_35293 = state_35264__$1;
(statearr_35266_35293[(2)] = inst_35260);

(statearr_35266_35293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (1))){
var inst_35223 = [];
var inst_35224 = inst_35223;
var inst_35225 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35264__$1 = (function (){var statearr_35267 = state_35264;
(statearr_35267[(7)] = inst_35224);

(statearr_35267[(8)] = inst_35225);

return statearr_35267;
})();
var statearr_35268_35294 = state_35264__$1;
(statearr_35268_35294[(2)] = null);

(statearr_35268_35294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (4))){
var inst_35228 = (state_35264[(9)]);
var inst_35228__$1 = (state_35264[(2)]);
var inst_35229 = (inst_35228__$1 == null);
var inst_35230 = cljs.core.not.call(null,inst_35229);
var state_35264__$1 = (function (){var statearr_35269 = state_35264;
(statearr_35269[(9)] = inst_35228__$1);

return statearr_35269;
})();
if(inst_35230){
var statearr_35270_35295 = state_35264__$1;
(statearr_35270_35295[(1)] = (5));

} else {
var statearr_35271_35296 = state_35264__$1;
(statearr_35271_35296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (15))){
var inst_35254 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35272_35297 = state_35264__$1;
(statearr_35272_35297[(2)] = inst_35254);

(statearr_35272_35297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (13))){
var state_35264__$1 = state_35264;
var statearr_35273_35298 = state_35264__$1;
(statearr_35273_35298[(2)] = null);

(statearr_35273_35298[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (6))){
var inst_35224 = (state_35264[(7)]);
var inst_35249 = inst_35224.length;
var inst_35250 = (inst_35249 > (0));
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35250)){
var statearr_35274_35299 = state_35264__$1;
(statearr_35274_35299[(1)] = (12));

} else {
var statearr_35275_35300 = state_35264__$1;
(statearr_35275_35300[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (3))){
var inst_35262 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35264__$1,inst_35262);
} else {
if((state_val_35265 === (12))){
var inst_35224 = (state_35264[(7)]);
var inst_35252 = cljs.core.vec.call(null,inst_35224);
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35264__$1,(15),out,inst_35252);
} else {
if((state_val_35265 === (2))){
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35264__$1,(4),ch);
} else {
if((state_val_35265 === (11))){
var inst_35232 = (state_35264[(10)]);
var inst_35228 = (state_35264[(9)]);
var inst_35242 = (state_35264[(2)]);
var inst_35243 = [];
var inst_35244 = inst_35243.push(inst_35228);
var inst_35224 = inst_35243;
var inst_35225 = inst_35232;
var state_35264__$1 = (function (){var statearr_35276 = state_35264;
(statearr_35276[(11)] = inst_35242);

(statearr_35276[(7)] = inst_35224);

(statearr_35276[(8)] = inst_35225);

(statearr_35276[(12)] = inst_35244);

return statearr_35276;
})();
var statearr_35277_35301 = state_35264__$1;
(statearr_35277_35301[(2)] = null);

(statearr_35277_35301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (9))){
var inst_35224 = (state_35264[(7)]);
var inst_35240 = cljs.core.vec.call(null,inst_35224);
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35264__$1,(11),out,inst_35240);
} else {
if((state_val_35265 === (5))){
var inst_35232 = (state_35264[(10)]);
var inst_35225 = (state_35264[(8)]);
var inst_35228 = (state_35264[(9)]);
var inst_35232__$1 = f.call(null,inst_35228);
var inst_35233 = cljs.core._EQ_.call(null,inst_35232__$1,inst_35225);
var inst_35234 = cljs.core.keyword_identical_QMARK_.call(null,inst_35225,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35235 = ((inst_35233) || (inst_35234));
var state_35264__$1 = (function (){var statearr_35278 = state_35264;
(statearr_35278[(10)] = inst_35232__$1);

return statearr_35278;
})();
if(cljs.core.truth_(inst_35235)){
var statearr_35279_35302 = state_35264__$1;
(statearr_35279_35302[(1)] = (8));

} else {
var statearr_35280_35303 = state_35264__$1;
(statearr_35280_35303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (14))){
var inst_35257 = (state_35264[(2)]);
var inst_35258 = cljs.core.async.close_BANG_.call(null,out);
var state_35264__$1 = (function (){var statearr_35282 = state_35264;
(statearr_35282[(13)] = inst_35257);

return statearr_35282;
})();
var statearr_35283_35304 = state_35264__$1;
(statearr_35283_35304[(2)] = inst_35258);

(statearr_35283_35304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (10))){
var inst_35247 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35284_35305 = state_35264__$1;
(statearr_35284_35305[(2)] = inst_35247);

(statearr_35284_35305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (8))){
var inst_35224 = (state_35264[(7)]);
var inst_35232 = (state_35264[(10)]);
var inst_35228 = (state_35264[(9)]);
var inst_35237 = inst_35224.push(inst_35228);
var tmp35281 = inst_35224;
var inst_35224__$1 = tmp35281;
var inst_35225 = inst_35232;
var state_35264__$1 = (function (){var statearr_35285 = state_35264;
(statearr_35285[(7)] = inst_35224__$1);

(statearr_35285[(14)] = inst_35237);

(statearr_35285[(8)] = inst_35225);

return statearr_35285;
})();
var statearr_35286_35306 = state_35264__$1;
(statearr_35286_35306[(2)] = null);

(statearr_35286_35306[(1)] = (2));


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
});})(c__31524__auto___35292,out))
;
return ((function (switch__31357__auto__,c__31524__auto___35292,out){
return (function() {
var cljs$core$async$state_machine__31358__auto__ = null;
var cljs$core$async$state_machine__31358__auto____0 = (function (){
var statearr_35287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35287[(0)] = cljs$core$async$state_machine__31358__auto__);

(statearr_35287[(1)] = (1));

return statearr_35287;
});
var cljs$core$async$state_machine__31358__auto____1 = (function (state_35264){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_35264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e35288){if((e35288 instanceof Object)){
var ex__31361__auto__ = e35288;
var statearr_35289_35307 = state_35264;
(statearr_35289_35307[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35308 = state_35264;
state_35264 = G__35308;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
cljs$core$async$state_machine__31358__auto__ = function(state_35264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31358__auto____1.call(this,state_35264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31358__auto____0;
cljs$core$async$state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31358__auto____1;
return cljs$core$async$state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto___35292,out))
})();
var state__31526__auto__ = (function (){var statearr_35290 = f__31525__auto__.call(null);
(statearr_35290[(6)] = c__31524__auto___35292);

return statearr_35290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto___35292,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
