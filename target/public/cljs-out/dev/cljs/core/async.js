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
var G__15691 = arguments.length;
switch (G__15691) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15692 = (function (f,blockable,meta15693){
this.f = f;
this.blockable = blockable;
this.meta15693 = meta15693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15694,meta15693__$1){
var self__ = this;
var _15694__$1 = this;
return (new cljs.core.async.t_cljs$core$async15692(self__.f,self__.blockable,meta15693__$1));
});

cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15694){
var self__ = this;
var _15694__$1 = this;
return self__.meta15693;
});

cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15693","meta15693",187191577,null)], null);
});

cljs.core.async.t_cljs$core$async15692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15692";

cljs.core.async.t_cljs$core$async15692.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15692");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15692.
 */
cljs.core.async.__GT_t_cljs$core$async15692 = (function cljs$core$async$__GT_t_cljs$core$async15692(f__$1,blockable__$1,meta15693){
return (new cljs.core.async.t_cljs$core$async15692(f__$1,blockable__$1,meta15693));
});

}

return (new cljs.core.async.t_cljs$core$async15692(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15698 = arguments.length;
switch (G__15698) {
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
var G__15701 = arguments.length;
switch (G__15701) {
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
var G__15704 = arguments.length;
switch (G__15704) {
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
var val_15706 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15706);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15706,ret){
return (function (){
return fn1.call(null,val_15706);
});})(val_15706,ret))
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
var G__15708 = arguments.length;
switch (G__15708) {
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
var n__4607__auto___15710 = n;
var x_15711 = (0);
while(true){
if((x_15711 < n__4607__auto___15710)){
(a[x_15711] = (0));

var G__15712 = (x_15711 + (1));
x_15711 = G__15712;
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

var G__15713 = (i + (1));
i = G__15713;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15714 = (function (flag,meta15715){
this.flag = flag;
this.meta15715 = meta15715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15716,meta15715__$1){
var self__ = this;
var _15716__$1 = this;
return (new cljs.core.async.t_cljs$core$async15714(self__.flag,meta15715__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15716){
var self__ = this;
var _15716__$1 = this;
return self__.meta15715;
});})(flag))
;

cljs.core.async.t_cljs$core$async15714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15714.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15715","meta15715",1012609696,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15714";

cljs.core.async.t_cljs$core$async15714.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15714");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15714.
 */
cljs.core.async.__GT_t_cljs$core$async15714 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15714(flag__$1,meta15715){
return (new cljs.core.async.t_cljs$core$async15714(flag__$1,meta15715));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15714(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15717 = (function (flag,cb,meta15718){
this.flag = flag;
this.cb = cb;
this.meta15718 = meta15718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15719,meta15718__$1){
var self__ = this;
var _15719__$1 = this;
return (new cljs.core.async.t_cljs$core$async15717(self__.flag,self__.cb,meta15718__$1));
});

cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15719){
var self__ = this;
var _15719__$1 = this;
return self__.meta15718;
});

cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15718","meta15718",-688430682,null)], null);
});

cljs.core.async.t_cljs$core$async15717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15717";

cljs.core.async.t_cljs$core$async15717.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15717");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15717.
 */
cljs.core.async.__GT_t_cljs$core$async15717 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15717(flag__$1,cb__$1,meta15718){
return (new cljs.core.async.t_cljs$core$async15717(flag__$1,cb__$1,meta15718));
});

}

return (new cljs.core.async.t_cljs$core$async15717(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15720_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15720_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15721_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15721_SHARP_,port], null));
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
var G__15722 = (i + (1));
i = G__15722;
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
var len__4730__auto___15728 = arguments.length;
var i__4731__auto___15729 = (0);
while(true){
if((i__4731__auto___15729 < len__4730__auto___15728)){
args__4736__auto__.push((arguments[i__4731__auto___15729]));

var G__15730 = (i__4731__auto___15729 + (1));
i__4731__auto___15729 = G__15730;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15725){
var map__15726 = p__15725;
var map__15726__$1 = (((((!((map__15726 == null))))?(((((map__15726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15726):map__15726);
var opts = map__15726__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15723){
var G__15724 = cljs.core.first.call(null,seq15723);
var seq15723__$1 = cljs.core.next.call(null,seq15723);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15724,seq15723__$1);
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
var G__15732 = arguments.length;
switch (G__15732) {
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
var c__15631__auto___15778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___15778){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___15778){
return (function (state_15756){
var state_val_15757 = (state_15756[(1)]);
if((state_val_15757 === (7))){
var inst_15752 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15758_15779 = state_15756__$1;
(statearr_15758_15779[(2)] = inst_15752);

(statearr_15758_15779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (1))){
var state_15756__$1 = state_15756;
var statearr_15759_15780 = state_15756__$1;
(statearr_15759_15780[(2)] = null);

(statearr_15759_15780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (4))){
var inst_15735 = (state_15756[(7)]);
var inst_15735__$1 = (state_15756[(2)]);
var inst_15736 = (inst_15735__$1 == null);
var state_15756__$1 = (function (){var statearr_15760 = state_15756;
(statearr_15760[(7)] = inst_15735__$1);

return statearr_15760;
})();
if(cljs.core.truth_(inst_15736)){
var statearr_15761_15781 = state_15756__$1;
(statearr_15761_15781[(1)] = (5));

} else {
var statearr_15762_15782 = state_15756__$1;
(statearr_15762_15782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (13))){
var state_15756__$1 = state_15756;
var statearr_15763_15783 = state_15756__$1;
(statearr_15763_15783[(2)] = null);

(statearr_15763_15783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (6))){
var inst_15735 = (state_15756[(7)]);
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15756__$1,(11),to,inst_15735);
} else {
if((state_val_15757 === (3))){
var inst_15754 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15756__$1,inst_15754);
} else {
if((state_val_15757 === (12))){
var state_15756__$1 = state_15756;
var statearr_15764_15784 = state_15756__$1;
(statearr_15764_15784[(2)] = null);

(statearr_15764_15784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (2))){
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15756__$1,(4),from);
} else {
if((state_val_15757 === (11))){
var inst_15745 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
if(cljs.core.truth_(inst_15745)){
var statearr_15765_15785 = state_15756__$1;
(statearr_15765_15785[(1)] = (12));

} else {
var statearr_15766_15786 = state_15756__$1;
(statearr_15766_15786[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (9))){
var state_15756__$1 = state_15756;
var statearr_15767_15787 = state_15756__$1;
(statearr_15767_15787[(2)] = null);

(statearr_15767_15787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (5))){
var state_15756__$1 = state_15756;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15768_15788 = state_15756__$1;
(statearr_15768_15788[(1)] = (8));

} else {
var statearr_15769_15789 = state_15756__$1;
(statearr_15769_15789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (14))){
var inst_15750 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15770_15790 = state_15756__$1;
(statearr_15770_15790[(2)] = inst_15750);

(statearr_15770_15790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (10))){
var inst_15742 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15771_15791 = state_15756__$1;
(statearr_15771_15791[(2)] = inst_15742);

(statearr_15771_15791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (8))){
var inst_15739 = cljs.core.async.close_BANG_.call(null,to);
var state_15756__$1 = state_15756;
var statearr_15772_15792 = state_15756__$1;
(statearr_15772_15792[(2)] = inst_15739);

(statearr_15772_15792[(1)] = (10));


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
});})(c__15631__auto___15778))
;
return ((function (switch__15536__auto__,c__15631__auto___15778){
return (function() {
var cljs$core$async$state_machine__15537__auto__ = null;
var cljs$core$async$state_machine__15537__auto____0 = (function (){
var statearr_15773 = [null,null,null,null,null,null,null,null];
(statearr_15773[(0)] = cljs$core$async$state_machine__15537__auto__);

(statearr_15773[(1)] = (1));

return statearr_15773;
});
var cljs$core$async$state_machine__15537__auto____1 = (function (state_15756){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_15756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e15774){if((e15774 instanceof Object)){
var ex__15540__auto__ = e15774;
var statearr_15775_15793 = state_15756;
(statearr_15775_15793[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15794 = state_15756;
state_15756 = G__15794;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$state_machine__15537__auto__ = function(state_15756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15537__auto____1.call(this,state_15756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15537__auto____0;
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15537__auto____1;
return cljs$core$async$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___15778))
})();
var state__15633__auto__ = (function (){var statearr_15776 = f__15632__auto__.call(null);
(statearr_15776[(6)] = c__15631__auto___15778);

return statearr_15776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___15778))
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
return (function (p__15795){
var vec__15796 = p__15795;
var v = cljs.core.nth.call(null,vec__15796,(0),null);
var p = cljs.core.nth.call(null,vec__15796,(1),null);
var job = vec__15796;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15631__auto___15967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___15967,res,vec__15796,v,p,job,jobs,results){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___15967,res,vec__15796,v,p,job,jobs,results){
return (function (state_15803){
var state_val_15804 = (state_15803[(1)]);
if((state_val_15804 === (1))){
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15803__$1,(2),res,v);
} else {
if((state_val_15804 === (2))){
var inst_15800 = (state_15803[(2)]);
var inst_15801 = cljs.core.async.close_BANG_.call(null,res);
var state_15803__$1 = (function (){var statearr_15805 = state_15803;
(statearr_15805[(7)] = inst_15800);

return statearr_15805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15803__$1,inst_15801);
} else {
return null;
}
}
});})(c__15631__auto___15967,res,vec__15796,v,p,job,jobs,results))
;
return ((function (switch__15536__auto__,c__15631__auto___15967,res,vec__15796,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0 = (function (){
var statearr_15806 = [null,null,null,null,null,null,null,null];
(statearr_15806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__);

(statearr_15806[(1)] = (1));

return statearr_15806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1 = (function (state_15803){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_15803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e15807){if((e15807 instanceof Object)){
var ex__15540__auto__ = e15807;
var statearr_15808_15968 = state_15803;
(statearr_15808_15968[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15969 = state_15803;
state_15803 = G__15969;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__ = function(state_15803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1.call(this,state_15803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___15967,res,vec__15796,v,p,job,jobs,results))
})();
var state__15633__auto__ = (function (){var statearr_15809 = f__15632__auto__.call(null);
(statearr_15809[(6)] = c__15631__auto___15967);

return statearr_15809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___15967,res,vec__15796,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15810){
var vec__15811 = p__15810;
var v = cljs.core.nth.call(null,vec__15811,(0),null);
var p = cljs.core.nth.call(null,vec__15811,(1),null);
var job = vec__15811;
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
var n__4607__auto___15970 = n;
var __15971 = (0);
while(true){
if((__15971 < n__4607__auto___15970)){
var G__15814_15972 = type;
var G__15814_15973__$1 = (((G__15814_15972 instanceof cljs.core.Keyword))?G__15814_15972.fqn:null);
switch (G__15814_15973__$1) {
case "compute":
var c__15631__auto___15975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15971,c__15631__auto___15975,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (__15971,c__15631__auto___15975,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async){
return (function (state_15827){
var state_val_15828 = (state_15827[(1)]);
if((state_val_15828 === (1))){
var state_15827__$1 = state_15827;
var statearr_15829_15976 = state_15827__$1;
(statearr_15829_15976[(2)] = null);

(statearr_15829_15976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (2))){
var state_15827__$1 = state_15827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15827__$1,(4),jobs);
} else {
if((state_val_15828 === (3))){
var inst_15825 = (state_15827[(2)]);
var state_15827__$1 = state_15827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15827__$1,inst_15825);
} else {
if((state_val_15828 === (4))){
var inst_15817 = (state_15827[(2)]);
var inst_15818 = process.call(null,inst_15817);
var state_15827__$1 = state_15827;
if(cljs.core.truth_(inst_15818)){
var statearr_15830_15977 = state_15827__$1;
(statearr_15830_15977[(1)] = (5));

} else {
var statearr_15831_15978 = state_15827__$1;
(statearr_15831_15978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (5))){
var state_15827__$1 = state_15827;
var statearr_15832_15979 = state_15827__$1;
(statearr_15832_15979[(2)] = null);

(statearr_15832_15979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (6))){
var state_15827__$1 = state_15827;
var statearr_15833_15980 = state_15827__$1;
(statearr_15833_15980[(2)] = null);

(statearr_15833_15980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (7))){
var inst_15823 = (state_15827[(2)]);
var state_15827__$1 = state_15827;
var statearr_15834_15981 = state_15827__$1;
(statearr_15834_15981[(2)] = inst_15823);

(statearr_15834_15981[(1)] = (3));


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
});})(__15971,c__15631__auto___15975,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async))
;
return ((function (__15971,switch__15536__auto__,c__15631__auto___15975,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0 = (function (){
var statearr_15835 = [null,null,null,null,null,null,null];
(statearr_15835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__);

(statearr_15835[(1)] = (1));

return statearr_15835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1 = (function (state_15827){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_15827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e15836){if((e15836 instanceof Object)){
var ex__15540__auto__ = e15836;
var statearr_15837_15982 = state_15827;
(statearr_15837_15982[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15983 = state_15827;
state_15827 = G__15983;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__ = function(state_15827){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1.call(this,state_15827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__;
})()
;})(__15971,switch__15536__auto__,c__15631__auto___15975,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async))
})();
var state__15633__auto__ = (function (){var statearr_15838 = f__15632__auto__.call(null);
(statearr_15838[(6)] = c__15631__auto___15975);

return statearr_15838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(__15971,c__15631__auto___15975,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async))
);


break;
case "async":
var c__15631__auto___15984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15971,c__15631__auto___15984,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (__15971,c__15631__auto___15984,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async){
return (function (state_15851){
var state_val_15852 = (state_15851[(1)]);
if((state_val_15852 === (1))){
var state_15851__$1 = state_15851;
var statearr_15853_15985 = state_15851__$1;
(statearr_15853_15985[(2)] = null);

(statearr_15853_15985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (2))){
var state_15851__$1 = state_15851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15851__$1,(4),jobs);
} else {
if((state_val_15852 === (3))){
var inst_15849 = (state_15851[(2)]);
var state_15851__$1 = state_15851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15851__$1,inst_15849);
} else {
if((state_val_15852 === (4))){
var inst_15841 = (state_15851[(2)]);
var inst_15842 = async.call(null,inst_15841);
var state_15851__$1 = state_15851;
if(cljs.core.truth_(inst_15842)){
var statearr_15854_15986 = state_15851__$1;
(statearr_15854_15986[(1)] = (5));

} else {
var statearr_15855_15987 = state_15851__$1;
(statearr_15855_15987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (5))){
var state_15851__$1 = state_15851;
var statearr_15856_15988 = state_15851__$1;
(statearr_15856_15988[(2)] = null);

(statearr_15856_15988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (6))){
var state_15851__$1 = state_15851;
var statearr_15857_15989 = state_15851__$1;
(statearr_15857_15989[(2)] = null);

(statearr_15857_15989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15852 === (7))){
var inst_15847 = (state_15851[(2)]);
var state_15851__$1 = state_15851;
var statearr_15858_15990 = state_15851__$1;
(statearr_15858_15990[(2)] = inst_15847);

(statearr_15858_15990[(1)] = (3));


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
});})(__15971,c__15631__auto___15984,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async))
;
return ((function (__15971,switch__15536__auto__,c__15631__auto___15984,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0 = (function (){
var statearr_15859 = [null,null,null,null,null,null,null];
(statearr_15859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__);

(statearr_15859[(1)] = (1));

return statearr_15859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1 = (function (state_15851){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_15851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e15860){if((e15860 instanceof Object)){
var ex__15540__auto__ = e15860;
var statearr_15861_15991 = state_15851;
(statearr_15861_15991[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15992 = state_15851;
state_15851 = G__15992;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__ = function(state_15851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1.call(this,state_15851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__;
})()
;})(__15971,switch__15536__auto__,c__15631__auto___15984,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async))
})();
var state__15633__auto__ = (function (){var statearr_15862 = f__15632__auto__.call(null);
(statearr_15862[(6)] = c__15631__auto___15984);

return statearr_15862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(__15971,c__15631__auto___15984,G__15814_15972,G__15814_15973__$1,n__4607__auto___15970,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15814_15973__$1)].join('')));

}

var G__15993 = (__15971 + (1));
__15971 = G__15993;
continue;
} else {
}
break;
}

var c__15631__auto___15994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___15994,jobs,results,process,async){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___15994,jobs,results,process,async){
return (function (state_15884){
var state_val_15885 = (state_15884[(1)]);
if((state_val_15885 === (7))){
var inst_15880 = (state_15884[(2)]);
var state_15884__$1 = state_15884;
var statearr_15886_15995 = state_15884__$1;
(statearr_15886_15995[(2)] = inst_15880);

(statearr_15886_15995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (1))){
var state_15884__$1 = state_15884;
var statearr_15887_15996 = state_15884__$1;
(statearr_15887_15996[(2)] = null);

(statearr_15887_15996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (4))){
var inst_15865 = (state_15884[(7)]);
var inst_15865__$1 = (state_15884[(2)]);
var inst_15866 = (inst_15865__$1 == null);
var state_15884__$1 = (function (){var statearr_15888 = state_15884;
(statearr_15888[(7)] = inst_15865__$1);

return statearr_15888;
})();
if(cljs.core.truth_(inst_15866)){
var statearr_15889_15997 = state_15884__$1;
(statearr_15889_15997[(1)] = (5));

} else {
var statearr_15890_15998 = state_15884__$1;
(statearr_15890_15998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (6))){
var inst_15870 = (state_15884[(8)]);
var inst_15865 = (state_15884[(7)]);
var inst_15870__$1 = cljs.core.async.chan.call(null,(1));
var inst_15871 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15872 = [inst_15865,inst_15870__$1];
var inst_15873 = (new cljs.core.PersistentVector(null,2,(5),inst_15871,inst_15872,null));
var state_15884__$1 = (function (){var statearr_15891 = state_15884;
(statearr_15891[(8)] = inst_15870__$1);

return statearr_15891;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15884__$1,(8),jobs,inst_15873);
} else {
if((state_val_15885 === (3))){
var inst_15882 = (state_15884[(2)]);
var state_15884__$1 = state_15884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15884__$1,inst_15882);
} else {
if((state_val_15885 === (2))){
var state_15884__$1 = state_15884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15884__$1,(4),from);
} else {
if((state_val_15885 === (9))){
var inst_15877 = (state_15884[(2)]);
var state_15884__$1 = (function (){var statearr_15892 = state_15884;
(statearr_15892[(9)] = inst_15877);

return statearr_15892;
})();
var statearr_15893_15999 = state_15884__$1;
(statearr_15893_15999[(2)] = null);

(statearr_15893_15999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (5))){
var inst_15868 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15884__$1 = state_15884;
var statearr_15894_16000 = state_15884__$1;
(statearr_15894_16000[(2)] = inst_15868);

(statearr_15894_16000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (8))){
var inst_15870 = (state_15884[(8)]);
var inst_15875 = (state_15884[(2)]);
var state_15884__$1 = (function (){var statearr_15895 = state_15884;
(statearr_15895[(10)] = inst_15875);

return statearr_15895;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15884__$1,(9),results,inst_15870);
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
});})(c__15631__auto___15994,jobs,results,process,async))
;
return ((function (switch__15536__auto__,c__15631__auto___15994,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0 = (function (){
var statearr_15896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__);

(statearr_15896[(1)] = (1));

return statearr_15896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1 = (function (state_15884){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_15884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e15897){if((e15897 instanceof Object)){
var ex__15540__auto__ = e15897;
var statearr_15898_16001 = state_15884;
(statearr_15898_16001[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16002 = state_15884;
state_15884 = G__16002;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__ = function(state_15884){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1.call(this,state_15884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___15994,jobs,results,process,async))
})();
var state__15633__auto__ = (function (){var statearr_15899 = f__15632__auto__.call(null);
(statearr_15899[(6)] = c__15631__auto___15994);

return statearr_15899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___15994,jobs,results,process,async))
);


var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__,jobs,results,process,async){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__,jobs,results,process,async){
return (function (state_15937){
var state_val_15938 = (state_15937[(1)]);
if((state_val_15938 === (7))){
var inst_15933 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
var statearr_15939_16003 = state_15937__$1;
(statearr_15939_16003[(2)] = inst_15933);

(statearr_15939_16003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (20))){
var state_15937__$1 = state_15937;
var statearr_15940_16004 = state_15937__$1;
(statearr_15940_16004[(2)] = null);

(statearr_15940_16004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (1))){
var state_15937__$1 = state_15937;
var statearr_15941_16005 = state_15937__$1;
(statearr_15941_16005[(2)] = null);

(statearr_15941_16005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (4))){
var inst_15902 = (state_15937[(7)]);
var inst_15902__$1 = (state_15937[(2)]);
var inst_15903 = (inst_15902__$1 == null);
var state_15937__$1 = (function (){var statearr_15942 = state_15937;
(statearr_15942[(7)] = inst_15902__$1);

return statearr_15942;
})();
if(cljs.core.truth_(inst_15903)){
var statearr_15943_16006 = state_15937__$1;
(statearr_15943_16006[(1)] = (5));

} else {
var statearr_15944_16007 = state_15937__$1;
(statearr_15944_16007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (15))){
var inst_15915 = (state_15937[(8)]);
var state_15937__$1 = state_15937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15937__$1,(18),to,inst_15915);
} else {
if((state_val_15938 === (21))){
var inst_15928 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
var statearr_15945_16008 = state_15937__$1;
(statearr_15945_16008[(2)] = inst_15928);

(statearr_15945_16008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (13))){
var inst_15930 = (state_15937[(2)]);
var state_15937__$1 = (function (){var statearr_15946 = state_15937;
(statearr_15946[(9)] = inst_15930);

return statearr_15946;
})();
var statearr_15947_16009 = state_15937__$1;
(statearr_15947_16009[(2)] = null);

(statearr_15947_16009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (6))){
var inst_15902 = (state_15937[(7)]);
var state_15937__$1 = state_15937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15937__$1,(11),inst_15902);
} else {
if((state_val_15938 === (17))){
var inst_15923 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
if(cljs.core.truth_(inst_15923)){
var statearr_15948_16010 = state_15937__$1;
(statearr_15948_16010[(1)] = (19));

} else {
var statearr_15949_16011 = state_15937__$1;
(statearr_15949_16011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (3))){
var inst_15935 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15937__$1,inst_15935);
} else {
if((state_val_15938 === (12))){
var inst_15912 = (state_15937[(10)]);
var state_15937__$1 = state_15937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15937__$1,(14),inst_15912);
} else {
if((state_val_15938 === (2))){
var state_15937__$1 = state_15937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15937__$1,(4),results);
} else {
if((state_val_15938 === (19))){
var state_15937__$1 = state_15937;
var statearr_15950_16012 = state_15937__$1;
(statearr_15950_16012[(2)] = null);

(statearr_15950_16012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (11))){
var inst_15912 = (state_15937[(2)]);
var state_15937__$1 = (function (){var statearr_15951 = state_15937;
(statearr_15951[(10)] = inst_15912);

return statearr_15951;
})();
var statearr_15952_16013 = state_15937__$1;
(statearr_15952_16013[(2)] = null);

(statearr_15952_16013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (9))){
var state_15937__$1 = state_15937;
var statearr_15953_16014 = state_15937__$1;
(statearr_15953_16014[(2)] = null);

(statearr_15953_16014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (5))){
var state_15937__$1 = state_15937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15954_16015 = state_15937__$1;
(statearr_15954_16015[(1)] = (8));

} else {
var statearr_15955_16016 = state_15937__$1;
(statearr_15955_16016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (14))){
var inst_15917 = (state_15937[(11)]);
var inst_15915 = (state_15937[(8)]);
var inst_15915__$1 = (state_15937[(2)]);
var inst_15916 = (inst_15915__$1 == null);
var inst_15917__$1 = cljs.core.not.call(null,inst_15916);
var state_15937__$1 = (function (){var statearr_15956 = state_15937;
(statearr_15956[(11)] = inst_15917__$1);

(statearr_15956[(8)] = inst_15915__$1);

return statearr_15956;
})();
if(inst_15917__$1){
var statearr_15957_16017 = state_15937__$1;
(statearr_15957_16017[(1)] = (15));

} else {
var statearr_15958_16018 = state_15937__$1;
(statearr_15958_16018[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (16))){
var inst_15917 = (state_15937[(11)]);
var state_15937__$1 = state_15937;
var statearr_15959_16019 = state_15937__$1;
(statearr_15959_16019[(2)] = inst_15917);

(statearr_15959_16019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (10))){
var inst_15909 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
var statearr_15960_16020 = state_15937__$1;
(statearr_15960_16020[(2)] = inst_15909);

(statearr_15960_16020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (18))){
var inst_15920 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
var statearr_15961_16021 = state_15937__$1;
(statearr_15961_16021[(2)] = inst_15920);

(statearr_15961_16021[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (8))){
var inst_15906 = cljs.core.async.close_BANG_.call(null,to);
var state_15937__$1 = state_15937;
var statearr_15962_16022 = state_15937__$1;
(statearr_15962_16022[(2)] = inst_15906);

(statearr_15962_16022[(1)] = (10));


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
});})(c__15631__auto__,jobs,results,process,async))
;
return ((function (switch__15536__auto__,c__15631__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0 = (function (){
var statearr_15963 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__);

(statearr_15963[(1)] = (1));

return statearr_15963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1 = (function (state_15937){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_15937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e15964){if((e15964 instanceof Object)){
var ex__15540__auto__ = e15964;
var statearr_15965_16023 = state_15937;
(statearr_15965_16023[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16024 = state_15937;
state_15937 = G__16024;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__ = function(state_15937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1.call(this,state_15937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__,jobs,results,process,async))
})();
var state__15633__auto__ = (function (){var statearr_15966 = f__15632__auto__.call(null);
(statearr_15966[(6)] = c__15631__auto__);

return statearr_15966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__,jobs,results,process,async))
);

return c__15631__auto__;
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
var G__16026 = arguments.length;
switch (G__16026) {
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
var G__16029 = arguments.length;
switch (G__16029) {
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
var G__16032 = arguments.length;
switch (G__16032) {
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
var c__15631__auto___16081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___16081,tc,fc){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___16081,tc,fc){
return (function (state_16058){
var state_val_16059 = (state_16058[(1)]);
if((state_val_16059 === (7))){
var inst_16054 = (state_16058[(2)]);
var state_16058__$1 = state_16058;
var statearr_16060_16082 = state_16058__$1;
(statearr_16060_16082[(2)] = inst_16054);

(statearr_16060_16082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (1))){
var state_16058__$1 = state_16058;
var statearr_16061_16083 = state_16058__$1;
(statearr_16061_16083[(2)] = null);

(statearr_16061_16083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (4))){
var inst_16035 = (state_16058[(7)]);
var inst_16035__$1 = (state_16058[(2)]);
var inst_16036 = (inst_16035__$1 == null);
var state_16058__$1 = (function (){var statearr_16062 = state_16058;
(statearr_16062[(7)] = inst_16035__$1);

return statearr_16062;
})();
if(cljs.core.truth_(inst_16036)){
var statearr_16063_16084 = state_16058__$1;
(statearr_16063_16084[(1)] = (5));

} else {
var statearr_16064_16085 = state_16058__$1;
(statearr_16064_16085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (13))){
var state_16058__$1 = state_16058;
var statearr_16065_16086 = state_16058__$1;
(statearr_16065_16086[(2)] = null);

(statearr_16065_16086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (6))){
var inst_16035 = (state_16058[(7)]);
var inst_16041 = p.call(null,inst_16035);
var state_16058__$1 = state_16058;
if(cljs.core.truth_(inst_16041)){
var statearr_16066_16087 = state_16058__$1;
(statearr_16066_16087[(1)] = (9));

} else {
var statearr_16067_16088 = state_16058__$1;
(statearr_16067_16088[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (3))){
var inst_16056 = (state_16058[(2)]);
var state_16058__$1 = state_16058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16058__$1,inst_16056);
} else {
if((state_val_16059 === (12))){
var state_16058__$1 = state_16058;
var statearr_16068_16089 = state_16058__$1;
(statearr_16068_16089[(2)] = null);

(statearr_16068_16089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (2))){
var state_16058__$1 = state_16058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16058__$1,(4),ch);
} else {
if((state_val_16059 === (11))){
var inst_16035 = (state_16058[(7)]);
var inst_16045 = (state_16058[(2)]);
var state_16058__$1 = state_16058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16058__$1,(8),inst_16045,inst_16035);
} else {
if((state_val_16059 === (9))){
var state_16058__$1 = state_16058;
var statearr_16069_16090 = state_16058__$1;
(statearr_16069_16090[(2)] = tc);

(statearr_16069_16090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (5))){
var inst_16038 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16039 = cljs.core.async.close_BANG_.call(null,fc);
var state_16058__$1 = (function (){var statearr_16070 = state_16058;
(statearr_16070[(8)] = inst_16038);

return statearr_16070;
})();
var statearr_16071_16091 = state_16058__$1;
(statearr_16071_16091[(2)] = inst_16039);

(statearr_16071_16091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (14))){
var inst_16052 = (state_16058[(2)]);
var state_16058__$1 = state_16058;
var statearr_16072_16092 = state_16058__$1;
(statearr_16072_16092[(2)] = inst_16052);

(statearr_16072_16092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (10))){
var state_16058__$1 = state_16058;
var statearr_16073_16093 = state_16058__$1;
(statearr_16073_16093[(2)] = fc);

(statearr_16073_16093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (8))){
var inst_16047 = (state_16058[(2)]);
var state_16058__$1 = state_16058;
if(cljs.core.truth_(inst_16047)){
var statearr_16074_16094 = state_16058__$1;
(statearr_16074_16094[(1)] = (12));

} else {
var statearr_16075_16095 = state_16058__$1;
(statearr_16075_16095[(1)] = (13));

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
});})(c__15631__auto___16081,tc,fc))
;
return ((function (switch__15536__auto__,c__15631__auto___16081,tc,fc){
return (function() {
var cljs$core$async$state_machine__15537__auto__ = null;
var cljs$core$async$state_machine__15537__auto____0 = (function (){
var statearr_16076 = [null,null,null,null,null,null,null,null,null];
(statearr_16076[(0)] = cljs$core$async$state_machine__15537__auto__);

(statearr_16076[(1)] = (1));

return statearr_16076;
});
var cljs$core$async$state_machine__15537__auto____1 = (function (state_16058){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_16058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e16077){if((e16077 instanceof Object)){
var ex__15540__auto__ = e16077;
var statearr_16078_16096 = state_16058;
(statearr_16078_16096[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16097 = state_16058;
state_16058 = G__16097;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$state_machine__15537__auto__ = function(state_16058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15537__auto____1.call(this,state_16058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15537__auto____0;
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15537__auto____1;
return cljs$core$async$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___16081,tc,fc))
})();
var state__15633__auto__ = (function (){var statearr_16079 = f__15632__auto__.call(null);
(statearr_16079[(6)] = c__15631__auto___16081);

return statearr_16079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___16081,tc,fc))
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
var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__){
return (function (state_16118){
var state_val_16119 = (state_16118[(1)]);
if((state_val_16119 === (7))){
var inst_16114 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16120_16138 = state_16118__$1;
(statearr_16120_16138[(2)] = inst_16114);

(statearr_16120_16138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (1))){
var inst_16098 = init;
var state_16118__$1 = (function (){var statearr_16121 = state_16118;
(statearr_16121[(7)] = inst_16098);

return statearr_16121;
})();
var statearr_16122_16139 = state_16118__$1;
(statearr_16122_16139[(2)] = null);

(statearr_16122_16139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (4))){
var inst_16101 = (state_16118[(8)]);
var inst_16101__$1 = (state_16118[(2)]);
var inst_16102 = (inst_16101__$1 == null);
var state_16118__$1 = (function (){var statearr_16123 = state_16118;
(statearr_16123[(8)] = inst_16101__$1);

return statearr_16123;
})();
if(cljs.core.truth_(inst_16102)){
var statearr_16124_16140 = state_16118__$1;
(statearr_16124_16140[(1)] = (5));

} else {
var statearr_16125_16141 = state_16118__$1;
(statearr_16125_16141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (6))){
var inst_16105 = (state_16118[(9)]);
var inst_16101 = (state_16118[(8)]);
var inst_16098 = (state_16118[(7)]);
var inst_16105__$1 = f.call(null,inst_16098,inst_16101);
var inst_16106 = cljs.core.reduced_QMARK_.call(null,inst_16105__$1);
var state_16118__$1 = (function (){var statearr_16126 = state_16118;
(statearr_16126[(9)] = inst_16105__$1);

return statearr_16126;
})();
if(inst_16106){
var statearr_16127_16142 = state_16118__$1;
(statearr_16127_16142[(1)] = (8));

} else {
var statearr_16128_16143 = state_16118__$1;
(statearr_16128_16143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (3))){
var inst_16116 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16118__$1,inst_16116);
} else {
if((state_val_16119 === (2))){
var state_16118__$1 = state_16118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16118__$1,(4),ch);
} else {
if((state_val_16119 === (9))){
var inst_16105 = (state_16118[(9)]);
var inst_16098 = inst_16105;
var state_16118__$1 = (function (){var statearr_16129 = state_16118;
(statearr_16129[(7)] = inst_16098);

return statearr_16129;
})();
var statearr_16130_16144 = state_16118__$1;
(statearr_16130_16144[(2)] = null);

(statearr_16130_16144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (5))){
var inst_16098 = (state_16118[(7)]);
var state_16118__$1 = state_16118;
var statearr_16131_16145 = state_16118__$1;
(statearr_16131_16145[(2)] = inst_16098);

(statearr_16131_16145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (10))){
var inst_16112 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16132_16146 = state_16118__$1;
(statearr_16132_16146[(2)] = inst_16112);

(statearr_16132_16146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16119 === (8))){
var inst_16105 = (state_16118[(9)]);
var inst_16108 = cljs.core.deref.call(null,inst_16105);
var state_16118__$1 = state_16118;
var statearr_16133_16147 = state_16118__$1;
(statearr_16133_16147[(2)] = inst_16108);

(statearr_16133_16147[(1)] = (10));


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
});})(c__15631__auto__))
;
return ((function (switch__15536__auto__,c__15631__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15537__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15537__auto____0 = (function (){
var statearr_16134 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16134[(0)] = cljs$core$async$reduce_$_state_machine__15537__auto__);

(statearr_16134[(1)] = (1));

return statearr_16134;
});
var cljs$core$async$reduce_$_state_machine__15537__auto____1 = (function (state_16118){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_16118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e16135){if((e16135 instanceof Object)){
var ex__15540__auto__ = e16135;
var statearr_16136_16148 = state_16118;
(statearr_16136_16148[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16149 = state_16118;
state_16118 = G__16149;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15537__auto__ = function(state_16118){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15537__auto____1.call(this,state_16118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15537__auto____0;
cljs$core$async$reduce_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15537__auto____1;
return cljs$core$async$reduce_$_state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__))
})();
var state__15633__auto__ = (function (){var statearr_16137 = f__15632__auto__.call(null);
(statearr_16137[(6)] = c__15631__auto__);

return statearr_16137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__))
);

return c__15631__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__,f__$1){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__,f__$1){
return (function (state_16155){
var state_val_16156 = (state_16155[(1)]);
if((state_val_16156 === (1))){
var inst_16150 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16155__$1 = state_16155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16155__$1,(2),inst_16150);
} else {
if((state_val_16156 === (2))){
var inst_16152 = (state_16155[(2)]);
var inst_16153 = f__$1.call(null,inst_16152);
var state_16155__$1 = state_16155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16155__$1,inst_16153);
} else {
return null;
}
}
});})(c__15631__auto__,f__$1))
;
return ((function (switch__15536__auto__,c__15631__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15537__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15537__auto____0 = (function (){
var statearr_16157 = [null,null,null,null,null,null,null];
(statearr_16157[(0)] = cljs$core$async$transduce_$_state_machine__15537__auto__);

(statearr_16157[(1)] = (1));

return statearr_16157;
});
var cljs$core$async$transduce_$_state_machine__15537__auto____1 = (function (state_16155){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_16155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e16158){if((e16158 instanceof Object)){
var ex__15540__auto__ = e16158;
var statearr_16159_16161 = state_16155;
(statearr_16159_16161[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16162 = state_16155;
state_16155 = G__16162;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15537__auto__ = function(state_16155){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15537__auto____1.call(this,state_16155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15537__auto____0;
cljs$core$async$transduce_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15537__auto____1;
return cljs$core$async$transduce_$_state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__,f__$1))
})();
var state__15633__auto__ = (function (){var statearr_16160 = f__15632__auto__.call(null);
(statearr_16160[(6)] = c__15631__auto__);

return statearr_16160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__,f__$1))
);

return c__15631__auto__;
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
var G__16164 = arguments.length;
switch (G__16164) {
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
var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__){
return (function (state_16189){
var state_val_16190 = (state_16189[(1)]);
if((state_val_16190 === (7))){
var inst_16171 = (state_16189[(2)]);
var state_16189__$1 = state_16189;
var statearr_16191_16212 = state_16189__$1;
(statearr_16191_16212[(2)] = inst_16171);

(statearr_16191_16212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (1))){
var inst_16165 = cljs.core.seq.call(null,coll);
var inst_16166 = inst_16165;
var state_16189__$1 = (function (){var statearr_16192 = state_16189;
(statearr_16192[(7)] = inst_16166);

return statearr_16192;
})();
var statearr_16193_16213 = state_16189__$1;
(statearr_16193_16213[(2)] = null);

(statearr_16193_16213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (4))){
var inst_16166 = (state_16189[(7)]);
var inst_16169 = cljs.core.first.call(null,inst_16166);
var state_16189__$1 = state_16189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16189__$1,(7),ch,inst_16169);
} else {
if((state_val_16190 === (13))){
var inst_16183 = (state_16189[(2)]);
var state_16189__$1 = state_16189;
var statearr_16194_16214 = state_16189__$1;
(statearr_16194_16214[(2)] = inst_16183);

(statearr_16194_16214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (6))){
var inst_16174 = (state_16189[(2)]);
var state_16189__$1 = state_16189;
if(cljs.core.truth_(inst_16174)){
var statearr_16195_16215 = state_16189__$1;
(statearr_16195_16215[(1)] = (8));

} else {
var statearr_16196_16216 = state_16189__$1;
(statearr_16196_16216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (3))){
var inst_16187 = (state_16189[(2)]);
var state_16189__$1 = state_16189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16189__$1,inst_16187);
} else {
if((state_val_16190 === (12))){
var state_16189__$1 = state_16189;
var statearr_16197_16217 = state_16189__$1;
(statearr_16197_16217[(2)] = null);

(statearr_16197_16217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (2))){
var inst_16166 = (state_16189[(7)]);
var state_16189__$1 = state_16189;
if(cljs.core.truth_(inst_16166)){
var statearr_16198_16218 = state_16189__$1;
(statearr_16198_16218[(1)] = (4));

} else {
var statearr_16199_16219 = state_16189__$1;
(statearr_16199_16219[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (11))){
var inst_16180 = cljs.core.async.close_BANG_.call(null,ch);
var state_16189__$1 = state_16189;
var statearr_16200_16220 = state_16189__$1;
(statearr_16200_16220[(2)] = inst_16180);

(statearr_16200_16220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (9))){
var state_16189__$1 = state_16189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16201_16221 = state_16189__$1;
(statearr_16201_16221[(1)] = (11));

} else {
var statearr_16202_16222 = state_16189__$1;
(statearr_16202_16222[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (5))){
var inst_16166 = (state_16189[(7)]);
var state_16189__$1 = state_16189;
var statearr_16203_16223 = state_16189__$1;
(statearr_16203_16223[(2)] = inst_16166);

(statearr_16203_16223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (10))){
var inst_16185 = (state_16189[(2)]);
var state_16189__$1 = state_16189;
var statearr_16204_16224 = state_16189__$1;
(statearr_16204_16224[(2)] = inst_16185);

(statearr_16204_16224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16190 === (8))){
var inst_16166 = (state_16189[(7)]);
var inst_16176 = cljs.core.next.call(null,inst_16166);
var inst_16166__$1 = inst_16176;
var state_16189__$1 = (function (){var statearr_16205 = state_16189;
(statearr_16205[(7)] = inst_16166__$1);

return statearr_16205;
})();
var statearr_16206_16225 = state_16189__$1;
(statearr_16206_16225[(2)] = null);

(statearr_16206_16225[(1)] = (2));


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
});})(c__15631__auto__))
;
return ((function (switch__15536__auto__,c__15631__auto__){
return (function() {
var cljs$core$async$state_machine__15537__auto__ = null;
var cljs$core$async$state_machine__15537__auto____0 = (function (){
var statearr_16207 = [null,null,null,null,null,null,null,null];
(statearr_16207[(0)] = cljs$core$async$state_machine__15537__auto__);

(statearr_16207[(1)] = (1));

return statearr_16207;
});
var cljs$core$async$state_machine__15537__auto____1 = (function (state_16189){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_16189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e16208){if((e16208 instanceof Object)){
var ex__15540__auto__ = e16208;
var statearr_16209_16226 = state_16189;
(statearr_16209_16226[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16227 = state_16189;
state_16189 = G__16227;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$state_machine__15537__auto__ = function(state_16189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15537__auto____1.call(this,state_16189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15537__auto____0;
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15537__auto____1;
return cljs$core$async$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__))
})();
var state__15633__auto__ = (function (){var statearr_16210 = f__15632__auto__.call(null);
(statearr_16210[(6)] = c__15631__auto__);

return statearr_16210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__))
);

return c__15631__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16228 = (function (ch,cs,meta16229){
this.ch = ch;
this.cs = cs;
this.meta16229 = meta16229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16230,meta16229__$1){
var self__ = this;
var _16230__$1 = this;
return (new cljs.core.async.t_cljs$core$async16228(self__.ch,self__.cs,meta16229__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16230){
var self__ = this;
var _16230__$1 = this;
return self__.meta16229;
});})(cs))
;

cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16228.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16229","meta16229",-1995091248,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16228";

cljs.core.async.t_cljs$core$async16228.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16228");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16228.
 */
cljs.core.async.__GT_t_cljs$core$async16228 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16228(ch__$1,cs__$1,meta16229){
return (new cljs.core.async.t_cljs$core$async16228(ch__$1,cs__$1,meta16229));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16228(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15631__auto___16450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___16450,cs,m,dchan,dctr,done){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___16450,cs,m,dchan,dctr,done){
return (function (state_16365){
var state_val_16366 = (state_16365[(1)]);
if((state_val_16366 === (7))){
var inst_16361 = (state_16365[(2)]);
var state_16365__$1 = state_16365;
var statearr_16367_16451 = state_16365__$1;
(statearr_16367_16451[(2)] = inst_16361);

(statearr_16367_16451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (20))){
var inst_16264 = (state_16365[(7)]);
var inst_16276 = cljs.core.first.call(null,inst_16264);
var inst_16277 = cljs.core.nth.call(null,inst_16276,(0),null);
var inst_16278 = cljs.core.nth.call(null,inst_16276,(1),null);
var state_16365__$1 = (function (){var statearr_16368 = state_16365;
(statearr_16368[(8)] = inst_16277);

return statearr_16368;
})();
if(cljs.core.truth_(inst_16278)){
var statearr_16369_16452 = state_16365__$1;
(statearr_16369_16452[(1)] = (22));

} else {
var statearr_16370_16453 = state_16365__$1;
(statearr_16370_16453[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (27))){
var inst_16233 = (state_16365[(9)]);
var inst_16308 = (state_16365[(10)]);
var inst_16306 = (state_16365[(11)]);
var inst_16313 = (state_16365[(12)]);
var inst_16313__$1 = cljs.core._nth.call(null,inst_16306,inst_16308);
var inst_16314 = cljs.core.async.put_BANG_.call(null,inst_16313__$1,inst_16233,done);
var state_16365__$1 = (function (){var statearr_16371 = state_16365;
(statearr_16371[(12)] = inst_16313__$1);

return statearr_16371;
})();
if(cljs.core.truth_(inst_16314)){
var statearr_16372_16454 = state_16365__$1;
(statearr_16372_16454[(1)] = (30));

} else {
var statearr_16373_16455 = state_16365__$1;
(statearr_16373_16455[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (1))){
var state_16365__$1 = state_16365;
var statearr_16374_16456 = state_16365__$1;
(statearr_16374_16456[(2)] = null);

(statearr_16374_16456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (24))){
var inst_16264 = (state_16365[(7)]);
var inst_16283 = (state_16365[(2)]);
var inst_16284 = cljs.core.next.call(null,inst_16264);
var inst_16242 = inst_16284;
var inst_16243 = null;
var inst_16244 = (0);
var inst_16245 = (0);
var state_16365__$1 = (function (){var statearr_16375 = state_16365;
(statearr_16375[(13)] = inst_16283);

(statearr_16375[(14)] = inst_16242);

(statearr_16375[(15)] = inst_16243);

(statearr_16375[(16)] = inst_16244);

(statearr_16375[(17)] = inst_16245);

return statearr_16375;
})();
var statearr_16376_16457 = state_16365__$1;
(statearr_16376_16457[(2)] = null);

(statearr_16376_16457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (39))){
var state_16365__$1 = state_16365;
var statearr_16380_16458 = state_16365__$1;
(statearr_16380_16458[(2)] = null);

(statearr_16380_16458[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (4))){
var inst_16233 = (state_16365[(9)]);
var inst_16233__$1 = (state_16365[(2)]);
var inst_16234 = (inst_16233__$1 == null);
var state_16365__$1 = (function (){var statearr_16381 = state_16365;
(statearr_16381[(9)] = inst_16233__$1);

return statearr_16381;
})();
if(cljs.core.truth_(inst_16234)){
var statearr_16382_16459 = state_16365__$1;
(statearr_16382_16459[(1)] = (5));

} else {
var statearr_16383_16460 = state_16365__$1;
(statearr_16383_16460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (15))){
var inst_16242 = (state_16365[(14)]);
var inst_16243 = (state_16365[(15)]);
var inst_16244 = (state_16365[(16)]);
var inst_16245 = (state_16365[(17)]);
var inst_16260 = (state_16365[(2)]);
var inst_16261 = (inst_16245 + (1));
var tmp16377 = inst_16242;
var tmp16378 = inst_16243;
var tmp16379 = inst_16244;
var inst_16242__$1 = tmp16377;
var inst_16243__$1 = tmp16378;
var inst_16244__$1 = tmp16379;
var inst_16245__$1 = inst_16261;
var state_16365__$1 = (function (){var statearr_16384 = state_16365;
(statearr_16384[(14)] = inst_16242__$1);

(statearr_16384[(15)] = inst_16243__$1);

(statearr_16384[(18)] = inst_16260);

(statearr_16384[(16)] = inst_16244__$1);

(statearr_16384[(17)] = inst_16245__$1);

return statearr_16384;
})();
var statearr_16385_16461 = state_16365__$1;
(statearr_16385_16461[(2)] = null);

(statearr_16385_16461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (21))){
var inst_16287 = (state_16365[(2)]);
var state_16365__$1 = state_16365;
var statearr_16389_16462 = state_16365__$1;
(statearr_16389_16462[(2)] = inst_16287);

(statearr_16389_16462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (31))){
var inst_16313 = (state_16365[(12)]);
var inst_16317 = done.call(null,null);
var inst_16318 = cljs.core.async.untap_STAR_.call(null,m,inst_16313);
var state_16365__$1 = (function (){var statearr_16390 = state_16365;
(statearr_16390[(19)] = inst_16317);

return statearr_16390;
})();
var statearr_16391_16463 = state_16365__$1;
(statearr_16391_16463[(2)] = inst_16318);

(statearr_16391_16463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (32))){
var inst_16308 = (state_16365[(10)]);
var inst_16305 = (state_16365[(20)]);
var inst_16306 = (state_16365[(11)]);
var inst_16307 = (state_16365[(21)]);
var inst_16320 = (state_16365[(2)]);
var inst_16321 = (inst_16308 + (1));
var tmp16386 = inst_16305;
var tmp16387 = inst_16306;
var tmp16388 = inst_16307;
var inst_16305__$1 = tmp16386;
var inst_16306__$1 = tmp16387;
var inst_16307__$1 = tmp16388;
var inst_16308__$1 = inst_16321;
var state_16365__$1 = (function (){var statearr_16392 = state_16365;
(statearr_16392[(10)] = inst_16308__$1);

(statearr_16392[(20)] = inst_16305__$1);

(statearr_16392[(11)] = inst_16306__$1);

(statearr_16392[(21)] = inst_16307__$1);

(statearr_16392[(22)] = inst_16320);

return statearr_16392;
})();
var statearr_16393_16464 = state_16365__$1;
(statearr_16393_16464[(2)] = null);

(statearr_16393_16464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (40))){
var inst_16333 = (state_16365[(23)]);
var inst_16337 = done.call(null,null);
var inst_16338 = cljs.core.async.untap_STAR_.call(null,m,inst_16333);
var state_16365__$1 = (function (){var statearr_16394 = state_16365;
(statearr_16394[(24)] = inst_16337);

return statearr_16394;
})();
var statearr_16395_16465 = state_16365__$1;
(statearr_16395_16465[(2)] = inst_16338);

(statearr_16395_16465[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (33))){
var inst_16324 = (state_16365[(25)]);
var inst_16326 = cljs.core.chunked_seq_QMARK_.call(null,inst_16324);
var state_16365__$1 = state_16365;
if(inst_16326){
var statearr_16396_16466 = state_16365__$1;
(statearr_16396_16466[(1)] = (36));

} else {
var statearr_16397_16467 = state_16365__$1;
(statearr_16397_16467[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (13))){
var inst_16254 = (state_16365[(26)]);
var inst_16257 = cljs.core.async.close_BANG_.call(null,inst_16254);
var state_16365__$1 = state_16365;
var statearr_16398_16468 = state_16365__$1;
(statearr_16398_16468[(2)] = inst_16257);

(statearr_16398_16468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (22))){
var inst_16277 = (state_16365[(8)]);
var inst_16280 = cljs.core.async.close_BANG_.call(null,inst_16277);
var state_16365__$1 = state_16365;
var statearr_16399_16469 = state_16365__$1;
(statearr_16399_16469[(2)] = inst_16280);

(statearr_16399_16469[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (36))){
var inst_16324 = (state_16365[(25)]);
var inst_16328 = cljs.core.chunk_first.call(null,inst_16324);
var inst_16329 = cljs.core.chunk_rest.call(null,inst_16324);
var inst_16330 = cljs.core.count.call(null,inst_16328);
var inst_16305 = inst_16329;
var inst_16306 = inst_16328;
var inst_16307 = inst_16330;
var inst_16308 = (0);
var state_16365__$1 = (function (){var statearr_16400 = state_16365;
(statearr_16400[(10)] = inst_16308);

(statearr_16400[(20)] = inst_16305);

(statearr_16400[(11)] = inst_16306);

(statearr_16400[(21)] = inst_16307);

return statearr_16400;
})();
var statearr_16401_16470 = state_16365__$1;
(statearr_16401_16470[(2)] = null);

(statearr_16401_16470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (41))){
var inst_16324 = (state_16365[(25)]);
var inst_16340 = (state_16365[(2)]);
var inst_16341 = cljs.core.next.call(null,inst_16324);
var inst_16305 = inst_16341;
var inst_16306 = null;
var inst_16307 = (0);
var inst_16308 = (0);
var state_16365__$1 = (function (){var statearr_16402 = state_16365;
(statearr_16402[(27)] = inst_16340);

(statearr_16402[(10)] = inst_16308);

(statearr_16402[(20)] = inst_16305);

(statearr_16402[(11)] = inst_16306);

(statearr_16402[(21)] = inst_16307);

return statearr_16402;
})();
var statearr_16403_16471 = state_16365__$1;
(statearr_16403_16471[(2)] = null);

(statearr_16403_16471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (43))){
var state_16365__$1 = state_16365;
var statearr_16404_16472 = state_16365__$1;
(statearr_16404_16472[(2)] = null);

(statearr_16404_16472[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (29))){
var inst_16349 = (state_16365[(2)]);
var state_16365__$1 = state_16365;
var statearr_16405_16473 = state_16365__$1;
(statearr_16405_16473[(2)] = inst_16349);

(statearr_16405_16473[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (44))){
var inst_16358 = (state_16365[(2)]);
var state_16365__$1 = (function (){var statearr_16406 = state_16365;
(statearr_16406[(28)] = inst_16358);

return statearr_16406;
})();
var statearr_16407_16474 = state_16365__$1;
(statearr_16407_16474[(2)] = null);

(statearr_16407_16474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (6))){
var inst_16297 = (state_16365[(29)]);
var inst_16296 = cljs.core.deref.call(null,cs);
var inst_16297__$1 = cljs.core.keys.call(null,inst_16296);
var inst_16298 = cljs.core.count.call(null,inst_16297__$1);
var inst_16299 = cljs.core.reset_BANG_.call(null,dctr,inst_16298);
var inst_16304 = cljs.core.seq.call(null,inst_16297__$1);
var inst_16305 = inst_16304;
var inst_16306 = null;
var inst_16307 = (0);
var inst_16308 = (0);
var state_16365__$1 = (function (){var statearr_16408 = state_16365;
(statearr_16408[(29)] = inst_16297__$1);

(statearr_16408[(10)] = inst_16308);

(statearr_16408[(20)] = inst_16305);

(statearr_16408[(11)] = inst_16306);

(statearr_16408[(21)] = inst_16307);

(statearr_16408[(30)] = inst_16299);

return statearr_16408;
})();
var statearr_16409_16475 = state_16365__$1;
(statearr_16409_16475[(2)] = null);

(statearr_16409_16475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (28))){
var inst_16305 = (state_16365[(20)]);
var inst_16324 = (state_16365[(25)]);
var inst_16324__$1 = cljs.core.seq.call(null,inst_16305);
var state_16365__$1 = (function (){var statearr_16410 = state_16365;
(statearr_16410[(25)] = inst_16324__$1);

return statearr_16410;
})();
if(inst_16324__$1){
var statearr_16411_16476 = state_16365__$1;
(statearr_16411_16476[(1)] = (33));

} else {
var statearr_16412_16477 = state_16365__$1;
(statearr_16412_16477[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (25))){
var inst_16308 = (state_16365[(10)]);
var inst_16307 = (state_16365[(21)]);
var inst_16310 = (inst_16308 < inst_16307);
var inst_16311 = inst_16310;
var state_16365__$1 = state_16365;
if(cljs.core.truth_(inst_16311)){
var statearr_16413_16478 = state_16365__$1;
(statearr_16413_16478[(1)] = (27));

} else {
var statearr_16414_16479 = state_16365__$1;
(statearr_16414_16479[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (34))){
var state_16365__$1 = state_16365;
var statearr_16415_16480 = state_16365__$1;
(statearr_16415_16480[(2)] = null);

(statearr_16415_16480[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (17))){
var state_16365__$1 = state_16365;
var statearr_16416_16481 = state_16365__$1;
(statearr_16416_16481[(2)] = null);

(statearr_16416_16481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (3))){
var inst_16363 = (state_16365[(2)]);
var state_16365__$1 = state_16365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16365__$1,inst_16363);
} else {
if((state_val_16366 === (12))){
var inst_16292 = (state_16365[(2)]);
var state_16365__$1 = state_16365;
var statearr_16417_16482 = state_16365__$1;
(statearr_16417_16482[(2)] = inst_16292);

(statearr_16417_16482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (2))){
var state_16365__$1 = state_16365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16365__$1,(4),ch);
} else {
if((state_val_16366 === (23))){
var state_16365__$1 = state_16365;
var statearr_16418_16483 = state_16365__$1;
(statearr_16418_16483[(2)] = null);

(statearr_16418_16483[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (35))){
var inst_16347 = (state_16365[(2)]);
var state_16365__$1 = state_16365;
var statearr_16419_16484 = state_16365__$1;
(statearr_16419_16484[(2)] = inst_16347);

(statearr_16419_16484[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (19))){
var inst_16264 = (state_16365[(7)]);
var inst_16268 = cljs.core.chunk_first.call(null,inst_16264);
var inst_16269 = cljs.core.chunk_rest.call(null,inst_16264);
var inst_16270 = cljs.core.count.call(null,inst_16268);
var inst_16242 = inst_16269;
var inst_16243 = inst_16268;
var inst_16244 = inst_16270;
var inst_16245 = (0);
var state_16365__$1 = (function (){var statearr_16420 = state_16365;
(statearr_16420[(14)] = inst_16242);

(statearr_16420[(15)] = inst_16243);

(statearr_16420[(16)] = inst_16244);

(statearr_16420[(17)] = inst_16245);

return statearr_16420;
})();
var statearr_16421_16485 = state_16365__$1;
(statearr_16421_16485[(2)] = null);

(statearr_16421_16485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (11))){
var inst_16242 = (state_16365[(14)]);
var inst_16264 = (state_16365[(7)]);
var inst_16264__$1 = cljs.core.seq.call(null,inst_16242);
var state_16365__$1 = (function (){var statearr_16422 = state_16365;
(statearr_16422[(7)] = inst_16264__$1);

return statearr_16422;
})();
if(inst_16264__$1){
var statearr_16423_16486 = state_16365__$1;
(statearr_16423_16486[(1)] = (16));

} else {
var statearr_16424_16487 = state_16365__$1;
(statearr_16424_16487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (9))){
var inst_16294 = (state_16365[(2)]);
var state_16365__$1 = state_16365;
var statearr_16425_16488 = state_16365__$1;
(statearr_16425_16488[(2)] = inst_16294);

(statearr_16425_16488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (5))){
var inst_16240 = cljs.core.deref.call(null,cs);
var inst_16241 = cljs.core.seq.call(null,inst_16240);
var inst_16242 = inst_16241;
var inst_16243 = null;
var inst_16244 = (0);
var inst_16245 = (0);
var state_16365__$1 = (function (){var statearr_16426 = state_16365;
(statearr_16426[(14)] = inst_16242);

(statearr_16426[(15)] = inst_16243);

(statearr_16426[(16)] = inst_16244);

(statearr_16426[(17)] = inst_16245);

return statearr_16426;
})();
var statearr_16427_16489 = state_16365__$1;
(statearr_16427_16489[(2)] = null);

(statearr_16427_16489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (14))){
var state_16365__$1 = state_16365;
var statearr_16428_16490 = state_16365__$1;
(statearr_16428_16490[(2)] = null);

(statearr_16428_16490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (45))){
var inst_16355 = (state_16365[(2)]);
var state_16365__$1 = state_16365;
var statearr_16429_16491 = state_16365__$1;
(statearr_16429_16491[(2)] = inst_16355);

(statearr_16429_16491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (26))){
var inst_16297 = (state_16365[(29)]);
var inst_16351 = (state_16365[(2)]);
var inst_16352 = cljs.core.seq.call(null,inst_16297);
var state_16365__$1 = (function (){var statearr_16430 = state_16365;
(statearr_16430[(31)] = inst_16351);

return statearr_16430;
})();
if(inst_16352){
var statearr_16431_16492 = state_16365__$1;
(statearr_16431_16492[(1)] = (42));

} else {
var statearr_16432_16493 = state_16365__$1;
(statearr_16432_16493[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (16))){
var inst_16264 = (state_16365[(7)]);
var inst_16266 = cljs.core.chunked_seq_QMARK_.call(null,inst_16264);
var state_16365__$1 = state_16365;
if(inst_16266){
var statearr_16433_16494 = state_16365__$1;
(statearr_16433_16494[(1)] = (19));

} else {
var statearr_16434_16495 = state_16365__$1;
(statearr_16434_16495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (38))){
var inst_16344 = (state_16365[(2)]);
var state_16365__$1 = state_16365;
var statearr_16435_16496 = state_16365__$1;
(statearr_16435_16496[(2)] = inst_16344);

(statearr_16435_16496[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (30))){
var state_16365__$1 = state_16365;
var statearr_16436_16497 = state_16365__$1;
(statearr_16436_16497[(2)] = null);

(statearr_16436_16497[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (10))){
var inst_16243 = (state_16365[(15)]);
var inst_16245 = (state_16365[(17)]);
var inst_16253 = cljs.core._nth.call(null,inst_16243,inst_16245);
var inst_16254 = cljs.core.nth.call(null,inst_16253,(0),null);
var inst_16255 = cljs.core.nth.call(null,inst_16253,(1),null);
var state_16365__$1 = (function (){var statearr_16437 = state_16365;
(statearr_16437[(26)] = inst_16254);

return statearr_16437;
})();
if(cljs.core.truth_(inst_16255)){
var statearr_16438_16498 = state_16365__$1;
(statearr_16438_16498[(1)] = (13));

} else {
var statearr_16439_16499 = state_16365__$1;
(statearr_16439_16499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (18))){
var inst_16290 = (state_16365[(2)]);
var state_16365__$1 = state_16365;
var statearr_16440_16500 = state_16365__$1;
(statearr_16440_16500[(2)] = inst_16290);

(statearr_16440_16500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (42))){
var state_16365__$1 = state_16365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16365__$1,(45),dchan);
} else {
if((state_val_16366 === (37))){
var inst_16233 = (state_16365[(9)]);
var inst_16333 = (state_16365[(23)]);
var inst_16324 = (state_16365[(25)]);
var inst_16333__$1 = cljs.core.first.call(null,inst_16324);
var inst_16334 = cljs.core.async.put_BANG_.call(null,inst_16333__$1,inst_16233,done);
var state_16365__$1 = (function (){var statearr_16441 = state_16365;
(statearr_16441[(23)] = inst_16333__$1);

return statearr_16441;
})();
if(cljs.core.truth_(inst_16334)){
var statearr_16442_16501 = state_16365__$1;
(statearr_16442_16501[(1)] = (39));

} else {
var statearr_16443_16502 = state_16365__$1;
(statearr_16443_16502[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16366 === (8))){
var inst_16244 = (state_16365[(16)]);
var inst_16245 = (state_16365[(17)]);
var inst_16247 = (inst_16245 < inst_16244);
var inst_16248 = inst_16247;
var state_16365__$1 = state_16365;
if(cljs.core.truth_(inst_16248)){
var statearr_16444_16503 = state_16365__$1;
(statearr_16444_16503[(1)] = (10));

} else {
var statearr_16445_16504 = state_16365__$1;
(statearr_16445_16504[(1)] = (11));

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
});})(c__15631__auto___16450,cs,m,dchan,dctr,done))
;
return ((function (switch__15536__auto__,c__15631__auto___16450,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15537__auto__ = null;
var cljs$core$async$mult_$_state_machine__15537__auto____0 = (function (){
var statearr_16446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16446[(0)] = cljs$core$async$mult_$_state_machine__15537__auto__);

(statearr_16446[(1)] = (1));

return statearr_16446;
});
var cljs$core$async$mult_$_state_machine__15537__auto____1 = (function (state_16365){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_16365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e16447){if((e16447 instanceof Object)){
var ex__15540__auto__ = e16447;
var statearr_16448_16505 = state_16365;
(statearr_16448_16505[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16506 = state_16365;
state_16365 = G__16506;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15537__auto__ = function(state_16365){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15537__auto____1.call(this,state_16365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15537__auto____0;
cljs$core$async$mult_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15537__auto____1;
return cljs$core$async$mult_$_state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___16450,cs,m,dchan,dctr,done))
})();
var state__15633__auto__ = (function (){var statearr_16449 = f__15632__auto__.call(null);
(statearr_16449[(6)] = c__15631__auto___16450);

return statearr_16449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___16450,cs,m,dchan,dctr,done))
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
var G__16508 = arguments.length;
switch (G__16508) {
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
var len__4730__auto___16520 = arguments.length;
var i__4731__auto___16521 = (0);
while(true){
if((i__4731__auto___16521 < len__4730__auto___16520)){
args__4736__auto__.push((arguments[i__4731__auto___16521]));

var G__16522 = (i__4731__auto___16521 + (1));
i__4731__auto___16521 = G__16522;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16514){
var map__16515 = p__16514;
var map__16515__$1 = (((((!((map__16515 == null))))?(((((map__16515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16515):map__16515);
var opts = map__16515__$1;
var statearr_16517_16523 = state;
(statearr_16517_16523[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__16515,map__16515__$1,opts){
return (function (val){
var statearr_16518_16524 = state;
(statearr_16518_16524[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16515,map__16515__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_16519_16525 = state;
(statearr_16519_16525[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16510){
var G__16511 = cljs.core.first.call(null,seq16510);
var seq16510__$1 = cljs.core.next.call(null,seq16510);
var G__16512 = cljs.core.first.call(null,seq16510__$1);
var seq16510__$2 = cljs.core.next.call(null,seq16510__$1);
var G__16513 = cljs.core.first.call(null,seq16510__$2);
var seq16510__$3 = cljs.core.next.call(null,seq16510__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16511,G__16512,G__16513,seq16510__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16526 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16527){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16527 = meta16527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16528,meta16527__$1){
var self__ = this;
var _16528__$1 = this;
return (new cljs.core.async.t_cljs$core$async16526(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16527__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16528){
var self__ = this;
var _16528__$1 = this;
return self__.meta16527;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16526.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16527","meta16527",1006441627,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16526";

cljs.core.async.t_cljs$core$async16526.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16526");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16526.
 */
cljs.core.async.__GT_t_cljs$core$async16526 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16526(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16527){
return (new cljs.core.async.t_cljs$core$async16526(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16527));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16526(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15631__auto___16690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___16690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___16690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16630){
var state_val_16631 = (state_16630[(1)]);
if((state_val_16631 === (7))){
var inst_16545 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
var statearr_16632_16691 = state_16630__$1;
(statearr_16632_16691[(2)] = inst_16545);

(statearr_16632_16691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (20))){
var inst_16557 = (state_16630[(7)]);
var state_16630__$1 = state_16630;
var statearr_16633_16692 = state_16630__$1;
(statearr_16633_16692[(2)] = inst_16557);

(statearr_16633_16692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (27))){
var state_16630__$1 = state_16630;
var statearr_16634_16693 = state_16630__$1;
(statearr_16634_16693[(2)] = null);

(statearr_16634_16693[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (1))){
var inst_16532 = (state_16630[(8)]);
var inst_16532__$1 = calc_state.call(null);
var inst_16534 = (inst_16532__$1 == null);
var inst_16535 = cljs.core.not.call(null,inst_16534);
var state_16630__$1 = (function (){var statearr_16635 = state_16630;
(statearr_16635[(8)] = inst_16532__$1);

return statearr_16635;
})();
if(inst_16535){
var statearr_16636_16694 = state_16630__$1;
(statearr_16636_16694[(1)] = (2));

} else {
var statearr_16637_16695 = state_16630__$1;
(statearr_16637_16695[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (24))){
var inst_16604 = (state_16630[(9)]);
var inst_16590 = (state_16630[(10)]);
var inst_16581 = (state_16630[(11)]);
var inst_16604__$1 = inst_16581.call(null,inst_16590);
var state_16630__$1 = (function (){var statearr_16638 = state_16630;
(statearr_16638[(9)] = inst_16604__$1);

return statearr_16638;
})();
if(cljs.core.truth_(inst_16604__$1)){
var statearr_16639_16696 = state_16630__$1;
(statearr_16639_16696[(1)] = (29));

} else {
var statearr_16640_16697 = state_16630__$1;
(statearr_16640_16697[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (4))){
var inst_16548 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
if(cljs.core.truth_(inst_16548)){
var statearr_16641_16698 = state_16630__$1;
(statearr_16641_16698[(1)] = (8));

} else {
var statearr_16642_16699 = state_16630__$1;
(statearr_16642_16699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (15))){
var inst_16575 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
if(cljs.core.truth_(inst_16575)){
var statearr_16643_16700 = state_16630__$1;
(statearr_16643_16700[(1)] = (19));

} else {
var statearr_16644_16701 = state_16630__$1;
(statearr_16644_16701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (21))){
var inst_16580 = (state_16630[(12)]);
var inst_16580__$1 = (state_16630[(2)]);
var inst_16581 = cljs.core.get.call(null,inst_16580__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16582 = cljs.core.get.call(null,inst_16580__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16583 = cljs.core.get.call(null,inst_16580__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16630__$1 = (function (){var statearr_16645 = state_16630;
(statearr_16645[(13)] = inst_16582);

(statearr_16645[(12)] = inst_16580__$1);

(statearr_16645[(11)] = inst_16581);

return statearr_16645;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16630__$1,(22),inst_16583);
} else {
if((state_val_16631 === (31))){
var inst_16612 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
if(cljs.core.truth_(inst_16612)){
var statearr_16646_16702 = state_16630__$1;
(statearr_16646_16702[(1)] = (32));

} else {
var statearr_16647_16703 = state_16630__$1;
(statearr_16647_16703[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (32))){
var inst_16589 = (state_16630[(14)]);
var state_16630__$1 = state_16630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16630__$1,(35),out,inst_16589);
} else {
if((state_val_16631 === (33))){
var inst_16580 = (state_16630[(12)]);
var inst_16557 = inst_16580;
var state_16630__$1 = (function (){var statearr_16648 = state_16630;
(statearr_16648[(7)] = inst_16557);

return statearr_16648;
})();
var statearr_16649_16704 = state_16630__$1;
(statearr_16649_16704[(2)] = null);

(statearr_16649_16704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (13))){
var inst_16557 = (state_16630[(7)]);
var inst_16564 = inst_16557.cljs$lang$protocol_mask$partition0$;
var inst_16565 = (inst_16564 & (64));
var inst_16566 = inst_16557.cljs$core$ISeq$;
var inst_16567 = (cljs.core.PROTOCOL_SENTINEL === inst_16566);
var inst_16568 = ((inst_16565) || (inst_16567));
var state_16630__$1 = state_16630;
if(cljs.core.truth_(inst_16568)){
var statearr_16650_16705 = state_16630__$1;
(statearr_16650_16705[(1)] = (16));

} else {
var statearr_16651_16706 = state_16630__$1;
(statearr_16651_16706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (22))){
var inst_16590 = (state_16630[(10)]);
var inst_16589 = (state_16630[(14)]);
var inst_16588 = (state_16630[(2)]);
var inst_16589__$1 = cljs.core.nth.call(null,inst_16588,(0),null);
var inst_16590__$1 = cljs.core.nth.call(null,inst_16588,(1),null);
var inst_16591 = (inst_16589__$1 == null);
var inst_16592 = cljs.core._EQ_.call(null,inst_16590__$1,change);
var inst_16593 = ((inst_16591) || (inst_16592));
var state_16630__$1 = (function (){var statearr_16652 = state_16630;
(statearr_16652[(10)] = inst_16590__$1);

(statearr_16652[(14)] = inst_16589__$1);

return statearr_16652;
})();
if(cljs.core.truth_(inst_16593)){
var statearr_16653_16707 = state_16630__$1;
(statearr_16653_16707[(1)] = (23));

} else {
var statearr_16654_16708 = state_16630__$1;
(statearr_16654_16708[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (36))){
var inst_16580 = (state_16630[(12)]);
var inst_16557 = inst_16580;
var state_16630__$1 = (function (){var statearr_16655 = state_16630;
(statearr_16655[(7)] = inst_16557);

return statearr_16655;
})();
var statearr_16656_16709 = state_16630__$1;
(statearr_16656_16709[(2)] = null);

(statearr_16656_16709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (29))){
var inst_16604 = (state_16630[(9)]);
var state_16630__$1 = state_16630;
var statearr_16657_16710 = state_16630__$1;
(statearr_16657_16710[(2)] = inst_16604);

(statearr_16657_16710[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (6))){
var state_16630__$1 = state_16630;
var statearr_16658_16711 = state_16630__$1;
(statearr_16658_16711[(2)] = false);

(statearr_16658_16711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (28))){
var inst_16600 = (state_16630[(2)]);
var inst_16601 = calc_state.call(null);
var inst_16557 = inst_16601;
var state_16630__$1 = (function (){var statearr_16659 = state_16630;
(statearr_16659[(7)] = inst_16557);

(statearr_16659[(15)] = inst_16600);

return statearr_16659;
})();
var statearr_16660_16712 = state_16630__$1;
(statearr_16660_16712[(2)] = null);

(statearr_16660_16712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (25))){
var inst_16626 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
var statearr_16661_16713 = state_16630__$1;
(statearr_16661_16713[(2)] = inst_16626);

(statearr_16661_16713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (34))){
var inst_16624 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
var statearr_16662_16714 = state_16630__$1;
(statearr_16662_16714[(2)] = inst_16624);

(statearr_16662_16714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (17))){
var state_16630__$1 = state_16630;
var statearr_16663_16715 = state_16630__$1;
(statearr_16663_16715[(2)] = false);

(statearr_16663_16715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (3))){
var state_16630__$1 = state_16630;
var statearr_16664_16716 = state_16630__$1;
(statearr_16664_16716[(2)] = false);

(statearr_16664_16716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (12))){
var inst_16628 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16630__$1,inst_16628);
} else {
if((state_val_16631 === (2))){
var inst_16532 = (state_16630[(8)]);
var inst_16537 = inst_16532.cljs$lang$protocol_mask$partition0$;
var inst_16538 = (inst_16537 & (64));
var inst_16539 = inst_16532.cljs$core$ISeq$;
var inst_16540 = (cljs.core.PROTOCOL_SENTINEL === inst_16539);
var inst_16541 = ((inst_16538) || (inst_16540));
var state_16630__$1 = state_16630;
if(cljs.core.truth_(inst_16541)){
var statearr_16665_16717 = state_16630__$1;
(statearr_16665_16717[(1)] = (5));

} else {
var statearr_16666_16718 = state_16630__$1;
(statearr_16666_16718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (23))){
var inst_16589 = (state_16630[(14)]);
var inst_16595 = (inst_16589 == null);
var state_16630__$1 = state_16630;
if(cljs.core.truth_(inst_16595)){
var statearr_16667_16719 = state_16630__$1;
(statearr_16667_16719[(1)] = (26));

} else {
var statearr_16668_16720 = state_16630__$1;
(statearr_16668_16720[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (35))){
var inst_16615 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
if(cljs.core.truth_(inst_16615)){
var statearr_16669_16721 = state_16630__$1;
(statearr_16669_16721[(1)] = (36));

} else {
var statearr_16670_16722 = state_16630__$1;
(statearr_16670_16722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (19))){
var inst_16557 = (state_16630[(7)]);
var inst_16577 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16557);
var state_16630__$1 = state_16630;
var statearr_16671_16723 = state_16630__$1;
(statearr_16671_16723[(2)] = inst_16577);

(statearr_16671_16723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (11))){
var inst_16557 = (state_16630[(7)]);
var inst_16561 = (inst_16557 == null);
var inst_16562 = cljs.core.not.call(null,inst_16561);
var state_16630__$1 = state_16630;
if(inst_16562){
var statearr_16672_16724 = state_16630__$1;
(statearr_16672_16724[(1)] = (13));

} else {
var statearr_16673_16725 = state_16630__$1;
(statearr_16673_16725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (9))){
var inst_16532 = (state_16630[(8)]);
var state_16630__$1 = state_16630;
var statearr_16674_16726 = state_16630__$1;
(statearr_16674_16726[(2)] = inst_16532);

(statearr_16674_16726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (5))){
var state_16630__$1 = state_16630;
var statearr_16675_16727 = state_16630__$1;
(statearr_16675_16727[(2)] = true);

(statearr_16675_16727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (14))){
var state_16630__$1 = state_16630;
var statearr_16676_16728 = state_16630__$1;
(statearr_16676_16728[(2)] = false);

(statearr_16676_16728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (26))){
var inst_16590 = (state_16630[(10)]);
var inst_16597 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16590);
var state_16630__$1 = state_16630;
var statearr_16677_16729 = state_16630__$1;
(statearr_16677_16729[(2)] = inst_16597);

(statearr_16677_16729[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (16))){
var state_16630__$1 = state_16630;
var statearr_16678_16730 = state_16630__$1;
(statearr_16678_16730[(2)] = true);

(statearr_16678_16730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (38))){
var inst_16620 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
var statearr_16679_16731 = state_16630__$1;
(statearr_16679_16731[(2)] = inst_16620);

(statearr_16679_16731[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (30))){
var inst_16582 = (state_16630[(13)]);
var inst_16590 = (state_16630[(10)]);
var inst_16581 = (state_16630[(11)]);
var inst_16607 = cljs.core.empty_QMARK_.call(null,inst_16581);
var inst_16608 = inst_16582.call(null,inst_16590);
var inst_16609 = cljs.core.not.call(null,inst_16608);
var inst_16610 = ((inst_16607) && (inst_16609));
var state_16630__$1 = state_16630;
var statearr_16680_16732 = state_16630__$1;
(statearr_16680_16732[(2)] = inst_16610);

(statearr_16680_16732[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (10))){
var inst_16532 = (state_16630[(8)]);
var inst_16553 = (state_16630[(2)]);
var inst_16554 = cljs.core.get.call(null,inst_16553,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16555 = cljs.core.get.call(null,inst_16553,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16556 = cljs.core.get.call(null,inst_16553,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16557 = inst_16532;
var state_16630__$1 = (function (){var statearr_16681 = state_16630;
(statearr_16681[(7)] = inst_16557);

(statearr_16681[(16)] = inst_16555);

(statearr_16681[(17)] = inst_16556);

(statearr_16681[(18)] = inst_16554);

return statearr_16681;
})();
var statearr_16682_16733 = state_16630__$1;
(statearr_16682_16733[(2)] = null);

(statearr_16682_16733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (18))){
var inst_16572 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
var statearr_16683_16734 = state_16630__$1;
(statearr_16683_16734[(2)] = inst_16572);

(statearr_16683_16734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (37))){
var state_16630__$1 = state_16630;
var statearr_16684_16735 = state_16630__$1;
(statearr_16684_16735[(2)] = null);

(statearr_16684_16735[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (8))){
var inst_16532 = (state_16630[(8)]);
var inst_16550 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16532);
var state_16630__$1 = state_16630;
var statearr_16685_16736 = state_16630__$1;
(statearr_16685_16736[(2)] = inst_16550);

(statearr_16685_16736[(1)] = (10));


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
});})(c__15631__auto___16690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15536__auto__,c__15631__auto___16690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15537__auto__ = null;
var cljs$core$async$mix_$_state_machine__15537__auto____0 = (function (){
var statearr_16686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16686[(0)] = cljs$core$async$mix_$_state_machine__15537__auto__);

(statearr_16686[(1)] = (1));

return statearr_16686;
});
var cljs$core$async$mix_$_state_machine__15537__auto____1 = (function (state_16630){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_16630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e16687){if((e16687 instanceof Object)){
var ex__15540__auto__ = e16687;
var statearr_16688_16737 = state_16630;
(statearr_16688_16737[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16738 = state_16630;
state_16630 = G__16738;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15537__auto__ = function(state_16630){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15537__auto____1.call(this,state_16630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15537__auto____0;
cljs$core$async$mix_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15537__auto____1;
return cljs$core$async$mix_$_state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___16690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15633__auto__ = (function (){var statearr_16689 = f__15632__auto__.call(null);
(statearr_16689[(6)] = c__15631__auto___16690);

return statearr_16689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___16690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__16740 = arguments.length;
switch (G__16740) {
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
var G__16744 = arguments.length;
switch (G__16744) {
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
return (function (p1__16742_SHARP_){
if(cljs.core.truth_(p1__16742_SHARP_.call(null,topic))){
return p1__16742_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16742_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16745 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16746){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16746 = meta16746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16747,meta16746__$1){
var self__ = this;
var _16747__$1 = this;
return (new cljs.core.async.t_cljs$core$async16745(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16746__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16747){
var self__ = this;
var _16747__$1 = this;
return self__.meta16746;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16745.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16745.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16745.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16745.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async16745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16745.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16746","meta16746",859325298,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16745";

cljs.core.async.t_cljs$core$async16745.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16745");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16745.
 */
cljs.core.async.__GT_t_cljs$core$async16745 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16746){
return (new cljs.core.async.t_cljs$core$async16745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16746));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16745(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15631__auto___16865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___16865,mults,ensure_mult,p){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___16865,mults,ensure_mult,p){
return (function (state_16819){
var state_val_16820 = (state_16819[(1)]);
if((state_val_16820 === (7))){
var inst_16815 = (state_16819[(2)]);
var state_16819__$1 = state_16819;
var statearr_16821_16866 = state_16819__$1;
(statearr_16821_16866[(2)] = inst_16815);

(statearr_16821_16866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (20))){
var state_16819__$1 = state_16819;
var statearr_16822_16867 = state_16819__$1;
(statearr_16822_16867[(2)] = null);

(statearr_16822_16867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (1))){
var state_16819__$1 = state_16819;
var statearr_16823_16868 = state_16819__$1;
(statearr_16823_16868[(2)] = null);

(statearr_16823_16868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (24))){
var inst_16798 = (state_16819[(7)]);
var inst_16807 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16798);
var state_16819__$1 = state_16819;
var statearr_16824_16869 = state_16819__$1;
(statearr_16824_16869[(2)] = inst_16807);

(statearr_16824_16869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (4))){
var inst_16750 = (state_16819[(8)]);
var inst_16750__$1 = (state_16819[(2)]);
var inst_16751 = (inst_16750__$1 == null);
var state_16819__$1 = (function (){var statearr_16825 = state_16819;
(statearr_16825[(8)] = inst_16750__$1);

return statearr_16825;
})();
if(cljs.core.truth_(inst_16751)){
var statearr_16826_16870 = state_16819__$1;
(statearr_16826_16870[(1)] = (5));

} else {
var statearr_16827_16871 = state_16819__$1;
(statearr_16827_16871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (15))){
var inst_16792 = (state_16819[(2)]);
var state_16819__$1 = state_16819;
var statearr_16828_16872 = state_16819__$1;
(statearr_16828_16872[(2)] = inst_16792);

(statearr_16828_16872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (21))){
var inst_16812 = (state_16819[(2)]);
var state_16819__$1 = (function (){var statearr_16829 = state_16819;
(statearr_16829[(9)] = inst_16812);

return statearr_16829;
})();
var statearr_16830_16873 = state_16819__$1;
(statearr_16830_16873[(2)] = null);

(statearr_16830_16873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (13))){
var inst_16774 = (state_16819[(10)]);
var inst_16776 = cljs.core.chunked_seq_QMARK_.call(null,inst_16774);
var state_16819__$1 = state_16819;
if(inst_16776){
var statearr_16831_16874 = state_16819__$1;
(statearr_16831_16874[(1)] = (16));

} else {
var statearr_16832_16875 = state_16819__$1;
(statearr_16832_16875[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (22))){
var inst_16804 = (state_16819[(2)]);
var state_16819__$1 = state_16819;
if(cljs.core.truth_(inst_16804)){
var statearr_16833_16876 = state_16819__$1;
(statearr_16833_16876[(1)] = (23));

} else {
var statearr_16834_16877 = state_16819__$1;
(statearr_16834_16877[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (6))){
var inst_16750 = (state_16819[(8)]);
var inst_16800 = (state_16819[(11)]);
var inst_16798 = (state_16819[(7)]);
var inst_16798__$1 = topic_fn.call(null,inst_16750);
var inst_16799 = cljs.core.deref.call(null,mults);
var inst_16800__$1 = cljs.core.get.call(null,inst_16799,inst_16798__$1);
var state_16819__$1 = (function (){var statearr_16835 = state_16819;
(statearr_16835[(11)] = inst_16800__$1);

(statearr_16835[(7)] = inst_16798__$1);

return statearr_16835;
})();
if(cljs.core.truth_(inst_16800__$1)){
var statearr_16836_16878 = state_16819__$1;
(statearr_16836_16878[(1)] = (19));

} else {
var statearr_16837_16879 = state_16819__$1;
(statearr_16837_16879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (25))){
var inst_16809 = (state_16819[(2)]);
var state_16819__$1 = state_16819;
var statearr_16838_16880 = state_16819__$1;
(statearr_16838_16880[(2)] = inst_16809);

(statearr_16838_16880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (17))){
var inst_16774 = (state_16819[(10)]);
var inst_16783 = cljs.core.first.call(null,inst_16774);
var inst_16784 = cljs.core.async.muxch_STAR_.call(null,inst_16783);
var inst_16785 = cljs.core.async.close_BANG_.call(null,inst_16784);
var inst_16786 = cljs.core.next.call(null,inst_16774);
var inst_16760 = inst_16786;
var inst_16761 = null;
var inst_16762 = (0);
var inst_16763 = (0);
var state_16819__$1 = (function (){var statearr_16839 = state_16819;
(statearr_16839[(12)] = inst_16760);

(statearr_16839[(13)] = inst_16762);

(statearr_16839[(14)] = inst_16761);

(statearr_16839[(15)] = inst_16785);

(statearr_16839[(16)] = inst_16763);

return statearr_16839;
})();
var statearr_16840_16881 = state_16819__$1;
(statearr_16840_16881[(2)] = null);

(statearr_16840_16881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (3))){
var inst_16817 = (state_16819[(2)]);
var state_16819__$1 = state_16819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16819__$1,inst_16817);
} else {
if((state_val_16820 === (12))){
var inst_16794 = (state_16819[(2)]);
var state_16819__$1 = state_16819;
var statearr_16841_16882 = state_16819__$1;
(statearr_16841_16882[(2)] = inst_16794);

(statearr_16841_16882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (2))){
var state_16819__$1 = state_16819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16819__$1,(4),ch);
} else {
if((state_val_16820 === (23))){
var state_16819__$1 = state_16819;
var statearr_16842_16883 = state_16819__$1;
(statearr_16842_16883[(2)] = null);

(statearr_16842_16883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (19))){
var inst_16750 = (state_16819[(8)]);
var inst_16800 = (state_16819[(11)]);
var inst_16802 = cljs.core.async.muxch_STAR_.call(null,inst_16800);
var state_16819__$1 = state_16819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16819__$1,(22),inst_16802,inst_16750);
} else {
if((state_val_16820 === (11))){
var inst_16760 = (state_16819[(12)]);
var inst_16774 = (state_16819[(10)]);
var inst_16774__$1 = cljs.core.seq.call(null,inst_16760);
var state_16819__$1 = (function (){var statearr_16843 = state_16819;
(statearr_16843[(10)] = inst_16774__$1);

return statearr_16843;
})();
if(inst_16774__$1){
var statearr_16844_16884 = state_16819__$1;
(statearr_16844_16884[(1)] = (13));

} else {
var statearr_16845_16885 = state_16819__$1;
(statearr_16845_16885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (9))){
var inst_16796 = (state_16819[(2)]);
var state_16819__$1 = state_16819;
var statearr_16846_16886 = state_16819__$1;
(statearr_16846_16886[(2)] = inst_16796);

(statearr_16846_16886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (5))){
var inst_16757 = cljs.core.deref.call(null,mults);
var inst_16758 = cljs.core.vals.call(null,inst_16757);
var inst_16759 = cljs.core.seq.call(null,inst_16758);
var inst_16760 = inst_16759;
var inst_16761 = null;
var inst_16762 = (0);
var inst_16763 = (0);
var state_16819__$1 = (function (){var statearr_16847 = state_16819;
(statearr_16847[(12)] = inst_16760);

(statearr_16847[(13)] = inst_16762);

(statearr_16847[(14)] = inst_16761);

(statearr_16847[(16)] = inst_16763);

return statearr_16847;
})();
var statearr_16848_16887 = state_16819__$1;
(statearr_16848_16887[(2)] = null);

(statearr_16848_16887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (14))){
var state_16819__$1 = state_16819;
var statearr_16852_16888 = state_16819__$1;
(statearr_16852_16888[(2)] = null);

(statearr_16852_16888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (16))){
var inst_16774 = (state_16819[(10)]);
var inst_16778 = cljs.core.chunk_first.call(null,inst_16774);
var inst_16779 = cljs.core.chunk_rest.call(null,inst_16774);
var inst_16780 = cljs.core.count.call(null,inst_16778);
var inst_16760 = inst_16779;
var inst_16761 = inst_16778;
var inst_16762 = inst_16780;
var inst_16763 = (0);
var state_16819__$1 = (function (){var statearr_16853 = state_16819;
(statearr_16853[(12)] = inst_16760);

(statearr_16853[(13)] = inst_16762);

(statearr_16853[(14)] = inst_16761);

(statearr_16853[(16)] = inst_16763);

return statearr_16853;
})();
var statearr_16854_16889 = state_16819__$1;
(statearr_16854_16889[(2)] = null);

(statearr_16854_16889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (10))){
var inst_16760 = (state_16819[(12)]);
var inst_16762 = (state_16819[(13)]);
var inst_16761 = (state_16819[(14)]);
var inst_16763 = (state_16819[(16)]);
var inst_16768 = cljs.core._nth.call(null,inst_16761,inst_16763);
var inst_16769 = cljs.core.async.muxch_STAR_.call(null,inst_16768);
var inst_16770 = cljs.core.async.close_BANG_.call(null,inst_16769);
var inst_16771 = (inst_16763 + (1));
var tmp16849 = inst_16760;
var tmp16850 = inst_16762;
var tmp16851 = inst_16761;
var inst_16760__$1 = tmp16849;
var inst_16761__$1 = tmp16851;
var inst_16762__$1 = tmp16850;
var inst_16763__$1 = inst_16771;
var state_16819__$1 = (function (){var statearr_16855 = state_16819;
(statearr_16855[(12)] = inst_16760__$1);

(statearr_16855[(13)] = inst_16762__$1);

(statearr_16855[(14)] = inst_16761__$1);

(statearr_16855[(17)] = inst_16770);

(statearr_16855[(16)] = inst_16763__$1);

return statearr_16855;
})();
var statearr_16856_16890 = state_16819__$1;
(statearr_16856_16890[(2)] = null);

(statearr_16856_16890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (18))){
var inst_16789 = (state_16819[(2)]);
var state_16819__$1 = state_16819;
var statearr_16857_16891 = state_16819__$1;
(statearr_16857_16891[(2)] = inst_16789);

(statearr_16857_16891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (8))){
var inst_16762 = (state_16819[(13)]);
var inst_16763 = (state_16819[(16)]);
var inst_16765 = (inst_16763 < inst_16762);
var inst_16766 = inst_16765;
var state_16819__$1 = state_16819;
if(cljs.core.truth_(inst_16766)){
var statearr_16858_16892 = state_16819__$1;
(statearr_16858_16892[(1)] = (10));

} else {
var statearr_16859_16893 = state_16819__$1;
(statearr_16859_16893[(1)] = (11));

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
});})(c__15631__auto___16865,mults,ensure_mult,p))
;
return ((function (switch__15536__auto__,c__15631__auto___16865,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15537__auto__ = null;
var cljs$core$async$state_machine__15537__auto____0 = (function (){
var statearr_16860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16860[(0)] = cljs$core$async$state_machine__15537__auto__);

(statearr_16860[(1)] = (1));

return statearr_16860;
});
var cljs$core$async$state_machine__15537__auto____1 = (function (state_16819){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_16819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e16861){if((e16861 instanceof Object)){
var ex__15540__auto__ = e16861;
var statearr_16862_16894 = state_16819;
(statearr_16862_16894[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16895 = state_16819;
state_16819 = G__16895;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$state_machine__15537__auto__ = function(state_16819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15537__auto____1.call(this,state_16819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15537__auto____0;
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15537__auto____1;
return cljs$core$async$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___16865,mults,ensure_mult,p))
})();
var state__15633__auto__ = (function (){var statearr_16863 = f__15632__auto__.call(null);
(statearr_16863[(6)] = c__15631__auto___16865);

return statearr_16863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___16865,mults,ensure_mult,p))
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
var G__16897 = arguments.length;
switch (G__16897) {
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
var G__16900 = arguments.length;
switch (G__16900) {
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
var G__16903 = arguments.length;
switch (G__16903) {
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
var c__15631__auto___16970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___16970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___16970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16942){
var state_val_16943 = (state_16942[(1)]);
if((state_val_16943 === (7))){
var state_16942__$1 = state_16942;
var statearr_16944_16971 = state_16942__$1;
(statearr_16944_16971[(2)] = null);

(statearr_16944_16971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (1))){
var state_16942__$1 = state_16942;
var statearr_16945_16972 = state_16942__$1;
(statearr_16945_16972[(2)] = null);

(statearr_16945_16972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (4))){
var inst_16906 = (state_16942[(7)]);
var inst_16908 = (inst_16906 < cnt);
var state_16942__$1 = state_16942;
if(cljs.core.truth_(inst_16908)){
var statearr_16946_16973 = state_16942__$1;
(statearr_16946_16973[(1)] = (6));

} else {
var statearr_16947_16974 = state_16942__$1;
(statearr_16947_16974[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (15))){
var inst_16938 = (state_16942[(2)]);
var state_16942__$1 = state_16942;
var statearr_16948_16975 = state_16942__$1;
(statearr_16948_16975[(2)] = inst_16938);

(statearr_16948_16975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (13))){
var inst_16931 = cljs.core.async.close_BANG_.call(null,out);
var state_16942__$1 = state_16942;
var statearr_16949_16976 = state_16942__$1;
(statearr_16949_16976[(2)] = inst_16931);

(statearr_16949_16976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (6))){
var state_16942__$1 = state_16942;
var statearr_16950_16977 = state_16942__$1;
(statearr_16950_16977[(2)] = null);

(statearr_16950_16977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (3))){
var inst_16940 = (state_16942[(2)]);
var state_16942__$1 = state_16942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16942__$1,inst_16940);
} else {
if((state_val_16943 === (12))){
var inst_16928 = (state_16942[(8)]);
var inst_16928__$1 = (state_16942[(2)]);
var inst_16929 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16928__$1);
var state_16942__$1 = (function (){var statearr_16951 = state_16942;
(statearr_16951[(8)] = inst_16928__$1);

return statearr_16951;
})();
if(cljs.core.truth_(inst_16929)){
var statearr_16952_16978 = state_16942__$1;
(statearr_16952_16978[(1)] = (13));

} else {
var statearr_16953_16979 = state_16942__$1;
(statearr_16953_16979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (2))){
var inst_16905 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16906 = (0);
var state_16942__$1 = (function (){var statearr_16954 = state_16942;
(statearr_16954[(7)] = inst_16906);

(statearr_16954[(9)] = inst_16905);

return statearr_16954;
})();
var statearr_16955_16980 = state_16942__$1;
(statearr_16955_16980[(2)] = null);

(statearr_16955_16980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (11))){
var inst_16906 = (state_16942[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16942,(10),Object,null,(9));
var inst_16915 = chs__$1.call(null,inst_16906);
var inst_16916 = done.call(null,inst_16906);
var inst_16917 = cljs.core.async.take_BANG_.call(null,inst_16915,inst_16916);
var state_16942__$1 = state_16942;
var statearr_16956_16981 = state_16942__$1;
(statearr_16956_16981[(2)] = inst_16917);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (9))){
var inst_16906 = (state_16942[(7)]);
var inst_16919 = (state_16942[(2)]);
var inst_16920 = (inst_16906 + (1));
var inst_16906__$1 = inst_16920;
var state_16942__$1 = (function (){var statearr_16957 = state_16942;
(statearr_16957[(7)] = inst_16906__$1);

(statearr_16957[(10)] = inst_16919);

return statearr_16957;
})();
var statearr_16958_16982 = state_16942__$1;
(statearr_16958_16982[(2)] = null);

(statearr_16958_16982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (5))){
var inst_16926 = (state_16942[(2)]);
var state_16942__$1 = (function (){var statearr_16959 = state_16942;
(statearr_16959[(11)] = inst_16926);

return statearr_16959;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16942__$1,(12),dchan);
} else {
if((state_val_16943 === (14))){
var inst_16928 = (state_16942[(8)]);
var inst_16933 = cljs.core.apply.call(null,f,inst_16928);
var state_16942__$1 = state_16942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16942__$1,(16),out,inst_16933);
} else {
if((state_val_16943 === (16))){
var inst_16935 = (state_16942[(2)]);
var state_16942__$1 = (function (){var statearr_16960 = state_16942;
(statearr_16960[(12)] = inst_16935);

return statearr_16960;
})();
var statearr_16961_16983 = state_16942__$1;
(statearr_16961_16983[(2)] = null);

(statearr_16961_16983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (10))){
var inst_16910 = (state_16942[(2)]);
var inst_16911 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16942__$1 = (function (){var statearr_16962 = state_16942;
(statearr_16962[(13)] = inst_16910);

return statearr_16962;
})();
var statearr_16963_16984 = state_16942__$1;
(statearr_16963_16984[(2)] = inst_16911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16943 === (8))){
var inst_16924 = (state_16942[(2)]);
var state_16942__$1 = state_16942;
var statearr_16964_16985 = state_16942__$1;
(statearr_16964_16985[(2)] = inst_16924);

(statearr_16964_16985[(1)] = (5));


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
});})(c__15631__auto___16970,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15536__auto__,c__15631__auto___16970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15537__auto__ = null;
var cljs$core$async$state_machine__15537__auto____0 = (function (){
var statearr_16965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16965[(0)] = cljs$core$async$state_machine__15537__auto__);

(statearr_16965[(1)] = (1));

return statearr_16965;
});
var cljs$core$async$state_machine__15537__auto____1 = (function (state_16942){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_16942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e16966){if((e16966 instanceof Object)){
var ex__15540__auto__ = e16966;
var statearr_16967_16986 = state_16942;
(statearr_16967_16986[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16987 = state_16942;
state_16942 = G__16987;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$state_machine__15537__auto__ = function(state_16942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15537__auto____1.call(this,state_16942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15537__auto____0;
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15537__auto____1;
return cljs$core$async$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___16970,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15633__auto__ = (function (){var statearr_16968 = f__15632__auto__.call(null);
(statearr_16968[(6)] = c__15631__auto___16970);

return statearr_16968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___16970,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__16990 = arguments.length;
switch (G__16990) {
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
var c__15631__auto___17044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___17044,out){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___17044,out){
return (function (state_17022){
var state_val_17023 = (state_17022[(1)]);
if((state_val_17023 === (7))){
var inst_17001 = (state_17022[(7)]);
var inst_17002 = (state_17022[(8)]);
var inst_17001__$1 = (state_17022[(2)]);
var inst_17002__$1 = cljs.core.nth.call(null,inst_17001__$1,(0),null);
var inst_17003 = cljs.core.nth.call(null,inst_17001__$1,(1),null);
var inst_17004 = (inst_17002__$1 == null);
var state_17022__$1 = (function (){var statearr_17024 = state_17022;
(statearr_17024[(7)] = inst_17001__$1);

(statearr_17024[(9)] = inst_17003);

(statearr_17024[(8)] = inst_17002__$1);

return statearr_17024;
})();
if(cljs.core.truth_(inst_17004)){
var statearr_17025_17045 = state_17022__$1;
(statearr_17025_17045[(1)] = (8));

} else {
var statearr_17026_17046 = state_17022__$1;
(statearr_17026_17046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17023 === (1))){
var inst_16991 = cljs.core.vec.call(null,chs);
var inst_16992 = inst_16991;
var state_17022__$1 = (function (){var statearr_17027 = state_17022;
(statearr_17027[(10)] = inst_16992);

return statearr_17027;
})();
var statearr_17028_17047 = state_17022__$1;
(statearr_17028_17047[(2)] = null);

(statearr_17028_17047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17023 === (4))){
var inst_16992 = (state_17022[(10)]);
var state_17022__$1 = state_17022;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17022__$1,(7),inst_16992);
} else {
if((state_val_17023 === (6))){
var inst_17018 = (state_17022[(2)]);
var state_17022__$1 = state_17022;
var statearr_17029_17048 = state_17022__$1;
(statearr_17029_17048[(2)] = inst_17018);

(statearr_17029_17048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17023 === (3))){
var inst_17020 = (state_17022[(2)]);
var state_17022__$1 = state_17022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17022__$1,inst_17020);
} else {
if((state_val_17023 === (2))){
var inst_16992 = (state_17022[(10)]);
var inst_16994 = cljs.core.count.call(null,inst_16992);
var inst_16995 = (inst_16994 > (0));
var state_17022__$1 = state_17022;
if(cljs.core.truth_(inst_16995)){
var statearr_17031_17049 = state_17022__$1;
(statearr_17031_17049[(1)] = (4));

} else {
var statearr_17032_17050 = state_17022__$1;
(statearr_17032_17050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17023 === (11))){
var inst_16992 = (state_17022[(10)]);
var inst_17011 = (state_17022[(2)]);
var tmp17030 = inst_16992;
var inst_16992__$1 = tmp17030;
var state_17022__$1 = (function (){var statearr_17033 = state_17022;
(statearr_17033[(11)] = inst_17011);

(statearr_17033[(10)] = inst_16992__$1);

return statearr_17033;
})();
var statearr_17034_17051 = state_17022__$1;
(statearr_17034_17051[(2)] = null);

(statearr_17034_17051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17023 === (9))){
var inst_17002 = (state_17022[(8)]);
var state_17022__$1 = state_17022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17022__$1,(11),out,inst_17002);
} else {
if((state_val_17023 === (5))){
var inst_17016 = cljs.core.async.close_BANG_.call(null,out);
var state_17022__$1 = state_17022;
var statearr_17035_17052 = state_17022__$1;
(statearr_17035_17052[(2)] = inst_17016);

(statearr_17035_17052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17023 === (10))){
var inst_17014 = (state_17022[(2)]);
var state_17022__$1 = state_17022;
var statearr_17036_17053 = state_17022__$1;
(statearr_17036_17053[(2)] = inst_17014);

(statearr_17036_17053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17023 === (8))){
var inst_17001 = (state_17022[(7)]);
var inst_17003 = (state_17022[(9)]);
var inst_17002 = (state_17022[(8)]);
var inst_16992 = (state_17022[(10)]);
var inst_17006 = (function (){var cs = inst_16992;
var vec__16997 = inst_17001;
var v = inst_17002;
var c = inst_17003;
return ((function (cs,vec__16997,v,c,inst_17001,inst_17003,inst_17002,inst_16992,state_val_17023,c__15631__auto___17044,out){
return (function (p1__16988_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16988_SHARP_);
});
;})(cs,vec__16997,v,c,inst_17001,inst_17003,inst_17002,inst_16992,state_val_17023,c__15631__auto___17044,out))
})();
var inst_17007 = cljs.core.filterv.call(null,inst_17006,inst_16992);
var inst_16992__$1 = inst_17007;
var state_17022__$1 = (function (){var statearr_17037 = state_17022;
(statearr_17037[(10)] = inst_16992__$1);

return statearr_17037;
})();
var statearr_17038_17054 = state_17022__$1;
(statearr_17038_17054[(2)] = null);

(statearr_17038_17054[(1)] = (2));


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
});})(c__15631__auto___17044,out))
;
return ((function (switch__15536__auto__,c__15631__auto___17044,out){
return (function() {
var cljs$core$async$state_machine__15537__auto__ = null;
var cljs$core$async$state_machine__15537__auto____0 = (function (){
var statearr_17039 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17039[(0)] = cljs$core$async$state_machine__15537__auto__);

(statearr_17039[(1)] = (1));

return statearr_17039;
});
var cljs$core$async$state_machine__15537__auto____1 = (function (state_17022){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_17022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e17040){if((e17040 instanceof Object)){
var ex__15540__auto__ = e17040;
var statearr_17041_17055 = state_17022;
(statearr_17041_17055[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17056 = state_17022;
state_17022 = G__17056;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$state_machine__15537__auto__ = function(state_17022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15537__auto____1.call(this,state_17022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15537__auto____0;
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15537__auto____1;
return cljs$core$async$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___17044,out))
})();
var state__15633__auto__ = (function (){var statearr_17042 = f__15632__auto__.call(null);
(statearr_17042[(6)] = c__15631__auto___17044);

return statearr_17042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___17044,out))
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
var G__17058 = arguments.length;
switch (G__17058) {
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
var c__15631__auto___17103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___17103,out){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___17103,out){
return (function (state_17082){
var state_val_17083 = (state_17082[(1)]);
if((state_val_17083 === (7))){
var inst_17064 = (state_17082[(7)]);
var inst_17064__$1 = (state_17082[(2)]);
var inst_17065 = (inst_17064__$1 == null);
var inst_17066 = cljs.core.not.call(null,inst_17065);
var state_17082__$1 = (function (){var statearr_17084 = state_17082;
(statearr_17084[(7)] = inst_17064__$1);

return statearr_17084;
})();
if(inst_17066){
var statearr_17085_17104 = state_17082__$1;
(statearr_17085_17104[(1)] = (8));

} else {
var statearr_17086_17105 = state_17082__$1;
(statearr_17086_17105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (1))){
var inst_17059 = (0);
var state_17082__$1 = (function (){var statearr_17087 = state_17082;
(statearr_17087[(8)] = inst_17059);

return statearr_17087;
})();
var statearr_17088_17106 = state_17082__$1;
(statearr_17088_17106[(2)] = null);

(statearr_17088_17106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (4))){
var state_17082__$1 = state_17082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17082__$1,(7),ch);
} else {
if((state_val_17083 === (6))){
var inst_17077 = (state_17082[(2)]);
var state_17082__$1 = state_17082;
var statearr_17089_17107 = state_17082__$1;
(statearr_17089_17107[(2)] = inst_17077);

(statearr_17089_17107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (3))){
var inst_17079 = (state_17082[(2)]);
var inst_17080 = cljs.core.async.close_BANG_.call(null,out);
var state_17082__$1 = (function (){var statearr_17090 = state_17082;
(statearr_17090[(9)] = inst_17079);

return statearr_17090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17082__$1,inst_17080);
} else {
if((state_val_17083 === (2))){
var inst_17059 = (state_17082[(8)]);
var inst_17061 = (inst_17059 < n);
var state_17082__$1 = state_17082;
if(cljs.core.truth_(inst_17061)){
var statearr_17091_17108 = state_17082__$1;
(statearr_17091_17108[(1)] = (4));

} else {
var statearr_17092_17109 = state_17082__$1;
(statearr_17092_17109[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (11))){
var inst_17059 = (state_17082[(8)]);
var inst_17069 = (state_17082[(2)]);
var inst_17070 = (inst_17059 + (1));
var inst_17059__$1 = inst_17070;
var state_17082__$1 = (function (){var statearr_17093 = state_17082;
(statearr_17093[(10)] = inst_17069);

(statearr_17093[(8)] = inst_17059__$1);

return statearr_17093;
})();
var statearr_17094_17110 = state_17082__$1;
(statearr_17094_17110[(2)] = null);

(statearr_17094_17110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (9))){
var state_17082__$1 = state_17082;
var statearr_17095_17111 = state_17082__$1;
(statearr_17095_17111[(2)] = null);

(statearr_17095_17111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (5))){
var state_17082__$1 = state_17082;
var statearr_17096_17112 = state_17082__$1;
(statearr_17096_17112[(2)] = null);

(statearr_17096_17112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (10))){
var inst_17074 = (state_17082[(2)]);
var state_17082__$1 = state_17082;
var statearr_17097_17113 = state_17082__$1;
(statearr_17097_17113[(2)] = inst_17074);

(statearr_17097_17113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (8))){
var inst_17064 = (state_17082[(7)]);
var state_17082__$1 = state_17082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17082__$1,(11),out,inst_17064);
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
});})(c__15631__auto___17103,out))
;
return ((function (switch__15536__auto__,c__15631__auto___17103,out){
return (function() {
var cljs$core$async$state_machine__15537__auto__ = null;
var cljs$core$async$state_machine__15537__auto____0 = (function (){
var statearr_17098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17098[(0)] = cljs$core$async$state_machine__15537__auto__);

(statearr_17098[(1)] = (1));

return statearr_17098;
});
var cljs$core$async$state_machine__15537__auto____1 = (function (state_17082){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_17082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e17099){if((e17099 instanceof Object)){
var ex__15540__auto__ = e17099;
var statearr_17100_17114 = state_17082;
(statearr_17100_17114[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17115 = state_17082;
state_17082 = G__17115;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$state_machine__15537__auto__ = function(state_17082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15537__auto____1.call(this,state_17082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15537__auto____0;
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15537__auto____1;
return cljs$core$async$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___17103,out))
})();
var state__15633__auto__ = (function (){var statearr_17101 = f__15632__auto__.call(null);
(statearr_17101[(6)] = c__15631__auto___17103);

return statearr_17101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___17103,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17117 = (function (f,ch,meta17118){
this.f = f;
this.ch = ch;
this.meta17118 = meta17118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17119,meta17118__$1){
var self__ = this;
var _17119__$1 = this;
return (new cljs.core.async.t_cljs$core$async17117(self__.f,self__.ch,meta17118__$1));
});

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17119){
var self__ = this;
var _17119__$1 = this;
return self__.meta17118;
});

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17120 = (function (f,ch,meta17118,_,fn1,meta17121){
this.f = f;
this.ch = ch;
this.meta17118 = meta17118;
this._ = _;
this.fn1 = fn1;
this.meta17121 = meta17121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17122,meta17121__$1){
var self__ = this;
var _17122__$1 = this;
return (new cljs.core.async.t_cljs$core$async17120(self__.f,self__.ch,self__.meta17118,self__._,self__.fn1,meta17121__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17122){
var self__ = this;
var _17122__$1 = this;
return self__.meta17121;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17116_SHARP_){
return f1.call(null,(((p1__17116_SHARP_ == null))?null:self__.f.call(null,p1__17116_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17120.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17118","meta17118",-1778575793,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17117","cljs.core.async/t_cljs$core$async17117",-1096518911,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17121","meta17121",1572896039,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17120";

cljs.core.async.t_cljs$core$async17120.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17120");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17120.
 */
cljs.core.async.__GT_t_cljs$core$async17120 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17120(f__$1,ch__$1,meta17118__$1,___$2,fn1__$1,meta17121){
return (new cljs.core.async.t_cljs$core$async17120(f__$1,ch__$1,meta17118__$1,___$2,fn1__$1,meta17121));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17120(self__.f,self__.ch,self__.meta17118,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17118","meta17118",-1778575793,null)], null);
});

cljs.core.async.t_cljs$core$async17117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17117";

cljs.core.async.t_cljs$core$async17117.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17117");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17117.
 */
cljs.core.async.__GT_t_cljs$core$async17117 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17117(f__$1,ch__$1,meta17118){
return (new cljs.core.async.t_cljs$core$async17117(f__$1,ch__$1,meta17118));
});

}

return (new cljs.core.async.t_cljs$core$async17117(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17123 = (function (f,ch,meta17124){
this.f = f;
this.ch = ch;
this.meta17124 = meta17124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17125,meta17124__$1){
var self__ = this;
var _17125__$1 = this;
return (new cljs.core.async.t_cljs$core$async17123(self__.f,self__.ch,meta17124__$1));
});

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17125){
var self__ = this;
var _17125__$1 = this;
return self__.meta17124;
});

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17124","meta17124",-1486207638,null)], null);
});

cljs.core.async.t_cljs$core$async17123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17123";

cljs.core.async.t_cljs$core$async17123.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17123");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17123.
 */
cljs.core.async.__GT_t_cljs$core$async17123 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17123(f__$1,ch__$1,meta17124){
return (new cljs.core.async.t_cljs$core$async17123(f__$1,ch__$1,meta17124));
});

}

return (new cljs.core.async.t_cljs$core$async17123(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async17126 = (function (p,ch,meta17127){
this.p = p;
this.ch = ch;
this.meta17127 = meta17127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17128,meta17127__$1){
var self__ = this;
var _17128__$1 = this;
return (new cljs.core.async.t_cljs$core$async17126(self__.p,self__.ch,meta17127__$1));
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

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
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
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17127","meta17127",1727240236,null)], null);
});

cljs.core.async.t_cljs$core$async17126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17126";

cljs.core.async.t_cljs$core$async17126.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17126");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17126.
 */
cljs.core.async.__GT_t_cljs$core$async17126 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17126(p__$1,ch__$1,meta17127){
return (new cljs.core.async.t_cljs$core$async17126(p__$1,ch__$1,meta17127));
});

}

return (new cljs.core.async.t_cljs$core$async17126(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17130 = arguments.length;
switch (G__17130) {
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
var c__15631__auto___17170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___17170,out){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___17170,out){
return (function (state_17151){
var state_val_17152 = (state_17151[(1)]);
if((state_val_17152 === (7))){
var inst_17147 = (state_17151[(2)]);
var state_17151__$1 = state_17151;
var statearr_17153_17171 = state_17151__$1;
(statearr_17153_17171[(2)] = inst_17147);

(statearr_17153_17171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (1))){
var state_17151__$1 = state_17151;
var statearr_17154_17172 = state_17151__$1;
(statearr_17154_17172[(2)] = null);

(statearr_17154_17172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (4))){
var inst_17133 = (state_17151[(7)]);
var inst_17133__$1 = (state_17151[(2)]);
var inst_17134 = (inst_17133__$1 == null);
var state_17151__$1 = (function (){var statearr_17155 = state_17151;
(statearr_17155[(7)] = inst_17133__$1);

return statearr_17155;
})();
if(cljs.core.truth_(inst_17134)){
var statearr_17156_17173 = state_17151__$1;
(statearr_17156_17173[(1)] = (5));

} else {
var statearr_17157_17174 = state_17151__$1;
(statearr_17157_17174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (6))){
var inst_17133 = (state_17151[(7)]);
var inst_17138 = p.call(null,inst_17133);
var state_17151__$1 = state_17151;
if(cljs.core.truth_(inst_17138)){
var statearr_17158_17175 = state_17151__$1;
(statearr_17158_17175[(1)] = (8));

} else {
var statearr_17159_17176 = state_17151__$1;
(statearr_17159_17176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (3))){
var inst_17149 = (state_17151[(2)]);
var state_17151__$1 = state_17151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17151__$1,inst_17149);
} else {
if((state_val_17152 === (2))){
var state_17151__$1 = state_17151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17151__$1,(4),ch);
} else {
if((state_val_17152 === (11))){
var inst_17141 = (state_17151[(2)]);
var state_17151__$1 = state_17151;
var statearr_17160_17177 = state_17151__$1;
(statearr_17160_17177[(2)] = inst_17141);

(statearr_17160_17177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (9))){
var state_17151__$1 = state_17151;
var statearr_17161_17178 = state_17151__$1;
(statearr_17161_17178[(2)] = null);

(statearr_17161_17178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (5))){
var inst_17136 = cljs.core.async.close_BANG_.call(null,out);
var state_17151__$1 = state_17151;
var statearr_17162_17179 = state_17151__$1;
(statearr_17162_17179[(2)] = inst_17136);

(statearr_17162_17179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (10))){
var inst_17144 = (state_17151[(2)]);
var state_17151__$1 = (function (){var statearr_17163 = state_17151;
(statearr_17163[(8)] = inst_17144);

return statearr_17163;
})();
var statearr_17164_17180 = state_17151__$1;
(statearr_17164_17180[(2)] = null);

(statearr_17164_17180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (8))){
var inst_17133 = (state_17151[(7)]);
var state_17151__$1 = state_17151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17151__$1,(11),out,inst_17133);
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
});})(c__15631__auto___17170,out))
;
return ((function (switch__15536__auto__,c__15631__auto___17170,out){
return (function() {
var cljs$core$async$state_machine__15537__auto__ = null;
var cljs$core$async$state_machine__15537__auto____0 = (function (){
var statearr_17165 = [null,null,null,null,null,null,null,null,null];
(statearr_17165[(0)] = cljs$core$async$state_machine__15537__auto__);

(statearr_17165[(1)] = (1));

return statearr_17165;
});
var cljs$core$async$state_machine__15537__auto____1 = (function (state_17151){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_17151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e17166){if((e17166 instanceof Object)){
var ex__15540__auto__ = e17166;
var statearr_17167_17181 = state_17151;
(statearr_17167_17181[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17182 = state_17151;
state_17151 = G__17182;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$state_machine__15537__auto__ = function(state_17151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15537__auto____1.call(this,state_17151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15537__auto____0;
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15537__auto____1;
return cljs$core$async$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___17170,out))
})();
var state__15633__auto__ = (function (){var statearr_17168 = f__15632__auto__.call(null);
(statearr_17168[(6)] = c__15631__auto___17170);

return statearr_17168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___17170,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17184 = arguments.length;
switch (G__17184) {
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
var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__){
return (function (state_17247){
var state_val_17248 = (state_17247[(1)]);
if((state_val_17248 === (7))){
var inst_17243 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17249_17287 = state_17247__$1;
(statearr_17249_17287[(2)] = inst_17243);

(statearr_17249_17287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (20))){
var inst_17213 = (state_17247[(7)]);
var inst_17224 = (state_17247[(2)]);
var inst_17225 = cljs.core.next.call(null,inst_17213);
var inst_17199 = inst_17225;
var inst_17200 = null;
var inst_17201 = (0);
var inst_17202 = (0);
var state_17247__$1 = (function (){var statearr_17250 = state_17247;
(statearr_17250[(8)] = inst_17201);

(statearr_17250[(9)] = inst_17224);

(statearr_17250[(10)] = inst_17200);

(statearr_17250[(11)] = inst_17202);

(statearr_17250[(12)] = inst_17199);

return statearr_17250;
})();
var statearr_17251_17288 = state_17247__$1;
(statearr_17251_17288[(2)] = null);

(statearr_17251_17288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (1))){
var state_17247__$1 = state_17247;
var statearr_17252_17289 = state_17247__$1;
(statearr_17252_17289[(2)] = null);

(statearr_17252_17289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (4))){
var inst_17188 = (state_17247[(13)]);
var inst_17188__$1 = (state_17247[(2)]);
var inst_17189 = (inst_17188__$1 == null);
var state_17247__$1 = (function (){var statearr_17253 = state_17247;
(statearr_17253[(13)] = inst_17188__$1);

return statearr_17253;
})();
if(cljs.core.truth_(inst_17189)){
var statearr_17254_17290 = state_17247__$1;
(statearr_17254_17290[(1)] = (5));

} else {
var statearr_17255_17291 = state_17247__$1;
(statearr_17255_17291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (15))){
var state_17247__$1 = state_17247;
var statearr_17259_17292 = state_17247__$1;
(statearr_17259_17292[(2)] = null);

(statearr_17259_17292[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (21))){
var state_17247__$1 = state_17247;
var statearr_17260_17293 = state_17247__$1;
(statearr_17260_17293[(2)] = null);

(statearr_17260_17293[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (13))){
var inst_17201 = (state_17247[(8)]);
var inst_17200 = (state_17247[(10)]);
var inst_17202 = (state_17247[(11)]);
var inst_17199 = (state_17247[(12)]);
var inst_17209 = (state_17247[(2)]);
var inst_17210 = (inst_17202 + (1));
var tmp17256 = inst_17201;
var tmp17257 = inst_17200;
var tmp17258 = inst_17199;
var inst_17199__$1 = tmp17258;
var inst_17200__$1 = tmp17257;
var inst_17201__$1 = tmp17256;
var inst_17202__$1 = inst_17210;
var state_17247__$1 = (function (){var statearr_17261 = state_17247;
(statearr_17261[(14)] = inst_17209);

(statearr_17261[(8)] = inst_17201__$1);

(statearr_17261[(10)] = inst_17200__$1);

(statearr_17261[(11)] = inst_17202__$1);

(statearr_17261[(12)] = inst_17199__$1);

return statearr_17261;
})();
var statearr_17262_17294 = state_17247__$1;
(statearr_17262_17294[(2)] = null);

(statearr_17262_17294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (22))){
var state_17247__$1 = state_17247;
var statearr_17263_17295 = state_17247__$1;
(statearr_17263_17295[(2)] = null);

(statearr_17263_17295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (6))){
var inst_17188 = (state_17247[(13)]);
var inst_17197 = f.call(null,inst_17188);
var inst_17198 = cljs.core.seq.call(null,inst_17197);
var inst_17199 = inst_17198;
var inst_17200 = null;
var inst_17201 = (0);
var inst_17202 = (0);
var state_17247__$1 = (function (){var statearr_17264 = state_17247;
(statearr_17264[(8)] = inst_17201);

(statearr_17264[(10)] = inst_17200);

(statearr_17264[(11)] = inst_17202);

(statearr_17264[(12)] = inst_17199);

return statearr_17264;
})();
var statearr_17265_17296 = state_17247__$1;
(statearr_17265_17296[(2)] = null);

(statearr_17265_17296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (17))){
var inst_17213 = (state_17247[(7)]);
var inst_17217 = cljs.core.chunk_first.call(null,inst_17213);
var inst_17218 = cljs.core.chunk_rest.call(null,inst_17213);
var inst_17219 = cljs.core.count.call(null,inst_17217);
var inst_17199 = inst_17218;
var inst_17200 = inst_17217;
var inst_17201 = inst_17219;
var inst_17202 = (0);
var state_17247__$1 = (function (){var statearr_17266 = state_17247;
(statearr_17266[(8)] = inst_17201);

(statearr_17266[(10)] = inst_17200);

(statearr_17266[(11)] = inst_17202);

(statearr_17266[(12)] = inst_17199);

return statearr_17266;
})();
var statearr_17267_17297 = state_17247__$1;
(statearr_17267_17297[(2)] = null);

(statearr_17267_17297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (3))){
var inst_17245 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17247__$1,inst_17245);
} else {
if((state_val_17248 === (12))){
var inst_17233 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17268_17298 = state_17247__$1;
(statearr_17268_17298[(2)] = inst_17233);

(statearr_17268_17298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (2))){
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17247__$1,(4),in$);
} else {
if((state_val_17248 === (23))){
var inst_17241 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17269_17299 = state_17247__$1;
(statearr_17269_17299[(2)] = inst_17241);

(statearr_17269_17299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (19))){
var inst_17228 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17270_17300 = state_17247__$1;
(statearr_17270_17300[(2)] = inst_17228);

(statearr_17270_17300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (11))){
var inst_17213 = (state_17247[(7)]);
var inst_17199 = (state_17247[(12)]);
var inst_17213__$1 = cljs.core.seq.call(null,inst_17199);
var state_17247__$1 = (function (){var statearr_17271 = state_17247;
(statearr_17271[(7)] = inst_17213__$1);

return statearr_17271;
})();
if(inst_17213__$1){
var statearr_17272_17301 = state_17247__$1;
(statearr_17272_17301[(1)] = (14));

} else {
var statearr_17273_17302 = state_17247__$1;
(statearr_17273_17302[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (9))){
var inst_17235 = (state_17247[(2)]);
var inst_17236 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17247__$1 = (function (){var statearr_17274 = state_17247;
(statearr_17274[(15)] = inst_17235);

return statearr_17274;
})();
if(cljs.core.truth_(inst_17236)){
var statearr_17275_17303 = state_17247__$1;
(statearr_17275_17303[(1)] = (21));

} else {
var statearr_17276_17304 = state_17247__$1;
(statearr_17276_17304[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (5))){
var inst_17191 = cljs.core.async.close_BANG_.call(null,out);
var state_17247__$1 = state_17247;
var statearr_17277_17305 = state_17247__$1;
(statearr_17277_17305[(2)] = inst_17191);

(statearr_17277_17305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (14))){
var inst_17213 = (state_17247[(7)]);
var inst_17215 = cljs.core.chunked_seq_QMARK_.call(null,inst_17213);
var state_17247__$1 = state_17247;
if(inst_17215){
var statearr_17278_17306 = state_17247__$1;
(statearr_17278_17306[(1)] = (17));

} else {
var statearr_17279_17307 = state_17247__$1;
(statearr_17279_17307[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (16))){
var inst_17231 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17280_17308 = state_17247__$1;
(statearr_17280_17308[(2)] = inst_17231);

(statearr_17280_17308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (10))){
var inst_17200 = (state_17247[(10)]);
var inst_17202 = (state_17247[(11)]);
var inst_17207 = cljs.core._nth.call(null,inst_17200,inst_17202);
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17247__$1,(13),out,inst_17207);
} else {
if((state_val_17248 === (18))){
var inst_17213 = (state_17247[(7)]);
var inst_17222 = cljs.core.first.call(null,inst_17213);
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17247__$1,(20),out,inst_17222);
} else {
if((state_val_17248 === (8))){
var inst_17201 = (state_17247[(8)]);
var inst_17202 = (state_17247[(11)]);
var inst_17204 = (inst_17202 < inst_17201);
var inst_17205 = inst_17204;
var state_17247__$1 = state_17247;
if(cljs.core.truth_(inst_17205)){
var statearr_17281_17309 = state_17247__$1;
(statearr_17281_17309[(1)] = (10));

} else {
var statearr_17282_17310 = state_17247__$1;
(statearr_17282_17310[(1)] = (11));

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
});})(c__15631__auto__))
;
return ((function (switch__15536__auto__,c__15631__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15537__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15537__auto____0 = (function (){
var statearr_17283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17283[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15537__auto__);

(statearr_17283[(1)] = (1));

return statearr_17283;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15537__auto____1 = (function (state_17247){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_17247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e17284){if((e17284 instanceof Object)){
var ex__15540__auto__ = e17284;
var statearr_17285_17311 = state_17247;
(statearr_17285_17311[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17312 = state_17247;
state_17247 = G__17312;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15537__auto__ = function(state_17247){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15537__auto____1.call(this,state_17247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15537__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15537__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__))
})();
var state__15633__auto__ = (function (){var statearr_17286 = f__15632__auto__.call(null);
(statearr_17286[(6)] = c__15631__auto__);

return statearr_17286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__))
);

return c__15631__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17314 = arguments.length;
switch (G__17314) {
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
var G__17317 = arguments.length;
switch (G__17317) {
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
var G__17320 = arguments.length;
switch (G__17320) {
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
var c__15631__auto___17367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___17367,out){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___17367,out){
return (function (state_17344){
var state_val_17345 = (state_17344[(1)]);
if((state_val_17345 === (7))){
var inst_17339 = (state_17344[(2)]);
var state_17344__$1 = state_17344;
var statearr_17346_17368 = state_17344__$1;
(statearr_17346_17368[(2)] = inst_17339);

(statearr_17346_17368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (1))){
var inst_17321 = null;
var state_17344__$1 = (function (){var statearr_17347 = state_17344;
(statearr_17347[(7)] = inst_17321);

return statearr_17347;
})();
var statearr_17348_17369 = state_17344__$1;
(statearr_17348_17369[(2)] = null);

(statearr_17348_17369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (4))){
var inst_17324 = (state_17344[(8)]);
var inst_17324__$1 = (state_17344[(2)]);
var inst_17325 = (inst_17324__$1 == null);
var inst_17326 = cljs.core.not.call(null,inst_17325);
var state_17344__$1 = (function (){var statearr_17349 = state_17344;
(statearr_17349[(8)] = inst_17324__$1);

return statearr_17349;
})();
if(inst_17326){
var statearr_17350_17370 = state_17344__$1;
(statearr_17350_17370[(1)] = (5));

} else {
var statearr_17351_17371 = state_17344__$1;
(statearr_17351_17371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (6))){
var state_17344__$1 = state_17344;
var statearr_17352_17372 = state_17344__$1;
(statearr_17352_17372[(2)] = null);

(statearr_17352_17372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (3))){
var inst_17341 = (state_17344[(2)]);
var inst_17342 = cljs.core.async.close_BANG_.call(null,out);
var state_17344__$1 = (function (){var statearr_17353 = state_17344;
(statearr_17353[(9)] = inst_17341);

return statearr_17353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17344__$1,inst_17342);
} else {
if((state_val_17345 === (2))){
var state_17344__$1 = state_17344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17344__$1,(4),ch);
} else {
if((state_val_17345 === (11))){
var inst_17324 = (state_17344[(8)]);
var inst_17333 = (state_17344[(2)]);
var inst_17321 = inst_17324;
var state_17344__$1 = (function (){var statearr_17354 = state_17344;
(statearr_17354[(10)] = inst_17333);

(statearr_17354[(7)] = inst_17321);

return statearr_17354;
})();
var statearr_17355_17373 = state_17344__$1;
(statearr_17355_17373[(2)] = null);

(statearr_17355_17373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (9))){
var inst_17324 = (state_17344[(8)]);
var state_17344__$1 = state_17344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17344__$1,(11),out,inst_17324);
} else {
if((state_val_17345 === (5))){
var inst_17321 = (state_17344[(7)]);
var inst_17324 = (state_17344[(8)]);
var inst_17328 = cljs.core._EQ_.call(null,inst_17324,inst_17321);
var state_17344__$1 = state_17344;
if(inst_17328){
var statearr_17357_17374 = state_17344__$1;
(statearr_17357_17374[(1)] = (8));

} else {
var statearr_17358_17375 = state_17344__$1;
(statearr_17358_17375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (10))){
var inst_17336 = (state_17344[(2)]);
var state_17344__$1 = state_17344;
var statearr_17359_17376 = state_17344__$1;
(statearr_17359_17376[(2)] = inst_17336);

(statearr_17359_17376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (8))){
var inst_17321 = (state_17344[(7)]);
var tmp17356 = inst_17321;
var inst_17321__$1 = tmp17356;
var state_17344__$1 = (function (){var statearr_17360 = state_17344;
(statearr_17360[(7)] = inst_17321__$1);

return statearr_17360;
})();
var statearr_17361_17377 = state_17344__$1;
(statearr_17361_17377[(2)] = null);

(statearr_17361_17377[(1)] = (2));


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
});})(c__15631__auto___17367,out))
;
return ((function (switch__15536__auto__,c__15631__auto___17367,out){
return (function() {
var cljs$core$async$state_machine__15537__auto__ = null;
var cljs$core$async$state_machine__15537__auto____0 = (function (){
var statearr_17362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17362[(0)] = cljs$core$async$state_machine__15537__auto__);

(statearr_17362[(1)] = (1));

return statearr_17362;
});
var cljs$core$async$state_machine__15537__auto____1 = (function (state_17344){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_17344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e17363){if((e17363 instanceof Object)){
var ex__15540__auto__ = e17363;
var statearr_17364_17378 = state_17344;
(statearr_17364_17378[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17379 = state_17344;
state_17344 = G__17379;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$state_machine__15537__auto__ = function(state_17344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15537__auto____1.call(this,state_17344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15537__auto____0;
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15537__auto____1;
return cljs$core$async$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___17367,out))
})();
var state__15633__auto__ = (function (){var statearr_17365 = f__15632__auto__.call(null);
(statearr_17365[(6)] = c__15631__auto___17367);

return statearr_17365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___17367,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17381 = arguments.length;
switch (G__17381) {
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
var c__15631__auto___17447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___17447,out){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___17447,out){
return (function (state_17419){
var state_val_17420 = (state_17419[(1)]);
if((state_val_17420 === (7))){
var inst_17415 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17421_17448 = state_17419__$1;
(statearr_17421_17448[(2)] = inst_17415);

(statearr_17421_17448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (1))){
var inst_17382 = (new Array(n));
var inst_17383 = inst_17382;
var inst_17384 = (0);
var state_17419__$1 = (function (){var statearr_17422 = state_17419;
(statearr_17422[(7)] = inst_17383);

(statearr_17422[(8)] = inst_17384);

return statearr_17422;
})();
var statearr_17423_17449 = state_17419__$1;
(statearr_17423_17449[(2)] = null);

(statearr_17423_17449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (4))){
var inst_17387 = (state_17419[(9)]);
var inst_17387__$1 = (state_17419[(2)]);
var inst_17388 = (inst_17387__$1 == null);
var inst_17389 = cljs.core.not.call(null,inst_17388);
var state_17419__$1 = (function (){var statearr_17424 = state_17419;
(statearr_17424[(9)] = inst_17387__$1);

return statearr_17424;
})();
if(inst_17389){
var statearr_17425_17450 = state_17419__$1;
(statearr_17425_17450[(1)] = (5));

} else {
var statearr_17426_17451 = state_17419__$1;
(statearr_17426_17451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (15))){
var inst_17409 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17427_17452 = state_17419__$1;
(statearr_17427_17452[(2)] = inst_17409);

(statearr_17427_17452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (13))){
var state_17419__$1 = state_17419;
var statearr_17428_17453 = state_17419__$1;
(statearr_17428_17453[(2)] = null);

(statearr_17428_17453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (6))){
var inst_17384 = (state_17419[(8)]);
var inst_17405 = (inst_17384 > (0));
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17405)){
var statearr_17429_17454 = state_17419__$1;
(statearr_17429_17454[(1)] = (12));

} else {
var statearr_17430_17455 = state_17419__$1;
(statearr_17430_17455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (3))){
var inst_17417 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17419__$1,inst_17417);
} else {
if((state_val_17420 === (12))){
var inst_17383 = (state_17419[(7)]);
var inst_17407 = cljs.core.vec.call(null,inst_17383);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17419__$1,(15),out,inst_17407);
} else {
if((state_val_17420 === (2))){
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17419__$1,(4),ch);
} else {
if((state_val_17420 === (11))){
var inst_17399 = (state_17419[(2)]);
var inst_17400 = (new Array(n));
var inst_17383 = inst_17400;
var inst_17384 = (0);
var state_17419__$1 = (function (){var statearr_17431 = state_17419;
(statearr_17431[(7)] = inst_17383);

(statearr_17431[(8)] = inst_17384);

(statearr_17431[(10)] = inst_17399);

return statearr_17431;
})();
var statearr_17432_17456 = state_17419__$1;
(statearr_17432_17456[(2)] = null);

(statearr_17432_17456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (9))){
var inst_17383 = (state_17419[(7)]);
var inst_17397 = cljs.core.vec.call(null,inst_17383);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17419__$1,(11),out,inst_17397);
} else {
if((state_val_17420 === (5))){
var inst_17383 = (state_17419[(7)]);
var inst_17384 = (state_17419[(8)]);
var inst_17387 = (state_17419[(9)]);
var inst_17392 = (state_17419[(11)]);
var inst_17391 = (inst_17383[inst_17384] = inst_17387);
var inst_17392__$1 = (inst_17384 + (1));
var inst_17393 = (inst_17392__$1 < n);
var state_17419__$1 = (function (){var statearr_17433 = state_17419;
(statearr_17433[(11)] = inst_17392__$1);

(statearr_17433[(12)] = inst_17391);

return statearr_17433;
})();
if(cljs.core.truth_(inst_17393)){
var statearr_17434_17457 = state_17419__$1;
(statearr_17434_17457[(1)] = (8));

} else {
var statearr_17435_17458 = state_17419__$1;
(statearr_17435_17458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (14))){
var inst_17412 = (state_17419[(2)]);
var inst_17413 = cljs.core.async.close_BANG_.call(null,out);
var state_17419__$1 = (function (){var statearr_17437 = state_17419;
(statearr_17437[(13)] = inst_17412);

return statearr_17437;
})();
var statearr_17438_17459 = state_17419__$1;
(statearr_17438_17459[(2)] = inst_17413);

(statearr_17438_17459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (10))){
var inst_17403 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17439_17460 = state_17419__$1;
(statearr_17439_17460[(2)] = inst_17403);

(statearr_17439_17460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (8))){
var inst_17383 = (state_17419[(7)]);
var inst_17392 = (state_17419[(11)]);
var tmp17436 = inst_17383;
var inst_17383__$1 = tmp17436;
var inst_17384 = inst_17392;
var state_17419__$1 = (function (){var statearr_17440 = state_17419;
(statearr_17440[(7)] = inst_17383__$1);

(statearr_17440[(8)] = inst_17384);

return statearr_17440;
})();
var statearr_17441_17461 = state_17419__$1;
(statearr_17441_17461[(2)] = null);

(statearr_17441_17461[(1)] = (2));


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
});})(c__15631__auto___17447,out))
;
return ((function (switch__15536__auto__,c__15631__auto___17447,out){
return (function() {
var cljs$core$async$state_machine__15537__auto__ = null;
var cljs$core$async$state_machine__15537__auto____0 = (function (){
var statearr_17442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17442[(0)] = cljs$core$async$state_machine__15537__auto__);

(statearr_17442[(1)] = (1));

return statearr_17442;
});
var cljs$core$async$state_machine__15537__auto____1 = (function (state_17419){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_17419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e17443){if((e17443 instanceof Object)){
var ex__15540__auto__ = e17443;
var statearr_17444_17462 = state_17419;
(statearr_17444_17462[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17463 = state_17419;
state_17419 = G__17463;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$state_machine__15537__auto__ = function(state_17419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15537__auto____1.call(this,state_17419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15537__auto____0;
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15537__auto____1;
return cljs$core$async$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___17447,out))
})();
var state__15633__auto__ = (function (){var statearr_17445 = f__15632__auto__.call(null);
(statearr_17445[(6)] = c__15631__auto___17447);

return statearr_17445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___17447,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17465 = arguments.length;
switch (G__17465) {
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
var c__15631__auto___17535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto___17535,out){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto___17535,out){
return (function (state_17507){
var state_val_17508 = (state_17507[(1)]);
if((state_val_17508 === (7))){
var inst_17503 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
var statearr_17509_17536 = state_17507__$1;
(statearr_17509_17536[(2)] = inst_17503);

(statearr_17509_17536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (1))){
var inst_17466 = [];
var inst_17467 = inst_17466;
var inst_17468 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17507__$1 = (function (){var statearr_17510 = state_17507;
(statearr_17510[(7)] = inst_17468);

(statearr_17510[(8)] = inst_17467);

return statearr_17510;
})();
var statearr_17511_17537 = state_17507__$1;
(statearr_17511_17537[(2)] = null);

(statearr_17511_17537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (4))){
var inst_17471 = (state_17507[(9)]);
var inst_17471__$1 = (state_17507[(2)]);
var inst_17472 = (inst_17471__$1 == null);
var inst_17473 = cljs.core.not.call(null,inst_17472);
var state_17507__$1 = (function (){var statearr_17512 = state_17507;
(statearr_17512[(9)] = inst_17471__$1);

return statearr_17512;
})();
if(inst_17473){
var statearr_17513_17538 = state_17507__$1;
(statearr_17513_17538[(1)] = (5));

} else {
var statearr_17514_17539 = state_17507__$1;
(statearr_17514_17539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (15))){
var inst_17497 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
var statearr_17515_17540 = state_17507__$1;
(statearr_17515_17540[(2)] = inst_17497);

(statearr_17515_17540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (13))){
var state_17507__$1 = state_17507;
var statearr_17516_17541 = state_17507__$1;
(statearr_17516_17541[(2)] = null);

(statearr_17516_17541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (6))){
var inst_17467 = (state_17507[(8)]);
var inst_17492 = inst_17467.length;
var inst_17493 = (inst_17492 > (0));
var state_17507__$1 = state_17507;
if(cljs.core.truth_(inst_17493)){
var statearr_17517_17542 = state_17507__$1;
(statearr_17517_17542[(1)] = (12));

} else {
var statearr_17518_17543 = state_17507__$1;
(statearr_17518_17543[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (3))){
var inst_17505 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17507__$1,inst_17505);
} else {
if((state_val_17508 === (12))){
var inst_17467 = (state_17507[(8)]);
var inst_17495 = cljs.core.vec.call(null,inst_17467);
var state_17507__$1 = state_17507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17507__$1,(15),out,inst_17495);
} else {
if((state_val_17508 === (2))){
var state_17507__$1 = state_17507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17507__$1,(4),ch);
} else {
if((state_val_17508 === (11))){
var inst_17471 = (state_17507[(9)]);
var inst_17475 = (state_17507[(10)]);
var inst_17485 = (state_17507[(2)]);
var inst_17486 = [];
var inst_17487 = inst_17486.push(inst_17471);
var inst_17467 = inst_17486;
var inst_17468 = inst_17475;
var state_17507__$1 = (function (){var statearr_17519 = state_17507;
(statearr_17519[(11)] = inst_17487);

(statearr_17519[(12)] = inst_17485);

(statearr_17519[(7)] = inst_17468);

(statearr_17519[(8)] = inst_17467);

return statearr_17519;
})();
var statearr_17520_17544 = state_17507__$1;
(statearr_17520_17544[(2)] = null);

(statearr_17520_17544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (9))){
var inst_17467 = (state_17507[(8)]);
var inst_17483 = cljs.core.vec.call(null,inst_17467);
var state_17507__$1 = state_17507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17507__$1,(11),out,inst_17483);
} else {
if((state_val_17508 === (5))){
var inst_17471 = (state_17507[(9)]);
var inst_17468 = (state_17507[(7)]);
var inst_17475 = (state_17507[(10)]);
var inst_17475__$1 = f.call(null,inst_17471);
var inst_17476 = cljs.core._EQ_.call(null,inst_17475__$1,inst_17468);
var inst_17477 = cljs.core.keyword_identical_QMARK_.call(null,inst_17468,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17478 = ((inst_17476) || (inst_17477));
var state_17507__$1 = (function (){var statearr_17521 = state_17507;
(statearr_17521[(10)] = inst_17475__$1);

return statearr_17521;
})();
if(cljs.core.truth_(inst_17478)){
var statearr_17522_17545 = state_17507__$1;
(statearr_17522_17545[(1)] = (8));

} else {
var statearr_17523_17546 = state_17507__$1;
(statearr_17523_17546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (14))){
var inst_17500 = (state_17507[(2)]);
var inst_17501 = cljs.core.async.close_BANG_.call(null,out);
var state_17507__$1 = (function (){var statearr_17525 = state_17507;
(statearr_17525[(13)] = inst_17500);

return statearr_17525;
})();
var statearr_17526_17547 = state_17507__$1;
(statearr_17526_17547[(2)] = inst_17501);

(statearr_17526_17547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (10))){
var inst_17490 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
var statearr_17527_17548 = state_17507__$1;
(statearr_17527_17548[(2)] = inst_17490);

(statearr_17527_17548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17508 === (8))){
var inst_17471 = (state_17507[(9)]);
var inst_17475 = (state_17507[(10)]);
var inst_17467 = (state_17507[(8)]);
var inst_17480 = inst_17467.push(inst_17471);
var tmp17524 = inst_17467;
var inst_17467__$1 = tmp17524;
var inst_17468 = inst_17475;
var state_17507__$1 = (function (){var statearr_17528 = state_17507;
(statearr_17528[(14)] = inst_17480);

(statearr_17528[(7)] = inst_17468);

(statearr_17528[(8)] = inst_17467__$1);

return statearr_17528;
})();
var statearr_17529_17549 = state_17507__$1;
(statearr_17529_17549[(2)] = null);

(statearr_17529_17549[(1)] = (2));


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
});})(c__15631__auto___17535,out))
;
return ((function (switch__15536__auto__,c__15631__auto___17535,out){
return (function() {
var cljs$core$async$state_machine__15537__auto__ = null;
var cljs$core$async$state_machine__15537__auto____0 = (function (){
var statearr_17530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17530[(0)] = cljs$core$async$state_machine__15537__auto__);

(statearr_17530[(1)] = (1));

return statearr_17530;
});
var cljs$core$async$state_machine__15537__auto____1 = (function (state_17507){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_17507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e17531){if((e17531 instanceof Object)){
var ex__15540__auto__ = e17531;
var statearr_17532_17550 = state_17507;
(statearr_17532_17550[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17551 = state_17507;
state_17507 = G__17551;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
cljs$core$async$state_machine__15537__auto__ = function(state_17507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15537__auto____1.call(this,state_17507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15537__auto____0;
cljs$core$async$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15537__auto____1;
return cljs$core$async$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto___17535,out))
})();
var state__15633__auto__ = (function (){var statearr_17533 = f__15632__auto__.call(null);
(statearr_17533[(6)] = c__15631__auto___17535);

return statearr_17533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto___17535,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
