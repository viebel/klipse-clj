// Compiled by ClojureScript 1.10.516 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22806 = arguments.length;
switch (G__22806) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22807 = (function (f,blockable,meta22808){
this.f = f;
this.blockable = blockable;
this.meta22808 = meta22808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22809,meta22808__$1){
var self__ = this;
var _22809__$1 = this;
return (new cljs.core.async.t_cljs$core$async22807(self__.f,self__.blockable,meta22808__$1));
});

cljs.core.async.t_cljs$core$async22807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22809){
var self__ = this;
var _22809__$1 = this;
return self__.meta22808;
});

cljs.core.async.t_cljs$core$async22807.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22807.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22808","meta22808",-1129604796,null)], null);
});

cljs.core.async.t_cljs$core$async22807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22807";

cljs.core.async.t_cljs$core$async22807.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22807");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22807.
 */
cljs.core.async.__GT_t_cljs$core$async22807 = (function cljs$core$async$__GT_t_cljs$core$async22807(f__$1,blockable__$1,meta22808){
return (new cljs.core.async.t_cljs$core$async22807(f__$1,blockable__$1,meta22808));
});

}

return (new cljs.core.async.t_cljs$core$async22807(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22813 = arguments.length;
switch (G__22813) {
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
var G__22816 = arguments.length;
switch (G__22816) {
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
var G__22819 = arguments.length;
switch (G__22819) {
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
var val_22821 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22821);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22821,ret){
return (function (){
return fn1.call(null,val_22821);
});})(val_22821,ret))
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
var G__22823 = arguments.length;
switch (G__22823) {
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
var n__4607__auto___22825 = n;
var x_22826 = (0);
while(true){
if((x_22826 < n__4607__auto___22825)){
(a[x_22826] = (0));

var G__22827 = (x_22826 + (1));
x_22826 = G__22827;
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

var G__22828 = (i + (1));
i = G__22828;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22829 = (function (flag,meta22830){
this.flag = flag;
this.meta22830 = meta22830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22831,meta22830__$1){
var self__ = this;
var _22831__$1 = this;
return (new cljs.core.async.t_cljs$core$async22829(self__.flag,meta22830__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22831){
var self__ = this;
var _22831__$1 = this;
return self__.meta22830;
});})(flag))
;

cljs.core.async.t_cljs$core$async22829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22829.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22830","meta22830",-1225546065,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22829";

cljs.core.async.t_cljs$core$async22829.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22829");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22829.
 */
cljs.core.async.__GT_t_cljs$core$async22829 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22829(flag__$1,meta22830){
return (new cljs.core.async.t_cljs$core$async22829(flag__$1,meta22830));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22829(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22832 = (function (flag,cb,meta22833){
this.flag = flag;
this.cb = cb;
this.meta22833 = meta22833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22834,meta22833__$1){
var self__ = this;
var _22834__$1 = this;
return (new cljs.core.async.t_cljs$core$async22832(self__.flag,self__.cb,meta22833__$1));
});

cljs.core.async.t_cljs$core$async22832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22834){
var self__ = this;
var _22834__$1 = this;
return self__.meta22833;
});

cljs.core.async.t_cljs$core$async22832.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22833","meta22833",-2020526614,null)], null);
});

cljs.core.async.t_cljs$core$async22832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22832";

cljs.core.async.t_cljs$core$async22832.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22832");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22832.
 */
cljs.core.async.__GT_t_cljs$core$async22832 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22832(flag__$1,cb__$1,meta22833){
return (new cljs.core.async.t_cljs$core$async22832(flag__$1,cb__$1,meta22833));
});

}

return (new cljs.core.async.t_cljs$core$async22832(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22835_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22835_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22836_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22836_SHARP_,port], null));
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
var G__22837 = (i + (1));
i = G__22837;
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
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___22843 = arguments.length;
var i__4731__auto___22844 = (0);
while(true){
if((i__4731__auto___22844 < len__4730__auto___22843)){
args__4736__auto__.push((arguments[i__4731__auto___22844]));

var G__22845 = (i__4731__auto___22844 + (1));
i__4731__auto___22844 = G__22845;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22840){
var map__22841 = p__22840;
var map__22841__$1 = (((((!((map__22841 == null))))?(((((map__22841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22841):map__22841);
var opts = map__22841__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22838){
var G__22839 = cljs.core.first.call(null,seq22838);
var seq22838__$1 = cljs.core.next.call(null,seq22838);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22839,seq22838__$1);
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
var G__22847 = arguments.length;
switch (G__22847) {
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
var c__20882__auto___22893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___22893){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___22893){
return (function (state_22871){
var state_val_22872 = (state_22871[(1)]);
if((state_val_22872 === (7))){
var inst_22867 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
var statearr_22873_22894 = state_22871__$1;
(statearr_22873_22894[(2)] = inst_22867);

(statearr_22873_22894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (1))){
var state_22871__$1 = state_22871;
var statearr_22874_22895 = state_22871__$1;
(statearr_22874_22895[(2)] = null);

(statearr_22874_22895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (4))){
var inst_22850 = (state_22871[(7)]);
var inst_22850__$1 = (state_22871[(2)]);
var inst_22851 = (inst_22850__$1 == null);
var state_22871__$1 = (function (){var statearr_22875 = state_22871;
(statearr_22875[(7)] = inst_22850__$1);

return statearr_22875;
})();
if(cljs.core.truth_(inst_22851)){
var statearr_22876_22896 = state_22871__$1;
(statearr_22876_22896[(1)] = (5));

} else {
var statearr_22877_22897 = state_22871__$1;
(statearr_22877_22897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (13))){
var state_22871__$1 = state_22871;
var statearr_22878_22898 = state_22871__$1;
(statearr_22878_22898[(2)] = null);

(statearr_22878_22898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (6))){
var inst_22850 = (state_22871[(7)]);
var state_22871__$1 = state_22871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22871__$1,(11),to,inst_22850);
} else {
if((state_val_22872 === (3))){
var inst_22869 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22871__$1,inst_22869);
} else {
if((state_val_22872 === (12))){
var state_22871__$1 = state_22871;
var statearr_22879_22899 = state_22871__$1;
(statearr_22879_22899[(2)] = null);

(statearr_22879_22899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (2))){
var state_22871__$1 = state_22871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22871__$1,(4),from);
} else {
if((state_val_22872 === (11))){
var inst_22860 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
if(cljs.core.truth_(inst_22860)){
var statearr_22880_22900 = state_22871__$1;
(statearr_22880_22900[(1)] = (12));

} else {
var statearr_22881_22901 = state_22871__$1;
(statearr_22881_22901[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (9))){
var state_22871__$1 = state_22871;
var statearr_22882_22902 = state_22871__$1;
(statearr_22882_22902[(2)] = null);

(statearr_22882_22902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (5))){
var state_22871__$1 = state_22871;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22883_22903 = state_22871__$1;
(statearr_22883_22903[(1)] = (8));

} else {
var statearr_22884_22904 = state_22871__$1;
(statearr_22884_22904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (14))){
var inst_22865 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
var statearr_22885_22905 = state_22871__$1;
(statearr_22885_22905[(2)] = inst_22865);

(statearr_22885_22905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (10))){
var inst_22857 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
var statearr_22886_22906 = state_22871__$1;
(statearr_22886_22906[(2)] = inst_22857);

(statearr_22886_22906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (8))){
var inst_22854 = cljs.core.async.close_BANG_.call(null,to);
var state_22871__$1 = state_22871;
var statearr_22887_22907 = state_22871__$1;
(statearr_22887_22907[(2)] = inst_22854);

(statearr_22887_22907[(1)] = (10));


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
});})(c__20882__auto___22893))
;
return ((function (switch__20715__auto__,c__20882__auto___22893){
return (function() {
var cljs$core$async$state_machine__20716__auto__ = null;
var cljs$core$async$state_machine__20716__auto____0 = (function (){
var statearr_22888 = [null,null,null,null,null,null,null,null];
(statearr_22888[(0)] = cljs$core$async$state_machine__20716__auto__);

(statearr_22888[(1)] = (1));

return statearr_22888;
});
var cljs$core$async$state_machine__20716__auto____1 = (function (state_22871){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_22871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e22889){if((e22889 instanceof Object)){
var ex__20719__auto__ = e22889;
var statearr_22890_22908 = state_22871;
(statearr_22890_22908[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22909 = state_22871;
state_22871 = G__22909;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$state_machine__20716__auto__ = function(state_22871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20716__auto____1.call(this,state_22871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20716__auto____0;
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20716__auto____1;
return cljs$core$async$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___22893))
})();
var state__20884__auto__ = (function (){var statearr_22891 = f__20883__auto__.call(null);
(statearr_22891[(6)] = c__20882__auto___22893);

return statearr_22891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___22893))
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
return (function (p__22910){
var vec__22911 = p__22910;
var v = cljs.core.nth.call(null,vec__22911,(0),null);
var p = cljs.core.nth.call(null,vec__22911,(1),null);
var job = vec__22911;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20882__auto___23082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___23082,res,vec__22911,v,p,job,jobs,results){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___23082,res,vec__22911,v,p,job,jobs,results){
return (function (state_22918){
var state_val_22919 = (state_22918[(1)]);
if((state_val_22919 === (1))){
var state_22918__$1 = state_22918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22918__$1,(2),res,v);
} else {
if((state_val_22919 === (2))){
var inst_22915 = (state_22918[(2)]);
var inst_22916 = cljs.core.async.close_BANG_.call(null,res);
var state_22918__$1 = (function (){var statearr_22920 = state_22918;
(statearr_22920[(7)] = inst_22915);

return statearr_22920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22918__$1,inst_22916);
} else {
return null;
}
}
});})(c__20882__auto___23082,res,vec__22911,v,p,job,jobs,results))
;
return ((function (switch__20715__auto__,c__20882__auto___23082,res,vec__22911,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0 = (function (){
var statearr_22921 = [null,null,null,null,null,null,null,null];
(statearr_22921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__);

(statearr_22921[(1)] = (1));

return statearr_22921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1 = (function (state_22918){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_22918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e22922){if((e22922 instanceof Object)){
var ex__20719__auto__ = e22922;
var statearr_22923_23083 = state_22918;
(statearr_22923_23083[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23084 = state_22918;
state_22918 = G__23084;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__ = function(state_22918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1.call(this,state_22918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___23082,res,vec__22911,v,p,job,jobs,results))
})();
var state__20884__auto__ = (function (){var statearr_22924 = f__20883__auto__.call(null);
(statearr_22924[(6)] = c__20882__auto___23082);

return statearr_22924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___23082,res,vec__22911,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22925){
var vec__22926 = p__22925;
var v = cljs.core.nth.call(null,vec__22926,(0),null);
var p = cljs.core.nth.call(null,vec__22926,(1),null);
var job = vec__22926;
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
var n__4607__auto___23085 = n;
var __23086 = (0);
while(true){
if((__23086 < n__4607__auto___23085)){
var G__22929_23087 = type;
var G__22929_23088__$1 = (((G__22929_23087 instanceof cljs.core.Keyword))?G__22929_23087.fqn:null);
switch (G__22929_23088__$1) {
case "compute":
var c__20882__auto___23090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23086,c__20882__auto___23090,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (__23086,c__20882__auto___23090,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async){
return (function (state_22942){
var state_val_22943 = (state_22942[(1)]);
if((state_val_22943 === (1))){
var state_22942__$1 = state_22942;
var statearr_22944_23091 = state_22942__$1;
(statearr_22944_23091[(2)] = null);

(statearr_22944_23091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (2))){
var state_22942__$1 = state_22942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22942__$1,(4),jobs);
} else {
if((state_val_22943 === (3))){
var inst_22940 = (state_22942[(2)]);
var state_22942__$1 = state_22942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22942__$1,inst_22940);
} else {
if((state_val_22943 === (4))){
var inst_22932 = (state_22942[(2)]);
var inst_22933 = process.call(null,inst_22932);
var state_22942__$1 = state_22942;
if(cljs.core.truth_(inst_22933)){
var statearr_22945_23092 = state_22942__$1;
(statearr_22945_23092[(1)] = (5));

} else {
var statearr_22946_23093 = state_22942__$1;
(statearr_22946_23093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (5))){
var state_22942__$1 = state_22942;
var statearr_22947_23094 = state_22942__$1;
(statearr_22947_23094[(2)] = null);

(statearr_22947_23094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (6))){
var state_22942__$1 = state_22942;
var statearr_22948_23095 = state_22942__$1;
(statearr_22948_23095[(2)] = null);

(statearr_22948_23095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (7))){
var inst_22938 = (state_22942[(2)]);
var state_22942__$1 = state_22942;
var statearr_22949_23096 = state_22942__$1;
(statearr_22949_23096[(2)] = inst_22938);

(statearr_22949_23096[(1)] = (3));


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
});})(__23086,c__20882__auto___23090,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async))
;
return ((function (__23086,switch__20715__auto__,c__20882__auto___23090,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0 = (function (){
var statearr_22950 = [null,null,null,null,null,null,null];
(statearr_22950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__);

(statearr_22950[(1)] = (1));

return statearr_22950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1 = (function (state_22942){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_22942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e22951){if((e22951 instanceof Object)){
var ex__20719__auto__ = e22951;
var statearr_22952_23097 = state_22942;
(statearr_22952_23097[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23098 = state_22942;
state_22942 = G__23098;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__ = function(state_22942){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1.call(this,state_22942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__;
})()
;})(__23086,switch__20715__auto__,c__20882__auto___23090,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async))
})();
var state__20884__auto__ = (function (){var statearr_22953 = f__20883__auto__.call(null);
(statearr_22953[(6)] = c__20882__auto___23090);

return statearr_22953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(__23086,c__20882__auto___23090,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async))
);


break;
case "async":
var c__20882__auto___23099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23086,c__20882__auto___23099,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (__23086,c__20882__auto___23099,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async){
return (function (state_22966){
var state_val_22967 = (state_22966[(1)]);
if((state_val_22967 === (1))){
var state_22966__$1 = state_22966;
var statearr_22968_23100 = state_22966__$1;
(statearr_22968_23100[(2)] = null);

(statearr_22968_23100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22967 === (2))){
var state_22966__$1 = state_22966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22966__$1,(4),jobs);
} else {
if((state_val_22967 === (3))){
var inst_22964 = (state_22966[(2)]);
var state_22966__$1 = state_22966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22966__$1,inst_22964);
} else {
if((state_val_22967 === (4))){
var inst_22956 = (state_22966[(2)]);
var inst_22957 = async.call(null,inst_22956);
var state_22966__$1 = state_22966;
if(cljs.core.truth_(inst_22957)){
var statearr_22969_23101 = state_22966__$1;
(statearr_22969_23101[(1)] = (5));

} else {
var statearr_22970_23102 = state_22966__$1;
(statearr_22970_23102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22967 === (5))){
var state_22966__$1 = state_22966;
var statearr_22971_23103 = state_22966__$1;
(statearr_22971_23103[(2)] = null);

(statearr_22971_23103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22967 === (6))){
var state_22966__$1 = state_22966;
var statearr_22972_23104 = state_22966__$1;
(statearr_22972_23104[(2)] = null);

(statearr_22972_23104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22967 === (7))){
var inst_22962 = (state_22966[(2)]);
var state_22966__$1 = state_22966;
var statearr_22973_23105 = state_22966__$1;
(statearr_22973_23105[(2)] = inst_22962);

(statearr_22973_23105[(1)] = (3));


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
});})(__23086,c__20882__auto___23099,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async))
;
return ((function (__23086,switch__20715__auto__,c__20882__auto___23099,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0 = (function (){
var statearr_22974 = [null,null,null,null,null,null,null];
(statearr_22974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__);

(statearr_22974[(1)] = (1));

return statearr_22974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1 = (function (state_22966){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_22966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e22975){if((e22975 instanceof Object)){
var ex__20719__auto__ = e22975;
var statearr_22976_23106 = state_22966;
(statearr_22976_23106[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23107 = state_22966;
state_22966 = G__23107;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__ = function(state_22966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1.call(this,state_22966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__;
})()
;})(__23086,switch__20715__auto__,c__20882__auto___23099,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async))
})();
var state__20884__auto__ = (function (){var statearr_22977 = f__20883__auto__.call(null);
(statearr_22977[(6)] = c__20882__auto___23099);

return statearr_22977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(__23086,c__20882__auto___23099,G__22929_23087,G__22929_23088__$1,n__4607__auto___23085,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22929_23088__$1)].join('')));

}

var G__23108 = (__23086 + (1));
__23086 = G__23108;
continue;
} else {
}
break;
}

var c__20882__auto___23109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___23109,jobs,results,process,async){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___23109,jobs,results,process,async){
return (function (state_22999){
var state_val_23000 = (state_22999[(1)]);
if((state_val_23000 === (7))){
var inst_22995 = (state_22999[(2)]);
var state_22999__$1 = state_22999;
var statearr_23001_23110 = state_22999__$1;
(statearr_23001_23110[(2)] = inst_22995);

(statearr_23001_23110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (1))){
var state_22999__$1 = state_22999;
var statearr_23002_23111 = state_22999__$1;
(statearr_23002_23111[(2)] = null);

(statearr_23002_23111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (4))){
var inst_22980 = (state_22999[(7)]);
var inst_22980__$1 = (state_22999[(2)]);
var inst_22981 = (inst_22980__$1 == null);
var state_22999__$1 = (function (){var statearr_23003 = state_22999;
(statearr_23003[(7)] = inst_22980__$1);

return statearr_23003;
})();
if(cljs.core.truth_(inst_22981)){
var statearr_23004_23112 = state_22999__$1;
(statearr_23004_23112[(1)] = (5));

} else {
var statearr_23005_23113 = state_22999__$1;
(statearr_23005_23113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (6))){
var inst_22980 = (state_22999[(7)]);
var inst_22985 = (state_22999[(8)]);
var inst_22985__$1 = cljs.core.async.chan.call(null,(1));
var inst_22986 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22987 = [inst_22980,inst_22985__$1];
var inst_22988 = (new cljs.core.PersistentVector(null,2,(5),inst_22986,inst_22987,null));
var state_22999__$1 = (function (){var statearr_23006 = state_22999;
(statearr_23006[(8)] = inst_22985__$1);

return statearr_23006;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22999__$1,(8),jobs,inst_22988);
} else {
if((state_val_23000 === (3))){
var inst_22997 = (state_22999[(2)]);
var state_22999__$1 = state_22999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22999__$1,inst_22997);
} else {
if((state_val_23000 === (2))){
var state_22999__$1 = state_22999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22999__$1,(4),from);
} else {
if((state_val_23000 === (9))){
var inst_22992 = (state_22999[(2)]);
var state_22999__$1 = (function (){var statearr_23007 = state_22999;
(statearr_23007[(9)] = inst_22992);

return statearr_23007;
})();
var statearr_23008_23114 = state_22999__$1;
(statearr_23008_23114[(2)] = null);

(statearr_23008_23114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (5))){
var inst_22983 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22999__$1 = state_22999;
var statearr_23009_23115 = state_22999__$1;
(statearr_23009_23115[(2)] = inst_22983);

(statearr_23009_23115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (8))){
var inst_22985 = (state_22999[(8)]);
var inst_22990 = (state_22999[(2)]);
var state_22999__$1 = (function (){var statearr_23010 = state_22999;
(statearr_23010[(10)] = inst_22990);

return statearr_23010;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22999__$1,(9),results,inst_22985);
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
});})(c__20882__auto___23109,jobs,results,process,async))
;
return ((function (switch__20715__auto__,c__20882__auto___23109,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0 = (function (){
var statearr_23011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__);

(statearr_23011[(1)] = (1));

return statearr_23011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1 = (function (state_22999){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_22999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e23012){if((e23012 instanceof Object)){
var ex__20719__auto__ = e23012;
var statearr_23013_23116 = state_22999;
(statearr_23013_23116[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23117 = state_22999;
state_22999 = G__23117;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__ = function(state_22999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1.call(this,state_22999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___23109,jobs,results,process,async))
})();
var state__20884__auto__ = (function (){var statearr_23014 = f__20883__auto__.call(null);
(statearr_23014[(6)] = c__20882__auto___23109);

return statearr_23014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___23109,jobs,results,process,async))
);


var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__,jobs,results,process,async){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__,jobs,results,process,async){
return (function (state_23052){
var state_val_23053 = (state_23052[(1)]);
if((state_val_23053 === (7))){
var inst_23048 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23054_23118 = state_23052__$1;
(statearr_23054_23118[(2)] = inst_23048);

(statearr_23054_23118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (20))){
var state_23052__$1 = state_23052;
var statearr_23055_23119 = state_23052__$1;
(statearr_23055_23119[(2)] = null);

(statearr_23055_23119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (1))){
var state_23052__$1 = state_23052;
var statearr_23056_23120 = state_23052__$1;
(statearr_23056_23120[(2)] = null);

(statearr_23056_23120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (4))){
var inst_23017 = (state_23052[(7)]);
var inst_23017__$1 = (state_23052[(2)]);
var inst_23018 = (inst_23017__$1 == null);
var state_23052__$1 = (function (){var statearr_23057 = state_23052;
(statearr_23057[(7)] = inst_23017__$1);

return statearr_23057;
})();
if(cljs.core.truth_(inst_23018)){
var statearr_23058_23121 = state_23052__$1;
(statearr_23058_23121[(1)] = (5));

} else {
var statearr_23059_23122 = state_23052__$1;
(statearr_23059_23122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (15))){
var inst_23030 = (state_23052[(8)]);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23052__$1,(18),to,inst_23030);
} else {
if((state_val_23053 === (21))){
var inst_23043 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23060_23123 = state_23052__$1;
(statearr_23060_23123[(2)] = inst_23043);

(statearr_23060_23123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (13))){
var inst_23045 = (state_23052[(2)]);
var state_23052__$1 = (function (){var statearr_23061 = state_23052;
(statearr_23061[(9)] = inst_23045);

return statearr_23061;
})();
var statearr_23062_23124 = state_23052__$1;
(statearr_23062_23124[(2)] = null);

(statearr_23062_23124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (6))){
var inst_23017 = (state_23052[(7)]);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(11),inst_23017);
} else {
if((state_val_23053 === (17))){
var inst_23038 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
if(cljs.core.truth_(inst_23038)){
var statearr_23063_23125 = state_23052__$1;
(statearr_23063_23125[(1)] = (19));

} else {
var statearr_23064_23126 = state_23052__$1;
(statearr_23064_23126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (3))){
var inst_23050 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23052__$1,inst_23050);
} else {
if((state_val_23053 === (12))){
var inst_23027 = (state_23052[(10)]);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(14),inst_23027);
} else {
if((state_val_23053 === (2))){
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(4),results);
} else {
if((state_val_23053 === (19))){
var state_23052__$1 = state_23052;
var statearr_23065_23127 = state_23052__$1;
(statearr_23065_23127[(2)] = null);

(statearr_23065_23127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (11))){
var inst_23027 = (state_23052[(2)]);
var state_23052__$1 = (function (){var statearr_23066 = state_23052;
(statearr_23066[(10)] = inst_23027);

return statearr_23066;
})();
var statearr_23067_23128 = state_23052__$1;
(statearr_23067_23128[(2)] = null);

(statearr_23067_23128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (9))){
var state_23052__$1 = state_23052;
var statearr_23068_23129 = state_23052__$1;
(statearr_23068_23129[(2)] = null);

(statearr_23068_23129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (5))){
var state_23052__$1 = state_23052;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23069_23130 = state_23052__$1;
(statearr_23069_23130[(1)] = (8));

} else {
var statearr_23070_23131 = state_23052__$1;
(statearr_23070_23131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (14))){
var inst_23030 = (state_23052[(8)]);
var inst_23032 = (state_23052[(11)]);
var inst_23030__$1 = (state_23052[(2)]);
var inst_23031 = (inst_23030__$1 == null);
var inst_23032__$1 = cljs.core.not.call(null,inst_23031);
var state_23052__$1 = (function (){var statearr_23071 = state_23052;
(statearr_23071[(8)] = inst_23030__$1);

(statearr_23071[(11)] = inst_23032__$1);

return statearr_23071;
})();
if(inst_23032__$1){
var statearr_23072_23132 = state_23052__$1;
(statearr_23072_23132[(1)] = (15));

} else {
var statearr_23073_23133 = state_23052__$1;
(statearr_23073_23133[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (16))){
var inst_23032 = (state_23052[(11)]);
var state_23052__$1 = state_23052;
var statearr_23074_23134 = state_23052__$1;
(statearr_23074_23134[(2)] = inst_23032);

(statearr_23074_23134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (10))){
var inst_23024 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23075_23135 = state_23052__$1;
(statearr_23075_23135[(2)] = inst_23024);

(statearr_23075_23135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (18))){
var inst_23035 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23076_23136 = state_23052__$1;
(statearr_23076_23136[(2)] = inst_23035);

(statearr_23076_23136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (8))){
var inst_23021 = cljs.core.async.close_BANG_.call(null,to);
var state_23052__$1 = state_23052;
var statearr_23077_23137 = state_23052__$1;
(statearr_23077_23137[(2)] = inst_23021);

(statearr_23077_23137[(1)] = (10));


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
});})(c__20882__auto__,jobs,results,process,async))
;
return ((function (switch__20715__auto__,c__20882__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0 = (function (){
var statearr_23078 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__);

(statearr_23078[(1)] = (1));

return statearr_23078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1 = (function (state_23052){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_23052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e23079){if((e23079 instanceof Object)){
var ex__20719__auto__ = e23079;
var statearr_23080_23138 = state_23052;
(statearr_23080_23138[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23139 = state_23052;
state_23052 = G__23139;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__ = function(state_23052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1.call(this,state_23052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__,jobs,results,process,async))
})();
var state__20884__auto__ = (function (){var statearr_23081 = f__20883__auto__.call(null);
(statearr_23081[(6)] = c__20882__auto__);

return statearr_23081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__,jobs,results,process,async))
);

return c__20882__auto__;
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
var G__23141 = arguments.length;
switch (G__23141) {
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
var G__23144 = arguments.length;
switch (G__23144) {
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
var G__23147 = arguments.length;
switch (G__23147) {
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
var c__20882__auto___23196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___23196,tc,fc){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___23196,tc,fc){
return (function (state_23173){
var state_val_23174 = (state_23173[(1)]);
if((state_val_23174 === (7))){
var inst_23169 = (state_23173[(2)]);
var state_23173__$1 = state_23173;
var statearr_23175_23197 = state_23173__$1;
(statearr_23175_23197[(2)] = inst_23169);

(statearr_23175_23197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23174 === (1))){
var state_23173__$1 = state_23173;
var statearr_23176_23198 = state_23173__$1;
(statearr_23176_23198[(2)] = null);

(statearr_23176_23198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23174 === (4))){
var inst_23150 = (state_23173[(7)]);
var inst_23150__$1 = (state_23173[(2)]);
var inst_23151 = (inst_23150__$1 == null);
var state_23173__$1 = (function (){var statearr_23177 = state_23173;
(statearr_23177[(7)] = inst_23150__$1);

return statearr_23177;
})();
if(cljs.core.truth_(inst_23151)){
var statearr_23178_23199 = state_23173__$1;
(statearr_23178_23199[(1)] = (5));

} else {
var statearr_23179_23200 = state_23173__$1;
(statearr_23179_23200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23174 === (13))){
var state_23173__$1 = state_23173;
var statearr_23180_23201 = state_23173__$1;
(statearr_23180_23201[(2)] = null);

(statearr_23180_23201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23174 === (6))){
var inst_23150 = (state_23173[(7)]);
var inst_23156 = p.call(null,inst_23150);
var state_23173__$1 = state_23173;
if(cljs.core.truth_(inst_23156)){
var statearr_23181_23202 = state_23173__$1;
(statearr_23181_23202[(1)] = (9));

} else {
var statearr_23182_23203 = state_23173__$1;
(statearr_23182_23203[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23174 === (3))){
var inst_23171 = (state_23173[(2)]);
var state_23173__$1 = state_23173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23173__$1,inst_23171);
} else {
if((state_val_23174 === (12))){
var state_23173__$1 = state_23173;
var statearr_23183_23204 = state_23173__$1;
(statearr_23183_23204[(2)] = null);

(statearr_23183_23204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23174 === (2))){
var state_23173__$1 = state_23173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23173__$1,(4),ch);
} else {
if((state_val_23174 === (11))){
var inst_23150 = (state_23173[(7)]);
var inst_23160 = (state_23173[(2)]);
var state_23173__$1 = state_23173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23173__$1,(8),inst_23160,inst_23150);
} else {
if((state_val_23174 === (9))){
var state_23173__$1 = state_23173;
var statearr_23184_23205 = state_23173__$1;
(statearr_23184_23205[(2)] = tc);

(statearr_23184_23205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23174 === (5))){
var inst_23153 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23154 = cljs.core.async.close_BANG_.call(null,fc);
var state_23173__$1 = (function (){var statearr_23185 = state_23173;
(statearr_23185[(8)] = inst_23153);

return statearr_23185;
})();
var statearr_23186_23206 = state_23173__$1;
(statearr_23186_23206[(2)] = inst_23154);

(statearr_23186_23206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23174 === (14))){
var inst_23167 = (state_23173[(2)]);
var state_23173__$1 = state_23173;
var statearr_23187_23207 = state_23173__$1;
(statearr_23187_23207[(2)] = inst_23167);

(statearr_23187_23207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23174 === (10))){
var state_23173__$1 = state_23173;
var statearr_23188_23208 = state_23173__$1;
(statearr_23188_23208[(2)] = fc);

(statearr_23188_23208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23174 === (8))){
var inst_23162 = (state_23173[(2)]);
var state_23173__$1 = state_23173;
if(cljs.core.truth_(inst_23162)){
var statearr_23189_23209 = state_23173__$1;
(statearr_23189_23209[(1)] = (12));

} else {
var statearr_23190_23210 = state_23173__$1;
(statearr_23190_23210[(1)] = (13));

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
});})(c__20882__auto___23196,tc,fc))
;
return ((function (switch__20715__auto__,c__20882__auto___23196,tc,fc){
return (function() {
var cljs$core$async$state_machine__20716__auto__ = null;
var cljs$core$async$state_machine__20716__auto____0 = (function (){
var statearr_23191 = [null,null,null,null,null,null,null,null,null];
(statearr_23191[(0)] = cljs$core$async$state_machine__20716__auto__);

(statearr_23191[(1)] = (1));

return statearr_23191;
});
var cljs$core$async$state_machine__20716__auto____1 = (function (state_23173){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_23173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e23192){if((e23192 instanceof Object)){
var ex__20719__auto__ = e23192;
var statearr_23193_23211 = state_23173;
(statearr_23193_23211[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23212 = state_23173;
state_23173 = G__23212;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$state_machine__20716__auto__ = function(state_23173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20716__auto____1.call(this,state_23173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20716__auto____0;
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20716__auto____1;
return cljs$core$async$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___23196,tc,fc))
})();
var state__20884__auto__ = (function (){var statearr_23194 = f__20883__auto__.call(null);
(statearr_23194[(6)] = c__20882__auto___23196);

return statearr_23194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___23196,tc,fc))
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
var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__){
return (function (state_23233){
var state_val_23234 = (state_23233[(1)]);
if((state_val_23234 === (7))){
var inst_23229 = (state_23233[(2)]);
var state_23233__$1 = state_23233;
var statearr_23235_23253 = state_23233__$1;
(statearr_23235_23253[(2)] = inst_23229);

(statearr_23235_23253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (1))){
var inst_23213 = init;
var state_23233__$1 = (function (){var statearr_23236 = state_23233;
(statearr_23236[(7)] = inst_23213);

return statearr_23236;
})();
var statearr_23237_23254 = state_23233__$1;
(statearr_23237_23254[(2)] = null);

(statearr_23237_23254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (4))){
var inst_23216 = (state_23233[(8)]);
var inst_23216__$1 = (state_23233[(2)]);
var inst_23217 = (inst_23216__$1 == null);
var state_23233__$1 = (function (){var statearr_23238 = state_23233;
(statearr_23238[(8)] = inst_23216__$1);

return statearr_23238;
})();
if(cljs.core.truth_(inst_23217)){
var statearr_23239_23255 = state_23233__$1;
(statearr_23239_23255[(1)] = (5));

} else {
var statearr_23240_23256 = state_23233__$1;
(statearr_23240_23256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (6))){
var inst_23216 = (state_23233[(8)]);
var inst_23220 = (state_23233[(9)]);
var inst_23213 = (state_23233[(7)]);
var inst_23220__$1 = f.call(null,inst_23213,inst_23216);
var inst_23221 = cljs.core.reduced_QMARK_.call(null,inst_23220__$1);
var state_23233__$1 = (function (){var statearr_23241 = state_23233;
(statearr_23241[(9)] = inst_23220__$1);

return statearr_23241;
})();
if(inst_23221){
var statearr_23242_23257 = state_23233__$1;
(statearr_23242_23257[(1)] = (8));

} else {
var statearr_23243_23258 = state_23233__$1;
(statearr_23243_23258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (3))){
var inst_23231 = (state_23233[(2)]);
var state_23233__$1 = state_23233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23233__$1,inst_23231);
} else {
if((state_val_23234 === (2))){
var state_23233__$1 = state_23233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23233__$1,(4),ch);
} else {
if((state_val_23234 === (9))){
var inst_23220 = (state_23233[(9)]);
var inst_23213 = inst_23220;
var state_23233__$1 = (function (){var statearr_23244 = state_23233;
(statearr_23244[(7)] = inst_23213);

return statearr_23244;
})();
var statearr_23245_23259 = state_23233__$1;
(statearr_23245_23259[(2)] = null);

(statearr_23245_23259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (5))){
var inst_23213 = (state_23233[(7)]);
var state_23233__$1 = state_23233;
var statearr_23246_23260 = state_23233__$1;
(statearr_23246_23260[(2)] = inst_23213);

(statearr_23246_23260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (10))){
var inst_23227 = (state_23233[(2)]);
var state_23233__$1 = state_23233;
var statearr_23247_23261 = state_23233__$1;
(statearr_23247_23261[(2)] = inst_23227);

(statearr_23247_23261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23234 === (8))){
var inst_23220 = (state_23233[(9)]);
var inst_23223 = cljs.core.deref.call(null,inst_23220);
var state_23233__$1 = state_23233;
var statearr_23248_23262 = state_23233__$1;
(statearr_23248_23262[(2)] = inst_23223);

(statearr_23248_23262[(1)] = (10));


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
});})(c__20882__auto__))
;
return ((function (switch__20715__auto__,c__20882__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20716__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20716__auto____0 = (function (){
var statearr_23249 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23249[(0)] = cljs$core$async$reduce_$_state_machine__20716__auto__);

(statearr_23249[(1)] = (1));

return statearr_23249;
});
var cljs$core$async$reduce_$_state_machine__20716__auto____1 = (function (state_23233){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_23233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e23250){if((e23250 instanceof Object)){
var ex__20719__auto__ = e23250;
var statearr_23251_23263 = state_23233;
(statearr_23251_23263[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23264 = state_23233;
state_23233 = G__23264;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20716__auto__ = function(state_23233){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20716__auto____1.call(this,state_23233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20716__auto____0;
cljs$core$async$reduce_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20716__auto____1;
return cljs$core$async$reduce_$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__))
})();
var state__20884__auto__ = (function (){var statearr_23252 = f__20883__auto__.call(null);
(statearr_23252[(6)] = c__20882__auto__);

return statearr_23252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__))
);

return c__20882__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__,f__$1){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__,f__$1){
return (function (state_23270){
var state_val_23271 = (state_23270[(1)]);
if((state_val_23271 === (1))){
var inst_23265 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23270__$1 = state_23270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23270__$1,(2),inst_23265);
} else {
if((state_val_23271 === (2))){
var inst_23267 = (state_23270[(2)]);
var inst_23268 = f__$1.call(null,inst_23267);
var state_23270__$1 = state_23270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23270__$1,inst_23268);
} else {
return null;
}
}
});})(c__20882__auto__,f__$1))
;
return ((function (switch__20715__auto__,c__20882__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__20716__auto__ = null;
var cljs$core$async$transduce_$_state_machine__20716__auto____0 = (function (){
var statearr_23272 = [null,null,null,null,null,null,null];
(statearr_23272[(0)] = cljs$core$async$transduce_$_state_machine__20716__auto__);

(statearr_23272[(1)] = (1));

return statearr_23272;
});
var cljs$core$async$transduce_$_state_machine__20716__auto____1 = (function (state_23270){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_23270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e23273){if((e23273 instanceof Object)){
var ex__20719__auto__ = e23273;
var statearr_23274_23276 = state_23270;
(statearr_23274_23276[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23277 = state_23270;
state_23270 = G__23277;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__20716__auto__ = function(state_23270){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__20716__auto____1.call(this,state_23270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__20716__auto____0;
cljs$core$async$transduce_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__20716__auto____1;
return cljs$core$async$transduce_$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__,f__$1))
})();
var state__20884__auto__ = (function (){var statearr_23275 = f__20883__auto__.call(null);
(statearr_23275[(6)] = c__20882__auto__);

return statearr_23275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__,f__$1))
);

return c__20882__auto__;
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
var G__23279 = arguments.length;
switch (G__23279) {
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
var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__){
return (function (state_23304){
var state_val_23305 = (state_23304[(1)]);
if((state_val_23305 === (7))){
var inst_23286 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23306_23327 = state_23304__$1;
(statearr_23306_23327[(2)] = inst_23286);

(statearr_23306_23327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (1))){
var inst_23280 = cljs.core.seq.call(null,coll);
var inst_23281 = inst_23280;
var state_23304__$1 = (function (){var statearr_23307 = state_23304;
(statearr_23307[(7)] = inst_23281);

return statearr_23307;
})();
var statearr_23308_23328 = state_23304__$1;
(statearr_23308_23328[(2)] = null);

(statearr_23308_23328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (4))){
var inst_23281 = (state_23304[(7)]);
var inst_23284 = cljs.core.first.call(null,inst_23281);
var state_23304__$1 = state_23304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23304__$1,(7),ch,inst_23284);
} else {
if((state_val_23305 === (13))){
var inst_23298 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23309_23329 = state_23304__$1;
(statearr_23309_23329[(2)] = inst_23298);

(statearr_23309_23329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (6))){
var inst_23289 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
if(cljs.core.truth_(inst_23289)){
var statearr_23310_23330 = state_23304__$1;
(statearr_23310_23330[(1)] = (8));

} else {
var statearr_23311_23331 = state_23304__$1;
(statearr_23311_23331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (3))){
var inst_23302 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23304__$1,inst_23302);
} else {
if((state_val_23305 === (12))){
var state_23304__$1 = state_23304;
var statearr_23312_23332 = state_23304__$1;
(statearr_23312_23332[(2)] = null);

(statearr_23312_23332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (2))){
var inst_23281 = (state_23304[(7)]);
var state_23304__$1 = state_23304;
if(cljs.core.truth_(inst_23281)){
var statearr_23313_23333 = state_23304__$1;
(statearr_23313_23333[(1)] = (4));

} else {
var statearr_23314_23334 = state_23304__$1;
(statearr_23314_23334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (11))){
var inst_23295 = cljs.core.async.close_BANG_.call(null,ch);
var state_23304__$1 = state_23304;
var statearr_23315_23335 = state_23304__$1;
(statearr_23315_23335[(2)] = inst_23295);

(statearr_23315_23335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (9))){
var state_23304__$1 = state_23304;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23316_23336 = state_23304__$1;
(statearr_23316_23336[(1)] = (11));

} else {
var statearr_23317_23337 = state_23304__$1;
(statearr_23317_23337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (5))){
var inst_23281 = (state_23304[(7)]);
var state_23304__$1 = state_23304;
var statearr_23318_23338 = state_23304__$1;
(statearr_23318_23338[(2)] = inst_23281);

(statearr_23318_23338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (10))){
var inst_23300 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23319_23339 = state_23304__$1;
(statearr_23319_23339[(2)] = inst_23300);

(statearr_23319_23339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (8))){
var inst_23281 = (state_23304[(7)]);
var inst_23291 = cljs.core.next.call(null,inst_23281);
var inst_23281__$1 = inst_23291;
var state_23304__$1 = (function (){var statearr_23320 = state_23304;
(statearr_23320[(7)] = inst_23281__$1);

return statearr_23320;
})();
var statearr_23321_23340 = state_23304__$1;
(statearr_23321_23340[(2)] = null);

(statearr_23321_23340[(1)] = (2));


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
});})(c__20882__auto__))
;
return ((function (switch__20715__auto__,c__20882__auto__){
return (function() {
var cljs$core$async$state_machine__20716__auto__ = null;
var cljs$core$async$state_machine__20716__auto____0 = (function (){
var statearr_23322 = [null,null,null,null,null,null,null,null];
(statearr_23322[(0)] = cljs$core$async$state_machine__20716__auto__);

(statearr_23322[(1)] = (1));

return statearr_23322;
});
var cljs$core$async$state_machine__20716__auto____1 = (function (state_23304){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_23304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e23323){if((e23323 instanceof Object)){
var ex__20719__auto__ = e23323;
var statearr_23324_23341 = state_23304;
(statearr_23324_23341[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23342 = state_23304;
state_23304 = G__23342;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$state_machine__20716__auto__ = function(state_23304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20716__auto____1.call(this,state_23304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20716__auto____0;
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20716__auto____1;
return cljs$core$async$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__))
})();
var state__20884__auto__ = (function (){var statearr_23325 = f__20883__auto__.call(null);
(statearr_23325[(6)] = c__20882__auto__);

return statearr_23325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__))
);

return c__20882__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23343 = (function (ch,cs,meta23344){
this.ch = ch;
this.cs = cs;
this.meta23344 = meta23344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23345,meta23344__$1){
var self__ = this;
var _23345__$1 = this;
return (new cljs.core.async.t_cljs$core$async23343(self__.ch,self__.cs,meta23344__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23345){
var self__ = this;
var _23345__$1 = this;
return self__.meta23344;
});})(cs))
;

cljs.core.async.t_cljs$core$async23343.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23343.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23343.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23343.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23343.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23343.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23343.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23344","meta23344",-1851193065,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23343";

cljs.core.async.t_cljs$core$async23343.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23343");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23343.
 */
cljs.core.async.__GT_t_cljs$core$async23343 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23343(ch__$1,cs__$1,meta23344){
return (new cljs.core.async.t_cljs$core$async23343(ch__$1,cs__$1,meta23344));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23343(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20882__auto___23565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___23565,cs,m,dchan,dctr,done){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___23565,cs,m,dchan,dctr,done){
return (function (state_23480){
var state_val_23481 = (state_23480[(1)]);
if((state_val_23481 === (7))){
var inst_23476 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23482_23566 = state_23480__$1;
(statearr_23482_23566[(2)] = inst_23476);

(statearr_23482_23566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (20))){
var inst_23379 = (state_23480[(7)]);
var inst_23391 = cljs.core.first.call(null,inst_23379);
var inst_23392 = cljs.core.nth.call(null,inst_23391,(0),null);
var inst_23393 = cljs.core.nth.call(null,inst_23391,(1),null);
var state_23480__$1 = (function (){var statearr_23483 = state_23480;
(statearr_23483[(8)] = inst_23392);

return statearr_23483;
})();
if(cljs.core.truth_(inst_23393)){
var statearr_23484_23567 = state_23480__$1;
(statearr_23484_23567[(1)] = (22));

} else {
var statearr_23485_23568 = state_23480__$1;
(statearr_23485_23568[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (27))){
var inst_23348 = (state_23480[(9)]);
var inst_23423 = (state_23480[(10)]);
var inst_23428 = (state_23480[(11)]);
var inst_23421 = (state_23480[(12)]);
var inst_23428__$1 = cljs.core._nth.call(null,inst_23421,inst_23423);
var inst_23429 = cljs.core.async.put_BANG_.call(null,inst_23428__$1,inst_23348,done);
var state_23480__$1 = (function (){var statearr_23486 = state_23480;
(statearr_23486[(11)] = inst_23428__$1);

return statearr_23486;
})();
if(cljs.core.truth_(inst_23429)){
var statearr_23487_23569 = state_23480__$1;
(statearr_23487_23569[(1)] = (30));

} else {
var statearr_23488_23570 = state_23480__$1;
(statearr_23488_23570[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (1))){
var state_23480__$1 = state_23480;
var statearr_23489_23571 = state_23480__$1;
(statearr_23489_23571[(2)] = null);

(statearr_23489_23571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (24))){
var inst_23379 = (state_23480[(7)]);
var inst_23398 = (state_23480[(2)]);
var inst_23399 = cljs.core.next.call(null,inst_23379);
var inst_23357 = inst_23399;
var inst_23358 = null;
var inst_23359 = (0);
var inst_23360 = (0);
var state_23480__$1 = (function (){var statearr_23490 = state_23480;
(statearr_23490[(13)] = inst_23357);

(statearr_23490[(14)] = inst_23359);

(statearr_23490[(15)] = inst_23358);

(statearr_23490[(16)] = inst_23398);

(statearr_23490[(17)] = inst_23360);

return statearr_23490;
})();
var statearr_23491_23572 = state_23480__$1;
(statearr_23491_23572[(2)] = null);

(statearr_23491_23572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (39))){
var state_23480__$1 = state_23480;
var statearr_23495_23573 = state_23480__$1;
(statearr_23495_23573[(2)] = null);

(statearr_23495_23573[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (4))){
var inst_23348 = (state_23480[(9)]);
var inst_23348__$1 = (state_23480[(2)]);
var inst_23349 = (inst_23348__$1 == null);
var state_23480__$1 = (function (){var statearr_23496 = state_23480;
(statearr_23496[(9)] = inst_23348__$1);

return statearr_23496;
})();
if(cljs.core.truth_(inst_23349)){
var statearr_23497_23574 = state_23480__$1;
(statearr_23497_23574[(1)] = (5));

} else {
var statearr_23498_23575 = state_23480__$1;
(statearr_23498_23575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (15))){
var inst_23357 = (state_23480[(13)]);
var inst_23359 = (state_23480[(14)]);
var inst_23358 = (state_23480[(15)]);
var inst_23360 = (state_23480[(17)]);
var inst_23375 = (state_23480[(2)]);
var inst_23376 = (inst_23360 + (1));
var tmp23492 = inst_23357;
var tmp23493 = inst_23359;
var tmp23494 = inst_23358;
var inst_23357__$1 = tmp23492;
var inst_23358__$1 = tmp23494;
var inst_23359__$1 = tmp23493;
var inst_23360__$1 = inst_23376;
var state_23480__$1 = (function (){var statearr_23499 = state_23480;
(statearr_23499[(18)] = inst_23375);

(statearr_23499[(13)] = inst_23357__$1);

(statearr_23499[(14)] = inst_23359__$1);

(statearr_23499[(15)] = inst_23358__$1);

(statearr_23499[(17)] = inst_23360__$1);

return statearr_23499;
})();
var statearr_23500_23576 = state_23480__$1;
(statearr_23500_23576[(2)] = null);

(statearr_23500_23576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (21))){
var inst_23402 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23504_23577 = state_23480__$1;
(statearr_23504_23577[(2)] = inst_23402);

(statearr_23504_23577[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (31))){
var inst_23428 = (state_23480[(11)]);
var inst_23432 = done.call(null,null);
var inst_23433 = cljs.core.async.untap_STAR_.call(null,m,inst_23428);
var state_23480__$1 = (function (){var statearr_23505 = state_23480;
(statearr_23505[(19)] = inst_23432);

return statearr_23505;
})();
var statearr_23506_23578 = state_23480__$1;
(statearr_23506_23578[(2)] = inst_23433);

(statearr_23506_23578[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (32))){
var inst_23423 = (state_23480[(10)]);
var inst_23420 = (state_23480[(20)]);
var inst_23421 = (state_23480[(12)]);
var inst_23422 = (state_23480[(21)]);
var inst_23435 = (state_23480[(2)]);
var inst_23436 = (inst_23423 + (1));
var tmp23501 = inst_23420;
var tmp23502 = inst_23421;
var tmp23503 = inst_23422;
var inst_23420__$1 = tmp23501;
var inst_23421__$1 = tmp23502;
var inst_23422__$1 = tmp23503;
var inst_23423__$1 = inst_23436;
var state_23480__$1 = (function (){var statearr_23507 = state_23480;
(statearr_23507[(10)] = inst_23423__$1);

(statearr_23507[(20)] = inst_23420__$1);

(statearr_23507[(12)] = inst_23421__$1);

(statearr_23507[(21)] = inst_23422__$1);

(statearr_23507[(22)] = inst_23435);

return statearr_23507;
})();
var statearr_23508_23579 = state_23480__$1;
(statearr_23508_23579[(2)] = null);

(statearr_23508_23579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (40))){
var inst_23448 = (state_23480[(23)]);
var inst_23452 = done.call(null,null);
var inst_23453 = cljs.core.async.untap_STAR_.call(null,m,inst_23448);
var state_23480__$1 = (function (){var statearr_23509 = state_23480;
(statearr_23509[(24)] = inst_23452);

return statearr_23509;
})();
var statearr_23510_23580 = state_23480__$1;
(statearr_23510_23580[(2)] = inst_23453);

(statearr_23510_23580[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (33))){
var inst_23439 = (state_23480[(25)]);
var inst_23441 = cljs.core.chunked_seq_QMARK_.call(null,inst_23439);
var state_23480__$1 = state_23480;
if(inst_23441){
var statearr_23511_23581 = state_23480__$1;
(statearr_23511_23581[(1)] = (36));

} else {
var statearr_23512_23582 = state_23480__$1;
(statearr_23512_23582[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (13))){
var inst_23369 = (state_23480[(26)]);
var inst_23372 = cljs.core.async.close_BANG_.call(null,inst_23369);
var state_23480__$1 = state_23480;
var statearr_23513_23583 = state_23480__$1;
(statearr_23513_23583[(2)] = inst_23372);

(statearr_23513_23583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (22))){
var inst_23392 = (state_23480[(8)]);
var inst_23395 = cljs.core.async.close_BANG_.call(null,inst_23392);
var state_23480__$1 = state_23480;
var statearr_23514_23584 = state_23480__$1;
(statearr_23514_23584[(2)] = inst_23395);

(statearr_23514_23584[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (36))){
var inst_23439 = (state_23480[(25)]);
var inst_23443 = cljs.core.chunk_first.call(null,inst_23439);
var inst_23444 = cljs.core.chunk_rest.call(null,inst_23439);
var inst_23445 = cljs.core.count.call(null,inst_23443);
var inst_23420 = inst_23444;
var inst_23421 = inst_23443;
var inst_23422 = inst_23445;
var inst_23423 = (0);
var state_23480__$1 = (function (){var statearr_23515 = state_23480;
(statearr_23515[(10)] = inst_23423);

(statearr_23515[(20)] = inst_23420);

(statearr_23515[(12)] = inst_23421);

(statearr_23515[(21)] = inst_23422);

return statearr_23515;
})();
var statearr_23516_23585 = state_23480__$1;
(statearr_23516_23585[(2)] = null);

(statearr_23516_23585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (41))){
var inst_23439 = (state_23480[(25)]);
var inst_23455 = (state_23480[(2)]);
var inst_23456 = cljs.core.next.call(null,inst_23439);
var inst_23420 = inst_23456;
var inst_23421 = null;
var inst_23422 = (0);
var inst_23423 = (0);
var state_23480__$1 = (function (){var statearr_23517 = state_23480;
(statearr_23517[(10)] = inst_23423);

(statearr_23517[(20)] = inst_23420);

(statearr_23517[(12)] = inst_23421);

(statearr_23517[(21)] = inst_23422);

(statearr_23517[(27)] = inst_23455);

return statearr_23517;
})();
var statearr_23518_23586 = state_23480__$1;
(statearr_23518_23586[(2)] = null);

(statearr_23518_23586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (43))){
var state_23480__$1 = state_23480;
var statearr_23519_23587 = state_23480__$1;
(statearr_23519_23587[(2)] = null);

(statearr_23519_23587[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (29))){
var inst_23464 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23520_23588 = state_23480__$1;
(statearr_23520_23588[(2)] = inst_23464);

(statearr_23520_23588[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (44))){
var inst_23473 = (state_23480[(2)]);
var state_23480__$1 = (function (){var statearr_23521 = state_23480;
(statearr_23521[(28)] = inst_23473);

return statearr_23521;
})();
var statearr_23522_23589 = state_23480__$1;
(statearr_23522_23589[(2)] = null);

(statearr_23522_23589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (6))){
var inst_23412 = (state_23480[(29)]);
var inst_23411 = cljs.core.deref.call(null,cs);
var inst_23412__$1 = cljs.core.keys.call(null,inst_23411);
var inst_23413 = cljs.core.count.call(null,inst_23412__$1);
var inst_23414 = cljs.core.reset_BANG_.call(null,dctr,inst_23413);
var inst_23419 = cljs.core.seq.call(null,inst_23412__$1);
var inst_23420 = inst_23419;
var inst_23421 = null;
var inst_23422 = (0);
var inst_23423 = (0);
var state_23480__$1 = (function (){var statearr_23523 = state_23480;
(statearr_23523[(10)] = inst_23423);

(statearr_23523[(20)] = inst_23420);

(statearr_23523[(12)] = inst_23421);

(statearr_23523[(29)] = inst_23412__$1);

(statearr_23523[(21)] = inst_23422);

(statearr_23523[(30)] = inst_23414);

return statearr_23523;
})();
var statearr_23524_23590 = state_23480__$1;
(statearr_23524_23590[(2)] = null);

(statearr_23524_23590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (28))){
var inst_23420 = (state_23480[(20)]);
var inst_23439 = (state_23480[(25)]);
var inst_23439__$1 = cljs.core.seq.call(null,inst_23420);
var state_23480__$1 = (function (){var statearr_23525 = state_23480;
(statearr_23525[(25)] = inst_23439__$1);

return statearr_23525;
})();
if(inst_23439__$1){
var statearr_23526_23591 = state_23480__$1;
(statearr_23526_23591[(1)] = (33));

} else {
var statearr_23527_23592 = state_23480__$1;
(statearr_23527_23592[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (25))){
var inst_23423 = (state_23480[(10)]);
var inst_23422 = (state_23480[(21)]);
var inst_23425 = (inst_23423 < inst_23422);
var inst_23426 = inst_23425;
var state_23480__$1 = state_23480;
if(cljs.core.truth_(inst_23426)){
var statearr_23528_23593 = state_23480__$1;
(statearr_23528_23593[(1)] = (27));

} else {
var statearr_23529_23594 = state_23480__$1;
(statearr_23529_23594[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (34))){
var state_23480__$1 = state_23480;
var statearr_23530_23595 = state_23480__$1;
(statearr_23530_23595[(2)] = null);

(statearr_23530_23595[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (17))){
var state_23480__$1 = state_23480;
var statearr_23531_23596 = state_23480__$1;
(statearr_23531_23596[(2)] = null);

(statearr_23531_23596[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (3))){
var inst_23478 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23480__$1,inst_23478);
} else {
if((state_val_23481 === (12))){
var inst_23407 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23532_23597 = state_23480__$1;
(statearr_23532_23597[(2)] = inst_23407);

(statearr_23532_23597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (2))){
var state_23480__$1 = state_23480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23480__$1,(4),ch);
} else {
if((state_val_23481 === (23))){
var state_23480__$1 = state_23480;
var statearr_23533_23598 = state_23480__$1;
(statearr_23533_23598[(2)] = null);

(statearr_23533_23598[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (35))){
var inst_23462 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23534_23599 = state_23480__$1;
(statearr_23534_23599[(2)] = inst_23462);

(statearr_23534_23599[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (19))){
var inst_23379 = (state_23480[(7)]);
var inst_23383 = cljs.core.chunk_first.call(null,inst_23379);
var inst_23384 = cljs.core.chunk_rest.call(null,inst_23379);
var inst_23385 = cljs.core.count.call(null,inst_23383);
var inst_23357 = inst_23384;
var inst_23358 = inst_23383;
var inst_23359 = inst_23385;
var inst_23360 = (0);
var state_23480__$1 = (function (){var statearr_23535 = state_23480;
(statearr_23535[(13)] = inst_23357);

(statearr_23535[(14)] = inst_23359);

(statearr_23535[(15)] = inst_23358);

(statearr_23535[(17)] = inst_23360);

return statearr_23535;
})();
var statearr_23536_23600 = state_23480__$1;
(statearr_23536_23600[(2)] = null);

(statearr_23536_23600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (11))){
var inst_23379 = (state_23480[(7)]);
var inst_23357 = (state_23480[(13)]);
var inst_23379__$1 = cljs.core.seq.call(null,inst_23357);
var state_23480__$1 = (function (){var statearr_23537 = state_23480;
(statearr_23537[(7)] = inst_23379__$1);

return statearr_23537;
})();
if(inst_23379__$1){
var statearr_23538_23601 = state_23480__$1;
(statearr_23538_23601[(1)] = (16));

} else {
var statearr_23539_23602 = state_23480__$1;
(statearr_23539_23602[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (9))){
var inst_23409 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23540_23603 = state_23480__$1;
(statearr_23540_23603[(2)] = inst_23409);

(statearr_23540_23603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (5))){
var inst_23355 = cljs.core.deref.call(null,cs);
var inst_23356 = cljs.core.seq.call(null,inst_23355);
var inst_23357 = inst_23356;
var inst_23358 = null;
var inst_23359 = (0);
var inst_23360 = (0);
var state_23480__$1 = (function (){var statearr_23541 = state_23480;
(statearr_23541[(13)] = inst_23357);

(statearr_23541[(14)] = inst_23359);

(statearr_23541[(15)] = inst_23358);

(statearr_23541[(17)] = inst_23360);

return statearr_23541;
})();
var statearr_23542_23604 = state_23480__$1;
(statearr_23542_23604[(2)] = null);

(statearr_23542_23604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (14))){
var state_23480__$1 = state_23480;
var statearr_23543_23605 = state_23480__$1;
(statearr_23543_23605[(2)] = null);

(statearr_23543_23605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (45))){
var inst_23470 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23544_23606 = state_23480__$1;
(statearr_23544_23606[(2)] = inst_23470);

(statearr_23544_23606[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (26))){
var inst_23412 = (state_23480[(29)]);
var inst_23466 = (state_23480[(2)]);
var inst_23467 = cljs.core.seq.call(null,inst_23412);
var state_23480__$1 = (function (){var statearr_23545 = state_23480;
(statearr_23545[(31)] = inst_23466);

return statearr_23545;
})();
if(inst_23467){
var statearr_23546_23607 = state_23480__$1;
(statearr_23546_23607[(1)] = (42));

} else {
var statearr_23547_23608 = state_23480__$1;
(statearr_23547_23608[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (16))){
var inst_23379 = (state_23480[(7)]);
var inst_23381 = cljs.core.chunked_seq_QMARK_.call(null,inst_23379);
var state_23480__$1 = state_23480;
if(inst_23381){
var statearr_23548_23609 = state_23480__$1;
(statearr_23548_23609[(1)] = (19));

} else {
var statearr_23549_23610 = state_23480__$1;
(statearr_23549_23610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (38))){
var inst_23459 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23550_23611 = state_23480__$1;
(statearr_23550_23611[(2)] = inst_23459);

(statearr_23550_23611[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (30))){
var state_23480__$1 = state_23480;
var statearr_23551_23612 = state_23480__$1;
(statearr_23551_23612[(2)] = null);

(statearr_23551_23612[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (10))){
var inst_23358 = (state_23480[(15)]);
var inst_23360 = (state_23480[(17)]);
var inst_23368 = cljs.core._nth.call(null,inst_23358,inst_23360);
var inst_23369 = cljs.core.nth.call(null,inst_23368,(0),null);
var inst_23370 = cljs.core.nth.call(null,inst_23368,(1),null);
var state_23480__$1 = (function (){var statearr_23552 = state_23480;
(statearr_23552[(26)] = inst_23369);

return statearr_23552;
})();
if(cljs.core.truth_(inst_23370)){
var statearr_23553_23613 = state_23480__$1;
(statearr_23553_23613[(1)] = (13));

} else {
var statearr_23554_23614 = state_23480__$1;
(statearr_23554_23614[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (18))){
var inst_23405 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23555_23615 = state_23480__$1;
(statearr_23555_23615[(2)] = inst_23405);

(statearr_23555_23615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (42))){
var state_23480__$1 = state_23480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23480__$1,(45),dchan);
} else {
if((state_val_23481 === (37))){
var inst_23348 = (state_23480[(9)]);
var inst_23448 = (state_23480[(23)]);
var inst_23439 = (state_23480[(25)]);
var inst_23448__$1 = cljs.core.first.call(null,inst_23439);
var inst_23449 = cljs.core.async.put_BANG_.call(null,inst_23448__$1,inst_23348,done);
var state_23480__$1 = (function (){var statearr_23556 = state_23480;
(statearr_23556[(23)] = inst_23448__$1);

return statearr_23556;
})();
if(cljs.core.truth_(inst_23449)){
var statearr_23557_23616 = state_23480__$1;
(statearr_23557_23616[(1)] = (39));

} else {
var statearr_23558_23617 = state_23480__$1;
(statearr_23558_23617[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23481 === (8))){
var inst_23359 = (state_23480[(14)]);
var inst_23360 = (state_23480[(17)]);
var inst_23362 = (inst_23360 < inst_23359);
var inst_23363 = inst_23362;
var state_23480__$1 = state_23480;
if(cljs.core.truth_(inst_23363)){
var statearr_23559_23618 = state_23480__$1;
(statearr_23559_23618[(1)] = (10));

} else {
var statearr_23560_23619 = state_23480__$1;
(statearr_23560_23619[(1)] = (11));

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
});})(c__20882__auto___23565,cs,m,dchan,dctr,done))
;
return ((function (switch__20715__auto__,c__20882__auto___23565,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20716__auto__ = null;
var cljs$core$async$mult_$_state_machine__20716__auto____0 = (function (){
var statearr_23561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23561[(0)] = cljs$core$async$mult_$_state_machine__20716__auto__);

(statearr_23561[(1)] = (1));

return statearr_23561;
});
var cljs$core$async$mult_$_state_machine__20716__auto____1 = (function (state_23480){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_23480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e23562){if((e23562 instanceof Object)){
var ex__20719__auto__ = e23562;
var statearr_23563_23620 = state_23480;
(statearr_23563_23620[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23621 = state_23480;
state_23480 = G__23621;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20716__auto__ = function(state_23480){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20716__auto____1.call(this,state_23480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20716__auto____0;
cljs$core$async$mult_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20716__auto____1;
return cljs$core$async$mult_$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___23565,cs,m,dchan,dctr,done))
})();
var state__20884__auto__ = (function (){var statearr_23564 = f__20883__auto__.call(null);
(statearr_23564[(6)] = c__20882__auto___23565);

return statearr_23564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___23565,cs,m,dchan,dctr,done))
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
var G__23623 = arguments.length;
switch (G__23623) {
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
var len__4730__auto___23635 = arguments.length;
var i__4731__auto___23636 = (0);
while(true){
if((i__4731__auto___23636 < len__4730__auto___23635)){
args__4736__auto__.push((arguments[i__4731__auto___23636]));

var G__23637 = (i__4731__auto___23636 + (1));
i__4731__auto___23636 = G__23637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23629){
var map__23630 = p__23629;
var map__23630__$1 = (((((!((map__23630 == null))))?(((((map__23630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23630):map__23630);
var opts = map__23630__$1;
var statearr_23632_23638 = state;
(statearr_23632_23638[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__23630,map__23630__$1,opts){
return (function (val){
var statearr_23633_23639 = state;
(statearr_23633_23639[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23630,map__23630__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_23634_23640 = state;
(statearr_23634_23640[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23625){
var G__23626 = cljs.core.first.call(null,seq23625);
var seq23625__$1 = cljs.core.next.call(null,seq23625);
var G__23627 = cljs.core.first.call(null,seq23625__$1);
var seq23625__$2 = cljs.core.next.call(null,seq23625__$1);
var G__23628 = cljs.core.first.call(null,seq23625__$2);
var seq23625__$3 = cljs.core.next.call(null,seq23625__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23626,G__23627,G__23628,seq23625__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23641 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23642){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23642 = meta23642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23643,meta23642__$1){
var self__ = this;
var _23643__$1 = this;
return (new cljs.core.async.t_cljs$core$async23641(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23642__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23643){
var self__ = this;
var _23643__$1 = this;
return self__.meta23642;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23641.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23641.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23641.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23641.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23641.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23641.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23641.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23641.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23642","meta23642",1997875602,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23641";

cljs.core.async.t_cljs$core$async23641.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23641");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23641.
 */
cljs.core.async.__GT_t_cljs$core$async23641 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23641(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23642){
return (new cljs.core.async.t_cljs$core$async23641(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23642));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23641(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20882__auto___23805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___23805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___23805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23745){
var state_val_23746 = (state_23745[(1)]);
if((state_val_23746 === (7))){
var inst_23660 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
var statearr_23747_23806 = state_23745__$1;
(statearr_23747_23806[(2)] = inst_23660);

(statearr_23747_23806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (20))){
var inst_23672 = (state_23745[(7)]);
var state_23745__$1 = state_23745;
var statearr_23748_23807 = state_23745__$1;
(statearr_23748_23807[(2)] = inst_23672);

(statearr_23748_23807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (27))){
var state_23745__$1 = state_23745;
var statearr_23749_23808 = state_23745__$1;
(statearr_23749_23808[(2)] = null);

(statearr_23749_23808[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (1))){
var inst_23647 = (state_23745[(8)]);
var inst_23647__$1 = calc_state.call(null);
var inst_23649 = (inst_23647__$1 == null);
var inst_23650 = cljs.core.not.call(null,inst_23649);
var state_23745__$1 = (function (){var statearr_23750 = state_23745;
(statearr_23750[(8)] = inst_23647__$1);

return statearr_23750;
})();
if(inst_23650){
var statearr_23751_23809 = state_23745__$1;
(statearr_23751_23809[(1)] = (2));

} else {
var statearr_23752_23810 = state_23745__$1;
(statearr_23752_23810[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (24))){
var inst_23705 = (state_23745[(9)]);
var inst_23696 = (state_23745[(10)]);
var inst_23719 = (state_23745[(11)]);
var inst_23719__$1 = inst_23696.call(null,inst_23705);
var state_23745__$1 = (function (){var statearr_23753 = state_23745;
(statearr_23753[(11)] = inst_23719__$1);

return statearr_23753;
})();
if(cljs.core.truth_(inst_23719__$1)){
var statearr_23754_23811 = state_23745__$1;
(statearr_23754_23811[(1)] = (29));

} else {
var statearr_23755_23812 = state_23745__$1;
(statearr_23755_23812[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (4))){
var inst_23663 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
if(cljs.core.truth_(inst_23663)){
var statearr_23756_23813 = state_23745__$1;
(statearr_23756_23813[(1)] = (8));

} else {
var statearr_23757_23814 = state_23745__$1;
(statearr_23757_23814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (15))){
var inst_23690 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
if(cljs.core.truth_(inst_23690)){
var statearr_23758_23815 = state_23745__$1;
(statearr_23758_23815[(1)] = (19));

} else {
var statearr_23759_23816 = state_23745__$1;
(statearr_23759_23816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (21))){
var inst_23695 = (state_23745[(12)]);
var inst_23695__$1 = (state_23745[(2)]);
var inst_23696 = cljs.core.get.call(null,inst_23695__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23697 = cljs.core.get.call(null,inst_23695__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23698 = cljs.core.get.call(null,inst_23695__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23745__$1 = (function (){var statearr_23760 = state_23745;
(statearr_23760[(10)] = inst_23696);

(statearr_23760[(12)] = inst_23695__$1);

(statearr_23760[(13)] = inst_23697);

return statearr_23760;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23745__$1,(22),inst_23698);
} else {
if((state_val_23746 === (31))){
var inst_23727 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
if(cljs.core.truth_(inst_23727)){
var statearr_23761_23817 = state_23745__$1;
(statearr_23761_23817[(1)] = (32));

} else {
var statearr_23762_23818 = state_23745__$1;
(statearr_23762_23818[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (32))){
var inst_23704 = (state_23745[(14)]);
var state_23745__$1 = state_23745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23745__$1,(35),out,inst_23704);
} else {
if((state_val_23746 === (33))){
var inst_23695 = (state_23745[(12)]);
var inst_23672 = inst_23695;
var state_23745__$1 = (function (){var statearr_23763 = state_23745;
(statearr_23763[(7)] = inst_23672);

return statearr_23763;
})();
var statearr_23764_23819 = state_23745__$1;
(statearr_23764_23819[(2)] = null);

(statearr_23764_23819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (13))){
var inst_23672 = (state_23745[(7)]);
var inst_23679 = inst_23672.cljs$lang$protocol_mask$partition0$;
var inst_23680 = (inst_23679 & (64));
var inst_23681 = inst_23672.cljs$core$ISeq$;
var inst_23682 = (cljs.core.PROTOCOL_SENTINEL === inst_23681);
var inst_23683 = ((inst_23680) || (inst_23682));
var state_23745__$1 = state_23745;
if(cljs.core.truth_(inst_23683)){
var statearr_23765_23820 = state_23745__$1;
(statearr_23765_23820[(1)] = (16));

} else {
var statearr_23766_23821 = state_23745__$1;
(statearr_23766_23821[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (22))){
var inst_23705 = (state_23745[(9)]);
var inst_23704 = (state_23745[(14)]);
var inst_23703 = (state_23745[(2)]);
var inst_23704__$1 = cljs.core.nth.call(null,inst_23703,(0),null);
var inst_23705__$1 = cljs.core.nth.call(null,inst_23703,(1),null);
var inst_23706 = (inst_23704__$1 == null);
var inst_23707 = cljs.core._EQ_.call(null,inst_23705__$1,change);
var inst_23708 = ((inst_23706) || (inst_23707));
var state_23745__$1 = (function (){var statearr_23767 = state_23745;
(statearr_23767[(9)] = inst_23705__$1);

(statearr_23767[(14)] = inst_23704__$1);

return statearr_23767;
})();
if(cljs.core.truth_(inst_23708)){
var statearr_23768_23822 = state_23745__$1;
(statearr_23768_23822[(1)] = (23));

} else {
var statearr_23769_23823 = state_23745__$1;
(statearr_23769_23823[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (36))){
var inst_23695 = (state_23745[(12)]);
var inst_23672 = inst_23695;
var state_23745__$1 = (function (){var statearr_23770 = state_23745;
(statearr_23770[(7)] = inst_23672);

return statearr_23770;
})();
var statearr_23771_23824 = state_23745__$1;
(statearr_23771_23824[(2)] = null);

(statearr_23771_23824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (29))){
var inst_23719 = (state_23745[(11)]);
var state_23745__$1 = state_23745;
var statearr_23772_23825 = state_23745__$1;
(statearr_23772_23825[(2)] = inst_23719);

(statearr_23772_23825[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (6))){
var state_23745__$1 = state_23745;
var statearr_23773_23826 = state_23745__$1;
(statearr_23773_23826[(2)] = false);

(statearr_23773_23826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (28))){
var inst_23715 = (state_23745[(2)]);
var inst_23716 = calc_state.call(null);
var inst_23672 = inst_23716;
var state_23745__$1 = (function (){var statearr_23774 = state_23745;
(statearr_23774[(15)] = inst_23715);

(statearr_23774[(7)] = inst_23672);

return statearr_23774;
})();
var statearr_23775_23827 = state_23745__$1;
(statearr_23775_23827[(2)] = null);

(statearr_23775_23827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (25))){
var inst_23741 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
var statearr_23776_23828 = state_23745__$1;
(statearr_23776_23828[(2)] = inst_23741);

(statearr_23776_23828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (34))){
var inst_23739 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
var statearr_23777_23829 = state_23745__$1;
(statearr_23777_23829[(2)] = inst_23739);

(statearr_23777_23829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (17))){
var state_23745__$1 = state_23745;
var statearr_23778_23830 = state_23745__$1;
(statearr_23778_23830[(2)] = false);

(statearr_23778_23830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (3))){
var state_23745__$1 = state_23745;
var statearr_23779_23831 = state_23745__$1;
(statearr_23779_23831[(2)] = false);

(statearr_23779_23831[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (12))){
var inst_23743 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23745__$1,inst_23743);
} else {
if((state_val_23746 === (2))){
var inst_23647 = (state_23745[(8)]);
var inst_23652 = inst_23647.cljs$lang$protocol_mask$partition0$;
var inst_23653 = (inst_23652 & (64));
var inst_23654 = inst_23647.cljs$core$ISeq$;
var inst_23655 = (cljs.core.PROTOCOL_SENTINEL === inst_23654);
var inst_23656 = ((inst_23653) || (inst_23655));
var state_23745__$1 = state_23745;
if(cljs.core.truth_(inst_23656)){
var statearr_23780_23832 = state_23745__$1;
(statearr_23780_23832[(1)] = (5));

} else {
var statearr_23781_23833 = state_23745__$1;
(statearr_23781_23833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (23))){
var inst_23704 = (state_23745[(14)]);
var inst_23710 = (inst_23704 == null);
var state_23745__$1 = state_23745;
if(cljs.core.truth_(inst_23710)){
var statearr_23782_23834 = state_23745__$1;
(statearr_23782_23834[(1)] = (26));

} else {
var statearr_23783_23835 = state_23745__$1;
(statearr_23783_23835[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (35))){
var inst_23730 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
if(cljs.core.truth_(inst_23730)){
var statearr_23784_23836 = state_23745__$1;
(statearr_23784_23836[(1)] = (36));

} else {
var statearr_23785_23837 = state_23745__$1;
(statearr_23785_23837[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (19))){
var inst_23672 = (state_23745[(7)]);
var inst_23692 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23672);
var state_23745__$1 = state_23745;
var statearr_23786_23838 = state_23745__$1;
(statearr_23786_23838[(2)] = inst_23692);

(statearr_23786_23838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (11))){
var inst_23672 = (state_23745[(7)]);
var inst_23676 = (inst_23672 == null);
var inst_23677 = cljs.core.not.call(null,inst_23676);
var state_23745__$1 = state_23745;
if(inst_23677){
var statearr_23787_23839 = state_23745__$1;
(statearr_23787_23839[(1)] = (13));

} else {
var statearr_23788_23840 = state_23745__$1;
(statearr_23788_23840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (9))){
var inst_23647 = (state_23745[(8)]);
var state_23745__$1 = state_23745;
var statearr_23789_23841 = state_23745__$1;
(statearr_23789_23841[(2)] = inst_23647);

(statearr_23789_23841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (5))){
var state_23745__$1 = state_23745;
var statearr_23790_23842 = state_23745__$1;
(statearr_23790_23842[(2)] = true);

(statearr_23790_23842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (14))){
var state_23745__$1 = state_23745;
var statearr_23791_23843 = state_23745__$1;
(statearr_23791_23843[(2)] = false);

(statearr_23791_23843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (26))){
var inst_23705 = (state_23745[(9)]);
var inst_23712 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23705);
var state_23745__$1 = state_23745;
var statearr_23792_23844 = state_23745__$1;
(statearr_23792_23844[(2)] = inst_23712);

(statearr_23792_23844[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (16))){
var state_23745__$1 = state_23745;
var statearr_23793_23845 = state_23745__$1;
(statearr_23793_23845[(2)] = true);

(statearr_23793_23845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (38))){
var inst_23735 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
var statearr_23794_23846 = state_23745__$1;
(statearr_23794_23846[(2)] = inst_23735);

(statearr_23794_23846[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (30))){
var inst_23705 = (state_23745[(9)]);
var inst_23696 = (state_23745[(10)]);
var inst_23697 = (state_23745[(13)]);
var inst_23722 = cljs.core.empty_QMARK_.call(null,inst_23696);
var inst_23723 = inst_23697.call(null,inst_23705);
var inst_23724 = cljs.core.not.call(null,inst_23723);
var inst_23725 = ((inst_23722) && (inst_23724));
var state_23745__$1 = state_23745;
var statearr_23795_23847 = state_23745__$1;
(statearr_23795_23847[(2)] = inst_23725);

(statearr_23795_23847[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (10))){
var inst_23647 = (state_23745[(8)]);
var inst_23668 = (state_23745[(2)]);
var inst_23669 = cljs.core.get.call(null,inst_23668,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23670 = cljs.core.get.call(null,inst_23668,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23671 = cljs.core.get.call(null,inst_23668,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23672 = inst_23647;
var state_23745__$1 = (function (){var statearr_23796 = state_23745;
(statearr_23796[(16)] = inst_23669);

(statearr_23796[(17)] = inst_23670);

(statearr_23796[(7)] = inst_23672);

(statearr_23796[(18)] = inst_23671);

return statearr_23796;
})();
var statearr_23797_23848 = state_23745__$1;
(statearr_23797_23848[(2)] = null);

(statearr_23797_23848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (18))){
var inst_23687 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
var statearr_23798_23849 = state_23745__$1;
(statearr_23798_23849[(2)] = inst_23687);

(statearr_23798_23849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (37))){
var state_23745__$1 = state_23745;
var statearr_23799_23850 = state_23745__$1;
(statearr_23799_23850[(2)] = null);

(statearr_23799_23850[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (8))){
var inst_23647 = (state_23745[(8)]);
var inst_23665 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23647);
var state_23745__$1 = state_23745;
var statearr_23800_23851 = state_23745__$1;
(statearr_23800_23851[(2)] = inst_23665);

(statearr_23800_23851[(1)] = (10));


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
});})(c__20882__auto___23805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20715__auto__,c__20882__auto___23805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20716__auto__ = null;
var cljs$core$async$mix_$_state_machine__20716__auto____0 = (function (){
var statearr_23801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23801[(0)] = cljs$core$async$mix_$_state_machine__20716__auto__);

(statearr_23801[(1)] = (1));

return statearr_23801;
});
var cljs$core$async$mix_$_state_machine__20716__auto____1 = (function (state_23745){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_23745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e23802){if((e23802 instanceof Object)){
var ex__20719__auto__ = e23802;
var statearr_23803_23852 = state_23745;
(statearr_23803_23852[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23853 = state_23745;
state_23745 = G__23853;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20716__auto__ = function(state_23745){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20716__auto____1.call(this,state_23745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20716__auto____0;
cljs$core$async$mix_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20716__auto____1;
return cljs$core$async$mix_$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___23805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20884__auto__ = (function (){var statearr_23804 = f__20883__auto__.call(null);
(statearr_23804[(6)] = c__20882__auto___23805);

return statearr_23804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___23805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__23855 = arguments.length;
switch (G__23855) {
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
var G__23859 = arguments.length;
switch (G__23859) {
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
return (function (p1__23857_SHARP_){
if(cljs.core.truth_(p1__23857_SHARP_.call(null,topic))){
return p1__23857_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23857_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23860 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23861){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23861 = meta23861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23862,meta23861__$1){
var self__ = this;
var _23862__$1 = this;
return (new cljs.core.async.t_cljs$core$async23860(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23861__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23862){
var self__ = this;
var _23862__$1 = this;
return self__.meta23861;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23860.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23860.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23860.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23860.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23860.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23860.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23860.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23861","meta23861",-1904294331,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23860";

cljs.core.async.t_cljs$core$async23860.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23860");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23860.
 */
cljs.core.async.__GT_t_cljs$core$async23860 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23860(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23861){
return (new cljs.core.async.t_cljs$core$async23860(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23861));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23860(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20882__auto___23980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___23980,mults,ensure_mult,p){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___23980,mults,ensure_mult,p){
return (function (state_23934){
var state_val_23935 = (state_23934[(1)]);
if((state_val_23935 === (7))){
var inst_23930 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
var statearr_23936_23981 = state_23934__$1;
(statearr_23936_23981[(2)] = inst_23930);

(statearr_23936_23981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (20))){
var state_23934__$1 = state_23934;
var statearr_23937_23982 = state_23934__$1;
(statearr_23937_23982[(2)] = null);

(statearr_23937_23982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (1))){
var state_23934__$1 = state_23934;
var statearr_23938_23983 = state_23934__$1;
(statearr_23938_23983[(2)] = null);

(statearr_23938_23983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (24))){
var inst_23913 = (state_23934[(7)]);
var inst_23922 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23913);
var state_23934__$1 = state_23934;
var statearr_23939_23984 = state_23934__$1;
(statearr_23939_23984[(2)] = inst_23922);

(statearr_23939_23984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (4))){
var inst_23865 = (state_23934[(8)]);
var inst_23865__$1 = (state_23934[(2)]);
var inst_23866 = (inst_23865__$1 == null);
var state_23934__$1 = (function (){var statearr_23940 = state_23934;
(statearr_23940[(8)] = inst_23865__$1);

return statearr_23940;
})();
if(cljs.core.truth_(inst_23866)){
var statearr_23941_23985 = state_23934__$1;
(statearr_23941_23985[(1)] = (5));

} else {
var statearr_23942_23986 = state_23934__$1;
(statearr_23942_23986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (15))){
var inst_23907 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
var statearr_23943_23987 = state_23934__$1;
(statearr_23943_23987[(2)] = inst_23907);

(statearr_23943_23987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (21))){
var inst_23927 = (state_23934[(2)]);
var state_23934__$1 = (function (){var statearr_23944 = state_23934;
(statearr_23944[(9)] = inst_23927);

return statearr_23944;
})();
var statearr_23945_23988 = state_23934__$1;
(statearr_23945_23988[(2)] = null);

(statearr_23945_23988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (13))){
var inst_23889 = (state_23934[(10)]);
var inst_23891 = cljs.core.chunked_seq_QMARK_.call(null,inst_23889);
var state_23934__$1 = state_23934;
if(inst_23891){
var statearr_23946_23989 = state_23934__$1;
(statearr_23946_23989[(1)] = (16));

} else {
var statearr_23947_23990 = state_23934__$1;
(statearr_23947_23990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (22))){
var inst_23919 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
if(cljs.core.truth_(inst_23919)){
var statearr_23948_23991 = state_23934__$1;
(statearr_23948_23991[(1)] = (23));

} else {
var statearr_23949_23992 = state_23934__$1;
(statearr_23949_23992[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (6))){
var inst_23913 = (state_23934[(7)]);
var inst_23865 = (state_23934[(8)]);
var inst_23915 = (state_23934[(11)]);
var inst_23913__$1 = topic_fn.call(null,inst_23865);
var inst_23914 = cljs.core.deref.call(null,mults);
var inst_23915__$1 = cljs.core.get.call(null,inst_23914,inst_23913__$1);
var state_23934__$1 = (function (){var statearr_23950 = state_23934;
(statearr_23950[(7)] = inst_23913__$1);

(statearr_23950[(11)] = inst_23915__$1);

return statearr_23950;
})();
if(cljs.core.truth_(inst_23915__$1)){
var statearr_23951_23993 = state_23934__$1;
(statearr_23951_23993[(1)] = (19));

} else {
var statearr_23952_23994 = state_23934__$1;
(statearr_23952_23994[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (25))){
var inst_23924 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
var statearr_23953_23995 = state_23934__$1;
(statearr_23953_23995[(2)] = inst_23924);

(statearr_23953_23995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (17))){
var inst_23889 = (state_23934[(10)]);
var inst_23898 = cljs.core.first.call(null,inst_23889);
var inst_23899 = cljs.core.async.muxch_STAR_.call(null,inst_23898);
var inst_23900 = cljs.core.async.close_BANG_.call(null,inst_23899);
var inst_23901 = cljs.core.next.call(null,inst_23889);
var inst_23875 = inst_23901;
var inst_23876 = null;
var inst_23877 = (0);
var inst_23878 = (0);
var state_23934__$1 = (function (){var statearr_23954 = state_23934;
(statearr_23954[(12)] = inst_23877);

(statearr_23954[(13)] = inst_23878);

(statearr_23954[(14)] = inst_23875);

(statearr_23954[(15)] = inst_23876);

(statearr_23954[(16)] = inst_23900);

return statearr_23954;
})();
var statearr_23955_23996 = state_23934__$1;
(statearr_23955_23996[(2)] = null);

(statearr_23955_23996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (3))){
var inst_23932 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23934__$1,inst_23932);
} else {
if((state_val_23935 === (12))){
var inst_23909 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
var statearr_23956_23997 = state_23934__$1;
(statearr_23956_23997[(2)] = inst_23909);

(statearr_23956_23997[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (2))){
var state_23934__$1 = state_23934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23934__$1,(4),ch);
} else {
if((state_val_23935 === (23))){
var state_23934__$1 = state_23934;
var statearr_23957_23998 = state_23934__$1;
(statearr_23957_23998[(2)] = null);

(statearr_23957_23998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (19))){
var inst_23865 = (state_23934[(8)]);
var inst_23915 = (state_23934[(11)]);
var inst_23917 = cljs.core.async.muxch_STAR_.call(null,inst_23915);
var state_23934__$1 = state_23934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23934__$1,(22),inst_23917,inst_23865);
} else {
if((state_val_23935 === (11))){
var inst_23889 = (state_23934[(10)]);
var inst_23875 = (state_23934[(14)]);
var inst_23889__$1 = cljs.core.seq.call(null,inst_23875);
var state_23934__$1 = (function (){var statearr_23958 = state_23934;
(statearr_23958[(10)] = inst_23889__$1);

return statearr_23958;
})();
if(inst_23889__$1){
var statearr_23959_23999 = state_23934__$1;
(statearr_23959_23999[(1)] = (13));

} else {
var statearr_23960_24000 = state_23934__$1;
(statearr_23960_24000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (9))){
var inst_23911 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
var statearr_23961_24001 = state_23934__$1;
(statearr_23961_24001[(2)] = inst_23911);

(statearr_23961_24001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (5))){
var inst_23872 = cljs.core.deref.call(null,mults);
var inst_23873 = cljs.core.vals.call(null,inst_23872);
var inst_23874 = cljs.core.seq.call(null,inst_23873);
var inst_23875 = inst_23874;
var inst_23876 = null;
var inst_23877 = (0);
var inst_23878 = (0);
var state_23934__$1 = (function (){var statearr_23962 = state_23934;
(statearr_23962[(12)] = inst_23877);

(statearr_23962[(13)] = inst_23878);

(statearr_23962[(14)] = inst_23875);

(statearr_23962[(15)] = inst_23876);

return statearr_23962;
})();
var statearr_23963_24002 = state_23934__$1;
(statearr_23963_24002[(2)] = null);

(statearr_23963_24002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (14))){
var state_23934__$1 = state_23934;
var statearr_23967_24003 = state_23934__$1;
(statearr_23967_24003[(2)] = null);

(statearr_23967_24003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (16))){
var inst_23889 = (state_23934[(10)]);
var inst_23893 = cljs.core.chunk_first.call(null,inst_23889);
var inst_23894 = cljs.core.chunk_rest.call(null,inst_23889);
var inst_23895 = cljs.core.count.call(null,inst_23893);
var inst_23875 = inst_23894;
var inst_23876 = inst_23893;
var inst_23877 = inst_23895;
var inst_23878 = (0);
var state_23934__$1 = (function (){var statearr_23968 = state_23934;
(statearr_23968[(12)] = inst_23877);

(statearr_23968[(13)] = inst_23878);

(statearr_23968[(14)] = inst_23875);

(statearr_23968[(15)] = inst_23876);

return statearr_23968;
})();
var statearr_23969_24004 = state_23934__$1;
(statearr_23969_24004[(2)] = null);

(statearr_23969_24004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (10))){
var inst_23877 = (state_23934[(12)]);
var inst_23878 = (state_23934[(13)]);
var inst_23875 = (state_23934[(14)]);
var inst_23876 = (state_23934[(15)]);
var inst_23883 = cljs.core._nth.call(null,inst_23876,inst_23878);
var inst_23884 = cljs.core.async.muxch_STAR_.call(null,inst_23883);
var inst_23885 = cljs.core.async.close_BANG_.call(null,inst_23884);
var inst_23886 = (inst_23878 + (1));
var tmp23964 = inst_23877;
var tmp23965 = inst_23875;
var tmp23966 = inst_23876;
var inst_23875__$1 = tmp23965;
var inst_23876__$1 = tmp23966;
var inst_23877__$1 = tmp23964;
var inst_23878__$1 = inst_23886;
var state_23934__$1 = (function (){var statearr_23970 = state_23934;
(statearr_23970[(17)] = inst_23885);

(statearr_23970[(12)] = inst_23877__$1);

(statearr_23970[(13)] = inst_23878__$1);

(statearr_23970[(14)] = inst_23875__$1);

(statearr_23970[(15)] = inst_23876__$1);

return statearr_23970;
})();
var statearr_23971_24005 = state_23934__$1;
(statearr_23971_24005[(2)] = null);

(statearr_23971_24005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (18))){
var inst_23904 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
var statearr_23972_24006 = state_23934__$1;
(statearr_23972_24006[(2)] = inst_23904);

(statearr_23972_24006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (8))){
var inst_23877 = (state_23934[(12)]);
var inst_23878 = (state_23934[(13)]);
var inst_23880 = (inst_23878 < inst_23877);
var inst_23881 = inst_23880;
var state_23934__$1 = state_23934;
if(cljs.core.truth_(inst_23881)){
var statearr_23973_24007 = state_23934__$1;
(statearr_23973_24007[(1)] = (10));

} else {
var statearr_23974_24008 = state_23934__$1;
(statearr_23974_24008[(1)] = (11));

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
});})(c__20882__auto___23980,mults,ensure_mult,p))
;
return ((function (switch__20715__auto__,c__20882__auto___23980,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20716__auto__ = null;
var cljs$core$async$state_machine__20716__auto____0 = (function (){
var statearr_23975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23975[(0)] = cljs$core$async$state_machine__20716__auto__);

(statearr_23975[(1)] = (1));

return statearr_23975;
});
var cljs$core$async$state_machine__20716__auto____1 = (function (state_23934){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_23934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e23976){if((e23976 instanceof Object)){
var ex__20719__auto__ = e23976;
var statearr_23977_24009 = state_23934;
(statearr_23977_24009[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24010 = state_23934;
state_23934 = G__24010;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$state_machine__20716__auto__ = function(state_23934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20716__auto____1.call(this,state_23934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20716__auto____0;
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20716__auto____1;
return cljs$core$async$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___23980,mults,ensure_mult,p))
})();
var state__20884__auto__ = (function (){var statearr_23978 = f__20883__auto__.call(null);
(statearr_23978[(6)] = c__20882__auto___23980);

return statearr_23978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___23980,mults,ensure_mult,p))
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
var G__24012 = arguments.length;
switch (G__24012) {
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
var G__24015 = arguments.length;
switch (G__24015) {
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
var G__24018 = arguments.length;
switch (G__24018) {
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
var c__20882__auto___24085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___24085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___24085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24057){
var state_val_24058 = (state_24057[(1)]);
if((state_val_24058 === (7))){
var state_24057__$1 = state_24057;
var statearr_24059_24086 = state_24057__$1;
(statearr_24059_24086[(2)] = null);

(statearr_24059_24086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (1))){
var state_24057__$1 = state_24057;
var statearr_24060_24087 = state_24057__$1;
(statearr_24060_24087[(2)] = null);

(statearr_24060_24087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (4))){
var inst_24021 = (state_24057[(7)]);
var inst_24023 = (inst_24021 < cnt);
var state_24057__$1 = state_24057;
if(cljs.core.truth_(inst_24023)){
var statearr_24061_24088 = state_24057__$1;
(statearr_24061_24088[(1)] = (6));

} else {
var statearr_24062_24089 = state_24057__$1;
(statearr_24062_24089[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (15))){
var inst_24053 = (state_24057[(2)]);
var state_24057__$1 = state_24057;
var statearr_24063_24090 = state_24057__$1;
(statearr_24063_24090[(2)] = inst_24053);

(statearr_24063_24090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (13))){
var inst_24046 = cljs.core.async.close_BANG_.call(null,out);
var state_24057__$1 = state_24057;
var statearr_24064_24091 = state_24057__$1;
(statearr_24064_24091[(2)] = inst_24046);

(statearr_24064_24091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (6))){
var state_24057__$1 = state_24057;
var statearr_24065_24092 = state_24057__$1;
(statearr_24065_24092[(2)] = null);

(statearr_24065_24092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (3))){
var inst_24055 = (state_24057[(2)]);
var state_24057__$1 = state_24057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24057__$1,inst_24055);
} else {
if((state_val_24058 === (12))){
var inst_24043 = (state_24057[(8)]);
var inst_24043__$1 = (state_24057[(2)]);
var inst_24044 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24043__$1);
var state_24057__$1 = (function (){var statearr_24066 = state_24057;
(statearr_24066[(8)] = inst_24043__$1);

return statearr_24066;
})();
if(cljs.core.truth_(inst_24044)){
var statearr_24067_24093 = state_24057__$1;
(statearr_24067_24093[(1)] = (13));

} else {
var statearr_24068_24094 = state_24057__$1;
(statearr_24068_24094[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (2))){
var inst_24020 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24021 = (0);
var state_24057__$1 = (function (){var statearr_24069 = state_24057;
(statearr_24069[(7)] = inst_24021);

(statearr_24069[(9)] = inst_24020);

return statearr_24069;
})();
var statearr_24070_24095 = state_24057__$1;
(statearr_24070_24095[(2)] = null);

(statearr_24070_24095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (11))){
var inst_24021 = (state_24057[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24057,(10),Object,null,(9));
var inst_24030 = chs__$1.call(null,inst_24021);
var inst_24031 = done.call(null,inst_24021);
var inst_24032 = cljs.core.async.take_BANG_.call(null,inst_24030,inst_24031);
var state_24057__$1 = state_24057;
var statearr_24071_24096 = state_24057__$1;
(statearr_24071_24096[(2)] = inst_24032);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24057__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (9))){
var inst_24021 = (state_24057[(7)]);
var inst_24034 = (state_24057[(2)]);
var inst_24035 = (inst_24021 + (1));
var inst_24021__$1 = inst_24035;
var state_24057__$1 = (function (){var statearr_24072 = state_24057;
(statearr_24072[(7)] = inst_24021__$1);

(statearr_24072[(10)] = inst_24034);

return statearr_24072;
})();
var statearr_24073_24097 = state_24057__$1;
(statearr_24073_24097[(2)] = null);

(statearr_24073_24097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (5))){
var inst_24041 = (state_24057[(2)]);
var state_24057__$1 = (function (){var statearr_24074 = state_24057;
(statearr_24074[(11)] = inst_24041);

return statearr_24074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24057__$1,(12),dchan);
} else {
if((state_val_24058 === (14))){
var inst_24043 = (state_24057[(8)]);
var inst_24048 = cljs.core.apply.call(null,f,inst_24043);
var state_24057__$1 = state_24057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24057__$1,(16),out,inst_24048);
} else {
if((state_val_24058 === (16))){
var inst_24050 = (state_24057[(2)]);
var state_24057__$1 = (function (){var statearr_24075 = state_24057;
(statearr_24075[(12)] = inst_24050);

return statearr_24075;
})();
var statearr_24076_24098 = state_24057__$1;
(statearr_24076_24098[(2)] = null);

(statearr_24076_24098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (10))){
var inst_24025 = (state_24057[(2)]);
var inst_24026 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24057__$1 = (function (){var statearr_24077 = state_24057;
(statearr_24077[(13)] = inst_24025);

return statearr_24077;
})();
var statearr_24078_24099 = state_24057__$1;
(statearr_24078_24099[(2)] = inst_24026);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24057__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24058 === (8))){
var inst_24039 = (state_24057[(2)]);
var state_24057__$1 = state_24057;
var statearr_24079_24100 = state_24057__$1;
(statearr_24079_24100[(2)] = inst_24039);

(statearr_24079_24100[(1)] = (5));


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
});})(c__20882__auto___24085,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20715__auto__,c__20882__auto___24085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20716__auto__ = null;
var cljs$core$async$state_machine__20716__auto____0 = (function (){
var statearr_24080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24080[(0)] = cljs$core$async$state_machine__20716__auto__);

(statearr_24080[(1)] = (1));

return statearr_24080;
});
var cljs$core$async$state_machine__20716__auto____1 = (function (state_24057){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_24057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e24081){if((e24081 instanceof Object)){
var ex__20719__auto__ = e24081;
var statearr_24082_24101 = state_24057;
(statearr_24082_24101[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24102 = state_24057;
state_24057 = G__24102;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$state_machine__20716__auto__ = function(state_24057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20716__auto____1.call(this,state_24057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20716__auto____0;
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20716__auto____1;
return cljs$core$async$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___24085,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20884__auto__ = (function (){var statearr_24083 = f__20883__auto__.call(null);
(statearr_24083[(6)] = c__20882__auto___24085);

return statearr_24083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___24085,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24105 = arguments.length;
switch (G__24105) {
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
var c__20882__auto___24159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___24159,out){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___24159,out){
return (function (state_24137){
var state_val_24138 = (state_24137[(1)]);
if((state_val_24138 === (7))){
var inst_24117 = (state_24137[(7)]);
var inst_24116 = (state_24137[(8)]);
var inst_24116__$1 = (state_24137[(2)]);
var inst_24117__$1 = cljs.core.nth.call(null,inst_24116__$1,(0),null);
var inst_24118 = cljs.core.nth.call(null,inst_24116__$1,(1),null);
var inst_24119 = (inst_24117__$1 == null);
var state_24137__$1 = (function (){var statearr_24139 = state_24137;
(statearr_24139[(7)] = inst_24117__$1);

(statearr_24139[(8)] = inst_24116__$1);

(statearr_24139[(9)] = inst_24118);

return statearr_24139;
})();
if(cljs.core.truth_(inst_24119)){
var statearr_24140_24160 = state_24137__$1;
(statearr_24140_24160[(1)] = (8));

} else {
var statearr_24141_24161 = state_24137__$1;
(statearr_24141_24161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (1))){
var inst_24106 = cljs.core.vec.call(null,chs);
var inst_24107 = inst_24106;
var state_24137__$1 = (function (){var statearr_24142 = state_24137;
(statearr_24142[(10)] = inst_24107);

return statearr_24142;
})();
var statearr_24143_24162 = state_24137__$1;
(statearr_24143_24162[(2)] = null);

(statearr_24143_24162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (4))){
var inst_24107 = (state_24137[(10)]);
var state_24137__$1 = state_24137;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24137__$1,(7),inst_24107);
} else {
if((state_val_24138 === (6))){
var inst_24133 = (state_24137[(2)]);
var state_24137__$1 = state_24137;
var statearr_24144_24163 = state_24137__$1;
(statearr_24144_24163[(2)] = inst_24133);

(statearr_24144_24163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (3))){
var inst_24135 = (state_24137[(2)]);
var state_24137__$1 = state_24137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24137__$1,inst_24135);
} else {
if((state_val_24138 === (2))){
var inst_24107 = (state_24137[(10)]);
var inst_24109 = cljs.core.count.call(null,inst_24107);
var inst_24110 = (inst_24109 > (0));
var state_24137__$1 = state_24137;
if(cljs.core.truth_(inst_24110)){
var statearr_24146_24164 = state_24137__$1;
(statearr_24146_24164[(1)] = (4));

} else {
var statearr_24147_24165 = state_24137__$1;
(statearr_24147_24165[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (11))){
var inst_24107 = (state_24137[(10)]);
var inst_24126 = (state_24137[(2)]);
var tmp24145 = inst_24107;
var inst_24107__$1 = tmp24145;
var state_24137__$1 = (function (){var statearr_24148 = state_24137;
(statearr_24148[(10)] = inst_24107__$1);

(statearr_24148[(11)] = inst_24126);

return statearr_24148;
})();
var statearr_24149_24166 = state_24137__$1;
(statearr_24149_24166[(2)] = null);

(statearr_24149_24166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (9))){
var inst_24117 = (state_24137[(7)]);
var state_24137__$1 = state_24137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24137__$1,(11),out,inst_24117);
} else {
if((state_val_24138 === (5))){
var inst_24131 = cljs.core.async.close_BANG_.call(null,out);
var state_24137__$1 = state_24137;
var statearr_24150_24167 = state_24137__$1;
(statearr_24150_24167[(2)] = inst_24131);

(statearr_24150_24167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (10))){
var inst_24129 = (state_24137[(2)]);
var state_24137__$1 = state_24137;
var statearr_24151_24168 = state_24137__$1;
(statearr_24151_24168[(2)] = inst_24129);

(statearr_24151_24168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (8))){
var inst_24107 = (state_24137[(10)]);
var inst_24117 = (state_24137[(7)]);
var inst_24116 = (state_24137[(8)]);
var inst_24118 = (state_24137[(9)]);
var inst_24121 = (function (){var cs = inst_24107;
var vec__24112 = inst_24116;
var v = inst_24117;
var c = inst_24118;
return ((function (cs,vec__24112,v,c,inst_24107,inst_24117,inst_24116,inst_24118,state_val_24138,c__20882__auto___24159,out){
return (function (p1__24103_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24103_SHARP_);
});
;})(cs,vec__24112,v,c,inst_24107,inst_24117,inst_24116,inst_24118,state_val_24138,c__20882__auto___24159,out))
})();
var inst_24122 = cljs.core.filterv.call(null,inst_24121,inst_24107);
var inst_24107__$1 = inst_24122;
var state_24137__$1 = (function (){var statearr_24152 = state_24137;
(statearr_24152[(10)] = inst_24107__$1);

return statearr_24152;
})();
var statearr_24153_24169 = state_24137__$1;
(statearr_24153_24169[(2)] = null);

(statearr_24153_24169[(1)] = (2));


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
});})(c__20882__auto___24159,out))
;
return ((function (switch__20715__auto__,c__20882__auto___24159,out){
return (function() {
var cljs$core$async$state_machine__20716__auto__ = null;
var cljs$core$async$state_machine__20716__auto____0 = (function (){
var statearr_24154 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24154[(0)] = cljs$core$async$state_machine__20716__auto__);

(statearr_24154[(1)] = (1));

return statearr_24154;
});
var cljs$core$async$state_machine__20716__auto____1 = (function (state_24137){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_24137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e24155){if((e24155 instanceof Object)){
var ex__20719__auto__ = e24155;
var statearr_24156_24170 = state_24137;
(statearr_24156_24170[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24171 = state_24137;
state_24137 = G__24171;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$state_machine__20716__auto__ = function(state_24137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20716__auto____1.call(this,state_24137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20716__auto____0;
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20716__auto____1;
return cljs$core$async$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___24159,out))
})();
var state__20884__auto__ = (function (){var statearr_24157 = f__20883__auto__.call(null);
(statearr_24157[(6)] = c__20882__auto___24159);

return statearr_24157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___24159,out))
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
var G__24173 = arguments.length;
switch (G__24173) {
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
var c__20882__auto___24218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___24218,out){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___24218,out){
return (function (state_24197){
var state_val_24198 = (state_24197[(1)]);
if((state_val_24198 === (7))){
var inst_24179 = (state_24197[(7)]);
var inst_24179__$1 = (state_24197[(2)]);
var inst_24180 = (inst_24179__$1 == null);
var inst_24181 = cljs.core.not.call(null,inst_24180);
var state_24197__$1 = (function (){var statearr_24199 = state_24197;
(statearr_24199[(7)] = inst_24179__$1);

return statearr_24199;
})();
if(inst_24181){
var statearr_24200_24219 = state_24197__$1;
(statearr_24200_24219[(1)] = (8));

} else {
var statearr_24201_24220 = state_24197__$1;
(statearr_24201_24220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (1))){
var inst_24174 = (0);
var state_24197__$1 = (function (){var statearr_24202 = state_24197;
(statearr_24202[(8)] = inst_24174);

return statearr_24202;
})();
var statearr_24203_24221 = state_24197__$1;
(statearr_24203_24221[(2)] = null);

(statearr_24203_24221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (4))){
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24197__$1,(7),ch);
} else {
if((state_val_24198 === (6))){
var inst_24192 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24204_24222 = state_24197__$1;
(statearr_24204_24222[(2)] = inst_24192);

(statearr_24204_24222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (3))){
var inst_24194 = (state_24197[(2)]);
var inst_24195 = cljs.core.async.close_BANG_.call(null,out);
var state_24197__$1 = (function (){var statearr_24205 = state_24197;
(statearr_24205[(9)] = inst_24194);

return statearr_24205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24197__$1,inst_24195);
} else {
if((state_val_24198 === (2))){
var inst_24174 = (state_24197[(8)]);
var inst_24176 = (inst_24174 < n);
var state_24197__$1 = state_24197;
if(cljs.core.truth_(inst_24176)){
var statearr_24206_24223 = state_24197__$1;
(statearr_24206_24223[(1)] = (4));

} else {
var statearr_24207_24224 = state_24197__$1;
(statearr_24207_24224[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (11))){
var inst_24174 = (state_24197[(8)]);
var inst_24184 = (state_24197[(2)]);
var inst_24185 = (inst_24174 + (1));
var inst_24174__$1 = inst_24185;
var state_24197__$1 = (function (){var statearr_24208 = state_24197;
(statearr_24208[(8)] = inst_24174__$1);

(statearr_24208[(10)] = inst_24184);

return statearr_24208;
})();
var statearr_24209_24225 = state_24197__$1;
(statearr_24209_24225[(2)] = null);

(statearr_24209_24225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (9))){
var state_24197__$1 = state_24197;
var statearr_24210_24226 = state_24197__$1;
(statearr_24210_24226[(2)] = null);

(statearr_24210_24226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (5))){
var state_24197__$1 = state_24197;
var statearr_24211_24227 = state_24197__$1;
(statearr_24211_24227[(2)] = null);

(statearr_24211_24227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (10))){
var inst_24189 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24212_24228 = state_24197__$1;
(statearr_24212_24228[(2)] = inst_24189);

(statearr_24212_24228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (8))){
var inst_24179 = (state_24197[(7)]);
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24197__$1,(11),out,inst_24179);
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
});})(c__20882__auto___24218,out))
;
return ((function (switch__20715__auto__,c__20882__auto___24218,out){
return (function() {
var cljs$core$async$state_machine__20716__auto__ = null;
var cljs$core$async$state_machine__20716__auto____0 = (function (){
var statearr_24213 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24213[(0)] = cljs$core$async$state_machine__20716__auto__);

(statearr_24213[(1)] = (1));

return statearr_24213;
});
var cljs$core$async$state_machine__20716__auto____1 = (function (state_24197){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_24197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e24214){if((e24214 instanceof Object)){
var ex__20719__auto__ = e24214;
var statearr_24215_24229 = state_24197;
(statearr_24215_24229[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24230 = state_24197;
state_24197 = G__24230;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$state_machine__20716__auto__ = function(state_24197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20716__auto____1.call(this,state_24197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20716__auto____0;
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20716__auto____1;
return cljs$core$async$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___24218,out))
})();
var state__20884__auto__ = (function (){var statearr_24216 = f__20883__auto__.call(null);
(statearr_24216[(6)] = c__20882__auto___24218);

return statearr_24216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___24218,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24232 = (function (f,ch,meta24233){
this.f = f;
this.ch = ch;
this.meta24233 = meta24233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24234,meta24233__$1){
var self__ = this;
var _24234__$1 = this;
return (new cljs.core.async.t_cljs$core$async24232(self__.f,self__.ch,meta24233__$1));
});

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24234){
var self__ = this;
var _24234__$1 = this;
return self__.meta24233;
});

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24235 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24235 = (function (f,ch,meta24233,_,fn1,meta24236){
this.f = f;
this.ch = ch;
this.meta24233 = meta24233;
this._ = _;
this.fn1 = fn1;
this.meta24236 = meta24236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24237,meta24236__$1){
var self__ = this;
var _24237__$1 = this;
return (new cljs.core.async.t_cljs$core$async24235(self__.f,self__.ch,self__.meta24233,self__._,self__.fn1,meta24236__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24237){
var self__ = this;
var _24237__$1 = this;
return self__.meta24236;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24235.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24235.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24231_SHARP_){
return f1.call(null,(((p1__24231_SHARP_ == null))?null:self__.f.call(null,p1__24231_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24235.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24233","meta24233",987630682,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24232","cljs.core.async/t_cljs$core$async24232",1173977564,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24236","meta24236",725933325,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24235";

cljs.core.async.t_cljs$core$async24235.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24235");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24235.
 */
cljs.core.async.__GT_t_cljs$core$async24235 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24235(f__$1,ch__$1,meta24233__$1,___$2,fn1__$1,meta24236){
return (new cljs.core.async.t_cljs$core$async24235(f__$1,ch__$1,meta24233__$1,___$2,fn1__$1,meta24236));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24235(self__.f,self__.ch,self__.meta24233,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24233","meta24233",987630682,null)], null);
});

cljs.core.async.t_cljs$core$async24232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24232";

cljs.core.async.t_cljs$core$async24232.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24232");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24232.
 */
cljs.core.async.__GT_t_cljs$core$async24232 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24232(f__$1,ch__$1,meta24233){
return (new cljs.core.async.t_cljs$core$async24232(f__$1,ch__$1,meta24233));
});

}

return (new cljs.core.async.t_cljs$core$async24232(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24238 = (function (f,ch,meta24239){
this.f = f;
this.ch = ch;
this.meta24239 = meta24239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24240,meta24239__$1){
var self__ = this;
var _24240__$1 = this;
return (new cljs.core.async.t_cljs$core$async24238(self__.f,self__.ch,meta24239__$1));
});

cljs.core.async.t_cljs$core$async24238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24240){
var self__ = this;
var _24240__$1 = this;
return self__.meta24239;
});

cljs.core.async.t_cljs$core$async24238.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24238.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24238.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24239","meta24239",-148995607,null)], null);
});

cljs.core.async.t_cljs$core$async24238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24238";

cljs.core.async.t_cljs$core$async24238.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24238");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24238.
 */
cljs.core.async.__GT_t_cljs$core$async24238 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24238(f__$1,ch__$1,meta24239){
return (new cljs.core.async.t_cljs$core$async24238(f__$1,ch__$1,meta24239));
});

}

return (new cljs.core.async.t_cljs$core$async24238(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24241 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24241 = (function (p,ch,meta24242){
this.p = p;
this.ch = ch;
this.meta24242 = meta24242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24243,meta24242__$1){
var self__ = this;
var _24243__$1 = this;
return (new cljs.core.async.t_cljs$core$async24241(self__.p,self__.ch,meta24242__$1));
});

cljs.core.async.t_cljs$core$async24241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24243){
var self__ = this;
var _24243__$1 = this;
return self__.meta24242;
});

cljs.core.async.t_cljs$core$async24241.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24241.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24241.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24241.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24242","meta24242",-1363359973,null)], null);
});

cljs.core.async.t_cljs$core$async24241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24241";

cljs.core.async.t_cljs$core$async24241.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24241");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24241.
 */
cljs.core.async.__GT_t_cljs$core$async24241 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24241(p__$1,ch__$1,meta24242){
return (new cljs.core.async.t_cljs$core$async24241(p__$1,ch__$1,meta24242));
});

}

return (new cljs.core.async.t_cljs$core$async24241(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24245 = arguments.length;
switch (G__24245) {
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
var c__20882__auto___24285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___24285,out){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___24285,out){
return (function (state_24266){
var state_val_24267 = (state_24266[(1)]);
if((state_val_24267 === (7))){
var inst_24262 = (state_24266[(2)]);
var state_24266__$1 = state_24266;
var statearr_24268_24286 = state_24266__$1;
(statearr_24268_24286[(2)] = inst_24262);

(statearr_24268_24286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (1))){
var state_24266__$1 = state_24266;
var statearr_24269_24287 = state_24266__$1;
(statearr_24269_24287[(2)] = null);

(statearr_24269_24287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (4))){
var inst_24248 = (state_24266[(7)]);
var inst_24248__$1 = (state_24266[(2)]);
var inst_24249 = (inst_24248__$1 == null);
var state_24266__$1 = (function (){var statearr_24270 = state_24266;
(statearr_24270[(7)] = inst_24248__$1);

return statearr_24270;
})();
if(cljs.core.truth_(inst_24249)){
var statearr_24271_24288 = state_24266__$1;
(statearr_24271_24288[(1)] = (5));

} else {
var statearr_24272_24289 = state_24266__$1;
(statearr_24272_24289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (6))){
var inst_24248 = (state_24266[(7)]);
var inst_24253 = p.call(null,inst_24248);
var state_24266__$1 = state_24266;
if(cljs.core.truth_(inst_24253)){
var statearr_24273_24290 = state_24266__$1;
(statearr_24273_24290[(1)] = (8));

} else {
var statearr_24274_24291 = state_24266__$1;
(statearr_24274_24291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (3))){
var inst_24264 = (state_24266[(2)]);
var state_24266__$1 = state_24266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24266__$1,inst_24264);
} else {
if((state_val_24267 === (2))){
var state_24266__$1 = state_24266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24266__$1,(4),ch);
} else {
if((state_val_24267 === (11))){
var inst_24256 = (state_24266[(2)]);
var state_24266__$1 = state_24266;
var statearr_24275_24292 = state_24266__$1;
(statearr_24275_24292[(2)] = inst_24256);

(statearr_24275_24292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (9))){
var state_24266__$1 = state_24266;
var statearr_24276_24293 = state_24266__$1;
(statearr_24276_24293[(2)] = null);

(statearr_24276_24293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (5))){
var inst_24251 = cljs.core.async.close_BANG_.call(null,out);
var state_24266__$1 = state_24266;
var statearr_24277_24294 = state_24266__$1;
(statearr_24277_24294[(2)] = inst_24251);

(statearr_24277_24294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (10))){
var inst_24259 = (state_24266[(2)]);
var state_24266__$1 = (function (){var statearr_24278 = state_24266;
(statearr_24278[(8)] = inst_24259);

return statearr_24278;
})();
var statearr_24279_24295 = state_24266__$1;
(statearr_24279_24295[(2)] = null);

(statearr_24279_24295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (8))){
var inst_24248 = (state_24266[(7)]);
var state_24266__$1 = state_24266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24266__$1,(11),out,inst_24248);
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
});})(c__20882__auto___24285,out))
;
return ((function (switch__20715__auto__,c__20882__auto___24285,out){
return (function() {
var cljs$core$async$state_machine__20716__auto__ = null;
var cljs$core$async$state_machine__20716__auto____0 = (function (){
var statearr_24280 = [null,null,null,null,null,null,null,null,null];
(statearr_24280[(0)] = cljs$core$async$state_machine__20716__auto__);

(statearr_24280[(1)] = (1));

return statearr_24280;
});
var cljs$core$async$state_machine__20716__auto____1 = (function (state_24266){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_24266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e24281){if((e24281 instanceof Object)){
var ex__20719__auto__ = e24281;
var statearr_24282_24296 = state_24266;
(statearr_24282_24296[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24297 = state_24266;
state_24266 = G__24297;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$state_machine__20716__auto__ = function(state_24266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20716__auto____1.call(this,state_24266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20716__auto____0;
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20716__auto____1;
return cljs$core$async$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___24285,out))
})();
var state__20884__auto__ = (function (){var statearr_24283 = f__20883__auto__.call(null);
(statearr_24283[(6)] = c__20882__auto___24285);

return statearr_24283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___24285,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24299 = arguments.length;
switch (G__24299) {
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
var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__){
return (function (state_24362){
var state_val_24363 = (state_24362[(1)]);
if((state_val_24363 === (7))){
var inst_24358 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
var statearr_24364_24402 = state_24362__$1;
(statearr_24364_24402[(2)] = inst_24358);

(statearr_24364_24402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (20))){
var inst_24328 = (state_24362[(7)]);
var inst_24339 = (state_24362[(2)]);
var inst_24340 = cljs.core.next.call(null,inst_24328);
var inst_24314 = inst_24340;
var inst_24315 = null;
var inst_24316 = (0);
var inst_24317 = (0);
var state_24362__$1 = (function (){var statearr_24365 = state_24362;
(statearr_24365[(8)] = inst_24314);

(statearr_24365[(9)] = inst_24339);

(statearr_24365[(10)] = inst_24317);

(statearr_24365[(11)] = inst_24316);

(statearr_24365[(12)] = inst_24315);

return statearr_24365;
})();
var statearr_24366_24403 = state_24362__$1;
(statearr_24366_24403[(2)] = null);

(statearr_24366_24403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (1))){
var state_24362__$1 = state_24362;
var statearr_24367_24404 = state_24362__$1;
(statearr_24367_24404[(2)] = null);

(statearr_24367_24404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (4))){
var inst_24303 = (state_24362[(13)]);
var inst_24303__$1 = (state_24362[(2)]);
var inst_24304 = (inst_24303__$1 == null);
var state_24362__$1 = (function (){var statearr_24368 = state_24362;
(statearr_24368[(13)] = inst_24303__$1);

return statearr_24368;
})();
if(cljs.core.truth_(inst_24304)){
var statearr_24369_24405 = state_24362__$1;
(statearr_24369_24405[(1)] = (5));

} else {
var statearr_24370_24406 = state_24362__$1;
(statearr_24370_24406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (15))){
var state_24362__$1 = state_24362;
var statearr_24374_24407 = state_24362__$1;
(statearr_24374_24407[(2)] = null);

(statearr_24374_24407[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (21))){
var state_24362__$1 = state_24362;
var statearr_24375_24408 = state_24362__$1;
(statearr_24375_24408[(2)] = null);

(statearr_24375_24408[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (13))){
var inst_24314 = (state_24362[(8)]);
var inst_24317 = (state_24362[(10)]);
var inst_24316 = (state_24362[(11)]);
var inst_24315 = (state_24362[(12)]);
var inst_24324 = (state_24362[(2)]);
var inst_24325 = (inst_24317 + (1));
var tmp24371 = inst_24314;
var tmp24372 = inst_24316;
var tmp24373 = inst_24315;
var inst_24314__$1 = tmp24371;
var inst_24315__$1 = tmp24373;
var inst_24316__$1 = tmp24372;
var inst_24317__$1 = inst_24325;
var state_24362__$1 = (function (){var statearr_24376 = state_24362;
(statearr_24376[(8)] = inst_24314__$1);

(statearr_24376[(14)] = inst_24324);

(statearr_24376[(10)] = inst_24317__$1);

(statearr_24376[(11)] = inst_24316__$1);

(statearr_24376[(12)] = inst_24315__$1);

return statearr_24376;
})();
var statearr_24377_24409 = state_24362__$1;
(statearr_24377_24409[(2)] = null);

(statearr_24377_24409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (22))){
var state_24362__$1 = state_24362;
var statearr_24378_24410 = state_24362__$1;
(statearr_24378_24410[(2)] = null);

(statearr_24378_24410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (6))){
var inst_24303 = (state_24362[(13)]);
var inst_24312 = f.call(null,inst_24303);
var inst_24313 = cljs.core.seq.call(null,inst_24312);
var inst_24314 = inst_24313;
var inst_24315 = null;
var inst_24316 = (0);
var inst_24317 = (0);
var state_24362__$1 = (function (){var statearr_24379 = state_24362;
(statearr_24379[(8)] = inst_24314);

(statearr_24379[(10)] = inst_24317);

(statearr_24379[(11)] = inst_24316);

(statearr_24379[(12)] = inst_24315);

return statearr_24379;
})();
var statearr_24380_24411 = state_24362__$1;
(statearr_24380_24411[(2)] = null);

(statearr_24380_24411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (17))){
var inst_24328 = (state_24362[(7)]);
var inst_24332 = cljs.core.chunk_first.call(null,inst_24328);
var inst_24333 = cljs.core.chunk_rest.call(null,inst_24328);
var inst_24334 = cljs.core.count.call(null,inst_24332);
var inst_24314 = inst_24333;
var inst_24315 = inst_24332;
var inst_24316 = inst_24334;
var inst_24317 = (0);
var state_24362__$1 = (function (){var statearr_24381 = state_24362;
(statearr_24381[(8)] = inst_24314);

(statearr_24381[(10)] = inst_24317);

(statearr_24381[(11)] = inst_24316);

(statearr_24381[(12)] = inst_24315);

return statearr_24381;
})();
var statearr_24382_24412 = state_24362__$1;
(statearr_24382_24412[(2)] = null);

(statearr_24382_24412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (3))){
var inst_24360 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24362__$1,inst_24360);
} else {
if((state_val_24363 === (12))){
var inst_24348 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
var statearr_24383_24413 = state_24362__$1;
(statearr_24383_24413[(2)] = inst_24348);

(statearr_24383_24413[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (2))){
var state_24362__$1 = state_24362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24362__$1,(4),in$);
} else {
if((state_val_24363 === (23))){
var inst_24356 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
var statearr_24384_24414 = state_24362__$1;
(statearr_24384_24414[(2)] = inst_24356);

(statearr_24384_24414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (19))){
var inst_24343 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
var statearr_24385_24415 = state_24362__$1;
(statearr_24385_24415[(2)] = inst_24343);

(statearr_24385_24415[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (11))){
var inst_24314 = (state_24362[(8)]);
var inst_24328 = (state_24362[(7)]);
var inst_24328__$1 = cljs.core.seq.call(null,inst_24314);
var state_24362__$1 = (function (){var statearr_24386 = state_24362;
(statearr_24386[(7)] = inst_24328__$1);

return statearr_24386;
})();
if(inst_24328__$1){
var statearr_24387_24416 = state_24362__$1;
(statearr_24387_24416[(1)] = (14));

} else {
var statearr_24388_24417 = state_24362__$1;
(statearr_24388_24417[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (9))){
var inst_24350 = (state_24362[(2)]);
var inst_24351 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24362__$1 = (function (){var statearr_24389 = state_24362;
(statearr_24389[(15)] = inst_24350);

return statearr_24389;
})();
if(cljs.core.truth_(inst_24351)){
var statearr_24390_24418 = state_24362__$1;
(statearr_24390_24418[(1)] = (21));

} else {
var statearr_24391_24419 = state_24362__$1;
(statearr_24391_24419[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (5))){
var inst_24306 = cljs.core.async.close_BANG_.call(null,out);
var state_24362__$1 = state_24362;
var statearr_24392_24420 = state_24362__$1;
(statearr_24392_24420[(2)] = inst_24306);

(statearr_24392_24420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (14))){
var inst_24328 = (state_24362[(7)]);
var inst_24330 = cljs.core.chunked_seq_QMARK_.call(null,inst_24328);
var state_24362__$1 = state_24362;
if(inst_24330){
var statearr_24393_24421 = state_24362__$1;
(statearr_24393_24421[(1)] = (17));

} else {
var statearr_24394_24422 = state_24362__$1;
(statearr_24394_24422[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (16))){
var inst_24346 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
var statearr_24395_24423 = state_24362__$1;
(statearr_24395_24423[(2)] = inst_24346);

(statearr_24395_24423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24363 === (10))){
var inst_24317 = (state_24362[(10)]);
var inst_24315 = (state_24362[(12)]);
var inst_24322 = cljs.core._nth.call(null,inst_24315,inst_24317);
var state_24362__$1 = state_24362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24362__$1,(13),out,inst_24322);
} else {
if((state_val_24363 === (18))){
var inst_24328 = (state_24362[(7)]);
var inst_24337 = cljs.core.first.call(null,inst_24328);
var state_24362__$1 = state_24362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24362__$1,(20),out,inst_24337);
} else {
if((state_val_24363 === (8))){
var inst_24317 = (state_24362[(10)]);
var inst_24316 = (state_24362[(11)]);
var inst_24319 = (inst_24317 < inst_24316);
var inst_24320 = inst_24319;
var state_24362__$1 = state_24362;
if(cljs.core.truth_(inst_24320)){
var statearr_24396_24424 = state_24362__$1;
(statearr_24396_24424[(1)] = (10));

} else {
var statearr_24397_24425 = state_24362__$1;
(statearr_24397_24425[(1)] = (11));

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
});})(c__20882__auto__))
;
return ((function (switch__20715__auto__,c__20882__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20716__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20716__auto____0 = (function (){
var statearr_24398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24398[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20716__auto__);

(statearr_24398[(1)] = (1));

return statearr_24398;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20716__auto____1 = (function (state_24362){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_24362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e24399){if((e24399 instanceof Object)){
var ex__20719__auto__ = e24399;
var statearr_24400_24426 = state_24362;
(statearr_24400_24426[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24427 = state_24362;
state_24362 = G__24427;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20716__auto__ = function(state_24362){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20716__auto____1.call(this,state_24362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20716__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20716__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__))
})();
var state__20884__auto__ = (function (){var statearr_24401 = f__20883__auto__.call(null);
(statearr_24401[(6)] = c__20882__auto__);

return statearr_24401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__))
);

return c__20882__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24429 = arguments.length;
switch (G__24429) {
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
var G__24432 = arguments.length;
switch (G__24432) {
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
var G__24435 = arguments.length;
switch (G__24435) {
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
var c__20882__auto___24482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___24482,out){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___24482,out){
return (function (state_24459){
var state_val_24460 = (state_24459[(1)]);
if((state_val_24460 === (7))){
var inst_24454 = (state_24459[(2)]);
var state_24459__$1 = state_24459;
var statearr_24461_24483 = state_24459__$1;
(statearr_24461_24483[(2)] = inst_24454);

(statearr_24461_24483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24460 === (1))){
var inst_24436 = null;
var state_24459__$1 = (function (){var statearr_24462 = state_24459;
(statearr_24462[(7)] = inst_24436);

return statearr_24462;
})();
var statearr_24463_24484 = state_24459__$1;
(statearr_24463_24484[(2)] = null);

(statearr_24463_24484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24460 === (4))){
var inst_24439 = (state_24459[(8)]);
var inst_24439__$1 = (state_24459[(2)]);
var inst_24440 = (inst_24439__$1 == null);
var inst_24441 = cljs.core.not.call(null,inst_24440);
var state_24459__$1 = (function (){var statearr_24464 = state_24459;
(statearr_24464[(8)] = inst_24439__$1);

return statearr_24464;
})();
if(inst_24441){
var statearr_24465_24485 = state_24459__$1;
(statearr_24465_24485[(1)] = (5));

} else {
var statearr_24466_24486 = state_24459__$1;
(statearr_24466_24486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24460 === (6))){
var state_24459__$1 = state_24459;
var statearr_24467_24487 = state_24459__$1;
(statearr_24467_24487[(2)] = null);

(statearr_24467_24487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24460 === (3))){
var inst_24456 = (state_24459[(2)]);
var inst_24457 = cljs.core.async.close_BANG_.call(null,out);
var state_24459__$1 = (function (){var statearr_24468 = state_24459;
(statearr_24468[(9)] = inst_24456);

return statearr_24468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24459__$1,inst_24457);
} else {
if((state_val_24460 === (2))){
var state_24459__$1 = state_24459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24459__$1,(4),ch);
} else {
if((state_val_24460 === (11))){
var inst_24439 = (state_24459[(8)]);
var inst_24448 = (state_24459[(2)]);
var inst_24436 = inst_24439;
var state_24459__$1 = (function (){var statearr_24469 = state_24459;
(statearr_24469[(7)] = inst_24436);

(statearr_24469[(10)] = inst_24448);

return statearr_24469;
})();
var statearr_24470_24488 = state_24459__$1;
(statearr_24470_24488[(2)] = null);

(statearr_24470_24488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24460 === (9))){
var inst_24439 = (state_24459[(8)]);
var state_24459__$1 = state_24459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24459__$1,(11),out,inst_24439);
} else {
if((state_val_24460 === (5))){
var inst_24439 = (state_24459[(8)]);
var inst_24436 = (state_24459[(7)]);
var inst_24443 = cljs.core._EQ_.call(null,inst_24439,inst_24436);
var state_24459__$1 = state_24459;
if(inst_24443){
var statearr_24472_24489 = state_24459__$1;
(statearr_24472_24489[(1)] = (8));

} else {
var statearr_24473_24490 = state_24459__$1;
(statearr_24473_24490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24460 === (10))){
var inst_24451 = (state_24459[(2)]);
var state_24459__$1 = state_24459;
var statearr_24474_24491 = state_24459__$1;
(statearr_24474_24491[(2)] = inst_24451);

(statearr_24474_24491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24460 === (8))){
var inst_24436 = (state_24459[(7)]);
var tmp24471 = inst_24436;
var inst_24436__$1 = tmp24471;
var state_24459__$1 = (function (){var statearr_24475 = state_24459;
(statearr_24475[(7)] = inst_24436__$1);

return statearr_24475;
})();
var statearr_24476_24492 = state_24459__$1;
(statearr_24476_24492[(2)] = null);

(statearr_24476_24492[(1)] = (2));


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
});})(c__20882__auto___24482,out))
;
return ((function (switch__20715__auto__,c__20882__auto___24482,out){
return (function() {
var cljs$core$async$state_machine__20716__auto__ = null;
var cljs$core$async$state_machine__20716__auto____0 = (function (){
var statearr_24477 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24477[(0)] = cljs$core$async$state_machine__20716__auto__);

(statearr_24477[(1)] = (1));

return statearr_24477;
});
var cljs$core$async$state_machine__20716__auto____1 = (function (state_24459){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_24459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e24478){if((e24478 instanceof Object)){
var ex__20719__auto__ = e24478;
var statearr_24479_24493 = state_24459;
(statearr_24479_24493[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24494 = state_24459;
state_24459 = G__24494;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$state_machine__20716__auto__ = function(state_24459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20716__auto____1.call(this,state_24459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20716__auto____0;
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20716__auto____1;
return cljs$core$async$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___24482,out))
})();
var state__20884__auto__ = (function (){var statearr_24480 = f__20883__auto__.call(null);
(statearr_24480[(6)] = c__20882__auto___24482);

return statearr_24480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___24482,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24496 = arguments.length;
switch (G__24496) {
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
var c__20882__auto___24562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___24562,out){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___24562,out){
return (function (state_24534){
var state_val_24535 = (state_24534[(1)]);
if((state_val_24535 === (7))){
var inst_24530 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24536_24563 = state_24534__$1;
(statearr_24536_24563[(2)] = inst_24530);

(statearr_24536_24563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (1))){
var inst_24497 = (new Array(n));
var inst_24498 = inst_24497;
var inst_24499 = (0);
var state_24534__$1 = (function (){var statearr_24537 = state_24534;
(statearr_24537[(7)] = inst_24498);

(statearr_24537[(8)] = inst_24499);

return statearr_24537;
})();
var statearr_24538_24564 = state_24534__$1;
(statearr_24538_24564[(2)] = null);

(statearr_24538_24564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (4))){
var inst_24502 = (state_24534[(9)]);
var inst_24502__$1 = (state_24534[(2)]);
var inst_24503 = (inst_24502__$1 == null);
var inst_24504 = cljs.core.not.call(null,inst_24503);
var state_24534__$1 = (function (){var statearr_24539 = state_24534;
(statearr_24539[(9)] = inst_24502__$1);

return statearr_24539;
})();
if(inst_24504){
var statearr_24540_24565 = state_24534__$1;
(statearr_24540_24565[(1)] = (5));

} else {
var statearr_24541_24566 = state_24534__$1;
(statearr_24541_24566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (15))){
var inst_24524 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24542_24567 = state_24534__$1;
(statearr_24542_24567[(2)] = inst_24524);

(statearr_24542_24567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (13))){
var state_24534__$1 = state_24534;
var statearr_24543_24568 = state_24534__$1;
(statearr_24543_24568[(2)] = null);

(statearr_24543_24568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (6))){
var inst_24499 = (state_24534[(8)]);
var inst_24520 = (inst_24499 > (0));
var state_24534__$1 = state_24534;
if(cljs.core.truth_(inst_24520)){
var statearr_24544_24569 = state_24534__$1;
(statearr_24544_24569[(1)] = (12));

} else {
var statearr_24545_24570 = state_24534__$1;
(statearr_24545_24570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (3))){
var inst_24532 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24534__$1,inst_24532);
} else {
if((state_val_24535 === (12))){
var inst_24498 = (state_24534[(7)]);
var inst_24522 = cljs.core.vec.call(null,inst_24498);
var state_24534__$1 = state_24534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24534__$1,(15),out,inst_24522);
} else {
if((state_val_24535 === (2))){
var state_24534__$1 = state_24534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24534__$1,(4),ch);
} else {
if((state_val_24535 === (11))){
var inst_24514 = (state_24534[(2)]);
var inst_24515 = (new Array(n));
var inst_24498 = inst_24515;
var inst_24499 = (0);
var state_24534__$1 = (function (){var statearr_24546 = state_24534;
(statearr_24546[(7)] = inst_24498);

(statearr_24546[(10)] = inst_24514);

(statearr_24546[(8)] = inst_24499);

return statearr_24546;
})();
var statearr_24547_24571 = state_24534__$1;
(statearr_24547_24571[(2)] = null);

(statearr_24547_24571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (9))){
var inst_24498 = (state_24534[(7)]);
var inst_24512 = cljs.core.vec.call(null,inst_24498);
var state_24534__$1 = state_24534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24534__$1,(11),out,inst_24512);
} else {
if((state_val_24535 === (5))){
var inst_24507 = (state_24534[(11)]);
var inst_24498 = (state_24534[(7)]);
var inst_24502 = (state_24534[(9)]);
var inst_24499 = (state_24534[(8)]);
var inst_24506 = (inst_24498[inst_24499] = inst_24502);
var inst_24507__$1 = (inst_24499 + (1));
var inst_24508 = (inst_24507__$1 < n);
var state_24534__$1 = (function (){var statearr_24548 = state_24534;
(statearr_24548[(11)] = inst_24507__$1);

(statearr_24548[(12)] = inst_24506);

return statearr_24548;
})();
if(cljs.core.truth_(inst_24508)){
var statearr_24549_24572 = state_24534__$1;
(statearr_24549_24572[(1)] = (8));

} else {
var statearr_24550_24573 = state_24534__$1;
(statearr_24550_24573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (14))){
var inst_24527 = (state_24534[(2)]);
var inst_24528 = cljs.core.async.close_BANG_.call(null,out);
var state_24534__$1 = (function (){var statearr_24552 = state_24534;
(statearr_24552[(13)] = inst_24527);

return statearr_24552;
})();
var statearr_24553_24574 = state_24534__$1;
(statearr_24553_24574[(2)] = inst_24528);

(statearr_24553_24574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (10))){
var inst_24518 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24554_24575 = state_24534__$1;
(statearr_24554_24575[(2)] = inst_24518);

(statearr_24554_24575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (8))){
var inst_24507 = (state_24534[(11)]);
var inst_24498 = (state_24534[(7)]);
var tmp24551 = inst_24498;
var inst_24498__$1 = tmp24551;
var inst_24499 = inst_24507;
var state_24534__$1 = (function (){var statearr_24555 = state_24534;
(statearr_24555[(7)] = inst_24498__$1);

(statearr_24555[(8)] = inst_24499);

return statearr_24555;
})();
var statearr_24556_24576 = state_24534__$1;
(statearr_24556_24576[(2)] = null);

(statearr_24556_24576[(1)] = (2));


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
});})(c__20882__auto___24562,out))
;
return ((function (switch__20715__auto__,c__20882__auto___24562,out){
return (function() {
var cljs$core$async$state_machine__20716__auto__ = null;
var cljs$core$async$state_machine__20716__auto____0 = (function (){
var statearr_24557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24557[(0)] = cljs$core$async$state_machine__20716__auto__);

(statearr_24557[(1)] = (1));

return statearr_24557;
});
var cljs$core$async$state_machine__20716__auto____1 = (function (state_24534){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_24534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e24558){if((e24558 instanceof Object)){
var ex__20719__auto__ = e24558;
var statearr_24559_24577 = state_24534;
(statearr_24559_24577[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24578 = state_24534;
state_24534 = G__24578;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$state_machine__20716__auto__ = function(state_24534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20716__auto____1.call(this,state_24534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20716__auto____0;
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20716__auto____1;
return cljs$core$async$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___24562,out))
})();
var state__20884__auto__ = (function (){var statearr_24560 = f__20883__auto__.call(null);
(statearr_24560[(6)] = c__20882__auto___24562);

return statearr_24560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___24562,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24580 = arguments.length;
switch (G__24580) {
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
var c__20882__auto___24650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto___24650,out){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto___24650,out){
return (function (state_24622){
var state_val_24623 = (state_24622[(1)]);
if((state_val_24623 === (7))){
var inst_24618 = (state_24622[(2)]);
var state_24622__$1 = state_24622;
var statearr_24624_24651 = state_24622__$1;
(statearr_24624_24651[(2)] = inst_24618);

(statearr_24624_24651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (1))){
var inst_24581 = [];
var inst_24582 = inst_24581;
var inst_24583 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24622__$1 = (function (){var statearr_24625 = state_24622;
(statearr_24625[(7)] = inst_24583);

(statearr_24625[(8)] = inst_24582);

return statearr_24625;
})();
var statearr_24626_24652 = state_24622__$1;
(statearr_24626_24652[(2)] = null);

(statearr_24626_24652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (4))){
var inst_24586 = (state_24622[(9)]);
var inst_24586__$1 = (state_24622[(2)]);
var inst_24587 = (inst_24586__$1 == null);
var inst_24588 = cljs.core.not.call(null,inst_24587);
var state_24622__$1 = (function (){var statearr_24627 = state_24622;
(statearr_24627[(9)] = inst_24586__$1);

return statearr_24627;
})();
if(inst_24588){
var statearr_24628_24653 = state_24622__$1;
(statearr_24628_24653[(1)] = (5));

} else {
var statearr_24629_24654 = state_24622__$1;
(statearr_24629_24654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (15))){
var inst_24612 = (state_24622[(2)]);
var state_24622__$1 = state_24622;
var statearr_24630_24655 = state_24622__$1;
(statearr_24630_24655[(2)] = inst_24612);

(statearr_24630_24655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (13))){
var state_24622__$1 = state_24622;
var statearr_24631_24656 = state_24622__$1;
(statearr_24631_24656[(2)] = null);

(statearr_24631_24656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (6))){
var inst_24582 = (state_24622[(8)]);
var inst_24607 = inst_24582.length;
var inst_24608 = (inst_24607 > (0));
var state_24622__$1 = state_24622;
if(cljs.core.truth_(inst_24608)){
var statearr_24632_24657 = state_24622__$1;
(statearr_24632_24657[(1)] = (12));

} else {
var statearr_24633_24658 = state_24622__$1;
(statearr_24633_24658[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (3))){
var inst_24620 = (state_24622[(2)]);
var state_24622__$1 = state_24622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24622__$1,inst_24620);
} else {
if((state_val_24623 === (12))){
var inst_24582 = (state_24622[(8)]);
var inst_24610 = cljs.core.vec.call(null,inst_24582);
var state_24622__$1 = state_24622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24622__$1,(15),out,inst_24610);
} else {
if((state_val_24623 === (2))){
var state_24622__$1 = state_24622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24622__$1,(4),ch);
} else {
if((state_val_24623 === (11))){
var inst_24590 = (state_24622[(10)]);
var inst_24586 = (state_24622[(9)]);
var inst_24600 = (state_24622[(2)]);
var inst_24601 = [];
var inst_24602 = inst_24601.push(inst_24586);
var inst_24582 = inst_24601;
var inst_24583 = inst_24590;
var state_24622__$1 = (function (){var statearr_24634 = state_24622;
(statearr_24634[(11)] = inst_24600);

(statearr_24634[(12)] = inst_24602);

(statearr_24634[(7)] = inst_24583);

(statearr_24634[(8)] = inst_24582);

return statearr_24634;
})();
var statearr_24635_24659 = state_24622__$1;
(statearr_24635_24659[(2)] = null);

(statearr_24635_24659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (9))){
var inst_24582 = (state_24622[(8)]);
var inst_24598 = cljs.core.vec.call(null,inst_24582);
var state_24622__$1 = state_24622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24622__$1,(11),out,inst_24598);
} else {
if((state_val_24623 === (5))){
var inst_24590 = (state_24622[(10)]);
var inst_24586 = (state_24622[(9)]);
var inst_24583 = (state_24622[(7)]);
var inst_24590__$1 = f.call(null,inst_24586);
var inst_24591 = cljs.core._EQ_.call(null,inst_24590__$1,inst_24583);
var inst_24592 = cljs.core.keyword_identical_QMARK_.call(null,inst_24583,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24593 = ((inst_24591) || (inst_24592));
var state_24622__$1 = (function (){var statearr_24636 = state_24622;
(statearr_24636[(10)] = inst_24590__$1);

return statearr_24636;
})();
if(cljs.core.truth_(inst_24593)){
var statearr_24637_24660 = state_24622__$1;
(statearr_24637_24660[(1)] = (8));

} else {
var statearr_24638_24661 = state_24622__$1;
(statearr_24638_24661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (14))){
var inst_24615 = (state_24622[(2)]);
var inst_24616 = cljs.core.async.close_BANG_.call(null,out);
var state_24622__$1 = (function (){var statearr_24640 = state_24622;
(statearr_24640[(13)] = inst_24615);

return statearr_24640;
})();
var statearr_24641_24662 = state_24622__$1;
(statearr_24641_24662[(2)] = inst_24616);

(statearr_24641_24662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (10))){
var inst_24605 = (state_24622[(2)]);
var state_24622__$1 = state_24622;
var statearr_24642_24663 = state_24622__$1;
(statearr_24642_24663[(2)] = inst_24605);

(statearr_24642_24663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24623 === (8))){
var inst_24590 = (state_24622[(10)]);
var inst_24586 = (state_24622[(9)]);
var inst_24582 = (state_24622[(8)]);
var inst_24595 = inst_24582.push(inst_24586);
var tmp24639 = inst_24582;
var inst_24582__$1 = tmp24639;
var inst_24583 = inst_24590;
var state_24622__$1 = (function (){var statearr_24643 = state_24622;
(statearr_24643[(7)] = inst_24583);

(statearr_24643[(8)] = inst_24582__$1);

(statearr_24643[(14)] = inst_24595);

return statearr_24643;
})();
var statearr_24644_24664 = state_24622__$1;
(statearr_24644_24664[(2)] = null);

(statearr_24644_24664[(1)] = (2));


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
});})(c__20882__auto___24650,out))
;
return ((function (switch__20715__auto__,c__20882__auto___24650,out){
return (function() {
var cljs$core$async$state_machine__20716__auto__ = null;
var cljs$core$async$state_machine__20716__auto____0 = (function (){
var statearr_24645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24645[(0)] = cljs$core$async$state_machine__20716__auto__);

(statearr_24645[(1)] = (1));

return statearr_24645;
});
var cljs$core$async$state_machine__20716__auto____1 = (function (state_24622){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_24622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e24646){if((e24646 instanceof Object)){
var ex__20719__auto__ = e24646;
var statearr_24647_24665 = state_24622;
(statearr_24647_24665[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24666 = state_24622;
state_24622 = G__24666;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
cljs$core$async$state_machine__20716__auto__ = function(state_24622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20716__auto____1.call(this,state_24622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20716__auto____0;
cljs$core$async$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20716__auto____1;
return cljs$core$async$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto___24650,out))
})();
var state__20884__auto__ = (function (){var statearr_24648 = f__20883__auto__.call(null);
(statearr_24648[(6)] = c__20882__auto___24650);

return statearr_24648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto___24650,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
