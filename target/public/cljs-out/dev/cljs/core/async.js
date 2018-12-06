// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33585 = arguments.length;
switch (G__33585) {
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
if(typeof cljs.core.async.t_cljs$core$async33586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33586 = (function (f,blockable,meta33587){
this.f = f;
this.blockable = blockable;
this.meta33587 = meta33587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33588,meta33587__$1){
var self__ = this;
var _33588__$1 = this;
return (new cljs.core.async.t_cljs$core$async33586(self__.f,self__.blockable,meta33587__$1));
});

cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33588){
var self__ = this;
var _33588__$1 = this;
return self__.meta33587;
});

cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33587","meta33587",30624905,null)], null);
});

cljs.core.async.t_cljs$core$async33586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33586";

cljs.core.async.t_cljs$core$async33586.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async33586");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33586.
 */
cljs.core.async.__GT_t_cljs$core$async33586 = (function cljs$core$async$__GT_t_cljs$core$async33586(f__$1,blockable__$1,meta33587){
return (new cljs.core.async.t_cljs$core$async33586(f__$1,blockable__$1,meta33587));
});

}

return (new cljs.core.async.t_cljs$core$async33586(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33592 = arguments.length;
switch (G__33592) {
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
var G__33595 = arguments.length;
switch (G__33595) {
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
var G__33598 = arguments.length;
switch (G__33598) {
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
var val_33600 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33600);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33600,ret){
return (function (){
return fn1.call(null,val_33600);
});})(val_33600,ret))
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
var G__33602 = arguments.length;
switch (G__33602) {
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
var n__4376__auto___33604 = n;
var x_33605 = (0);
while(true){
if((x_33605 < n__4376__auto___33604)){
(a[x_33605] = (0));

var G__33606 = (x_33605 + (1));
x_33605 = G__33606;
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

var G__33607 = (i + (1));
i = G__33607;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33608 = (function (flag,meta33609){
this.flag = flag;
this.meta33609 = meta33609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33610,meta33609__$1){
var self__ = this;
var _33610__$1 = this;
return (new cljs.core.async.t_cljs$core$async33608(self__.flag,meta33609__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33610){
var self__ = this;
var _33610__$1 = this;
return self__.meta33609;
});})(flag))
;

cljs.core.async.t_cljs$core$async33608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33608.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33609","meta33609",-540970328,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33608";

cljs.core.async.t_cljs$core$async33608.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async33608");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33608.
 */
cljs.core.async.__GT_t_cljs$core$async33608 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33608(flag__$1,meta33609){
return (new cljs.core.async.t_cljs$core$async33608(flag__$1,meta33609));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33608(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33611 = (function (flag,cb,meta33612){
this.flag = flag;
this.cb = cb;
this.meta33612 = meta33612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33613,meta33612__$1){
var self__ = this;
var _33613__$1 = this;
return (new cljs.core.async.t_cljs$core$async33611(self__.flag,self__.cb,meta33612__$1));
});

cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33613){
var self__ = this;
var _33613__$1 = this;
return self__.meta33612;
});

cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33612","meta33612",819460152,null)], null);
});

cljs.core.async.t_cljs$core$async33611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33611";

cljs.core.async.t_cljs$core$async33611.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async33611");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33611.
 */
cljs.core.async.__GT_t_cljs$core$async33611 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33611(flag__$1,cb__$1,meta33612){
return (new cljs.core.async.t_cljs$core$async33611(flag__$1,cb__$1,meta33612));
});

}

return (new cljs.core.async.t_cljs$core$async33611(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33614_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33614_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33615_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33615_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33616 = (i + (1));
i = G__33616;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
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
var args__4502__auto__ = [];
var len__4499__auto___33622 = arguments.length;
var i__4500__auto___33623 = (0);
while(true){
if((i__4500__auto___33623 < len__4499__auto___33622)){
args__4502__auto__.push((arguments[i__4500__auto___33623]));

var G__33624 = (i__4500__auto___33623 + (1));
i__4500__auto___33623 = G__33624;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33619){
var map__33620 = p__33619;
var map__33620__$1 = ((((!((map__33620 == null)))?(((((map__33620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33620):map__33620);
var opts = map__33620__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33617){
var G__33618 = cljs.core.first.call(null,seq33617);
var seq33617__$1 = cljs.core.next.call(null,seq33617);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33618,seq33617__$1);
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
var G__33626 = arguments.length;
switch (G__33626) {
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
var c__13946__auto___33672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___33672){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___33672){
return (function (state_33650){
var state_val_33651 = (state_33650[(1)]);
if((state_val_33651 === (7))){
var inst_33646 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33652_33673 = state_33650__$1;
(statearr_33652_33673[(2)] = inst_33646);

(statearr_33652_33673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (1))){
var state_33650__$1 = state_33650;
var statearr_33653_33674 = state_33650__$1;
(statearr_33653_33674[(2)] = null);

(statearr_33653_33674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (4))){
var inst_33629 = (state_33650[(7)]);
var inst_33629__$1 = (state_33650[(2)]);
var inst_33630 = (inst_33629__$1 == null);
var state_33650__$1 = (function (){var statearr_33654 = state_33650;
(statearr_33654[(7)] = inst_33629__$1);

return statearr_33654;
})();
if(cljs.core.truth_(inst_33630)){
var statearr_33655_33675 = state_33650__$1;
(statearr_33655_33675[(1)] = (5));

} else {
var statearr_33656_33676 = state_33650__$1;
(statearr_33656_33676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (13))){
var state_33650__$1 = state_33650;
var statearr_33657_33677 = state_33650__$1;
(statearr_33657_33677[(2)] = null);

(statearr_33657_33677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (6))){
var inst_33629 = (state_33650[(7)]);
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33650__$1,(11),to,inst_33629);
} else {
if((state_val_33651 === (3))){
var inst_33648 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33650__$1,inst_33648);
} else {
if((state_val_33651 === (12))){
var state_33650__$1 = state_33650;
var statearr_33658_33678 = state_33650__$1;
(statearr_33658_33678[(2)] = null);

(statearr_33658_33678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (2))){
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33650__$1,(4),from);
} else {
if((state_val_33651 === (11))){
var inst_33639 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
if(cljs.core.truth_(inst_33639)){
var statearr_33659_33679 = state_33650__$1;
(statearr_33659_33679[(1)] = (12));

} else {
var statearr_33660_33680 = state_33650__$1;
(statearr_33660_33680[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (9))){
var state_33650__$1 = state_33650;
var statearr_33661_33681 = state_33650__$1;
(statearr_33661_33681[(2)] = null);

(statearr_33661_33681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (5))){
var state_33650__$1 = state_33650;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33662_33682 = state_33650__$1;
(statearr_33662_33682[(1)] = (8));

} else {
var statearr_33663_33683 = state_33650__$1;
(statearr_33663_33683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (14))){
var inst_33644 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33664_33684 = state_33650__$1;
(statearr_33664_33684[(2)] = inst_33644);

(statearr_33664_33684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (10))){
var inst_33636 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33665_33685 = state_33650__$1;
(statearr_33665_33685[(2)] = inst_33636);

(statearr_33665_33685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (8))){
var inst_33633 = cljs.core.async.close_BANG_.call(null,to);
var state_33650__$1 = state_33650;
var statearr_33666_33686 = state_33650__$1;
(statearr_33666_33686[(2)] = inst_33633);

(statearr_33666_33686[(1)] = (10));


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
});})(c__13946__auto___33672))
;
return ((function (switch__13856__auto__,c__13946__auto___33672){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_33667 = [null,null,null,null,null,null,null,null];
(statearr_33667[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_33667[(1)] = (1));

return statearr_33667;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_33650){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_33650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e33668){if((e33668 instanceof Object)){
var ex__13860__auto__ = e33668;
var statearr_33669_33687 = state_33650;
(statearr_33669_33687[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33688 = state_33650;
state_33650 = G__33688;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_33650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_33650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___33672))
})();
var state__13948__auto__ = (function (){var statearr_33670 = f__13947__auto__.call(null);
(statearr_33670[(6)] = c__13946__auto___33672);

return statearr_33670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___33672))
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
var process__$1 = ((function (jobs,results){
return (function (p__33689){
var vec__33690 = p__33689;
var v = cljs.core.nth.call(null,vec__33690,(0),null);
var p = cljs.core.nth.call(null,vec__33690,(1),null);
var job = vec__33690;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13946__auto___33861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___33861,res,vec__33690,v,p,job,jobs,results){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___33861,res,vec__33690,v,p,job,jobs,results){
return (function (state_33697){
var state_val_33698 = (state_33697[(1)]);
if((state_val_33698 === (1))){
var state_33697__$1 = state_33697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33697__$1,(2),res,v);
} else {
if((state_val_33698 === (2))){
var inst_33694 = (state_33697[(2)]);
var inst_33695 = cljs.core.async.close_BANG_.call(null,res);
var state_33697__$1 = (function (){var statearr_33699 = state_33697;
(statearr_33699[(7)] = inst_33694);

return statearr_33699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33697__$1,inst_33695);
} else {
return null;
}
}
});})(c__13946__auto___33861,res,vec__33690,v,p,job,jobs,results))
;
return ((function (switch__13856__auto__,c__13946__auto___33861,res,vec__33690,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0 = (function (){
var statearr_33700 = [null,null,null,null,null,null,null,null];
(statearr_33700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__);

(statearr_33700[(1)] = (1));

return statearr_33700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1 = (function (state_33697){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_33697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e33701){if((e33701 instanceof Object)){
var ex__13860__auto__ = e33701;
var statearr_33702_33862 = state_33697;
(statearr_33702_33862[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33863 = state_33697;
state_33697 = G__33863;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = function(state_33697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1.call(this,state_33697);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___33861,res,vec__33690,v,p,job,jobs,results))
})();
var state__13948__auto__ = (function (){var statearr_33703 = f__13947__auto__.call(null);
(statearr_33703[(6)] = c__13946__auto___33861);

return statearr_33703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___33861,res,vec__33690,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__33704){
var vec__33705 = p__33704;
var v = cljs.core.nth.call(null,vec__33705,(0),null);
var p = cljs.core.nth.call(null,vec__33705,(1),null);
var job = vec__33705;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__4376__auto___33864 = n;
var __33865 = (0);
while(true){
if((__33865 < n__4376__auto___33864)){
var G__33708_33866 = type;
var G__33708_33867__$1 = (((G__33708_33866 instanceof cljs.core.Keyword))?G__33708_33866.fqn:null);
switch (G__33708_33867__$1) {
case "compute":
var c__13946__auto___33869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33865,c__13946__auto___33869,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (__33865,c__13946__auto___33869,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async){
return (function (state_33721){
var state_val_33722 = (state_33721[(1)]);
if((state_val_33722 === (1))){
var state_33721__$1 = state_33721;
var statearr_33723_33870 = state_33721__$1;
(statearr_33723_33870[(2)] = null);

(statearr_33723_33870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (2))){
var state_33721__$1 = state_33721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33721__$1,(4),jobs);
} else {
if((state_val_33722 === (3))){
var inst_33719 = (state_33721[(2)]);
var state_33721__$1 = state_33721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33721__$1,inst_33719);
} else {
if((state_val_33722 === (4))){
var inst_33711 = (state_33721[(2)]);
var inst_33712 = process__$1.call(null,inst_33711);
var state_33721__$1 = state_33721;
if(cljs.core.truth_(inst_33712)){
var statearr_33724_33871 = state_33721__$1;
(statearr_33724_33871[(1)] = (5));

} else {
var statearr_33725_33872 = state_33721__$1;
(statearr_33725_33872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (5))){
var state_33721__$1 = state_33721;
var statearr_33726_33873 = state_33721__$1;
(statearr_33726_33873[(2)] = null);

(statearr_33726_33873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (6))){
var state_33721__$1 = state_33721;
var statearr_33727_33874 = state_33721__$1;
(statearr_33727_33874[(2)] = null);

(statearr_33727_33874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33722 === (7))){
var inst_33717 = (state_33721[(2)]);
var state_33721__$1 = state_33721;
var statearr_33728_33875 = state_33721__$1;
(statearr_33728_33875[(2)] = inst_33717);

(statearr_33728_33875[(1)] = (3));


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
});})(__33865,c__13946__auto___33869,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async))
;
return ((function (__33865,switch__13856__auto__,c__13946__auto___33869,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0 = (function (){
var statearr_33729 = [null,null,null,null,null,null,null];
(statearr_33729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__);

(statearr_33729[(1)] = (1));

return statearr_33729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1 = (function (state_33721){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_33721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e33730){if((e33730 instanceof Object)){
var ex__13860__auto__ = e33730;
var statearr_33731_33876 = state_33721;
(statearr_33731_33876[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33877 = state_33721;
state_33721 = G__33877;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = function(state_33721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1.call(this,state_33721);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__;
})()
;})(__33865,switch__13856__auto__,c__13946__auto___33869,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async))
})();
var state__13948__auto__ = (function (){var statearr_33732 = f__13947__auto__.call(null);
(statearr_33732[(6)] = c__13946__auto___33869);

return statearr_33732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(__33865,c__13946__auto___33869,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async))
);


break;
case "async":
var c__13946__auto___33878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33865,c__13946__auto___33878,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (__33865,c__13946__auto___33878,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async){
return (function (state_33745){
var state_val_33746 = (state_33745[(1)]);
if((state_val_33746 === (1))){
var state_33745__$1 = state_33745;
var statearr_33747_33879 = state_33745__$1;
(statearr_33747_33879[(2)] = null);

(statearr_33747_33879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (2))){
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33745__$1,(4),jobs);
} else {
if((state_val_33746 === (3))){
var inst_33743 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33745__$1,inst_33743);
} else {
if((state_val_33746 === (4))){
var inst_33735 = (state_33745[(2)]);
var inst_33736 = async.call(null,inst_33735);
var state_33745__$1 = state_33745;
if(cljs.core.truth_(inst_33736)){
var statearr_33748_33880 = state_33745__$1;
(statearr_33748_33880[(1)] = (5));

} else {
var statearr_33749_33881 = state_33745__$1;
(statearr_33749_33881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (5))){
var state_33745__$1 = state_33745;
var statearr_33750_33882 = state_33745__$1;
(statearr_33750_33882[(2)] = null);

(statearr_33750_33882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (6))){
var state_33745__$1 = state_33745;
var statearr_33751_33883 = state_33745__$1;
(statearr_33751_33883[(2)] = null);

(statearr_33751_33883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (7))){
var inst_33741 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33752_33884 = state_33745__$1;
(statearr_33752_33884[(2)] = inst_33741);

(statearr_33752_33884[(1)] = (3));


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
});})(__33865,c__13946__auto___33878,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async))
;
return ((function (__33865,switch__13856__auto__,c__13946__auto___33878,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0 = (function (){
var statearr_33753 = [null,null,null,null,null,null,null];
(statearr_33753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__);

(statearr_33753[(1)] = (1));

return statearr_33753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1 = (function (state_33745){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_33745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e33754){if((e33754 instanceof Object)){
var ex__13860__auto__ = e33754;
var statearr_33755_33885 = state_33745;
(statearr_33755_33885[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33886 = state_33745;
state_33745 = G__33886;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = function(state_33745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1.call(this,state_33745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__;
})()
;})(__33865,switch__13856__auto__,c__13946__auto___33878,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async))
})();
var state__13948__auto__ = (function (){var statearr_33756 = f__13947__auto__.call(null);
(statearr_33756[(6)] = c__13946__auto___33878);

return statearr_33756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(__33865,c__13946__auto___33878,G__33708_33866,G__33708_33867__$1,n__4376__auto___33864,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33708_33867__$1)].join('')));

}

var G__33887 = (__33865 + (1));
__33865 = G__33887;
continue;
} else {
}
break;
}

var c__13946__auto___33888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___33888,jobs,results,process__$1,async){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___33888,jobs,results,process__$1,async){
return (function (state_33778){
var state_val_33779 = (state_33778[(1)]);
if((state_val_33779 === (1))){
var state_33778__$1 = state_33778;
var statearr_33780_33889 = state_33778__$1;
(statearr_33780_33889[(2)] = null);

(statearr_33780_33889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (2))){
var state_33778__$1 = state_33778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33778__$1,(4),from);
} else {
if((state_val_33779 === (3))){
var inst_33776 = (state_33778[(2)]);
var state_33778__$1 = state_33778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33778__$1,inst_33776);
} else {
if((state_val_33779 === (4))){
var inst_33759 = (state_33778[(7)]);
var inst_33759__$1 = (state_33778[(2)]);
var inst_33760 = (inst_33759__$1 == null);
var state_33778__$1 = (function (){var statearr_33781 = state_33778;
(statearr_33781[(7)] = inst_33759__$1);

return statearr_33781;
})();
if(cljs.core.truth_(inst_33760)){
var statearr_33782_33890 = state_33778__$1;
(statearr_33782_33890[(1)] = (5));

} else {
var statearr_33783_33891 = state_33778__$1;
(statearr_33783_33891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (5))){
var inst_33762 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33778__$1 = state_33778;
var statearr_33784_33892 = state_33778__$1;
(statearr_33784_33892[(2)] = inst_33762);

(statearr_33784_33892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (6))){
var inst_33764 = (state_33778[(8)]);
var inst_33759 = (state_33778[(7)]);
var inst_33764__$1 = cljs.core.async.chan.call(null,(1));
var inst_33765 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33766 = [inst_33759,inst_33764__$1];
var inst_33767 = (new cljs.core.PersistentVector(null,2,(5),inst_33765,inst_33766,null));
var state_33778__$1 = (function (){var statearr_33785 = state_33778;
(statearr_33785[(8)] = inst_33764__$1);

return statearr_33785;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33778__$1,(8),jobs,inst_33767);
} else {
if((state_val_33779 === (7))){
var inst_33774 = (state_33778[(2)]);
var state_33778__$1 = state_33778;
var statearr_33786_33893 = state_33778__$1;
(statearr_33786_33893[(2)] = inst_33774);

(statearr_33786_33893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (8))){
var inst_33764 = (state_33778[(8)]);
var inst_33769 = (state_33778[(2)]);
var state_33778__$1 = (function (){var statearr_33787 = state_33778;
(statearr_33787[(9)] = inst_33769);

return statearr_33787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33778__$1,(9),results,inst_33764);
} else {
if((state_val_33779 === (9))){
var inst_33771 = (state_33778[(2)]);
var state_33778__$1 = (function (){var statearr_33788 = state_33778;
(statearr_33788[(10)] = inst_33771);

return statearr_33788;
})();
var statearr_33789_33894 = state_33778__$1;
(statearr_33789_33894[(2)] = null);

(statearr_33789_33894[(1)] = (2));


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
});})(c__13946__auto___33888,jobs,results,process__$1,async))
;
return ((function (switch__13856__auto__,c__13946__auto___33888,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0 = (function (){
var statearr_33790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__);

(statearr_33790[(1)] = (1));

return statearr_33790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1 = (function (state_33778){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_33778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e33791){if((e33791 instanceof Object)){
var ex__13860__auto__ = e33791;
var statearr_33792_33895 = state_33778;
(statearr_33792_33895[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33896 = state_33778;
state_33778 = G__33896;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = function(state_33778){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1.call(this,state_33778);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___33888,jobs,results,process__$1,async))
})();
var state__13948__auto__ = (function (){var statearr_33793 = f__13947__auto__.call(null);
(statearr_33793[(6)] = c__13946__auto___33888);

return statearr_33793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___33888,jobs,results,process__$1,async))
);


var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__,jobs,results,process__$1,async){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__,jobs,results,process__$1,async){
return (function (state_33831){
var state_val_33832 = (state_33831[(1)]);
if((state_val_33832 === (7))){
var inst_33827 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33833_33897 = state_33831__$1;
(statearr_33833_33897[(2)] = inst_33827);

(statearr_33833_33897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (20))){
var state_33831__$1 = state_33831;
var statearr_33834_33898 = state_33831__$1;
(statearr_33834_33898[(2)] = null);

(statearr_33834_33898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (1))){
var state_33831__$1 = state_33831;
var statearr_33835_33899 = state_33831__$1;
(statearr_33835_33899[(2)] = null);

(statearr_33835_33899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (4))){
var inst_33796 = (state_33831[(7)]);
var inst_33796__$1 = (state_33831[(2)]);
var inst_33797 = (inst_33796__$1 == null);
var state_33831__$1 = (function (){var statearr_33836 = state_33831;
(statearr_33836[(7)] = inst_33796__$1);

return statearr_33836;
})();
if(cljs.core.truth_(inst_33797)){
var statearr_33837_33900 = state_33831__$1;
(statearr_33837_33900[(1)] = (5));

} else {
var statearr_33838_33901 = state_33831__$1;
(statearr_33838_33901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (15))){
var inst_33809 = (state_33831[(8)]);
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33831__$1,(18),to,inst_33809);
} else {
if((state_val_33832 === (21))){
var inst_33822 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33839_33902 = state_33831__$1;
(statearr_33839_33902[(2)] = inst_33822);

(statearr_33839_33902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (13))){
var inst_33824 = (state_33831[(2)]);
var state_33831__$1 = (function (){var statearr_33840 = state_33831;
(statearr_33840[(9)] = inst_33824);

return statearr_33840;
})();
var statearr_33841_33903 = state_33831__$1;
(statearr_33841_33903[(2)] = null);

(statearr_33841_33903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (6))){
var inst_33796 = (state_33831[(7)]);
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33831__$1,(11),inst_33796);
} else {
if((state_val_33832 === (17))){
var inst_33817 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
if(cljs.core.truth_(inst_33817)){
var statearr_33842_33904 = state_33831__$1;
(statearr_33842_33904[(1)] = (19));

} else {
var statearr_33843_33905 = state_33831__$1;
(statearr_33843_33905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (3))){
var inst_33829 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33831__$1,inst_33829);
} else {
if((state_val_33832 === (12))){
var inst_33806 = (state_33831[(10)]);
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33831__$1,(14),inst_33806);
} else {
if((state_val_33832 === (2))){
var state_33831__$1 = state_33831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33831__$1,(4),results);
} else {
if((state_val_33832 === (19))){
var state_33831__$1 = state_33831;
var statearr_33844_33906 = state_33831__$1;
(statearr_33844_33906[(2)] = null);

(statearr_33844_33906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (11))){
var inst_33806 = (state_33831[(2)]);
var state_33831__$1 = (function (){var statearr_33845 = state_33831;
(statearr_33845[(10)] = inst_33806);

return statearr_33845;
})();
var statearr_33846_33907 = state_33831__$1;
(statearr_33846_33907[(2)] = null);

(statearr_33846_33907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (9))){
var state_33831__$1 = state_33831;
var statearr_33847_33908 = state_33831__$1;
(statearr_33847_33908[(2)] = null);

(statearr_33847_33908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (5))){
var state_33831__$1 = state_33831;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33848_33909 = state_33831__$1;
(statearr_33848_33909[(1)] = (8));

} else {
var statearr_33849_33910 = state_33831__$1;
(statearr_33849_33910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (14))){
var inst_33811 = (state_33831[(11)]);
var inst_33809 = (state_33831[(8)]);
var inst_33809__$1 = (state_33831[(2)]);
var inst_33810 = (inst_33809__$1 == null);
var inst_33811__$1 = cljs.core.not.call(null,inst_33810);
var state_33831__$1 = (function (){var statearr_33850 = state_33831;
(statearr_33850[(11)] = inst_33811__$1);

(statearr_33850[(8)] = inst_33809__$1);

return statearr_33850;
})();
if(inst_33811__$1){
var statearr_33851_33911 = state_33831__$1;
(statearr_33851_33911[(1)] = (15));

} else {
var statearr_33852_33912 = state_33831__$1;
(statearr_33852_33912[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (16))){
var inst_33811 = (state_33831[(11)]);
var state_33831__$1 = state_33831;
var statearr_33853_33913 = state_33831__$1;
(statearr_33853_33913[(2)] = inst_33811);

(statearr_33853_33913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (10))){
var inst_33803 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33854_33914 = state_33831__$1;
(statearr_33854_33914[(2)] = inst_33803);

(statearr_33854_33914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (18))){
var inst_33814 = (state_33831[(2)]);
var state_33831__$1 = state_33831;
var statearr_33855_33915 = state_33831__$1;
(statearr_33855_33915[(2)] = inst_33814);

(statearr_33855_33915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33832 === (8))){
var inst_33800 = cljs.core.async.close_BANG_.call(null,to);
var state_33831__$1 = state_33831;
var statearr_33856_33916 = state_33831__$1;
(statearr_33856_33916[(2)] = inst_33800);

(statearr_33856_33916[(1)] = (10));


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
});})(c__13946__auto__,jobs,results,process__$1,async))
;
return ((function (switch__13856__auto__,c__13946__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0 = (function (){
var statearr_33857 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__);

(statearr_33857[(1)] = (1));

return statearr_33857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1 = (function (state_33831){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_33831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e33858){if((e33858 instanceof Object)){
var ex__13860__auto__ = e33858;
var statearr_33859_33917 = state_33831;
(statearr_33859_33917[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33918 = state_33831;
state_33831 = G__33918;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = function(state_33831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1.call(this,state_33831);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,jobs,results,process__$1,async))
})();
var state__13948__auto__ = (function (){var statearr_33860 = f__13947__auto__.call(null);
(statearr_33860[(6)] = c__13946__auto__);

return statearr_33860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__,jobs,results,process__$1,async))
);

return c__13946__auto__;
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
var G__33920 = arguments.length;
switch (G__33920) {
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
var G__33923 = arguments.length;
switch (G__33923) {
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
var G__33926 = arguments.length;
switch (G__33926) {
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
var c__13946__auto___33975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___33975,tc,fc){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___33975,tc,fc){
return (function (state_33952){
var state_val_33953 = (state_33952[(1)]);
if((state_val_33953 === (7))){
var inst_33948 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33954_33976 = state_33952__$1;
(statearr_33954_33976[(2)] = inst_33948);

(statearr_33954_33976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (1))){
var state_33952__$1 = state_33952;
var statearr_33955_33977 = state_33952__$1;
(statearr_33955_33977[(2)] = null);

(statearr_33955_33977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (4))){
var inst_33929 = (state_33952[(7)]);
var inst_33929__$1 = (state_33952[(2)]);
var inst_33930 = (inst_33929__$1 == null);
var state_33952__$1 = (function (){var statearr_33956 = state_33952;
(statearr_33956[(7)] = inst_33929__$1);

return statearr_33956;
})();
if(cljs.core.truth_(inst_33930)){
var statearr_33957_33978 = state_33952__$1;
(statearr_33957_33978[(1)] = (5));

} else {
var statearr_33958_33979 = state_33952__$1;
(statearr_33958_33979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (13))){
var state_33952__$1 = state_33952;
var statearr_33959_33980 = state_33952__$1;
(statearr_33959_33980[(2)] = null);

(statearr_33959_33980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (6))){
var inst_33929 = (state_33952[(7)]);
var inst_33935 = p.call(null,inst_33929);
var state_33952__$1 = state_33952;
if(cljs.core.truth_(inst_33935)){
var statearr_33960_33981 = state_33952__$1;
(statearr_33960_33981[(1)] = (9));

} else {
var statearr_33961_33982 = state_33952__$1;
(statearr_33961_33982[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (3))){
var inst_33950 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33952__$1,inst_33950);
} else {
if((state_val_33953 === (12))){
var state_33952__$1 = state_33952;
var statearr_33962_33983 = state_33952__$1;
(statearr_33962_33983[(2)] = null);

(statearr_33962_33983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (2))){
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33952__$1,(4),ch);
} else {
if((state_val_33953 === (11))){
var inst_33929 = (state_33952[(7)]);
var inst_33939 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33952__$1,(8),inst_33939,inst_33929);
} else {
if((state_val_33953 === (9))){
var state_33952__$1 = state_33952;
var statearr_33963_33984 = state_33952__$1;
(statearr_33963_33984[(2)] = tc);

(statearr_33963_33984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (5))){
var inst_33932 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33933 = cljs.core.async.close_BANG_.call(null,fc);
var state_33952__$1 = (function (){var statearr_33964 = state_33952;
(statearr_33964[(8)] = inst_33932);

return statearr_33964;
})();
var statearr_33965_33985 = state_33952__$1;
(statearr_33965_33985[(2)] = inst_33933);

(statearr_33965_33985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (14))){
var inst_33946 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33966_33986 = state_33952__$1;
(statearr_33966_33986[(2)] = inst_33946);

(statearr_33966_33986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (10))){
var state_33952__$1 = state_33952;
var statearr_33967_33987 = state_33952__$1;
(statearr_33967_33987[(2)] = fc);

(statearr_33967_33987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (8))){
var inst_33941 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
if(cljs.core.truth_(inst_33941)){
var statearr_33968_33988 = state_33952__$1;
(statearr_33968_33988[(1)] = (12));

} else {
var statearr_33969_33989 = state_33952__$1;
(statearr_33969_33989[(1)] = (13));

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
});})(c__13946__auto___33975,tc,fc))
;
return ((function (switch__13856__auto__,c__13946__auto___33975,tc,fc){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_33970 = [null,null,null,null,null,null,null,null,null];
(statearr_33970[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_33970[(1)] = (1));

return statearr_33970;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_33952){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_33952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e33971){if((e33971 instanceof Object)){
var ex__13860__auto__ = e33971;
var statearr_33972_33990 = state_33952;
(statearr_33972_33990[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33991 = state_33952;
state_33952 = G__33991;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_33952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_33952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___33975,tc,fc))
})();
var state__13948__auto__ = (function (){var statearr_33973 = f__13947__auto__.call(null);
(statearr_33973[(6)] = c__13946__auto___33975);

return statearr_33973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___33975,tc,fc))
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
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_34012){
var state_val_34013 = (state_34012[(1)]);
if((state_val_34013 === (7))){
var inst_34008 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34014_34032 = state_34012__$1;
(statearr_34014_34032[(2)] = inst_34008);

(statearr_34014_34032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (1))){
var inst_33992 = init;
var state_34012__$1 = (function (){var statearr_34015 = state_34012;
(statearr_34015[(7)] = inst_33992);

return statearr_34015;
})();
var statearr_34016_34033 = state_34012__$1;
(statearr_34016_34033[(2)] = null);

(statearr_34016_34033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (4))){
var inst_33995 = (state_34012[(8)]);
var inst_33995__$1 = (state_34012[(2)]);
var inst_33996 = (inst_33995__$1 == null);
var state_34012__$1 = (function (){var statearr_34017 = state_34012;
(statearr_34017[(8)] = inst_33995__$1);

return statearr_34017;
})();
if(cljs.core.truth_(inst_33996)){
var statearr_34018_34034 = state_34012__$1;
(statearr_34018_34034[(1)] = (5));

} else {
var statearr_34019_34035 = state_34012__$1;
(statearr_34019_34035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (6))){
var inst_33999 = (state_34012[(9)]);
var inst_33995 = (state_34012[(8)]);
var inst_33992 = (state_34012[(7)]);
var inst_33999__$1 = f.call(null,inst_33992,inst_33995);
var inst_34000 = cljs.core.reduced_QMARK_.call(null,inst_33999__$1);
var state_34012__$1 = (function (){var statearr_34020 = state_34012;
(statearr_34020[(9)] = inst_33999__$1);

return statearr_34020;
})();
if(inst_34000){
var statearr_34021_34036 = state_34012__$1;
(statearr_34021_34036[(1)] = (8));

} else {
var statearr_34022_34037 = state_34012__$1;
(statearr_34022_34037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (3))){
var inst_34010 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34012__$1,inst_34010);
} else {
if((state_val_34013 === (2))){
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34012__$1,(4),ch);
} else {
if((state_val_34013 === (9))){
var inst_33999 = (state_34012[(9)]);
var inst_33992 = inst_33999;
var state_34012__$1 = (function (){var statearr_34023 = state_34012;
(statearr_34023[(7)] = inst_33992);

return statearr_34023;
})();
var statearr_34024_34038 = state_34012__$1;
(statearr_34024_34038[(2)] = null);

(statearr_34024_34038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (5))){
var inst_33992 = (state_34012[(7)]);
var state_34012__$1 = state_34012;
var statearr_34025_34039 = state_34012__$1;
(statearr_34025_34039[(2)] = inst_33992);

(statearr_34025_34039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (10))){
var inst_34006 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34026_34040 = state_34012__$1;
(statearr_34026_34040[(2)] = inst_34006);

(statearr_34026_34040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (8))){
var inst_33999 = (state_34012[(9)]);
var inst_34002 = cljs.core.deref.call(null,inst_33999);
var state_34012__$1 = state_34012;
var statearr_34027_34041 = state_34012__$1;
(statearr_34027_34041[(2)] = inst_34002);

(statearr_34027_34041[(1)] = (10));


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
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13857__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13857__auto____0 = (function (){
var statearr_34028 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34028[(0)] = cljs$core$async$reduce_$_state_machine__13857__auto__);

(statearr_34028[(1)] = (1));

return statearr_34028;
});
var cljs$core$async$reduce_$_state_machine__13857__auto____1 = (function (state_34012){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_34012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e34029){if((e34029 instanceof Object)){
var ex__13860__auto__ = e34029;
var statearr_34030_34042 = state_34012;
(statearr_34030_34042[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34043 = state_34012;
state_34012 = G__34043;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13857__auto__ = function(state_34012){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13857__auto____1.call(this,state_34012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13857__auto____0;
cljs$core$async$reduce_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13857__auto____1;
return cljs$core$async$reduce_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_34031 = f__13947__auto__.call(null);
(statearr_34031[(6)] = c__13946__auto__);

return statearr_34031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__,f__$1){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__,f__$1){
return (function (state_34049){
var state_val_34050 = (state_34049[(1)]);
if((state_val_34050 === (1))){
var inst_34044 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34049__$1,(2),inst_34044);
} else {
if((state_val_34050 === (2))){
var inst_34046 = (state_34049[(2)]);
var inst_34047 = f__$1.call(null,inst_34046);
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34049__$1,inst_34047);
} else {
return null;
}
}
});})(c__13946__auto__,f__$1))
;
return ((function (switch__13856__auto__,c__13946__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13857__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13857__auto____0 = (function (){
var statearr_34051 = [null,null,null,null,null,null,null];
(statearr_34051[(0)] = cljs$core$async$transduce_$_state_machine__13857__auto__);

(statearr_34051[(1)] = (1));

return statearr_34051;
});
var cljs$core$async$transduce_$_state_machine__13857__auto____1 = (function (state_34049){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_34049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e34052){if((e34052 instanceof Object)){
var ex__13860__auto__ = e34052;
var statearr_34053_34055 = state_34049;
(statearr_34053_34055[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34056 = state_34049;
state_34049 = G__34056;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13857__auto__ = function(state_34049){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13857__auto____1.call(this,state_34049);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13857__auto____0;
cljs$core$async$transduce_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13857__auto____1;
return cljs$core$async$transduce_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,f__$1))
})();
var state__13948__auto__ = (function (){var statearr_34054 = f__13947__auto__.call(null);
(statearr_34054[(6)] = c__13946__auto__);

return statearr_34054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__,f__$1))
);

return c__13946__auto__;
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
var G__34058 = arguments.length;
switch (G__34058) {
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
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_34083){
var state_val_34084 = (state_34083[(1)]);
if((state_val_34084 === (7))){
var inst_34065 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34085_34106 = state_34083__$1;
(statearr_34085_34106[(2)] = inst_34065);

(statearr_34085_34106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (1))){
var inst_34059 = cljs.core.seq.call(null,coll);
var inst_34060 = inst_34059;
var state_34083__$1 = (function (){var statearr_34086 = state_34083;
(statearr_34086[(7)] = inst_34060);

return statearr_34086;
})();
var statearr_34087_34107 = state_34083__$1;
(statearr_34087_34107[(2)] = null);

(statearr_34087_34107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (4))){
var inst_34060 = (state_34083[(7)]);
var inst_34063 = cljs.core.first.call(null,inst_34060);
var state_34083__$1 = state_34083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34083__$1,(7),ch,inst_34063);
} else {
if((state_val_34084 === (13))){
var inst_34077 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34088_34108 = state_34083__$1;
(statearr_34088_34108[(2)] = inst_34077);

(statearr_34088_34108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (6))){
var inst_34068 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
if(cljs.core.truth_(inst_34068)){
var statearr_34089_34109 = state_34083__$1;
(statearr_34089_34109[(1)] = (8));

} else {
var statearr_34090_34110 = state_34083__$1;
(statearr_34090_34110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (3))){
var inst_34081 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34083__$1,inst_34081);
} else {
if((state_val_34084 === (12))){
var state_34083__$1 = state_34083;
var statearr_34091_34111 = state_34083__$1;
(statearr_34091_34111[(2)] = null);

(statearr_34091_34111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (2))){
var inst_34060 = (state_34083[(7)]);
var state_34083__$1 = state_34083;
if(cljs.core.truth_(inst_34060)){
var statearr_34092_34112 = state_34083__$1;
(statearr_34092_34112[(1)] = (4));

} else {
var statearr_34093_34113 = state_34083__$1;
(statearr_34093_34113[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (11))){
var inst_34074 = cljs.core.async.close_BANG_.call(null,ch);
var state_34083__$1 = state_34083;
var statearr_34094_34114 = state_34083__$1;
(statearr_34094_34114[(2)] = inst_34074);

(statearr_34094_34114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (9))){
var state_34083__$1 = state_34083;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34095_34115 = state_34083__$1;
(statearr_34095_34115[(1)] = (11));

} else {
var statearr_34096_34116 = state_34083__$1;
(statearr_34096_34116[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (5))){
var inst_34060 = (state_34083[(7)]);
var state_34083__$1 = state_34083;
var statearr_34097_34117 = state_34083__$1;
(statearr_34097_34117[(2)] = inst_34060);

(statearr_34097_34117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (10))){
var inst_34079 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34098_34118 = state_34083__$1;
(statearr_34098_34118[(2)] = inst_34079);

(statearr_34098_34118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (8))){
var inst_34060 = (state_34083[(7)]);
var inst_34070 = cljs.core.next.call(null,inst_34060);
var inst_34060__$1 = inst_34070;
var state_34083__$1 = (function (){var statearr_34099 = state_34083;
(statearr_34099[(7)] = inst_34060__$1);

return statearr_34099;
})();
var statearr_34100_34119 = state_34083__$1;
(statearr_34100_34119[(2)] = null);

(statearr_34100_34119[(1)] = (2));


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
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_34101 = [null,null,null,null,null,null,null,null];
(statearr_34101[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_34101[(1)] = (1));

return statearr_34101;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_34083){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_34083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e34102){if((e34102 instanceof Object)){
var ex__13860__auto__ = e34102;
var statearr_34103_34120 = state_34083;
(statearr_34103_34120[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34121 = state_34083;
state_34083 = G__34121;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_34083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_34083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_34104 = f__13947__auto__.call(null);
(statearr_34104[(6)] = c__13946__auto__);

return statearr_34104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async34122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34122 = (function (ch,cs,meta34123){
this.ch = ch;
this.cs = cs;
this.meta34123 = meta34123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34124,meta34123__$1){
var self__ = this;
var _34124__$1 = this;
return (new cljs.core.async.t_cljs$core$async34122(self__.ch,self__.cs,meta34123__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34124){
var self__ = this;
var _34124__$1 = this;
return self__.meta34123;
});})(cs))
;

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34122.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34123","meta34123",570143412,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34122";

cljs.core.async.t_cljs$core$async34122.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34122");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34122.
 */
cljs.core.async.__GT_t_cljs$core$async34122 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34122(ch__$1,cs__$1,meta34123){
return (new cljs.core.async.t_cljs$core$async34122(ch__$1,cs__$1,meta34123));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34122(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13946__auto___34344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___34344,cs,m,dchan,dctr,done){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___34344,cs,m,dchan,dctr,done){
return (function (state_34259){
var state_val_34260 = (state_34259[(1)]);
if((state_val_34260 === (7))){
var inst_34255 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34261_34345 = state_34259__$1;
(statearr_34261_34345[(2)] = inst_34255);

(statearr_34261_34345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (20))){
var inst_34158 = (state_34259[(7)]);
var inst_34170 = cljs.core.first.call(null,inst_34158);
var inst_34171 = cljs.core.nth.call(null,inst_34170,(0),null);
var inst_34172 = cljs.core.nth.call(null,inst_34170,(1),null);
var state_34259__$1 = (function (){var statearr_34262 = state_34259;
(statearr_34262[(8)] = inst_34171);

return statearr_34262;
})();
if(cljs.core.truth_(inst_34172)){
var statearr_34263_34346 = state_34259__$1;
(statearr_34263_34346[(1)] = (22));

} else {
var statearr_34264_34347 = state_34259__$1;
(statearr_34264_34347[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (27))){
var inst_34200 = (state_34259[(9)]);
var inst_34202 = (state_34259[(10)]);
var inst_34127 = (state_34259[(11)]);
var inst_34207 = (state_34259[(12)]);
var inst_34207__$1 = cljs.core._nth.call(null,inst_34200,inst_34202);
var inst_34208 = cljs.core.async.put_BANG_.call(null,inst_34207__$1,inst_34127,done);
var state_34259__$1 = (function (){var statearr_34265 = state_34259;
(statearr_34265[(12)] = inst_34207__$1);

return statearr_34265;
})();
if(cljs.core.truth_(inst_34208)){
var statearr_34266_34348 = state_34259__$1;
(statearr_34266_34348[(1)] = (30));

} else {
var statearr_34267_34349 = state_34259__$1;
(statearr_34267_34349[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (1))){
var state_34259__$1 = state_34259;
var statearr_34268_34350 = state_34259__$1;
(statearr_34268_34350[(2)] = null);

(statearr_34268_34350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (24))){
var inst_34158 = (state_34259[(7)]);
var inst_34177 = (state_34259[(2)]);
var inst_34178 = cljs.core.next.call(null,inst_34158);
var inst_34136 = inst_34178;
var inst_34137 = null;
var inst_34138 = (0);
var inst_34139 = (0);
var state_34259__$1 = (function (){var statearr_34269 = state_34259;
(statearr_34269[(13)] = inst_34136);

(statearr_34269[(14)] = inst_34139);

(statearr_34269[(15)] = inst_34137);

(statearr_34269[(16)] = inst_34138);

(statearr_34269[(17)] = inst_34177);

return statearr_34269;
})();
var statearr_34270_34351 = state_34259__$1;
(statearr_34270_34351[(2)] = null);

(statearr_34270_34351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (39))){
var state_34259__$1 = state_34259;
var statearr_34274_34352 = state_34259__$1;
(statearr_34274_34352[(2)] = null);

(statearr_34274_34352[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (4))){
var inst_34127 = (state_34259[(11)]);
var inst_34127__$1 = (state_34259[(2)]);
var inst_34128 = (inst_34127__$1 == null);
var state_34259__$1 = (function (){var statearr_34275 = state_34259;
(statearr_34275[(11)] = inst_34127__$1);

return statearr_34275;
})();
if(cljs.core.truth_(inst_34128)){
var statearr_34276_34353 = state_34259__$1;
(statearr_34276_34353[(1)] = (5));

} else {
var statearr_34277_34354 = state_34259__$1;
(statearr_34277_34354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (15))){
var inst_34136 = (state_34259[(13)]);
var inst_34139 = (state_34259[(14)]);
var inst_34137 = (state_34259[(15)]);
var inst_34138 = (state_34259[(16)]);
var inst_34154 = (state_34259[(2)]);
var inst_34155 = (inst_34139 + (1));
var tmp34271 = inst_34136;
var tmp34272 = inst_34137;
var tmp34273 = inst_34138;
var inst_34136__$1 = tmp34271;
var inst_34137__$1 = tmp34272;
var inst_34138__$1 = tmp34273;
var inst_34139__$1 = inst_34155;
var state_34259__$1 = (function (){var statearr_34278 = state_34259;
(statearr_34278[(13)] = inst_34136__$1);

(statearr_34278[(14)] = inst_34139__$1);

(statearr_34278[(18)] = inst_34154);

(statearr_34278[(15)] = inst_34137__$1);

(statearr_34278[(16)] = inst_34138__$1);

return statearr_34278;
})();
var statearr_34279_34355 = state_34259__$1;
(statearr_34279_34355[(2)] = null);

(statearr_34279_34355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (21))){
var inst_34181 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34283_34356 = state_34259__$1;
(statearr_34283_34356[(2)] = inst_34181);

(statearr_34283_34356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (31))){
var inst_34207 = (state_34259[(12)]);
var inst_34211 = done.call(null,null);
var inst_34212 = cljs.core.async.untap_STAR_.call(null,m,inst_34207);
var state_34259__$1 = (function (){var statearr_34284 = state_34259;
(statearr_34284[(19)] = inst_34211);

return statearr_34284;
})();
var statearr_34285_34357 = state_34259__$1;
(statearr_34285_34357[(2)] = inst_34212);

(statearr_34285_34357[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (32))){
var inst_34199 = (state_34259[(20)]);
var inst_34200 = (state_34259[(9)]);
var inst_34202 = (state_34259[(10)]);
var inst_34201 = (state_34259[(21)]);
var inst_34214 = (state_34259[(2)]);
var inst_34215 = (inst_34202 + (1));
var tmp34280 = inst_34199;
var tmp34281 = inst_34200;
var tmp34282 = inst_34201;
var inst_34199__$1 = tmp34280;
var inst_34200__$1 = tmp34281;
var inst_34201__$1 = tmp34282;
var inst_34202__$1 = inst_34215;
var state_34259__$1 = (function (){var statearr_34286 = state_34259;
(statearr_34286[(20)] = inst_34199__$1);

(statearr_34286[(9)] = inst_34200__$1);

(statearr_34286[(10)] = inst_34202__$1);

(statearr_34286[(21)] = inst_34201__$1);

(statearr_34286[(22)] = inst_34214);

return statearr_34286;
})();
var statearr_34287_34358 = state_34259__$1;
(statearr_34287_34358[(2)] = null);

(statearr_34287_34358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (40))){
var inst_34227 = (state_34259[(23)]);
var inst_34231 = done.call(null,null);
var inst_34232 = cljs.core.async.untap_STAR_.call(null,m,inst_34227);
var state_34259__$1 = (function (){var statearr_34288 = state_34259;
(statearr_34288[(24)] = inst_34231);

return statearr_34288;
})();
var statearr_34289_34359 = state_34259__$1;
(statearr_34289_34359[(2)] = inst_34232);

(statearr_34289_34359[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (33))){
var inst_34218 = (state_34259[(25)]);
var inst_34220 = cljs.core.chunked_seq_QMARK_.call(null,inst_34218);
var state_34259__$1 = state_34259;
if(inst_34220){
var statearr_34290_34360 = state_34259__$1;
(statearr_34290_34360[(1)] = (36));

} else {
var statearr_34291_34361 = state_34259__$1;
(statearr_34291_34361[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (13))){
var inst_34148 = (state_34259[(26)]);
var inst_34151 = cljs.core.async.close_BANG_.call(null,inst_34148);
var state_34259__$1 = state_34259;
var statearr_34292_34362 = state_34259__$1;
(statearr_34292_34362[(2)] = inst_34151);

(statearr_34292_34362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (22))){
var inst_34171 = (state_34259[(8)]);
var inst_34174 = cljs.core.async.close_BANG_.call(null,inst_34171);
var state_34259__$1 = state_34259;
var statearr_34293_34363 = state_34259__$1;
(statearr_34293_34363[(2)] = inst_34174);

(statearr_34293_34363[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (36))){
var inst_34218 = (state_34259[(25)]);
var inst_34222 = cljs.core.chunk_first.call(null,inst_34218);
var inst_34223 = cljs.core.chunk_rest.call(null,inst_34218);
var inst_34224 = cljs.core.count.call(null,inst_34222);
var inst_34199 = inst_34223;
var inst_34200 = inst_34222;
var inst_34201 = inst_34224;
var inst_34202 = (0);
var state_34259__$1 = (function (){var statearr_34294 = state_34259;
(statearr_34294[(20)] = inst_34199);

(statearr_34294[(9)] = inst_34200);

(statearr_34294[(10)] = inst_34202);

(statearr_34294[(21)] = inst_34201);

return statearr_34294;
})();
var statearr_34295_34364 = state_34259__$1;
(statearr_34295_34364[(2)] = null);

(statearr_34295_34364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (41))){
var inst_34218 = (state_34259[(25)]);
var inst_34234 = (state_34259[(2)]);
var inst_34235 = cljs.core.next.call(null,inst_34218);
var inst_34199 = inst_34235;
var inst_34200 = null;
var inst_34201 = (0);
var inst_34202 = (0);
var state_34259__$1 = (function (){var statearr_34296 = state_34259;
(statearr_34296[(20)] = inst_34199);

(statearr_34296[(9)] = inst_34200);

(statearr_34296[(27)] = inst_34234);

(statearr_34296[(10)] = inst_34202);

(statearr_34296[(21)] = inst_34201);

return statearr_34296;
})();
var statearr_34297_34365 = state_34259__$1;
(statearr_34297_34365[(2)] = null);

(statearr_34297_34365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (43))){
var state_34259__$1 = state_34259;
var statearr_34298_34366 = state_34259__$1;
(statearr_34298_34366[(2)] = null);

(statearr_34298_34366[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (29))){
var inst_34243 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34299_34367 = state_34259__$1;
(statearr_34299_34367[(2)] = inst_34243);

(statearr_34299_34367[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (44))){
var inst_34252 = (state_34259[(2)]);
var state_34259__$1 = (function (){var statearr_34300 = state_34259;
(statearr_34300[(28)] = inst_34252);

return statearr_34300;
})();
var statearr_34301_34368 = state_34259__$1;
(statearr_34301_34368[(2)] = null);

(statearr_34301_34368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (6))){
var inst_34191 = (state_34259[(29)]);
var inst_34190 = cljs.core.deref.call(null,cs);
var inst_34191__$1 = cljs.core.keys.call(null,inst_34190);
var inst_34192 = cljs.core.count.call(null,inst_34191__$1);
var inst_34193 = cljs.core.reset_BANG_.call(null,dctr,inst_34192);
var inst_34198 = cljs.core.seq.call(null,inst_34191__$1);
var inst_34199 = inst_34198;
var inst_34200 = null;
var inst_34201 = (0);
var inst_34202 = (0);
var state_34259__$1 = (function (){var statearr_34302 = state_34259;
(statearr_34302[(20)] = inst_34199);

(statearr_34302[(9)] = inst_34200);

(statearr_34302[(10)] = inst_34202);

(statearr_34302[(30)] = inst_34193);

(statearr_34302[(21)] = inst_34201);

(statearr_34302[(29)] = inst_34191__$1);

return statearr_34302;
})();
var statearr_34303_34369 = state_34259__$1;
(statearr_34303_34369[(2)] = null);

(statearr_34303_34369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (28))){
var inst_34199 = (state_34259[(20)]);
var inst_34218 = (state_34259[(25)]);
var inst_34218__$1 = cljs.core.seq.call(null,inst_34199);
var state_34259__$1 = (function (){var statearr_34304 = state_34259;
(statearr_34304[(25)] = inst_34218__$1);

return statearr_34304;
})();
if(inst_34218__$1){
var statearr_34305_34370 = state_34259__$1;
(statearr_34305_34370[(1)] = (33));

} else {
var statearr_34306_34371 = state_34259__$1;
(statearr_34306_34371[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (25))){
var inst_34202 = (state_34259[(10)]);
var inst_34201 = (state_34259[(21)]);
var inst_34204 = (inst_34202 < inst_34201);
var inst_34205 = inst_34204;
var state_34259__$1 = state_34259;
if(cljs.core.truth_(inst_34205)){
var statearr_34307_34372 = state_34259__$1;
(statearr_34307_34372[(1)] = (27));

} else {
var statearr_34308_34373 = state_34259__$1;
(statearr_34308_34373[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (34))){
var state_34259__$1 = state_34259;
var statearr_34309_34374 = state_34259__$1;
(statearr_34309_34374[(2)] = null);

(statearr_34309_34374[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (17))){
var state_34259__$1 = state_34259;
var statearr_34310_34375 = state_34259__$1;
(statearr_34310_34375[(2)] = null);

(statearr_34310_34375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (3))){
var inst_34257 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34259__$1,inst_34257);
} else {
if((state_val_34260 === (12))){
var inst_34186 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34311_34376 = state_34259__$1;
(statearr_34311_34376[(2)] = inst_34186);

(statearr_34311_34376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (2))){
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34259__$1,(4),ch);
} else {
if((state_val_34260 === (23))){
var state_34259__$1 = state_34259;
var statearr_34312_34377 = state_34259__$1;
(statearr_34312_34377[(2)] = null);

(statearr_34312_34377[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (35))){
var inst_34241 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34313_34378 = state_34259__$1;
(statearr_34313_34378[(2)] = inst_34241);

(statearr_34313_34378[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (19))){
var inst_34158 = (state_34259[(7)]);
var inst_34162 = cljs.core.chunk_first.call(null,inst_34158);
var inst_34163 = cljs.core.chunk_rest.call(null,inst_34158);
var inst_34164 = cljs.core.count.call(null,inst_34162);
var inst_34136 = inst_34163;
var inst_34137 = inst_34162;
var inst_34138 = inst_34164;
var inst_34139 = (0);
var state_34259__$1 = (function (){var statearr_34314 = state_34259;
(statearr_34314[(13)] = inst_34136);

(statearr_34314[(14)] = inst_34139);

(statearr_34314[(15)] = inst_34137);

(statearr_34314[(16)] = inst_34138);

return statearr_34314;
})();
var statearr_34315_34379 = state_34259__$1;
(statearr_34315_34379[(2)] = null);

(statearr_34315_34379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (11))){
var inst_34158 = (state_34259[(7)]);
var inst_34136 = (state_34259[(13)]);
var inst_34158__$1 = cljs.core.seq.call(null,inst_34136);
var state_34259__$1 = (function (){var statearr_34316 = state_34259;
(statearr_34316[(7)] = inst_34158__$1);

return statearr_34316;
})();
if(inst_34158__$1){
var statearr_34317_34380 = state_34259__$1;
(statearr_34317_34380[(1)] = (16));

} else {
var statearr_34318_34381 = state_34259__$1;
(statearr_34318_34381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (9))){
var inst_34188 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34319_34382 = state_34259__$1;
(statearr_34319_34382[(2)] = inst_34188);

(statearr_34319_34382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (5))){
var inst_34134 = cljs.core.deref.call(null,cs);
var inst_34135 = cljs.core.seq.call(null,inst_34134);
var inst_34136 = inst_34135;
var inst_34137 = null;
var inst_34138 = (0);
var inst_34139 = (0);
var state_34259__$1 = (function (){var statearr_34320 = state_34259;
(statearr_34320[(13)] = inst_34136);

(statearr_34320[(14)] = inst_34139);

(statearr_34320[(15)] = inst_34137);

(statearr_34320[(16)] = inst_34138);

return statearr_34320;
})();
var statearr_34321_34383 = state_34259__$1;
(statearr_34321_34383[(2)] = null);

(statearr_34321_34383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (14))){
var state_34259__$1 = state_34259;
var statearr_34322_34384 = state_34259__$1;
(statearr_34322_34384[(2)] = null);

(statearr_34322_34384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (45))){
var inst_34249 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34323_34385 = state_34259__$1;
(statearr_34323_34385[(2)] = inst_34249);

(statearr_34323_34385[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (26))){
var inst_34191 = (state_34259[(29)]);
var inst_34245 = (state_34259[(2)]);
var inst_34246 = cljs.core.seq.call(null,inst_34191);
var state_34259__$1 = (function (){var statearr_34324 = state_34259;
(statearr_34324[(31)] = inst_34245);

return statearr_34324;
})();
if(inst_34246){
var statearr_34325_34386 = state_34259__$1;
(statearr_34325_34386[(1)] = (42));

} else {
var statearr_34326_34387 = state_34259__$1;
(statearr_34326_34387[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (16))){
var inst_34158 = (state_34259[(7)]);
var inst_34160 = cljs.core.chunked_seq_QMARK_.call(null,inst_34158);
var state_34259__$1 = state_34259;
if(inst_34160){
var statearr_34327_34388 = state_34259__$1;
(statearr_34327_34388[(1)] = (19));

} else {
var statearr_34328_34389 = state_34259__$1;
(statearr_34328_34389[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (38))){
var inst_34238 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34329_34390 = state_34259__$1;
(statearr_34329_34390[(2)] = inst_34238);

(statearr_34329_34390[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (30))){
var state_34259__$1 = state_34259;
var statearr_34330_34391 = state_34259__$1;
(statearr_34330_34391[(2)] = null);

(statearr_34330_34391[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (10))){
var inst_34139 = (state_34259[(14)]);
var inst_34137 = (state_34259[(15)]);
var inst_34147 = cljs.core._nth.call(null,inst_34137,inst_34139);
var inst_34148 = cljs.core.nth.call(null,inst_34147,(0),null);
var inst_34149 = cljs.core.nth.call(null,inst_34147,(1),null);
var state_34259__$1 = (function (){var statearr_34331 = state_34259;
(statearr_34331[(26)] = inst_34148);

return statearr_34331;
})();
if(cljs.core.truth_(inst_34149)){
var statearr_34332_34392 = state_34259__$1;
(statearr_34332_34392[(1)] = (13));

} else {
var statearr_34333_34393 = state_34259__$1;
(statearr_34333_34393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (18))){
var inst_34184 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34334_34394 = state_34259__$1;
(statearr_34334_34394[(2)] = inst_34184);

(statearr_34334_34394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (42))){
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34259__$1,(45),dchan);
} else {
if((state_val_34260 === (37))){
var inst_34227 = (state_34259[(23)]);
var inst_34218 = (state_34259[(25)]);
var inst_34127 = (state_34259[(11)]);
var inst_34227__$1 = cljs.core.first.call(null,inst_34218);
var inst_34228 = cljs.core.async.put_BANG_.call(null,inst_34227__$1,inst_34127,done);
var state_34259__$1 = (function (){var statearr_34335 = state_34259;
(statearr_34335[(23)] = inst_34227__$1);

return statearr_34335;
})();
if(cljs.core.truth_(inst_34228)){
var statearr_34336_34395 = state_34259__$1;
(statearr_34336_34395[(1)] = (39));

} else {
var statearr_34337_34396 = state_34259__$1;
(statearr_34337_34396[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (8))){
var inst_34139 = (state_34259[(14)]);
var inst_34138 = (state_34259[(16)]);
var inst_34141 = (inst_34139 < inst_34138);
var inst_34142 = inst_34141;
var state_34259__$1 = state_34259;
if(cljs.core.truth_(inst_34142)){
var statearr_34338_34397 = state_34259__$1;
(statearr_34338_34397[(1)] = (10));

} else {
var statearr_34339_34398 = state_34259__$1;
(statearr_34339_34398[(1)] = (11));

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
});})(c__13946__auto___34344,cs,m,dchan,dctr,done))
;
return ((function (switch__13856__auto__,c__13946__auto___34344,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13857__auto__ = null;
var cljs$core$async$mult_$_state_machine__13857__auto____0 = (function (){
var statearr_34340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34340[(0)] = cljs$core$async$mult_$_state_machine__13857__auto__);

(statearr_34340[(1)] = (1));

return statearr_34340;
});
var cljs$core$async$mult_$_state_machine__13857__auto____1 = (function (state_34259){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_34259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e34341){if((e34341 instanceof Object)){
var ex__13860__auto__ = e34341;
var statearr_34342_34399 = state_34259;
(statearr_34342_34399[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34400 = state_34259;
state_34259 = G__34400;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13857__auto__ = function(state_34259){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13857__auto____1.call(this,state_34259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13857__auto____0;
cljs$core$async$mult_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13857__auto____1;
return cljs$core$async$mult_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___34344,cs,m,dchan,dctr,done))
})();
var state__13948__auto__ = (function (){var statearr_34343 = f__13947__auto__.call(null);
(statearr_34343[(6)] = c__13946__auto___34344);

return statearr_34343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___34344,cs,m,dchan,dctr,done))
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
var G__34402 = arguments.length;
switch (G__34402) {
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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34429 = arguments.length;
var i__4500__auto___34430 = (0);
while(true){
if((i__4500__auto___34430 < len__4499__auto___34429)){
args__4502__auto__.push((arguments[i__4500__auto___34430]));

var G__34431 = (i__4500__auto___34430 + (1));
i__4500__auto___34430 = G__34431;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34418){
var map__34420 = p__34418;
var map__34420__$1 = ((((!((map__34420 == null)))?(((((map__34420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34420):map__34420);
var opts = map__34420__$1;
var statearr_34426_34436 = state;
(statearr_34426_34436[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__34420,map__34420__$1,opts){
return (function (val){
var statearr_34427_34437 = state;
(statearr_34427_34437[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34420,map__34420__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_34428_34438 = state;
(statearr_34428_34438[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34411){
var G__34412 = cljs.core.first.call(null,seq34411);
var seq34411__$1 = cljs.core.next.call(null,seq34411);
var G__34413 = cljs.core.first.call(null,seq34411__$1);
var seq34411__$2 = cljs.core.next.call(null,seq34411__$1);
var G__34414 = cljs.core.first.call(null,seq34411__$2);
var seq34411__$3 = cljs.core.next.call(null,seq34411__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34412,G__34413,G__34414,seq34411__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34445 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34446){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34446 = meta34446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34447,meta34446__$1){
var self__ = this;
var _34447__$1 = this;
return (new cljs.core.async.t_cljs$core$async34445(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34446__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34447){
var self__ = this;
var _34447__$1 = this;
return self__.meta34446;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34445.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34445.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34445.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34445.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34445.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34445.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34445.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34445.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34446","meta34446",1177704497,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34445";

cljs.core.async.t_cljs$core$async34445.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34445");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34445.
 */
cljs.core.async.__GT_t_cljs$core$async34445 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34445(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34446){
return (new cljs.core.async.t_cljs$core$async34445(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34446));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34445(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13946__auto___34649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___34649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___34649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34560){
var state_val_34561 = (state_34560[(1)]);
if((state_val_34561 === (7))){
var inst_34470 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
var statearr_34565_34650 = state_34560__$1;
(statearr_34565_34650[(2)] = inst_34470);

(statearr_34565_34650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (20))){
var inst_34482 = (state_34560[(7)]);
var state_34560__$1 = state_34560;
var statearr_34567_34651 = state_34560__$1;
(statearr_34567_34651[(2)] = inst_34482);

(statearr_34567_34651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (27))){
var state_34560__$1 = state_34560;
var statearr_34568_34652 = state_34560__$1;
(statearr_34568_34652[(2)] = null);

(statearr_34568_34652[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (1))){
var inst_34457 = (state_34560[(8)]);
var inst_34457__$1 = calc_state.call(null);
var inst_34459 = (inst_34457__$1 == null);
var inst_34460 = cljs.core.not.call(null,inst_34459);
var state_34560__$1 = (function (){var statearr_34569 = state_34560;
(statearr_34569[(8)] = inst_34457__$1);

return statearr_34569;
})();
if(inst_34460){
var statearr_34570_34653 = state_34560__$1;
(statearr_34570_34653[(1)] = (2));

} else {
var statearr_34571_34654 = state_34560__$1;
(statearr_34571_34654[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (24))){
var inst_34534 = (state_34560[(9)]);
var inst_34520 = (state_34560[(10)]);
var inst_34511 = (state_34560[(11)]);
var inst_34534__$1 = inst_34511.call(null,inst_34520);
var state_34560__$1 = (function (){var statearr_34572 = state_34560;
(statearr_34572[(9)] = inst_34534__$1);

return statearr_34572;
})();
if(cljs.core.truth_(inst_34534__$1)){
var statearr_34573_34655 = state_34560__$1;
(statearr_34573_34655[(1)] = (29));

} else {
var statearr_34574_34656 = state_34560__$1;
(statearr_34574_34656[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (4))){
var inst_34473 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
if(cljs.core.truth_(inst_34473)){
var statearr_34575_34657 = state_34560__$1;
(statearr_34575_34657[(1)] = (8));

} else {
var statearr_34576_34658 = state_34560__$1;
(statearr_34576_34658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (15))){
var inst_34504 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
if(cljs.core.truth_(inst_34504)){
var statearr_34577_34659 = state_34560__$1;
(statearr_34577_34659[(1)] = (19));

} else {
var statearr_34578_34660 = state_34560__$1;
(statearr_34578_34660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (21))){
var inst_34509 = (state_34560[(12)]);
var inst_34509__$1 = (state_34560[(2)]);
var inst_34511 = cljs.core.get.call(null,inst_34509__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34512 = cljs.core.get.call(null,inst_34509__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34513 = cljs.core.get.call(null,inst_34509__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34560__$1 = (function (){var statearr_34579 = state_34560;
(statearr_34579[(12)] = inst_34509__$1);

(statearr_34579[(11)] = inst_34511);

(statearr_34579[(13)] = inst_34512);

return statearr_34579;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34560__$1,(22),inst_34513);
} else {
if((state_val_34561 === (31))){
var inst_34542 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
if(cljs.core.truth_(inst_34542)){
var statearr_34580_34661 = state_34560__$1;
(statearr_34580_34661[(1)] = (32));

} else {
var statearr_34581_34662 = state_34560__$1;
(statearr_34581_34662[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (32))){
var inst_34519 = (state_34560[(14)]);
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34560__$1,(35),out,inst_34519);
} else {
if((state_val_34561 === (33))){
var inst_34509 = (state_34560[(12)]);
var inst_34482 = inst_34509;
var state_34560__$1 = (function (){var statearr_34582 = state_34560;
(statearr_34582[(7)] = inst_34482);

return statearr_34582;
})();
var statearr_34583_34663 = state_34560__$1;
(statearr_34583_34663[(2)] = null);

(statearr_34583_34663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (13))){
var inst_34482 = (state_34560[(7)]);
var inst_34490 = inst_34482.cljs$lang$protocol_mask$partition0$;
var inst_34491 = (inst_34490 & (64));
var inst_34493 = inst_34482.cljs$core$ISeq$;
var inst_34495 = (cljs.core.PROTOCOL_SENTINEL === inst_34493);
var inst_34496 = ((inst_34491) || (inst_34495));
var state_34560__$1 = state_34560;
if(cljs.core.truth_(inst_34496)){
var statearr_34584_34664 = state_34560__$1;
(statearr_34584_34664[(1)] = (16));

} else {
var statearr_34585_34665 = state_34560__$1;
(statearr_34585_34665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (22))){
var inst_34520 = (state_34560[(10)]);
var inst_34519 = (state_34560[(14)]);
var inst_34518 = (state_34560[(2)]);
var inst_34519__$1 = cljs.core.nth.call(null,inst_34518,(0),null);
var inst_34520__$1 = cljs.core.nth.call(null,inst_34518,(1),null);
var inst_34521 = (inst_34519__$1 == null);
var inst_34522 = cljs.core._EQ_.call(null,inst_34520__$1,change);
var inst_34523 = ((inst_34521) || (inst_34522));
var state_34560__$1 = (function (){var statearr_34587 = state_34560;
(statearr_34587[(10)] = inst_34520__$1);

(statearr_34587[(14)] = inst_34519__$1);

return statearr_34587;
})();
if(cljs.core.truth_(inst_34523)){
var statearr_34588_34666 = state_34560__$1;
(statearr_34588_34666[(1)] = (23));

} else {
var statearr_34589_34667 = state_34560__$1;
(statearr_34589_34667[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (36))){
var inst_34509 = (state_34560[(12)]);
var inst_34482 = inst_34509;
var state_34560__$1 = (function (){var statearr_34590 = state_34560;
(statearr_34590[(7)] = inst_34482);

return statearr_34590;
})();
var statearr_34591_34668 = state_34560__$1;
(statearr_34591_34668[(2)] = null);

(statearr_34591_34668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (29))){
var inst_34534 = (state_34560[(9)]);
var state_34560__$1 = state_34560;
var statearr_34592_34669 = state_34560__$1;
(statearr_34592_34669[(2)] = inst_34534);

(statearr_34592_34669[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (6))){
var state_34560__$1 = state_34560;
var statearr_34597_34674 = state_34560__$1;
(statearr_34597_34674[(2)] = false);

(statearr_34597_34674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (28))){
var inst_34530 = (state_34560[(2)]);
var inst_34531 = calc_state.call(null);
var inst_34482 = inst_34531;
var state_34560__$1 = (function (){var statearr_34598 = state_34560;
(statearr_34598[(7)] = inst_34482);

(statearr_34598[(15)] = inst_34530);

return statearr_34598;
})();
var statearr_34599_34675 = state_34560__$1;
(statearr_34599_34675[(2)] = null);

(statearr_34599_34675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (25))){
var inst_34556 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
var statearr_34600_34676 = state_34560__$1;
(statearr_34600_34676[(2)] = inst_34556);

(statearr_34600_34676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (34))){
var inst_34554 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
var statearr_34601_34677 = state_34560__$1;
(statearr_34601_34677[(2)] = inst_34554);

(statearr_34601_34677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (17))){
var state_34560__$1 = state_34560;
var statearr_34602_34678 = state_34560__$1;
(statearr_34602_34678[(2)] = false);

(statearr_34602_34678[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (3))){
var state_34560__$1 = state_34560;
var statearr_34603_34679 = state_34560__$1;
(statearr_34603_34679[(2)] = false);

(statearr_34603_34679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (12))){
var inst_34558 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34560__$1,inst_34558);
} else {
if((state_val_34561 === (2))){
var inst_34457 = (state_34560[(8)]);
var inst_34462 = inst_34457.cljs$lang$protocol_mask$partition0$;
var inst_34463 = (inst_34462 & (64));
var inst_34464 = inst_34457.cljs$core$ISeq$;
var inst_34465 = (cljs.core.PROTOCOL_SENTINEL === inst_34464);
var inst_34466 = ((inst_34463) || (inst_34465));
var state_34560__$1 = state_34560;
if(cljs.core.truth_(inst_34466)){
var statearr_34605_34680 = state_34560__$1;
(statearr_34605_34680[(1)] = (5));

} else {
var statearr_34606_34681 = state_34560__$1;
(statearr_34606_34681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (23))){
var inst_34519 = (state_34560[(14)]);
var inst_34525 = (inst_34519 == null);
var state_34560__$1 = state_34560;
if(cljs.core.truth_(inst_34525)){
var statearr_34607_34682 = state_34560__$1;
(statearr_34607_34682[(1)] = (26));

} else {
var statearr_34608_34683 = state_34560__$1;
(statearr_34608_34683[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (35))){
var inst_34545 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
if(cljs.core.truth_(inst_34545)){
var statearr_34609_34684 = state_34560__$1;
(statearr_34609_34684[(1)] = (36));

} else {
var statearr_34610_34685 = state_34560__$1;
(statearr_34610_34685[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (19))){
var inst_34482 = (state_34560[(7)]);
var inst_34506 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34482);
var state_34560__$1 = state_34560;
var statearr_34611_34686 = state_34560__$1;
(statearr_34611_34686[(2)] = inst_34506);

(statearr_34611_34686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (11))){
var inst_34482 = (state_34560[(7)]);
var inst_34486 = (inst_34482 == null);
var inst_34487 = cljs.core.not.call(null,inst_34486);
var state_34560__$1 = state_34560;
if(inst_34487){
var statearr_34612_34687 = state_34560__$1;
(statearr_34612_34687[(1)] = (13));

} else {
var statearr_34613_34688 = state_34560__$1;
(statearr_34613_34688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (9))){
var inst_34457 = (state_34560[(8)]);
var state_34560__$1 = state_34560;
var statearr_34614_34689 = state_34560__$1;
(statearr_34614_34689[(2)] = inst_34457);

(statearr_34614_34689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (5))){
var state_34560__$1 = state_34560;
var statearr_34615_34690 = state_34560__$1;
(statearr_34615_34690[(2)] = true);

(statearr_34615_34690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (14))){
var state_34560__$1 = state_34560;
var statearr_34616_34691 = state_34560__$1;
(statearr_34616_34691[(2)] = false);

(statearr_34616_34691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (26))){
var inst_34520 = (state_34560[(10)]);
var inst_34527 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34520);
var state_34560__$1 = state_34560;
var statearr_34617_34692 = state_34560__$1;
(statearr_34617_34692[(2)] = inst_34527);

(statearr_34617_34692[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (16))){
var state_34560__$1 = state_34560;
var statearr_34618_34693 = state_34560__$1;
(statearr_34618_34693[(2)] = true);

(statearr_34618_34693[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (38))){
var inst_34550 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
var statearr_34620_34694 = state_34560__$1;
(statearr_34620_34694[(2)] = inst_34550);

(statearr_34620_34694[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (30))){
var inst_34520 = (state_34560[(10)]);
var inst_34511 = (state_34560[(11)]);
var inst_34512 = (state_34560[(13)]);
var inst_34537 = cljs.core.empty_QMARK_.call(null,inst_34511);
var inst_34538 = inst_34512.call(null,inst_34520);
var inst_34539 = cljs.core.not.call(null,inst_34538);
var inst_34540 = ((inst_34537) && (inst_34539));
var state_34560__$1 = state_34560;
var statearr_34624_34695 = state_34560__$1;
(statearr_34624_34695[(2)] = inst_34540);

(statearr_34624_34695[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (10))){
var inst_34457 = (state_34560[(8)]);
var inst_34478 = (state_34560[(2)]);
var inst_34479 = cljs.core.get.call(null,inst_34478,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34480 = cljs.core.get.call(null,inst_34478,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34481 = cljs.core.get.call(null,inst_34478,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34482 = inst_34457;
var state_34560__$1 = (function (){var statearr_34625 = state_34560;
(statearr_34625[(16)] = inst_34479);

(statearr_34625[(17)] = inst_34481);

(statearr_34625[(7)] = inst_34482);

(statearr_34625[(18)] = inst_34480);

return statearr_34625;
})();
var statearr_34626_34696 = state_34560__$1;
(statearr_34626_34696[(2)] = null);

(statearr_34626_34696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (18))){
var inst_34501 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
var statearr_34627_34697 = state_34560__$1;
(statearr_34627_34697[(2)] = inst_34501);

(statearr_34627_34697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (37))){
var state_34560__$1 = state_34560;
var statearr_34628_34698 = state_34560__$1;
(statearr_34628_34698[(2)] = null);

(statearr_34628_34698[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (8))){
var inst_34457 = (state_34560[(8)]);
var inst_34475 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34457);
var state_34560__$1 = state_34560;
var statearr_34631_34699 = state_34560__$1;
(statearr_34631_34699[(2)] = inst_34475);

(statearr_34631_34699[(1)] = (10));


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
});})(c__13946__auto___34649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13856__auto__,c__13946__auto___34649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13857__auto__ = null;
var cljs$core$async$mix_$_state_machine__13857__auto____0 = (function (){
var statearr_34636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34636[(0)] = cljs$core$async$mix_$_state_machine__13857__auto__);

(statearr_34636[(1)] = (1));

return statearr_34636;
});
var cljs$core$async$mix_$_state_machine__13857__auto____1 = (function (state_34560){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_34560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e34637){if((e34637 instanceof Object)){
var ex__13860__auto__ = e34637;
var statearr_34638_34700 = state_34560;
(statearr_34638_34700[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34701 = state_34560;
state_34560 = G__34701;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13857__auto__ = function(state_34560){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13857__auto____1.call(this,state_34560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13857__auto____0;
cljs$core$async$mix_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13857__auto____1;
return cljs$core$async$mix_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___34649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13948__auto__ = (function (){var statearr_34642 = f__13947__auto__.call(null);
(statearr_34642[(6)] = c__13946__auto___34649);

return statearr_34642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___34649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34705 = arguments.length;
switch (G__34705) {
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
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
var G__34714 = arguments.length;
switch (G__34714) {
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
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__34712_SHARP_){
if(cljs.core.truth_(p1__34712_SHARP_.call(null,topic))){
return p1__34712_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34712_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34715 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34715 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34716){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34716 = meta34716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34717,meta34716__$1){
var self__ = this;
var _34717__$1 = this;
return (new cljs.core.async.t_cljs$core$async34715(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34716__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34717){
var self__ = this;
var _34717__$1 = this;
return self__.meta34716;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34715.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34715.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34716","meta34716",-757621055,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34715.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34715";

cljs.core.async.t_cljs$core$async34715.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34715");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34715.
 */
cljs.core.async.__GT_t_cljs$core$async34715 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34715(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34716){
return (new cljs.core.async.t_cljs$core$async34715(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34716));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34715(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13946__auto___34911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___34911,mults,ensure_mult,p){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___34911,mults,ensure_mult,p){
return (function (state_34797){
var state_val_34798 = (state_34797[(1)]);
if((state_val_34798 === (7))){
var inst_34792 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34800_34912 = state_34797__$1;
(statearr_34800_34912[(2)] = inst_34792);

(statearr_34800_34912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (20))){
var state_34797__$1 = state_34797;
var statearr_34801_34915 = state_34797__$1;
(statearr_34801_34915[(2)] = null);

(statearr_34801_34915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (1))){
var state_34797__$1 = state_34797;
var statearr_34806_34917 = state_34797__$1;
(statearr_34806_34917[(2)] = null);

(statearr_34806_34917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (24))){
var inst_34775 = (state_34797[(7)]);
var inst_34784 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34775);
var state_34797__$1 = state_34797;
var statearr_34807_34918 = state_34797__$1;
(statearr_34807_34918[(2)] = inst_34784);

(statearr_34807_34918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (4))){
var inst_34727 = (state_34797[(8)]);
var inst_34727__$1 = (state_34797[(2)]);
var inst_34728 = (inst_34727__$1 == null);
var state_34797__$1 = (function (){var statearr_34808 = state_34797;
(statearr_34808[(8)] = inst_34727__$1);

return statearr_34808;
})();
if(cljs.core.truth_(inst_34728)){
var statearr_34809_34919 = state_34797__$1;
(statearr_34809_34919[(1)] = (5));

} else {
var statearr_34810_34920 = state_34797__$1;
(statearr_34810_34920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (15))){
var inst_34769 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34815_34921 = state_34797__$1;
(statearr_34815_34921[(2)] = inst_34769);

(statearr_34815_34921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (21))){
var inst_34789 = (state_34797[(2)]);
var state_34797__$1 = (function (){var statearr_34819 = state_34797;
(statearr_34819[(9)] = inst_34789);

return statearr_34819;
})();
var statearr_34820_34922 = state_34797__$1;
(statearr_34820_34922[(2)] = null);

(statearr_34820_34922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (13))){
var inst_34751 = (state_34797[(10)]);
var inst_34753 = cljs.core.chunked_seq_QMARK_.call(null,inst_34751);
var state_34797__$1 = state_34797;
if(inst_34753){
var statearr_34824_34923 = state_34797__$1;
(statearr_34824_34923[(1)] = (16));

} else {
var statearr_34825_34924 = state_34797__$1;
(statearr_34825_34924[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (22))){
var inst_34781 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34781)){
var statearr_34826_34925 = state_34797__$1;
(statearr_34826_34925[(1)] = (23));

} else {
var statearr_34827_34926 = state_34797__$1;
(statearr_34827_34926[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (6))){
var inst_34727 = (state_34797[(8)]);
var inst_34775 = (state_34797[(7)]);
var inst_34777 = (state_34797[(11)]);
var inst_34775__$1 = topic_fn.call(null,inst_34727);
var inst_34776 = cljs.core.deref.call(null,mults);
var inst_34777__$1 = cljs.core.get.call(null,inst_34776,inst_34775__$1);
var state_34797__$1 = (function (){var statearr_34829 = state_34797;
(statearr_34829[(7)] = inst_34775__$1);

(statearr_34829[(11)] = inst_34777__$1);

return statearr_34829;
})();
if(cljs.core.truth_(inst_34777__$1)){
var statearr_34830_34927 = state_34797__$1;
(statearr_34830_34927[(1)] = (19));

} else {
var statearr_34831_34928 = state_34797__$1;
(statearr_34831_34928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (25))){
var inst_34786 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34832_34929 = state_34797__$1;
(statearr_34832_34929[(2)] = inst_34786);

(statearr_34832_34929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (17))){
var inst_34751 = (state_34797[(10)]);
var inst_34760 = cljs.core.first.call(null,inst_34751);
var inst_34761 = cljs.core.async.muxch_STAR_.call(null,inst_34760);
var inst_34762 = cljs.core.async.close_BANG_.call(null,inst_34761);
var inst_34763 = cljs.core.next.call(null,inst_34751);
var inst_34737 = inst_34763;
var inst_34738 = null;
var inst_34739 = (0);
var inst_34740 = (0);
var state_34797__$1 = (function (){var statearr_34833 = state_34797;
(statearr_34833[(12)] = inst_34737);

(statearr_34833[(13)] = inst_34740);

(statearr_34833[(14)] = inst_34739);

(statearr_34833[(15)] = inst_34738);

(statearr_34833[(16)] = inst_34762);

return statearr_34833;
})();
var statearr_34834_34930 = state_34797__$1;
(statearr_34834_34930[(2)] = null);

(statearr_34834_34930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (3))){
var inst_34794 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34797__$1,inst_34794);
} else {
if((state_val_34798 === (12))){
var inst_34771 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34835_34931 = state_34797__$1;
(statearr_34835_34931[(2)] = inst_34771);

(statearr_34835_34931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (2))){
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34797__$1,(4),ch);
} else {
if((state_val_34798 === (23))){
var state_34797__$1 = state_34797;
var statearr_34840_34932 = state_34797__$1;
(statearr_34840_34932[(2)] = null);

(statearr_34840_34932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (19))){
var inst_34727 = (state_34797[(8)]);
var inst_34777 = (state_34797[(11)]);
var inst_34779 = cljs.core.async.muxch_STAR_.call(null,inst_34777);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34797__$1,(22),inst_34779,inst_34727);
} else {
if((state_val_34798 === (11))){
var inst_34751 = (state_34797[(10)]);
var inst_34737 = (state_34797[(12)]);
var inst_34751__$1 = cljs.core.seq.call(null,inst_34737);
var state_34797__$1 = (function (){var statearr_34842 = state_34797;
(statearr_34842[(10)] = inst_34751__$1);

return statearr_34842;
})();
if(inst_34751__$1){
var statearr_34843_34933 = state_34797__$1;
(statearr_34843_34933[(1)] = (13));

} else {
var statearr_34848_34934 = state_34797__$1;
(statearr_34848_34934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (9))){
var inst_34773 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34849_34935 = state_34797__$1;
(statearr_34849_34935[(2)] = inst_34773);

(statearr_34849_34935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (5))){
var inst_34734 = cljs.core.deref.call(null,mults);
var inst_34735 = cljs.core.vals.call(null,inst_34734);
var inst_34736 = cljs.core.seq.call(null,inst_34735);
var inst_34737 = inst_34736;
var inst_34738 = null;
var inst_34739 = (0);
var inst_34740 = (0);
var state_34797__$1 = (function (){var statearr_34852 = state_34797;
(statearr_34852[(12)] = inst_34737);

(statearr_34852[(13)] = inst_34740);

(statearr_34852[(14)] = inst_34739);

(statearr_34852[(15)] = inst_34738);

return statearr_34852;
})();
var statearr_34854_34936 = state_34797__$1;
(statearr_34854_34936[(2)] = null);

(statearr_34854_34936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (14))){
var state_34797__$1 = state_34797;
var statearr_34862_34937 = state_34797__$1;
(statearr_34862_34937[(2)] = null);

(statearr_34862_34937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (16))){
var inst_34751 = (state_34797[(10)]);
var inst_34755 = cljs.core.chunk_first.call(null,inst_34751);
var inst_34756 = cljs.core.chunk_rest.call(null,inst_34751);
var inst_34757 = cljs.core.count.call(null,inst_34755);
var inst_34737 = inst_34756;
var inst_34738 = inst_34755;
var inst_34739 = inst_34757;
var inst_34740 = (0);
var state_34797__$1 = (function (){var statearr_34864 = state_34797;
(statearr_34864[(12)] = inst_34737);

(statearr_34864[(13)] = inst_34740);

(statearr_34864[(14)] = inst_34739);

(statearr_34864[(15)] = inst_34738);

return statearr_34864;
})();
var statearr_34865_34938 = state_34797__$1;
(statearr_34865_34938[(2)] = null);

(statearr_34865_34938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (10))){
var inst_34737 = (state_34797[(12)]);
var inst_34740 = (state_34797[(13)]);
var inst_34739 = (state_34797[(14)]);
var inst_34738 = (state_34797[(15)]);
var inst_34745 = cljs.core._nth.call(null,inst_34738,inst_34740);
var inst_34746 = cljs.core.async.muxch_STAR_.call(null,inst_34745);
var inst_34747 = cljs.core.async.close_BANG_.call(null,inst_34746);
var inst_34748 = (inst_34740 + (1));
var tmp34859 = inst_34737;
var tmp34860 = inst_34739;
var tmp34861 = inst_34738;
var inst_34737__$1 = tmp34859;
var inst_34738__$1 = tmp34861;
var inst_34739__$1 = tmp34860;
var inst_34740__$1 = inst_34748;
var state_34797__$1 = (function (){var statearr_34874 = state_34797;
(statearr_34874[(12)] = inst_34737__$1);

(statearr_34874[(13)] = inst_34740__$1);

(statearr_34874[(14)] = inst_34739__$1);

(statearr_34874[(15)] = inst_34738__$1);

(statearr_34874[(17)] = inst_34747);

return statearr_34874;
})();
var statearr_34875_34942 = state_34797__$1;
(statearr_34875_34942[(2)] = null);

(statearr_34875_34942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (18))){
var inst_34766 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34876_34944 = state_34797__$1;
(statearr_34876_34944[(2)] = inst_34766);

(statearr_34876_34944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (8))){
var inst_34740 = (state_34797[(13)]);
var inst_34739 = (state_34797[(14)]);
var inst_34742 = (inst_34740 < inst_34739);
var inst_34743 = inst_34742;
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34743)){
var statearr_34880_34945 = state_34797__$1;
(statearr_34880_34945[(1)] = (10));

} else {
var statearr_34881_34946 = state_34797__$1;
(statearr_34881_34946[(1)] = (11));

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
});})(c__13946__auto___34911,mults,ensure_mult,p))
;
return ((function (switch__13856__auto__,c__13946__auto___34911,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_34882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34882[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_34882[(1)] = (1));

return statearr_34882;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_34797){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_34797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e34887){if((e34887 instanceof Object)){
var ex__13860__auto__ = e34887;
var statearr_34889_34947 = state_34797;
(statearr_34889_34947[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34948 = state_34797;
state_34797 = G__34948;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_34797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_34797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___34911,mults,ensure_mult,p))
})();
var state__13948__auto__ = (function (){var statearr_34896 = f__13947__auto__.call(null);
(statearr_34896[(6)] = c__13946__auto___34911);

return statearr_34896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___34911,mults,ensure_mult,p))
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
var G__34950 = arguments.length;
switch (G__34950) {
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
var G__34957 = arguments.length;
switch (G__34957) {
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
var G__34963 = arguments.length;
switch (G__34963) {
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
var c__13946__auto___35047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___35047,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___35047,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35005){
var state_val_35006 = (state_35005[(1)]);
if((state_val_35006 === (7))){
var state_35005__$1 = state_35005;
var statearr_35007_35049 = state_35005__$1;
(statearr_35007_35049[(2)] = null);

(statearr_35007_35049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (1))){
var state_35005__$1 = state_35005;
var statearr_35008_35050 = state_35005__$1;
(statearr_35008_35050[(2)] = null);

(statearr_35008_35050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (4))){
var inst_34966 = (state_35005[(7)]);
var inst_34968 = (inst_34966 < cnt);
var state_35005__$1 = state_35005;
if(cljs.core.truth_(inst_34968)){
var statearr_35009_35051 = state_35005__$1;
(statearr_35009_35051[(1)] = (6));

} else {
var statearr_35010_35052 = state_35005__$1;
(statearr_35010_35052[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (15))){
var inst_35001 = (state_35005[(2)]);
var state_35005__$1 = state_35005;
var statearr_35011_35053 = state_35005__$1;
(statearr_35011_35053[(2)] = inst_35001);

(statearr_35011_35053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (13))){
var inst_34994 = cljs.core.async.close_BANG_.call(null,out);
var state_35005__$1 = state_35005;
var statearr_35012_35054 = state_35005__$1;
(statearr_35012_35054[(2)] = inst_34994);

(statearr_35012_35054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (6))){
var state_35005__$1 = state_35005;
var statearr_35013_35057 = state_35005__$1;
(statearr_35013_35057[(2)] = null);

(statearr_35013_35057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (3))){
var inst_35003 = (state_35005[(2)]);
var state_35005__$1 = state_35005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35005__$1,inst_35003);
} else {
if((state_val_35006 === (12))){
var inst_34990 = (state_35005[(8)]);
var inst_34990__$1 = (state_35005[(2)]);
var inst_34992 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34990__$1);
var state_35005__$1 = (function (){var statearr_35017 = state_35005;
(statearr_35017[(8)] = inst_34990__$1);

return statearr_35017;
})();
if(cljs.core.truth_(inst_34992)){
var statearr_35018_35058 = state_35005__$1;
(statearr_35018_35058[(1)] = (13));

} else {
var statearr_35019_35059 = state_35005__$1;
(statearr_35019_35059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (2))){
var inst_34965 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34966 = (0);
var state_35005__$1 = (function (){var statearr_35020 = state_35005;
(statearr_35020[(9)] = inst_34965);

(statearr_35020[(7)] = inst_34966);

return statearr_35020;
})();
var statearr_35021_35061 = state_35005__$1;
(statearr_35021_35061[(2)] = null);

(statearr_35021_35061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (11))){
var inst_34966 = (state_35005[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35005,(10),Object,null,(9));
var inst_34975 = chs__$1.call(null,inst_34966);
var inst_34976 = done.call(null,inst_34966);
var inst_34977 = cljs.core.async.take_BANG_.call(null,inst_34975,inst_34976);
var state_35005__$1 = state_35005;
var statearr_35022_35062 = state_35005__$1;
(statearr_35022_35062[(2)] = inst_34977);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35005__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (9))){
var inst_34966 = (state_35005[(7)]);
var inst_34979 = (state_35005[(2)]);
var inst_34980 = (inst_34966 + (1));
var inst_34966__$1 = inst_34980;
var state_35005__$1 = (function (){var statearr_35026 = state_35005;
(statearr_35026[(10)] = inst_34979);

(statearr_35026[(7)] = inst_34966__$1);

return statearr_35026;
})();
var statearr_35027_35063 = state_35005__$1;
(statearr_35027_35063[(2)] = null);

(statearr_35027_35063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (5))){
var inst_34987 = (state_35005[(2)]);
var state_35005__$1 = (function (){var statearr_35028 = state_35005;
(statearr_35028[(11)] = inst_34987);

return statearr_35028;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35005__$1,(12),dchan);
} else {
if((state_val_35006 === (14))){
var inst_34990 = (state_35005[(8)]);
var inst_34996 = cljs.core.apply.call(null,f,inst_34990);
var state_35005__$1 = state_35005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35005__$1,(16),out,inst_34996);
} else {
if((state_val_35006 === (16))){
var inst_34998 = (state_35005[(2)]);
var state_35005__$1 = (function (){var statearr_35029 = state_35005;
(statearr_35029[(12)] = inst_34998);

return statearr_35029;
})();
var statearr_35030_35066 = state_35005__$1;
(statearr_35030_35066[(2)] = null);

(statearr_35030_35066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (10))){
var inst_34970 = (state_35005[(2)]);
var inst_34971 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35005__$1 = (function (){var statearr_35031 = state_35005;
(statearr_35031[(13)] = inst_34970);

return statearr_35031;
})();
var statearr_35032_35071 = state_35005__$1;
(statearr_35032_35071[(2)] = inst_34971);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35005__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (8))){
var inst_34985 = (state_35005[(2)]);
var state_35005__$1 = state_35005;
var statearr_35036_35073 = state_35005__$1;
(statearr_35036_35073[(2)] = inst_34985);

(statearr_35036_35073[(1)] = (5));


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
});})(c__13946__auto___35047,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13856__auto__,c__13946__auto___35047,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_35037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35037[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_35037[(1)] = (1));

return statearr_35037;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_35005){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_35005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e35038){if((e35038 instanceof Object)){
var ex__13860__auto__ = e35038;
var statearr_35039_35075 = state_35005;
(statearr_35039_35075[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35076 = state_35005;
state_35005 = G__35076;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_35005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_35005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___35047,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13948__auto__ = (function (){var statearr_35040 = f__13947__auto__.call(null);
(statearr_35040[(6)] = c__13946__auto___35047);

return statearr_35040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___35047,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35079 = arguments.length;
switch (G__35079) {
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
var c__13946__auto___35139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___35139,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___35139,out){
return (function (state_35114){
var state_val_35115 = (state_35114[(1)]);
if((state_val_35115 === (7))){
var inst_35093 = (state_35114[(7)]);
var inst_35094 = (state_35114[(8)]);
var inst_35093__$1 = (state_35114[(2)]);
var inst_35094__$1 = cljs.core.nth.call(null,inst_35093__$1,(0),null);
var inst_35095 = cljs.core.nth.call(null,inst_35093__$1,(1),null);
var inst_35096 = (inst_35094__$1 == null);
var state_35114__$1 = (function (){var statearr_35116 = state_35114;
(statearr_35116[(9)] = inst_35095);

(statearr_35116[(7)] = inst_35093__$1);

(statearr_35116[(8)] = inst_35094__$1);

return statearr_35116;
})();
if(cljs.core.truth_(inst_35096)){
var statearr_35117_35142 = state_35114__$1;
(statearr_35117_35142[(1)] = (8));

} else {
var statearr_35118_35143 = state_35114__$1;
(statearr_35118_35143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (1))){
var inst_35083 = cljs.core.vec.call(null,chs);
var inst_35084 = inst_35083;
var state_35114__$1 = (function (){var statearr_35119 = state_35114;
(statearr_35119[(10)] = inst_35084);

return statearr_35119;
})();
var statearr_35120_35144 = state_35114__$1;
(statearr_35120_35144[(2)] = null);

(statearr_35120_35144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (4))){
var inst_35084 = (state_35114[(10)]);
var state_35114__$1 = state_35114;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35114__$1,(7),inst_35084);
} else {
if((state_val_35115 === (6))){
var inst_35110 = (state_35114[(2)]);
var state_35114__$1 = state_35114;
var statearr_35121_35153 = state_35114__$1;
(statearr_35121_35153[(2)] = inst_35110);

(statearr_35121_35153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (3))){
var inst_35112 = (state_35114[(2)]);
var state_35114__$1 = state_35114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35114__$1,inst_35112);
} else {
if((state_val_35115 === (2))){
var inst_35084 = (state_35114[(10)]);
var inst_35086 = cljs.core.count.call(null,inst_35084);
var inst_35087 = (inst_35086 > (0));
var state_35114__$1 = state_35114;
if(cljs.core.truth_(inst_35087)){
var statearr_35123_35155 = state_35114__$1;
(statearr_35123_35155[(1)] = (4));

} else {
var statearr_35124_35156 = state_35114__$1;
(statearr_35124_35156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (11))){
var inst_35084 = (state_35114[(10)]);
var inst_35103 = (state_35114[(2)]);
var tmp35122 = inst_35084;
var inst_35084__$1 = tmp35122;
var state_35114__$1 = (function (){var statearr_35125 = state_35114;
(statearr_35125[(11)] = inst_35103);

(statearr_35125[(10)] = inst_35084__$1);

return statearr_35125;
})();
var statearr_35127_35157 = state_35114__$1;
(statearr_35127_35157[(2)] = null);

(statearr_35127_35157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (9))){
var inst_35094 = (state_35114[(8)]);
var state_35114__$1 = state_35114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35114__$1,(11),out,inst_35094);
} else {
if((state_val_35115 === (5))){
var inst_35108 = cljs.core.async.close_BANG_.call(null,out);
var state_35114__$1 = state_35114;
var statearr_35129_35158 = state_35114__$1;
(statearr_35129_35158[(2)] = inst_35108);

(statearr_35129_35158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (10))){
var inst_35106 = (state_35114[(2)]);
var state_35114__$1 = state_35114;
var statearr_35130_35159 = state_35114__$1;
(statearr_35130_35159[(2)] = inst_35106);

(statearr_35130_35159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (8))){
var inst_35095 = (state_35114[(9)]);
var inst_35093 = (state_35114[(7)]);
var inst_35084 = (state_35114[(10)]);
var inst_35094 = (state_35114[(8)]);
var inst_35098 = (function (){var cs = inst_35084;
var vec__35089 = inst_35093;
var v = inst_35094;
var c = inst_35095;
return ((function (cs,vec__35089,v,c,inst_35095,inst_35093,inst_35084,inst_35094,state_val_35115,c__13946__auto___35139,out){
return (function (p1__35077_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35077_SHARP_);
});
;})(cs,vec__35089,v,c,inst_35095,inst_35093,inst_35084,inst_35094,state_val_35115,c__13946__auto___35139,out))
})();
var inst_35099 = cljs.core.filterv.call(null,inst_35098,inst_35084);
var inst_35084__$1 = inst_35099;
var state_35114__$1 = (function (){var statearr_35131 = state_35114;
(statearr_35131[(10)] = inst_35084__$1);

return statearr_35131;
})();
var statearr_35133_35161 = state_35114__$1;
(statearr_35133_35161[(2)] = null);

(statearr_35133_35161[(1)] = (2));


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
});})(c__13946__auto___35139,out))
;
return ((function (switch__13856__auto__,c__13946__auto___35139,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_35134 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35134[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_35134[(1)] = (1));

return statearr_35134;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_35114){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_35114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e35135){if((e35135 instanceof Object)){
var ex__13860__auto__ = e35135;
var statearr_35136_35162 = state_35114;
(statearr_35136_35162[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35164 = state_35114;
state_35114 = G__35164;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_35114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_35114);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___35139,out))
})();
var state__13948__auto__ = (function (){var statearr_35137 = f__13947__auto__.call(null);
(statearr_35137[(6)] = c__13946__auto___35139);

return statearr_35137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___35139,out))
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
var G__35169 = arguments.length;
switch (G__35169) {
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
var c__13946__auto___35230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___35230,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___35230,out){
return (function (state_35193){
var state_val_35194 = (state_35193[(1)]);
if((state_val_35194 === (7))){
var inst_35175 = (state_35193[(7)]);
var inst_35175__$1 = (state_35193[(2)]);
var inst_35176 = (inst_35175__$1 == null);
var inst_35177 = cljs.core.not.call(null,inst_35176);
var state_35193__$1 = (function (){var statearr_35195 = state_35193;
(statearr_35195[(7)] = inst_35175__$1);

return statearr_35195;
})();
if(inst_35177){
var statearr_35196_35233 = state_35193__$1;
(statearr_35196_35233[(1)] = (8));

} else {
var statearr_35197_35235 = state_35193__$1;
(statearr_35197_35235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (1))){
var inst_35170 = (0);
var state_35193__$1 = (function (){var statearr_35198 = state_35193;
(statearr_35198[(8)] = inst_35170);

return statearr_35198;
})();
var statearr_35199_35236 = state_35193__$1;
(statearr_35199_35236[(2)] = null);

(statearr_35199_35236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (4))){
var state_35193__$1 = state_35193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35193__$1,(7),ch);
} else {
if((state_val_35194 === (6))){
var inst_35188 = (state_35193[(2)]);
var state_35193__$1 = state_35193;
var statearr_35200_35237 = state_35193__$1;
(statearr_35200_35237[(2)] = inst_35188);

(statearr_35200_35237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (3))){
var inst_35190 = (state_35193[(2)]);
var inst_35191 = cljs.core.async.close_BANG_.call(null,out);
var state_35193__$1 = (function (){var statearr_35201 = state_35193;
(statearr_35201[(9)] = inst_35190);

return statearr_35201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35193__$1,inst_35191);
} else {
if((state_val_35194 === (2))){
var inst_35170 = (state_35193[(8)]);
var inst_35172 = (inst_35170 < n);
var state_35193__$1 = state_35193;
if(cljs.core.truth_(inst_35172)){
var statearr_35202_35239 = state_35193__$1;
(statearr_35202_35239[(1)] = (4));

} else {
var statearr_35203_35240 = state_35193__$1;
(statearr_35203_35240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (11))){
var inst_35170 = (state_35193[(8)]);
var inst_35180 = (state_35193[(2)]);
var inst_35181 = (inst_35170 + (1));
var inst_35170__$1 = inst_35181;
var state_35193__$1 = (function (){var statearr_35208 = state_35193;
(statearr_35208[(10)] = inst_35180);

(statearr_35208[(8)] = inst_35170__$1);

return statearr_35208;
})();
var statearr_35209_35241 = state_35193__$1;
(statearr_35209_35241[(2)] = null);

(statearr_35209_35241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (9))){
var state_35193__$1 = state_35193;
var statearr_35210_35242 = state_35193__$1;
(statearr_35210_35242[(2)] = null);

(statearr_35210_35242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (5))){
var state_35193__$1 = state_35193;
var statearr_35211_35243 = state_35193__$1;
(statearr_35211_35243[(2)] = null);

(statearr_35211_35243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (10))){
var inst_35185 = (state_35193[(2)]);
var state_35193__$1 = state_35193;
var statearr_35212_35244 = state_35193__$1;
(statearr_35212_35244[(2)] = inst_35185);

(statearr_35212_35244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (8))){
var inst_35175 = (state_35193[(7)]);
var state_35193__$1 = state_35193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35193__$1,(11),out,inst_35175);
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
});})(c__13946__auto___35230,out))
;
return ((function (switch__13856__auto__,c__13946__auto___35230,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_35213 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35213[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_35213[(1)] = (1));

return statearr_35213;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_35193){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_35193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e35214){if((e35214 instanceof Object)){
var ex__13860__auto__ = e35214;
var statearr_35215_35245 = state_35193;
(statearr_35215_35245[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35246 = state_35193;
state_35193 = G__35246;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_35193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_35193);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___35230,out))
})();
var state__13948__auto__ = (function (){var statearr_35220 = f__13947__auto__.call(null);
(statearr_35220[(6)] = c__13946__auto___35230);

return statearr_35220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___35230,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35252 = (function (f,ch,meta35253){
this.f = f;
this.ch = ch;
this.meta35253 = meta35253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35254,meta35253__$1){
var self__ = this;
var _35254__$1 = this;
return (new cljs.core.async.t_cljs$core$async35252(self__.f,self__.ch,meta35253__$1));
});

cljs.core.async.t_cljs$core$async35252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35254){
var self__ = this;
var _35254__$1 = this;
return self__.meta35253;
});

cljs.core.async.t_cljs$core$async35252.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35252.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35252.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35256 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35256 = (function (f,ch,meta35253,_,fn1,meta35257){
this.f = f;
this.ch = ch;
this.meta35253 = meta35253;
this._ = _;
this.fn1 = fn1;
this.meta35257 = meta35257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35258,meta35257__$1){
var self__ = this;
var _35258__$1 = this;
return (new cljs.core.async.t_cljs$core$async35256(self__.f,self__.ch,self__.meta35253,self__._,self__.fn1,meta35257__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35258){
var self__ = this;
var _35258__$1 = this;
return self__.meta35257;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35256.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35256.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35251_SHARP_){
return f1.call(null,(((p1__35251_SHARP_ == null))?null:self__.f.call(null,p1__35251_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35256.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35253","meta35253",1966432365,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35252","cljs.core.async/t_cljs$core$async35252",78184275,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35257","meta35257",-5166732,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35256";

cljs.core.async.t_cljs$core$async35256.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35256");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35256.
 */
cljs.core.async.__GT_t_cljs$core$async35256 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35256(f__$1,ch__$1,meta35253__$1,___$2,fn1__$1,meta35257){
return (new cljs.core.async.t_cljs$core$async35256(f__$1,ch__$1,meta35253__$1,___$2,fn1__$1,meta35257));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35256(self__.f,self__.ch,self__.meta35253,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35252.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35253","meta35253",1966432365,null)], null);
});

cljs.core.async.t_cljs$core$async35252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35252";

cljs.core.async.t_cljs$core$async35252.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35252");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35252.
 */
cljs.core.async.__GT_t_cljs$core$async35252 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35252(f__$1,ch__$1,meta35253){
return (new cljs.core.async.t_cljs$core$async35252(f__$1,ch__$1,meta35253));
});

}

return (new cljs.core.async.t_cljs$core$async35252(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35268 = (function (f,ch,meta35269){
this.f = f;
this.ch = ch;
this.meta35269 = meta35269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35270,meta35269__$1){
var self__ = this;
var _35270__$1 = this;
return (new cljs.core.async.t_cljs$core$async35268(self__.f,self__.ch,meta35269__$1));
});

cljs.core.async.t_cljs$core$async35268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35270){
var self__ = this;
var _35270__$1 = this;
return self__.meta35269;
});

cljs.core.async.t_cljs$core$async35268.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35268.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35268.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35269","meta35269",971952853,null)], null);
});

cljs.core.async.t_cljs$core$async35268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35268";

cljs.core.async.t_cljs$core$async35268.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35268");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35268.
 */
cljs.core.async.__GT_t_cljs$core$async35268 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35268(f__$1,ch__$1,meta35269){
return (new cljs.core.async.t_cljs$core$async35268(f__$1,ch__$1,meta35269));
});

}

return (new cljs.core.async.t_cljs$core$async35268(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35271 = (function (p,ch,meta35272){
this.p = p;
this.ch = ch;
this.meta35272 = meta35272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35273,meta35272__$1){
var self__ = this;
var _35273__$1 = this;
return (new cljs.core.async.t_cljs$core$async35271(self__.p,self__.ch,meta35272__$1));
});

cljs.core.async.t_cljs$core$async35271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35273){
var self__ = this;
var _35273__$1 = this;
return self__.meta35272;
});

cljs.core.async.t_cljs$core$async35271.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35271.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35271.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35271.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35271.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35271.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35271.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35272","meta35272",-983581732,null)], null);
});

cljs.core.async.t_cljs$core$async35271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35271";

cljs.core.async.t_cljs$core$async35271.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35271");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35271.
 */
cljs.core.async.__GT_t_cljs$core$async35271 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35271(p__$1,ch__$1,meta35272){
return (new cljs.core.async.t_cljs$core$async35271(p__$1,ch__$1,meta35272));
});

}

return (new cljs.core.async.t_cljs$core$async35271(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35280 = arguments.length;
switch (G__35280) {
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
var c__13946__auto___35327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___35327,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___35327,out){
return (function (state_35302){
var state_val_35303 = (state_35302[(1)]);
if((state_val_35303 === (7))){
var inst_35298 = (state_35302[(2)]);
var state_35302__$1 = state_35302;
var statearr_35304_35328 = state_35302__$1;
(statearr_35304_35328[(2)] = inst_35298);

(statearr_35304_35328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35303 === (1))){
var state_35302__$1 = state_35302;
var statearr_35305_35329 = state_35302__$1;
(statearr_35305_35329[(2)] = null);

(statearr_35305_35329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35303 === (4))){
var inst_35284 = (state_35302[(7)]);
var inst_35284__$1 = (state_35302[(2)]);
var inst_35285 = (inst_35284__$1 == null);
var state_35302__$1 = (function (){var statearr_35306 = state_35302;
(statearr_35306[(7)] = inst_35284__$1);

return statearr_35306;
})();
if(cljs.core.truth_(inst_35285)){
var statearr_35307_35330 = state_35302__$1;
(statearr_35307_35330[(1)] = (5));

} else {
var statearr_35308_35331 = state_35302__$1;
(statearr_35308_35331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35303 === (6))){
var inst_35284 = (state_35302[(7)]);
var inst_35289 = p.call(null,inst_35284);
var state_35302__$1 = state_35302;
if(cljs.core.truth_(inst_35289)){
var statearr_35309_35334 = state_35302__$1;
(statearr_35309_35334[(1)] = (8));

} else {
var statearr_35310_35335 = state_35302__$1;
(statearr_35310_35335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35303 === (3))){
var inst_35300 = (state_35302[(2)]);
var state_35302__$1 = state_35302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35302__$1,inst_35300);
} else {
if((state_val_35303 === (2))){
var state_35302__$1 = state_35302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35302__$1,(4),ch);
} else {
if((state_val_35303 === (11))){
var inst_35292 = (state_35302[(2)]);
var state_35302__$1 = state_35302;
var statearr_35311_35339 = state_35302__$1;
(statearr_35311_35339[(2)] = inst_35292);

(statearr_35311_35339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35303 === (9))){
var state_35302__$1 = state_35302;
var statearr_35315_35341 = state_35302__$1;
(statearr_35315_35341[(2)] = null);

(statearr_35315_35341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35303 === (5))){
var inst_35287 = cljs.core.async.close_BANG_.call(null,out);
var state_35302__$1 = state_35302;
var statearr_35316_35342 = state_35302__$1;
(statearr_35316_35342[(2)] = inst_35287);

(statearr_35316_35342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35303 === (10))){
var inst_35295 = (state_35302[(2)]);
var state_35302__$1 = (function (){var statearr_35317 = state_35302;
(statearr_35317[(8)] = inst_35295);

return statearr_35317;
})();
var statearr_35318_35343 = state_35302__$1;
(statearr_35318_35343[(2)] = null);

(statearr_35318_35343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35303 === (8))){
var inst_35284 = (state_35302[(7)]);
var state_35302__$1 = state_35302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35302__$1,(11),out,inst_35284);
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
});})(c__13946__auto___35327,out))
;
return ((function (switch__13856__auto__,c__13946__auto___35327,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_35321 = [null,null,null,null,null,null,null,null,null];
(statearr_35321[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_35321[(1)] = (1));

return statearr_35321;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_35302){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_35302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e35322){if((e35322 instanceof Object)){
var ex__13860__auto__ = e35322;
var statearr_35323_35344 = state_35302;
(statearr_35323_35344[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35345 = state_35302;
state_35302 = G__35345;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_35302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_35302);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___35327,out))
})();
var state__13948__auto__ = (function (){var statearr_35324 = f__13947__auto__.call(null);
(statearr_35324[(6)] = c__13946__auto___35327);

return statearr_35324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___35327,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35347 = arguments.length;
switch (G__35347) {
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
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_35410){
var state_val_35411 = (state_35410[(1)]);
if((state_val_35411 === (7))){
var inst_35406 = (state_35410[(2)]);
var state_35410__$1 = state_35410;
var statearr_35412_35450 = state_35410__$1;
(statearr_35412_35450[(2)] = inst_35406);

(statearr_35412_35450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (20))){
var inst_35376 = (state_35410[(7)]);
var inst_35387 = (state_35410[(2)]);
var inst_35388 = cljs.core.next.call(null,inst_35376);
var inst_35362 = inst_35388;
var inst_35363 = null;
var inst_35364 = (0);
var inst_35365 = (0);
var state_35410__$1 = (function (){var statearr_35413 = state_35410;
(statearr_35413[(8)] = inst_35365);

(statearr_35413[(9)] = inst_35387);

(statearr_35413[(10)] = inst_35362);

(statearr_35413[(11)] = inst_35364);

(statearr_35413[(12)] = inst_35363);

return statearr_35413;
})();
var statearr_35414_35451 = state_35410__$1;
(statearr_35414_35451[(2)] = null);

(statearr_35414_35451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (1))){
var state_35410__$1 = state_35410;
var statearr_35415_35452 = state_35410__$1;
(statearr_35415_35452[(2)] = null);

(statearr_35415_35452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (4))){
var inst_35351 = (state_35410[(13)]);
var inst_35351__$1 = (state_35410[(2)]);
var inst_35352 = (inst_35351__$1 == null);
var state_35410__$1 = (function (){var statearr_35416 = state_35410;
(statearr_35416[(13)] = inst_35351__$1);

return statearr_35416;
})();
if(cljs.core.truth_(inst_35352)){
var statearr_35417_35453 = state_35410__$1;
(statearr_35417_35453[(1)] = (5));

} else {
var statearr_35418_35454 = state_35410__$1;
(statearr_35418_35454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (15))){
var state_35410__$1 = state_35410;
var statearr_35422_35455 = state_35410__$1;
(statearr_35422_35455[(2)] = null);

(statearr_35422_35455[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (21))){
var state_35410__$1 = state_35410;
var statearr_35423_35456 = state_35410__$1;
(statearr_35423_35456[(2)] = null);

(statearr_35423_35456[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (13))){
var inst_35365 = (state_35410[(8)]);
var inst_35362 = (state_35410[(10)]);
var inst_35364 = (state_35410[(11)]);
var inst_35363 = (state_35410[(12)]);
var inst_35372 = (state_35410[(2)]);
var inst_35373 = (inst_35365 + (1));
var tmp35419 = inst_35362;
var tmp35420 = inst_35364;
var tmp35421 = inst_35363;
var inst_35362__$1 = tmp35419;
var inst_35363__$1 = tmp35421;
var inst_35364__$1 = tmp35420;
var inst_35365__$1 = inst_35373;
var state_35410__$1 = (function (){var statearr_35424 = state_35410;
(statearr_35424[(8)] = inst_35365__$1);

(statearr_35424[(10)] = inst_35362__$1);

(statearr_35424[(14)] = inst_35372);

(statearr_35424[(11)] = inst_35364__$1);

(statearr_35424[(12)] = inst_35363__$1);

return statearr_35424;
})();
var statearr_35425_35458 = state_35410__$1;
(statearr_35425_35458[(2)] = null);

(statearr_35425_35458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (22))){
var state_35410__$1 = state_35410;
var statearr_35426_35459 = state_35410__$1;
(statearr_35426_35459[(2)] = null);

(statearr_35426_35459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (6))){
var inst_35351 = (state_35410[(13)]);
var inst_35360 = f.call(null,inst_35351);
var inst_35361 = cljs.core.seq.call(null,inst_35360);
var inst_35362 = inst_35361;
var inst_35363 = null;
var inst_35364 = (0);
var inst_35365 = (0);
var state_35410__$1 = (function (){var statearr_35427 = state_35410;
(statearr_35427[(8)] = inst_35365);

(statearr_35427[(10)] = inst_35362);

(statearr_35427[(11)] = inst_35364);

(statearr_35427[(12)] = inst_35363);

return statearr_35427;
})();
var statearr_35428_35461 = state_35410__$1;
(statearr_35428_35461[(2)] = null);

(statearr_35428_35461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (17))){
var inst_35376 = (state_35410[(7)]);
var inst_35380 = cljs.core.chunk_first.call(null,inst_35376);
var inst_35381 = cljs.core.chunk_rest.call(null,inst_35376);
var inst_35382 = cljs.core.count.call(null,inst_35380);
var inst_35362 = inst_35381;
var inst_35363 = inst_35380;
var inst_35364 = inst_35382;
var inst_35365 = (0);
var state_35410__$1 = (function (){var statearr_35429 = state_35410;
(statearr_35429[(8)] = inst_35365);

(statearr_35429[(10)] = inst_35362);

(statearr_35429[(11)] = inst_35364);

(statearr_35429[(12)] = inst_35363);

return statearr_35429;
})();
var statearr_35430_35462 = state_35410__$1;
(statearr_35430_35462[(2)] = null);

(statearr_35430_35462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (3))){
var inst_35408 = (state_35410[(2)]);
var state_35410__$1 = state_35410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35410__$1,inst_35408);
} else {
if((state_val_35411 === (12))){
var inst_35396 = (state_35410[(2)]);
var state_35410__$1 = state_35410;
var statearr_35431_35464 = state_35410__$1;
(statearr_35431_35464[(2)] = inst_35396);

(statearr_35431_35464[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (2))){
var state_35410__$1 = state_35410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35410__$1,(4),in$);
} else {
if((state_val_35411 === (23))){
var inst_35404 = (state_35410[(2)]);
var state_35410__$1 = state_35410;
var statearr_35432_35466 = state_35410__$1;
(statearr_35432_35466[(2)] = inst_35404);

(statearr_35432_35466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (19))){
var inst_35391 = (state_35410[(2)]);
var state_35410__$1 = state_35410;
var statearr_35433_35467 = state_35410__$1;
(statearr_35433_35467[(2)] = inst_35391);

(statearr_35433_35467[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (11))){
var inst_35376 = (state_35410[(7)]);
var inst_35362 = (state_35410[(10)]);
var inst_35376__$1 = cljs.core.seq.call(null,inst_35362);
var state_35410__$1 = (function (){var statearr_35434 = state_35410;
(statearr_35434[(7)] = inst_35376__$1);

return statearr_35434;
})();
if(inst_35376__$1){
var statearr_35435_35468 = state_35410__$1;
(statearr_35435_35468[(1)] = (14));

} else {
var statearr_35436_35469 = state_35410__$1;
(statearr_35436_35469[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (9))){
var inst_35398 = (state_35410[(2)]);
var inst_35399 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35410__$1 = (function (){var statearr_35437 = state_35410;
(statearr_35437[(15)] = inst_35398);

return statearr_35437;
})();
if(cljs.core.truth_(inst_35399)){
var statearr_35438_35470 = state_35410__$1;
(statearr_35438_35470[(1)] = (21));

} else {
var statearr_35439_35471 = state_35410__$1;
(statearr_35439_35471[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (5))){
var inst_35354 = cljs.core.async.close_BANG_.call(null,out);
var state_35410__$1 = state_35410;
var statearr_35440_35472 = state_35410__$1;
(statearr_35440_35472[(2)] = inst_35354);

(statearr_35440_35472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (14))){
var inst_35376 = (state_35410[(7)]);
var inst_35378 = cljs.core.chunked_seq_QMARK_.call(null,inst_35376);
var state_35410__$1 = state_35410;
if(inst_35378){
var statearr_35441_35473 = state_35410__$1;
(statearr_35441_35473[(1)] = (17));

} else {
var statearr_35442_35474 = state_35410__$1;
(statearr_35442_35474[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (16))){
var inst_35394 = (state_35410[(2)]);
var state_35410__$1 = state_35410;
var statearr_35443_35475 = state_35410__$1;
(statearr_35443_35475[(2)] = inst_35394);

(statearr_35443_35475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (10))){
var inst_35365 = (state_35410[(8)]);
var inst_35363 = (state_35410[(12)]);
var inst_35370 = cljs.core._nth.call(null,inst_35363,inst_35365);
var state_35410__$1 = state_35410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35410__$1,(13),out,inst_35370);
} else {
if((state_val_35411 === (18))){
var inst_35376 = (state_35410[(7)]);
var inst_35385 = cljs.core.first.call(null,inst_35376);
var state_35410__$1 = state_35410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35410__$1,(20),out,inst_35385);
} else {
if((state_val_35411 === (8))){
var inst_35365 = (state_35410[(8)]);
var inst_35364 = (state_35410[(11)]);
var inst_35367 = (inst_35365 < inst_35364);
var inst_35368 = inst_35367;
var state_35410__$1 = state_35410;
if(cljs.core.truth_(inst_35368)){
var statearr_35444_35476 = state_35410__$1;
(statearr_35444_35476[(1)] = (10));

} else {
var statearr_35445_35477 = state_35410__$1;
(statearr_35445_35477[(1)] = (11));

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
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13857__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13857__auto____0 = (function (){
var statearr_35446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35446[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13857__auto__);

(statearr_35446[(1)] = (1));

return statearr_35446;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13857__auto____1 = (function (state_35410){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_35410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e35447){if((e35447 instanceof Object)){
var ex__13860__auto__ = e35447;
var statearr_35448_35478 = state_35410;
(statearr_35448_35478[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35480 = state_35410;
state_35410 = G__35480;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13857__auto__ = function(state_35410){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13857__auto____1.call(this,state_35410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13857__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_35449 = f__13947__auto__.call(null);
(statearr_35449[(6)] = c__13946__auto__);

return statearr_35449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35482 = arguments.length;
switch (G__35482) {
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
var G__35485 = arguments.length;
switch (G__35485) {
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
var G__35488 = arguments.length;
switch (G__35488) {
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
var c__13946__auto___35538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___35538,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___35538,out){
return (function (state_35512){
var state_val_35513 = (state_35512[(1)]);
if((state_val_35513 === (7))){
var inst_35507 = (state_35512[(2)]);
var state_35512__$1 = state_35512;
var statearr_35514_35539 = state_35512__$1;
(statearr_35514_35539[(2)] = inst_35507);

(statearr_35514_35539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (1))){
var inst_35489 = null;
var state_35512__$1 = (function (){var statearr_35515 = state_35512;
(statearr_35515[(7)] = inst_35489);

return statearr_35515;
})();
var statearr_35516_35540 = state_35512__$1;
(statearr_35516_35540[(2)] = null);

(statearr_35516_35540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (4))){
var inst_35492 = (state_35512[(8)]);
var inst_35492__$1 = (state_35512[(2)]);
var inst_35493 = (inst_35492__$1 == null);
var inst_35494 = cljs.core.not.call(null,inst_35493);
var state_35512__$1 = (function (){var statearr_35517 = state_35512;
(statearr_35517[(8)] = inst_35492__$1);

return statearr_35517;
})();
if(inst_35494){
var statearr_35518_35545 = state_35512__$1;
(statearr_35518_35545[(1)] = (5));

} else {
var statearr_35519_35546 = state_35512__$1;
(statearr_35519_35546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (6))){
var state_35512__$1 = state_35512;
var statearr_35520_35547 = state_35512__$1;
(statearr_35520_35547[(2)] = null);

(statearr_35520_35547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (3))){
var inst_35509 = (state_35512[(2)]);
var inst_35510 = cljs.core.async.close_BANG_.call(null,out);
var state_35512__$1 = (function (){var statearr_35521 = state_35512;
(statearr_35521[(9)] = inst_35509);

return statearr_35521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35512__$1,inst_35510);
} else {
if((state_val_35513 === (2))){
var state_35512__$1 = state_35512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35512__$1,(4),ch);
} else {
if((state_val_35513 === (11))){
var inst_35492 = (state_35512[(8)]);
var inst_35501 = (state_35512[(2)]);
var inst_35489 = inst_35492;
var state_35512__$1 = (function (){var statearr_35522 = state_35512;
(statearr_35522[(10)] = inst_35501);

(statearr_35522[(7)] = inst_35489);

return statearr_35522;
})();
var statearr_35523_35550 = state_35512__$1;
(statearr_35523_35550[(2)] = null);

(statearr_35523_35550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (9))){
var inst_35492 = (state_35512[(8)]);
var state_35512__$1 = state_35512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35512__$1,(11),out,inst_35492);
} else {
if((state_val_35513 === (5))){
var inst_35492 = (state_35512[(8)]);
var inst_35489 = (state_35512[(7)]);
var inst_35496 = cljs.core._EQ_.call(null,inst_35492,inst_35489);
var state_35512__$1 = state_35512;
if(inst_35496){
var statearr_35525_35559 = state_35512__$1;
(statearr_35525_35559[(1)] = (8));

} else {
var statearr_35526_35560 = state_35512__$1;
(statearr_35526_35560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (10))){
var inst_35504 = (state_35512[(2)]);
var state_35512__$1 = state_35512;
var statearr_35527_35563 = state_35512__$1;
(statearr_35527_35563[(2)] = inst_35504);

(statearr_35527_35563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (8))){
var inst_35489 = (state_35512[(7)]);
var tmp35524 = inst_35489;
var inst_35489__$1 = tmp35524;
var state_35512__$1 = (function (){var statearr_35528 = state_35512;
(statearr_35528[(7)] = inst_35489__$1);

return statearr_35528;
})();
var statearr_35529_35568 = state_35512__$1;
(statearr_35529_35568[(2)] = null);

(statearr_35529_35568[(1)] = (2));


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
});})(c__13946__auto___35538,out))
;
return ((function (switch__13856__auto__,c__13946__auto___35538,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_35530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35530[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_35530[(1)] = (1));

return statearr_35530;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_35512){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_35512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e35534){if((e35534 instanceof Object)){
var ex__13860__auto__ = e35534;
var statearr_35535_35569 = state_35512;
(statearr_35535_35569[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35570 = state_35512;
state_35512 = G__35570;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_35512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_35512);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___35538,out))
})();
var state__13948__auto__ = (function (){var statearr_35536 = f__13947__auto__.call(null);
(statearr_35536[(6)] = c__13946__auto___35538);

return statearr_35536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___35538,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35572 = arguments.length;
switch (G__35572) {
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
var c__13946__auto___35638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___35638,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___35638,out){
return (function (state_35610){
var state_val_35611 = (state_35610[(1)]);
if((state_val_35611 === (7))){
var inst_35606 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35612_35639 = state_35610__$1;
(statearr_35612_35639[(2)] = inst_35606);

(statearr_35612_35639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (1))){
var inst_35573 = (new Array(n));
var inst_35574 = inst_35573;
var inst_35575 = (0);
var state_35610__$1 = (function (){var statearr_35613 = state_35610;
(statearr_35613[(7)] = inst_35574);

(statearr_35613[(8)] = inst_35575);

return statearr_35613;
})();
var statearr_35614_35640 = state_35610__$1;
(statearr_35614_35640[(2)] = null);

(statearr_35614_35640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (4))){
var inst_35578 = (state_35610[(9)]);
var inst_35578__$1 = (state_35610[(2)]);
var inst_35579 = (inst_35578__$1 == null);
var inst_35580 = cljs.core.not.call(null,inst_35579);
var state_35610__$1 = (function (){var statearr_35615 = state_35610;
(statearr_35615[(9)] = inst_35578__$1);

return statearr_35615;
})();
if(inst_35580){
var statearr_35616_35641 = state_35610__$1;
(statearr_35616_35641[(1)] = (5));

} else {
var statearr_35617_35642 = state_35610__$1;
(statearr_35617_35642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (15))){
var inst_35600 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35618_35643 = state_35610__$1;
(statearr_35618_35643[(2)] = inst_35600);

(statearr_35618_35643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (13))){
var state_35610__$1 = state_35610;
var statearr_35619_35644 = state_35610__$1;
(statearr_35619_35644[(2)] = null);

(statearr_35619_35644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (6))){
var inst_35575 = (state_35610[(8)]);
var inst_35596 = (inst_35575 > (0));
var state_35610__$1 = state_35610;
if(cljs.core.truth_(inst_35596)){
var statearr_35620_35645 = state_35610__$1;
(statearr_35620_35645[(1)] = (12));

} else {
var statearr_35621_35646 = state_35610__$1;
(statearr_35621_35646[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (3))){
var inst_35608 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35610__$1,inst_35608);
} else {
if((state_val_35611 === (12))){
var inst_35574 = (state_35610[(7)]);
var inst_35598 = cljs.core.vec.call(null,inst_35574);
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35610__$1,(15),out,inst_35598);
} else {
if((state_val_35611 === (2))){
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35610__$1,(4),ch);
} else {
if((state_val_35611 === (11))){
var inst_35590 = (state_35610[(2)]);
var inst_35591 = (new Array(n));
var inst_35574 = inst_35591;
var inst_35575 = (0);
var state_35610__$1 = (function (){var statearr_35622 = state_35610;
(statearr_35622[(7)] = inst_35574);

(statearr_35622[(8)] = inst_35575);

(statearr_35622[(10)] = inst_35590);

return statearr_35622;
})();
var statearr_35623_35647 = state_35610__$1;
(statearr_35623_35647[(2)] = null);

(statearr_35623_35647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (9))){
var inst_35574 = (state_35610[(7)]);
var inst_35588 = cljs.core.vec.call(null,inst_35574);
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35610__$1,(11),out,inst_35588);
} else {
if((state_val_35611 === (5))){
var inst_35574 = (state_35610[(7)]);
var inst_35575 = (state_35610[(8)]);
var inst_35578 = (state_35610[(9)]);
var inst_35583 = (state_35610[(11)]);
var inst_35582 = (inst_35574[inst_35575] = inst_35578);
var inst_35583__$1 = (inst_35575 + (1));
var inst_35584 = (inst_35583__$1 < n);
var state_35610__$1 = (function (){var statearr_35624 = state_35610;
(statearr_35624[(12)] = inst_35582);

(statearr_35624[(11)] = inst_35583__$1);

return statearr_35624;
})();
if(cljs.core.truth_(inst_35584)){
var statearr_35625_35648 = state_35610__$1;
(statearr_35625_35648[(1)] = (8));

} else {
var statearr_35626_35649 = state_35610__$1;
(statearr_35626_35649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (14))){
var inst_35603 = (state_35610[(2)]);
var inst_35604 = cljs.core.async.close_BANG_.call(null,out);
var state_35610__$1 = (function (){var statearr_35628 = state_35610;
(statearr_35628[(13)] = inst_35603);

return statearr_35628;
})();
var statearr_35629_35650 = state_35610__$1;
(statearr_35629_35650[(2)] = inst_35604);

(statearr_35629_35650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (10))){
var inst_35594 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35630_35651 = state_35610__$1;
(statearr_35630_35651[(2)] = inst_35594);

(statearr_35630_35651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (8))){
var inst_35574 = (state_35610[(7)]);
var inst_35583 = (state_35610[(11)]);
var tmp35627 = inst_35574;
var inst_35574__$1 = tmp35627;
var inst_35575 = inst_35583;
var state_35610__$1 = (function (){var statearr_35631 = state_35610;
(statearr_35631[(7)] = inst_35574__$1);

(statearr_35631[(8)] = inst_35575);

return statearr_35631;
})();
var statearr_35632_35656 = state_35610__$1;
(statearr_35632_35656[(2)] = null);

(statearr_35632_35656[(1)] = (2));


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
});})(c__13946__auto___35638,out))
;
return ((function (switch__13856__auto__,c__13946__auto___35638,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_35633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35633[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_35633[(1)] = (1));

return statearr_35633;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_35610){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_35610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e35634){if((e35634 instanceof Object)){
var ex__13860__auto__ = e35634;
var statearr_35635_35657 = state_35610;
(statearr_35635_35657[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35658 = state_35610;
state_35610 = G__35658;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_35610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_35610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___35638,out))
})();
var state__13948__auto__ = (function (){var statearr_35636 = f__13947__auto__.call(null);
(statearr_35636[(6)] = c__13946__auto___35638);

return statearr_35636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___35638,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35660 = arguments.length;
switch (G__35660) {
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
var c__13946__auto___35732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___35732,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___35732,out){
return (function (state_35702){
var state_val_35703 = (state_35702[(1)]);
if((state_val_35703 === (7))){
var inst_35698 = (state_35702[(2)]);
var state_35702__$1 = state_35702;
var statearr_35704_35735 = state_35702__$1;
(statearr_35704_35735[(2)] = inst_35698);

(statearr_35704_35735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35703 === (1))){
var inst_35661 = [];
var inst_35662 = inst_35661;
var inst_35663 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35702__$1 = (function (){var statearr_35705 = state_35702;
(statearr_35705[(7)] = inst_35662);

(statearr_35705[(8)] = inst_35663);

return statearr_35705;
})();
var statearr_35706_35737 = state_35702__$1;
(statearr_35706_35737[(2)] = null);

(statearr_35706_35737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35703 === (4))){
var inst_35666 = (state_35702[(9)]);
var inst_35666__$1 = (state_35702[(2)]);
var inst_35667 = (inst_35666__$1 == null);
var inst_35668 = cljs.core.not.call(null,inst_35667);
var state_35702__$1 = (function (){var statearr_35707 = state_35702;
(statearr_35707[(9)] = inst_35666__$1);

return statearr_35707;
})();
if(inst_35668){
var statearr_35708_35738 = state_35702__$1;
(statearr_35708_35738[(1)] = (5));

} else {
var statearr_35709_35739 = state_35702__$1;
(statearr_35709_35739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35703 === (15))){
var inst_35692 = (state_35702[(2)]);
var state_35702__$1 = state_35702;
var statearr_35710_35740 = state_35702__$1;
(statearr_35710_35740[(2)] = inst_35692);

(statearr_35710_35740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35703 === (13))){
var state_35702__$1 = state_35702;
var statearr_35711_35741 = state_35702__$1;
(statearr_35711_35741[(2)] = null);

(statearr_35711_35741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35703 === (6))){
var inst_35662 = (state_35702[(7)]);
var inst_35687 = inst_35662.length;
var inst_35688 = (inst_35687 > (0));
var state_35702__$1 = state_35702;
if(cljs.core.truth_(inst_35688)){
var statearr_35712_35742 = state_35702__$1;
(statearr_35712_35742[(1)] = (12));

} else {
var statearr_35713_35743 = state_35702__$1;
(statearr_35713_35743[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35703 === (3))){
var inst_35700 = (state_35702[(2)]);
var state_35702__$1 = state_35702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35702__$1,inst_35700);
} else {
if((state_val_35703 === (12))){
var inst_35662 = (state_35702[(7)]);
var inst_35690 = cljs.core.vec.call(null,inst_35662);
var state_35702__$1 = state_35702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35702__$1,(15),out,inst_35690);
} else {
if((state_val_35703 === (2))){
var state_35702__$1 = state_35702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35702__$1,(4),ch);
} else {
if((state_val_35703 === (11))){
var inst_35666 = (state_35702[(9)]);
var inst_35670 = (state_35702[(10)]);
var inst_35680 = (state_35702[(2)]);
var inst_35681 = [];
var inst_35682 = inst_35681.push(inst_35666);
var inst_35662 = inst_35681;
var inst_35663 = inst_35670;
var state_35702__$1 = (function (){var statearr_35716 = state_35702;
(statearr_35716[(7)] = inst_35662);

(statearr_35716[(11)] = inst_35682);

(statearr_35716[(8)] = inst_35663);

(statearr_35716[(12)] = inst_35680);

return statearr_35716;
})();
var statearr_35717_35745 = state_35702__$1;
(statearr_35717_35745[(2)] = null);

(statearr_35717_35745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35703 === (9))){
var inst_35662 = (state_35702[(7)]);
var inst_35678 = cljs.core.vec.call(null,inst_35662);
var state_35702__$1 = state_35702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35702__$1,(11),out,inst_35678);
} else {
if((state_val_35703 === (5))){
var inst_35666 = (state_35702[(9)]);
var inst_35663 = (state_35702[(8)]);
var inst_35670 = (state_35702[(10)]);
var inst_35670__$1 = f.call(null,inst_35666);
var inst_35671 = cljs.core._EQ_.call(null,inst_35670__$1,inst_35663);
var inst_35672 = cljs.core.keyword_identical_QMARK_.call(null,inst_35663,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35673 = ((inst_35671) || (inst_35672));
var state_35702__$1 = (function (){var statearr_35718 = state_35702;
(statearr_35718[(10)] = inst_35670__$1);

return statearr_35718;
})();
if(cljs.core.truth_(inst_35673)){
var statearr_35719_35752 = state_35702__$1;
(statearr_35719_35752[(1)] = (8));

} else {
var statearr_35720_35753 = state_35702__$1;
(statearr_35720_35753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35703 === (14))){
var inst_35695 = (state_35702[(2)]);
var inst_35696 = cljs.core.async.close_BANG_.call(null,out);
var state_35702__$1 = (function (){var statearr_35722 = state_35702;
(statearr_35722[(13)] = inst_35695);

return statearr_35722;
})();
var statearr_35723_35754 = state_35702__$1;
(statearr_35723_35754[(2)] = inst_35696);

(statearr_35723_35754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35703 === (10))){
var inst_35685 = (state_35702[(2)]);
var state_35702__$1 = state_35702;
var statearr_35724_35755 = state_35702__$1;
(statearr_35724_35755[(2)] = inst_35685);

(statearr_35724_35755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35703 === (8))){
var inst_35662 = (state_35702[(7)]);
var inst_35666 = (state_35702[(9)]);
var inst_35670 = (state_35702[(10)]);
var inst_35675 = inst_35662.push(inst_35666);
var tmp35721 = inst_35662;
var inst_35662__$1 = tmp35721;
var inst_35663 = inst_35670;
var state_35702__$1 = (function (){var statearr_35725 = state_35702;
(statearr_35725[(7)] = inst_35662__$1);

(statearr_35725[(8)] = inst_35663);

(statearr_35725[(14)] = inst_35675);

return statearr_35725;
})();
var statearr_35726_35757 = state_35702__$1;
(statearr_35726_35757[(2)] = null);

(statearr_35726_35757[(1)] = (2));


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
});})(c__13946__auto___35732,out))
;
return ((function (switch__13856__auto__,c__13946__auto___35732,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_35727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35727[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_35727[(1)] = (1));

return statearr_35727;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_35702){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_35702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e35728){if((e35728 instanceof Object)){
var ex__13860__auto__ = e35728;
var statearr_35729_35758 = state_35702;
(statearr_35729_35758[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35759 = state_35702;
state_35702 = G__35759;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_35702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_35702);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___35732,out))
})();
var state__13948__auto__ = (function (){var statearr_35730 = f__13947__auto__.call(null);
(statearr_35730[(6)] = c__13946__auto___35732);

return statearr_35730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___35732,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
