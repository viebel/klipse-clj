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
var G__19049 = arguments.length;
switch (G__19049) {
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
if(typeof cljs.core.async.t_cljs$core$async19050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19050 = (function (f,blockable,meta19051){
this.f = f;
this.blockable = blockable;
this.meta19051 = meta19051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19052,meta19051__$1){
var self__ = this;
var _19052__$1 = this;
return (new cljs.core.async.t_cljs$core$async19050(self__.f,self__.blockable,meta19051__$1));
});

cljs.core.async.t_cljs$core$async19050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19052){
var self__ = this;
var _19052__$1 = this;
return self__.meta19051;
});

cljs.core.async.t_cljs$core$async19050.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19050.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19051","meta19051",-806146433,null)], null);
});

cljs.core.async.t_cljs$core$async19050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19050";

cljs.core.async.t_cljs$core$async19050.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async19050");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19050.
 */
cljs.core.async.__GT_t_cljs$core$async19050 = (function cljs$core$async$__GT_t_cljs$core$async19050(f__$1,blockable__$1,meta19051){
return (new cljs.core.async.t_cljs$core$async19050(f__$1,blockable__$1,meta19051));
});

}

return (new cljs.core.async.t_cljs$core$async19050(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19056 = arguments.length;
switch (G__19056) {
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
var G__19059 = arguments.length;
switch (G__19059) {
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
var G__19062 = arguments.length;
switch (G__19062) {
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
var val_19064 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19064);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19064,ret){
return (function (){
return fn1.call(null,val_19064);
});})(val_19064,ret))
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
var G__19066 = arguments.length;
switch (G__19066) {
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
var n__4376__auto___19068 = n;
var x_19069 = (0);
while(true){
if((x_19069 < n__4376__auto___19068)){
(a[x_19069] = (0));

var G__19070 = (x_19069 + (1));
x_19069 = G__19070;
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

var G__19071 = (i + (1));
i = G__19071;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19072 = (function (flag,meta19073){
this.flag = flag;
this.meta19073 = meta19073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19074,meta19073__$1){
var self__ = this;
var _19074__$1 = this;
return (new cljs.core.async.t_cljs$core$async19072(self__.flag,meta19073__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19074){
var self__ = this;
var _19074__$1 = this;
return self__.meta19073;
});})(flag))
;

cljs.core.async.t_cljs$core$async19072.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19072.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19072.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19072.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19072.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19073","meta19073",-414872996,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19072";

cljs.core.async.t_cljs$core$async19072.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async19072");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19072.
 */
cljs.core.async.__GT_t_cljs$core$async19072 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19072(flag__$1,meta19073){
return (new cljs.core.async.t_cljs$core$async19072(flag__$1,meta19073));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19072(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19075 = (function (flag,cb,meta19076){
this.flag = flag;
this.cb = cb;
this.meta19076 = meta19076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19077,meta19076__$1){
var self__ = this;
var _19077__$1 = this;
return (new cljs.core.async.t_cljs$core$async19075(self__.flag,self__.cb,meta19076__$1));
});

cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19077){
var self__ = this;
var _19077__$1 = this;
return self__.meta19076;
});

cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19076","meta19076",-562600458,null)], null);
});

cljs.core.async.t_cljs$core$async19075.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19075";

cljs.core.async.t_cljs$core$async19075.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async19075");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19075.
 */
cljs.core.async.__GT_t_cljs$core$async19075 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19075(flag__$1,cb__$1,meta19076){
return (new cljs.core.async.t_cljs$core$async19075(flag__$1,cb__$1,meta19076));
});

}

return (new cljs.core.async.t_cljs$core$async19075(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19078_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19078_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19079_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19079_SHARP_,port], null));
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
var G__19080 = (i + (1));
i = G__19080;
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
var len__4499__auto___19086 = arguments.length;
var i__4500__auto___19087 = (0);
while(true){
if((i__4500__auto___19087 < len__4499__auto___19086)){
args__4502__auto__.push((arguments[i__4500__auto___19087]));

var G__19088 = (i__4500__auto___19087 + (1));
i__4500__auto___19087 = G__19088;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19083){
var map__19084 = p__19083;
var map__19084__$1 = ((((!((map__19084 == null)))?(((((map__19084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19084):map__19084);
var opts = map__19084__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19081){
var G__19082 = cljs.core.first.call(null,seq19081);
var seq19081__$1 = cljs.core.next.call(null,seq19081);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19082,seq19081__$1);
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
var G__19090 = arguments.length;
switch (G__19090) {
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
var c__17125__auto___19136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___19136){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___19136){
return (function (state_19114){
var state_val_19115 = (state_19114[(1)]);
if((state_val_19115 === (7))){
var inst_19110 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19116_19137 = state_19114__$1;
(statearr_19116_19137[(2)] = inst_19110);

(statearr_19116_19137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (1))){
var state_19114__$1 = state_19114;
var statearr_19117_19138 = state_19114__$1;
(statearr_19117_19138[(2)] = null);

(statearr_19117_19138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (4))){
var inst_19093 = (state_19114[(7)]);
var inst_19093__$1 = (state_19114[(2)]);
var inst_19094 = (inst_19093__$1 == null);
var state_19114__$1 = (function (){var statearr_19118 = state_19114;
(statearr_19118[(7)] = inst_19093__$1);

return statearr_19118;
})();
if(cljs.core.truth_(inst_19094)){
var statearr_19119_19139 = state_19114__$1;
(statearr_19119_19139[(1)] = (5));

} else {
var statearr_19120_19140 = state_19114__$1;
(statearr_19120_19140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (13))){
var state_19114__$1 = state_19114;
var statearr_19121_19141 = state_19114__$1;
(statearr_19121_19141[(2)] = null);

(statearr_19121_19141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (6))){
var inst_19093 = (state_19114[(7)]);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19114__$1,(11),to,inst_19093);
} else {
if((state_val_19115 === (3))){
var inst_19112 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19114__$1,inst_19112);
} else {
if((state_val_19115 === (12))){
var state_19114__$1 = state_19114;
var statearr_19122_19142 = state_19114__$1;
(statearr_19122_19142[(2)] = null);

(statearr_19122_19142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (2))){
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19114__$1,(4),from);
} else {
if((state_val_19115 === (11))){
var inst_19103 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19103)){
var statearr_19123_19143 = state_19114__$1;
(statearr_19123_19143[(1)] = (12));

} else {
var statearr_19124_19144 = state_19114__$1;
(statearr_19124_19144[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (9))){
var state_19114__$1 = state_19114;
var statearr_19125_19145 = state_19114__$1;
(statearr_19125_19145[(2)] = null);

(statearr_19125_19145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (5))){
var state_19114__$1 = state_19114;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19126_19146 = state_19114__$1;
(statearr_19126_19146[(1)] = (8));

} else {
var statearr_19127_19147 = state_19114__$1;
(statearr_19127_19147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (14))){
var inst_19108 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19128_19148 = state_19114__$1;
(statearr_19128_19148[(2)] = inst_19108);

(statearr_19128_19148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (10))){
var inst_19100 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19129_19149 = state_19114__$1;
(statearr_19129_19149[(2)] = inst_19100);

(statearr_19129_19149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (8))){
var inst_19097 = cljs.core.async.close_BANG_.call(null,to);
var state_19114__$1 = state_19114;
var statearr_19130_19150 = state_19114__$1;
(statearr_19130_19150[(2)] = inst_19097);

(statearr_19130_19150[(1)] = (10));


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
});})(c__17125__auto___19136))
;
return ((function (switch__16968__auto__,c__17125__auto___19136){
return (function() {
var cljs$core$async$state_machine__16969__auto__ = null;
var cljs$core$async$state_machine__16969__auto____0 = (function (){
var statearr_19131 = [null,null,null,null,null,null,null,null];
(statearr_19131[(0)] = cljs$core$async$state_machine__16969__auto__);

(statearr_19131[(1)] = (1));

return statearr_19131;
});
var cljs$core$async$state_machine__16969__auto____1 = (function (state_19114){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e19132){if((e19132 instanceof Object)){
var ex__16972__auto__ = e19132;
var statearr_19133_19151 = state_19114;
(statearr_19133_19151[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19152 = state_19114;
state_19114 = G__19152;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$state_machine__16969__auto__ = function(state_19114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16969__auto____1.call(this,state_19114);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16969__auto____0;
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16969__auto____1;
return cljs$core$async$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___19136))
})();
var state__17127__auto__ = (function (){var statearr_19134 = f__17126__auto__.call(null);
(statearr_19134[(6)] = c__17125__auto___19136);

return statearr_19134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___19136))
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
return (function (p__19153){
var vec__19154 = p__19153;
var v = cljs.core.nth.call(null,vec__19154,(0),null);
var p = cljs.core.nth.call(null,vec__19154,(1),null);
var job = vec__19154;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17125__auto___19325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___19325,res,vec__19154,v,p,job,jobs,results){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___19325,res,vec__19154,v,p,job,jobs,results){
return (function (state_19161){
var state_val_19162 = (state_19161[(1)]);
if((state_val_19162 === (1))){
var state_19161__$1 = state_19161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19161__$1,(2),res,v);
} else {
if((state_val_19162 === (2))){
var inst_19158 = (state_19161[(2)]);
var inst_19159 = cljs.core.async.close_BANG_.call(null,res);
var state_19161__$1 = (function (){var statearr_19163 = state_19161;
(statearr_19163[(7)] = inst_19158);

return statearr_19163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19161__$1,inst_19159);
} else {
return null;
}
}
});})(c__17125__auto___19325,res,vec__19154,v,p,job,jobs,results))
;
return ((function (switch__16968__auto__,c__17125__auto___19325,res,vec__19154,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0 = (function (){
var statearr_19164 = [null,null,null,null,null,null,null,null];
(statearr_19164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__);

(statearr_19164[(1)] = (1));

return statearr_19164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1 = (function (state_19161){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e19165){if((e19165 instanceof Object)){
var ex__16972__auto__ = e19165;
var statearr_19166_19326 = state_19161;
(statearr_19166_19326[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19327 = state_19161;
state_19161 = G__19327;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__ = function(state_19161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1.call(this,state_19161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___19325,res,vec__19154,v,p,job,jobs,results))
})();
var state__17127__auto__ = (function (){var statearr_19167 = f__17126__auto__.call(null);
(statearr_19167[(6)] = c__17125__auto___19325);

return statearr_19167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___19325,res,vec__19154,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19168){
var vec__19169 = p__19168;
var v = cljs.core.nth.call(null,vec__19169,(0),null);
var p = cljs.core.nth.call(null,vec__19169,(1),null);
var job = vec__19169;
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
var n__4376__auto___19328 = n;
var __19329 = (0);
while(true){
if((__19329 < n__4376__auto___19328)){
var G__19172_19330 = type;
var G__19172_19331__$1 = (((G__19172_19330 instanceof cljs.core.Keyword))?G__19172_19330.fqn:null);
switch (G__19172_19331__$1) {
case "compute":
var c__17125__auto___19333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19329,c__17125__auto___19333,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (__19329,c__17125__auto___19333,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async){
return (function (state_19185){
var state_val_19186 = (state_19185[(1)]);
if((state_val_19186 === (1))){
var state_19185__$1 = state_19185;
var statearr_19187_19334 = state_19185__$1;
(statearr_19187_19334[(2)] = null);

(statearr_19187_19334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19186 === (2))){
var state_19185__$1 = state_19185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19185__$1,(4),jobs);
} else {
if((state_val_19186 === (3))){
var inst_19183 = (state_19185[(2)]);
var state_19185__$1 = state_19185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19185__$1,inst_19183);
} else {
if((state_val_19186 === (4))){
var inst_19175 = (state_19185[(2)]);
var inst_19176 = process.call(null,inst_19175);
var state_19185__$1 = state_19185;
if(cljs.core.truth_(inst_19176)){
var statearr_19188_19335 = state_19185__$1;
(statearr_19188_19335[(1)] = (5));

} else {
var statearr_19189_19336 = state_19185__$1;
(statearr_19189_19336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19186 === (5))){
var state_19185__$1 = state_19185;
var statearr_19190_19337 = state_19185__$1;
(statearr_19190_19337[(2)] = null);

(statearr_19190_19337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19186 === (6))){
var state_19185__$1 = state_19185;
var statearr_19191_19338 = state_19185__$1;
(statearr_19191_19338[(2)] = null);

(statearr_19191_19338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19186 === (7))){
var inst_19181 = (state_19185[(2)]);
var state_19185__$1 = state_19185;
var statearr_19192_19339 = state_19185__$1;
(statearr_19192_19339[(2)] = inst_19181);

(statearr_19192_19339[(1)] = (3));


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
});})(__19329,c__17125__auto___19333,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async))
;
return ((function (__19329,switch__16968__auto__,c__17125__auto___19333,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0 = (function (){
var statearr_19193 = [null,null,null,null,null,null,null];
(statearr_19193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__);

(statearr_19193[(1)] = (1));

return statearr_19193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1 = (function (state_19185){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e19194){if((e19194 instanceof Object)){
var ex__16972__auto__ = e19194;
var statearr_19195_19340 = state_19185;
(statearr_19195_19340[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19341 = state_19185;
state_19185 = G__19341;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__ = function(state_19185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1.call(this,state_19185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__;
})()
;})(__19329,switch__16968__auto__,c__17125__auto___19333,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async))
})();
var state__17127__auto__ = (function (){var statearr_19196 = f__17126__auto__.call(null);
(statearr_19196[(6)] = c__17125__auto___19333);

return statearr_19196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(__19329,c__17125__auto___19333,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async))
);


break;
case "async":
var c__17125__auto___19342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19329,c__17125__auto___19342,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (__19329,c__17125__auto___19342,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async){
return (function (state_19209){
var state_val_19210 = (state_19209[(1)]);
if((state_val_19210 === (1))){
var state_19209__$1 = state_19209;
var statearr_19211_19343 = state_19209__$1;
(statearr_19211_19343[(2)] = null);

(statearr_19211_19343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (2))){
var state_19209__$1 = state_19209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19209__$1,(4),jobs);
} else {
if((state_val_19210 === (3))){
var inst_19207 = (state_19209[(2)]);
var state_19209__$1 = state_19209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19209__$1,inst_19207);
} else {
if((state_val_19210 === (4))){
var inst_19199 = (state_19209[(2)]);
var inst_19200 = async.call(null,inst_19199);
var state_19209__$1 = state_19209;
if(cljs.core.truth_(inst_19200)){
var statearr_19212_19344 = state_19209__$1;
(statearr_19212_19344[(1)] = (5));

} else {
var statearr_19213_19345 = state_19209__$1;
(statearr_19213_19345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (5))){
var state_19209__$1 = state_19209;
var statearr_19214_19346 = state_19209__$1;
(statearr_19214_19346[(2)] = null);

(statearr_19214_19346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (6))){
var state_19209__$1 = state_19209;
var statearr_19215_19347 = state_19209__$1;
(statearr_19215_19347[(2)] = null);

(statearr_19215_19347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (7))){
var inst_19205 = (state_19209[(2)]);
var state_19209__$1 = state_19209;
var statearr_19216_19348 = state_19209__$1;
(statearr_19216_19348[(2)] = inst_19205);

(statearr_19216_19348[(1)] = (3));


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
});})(__19329,c__17125__auto___19342,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async))
;
return ((function (__19329,switch__16968__auto__,c__17125__auto___19342,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0 = (function (){
var statearr_19217 = [null,null,null,null,null,null,null];
(statearr_19217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__);

(statearr_19217[(1)] = (1));

return statearr_19217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1 = (function (state_19209){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e19218){if((e19218 instanceof Object)){
var ex__16972__auto__ = e19218;
var statearr_19219_19349 = state_19209;
(statearr_19219_19349[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19350 = state_19209;
state_19209 = G__19350;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__ = function(state_19209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1.call(this,state_19209);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__;
})()
;})(__19329,switch__16968__auto__,c__17125__auto___19342,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async))
})();
var state__17127__auto__ = (function (){var statearr_19220 = f__17126__auto__.call(null);
(statearr_19220[(6)] = c__17125__auto___19342);

return statearr_19220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(__19329,c__17125__auto___19342,G__19172_19330,G__19172_19331__$1,n__4376__auto___19328,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19172_19331__$1)].join('')));

}

var G__19351 = (__19329 + (1));
__19329 = G__19351;
continue;
} else {
}
break;
}

var c__17125__auto___19352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___19352,jobs,results,process,async){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___19352,jobs,results,process,async){
return (function (state_19242){
var state_val_19243 = (state_19242[(1)]);
if((state_val_19243 === (1))){
var state_19242__$1 = state_19242;
var statearr_19244_19353 = state_19242__$1;
(statearr_19244_19353[(2)] = null);

(statearr_19244_19353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (2))){
var state_19242__$1 = state_19242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19242__$1,(4),from);
} else {
if((state_val_19243 === (3))){
var inst_19240 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19242__$1,inst_19240);
} else {
if((state_val_19243 === (4))){
var inst_19223 = (state_19242[(7)]);
var inst_19223__$1 = (state_19242[(2)]);
var inst_19224 = (inst_19223__$1 == null);
var state_19242__$1 = (function (){var statearr_19245 = state_19242;
(statearr_19245[(7)] = inst_19223__$1);

return statearr_19245;
})();
if(cljs.core.truth_(inst_19224)){
var statearr_19246_19354 = state_19242__$1;
(statearr_19246_19354[(1)] = (5));

} else {
var statearr_19247_19355 = state_19242__$1;
(statearr_19247_19355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (5))){
var inst_19226 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19242__$1 = state_19242;
var statearr_19248_19356 = state_19242__$1;
(statearr_19248_19356[(2)] = inst_19226);

(statearr_19248_19356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (6))){
var inst_19228 = (state_19242[(8)]);
var inst_19223 = (state_19242[(7)]);
var inst_19228__$1 = cljs.core.async.chan.call(null,(1));
var inst_19229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19230 = [inst_19223,inst_19228__$1];
var inst_19231 = (new cljs.core.PersistentVector(null,2,(5),inst_19229,inst_19230,null));
var state_19242__$1 = (function (){var statearr_19249 = state_19242;
(statearr_19249[(8)] = inst_19228__$1);

return statearr_19249;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19242__$1,(8),jobs,inst_19231);
} else {
if((state_val_19243 === (7))){
var inst_19238 = (state_19242[(2)]);
var state_19242__$1 = state_19242;
var statearr_19250_19357 = state_19242__$1;
(statearr_19250_19357[(2)] = inst_19238);

(statearr_19250_19357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19243 === (8))){
var inst_19228 = (state_19242[(8)]);
var inst_19233 = (state_19242[(2)]);
var state_19242__$1 = (function (){var statearr_19251 = state_19242;
(statearr_19251[(9)] = inst_19233);

return statearr_19251;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19242__$1,(9),results,inst_19228);
} else {
if((state_val_19243 === (9))){
var inst_19235 = (state_19242[(2)]);
var state_19242__$1 = (function (){var statearr_19252 = state_19242;
(statearr_19252[(10)] = inst_19235);

return statearr_19252;
})();
var statearr_19253_19358 = state_19242__$1;
(statearr_19253_19358[(2)] = null);

(statearr_19253_19358[(1)] = (2));


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
});})(c__17125__auto___19352,jobs,results,process,async))
;
return ((function (switch__16968__auto__,c__17125__auto___19352,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0 = (function (){
var statearr_19254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__);

(statearr_19254[(1)] = (1));

return statearr_19254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1 = (function (state_19242){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e19255){if((e19255 instanceof Object)){
var ex__16972__auto__ = e19255;
var statearr_19256_19359 = state_19242;
(statearr_19256_19359[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19360 = state_19242;
state_19242 = G__19360;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__ = function(state_19242){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1.call(this,state_19242);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___19352,jobs,results,process,async))
})();
var state__17127__auto__ = (function (){var statearr_19257 = f__17126__auto__.call(null);
(statearr_19257[(6)] = c__17125__auto___19352);

return statearr_19257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___19352,jobs,results,process,async))
);


var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__,jobs,results,process,async){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__,jobs,results,process,async){
return (function (state_19295){
var state_val_19296 = (state_19295[(1)]);
if((state_val_19296 === (7))){
var inst_19291 = (state_19295[(2)]);
var state_19295__$1 = state_19295;
var statearr_19297_19361 = state_19295__$1;
(statearr_19297_19361[(2)] = inst_19291);

(statearr_19297_19361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (20))){
var state_19295__$1 = state_19295;
var statearr_19298_19362 = state_19295__$1;
(statearr_19298_19362[(2)] = null);

(statearr_19298_19362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (1))){
var state_19295__$1 = state_19295;
var statearr_19299_19363 = state_19295__$1;
(statearr_19299_19363[(2)] = null);

(statearr_19299_19363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (4))){
var inst_19260 = (state_19295[(7)]);
var inst_19260__$1 = (state_19295[(2)]);
var inst_19261 = (inst_19260__$1 == null);
var state_19295__$1 = (function (){var statearr_19300 = state_19295;
(statearr_19300[(7)] = inst_19260__$1);

return statearr_19300;
})();
if(cljs.core.truth_(inst_19261)){
var statearr_19301_19364 = state_19295__$1;
(statearr_19301_19364[(1)] = (5));

} else {
var statearr_19302_19365 = state_19295__$1;
(statearr_19302_19365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (15))){
var inst_19273 = (state_19295[(8)]);
var state_19295__$1 = state_19295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19295__$1,(18),to,inst_19273);
} else {
if((state_val_19296 === (21))){
var inst_19286 = (state_19295[(2)]);
var state_19295__$1 = state_19295;
var statearr_19303_19366 = state_19295__$1;
(statearr_19303_19366[(2)] = inst_19286);

(statearr_19303_19366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (13))){
var inst_19288 = (state_19295[(2)]);
var state_19295__$1 = (function (){var statearr_19304 = state_19295;
(statearr_19304[(9)] = inst_19288);

return statearr_19304;
})();
var statearr_19305_19367 = state_19295__$1;
(statearr_19305_19367[(2)] = null);

(statearr_19305_19367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (6))){
var inst_19260 = (state_19295[(7)]);
var state_19295__$1 = state_19295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19295__$1,(11),inst_19260);
} else {
if((state_val_19296 === (17))){
var inst_19281 = (state_19295[(2)]);
var state_19295__$1 = state_19295;
if(cljs.core.truth_(inst_19281)){
var statearr_19306_19368 = state_19295__$1;
(statearr_19306_19368[(1)] = (19));

} else {
var statearr_19307_19369 = state_19295__$1;
(statearr_19307_19369[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (3))){
var inst_19293 = (state_19295[(2)]);
var state_19295__$1 = state_19295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19295__$1,inst_19293);
} else {
if((state_val_19296 === (12))){
var inst_19270 = (state_19295[(10)]);
var state_19295__$1 = state_19295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19295__$1,(14),inst_19270);
} else {
if((state_val_19296 === (2))){
var state_19295__$1 = state_19295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19295__$1,(4),results);
} else {
if((state_val_19296 === (19))){
var state_19295__$1 = state_19295;
var statearr_19308_19370 = state_19295__$1;
(statearr_19308_19370[(2)] = null);

(statearr_19308_19370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (11))){
var inst_19270 = (state_19295[(2)]);
var state_19295__$1 = (function (){var statearr_19309 = state_19295;
(statearr_19309[(10)] = inst_19270);

return statearr_19309;
})();
var statearr_19310_19371 = state_19295__$1;
(statearr_19310_19371[(2)] = null);

(statearr_19310_19371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (9))){
var state_19295__$1 = state_19295;
var statearr_19311_19372 = state_19295__$1;
(statearr_19311_19372[(2)] = null);

(statearr_19311_19372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (5))){
var state_19295__$1 = state_19295;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19312_19373 = state_19295__$1;
(statearr_19312_19373[(1)] = (8));

} else {
var statearr_19313_19374 = state_19295__$1;
(statearr_19313_19374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (14))){
var inst_19275 = (state_19295[(11)]);
var inst_19273 = (state_19295[(8)]);
var inst_19273__$1 = (state_19295[(2)]);
var inst_19274 = (inst_19273__$1 == null);
var inst_19275__$1 = cljs.core.not.call(null,inst_19274);
var state_19295__$1 = (function (){var statearr_19314 = state_19295;
(statearr_19314[(11)] = inst_19275__$1);

(statearr_19314[(8)] = inst_19273__$1);

return statearr_19314;
})();
if(inst_19275__$1){
var statearr_19315_19375 = state_19295__$1;
(statearr_19315_19375[(1)] = (15));

} else {
var statearr_19316_19376 = state_19295__$1;
(statearr_19316_19376[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (16))){
var inst_19275 = (state_19295[(11)]);
var state_19295__$1 = state_19295;
var statearr_19317_19377 = state_19295__$1;
(statearr_19317_19377[(2)] = inst_19275);

(statearr_19317_19377[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (10))){
var inst_19267 = (state_19295[(2)]);
var state_19295__$1 = state_19295;
var statearr_19318_19378 = state_19295__$1;
(statearr_19318_19378[(2)] = inst_19267);

(statearr_19318_19378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (18))){
var inst_19278 = (state_19295[(2)]);
var state_19295__$1 = state_19295;
var statearr_19319_19379 = state_19295__$1;
(statearr_19319_19379[(2)] = inst_19278);

(statearr_19319_19379[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (8))){
var inst_19264 = cljs.core.async.close_BANG_.call(null,to);
var state_19295__$1 = state_19295;
var statearr_19320_19380 = state_19295__$1;
(statearr_19320_19380[(2)] = inst_19264);

(statearr_19320_19380[(1)] = (10));


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
});})(c__17125__auto__,jobs,results,process,async))
;
return ((function (switch__16968__auto__,c__17125__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0 = (function (){
var statearr_19321 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19321[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__);

(statearr_19321[(1)] = (1));

return statearr_19321;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1 = (function (state_19295){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e19322){if((e19322 instanceof Object)){
var ex__16972__auto__ = e19322;
var statearr_19323_19381 = state_19295;
(statearr_19323_19381[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19382 = state_19295;
state_19295 = G__19382;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__ = function(state_19295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1.call(this,state_19295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16969__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__,jobs,results,process,async))
})();
var state__17127__auto__ = (function (){var statearr_19324 = f__17126__auto__.call(null);
(statearr_19324[(6)] = c__17125__auto__);

return statearr_19324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__,jobs,results,process,async))
);

return c__17125__auto__;
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
var G__19384 = arguments.length;
switch (G__19384) {
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
var G__19387 = arguments.length;
switch (G__19387) {
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
var G__19390 = arguments.length;
switch (G__19390) {
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
var c__17125__auto___19439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___19439,tc,fc){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___19439,tc,fc){
return (function (state_19416){
var state_val_19417 = (state_19416[(1)]);
if((state_val_19417 === (7))){
var inst_19412 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19418_19440 = state_19416__$1;
(statearr_19418_19440[(2)] = inst_19412);

(statearr_19418_19440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (1))){
var state_19416__$1 = state_19416;
var statearr_19419_19441 = state_19416__$1;
(statearr_19419_19441[(2)] = null);

(statearr_19419_19441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (4))){
var inst_19393 = (state_19416[(7)]);
var inst_19393__$1 = (state_19416[(2)]);
var inst_19394 = (inst_19393__$1 == null);
var state_19416__$1 = (function (){var statearr_19420 = state_19416;
(statearr_19420[(7)] = inst_19393__$1);

return statearr_19420;
})();
if(cljs.core.truth_(inst_19394)){
var statearr_19421_19442 = state_19416__$1;
(statearr_19421_19442[(1)] = (5));

} else {
var statearr_19422_19443 = state_19416__$1;
(statearr_19422_19443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (13))){
var state_19416__$1 = state_19416;
var statearr_19423_19444 = state_19416__$1;
(statearr_19423_19444[(2)] = null);

(statearr_19423_19444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (6))){
var inst_19393 = (state_19416[(7)]);
var inst_19399 = p.call(null,inst_19393);
var state_19416__$1 = state_19416;
if(cljs.core.truth_(inst_19399)){
var statearr_19424_19445 = state_19416__$1;
(statearr_19424_19445[(1)] = (9));

} else {
var statearr_19425_19446 = state_19416__$1;
(statearr_19425_19446[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (3))){
var inst_19414 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19416__$1,inst_19414);
} else {
if((state_val_19417 === (12))){
var state_19416__$1 = state_19416;
var statearr_19426_19447 = state_19416__$1;
(statearr_19426_19447[(2)] = null);

(statearr_19426_19447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (2))){
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19416__$1,(4),ch);
} else {
if((state_val_19417 === (11))){
var inst_19393 = (state_19416[(7)]);
var inst_19403 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19416__$1,(8),inst_19403,inst_19393);
} else {
if((state_val_19417 === (9))){
var state_19416__$1 = state_19416;
var statearr_19427_19448 = state_19416__$1;
(statearr_19427_19448[(2)] = tc);

(statearr_19427_19448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (5))){
var inst_19396 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19397 = cljs.core.async.close_BANG_.call(null,fc);
var state_19416__$1 = (function (){var statearr_19428 = state_19416;
(statearr_19428[(8)] = inst_19396);

return statearr_19428;
})();
var statearr_19429_19449 = state_19416__$1;
(statearr_19429_19449[(2)] = inst_19397);

(statearr_19429_19449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (14))){
var inst_19410 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19430_19450 = state_19416__$1;
(statearr_19430_19450[(2)] = inst_19410);

(statearr_19430_19450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (10))){
var state_19416__$1 = state_19416;
var statearr_19431_19451 = state_19416__$1;
(statearr_19431_19451[(2)] = fc);

(statearr_19431_19451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (8))){
var inst_19405 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
if(cljs.core.truth_(inst_19405)){
var statearr_19432_19452 = state_19416__$1;
(statearr_19432_19452[(1)] = (12));

} else {
var statearr_19433_19453 = state_19416__$1;
(statearr_19433_19453[(1)] = (13));

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
});})(c__17125__auto___19439,tc,fc))
;
return ((function (switch__16968__auto__,c__17125__auto___19439,tc,fc){
return (function() {
var cljs$core$async$state_machine__16969__auto__ = null;
var cljs$core$async$state_machine__16969__auto____0 = (function (){
var statearr_19434 = [null,null,null,null,null,null,null,null,null];
(statearr_19434[(0)] = cljs$core$async$state_machine__16969__auto__);

(statearr_19434[(1)] = (1));

return statearr_19434;
});
var cljs$core$async$state_machine__16969__auto____1 = (function (state_19416){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e19435){if((e19435 instanceof Object)){
var ex__16972__auto__ = e19435;
var statearr_19436_19454 = state_19416;
(statearr_19436_19454[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19455 = state_19416;
state_19416 = G__19455;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$state_machine__16969__auto__ = function(state_19416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16969__auto____1.call(this,state_19416);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16969__auto____0;
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16969__auto____1;
return cljs$core$async$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___19439,tc,fc))
})();
var state__17127__auto__ = (function (){var statearr_19437 = f__17126__auto__.call(null);
(statearr_19437[(6)] = c__17125__auto___19439);

return statearr_19437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___19439,tc,fc))
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
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_19476){
var state_val_19477 = (state_19476[(1)]);
if((state_val_19477 === (7))){
var inst_19472 = (state_19476[(2)]);
var state_19476__$1 = state_19476;
var statearr_19478_19496 = state_19476__$1;
(statearr_19478_19496[(2)] = inst_19472);

(statearr_19478_19496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (1))){
var inst_19456 = init;
var state_19476__$1 = (function (){var statearr_19479 = state_19476;
(statearr_19479[(7)] = inst_19456);

return statearr_19479;
})();
var statearr_19480_19497 = state_19476__$1;
(statearr_19480_19497[(2)] = null);

(statearr_19480_19497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (4))){
var inst_19459 = (state_19476[(8)]);
var inst_19459__$1 = (state_19476[(2)]);
var inst_19460 = (inst_19459__$1 == null);
var state_19476__$1 = (function (){var statearr_19481 = state_19476;
(statearr_19481[(8)] = inst_19459__$1);

return statearr_19481;
})();
if(cljs.core.truth_(inst_19460)){
var statearr_19482_19498 = state_19476__$1;
(statearr_19482_19498[(1)] = (5));

} else {
var statearr_19483_19499 = state_19476__$1;
(statearr_19483_19499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (6))){
var inst_19459 = (state_19476[(8)]);
var inst_19463 = (state_19476[(9)]);
var inst_19456 = (state_19476[(7)]);
var inst_19463__$1 = f.call(null,inst_19456,inst_19459);
var inst_19464 = cljs.core.reduced_QMARK_.call(null,inst_19463__$1);
var state_19476__$1 = (function (){var statearr_19484 = state_19476;
(statearr_19484[(9)] = inst_19463__$1);

return statearr_19484;
})();
if(inst_19464){
var statearr_19485_19500 = state_19476__$1;
(statearr_19485_19500[(1)] = (8));

} else {
var statearr_19486_19501 = state_19476__$1;
(statearr_19486_19501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (3))){
var inst_19474 = (state_19476[(2)]);
var state_19476__$1 = state_19476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19476__$1,inst_19474);
} else {
if((state_val_19477 === (2))){
var state_19476__$1 = state_19476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19476__$1,(4),ch);
} else {
if((state_val_19477 === (9))){
var inst_19463 = (state_19476[(9)]);
var inst_19456 = inst_19463;
var state_19476__$1 = (function (){var statearr_19487 = state_19476;
(statearr_19487[(7)] = inst_19456);

return statearr_19487;
})();
var statearr_19488_19502 = state_19476__$1;
(statearr_19488_19502[(2)] = null);

(statearr_19488_19502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (5))){
var inst_19456 = (state_19476[(7)]);
var state_19476__$1 = state_19476;
var statearr_19489_19503 = state_19476__$1;
(statearr_19489_19503[(2)] = inst_19456);

(statearr_19489_19503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (10))){
var inst_19470 = (state_19476[(2)]);
var state_19476__$1 = state_19476;
var statearr_19490_19504 = state_19476__$1;
(statearr_19490_19504[(2)] = inst_19470);

(statearr_19490_19504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19477 === (8))){
var inst_19463 = (state_19476[(9)]);
var inst_19466 = cljs.core.deref.call(null,inst_19463);
var state_19476__$1 = state_19476;
var statearr_19491_19505 = state_19476__$1;
(statearr_19491_19505[(2)] = inst_19466);

(statearr_19491_19505[(1)] = (10));


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
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16969__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16969__auto____0 = (function (){
var statearr_19492 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19492[(0)] = cljs$core$async$reduce_$_state_machine__16969__auto__);

(statearr_19492[(1)] = (1));

return statearr_19492;
});
var cljs$core$async$reduce_$_state_machine__16969__auto____1 = (function (state_19476){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e19493){if((e19493 instanceof Object)){
var ex__16972__auto__ = e19493;
var statearr_19494_19506 = state_19476;
(statearr_19494_19506[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19507 = state_19476;
state_19476 = G__19507;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16969__auto__ = function(state_19476){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16969__auto____1.call(this,state_19476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16969__auto____0;
cljs$core$async$reduce_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16969__auto____1;
return cljs$core$async$reduce_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_19495 = f__17126__auto__.call(null);
(statearr_19495[(6)] = c__17125__auto__);

return statearr_19495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__,f__$1){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__,f__$1){
return (function (state_19513){
var state_val_19514 = (state_19513[(1)]);
if((state_val_19514 === (1))){
var inst_19508 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19513__$1 = state_19513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19513__$1,(2),inst_19508);
} else {
if((state_val_19514 === (2))){
var inst_19510 = (state_19513[(2)]);
var inst_19511 = f__$1.call(null,inst_19510);
var state_19513__$1 = state_19513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19513__$1,inst_19511);
} else {
return null;
}
}
});})(c__17125__auto__,f__$1))
;
return ((function (switch__16968__auto__,c__17125__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16969__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16969__auto____0 = (function (){
var statearr_19515 = [null,null,null,null,null,null,null];
(statearr_19515[(0)] = cljs$core$async$transduce_$_state_machine__16969__auto__);

(statearr_19515[(1)] = (1));

return statearr_19515;
});
var cljs$core$async$transduce_$_state_machine__16969__auto____1 = (function (state_19513){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e19516){if((e19516 instanceof Object)){
var ex__16972__auto__ = e19516;
var statearr_19517_19519 = state_19513;
(statearr_19517_19519[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19520 = state_19513;
state_19513 = G__19520;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16969__auto__ = function(state_19513){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16969__auto____1.call(this,state_19513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16969__auto____0;
cljs$core$async$transduce_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16969__auto____1;
return cljs$core$async$transduce_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__,f__$1))
})();
var state__17127__auto__ = (function (){var statearr_19518 = f__17126__auto__.call(null);
(statearr_19518[(6)] = c__17125__auto__);

return statearr_19518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__,f__$1))
);

return c__17125__auto__;
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
var G__19522 = arguments.length;
switch (G__19522) {
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
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_19547){
var state_val_19548 = (state_19547[(1)]);
if((state_val_19548 === (7))){
var inst_19529 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
var statearr_19549_19570 = state_19547__$1;
(statearr_19549_19570[(2)] = inst_19529);

(statearr_19549_19570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (1))){
var inst_19523 = cljs.core.seq.call(null,coll);
var inst_19524 = inst_19523;
var state_19547__$1 = (function (){var statearr_19550 = state_19547;
(statearr_19550[(7)] = inst_19524);

return statearr_19550;
})();
var statearr_19551_19571 = state_19547__$1;
(statearr_19551_19571[(2)] = null);

(statearr_19551_19571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (4))){
var inst_19524 = (state_19547[(7)]);
var inst_19527 = cljs.core.first.call(null,inst_19524);
var state_19547__$1 = state_19547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19547__$1,(7),ch,inst_19527);
} else {
if((state_val_19548 === (13))){
var inst_19541 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
var statearr_19552_19572 = state_19547__$1;
(statearr_19552_19572[(2)] = inst_19541);

(statearr_19552_19572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (6))){
var inst_19532 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
if(cljs.core.truth_(inst_19532)){
var statearr_19553_19573 = state_19547__$1;
(statearr_19553_19573[(1)] = (8));

} else {
var statearr_19554_19574 = state_19547__$1;
(statearr_19554_19574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (3))){
var inst_19545 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19547__$1,inst_19545);
} else {
if((state_val_19548 === (12))){
var state_19547__$1 = state_19547;
var statearr_19555_19575 = state_19547__$1;
(statearr_19555_19575[(2)] = null);

(statearr_19555_19575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (2))){
var inst_19524 = (state_19547[(7)]);
var state_19547__$1 = state_19547;
if(cljs.core.truth_(inst_19524)){
var statearr_19556_19576 = state_19547__$1;
(statearr_19556_19576[(1)] = (4));

} else {
var statearr_19557_19577 = state_19547__$1;
(statearr_19557_19577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (11))){
var inst_19538 = cljs.core.async.close_BANG_.call(null,ch);
var state_19547__$1 = state_19547;
var statearr_19558_19578 = state_19547__$1;
(statearr_19558_19578[(2)] = inst_19538);

(statearr_19558_19578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (9))){
var state_19547__$1 = state_19547;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19559_19579 = state_19547__$1;
(statearr_19559_19579[(1)] = (11));

} else {
var statearr_19560_19580 = state_19547__$1;
(statearr_19560_19580[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (5))){
var inst_19524 = (state_19547[(7)]);
var state_19547__$1 = state_19547;
var statearr_19561_19581 = state_19547__$1;
(statearr_19561_19581[(2)] = inst_19524);

(statearr_19561_19581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (10))){
var inst_19543 = (state_19547[(2)]);
var state_19547__$1 = state_19547;
var statearr_19562_19582 = state_19547__$1;
(statearr_19562_19582[(2)] = inst_19543);

(statearr_19562_19582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19548 === (8))){
var inst_19524 = (state_19547[(7)]);
var inst_19534 = cljs.core.next.call(null,inst_19524);
var inst_19524__$1 = inst_19534;
var state_19547__$1 = (function (){var statearr_19563 = state_19547;
(statearr_19563[(7)] = inst_19524__$1);

return statearr_19563;
})();
var statearr_19564_19583 = state_19547__$1;
(statearr_19564_19583[(2)] = null);

(statearr_19564_19583[(1)] = (2));


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
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var cljs$core$async$state_machine__16969__auto__ = null;
var cljs$core$async$state_machine__16969__auto____0 = (function (){
var statearr_19565 = [null,null,null,null,null,null,null,null];
(statearr_19565[(0)] = cljs$core$async$state_machine__16969__auto__);

(statearr_19565[(1)] = (1));

return statearr_19565;
});
var cljs$core$async$state_machine__16969__auto____1 = (function (state_19547){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e19566){if((e19566 instanceof Object)){
var ex__16972__auto__ = e19566;
var statearr_19567_19584 = state_19547;
(statearr_19567_19584[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19585 = state_19547;
state_19547 = G__19585;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$state_machine__16969__auto__ = function(state_19547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16969__auto____1.call(this,state_19547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16969__auto____0;
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16969__auto____1;
return cljs$core$async$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_19568 = f__17126__auto__.call(null);
(statearr_19568[(6)] = c__17125__auto__);

return statearr_19568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async19586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19586 = (function (ch,cs,meta19587){
this.ch = ch;
this.cs = cs;
this.meta19587 = meta19587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19588,meta19587__$1){
var self__ = this;
var _19588__$1 = this;
return (new cljs.core.async.t_cljs$core$async19586(self__.ch,self__.cs,meta19587__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19588){
var self__ = this;
var _19588__$1 = this;
return self__.meta19587;
});})(cs))
;

cljs.core.async.t_cljs$core$async19586.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19586.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19586.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19586.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19586.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19586.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19587","meta19587",-1720541721,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19586";

cljs.core.async.t_cljs$core$async19586.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async19586");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19586.
 */
cljs.core.async.__GT_t_cljs$core$async19586 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19586(ch__$1,cs__$1,meta19587){
return (new cljs.core.async.t_cljs$core$async19586(ch__$1,cs__$1,meta19587));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19586(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17125__auto___19808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___19808,cs,m,dchan,dctr,done){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___19808,cs,m,dchan,dctr,done){
return (function (state_19723){
var state_val_19724 = (state_19723[(1)]);
if((state_val_19724 === (7))){
var inst_19719 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19725_19809 = state_19723__$1;
(statearr_19725_19809[(2)] = inst_19719);

(statearr_19725_19809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (20))){
var inst_19622 = (state_19723[(7)]);
var inst_19634 = cljs.core.first.call(null,inst_19622);
var inst_19635 = cljs.core.nth.call(null,inst_19634,(0),null);
var inst_19636 = cljs.core.nth.call(null,inst_19634,(1),null);
var state_19723__$1 = (function (){var statearr_19726 = state_19723;
(statearr_19726[(8)] = inst_19635);

return statearr_19726;
})();
if(cljs.core.truth_(inst_19636)){
var statearr_19727_19810 = state_19723__$1;
(statearr_19727_19810[(1)] = (22));

} else {
var statearr_19728_19811 = state_19723__$1;
(statearr_19728_19811[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (27))){
var inst_19591 = (state_19723[(9)]);
var inst_19671 = (state_19723[(10)]);
var inst_19666 = (state_19723[(11)]);
var inst_19664 = (state_19723[(12)]);
var inst_19671__$1 = cljs.core._nth.call(null,inst_19664,inst_19666);
var inst_19672 = cljs.core.async.put_BANG_.call(null,inst_19671__$1,inst_19591,done);
var state_19723__$1 = (function (){var statearr_19729 = state_19723;
(statearr_19729[(10)] = inst_19671__$1);

return statearr_19729;
})();
if(cljs.core.truth_(inst_19672)){
var statearr_19730_19812 = state_19723__$1;
(statearr_19730_19812[(1)] = (30));

} else {
var statearr_19731_19813 = state_19723__$1;
(statearr_19731_19813[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (1))){
var state_19723__$1 = state_19723;
var statearr_19732_19814 = state_19723__$1;
(statearr_19732_19814[(2)] = null);

(statearr_19732_19814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (24))){
var inst_19622 = (state_19723[(7)]);
var inst_19641 = (state_19723[(2)]);
var inst_19642 = cljs.core.next.call(null,inst_19622);
var inst_19600 = inst_19642;
var inst_19601 = null;
var inst_19602 = (0);
var inst_19603 = (0);
var state_19723__$1 = (function (){var statearr_19733 = state_19723;
(statearr_19733[(13)] = inst_19603);

(statearr_19733[(14)] = inst_19602);

(statearr_19733[(15)] = inst_19641);

(statearr_19733[(16)] = inst_19601);

(statearr_19733[(17)] = inst_19600);

return statearr_19733;
})();
var statearr_19734_19815 = state_19723__$1;
(statearr_19734_19815[(2)] = null);

(statearr_19734_19815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (39))){
var state_19723__$1 = state_19723;
var statearr_19738_19816 = state_19723__$1;
(statearr_19738_19816[(2)] = null);

(statearr_19738_19816[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (4))){
var inst_19591 = (state_19723[(9)]);
var inst_19591__$1 = (state_19723[(2)]);
var inst_19592 = (inst_19591__$1 == null);
var state_19723__$1 = (function (){var statearr_19739 = state_19723;
(statearr_19739[(9)] = inst_19591__$1);

return statearr_19739;
})();
if(cljs.core.truth_(inst_19592)){
var statearr_19740_19817 = state_19723__$1;
(statearr_19740_19817[(1)] = (5));

} else {
var statearr_19741_19818 = state_19723__$1;
(statearr_19741_19818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (15))){
var inst_19603 = (state_19723[(13)]);
var inst_19602 = (state_19723[(14)]);
var inst_19601 = (state_19723[(16)]);
var inst_19600 = (state_19723[(17)]);
var inst_19618 = (state_19723[(2)]);
var inst_19619 = (inst_19603 + (1));
var tmp19735 = inst_19602;
var tmp19736 = inst_19601;
var tmp19737 = inst_19600;
var inst_19600__$1 = tmp19737;
var inst_19601__$1 = tmp19736;
var inst_19602__$1 = tmp19735;
var inst_19603__$1 = inst_19619;
var state_19723__$1 = (function (){var statearr_19742 = state_19723;
(statearr_19742[(13)] = inst_19603__$1);

(statearr_19742[(14)] = inst_19602__$1);

(statearr_19742[(18)] = inst_19618);

(statearr_19742[(16)] = inst_19601__$1);

(statearr_19742[(17)] = inst_19600__$1);

return statearr_19742;
})();
var statearr_19743_19819 = state_19723__$1;
(statearr_19743_19819[(2)] = null);

(statearr_19743_19819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (21))){
var inst_19645 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19747_19820 = state_19723__$1;
(statearr_19747_19820[(2)] = inst_19645);

(statearr_19747_19820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (31))){
var inst_19671 = (state_19723[(10)]);
var inst_19675 = done.call(null,null);
var inst_19676 = cljs.core.async.untap_STAR_.call(null,m,inst_19671);
var state_19723__$1 = (function (){var statearr_19748 = state_19723;
(statearr_19748[(19)] = inst_19675);

return statearr_19748;
})();
var statearr_19749_19821 = state_19723__$1;
(statearr_19749_19821[(2)] = inst_19676);

(statearr_19749_19821[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (32))){
var inst_19663 = (state_19723[(20)]);
var inst_19666 = (state_19723[(11)]);
var inst_19665 = (state_19723[(21)]);
var inst_19664 = (state_19723[(12)]);
var inst_19678 = (state_19723[(2)]);
var inst_19679 = (inst_19666 + (1));
var tmp19744 = inst_19663;
var tmp19745 = inst_19665;
var tmp19746 = inst_19664;
var inst_19663__$1 = tmp19744;
var inst_19664__$1 = tmp19746;
var inst_19665__$1 = tmp19745;
var inst_19666__$1 = inst_19679;
var state_19723__$1 = (function (){var statearr_19750 = state_19723;
(statearr_19750[(20)] = inst_19663__$1);

(statearr_19750[(22)] = inst_19678);

(statearr_19750[(11)] = inst_19666__$1);

(statearr_19750[(21)] = inst_19665__$1);

(statearr_19750[(12)] = inst_19664__$1);

return statearr_19750;
})();
var statearr_19751_19822 = state_19723__$1;
(statearr_19751_19822[(2)] = null);

(statearr_19751_19822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (40))){
var inst_19691 = (state_19723[(23)]);
var inst_19695 = done.call(null,null);
var inst_19696 = cljs.core.async.untap_STAR_.call(null,m,inst_19691);
var state_19723__$1 = (function (){var statearr_19752 = state_19723;
(statearr_19752[(24)] = inst_19695);

return statearr_19752;
})();
var statearr_19753_19823 = state_19723__$1;
(statearr_19753_19823[(2)] = inst_19696);

(statearr_19753_19823[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (33))){
var inst_19682 = (state_19723[(25)]);
var inst_19684 = cljs.core.chunked_seq_QMARK_.call(null,inst_19682);
var state_19723__$1 = state_19723;
if(inst_19684){
var statearr_19754_19824 = state_19723__$1;
(statearr_19754_19824[(1)] = (36));

} else {
var statearr_19755_19825 = state_19723__$1;
(statearr_19755_19825[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (13))){
var inst_19612 = (state_19723[(26)]);
var inst_19615 = cljs.core.async.close_BANG_.call(null,inst_19612);
var state_19723__$1 = state_19723;
var statearr_19756_19826 = state_19723__$1;
(statearr_19756_19826[(2)] = inst_19615);

(statearr_19756_19826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (22))){
var inst_19635 = (state_19723[(8)]);
var inst_19638 = cljs.core.async.close_BANG_.call(null,inst_19635);
var state_19723__$1 = state_19723;
var statearr_19757_19827 = state_19723__$1;
(statearr_19757_19827[(2)] = inst_19638);

(statearr_19757_19827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (36))){
var inst_19682 = (state_19723[(25)]);
var inst_19686 = cljs.core.chunk_first.call(null,inst_19682);
var inst_19687 = cljs.core.chunk_rest.call(null,inst_19682);
var inst_19688 = cljs.core.count.call(null,inst_19686);
var inst_19663 = inst_19687;
var inst_19664 = inst_19686;
var inst_19665 = inst_19688;
var inst_19666 = (0);
var state_19723__$1 = (function (){var statearr_19758 = state_19723;
(statearr_19758[(20)] = inst_19663);

(statearr_19758[(11)] = inst_19666);

(statearr_19758[(21)] = inst_19665);

(statearr_19758[(12)] = inst_19664);

return statearr_19758;
})();
var statearr_19759_19828 = state_19723__$1;
(statearr_19759_19828[(2)] = null);

(statearr_19759_19828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (41))){
var inst_19682 = (state_19723[(25)]);
var inst_19698 = (state_19723[(2)]);
var inst_19699 = cljs.core.next.call(null,inst_19682);
var inst_19663 = inst_19699;
var inst_19664 = null;
var inst_19665 = (0);
var inst_19666 = (0);
var state_19723__$1 = (function (){var statearr_19760 = state_19723;
(statearr_19760[(20)] = inst_19663);

(statearr_19760[(11)] = inst_19666);

(statearr_19760[(21)] = inst_19665);

(statearr_19760[(12)] = inst_19664);

(statearr_19760[(27)] = inst_19698);

return statearr_19760;
})();
var statearr_19761_19829 = state_19723__$1;
(statearr_19761_19829[(2)] = null);

(statearr_19761_19829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (43))){
var state_19723__$1 = state_19723;
var statearr_19762_19830 = state_19723__$1;
(statearr_19762_19830[(2)] = null);

(statearr_19762_19830[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (29))){
var inst_19707 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19763_19831 = state_19723__$1;
(statearr_19763_19831[(2)] = inst_19707);

(statearr_19763_19831[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (44))){
var inst_19716 = (state_19723[(2)]);
var state_19723__$1 = (function (){var statearr_19764 = state_19723;
(statearr_19764[(28)] = inst_19716);

return statearr_19764;
})();
var statearr_19765_19832 = state_19723__$1;
(statearr_19765_19832[(2)] = null);

(statearr_19765_19832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (6))){
var inst_19655 = (state_19723[(29)]);
var inst_19654 = cljs.core.deref.call(null,cs);
var inst_19655__$1 = cljs.core.keys.call(null,inst_19654);
var inst_19656 = cljs.core.count.call(null,inst_19655__$1);
var inst_19657 = cljs.core.reset_BANG_.call(null,dctr,inst_19656);
var inst_19662 = cljs.core.seq.call(null,inst_19655__$1);
var inst_19663 = inst_19662;
var inst_19664 = null;
var inst_19665 = (0);
var inst_19666 = (0);
var state_19723__$1 = (function (){var statearr_19766 = state_19723;
(statearr_19766[(29)] = inst_19655__$1);

(statearr_19766[(20)] = inst_19663);

(statearr_19766[(11)] = inst_19666);

(statearr_19766[(21)] = inst_19665);

(statearr_19766[(30)] = inst_19657);

(statearr_19766[(12)] = inst_19664);

return statearr_19766;
})();
var statearr_19767_19833 = state_19723__$1;
(statearr_19767_19833[(2)] = null);

(statearr_19767_19833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (28))){
var inst_19682 = (state_19723[(25)]);
var inst_19663 = (state_19723[(20)]);
var inst_19682__$1 = cljs.core.seq.call(null,inst_19663);
var state_19723__$1 = (function (){var statearr_19768 = state_19723;
(statearr_19768[(25)] = inst_19682__$1);

return statearr_19768;
})();
if(inst_19682__$1){
var statearr_19769_19834 = state_19723__$1;
(statearr_19769_19834[(1)] = (33));

} else {
var statearr_19770_19835 = state_19723__$1;
(statearr_19770_19835[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (25))){
var inst_19666 = (state_19723[(11)]);
var inst_19665 = (state_19723[(21)]);
var inst_19668 = (inst_19666 < inst_19665);
var inst_19669 = inst_19668;
var state_19723__$1 = state_19723;
if(cljs.core.truth_(inst_19669)){
var statearr_19771_19836 = state_19723__$1;
(statearr_19771_19836[(1)] = (27));

} else {
var statearr_19772_19837 = state_19723__$1;
(statearr_19772_19837[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (34))){
var state_19723__$1 = state_19723;
var statearr_19773_19838 = state_19723__$1;
(statearr_19773_19838[(2)] = null);

(statearr_19773_19838[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (17))){
var state_19723__$1 = state_19723;
var statearr_19774_19839 = state_19723__$1;
(statearr_19774_19839[(2)] = null);

(statearr_19774_19839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (3))){
var inst_19721 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19723__$1,inst_19721);
} else {
if((state_val_19724 === (12))){
var inst_19650 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19775_19840 = state_19723__$1;
(statearr_19775_19840[(2)] = inst_19650);

(statearr_19775_19840[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (2))){
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19723__$1,(4),ch);
} else {
if((state_val_19724 === (23))){
var state_19723__$1 = state_19723;
var statearr_19776_19841 = state_19723__$1;
(statearr_19776_19841[(2)] = null);

(statearr_19776_19841[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (35))){
var inst_19705 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19777_19842 = state_19723__$1;
(statearr_19777_19842[(2)] = inst_19705);

(statearr_19777_19842[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (19))){
var inst_19622 = (state_19723[(7)]);
var inst_19626 = cljs.core.chunk_first.call(null,inst_19622);
var inst_19627 = cljs.core.chunk_rest.call(null,inst_19622);
var inst_19628 = cljs.core.count.call(null,inst_19626);
var inst_19600 = inst_19627;
var inst_19601 = inst_19626;
var inst_19602 = inst_19628;
var inst_19603 = (0);
var state_19723__$1 = (function (){var statearr_19778 = state_19723;
(statearr_19778[(13)] = inst_19603);

(statearr_19778[(14)] = inst_19602);

(statearr_19778[(16)] = inst_19601);

(statearr_19778[(17)] = inst_19600);

return statearr_19778;
})();
var statearr_19779_19843 = state_19723__$1;
(statearr_19779_19843[(2)] = null);

(statearr_19779_19843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (11))){
var inst_19622 = (state_19723[(7)]);
var inst_19600 = (state_19723[(17)]);
var inst_19622__$1 = cljs.core.seq.call(null,inst_19600);
var state_19723__$1 = (function (){var statearr_19780 = state_19723;
(statearr_19780[(7)] = inst_19622__$1);

return statearr_19780;
})();
if(inst_19622__$1){
var statearr_19781_19844 = state_19723__$1;
(statearr_19781_19844[(1)] = (16));

} else {
var statearr_19782_19845 = state_19723__$1;
(statearr_19782_19845[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (9))){
var inst_19652 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19783_19846 = state_19723__$1;
(statearr_19783_19846[(2)] = inst_19652);

(statearr_19783_19846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (5))){
var inst_19598 = cljs.core.deref.call(null,cs);
var inst_19599 = cljs.core.seq.call(null,inst_19598);
var inst_19600 = inst_19599;
var inst_19601 = null;
var inst_19602 = (0);
var inst_19603 = (0);
var state_19723__$1 = (function (){var statearr_19784 = state_19723;
(statearr_19784[(13)] = inst_19603);

(statearr_19784[(14)] = inst_19602);

(statearr_19784[(16)] = inst_19601);

(statearr_19784[(17)] = inst_19600);

return statearr_19784;
})();
var statearr_19785_19847 = state_19723__$1;
(statearr_19785_19847[(2)] = null);

(statearr_19785_19847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (14))){
var state_19723__$1 = state_19723;
var statearr_19786_19848 = state_19723__$1;
(statearr_19786_19848[(2)] = null);

(statearr_19786_19848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (45))){
var inst_19713 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19787_19849 = state_19723__$1;
(statearr_19787_19849[(2)] = inst_19713);

(statearr_19787_19849[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (26))){
var inst_19655 = (state_19723[(29)]);
var inst_19709 = (state_19723[(2)]);
var inst_19710 = cljs.core.seq.call(null,inst_19655);
var state_19723__$1 = (function (){var statearr_19788 = state_19723;
(statearr_19788[(31)] = inst_19709);

return statearr_19788;
})();
if(inst_19710){
var statearr_19789_19850 = state_19723__$1;
(statearr_19789_19850[(1)] = (42));

} else {
var statearr_19790_19851 = state_19723__$1;
(statearr_19790_19851[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (16))){
var inst_19622 = (state_19723[(7)]);
var inst_19624 = cljs.core.chunked_seq_QMARK_.call(null,inst_19622);
var state_19723__$1 = state_19723;
if(inst_19624){
var statearr_19791_19852 = state_19723__$1;
(statearr_19791_19852[(1)] = (19));

} else {
var statearr_19792_19853 = state_19723__$1;
(statearr_19792_19853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (38))){
var inst_19702 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19793_19854 = state_19723__$1;
(statearr_19793_19854[(2)] = inst_19702);

(statearr_19793_19854[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (30))){
var state_19723__$1 = state_19723;
var statearr_19794_19855 = state_19723__$1;
(statearr_19794_19855[(2)] = null);

(statearr_19794_19855[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (10))){
var inst_19603 = (state_19723[(13)]);
var inst_19601 = (state_19723[(16)]);
var inst_19611 = cljs.core._nth.call(null,inst_19601,inst_19603);
var inst_19612 = cljs.core.nth.call(null,inst_19611,(0),null);
var inst_19613 = cljs.core.nth.call(null,inst_19611,(1),null);
var state_19723__$1 = (function (){var statearr_19795 = state_19723;
(statearr_19795[(26)] = inst_19612);

return statearr_19795;
})();
if(cljs.core.truth_(inst_19613)){
var statearr_19796_19856 = state_19723__$1;
(statearr_19796_19856[(1)] = (13));

} else {
var statearr_19797_19857 = state_19723__$1;
(statearr_19797_19857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (18))){
var inst_19648 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19798_19858 = state_19723__$1;
(statearr_19798_19858[(2)] = inst_19648);

(statearr_19798_19858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (42))){
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19723__$1,(45),dchan);
} else {
if((state_val_19724 === (37))){
var inst_19682 = (state_19723[(25)]);
var inst_19591 = (state_19723[(9)]);
var inst_19691 = (state_19723[(23)]);
var inst_19691__$1 = cljs.core.first.call(null,inst_19682);
var inst_19692 = cljs.core.async.put_BANG_.call(null,inst_19691__$1,inst_19591,done);
var state_19723__$1 = (function (){var statearr_19799 = state_19723;
(statearr_19799[(23)] = inst_19691__$1);

return statearr_19799;
})();
if(cljs.core.truth_(inst_19692)){
var statearr_19800_19859 = state_19723__$1;
(statearr_19800_19859[(1)] = (39));

} else {
var statearr_19801_19860 = state_19723__$1;
(statearr_19801_19860[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (8))){
var inst_19603 = (state_19723[(13)]);
var inst_19602 = (state_19723[(14)]);
var inst_19605 = (inst_19603 < inst_19602);
var inst_19606 = inst_19605;
var state_19723__$1 = state_19723;
if(cljs.core.truth_(inst_19606)){
var statearr_19802_19861 = state_19723__$1;
(statearr_19802_19861[(1)] = (10));

} else {
var statearr_19803_19862 = state_19723__$1;
(statearr_19803_19862[(1)] = (11));

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
});})(c__17125__auto___19808,cs,m,dchan,dctr,done))
;
return ((function (switch__16968__auto__,c__17125__auto___19808,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16969__auto__ = null;
var cljs$core$async$mult_$_state_machine__16969__auto____0 = (function (){
var statearr_19804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19804[(0)] = cljs$core$async$mult_$_state_machine__16969__auto__);

(statearr_19804[(1)] = (1));

return statearr_19804;
});
var cljs$core$async$mult_$_state_machine__16969__auto____1 = (function (state_19723){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e19805){if((e19805 instanceof Object)){
var ex__16972__auto__ = e19805;
var statearr_19806_19863 = state_19723;
(statearr_19806_19863[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19864 = state_19723;
state_19723 = G__19864;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16969__auto__ = function(state_19723){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16969__auto____1.call(this,state_19723);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16969__auto____0;
cljs$core$async$mult_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16969__auto____1;
return cljs$core$async$mult_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___19808,cs,m,dchan,dctr,done))
})();
var state__17127__auto__ = (function (){var statearr_19807 = f__17126__auto__.call(null);
(statearr_19807[(6)] = c__17125__auto___19808);

return statearr_19807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___19808,cs,m,dchan,dctr,done))
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
var G__19866 = arguments.length;
switch (G__19866) {
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
var len__4499__auto___19878 = arguments.length;
var i__4500__auto___19879 = (0);
while(true){
if((i__4500__auto___19879 < len__4499__auto___19878)){
args__4502__auto__.push((arguments[i__4500__auto___19879]));

var G__19880 = (i__4500__auto___19879 + (1));
i__4500__auto___19879 = G__19880;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19872){
var map__19873 = p__19872;
var map__19873__$1 = ((((!((map__19873 == null)))?(((((map__19873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19873):map__19873);
var opts = map__19873__$1;
var statearr_19875_19881 = state;
(statearr_19875_19881[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__19873,map__19873__$1,opts){
return (function (val){
var statearr_19876_19882 = state;
(statearr_19876_19882[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19873,map__19873__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_19877_19883 = state;
(statearr_19877_19883[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19868){
var G__19869 = cljs.core.first.call(null,seq19868);
var seq19868__$1 = cljs.core.next.call(null,seq19868);
var G__19870 = cljs.core.first.call(null,seq19868__$1);
var seq19868__$2 = cljs.core.next.call(null,seq19868__$1);
var G__19871 = cljs.core.first.call(null,seq19868__$2);
var seq19868__$3 = cljs.core.next.call(null,seq19868__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19869,G__19870,G__19871,seq19868__$3);
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
if(typeof cljs.core.async.t_cljs$core$async19884 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19884 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta19885){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta19885 = meta19885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19886,meta19885__$1){
var self__ = this;
var _19886__$1 = this;
return (new cljs.core.async.t_cljs$core$async19884(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta19885__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19886){
var self__ = this;
var _19886__$1 = this;
return self__.meta19885;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19884.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19884.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19884.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19884.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19884.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19884.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19884.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19884.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19884.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta19885","meta19885",-1816961622,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19884.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19884";

cljs.core.async.t_cljs$core$async19884.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async19884");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19884.
 */
cljs.core.async.__GT_t_cljs$core$async19884 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19884(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19885){
return (new cljs.core.async.t_cljs$core$async19884(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19885));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19884(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17125__auto___20048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___20048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___20048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19988){
var state_val_19989 = (state_19988[(1)]);
if((state_val_19989 === (7))){
var inst_19903 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
var statearr_19990_20049 = state_19988__$1;
(statearr_19990_20049[(2)] = inst_19903);

(statearr_19990_20049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (20))){
var inst_19915 = (state_19988[(7)]);
var state_19988__$1 = state_19988;
var statearr_19991_20050 = state_19988__$1;
(statearr_19991_20050[(2)] = inst_19915);

(statearr_19991_20050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (27))){
var state_19988__$1 = state_19988;
var statearr_19992_20051 = state_19988__$1;
(statearr_19992_20051[(2)] = null);

(statearr_19992_20051[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (1))){
var inst_19890 = (state_19988[(8)]);
var inst_19890__$1 = calc_state.call(null);
var inst_19892 = (inst_19890__$1 == null);
var inst_19893 = cljs.core.not.call(null,inst_19892);
var state_19988__$1 = (function (){var statearr_19993 = state_19988;
(statearr_19993[(8)] = inst_19890__$1);

return statearr_19993;
})();
if(inst_19893){
var statearr_19994_20052 = state_19988__$1;
(statearr_19994_20052[(1)] = (2));

} else {
var statearr_19995_20053 = state_19988__$1;
(statearr_19995_20053[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (24))){
var inst_19948 = (state_19988[(9)]);
var inst_19962 = (state_19988[(10)]);
var inst_19939 = (state_19988[(11)]);
var inst_19962__$1 = inst_19939.call(null,inst_19948);
var state_19988__$1 = (function (){var statearr_19996 = state_19988;
(statearr_19996[(10)] = inst_19962__$1);

return statearr_19996;
})();
if(cljs.core.truth_(inst_19962__$1)){
var statearr_19997_20054 = state_19988__$1;
(statearr_19997_20054[(1)] = (29));

} else {
var statearr_19998_20055 = state_19988__$1;
(statearr_19998_20055[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (4))){
var inst_19906 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
if(cljs.core.truth_(inst_19906)){
var statearr_19999_20056 = state_19988__$1;
(statearr_19999_20056[(1)] = (8));

} else {
var statearr_20000_20057 = state_19988__$1;
(statearr_20000_20057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (15))){
var inst_19933 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
if(cljs.core.truth_(inst_19933)){
var statearr_20001_20058 = state_19988__$1;
(statearr_20001_20058[(1)] = (19));

} else {
var statearr_20002_20059 = state_19988__$1;
(statearr_20002_20059[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (21))){
var inst_19938 = (state_19988[(12)]);
var inst_19938__$1 = (state_19988[(2)]);
var inst_19939 = cljs.core.get.call(null,inst_19938__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19940 = cljs.core.get.call(null,inst_19938__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19941 = cljs.core.get.call(null,inst_19938__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19988__$1 = (function (){var statearr_20003 = state_19988;
(statearr_20003[(12)] = inst_19938__$1);

(statearr_20003[(13)] = inst_19940);

(statearr_20003[(11)] = inst_19939);

return statearr_20003;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19988__$1,(22),inst_19941);
} else {
if((state_val_19989 === (31))){
var inst_19970 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
if(cljs.core.truth_(inst_19970)){
var statearr_20004_20060 = state_19988__$1;
(statearr_20004_20060[(1)] = (32));

} else {
var statearr_20005_20061 = state_19988__$1;
(statearr_20005_20061[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (32))){
var inst_19947 = (state_19988[(14)]);
var state_19988__$1 = state_19988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19988__$1,(35),out,inst_19947);
} else {
if((state_val_19989 === (33))){
var inst_19938 = (state_19988[(12)]);
var inst_19915 = inst_19938;
var state_19988__$1 = (function (){var statearr_20006 = state_19988;
(statearr_20006[(7)] = inst_19915);

return statearr_20006;
})();
var statearr_20007_20062 = state_19988__$1;
(statearr_20007_20062[(2)] = null);

(statearr_20007_20062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (13))){
var inst_19915 = (state_19988[(7)]);
var inst_19922 = inst_19915.cljs$lang$protocol_mask$partition0$;
var inst_19923 = (inst_19922 & (64));
var inst_19924 = inst_19915.cljs$core$ISeq$;
var inst_19925 = (cljs.core.PROTOCOL_SENTINEL === inst_19924);
var inst_19926 = ((inst_19923) || (inst_19925));
var state_19988__$1 = state_19988;
if(cljs.core.truth_(inst_19926)){
var statearr_20008_20063 = state_19988__$1;
(statearr_20008_20063[(1)] = (16));

} else {
var statearr_20009_20064 = state_19988__$1;
(statearr_20009_20064[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (22))){
var inst_19947 = (state_19988[(14)]);
var inst_19948 = (state_19988[(9)]);
var inst_19946 = (state_19988[(2)]);
var inst_19947__$1 = cljs.core.nth.call(null,inst_19946,(0),null);
var inst_19948__$1 = cljs.core.nth.call(null,inst_19946,(1),null);
var inst_19949 = (inst_19947__$1 == null);
var inst_19950 = cljs.core._EQ_.call(null,inst_19948__$1,change);
var inst_19951 = ((inst_19949) || (inst_19950));
var state_19988__$1 = (function (){var statearr_20010 = state_19988;
(statearr_20010[(14)] = inst_19947__$1);

(statearr_20010[(9)] = inst_19948__$1);

return statearr_20010;
})();
if(cljs.core.truth_(inst_19951)){
var statearr_20011_20065 = state_19988__$1;
(statearr_20011_20065[(1)] = (23));

} else {
var statearr_20012_20066 = state_19988__$1;
(statearr_20012_20066[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (36))){
var inst_19938 = (state_19988[(12)]);
var inst_19915 = inst_19938;
var state_19988__$1 = (function (){var statearr_20013 = state_19988;
(statearr_20013[(7)] = inst_19915);

return statearr_20013;
})();
var statearr_20014_20067 = state_19988__$1;
(statearr_20014_20067[(2)] = null);

(statearr_20014_20067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (29))){
var inst_19962 = (state_19988[(10)]);
var state_19988__$1 = state_19988;
var statearr_20015_20068 = state_19988__$1;
(statearr_20015_20068[(2)] = inst_19962);

(statearr_20015_20068[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (6))){
var state_19988__$1 = state_19988;
var statearr_20016_20069 = state_19988__$1;
(statearr_20016_20069[(2)] = false);

(statearr_20016_20069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (28))){
var inst_19958 = (state_19988[(2)]);
var inst_19959 = calc_state.call(null);
var inst_19915 = inst_19959;
var state_19988__$1 = (function (){var statearr_20017 = state_19988;
(statearr_20017[(15)] = inst_19958);

(statearr_20017[(7)] = inst_19915);

return statearr_20017;
})();
var statearr_20018_20070 = state_19988__$1;
(statearr_20018_20070[(2)] = null);

(statearr_20018_20070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (25))){
var inst_19984 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
var statearr_20019_20071 = state_19988__$1;
(statearr_20019_20071[(2)] = inst_19984);

(statearr_20019_20071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (34))){
var inst_19982 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
var statearr_20020_20072 = state_19988__$1;
(statearr_20020_20072[(2)] = inst_19982);

(statearr_20020_20072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (17))){
var state_19988__$1 = state_19988;
var statearr_20021_20073 = state_19988__$1;
(statearr_20021_20073[(2)] = false);

(statearr_20021_20073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (3))){
var state_19988__$1 = state_19988;
var statearr_20022_20074 = state_19988__$1;
(statearr_20022_20074[(2)] = false);

(statearr_20022_20074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (12))){
var inst_19986 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19988__$1,inst_19986);
} else {
if((state_val_19989 === (2))){
var inst_19890 = (state_19988[(8)]);
var inst_19895 = inst_19890.cljs$lang$protocol_mask$partition0$;
var inst_19896 = (inst_19895 & (64));
var inst_19897 = inst_19890.cljs$core$ISeq$;
var inst_19898 = (cljs.core.PROTOCOL_SENTINEL === inst_19897);
var inst_19899 = ((inst_19896) || (inst_19898));
var state_19988__$1 = state_19988;
if(cljs.core.truth_(inst_19899)){
var statearr_20023_20075 = state_19988__$1;
(statearr_20023_20075[(1)] = (5));

} else {
var statearr_20024_20076 = state_19988__$1;
(statearr_20024_20076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (23))){
var inst_19947 = (state_19988[(14)]);
var inst_19953 = (inst_19947 == null);
var state_19988__$1 = state_19988;
if(cljs.core.truth_(inst_19953)){
var statearr_20025_20077 = state_19988__$1;
(statearr_20025_20077[(1)] = (26));

} else {
var statearr_20026_20078 = state_19988__$1;
(statearr_20026_20078[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (35))){
var inst_19973 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
if(cljs.core.truth_(inst_19973)){
var statearr_20027_20079 = state_19988__$1;
(statearr_20027_20079[(1)] = (36));

} else {
var statearr_20028_20080 = state_19988__$1;
(statearr_20028_20080[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (19))){
var inst_19915 = (state_19988[(7)]);
var inst_19935 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19915);
var state_19988__$1 = state_19988;
var statearr_20029_20081 = state_19988__$1;
(statearr_20029_20081[(2)] = inst_19935);

(statearr_20029_20081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (11))){
var inst_19915 = (state_19988[(7)]);
var inst_19919 = (inst_19915 == null);
var inst_19920 = cljs.core.not.call(null,inst_19919);
var state_19988__$1 = state_19988;
if(inst_19920){
var statearr_20030_20082 = state_19988__$1;
(statearr_20030_20082[(1)] = (13));

} else {
var statearr_20031_20083 = state_19988__$1;
(statearr_20031_20083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (9))){
var inst_19890 = (state_19988[(8)]);
var state_19988__$1 = state_19988;
var statearr_20032_20084 = state_19988__$1;
(statearr_20032_20084[(2)] = inst_19890);

(statearr_20032_20084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (5))){
var state_19988__$1 = state_19988;
var statearr_20033_20085 = state_19988__$1;
(statearr_20033_20085[(2)] = true);

(statearr_20033_20085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (14))){
var state_19988__$1 = state_19988;
var statearr_20034_20086 = state_19988__$1;
(statearr_20034_20086[(2)] = false);

(statearr_20034_20086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (26))){
var inst_19948 = (state_19988[(9)]);
var inst_19955 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19948);
var state_19988__$1 = state_19988;
var statearr_20035_20087 = state_19988__$1;
(statearr_20035_20087[(2)] = inst_19955);

(statearr_20035_20087[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (16))){
var state_19988__$1 = state_19988;
var statearr_20036_20088 = state_19988__$1;
(statearr_20036_20088[(2)] = true);

(statearr_20036_20088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (38))){
var inst_19978 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
var statearr_20037_20089 = state_19988__$1;
(statearr_20037_20089[(2)] = inst_19978);

(statearr_20037_20089[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (30))){
var inst_19948 = (state_19988[(9)]);
var inst_19940 = (state_19988[(13)]);
var inst_19939 = (state_19988[(11)]);
var inst_19965 = cljs.core.empty_QMARK_.call(null,inst_19939);
var inst_19966 = inst_19940.call(null,inst_19948);
var inst_19967 = cljs.core.not.call(null,inst_19966);
var inst_19968 = ((inst_19965) && (inst_19967));
var state_19988__$1 = state_19988;
var statearr_20038_20090 = state_19988__$1;
(statearr_20038_20090[(2)] = inst_19968);

(statearr_20038_20090[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (10))){
var inst_19890 = (state_19988[(8)]);
var inst_19911 = (state_19988[(2)]);
var inst_19912 = cljs.core.get.call(null,inst_19911,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19913 = cljs.core.get.call(null,inst_19911,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19914 = cljs.core.get.call(null,inst_19911,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19915 = inst_19890;
var state_19988__$1 = (function (){var statearr_20039 = state_19988;
(statearr_20039[(16)] = inst_19912);

(statearr_20039[(17)] = inst_19913);

(statearr_20039[(18)] = inst_19914);

(statearr_20039[(7)] = inst_19915);

return statearr_20039;
})();
var statearr_20040_20091 = state_19988__$1;
(statearr_20040_20091[(2)] = null);

(statearr_20040_20091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (18))){
var inst_19930 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
var statearr_20041_20092 = state_19988__$1;
(statearr_20041_20092[(2)] = inst_19930);

(statearr_20041_20092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (37))){
var state_19988__$1 = state_19988;
var statearr_20042_20093 = state_19988__$1;
(statearr_20042_20093[(2)] = null);

(statearr_20042_20093[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (8))){
var inst_19890 = (state_19988[(8)]);
var inst_19908 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19890);
var state_19988__$1 = state_19988;
var statearr_20043_20094 = state_19988__$1;
(statearr_20043_20094[(2)] = inst_19908);

(statearr_20043_20094[(1)] = (10));


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
});})(c__17125__auto___20048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16968__auto__,c__17125__auto___20048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16969__auto__ = null;
var cljs$core$async$mix_$_state_machine__16969__auto____0 = (function (){
var statearr_20044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20044[(0)] = cljs$core$async$mix_$_state_machine__16969__auto__);

(statearr_20044[(1)] = (1));

return statearr_20044;
});
var cljs$core$async$mix_$_state_machine__16969__auto____1 = (function (state_19988){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_19988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e20045){if((e20045 instanceof Object)){
var ex__16972__auto__ = e20045;
var statearr_20046_20095 = state_19988;
(statearr_20046_20095[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20096 = state_19988;
state_19988 = G__20096;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16969__auto__ = function(state_19988){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16969__auto____1.call(this,state_19988);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16969__auto____0;
cljs$core$async$mix_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16969__auto____1;
return cljs$core$async$mix_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___20048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17127__auto__ = (function (){var statearr_20047 = f__17126__auto__.call(null);
(statearr_20047[(6)] = c__17125__auto___20048);

return statearr_20047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___20048,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__20098 = arguments.length;
switch (G__20098) {
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
var G__20102 = arguments.length;
switch (G__20102) {
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
return (function (p1__20100_SHARP_){
if(cljs.core.truth_(p1__20100_SHARP_.call(null,topic))){
return p1__20100_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20100_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20103 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20104){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20104 = meta20104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20105,meta20104__$1){
var self__ = this;
var _20105__$1 = this;
return (new cljs.core.async.t_cljs$core$async20103(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20104__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20105){
var self__ = this;
var _20105__$1 = this;
return self__.meta20104;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20103.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20104","meta20104",-653116355,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20103";

cljs.core.async.t_cljs$core$async20103.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async20103");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20103.
 */
cljs.core.async.__GT_t_cljs$core$async20103 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20103(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20104){
return (new cljs.core.async.t_cljs$core$async20103(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20104));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20103(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17125__auto___20223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___20223,mults,ensure_mult,p){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___20223,mults,ensure_mult,p){
return (function (state_20177){
var state_val_20178 = (state_20177[(1)]);
if((state_val_20178 === (7))){
var inst_20173 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
var statearr_20179_20224 = state_20177__$1;
(statearr_20179_20224[(2)] = inst_20173);

(statearr_20179_20224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (20))){
var state_20177__$1 = state_20177;
var statearr_20180_20225 = state_20177__$1;
(statearr_20180_20225[(2)] = null);

(statearr_20180_20225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (1))){
var state_20177__$1 = state_20177;
var statearr_20181_20226 = state_20177__$1;
(statearr_20181_20226[(2)] = null);

(statearr_20181_20226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (24))){
var inst_20156 = (state_20177[(7)]);
var inst_20165 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20156);
var state_20177__$1 = state_20177;
var statearr_20182_20227 = state_20177__$1;
(statearr_20182_20227[(2)] = inst_20165);

(statearr_20182_20227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (4))){
var inst_20108 = (state_20177[(8)]);
var inst_20108__$1 = (state_20177[(2)]);
var inst_20109 = (inst_20108__$1 == null);
var state_20177__$1 = (function (){var statearr_20183 = state_20177;
(statearr_20183[(8)] = inst_20108__$1);

return statearr_20183;
})();
if(cljs.core.truth_(inst_20109)){
var statearr_20184_20228 = state_20177__$1;
(statearr_20184_20228[(1)] = (5));

} else {
var statearr_20185_20229 = state_20177__$1;
(statearr_20185_20229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (15))){
var inst_20150 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
var statearr_20186_20230 = state_20177__$1;
(statearr_20186_20230[(2)] = inst_20150);

(statearr_20186_20230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (21))){
var inst_20170 = (state_20177[(2)]);
var state_20177__$1 = (function (){var statearr_20187 = state_20177;
(statearr_20187[(9)] = inst_20170);

return statearr_20187;
})();
var statearr_20188_20231 = state_20177__$1;
(statearr_20188_20231[(2)] = null);

(statearr_20188_20231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (13))){
var inst_20132 = (state_20177[(10)]);
var inst_20134 = cljs.core.chunked_seq_QMARK_.call(null,inst_20132);
var state_20177__$1 = state_20177;
if(inst_20134){
var statearr_20189_20232 = state_20177__$1;
(statearr_20189_20232[(1)] = (16));

} else {
var statearr_20190_20233 = state_20177__$1;
(statearr_20190_20233[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (22))){
var inst_20162 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
if(cljs.core.truth_(inst_20162)){
var statearr_20191_20234 = state_20177__$1;
(statearr_20191_20234[(1)] = (23));

} else {
var statearr_20192_20235 = state_20177__$1;
(statearr_20192_20235[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (6))){
var inst_20156 = (state_20177[(7)]);
var inst_20158 = (state_20177[(11)]);
var inst_20108 = (state_20177[(8)]);
var inst_20156__$1 = topic_fn.call(null,inst_20108);
var inst_20157 = cljs.core.deref.call(null,mults);
var inst_20158__$1 = cljs.core.get.call(null,inst_20157,inst_20156__$1);
var state_20177__$1 = (function (){var statearr_20193 = state_20177;
(statearr_20193[(7)] = inst_20156__$1);

(statearr_20193[(11)] = inst_20158__$1);

return statearr_20193;
})();
if(cljs.core.truth_(inst_20158__$1)){
var statearr_20194_20236 = state_20177__$1;
(statearr_20194_20236[(1)] = (19));

} else {
var statearr_20195_20237 = state_20177__$1;
(statearr_20195_20237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (25))){
var inst_20167 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
var statearr_20196_20238 = state_20177__$1;
(statearr_20196_20238[(2)] = inst_20167);

(statearr_20196_20238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (17))){
var inst_20132 = (state_20177[(10)]);
var inst_20141 = cljs.core.first.call(null,inst_20132);
var inst_20142 = cljs.core.async.muxch_STAR_.call(null,inst_20141);
var inst_20143 = cljs.core.async.close_BANG_.call(null,inst_20142);
var inst_20144 = cljs.core.next.call(null,inst_20132);
var inst_20118 = inst_20144;
var inst_20119 = null;
var inst_20120 = (0);
var inst_20121 = (0);
var state_20177__$1 = (function (){var statearr_20197 = state_20177;
(statearr_20197[(12)] = inst_20118);

(statearr_20197[(13)] = inst_20143);

(statearr_20197[(14)] = inst_20119);

(statearr_20197[(15)] = inst_20121);

(statearr_20197[(16)] = inst_20120);

return statearr_20197;
})();
var statearr_20198_20239 = state_20177__$1;
(statearr_20198_20239[(2)] = null);

(statearr_20198_20239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (3))){
var inst_20175 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20177__$1,inst_20175);
} else {
if((state_val_20178 === (12))){
var inst_20152 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
var statearr_20199_20240 = state_20177__$1;
(statearr_20199_20240[(2)] = inst_20152);

(statearr_20199_20240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (2))){
var state_20177__$1 = state_20177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20177__$1,(4),ch);
} else {
if((state_val_20178 === (23))){
var state_20177__$1 = state_20177;
var statearr_20200_20241 = state_20177__$1;
(statearr_20200_20241[(2)] = null);

(statearr_20200_20241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (19))){
var inst_20158 = (state_20177[(11)]);
var inst_20108 = (state_20177[(8)]);
var inst_20160 = cljs.core.async.muxch_STAR_.call(null,inst_20158);
var state_20177__$1 = state_20177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20177__$1,(22),inst_20160,inst_20108);
} else {
if((state_val_20178 === (11))){
var inst_20118 = (state_20177[(12)]);
var inst_20132 = (state_20177[(10)]);
var inst_20132__$1 = cljs.core.seq.call(null,inst_20118);
var state_20177__$1 = (function (){var statearr_20201 = state_20177;
(statearr_20201[(10)] = inst_20132__$1);

return statearr_20201;
})();
if(inst_20132__$1){
var statearr_20202_20242 = state_20177__$1;
(statearr_20202_20242[(1)] = (13));

} else {
var statearr_20203_20243 = state_20177__$1;
(statearr_20203_20243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (9))){
var inst_20154 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
var statearr_20204_20244 = state_20177__$1;
(statearr_20204_20244[(2)] = inst_20154);

(statearr_20204_20244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (5))){
var inst_20115 = cljs.core.deref.call(null,mults);
var inst_20116 = cljs.core.vals.call(null,inst_20115);
var inst_20117 = cljs.core.seq.call(null,inst_20116);
var inst_20118 = inst_20117;
var inst_20119 = null;
var inst_20120 = (0);
var inst_20121 = (0);
var state_20177__$1 = (function (){var statearr_20205 = state_20177;
(statearr_20205[(12)] = inst_20118);

(statearr_20205[(14)] = inst_20119);

(statearr_20205[(15)] = inst_20121);

(statearr_20205[(16)] = inst_20120);

return statearr_20205;
})();
var statearr_20206_20245 = state_20177__$1;
(statearr_20206_20245[(2)] = null);

(statearr_20206_20245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (14))){
var state_20177__$1 = state_20177;
var statearr_20210_20246 = state_20177__$1;
(statearr_20210_20246[(2)] = null);

(statearr_20210_20246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (16))){
var inst_20132 = (state_20177[(10)]);
var inst_20136 = cljs.core.chunk_first.call(null,inst_20132);
var inst_20137 = cljs.core.chunk_rest.call(null,inst_20132);
var inst_20138 = cljs.core.count.call(null,inst_20136);
var inst_20118 = inst_20137;
var inst_20119 = inst_20136;
var inst_20120 = inst_20138;
var inst_20121 = (0);
var state_20177__$1 = (function (){var statearr_20211 = state_20177;
(statearr_20211[(12)] = inst_20118);

(statearr_20211[(14)] = inst_20119);

(statearr_20211[(15)] = inst_20121);

(statearr_20211[(16)] = inst_20120);

return statearr_20211;
})();
var statearr_20212_20247 = state_20177__$1;
(statearr_20212_20247[(2)] = null);

(statearr_20212_20247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (10))){
var inst_20118 = (state_20177[(12)]);
var inst_20119 = (state_20177[(14)]);
var inst_20121 = (state_20177[(15)]);
var inst_20120 = (state_20177[(16)]);
var inst_20126 = cljs.core._nth.call(null,inst_20119,inst_20121);
var inst_20127 = cljs.core.async.muxch_STAR_.call(null,inst_20126);
var inst_20128 = cljs.core.async.close_BANG_.call(null,inst_20127);
var inst_20129 = (inst_20121 + (1));
var tmp20207 = inst_20118;
var tmp20208 = inst_20119;
var tmp20209 = inst_20120;
var inst_20118__$1 = tmp20207;
var inst_20119__$1 = tmp20208;
var inst_20120__$1 = tmp20209;
var inst_20121__$1 = inst_20129;
var state_20177__$1 = (function (){var statearr_20213 = state_20177;
(statearr_20213[(12)] = inst_20118__$1);

(statearr_20213[(17)] = inst_20128);

(statearr_20213[(14)] = inst_20119__$1);

(statearr_20213[(15)] = inst_20121__$1);

(statearr_20213[(16)] = inst_20120__$1);

return statearr_20213;
})();
var statearr_20214_20248 = state_20177__$1;
(statearr_20214_20248[(2)] = null);

(statearr_20214_20248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (18))){
var inst_20147 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
var statearr_20215_20249 = state_20177__$1;
(statearr_20215_20249[(2)] = inst_20147);

(statearr_20215_20249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20178 === (8))){
var inst_20121 = (state_20177[(15)]);
var inst_20120 = (state_20177[(16)]);
var inst_20123 = (inst_20121 < inst_20120);
var inst_20124 = inst_20123;
var state_20177__$1 = state_20177;
if(cljs.core.truth_(inst_20124)){
var statearr_20216_20250 = state_20177__$1;
(statearr_20216_20250[(1)] = (10));

} else {
var statearr_20217_20251 = state_20177__$1;
(statearr_20217_20251[(1)] = (11));

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
});})(c__17125__auto___20223,mults,ensure_mult,p))
;
return ((function (switch__16968__auto__,c__17125__auto___20223,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16969__auto__ = null;
var cljs$core$async$state_machine__16969__auto____0 = (function (){
var statearr_20218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20218[(0)] = cljs$core$async$state_machine__16969__auto__);

(statearr_20218[(1)] = (1));

return statearr_20218;
});
var cljs$core$async$state_machine__16969__auto____1 = (function (state_20177){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_20177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e20219){if((e20219 instanceof Object)){
var ex__16972__auto__ = e20219;
var statearr_20220_20252 = state_20177;
(statearr_20220_20252[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20253 = state_20177;
state_20177 = G__20253;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$state_machine__16969__auto__ = function(state_20177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16969__auto____1.call(this,state_20177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16969__auto____0;
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16969__auto____1;
return cljs$core$async$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___20223,mults,ensure_mult,p))
})();
var state__17127__auto__ = (function (){var statearr_20221 = f__17126__auto__.call(null);
(statearr_20221[(6)] = c__17125__auto___20223);

return statearr_20221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___20223,mults,ensure_mult,p))
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
var G__20255 = arguments.length;
switch (G__20255) {
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
var G__20258 = arguments.length;
switch (G__20258) {
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
var G__20261 = arguments.length;
switch (G__20261) {
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
var c__17125__auto___20328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___20328,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___20328,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20300){
var state_val_20301 = (state_20300[(1)]);
if((state_val_20301 === (7))){
var state_20300__$1 = state_20300;
var statearr_20302_20329 = state_20300__$1;
(statearr_20302_20329[(2)] = null);

(statearr_20302_20329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (1))){
var state_20300__$1 = state_20300;
var statearr_20303_20330 = state_20300__$1;
(statearr_20303_20330[(2)] = null);

(statearr_20303_20330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (4))){
var inst_20264 = (state_20300[(7)]);
var inst_20266 = (inst_20264 < cnt);
var state_20300__$1 = state_20300;
if(cljs.core.truth_(inst_20266)){
var statearr_20304_20331 = state_20300__$1;
(statearr_20304_20331[(1)] = (6));

} else {
var statearr_20305_20332 = state_20300__$1;
(statearr_20305_20332[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (15))){
var inst_20296 = (state_20300[(2)]);
var state_20300__$1 = state_20300;
var statearr_20306_20333 = state_20300__$1;
(statearr_20306_20333[(2)] = inst_20296);

(statearr_20306_20333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (13))){
var inst_20289 = cljs.core.async.close_BANG_.call(null,out);
var state_20300__$1 = state_20300;
var statearr_20307_20334 = state_20300__$1;
(statearr_20307_20334[(2)] = inst_20289);

(statearr_20307_20334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (6))){
var state_20300__$1 = state_20300;
var statearr_20308_20335 = state_20300__$1;
(statearr_20308_20335[(2)] = null);

(statearr_20308_20335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (3))){
var inst_20298 = (state_20300[(2)]);
var state_20300__$1 = state_20300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20300__$1,inst_20298);
} else {
if((state_val_20301 === (12))){
var inst_20286 = (state_20300[(8)]);
var inst_20286__$1 = (state_20300[(2)]);
var inst_20287 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20286__$1);
var state_20300__$1 = (function (){var statearr_20309 = state_20300;
(statearr_20309[(8)] = inst_20286__$1);

return statearr_20309;
})();
if(cljs.core.truth_(inst_20287)){
var statearr_20310_20336 = state_20300__$1;
(statearr_20310_20336[(1)] = (13));

} else {
var statearr_20311_20337 = state_20300__$1;
(statearr_20311_20337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (2))){
var inst_20263 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20264 = (0);
var state_20300__$1 = (function (){var statearr_20312 = state_20300;
(statearr_20312[(9)] = inst_20263);

(statearr_20312[(7)] = inst_20264);

return statearr_20312;
})();
var statearr_20313_20338 = state_20300__$1;
(statearr_20313_20338[(2)] = null);

(statearr_20313_20338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (11))){
var inst_20264 = (state_20300[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20300,(10),Object,null,(9));
var inst_20273 = chs__$1.call(null,inst_20264);
var inst_20274 = done.call(null,inst_20264);
var inst_20275 = cljs.core.async.take_BANG_.call(null,inst_20273,inst_20274);
var state_20300__$1 = state_20300;
var statearr_20314_20339 = state_20300__$1;
(statearr_20314_20339[(2)] = inst_20275);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (9))){
var inst_20264 = (state_20300[(7)]);
var inst_20277 = (state_20300[(2)]);
var inst_20278 = (inst_20264 + (1));
var inst_20264__$1 = inst_20278;
var state_20300__$1 = (function (){var statearr_20315 = state_20300;
(statearr_20315[(7)] = inst_20264__$1);

(statearr_20315[(10)] = inst_20277);

return statearr_20315;
})();
var statearr_20316_20340 = state_20300__$1;
(statearr_20316_20340[(2)] = null);

(statearr_20316_20340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (5))){
var inst_20284 = (state_20300[(2)]);
var state_20300__$1 = (function (){var statearr_20317 = state_20300;
(statearr_20317[(11)] = inst_20284);

return statearr_20317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20300__$1,(12),dchan);
} else {
if((state_val_20301 === (14))){
var inst_20286 = (state_20300[(8)]);
var inst_20291 = cljs.core.apply.call(null,f,inst_20286);
var state_20300__$1 = state_20300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20300__$1,(16),out,inst_20291);
} else {
if((state_val_20301 === (16))){
var inst_20293 = (state_20300[(2)]);
var state_20300__$1 = (function (){var statearr_20318 = state_20300;
(statearr_20318[(12)] = inst_20293);

return statearr_20318;
})();
var statearr_20319_20341 = state_20300__$1;
(statearr_20319_20341[(2)] = null);

(statearr_20319_20341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (10))){
var inst_20268 = (state_20300[(2)]);
var inst_20269 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20300__$1 = (function (){var statearr_20320 = state_20300;
(statearr_20320[(13)] = inst_20268);

return statearr_20320;
})();
var statearr_20321_20342 = state_20300__$1;
(statearr_20321_20342[(2)] = inst_20269);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20301 === (8))){
var inst_20282 = (state_20300[(2)]);
var state_20300__$1 = state_20300;
var statearr_20322_20343 = state_20300__$1;
(statearr_20322_20343[(2)] = inst_20282);

(statearr_20322_20343[(1)] = (5));


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
});})(c__17125__auto___20328,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16968__auto__,c__17125__auto___20328,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16969__auto__ = null;
var cljs$core$async$state_machine__16969__auto____0 = (function (){
var statearr_20323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20323[(0)] = cljs$core$async$state_machine__16969__auto__);

(statearr_20323[(1)] = (1));

return statearr_20323;
});
var cljs$core$async$state_machine__16969__auto____1 = (function (state_20300){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_20300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e20324){if((e20324 instanceof Object)){
var ex__16972__auto__ = e20324;
var statearr_20325_20344 = state_20300;
(statearr_20325_20344[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20345 = state_20300;
state_20300 = G__20345;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$state_machine__16969__auto__ = function(state_20300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16969__auto____1.call(this,state_20300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16969__auto____0;
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16969__auto____1;
return cljs$core$async$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___20328,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17127__auto__ = (function (){var statearr_20326 = f__17126__auto__.call(null);
(statearr_20326[(6)] = c__17125__auto___20328);

return statearr_20326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___20328,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__20348 = arguments.length;
switch (G__20348) {
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
var c__17125__auto___20402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___20402,out){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___20402,out){
return (function (state_20380){
var state_val_20381 = (state_20380[(1)]);
if((state_val_20381 === (7))){
var inst_20359 = (state_20380[(7)]);
var inst_20360 = (state_20380[(8)]);
var inst_20359__$1 = (state_20380[(2)]);
var inst_20360__$1 = cljs.core.nth.call(null,inst_20359__$1,(0),null);
var inst_20361 = cljs.core.nth.call(null,inst_20359__$1,(1),null);
var inst_20362 = (inst_20360__$1 == null);
var state_20380__$1 = (function (){var statearr_20382 = state_20380;
(statearr_20382[(7)] = inst_20359__$1);

(statearr_20382[(8)] = inst_20360__$1);

(statearr_20382[(9)] = inst_20361);

return statearr_20382;
})();
if(cljs.core.truth_(inst_20362)){
var statearr_20383_20403 = state_20380__$1;
(statearr_20383_20403[(1)] = (8));

} else {
var statearr_20384_20404 = state_20380__$1;
(statearr_20384_20404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (1))){
var inst_20349 = cljs.core.vec.call(null,chs);
var inst_20350 = inst_20349;
var state_20380__$1 = (function (){var statearr_20385 = state_20380;
(statearr_20385[(10)] = inst_20350);

return statearr_20385;
})();
var statearr_20386_20405 = state_20380__$1;
(statearr_20386_20405[(2)] = null);

(statearr_20386_20405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (4))){
var inst_20350 = (state_20380[(10)]);
var state_20380__$1 = state_20380;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20380__$1,(7),inst_20350);
} else {
if((state_val_20381 === (6))){
var inst_20376 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20387_20406 = state_20380__$1;
(statearr_20387_20406[(2)] = inst_20376);

(statearr_20387_20406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (3))){
var inst_20378 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20380__$1,inst_20378);
} else {
if((state_val_20381 === (2))){
var inst_20350 = (state_20380[(10)]);
var inst_20352 = cljs.core.count.call(null,inst_20350);
var inst_20353 = (inst_20352 > (0));
var state_20380__$1 = state_20380;
if(cljs.core.truth_(inst_20353)){
var statearr_20389_20407 = state_20380__$1;
(statearr_20389_20407[(1)] = (4));

} else {
var statearr_20390_20408 = state_20380__$1;
(statearr_20390_20408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (11))){
var inst_20350 = (state_20380[(10)]);
var inst_20369 = (state_20380[(2)]);
var tmp20388 = inst_20350;
var inst_20350__$1 = tmp20388;
var state_20380__$1 = (function (){var statearr_20391 = state_20380;
(statearr_20391[(10)] = inst_20350__$1);

(statearr_20391[(11)] = inst_20369);

return statearr_20391;
})();
var statearr_20392_20409 = state_20380__$1;
(statearr_20392_20409[(2)] = null);

(statearr_20392_20409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (9))){
var inst_20360 = (state_20380[(8)]);
var state_20380__$1 = state_20380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20380__$1,(11),out,inst_20360);
} else {
if((state_val_20381 === (5))){
var inst_20374 = cljs.core.async.close_BANG_.call(null,out);
var state_20380__$1 = state_20380;
var statearr_20393_20410 = state_20380__$1;
(statearr_20393_20410[(2)] = inst_20374);

(statearr_20393_20410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (10))){
var inst_20372 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20394_20411 = state_20380__$1;
(statearr_20394_20411[(2)] = inst_20372);

(statearr_20394_20411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (8))){
var inst_20350 = (state_20380[(10)]);
var inst_20359 = (state_20380[(7)]);
var inst_20360 = (state_20380[(8)]);
var inst_20361 = (state_20380[(9)]);
var inst_20364 = (function (){var cs = inst_20350;
var vec__20355 = inst_20359;
var v = inst_20360;
var c = inst_20361;
return ((function (cs,vec__20355,v,c,inst_20350,inst_20359,inst_20360,inst_20361,state_val_20381,c__17125__auto___20402,out){
return (function (p1__20346_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20346_SHARP_);
});
;})(cs,vec__20355,v,c,inst_20350,inst_20359,inst_20360,inst_20361,state_val_20381,c__17125__auto___20402,out))
})();
var inst_20365 = cljs.core.filterv.call(null,inst_20364,inst_20350);
var inst_20350__$1 = inst_20365;
var state_20380__$1 = (function (){var statearr_20395 = state_20380;
(statearr_20395[(10)] = inst_20350__$1);

return statearr_20395;
})();
var statearr_20396_20412 = state_20380__$1;
(statearr_20396_20412[(2)] = null);

(statearr_20396_20412[(1)] = (2));


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
});})(c__17125__auto___20402,out))
;
return ((function (switch__16968__auto__,c__17125__auto___20402,out){
return (function() {
var cljs$core$async$state_machine__16969__auto__ = null;
var cljs$core$async$state_machine__16969__auto____0 = (function (){
var statearr_20397 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20397[(0)] = cljs$core$async$state_machine__16969__auto__);

(statearr_20397[(1)] = (1));

return statearr_20397;
});
var cljs$core$async$state_machine__16969__auto____1 = (function (state_20380){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_20380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e20398){if((e20398 instanceof Object)){
var ex__16972__auto__ = e20398;
var statearr_20399_20413 = state_20380;
(statearr_20399_20413[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20414 = state_20380;
state_20380 = G__20414;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$state_machine__16969__auto__ = function(state_20380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16969__auto____1.call(this,state_20380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16969__auto____0;
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16969__auto____1;
return cljs$core$async$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___20402,out))
})();
var state__17127__auto__ = (function (){var statearr_20400 = f__17126__auto__.call(null);
(statearr_20400[(6)] = c__17125__auto___20402);

return statearr_20400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___20402,out))
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
var G__20416 = arguments.length;
switch (G__20416) {
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
var c__17125__auto___20461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___20461,out){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___20461,out){
return (function (state_20440){
var state_val_20441 = (state_20440[(1)]);
if((state_val_20441 === (7))){
var inst_20422 = (state_20440[(7)]);
var inst_20422__$1 = (state_20440[(2)]);
var inst_20423 = (inst_20422__$1 == null);
var inst_20424 = cljs.core.not.call(null,inst_20423);
var state_20440__$1 = (function (){var statearr_20442 = state_20440;
(statearr_20442[(7)] = inst_20422__$1);

return statearr_20442;
})();
if(inst_20424){
var statearr_20443_20462 = state_20440__$1;
(statearr_20443_20462[(1)] = (8));

} else {
var statearr_20444_20463 = state_20440__$1;
(statearr_20444_20463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (1))){
var inst_20417 = (0);
var state_20440__$1 = (function (){var statearr_20445 = state_20440;
(statearr_20445[(8)] = inst_20417);

return statearr_20445;
})();
var statearr_20446_20464 = state_20440__$1;
(statearr_20446_20464[(2)] = null);

(statearr_20446_20464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (4))){
var state_20440__$1 = state_20440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20440__$1,(7),ch);
} else {
if((state_val_20441 === (6))){
var inst_20435 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
var statearr_20447_20465 = state_20440__$1;
(statearr_20447_20465[(2)] = inst_20435);

(statearr_20447_20465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (3))){
var inst_20437 = (state_20440[(2)]);
var inst_20438 = cljs.core.async.close_BANG_.call(null,out);
var state_20440__$1 = (function (){var statearr_20448 = state_20440;
(statearr_20448[(9)] = inst_20437);

return statearr_20448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20440__$1,inst_20438);
} else {
if((state_val_20441 === (2))){
var inst_20417 = (state_20440[(8)]);
var inst_20419 = (inst_20417 < n);
var state_20440__$1 = state_20440;
if(cljs.core.truth_(inst_20419)){
var statearr_20449_20466 = state_20440__$1;
(statearr_20449_20466[(1)] = (4));

} else {
var statearr_20450_20467 = state_20440__$1;
(statearr_20450_20467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (11))){
var inst_20417 = (state_20440[(8)]);
var inst_20427 = (state_20440[(2)]);
var inst_20428 = (inst_20417 + (1));
var inst_20417__$1 = inst_20428;
var state_20440__$1 = (function (){var statearr_20451 = state_20440;
(statearr_20451[(8)] = inst_20417__$1);

(statearr_20451[(10)] = inst_20427);

return statearr_20451;
})();
var statearr_20452_20468 = state_20440__$1;
(statearr_20452_20468[(2)] = null);

(statearr_20452_20468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (9))){
var state_20440__$1 = state_20440;
var statearr_20453_20469 = state_20440__$1;
(statearr_20453_20469[(2)] = null);

(statearr_20453_20469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (5))){
var state_20440__$1 = state_20440;
var statearr_20454_20470 = state_20440__$1;
(statearr_20454_20470[(2)] = null);

(statearr_20454_20470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (10))){
var inst_20432 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
var statearr_20455_20471 = state_20440__$1;
(statearr_20455_20471[(2)] = inst_20432);

(statearr_20455_20471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (8))){
var inst_20422 = (state_20440[(7)]);
var state_20440__$1 = state_20440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20440__$1,(11),out,inst_20422);
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
});})(c__17125__auto___20461,out))
;
return ((function (switch__16968__auto__,c__17125__auto___20461,out){
return (function() {
var cljs$core$async$state_machine__16969__auto__ = null;
var cljs$core$async$state_machine__16969__auto____0 = (function (){
var statearr_20456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20456[(0)] = cljs$core$async$state_machine__16969__auto__);

(statearr_20456[(1)] = (1));

return statearr_20456;
});
var cljs$core$async$state_machine__16969__auto____1 = (function (state_20440){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_20440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e20457){if((e20457 instanceof Object)){
var ex__16972__auto__ = e20457;
var statearr_20458_20472 = state_20440;
(statearr_20458_20472[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20473 = state_20440;
state_20440 = G__20473;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$state_machine__16969__auto__ = function(state_20440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16969__auto____1.call(this,state_20440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16969__auto____0;
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16969__auto____1;
return cljs$core$async$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___20461,out))
})();
var state__17127__auto__ = (function (){var statearr_20459 = f__17126__auto__.call(null);
(statearr_20459[(6)] = c__17125__auto___20461);

return statearr_20459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___20461,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20475 = (function (f,ch,meta20476){
this.f = f;
this.ch = ch;
this.meta20476 = meta20476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20477,meta20476__$1){
var self__ = this;
var _20477__$1 = this;
return (new cljs.core.async.t_cljs$core$async20475(self__.f,self__.ch,meta20476__$1));
});

cljs.core.async.t_cljs$core$async20475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20477){
var self__ = this;
var _20477__$1 = this;
return self__.meta20476;
});

cljs.core.async.t_cljs$core$async20475.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20475.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20475.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20478 = (function (f,ch,meta20476,_,fn1,meta20479){
this.f = f;
this.ch = ch;
this.meta20476 = meta20476;
this._ = _;
this.fn1 = fn1;
this.meta20479 = meta20479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20480,meta20479__$1){
var self__ = this;
var _20480__$1 = this;
return (new cljs.core.async.t_cljs$core$async20478(self__.f,self__.ch,self__.meta20476,self__._,self__.fn1,meta20479__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20480){
var self__ = this;
var _20480__$1 = this;
return self__.meta20479;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20474_SHARP_){
return f1.call(null,(((p1__20474_SHARP_ == null))?null:self__.f.call(null,p1__20474_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20478.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20476","meta20476",-1539649526,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20475","cljs.core.async/t_cljs$core$async20475",695198795,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20479","meta20479",1636752839,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20478";

cljs.core.async.t_cljs$core$async20478.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async20478");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20478.
 */
cljs.core.async.__GT_t_cljs$core$async20478 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20478(f__$1,ch__$1,meta20476__$1,___$2,fn1__$1,meta20479){
return (new cljs.core.async.t_cljs$core$async20478(f__$1,ch__$1,meta20476__$1,___$2,fn1__$1,meta20479));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20478(self__.f,self__.ch,self__.meta20476,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async20475.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20476","meta20476",-1539649526,null)], null);
});

cljs.core.async.t_cljs$core$async20475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20475";

cljs.core.async.t_cljs$core$async20475.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async20475");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20475.
 */
cljs.core.async.__GT_t_cljs$core$async20475 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20475(f__$1,ch__$1,meta20476){
return (new cljs.core.async.t_cljs$core$async20475(f__$1,ch__$1,meta20476));
});

}

return (new cljs.core.async.t_cljs$core$async20475(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20481 = (function (f,ch,meta20482){
this.f = f;
this.ch = ch;
this.meta20482 = meta20482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20483,meta20482__$1){
var self__ = this;
var _20483__$1 = this;
return (new cljs.core.async.t_cljs$core$async20481(self__.f,self__.ch,meta20482__$1));
});

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20483){
var self__ = this;
var _20483__$1 = this;
return self__.meta20482;
});

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20482","meta20482",-1396293193,null)], null);
});

cljs.core.async.t_cljs$core$async20481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20481";

cljs.core.async.t_cljs$core$async20481.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async20481");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20481.
 */
cljs.core.async.__GT_t_cljs$core$async20481 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20481(f__$1,ch__$1,meta20482){
return (new cljs.core.async.t_cljs$core$async20481(f__$1,ch__$1,meta20482));
});

}

return (new cljs.core.async.t_cljs$core$async20481(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20484 = (function (p,ch,meta20485){
this.p = p;
this.ch = ch;
this.meta20485 = meta20485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20486,meta20485__$1){
var self__ = this;
var _20486__$1 = this;
return (new cljs.core.async.t_cljs$core$async20484(self__.p,self__.ch,meta20485__$1));
});

cljs.core.async.t_cljs$core$async20484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20486){
var self__ = this;
var _20486__$1 = this;
return self__.meta20485;
});

cljs.core.async.t_cljs$core$async20484.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20484.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20484.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20484.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20485","meta20485",966536458,null)], null);
});

cljs.core.async.t_cljs$core$async20484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20484";

cljs.core.async.t_cljs$core$async20484.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async20484");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20484.
 */
cljs.core.async.__GT_t_cljs$core$async20484 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20484(p__$1,ch__$1,meta20485){
return (new cljs.core.async.t_cljs$core$async20484(p__$1,ch__$1,meta20485));
});

}

return (new cljs.core.async.t_cljs$core$async20484(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20488 = arguments.length;
switch (G__20488) {
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
var c__17125__auto___20528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___20528,out){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___20528,out){
return (function (state_20509){
var state_val_20510 = (state_20509[(1)]);
if((state_val_20510 === (7))){
var inst_20505 = (state_20509[(2)]);
var state_20509__$1 = state_20509;
var statearr_20511_20529 = state_20509__$1;
(statearr_20511_20529[(2)] = inst_20505);

(statearr_20511_20529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (1))){
var state_20509__$1 = state_20509;
var statearr_20512_20530 = state_20509__$1;
(statearr_20512_20530[(2)] = null);

(statearr_20512_20530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (4))){
var inst_20491 = (state_20509[(7)]);
var inst_20491__$1 = (state_20509[(2)]);
var inst_20492 = (inst_20491__$1 == null);
var state_20509__$1 = (function (){var statearr_20513 = state_20509;
(statearr_20513[(7)] = inst_20491__$1);

return statearr_20513;
})();
if(cljs.core.truth_(inst_20492)){
var statearr_20514_20531 = state_20509__$1;
(statearr_20514_20531[(1)] = (5));

} else {
var statearr_20515_20532 = state_20509__$1;
(statearr_20515_20532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (6))){
var inst_20491 = (state_20509[(7)]);
var inst_20496 = p.call(null,inst_20491);
var state_20509__$1 = state_20509;
if(cljs.core.truth_(inst_20496)){
var statearr_20516_20533 = state_20509__$1;
(statearr_20516_20533[(1)] = (8));

} else {
var statearr_20517_20534 = state_20509__$1;
(statearr_20517_20534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (3))){
var inst_20507 = (state_20509[(2)]);
var state_20509__$1 = state_20509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20509__$1,inst_20507);
} else {
if((state_val_20510 === (2))){
var state_20509__$1 = state_20509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20509__$1,(4),ch);
} else {
if((state_val_20510 === (11))){
var inst_20499 = (state_20509[(2)]);
var state_20509__$1 = state_20509;
var statearr_20518_20535 = state_20509__$1;
(statearr_20518_20535[(2)] = inst_20499);

(statearr_20518_20535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (9))){
var state_20509__$1 = state_20509;
var statearr_20519_20536 = state_20509__$1;
(statearr_20519_20536[(2)] = null);

(statearr_20519_20536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (5))){
var inst_20494 = cljs.core.async.close_BANG_.call(null,out);
var state_20509__$1 = state_20509;
var statearr_20520_20537 = state_20509__$1;
(statearr_20520_20537[(2)] = inst_20494);

(statearr_20520_20537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (10))){
var inst_20502 = (state_20509[(2)]);
var state_20509__$1 = (function (){var statearr_20521 = state_20509;
(statearr_20521[(8)] = inst_20502);

return statearr_20521;
})();
var statearr_20522_20538 = state_20509__$1;
(statearr_20522_20538[(2)] = null);

(statearr_20522_20538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (8))){
var inst_20491 = (state_20509[(7)]);
var state_20509__$1 = state_20509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20509__$1,(11),out,inst_20491);
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
});})(c__17125__auto___20528,out))
;
return ((function (switch__16968__auto__,c__17125__auto___20528,out){
return (function() {
var cljs$core$async$state_machine__16969__auto__ = null;
var cljs$core$async$state_machine__16969__auto____0 = (function (){
var statearr_20523 = [null,null,null,null,null,null,null,null,null];
(statearr_20523[(0)] = cljs$core$async$state_machine__16969__auto__);

(statearr_20523[(1)] = (1));

return statearr_20523;
});
var cljs$core$async$state_machine__16969__auto____1 = (function (state_20509){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_20509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e20524){if((e20524 instanceof Object)){
var ex__16972__auto__ = e20524;
var statearr_20525_20539 = state_20509;
(statearr_20525_20539[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20540 = state_20509;
state_20509 = G__20540;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$state_machine__16969__auto__ = function(state_20509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16969__auto____1.call(this,state_20509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16969__auto____0;
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16969__auto____1;
return cljs$core$async$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___20528,out))
})();
var state__17127__auto__ = (function (){var statearr_20526 = f__17126__auto__.call(null);
(statearr_20526[(6)] = c__17125__auto___20528);

return statearr_20526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___20528,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20542 = arguments.length;
switch (G__20542) {
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
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_20605){
var state_val_20606 = (state_20605[(1)]);
if((state_val_20606 === (7))){
var inst_20601 = (state_20605[(2)]);
var state_20605__$1 = state_20605;
var statearr_20607_20645 = state_20605__$1;
(statearr_20607_20645[(2)] = inst_20601);

(statearr_20607_20645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (20))){
var inst_20571 = (state_20605[(7)]);
var inst_20582 = (state_20605[(2)]);
var inst_20583 = cljs.core.next.call(null,inst_20571);
var inst_20557 = inst_20583;
var inst_20558 = null;
var inst_20559 = (0);
var inst_20560 = (0);
var state_20605__$1 = (function (){var statearr_20608 = state_20605;
(statearr_20608[(8)] = inst_20560);

(statearr_20608[(9)] = inst_20582);

(statearr_20608[(10)] = inst_20558);

(statearr_20608[(11)] = inst_20559);

(statearr_20608[(12)] = inst_20557);

return statearr_20608;
})();
var statearr_20609_20646 = state_20605__$1;
(statearr_20609_20646[(2)] = null);

(statearr_20609_20646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (1))){
var state_20605__$1 = state_20605;
var statearr_20610_20647 = state_20605__$1;
(statearr_20610_20647[(2)] = null);

(statearr_20610_20647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (4))){
var inst_20546 = (state_20605[(13)]);
var inst_20546__$1 = (state_20605[(2)]);
var inst_20547 = (inst_20546__$1 == null);
var state_20605__$1 = (function (){var statearr_20611 = state_20605;
(statearr_20611[(13)] = inst_20546__$1);

return statearr_20611;
})();
if(cljs.core.truth_(inst_20547)){
var statearr_20612_20648 = state_20605__$1;
(statearr_20612_20648[(1)] = (5));

} else {
var statearr_20613_20649 = state_20605__$1;
(statearr_20613_20649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (15))){
var state_20605__$1 = state_20605;
var statearr_20617_20650 = state_20605__$1;
(statearr_20617_20650[(2)] = null);

(statearr_20617_20650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (21))){
var state_20605__$1 = state_20605;
var statearr_20618_20651 = state_20605__$1;
(statearr_20618_20651[(2)] = null);

(statearr_20618_20651[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (13))){
var inst_20560 = (state_20605[(8)]);
var inst_20558 = (state_20605[(10)]);
var inst_20559 = (state_20605[(11)]);
var inst_20557 = (state_20605[(12)]);
var inst_20567 = (state_20605[(2)]);
var inst_20568 = (inst_20560 + (1));
var tmp20614 = inst_20558;
var tmp20615 = inst_20559;
var tmp20616 = inst_20557;
var inst_20557__$1 = tmp20616;
var inst_20558__$1 = tmp20614;
var inst_20559__$1 = tmp20615;
var inst_20560__$1 = inst_20568;
var state_20605__$1 = (function (){var statearr_20619 = state_20605;
(statearr_20619[(8)] = inst_20560__$1);

(statearr_20619[(14)] = inst_20567);

(statearr_20619[(10)] = inst_20558__$1);

(statearr_20619[(11)] = inst_20559__$1);

(statearr_20619[(12)] = inst_20557__$1);

return statearr_20619;
})();
var statearr_20620_20652 = state_20605__$1;
(statearr_20620_20652[(2)] = null);

(statearr_20620_20652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (22))){
var state_20605__$1 = state_20605;
var statearr_20621_20653 = state_20605__$1;
(statearr_20621_20653[(2)] = null);

(statearr_20621_20653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (6))){
var inst_20546 = (state_20605[(13)]);
var inst_20555 = f.call(null,inst_20546);
var inst_20556 = cljs.core.seq.call(null,inst_20555);
var inst_20557 = inst_20556;
var inst_20558 = null;
var inst_20559 = (0);
var inst_20560 = (0);
var state_20605__$1 = (function (){var statearr_20622 = state_20605;
(statearr_20622[(8)] = inst_20560);

(statearr_20622[(10)] = inst_20558);

(statearr_20622[(11)] = inst_20559);

(statearr_20622[(12)] = inst_20557);

return statearr_20622;
})();
var statearr_20623_20654 = state_20605__$1;
(statearr_20623_20654[(2)] = null);

(statearr_20623_20654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (17))){
var inst_20571 = (state_20605[(7)]);
var inst_20575 = cljs.core.chunk_first.call(null,inst_20571);
var inst_20576 = cljs.core.chunk_rest.call(null,inst_20571);
var inst_20577 = cljs.core.count.call(null,inst_20575);
var inst_20557 = inst_20576;
var inst_20558 = inst_20575;
var inst_20559 = inst_20577;
var inst_20560 = (0);
var state_20605__$1 = (function (){var statearr_20624 = state_20605;
(statearr_20624[(8)] = inst_20560);

(statearr_20624[(10)] = inst_20558);

(statearr_20624[(11)] = inst_20559);

(statearr_20624[(12)] = inst_20557);

return statearr_20624;
})();
var statearr_20625_20655 = state_20605__$1;
(statearr_20625_20655[(2)] = null);

(statearr_20625_20655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (3))){
var inst_20603 = (state_20605[(2)]);
var state_20605__$1 = state_20605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20605__$1,inst_20603);
} else {
if((state_val_20606 === (12))){
var inst_20591 = (state_20605[(2)]);
var state_20605__$1 = state_20605;
var statearr_20626_20656 = state_20605__$1;
(statearr_20626_20656[(2)] = inst_20591);

(statearr_20626_20656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (2))){
var state_20605__$1 = state_20605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20605__$1,(4),in$);
} else {
if((state_val_20606 === (23))){
var inst_20599 = (state_20605[(2)]);
var state_20605__$1 = state_20605;
var statearr_20627_20657 = state_20605__$1;
(statearr_20627_20657[(2)] = inst_20599);

(statearr_20627_20657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (19))){
var inst_20586 = (state_20605[(2)]);
var state_20605__$1 = state_20605;
var statearr_20628_20658 = state_20605__$1;
(statearr_20628_20658[(2)] = inst_20586);

(statearr_20628_20658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (11))){
var inst_20571 = (state_20605[(7)]);
var inst_20557 = (state_20605[(12)]);
var inst_20571__$1 = cljs.core.seq.call(null,inst_20557);
var state_20605__$1 = (function (){var statearr_20629 = state_20605;
(statearr_20629[(7)] = inst_20571__$1);

return statearr_20629;
})();
if(inst_20571__$1){
var statearr_20630_20659 = state_20605__$1;
(statearr_20630_20659[(1)] = (14));

} else {
var statearr_20631_20660 = state_20605__$1;
(statearr_20631_20660[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (9))){
var inst_20593 = (state_20605[(2)]);
var inst_20594 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20605__$1 = (function (){var statearr_20632 = state_20605;
(statearr_20632[(15)] = inst_20593);

return statearr_20632;
})();
if(cljs.core.truth_(inst_20594)){
var statearr_20633_20661 = state_20605__$1;
(statearr_20633_20661[(1)] = (21));

} else {
var statearr_20634_20662 = state_20605__$1;
(statearr_20634_20662[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (5))){
var inst_20549 = cljs.core.async.close_BANG_.call(null,out);
var state_20605__$1 = state_20605;
var statearr_20635_20663 = state_20605__$1;
(statearr_20635_20663[(2)] = inst_20549);

(statearr_20635_20663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (14))){
var inst_20571 = (state_20605[(7)]);
var inst_20573 = cljs.core.chunked_seq_QMARK_.call(null,inst_20571);
var state_20605__$1 = state_20605;
if(inst_20573){
var statearr_20636_20664 = state_20605__$1;
(statearr_20636_20664[(1)] = (17));

} else {
var statearr_20637_20665 = state_20605__$1;
(statearr_20637_20665[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (16))){
var inst_20589 = (state_20605[(2)]);
var state_20605__$1 = state_20605;
var statearr_20638_20666 = state_20605__$1;
(statearr_20638_20666[(2)] = inst_20589);

(statearr_20638_20666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20606 === (10))){
var inst_20560 = (state_20605[(8)]);
var inst_20558 = (state_20605[(10)]);
var inst_20565 = cljs.core._nth.call(null,inst_20558,inst_20560);
var state_20605__$1 = state_20605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20605__$1,(13),out,inst_20565);
} else {
if((state_val_20606 === (18))){
var inst_20571 = (state_20605[(7)]);
var inst_20580 = cljs.core.first.call(null,inst_20571);
var state_20605__$1 = state_20605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20605__$1,(20),out,inst_20580);
} else {
if((state_val_20606 === (8))){
var inst_20560 = (state_20605[(8)]);
var inst_20559 = (state_20605[(11)]);
var inst_20562 = (inst_20560 < inst_20559);
var inst_20563 = inst_20562;
var state_20605__$1 = state_20605;
if(cljs.core.truth_(inst_20563)){
var statearr_20639_20667 = state_20605__$1;
(statearr_20639_20667[(1)] = (10));

} else {
var statearr_20640_20668 = state_20605__$1;
(statearr_20640_20668[(1)] = (11));

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
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16969__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16969__auto____0 = (function (){
var statearr_20641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20641[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16969__auto__);

(statearr_20641[(1)] = (1));

return statearr_20641;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16969__auto____1 = (function (state_20605){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_20605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e20642){if((e20642 instanceof Object)){
var ex__16972__auto__ = e20642;
var statearr_20643_20669 = state_20605;
(statearr_20643_20669[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20670 = state_20605;
state_20605 = G__20670;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16969__auto__ = function(state_20605){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16969__auto____1.call(this,state_20605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16969__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16969__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_20644 = f__17126__auto__.call(null);
(statearr_20644[(6)] = c__17125__auto__);

return statearr_20644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20672 = arguments.length;
switch (G__20672) {
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
var G__20675 = arguments.length;
switch (G__20675) {
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
var G__20678 = arguments.length;
switch (G__20678) {
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
var c__17125__auto___20725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___20725,out){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___20725,out){
return (function (state_20702){
var state_val_20703 = (state_20702[(1)]);
if((state_val_20703 === (7))){
var inst_20697 = (state_20702[(2)]);
var state_20702__$1 = state_20702;
var statearr_20704_20726 = state_20702__$1;
(statearr_20704_20726[(2)] = inst_20697);

(statearr_20704_20726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (1))){
var inst_20679 = null;
var state_20702__$1 = (function (){var statearr_20705 = state_20702;
(statearr_20705[(7)] = inst_20679);

return statearr_20705;
})();
var statearr_20706_20727 = state_20702__$1;
(statearr_20706_20727[(2)] = null);

(statearr_20706_20727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (4))){
var inst_20682 = (state_20702[(8)]);
var inst_20682__$1 = (state_20702[(2)]);
var inst_20683 = (inst_20682__$1 == null);
var inst_20684 = cljs.core.not.call(null,inst_20683);
var state_20702__$1 = (function (){var statearr_20707 = state_20702;
(statearr_20707[(8)] = inst_20682__$1);

return statearr_20707;
})();
if(inst_20684){
var statearr_20708_20728 = state_20702__$1;
(statearr_20708_20728[(1)] = (5));

} else {
var statearr_20709_20729 = state_20702__$1;
(statearr_20709_20729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (6))){
var state_20702__$1 = state_20702;
var statearr_20710_20730 = state_20702__$1;
(statearr_20710_20730[(2)] = null);

(statearr_20710_20730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (3))){
var inst_20699 = (state_20702[(2)]);
var inst_20700 = cljs.core.async.close_BANG_.call(null,out);
var state_20702__$1 = (function (){var statearr_20711 = state_20702;
(statearr_20711[(9)] = inst_20699);

return statearr_20711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20702__$1,inst_20700);
} else {
if((state_val_20703 === (2))){
var state_20702__$1 = state_20702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20702__$1,(4),ch);
} else {
if((state_val_20703 === (11))){
var inst_20682 = (state_20702[(8)]);
var inst_20691 = (state_20702[(2)]);
var inst_20679 = inst_20682;
var state_20702__$1 = (function (){var statearr_20712 = state_20702;
(statearr_20712[(7)] = inst_20679);

(statearr_20712[(10)] = inst_20691);

return statearr_20712;
})();
var statearr_20713_20731 = state_20702__$1;
(statearr_20713_20731[(2)] = null);

(statearr_20713_20731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (9))){
var inst_20682 = (state_20702[(8)]);
var state_20702__$1 = state_20702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20702__$1,(11),out,inst_20682);
} else {
if((state_val_20703 === (5))){
var inst_20682 = (state_20702[(8)]);
var inst_20679 = (state_20702[(7)]);
var inst_20686 = cljs.core._EQ_.call(null,inst_20682,inst_20679);
var state_20702__$1 = state_20702;
if(inst_20686){
var statearr_20715_20732 = state_20702__$1;
(statearr_20715_20732[(1)] = (8));

} else {
var statearr_20716_20733 = state_20702__$1;
(statearr_20716_20733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (10))){
var inst_20694 = (state_20702[(2)]);
var state_20702__$1 = state_20702;
var statearr_20717_20734 = state_20702__$1;
(statearr_20717_20734[(2)] = inst_20694);

(statearr_20717_20734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (8))){
var inst_20679 = (state_20702[(7)]);
var tmp20714 = inst_20679;
var inst_20679__$1 = tmp20714;
var state_20702__$1 = (function (){var statearr_20718 = state_20702;
(statearr_20718[(7)] = inst_20679__$1);

return statearr_20718;
})();
var statearr_20719_20735 = state_20702__$1;
(statearr_20719_20735[(2)] = null);

(statearr_20719_20735[(1)] = (2));


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
});})(c__17125__auto___20725,out))
;
return ((function (switch__16968__auto__,c__17125__auto___20725,out){
return (function() {
var cljs$core$async$state_machine__16969__auto__ = null;
var cljs$core$async$state_machine__16969__auto____0 = (function (){
var statearr_20720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20720[(0)] = cljs$core$async$state_machine__16969__auto__);

(statearr_20720[(1)] = (1));

return statearr_20720;
});
var cljs$core$async$state_machine__16969__auto____1 = (function (state_20702){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_20702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e20721){if((e20721 instanceof Object)){
var ex__16972__auto__ = e20721;
var statearr_20722_20736 = state_20702;
(statearr_20722_20736[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20737 = state_20702;
state_20702 = G__20737;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$state_machine__16969__auto__ = function(state_20702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16969__auto____1.call(this,state_20702);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16969__auto____0;
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16969__auto____1;
return cljs$core$async$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___20725,out))
})();
var state__17127__auto__ = (function (){var statearr_20723 = f__17126__auto__.call(null);
(statearr_20723[(6)] = c__17125__auto___20725);

return statearr_20723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___20725,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20739 = arguments.length;
switch (G__20739) {
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
var c__17125__auto___20805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___20805,out){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___20805,out){
return (function (state_20777){
var state_val_20778 = (state_20777[(1)]);
if((state_val_20778 === (7))){
var inst_20773 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
var statearr_20779_20806 = state_20777__$1;
(statearr_20779_20806[(2)] = inst_20773);

(statearr_20779_20806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (1))){
var inst_20740 = (new Array(n));
var inst_20741 = inst_20740;
var inst_20742 = (0);
var state_20777__$1 = (function (){var statearr_20780 = state_20777;
(statearr_20780[(7)] = inst_20742);

(statearr_20780[(8)] = inst_20741);

return statearr_20780;
})();
var statearr_20781_20807 = state_20777__$1;
(statearr_20781_20807[(2)] = null);

(statearr_20781_20807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (4))){
var inst_20745 = (state_20777[(9)]);
var inst_20745__$1 = (state_20777[(2)]);
var inst_20746 = (inst_20745__$1 == null);
var inst_20747 = cljs.core.not.call(null,inst_20746);
var state_20777__$1 = (function (){var statearr_20782 = state_20777;
(statearr_20782[(9)] = inst_20745__$1);

return statearr_20782;
})();
if(inst_20747){
var statearr_20783_20808 = state_20777__$1;
(statearr_20783_20808[(1)] = (5));

} else {
var statearr_20784_20809 = state_20777__$1;
(statearr_20784_20809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (15))){
var inst_20767 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
var statearr_20785_20810 = state_20777__$1;
(statearr_20785_20810[(2)] = inst_20767);

(statearr_20785_20810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (13))){
var state_20777__$1 = state_20777;
var statearr_20786_20811 = state_20777__$1;
(statearr_20786_20811[(2)] = null);

(statearr_20786_20811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (6))){
var inst_20742 = (state_20777[(7)]);
var inst_20763 = (inst_20742 > (0));
var state_20777__$1 = state_20777;
if(cljs.core.truth_(inst_20763)){
var statearr_20787_20812 = state_20777__$1;
(statearr_20787_20812[(1)] = (12));

} else {
var statearr_20788_20813 = state_20777__$1;
(statearr_20788_20813[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (3))){
var inst_20775 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20777__$1,inst_20775);
} else {
if((state_val_20778 === (12))){
var inst_20741 = (state_20777[(8)]);
var inst_20765 = cljs.core.vec.call(null,inst_20741);
var state_20777__$1 = state_20777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20777__$1,(15),out,inst_20765);
} else {
if((state_val_20778 === (2))){
var state_20777__$1 = state_20777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20777__$1,(4),ch);
} else {
if((state_val_20778 === (11))){
var inst_20757 = (state_20777[(2)]);
var inst_20758 = (new Array(n));
var inst_20741 = inst_20758;
var inst_20742 = (0);
var state_20777__$1 = (function (){var statearr_20789 = state_20777;
(statearr_20789[(10)] = inst_20757);

(statearr_20789[(7)] = inst_20742);

(statearr_20789[(8)] = inst_20741);

return statearr_20789;
})();
var statearr_20790_20814 = state_20777__$1;
(statearr_20790_20814[(2)] = null);

(statearr_20790_20814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (9))){
var inst_20741 = (state_20777[(8)]);
var inst_20755 = cljs.core.vec.call(null,inst_20741);
var state_20777__$1 = state_20777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20777__$1,(11),out,inst_20755);
} else {
if((state_val_20778 === (5))){
var inst_20745 = (state_20777[(9)]);
var inst_20742 = (state_20777[(7)]);
var inst_20750 = (state_20777[(11)]);
var inst_20741 = (state_20777[(8)]);
var inst_20749 = (inst_20741[inst_20742] = inst_20745);
var inst_20750__$1 = (inst_20742 + (1));
var inst_20751 = (inst_20750__$1 < n);
var state_20777__$1 = (function (){var statearr_20791 = state_20777;
(statearr_20791[(12)] = inst_20749);

(statearr_20791[(11)] = inst_20750__$1);

return statearr_20791;
})();
if(cljs.core.truth_(inst_20751)){
var statearr_20792_20815 = state_20777__$1;
(statearr_20792_20815[(1)] = (8));

} else {
var statearr_20793_20816 = state_20777__$1;
(statearr_20793_20816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (14))){
var inst_20770 = (state_20777[(2)]);
var inst_20771 = cljs.core.async.close_BANG_.call(null,out);
var state_20777__$1 = (function (){var statearr_20795 = state_20777;
(statearr_20795[(13)] = inst_20770);

return statearr_20795;
})();
var statearr_20796_20817 = state_20777__$1;
(statearr_20796_20817[(2)] = inst_20771);

(statearr_20796_20817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (10))){
var inst_20761 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
var statearr_20797_20818 = state_20777__$1;
(statearr_20797_20818[(2)] = inst_20761);

(statearr_20797_20818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (8))){
var inst_20750 = (state_20777[(11)]);
var inst_20741 = (state_20777[(8)]);
var tmp20794 = inst_20741;
var inst_20741__$1 = tmp20794;
var inst_20742 = inst_20750;
var state_20777__$1 = (function (){var statearr_20798 = state_20777;
(statearr_20798[(7)] = inst_20742);

(statearr_20798[(8)] = inst_20741__$1);

return statearr_20798;
})();
var statearr_20799_20819 = state_20777__$1;
(statearr_20799_20819[(2)] = null);

(statearr_20799_20819[(1)] = (2));


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
});})(c__17125__auto___20805,out))
;
return ((function (switch__16968__auto__,c__17125__auto___20805,out){
return (function() {
var cljs$core$async$state_machine__16969__auto__ = null;
var cljs$core$async$state_machine__16969__auto____0 = (function (){
var statearr_20800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20800[(0)] = cljs$core$async$state_machine__16969__auto__);

(statearr_20800[(1)] = (1));

return statearr_20800;
});
var cljs$core$async$state_machine__16969__auto____1 = (function (state_20777){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_20777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e20801){if((e20801 instanceof Object)){
var ex__16972__auto__ = e20801;
var statearr_20802_20820 = state_20777;
(statearr_20802_20820[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20821 = state_20777;
state_20777 = G__20821;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$state_machine__16969__auto__ = function(state_20777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16969__auto____1.call(this,state_20777);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16969__auto____0;
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16969__auto____1;
return cljs$core$async$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___20805,out))
})();
var state__17127__auto__ = (function (){var statearr_20803 = f__17126__auto__.call(null);
(statearr_20803[(6)] = c__17125__auto___20805);

return statearr_20803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___20805,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20823 = arguments.length;
switch (G__20823) {
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
var c__17125__auto___20893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___20893,out){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___20893,out){
return (function (state_20865){
var state_val_20866 = (state_20865[(1)]);
if((state_val_20866 === (7))){
var inst_20861 = (state_20865[(2)]);
var state_20865__$1 = state_20865;
var statearr_20867_20894 = state_20865__$1;
(statearr_20867_20894[(2)] = inst_20861);

(statearr_20867_20894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20866 === (1))){
var inst_20824 = [];
var inst_20825 = inst_20824;
var inst_20826 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20865__$1 = (function (){var statearr_20868 = state_20865;
(statearr_20868[(7)] = inst_20825);

(statearr_20868[(8)] = inst_20826);

return statearr_20868;
})();
var statearr_20869_20895 = state_20865__$1;
(statearr_20869_20895[(2)] = null);

(statearr_20869_20895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20866 === (4))){
var inst_20829 = (state_20865[(9)]);
var inst_20829__$1 = (state_20865[(2)]);
var inst_20830 = (inst_20829__$1 == null);
var inst_20831 = cljs.core.not.call(null,inst_20830);
var state_20865__$1 = (function (){var statearr_20870 = state_20865;
(statearr_20870[(9)] = inst_20829__$1);

return statearr_20870;
})();
if(inst_20831){
var statearr_20871_20896 = state_20865__$1;
(statearr_20871_20896[(1)] = (5));

} else {
var statearr_20872_20897 = state_20865__$1;
(statearr_20872_20897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20866 === (15))){
var inst_20855 = (state_20865[(2)]);
var state_20865__$1 = state_20865;
var statearr_20873_20898 = state_20865__$1;
(statearr_20873_20898[(2)] = inst_20855);

(statearr_20873_20898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20866 === (13))){
var state_20865__$1 = state_20865;
var statearr_20874_20899 = state_20865__$1;
(statearr_20874_20899[(2)] = null);

(statearr_20874_20899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20866 === (6))){
var inst_20825 = (state_20865[(7)]);
var inst_20850 = inst_20825.length;
var inst_20851 = (inst_20850 > (0));
var state_20865__$1 = state_20865;
if(cljs.core.truth_(inst_20851)){
var statearr_20875_20900 = state_20865__$1;
(statearr_20875_20900[(1)] = (12));

} else {
var statearr_20876_20901 = state_20865__$1;
(statearr_20876_20901[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20866 === (3))){
var inst_20863 = (state_20865[(2)]);
var state_20865__$1 = state_20865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20865__$1,inst_20863);
} else {
if((state_val_20866 === (12))){
var inst_20825 = (state_20865[(7)]);
var inst_20853 = cljs.core.vec.call(null,inst_20825);
var state_20865__$1 = state_20865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20865__$1,(15),out,inst_20853);
} else {
if((state_val_20866 === (2))){
var state_20865__$1 = state_20865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20865__$1,(4),ch);
} else {
if((state_val_20866 === (11))){
var inst_20829 = (state_20865[(9)]);
var inst_20833 = (state_20865[(10)]);
var inst_20843 = (state_20865[(2)]);
var inst_20844 = [];
var inst_20845 = inst_20844.push(inst_20829);
var inst_20825 = inst_20844;
var inst_20826 = inst_20833;
var state_20865__$1 = (function (){var statearr_20877 = state_20865;
(statearr_20877[(7)] = inst_20825);

(statearr_20877[(11)] = inst_20843);

(statearr_20877[(8)] = inst_20826);

(statearr_20877[(12)] = inst_20845);

return statearr_20877;
})();
var statearr_20878_20902 = state_20865__$1;
(statearr_20878_20902[(2)] = null);

(statearr_20878_20902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20866 === (9))){
var inst_20825 = (state_20865[(7)]);
var inst_20841 = cljs.core.vec.call(null,inst_20825);
var state_20865__$1 = state_20865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20865__$1,(11),out,inst_20841);
} else {
if((state_val_20866 === (5))){
var inst_20829 = (state_20865[(9)]);
var inst_20833 = (state_20865[(10)]);
var inst_20826 = (state_20865[(8)]);
var inst_20833__$1 = f.call(null,inst_20829);
var inst_20834 = cljs.core._EQ_.call(null,inst_20833__$1,inst_20826);
var inst_20835 = cljs.core.keyword_identical_QMARK_.call(null,inst_20826,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20836 = ((inst_20834) || (inst_20835));
var state_20865__$1 = (function (){var statearr_20879 = state_20865;
(statearr_20879[(10)] = inst_20833__$1);

return statearr_20879;
})();
if(cljs.core.truth_(inst_20836)){
var statearr_20880_20903 = state_20865__$1;
(statearr_20880_20903[(1)] = (8));

} else {
var statearr_20881_20904 = state_20865__$1;
(statearr_20881_20904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20866 === (14))){
var inst_20858 = (state_20865[(2)]);
var inst_20859 = cljs.core.async.close_BANG_.call(null,out);
var state_20865__$1 = (function (){var statearr_20883 = state_20865;
(statearr_20883[(13)] = inst_20858);

return statearr_20883;
})();
var statearr_20884_20905 = state_20865__$1;
(statearr_20884_20905[(2)] = inst_20859);

(statearr_20884_20905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20866 === (10))){
var inst_20848 = (state_20865[(2)]);
var state_20865__$1 = state_20865;
var statearr_20885_20906 = state_20865__$1;
(statearr_20885_20906[(2)] = inst_20848);

(statearr_20885_20906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20866 === (8))){
var inst_20825 = (state_20865[(7)]);
var inst_20829 = (state_20865[(9)]);
var inst_20833 = (state_20865[(10)]);
var inst_20838 = inst_20825.push(inst_20829);
var tmp20882 = inst_20825;
var inst_20825__$1 = tmp20882;
var inst_20826 = inst_20833;
var state_20865__$1 = (function (){var statearr_20886 = state_20865;
(statearr_20886[(7)] = inst_20825__$1);

(statearr_20886[(8)] = inst_20826);

(statearr_20886[(14)] = inst_20838);

return statearr_20886;
})();
var statearr_20887_20907 = state_20865__$1;
(statearr_20887_20907[(2)] = null);

(statearr_20887_20907[(1)] = (2));


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
});})(c__17125__auto___20893,out))
;
return ((function (switch__16968__auto__,c__17125__auto___20893,out){
return (function() {
var cljs$core$async$state_machine__16969__auto__ = null;
var cljs$core$async$state_machine__16969__auto____0 = (function (){
var statearr_20888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20888[(0)] = cljs$core$async$state_machine__16969__auto__);

(statearr_20888[(1)] = (1));

return statearr_20888;
});
var cljs$core$async$state_machine__16969__auto____1 = (function (state_20865){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_20865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e20889){if((e20889 instanceof Object)){
var ex__16972__auto__ = e20889;
var statearr_20890_20908 = state_20865;
(statearr_20890_20908[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20909 = state_20865;
state_20865 = G__20909;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
cljs$core$async$state_machine__16969__auto__ = function(state_20865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16969__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16969__auto____1.call(this,state_20865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16969__auto____0;
cljs$core$async$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16969__auto____1;
return cljs$core$async$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___20893,out))
})();
var state__17127__auto__ = (function (){var statearr_20891 = f__17126__auto__.call(null);
(statearr_20891[(6)] = c__17125__auto___20893);

return statearr_20891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___20893,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
