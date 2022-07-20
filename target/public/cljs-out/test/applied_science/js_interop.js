// Compiled by ClojureScript 1.10.520 {}
goog.provide('applied_science.js_interop');
goog.require('cljs.core');
goog.require('goog.reflect');
goog.require('cljs.core');
goog.require('applied_science.js_interop.impl');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18223 = arguments.length;
var i__4731__auto___18224 = (0);
while(true){
if((i__4731__auto___18224 < len__4730__auto___18223)){
args__4736__auto__.push((arguments[i__4731__auto___18224]));

var G__18225 = (i__4731__auto___18224 + (1));
i__4731__auto___18224 = G__18225;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__18216_18226 = keyvals;
var vec__18217_18227 = G__18216_18226;
var seq__18218_18228 = cljs.core.seq.call(null,vec__18217_18227);
var first__18219_18229 = cljs.core.first.call(null,seq__18218_18228);
var seq__18218_18230__$1 = cljs.core.next.call(null,seq__18218_18228);
var k_18231 = first__18219_18229;
var first__18219_18232__$1 = cljs.core.first.call(null,seq__18218_18230__$1);
var seq__18218_18233__$2 = cljs.core.next.call(null,seq__18218_18230__$1);
var v_18234 = first__18219_18232__$1;
var keyvals_18235__$1 = seq__18218_18233__$2;
var G__18216_18236__$1 = G__18216_18226;
while(true){
var vec__18220_18237 = G__18216_18236__$1;
var seq__18221_18238 = cljs.core.seq.call(null,vec__18220_18237);
var first__18222_18239 = cljs.core.first.call(null,seq__18221_18238);
var seq__18221_18240__$1 = cljs.core.next.call(null,seq__18221_18238);
var k_18241__$1 = first__18222_18239;
var first__18222_18242__$1 = cljs.core.first.call(null,seq__18221_18240__$1);
var seq__18221_18243__$2 = cljs.core.next.call(null,seq__18221_18240__$1);
var v_18244__$1 = first__18222_18242__$1;
var keyvals_18245__$2 = seq__18221_18243__$2;
(obj[applied_science.js_interop.impl.wrap_key.call(null,k_18241__$1)] = v_18244__$1);

if(keyvals_18245__$2){
var G__18246 = keyvals_18245__$2;
G__18216_18236__$1 = G__18246;
continue;
} else {
}
break;
}

return obj;
});

applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq18211){
var G__18212 = cljs.core.first.call(null,seq18211);
var seq18211__$1 = cljs.core.next.call(null,seq18211);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18212,seq18211__$1);
});

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
var G__18248 = arguments.length;
switch (G__18248) {
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

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj18249 = obj;
var k18250 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18249,k18250)){
return (obj18249[k18250]);
} else {
return null;
}
});

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj18251 = obj;
var k18252 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18251,k18252)){
return (obj18251[k18252]);
} else {
return not_found;
}
});

applied_science.js_interop.get.cljs$lang$maxFixedArity = 3;

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
var G__18255 = arguments.length;
switch (G__18255) {
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

applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks));
});

applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),not_found);
});

applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3;

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
applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj18257 = self__.obj;
var k18258 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18257,k18258)){
return (obj18257[k18258]);
} else {
return null;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj18259 = self__.obj;
var k18260 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18259,k18260)){
return (obj18259[k18260]);
} else {
return not_found;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
});

applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

applied_science.js_interop.JSLookup.cljs$lang$type = true;

applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup";

applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"applied-science.js-interop/JSLookup");
});

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
return (new applied_science.js_interop.JSLookup(obj));
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
var args__4736__auto__ = [];
var len__4730__auto___18273 = arguments.length;
var i__4731__auto___18274 = (0);
while(true){
if((i__4731__auto___18274 < len__4730__auto___18273)){
args__4736__auto__.push((arguments[i__4731__auto___18274]));

var G__18275 = (i__4731__auto___18274 + (1));
i__4731__auto___18274 = G__18275;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__18266 = keyvals;
var vec__18267 = G__18266;
var seq__18268 = cljs.core.seq.call(null,vec__18267);
var first__18269 = cljs.core.first.call(null,seq__18268);
var seq__18268__$1 = cljs.core.next.call(null,seq__18268);
var k = first__18269;
var first__18269__$1 = cljs.core.first.call(null,seq__18268__$1);
var seq__18268__$2 = cljs.core.next.call(null,seq__18268__$1);
var v = first__18269__$1;
var kvs = seq__18268__$2;
var G__18266__$1 = G__18266;
while(true){
var vec__18270 = G__18266__$1;
var seq__18271 = cljs.core.seq.call(null,vec__18270);
var first__18272 = cljs.core.first.call(null,seq__18271);
var seq__18271__$1 = cljs.core.next.call(null,seq__18271);
var k__$1 = first__18272;
var first__18272__$1 = cljs.core.first.call(null,seq__18271__$1);
var seq__18271__$2 = cljs.core.next.call(null,seq__18271__$1);
var v__$1 = first__18272__$1;
var kvs__$1 = seq__18271__$2;
applied_science.js_interop.unchecked_set.call(null,obj__$1,k__$1,v__$1);

if(kvs__$1){
var G__18276 = kvs__$1;
G__18266__$1 = G__18276;
continue;
} else {
return obj__$1;
}
break;
}
});

applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq18261){
var G__18262 = cljs.core.first.call(null,seq18261);
var seq18261__$1 = cljs.core.next.call(null,seq18261);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18262,seq18261__$1);
});

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
var args__4736__auto__ = [];
var len__4730__auto___18281 = arguments.length;
var i__4731__auto___18282 = (0);
while(true){
if((i__4731__auto___18282 < len__4730__auto___18281)){
args__4736__auto__.push((arguments[i__4731__auto___18282]));

var G__18283 = (i__4731__auto___18282 + (1));
i__4731__auto___18282 = G__18283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key.call(null,k);
var v = cljs.core.apply.call(null,f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
});

applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq18277){
var G__18278 = cljs.core.first.call(null,seq18277);
var seq18277__$1 = cljs.core.next.call(null,seq18277);
var G__18279 = cljs.core.first.call(null,seq18277__$1);
var seq18277__$2 = cljs.core.next.call(null,seq18277__$1);
var G__18280 = cljs.core.first.call(null,seq18277__$2);
var seq18277__$3 = cljs.core.next.call(null,seq18277__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18278,G__18279,G__18280,seq18277__$3);
});

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
var args__4736__auto__ = [];
var len__4730__auto___18288 = arguments.length;
var i__4731__auto___18289 = (0);
while(true){
if((i__4731__auto___18289 < len__4730__auto___18288)){
args__4736__auto__.push((arguments[i__4731__auto___18289]));

var G__18290 = (i__4731__auto___18289 + (1));
i__4731__auto___18289 = G__18290;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),f,args);
});

applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq18284){
var G__18285 = cljs.core.first.call(null,seq18284);
var seq18284__$1 = cljs.core.next.call(null,seq18284);
var G__18286 = cljs.core.first.call(null,seq18284__$1);
var seq18284__$2 = cljs.core.next.call(null,seq18284__$1);
var G__18287 = cljs.core.first.call(null,seq18284__$2);
var seq18284__$3 = cljs.core.next.call(null,seq18284__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18285,G__18286,G__18287,seq18284__$3);
});

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__18291 = array;
G__18291.push(x);

return G__18291;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__18292 = array;
G__18292.unshift(x);

return G__18292;
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
var args__4736__auto__ = [];
var len__4730__auto___18298 = arguments.length;
var i__4731__auto___18299 = (0);
while(true){
if((i__4731__auto___18299 < len__4730__auto___18298)){
args__4736__auto__.push((arguments[i__4731__auto___18299]));

var G__18300 = (i__4731__auto___18299 + (1));
i__4731__auto___18299 = G__18300;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj18296 = obj;
var k18297 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18296,k18297)){
return (obj18296[k18297]);
} else {
return null;
}
})().apply(obj,cljs.core.to_array.call(null,args));
});

applied_science.js_interop.call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop.call.cljs$lang$applyTo = (function (seq18293){
var G__18294 = cljs.core.first.call(null,seq18293);
var seq18293__$1 = cljs.core.next.call(null,seq18293);
var G__18295 = cljs.core.first.call(null,seq18293__$1);
var seq18293__$2 = cljs.core.next.call(null,seq18293__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18294,G__18295,seq18293__$2);
});

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj18301 = obj;
var k18302 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18301,k18302)){
return (obj18301[k18302]);
} else {
return null;
}
})().apply(obj,arg_array);
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
var args__4736__auto__ = [];
var len__4730__auto___18338 = arguments.length;
var i__4731__auto___18339 = (0);
while(true){
if((i__4731__auto___18339 < len__4730__auto___18338)){
args__4736__auto__.push((arguments[i__4731__auto___18339]));

var G__18340 = (i__4731__auto___18339 + (1));
i__4731__auto___18339 = G__18340;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__18306_18341 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),keyvals));
var chunk__18307_18342 = null;
var count__18308_18343 = (0);
var i__18309_18344 = (0);
while(true){
if((i__18309_18344 < count__18308_18343)){
var vec__18324_18345 = cljs.core._nth.call(null,chunk__18307_18342,i__18309_18344);
var k_18346 = cljs.core.nth.call(null,vec__18324_18345,(0),null);
var v_18347 = cljs.core.nth.call(null,vec__18324_18345,(1),null);
var obj18327_18348 = obj;
var obj18328_18349 = (((obj18327_18348 == null))?({}):obj18327_18348);
(obj18328_18349[applied_science.js_interop.impl.wrap_key.call(null,k_18346)] = v_18347);



var G__18350 = seq__18306_18341;
var G__18351 = chunk__18307_18342;
var G__18352 = count__18308_18343;
var G__18353 = (i__18309_18344 + (1));
seq__18306_18341 = G__18350;
chunk__18307_18342 = G__18351;
count__18308_18343 = G__18352;
i__18309_18344 = G__18353;
continue;
} else {
var temp__5804__auto___18354 = cljs.core.seq.call(null,seq__18306_18341);
if(temp__5804__auto___18354){
var seq__18306_18355__$1 = temp__5804__auto___18354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18306_18355__$1)){
var c__4550__auto___18356 = cljs.core.chunk_first.call(null,seq__18306_18355__$1);
var G__18357 = cljs.core.chunk_rest.call(null,seq__18306_18355__$1);
var G__18358 = c__4550__auto___18356;
var G__18359 = cljs.core.count.call(null,c__4550__auto___18356);
var G__18360 = (0);
seq__18306_18341 = G__18357;
chunk__18307_18342 = G__18358;
count__18308_18343 = G__18359;
i__18309_18344 = G__18360;
continue;
} else {
var vec__18331_18361 = cljs.core.first.call(null,seq__18306_18355__$1);
var k_18362 = cljs.core.nth.call(null,vec__18331_18361,(0),null);
var v_18363 = cljs.core.nth.call(null,vec__18331_18361,(1),null);
var obj18334_18364 = obj;
var obj18335_18365 = (((obj18334_18364 == null))?({}):obj18334_18364);
(obj18335_18365[applied_science.js_interop.impl.wrap_key.call(null,k_18362)] = v_18363);



var G__18366 = cljs.core.next.call(null,seq__18306_18355__$1);
var G__18367 = null;
var G__18368 = (0);
var G__18369 = (0);
seq__18306_18341 = G__18366;
chunk__18307_18342 = G__18367;
count__18308_18343 = G__18368;
i__18309_18344 = G__18369;
continue;
}
} else {
}
}
break;
}

return obj;
});

applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq18303){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18303));
});


//# sourceMappingURL=js_interop.js.map
