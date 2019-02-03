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
var G__15794 = arguments.length;
switch (G__15794) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15795 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15795 = (function (f,blockable,meta15796){
this.f = f;
this.blockable = blockable;
this.meta15796 = meta15796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15797,meta15796__$1){
var self__ = this;
var _15797__$1 = this;
return (new cljs.core.async.t_cljs$core$async15795(self__.f,self__.blockable,meta15796__$1));
});

cljs.core.async.t_cljs$core$async15795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15797){
var self__ = this;
var _15797__$1 = this;
return self__.meta15796;
});

cljs.core.async.t_cljs$core$async15795.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15795.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15796","meta15796",-248719423,null)], null);
});

cljs.core.async.t_cljs$core$async15795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15795";

cljs.core.async.t_cljs$core$async15795.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15795");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15795.
 */
cljs.core.async.__GT_t_cljs$core$async15795 = (function cljs$core$async$__GT_t_cljs$core$async15795(f__$1,blockable__$1,meta15796){
return (new cljs.core.async.t_cljs$core$async15795(f__$1,blockable__$1,meta15796));
});

}

return (new cljs.core.async.t_cljs$core$async15795(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15801 = arguments.length;
switch (G__15801) {
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
var G__15804 = arguments.length;
switch (G__15804) {
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
var G__15807 = arguments.length;
switch (G__15807) {
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
var val_15809 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15809);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15809,ret){
return (function (){
return fn1.call(null,val_15809);
});})(val_15809,ret))
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
var G__15811 = arguments.length;
switch (G__15811) {
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
var n__4607__auto___15813 = n;
var x_15814 = (0);
while(true){
if((x_15814 < n__4607__auto___15813)){
(a[x_15814] = (0));

var G__15815 = (x_15814 + (1));
x_15814 = G__15815;
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

var G__15816 = (i + (1));
i = G__15816;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15817 = (function (flag,meta15818){
this.flag = flag;
this.meta15818 = meta15818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15819,meta15818__$1){
var self__ = this;
var _15819__$1 = this;
return (new cljs.core.async.t_cljs$core$async15817(self__.flag,meta15818__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15819){
var self__ = this;
var _15819__$1 = this;
return self__.meta15818;
});})(flag))
;

cljs.core.async.t_cljs$core$async15817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15817.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15818","meta15818",1545690591,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15817";

cljs.core.async.t_cljs$core$async15817.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15817");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15817.
 */
cljs.core.async.__GT_t_cljs$core$async15817 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15817(flag__$1,meta15818){
return (new cljs.core.async.t_cljs$core$async15817(flag__$1,meta15818));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15817(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15820 = (function (flag,cb,meta15821){
this.flag = flag;
this.cb = cb;
this.meta15821 = meta15821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15822,meta15821__$1){
var self__ = this;
var _15822__$1 = this;
return (new cljs.core.async.t_cljs$core$async15820(self__.flag,self__.cb,meta15821__$1));
});

cljs.core.async.t_cljs$core$async15820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15822){
var self__ = this;
var _15822__$1 = this;
return self__.meta15821;
});

cljs.core.async.t_cljs$core$async15820.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15821","meta15821",884514807,null)], null);
});

cljs.core.async.t_cljs$core$async15820.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15820";

cljs.core.async.t_cljs$core$async15820.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15820");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15820.
 */
cljs.core.async.__GT_t_cljs$core$async15820 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15820(flag__$1,cb__$1,meta15821){
return (new cljs.core.async.t_cljs$core$async15820(flag__$1,cb__$1,meta15821));
});

}

return (new cljs.core.async.t_cljs$core$async15820(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15823_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15823_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15824_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15824_SHARP_,port], null));
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
var G__15825 = (i + (1));
i = G__15825;
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
var len__4730__auto___15831 = arguments.length;
var i__4731__auto___15832 = (0);
while(true){
if((i__4731__auto___15832 < len__4730__auto___15831)){
args__4736__auto__.push((arguments[i__4731__auto___15832]));

var G__15833 = (i__4731__auto___15832 + (1));
i__4731__auto___15832 = G__15833;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15828){
var map__15829 = p__15828;
var map__15829__$1 = (((((!((map__15829 == null))))?(((((map__15829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15829):map__15829);
var opts = map__15829__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15826){
var G__15827 = cljs.core.first.call(null,seq15826);
var seq15826__$1 = cljs.core.next.call(null,seq15826);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15827,seq15826__$1);
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
var G__15835 = arguments.length;
switch (G__15835) {
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
var c__15734__auto___15881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___15881){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___15881){
return (function (state_15859){
var state_val_15860 = (state_15859[(1)]);
if((state_val_15860 === (7))){
var inst_15855 = (state_15859[(2)]);
var state_15859__$1 = state_15859;
var statearr_15861_15882 = state_15859__$1;
(statearr_15861_15882[(2)] = inst_15855);

(statearr_15861_15882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (1))){
var state_15859__$1 = state_15859;
var statearr_15862_15883 = state_15859__$1;
(statearr_15862_15883[(2)] = null);

(statearr_15862_15883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (4))){
var inst_15838 = (state_15859[(7)]);
var inst_15838__$1 = (state_15859[(2)]);
var inst_15839 = (inst_15838__$1 == null);
var state_15859__$1 = (function (){var statearr_15863 = state_15859;
(statearr_15863[(7)] = inst_15838__$1);

return statearr_15863;
})();
if(cljs.core.truth_(inst_15839)){
var statearr_15864_15884 = state_15859__$1;
(statearr_15864_15884[(1)] = (5));

} else {
var statearr_15865_15885 = state_15859__$1;
(statearr_15865_15885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (13))){
var state_15859__$1 = state_15859;
var statearr_15866_15886 = state_15859__$1;
(statearr_15866_15886[(2)] = null);

(statearr_15866_15886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (6))){
var inst_15838 = (state_15859[(7)]);
var state_15859__$1 = state_15859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15859__$1,(11),to,inst_15838);
} else {
if((state_val_15860 === (3))){
var inst_15857 = (state_15859[(2)]);
var state_15859__$1 = state_15859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15859__$1,inst_15857);
} else {
if((state_val_15860 === (12))){
var state_15859__$1 = state_15859;
var statearr_15867_15887 = state_15859__$1;
(statearr_15867_15887[(2)] = null);

(statearr_15867_15887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (2))){
var state_15859__$1 = state_15859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15859__$1,(4),from);
} else {
if((state_val_15860 === (11))){
var inst_15848 = (state_15859[(2)]);
var state_15859__$1 = state_15859;
if(cljs.core.truth_(inst_15848)){
var statearr_15868_15888 = state_15859__$1;
(statearr_15868_15888[(1)] = (12));

} else {
var statearr_15869_15889 = state_15859__$1;
(statearr_15869_15889[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (9))){
var state_15859__$1 = state_15859;
var statearr_15870_15890 = state_15859__$1;
(statearr_15870_15890[(2)] = null);

(statearr_15870_15890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (5))){
var state_15859__$1 = state_15859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15871_15891 = state_15859__$1;
(statearr_15871_15891[(1)] = (8));

} else {
var statearr_15872_15892 = state_15859__$1;
(statearr_15872_15892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (14))){
var inst_15853 = (state_15859[(2)]);
var state_15859__$1 = state_15859;
var statearr_15873_15893 = state_15859__$1;
(statearr_15873_15893[(2)] = inst_15853);

(statearr_15873_15893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (10))){
var inst_15845 = (state_15859[(2)]);
var state_15859__$1 = state_15859;
var statearr_15874_15894 = state_15859__$1;
(statearr_15874_15894[(2)] = inst_15845);

(statearr_15874_15894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (8))){
var inst_15842 = cljs.core.async.close_BANG_.call(null,to);
var state_15859__$1 = state_15859;
var statearr_15875_15895 = state_15859__$1;
(statearr_15875_15895[(2)] = inst_15842);

(statearr_15875_15895[(1)] = (10));


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
});})(c__15734__auto___15881))
;
return ((function (switch__15639__auto__,c__15734__auto___15881){
return (function() {
var cljs$core$async$state_machine__15640__auto__ = null;
var cljs$core$async$state_machine__15640__auto____0 = (function (){
var statearr_15876 = [null,null,null,null,null,null,null,null];
(statearr_15876[(0)] = cljs$core$async$state_machine__15640__auto__);

(statearr_15876[(1)] = (1));

return statearr_15876;
});
var cljs$core$async$state_machine__15640__auto____1 = (function (state_15859){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_15859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e15877){if((e15877 instanceof Object)){
var ex__15643__auto__ = e15877;
var statearr_15878_15896 = state_15859;
(statearr_15878_15896[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15897 = state_15859;
state_15859 = G__15897;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$state_machine__15640__auto__ = function(state_15859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15640__auto____1.call(this,state_15859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15640__auto____0;
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15640__auto____1;
return cljs$core$async$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___15881))
})();
var state__15736__auto__ = (function (){var statearr_15879 = f__15735__auto__.call(null);
(statearr_15879[(6)] = c__15734__auto___15881);

return statearr_15879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___15881))
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
return (function (p__15898){
var vec__15899 = p__15898;
var v = cljs.core.nth.call(null,vec__15899,(0),null);
var p = cljs.core.nth.call(null,vec__15899,(1),null);
var job = vec__15899;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15734__auto___16070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___16070,res,vec__15899,v,p,job,jobs,results){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___16070,res,vec__15899,v,p,job,jobs,results){
return (function (state_15906){
var state_val_15907 = (state_15906[(1)]);
if((state_val_15907 === (1))){
var state_15906__$1 = state_15906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15906__$1,(2),res,v);
} else {
if((state_val_15907 === (2))){
var inst_15903 = (state_15906[(2)]);
var inst_15904 = cljs.core.async.close_BANG_.call(null,res);
var state_15906__$1 = (function (){var statearr_15908 = state_15906;
(statearr_15908[(7)] = inst_15903);

return statearr_15908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15906__$1,inst_15904);
} else {
return null;
}
}
});})(c__15734__auto___16070,res,vec__15899,v,p,job,jobs,results))
;
return ((function (switch__15639__auto__,c__15734__auto___16070,res,vec__15899,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0 = (function (){
var statearr_15909 = [null,null,null,null,null,null,null,null];
(statearr_15909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__);

(statearr_15909[(1)] = (1));

return statearr_15909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1 = (function (state_15906){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_15906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e15910){if((e15910 instanceof Object)){
var ex__15643__auto__ = e15910;
var statearr_15911_16071 = state_15906;
(statearr_15911_16071[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16072 = state_15906;
state_15906 = G__16072;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__ = function(state_15906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1.call(this,state_15906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___16070,res,vec__15899,v,p,job,jobs,results))
})();
var state__15736__auto__ = (function (){var statearr_15912 = f__15735__auto__.call(null);
(statearr_15912[(6)] = c__15734__auto___16070);

return statearr_15912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___16070,res,vec__15899,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15913){
var vec__15914 = p__15913;
var v = cljs.core.nth.call(null,vec__15914,(0),null);
var p = cljs.core.nth.call(null,vec__15914,(1),null);
var job = vec__15914;
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
var n__4607__auto___16073 = n;
var __16074 = (0);
while(true){
if((__16074 < n__4607__auto___16073)){
var G__15917_16075 = type;
var G__15917_16076__$1 = (((G__15917_16075 instanceof cljs.core.Keyword))?G__15917_16075.fqn:null);
switch (G__15917_16076__$1) {
case "compute":
var c__15734__auto___16078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16074,c__15734__auto___16078,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (__16074,c__15734__auto___16078,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async){
return (function (state_15930){
var state_val_15931 = (state_15930[(1)]);
if((state_val_15931 === (1))){
var state_15930__$1 = state_15930;
var statearr_15932_16079 = state_15930__$1;
(statearr_15932_16079[(2)] = null);

(statearr_15932_16079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (2))){
var state_15930__$1 = state_15930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15930__$1,(4),jobs);
} else {
if((state_val_15931 === (3))){
var inst_15928 = (state_15930[(2)]);
var state_15930__$1 = state_15930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15930__$1,inst_15928);
} else {
if((state_val_15931 === (4))){
var inst_15920 = (state_15930[(2)]);
var inst_15921 = process.call(null,inst_15920);
var state_15930__$1 = state_15930;
if(cljs.core.truth_(inst_15921)){
var statearr_15933_16080 = state_15930__$1;
(statearr_15933_16080[(1)] = (5));

} else {
var statearr_15934_16081 = state_15930__$1;
(statearr_15934_16081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (5))){
var state_15930__$1 = state_15930;
var statearr_15935_16082 = state_15930__$1;
(statearr_15935_16082[(2)] = null);

(statearr_15935_16082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (6))){
var state_15930__$1 = state_15930;
var statearr_15936_16083 = state_15930__$1;
(statearr_15936_16083[(2)] = null);

(statearr_15936_16083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (7))){
var inst_15926 = (state_15930[(2)]);
var state_15930__$1 = state_15930;
var statearr_15937_16084 = state_15930__$1;
(statearr_15937_16084[(2)] = inst_15926);

(statearr_15937_16084[(1)] = (3));


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
});})(__16074,c__15734__auto___16078,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async))
;
return ((function (__16074,switch__15639__auto__,c__15734__auto___16078,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0 = (function (){
var statearr_15938 = [null,null,null,null,null,null,null];
(statearr_15938[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__);

(statearr_15938[(1)] = (1));

return statearr_15938;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1 = (function (state_15930){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_15930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e15939){if((e15939 instanceof Object)){
var ex__15643__auto__ = e15939;
var statearr_15940_16085 = state_15930;
(statearr_15940_16085[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16086 = state_15930;
state_15930 = G__16086;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__ = function(state_15930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1.call(this,state_15930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__;
})()
;})(__16074,switch__15639__auto__,c__15734__auto___16078,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async))
})();
var state__15736__auto__ = (function (){var statearr_15941 = f__15735__auto__.call(null);
(statearr_15941[(6)] = c__15734__auto___16078);

return statearr_15941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(__16074,c__15734__auto___16078,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async))
);


break;
case "async":
var c__15734__auto___16087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16074,c__15734__auto___16087,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (__16074,c__15734__auto___16087,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async){
return (function (state_15954){
var state_val_15955 = (state_15954[(1)]);
if((state_val_15955 === (1))){
var state_15954__$1 = state_15954;
var statearr_15956_16088 = state_15954__$1;
(statearr_15956_16088[(2)] = null);

(statearr_15956_16088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (2))){
var state_15954__$1 = state_15954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15954__$1,(4),jobs);
} else {
if((state_val_15955 === (3))){
var inst_15952 = (state_15954[(2)]);
var state_15954__$1 = state_15954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15954__$1,inst_15952);
} else {
if((state_val_15955 === (4))){
var inst_15944 = (state_15954[(2)]);
var inst_15945 = async.call(null,inst_15944);
var state_15954__$1 = state_15954;
if(cljs.core.truth_(inst_15945)){
var statearr_15957_16089 = state_15954__$1;
(statearr_15957_16089[(1)] = (5));

} else {
var statearr_15958_16090 = state_15954__$1;
(statearr_15958_16090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (5))){
var state_15954__$1 = state_15954;
var statearr_15959_16091 = state_15954__$1;
(statearr_15959_16091[(2)] = null);

(statearr_15959_16091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (6))){
var state_15954__$1 = state_15954;
var statearr_15960_16092 = state_15954__$1;
(statearr_15960_16092[(2)] = null);

(statearr_15960_16092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15955 === (7))){
var inst_15950 = (state_15954[(2)]);
var state_15954__$1 = state_15954;
var statearr_15961_16093 = state_15954__$1;
(statearr_15961_16093[(2)] = inst_15950);

(statearr_15961_16093[(1)] = (3));


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
});})(__16074,c__15734__auto___16087,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async))
;
return ((function (__16074,switch__15639__auto__,c__15734__auto___16087,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0 = (function (){
var statearr_15962 = [null,null,null,null,null,null,null];
(statearr_15962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__);

(statearr_15962[(1)] = (1));

return statearr_15962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1 = (function (state_15954){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_15954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e15963){if((e15963 instanceof Object)){
var ex__15643__auto__ = e15963;
var statearr_15964_16094 = state_15954;
(statearr_15964_16094[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16095 = state_15954;
state_15954 = G__16095;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__ = function(state_15954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1.call(this,state_15954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__;
})()
;})(__16074,switch__15639__auto__,c__15734__auto___16087,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async))
})();
var state__15736__auto__ = (function (){var statearr_15965 = f__15735__auto__.call(null);
(statearr_15965[(6)] = c__15734__auto___16087);

return statearr_15965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(__16074,c__15734__auto___16087,G__15917_16075,G__15917_16076__$1,n__4607__auto___16073,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15917_16076__$1)].join('')));

}

var G__16096 = (__16074 + (1));
__16074 = G__16096;
continue;
} else {
}
break;
}

var c__15734__auto___16097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___16097,jobs,results,process,async){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___16097,jobs,results,process,async){
return (function (state_15987){
var state_val_15988 = (state_15987[(1)]);
if((state_val_15988 === (7))){
var inst_15983 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
var statearr_15989_16098 = state_15987__$1;
(statearr_15989_16098[(2)] = inst_15983);

(statearr_15989_16098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (1))){
var state_15987__$1 = state_15987;
var statearr_15990_16099 = state_15987__$1;
(statearr_15990_16099[(2)] = null);

(statearr_15990_16099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (4))){
var inst_15968 = (state_15987[(7)]);
var inst_15968__$1 = (state_15987[(2)]);
var inst_15969 = (inst_15968__$1 == null);
var state_15987__$1 = (function (){var statearr_15991 = state_15987;
(statearr_15991[(7)] = inst_15968__$1);

return statearr_15991;
})();
if(cljs.core.truth_(inst_15969)){
var statearr_15992_16100 = state_15987__$1;
(statearr_15992_16100[(1)] = (5));

} else {
var statearr_15993_16101 = state_15987__$1;
(statearr_15993_16101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (6))){
var inst_15973 = (state_15987[(8)]);
var inst_15968 = (state_15987[(7)]);
var inst_15973__$1 = cljs.core.async.chan.call(null,(1));
var inst_15974 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15975 = [inst_15968,inst_15973__$1];
var inst_15976 = (new cljs.core.PersistentVector(null,2,(5),inst_15974,inst_15975,null));
var state_15987__$1 = (function (){var statearr_15994 = state_15987;
(statearr_15994[(8)] = inst_15973__$1);

return statearr_15994;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15987__$1,(8),jobs,inst_15976);
} else {
if((state_val_15988 === (3))){
var inst_15985 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15987__$1,inst_15985);
} else {
if((state_val_15988 === (2))){
var state_15987__$1 = state_15987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15987__$1,(4),from);
} else {
if((state_val_15988 === (9))){
var inst_15980 = (state_15987[(2)]);
var state_15987__$1 = (function (){var statearr_15995 = state_15987;
(statearr_15995[(9)] = inst_15980);

return statearr_15995;
})();
var statearr_15996_16102 = state_15987__$1;
(statearr_15996_16102[(2)] = null);

(statearr_15996_16102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (5))){
var inst_15971 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15987__$1 = state_15987;
var statearr_15997_16103 = state_15987__$1;
(statearr_15997_16103[(2)] = inst_15971);

(statearr_15997_16103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (8))){
var inst_15973 = (state_15987[(8)]);
var inst_15978 = (state_15987[(2)]);
var state_15987__$1 = (function (){var statearr_15998 = state_15987;
(statearr_15998[(10)] = inst_15978);

return statearr_15998;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15987__$1,(9),results,inst_15973);
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
});})(c__15734__auto___16097,jobs,results,process,async))
;
return ((function (switch__15639__auto__,c__15734__auto___16097,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0 = (function (){
var statearr_15999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__);

(statearr_15999[(1)] = (1));

return statearr_15999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1 = (function (state_15987){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_15987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e16000){if((e16000 instanceof Object)){
var ex__15643__auto__ = e16000;
var statearr_16001_16104 = state_15987;
(statearr_16001_16104[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16105 = state_15987;
state_15987 = G__16105;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__ = function(state_15987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1.call(this,state_15987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___16097,jobs,results,process,async))
})();
var state__15736__auto__ = (function (){var statearr_16002 = f__15735__auto__.call(null);
(statearr_16002[(6)] = c__15734__auto___16097);

return statearr_16002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___16097,jobs,results,process,async))
);


var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__,jobs,results,process,async){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__,jobs,results,process,async){
return (function (state_16040){
var state_val_16041 = (state_16040[(1)]);
if((state_val_16041 === (7))){
var inst_16036 = (state_16040[(2)]);
var state_16040__$1 = state_16040;
var statearr_16042_16106 = state_16040__$1;
(statearr_16042_16106[(2)] = inst_16036);

(statearr_16042_16106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (20))){
var state_16040__$1 = state_16040;
var statearr_16043_16107 = state_16040__$1;
(statearr_16043_16107[(2)] = null);

(statearr_16043_16107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (1))){
var state_16040__$1 = state_16040;
var statearr_16044_16108 = state_16040__$1;
(statearr_16044_16108[(2)] = null);

(statearr_16044_16108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (4))){
var inst_16005 = (state_16040[(7)]);
var inst_16005__$1 = (state_16040[(2)]);
var inst_16006 = (inst_16005__$1 == null);
var state_16040__$1 = (function (){var statearr_16045 = state_16040;
(statearr_16045[(7)] = inst_16005__$1);

return statearr_16045;
})();
if(cljs.core.truth_(inst_16006)){
var statearr_16046_16109 = state_16040__$1;
(statearr_16046_16109[(1)] = (5));

} else {
var statearr_16047_16110 = state_16040__$1;
(statearr_16047_16110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (15))){
var inst_16018 = (state_16040[(8)]);
var state_16040__$1 = state_16040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16040__$1,(18),to,inst_16018);
} else {
if((state_val_16041 === (21))){
var inst_16031 = (state_16040[(2)]);
var state_16040__$1 = state_16040;
var statearr_16048_16111 = state_16040__$1;
(statearr_16048_16111[(2)] = inst_16031);

(statearr_16048_16111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (13))){
var inst_16033 = (state_16040[(2)]);
var state_16040__$1 = (function (){var statearr_16049 = state_16040;
(statearr_16049[(9)] = inst_16033);

return statearr_16049;
})();
var statearr_16050_16112 = state_16040__$1;
(statearr_16050_16112[(2)] = null);

(statearr_16050_16112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (6))){
var inst_16005 = (state_16040[(7)]);
var state_16040__$1 = state_16040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16040__$1,(11),inst_16005);
} else {
if((state_val_16041 === (17))){
var inst_16026 = (state_16040[(2)]);
var state_16040__$1 = state_16040;
if(cljs.core.truth_(inst_16026)){
var statearr_16051_16113 = state_16040__$1;
(statearr_16051_16113[(1)] = (19));

} else {
var statearr_16052_16114 = state_16040__$1;
(statearr_16052_16114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (3))){
var inst_16038 = (state_16040[(2)]);
var state_16040__$1 = state_16040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16040__$1,inst_16038);
} else {
if((state_val_16041 === (12))){
var inst_16015 = (state_16040[(10)]);
var state_16040__$1 = state_16040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16040__$1,(14),inst_16015);
} else {
if((state_val_16041 === (2))){
var state_16040__$1 = state_16040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16040__$1,(4),results);
} else {
if((state_val_16041 === (19))){
var state_16040__$1 = state_16040;
var statearr_16053_16115 = state_16040__$1;
(statearr_16053_16115[(2)] = null);

(statearr_16053_16115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (11))){
var inst_16015 = (state_16040[(2)]);
var state_16040__$1 = (function (){var statearr_16054 = state_16040;
(statearr_16054[(10)] = inst_16015);

return statearr_16054;
})();
var statearr_16055_16116 = state_16040__$1;
(statearr_16055_16116[(2)] = null);

(statearr_16055_16116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (9))){
var state_16040__$1 = state_16040;
var statearr_16056_16117 = state_16040__$1;
(statearr_16056_16117[(2)] = null);

(statearr_16056_16117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (5))){
var state_16040__$1 = state_16040;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16057_16118 = state_16040__$1;
(statearr_16057_16118[(1)] = (8));

} else {
var statearr_16058_16119 = state_16040__$1;
(statearr_16058_16119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (14))){
var inst_16020 = (state_16040[(11)]);
var inst_16018 = (state_16040[(8)]);
var inst_16018__$1 = (state_16040[(2)]);
var inst_16019 = (inst_16018__$1 == null);
var inst_16020__$1 = cljs.core.not.call(null,inst_16019);
var state_16040__$1 = (function (){var statearr_16059 = state_16040;
(statearr_16059[(11)] = inst_16020__$1);

(statearr_16059[(8)] = inst_16018__$1);

return statearr_16059;
})();
if(inst_16020__$1){
var statearr_16060_16120 = state_16040__$1;
(statearr_16060_16120[(1)] = (15));

} else {
var statearr_16061_16121 = state_16040__$1;
(statearr_16061_16121[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (16))){
var inst_16020 = (state_16040[(11)]);
var state_16040__$1 = state_16040;
var statearr_16062_16122 = state_16040__$1;
(statearr_16062_16122[(2)] = inst_16020);

(statearr_16062_16122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (10))){
var inst_16012 = (state_16040[(2)]);
var state_16040__$1 = state_16040;
var statearr_16063_16123 = state_16040__$1;
(statearr_16063_16123[(2)] = inst_16012);

(statearr_16063_16123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (18))){
var inst_16023 = (state_16040[(2)]);
var state_16040__$1 = state_16040;
var statearr_16064_16124 = state_16040__$1;
(statearr_16064_16124[(2)] = inst_16023);

(statearr_16064_16124[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (8))){
var inst_16009 = cljs.core.async.close_BANG_.call(null,to);
var state_16040__$1 = state_16040;
var statearr_16065_16125 = state_16040__$1;
(statearr_16065_16125[(2)] = inst_16009);

(statearr_16065_16125[(1)] = (10));


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
});})(c__15734__auto__,jobs,results,process,async))
;
return ((function (switch__15639__auto__,c__15734__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0 = (function (){
var statearr_16066 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__);

(statearr_16066[(1)] = (1));

return statearr_16066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1 = (function (state_16040){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_16040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e16067){if((e16067 instanceof Object)){
var ex__15643__auto__ = e16067;
var statearr_16068_16126 = state_16040;
(statearr_16068_16126[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16127 = state_16040;
state_16040 = G__16127;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__ = function(state_16040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1.call(this,state_16040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15640__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__,jobs,results,process,async))
})();
var state__15736__auto__ = (function (){var statearr_16069 = f__15735__auto__.call(null);
(statearr_16069[(6)] = c__15734__auto__);

return statearr_16069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__,jobs,results,process,async))
);

return c__15734__auto__;
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
var G__16129 = arguments.length;
switch (G__16129) {
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
var G__16132 = arguments.length;
switch (G__16132) {
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
var G__16135 = arguments.length;
switch (G__16135) {
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
var c__15734__auto___16184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___16184,tc,fc){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___16184,tc,fc){
return (function (state_16161){
var state_val_16162 = (state_16161[(1)]);
if((state_val_16162 === (7))){
var inst_16157 = (state_16161[(2)]);
var state_16161__$1 = state_16161;
var statearr_16163_16185 = state_16161__$1;
(statearr_16163_16185[(2)] = inst_16157);

(statearr_16163_16185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16162 === (1))){
var state_16161__$1 = state_16161;
var statearr_16164_16186 = state_16161__$1;
(statearr_16164_16186[(2)] = null);

(statearr_16164_16186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16162 === (4))){
var inst_16138 = (state_16161[(7)]);
var inst_16138__$1 = (state_16161[(2)]);
var inst_16139 = (inst_16138__$1 == null);
var state_16161__$1 = (function (){var statearr_16165 = state_16161;
(statearr_16165[(7)] = inst_16138__$1);

return statearr_16165;
})();
if(cljs.core.truth_(inst_16139)){
var statearr_16166_16187 = state_16161__$1;
(statearr_16166_16187[(1)] = (5));

} else {
var statearr_16167_16188 = state_16161__$1;
(statearr_16167_16188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16162 === (13))){
var state_16161__$1 = state_16161;
var statearr_16168_16189 = state_16161__$1;
(statearr_16168_16189[(2)] = null);

(statearr_16168_16189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16162 === (6))){
var inst_16138 = (state_16161[(7)]);
var inst_16144 = p.call(null,inst_16138);
var state_16161__$1 = state_16161;
if(cljs.core.truth_(inst_16144)){
var statearr_16169_16190 = state_16161__$1;
(statearr_16169_16190[(1)] = (9));

} else {
var statearr_16170_16191 = state_16161__$1;
(statearr_16170_16191[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16162 === (3))){
var inst_16159 = (state_16161[(2)]);
var state_16161__$1 = state_16161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16161__$1,inst_16159);
} else {
if((state_val_16162 === (12))){
var state_16161__$1 = state_16161;
var statearr_16171_16192 = state_16161__$1;
(statearr_16171_16192[(2)] = null);

(statearr_16171_16192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16162 === (2))){
var state_16161__$1 = state_16161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16161__$1,(4),ch);
} else {
if((state_val_16162 === (11))){
var inst_16138 = (state_16161[(7)]);
var inst_16148 = (state_16161[(2)]);
var state_16161__$1 = state_16161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16161__$1,(8),inst_16148,inst_16138);
} else {
if((state_val_16162 === (9))){
var state_16161__$1 = state_16161;
var statearr_16172_16193 = state_16161__$1;
(statearr_16172_16193[(2)] = tc);

(statearr_16172_16193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16162 === (5))){
var inst_16141 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16142 = cljs.core.async.close_BANG_.call(null,fc);
var state_16161__$1 = (function (){var statearr_16173 = state_16161;
(statearr_16173[(8)] = inst_16141);

return statearr_16173;
})();
var statearr_16174_16194 = state_16161__$1;
(statearr_16174_16194[(2)] = inst_16142);

(statearr_16174_16194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16162 === (14))){
var inst_16155 = (state_16161[(2)]);
var state_16161__$1 = state_16161;
var statearr_16175_16195 = state_16161__$1;
(statearr_16175_16195[(2)] = inst_16155);

(statearr_16175_16195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16162 === (10))){
var state_16161__$1 = state_16161;
var statearr_16176_16196 = state_16161__$1;
(statearr_16176_16196[(2)] = fc);

(statearr_16176_16196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16162 === (8))){
var inst_16150 = (state_16161[(2)]);
var state_16161__$1 = state_16161;
if(cljs.core.truth_(inst_16150)){
var statearr_16177_16197 = state_16161__$1;
(statearr_16177_16197[(1)] = (12));

} else {
var statearr_16178_16198 = state_16161__$1;
(statearr_16178_16198[(1)] = (13));

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
});})(c__15734__auto___16184,tc,fc))
;
return ((function (switch__15639__auto__,c__15734__auto___16184,tc,fc){
return (function() {
var cljs$core$async$state_machine__15640__auto__ = null;
var cljs$core$async$state_machine__15640__auto____0 = (function (){
var statearr_16179 = [null,null,null,null,null,null,null,null,null];
(statearr_16179[(0)] = cljs$core$async$state_machine__15640__auto__);

(statearr_16179[(1)] = (1));

return statearr_16179;
});
var cljs$core$async$state_machine__15640__auto____1 = (function (state_16161){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_16161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e16180){if((e16180 instanceof Object)){
var ex__15643__auto__ = e16180;
var statearr_16181_16199 = state_16161;
(statearr_16181_16199[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16200 = state_16161;
state_16161 = G__16200;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$state_machine__15640__auto__ = function(state_16161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15640__auto____1.call(this,state_16161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15640__auto____0;
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15640__auto____1;
return cljs$core$async$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___16184,tc,fc))
})();
var state__15736__auto__ = (function (){var statearr_16182 = f__15735__auto__.call(null);
(statearr_16182[(6)] = c__15734__auto___16184);

return statearr_16182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___16184,tc,fc))
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
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_16221){
var state_val_16222 = (state_16221[(1)]);
if((state_val_16222 === (7))){
var inst_16217 = (state_16221[(2)]);
var state_16221__$1 = state_16221;
var statearr_16223_16241 = state_16221__$1;
(statearr_16223_16241[(2)] = inst_16217);

(statearr_16223_16241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16222 === (1))){
var inst_16201 = init;
var state_16221__$1 = (function (){var statearr_16224 = state_16221;
(statearr_16224[(7)] = inst_16201);

return statearr_16224;
})();
var statearr_16225_16242 = state_16221__$1;
(statearr_16225_16242[(2)] = null);

(statearr_16225_16242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16222 === (4))){
var inst_16204 = (state_16221[(8)]);
var inst_16204__$1 = (state_16221[(2)]);
var inst_16205 = (inst_16204__$1 == null);
var state_16221__$1 = (function (){var statearr_16226 = state_16221;
(statearr_16226[(8)] = inst_16204__$1);

return statearr_16226;
})();
if(cljs.core.truth_(inst_16205)){
var statearr_16227_16243 = state_16221__$1;
(statearr_16227_16243[(1)] = (5));

} else {
var statearr_16228_16244 = state_16221__$1;
(statearr_16228_16244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16222 === (6))){
var inst_16208 = (state_16221[(9)]);
var inst_16204 = (state_16221[(8)]);
var inst_16201 = (state_16221[(7)]);
var inst_16208__$1 = f.call(null,inst_16201,inst_16204);
var inst_16209 = cljs.core.reduced_QMARK_.call(null,inst_16208__$1);
var state_16221__$1 = (function (){var statearr_16229 = state_16221;
(statearr_16229[(9)] = inst_16208__$1);

return statearr_16229;
})();
if(inst_16209){
var statearr_16230_16245 = state_16221__$1;
(statearr_16230_16245[(1)] = (8));

} else {
var statearr_16231_16246 = state_16221__$1;
(statearr_16231_16246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16222 === (3))){
var inst_16219 = (state_16221[(2)]);
var state_16221__$1 = state_16221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16221__$1,inst_16219);
} else {
if((state_val_16222 === (2))){
var state_16221__$1 = state_16221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16221__$1,(4),ch);
} else {
if((state_val_16222 === (9))){
var inst_16208 = (state_16221[(9)]);
var inst_16201 = inst_16208;
var state_16221__$1 = (function (){var statearr_16232 = state_16221;
(statearr_16232[(7)] = inst_16201);

return statearr_16232;
})();
var statearr_16233_16247 = state_16221__$1;
(statearr_16233_16247[(2)] = null);

(statearr_16233_16247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16222 === (5))){
var inst_16201 = (state_16221[(7)]);
var state_16221__$1 = state_16221;
var statearr_16234_16248 = state_16221__$1;
(statearr_16234_16248[(2)] = inst_16201);

(statearr_16234_16248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16222 === (10))){
var inst_16215 = (state_16221[(2)]);
var state_16221__$1 = state_16221;
var statearr_16235_16249 = state_16221__$1;
(statearr_16235_16249[(2)] = inst_16215);

(statearr_16235_16249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16222 === (8))){
var inst_16208 = (state_16221[(9)]);
var inst_16211 = cljs.core.deref.call(null,inst_16208);
var state_16221__$1 = state_16221;
var statearr_16236_16250 = state_16221__$1;
(statearr_16236_16250[(2)] = inst_16211);

(statearr_16236_16250[(1)] = (10));


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
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15640__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15640__auto____0 = (function (){
var statearr_16237 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16237[(0)] = cljs$core$async$reduce_$_state_machine__15640__auto__);

(statearr_16237[(1)] = (1));

return statearr_16237;
});
var cljs$core$async$reduce_$_state_machine__15640__auto____1 = (function (state_16221){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_16221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e16238){if((e16238 instanceof Object)){
var ex__15643__auto__ = e16238;
var statearr_16239_16251 = state_16221;
(statearr_16239_16251[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16252 = state_16221;
state_16221 = G__16252;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15640__auto__ = function(state_16221){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15640__auto____1.call(this,state_16221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15640__auto____0;
cljs$core$async$reduce_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15640__auto____1;
return cljs$core$async$reduce_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_16240 = f__15735__auto__.call(null);
(statearr_16240[(6)] = c__15734__auto__);

return statearr_16240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__,f__$1){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__,f__$1){
return (function (state_16258){
var state_val_16259 = (state_16258[(1)]);
if((state_val_16259 === (1))){
var inst_16253 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16258__$1 = state_16258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16258__$1,(2),inst_16253);
} else {
if((state_val_16259 === (2))){
var inst_16255 = (state_16258[(2)]);
var inst_16256 = f__$1.call(null,inst_16255);
var state_16258__$1 = state_16258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16258__$1,inst_16256);
} else {
return null;
}
}
});})(c__15734__auto__,f__$1))
;
return ((function (switch__15639__auto__,c__15734__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15640__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15640__auto____0 = (function (){
var statearr_16260 = [null,null,null,null,null,null,null];
(statearr_16260[(0)] = cljs$core$async$transduce_$_state_machine__15640__auto__);

(statearr_16260[(1)] = (1));

return statearr_16260;
});
var cljs$core$async$transduce_$_state_machine__15640__auto____1 = (function (state_16258){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_16258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e16261){if((e16261 instanceof Object)){
var ex__15643__auto__ = e16261;
var statearr_16262_16264 = state_16258;
(statearr_16262_16264[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16265 = state_16258;
state_16258 = G__16265;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15640__auto__ = function(state_16258){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15640__auto____1.call(this,state_16258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15640__auto____0;
cljs$core$async$transduce_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15640__auto____1;
return cljs$core$async$transduce_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__,f__$1))
})();
var state__15736__auto__ = (function (){var statearr_16263 = f__15735__auto__.call(null);
(statearr_16263[(6)] = c__15734__auto__);

return statearr_16263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__,f__$1))
);

return c__15734__auto__;
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
var G__16267 = arguments.length;
switch (G__16267) {
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
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_16292){
var state_val_16293 = (state_16292[(1)]);
if((state_val_16293 === (7))){
var inst_16274 = (state_16292[(2)]);
var state_16292__$1 = state_16292;
var statearr_16294_16315 = state_16292__$1;
(statearr_16294_16315[(2)] = inst_16274);

(statearr_16294_16315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (1))){
var inst_16268 = cljs.core.seq.call(null,coll);
var inst_16269 = inst_16268;
var state_16292__$1 = (function (){var statearr_16295 = state_16292;
(statearr_16295[(7)] = inst_16269);

return statearr_16295;
})();
var statearr_16296_16316 = state_16292__$1;
(statearr_16296_16316[(2)] = null);

(statearr_16296_16316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (4))){
var inst_16269 = (state_16292[(7)]);
var inst_16272 = cljs.core.first.call(null,inst_16269);
var state_16292__$1 = state_16292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16292__$1,(7),ch,inst_16272);
} else {
if((state_val_16293 === (13))){
var inst_16286 = (state_16292[(2)]);
var state_16292__$1 = state_16292;
var statearr_16297_16317 = state_16292__$1;
(statearr_16297_16317[(2)] = inst_16286);

(statearr_16297_16317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (6))){
var inst_16277 = (state_16292[(2)]);
var state_16292__$1 = state_16292;
if(cljs.core.truth_(inst_16277)){
var statearr_16298_16318 = state_16292__$1;
(statearr_16298_16318[(1)] = (8));

} else {
var statearr_16299_16319 = state_16292__$1;
(statearr_16299_16319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (3))){
var inst_16290 = (state_16292[(2)]);
var state_16292__$1 = state_16292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16292__$1,inst_16290);
} else {
if((state_val_16293 === (12))){
var state_16292__$1 = state_16292;
var statearr_16300_16320 = state_16292__$1;
(statearr_16300_16320[(2)] = null);

(statearr_16300_16320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (2))){
var inst_16269 = (state_16292[(7)]);
var state_16292__$1 = state_16292;
if(cljs.core.truth_(inst_16269)){
var statearr_16301_16321 = state_16292__$1;
(statearr_16301_16321[(1)] = (4));

} else {
var statearr_16302_16322 = state_16292__$1;
(statearr_16302_16322[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (11))){
var inst_16283 = cljs.core.async.close_BANG_.call(null,ch);
var state_16292__$1 = state_16292;
var statearr_16303_16323 = state_16292__$1;
(statearr_16303_16323[(2)] = inst_16283);

(statearr_16303_16323[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (9))){
var state_16292__$1 = state_16292;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16304_16324 = state_16292__$1;
(statearr_16304_16324[(1)] = (11));

} else {
var statearr_16305_16325 = state_16292__$1;
(statearr_16305_16325[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (5))){
var inst_16269 = (state_16292[(7)]);
var state_16292__$1 = state_16292;
var statearr_16306_16326 = state_16292__$1;
(statearr_16306_16326[(2)] = inst_16269);

(statearr_16306_16326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (10))){
var inst_16288 = (state_16292[(2)]);
var state_16292__$1 = state_16292;
var statearr_16307_16327 = state_16292__$1;
(statearr_16307_16327[(2)] = inst_16288);

(statearr_16307_16327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16293 === (8))){
var inst_16269 = (state_16292[(7)]);
var inst_16279 = cljs.core.next.call(null,inst_16269);
var inst_16269__$1 = inst_16279;
var state_16292__$1 = (function (){var statearr_16308 = state_16292;
(statearr_16308[(7)] = inst_16269__$1);

return statearr_16308;
})();
var statearr_16309_16328 = state_16292__$1;
(statearr_16309_16328[(2)] = null);

(statearr_16309_16328[(1)] = (2));


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
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var cljs$core$async$state_machine__15640__auto__ = null;
var cljs$core$async$state_machine__15640__auto____0 = (function (){
var statearr_16310 = [null,null,null,null,null,null,null,null];
(statearr_16310[(0)] = cljs$core$async$state_machine__15640__auto__);

(statearr_16310[(1)] = (1));

return statearr_16310;
});
var cljs$core$async$state_machine__15640__auto____1 = (function (state_16292){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_16292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e16311){if((e16311 instanceof Object)){
var ex__15643__auto__ = e16311;
var statearr_16312_16329 = state_16292;
(statearr_16312_16329[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16330 = state_16292;
state_16292 = G__16330;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$state_machine__15640__auto__ = function(state_16292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15640__auto____1.call(this,state_16292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15640__auto____0;
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15640__auto____1;
return cljs$core$async$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_16313 = f__15735__auto__.call(null);
(statearr_16313[(6)] = c__15734__auto__);

return statearr_16313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16331 = (function (ch,cs,meta16332){
this.ch = ch;
this.cs = cs;
this.meta16332 = meta16332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16333,meta16332__$1){
var self__ = this;
var _16333__$1 = this;
return (new cljs.core.async.t_cljs$core$async16331(self__.ch,self__.cs,meta16332__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16333){
var self__ = this;
var _16333__$1 = this;
return self__.meta16332;
});})(cs))
;

cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16331.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16331.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16332","meta16332",-967611297,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16331.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16331";

cljs.core.async.t_cljs$core$async16331.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16331");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16331.
 */
cljs.core.async.__GT_t_cljs$core$async16331 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16331(ch__$1,cs__$1,meta16332){
return (new cljs.core.async.t_cljs$core$async16331(ch__$1,cs__$1,meta16332));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16331(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15734__auto___16553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___16553,cs,m,dchan,dctr,done){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___16553,cs,m,dchan,dctr,done){
return (function (state_16468){
var state_val_16469 = (state_16468[(1)]);
if((state_val_16469 === (7))){
var inst_16464 = (state_16468[(2)]);
var state_16468__$1 = state_16468;
var statearr_16470_16554 = state_16468__$1;
(statearr_16470_16554[(2)] = inst_16464);

(statearr_16470_16554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (20))){
var inst_16367 = (state_16468[(7)]);
var inst_16379 = cljs.core.first.call(null,inst_16367);
var inst_16380 = cljs.core.nth.call(null,inst_16379,(0),null);
var inst_16381 = cljs.core.nth.call(null,inst_16379,(1),null);
var state_16468__$1 = (function (){var statearr_16471 = state_16468;
(statearr_16471[(8)] = inst_16380);

return statearr_16471;
})();
if(cljs.core.truth_(inst_16381)){
var statearr_16472_16555 = state_16468__$1;
(statearr_16472_16555[(1)] = (22));

} else {
var statearr_16473_16556 = state_16468__$1;
(statearr_16473_16556[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (27))){
var inst_16409 = (state_16468[(9)]);
var inst_16336 = (state_16468[(10)]);
var inst_16411 = (state_16468[(11)]);
var inst_16416 = (state_16468[(12)]);
var inst_16416__$1 = cljs.core._nth.call(null,inst_16409,inst_16411);
var inst_16417 = cljs.core.async.put_BANG_.call(null,inst_16416__$1,inst_16336,done);
var state_16468__$1 = (function (){var statearr_16474 = state_16468;
(statearr_16474[(12)] = inst_16416__$1);

return statearr_16474;
})();
if(cljs.core.truth_(inst_16417)){
var statearr_16475_16557 = state_16468__$1;
(statearr_16475_16557[(1)] = (30));

} else {
var statearr_16476_16558 = state_16468__$1;
(statearr_16476_16558[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (1))){
var state_16468__$1 = state_16468;
var statearr_16477_16559 = state_16468__$1;
(statearr_16477_16559[(2)] = null);

(statearr_16477_16559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (24))){
var inst_16367 = (state_16468[(7)]);
var inst_16386 = (state_16468[(2)]);
var inst_16387 = cljs.core.next.call(null,inst_16367);
var inst_16345 = inst_16387;
var inst_16346 = null;
var inst_16347 = (0);
var inst_16348 = (0);
var state_16468__$1 = (function (){var statearr_16478 = state_16468;
(statearr_16478[(13)] = inst_16345);

(statearr_16478[(14)] = inst_16347);

(statearr_16478[(15)] = inst_16348);

(statearr_16478[(16)] = inst_16346);

(statearr_16478[(17)] = inst_16386);

return statearr_16478;
})();
var statearr_16479_16560 = state_16468__$1;
(statearr_16479_16560[(2)] = null);

(statearr_16479_16560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (39))){
var state_16468__$1 = state_16468;
var statearr_16483_16561 = state_16468__$1;
(statearr_16483_16561[(2)] = null);

(statearr_16483_16561[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (4))){
var inst_16336 = (state_16468[(10)]);
var inst_16336__$1 = (state_16468[(2)]);
var inst_16337 = (inst_16336__$1 == null);
var state_16468__$1 = (function (){var statearr_16484 = state_16468;
(statearr_16484[(10)] = inst_16336__$1);

return statearr_16484;
})();
if(cljs.core.truth_(inst_16337)){
var statearr_16485_16562 = state_16468__$1;
(statearr_16485_16562[(1)] = (5));

} else {
var statearr_16486_16563 = state_16468__$1;
(statearr_16486_16563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (15))){
var inst_16345 = (state_16468[(13)]);
var inst_16347 = (state_16468[(14)]);
var inst_16348 = (state_16468[(15)]);
var inst_16346 = (state_16468[(16)]);
var inst_16363 = (state_16468[(2)]);
var inst_16364 = (inst_16348 + (1));
var tmp16480 = inst_16345;
var tmp16481 = inst_16347;
var tmp16482 = inst_16346;
var inst_16345__$1 = tmp16480;
var inst_16346__$1 = tmp16482;
var inst_16347__$1 = tmp16481;
var inst_16348__$1 = inst_16364;
var state_16468__$1 = (function (){var statearr_16487 = state_16468;
(statearr_16487[(13)] = inst_16345__$1);

(statearr_16487[(14)] = inst_16347__$1);

(statearr_16487[(15)] = inst_16348__$1);

(statearr_16487[(18)] = inst_16363);

(statearr_16487[(16)] = inst_16346__$1);

return statearr_16487;
})();
var statearr_16488_16564 = state_16468__$1;
(statearr_16488_16564[(2)] = null);

(statearr_16488_16564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (21))){
var inst_16390 = (state_16468[(2)]);
var state_16468__$1 = state_16468;
var statearr_16492_16565 = state_16468__$1;
(statearr_16492_16565[(2)] = inst_16390);

(statearr_16492_16565[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (31))){
var inst_16416 = (state_16468[(12)]);
var inst_16420 = done.call(null,null);
var inst_16421 = cljs.core.async.untap_STAR_.call(null,m,inst_16416);
var state_16468__$1 = (function (){var statearr_16493 = state_16468;
(statearr_16493[(19)] = inst_16420);

return statearr_16493;
})();
var statearr_16494_16566 = state_16468__$1;
(statearr_16494_16566[(2)] = inst_16421);

(statearr_16494_16566[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (32))){
var inst_16409 = (state_16468[(9)]);
var inst_16408 = (state_16468[(20)]);
var inst_16411 = (state_16468[(11)]);
var inst_16410 = (state_16468[(21)]);
var inst_16423 = (state_16468[(2)]);
var inst_16424 = (inst_16411 + (1));
var tmp16489 = inst_16409;
var tmp16490 = inst_16408;
var tmp16491 = inst_16410;
var inst_16408__$1 = tmp16490;
var inst_16409__$1 = tmp16489;
var inst_16410__$1 = tmp16491;
var inst_16411__$1 = inst_16424;
var state_16468__$1 = (function (){var statearr_16495 = state_16468;
(statearr_16495[(9)] = inst_16409__$1);

(statearr_16495[(20)] = inst_16408__$1);

(statearr_16495[(22)] = inst_16423);

(statearr_16495[(11)] = inst_16411__$1);

(statearr_16495[(21)] = inst_16410__$1);

return statearr_16495;
})();
var statearr_16496_16567 = state_16468__$1;
(statearr_16496_16567[(2)] = null);

(statearr_16496_16567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (40))){
var inst_16436 = (state_16468[(23)]);
var inst_16440 = done.call(null,null);
var inst_16441 = cljs.core.async.untap_STAR_.call(null,m,inst_16436);
var state_16468__$1 = (function (){var statearr_16497 = state_16468;
(statearr_16497[(24)] = inst_16440);

return statearr_16497;
})();
var statearr_16498_16568 = state_16468__$1;
(statearr_16498_16568[(2)] = inst_16441);

(statearr_16498_16568[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (33))){
var inst_16427 = (state_16468[(25)]);
var inst_16429 = cljs.core.chunked_seq_QMARK_.call(null,inst_16427);
var state_16468__$1 = state_16468;
if(inst_16429){
var statearr_16499_16569 = state_16468__$1;
(statearr_16499_16569[(1)] = (36));

} else {
var statearr_16500_16570 = state_16468__$1;
(statearr_16500_16570[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (13))){
var inst_16357 = (state_16468[(26)]);
var inst_16360 = cljs.core.async.close_BANG_.call(null,inst_16357);
var state_16468__$1 = state_16468;
var statearr_16501_16571 = state_16468__$1;
(statearr_16501_16571[(2)] = inst_16360);

(statearr_16501_16571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (22))){
var inst_16380 = (state_16468[(8)]);
var inst_16383 = cljs.core.async.close_BANG_.call(null,inst_16380);
var state_16468__$1 = state_16468;
var statearr_16502_16572 = state_16468__$1;
(statearr_16502_16572[(2)] = inst_16383);

(statearr_16502_16572[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (36))){
var inst_16427 = (state_16468[(25)]);
var inst_16431 = cljs.core.chunk_first.call(null,inst_16427);
var inst_16432 = cljs.core.chunk_rest.call(null,inst_16427);
var inst_16433 = cljs.core.count.call(null,inst_16431);
var inst_16408 = inst_16432;
var inst_16409 = inst_16431;
var inst_16410 = inst_16433;
var inst_16411 = (0);
var state_16468__$1 = (function (){var statearr_16503 = state_16468;
(statearr_16503[(9)] = inst_16409);

(statearr_16503[(20)] = inst_16408);

(statearr_16503[(11)] = inst_16411);

(statearr_16503[(21)] = inst_16410);

return statearr_16503;
})();
var statearr_16504_16573 = state_16468__$1;
(statearr_16504_16573[(2)] = null);

(statearr_16504_16573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (41))){
var inst_16427 = (state_16468[(25)]);
var inst_16443 = (state_16468[(2)]);
var inst_16444 = cljs.core.next.call(null,inst_16427);
var inst_16408 = inst_16444;
var inst_16409 = null;
var inst_16410 = (0);
var inst_16411 = (0);
var state_16468__$1 = (function (){var statearr_16505 = state_16468;
(statearr_16505[(9)] = inst_16409);

(statearr_16505[(20)] = inst_16408);

(statearr_16505[(27)] = inst_16443);

(statearr_16505[(11)] = inst_16411);

(statearr_16505[(21)] = inst_16410);

return statearr_16505;
})();
var statearr_16506_16574 = state_16468__$1;
(statearr_16506_16574[(2)] = null);

(statearr_16506_16574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (43))){
var state_16468__$1 = state_16468;
var statearr_16507_16575 = state_16468__$1;
(statearr_16507_16575[(2)] = null);

(statearr_16507_16575[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (29))){
var inst_16452 = (state_16468[(2)]);
var state_16468__$1 = state_16468;
var statearr_16508_16576 = state_16468__$1;
(statearr_16508_16576[(2)] = inst_16452);

(statearr_16508_16576[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (44))){
var inst_16461 = (state_16468[(2)]);
var state_16468__$1 = (function (){var statearr_16509 = state_16468;
(statearr_16509[(28)] = inst_16461);

return statearr_16509;
})();
var statearr_16510_16577 = state_16468__$1;
(statearr_16510_16577[(2)] = null);

(statearr_16510_16577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (6))){
var inst_16400 = (state_16468[(29)]);
var inst_16399 = cljs.core.deref.call(null,cs);
var inst_16400__$1 = cljs.core.keys.call(null,inst_16399);
var inst_16401 = cljs.core.count.call(null,inst_16400__$1);
var inst_16402 = cljs.core.reset_BANG_.call(null,dctr,inst_16401);
var inst_16407 = cljs.core.seq.call(null,inst_16400__$1);
var inst_16408 = inst_16407;
var inst_16409 = null;
var inst_16410 = (0);
var inst_16411 = (0);
var state_16468__$1 = (function (){var statearr_16511 = state_16468;
(statearr_16511[(9)] = inst_16409);

(statearr_16511[(30)] = inst_16402);

(statearr_16511[(20)] = inst_16408);

(statearr_16511[(11)] = inst_16411);

(statearr_16511[(29)] = inst_16400__$1);

(statearr_16511[(21)] = inst_16410);

return statearr_16511;
})();
var statearr_16512_16578 = state_16468__$1;
(statearr_16512_16578[(2)] = null);

(statearr_16512_16578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (28))){
var inst_16408 = (state_16468[(20)]);
var inst_16427 = (state_16468[(25)]);
var inst_16427__$1 = cljs.core.seq.call(null,inst_16408);
var state_16468__$1 = (function (){var statearr_16513 = state_16468;
(statearr_16513[(25)] = inst_16427__$1);

return statearr_16513;
})();
if(inst_16427__$1){
var statearr_16514_16579 = state_16468__$1;
(statearr_16514_16579[(1)] = (33));

} else {
var statearr_16515_16580 = state_16468__$1;
(statearr_16515_16580[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (25))){
var inst_16411 = (state_16468[(11)]);
var inst_16410 = (state_16468[(21)]);
var inst_16413 = (inst_16411 < inst_16410);
var inst_16414 = inst_16413;
var state_16468__$1 = state_16468;
if(cljs.core.truth_(inst_16414)){
var statearr_16516_16581 = state_16468__$1;
(statearr_16516_16581[(1)] = (27));

} else {
var statearr_16517_16582 = state_16468__$1;
(statearr_16517_16582[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (34))){
var state_16468__$1 = state_16468;
var statearr_16518_16583 = state_16468__$1;
(statearr_16518_16583[(2)] = null);

(statearr_16518_16583[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (17))){
var state_16468__$1 = state_16468;
var statearr_16519_16584 = state_16468__$1;
(statearr_16519_16584[(2)] = null);

(statearr_16519_16584[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (3))){
var inst_16466 = (state_16468[(2)]);
var state_16468__$1 = state_16468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16468__$1,inst_16466);
} else {
if((state_val_16469 === (12))){
var inst_16395 = (state_16468[(2)]);
var state_16468__$1 = state_16468;
var statearr_16520_16585 = state_16468__$1;
(statearr_16520_16585[(2)] = inst_16395);

(statearr_16520_16585[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (2))){
var state_16468__$1 = state_16468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16468__$1,(4),ch);
} else {
if((state_val_16469 === (23))){
var state_16468__$1 = state_16468;
var statearr_16521_16586 = state_16468__$1;
(statearr_16521_16586[(2)] = null);

(statearr_16521_16586[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (35))){
var inst_16450 = (state_16468[(2)]);
var state_16468__$1 = state_16468;
var statearr_16522_16587 = state_16468__$1;
(statearr_16522_16587[(2)] = inst_16450);

(statearr_16522_16587[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (19))){
var inst_16367 = (state_16468[(7)]);
var inst_16371 = cljs.core.chunk_first.call(null,inst_16367);
var inst_16372 = cljs.core.chunk_rest.call(null,inst_16367);
var inst_16373 = cljs.core.count.call(null,inst_16371);
var inst_16345 = inst_16372;
var inst_16346 = inst_16371;
var inst_16347 = inst_16373;
var inst_16348 = (0);
var state_16468__$1 = (function (){var statearr_16523 = state_16468;
(statearr_16523[(13)] = inst_16345);

(statearr_16523[(14)] = inst_16347);

(statearr_16523[(15)] = inst_16348);

(statearr_16523[(16)] = inst_16346);

return statearr_16523;
})();
var statearr_16524_16588 = state_16468__$1;
(statearr_16524_16588[(2)] = null);

(statearr_16524_16588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (11))){
var inst_16345 = (state_16468[(13)]);
var inst_16367 = (state_16468[(7)]);
var inst_16367__$1 = cljs.core.seq.call(null,inst_16345);
var state_16468__$1 = (function (){var statearr_16525 = state_16468;
(statearr_16525[(7)] = inst_16367__$1);

return statearr_16525;
})();
if(inst_16367__$1){
var statearr_16526_16589 = state_16468__$1;
(statearr_16526_16589[(1)] = (16));

} else {
var statearr_16527_16590 = state_16468__$1;
(statearr_16527_16590[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (9))){
var inst_16397 = (state_16468[(2)]);
var state_16468__$1 = state_16468;
var statearr_16528_16591 = state_16468__$1;
(statearr_16528_16591[(2)] = inst_16397);

(statearr_16528_16591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (5))){
var inst_16343 = cljs.core.deref.call(null,cs);
var inst_16344 = cljs.core.seq.call(null,inst_16343);
var inst_16345 = inst_16344;
var inst_16346 = null;
var inst_16347 = (0);
var inst_16348 = (0);
var state_16468__$1 = (function (){var statearr_16529 = state_16468;
(statearr_16529[(13)] = inst_16345);

(statearr_16529[(14)] = inst_16347);

(statearr_16529[(15)] = inst_16348);

(statearr_16529[(16)] = inst_16346);

return statearr_16529;
})();
var statearr_16530_16592 = state_16468__$1;
(statearr_16530_16592[(2)] = null);

(statearr_16530_16592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (14))){
var state_16468__$1 = state_16468;
var statearr_16531_16593 = state_16468__$1;
(statearr_16531_16593[(2)] = null);

(statearr_16531_16593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (45))){
var inst_16458 = (state_16468[(2)]);
var state_16468__$1 = state_16468;
var statearr_16532_16594 = state_16468__$1;
(statearr_16532_16594[(2)] = inst_16458);

(statearr_16532_16594[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (26))){
var inst_16400 = (state_16468[(29)]);
var inst_16454 = (state_16468[(2)]);
var inst_16455 = cljs.core.seq.call(null,inst_16400);
var state_16468__$1 = (function (){var statearr_16533 = state_16468;
(statearr_16533[(31)] = inst_16454);

return statearr_16533;
})();
if(inst_16455){
var statearr_16534_16595 = state_16468__$1;
(statearr_16534_16595[(1)] = (42));

} else {
var statearr_16535_16596 = state_16468__$1;
(statearr_16535_16596[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (16))){
var inst_16367 = (state_16468[(7)]);
var inst_16369 = cljs.core.chunked_seq_QMARK_.call(null,inst_16367);
var state_16468__$1 = state_16468;
if(inst_16369){
var statearr_16536_16597 = state_16468__$1;
(statearr_16536_16597[(1)] = (19));

} else {
var statearr_16537_16598 = state_16468__$1;
(statearr_16537_16598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (38))){
var inst_16447 = (state_16468[(2)]);
var state_16468__$1 = state_16468;
var statearr_16538_16599 = state_16468__$1;
(statearr_16538_16599[(2)] = inst_16447);

(statearr_16538_16599[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (30))){
var state_16468__$1 = state_16468;
var statearr_16539_16600 = state_16468__$1;
(statearr_16539_16600[(2)] = null);

(statearr_16539_16600[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (10))){
var inst_16348 = (state_16468[(15)]);
var inst_16346 = (state_16468[(16)]);
var inst_16356 = cljs.core._nth.call(null,inst_16346,inst_16348);
var inst_16357 = cljs.core.nth.call(null,inst_16356,(0),null);
var inst_16358 = cljs.core.nth.call(null,inst_16356,(1),null);
var state_16468__$1 = (function (){var statearr_16540 = state_16468;
(statearr_16540[(26)] = inst_16357);

return statearr_16540;
})();
if(cljs.core.truth_(inst_16358)){
var statearr_16541_16601 = state_16468__$1;
(statearr_16541_16601[(1)] = (13));

} else {
var statearr_16542_16602 = state_16468__$1;
(statearr_16542_16602[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (18))){
var inst_16393 = (state_16468[(2)]);
var state_16468__$1 = state_16468;
var statearr_16543_16603 = state_16468__$1;
(statearr_16543_16603[(2)] = inst_16393);

(statearr_16543_16603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (42))){
var state_16468__$1 = state_16468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16468__$1,(45),dchan);
} else {
if((state_val_16469 === (37))){
var inst_16336 = (state_16468[(10)]);
var inst_16436 = (state_16468[(23)]);
var inst_16427 = (state_16468[(25)]);
var inst_16436__$1 = cljs.core.first.call(null,inst_16427);
var inst_16437 = cljs.core.async.put_BANG_.call(null,inst_16436__$1,inst_16336,done);
var state_16468__$1 = (function (){var statearr_16544 = state_16468;
(statearr_16544[(23)] = inst_16436__$1);

return statearr_16544;
})();
if(cljs.core.truth_(inst_16437)){
var statearr_16545_16604 = state_16468__$1;
(statearr_16545_16604[(1)] = (39));

} else {
var statearr_16546_16605 = state_16468__$1;
(statearr_16546_16605[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16469 === (8))){
var inst_16347 = (state_16468[(14)]);
var inst_16348 = (state_16468[(15)]);
var inst_16350 = (inst_16348 < inst_16347);
var inst_16351 = inst_16350;
var state_16468__$1 = state_16468;
if(cljs.core.truth_(inst_16351)){
var statearr_16547_16606 = state_16468__$1;
(statearr_16547_16606[(1)] = (10));

} else {
var statearr_16548_16607 = state_16468__$1;
(statearr_16548_16607[(1)] = (11));

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
});})(c__15734__auto___16553,cs,m,dchan,dctr,done))
;
return ((function (switch__15639__auto__,c__15734__auto___16553,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15640__auto__ = null;
var cljs$core$async$mult_$_state_machine__15640__auto____0 = (function (){
var statearr_16549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16549[(0)] = cljs$core$async$mult_$_state_machine__15640__auto__);

(statearr_16549[(1)] = (1));

return statearr_16549;
});
var cljs$core$async$mult_$_state_machine__15640__auto____1 = (function (state_16468){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_16468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e16550){if((e16550 instanceof Object)){
var ex__15643__auto__ = e16550;
var statearr_16551_16608 = state_16468;
(statearr_16551_16608[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16609 = state_16468;
state_16468 = G__16609;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15640__auto__ = function(state_16468){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15640__auto____1.call(this,state_16468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15640__auto____0;
cljs$core$async$mult_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15640__auto____1;
return cljs$core$async$mult_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___16553,cs,m,dchan,dctr,done))
})();
var state__15736__auto__ = (function (){var statearr_16552 = f__15735__auto__.call(null);
(statearr_16552[(6)] = c__15734__auto___16553);

return statearr_16552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___16553,cs,m,dchan,dctr,done))
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
var G__16611 = arguments.length;
switch (G__16611) {
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
var len__4730__auto___16623 = arguments.length;
var i__4731__auto___16624 = (0);
while(true){
if((i__4731__auto___16624 < len__4730__auto___16623)){
args__4736__auto__.push((arguments[i__4731__auto___16624]));

var G__16625 = (i__4731__auto___16624 + (1));
i__4731__auto___16624 = G__16625;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16617){
var map__16618 = p__16617;
var map__16618__$1 = (((((!((map__16618 == null))))?(((((map__16618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16618):map__16618);
var opts = map__16618__$1;
var statearr_16620_16626 = state;
(statearr_16620_16626[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__16618,map__16618__$1,opts){
return (function (val){
var statearr_16621_16627 = state;
(statearr_16621_16627[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16618,map__16618__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_16622_16628 = state;
(statearr_16622_16628[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16613){
var G__16614 = cljs.core.first.call(null,seq16613);
var seq16613__$1 = cljs.core.next.call(null,seq16613);
var G__16615 = cljs.core.first.call(null,seq16613__$1);
var seq16613__$2 = cljs.core.next.call(null,seq16613__$1);
var G__16616 = cljs.core.first.call(null,seq16613__$2);
var seq16613__$3 = cljs.core.next.call(null,seq16613__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16614,G__16615,G__16616,seq16613__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16629 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16630){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16630 = meta16630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16631,meta16630__$1){
var self__ = this;
var _16631__$1 = this;
return (new cljs.core.async.t_cljs$core$async16629(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16630__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16631){
var self__ = this;
var _16631__$1 = this;
return self__.meta16630;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16629.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16630","meta16630",2133149366,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16629";

cljs.core.async.t_cljs$core$async16629.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16629");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16629.
 */
cljs.core.async.__GT_t_cljs$core$async16629 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16629(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16630){
return (new cljs.core.async.t_cljs$core$async16629(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16630));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16629(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15734__auto___16793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16733){
var state_val_16734 = (state_16733[(1)]);
if((state_val_16734 === (7))){
var inst_16648 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
var statearr_16735_16794 = state_16733__$1;
(statearr_16735_16794[(2)] = inst_16648);

(statearr_16735_16794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (20))){
var inst_16660 = (state_16733[(7)]);
var state_16733__$1 = state_16733;
var statearr_16736_16795 = state_16733__$1;
(statearr_16736_16795[(2)] = inst_16660);

(statearr_16736_16795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (27))){
var state_16733__$1 = state_16733;
var statearr_16737_16796 = state_16733__$1;
(statearr_16737_16796[(2)] = null);

(statearr_16737_16796[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (1))){
var inst_16635 = (state_16733[(8)]);
var inst_16635__$1 = calc_state.call(null);
var inst_16637 = (inst_16635__$1 == null);
var inst_16638 = cljs.core.not.call(null,inst_16637);
var state_16733__$1 = (function (){var statearr_16738 = state_16733;
(statearr_16738[(8)] = inst_16635__$1);

return statearr_16738;
})();
if(inst_16638){
var statearr_16739_16797 = state_16733__$1;
(statearr_16739_16797[(1)] = (2));

} else {
var statearr_16740_16798 = state_16733__$1;
(statearr_16740_16798[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (24))){
var inst_16707 = (state_16733[(9)]);
var inst_16684 = (state_16733[(10)]);
var inst_16693 = (state_16733[(11)]);
var inst_16707__$1 = inst_16684.call(null,inst_16693);
var state_16733__$1 = (function (){var statearr_16741 = state_16733;
(statearr_16741[(9)] = inst_16707__$1);

return statearr_16741;
})();
if(cljs.core.truth_(inst_16707__$1)){
var statearr_16742_16799 = state_16733__$1;
(statearr_16742_16799[(1)] = (29));

} else {
var statearr_16743_16800 = state_16733__$1;
(statearr_16743_16800[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (4))){
var inst_16651 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
if(cljs.core.truth_(inst_16651)){
var statearr_16744_16801 = state_16733__$1;
(statearr_16744_16801[(1)] = (8));

} else {
var statearr_16745_16802 = state_16733__$1;
(statearr_16745_16802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (15))){
var inst_16678 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
if(cljs.core.truth_(inst_16678)){
var statearr_16746_16803 = state_16733__$1;
(statearr_16746_16803[(1)] = (19));

} else {
var statearr_16747_16804 = state_16733__$1;
(statearr_16747_16804[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (21))){
var inst_16683 = (state_16733[(12)]);
var inst_16683__$1 = (state_16733[(2)]);
var inst_16684 = cljs.core.get.call(null,inst_16683__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16685 = cljs.core.get.call(null,inst_16683__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16686 = cljs.core.get.call(null,inst_16683__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16733__$1 = (function (){var statearr_16748 = state_16733;
(statearr_16748[(10)] = inst_16684);

(statearr_16748[(13)] = inst_16685);

(statearr_16748[(12)] = inst_16683__$1);

return statearr_16748;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16733__$1,(22),inst_16686);
} else {
if((state_val_16734 === (31))){
var inst_16715 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
if(cljs.core.truth_(inst_16715)){
var statearr_16749_16805 = state_16733__$1;
(statearr_16749_16805[(1)] = (32));

} else {
var statearr_16750_16806 = state_16733__$1;
(statearr_16750_16806[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (32))){
var inst_16692 = (state_16733[(14)]);
var state_16733__$1 = state_16733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16733__$1,(35),out,inst_16692);
} else {
if((state_val_16734 === (33))){
var inst_16683 = (state_16733[(12)]);
var inst_16660 = inst_16683;
var state_16733__$1 = (function (){var statearr_16751 = state_16733;
(statearr_16751[(7)] = inst_16660);

return statearr_16751;
})();
var statearr_16752_16807 = state_16733__$1;
(statearr_16752_16807[(2)] = null);

(statearr_16752_16807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (13))){
var inst_16660 = (state_16733[(7)]);
var inst_16667 = inst_16660.cljs$lang$protocol_mask$partition0$;
var inst_16668 = (inst_16667 & (64));
var inst_16669 = inst_16660.cljs$core$ISeq$;
var inst_16670 = (cljs.core.PROTOCOL_SENTINEL === inst_16669);
var inst_16671 = ((inst_16668) || (inst_16670));
var state_16733__$1 = state_16733;
if(cljs.core.truth_(inst_16671)){
var statearr_16753_16808 = state_16733__$1;
(statearr_16753_16808[(1)] = (16));

} else {
var statearr_16754_16809 = state_16733__$1;
(statearr_16754_16809[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (22))){
var inst_16693 = (state_16733[(11)]);
var inst_16692 = (state_16733[(14)]);
var inst_16691 = (state_16733[(2)]);
var inst_16692__$1 = cljs.core.nth.call(null,inst_16691,(0),null);
var inst_16693__$1 = cljs.core.nth.call(null,inst_16691,(1),null);
var inst_16694 = (inst_16692__$1 == null);
var inst_16695 = cljs.core._EQ_.call(null,inst_16693__$1,change);
var inst_16696 = ((inst_16694) || (inst_16695));
var state_16733__$1 = (function (){var statearr_16755 = state_16733;
(statearr_16755[(11)] = inst_16693__$1);

(statearr_16755[(14)] = inst_16692__$1);

return statearr_16755;
})();
if(cljs.core.truth_(inst_16696)){
var statearr_16756_16810 = state_16733__$1;
(statearr_16756_16810[(1)] = (23));

} else {
var statearr_16757_16811 = state_16733__$1;
(statearr_16757_16811[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (36))){
var inst_16683 = (state_16733[(12)]);
var inst_16660 = inst_16683;
var state_16733__$1 = (function (){var statearr_16758 = state_16733;
(statearr_16758[(7)] = inst_16660);

return statearr_16758;
})();
var statearr_16759_16812 = state_16733__$1;
(statearr_16759_16812[(2)] = null);

(statearr_16759_16812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (29))){
var inst_16707 = (state_16733[(9)]);
var state_16733__$1 = state_16733;
var statearr_16760_16813 = state_16733__$1;
(statearr_16760_16813[(2)] = inst_16707);

(statearr_16760_16813[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (6))){
var state_16733__$1 = state_16733;
var statearr_16761_16814 = state_16733__$1;
(statearr_16761_16814[(2)] = false);

(statearr_16761_16814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (28))){
var inst_16703 = (state_16733[(2)]);
var inst_16704 = calc_state.call(null);
var inst_16660 = inst_16704;
var state_16733__$1 = (function (){var statearr_16762 = state_16733;
(statearr_16762[(7)] = inst_16660);

(statearr_16762[(15)] = inst_16703);

return statearr_16762;
})();
var statearr_16763_16815 = state_16733__$1;
(statearr_16763_16815[(2)] = null);

(statearr_16763_16815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (25))){
var inst_16729 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
var statearr_16764_16816 = state_16733__$1;
(statearr_16764_16816[(2)] = inst_16729);

(statearr_16764_16816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (34))){
var inst_16727 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
var statearr_16765_16817 = state_16733__$1;
(statearr_16765_16817[(2)] = inst_16727);

(statearr_16765_16817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (17))){
var state_16733__$1 = state_16733;
var statearr_16766_16818 = state_16733__$1;
(statearr_16766_16818[(2)] = false);

(statearr_16766_16818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (3))){
var state_16733__$1 = state_16733;
var statearr_16767_16819 = state_16733__$1;
(statearr_16767_16819[(2)] = false);

(statearr_16767_16819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (12))){
var inst_16731 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16733__$1,inst_16731);
} else {
if((state_val_16734 === (2))){
var inst_16635 = (state_16733[(8)]);
var inst_16640 = inst_16635.cljs$lang$protocol_mask$partition0$;
var inst_16641 = (inst_16640 & (64));
var inst_16642 = inst_16635.cljs$core$ISeq$;
var inst_16643 = (cljs.core.PROTOCOL_SENTINEL === inst_16642);
var inst_16644 = ((inst_16641) || (inst_16643));
var state_16733__$1 = state_16733;
if(cljs.core.truth_(inst_16644)){
var statearr_16768_16820 = state_16733__$1;
(statearr_16768_16820[(1)] = (5));

} else {
var statearr_16769_16821 = state_16733__$1;
(statearr_16769_16821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (23))){
var inst_16692 = (state_16733[(14)]);
var inst_16698 = (inst_16692 == null);
var state_16733__$1 = state_16733;
if(cljs.core.truth_(inst_16698)){
var statearr_16770_16822 = state_16733__$1;
(statearr_16770_16822[(1)] = (26));

} else {
var statearr_16771_16823 = state_16733__$1;
(statearr_16771_16823[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (35))){
var inst_16718 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
if(cljs.core.truth_(inst_16718)){
var statearr_16772_16824 = state_16733__$1;
(statearr_16772_16824[(1)] = (36));

} else {
var statearr_16773_16825 = state_16733__$1;
(statearr_16773_16825[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (19))){
var inst_16660 = (state_16733[(7)]);
var inst_16680 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16660);
var state_16733__$1 = state_16733;
var statearr_16774_16826 = state_16733__$1;
(statearr_16774_16826[(2)] = inst_16680);

(statearr_16774_16826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (11))){
var inst_16660 = (state_16733[(7)]);
var inst_16664 = (inst_16660 == null);
var inst_16665 = cljs.core.not.call(null,inst_16664);
var state_16733__$1 = state_16733;
if(inst_16665){
var statearr_16775_16827 = state_16733__$1;
(statearr_16775_16827[(1)] = (13));

} else {
var statearr_16776_16828 = state_16733__$1;
(statearr_16776_16828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (9))){
var inst_16635 = (state_16733[(8)]);
var state_16733__$1 = state_16733;
var statearr_16777_16829 = state_16733__$1;
(statearr_16777_16829[(2)] = inst_16635);

(statearr_16777_16829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (5))){
var state_16733__$1 = state_16733;
var statearr_16778_16830 = state_16733__$1;
(statearr_16778_16830[(2)] = true);

(statearr_16778_16830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (14))){
var state_16733__$1 = state_16733;
var statearr_16779_16831 = state_16733__$1;
(statearr_16779_16831[(2)] = false);

(statearr_16779_16831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (26))){
var inst_16693 = (state_16733[(11)]);
var inst_16700 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16693);
var state_16733__$1 = state_16733;
var statearr_16780_16832 = state_16733__$1;
(statearr_16780_16832[(2)] = inst_16700);

(statearr_16780_16832[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (16))){
var state_16733__$1 = state_16733;
var statearr_16781_16833 = state_16733__$1;
(statearr_16781_16833[(2)] = true);

(statearr_16781_16833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (38))){
var inst_16723 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
var statearr_16782_16834 = state_16733__$1;
(statearr_16782_16834[(2)] = inst_16723);

(statearr_16782_16834[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (30))){
var inst_16684 = (state_16733[(10)]);
var inst_16693 = (state_16733[(11)]);
var inst_16685 = (state_16733[(13)]);
var inst_16710 = cljs.core.empty_QMARK_.call(null,inst_16684);
var inst_16711 = inst_16685.call(null,inst_16693);
var inst_16712 = cljs.core.not.call(null,inst_16711);
var inst_16713 = ((inst_16710) && (inst_16712));
var state_16733__$1 = state_16733;
var statearr_16783_16835 = state_16733__$1;
(statearr_16783_16835[(2)] = inst_16713);

(statearr_16783_16835[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (10))){
var inst_16635 = (state_16733[(8)]);
var inst_16656 = (state_16733[(2)]);
var inst_16657 = cljs.core.get.call(null,inst_16656,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16658 = cljs.core.get.call(null,inst_16656,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16659 = cljs.core.get.call(null,inst_16656,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16660 = inst_16635;
var state_16733__$1 = (function (){var statearr_16784 = state_16733;
(statearr_16784[(7)] = inst_16660);

(statearr_16784[(16)] = inst_16658);

(statearr_16784[(17)] = inst_16659);

(statearr_16784[(18)] = inst_16657);

return statearr_16784;
})();
var statearr_16785_16836 = state_16733__$1;
(statearr_16785_16836[(2)] = null);

(statearr_16785_16836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (18))){
var inst_16675 = (state_16733[(2)]);
var state_16733__$1 = state_16733;
var statearr_16786_16837 = state_16733__$1;
(statearr_16786_16837[(2)] = inst_16675);

(statearr_16786_16837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (37))){
var state_16733__$1 = state_16733;
var statearr_16787_16838 = state_16733__$1;
(statearr_16787_16838[(2)] = null);

(statearr_16787_16838[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16734 === (8))){
var inst_16635 = (state_16733[(8)]);
var inst_16653 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16635);
var state_16733__$1 = state_16733;
var statearr_16788_16839 = state_16733__$1;
(statearr_16788_16839[(2)] = inst_16653);

(statearr_16788_16839[(1)] = (10));


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
});})(c__15734__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15639__auto__,c__15734__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15640__auto__ = null;
var cljs$core$async$mix_$_state_machine__15640__auto____0 = (function (){
var statearr_16789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16789[(0)] = cljs$core$async$mix_$_state_machine__15640__auto__);

(statearr_16789[(1)] = (1));

return statearr_16789;
});
var cljs$core$async$mix_$_state_machine__15640__auto____1 = (function (state_16733){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_16733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e16790){if((e16790 instanceof Object)){
var ex__15643__auto__ = e16790;
var statearr_16791_16840 = state_16733;
(statearr_16791_16840[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16841 = state_16733;
state_16733 = G__16841;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15640__auto__ = function(state_16733){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15640__auto____1.call(this,state_16733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15640__auto____0;
cljs$core$async$mix_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15640__auto____1;
return cljs$core$async$mix_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15736__auto__ = (function (){var statearr_16792 = f__15735__auto__.call(null);
(statearr_16792[(6)] = c__15734__auto___16793);

return statearr_16792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___16793,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__16843 = arguments.length;
switch (G__16843) {
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
var G__16847 = arguments.length;
switch (G__16847) {
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
return (function (p1__16845_SHARP_){
if(cljs.core.truth_(p1__16845_SHARP_.call(null,topic))){
return p1__16845_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16845_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16848 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16849){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16849 = meta16849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16850,meta16849__$1){
var self__ = this;
var _16850__$1 = this;
return (new cljs.core.async.t_cljs$core$async16848(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16849__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16850){
var self__ = this;
var _16850__$1 = this;
return self__.meta16849;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16848.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16848.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16848.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16848.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async16848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16848.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16849","meta16849",-1004832789,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16848";

cljs.core.async.t_cljs$core$async16848.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16848");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16848.
 */
cljs.core.async.__GT_t_cljs$core$async16848 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16849){
return (new cljs.core.async.t_cljs$core$async16848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16849));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16848(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15734__auto___16968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___16968,mults,ensure_mult,p){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___16968,mults,ensure_mult,p){
return (function (state_16922){
var state_val_16923 = (state_16922[(1)]);
if((state_val_16923 === (7))){
var inst_16918 = (state_16922[(2)]);
var state_16922__$1 = state_16922;
var statearr_16924_16969 = state_16922__$1;
(statearr_16924_16969[(2)] = inst_16918);

(statearr_16924_16969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (20))){
var state_16922__$1 = state_16922;
var statearr_16925_16970 = state_16922__$1;
(statearr_16925_16970[(2)] = null);

(statearr_16925_16970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (1))){
var state_16922__$1 = state_16922;
var statearr_16926_16971 = state_16922__$1;
(statearr_16926_16971[(2)] = null);

(statearr_16926_16971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (24))){
var inst_16901 = (state_16922[(7)]);
var inst_16910 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16901);
var state_16922__$1 = state_16922;
var statearr_16927_16972 = state_16922__$1;
(statearr_16927_16972[(2)] = inst_16910);

(statearr_16927_16972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (4))){
var inst_16853 = (state_16922[(8)]);
var inst_16853__$1 = (state_16922[(2)]);
var inst_16854 = (inst_16853__$1 == null);
var state_16922__$1 = (function (){var statearr_16928 = state_16922;
(statearr_16928[(8)] = inst_16853__$1);

return statearr_16928;
})();
if(cljs.core.truth_(inst_16854)){
var statearr_16929_16973 = state_16922__$1;
(statearr_16929_16973[(1)] = (5));

} else {
var statearr_16930_16974 = state_16922__$1;
(statearr_16930_16974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (15))){
var inst_16895 = (state_16922[(2)]);
var state_16922__$1 = state_16922;
var statearr_16931_16975 = state_16922__$1;
(statearr_16931_16975[(2)] = inst_16895);

(statearr_16931_16975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (21))){
var inst_16915 = (state_16922[(2)]);
var state_16922__$1 = (function (){var statearr_16932 = state_16922;
(statearr_16932[(9)] = inst_16915);

return statearr_16932;
})();
var statearr_16933_16976 = state_16922__$1;
(statearr_16933_16976[(2)] = null);

(statearr_16933_16976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (13))){
var inst_16877 = (state_16922[(10)]);
var inst_16879 = cljs.core.chunked_seq_QMARK_.call(null,inst_16877);
var state_16922__$1 = state_16922;
if(inst_16879){
var statearr_16934_16977 = state_16922__$1;
(statearr_16934_16977[(1)] = (16));

} else {
var statearr_16935_16978 = state_16922__$1;
(statearr_16935_16978[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (22))){
var inst_16907 = (state_16922[(2)]);
var state_16922__$1 = state_16922;
if(cljs.core.truth_(inst_16907)){
var statearr_16936_16979 = state_16922__$1;
(statearr_16936_16979[(1)] = (23));

} else {
var statearr_16937_16980 = state_16922__$1;
(statearr_16937_16980[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (6))){
var inst_16901 = (state_16922[(7)]);
var inst_16853 = (state_16922[(8)]);
var inst_16903 = (state_16922[(11)]);
var inst_16901__$1 = topic_fn.call(null,inst_16853);
var inst_16902 = cljs.core.deref.call(null,mults);
var inst_16903__$1 = cljs.core.get.call(null,inst_16902,inst_16901__$1);
var state_16922__$1 = (function (){var statearr_16938 = state_16922;
(statearr_16938[(7)] = inst_16901__$1);

(statearr_16938[(11)] = inst_16903__$1);

return statearr_16938;
})();
if(cljs.core.truth_(inst_16903__$1)){
var statearr_16939_16981 = state_16922__$1;
(statearr_16939_16981[(1)] = (19));

} else {
var statearr_16940_16982 = state_16922__$1;
(statearr_16940_16982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (25))){
var inst_16912 = (state_16922[(2)]);
var state_16922__$1 = state_16922;
var statearr_16941_16983 = state_16922__$1;
(statearr_16941_16983[(2)] = inst_16912);

(statearr_16941_16983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (17))){
var inst_16877 = (state_16922[(10)]);
var inst_16886 = cljs.core.first.call(null,inst_16877);
var inst_16887 = cljs.core.async.muxch_STAR_.call(null,inst_16886);
var inst_16888 = cljs.core.async.close_BANG_.call(null,inst_16887);
var inst_16889 = cljs.core.next.call(null,inst_16877);
var inst_16863 = inst_16889;
var inst_16864 = null;
var inst_16865 = (0);
var inst_16866 = (0);
var state_16922__$1 = (function (){var statearr_16942 = state_16922;
(statearr_16942[(12)] = inst_16865);

(statearr_16942[(13)] = inst_16863);

(statearr_16942[(14)] = inst_16866);

(statearr_16942[(15)] = inst_16888);

(statearr_16942[(16)] = inst_16864);

return statearr_16942;
})();
var statearr_16943_16984 = state_16922__$1;
(statearr_16943_16984[(2)] = null);

(statearr_16943_16984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (3))){
var inst_16920 = (state_16922[(2)]);
var state_16922__$1 = state_16922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16922__$1,inst_16920);
} else {
if((state_val_16923 === (12))){
var inst_16897 = (state_16922[(2)]);
var state_16922__$1 = state_16922;
var statearr_16944_16985 = state_16922__$1;
(statearr_16944_16985[(2)] = inst_16897);

(statearr_16944_16985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (2))){
var state_16922__$1 = state_16922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16922__$1,(4),ch);
} else {
if((state_val_16923 === (23))){
var state_16922__$1 = state_16922;
var statearr_16945_16986 = state_16922__$1;
(statearr_16945_16986[(2)] = null);

(statearr_16945_16986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (19))){
var inst_16853 = (state_16922[(8)]);
var inst_16903 = (state_16922[(11)]);
var inst_16905 = cljs.core.async.muxch_STAR_.call(null,inst_16903);
var state_16922__$1 = state_16922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16922__$1,(22),inst_16905,inst_16853);
} else {
if((state_val_16923 === (11))){
var inst_16863 = (state_16922[(13)]);
var inst_16877 = (state_16922[(10)]);
var inst_16877__$1 = cljs.core.seq.call(null,inst_16863);
var state_16922__$1 = (function (){var statearr_16946 = state_16922;
(statearr_16946[(10)] = inst_16877__$1);

return statearr_16946;
})();
if(inst_16877__$1){
var statearr_16947_16987 = state_16922__$1;
(statearr_16947_16987[(1)] = (13));

} else {
var statearr_16948_16988 = state_16922__$1;
(statearr_16948_16988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (9))){
var inst_16899 = (state_16922[(2)]);
var state_16922__$1 = state_16922;
var statearr_16949_16989 = state_16922__$1;
(statearr_16949_16989[(2)] = inst_16899);

(statearr_16949_16989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (5))){
var inst_16860 = cljs.core.deref.call(null,mults);
var inst_16861 = cljs.core.vals.call(null,inst_16860);
var inst_16862 = cljs.core.seq.call(null,inst_16861);
var inst_16863 = inst_16862;
var inst_16864 = null;
var inst_16865 = (0);
var inst_16866 = (0);
var state_16922__$1 = (function (){var statearr_16950 = state_16922;
(statearr_16950[(12)] = inst_16865);

(statearr_16950[(13)] = inst_16863);

(statearr_16950[(14)] = inst_16866);

(statearr_16950[(16)] = inst_16864);

return statearr_16950;
})();
var statearr_16951_16990 = state_16922__$1;
(statearr_16951_16990[(2)] = null);

(statearr_16951_16990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (14))){
var state_16922__$1 = state_16922;
var statearr_16955_16991 = state_16922__$1;
(statearr_16955_16991[(2)] = null);

(statearr_16955_16991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (16))){
var inst_16877 = (state_16922[(10)]);
var inst_16881 = cljs.core.chunk_first.call(null,inst_16877);
var inst_16882 = cljs.core.chunk_rest.call(null,inst_16877);
var inst_16883 = cljs.core.count.call(null,inst_16881);
var inst_16863 = inst_16882;
var inst_16864 = inst_16881;
var inst_16865 = inst_16883;
var inst_16866 = (0);
var state_16922__$1 = (function (){var statearr_16956 = state_16922;
(statearr_16956[(12)] = inst_16865);

(statearr_16956[(13)] = inst_16863);

(statearr_16956[(14)] = inst_16866);

(statearr_16956[(16)] = inst_16864);

return statearr_16956;
})();
var statearr_16957_16992 = state_16922__$1;
(statearr_16957_16992[(2)] = null);

(statearr_16957_16992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (10))){
var inst_16865 = (state_16922[(12)]);
var inst_16863 = (state_16922[(13)]);
var inst_16866 = (state_16922[(14)]);
var inst_16864 = (state_16922[(16)]);
var inst_16871 = cljs.core._nth.call(null,inst_16864,inst_16866);
var inst_16872 = cljs.core.async.muxch_STAR_.call(null,inst_16871);
var inst_16873 = cljs.core.async.close_BANG_.call(null,inst_16872);
var inst_16874 = (inst_16866 + (1));
var tmp16952 = inst_16865;
var tmp16953 = inst_16863;
var tmp16954 = inst_16864;
var inst_16863__$1 = tmp16953;
var inst_16864__$1 = tmp16954;
var inst_16865__$1 = tmp16952;
var inst_16866__$1 = inst_16874;
var state_16922__$1 = (function (){var statearr_16958 = state_16922;
(statearr_16958[(12)] = inst_16865__$1);

(statearr_16958[(13)] = inst_16863__$1);

(statearr_16958[(14)] = inst_16866__$1);

(statearr_16958[(17)] = inst_16873);

(statearr_16958[(16)] = inst_16864__$1);

return statearr_16958;
})();
var statearr_16959_16993 = state_16922__$1;
(statearr_16959_16993[(2)] = null);

(statearr_16959_16993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (18))){
var inst_16892 = (state_16922[(2)]);
var state_16922__$1 = state_16922;
var statearr_16960_16994 = state_16922__$1;
(statearr_16960_16994[(2)] = inst_16892);

(statearr_16960_16994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16923 === (8))){
var inst_16865 = (state_16922[(12)]);
var inst_16866 = (state_16922[(14)]);
var inst_16868 = (inst_16866 < inst_16865);
var inst_16869 = inst_16868;
var state_16922__$1 = state_16922;
if(cljs.core.truth_(inst_16869)){
var statearr_16961_16995 = state_16922__$1;
(statearr_16961_16995[(1)] = (10));

} else {
var statearr_16962_16996 = state_16922__$1;
(statearr_16962_16996[(1)] = (11));

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
});})(c__15734__auto___16968,mults,ensure_mult,p))
;
return ((function (switch__15639__auto__,c__15734__auto___16968,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15640__auto__ = null;
var cljs$core$async$state_machine__15640__auto____0 = (function (){
var statearr_16963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16963[(0)] = cljs$core$async$state_machine__15640__auto__);

(statearr_16963[(1)] = (1));

return statearr_16963;
});
var cljs$core$async$state_machine__15640__auto____1 = (function (state_16922){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_16922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e16964){if((e16964 instanceof Object)){
var ex__15643__auto__ = e16964;
var statearr_16965_16997 = state_16922;
(statearr_16965_16997[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16998 = state_16922;
state_16922 = G__16998;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$state_machine__15640__auto__ = function(state_16922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15640__auto____1.call(this,state_16922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15640__auto____0;
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15640__auto____1;
return cljs$core$async$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___16968,mults,ensure_mult,p))
})();
var state__15736__auto__ = (function (){var statearr_16966 = f__15735__auto__.call(null);
(statearr_16966[(6)] = c__15734__auto___16968);

return statearr_16966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___16968,mults,ensure_mult,p))
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
var G__17000 = arguments.length;
switch (G__17000) {
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
var G__17003 = arguments.length;
switch (G__17003) {
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
var G__17006 = arguments.length;
switch (G__17006) {
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
var c__15734__auto___17073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___17073,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___17073,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17045){
var state_val_17046 = (state_17045[(1)]);
if((state_val_17046 === (7))){
var state_17045__$1 = state_17045;
var statearr_17047_17074 = state_17045__$1;
(statearr_17047_17074[(2)] = null);

(statearr_17047_17074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (1))){
var state_17045__$1 = state_17045;
var statearr_17048_17075 = state_17045__$1;
(statearr_17048_17075[(2)] = null);

(statearr_17048_17075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (4))){
var inst_17009 = (state_17045[(7)]);
var inst_17011 = (inst_17009 < cnt);
var state_17045__$1 = state_17045;
if(cljs.core.truth_(inst_17011)){
var statearr_17049_17076 = state_17045__$1;
(statearr_17049_17076[(1)] = (6));

} else {
var statearr_17050_17077 = state_17045__$1;
(statearr_17050_17077[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (15))){
var inst_17041 = (state_17045[(2)]);
var state_17045__$1 = state_17045;
var statearr_17051_17078 = state_17045__$1;
(statearr_17051_17078[(2)] = inst_17041);

(statearr_17051_17078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (13))){
var inst_17034 = cljs.core.async.close_BANG_.call(null,out);
var state_17045__$1 = state_17045;
var statearr_17052_17079 = state_17045__$1;
(statearr_17052_17079[(2)] = inst_17034);

(statearr_17052_17079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (6))){
var state_17045__$1 = state_17045;
var statearr_17053_17080 = state_17045__$1;
(statearr_17053_17080[(2)] = null);

(statearr_17053_17080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (3))){
var inst_17043 = (state_17045[(2)]);
var state_17045__$1 = state_17045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17045__$1,inst_17043);
} else {
if((state_val_17046 === (12))){
var inst_17031 = (state_17045[(8)]);
var inst_17031__$1 = (state_17045[(2)]);
var inst_17032 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17031__$1);
var state_17045__$1 = (function (){var statearr_17054 = state_17045;
(statearr_17054[(8)] = inst_17031__$1);

return statearr_17054;
})();
if(cljs.core.truth_(inst_17032)){
var statearr_17055_17081 = state_17045__$1;
(statearr_17055_17081[(1)] = (13));

} else {
var statearr_17056_17082 = state_17045__$1;
(statearr_17056_17082[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (2))){
var inst_17008 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17009 = (0);
var state_17045__$1 = (function (){var statearr_17057 = state_17045;
(statearr_17057[(7)] = inst_17009);

(statearr_17057[(9)] = inst_17008);

return statearr_17057;
})();
var statearr_17058_17083 = state_17045__$1;
(statearr_17058_17083[(2)] = null);

(statearr_17058_17083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (11))){
var inst_17009 = (state_17045[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17045,(10),Object,null,(9));
var inst_17018 = chs__$1.call(null,inst_17009);
var inst_17019 = done.call(null,inst_17009);
var inst_17020 = cljs.core.async.take_BANG_.call(null,inst_17018,inst_17019);
var state_17045__$1 = state_17045;
var statearr_17059_17084 = state_17045__$1;
(statearr_17059_17084[(2)] = inst_17020);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17045__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (9))){
var inst_17009 = (state_17045[(7)]);
var inst_17022 = (state_17045[(2)]);
var inst_17023 = (inst_17009 + (1));
var inst_17009__$1 = inst_17023;
var state_17045__$1 = (function (){var statearr_17060 = state_17045;
(statearr_17060[(10)] = inst_17022);

(statearr_17060[(7)] = inst_17009__$1);

return statearr_17060;
})();
var statearr_17061_17085 = state_17045__$1;
(statearr_17061_17085[(2)] = null);

(statearr_17061_17085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (5))){
var inst_17029 = (state_17045[(2)]);
var state_17045__$1 = (function (){var statearr_17062 = state_17045;
(statearr_17062[(11)] = inst_17029);

return statearr_17062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17045__$1,(12),dchan);
} else {
if((state_val_17046 === (14))){
var inst_17031 = (state_17045[(8)]);
var inst_17036 = cljs.core.apply.call(null,f,inst_17031);
var state_17045__$1 = state_17045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17045__$1,(16),out,inst_17036);
} else {
if((state_val_17046 === (16))){
var inst_17038 = (state_17045[(2)]);
var state_17045__$1 = (function (){var statearr_17063 = state_17045;
(statearr_17063[(12)] = inst_17038);

return statearr_17063;
})();
var statearr_17064_17086 = state_17045__$1;
(statearr_17064_17086[(2)] = null);

(statearr_17064_17086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (10))){
var inst_17013 = (state_17045[(2)]);
var inst_17014 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17045__$1 = (function (){var statearr_17065 = state_17045;
(statearr_17065[(13)] = inst_17013);

return statearr_17065;
})();
var statearr_17066_17087 = state_17045__$1;
(statearr_17066_17087[(2)] = inst_17014);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17045__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17046 === (8))){
var inst_17027 = (state_17045[(2)]);
var state_17045__$1 = state_17045;
var statearr_17067_17088 = state_17045__$1;
(statearr_17067_17088[(2)] = inst_17027);

(statearr_17067_17088[(1)] = (5));


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
});})(c__15734__auto___17073,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15639__auto__,c__15734__auto___17073,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15640__auto__ = null;
var cljs$core$async$state_machine__15640__auto____0 = (function (){
var statearr_17068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17068[(0)] = cljs$core$async$state_machine__15640__auto__);

(statearr_17068[(1)] = (1));

return statearr_17068;
});
var cljs$core$async$state_machine__15640__auto____1 = (function (state_17045){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_17045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e17069){if((e17069 instanceof Object)){
var ex__15643__auto__ = e17069;
var statearr_17070_17089 = state_17045;
(statearr_17070_17089[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17090 = state_17045;
state_17045 = G__17090;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$state_machine__15640__auto__ = function(state_17045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15640__auto____1.call(this,state_17045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15640__auto____0;
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15640__auto____1;
return cljs$core$async$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___17073,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15736__auto__ = (function (){var statearr_17071 = f__15735__auto__.call(null);
(statearr_17071[(6)] = c__15734__auto___17073);

return statearr_17071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___17073,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17093 = arguments.length;
switch (G__17093) {
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
var c__15734__auto___17147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___17147,out){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___17147,out){
return (function (state_17125){
var state_val_17126 = (state_17125[(1)]);
if((state_val_17126 === (7))){
var inst_17104 = (state_17125[(7)]);
var inst_17105 = (state_17125[(8)]);
var inst_17104__$1 = (state_17125[(2)]);
var inst_17105__$1 = cljs.core.nth.call(null,inst_17104__$1,(0),null);
var inst_17106 = cljs.core.nth.call(null,inst_17104__$1,(1),null);
var inst_17107 = (inst_17105__$1 == null);
var state_17125__$1 = (function (){var statearr_17127 = state_17125;
(statearr_17127[(7)] = inst_17104__$1);

(statearr_17127[(8)] = inst_17105__$1);

(statearr_17127[(9)] = inst_17106);

return statearr_17127;
})();
if(cljs.core.truth_(inst_17107)){
var statearr_17128_17148 = state_17125__$1;
(statearr_17128_17148[(1)] = (8));

} else {
var statearr_17129_17149 = state_17125__$1;
(statearr_17129_17149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (1))){
var inst_17094 = cljs.core.vec.call(null,chs);
var inst_17095 = inst_17094;
var state_17125__$1 = (function (){var statearr_17130 = state_17125;
(statearr_17130[(10)] = inst_17095);

return statearr_17130;
})();
var statearr_17131_17150 = state_17125__$1;
(statearr_17131_17150[(2)] = null);

(statearr_17131_17150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (4))){
var inst_17095 = (state_17125[(10)]);
var state_17125__$1 = state_17125;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17125__$1,(7),inst_17095);
} else {
if((state_val_17126 === (6))){
var inst_17121 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
var statearr_17132_17151 = state_17125__$1;
(statearr_17132_17151[(2)] = inst_17121);

(statearr_17132_17151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (3))){
var inst_17123 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17125__$1,inst_17123);
} else {
if((state_val_17126 === (2))){
var inst_17095 = (state_17125[(10)]);
var inst_17097 = cljs.core.count.call(null,inst_17095);
var inst_17098 = (inst_17097 > (0));
var state_17125__$1 = state_17125;
if(cljs.core.truth_(inst_17098)){
var statearr_17134_17152 = state_17125__$1;
(statearr_17134_17152[(1)] = (4));

} else {
var statearr_17135_17153 = state_17125__$1;
(statearr_17135_17153[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (11))){
var inst_17095 = (state_17125[(10)]);
var inst_17114 = (state_17125[(2)]);
var tmp17133 = inst_17095;
var inst_17095__$1 = tmp17133;
var state_17125__$1 = (function (){var statearr_17136 = state_17125;
(statearr_17136[(11)] = inst_17114);

(statearr_17136[(10)] = inst_17095__$1);

return statearr_17136;
})();
var statearr_17137_17154 = state_17125__$1;
(statearr_17137_17154[(2)] = null);

(statearr_17137_17154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (9))){
var inst_17105 = (state_17125[(8)]);
var state_17125__$1 = state_17125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17125__$1,(11),out,inst_17105);
} else {
if((state_val_17126 === (5))){
var inst_17119 = cljs.core.async.close_BANG_.call(null,out);
var state_17125__$1 = state_17125;
var statearr_17138_17155 = state_17125__$1;
(statearr_17138_17155[(2)] = inst_17119);

(statearr_17138_17155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (10))){
var inst_17117 = (state_17125[(2)]);
var state_17125__$1 = state_17125;
var statearr_17139_17156 = state_17125__$1;
(statearr_17139_17156[(2)] = inst_17117);

(statearr_17139_17156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17126 === (8))){
var inst_17104 = (state_17125[(7)]);
var inst_17105 = (state_17125[(8)]);
var inst_17095 = (state_17125[(10)]);
var inst_17106 = (state_17125[(9)]);
var inst_17109 = (function (){var cs = inst_17095;
var vec__17100 = inst_17104;
var v = inst_17105;
var c = inst_17106;
return ((function (cs,vec__17100,v,c,inst_17104,inst_17105,inst_17095,inst_17106,state_val_17126,c__15734__auto___17147,out){
return (function (p1__17091_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17091_SHARP_);
});
;})(cs,vec__17100,v,c,inst_17104,inst_17105,inst_17095,inst_17106,state_val_17126,c__15734__auto___17147,out))
})();
var inst_17110 = cljs.core.filterv.call(null,inst_17109,inst_17095);
var inst_17095__$1 = inst_17110;
var state_17125__$1 = (function (){var statearr_17140 = state_17125;
(statearr_17140[(10)] = inst_17095__$1);

return statearr_17140;
})();
var statearr_17141_17157 = state_17125__$1;
(statearr_17141_17157[(2)] = null);

(statearr_17141_17157[(1)] = (2));


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
});})(c__15734__auto___17147,out))
;
return ((function (switch__15639__auto__,c__15734__auto___17147,out){
return (function() {
var cljs$core$async$state_machine__15640__auto__ = null;
var cljs$core$async$state_machine__15640__auto____0 = (function (){
var statearr_17142 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17142[(0)] = cljs$core$async$state_machine__15640__auto__);

(statearr_17142[(1)] = (1));

return statearr_17142;
});
var cljs$core$async$state_machine__15640__auto____1 = (function (state_17125){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_17125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e17143){if((e17143 instanceof Object)){
var ex__15643__auto__ = e17143;
var statearr_17144_17158 = state_17125;
(statearr_17144_17158[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17159 = state_17125;
state_17125 = G__17159;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$state_machine__15640__auto__ = function(state_17125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15640__auto____1.call(this,state_17125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15640__auto____0;
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15640__auto____1;
return cljs$core$async$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___17147,out))
})();
var state__15736__auto__ = (function (){var statearr_17145 = f__15735__auto__.call(null);
(statearr_17145[(6)] = c__15734__auto___17147);

return statearr_17145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___17147,out))
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
var G__17161 = arguments.length;
switch (G__17161) {
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
var c__15734__auto___17206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___17206,out){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___17206,out){
return (function (state_17185){
var state_val_17186 = (state_17185[(1)]);
if((state_val_17186 === (7))){
var inst_17167 = (state_17185[(7)]);
var inst_17167__$1 = (state_17185[(2)]);
var inst_17168 = (inst_17167__$1 == null);
var inst_17169 = cljs.core.not.call(null,inst_17168);
var state_17185__$1 = (function (){var statearr_17187 = state_17185;
(statearr_17187[(7)] = inst_17167__$1);

return statearr_17187;
})();
if(inst_17169){
var statearr_17188_17207 = state_17185__$1;
(statearr_17188_17207[(1)] = (8));

} else {
var statearr_17189_17208 = state_17185__$1;
(statearr_17189_17208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17186 === (1))){
var inst_17162 = (0);
var state_17185__$1 = (function (){var statearr_17190 = state_17185;
(statearr_17190[(8)] = inst_17162);

return statearr_17190;
})();
var statearr_17191_17209 = state_17185__$1;
(statearr_17191_17209[(2)] = null);

(statearr_17191_17209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17186 === (4))){
var state_17185__$1 = state_17185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17185__$1,(7),ch);
} else {
if((state_val_17186 === (6))){
var inst_17180 = (state_17185[(2)]);
var state_17185__$1 = state_17185;
var statearr_17192_17210 = state_17185__$1;
(statearr_17192_17210[(2)] = inst_17180);

(statearr_17192_17210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17186 === (3))){
var inst_17182 = (state_17185[(2)]);
var inst_17183 = cljs.core.async.close_BANG_.call(null,out);
var state_17185__$1 = (function (){var statearr_17193 = state_17185;
(statearr_17193[(9)] = inst_17182);

return statearr_17193;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17185__$1,inst_17183);
} else {
if((state_val_17186 === (2))){
var inst_17162 = (state_17185[(8)]);
var inst_17164 = (inst_17162 < n);
var state_17185__$1 = state_17185;
if(cljs.core.truth_(inst_17164)){
var statearr_17194_17211 = state_17185__$1;
(statearr_17194_17211[(1)] = (4));

} else {
var statearr_17195_17212 = state_17185__$1;
(statearr_17195_17212[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17186 === (11))){
var inst_17162 = (state_17185[(8)]);
var inst_17172 = (state_17185[(2)]);
var inst_17173 = (inst_17162 + (1));
var inst_17162__$1 = inst_17173;
var state_17185__$1 = (function (){var statearr_17196 = state_17185;
(statearr_17196[(8)] = inst_17162__$1);

(statearr_17196[(10)] = inst_17172);

return statearr_17196;
})();
var statearr_17197_17213 = state_17185__$1;
(statearr_17197_17213[(2)] = null);

(statearr_17197_17213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17186 === (9))){
var state_17185__$1 = state_17185;
var statearr_17198_17214 = state_17185__$1;
(statearr_17198_17214[(2)] = null);

(statearr_17198_17214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17186 === (5))){
var state_17185__$1 = state_17185;
var statearr_17199_17215 = state_17185__$1;
(statearr_17199_17215[(2)] = null);

(statearr_17199_17215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17186 === (10))){
var inst_17177 = (state_17185[(2)]);
var state_17185__$1 = state_17185;
var statearr_17200_17216 = state_17185__$1;
(statearr_17200_17216[(2)] = inst_17177);

(statearr_17200_17216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17186 === (8))){
var inst_17167 = (state_17185[(7)]);
var state_17185__$1 = state_17185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17185__$1,(11),out,inst_17167);
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
});})(c__15734__auto___17206,out))
;
return ((function (switch__15639__auto__,c__15734__auto___17206,out){
return (function() {
var cljs$core$async$state_machine__15640__auto__ = null;
var cljs$core$async$state_machine__15640__auto____0 = (function (){
var statearr_17201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17201[(0)] = cljs$core$async$state_machine__15640__auto__);

(statearr_17201[(1)] = (1));

return statearr_17201;
});
var cljs$core$async$state_machine__15640__auto____1 = (function (state_17185){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_17185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e17202){if((e17202 instanceof Object)){
var ex__15643__auto__ = e17202;
var statearr_17203_17217 = state_17185;
(statearr_17203_17217[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17218 = state_17185;
state_17185 = G__17218;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$state_machine__15640__auto__ = function(state_17185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15640__auto____1.call(this,state_17185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15640__auto____0;
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15640__auto____1;
return cljs$core$async$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___17206,out))
})();
var state__15736__auto__ = (function (){var statearr_17204 = f__15735__auto__.call(null);
(statearr_17204[(6)] = c__15734__auto___17206);

return statearr_17204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___17206,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17220 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17220 = (function (f,ch,meta17221){
this.f = f;
this.ch = ch;
this.meta17221 = meta17221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17222,meta17221__$1){
var self__ = this;
var _17222__$1 = this;
return (new cljs.core.async.t_cljs$core$async17220(self__.f,self__.ch,meta17221__$1));
});

cljs.core.async.t_cljs$core$async17220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17222){
var self__ = this;
var _17222__$1 = this;
return self__.meta17221;
});

cljs.core.async.t_cljs$core$async17220.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17220.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17220.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17220.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17220.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17223 = (function (f,ch,meta17221,_,fn1,meta17224){
this.f = f;
this.ch = ch;
this.meta17221 = meta17221;
this._ = _;
this.fn1 = fn1;
this.meta17224 = meta17224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17225,meta17224__$1){
var self__ = this;
var _17225__$1 = this;
return (new cljs.core.async.t_cljs$core$async17223(self__.f,self__.ch,self__.meta17221,self__._,self__.fn1,meta17224__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17225){
var self__ = this;
var _17225__$1 = this;
return self__.meta17224;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17219_SHARP_){
return f1.call(null,(((p1__17219_SHARP_ == null))?null:self__.f.call(null,p1__17219_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17223.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17221","meta17221",-780371480,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17220","cljs.core.async/t_cljs$core$async17220",-1935694544,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17224","meta17224",-1602456049,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17223";

cljs.core.async.t_cljs$core$async17223.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17223");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17223.
 */
cljs.core.async.__GT_t_cljs$core$async17223 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17223(f__$1,ch__$1,meta17221__$1,___$2,fn1__$1,meta17224){
return (new cljs.core.async.t_cljs$core$async17223(f__$1,ch__$1,meta17221__$1,___$2,fn1__$1,meta17224));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17223(self__.f,self__.ch,self__.meta17221,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async17220.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17220.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17221","meta17221",-780371480,null)], null);
});

cljs.core.async.t_cljs$core$async17220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17220";

cljs.core.async.t_cljs$core$async17220.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17220");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17220.
 */
cljs.core.async.__GT_t_cljs$core$async17220 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17220(f__$1,ch__$1,meta17221){
return (new cljs.core.async.t_cljs$core$async17220(f__$1,ch__$1,meta17221));
});

}

return (new cljs.core.async.t_cljs$core$async17220(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17226 = (function (f,ch,meta17227){
this.f = f;
this.ch = ch;
this.meta17227 = meta17227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17228,meta17227__$1){
var self__ = this;
var _17228__$1 = this;
return (new cljs.core.async.t_cljs$core$async17226(self__.f,self__.ch,meta17227__$1));
});

cljs.core.async.t_cljs$core$async17226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17228){
var self__ = this;
var _17228__$1 = this;
return self__.meta17227;
});

cljs.core.async.t_cljs$core$async17226.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17226.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17226.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17227","meta17227",-89144141,null)], null);
});

cljs.core.async.t_cljs$core$async17226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17226";

cljs.core.async.t_cljs$core$async17226.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17226");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17226.
 */
cljs.core.async.__GT_t_cljs$core$async17226 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17226(f__$1,ch__$1,meta17227){
return (new cljs.core.async.t_cljs$core$async17226(f__$1,ch__$1,meta17227));
});

}

return (new cljs.core.async.t_cljs$core$async17226(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17229 = (function (p,ch,meta17230){
this.p = p;
this.ch = ch;
this.meta17230 = meta17230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17231,meta17230__$1){
var self__ = this;
var _17231__$1 = this;
return (new cljs.core.async.t_cljs$core$async17229(self__.p,self__.ch,meta17230__$1));
});

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17231){
var self__ = this;
var _17231__$1 = this;
return self__.meta17230;
});

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17230","meta17230",-713207607,null)], null);
});

cljs.core.async.t_cljs$core$async17229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17229";

cljs.core.async.t_cljs$core$async17229.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17229");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17229.
 */
cljs.core.async.__GT_t_cljs$core$async17229 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17229(p__$1,ch__$1,meta17230){
return (new cljs.core.async.t_cljs$core$async17229(p__$1,ch__$1,meta17230));
});

}

return (new cljs.core.async.t_cljs$core$async17229(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17233 = arguments.length;
switch (G__17233) {
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
var c__15734__auto___17273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___17273,out){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___17273,out){
return (function (state_17254){
var state_val_17255 = (state_17254[(1)]);
if((state_val_17255 === (7))){
var inst_17250 = (state_17254[(2)]);
var state_17254__$1 = state_17254;
var statearr_17256_17274 = state_17254__$1;
(statearr_17256_17274[(2)] = inst_17250);

(statearr_17256_17274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17255 === (1))){
var state_17254__$1 = state_17254;
var statearr_17257_17275 = state_17254__$1;
(statearr_17257_17275[(2)] = null);

(statearr_17257_17275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17255 === (4))){
var inst_17236 = (state_17254[(7)]);
var inst_17236__$1 = (state_17254[(2)]);
var inst_17237 = (inst_17236__$1 == null);
var state_17254__$1 = (function (){var statearr_17258 = state_17254;
(statearr_17258[(7)] = inst_17236__$1);

return statearr_17258;
})();
if(cljs.core.truth_(inst_17237)){
var statearr_17259_17276 = state_17254__$1;
(statearr_17259_17276[(1)] = (5));

} else {
var statearr_17260_17277 = state_17254__$1;
(statearr_17260_17277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17255 === (6))){
var inst_17236 = (state_17254[(7)]);
var inst_17241 = p.call(null,inst_17236);
var state_17254__$1 = state_17254;
if(cljs.core.truth_(inst_17241)){
var statearr_17261_17278 = state_17254__$1;
(statearr_17261_17278[(1)] = (8));

} else {
var statearr_17262_17279 = state_17254__$1;
(statearr_17262_17279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17255 === (3))){
var inst_17252 = (state_17254[(2)]);
var state_17254__$1 = state_17254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17254__$1,inst_17252);
} else {
if((state_val_17255 === (2))){
var state_17254__$1 = state_17254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17254__$1,(4),ch);
} else {
if((state_val_17255 === (11))){
var inst_17244 = (state_17254[(2)]);
var state_17254__$1 = state_17254;
var statearr_17263_17280 = state_17254__$1;
(statearr_17263_17280[(2)] = inst_17244);

(statearr_17263_17280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17255 === (9))){
var state_17254__$1 = state_17254;
var statearr_17264_17281 = state_17254__$1;
(statearr_17264_17281[(2)] = null);

(statearr_17264_17281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17255 === (5))){
var inst_17239 = cljs.core.async.close_BANG_.call(null,out);
var state_17254__$1 = state_17254;
var statearr_17265_17282 = state_17254__$1;
(statearr_17265_17282[(2)] = inst_17239);

(statearr_17265_17282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17255 === (10))){
var inst_17247 = (state_17254[(2)]);
var state_17254__$1 = (function (){var statearr_17266 = state_17254;
(statearr_17266[(8)] = inst_17247);

return statearr_17266;
})();
var statearr_17267_17283 = state_17254__$1;
(statearr_17267_17283[(2)] = null);

(statearr_17267_17283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17255 === (8))){
var inst_17236 = (state_17254[(7)]);
var state_17254__$1 = state_17254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17254__$1,(11),out,inst_17236);
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
});})(c__15734__auto___17273,out))
;
return ((function (switch__15639__auto__,c__15734__auto___17273,out){
return (function() {
var cljs$core$async$state_machine__15640__auto__ = null;
var cljs$core$async$state_machine__15640__auto____0 = (function (){
var statearr_17268 = [null,null,null,null,null,null,null,null,null];
(statearr_17268[(0)] = cljs$core$async$state_machine__15640__auto__);

(statearr_17268[(1)] = (1));

return statearr_17268;
});
var cljs$core$async$state_machine__15640__auto____1 = (function (state_17254){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_17254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e17269){if((e17269 instanceof Object)){
var ex__15643__auto__ = e17269;
var statearr_17270_17284 = state_17254;
(statearr_17270_17284[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17285 = state_17254;
state_17254 = G__17285;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$state_machine__15640__auto__ = function(state_17254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15640__auto____1.call(this,state_17254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15640__auto____0;
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15640__auto____1;
return cljs$core$async$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___17273,out))
})();
var state__15736__auto__ = (function (){var statearr_17271 = f__15735__auto__.call(null);
(statearr_17271[(6)] = c__15734__auto___17273);

return statearr_17271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___17273,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17287 = arguments.length;
switch (G__17287) {
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
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_17350){
var state_val_17351 = (state_17350[(1)]);
if((state_val_17351 === (7))){
var inst_17346 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17352_17390 = state_17350__$1;
(statearr_17352_17390[(2)] = inst_17346);

(statearr_17352_17390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (20))){
var inst_17316 = (state_17350[(7)]);
var inst_17327 = (state_17350[(2)]);
var inst_17328 = cljs.core.next.call(null,inst_17316);
var inst_17302 = inst_17328;
var inst_17303 = null;
var inst_17304 = (0);
var inst_17305 = (0);
var state_17350__$1 = (function (){var statearr_17353 = state_17350;
(statearr_17353[(8)] = inst_17303);

(statearr_17353[(9)] = inst_17327);

(statearr_17353[(10)] = inst_17305);

(statearr_17353[(11)] = inst_17302);

(statearr_17353[(12)] = inst_17304);

return statearr_17353;
})();
var statearr_17354_17391 = state_17350__$1;
(statearr_17354_17391[(2)] = null);

(statearr_17354_17391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (1))){
var state_17350__$1 = state_17350;
var statearr_17355_17392 = state_17350__$1;
(statearr_17355_17392[(2)] = null);

(statearr_17355_17392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (4))){
var inst_17291 = (state_17350[(13)]);
var inst_17291__$1 = (state_17350[(2)]);
var inst_17292 = (inst_17291__$1 == null);
var state_17350__$1 = (function (){var statearr_17356 = state_17350;
(statearr_17356[(13)] = inst_17291__$1);

return statearr_17356;
})();
if(cljs.core.truth_(inst_17292)){
var statearr_17357_17393 = state_17350__$1;
(statearr_17357_17393[(1)] = (5));

} else {
var statearr_17358_17394 = state_17350__$1;
(statearr_17358_17394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (15))){
var state_17350__$1 = state_17350;
var statearr_17362_17395 = state_17350__$1;
(statearr_17362_17395[(2)] = null);

(statearr_17362_17395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (21))){
var state_17350__$1 = state_17350;
var statearr_17363_17396 = state_17350__$1;
(statearr_17363_17396[(2)] = null);

(statearr_17363_17396[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (13))){
var inst_17303 = (state_17350[(8)]);
var inst_17305 = (state_17350[(10)]);
var inst_17302 = (state_17350[(11)]);
var inst_17304 = (state_17350[(12)]);
var inst_17312 = (state_17350[(2)]);
var inst_17313 = (inst_17305 + (1));
var tmp17359 = inst_17303;
var tmp17360 = inst_17302;
var tmp17361 = inst_17304;
var inst_17302__$1 = tmp17360;
var inst_17303__$1 = tmp17359;
var inst_17304__$1 = tmp17361;
var inst_17305__$1 = inst_17313;
var state_17350__$1 = (function (){var statearr_17364 = state_17350;
(statearr_17364[(14)] = inst_17312);

(statearr_17364[(8)] = inst_17303__$1);

(statearr_17364[(10)] = inst_17305__$1);

(statearr_17364[(11)] = inst_17302__$1);

(statearr_17364[(12)] = inst_17304__$1);

return statearr_17364;
})();
var statearr_17365_17397 = state_17350__$1;
(statearr_17365_17397[(2)] = null);

(statearr_17365_17397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (22))){
var state_17350__$1 = state_17350;
var statearr_17366_17398 = state_17350__$1;
(statearr_17366_17398[(2)] = null);

(statearr_17366_17398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (6))){
var inst_17291 = (state_17350[(13)]);
var inst_17300 = f.call(null,inst_17291);
var inst_17301 = cljs.core.seq.call(null,inst_17300);
var inst_17302 = inst_17301;
var inst_17303 = null;
var inst_17304 = (0);
var inst_17305 = (0);
var state_17350__$1 = (function (){var statearr_17367 = state_17350;
(statearr_17367[(8)] = inst_17303);

(statearr_17367[(10)] = inst_17305);

(statearr_17367[(11)] = inst_17302);

(statearr_17367[(12)] = inst_17304);

return statearr_17367;
})();
var statearr_17368_17399 = state_17350__$1;
(statearr_17368_17399[(2)] = null);

(statearr_17368_17399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (17))){
var inst_17316 = (state_17350[(7)]);
var inst_17320 = cljs.core.chunk_first.call(null,inst_17316);
var inst_17321 = cljs.core.chunk_rest.call(null,inst_17316);
var inst_17322 = cljs.core.count.call(null,inst_17320);
var inst_17302 = inst_17321;
var inst_17303 = inst_17320;
var inst_17304 = inst_17322;
var inst_17305 = (0);
var state_17350__$1 = (function (){var statearr_17369 = state_17350;
(statearr_17369[(8)] = inst_17303);

(statearr_17369[(10)] = inst_17305);

(statearr_17369[(11)] = inst_17302);

(statearr_17369[(12)] = inst_17304);

return statearr_17369;
})();
var statearr_17370_17400 = state_17350__$1;
(statearr_17370_17400[(2)] = null);

(statearr_17370_17400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (3))){
var inst_17348 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17350__$1,inst_17348);
} else {
if((state_val_17351 === (12))){
var inst_17336 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17371_17401 = state_17350__$1;
(statearr_17371_17401[(2)] = inst_17336);

(statearr_17371_17401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (2))){
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17350__$1,(4),in$);
} else {
if((state_val_17351 === (23))){
var inst_17344 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17372_17402 = state_17350__$1;
(statearr_17372_17402[(2)] = inst_17344);

(statearr_17372_17402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (19))){
var inst_17331 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17373_17403 = state_17350__$1;
(statearr_17373_17403[(2)] = inst_17331);

(statearr_17373_17403[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (11))){
var inst_17302 = (state_17350[(11)]);
var inst_17316 = (state_17350[(7)]);
var inst_17316__$1 = cljs.core.seq.call(null,inst_17302);
var state_17350__$1 = (function (){var statearr_17374 = state_17350;
(statearr_17374[(7)] = inst_17316__$1);

return statearr_17374;
})();
if(inst_17316__$1){
var statearr_17375_17404 = state_17350__$1;
(statearr_17375_17404[(1)] = (14));

} else {
var statearr_17376_17405 = state_17350__$1;
(statearr_17376_17405[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (9))){
var inst_17338 = (state_17350[(2)]);
var inst_17339 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17350__$1 = (function (){var statearr_17377 = state_17350;
(statearr_17377[(15)] = inst_17338);

return statearr_17377;
})();
if(cljs.core.truth_(inst_17339)){
var statearr_17378_17406 = state_17350__$1;
(statearr_17378_17406[(1)] = (21));

} else {
var statearr_17379_17407 = state_17350__$1;
(statearr_17379_17407[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (5))){
var inst_17294 = cljs.core.async.close_BANG_.call(null,out);
var state_17350__$1 = state_17350;
var statearr_17380_17408 = state_17350__$1;
(statearr_17380_17408[(2)] = inst_17294);

(statearr_17380_17408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (14))){
var inst_17316 = (state_17350[(7)]);
var inst_17318 = cljs.core.chunked_seq_QMARK_.call(null,inst_17316);
var state_17350__$1 = state_17350;
if(inst_17318){
var statearr_17381_17409 = state_17350__$1;
(statearr_17381_17409[(1)] = (17));

} else {
var statearr_17382_17410 = state_17350__$1;
(statearr_17382_17410[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (16))){
var inst_17334 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17383_17411 = state_17350__$1;
(statearr_17383_17411[(2)] = inst_17334);

(statearr_17383_17411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (10))){
var inst_17303 = (state_17350[(8)]);
var inst_17305 = (state_17350[(10)]);
var inst_17310 = cljs.core._nth.call(null,inst_17303,inst_17305);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17350__$1,(13),out,inst_17310);
} else {
if((state_val_17351 === (18))){
var inst_17316 = (state_17350[(7)]);
var inst_17325 = cljs.core.first.call(null,inst_17316);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17350__$1,(20),out,inst_17325);
} else {
if((state_val_17351 === (8))){
var inst_17305 = (state_17350[(10)]);
var inst_17304 = (state_17350[(12)]);
var inst_17307 = (inst_17305 < inst_17304);
var inst_17308 = inst_17307;
var state_17350__$1 = state_17350;
if(cljs.core.truth_(inst_17308)){
var statearr_17384_17412 = state_17350__$1;
(statearr_17384_17412[(1)] = (10));

} else {
var statearr_17385_17413 = state_17350__$1;
(statearr_17385_17413[(1)] = (11));

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
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15640__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15640__auto____0 = (function (){
var statearr_17386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17386[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15640__auto__);

(statearr_17386[(1)] = (1));

return statearr_17386;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15640__auto____1 = (function (state_17350){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_17350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e17387){if((e17387 instanceof Object)){
var ex__15643__auto__ = e17387;
var statearr_17388_17414 = state_17350;
(statearr_17388_17414[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17415 = state_17350;
state_17350 = G__17415;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15640__auto__ = function(state_17350){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15640__auto____1.call(this,state_17350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15640__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15640__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_17389 = f__15735__auto__.call(null);
(statearr_17389[(6)] = c__15734__auto__);

return statearr_17389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17417 = arguments.length;
switch (G__17417) {
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
var G__17420 = arguments.length;
switch (G__17420) {
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
var G__17423 = arguments.length;
switch (G__17423) {
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
var c__15734__auto___17470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___17470,out){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___17470,out){
return (function (state_17447){
var state_val_17448 = (state_17447[(1)]);
if((state_val_17448 === (7))){
var inst_17442 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
var statearr_17449_17471 = state_17447__$1;
(statearr_17449_17471[(2)] = inst_17442);

(statearr_17449_17471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (1))){
var inst_17424 = null;
var state_17447__$1 = (function (){var statearr_17450 = state_17447;
(statearr_17450[(7)] = inst_17424);

return statearr_17450;
})();
var statearr_17451_17472 = state_17447__$1;
(statearr_17451_17472[(2)] = null);

(statearr_17451_17472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (4))){
var inst_17427 = (state_17447[(8)]);
var inst_17427__$1 = (state_17447[(2)]);
var inst_17428 = (inst_17427__$1 == null);
var inst_17429 = cljs.core.not.call(null,inst_17428);
var state_17447__$1 = (function (){var statearr_17452 = state_17447;
(statearr_17452[(8)] = inst_17427__$1);

return statearr_17452;
})();
if(inst_17429){
var statearr_17453_17473 = state_17447__$1;
(statearr_17453_17473[(1)] = (5));

} else {
var statearr_17454_17474 = state_17447__$1;
(statearr_17454_17474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (6))){
var state_17447__$1 = state_17447;
var statearr_17455_17475 = state_17447__$1;
(statearr_17455_17475[(2)] = null);

(statearr_17455_17475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (3))){
var inst_17444 = (state_17447[(2)]);
var inst_17445 = cljs.core.async.close_BANG_.call(null,out);
var state_17447__$1 = (function (){var statearr_17456 = state_17447;
(statearr_17456[(9)] = inst_17444);

return statearr_17456;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17447__$1,inst_17445);
} else {
if((state_val_17448 === (2))){
var state_17447__$1 = state_17447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17447__$1,(4),ch);
} else {
if((state_val_17448 === (11))){
var inst_17427 = (state_17447[(8)]);
var inst_17436 = (state_17447[(2)]);
var inst_17424 = inst_17427;
var state_17447__$1 = (function (){var statearr_17457 = state_17447;
(statearr_17457[(7)] = inst_17424);

(statearr_17457[(10)] = inst_17436);

return statearr_17457;
})();
var statearr_17458_17476 = state_17447__$1;
(statearr_17458_17476[(2)] = null);

(statearr_17458_17476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (9))){
var inst_17427 = (state_17447[(8)]);
var state_17447__$1 = state_17447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17447__$1,(11),out,inst_17427);
} else {
if((state_val_17448 === (5))){
var inst_17424 = (state_17447[(7)]);
var inst_17427 = (state_17447[(8)]);
var inst_17431 = cljs.core._EQ_.call(null,inst_17427,inst_17424);
var state_17447__$1 = state_17447;
if(inst_17431){
var statearr_17460_17477 = state_17447__$1;
(statearr_17460_17477[(1)] = (8));

} else {
var statearr_17461_17478 = state_17447__$1;
(statearr_17461_17478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (10))){
var inst_17439 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
var statearr_17462_17479 = state_17447__$1;
(statearr_17462_17479[(2)] = inst_17439);

(statearr_17462_17479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (8))){
var inst_17424 = (state_17447[(7)]);
var tmp17459 = inst_17424;
var inst_17424__$1 = tmp17459;
var state_17447__$1 = (function (){var statearr_17463 = state_17447;
(statearr_17463[(7)] = inst_17424__$1);

return statearr_17463;
})();
var statearr_17464_17480 = state_17447__$1;
(statearr_17464_17480[(2)] = null);

(statearr_17464_17480[(1)] = (2));


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
});})(c__15734__auto___17470,out))
;
return ((function (switch__15639__auto__,c__15734__auto___17470,out){
return (function() {
var cljs$core$async$state_machine__15640__auto__ = null;
var cljs$core$async$state_machine__15640__auto____0 = (function (){
var statearr_17465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17465[(0)] = cljs$core$async$state_machine__15640__auto__);

(statearr_17465[(1)] = (1));

return statearr_17465;
});
var cljs$core$async$state_machine__15640__auto____1 = (function (state_17447){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_17447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e17466){if((e17466 instanceof Object)){
var ex__15643__auto__ = e17466;
var statearr_17467_17481 = state_17447;
(statearr_17467_17481[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17482 = state_17447;
state_17447 = G__17482;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$state_machine__15640__auto__ = function(state_17447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15640__auto____1.call(this,state_17447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15640__auto____0;
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15640__auto____1;
return cljs$core$async$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___17470,out))
})();
var state__15736__auto__ = (function (){var statearr_17468 = f__15735__auto__.call(null);
(statearr_17468[(6)] = c__15734__auto___17470);

return statearr_17468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___17470,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17484 = arguments.length;
switch (G__17484) {
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
var c__15734__auto___17550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___17550,out){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___17550,out){
return (function (state_17522){
var state_val_17523 = (state_17522[(1)]);
if((state_val_17523 === (7))){
var inst_17518 = (state_17522[(2)]);
var state_17522__$1 = state_17522;
var statearr_17524_17551 = state_17522__$1;
(statearr_17524_17551[(2)] = inst_17518);

(statearr_17524_17551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17523 === (1))){
var inst_17485 = (new Array(n));
var inst_17486 = inst_17485;
var inst_17487 = (0);
var state_17522__$1 = (function (){var statearr_17525 = state_17522;
(statearr_17525[(7)] = inst_17487);

(statearr_17525[(8)] = inst_17486);

return statearr_17525;
})();
var statearr_17526_17552 = state_17522__$1;
(statearr_17526_17552[(2)] = null);

(statearr_17526_17552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17523 === (4))){
var inst_17490 = (state_17522[(9)]);
var inst_17490__$1 = (state_17522[(2)]);
var inst_17491 = (inst_17490__$1 == null);
var inst_17492 = cljs.core.not.call(null,inst_17491);
var state_17522__$1 = (function (){var statearr_17527 = state_17522;
(statearr_17527[(9)] = inst_17490__$1);

return statearr_17527;
})();
if(inst_17492){
var statearr_17528_17553 = state_17522__$1;
(statearr_17528_17553[(1)] = (5));

} else {
var statearr_17529_17554 = state_17522__$1;
(statearr_17529_17554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17523 === (15))){
var inst_17512 = (state_17522[(2)]);
var state_17522__$1 = state_17522;
var statearr_17530_17555 = state_17522__$1;
(statearr_17530_17555[(2)] = inst_17512);

(statearr_17530_17555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17523 === (13))){
var state_17522__$1 = state_17522;
var statearr_17531_17556 = state_17522__$1;
(statearr_17531_17556[(2)] = null);

(statearr_17531_17556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17523 === (6))){
var inst_17487 = (state_17522[(7)]);
var inst_17508 = (inst_17487 > (0));
var state_17522__$1 = state_17522;
if(cljs.core.truth_(inst_17508)){
var statearr_17532_17557 = state_17522__$1;
(statearr_17532_17557[(1)] = (12));

} else {
var statearr_17533_17558 = state_17522__$1;
(statearr_17533_17558[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17523 === (3))){
var inst_17520 = (state_17522[(2)]);
var state_17522__$1 = state_17522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17522__$1,inst_17520);
} else {
if((state_val_17523 === (12))){
var inst_17486 = (state_17522[(8)]);
var inst_17510 = cljs.core.vec.call(null,inst_17486);
var state_17522__$1 = state_17522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17522__$1,(15),out,inst_17510);
} else {
if((state_val_17523 === (2))){
var state_17522__$1 = state_17522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17522__$1,(4),ch);
} else {
if((state_val_17523 === (11))){
var inst_17502 = (state_17522[(2)]);
var inst_17503 = (new Array(n));
var inst_17486 = inst_17503;
var inst_17487 = (0);
var state_17522__$1 = (function (){var statearr_17534 = state_17522;
(statearr_17534[(7)] = inst_17487);

(statearr_17534[(8)] = inst_17486);

(statearr_17534[(10)] = inst_17502);

return statearr_17534;
})();
var statearr_17535_17559 = state_17522__$1;
(statearr_17535_17559[(2)] = null);

(statearr_17535_17559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17523 === (9))){
var inst_17486 = (state_17522[(8)]);
var inst_17500 = cljs.core.vec.call(null,inst_17486);
var state_17522__$1 = state_17522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17522__$1,(11),out,inst_17500);
} else {
if((state_val_17523 === (5))){
var inst_17490 = (state_17522[(9)]);
var inst_17487 = (state_17522[(7)]);
var inst_17495 = (state_17522[(11)]);
var inst_17486 = (state_17522[(8)]);
var inst_17494 = (inst_17486[inst_17487] = inst_17490);
var inst_17495__$1 = (inst_17487 + (1));
var inst_17496 = (inst_17495__$1 < n);
var state_17522__$1 = (function (){var statearr_17536 = state_17522;
(statearr_17536[(11)] = inst_17495__$1);

(statearr_17536[(12)] = inst_17494);

return statearr_17536;
})();
if(cljs.core.truth_(inst_17496)){
var statearr_17537_17560 = state_17522__$1;
(statearr_17537_17560[(1)] = (8));

} else {
var statearr_17538_17561 = state_17522__$1;
(statearr_17538_17561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17523 === (14))){
var inst_17515 = (state_17522[(2)]);
var inst_17516 = cljs.core.async.close_BANG_.call(null,out);
var state_17522__$1 = (function (){var statearr_17540 = state_17522;
(statearr_17540[(13)] = inst_17515);

return statearr_17540;
})();
var statearr_17541_17562 = state_17522__$1;
(statearr_17541_17562[(2)] = inst_17516);

(statearr_17541_17562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17523 === (10))){
var inst_17506 = (state_17522[(2)]);
var state_17522__$1 = state_17522;
var statearr_17542_17563 = state_17522__$1;
(statearr_17542_17563[(2)] = inst_17506);

(statearr_17542_17563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17523 === (8))){
var inst_17495 = (state_17522[(11)]);
var inst_17486 = (state_17522[(8)]);
var tmp17539 = inst_17486;
var inst_17486__$1 = tmp17539;
var inst_17487 = inst_17495;
var state_17522__$1 = (function (){var statearr_17543 = state_17522;
(statearr_17543[(7)] = inst_17487);

(statearr_17543[(8)] = inst_17486__$1);

return statearr_17543;
})();
var statearr_17544_17564 = state_17522__$1;
(statearr_17544_17564[(2)] = null);

(statearr_17544_17564[(1)] = (2));


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
});})(c__15734__auto___17550,out))
;
return ((function (switch__15639__auto__,c__15734__auto___17550,out){
return (function() {
var cljs$core$async$state_machine__15640__auto__ = null;
var cljs$core$async$state_machine__15640__auto____0 = (function (){
var statearr_17545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17545[(0)] = cljs$core$async$state_machine__15640__auto__);

(statearr_17545[(1)] = (1));

return statearr_17545;
});
var cljs$core$async$state_machine__15640__auto____1 = (function (state_17522){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_17522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e17546){if((e17546 instanceof Object)){
var ex__15643__auto__ = e17546;
var statearr_17547_17565 = state_17522;
(statearr_17547_17565[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17566 = state_17522;
state_17522 = G__17566;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$state_machine__15640__auto__ = function(state_17522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15640__auto____1.call(this,state_17522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15640__auto____0;
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15640__auto____1;
return cljs$core$async$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___17550,out))
})();
var state__15736__auto__ = (function (){var statearr_17548 = f__15735__auto__.call(null);
(statearr_17548[(6)] = c__15734__auto___17550);

return statearr_17548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___17550,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17568 = arguments.length;
switch (G__17568) {
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
var c__15734__auto___17638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___17638,out){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___17638,out){
return (function (state_17610){
var state_val_17611 = (state_17610[(1)]);
if((state_val_17611 === (7))){
var inst_17606 = (state_17610[(2)]);
var state_17610__$1 = state_17610;
var statearr_17612_17639 = state_17610__$1;
(statearr_17612_17639[(2)] = inst_17606);

(statearr_17612_17639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17611 === (1))){
var inst_17569 = [];
var inst_17570 = inst_17569;
var inst_17571 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17610__$1 = (function (){var statearr_17613 = state_17610;
(statearr_17613[(7)] = inst_17571);

(statearr_17613[(8)] = inst_17570);

return statearr_17613;
})();
var statearr_17614_17640 = state_17610__$1;
(statearr_17614_17640[(2)] = null);

(statearr_17614_17640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17611 === (4))){
var inst_17574 = (state_17610[(9)]);
var inst_17574__$1 = (state_17610[(2)]);
var inst_17575 = (inst_17574__$1 == null);
var inst_17576 = cljs.core.not.call(null,inst_17575);
var state_17610__$1 = (function (){var statearr_17615 = state_17610;
(statearr_17615[(9)] = inst_17574__$1);

return statearr_17615;
})();
if(inst_17576){
var statearr_17616_17641 = state_17610__$1;
(statearr_17616_17641[(1)] = (5));

} else {
var statearr_17617_17642 = state_17610__$1;
(statearr_17617_17642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17611 === (15))){
var inst_17600 = (state_17610[(2)]);
var state_17610__$1 = state_17610;
var statearr_17618_17643 = state_17610__$1;
(statearr_17618_17643[(2)] = inst_17600);

(statearr_17618_17643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17611 === (13))){
var state_17610__$1 = state_17610;
var statearr_17619_17644 = state_17610__$1;
(statearr_17619_17644[(2)] = null);

(statearr_17619_17644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17611 === (6))){
var inst_17570 = (state_17610[(8)]);
var inst_17595 = inst_17570.length;
var inst_17596 = (inst_17595 > (0));
var state_17610__$1 = state_17610;
if(cljs.core.truth_(inst_17596)){
var statearr_17620_17645 = state_17610__$1;
(statearr_17620_17645[(1)] = (12));

} else {
var statearr_17621_17646 = state_17610__$1;
(statearr_17621_17646[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17611 === (3))){
var inst_17608 = (state_17610[(2)]);
var state_17610__$1 = state_17610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17610__$1,inst_17608);
} else {
if((state_val_17611 === (12))){
var inst_17570 = (state_17610[(8)]);
var inst_17598 = cljs.core.vec.call(null,inst_17570);
var state_17610__$1 = state_17610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17610__$1,(15),out,inst_17598);
} else {
if((state_val_17611 === (2))){
var state_17610__$1 = state_17610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17610__$1,(4),ch);
} else {
if((state_val_17611 === (11))){
var inst_17578 = (state_17610[(10)]);
var inst_17574 = (state_17610[(9)]);
var inst_17588 = (state_17610[(2)]);
var inst_17589 = [];
var inst_17590 = inst_17589.push(inst_17574);
var inst_17570 = inst_17589;
var inst_17571 = inst_17578;
var state_17610__$1 = (function (){var statearr_17622 = state_17610;
(statearr_17622[(7)] = inst_17571);

(statearr_17622[(8)] = inst_17570);

(statearr_17622[(11)] = inst_17588);

(statearr_17622[(12)] = inst_17590);

return statearr_17622;
})();
var statearr_17623_17647 = state_17610__$1;
(statearr_17623_17647[(2)] = null);

(statearr_17623_17647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17611 === (9))){
var inst_17570 = (state_17610[(8)]);
var inst_17586 = cljs.core.vec.call(null,inst_17570);
var state_17610__$1 = state_17610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17610__$1,(11),out,inst_17586);
} else {
if((state_val_17611 === (5))){
var inst_17571 = (state_17610[(7)]);
var inst_17578 = (state_17610[(10)]);
var inst_17574 = (state_17610[(9)]);
var inst_17578__$1 = f.call(null,inst_17574);
var inst_17579 = cljs.core._EQ_.call(null,inst_17578__$1,inst_17571);
var inst_17580 = cljs.core.keyword_identical_QMARK_.call(null,inst_17571,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17581 = ((inst_17579) || (inst_17580));
var state_17610__$1 = (function (){var statearr_17624 = state_17610;
(statearr_17624[(10)] = inst_17578__$1);

return statearr_17624;
})();
if(cljs.core.truth_(inst_17581)){
var statearr_17625_17648 = state_17610__$1;
(statearr_17625_17648[(1)] = (8));

} else {
var statearr_17626_17649 = state_17610__$1;
(statearr_17626_17649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17611 === (14))){
var inst_17603 = (state_17610[(2)]);
var inst_17604 = cljs.core.async.close_BANG_.call(null,out);
var state_17610__$1 = (function (){var statearr_17628 = state_17610;
(statearr_17628[(13)] = inst_17603);

return statearr_17628;
})();
var statearr_17629_17650 = state_17610__$1;
(statearr_17629_17650[(2)] = inst_17604);

(statearr_17629_17650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17611 === (10))){
var inst_17593 = (state_17610[(2)]);
var state_17610__$1 = state_17610;
var statearr_17630_17651 = state_17610__$1;
(statearr_17630_17651[(2)] = inst_17593);

(statearr_17630_17651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17611 === (8))){
var inst_17570 = (state_17610[(8)]);
var inst_17578 = (state_17610[(10)]);
var inst_17574 = (state_17610[(9)]);
var inst_17583 = inst_17570.push(inst_17574);
var tmp17627 = inst_17570;
var inst_17570__$1 = tmp17627;
var inst_17571 = inst_17578;
var state_17610__$1 = (function (){var statearr_17631 = state_17610;
(statearr_17631[(7)] = inst_17571);

(statearr_17631[(8)] = inst_17570__$1);

(statearr_17631[(14)] = inst_17583);

return statearr_17631;
})();
var statearr_17632_17652 = state_17610__$1;
(statearr_17632_17652[(2)] = null);

(statearr_17632_17652[(1)] = (2));


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
});})(c__15734__auto___17638,out))
;
return ((function (switch__15639__auto__,c__15734__auto___17638,out){
return (function() {
var cljs$core$async$state_machine__15640__auto__ = null;
var cljs$core$async$state_machine__15640__auto____0 = (function (){
var statearr_17633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17633[(0)] = cljs$core$async$state_machine__15640__auto__);

(statearr_17633[(1)] = (1));

return statearr_17633;
});
var cljs$core$async$state_machine__15640__auto____1 = (function (state_17610){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_17610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e17634){if((e17634 instanceof Object)){
var ex__15643__auto__ = e17634;
var statearr_17635_17653 = state_17610;
(statearr_17635_17653[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17654 = state_17610;
state_17610 = G__17654;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
cljs$core$async$state_machine__15640__auto__ = function(state_17610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15640__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15640__auto____1.call(this,state_17610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15640__auto____0;
cljs$core$async$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15640__auto____1;
return cljs$core$async$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___17638,out))
})();
var state__15736__auto__ = (function (){var statearr_17636 = f__15735__auto__.call(null);
(statearr_17636[(6)] = c__15734__auto___17638);

return statearr_17636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___17638,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
