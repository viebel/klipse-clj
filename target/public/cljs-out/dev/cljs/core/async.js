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
var G__30969 = arguments.length;
switch (G__30969) {
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
if(typeof cljs.core.async.t_cljs$core$async30970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30970 = (function (f,blockable,meta30971){
this.f = f;
this.blockable = blockable;
this.meta30971 = meta30971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30972,meta30971__$1){
var self__ = this;
var _30972__$1 = this;
return (new cljs.core.async.t_cljs$core$async30970(self__.f,self__.blockable,meta30971__$1));
});

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30972){
var self__ = this;
var _30972__$1 = this;
return self__.meta30971;
});

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30971","meta30971",522380103,null)], null);
});

cljs.core.async.t_cljs$core$async30970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30970";

cljs.core.async.t_cljs$core$async30970.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30970");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30970.
 */
cljs.core.async.__GT_t_cljs$core$async30970 = (function cljs$core$async$__GT_t_cljs$core$async30970(f__$1,blockable__$1,meta30971){
return (new cljs.core.async.t_cljs$core$async30970(f__$1,blockable__$1,meta30971));
});

}

return (new cljs.core.async.t_cljs$core$async30970(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30976 = arguments.length;
switch (G__30976) {
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
var G__30979 = arguments.length;
switch (G__30979) {
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
var G__30982 = arguments.length;
switch (G__30982) {
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
var val_30984 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30984);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30984,ret){
return (function (){
return fn1.call(null,val_30984);
});})(val_30984,ret))
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
var G__30986 = arguments.length;
switch (G__30986) {
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
var n__4376__auto___30988 = n;
var x_30989 = (0);
while(true){
if((x_30989 < n__4376__auto___30988)){
(a[x_30989] = (0));

var G__30990 = (x_30989 + (1));
x_30989 = G__30990;
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

var G__30991 = (i + (1));
i = G__30991;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30992 = (function (flag,meta30993){
this.flag = flag;
this.meta30993 = meta30993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30994,meta30993__$1){
var self__ = this;
var _30994__$1 = this;
return (new cljs.core.async.t_cljs$core$async30992(self__.flag,meta30993__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30994){
var self__ = this;
var _30994__$1 = this;
return self__.meta30993;
});})(flag))
;

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30992.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30993","meta30993",640975888,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30992";

cljs.core.async.t_cljs$core$async30992.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30992");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30992.
 */
cljs.core.async.__GT_t_cljs$core$async30992 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30992(flag__$1,meta30993){
return (new cljs.core.async.t_cljs$core$async30992(flag__$1,meta30993));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30992(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30995 = (function (flag,cb,meta30996){
this.flag = flag;
this.cb = cb;
this.meta30996 = meta30996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30997,meta30996__$1){
var self__ = this;
var _30997__$1 = this;
return (new cljs.core.async.t_cljs$core$async30995(self__.flag,self__.cb,meta30996__$1));
});

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30997){
var self__ = this;
var _30997__$1 = this;
return self__.meta30996;
});

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30996","meta30996",-263680622,null)], null);
});

cljs.core.async.t_cljs$core$async30995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30995";

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30995");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30995.
 */
cljs.core.async.__GT_t_cljs$core$async30995 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30995(flag__$1,cb__$1,meta30996){
return (new cljs.core.async.t_cljs$core$async30995(flag__$1,cb__$1,meta30996));
});

}

return (new cljs.core.async.t_cljs$core$async30995(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30998_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30998_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30999_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30999_SHARP_,port], null));
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
var G__31000 = (i + (1));
i = G__31000;
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
var len__4499__auto___31006 = arguments.length;
var i__4500__auto___31007 = (0);
while(true){
if((i__4500__auto___31007 < len__4499__auto___31006)){
args__4502__auto__.push((arguments[i__4500__auto___31007]));

var G__31008 = (i__4500__auto___31007 + (1));
i__4500__auto___31007 = G__31008;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31003){
var map__31004 = p__31003;
var map__31004__$1 = ((((!((map__31004 == null)))?(((((map__31004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31004):map__31004);
var opts = map__31004__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31001){
var G__31002 = cljs.core.first.call(null,seq31001);
var seq31001__$1 = cljs.core.next.call(null,seq31001);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31002,seq31001__$1);
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
var G__31010 = arguments.length;
switch (G__31010) {
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
var c__13946__auto___31056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___31056){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___31056){
return (function (state_31034){
var state_val_31035 = (state_31034[(1)]);
if((state_val_31035 === (7))){
var inst_31030 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31036_31057 = state_31034__$1;
(statearr_31036_31057[(2)] = inst_31030);

(statearr_31036_31057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (1))){
var state_31034__$1 = state_31034;
var statearr_31037_31058 = state_31034__$1;
(statearr_31037_31058[(2)] = null);

(statearr_31037_31058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (4))){
var inst_31013 = (state_31034[(7)]);
var inst_31013__$1 = (state_31034[(2)]);
var inst_31014 = (inst_31013__$1 == null);
var state_31034__$1 = (function (){var statearr_31038 = state_31034;
(statearr_31038[(7)] = inst_31013__$1);

return statearr_31038;
})();
if(cljs.core.truth_(inst_31014)){
var statearr_31039_31059 = state_31034__$1;
(statearr_31039_31059[(1)] = (5));

} else {
var statearr_31040_31060 = state_31034__$1;
(statearr_31040_31060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (13))){
var state_31034__$1 = state_31034;
var statearr_31041_31061 = state_31034__$1;
(statearr_31041_31061[(2)] = null);

(statearr_31041_31061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (6))){
var inst_31013 = (state_31034[(7)]);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31034__$1,(11),to,inst_31013);
} else {
if((state_val_31035 === (3))){
var inst_31032 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31034__$1,inst_31032);
} else {
if((state_val_31035 === (12))){
var state_31034__$1 = state_31034;
var statearr_31042_31062 = state_31034__$1;
(statearr_31042_31062[(2)] = null);

(statearr_31042_31062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (2))){
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31034__$1,(4),from);
} else {
if((state_val_31035 === (11))){
var inst_31023 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_31023)){
var statearr_31043_31063 = state_31034__$1;
(statearr_31043_31063[(1)] = (12));

} else {
var statearr_31044_31064 = state_31034__$1;
(statearr_31044_31064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (9))){
var state_31034__$1 = state_31034;
var statearr_31045_31065 = state_31034__$1;
(statearr_31045_31065[(2)] = null);

(statearr_31045_31065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (5))){
var state_31034__$1 = state_31034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31046_31066 = state_31034__$1;
(statearr_31046_31066[(1)] = (8));

} else {
var statearr_31047_31067 = state_31034__$1;
(statearr_31047_31067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (14))){
var inst_31028 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31048_31068 = state_31034__$1;
(statearr_31048_31068[(2)] = inst_31028);

(statearr_31048_31068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (10))){
var inst_31020 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31049_31069 = state_31034__$1;
(statearr_31049_31069[(2)] = inst_31020);

(statearr_31049_31069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (8))){
var inst_31017 = cljs.core.async.close_BANG_.call(null,to);
var state_31034__$1 = state_31034;
var statearr_31050_31070 = state_31034__$1;
(statearr_31050_31070[(2)] = inst_31017);

(statearr_31050_31070[(1)] = (10));


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
});})(c__13946__auto___31056))
;
return ((function (switch__13856__auto__,c__13946__auto___31056){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_31051 = [null,null,null,null,null,null,null,null];
(statearr_31051[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_31051[(1)] = (1));

return statearr_31051;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_31034){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31052){if((e31052 instanceof Object)){
var ex__13860__auto__ = e31052;
var statearr_31053_31071 = state_31034;
(statearr_31053_31071[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31072 = state_31034;
state_31034 = G__31072;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_31034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_31034);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___31056))
})();
var state__13948__auto__ = (function (){var statearr_31054 = f__13947__auto__.call(null);
(statearr_31054[(6)] = c__13946__auto___31056);

return statearr_31054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___31056))
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
return (function (p__31073){
var vec__31074 = p__31073;
var v = cljs.core.nth.call(null,vec__31074,(0),null);
var p = cljs.core.nth.call(null,vec__31074,(1),null);
var job = vec__31074;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13946__auto___31245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___31245,res,vec__31074,v,p,job,jobs,results){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___31245,res,vec__31074,v,p,job,jobs,results){
return (function (state_31081){
var state_val_31082 = (state_31081[(1)]);
if((state_val_31082 === (1))){
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31081__$1,(2),res,v);
} else {
if((state_val_31082 === (2))){
var inst_31078 = (state_31081[(2)]);
var inst_31079 = cljs.core.async.close_BANG_.call(null,res);
var state_31081__$1 = (function (){var statearr_31083 = state_31081;
(statearr_31083[(7)] = inst_31078);

return statearr_31083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31081__$1,inst_31079);
} else {
return null;
}
}
});})(c__13946__auto___31245,res,vec__31074,v,p,job,jobs,results))
;
return ((function (switch__13856__auto__,c__13946__auto___31245,res,vec__31074,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0 = (function (){
var statearr_31084 = [null,null,null,null,null,null,null,null];
(statearr_31084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__);

(statearr_31084[(1)] = (1));

return statearr_31084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1 = (function (state_31081){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31085){if((e31085 instanceof Object)){
var ex__13860__auto__ = e31085;
var statearr_31086_31246 = state_31081;
(statearr_31086_31246[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31247 = state_31081;
state_31081 = G__31247;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = function(state_31081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1.call(this,state_31081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___31245,res,vec__31074,v,p,job,jobs,results))
})();
var state__13948__auto__ = (function (){var statearr_31087 = f__13947__auto__.call(null);
(statearr_31087[(6)] = c__13946__auto___31245);

return statearr_31087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___31245,res,vec__31074,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__31088){
var vec__31089 = p__31088;
var v = cljs.core.nth.call(null,vec__31089,(0),null);
var p = cljs.core.nth.call(null,vec__31089,(1),null);
var job = vec__31089;
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
var n__4376__auto___31248 = n;
var __31249 = (0);
while(true){
if((__31249 < n__4376__auto___31248)){
var G__31092_31250 = type;
var G__31092_31251__$1 = (((G__31092_31250 instanceof cljs.core.Keyword))?G__31092_31250.fqn:null);
switch (G__31092_31251__$1) {
case "compute":
var c__13946__auto___31253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31249,c__13946__auto___31253,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (__31249,c__13946__auto___31253,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async){
return (function (state_31105){
var state_val_31106 = (state_31105[(1)]);
if((state_val_31106 === (1))){
var state_31105__$1 = state_31105;
var statearr_31107_31254 = state_31105__$1;
(statearr_31107_31254[(2)] = null);

(statearr_31107_31254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31106 === (2))){
var state_31105__$1 = state_31105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31105__$1,(4),jobs);
} else {
if((state_val_31106 === (3))){
var inst_31103 = (state_31105[(2)]);
var state_31105__$1 = state_31105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31105__$1,inst_31103);
} else {
if((state_val_31106 === (4))){
var inst_31095 = (state_31105[(2)]);
var inst_31096 = process__$1.call(null,inst_31095);
var state_31105__$1 = state_31105;
if(cljs.core.truth_(inst_31096)){
var statearr_31108_31255 = state_31105__$1;
(statearr_31108_31255[(1)] = (5));

} else {
var statearr_31109_31256 = state_31105__$1;
(statearr_31109_31256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31106 === (5))){
var state_31105__$1 = state_31105;
var statearr_31110_31257 = state_31105__$1;
(statearr_31110_31257[(2)] = null);

(statearr_31110_31257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31106 === (6))){
var state_31105__$1 = state_31105;
var statearr_31111_31258 = state_31105__$1;
(statearr_31111_31258[(2)] = null);

(statearr_31111_31258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31106 === (7))){
var inst_31101 = (state_31105[(2)]);
var state_31105__$1 = state_31105;
var statearr_31112_31259 = state_31105__$1;
(statearr_31112_31259[(2)] = inst_31101);

(statearr_31112_31259[(1)] = (3));


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
});})(__31249,c__13946__auto___31253,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async))
;
return ((function (__31249,switch__13856__auto__,c__13946__auto___31253,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0 = (function (){
var statearr_31113 = [null,null,null,null,null,null,null];
(statearr_31113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__);

(statearr_31113[(1)] = (1));

return statearr_31113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1 = (function (state_31105){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31114){if((e31114 instanceof Object)){
var ex__13860__auto__ = e31114;
var statearr_31115_31260 = state_31105;
(statearr_31115_31260[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31261 = state_31105;
state_31105 = G__31261;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = function(state_31105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1.call(this,state_31105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__;
})()
;})(__31249,switch__13856__auto__,c__13946__auto___31253,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async))
})();
var state__13948__auto__ = (function (){var statearr_31116 = f__13947__auto__.call(null);
(statearr_31116[(6)] = c__13946__auto___31253);

return statearr_31116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(__31249,c__13946__auto___31253,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async))
);


break;
case "async":
var c__13946__auto___31262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31249,c__13946__auto___31262,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (__31249,c__13946__auto___31262,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async){
return (function (state_31129){
var state_val_31130 = (state_31129[(1)]);
if((state_val_31130 === (1))){
var state_31129__$1 = state_31129;
var statearr_31131_31263 = state_31129__$1;
(statearr_31131_31263[(2)] = null);

(statearr_31131_31263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (2))){
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31129__$1,(4),jobs);
} else {
if((state_val_31130 === (3))){
var inst_31127 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31129__$1,inst_31127);
} else {
if((state_val_31130 === (4))){
var inst_31119 = (state_31129[(2)]);
var inst_31120 = async.call(null,inst_31119);
var state_31129__$1 = state_31129;
if(cljs.core.truth_(inst_31120)){
var statearr_31132_31264 = state_31129__$1;
(statearr_31132_31264[(1)] = (5));

} else {
var statearr_31133_31265 = state_31129__$1;
(statearr_31133_31265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (5))){
var state_31129__$1 = state_31129;
var statearr_31134_31266 = state_31129__$1;
(statearr_31134_31266[(2)] = null);

(statearr_31134_31266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (6))){
var state_31129__$1 = state_31129;
var statearr_31135_31267 = state_31129__$1;
(statearr_31135_31267[(2)] = null);

(statearr_31135_31267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (7))){
var inst_31125 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31136_31268 = state_31129__$1;
(statearr_31136_31268[(2)] = inst_31125);

(statearr_31136_31268[(1)] = (3));


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
});})(__31249,c__13946__auto___31262,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async))
;
return ((function (__31249,switch__13856__auto__,c__13946__auto___31262,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0 = (function (){
var statearr_31137 = [null,null,null,null,null,null,null];
(statearr_31137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__);

(statearr_31137[(1)] = (1));

return statearr_31137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1 = (function (state_31129){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31138){if((e31138 instanceof Object)){
var ex__13860__auto__ = e31138;
var statearr_31139_31269 = state_31129;
(statearr_31139_31269[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31270 = state_31129;
state_31129 = G__31270;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = function(state_31129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1.call(this,state_31129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__;
})()
;})(__31249,switch__13856__auto__,c__13946__auto___31262,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async))
})();
var state__13948__auto__ = (function (){var statearr_31140 = f__13947__auto__.call(null);
(statearr_31140[(6)] = c__13946__auto___31262);

return statearr_31140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(__31249,c__13946__auto___31262,G__31092_31250,G__31092_31251__$1,n__4376__auto___31248,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31092_31251__$1)].join('')));

}

var G__31271 = (__31249 + (1));
__31249 = G__31271;
continue;
} else {
}
break;
}

var c__13946__auto___31272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___31272,jobs,results,process__$1,async){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___31272,jobs,results,process__$1,async){
return (function (state_31162){
var state_val_31163 = (state_31162[(1)]);
if((state_val_31163 === (1))){
var state_31162__$1 = state_31162;
var statearr_31164_31273 = state_31162__$1;
(statearr_31164_31273[(2)] = null);

(statearr_31164_31273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (2))){
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31162__$1,(4),from);
} else {
if((state_val_31163 === (3))){
var inst_31160 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31162__$1,inst_31160);
} else {
if((state_val_31163 === (4))){
var inst_31143 = (state_31162[(7)]);
var inst_31143__$1 = (state_31162[(2)]);
var inst_31144 = (inst_31143__$1 == null);
var state_31162__$1 = (function (){var statearr_31165 = state_31162;
(statearr_31165[(7)] = inst_31143__$1);

return statearr_31165;
})();
if(cljs.core.truth_(inst_31144)){
var statearr_31166_31274 = state_31162__$1;
(statearr_31166_31274[(1)] = (5));

} else {
var statearr_31167_31275 = state_31162__$1;
(statearr_31167_31275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (5))){
var inst_31146 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31162__$1 = state_31162;
var statearr_31168_31276 = state_31162__$1;
(statearr_31168_31276[(2)] = inst_31146);

(statearr_31168_31276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (6))){
var inst_31143 = (state_31162[(7)]);
var inst_31148 = (state_31162[(8)]);
var inst_31148__$1 = cljs.core.async.chan.call(null,(1));
var inst_31149 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31150 = [inst_31143,inst_31148__$1];
var inst_31151 = (new cljs.core.PersistentVector(null,2,(5),inst_31149,inst_31150,null));
var state_31162__$1 = (function (){var statearr_31169 = state_31162;
(statearr_31169[(8)] = inst_31148__$1);

return statearr_31169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31162__$1,(8),jobs,inst_31151);
} else {
if((state_val_31163 === (7))){
var inst_31158 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31170_31277 = state_31162__$1;
(statearr_31170_31277[(2)] = inst_31158);

(statearr_31170_31277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (8))){
var inst_31148 = (state_31162[(8)]);
var inst_31153 = (state_31162[(2)]);
var state_31162__$1 = (function (){var statearr_31171 = state_31162;
(statearr_31171[(9)] = inst_31153);

return statearr_31171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31162__$1,(9),results,inst_31148);
} else {
if((state_val_31163 === (9))){
var inst_31155 = (state_31162[(2)]);
var state_31162__$1 = (function (){var statearr_31172 = state_31162;
(statearr_31172[(10)] = inst_31155);

return statearr_31172;
})();
var statearr_31173_31278 = state_31162__$1;
(statearr_31173_31278[(2)] = null);

(statearr_31173_31278[(1)] = (2));


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
});})(c__13946__auto___31272,jobs,results,process__$1,async))
;
return ((function (switch__13856__auto__,c__13946__auto___31272,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0 = (function (){
var statearr_31174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__);

(statearr_31174[(1)] = (1));

return statearr_31174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1 = (function (state_31162){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31175){if((e31175 instanceof Object)){
var ex__13860__auto__ = e31175;
var statearr_31176_31279 = state_31162;
(statearr_31176_31279[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31280 = state_31162;
state_31162 = G__31280;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = function(state_31162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1.call(this,state_31162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___31272,jobs,results,process__$1,async))
})();
var state__13948__auto__ = (function (){var statearr_31177 = f__13947__auto__.call(null);
(statearr_31177[(6)] = c__13946__auto___31272);

return statearr_31177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___31272,jobs,results,process__$1,async))
);


var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__,jobs,results,process__$1,async){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__,jobs,results,process__$1,async){
return (function (state_31215){
var state_val_31216 = (state_31215[(1)]);
if((state_val_31216 === (7))){
var inst_31211 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31217_31281 = state_31215__$1;
(statearr_31217_31281[(2)] = inst_31211);

(statearr_31217_31281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (20))){
var state_31215__$1 = state_31215;
var statearr_31218_31282 = state_31215__$1;
(statearr_31218_31282[(2)] = null);

(statearr_31218_31282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (1))){
var state_31215__$1 = state_31215;
var statearr_31219_31283 = state_31215__$1;
(statearr_31219_31283[(2)] = null);

(statearr_31219_31283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (4))){
var inst_31180 = (state_31215[(7)]);
var inst_31180__$1 = (state_31215[(2)]);
var inst_31181 = (inst_31180__$1 == null);
var state_31215__$1 = (function (){var statearr_31220 = state_31215;
(statearr_31220[(7)] = inst_31180__$1);

return statearr_31220;
})();
if(cljs.core.truth_(inst_31181)){
var statearr_31221_31284 = state_31215__$1;
(statearr_31221_31284[(1)] = (5));

} else {
var statearr_31222_31285 = state_31215__$1;
(statearr_31222_31285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (15))){
var inst_31193 = (state_31215[(8)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31215__$1,(18),to,inst_31193);
} else {
if((state_val_31216 === (21))){
var inst_31206 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31223_31286 = state_31215__$1;
(statearr_31223_31286[(2)] = inst_31206);

(statearr_31223_31286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (13))){
var inst_31208 = (state_31215[(2)]);
var state_31215__$1 = (function (){var statearr_31224 = state_31215;
(statearr_31224[(9)] = inst_31208);

return statearr_31224;
})();
var statearr_31225_31287 = state_31215__$1;
(statearr_31225_31287[(2)] = null);

(statearr_31225_31287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (6))){
var inst_31180 = (state_31215[(7)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31215__$1,(11),inst_31180);
} else {
if((state_val_31216 === (17))){
var inst_31201 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31201)){
var statearr_31226_31288 = state_31215__$1;
(statearr_31226_31288[(1)] = (19));

} else {
var statearr_31227_31289 = state_31215__$1;
(statearr_31227_31289[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (3))){
var inst_31213 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31215__$1,inst_31213);
} else {
if((state_val_31216 === (12))){
var inst_31190 = (state_31215[(10)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31215__$1,(14),inst_31190);
} else {
if((state_val_31216 === (2))){
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31215__$1,(4),results);
} else {
if((state_val_31216 === (19))){
var state_31215__$1 = state_31215;
var statearr_31228_31290 = state_31215__$1;
(statearr_31228_31290[(2)] = null);

(statearr_31228_31290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (11))){
var inst_31190 = (state_31215[(2)]);
var state_31215__$1 = (function (){var statearr_31229 = state_31215;
(statearr_31229[(10)] = inst_31190);

return statearr_31229;
})();
var statearr_31230_31291 = state_31215__$1;
(statearr_31230_31291[(2)] = null);

(statearr_31230_31291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (9))){
var state_31215__$1 = state_31215;
var statearr_31231_31292 = state_31215__$1;
(statearr_31231_31292[(2)] = null);

(statearr_31231_31292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (5))){
var state_31215__$1 = state_31215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31232_31293 = state_31215__$1;
(statearr_31232_31293[(1)] = (8));

} else {
var statearr_31233_31294 = state_31215__$1;
(statearr_31233_31294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (14))){
var inst_31195 = (state_31215[(11)]);
var inst_31193 = (state_31215[(8)]);
var inst_31193__$1 = (state_31215[(2)]);
var inst_31194 = (inst_31193__$1 == null);
var inst_31195__$1 = cljs.core.not.call(null,inst_31194);
var state_31215__$1 = (function (){var statearr_31234 = state_31215;
(statearr_31234[(11)] = inst_31195__$1);

(statearr_31234[(8)] = inst_31193__$1);

return statearr_31234;
})();
if(inst_31195__$1){
var statearr_31235_31295 = state_31215__$1;
(statearr_31235_31295[(1)] = (15));

} else {
var statearr_31236_31296 = state_31215__$1;
(statearr_31236_31296[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (16))){
var inst_31195 = (state_31215[(11)]);
var state_31215__$1 = state_31215;
var statearr_31237_31297 = state_31215__$1;
(statearr_31237_31297[(2)] = inst_31195);

(statearr_31237_31297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (10))){
var inst_31187 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31238_31298 = state_31215__$1;
(statearr_31238_31298[(2)] = inst_31187);

(statearr_31238_31298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (18))){
var inst_31198 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31239_31299 = state_31215__$1;
(statearr_31239_31299[(2)] = inst_31198);

(statearr_31239_31299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (8))){
var inst_31184 = cljs.core.async.close_BANG_.call(null,to);
var state_31215__$1 = state_31215;
var statearr_31240_31300 = state_31215__$1;
(statearr_31240_31300[(2)] = inst_31184);

(statearr_31240_31300[(1)] = (10));


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
var statearr_31241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__);

(statearr_31241[(1)] = (1));

return statearr_31241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1 = (function (state_31215){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31242){if((e31242 instanceof Object)){
var ex__13860__auto__ = e31242;
var statearr_31243_31301 = state_31215;
(statearr_31243_31301[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31302 = state_31215;
state_31215 = G__31302;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__ = function(state_31215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1.call(this,state_31215);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,jobs,results,process__$1,async))
})();
var state__13948__auto__ = (function (){var statearr_31244 = f__13947__auto__.call(null);
(statearr_31244[(6)] = c__13946__auto__);

return statearr_31244;
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
var G__31304 = arguments.length;
switch (G__31304) {
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
var G__31307 = arguments.length;
switch (G__31307) {
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
var G__31310 = arguments.length;
switch (G__31310) {
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
var c__13946__auto___31359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___31359,tc,fc){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___31359,tc,fc){
return (function (state_31336){
var state_val_31337 = (state_31336[(1)]);
if((state_val_31337 === (7))){
var inst_31332 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31338_31360 = state_31336__$1;
(statearr_31338_31360[(2)] = inst_31332);

(statearr_31338_31360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (1))){
var state_31336__$1 = state_31336;
var statearr_31339_31361 = state_31336__$1;
(statearr_31339_31361[(2)] = null);

(statearr_31339_31361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (4))){
var inst_31313 = (state_31336[(7)]);
var inst_31313__$1 = (state_31336[(2)]);
var inst_31314 = (inst_31313__$1 == null);
var state_31336__$1 = (function (){var statearr_31340 = state_31336;
(statearr_31340[(7)] = inst_31313__$1);

return statearr_31340;
})();
if(cljs.core.truth_(inst_31314)){
var statearr_31341_31362 = state_31336__$1;
(statearr_31341_31362[(1)] = (5));

} else {
var statearr_31342_31363 = state_31336__$1;
(statearr_31342_31363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (13))){
var state_31336__$1 = state_31336;
var statearr_31343_31364 = state_31336__$1;
(statearr_31343_31364[(2)] = null);

(statearr_31343_31364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (6))){
var inst_31313 = (state_31336[(7)]);
var inst_31319 = p.call(null,inst_31313);
var state_31336__$1 = state_31336;
if(cljs.core.truth_(inst_31319)){
var statearr_31344_31365 = state_31336__$1;
(statearr_31344_31365[(1)] = (9));

} else {
var statearr_31345_31366 = state_31336__$1;
(statearr_31345_31366[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (3))){
var inst_31334 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31336__$1,inst_31334);
} else {
if((state_val_31337 === (12))){
var state_31336__$1 = state_31336;
var statearr_31346_31367 = state_31336__$1;
(statearr_31346_31367[(2)] = null);

(statearr_31346_31367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (2))){
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31336__$1,(4),ch);
} else {
if((state_val_31337 === (11))){
var inst_31313 = (state_31336[(7)]);
var inst_31323 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31336__$1,(8),inst_31323,inst_31313);
} else {
if((state_val_31337 === (9))){
var state_31336__$1 = state_31336;
var statearr_31347_31368 = state_31336__$1;
(statearr_31347_31368[(2)] = tc);

(statearr_31347_31368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (5))){
var inst_31316 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31317 = cljs.core.async.close_BANG_.call(null,fc);
var state_31336__$1 = (function (){var statearr_31348 = state_31336;
(statearr_31348[(8)] = inst_31316);

return statearr_31348;
})();
var statearr_31349_31369 = state_31336__$1;
(statearr_31349_31369[(2)] = inst_31317);

(statearr_31349_31369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (14))){
var inst_31330 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31350_31370 = state_31336__$1;
(statearr_31350_31370[(2)] = inst_31330);

(statearr_31350_31370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (10))){
var state_31336__$1 = state_31336;
var statearr_31351_31371 = state_31336__$1;
(statearr_31351_31371[(2)] = fc);

(statearr_31351_31371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (8))){
var inst_31325 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
if(cljs.core.truth_(inst_31325)){
var statearr_31352_31372 = state_31336__$1;
(statearr_31352_31372[(1)] = (12));

} else {
var statearr_31353_31373 = state_31336__$1;
(statearr_31353_31373[(1)] = (13));

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
});})(c__13946__auto___31359,tc,fc))
;
return ((function (switch__13856__auto__,c__13946__auto___31359,tc,fc){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_31354 = [null,null,null,null,null,null,null,null,null];
(statearr_31354[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_31354[(1)] = (1));

return statearr_31354;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_31336){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31355){if((e31355 instanceof Object)){
var ex__13860__auto__ = e31355;
var statearr_31356_31374 = state_31336;
(statearr_31356_31374[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31375 = state_31336;
state_31336 = G__31375;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_31336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_31336);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___31359,tc,fc))
})();
var state__13948__auto__ = (function (){var statearr_31357 = f__13947__auto__.call(null);
(statearr_31357[(6)] = c__13946__auto___31359);

return statearr_31357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___31359,tc,fc))
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
return (function (state_31396){
var state_val_31397 = (state_31396[(1)]);
if((state_val_31397 === (7))){
var inst_31392 = (state_31396[(2)]);
var state_31396__$1 = state_31396;
var statearr_31398_31416 = state_31396__$1;
(statearr_31398_31416[(2)] = inst_31392);

(statearr_31398_31416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (1))){
var inst_31376 = init;
var state_31396__$1 = (function (){var statearr_31399 = state_31396;
(statearr_31399[(7)] = inst_31376);

return statearr_31399;
})();
var statearr_31400_31417 = state_31396__$1;
(statearr_31400_31417[(2)] = null);

(statearr_31400_31417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (4))){
var inst_31379 = (state_31396[(8)]);
var inst_31379__$1 = (state_31396[(2)]);
var inst_31380 = (inst_31379__$1 == null);
var state_31396__$1 = (function (){var statearr_31401 = state_31396;
(statearr_31401[(8)] = inst_31379__$1);

return statearr_31401;
})();
if(cljs.core.truth_(inst_31380)){
var statearr_31402_31418 = state_31396__$1;
(statearr_31402_31418[(1)] = (5));

} else {
var statearr_31403_31419 = state_31396__$1;
(statearr_31403_31419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (6))){
var inst_31383 = (state_31396[(9)]);
var inst_31376 = (state_31396[(7)]);
var inst_31379 = (state_31396[(8)]);
var inst_31383__$1 = f.call(null,inst_31376,inst_31379);
var inst_31384 = cljs.core.reduced_QMARK_.call(null,inst_31383__$1);
var state_31396__$1 = (function (){var statearr_31404 = state_31396;
(statearr_31404[(9)] = inst_31383__$1);

return statearr_31404;
})();
if(inst_31384){
var statearr_31405_31420 = state_31396__$1;
(statearr_31405_31420[(1)] = (8));

} else {
var statearr_31406_31421 = state_31396__$1;
(statearr_31406_31421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (3))){
var inst_31394 = (state_31396[(2)]);
var state_31396__$1 = state_31396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31396__$1,inst_31394);
} else {
if((state_val_31397 === (2))){
var state_31396__$1 = state_31396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31396__$1,(4),ch);
} else {
if((state_val_31397 === (9))){
var inst_31383 = (state_31396[(9)]);
var inst_31376 = inst_31383;
var state_31396__$1 = (function (){var statearr_31407 = state_31396;
(statearr_31407[(7)] = inst_31376);

return statearr_31407;
})();
var statearr_31408_31422 = state_31396__$1;
(statearr_31408_31422[(2)] = null);

(statearr_31408_31422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (5))){
var inst_31376 = (state_31396[(7)]);
var state_31396__$1 = state_31396;
var statearr_31409_31423 = state_31396__$1;
(statearr_31409_31423[(2)] = inst_31376);

(statearr_31409_31423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (10))){
var inst_31390 = (state_31396[(2)]);
var state_31396__$1 = state_31396;
var statearr_31410_31424 = state_31396__$1;
(statearr_31410_31424[(2)] = inst_31390);

(statearr_31410_31424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (8))){
var inst_31383 = (state_31396[(9)]);
var inst_31386 = cljs.core.deref.call(null,inst_31383);
var state_31396__$1 = state_31396;
var statearr_31411_31425 = state_31396__$1;
(statearr_31411_31425[(2)] = inst_31386);

(statearr_31411_31425[(1)] = (10));


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
var statearr_31412 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31412[(0)] = cljs$core$async$reduce_$_state_machine__13857__auto__);

(statearr_31412[(1)] = (1));

return statearr_31412;
});
var cljs$core$async$reduce_$_state_machine__13857__auto____1 = (function (state_31396){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31413){if((e31413 instanceof Object)){
var ex__13860__auto__ = e31413;
var statearr_31414_31426 = state_31396;
(statearr_31414_31426[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31427 = state_31396;
state_31396 = G__31427;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13857__auto__ = function(state_31396){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13857__auto____1.call(this,state_31396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13857__auto____0;
cljs$core$async$reduce_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13857__auto____1;
return cljs$core$async$reduce_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_31415 = f__13947__auto__.call(null);
(statearr_31415[(6)] = c__13946__auto__);

return statearr_31415;
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
return (function (state_31433){
var state_val_31434 = (state_31433[(1)]);
if((state_val_31434 === (1))){
var inst_31428 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31433__$1 = state_31433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31433__$1,(2),inst_31428);
} else {
if((state_val_31434 === (2))){
var inst_31430 = (state_31433[(2)]);
var inst_31431 = f__$1.call(null,inst_31430);
var state_31433__$1 = state_31433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31433__$1,inst_31431);
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
var statearr_31435 = [null,null,null,null,null,null,null];
(statearr_31435[(0)] = cljs$core$async$transduce_$_state_machine__13857__auto__);

(statearr_31435[(1)] = (1));

return statearr_31435;
});
var cljs$core$async$transduce_$_state_machine__13857__auto____1 = (function (state_31433){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31436){if((e31436 instanceof Object)){
var ex__13860__auto__ = e31436;
var statearr_31437_31439 = state_31433;
(statearr_31437_31439[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31440 = state_31433;
state_31433 = G__31440;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13857__auto__ = function(state_31433){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13857__auto____1.call(this,state_31433);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13857__auto____0;
cljs$core$async$transduce_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13857__auto____1;
return cljs$core$async$transduce_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,f__$1))
})();
var state__13948__auto__ = (function (){var statearr_31438 = f__13947__auto__.call(null);
(statearr_31438[(6)] = c__13946__auto__);

return statearr_31438;
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
var G__31442 = arguments.length;
switch (G__31442) {
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
return (function (state_31467){
var state_val_31468 = (state_31467[(1)]);
if((state_val_31468 === (7))){
var inst_31449 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31469_31490 = state_31467__$1;
(statearr_31469_31490[(2)] = inst_31449);

(statearr_31469_31490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (1))){
var inst_31443 = cljs.core.seq.call(null,coll);
var inst_31444 = inst_31443;
var state_31467__$1 = (function (){var statearr_31470 = state_31467;
(statearr_31470[(7)] = inst_31444);

return statearr_31470;
})();
var statearr_31471_31491 = state_31467__$1;
(statearr_31471_31491[(2)] = null);

(statearr_31471_31491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (4))){
var inst_31444 = (state_31467[(7)]);
var inst_31447 = cljs.core.first.call(null,inst_31444);
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31467__$1,(7),ch,inst_31447);
} else {
if((state_val_31468 === (13))){
var inst_31461 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31472_31492 = state_31467__$1;
(statearr_31472_31492[(2)] = inst_31461);

(statearr_31472_31492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (6))){
var inst_31452 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
if(cljs.core.truth_(inst_31452)){
var statearr_31473_31493 = state_31467__$1;
(statearr_31473_31493[(1)] = (8));

} else {
var statearr_31474_31494 = state_31467__$1;
(statearr_31474_31494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (3))){
var inst_31465 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31467__$1,inst_31465);
} else {
if((state_val_31468 === (12))){
var state_31467__$1 = state_31467;
var statearr_31475_31495 = state_31467__$1;
(statearr_31475_31495[(2)] = null);

(statearr_31475_31495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (2))){
var inst_31444 = (state_31467[(7)]);
var state_31467__$1 = state_31467;
if(cljs.core.truth_(inst_31444)){
var statearr_31476_31496 = state_31467__$1;
(statearr_31476_31496[(1)] = (4));

} else {
var statearr_31477_31497 = state_31467__$1;
(statearr_31477_31497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (11))){
var inst_31458 = cljs.core.async.close_BANG_.call(null,ch);
var state_31467__$1 = state_31467;
var statearr_31478_31498 = state_31467__$1;
(statearr_31478_31498[(2)] = inst_31458);

(statearr_31478_31498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (9))){
var state_31467__$1 = state_31467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31479_31499 = state_31467__$1;
(statearr_31479_31499[(1)] = (11));

} else {
var statearr_31480_31500 = state_31467__$1;
(statearr_31480_31500[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (5))){
var inst_31444 = (state_31467[(7)]);
var state_31467__$1 = state_31467;
var statearr_31481_31501 = state_31467__$1;
(statearr_31481_31501[(2)] = inst_31444);

(statearr_31481_31501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (10))){
var inst_31463 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31482_31502 = state_31467__$1;
(statearr_31482_31502[(2)] = inst_31463);

(statearr_31482_31502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (8))){
var inst_31444 = (state_31467[(7)]);
var inst_31454 = cljs.core.next.call(null,inst_31444);
var inst_31444__$1 = inst_31454;
var state_31467__$1 = (function (){var statearr_31483 = state_31467;
(statearr_31483[(7)] = inst_31444__$1);

return statearr_31483;
})();
var statearr_31484_31503 = state_31467__$1;
(statearr_31484_31503[(2)] = null);

(statearr_31484_31503[(1)] = (2));


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
var statearr_31485 = [null,null,null,null,null,null,null,null];
(statearr_31485[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_31485[(1)] = (1));

return statearr_31485;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_31467){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31486){if((e31486 instanceof Object)){
var ex__13860__auto__ = e31486;
var statearr_31487_31504 = state_31467;
(statearr_31487_31504[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31505 = state_31467;
state_31467 = G__31505;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_31467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_31467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_31488 = f__13947__auto__.call(null);
(statearr_31488[(6)] = c__13946__auto__);

return statearr_31488;
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
if(typeof cljs.core.async.t_cljs$core$async31506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31506 = (function (ch,cs,meta31507){
this.ch = ch;
this.cs = cs;
this.meta31507 = meta31507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31508,meta31507__$1){
var self__ = this;
var _31508__$1 = this;
return (new cljs.core.async.t_cljs$core$async31506(self__.ch,self__.cs,meta31507__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31508){
var self__ = this;
var _31508__$1 = this;
return self__.meta31507;
});})(cs))
;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31506.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31506.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31507","meta31507",-2032425587,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31506";

cljs.core.async.t_cljs$core$async31506.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31506");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31506.
 */
cljs.core.async.__GT_t_cljs$core$async31506 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31506(ch__$1,cs__$1,meta31507){
return (new cljs.core.async.t_cljs$core$async31506(ch__$1,cs__$1,meta31507));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31506(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13946__auto___31728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___31728,cs,m,dchan,dctr,done){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___31728,cs,m,dchan,dctr,done){
return (function (state_31643){
var state_val_31644 = (state_31643[(1)]);
if((state_val_31644 === (7))){
var inst_31639 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31645_31729 = state_31643__$1;
(statearr_31645_31729[(2)] = inst_31639);

(statearr_31645_31729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (20))){
var inst_31542 = (state_31643[(7)]);
var inst_31554 = cljs.core.first.call(null,inst_31542);
var inst_31555 = cljs.core.nth.call(null,inst_31554,(0),null);
var inst_31556 = cljs.core.nth.call(null,inst_31554,(1),null);
var state_31643__$1 = (function (){var statearr_31646 = state_31643;
(statearr_31646[(8)] = inst_31555);

return statearr_31646;
})();
if(cljs.core.truth_(inst_31556)){
var statearr_31647_31730 = state_31643__$1;
(statearr_31647_31730[(1)] = (22));

} else {
var statearr_31648_31731 = state_31643__$1;
(statearr_31648_31731[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (27))){
var inst_31586 = (state_31643[(9)]);
var inst_31511 = (state_31643[(10)]);
var inst_31591 = (state_31643[(11)]);
var inst_31584 = (state_31643[(12)]);
var inst_31591__$1 = cljs.core._nth.call(null,inst_31584,inst_31586);
var inst_31592 = cljs.core.async.put_BANG_.call(null,inst_31591__$1,inst_31511,done);
var state_31643__$1 = (function (){var statearr_31649 = state_31643;
(statearr_31649[(11)] = inst_31591__$1);

return statearr_31649;
})();
if(cljs.core.truth_(inst_31592)){
var statearr_31650_31732 = state_31643__$1;
(statearr_31650_31732[(1)] = (30));

} else {
var statearr_31651_31733 = state_31643__$1;
(statearr_31651_31733[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (1))){
var state_31643__$1 = state_31643;
var statearr_31652_31734 = state_31643__$1;
(statearr_31652_31734[(2)] = null);

(statearr_31652_31734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (24))){
var inst_31542 = (state_31643[(7)]);
var inst_31561 = (state_31643[(2)]);
var inst_31562 = cljs.core.next.call(null,inst_31542);
var inst_31520 = inst_31562;
var inst_31521 = null;
var inst_31522 = (0);
var inst_31523 = (0);
var state_31643__$1 = (function (){var statearr_31653 = state_31643;
(statearr_31653[(13)] = inst_31561);

(statearr_31653[(14)] = inst_31523);

(statearr_31653[(15)] = inst_31520);

(statearr_31653[(16)] = inst_31521);

(statearr_31653[(17)] = inst_31522);

return statearr_31653;
})();
var statearr_31654_31735 = state_31643__$1;
(statearr_31654_31735[(2)] = null);

(statearr_31654_31735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (39))){
var state_31643__$1 = state_31643;
var statearr_31658_31736 = state_31643__$1;
(statearr_31658_31736[(2)] = null);

(statearr_31658_31736[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (4))){
var inst_31511 = (state_31643[(10)]);
var inst_31511__$1 = (state_31643[(2)]);
var inst_31512 = (inst_31511__$1 == null);
var state_31643__$1 = (function (){var statearr_31659 = state_31643;
(statearr_31659[(10)] = inst_31511__$1);

return statearr_31659;
})();
if(cljs.core.truth_(inst_31512)){
var statearr_31660_31737 = state_31643__$1;
(statearr_31660_31737[(1)] = (5));

} else {
var statearr_31661_31738 = state_31643__$1;
(statearr_31661_31738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (15))){
var inst_31523 = (state_31643[(14)]);
var inst_31520 = (state_31643[(15)]);
var inst_31521 = (state_31643[(16)]);
var inst_31522 = (state_31643[(17)]);
var inst_31538 = (state_31643[(2)]);
var inst_31539 = (inst_31523 + (1));
var tmp31655 = inst_31520;
var tmp31656 = inst_31521;
var tmp31657 = inst_31522;
var inst_31520__$1 = tmp31655;
var inst_31521__$1 = tmp31656;
var inst_31522__$1 = tmp31657;
var inst_31523__$1 = inst_31539;
var state_31643__$1 = (function (){var statearr_31662 = state_31643;
(statearr_31662[(14)] = inst_31523__$1);

(statearr_31662[(15)] = inst_31520__$1);

(statearr_31662[(16)] = inst_31521__$1);

(statearr_31662[(17)] = inst_31522__$1);

(statearr_31662[(18)] = inst_31538);

return statearr_31662;
})();
var statearr_31663_31739 = state_31643__$1;
(statearr_31663_31739[(2)] = null);

(statearr_31663_31739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (21))){
var inst_31565 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31667_31740 = state_31643__$1;
(statearr_31667_31740[(2)] = inst_31565);

(statearr_31667_31740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (31))){
var inst_31591 = (state_31643[(11)]);
var inst_31595 = done.call(null,null);
var inst_31596 = cljs.core.async.untap_STAR_.call(null,m,inst_31591);
var state_31643__$1 = (function (){var statearr_31668 = state_31643;
(statearr_31668[(19)] = inst_31595);

return statearr_31668;
})();
var statearr_31669_31741 = state_31643__$1;
(statearr_31669_31741[(2)] = inst_31596);

(statearr_31669_31741[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (32))){
var inst_31586 = (state_31643[(9)]);
var inst_31584 = (state_31643[(12)]);
var inst_31585 = (state_31643[(20)]);
var inst_31583 = (state_31643[(21)]);
var inst_31598 = (state_31643[(2)]);
var inst_31599 = (inst_31586 + (1));
var tmp31664 = inst_31584;
var tmp31665 = inst_31585;
var tmp31666 = inst_31583;
var inst_31583__$1 = tmp31666;
var inst_31584__$1 = tmp31664;
var inst_31585__$1 = tmp31665;
var inst_31586__$1 = inst_31599;
var state_31643__$1 = (function (){var statearr_31670 = state_31643;
(statearr_31670[(9)] = inst_31586__$1);

(statearr_31670[(22)] = inst_31598);

(statearr_31670[(12)] = inst_31584__$1);

(statearr_31670[(20)] = inst_31585__$1);

(statearr_31670[(21)] = inst_31583__$1);

return statearr_31670;
})();
var statearr_31671_31742 = state_31643__$1;
(statearr_31671_31742[(2)] = null);

(statearr_31671_31742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (40))){
var inst_31611 = (state_31643[(23)]);
var inst_31615 = done.call(null,null);
var inst_31616 = cljs.core.async.untap_STAR_.call(null,m,inst_31611);
var state_31643__$1 = (function (){var statearr_31672 = state_31643;
(statearr_31672[(24)] = inst_31615);

return statearr_31672;
})();
var statearr_31673_31743 = state_31643__$1;
(statearr_31673_31743[(2)] = inst_31616);

(statearr_31673_31743[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (33))){
var inst_31602 = (state_31643[(25)]);
var inst_31604 = cljs.core.chunked_seq_QMARK_.call(null,inst_31602);
var state_31643__$1 = state_31643;
if(inst_31604){
var statearr_31674_31744 = state_31643__$1;
(statearr_31674_31744[(1)] = (36));

} else {
var statearr_31675_31745 = state_31643__$1;
(statearr_31675_31745[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (13))){
var inst_31532 = (state_31643[(26)]);
var inst_31535 = cljs.core.async.close_BANG_.call(null,inst_31532);
var state_31643__$1 = state_31643;
var statearr_31676_31746 = state_31643__$1;
(statearr_31676_31746[(2)] = inst_31535);

(statearr_31676_31746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (22))){
var inst_31555 = (state_31643[(8)]);
var inst_31558 = cljs.core.async.close_BANG_.call(null,inst_31555);
var state_31643__$1 = state_31643;
var statearr_31677_31747 = state_31643__$1;
(statearr_31677_31747[(2)] = inst_31558);

(statearr_31677_31747[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (36))){
var inst_31602 = (state_31643[(25)]);
var inst_31606 = cljs.core.chunk_first.call(null,inst_31602);
var inst_31607 = cljs.core.chunk_rest.call(null,inst_31602);
var inst_31608 = cljs.core.count.call(null,inst_31606);
var inst_31583 = inst_31607;
var inst_31584 = inst_31606;
var inst_31585 = inst_31608;
var inst_31586 = (0);
var state_31643__$1 = (function (){var statearr_31678 = state_31643;
(statearr_31678[(9)] = inst_31586);

(statearr_31678[(12)] = inst_31584);

(statearr_31678[(20)] = inst_31585);

(statearr_31678[(21)] = inst_31583);

return statearr_31678;
})();
var statearr_31679_31748 = state_31643__$1;
(statearr_31679_31748[(2)] = null);

(statearr_31679_31748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (41))){
var inst_31602 = (state_31643[(25)]);
var inst_31618 = (state_31643[(2)]);
var inst_31619 = cljs.core.next.call(null,inst_31602);
var inst_31583 = inst_31619;
var inst_31584 = null;
var inst_31585 = (0);
var inst_31586 = (0);
var state_31643__$1 = (function (){var statearr_31680 = state_31643;
(statearr_31680[(9)] = inst_31586);

(statearr_31680[(27)] = inst_31618);

(statearr_31680[(12)] = inst_31584);

(statearr_31680[(20)] = inst_31585);

(statearr_31680[(21)] = inst_31583);

return statearr_31680;
})();
var statearr_31681_31749 = state_31643__$1;
(statearr_31681_31749[(2)] = null);

(statearr_31681_31749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (43))){
var state_31643__$1 = state_31643;
var statearr_31682_31750 = state_31643__$1;
(statearr_31682_31750[(2)] = null);

(statearr_31682_31750[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (29))){
var inst_31627 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31683_31751 = state_31643__$1;
(statearr_31683_31751[(2)] = inst_31627);

(statearr_31683_31751[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (44))){
var inst_31636 = (state_31643[(2)]);
var state_31643__$1 = (function (){var statearr_31684 = state_31643;
(statearr_31684[(28)] = inst_31636);

return statearr_31684;
})();
var statearr_31685_31752 = state_31643__$1;
(statearr_31685_31752[(2)] = null);

(statearr_31685_31752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (6))){
var inst_31575 = (state_31643[(29)]);
var inst_31574 = cljs.core.deref.call(null,cs);
var inst_31575__$1 = cljs.core.keys.call(null,inst_31574);
var inst_31576 = cljs.core.count.call(null,inst_31575__$1);
var inst_31577 = cljs.core.reset_BANG_.call(null,dctr,inst_31576);
var inst_31582 = cljs.core.seq.call(null,inst_31575__$1);
var inst_31583 = inst_31582;
var inst_31584 = null;
var inst_31585 = (0);
var inst_31586 = (0);
var state_31643__$1 = (function (){var statearr_31686 = state_31643;
(statearr_31686[(30)] = inst_31577);

(statearr_31686[(9)] = inst_31586);

(statearr_31686[(29)] = inst_31575__$1);

(statearr_31686[(12)] = inst_31584);

(statearr_31686[(20)] = inst_31585);

(statearr_31686[(21)] = inst_31583);

return statearr_31686;
})();
var statearr_31687_31753 = state_31643__$1;
(statearr_31687_31753[(2)] = null);

(statearr_31687_31753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (28))){
var inst_31602 = (state_31643[(25)]);
var inst_31583 = (state_31643[(21)]);
var inst_31602__$1 = cljs.core.seq.call(null,inst_31583);
var state_31643__$1 = (function (){var statearr_31688 = state_31643;
(statearr_31688[(25)] = inst_31602__$1);

return statearr_31688;
})();
if(inst_31602__$1){
var statearr_31689_31754 = state_31643__$1;
(statearr_31689_31754[(1)] = (33));

} else {
var statearr_31690_31755 = state_31643__$1;
(statearr_31690_31755[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (25))){
var inst_31586 = (state_31643[(9)]);
var inst_31585 = (state_31643[(20)]);
var inst_31588 = (inst_31586 < inst_31585);
var inst_31589 = inst_31588;
var state_31643__$1 = state_31643;
if(cljs.core.truth_(inst_31589)){
var statearr_31691_31756 = state_31643__$1;
(statearr_31691_31756[(1)] = (27));

} else {
var statearr_31692_31757 = state_31643__$1;
(statearr_31692_31757[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (34))){
var state_31643__$1 = state_31643;
var statearr_31693_31758 = state_31643__$1;
(statearr_31693_31758[(2)] = null);

(statearr_31693_31758[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (17))){
var state_31643__$1 = state_31643;
var statearr_31694_31759 = state_31643__$1;
(statearr_31694_31759[(2)] = null);

(statearr_31694_31759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (3))){
var inst_31641 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31643__$1,inst_31641);
} else {
if((state_val_31644 === (12))){
var inst_31570 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31695_31760 = state_31643__$1;
(statearr_31695_31760[(2)] = inst_31570);

(statearr_31695_31760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (2))){
var state_31643__$1 = state_31643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31643__$1,(4),ch);
} else {
if((state_val_31644 === (23))){
var state_31643__$1 = state_31643;
var statearr_31696_31761 = state_31643__$1;
(statearr_31696_31761[(2)] = null);

(statearr_31696_31761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (35))){
var inst_31625 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31697_31762 = state_31643__$1;
(statearr_31697_31762[(2)] = inst_31625);

(statearr_31697_31762[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (19))){
var inst_31542 = (state_31643[(7)]);
var inst_31546 = cljs.core.chunk_first.call(null,inst_31542);
var inst_31547 = cljs.core.chunk_rest.call(null,inst_31542);
var inst_31548 = cljs.core.count.call(null,inst_31546);
var inst_31520 = inst_31547;
var inst_31521 = inst_31546;
var inst_31522 = inst_31548;
var inst_31523 = (0);
var state_31643__$1 = (function (){var statearr_31698 = state_31643;
(statearr_31698[(14)] = inst_31523);

(statearr_31698[(15)] = inst_31520);

(statearr_31698[(16)] = inst_31521);

(statearr_31698[(17)] = inst_31522);

return statearr_31698;
})();
var statearr_31699_31763 = state_31643__$1;
(statearr_31699_31763[(2)] = null);

(statearr_31699_31763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (11))){
var inst_31520 = (state_31643[(15)]);
var inst_31542 = (state_31643[(7)]);
var inst_31542__$1 = cljs.core.seq.call(null,inst_31520);
var state_31643__$1 = (function (){var statearr_31700 = state_31643;
(statearr_31700[(7)] = inst_31542__$1);

return statearr_31700;
})();
if(inst_31542__$1){
var statearr_31701_31764 = state_31643__$1;
(statearr_31701_31764[(1)] = (16));

} else {
var statearr_31702_31765 = state_31643__$1;
(statearr_31702_31765[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (9))){
var inst_31572 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31703_31766 = state_31643__$1;
(statearr_31703_31766[(2)] = inst_31572);

(statearr_31703_31766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (5))){
var inst_31518 = cljs.core.deref.call(null,cs);
var inst_31519 = cljs.core.seq.call(null,inst_31518);
var inst_31520 = inst_31519;
var inst_31521 = null;
var inst_31522 = (0);
var inst_31523 = (0);
var state_31643__$1 = (function (){var statearr_31704 = state_31643;
(statearr_31704[(14)] = inst_31523);

(statearr_31704[(15)] = inst_31520);

(statearr_31704[(16)] = inst_31521);

(statearr_31704[(17)] = inst_31522);

return statearr_31704;
})();
var statearr_31705_31767 = state_31643__$1;
(statearr_31705_31767[(2)] = null);

(statearr_31705_31767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (14))){
var state_31643__$1 = state_31643;
var statearr_31706_31768 = state_31643__$1;
(statearr_31706_31768[(2)] = null);

(statearr_31706_31768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (45))){
var inst_31633 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31707_31769 = state_31643__$1;
(statearr_31707_31769[(2)] = inst_31633);

(statearr_31707_31769[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (26))){
var inst_31575 = (state_31643[(29)]);
var inst_31629 = (state_31643[(2)]);
var inst_31630 = cljs.core.seq.call(null,inst_31575);
var state_31643__$1 = (function (){var statearr_31708 = state_31643;
(statearr_31708[(31)] = inst_31629);

return statearr_31708;
})();
if(inst_31630){
var statearr_31709_31770 = state_31643__$1;
(statearr_31709_31770[(1)] = (42));

} else {
var statearr_31710_31771 = state_31643__$1;
(statearr_31710_31771[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (16))){
var inst_31542 = (state_31643[(7)]);
var inst_31544 = cljs.core.chunked_seq_QMARK_.call(null,inst_31542);
var state_31643__$1 = state_31643;
if(inst_31544){
var statearr_31711_31772 = state_31643__$1;
(statearr_31711_31772[(1)] = (19));

} else {
var statearr_31712_31773 = state_31643__$1;
(statearr_31712_31773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (38))){
var inst_31622 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31713_31774 = state_31643__$1;
(statearr_31713_31774[(2)] = inst_31622);

(statearr_31713_31774[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (30))){
var state_31643__$1 = state_31643;
var statearr_31714_31775 = state_31643__$1;
(statearr_31714_31775[(2)] = null);

(statearr_31714_31775[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (10))){
var inst_31523 = (state_31643[(14)]);
var inst_31521 = (state_31643[(16)]);
var inst_31531 = cljs.core._nth.call(null,inst_31521,inst_31523);
var inst_31532 = cljs.core.nth.call(null,inst_31531,(0),null);
var inst_31533 = cljs.core.nth.call(null,inst_31531,(1),null);
var state_31643__$1 = (function (){var statearr_31715 = state_31643;
(statearr_31715[(26)] = inst_31532);

return statearr_31715;
})();
if(cljs.core.truth_(inst_31533)){
var statearr_31716_31776 = state_31643__$1;
(statearr_31716_31776[(1)] = (13));

} else {
var statearr_31717_31777 = state_31643__$1;
(statearr_31717_31777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (18))){
var inst_31568 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31718_31778 = state_31643__$1;
(statearr_31718_31778[(2)] = inst_31568);

(statearr_31718_31778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (42))){
var state_31643__$1 = state_31643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31643__$1,(45),dchan);
} else {
if((state_val_31644 === (37))){
var inst_31511 = (state_31643[(10)]);
var inst_31611 = (state_31643[(23)]);
var inst_31602 = (state_31643[(25)]);
var inst_31611__$1 = cljs.core.first.call(null,inst_31602);
var inst_31612 = cljs.core.async.put_BANG_.call(null,inst_31611__$1,inst_31511,done);
var state_31643__$1 = (function (){var statearr_31719 = state_31643;
(statearr_31719[(23)] = inst_31611__$1);

return statearr_31719;
})();
if(cljs.core.truth_(inst_31612)){
var statearr_31720_31779 = state_31643__$1;
(statearr_31720_31779[(1)] = (39));

} else {
var statearr_31721_31780 = state_31643__$1;
(statearr_31721_31780[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (8))){
var inst_31523 = (state_31643[(14)]);
var inst_31522 = (state_31643[(17)]);
var inst_31525 = (inst_31523 < inst_31522);
var inst_31526 = inst_31525;
var state_31643__$1 = state_31643;
if(cljs.core.truth_(inst_31526)){
var statearr_31722_31781 = state_31643__$1;
(statearr_31722_31781[(1)] = (10));

} else {
var statearr_31723_31782 = state_31643__$1;
(statearr_31723_31782[(1)] = (11));

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
});})(c__13946__auto___31728,cs,m,dchan,dctr,done))
;
return ((function (switch__13856__auto__,c__13946__auto___31728,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13857__auto__ = null;
var cljs$core$async$mult_$_state_machine__13857__auto____0 = (function (){
var statearr_31724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31724[(0)] = cljs$core$async$mult_$_state_machine__13857__auto__);

(statearr_31724[(1)] = (1));

return statearr_31724;
});
var cljs$core$async$mult_$_state_machine__13857__auto____1 = (function (state_31643){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31725){if((e31725 instanceof Object)){
var ex__13860__auto__ = e31725;
var statearr_31726_31783 = state_31643;
(statearr_31726_31783[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31784 = state_31643;
state_31643 = G__31784;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13857__auto__ = function(state_31643){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13857__auto____1.call(this,state_31643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13857__auto____0;
cljs$core$async$mult_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13857__auto____1;
return cljs$core$async$mult_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___31728,cs,m,dchan,dctr,done))
})();
var state__13948__auto__ = (function (){var statearr_31727 = f__13947__auto__.call(null);
(statearr_31727[(6)] = c__13946__auto___31728);

return statearr_31727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___31728,cs,m,dchan,dctr,done))
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
var G__31786 = arguments.length;
switch (G__31786) {
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
var len__4499__auto___31798 = arguments.length;
var i__4500__auto___31799 = (0);
while(true){
if((i__4500__auto___31799 < len__4499__auto___31798)){
args__4502__auto__.push((arguments[i__4500__auto___31799]));

var G__31800 = (i__4500__auto___31799 + (1));
i__4500__auto___31799 = G__31800;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31792){
var map__31793 = p__31792;
var map__31793__$1 = ((((!((map__31793 == null)))?(((((map__31793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31793):map__31793);
var opts = map__31793__$1;
var statearr_31795_31801 = state;
(statearr_31795_31801[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__31793,map__31793__$1,opts){
return (function (val){
var statearr_31796_31802 = state;
(statearr_31796_31802[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31793,map__31793__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_31797_31803 = state;
(statearr_31797_31803[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31788){
var G__31789 = cljs.core.first.call(null,seq31788);
var seq31788__$1 = cljs.core.next.call(null,seq31788);
var G__31790 = cljs.core.first.call(null,seq31788__$1);
var seq31788__$2 = cljs.core.next.call(null,seq31788__$1);
var G__31791 = cljs.core.first.call(null,seq31788__$2);
var seq31788__$3 = cljs.core.next.call(null,seq31788__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31789,G__31790,G__31791,seq31788__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31804 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31805){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31805 = meta31805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31806,meta31805__$1){
var self__ = this;
var _31806__$1 = this;
return (new cljs.core.async.t_cljs$core$async31804(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31805__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31806){
var self__ = this;
var _31806__$1 = this;
return self__.meta31805;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31804.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31805","meta31805",1431765966,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31804";

cljs.core.async.t_cljs$core$async31804.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31804");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31804.
 */
cljs.core.async.__GT_t_cljs$core$async31804 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31804(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31805){
return (new cljs.core.async.t_cljs$core$async31804(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31805));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31804(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13946__auto___31968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___31968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___31968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31908){
var state_val_31909 = (state_31908[(1)]);
if((state_val_31909 === (7))){
var inst_31823 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31910_31969 = state_31908__$1;
(statearr_31910_31969[(2)] = inst_31823);

(statearr_31910_31969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (20))){
var inst_31835 = (state_31908[(7)]);
var state_31908__$1 = state_31908;
var statearr_31911_31970 = state_31908__$1;
(statearr_31911_31970[(2)] = inst_31835);

(statearr_31911_31970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (27))){
var state_31908__$1 = state_31908;
var statearr_31912_31971 = state_31908__$1;
(statearr_31912_31971[(2)] = null);

(statearr_31912_31971[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (1))){
var inst_31810 = (state_31908[(8)]);
var inst_31810__$1 = calc_state.call(null);
var inst_31812 = (inst_31810__$1 == null);
var inst_31813 = cljs.core.not.call(null,inst_31812);
var state_31908__$1 = (function (){var statearr_31913 = state_31908;
(statearr_31913[(8)] = inst_31810__$1);

return statearr_31913;
})();
if(inst_31813){
var statearr_31914_31972 = state_31908__$1;
(statearr_31914_31972[(1)] = (2));

} else {
var statearr_31915_31973 = state_31908__$1;
(statearr_31915_31973[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (24))){
var inst_31859 = (state_31908[(9)]);
var inst_31882 = (state_31908[(10)]);
var inst_31868 = (state_31908[(11)]);
var inst_31882__$1 = inst_31859.call(null,inst_31868);
var state_31908__$1 = (function (){var statearr_31916 = state_31908;
(statearr_31916[(10)] = inst_31882__$1);

return statearr_31916;
})();
if(cljs.core.truth_(inst_31882__$1)){
var statearr_31917_31974 = state_31908__$1;
(statearr_31917_31974[(1)] = (29));

} else {
var statearr_31918_31975 = state_31908__$1;
(statearr_31918_31975[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (4))){
var inst_31826 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31826)){
var statearr_31919_31976 = state_31908__$1;
(statearr_31919_31976[(1)] = (8));

} else {
var statearr_31920_31977 = state_31908__$1;
(statearr_31920_31977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (15))){
var inst_31853 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31853)){
var statearr_31921_31978 = state_31908__$1;
(statearr_31921_31978[(1)] = (19));

} else {
var statearr_31922_31979 = state_31908__$1;
(statearr_31922_31979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (21))){
var inst_31858 = (state_31908[(12)]);
var inst_31858__$1 = (state_31908[(2)]);
var inst_31859 = cljs.core.get.call(null,inst_31858__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31860 = cljs.core.get.call(null,inst_31858__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31861 = cljs.core.get.call(null,inst_31858__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31908__$1 = (function (){var statearr_31923 = state_31908;
(statearr_31923[(9)] = inst_31859);

(statearr_31923[(13)] = inst_31860);

(statearr_31923[(12)] = inst_31858__$1);

return statearr_31923;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31908__$1,(22),inst_31861);
} else {
if((state_val_31909 === (31))){
var inst_31890 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31890)){
var statearr_31924_31980 = state_31908__$1;
(statearr_31924_31980[(1)] = (32));

} else {
var statearr_31925_31981 = state_31908__$1;
(statearr_31925_31981[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (32))){
var inst_31867 = (state_31908[(14)]);
var state_31908__$1 = state_31908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31908__$1,(35),out,inst_31867);
} else {
if((state_val_31909 === (33))){
var inst_31858 = (state_31908[(12)]);
var inst_31835 = inst_31858;
var state_31908__$1 = (function (){var statearr_31926 = state_31908;
(statearr_31926[(7)] = inst_31835);

return statearr_31926;
})();
var statearr_31927_31982 = state_31908__$1;
(statearr_31927_31982[(2)] = null);

(statearr_31927_31982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (13))){
var inst_31835 = (state_31908[(7)]);
var inst_31842 = inst_31835.cljs$lang$protocol_mask$partition0$;
var inst_31843 = (inst_31842 & (64));
var inst_31844 = inst_31835.cljs$core$ISeq$;
var inst_31845 = (cljs.core.PROTOCOL_SENTINEL === inst_31844);
var inst_31846 = ((inst_31843) || (inst_31845));
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31846)){
var statearr_31928_31983 = state_31908__$1;
(statearr_31928_31983[(1)] = (16));

} else {
var statearr_31929_31984 = state_31908__$1;
(statearr_31929_31984[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (22))){
var inst_31867 = (state_31908[(14)]);
var inst_31868 = (state_31908[(11)]);
var inst_31866 = (state_31908[(2)]);
var inst_31867__$1 = cljs.core.nth.call(null,inst_31866,(0),null);
var inst_31868__$1 = cljs.core.nth.call(null,inst_31866,(1),null);
var inst_31869 = (inst_31867__$1 == null);
var inst_31870 = cljs.core._EQ_.call(null,inst_31868__$1,change);
var inst_31871 = ((inst_31869) || (inst_31870));
var state_31908__$1 = (function (){var statearr_31930 = state_31908;
(statearr_31930[(14)] = inst_31867__$1);

(statearr_31930[(11)] = inst_31868__$1);

return statearr_31930;
})();
if(cljs.core.truth_(inst_31871)){
var statearr_31931_31985 = state_31908__$1;
(statearr_31931_31985[(1)] = (23));

} else {
var statearr_31932_31986 = state_31908__$1;
(statearr_31932_31986[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (36))){
var inst_31858 = (state_31908[(12)]);
var inst_31835 = inst_31858;
var state_31908__$1 = (function (){var statearr_31933 = state_31908;
(statearr_31933[(7)] = inst_31835);

return statearr_31933;
})();
var statearr_31934_31987 = state_31908__$1;
(statearr_31934_31987[(2)] = null);

(statearr_31934_31987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (29))){
var inst_31882 = (state_31908[(10)]);
var state_31908__$1 = state_31908;
var statearr_31935_31988 = state_31908__$1;
(statearr_31935_31988[(2)] = inst_31882);

(statearr_31935_31988[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (6))){
var state_31908__$1 = state_31908;
var statearr_31936_31989 = state_31908__$1;
(statearr_31936_31989[(2)] = false);

(statearr_31936_31989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (28))){
var inst_31878 = (state_31908[(2)]);
var inst_31879 = calc_state.call(null);
var inst_31835 = inst_31879;
var state_31908__$1 = (function (){var statearr_31937 = state_31908;
(statearr_31937[(15)] = inst_31878);

(statearr_31937[(7)] = inst_31835);

return statearr_31937;
})();
var statearr_31938_31990 = state_31908__$1;
(statearr_31938_31990[(2)] = null);

(statearr_31938_31990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (25))){
var inst_31904 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31939_31991 = state_31908__$1;
(statearr_31939_31991[(2)] = inst_31904);

(statearr_31939_31991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (34))){
var inst_31902 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31940_31992 = state_31908__$1;
(statearr_31940_31992[(2)] = inst_31902);

(statearr_31940_31992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (17))){
var state_31908__$1 = state_31908;
var statearr_31941_31993 = state_31908__$1;
(statearr_31941_31993[(2)] = false);

(statearr_31941_31993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (3))){
var state_31908__$1 = state_31908;
var statearr_31942_31994 = state_31908__$1;
(statearr_31942_31994[(2)] = false);

(statearr_31942_31994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (12))){
var inst_31906 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31908__$1,inst_31906);
} else {
if((state_val_31909 === (2))){
var inst_31810 = (state_31908[(8)]);
var inst_31815 = inst_31810.cljs$lang$protocol_mask$partition0$;
var inst_31816 = (inst_31815 & (64));
var inst_31817 = inst_31810.cljs$core$ISeq$;
var inst_31818 = (cljs.core.PROTOCOL_SENTINEL === inst_31817);
var inst_31819 = ((inst_31816) || (inst_31818));
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31819)){
var statearr_31943_31995 = state_31908__$1;
(statearr_31943_31995[(1)] = (5));

} else {
var statearr_31944_31996 = state_31908__$1;
(statearr_31944_31996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (23))){
var inst_31867 = (state_31908[(14)]);
var inst_31873 = (inst_31867 == null);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31873)){
var statearr_31945_31997 = state_31908__$1;
(statearr_31945_31997[(1)] = (26));

} else {
var statearr_31946_31998 = state_31908__$1;
(statearr_31946_31998[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (35))){
var inst_31893 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31893)){
var statearr_31947_31999 = state_31908__$1;
(statearr_31947_31999[(1)] = (36));

} else {
var statearr_31948_32000 = state_31908__$1;
(statearr_31948_32000[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (19))){
var inst_31835 = (state_31908[(7)]);
var inst_31855 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31835);
var state_31908__$1 = state_31908;
var statearr_31949_32001 = state_31908__$1;
(statearr_31949_32001[(2)] = inst_31855);

(statearr_31949_32001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (11))){
var inst_31835 = (state_31908[(7)]);
var inst_31839 = (inst_31835 == null);
var inst_31840 = cljs.core.not.call(null,inst_31839);
var state_31908__$1 = state_31908;
if(inst_31840){
var statearr_31950_32002 = state_31908__$1;
(statearr_31950_32002[(1)] = (13));

} else {
var statearr_31951_32003 = state_31908__$1;
(statearr_31951_32003[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (9))){
var inst_31810 = (state_31908[(8)]);
var state_31908__$1 = state_31908;
var statearr_31952_32004 = state_31908__$1;
(statearr_31952_32004[(2)] = inst_31810);

(statearr_31952_32004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (5))){
var state_31908__$1 = state_31908;
var statearr_31953_32005 = state_31908__$1;
(statearr_31953_32005[(2)] = true);

(statearr_31953_32005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (14))){
var state_31908__$1 = state_31908;
var statearr_31954_32006 = state_31908__$1;
(statearr_31954_32006[(2)] = false);

(statearr_31954_32006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (26))){
var inst_31868 = (state_31908[(11)]);
var inst_31875 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31868);
var state_31908__$1 = state_31908;
var statearr_31955_32007 = state_31908__$1;
(statearr_31955_32007[(2)] = inst_31875);

(statearr_31955_32007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (16))){
var state_31908__$1 = state_31908;
var statearr_31956_32008 = state_31908__$1;
(statearr_31956_32008[(2)] = true);

(statearr_31956_32008[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (38))){
var inst_31898 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31957_32009 = state_31908__$1;
(statearr_31957_32009[(2)] = inst_31898);

(statearr_31957_32009[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (30))){
var inst_31859 = (state_31908[(9)]);
var inst_31860 = (state_31908[(13)]);
var inst_31868 = (state_31908[(11)]);
var inst_31885 = cljs.core.empty_QMARK_.call(null,inst_31859);
var inst_31886 = inst_31860.call(null,inst_31868);
var inst_31887 = cljs.core.not.call(null,inst_31886);
var inst_31888 = ((inst_31885) && (inst_31887));
var state_31908__$1 = state_31908;
var statearr_31958_32010 = state_31908__$1;
(statearr_31958_32010[(2)] = inst_31888);

(statearr_31958_32010[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (10))){
var inst_31810 = (state_31908[(8)]);
var inst_31831 = (state_31908[(2)]);
var inst_31832 = cljs.core.get.call(null,inst_31831,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31833 = cljs.core.get.call(null,inst_31831,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31834 = cljs.core.get.call(null,inst_31831,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31835 = inst_31810;
var state_31908__$1 = (function (){var statearr_31959 = state_31908;
(statearr_31959[(16)] = inst_31834);

(statearr_31959[(17)] = inst_31832);

(statearr_31959[(18)] = inst_31833);

(statearr_31959[(7)] = inst_31835);

return statearr_31959;
})();
var statearr_31960_32011 = state_31908__$1;
(statearr_31960_32011[(2)] = null);

(statearr_31960_32011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (18))){
var inst_31850 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31961_32012 = state_31908__$1;
(statearr_31961_32012[(2)] = inst_31850);

(statearr_31961_32012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (37))){
var state_31908__$1 = state_31908;
var statearr_31962_32013 = state_31908__$1;
(statearr_31962_32013[(2)] = null);

(statearr_31962_32013[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (8))){
var inst_31810 = (state_31908[(8)]);
var inst_31828 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31810);
var state_31908__$1 = state_31908;
var statearr_31963_32014 = state_31908__$1;
(statearr_31963_32014[(2)] = inst_31828);

(statearr_31963_32014[(1)] = (10));


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
});})(c__13946__auto___31968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13856__auto__,c__13946__auto___31968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13857__auto__ = null;
var cljs$core$async$mix_$_state_machine__13857__auto____0 = (function (){
var statearr_31964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31964[(0)] = cljs$core$async$mix_$_state_machine__13857__auto__);

(statearr_31964[(1)] = (1));

return statearr_31964;
});
var cljs$core$async$mix_$_state_machine__13857__auto____1 = (function (state_31908){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_31908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e31965){if((e31965 instanceof Object)){
var ex__13860__auto__ = e31965;
var statearr_31966_32015 = state_31908;
(statearr_31966_32015[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32016 = state_31908;
state_31908 = G__32016;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13857__auto__ = function(state_31908){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13857__auto____1.call(this,state_31908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13857__auto____0;
cljs$core$async$mix_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13857__auto____1;
return cljs$core$async$mix_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___31968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13948__auto__ = (function (){var statearr_31967 = f__13947__auto__.call(null);
(statearr_31967[(6)] = c__13946__auto___31968);

return statearr_31967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___31968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__32018 = arguments.length;
switch (G__32018) {
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
var G__32022 = arguments.length;
switch (G__32022) {
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
return (function (p1__32020_SHARP_){
if(cljs.core.truth_(p1__32020_SHARP_.call(null,topic))){
return p1__32020_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32020_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32023 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32024){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32024 = meta32024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32025,meta32024__$1){
var self__ = this;
var _32025__$1 = this;
return (new cljs.core.async.t_cljs$core$async32023(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32024__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32025){
var self__ = this;
var _32025__$1 = this;
return self__.meta32024;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32023.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32023.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32023.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32023.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32023.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32023.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32023.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32024","meta32024",-1266454195,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32023";

cljs.core.async.t_cljs$core$async32023.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32023");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32023.
 */
cljs.core.async.__GT_t_cljs$core$async32023 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32023(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32024){
return (new cljs.core.async.t_cljs$core$async32023(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32024));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32023(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13946__auto___32143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___32143,mults,ensure_mult,p){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___32143,mults,ensure_mult,p){
return (function (state_32097){
var state_val_32098 = (state_32097[(1)]);
if((state_val_32098 === (7))){
var inst_32093 = (state_32097[(2)]);
var state_32097__$1 = state_32097;
var statearr_32099_32144 = state_32097__$1;
(statearr_32099_32144[(2)] = inst_32093);

(statearr_32099_32144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (20))){
var state_32097__$1 = state_32097;
var statearr_32100_32145 = state_32097__$1;
(statearr_32100_32145[(2)] = null);

(statearr_32100_32145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (1))){
var state_32097__$1 = state_32097;
var statearr_32101_32146 = state_32097__$1;
(statearr_32101_32146[(2)] = null);

(statearr_32101_32146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (24))){
var inst_32076 = (state_32097[(7)]);
var inst_32085 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32076);
var state_32097__$1 = state_32097;
var statearr_32102_32147 = state_32097__$1;
(statearr_32102_32147[(2)] = inst_32085);

(statearr_32102_32147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (4))){
var inst_32028 = (state_32097[(8)]);
var inst_32028__$1 = (state_32097[(2)]);
var inst_32029 = (inst_32028__$1 == null);
var state_32097__$1 = (function (){var statearr_32103 = state_32097;
(statearr_32103[(8)] = inst_32028__$1);

return statearr_32103;
})();
if(cljs.core.truth_(inst_32029)){
var statearr_32104_32148 = state_32097__$1;
(statearr_32104_32148[(1)] = (5));

} else {
var statearr_32105_32149 = state_32097__$1;
(statearr_32105_32149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (15))){
var inst_32070 = (state_32097[(2)]);
var state_32097__$1 = state_32097;
var statearr_32106_32150 = state_32097__$1;
(statearr_32106_32150[(2)] = inst_32070);

(statearr_32106_32150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (21))){
var inst_32090 = (state_32097[(2)]);
var state_32097__$1 = (function (){var statearr_32107 = state_32097;
(statearr_32107[(9)] = inst_32090);

return statearr_32107;
})();
var statearr_32108_32151 = state_32097__$1;
(statearr_32108_32151[(2)] = null);

(statearr_32108_32151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (13))){
var inst_32052 = (state_32097[(10)]);
var inst_32054 = cljs.core.chunked_seq_QMARK_.call(null,inst_32052);
var state_32097__$1 = state_32097;
if(inst_32054){
var statearr_32109_32152 = state_32097__$1;
(statearr_32109_32152[(1)] = (16));

} else {
var statearr_32110_32153 = state_32097__$1;
(statearr_32110_32153[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (22))){
var inst_32082 = (state_32097[(2)]);
var state_32097__$1 = state_32097;
if(cljs.core.truth_(inst_32082)){
var statearr_32111_32154 = state_32097__$1;
(statearr_32111_32154[(1)] = (23));

} else {
var statearr_32112_32155 = state_32097__$1;
(statearr_32112_32155[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (6))){
var inst_32078 = (state_32097[(11)]);
var inst_32076 = (state_32097[(7)]);
var inst_32028 = (state_32097[(8)]);
var inst_32076__$1 = topic_fn.call(null,inst_32028);
var inst_32077 = cljs.core.deref.call(null,mults);
var inst_32078__$1 = cljs.core.get.call(null,inst_32077,inst_32076__$1);
var state_32097__$1 = (function (){var statearr_32113 = state_32097;
(statearr_32113[(11)] = inst_32078__$1);

(statearr_32113[(7)] = inst_32076__$1);

return statearr_32113;
})();
if(cljs.core.truth_(inst_32078__$1)){
var statearr_32114_32156 = state_32097__$1;
(statearr_32114_32156[(1)] = (19));

} else {
var statearr_32115_32157 = state_32097__$1;
(statearr_32115_32157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (25))){
var inst_32087 = (state_32097[(2)]);
var state_32097__$1 = state_32097;
var statearr_32116_32158 = state_32097__$1;
(statearr_32116_32158[(2)] = inst_32087);

(statearr_32116_32158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (17))){
var inst_32052 = (state_32097[(10)]);
var inst_32061 = cljs.core.first.call(null,inst_32052);
var inst_32062 = cljs.core.async.muxch_STAR_.call(null,inst_32061);
var inst_32063 = cljs.core.async.close_BANG_.call(null,inst_32062);
var inst_32064 = cljs.core.next.call(null,inst_32052);
var inst_32038 = inst_32064;
var inst_32039 = null;
var inst_32040 = (0);
var inst_32041 = (0);
var state_32097__$1 = (function (){var statearr_32117 = state_32097;
(statearr_32117[(12)] = inst_32038);

(statearr_32117[(13)] = inst_32039);

(statearr_32117[(14)] = inst_32041);

(statearr_32117[(15)] = inst_32040);

(statearr_32117[(16)] = inst_32063);

return statearr_32117;
})();
var statearr_32118_32159 = state_32097__$1;
(statearr_32118_32159[(2)] = null);

(statearr_32118_32159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (3))){
var inst_32095 = (state_32097[(2)]);
var state_32097__$1 = state_32097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32097__$1,inst_32095);
} else {
if((state_val_32098 === (12))){
var inst_32072 = (state_32097[(2)]);
var state_32097__$1 = state_32097;
var statearr_32119_32160 = state_32097__$1;
(statearr_32119_32160[(2)] = inst_32072);

(statearr_32119_32160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (2))){
var state_32097__$1 = state_32097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32097__$1,(4),ch);
} else {
if((state_val_32098 === (23))){
var state_32097__$1 = state_32097;
var statearr_32120_32161 = state_32097__$1;
(statearr_32120_32161[(2)] = null);

(statearr_32120_32161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (19))){
var inst_32078 = (state_32097[(11)]);
var inst_32028 = (state_32097[(8)]);
var inst_32080 = cljs.core.async.muxch_STAR_.call(null,inst_32078);
var state_32097__$1 = state_32097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32097__$1,(22),inst_32080,inst_32028);
} else {
if((state_val_32098 === (11))){
var inst_32052 = (state_32097[(10)]);
var inst_32038 = (state_32097[(12)]);
var inst_32052__$1 = cljs.core.seq.call(null,inst_32038);
var state_32097__$1 = (function (){var statearr_32121 = state_32097;
(statearr_32121[(10)] = inst_32052__$1);

return statearr_32121;
})();
if(inst_32052__$1){
var statearr_32122_32162 = state_32097__$1;
(statearr_32122_32162[(1)] = (13));

} else {
var statearr_32123_32163 = state_32097__$1;
(statearr_32123_32163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (9))){
var inst_32074 = (state_32097[(2)]);
var state_32097__$1 = state_32097;
var statearr_32124_32164 = state_32097__$1;
(statearr_32124_32164[(2)] = inst_32074);

(statearr_32124_32164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (5))){
var inst_32035 = cljs.core.deref.call(null,mults);
var inst_32036 = cljs.core.vals.call(null,inst_32035);
var inst_32037 = cljs.core.seq.call(null,inst_32036);
var inst_32038 = inst_32037;
var inst_32039 = null;
var inst_32040 = (0);
var inst_32041 = (0);
var state_32097__$1 = (function (){var statearr_32125 = state_32097;
(statearr_32125[(12)] = inst_32038);

(statearr_32125[(13)] = inst_32039);

(statearr_32125[(14)] = inst_32041);

(statearr_32125[(15)] = inst_32040);

return statearr_32125;
})();
var statearr_32126_32165 = state_32097__$1;
(statearr_32126_32165[(2)] = null);

(statearr_32126_32165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (14))){
var state_32097__$1 = state_32097;
var statearr_32130_32166 = state_32097__$1;
(statearr_32130_32166[(2)] = null);

(statearr_32130_32166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (16))){
var inst_32052 = (state_32097[(10)]);
var inst_32056 = cljs.core.chunk_first.call(null,inst_32052);
var inst_32057 = cljs.core.chunk_rest.call(null,inst_32052);
var inst_32058 = cljs.core.count.call(null,inst_32056);
var inst_32038 = inst_32057;
var inst_32039 = inst_32056;
var inst_32040 = inst_32058;
var inst_32041 = (0);
var state_32097__$1 = (function (){var statearr_32131 = state_32097;
(statearr_32131[(12)] = inst_32038);

(statearr_32131[(13)] = inst_32039);

(statearr_32131[(14)] = inst_32041);

(statearr_32131[(15)] = inst_32040);

return statearr_32131;
})();
var statearr_32132_32167 = state_32097__$1;
(statearr_32132_32167[(2)] = null);

(statearr_32132_32167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (10))){
var inst_32038 = (state_32097[(12)]);
var inst_32039 = (state_32097[(13)]);
var inst_32041 = (state_32097[(14)]);
var inst_32040 = (state_32097[(15)]);
var inst_32046 = cljs.core._nth.call(null,inst_32039,inst_32041);
var inst_32047 = cljs.core.async.muxch_STAR_.call(null,inst_32046);
var inst_32048 = cljs.core.async.close_BANG_.call(null,inst_32047);
var inst_32049 = (inst_32041 + (1));
var tmp32127 = inst_32038;
var tmp32128 = inst_32039;
var tmp32129 = inst_32040;
var inst_32038__$1 = tmp32127;
var inst_32039__$1 = tmp32128;
var inst_32040__$1 = tmp32129;
var inst_32041__$1 = inst_32049;
var state_32097__$1 = (function (){var statearr_32133 = state_32097;
(statearr_32133[(12)] = inst_32038__$1);

(statearr_32133[(17)] = inst_32048);

(statearr_32133[(13)] = inst_32039__$1);

(statearr_32133[(14)] = inst_32041__$1);

(statearr_32133[(15)] = inst_32040__$1);

return statearr_32133;
})();
var statearr_32134_32168 = state_32097__$1;
(statearr_32134_32168[(2)] = null);

(statearr_32134_32168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (18))){
var inst_32067 = (state_32097[(2)]);
var state_32097__$1 = state_32097;
var statearr_32135_32169 = state_32097__$1;
(statearr_32135_32169[(2)] = inst_32067);

(statearr_32135_32169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32098 === (8))){
var inst_32041 = (state_32097[(14)]);
var inst_32040 = (state_32097[(15)]);
var inst_32043 = (inst_32041 < inst_32040);
var inst_32044 = inst_32043;
var state_32097__$1 = state_32097;
if(cljs.core.truth_(inst_32044)){
var statearr_32136_32170 = state_32097__$1;
(statearr_32136_32170[(1)] = (10));

} else {
var statearr_32137_32171 = state_32097__$1;
(statearr_32137_32171[(1)] = (11));

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
});})(c__13946__auto___32143,mults,ensure_mult,p))
;
return ((function (switch__13856__auto__,c__13946__auto___32143,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_32138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32138[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_32138[(1)] = (1));

return statearr_32138;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_32097){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_32097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e32139){if((e32139 instanceof Object)){
var ex__13860__auto__ = e32139;
var statearr_32140_32172 = state_32097;
(statearr_32140_32172[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32173 = state_32097;
state_32097 = G__32173;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_32097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_32097);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___32143,mults,ensure_mult,p))
})();
var state__13948__auto__ = (function (){var statearr_32141 = f__13947__auto__.call(null);
(statearr_32141[(6)] = c__13946__auto___32143);

return statearr_32141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___32143,mults,ensure_mult,p))
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
var G__32175 = arguments.length;
switch (G__32175) {
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
var G__32178 = arguments.length;
switch (G__32178) {
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
var G__32181 = arguments.length;
switch (G__32181) {
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
var c__13946__auto___32248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___32248,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___32248,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32220){
var state_val_32221 = (state_32220[(1)]);
if((state_val_32221 === (7))){
var state_32220__$1 = state_32220;
var statearr_32222_32249 = state_32220__$1;
(statearr_32222_32249[(2)] = null);

(statearr_32222_32249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (1))){
var state_32220__$1 = state_32220;
var statearr_32223_32250 = state_32220__$1;
(statearr_32223_32250[(2)] = null);

(statearr_32223_32250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (4))){
var inst_32184 = (state_32220[(7)]);
var inst_32186 = (inst_32184 < cnt);
var state_32220__$1 = state_32220;
if(cljs.core.truth_(inst_32186)){
var statearr_32224_32251 = state_32220__$1;
(statearr_32224_32251[(1)] = (6));

} else {
var statearr_32225_32252 = state_32220__$1;
(statearr_32225_32252[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (15))){
var inst_32216 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32226_32253 = state_32220__$1;
(statearr_32226_32253[(2)] = inst_32216);

(statearr_32226_32253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (13))){
var inst_32209 = cljs.core.async.close_BANG_.call(null,out);
var state_32220__$1 = state_32220;
var statearr_32227_32254 = state_32220__$1;
(statearr_32227_32254[(2)] = inst_32209);

(statearr_32227_32254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (6))){
var state_32220__$1 = state_32220;
var statearr_32228_32255 = state_32220__$1;
(statearr_32228_32255[(2)] = null);

(statearr_32228_32255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (3))){
var inst_32218 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32220__$1,inst_32218);
} else {
if((state_val_32221 === (12))){
var inst_32206 = (state_32220[(8)]);
var inst_32206__$1 = (state_32220[(2)]);
var inst_32207 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32206__$1);
var state_32220__$1 = (function (){var statearr_32229 = state_32220;
(statearr_32229[(8)] = inst_32206__$1);

return statearr_32229;
})();
if(cljs.core.truth_(inst_32207)){
var statearr_32230_32256 = state_32220__$1;
(statearr_32230_32256[(1)] = (13));

} else {
var statearr_32231_32257 = state_32220__$1;
(statearr_32231_32257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (2))){
var inst_32183 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32184 = (0);
var state_32220__$1 = (function (){var statearr_32232 = state_32220;
(statearr_32232[(7)] = inst_32184);

(statearr_32232[(9)] = inst_32183);

return statearr_32232;
})();
var statearr_32233_32258 = state_32220__$1;
(statearr_32233_32258[(2)] = null);

(statearr_32233_32258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (11))){
var inst_32184 = (state_32220[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32220,(10),Object,null,(9));
var inst_32193 = chs__$1.call(null,inst_32184);
var inst_32194 = done.call(null,inst_32184);
var inst_32195 = cljs.core.async.take_BANG_.call(null,inst_32193,inst_32194);
var state_32220__$1 = state_32220;
var statearr_32234_32259 = state_32220__$1;
(statearr_32234_32259[(2)] = inst_32195);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32220__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (9))){
var inst_32184 = (state_32220[(7)]);
var inst_32197 = (state_32220[(2)]);
var inst_32198 = (inst_32184 + (1));
var inst_32184__$1 = inst_32198;
var state_32220__$1 = (function (){var statearr_32235 = state_32220;
(statearr_32235[(7)] = inst_32184__$1);

(statearr_32235[(10)] = inst_32197);

return statearr_32235;
})();
var statearr_32236_32260 = state_32220__$1;
(statearr_32236_32260[(2)] = null);

(statearr_32236_32260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (5))){
var inst_32204 = (state_32220[(2)]);
var state_32220__$1 = (function (){var statearr_32237 = state_32220;
(statearr_32237[(11)] = inst_32204);

return statearr_32237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32220__$1,(12),dchan);
} else {
if((state_val_32221 === (14))){
var inst_32206 = (state_32220[(8)]);
var inst_32211 = cljs.core.apply.call(null,f,inst_32206);
var state_32220__$1 = state_32220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32220__$1,(16),out,inst_32211);
} else {
if((state_val_32221 === (16))){
var inst_32213 = (state_32220[(2)]);
var state_32220__$1 = (function (){var statearr_32238 = state_32220;
(statearr_32238[(12)] = inst_32213);

return statearr_32238;
})();
var statearr_32239_32261 = state_32220__$1;
(statearr_32239_32261[(2)] = null);

(statearr_32239_32261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (10))){
var inst_32188 = (state_32220[(2)]);
var inst_32189 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32220__$1 = (function (){var statearr_32240 = state_32220;
(statearr_32240[(13)] = inst_32188);

return statearr_32240;
})();
var statearr_32241_32262 = state_32220__$1;
(statearr_32241_32262[(2)] = inst_32189);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32220__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32221 === (8))){
var inst_32202 = (state_32220[(2)]);
var state_32220__$1 = state_32220;
var statearr_32242_32263 = state_32220__$1;
(statearr_32242_32263[(2)] = inst_32202);

(statearr_32242_32263[(1)] = (5));


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
});})(c__13946__auto___32248,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13856__auto__,c__13946__auto___32248,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_32243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32243[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_32243[(1)] = (1));

return statearr_32243;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_32220){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_32220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e32244){if((e32244 instanceof Object)){
var ex__13860__auto__ = e32244;
var statearr_32245_32264 = state_32220;
(statearr_32245_32264[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32265 = state_32220;
state_32220 = G__32265;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_32220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_32220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___32248,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13948__auto__ = (function (){var statearr_32246 = f__13947__auto__.call(null);
(statearr_32246[(6)] = c__13946__auto___32248);

return statearr_32246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___32248,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32268 = arguments.length;
switch (G__32268) {
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
var c__13946__auto___32322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___32322,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___32322,out){
return (function (state_32300){
var state_val_32301 = (state_32300[(1)]);
if((state_val_32301 === (7))){
var inst_32280 = (state_32300[(7)]);
var inst_32279 = (state_32300[(8)]);
var inst_32279__$1 = (state_32300[(2)]);
var inst_32280__$1 = cljs.core.nth.call(null,inst_32279__$1,(0),null);
var inst_32281 = cljs.core.nth.call(null,inst_32279__$1,(1),null);
var inst_32282 = (inst_32280__$1 == null);
var state_32300__$1 = (function (){var statearr_32302 = state_32300;
(statearr_32302[(9)] = inst_32281);

(statearr_32302[(7)] = inst_32280__$1);

(statearr_32302[(8)] = inst_32279__$1);

return statearr_32302;
})();
if(cljs.core.truth_(inst_32282)){
var statearr_32303_32323 = state_32300__$1;
(statearr_32303_32323[(1)] = (8));

} else {
var statearr_32304_32324 = state_32300__$1;
(statearr_32304_32324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (1))){
var inst_32269 = cljs.core.vec.call(null,chs);
var inst_32270 = inst_32269;
var state_32300__$1 = (function (){var statearr_32305 = state_32300;
(statearr_32305[(10)] = inst_32270);

return statearr_32305;
})();
var statearr_32306_32325 = state_32300__$1;
(statearr_32306_32325[(2)] = null);

(statearr_32306_32325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (4))){
var inst_32270 = (state_32300[(10)]);
var state_32300__$1 = state_32300;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32300__$1,(7),inst_32270);
} else {
if((state_val_32301 === (6))){
var inst_32296 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32307_32326 = state_32300__$1;
(statearr_32307_32326[(2)] = inst_32296);

(statearr_32307_32326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (3))){
var inst_32298 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32300__$1,inst_32298);
} else {
if((state_val_32301 === (2))){
var inst_32270 = (state_32300[(10)]);
var inst_32272 = cljs.core.count.call(null,inst_32270);
var inst_32273 = (inst_32272 > (0));
var state_32300__$1 = state_32300;
if(cljs.core.truth_(inst_32273)){
var statearr_32309_32327 = state_32300__$1;
(statearr_32309_32327[(1)] = (4));

} else {
var statearr_32310_32328 = state_32300__$1;
(statearr_32310_32328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (11))){
var inst_32270 = (state_32300[(10)]);
var inst_32289 = (state_32300[(2)]);
var tmp32308 = inst_32270;
var inst_32270__$1 = tmp32308;
var state_32300__$1 = (function (){var statearr_32311 = state_32300;
(statearr_32311[(10)] = inst_32270__$1);

(statearr_32311[(11)] = inst_32289);

return statearr_32311;
})();
var statearr_32312_32329 = state_32300__$1;
(statearr_32312_32329[(2)] = null);

(statearr_32312_32329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (9))){
var inst_32280 = (state_32300[(7)]);
var state_32300__$1 = state_32300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32300__$1,(11),out,inst_32280);
} else {
if((state_val_32301 === (5))){
var inst_32294 = cljs.core.async.close_BANG_.call(null,out);
var state_32300__$1 = state_32300;
var statearr_32313_32330 = state_32300__$1;
(statearr_32313_32330[(2)] = inst_32294);

(statearr_32313_32330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (10))){
var inst_32292 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32314_32331 = state_32300__$1;
(statearr_32314_32331[(2)] = inst_32292);

(statearr_32314_32331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (8))){
var inst_32281 = (state_32300[(9)]);
var inst_32280 = (state_32300[(7)]);
var inst_32270 = (state_32300[(10)]);
var inst_32279 = (state_32300[(8)]);
var inst_32284 = (function (){var cs = inst_32270;
var vec__32275 = inst_32279;
var v = inst_32280;
var c = inst_32281;
return ((function (cs,vec__32275,v,c,inst_32281,inst_32280,inst_32270,inst_32279,state_val_32301,c__13946__auto___32322,out){
return (function (p1__32266_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32266_SHARP_);
});
;})(cs,vec__32275,v,c,inst_32281,inst_32280,inst_32270,inst_32279,state_val_32301,c__13946__auto___32322,out))
})();
var inst_32285 = cljs.core.filterv.call(null,inst_32284,inst_32270);
var inst_32270__$1 = inst_32285;
var state_32300__$1 = (function (){var statearr_32315 = state_32300;
(statearr_32315[(10)] = inst_32270__$1);

return statearr_32315;
})();
var statearr_32316_32332 = state_32300__$1;
(statearr_32316_32332[(2)] = null);

(statearr_32316_32332[(1)] = (2));


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
});})(c__13946__auto___32322,out))
;
return ((function (switch__13856__auto__,c__13946__auto___32322,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_32317 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32317[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_32317[(1)] = (1));

return statearr_32317;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_32300){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_32300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e32318){if((e32318 instanceof Object)){
var ex__13860__auto__ = e32318;
var statearr_32319_32333 = state_32300;
(statearr_32319_32333[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32334 = state_32300;
state_32300 = G__32334;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_32300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_32300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___32322,out))
})();
var state__13948__auto__ = (function (){var statearr_32320 = f__13947__auto__.call(null);
(statearr_32320[(6)] = c__13946__auto___32322);

return statearr_32320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___32322,out))
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
var G__32336 = arguments.length;
switch (G__32336) {
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
var c__13946__auto___32381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___32381,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___32381,out){
return (function (state_32360){
var state_val_32361 = (state_32360[(1)]);
if((state_val_32361 === (7))){
var inst_32342 = (state_32360[(7)]);
var inst_32342__$1 = (state_32360[(2)]);
var inst_32343 = (inst_32342__$1 == null);
var inst_32344 = cljs.core.not.call(null,inst_32343);
var state_32360__$1 = (function (){var statearr_32362 = state_32360;
(statearr_32362[(7)] = inst_32342__$1);

return statearr_32362;
})();
if(inst_32344){
var statearr_32363_32382 = state_32360__$1;
(statearr_32363_32382[(1)] = (8));

} else {
var statearr_32364_32383 = state_32360__$1;
(statearr_32364_32383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (1))){
var inst_32337 = (0);
var state_32360__$1 = (function (){var statearr_32365 = state_32360;
(statearr_32365[(8)] = inst_32337);

return statearr_32365;
})();
var statearr_32366_32384 = state_32360__$1;
(statearr_32366_32384[(2)] = null);

(statearr_32366_32384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (4))){
var state_32360__$1 = state_32360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32360__$1,(7),ch);
} else {
if((state_val_32361 === (6))){
var inst_32355 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
var statearr_32367_32385 = state_32360__$1;
(statearr_32367_32385[(2)] = inst_32355);

(statearr_32367_32385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (3))){
var inst_32357 = (state_32360[(2)]);
var inst_32358 = cljs.core.async.close_BANG_.call(null,out);
var state_32360__$1 = (function (){var statearr_32368 = state_32360;
(statearr_32368[(9)] = inst_32357);

return statearr_32368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32360__$1,inst_32358);
} else {
if((state_val_32361 === (2))){
var inst_32337 = (state_32360[(8)]);
var inst_32339 = (inst_32337 < n);
var state_32360__$1 = state_32360;
if(cljs.core.truth_(inst_32339)){
var statearr_32369_32386 = state_32360__$1;
(statearr_32369_32386[(1)] = (4));

} else {
var statearr_32370_32387 = state_32360__$1;
(statearr_32370_32387[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (11))){
var inst_32337 = (state_32360[(8)]);
var inst_32347 = (state_32360[(2)]);
var inst_32348 = (inst_32337 + (1));
var inst_32337__$1 = inst_32348;
var state_32360__$1 = (function (){var statearr_32371 = state_32360;
(statearr_32371[(8)] = inst_32337__$1);

(statearr_32371[(10)] = inst_32347);

return statearr_32371;
})();
var statearr_32372_32388 = state_32360__$1;
(statearr_32372_32388[(2)] = null);

(statearr_32372_32388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (9))){
var state_32360__$1 = state_32360;
var statearr_32373_32389 = state_32360__$1;
(statearr_32373_32389[(2)] = null);

(statearr_32373_32389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (5))){
var state_32360__$1 = state_32360;
var statearr_32374_32390 = state_32360__$1;
(statearr_32374_32390[(2)] = null);

(statearr_32374_32390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (10))){
var inst_32352 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
var statearr_32375_32391 = state_32360__$1;
(statearr_32375_32391[(2)] = inst_32352);

(statearr_32375_32391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (8))){
var inst_32342 = (state_32360[(7)]);
var state_32360__$1 = state_32360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32360__$1,(11),out,inst_32342);
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
});})(c__13946__auto___32381,out))
;
return ((function (switch__13856__auto__,c__13946__auto___32381,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_32376 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32376[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_32376[(1)] = (1));

return statearr_32376;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_32360){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_32360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e32377){if((e32377 instanceof Object)){
var ex__13860__auto__ = e32377;
var statearr_32378_32392 = state_32360;
(statearr_32378_32392[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32393 = state_32360;
state_32360 = G__32393;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_32360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_32360);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___32381,out))
})();
var state__13948__auto__ = (function (){var statearr_32379 = f__13947__auto__.call(null);
(statearr_32379[(6)] = c__13946__auto___32381);

return statearr_32379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___32381,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32395 = (function (f,ch,meta32396){
this.f = f;
this.ch = ch;
this.meta32396 = meta32396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32397,meta32396__$1){
var self__ = this;
var _32397__$1 = this;
return (new cljs.core.async.t_cljs$core$async32395(self__.f,self__.ch,meta32396__$1));
});

cljs.core.async.t_cljs$core$async32395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32397){
var self__ = this;
var _32397__$1 = this;
return self__.meta32396;
});

cljs.core.async.t_cljs$core$async32395.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32395.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32395.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32398 = (function (f,ch,meta32396,_,fn1,meta32399){
this.f = f;
this.ch = ch;
this.meta32396 = meta32396;
this._ = _;
this.fn1 = fn1;
this.meta32399 = meta32399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32400,meta32399__$1){
var self__ = this;
var _32400__$1 = this;
return (new cljs.core.async.t_cljs$core$async32398(self__.f,self__.ch,self__.meta32396,self__._,self__.fn1,meta32399__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32400){
var self__ = this;
var _32400__$1 = this;
return self__.meta32399;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32394_SHARP_){
return f1.call(null,(((p1__32394_SHARP_ == null))?null:self__.f.call(null,p1__32394_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32398.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32396","meta32396",1360136747,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32395","cljs.core.async/t_cljs$core$async32395",-52288888,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32399","meta32399",-1676543641,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32398";

cljs.core.async.t_cljs$core$async32398.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32398");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32398.
 */
cljs.core.async.__GT_t_cljs$core$async32398 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32398(f__$1,ch__$1,meta32396__$1,___$2,fn1__$1,meta32399){
return (new cljs.core.async.t_cljs$core$async32398(f__$1,ch__$1,meta32396__$1,___$2,fn1__$1,meta32399));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32398(self__.f,self__.ch,self__.meta32396,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32395.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32396","meta32396",1360136747,null)], null);
});

cljs.core.async.t_cljs$core$async32395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32395";

cljs.core.async.t_cljs$core$async32395.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32395");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32395.
 */
cljs.core.async.__GT_t_cljs$core$async32395 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32395(f__$1,ch__$1,meta32396){
return (new cljs.core.async.t_cljs$core$async32395(f__$1,ch__$1,meta32396));
});

}

return (new cljs.core.async.t_cljs$core$async32395(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32401 = (function (f,ch,meta32402){
this.f = f;
this.ch = ch;
this.meta32402 = meta32402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32403,meta32402__$1){
var self__ = this;
var _32403__$1 = this;
return (new cljs.core.async.t_cljs$core$async32401(self__.f,self__.ch,meta32402__$1));
});

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32403){
var self__ = this;
var _32403__$1 = this;
return self__.meta32402;
});

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32402","meta32402",1147515693,null)], null);
});

cljs.core.async.t_cljs$core$async32401.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32401";

cljs.core.async.t_cljs$core$async32401.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32401");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32401.
 */
cljs.core.async.__GT_t_cljs$core$async32401 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32401(f__$1,ch__$1,meta32402){
return (new cljs.core.async.t_cljs$core$async32401(f__$1,ch__$1,meta32402));
});

}

return (new cljs.core.async.t_cljs$core$async32401(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32404 = (function (p,ch,meta32405){
this.p = p;
this.ch = ch;
this.meta32405 = meta32405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32406,meta32405__$1){
var self__ = this;
var _32406__$1 = this;
return (new cljs.core.async.t_cljs$core$async32404(self__.p,self__.ch,meta32405__$1));
});

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32406){
var self__ = this;
var _32406__$1 = this;
return self__.meta32405;
});

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32405","meta32405",120143907,null)], null);
});

cljs.core.async.t_cljs$core$async32404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32404";

cljs.core.async.t_cljs$core$async32404.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32404");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32404.
 */
cljs.core.async.__GT_t_cljs$core$async32404 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32404(p__$1,ch__$1,meta32405){
return (new cljs.core.async.t_cljs$core$async32404(p__$1,ch__$1,meta32405));
});

}

return (new cljs.core.async.t_cljs$core$async32404(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32408 = arguments.length;
switch (G__32408) {
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
var c__13946__auto___32448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___32448,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___32448,out){
return (function (state_32429){
var state_val_32430 = (state_32429[(1)]);
if((state_val_32430 === (7))){
var inst_32425 = (state_32429[(2)]);
var state_32429__$1 = state_32429;
var statearr_32431_32449 = state_32429__$1;
(statearr_32431_32449[(2)] = inst_32425);

(statearr_32431_32449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (1))){
var state_32429__$1 = state_32429;
var statearr_32432_32450 = state_32429__$1;
(statearr_32432_32450[(2)] = null);

(statearr_32432_32450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (4))){
var inst_32411 = (state_32429[(7)]);
var inst_32411__$1 = (state_32429[(2)]);
var inst_32412 = (inst_32411__$1 == null);
var state_32429__$1 = (function (){var statearr_32433 = state_32429;
(statearr_32433[(7)] = inst_32411__$1);

return statearr_32433;
})();
if(cljs.core.truth_(inst_32412)){
var statearr_32434_32451 = state_32429__$1;
(statearr_32434_32451[(1)] = (5));

} else {
var statearr_32435_32452 = state_32429__$1;
(statearr_32435_32452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (6))){
var inst_32411 = (state_32429[(7)]);
var inst_32416 = p.call(null,inst_32411);
var state_32429__$1 = state_32429;
if(cljs.core.truth_(inst_32416)){
var statearr_32436_32453 = state_32429__$1;
(statearr_32436_32453[(1)] = (8));

} else {
var statearr_32437_32454 = state_32429__$1;
(statearr_32437_32454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (3))){
var inst_32427 = (state_32429[(2)]);
var state_32429__$1 = state_32429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32429__$1,inst_32427);
} else {
if((state_val_32430 === (2))){
var state_32429__$1 = state_32429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32429__$1,(4),ch);
} else {
if((state_val_32430 === (11))){
var inst_32419 = (state_32429[(2)]);
var state_32429__$1 = state_32429;
var statearr_32438_32455 = state_32429__$1;
(statearr_32438_32455[(2)] = inst_32419);

(statearr_32438_32455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (9))){
var state_32429__$1 = state_32429;
var statearr_32439_32456 = state_32429__$1;
(statearr_32439_32456[(2)] = null);

(statearr_32439_32456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (5))){
var inst_32414 = cljs.core.async.close_BANG_.call(null,out);
var state_32429__$1 = state_32429;
var statearr_32440_32457 = state_32429__$1;
(statearr_32440_32457[(2)] = inst_32414);

(statearr_32440_32457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (10))){
var inst_32422 = (state_32429[(2)]);
var state_32429__$1 = (function (){var statearr_32441 = state_32429;
(statearr_32441[(8)] = inst_32422);

return statearr_32441;
})();
var statearr_32442_32458 = state_32429__$1;
(statearr_32442_32458[(2)] = null);

(statearr_32442_32458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32430 === (8))){
var inst_32411 = (state_32429[(7)]);
var state_32429__$1 = state_32429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32429__$1,(11),out,inst_32411);
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
});})(c__13946__auto___32448,out))
;
return ((function (switch__13856__auto__,c__13946__auto___32448,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_32443 = [null,null,null,null,null,null,null,null,null];
(statearr_32443[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_32443[(1)] = (1));

return statearr_32443;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_32429){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_32429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e32444){if((e32444 instanceof Object)){
var ex__13860__auto__ = e32444;
var statearr_32445_32459 = state_32429;
(statearr_32445_32459[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32460 = state_32429;
state_32429 = G__32460;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_32429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_32429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___32448,out))
})();
var state__13948__auto__ = (function (){var statearr_32446 = f__13947__auto__.call(null);
(statearr_32446[(6)] = c__13946__auto___32448);

return statearr_32446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___32448,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32462 = arguments.length;
switch (G__32462) {
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
return (function (state_32525){
var state_val_32526 = (state_32525[(1)]);
if((state_val_32526 === (7))){
var inst_32521 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
var statearr_32527_32565 = state_32525__$1;
(statearr_32527_32565[(2)] = inst_32521);

(statearr_32527_32565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (20))){
var inst_32491 = (state_32525[(7)]);
var inst_32502 = (state_32525[(2)]);
var inst_32503 = cljs.core.next.call(null,inst_32491);
var inst_32477 = inst_32503;
var inst_32478 = null;
var inst_32479 = (0);
var inst_32480 = (0);
var state_32525__$1 = (function (){var statearr_32528 = state_32525;
(statearr_32528[(8)] = inst_32478);

(statearr_32528[(9)] = inst_32479);

(statearr_32528[(10)] = inst_32502);

(statearr_32528[(11)] = inst_32477);

(statearr_32528[(12)] = inst_32480);

return statearr_32528;
})();
var statearr_32529_32566 = state_32525__$1;
(statearr_32529_32566[(2)] = null);

(statearr_32529_32566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (1))){
var state_32525__$1 = state_32525;
var statearr_32530_32567 = state_32525__$1;
(statearr_32530_32567[(2)] = null);

(statearr_32530_32567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (4))){
var inst_32466 = (state_32525[(13)]);
var inst_32466__$1 = (state_32525[(2)]);
var inst_32467 = (inst_32466__$1 == null);
var state_32525__$1 = (function (){var statearr_32531 = state_32525;
(statearr_32531[(13)] = inst_32466__$1);

return statearr_32531;
})();
if(cljs.core.truth_(inst_32467)){
var statearr_32532_32568 = state_32525__$1;
(statearr_32532_32568[(1)] = (5));

} else {
var statearr_32533_32569 = state_32525__$1;
(statearr_32533_32569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (15))){
var state_32525__$1 = state_32525;
var statearr_32537_32570 = state_32525__$1;
(statearr_32537_32570[(2)] = null);

(statearr_32537_32570[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (21))){
var state_32525__$1 = state_32525;
var statearr_32538_32571 = state_32525__$1;
(statearr_32538_32571[(2)] = null);

(statearr_32538_32571[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (13))){
var inst_32478 = (state_32525[(8)]);
var inst_32479 = (state_32525[(9)]);
var inst_32477 = (state_32525[(11)]);
var inst_32480 = (state_32525[(12)]);
var inst_32487 = (state_32525[(2)]);
var inst_32488 = (inst_32480 + (1));
var tmp32534 = inst_32478;
var tmp32535 = inst_32479;
var tmp32536 = inst_32477;
var inst_32477__$1 = tmp32536;
var inst_32478__$1 = tmp32534;
var inst_32479__$1 = tmp32535;
var inst_32480__$1 = inst_32488;
var state_32525__$1 = (function (){var statearr_32539 = state_32525;
(statearr_32539[(8)] = inst_32478__$1);

(statearr_32539[(14)] = inst_32487);

(statearr_32539[(9)] = inst_32479__$1);

(statearr_32539[(11)] = inst_32477__$1);

(statearr_32539[(12)] = inst_32480__$1);

return statearr_32539;
})();
var statearr_32540_32572 = state_32525__$1;
(statearr_32540_32572[(2)] = null);

(statearr_32540_32572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (22))){
var state_32525__$1 = state_32525;
var statearr_32541_32573 = state_32525__$1;
(statearr_32541_32573[(2)] = null);

(statearr_32541_32573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (6))){
var inst_32466 = (state_32525[(13)]);
var inst_32475 = f.call(null,inst_32466);
var inst_32476 = cljs.core.seq.call(null,inst_32475);
var inst_32477 = inst_32476;
var inst_32478 = null;
var inst_32479 = (0);
var inst_32480 = (0);
var state_32525__$1 = (function (){var statearr_32542 = state_32525;
(statearr_32542[(8)] = inst_32478);

(statearr_32542[(9)] = inst_32479);

(statearr_32542[(11)] = inst_32477);

(statearr_32542[(12)] = inst_32480);

return statearr_32542;
})();
var statearr_32543_32574 = state_32525__$1;
(statearr_32543_32574[(2)] = null);

(statearr_32543_32574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (17))){
var inst_32491 = (state_32525[(7)]);
var inst_32495 = cljs.core.chunk_first.call(null,inst_32491);
var inst_32496 = cljs.core.chunk_rest.call(null,inst_32491);
var inst_32497 = cljs.core.count.call(null,inst_32495);
var inst_32477 = inst_32496;
var inst_32478 = inst_32495;
var inst_32479 = inst_32497;
var inst_32480 = (0);
var state_32525__$1 = (function (){var statearr_32544 = state_32525;
(statearr_32544[(8)] = inst_32478);

(statearr_32544[(9)] = inst_32479);

(statearr_32544[(11)] = inst_32477);

(statearr_32544[(12)] = inst_32480);

return statearr_32544;
})();
var statearr_32545_32575 = state_32525__$1;
(statearr_32545_32575[(2)] = null);

(statearr_32545_32575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (3))){
var inst_32523 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32525__$1,inst_32523);
} else {
if((state_val_32526 === (12))){
var inst_32511 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
var statearr_32546_32576 = state_32525__$1;
(statearr_32546_32576[(2)] = inst_32511);

(statearr_32546_32576[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (2))){
var state_32525__$1 = state_32525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32525__$1,(4),in$);
} else {
if((state_val_32526 === (23))){
var inst_32519 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
var statearr_32547_32577 = state_32525__$1;
(statearr_32547_32577[(2)] = inst_32519);

(statearr_32547_32577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (19))){
var inst_32506 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
var statearr_32548_32578 = state_32525__$1;
(statearr_32548_32578[(2)] = inst_32506);

(statearr_32548_32578[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (11))){
var inst_32477 = (state_32525[(11)]);
var inst_32491 = (state_32525[(7)]);
var inst_32491__$1 = cljs.core.seq.call(null,inst_32477);
var state_32525__$1 = (function (){var statearr_32549 = state_32525;
(statearr_32549[(7)] = inst_32491__$1);

return statearr_32549;
})();
if(inst_32491__$1){
var statearr_32550_32579 = state_32525__$1;
(statearr_32550_32579[(1)] = (14));

} else {
var statearr_32551_32580 = state_32525__$1;
(statearr_32551_32580[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (9))){
var inst_32513 = (state_32525[(2)]);
var inst_32514 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32525__$1 = (function (){var statearr_32552 = state_32525;
(statearr_32552[(15)] = inst_32513);

return statearr_32552;
})();
if(cljs.core.truth_(inst_32514)){
var statearr_32553_32581 = state_32525__$1;
(statearr_32553_32581[(1)] = (21));

} else {
var statearr_32554_32582 = state_32525__$1;
(statearr_32554_32582[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (5))){
var inst_32469 = cljs.core.async.close_BANG_.call(null,out);
var state_32525__$1 = state_32525;
var statearr_32555_32583 = state_32525__$1;
(statearr_32555_32583[(2)] = inst_32469);

(statearr_32555_32583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (14))){
var inst_32491 = (state_32525[(7)]);
var inst_32493 = cljs.core.chunked_seq_QMARK_.call(null,inst_32491);
var state_32525__$1 = state_32525;
if(inst_32493){
var statearr_32556_32584 = state_32525__$1;
(statearr_32556_32584[(1)] = (17));

} else {
var statearr_32557_32585 = state_32525__$1;
(statearr_32557_32585[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (16))){
var inst_32509 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
var statearr_32558_32586 = state_32525__$1;
(statearr_32558_32586[(2)] = inst_32509);

(statearr_32558_32586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (10))){
var inst_32478 = (state_32525[(8)]);
var inst_32480 = (state_32525[(12)]);
var inst_32485 = cljs.core._nth.call(null,inst_32478,inst_32480);
var state_32525__$1 = state_32525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32525__$1,(13),out,inst_32485);
} else {
if((state_val_32526 === (18))){
var inst_32491 = (state_32525[(7)]);
var inst_32500 = cljs.core.first.call(null,inst_32491);
var state_32525__$1 = state_32525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32525__$1,(20),out,inst_32500);
} else {
if((state_val_32526 === (8))){
var inst_32479 = (state_32525[(9)]);
var inst_32480 = (state_32525[(12)]);
var inst_32482 = (inst_32480 < inst_32479);
var inst_32483 = inst_32482;
var state_32525__$1 = state_32525;
if(cljs.core.truth_(inst_32483)){
var statearr_32559_32587 = state_32525__$1;
(statearr_32559_32587[(1)] = (10));

} else {
var statearr_32560_32588 = state_32525__$1;
(statearr_32560_32588[(1)] = (11));

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
var statearr_32561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32561[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13857__auto__);

(statearr_32561[(1)] = (1));

return statearr_32561;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13857__auto____1 = (function (state_32525){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_32525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e32562){if((e32562 instanceof Object)){
var ex__13860__auto__ = e32562;
var statearr_32563_32589 = state_32525;
(statearr_32563_32589[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32590 = state_32525;
state_32525 = G__32590;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13857__auto__ = function(state_32525){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13857__auto____1.call(this,state_32525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13857__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13857__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_32564 = f__13947__auto__.call(null);
(statearr_32564[(6)] = c__13946__auto__);

return statearr_32564;
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
var G__32592 = arguments.length;
switch (G__32592) {
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
var G__32595 = arguments.length;
switch (G__32595) {
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
var G__32598 = arguments.length;
switch (G__32598) {
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
var c__13946__auto___32645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___32645,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___32645,out){
return (function (state_32622){
var state_val_32623 = (state_32622[(1)]);
if((state_val_32623 === (7))){
var inst_32617 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32624_32646 = state_32622__$1;
(statearr_32624_32646[(2)] = inst_32617);

(statearr_32624_32646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (1))){
var inst_32599 = null;
var state_32622__$1 = (function (){var statearr_32625 = state_32622;
(statearr_32625[(7)] = inst_32599);

return statearr_32625;
})();
var statearr_32626_32647 = state_32622__$1;
(statearr_32626_32647[(2)] = null);

(statearr_32626_32647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (4))){
var inst_32602 = (state_32622[(8)]);
var inst_32602__$1 = (state_32622[(2)]);
var inst_32603 = (inst_32602__$1 == null);
var inst_32604 = cljs.core.not.call(null,inst_32603);
var state_32622__$1 = (function (){var statearr_32627 = state_32622;
(statearr_32627[(8)] = inst_32602__$1);

return statearr_32627;
})();
if(inst_32604){
var statearr_32628_32648 = state_32622__$1;
(statearr_32628_32648[(1)] = (5));

} else {
var statearr_32629_32649 = state_32622__$1;
(statearr_32629_32649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (6))){
var state_32622__$1 = state_32622;
var statearr_32630_32650 = state_32622__$1;
(statearr_32630_32650[(2)] = null);

(statearr_32630_32650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (3))){
var inst_32619 = (state_32622[(2)]);
var inst_32620 = cljs.core.async.close_BANG_.call(null,out);
var state_32622__$1 = (function (){var statearr_32631 = state_32622;
(statearr_32631[(9)] = inst_32619);

return statearr_32631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32622__$1,inst_32620);
} else {
if((state_val_32623 === (2))){
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32622__$1,(4),ch);
} else {
if((state_val_32623 === (11))){
var inst_32602 = (state_32622[(8)]);
var inst_32611 = (state_32622[(2)]);
var inst_32599 = inst_32602;
var state_32622__$1 = (function (){var statearr_32632 = state_32622;
(statearr_32632[(7)] = inst_32599);

(statearr_32632[(10)] = inst_32611);

return statearr_32632;
})();
var statearr_32633_32651 = state_32622__$1;
(statearr_32633_32651[(2)] = null);

(statearr_32633_32651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (9))){
var inst_32602 = (state_32622[(8)]);
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32622__$1,(11),out,inst_32602);
} else {
if((state_val_32623 === (5))){
var inst_32602 = (state_32622[(8)]);
var inst_32599 = (state_32622[(7)]);
var inst_32606 = cljs.core._EQ_.call(null,inst_32602,inst_32599);
var state_32622__$1 = state_32622;
if(inst_32606){
var statearr_32635_32652 = state_32622__$1;
(statearr_32635_32652[(1)] = (8));

} else {
var statearr_32636_32653 = state_32622__$1;
(statearr_32636_32653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (10))){
var inst_32614 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32637_32654 = state_32622__$1;
(statearr_32637_32654[(2)] = inst_32614);

(statearr_32637_32654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (8))){
var inst_32599 = (state_32622[(7)]);
var tmp32634 = inst_32599;
var inst_32599__$1 = tmp32634;
var state_32622__$1 = (function (){var statearr_32638 = state_32622;
(statearr_32638[(7)] = inst_32599__$1);

return statearr_32638;
})();
var statearr_32639_32655 = state_32622__$1;
(statearr_32639_32655[(2)] = null);

(statearr_32639_32655[(1)] = (2));


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
});})(c__13946__auto___32645,out))
;
return ((function (switch__13856__auto__,c__13946__auto___32645,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_32640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32640[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_32640[(1)] = (1));

return statearr_32640;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_32622){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_32622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e32641){if((e32641 instanceof Object)){
var ex__13860__auto__ = e32641;
var statearr_32642_32656 = state_32622;
(statearr_32642_32656[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32657 = state_32622;
state_32622 = G__32657;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_32622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_32622);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___32645,out))
})();
var state__13948__auto__ = (function (){var statearr_32643 = f__13947__auto__.call(null);
(statearr_32643[(6)] = c__13946__auto___32645);

return statearr_32643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___32645,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32659 = arguments.length;
switch (G__32659) {
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
var c__13946__auto___32725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___32725,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___32725,out){
return (function (state_32697){
var state_val_32698 = (state_32697[(1)]);
if((state_val_32698 === (7))){
var inst_32693 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32699_32726 = state_32697__$1;
(statearr_32699_32726[(2)] = inst_32693);

(statearr_32699_32726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (1))){
var inst_32660 = (new Array(n));
var inst_32661 = inst_32660;
var inst_32662 = (0);
var state_32697__$1 = (function (){var statearr_32700 = state_32697;
(statearr_32700[(7)] = inst_32661);

(statearr_32700[(8)] = inst_32662);

return statearr_32700;
})();
var statearr_32701_32727 = state_32697__$1;
(statearr_32701_32727[(2)] = null);

(statearr_32701_32727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (4))){
var inst_32665 = (state_32697[(9)]);
var inst_32665__$1 = (state_32697[(2)]);
var inst_32666 = (inst_32665__$1 == null);
var inst_32667 = cljs.core.not.call(null,inst_32666);
var state_32697__$1 = (function (){var statearr_32702 = state_32697;
(statearr_32702[(9)] = inst_32665__$1);

return statearr_32702;
})();
if(inst_32667){
var statearr_32703_32728 = state_32697__$1;
(statearr_32703_32728[(1)] = (5));

} else {
var statearr_32704_32729 = state_32697__$1;
(statearr_32704_32729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (15))){
var inst_32687 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32705_32730 = state_32697__$1;
(statearr_32705_32730[(2)] = inst_32687);

(statearr_32705_32730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (13))){
var state_32697__$1 = state_32697;
var statearr_32706_32731 = state_32697__$1;
(statearr_32706_32731[(2)] = null);

(statearr_32706_32731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (6))){
var inst_32662 = (state_32697[(8)]);
var inst_32683 = (inst_32662 > (0));
var state_32697__$1 = state_32697;
if(cljs.core.truth_(inst_32683)){
var statearr_32707_32732 = state_32697__$1;
(statearr_32707_32732[(1)] = (12));

} else {
var statearr_32708_32733 = state_32697__$1;
(statearr_32708_32733[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (3))){
var inst_32695 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32697__$1,inst_32695);
} else {
if((state_val_32698 === (12))){
var inst_32661 = (state_32697[(7)]);
var inst_32685 = cljs.core.vec.call(null,inst_32661);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32697__$1,(15),out,inst_32685);
} else {
if((state_val_32698 === (2))){
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32697__$1,(4),ch);
} else {
if((state_val_32698 === (11))){
var inst_32677 = (state_32697[(2)]);
var inst_32678 = (new Array(n));
var inst_32661 = inst_32678;
var inst_32662 = (0);
var state_32697__$1 = (function (){var statearr_32709 = state_32697;
(statearr_32709[(7)] = inst_32661);

(statearr_32709[(8)] = inst_32662);

(statearr_32709[(10)] = inst_32677);

return statearr_32709;
})();
var statearr_32710_32734 = state_32697__$1;
(statearr_32710_32734[(2)] = null);

(statearr_32710_32734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (9))){
var inst_32661 = (state_32697[(7)]);
var inst_32675 = cljs.core.vec.call(null,inst_32661);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32697__$1,(11),out,inst_32675);
} else {
if((state_val_32698 === (5))){
var inst_32670 = (state_32697[(11)]);
var inst_32661 = (state_32697[(7)]);
var inst_32662 = (state_32697[(8)]);
var inst_32665 = (state_32697[(9)]);
var inst_32669 = (inst_32661[inst_32662] = inst_32665);
var inst_32670__$1 = (inst_32662 + (1));
var inst_32671 = (inst_32670__$1 < n);
var state_32697__$1 = (function (){var statearr_32711 = state_32697;
(statearr_32711[(11)] = inst_32670__$1);

(statearr_32711[(12)] = inst_32669);

return statearr_32711;
})();
if(cljs.core.truth_(inst_32671)){
var statearr_32712_32735 = state_32697__$1;
(statearr_32712_32735[(1)] = (8));

} else {
var statearr_32713_32736 = state_32697__$1;
(statearr_32713_32736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (14))){
var inst_32690 = (state_32697[(2)]);
var inst_32691 = cljs.core.async.close_BANG_.call(null,out);
var state_32697__$1 = (function (){var statearr_32715 = state_32697;
(statearr_32715[(13)] = inst_32690);

return statearr_32715;
})();
var statearr_32716_32737 = state_32697__$1;
(statearr_32716_32737[(2)] = inst_32691);

(statearr_32716_32737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (10))){
var inst_32681 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32717_32738 = state_32697__$1;
(statearr_32717_32738[(2)] = inst_32681);

(statearr_32717_32738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (8))){
var inst_32670 = (state_32697[(11)]);
var inst_32661 = (state_32697[(7)]);
var tmp32714 = inst_32661;
var inst_32661__$1 = tmp32714;
var inst_32662 = inst_32670;
var state_32697__$1 = (function (){var statearr_32718 = state_32697;
(statearr_32718[(7)] = inst_32661__$1);

(statearr_32718[(8)] = inst_32662);

return statearr_32718;
})();
var statearr_32719_32739 = state_32697__$1;
(statearr_32719_32739[(2)] = null);

(statearr_32719_32739[(1)] = (2));


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
});})(c__13946__auto___32725,out))
;
return ((function (switch__13856__auto__,c__13946__auto___32725,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_32720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32720[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_32720[(1)] = (1));

return statearr_32720;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_32697){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_32697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e32721){if((e32721 instanceof Object)){
var ex__13860__auto__ = e32721;
var statearr_32722_32740 = state_32697;
(statearr_32722_32740[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32741 = state_32697;
state_32697 = G__32741;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_32697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_32697);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___32725,out))
})();
var state__13948__auto__ = (function (){var statearr_32723 = f__13947__auto__.call(null);
(statearr_32723[(6)] = c__13946__auto___32725);

return statearr_32723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___32725,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32743 = arguments.length;
switch (G__32743) {
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
var c__13946__auto___32813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___32813,out){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___32813,out){
return (function (state_32785){
var state_val_32786 = (state_32785[(1)]);
if((state_val_32786 === (7))){
var inst_32781 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32787_32814 = state_32785__$1;
(statearr_32787_32814[(2)] = inst_32781);

(statearr_32787_32814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (1))){
var inst_32744 = [];
var inst_32745 = inst_32744;
var inst_32746 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32785__$1 = (function (){var statearr_32788 = state_32785;
(statearr_32788[(7)] = inst_32746);

(statearr_32788[(8)] = inst_32745);

return statearr_32788;
})();
var statearr_32789_32815 = state_32785__$1;
(statearr_32789_32815[(2)] = null);

(statearr_32789_32815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (4))){
var inst_32749 = (state_32785[(9)]);
var inst_32749__$1 = (state_32785[(2)]);
var inst_32750 = (inst_32749__$1 == null);
var inst_32751 = cljs.core.not.call(null,inst_32750);
var state_32785__$1 = (function (){var statearr_32790 = state_32785;
(statearr_32790[(9)] = inst_32749__$1);

return statearr_32790;
})();
if(inst_32751){
var statearr_32791_32816 = state_32785__$1;
(statearr_32791_32816[(1)] = (5));

} else {
var statearr_32792_32817 = state_32785__$1;
(statearr_32792_32817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (15))){
var inst_32775 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32793_32818 = state_32785__$1;
(statearr_32793_32818[(2)] = inst_32775);

(statearr_32793_32818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (13))){
var state_32785__$1 = state_32785;
var statearr_32794_32819 = state_32785__$1;
(statearr_32794_32819[(2)] = null);

(statearr_32794_32819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (6))){
var inst_32745 = (state_32785[(8)]);
var inst_32770 = inst_32745.length;
var inst_32771 = (inst_32770 > (0));
var state_32785__$1 = state_32785;
if(cljs.core.truth_(inst_32771)){
var statearr_32795_32820 = state_32785__$1;
(statearr_32795_32820[(1)] = (12));

} else {
var statearr_32796_32821 = state_32785__$1;
(statearr_32796_32821[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (3))){
var inst_32783 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32785__$1,inst_32783);
} else {
if((state_val_32786 === (12))){
var inst_32745 = (state_32785[(8)]);
var inst_32773 = cljs.core.vec.call(null,inst_32745);
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32785__$1,(15),out,inst_32773);
} else {
if((state_val_32786 === (2))){
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32785__$1,(4),ch);
} else {
if((state_val_32786 === (11))){
var inst_32749 = (state_32785[(9)]);
var inst_32753 = (state_32785[(10)]);
var inst_32763 = (state_32785[(2)]);
var inst_32764 = [];
var inst_32765 = inst_32764.push(inst_32749);
var inst_32745 = inst_32764;
var inst_32746 = inst_32753;
var state_32785__$1 = (function (){var statearr_32797 = state_32785;
(statearr_32797[(11)] = inst_32763);

(statearr_32797[(7)] = inst_32746);

(statearr_32797[(8)] = inst_32745);

(statearr_32797[(12)] = inst_32765);

return statearr_32797;
})();
var statearr_32798_32822 = state_32785__$1;
(statearr_32798_32822[(2)] = null);

(statearr_32798_32822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (9))){
var inst_32745 = (state_32785[(8)]);
var inst_32761 = cljs.core.vec.call(null,inst_32745);
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32785__$1,(11),out,inst_32761);
} else {
if((state_val_32786 === (5))){
var inst_32749 = (state_32785[(9)]);
var inst_32753 = (state_32785[(10)]);
var inst_32746 = (state_32785[(7)]);
var inst_32753__$1 = f.call(null,inst_32749);
var inst_32754 = cljs.core._EQ_.call(null,inst_32753__$1,inst_32746);
var inst_32755 = cljs.core.keyword_identical_QMARK_.call(null,inst_32746,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32756 = ((inst_32754) || (inst_32755));
var state_32785__$1 = (function (){var statearr_32799 = state_32785;
(statearr_32799[(10)] = inst_32753__$1);

return statearr_32799;
})();
if(cljs.core.truth_(inst_32756)){
var statearr_32800_32823 = state_32785__$1;
(statearr_32800_32823[(1)] = (8));

} else {
var statearr_32801_32824 = state_32785__$1;
(statearr_32801_32824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (14))){
var inst_32778 = (state_32785[(2)]);
var inst_32779 = cljs.core.async.close_BANG_.call(null,out);
var state_32785__$1 = (function (){var statearr_32803 = state_32785;
(statearr_32803[(13)] = inst_32778);

return statearr_32803;
})();
var statearr_32804_32825 = state_32785__$1;
(statearr_32804_32825[(2)] = inst_32779);

(statearr_32804_32825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (10))){
var inst_32768 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32805_32826 = state_32785__$1;
(statearr_32805_32826[(2)] = inst_32768);

(statearr_32805_32826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (8))){
var inst_32749 = (state_32785[(9)]);
var inst_32753 = (state_32785[(10)]);
var inst_32745 = (state_32785[(8)]);
var inst_32758 = inst_32745.push(inst_32749);
var tmp32802 = inst_32745;
var inst_32745__$1 = tmp32802;
var inst_32746 = inst_32753;
var state_32785__$1 = (function (){var statearr_32806 = state_32785;
(statearr_32806[(14)] = inst_32758);

(statearr_32806[(7)] = inst_32746);

(statearr_32806[(8)] = inst_32745__$1);

return statearr_32806;
})();
var statearr_32807_32827 = state_32785__$1;
(statearr_32807_32827[(2)] = null);

(statearr_32807_32827[(1)] = (2));


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
});})(c__13946__auto___32813,out))
;
return ((function (switch__13856__auto__,c__13946__auto___32813,out){
return (function() {
var cljs$core$async$state_machine__13857__auto__ = null;
var cljs$core$async$state_machine__13857__auto____0 = (function (){
var statearr_32808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32808[(0)] = cljs$core$async$state_machine__13857__auto__);

(statearr_32808[(1)] = (1));

return statearr_32808;
});
var cljs$core$async$state_machine__13857__auto____1 = (function (state_32785){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_32785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e32809){if((e32809 instanceof Object)){
var ex__13860__auto__ = e32809;
var statearr_32810_32828 = state_32785;
(statearr_32810_32828[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32829 = state_32785;
state_32785 = G__32829;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
cljs$core$async$state_machine__13857__auto__ = function(state_32785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13857__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13857__auto____1.call(this,state_32785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13857__auto____0;
cljs$core$async$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13857__auto____1;
return cljs$core$async$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___32813,out))
})();
var state__13948__auto__ = (function (){var statearr_32811 = f__13947__auto__.call(null);
(statearr_32811[(6)] = c__13946__auto___32813);

return statearr_32811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___32813,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
