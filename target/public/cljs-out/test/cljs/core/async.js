// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15694 = arguments.length;
switch (G__15694) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15695 = (function (f,blockable,meta15696){
this.f = f;
this.blockable = blockable;
this.meta15696 = meta15696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15697,meta15696__$1){
var self__ = this;
var _15697__$1 = this;
return (new cljs.core.async.t_cljs$core$async15695(self__.f,self__.blockable,meta15696__$1));
});

cljs.core.async.t_cljs$core$async15695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15697){
var self__ = this;
var _15697__$1 = this;
return self__.meta15696;
});

cljs.core.async.t_cljs$core$async15695.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15695.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15695.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15695.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15696","meta15696",726493518,null)], null);
});

cljs.core.async.t_cljs$core$async15695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15695";

cljs.core.async.t_cljs$core$async15695.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15695");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15695.
 */
cljs.core.async.__GT_t_cljs$core$async15695 = (function cljs$core$async$__GT_t_cljs$core$async15695(f__$1,blockable__$1,meta15696){
return (new cljs.core.async.t_cljs$core$async15695(f__$1,blockable__$1,meta15696));
});

}

return (new cljs.core.async.t_cljs$core$async15695(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15701 = arguments.length;
switch (G__15701) {
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
var G__15704 = arguments.length;
switch (G__15704) {
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
var G__15707 = arguments.length;
switch (G__15707) {
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
var val_15709 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15709);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15709,ret){
return (function (){
return fn1.call(null,val_15709);
});})(val_15709,ret))
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
var G__15711 = arguments.length;
switch (G__15711) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5802__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5802__auto__))
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
var n__4607__auto___15713 = n;
var x_15714 = (0);
while(true){
if((x_15714 < n__4607__auto___15713)){
(a[x_15714] = (0));

var G__15715 = (x_15714 + (1));
x_15714 = G__15715;
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

var G__15716 = (i + (1));
i = G__15716;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15717 = (function (flag,meta15718){
this.flag = flag;
this.meta15718 = meta15718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15719,meta15718__$1){
var self__ = this;
var _15719__$1 = this;
return (new cljs.core.async.t_cljs$core$async15717(self__.flag,meta15718__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15719){
var self__ = this;
var _15719__$1 = this;
return self__.meta15718;
});})(flag))
;

cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15717.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15718","meta15718",-688430682,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15717";

cljs.core.async.t_cljs$core$async15717.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15717");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15717.
 */
cljs.core.async.__GT_t_cljs$core$async15717 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15717(flag__$1,meta15718){
return (new cljs.core.async.t_cljs$core$async15717(flag__$1,meta15718));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15717(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15720 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15720 = (function (flag,cb,meta15721){
this.flag = flag;
this.cb = cb;
this.meta15721 = meta15721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15722,meta15721__$1){
var self__ = this;
var _15722__$1 = this;
return (new cljs.core.async.t_cljs$core$async15720(self__.flag,self__.cb,meta15721__$1));
});

cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15722){
var self__ = this;
var _15722__$1 = this;
return self__.meta15721;
});

cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15720.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15721","meta15721",174841331,null)], null);
});

cljs.core.async.t_cljs$core$async15720.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15720";

cljs.core.async.t_cljs$core$async15720.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15720");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15720.
 */
cljs.core.async.__GT_t_cljs$core$async15720 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15720(flag__$1,cb__$1,meta15721){
return (new cljs.core.async.t_cljs$core$async15720(flag__$1,cb__$1,meta15721));
});

}

return (new cljs.core.async.t_cljs$core$async15720(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15723_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15723_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15724_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15724_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15725 = (i + (1));
i = G__15725;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___15731 = arguments.length;
var i__4731__auto___15732 = (0);
while(true){
if((i__4731__auto___15732 < len__4730__auto___15731)){
args__4736__auto__.push((arguments[i__4731__auto___15732]));

var G__15733 = (i__4731__auto___15732 + (1));
i__4731__auto___15732 = G__15733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15728){
var map__15729 = p__15728;
var map__15729__$1 = (((((!((map__15729 == null))))?(((((map__15729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15729):map__15729);
var opts = map__15729__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15726){
var G__15727 = cljs.core.first.call(null,seq15726);
var seq15726__$1 = cljs.core.next.call(null,seq15726);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15727,seq15726__$1);
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
var G__15735 = arguments.length;
switch (G__15735) {
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
var c__15634__auto___15781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___15781){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___15781){
return (function (state_15759){
var state_val_15760 = (state_15759[(1)]);
if((state_val_15760 === (7))){
var inst_15755 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
var statearr_15761_15782 = state_15759__$1;
(statearr_15761_15782[(2)] = inst_15755);

(statearr_15761_15782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (1))){
var state_15759__$1 = state_15759;
var statearr_15762_15783 = state_15759__$1;
(statearr_15762_15783[(2)] = null);

(statearr_15762_15783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (4))){
var inst_15738 = (state_15759[(7)]);
var inst_15738__$1 = (state_15759[(2)]);
var inst_15739 = (inst_15738__$1 == null);
var state_15759__$1 = (function (){var statearr_15763 = state_15759;
(statearr_15763[(7)] = inst_15738__$1);

return statearr_15763;
})();
if(cljs.core.truth_(inst_15739)){
var statearr_15764_15784 = state_15759__$1;
(statearr_15764_15784[(1)] = (5));

} else {
var statearr_15765_15785 = state_15759__$1;
(statearr_15765_15785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (13))){
var state_15759__$1 = state_15759;
var statearr_15766_15786 = state_15759__$1;
(statearr_15766_15786[(2)] = null);

(statearr_15766_15786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (6))){
var inst_15738 = (state_15759[(7)]);
var state_15759__$1 = state_15759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15759__$1,(11),to,inst_15738);
} else {
if((state_val_15760 === (3))){
var inst_15757 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15759__$1,inst_15757);
} else {
if((state_val_15760 === (12))){
var state_15759__$1 = state_15759;
var statearr_15767_15787 = state_15759__$1;
(statearr_15767_15787[(2)] = null);

(statearr_15767_15787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (2))){
var state_15759__$1 = state_15759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15759__$1,(4),from);
} else {
if((state_val_15760 === (11))){
var inst_15748 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
if(cljs.core.truth_(inst_15748)){
var statearr_15768_15788 = state_15759__$1;
(statearr_15768_15788[(1)] = (12));

} else {
var statearr_15769_15789 = state_15759__$1;
(statearr_15769_15789[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (9))){
var state_15759__$1 = state_15759;
var statearr_15770_15790 = state_15759__$1;
(statearr_15770_15790[(2)] = null);

(statearr_15770_15790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (5))){
var state_15759__$1 = state_15759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15771_15791 = state_15759__$1;
(statearr_15771_15791[(1)] = (8));

} else {
var statearr_15772_15792 = state_15759__$1;
(statearr_15772_15792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (14))){
var inst_15753 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
var statearr_15773_15793 = state_15759__$1;
(statearr_15773_15793[(2)] = inst_15753);

(statearr_15773_15793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (10))){
var inst_15745 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
var statearr_15774_15794 = state_15759__$1;
(statearr_15774_15794[(2)] = inst_15745);

(statearr_15774_15794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (8))){
var inst_15742 = cljs.core.async.close_BANG_.call(null,to);
var state_15759__$1 = state_15759;
var statearr_15775_15795 = state_15759__$1;
(statearr_15775_15795[(2)] = inst_15742);

(statearr_15775_15795[(1)] = (10));


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
});})(c__15634__auto___15781))
;
return ((function (switch__15539__auto__,c__15634__auto___15781){
return (function() {
var cljs$core$async$state_machine__15540__auto__ = null;
var cljs$core$async$state_machine__15540__auto____0 = (function (){
var statearr_15776 = [null,null,null,null,null,null,null,null];
(statearr_15776[(0)] = cljs$core$async$state_machine__15540__auto__);

(statearr_15776[(1)] = (1));

return statearr_15776;
});
var cljs$core$async$state_machine__15540__auto____1 = (function (state_15759){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_15759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e15777){if((e15777 instanceof Object)){
var ex__15543__auto__ = e15777;
var statearr_15778_15796 = state_15759;
(statearr_15778_15796[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15797 = state_15759;
state_15759 = G__15797;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$state_machine__15540__auto__ = function(state_15759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15540__auto____1.call(this,state_15759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15540__auto____0;
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15540__auto____1;
return cljs$core$async$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___15781))
})();
var state__15636__auto__ = (function (){var statearr_15779 = f__15635__auto__.call(null);
(statearr_15779[(6)] = c__15634__auto___15781);

return statearr_15779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___15781))
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
return (function (p__15798){
var vec__15799 = p__15798;
var v = cljs.core.nth.call(null,vec__15799,(0),null);
var p = cljs.core.nth.call(null,vec__15799,(1),null);
var job = vec__15799;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15634__auto___15970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___15970,res,vec__15799,v,p,job,jobs,results){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___15970,res,vec__15799,v,p,job,jobs,results){
return (function (state_15806){
var state_val_15807 = (state_15806[(1)]);
if((state_val_15807 === (1))){
var state_15806__$1 = state_15806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15806__$1,(2),res,v);
} else {
if((state_val_15807 === (2))){
var inst_15803 = (state_15806[(2)]);
var inst_15804 = cljs.core.async.close_BANG_.call(null,res);
var state_15806__$1 = (function (){var statearr_15808 = state_15806;
(statearr_15808[(7)] = inst_15803);

return statearr_15808;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15806__$1,inst_15804);
} else {
return null;
}
}
});})(c__15634__auto___15970,res,vec__15799,v,p,job,jobs,results))
;
return ((function (switch__15539__auto__,c__15634__auto___15970,res,vec__15799,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0 = (function (){
var statearr_15809 = [null,null,null,null,null,null,null,null];
(statearr_15809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__);

(statearr_15809[(1)] = (1));

return statearr_15809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1 = (function (state_15806){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_15806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e15810){if((e15810 instanceof Object)){
var ex__15543__auto__ = e15810;
var statearr_15811_15971 = state_15806;
(statearr_15811_15971[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15972 = state_15806;
state_15806 = G__15972;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__ = function(state_15806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1.call(this,state_15806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___15970,res,vec__15799,v,p,job,jobs,results))
})();
var state__15636__auto__ = (function (){var statearr_15812 = f__15635__auto__.call(null);
(statearr_15812[(6)] = c__15634__auto___15970);

return statearr_15812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___15970,res,vec__15799,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15813){
var vec__15814 = p__15813;
var v = cljs.core.nth.call(null,vec__15814,(0),null);
var p = cljs.core.nth.call(null,vec__15814,(1),null);
var job = vec__15814;
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
var n__4607__auto___15973 = n;
var __15974 = (0);
while(true){
if((__15974 < n__4607__auto___15973)){
var G__15817_15975 = type;
var G__15817_15976__$1 = (((G__15817_15975 instanceof cljs.core.Keyword))?G__15817_15975.fqn:null);
switch (G__15817_15976__$1) {
case "compute":
var c__15634__auto___15978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15974,c__15634__auto___15978,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (__15974,c__15634__auto___15978,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async){
return (function (state_15830){
var state_val_15831 = (state_15830[(1)]);
if((state_val_15831 === (1))){
var state_15830__$1 = state_15830;
var statearr_15832_15979 = state_15830__$1;
(statearr_15832_15979[(2)] = null);

(statearr_15832_15979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (2))){
var state_15830__$1 = state_15830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15830__$1,(4),jobs);
} else {
if((state_val_15831 === (3))){
var inst_15828 = (state_15830[(2)]);
var state_15830__$1 = state_15830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15830__$1,inst_15828);
} else {
if((state_val_15831 === (4))){
var inst_15820 = (state_15830[(2)]);
var inst_15821 = process.call(null,inst_15820);
var state_15830__$1 = state_15830;
if(cljs.core.truth_(inst_15821)){
var statearr_15833_15980 = state_15830__$1;
(statearr_15833_15980[(1)] = (5));

} else {
var statearr_15834_15981 = state_15830__$1;
(statearr_15834_15981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (5))){
var state_15830__$1 = state_15830;
var statearr_15835_15982 = state_15830__$1;
(statearr_15835_15982[(2)] = null);

(statearr_15835_15982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (6))){
var state_15830__$1 = state_15830;
var statearr_15836_15983 = state_15830__$1;
(statearr_15836_15983[(2)] = null);

(statearr_15836_15983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (7))){
var inst_15826 = (state_15830[(2)]);
var state_15830__$1 = state_15830;
var statearr_15837_15984 = state_15830__$1;
(statearr_15837_15984[(2)] = inst_15826);

(statearr_15837_15984[(1)] = (3));


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
});})(__15974,c__15634__auto___15978,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async))
;
return ((function (__15974,switch__15539__auto__,c__15634__auto___15978,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0 = (function (){
var statearr_15838 = [null,null,null,null,null,null,null];
(statearr_15838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__);

(statearr_15838[(1)] = (1));

return statearr_15838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1 = (function (state_15830){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_15830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e15839){if((e15839 instanceof Object)){
var ex__15543__auto__ = e15839;
var statearr_15840_15985 = state_15830;
(statearr_15840_15985[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15986 = state_15830;
state_15830 = G__15986;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__ = function(state_15830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1.call(this,state_15830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__;
})()
;})(__15974,switch__15539__auto__,c__15634__auto___15978,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async))
})();
var state__15636__auto__ = (function (){var statearr_15841 = f__15635__auto__.call(null);
(statearr_15841[(6)] = c__15634__auto___15978);

return statearr_15841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(__15974,c__15634__auto___15978,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async))
);


break;
case "async":
var c__15634__auto___15987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15974,c__15634__auto___15987,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (__15974,c__15634__auto___15987,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async){
return (function (state_15854){
var state_val_15855 = (state_15854[(1)]);
if((state_val_15855 === (1))){
var state_15854__$1 = state_15854;
var statearr_15856_15988 = state_15854__$1;
(statearr_15856_15988[(2)] = null);

(statearr_15856_15988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15855 === (2))){
var state_15854__$1 = state_15854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15854__$1,(4),jobs);
} else {
if((state_val_15855 === (3))){
var inst_15852 = (state_15854[(2)]);
var state_15854__$1 = state_15854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15854__$1,inst_15852);
} else {
if((state_val_15855 === (4))){
var inst_15844 = (state_15854[(2)]);
var inst_15845 = async.call(null,inst_15844);
var state_15854__$1 = state_15854;
if(cljs.core.truth_(inst_15845)){
var statearr_15857_15989 = state_15854__$1;
(statearr_15857_15989[(1)] = (5));

} else {
var statearr_15858_15990 = state_15854__$1;
(statearr_15858_15990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15855 === (5))){
var state_15854__$1 = state_15854;
var statearr_15859_15991 = state_15854__$1;
(statearr_15859_15991[(2)] = null);

(statearr_15859_15991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15855 === (6))){
var state_15854__$1 = state_15854;
var statearr_15860_15992 = state_15854__$1;
(statearr_15860_15992[(2)] = null);

(statearr_15860_15992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15855 === (7))){
var inst_15850 = (state_15854[(2)]);
var state_15854__$1 = state_15854;
var statearr_15861_15993 = state_15854__$1;
(statearr_15861_15993[(2)] = inst_15850);

(statearr_15861_15993[(1)] = (3));


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
});})(__15974,c__15634__auto___15987,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async))
;
return ((function (__15974,switch__15539__auto__,c__15634__auto___15987,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0 = (function (){
var statearr_15862 = [null,null,null,null,null,null,null];
(statearr_15862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__);

(statearr_15862[(1)] = (1));

return statearr_15862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1 = (function (state_15854){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_15854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e15863){if((e15863 instanceof Object)){
var ex__15543__auto__ = e15863;
var statearr_15864_15994 = state_15854;
(statearr_15864_15994[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15995 = state_15854;
state_15854 = G__15995;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__ = function(state_15854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1.call(this,state_15854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__;
})()
;})(__15974,switch__15539__auto__,c__15634__auto___15987,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async))
})();
var state__15636__auto__ = (function (){var statearr_15865 = f__15635__auto__.call(null);
(statearr_15865[(6)] = c__15634__auto___15987);

return statearr_15865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(__15974,c__15634__auto___15987,G__15817_15975,G__15817_15976__$1,n__4607__auto___15973,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15817_15976__$1)].join('')));

}

var G__15996 = (__15974 + (1));
__15974 = G__15996;
continue;
} else {
}
break;
}

var c__15634__auto___15997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___15997,jobs,results,process,async){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___15997,jobs,results,process,async){
return (function (state_15887){
var state_val_15888 = (state_15887[(1)]);
if((state_val_15888 === (7))){
var inst_15883 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
var statearr_15889_15998 = state_15887__$1;
(statearr_15889_15998[(2)] = inst_15883);

(statearr_15889_15998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (1))){
var state_15887__$1 = state_15887;
var statearr_15890_15999 = state_15887__$1;
(statearr_15890_15999[(2)] = null);

(statearr_15890_15999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (4))){
var inst_15868 = (state_15887[(7)]);
var inst_15868__$1 = (state_15887[(2)]);
var inst_15869 = (inst_15868__$1 == null);
var state_15887__$1 = (function (){var statearr_15891 = state_15887;
(statearr_15891[(7)] = inst_15868__$1);

return statearr_15891;
})();
if(cljs.core.truth_(inst_15869)){
var statearr_15892_16000 = state_15887__$1;
(statearr_15892_16000[(1)] = (5));

} else {
var statearr_15893_16001 = state_15887__$1;
(statearr_15893_16001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (6))){
var inst_15873 = (state_15887[(8)]);
var inst_15868 = (state_15887[(7)]);
var inst_15873__$1 = cljs.core.async.chan.call(null,(1));
var inst_15874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15875 = [inst_15868,inst_15873__$1];
var inst_15876 = (new cljs.core.PersistentVector(null,2,(5),inst_15874,inst_15875,null));
var state_15887__$1 = (function (){var statearr_15894 = state_15887;
(statearr_15894[(8)] = inst_15873__$1);

return statearr_15894;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15887__$1,(8),jobs,inst_15876);
} else {
if((state_val_15888 === (3))){
var inst_15885 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15887__$1,inst_15885);
} else {
if((state_val_15888 === (2))){
var state_15887__$1 = state_15887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15887__$1,(4),from);
} else {
if((state_val_15888 === (9))){
var inst_15880 = (state_15887[(2)]);
var state_15887__$1 = (function (){var statearr_15895 = state_15887;
(statearr_15895[(9)] = inst_15880);

return statearr_15895;
})();
var statearr_15896_16002 = state_15887__$1;
(statearr_15896_16002[(2)] = null);

(statearr_15896_16002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (5))){
var inst_15871 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15887__$1 = state_15887;
var statearr_15897_16003 = state_15887__$1;
(statearr_15897_16003[(2)] = inst_15871);

(statearr_15897_16003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (8))){
var inst_15873 = (state_15887[(8)]);
var inst_15878 = (state_15887[(2)]);
var state_15887__$1 = (function (){var statearr_15898 = state_15887;
(statearr_15898[(10)] = inst_15878);

return statearr_15898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15887__$1,(9),results,inst_15873);
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
});})(c__15634__auto___15997,jobs,results,process,async))
;
return ((function (switch__15539__auto__,c__15634__auto___15997,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0 = (function (){
var statearr_15899 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__);

(statearr_15899[(1)] = (1));

return statearr_15899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1 = (function (state_15887){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_15887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e15900){if((e15900 instanceof Object)){
var ex__15543__auto__ = e15900;
var statearr_15901_16004 = state_15887;
(statearr_15901_16004[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16005 = state_15887;
state_15887 = G__16005;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__ = function(state_15887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1.call(this,state_15887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___15997,jobs,results,process,async))
})();
var state__15636__auto__ = (function (){var statearr_15902 = f__15635__auto__.call(null);
(statearr_15902[(6)] = c__15634__auto___15997);

return statearr_15902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___15997,jobs,results,process,async))
);


var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,jobs,results,process,async){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,jobs,results,process,async){
return (function (state_15940){
var state_val_15941 = (state_15940[(1)]);
if((state_val_15941 === (7))){
var inst_15936 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_15942_16006 = state_15940__$1;
(statearr_15942_16006[(2)] = inst_15936);

(statearr_15942_16006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (20))){
var state_15940__$1 = state_15940;
var statearr_15943_16007 = state_15940__$1;
(statearr_15943_16007[(2)] = null);

(statearr_15943_16007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (1))){
var state_15940__$1 = state_15940;
var statearr_15944_16008 = state_15940__$1;
(statearr_15944_16008[(2)] = null);

(statearr_15944_16008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (4))){
var inst_15905 = (state_15940[(7)]);
var inst_15905__$1 = (state_15940[(2)]);
var inst_15906 = (inst_15905__$1 == null);
var state_15940__$1 = (function (){var statearr_15945 = state_15940;
(statearr_15945[(7)] = inst_15905__$1);

return statearr_15945;
})();
if(cljs.core.truth_(inst_15906)){
var statearr_15946_16009 = state_15940__$1;
(statearr_15946_16009[(1)] = (5));

} else {
var statearr_15947_16010 = state_15940__$1;
(statearr_15947_16010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (15))){
var inst_15918 = (state_15940[(8)]);
var state_15940__$1 = state_15940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15940__$1,(18),to,inst_15918);
} else {
if((state_val_15941 === (21))){
var inst_15931 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_15948_16011 = state_15940__$1;
(statearr_15948_16011[(2)] = inst_15931);

(statearr_15948_16011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (13))){
var inst_15933 = (state_15940[(2)]);
var state_15940__$1 = (function (){var statearr_15949 = state_15940;
(statearr_15949[(9)] = inst_15933);

return statearr_15949;
})();
var statearr_15950_16012 = state_15940__$1;
(statearr_15950_16012[(2)] = null);

(statearr_15950_16012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (6))){
var inst_15905 = (state_15940[(7)]);
var state_15940__$1 = state_15940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15940__$1,(11),inst_15905);
} else {
if((state_val_15941 === (17))){
var inst_15926 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
if(cljs.core.truth_(inst_15926)){
var statearr_15951_16013 = state_15940__$1;
(statearr_15951_16013[(1)] = (19));

} else {
var statearr_15952_16014 = state_15940__$1;
(statearr_15952_16014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (3))){
var inst_15938 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15940__$1,inst_15938);
} else {
if((state_val_15941 === (12))){
var inst_15915 = (state_15940[(10)]);
var state_15940__$1 = state_15940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15940__$1,(14),inst_15915);
} else {
if((state_val_15941 === (2))){
var state_15940__$1 = state_15940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15940__$1,(4),results);
} else {
if((state_val_15941 === (19))){
var state_15940__$1 = state_15940;
var statearr_15953_16015 = state_15940__$1;
(statearr_15953_16015[(2)] = null);

(statearr_15953_16015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (11))){
var inst_15915 = (state_15940[(2)]);
var state_15940__$1 = (function (){var statearr_15954 = state_15940;
(statearr_15954[(10)] = inst_15915);

return statearr_15954;
})();
var statearr_15955_16016 = state_15940__$1;
(statearr_15955_16016[(2)] = null);

(statearr_15955_16016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (9))){
var state_15940__$1 = state_15940;
var statearr_15956_16017 = state_15940__$1;
(statearr_15956_16017[(2)] = null);

(statearr_15956_16017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (5))){
var state_15940__$1 = state_15940;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15957_16018 = state_15940__$1;
(statearr_15957_16018[(1)] = (8));

} else {
var statearr_15958_16019 = state_15940__$1;
(statearr_15958_16019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (14))){
var inst_15920 = (state_15940[(11)]);
var inst_15918 = (state_15940[(8)]);
var inst_15918__$1 = (state_15940[(2)]);
var inst_15919 = (inst_15918__$1 == null);
var inst_15920__$1 = cljs.core.not.call(null,inst_15919);
var state_15940__$1 = (function (){var statearr_15959 = state_15940;
(statearr_15959[(11)] = inst_15920__$1);

(statearr_15959[(8)] = inst_15918__$1);

return statearr_15959;
})();
if(inst_15920__$1){
var statearr_15960_16020 = state_15940__$1;
(statearr_15960_16020[(1)] = (15));

} else {
var statearr_15961_16021 = state_15940__$1;
(statearr_15961_16021[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (16))){
var inst_15920 = (state_15940[(11)]);
var state_15940__$1 = state_15940;
var statearr_15962_16022 = state_15940__$1;
(statearr_15962_16022[(2)] = inst_15920);

(statearr_15962_16022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (10))){
var inst_15912 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_15963_16023 = state_15940__$1;
(statearr_15963_16023[(2)] = inst_15912);

(statearr_15963_16023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (18))){
var inst_15923 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_15964_16024 = state_15940__$1;
(statearr_15964_16024[(2)] = inst_15923);

(statearr_15964_16024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (8))){
var inst_15909 = cljs.core.async.close_BANG_.call(null,to);
var state_15940__$1 = state_15940;
var statearr_15965_16025 = state_15940__$1;
(statearr_15965_16025[(2)] = inst_15909);

(statearr_15965_16025[(1)] = (10));


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
});})(c__15634__auto__,jobs,results,process,async))
;
return ((function (switch__15539__auto__,c__15634__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0 = (function (){
var statearr_15966 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__);

(statearr_15966[(1)] = (1));

return statearr_15966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1 = (function (state_15940){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_15940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e15967){if((e15967 instanceof Object)){
var ex__15543__auto__ = e15967;
var statearr_15968_16026 = state_15940;
(statearr_15968_16026[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16027 = state_15940;
state_15940 = G__16027;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__ = function(state_15940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1.call(this,state_15940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,jobs,results,process,async))
})();
var state__15636__auto__ = (function (){var statearr_15969 = f__15635__auto__.call(null);
(statearr_15969[(6)] = c__15634__auto__);

return statearr_15969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,jobs,results,process,async))
);

return c__15634__auto__;
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
var G__16029 = arguments.length;
switch (G__16029) {
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
var G__16032 = arguments.length;
switch (G__16032) {
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
var G__16035 = arguments.length;
switch (G__16035) {
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
var c__15634__auto___16084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___16084,tc,fc){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___16084,tc,fc){
return (function (state_16061){
var state_val_16062 = (state_16061[(1)]);
if((state_val_16062 === (7))){
var inst_16057 = (state_16061[(2)]);
var state_16061__$1 = state_16061;
var statearr_16063_16085 = state_16061__$1;
(statearr_16063_16085[(2)] = inst_16057);

(statearr_16063_16085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (1))){
var state_16061__$1 = state_16061;
var statearr_16064_16086 = state_16061__$1;
(statearr_16064_16086[(2)] = null);

(statearr_16064_16086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (4))){
var inst_16038 = (state_16061[(7)]);
var inst_16038__$1 = (state_16061[(2)]);
var inst_16039 = (inst_16038__$1 == null);
var state_16061__$1 = (function (){var statearr_16065 = state_16061;
(statearr_16065[(7)] = inst_16038__$1);

return statearr_16065;
})();
if(cljs.core.truth_(inst_16039)){
var statearr_16066_16087 = state_16061__$1;
(statearr_16066_16087[(1)] = (5));

} else {
var statearr_16067_16088 = state_16061__$1;
(statearr_16067_16088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (13))){
var state_16061__$1 = state_16061;
var statearr_16068_16089 = state_16061__$1;
(statearr_16068_16089[(2)] = null);

(statearr_16068_16089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (6))){
var inst_16038 = (state_16061[(7)]);
var inst_16044 = p.call(null,inst_16038);
var state_16061__$1 = state_16061;
if(cljs.core.truth_(inst_16044)){
var statearr_16069_16090 = state_16061__$1;
(statearr_16069_16090[(1)] = (9));

} else {
var statearr_16070_16091 = state_16061__$1;
(statearr_16070_16091[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (3))){
var inst_16059 = (state_16061[(2)]);
var state_16061__$1 = state_16061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16061__$1,inst_16059);
} else {
if((state_val_16062 === (12))){
var state_16061__$1 = state_16061;
var statearr_16071_16092 = state_16061__$1;
(statearr_16071_16092[(2)] = null);

(statearr_16071_16092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (2))){
var state_16061__$1 = state_16061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16061__$1,(4),ch);
} else {
if((state_val_16062 === (11))){
var inst_16038 = (state_16061[(7)]);
var inst_16048 = (state_16061[(2)]);
var state_16061__$1 = state_16061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16061__$1,(8),inst_16048,inst_16038);
} else {
if((state_val_16062 === (9))){
var state_16061__$1 = state_16061;
var statearr_16072_16093 = state_16061__$1;
(statearr_16072_16093[(2)] = tc);

(statearr_16072_16093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (5))){
var inst_16041 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16042 = cljs.core.async.close_BANG_.call(null,fc);
var state_16061__$1 = (function (){var statearr_16073 = state_16061;
(statearr_16073[(8)] = inst_16041);

return statearr_16073;
})();
var statearr_16074_16094 = state_16061__$1;
(statearr_16074_16094[(2)] = inst_16042);

(statearr_16074_16094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (14))){
var inst_16055 = (state_16061[(2)]);
var state_16061__$1 = state_16061;
var statearr_16075_16095 = state_16061__$1;
(statearr_16075_16095[(2)] = inst_16055);

(statearr_16075_16095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (10))){
var state_16061__$1 = state_16061;
var statearr_16076_16096 = state_16061__$1;
(statearr_16076_16096[(2)] = fc);

(statearr_16076_16096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16062 === (8))){
var inst_16050 = (state_16061[(2)]);
var state_16061__$1 = state_16061;
if(cljs.core.truth_(inst_16050)){
var statearr_16077_16097 = state_16061__$1;
(statearr_16077_16097[(1)] = (12));

} else {
var statearr_16078_16098 = state_16061__$1;
(statearr_16078_16098[(1)] = (13));

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
});})(c__15634__auto___16084,tc,fc))
;
return ((function (switch__15539__auto__,c__15634__auto___16084,tc,fc){
return (function() {
var cljs$core$async$state_machine__15540__auto__ = null;
var cljs$core$async$state_machine__15540__auto____0 = (function (){
var statearr_16079 = [null,null,null,null,null,null,null,null,null];
(statearr_16079[(0)] = cljs$core$async$state_machine__15540__auto__);

(statearr_16079[(1)] = (1));

return statearr_16079;
});
var cljs$core$async$state_machine__15540__auto____1 = (function (state_16061){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_16061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e16080){if((e16080 instanceof Object)){
var ex__15543__auto__ = e16080;
var statearr_16081_16099 = state_16061;
(statearr_16081_16099[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16100 = state_16061;
state_16061 = G__16100;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$state_machine__15540__auto__ = function(state_16061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15540__auto____1.call(this,state_16061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15540__auto____0;
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15540__auto____1;
return cljs$core$async$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___16084,tc,fc))
})();
var state__15636__auto__ = (function (){var statearr_16082 = f__15635__auto__.call(null);
(statearr_16082[(6)] = c__15634__auto___16084);

return statearr_16082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___16084,tc,fc))
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
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_16121){
var state_val_16122 = (state_16121[(1)]);
if((state_val_16122 === (7))){
var inst_16117 = (state_16121[(2)]);
var state_16121__$1 = state_16121;
var statearr_16123_16141 = state_16121__$1;
(statearr_16123_16141[(2)] = inst_16117);

(statearr_16123_16141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16122 === (1))){
var inst_16101 = init;
var state_16121__$1 = (function (){var statearr_16124 = state_16121;
(statearr_16124[(7)] = inst_16101);

return statearr_16124;
})();
var statearr_16125_16142 = state_16121__$1;
(statearr_16125_16142[(2)] = null);

(statearr_16125_16142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16122 === (4))){
var inst_16104 = (state_16121[(8)]);
var inst_16104__$1 = (state_16121[(2)]);
var inst_16105 = (inst_16104__$1 == null);
var state_16121__$1 = (function (){var statearr_16126 = state_16121;
(statearr_16126[(8)] = inst_16104__$1);

return statearr_16126;
})();
if(cljs.core.truth_(inst_16105)){
var statearr_16127_16143 = state_16121__$1;
(statearr_16127_16143[(1)] = (5));

} else {
var statearr_16128_16144 = state_16121__$1;
(statearr_16128_16144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16122 === (6))){
var inst_16104 = (state_16121[(8)]);
var inst_16101 = (state_16121[(7)]);
var inst_16108 = (state_16121[(9)]);
var inst_16108__$1 = f.call(null,inst_16101,inst_16104);
var inst_16109 = cljs.core.reduced_QMARK_.call(null,inst_16108__$1);
var state_16121__$1 = (function (){var statearr_16129 = state_16121;
(statearr_16129[(9)] = inst_16108__$1);

return statearr_16129;
})();
if(inst_16109){
var statearr_16130_16145 = state_16121__$1;
(statearr_16130_16145[(1)] = (8));

} else {
var statearr_16131_16146 = state_16121__$1;
(statearr_16131_16146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16122 === (3))){
var inst_16119 = (state_16121[(2)]);
var state_16121__$1 = state_16121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16121__$1,inst_16119);
} else {
if((state_val_16122 === (2))){
var state_16121__$1 = state_16121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16121__$1,(4),ch);
} else {
if((state_val_16122 === (9))){
var inst_16108 = (state_16121[(9)]);
var inst_16101 = inst_16108;
var state_16121__$1 = (function (){var statearr_16132 = state_16121;
(statearr_16132[(7)] = inst_16101);

return statearr_16132;
})();
var statearr_16133_16147 = state_16121__$1;
(statearr_16133_16147[(2)] = null);

(statearr_16133_16147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16122 === (5))){
var inst_16101 = (state_16121[(7)]);
var state_16121__$1 = state_16121;
var statearr_16134_16148 = state_16121__$1;
(statearr_16134_16148[(2)] = inst_16101);

(statearr_16134_16148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16122 === (10))){
var inst_16115 = (state_16121[(2)]);
var state_16121__$1 = state_16121;
var statearr_16135_16149 = state_16121__$1;
(statearr_16135_16149[(2)] = inst_16115);

(statearr_16135_16149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16122 === (8))){
var inst_16108 = (state_16121[(9)]);
var inst_16111 = cljs.core.deref.call(null,inst_16108);
var state_16121__$1 = state_16121;
var statearr_16136_16150 = state_16121__$1;
(statearr_16136_16150[(2)] = inst_16111);

(statearr_16136_16150[(1)] = (10));


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
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15540__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15540__auto____0 = (function (){
var statearr_16137 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16137[(0)] = cljs$core$async$reduce_$_state_machine__15540__auto__);

(statearr_16137[(1)] = (1));

return statearr_16137;
});
var cljs$core$async$reduce_$_state_machine__15540__auto____1 = (function (state_16121){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_16121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e16138){if((e16138 instanceof Object)){
var ex__15543__auto__ = e16138;
var statearr_16139_16151 = state_16121;
(statearr_16139_16151[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16152 = state_16121;
state_16121 = G__16152;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15540__auto__ = function(state_16121){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15540__auto____1.call(this,state_16121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15540__auto____0;
cljs$core$async$reduce_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15540__auto____1;
return cljs$core$async$reduce_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_16140 = f__15635__auto__.call(null);
(statearr_16140[(6)] = c__15634__auto__);

return statearr_16140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,f__$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,f__$1){
return (function (state_16158){
var state_val_16159 = (state_16158[(1)]);
if((state_val_16159 === (1))){
var inst_16153 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16158__$1 = state_16158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16158__$1,(2),inst_16153);
} else {
if((state_val_16159 === (2))){
var inst_16155 = (state_16158[(2)]);
var inst_16156 = f__$1.call(null,inst_16155);
var state_16158__$1 = state_16158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16158__$1,inst_16156);
} else {
return null;
}
}
});})(c__15634__auto__,f__$1))
;
return ((function (switch__15539__auto__,c__15634__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15540__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15540__auto____0 = (function (){
var statearr_16160 = [null,null,null,null,null,null,null];
(statearr_16160[(0)] = cljs$core$async$transduce_$_state_machine__15540__auto__);

(statearr_16160[(1)] = (1));

return statearr_16160;
});
var cljs$core$async$transduce_$_state_machine__15540__auto____1 = (function (state_16158){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_16158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e16161){if((e16161 instanceof Object)){
var ex__15543__auto__ = e16161;
var statearr_16162_16164 = state_16158;
(statearr_16162_16164[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16165 = state_16158;
state_16158 = G__16165;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15540__auto__ = function(state_16158){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15540__auto____1.call(this,state_16158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15540__auto____0;
cljs$core$async$transduce_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15540__auto____1;
return cljs$core$async$transduce_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,f__$1))
})();
var state__15636__auto__ = (function (){var statearr_16163 = f__15635__auto__.call(null);
(statearr_16163[(6)] = c__15634__auto__);

return statearr_16163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,f__$1))
);

return c__15634__auto__;
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
var G__16167 = arguments.length;
switch (G__16167) {
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
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_16192){
var state_val_16193 = (state_16192[(1)]);
if((state_val_16193 === (7))){
var inst_16174 = (state_16192[(2)]);
var state_16192__$1 = state_16192;
var statearr_16194_16215 = state_16192__$1;
(statearr_16194_16215[(2)] = inst_16174);

(statearr_16194_16215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16193 === (1))){
var inst_16168 = cljs.core.seq.call(null,coll);
var inst_16169 = inst_16168;
var state_16192__$1 = (function (){var statearr_16195 = state_16192;
(statearr_16195[(7)] = inst_16169);

return statearr_16195;
})();
var statearr_16196_16216 = state_16192__$1;
(statearr_16196_16216[(2)] = null);

(statearr_16196_16216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16193 === (4))){
var inst_16169 = (state_16192[(7)]);
var inst_16172 = cljs.core.first.call(null,inst_16169);
var state_16192__$1 = state_16192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16192__$1,(7),ch,inst_16172);
} else {
if((state_val_16193 === (13))){
var inst_16186 = (state_16192[(2)]);
var state_16192__$1 = state_16192;
var statearr_16197_16217 = state_16192__$1;
(statearr_16197_16217[(2)] = inst_16186);

(statearr_16197_16217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16193 === (6))){
var inst_16177 = (state_16192[(2)]);
var state_16192__$1 = state_16192;
if(cljs.core.truth_(inst_16177)){
var statearr_16198_16218 = state_16192__$1;
(statearr_16198_16218[(1)] = (8));

} else {
var statearr_16199_16219 = state_16192__$1;
(statearr_16199_16219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16193 === (3))){
var inst_16190 = (state_16192[(2)]);
var state_16192__$1 = state_16192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16192__$1,inst_16190);
} else {
if((state_val_16193 === (12))){
var state_16192__$1 = state_16192;
var statearr_16200_16220 = state_16192__$1;
(statearr_16200_16220[(2)] = null);

(statearr_16200_16220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16193 === (2))){
var inst_16169 = (state_16192[(7)]);
var state_16192__$1 = state_16192;
if(cljs.core.truth_(inst_16169)){
var statearr_16201_16221 = state_16192__$1;
(statearr_16201_16221[(1)] = (4));

} else {
var statearr_16202_16222 = state_16192__$1;
(statearr_16202_16222[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16193 === (11))){
var inst_16183 = cljs.core.async.close_BANG_.call(null,ch);
var state_16192__$1 = state_16192;
var statearr_16203_16223 = state_16192__$1;
(statearr_16203_16223[(2)] = inst_16183);

(statearr_16203_16223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16193 === (9))){
var state_16192__$1 = state_16192;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16204_16224 = state_16192__$1;
(statearr_16204_16224[(1)] = (11));

} else {
var statearr_16205_16225 = state_16192__$1;
(statearr_16205_16225[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16193 === (5))){
var inst_16169 = (state_16192[(7)]);
var state_16192__$1 = state_16192;
var statearr_16206_16226 = state_16192__$1;
(statearr_16206_16226[(2)] = inst_16169);

(statearr_16206_16226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16193 === (10))){
var inst_16188 = (state_16192[(2)]);
var state_16192__$1 = state_16192;
var statearr_16207_16227 = state_16192__$1;
(statearr_16207_16227[(2)] = inst_16188);

(statearr_16207_16227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16193 === (8))){
var inst_16169 = (state_16192[(7)]);
var inst_16179 = cljs.core.next.call(null,inst_16169);
var inst_16169__$1 = inst_16179;
var state_16192__$1 = (function (){var statearr_16208 = state_16192;
(statearr_16208[(7)] = inst_16169__$1);

return statearr_16208;
})();
var statearr_16209_16228 = state_16192__$1;
(statearr_16209_16228[(2)] = null);

(statearr_16209_16228[(1)] = (2));


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
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var cljs$core$async$state_machine__15540__auto__ = null;
var cljs$core$async$state_machine__15540__auto____0 = (function (){
var statearr_16210 = [null,null,null,null,null,null,null,null];
(statearr_16210[(0)] = cljs$core$async$state_machine__15540__auto__);

(statearr_16210[(1)] = (1));

return statearr_16210;
});
var cljs$core$async$state_machine__15540__auto____1 = (function (state_16192){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_16192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e16211){if((e16211 instanceof Object)){
var ex__15543__auto__ = e16211;
var statearr_16212_16229 = state_16192;
(statearr_16212_16229[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16230 = state_16192;
state_16192 = G__16230;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$state_machine__15540__auto__ = function(state_16192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15540__auto____1.call(this,state_16192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15540__auto____0;
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15540__auto____1;
return cljs$core$async$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_16213 = f__15635__auto__.call(null);
(statearr_16213[(6)] = c__15634__auto__);

return statearr_16213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
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
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16231 = (function (ch,cs,meta16232){
this.ch = ch;
this.cs = cs;
this.meta16232 = meta16232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16233,meta16232__$1){
var self__ = this;
var _16233__$1 = this;
return (new cljs.core.async.t_cljs$core$async16231(self__.ch,self__.cs,meta16232__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16233){
var self__ = this;
var _16233__$1 = this;
return self__.meta16232;
});})(cs))
;

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16231.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16232","meta16232",62948619,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16231";

cljs.core.async.t_cljs$core$async16231.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16231");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16231.
 */
cljs.core.async.__GT_t_cljs$core$async16231 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16231(ch__$1,cs__$1,meta16232){
return (new cljs.core.async.t_cljs$core$async16231(ch__$1,cs__$1,meta16232));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16231(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15634__auto___16453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___16453,cs,m,dchan,dctr,done){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___16453,cs,m,dchan,dctr,done){
return (function (state_16368){
var state_val_16369 = (state_16368[(1)]);
if((state_val_16369 === (7))){
var inst_16364 = (state_16368[(2)]);
var state_16368__$1 = state_16368;
var statearr_16370_16454 = state_16368__$1;
(statearr_16370_16454[(2)] = inst_16364);

(statearr_16370_16454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (20))){
var inst_16267 = (state_16368[(7)]);
var inst_16279 = cljs.core.first.call(null,inst_16267);
var inst_16280 = cljs.core.nth.call(null,inst_16279,(0),null);
var inst_16281 = cljs.core.nth.call(null,inst_16279,(1),null);
var state_16368__$1 = (function (){var statearr_16371 = state_16368;
(statearr_16371[(8)] = inst_16280);

return statearr_16371;
})();
if(cljs.core.truth_(inst_16281)){
var statearr_16372_16455 = state_16368__$1;
(statearr_16372_16455[(1)] = (22));

} else {
var statearr_16373_16456 = state_16368__$1;
(statearr_16373_16456[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (27))){
var inst_16309 = (state_16368[(9)]);
var inst_16316 = (state_16368[(10)]);
var inst_16311 = (state_16368[(11)]);
var inst_16236 = (state_16368[(12)]);
var inst_16316__$1 = cljs.core._nth.call(null,inst_16309,inst_16311);
var inst_16317 = cljs.core.async.put_BANG_.call(null,inst_16316__$1,inst_16236,done);
var state_16368__$1 = (function (){var statearr_16374 = state_16368;
(statearr_16374[(10)] = inst_16316__$1);

return statearr_16374;
})();
if(cljs.core.truth_(inst_16317)){
var statearr_16375_16457 = state_16368__$1;
(statearr_16375_16457[(1)] = (30));

} else {
var statearr_16376_16458 = state_16368__$1;
(statearr_16376_16458[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (1))){
var state_16368__$1 = state_16368;
var statearr_16377_16459 = state_16368__$1;
(statearr_16377_16459[(2)] = null);

(statearr_16377_16459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (24))){
var inst_16267 = (state_16368[(7)]);
var inst_16286 = (state_16368[(2)]);
var inst_16287 = cljs.core.next.call(null,inst_16267);
var inst_16245 = inst_16287;
var inst_16246 = null;
var inst_16247 = (0);
var inst_16248 = (0);
var state_16368__$1 = (function (){var statearr_16378 = state_16368;
(statearr_16378[(13)] = inst_16286);

(statearr_16378[(14)] = inst_16246);

(statearr_16378[(15)] = inst_16247);

(statearr_16378[(16)] = inst_16248);

(statearr_16378[(17)] = inst_16245);

return statearr_16378;
})();
var statearr_16379_16460 = state_16368__$1;
(statearr_16379_16460[(2)] = null);

(statearr_16379_16460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (39))){
var state_16368__$1 = state_16368;
var statearr_16383_16461 = state_16368__$1;
(statearr_16383_16461[(2)] = null);

(statearr_16383_16461[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (4))){
var inst_16236 = (state_16368[(12)]);
var inst_16236__$1 = (state_16368[(2)]);
var inst_16237 = (inst_16236__$1 == null);
var state_16368__$1 = (function (){var statearr_16384 = state_16368;
(statearr_16384[(12)] = inst_16236__$1);

return statearr_16384;
})();
if(cljs.core.truth_(inst_16237)){
var statearr_16385_16462 = state_16368__$1;
(statearr_16385_16462[(1)] = (5));

} else {
var statearr_16386_16463 = state_16368__$1;
(statearr_16386_16463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (15))){
var inst_16246 = (state_16368[(14)]);
var inst_16247 = (state_16368[(15)]);
var inst_16248 = (state_16368[(16)]);
var inst_16245 = (state_16368[(17)]);
var inst_16263 = (state_16368[(2)]);
var inst_16264 = (inst_16248 + (1));
var tmp16380 = inst_16246;
var tmp16381 = inst_16247;
var tmp16382 = inst_16245;
var inst_16245__$1 = tmp16382;
var inst_16246__$1 = tmp16380;
var inst_16247__$1 = tmp16381;
var inst_16248__$1 = inst_16264;
var state_16368__$1 = (function (){var statearr_16387 = state_16368;
(statearr_16387[(14)] = inst_16246__$1);

(statearr_16387[(18)] = inst_16263);

(statearr_16387[(15)] = inst_16247__$1);

(statearr_16387[(16)] = inst_16248__$1);

(statearr_16387[(17)] = inst_16245__$1);

return statearr_16387;
})();
var statearr_16388_16464 = state_16368__$1;
(statearr_16388_16464[(2)] = null);

(statearr_16388_16464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (21))){
var inst_16290 = (state_16368[(2)]);
var state_16368__$1 = state_16368;
var statearr_16392_16465 = state_16368__$1;
(statearr_16392_16465[(2)] = inst_16290);

(statearr_16392_16465[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (31))){
var inst_16316 = (state_16368[(10)]);
var inst_16320 = done.call(null,null);
var inst_16321 = cljs.core.async.untap_STAR_.call(null,m,inst_16316);
var state_16368__$1 = (function (){var statearr_16393 = state_16368;
(statearr_16393[(19)] = inst_16320);

return statearr_16393;
})();
var statearr_16394_16466 = state_16368__$1;
(statearr_16394_16466[(2)] = inst_16321);

(statearr_16394_16466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (32))){
var inst_16309 = (state_16368[(9)]);
var inst_16308 = (state_16368[(20)]);
var inst_16310 = (state_16368[(21)]);
var inst_16311 = (state_16368[(11)]);
var inst_16323 = (state_16368[(2)]);
var inst_16324 = (inst_16311 + (1));
var tmp16389 = inst_16309;
var tmp16390 = inst_16308;
var tmp16391 = inst_16310;
var inst_16308__$1 = tmp16390;
var inst_16309__$1 = tmp16389;
var inst_16310__$1 = tmp16391;
var inst_16311__$1 = inst_16324;
var state_16368__$1 = (function (){var statearr_16395 = state_16368;
(statearr_16395[(9)] = inst_16309__$1);

(statearr_16395[(20)] = inst_16308__$1);

(statearr_16395[(21)] = inst_16310__$1);

(statearr_16395[(11)] = inst_16311__$1);

(statearr_16395[(22)] = inst_16323);

return statearr_16395;
})();
var statearr_16396_16467 = state_16368__$1;
(statearr_16396_16467[(2)] = null);

(statearr_16396_16467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (40))){
var inst_16336 = (state_16368[(23)]);
var inst_16340 = done.call(null,null);
var inst_16341 = cljs.core.async.untap_STAR_.call(null,m,inst_16336);
var state_16368__$1 = (function (){var statearr_16397 = state_16368;
(statearr_16397[(24)] = inst_16340);

return statearr_16397;
})();
var statearr_16398_16468 = state_16368__$1;
(statearr_16398_16468[(2)] = inst_16341);

(statearr_16398_16468[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (33))){
var inst_16327 = (state_16368[(25)]);
var inst_16329 = cljs.core.chunked_seq_QMARK_.call(null,inst_16327);
var state_16368__$1 = state_16368;
if(inst_16329){
var statearr_16399_16469 = state_16368__$1;
(statearr_16399_16469[(1)] = (36));

} else {
var statearr_16400_16470 = state_16368__$1;
(statearr_16400_16470[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (13))){
var inst_16257 = (state_16368[(26)]);
var inst_16260 = cljs.core.async.close_BANG_.call(null,inst_16257);
var state_16368__$1 = state_16368;
var statearr_16401_16471 = state_16368__$1;
(statearr_16401_16471[(2)] = inst_16260);

(statearr_16401_16471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (22))){
var inst_16280 = (state_16368[(8)]);
var inst_16283 = cljs.core.async.close_BANG_.call(null,inst_16280);
var state_16368__$1 = state_16368;
var statearr_16402_16472 = state_16368__$1;
(statearr_16402_16472[(2)] = inst_16283);

(statearr_16402_16472[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (36))){
var inst_16327 = (state_16368[(25)]);
var inst_16331 = cljs.core.chunk_first.call(null,inst_16327);
var inst_16332 = cljs.core.chunk_rest.call(null,inst_16327);
var inst_16333 = cljs.core.count.call(null,inst_16331);
var inst_16308 = inst_16332;
var inst_16309 = inst_16331;
var inst_16310 = inst_16333;
var inst_16311 = (0);
var state_16368__$1 = (function (){var statearr_16403 = state_16368;
(statearr_16403[(9)] = inst_16309);

(statearr_16403[(20)] = inst_16308);

(statearr_16403[(21)] = inst_16310);

(statearr_16403[(11)] = inst_16311);

return statearr_16403;
})();
var statearr_16404_16473 = state_16368__$1;
(statearr_16404_16473[(2)] = null);

(statearr_16404_16473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (41))){
var inst_16327 = (state_16368[(25)]);
var inst_16343 = (state_16368[(2)]);
var inst_16344 = cljs.core.next.call(null,inst_16327);
var inst_16308 = inst_16344;
var inst_16309 = null;
var inst_16310 = (0);
var inst_16311 = (0);
var state_16368__$1 = (function (){var statearr_16405 = state_16368;
(statearr_16405[(27)] = inst_16343);

(statearr_16405[(9)] = inst_16309);

(statearr_16405[(20)] = inst_16308);

(statearr_16405[(21)] = inst_16310);

(statearr_16405[(11)] = inst_16311);

return statearr_16405;
})();
var statearr_16406_16474 = state_16368__$1;
(statearr_16406_16474[(2)] = null);

(statearr_16406_16474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (43))){
var state_16368__$1 = state_16368;
var statearr_16407_16475 = state_16368__$1;
(statearr_16407_16475[(2)] = null);

(statearr_16407_16475[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (29))){
var inst_16352 = (state_16368[(2)]);
var state_16368__$1 = state_16368;
var statearr_16408_16476 = state_16368__$1;
(statearr_16408_16476[(2)] = inst_16352);

(statearr_16408_16476[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (44))){
var inst_16361 = (state_16368[(2)]);
var state_16368__$1 = (function (){var statearr_16409 = state_16368;
(statearr_16409[(28)] = inst_16361);

return statearr_16409;
})();
var statearr_16410_16477 = state_16368__$1;
(statearr_16410_16477[(2)] = null);

(statearr_16410_16477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (6))){
var inst_16300 = (state_16368[(29)]);
var inst_16299 = cljs.core.deref.call(null,cs);
var inst_16300__$1 = cljs.core.keys.call(null,inst_16299);
var inst_16301 = cljs.core.count.call(null,inst_16300__$1);
var inst_16302 = cljs.core.reset_BANG_.call(null,dctr,inst_16301);
var inst_16307 = cljs.core.seq.call(null,inst_16300__$1);
var inst_16308 = inst_16307;
var inst_16309 = null;
var inst_16310 = (0);
var inst_16311 = (0);
var state_16368__$1 = (function (){var statearr_16411 = state_16368;
(statearr_16411[(9)] = inst_16309);

(statearr_16411[(20)] = inst_16308);

(statearr_16411[(29)] = inst_16300__$1);

(statearr_16411[(21)] = inst_16310);

(statearr_16411[(30)] = inst_16302);

(statearr_16411[(11)] = inst_16311);

return statearr_16411;
})();
var statearr_16412_16478 = state_16368__$1;
(statearr_16412_16478[(2)] = null);

(statearr_16412_16478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (28))){
var inst_16308 = (state_16368[(20)]);
var inst_16327 = (state_16368[(25)]);
var inst_16327__$1 = cljs.core.seq.call(null,inst_16308);
var state_16368__$1 = (function (){var statearr_16413 = state_16368;
(statearr_16413[(25)] = inst_16327__$1);

return statearr_16413;
})();
if(inst_16327__$1){
var statearr_16414_16479 = state_16368__$1;
(statearr_16414_16479[(1)] = (33));

} else {
var statearr_16415_16480 = state_16368__$1;
(statearr_16415_16480[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (25))){
var inst_16310 = (state_16368[(21)]);
var inst_16311 = (state_16368[(11)]);
var inst_16313 = (inst_16311 < inst_16310);
var inst_16314 = inst_16313;
var state_16368__$1 = state_16368;
if(cljs.core.truth_(inst_16314)){
var statearr_16416_16481 = state_16368__$1;
(statearr_16416_16481[(1)] = (27));

} else {
var statearr_16417_16482 = state_16368__$1;
(statearr_16417_16482[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (34))){
var state_16368__$1 = state_16368;
var statearr_16418_16483 = state_16368__$1;
(statearr_16418_16483[(2)] = null);

(statearr_16418_16483[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (17))){
var state_16368__$1 = state_16368;
var statearr_16419_16484 = state_16368__$1;
(statearr_16419_16484[(2)] = null);

(statearr_16419_16484[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (3))){
var inst_16366 = (state_16368[(2)]);
var state_16368__$1 = state_16368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16368__$1,inst_16366);
} else {
if((state_val_16369 === (12))){
var inst_16295 = (state_16368[(2)]);
var state_16368__$1 = state_16368;
var statearr_16420_16485 = state_16368__$1;
(statearr_16420_16485[(2)] = inst_16295);

(statearr_16420_16485[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (2))){
var state_16368__$1 = state_16368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16368__$1,(4),ch);
} else {
if((state_val_16369 === (23))){
var state_16368__$1 = state_16368;
var statearr_16421_16486 = state_16368__$1;
(statearr_16421_16486[(2)] = null);

(statearr_16421_16486[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (35))){
var inst_16350 = (state_16368[(2)]);
var state_16368__$1 = state_16368;
var statearr_16422_16487 = state_16368__$1;
(statearr_16422_16487[(2)] = inst_16350);

(statearr_16422_16487[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (19))){
var inst_16267 = (state_16368[(7)]);
var inst_16271 = cljs.core.chunk_first.call(null,inst_16267);
var inst_16272 = cljs.core.chunk_rest.call(null,inst_16267);
var inst_16273 = cljs.core.count.call(null,inst_16271);
var inst_16245 = inst_16272;
var inst_16246 = inst_16271;
var inst_16247 = inst_16273;
var inst_16248 = (0);
var state_16368__$1 = (function (){var statearr_16423 = state_16368;
(statearr_16423[(14)] = inst_16246);

(statearr_16423[(15)] = inst_16247);

(statearr_16423[(16)] = inst_16248);

(statearr_16423[(17)] = inst_16245);

return statearr_16423;
})();
var statearr_16424_16488 = state_16368__$1;
(statearr_16424_16488[(2)] = null);

(statearr_16424_16488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (11))){
var inst_16267 = (state_16368[(7)]);
var inst_16245 = (state_16368[(17)]);
var inst_16267__$1 = cljs.core.seq.call(null,inst_16245);
var state_16368__$1 = (function (){var statearr_16425 = state_16368;
(statearr_16425[(7)] = inst_16267__$1);

return statearr_16425;
})();
if(inst_16267__$1){
var statearr_16426_16489 = state_16368__$1;
(statearr_16426_16489[(1)] = (16));

} else {
var statearr_16427_16490 = state_16368__$1;
(statearr_16427_16490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (9))){
var inst_16297 = (state_16368[(2)]);
var state_16368__$1 = state_16368;
var statearr_16428_16491 = state_16368__$1;
(statearr_16428_16491[(2)] = inst_16297);

(statearr_16428_16491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (5))){
var inst_16243 = cljs.core.deref.call(null,cs);
var inst_16244 = cljs.core.seq.call(null,inst_16243);
var inst_16245 = inst_16244;
var inst_16246 = null;
var inst_16247 = (0);
var inst_16248 = (0);
var state_16368__$1 = (function (){var statearr_16429 = state_16368;
(statearr_16429[(14)] = inst_16246);

(statearr_16429[(15)] = inst_16247);

(statearr_16429[(16)] = inst_16248);

(statearr_16429[(17)] = inst_16245);

return statearr_16429;
})();
var statearr_16430_16492 = state_16368__$1;
(statearr_16430_16492[(2)] = null);

(statearr_16430_16492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (14))){
var state_16368__$1 = state_16368;
var statearr_16431_16493 = state_16368__$1;
(statearr_16431_16493[(2)] = null);

(statearr_16431_16493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (45))){
var inst_16358 = (state_16368[(2)]);
var state_16368__$1 = state_16368;
var statearr_16432_16494 = state_16368__$1;
(statearr_16432_16494[(2)] = inst_16358);

(statearr_16432_16494[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (26))){
var inst_16300 = (state_16368[(29)]);
var inst_16354 = (state_16368[(2)]);
var inst_16355 = cljs.core.seq.call(null,inst_16300);
var state_16368__$1 = (function (){var statearr_16433 = state_16368;
(statearr_16433[(31)] = inst_16354);

return statearr_16433;
})();
if(inst_16355){
var statearr_16434_16495 = state_16368__$1;
(statearr_16434_16495[(1)] = (42));

} else {
var statearr_16435_16496 = state_16368__$1;
(statearr_16435_16496[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (16))){
var inst_16267 = (state_16368[(7)]);
var inst_16269 = cljs.core.chunked_seq_QMARK_.call(null,inst_16267);
var state_16368__$1 = state_16368;
if(inst_16269){
var statearr_16436_16497 = state_16368__$1;
(statearr_16436_16497[(1)] = (19));

} else {
var statearr_16437_16498 = state_16368__$1;
(statearr_16437_16498[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (38))){
var inst_16347 = (state_16368[(2)]);
var state_16368__$1 = state_16368;
var statearr_16438_16499 = state_16368__$1;
(statearr_16438_16499[(2)] = inst_16347);

(statearr_16438_16499[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (30))){
var state_16368__$1 = state_16368;
var statearr_16439_16500 = state_16368__$1;
(statearr_16439_16500[(2)] = null);

(statearr_16439_16500[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (10))){
var inst_16246 = (state_16368[(14)]);
var inst_16248 = (state_16368[(16)]);
var inst_16256 = cljs.core._nth.call(null,inst_16246,inst_16248);
var inst_16257 = cljs.core.nth.call(null,inst_16256,(0),null);
var inst_16258 = cljs.core.nth.call(null,inst_16256,(1),null);
var state_16368__$1 = (function (){var statearr_16440 = state_16368;
(statearr_16440[(26)] = inst_16257);

return statearr_16440;
})();
if(cljs.core.truth_(inst_16258)){
var statearr_16441_16501 = state_16368__$1;
(statearr_16441_16501[(1)] = (13));

} else {
var statearr_16442_16502 = state_16368__$1;
(statearr_16442_16502[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (18))){
var inst_16293 = (state_16368[(2)]);
var state_16368__$1 = state_16368;
var statearr_16443_16503 = state_16368__$1;
(statearr_16443_16503[(2)] = inst_16293);

(statearr_16443_16503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (42))){
var state_16368__$1 = state_16368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16368__$1,(45),dchan);
} else {
if((state_val_16369 === (37))){
var inst_16336 = (state_16368[(23)]);
var inst_16327 = (state_16368[(25)]);
var inst_16236 = (state_16368[(12)]);
var inst_16336__$1 = cljs.core.first.call(null,inst_16327);
var inst_16337 = cljs.core.async.put_BANG_.call(null,inst_16336__$1,inst_16236,done);
var state_16368__$1 = (function (){var statearr_16444 = state_16368;
(statearr_16444[(23)] = inst_16336__$1);

return statearr_16444;
})();
if(cljs.core.truth_(inst_16337)){
var statearr_16445_16504 = state_16368__$1;
(statearr_16445_16504[(1)] = (39));

} else {
var statearr_16446_16505 = state_16368__$1;
(statearr_16446_16505[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16369 === (8))){
var inst_16247 = (state_16368[(15)]);
var inst_16248 = (state_16368[(16)]);
var inst_16250 = (inst_16248 < inst_16247);
var inst_16251 = inst_16250;
var state_16368__$1 = state_16368;
if(cljs.core.truth_(inst_16251)){
var statearr_16447_16506 = state_16368__$1;
(statearr_16447_16506[(1)] = (10));

} else {
var statearr_16448_16507 = state_16368__$1;
(statearr_16448_16507[(1)] = (11));

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
});})(c__15634__auto___16453,cs,m,dchan,dctr,done))
;
return ((function (switch__15539__auto__,c__15634__auto___16453,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15540__auto__ = null;
var cljs$core$async$mult_$_state_machine__15540__auto____0 = (function (){
var statearr_16449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16449[(0)] = cljs$core$async$mult_$_state_machine__15540__auto__);

(statearr_16449[(1)] = (1));

return statearr_16449;
});
var cljs$core$async$mult_$_state_machine__15540__auto____1 = (function (state_16368){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_16368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e16450){if((e16450 instanceof Object)){
var ex__15543__auto__ = e16450;
var statearr_16451_16508 = state_16368;
(statearr_16451_16508[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16509 = state_16368;
state_16368 = G__16509;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15540__auto__ = function(state_16368){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15540__auto____1.call(this,state_16368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15540__auto____0;
cljs$core$async$mult_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15540__auto____1;
return cljs$core$async$mult_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___16453,cs,m,dchan,dctr,done))
})();
var state__15636__auto__ = (function (){var statearr_16452 = f__15635__auto__.call(null);
(statearr_16452[(6)] = c__15634__auto___16453);

return statearr_16452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___16453,cs,m,dchan,dctr,done))
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
var G__16511 = arguments.length;
switch (G__16511) {
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16523 = arguments.length;
var i__4731__auto___16524 = (0);
while(true){
if((i__4731__auto___16524 < len__4730__auto___16523)){
args__4736__auto__.push((arguments[i__4731__auto___16524]));

var G__16525 = (i__4731__auto___16524 + (1));
i__4731__auto___16524 = G__16525;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16517){
var map__16518 = p__16517;
var map__16518__$1 = (((((!((map__16518 == null))))?(((((map__16518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16518):map__16518);
var opts = map__16518__$1;
var statearr_16520_16526 = state;
(statearr_16520_16526[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,((function (map__16518,map__16518__$1,opts){
return (function (val){
var statearr_16521_16527 = state;
(statearr_16521_16527[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16518,map__16518__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16522_16528 = state;
(statearr_16522_16528[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16513){
var G__16514 = cljs.core.first.call(null,seq16513);
var seq16513__$1 = cljs.core.next.call(null,seq16513);
var G__16515 = cljs.core.first.call(null,seq16513__$1);
var seq16513__$2 = cljs.core.next.call(null,seq16513__$1);
var G__16516 = cljs.core.first.call(null,seq16513__$2);
var seq16513__$3 = cljs.core.next.call(null,seq16513__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16514,G__16515,G__16516,seq16513__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16529 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16530){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16530 = meta16530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16531,meta16530__$1){
var self__ = this;
var _16531__$1 = this;
return (new cljs.core.async.t_cljs$core$async16529(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16530__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16531){
var self__ = this;
var _16531__$1 = this;
return self__.meta16530;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16529.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16530","meta16530",531757452,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16529";

cljs.core.async.t_cljs$core$async16529.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16529");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16529.
 */
cljs.core.async.__GT_t_cljs$core$async16529 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16529(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16530){
return (new cljs.core.async.t_cljs$core$async16529(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16530));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16529(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15634__auto___16693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___16693,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___16693,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16633){
var state_val_16634 = (state_16633[(1)]);
if((state_val_16634 === (7))){
var inst_16548 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16635_16694 = state_16633__$1;
(statearr_16635_16694[(2)] = inst_16548);

(statearr_16635_16694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (20))){
var inst_16560 = (state_16633[(7)]);
var state_16633__$1 = state_16633;
var statearr_16636_16695 = state_16633__$1;
(statearr_16636_16695[(2)] = inst_16560);

(statearr_16636_16695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (27))){
var state_16633__$1 = state_16633;
var statearr_16637_16696 = state_16633__$1;
(statearr_16637_16696[(2)] = null);

(statearr_16637_16696[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (1))){
var inst_16535 = (state_16633[(8)]);
var inst_16535__$1 = calc_state.call(null);
var inst_16537 = (inst_16535__$1 == null);
var inst_16538 = cljs.core.not.call(null,inst_16537);
var state_16633__$1 = (function (){var statearr_16638 = state_16633;
(statearr_16638[(8)] = inst_16535__$1);

return statearr_16638;
})();
if(inst_16538){
var statearr_16639_16697 = state_16633__$1;
(statearr_16639_16697[(1)] = (2));

} else {
var statearr_16640_16698 = state_16633__$1;
(statearr_16640_16698[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (24))){
var inst_16607 = (state_16633[(9)]);
var inst_16593 = (state_16633[(10)]);
var inst_16584 = (state_16633[(11)]);
var inst_16607__$1 = inst_16584.call(null,inst_16593);
var state_16633__$1 = (function (){var statearr_16641 = state_16633;
(statearr_16641[(9)] = inst_16607__$1);

return statearr_16641;
})();
if(cljs.core.truth_(inst_16607__$1)){
var statearr_16642_16699 = state_16633__$1;
(statearr_16642_16699[(1)] = (29));

} else {
var statearr_16643_16700 = state_16633__$1;
(statearr_16643_16700[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (4))){
var inst_16551 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
if(cljs.core.truth_(inst_16551)){
var statearr_16644_16701 = state_16633__$1;
(statearr_16644_16701[(1)] = (8));

} else {
var statearr_16645_16702 = state_16633__$1;
(statearr_16645_16702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (15))){
var inst_16578 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
if(cljs.core.truth_(inst_16578)){
var statearr_16646_16703 = state_16633__$1;
(statearr_16646_16703[(1)] = (19));

} else {
var statearr_16647_16704 = state_16633__$1;
(statearr_16647_16704[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (21))){
var inst_16583 = (state_16633[(12)]);
var inst_16583__$1 = (state_16633[(2)]);
var inst_16584 = cljs.core.get.call(null,inst_16583__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16585 = cljs.core.get.call(null,inst_16583__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16586 = cljs.core.get.call(null,inst_16583__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16633__$1 = (function (){var statearr_16648 = state_16633;
(statearr_16648[(12)] = inst_16583__$1);

(statearr_16648[(13)] = inst_16585);

(statearr_16648[(11)] = inst_16584);

return statearr_16648;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16633__$1,(22),inst_16586);
} else {
if((state_val_16634 === (31))){
var inst_16615 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
if(cljs.core.truth_(inst_16615)){
var statearr_16649_16705 = state_16633__$1;
(statearr_16649_16705[(1)] = (32));

} else {
var statearr_16650_16706 = state_16633__$1;
(statearr_16650_16706[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (32))){
var inst_16592 = (state_16633[(14)]);
var state_16633__$1 = state_16633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16633__$1,(35),out,inst_16592);
} else {
if((state_val_16634 === (33))){
var inst_16583 = (state_16633[(12)]);
var inst_16560 = inst_16583;
var state_16633__$1 = (function (){var statearr_16651 = state_16633;
(statearr_16651[(7)] = inst_16560);

return statearr_16651;
})();
var statearr_16652_16707 = state_16633__$1;
(statearr_16652_16707[(2)] = null);

(statearr_16652_16707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (13))){
var inst_16560 = (state_16633[(7)]);
var inst_16567 = inst_16560.cljs$lang$protocol_mask$partition0$;
var inst_16568 = (inst_16567 & (64));
var inst_16569 = inst_16560.cljs$core$ISeq$;
var inst_16570 = (cljs.core.PROTOCOL_SENTINEL === inst_16569);
var inst_16571 = ((inst_16568) || (inst_16570));
var state_16633__$1 = state_16633;
if(cljs.core.truth_(inst_16571)){
var statearr_16653_16708 = state_16633__$1;
(statearr_16653_16708[(1)] = (16));

} else {
var statearr_16654_16709 = state_16633__$1;
(statearr_16654_16709[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (22))){
var inst_16593 = (state_16633[(10)]);
var inst_16592 = (state_16633[(14)]);
var inst_16591 = (state_16633[(2)]);
var inst_16592__$1 = cljs.core.nth.call(null,inst_16591,(0),null);
var inst_16593__$1 = cljs.core.nth.call(null,inst_16591,(1),null);
var inst_16594 = (inst_16592__$1 == null);
var inst_16595 = cljs.core._EQ_.call(null,inst_16593__$1,change);
var inst_16596 = ((inst_16594) || (inst_16595));
var state_16633__$1 = (function (){var statearr_16655 = state_16633;
(statearr_16655[(10)] = inst_16593__$1);

(statearr_16655[(14)] = inst_16592__$1);

return statearr_16655;
})();
if(cljs.core.truth_(inst_16596)){
var statearr_16656_16710 = state_16633__$1;
(statearr_16656_16710[(1)] = (23));

} else {
var statearr_16657_16711 = state_16633__$1;
(statearr_16657_16711[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (36))){
var inst_16583 = (state_16633[(12)]);
var inst_16560 = inst_16583;
var state_16633__$1 = (function (){var statearr_16658 = state_16633;
(statearr_16658[(7)] = inst_16560);

return statearr_16658;
})();
var statearr_16659_16712 = state_16633__$1;
(statearr_16659_16712[(2)] = null);

(statearr_16659_16712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (29))){
var inst_16607 = (state_16633[(9)]);
var state_16633__$1 = state_16633;
var statearr_16660_16713 = state_16633__$1;
(statearr_16660_16713[(2)] = inst_16607);

(statearr_16660_16713[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (6))){
var state_16633__$1 = state_16633;
var statearr_16661_16714 = state_16633__$1;
(statearr_16661_16714[(2)] = false);

(statearr_16661_16714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (28))){
var inst_16603 = (state_16633[(2)]);
var inst_16604 = calc_state.call(null);
var inst_16560 = inst_16604;
var state_16633__$1 = (function (){var statearr_16662 = state_16633;
(statearr_16662[(7)] = inst_16560);

(statearr_16662[(15)] = inst_16603);

return statearr_16662;
})();
var statearr_16663_16715 = state_16633__$1;
(statearr_16663_16715[(2)] = null);

(statearr_16663_16715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (25))){
var inst_16629 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16664_16716 = state_16633__$1;
(statearr_16664_16716[(2)] = inst_16629);

(statearr_16664_16716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (34))){
var inst_16627 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16665_16717 = state_16633__$1;
(statearr_16665_16717[(2)] = inst_16627);

(statearr_16665_16717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (17))){
var state_16633__$1 = state_16633;
var statearr_16666_16718 = state_16633__$1;
(statearr_16666_16718[(2)] = false);

(statearr_16666_16718[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (3))){
var state_16633__$1 = state_16633;
var statearr_16667_16719 = state_16633__$1;
(statearr_16667_16719[(2)] = false);

(statearr_16667_16719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (12))){
var inst_16631 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16633__$1,inst_16631);
} else {
if((state_val_16634 === (2))){
var inst_16535 = (state_16633[(8)]);
var inst_16540 = inst_16535.cljs$lang$protocol_mask$partition0$;
var inst_16541 = (inst_16540 & (64));
var inst_16542 = inst_16535.cljs$core$ISeq$;
var inst_16543 = (cljs.core.PROTOCOL_SENTINEL === inst_16542);
var inst_16544 = ((inst_16541) || (inst_16543));
var state_16633__$1 = state_16633;
if(cljs.core.truth_(inst_16544)){
var statearr_16668_16720 = state_16633__$1;
(statearr_16668_16720[(1)] = (5));

} else {
var statearr_16669_16721 = state_16633__$1;
(statearr_16669_16721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (23))){
var inst_16592 = (state_16633[(14)]);
var inst_16598 = (inst_16592 == null);
var state_16633__$1 = state_16633;
if(cljs.core.truth_(inst_16598)){
var statearr_16670_16722 = state_16633__$1;
(statearr_16670_16722[(1)] = (26));

} else {
var statearr_16671_16723 = state_16633__$1;
(statearr_16671_16723[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (35))){
var inst_16618 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
if(cljs.core.truth_(inst_16618)){
var statearr_16672_16724 = state_16633__$1;
(statearr_16672_16724[(1)] = (36));

} else {
var statearr_16673_16725 = state_16633__$1;
(statearr_16673_16725[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (19))){
var inst_16560 = (state_16633[(7)]);
var inst_16580 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16560);
var state_16633__$1 = state_16633;
var statearr_16674_16726 = state_16633__$1;
(statearr_16674_16726[(2)] = inst_16580);

(statearr_16674_16726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (11))){
var inst_16560 = (state_16633[(7)]);
var inst_16564 = (inst_16560 == null);
var inst_16565 = cljs.core.not.call(null,inst_16564);
var state_16633__$1 = state_16633;
if(inst_16565){
var statearr_16675_16727 = state_16633__$1;
(statearr_16675_16727[(1)] = (13));

} else {
var statearr_16676_16728 = state_16633__$1;
(statearr_16676_16728[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (9))){
var inst_16535 = (state_16633[(8)]);
var state_16633__$1 = state_16633;
var statearr_16677_16729 = state_16633__$1;
(statearr_16677_16729[(2)] = inst_16535);

(statearr_16677_16729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (5))){
var state_16633__$1 = state_16633;
var statearr_16678_16730 = state_16633__$1;
(statearr_16678_16730[(2)] = true);

(statearr_16678_16730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (14))){
var state_16633__$1 = state_16633;
var statearr_16679_16731 = state_16633__$1;
(statearr_16679_16731[(2)] = false);

(statearr_16679_16731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (26))){
var inst_16593 = (state_16633[(10)]);
var inst_16600 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16593);
var state_16633__$1 = state_16633;
var statearr_16680_16732 = state_16633__$1;
(statearr_16680_16732[(2)] = inst_16600);

(statearr_16680_16732[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (16))){
var state_16633__$1 = state_16633;
var statearr_16681_16733 = state_16633__$1;
(statearr_16681_16733[(2)] = true);

(statearr_16681_16733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (38))){
var inst_16623 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16682_16734 = state_16633__$1;
(statearr_16682_16734[(2)] = inst_16623);

(statearr_16682_16734[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (30))){
var inst_16593 = (state_16633[(10)]);
var inst_16585 = (state_16633[(13)]);
var inst_16584 = (state_16633[(11)]);
var inst_16610 = cljs.core.empty_QMARK_.call(null,inst_16584);
var inst_16611 = inst_16585.call(null,inst_16593);
var inst_16612 = cljs.core.not.call(null,inst_16611);
var inst_16613 = ((inst_16610) && (inst_16612));
var state_16633__$1 = state_16633;
var statearr_16683_16735 = state_16633__$1;
(statearr_16683_16735[(2)] = inst_16613);

(statearr_16683_16735[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (10))){
var inst_16535 = (state_16633[(8)]);
var inst_16556 = (state_16633[(2)]);
var inst_16557 = cljs.core.get.call(null,inst_16556,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16558 = cljs.core.get.call(null,inst_16556,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16559 = cljs.core.get.call(null,inst_16556,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16560 = inst_16535;
var state_16633__$1 = (function (){var statearr_16684 = state_16633;
(statearr_16684[(16)] = inst_16558);

(statearr_16684[(7)] = inst_16560);

(statearr_16684[(17)] = inst_16557);

(statearr_16684[(18)] = inst_16559);

return statearr_16684;
})();
var statearr_16685_16736 = state_16633__$1;
(statearr_16685_16736[(2)] = null);

(statearr_16685_16736[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (18))){
var inst_16575 = (state_16633[(2)]);
var state_16633__$1 = state_16633;
var statearr_16686_16737 = state_16633__$1;
(statearr_16686_16737[(2)] = inst_16575);

(statearr_16686_16737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (37))){
var state_16633__$1 = state_16633;
var statearr_16687_16738 = state_16633__$1;
(statearr_16687_16738[(2)] = null);

(statearr_16687_16738[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16634 === (8))){
var inst_16535 = (state_16633[(8)]);
var inst_16553 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16535);
var state_16633__$1 = state_16633;
var statearr_16688_16739 = state_16633__$1;
(statearr_16688_16739[(2)] = inst_16553);

(statearr_16688_16739[(1)] = (10));


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
});})(c__15634__auto___16693,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15539__auto__,c__15634__auto___16693,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15540__auto__ = null;
var cljs$core$async$mix_$_state_machine__15540__auto____0 = (function (){
var statearr_16689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16689[(0)] = cljs$core$async$mix_$_state_machine__15540__auto__);

(statearr_16689[(1)] = (1));

return statearr_16689;
});
var cljs$core$async$mix_$_state_machine__15540__auto____1 = (function (state_16633){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_16633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e16690){if((e16690 instanceof Object)){
var ex__15543__auto__ = e16690;
var statearr_16691_16740 = state_16633;
(statearr_16691_16740[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16741 = state_16633;
state_16633 = G__16741;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15540__auto__ = function(state_16633){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15540__auto____1.call(this,state_16633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15540__auto____0;
cljs$core$async$mix_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15540__auto____1;
return cljs$core$async$mix_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___16693,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15636__auto__ = (function (){var statearr_16692 = f__15635__auto__.call(null);
(statearr_16692[(6)] = c__15634__auto___16693);

return statearr_16692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___16693,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16743 = arguments.length;
switch (G__16743) {
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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
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
var G__16747 = arguments.length;
switch (G__16747) {
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
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__16745_SHARP_){
if(cljs.core.truth_(p1__16745_SHARP_.call(null,topic))){
return p1__16745_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16745_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16748 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16749){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16749 = meta16749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16750,meta16749__$1){
var self__ = this;
var _16750__$1 = this;
return (new cljs.core.async.t_cljs$core$async16748(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16749__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16750){
var self__ = this;
var _16750__$1 = this;
return self__.meta16749;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16748.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16748.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16748.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16748.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16748.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16748.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16748.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16749","meta16749",-904500957,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16748";

cljs.core.async.t_cljs$core$async16748.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16748");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16748.
 */
cljs.core.async.__GT_t_cljs$core$async16748 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16748(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16749){
return (new cljs.core.async.t_cljs$core$async16748(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16749));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16748(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15634__auto___16868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___16868,mults,ensure_mult,p){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___16868,mults,ensure_mult,p){
return (function (state_16822){
var state_val_16823 = (state_16822[(1)]);
if((state_val_16823 === (7))){
var inst_16818 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
var statearr_16824_16869 = state_16822__$1;
(statearr_16824_16869[(2)] = inst_16818);

(statearr_16824_16869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (20))){
var state_16822__$1 = state_16822;
var statearr_16825_16870 = state_16822__$1;
(statearr_16825_16870[(2)] = null);

(statearr_16825_16870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (1))){
var state_16822__$1 = state_16822;
var statearr_16826_16871 = state_16822__$1;
(statearr_16826_16871[(2)] = null);

(statearr_16826_16871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (24))){
var inst_16801 = (state_16822[(7)]);
var inst_16810 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16801);
var state_16822__$1 = state_16822;
var statearr_16827_16872 = state_16822__$1;
(statearr_16827_16872[(2)] = inst_16810);

(statearr_16827_16872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (4))){
var inst_16753 = (state_16822[(8)]);
var inst_16753__$1 = (state_16822[(2)]);
var inst_16754 = (inst_16753__$1 == null);
var state_16822__$1 = (function (){var statearr_16828 = state_16822;
(statearr_16828[(8)] = inst_16753__$1);

return statearr_16828;
})();
if(cljs.core.truth_(inst_16754)){
var statearr_16829_16873 = state_16822__$1;
(statearr_16829_16873[(1)] = (5));

} else {
var statearr_16830_16874 = state_16822__$1;
(statearr_16830_16874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (15))){
var inst_16795 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
var statearr_16831_16875 = state_16822__$1;
(statearr_16831_16875[(2)] = inst_16795);

(statearr_16831_16875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (21))){
var inst_16815 = (state_16822[(2)]);
var state_16822__$1 = (function (){var statearr_16832 = state_16822;
(statearr_16832[(9)] = inst_16815);

return statearr_16832;
})();
var statearr_16833_16876 = state_16822__$1;
(statearr_16833_16876[(2)] = null);

(statearr_16833_16876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (13))){
var inst_16777 = (state_16822[(10)]);
var inst_16779 = cljs.core.chunked_seq_QMARK_.call(null,inst_16777);
var state_16822__$1 = state_16822;
if(inst_16779){
var statearr_16834_16877 = state_16822__$1;
(statearr_16834_16877[(1)] = (16));

} else {
var statearr_16835_16878 = state_16822__$1;
(statearr_16835_16878[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (22))){
var inst_16807 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
if(cljs.core.truth_(inst_16807)){
var statearr_16836_16879 = state_16822__$1;
(statearr_16836_16879[(1)] = (23));

} else {
var statearr_16837_16880 = state_16822__$1;
(statearr_16837_16880[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (6))){
var inst_16803 = (state_16822[(11)]);
var inst_16753 = (state_16822[(8)]);
var inst_16801 = (state_16822[(7)]);
var inst_16801__$1 = topic_fn.call(null,inst_16753);
var inst_16802 = cljs.core.deref.call(null,mults);
var inst_16803__$1 = cljs.core.get.call(null,inst_16802,inst_16801__$1);
var state_16822__$1 = (function (){var statearr_16838 = state_16822;
(statearr_16838[(11)] = inst_16803__$1);

(statearr_16838[(7)] = inst_16801__$1);

return statearr_16838;
})();
if(cljs.core.truth_(inst_16803__$1)){
var statearr_16839_16881 = state_16822__$1;
(statearr_16839_16881[(1)] = (19));

} else {
var statearr_16840_16882 = state_16822__$1;
(statearr_16840_16882[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (25))){
var inst_16812 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
var statearr_16841_16883 = state_16822__$1;
(statearr_16841_16883[(2)] = inst_16812);

(statearr_16841_16883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (17))){
var inst_16777 = (state_16822[(10)]);
var inst_16786 = cljs.core.first.call(null,inst_16777);
var inst_16787 = cljs.core.async.muxch_STAR_.call(null,inst_16786);
var inst_16788 = cljs.core.async.close_BANG_.call(null,inst_16787);
var inst_16789 = cljs.core.next.call(null,inst_16777);
var inst_16763 = inst_16789;
var inst_16764 = null;
var inst_16765 = (0);
var inst_16766 = (0);
var state_16822__$1 = (function (){var statearr_16842 = state_16822;
(statearr_16842[(12)] = inst_16788);

(statearr_16842[(13)] = inst_16765);

(statearr_16842[(14)] = inst_16766);

(statearr_16842[(15)] = inst_16764);

(statearr_16842[(16)] = inst_16763);

return statearr_16842;
})();
var statearr_16843_16884 = state_16822__$1;
(statearr_16843_16884[(2)] = null);

(statearr_16843_16884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (3))){
var inst_16820 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16822__$1,inst_16820);
} else {
if((state_val_16823 === (12))){
var inst_16797 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
var statearr_16844_16885 = state_16822__$1;
(statearr_16844_16885[(2)] = inst_16797);

(statearr_16844_16885[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (2))){
var state_16822__$1 = state_16822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16822__$1,(4),ch);
} else {
if((state_val_16823 === (23))){
var state_16822__$1 = state_16822;
var statearr_16845_16886 = state_16822__$1;
(statearr_16845_16886[(2)] = null);

(statearr_16845_16886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (19))){
var inst_16803 = (state_16822[(11)]);
var inst_16753 = (state_16822[(8)]);
var inst_16805 = cljs.core.async.muxch_STAR_.call(null,inst_16803);
var state_16822__$1 = state_16822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16822__$1,(22),inst_16805,inst_16753);
} else {
if((state_val_16823 === (11))){
var inst_16777 = (state_16822[(10)]);
var inst_16763 = (state_16822[(16)]);
var inst_16777__$1 = cljs.core.seq.call(null,inst_16763);
var state_16822__$1 = (function (){var statearr_16846 = state_16822;
(statearr_16846[(10)] = inst_16777__$1);

return statearr_16846;
})();
if(inst_16777__$1){
var statearr_16847_16887 = state_16822__$1;
(statearr_16847_16887[(1)] = (13));

} else {
var statearr_16848_16888 = state_16822__$1;
(statearr_16848_16888[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (9))){
var inst_16799 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
var statearr_16849_16889 = state_16822__$1;
(statearr_16849_16889[(2)] = inst_16799);

(statearr_16849_16889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (5))){
var inst_16760 = cljs.core.deref.call(null,mults);
var inst_16761 = cljs.core.vals.call(null,inst_16760);
var inst_16762 = cljs.core.seq.call(null,inst_16761);
var inst_16763 = inst_16762;
var inst_16764 = null;
var inst_16765 = (0);
var inst_16766 = (0);
var state_16822__$1 = (function (){var statearr_16850 = state_16822;
(statearr_16850[(13)] = inst_16765);

(statearr_16850[(14)] = inst_16766);

(statearr_16850[(15)] = inst_16764);

(statearr_16850[(16)] = inst_16763);

return statearr_16850;
})();
var statearr_16851_16890 = state_16822__$1;
(statearr_16851_16890[(2)] = null);

(statearr_16851_16890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (14))){
var state_16822__$1 = state_16822;
var statearr_16855_16891 = state_16822__$1;
(statearr_16855_16891[(2)] = null);

(statearr_16855_16891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (16))){
var inst_16777 = (state_16822[(10)]);
var inst_16781 = cljs.core.chunk_first.call(null,inst_16777);
var inst_16782 = cljs.core.chunk_rest.call(null,inst_16777);
var inst_16783 = cljs.core.count.call(null,inst_16781);
var inst_16763 = inst_16782;
var inst_16764 = inst_16781;
var inst_16765 = inst_16783;
var inst_16766 = (0);
var state_16822__$1 = (function (){var statearr_16856 = state_16822;
(statearr_16856[(13)] = inst_16765);

(statearr_16856[(14)] = inst_16766);

(statearr_16856[(15)] = inst_16764);

(statearr_16856[(16)] = inst_16763);

return statearr_16856;
})();
var statearr_16857_16892 = state_16822__$1;
(statearr_16857_16892[(2)] = null);

(statearr_16857_16892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (10))){
var inst_16765 = (state_16822[(13)]);
var inst_16766 = (state_16822[(14)]);
var inst_16764 = (state_16822[(15)]);
var inst_16763 = (state_16822[(16)]);
var inst_16771 = cljs.core._nth.call(null,inst_16764,inst_16766);
var inst_16772 = cljs.core.async.muxch_STAR_.call(null,inst_16771);
var inst_16773 = cljs.core.async.close_BANG_.call(null,inst_16772);
var inst_16774 = (inst_16766 + (1));
var tmp16852 = inst_16765;
var tmp16853 = inst_16764;
var tmp16854 = inst_16763;
var inst_16763__$1 = tmp16854;
var inst_16764__$1 = tmp16853;
var inst_16765__$1 = tmp16852;
var inst_16766__$1 = inst_16774;
var state_16822__$1 = (function (){var statearr_16858 = state_16822;
(statearr_16858[(17)] = inst_16773);

(statearr_16858[(13)] = inst_16765__$1);

(statearr_16858[(14)] = inst_16766__$1);

(statearr_16858[(15)] = inst_16764__$1);

(statearr_16858[(16)] = inst_16763__$1);

return statearr_16858;
})();
var statearr_16859_16893 = state_16822__$1;
(statearr_16859_16893[(2)] = null);

(statearr_16859_16893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (18))){
var inst_16792 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
var statearr_16860_16894 = state_16822__$1;
(statearr_16860_16894[(2)] = inst_16792);

(statearr_16860_16894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (8))){
var inst_16765 = (state_16822[(13)]);
var inst_16766 = (state_16822[(14)]);
var inst_16768 = (inst_16766 < inst_16765);
var inst_16769 = inst_16768;
var state_16822__$1 = state_16822;
if(cljs.core.truth_(inst_16769)){
var statearr_16861_16895 = state_16822__$1;
(statearr_16861_16895[(1)] = (10));

} else {
var statearr_16862_16896 = state_16822__$1;
(statearr_16862_16896[(1)] = (11));

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
});})(c__15634__auto___16868,mults,ensure_mult,p))
;
return ((function (switch__15539__auto__,c__15634__auto___16868,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15540__auto__ = null;
var cljs$core$async$state_machine__15540__auto____0 = (function (){
var statearr_16863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16863[(0)] = cljs$core$async$state_machine__15540__auto__);

(statearr_16863[(1)] = (1));

return statearr_16863;
});
var cljs$core$async$state_machine__15540__auto____1 = (function (state_16822){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_16822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e16864){if((e16864 instanceof Object)){
var ex__15543__auto__ = e16864;
var statearr_16865_16897 = state_16822;
(statearr_16865_16897[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16898 = state_16822;
state_16822 = G__16898;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$state_machine__15540__auto__ = function(state_16822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15540__auto____1.call(this,state_16822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15540__auto____0;
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15540__auto____1;
return cljs$core$async$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___16868,mults,ensure_mult,p))
})();
var state__15636__auto__ = (function (){var statearr_16866 = f__15635__auto__.call(null);
(statearr_16866[(6)] = c__15634__auto___16868);

return statearr_16866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___16868,mults,ensure_mult,p))
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
var G__16900 = arguments.length;
switch (G__16900) {
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
var G__16903 = arguments.length;
switch (G__16903) {
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
var G__16906 = arguments.length;
switch (G__16906) {
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
var c__15634__auto___16973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___16973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___16973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16945){
var state_val_16946 = (state_16945[(1)]);
if((state_val_16946 === (7))){
var state_16945__$1 = state_16945;
var statearr_16947_16974 = state_16945__$1;
(statearr_16947_16974[(2)] = null);

(statearr_16947_16974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (1))){
var state_16945__$1 = state_16945;
var statearr_16948_16975 = state_16945__$1;
(statearr_16948_16975[(2)] = null);

(statearr_16948_16975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (4))){
var inst_16909 = (state_16945[(7)]);
var inst_16911 = (inst_16909 < cnt);
var state_16945__$1 = state_16945;
if(cljs.core.truth_(inst_16911)){
var statearr_16949_16976 = state_16945__$1;
(statearr_16949_16976[(1)] = (6));

} else {
var statearr_16950_16977 = state_16945__$1;
(statearr_16950_16977[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (15))){
var inst_16941 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
var statearr_16951_16978 = state_16945__$1;
(statearr_16951_16978[(2)] = inst_16941);

(statearr_16951_16978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (13))){
var inst_16934 = cljs.core.async.close_BANG_.call(null,out);
var state_16945__$1 = state_16945;
var statearr_16952_16979 = state_16945__$1;
(statearr_16952_16979[(2)] = inst_16934);

(statearr_16952_16979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (6))){
var state_16945__$1 = state_16945;
var statearr_16953_16980 = state_16945__$1;
(statearr_16953_16980[(2)] = null);

(statearr_16953_16980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (3))){
var inst_16943 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16945__$1,inst_16943);
} else {
if((state_val_16946 === (12))){
var inst_16931 = (state_16945[(8)]);
var inst_16931__$1 = (state_16945[(2)]);
var inst_16932 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16931__$1);
var state_16945__$1 = (function (){var statearr_16954 = state_16945;
(statearr_16954[(8)] = inst_16931__$1);

return statearr_16954;
})();
if(cljs.core.truth_(inst_16932)){
var statearr_16955_16981 = state_16945__$1;
(statearr_16955_16981[(1)] = (13));

} else {
var statearr_16956_16982 = state_16945__$1;
(statearr_16956_16982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (2))){
var inst_16908 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16909 = (0);
var state_16945__$1 = (function (){var statearr_16957 = state_16945;
(statearr_16957[(7)] = inst_16909);

(statearr_16957[(9)] = inst_16908);

return statearr_16957;
})();
var statearr_16958_16983 = state_16945__$1;
(statearr_16958_16983[(2)] = null);

(statearr_16958_16983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (11))){
var inst_16909 = (state_16945[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16945,(10),Object,null,(9));
var inst_16918 = chs__$1.call(null,inst_16909);
var inst_16919 = done.call(null,inst_16909);
var inst_16920 = cljs.core.async.take_BANG_.call(null,inst_16918,inst_16919);
var state_16945__$1 = state_16945;
var statearr_16959_16984 = state_16945__$1;
(statearr_16959_16984[(2)] = inst_16920);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16945__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (9))){
var inst_16909 = (state_16945[(7)]);
var inst_16922 = (state_16945[(2)]);
var inst_16923 = (inst_16909 + (1));
var inst_16909__$1 = inst_16923;
var state_16945__$1 = (function (){var statearr_16960 = state_16945;
(statearr_16960[(7)] = inst_16909__$1);

(statearr_16960[(10)] = inst_16922);

return statearr_16960;
})();
var statearr_16961_16985 = state_16945__$1;
(statearr_16961_16985[(2)] = null);

(statearr_16961_16985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (5))){
var inst_16929 = (state_16945[(2)]);
var state_16945__$1 = (function (){var statearr_16962 = state_16945;
(statearr_16962[(11)] = inst_16929);

return statearr_16962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16945__$1,(12),dchan);
} else {
if((state_val_16946 === (14))){
var inst_16931 = (state_16945[(8)]);
var inst_16936 = cljs.core.apply.call(null,f,inst_16931);
var state_16945__$1 = state_16945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16945__$1,(16),out,inst_16936);
} else {
if((state_val_16946 === (16))){
var inst_16938 = (state_16945[(2)]);
var state_16945__$1 = (function (){var statearr_16963 = state_16945;
(statearr_16963[(12)] = inst_16938);

return statearr_16963;
})();
var statearr_16964_16986 = state_16945__$1;
(statearr_16964_16986[(2)] = null);

(statearr_16964_16986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (10))){
var inst_16913 = (state_16945[(2)]);
var inst_16914 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16945__$1 = (function (){var statearr_16965 = state_16945;
(statearr_16965[(13)] = inst_16913);

return statearr_16965;
})();
var statearr_16966_16987 = state_16945__$1;
(statearr_16966_16987[(2)] = inst_16914);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16945__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (8))){
var inst_16927 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
var statearr_16967_16988 = state_16945__$1;
(statearr_16967_16988[(2)] = inst_16927);

(statearr_16967_16988[(1)] = (5));


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
});})(c__15634__auto___16973,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15539__auto__,c__15634__auto___16973,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15540__auto__ = null;
var cljs$core$async$state_machine__15540__auto____0 = (function (){
var statearr_16968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16968[(0)] = cljs$core$async$state_machine__15540__auto__);

(statearr_16968[(1)] = (1));

return statearr_16968;
});
var cljs$core$async$state_machine__15540__auto____1 = (function (state_16945){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_16945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e16969){if((e16969 instanceof Object)){
var ex__15543__auto__ = e16969;
var statearr_16970_16989 = state_16945;
(statearr_16970_16989[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16990 = state_16945;
state_16945 = G__16990;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$state_machine__15540__auto__ = function(state_16945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15540__auto____1.call(this,state_16945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15540__auto____0;
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15540__auto____1;
return cljs$core$async$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___16973,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15636__auto__ = (function (){var statearr_16971 = f__15635__auto__.call(null);
(statearr_16971[(6)] = c__15634__auto___16973);

return statearr_16971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___16973,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__16993 = arguments.length;
switch (G__16993) {
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
var c__15634__auto___17047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___17047,out){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___17047,out){
return (function (state_17025){
var state_val_17026 = (state_17025[(1)]);
if((state_val_17026 === (7))){
var inst_17004 = (state_17025[(7)]);
var inst_17005 = (state_17025[(8)]);
var inst_17004__$1 = (state_17025[(2)]);
var inst_17005__$1 = cljs.core.nth.call(null,inst_17004__$1,(0),null);
var inst_17006 = cljs.core.nth.call(null,inst_17004__$1,(1),null);
var inst_17007 = (inst_17005__$1 == null);
var state_17025__$1 = (function (){var statearr_17027 = state_17025;
(statearr_17027[(9)] = inst_17006);

(statearr_17027[(7)] = inst_17004__$1);

(statearr_17027[(8)] = inst_17005__$1);

return statearr_17027;
})();
if(cljs.core.truth_(inst_17007)){
var statearr_17028_17048 = state_17025__$1;
(statearr_17028_17048[(1)] = (8));

} else {
var statearr_17029_17049 = state_17025__$1;
(statearr_17029_17049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17026 === (1))){
var inst_16994 = cljs.core.vec.call(null,chs);
var inst_16995 = inst_16994;
var state_17025__$1 = (function (){var statearr_17030 = state_17025;
(statearr_17030[(10)] = inst_16995);

return statearr_17030;
})();
var statearr_17031_17050 = state_17025__$1;
(statearr_17031_17050[(2)] = null);

(statearr_17031_17050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17026 === (4))){
var inst_16995 = (state_17025[(10)]);
var state_17025__$1 = state_17025;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17025__$1,(7),inst_16995);
} else {
if((state_val_17026 === (6))){
var inst_17021 = (state_17025[(2)]);
var state_17025__$1 = state_17025;
var statearr_17032_17051 = state_17025__$1;
(statearr_17032_17051[(2)] = inst_17021);

(statearr_17032_17051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17026 === (3))){
var inst_17023 = (state_17025[(2)]);
var state_17025__$1 = state_17025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17025__$1,inst_17023);
} else {
if((state_val_17026 === (2))){
var inst_16995 = (state_17025[(10)]);
var inst_16997 = cljs.core.count.call(null,inst_16995);
var inst_16998 = (inst_16997 > (0));
var state_17025__$1 = state_17025;
if(cljs.core.truth_(inst_16998)){
var statearr_17034_17052 = state_17025__$1;
(statearr_17034_17052[(1)] = (4));

} else {
var statearr_17035_17053 = state_17025__$1;
(statearr_17035_17053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17026 === (11))){
var inst_16995 = (state_17025[(10)]);
var inst_17014 = (state_17025[(2)]);
var tmp17033 = inst_16995;
var inst_16995__$1 = tmp17033;
var state_17025__$1 = (function (){var statearr_17036 = state_17025;
(statearr_17036[(11)] = inst_17014);

(statearr_17036[(10)] = inst_16995__$1);

return statearr_17036;
})();
var statearr_17037_17054 = state_17025__$1;
(statearr_17037_17054[(2)] = null);

(statearr_17037_17054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17026 === (9))){
var inst_17005 = (state_17025[(8)]);
var state_17025__$1 = state_17025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17025__$1,(11),out,inst_17005);
} else {
if((state_val_17026 === (5))){
var inst_17019 = cljs.core.async.close_BANG_.call(null,out);
var state_17025__$1 = state_17025;
var statearr_17038_17055 = state_17025__$1;
(statearr_17038_17055[(2)] = inst_17019);

(statearr_17038_17055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17026 === (10))){
var inst_17017 = (state_17025[(2)]);
var state_17025__$1 = state_17025;
var statearr_17039_17056 = state_17025__$1;
(statearr_17039_17056[(2)] = inst_17017);

(statearr_17039_17056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17026 === (8))){
var inst_17006 = (state_17025[(9)]);
var inst_17004 = (state_17025[(7)]);
var inst_17005 = (state_17025[(8)]);
var inst_16995 = (state_17025[(10)]);
var inst_17009 = (function (){var cs = inst_16995;
var vec__17000 = inst_17004;
var v = inst_17005;
var c = inst_17006;
return ((function (cs,vec__17000,v,c,inst_17006,inst_17004,inst_17005,inst_16995,state_val_17026,c__15634__auto___17047,out){
return (function (p1__16991_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16991_SHARP_);
});
;})(cs,vec__17000,v,c,inst_17006,inst_17004,inst_17005,inst_16995,state_val_17026,c__15634__auto___17047,out))
})();
var inst_17010 = cljs.core.filterv.call(null,inst_17009,inst_16995);
var inst_16995__$1 = inst_17010;
var state_17025__$1 = (function (){var statearr_17040 = state_17025;
(statearr_17040[(10)] = inst_16995__$1);

return statearr_17040;
})();
var statearr_17041_17057 = state_17025__$1;
(statearr_17041_17057[(2)] = null);

(statearr_17041_17057[(1)] = (2));


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
});})(c__15634__auto___17047,out))
;
return ((function (switch__15539__auto__,c__15634__auto___17047,out){
return (function() {
var cljs$core$async$state_machine__15540__auto__ = null;
var cljs$core$async$state_machine__15540__auto____0 = (function (){
var statearr_17042 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17042[(0)] = cljs$core$async$state_machine__15540__auto__);

(statearr_17042[(1)] = (1));

return statearr_17042;
});
var cljs$core$async$state_machine__15540__auto____1 = (function (state_17025){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_17025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e17043){if((e17043 instanceof Object)){
var ex__15543__auto__ = e17043;
var statearr_17044_17058 = state_17025;
(statearr_17044_17058[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17059 = state_17025;
state_17025 = G__17059;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$state_machine__15540__auto__ = function(state_17025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15540__auto____1.call(this,state_17025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15540__auto____0;
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15540__auto____1;
return cljs$core$async$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___17047,out))
})();
var state__15636__auto__ = (function (){var statearr_17045 = f__15635__auto__.call(null);
(statearr_17045[(6)] = c__15634__auto___17047);

return statearr_17045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___17047,out))
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
var G__17061 = arguments.length;
switch (G__17061) {
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
var c__15634__auto___17106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___17106,out){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___17106,out){
return (function (state_17085){
var state_val_17086 = (state_17085[(1)]);
if((state_val_17086 === (7))){
var inst_17067 = (state_17085[(7)]);
var inst_17067__$1 = (state_17085[(2)]);
var inst_17068 = (inst_17067__$1 == null);
var inst_17069 = cljs.core.not.call(null,inst_17068);
var state_17085__$1 = (function (){var statearr_17087 = state_17085;
(statearr_17087[(7)] = inst_17067__$1);

return statearr_17087;
})();
if(inst_17069){
var statearr_17088_17107 = state_17085__$1;
(statearr_17088_17107[(1)] = (8));

} else {
var statearr_17089_17108 = state_17085__$1;
(statearr_17089_17108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (1))){
var inst_17062 = (0);
var state_17085__$1 = (function (){var statearr_17090 = state_17085;
(statearr_17090[(8)] = inst_17062);

return statearr_17090;
})();
var statearr_17091_17109 = state_17085__$1;
(statearr_17091_17109[(2)] = null);

(statearr_17091_17109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (4))){
var state_17085__$1 = state_17085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17085__$1,(7),ch);
} else {
if((state_val_17086 === (6))){
var inst_17080 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
var statearr_17092_17110 = state_17085__$1;
(statearr_17092_17110[(2)] = inst_17080);

(statearr_17092_17110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (3))){
var inst_17082 = (state_17085[(2)]);
var inst_17083 = cljs.core.async.close_BANG_.call(null,out);
var state_17085__$1 = (function (){var statearr_17093 = state_17085;
(statearr_17093[(9)] = inst_17082);

return statearr_17093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17085__$1,inst_17083);
} else {
if((state_val_17086 === (2))){
var inst_17062 = (state_17085[(8)]);
var inst_17064 = (inst_17062 < n);
var state_17085__$1 = state_17085;
if(cljs.core.truth_(inst_17064)){
var statearr_17094_17111 = state_17085__$1;
(statearr_17094_17111[(1)] = (4));

} else {
var statearr_17095_17112 = state_17085__$1;
(statearr_17095_17112[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (11))){
var inst_17062 = (state_17085[(8)]);
var inst_17072 = (state_17085[(2)]);
var inst_17073 = (inst_17062 + (1));
var inst_17062__$1 = inst_17073;
var state_17085__$1 = (function (){var statearr_17096 = state_17085;
(statearr_17096[(8)] = inst_17062__$1);

(statearr_17096[(10)] = inst_17072);

return statearr_17096;
})();
var statearr_17097_17113 = state_17085__$1;
(statearr_17097_17113[(2)] = null);

(statearr_17097_17113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (9))){
var state_17085__$1 = state_17085;
var statearr_17098_17114 = state_17085__$1;
(statearr_17098_17114[(2)] = null);

(statearr_17098_17114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (5))){
var state_17085__$1 = state_17085;
var statearr_17099_17115 = state_17085__$1;
(statearr_17099_17115[(2)] = null);

(statearr_17099_17115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (10))){
var inst_17077 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
var statearr_17100_17116 = state_17085__$1;
(statearr_17100_17116[(2)] = inst_17077);

(statearr_17100_17116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (8))){
var inst_17067 = (state_17085[(7)]);
var state_17085__$1 = state_17085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17085__$1,(11),out,inst_17067);
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
});})(c__15634__auto___17106,out))
;
return ((function (switch__15539__auto__,c__15634__auto___17106,out){
return (function() {
var cljs$core$async$state_machine__15540__auto__ = null;
var cljs$core$async$state_machine__15540__auto____0 = (function (){
var statearr_17101 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17101[(0)] = cljs$core$async$state_machine__15540__auto__);

(statearr_17101[(1)] = (1));

return statearr_17101;
});
var cljs$core$async$state_machine__15540__auto____1 = (function (state_17085){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_17085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e17102){if((e17102 instanceof Object)){
var ex__15543__auto__ = e17102;
var statearr_17103_17117 = state_17085;
(statearr_17103_17117[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17118 = state_17085;
state_17085 = G__17118;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$state_machine__15540__auto__ = function(state_17085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15540__auto____1.call(this,state_17085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15540__auto____0;
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15540__auto____1;
return cljs$core$async$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___17106,out))
})();
var state__15636__auto__ = (function (){var statearr_17104 = f__15635__auto__.call(null);
(statearr_17104[(6)] = c__15634__auto___17106);

return statearr_17104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___17106,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17120 = (function (f,ch,meta17121){
this.f = f;
this.ch = ch;
this.meta17121 = meta17121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17122,meta17121__$1){
var self__ = this;
var _17122__$1 = this;
return (new cljs.core.async.t_cljs$core$async17120(self__.f,self__.ch,meta17121__$1));
});

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17122){
var self__ = this;
var _17122__$1 = this;
return self__.meta17121;
});

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17123 = (function (f,ch,meta17121,_,fn1,meta17124){
this.f = f;
this.ch = ch;
this.meta17121 = meta17121;
this._ = _;
this.fn1 = fn1;
this.meta17124 = meta17124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17125,meta17124__$1){
var self__ = this;
var _17125__$1 = this;
return (new cljs.core.async.t_cljs$core$async17123(self__.f,self__.ch,self__.meta17121,self__._,self__.fn1,meta17124__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17125){
var self__ = this;
var _17125__$1 = this;
return self__.meta17124;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17119_SHARP_){
return f1.call(null,(((p1__17119_SHARP_ == null))?null:self__.f.call(null,p1__17119_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17123.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17121","meta17121",1572896039,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17120","cljs.core.async/t_cljs$core$async17120",-543354391,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17124","meta17124",-1486207638,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17123";

cljs.core.async.t_cljs$core$async17123.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17123");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17123.
 */
cljs.core.async.__GT_t_cljs$core$async17123 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17123(f__$1,ch__$1,meta17121__$1,___$2,fn1__$1,meta17124){
return (new cljs.core.async.t_cljs$core$async17123(f__$1,ch__$1,meta17121__$1,___$2,fn1__$1,meta17124));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17123(self__.f,self__.ch,self__.meta17121,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17121","meta17121",1572896039,null)], null);
});

cljs.core.async.t_cljs$core$async17120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17120";

cljs.core.async.t_cljs$core$async17120.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17120");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17120.
 */
cljs.core.async.__GT_t_cljs$core$async17120 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17120(f__$1,ch__$1,meta17121){
return (new cljs.core.async.t_cljs$core$async17120(f__$1,ch__$1,meta17121));
});

}

return (new cljs.core.async.t_cljs$core$async17120(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17126 = (function (f,ch,meta17127){
this.f = f;
this.ch = ch;
this.meta17127 = meta17127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17128,meta17127__$1){
var self__ = this;
var _17128__$1 = this;
return (new cljs.core.async.t_cljs$core$async17126(self__.f,self__.ch,meta17127__$1));
});

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17128){
var self__ = this;
var _17128__$1 = this;
return self__.meta17127;
});

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17127","meta17127",1727240236,null)], null);
});

cljs.core.async.t_cljs$core$async17126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17126";

cljs.core.async.t_cljs$core$async17126.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17126");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17126.
 */
cljs.core.async.__GT_t_cljs$core$async17126 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17126(f__$1,ch__$1,meta17127){
return (new cljs.core.async.t_cljs$core$async17126(f__$1,ch__$1,meta17127));
});

}

return (new cljs.core.async.t_cljs$core$async17126(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17129 = (function (p,ch,meta17130){
this.p = p;
this.ch = ch;
this.meta17130 = meta17130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17131,meta17130__$1){
var self__ = this;
var _17131__$1 = this;
return (new cljs.core.async.t_cljs$core$async17129(self__.p,self__.ch,meta17130__$1));
});

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17131){
var self__ = this;
var _17131__$1 = this;
return self__.meta17130;
});

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17130","meta17130",1796893147,null)], null);
});

cljs.core.async.t_cljs$core$async17129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17129";

cljs.core.async.t_cljs$core$async17129.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17129");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17129.
 */
cljs.core.async.__GT_t_cljs$core$async17129 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17129(p__$1,ch__$1,meta17130){
return (new cljs.core.async.t_cljs$core$async17129(p__$1,ch__$1,meta17130));
});

}

return (new cljs.core.async.t_cljs$core$async17129(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17133 = arguments.length;
switch (G__17133) {
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
var c__15634__auto___17173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___17173,out){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___17173,out){
return (function (state_17154){
var state_val_17155 = (state_17154[(1)]);
if((state_val_17155 === (7))){
var inst_17150 = (state_17154[(2)]);
var state_17154__$1 = state_17154;
var statearr_17156_17174 = state_17154__$1;
(statearr_17156_17174[(2)] = inst_17150);

(statearr_17156_17174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (1))){
var state_17154__$1 = state_17154;
var statearr_17157_17175 = state_17154__$1;
(statearr_17157_17175[(2)] = null);

(statearr_17157_17175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (4))){
var inst_17136 = (state_17154[(7)]);
var inst_17136__$1 = (state_17154[(2)]);
var inst_17137 = (inst_17136__$1 == null);
var state_17154__$1 = (function (){var statearr_17158 = state_17154;
(statearr_17158[(7)] = inst_17136__$1);

return statearr_17158;
})();
if(cljs.core.truth_(inst_17137)){
var statearr_17159_17176 = state_17154__$1;
(statearr_17159_17176[(1)] = (5));

} else {
var statearr_17160_17177 = state_17154__$1;
(statearr_17160_17177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (6))){
var inst_17136 = (state_17154[(7)]);
var inst_17141 = p.call(null,inst_17136);
var state_17154__$1 = state_17154;
if(cljs.core.truth_(inst_17141)){
var statearr_17161_17178 = state_17154__$1;
(statearr_17161_17178[(1)] = (8));

} else {
var statearr_17162_17179 = state_17154__$1;
(statearr_17162_17179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (3))){
var inst_17152 = (state_17154[(2)]);
var state_17154__$1 = state_17154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17154__$1,inst_17152);
} else {
if((state_val_17155 === (2))){
var state_17154__$1 = state_17154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17154__$1,(4),ch);
} else {
if((state_val_17155 === (11))){
var inst_17144 = (state_17154[(2)]);
var state_17154__$1 = state_17154;
var statearr_17163_17180 = state_17154__$1;
(statearr_17163_17180[(2)] = inst_17144);

(statearr_17163_17180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (9))){
var state_17154__$1 = state_17154;
var statearr_17164_17181 = state_17154__$1;
(statearr_17164_17181[(2)] = null);

(statearr_17164_17181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (5))){
var inst_17139 = cljs.core.async.close_BANG_.call(null,out);
var state_17154__$1 = state_17154;
var statearr_17165_17182 = state_17154__$1;
(statearr_17165_17182[(2)] = inst_17139);

(statearr_17165_17182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (10))){
var inst_17147 = (state_17154[(2)]);
var state_17154__$1 = (function (){var statearr_17166 = state_17154;
(statearr_17166[(8)] = inst_17147);

return statearr_17166;
})();
var statearr_17167_17183 = state_17154__$1;
(statearr_17167_17183[(2)] = null);

(statearr_17167_17183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17155 === (8))){
var inst_17136 = (state_17154[(7)]);
var state_17154__$1 = state_17154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17154__$1,(11),out,inst_17136);
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
});})(c__15634__auto___17173,out))
;
return ((function (switch__15539__auto__,c__15634__auto___17173,out){
return (function() {
var cljs$core$async$state_machine__15540__auto__ = null;
var cljs$core$async$state_machine__15540__auto____0 = (function (){
var statearr_17168 = [null,null,null,null,null,null,null,null,null];
(statearr_17168[(0)] = cljs$core$async$state_machine__15540__auto__);

(statearr_17168[(1)] = (1));

return statearr_17168;
});
var cljs$core$async$state_machine__15540__auto____1 = (function (state_17154){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_17154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e17169){if((e17169 instanceof Object)){
var ex__15543__auto__ = e17169;
var statearr_17170_17184 = state_17154;
(statearr_17170_17184[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17185 = state_17154;
state_17154 = G__17185;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$state_machine__15540__auto__ = function(state_17154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15540__auto____1.call(this,state_17154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15540__auto____0;
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15540__auto____1;
return cljs$core$async$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___17173,out))
})();
var state__15636__auto__ = (function (){var statearr_17171 = f__15635__auto__.call(null);
(statearr_17171[(6)] = c__15634__auto___17173);

return statearr_17171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___17173,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17187 = arguments.length;
switch (G__17187) {
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
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_17250){
var state_val_17251 = (state_17250[(1)]);
if((state_val_17251 === (7))){
var inst_17246 = (state_17250[(2)]);
var state_17250__$1 = state_17250;
var statearr_17252_17290 = state_17250__$1;
(statearr_17252_17290[(2)] = inst_17246);

(statearr_17252_17290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (20))){
var inst_17216 = (state_17250[(7)]);
var inst_17227 = (state_17250[(2)]);
var inst_17228 = cljs.core.next.call(null,inst_17216);
var inst_17202 = inst_17228;
var inst_17203 = null;
var inst_17204 = (0);
var inst_17205 = (0);
var state_17250__$1 = (function (){var statearr_17253 = state_17250;
(statearr_17253[(8)] = inst_17227);

(statearr_17253[(9)] = inst_17203);

(statearr_17253[(10)] = inst_17202);

(statearr_17253[(11)] = inst_17205);

(statearr_17253[(12)] = inst_17204);

return statearr_17253;
})();
var statearr_17254_17291 = state_17250__$1;
(statearr_17254_17291[(2)] = null);

(statearr_17254_17291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (1))){
var state_17250__$1 = state_17250;
var statearr_17255_17292 = state_17250__$1;
(statearr_17255_17292[(2)] = null);

(statearr_17255_17292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (4))){
var inst_17191 = (state_17250[(13)]);
var inst_17191__$1 = (state_17250[(2)]);
var inst_17192 = (inst_17191__$1 == null);
var state_17250__$1 = (function (){var statearr_17256 = state_17250;
(statearr_17256[(13)] = inst_17191__$1);

return statearr_17256;
})();
if(cljs.core.truth_(inst_17192)){
var statearr_17257_17293 = state_17250__$1;
(statearr_17257_17293[(1)] = (5));

} else {
var statearr_17258_17294 = state_17250__$1;
(statearr_17258_17294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (15))){
var state_17250__$1 = state_17250;
var statearr_17262_17295 = state_17250__$1;
(statearr_17262_17295[(2)] = null);

(statearr_17262_17295[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (21))){
var state_17250__$1 = state_17250;
var statearr_17263_17296 = state_17250__$1;
(statearr_17263_17296[(2)] = null);

(statearr_17263_17296[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (13))){
var inst_17203 = (state_17250[(9)]);
var inst_17202 = (state_17250[(10)]);
var inst_17205 = (state_17250[(11)]);
var inst_17204 = (state_17250[(12)]);
var inst_17212 = (state_17250[(2)]);
var inst_17213 = (inst_17205 + (1));
var tmp17259 = inst_17203;
var tmp17260 = inst_17202;
var tmp17261 = inst_17204;
var inst_17202__$1 = tmp17260;
var inst_17203__$1 = tmp17259;
var inst_17204__$1 = tmp17261;
var inst_17205__$1 = inst_17213;
var state_17250__$1 = (function (){var statearr_17264 = state_17250;
(statearr_17264[(9)] = inst_17203__$1);

(statearr_17264[(10)] = inst_17202__$1);

(statearr_17264[(11)] = inst_17205__$1);

(statearr_17264[(14)] = inst_17212);

(statearr_17264[(12)] = inst_17204__$1);

return statearr_17264;
})();
var statearr_17265_17297 = state_17250__$1;
(statearr_17265_17297[(2)] = null);

(statearr_17265_17297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (22))){
var state_17250__$1 = state_17250;
var statearr_17266_17298 = state_17250__$1;
(statearr_17266_17298[(2)] = null);

(statearr_17266_17298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (6))){
var inst_17191 = (state_17250[(13)]);
var inst_17200 = f.call(null,inst_17191);
var inst_17201 = cljs.core.seq.call(null,inst_17200);
var inst_17202 = inst_17201;
var inst_17203 = null;
var inst_17204 = (0);
var inst_17205 = (0);
var state_17250__$1 = (function (){var statearr_17267 = state_17250;
(statearr_17267[(9)] = inst_17203);

(statearr_17267[(10)] = inst_17202);

(statearr_17267[(11)] = inst_17205);

(statearr_17267[(12)] = inst_17204);

return statearr_17267;
})();
var statearr_17268_17299 = state_17250__$1;
(statearr_17268_17299[(2)] = null);

(statearr_17268_17299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (17))){
var inst_17216 = (state_17250[(7)]);
var inst_17220 = cljs.core.chunk_first.call(null,inst_17216);
var inst_17221 = cljs.core.chunk_rest.call(null,inst_17216);
var inst_17222 = cljs.core.count.call(null,inst_17220);
var inst_17202 = inst_17221;
var inst_17203 = inst_17220;
var inst_17204 = inst_17222;
var inst_17205 = (0);
var state_17250__$1 = (function (){var statearr_17269 = state_17250;
(statearr_17269[(9)] = inst_17203);

(statearr_17269[(10)] = inst_17202);

(statearr_17269[(11)] = inst_17205);

(statearr_17269[(12)] = inst_17204);

return statearr_17269;
})();
var statearr_17270_17300 = state_17250__$1;
(statearr_17270_17300[(2)] = null);

(statearr_17270_17300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (3))){
var inst_17248 = (state_17250[(2)]);
var state_17250__$1 = state_17250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17250__$1,inst_17248);
} else {
if((state_val_17251 === (12))){
var inst_17236 = (state_17250[(2)]);
var state_17250__$1 = state_17250;
var statearr_17271_17301 = state_17250__$1;
(statearr_17271_17301[(2)] = inst_17236);

(statearr_17271_17301[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (2))){
var state_17250__$1 = state_17250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17250__$1,(4),in$);
} else {
if((state_val_17251 === (23))){
var inst_17244 = (state_17250[(2)]);
var state_17250__$1 = state_17250;
var statearr_17272_17302 = state_17250__$1;
(statearr_17272_17302[(2)] = inst_17244);

(statearr_17272_17302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (19))){
var inst_17231 = (state_17250[(2)]);
var state_17250__$1 = state_17250;
var statearr_17273_17303 = state_17250__$1;
(statearr_17273_17303[(2)] = inst_17231);

(statearr_17273_17303[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (11))){
var inst_17202 = (state_17250[(10)]);
var inst_17216 = (state_17250[(7)]);
var inst_17216__$1 = cljs.core.seq.call(null,inst_17202);
var state_17250__$1 = (function (){var statearr_17274 = state_17250;
(statearr_17274[(7)] = inst_17216__$1);

return statearr_17274;
})();
if(inst_17216__$1){
var statearr_17275_17304 = state_17250__$1;
(statearr_17275_17304[(1)] = (14));

} else {
var statearr_17276_17305 = state_17250__$1;
(statearr_17276_17305[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (9))){
var inst_17238 = (state_17250[(2)]);
var inst_17239 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17250__$1 = (function (){var statearr_17277 = state_17250;
(statearr_17277[(15)] = inst_17238);

return statearr_17277;
})();
if(cljs.core.truth_(inst_17239)){
var statearr_17278_17306 = state_17250__$1;
(statearr_17278_17306[(1)] = (21));

} else {
var statearr_17279_17307 = state_17250__$1;
(statearr_17279_17307[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (5))){
var inst_17194 = cljs.core.async.close_BANG_.call(null,out);
var state_17250__$1 = state_17250;
var statearr_17280_17308 = state_17250__$1;
(statearr_17280_17308[(2)] = inst_17194);

(statearr_17280_17308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (14))){
var inst_17216 = (state_17250[(7)]);
var inst_17218 = cljs.core.chunked_seq_QMARK_.call(null,inst_17216);
var state_17250__$1 = state_17250;
if(inst_17218){
var statearr_17281_17309 = state_17250__$1;
(statearr_17281_17309[(1)] = (17));

} else {
var statearr_17282_17310 = state_17250__$1;
(statearr_17282_17310[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (16))){
var inst_17234 = (state_17250[(2)]);
var state_17250__$1 = state_17250;
var statearr_17283_17311 = state_17250__$1;
(statearr_17283_17311[(2)] = inst_17234);

(statearr_17283_17311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (10))){
var inst_17203 = (state_17250[(9)]);
var inst_17205 = (state_17250[(11)]);
var inst_17210 = cljs.core._nth.call(null,inst_17203,inst_17205);
var state_17250__$1 = state_17250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17250__$1,(13),out,inst_17210);
} else {
if((state_val_17251 === (18))){
var inst_17216 = (state_17250[(7)]);
var inst_17225 = cljs.core.first.call(null,inst_17216);
var state_17250__$1 = state_17250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17250__$1,(20),out,inst_17225);
} else {
if((state_val_17251 === (8))){
var inst_17205 = (state_17250[(11)]);
var inst_17204 = (state_17250[(12)]);
var inst_17207 = (inst_17205 < inst_17204);
var inst_17208 = inst_17207;
var state_17250__$1 = state_17250;
if(cljs.core.truth_(inst_17208)){
var statearr_17284_17312 = state_17250__$1;
(statearr_17284_17312[(1)] = (10));

} else {
var statearr_17285_17313 = state_17250__$1;
(statearr_17285_17313[(1)] = (11));

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
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15540__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15540__auto____0 = (function (){
var statearr_17286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17286[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15540__auto__);

(statearr_17286[(1)] = (1));

return statearr_17286;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15540__auto____1 = (function (state_17250){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_17250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e17287){if((e17287 instanceof Object)){
var ex__15543__auto__ = e17287;
var statearr_17288_17314 = state_17250;
(statearr_17288_17314[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17315 = state_17250;
state_17250 = G__17315;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15540__auto__ = function(state_17250){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15540__auto____1.call(this,state_17250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15540__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15540__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_17289 = f__15635__auto__.call(null);
(statearr_17289[(6)] = c__15634__auto__);

return statearr_17289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17317 = arguments.length;
switch (G__17317) {
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
var G__17320 = arguments.length;
switch (G__17320) {
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
var G__17323 = arguments.length;
switch (G__17323) {
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
var c__15634__auto___17370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___17370,out){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___17370,out){
return (function (state_17347){
var state_val_17348 = (state_17347[(1)]);
if((state_val_17348 === (7))){
var inst_17342 = (state_17347[(2)]);
var state_17347__$1 = state_17347;
var statearr_17349_17371 = state_17347__$1;
(statearr_17349_17371[(2)] = inst_17342);

(statearr_17349_17371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (1))){
var inst_17324 = null;
var state_17347__$1 = (function (){var statearr_17350 = state_17347;
(statearr_17350[(7)] = inst_17324);

return statearr_17350;
})();
var statearr_17351_17372 = state_17347__$1;
(statearr_17351_17372[(2)] = null);

(statearr_17351_17372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (4))){
var inst_17327 = (state_17347[(8)]);
var inst_17327__$1 = (state_17347[(2)]);
var inst_17328 = (inst_17327__$1 == null);
var inst_17329 = cljs.core.not.call(null,inst_17328);
var state_17347__$1 = (function (){var statearr_17352 = state_17347;
(statearr_17352[(8)] = inst_17327__$1);

return statearr_17352;
})();
if(inst_17329){
var statearr_17353_17373 = state_17347__$1;
(statearr_17353_17373[(1)] = (5));

} else {
var statearr_17354_17374 = state_17347__$1;
(statearr_17354_17374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (6))){
var state_17347__$1 = state_17347;
var statearr_17355_17375 = state_17347__$1;
(statearr_17355_17375[(2)] = null);

(statearr_17355_17375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (3))){
var inst_17344 = (state_17347[(2)]);
var inst_17345 = cljs.core.async.close_BANG_.call(null,out);
var state_17347__$1 = (function (){var statearr_17356 = state_17347;
(statearr_17356[(9)] = inst_17344);

return statearr_17356;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17347__$1,inst_17345);
} else {
if((state_val_17348 === (2))){
var state_17347__$1 = state_17347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17347__$1,(4),ch);
} else {
if((state_val_17348 === (11))){
var inst_17327 = (state_17347[(8)]);
var inst_17336 = (state_17347[(2)]);
var inst_17324 = inst_17327;
var state_17347__$1 = (function (){var statearr_17357 = state_17347;
(statearr_17357[(10)] = inst_17336);

(statearr_17357[(7)] = inst_17324);

return statearr_17357;
})();
var statearr_17358_17376 = state_17347__$1;
(statearr_17358_17376[(2)] = null);

(statearr_17358_17376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (9))){
var inst_17327 = (state_17347[(8)]);
var state_17347__$1 = state_17347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17347__$1,(11),out,inst_17327);
} else {
if((state_val_17348 === (5))){
var inst_17327 = (state_17347[(8)]);
var inst_17324 = (state_17347[(7)]);
var inst_17331 = cljs.core._EQ_.call(null,inst_17327,inst_17324);
var state_17347__$1 = state_17347;
if(inst_17331){
var statearr_17360_17377 = state_17347__$1;
(statearr_17360_17377[(1)] = (8));

} else {
var statearr_17361_17378 = state_17347__$1;
(statearr_17361_17378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (10))){
var inst_17339 = (state_17347[(2)]);
var state_17347__$1 = state_17347;
var statearr_17362_17379 = state_17347__$1;
(statearr_17362_17379[(2)] = inst_17339);

(statearr_17362_17379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (8))){
var inst_17324 = (state_17347[(7)]);
var tmp17359 = inst_17324;
var inst_17324__$1 = tmp17359;
var state_17347__$1 = (function (){var statearr_17363 = state_17347;
(statearr_17363[(7)] = inst_17324__$1);

return statearr_17363;
})();
var statearr_17364_17380 = state_17347__$1;
(statearr_17364_17380[(2)] = null);

(statearr_17364_17380[(1)] = (2));


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
});})(c__15634__auto___17370,out))
;
return ((function (switch__15539__auto__,c__15634__auto___17370,out){
return (function() {
var cljs$core$async$state_machine__15540__auto__ = null;
var cljs$core$async$state_machine__15540__auto____0 = (function (){
var statearr_17365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17365[(0)] = cljs$core$async$state_machine__15540__auto__);

(statearr_17365[(1)] = (1));

return statearr_17365;
});
var cljs$core$async$state_machine__15540__auto____1 = (function (state_17347){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_17347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e17366){if((e17366 instanceof Object)){
var ex__15543__auto__ = e17366;
var statearr_17367_17381 = state_17347;
(statearr_17367_17381[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17382 = state_17347;
state_17347 = G__17382;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$state_machine__15540__auto__ = function(state_17347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15540__auto____1.call(this,state_17347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15540__auto____0;
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15540__auto____1;
return cljs$core$async$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___17370,out))
})();
var state__15636__auto__ = (function (){var statearr_17368 = f__15635__auto__.call(null);
(statearr_17368[(6)] = c__15634__auto___17370);

return statearr_17368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___17370,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17384 = arguments.length;
switch (G__17384) {
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
var c__15634__auto___17450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___17450,out){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___17450,out){
return (function (state_17422){
var state_val_17423 = (state_17422[(1)]);
if((state_val_17423 === (7))){
var inst_17418 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
var statearr_17424_17451 = state_17422__$1;
(statearr_17424_17451[(2)] = inst_17418);

(statearr_17424_17451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (1))){
var inst_17385 = (new Array(n));
var inst_17386 = inst_17385;
var inst_17387 = (0);
var state_17422__$1 = (function (){var statearr_17425 = state_17422;
(statearr_17425[(7)] = inst_17387);

(statearr_17425[(8)] = inst_17386);

return statearr_17425;
})();
var statearr_17426_17452 = state_17422__$1;
(statearr_17426_17452[(2)] = null);

(statearr_17426_17452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (4))){
var inst_17390 = (state_17422[(9)]);
var inst_17390__$1 = (state_17422[(2)]);
var inst_17391 = (inst_17390__$1 == null);
var inst_17392 = cljs.core.not.call(null,inst_17391);
var state_17422__$1 = (function (){var statearr_17427 = state_17422;
(statearr_17427[(9)] = inst_17390__$1);

return statearr_17427;
})();
if(inst_17392){
var statearr_17428_17453 = state_17422__$1;
(statearr_17428_17453[(1)] = (5));

} else {
var statearr_17429_17454 = state_17422__$1;
(statearr_17429_17454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (15))){
var inst_17412 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
var statearr_17430_17455 = state_17422__$1;
(statearr_17430_17455[(2)] = inst_17412);

(statearr_17430_17455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (13))){
var state_17422__$1 = state_17422;
var statearr_17431_17456 = state_17422__$1;
(statearr_17431_17456[(2)] = null);

(statearr_17431_17456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (6))){
var inst_17387 = (state_17422[(7)]);
var inst_17408 = (inst_17387 > (0));
var state_17422__$1 = state_17422;
if(cljs.core.truth_(inst_17408)){
var statearr_17432_17457 = state_17422__$1;
(statearr_17432_17457[(1)] = (12));

} else {
var statearr_17433_17458 = state_17422__$1;
(statearr_17433_17458[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (3))){
var inst_17420 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17422__$1,inst_17420);
} else {
if((state_val_17423 === (12))){
var inst_17386 = (state_17422[(8)]);
var inst_17410 = cljs.core.vec.call(null,inst_17386);
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17422__$1,(15),out,inst_17410);
} else {
if((state_val_17423 === (2))){
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17422__$1,(4),ch);
} else {
if((state_val_17423 === (11))){
var inst_17402 = (state_17422[(2)]);
var inst_17403 = (new Array(n));
var inst_17386 = inst_17403;
var inst_17387 = (0);
var state_17422__$1 = (function (){var statearr_17434 = state_17422;
(statearr_17434[(10)] = inst_17402);

(statearr_17434[(7)] = inst_17387);

(statearr_17434[(8)] = inst_17386);

return statearr_17434;
})();
var statearr_17435_17459 = state_17422__$1;
(statearr_17435_17459[(2)] = null);

(statearr_17435_17459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (9))){
var inst_17386 = (state_17422[(8)]);
var inst_17400 = cljs.core.vec.call(null,inst_17386);
var state_17422__$1 = state_17422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17422__$1,(11),out,inst_17400);
} else {
if((state_val_17423 === (5))){
var inst_17387 = (state_17422[(7)]);
var inst_17390 = (state_17422[(9)]);
var inst_17395 = (state_17422[(11)]);
var inst_17386 = (state_17422[(8)]);
var inst_17394 = (inst_17386[inst_17387] = inst_17390);
var inst_17395__$1 = (inst_17387 + (1));
var inst_17396 = (inst_17395__$1 < n);
var state_17422__$1 = (function (){var statearr_17436 = state_17422;
(statearr_17436[(11)] = inst_17395__$1);

(statearr_17436[(12)] = inst_17394);

return statearr_17436;
})();
if(cljs.core.truth_(inst_17396)){
var statearr_17437_17460 = state_17422__$1;
(statearr_17437_17460[(1)] = (8));

} else {
var statearr_17438_17461 = state_17422__$1;
(statearr_17438_17461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (14))){
var inst_17415 = (state_17422[(2)]);
var inst_17416 = cljs.core.async.close_BANG_.call(null,out);
var state_17422__$1 = (function (){var statearr_17440 = state_17422;
(statearr_17440[(13)] = inst_17415);

return statearr_17440;
})();
var statearr_17441_17462 = state_17422__$1;
(statearr_17441_17462[(2)] = inst_17416);

(statearr_17441_17462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (10))){
var inst_17406 = (state_17422[(2)]);
var state_17422__$1 = state_17422;
var statearr_17442_17463 = state_17422__$1;
(statearr_17442_17463[(2)] = inst_17406);

(statearr_17442_17463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17423 === (8))){
var inst_17395 = (state_17422[(11)]);
var inst_17386 = (state_17422[(8)]);
var tmp17439 = inst_17386;
var inst_17386__$1 = tmp17439;
var inst_17387 = inst_17395;
var state_17422__$1 = (function (){var statearr_17443 = state_17422;
(statearr_17443[(7)] = inst_17387);

(statearr_17443[(8)] = inst_17386__$1);

return statearr_17443;
})();
var statearr_17444_17464 = state_17422__$1;
(statearr_17444_17464[(2)] = null);

(statearr_17444_17464[(1)] = (2));


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
});})(c__15634__auto___17450,out))
;
return ((function (switch__15539__auto__,c__15634__auto___17450,out){
return (function() {
var cljs$core$async$state_machine__15540__auto__ = null;
var cljs$core$async$state_machine__15540__auto____0 = (function (){
var statearr_17445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17445[(0)] = cljs$core$async$state_machine__15540__auto__);

(statearr_17445[(1)] = (1));

return statearr_17445;
});
var cljs$core$async$state_machine__15540__auto____1 = (function (state_17422){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_17422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e17446){if((e17446 instanceof Object)){
var ex__15543__auto__ = e17446;
var statearr_17447_17465 = state_17422;
(statearr_17447_17465[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17466 = state_17422;
state_17422 = G__17466;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$state_machine__15540__auto__ = function(state_17422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15540__auto____1.call(this,state_17422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15540__auto____0;
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15540__auto____1;
return cljs$core$async$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___17450,out))
})();
var state__15636__auto__ = (function (){var statearr_17448 = f__15635__auto__.call(null);
(statearr_17448[(6)] = c__15634__auto___17450);

return statearr_17448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___17450,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17468 = arguments.length;
switch (G__17468) {
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
var c__15634__auto___17538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___17538,out){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___17538,out){
return (function (state_17510){
var state_val_17511 = (state_17510[(1)]);
if((state_val_17511 === (7))){
var inst_17506 = (state_17510[(2)]);
var state_17510__$1 = state_17510;
var statearr_17512_17539 = state_17510__$1;
(statearr_17512_17539[(2)] = inst_17506);

(statearr_17512_17539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (1))){
var inst_17469 = [];
var inst_17470 = inst_17469;
var inst_17471 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17510__$1 = (function (){var statearr_17513 = state_17510;
(statearr_17513[(7)] = inst_17470);

(statearr_17513[(8)] = inst_17471);

return statearr_17513;
})();
var statearr_17514_17540 = state_17510__$1;
(statearr_17514_17540[(2)] = null);

(statearr_17514_17540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (4))){
var inst_17474 = (state_17510[(9)]);
var inst_17474__$1 = (state_17510[(2)]);
var inst_17475 = (inst_17474__$1 == null);
var inst_17476 = cljs.core.not.call(null,inst_17475);
var state_17510__$1 = (function (){var statearr_17515 = state_17510;
(statearr_17515[(9)] = inst_17474__$1);

return statearr_17515;
})();
if(inst_17476){
var statearr_17516_17541 = state_17510__$1;
(statearr_17516_17541[(1)] = (5));

} else {
var statearr_17517_17542 = state_17510__$1;
(statearr_17517_17542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (15))){
var inst_17500 = (state_17510[(2)]);
var state_17510__$1 = state_17510;
var statearr_17518_17543 = state_17510__$1;
(statearr_17518_17543[(2)] = inst_17500);

(statearr_17518_17543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (13))){
var state_17510__$1 = state_17510;
var statearr_17519_17544 = state_17510__$1;
(statearr_17519_17544[(2)] = null);

(statearr_17519_17544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (6))){
var inst_17470 = (state_17510[(7)]);
var inst_17495 = inst_17470.length;
var inst_17496 = (inst_17495 > (0));
var state_17510__$1 = state_17510;
if(cljs.core.truth_(inst_17496)){
var statearr_17520_17545 = state_17510__$1;
(statearr_17520_17545[(1)] = (12));

} else {
var statearr_17521_17546 = state_17510__$1;
(statearr_17521_17546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (3))){
var inst_17508 = (state_17510[(2)]);
var state_17510__$1 = state_17510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17510__$1,inst_17508);
} else {
if((state_val_17511 === (12))){
var inst_17470 = (state_17510[(7)]);
var inst_17498 = cljs.core.vec.call(null,inst_17470);
var state_17510__$1 = state_17510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17510__$1,(15),out,inst_17498);
} else {
if((state_val_17511 === (2))){
var state_17510__$1 = state_17510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17510__$1,(4),ch);
} else {
if((state_val_17511 === (11))){
var inst_17478 = (state_17510[(10)]);
var inst_17474 = (state_17510[(9)]);
var inst_17488 = (state_17510[(2)]);
var inst_17489 = [];
var inst_17490 = inst_17489.push(inst_17474);
var inst_17470 = inst_17489;
var inst_17471 = inst_17478;
var state_17510__$1 = (function (){var statearr_17522 = state_17510;
(statearr_17522[(11)] = inst_17490);

(statearr_17522[(7)] = inst_17470);

(statearr_17522[(8)] = inst_17471);

(statearr_17522[(12)] = inst_17488);

return statearr_17522;
})();
var statearr_17523_17547 = state_17510__$1;
(statearr_17523_17547[(2)] = null);

(statearr_17523_17547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (9))){
var inst_17470 = (state_17510[(7)]);
var inst_17486 = cljs.core.vec.call(null,inst_17470);
var state_17510__$1 = state_17510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17510__$1,(11),out,inst_17486);
} else {
if((state_val_17511 === (5))){
var inst_17478 = (state_17510[(10)]);
var inst_17471 = (state_17510[(8)]);
var inst_17474 = (state_17510[(9)]);
var inst_17478__$1 = f.call(null,inst_17474);
var inst_17479 = cljs.core._EQ_.call(null,inst_17478__$1,inst_17471);
var inst_17480 = cljs.core.keyword_identical_QMARK_.call(null,inst_17471,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17481 = ((inst_17479) || (inst_17480));
var state_17510__$1 = (function (){var statearr_17524 = state_17510;
(statearr_17524[(10)] = inst_17478__$1);

return statearr_17524;
})();
if(cljs.core.truth_(inst_17481)){
var statearr_17525_17548 = state_17510__$1;
(statearr_17525_17548[(1)] = (8));

} else {
var statearr_17526_17549 = state_17510__$1;
(statearr_17526_17549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (14))){
var inst_17503 = (state_17510[(2)]);
var inst_17504 = cljs.core.async.close_BANG_.call(null,out);
var state_17510__$1 = (function (){var statearr_17528 = state_17510;
(statearr_17528[(13)] = inst_17503);

return statearr_17528;
})();
var statearr_17529_17550 = state_17510__$1;
(statearr_17529_17550[(2)] = inst_17504);

(statearr_17529_17550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (10))){
var inst_17493 = (state_17510[(2)]);
var state_17510__$1 = state_17510;
var statearr_17530_17551 = state_17510__$1;
(statearr_17530_17551[(2)] = inst_17493);

(statearr_17530_17551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17511 === (8))){
var inst_17470 = (state_17510[(7)]);
var inst_17478 = (state_17510[(10)]);
var inst_17474 = (state_17510[(9)]);
var inst_17483 = inst_17470.push(inst_17474);
var tmp17527 = inst_17470;
var inst_17470__$1 = tmp17527;
var inst_17471 = inst_17478;
var state_17510__$1 = (function (){var statearr_17531 = state_17510;
(statearr_17531[(7)] = inst_17470__$1);

(statearr_17531[(8)] = inst_17471);

(statearr_17531[(14)] = inst_17483);

return statearr_17531;
})();
var statearr_17532_17552 = state_17510__$1;
(statearr_17532_17552[(2)] = null);

(statearr_17532_17552[(1)] = (2));


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
});})(c__15634__auto___17538,out))
;
return ((function (switch__15539__auto__,c__15634__auto___17538,out){
return (function() {
var cljs$core$async$state_machine__15540__auto__ = null;
var cljs$core$async$state_machine__15540__auto____0 = (function (){
var statearr_17533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17533[(0)] = cljs$core$async$state_machine__15540__auto__);

(statearr_17533[(1)] = (1));

return statearr_17533;
});
var cljs$core$async$state_machine__15540__auto____1 = (function (state_17510){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_17510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e17534){if((e17534 instanceof Object)){
var ex__15543__auto__ = e17534;
var statearr_17535_17553 = state_17510;
(statearr_17535_17553[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17554 = state_17510;
state_17510 = G__17554;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
cljs$core$async$state_machine__15540__auto__ = function(state_17510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15540__auto____1.call(this,state_17510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15540__auto____0;
cljs$core$async$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15540__auto____1;
return cljs$core$async$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___17538,out))
})();
var state__15636__auto__ = (function (){var statearr_17536 = f__15635__auto__.call(null);
(statearr_17536[(6)] = c__15634__auto___17538);

return statearr_17536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___17538,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
