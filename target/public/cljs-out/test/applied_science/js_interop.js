// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('applied_science.js_interop');
goog.require('cljs.core');
goog.require('goog.reflect');
goog.require('cljs.core');
goog.require('applied_science.js_interop.impl');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27397 = arguments.length;
var i__5727__auto___27398 = (0);
while(true){
if((i__5727__auto___27398 < len__5726__auto___27397)){
args__5732__auto__.push((arguments[i__5727__auto___27398]));

var G__27399 = (i__5727__auto___27398 + (1));
i__5727__auto___27398 = G__27399;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__27390_27400 = keyvals;
var vec__27391_27401 = G__27390_27400;
var seq__27392_27402 = cljs.core.seq.call(null,vec__27391_27401);
var first__27393_27403 = cljs.core.first.call(null,seq__27392_27402);
var seq__27392_27404__$1 = cljs.core.next.call(null,seq__27392_27402);
var k_27405 = first__27393_27403;
var first__27393_27406__$1 = cljs.core.first.call(null,seq__27392_27404__$1);
var seq__27392_27407__$2 = cljs.core.next.call(null,seq__27392_27404__$1);
var v_27408 = first__27393_27406__$1;
var keyvals_27409__$1 = seq__27392_27407__$2;
var G__27390_27410__$1 = G__27390_27400;
while(true){
var vec__27394_27411 = G__27390_27410__$1;
var seq__27395_27412 = cljs.core.seq.call(null,vec__27394_27411);
var first__27396_27413 = cljs.core.first.call(null,seq__27395_27412);
var seq__27395_27414__$1 = cljs.core.next.call(null,seq__27395_27412);
var k_27415__$1 = first__27396_27413;
var first__27396_27416__$1 = cljs.core.first.call(null,seq__27395_27414__$1);
var seq__27395_27417__$2 = cljs.core.next.call(null,seq__27395_27414__$1);
var v_27418__$1 = first__27396_27416__$1;
var keyvals_27419__$2 = seq__27395_27417__$2;
(obj[applied_science.js_interop.impl.wrap_key.call(null,k_27415__$1)] = v_27418__$1);

if(keyvals_27419__$2){
var G__27420 = keyvals_27419__$2;
G__27390_27410__$1 = G__27420;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq27385){
var G__27386 = cljs.core.first.call(null,seq27385);
var seq27385__$1 = cljs.core.next.call(null,seq27385);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27386,seq27385__$1);
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
var G__27422 = arguments.length;
switch (G__27422) {
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
var obj27423 = obj;
if((!((obj27423 == null)))){
return (obj27423[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj27424 = obj;
if((!((obj27424 == null)))){
return (obj27424[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__26721__auto__ = (function (){var obj27425 = obj;
if((!((obj27425 == null)))){
return (obj27425[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
})();
if((void 0 === val__26721__auto__)){
return not_found;
} else {
return val__26721__auto__;
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
var G__27428 = arguments.length;
switch (G__27428) {
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
var obj27430 = self__.obj;
if((!((obj27430 == null)))){
return (obj27430[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__26721__auto__ = (function (){var obj27431 = self__.obj;
if((!((obj27431 == null)))){
return (obj27431[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
})();
if((void 0 === val__26721__auto__)){
return not_found;
} else {
return val__26721__auto__;
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
var len__5726__auto___27444 = arguments.length;
var i__5727__auto___27445 = (0);
while(true){
if((i__5727__auto___27445 < len__5726__auto___27444)){
args__5732__auto__.push((arguments[i__5727__auto___27445]));

var G__27446 = (i__5727__auto___27445 + (1));
i__5727__auto___27445 = G__27446;
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
var G__27437 = keyvals;
var vec__27438 = G__27437;
var seq__27439 = cljs.core.seq.call(null,vec__27438);
var first__27440 = cljs.core.first.call(null,seq__27439);
var seq__27439__$1 = cljs.core.next.call(null,seq__27439);
var k = first__27440;
var first__27440__$1 = cljs.core.first.call(null,seq__27439__$1);
var seq__27439__$2 = cljs.core.next.call(null,seq__27439__$1);
var v = first__27440__$1;
var kvs = seq__27439__$2;
var G__27437__$1 = G__27437;
while(true){
var vec__27441 = G__27437__$1;
var seq__27442 = cljs.core.seq.call(null,vec__27441);
var first__27443 = cljs.core.first.call(null,seq__27442);
var seq__27442__$1 = cljs.core.next.call(null,seq__27442);
var k__$1 = first__27443;
var first__27443__$1 = cljs.core.first.call(null,seq__27442__$1);
var seq__27442__$2 = cljs.core.next.call(null,seq__27442__$1);
var v__$1 = first__27443__$1;
var kvs__$1 = seq__27442__$2;
applied_science.js_interop.unchecked_set.call(null,obj__$1,k__$1,v__$1);

if(kvs__$1){
var G__27447 = kvs__$1;
G__27437__$1 = G__27447;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq27432){
var G__27433 = cljs.core.first.call(null,seq27432);
var seq27432__$1 = cljs.core.next.call(null,seq27432);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27433,seq27432__$1);
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
var len__5726__auto___27452 = arguments.length;
var i__5727__auto___27453 = (0);
while(true){
if((i__5727__auto___27453 < len__5726__auto___27452)){
args__5732__auto__.push((arguments[i__5727__auto___27453]));

var G__27454 = (i__5727__auto___27453 + (1));
i__5727__auto___27453 = G__27454;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq27448){
var G__27449 = cljs.core.first.call(null,seq27448);
var seq27448__$1 = cljs.core.next.call(null,seq27448);
var G__27450 = cljs.core.first.call(null,seq27448__$1);
var seq27448__$2 = cljs.core.next.call(null,seq27448__$1);
var G__27451 = cljs.core.first.call(null,seq27448__$2);
var seq27448__$3 = cljs.core.next.call(null,seq27448__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27449,G__27450,G__27451,seq27448__$3);
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
var len__5726__auto___27459 = arguments.length;
var i__5727__auto___27460 = (0);
while(true){
if((i__5727__auto___27460 < len__5726__auto___27459)){
args__5732__auto__.push((arguments[i__5727__auto___27460]));

var G__27461 = (i__5727__auto___27460 + (1));
i__5727__auto___27460 = G__27461;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq27455){
var G__27456 = cljs.core.first.call(null,seq27455);
var seq27455__$1 = cljs.core.next.call(null,seq27455);
var G__27457 = cljs.core.first.call(null,seq27455__$1);
var seq27455__$2 = cljs.core.next.call(null,seq27455__$1);
var G__27458 = cljs.core.first.call(null,seq27455__$2);
var seq27455__$3 = cljs.core.next.call(null,seq27455__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27456,G__27457,G__27458,seq27455__$3);
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
var G__27466 = arguments.length;
switch (G__27466) {
case 1:
return applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___27472 = arguments.length;
var i__5727__auto___27473 = (0);
while(true){
if((i__5727__auto___27473 < len__5726__auto___27472)){
args_arr__5751__auto__.push((arguments[i__5727__auto___27473]));

var G__27474 = (i__5727__auto___27473 + (1));
i__5727__auto___27473 = G__27474;
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
var seq__27467_27475 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,x));
var chunk__27468_27476 = null;
var count__27469_27477 = (0);
var i__27470_27478 = (0);
while(true){
if((i__27470_27478 < count__27469_27477)){
var k_27479 = cljs.core._nth.call(null,chunk__27468_27476,i__27470_27478);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_27479,applied_science.js_interop.unchecked_get.call(null,x,k_27479));


var G__27480 = seq__27467_27475;
var G__27481 = chunk__27468_27476;
var G__27482 = count__27469_27477;
var G__27483 = (i__27470_27478 + (1));
seq__27467_27475 = G__27480;
chunk__27468_27476 = G__27481;
count__27469_27477 = G__27482;
i__27470_27478 = G__27483;
continue;
} else {
var temp__5823__auto___27484 = cljs.core.seq.call(null,seq__27467_27475);
if(temp__5823__auto___27484){
var seq__27467_27485__$1 = temp__5823__auto___27484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27467_27485__$1)){
var c__5525__auto___27486 = cljs.core.chunk_first.call(null,seq__27467_27485__$1);
var G__27487 = cljs.core.chunk_rest.call(null,seq__27467_27485__$1);
var G__27488 = c__5525__auto___27486;
var G__27489 = cljs.core.count.call(null,c__5525__auto___27486);
var G__27490 = (0);
seq__27467_27475 = G__27487;
chunk__27468_27476 = G__27488;
count__27469_27477 = G__27489;
i__27470_27478 = G__27490;
continue;
} else {
var k_27491 = cljs.core.first.call(null,seq__27467_27485__$1);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_27491,applied_science.js_interop.unchecked_get.call(null,x,k_27491));


var G__27492 = cljs.core.next.call(null,seq__27467_27485__$1);
var G__27493 = null;
var G__27494 = (0);
var G__27495 = (0);
seq__27467_27475 = G__27492;
chunk__27468_27476 = G__27493;
count__27469_27477 = G__27494;
i__27470_27478 = G__27495;
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
(applied_science.js_interop.merge_BANG_.cljs$lang$applyTo = (function (seq27463){
var G__27464 = cljs.core.first.call(null,seq27463);
var seq27463__$1 = cljs.core.next.call(null,seq27463);
var G__27465 = cljs.core.first.call(null,seq27463__$1);
var seq27463__$2 = cljs.core.next.call(null,seq27463__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27464,G__27465,seq27463__$2);
}));

(applied_science.js_interop.merge_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * alias for merge!
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__27500 = arguments.length;
switch (G__27500) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___27502 = arguments.length;
var i__5727__auto___27503 = (0);
while(true){
if((i__5727__auto___27503 < len__5726__auto___27502)){
args_arr__5751__auto__.push((arguments[i__5727__auto___27503]));

var G__27504 = (i__5727__auto___27503 + (1));
i__5727__auto___27503 = G__27504;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq27497){
var G__27498 = cljs.core.first.call(null,seq27497);
var seq27497__$1 = cljs.core.next.call(null,seq27497);
var G__27499 = cljs.core.first.call(null,seq27497__$1);
var seq27497__$2 = cljs.core.next.call(null,seq27497__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27498,G__27499,seq27497__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

applied_science.js_interop.update_keys_BANG_ = (function applied_science$js_interop$update_keys_BANG_(obj,f){

if(cljs.core.truth_(obj)){
var seq__27505_27511 = cljs.core.seq.call(null,Object.keys(obj));
var chunk__27507_27512 = null;
var count__27508_27513 = (0);
var i__27509_27514 = (0);
while(true){
if((i__27509_27514 < count__27508_27513)){
var k_27515 = cljs.core._nth.call(null,chunk__27507_27512,i__27509_27514);
var v_27516 = (obj[k_27515]);
delete obj[k_27515];

(obj[f.call(null,k_27515)] = v_27516);


var G__27517 = seq__27505_27511;
var G__27518 = chunk__27507_27512;
var G__27519 = count__27508_27513;
var G__27520 = (i__27509_27514 + (1));
seq__27505_27511 = G__27517;
chunk__27507_27512 = G__27518;
count__27508_27513 = G__27519;
i__27509_27514 = G__27520;
continue;
} else {
var temp__5823__auto___27521 = cljs.core.seq.call(null,seq__27505_27511);
if(temp__5823__auto___27521){
var seq__27505_27522__$1 = temp__5823__auto___27521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27505_27522__$1)){
var c__5525__auto___27523 = cljs.core.chunk_first.call(null,seq__27505_27522__$1);
var G__27524 = cljs.core.chunk_rest.call(null,seq__27505_27522__$1);
var G__27525 = c__5525__auto___27523;
var G__27526 = cljs.core.count.call(null,c__5525__auto___27523);
var G__27527 = (0);
seq__27505_27511 = G__27524;
chunk__27507_27512 = G__27525;
count__27508_27513 = G__27526;
i__27509_27514 = G__27527;
continue;
} else {
var k_27528 = cljs.core.first.call(null,seq__27505_27522__$1);
var v_27529 = (obj[k_27528]);
delete obj[k_27528];

(obj[f.call(null,k_27528)] = v_27529);


var G__27530 = cljs.core.next.call(null,seq__27505_27522__$1);
var G__27531 = null;
var G__27532 = (0);
var G__27533 = (0);
seq__27505_27511 = G__27530;
chunk__27507_27512 = G__27531;
count__27508_27513 = G__27532;
i__27509_27514 = G__27533;
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
var seq__27534_27554 = cljs.core.seq.call(null,Object.entries(obj));
var chunk__27535_27555 = null;
var count__27536_27556 = (0);
var i__27537_27557 = (0);
while(true){
if((i__27537_27557 < count__27536_27556)){
var entry_27558 = cljs.core._nth.call(null,chunk__27535_27555,i__27537_27557);
var vec__27546_27559 = entry_27558;
var some_vec__27547_27560 = (!((vec__27546_27559 == null)));
var k_27561 = ((some_vec__27547_27560)?(vec__27546_27559[(0)]):null);
var v_27562 = ((some_vec__27547_27560)?(vec__27546_27559[(1)]):null);
(obj[k_27561] = f.call(null,v_27562));


var G__27563 = seq__27534_27554;
var G__27564 = chunk__27535_27555;
var G__27565 = count__27536_27556;
var G__27566 = (i__27537_27557 + (1));
seq__27534_27554 = G__27563;
chunk__27535_27555 = G__27564;
count__27536_27556 = G__27565;
i__27537_27557 = G__27566;
continue;
} else {
var temp__5823__auto___27567 = cljs.core.seq.call(null,seq__27534_27554);
if(temp__5823__auto___27567){
var seq__27534_27568__$1 = temp__5823__auto___27567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27534_27568__$1)){
var c__5525__auto___27569 = cljs.core.chunk_first.call(null,seq__27534_27568__$1);
var G__27570 = cljs.core.chunk_rest.call(null,seq__27534_27568__$1);
var G__27571 = c__5525__auto___27569;
var G__27572 = cljs.core.count.call(null,c__5525__auto___27569);
var G__27573 = (0);
seq__27534_27554 = G__27570;
chunk__27535_27555 = G__27571;
count__27536_27556 = G__27572;
i__27537_27557 = G__27573;
continue;
} else {
var entry_27574 = cljs.core.first.call(null,seq__27534_27568__$1);
var vec__27550_27575 = entry_27574;
var some_vec__27551_27576 = (!((vec__27550_27575 == null)));
var k_27577 = ((some_vec__27551_27576)?(vec__27550_27575[(0)]):null);
var v_27578 = ((some_vec__27551_27576)?(vec__27550_27575[(1)]):null);
(obj[k_27577] = f.call(null,v_27578));


var G__27579 = cljs.core.next.call(null,seq__27534_27568__$1);
var G__27580 = null;
var G__27581 = (0);
var G__27582 = (0);
seq__27534_27554 = G__27579;
chunk__27535_27555 = G__27580;
count__27536_27556 = G__27581;
i__27537_27557 = G__27582;
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
var G__27584 = arguments.length;
switch (G__27584) {
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
var G__27585 = array;
G__27585.push(x);

return G__27585;
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
var G__27587 = array;
G__27587.unshift(x);

return G__27587;
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
var len__5726__auto___27592 = arguments.length;
var i__5727__auto___27593 = (0);
while(true){
if((i__5727__auto___27593 < len__5726__auto___27592)){
args__5732__auto__.push((arguments[i__5727__auto___27593]));

var G__27594 = (i__5727__auto___27593 + (1));
i__5727__auto___27593 = G__27594;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj27591 = obj;
if((!((obj27591 == null)))){
return (obj27591[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array.call(null,args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq27588){
var G__27589 = cljs.core.first.call(null,seq27588);
var seq27588__$1 = cljs.core.next.call(null,seq27588);
var G__27590 = cljs.core.first.call(null,seq27588__$1);
var seq27588__$2 = cljs.core.next.call(null,seq27588__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27589,G__27590,seq27588__$2);
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
return (function (){var obj27595 = obj;
if((!((obj27595 == null)))){
return (obj27595[applied_science.js_interop.impl.wrap_key.call(null,k)]);
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
var len__5726__auto___27599 = arguments.length;
var i__5727__auto___27600 = (0);
while(true){
if((i__5727__auto___27600 < len__5726__auto___27599)){
args__5732__auto__.push((arguments[i__5727__auto___27600]));

var G__27601 = (i__5727__auto___27600 + (1));
i__5727__auto___27600 = G__27601;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq27596){
var G__27597 = cljs.core.first.call(null,seq27596);
var seq27596__$1 = cljs.core.next.call(null,seq27596);
var G__27598 = cljs.core.first.call(null,seq27596__$1);
var seq27596__$2 = cljs.core.next.call(null,seq27596__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27597,G__27598,seq27596__$2);
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
var len__5726__auto___27637 = arguments.length;
var i__5727__auto___27638 = (0);
while(true){
if((i__5727__auto___27638 < len__5726__auto___27637)){
args__5732__auto__.push((arguments[i__5727__auto___27638]));

var G__27639 = (i__5727__auto___27638 + (1));
i__5727__auto___27638 = G__27639;
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
var seq__27605_27640 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),keyvals));
var chunk__27606_27641 = null;
var count__27607_27642 = (0);
var i__27608_27643 = (0);
while(true){
if((i__27608_27643 < count__27607_27642)){
var vec__27623_27644 = cljs.core._nth.call(null,chunk__27606_27641,i__27608_27643);
var k_27645 = cljs.core.nth.call(null,vec__27623_27644,(0),null);
var v_27646 = cljs.core.nth.call(null,vec__27623_27644,(1),null);
var obj27626_27647 = obj;
var obj27627_27648 = (((!((obj27626_27647 == null))))?obj27626_27647:({}));
(obj27627_27648[applied_science.js_interop.impl.wrap_key.call(null,k_27645)] = v_27646);



var G__27649 = seq__27605_27640;
var G__27650 = chunk__27606_27641;
var G__27651 = count__27607_27642;
var G__27652 = (i__27608_27643 + (1));
seq__27605_27640 = G__27649;
chunk__27606_27641 = G__27650;
count__27607_27642 = G__27651;
i__27608_27643 = G__27652;
continue;
} else {
var temp__5823__auto___27653 = cljs.core.seq.call(null,seq__27605_27640);
if(temp__5823__auto___27653){
var seq__27605_27654__$1 = temp__5823__auto___27653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27605_27654__$1)){
var c__5525__auto___27655 = cljs.core.chunk_first.call(null,seq__27605_27654__$1);
var G__27656 = cljs.core.chunk_rest.call(null,seq__27605_27654__$1);
var G__27657 = c__5525__auto___27655;
var G__27658 = cljs.core.count.call(null,c__5525__auto___27655);
var G__27659 = (0);
seq__27605_27640 = G__27656;
chunk__27606_27641 = G__27657;
count__27607_27642 = G__27658;
i__27608_27643 = G__27659;
continue;
} else {
var vec__27630_27660 = cljs.core.first.call(null,seq__27605_27654__$1);
var k_27661 = cljs.core.nth.call(null,vec__27630_27660,(0),null);
var v_27662 = cljs.core.nth.call(null,vec__27630_27660,(1),null);
var obj27633_27663 = obj;
var obj27634_27664 = (((!((obj27633_27663 == null))))?obj27633_27663:({}));
(obj27634_27664[applied_science.js_interop.impl.wrap_key.call(null,k_27661)] = v_27662);



var G__27665 = cljs.core.next.call(null,seq__27605_27654__$1);
var G__27666 = null;
var G__27667 = (0);
var G__27668 = (0);
seq__27605_27640 = G__27665;
chunk__27606_27641 = G__27666;
count__27607_27642 = G__27667;
i__27608_27643 = G__27668;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq27602){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27602));
}));


//# sourceMappingURL=js_interop.js.map
