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
var G__33439 = arguments.length;
switch (G__33439) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33440 = (function (f,blockable,meta33441){
this.f = f;
this.blockable = blockable;
this.meta33441 = meta33441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33442,meta33441__$1){
var self__ = this;
var _33442__$1 = this;
return (new cljs.core.async.t_cljs$core$async33440(self__.f,self__.blockable,meta33441__$1));
});

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33442){
var self__ = this;
var _33442__$1 = this;
return self__.meta33441;
});

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33441","meta33441",-1147889454,null)], null);
});

cljs.core.async.t_cljs$core$async33440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33440";

cljs.core.async.t_cljs$core$async33440.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t_cljs$core$async33440");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33440.
 */
cljs.core.async.__GT_t_cljs$core$async33440 = (function cljs$core$async$__GT_t_cljs$core$async33440(f__$1,blockable__$1,meta33441){
return (new cljs.core.async.t_cljs$core$async33440(f__$1,blockable__$1,meta33441));
});

}

return (new cljs.core.async.t_cljs$core$async33440(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33446 = arguments.length;
switch (G__33446) {
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
var G__33449 = arguments.length;
switch (G__33449) {
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
var G__33452 = arguments.length;
switch (G__33452) {
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
var val_33454 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33454);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33454,ret){
return (function (){
return fn1.call(null,val_33454);
});})(val_33454,ret))
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
var G__33456 = arguments.length;
switch (G__33456) {
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
var n__18884__auto___33458 = n;
var x_33459 = (0);
while(true){
if((x_33459 < n__18884__auto___33458)){
(a[x_33459] = (0));

var G__33460 = (x_33459 + (1));
x_33459 = G__33460;
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

var G__33461 = (i + (1));
i = G__33461;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33462 = (function (flag,meta33463){
this.flag = flag;
this.meta33463 = meta33463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33464,meta33463__$1){
var self__ = this;
var _33464__$1 = this;
return (new cljs.core.async.t_cljs$core$async33462(self__.flag,meta33463__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33464){
var self__ = this;
var _33464__$1 = this;
return self__.meta33463;
});})(flag))
;

cljs.core.async.t_cljs$core$async33462.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33462.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33462.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33463","meta33463",1108536438,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33462";

cljs.core.async.t_cljs$core$async33462.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t_cljs$core$async33462");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33462.
 */
cljs.core.async.__GT_t_cljs$core$async33462 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33462(flag__$1,meta33463){
return (new cljs.core.async.t_cljs$core$async33462(flag__$1,meta33463));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33462(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33465 = (function (flag,cb,meta33466){
this.flag = flag;
this.cb = cb;
this.meta33466 = meta33466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33467,meta33466__$1){
var self__ = this;
var _33467__$1 = this;
return (new cljs.core.async.t_cljs$core$async33465(self__.flag,self__.cb,meta33466__$1));
});

cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33467){
var self__ = this;
var _33467__$1 = this;
return self__.meta33466;
});

cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33466","meta33466",1813354691,null)], null);
});

cljs.core.async.t_cljs$core$async33465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33465";

cljs.core.async.t_cljs$core$async33465.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t_cljs$core$async33465");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33465.
 */
cljs.core.async.__GT_t_cljs$core$async33465 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33465(flag__$1,cb__$1,meta33466){
return (new cljs.core.async.t_cljs$core$async33465(flag__$1,cb__$1,meta33466));
});

}

return (new cljs.core.async.t_cljs$core$async33465(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33468_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33468_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33469_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33469_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17816__auto__ = wport;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33470 = (i + (1));
i = G__33470;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17816__auto__ = ret;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__17801__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17801__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17801__auto__;
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
var args__19135__auto__ = [];
var len__19125__auto___33476 = arguments.length;
var i__19126__auto___33477 = (0);
while(true){
if((i__19126__auto___33477 < len__19125__auto___33476)){
args__19135__auto__.push((arguments[i__19126__auto___33477]));

var G__33478 = (i__19126__auto___33477 + (1));
i__19126__auto___33477 = G__33478;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((1) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19136__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33473){
var map__33474 = p__33473;
var map__33474__$1 = (((((!((map__33474 == null))))?(((((map__33474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33474):map__33474);
var opts = map__33474__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33471){
var G__33472 = cljs.core.first.call(null,seq33471);
var seq33471__$1 = cljs.core.next.call(null,seq33471);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33472,seq33471__$1);
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
var G__33480 = arguments.length;
switch (G__33480) {
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
var c__31515__auto___33526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___33526){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___33526){
return (function (state_33504){
var state_val_33505 = (state_33504[(1)]);
if((state_val_33505 === (7))){
var inst_33500 = (state_33504[(2)]);
var state_33504__$1 = state_33504;
var statearr_33506_33527 = state_33504__$1;
(statearr_33506_33527[(2)] = inst_33500);

(statearr_33506_33527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33505 === (1))){
var state_33504__$1 = state_33504;
var statearr_33507_33528 = state_33504__$1;
(statearr_33507_33528[(2)] = null);

(statearr_33507_33528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33505 === (4))){
var inst_33483 = (state_33504[(7)]);
var inst_33483__$1 = (state_33504[(2)]);
var inst_33484 = (inst_33483__$1 == null);
var state_33504__$1 = (function (){var statearr_33508 = state_33504;
(statearr_33508[(7)] = inst_33483__$1);

return statearr_33508;
})();
if(cljs.core.truth_(inst_33484)){
var statearr_33509_33529 = state_33504__$1;
(statearr_33509_33529[(1)] = (5));

} else {
var statearr_33510_33530 = state_33504__$1;
(statearr_33510_33530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33505 === (13))){
var state_33504__$1 = state_33504;
var statearr_33511_33531 = state_33504__$1;
(statearr_33511_33531[(2)] = null);

(statearr_33511_33531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33505 === (6))){
var inst_33483 = (state_33504[(7)]);
var state_33504__$1 = state_33504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33504__$1,(11),to,inst_33483);
} else {
if((state_val_33505 === (3))){
var inst_33502 = (state_33504[(2)]);
var state_33504__$1 = state_33504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33504__$1,inst_33502);
} else {
if((state_val_33505 === (12))){
var state_33504__$1 = state_33504;
var statearr_33512_33532 = state_33504__$1;
(statearr_33512_33532[(2)] = null);

(statearr_33512_33532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33505 === (2))){
var state_33504__$1 = state_33504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33504__$1,(4),from);
} else {
if((state_val_33505 === (11))){
var inst_33493 = (state_33504[(2)]);
var state_33504__$1 = state_33504;
if(cljs.core.truth_(inst_33493)){
var statearr_33513_33533 = state_33504__$1;
(statearr_33513_33533[(1)] = (12));

} else {
var statearr_33514_33534 = state_33504__$1;
(statearr_33514_33534[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33505 === (9))){
var state_33504__$1 = state_33504;
var statearr_33515_33535 = state_33504__$1;
(statearr_33515_33535[(2)] = null);

(statearr_33515_33535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33505 === (5))){
var state_33504__$1 = state_33504;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33516_33536 = state_33504__$1;
(statearr_33516_33536[(1)] = (8));

} else {
var statearr_33517_33537 = state_33504__$1;
(statearr_33517_33537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33505 === (14))){
var inst_33498 = (state_33504[(2)]);
var state_33504__$1 = state_33504;
var statearr_33518_33538 = state_33504__$1;
(statearr_33518_33538[(2)] = inst_33498);

(statearr_33518_33538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33505 === (10))){
var inst_33490 = (state_33504[(2)]);
var state_33504__$1 = state_33504;
var statearr_33519_33539 = state_33504__$1;
(statearr_33519_33539[(2)] = inst_33490);

(statearr_33519_33539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33505 === (8))){
var inst_33487 = cljs.core.async.close_BANG_.call(null,to);
var state_33504__$1 = state_33504;
var statearr_33520_33540 = state_33504__$1;
(statearr_33520_33540[(2)] = inst_33487);

(statearr_33520_33540[(1)] = (10));


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
});})(c__31515__auto___33526))
;
return ((function (switch__31348__auto__,c__31515__auto___33526){
return (function() {
var cljs$core$async$state_machine__31349__auto__ = null;
var cljs$core$async$state_machine__31349__auto____0 = (function (){
var statearr_33521 = [null,null,null,null,null,null,null,null];
(statearr_33521[(0)] = cljs$core$async$state_machine__31349__auto__);

(statearr_33521[(1)] = (1));

return statearr_33521;
});
var cljs$core$async$state_machine__31349__auto____1 = (function (state_33504){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_33504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e33522){if((e33522 instanceof Object)){
var ex__31352__auto__ = e33522;
var statearr_33523_33541 = state_33504;
(statearr_33523_33541[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33542 = state_33504;
state_33504 = G__33542;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$state_machine__31349__auto__ = function(state_33504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31349__auto____1.call(this,state_33504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31349__auto____0;
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31349__auto____1;
return cljs$core$async$state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___33526))
})();
var state__31517__auto__ = (function (){var statearr_33524 = f__31516__auto__.call(null);
(statearr_33524[(6)] = c__31515__auto___33526);

return statearr_33524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___33526))
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
return (function (p__33543){
var vec__33544 = p__33543;
var v = cljs.core.nth.call(null,vec__33544,(0),null);
var p = cljs.core.nth.call(null,vec__33544,(1),null);
var job = vec__33544;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31515__auto___33715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___33715,res,vec__33544,v,p,job,jobs,results){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___33715,res,vec__33544,v,p,job,jobs,results){
return (function (state_33551){
var state_val_33552 = (state_33551[(1)]);
if((state_val_33552 === (1))){
var state_33551__$1 = state_33551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33551__$1,(2),res,v);
} else {
if((state_val_33552 === (2))){
var inst_33548 = (state_33551[(2)]);
var inst_33549 = cljs.core.async.close_BANG_.call(null,res);
var state_33551__$1 = (function (){var statearr_33553 = state_33551;
(statearr_33553[(7)] = inst_33548);

return statearr_33553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33551__$1,inst_33549);
} else {
return null;
}
}
});})(c__31515__auto___33715,res,vec__33544,v,p,job,jobs,results))
;
return ((function (switch__31348__auto__,c__31515__auto___33715,res,vec__33544,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0 = (function (){
var statearr_33554 = [null,null,null,null,null,null,null,null];
(statearr_33554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__);

(statearr_33554[(1)] = (1));

return statearr_33554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1 = (function (state_33551){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_33551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e33555){if((e33555 instanceof Object)){
var ex__31352__auto__ = e33555;
var statearr_33556_33716 = state_33551;
(statearr_33556_33716[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33717 = state_33551;
state_33551 = G__33717;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__ = function(state_33551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1.call(this,state_33551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___33715,res,vec__33544,v,p,job,jobs,results))
})();
var state__31517__auto__ = (function (){var statearr_33557 = f__31516__auto__.call(null);
(statearr_33557[(6)] = c__31515__auto___33715);

return statearr_33557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___33715,res,vec__33544,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33558){
var vec__33559 = p__33558;
var v = cljs.core.nth.call(null,vec__33559,(0),null);
var p = cljs.core.nth.call(null,vec__33559,(1),null);
var job = vec__33559;
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
var n__18884__auto___33718 = n;
var __33719 = (0);
while(true){
if((__33719 < n__18884__auto___33718)){
var G__33562_33720 = type;
var G__33562_33721__$1 = (((G__33562_33720 instanceof cljs.core.Keyword))?G__33562_33720.fqn:null);
switch (G__33562_33721__$1) {
case "compute":
var c__31515__auto___33723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33719,c__31515__auto___33723,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (__33719,c__31515__auto___33723,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async){
return (function (state_33575){
var state_val_33576 = (state_33575[(1)]);
if((state_val_33576 === (1))){
var state_33575__$1 = state_33575;
var statearr_33577_33724 = state_33575__$1;
(statearr_33577_33724[(2)] = null);

(statearr_33577_33724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33576 === (2))){
var state_33575__$1 = state_33575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33575__$1,(4),jobs);
} else {
if((state_val_33576 === (3))){
var inst_33573 = (state_33575[(2)]);
var state_33575__$1 = state_33575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33575__$1,inst_33573);
} else {
if((state_val_33576 === (4))){
var inst_33565 = (state_33575[(2)]);
var inst_33566 = process.call(null,inst_33565);
var state_33575__$1 = state_33575;
if(cljs.core.truth_(inst_33566)){
var statearr_33578_33725 = state_33575__$1;
(statearr_33578_33725[(1)] = (5));

} else {
var statearr_33579_33726 = state_33575__$1;
(statearr_33579_33726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33576 === (5))){
var state_33575__$1 = state_33575;
var statearr_33580_33727 = state_33575__$1;
(statearr_33580_33727[(2)] = null);

(statearr_33580_33727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33576 === (6))){
var state_33575__$1 = state_33575;
var statearr_33581_33728 = state_33575__$1;
(statearr_33581_33728[(2)] = null);

(statearr_33581_33728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33576 === (7))){
var inst_33571 = (state_33575[(2)]);
var state_33575__$1 = state_33575;
var statearr_33582_33729 = state_33575__$1;
(statearr_33582_33729[(2)] = inst_33571);

(statearr_33582_33729[(1)] = (3));


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
});})(__33719,c__31515__auto___33723,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async))
;
return ((function (__33719,switch__31348__auto__,c__31515__auto___33723,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0 = (function (){
var statearr_33583 = [null,null,null,null,null,null,null];
(statearr_33583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__);

(statearr_33583[(1)] = (1));

return statearr_33583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1 = (function (state_33575){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_33575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e33584){if((e33584 instanceof Object)){
var ex__31352__auto__ = e33584;
var statearr_33585_33730 = state_33575;
(statearr_33585_33730[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33731 = state_33575;
state_33575 = G__33731;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__ = function(state_33575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1.call(this,state_33575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__;
})()
;})(__33719,switch__31348__auto__,c__31515__auto___33723,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async))
})();
var state__31517__auto__ = (function (){var statearr_33586 = f__31516__auto__.call(null);
(statearr_33586[(6)] = c__31515__auto___33723);

return statearr_33586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(__33719,c__31515__auto___33723,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async))
);


break;
case "async":
var c__31515__auto___33732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33719,c__31515__auto___33732,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (__33719,c__31515__auto___33732,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async){
return (function (state_33599){
var state_val_33600 = (state_33599[(1)]);
if((state_val_33600 === (1))){
var state_33599__$1 = state_33599;
var statearr_33601_33733 = state_33599__$1;
(statearr_33601_33733[(2)] = null);

(statearr_33601_33733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (2))){
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33599__$1,(4),jobs);
} else {
if((state_val_33600 === (3))){
var inst_33597 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33599__$1,inst_33597);
} else {
if((state_val_33600 === (4))){
var inst_33589 = (state_33599[(2)]);
var inst_33590 = async.call(null,inst_33589);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33590)){
var statearr_33602_33734 = state_33599__$1;
(statearr_33602_33734[(1)] = (5));

} else {
var statearr_33603_33735 = state_33599__$1;
(statearr_33603_33735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (5))){
var state_33599__$1 = state_33599;
var statearr_33604_33736 = state_33599__$1;
(statearr_33604_33736[(2)] = null);

(statearr_33604_33736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (6))){
var state_33599__$1 = state_33599;
var statearr_33605_33737 = state_33599__$1;
(statearr_33605_33737[(2)] = null);

(statearr_33605_33737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (7))){
var inst_33595 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33606_33738 = state_33599__$1;
(statearr_33606_33738[(2)] = inst_33595);

(statearr_33606_33738[(1)] = (3));


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
});})(__33719,c__31515__auto___33732,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async))
;
return ((function (__33719,switch__31348__auto__,c__31515__auto___33732,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0 = (function (){
var statearr_33607 = [null,null,null,null,null,null,null];
(statearr_33607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__);

(statearr_33607[(1)] = (1));

return statearr_33607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1 = (function (state_33599){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_33599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e33608){if((e33608 instanceof Object)){
var ex__31352__auto__ = e33608;
var statearr_33609_33739 = state_33599;
(statearr_33609_33739[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33740 = state_33599;
state_33599 = G__33740;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__ = function(state_33599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1.call(this,state_33599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__;
})()
;})(__33719,switch__31348__auto__,c__31515__auto___33732,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async))
})();
var state__31517__auto__ = (function (){var statearr_33610 = f__31516__auto__.call(null);
(statearr_33610[(6)] = c__31515__auto___33732);

return statearr_33610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(__33719,c__31515__auto___33732,G__33562_33720,G__33562_33721__$1,n__18884__auto___33718,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33562_33721__$1)].join('')));

}

var G__33741 = (__33719 + (1));
__33719 = G__33741;
continue;
} else {
}
break;
}

var c__31515__auto___33742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___33742,jobs,results,process,async){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___33742,jobs,results,process,async){
return (function (state_33632){
var state_val_33633 = (state_33632[(1)]);
if((state_val_33633 === (7))){
var inst_33628 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
var statearr_33634_33743 = state_33632__$1;
(statearr_33634_33743[(2)] = inst_33628);

(statearr_33634_33743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (1))){
var state_33632__$1 = state_33632;
var statearr_33635_33744 = state_33632__$1;
(statearr_33635_33744[(2)] = null);

(statearr_33635_33744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (4))){
var inst_33613 = (state_33632[(7)]);
var inst_33613__$1 = (state_33632[(2)]);
var inst_33614 = (inst_33613__$1 == null);
var state_33632__$1 = (function (){var statearr_33636 = state_33632;
(statearr_33636[(7)] = inst_33613__$1);

return statearr_33636;
})();
if(cljs.core.truth_(inst_33614)){
var statearr_33637_33745 = state_33632__$1;
(statearr_33637_33745[(1)] = (5));

} else {
var statearr_33638_33746 = state_33632__$1;
(statearr_33638_33746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (6))){
var inst_33618 = (state_33632[(8)]);
var inst_33613 = (state_33632[(7)]);
var inst_33618__$1 = cljs.core.async.chan.call(null,(1));
var inst_33619 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33620 = [inst_33613,inst_33618__$1];
var inst_33621 = (new cljs.core.PersistentVector(null,2,(5),inst_33619,inst_33620,null));
var state_33632__$1 = (function (){var statearr_33639 = state_33632;
(statearr_33639[(8)] = inst_33618__$1);

return statearr_33639;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33632__$1,(8),jobs,inst_33621);
} else {
if((state_val_33633 === (3))){
var inst_33630 = (state_33632[(2)]);
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33632__$1,inst_33630);
} else {
if((state_val_33633 === (2))){
var state_33632__$1 = state_33632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33632__$1,(4),from);
} else {
if((state_val_33633 === (9))){
var inst_33625 = (state_33632[(2)]);
var state_33632__$1 = (function (){var statearr_33640 = state_33632;
(statearr_33640[(9)] = inst_33625);

return statearr_33640;
})();
var statearr_33641_33747 = state_33632__$1;
(statearr_33641_33747[(2)] = null);

(statearr_33641_33747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (5))){
var inst_33616 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33632__$1 = state_33632;
var statearr_33642_33748 = state_33632__$1;
(statearr_33642_33748[(2)] = inst_33616);

(statearr_33642_33748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33633 === (8))){
var inst_33618 = (state_33632[(8)]);
var inst_33623 = (state_33632[(2)]);
var state_33632__$1 = (function (){var statearr_33643 = state_33632;
(statearr_33643[(10)] = inst_33623);

return statearr_33643;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33632__$1,(9),results,inst_33618);
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
});})(c__31515__auto___33742,jobs,results,process,async))
;
return ((function (switch__31348__auto__,c__31515__auto___33742,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0 = (function (){
var statearr_33644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__);

(statearr_33644[(1)] = (1));

return statearr_33644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1 = (function (state_33632){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_33632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e33645){if((e33645 instanceof Object)){
var ex__31352__auto__ = e33645;
var statearr_33646_33749 = state_33632;
(statearr_33646_33749[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33750 = state_33632;
state_33632 = G__33750;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__ = function(state_33632){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1.call(this,state_33632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___33742,jobs,results,process,async))
})();
var state__31517__auto__ = (function (){var statearr_33647 = f__31516__auto__.call(null);
(statearr_33647[(6)] = c__31515__auto___33742);

return statearr_33647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___33742,jobs,results,process,async))
);


var c__31515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto__,jobs,results,process,async){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto__,jobs,results,process,async){
return (function (state_33685){
var state_val_33686 = (state_33685[(1)]);
if((state_val_33686 === (7))){
var inst_33681 = (state_33685[(2)]);
var state_33685__$1 = state_33685;
var statearr_33687_33751 = state_33685__$1;
(statearr_33687_33751[(2)] = inst_33681);

(statearr_33687_33751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (20))){
var state_33685__$1 = state_33685;
var statearr_33688_33752 = state_33685__$1;
(statearr_33688_33752[(2)] = null);

(statearr_33688_33752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (1))){
var state_33685__$1 = state_33685;
var statearr_33689_33753 = state_33685__$1;
(statearr_33689_33753[(2)] = null);

(statearr_33689_33753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (4))){
var inst_33650 = (state_33685[(7)]);
var inst_33650__$1 = (state_33685[(2)]);
var inst_33651 = (inst_33650__$1 == null);
var state_33685__$1 = (function (){var statearr_33690 = state_33685;
(statearr_33690[(7)] = inst_33650__$1);

return statearr_33690;
})();
if(cljs.core.truth_(inst_33651)){
var statearr_33691_33754 = state_33685__$1;
(statearr_33691_33754[(1)] = (5));

} else {
var statearr_33692_33755 = state_33685__$1;
(statearr_33692_33755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (15))){
var inst_33663 = (state_33685[(8)]);
var state_33685__$1 = state_33685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33685__$1,(18),to,inst_33663);
} else {
if((state_val_33686 === (21))){
var inst_33676 = (state_33685[(2)]);
var state_33685__$1 = state_33685;
var statearr_33693_33756 = state_33685__$1;
(statearr_33693_33756[(2)] = inst_33676);

(statearr_33693_33756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (13))){
var inst_33678 = (state_33685[(2)]);
var state_33685__$1 = (function (){var statearr_33694 = state_33685;
(statearr_33694[(9)] = inst_33678);

return statearr_33694;
})();
var statearr_33695_33757 = state_33685__$1;
(statearr_33695_33757[(2)] = null);

(statearr_33695_33757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (6))){
var inst_33650 = (state_33685[(7)]);
var state_33685__$1 = state_33685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33685__$1,(11),inst_33650);
} else {
if((state_val_33686 === (17))){
var inst_33671 = (state_33685[(2)]);
var state_33685__$1 = state_33685;
if(cljs.core.truth_(inst_33671)){
var statearr_33696_33758 = state_33685__$1;
(statearr_33696_33758[(1)] = (19));

} else {
var statearr_33697_33759 = state_33685__$1;
(statearr_33697_33759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (3))){
var inst_33683 = (state_33685[(2)]);
var state_33685__$1 = state_33685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33685__$1,inst_33683);
} else {
if((state_val_33686 === (12))){
var inst_33660 = (state_33685[(10)]);
var state_33685__$1 = state_33685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33685__$1,(14),inst_33660);
} else {
if((state_val_33686 === (2))){
var state_33685__$1 = state_33685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33685__$1,(4),results);
} else {
if((state_val_33686 === (19))){
var state_33685__$1 = state_33685;
var statearr_33698_33760 = state_33685__$1;
(statearr_33698_33760[(2)] = null);

(statearr_33698_33760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (11))){
var inst_33660 = (state_33685[(2)]);
var state_33685__$1 = (function (){var statearr_33699 = state_33685;
(statearr_33699[(10)] = inst_33660);

return statearr_33699;
})();
var statearr_33700_33761 = state_33685__$1;
(statearr_33700_33761[(2)] = null);

(statearr_33700_33761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (9))){
var state_33685__$1 = state_33685;
var statearr_33701_33762 = state_33685__$1;
(statearr_33701_33762[(2)] = null);

(statearr_33701_33762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (5))){
var state_33685__$1 = state_33685;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33702_33763 = state_33685__$1;
(statearr_33702_33763[(1)] = (8));

} else {
var statearr_33703_33764 = state_33685__$1;
(statearr_33703_33764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (14))){
var inst_33663 = (state_33685[(8)]);
var inst_33665 = (state_33685[(11)]);
var inst_33663__$1 = (state_33685[(2)]);
var inst_33664 = (inst_33663__$1 == null);
var inst_33665__$1 = cljs.core.not.call(null,inst_33664);
var state_33685__$1 = (function (){var statearr_33704 = state_33685;
(statearr_33704[(8)] = inst_33663__$1);

(statearr_33704[(11)] = inst_33665__$1);

return statearr_33704;
})();
if(inst_33665__$1){
var statearr_33705_33765 = state_33685__$1;
(statearr_33705_33765[(1)] = (15));

} else {
var statearr_33706_33766 = state_33685__$1;
(statearr_33706_33766[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (16))){
var inst_33665 = (state_33685[(11)]);
var state_33685__$1 = state_33685;
var statearr_33707_33767 = state_33685__$1;
(statearr_33707_33767[(2)] = inst_33665);

(statearr_33707_33767[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (10))){
var inst_33657 = (state_33685[(2)]);
var state_33685__$1 = state_33685;
var statearr_33708_33768 = state_33685__$1;
(statearr_33708_33768[(2)] = inst_33657);

(statearr_33708_33768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (18))){
var inst_33668 = (state_33685[(2)]);
var state_33685__$1 = state_33685;
var statearr_33709_33769 = state_33685__$1;
(statearr_33709_33769[(2)] = inst_33668);

(statearr_33709_33769[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (8))){
var inst_33654 = cljs.core.async.close_BANG_.call(null,to);
var state_33685__$1 = state_33685;
var statearr_33710_33770 = state_33685__$1;
(statearr_33710_33770[(2)] = inst_33654);

(statearr_33710_33770[(1)] = (10));


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
});})(c__31515__auto__,jobs,results,process,async))
;
return ((function (switch__31348__auto__,c__31515__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0 = (function (){
var statearr_33711 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__);

(statearr_33711[(1)] = (1));

return statearr_33711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1 = (function (state_33685){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_33685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e33712){if((e33712 instanceof Object)){
var ex__31352__auto__ = e33712;
var statearr_33713_33771 = state_33685;
(statearr_33713_33771[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33772 = state_33685;
state_33685 = G__33772;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__ = function(state_33685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1.call(this,state_33685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto__,jobs,results,process,async))
})();
var state__31517__auto__ = (function (){var statearr_33714 = f__31516__auto__.call(null);
(statearr_33714[(6)] = c__31515__auto__);

return statearr_33714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto__,jobs,results,process,async))
);

return c__31515__auto__;
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
var G__33774 = arguments.length;
switch (G__33774) {
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
var G__33777 = arguments.length;
switch (G__33777) {
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
var G__33780 = arguments.length;
switch (G__33780) {
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
var c__31515__auto___33829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___33829,tc,fc){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___33829,tc,fc){
return (function (state_33806){
var state_val_33807 = (state_33806[(1)]);
if((state_val_33807 === (7))){
var inst_33802 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
var statearr_33808_33830 = state_33806__$1;
(statearr_33808_33830[(2)] = inst_33802);

(statearr_33808_33830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (1))){
var state_33806__$1 = state_33806;
var statearr_33809_33831 = state_33806__$1;
(statearr_33809_33831[(2)] = null);

(statearr_33809_33831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (4))){
var inst_33783 = (state_33806[(7)]);
var inst_33783__$1 = (state_33806[(2)]);
var inst_33784 = (inst_33783__$1 == null);
var state_33806__$1 = (function (){var statearr_33810 = state_33806;
(statearr_33810[(7)] = inst_33783__$1);

return statearr_33810;
})();
if(cljs.core.truth_(inst_33784)){
var statearr_33811_33832 = state_33806__$1;
(statearr_33811_33832[(1)] = (5));

} else {
var statearr_33812_33833 = state_33806__$1;
(statearr_33812_33833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (13))){
var state_33806__$1 = state_33806;
var statearr_33813_33834 = state_33806__$1;
(statearr_33813_33834[(2)] = null);

(statearr_33813_33834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (6))){
var inst_33783 = (state_33806[(7)]);
var inst_33789 = p.call(null,inst_33783);
var state_33806__$1 = state_33806;
if(cljs.core.truth_(inst_33789)){
var statearr_33814_33835 = state_33806__$1;
(statearr_33814_33835[(1)] = (9));

} else {
var statearr_33815_33836 = state_33806__$1;
(statearr_33815_33836[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (3))){
var inst_33804 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33806__$1,inst_33804);
} else {
if((state_val_33807 === (12))){
var state_33806__$1 = state_33806;
var statearr_33816_33837 = state_33806__$1;
(statearr_33816_33837[(2)] = null);

(statearr_33816_33837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (2))){
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33806__$1,(4),ch);
} else {
if((state_val_33807 === (11))){
var inst_33783 = (state_33806[(7)]);
var inst_33793 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33806__$1,(8),inst_33793,inst_33783);
} else {
if((state_val_33807 === (9))){
var state_33806__$1 = state_33806;
var statearr_33817_33838 = state_33806__$1;
(statearr_33817_33838[(2)] = tc);

(statearr_33817_33838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (5))){
var inst_33786 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33787 = cljs.core.async.close_BANG_.call(null,fc);
var state_33806__$1 = (function (){var statearr_33818 = state_33806;
(statearr_33818[(8)] = inst_33786);

return statearr_33818;
})();
var statearr_33819_33839 = state_33806__$1;
(statearr_33819_33839[(2)] = inst_33787);

(statearr_33819_33839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (14))){
var inst_33800 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
var statearr_33820_33840 = state_33806__$1;
(statearr_33820_33840[(2)] = inst_33800);

(statearr_33820_33840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (10))){
var state_33806__$1 = state_33806;
var statearr_33821_33841 = state_33806__$1;
(statearr_33821_33841[(2)] = fc);

(statearr_33821_33841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (8))){
var inst_33795 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
if(cljs.core.truth_(inst_33795)){
var statearr_33822_33842 = state_33806__$1;
(statearr_33822_33842[(1)] = (12));

} else {
var statearr_33823_33843 = state_33806__$1;
(statearr_33823_33843[(1)] = (13));

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
});})(c__31515__auto___33829,tc,fc))
;
return ((function (switch__31348__auto__,c__31515__auto___33829,tc,fc){
return (function() {
var cljs$core$async$state_machine__31349__auto__ = null;
var cljs$core$async$state_machine__31349__auto____0 = (function (){
var statearr_33824 = [null,null,null,null,null,null,null,null,null];
(statearr_33824[(0)] = cljs$core$async$state_machine__31349__auto__);

(statearr_33824[(1)] = (1));

return statearr_33824;
});
var cljs$core$async$state_machine__31349__auto____1 = (function (state_33806){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_33806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e33825){if((e33825 instanceof Object)){
var ex__31352__auto__ = e33825;
var statearr_33826_33844 = state_33806;
(statearr_33826_33844[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33845 = state_33806;
state_33806 = G__33845;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$state_machine__31349__auto__ = function(state_33806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31349__auto____1.call(this,state_33806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31349__auto____0;
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31349__auto____1;
return cljs$core$async$state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___33829,tc,fc))
})();
var state__31517__auto__ = (function (){var statearr_33827 = f__31516__auto__.call(null);
(statearr_33827[(6)] = c__31515__auto___33829);

return statearr_33827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___33829,tc,fc))
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
var c__31515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto__){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto__){
return (function (state_33866){
var state_val_33867 = (state_33866[(1)]);
if((state_val_33867 === (7))){
var inst_33862 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33868_33886 = state_33866__$1;
(statearr_33868_33886[(2)] = inst_33862);

(statearr_33868_33886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (1))){
var inst_33846 = init;
var state_33866__$1 = (function (){var statearr_33869 = state_33866;
(statearr_33869[(7)] = inst_33846);

return statearr_33869;
})();
var statearr_33870_33887 = state_33866__$1;
(statearr_33870_33887[(2)] = null);

(statearr_33870_33887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (4))){
var inst_33849 = (state_33866[(8)]);
var inst_33849__$1 = (state_33866[(2)]);
var inst_33850 = (inst_33849__$1 == null);
var state_33866__$1 = (function (){var statearr_33871 = state_33866;
(statearr_33871[(8)] = inst_33849__$1);

return statearr_33871;
})();
if(cljs.core.truth_(inst_33850)){
var statearr_33872_33888 = state_33866__$1;
(statearr_33872_33888[(1)] = (5));

} else {
var statearr_33873_33889 = state_33866__$1;
(statearr_33873_33889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (6))){
var inst_33853 = (state_33866[(9)]);
var inst_33846 = (state_33866[(7)]);
var inst_33849 = (state_33866[(8)]);
var inst_33853__$1 = f.call(null,inst_33846,inst_33849);
var inst_33854 = cljs.core.reduced_QMARK_.call(null,inst_33853__$1);
var state_33866__$1 = (function (){var statearr_33874 = state_33866;
(statearr_33874[(9)] = inst_33853__$1);

return statearr_33874;
})();
if(inst_33854){
var statearr_33875_33890 = state_33866__$1;
(statearr_33875_33890[(1)] = (8));

} else {
var statearr_33876_33891 = state_33866__$1;
(statearr_33876_33891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (3))){
var inst_33864 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33866__$1,inst_33864);
} else {
if((state_val_33867 === (2))){
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33866__$1,(4),ch);
} else {
if((state_val_33867 === (9))){
var inst_33853 = (state_33866[(9)]);
var inst_33846 = inst_33853;
var state_33866__$1 = (function (){var statearr_33877 = state_33866;
(statearr_33877[(7)] = inst_33846);

return statearr_33877;
})();
var statearr_33878_33892 = state_33866__$1;
(statearr_33878_33892[(2)] = null);

(statearr_33878_33892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (5))){
var inst_33846 = (state_33866[(7)]);
var state_33866__$1 = state_33866;
var statearr_33879_33893 = state_33866__$1;
(statearr_33879_33893[(2)] = inst_33846);

(statearr_33879_33893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (10))){
var inst_33860 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33880_33894 = state_33866__$1;
(statearr_33880_33894[(2)] = inst_33860);

(statearr_33880_33894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (8))){
var inst_33853 = (state_33866[(9)]);
var inst_33856 = cljs.core.deref.call(null,inst_33853);
var state_33866__$1 = state_33866;
var statearr_33881_33895 = state_33866__$1;
(statearr_33881_33895[(2)] = inst_33856);

(statearr_33881_33895[(1)] = (10));


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
});})(c__31515__auto__))
;
return ((function (switch__31348__auto__,c__31515__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31349__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31349__auto____0 = (function (){
var statearr_33882 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33882[(0)] = cljs$core$async$reduce_$_state_machine__31349__auto__);

(statearr_33882[(1)] = (1));

return statearr_33882;
});
var cljs$core$async$reduce_$_state_machine__31349__auto____1 = (function (state_33866){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_33866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e33883){if((e33883 instanceof Object)){
var ex__31352__auto__ = e33883;
var statearr_33884_33896 = state_33866;
(statearr_33884_33896[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33897 = state_33866;
state_33866 = G__33897;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31349__auto__ = function(state_33866){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31349__auto____1.call(this,state_33866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31349__auto____0;
cljs$core$async$reduce_$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31349__auto____1;
return cljs$core$async$reduce_$_state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto__))
})();
var state__31517__auto__ = (function (){var statearr_33885 = f__31516__auto__.call(null);
(statearr_33885[(6)] = c__31515__auto__);

return statearr_33885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto__))
);

return c__31515__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto__,f__$1){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto__,f__$1){
return (function (state_33903){
var state_val_33904 = (state_33903[(1)]);
if((state_val_33904 === (1))){
var inst_33898 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33903__$1 = state_33903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33903__$1,(2),inst_33898);
} else {
if((state_val_33904 === (2))){
var inst_33900 = (state_33903[(2)]);
var inst_33901 = f__$1.call(null,inst_33900);
var state_33903__$1 = state_33903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33903__$1,inst_33901);
} else {
return null;
}
}
});})(c__31515__auto__,f__$1))
;
return ((function (switch__31348__auto__,c__31515__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31349__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31349__auto____0 = (function (){
var statearr_33905 = [null,null,null,null,null,null,null];
(statearr_33905[(0)] = cljs$core$async$transduce_$_state_machine__31349__auto__);

(statearr_33905[(1)] = (1));

return statearr_33905;
});
var cljs$core$async$transduce_$_state_machine__31349__auto____1 = (function (state_33903){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_33903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e33906){if((e33906 instanceof Object)){
var ex__31352__auto__ = e33906;
var statearr_33907_33909 = state_33903;
(statearr_33907_33909[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33910 = state_33903;
state_33903 = G__33910;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31349__auto__ = function(state_33903){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31349__auto____1.call(this,state_33903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31349__auto____0;
cljs$core$async$transduce_$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31349__auto____1;
return cljs$core$async$transduce_$_state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto__,f__$1))
})();
var state__31517__auto__ = (function (){var statearr_33908 = f__31516__auto__.call(null);
(statearr_33908[(6)] = c__31515__auto__);

return statearr_33908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto__,f__$1))
);

return c__31515__auto__;
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
var G__33912 = arguments.length;
switch (G__33912) {
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
var c__31515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto__){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto__){
return (function (state_33937){
var state_val_33938 = (state_33937[(1)]);
if((state_val_33938 === (7))){
var inst_33919 = (state_33937[(2)]);
var state_33937__$1 = state_33937;
var statearr_33939_33960 = state_33937__$1;
(statearr_33939_33960[(2)] = inst_33919);

(statearr_33939_33960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (1))){
var inst_33913 = cljs.core.seq.call(null,coll);
var inst_33914 = inst_33913;
var state_33937__$1 = (function (){var statearr_33940 = state_33937;
(statearr_33940[(7)] = inst_33914);

return statearr_33940;
})();
var statearr_33941_33961 = state_33937__$1;
(statearr_33941_33961[(2)] = null);

(statearr_33941_33961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (4))){
var inst_33914 = (state_33937[(7)]);
var inst_33917 = cljs.core.first.call(null,inst_33914);
var state_33937__$1 = state_33937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33937__$1,(7),ch,inst_33917);
} else {
if((state_val_33938 === (13))){
var inst_33931 = (state_33937[(2)]);
var state_33937__$1 = state_33937;
var statearr_33942_33962 = state_33937__$1;
(statearr_33942_33962[(2)] = inst_33931);

(statearr_33942_33962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (6))){
var inst_33922 = (state_33937[(2)]);
var state_33937__$1 = state_33937;
if(cljs.core.truth_(inst_33922)){
var statearr_33943_33963 = state_33937__$1;
(statearr_33943_33963[(1)] = (8));

} else {
var statearr_33944_33964 = state_33937__$1;
(statearr_33944_33964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (3))){
var inst_33935 = (state_33937[(2)]);
var state_33937__$1 = state_33937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33937__$1,inst_33935);
} else {
if((state_val_33938 === (12))){
var state_33937__$1 = state_33937;
var statearr_33945_33965 = state_33937__$1;
(statearr_33945_33965[(2)] = null);

(statearr_33945_33965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (2))){
var inst_33914 = (state_33937[(7)]);
var state_33937__$1 = state_33937;
if(cljs.core.truth_(inst_33914)){
var statearr_33946_33966 = state_33937__$1;
(statearr_33946_33966[(1)] = (4));

} else {
var statearr_33947_33967 = state_33937__$1;
(statearr_33947_33967[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (11))){
var inst_33928 = cljs.core.async.close_BANG_.call(null,ch);
var state_33937__$1 = state_33937;
var statearr_33948_33968 = state_33937__$1;
(statearr_33948_33968[(2)] = inst_33928);

(statearr_33948_33968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (9))){
var state_33937__$1 = state_33937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33949_33969 = state_33937__$1;
(statearr_33949_33969[(1)] = (11));

} else {
var statearr_33950_33970 = state_33937__$1;
(statearr_33950_33970[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (5))){
var inst_33914 = (state_33937[(7)]);
var state_33937__$1 = state_33937;
var statearr_33951_33971 = state_33937__$1;
(statearr_33951_33971[(2)] = inst_33914);

(statearr_33951_33971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (10))){
var inst_33933 = (state_33937[(2)]);
var state_33937__$1 = state_33937;
var statearr_33952_33972 = state_33937__$1;
(statearr_33952_33972[(2)] = inst_33933);

(statearr_33952_33972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (8))){
var inst_33914 = (state_33937[(7)]);
var inst_33924 = cljs.core.next.call(null,inst_33914);
var inst_33914__$1 = inst_33924;
var state_33937__$1 = (function (){var statearr_33953 = state_33937;
(statearr_33953[(7)] = inst_33914__$1);

return statearr_33953;
})();
var statearr_33954_33973 = state_33937__$1;
(statearr_33954_33973[(2)] = null);

(statearr_33954_33973[(1)] = (2));


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
});})(c__31515__auto__))
;
return ((function (switch__31348__auto__,c__31515__auto__){
return (function() {
var cljs$core$async$state_machine__31349__auto__ = null;
var cljs$core$async$state_machine__31349__auto____0 = (function (){
var statearr_33955 = [null,null,null,null,null,null,null,null];
(statearr_33955[(0)] = cljs$core$async$state_machine__31349__auto__);

(statearr_33955[(1)] = (1));

return statearr_33955;
});
var cljs$core$async$state_machine__31349__auto____1 = (function (state_33937){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_33937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e33956){if((e33956 instanceof Object)){
var ex__31352__auto__ = e33956;
var statearr_33957_33974 = state_33937;
(statearr_33957_33974[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33975 = state_33937;
state_33937 = G__33975;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$state_machine__31349__auto__ = function(state_33937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31349__auto____1.call(this,state_33937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31349__auto____0;
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31349__auto____1;
return cljs$core$async$state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto__))
})();
var state__31517__auto__ = (function (){var statearr_33958 = f__31516__auto__.call(null);
(statearr_33958[(6)] = c__31515__auto__);

return statearr_33958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto__))
);

return c__31515__auto__;
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
var x__18564__auto__ = (((_ == null))?null:_);
var m__18565__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,_);
} else {
var m__18562__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,_);
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
var x__18564__auto__ = (((m == null))?null:m);
var m__18565__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18562__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,m,ch,close_QMARK_);
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
var x__18564__auto__ = (((m == null))?null:m);
var m__18565__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,m,ch);
} else {
var m__18562__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,m,ch);
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
var x__18564__auto__ = (((m == null))?null:m);
var m__18565__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,m);
} else {
var m__18562__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33976 = (function (ch,cs,meta33977){
this.ch = ch;
this.cs = cs;
this.meta33977 = meta33977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33978,meta33977__$1){
var self__ = this;
var _33978__$1 = this;
return (new cljs.core.async.t_cljs$core$async33976(self__.ch,self__.cs,meta33977__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33978){
var self__ = this;
var _33978__$1 = this;
return self__.meta33977;
});})(cs))
;

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33976.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33976.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33977","meta33977",1805492629,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33976";

cljs.core.async.t_cljs$core$async33976.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t_cljs$core$async33976");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33976.
 */
cljs.core.async.__GT_t_cljs$core$async33976 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33976(ch__$1,cs__$1,meta33977){
return (new cljs.core.async.t_cljs$core$async33976(ch__$1,cs__$1,meta33977));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33976(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31515__auto___34198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___34198,cs,m,dchan,dctr,done){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___34198,cs,m,dchan,dctr,done){
return (function (state_34113){
var state_val_34114 = (state_34113[(1)]);
if((state_val_34114 === (7))){
var inst_34109 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
var statearr_34115_34199 = state_34113__$1;
(statearr_34115_34199[(2)] = inst_34109);

(statearr_34115_34199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (20))){
var inst_34012 = (state_34113[(7)]);
var inst_34024 = cljs.core.first.call(null,inst_34012);
var inst_34025 = cljs.core.nth.call(null,inst_34024,(0),null);
var inst_34026 = cljs.core.nth.call(null,inst_34024,(1),null);
var state_34113__$1 = (function (){var statearr_34116 = state_34113;
(statearr_34116[(8)] = inst_34025);

return statearr_34116;
})();
if(cljs.core.truth_(inst_34026)){
var statearr_34117_34200 = state_34113__$1;
(statearr_34117_34200[(1)] = (22));

} else {
var statearr_34118_34201 = state_34113__$1;
(statearr_34118_34201[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (27))){
var inst_33981 = (state_34113[(9)]);
var inst_34061 = (state_34113[(10)]);
var inst_34054 = (state_34113[(11)]);
var inst_34056 = (state_34113[(12)]);
var inst_34061__$1 = cljs.core._nth.call(null,inst_34054,inst_34056);
var inst_34062 = cljs.core.async.put_BANG_.call(null,inst_34061__$1,inst_33981,done);
var state_34113__$1 = (function (){var statearr_34119 = state_34113;
(statearr_34119[(10)] = inst_34061__$1);

return statearr_34119;
})();
if(cljs.core.truth_(inst_34062)){
var statearr_34120_34202 = state_34113__$1;
(statearr_34120_34202[(1)] = (30));

} else {
var statearr_34121_34203 = state_34113__$1;
(statearr_34121_34203[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (1))){
var state_34113__$1 = state_34113;
var statearr_34122_34204 = state_34113__$1;
(statearr_34122_34204[(2)] = null);

(statearr_34122_34204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (24))){
var inst_34012 = (state_34113[(7)]);
var inst_34031 = (state_34113[(2)]);
var inst_34032 = cljs.core.next.call(null,inst_34012);
var inst_33990 = inst_34032;
var inst_33991 = null;
var inst_33992 = (0);
var inst_33993 = (0);
var state_34113__$1 = (function (){var statearr_34123 = state_34113;
(statearr_34123[(13)] = inst_33990);

(statearr_34123[(14)] = inst_33991);

(statearr_34123[(15)] = inst_33993);

(statearr_34123[(16)] = inst_33992);

(statearr_34123[(17)] = inst_34031);

return statearr_34123;
})();
var statearr_34124_34205 = state_34113__$1;
(statearr_34124_34205[(2)] = null);

(statearr_34124_34205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (39))){
var state_34113__$1 = state_34113;
var statearr_34128_34206 = state_34113__$1;
(statearr_34128_34206[(2)] = null);

(statearr_34128_34206[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (4))){
var inst_33981 = (state_34113[(9)]);
var inst_33981__$1 = (state_34113[(2)]);
var inst_33982 = (inst_33981__$1 == null);
var state_34113__$1 = (function (){var statearr_34129 = state_34113;
(statearr_34129[(9)] = inst_33981__$1);

return statearr_34129;
})();
if(cljs.core.truth_(inst_33982)){
var statearr_34130_34207 = state_34113__$1;
(statearr_34130_34207[(1)] = (5));

} else {
var statearr_34131_34208 = state_34113__$1;
(statearr_34131_34208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (15))){
var inst_33990 = (state_34113[(13)]);
var inst_33991 = (state_34113[(14)]);
var inst_33993 = (state_34113[(15)]);
var inst_33992 = (state_34113[(16)]);
var inst_34008 = (state_34113[(2)]);
var inst_34009 = (inst_33993 + (1));
var tmp34125 = inst_33990;
var tmp34126 = inst_33991;
var tmp34127 = inst_33992;
var inst_33990__$1 = tmp34125;
var inst_33991__$1 = tmp34126;
var inst_33992__$1 = tmp34127;
var inst_33993__$1 = inst_34009;
var state_34113__$1 = (function (){var statearr_34132 = state_34113;
(statearr_34132[(13)] = inst_33990__$1);

(statearr_34132[(14)] = inst_33991__$1);

(statearr_34132[(15)] = inst_33993__$1);

(statearr_34132[(18)] = inst_34008);

(statearr_34132[(16)] = inst_33992__$1);

return statearr_34132;
})();
var statearr_34133_34209 = state_34113__$1;
(statearr_34133_34209[(2)] = null);

(statearr_34133_34209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (21))){
var inst_34035 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
var statearr_34137_34210 = state_34113__$1;
(statearr_34137_34210[(2)] = inst_34035);

(statearr_34137_34210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (31))){
var inst_34061 = (state_34113[(10)]);
var inst_34065 = done.call(null,null);
var inst_34066 = cljs.core.async.untap_STAR_.call(null,m,inst_34061);
var state_34113__$1 = (function (){var statearr_34138 = state_34113;
(statearr_34138[(19)] = inst_34065);

return statearr_34138;
})();
var statearr_34139_34211 = state_34113__$1;
(statearr_34139_34211[(2)] = inst_34066);

(statearr_34139_34211[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (32))){
var inst_34055 = (state_34113[(20)]);
var inst_34054 = (state_34113[(11)]);
var inst_34056 = (state_34113[(12)]);
var inst_34053 = (state_34113[(21)]);
var inst_34068 = (state_34113[(2)]);
var inst_34069 = (inst_34056 + (1));
var tmp34134 = inst_34055;
var tmp34135 = inst_34054;
var tmp34136 = inst_34053;
var inst_34053__$1 = tmp34136;
var inst_34054__$1 = tmp34135;
var inst_34055__$1 = tmp34134;
var inst_34056__$1 = inst_34069;
var state_34113__$1 = (function (){var statearr_34140 = state_34113;
(statearr_34140[(22)] = inst_34068);

(statearr_34140[(20)] = inst_34055__$1);

(statearr_34140[(11)] = inst_34054__$1);

(statearr_34140[(12)] = inst_34056__$1);

(statearr_34140[(21)] = inst_34053__$1);

return statearr_34140;
})();
var statearr_34141_34212 = state_34113__$1;
(statearr_34141_34212[(2)] = null);

(statearr_34141_34212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (40))){
var inst_34081 = (state_34113[(23)]);
var inst_34085 = done.call(null,null);
var inst_34086 = cljs.core.async.untap_STAR_.call(null,m,inst_34081);
var state_34113__$1 = (function (){var statearr_34142 = state_34113;
(statearr_34142[(24)] = inst_34085);

return statearr_34142;
})();
var statearr_34143_34213 = state_34113__$1;
(statearr_34143_34213[(2)] = inst_34086);

(statearr_34143_34213[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (33))){
var inst_34072 = (state_34113[(25)]);
var inst_34074 = cljs.core.chunked_seq_QMARK_.call(null,inst_34072);
var state_34113__$1 = state_34113;
if(inst_34074){
var statearr_34144_34214 = state_34113__$1;
(statearr_34144_34214[(1)] = (36));

} else {
var statearr_34145_34215 = state_34113__$1;
(statearr_34145_34215[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (13))){
var inst_34002 = (state_34113[(26)]);
var inst_34005 = cljs.core.async.close_BANG_.call(null,inst_34002);
var state_34113__$1 = state_34113;
var statearr_34146_34216 = state_34113__$1;
(statearr_34146_34216[(2)] = inst_34005);

(statearr_34146_34216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (22))){
var inst_34025 = (state_34113[(8)]);
var inst_34028 = cljs.core.async.close_BANG_.call(null,inst_34025);
var state_34113__$1 = state_34113;
var statearr_34147_34217 = state_34113__$1;
(statearr_34147_34217[(2)] = inst_34028);

(statearr_34147_34217[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (36))){
var inst_34072 = (state_34113[(25)]);
var inst_34076 = cljs.core.chunk_first.call(null,inst_34072);
var inst_34077 = cljs.core.chunk_rest.call(null,inst_34072);
var inst_34078 = cljs.core.count.call(null,inst_34076);
var inst_34053 = inst_34077;
var inst_34054 = inst_34076;
var inst_34055 = inst_34078;
var inst_34056 = (0);
var state_34113__$1 = (function (){var statearr_34148 = state_34113;
(statearr_34148[(20)] = inst_34055);

(statearr_34148[(11)] = inst_34054);

(statearr_34148[(12)] = inst_34056);

(statearr_34148[(21)] = inst_34053);

return statearr_34148;
})();
var statearr_34149_34218 = state_34113__$1;
(statearr_34149_34218[(2)] = null);

(statearr_34149_34218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (41))){
var inst_34072 = (state_34113[(25)]);
var inst_34088 = (state_34113[(2)]);
var inst_34089 = cljs.core.next.call(null,inst_34072);
var inst_34053 = inst_34089;
var inst_34054 = null;
var inst_34055 = (0);
var inst_34056 = (0);
var state_34113__$1 = (function (){var statearr_34150 = state_34113;
(statearr_34150[(20)] = inst_34055);

(statearr_34150[(27)] = inst_34088);

(statearr_34150[(11)] = inst_34054);

(statearr_34150[(12)] = inst_34056);

(statearr_34150[(21)] = inst_34053);

return statearr_34150;
})();
var statearr_34151_34219 = state_34113__$1;
(statearr_34151_34219[(2)] = null);

(statearr_34151_34219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (43))){
var state_34113__$1 = state_34113;
var statearr_34152_34220 = state_34113__$1;
(statearr_34152_34220[(2)] = null);

(statearr_34152_34220[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (29))){
var inst_34097 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
var statearr_34153_34221 = state_34113__$1;
(statearr_34153_34221[(2)] = inst_34097);

(statearr_34153_34221[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (44))){
var inst_34106 = (state_34113[(2)]);
var state_34113__$1 = (function (){var statearr_34154 = state_34113;
(statearr_34154[(28)] = inst_34106);

return statearr_34154;
})();
var statearr_34155_34222 = state_34113__$1;
(statearr_34155_34222[(2)] = null);

(statearr_34155_34222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (6))){
var inst_34045 = (state_34113[(29)]);
var inst_34044 = cljs.core.deref.call(null,cs);
var inst_34045__$1 = cljs.core.keys.call(null,inst_34044);
var inst_34046 = cljs.core.count.call(null,inst_34045__$1);
var inst_34047 = cljs.core.reset_BANG_.call(null,dctr,inst_34046);
var inst_34052 = cljs.core.seq.call(null,inst_34045__$1);
var inst_34053 = inst_34052;
var inst_34054 = null;
var inst_34055 = (0);
var inst_34056 = (0);
var state_34113__$1 = (function (){var statearr_34156 = state_34113;
(statearr_34156[(30)] = inst_34047);

(statearr_34156[(20)] = inst_34055);

(statearr_34156[(11)] = inst_34054);

(statearr_34156[(29)] = inst_34045__$1);

(statearr_34156[(12)] = inst_34056);

(statearr_34156[(21)] = inst_34053);

return statearr_34156;
})();
var statearr_34157_34223 = state_34113__$1;
(statearr_34157_34223[(2)] = null);

(statearr_34157_34223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (28))){
var inst_34072 = (state_34113[(25)]);
var inst_34053 = (state_34113[(21)]);
var inst_34072__$1 = cljs.core.seq.call(null,inst_34053);
var state_34113__$1 = (function (){var statearr_34158 = state_34113;
(statearr_34158[(25)] = inst_34072__$1);

return statearr_34158;
})();
if(inst_34072__$1){
var statearr_34159_34224 = state_34113__$1;
(statearr_34159_34224[(1)] = (33));

} else {
var statearr_34160_34225 = state_34113__$1;
(statearr_34160_34225[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (25))){
var inst_34055 = (state_34113[(20)]);
var inst_34056 = (state_34113[(12)]);
var inst_34058 = (inst_34056 < inst_34055);
var inst_34059 = inst_34058;
var state_34113__$1 = state_34113;
if(cljs.core.truth_(inst_34059)){
var statearr_34161_34226 = state_34113__$1;
(statearr_34161_34226[(1)] = (27));

} else {
var statearr_34162_34227 = state_34113__$1;
(statearr_34162_34227[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (34))){
var state_34113__$1 = state_34113;
var statearr_34163_34228 = state_34113__$1;
(statearr_34163_34228[(2)] = null);

(statearr_34163_34228[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (17))){
var state_34113__$1 = state_34113;
var statearr_34164_34229 = state_34113__$1;
(statearr_34164_34229[(2)] = null);

(statearr_34164_34229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (3))){
var inst_34111 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34113__$1,inst_34111);
} else {
if((state_val_34114 === (12))){
var inst_34040 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
var statearr_34165_34230 = state_34113__$1;
(statearr_34165_34230[(2)] = inst_34040);

(statearr_34165_34230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (2))){
var state_34113__$1 = state_34113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34113__$1,(4),ch);
} else {
if((state_val_34114 === (23))){
var state_34113__$1 = state_34113;
var statearr_34166_34231 = state_34113__$1;
(statearr_34166_34231[(2)] = null);

(statearr_34166_34231[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (35))){
var inst_34095 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
var statearr_34167_34232 = state_34113__$1;
(statearr_34167_34232[(2)] = inst_34095);

(statearr_34167_34232[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (19))){
var inst_34012 = (state_34113[(7)]);
var inst_34016 = cljs.core.chunk_first.call(null,inst_34012);
var inst_34017 = cljs.core.chunk_rest.call(null,inst_34012);
var inst_34018 = cljs.core.count.call(null,inst_34016);
var inst_33990 = inst_34017;
var inst_33991 = inst_34016;
var inst_33992 = inst_34018;
var inst_33993 = (0);
var state_34113__$1 = (function (){var statearr_34168 = state_34113;
(statearr_34168[(13)] = inst_33990);

(statearr_34168[(14)] = inst_33991);

(statearr_34168[(15)] = inst_33993);

(statearr_34168[(16)] = inst_33992);

return statearr_34168;
})();
var statearr_34169_34233 = state_34113__$1;
(statearr_34169_34233[(2)] = null);

(statearr_34169_34233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (11))){
var inst_34012 = (state_34113[(7)]);
var inst_33990 = (state_34113[(13)]);
var inst_34012__$1 = cljs.core.seq.call(null,inst_33990);
var state_34113__$1 = (function (){var statearr_34170 = state_34113;
(statearr_34170[(7)] = inst_34012__$1);

return statearr_34170;
})();
if(inst_34012__$1){
var statearr_34171_34234 = state_34113__$1;
(statearr_34171_34234[(1)] = (16));

} else {
var statearr_34172_34235 = state_34113__$1;
(statearr_34172_34235[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (9))){
var inst_34042 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
var statearr_34173_34236 = state_34113__$1;
(statearr_34173_34236[(2)] = inst_34042);

(statearr_34173_34236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (5))){
var inst_33988 = cljs.core.deref.call(null,cs);
var inst_33989 = cljs.core.seq.call(null,inst_33988);
var inst_33990 = inst_33989;
var inst_33991 = null;
var inst_33992 = (0);
var inst_33993 = (0);
var state_34113__$1 = (function (){var statearr_34174 = state_34113;
(statearr_34174[(13)] = inst_33990);

(statearr_34174[(14)] = inst_33991);

(statearr_34174[(15)] = inst_33993);

(statearr_34174[(16)] = inst_33992);

return statearr_34174;
})();
var statearr_34175_34237 = state_34113__$1;
(statearr_34175_34237[(2)] = null);

(statearr_34175_34237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (14))){
var state_34113__$1 = state_34113;
var statearr_34176_34238 = state_34113__$1;
(statearr_34176_34238[(2)] = null);

(statearr_34176_34238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (45))){
var inst_34103 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
var statearr_34177_34239 = state_34113__$1;
(statearr_34177_34239[(2)] = inst_34103);

(statearr_34177_34239[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (26))){
var inst_34045 = (state_34113[(29)]);
var inst_34099 = (state_34113[(2)]);
var inst_34100 = cljs.core.seq.call(null,inst_34045);
var state_34113__$1 = (function (){var statearr_34178 = state_34113;
(statearr_34178[(31)] = inst_34099);

return statearr_34178;
})();
if(inst_34100){
var statearr_34179_34240 = state_34113__$1;
(statearr_34179_34240[(1)] = (42));

} else {
var statearr_34180_34241 = state_34113__$1;
(statearr_34180_34241[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (16))){
var inst_34012 = (state_34113[(7)]);
var inst_34014 = cljs.core.chunked_seq_QMARK_.call(null,inst_34012);
var state_34113__$1 = state_34113;
if(inst_34014){
var statearr_34181_34242 = state_34113__$1;
(statearr_34181_34242[(1)] = (19));

} else {
var statearr_34182_34243 = state_34113__$1;
(statearr_34182_34243[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (38))){
var inst_34092 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
var statearr_34183_34244 = state_34113__$1;
(statearr_34183_34244[(2)] = inst_34092);

(statearr_34183_34244[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (30))){
var state_34113__$1 = state_34113;
var statearr_34184_34245 = state_34113__$1;
(statearr_34184_34245[(2)] = null);

(statearr_34184_34245[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (10))){
var inst_33991 = (state_34113[(14)]);
var inst_33993 = (state_34113[(15)]);
var inst_34001 = cljs.core._nth.call(null,inst_33991,inst_33993);
var inst_34002 = cljs.core.nth.call(null,inst_34001,(0),null);
var inst_34003 = cljs.core.nth.call(null,inst_34001,(1),null);
var state_34113__$1 = (function (){var statearr_34185 = state_34113;
(statearr_34185[(26)] = inst_34002);

return statearr_34185;
})();
if(cljs.core.truth_(inst_34003)){
var statearr_34186_34246 = state_34113__$1;
(statearr_34186_34246[(1)] = (13));

} else {
var statearr_34187_34247 = state_34113__$1;
(statearr_34187_34247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (18))){
var inst_34038 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
var statearr_34188_34248 = state_34113__$1;
(statearr_34188_34248[(2)] = inst_34038);

(statearr_34188_34248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (42))){
var state_34113__$1 = state_34113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34113__$1,(45),dchan);
} else {
if((state_val_34114 === (37))){
var inst_33981 = (state_34113[(9)]);
var inst_34081 = (state_34113[(23)]);
var inst_34072 = (state_34113[(25)]);
var inst_34081__$1 = cljs.core.first.call(null,inst_34072);
var inst_34082 = cljs.core.async.put_BANG_.call(null,inst_34081__$1,inst_33981,done);
var state_34113__$1 = (function (){var statearr_34189 = state_34113;
(statearr_34189[(23)] = inst_34081__$1);

return statearr_34189;
})();
if(cljs.core.truth_(inst_34082)){
var statearr_34190_34249 = state_34113__$1;
(statearr_34190_34249[(1)] = (39));

} else {
var statearr_34191_34250 = state_34113__$1;
(statearr_34191_34250[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34114 === (8))){
var inst_33993 = (state_34113[(15)]);
var inst_33992 = (state_34113[(16)]);
var inst_33995 = (inst_33993 < inst_33992);
var inst_33996 = inst_33995;
var state_34113__$1 = state_34113;
if(cljs.core.truth_(inst_33996)){
var statearr_34192_34251 = state_34113__$1;
(statearr_34192_34251[(1)] = (10));

} else {
var statearr_34193_34252 = state_34113__$1;
(statearr_34193_34252[(1)] = (11));

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
});})(c__31515__auto___34198,cs,m,dchan,dctr,done))
;
return ((function (switch__31348__auto__,c__31515__auto___34198,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31349__auto__ = null;
var cljs$core$async$mult_$_state_machine__31349__auto____0 = (function (){
var statearr_34194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34194[(0)] = cljs$core$async$mult_$_state_machine__31349__auto__);

(statearr_34194[(1)] = (1));

return statearr_34194;
});
var cljs$core$async$mult_$_state_machine__31349__auto____1 = (function (state_34113){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_34113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e34195){if((e34195 instanceof Object)){
var ex__31352__auto__ = e34195;
var statearr_34196_34253 = state_34113;
(statearr_34196_34253[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34254 = state_34113;
state_34113 = G__34254;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31349__auto__ = function(state_34113){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31349__auto____1.call(this,state_34113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31349__auto____0;
cljs$core$async$mult_$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31349__auto____1;
return cljs$core$async$mult_$_state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___34198,cs,m,dchan,dctr,done))
})();
var state__31517__auto__ = (function (){var statearr_34197 = f__31516__auto__.call(null);
(statearr_34197[(6)] = c__31515__auto___34198);

return statearr_34197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___34198,cs,m,dchan,dctr,done))
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
var G__34256 = arguments.length;
switch (G__34256) {
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
var x__18564__auto__ = (((m == null))?null:m);
var m__18565__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,m,ch);
} else {
var m__18562__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,m,ch);
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
var x__18564__auto__ = (((m == null))?null:m);
var m__18565__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,m,ch);
} else {
var m__18562__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,m,ch);
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
var x__18564__auto__ = (((m == null))?null:m);
var m__18565__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,m);
} else {
var m__18562__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,m);
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
var x__18564__auto__ = (((m == null))?null:m);
var m__18565__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,m,state_map);
} else {
var m__18562__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,m,state_map);
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
var x__18564__auto__ = (((m == null))?null:m);
var m__18565__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,m,mode);
} else {
var m__18562__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19135__auto__ = [];
var len__19125__auto___34268 = arguments.length;
var i__19126__auto___34269 = (0);
while(true){
if((i__19126__auto___34269 < len__19125__auto___34268)){
args__19135__auto__.push((arguments[i__19126__auto___34269]));

var G__34270 = (i__19126__auto___34269 + (1));
i__19126__auto___34269 = G__34270;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((3) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19136__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34262){
var map__34263 = p__34262;
var map__34263__$1 = (((((!((map__34263 == null))))?(((((map__34263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34263):map__34263);
var opts = map__34263__$1;
var statearr_34265_34271 = state;
(statearr_34265_34271[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__34263,map__34263__$1,opts){
return (function (val){
var statearr_34266_34272 = state;
(statearr_34266_34272[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34263,map__34263__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_34267_34273 = state;
(statearr_34267_34273[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34258){
var G__34259 = cljs.core.first.call(null,seq34258);
var seq34258__$1 = cljs.core.next.call(null,seq34258);
var G__34260 = cljs.core.first.call(null,seq34258__$1);
var seq34258__$2 = cljs.core.next.call(null,seq34258__$1);
var G__34261 = cljs.core.first.call(null,seq34258__$2);
var seq34258__$3 = cljs.core.next.call(null,seq34258__$2);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34259,G__34260,G__34261,seq34258__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34274 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34275){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34275 = meta34275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34276,meta34275__$1){
var self__ = this;
var _34276__$1 = this;
return (new cljs.core.async.t_cljs$core$async34274(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34275__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34276){
var self__ = this;
var _34276__$1 = this;
return self__.meta34275;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34274.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34274.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34275","meta34275",1353289331,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34274";

cljs.core.async.t_cljs$core$async34274.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t_cljs$core$async34274");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34274.
 */
cljs.core.async.__GT_t_cljs$core$async34274 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34274(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34275){
return (new cljs.core.async.t_cljs$core$async34274(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34275));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34274(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31515__auto___34438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___34438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___34438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34378){
var state_val_34379 = (state_34378[(1)]);
if((state_val_34379 === (7))){
var inst_34293 = (state_34378[(2)]);
var state_34378__$1 = state_34378;
var statearr_34380_34439 = state_34378__$1;
(statearr_34380_34439[(2)] = inst_34293);

(statearr_34380_34439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (20))){
var inst_34305 = (state_34378[(7)]);
var state_34378__$1 = state_34378;
var statearr_34381_34440 = state_34378__$1;
(statearr_34381_34440[(2)] = inst_34305);

(statearr_34381_34440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (27))){
var state_34378__$1 = state_34378;
var statearr_34382_34441 = state_34378__$1;
(statearr_34382_34441[(2)] = null);

(statearr_34382_34441[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (1))){
var inst_34280 = (state_34378[(8)]);
var inst_34280__$1 = calc_state.call(null);
var inst_34282 = (inst_34280__$1 == null);
var inst_34283 = cljs.core.not.call(null,inst_34282);
var state_34378__$1 = (function (){var statearr_34383 = state_34378;
(statearr_34383[(8)] = inst_34280__$1);

return statearr_34383;
})();
if(inst_34283){
var statearr_34384_34442 = state_34378__$1;
(statearr_34384_34442[(1)] = (2));

} else {
var statearr_34385_34443 = state_34378__$1;
(statearr_34385_34443[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (24))){
var inst_34338 = (state_34378[(9)]);
var inst_34352 = (state_34378[(10)]);
var inst_34329 = (state_34378[(11)]);
var inst_34352__$1 = inst_34329.call(null,inst_34338);
var state_34378__$1 = (function (){var statearr_34386 = state_34378;
(statearr_34386[(10)] = inst_34352__$1);

return statearr_34386;
})();
if(cljs.core.truth_(inst_34352__$1)){
var statearr_34387_34444 = state_34378__$1;
(statearr_34387_34444[(1)] = (29));

} else {
var statearr_34388_34445 = state_34378__$1;
(statearr_34388_34445[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (4))){
var inst_34296 = (state_34378[(2)]);
var state_34378__$1 = state_34378;
if(cljs.core.truth_(inst_34296)){
var statearr_34389_34446 = state_34378__$1;
(statearr_34389_34446[(1)] = (8));

} else {
var statearr_34390_34447 = state_34378__$1;
(statearr_34390_34447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (15))){
var inst_34323 = (state_34378[(2)]);
var state_34378__$1 = state_34378;
if(cljs.core.truth_(inst_34323)){
var statearr_34391_34448 = state_34378__$1;
(statearr_34391_34448[(1)] = (19));

} else {
var statearr_34392_34449 = state_34378__$1;
(statearr_34392_34449[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (21))){
var inst_34328 = (state_34378[(12)]);
var inst_34328__$1 = (state_34378[(2)]);
var inst_34329 = cljs.core.get.call(null,inst_34328__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34330 = cljs.core.get.call(null,inst_34328__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34331 = cljs.core.get.call(null,inst_34328__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34378__$1 = (function (){var statearr_34393 = state_34378;
(statearr_34393[(12)] = inst_34328__$1);

(statearr_34393[(13)] = inst_34330);

(statearr_34393[(11)] = inst_34329);

return statearr_34393;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34378__$1,(22),inst_34331);
} else {
if((state_val_34379 === (31))){
var inst_34360 = (state_34378[(2)]);
var state_34378__$1 = state_34378;
if(cljs.core.truth_(inst_34360)){
var statearr_34394_34450 = state_34378__$1;
(statearr_34394_34450[(1)] = (32));

} else {
var statearr_34395_34451 = state_34378__$1;
(statearr_34395_34451[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (32))){
var inst_34337 = (state_34378[(14)]);
var state_34378__$1 = state_34378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34378__$1,(35),out,inst_34337);
} else {
if((state_val_34379 === (33))){
var inst_34328 = (state_34378[(12)]);
var inst_34305 = inst_34328;
var state_34378__$1 = (function (){var statearr_34396 = state_34378;
(statearr_34396[(7)] = inst_34305);

return statearr_34396;
})();
var statearr_34397_34452 = state_34378__$1;
(statearr_34397_34452[(2)] = null);

(statearr_34397_34452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (13))){
var inst_34305 = (state_34378[(7)]);
var inst_34312 = inst_34305.cljs$lang$protocol_mask$partition0$;
var inst_34313 = (inst_34312 & (64));
var inst_34314 = inst_34305.cljs$core$ISeq$;
var inst_34315 = (cljs.core.PROTOCOL_SENTINEL === inst_34314);
var inst_34316 = ((inst_34313) || (inst_34315));
var state_34378__$1 = state_34378;
if(cljs.core.truth_(inst_34316)){
var statearr_34398_34453 = state_34378__$1;
(statearr_34398_34453[(1)] = (16));

} else {
var statearr_34399_34454 = state_34378__$1;
(statearr_34399_34454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (22))){
var inst_34337 = (state_34378[(14)]);
var inst_34338 = (state_34378[(9)]);
var inst_34336 = (state_34378[(2)]);
var inst_34337__$1 = cljs.core.nth.call(null,inst_34336,(0),null);
var inst_34338__$1 = cljs.core.nth.call(null,inst_34336,(1),null);
var inst_34339 = (inst_34337__$1 == null);
var inst_34340 = cljs.core._EQ_.call(null,inst_34338__$1,change);
var inst_34341 = ((inst_34339) || (inst_34340));
var state_34378__$1 = (function (){var statearr_34400 = state_34378;
(statearr_34400[(14)] = inst_34337__$1);

(statearr_34400[(9)] = inst_34338__$1);

return statearr_34400;
})();
if(cljs.core.truth_(inst_34341)){
var statearr_34401_34455 = state_34378__$1;
(statearr_34401_34455[(1)] = (23));

} else {
var statearr_34402_34456 = state_34378__$1;
(statearr_34402_34456[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (36))){
var inst_34328 = (state_34378[(12)]);
var inst_34305 = inst_34328;
var state_34378__$1 = (function (){var statearr_34403 = state_34378;
(statearr_34403[(7)] = inst_34305);

return statearr_34403;
})();
var statearr_34404_34457 = state_34378__$1;
(statearr_34404_34457[(2)] = null);

(statearr_34404_34457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (29))){
var inst_34352 = (state_34378[(10)]);
var state_34378__$1 = state_34378;
var statearr_34405_34458 = state_34378__$1;
(statearr_34405_34458[(2)] = inst_34352);

(statearr_34405_34458[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (6))){
var state_34378__$1 = state_34378;
var statearr_34406_34459 = state_34378__$1;
(statearr_34406_34459[(2)] = false);

(statearr_34406_34459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (28))){
var inst_34348 = (state_34378[(2)]);
var inst_34349 = calc_state.call(null);
var inst_34305 = inst_34349;
var state_34378__$1 = (function (){var statearr_34407 = state_34378;
(statearr_34407[(7)] = inst_34305);

(statearr_34407[(15)] = inst_34348);

return statearr_34407;
})();
var statearr_34408_34460 = state_34378__$1;
(statearr_34408_34460[(2)] = null);

(statearr_34408_34460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (25))){
var inst_34374 = (state_34378[(2)]);
var state_34378__$1 = state_34378;
var statearr_34409_34461 = state_34378__$1;
(statearr_34409_34461[(2)] = inst_34374);

(statearr_34409_34461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (34))){
var inst_34372 = (state_34378[(2)]);
var state_34378__$1 = state_34378;
var statearr_34410_34462 = state_34378__$1;
(statearr_34410_34462[(2)] = inst_34372);

(statearr_34410_34462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (17))){
var state_34378__$1 = state_34378;
var statearr_34411_34463 = state_34378__$1;
(statearr_34411_34463[(2)] = false);

(statearr_34411_34463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (3))){
var state_34378__$1 = state_34378;
var statearr_34412_34464 = state_34378__$1;
(statearr_34412_34464[(2)] = false);

(statearr_34412_34464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (12))){
var inst_34376 = (state_34378[(2)]);
var state_34378__$1 = state_34378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34378__$1,inst_34376);
} else {
if((state_val_34379 === (2))){
var inst_34280 = (state_34378[(8)]);
var inst_34285 = inst_34280.cljs$lang$protocol_mask$partition0$;
var inst_34286 = (inst_34285 & (64));
var inst_34287 = inst_34280.cljs$core$ISeq$;
var inst_34288 = (cljs.core.PROTOCOL_SENTINEL === inst_34287);
var inst_34289 = ((inst_34286) || (inst_34288));
var state_34378__$1 = state_34378;
if(cljs.core.truth_(inst_34289)){
var statearr_34413_34465 = state_34378__$1;
(statearr_34413_34465[(1)] = (5));

} else {
var statearr_34414_34466 = state_34378__$1;
(statearr_34414_34466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (23))){
var inst_34337 = (state_34378[(14)]);
var inst_34343 = (inst_34337 == null);
var state_34378__$1 = state_34378;
if(cljs.core.truth_(inst_34343)){
var statearr_34415_34467 = state_34378__$1;
(statearr_34415_34467[(1)] = (26));

} else {
var statearr_34416_34468 = state_34378__$1;
(statearr_34416_34468[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (35))){
var inst_34363 = (state_34378[(2)]);
var state_34378__$1 = state_34378;
if(cljs.core.truth_(inst_34363)){
var statearr_34417_34469 = state_34378__$1;
(statearr_34417_34469[(1)] = (36));

} else {
var statearr_34418_34470 = state_34378__$1;
(statearr_34418_34470[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (19))){
var inst_34305 = (state_34378[(7)]);
var inst_34325 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34305);
var state_34378__$1 = state_34378;
var statearr_34419_34471 = state_34378__$1;
(statearr_34419_34471[(2)] = inst_34325);

(statearr_34419_34471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (11))){
var inst_34305 = (state_34378[(7)]);
var inst_34309 = (inst_34305 == null);
var inst_34310 = cljs.core.not.call(null,inst_34309);
var state_34378__$1 = state_34378;
if(inst_34310){
var statearr_34420_34472 = state_34378__$1;
(statearr_34420_34472[(1)] = (13));

} else {
var statearr_34421_34473 = state_34378__$1;
(statearr_34421_34473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (9))){
var inst_34280 = (state_34378[(8)]);
var state_34378__$1 = state_34378;
var statearr_34422_34474 = state_34378__$1;
(statearr_34422_34474[(2)] = inst_34280);

(statearr_34422_34474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (5))){
var state_34378__$1 = state_34378;
var statearr_34423_34475 = state_34378__$1;
(statearr_34423_34475[(2)] = true);

(statearr_34423_34475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (14))){
var state_34378__$1 = state_34378;
var statearr_34424_34476 = state_34378__$1;
(statearr_34424_34476[(2)] = false);

(statearr_34424_34476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (26))){
var inst_34338 = (state_34378[(9)]);
var inst_34345 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34338);
var state_34378__$1 = state_34378;
var statearr_34425_34477 = state_34378__$1;
(statearr_34425_34477[(2)] = inst_34345);

(statearr_34425_34477[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (16))){
var state_34378__$1 = state_34378;
var statearr_34426_34478 = state_34378__$1;
(statearr_34426_34478[(2)] = true);

(statearr_34426_34478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (38))){
var inst_34368 = (state_34378[(2)]);
var state_34378__$1 = state_34378;
var statearr_34427_34479 = state_34378__$1;
(statearr_34427_34479[(2)] = inst_34368);

(statearr_34427_34479[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (30))){
var inst_34338 = (state_34378[(9)]);
var inst_34330 = (state_34378[(13)]);
var inst_34329 = (state_34378[(11)]);
var inst_34355 = cljs.core.empty_QMARK_.call(null,inst_34329);
var inst_34356 = inst_34330.call(null,inst_34338);
var inst_34357 = cljs.core.not.call(null,inst_34356);
var inst_34358 = ((inst_34355) && (inst_34357));
var state_34378__$1 = state_34378;
var statearr_34428_34480 = state_34378__$1;
(statearr_34428_34480[(2)] = inst_34358);

(statearr_34428_34480[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (10))){
var inst_34280 = (state_34378[(8)]);
var inst_34301 = (state_34378[(2)]);
var inst_34302 = cljs.core.get.call(null,inst_34301,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34303 = cljs.core.get.call(null,inst_34301,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34304 = cljs.core.get.call(null,inst_34301,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34305 = inst_34280;
var state_34378__$1 = (function (){var statearr_34429 = state_34378;
(statearr_34429[(7)] = inst_34305);

(statearr_34429[(16)] = inst_34302);

(statearr_34429[(17)] = inst_34303);

(statearr_34429[(18)] = inst_34304);

return statearr_34429;
})();
var statearr_34430_34481 = state_34378__$1;
(statearr_34430_34481[(2)] = null);

(statearr_34430_34481[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (18))){
var inst_34320 = (state_34378[(2)]);
var state_34378__$1 = state_34378;
var statearr_34431_34482 = state_34378__$1;
(statearr_34431_34482[(2)] = inst_34320);

(statearr_34431_34482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (37))){
var state_34378__$1 = state_34378;
var statearr_34432_34483 = state_34378__$1;
(statearr_34432_34483[(2)] = null);

(statearr_34432_34483[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34379 === (8))){
var inst_34280 = (state_34378[(8)]);
var inst_34298 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34280);
var state_34378__$1 = state_34378;
var statearr_34433_34484 = state_34378__$1;
(statearr_34433_34484[(2)] = inst_34298);

(statearr_34433_34484[(1)] = (10));


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
});})(c__31515__auto___34438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31348__auto__,c__31515__auto___34438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31349__auto__ = null;
var cljs$core$async$mix_$_state_machine__31349__auto____0 = (function (){
var statearr_34434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34434[(0)] = cljs$core$async$mix_$_state_machine__31349__auto__);

(statearr_34434[(1)] = (1));

return statearr_34434;
});
var cljs$core$async$mix_$_state_machine__31349__auto____1 = (function (state_34378){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_34378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e34435){if((e34435 instanceof Object)){
var ex__31352__auto__ = e34435;
var statearr_34436_34485 = state_34378;
(statearr_34436_34485[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34486 = state_34378;
state_34378 = G__34486;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31349__auto__ = function(state_34378){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31349__auto____1.call(this,state_34378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31349__auto____0;
cljs$core$async$mix_$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31349__auto____1;
return cljs$core$async$mix_$_state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___34438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31517__auto__ = (function (){var statearr_34437 = f__31516__auto__.call(null);
(statearr_34437[(6)] = c__31515__auto___34438);

return statearr_34437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___34438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__18564__auto__ = (((p == null))?null:p);
var m__18565__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18562__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,p,v,ch,close_QMARK_);
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
var x__18564__auto__ = (((p == null))?null:p);
var m__18565__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,p,v,ch);
} else {
var m__18562__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34488 = arguments.length;
switch (G__34488) {
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
var x__18564__auto__ = (((p == null))?null:p);
var m__18565__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,p);
} else {
var m__18562__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,p);
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
var x__18564__auto__ = (((p == null))?null:p);
var m__18565__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18564__auto__)]);
if((!((m__18565__auto__ == null)))){
return m__18565__auto__.call(null,p,v);
} else {
var m__18562__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__18562__auto__ == null)))){
return m__18562__auto__.call(null,p,v);
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
var G__34492 = arguments.length;
switch (G__34492) {
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
var or__17816__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17816__auto__,mults){
return (function (p1__34490_SHARP_){
if(cljs.core.truth_(p1__34490_SHARP_.call(null,topic))){
return p1__34490_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34490_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17816__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34493 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34494){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34494 = meta34494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34495,meta34494__$1){
var self__ = this;
var _34495__$1 = this;
return (new cljs.core.async.t_cljs$core$async34493(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34494__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34495){
var self__ = this;
var _34495__$1 = this;
return self__.meta34494;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34493.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34494","meta34494",-883342596,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34493";

cljs.core.async.t_cljs$core$async34493.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t_cljs$core$async34493");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34493.
 */
cljs.core.async.__GT_t_cljs$core$async34493 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34493(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34494){
return (new cljs.core.async.t_cljs$core$async34493(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34494));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34493(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31515__auto___34613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___34613,mults,ensure_mult,p){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___34613,mults,ensure_mult,p){
return (function (state_34567){
var state_val_34568 = (state_34567[(1)]);
if((state_val_34568 === (7))){
var inst_34563 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
var statearr_34569_34614 = state_34567__$1;
(statearr_34569_34614[(2)] = inst_34563);

(statearr_34569_34614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (20))){
var state_34567__$1 = state_34567;
var statearr_34570_34615 = state_34567__$1;
(statearr_34570_34615[(2)] = null);

(statearr_34570_34615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (1))){
var state_34567__$1 = state_34567;
var statearr_34571_34616 = state_34567__$1;
(statearr_34571_34616[(2)] = null);

(statearr_34571_34616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (24))){
var inst_34546 = (state_34567[(7)]);
var inst_34555 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34546);
var state_34567__$1 = state_34567;
var statearr_34572_34617 = state_34567__$1;
(statearr_34572_34617[(2)] = inst_34555);

(statearr_34572_34617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (4))){
var inst_34498 = (state_34567[(8)]);
var inst_34498__$1 = (state_34567[(2)]);
var inst_34499 = (inst_34498__$1 == null);
var state_34567__$1 = (function (){var statearr_34573 = state_34567;
(statearr_34573[(8)] = inst_34498__$1);

return statearr_34573;
})();
if(cljs.core.truth_(inst_34499)){
var statearr_34574_34618 = state_34567__$1;
(statearr_34574_34618[(1)] = (5));

} else {
var statearr_34575_34619 = state_34567__$1;
(statearr_34575_34619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (15))){
var inst_34540 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
var statearr_34576_34620 = state_34567__$1;
(statearr_34576_34620[(2)] = inst_34540);

(statearr_34576_34620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (21))){
var inst_34560 = (state_34567[(2)]);
var state_34567__$1 = (function (){var statearr_34577 = state_34567;
(statearr_34577[(9)] = inst_34560);

return statearr_34577;
})();
var statearr_34578_34621 = state_34567__$1;
(statearr_34578_34621[(2)] = null);

(statearr_34578_34621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (13))){
var inst_34522 = (state_34567[(10)]);
var inst_34524 = cljs.core.chunked_seq_QMARK_.call(null,inst_34522);
var state_34567__$1 = state_34567;
if(inst_34524){
var statearr_34579_34622 = state_34567__$1;
(statearr_34579_34622[(1)] = (16));

} else {
var statearr_34580_34623 = state_34567__$1;
(statearr_34580_34623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (22))){
var inst_34552 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
if(cljs.core.truth_(inst_34552)){
var statearr_34581_34624 = state_34567__$1;
(statearr_34581_34624[(1)] = (23));

} else {
var statearr_34582_34625 = state_34567__$1;
(statearr_34582_34625[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (6))){
var inst_34498 = (state_34567[(8)]);
var inst_34546 = (state_34567[(7)]);
var inst_34548 = (state_34567[(11)]);
var inst_34546__$1 = topic_fn.call(null,inst_34498);
var inst_34547 = cljs.core.deref.call(null,mults);
var inst_34548__$1 = cljs.core.get.call(null,inst_34547,inst_34546__$1);
var state_34567__$1 = (function (){var statearr_34583 = state_34567;
(statearr_34583[(7)] = inst_34546__$1);

(statearr_34583[(11)] = inst_34548__$1);

return statearr_34583;
})();
if(cljs.core.truth_(inst_34548__$1)){
var statearr_34584_34626 = state_34567__$1;
(statearr_34584_34626[(1)] = (19));

} else {
var statearr_34585_34627 = state_34567__$1;
(statearr_34585_34627[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (25))){
var inst_34557 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
var statearr_34586_34628 = state_34567__$1;
(statearr_34586_34628[(2)] = inst_34557);

(statearr_34586_34628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (17))){
var inst_34522 = (state_34567[(10)]);
var inst_34531 = cljs.core.first.call(null,inst_34522);
var inst_34532 = cljs.core.async.muxch_STAR_.call(null,inst_34531);
var inst_34533 = cljs.core.async.close_BANG_.call(null,inst_34532);
var inst_34534 = cljs.core.next.call(null,inst_34522);
var inst_34508 = inst_34534;
var inst_34509 = null;
var inst_34510 = (0);
var inst_34511 = (0);
var state_34567__$1 = (function (){var statearr_34587 = state_34567;
(statearr_34587[(12)] = inst_34509);

(statearr_34587[(13)] = inst_34533);

(statearr_34587[(14)] = inst_34510);

(statearr_34587[(15)] = inst_34511);

(statearr_34587[(16)] = inst_34508);

return statearr_34587;
})();
var statearr_34588_34629 = state_34567__$1;
(statearr_34588_34629[(2)] = null);

(statearr_34588_34629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (3))){
var inst_34565 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34567__$1,inst_34565);
} else {
if((state_val_34568 === (12))){
var inst_34542 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
var statearr_34589_34630 = state_34567__$1;
(statearr_34589_34630[(2)] = inst_34542);

(statearr_34589_34630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (2))){
var state_34567__$1 = state_34567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34567__$1,(4),ch);
} else {
if((state_val_34568 === (23))){
var state_34567__$1 = state_34567;
var statearr_34590_34631 = state_34567__$1;
(statearr_34590_34631[(2)] = null);

(statearr_34590_34631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (19))){
var inst_34498 = (state_34567[(8)]);
var inst_34548 = (state_34567[(11)]);
var inst_34550 = cljs.core.async.muxch_STAR_.call(null,inst_34548);
var state_34567__$1 = state_34567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34567__$1,(22),inst_34550,inst_34498);
} else {
if((state_val_34568 === (11))){
var inst_34522 = (state_34567[(10)]);
var inst_34508 = (state_34567[(16)]);
var inst_34522__$1 = cljs.core.seq.call(null,inst_34508);
var state_34567__$1 = (function (){var statearr_34591 = state_34567;
(statearr_34591[(10)] = inst_34522__$1);

return statearr_34591;
})();
if(inst_34522__$1){
var statearr_34592_34632 = state_34567__$1;
(statearr_34592_34632[(1)] = (13));

} else {
var statearr_34593_34633 = state_34567__$1;
(statearr_34593_34633[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (9))){
var inst_34544 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
var statearr_34594_34634 = state_34567__$1;
(statearr_34594_34634[(2)] = inst_34544);

(statearr_34594_34634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (5))){
var inst_34505 = cljs.core.deref.call(null,mults);
var inst_34506 = cljs.core.vals.call(null,inst_34505);
var inst_34507 = cljs.core.seq.call(null,inst_34506);
var inst_34508 = inst_34507;
var inst_34509 = null;
var inst_34510 = (0);
var inst_34511 = (0);
var state_34567__$1 = (function (){var statearr_34595 = state_34567;
(statearr_34595[(12)] = inst_34509);

(statearr_34595[(14)] = inst_34510);

(statearr_34595[(15)] = inst_34511);

(statearr_34595[(16)] = inst_34508);

return statearr_34595;
})();
var statearr_34596_34635 = state_34567__$1;
(statearr_34596_34635[(2)] = null);

(statearr_34596_34635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (14))){
var state_34567__$1 = state_34567;
var statearr_34600_34636 = state_34567__$1;
(statearr_34600_34636[(2)] = null);

(statearr_34600_34636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (16))){
var inst_34522 = (state_34567[(10)]);
var inst_34526 = cljs.core.chunk_first.call(null,inst_34522);
var inst_34527 = cljs.core.chunk_rest.call(null,inst_34522);
var inst_34528 = cljs.core.count.call(null,inst_34526);
var inst_34508 = inst_34527;
var inst_34509 = inst_34526;
var inst_34510 = inst_34528;
var inst_34511 = (0);
var state_34567__$1 = (function (){var statearr_34601 = state_34567;
(statearr_34601[(12)] = inst_34509);

(statearr_34601[(14)] = inst_34510);

(statearr_34601[(15)] = inst_34511);

(statearr_34601[(16)] = inst_34508);

return statearr_34601;
})();
var statearr_34602_34637 = state_34567__$1;
(statearr_34602_34637[(2)] = null);

(statearr_34602_34637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (10))){
var inst_34509 = (state_34567[(12)]);
var inst_34510 = (state_34567[(14)]);
var inst_34511 = (state_34567[(15)]);
var inst_34508 = (state_34567[(16)]);
var inst_34516 = cljs.core._nth.call(null,inst_34509,inst_34511);
var inst_34517 = cljs.core.async.muxch_STAR_.call(null,inst_34516);
var inst_34518 = cljs.core.async.close_BANG_.call(null,inst_34517);
var inst_34519 = (inst_34511 + (1));
var tmp34597 = inst_34509;
var tmp34598 = inst_34510;
var tmp34599 = inst_34508;
var inst_34508__$1 = tmp34599;
var inst_34509__$1 = tmp34597;
var inst_34510__$1 = tmp34598;
var inst_34511__$1 = inst_34519;
var state_34567__$1 = (function (){var statearr_34603 = state_34567;
(statearr_34603[(12)] = inst_34509__$1);

(statearr_34603[(14)] = inst_34510__$1);

(statearr_34603[(17)] = inst_34518);

(statearr_34603[(15)] = inst_34511__$1);

(statearr_34603[(16)] = inst_34508__$1);

return statearr_34603;
})();
var statearr_34604_34638 = state_34567__$1;
(statearr_34604_34638[(2)] = null);

(statearr_34604_34638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (18))){
var inst_34537 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
var statearr_34605_34639 = state_34567__$1;
(statearr_34605_34639[(2)] = inst_34537);

(statearr_34605_34639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (8))){
var inst_34510 = (state_34567[(14)]);
var inst_34511 = (state_34567[(15)]);
var inst_34513 = (inst_34511 < inst_34510);
var inst_34514 = inst_34513;
var state_34567__$1 = state_34567;
if(cljs.core.truth_(inst_34514)){
var statearr_34606_34640 = state_34567__$1;
(statearr_34606_34640[(1)] = (10));

} else {
var statearr_34607_34641 = state_34567__$1;
(statearr_34607_34641[(1)] = (11));

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
});})(c__31515__auto___34613,mults,ensure_mult,p))
;
return ((function (switch__31348__auto__,c__31515__auto___34613,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31349__auto__ = null;
var cljs$core$async$state_machine__31349__auto____0 = (function (){
var statearr_34608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34608[(0)] = cljs$core$async$state_machine__31349__auto__);

(statearr_34608[(1)] = (1));

return statearr_34608;
});
var cljs$core$async$state_machine__31349__auto____1 = (function (state_34567){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_34567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e34609){if((e34609 instanceof Object)){
var ex__31352__auto__ = e34609;
var statearr_34610_34642 = state_34567;
(statearr_34610_34642[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34643 = state_34567;
state_34567 = G__34643;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$state_machine__31349__auto__ = function(state_34567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31349__auto____1.call(this,state_34567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31349__auto____0;
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31349__auto____1;
return cljs$core$async$state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___34613,mults,ensure_mult,p))
})();
var state__31517__auto__ = (function (){var statearr_34611 = f__31516__auto__.call(null);
(statearr_34611[(6)] = c__31515__auto___34613);

return statearr_34611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___34613,mults,ensure_mult,p))
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
var G__34645 = arguments.length;
switch (G__34645) {
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
var G__34648 = arguments.length;
switch (G__34648) {
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
var G__34651 = arguments.length;
switch (G__34651) {
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
var c__31515__auto___34718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___34718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___34718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34690){
var state_val_34691 = (state_34690[(1)]);
if((state_val_34691 === (7))){
var state_34690__$1 = state_34690;
var statearr_34692_34719 = state_34690__$1;
(statearr_34692_34719[(2)] = null);

(statearr_34692_34719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (1))){
var state_34690__$1 = state_34690;
var statearr_34693_34720 = state_34690__$1;
(statearr_34693_34720[(2)] = null);

(statearr_34693_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (4))){
var inst_34654 = (state_34690[(7)]);
var inst_34656 = (inst_34654 < cnt);
var state_34690__$1 = state_34690;
if(cljs.core.truth_(inst_34656)){
var statearr_34694_34721 = state_34690__$1;
(statearr_34694_34721[(1)] = (6));

} else {
var statearr_34695_34722 = state_34690__$1;
(statearr_34695_34722[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (15))){
var inst_34686 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34696_34723 = state_34690__$1;
(statearr_34696_34723[(2)] = inst_34686);

(statearr_34696_34723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (13))){
var inst_34679 = cljs.core.async.close_BANG_.call(null,out);
var state_34690__$1 = state_34690;
var statearr_34697_34724 = state_34690__$1;
(statearr_34697_34724[(2)] = inst_34679);

(statearr_34697_34724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (6))){
var state_34690__$1 = state_34690;
var statearr_34698_34725 = state_34690__$1;
(statearr_34698_34725[(2)] = null);

(statearr_34698_34725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (3))){
var inst_34688 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34690__$1,inst_34688);
} else {
if((state_val_34691 === (12))){
var inst_34676 = (state_34690[(8)]);
var inst_34676__$1 = (state_34690[(2)]);
var inst_34677 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34676__$1);
var state_34690__$1 = (function (){var statearr_34699 = state_34690;
(statearr_34699[(8)] = inst_34676__$1);

return statearr_34699;
})();
if(cljs.core.truth_(inst_34677)){
var statearr_34700_34726 = state_34690__$1;
(statearr_34700_34726[(1)] = (13));

} else {
var statearr_34701_34727 = state_34690__$1;
(statearr_34701_34727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (2))){
var inst_34653 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34654 = (0);
var state_34690__$1 = (function (){var statearr_34702 = state_34690;
(statearr_34702[(7)] = inst_34654);

(statearr_34702[(9)] = inst_34653);

return statearr_34702;
})();
var statearr_34703_34728 = state_34690__$1;
(statearr_34703_34728[(2)] = null);

(statearr_34703_34728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (11))){
var inst_34654 = (state_34690[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34690,(10),Object,null,(9));
var inst_34663 = chs__$1.call(null,inst_34654);
var inst_34664 = done.call(null,inst_34654);
var inst_34665 = cljs.core.async.take_BANG_.call(null,inst_34663,inst_34664);
var state_34690__$1 = state_34690;
var statearr_34704_34729 = state_34690__$1;
(statearr_34704_34729[(2)] = inst_34665);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34690__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (9))){
var inst_34654 = (state_34690[(7)]);
var inst_34667 = (state_34690[(2)]);
var inst_34668 = (inst_34654 + (1));
var inst_34654__$1 = inst_34668;
var state_34690__$1 = (function (){var statearr_34705 = state_34690;
(statearr_34705[(7)] = inst_34654__$1);

(statearr_34705[(10)] = inst_34667);

return statearr_34705;
})();
var statearr_34706_34730 = state_34690__$1;
(statearr_34706_34730[(2)] = null);

(statearr_34706_34730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (5))){
var inst_34674 = (state_34690[(2)]);
var state_34690__$1 = (function (){var statearr_34707 = state_34690;
(statearr_34707[(11)] = inst_34674);

return statearr_34707;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34690__$1,(12),dchan);
} else {
if((state_val_34691 === (14))){
var inst_34676 = (state_34690[(8)]);
var inst_34681 = cljs.core.apply.call(null,f,inst_34676);
var state_34690__$1 = state_34690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34690__$1,(16),out,inst_34681);
} else {
if((state_val_34691 === (16))){
var inst_34683 = (state_34690[(2)]);
var state_34690__$1 = (function (){var statearr_34708 = state_34690;
(statearr_34708[(12)] = inst_34683);

return statearr_34708;
})();
var statearr_34709_34731 = state_34690__$1;
(statearr_34709_34731[(2)] = null);

(statearr_34709_34731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (10))){
var inst_34658 = (state_34690[(2)]);
var inst_34659 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34690__$1 = (function (){var statearr_34710 = state_34690;
(statearr_34710[(13)] = inst_34658);

return statearr_34710;
})();
var statearr_34711_34732 = state_34690__$1;
(statearr_34711_34732[(2)] = inst_34659);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34690__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (8))){
var inst_34672 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34712_34733 = state_34690__$1;
(statearr_34712_34733[(2)] = inst_34672);

(statearr_34712_34733[(1)] = (5));


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
});})(c__31515__auto___34718,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31348__auto__,c__31515__auto___34718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31349__auto__ = null;
var cljs$core$async$state_machine__31349__auto____0 = (function (){
var statearr_34713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34713[(0)] = cljs$core$async$state_machine__31349__auto__);

(statearr_34713[(1)] = (1));

return statearr_34713;
});
var cljs$core$async$state_machine__31349__auto____1 = (function (state_34690){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_34690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e34714){if((e34714 instanceof Object)){
var ex__31352__auto__ = e34714;
var statearr_34715_34734 = state_34690;
(statearr_34715_34734[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34735 = state_34690;
state_34690 = G__34735;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$state_machine__31349__auto__ = function(state_34690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31349__auto____1.call(this,state_34690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31349__auto____0;
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31349__auto____1;
return cljs$core$async$state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___34718,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31517__auto__ = (function (){var statearr_34716 = f__31516__auto__.call(null);
(statearr_34716[(6)] = c__31515__auto___34718);

return statearr_34716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___34718,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34738 = arguments.length;
switch (G__34738) {
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
var c__31515__auto___34792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___34792,out){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___34792,out){
return (function (state_34770){
var state_val_34771 = (state_34770[(1)]);
if((state_val_34771 === (7))){
var inst_34750 = (state_34770[(7)]);
var inst_34749 = (state_34770[(8)]);
var inst_34749__$1 = (state_34770[(2)]);
var inst_34750__$1 = cljs.core.nth.call(null,inst_34749__$1,(0),null);
var inst_34751 = cljs.core.nth.call(null,inst_34749__$1,(1),null);
var inst_34752 = (inst_34750__$1 == null);
var state_34770__$1 = (function (){var statearr_34772 = state_34770;
(statearr_34772[(9)] = inst_34751);

(statearr_34772[(7)] = inst_34750__$1);

(statearr_34772[(8)] = inst_34749__$1);

return statearr_34772;
})();
if(cljs.core.truth_(inst_34752)){
var statearr_34773_34793 = state_34770__$1;
(statearr_34773_34793[(1)] = (8));

} else {
var statearr_34774_34794 = state_34770__$1;
(statearr_34774_34794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34771 === (1))){
var inst_34739 = cljs.core.vec.call(null,chs);
var inst_34740 = inst_34739;
var state_34770__$1 = (function (){var statearr_34775 = state_34770;
(statearr_34775[(10)] = inst_34740);

return statearr_34775;
})();
var statearr_34776_34795 = state_34770__$1;
(statearr_34776_34795[(2)] = null);

(statearr_34776_34795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34771 === (4))){
var inst_34740 = (state_34770[(10)]);
var state_34770__$1 = state_34770;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34770__$1,(7),inst_34740);
} else {
if((state_val_34771 === (6))){
var inst_34766 = (state_34770[(2)]);
var state_34770__$1 = state_34770;
var statearr_34777_34796 = state_34770__$1;
(statearr_34777_34796[(2)] = inst_34766);

(statearr_34777_34796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34771 === (3))){
var inst_34768 = (state_34770[(2)]);
var state_34770__$1 = state_34770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34770__$1,inst_34768);
} else {
if((state_val_34771 === (2))){
var inst_34740 = (state_34770[(10)]);
var inst_34742 = cljs.core.count.call(null,inst_34740);
var inst_34743 = (inst_34742 > (0));
var state_34770__$1 = state_34770;
if(cljs.core.truth_(inst_34743)){
var statearr_34779_34797 = state_34770__$1;
(statearr_34779_34797[(1)] = (4));

} else {
var statearr_34780_34798 = state_34770__$1;
(statearr_34780_34798[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34771 === (11))){
var inst_34740 = (state_34770[(10)]);
var inst_34759 = (state_34770[(2)]);
var tmp34778 = inst_34740;
var inst_34740__$1 = tmp34778;
var state_34770__$1 = (function (){var statearr_34781 = state_34770;
(statearr_34781[(10)] = inst_34740__$1);

(statearr_34781[(11)] = inst_34759);

return statearr_34781;
})();
var statearr_34782_34799 = state_34770__$1;
(statearr_34782_34799[(2)] = null);

(statearr_34782_34799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34771 === (9))){
var inst_34750 = (state_34770[(7)]);
var state_34770__$1 = state_34770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34770__$1,(11),out,inst_34750);
} else {
if((state_val_34771 === (5))){
var inst_34764 = cljs.core.async.close_BANG_.call(null,out);
var state_34770__$1 = state_34770;
var statearr_34783_34800 = state_34770__$1;
(statearr_34783_34800[(2)] = inst_34764);

(statearr_34783_34800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34771 === (10))){
var inst_34762 = (state_34770[(2)]);
var state_34770__$1 = state_34770;
var statearr_34784_34801 = state_34770__$1;
(statearr_34784_34801[(2)] = inst_34762);

(statearr_34784_34801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34771 === (8))){
var inst_34751 = (state_34770[(9)]);
var inst_34740 = (state_34770[(10)]);
var inst_34750 = (state_34770[(7)]);
var inst_34749 = (state_34770[(8)]);
var inst_34754 = (function (){var cs = inst_34740;
var vec__34745 = inst_34749;
var v = inst_34750;
var c = inst_34751;
return ((function (cs,vec__34745,v,c,inst_34751,inst_34740,inst_34750,inst_34749,state_val_34771,c__31515__auto___34792,out){
return (function (p1__34736_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34736_SHARP_);
});
;})(cs,vec__34745,v,c,inst_34751,inst_34740,inst_34750,inst_34749,state_val_34771,c__31515__auto___34792,out))
})();
var inst_34755 = cljs.core.filterv.call(null,inst_34754,inst_34740);
var inst_34740__$1 = inst_34755;
var state_34770__$1 = (function (){var statearr_34785 = state_34770;
(statearr_34785[(10)] = inst_34740__$1);

return statearr_34785;
})();
var statearr_34786_34802 = state_34770__$1;
(statearr_34786_34802[(2)] = null);

(statearr_34786_34802[(1)] = (2));


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
});})(c__31515__auto___34792,out))
;
return ((function (switch__31348__auto__,c__31515__auto___34792,out){
return (function() {
var cljs$core$async$state_machine__31349__auto__ = null;
var cljs$core$async$state_machine__31349__auto____0 = (function (){
var statearr_34787 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34787[(0)] = cljs$core$async$state_machine__31349__auto__);

(statearr_34787[(1)] = (1));

return statearr_34787;
});
var cljs$core$async$state_machine__31349__auto____1 = (function (state_34770){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_34770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e34788){if((e34788 instanceof Object)){
var ex__31352__auto__ = e34788;
var statearr_34789_34803 = state_34770;
(statearr_34789_34803[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34804 = state_34770;
state_34770 = G__34804;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$state_machine__31349__auto__ = function(state_34770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31349__auto____1.call(this,state_34770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31349__auto____0;
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31349__auto____1;
return cljs$core$async$state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___34792,out))
})();
var state__31517__auto__ = (function (){var statearr_34790 = f__31516__auto__.call(null);
(statearr_34790[(6)] = c__31515__auto___34792);

return statearr_34790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___34792,out))
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
var G__34806 = arguments.length;
switch (G__34806) {
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
var c__31515__auto___34851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___34851,out){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___34851,out){
return (function (state_34830){
var state_val_34831 = (state_34830[(1)]);
if((state_val_34831 === (7))){
var inst_34812 = (state_34830[(7)]);
var inst_34812__$1 = (state_34830[(2)]);
var inst_34813 = (inst_34812__$1 == null);
var inst_34814 = cljs.core.not.call(null,inst_34813);
var state_34830__$1 = (function (){var statearr_34832 = state_34830;
(statearr_34832[(7)] = inst_34812__$1);

return statearr_34832;
})();
if(inst_34814){
var statearr_34833_34852 = state_34830__$1;
(statearr_34833_34852[(1)] = (8));

} else {
var statearr_34834_34853 = state_34830__$1;
(statearr_34834_34853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (1))){
var inst_34807 = (0);
var state_34830__$1 = (function (){var statearr_34835 = state_34830;
(statearr_34835[(8)] = inst_34807);

return statearr_34835;
})();
var statearr_34836_34854 = state_34830__$1;
(statearr_34836_34854[(2)] = null);

(statearr_34836_34854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (4))){
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34830__$1,(7),ch);
} else {
if((state_val_34831 === (6))){
var inst_34825 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34837_34855 = state_34830__$1;
(statearr_34837_34855[(2)] = inst_34825);

(statearr_34837_34855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (3))){
var inst_34827 = (state_34830[(2)]);
var inst_34828 = cljs.core.async.close_BANG_.call(null,out);
var state_34830__$1 = (function (){var statearr_34838 = state_34830;
(statearr_34838[(9)] = inst_34827);

return statearr_34838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34830__$1,inst_34828);
} else {
if((state_val_34831 === (2))){
var inst_34807 = (state_34830[(8)]);
var inst_34809 = (inst_34807 < n);
var state_34830__$1 = state_34830;
if(cljs.core.truth_(inst_34809)){
var statearr_34839_34856 = state_34830__$1;
(statearr_34839_34856[(1)] = (4));

} else {
var statearr_34840_34857 = state_34830__$1;
(statearr_34840_34857[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (11))){
var inst_34807 = (state_34830[(8)]);
var inst_34817 = (state_34830[(2)]);
var inst_34818 = (inst_34807 + (1));
var inst_34807__$1 = inst_34818;
var state_34830__$1 = (function (){var statearr_34841 = state_34830;
(statearr_34841[(8)] = inst_34807__$1);

(statearr_34841[(10)] = inst_34817);

return statearr_34841;
})();
var statearr_34842_34858 = state_34830__$1;
(statearr_34842_34858[(2)] = null);

(statearr_34842_34858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (9))){
var state_34830__$1 = state_34830;
var statearr_34843_34859 = state_34830__$1;
(statearr_34843_34859[(2)] = null);

(statearr_34843_34859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (5))){
var state_34830__$1 = state_34830;
var statearr_34844_34860 = state_34830__$1;
(statearr_34844_34860[(2)] = null);

(statearr_34844_34860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (10))){
var inst_34822 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34845_34861 = state_34830__$1;
(statearr_34845_34861[(2)] = inst_34822);

(statearr_34845_34861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (8))){
var inst_34812 = (state_34830[(7)]);
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34830__$1,(11),out,inst_34812);
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
});})(c__31515__auto___34851,out))
;
return ((function (switch__31348__auto__,c__31515__auto___34851,out){
return (function() {
var cljs$core$async$state_machine__31349__auto__ = null;
var cljs$core$async$state_machine__31349__auto____0 = (function (){
var statearr_34846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34846[(0)] = cljs$core$async$state_machine__31349__auto__);

(statearr_34846[(1)] = (1));

return statearr_34846;
});
var cljs$core$async$state_machine__31349__auto____1 = (function (state_34830){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_34830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e34847){if((e34847 instanceof Object)){
var ex__31352__auto__ = e34847;
var statearr_34848_34862 = state_34830;
(statearr_34848_34862[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34863 = state_34830;
state_34830 = G__34863;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$state_machine__31349__auto__ = function(state_34830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31349__auto____1.call(this,state_34830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31349__auto____0;
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31349__auto____1;
return cljs$core$async$state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___34851,out))
})();
var state__31517__auto__ = (function (){var statearr_34849 = f__31516__auto__.call(null);
(statearr_34849[(6)] = c__31515__auto___34851);

return statearr_34849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___34851,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34865 = (function (f,ch,meta34866){
this.f = f;
this.ch = ch;
this.meta34866 = meta34866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34867,meta34866__$1){
var self__ = this;
var _34867__$1 = this;
return (new cljs.core.async.t_cljs$core$async34865(self__.f,self__.ch,meta34866__$1));
});

cljs.core.async.t_cljs$core$async34865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34867){
var self__ = this;
var _34867__$1 = this;
return self__.meta34866;
});

cljs.core.async.t_cljs$core$async34865.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34865.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34865.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34868 = (function (f,ch,meta34866,_,fn1,meta34869){
this.f = f;
this.ch = ch;
this.meta34866 = meta34866;
this._ = _;
this.fn1 = fn1;
this.meta34869 = meta34869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34870,meta34869__$1){
var self__ = this;
var _34870__$1 = this;
return (new cljs.core.async.t_cljs$core$async34868(self__.f,self__.ch,self__.meta34866,self__._,self__.fn1,meta34869__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34870){
var self__ = this;
var _34870__$1 = this;
return self__.meta34869;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34868.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34868.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34864_SHARP_){
return f1.call(null,(((p1__34864_SHARP_ == null))?null:self__.f.call(null,p1__34864_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34868.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34866","meta34866",2145024196,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34865","cljs.core.async/t_cljs$core$async34865",2082632442,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34869","meta34869",-644331941,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34868";

cljs.core.async.t_cljs$core$async34868.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t_cljs$core$async34868");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34868.
 */
cljs.core.async.__GT_t_cljs$core$async34868 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34868(f__$1,ch__$1,meta34866__$1,___$2,fn1__$1,meta34869){
return (new cljs.core.async.t_cljs$core$async34868(f__$1,ch__$1,meta34866__$1,___$2,fn1__$1,meta34869));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34868(self__.f,self__.ch,self__.meta34866,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17801__auto__ = ret;
if(cljs.core.truth_(and__17801__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__17801__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34865.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34866","meta34866",2145024196,null)], null);
});

cljs.core.async.t_cljs$core$async34865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34865";

cljs.core.async.t_cljs$core$async34865.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t_cljs$core$async34865");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34865.
 */
cljs.core.async.__GT_t_cljs$core$async34865 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34865(f__$1,ch__$1,meta34866){
return (new cljs.core.async.t_cljs$core$async34865(f__$1,ch__$1,meta34866));
});

}

return (new cljs.core.async.t_cljs$core$async34865(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34871 = (function (f,ch,meta34872){
this.f = f;
this.ch = ch;
this.meta34872 = meta34872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34873,meta34872__$1){
var self__ = this;
var _34873__$1 = this;
return (new cljs.core.async.t_cljs$core$async34871(self__.f,self__.ch,meta34872__$1));
});

cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34873){
var self__ = this;
var _34873__$1 = this;
return self__.meta34872;
});

cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34872","meta34872",1825908100,null)], null);
});

cljs.core.async.t_cljs$core$async34871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34871";

cljs.core.async.t_cljs$core$async34871.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t_cljs$core$async34871");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34871.
 */
cljs.core.async.__GT_t_cljs$core$async34871 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34871(f__$1,ch__$1,meta34872){
return (new cljs.core.async.t_cljs$core$async34871(f__$1,ch__$1,meta34872));
});

}

return (new cljs.core.async.t_cljs$core$async34871(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async34874 = (function (p,ch,meta34875){
this.p = p;
this.ch = ch;
this.meta34875 = meta34875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34876,meta34875__$1){
var self__ = this;
var _34876__$1 = this;
return (new cljs.core.async.t_cljs$core$async34874(self__.p,self__.ch,meta34875__$1));
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
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34875","meta34875",-707667394,null)], null);
});

cljs.core.async.t_cljs$core$async34874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34874";

cljs.core.async.t_cljs$core$async34874.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.core.async/t_cljs$core$async34874");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34874.
 */
cljs.core.async.__GT_t_cljs$core$async34874 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34874(p__$1,ch__$1,meta34875){
return (new cljs.core.async.t_cljs$core$async34874(p__$1,ch__$1,meta34875));
});

}

return (new cljs.core.async.t_cljs$core$async34874(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34878 = arguments.length;
switch (G__34878) {
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
var c__31515__auto___34918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___34918,out){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___34918,out){
return (function (state_34899){
var state_val_34900 = (state_34899[(1)]);
if((state_val_34900 === (7))){
var inst_34895 = (state_34899[(2)]);
var state_34899__$1 = state_34899;
var statearr_34901_34919 = state_34899__$1;
(statearr_34901_34919[(2)] = inst_34895);

(statearr_34901_34919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (1))){
var state_34899__$1 = state_34899;
var statearr_34902_34920 = state_34899__$1;
(statearr_34902_34920[(2)] = null);

(statearr_34902_34920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (4))){
var inst_34881 = (state_34899[(7)]);
var inst_34881__$1 = (state_34899[(2)]);
var inst_34882 = (inst_34881__$1 == null);
var state_34899__$1 = (function (){var statearr_34903 = state_34899;
(statearr_34903[(7)] = inst_34881__$1);

return statearr_34903;
})();
if(cljs.core.truth_(inst_34882)){
var statearr_34904_34921 = state_34899__$1;
(statearr_34904_34921[(1)] = (5));

} else {
var statearr_34905_34922 = state_34899__$1;
(statearr_34905_34922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (6))){
var inst_34881 = (state_34899[(7)]);
var inst_34886 = p.call(null,inst_34881);
var state_34899__$1 = state_34899;
if(cljs.core.truth_(inst_34886)){
var statearr_34906_34923 = state_34899__$1;
(statearr_34906_34923[(1)] = (8));

} else {
var statearr_34907_34924 = state_34899__$1;
(statearr_34907_34924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (3))){
var inst_34897 = (state_34899[(2)]);
var state_34899__$1 = state_34899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34899__$1,inst_34897);
} else {
if((state_val_34900 === (2))){
var state_34899__$1 = state_34899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34899__$1,(4),ch);
} else {
if((state_val_34900 === (11))){
var inst_34889 = (state_34899[(2)]);
var state_34899__$1 = state_34899;
var statearr_34908_34925 = state_34899__$1;
(statearr_34908_34925[(2)] = inst_34889);

(statearr_34908_34925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (9))){
var state_34899__$1 = state_34899;
var statearr_34909_34926 = state_34899__$1;
(statearr_34909_34926[(2)] = null);

(statearr_34909_34926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (5))){
var inst_34884 = cljs.core.async.close_BANG_.call(null,out);
var state_34899__$1 = state_34899;
var statearr_34910_34927 = state_34899__$1;
(statearr_34910_34927[(2)] = inst_34884);

(statearr_34910_34927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (10))){
var inst_34892 = (state_34899[(2)]);
var state_34899__$1 = (function (){var statearr_34911 = state_34899;
(statearr_34911[(8)] = inst_34892);

return statearr_34911;
})();
var statearr_34912_34928 = state_34899__$1;
(statearr_34912_34928[(2)] = null);

(statearr_34912_34928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34900 === (8))){
var inst_34881 = (state_34899[(7)]);
var state_34899__$1 = state_34899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34899__$1,(11),out,inst_34881);
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
});})(c__31515__auto___34918,out))
;
return ((function (switch__31348__auto__,c__31515__auto___34918,out){
return (function() {
var cljs$core$async$state_machine__31349__auto__ = null;
var cljs$core$async$state_machine__31349__auto____0 = (function (){
var statearr_34913 = [null,null,null,null,null,null,null,null,null];
(statearr_34913[(0)] = cljs$core$async$state_machine__31349__auto__);

(statearr_34913[(1)] = (1));

return statearr_34913;
});
var cljs$core$async$state_machine__31349__auto____1 = (function (state_34899){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_34899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e34914){if((e34914 instanceof Object)){
var ex__31352__auto__ = e34914;
var statearr_34915_34929 = state_34899;
(statearr_34915_34929[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34930 = state_34899;
state_34899 = G__34930;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$state_machine__31349__auto__ = function(state_34899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31349__auto____1.call(this,state_34899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31349__auto____0;
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31349__auto____1;
return cljs$core$async$state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___34918,out))
})();
var state__31517__auto__ = (function (){var statearr_34916 = f__31516__auto__.call(null);
(statearr_34916[(6)] = c__31515__auto___34918);

return statearr_34916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___34918,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34932 = arguments.length;
switch (G__34932) {
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
var c__31515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto__){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto__){
return (function (state_34995){
var state_val_34996 = (state_34995[(1)]);
if((state_val_34996 === (7))){
var inst_34991 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_34997_35035 = state_34995__$1;
(statearr_34997_35035[(2)] = inst_34991);

(statearr_34997_35035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (20))){
var inst_34961 = (state_34995[(7)]);
var inst_34972 = (state_34995[(2)]);
var inst_34973 = cljs.core.next.call(null,inst_34961);
var inst_34947 = inst_34973;
var inst_34948 = null;
var inst_34949 = (0);
var inst_34950 = (0);
var state_34995__$1 = (function (){var statearr_34998 = state_34995;
(statearr_34998[(8)] = inst_34972);

(statearr_34998[(9)] = inst_34947);

(statearr_34998[(10)] = inst_34950);

(statearr_34998[(11)] = inst_34949);

(statearr_34998[(12)] = inst_34948);

return statearr_34998;
})();
var statearr_34999_35036 = state_34995__$1;
(statearr_34999_35036[(2)] = null);

(statearr_34999_35036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (1))){
var state_34995__$1 = state_34995;
var statearr_35000_35037 = state_34995__$1;
(statearr_35000_35037[(2)] = null);

(statearr_35000_35037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (4))){
var inst_34936 = (state_34995[(13)]);
var inst_34936__$1 = (state_34995[(2)]);
var inst_34937 = (inst_34936__$1 == null);
var state_34995__$1 = (function (){var statearr_35001 = state_34995;
(statearr_35001[(13)] = inst_34936__$1);

return statearr_35001;
})();
if(cljs.core.truth_(inst_34937)){
var statearr_35002_35038 = state_34995__$1;
(statearr_35002_35038[(1)] = (5));

} else {
var statearr_35003_35039 = state_34995__$1;
(statearr_35003_35039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (15))){
var state_34995__$1 = state_34995;
var statearr_35007_35040 = state_34995__$1;
(statearr_35007_35040[(2)] = null);

(statearr_35007_35040[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (21))){
var state_34995__$1 = state_34995;
var statearr_35008_35041 = state_34995__$1;
(statearr_35008_35041[(2)] = null);

(statearr_35008_35041[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (13))){
var inst_34947 = (state_34995[(9)]);
var inst_34950 = (state_34995[(10)]);
var inst_34949 = (state_34995[(11)]);
var inst_34948 = (state_34995[(12)]);
var inst_34957 = (state_34995[(2)]);
var inst_34958 = (inst_34950 + (1));
var tmp35004 = inst_34947;
var tmp35005 = inst_34949;
var tmp35006 = inst_34948;
var inst_34947__$1 = tmp35004;
var inst_34948__$1 = tmp35006;
var inst_34949__$1 = tmp35005;
var inst_34950__$1 = inst_34958;
var state_34995__$1 = (function (){var statearr_35009 = state_34995;
(statearr_35009[(9)] = inst_34947__$1);

(statearr_35009[(10)] = inst_34950__$1);

(statearr_35009[(14)] = inst_34957);

(statearr_35009[(11)] = inst_34949__$1);

(statearr_35009[(12)] = inst_34948__$1);

return statearr_35009;
})();
var statearr_35010_35042 = state_34995__$1;
(statearr_35010_35042[(2)] = null);

(statearr_35010_35042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (22))){
var state_34995__$1 = state_34995;
var statearr_35011_35043 = state_34995__$1;
(statearr_35011_35043[(2)] = null);

(statearr_35011_35043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (6))){
var inst_34936 = (state_34995[(13)]);
var inst_34945 = f.call(null,inst_34936);
var inst_34946 = cljs.core.seq.call(null,inst_34945);
var inst_34947 = inst_34946;
var inst_34948 = null;
var inst_34949 = (0);
var inst_34950 = (0);
var state_34995__$1 = (function (){var statearr_35012 = state_34995;
(statearr_35012[(9)] = inst_34947);

(statearr_35012[(10)] = inst_34950);

(statearr_35012[(11)] = inst_34949);

(statearr_35012[(12)] = inst_34948);

return statearr_35012;
})();
var statearr_35013_35044 = state_34995__$1;
(statearr_35013_35044[(2)] = null);

(statearr_35013_35044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (17))){
var inst_34961 = (state_34995[(7)]);
var inst_34965 = cljs.core.chunk_first.call(null,inst_34961);
var inst_34966 = cljs.core.chunk_rest.call(null,inst_34961);
var inst_34967 = cljs.core.count.call(null,inst_34965);
var inst_34947 = inst_34966;
var inst_34948 = inst_34965;
var inst_34949 = inst_34967;
var inst_34950 = (0);
var state_34995__$1 = (function (){var statearr_35014 = state_34995;
(statearr_35014[(9)] = inst_34947);

(statearr_35014[(10)] = inst_34950);

(statearr_35014[(11)] = inst_34949);

(statearr_35014[(12)] = inst_34948);

return statearr_35014;
})();
var statearr_35015_35045 = state_34995__$1;
(statearr_35015_35045[(2)] = null);

(statearr_35015_35045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (3))){
var inst_34993 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34995__$1,inst_34993);
} else {
if((state_val_34996 === (12))){
var inst_34981 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35016_35046 = state_34995__$1;
(statearr_35016_35046[(2)] = inst_34981);

(statearr_35016_35046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (2))){
var state_34995__$1 = state_34995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34995__$1,(4),in$);
} else {
if((state_val_34996 === (23))){
var inst_34989 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35017_35047 = state_34995__$1;
(statearr_35017_35047[(2)] = inst_34989);

(statearr_35017_35047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (19))){
var inst_34976 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35018_35048 = state_34995__$1;
(statearr_35018_35048[(2)] = inst_34976);

(statearr_35018_35048[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (11))){
var inst_34947 = (state_34995[(9)]);
var inst_34961 = (state_34995[(7)]);
var inst_34961__$1 = cljs.core.seq.call(null,inst_34947);
var state_34995__$1 = (function (){var statearr_35019 = state_34995;
(statearr_35019[(7)] = inst_34961__$1);

return statearr_35019;
})();
if(inst_34961__$1){
var statearr_35020_35049 = state_34995__$1;
(statearr_35020_35049[(1)] = (14));

} else {
var statearr_35021_35050 = state_34995__$1;
(statearr_35021_35050[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (9))){
var inst_34983 = (state_34995[(2)]);
var inst_34984 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34995__$1 = (function (){var statearr_35022 = state_34995;
(statearr_35022[(15)] = inst_34983);

return statearr_35022;
})();
if(cljs.core.truth_(inst_34984)){
var statearr_35023_35051 = state_34995__$1;
(statearr_35023_35051[(1)] = (21));

} else {
var statearr_35024_35052 = state_34995__$1;
(statearr_35024_35052[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (5))){
var inst_34939 = cljs.core.async.close_BANG_.call(null,out);
var state_34995__$1 = state_34995;
var statearr_35025_35053 = state_34995__$1;
(statearr_35025_35053[(2)] = inst_34939);

(statearr_35025_35053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (14))){
var inst_34961 = (state_34995[(7)]);
var inst_34963 = cljs.core.chunked_seq_QMARK_.call(null,inst_34961);
var state_34995__$1 = state_34995;
if(inst_34963){
var statearr_35026_35054 = state_34995__$1;
(statearr_35026_35054[(1)] = (17));

} else {
var statearr_35027_35055 = state_34995__$1;
(statearr_35027_35055[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (16))){
var inst_34979 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35028_35056 = state_34995__$1;
(statearr_35028_35056[(2)] = inst_34979);

(statearr_35028_35056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (10))){
var inst_34950 = (state_34995[(10)]);
var inst_34948 = (state_34995[(12)]);
var inst_34955 = cljs.core._nth.call(null,inst_34948,inst_34950);
var state_34995__$1 = state_34995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34995__$1,(13),out,inst_34955);
} else {
if((state_val_34996 === (18))){
var inst_34961 = (state_34995[(7)]);
var inst_34970 = cljs.core.first.call(null,inst_34961);
var state_34995__$1 = state_34995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34995__$1,(20),out,inst_34970);
} else {
if((state_val_34996 === (8))){
var inst_34950 = (state_34995[(10)]);
var inst_34949 = (state_34995[(11)]);
var inst_34952 = (inst_34950 < inst_34949);
var inst_34953 = inst_34952;
var state_34995__$1 = state_34995;
if(cljs.core.truth_(inst_34953)){
var statearr_35029_35057 = state_34995__$1;
(statearr_35029_35057[(1)] = (10));

} else {
var statearr_35030_35058 = state_34995__$1;
(statearr_35030_35058[(1)] = (11));

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
});})(c__31515__auto__))
;
return ((function (switch__31348__auto__,c__31515__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31349__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31349__auto____0 = (function (){
var statearr_35031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35031[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31349__auto__);

(statearr_35031[(1)] = (1));

return statearr_35031;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31349__auto____1 = (function (state_34995){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_34995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e35032){if((e35032 instanceof Object)){
var ex__31352__auto__ = e35032;
var statearr_35033_35059 = state_34995;
(statearr_35033_35059[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35060 = state_34995;
state_34995 = G__35060;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31349__auto__ = function(state_34995){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31349__auto____1.call(this,state_34995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31349__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31349__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto__))
})();
var state__31517__auto__ = (function (){var statearr_35034 = f__31516__auto__.call(null);
(statearr_35034[(6)] = c__31515__auto__);

return statearr_35034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto__))
);

return c__31515__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35062 = arguments.length;
switch (G__35062) {
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
var G__35065 = arguments.length;
switch (G__35065) {
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
var G__35068 = arguments.length;
switch (G__35068) {
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
var c__31515__auto___35115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___35115,out){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___35115,out){
return (function (state_35092){
var state_val_35093 = (state_35092[(1)]);
if((state_val_35093 === (7))){
var inst_35087 = (state_35092[(2)]);
var state_35092__$1 = state_35092;
var statearr_35094_35116 = state_35092__$1;
(statearr_35094_35116[(2)] = inst_35087);

(statearr_35094_35116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (1))){
var inst_35069 = null;
var state_35092__$1 = (function (){var statearr_35095 = state_35092;
(statearr_35095[(7)] = inst_35069);

return statearr_35095;
})();
var statearr_35096_35117 = state_35092__$1;
(statearr_35096_35117[(2)] = null);

(statearr_35096_35117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (4))){
var inst_35072 = (state_35092[(8)]);
var inst_35072__$1 = (state_35092[(2)]);
var inst_35073 = (inst_35072__$1 == null);
var inst_35074 = cljs.core.not.call(null,inst_35073);
var state_35092__$1 = (function (){var statearr_35097 = state_35092;
(statearr_35097[(8)] = inst_35072__$1);

return statearr_35097;
})();
if(inst_35074){
var statearr_35098_35118 = state_35092__$1;
(statearr_35098_35118[(1)] = (5));

} else {
var statearr_35099_35119 = state_35092__$1;
(statearr_35099_35119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (6))){
var state_35092__$1 = state_35092;
var statearr_35100_35120 = state_35092__$1;
(statearr_35100_35120[(2)] = null);

(statearr_35100_35120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (3))){
var inst_35089 = (state_35092[(2)]);
var inst_35090 = cljs.core.async.close_BANG_.call(null,out);
var state_35092__$1 = (function (){var statearr_35101 = state_35092;
(statearr_35101[(9)] = inst_35089);

return statearr_35101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35092__$1,inst_35090);
} else {
if((state_val_35093 === (2))){
var state_35092__$1 = state_35092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35092__$1,(4),ch);
} else {
if((state_val_35093 === (11))){
var inst_35072 = (state_35092[(8)]);
var inst_35081 = (state_35092[(2)]);
var inst_35069 = inst_35072;
var state_35092__$1 = (function (){var statearr_35102 = state_35092;
(statearr_35102[(10)] = inst_35081);

(statearr_35102[(7)] = inst_35069);

return statearr_35102;
})();
var statearr_35103_35121 = state_35092__$1;
(statearr_35103_35121[(2)] = null);

(statearr_35103_35121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (9))){
var inst_35072 = (state_35092[(8)]);
var state_35092__$1 = state_35092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35092__$1,(11),out,inst_35072);
} else {
if((state_val_35093 === (5))){
var inst_35072 = (state_35092[(8)]);
var inst_35069 = (state_35092[(7)]);
var inst_35076 = cljs.core._EQ_.call(null,inst_35072,inst_35069);
var state_35092__$1 = state_35092;
if(inst_35076){
var statearr_35105_35122 = state_35092__$1;
(statearr_35105_35122[(1)] = (8));

} else {
var statearr_35106_35123 = state_35092__$1;
(statearr_35106_35123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (10))){
var inst_35084 = (state_35092[(2)]);
var state_35092__$1 = state_35092;
var statearr_35107_35124 = state_35092__$1;
(statearr_35107_35124[(2)] = inst_35084);

(statearr_35107_35124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (8))){
var inst_35069 = (state_35092[(7)]);
var tmp35104 = inst_35069;
var inst_35069__$1 = tmp35104;
var state_35092__$1 = (function (){var statearr_35108 = state_35092;
(statearr_35108[(7)] = inst_35069__$1);

return statearr_35108;
})();
var statearr_35109_35125 = state_35092__$1;
(statearr_35109_35125[(2)] = null);

(statearr_35109_35125[(1)] = (2));


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
});})(c__31515__auto___35115,out))
;
return ((function (switch__31348__auto__,c__31515__auto___35115,out){
return (function() {
var cljs$core$async$state_machine__31349__auto__ = null;
var cljs$core$async$state_machine__31349__auto____0 = (function (){
var statearr_35110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35110[(0)] = cljs$core$async$state_machine__31349__auto__);

(statearr_35110[(1)] = (1));

return statearr_35110;
});
var cljs$core$async$state_machine__31349__auto____1 = (function (state_35092){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_35092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e35111){if((e35111 instanceof Object)){
var ex__31352__auto__ = e35111;
var statearr_35112_35126 = state_35092;
(statearr_35112_35126[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35127 = state_35092;
state_35092 = G__35127;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$state_machine__31349__auto__ = function(state_35092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31349__auto____1.call(this,state_35092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31349__auto____0;
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31349__auto____1;
return cljs$core$async$state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___35115,out))
})();
var state__31517__auto__ = (function (){var statearr_35113 = f__31516__auto__.call(null);
(statearr_35113[(6)] = c__31515__auto___35115);

return statearr_35113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___35115,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35129 = arguments.length;
switch (G__35129) {
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
var c__31515__auto___35195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___35195,out){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___35195,out){
return (function (state_35167){
var state_val_35168 = (state_35167[(1)]);
if((state_val_35168 === (7))){
var inst_35163 = (state_35167[(2)]);
var state_35167__$1 = state_35167;
var statearr_35169_35196 = state_35167__$1;
(statearr_35169_35196[(2)] = inst_35163);

(statearr_35169_35196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (1))){
var inst_35130 = (new Array(n));
var inst_35131 = inst_35130;
var inst_35132 = (0);
var state_35167__$1 = (function (){var statearr_35170 = state_35167;
(statearr_35170[(7)] = inst_35131);

(statearr_35170[(8)] = inst_35132);

return statearr_35170;
})();
var statearr_35171_35197 = state_35167__$1;
(statearr_35171_35197[(2)] = null);

(statearr_35171_35197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (4))){
var inst_35135 = (state_35167[(9)]);
var inst_35135__$1 = (state_35167[(2)]);
var inst_35136 = (inst_35135__$1 == null);
var inst_35137 = cljs.core.not.call(null,inst_35136);
var state_35167__$1 = (function (){var statearr_35172 = state_35167;
(statearr_35172[(9)] = inst_35135__$1);

return statearr_35172;
})();
if(inst_35137){
var statearr_35173_35198 = state_35167__$1;
(statearr_35173_35198[(1)] = (5));

} else {
var statearr_35174_35199 = state_35167__$1;
(statearr_35174_35199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (15))){
var inst_35157 = (state_35167[(2)]);
var state_35167__$1 = state_35167;
var statearr_35175_35200 = state_35167__$1;
(statearr_35175_35200[(2)] = inst_35157);

(statearr_35175_35200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (13))){
var state_35167__$1 = state_35167;
var statearr_35176_35201 = state_35167__$1;
(statearr_35176_35201[(2)] = null);

(statearr_35176_35201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (6))){
var inst_35132 = (state_35167[(8)]);
var inst_35153 = (inst_35132 > (0));
var state_35167__$1 = state_35167;
if(cljs.core.truth_(inst_35153)){
var statearr_35177_35202 = state_35167__$1;
(statearr_35177_35202[(1)] = (12));

} else {
var statearr_35178_35203 = state_35167__$1;
(statearr_35178_35203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (3))){
var inst_35165 = (state_35167[(2)]);
var state_35167__$1 = state_35167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35167__$1,inst_35165);
} else {
if((state_val_35168 === (12))){
var inst_35131 = (state_35167[(7)]);
var inst_35155 = cljs.core.vec.call(null,inst_35131);
var state_35167__$1 = state_35167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35167__$1,(15),out,inst_35155);
} else {
if((state_val_35168 === (2))){
var state_35167__$1 = state_35167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35167__$1,(4),ch);
} else {
if((state_val_35168 === (11))){
var inst_35147 = (state_35167[(2)]);
var inst_35148 = (new Array(n));
var inst_35131 = inst_35148;
var inst_35132 = (0);
var state_35167__$1 = (function (){var statearr_35179 = state_35167;
(statearr_35179[(7)] = inst_35131);

(statearr_35179[(8)] = inst_35132);

(statearr_35179[(10)] = inst_35147);

return statearr_35179;
})();
var statearr_35180_35204 = state_35167__$1;
(statearr_35180_35204[(2)] = null);

(statearr_35180_35204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (9))){
var inst_35131 = (state_35167[(7)]);
var inst_35145 = cljs.core.vec.call(null,inst_35131);
var state_35167__$1 = state_35167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35167__$1,(11),out,inst_35145);
} else {
if((state_val_35168 === (5))){
var inst_35131 = (state_35167[(7)]);
var inst_35135 = (state_35167[(9)]);
var inst_35140 = (state_35167[(11)]);
var inst_35132 = (state_35167[(8)]);
var inst_35139 = (inst_35131[inst_35132] = inst_35135);
var inst_35140__$1 = (inst_35132 + (1));
var inst_35141 = (inst_35140__$1 < n);
var state_35167__$1 = (function (){var statearr_35181 = state_35167;
(statearr_35181[(12)] = inst_35139);

(statearr_35181[(11)] = inst_35140__$1);

return statearr_35181;
})();
if(cljs.core.truth_(inst_35141)){
var statearr_35182_35205 = state_35167__$1;
(statearr_35182_35205[(1)] = (8));

} else {
var statearr_35183_35206 = state_35167__$1;
(statearr_35183_35206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (14))){
var inst_35160 = (state_35167[(2)]);
var inst_35161 = cljs.core.async.close_BANG_.call(null,out);
var state_35167__$1 = (function (){var statearr_35185 = state_35167;
(statearr_35185[(13)] = inst_35160);

return statearr_35185;
})();
var statearr_35186_35207 = state_35167__$1;
(statearr_35186_35207[(2)] = inst_35161);

(statearr_35186_35207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (10))){
var inst_35151 = (state_35167[(2)]);
var state_35167__$1 = state_35167;
var statearr_35187_35208 = state_35167__$1;
(statearr_35187_35208[(2)] = inst_35151);

(statearr_35187_35208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35168 === (8))){
var inst_35131 = (state_35167[(7)]);
var inst_35140 = (state_35167[(11)]);
var tmp35184 = inst_35131;
var inst_35131__$1 = tmp35184;
var inst_35132 = inst_35140;
var state_35167__$1 = (function (){var statearr_35188 = state_35167;
(statearr_35188[(7)] = inst_35131__$1);

(statearr_35188[(8)] = inst_35132);

return statearr_35188;
})();
var statearr_35189_35209 = state_35167__$1;
(statearr_35189_35209[(2)] = null);

(statearr_35189_35209[(1)] = (2));


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
});})(c__31515__auto___35195,out))
;
return ((function (switch__31348__auto__,c__31515__auto___35195,out){
return (function() {
var cljs$core$async$state_machine__31349__auto__ = null;
var cljs$core$async$state_machine__31349__auto____0 = (function (){
var statearr_35190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35190[(0)] = cljs$core$async$state_machine__31349__auto__);

(statearr_35190[(1)] = (1));

return statearr_35190;
});
var cljs$core$async$state_machine__31349__auto____1 = (function (state_35167){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_35167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e35191){if((e35191 instanceof Object)){
var ex__31352__auto__ = e35191;
var statearr_35192_35210 = state_35167;
(statearr_35192_35210[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35211 = state_35167;
state_35167 = G__35211;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$state_machine__31349__auto__ = function(state_35167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31349__auto____1.call(this,state_35167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31349__auto____0;
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31349__auto____1;
return cljs$core$async$state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___35195,out))
})();
var state__31517__auto__ = (function (){var statearr_35193 = f__31516__auto__.call(null);
(statearr_35193[(6)] = c__31515__auto___35195);

return statearr_35193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___35195,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35213 = arguments.length;
switch (G__35213) {
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
var c__31515__auto___35283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31515__auto___35283,out){
return (function (){
var f__31516__auto__ = (function (){var switch__31348__auto__ = ((function (c__31515__auto___35283,out){
return (function (state_35255){
var state_val_35256 = (state_35255[(1)]);
if((state_val_35256 === (7))){
var inst_35251 = (state_35255[(2)]);
var state_35255__$1 = state_35255;
var statearr_35257_35284 = state_35255__$1;
(statearr_35257_35284[(2)] = inst_35251);

(statearr_35257_35284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (1))){
var inst_35214 = [];
var inst_35215 = inst_35214;
var inst_35216 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35255__$1 = (function (){var statearr_35258 = state_35255;
(statearr_35258[(7)] = inst_35215);

(statearr_35258[(8)] = inst_35216);

return statearr_35258;
})();
var statearr_35259_35285 = state_35255__$1;
(statearr_35259_35285[(2)] = null);

(statearr_35259_35285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (4))){
var inst_35219 = (state_35255[(9)]);
var inst_35219__$1 = (state_35255[(2)]);
var inst_35220 = (inst_35219__$1 == null);
var inst_35221 = cljs.core.not.call(null,inst_35220);
var state_35255__$1 = (function (){var statearr_35260 = state_35255;
(statearr_35260[(9)] = inst_35219__$1);

return statearr_35260;
})();
if(inst_35221){
var statearr_35261_35286 = state_35255__$1;
(statearr_35261_35286[(1)] = (5));

} else {
var statearr_35262_35287 = state_35255__$1;
(statearr_35262_35287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (15))){
var inst_35245 = (state_35255[(2)]);
var state_35255__$1 = state_35255;
var statearr_35263_35288 = state_35255__$1;
(statearr_35263_35288[(2)] = inst_35245);

(statearr_35263_35288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (13))){
var state_35255__$1 = state_35255;
var statearr_35264_35289 = state_35255__$1;
(statearr_35264_35289[(2)] = null);

(statearr_35264_35289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (6))){
var inst_35215 = (state_35255[(7)]);
var inst_35240 = inst_35215.length;
var inst_35241 = (inst_35240 > (0));
var state_35255__$1 = state_35255;
if(cljs.core.truth_(inst_35241)){
var statearr_35265_35290 = state_35255__$1;
(statearr_35265_35290[(1)] = (12));

} else {
var statearr_35266_35291 = state_35255__$1;
(statearr_35266_35291[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (3))){
var inst_35253 = (state_35255[(2)]);
var state_35255__$1 = state_35255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35255__$1,inst_35253);
} else {
if((state_val_35256 === (12))){
var inst_35215 = (state_35255[(7)]);
var inst_35243 = cljs.core.vec.call(null,inst_35215);
var state_35255__$1 = state_35255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35255__$1,(15),out,inst_35243);
} else {
if((state_val_35256 === (2))){
var state_35255__$1 = state_35255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35255__$1,(4),ch);
} else {
if((state_val_35256 === (11))){
var inst_35219 = (state_35255[(9)]);
var inst_35223 = (state_35255[(10)]);
var inst_35233 = (state_35255[(2)]);
var inst_35234 = [];
var inst_35235 = inst_35234.push(inst_35219);
var inst_35215 = inst_35234;
var inst_35216 = inst_35223;
var state_35255__$1 = (function (){var statearr_35267 = state_35255;
(statearr_35267[(7)] = inst_35215);

(statearr_35267[(11)] = inst_35235);

(statearr_35267[(12)] = inst_35233);

(statearr_35267[(8)] = inst_35216);

return statearr_35267;
})();
var statearr_35268_35292 = state_35255__$1;
(statearr_35268_35292[(2)] = null);

(statearr_35268_35292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (9))){
var inst_35215 = (state_35255[(7)]);
var inst_35231 = cljs.core.vec.call(null,inst_35215);
var state_35255__$1 = state_35255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35255__$1,(11),out,inst_35231);
} else {
if((state_val_35256 === (5))){
var inst_35219 = (state_35255[(9)]);
var inst_35223 = (state_35255[(10)]);
var inst_35216 = (state_35255[(8)]);
var inst_35223__$1 = f.call(null,inst_35219);
var inst_35224 = cljs.core._EQ_.call(null,inst_35223__$1,inst_35216);
var inst_35225 = cljs.core.keyword_identical_QMARK_.call(null,inst_35216,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35226 = ((inst_35224) || (inst_35225));
var state_35255__$1 = (function (){var statearr_35269 = state_35255;
(statearr_35269[(10)] = inst_35223__$1);

return statearr_35269;
})();
if(cljs.core.truth_(inst_35226)){
var statearr_35270_35293 = state_35255__$1;
(statearr_35270_35293[(1)] = (8));

} else {
var statearr_35271_35294 = state_35255__$1;
(statearr_35271_35294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (14))){
var inst_35248 = (state_35255[(2)]);
var inst_35249 = cljs.core.async.close_BANG_.call(null,out);
var state_35255__$1 = (function (){var statearr_35273 = state_35255;
(statearr_35273[(13)] = inst_35248);

return statearr_35273;
})();
var statearr_35274_35295 = state_35255__$1;
(statearr_35274_35295[(2)] = inst_35249);

(statearr_35274_35295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (10))){
var inst_35238 = (state_35255[(2)]);
var state_35255__$1 = state_35255;
var statearr_35275_35296 = state_35255__$1;
(statearr_35275_35296[(2)] = inst_35238);

(statearr_35275_35296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (8))){
var inst_35215 = (state_35255[(7)]);
var inst_35219 = (state_35255[(9)]);
var inst_35223 = (state_35255[(10)]);
var inst_35228 = inst_35215.push(inst_35219);
var tmp35272 = inst_35215;
var inst_35215__$1 = tmp35272;
var inst_35216 = inst_35223;
var state_35255__$1 = (function (){var statearr_35276 = state_35255;
(statearr_35276[(7)] = inst_35215__$1);

(statearr_35276[(14)] = inst_35228);

(statearr_35276[(8)] = inst_35216);

return statearr_35276;
})();
var statearr_35277_35297 = state_35255__$1;
(statearr_35277_35297[(2)] = null);

(statearr_35277_35297[(1)] = (2));


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
});})(c__31515__auto___35283,out))
;
return ((function (switch__31348__auto__,c__31515__auto___35283,out){
return (function() {
var cljs$core$async$state_machine__31349__auto__ = null;
var cljs$core$async$state_machine__31349__auto____0 = (function (){
var statearr_35278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35278[(0)] = cljs$core$async$state_machine__31349__auto__);

(statearr_35278[(1)] = (1));

return statearr_35278;
});
var cljs$core$async$state_machine__31349__auto____1 = (function (state_35255){
while(true){
var ret_value__31350__auto__ = (function (){try{while(true){
var result__31351__auto__ = switch__31348__auto__.call(null,state_35255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31351__auto__;
}
break;
}
}catch (e35279){if((e35279 instanceof Object)){
var ex__31352__auto__ = e35279;
var statearr_35280_35298 = state_35255;
(statearr_35280_35298[(5)] = ex__31352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35299 = state_35255;
state_35255 = G__35299;
continue;
} else {
return ret_value__31350__auto__;
}
break;
}
});
cljs$core$async$state_machine__31349__auto__ = function(state_35255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31349__auto____1.call(this,state_35255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31349__auto____0;
cljs$core$async$state_machine__31349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31349__auto____1;
return cljs$core$async$state_machine__31349__auto__;
})()
;})(switch__31348__auto__,c__31515__auto___35283,out))
})();
var state__31517__auto__ = (function (){var statearr_35281 = f__31516__auto__.call(null);
(statearr_35281[(6)] = c__31515__auto___35283);

return statearr_35281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31517__auto__);
});})(c__31515__auto___35283,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
