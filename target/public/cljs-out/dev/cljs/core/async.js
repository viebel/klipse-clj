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
var G__128454 = arguments.length;
switch (G__128454) {
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
if(typeof cljs.core.async.t_cljs$core$async128455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async128455 = (function (f,blockable,meta128456){
this.f = f;
this.blockable = blockable;
this.meta128456 = meta128456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async128455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_128457,meta128456__$1){
var self__ = this;
var _128457__$1 = this;
return (new cljs.core.async.t_cljs$core$async128455(self__.f,self__.blockable,meta128456__$1));
});

cljs.core.async.t_cljs$core$async128455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_128457){
var self__ = this;
var _128457__$1 = this;
return self__.meta128456;
});

cljs.core.async.t_cljs$core$async128455.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async128455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async128455.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async128455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async128455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta128456","meta128456",210549795,null)], null);
});

cljs.core.async.t_cljs$core$async128455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async128455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async128455";

cljs.core.async.t_cljs$core$async128455.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async128455");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async128455.
 */
cljs.core.async.__GT_t_cljs$core$async128455 = (function cljs$core$async$__GT_t_cljs$core$async128455(f__$1,blockable__$1,meta128456){
return (new cljs.core.async.t_cljs$core$async128455(f__$1,blockable__$1,meta128456));
});

}

return (new cljs.core.async.t_cljs$core$async128455(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__128468 = arguments.length;
switch (G__128468) {
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
var G__128476 = arguments.length;
switch (G__128476) {
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
var G__128485 = arguments.length;
switch (G__128485) {
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
var val_128492 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_128492);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_128492,ret){
return (function (){
return fn1.call(null,val_128492);
});})(val_128492,ret))
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
var G__128495 = arguments.length;
switch (G__128495) {
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
var n__4376__auto___128500 = n;
var x_128501 = (0);
while(true){
if((x_128501 < n__4376__auto___128500)){
(a[x_128501] = (0));

var G__128502 = (x_128501 + (1));
x_128501 = G__128502;
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

var G__128506 = (i + (1));
i = G__128506;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async128507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async128507 = (function (flag,meta128508){
this.flag = flag;
this.meta128508 = meta128508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async128507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_128509,meta128508__$1){
var self__ = this;
var _128509__$1 = this;
return (new cljs.core.async.t_cljs$core$async128507(self__.flag,meta128508__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async128507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_128509){
var self__ = this;
var _128509__$1 = this;
return self__.meta128508;
});})(flag))
;

cljs.core.async.t_cljs$core$async128507.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async128507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async128507.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async128507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async128507.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta128508","meta128508",-659584314,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async128507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async128507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async128507";

cljs.core.async.t_cljs$core$async128507.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async128507");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async128507.
 */
cljs.core.async.__GT_t_cljs$core$async128507 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async128507(flag__$1,meta128508){
return (new cljs.core.async.t_cljs$core$async128507(flag__$1,meta128508));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async128507(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async128510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async128510 = (function (flag,cb,meta128511){
this.flag = flag;
this.cb = cb;
this.meta128511 = meta128511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async128510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_128512,meta128511__$1){
var self__ = this;
var _128512__$1 = this;
return (new cljs.core.async.t_cljs$core$async128510(self__.flag,self__.cb,meta128511__$1));
});

cljs.core.async.t_cljs$core$async128510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_128512){
var self__ = this;
var _128512__$1 = this;
return self__.meta128511;
});

cljs.core.async.t_cljs$core$async128510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async128510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async128510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async128510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async128510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta128511","meta128511",1508246242,null)], null);
});

cljs.core.async.t_cljs$core$async128510.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async128510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async128510";

cljs.core.async.t_cljs$core$async128510.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async128510");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async128510.
 */
cljs.core.async.__GT_t_cljs$core$async128510 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async128510(flag__$1,cb__$1,meta128511){
return (new cljs.core.async.t_cljs$core$async128510(flag__$1,cb__$1,meta128511));
});

}

return (new cljs.core.async.t_cljs$core$async128510(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__128513_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__128513_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__128514_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__128514_SHARP_,port], null));
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
var G__128517 = (i + (1));
i = G__128517;
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
var len__4499__auto___128528 = arguments.length;
var i__4500__auto___128529 = (0);
while(true){
if((i__4500__auto___128529 < len__4499__auto___128528)){
args__4502__auto__.push((arguments[i__4500__auto___128529]));

var G__128530 = (i__4500__auto___128529 + (1));
i__4500__auto___128529 = G__128530;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__128525){
var map__128526 = p__128525;
var map__128526__$1 = ((((!((map__128526 == null)))?(((((map__128526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__128526):map__128526);
var opts = map__128526__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq128523){
var G__128524 = cljs.core.first.call(null,seq128523);
var seq128523__$1 = cljs.core.next.call(null,seq128523);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__128524,seq128523__$1);
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
var G__128537 = arguments.length;
switch (G__128537) {
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
var c__15829__auto___128585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___128585){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___128585){
return (function (state_128562){
var state_val_128563 = (state_128562[(1)]);
if((state_val_128563 === (7))){
var inst_128558 = (state_128562[(2)]);
var state_128562__$1 = state_128562;
var statearr_128564_128586 = state_128562__$1;
(statearr_128564_128586[(2)] = inst_128558);

(statearr_128564_128586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128563 === (1))){
var state_128562__$1 = state_128562;
var statearr_128565_128587 = state_128562__$1;
(statearr_128565_128587[(2)] = null);

(statearr_128565_128587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128563 === (4))){
var inst_128541 = (state_128562[(7)]);
var inst_128541__$1 = (state_128562[(2)]);
var inst_128542 = (inst_128541__$1 == null);
var state_128562__$1 = (function (){var statearr_128566 = state_128562;
(statearr_128566[(7)] = inst_128541__$1);

return statearr_128566;
})();
if(cljs.core.truth_(inst_128542)){
var statearr_128567_128590 = state_128562__$1;
(statearr_128567_128590[(1)] = (5));

} else {
var statearr_128568_128595 = state_128562__$1;
(statearr_128568_128595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128563 === (13))){
var state_128562__$1 = state_128562;
var statearr_128569_128596 = state_128562__$1;
(statearr_128569_128596[(2)] = null);

(statearr_128569_128596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128563 === (6))){
var inst_128541 = (state_128562[(7)]);
var state_128562__$1 = state_128562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_128562__$1,(11),to,inst_128541);
} else {
if((state_val_128563 === (3))){
var inst_128560 = (state_128562[(2)]);
var state_128562__$1 = state_128562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128562__$1,inst_128560);
} else {
if((state_val_128563 === (12))){
var state_128562__$1 = state_128562;
var statearr_128570_128600 = state_128562__$1;
(statearr_128570_128600[(2)] = null);

(statearr_128570_128600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128563 === (2))){
var state_128562__$1 = state_128562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128562__$1,(4),from);
} else {
if((state_val_128563 === (11))){
var inst_128551 = (state_128562[(2)]);
var state_128562__$1 = state_128562;
if(cljs.core.truth_(inst_128551)){
var statearr_128571_128601 = state_128562__$1;
(statearr_128571_128601[(1)] = (12));

} else {
var statearr_128572_128602 = state_128562__$1;
(statearr_128572_128602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128563 === (9))){
var state_128562__$1 = state_128562;
var statearr_128573_128603 = state_128562__$1;
(statearr_128573_128603[(2)] = null);

(statearr_128573_128603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128563 === (5))){
var state_128562__$1 = state_128562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_128574_128604 = state_128562__$1;
(statearr_128574_128604[(1)] = (8));

} else {
var statearr_128575_128605 = state_128562__$1;
(statearr_128575_128605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128563 === (14))){
var inst_128556 = (state_128562[(2)]);
var state_128562__$1 = state_128562;
var statearr_128576_128608 = state_128562__$1;
(statearr_128576_128608[(2)] = inst_128556);

(statearr_128576_128608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128563 === (10))){
var inst_128548 = (state_128562[(2)]);
var state_128562__$1 = state_128562;
var statearr_128577_128610 = state_128562__$1;
(statearr_128577_128610[(2)] = inst_128548);

(statearr_128577_128610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128563 === (8))){
var inst_128545 = cljs.core.async.close_BANG_.call(null,to);
var state_128562__$1 = state_128562;
var statearr_128578_128614 = state_128562__$1;
(statearr_128578_128614[(2)] = inst_128545);

(statearr_128578_128614[(1)] = (10));


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
});})(c__15829__auto___128585))
;
return ((function (switch__15806__auto__,c__15829__auto___128585){
return (function() {
var cljs$core$async$state_machine__15807__auto__ = null;
var cljs$core$async$state_machine__15807__auto____0 = (function (){
var statearr_128579 = [null,null,null,null,null,null,null,null];
(statearr_128579[(0)] = cljs$core$async$state_machine__15807__auto__);

(statearr_128579[(1)] = (1));

return statearr_128579;
});
var cljs$core$async$state_machine__15807__auto____1 = (function (state_128562){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_128562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e128580){if((e128580 instanceof Object)){
var ex__15810__auto__ = e128580;
var statearr_128581_128618 = state_128562;
(statearr_128581_128618[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128619 = state_128562;
state_128562 = G__128619;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$state_machine__15807__auto__ = function(state_128562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15807__auto____1.call(this,state_128562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15807__auto____0;
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15807__auto____1;
return cljs$core$async$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___128585))
})();
var state__15831__auto__ = (function (){var statearr_128582 = f__15830__auto__.call(null);
(statearr_128582[(6)] = c__15829__auto___128585);

return statearr_128582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___128585))
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
return (function (p__128626){
var vec__128627 = p__128626;
var v = cljs.core.nth.call(null,vec__128627,(0),null);
var p = cljs.core.nth.call(null,vec__128627,(1),null);
var job = vec__128627;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15829__auto___128844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___128844,res,vec__128627,v,p,job,jobs,results){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___128844,res,vec__128627,v,p,job,jobs,results){
return (function (state_128634){
var state_val_128635 = (state_128634[(1)]);
if((state_val_128635 === (1))){
var state_128634__$1 = state_128634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_128634__$1,(2),res,v);
} else {
if((state_val_128635 === (2))){
var inst_128631 = (state_128634[(2)]);
var inst_128632 = cljs.core.async.close_BANG_.call(null,res);
var state_128634__$1 = (function (){var statearr_128638 = state_128634;
(statearr_128638[(7)] = inst_128631);

return statearr_128638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128634__$1,inst_128632);
} else {
return null;
}
}
});})(c__15829__auto___128844,res,vec__128627,v,p,job,jobs,results))
;
return ((function (switch__15806__auto__,c__15829__auto___128844,res,vec__128627,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0 = (function (){
var statearr_128640 = [null,null,null,null,null,null,null,null];
(statearr_128640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__);

(statearr_128640[(1)] = (1));

return statearr_128640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1 = (function (state_128634){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_128634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e128641){if((e128641 instanceof Object)){
var ex__15810__auto__ = e128641;
var statearr_128642_128868 = state_128634;
(statearr_128642_128868[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128869 = state_128634;
state_128634 = G__128869;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__ = function(state_128634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1.call(this,state_128634);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___128844,res,vec__128627,v,p,job,jobs,results))
})();
var state__15831__auto__ = (function (){var statearr_128643 = f__15830__auto__.call(null);
(statearr_128643[(6)] = c__15829__auto___128844);

return statearr_128643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___128844,res,vec__128627,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__128644){
var vec__128645 = p__128644;
var v = cljs.core.nth.call(null,vec__128645,(0),null);
var p = cljs.core.nth.call(null,vec__128645,(1),null);
var job = vec__128645;
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
var n__4376__auto___128884 = n;
var __128885 = (0);
while(true){
if((__128885 < n__4376__auto___128884)){
var G__128648_128890 = type;
var G__128648_128891__$1 = (((G__128648_128890 instanceof cljs.core.Keyword))?G__128648_128890.fqn:null);
switch (G__128648_128891__$1) {
case "compute":
var c__15829__auto___128893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__128885,c__15829__auto___128893,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (__128885,c__15829__auto___128893,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async){
return (function (state_128661){
var state_val_128662 = (state_128661[(1)]);
if((state_val_128662 === (1))){
var state_128661__$1 = state_128661;
var statearr_128663_128899 = state_128661__$1;
(statearr_128663_128899[(2)] = null);

(statearr_128663_128899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128662 === (2))){
var state_128661__$1 = state_128661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128661__$1,(4),jobs);
} else {
if((state_val_128662 === (3))){
var inst_128659 = (state_128661[(2)]);
var state_128661__$1 = state_128661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128661__$1,inst_128659);
} else {
if((state_val_128662 === (4))){
var inst_128651 = (state_128661[(2)]);
var inst_128652 = process__$1.call(null,inst_128651);
var state_128661__$1 = state_128661;
if(cljs.core.truth_(inst_128652)){
var statearr_128664_128901 = state_128661__$1;
(statearr_128664_128901[(1)] = (5));

} else {
var statearr_128665_128902 = state_128661__$1;
(statearr_128665_128902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128662 === (5))){
var state_128661__$1 = state_128661;
var statearr_128666_128903 = state_128661__$1;
(statearr_128666_128903[(2)] = null);

(statearr_128666_128903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128662 === (6))){
var state_128661__$1 = state_128661;
var statearr_128667_128904 = state_128661__$1;
(statearr_128667_128904[(2)] = null);

(statearr_128667_128904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128662 === (7))){
var inst_128657 = (state_128661[(2)]);
var state_128661__$1 = state_128661;
var statearr_128670_128905 = state_128661__$1;
(statearr_128670_128905[(2)] = inst_128657);

(statearr_128670_128905[(1)] = (3));


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
});})(__128885,c__15829__auto___128893,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async))
;
return ((function (__128885,switch__15806__auto__,c__15829__auto___128893,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0 = (function (){
var statearr_128671 = [null,null,null,null,null,null,null];
(statearr_128671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__);

(statearr_128671[(1)] = (1));

return statearr_128671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1 = (function (state_128661){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_128661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e128672){if((e128672 instanceof Object)){
var ex__15810__auto__ = e128672;
var statearr_128673_128915 = state_128661;
(statearr_128673_128915[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128916 = state_128661;
state_128661 = G__128916;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__ = function(state_128661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1.call(this,state_128661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__;
})()
;})(__128885,switch__15806__auto__,c__15829__auto___128893,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async))
})();
var state__15831__auto__ = (function (){var statearr_128674 = f__15830__auto__.call(null);
(statearr_128674[(6)] = c__15829__auto___128893);

return statearr_128674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(__128885,c__15829__auto___128893,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async))
);


break;
case "async":
var c__15829__auto___128917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__128885,c__15829__auto___128917,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (__128885,c__15829__auto___128917,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async){
return (function (state_128687){
var state_val_128688 = (state_128687[(1)]);
if((state_val_128688 === (1))){
var state_128687__$1 = state_128687;
var statearr_128689_128920 = state_128687__$1;
(statearr_128689_128920[(2)] = null);

(statearr_128689_128920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128688 === (2))){
var state_128687__$1 = state_128687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128687__$1,(4),jobs);
} else {
if((state_val_128688 === (3))){
var inst_128685 = (state_128687[(2)]);
var state_128687__$1 = state_128687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128687__$1,inst_128685);
} else {
if((state_val_128688 === (4))){
var inst_128677 = (state_128687[(2)]);
var inst_128678 = async.call(null,inst_128677);
var state_128687__$1 = state_128687;
if(cljs.core.truth_(inst_128678)){
var statearr_128692_128930 = state_128687__$1;
(statearr_128692_128930[(1)] = (5));

} else {
var statearr_128693_128931 = state_128687__$1;
(statearr_128693_128931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128688 === (5))){
var state_128687__$1 = state_128687;
var statearr_128694_128932 = state_128687__$1;
(statearr_128694_128932[(2)] = null);

(statearr_128694_128932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128688 === (6))){
var state_128687__$1 = state_128687;
var statearr_128695_128933 = state_128687__$1;
(statearr_128695_128933[(2)] = null);

(statearr_128695_128933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128688 === (7))){
var inst_128683 = (state_128687[(2)]);
var state_128687__$1 = state_128687;
var statearr_128696_128943 = state_128687__$1;
(statearr_128696_128943[(2)] = inst_128683);

(statearr_128696_128943[(1)] = (3));


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
});})(__128885,c__15829__auto___128917,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async))
;
return ((function (__128885,switch__15806__auto__,c__15829__auto___128917,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0 = (function (){
var statearr_128697 = [null,null,null,null,null,null,null];
(statearr_128697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__);

(statearr_128697[(1)] = (1));

return statearr_128697;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1 = (function (state_128687){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_128687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e128700){if((e128700 instanceof Object)){
var ex__15810__auto__ = e128700;
var statearr_128702_128949 = state_128687;
(statearr_128702_128949[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128950 = state_128687;
state_128687 = G__128950;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__ = function(state_128687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1.call(this,state_128687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__;
})()
;})(__128885,switch__15806__auto__,c__15829__auto___128917,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async))
})();
var state__15831__auto__ = (function (){var statearr_128704 = f__15830__auto__.call(null);
(statearr_128704[(6)] = c__15829__auto___128917);

return statearr_128704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(__128885,c__15829__auto___128917,G__128648_128890,G__128648_128891__$1,n__4376__auto___128884,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__128648_128891__$1)].join('')));

}

var G__128951 = (__128885 + (1));
__128885 = G__128951;
continue;
} else {
}
break;
}

var c__15829__auto___128953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___128953,jobs,results,process__$1,async){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___128953,jobs,results,process__$1,async){
return (function (state_128726){
var state_val_128727 = (state_128726[(1)]);
if((state_val_128727 === (1))){
var state_128726__$1 = state_128726;
var statearr_128728_128954 = state_128726__$1;
(statearr_128728_128954[(2)] = null);

(statearr_128728_128954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128727 === (2))){
var state_128726__$1 = state_128726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128726__$1,(4),from);
} else {
if((state_val_128727 === (3))){
var inst_128724 = (state_128726[(2)]);
var state_128726__$1 = state_128726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128726__$1,inst_128724);
} else {
if((state_val_128727 === (4))){
var inst_128707 = (state_128726[(7)]);
var inst_128707__$1 = (state_128726[(2)]);
var inst_128708 = (inst_128707__$1 == null);
var state_128726__$1 = (function (){var statearr_128733 = state_128726;
(statearr_128733[(7)] = inst_128707__$1);

return statearr_128733;
})();
if(cljs.core.truth_(inst_128708)){
var statearr_128734_128955 = state_128726__$1;
(statearr_128734_128955[(1)] = (5));

} else {
var statearr_128735_128956 = state_128726__$1;
(statearr_128735_128956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128727 === (5))){
var inst_128710 = cljs.core.async.close_BANG_.call(null,jobs);
var state_128726__$1 = state_128726;
var statearr_128736_128958 = state_128726__$1;
(statearr_128736_128958[(2)] = inst_128710);

(statearr_128736_128958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128727 === (6))){
var inst_128707 = (state_128726[(7)]);
var inst_128712 = (state_128726[(8)]);
var inst_128712__$1 = cljs.core.async.chan.call(null,(1));
var inst_128713 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_128714 = [inst_128707,inst_128712__$1];
var inst_128715 = (new cljs.core.PersistentVector(null,2,(5),inst_128713,inst_128714,null));
var state_128726__$1 = (function (){var statearr_128737 = state_128726;
(statearr_128737[(8)] = inst_128712__$1);

return statearr_128737;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_128726__$1,(8),jobs,inst_128715);
} else {
if((state_val_128727 === (7))){
var inst_128722 = (state_128726[(2)]);
var state_128726__$1 = state_128726;
var statearr_128738_128959 = state_128726__$1;
(statearr_128738_128959[(2)] = inst_128722);

(statearr_128738_128959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128727 === (8))){
var inst_128712 = (state_128726[(8)]);
var inst_128717 = (state_128726[(2)]);
var state_128726__$1 = (function (){var statearr_128740 = state_128726;
(statearr_128740[(9)] = inst_128717);

return statearr_128740;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_128726__$1,(9),results,inst_128712);
} else {
if((state_val_128727 === (9))){
var inst_128719 = (state_128726[(2)]);
var state_128726__$1 = (function (){var statearr_128741 = state_128726;
(statearr_128741[(10)] = inst_128719);

return statearr_128741;
})();
var statearr_128742_128967 = state_128726__$1;
(statearr_128742_128967[(2)] = null);

(statearr_128742_128967[(1)] = (2));


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
});})(c__15829__auto___128953,jobs,results,process__$1,async))
;
return ((function (switch__15806__auto__,c__15829__auto___128953,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0 = (function (){
var statearr_128743 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_128743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__);

(statearr_128743[(1)] = (1));

return statearr_128743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1 = (function (state_128726){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_128726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e128744){if((e128744 instanceof Object)){
var ex__15810__auto__ = e128744;
var statearr_128745_128974 = state_128726;
(statearr_128745_128974[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128976 = state_128726;
state_128726 = G__128976;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__ = function(state_128726){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1.call(this,state_128726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___128953,jobs,results,process__$1,async))
})();
var state__15831__auto__ = (function (){var statearr_128746 = f__15830__auto__.call(null);
(statearr_128746[(6)] = c__15829__auto___128953);

return statearr_128746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___128953,jobs,results,process__$1,async))
);


var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__,jobs,results,process__$1,async){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__,jobs,results,process__$1,async){
return (function (state_128785){
var state_val_128787 = (state_128785[(1)]);
if((state_val_128787 === (7))){
var inst_128780 = (state_128785[(2)]);
var state_128785__$1 = state_128785;
var statearr_128790_128983 = state_128785__$1;
(statearr_128790_128983[(2)] = inst_128780);

(statearr_128790_128983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (20))){
var state_128785__$1 = state_128785;
var statearr_128791_128986 = state_128785__$1;
(statearr_128791_128986[(2)] = null);

(statearr_128791_128986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (1))){
var state_128785__$1 = state_128785;
var statearr_128793_128988 = state_128785__$1;
(statearr_128793_128988[(2)] = null);

(statearr_128793_128988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (4))){
var inst_128749 = (state_128785[(7)]);
var inst_128749__$1 = (state_128785[(2)]);
var inst_128750 = (inst_128749__$1 == null);
var state_128785__$1 = (function (){var statearr_128794 = state_128785;
(statearr_128794[(7)] = inst_128749__$1);

return statearr_128794;
})();
if(cljs.core.truth_(inst_128750)){
var statearr_128795_128989 = state_128785__$1;
(statearr_128795_128989[(1)] = (5));

} else {
var statearr_128796_128990 = state_128785__$1;
(statearr_128796_128990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (15))){
var inst_128762 = (state_128785[(8)]);
var state_128785__$1 = state_128785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_128785__$1,(18),to,inst_128762);
} else {
if((state_val_128787 === (21))){
var inst_128775 = (state_128785[(2)]);
var state_128785__$1 = state_128785;
var statearr_128797_128993 = state_128785__$1;
(statearr_128797_128993[(2)] = inst_128775);

(statearr_128797_128993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (13))){
var inst_128777 = (state_128785[(2)]);
var state_128785__$1 = (function (){var statearr_128798 = state_128785;
(statearr_128798[(9)] = inst_128777);

return statearr_128798;
})();
var statearr_128799_128998 = state_128785__$1;
(statearr_128799_128998[(2)] = null);

(statearr_128799_128998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (6))){
var inst_128749 = (state_128785[(7)]);
var state_128785__$1 = state_128785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128785__$1,(11),inst_128749);
} else {
if((state_val_128787 === (17))){
var inst_128770 = (state_128785[(2)]);
var state_128785__$1 = state_128785;
if(cljs.core.truth_(inst_128770)){
var statearr_128800_129002 = state_128785__$1;
(statearr_128800_129002[(1)] = (19));

} else {
var statearr_128801_129003 = state_128785__$1;
(statearr_128801_129003[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (3))){
var inst_128782 = (state_128785[(2)]);
var state_128785__$1 = state_128785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128785__$1,inst_128782);
} else {
if((state_val_128787 === (12))){
var inst_128759 = (state_128785[(10)]);
var state_128785__$1 = state_128785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128785__$1,(14),inst_128759);
} else {
if((state_val_128787 === (2))){
var state_128785__$1 = state_128785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128785__$1,(4),results);
} else {
if((state_val_128787 === (19))){
var state_128785__$1 = state_128785;
var statearr_128805_129004 = state_128785__$1;
(statearr_128805_129004[(2)] = null);

(statearr_128805_129004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (11))){
var inst_128759 = (state_128785[(2)]);
var state_128785__$1 = (function (){var statearr_128806 = state_128785;
(statearr_128806[(10)] = inst_128759);

return statearr_128806;
})();
var statearr_128807_129007 = state_128785__$1;
(statearr_128807_129007[(2)] = null);

(statearr_128807_129007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (9))){
var state_128785__$1 = state_128785;
var statearr_128808_129012 = state_128785__$1;
(statearr_128808_129012[(2)] = null);

(statearr_128808_129012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (5))){
var state_128785__$1 = state_128785;
if(cljs.core.truth_(close_QMARK_)){
var statearr_128809_129013 = state_128785__$1;
(statearr_128809_129013[(1)] = (8));

} else {
var statearr_128810_129014 = state_128785__$1;
(statearr_128810_129014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (14))){
var inst_128764 = (state_128785[(11)]);
var inst_128762 = (state_128785[(8)]);
var inst_128762__$1 = (state_128785[(2)]);
var inst_128763 = (inst_128762__$1 == null);
var inst_128764__$1 = cljs.core.not.call(null,inst_128763);
var state_128785__$1 = (function (){var statearr_128811 = state_128785;
(statearr_128811[(11)] = inst_128764__$1);

(statearr_128811[(8)] = inst_128762__$1);

return statearr_128811;
})();
if(inst_128764__$1){
var statearr_128812_129018 = state_128785__$1;
(statearr_128812_129018[(1)] = (15));

} else {
var statearr_128813_129019 = state_128785__$1;
(statearr_128813_129019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (16))){
var inst_128764 = (state_128785[(11)]);
var state_128785__$1 = state_128785;
var statearr_128814_129020 = state_128785__$1;
(statearr_128814_129020[(2)] = inst_128764);

(statearr_128814_129020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (10))){
var inst_128756 = (state_128785[(2)]);
var state_128785__$1 = state_128785;
var statearr_128816_129021 = state_128785__$1;
(statearr_128816_129021[(2)] = inst_128756);

(statearr_128816_129021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (18))){
var inst_128767 = (state_128785[(2)]);
var state_128785__$1 = state_128785;
var statearr_128819_129024 = state_128785__$1;
(statearr_128819_129024[(2)] = inst_128767);

(statearr_128819_129024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128787 === (8))){
var inst_128753 = cljs.core.async.close_BANG_.call(null,to);
var state_128785__$1 = state_128785;
var statearr_128823_129031 = state_128785__$1;
(statearr_128823_129031[(2)] = inst_128753);

(statearr_128823_129031[(1)] = (10));


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
});})(c__15829__auto__,jobs,results,process__$1,async))
;
return ((function (switch__15806__auto__,c__15829__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0 = (function (){
var statearr_128824 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_128824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__);

(statearr_128824[(1)] = (1));

return statearr_128824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1 = (function (state_128785){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_128785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e128825){if((e128825 instanceof Object)){
var ex__15810__auto__ = e128825;
var statearr_128826_129035 = state_128785;
(statearr_128826_129035[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129036 = state_128785;
state_128785 = G__129036;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__ = function(state_128785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1.call(this,state_128785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15807__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__,jobs,results,process__$1,async))
})();
var state__15831__auto__ = (function (){var statearr_128827 = f__15830__auto__.call(null);
(statearr_128827[(6)] = c__15829__auto__);

return statearr_128827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__,jobs,results,process__$1,async))
);

return c__15829__auto__;
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
var G__129044 = arguments.length;
switch (G__129044) {
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
var G__129055 = arguments.length;
switch (G__129055) {
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
var G__129073 = arguments.length;
switch (G__129073) {
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
var c__15829__auto___129163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___129163,tc,fc){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___129163,tc,fc){
return (function (state_129107){
var state_val_129108 = (state_129107[(1)]);
if((state_val_129108 === (7))){
var inst_129101 = (state_129107[(2)]);
var state_129107__$1 = state_129107;
var statearr_129111_129164 = state_129107__$1;
(statearr_129111_129164[(2)] = inst_129101);

(statearr_129111_129164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129108 === (1))){
var state_129107__$1 = state_129107;
var statearr_129112_129165 = state_129107__$1;
(statearr_129112_129165[(2)] = null);

(statearr_129112_129165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129108 === (4))){
var inst_129080 = (state_129107[(7)]);
var inst_129080__$1 = (state_129107[(2)]);
var inst_129081 = (inst_129080__$1 == null);
var state_129107__$1 = (function (){var statearr_129113 = state_129107;
(statearr_129113[(7)] = inst_129080__$1);

return statearr_129113;
})();
if(cljs.core.truth_(inst_129081)){
var statearr_129114_129166 = state_129107__$1;
(statearr_129114_129166[(1)] = (5));

} else {
var statearr_129115_129167 = state_129107__$1;
(statearr_129115_129167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129108 === (13))){
var state_129107__$1 = state_129107;
var statearr_129116_129168 = state_129107__$1;
(statearr_129116_129168[(2)] = null);

(statearr_129116_129168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129108 === (6))){
var inst_129080 = (state_129107[(7)]);
var inst_129088 = p.call(null,inst_129080);
var state_129107__$1 = state_129107;
if(cljs.core.truth_(inst_129088)){
var statearr_129117_129170 = state_129107__$1;
(statearr_129117_129170[(1)] = (9));

} else {
var statearr_129118_129171 = state_129107__$1;
(statearr_129118_129171[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129108 === (3))){
var inst_129104 = (state_129107[(2)]);
var state_129107__$1 = state_129107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129107__$1,inst_129104);
} else {
if((state_val_129108 === (12))){
var state_129107__$1 = state_129107;
var statearr_129119_129172 = state_129107__$1;
(statearr_129119_129172[(2)] = null);

(statearr_129119_129172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129108 === (2))){
var state_129107__$1 = state_129107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129107__$1,(4),ch);
} else {
if((state_val_129108 === (11))){
var inst_129080 = (state_129107[(7)]);
var inst_129092 = (state_129107[(2)]);
var state_129107__$1 = state_129107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129107__$1,(8),inst_129092,inst_129080);
} else {
if((state_val_129108 === (9))){
var state_129107__$1 = state_129107;
var statearr_129133_129175 = state_129107__$1;
(statearr_129133_129175[(2)] = tc);

(statearr_129133_129175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129108 === (5))){
var inst_129083 = cljs.core.async.close_BANG_.call(null,tc);
var inst_129085 = cljs.core.async.close_BANG_.call(null,fc);
var state_129107__$1 = (function (){var statearr_129136 = state_129107;
(statearr_129136[(8)] = inst_129083);

return statearr_129136;
})();
var statearr_129137_129176 = state_129107__$1;
(statearr_129137_129176[(2)] = inst_129085);

(statearr_129137_129176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129108 === (14))){
var inst_129099 = (state_129107[(2)]);
var state_129107__$1 = state_129107;
var statearr_129138_129177 = state_129107__$1;
(statearr_129138_129177[(2)] = inst_129099);

(statearr_129138_129177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129108 === (10))){
var state_129107__$1 = state_129107;
var statearr_129145_129178 = state_129107__$1;
(statearr_129145_129178[(2)] = fc);

(statearr_129145_129178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129108 === (8))){
var inst_129094 = (state_129107[(2)]);
var state_129107__$1 = state_129107;
if(cljs.core.truth_(inst_129094)){
var statearr_129148_129179 = state_129107__$1;
(statearr_129148_129179[(1)] = (12));

} else {
var statearr_129149_129182 = state_129107__$1;
(statearr_129149_129182[(1)] = (13));

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
});})(c__15829__auto___129163,tc,fc))
;
return ((function (switch__15806__auto__,c__15829__auto___129163,tc,fc){
return (function() {
var cljs$core$async$state_machine__15807__auto__ = null;
var cljs$core$async$state_machine__15807__auto____0 = (function (){
var statearr_129154 = [null,null,null,null,null,null,null,null,null];
(statearr_129154[(0)] = cljs$core$async$state_machine__15807__auto__);

(statearr_129154[(1)] = (1));

return statearr_129154;
});
var cljs$core$async$state_machine__15807__auto____1 = (function (state_129107){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_129107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e129157){if((e129157 instanceof Object)){
var ex__15810__auto__ = e129157;
var statearr_129159_129185 = state_129107;
(statearr_129159_129185[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129186 = state_129107;
state_129107 = G__129186;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$state_machine__15807__auto__ = function(state_129107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15807__auto____1.call(this,state_129107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15807__auto____0;
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15807__auto____1;
return cljs$core$async$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___129163,tc,fc))
})();
var state__15831__auto__ = (function (){var statearr_129161 = f__15830__auto__.call(null);
(statearr_129161[(6)] = c__15829__auto___129163);

return statearr_129161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___129163,tc,fc))
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
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_129209){
var state_val_129210 = (state_129209[(1)]);
if((state_val_129210 === (7))){
var inst_129205 = (state_129209[(2)]);
var state_129209__$1 = state_129209;
var statearr_129213_129244 = state_129209__$1;
(statearr_129213_129244[(2)] = inst_129205);

(statearr_129213_129244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129210 === (1))){
var inst_129189 = init;
var state_129209__$1 = (function (){var statearr_129215 = state_129209;
(statearr_129215[(7)] = inst_129189);

return statearr_129215;
})();
var statearr_129216_129245 = state_129209__$1;
(statearr_129216_129245[(2)] = null);

(statearr_129216_129245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129210 === (4))){
var inst_129192 = (state_129209[(8)]);
var inst_129192__$1 = (state_129209[(2)]);
var inst_129193 = (inst_129192__$1 == null);
var state_129209__$1 = (function (){var statearr_129217 = state_129209;
(statearr_129217[(8)] = inst_129192__$1);

return statearr_129217;
})();
if(cljs.core.truth_(inst_129193)){
var statearr_129218_129246 = state_129209__$1;
(statearr_129218_129246[(1)] = (5));

} else {
var statearr_129219_129247 = state_129209__$1;
(statearr_129219_129247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129210 === (6))){
var inst_129192 = (state_129209[(8)]);
var inst_129196 = (state_129209[(9)]);
var inst_129189 = (state_129209[(7)]);
var inst_129196__$1 = f.call(null,inst_129189,inst_129192);
var inst_129197 = cljs.core.reduced_QMARK_.call(null,inst_129196__$1);
var state_129209__$1 = (function (){var statearr_129220 = state_129209;
(statearr_129220[(9)] = inst_129196__$1);

return statearr_129220;
})();
if(inst_129197){
var statearr_129221_129249 = state_129209__$1;
(statearr_129221_129249[(1)] = (8));

} else {
var statearr_129222_129250 = state_129209__$1;
(statearr_129222_129250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129210 === (3))){
var inst_129207 = (state_129209[(2)]);
var state_129209__$1 = state_129209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129209__$1,inst_129207);
} else {
if((state_val_129210 === (2))){
var state_129209__$1 = state_129209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129209__$1,(4),ch);
} else {
if((state_val_129210 === (9))){
var inst_129196 = (state_129209[(9)]);
var inst_129189 = inst_129196;
var state_129209__$1 = (function (){var statearr_129229 = state_129209;
(statearr_129229[(7)] = inst_129189);

return statearr_129229;
})();
var statearr_129230_129251 = state_129209__$1;
(statearr_129230_129251[(2)] = null);

(statearr_129230_129251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129210 === (5))){
var inst_129189 = (state_129209[(7)]);
var state_129209__$1 = state_129209;
var statearr_129231_129254 = state_129209__$1;
(statearr_129231_129254[(2)] = inst_129189);

(statearr_129231_129254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129210 === (10))){
var inst_129203 = (state_129209[(2)]);
var state_129209__$1 = state_129209;
var statearr_129233_129255 = state_129209__$1;
(statearr_129233_129255[(2)] = inst_129203);

(statearr_129233_129255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129210 === (8))){
var inst_129196 = (state_129209[(9)]);
var inst_129199 = cljs.core.deref.call(null,inst_129196);
var state_129209__$1 = state_129209;
var statearr_129235_129259 = state_129209__$1;
(statearr_129235_129259[(2)] = inst_129199);

(statearr_129235_129259[(1)] = (10));


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
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15807__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15807__auto____0 = (function (){
var statearr_129238 = [null,null,null,null,null,null,null,null,null,null];
(statearr_129238[(0)] = cljs$core$async$reduce_$_state_machine__15807__auto__);

(statearr_129238[(1)] = (1));

return statearr_129238;
});
var cljs$core$async$reduce_$_state_machine__15807__auto____1 = (function (state_129209){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_129209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e129239){if((e129239 instanceof Object)){
var ex__15810__auto__ = e129239;
var statearr_129241_129260 = state_129209;
(statearr_129241_129260[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129261 = state_129209;
state_129209 = G__129261;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15807__auto__ = function(state_129209){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15807__auto____1.call(this,state_129209);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15807__auto____0;
cljs$core$async$reduce_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15807__auto____1;
return cljs$core$async$reduce_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_129242 = f__15830__auto__.call(null);
(statearr_129242[(6)] = c__15829__auto__);

return statearr_129242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__,f__$1){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__,f__$1){
return (function (state_129267){
var state_val_129268 = (state_129267[(1)]);
if((state_val_129268 === (1))){
var inst_129262 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_129267__$1 = state_129267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129267__$1,(2),inst_129262);
} else {
if((state_val_129268 === (2))){
var inst_129264 = (state_129267[(2)]);
var inst_129265 = f__$1.call(null,inst_129264);
var state_129267__$1 = state_129267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129267__$1,inst_129265);
} else {
return null;
}
}
});})(c__15829__auto__,f__$1))
;
return ((function (switch__15806__auto__,c__15829__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15807__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15807__auto____0 = (function (){
var statearr_129269 = [null,null,null,null,null,null,null];
(statearr_129269[(0)] = cljs$core$async$transduce_$_state_machine__15807__auto__);

(statearr_129269[(1)] = (1));

return statearr_129269;
});
var cljs$core$async$transduce_$_state_machine__15807__auto____1 = (function (state_129267){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_129267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e129270){if((e129270 instanceof Object)){
var ex__15810__auto__ = e129270;
var statearr_129271_129280 = state_129267;
(statearr_129271_129280[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129281 = state_129267;
state_129267 = G__129281;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15807__auto__ = function(state_129267){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15807__auto____1.call(this,state_129267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15807__auto____0;
cljs$core$async$transduce_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15807__auto____1;
return cljs$core$async$transduce_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__,f__$1))
})();
var state__15831__auto__ = (function (){var statearr_129272 = f__15830__auto__.call(null);
(statearr_129272[(6)] = c__15829__auto__);

return statearr_129272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__,f__$1))
);

return c__15829__auto__;
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
var G__129283 = arguments.length;
switch (G__129283) {
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
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_129308){
var state_val_129309 = (state_129308[(1)]);
if((state_val_129309 === (7))){
var inst_129290 = (state_129308[(2)]);
var state_129308__$1 = state_129308;
var statearr_129310_129343 = state_129308__$1;
(statearr_129310_129343[(2)] = inst_129290);

(statearr_129310_129343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129309 === (1))){
var inst_129284 = cljs.core.seq.call(null,coll);
var inst_129285 = inst_129284;
var state_129308__$1 = (function (){var statearr_129311 = state_129308;
(statearr_129311[(7)] = inst_129285);

return statearr_129311;
})();
var statearr_129312_129344 = state_129308__$1;
(statearr_129312_129344[(2)] = null);

(statearr_129312_129344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129309 === (4))){
var inst_129285 = (state_129308[(7)]);
var inst_129288 = cljs.core.first.call(null,inst_129285);
var state_129308__$1 = state_129308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129308__$1,(7),ch,inst_129288);
} else {
if((state_val_129309 === (13))){
var inst_129302 = (state_129308[(2)]);
var state_129308__$1 = state_129308;
var statearr_129313_129345 = state_129308__$1;
(statearr_129313_129345[(2)] = inst_129302);

(statearr_129313_129345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129309 === (6))){
var inst_129293 = (state_129308[(2)]);
var state_129308__$1 = state_129308;
if(cljs.core.truth_(inst_129293)){
var statearr_129314_129346 = state_129308__$1;
(statearr_129314_129346[(1)] = (8));

} else {
var statearr_129315_129347 = state_129308__$1;
(statearr_129315_129347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129309 === (3))){
var inst_129306 = (state_129308[(2)]);
var state_129308__$1 = state_129308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129308__$1,inst_129306);
} else {
if((state_val_129309 === (12))){
var state_129308__$1 = state_129308;
var statearr_129316_129349 = state_129308__$1;
(statearr_129316_129349[(2)] = null);

(statearr_129316_129349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129309 === (2))){
var inst_129285 = (state_129308[(7)]);
var state_129308__$1 = state_129308;
if(cljs.core.truth_(inst_129285)){
var statearr_129317_129350 = state_129308__$1;
(statearr_129317_129350[(1)] = (4));

} else {
var statearr_129318_129351 = state_129308__$1;
(statearr_129318_129351[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129309 === (11))){
var inst_129299 = cljs.core.async.close_BANG_.call(null,ch);
var state_129308__$1 = state_129308;
var statearr_129319_129352 = state_129308__$1;
(statearr_129319_129352[(2)] = inst_129299);

(statearr_129319_129352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129309 === (9))){
var state_129308__$1 = state_129308;
if(cljs.core.truth_(close_QMARK_)){
var statearr_129320_129354 = state_129308__$1;
(statearr_129320_129354[(1)] = (11));

} else {
var statearr_129321_129355 = state_129308__$1;
(statearr_129321_129355[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129309 === (5))){
var inst_129285 = (state_129308[(7)]);
var state_129308__$1 = state_129308;
var statearr_129322_129356 = state_129308__$1;
(statearr_129322_129356[(2)] = inst_129285);

(statearr_129322_129356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129309 === (10))){
var inst_129304 = (state_129308[(2)]);
var state_129308__$1 = state_129308;
var statearr_129323_129361 = state_129308__$1;
(statearr_129323_129361[(2)] = inst_129304);

(statearr_129323_129361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129309 === (8))){
var inst_129285 = (state_129308[(7)]);
var inst_129295 = cljs.core.next.call(null,inst_129285);
var inst_129285__$1 = inst_129295;
var state_129308__$1 = (function (){var statearr_129324 = state_129308;
(statearr_129324[(7)] = inst_129285__$1);

return statearr_129324;
})();
var statearr_129325_129363 = state_129308__$1;
(statearr_129325_129363[(2)] = null);

(statearr_129325_129363[(1)] = (2));


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
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var cljs$core$async$state_machine__15807__auto__ = null;
var cljs$core$async$state_machine__15807__auto____0 = (function (){
var statearr_129326 = [null,null,null,null,null,null,null,null];
(statearr_129326[(0)] = cljs$core$async$state_machine__15807__auto__);

(statearr_129326[(1)] = (1));

return statearr_129326;
});
var cljs$core$async$state_machine__15807__auto____1 = (function (state_129308){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_129308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e129328){if((e129328 instanceof Object)){
var ex__15810__auto__ = e129328;
var statearr_129329_129364 = state_129308;
(statearr_129329_129364[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129366 = state_129308;
state_129308 = G__129366;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$state_machine__15807__auto__ = function(state_129308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15807__auto____1.call(this,state_129308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15807__auto____0;
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15807__auto____1;
return cljs$core$async$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_129330 = f__15830__auto__.call(null);
(statearr_129330[(6)] = c__15829__auto__);

return statearr_129330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async129407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async129407 = (function (ch,cs,meta129408){
this.ch = ch;
this.cs = cs;
this.meta129408 = meta129408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async129407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_129409,meta129408__$1){
var self__ = this;
var _129409__$1 = this;
return (new cljs.core.async.t_cljs$core$async129407(self__.ch,self__.cs,meta129408__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async129407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_129409){
var self__ = this;
var _129409__$1 = this;
return self__.meta129408;
});})(cs))
;

cljs.core.async.t_cljs$core$async129407.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async129407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async129407.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async129407.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async129407.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async129407.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async129407.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta129408","meta129408",1711786605,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async129407.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async129407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async129407";

cljs.core.async.t_cljs$core$async129407.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async129407");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async129407.
 */
cljs.core.async.__GT_t_cljs$core$async129407 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async129407(ch__$1,cs__$1,meta129408){
return (new cljs.core.async.t_cljs$core$async129407(ch__$1,cs__$1,meta129408));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async129407(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15829__auto___129715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___129715,cs,m,dchan,dctr,done){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___129715,cs,m,dchan,dctr,done){
return (function (state_129560){
var state_val_129561 = (state_129560[(1)]);
if((state_val_129561 === (7))){
var inst_129554 = (state_129560[(2)]);
var state_129560__$1 = state_129560;
var statearr_129563_129726 = state_129560__$1;
(statearr_129563_129726[(2)] = inst_129554);

(statearr_129563_129726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (20))){
var inst_129449 = (state_129560[(7)]);
var inst_129463 = cljs.core.first.call(null,inst_129449);
var inst_129464 = cljs.core.nth.call(null,inst_129463,(0),null);
var inst_129465 = cljs.core.nth.call(null,inst_129463,(1),null);
var state_129560__$1 = (function (){var statearr_129564 = state_129560;
(statearr_129564[(8)] = inst_129464);

return statearr_129564;
})();
if(cljs.core.truth_(inst_129465)){
var statearr_129565_129731 = state_129560__$1;
(statearr_129565_129731[(1)] = (22));

} else {
var statearr_129566_129733 = state_129560__$1;
(statearr_129566_129733[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (27))){
var inst_129418 = (state_129560[(9)]);
var inst_129493 = (state_129560[(10)]);
var inst_129500 = (state_129560[(11)]);
var inst_129495 = (state_129560[(12)]);
var inst_129500__$1 = cljs.core._nth.call(null,inst_129493,inst_129495);
var inst_129501 = cljs.core.async.put_BANG_.call(null,inst_129500__$1,inst_129418,done);
var state_129560__$1 = (function (){var statearr_129567 = state_129560;
(statearr_129567[(11)] = inst_129500__$1);

return statearr_129567;
})();
if(cljs.core.truth_(inst_129501)){
var statearr_129568_129743 = state_129560__$1;
(statearr_129568_129743[(1)] = (30));

} else {
var statearr_129569_129744 = state_129560__$1;
(statearr_129569_129744[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (1))){
var state_129560__$1 = state_129560;
var statearr_129570_129745 = state_129560__$1;
(statearr_129570_129745[(2)] = null);

(statearr_129570_129745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (24))){
var inst_129449 = (state_129560[(7)]);
var inst_129470 = (state_129560[(2)]);
var inst_129471 = cljs.core.next.call(null,inst_129449);
var inst_129427 = inst_129471;
var inst_129428 = null;
var inst_129429 = (0);
var inst_129430 = (0);
var state_129560__$1 = (function (){var statearr_129571 = state_129560;
(statearr_129571[(13)] = inst_129428);

(statearr_129571[(14)] = inst_129430);

(statearr_129571[(15)] = inst_129427);

(statearr_129571[(16)] = inst_129470);

(statearr_129571[(17)] = inst_129429);

return statearr_129571;
})();
var statearr_129574_129758 = state_129560__$1;
(statearr_129574_129758[(2)] = null);

(statearr_129574_129758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (39))){
var state_129560__$1 = state_129560;
var statearr_129580_129759 = state_129560__$1;
(statearr_129580_129759[(2)] = null);

(statearr_129580_129759[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (4))){
var inst_129418 = (state_129560[(9)]);
var inst_129418__$1 = (state_129560[(2)]);
var inst_129419 = (inst_129418__$1 == null);
var state_129560__$1 = (function (){var statearr_129581 = state_129560;
(statearr_129581[(9)] = inst_129418__$1);

return statearr_129581;
})();
if(cljs.core.truth_(inst_129419)){
var statearr_129582_129760 = state_129560__$1;
(statearr_129582_129760[(1)] = (5));

} else {
var statearr_129583_129761 = state_129560__$1;
(statearr_129583_129761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (15))){
var inst_129428 = (state_129560[(13)]);
var inst_129430 = (state_129560[(14)]);
var inst_129427 = (state_129560[(15)]);
var inst_129429 = (state_129560[(17)]);
var inst_129445 = (state_129560[(2)]);
var inst_129446 = (inst_129430 + (1));
var tmp129576 = inst_129428;
var tmp129577 = inst_129427;
var tmp129578 = inst_129429;
var inst_129427__$1 = tmp129577;
var inst_129428__$1 = tmp129576;
var inst_129429__$1 = tmp129578;
var inst_129430__$1 = inst_129446;
var state_129560__$1 = (function (){var statearr_129585 = state_129560;
(statearr_129585[(13)] = inst_129428__$1);

(statearr_129585[(14)] = inst_129430__$1);

(statearr_129585[(18)] = inst_129445);

(statearr_129585[(15)] = inst_129427__$1);

(statearr_129585[(17)] = inst_129429__$1);

return statearr_129585;
})();
var statearr_129587_129764 = state_129560__$1;
(statearr_129587_129764[(2)] = null);

(statearr_129587_129764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (21))){
var inst_129474 = (state_129560[(2)]);
var state_129560__$1 = state_129560;
var statearr_129591_129767 = state_129560__$1;
(statearr_129591_129767[(2)] = inst_129474);

(statearr_129591_129767[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (31))){
var inst_129500 = (state_129560[(11)]);
var inst_129504 = done.call(null,null);
var inst_129505 = cljs.core.async.untap_STAR_.call(null,m,inst_129500);
var state_129560__$1 = (function (){var statearr_129592 = state_129560;
(statearr_129592[(19)] = inst_129504);

return statearr_129592;
})();
var statearr_129593_129775 = state_129560__$1;
(statearr_129593_129775[(2)] = inst_129505);

(statearr_129593_129775[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (32))){
var inst_129492 = (state_129560[(20)]);
var inst_129493 = (state_129560[(10)]);
var inst_129494 = (state_129560[(21)]);
var inst_129495 = (state_129560[(12)]);
var inst_129507 = (state_129560[(2)]);
var inst_129509 = (inst_129495 + (1));
var tmp129588 = inst_129492;
var tmp129589 = inst_129493;
var tmp129590 = inst_129494;
var inst_129492__$1 = tmp129588;
var inst_129493__$1 = tmp129589;
var inst_129494__$1 = tmp129590;
var inst_129495__$1 = inst_129509;
var state_129560__$1 = (function (){var statearr_129594 = state_129560;
(statearr_129594[(20)] = inst_129492__$1);

(statearr_129594[(10)] = inst_129493__$1);

(statearr_129594[(22)] = inst_129507);

(statearr_129594[(21)] = inst_129494__$1);

(statearr_129594[(12)] = inst_129495__$1);

return statearr_129594;
})();
var statearr_129595_129779 = state_129560__$1;
(statearr_129595_129779[(2)] = null);

(statearr_129595_129779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (40))){
var inst_129526 = (state_129560[(23)]);
var inst_129530 = done.call(null,null);
var inst_129531 = cljs.core.async.untap_STAR_.call(null,m,inst_129526);
var state_129560__$1 = (function (){var statearr_129596 = state_129560;
(statearr_129596[(24)] = inst_129530);

return statearr_129596;
})();
var statearr_129597_129780 = state_129560__$1;
(statearr_129597_129780[(2)] = inst_129531);

(statearr_129597_129780[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (33))){
var inst_129512 = (state_129560[(25)]);
var inst_129519 = cljs.core.chunked_seq_QMARK_.call(null,inst_129512);
var state_129560__$1 = state_129560;
if(inst_129519){
var statearr_129598_129783 = state_129560__$1;
(statearr_129598_129783[(1)] = (36));

} else {
var statearr_129599_129784 = state_129560__$1;
(statearr_129599_129784[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (13))){
var inst_129439 = (state_129560[(26)]);
var inst_129442 = cljs.core.async.close_BANG_.call(null,inst_129439);
var state_129560__$1 = state_129560;
var statearr_129600_129789 = state_129560__$1;
(statearr_129600_129789[(2)] = inst_129442);

(statearr_129600_129789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (22))){
var inst_129464 = (state_129560[(8)]);
var inst_129467 = cljs.core.async.close_BANG_.call(null,inst_129464);
var state_129560__$1 = state_129560;
var statearr_129601_129791 = state_129560__$1;
(statearr_129601_129791[(2)] = inst_129467);

(statearr_129601_129791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (36))){
var inst_129512 = (state_129560[(25)]);
var inst_129521 = cljs.core.chunk_first.call(null,inst_129512);
var inst_129522 = cljs.core.chunk_rest.call(null,inst_129512);
var inst_129523 = cljs.core.count.call(null,inst_129521);
var inst_129492 = inst_129522;
var inst_129493 = inst_129521;
var inst_129494 = inst_129523;
var inst_129495 = (0);
var state_129560__$1 = (function (){var statearr_129602 = state_129560;
(statearr_129602[(20)] = inst_129492);

(statearr_129602[(10)] = inst_129493);

(statearr_129602[(21)] = inst_129494);

(statearr_129602[(12)] = inst_129495);

return statearr_129602;
})();
var statearr_129606_129794 = state_129560__$1;
(statearr_129606_129794[(2)] = null);

(statearr_129606_129794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (41))){
var inst_129512 = (state_129560[(25)]);
var inst_129533 = (state_129560[(2)]);
var inst_129534 = cljs.core.next.call(null,inst_129512);
var inst_129492 = inst_129534;
var inst_129493 = null;
var inst_129494 = (0);
var inst_129495 = (0);
var state_129560__$1 = (function (){var statearr_129608 = state_129560;
(statearr_129608[(20)] = inst_129492);

(statearr_129608[(10)] = inst_129493);

(statearr_129608[(21)] = inst_129494);

(statearr_129608[(27)] = inst_129533);

(statearr_129608[(12)] = inst_129495);

return statearr_129608;
})();
var statearr_129609_129797 = state_129560__$1;
(statearr_129609_129797[(2)] = null);

(statearr_129609_129797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (43))){
var state_129560__$1 = state_129560;
var statearr_129610_129798 = state_129560__$1;
(statearr_129610_129798[(2)] = null);

(statearr_129610_129798[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (29))){
var inst_129542 = (state_129560[(2)]);
var state_129560__$1 = state_129560;
var statearr_129611_129803 = state_129560__$1;
(statearr_129611_129803[(2)] = inst_129542);

(statearr_129611_129803[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (44))){
var inst_129551 = (state_129560[(2)]);
var state_129560__$1 = (function (){var statearr_129612 = state_129560;
(statearr_129612[(28)] = inst_129551);

return statearr_129612;
})();
var statearr_129613_129805 = state_129560__$1;
(statearr_129613_129805[(2)] = null);

(statearr_129613_129805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (6))){
var inst_129484 = (state_129560[(29)]);
var inst_129483 = cljs.core.deref.call(null,cs);
var inst_129484__$1 = cljs.core.keys.call(null,inst_129483);
var inst_129485 = cljs.core.count.call(null,inst_129484__$1);
var inst_129486 = cljs.core.reset_BANG_.call(null,dctr,inst_129485);
var inst_129491 = cljs.core.seq.call(null,inst_129484__$1);
var inst_129492 = inst_129491;
var inst_129493 = null;
var inst_129494 = (0);
var inst_129495 = (0);
var state_129560__$1 = (function (){var statearr_129615 = state_129560;
(statearr_129615[(29)] = inst_129484__$1);

(statearr_129615[(20)] = inst_129492);

(statearr_129615[(10)] = inst_129493);

(statearr_129615[(21)] = inst_129494);

(statearr_129615[(12)] = inst_129495);

(statearr_129615[(30)] = inst_129486);

return statearr_129615;
})();
var statearr_129616_129808 = state_129560__$1;
(statearr_129616_129808[(2)] = null);

(statearr_129616_129808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (28))){
var inst_129512 = (state_129560[(25)]);
var inst_129492 = (state_129560[(20)]);
var inst_129512__$1 = cljs.core.seq.call(null,inst_129492);
var state_129560__$1 = (function (){var statearr_129617 = state_129560;
(statearr_129617[(25)] = inst_129512__$1);

return statearr_129617;
})();
if(inst_129512__$1){
var statearr_129618_129811 = state_129560__$1;
(statearr_129618_129811[(1)] = (33));

} else {
var statearr_129619_129816 = state_129560__$1;
(statearr_129619_129816[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (25))){
var inst_129494 = (state_129560[(21)]);
var inst_129495 = (state_129560[(12)]);
var inst_129497 = (inst_129495 < inst_129494);
var inst_129498 = inst_129497;
var state_129560__$1 = state_129560;
if(cljs.core.truth_(inst_129498)){
var statearr_129620_129820 = state_129560__$1;
(statearr_129620_129820[(1)] = (27));

} else {
var statearr_129621_129826 = state_129560__$1;
(statearr_129621_129826[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (34))){
var state_129560__$1 = state_129560;
var statearr_129622_129828 = state_129560__$1;
(statearr_129622_129828[(2)] = null);

(statearr_129622_129828[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (17))){
var state_129560__$1 = state_129560;
var statearr_129623_129831 = state_129560__$1;
(statearr_129623_129831[(2)] = null);

(statearr_129623_129831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (3))){
var inst_129556 = (state_129560[(2)]);
var state_129560__$1 = state_129560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129560__$1,inst_129556);
} else {
if((state_val_129561 === (12))){
var inst_129479 = (state_129560[(2)]);
var state_129560__$1 = state_129560;
var statearr_129624_129833 = state_129560__$1;
(statearr_129624_129833[(2)] = inst_129479);

(statearr_129624_129833[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (2))){
var state_129560__$1 = state_129560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129560__$1,(4),ch);
} else {
if((state_val_129561 === (23))){
var state_129560__$1 = state_129560;
var statearr_129627_129836 = state_129560__$1;
(statearr_129627_129836[(2)] = null);

(statearr_129627_129836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (35))){
var inst_129540 = (state_129560[(2)]);
var state_129560__$1 = state_129560;
var statearr_129629_129839 = state_129560__$1;
(statearr_129629_129839[(2)] = inst_129540);

(statearr_129629_129839[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (19))){
var inst_129449 = (state_129560[(7)]);
var inst_129455 = cljs.core.chunk_first.call(null,inst_129449);
var inst_129456 = cljs.core.chunk_rest.call(null,inst_129449);
var inst_129457 = cljs.core.count.call(null,inst_129455);
var inst_129427 = inst_129456;
var inst_129428 = inst_129455;
var inst_129429 = inst_129457;
var inst_129430 = (0);
var state_129560__$1 = (function (){var statearr_129630 = state_129560;
(statearr_129630[(13)] = inst_129428);

(statearr_129630[(14)] = inst_129430);

(statearr_129630[(15)] = inst_129427);

(statearr_129630[(17)] = inst_129429);

return statearr_129630;
})();
var statearr_129631_129853 = state_129560__$1;
(statearr_129631_129853[(2)] = null);

(statearr_129631_129853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (11))){
var inst_129449 = (state_129560[(7)]);
var inst_129427 = (state_129560[(15)]);
var inst_129449__$1 = cljs.core.seq.call(null,inst_129427);
var state_129560__$1 = (function (){var statearr_129632 = state_129560;
(statearr_129632[(7)] = inst_129449__$1);

return statearr_129632;
})();
if(inst_129449__$1){
var statearr_129633_129855 = state_129560__$1;
(statearr_129633_129855[(1)] = (16));

} else {
var statearr_129634_129856 = state_129560__$1;
(statearr_129634_129856[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (9))){
var inst_129481 = (state_129560[(2)]);
var state_129560__$1 = state_129560;
var statearr_129635_129857 = state_129560__$1;
(statearr_129635_129857[(2)] = inst_129481);

(statearr_129635_129857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (5))){
var inst_129425 = cljs.core.deref.call(null,cs);
var inst_129426 = cljs.core.seq.call(null,inst_129425);
var inst_129427 = inst_129426;
var inst_129428 = null;
var inst_129429 = (0);
var inst_129430 = (0);
var state_129560__$1 = (function (){var statearr_129636 = state_129560;
(statearr_129636[(13)] = inst_129428);

(statearr_129636[(14)] = inst_129430);

(statearr_129636[(15)] = inst_129427);

(statearr_129636[(17)] = inst_129429);

return statearr_129636;
})();
var statearr_129637_129870 = state_129560__$1;
(statearr_129637_129870[(2)] = null);

(statearr_129637_129870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (14))){
var state_129560__$1 = state_129560;
var statearr_129638_129872 = state_129560__$1;
(statearr_129638_129872[(2)] = null);

(statearr_129638_129872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (45))){
var inst_129548 = (state_129560[(2)]);
var state_129560__$1 = state_129560;
var statearr_129640_129878 = state_129560__$1;
(statearr_129640_129878[(2)] = inst_129548);

(statearr_129640_129878[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (26))){
var inst_129484 = (state_129560[(29)]);
var inst_129544 = (state_129560[(2)]);
var inst_129545 = cljs.core.seq.call(null,inst_129484);
var state_129560__$1 = (function (){var statearr_129644 = state_129560;
(statearr_129644[(31)] = inst_129544);

return statearr_129644;
})();
if(inst_129545){
var statearr_129645_129879 = state_129560__$1;
(statearr_129645_129879[(1)] = (42));

} else {
var statearr_129646_129880 = state_129560__$1;
(statearr_129646_129880[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (16))){
var inst_129449 = (state_129560[(7)]);
var inst_129453 = cljs.core.chunked_seq_QMARK_.call(null,inst_129449);
var state_129560__$1 = state_129560;
if(inst_129453){
var statearr_129647_129885 = state_129560__$1;
(statearr_129647_129885[(1)] = (19));

} else {
var statearr_129648_129886 = state_129560__$1;
(statearr_129648_129886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (38))){
var inst_129537 = (state_129560[(2)]);
var state_129560__$1 = state_129560;
var statearr_129649_129895 = state_129560__$1;
(statearr_129649_129895[(2)] = inst_129537);

(statearr_129649_129895[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (30))){
var state_129560__$1 = state_129560;
var statearr_129650_129899 = state_129560__$1;
(statearr_129650_129899[(2)] = null);

(statearr_129650_129899[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (10))){
var inst_129428 = (state_129560[(13)]);
var inst_129430 = (state_129560[(14)]);
var inst_129438 = cljs.core._nth.call(null,inst_129428,inst_129430);
var inst_129439 = cljs.core.nth.call(null,inst_129438,(0),null);
var inst_129440 = cljs.core.nth.call(null,inst_129438,(1),null);
var state_129560__$1 = (function (){var statearr_129651 = state_129560;
(statearr_129651[(26)] = inst_129439);

return statearr_129651;
})();
if(cljs.core.truth_(inst_129440)){
var statearr_129652_129903 = state_129560__$1;
(statearr_129652_129903[(1)] = (13));

} else {
var statearr_129653_129904 = state_129560__$1;
(statearr_129653_129904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (18))){
var inst_129477 = (state_129560[(2)]);
var state_129560__$1 = state_129560;
var statearr_129654_129905 = state_129560__$1;
(statearr_129654_129905[(2)] = inst_129477);

(statearr_129654_129905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (42))){
var state_129560__$1 = state_129560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129560__$1,(45),dchan);
} else {
if((state_val_129561 === (37))){
var inst_129512 = (state_129560[(25)]);
var inst_129418 = (state_129560[(9)]);
var inst_129526 = (state_129560[(23)]);
var inst_129526__$1 = cljs.core.first.call(null,inst_129512);
var inst_129527 = cljs.core.async.put_BANG_.call(null,inst_129526__$1,inst_129418,done);
var state_129560__$1 = (function (){var statearr_129658 = state_129560;
(statearr_129658[(23)] = inst_129526__$1);

return statearr_129658;
})();
if(cljs.core.truth_(inst_129527)){
var statearr_129659_129918 = state_129560__$1;
(statearr_129659_129918[(1)] = (39));

} else {
var statearr_129660_129919 = state_129560__$1;
(statearr_129660_129919[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129561 === (8))){
var inst_129430 = (state_129560[(14)]);
var inst_129429 = (state_129560[(17)]);
var inst_129432 = (inst_129430 < inst_129429);
var inst_129433 = inst_129432;
var state_129560__$1 = state_129560;
if(cljs.core.truth_(inst_129433)){
var statearr_129661_129926 = state_129560__$1;
(statearr_129661_129926[(1)] = (10));

} else {
var statearr_129662_129927 = state_129560__$1;
(statearr_129662_129927[(1)] = (11));

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
});})(c__15829__auto___129715,cs,m,dchan,dctr,done))
;
return ((function (switch__15806__auto__,c__15829__auto___129715,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15807__auto__ = null;
var cljs$core$async$mult_$_state_machine__15807__auto____0 = (function (){
var statearr_129663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_129663[(0)] = cljs$core$async$mult_$_state_machine__15807__auto__);

(statearr_129663[(1)] = (1));

return statearr_129663;
});
var cljs$core$async$mult_$_state_machine__15807__auto____1 = (function (state_129560){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_129560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e129664){if((e129664 instanceof Object)){
var ex__15810__auto__ = e129664;
var statearr_129669_129932 = state_129560;
(statearr_129669_129932[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129937 = state_129560;
state_129560 = G__129937;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15807__auto__ = function(state_129560){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15807__auto____1.call(this,state_129560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15807__auto____0;
cljs$core$async$mult_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15807__auto____1;
return cljs$core$async$mult_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___129715,cs,m,dchan,dctr,done))
})();
var state__15831__auto__ = (function (){var statearr_129674 = f__15830__auto__.call(null);
(statearr_129674[(6)] = c__15829__auto___129715);

return statearr_129674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___129715,cs,m,dchan,dctr,done))
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
var G__129948 = arguments.length;
switch (G__129948) {
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
var len__4499__auto___130006 = arguments.length;
var i__4500__auto___130007 = (0);
while(true){
if((i__4500__auto___130007 < len__4499__auto___130006)){
args__4502__auto__.push((arguments[i__4500__auto___130007]));

var G__130008 = (i__4500__auto___130007 + (1));
i__4500__auto___130007 = G__130008;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__130000){
var map__130001 = p__130000;
var map__130001__$1 = ((((!((map__130001 == null)))?(((((map__130001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__130001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__130001):map__130001);
var opts = map__130001__$1;
var statearr_130003_130009 = state;
(statearr_130003_130009[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__130001,map__130001__$1,opts){
return (function (val){
var statearr_130004_130010 = state;
(statearr_130004_130010[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__130001,map__130001__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_130005_130011 = state;
(statearr_130005_130011[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq129996){
var G__129997 = cljs.core.first.call(null,seq129996);
var seq129996__$1 = cljs.core.next.call(null,seq129996);
var G__129998 = cljs.core.first.call(null,seq129996__$1);
var seq129996__$2 = cljs.core.next.call(null,seq129996__$1);
var G__129999 = cljs.core.first.call(null,seq129996__$2);
var seq129996__$3 = cljs.core.next.call(null,seq129996__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__129997,G__129998,G__129999,seq129996__$3);
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
if(typeof cljs.core.async.t_cljs$core$async130012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async130012 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta130013){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta130013 = meta130013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async130012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_130014,meta130013__$1){
var self__ = this;
var _130014__$1 = this;
return (new cljs.core.async.t_cljs$core$async130012(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta130013__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async130012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_130014){
var self__ = this;
var _130014__$1 = this;
return self__.meta130013;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async130012.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async130012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async130012.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async130012.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async130012.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async130012.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async130012.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async130012.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async130012.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta130013","meta130013",-921785779,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async130012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async130012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async130012";

cljs.core.async.t_cljs$core$async130012.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async130012");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async130012.
 */
cljs.core.async.__GT_t_cljs$core$async130012 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async130012(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta130013){
return (new cljs.core.async.t_cljs$core$async130012(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta130013));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async130012(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15829__auto___130186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___130186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___130186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_130116){
var state_val_130117 = (state_130116[(1)]);
if((state_val_130117 === (7))){
var inst_130031 = (state_130116[(2)]);
var state_130116__$1 = state_130116;
var statearr_130118_130191 = state_130116__$1;
(statearr_130118_130191[(2)] = inst_130031);

(statearr_130118_130191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (20))){
var inst_130043 = (state_130116[(7)]);
var state_130116__$1 = state_130116;
var statearr_130119_130192 = state_130116__$1;
(statearr_130119_130192[(2)] = inst_130043);

(statearr_130119_130192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (27))){
var state_130116__$1 = state_130116;
var statearr_130120_130194 = state_130116__$1;
(statearr_130120_130194[(2)] = null);

(statearr_130120_130194[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (1))){
var inst_130018 = (state_130116[(8)]);
var inst_130018__$1 = calc_state.call(null);
var inst_130020 = (inst_130018__$1 == null);
var inst_130021 = cljs.core.not.call(null,inst_130020);
var state_130116__$1 = (function (){var statearr_130121 = state_130116;
(statearr_130121[(8)] = inst_130018__$1);

return statearr_130121;
})();
if(inst_130021){
var statearr_130122_130195 = state_130116__$1;
(statearr_130122_130195[(1)] = (2));

} else {
var statearr_130123_130196 = state_130116__$1;
(statearr_130123_130196[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (24))){
var inst_130076 = (state_130116[(9)]);
var inst_130067 = (state_130116[(10)]);
var inst_130090 = (state_130116[(11)]);
var inst_130090__$1 = inst_130067.call(null,inst_130076);
var state_130116__$1 = (function (){var statearr_130124 = state_130116;
(statearr_130124[(11)] = inst_130090__$1);

return statearr_130124;
})();
if(cljs.core.truth_(inst_130090__$1)){
var statearr_130125_130198 = state_130116__$1;
(statearr_130125_130198[(1)] = (29));

} else {
var statearr_130126_130201 = state_130116__$1;
(statearr_130126_130201[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (4))){
var inst_130034 = (state_130116[(2)]);
var state_130116__$1 = state_130116;
if(cljs.core.truth_(inst_130034)){
var statearr_130127_130207 = state_130116__$1;
(statearr_130127_130207[(1)] = (8));

} else {
var statearr_130128_130208 = state_130116__$1;
(statearr_130128_130208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (15))){
var inst_130061 = (state_130116[(2)]);
var state_130116__$1 = state_130116;
if(cljs.core.truth_(inst_130061)){
var statearr_130129_130210 = state_130116__$1;
(statearr_130129_130210[(1)] = (19));

} else {
var statearr_130130_130211 = state_130116__$1;
(statearr_130130_130211[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (21))){
var inst_130066 = (state_130116[(12)]);
var inst_130066__$1 = (state_130116[(2)]);
var inst_130067 = cljs.core.get.call(null,inst_130066__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_130068 = cljs.core.get.call(null,inst_130066__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_130069 = cljs.core.get.call(null,inst_130066__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_130116__$1 = (function (){var statearr_130131 = state_130116;
(statearr_130131[(10)] = inst_130067);

(statearr_130131[(13)] = inst_130068);

(statearr_130131[(12)] = inst_130066__$1);

return statearr_130131;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_130116__$1,(22),inst_130069);
} else {
if((state_val_130117 === (31))){
var inst_130098 = (state_130116[(2)]);
var state_130116__$1 = state_130116;
if(cljs.core.truth_(inst_130098)){
var statearr_130132_130214 = state_130116__$1;
(statearr_130132_130214[(1)] = (32));

} else {
var statearr_130133_130215 = state_130116__$1;
(statearr_130133_130215[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (32))){
var inst_130075 = (state_130116[(14)]);
var state_130116__$1 = state_130116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130116__$1,(35),out,inst_130075);
} else {
if((state_val_130117 === (33))){
var inst_130066 = (state_130116[(12)]);
var inst_130043 = inst_130066;
var state_130116__$1 = (function (){var statearr_130134 = state_130116;
(statearr_130134[(7)] = inst_130043);

return statearr_130134;
})();
var statearr_130135_130216 = state_130116__$1;
(statearr_130135_130216[(2)] = null);

(statearr_130135_130216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (13))){
var inst_130043 = (state_130116[(7)]);
var inst_130050 = inst_130043.cljs$lang$protocol_mask$partition0$;
var inst_130051 = (inst_130050 & (64));
var inst_130052 = inst_130043.cljs$core$ISeq$;
var inst_130053 = (cljs.core.PROTOCOL_SENTINEL === inst_130052);
var inst_130054 = ((inst_130051) || (inst_130053));
var state_130116__$1 = state_130116;
if(cljs.core.truth_(inst_130054)){
var statearr_130136_130218 = state_130116__$1;
(statearr_130136_130218[(1)] = (16));

} else {
var statearr_130137_130219 = state_130116__$1;
(statearr_130137_130219[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (22))){
var inst_130076 = (state_130116[(9)]);
var inst_130075 = (state_130116[(14)]);
var inst_130074 = (state_130116[(2)]);
var inst_130075__$1 = cljs.core.nth.call(null,inst_130074,(0),null);
var inst_130076__$1 = cljs.core.nth.call(null,inst_130074,(1),null);
var inst_130077 = (inst_130075__$1 == null);
var inst_130078 = cljs.core._EQ_.call(null,inst_130076__$1,change);
var inst_130079 = ((inst_130077) || (inst_130078));
var state_130116__$1 = (function (){var statearr_130138 = state_130116;
(statearr_130138[(9)] = inst_130076__$1);

(statearr_130138[(14)] = inst_130075__$1);

return statearr_130138;
})();
if(cljs.core.truth_(inst_130079)){
var statearr_130139_130220 = state_130116__$1;
(statearr_130139_130220[(1)] = (23));

} else {
var statearr_130140_130221 = state_130116__$1;
(statearr_130140_130221[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (36))){
var inst_130066 = (state_130116[(12)]);
var inst_130043 = inst_130066;
var state_130116__$1 = (function (){var statearr_130141 = state_130116;
(statearr_130141[(7)] = inst_130043);

return statearr_130141;
})();
var statearr_130142_130224 = state_130116__$1;
(statearr_130142_130224[(2)] = null);

(statearr_130142_130224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (29))){
var inst_130090 = (state_130116[(11)]);
var state_130116__$1 = state_130116;
var statearr_130143_130226 = state_130116__$1;
(statearr_130143_130226[(2)] = inst_130090);

(statearr_130143_130226[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (6))){
var state_130116__$1 = state_130116;
var statearr_130144_130229 = state_130116__$1;
(statearr_130144_130229[(2)] = false);

(statearr_130144_130229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (28))){
var inst_130086 = (state_130116[(2)]);
var inst_130087 = calc_state.call(null);
var inst_130043 = inst_130087;
var state_130116__$1 = (function (){var statearr_130145 = state_130116;
(statearr_130145[(7)] = inst_130043);

(statearr_130145[(15)] = inst_130086);

return statearr_130145;
})();
var statearr_130146_130230 = state_130116__$1;
(statearr_130146_130230[(2)] = null);

(statearr_130146_130230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (25))){
var inst_130112 = (state_130116[(2)]);
var state_130116__$1 = state_130116;
var statearr_130147_130233 = state_130116__$1;
(statearr_130147_130233[(2)] = inst_130112);

(statearr_130147_130233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (34))){
var inst_130110 = (state_130116[(2)]);
var state_130116__$1 = state_130116;
var statearr_130148_130238 = state_130116__$1;
(statearr_130148_130238[(2)] = inst_130110);

(statearr_130148_130238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (17))){
var state_130116__$1 = state_130116;
var statearr_130149_130239 = state_130116__$1;
(statearr_130149_130239[(2)] = false);

(statearr_130149_130239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (3))){
var state_130116__$1 = state_130116;
var statearr_130150_130240 = state_130116__$1;
(statearr_130150_130240[(2)] = false);

(statearr_130150_130240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (12))){
var inst_130114 = (state_130116[(2)]);
var state_130116__$1 = state_130116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_130116__$1,inst_130114);
} else {
if((state_val_130117 === (2))){
var inst_130018 = (state_130116[(8)]);
var inst_130023 = inst_130018.cljs$lang$protocol_mask$partition0$;
var inst_130024 = (inst_130023 & (64));
var inst_130025 = inst_130018.cljs$core$ISeq$;
var inst_130026 = (cljs.core.PROTOCOL_SENTINEL === inst_130025);
var inst_130027 = ((inst_130024) || (inst_130026));
var state_130116__$1 = state_130116;
if(cljs.core.truth_(inst_130027)){
var statearr_130151_130247 = state_130116__$1;
(statearr_130151_130247[(1)] = (5));

} else {
var statearr_130152_130248 = state_130116__$1;
(statearr_130152_130248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (23))){
var inst_130075 = (state_130116[(14)]);
var inst_130081 = (inst_130075 == null);
var state_130116__$1 = state_130116;
if(cljs.core.truth_(inst_130081)){
var statearr_130153_130253 = state_130116__$1;
(statearr_130153_130253[(1)] = (26));

} else {
var statearr_130154_130254 = state_130116__$1;
(statearr_130154_130254[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (35))){
var inst_130101 = (state_130116[(2)]);
var state_130116__$1 = state_130116;
if(cljs.core.truth_(inst_130101)){
var statearr_130155_130255 = state_130116__$1;
(statearr_130155_130255[(1)] = (36));

} else {
var statearr_130156_130256 = state_130116__$1;
(statearr_130156_130256[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (19))){
var inst_130043 = (state_130116[(7)]);
var inst_130063 = cljs.core.apply.call(null,cljs.core.hash_map,inst_130043);
var state_130116__$1 = state_130116;
var statearr_130157_130259 = state_130116__$1;
(statearr_130157_130259[(2)] = inst_130063);

(statearr_130157_130259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (11))){
var inst_130043 = (state_130116[(7)]);
var inst_130047 = (inst_130043 == null);
var inst_130048 = cljs.core.not.call(null,inst_130047);
var state_130116__$1 = state_130116;
if(inst_130048){
var statearr_130158_130273 = state_130116__$1;
(statearr_130158_130273[(1)] = (13));

} else {
var statearr_130159_130274 = state_130116__$1;
(statearr_130159_130274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (9))){
var inst_130018 = (state_130116[(8)]);
var state_130116__$1 = state_130116;
var statearr_130160_130277 = state_130116__$1;
(statearr_130160_130277[(2)] = inst_130018);

(statearr_130160_130277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (5))){
var state_130116__$1 = state_130116;
var statearr_130161_130284 = state_130116__$1;
(statearr_130161_130284[(2)] = true);

(statearr_130161_130284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (14))){
var state_130116__$1 = state_130116;
var statearr_130162_130285 = state_130116__$1;
(statearr_130162_130285[(2)] = false);

(statearr_130162_130285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (26))){
var inst_130076 = (state_130116[(9)]);
var inst_130083 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_130076);
var state_130116__$1 = state_130116;
var statearr_130163_130290 = state_130116__$1;
(statearr_130163_130290[(2)] = inst_130083);

(statearr_130163_130290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (16))){
var state_130116__$1 = state_130116;
var statearr_130164_130291 = state_130116__$1;
(statearr_130164_130291[(2)] = true);

(statearr_130164_130291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (38))){
var inst_130106 = (state_130116[(2)]);
var state_130116__$1 = state_130116;
var statearr_130165_130292 = state_130116__$1;
(statearr_130165_130292[(2)] = inst_130106);

(statearr_130165_130292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (30))){
var inst_130076 = (state_130116[(9)]);
var inst_130067 = (state_130116[(10)]);
var inst_130068 = (state_130116[(13)]);
var inst_130093 = cljs.core.empty_QMARK_.call(null,inst_130067);
var inst_130094 = inst_130068.call(null,inst_130076);
var inst_130095 = cljs.core.not.call(null,inst_130094);
var inst_130096 = ((inst_130093) && (inst_130095));
var state_130116__$1 = state_130116;
var statearr_130166_130299 = state_130116__$1;
(statearr_130166_130299[(2)] = inst_130096);

(statearr_130166_130299[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (10))){
var inst_130018 = (state_130116[(8)]);
var inst_130039 = (state_130116[(2)]);
var inst_130040 = cljs.core.get.call(null,inst_130039,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_130041 = cljs.core.get.call(null,inst_130039,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_130042 = cljs.core.get.call(null,inst_130039,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_130043 = inst_130018;
var state_130116__$1 = (function (){var statearr_130167 = state_130116;
(statearr_130167[(16)] = inst_130041);

(statearr_130167[(7)] = inst_130043);

(statearr_130167[(17)] = inst_130040);

(statearr_130167[(18)] = inst_130042);

return statearr_130167;
})();
var statearr_130168_130309 = state_130116__$1;
(statearr_130168_130309[(2)] = null);

(statearr_130168_130309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (18))){
var inst_130058 = (state_130116[(2)]);
var state_130116__$1 = state_130116;
var statearr_130169_130311 = state_130116__$1;
(statearr_130169_130311[(2)] = inst_130058);

(statearr_130169_130311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (37))){
var state_130116__$1 = state_130116;
var statearr_130170_130316 = state_130116__$1;
(statearr_130170_130316[(2)] = null);

(statearr_130170_130316[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130117 === (8))){
var inst_130018 = (state_130116[(8)]);
var inst_130036 = cljs.core.apply.call(null,cljs.core.hash_map,inst_130018);
var state_130116__$1 = state_130116;
var statearr_130171_130324 = state_130116__$1;
(statearr_130171_130324[(2)] = inst_130036);

(statearr_130171_130324[(1)] = (10));


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
});})(c__15829__auto___130186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15806__auto__,c__15829__auto___130186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15807__auto__ = null;
var cljs$core$async$mix_$_state_machine__15807__auto____0 = (function (){
var statearr_130172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_130172[(0)] = cljs$core$async$mix_$_state_machine__15807__auto__);

(statearr_130172[(1)] = (1));

return statearr_130172;
});
var cljs$core$async$mix_$_state_machine__15807__auto____1 = (function (state_130116){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_130116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e130173){if((e130173 instanceof Object)){
var ex__15810__auto__ = e130173;
var statearr_130174_130333 = state_130116;
(statearr_130174_130333[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e130173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130334 = state_130116;
state_130116 = G__130334;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15807__auto__ = function(state_130116){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15807__auto____1.call(this,state_130116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15807__auto____0;
cljs$core$async$mix_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15807__auto____1;
return cljs$core$async$mix_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___130186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15831__auto__ = (function (){var statearr_130175 = f__15830__auto__.call(null);
(statearr_130175[(6)] = c__15829__auto___130186);

return statearr_130175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___130186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__130367 = arguments.length;
switch (G__130367) {
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
var G__130408 = arguments.length;
switch (G__130408) {
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
return (function (p1__130405_SHARP_){
if(cljs.core.truth_(p1__130405_SHARP_.call(null,topic))){
return p1__130405_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__130405_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async130409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async130409 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta130410){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta130410 = meta130410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async130409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_130411,meta130410__$1){
var self__ = this;
var _130411__$1 = this;
return (new cljs.core.async.t_cljs$core$async130409(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta130410__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async130409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_130411){
var self__ = this;
var _130411__$1 = this;
return self__.meta130410;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async130409.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async130409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async130409.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async130409.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async130409.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async130409.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async130409.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async130409.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta130410","meta130410",-2081872578,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async130409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async130409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async130409";

cljs.core.async.t_cljs$core$async130409.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async130409");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async130409.
 */
cljs.core.async.__GT_t_cljs$core$async130409 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async130409(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta130410){
return (new cljs.core.async.t_cljs$core$async130409(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta130410));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async130409(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15829__auto___130593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___130593,mults,ensure_mult,p){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___130593,mults,ensure_mult,p){
return (function (state_130508){
var state_val_130510 = (state_130508[(1)]);
if((state_val_130510 === (7))){
var inst_130503 = (state_130508[(2)]);
var state_130508__$1 = state_130508;
var statearr_130517_130594 = state_130508__$1;
(statearr_130517_130594[(2)] = inst_130503);

(statearr_130517_130594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (20))){
var state_130508__$1 = state_130508;
var statearr_130519_130595 = state_130508__$1;
(statearr_130519_130595[(2)] = null);

(statearr_130519_130595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (1))){
var state_130508__$1 = state_130508;
var statearr_130523_130596 = state_130508__$1;
(statearr_130523_130596[(2)] = null);

(statearr_130523_130596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (24))){
var inst_130482 = (state_130508[(7)]);
var inst_130495 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_130482);
var state_130508__$1 = state_130508;
var statearr_130524_130597 = state_130508__$1;
(statearr_130524_130597[(2)] = inst_130495);

(statearr_130524_130597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (4))){
var inst_130433 = (state_130508[(8)]);
var inst_130433__$1 = (state_130508[(2)]);
var inst_130434 = (inst_130433__$1 == null);
var state_130508__$1 = (function (){var statearr_130525 = state_130508;
(statearr_130525[(8)] = inst_130433__$1);

return statearr_130525;
})();
if(cljs.core.truth_(inst_130434)){
var statearr_130526_130600 = state_130508__$1;
(statearr_130526_130600[(1)] = (5));

} else {
var statearr_130527_130601 = state_130508__$1;
(statearr_130527_130601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (15))){
var inst_130476 = (state_130508[(2)]);
var state_130508__$1 = state_130508;
var statearr_130528_130606 = state_130508__$1;
(statearr_130528_130606[(2)] = inst_130476);

(statearr_130528_130606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (21))){
var inst_130500 = (state_130508[(2)]);
var state_130508__$1 = (function (){var statearr_130533 = state_130508;
(statearr_130533[(9)] = inst_130500);

return statearr_130533;
})();
var statearr_130534_130609 = state_130508__$1;
(statearr_130534_130609[(2)] = null);

(statearr_130534_130609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (13))){
var inst_130458 = (state_130508[(10)]);
var inst_130460 = cljs.core.chunked_seq_QMARK_.call(null,inst_130458);
var state_130508__$1 = state_130508;
if(inst_130460){
var statearr_130535_130611 = state_130508__$1;
(statearr_130535_130611[(1)] = (16));

} else {
var statearr_130536_130613 = state_130508__$1;
(statearr_130536_130613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (22))){
var inst_130492 = (state_130508[(2)]);
var state_130508__$1 = state_130508;
if(cljs.core.truth_(inst_130492)){
var statearr_130540_130615 = state_130508__$1;
(statearr_130540_130615[(1)] = (23));

} else {
var statearr_130541_130616 = state_130508__$1;
(statearr_130541_130616[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (6))){
var inst_130482 = (state_130508[(7)]);
var inst_130433 = (state_130508[(8)]);
var inst_130484 = (state_130508[(11)]);
var inst_130482__$1 = topic_fn.call(null,inst_130433);
var inst_130483 = cljs.core.deref.call(null,mults);
var inst_130484__$1 = cljs.core.get.call(null,inst_130483,inst_130482__$1);
var state_130508__$1 = (function (){var statearr_130542 = state_130508;
(statearr_130542[(7)] = inst_130482__$1);

(statearr_130542[(11)] = inst_130484__$1);

return statearr_130542;
})();
if(cljs.core.truth_(inst_130484__$1)){
var statearr_130543_130628 = state_130508__$1;
(statearr_130543_130628[(1)] = (19));

} else {
var statearr_130544_130629 = state_130508__$1;
(statearr_130544_130629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (25))){
var inst_130497 = (state_130508[(2)]);
var state_130508__$1 = state_130508;
var statearr_130545_130630 = state_130508__$1;
(statearr_130545_130630[(2)] = inst_130497);

(statearr_130545_130630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (17))){
var inst_130458 = (state_130508[(10)]);
var inst_130467 = cljs.core.first.call(null,inst_130458);
var inst_130468 = cljs.core.async.muxch_STAR_.call(null,inst_130467);
var inst_130469 = cljs.core.async.close_BANG_.call(null,inst_130468);
var inst_130470 = cljs.core.next.call(null,inst_130458);
var inst_130443 = inst_130470;
var inst_130444 = null;
var inst_130445 = (0);
var inst_130446 = (0);
var state_130508__$1 = (function (){var statearr_130546 = state_130508;
(statearr_130546[(12)] = inst_130469);

(statearr_130546[(13)] = inst_130444);

(statearr_130546[(14)] = inst_130446);

(statearr_130546[(15)] = inst_130443);

(statearr_130546[(16)] = inst_130445);

return statearr_130546;
})();
var statearr_130547_130635 = state_130508__$1;
(statearr_130547_130635[(2)] = null);

(statearr_130547_130635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (3))){
var inst_130505 = (state_130508[(2)]);
var state_130508__$1 = state_130508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_130508__$1,inst_130505);
} else {
if((state_val_130510 === (12))){
var inst_130478 = (state_130508[(2)]);
var state_130508__$1 = state_130508;
var statearr_130548_130638 = state_130508__$1;
(statearr_130548_130638[(2)] = inst_130478);

(statearr_130548_130638[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (2))){
var state_130508__$1 = state_130508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_130508__$1,(4),ch);
} else {
if((state_val_130510 === (23))){
var state_130508__$1 = state_130508;
var statearr_130549_130643 = state_130508__$1;
(statearr_130549_130643[(2)] = null);

(statearr_130549_130643[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (19))){
var inst_130433 = (state_130508[(8)]);
var inst_130484 = (state_130508[(11)]);
var inst_130490 = cljs.core.async.muxch_STAR_.call(null,inst_130484);
var state_130508__$1 = state_130508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130508__$1,(22),inst_130490,inst_130433);
} else {
if((state_val_130510 === (11))){
var inst_130458 = (state_130508[(10)]);
var inst_130443 = (state_130508[(15)]);
var inst_130458__$1 = cljs.core.seq.call(null,inst_130443);
var state_130508__$1 = (function (){var statearr_130550 = state_130508;
(statearr_130550[(10)] = inst_130458__$1);

return statearr_130550;
})();
if(inst_130458__$1){
var statearr_130551_130648 = state_130508__$1;
(statearr_130551_130648[(1)] = (13));

} else {
var statearr_130552_130649 = state_130508__$1;
(statearr_130552_130649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (9))){
var inst_130480 = (state_130508[(2)]);
var state_130508__$1 = state_130508;
var statearr_130553_130650 = state_130508__$1;
(statearr_130553_130650[(2)] = inst_130480);

(statearr_130553_130650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (5))){
var inst_130440 = cljs.core.deref.call(null,mults);
var inst_130441 = cljs.core.vals.call(null,inst_130440);
var inst_130442 = cljs.core.seq.call(null,inst_130441);
var inst_130443 = inst_130442;
var inst_130444 = null;
var inst_130445 = (0);
var inst_130446 = (0);
var state_130508__$1 = (function (){var statearr_130554 = state_130508;
(statearr_130554[(13)] = inst_130444);

(statearr_130554[(14)] = inst_130446);

(statearr_130554[(15)] = inst_130443);

(statearr_130554[(16)] = inst_130445);

return statearr_130554;
})();
var statearr_130555_130657 = state_130508__$1;
(statearr_130555_130657[(2)] = null);

(statearr_130555_130657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (14))){
var state_130508__$1 = state_130508;
var statearr_130559_130658 = state_130508__$1;
(statearr_130559_130658[(2)] = null);

(statearr_130559_130658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (16))){
var inst_130458 = (state_130508[(10)]);
var inst_130462 = cljs.core.chunk_first.call(null,inst_130458);
var inst_130463 = cljs.core.chunk_rest.call(null,inst_130458);
var inst_130464 = cljs.core.count.call(null,inst_130462);
var inst_130443 = inst_130463;
var inst_130444 = inst_130462;
var inst_130445 = inst_130464;
var inst_130446 = (0);
var state_130508__$1 = (function (){var statearr_130560 = state_130508;
(statearr_130560[(13)] = inst_130444);

(statearr_130560[(14)] = inst_130446);

(statearr_130560[(15)] = inst_130443);

(statearr_130560[(16)] = inst_130445);

return statearr_130560;
})();
var statearr_130563_130663 = state_130508__$1;
(statearr_130563_130663[(2)] = null);

(statearr_130563_130663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (10))){
var inst_130444 = (state_130508[(13)]);
var inst_130446 = (state_130508[(14)]);
var inst_130443 = (state_130508[(15)]);
var inst_130445 = (state_130508[(16)]);
var inst_130452 = cljs.core._nth.call(null,inst_130444,inst_130446);
var inst_130453 = cljs.core.async.muxch_STAR_.call(null,inst_130452);
var inst_130454 = cljs.core.async.close_BANG_.call(null,inst_130453);
var inst_130455 = (inst_130446 + (1));
var tmp130556 = inst_130444;
var tmp130557 = inst_130443;
var tmp130558 = inst_130445;
var inst_130443__$1 = tmp130557;
var inst_130444__$1 = tmp130556;
var inst_130445__$1 = tmp130558;
var inst_130446__$1 = inst_130455;
var state_130508__$1 = (function (){var statearr_130568 = state_130508;
(statearr_130568[(13)] = inst_130444__$1);

(statearr_130568[(17)] = inst_130454);

(statearr_130568[(14)] = inst_130446__$1);

(statearr_130568[(15)] = inst_130443__$1);

(statearr_130568[(16)] = inst_130445__$1);

return statearr_130568;
})();
var statearr_130569_130672 = state_130508__$1;
(statearr_130569_130672[(2)] = null);

(statearr_130569_130672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (18))){
var inst_130473 = (state_130508[(2)]);
var state_130508__$1 = state_130508;
var statearr_130571_130675 = state_130508__$1;
(statearr_130571_130675[(2)] = inst_130473);

(statearr_130571_130675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130510 === (8))){
var inst_130446 = (state_130508[(14)]);
var inst_130445 = (state_130508[(16)]);
var inst_130449 = (inst_130446 < inst_130445);
var inst_130450 = inst_130449;
var state_130508__$1 = state_130508;
if(cljs.core.truth_(inst_130450)){
var statearr_130575_130678 = state_130508__$1;
(statearr_130575_130678[(1)] = (10));

} else {
var statearr_130576_130679 = state_130508__$1;
(statearr_130576_130679[(1)] = (11));

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
});})(c__15829__auto___130593,mults,ensure_mult,p))
;
return ((function (switch__15806__auto__,c__15829__auto___130593,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15807__auto__ = null;
var cljs$core$async$state_machine__15807__auto____0 = (function (){
var statearr_130577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_130577[(0)] = cljs$core$async$state_machine__15807__auto__);

(statearr_130577[(1)] = (1));

return statearr_130577;
});
var cljs$core$async$state_machine__15807__auto____1 = (function (state_130508){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_130508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e130578){if((e130578 instanceof Object)){
var ex__15810__auto__ = e130578;
var statearr_130579_130682 = state_130508;
(statearr_130579_130682[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e130578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130687 = state_130508;
state_130508 = G__130687;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$state_machine__15807__auto__ = function(state_130508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15807__auto____1.call(this,state_130508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15807__auto____0;
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15807__auto____1;
return cljs$core$async$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___130593,mults,ensure_mult,p))
})();
var state__15831__auto__ = (function (){var statearr_130580 = f__15830__auto__.call(null);
(statearr_130580[(6)] = c__15829__auto___130593);

return statearr_130580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___130593,mults,ensure_mult,p))
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
var G__130692 = arguments.length;
switch (G__130692) {
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
var G__130704 = arguments.length;
switch (G__130704) {
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
var G__130709 = arguments.length;
switch (G__130709) {
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
var c__15829__auto___130792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___130792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___130792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_130754){
var state_val_130755 = (state_130754[(1)]);
if((state_val_130755 === (7))){
var state_130754__$1 = state_130754;
var statearr_130757_130793 = state_130754__$1;
(statearr_130757_130793[(2)] = null);

(statearr_130757_130793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (1))){
var state_130754__$1 = state_130754;
var statearr_130758_130794 = state_130754__$1;
(statearr_130758_130794[(2)] = null);

(statearr_130758_130794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (4))){
var inst_130716 = (state_130754[(7)]);
var inst_130718 = (inst_130716 < cnt);
var state_130754__$1 = state_130754;
if(cljs.core.truth_(inst_130718)){
var statearr_130759_130795 = state_130754__$1;
(statearr_130759_130795[(1)] = (6));

} else {
var statearr_130760_130796 = state_130754__$1;
(statearr_130760_130796[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (15))){
var inst_130750 = (state_130754[(2)]);
var state_130754__$1 = state_130754;
var statearr_130761_130797 = state_130754__$1;
(statearr_130761_130797[(2)] = inst_130750);

(statearr_130761_130797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (13))){
var inst_130743 = cljs.core.async.close_BANG_.call(null,out);
var state_130754__$1 = state_130754;
var statearr_130762_130798 = state_130754__$1;
(statearr_130762_130798[(2)] = inst_130743);

(statearr_130762_130798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (6))){
var state_130754__$1 = state_130754;
var statearr_130763_130799 = state_130754__$1;
(statearr_130763_130799[(2)] = null);

(statearr_130763_130799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (3))){
var inst_130752 = (state_130754[(2)]);
var state_130754__$1 = state_130754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_130754__$1,inst_130752);
} else {
if((state_val_130755 === (12))){
var inst_130740 = (state_130754[(8)]);
var inst_130740__$1 = (state_130754[(2)]);
var inst_130741 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_130740__$1);
var state_130754__$1 = (function (){var statearr_130766 = state_130754;
(statearr_130766[(8)] = inst_130740__$1);

return statearr_130766;
})();
if(cljs.core.truth_(inst_130741)){
var statearr_130767_130800 = state_130754__$1;
(statearr_130767_130800[(1)] = (13));

} else {
var statearr_130768_130801 = state_130754__$1;
(statearr_130768_130801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (2))){
var inst_130715 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_130716 = (0);
var state_130754__$1 = (function (){var statearr_130769 = state_130754;
(statearr_130769[(7)] = inst_130716);

(statearr_130769[(9)] = inst_130715);

return statearr_130769;
})();
var statearr_130770_130802 = state_130754__$1;
(statearr_130770_130802[(2)] = null);

(statearr_130770_130802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (11))){
var inst_130716 = (state_130754[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_130754,(10),Object,null,(9));
var inst_130727 = chs__$1.call(null,inst_130716);
var inst_130728 = done.call(null,inst_130716);
var inst_130729 = cljs.core.async.take_BANG_.call(null,inst_130727,inst_130728);
var state_130754__$1 = state_130754;
var statearr_130775_130803 = state_130754__$1;
(statearr_130775_130803[(2)] = inst_130729);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130754__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (9))){
var inst_130716 = (state_130754[(7)]);
var inst_130731 = (state_130754[(2)]);
var inst_130732 = (inst_130716 + (1));
var inst_130716__$1 = inst_130732;
var state_130754__$1 = (function (){var statearr_130776 = state_130754;
(statearr_130776[(10)] = inst_130731);

(statearr_130776[(7)] = inst_130716__$1);

return statearr_130776;
})();
var statearr_130777_130804 = state_130754__$1;
(statearr_130777_130804[(2)] = null);

(statearr_130777_130804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (5))){
var inst_130738 = (state_130754[(2)]);
var state_130754__$1 = (function (){var statearr_130779 = state_130754;
(statearr_130779[(11)] = inst_130738);

return statearr_130779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_130754__$1,(12),dchan);
} else {
if((state_val_130755 === (14))){
var inst_130740 = (state_130754[(8)]);
var inst_130745 = cljs.core.apply.call(null,f,inst_130740);
var state_130754__$1 = state_130754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130754__$1,(16),out,inst_130745);
} else {
if((state_val_130755 === (16))){
var inst_130747 = (state_130754[(2)]);
var state_130754__$1 = (function (){var statearr_130782 = state_130754;
(statearr_130782[(12)] = inst_130747);

return statearr_130782;
})();
var statearr_130783_130805 = state_130754__$1;
(statearr_130783_130805[(2)] = null);

(statearr_130783_130805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (10))){
var inst_130721 = (state_130754[(2)]);
var inst_130722 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_130754__$1 = (function (){var statearr_130784 = state_130754;
(statearr_130784[(13)] = inst_130721);

return statearr_130784;
})();
var statearr_130785_130806 = state_130754__$1;
(statearr_130785_130806[(2)] = inst_130722);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130754__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130755 === (8))){
var inst_130736 = (state_130754[(2)]);
var state_130754__$1 = state_130754;
var statearr_130786_130807 = state_130754__$1;
(statearr_130786_130807[(2)] = inst_130736);

(statearr_130786_130807[(1)] = (5));


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
});})(c__15829__auto___130792,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15806__auto__,c__15829__auto___130792,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15807__auto__ = null;
var cljs$core$async$state_machine__15807__auto____0 = (function (){
var statearr_130787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_130787[(0)] = cljs$core$async$state_machine__15807__auto__);

(statearr_130787[(1)] = (1));

return statearr_130787;
});
var cljs$core$async$state_machine__15807__auto____1 = (function (state_130754){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_130754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e130788){if((e130788 instanceof Object)){
var ex__15810__auto__ = e130788;
var statearr_130789_130808 = state_130754;
(statearr_130789_130808[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e130788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130809 = state_130754;
state_130754 = G__130809;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$state_machine__15807__auto__ = function(state_130754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15807__auto____1.call(this,state_130754);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15807__auto____0;
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15807__auto____1;
return cljs$core$async$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___130792,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15831__auto__ = (function (){var statearr_130790 = f__15830__auto__.call(null);
(statearr_130790[(6)] = c__15829__auto___130792);

return statearr_130790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___130792,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__130812 = arguments.length;
switch (G__130812) {
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
var c__15829__auto___130866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___130866,out){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___130866,out){
return (function (state_130844){
var state_val_130845 = (state_130844[(1)]);
if((state_val_130845 === (7))){
var inst_130823 = (state_130844[(7)]);
var inst_130824 = (state_130844[(8)]);
var inst_130823__$1 = (state_130844[(2)]);
var inst_130824__$1 = cljs.core.nth.call(null,inst_130823__$1,(0),null);
var inst_130825 = cljs.core.nth.call(null,inst_130823__$1,(1),null);
var inst_130826 = (inst_130824__$1 == null);
var state_130844__$1 = (function (){var statearr_130846 = state_130844;
(statearr_130846[(7)] = inst_130823__$1);

(statearr_130846[(9)] = inst_130825);

(statearr_130846[(8)] = inst_130824__$1);

return statearr_130846;
})();
if(cljs.core.truth_(inst_130826)){
var statearr_130847_130869 = state_130844__$1;
(statearr_130847_130869[(1)] = (8));

} else {
var statearr_130848_130870 = state_130844__$1;
(statearr_130848_130870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130845 === (1))){
var inst_130813 = cljs.core.vec.call(null,chs);
var inst_130814 = inst_130813;
var state_130844__$1 = (function (){var statearr_130849 = state_130844;
(statearr_130849[(10)] = inst_130814);

return statearr_130849;
})();
var statearr_130850_130874 = state_130844__$1;
(statearr_130850_130874[(2)] = null);

(statearr_130850_130874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130845 === (4))){
var inst_130814 = (state_130844[(10)]);
var state_130844__$1 = state_130844;
return cljs.core.async.ioc_alts_BANG_.call(null,state_130844__$1,(7),inst_130814);
} else {
if((state_val_130845 === (6))){
var inst_130840 = (state_130844[(2)]);
var state_130844__$1 = state_130844;
var statearr_130851_130875 = state_130844__$1;
(statearr_130851_130875[(2)] = inst_130840);

(statearr_130851_130875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130845 === (3))){
var inst_130842 = (state_130844[(2)]);
var state_130844__$1 = state_130844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_130844__$1,inst_130842);
} else {
if((state_val_130845 === (2))){
var inst_130814 = (state_130844[(10)]);
var inst_130816 = cljs.core.count.call(null,inst_130814);
var inst_130817 = (inst_130816 > (0));
var state_130844__$1 = state_130844;
if(cljs.core.truth_(inst_130817)){
var statearr_130853_130876 = state_130844__$1;
(statearr_130853_130876[(1)] = (4));

} else {
var statearr_130854_130877 = state_130844__$1;
(statearr_130854_130877[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130845 === (11))){
var inst_130814 = (state_130844[(10)]);
var inst_130833 = (state_130844[(2)]);
var tmp130852 = inst_130814;
var inst_130814__$1 = tmp130852;
var state_130844__$1 = (function (){var statearr_130855 = state_130844;
(statearr_130855[(11)] = inst_130833);

(statearr_130855[(10)] = inst_130814__$1);

return statearr_130855;
})();
var statearr_130856_130878 = state_130844__$1;
(statearr_130856_130878[(2)] = null);

(statearr_130856_130878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130845 === (9))){
var inst_130824 = (state_130844[(8)]);
var state_130844__$1 = state_130844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130844__$1,(11),out,inst_130824);
} else {
if((state_val_130845 === (5))){
var inst_130838 = cljs.core.async.close_BANG_.call(null,out);
var state_130844__$1 = state_130844;
var statearr_130857_130879 = state_130844__$1;
(statearr_130857_130879[(2)] = inst_130838);

(statearr_130857_130879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130845 === (10))){
var inst_130836 = (state_130844[(2)]);
var state_130844__$1 = state_130844;
var statearr_130858_130880 = state_130844__$1;
(statearr_130858_130880[(2)] = inst_130836);

(statearr_130858_130880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130845 === (8))){
var inst_130823 = (state_130844[(7)]);
var inst_130825 = (state_130844[(9)]);
var inst_130814 = (state_130844[(10)]);
var inst_130824 = (state_130844[(8)]);
var inst_130828 = (function (){var cs = inst_130814;
var vec__130819 = inst_130823;
var v = inst_130824;
var c = inst_130825;
return ((function (cs,vec__130819,v,c,inst_130823,inst_130825,inst_130814,inst_130824,state_val_130845,c__15829__auto___130866,out){
return (function (p1__130810_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__130810_SHARP_);
});
;})(cs,vec__130819,v,c,inst_130823,inst_130825,inst_130814,inst_130824,state_val_130845,c__15829__auto___130866,out))
})();
var inst_130829 = cljs.core.filterv.call(null,inst_130828,inst_130814);
var inst_130814__$1 = inst_130829;
var state_130844__$1 = (function (){var statearr_130859 = state_130844;
(statearr_130859[(10)] = inst_130814__$1);

return statearr_130859;
})();
var statearr_130860_130889 = state_130844__$1;
(statearr_130860_130889[(2)] = null);

(statearr_130860_130889[(1)] = (2));


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
});})(c__15829__auto___130866,out))
;
return ((function (switch__15806__auto__,c__15829__auto___130866,out){
return (function() {
var cljs$core$async$state_machine__15807__auto__ = null;
var cljs$core$async$state_machine__15807__auto____0 = (function (){
var statearr_130861 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_130861[(0)] = cljs$core$async$state_machine__15807__auto__);

(statearr_130861[(1)] = (1));

return statearr_130861;
});
var cljs$core$async$state_machine__15807__auto____1 = (function (state_130844){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_130844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e130862){if((e130862 instanceof Object)){
var ex__15810__auto__ = e130862;
var statearr_130863_130954 = state_130844;
(statearr_130863_130954[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e130862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130956 = state_130844;
state_130844 = G__130956;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$state_machine__15807__auto__ = function(state_130844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15807__auto____1.call(this,state_130844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15807__auto____0;
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15807__auto____1;
return cljs$core$async$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___130866,out))
})();
var state__15831__auto__ = (function (){var statearr_130864 = f__15830__auto__.call(null);
(statearr_130864[(6)] = c__15829__auto___130866);

return statearr_130864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___130866,out))
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
var G__130970 = arguments.length;
switch (G__130970) {
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
var c__15829__auto___131050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___131050,out){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___131050,out){
return (function (state_130999){
var state_val_131000 = (state_130999[(1)]);
if((state_val_131000 === (7))){
var inst_130980 = (state_130999[(7)]);
var inst_130980__$1 = (state_130999[(2)]);
var inst_130981 = (inst_130980__$1 == null);
var inst_130982 = cljs.core.not.call(null,inst_130981);
var state_130999__$1 = (function (){var statearr_131007 = state_130999;
(statearr_131007[(7)] = inst_130980__$1);

return statearr_131007;
})();
if(inst_130982){
var statearr_131009_131056 = state_130999__$1;
(statearr_131009_131056[(1)] = (8));

} else {
var statearr_131010_131057 = state_130999__$1;
(statearr_131010_131057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131000 === (1))){
var inst_130974 = (0);
var state_130999__$1 = (function (){var statearr_131012 = state_130999;
(statearr_131012[(8)] = inst_130974);

return statearr_131012;
})();
var statearr_131013_131058 = state_130999__$1;
(statearr_131013_131058[(2)] = null);

(statearr_131013_131058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131000 === (4))){
var state_130999__$1 = state_130999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_130999__$1,(7),ch);
} else {
if((state_val_131000 === (6))){
var inst_130994 = (state_130999[(2)]);
var state_130999__$1 = state_130999;
var statearr_131016_131059 = state_130999__$1;
(statearr_131016_131059[(2)] = inst_130994);

(statearr_131016_131059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131000 === (3))){
var inst_130996 = (state_130999[(2)]);
var inst_130997 = cljs.core.async.close_BANG_.call(null,out);
var state_130999__$1 = (function (){var statearr_131019 = state_130999;
(statearr_131019[(9)] = inst_130996);

return statearr_131019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_130999__$1,inst_130997);
} else {
if((state_val_131000 === (2))){
var inst_130974 = (state_130999[(8)]);
var inst_130976 = (inst_130974 < n);
var state_130999__$1 = state_130999;
if(cljs.core.truth_(inst_130976)){
var statearr_131021_131064 = state_130999__$1;
(statearr_131021_131064[(1)] = (4));

} else {
var statearr_131022_131066 = state_130999__$1;
(statearr_131022_131066[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131000 === (11))){
var inst_130974 = (state_130999[(8)]);
var inst_130986 = (state_130999[(2)]);
var inst_130987 = (inst_130974 + (1));
var inst_130974__$1 = inst_130987;
var state_130999__$1 = (function (){var statearr_131024 = state_130999;
(statearr_131024[(8)] = inst_130974__$1);

(statearr_131024[(10)] = inst_130986);

return statearr_131024;
})();
var statearr_131026_131070 = state_130999__$1;
(statearr_131026_131070[(2)] = null);

(statearr_131026_131070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131000 === (9))){
var state_130999__$1 = state_130999;
var statearr_131028_131072 = state_130999__$1;
(statearr_131028_131072[(2)] = null);

(statearr_131028_131072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131000 === (5))){
var state_130999__$1 = state_130999;
var statearr_131031_131073 = state_130999__$1;
(statearr_131031_131073[(2)] = null);

(statearr_131031_131073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131000 === (10))){
var inst_130991 = (state_130999[(2)]);
var state_130999__$1 = state_130999;
var statearr_131034_131075 = state_130999__$1;
(statearr_131034_131075[(2)] = inst_130991);

(statearr_131034_131075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131000 === (8))){
var inst_130980 = (state_130999[(7)]);
var state_130999__$1 = state_130999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130999__$1,(11),out,inst_130980);
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
});})(c__15829__auto___131050,out))
;
return ((function (switch__15806__auto__,c__15829__auto___131050,out){
return (function() {
var cljs$core$async$state_machine__15807__auto__ = null;
var cljs$core$async$state_machine__15807__auto____0 = (function (){
var statearr_131037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_131037[(0)] = cljs$core$async$state_machine__15807__auto__);

(statearr_131037[(1)] = (1));

return statearr_131037;
});
var cljs$core$async$state_machine__15807__auto____1 = (function (state_130999){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_130999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e131038){if((e131038 instanceof Object)){
var ex__15810__auto__ = e131038;
var statearr_131039_131080 = state_130999;
(statearr_131039_131080[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e131038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__131082 = state_130999;
state_130999 = G__131082;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$state_machine__15807__auto__ = function(state_130999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15807__auto____1.call(this,state_130999);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15807__auto____0;
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15807__auto____1;
return cljs$core$async$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___131050,out))
})();
var state__15831__auto__ = (function (){var statearr_131043 = f__15830__auto__.call(null);
(statearr_131043[(6)] = c__15829__auto___131050);

return statearr_131043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___131050,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async131086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async131086 = (function (f,ch,meta131087){
this.f = f;
this.ch = ch;
this.meta131087 = meta131087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async131086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131088,meta131087__$1){
var self__ = this;
var _131088__$1 = this;
return (new cljs.core.async.t_cljs$core$async131086(self__.f,self__.ch,meta131087__$1));
});

cljs.core.async.t_cljs$core$async131086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131088){
var self__ = this;
var _131088__$1 = this;
return self__.meta131087;
});

cljs.core.async.t_cljs$core$async131086.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async131086.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async131086.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async131086.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async131086.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async131093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async131093 = (function (f,ch,meta131087,_,fn1,meta131094){
this.f = f;
this.ch = ch;
this.meta131087 = meta131087;
this._ = _;
this.fn1 = fn1;
this.meta131094 = meta131094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async131093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_131095,meta131094__$1){
var self__ = this;
var _131095__$1 = this;
return (new cljs.core.async.t_cljs$core$async131093(self__.f,self__.ch,self__.meta131087,self__._,self__.fn1,meta131094__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async131093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_131095){
var self__ = this;
var _131095__$1 = this;
return self__.meta131094;
});})(___$1))
;

cljs.core.async.t_cljs$core$async131093.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async131093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async131093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async131093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__131085_SHARP_){
return f1.call(null,(((p1__131085_SHARP_ == null))?null:self__.f.call(null,p1__131085_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async131093.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta131087","meta131087",828330946,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async131086","cljs.core.async/t_cljs$core$async131086",-825175973,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta131094","meta131094",1488309857,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async131093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async131093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async131093";

cljs.core.async.t_cljs$core$async131093.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async131093");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async131093.
 */
cljs.core.async.__GT_t_cljs$core$async131093 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async131093(f__$1,ch__$1,meta131087__$1,___$2,fn1__$1,meta131094){
return (new cljs.core.async.t_cljs$core$async131093(f__$1,ch__$1,meta131087__$1,___$2,fn1__$1,meta131094));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async131093(self__.f,self__.ch,self__.meta131087,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async131086.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async131086.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async131086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta131087","meta131087",828330946,null)], null);
});

cljs.core.async.t_cljs$core$async131086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async131086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async131086";

cljs.core.async.t_cljs$core$async131086.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async131086");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async131086.
 */
cljs.core.async.__GT_t_cljs$core$async131086 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async131086(f__$1,ch__$1,meta131087){
return (new cljs.core.async.t_cljs$core$async131086(f__$1,ch__$1,meta131087));
});

}

return (new cljs.core.async.t_cljs$core$async131086(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async131148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async131148 = (function (f,ch,meta131149){
this.f = f;
this.ch = ch;
this.meta131149 = meta131149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async131148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131150,meta131149__$1){
var self__ = this;
var _131150__$1 = this;
return (new cljs.core.async.t_cljs$core$async131148(self__.f,self__.ch,meta131149__$1));
});

cljs.core.async.t_cljs$core$async131148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131150){
var self__ = this;
var _131150__$1 = this;
return self__.meta131149;
});

cljs.core.async.t_cljs$core$async131148.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async131148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async131148.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async131148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async131148.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async131148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async131148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta131149","meta131149",-1742679534,null)], null);
});

cljs.core.async.t_cljs$core$async131148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async131148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async131148";

cljs.core.async.t_cljs$core$async131148.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async131148");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async131148.
 */
cljs.core.async.__GT_t_cljs$core$async131148 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async131148(f__$1,ch__$1,meta131149){
return (new cljs.core.async.t_cljs$core$async131148(f__$1,ch__$1,meta131149));
});

}

return (new cljs.core.async.t_cljs$core$async131148(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async131177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async131177 = (function (p,ch,meta131178){
this.p = p;
this.ch = ch;
this.meta131178 = meta131178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async131177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_131179,meta131178__$1){
var self__ = this;
var _131179__$1 = this;
return (new cljs.core.async.t_cljs$core$async131177(self__.p,self__.ch,meta131178__$1));
});

cljs.core.async.t_cljs$core$async131177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_131179){
var self__ = this;
var _131179__$1 = this;
return self__.meta131178;
});

cljs.core.async.t_cljs$core$async131177.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async131177.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async131177.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async131177.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async131177.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async131177.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async131177.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async131177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta131178","meta131178",-1329639624,null)], null);
});

cljs.core.async.t_cljs$core$async131177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async131177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async131177";

cljs.core.async.t_cljs$core$async131177.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async131177");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async131177.
 */
cljs.core.async.__GT_t_cljs$core$async131177 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async131177(p__$1,ch__$1,meta131178){
return (new cljs.core.async.t_cljs$core$async131177(p__$1,ch__$1,meta131178));
});

}

return (new cljs.core.async.t_cljs$core$async131177(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__131274 = arguments.length;
switch (G__131274) {
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
var c__15829__auto___131343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___131343,out){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___131343,out){
return (function (state_131303){
var state_val_131305 = (state_131303[(1)]);
if((state_val_131305 === (7))){
var inst_131299 = (state_131303[(2)]);
var state_131303__$1 = state_131303;
var statearr_131311_131344 = state_131303__$1;
(statearr_131311_131344[(2)] = inst_131299);

(statearr_131311_131344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131305 === (1))){
var state_131303__$1 = state_131303;
var statearr_131312_131346 = state_131303__$1;
(statearr_131312_131346[(2)] = null);

(statearr_131312_131346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131305 === (4))){
var inst_131283 = (state_131303[(7)]);
var inst_131283__$1 = (state_131303[(2)]);
var inst_131284 = (inst_131283__$1 == null);
var state_131303__$1 = (function (){var statearr_131316 = state_131303;
(statearr_131316[(7)] = inst_131283__$1);

return statearr_131316;
})();
if(cljs.core.truth_(inst_131284)){
var statearr_131317_131347 = state_131303__$1;
(statearr_131317_131347[(1)] = (5));

} else {
var statearr_131319_131349 = state_131303__$1;
(statearr_131319_131349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131305 === (6))){
var inst_131283 = (state_131303[(7)]);
var inst_131288 = p.call(null,inst_131283);
var state_131303__$1 = state_131303;
if(cljs.core.truth_(inst_131288)){
var statearr_131324_131351 = state_131303__$1;
(statearr_131324_131351[(1)] = (8));

} else {
var statearr_131325_131352 = state_131303__$1;
(statearr_131325_131352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131305 === (3))){
var inst_131301 = (state_131303[(2)]);
var state_131303__$1 = state_131303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131303__$1,inst_131301);
} else {
if((state_val_131305 === (2))){
var state_131303__$1 = state_131303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131303__$1,(4),ch);
} else {
if((state_val_131305 === (11))){
var inst_131293 = (state_131303[(2)]);
var state_131303__$1 = state_131303;
var statearr_131328_131354 = state_131303__$1;
(statearr_131328_131354[(2)] = inst_131293);

(statearr_131328_131354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131305 === (9))){
var state_131303__$1 = state_131303;
var statearr_131330_131358 = state_131303__$1;
(statearr_131330_131358[(2)] = null);

(statearr_131330_131358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131305 === (5))){
var inst_131286 = cljs.core.async.close_BANG_.call(null,out);
var state_131303__$1 = state_131303;
var statearr_131331_131359 = state_131303__$1;
(statearr_131331_131359[(2)] = inst_131286);

(statearr_131331_131359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131305 === (10))){
var inst_131296 = (state_131303[(2)]);
var state_131303__$1 = (function (){var statearr_131336 = state_131303;
(statearr_131336[(8)] = inst_131296);

return statearr_131336;
})();
var statearr_131337_131361 = state_131303__$1;
(statearr_131337_131361[(2)] = null);

(statearr_131337_131361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131305 === (8))){
var inst_131283 = (state_131303[(7)]);
var state_131303__$1 = state_131303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131303__$1,(11),out,inst_131283);
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
});})(c__15829__auto___131343,out))
;
return ((function (switch__15806__auto__,c__15829__auto___131343,out){
return (function() {
var cljs$core$async$state_machine__15807__auto__ = null;
var cljs$core$async$state_machine__15807__auto____0 = (function (){
var statearr_131338 = [null,null,null,null,null,null,null,null,null];
(statearr_131338[(0)] = cljs$core$async$state_machine__15807__auto__);

(statearr_131338[(1)] = (1));

return statearr_131338;
});
var cljs$core$async$state_machine__15807__auto____1 = (function (state_131303){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_131303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e131339){if((e131339 instanceof Object)){
var ex__15810__auto__ = e131339;
var statearr_131340_131366 = state_131303;
(statearr_131340_131366[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e131339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__131381 = state_131303;
state_131303 = G__131381;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$state_machine__15807__auto__ = function(state_131303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15807__auto____1.call(this,state_131303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15807__auto____0;
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15807__auto____1;
return cljs$core$async$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___131343,out))
})();
var state__15831__auto__ = (function (){var statearr_131341 = f__15830__auto__.call(null);
(statearr_131341[(6)] = c__15829__auto___131343);

return statearr_131341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___131343,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__131411 = arguments.length;
switch (G__131411) {
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
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_131491){
var state_val_131492 = (state_131491[(1)]);
if((state_val_131492 === (7))){
var inst_131487 = (state_131491[(2)]);
var state_131491__$1 = state_131491;
var statearr_131501_131553 = state_131491__$1;
(statearr_131501_131553[(2)] = inst_131487);

(statearr_131501_131553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (20))){
var inst_131455 = (state_131491[(7)]);
var inst_131467 = (state_131491[(2)]);
var inst_131468 = cljs.core.next.call(null,inst_131455);
var inst_131440 = inst_131468;
var inst_131441 = null;
var inst_131442 = (0);
var inst_131443 = (0);
var state_131491__$1 = (function (){var statearr_131502 = state_131491;
(statearr_131502[(8)] = inst_131443);

(statearr_131502[(9)] = inst_131440);

(statearr_131502[(10)] = inst_131467);

(statearr_131502[(11)] = inst_131441);

(statearr_131502[(12)] = inst_131442);

return statearr_131502;
})();
var statearr_131504_131558 = state_131491__$1;
(statearr_131504_131558[(2)] = null);

(statearr_131504_131558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (1))){
var state_131491__$1 = state_131491;
var statearr_131505_131559 = state_131491__$1;
(statearr_131505_131559[(2)] = null);

(statearr_131505_131559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (4))){
var inst_131428 = (state_131491[(13)]);
var inst_131428__$1 = (state_131491[(2)]);
var inst_131429 = (inst_131428__$1 == null);
var state_131491__$1 = (function (){var statearr_131506 = state_131491;
(statearr_131506[(13)] = inst_131428__$1);

return statearr_131506;
})();
if(cljs.core.truth_(inst_131429)){
var statearr_131507_131561 = state_131491__$1;
(statearr_131507_131561[(1)] = (5));

} else {
var statearr_131508_131562 = state_131491__$1;
(statearr_131508_131562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (15))){
var state_131491__$1 = state_131491;
var statearr_131512_131564 = state_131491__$1;
(statearr_131512_131564[(2)] = null);

(statearr_131512_131564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (21))){
var state_131491__$1 = state_131491;
var statearr_131513_131566 = state_131491__$1;
(statearr_131513_131566[(2)] = null);

(statearr_131513_131566[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (13))){
var inst_131443 = (state_131491[(8)]);
var inst_131440 = (state_131491[(9)]);
var inst_131441 = (state_131491[(11)]);
var inst_131442 = (state_131491[(12)]);
var inst_131451 = (state_131491[(2)]);
var inst_131452 = (inst_131443 + (1));
var tmp131509 = inst_131440;
var tmp131510 = inst_131441;
var tmp131511 = inst_131442;
var inst_131440__$1 = tmp131509;
var inst_131441__$1 = tmp131510;
var inst_131442__$1 = tmp131511;
var inst_131443__$1 = inst_131452;
var state_131491__$1 = (function (){var statearr_131515 = state_131491;
(statearr_131515[(8)] = inst_131443__$1);

(statearr_131515[(9)] = inst_131440__$1);

(statearr_131515[(11)] = inst_131441__$1);

(statearr_131515[(14)] = inst_131451);

(statearr_131515[(12)] = inst_131442__$1);

return statearr_131515;
})();
var statearr_131516_131567 = state_131491__$1;
(statearr_131516_131567[(2)] = null);

(statearr_131516_131567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (22))){
var state_131491__$1 = state_131491;
var statearr_131517_131568 = state_131491__$1;
(statearr_131517_131568[(2)] = null);

(statearr_131517_131568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (6))){
var inst_131428 = (state_131491[(13)]);
var inst_131437 = f.call(null,inst_131428);
var inst_131438 = cljs.core.seq.call(null,inst_131437);
var inst_131440 = inst_131438;
var inst_131441 = null;
var inst_131442 = (0);
var inst_131443 = (0);
var state_131491__$1 = (function (){var statearr_131518 = state_131491;
(statearr_131518[(8)] = inst_131443);

(statearr_131518[(9)] = inst_131440);

(statearr_131518[(11)] = inst_131441);

(statearr_131518[(12)] = inst_131442);

return statearr_131518;
})();
var statearr_131520_131574 = state_131491__$1;
(statearr_131520_131574[(2)] = null);

(statearr_131520_131574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (17))){
var inst_131455 = (state_131491[(7)]);
var inst_131459 = cljs.core.chunk_first.call(null,inst_131455);
var inst_131461 = cljs.core.chunk_rest.call(null,inst_131455);
var inst_131462 = cljs.core.count.call(null,inst_131459);
var inst_131440 = inst_131461;
var inst_131441 = inst_131459;
var inst_131442 = inst_131462;
var inst_131443 = (0);
var state_131491__$1 = (function (){var statearr_131521 = state_131491;
(statearr_131521[(8)] = inst_131443);

(statearr_131521[(9)] = inst_131440);

(statearr_131521[(11)] = inst_131441);

(statearr_131521[(12)] = inst_131442);

return statearr_131521;
})();
var statearr_131523_131580 = state_131491__$1;
(statearr_131523_131580[(2)] = null);

(statearr_131523_131580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (3))){
var inst_131489 = (state_131491[(2)]);
var state_131491__$1 = state_131491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131491__$1,inst_131489);
} else {
if((state_val_131492 === (12))){
var inst_131476 = (state_131491[(2)]);
var state_131491__$1 = state_131491;
var statearr_131524_131581 = state_131491__$1;
(statearr_131524_131581[(2)] = inst_131476);

(statearr_131524_131581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (2))){
var state_131491__$1 = state_131491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131491__$1,(4),in$);
} else {
if((state_val_131492 === (23))){
var inst_131485 = (state_131491[(2)]);
var state_131491__$1 = state_131491;
var statearr_131526_131583 = state_131491__$1;
(statearr_131526_131583[(2)] = inst_131485);

(statearr_131526_131583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (19))){
var inst_131471 = (state_131491[(2)]);
var state_131491__$1 = state_131491;
var statearr_131527_131586 = state_131491__$1;
(statearr_131527_131586[(2)] = inst_131471);

(statearr_131527_131586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (11))){
var inst_131440 = (state_131491[(9)]);
var inst_131455 = (state_131491[(7)]);
var inst_131455__$1 = cljs.core.seq.call(null,inst_131440);
var state_131491__$1 = (function (){var statearr_131528 = state_131491;
(statearr_131528[(7)] = inst_131455__$1);

return statearr_131528;
})();
if(inst_131455__$1){
var statearr_131529_131588 = state_131491__$1;
(statearr_131529_131588[(1)] = (14));

} else {
var statearr_131530_131589 = state_131491__$1;
(statearr_131530_131589[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (9))){
var inst_131478 = (state_131491[(2)]);
var inst_131479 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_131491__$1 = (function (){var statearr_131532 = state_131491;
(statearr_131532[(15)] = inst_131478);

return statearr_131532;
})();
if(cljs.core.truth_(inst_131479)){
var statearr_131533_131590 = state_131491__$1;
(statearr_131533_131590[(1)] = (21));

} else {
var statearr_131534_131591 = state_131491__$1;
(statearr_131534_131591[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (5))){
var inst_131431 = cljs.core.async.close_BANG_.call(null,out);
var state_131491__$1 = state_131491;
var statearr_131536_131592 = state_131491__$1;
(statearr_131536_131592[(2)] = inst_131431);

(statearr_131536_131592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (14))){
var inst_131455 = (state_131491[(7)]);
var inst_131457 = cljs.core.chunked_seq_QMARK_.call(null,inst_131455);
var state_131491__$1 = state_131491;
if(inst_131457){
var statearr_131537_131594 = state_131491__$1;
(statearr_131537_131594[(1)] = (17));

} else {
var statearr_131538_131596 = state_131491__$1;
(statearr_131538_131596[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (16))){
var inst_131474 = (state_131491[(2)]);
var state_131491__$1 = state_131491;
var statearr_131539_131600 = state_131491__$1;
(statearr_131539_131600[(2)] = inst_131474);

(statearr_131539_131600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131492 === (10))){
var inst_131443 = (state_131491[(8)]);
var inst_131441 = (state_131491[(11)]);
var inst_131449 = cljs.core._nth.call(null,inst_131441,inst_131443);
var state_131491__$1 = state_131491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131491__$1,(13),out,inst_131449);
} else {
if((state_val_131492 === (18))){
var inst_131455 = (state_131491[(7)]);
var inst_131465 = cljs.core.first.call(null,inst_131455);
var state_131491__$1 = state_131491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131491__$1,(20),out,inst_131465);
} else {
if((state_val_131492 === (8))){
var inst_131443 = (state_131491[(8)]);
var inst_131442 = (state_131491[(12)]);
var inst_131446 = (inst_131443 < inst_131442);
var inst_131447 = inst_131446;
var state_131491__$1 = state_131491;
if(cljs.core.truth_(inst_131447)){
var statearr_131541_131601 = state_131491__$1;
(statearr_131541_131601[(1)] = (10));

} else {
var statearr_131542_131602 = state_131491__$1;
(statearr_131542_131602[(1)] = (11));

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
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15807__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15807__auto____0 = (function (){
var statearr_131546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_131546[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15807__auto__);

(statearr_131546[(1)] = (1));

return statearr_131546;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15807__auto____1 = (function (state_131491){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_131491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e131548){if((e131548 instanceof Object)){
var ex__15810__auto__ = e131548;
var statearr_131549_131604 = state_131491;
(statearr_131549_131604[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e131548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__131605 = state_131491;
state_131491 = G__131605;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15807__auto__ = function(state_131491){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15807__auto____1.call(this,state_131491);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15807__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15807__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_131550 = f__15830__auto__.call(null);
(statearr_131550[(6)] = c__15829__auto__);

return statearr_131550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__131609 = arguments.length;
switch (G__131609) {
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
var G__131613 = arguments.length;
switch (G__131613) {
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
var G__131616 = arguments.length;
switch (G__131616) {
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
var c__15829__auto___131684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___131684,out){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___131684,out){
return (function (state_131640){
var state_val_131641 = (state_131640[(1)]);
if((state_val_131641 === (7))){
var inst_131635 = (state_131640[(2)]);
var state_131640__$1 = state_131640;
var statearr_131642_131689 = state_131640__$1;
(statearr_131642_131689[(2)] = inst_131635);

(statearr_131642_131689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131641 === (1))){
var inst_131617 = null;
var state_131640__$1 = (function (){var statearr_131643 = state_131640;
(statearr_131643[(7)] = inst_131617);

return statearr_131643;
})();
var statearr_131644_131691 = state_131640__$1;
(statearr_131644_131691[(2)] = null);

(statearr_131644_131691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131641 === (4))){
var inst_131620 = (state_131640[(8)]);
var inst_131620__$1 = (state_131640[(2)]);
var inst_131621 = (inst_131620__$1 == null);
var inst_131622 = cljs.core.not.call(null,inst_131621);
var state_131640__$1 = (function (){var statearr_131645 = state_131640;
(statearr_131645[(8)] = inst_131620__$1);

return statearr_131645;
})();
if(inst_131622){
var statearr_131646_131704 = state_131640__$1;
(statearr_131646_131704[(1)] = (5));

} else {
var statearr_131647_131707 = state_131640__$1;
(statearr_131647_131707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131641 === (6))){
var state_131640__$1 = state_131640;
var statearr_131648_131710 = state_131640__$1;
(statearr_131648_131710[(2)] = null);

(statearr_131648_131710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131641 === (3))){
var inst_131637 = (state_131640[(2)]);
var inst_131638 = cljs.core.async.close_BANG_.call(null,out);
var state_131640__$1 = (function (){var statearr_131649 = state_131640;
(statearr_131649[(9)] = inst_131637);

return statearr_131649;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131640__$1,inst_131638);
} else {
if((state_val_131641 === (2))){
var state_131640__$1 = state_131640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131640__$1,(4),ch);
} else {
if((state_val_131641 === (11))){
var inst_131620 = (state_131640[(8)]);
var inst_131629 = (state_131640[(2)]);
var inst_131617 = inst_131620;
var state_131640__$1 = (function (){var statearr_131650 = state_131640;
(statearr_131650[(7)] = inst_131617);

(statearr_131650[(10)] = inst_131629);

return statearr_131650;
})();
var statearr_131651_131730 = state_131640__$1;
(statearr_131651_131730[(2)] = null);

(statearr_131651_131730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131641 === (9))){
var inst_131620 = (state_131640[(8)]);
var state_131640__$1 = state_131640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131640__$1,(11),out,inst_131620);
} else {
if((state_val_131641 === (5))){
var inst_131617 = (state_131640[(7)]);
var inst_131620 = (state_131640[(8)]);
var inst_131624 = cljs.core._EQ_.call(null,inst_131620,inst_131617);
var state_131640__$1 = state_131640;
if(inst_131624){
var statearr_131653_131736 = state_131640__$1;
(statearr_131653_131736[(1)] = (8));

} else {
var statearr_131655_131738 = state_131640__$1;
(statearr_131655_131738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131641 === (10))){
var inst_131632 = (state_131640[(2)]);
var state_131640__$1 = state_131640;
var statearr_131656_131740 = state_131640__$1;
(statearr_131656_131740[(2)] = inst_131632);

(statearr_131656_131740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131641 === (8))){
var inst_131617 = (state_131640[(7)]);
var tmp131652 = inst_131617;
var inst_131617__$1 = tmp131652;
var state_131640__$1 = (function (){var statearr_131657 = state_131640;
(statearr_131657[(7)] = inst_131617__$1);

return statearr_131657;
})();
var statearr_131660_131742 = state_131640__$1;
(statearr_131660_131742[(2)] = null);

(statearr_131660_131742[(1)] = (2));


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
});})(c__15829__auto___131684,out))
;
return ((function (switch__15806__auto__,c__15829__auto___131684,out){
return (function() {
var cljs$core$async$state_machine__15807__auto__ = null;
var cljs$core$async$state_machine__15807__auto____0 = (function (){
var statearr_131662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_131662[(0)] = cljs$core$async$state_machine__15807__auto__);

(statearr_131662[(1)] = (1));

return statearr_131662;
});
var cljs$core$async$state_machine__15807__auto____1 = (function (state_131640){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_131640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e131663){if((e131663 instanceof Object)){
var ex__15810__auto__ = e131663;
var statearr_131664_131743 = state_131640;
(statearr_131664_131743[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e131663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__131744 = state_131640;
state_131640 = G__131744;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$state_machine__15807__auto__ = function(state_131640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15807__auto____1.call(this,state_131640);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15807__auto____0;
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15807__auto____1;
return cljs$core$async$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___131684,out))
})();
var state__15831__auto__ = (function (){var statearr_131665 = f__15830__auto__.call(null);
(statearr_131665[(6)] = c__15829__auto___131684);

return statearr_131665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___131684,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__131746 = arguments.length;
switch (G__131746) {
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
var c__15829__auto___131821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___131821,out){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___131821,out){
return (function (state_131787){
var state_val_131788 = (state_131787[(1)]);
if((state_val_131788 === (7))){
var inst_131783 = (state_131787[(2)]);
var state_131787__$1 = state_131787;
var statearr_131790_131823 = state_131787__$1;
(statearr_131790_131823[(2)] = inst_131783);

(statearr_131790_131823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131788 === (1))){
var inst_131749 = (new Array(n));
var inst_131750 = inst_131749;
var inst_131751 = (0);
var state_131787__$1 = (function (){var statearr_131791 = state_131787;
(statearr_131791[(7)] = inst_131751);

(statearr_131791[(8)] = inst_131750);

return statearr_131791;
})();
var statearr_131792_131824 = state_131787__$1;
(statearr_131792_131824[(2)] = null);

(statearr_131792_131824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131788 === (4))){
var inst_131754 = (state_131787[(9)]);
var inst_131754__$1 = (state_131787[(2)]);
var inst_131755 = (inst_131754__$1 == null);
var inst_131756 = cljs.core.not.call(null,inst_131755);
var state_131787__$1 = (function (){var statearr_131793 = state_131787;
(statearr_131793[(9)] = inst_131754__$1);

return statearr_131793;
})();
if(inst_131756){
var statearr_131794_131826 = state_131787__$1;
(statearr_131794_131826[(1)] = (5));

} else {
var statearr_131795_131827 = state_131787__$1;
(statearr_131795_131827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131788 === (15))){
var inst_131777 = (state_131787[(2)]);
var state_131787__$1 = state_131787;
var statearr_131796_131829 = state_131787__$1;
(statearr_131796_131829[(2)] = inst_131777);

(statearr_131796_131829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131788 === (13))){
var state_131787__$1 = state_131787;
var statearr_131797_131830 = state_131787__$1;
(statearr_131797_131830[(2)] = null);

(statearr_131797_131830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131788 === (6))){
var inst_131751 = (state_131787[(7)]);
var inst_131773 = (inst_131751 > (0));
var state_131787__$1 = state_131787;
if(cljs.core.truth_(inst_131773)){
var statearr_131798_131831 = state_131787__$1;
(statearr_131798_131831[(1)] = (12));

} else {
var statearr_131799_131832 = state_131787__$1;
(statearr_131799_131832[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131788 === (3))){
var inst_131785 = (state_131787[(2)]);
var state_131787__$1 = state_131787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131787__$1,inst_131785);
} else {
if((state_val_131788 === (12))){
var inst_131750 = (state_131787[(8)]);
var inst_131775 = cljs.core.vec.call(null,inst_131750);
var state_131787__$1 = state_131787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131787__$1,(15),out,inst_131775);
} else {
if((state_val_131788 === (2))){
var state_131787__$1 = state_131787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131787__$1,(4),ch);
} else {
if((state_val_131788 === (11))){
var inst_131767 = (state_131787[(2)]);
var inst_131768 = (new Array(n));
var inst_131750 = inst_131768;
var inst_131751 = (0);
var state_131787__$1 = (function (){var statearr_131801 = state_131787;
(statearr_131801[(7)] = inst_131751);

(statearr_131801[(8)] = inst_131750);

(statearr_131801[(10)] = inst_131767);

return statearr_131801;
})();
var statearr_131802_131838 = state_131787__$1;
(statearr_131802_131838[(2)] = null);

(statearr_131802_131838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131788 === (9))){
var inst_131750 = (state_131787[(8)]);
var inst_131765 = cljs.core.vec.call(null,inst_131750);
var state_131787__$1 = state_131787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131787__$1,(11),out,inst_131765);
} else {
if((state_val_131788 === (5))){
var inst_131754 = (state_131787[(9)]);
var inst_131751 = (state_131787[(7)]);
var inst_131760 = (state_131787[(11)]);
var inst_131750 = (state_131787[(8)]);
var inst_131759 = (inst_131750[inst_131751] = inst_131754);
var inst_131760__$1 = (inst_131751 + (1));
var inst_131761 = (inst_131760__$1 < n);
var state_131787__$1 = (function (){var statearr_131804 = state_131787;
(statearr_131804[(11)] = inst_131760__$1);

(statearr_131804[(12)] = inst_131759);

return statearr_131804;
})();
if(cljs.core.truth_(inst_131761)){
var statearr_131805_131843 = state_131787__$1;
(statearr_131805_131843[(1)] = (8));

} else {
var statearr_131806_131844 = state_131787__$1;
(statearr_131806_131844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131788 === (14))){
var inst_131780 = (state_131787[(2)]);
var inst_131781 = cljs.core.async.close_BANG_.call(null,out);
var state_131787__$1 = (function (){var statearr_131808 = state_131787;
(statearr_131808[(13)] = inst_131780);

return statearr_131808;
})();
var statearr_131809_131846 = state_131787__$1;
(statearr_131809_131846[(2)] = inst_131781);

(statearr_131809_131846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131788 === (10))){
var inst_131771 = (state_131787[(2)]);
var state_131787__$1 = state_131787;
var statearr_131810_131848 = state_131787__$1;
(statearr_131810_131848[(2)] = inst_131771);

(statearr_131810_131848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131788 === (8))){
var inst_131760 = (state_131787[(11)]);
var inst_131750 = (state_131787[(8)]);
var tmp131807 = inst_131750;
var inst_131750__$1 = tmp131807;
var inst_131751 = inst_131760;
var state_131787__$1 = (function (){var statearr_131811 = state_131787;
(statearr_131811[(7)] = inst_131751);

(statearr_131811[(8)] = inst_131750__$1);

return statearr_131811;
})();
var statearr_131812_131849 = state_131787__$1;
(statearr_131812_131849[(2)] = null);

(statearr_131812_131849[(1)] = (2));


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
});})(c__15829__auto___131821,out))
;
return ((function (switch__15806__auto__,c__15829__auto___131821,out){
return (function() {
var cljs$core$async$state_machine__15807__auto__ = null;
var cljs$core$async$state_machine__15807__auto____0 = (function (){
var statearr_131813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_131813[(0)] = cljs$core$async$state_machine__15807__auto__);

(statearr_131813[(1)] = (1));

return statearr_131813;
});
var cljs$core$async$state_machine__15807__auto____1 = (function (state_131787){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_131787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e131814){if((e131814 instanceof Object)){
var ex__15810__auto__ = e131814;
var statearr_131815_131850 = state_131787;
(statearr_131815_131850[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e131814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__131851 = state_131787;
state_131787 = G__131851;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$state_machine__15807__auto__ = function(state_131787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15807__auto____1.call(this,state_131787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15807__auto____0;
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15807__auto____1;
return cljs$core$async$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___131821,out))
})();
var state__15831__auto__ = (function (){var statearr_131816 = f__15830__auto__.call(null);
(statearr_131816[(6)] = c__15829__auto___131821);

return statearr_131816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___131821,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__131853 = arguments.length;
switch (G__131853) {
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
var c__15829__auto___132031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___132031,out){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___132031,out){
return (function (state_131907){
var state_val_131908 = (state_131907[(1)]);
if((state_val_131908 === (7))){
var inst_131903 = (state_131907[(2)]);
var state_131907__$1 = state_131907;
var statearr_131926_132037 = state_131907__$1;
(statearr_131926_132037[(2)] = inst_131903);

(statearr_131926_132037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131908 === (1))){
var inst_131859 = [];
var inst_131861 = inst_131859;
var inst_131862 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_131907__$1 = (function (){var statearr_131935 = state_131907;
(statearr_131935[(7)] = inst_131861);

(statearr_131935[(8)] = inst_131862);

return statearr_131935;
})();
var statearr_131948_132042 = state_131907__$1;
(statearr_131948_132042[(2)] = null);

(statearr_131948_132042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131908 === (4))){
var inst_131865 = (state_131907[(9)]);
var inst_131865__$1 = (state_131907[(2)]);
var inst_131867 = (inst_131865__$1 == null);
var inst_131868 = cljs.core.not.call(null,inst_131867);
var state_131907__$1 = (function (){var statearr_131975 = state_131907;
(statearr_131975[(9)] = inst_131865__$1);

return statearr_131975;
})();
if(inst_131868){
var statearr_131976_132044 = state_131907__$1;
(statearr_131976_132044[(1)] = (5));

} else {
var statearr_131978_132046 = state_131907__$1;
(statearr_131978_132046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131908 === (15))){
var inst_131897 = (state_131907[(2)]);
var state_131907__$1 = state_131907;
var statearr_131980_132049 = state_131907__$1;
(statearr_131980_132049[(2)] = inst_131897);

(statearr_131980_132049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131908 === (13))){
var state_131907__$1 = state_131907;
var statearr_131981_132050 = state_131907__$1;
(statearr_131981_132050[(2)] = null);

(statearr_131981_132050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131908 === (6))){
var inst_131861 = (state_131907[(7)]);
var inst_131892 = inst_131861.length;
var inst_131893 = (inst_131892 > (0));
var state_131907__$1 = state_131907;
if(cljs.core.truth_(inst_131893)){
var statearr_131984_132051 = state_131907__$1;
(statearr_131984_132051[(1)] = (12));

} else {
var statearr_131986_132052 = state_131907__$1;
(statearr_131986_132052[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131908 === (3))){
var inst_131905 = (state_131907[(2)]);
var state_131907__$1 = state_131907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131907__$1,inst_131905);
} else {
if((state_val_131908 === (12))){
var inst_131861 = (state_131907[(7)]);
var inst_131895 = cljs.core.vec.call(null,inst_131861);
var state_131907__$1 = state_131907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131907__$1,(15),out,inst_131895);
} else {
if((state_val_131908 === (2))){
var state_131907__$1 = state_131907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131907__$1,(4),ch);
} else {
if((state_val_131908 === (11))){
var inst_131865 = (state_131907[(9)]);
var inst_131871 = (state_131907[(10)]);
var inst_131885 = (state_131907[(2)]);
var inst_131886 = [];
var inst_131887 = inst_131886.push(inst_131865);
var inst_131861 = inst_131886;
var inst_131862 = inst_131871;
var state_131907__$1 = (function (){var statearr_131991 = state_131907;
(statearr_131991[(11)] = inst_131885);

(statearr_131991[(12)] = inst_131887);

(statearr_131991[(7)] = inst_131861);

(statearr_131991[(8)] = inst_131862);

return statearr_131991;
})();
var statearr_131992_132056 = state_131907__$1;
(statearr_131992_132056[(2)] = null);

(statearr_131992_132056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131908 === (9))){
var inst_131861 = (state_131907[(7)]);
var inst_131883 = cljs.core.vec.call(null,inst_131861);
var state_131907__$1 = state_131907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131907__$1,(11),out,inst_131883);
} else {
if((state_val_131908 === (5))){
var inst_131865 = (state_131907[(9)]);
var inst_131871 = (state_131907[(10)]);
var inst_131862 = (state_131907[(8)]);
var inst_131871__$1 = f.call(null,inst_131865);
var inst_131874 = cljs.core._EQ_.call(null,inst_131871__$1,inst_131862);
var inst_131875 = cljs.core.keyword_identical_QMARK_.call(null,inst_131862,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_131876 = ((inst_131874) || (inst_131875));
var state_131907__$1 = (function (){var statearr_131997 = state_131907;
(statearr_131997[(10)] = inst_131871__$1);

return statearr_131997;
})();
if(cljs.core.truth_(inst_131876)){
var statearr_131998_132059 = state_131907__$1;
(statearr_131998_132059[(1)] = (8));

} else {
var statearr_131999_132060 = state_131907__$1;
(statearr_131999_132060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131908 === (14))){
var inst_131900 = (state_131907[(2)]);
var inst_131901 = cljs.core.async.close_BANG_.call(null,out);
var state_131907__$1 = (function (){var statearr_132002 = state_131907;
(statearr_132002[(13)] = inst_131900);

return statearr_132002;
})();
var statearr_132003_132061 = state_131907__$1;
(statearr_132003_132061[(2)] = inst_131901);

(statearr_132003_132061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131908 === (10))){
var inst_131890 = (state_131907[(2)]);
var state_131907__$1 = state_131907;
var statearr_132005_132064 = state_131907__$1;
(statearr_132005_132064[(2)] = inst_131890);

(statearr_132005_132064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131908 === (8))){
var inst_131865 = (state_131907[(9)]);
var inst_131861 = (state_131907[(7)]);
var inst_131871 = (state_131907[(10)]);
var inst_131879 = inst_131861.push(inst_131865);
var tmp132001 = inst_131861;
var inst_131861__$1 = tmp132001;
var inst_131862 = inst_131871;
var state_131907__$1 = (function (){var statearr_132008 = state_131907;
(statearr_132008[(14)] = inst_131879);

(statearr_132008[(7)] = inst_131861__$1);

(statearr_132008[(8)] = inst_131862);

return statearr_132008;
})();
var statearr_132009_132067 = state_131907__$1;
(statearr_132009_132067[(2)] = null);

(statearr_132009_132067[(1)] = (2));


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
});})(c__15829__auto___132031,out))
;
return ((function (switch__15806__auto__,c__15829__auto___132031,out){
return (function() {
var cljs$core$async$state_machine__15807__auto__ = null;
var cljs$core$async$state_machine__15807__auto____0 = (function (){
var statearr_132012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_132012[(0)] = cljs$core$async$state_machine__15807__auto__);

(statearr_132012[(1)] = (1));

return statearr_132012;
});
var cljs$core$async$state_machine__15807__auto____1 = (function (state_131907){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_131907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e132015){if((e132015 instanceof Object)){
var ex__15810__auto__ = e132015;
var statearr_132017_132070 = state_131907;
(statearr_132017_132070[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e132015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__132072 = state_131907;
state_131907 = G__132072;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
cljs$core$async$state_machine__15807__auto__ = function(state_131907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15807__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15807__auto____1.call(this,state_131907);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15807__auto____0;
cljs$core$async$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15807__auto____1;
return cljs$core$async$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___132031,out))
})();
var state__15831__auto__ = (function (){var statearr_132020 = f__15830__auto__.call(null);
(statearr_132020[(6)] = c__15829__auto___132031);

return statearr_132020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___132031,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
.js.map
