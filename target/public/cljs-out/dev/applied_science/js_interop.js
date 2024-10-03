// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('applied_science.js_interop');
goog.require('cljs.core');
goog.require('goog.reflect');
goog.require('cljs.core');
goog.require('applied_science.js_interop.impl');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27482 = arguments.length;
var i__5727__auto___27483 = (0);
while(true){
if((i__5727__auto___27483 < len__5726__auto___27482)){
args__5732__auto__.push((arguments[i__5727__auto___27483]));

var G__27484 = (i__5727__auto___27483 + (1));
i__5727__auto___27483 = G__27484;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__27475_27485 = keyvals;
var vec__27476_27486 = G__27475_27485;
var seq__27477_27487 = cljs.core.seq.call(null,vec__27476_27486);
var first__27478_27488 = cljs.core.first.call(null,seq__27477_27487);
var seq__27477_27489__$1 = cljs.core.next.call(null,seq__27477_27487);
var k_27490 = first__27478_27488;
var first__27478_27491__$1 = cljs.core.first.call(null,seq__27477_27489__$1);
var seq__27477_27492__$2 = cljs.core.next.call(null,seq__27477_27489__$1);
var v_27493 = first__27478_27491__$1;
var keyvals_27494__$1 = seq__27477_27492__$2;
var G__27475_27495__$1 = G__27475_27485;
while(true){
var vec__27479_27496 = G__27475_27495__$1;
var seq__27480_27497 = cljs.core.seq.call(null,vec__27479_27496);
var first__27481_27498 = cljs.core.first.call(null,seq__27480_27497);
var seq__27480_27499__$1 = cljs.core.next.call(null,seq__27480_27497);
var k_27500__$1 = first__27481_27498;
var first__27481_27501__$1 = cljs.core.first.call(null,seq__27480_27499__$1);
var seq__27480_27502__$2 = cljs.core.next.call(null,seq__27480_27499__$1);
var v_27503__$1 = first__27481_27501__$1;
var keyvals_27504__$2 = seq__27480_27502__$2;
(obj[applied_science.js_interop.impl.wrap_key.call(null,k_27500__$1)] = v_27503__$1);

if(keyvals_27504__$2){
var G__27505 = keyvals_27504__$2;
G__27475_27495__$1 = G__27505;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq27470){
var G__27471 = cljs.core.first.call(null,seq27470);
var seq27470__$1 = cljs.core.next.call(null,seq27470);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27471,seq27470__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key.call(null,k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__27507 = arguments.length;
switch (G__27507) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj27508 = obj;
if((!((obj27508 == null)))){
return (obj27508[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj27509 = obj;
if((!((obj27509 == null)))){
return (obj27509[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__26806__auto__ = (function (){var obj27510 = obj;
if((!((obj27510 == null)))){
return (obj27510[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
})();
if((void 0 === val__26806__auto__)){
return not_found;
} else {
return val__26806__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__27513 = arguments.length;
switch (G__27513) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.call(null,obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj,applied_science.js_interop.impl.wrap_key.call(null,k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj27515 = self__.obj;
if((!((obj27515 == null)))){
return (obj27515[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__26806__auto__ = (function (){var obj27516 = self__.obj;
if((!((obj27516 == null)))){
return (obj27516[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
})();
if((void 0 === val__26806__auto__)){
return not_found;
} else {
return val__26806__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27529 = arguments.length;
var i__5727__auto___27530 = (0);
while(true){
if((i__5727__auto___27530 < len__5726__auto___27529)){
args__5732__auto__.push((arguments[i__5727__auto___27530]));

var G__27531 = (i__5727__auto___27530 + (1));
i__5727__auto___27530 = G__27531;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__27522 = keyvals;
var vec__27523 = G__27522;
var seq__27524 = cljs.core.seq.call(null,vec__27523);
var first__27525 = cljs.core.first.call(null,seq__27524);
var seq__27524__$1 = cljs.core.next.call(null,seq__27524);
var k = first__27525;
var first__27525__$1 = cljs.core.first.call(null,seq__27524__$1);
var seq__27524__$2 = cljs.core.next.call(null,seq__27524__$1);
var v = first__27525__$1;
var kvs = seq__27524__$2;
var G__27522__$1 = G__27522;
while(true){
var vec__27526 = G__27522__$1;
var seq__27527 = cljs.core.seq.call(null,vec__27526);
var first__27528 = cljs.core.first.call(null,seq__27527);
var seq__27527__$1 = cljs.core.next.call(null,seq__27527);
var k__$1 = first__27528;
var first__27528__$1 = cljs.core.first.call(null,seq__27527__$1);
var seq__27527__$2 = cljs.core.next.call(null,seq__27527__$1);
var v__$1 = first__27528__$1;
var kvs__$1 = seq__27527__$2;
applied_science.js_interop.unchecked_set.call(null,obj__$1,k__$1,v__$1);

if(kvs__$1){
var G__27532 = kvs__$1;
G__27522__$1 = G__27532;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq27517){
var G__27518 = cljs.core.first.call(null,seq27517);
var seq27517__$1 = cljs.core.next.call(null,seq27517);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27518,seq27517__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27537 = arguments.length;
var i__5727__auto___27538 = (0);
while(true){
if((i__5727__auto___27538 < len__5726__auto___27537)){
args__5732__auto__.push((arguments[i__5727__auto___27538]));

var G__27539 = (i__5727__auto___27538 + (1));
i__5727__auto___27538 = G__27539;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key.call(null,k);
var v = cljs.core.apply.call(null,f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq27533){
var G__27534 = cljs.core.first.call(null,seq27533);
var seq27533__$1 = cljs.core.next.call(null,seq27533);
var G__27535 = cljs.core.first.call(null,seq27533__$1);
var seq27533__$2 = cljs.core.next.call(null,seq27533__$1);
var G__27536 = cljs.core.first.call(null,seq27533__$2);
var seq27533__$3 = cljs.core.next.call(null,seq27533__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27534,G__27535,G__27536,seq27533__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27544 = arguments.length;
var i__5727__auto___27545 = (0);
while(true){
if((i__5727__auto___27545 < len__5726__auto___27544)){
args__5732__auto__.push((arguments[i__5727__auto___27545]));

var G__27546 = (i__5727__auto___27545 + (1));
i__5727__auto___27545 = G__27546;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq27540){
var G__27541 = cljs.core.first.call(null,seq27540);
var seq27540__$1 = cljs.core.next.call(null,seq27540);
var G__27542 = cljs.core.first.call(null,seq27540__$1);
var seq27540__$2 = cljs.core.next.call(null,seq27540__$1);
var G__27543 = cljs.core.first.call(null,seq27540__$2);
var seq27540__$3 = cljs.core.next.call(null,seq27540__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27541,G__27542,G__27543,seq27540__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.merge_BANG_ = (function applied_science$js_interop$merge_BANG_(var_args){
var G__27551 = arguments.length;
switch (G__27551) {
case 1:
return applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___27557 = arguments.length;
var i__5727__auto___27558 = (0);
while(true){
if((i__5727__auto___27558 < len__5726__auto___27557)){
args_arr__5751__auto__.push((arguments[i__5727__auto___27558]));

var G__27559 = (i__5727__auto___27558 + (1));
i__5727__auto___27558 = G__27559;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__27552_27560 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,x));
var chunk__27553_27561 = null;
var count__27554_27562 = (0);
var i__27555_27563 = (0);
while(true){
if((i__27555_27563 < count__27554_27562)){
var k_27564 = cljs.core._nth.call(null,chunk__27553_27561,i__27555_27563);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_27564,applied_science.js_interop.unchecked_get.call(null,x,k_27564));


var G__27565 = seq__27552_27560;
var G__27566 = chunk__27553_27561;
var G__27567 = count__27554_27562;
var G__27568 = (i__27555_27563 + (1));
seq__27552_27560 = G__27565;
chunk__27553_27561 = G__27566;
count__27554_27562 = G__27567;
i__27555_27563 = G__27568;
continue;
} else {
var temp__5823__auto___27569 = cljs.core.seq.call(null,seq__27552_27560);
if(temp__5823__auto___27569){
var seq__27552_27570__$1 = temp__5823__auto___27569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27552_27570__$1)){
var c__5525__auto___27571 = cljs.core.chunk_first.call(null,seq__27552_27570__$1);
var G__27572 = cljs.core.chunk_rest.call(null,seq__27552_27570__$1);
var G__27573 = c__5525__auto___27571;
var G__27574 = cljs.core.count.call(null,c__5525__auto___27571);
var G__27575 = (0);
seq__27552_27560 = G__27572;
chunk__27553_27561 = G__27573;
count__27554_27562 = G__27574;
i__27555_27563 = G__27575;
continue;
} else {
var k_27576 = cljs.core.first.call(null,seq__27552_27570__$1);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_27576,applied_science.js_interop.unchecked_get.call(null,x,k_27576));


var G__27577 = cljs.core.next.call(null,seq__27552_27570__$1);
var G__27578 = null;
var G__27579 = (0);
var G__27580 = (0);
seq__27552_27560 = G__27577;
chunk__27553_27561 = G__27578;
count__27554_27562 = G__27579;
i__27555_27563 = G__27580;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.call(null,applied_science.js_interop.merge_BANG_,applied_science.js_interop.merge_BANG_.call(null,obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.merge_BANG_.cljs$lang$applyTo = (function (seq27548){
var G__27549 = cljs.core.first.call(null,seq27548);
var seq27548__$1 = cljs.core.next.call(null,seq27548);
var G__27550 = cljs.core.first.call(null,seq27548__$1);
var seq27548__$2 = cljs.core.next.call(null,seq27548__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27549,G__27550,seq27548__$2);
}));

(applied_science.js_interop.merge_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * alias for merge!
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__27585 = arguments.length;
switch (G__27585) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___27587 = arguments.length;
var i__5727__auto___27588 = (0);
while(true){
if((i__5727__auto___27588 < len__5726__auto___27587)){
args_arr__5751__auto__.push((arguments[i__5727__auto___27588]));

var G__27589 = (i__5727__auto___27588 + (1));
i__5727__auto___27588 = G__27589;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
return applied_science.js_interop.merge_BANG_.call(null,obj,x);
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.call(null,applied_science.js_interop.merge_BANG_,applied_science.js_interop.merge_BANG_.call(null,obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq27582){
var G__27583 = cljs.core.first.call(null,seq27582);
var seq27582__$1 = cljs.core.next.call(null,seq27582);
var G__27584 = cljs.core.first.call(null,seq27582__$1);
var seq27582__$2 = cljs.core.next.call(null,seq27582__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27583,G__27584,seq27582__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

applied_science.js_interop.update_keys_BANG_ = (function applied_science$js_interop$update_keys_BANG_(obj,f){

if(cljs.core.truth_(obj)){
var seq__27590_27596 = cljs.core.seq.call(null,Object.keys(obj));
var chunk__27592_27597 = null;
var count__27593_27598 = (0);
var i__27594_27599 = (0);
while(true){
if((i__27594_27599 < count__27593_27598)){
var k_27600 = cljs.core._nth.call(null,chunk__27592_27597,i__27594_27599);
var v_27601 = (obj[k_27600]);
delete obj[k_27600];

(obj[f.call(null,k_27600)] = v_27601);


var G__27602 = seq__27590_27596;
var G__27603 = chunk__27592_27597;
var G__27604 = count__27593_27598;
var G__27605 = (i__27594_27599 + (1));
seq__27590_27596 = G__27602;
chunk__27592_27597 = G__27603;
count__27593_27598 = G__27604;
i__27594_27599 = G__27605;
continue;
} else {
var temp__5823__auto___27606 = cljs.core.seq.call(null,seq__27590_27596);
if(temp__5823__auto___27606){
var seq__27590_27607__$1 = temp__5823__auto___27606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27590_27607__$1)){
var c__5525__auto___27608 = cljs.core.chunk_first.call(null,seq__27590_27607__$1);
var G__27609 = cljs.core.chunk_rest.call(null,seq__27590_27607__$1);
var G__27610 = c__5525__auto___27608;
var G__27611 = cljs.core.count.call(null,c__5525__auto___27608);
var G__27612 = (0);
seq__27590_27596 = G__27609;
chunk__27592_27597 = G__27610;
count__27593_27598 = G__27611;
i__27594_27599 = G__27612;
continue;
} else {
var k_27613 = cljs.core.first.call(null,seq__27590_27607__$1);
var v_27614 = (obj[k_27613]);
delete obj[k_27613];

(obj[f.call(null,k_27613)] = v_27614);


var G__27615 = cljs.core.next.call(null,seq__27590_27607__$1);
var G__27616 = null;
var G__27617 = (0);
var G__27618 = (0);
seq__27590_27596 = G__27615;
chunk__27592_27597 = G__27616;
count__27593_27598 = G__27617;
i__27594_27599 = G__27618;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return null;
}
});
applied_science.js_interop.update_vals_BANG_ = (function applied_science$js_interop$update_vals_BANG_(obj,f){

if(cljs.core.truth_(obj)){
var seq__27619_27639 = cljs.core.seq.call(null,Object.entries(obj));
var chunk__27620_27640 = null;
var count__27621_27641 = (0);
var i__27622_27642 = (0);
while(true){
if((i__27622_27642 < count__27621_27641)){
var entry_27643 = cljs.core._nth.call(null,chunk__27620_27640,i__27622_27642);
var vec__27631_27644 = entry_27643;
var some_vec__27632_27645 = (!((vec__27631_27644 == null)));
var k_27646 = ((some_vec__27632_27645)?(vec__27631_27644[(0)]):null);
var v_27647 = ((some_vec__27632_27645)?(vec__27631_27644[(1)]):null);
(obj[k_27646] = f.call(null,v_27647));


var G__27648 = seq__27619_27639;
var G__27649 = chunk__27620_27640;
var G__27650 = count__27621_27641;
var G__27651 = (i__27622_27642 + (1));
seq__27619_27639 = G__27648;
chunk__27620_27640 = G__27649;
count__27621_27641 = G__27650;
i__27622_27642 = G__27651;
continue;
} else {
var temp__5823__auto___27652 = cljs.core.seq.call(null,seq__27619_27639);
if(temp__5823__auto___27652){
var seq__27619_27653__$1 = temp__5823__auto___27652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27619_27653__$1)){
var c__5525__auto___27654 = cljs.core.chunk_first.call(null,seq__27619_27653__$1);
var G__27655 = cljs.core.chunk_rest.call(null,seq__27619_27653__$1);
var G__27656 = c__5525__auto___27654;
var G__27657 = cljs.core.count.call(null,c__5525__auto___27654);
var G__27658 = (0);
seq__27619_27639 = G__27655;
chunk__27620_27640 = G__27656;
count__27621_27641 = G__27657;
i__27622_27642 = G__27658;
continue;
} else {
var entry_27659 = cljs.core.first.call(null,seq__27619_27653__$1);
var vec__27635_27660 = entry_27659;
var some_vec__27636_27661 = (!((vec__27635_27660 == null)));
var k_27662 = ((some_vec__27636_27661)?(vec__27635_27660[(0)]):null);
var v_27663 = ((some_vec__27636_27661)?(vec__27635_27660[(1)]):null);
(obj[k_27662] = f.call(null,v_27663));


var G__27664 = cljs.core.next.call(null,seq__27619_27653__$1);
var G__27665 = null;
var G__27666 = (0);
var G__27667 = (0);
seq__27619_27639 = G__27664;
chunk__27620_27640 = G__27665;
count__27621_27641 = G__27666;
i__27622_27642 = G__27667;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return null;
}
});
/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(var_args){
var G__27669 = arguments.length;
switch (G__27669) {
case 0:
return applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
}));

(applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (array){
return array;
}));

(applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (array,x){
var G__27670 = array;
G__27670.push(x);

return G__27670;
}));

(applied_science.js_interop.push_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__27672 = array;
G__27672.unshift(x);

return G__27672;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27677 = arguments.length;
var i__5727__auto___27678 = (0);
while(true){
if((i__5727__auto___27678 < len__5726__auto___27677)){
args__5732__auto__.push((arguments[i__5727__auto___27678]));

var G__27679 = (i__5727__auto___27678 + (1));
i__5727__auto___27678 = G__27679;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj27676 = obj;
if((!((obj27676 == null)))){
return (obj27676[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array.call(null,args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq27673){
var G__27674 = cljs.core.first.call(null,seq27673);
var seq27673__$1 = cljs.core.next.call(null,seq27673);
var G__27675 = cljs.core.first.call(null,seq27673__$1);
var seq27673__$2 = cljs.core.next.call(null,seq27673__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27674,G__27675,seq27673__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj27680 = obj;
if((!((obj27680 == null)))){
return (obj27680[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27684 = arguments.length;
var i__5727__auto___27685 = (0);
while(true){
if((i__5727__auto___27685 < len__5726__auto___27684)){
args__5732__auto__.push((arguments[i__5727__auto___27685]));

var G__27686 = (i__5727__auto___27685 + (1));
i__5727__auto___27685 = G__27686;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array.call(null,args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq27681){
var G__27682 = cljs.core.first.call(null,seq27681);
var seq27681__$1 = cljs.core.next.call(null,seq27681);
var G__27683 = cljs.core.first.call(null,seq27681__$1);
var seq27681__$2 = cljs.core.next.call(null,seq27681__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27682,G__27683,seq27681__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27722 = arguments.length;
var i__5727__auto___27723 = (0);
while(true){
if((i__5727__auto___27723 < len__5726__auto___27722)){
args__5732__auto__.push((arguments[i__5727__auto___27723]));

var G__27724 = (i__5727__auto___27723 + (1));
i__5727__auto___27723 = G__27724;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__27690_27725 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),keyvals));
var chunk__27691_27726 = null;
var count__27692_27727 = (0);
var i__27693_27728 = (0);
while(true){
if((i__27693_27728 < count__27692_27727)){
var vec__27708_27729 = cljs.core._nth.call(null,chunk__27691_27726,i__27693_27728);
var k_27730 = cljs.core.nth.call(null,vec__27708_27729,(0),null);
var v_27731 = cljs.core.nth.call(null,vec__27708_27729,(1),null);
var obj27711_27732 = obj;
var obj27712_27733 = (((!((obj27711_27732 == null))))?obj27711_27732:({}));
(obj27712_27733[applied_science.js_interop.impl.wrap_key.call(null,k_27730)] = v_27731);



var G__27734 = seq__27690_27725;
var G__27735 = chunk__27691_27726;
var G__27736 = count__27692_27727;
var G__27737 = (i__27693_27728 + (1));
seq__27690_27725 = G__27734;
chunk__27691_27726 = G__27735;
count__27692_27727 = G__27736;
i__27693_27728 = G__27737;
continue;
} else {
var temp__5823__auto___27738 = cljs.core.seq.call(null,seq__27690_27725);
if(temp__5823__auto___27738){
var seq__27690_27739__$1 = temp__5823__auto___27738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27690_27739__$1)){
var c__5525__auto___27740 = cljs.core.chunk_first.call(null,seq__27690_27739__$1);
var G__27741 = cljs.core.chunk_rest.call(null,seq__27690_27739__$1);
var G__27742 = c__5525__auto___27740;
var G__27743 = cljs.core.count.call(null,c__5525__auto___27740);
var G__27744 = (0);
seq__27690_27725 = G__27741;
chunk__27691_27726 = G__27742;
count__27692_27727 = G__27743;
i__27693_27728 = G__27744;
continue;
} else {
var vec__27715_27745 = cljs.core.first.call(null,seq__27690_27739__$1);
var k_27746 = cljs.core.nth.call(null,vec__27715_27745,(0),null);
var v_27747 = cljs.core.nth.call(null,vec__27715_27745,(1),null);
var obj27718_27748 = obj;
var obj27719_27749 = (((!((obj27718_27748 == null))))?obj27718_27748:({}));
(obj27719_27749[applied_science.js_interop.impl.wrap_key.call(null,k_27746)] = v_27747);



var G__27750 = cljs.core.next.call(null,seq__27690_27739__$1);
var G__27751 = null;
var G__27752 = (0);
var G__27753 = (0);
seq__27690_27725 = G__27750;
chunk__27691_27726 = G__27751;
count__27692_27727 = G__27752;
i__27693_27728 = G__27753;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq27687){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27687));
}));


//# sourceMappingURL=js_interop.js.map
