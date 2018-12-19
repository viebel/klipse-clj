// Compiled by ClojureScript 1.10.492 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22544 = arguments.length;
switch (G__22544) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22545 = (function (f,blockable,meta22546){
this.f = f;
this.blockable = blockable;
this.meta22546 = meta22546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22547,meta22546__$1){
var self__ = this;
var _22547__$1 = this;
return (new cljs.core.async.t_cljs$core$async22545(self__.f,self__.blockable,meta22546__$1));
});

cljs.core.async.t_cljs$core$async22545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22547){
var self__ = this;
var _22547__$1 = this;
return self__.meta22546;
});

cljs.core.async.t_cljs$core$async22545.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22546","meta22546",-1313910158,null)], null);
});

cljs.core.async.t_cljs$core$async22545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22545";

cljs.core.async.t_cljs$core$async22545.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t_cljs$core$async22545");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22545.
 */
cljs.core.async.__GT_t_cljs$core$async22545 = (function cljs$core$async$__GT_t_cljs$core$async22545(f__$1,blockable__$1,meta22546){
return (new cljs.core.async.t_cljs$core$async22545(f__$1,blockable__$1,meta22546));
});

}

return (new cljs.core.async.t_cljs$core$async22545(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22551 = arguments.length;
switch (G__22551) {
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
var G__22554 = arguments.length;
switch (G__22554) {
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
var G__22557 = arguments.length;
switch (G__22557) {
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
var val_22559 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22559);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22559,ret){
return (function (){
return fn1.call(null,val_22559);
});})(val_22559,ret))
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
var G__22561 = arguments.length;
switch (G__22561) {
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
var n__4478__auto___22563 = n;
var x_22564 = (0);
while(true){
if((x_22564 < n__4478__auto___22563)){
(a[x_22564] = (0));

var G__22565 = (x_22564 + (1));
x_22564 = G__22565;
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

var G__22566 = (i + (1));
i = G__22566;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22567 = (function (flag,meta22568){
this.flag = flag;
this.meta22568 = meta22568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22569,meta22568__$1){
var self__ = this;
var _22569__$1 = this;
return (new cljs.core.async.t_cljs$core$async22567(self__.flag,meta22568__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22569){
var self__ = this;
var _22569__$1 = this;
return self__.meta22568;
});})(flag))
;

cljs.core.async.t_cljs$core$async22567.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22567.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22567.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22568","meta22568",1479462547,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22567";

cljs.core.async.t_cljs$core$async22567.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t_cljs$core$async22567");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22567.
 */
cljs.core.async.__GT_t_cljs$core$async22567 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22567(flag__$1,meta22568){
return (new cljs.core.async.t_cljs$core$async22567(flag__$1,meta22568));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22567(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22570 = (function (flag,cb,meta22571){
this.flag = flag;
this.cb = cb;
this.meta22571 = meta22571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22572,meta22571__$1){
var self__ = this;
var _22572__$1 = this;
return (new cljs.core.async.t_cljs$core$async22570(self__.flag,self__.cb,meta22571__$1));
});

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22572){
var self__ = this;
var _22572__$1 = this;
return self__.meta22571;
});

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22571","meta22571",-1783510994,null)], null);
});

cljs.core.async.t_cljs$core$async22570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22570";

cljs.core.async.t_cljs$core$async22570.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t_cljs$core$async22570");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22570.
 */
cljs.core.async.__GT_t_cljs$core$async22570 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22570(flag__$1,cb__$1,meta22571){
return (new cljs.core.async.t_cljs$core$async22570(flag__$1,cb__$1,meta22571));
});

}

return (new cljs.core.async.t_cljs$core$async22570(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22573_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22573_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22574_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22574_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4002__auto__ = wport;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22575 = (i + (1));
i = G__22575;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4002__auto__ = ret;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__3991__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3991__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3991__auto__;
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
var args__4607__auto__ = [];
var len__4601__auto___22581 = arguments.length;
var i__4602__auto___22582 = (0);
while(true){
if((i__4602__auto___22582 < len__4601__auto___22581)){
args__4607__auto__.push((arguments[i__4602__auto___22582]));

var G__22583 = (i__4602__auto___22582 + (1));
i__4602__auto___22582 = G__22583;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((1) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4608__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22578){
var map__22579 = p__22578;
var map__22579__$1 = (((((!((map__22579 == null))))?(((((map__22579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22579):map__22579);
var opts = map__22579__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22576){
var G__22577 = cljs.core.first.call(null,seq22576);
var seq22576__$1 = cljs.core.next.call(null,seq22576);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22577,seq22576__$1);
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
var G__22585 = arguments.length;
switch (G__22585) {
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
var c__20620__auto___22631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___22631){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___22631){
return (function (state_22609){
var state_val_22610 = (state_22609[(1)]);
if((state_val_22610 === (7))){
var inst_22605 = (state_22609[(2)]);
var state_22609__$1 = state_22609;
var statearr_22611_22632 = state_22609__$1;
(statearr_22611_22632[(2)] = inst_22605);

(statearr_22611_22632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22610 === (1))){
var state_22609__$1 = state_22609;
var statearr_22612_22633 = state_22609__$1;
(statearr_22612_22633[(2)] = null);

(statearr_22612_22633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22610 === (4))){
var inst_22588 = (state_22609[(7)]);
var inst_22588__$1 = (state_22609[(2)]);
var inst_22589 = (inst_22588__$1 == null);
var state_22609__$1 = (function (){var statearr_22613 = state_22609;
(statearr_22613[(7)] = inst_22588__$1);

return statearr_22613;
})();
if(cljs.core.truth_(inst_22589)){
var statearr_22614_22634 = state_22609__$1;
(statearr_22614_22634[(1)] = (5));

} else {
var statearr_22615_22635 = state_22609__$1;
(statearr_22615_22635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22610 === (13))){
var state_22609__$1 = state_22609;
var statearr_22616_22636 = state_22609__$1;
(statearr_22616_22636[(2)] = null);

(statearr_22616_22636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22610 === (6))){
var inst_22588 = (state_22609[(7)]);
var state_22609__$1 = state_22609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22609__$1,(11),to,inst_22588);
} else {
if((state_val_22610 === (3))){
var inst_22607 = (state_22609[(2)]);
var state_22609__$1 = state_22609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22609__$1,inst_22607);
} else {
if((state_val_22610 === (12))){
var state_22609__$1 = state_22609;
var statearr_22617_22637 = state_22609__$1;
(statearr_22617_22637[(2)] = null);

(statearr_22617_22637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22610 === (2))){
var state_22609__$1 = state_22609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22609__$1,(4),from);
} else {
if((state_val_22610 === (11))){
var inst_22598 = (state_22609[(2)]);
var state_22609__$1 = state_22609;
if(cljs.core.truth_(inst_22598)){
var statearr_22618_22638 = state_22609__$1;
(statearr_22618_22638[(1)] = (12));

} else {
var statearr_22619_22639 = state_22609__$1;
(statearr_22619_22639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22610 === (9))){
var state_22609__$1 = state_22609;
var statearr_22620_22640 = state_22609__$1;
(statearr_22620_22640[(2)] = null);

(statearr_22620_22640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22610 === (5))){
var state_22609__$1 = state_22609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22621_22641 = state_22609__$1;
(statearr_22621_22641[(1)] = (8));

} else {
var statearr_22622_22642 = state_22609__$1;
(statearr_22622_22642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22610 === (14))){
var inst_22603 = (state_22609[(2)]);
var state_22609__$1 = state_22609;
var statearr_22623_22643 = state_22609__$1;
(statearr_22623_22643[(2)] = inst_22603);

(statearr_22623_22643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22610 === (10))){
var inst_22595 = (state_22609[(2)]);
var state_22609__$1 = state_22609;
var statearr_22624_22644 = state_22609__$1;
(statearr_22624_22644[(2)] = inst_22595);

(statearr_22624_22644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22610 === (8))){
var inst_22592 = cljs.core.async.close_BANG_.call(null,to);
var state_22609__$1 = state_22609;
var statearr_22625_22645 = state_22609__$1;
(statearr_22625_22645[(2)] = inst_22592);

(statearr_22625_22645[(1)] = (10));


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
});})(c__20620__auto___22631))
;
return ((function (switch__20453__auto__,c__20620__auto___22631){
return (function() {
var cljs$core$async$state_machine__20454__auto__ = null;
var cljs$core$async$state_machine__20454__auto____0 = (function (){
var statearr_22626 = [null,null,null,null,null,null,null,null];
(statearr_22626[(0)] = cljs$core$async$state_machine__20454__auto__);

(statearr_22626[(1)] = (1));

return statearr_22626;
});
var cljs$core$async$state_machine__20454__auto____1 = (function (state_22609){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_22609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e22627){if((e22627 instanceof Object)){
var ex__20457__auto__ = e22627;
var statearr_22628_22646 = state_22609;
(statearr_22628_22646[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22647 = state_22609;
state_22609 = G__22647;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$state_machine__20454__auto__ = function(state_22609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20454__auto____1.call(this,state_22609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20454__auto____0;
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20454__auto____1;
return cljs$core$async$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___22631))
})();
var state__20622__auto__ = (function (){var statearr_22629 = f__20621__auto__.call(null);
(statearr_22629[(6)] = c__20620__auto___22631);

return statearr_22629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___22631))
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
return (function (p__22648){
var vec__22649 = p__22648;
var v = cljs.core.nth.call(null,vec__22649,(0),null);
var p = cljs.core.nth.call(null,vec__22649,(1),null);
var job = vec__22649;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20620__auto___22820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___22820,res,vec__22649,v,p,job,jobs,results){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___22820,res,vec__22649,v,p,job,jobs,results){
return (function (state_22656){
var state_val_22657 = (state_22656[(1)]);
if((state_val_22657 === (1))){
var state_22656__$1 = state_22656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22656__$1,(2),res,v);
} else {
if((state_val_22657 === (2))){
var inst_22653 = (state_22656[(2)]);
var inst_22654 = cljs.core.async.close_BANG_.call(null,res);
var state_22656__$1 = (function (){var statearr_22658 = state_22656;
(statearr_22658[(7)] = inst_22653);

return statearr_22658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22656__$1,inst_22654);
} else {
return null;
}
}
});})(c__20620__auto___22820,res,vec__22649,v,p,job,jobs,results))
;
return ((function (switch__20453__auto__,c__20620__auto___22820,res,vec__22649,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0 = (function (){
var statearr_22659 = [null,null,null,null,null,null,null,null];
(statearr_22659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__);

(statearr_22659[(1)] = (1));

return statearr_22659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1 = (function (state_22656){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_22656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e22660){if((e22660 instanceof Object)){
var ex__20457__auto__ = e22660;
var statearr_22661_22821 = state_22656;
(statearr_22661_22821[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22822 = state_22656;
state_22656 = G__22822;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__ = function(state_22656){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1.call(this,state_22656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___22820,res,vec__22649,v,p,job,jobs,results))
})();
var state__20622__auto__ = (function (){var statearr_22662 = f__20621__auto__.call(null);
(statearr_22662[(6)] = c__20620__auto___22820);

return statearr_22662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___22820,res,vec__22649,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22663){
var vec__22664 = p__22663;
var v = cljs.core.nth.call(null,vec__22664,(0),null);
var p = cljs.core.nth.call(null,vec__22664,(1),null);
var job = vec__22664;
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
var n__4478__auto___22823 = n;
var __22824 = (0);
while(true){
if((__22824 < n__4478__auto___22823)){
var G__22667_22825 = type;
var G__22667_22826__$1 = (((G__22667_22825 instanceof cljs.core.Keyword))?G__22667_22825.fqn:null);
switch (G__22667_22826__$1) {
case "compute":
var c__20620__auto___22828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22824,c__20620__auto___22828,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (__22824,c__20620__auto___22828,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async){
return (function (state_22680){
var state_val_22681 = (state_22680[(1)]);
if((state_val_22681 === (1))){
var state_22680__$1 = state_22680;
var statearr_22682_22829 = state_22680__$1;
(statearr_22682_22829[(2)] = null);

(statearr_22682_22829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (2))){
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22680__$1,(4),jobs);
} else {
if((state_val_22681 === (3))){
var inst_22678 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22680__$1,inst_22678);
} else {
if((state_val_22681 === (4))){
var inst_22670 = (state_22680[(2)]);
var inst_22671 = process.call(null,inst_22670);
var state_22680__$1 = state_22680;
if(cljs.core.truth_(inst_22671)){
var statearr_22683_22830 = state_22680__$1;
(statearr_22683_22830[(1)] = (5));

} else {
var statearr_22684_22831 = state_22680__$1;
(statearr_22684_22831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (5))){
var state_22680__$1 = state_22680;
var statearr_22685_22832 = state_22680__$1;
(statearr_22685_22832[(2)] = null);

(statearr_22685_22832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (6))){
var state_22680__$1 = state_22680;
var statearr_22686_22833 = state_22680__$1;
(statearr_22686_22833[(2)] = null);

(statearr_22686_22833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (7))){
var inst_22676 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
var statearr_22687_22834 = state_22680__$1;
(statearr_22687_22834[(2)] = inst_22676);

(statearr_22687_22834[(1)] = (3));


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
});})(__22824,c__20620__auto___22828,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async))
;
return ((function (__22824,switch__20453__auto__,c__20620__auto___22828,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0 = (function (){
var statearr_22688 = [null,null,null,null,null,null,null];
(statearr_22688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__);

(statearr_22688[(1)] = (1));

return statearr_22688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1 = (function (state_22680){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_22680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e22689){if((e22689 instanceof Object)){
var ex__20457__auto__ = e22689;
var statearr_22690_22835 = state_22680;
(statearr_22690_22835[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22836 = state_22680;
state_22680 = G__22836;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__ = function(state_22680){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1.call(this,state_22680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__;
})()
;})(__22824,switch__20453__auto__,c__20620__auto___22828,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async))
})();
var state__20622__auto__ = (function (){var statearr_22691 = f__20621__auto__.call(null);
(statearr_22691[(6)] = c__20620__auto___22828);

return statearr_22691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(__22824,c__20620__auto___22828,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async))
);


break;
case "async":
var c__20620__auto___22837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22824,c__20620__auto___22837,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (__22824,c__20620__auto___22837,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async){
return (function (state_22704){
var state_val_22705 = (state_22704[(1)]);
if((state_val_22705 === (1))){
var state_22704__$1 = state_22704;
var statearr_22706_22838 = state_22704__$1;
(statearr_22706_22838[(2)] = null);

(statearr_22706_22838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (2))){
var state_22704__$1 = state_22704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22704__$1,(4),jobs);
} else {
if((state_val_22705 === (3))){
var inst_22702 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22704__$1,inst_22702);
} else {
if((state_val_22705 === (4))){
var inst_22694 = (state_22704[(2)]);
var inst_22695 = async.call(null,inst_22694);
var state_22704__$1 = state_22704;
if(cljs.core.truth_(inst_22695)){
var statearr_22707_22839 = state_22704__$1;
(statearr_22707_22839[(1)] = (5));

} else {
var statearr_22708_22840 = state_22704__$1;
(statearr_22708_22840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (5))){
var state_22704__$1 = state_22704;
var statearr_22709_22841 = state_22704__$1;
(statearr_22709_22841[(2)] = null);

(statearr_22709_22841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (6))){
var state_22704__$1 = state_22704;
var statearr_22710_22842 = state_22704__$1;
(statearr_22710_22842[(2)] = null);

(statearr_22710_22842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22705 === (7))){
var inst_22700 = (state_22704[(2)]);
var state_22704__$1 = state_22704;
var statearr_22711_22843 = state_22704__$1;
(statearr_22711_22843[(2)] = inst_22700);

(statearr_22711_22843[(1)] = (3));


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
});})(__22824,c__20620__auto___22837,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async))
;
return ((function (__22824,switch__20453__auto__,c__20620__auto___22837,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0 = (function (){
var statearr_22712 = [null,null,null,null,null,null,null];
(statearr_22712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__);

(statearr_22712[(1)] = (1));

return statearr_22712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1 = (function (state_22704){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_22704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e22713){if((e22713 instanceof Object)){
var ex__20457__auto__ = e22713;
var statearr_22714_22844 = state_22704;
(statearr_22714_22844[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22845 = state_22704;
state_22704 = G__22845;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__ = function(state_22704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1.call(this,state_22704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__;
})()
;})(__22824,switch__20453__auto__,c__20620__auto___22837,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async))
})();
var state__20622__auto__ = (function (){var statearr_22715 = f__20621__auto__.call(null);
(statearr_22715[(6)] = c__20620__auto___22837);

return statearr_22715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(__22824,c__20620__auto___22837,G__22667_22825,G__22667_22826__$1,n__4478__auto___22823,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22667_22826__$1)].join('')));

}

var G__22846 = (__22824 + (1));
__22824 = G__22846;
continue;
} else {
}
break;
}

var c__20620__auto___22847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___22847,jobs,results,process,async){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___22847,jobs,results,process,async){
return (function (state_22737){
var state_val_22738 = (state_22737[(1)]);
if((state_val_22738 === (7))){
var inst_22733 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22739_22848 = state_22737__$1;
(statearr_22739_22848[(2)] = inst_22733);

(statearr_22739_22848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (1))){
var state_22737__$1 = state_22737;
var statearr_22740_22849 = state_22737__$1;
(statearr_22740_22849[(2)] = null);

(statearr_22740_22849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (4))){
var inst_22718 = (state_22737[(7)]);
var inst_22718__$1 = (state_22737[(2)]);
var inst_22719 = (inst_22718__$1 == null);
var state_22737__$1 = (function (){var statearr_22741 = state_22737;
(statearr_22741[(7)] = inst_22718__$1);

return statearr_22741;
})();
if(cljs.core.truth_(inst_22719)){
var statearr_22742_22850 = state_22737__$1;
(statearr_22742_22850[(1)] = (5));

} else {
var statearr_22743_22851 = state_22737__$1;
(statearr_22743_22851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (6))){
var inst_22718 = (state_22737[(7)]);
var inst_22723 = (state_22737[(8)]);
var inst_22723__$1 = cljs.core.async.chan.call(null,(1));
var inst_22724 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22725 = [inst_22718,inst_22723__$1];
var inst_22726 = (new cljs.core.PersistentVector(null,2,(5),inst_22724,inst_22725,null));
var state_22737__$1 = (function (){var statearr_22744 = state_22737;
(statearr_22744[(8)] = inst_22723__$1);

return statearr_22744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22737__$1,(8),jobs,inst_22726);
} else {
if((state_val_22738 === (3))){
var inst_22735 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22737__$1,inst_22735);
} else {
if((state_val_22738 === (2))){
var state_22737__$1 = state_22737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22737__$1,(4),from);
} else {
if((state_val_22738 === (9))){
var inst_22730 = (state_22737[(2)]);
var state_22737__$1 = (function (){var statearr_22745 = state_22737;
(statearr_22745[(9)] = inst_22730);

return statearr_22745;
})();
var statearr_22746_22852 = state_22737__$1;
(statearr_22746_22852[(2)] = null);

(statearr_22746_22852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (5))){
var inst_22721 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22737__$1 = state_22737;
var statearr_22747_22853 = state_22737__$1;
(statearr_22747_22853[(2)] = inst_22721);

(statearr_22747_22853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (8))){
var inst_22723 = (state_22737[(8)]);
var inst_22728 = (state_22737[(2)]);
var state_22737__$1 = (function (){var statearr_22748 = state_22737;
(statearr_22748[(10)] = inst_22728);

return statearr_22748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22737__$1,(9),results,inst_22723);
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
});})(c__20620__auto___22847,jobs,results,process,async))
;
return ((function (switch__20453__auto__,c__20620__auto___22847,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0 = (function (){
var statearr_22749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__);

(statearr_22749[(1)] = (1));

return statearr_22749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1 = (function (state_22737){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_22737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e22750){if((e22750 instanceof Object)){
var ex__20457__auto__ = e22750;
var statearr_22751_22854 = state_22737;
(statearr_22751_22854[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22855 = state_22737;
state_22737 = G__22855;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__ = function(state_22737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1.call(this,state_22737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___22847,jobs,results,process,async))
})();
var state__20622__auto__ = (function (){var statearr_22752 = f__20621__auto__.call(null);
(statearr_22752[(6)] = c__20620__auto___22847);

return statearr_22752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___22847,jobs,results,process,async))
);


var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__,jobs,results,process,async){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__,jobs,results,process,async){
return (function (state_22790){
var state_val_22791 = (state_22790[(1)]);
if((state_val_22791 === (7))){
var inst_22786 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22792_22856 = state_22790__$1;
(statearr_22792_22856[(2)] = inst_22786);

(statearr_22792_22856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (20))){
var state_22790__$1 = state_22790;
var statearr_22793_22857 = state_22790__$1;
(statearr_22793_22857[(2)] = null);

(statearr_22793_22857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (1))){
var state_22790__$1 = state_22790;
var statearr_22794_22858 = state_22790__$1;
(statearr_22794_22858[(2)] = null);

(statearr_22794_22858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (4))){
var inst_22755 = (state_22790[(7)]);
var inst_22755__$1 = (state_22790[(2)]);
var inst_22756 = (inst_22755__$1 == null);
var state_22790__$1 = (function (){var statearr_22795 = state_22790;
(statearr_22795[(7)] = inst_22755__$1);

return statearr_22795;
})();
if(cljs.core.truth_(inst_22756)){
var statearr_22796_22859 = state_22790__$1;
(statearr_22796_22859[(1)] = (5));

} else {
var statearr_22797_22860 = state_22790__$1;
(statearr_22797_22860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (15))){
var inst_22768 = (state_22790[(8)]);
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22790__$1,(18),to,inst_22768);
} else {
if((state_val_22791 === (21))){
var inst_22781 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22798_22861 = state_22790__$1;
(statearr_22798_22861[(2)] = inst_22781);

(statearr_22798_22861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (13))){
var inst_22783 = (state_22790[(2)]);
var state_22790__$1 = (function (){var statearr_22799 = state_22790;
(statearr_22799[(9)] = inst_22783);

return statearr_22799;
})();
var statearr_22800_22862 = state_22790__$1;
(statearr_22800_22862[(2)] = null);

(statearr_22800_22862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (6))){
var inst_22755 = (state_22790[(7)]);
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22790__$1,(11),inst_22755);
} else {
if((state_val_22791 === (17))){
var inst_22776 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
if(cljs.core.truth_(inst_22776)){
var statearr_22801_22863 = state_22790__$1;
(statearr_22801_22863[(1)] = (19));

} else {
var statearr_22802_22864 = state_22790__$1;
(statearr_22802_22864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (3))){
var inst_22788 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22790__$1,inst_22788);
} else {
if((state_val_22791 === (12))){
var inst_22765 = (state_22790[(10)]);
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22790__$1,(14),inst_22765);
} else {
if((state_val_22791 === (2))){
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22790__$1,(4),results);
} else {
if((state_val_22791 === (19))){
var state_22790__$1 = state_22790;
var statearr_22803_22865 = state_22790__$1;
(statearr_22803_22865[(2)] = null);

(statearr_22803_22865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (11))){
var inst_22765 = (state_22790[(2)]);
var state_22790__$1 = (function (){var statearr_22804 = state_22790;
(statearr_22804[(10)] = inst_22765);

return statearr_22804;
})();
var statearr_22805_22866 = state_22790__$1;
(statearr_22805_22866[(2)] = null);

(statearr_22805_22866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (9))){
var state_22790__$1 = state_22790;
var statearr_22806_22867 = state_22790__$1;
(statearr_22806_22867[(2)] = null);

(statearr_22806_22867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (5))){
var state_22790__$1 = state_22790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22807_22868 = state_22790__$1;
(statearr_22807_22868[(1)] = (8));

} else {
var statearr_22808_22869 = state_22790__$1;
(statearr_22808_22869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (14))){
var inst_22770 = (state_22790[(11)]);
var inst_22768 = (state_22790[(8)]);
var inst_22768__$1 = (state_22790[(2)]);
var inst_22769 = (inst_22768__$1 == null);
var inst_22770__$1 = cljs.core.not.call(null,inst_22769);
var state_22790__$1 = (function (){var statearr_22809 = state_22790;
(statearr_22809[(11)] = inst_22770__$1);

(statearr_22809[(8)] = inst_22768__$1);

return statearr_22809;
})();
if(inst_22770__$1){
var statearr_22810_22870 = state_22790__$1;
(statearr_22810_22870[(1)] = (15));

} else {
var statearr_22811_22871 = state_22790__$1;
(statearr_22811_22871[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (16))){
var inst_22770 = (state_22790[(11)]);
var state_22790__$1 = state_22790;
var statearr_22812_22872 = state_22790__$1;
(statearr_22812_22872[(2)] = inst_22770);

(statearr_22812_22872[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (10))){
var inst_22762 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22813_22873 = state_22790__$1;
(statearr_22813_22873[(2)] = inst_22762);

(statearr_22813_22873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (18))){
var inst_22773 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22814_22874 = state_22790__$1;
(statearr_22814_22874[(2)] = inst_22773);

(statearr_22814_22874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (8))){
var inst_22759 = cljs.core.async.close_BANG_.call(null,to);
var state_22790__$1 = state_22790;
var statearr_22815_22875 = state_22790__$1;
(statearr_22815_22875[(2)] = inst_22759);

(statearr_22815_22875[(1)] = (10));


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
});})(c__20620__auto__,jobs,results,process,async))
;
return ((function (switch__20453__auto__,c__20620__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0 = (function (){
var statearr_22816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__);

(statearr_22816[(1)] = (1));

return statearr_22816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1 = (function (state_22790){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_22790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e22817){if((e22817 instanceof Object)){
var ex__20457__auto__ = e22817;
var statearr_22818_22876 = state_22790;
(statearr_22818_22876[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22877 = state_22790;
state_22790 = G__22877;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__ = function(state_22790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1.call(this,state_22790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__,jobs,results,process,async))
})();
var state__20622__auto__ = (function (){var statearr_22819 = f__20621__auto__.call(null);
(statearr_22819[(6)] = c__20620__auto__);

return statearr_22819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__,jobs,results,process,async))
);

return c__20620__auto__;
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
var G__22879 = arguments.length;
switch (G__22879) {
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
var G__22882 = arguments.length;
switch (G__22882) {
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
var G__22885 = arguments.length;
switch (G__22885) {
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
var c__20620__auto___22934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___22934,tc,fc){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___22934,tc,fc){
return (function (state_22911){
var state_val_22912 = (state_22911[(1)]);
if((state_val_22912 === (7))){
var inst_22907 = (state_22911[(2)]);
var state_22911__$1 = state_22911;
var statearr_22913_22935 = state_22911__$1;
(statearr_22913_22935[(2)] = inst_22907);

(statearr_22913_22935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (1))){
var state_22911__$1 = state_22911;
var statearr_22914_22936 = state_22911__$1;
(statearr_22914_22936[(2)] = null);

(statearr_22914_22936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (4))){
var inst_22888 = (state_22911[(7)]);
var inst_22888__$1 = (state_22911[(2)]);
var inst_22889 = (inst_22888__$1 == null);
var state_22911__$1 = (function (){var statearr_22915 = state_22911;
(statearr_22915[(7)] = inst_22888__$1);

return statearr_22915;
})();
if(cljs.core.truth_(inst_22889)){
var statearr_22916_22937 = state_22911__$1;
(statearr_22916_22937[(1)] = (5));

} else {
var statearr_22917_22938 = state_22911__$1;
(statearr_22917_22938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (13))){
var state_22911__$1 = state_22911;
var statearr_22918_22939 = state_22911__$1;
(statearr_22918_22939[(2)] = null);

(statearr_22918_22939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (6))){
var inst_22888 = (state_22911[(7)]);
var inst_22894 = p.call(null,inst_22888);
var state_22911__$1 = state_22911;
if(cljs.core.truth_(inst_22894)){
var statearr_22919_22940 = state_22911__$1;
(statearr_22919_22940[(1)] = (9));

} else {
var statearr_22920_22941 = state_22911__$1;
(statearr_22920_22941[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (3))){
var inst_22909 = (state_22911[(2)]);
var state_22911__$1 = state_22911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22911__$1,inst_22909);
} else {
if((state_val_22912 === (12))){
var state_22911__$1 = state_22911;
var statearr_22921_22942 = state_22911__$1;
(statearr_22921_22942[(2)] = null);

(statearr_22921_22942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (2))){
var state_22911__$1 = state_22911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22911__$1,(4),ch);
} else {
if((state_val_22912 === (11))){
var inst_22888 = (state_22911[(7)]);
var inst_22898 = (state_22911[(2)]);
var state_22911__$1 = state_22911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22911__$1,(8),inst_22898,inst_22888);
} else {
if((state_val_22912 === (9))){
var state_22911__$1 = state_22911;
var statearr_22922_22943 = state_22911__$1;
(statearr_22922_22943[(2)] = tc);

(statearr_22922_22943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (5))){
var inst_22891 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22892 = cljs.core.async.close_BANG_.call(null,fc);
var state_22911__$1 = (function (){var statearr_22923 = state_22911;
(statearr_22923[(8)] = inst_22891);

return statearr_22923;
})();
var statearr_22924_22944 = state_22911__$1;
(statearr_22924_22944[(2)] = inst_22892);

(statearr_22924_22944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (14))){
var inst_22905 = (state_22911[(2)]);
var state_22911__$1 = state_22911;
var statearr_22925_22945 = state_22911__$1;
(statearr_22925_22945[(2)] = inst_22905);

(statearr_22925_22945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (10))){
var state_22911__$1 = state_22911;
var statearr_22926_22946 = state_22911__$1;
(statearr_22926_22946[(2)] = fc);

(statearr_22926_22946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (8))){
var inst_22900 = (state_22911[(2)]);
var state_22911__$1 = state_22911;
if(cljs.core.truth_(inst_22900)){
var statearr_22927_22947 = state_22911__$1;
(statearr_22927_22947[(1)] = (12));

} else {
var statearr_22928_22948 = state_22911__$1;
(statearr_22928_22948[(1)] = (13));

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
});})(c__20620__auto___22934,tc,fc))
;
return ((function (switch__20453__auto__,c__20620__auto___22934,tc,fc){
return (function() {
var cljs$core$async$state_machine__20454__auto__ = null;
var cljs$core$async$state_machine__20454__auto____0 = (function (){
var statearr_22929 = [null,null,null,null,null,null,null,null,null];
(statearr_22929[(0)] = cljs$core$async$state_machine__20454__auto__);

(statearr_22929[(1)] = (1));

return statearr_22929;
});
var cljs$core$async$state_machine__20454__auto____1 = (function (state_22911){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_22911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e22930){if((e22930 instanceof Object)){
var ex__20457__auto__ = e22930;
var statearr_22931_22949 = state_22911;
(statearr_22931_22949[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22950 = state_22911;
state_22911 = G__22950;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$state_machine__20454__auto__ = function(state_22911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20454__auto____1.call(this,state_22911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20454__auto____0;
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20454__auto____1;
return cljs$core$async$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___22934,tc,fc))
})();
var state__20622__auto__ = (function (){var statearr_22932 = f__20621__auto__.call(null);
(statearr_22932[(6)] = c__20620__auto___22934);

return statearr_22932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___22934,tc,fc))
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
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_22971){
var state_val_22972 = (state_22971[(1)]);
if((state_val_22972 === (7))){
var inst_22967 = (state_22971[(2)]);
var state_22971__$1 = state_22971;
var statearr_22973_22991 = state_22971__$1;
(statearr_22973_22991[(2)] = inst_22967);

(statearr_22973_22991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22972 === (1))){
var inst_22951 = init;
var state_22971__$1 = (function (){var statearr_22974 = state_22971;
(statearr_22974[(7)] = inst_22951);

return statearr_22974;
})();
var statearr_22975_22992 = state_22971__$1;
(statearr_22975_22992[(2)] = null);

(statearr_22975_22992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22972 === (4))){
var inst_22954 = (state_22971[(8)]);
var inst_22954__$1 = (state_22971[(2)]);
var inst_22955 = (inst_22954__$1 == null);
var state_22971__$1 = (function (){var statearr_22976 = state_22971;
(statearr_22976[(8)] = inst_22954__$1);

return statearr_22976;
})();
if(cljs.core.truth_(inst_22955)){
var statearr_22977_22993 = state_22971__$1;
(statearr_22977_22993[(1)] = (5));

} else {
var statearr_22978_22994 = state_22971__$1;
(statearr_22978_22994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22972 === (6))){
var inst_22954 = (state_22971[(8)]);
var inst_22951 = (state_22971[(7)]);
var inst_22958 = (state_22971[(9)]);
var inst_22958__$1 = f.call(null,inst_22951,inst_22954);
var inst_22959 = cljs.core.reduced_QMARK_.call(null,inst_22958__$1);
var state_22971__$1 = (function (){var statearr_22979 = state_22971;
(statearr_22979[(9)] = inst_22958__$1);

return statearr_22979;
})();
if(inst_22959){
var statearr_22980_22995 = state_22971__$1;
(statearr_22980_22995[(1)] = (8));

} else {
var statearr_22981_22996 = state_22971__$1;
(statearr_22981_22996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22972 === (3))){
var inst_22969 = (state_22971[(2)]);
var state_22971__$1 = state_22971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22971__$1,inst_22969);
} else {
if((state_val_22972 === (2))){
var state_22971__$1 = state_22971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22971__$1,(4),ch);
} else {
if((state_val_22972 === (9))){
var inst_22958 = (state_22971[(9)]);
var inst_22951 = inst_22958;
var state_22971__$1 = (function (){var statearr_22982 = state_22971;
(statearr_22982[(7)] = inst_22951);

return statearr_22982;
})();
var statearr_22983_22997 = state_22971__$1;
(statearr_22983_22997[(2)] = null);

(statearr_22983_22997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22972 === (5))){
var inst_22951 = (state_22971[(7)]);
var state_22971__$1 = state_22971;
var statearr_22984_22998 = state_22971__$1;
(statearr_22984_22998[(2)] = inst_22951);

(statearr_22984_22998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22972 === (10))){
var inst_22965 = (state_22971[(2)]);
var state_22971__$1 = state_22971;
var statearr_22985_22999 = state_22971__$1;
(statearr_22985_22999[(2)] = inst_22965);

(statearr_22985_22999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22972 === (8))){
var inst_22958 = (state_22971[(9)]);
var inst_22961 = cljs.core.deref.call(null,inst_22958);
var state_22971__$1 = state_22971;
var statearr_22986_23000 = state_22971__$1;
(statearr_22986_23000[(2)] = inst_22961);

(statearr_22986_23000[(1)] = (10));


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
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20454__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20454__auto____0 = (function (){
var statearr_22987 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22987[(0)] = cljs$core$async$reduce_$_state_machine__20454__auto__);

(statearr_22987[(1)] = (1));

return statearr_22987;
});
var cljs$core$async$reduce_$_state_machine__20454__auto____1 = (function (state_22971){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_22971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e22988){if((e22988 instanceof Object)){
var ex__20457__auto__ = e22988;
var statearr_22989_23001 = state_22971;
(statearr_22989_23001[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23002 = state_22971;
state_22971 = G__23002;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20454__auto__ = function(state_22971){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20454__auto____1.call(this,state_22971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20454__auto____0;
cljs$core$async$reduce_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20454__auto____1;
return cljs$core$async$reduce_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_22990 = f__20621__auto__.call(null);
(statearr_22990[(6)] = c__20620__auto__);

return statearr_22990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__,f__$1){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__,f__$1){
return (function (state_23008){
var state_val_23009 = (state_23008[(1)]);
if((state_val_23009 === (1))){
var inst_23003 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23008__$1 = state_23008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23008__$1,(2),inst_23003);
} else {
if((state_val_23009 === (2))){
var inst_23005 = (state_23008[(2)]);
var inst_23006 = f__$1.call(null,inst_23005);
var state_23008__$1 = state_23008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23008__$1,inst_23006);
} else {
return null;
}
}
});})(c__20620__auto__,f__$1))
;
return ((function (switch__20453__auto__,c__20620__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__20454__auto__ = null;
var cljs$core$async$transduce_$_state_machine__20454__auto____0 = (function (){
var statearr_23010 = [null,null,null,null,null,null,null];
(statearr_23010[(0)] = cljs$core$async$transduce_$_state_machine__20454__auto__);

(statearr_23010[(1)] = (1));

return statearr_23010;
});
var cljs$core$async$transduce_$_state_machine__20454__auto____1 = (function (state_23008){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_23008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e23011){if((e23011 instanceof Object)){
var ex__20457__auto__ = e23011;
var statearr_23012_23014 = state_23008;
(statearr_23012_23014[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23015 = state_23008;
state_23008 = G__23015;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__20454__auto__ = function(state_23008){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__20454__auto____1.call(this,state_23008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__20454__auto____0;
cljs$core$async$transduce_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__20454__auto____1;
return cljs$core$async$transduce_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__,f__$1))
})();
var state__20622__auto__ = (function (){var statearr_23013 = f__20621__auto__.call(null);
(statearr_23013[(6)] = c__20620__auto__);

return statearr_23013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__,f__$1))
);

return c__20620__auto__;
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
var G__23017 = arguments.length;
switch (G__23017) {
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
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_23042){
var state_val_23043 = (state_23042[(1)]);
if((state_val_23043 === (7))){
var inst_23024 = (state_23042[(2)]);
var state_23042__$1 = state_23042;
var statearr_23044_23065 = state_23042__$1;
(statearr_23044_23065[(2)] = inst_23024);

(statearr_23044_23065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (1))){
var inst_23018 = cljs.core.seq.call(null,coll);
var inst_23019 = inst_23018;
var state_23042__$1 = (function (){var statearr_23045 = state_23042;
(statearr_23045[(7)] = inst_23019);

return statearr_23045;
})();
var statearr_23046_23066 = state_23042__$1;
(statearr_23046_23066[(2)] = null);

(statearr_23046_23066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (4))){
var inst_23019 = (state_23042[(7)]);
var inst_23022 = cljs.core.first.call(null,inst_23019);
var state_23042__$1 = state_23042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23042__$1,(7),ch,inst_23022);
} else {
if((state_val_23043 === (13))){
var inst_23036 = (state_23042[(2)]);
var state_23042__$1 = state_23042;
var statearr_23047_23067 = state_23042__$1;
(statearr_23047_23067[(2)] = inst_23036);

(statearr_23047_23067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (6))){
var inst_23027 = (state_23042[(2)]);
var state_23042__$1 = state_23042;
if(cljs.core.truth_(inst_23027)){
var statearr_23048_23068 = state_23042__$1;
(statearr_23048_23068[(1)] = (8));

} else {
var statearr_23049_23069 = state_23042__$1;
(statearr_23049_23069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (3))){
var inst_23040 = (state_23042[(2)]);
var state_23042__$1 = state_23042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23042__$1,inst_23040);
} else {
if((state_val_23043 === (12))){
var state_23042__$1 = state_23042;
var statearr_23050_23070 = state_23042__$1;
(statearr_23050_23070[(2)] = null);

(statearr_23050_23070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (2))){
var inst_23019 = (state_23042[(7)]);
var state_23042__$1 = state_23042;
if(cljs.core.truth_(inst_23019)){
var statearr_23051_23071 = state_23042__$1;
(statearr_23051_23071[(1)] = (4));

} else {
var statearr_23052_23072 = state_23042__$1;
(statearr_23052_23072[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (11))){
var inst_23033 = cljs.core.async.close_BANG_.call(null,ch);
var state_23042__$1 = state_23042;
var statearr_23053_23073 = state_23042__$1;
(statearr_23053_23073[(2)] = inst_23033);

(statearr_23053_23073[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (9))){
var state_23042__$1 = state_23042;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23054_23074 = state_23042__$1;
(statearr_23054_23074[(1)] = (11));

} else {
var statearr_23055_23075 = state_23042__$1;
(statearr_23055_23075[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (5))){
var inst_23019 = (state_23042[(7)]);
var state_23042__$1 = state_23042;
var statearr_23056_23076 = state_23042__$1;
(statearr_23056_23076[(2)] = inst_23019);

(statearr_23056_23076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (10))){
var inst_23038 = (state_23042[(2)]);
var state_23042__$1 = state_23042;
var statearr_23057_23077 = state_23042__$1;
(statearr_23057_23077[(2)] = inst_23038);

(statearr_23057_23077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23043 === (8))){
var inst_23019 = (state_23042[(7)]);
var inst_23029 = cljs.core.next.call(null,inst_23019);
var inst_23019__$1 = inst_23029;
var state_23042__$1 = (function (){var statearr_23058 = state_23042;
(statearr_23058[(7)] = inst_23019__$1);

return statearr_23058;
})();
var statearr_23059_23078 = state_23042__$1;
(statearr_23059_23078[(2)] = null);

(statearr_23059_23078[(1)] = (2));


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
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var cljs$core$async$state_machine__20454__auto__ = null;
var cljs$core$async$state_machine__20454__auto____0 = (function (){
var statearr_23060 = [null,null,null,null,null,null,null,null];
(statearr_23060[(0)] = cljs$core$async$state_machine__20454__auto__);

(statearr_23060[(1)] = (1));

return statearr_23060;
});
var cljs$core$async$state_machine__20454__auto____1 = (function (state_23042){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_23042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e23061){if((e23061 instanceof Object)){
var ex__20457__auto__ = e23061;
var statearr_23062_23079 = state_23042;
(statearr_23062_23079[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23080 = state_23042;
state_23042 = G__23080;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$state_machine__20454__auto__ = function(state_23042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20454__auto____1.call(this,state_23042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20454__auto____0;
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20454__auto____1;
return cljs$core$async$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_23063 = f__20621__auto__.call(null);
(statearr_23063[(6)] = c__20620__auto__);

return statearr_23063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
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
var x__4304__auto__ = (((_ == null))?null:_);
var m__4305__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,_);
} else {
var m__4302__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,_);
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
var x__4304__auto__ = (((m == null))?null:m);
var m__4305__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4302__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,m,ch,close_QMARK_);
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
var x__4304__auto__ = (((m == null))?null:m);
var m__4305__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,m,ch);
} else {
var m__4302__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,m,ch);
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
var x__4304__auto__ = (((m == null))?null:m);
var m__4305__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,m);
} else {
var m__4302__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23081 = (function (ch,cs,meta23082){
this.ch = ch;
this.cs = cs;
this.meta23082 = meta23082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23083,meta23082__$1){
var self__ = this;
var _23083__$1 = this;
return (new cljs.core.async.t_cljs$core$async23081(self__.ch,self__.cs,meta23082__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23083){
var self__ = this;
var _23083__$1 = this;
return self__.meta23082;
});})(cs))
;

cljs.core.async.t_cljs$core$async23081.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23081.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23081.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23081.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23081.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23081.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23082","meta23082",-1844492015,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23081";

cljs.core.async.t_cljs$core$async23081.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t_cljs$core$async23081");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23081.
 */
cljs.core.async.__GT_t_cljs$core$async23081 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23081(ch__$1,cs__$1,meta23082){
return (new cljs.core.async.t_cljs$core$async23081(ch__$1,cs__$1,meta23082));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23081(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20620__auto___23303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___23303,cs,m,dchan,dctr,done){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___23303,cs,m,dchan,dctr,done){
return (function (state_23218){
var state_val_23219 = (state_23218[(1)]);
if((state_val_23219 === (7))){
var inst_23214 = (state_23218[(2)]);
var state_23218__$1 = state_23218;
var statearr_23220_23304 = state_23218__$1;
(statearr_23220_23304[(2)] = inst_23214);

(statearr_23220_23304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (20))){
var inst_23117 = (state_23218[(7)]);
var inst_23129 = cljs.core.first.call(null,inst_23117);
var inst_23130 = cljs.core.nth.call(null,inst_23129,(0),null);
var inst_23131 = cljs.core.nth.call(null,inst_23129,(1),null);
var state_23218__$1 = (function (){var statearr_23221 = state_23218;
(statearr_23221[(8)] = inst_23130);

return statearr_23221;
})();
if(cljs.core.truth_(inst_23131)){
var statearr_23222_23305 = state_23218__$1;
(statearr_23222_23305[(1)] = (22));

} else {
var statearr_23223_23306 = state_23218__$1;
(statearr_23223_23306[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (27))){
var inst_23159 = (state_23218[(9)]);
var inst_23086 = (state_23218[(10)]);
var inst_23161 = (state_23218[(11)]);
var inst_23166 = (state_23218[(12)]);
var inst_23166__$1 = cljs.core._nth.call(null,inst_23159,inst_23161);
var inst_23167 = cljs.core.async.put_BANG_.call(null,inst_23166__$1,inst_23086,done);
var state_23218__$1 = (function (){var statearr_23224 = state_23218;
(statearr_23224[(12)] = inst_23166__$1);

return statearr_23224;
})();
if(cljs.core.truth_(inst_23167)){
var statearr_23225_23307 = state_23218__$1;
(statearr_23225_23307[(1)] = (30));

} else {
var statearr_23226_23308 = state_23218__$1;
(statearr_23226_23308[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (1))){
var state_23218__$1 = state_23218;
var statearr_23227_23309 = state_23218__$1;
(statearr_23227_23309[(2)] = null);

(statearr_23227_23309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (24))){
var inst_23117 = (state_23218[(7)]);
var inst_23136 = (state_23218[(2)]);
var inst_23137 = cljs.core.next.call(null,inst_23117);
var inst_23095 = inst_23137;
var inst_23096 = null;
var inst_23097 = (0);
var inst_23098 = (0);
var state_23218__$1 = (function (){var statearr_23228 = state_23218;
(statearr_23228[(13)] = inst_23096);

(statearr_23228[(14)] = inst_23095);

(statearr_23228[(15)] = inst_23097);

(statearr_23228[(16)] = inst_23136);

(statearr_23228[(17)] = inst_23098);

return statearr_23228;
})();
var statearr_23229_23310 = state_23218__$1;
(statearr_23229_23310[(2)] = null);

(statearr_23229_23310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (39))){
var state_23218__$1 = state_23218;
var statearr_23233_23311 = state_23218__$1;
(statearr_23233_23311[(2)] = null);

(statearr_23233_23311[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (4))){
var inst_23086 = (state_23218[(10)]);
var inst_23086__$1 = (state_23218[(2)]);
var inst_23087 = (inst_23086__$1 == null);
var state_23218__$1 = (function (){var statearr_23234 = state_23218;
(statearr_23234[(10)] = inst_23086__$1);

return statearr_23234;
})();
if(cljs.core.truth_(inst_23087)){
var statearr_23235_23312 = state_23218__$1;
(statearr_23235_23312[(1)] = (5));

} else {
var statearr_23236_23313 = state_23218__$1;
(statearr_23236_23313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (15))){
var inst_23096 = (state_23218[(13)]);
var inst_23095 = (state_23218[(14)]);
var inst_23097 = (state_23218[(15)]);
var inst_23098 = (state_23218[(17)]);
var inst_23113 = (state_23218[(2)]);
var inst_23114 = (inst_23098 + (1));
var tmp23230 = inst_23096;
var tmp23231 = inst_23095;
var tmp23232 = inst_23097;
var inst_23095__$1 = tmp23231;
var inst_23096__$1 = tmp23230;
var inst_23097__$1 = tmp23232;
var inst_23098__$1 = inst_23114;
var state_23218__$1 = (function (){var statearr_23237 = state_23218;
(statearr_23237[(13)] = inst_23096__$1);

(statearr_23237[(18)] = inst_23113);

(statearr_23237[(14)] = inst_23095__$1);

(statearr_23237[(15)] = inst_23097__$1);

(statearr_23237[(17)] = inst_23098__$1);

return statearr_23237;
})();
var statearr_23238_23314 = state_23218__$1;
(statearr_23238_23314[(2)] = null);

(statearr_23238_23314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (21))){
var inst_23140 = (state_23218[(2)]);
var state_23218__$1 = state_23218;
var statearr_23242_23315 = state_23218__$1;
(statearr_23242_23315[(2)] = inst_23140);

(statearr_23242_23315[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (31))){
var inst_23166 = (state_23218[(12)]);
var inst_23170 = done.call(null,null);
var inst_23171 = cljs.core.async.untap_STAR_.call(null,m,inst_23166);
var state_23218__$1 = (function (){var statearr_23243 = state_23218;
(statearr_23243[(19)] = inst_23170);

return statearr_23243;
})();
var statearr_23244_23316 = state_23218__$1;
(statearr_23244_23316[(2)] = inst_23171);

(statearr_23244_23316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (32))){
var inst_23159 = (state_23218[(9)]);
var inst_23161 = (state_23218[(11)]);
var inst_23158 = (state_23218[(20)]);
var inst_23160 = (state_23218[(21)]);
var inst_23173 = (state_23218[(2)]);
var inst_23174 = (inst_23161 + (1));
var tmp23239 = inst_23159;
var tmp23240 = inst_23158;
var tmp23241 = inst_23160;
var inst_23158__$1 = tmp23240;
var inst_23159__$1 = tmp23239;
var inst_23160__$1 = tmp23241;
var inst_23161__$1 = inst_23174;
var state_23218__$1 = (function (){var statearr_23245 = state_23218;
(statearr_23245[(9)] = inst_23159__$1);

(statearr_23245[(11)] = inst_23161__$1);

(statearr_23245[(20)] = inst_23158__$1);

(statearr_23245[(22)] = inst_23173);

(statearr_23245[(21)] = inst_23160__$1);

return statearr_23245;
})();
var statearr_23246_23317 = state_23218__$1;
(statearr_23246_23317[(2)] = null);

(statearr_23246_23317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (40))){
var inst_23186 = (state_23218[(23)]);
var inst_23190 = done.call(null,null);
var inst_23191 = cljs.core.async.untap_STAR_.call(null,m,inst_23186);
var state_23218__$1 = (function (){var statearr_23247 = state_23218;
(statearr_23247[(24)] = inst_23190);

return statearr_23247;
})();
var statearr_23248_23318 = state_23218__$1;
(statearr_23248_23318[(2)] = inst_23191);

(statearr_23248_23318[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (33))){
var inst_23177 = (state_23218[(25)]);
var inst_23179 = cljs.core.chunked_seq_QMARK_.call(null,inst_23177);
var state_23218__$1 = state_23218;
if(inst_23179){
var statearr_23249_23319 = state_23218__$1;
(statearr_23249_23319[(1)] = (36));

} else {
var statearr_23250_23320 = state_23218__$1;
(statearr_23250_23320[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (13))){
var inst_23107 = (state_23218[(26)]);
var inst_23110 = cljs.core.async.close_BANG_.call(null,inst_23107);
var state_23218__$1 = state_23218;
var statearr_23251_23321 = state_23218__$1;
(statearr_23251_23321[(2)] = inst_23110);

(statearr_23251_23321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (22))){
var inst_23130 = (state_23218[(8)]);
var inst_23133 = cljs.core.async.close_BANG_.call(null,inst_23130);
var state_23218__$1 = state_23218;
var statearr_23252_23322 = state_23218__$1;
(statearr_23252_23322[(2)] = inst_23133);

(statearr_23252_23322[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (36))){
var inst_23177 = (state_23218[(25)]);
var inst_23181 = cljs.core.chunk_first.call(null,inst_23177);
var inst_23182 = cljs.core.chunk_rest.call(null,inst_23177);
var inst_23183 = cljs.core.count.call(null,inst_23181);
var inst_23158 = inst_23182;
var inst_23159 = inst_23181;
var inst_23160 = inst_23183;
var inst_23161 = (0);
var state_23218__$1 = (function (){var statearr_23253 = state_23218;
(statearr_23253[(9)] = inst_23159);

(statearr_23253[(11)] = inst_23161);

(statearr_23253[(20)] = inst_23158);

(statearr_23253[(21)] = inst_23160);

return statearr_23253;
})();
var statearr_23254_23323 = state_23218__$1;
(statearr_23254_23323[(2)] = null);

(statearr_23254_23323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (41))){
var inst_23177 = (state_23218[(25)]);
var inst_23193 = (state_23218[(2)]);
var inst_23194 = cljs.core.next.call(null,inst_23177);
var inst_23158 = inst_23194;
var inst_23159 = null;
var inst_23160 = (0);
var inst_23161 = (0);
var state_23218__$1 = (function (){var statearr_23255 = state_23218;
(statearr_23255[(9)] = inst_23159);

(statearr_23255[(11)] = inst_23161);

(statearr_23255[(20)] = inst_23158);

(statearr_23255[(21)] = inst_23160);

(statearr_23255[(27)] = inst_23193);

return statearr_23255;
})();
var statearr_23256_23324 = state_23218__$1;
(statearr_23256_23324[(2)] = null);

(statearr_23256_23324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (43))){
var state_23218__$1 = state_23218;
var statearr_23257_23325 = state_23218__$1;
(statearr_23257_23325[(2)] = null);

(statearr_23257_23325[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (29))){
var inst_23202 = (state_23218[(2)]);
var state_23218__$1 = state_23218;
var statearr_23258_23326 = state_23218__$1;
(statearr_23258_23326[(2)] = inst_23202);

(statearr_23258_23326[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (44))){
var inst_23211 = (state_23218[(2)]);
var state_23218__$1 = (function (){var statearr_23259 = state_23218;
(statearr_23259[(28)] = inst_23211);

return statearr_23259;
})();
var statearr_23260_23327 = state_23218__$1;
(statearr_23260_23327[(2)] = null);

(statearr_23260_23327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (6))){
var inst_23150 = (state_23218[(29)]);
var inst_23149 = cljs.core.deref.call(null,cs);
var inst_23150__$1 = cljs.core.keys.call(null,inst_23149);
var inst_23151 = cljs.core.count.call(null,inst_23150__$1);
var inst_23152 = cljs.core.reset_BANG_.call(null,dctr,inst_23151);
var inst_23157 = cljs.core.seq.call(null,inst_23150__$1);
var inst_23158 = inst_23157;
var inst_23159 = null;
var inst_23160 = (0);
var inst_23161 = (0);
var state_23218__$1 = (function (){var statearr_23261 = state_23218;
(statearr_23261[(9)] = inst_23159);

(statearr_23261[(11)] = inst_23161);

(statearr_23261[(20)] = inst_23158);

(statearr_23261[(30)] = inst_23152);

(statearr_23261[(29)] = inst_23150__$1);

(statearr_23261[(21)] = inst_23160);

return statearr_23261;
})();
var statearr_23262_23328 = state_23218__$1;
(statearr_23262_23328[(2)] = null);

(statearr_23262_23328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (28))){
var inst_23177 = (state_23218[(25)]);
var inst_23158 = (state_23218[(20)]);
var inst_23177__$1 = cljs.core.seq.call(null,inst_23158);
var state_23218__$1 = (function (){var statearr_23263 = state_23218;
(statearr_23263[(25)] = inst_23177__$1);

return statearr_23263;
})();
if(inst_23177__$1){
var statearr_23264_23329 = state_23218__$1;
(statearr_23264_23329[(1)] = (33));

} else {
var statearr_23265_23330 = state_23218__$1;
(statearr_23265_23330[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (25))){
var inst_23161 = (state_23218[(11)]);
var inst_23160 = (state_23218[(21)]);
var inst_23163 = (inst_23161 < inst_23160);
var inst_23164 = inst_23163;
var state_23218__$1 = state_23218;
if(cljs.core.truth_(inst_23164)){
var statearr_23266_23331 = state_23218__$1;
(statearr_23266_23331[(1)] = (27));

} else {
var statearr_23267_23332 = state_23218__$1;
(statearr_23267_23332[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (34))){
var state_23218__$1 = state_23218;
var statearr_23268_23333 = state_23218__$1;
(statearr_23268_23333[(2)] = null);

(statearr_23268_23333[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (17))){
var state_23218__$1 = state_23218;
var statearr_23269_23334 = state_23218__$1;
(statearr_23269_23334[(2)] = null);

(statearr_23269_23334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (3))){
var inst_23216 = (state_23218[(2)]);
var state_23218__$1 = state_23218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23218__$1,inst_23216);
} else {
if((state_val_23219 === (12))){
var inst_23145 = (state_23218[(2)]);
var state_23218__$1 = state_23218;
var statearr_23270_23335 = state_23218__$1;
(statearr_23270_23335[(2)] = inst_23145);

(statearr_23270_23335[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (2))){
var state_23218__$1 = state_23218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23218__$1,(4),ch);
} else {
if((state_val_23219 === (23))){
var state_23218__$1 = state_23218;
var statearr_23271_23336 = state_23218__$1;
(statearr_23271_23336[(2)] = null);

(statearr_23271_23336[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (35))){
var inst_23200 = (state_23218[(2)]);
var state_23218__$1 = state_23218;
var statearr_23272_23337 = state_23218__$1;
(statearr_23272_23337[(2)] = inst_23200);

(statearr_23272_23337[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (19))){
var inst_23117 = (state_23218[(7)]);
var inst_23121 = cljs.core.chunk_first.call(null,inst_23117);
var inst_23122 = cljs.core.chunk_rest.call(null,inst_23117);
var inst_23123 = cljs.core.count.call(null,inst_23121);
var inst_23095 = inst_23122;
var inst_23096 = inst_23121;
var inst_23097 = inst_23123;
var inst_23098 = (0);
var state_23218__$1 = (function (){var statearr_23273 = state_23218;
(statearr_23273[(13)] = inst_23096);

(statearr_23273[(14)] = inst_23095);

(statearr_23273[(15)] = inst_23097);

(statearr_23273[(17)] = inst_23098);

return statearr_23273;
})();
var statearr_23274_23338 = state_23218__$1;
(statearr_23274_23338[(2)] = null);

(statearr_23274_23338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (11))){
var inst_23095 = (state_23218[(14)]);
var inst_23117 = (state_23218[(7)]);
var inst_23117__$1 = cljs.core.seq.call(null,inst_23095);
var state_23218__$1 = (function (){var statearr_23275 = state_23218;
(statearr_23275[(7)] = inst_23117__$1);

return statearr_23275;
})();
if(inst_23117__$1){
var statearr_23276_23339 = state_23218__$1;
(statearr_23276_23339[(1)] = (16));

} else {
var statearr_23277_23340 = state_23218__$1;
(statearr_23277_23340[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (9))){
var inst_23147 = (state_23218[(2)]);
var state_23218__$1 = state_23218;
var statearr_23278_23341 = state_23218__$1;
(statearr_23278_23341[(2)] = inst_23147);

(statearr_23278_23341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (5))){
var inst_23093 = cljs.core.deref.call(null,cs);
var inst_23094 = cljs.core.seq.call(null,inst_23093);
var inst_23095 = inst_23094;
var inst_23096 = null;
var inst_23097 = (0);
var inst_23098 = (0);
var state_23218__$1 = (function (){var statearr_23279 = state_23218;
(statearr_23279[(13)] = inst_23096);

(statearr_23279[(14)] = inst_23095);

(statearr_23279[(15)] = inst_23097);

(statearr_23279[(17)] = inst_23098);

return statearr_23279;
})();
var statearr_23280_23342 = state_23218__$1;
(statearr_23280_23342[(2)] = null);

(statearr_23280_23342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (14))){
var state_23218__$1 = state_23218;
var statearr_23281_23343 = state_23218__$1;
(statearr_23281_23343[(2)] = null);

(statearr_23281_23343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (45))){
var inst_23208 = (state_23218[(2)]);
var state_23218__$1 = state_23218;
var statearr_23282_23344 = state_23218__$1;
(statearr_23282_23344[(2)] = inst_23208);

(statearr_23282_23344[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (26))){
var inst_23150 = (state_23218[(29)]);
var inst_23204 = (state_23218[(2)]);
var inst_23205 = cljs.core.seq.call(null,inst_23150);
var state_23218__$1 = (function (){var statearr_23283 = state_23218;
(statearr_23283[(31)] = inst_23204);

return statearr_23283;
})();
if(inst_23205){
var statearr_23284_23345 = state_23218__$1;
(statearr_23284_23345[(1)] = (42));

} else {
var statearr_23285_23346 = state_23218__$1;
(statearr_23285_23346[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (16))){
var inst_23117 = (state_23218[(7)]);
var inst_23119 = cljs.core.chunked_seq_QMARK_.call(null,inst_23117);
var state_23218__$1 = state_23218;
if(inst_23119){
var statearr_23286_23347 = state_23218__$1;
(statearr_23286_23347[(1)] = (19));

} else {
var statearr_23287_23348 = state_23218__$1;
(statearr_23287_23348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (38))){
var inst_23197 = (state_23218[(2)]);
var state_23218__$1 = state_23218;
var statearr_23288_23349 = state_23218__$1;
(statearr_23288_23349[(2)] = inst_23197);

(statearr_23288_23349[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (30))){
var state_23218__$1 = state_23218;
var statearr_23289_23350 = state_23218__$1;
(statearr_23289_23350[(2)] = null);

(statearr_23289_23350[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (10))){
var inst_23096 = (state_23218[(13)]);
var inst_23098 = (state_23218[(17)]);
var inst_23106 = cljs.core._nth.call(null,inst_23096,inst_23098);
var inst_23107 = cljs.core.nth.call(null,inst_23106,(0),null);
var inst_23108 = cljs.core.nth.call(null,inst_23106,(1),null);
var state_23218__$1 = (function (){var statearr_23290 = state_23218;
(statearr_23290[(26)] = inst_23107);

return statearr_23290;
})();
if(cljs.core.truth_(inst_23108)){
var statearr_23291_23351 = state_23218__$1;
(statearr_23291_23351[(1)] = (13));

} else {
var statearr_23292_23352 = state_23218__$1;
(statearr_23292_23352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (18))){
var inst_23143 = (state_23218[(2)]);
var state_23218__$1 = state_23218;
var statearr_23293_23353 = state_23218__$1;
(statearr_23293_23353[(2)] = inst_23143);

(statearr_23293_23353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (42))){
var state_23218__$1 = state_23218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23218__$1,(45),dchan);
} else {
if((state_val_23219 === (37))){
var inst_23177 = (state_23218[(25)]);
var inst_23086 = (state_23218[(10)]);
var inst_23186 = (state_23218[(23)]);
var inst_23186__$1 = cljs.core.first.call(null,inst_23177);
var inst_23187 = cljs.core.async.put_BANG_.call(null,inst_23186__$1,inst_23086,done);
var state_23218__$1 = (function (){var statearr_23294 = state_23218;
(statearr_23294[(23)] = inst_23186__$1);

return statearr_23294;
})();
if(cljs.core.truth_(inst_23187)){
var statearr_23295_23354 = state_23218__$1;
(statearr_23295_23354[(1)] = (39));

} else {
var statearr_23296_23355 = state_23218__$1;
(statearr_23296_23355[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23219 === (8))){
var inst_23097 = (state_23218[(15)]);
var inst_23098 = (state_23218[(17)]);
var inst_23100 = (inst_23098 < inst_23097);
var inst_23101 = inst_23100;
var state_23218__$1 = state_23218;
if(cljs.core.truth_(inst_23101)){
var statearr_23297_23356 = state_23218__$1;
(statearr_23297_23356[(1)] = (10));

} else {
var statearr_23298_23357 = state_23218__$1;
(statearr_23298_23357[(1)] = (11));

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
});})(c__20620__auto___23303,cs,m,dchan,dctr,done))
;
return ((function (switch__20453__auto__,c__20620__auto___23303,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20454__auto__ = null;
var cljs$core$async$mult_$_state_machine__20454__auto____0 = (function (){
var statearr_23299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23299[(0)] = cljs$core$async$mult_$_state_machine__20454__auto__);

(statearr_23299[(1)] = (1));

return statearr_23299;
});
var cljs$core$async$mult_$_state_machine__20454__auto____1 = (function (state_23218){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_23218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e23300){if((e23300 instanceof Object)){
var ex__20457__auto__ = e23300;
var statearr_23301_23358 = state_23218;
(statearr_23301_23358[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23359 = state_23218;
state_23218 = G__23359;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20454__auto__ = function(state_23218){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20454__auto____1.call(this,state_23218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20454__auto____0;
cljs$core$async$mult_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20454__auto____1;
return cljs$core$async$mult_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___23303,cs,m,dchan,dctr,done))
})();
var state__20622__auto__ = (function (){var statearr_23302 = f__20621__auto__.call(null);
(statearr_23302[(6)] = c__20620__auto___23303);

return statearr_23302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___23303,cs,m,dchan,dctr,done))
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
var G__23361 = arguments.length;
switch (G__23361) {
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
var x__4304__auto__ = (((m == null))?null:m);
var m__4305__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,m,ch);
} else {
var m__4302__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,m,ch);
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
var x__4304__auto__ = (((m == null))?null:m);
var m__4305__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,m,ch);
} else {
var m__4302__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,m,ch);
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
var x__4304__auto__ = (((m == null))?null:m);
var m__4305__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,m);
} else {
var m__4302__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,m);
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
var x__4304__auto__ = (((m == null))?null:m);
var m__4305__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,m,state_map);
} else {
var m__4302__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,m,state_map);
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
var x__4304__auto__ = (((m == null))?null:m);
var m__4305__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,m,mode);
} else {
var m__4302__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4607__auto__ = [];
var len__4601__auto___23373 = arguments.length;
var i__4602__auto___23374 = (0);
while(true){
if((i__4602__auto___23374 < len__4601__auto___23373)){
args__4607__auto__.push((arguments[i__4602__auto___23374]));

var G__23375 = (i__4602__auto___23374 + (1));
i__4602__auto___23374 = G__23375;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((3) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4608__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23367){
var map__23368 = p__23367;
var map__23368__$1 = (((((!((map__23368 == null))))?(((((map__23368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23368):map__23368);
var opts = map__23368__$1;
var statearr_23370_23376 = state;
(statearr_23370_23376[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__23368,map__23368__$1,opts){
return (function (val){
var statearr_23371_23377 = state;
(statearr_23371_23377[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23368,map__23368__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_23372_23378 = state;
(statearr_23372_23378[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23363){
var G__23364 = cljs.core.first.call(null,seq23363);
var seq23363__$1 = cljs.core.next.call(null,seq23363);
var G__23365 = cljs.core.first.call(null,seq23363__$1);
var seq23363__$2 = cljs.core.next.call(null,seq23363__$1);
var G__23366 = cljs.core.first.call(null,seq23363__$2);
var seq23363__$3 = cljs.core.next.call(null,seq23363__$2);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23364,G__23365,G__23366,seq23363__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23379 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23380){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23380 = meta23380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23381,meta23380__$1){
var self__ = this;
var _23381__$1 = this;
return (new cljs.core.async.t_cljs$core$async23379(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23380__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23381){
var self__ = this;
var _23381__$1 = this;
return self__.meta23380;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23379.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23379.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23380","meta23380",-163536762,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23379";

cljs.core.async.t_cljs$core$async23379.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t_cljs$core$async23379");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23379.
 */
cljs.core.async.__GT_t_cljs$core$async23379 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23379(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23380){
return (new cljs.core.async.t_cljs$core$async23379(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23380));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23379(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20620__auto___23543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___23543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___23543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23483){
var state_val_23484 = (state_23483[(1)]);
if((state_val_23484 === (7))){
var inst_23398 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
var statearr_23485_23544 = state_23483__$1;
(statearr_23485_23544[(2)] = inst_23398);

(statearr_23485_23544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (20))){
var inst_23410 = (state_23483[(7)]);
var state_23483__$1 = state_23483;
var statearr_23486_23545 = state_23483__$1;
(statearr_23486_23545[(2)] = inst_23410);

(statearr_23486_23545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (27))){
var state_23483__$1 = state_23483;
var statearr_23487_23546 = state_23483__$1;
(statearr_23487_23546[(2)] = null);

(statearr_23487_23546[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (1))){
var inst_23385 = (state_23483[(8)]);
var inst_23385__$1 = calc_state.call(null);
var inst_23387 = (inst_23385__$1 == null);
var inst_23388 = cljs.core.not.call(null,inst_23387);
var state_23483__$1 = (function (){var statearr_23488 = state_23483;
(statearr_23488[(8)] = inst_23385__$1);

return statearr_23488;
})();
if(inst_23388){
var statearr_23489_23547 = state_23483__$1;
(statearr_23489_23547[(1)] = (2));

} else {
var statearr_23490_23548 = state_23483__$1;
(statearr_23490_23548[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (24))){
var inst_23443 = (state_23483[(9)]);
var inst_23434 = (state_23483[(10)]);
var inst_23457 = (state_23483[(11)]);
var inst_23457__$1 = inst_23434.call(null,inst_23443);
var state_23483__$1 = (function (){var statearr_23491 = state_23483;
(statearr_23491[(11)] = inst_23457__$1);

return statearr_23491;
})();
if(cljs.core.truth_(inst_23457__$1)){
var statearr_23492_23549 = state_23483__$1;
(statearr_23492_23549[(1)] = (29));

} else {
var statearr_23493_23550 = state_23483__$1;
(statearr_23493_23550[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (4))){
var inst_23401 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
if(cljs.core.truth_(inst_23401)){
var statearr_23494_23551 = state_23483__$1;
(statearr_23494_23551[(1)] = (8));

} else {
var statearr_23495_23552 = state_23483__$1;
(statearr_23495_23552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (15))){
var inst_23428 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
if(cljs.core.truth_(inst_23428)){
var statearr_23496_23553 = state_23483__$1;
(statearr_23496_23553[(1)] = (19));

} else {
var statearr_23497_23554 = state_23483__$1;
(statearr_23497_23554[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (21))){
var inst_23433 = (state_23483[(12)]);
var inst_23433__$1 = (state_23483[(2)]);
var inst_23434 = cljs.core.get.call(null,inst_23433__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23435 = cljs.core.get.call(null,inst_23433__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23436 = cljs.core.get.call(null,inst_23433__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23483__$1 = (function (){var statearr_23498 = state_23483;
(statearr_23498[(10)] = inst_23434);

(statearr_23498[(12)] = inst_23433__$1);

(statearr_23498[(13)] = inst_23435);

return statearr_23498;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23483__$1,(22),inst_23436);
} else {
if((state_val_23484 === (31))){
var inst_23465 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
if(cljs.core.truth_(inst_23465)){
var statearr_23499_23555 = state_23483__$1;
(statearr_23499_23555[(1)] = (32));

} else {
var statearr_23500_23556 = state_23483__$1;
(statearr_23500_23556[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (32))){
var inst_23442 = (state_23483[(14)]);
var state_23483__$1 = state_23483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23483__$1,(35),out,inst_23442);
} else {
if((state_val_23484 === (33))){
var inst_23433 = (state_23483[(12)]);
var inst_23410 = inst_23433;
var state_23483__$1 = (function (){var statearr_23501 = state_23483;
(statearr_23501[(7)] = inst_23410);

return statearr_23501;
})();
var statearr_23502_23557 = state_23483__$1;
(statearr_23502_23557[(2)] = null);

(statearr_23502_23557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (13))){
var inst_23410 = (state_23483[(7)]);
var inst_23417 = inst_23410.cljs$lang$protocol_mask$partition0$;
var inst_23418 = (inst_23417 & (64));
var inst_23419 = inst_23410.cljs$core$ISeq$;
var inst_23420 = (cljs.core.PROTOCOL_SENTINEL === inst_23419);
var inst_23421 = ((inst_23418) || (inst_23420));
var state_23483__$1 = state_23483;
if(cljs.core.truth_(inst_23421)){
var statearr_23503_23558 = state_23483__$1;
(statearr_23503_23558[(1)] = (16));

} else {
var statearr_23504_23559 = state_23483__$1;
(statearr_23504_23559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (22))){
var inst_23442 = (state_23483[(14)]);
var inst_23443 = (state_23483[(9)]);
var inst_23441 = (state_23483[(2)]);
var inst_23442__$1 = cljs.core.nth.call(null,inst_23441,(0),null);
var inst_23443__$1 = cljs.core.nth.call(null,inst_23441,(1),null);
var inst_23444 = (inst_23442__$1 == null);
var inst_23445 = cljs.core._EQ_.call(null,inst_23443__$1,change);
var inst_23446 = ((inst_23444) || (inst_23445));
var state_23483__$1 = (function (){var statearr_23505 = state_23483;
(statearr_23505[(14)] = inst_23442__$1);

(statearr_23505[(9)] = inst_23443__$1);

return statearr_23505;
})();
if(cljs.core.truth_(inst_23446)){
var statearr_23506_23560 = state_23483__$1;
(statearr_23506_23560[(1)] = (23));

} else {
var statearr_23507_23561 = state_23483__$1;
(statearr_23507_23561[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (36))){
var inst_23433 = (state_23483[(12)]);
var inst_23410 = inst_23433;
var state_23483__$1 = (function (){var statearr_23508 = state_23483;
(statearr_23508[(7)] = inst_23410);

return statearr_23508;
})();
var statearr_23509_23562 = state_23483__$1;
(statearr_23509_23562[(2)] = null);

(statearr_23509_23562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (29))){
var inst_23457 = (state_23483[(11)]);
var state_23483__$1 = state_23483;
var statearr_23510_23563 = state_23483__$1;
(statearr_23510_23563[(2)] = inst_23457);

(statearr_23510_23563[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (6))){
var state_23483__$1 = state_23483;
var statearr_23511_23564 = state_23483__$1;
(statearr_23511_23564[(2)] = false);

(statearr_23511_23564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (28))){
var inst_23453 = (state_23483[(2)]);
var inst_23454 = calc_state.call(null);
var inst_23410 = inst_23454;
var state_23483__$1 = (function (){var statearr_23512 = state_23483;
(statearr_23512[(15)] = inst_23453);

(statearr_23512[(7)] = inst_23410);

return statearr_23512;
})();
var statearr_23513_23565 = state_23483__$1;
(statearr_23513_23565[(2)] = null);

(statearr_23513_23565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (25))){
var inst_23479 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
var statearr_23514_23566 = state_23483__$1;
(statearr_23514_23566[(2)] = inst_23479);

(statearr_23514_23566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (34))){
var inst_23477 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
var statearr_23515_23567 = state_23483__$1;
(statearr_23515_23567[(2)] = inst_23477);

(statearr_23515_23567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (17))){
var state_23483__$1 = state_23483;
var statearr_23516_23568 = state_23483__$1;
(statearr_23516_23568[(2)] = false);

(statearr_23516_23568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (3))){
var state_23483__$1 = state_23483;
var statearr_23517_23569 = state_23483__$1;
(statearr_23517_23569[(2)] = false);

(statearr_23517_23569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (12))){
var inst_23481 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23483__$1,inst_23481);
} else {
if((state_val_23484 === (2))){
var inst_23385 = (state_23483[(8)]);
var inst_23390 = inst_23385.cljs$lang$protocol_mask$partition0$;
var inst_23391 = (inst_23390 & (64));
var inst_23392 = inst_23385.cljs$core$ISeq$;
var inst_23393 = (cljs.core.PROTOCOL_SENTINEL === inst_23392);
var inst_23394 = ((inst_23391) || (inst_23393));
var state_23483__$1 = state_23483;
if(cljs.core.truth_(inst_23394)){
var statearr_23518_23570 = state_23483__$1;
(statearr_23518_23570[(1)] = (5));

} else {
var statearr_23519_23571 = state_23483__$1;
(statearr_23519_23571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (23))){
var inst_23442 = (state_23483[(14)]);
var inst_23448 = (inst_23442 == null);
var state_23483__$1 = state_23483;
if(cljs.core.truth_(inst_23448)){
var statearr_23520_23572 = state_23483__$1;
(statearr_23520_23572[(1)] = (26));

} else {
var statearr_23521_23573 = state_23483__$1;
(statearr_23521_23573[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (35))){
var inst_23468 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
if(cljs.core.truth_(inst_23468)){
var statearr_23522_23574 = state_23483__$1;
(statearr_23522_23574[(1)] = (36));

} else {
var statearr_23523_23575 = state_23483__$1;
(statearr_23523_23575[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (19))){
var inst_23410 = (state_23483[(7)]);
var inst_23430 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23410);
var state_23483__$1 = state_23483;
var statearr_23524_23576 = state_23483__$1;
(statearr_23524_23576[(2)] = inst_23430);

(statearr_23524_23576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (11))){
var inst_23410 = (state_23483[(7)]);
var inst_23414 = (inst_23410 == null);
var inst_23415 = cljs.core.not.call(null,inst_23414);
var state_23483__$1 = state_23483;
if(inst_23415){
var statearr_23525_23577 = state_23483__$1;
(statearr_23525_23577[(1)] = (13));

} else {
var statearr_23526_23578 = state_23483__$1;
(statearr_23526_23578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (9))){
var inst_23385 = (state_23483[(8)]);
var state_23483__$1 = state_23483;
var statearr_23527_23579 = state_23483__$1;
(statearr_23527_23579[(2)] = inst_23385);

(statearr_23527_23579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (5))){
var state_23483__$1 = state_23483;
var statearr_23528_23580 = state_23483__$1;
(statearr_23528_23580[(2)] = true);

(statearr_23528_23580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (14))){
var state_23483__$1 = state_23483;
var statearr_23529_23581 = state_23483__$1;
(statearr_23529_23581[(2)] = false);

(statearr_23529_23581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (26))){
var inst_23443 = (state_23483[(9)]);
var inst_23450 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23443);
var state_23483__$1 = state_23483;
var statearr_23530_23582 = state_23483__$1;
(statearr_23530_23582[(2)] = inst_23450);

(statearr_23530_23582[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (16))){
var state_23483__$1 = state_23483;
var statearr_23531_23583 = state_23483__$1;
(statearr_23531_23583[(2)] = true);

(statearr_23531_23583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (38))){
var inst_23473 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
var statearr_23532_23584 = state_23483__$1;
(statearr_23532_23584[(2)] = inst_23473);

(statearr_23532_23584[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (30))){
var inst_23443 = (state_23483[(9)]);
var inst_23434 = (state_23483[(10)]);
var inst_23435 = (state_23483[(13)]);
var inst_23460 = cljs.core.empty_QMARK_.call(null,inst_23434);
var inst_23461 = inst_23435.call(null,inst_23443);
var inst_23462 = cljs.core.not.call(null,inst_23461);
var inst_23463 = ((inst_23460) && (inst_23462));
var state_23483__$1 = state_23483;
var statearr_23533_23585 = state_23483__$1;
(statearr_23533_23585[(2)] = inst_23463);

(statearr_23533_23585[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (10))){
var inst_23385 = (state_23483[(8)]);
var inst_23406 = (state_23483[(2)]);
var inst_23407 = cljs.core.get.call(null,inst_23406,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23408 = cljs.core.get.call(null,inst_23406,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23409 = cljs.core.get.call(null,inst_23406,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23410 = inst_23385;
var state_23483__$1 = (function (){var statearr_23534 = state_23483;
(statearr_23534[(16)] = inst_23408);

(statearr_23534[(17)] = inst_23409);

(statearr_23534[(18)] = inst_23407);

(statearr_23534[(7)] = inst_23410);

return statearr_23534;
})();
var statearr_23535_23586 = state_23483__$1;
(statearr_23535_23586[(2)] = null);

(statearr_23535_23586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (18))){
var inst_23425 = (state_23483[(2)]);
var state_23483__$1 = state_23483;
var statearr_23536_23587 = state_23483__$1;
(statearr_23536_23587[(2)] = inst_23425);

(statearr_23536_23587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (37))){
var state_23483__$1 = state_23483;
var statearr_23537_23588 = state_23483__$1;
(statearr_23537_23588[(2)] = null);

(statearr_23537_23588[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23484 === (8))){
var inst_23385 = (state_23483[(8)]);
var inst_23403 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23385);
var state_23483__$1 = state_23483;
var statearr_23538_23589 = state_23483__$1;
(statearr_23538_23589[(2)] = inst_23403);

(statearr_23538_23589[(1)] = (10));


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
});})(c__20620__auto___23543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20453__auto__,c__20620__auto___23543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20454__auto__ = null;
var cljs$core$async$mix_$_state_machine__20454__auto____0 = (function (){
var statearr_23539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23539[(0)] = cljs$core$async$mix_$_state_machine__20454__auto__);

(statearr_23539[(1)] = (1));

return statearr_23539;
});
var cljs$core$async$mix_$_state_machine__20454__auto____1 = (function (state_23483){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_23483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e23540){if((e23540 instanceof Object)){
var ex__20457__auto__ = e23540;
var statearr_23541_23590 = state_23483;
(statearr_23541_23590[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23591 = state_23483;
state_23483 = G__23591;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20454__auto__ = function(state_23483){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20454__auto____1.call(this,state_23483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20454__auto____0;
cljs$core$async$mix_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20454__auto____1;
return cljs$core$async$mix_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___23543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20622__auto__ = (function (){var statearr_23542 = f__20621__auto__.call(null);
(statearr_23542[(6)] = c__20620__auto___23543);

return statearr_23542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___23543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__4304__auto__ = (((p == null))?null:p);
var m__4305__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4302__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,p,v,ch,close_QMARK_);
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
var x__4304__auto__ = (((p == null))?null:p);
var m__4305__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,p,v,ch);
} else {
var m__4302__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23593 = arguments.length;
switch (G__23593) {
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
var x__4304__auto__ = (((p == null))?null:p);
var m__4305__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,p);
} else {
var m__4302__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,p);
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
var x__4304__auto__ = (((p == null))?null:p);
var m__4305__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4304__auto__)]);
if((!((m__4305__auto__ == null)))){
return m__4305__auto__.call(null,p,v);
} else {
var m__4302__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4302__auto__ == null)))){
return m__4302__auto__.call(null,p,v);
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
var G__23597 = arguments.length;
switch (G__23597) {
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
var or__4002__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4002__auto__,mults){
return (function (p1__23595_SHARP_){
if(cljs.core.truth_(p1__23595_SHARP_.call(null,topic))){
return p1__23595_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23595_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4002__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23598 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23598 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23599){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23599 = meta23599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23600,meta23599__$1){
var self__ = this;
var _23600__$1 = this;
return (new cljs.core.async.t_cljs$core$async23598(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23599__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23600){
var self__ = this;
var _23600__$1 = this;
return self__.meta23599;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23598.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23599","meta23599",145795104,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23598.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23598";

cljs.core.async.t_cljs$core$async23598.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t_cljs$core$async23598");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23598.
 */
cljs.core.async.__GT_t_cljs$core$async23598 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23598(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23599){
return (new cljs.core.async.t_cljs$core$async23598(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23599));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23598(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20620__auto___23718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___23718,mults,ensure_mult,p){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___23718,mults,ensure_mult,p){
return (function (state_23672){
var state_val_23673 = (state_23672[(1)]);
if((state_val_23673 === (7))){
var inst_23668 = (state_23672[(2)]);
var state_23672__$1 = state_23672;
var statearr_23674_23719 = state_23672__$1;
(statearr_23674_23719[(2)] = inst_23668);

(statearr_23674_23719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (20))){
var state_23672__$1 = state_23672;
var statearr_23675_23720 = state_23672__$1;
(statearr_23675_23720[(2)] = null);

(statearr_23675_23720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (1))){
var state_23672__$1 = state_23672;
var statearr_23676_23721 = state_23672__$1;
(statearr_23676_23721[(2)] = null);

(statearr_23676_23721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (24))){
var inst_23651 = (state_23672[(7)]);
var inst_23660 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23651);
var state_23672__$1 = state_23672;
var statearr_23677_23722 = state_23672__$1;
(statearr_23677_23722[(2)] = inst_23660);

(statearr_23677_23722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (4))){
var inst_23603 = (state_23672[(8)]);
var inst_23603__$1 = (state_23672[(2)]);
var inst_23604 = (inst_23603__$1 == null);
var state_23672__$1 = (function (){var statearr_23678 = state_23672;
(statearr_23678[(8)] = inst_23603__$1);

return statearr_23678;
})();
if(cljs.core.truth_(inst_23604)){
var statearr_23679_23723 = state_23672__$1;
(statearr_23679_23723[(1)] = (5));

} else {
var statearr_23680_23724 = state_23672__$1;
(statearr_23680_23724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (15))){
var inst_23645 = (state_23672[(2)]);
var state_23672__$1 = state_23672;
var statearr_23681_23725 = state_23672__$1;
(statearr_23681_23725[(2)] = inst_23645);

(statearr_23681_23725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (21))){
var inst_23665 = (state_23672[(2)]);
var state_23672__$1 = (function (){var statearr_23682 = state_23672;
(statearr_23682[(9)] = inst_23665);

return statearr_23682;
})();
var statearr_23683_23726 = state_23672__$1;
(statearr_23683_23726[(2)] = null);

(statearr_23683_23726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (13))){
var inst_23627 = (state_23672[(10)]);
var inst_23629 = cljs.core.chunked_seq_QMARK_.call(null,inst_23627);
var state_23672__$1 = state_23672;
if(inst_23629){
var statearr_23684_23727 = state_23672__$1;
(statearr_23684_23727[(1)] = (16));

} else {
var statearr_23685_23728 = state_23672__$1;
(statearr_23685_23728[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (22))){
var inst_23657 = (state_23672[(2)]);
var state_23672__$1 = state_23672;
if(cljs.core.truth_(inst_23657)){
var statearr_23686_23729 = state_23672__$1;
(statearr_23686_23729[(1)] = (23));

} else {
var statearr_23687_23730 = state_23672__$1;
(statearr_23687_23730[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (6))){
var inst_23651 = (state_23672[(7)]);
var inst_23653 = (state_23672[(11)]);
var inst_23603 = (state_23672[(8)]);
var inst_23651__$1 = topic_fn.call(null,inst_23603);
var inst_23652 = cljs.core.deref.call(null,mults);
var inst_23653__$1 = cljs.core.get.call(null,inst_23652,inst_23651__$1);
var state_23672__$1 = (function (){var statearr_23688 = state_23672;
(statearr_23688[(7)] = inst_23651__$1);

(statearr_23688[(11)] = inst_23653__$1);

return statearr_23688;
})();
if(cljs.core.truth_(inst_23653__$1)){
var statearr_23689_23731 = state_23672__$1;
(statearr_23689_23731[(1)] = (19));

} else {
var statearr_23690_23732 = state_23672__$1;
(statearr_23690_23732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (25))){
var inst_23662 = (state_23672[(2)]);
var state_23672__$1 = state_23672;
var statearr_23691_23733 = state_23672__$1;
(statearr_23691_23733[(2)] = inst_23662);

(statearr_23691_23733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (17))){
var inst_23627 = (state_23672[(10)]);
var inst_23636 = cljs.core.first.call(null,inst_23627);
var inst_23637 = cljs.core.async.muxch_STAR_.call(null,inst_23636);
var inst_23638 = cljs.core.async.close_BANG_.call(null,inst_23637);
var inst_23639 = cljs.core.next.call(null,inst_23627);
var inst_23613 = inst_23639;
var inst_23614 = null;
var inst_23615 = (0);
var inst_23616 = (0);
var state_23672__$1 = (function (){var statearr_23692 = state_23672;
(statearr_23692[(12)] = inst_23638);

(statearr_23692[(13)] = inst_23613);

(statearr_23692[(14)] = inst_23615);

(statearr_23692[(15)] = inst_23614);

(statearr_23692[(16)] = inst_23616);

return statearr_23692;
})();
var statearr_23693_23734 = state_23672__$1;
(statearr_23693_23734[(2)] = null);

(statearr_23693_23734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (3))){
var inst_23670 = (state_23672[(2)]);
var state_23672__$1 = state_23672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23672__$1,inst_23670);
} else {
if((state_val_23673 === (12))){
var inst_23647 = (state_23672[(2)]);
var state_23672__$1 = state_23672;
var statearr_23694_23735 = state_23672__$1;
(statearr_23694_23735[(2)] = inst_23647);

(statearr_23694_23735[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (2))){
var state_23672__$1 = state_23672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23672__$1,(4),ch);
} else {
if((state_val_23673 === (23))){
var state_23672__$1 = state_23672;
var statearr_23695_23736 = state_23672__$1;
(statearr_23695_23736[(2)] = null);

(statearr_23695_23736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (19))){
var inst_23653 = (state_23672[(11)]);
var inst_23603 = (state_23672[(8)]);
var inst_23655 = cljs.core.async.muxch_STAR_.call(null,inst_23653);
var state_23672__$1 = state_23672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23672__$1,(22),inst_23655,inst_23603);
} else {
if((state_val_23673 === (11))){
var inst_23613 = (state_23672[(13)]);
var inst_23627 = (state_23672[(10)]);
var inst_23627__$1 = cljs.core.seq.call(null,inst_23613);
var state_23672__$1 = (function (){var statearr_23696 = state_23672;
(statearr_23696[(10)] = inst_23627__$1);

return statearr_23696;
})();
if(inst_23627__$1){
var statearr_23697_23737 = state_23672__$1;
(statearr_23697_23737[(1)] = (13));

} else {
var statearr_23698_23738 = state_23672__$1;
(statearr_23698_23738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (9))){
var inst_23649 = (state_23672[(2)]);
var state_23672__$1 = state_23672;
var statearr_23699_23739 = state_23672__$1;
(statearr_23699_23739[(2)] = inst_23649);

(statearr_23699_23739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (5))){
var inst_23610 = cljs.core.deref.call(null,mults);
var inst_23611 = cljs.core.vals.call(null,inst_23610);
var inst_23612 = cljs.core.seq.call(null,inst_23611);
var inst_23613 = inst_23612;
var inst_23614 = null;
var inst_23615 = (0);
var inst_23616 = (0);
var state_23672__$1 = (function (){var statearr_23700 = state_23672;
(statearr_23700[(13)] = inst_23613);

(statearr_23700[(14)] = inst_23615);

(statearr_23700[(15)] = inst_23614);

(statearr_23700[(16)] = inst_23616);

return statearr_23700;
})();
var statearr_23701_23740 = state_23672__$1;
(statearr_23701_23740[(2)] = null);

(statearr_23701_23740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (14))){
var state_23672__$1 = state_23672;
var statearr_23705_23741 = state_23672__$1;
(statearr_23705_23741[(2)] = null);

(statearr_23705_23741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (16))){
var inst_23627 = (state_23672[(10)]);
var inst_23631 = cljs.core.chunk_first.call(null,inst_23627);
var inst_23632 = cljs.core.chunk_rest.call(null,inst_23627);
var inst_23633 = cljs.core.count.call(null,inst_23631);
var inst_23613 = inst_23632;
var inst_23614 = inst_23631;
var inst_23615 = inst_23633;
var inst_23616 = (0);
var state_23672__$1 = (function (){var statearr_23706 = state_23672;
(statearr_23706[(13)] = inst_23613);

(statearr_23706[(14)] = inst_23615);

(statearr_23706[(15)] = inst_23614);

(statearr_23706[(16)] = inst_23616);

return statearr_23706;
})();
var statearr_23707_23742 = state_23672__$1;
(statearr_23707_23742[(2)] = null);

(statearr_23707_23742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (10))){
var inst_23613 = (state_23672[(13)]);
var inst_23615 = (state_23672[(14)]);
var inst_23614 = (state_23672[(15)]);
var inst_23616 = (state_23672[(16)]);
var inst_23621 = cljs.core._nth.call(null,inst_23614,inst_23616);
var inst_23622 = cljs.core.async.muxch_STAR_.call(null,inst_23621);
var inst_23623 = cljs.core.async.close_BANG_.call(null,inst_23622);
var inst_23624 = (inst_23616 + (1));
var tmp23702 = inst_23613;
var tmp23703 = inst_23615;
var tmp23704 = inst_23614;
var inst_23613__$1 = tmp23702;
var inst_23614__$1 = tmp23704;
var inst_23615__$1 = tmp23703;
var inst_23616__$1 = inst_23624;
var state_23672__$1 = (function (){var statearr_23708 = state_23672;
(statearr_23708[(13)] = inst_23613__$1);

(statearr_23708[(14)] = inst_23615__$1);

(statearr_23708[(15)] = inst_23614__$1);

(statearr_23708[(17)] = inst_23623);

(statearr_23708[(16)] = inst_23616__$1);

return statearr_23708;
})();
var statearr_23709_23743 = state_23672__$1;
(statearr_23709_23743[(2)] = null);

(statearr_23709_23743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (18))){
var inst_23642 = (state_23672[(2)]);
var state_23672__$1 = state_23672;
var statearr_23710_23744 = state_23672__$1;
(statearr_23710_23744[(2)] = inst_23642);

(statearr_23710_23744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23673 === (8))){
var inst_23615 = (state_23672[(14)]);
var inst_23616 = (state_23672[(16)]);
var inst_23618 = (inst_23616 < inst_23615);
var inst_23619 = inst_23618;
var state_23672__$1 = state_23672;
if(cljs.core.truth_(inst_23619)){
var statearr_23711_23745 = state_23672__$1;
(statearr_23711_23745[(1)] = (10));

} else {
var statearr_23712_23746 = state_23672__$1;
(statearr_23712_23746[(1)] = (11));

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
});})(c__20620__auto___23718,mults,ensure_mult,p))
;
return ((function (switch__20453__auto__,c__20620__auto___23718,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20454__auto__ = null;
var cljs$core$async$state_machine__20454__auto____0 = (function (){
var statearr_23713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23713[(0)] = cljs$core$async$state_machine__20454__auto__);

(statearr_23713[(1)] = (1));

return statearr_23713;
});
var cljs$core$async$state_machine__20454__auto____1 = (function (state_23672){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_23672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e23714){if((e23714 instanceof Object)){
var ex__20457__auto__ = e23714;
var statearr_23715_23747 = state_23672;
(statearr_23715_23747[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23748 = state_23672;
state_23672 = G__23748;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$state_machine__20454__auto__ = function(state_23672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20454__auto____1.call(this,state_23672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20454__auto____0;
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20454__auto____1;
return cljs$core$async$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___23718,mults,ensure_mult,p))
})();
var state__20622__auto__ = (function (){var statearr_23716 = f__20621__auto__.call(null);
(statearr_23716[(6)] = c__20620__auto___23718);

return statearr_23716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___23718,mults,ensure_mult,p))
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
var G__23750 = arguments.length;
switch (G__23750) {
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
var G__23753 = arguments.length;
switch (G__23753) {
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
var G__23756 = arguments.length;
switch (G__23756) {
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
var c__20620__auto___23823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___23823,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___23823,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23795){
var state_val_23796 = (state_23795[(1)]);
if((state_val_23796 === (7))){
var state_23795__$1 = state_23795;
var statearr_23797_23824 = state_23795__$1;
(statearr_23797_23824[(2)] = null);

(statearr_23797_23824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (1))){
var state_23795__$1 = state_23795;
var statearr_23798_23825 = state_23795__$1;
(statearr_23798_23825[(2)] = null);

(statearr_23798_23825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (4))){
var inst_23759 = (state_23795[(7)]);
var inst_23761 = (inst_23759 < cnt);
var state_23795__$1 = state_23795;
if(cljs.core.truth_(inst_23761)){
var statearr_23799_23826 = state_23795__$1;
(statearr_23799_23826[(1)] = (6));

} else {
var statearr_23800_23827 = state_23795__$1;
(statearr_23800_23827[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (15))){
var inst_23791 = (state_23795[(2)]);
var state_23795__$1 = state_23795;
var statearr_23801_23828 = state_23795__$1;
(statearr_23801_23828[(2)] = inst_23791);

(statearr_23801_23828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (13))){
var inst_23784 = cljs.core.async.close_BANG_.call(null,out);
var state_23795__$1 = state_23795;
var statearr_23802_23829 = state_23795__$1;
(statearr_23802_23829[(2)] = inst_23784);

(statearr_23802_23829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (6))){
var state_23795__$1 = state_23795;
var statearr_23803_23830 = state_23795__$1;
(statearr_23803_23830[(2)] = null);

(statearr_23803_23830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (3))){
var inst_23793 = (state_23795[(2)]);
var state_23795__$1 = state_23795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23795__$1,inst_23793);
} else {
if((state_val_23796 === (12))){
var inst_23781 = (state_23795[(8)]);
var inst_23781__$1 = (state_23795[(2)]);
var inst_23782 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23781__$1);
var state_23795__$1 = (function (){var statearr_23804 = state_23795;
(statearr_23804[(8)] = inst_23781__$1);

return statearr_23804;
})();
if(cljs.core.truth_(inst_23782)){
var statearr_23805_23831 = state_23795__$1;
(statearr_23805_23831[(1)] = (13));

} else {
var statearr_23806_23832 = state_23795__$1;
(statearr_23806_23832[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (2))){
var inst_23758 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23759 = (0);
var state_23795__$1 = (function (){var statearr_23807 = state_23795;
(statearr_23807[(9)] = inst_23758);

(statearr_23807[(7)] = inst_23759);

return statearr_23807;
})();
var statearr_23808_23833 = state_23795__$1;
(statearr_23808_23833[(2)] = null);

(statearr_23808_23833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (11))){
var inst_23759 = (state_23795[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23795,(10),Object,null,(9));
var inst_23768 = chs__$1.call(null,inst_23759);
var inst_23769 = done.call(null,inst_23759);
var inst_23770 = cljs.core.async.take_BANG_.call(null,inst_23768,inst_23769);
var state_23795__$1 = state_23795;
var statearr_23809_23834 = state_23795__$1;
(statearr_23809_23834[(2)] = inst_23770);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23795__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (9))){
var inst_23759 = (state_23795[(7)]);
var inst_23772 = (state_23795[(2)]);
var inst_23773 = (inst_23759 + (1));
var inst_23759__$1 = inst_23773;
var state_23795__$1 = (function (){var statearr_23810 = state_23795;
(statearr_23810[(10)] = inst_23772);

(statearr_23810[(7)] = inst_23759__$1);

return statearr_23810;
})();
var statearr_23811_23835 = state_23795__$1;
(statearr_23811_23835[(2)] = null);

(statearr_23811_23835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (5))){
var inst_23779 = (state_23795[(2)]);
var state_23795__$1 = (function (){var statearr_23812 = state_23795;
(statearr_23812[(11)] = inst_23779);

return statearr_23812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23795__$1,(12),dchan);
} else {
if((state_val_23796 === (14))){
var inst_23781 = (state_23795[(8)]);
var inst_23786 = cljs.core.apply.call(null,f,inst_23781);
var state_23795__$1 = state_23795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23795__$1,(16),out,inst_23786);
} else {
if((state_val_23796 === (16))){
var inst_23788 = (state_23795[(2)]);
var state_23795__$1 = (function (){var statearr_23813 = state_23795;
(statearr_23813[(12)] = inst_23788);

return statearr_23813;
})();
var statearr_23814_23836 = state_23795__$1;
(statearr_23814_23836[(2)] = null);

(statearr_23814_23836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (10))){
var inst_23763 = (state_23795[(2)]);
var inst_23764 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23795__$1 = (function (){var statearr_23815 = state_23795;
(statearr_23815[(13)] = inst_23763);

return statearr_23815;
})();
var statearr_23816_23837 = state_23795__$1;
(statearr_23816_23837[(2)] = inst_23764);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23795__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (8))){
var inst_23777 = (state_23795[(2)]);
var state_23795__$1 = state_23795;
var statearr_23817_23838 = state_23795__$1;
(statearr_23817_23838[(2)] = inst_23777);

(statearr_23817_23838[(1)] = (5));


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
});})(c__20620__auto___23823,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20453__auto__,c__20620__auto___23823,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20454__auto__ = null;
var cljs$core$async$state_machine__20454__auto____0 = (function (){
var statearr_23818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23818[(0)] = cljs$core$async$state_machine__20454__auto__);

(statearr_23818[(1)] = (1));

return statearr_23818;
});
var cljs$core$async$state_machine__20454__auto____1 = (function (state_23795){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_23795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e23819){if((e23819 instanceof Object)){
var ex__20457__auto__ = e23819;
var statearr_23820_23839 = state_23795;
(statearr_23820_23839[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23840 = state_23795;
state_23795 = G__23840;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$state_machine__20454__auto__ = function(state_23795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20454__auto____1.call(this,state_23795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20454__auto____0;
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20454__auto____1;
return cljs$core$async$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___23823,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20622__auto__ = (function (){var statearr_23821 = f__20621__auto__.call(null);
(statearr_23821[(6)] = c__20620__auto___23823);

return statearr_23821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___23823,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__23843 = arguments.length;
switch (G__23843) {
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
var c__20620__auto___23897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___23897,out){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___23897,out){
return (function (state_23875){
var state_val_23876 = (state_23875[(1)]);
if((state_val_23876 === (7))){
var inst_23854 = (state_23875[(7)]);
var inst_23855 = (state_23875[(8)]);
var inst_23854__$1 = (state_23875[(2)]);
var inst_23855__$1 = cljs.core.nth.call(null,inst_23854__$1,(0),null);
var inst_23856 = cljs.core.nth.call(null,inst_23854__$1,(1),null);
var inst_23857 = (inst_23855__$1 == null);
var state_23875__$1 = (function (){var statearr_23877 = state_23875;
(statearr_23877[(7)] = inst_23854__$1);

(statearr_23877[(9)] = inst_23856);

(statearr_23877[(8)] = inst_23855__$1);

return statearr_23877;
})();
if(cljs.core.truth_(inst_23857)){
var statearr_23878_23898 = state_23875__$1;
(statearr_23878_23898[(1)] = (8));

} else {
var statearr_23879_23899 = state_23875__$1;
(statearr_23879_23899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (1))){
var inst_23844 = cljs.core.vec.call(null,chs);
var inst_23845 = inst_23844;
var state_23875__$1 = (function (){var statearr_23880 = state_23875;
(statearr_23880[(10)] = inst_23845);

return statearr_23880;
})();
var statearr_23881_23900 = state_23875__$1;
(statearr_23881_23900[(2)] = null);

(statearr_23881_23900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (4))){
var inst_23845 = (state_23875[(10)]);
var state_23875__$1 = state_23875;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23875__$1,(7),inst_23845);
} else {
if((state_val_23876 === (6))){
var inst_23871 = (state_23875[(2)]);
var state_23875__$1 = state_23875;
var statearr_23882_23901 = state_23875__$1;
(statearr_23882_23901[(2)] = inst_23871);

(statearr_23882_23901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (3))){
var inst_23873 = (state_23875[(2)]);
var state_23875__$1 = state_23875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23875__$1,inst_23873);
} else {
if((state_val_23876 === (2))){
var inst_23845 = (state_23875[(10)]);
var inst_23847 = cljs.core.count.call(null,inst_23845);
var inst_23848 = (inst_23847 > (0));
var state_23875__$1 = state_23875;
if(cljs.core.truth_(inst_23848)){
var statearr_23884_23902 = state_23875__$1;
(statearr_23884_23902[(1)] = (4));

} else {
var statearr_23885_23903 = state_23875__$1;
(statearr_23885_23903[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (11))){
var inst_23845 = (state_23875[(10)]);
var inst_23864 = (state_23875[(2)]);
var tmp23883 = inst_23845;
var inst_23845__$1 = tmp23883;
var state_23875__$1 = (function (){var statearr_23886 = state_23875;
(statearr_23886[(11)] = inst_23864);

(statearr_23886[(10)] = inst_23845__$1);

return statearr_23886;
})();
var statearr_23887_23904 = state_23875__$1;
(statearr_23887_23904[(2)] = null);

(statearr_23887_23904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (9))){
var inst_23855 = (state_23875[(8)]);
var state_23875__$1 = state_23875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23875__$1,(11),out,inst_23855);
} else {
if((state_val_23876 === (5))){
var inst_23869 = cljs.core.async.close_BANG_.call(null,out);
var state_23875__$1 = state_23875;
var statearr_23888_23905 = state_23875__$1;
(statearr_23888_23905[(2)] = inst_23869);

(statearr_23888_23905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (10))){
var inst_23867 = (state_23875[(2)]);
var state_23875__$1 = state_23875;
var statearr_23889_23906 = state_23875__$1;
(statearr_23889_23906[(2)] = inst_23867);

(statearr_23889_23906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23876 === (8))){
var inst_23845 = (state_23875[(10)]);
var inst_23854 = (state_23875[(7)]);
var inst_23856 = (state_23875[(9)]);
var inst_23855 = (state_23875[(8)]);
var inst_23859 = (function (){var cs = inst_23845;
var vec__23850 = inst_23854;
var v = inst_23855;
var c = inst_23856;
return ((function (cs,vec__23850,v,c,inst_23845,inst_23854,inst_23856,inst_23855,state_val_23876,c__20620__auto___23897,out){
return (function (p1__23841_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23841_SHARP_);
});
;})(cs,vec__23850,v,c,inst_23845,inst_23854,inst_23856,inst_23855,state_val_23876,c__20620__auto___23897,out))
})();
var inst_23860 = cljs.core.filterv.call(null,inst_23859,inst_23845);
var inst_23845__$1 = inst_23860;
var state_23875__$1 = (function (){var statearr_23890 = state_23875;
(statearr_23890[(10)] = inst_23845__$1);

return statearr_23890;
})();
var statearr_23891_23907 = state_23875__$1;
(statearr_23891_23907[(2)] = null);

(statearr_23891_23907[(1)] = (2));


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
});})(c__20620__auto___23897,out))
;
return ((function (switch__20453__auto__,c__20620__auto___23897,out){
return (function() {
var cljs$core$async$state_machine__20454__auto__ = null;
var cljs$core$async$state_machine__20454__auto____0 = (function (){
var statearr_23892 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23892[(0)] = cljs$core$async$state_machine__20454__auto__);

(statearr_23892[(1)] = (1));

return statearr_23892;
});
var cljs$core$async$state_machine__20454__auto____1 = (function (state_23875){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_23875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e23893){if((e23893 instanceof Object)){
var ex__20457__auto__ = e23893;
var statearr_23894_23908 = state_23875;
(statearr_23894_23908[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23909 = state_23875;
state_23875 = G__23909;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$state_machine__20454__auto__ = function(state_23875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20454__auto____1.call(this,state_23875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20454__auto____0;
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20454__auto____1;
return cljs$core$async$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___23897,out))
})();
var state__20622__auto__ = (function (){var statearr_23895 = f__20621__auto__.call(null);
(statearr_23895[(6)] = c__20620__auto___23897);

return statearr_23895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___23897,out))
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
var G__23911 = arguments.length;
switch (G__23911) {
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
var c__20620__auto___23956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___23956,out){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___23956,out){
return (function (state_23935){
var state_val_23936 = (state_23935[(1)]);
if((state_val_23936 === (7))){
var inst_23917 = (state_23935[(7)]);
var inst_23917__$1 = (state_23935[(2)]);
var inst_23918 = (inst_23917__$1 == null);
var inst_23919 = cljs.core.not.call(null,inst_23918);
var state_23935__$1 = (function (){var statearr_23937 = state_23935;
(statearr_23937[(7)] = inst_23917__$1);

return statearr_23937;
})();
if(inst_23919){
var statearr_23938_23957 = state_23935__$1;
(statearr_23938_23957[(1)] = (8));

} else {
var statearr_23939_23958 = state_23935__$1;
(statearr_23939_23958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (1))){
var inst_23912 = (0);
var state_23935__$1 = (function (){var statearr_23940 = state_23935;
(statearr_23940[(8)] = inst_23912);

return statearr_23940;
})();
var statearr_23941_23959 = state_23935__$1;
(statearr_23941_23959[(2)] = null);

(statearr_23941_23959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (4))){
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23935__$1,(7),ch);
} else {
if((state_val_23936 === (6))){
var inst_23930 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23942_23960 = state_23935__$1;
(statearr_23942_23960[(2)] = inst_23930);

(statearr_23942_23960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (3))){
var inst_23932 = (state_23935[(2)]);
var inst_23933 = cljs.core.async.close_BANG_.call(null,out);
var state_23935__$1 = (function (){var statearr_23943 = state_23935;
(statearr_23943[(9)] = inst_23932);

return statearr_23943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23935__$1,inst_23933);
} else {
if((state_val_23936 === (2))){
var inst_23912 = (state_23935[(8)]);
var inst_23914 = (inst_23912 < n);
var state_23935__$1 = state_23935;
if(cljs.core.truth_(inst_23914)){
var statearr_23944_23961 = state_23935__$1;
(statearr_23944_23961[(1)] = (4));

} else {
var statearr_23945_23962 = state_23935__$1;
(statearr_23945_23962[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (11))){
var inst_23912 = (state_23935[(8)]);
var inst_23922 = (state_23935[(2)]);
var inst_23923 = (inst_23912 + (1));
var inst_23912__$1 = inst_23923;
var state_23935__$1 = (function (){var statearr_23946 = state_23935;
(statearr_23946[(8)] = inst_23912__$1);

(statearr_23946[(10)] = inst_23922);

return statearr_23946;
})();
var statearr_23947_23963 = state_23935__$1;
(statearr_23947_23963[(2)] = null);

(statearr_23947_23963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (9))){
var state_23935__$1 = state_23935;
var statearr_23948_23964 = state_23935__$1;
(statearr_23948_23964[(2)] = null);

(statearr_23948_23964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (5))){
var state_23935__$1 = state_23935;
var statearr_23949_23965 = state_23935__$1;
(statearr_23949_23965[(2)] = null);

(statearr_23949_23965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (10))){
var inst_23927 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23950_23966 = state_23935__$1;
(statearr_23950_23966[(2)] = inst_23927);

(statearr_23950_23966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (8))){
var inst_23917 = (state_23935[(7)]);
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23935__$1,(11),out,inst_23917);
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
});})(c__20620__auto___23956,out))
;
return ((function (switch__20453__auto__,c__20620__auto___23956,out){
return (function() {
var cljs$core$async$state_machine__20454__auto__ = null;
var cljs$core$async$state_machine__20454__auto____0 = (function (){
var statearr_23951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23951[(0)] = cljs$core$async$state_machine__20454__auto__);

(statearr_23951[(1)] = (1));

return statearr_23951;
});
var cljs$core$async$state_machine__20454__auto____1 = (function (state_23935){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_23935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e23952){if((e23952 instanceof Object)){
var ex__20457__auto__ = e23952;
var statearr_23953_23967 = state_23935;
(statearr_23953_23967[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23968 = state_23935;
state_23935 = G__23968;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$state_machine__20454__auto__ = function(state_23935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20454__auto____1.call(this,state_23935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20454__auto____0;
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20454__auto____1;
return cljs$core$async$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___23956,out))
})();
var state__20622__auto__ = (function (){var statearr_23954 = f__20621__auto__.call(null);
(statearr_23954[(6)] = c__20620__auto___23956);

return statearr_23954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___23956,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23970 = (function (f,ch,meta23971){
this.f = f;
this.ch = ch;
this.meta23971 = meta23971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23972,meta23971__$1){
var self__ = this;
var _23972__$1 = this;
return (new cljs.core.async.t_cljs$core$async23970(self__.f,self__.ch,meta23971__$1));
});

cljs.core.async.t_cljs$core$async23970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23972){
var self__ = this;
var _23972__$1 = this;
return self__.meta23971;
});

cljs.core.async.t_cljs$core$async23970.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23970.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23970.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23970.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23970.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23973 = (function (f,ch,meta23971,_,fn1,meta23974){
this.f = f;
this.ch = ch;
this.meta23971 = meta23971;
this._ = _;
this.fn1 = fn1;
this.meta23974 = meta23974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23975,meta23974__$1){
var self__ = this;
var _23975__$1 = this;
return (new cljs.core.async.t_cljs$core$async23973(self__.f,self__.ch,self__.meta23971,self__._,self__.fn1,meta23974__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23975){
var self__ = this;
var _23975__$1 = this;
return self__.meta23974;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23969_SHARP_){
return f1.call(null,(((p1__23969_SHARP_ == null))?null:self__.f.call(null,p1__23969_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23973.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23971","meta23971",975282573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23970","cljs.core.async/t_cljs$core$async23970",-612566439,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23974","meta23974",-682738661,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23973";

cljs.core.async.t_cljs$core$async23973.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t_cljs$core$async23973");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23973.
 */
cljs.core.async.__GT_t_cljs$core$async23973 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23973(f__$1,ch__$1,meta23971__$1,___$2,fn1__$1,meta23974){
return (new cljs.core.async.t_cljs$core$async23973(f__$1,ch__$1,meta23971__$1,___$2,fn1__$1,meta23974));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23973(self__.f,self__.ch,self__.meta23971,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3991__auto__ = ret;
if(cljs.core.truth_(and__3991__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__3991__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23970.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23970.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23971","meta23971",975282573,null)], null);
});

cljs.core.async.t_cljs$core$async23970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23970";

cljs.core.async.t_cljs$core$async23970.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t_cljs$core$async23970");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23970.
 */
cljs.core.async.__GT_t_cljs$core$async23970 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23970(f__$1,ch__$1,meta23971){
return (new cljs.core.async.t_cljs$core$async23970(f__$1,ch__$1,meta23971));
});

}

return (new cljs.core.async.t_cljs$core$async23970(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23976 = (function (f,ch,meta23977){
this.f = f;
this.ch = ch;
this.meta23977 = meta23977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23978,meta23977__$1){
var self__ = this;
var _23978__$1 = this;
return (new cljs.core.async.t_cljs$core$async23976(self__.f,self__.ch,meta23977__$1));
});

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23978){
var self__ = this;
var _23978__$1 = this;
return self__.meta23977;
});

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23977","meta23977",-1301012205,null)], null);
});

cljs.core.async.t_cljs$core$async23976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23976";

cljs.core.async.t_cljs$core$async23976.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t_cljs$core$async23976");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23976.
 */
cljs.core.async.__GT_t_cljs$core$async23976 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23976(f__$1,ch__$1,meta23977){
return (new cljs.core.async.t_cljs$core$async23976(f__$1,ch__$1,meta23977));
});

}

return (new cljs.core.async.t_cljs$core$async23976(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23979 = (function (p,ch,meta23980){
this.p = p;
this.ch = ch;
this.meta23980 = meta23980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23981,meta23980__$1){
var self__ = this;
var _23981__$1 = this;
return (new cljs.core.async.t_cljs$core$async23979(self__.p,self__.ch,meta23980__$1));
});

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23981){
var self__ = this;
var _23981__$1 = this;
return self__.meta23980;
});

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23980","meta23980",2073357041,null)], null);
});

cljs.core.async.t_cljs$core$async23979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23979";

cljs.core.async.t_cljs$core$async23979.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t_cljs$core$async23979");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23979.
 */
cljs.core.async.__GT_t_cljs$core$async23979 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23979(p__$1,ch__$1,meta23980){
return (new cljs.core.async.t_cljs$core$async23979(p__$1,ch__$1,meta23980));
});

}

return (new cljs.core.async.t_cljs$core$async23979(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23983 = arguments.length;
switch (G__23983) {
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
var c__20620__auto___24023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___24023,out){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___24023,out){
return (function (state_24004){
var state_val_24005 = (state_24004[(1)]);
if((state_val_24005 === (7))){
var inst_24000 = (state_24004[(2)]);
var state_24004__$1 = state_24004;
var statearr_24006_24024 = state_24004__$1;
(statearr_24006_24024[(2)] = inst_24000);

(statearr_24006_24024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (1))){
var state_24004__$1 = state_24004;
var statearr_24007_24025 = state_24004__$1;
(statearr_24007_24025[(2)] = null);

(statearr_24007_24025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (4))){
var inst_23986 = (state_24004[(7)]);
var inst_23986__$1 = (state_24004[(2)]);
var inst_23987 = (inst_23986__$1 == null);
var state_24004__$1 = (function (){var statearr_24008 = state_24004;
(statearr_24008[(7)] = inst_23986__$1);

return statearr_24008;
})();
if(cljs.core.truth_(inst_23987)){
var statearr_24009_24026 = state_24004__$1;
(statearr_24009_24026[(1)] = (5));

} else {
var statearr_24010_24027 = state_24004__$1;
(statearr_24010_24027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (6))){
var inst_23986 = (state_24004[(7)]);
var inst_23991 = p.call(null,inst_23986);
var state_24004__$1 = state_24004;
if(cljs.core.truth_(inst_23991)){
var statearr_24011_24028 = state_24004__$1;
(statearr_24011_24028[(1)] = (8));

} else {
var statearr_24012_24029 = state_24004__$1;
(statearr_24012_24029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (3))){
var inst_24002 = (state_24004[(2)]);
var state_24004__$1 = state_24004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24004__$1,inst_24002);
} else {
if((state_val_24005 === (2))){
var state_24004__$1 = state_24004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24004__$1,(4),ch);
} else {
if((state_val_24005 === (11))){
var inst_23994 = (state_24004[(2)]);
var state_24004__$1 = state_24004;
var statearr_24013_24030 = state_24004__$1;
(statearr_24013_24030[(2)] = inst_23994);

(statearr_24013_24030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (9))){
var state_24004__$1 = state_24004;
var statearr_24014_24031 = state_24004__$1;
(statearr_24014_24031[(2)] = null);

(statearr_24014_24031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (5))){
var inst_23989 = cljs.core.async.close_BANG_.call(null,out);
var state_24004__$1 = state_24004;
var statearr_24015_24032 = state_24004__$1;
(statearr_24015_24032[(2)] = inst_23989);

(statearr_24015_24032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (10))){
var inst_23997 = (state_24004[(2)]);
var state_24004__$1 = (function (){var statearr_24016 = state_24004;
(statearr_24016[(8)] = inst_23997);

return statearr_24016;
})();
var statearr_24017_24033 = state_24004__$1;
(statearr_24017_24033[(2)] = null);

(statearr_24017_24033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24005 === (8))){
var inst_23986 = (state_24004[(7)]);
var state_24004__$1 = state_24004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24004__$1,(11),out,inst_23986);
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
});})(c__20620__auto___24023,out))
;
return ((function (switch__20453__auto__,c__20620__auto___24023,out){
return (function() {
var cljs$core$async$state_machine__20454__auto__ = null;
var cljs$core$async$state_machine__20454__auto____0 = (function (){
var statearr_24018 = [null,null,null,null,null,null,null,null,null];
(statearr_24018[(0)] = cljs$core$async$state_machine__20454__auto__);

(statearr_24018[(1)] = (1));

return statearr_24018;
});
var cljs$core$async$state_machine__20454__auto____1 = (function (state_24004){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_24004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e24019){if((e24019 instanceof Object)){
var ex__20457__auto__ = e24019;
var statearr_24020_24034 = state_24004;
(statearr_24020_24034[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24035 = state_24004;
state_24004 = G__24035;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$state_machine__20454__auto__ = function(state_24004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20454__auto____1.call(this,state_24004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20454__auto____0;
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20454__auto____1;
return cljs$core$async$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___24023,out))
})();
var state__20622__auto__ = (function (){var statearr_24021 = f__20621__auto__.call(null);
(statearr_24021[(6)] = c__20620__auto___24023);

return statearr_24021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___24023,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24037 = arguments.length;
switch (G__24037) {
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
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_24100){
var state_val_24101 = (state_24100[(1)]);
if((state_val_24101 === (7))){
var inst_24096 = (state_24100[(2)]);
var state_24100__$1 = state_24100;
var statearr_24102_24140 = state_24100__$1;
(statearr_24102_24140[(2)] = inst_24096);

(statearr_24102_24140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (20))){
var inst_24066 = (state_24100[(7)]);
var inst_24077 = (state_24100[(2)]);
var inst_24078 = cljs.core.next.call(null,inst_24066);
var inst_24052 = inst_24078;
var inst_24053 = null;
var inst_24054 = (0);
var inst_24055 = (0);
var state_24100__$1 = (function (){var statearr_24103 = state_24100;
(statearr_24103[(8)] = inst_24052);

(statearr_24103[(9)] = inst_24077);

(statearr_24103[(10)] = inst_24055);

(statearr_24103[(11)] = inst_24053);

(statearr_24103[(12)] = inst_24054);

return statearr_24103;
})();
var statearr_24104_24141 = state_24100__$1;
(statearr_24104_24141[(2)] = null);

(statearr_24104_24141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (1))){
var state_24100__$1 = state_24100;
var statearr_24105_24142 = state_24100__$1;
(statearr_24105_24142[(2)] = null);

(statearr_24105_24142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (4))){
var inst_24041 = (state_24100[(13)]);
var inst_24041__$1 = (state_24100[(2)]);
var inst_24042 = (inst_24041__$1 == null);
var state_24100__$1 = (function (){var statearr_24106 = state_24100;
(statearr_24106[(13)] = inst_24041__$1);

return statearr_24106;
})();
if(cljs.core.truth_(inst_24042)){
var statearr_24107_24143 = state_24100__$1;
(statearr_24107_24143[(1)] = (5));

} else {
var statearr_24108_24144 = state_24100__$1;
(statearr_24108_24144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (15))){
var state_24100__$1 = state_24100;
var statearr_24112_24145 = state_24100__$1;
(statearr_24112_24145[(2)] = null);

(statearr_24112_24145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (21))){
var state_24100__$1 = state_24100;
var statearr_24113_24146 = state_24100__$1;
(statearr_24113_24146[(2)] = null);

(statearr_24113_24146[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (13))){
var inst_24052 = (state_24100[(8)]);
var inst_24055 = (state_24100[(10)]);
var inst_24053 = (state_24100[(11)]);
var inst_24054 = (state_24100[(12)]);
var inst_24062 = (state_24100[(2)]);
var inst_24063 = (inst_24055 + (1));
var tmp24109 = inst_24052;
var tmp24110 = inst_24053;
var tmp24111 = inst_24054;
var inst_24052__$1 = tmp24109;
var inst_24053__$1 = tmp24110;
var inst_24054__$1 = tmp24111;
var inst_24055__$1 = inst_24063;
var state_24100__$1 = (function (){var statearr_24114 = state_24100;
(statearr_24114[(8)] = inst_24052__$1);

(statearr_24114[(14)] = inst_24062);

(statearr_24114[(10)] = inst_24055__$1);

(statearr_24114[(11)] = inst_24053__$1);

(statearr_24114[(12)] = inst_24054__$1);

return statearr_24114;
})();
var statearr_24115_24147 = state_24100__$1;
(statearr_24115_24147[(2)] = null);

(statearr_24115_24147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (22))){
var state_24100__$1 = state_24100;
var statearr_24116_24148 = state_24100__$1;
(statearr_24116_24148[(2)] = null);

(statearr_24116_24148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (6))){
var inst_24041 = (state_24100[(13)]);
var inst_24050 = f.call(null,inst_24041);
var inst_24051 = cljs.core.seq.call(null,inst_24050);
var inst_24052 = inst_24051;
var inst_24053 = null;
var inst_24054 = (0);
var inst_24055 = (0);
var state_24100__$1 = (function (){var statearr_24117 = state_24100;
(statearr_24117[(8)] = inst_24052);

(statearr_24117[(10)] = inst_24055);

(statearr_24117[(11)] = inst_24053);

(statearr_24117[(12)] = inst_24054);

return statearr_24117;
})();
var statearr_24118_24149 = state_24100__$1;
(statearr_24118_24149[(2)] = null);

(statearr_24118_24149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (17))){
var inst_24066 = (state_24100[(7)]);
var inst_24070 = cljs.core.chunk_first.call(null,inst_24066);
var inst_24071 = cljs.core.chunk_rest.call(null,inst_24066);
var inst_24072 = cljs.core.count.call(null,inst_24070);
var inst_24052 = inst_24071;
var inst_24053 = inst_24070;
var inst_24054 = inst_24072;
var inst_24055 = (0);
var state_24100__$1 = (function (){var statearr_24119 = state_24100;
(statearr_24119[(8)] = inst_24052);

(statearr_24119[(10)] = inst_24055);

(statearr_24119[(11)] = inst_24053);

(statearr_24119[(12)] = inst_24054);

return statearr_24119;
})();
var statearr_24120_24150 = state_24100__$1;
(statearr_24120_24150[(2)] = null);

(statearr_24120_24150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (3))){
var inst_24098 = (state_24100[(2)]);
var state_24100__$1 = state_24100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24100__$1,inst_24098);
} else {
if((state_val_24101 === (12))){
var inst_24086 = (state_24100[(2)]);
var state_24100__$1 = state_24100;
var statearr_24121_24151 = state_24100__$1;
(statearr_24121_24151[(2)] = inst_24086);

(statearr_24121_24151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (2))){
var state_24100__$1 = state_24100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24100__$1,(4),in$);
} else {
if((state_val_24101 === (23))){
var inst_24094 = (state_24100[(2)]);
var state_24100__$1 = state_24100;
var statearr_24122_24152 = state_24100__$1;
(statearr_24122_24152[(2)] = inst_24094);

(statearr_24122_24152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (19))){
var inst_24081 = (state_24100[(2)]);
var state_24100__$1 = state_24100;
var statearr_24123_24153 = state_24100__$1;
(statearr_24123_24153[(2)] = inst_24081);

(statearr_24123_24153[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (11))){
var inst_24052 = (state_24100[(8)]);
var inst_24066 = (state_24100[(7)]);
var inst_24066__$1 = cljs.core.seq.call(null,inst_24052);
var state_24100__$1 = (function (){var statearr_24124 = state_24100;
(statearr_24124[(7)] = inst_24066__$1);

return statearr_24124;
})();
if(inst_24066__$1){
var statearr_24125_24154 = state_24100__$1;
(statearr_24125_24154[(1)] = (14));

} else {
var statearr_24126_24155 = state_24100__$1;
(statearr_24126_24155[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (9))){
var inst_24088 = (state_24100[(2)]);
var inst_24089 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24100__$1 = (function (){var statearr_24127 = state_24100;
(statearr_24127[(15)] = inst_24088);

return statearr_24127;
})();
if(cljs.core.truth_(inst_24089)){
var statearr_24128_24156 = state_24100__$1;
(statearr_24128_24156[(1)] = (21));

} else {
var statearr_24129_24157 = state_24100__$1;
(statearr_24129_24157[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (5))){
var inst_24044 = cljs.core.async.close_BANG_.call(null,out);
var state_24100__$1 = state_24100;
var statearr_24130_24158 = state_24100__$1;
(statearr_24130_24158[(2)] = inst_24044);

(statearr_24130_24158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (14))){
var inst_24066 = (state_24100[(7)]);
var inst_24068 = cljs.core.chunked_seq_QMARK_.call(null,inst_24066);
var state_24100__$1 = state_24100;
if(inst_24068){
var statearr_24131_24159 = state_24100__$1;
(statearr_24131_24159[(1)] = (17));

} else {
var statearr_24132_24160 = state_24100__$1;
(statearr_24132_24160[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (16))){
var inst_24084 = (state_24100[(2)]);
var state_24100__$1 = state_24100;
var statearr_24133_24161 = state_24100__$1;
(statearr_24133_24161[(2)] = inst_24084);

(statearr_24133_24161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24101 === (10))){
var inst_24055 = (state_24100[(10)]);
var inst_24053 = (state_24100[(11)]);
var inst_24060 = cljs.core._nth.call(null,inst_24053,inst_24055);
var state_24100__$1 = state_24100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24100__$1,(13),out,inst_24060);
} else {
if((state_val_24101 === (18))){
var inst_24066 = (state_24100[(7)]);
var inst_24075 = cljs.core.first.call(null,inst_24066);
var state_24100__$1 = state_24100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24100__$1,(20),out,inst_24075);
} else {
if((state_val_24101 === (8))){
var inst_24055 = (state_24100[(10)]);
var inst_24054 = (state_24100[(12)]);
var inst_24057 = (inst_24055 < inst_24054);
var inst_24058 = inst_24057;
var state_24100__$1 = state_24100;
if(cljs.core.truth_(inst_24058)){
var statearr_24134_24162 = state_24100__$1;
(statearr_24134_24162[(1)] = (10));

} else {
var statearr_24135_24163 = state_24100__$1;
(statearr_24135_24163[(1)] = (11));

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
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20454__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20454__auto____0 = (function (){
var statearr_24136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24136[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20454__auto__);

(statearr_24136[(1)] = (1));

return statearr_24136;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20454__auto____1 = (function (state_24100){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_24100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e24137){if((e24137 instanceof Object)){
var ex__20457__auto__ = e24137;
var statearr_24138_24164 = state_24100;
(statearr_24138_24164[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24165 = state_24100;
state_24100 = G__24165;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20454__auto__ = function(state_24100){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20454__auto____1.call(this,state_24100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20454__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20454__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_24139 = f__20621__auto__.call(null);
(statearr_24139[(6)] = c__20620__auto__);

return statearr_24139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24167 = arguments.length;
switch (G__24167) {
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
var G__24170 = arguments.length;
switch (G__24170) {
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
var G__24173 = arguments.length;
switch (G__24173) {
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
var c__20620__auto___24220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___24220,out){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___24220,out){
return (function (state_24197){
var state_val_24198 = (state_24197[(1)]);
if((state_val_24198 === (7))){
var inst_24192 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24199_24221 = state_24197__$1;
(statearr_24199_24221[(2)] = inst_24192);

(statearr_24199_24221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (1))){
var inst_24174 = null;
var state_24197__$1 = (function (){var statearr_24200 = state_24197;
(statearr_24200[(7)] = inst_24174);

return statearr_24200;
})();
var statearr_24201_24222 = state_24197__$1;
(statearr_24201_24222[(2)] = null);

(statearr_24201_24222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (4))){
var inst_24177 = (state_24197[(8)]);
var inst_24177__$1 = (state_24197[(2)]);
var inst_24178 = (inst_24177__$1 == null);
var inst_24179 = cljs.core.not.call(null,inst_24178);
var state_24197__$1 = (function (){var statearr_24202 = state_24197;
(statearr_24202[(8)] = inst_24177__$1);

return statearr_24202;
})();
if(inst_24179){
var statearr_24203_24223 = state_24197__$1;
(statearr_24203_24223[(1)] = (5));

} else {
var statearr_24204_24224 = state_24197__$1;
(statearr_24204_24224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (6))){
var state_24197__$1 = state_24197;
var statearr_24205_24225 = state_24197__$1;
(statearr_24205_24225[(2)] = null);

(statearr_24205_24225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (3))){
var inst_24194 = (state_24197[(2)]);
var inst_24195 = cljs.core.async.close_BANG_.call(null,out);
var state_24197__$1 = (function (){var statearr_24206 = state_24197;
(statearr_24206[(9)] = inst_24194);

return statearr_24206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24197__$1,inst_24195);
} else {
if((state_val_24198 === (2))){
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24197__$1,(4),ch);
} else {
if((state_val_24198 === (11))){
var inst_24177 = (state_24197[(8)]);
var inst_24186 = (state_24197[(2)]);
var inst_24174 = inst_24177;
var state_24197__$1 = (function (){var statearr_24207 = state_24197;
(statearr_24207[(7)] = inst_24174);

(statearr_24207[(10)] = inst_24186);

return statearr_24207;
})();
var statearr_24208_24226 = state_24197__$1;
(statearr_24208_24226[(2)] = null);

(statearr_24208_24226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (9))){
var inst_24177 = (state_24197[(8)]);
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24197__$1,(11),out,inst_24177);
} else {
if((state_val_24198 === (5))){
var inst_24177 = (state_24197[(8)]);
var inst_24174 = (state_24197[(7)]);
var inst_24181 = cljs.core._EQ_.call(null,inst_24177,inst_24174);
var state_24197__$1 = state_24197;
if(inst_24181){
var statearr_24210_24227 = state_24197__$1;
(statearr_24210_24227[(1)] = (8));

} else {
var statearr_24211_24228 = state_24197__$1;
(statearr_24211_24228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (10))){
var inst_24189 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24212_24229 = state_24197__$1;
(statearr_24212_24229[(2)] = inst_24189);

(statearr_24212_24229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (8))){
var inst_24174 = (state_24197[(7)]);
var tmp24209 = inst_24174;
var inst_24174__$1 = tmp24209;
var state_24197__$1 = (function (){var statearr_24213 = state_24197;
(statearr_24213[(7)] = inst_24174__$1);

return statearr_24213;
})();
var statearr_24214_24230 = state_24197__$1;
(statearr_24214_24230[(2)] = null);

(statearr_24214_24230[(1)] = (2));


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
});})(c__20620__auto___24220,out))
;
return ((function (switch__20453__auto__,c__20620__auto___24220,out){
return (function() {
var cljs$core$async$state_machine__20454__auto__ = null;
var cljs$core$async$state_machine__20454__auto____0 = (function (){
var statearr_24215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24215[(0)] = cljs$core$async$state_machine__20454__auto__);

(statearr_24215[(1)] = (1));

return statearr_24215;
});
var cljs$core$async$state_machine__20454__auto____1 = (function (state_24197){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_24197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e24216){if((e24216 instanceof Object)){
var ex__20457__auto__ = e24216;
var statearr_24217_24231 = state_24197;
(statearr_24217_24231[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24232 = state_24197;
state_24197 = G__24232;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$state_machine__20454__auto__ = function(state_24197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20454__auto____1.call(this,state_24197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20454__auto____0;
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20454__auto____1;
return cljs$core$async$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___24220,out))
})();
var state__20622__auto__ = (function (){var statearr_24218 = f__20621__auto__.call(null);
(statearr_24218[(6)] = c__20620__auto___24220);

return statearr_24218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___24220,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24234 = arguments.length;
switch (G__24234) {
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
var c__20620__auto___24300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___24300,out){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___24300,out){
return (function (state_24272){
var state_val_24273 = (state_24272[(1)]);
if((state_val_24273 === (7))){
var inst_24268 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
var statearr_24274_24301 = state_24272__$1;
(statearr_24274_24301[(2)] = inst_24268);

(statearr_24274_24301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (1))){
var inst_24235 = (new Array(n));
var inst_24236 = inst_24235;
var inst_24237 = (0);
var state_24272__$1 = (function (){var statearr_24275 = state_24272;
(statearr_24275[(7)] = inst_24236);

(statearr_24275[(8)] = inst_24237);

return statearr_24275;
})();
var statearr_24276_24302 = state_24272__$1;
(statearr_24276_24302[(2)] = null);

(statearr_24276_24302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (4))){
var inst_24240 = (state_24272[(9)]);
var inst_24240__$1 = (state_24272[(2)]);
var inst_24241 = (inst_24240__$1 == null);
var inst_24242 = cljs.core.not.call(null,inst_24241);
var state_24272__$1 = (function (){var statearr_24277 = state_24272;
(statearr_24277[(9)] = inst_24240__$1);

return statearr_24277;
})();
if(inst_24242){
var statearr_24278_24303 = state_24272__$1;
(statearr_24278_24303[(1)] = (5));

} else {
var statearr_24279_24304 = state_24272__$1;
(statearr_24279_24304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (15))){
var inst_24262 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
var statearr_24280_24305 = state_24272__$1;
(statearr_24280_24305[(2)] = inst_24262);

(statearr_24280_24305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (13))){
var state_24272__$1 = state_24272;
var statearr_24281_24306 = state_24272__$1;
(statearr_24281_24306[(2)] = null);

(statearr_24281_24306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (6))){
var inst_24237 = (state_24272[(8)]);
var inst_24258 = (inst_24237 > (0));
var state_24272__$1 = state_24272;
if(cljs.core.truth_(inst_24258)){
var statearr_24282_24307 = state_24272__$1;
(statearr_24282_24307[(1)] = (12));

} else {
var statearr_24283_24308 = state_24272__$1;
(statearr_24283_24308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (3))){
var inst_24270 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24272__$1,inst_24270);
} else {
if((state_val_24273 === (12))){
var inst_24236 = (state_24272[(7)]);
var inst_24260 = cljs.core.vec.call(null,inst_24236);
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24272__$1,(15),out,inst_24260);
} else {
if((state_val_24273 === (2))){
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24272__$1,(4),ch);
} else {
if((state_val_24273 === (11))){
var inst_24252 = (state_24272[(2)]);
var inst_24253 = (new Array(n));
var inst_24236 = inst_24253;
var inst_24237 = (0);
var state_24272__$1 = (function (){var statearr_24284 = state_24272;
(statearr_24284[(10)] = inst_24252);

(statearr_24284[(7)] = inst_24236);

(statearr_24284[(8)] = inst_24237);

return statearr_24284;
})();
var statearr_24285_24309 = state_24272__$1;
(statearr_24285_24309[(2)] = null);

(statearr_24285_24309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (9))){
var inst_24236 = (state_24272[(7)]);
var inst_24250 = cljs.core.vec.call(null,inst_24236);
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24272__$1,(11),out,inst_24250);
} else {
if((state_val_24273 === (5))){
var inst_24240 = (state_24272[(9)]);
var inst_24245 = (state_24272[(11)]);
var inst_24236 = (state_24272[(7)]);
var inst_24237 = (state_24272[(8)]);
var inst_24244 = (inst_24236[inst_24237] = inst_24240);
var inst_24245__$1 = (inst_24237 + (1));
var inst_24246 = (inst_24245__$1 < n);
var state_24272__$1 = (function (){var statearr_24286 = state_24272;
(statearr_24286[(11)] = inst_24245__$1);

(statearr_24286[(12)] = inst_24244);

return statearr_24286;
})();
if(cljs.core.truth_(inst_24246)){
var statearr_24287_24310 = state_24272__$1;
(statearr_24287_24310[(1)] = (8));

} else {
var statearr_24288_24311 = state_24272__$1;
(statearr_24288_24311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (14))){
var inst_24265 = (state_24272[(2)]);
var inst_24266 = cljs.core.async.close_BANG_.call(null,out);
var state_24272__$1 = (function (){var statearr_24290 = state_24272;
(statearr_24290[(13)] = inst_24265);

return statearr_24290;
})();
var statearr_24291_24312 = state_24272__$1;
(statearr_24291_24312[(2)] = inst_24266);

(statearr_24291_24312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (10))){
var inst_24256 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
var statearr_24292_24313 = state_24272__$1;
(statearr_24292_24313[(2)] = inst_24256);

(statearr_24292_24313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (8))){
var inst_24245 = (state_24272[(11)]);
var inst_24236 = (state_24272[(7)]);
var tmp24289 = inst_24236;
var inst_24236__$1 = tmp24289;
var inst_24237 = inst_24245;
var state_24272__$1 = (function (){var statearr_24293 = state_24272;
(statearr_24293[(7)] = inst_24236__$1);

(statearr_24293[(8)] = inst_24237);

return statearr_24293;
})();
var statearr_24294_24314 = state_24272__$1;
(statearr_24294_24314[(2)] = null);

(statearr_24294_24314[(1)] = (2));


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
});})(c__20620__auto___24300,out))
;
return ((function (switch__20453__auto__,c__20620__auto___24300,out){
return (function() {
var cljs$core$async$state_machine__20454__auto__ = null;
var cljs$core$async$state_machine__20454__auto____0 = (function (){
var statearr_24295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24295[(0)] = cljs$core$async$state_machine__20454__auto__);

(statearr_24295[(1)] = (1));

return statearr_24295;
});
var cljs$core$async$state_machine__20454__auto____1 = (function (state_24272){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_24272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e24296){if((e24296 instanceof Object)){
var ex__20457__auto__ = e24296;
var statearr_24297_24315 = state_24272;
(statearr_24297_24315[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24316 = state_24272;
state_24272 = G__24316;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$state_machine__20454__auto__ = function(state_24272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20454__auto____1.call(this,state_24272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20454__auto____0;
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20454__auto____1;
return cljs$core$async$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___24300,out))
})();
var state__20622__auto__ = (function (){var statearr_24298 = f__20621__auto__.call(null);
(statearr_24298[(6)] = c__20620__auto___24300);

return statearr_24298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___24300,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24318 = arguments.length;
switch (G__24318) {
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
var c__20620__auto___24388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___24388,out){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___24388,out){
return (function (state_24360){
var state_val_24361 = (state_24360[(1)]);
if((state_val_24361 === (7))){
var inst_24356 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24362_24389 = state_24360__$1;
(statearr_24362_24389[(2)] = inst_24356);

(statearr_24362_24389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (1))){
var inst_24319 = [];
var inst_24320 = inst_24319;
var inst_24321 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24360__$1 = (function (){var statearr_24363 = state_24360;
(statearr_24363[(7)] = inst_24320);

(statearr_24363[(8)] = inst_24321);

return statearr_24363;
})();
var statearr_24364_24390 = state_24360__$1;
(statearr_24364_24390[(2)] = null);

(statearr_24364_24390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (4))){
var inst_24324 = (state_24360[(9)]);
var inst_24324__$1 = (state_24360[(2)]);
var inst_24325 = (inst_24324__$1 == null);
var inst_24326 = cljs.core.not.call(null,inst_24325);
var state_24360__$1 = (function (){var statearr_24365 = state_24360;
(statearr_24365[(9)] = inst_24324__$1);

return statearr_24365;
})();
if(inst_24326){
var statearr_24366_24391 = state_24360__$1;
(statearr_24366_24391[(1)] = (5));

} else {
var statearr_24367_24392 = state_24360__$1;
(statearr_24367_24392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (15))){
var inst_24350 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24368_24393 = state_24360__$1;
(statearr_24368_24393[(2)] = inst_24350);

(statearr_24368_24393[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (13))){
var state_24360__$1 = state_24360;
var statearr_24369_24394 = state_24360__$1;
(statearr_24369_24394[(2)] = null);

(statearr_24369_24394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (6))){
var inst_24320 = (state_24360[(7)]);
var inst_24345 = inst_24320.length;
var inst_24346 = (inst_24345 > (0));
var state_24360__$1 = state_24360;
if(cljs.core.truth_(inst_24346)){
var statearr_24370_24395 = state_24360__$1;
(statearr_24370_24395[(1)] = (12));

} else {
var statearr_24371_24396 = state_24360__$1;
(statearr_24371_24396[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (3))){
var inst_24358 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24360__$1,inst_24358);
} else {
if((state_val_24361 === (12))){
var inst_24320 = (state_24360[(7)]);
var inst_24348 = cljs.core.vec.call(null,inst_24320);
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24360__$1,(15),out,inst_24348);
} else {
if((state_val_24361 === (2))){
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24360__$1,(4),ch);
} else {
if((state_val_24361 === (11))){
var inst_24324 = (state_24360[(9)]);
var inst_24328 = (state_24360[(10)]);
var inst_24338 = (state_24360[(2)]);
var inst_24339 = [];
var inst_24340 = inst_24339.push(inst_24324);
var inst_24320 = inst_24339;
var inst_24321 = inst_24328;
var state_24360__$1 = (function (){var statearr_24372 = state_24360;
(statearr_24372[(7)] = inst_24320);

(statearr_24372[(8)] = inst_24321);

(statearr_24372[(11)] = inst_24338);

(statearr_24372[(12)] = inst_24340);

return statearr_24372;
})();
var statearr_24373_24397 = state_24360__$1;
(statearr_24373_24397[(2)] = null);

(statearr_24373_24397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (9))){
var inst_24320 = (state_24360[(7)]);
var inst_24336 = cljs.core.vec.call(null,inst_24320);
var state_24360__$1 = state_24360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24360__$1,(11),out,inst_24336);
} else {
if((state_val_24361 === (5))){
var inst_24324 = (state_24360[(9)]);
var inst_24328 = (state_24360[(10)]);
var inst_24321 = (state_24360[(8)]);
var inst_24328__$1 = f.call(null,inst_24324);
var inst_24329 = cljs.core._EQ_.call(null,inst_24328__$1,inst_24321);
var inst_24330 = cljs.core.keyword_identical_QMARK_.call(null,inst_24321,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24331 = ((inst_24329) || (inst_24330));
var state_24360__$1 = (function (){var statearr_24374 = state_24360;
(statearr_24374[(10)] = inst_24328__$1);

return statearr_24374;
})();
if(cljs.core.truth_(inst_24331)){
var statearr_24375_24398 = state_24360__$1;
(statearr_24375_24398[(1)] = (8));

} else {
var statearr_24376_24399 = state_24360__$1;
(statearr_24376_24399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (14))){
var inst_24353 = (state_24360[(2)]);
var inst_24354 = cljs.core.async.close_BANG_.call(null,out);
var state_24360__$1 = (function (){var statearr_24378 = state_24360;
(statearr_24378[(13)] = inst_24353);

return statearr_24378;
})();
var statearr_24379_24400 = state_24360__$1;
(statearr_24379_24400[(2)] = inst_24354);

(statearr_24379_24400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (10))){
var inst_24343 = (state_24360[(2)]);
var state_24360__$1 = state_24360;
var statearr_24380_24401 = state_24360__$1;
(statearr_24380_24401[(2)] = inst_24343);

(statearr_24380_24401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24361 === (8))){
var inst_24320 = (state_24360[(7)]);
var inst_24324 = (state_24360[(9)]);
var inst_24328 = (state_24360[(10)]);
var inst_24333 = inst_24320.push(inst_24324);
var tmp24377 = inst_24320;
var inst_24320__$1 = tmp24377;
var inst_24321 = inst_24328;
var state_24360__$1 = (function (){var statearr_24381 = state_24360;
(statearr_24381[(7)] = inst_24320__$1);

(statearr_24381[(8)] = inst_24321);

(statearr_24381[(14)] = inst_24333);

return statearr_24381;
})();
var statearr_24382_24402 = state_24360__$1;
(statearr_24382_24402[(2)] = null);

(statearr_24382_24402[(1)] = (2));


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
});})(c__20620__auto___24388,out))
;
return ((function (switch__20453__auto__,c__20620__auto___24388,out){
return (function() {
var cljs$core$async$state_machine__20454__auto__ = null;
var cljs$core$async$state_machine__20454__auto____0 = (function (){
var statearr_24383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24383[(0)] = cljs$core$async$state_machine__20454__auto__);

(statearr_24383[(1)] = (1));

return statearr_24383;
});
var cljs$core$async$state_machine__20454__auto____1 = (function (state_24360){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_24360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e24384){if((e24384 instanceof Object)){
var ex__20457__auto__ = e24384;
var statearr_24385_24403 = state_24360;
(statearr_24385_24403[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24404 = state_24360;
state_24360 = G__24404;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
cljs$core$async$state_machine__20454__auto__ = function(state_24360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20454__auto____1.call(this,state_24360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20454__auto____0;
cljs$core$async$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20454__auto____1;
return cljs$core$async$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___24388,out))
})();
var state__20622__auto__ = (function (){var statearr_24386 = f__20621__auto__.call(null);
(statearr_24386[(6)] = c__20620__auto___24388);

return statearr_24386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___24388,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
