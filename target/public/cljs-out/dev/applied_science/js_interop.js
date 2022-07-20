// Compiled by ClojureScript 1.10.520 {}
goog.provide('applied_science.js_interop');
goog.require('cljs.core');
goog.require('goog.reflect');
goog.require('cljs.core');
goog.require('applied_science.js_interop.impl');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18220 = arguments.length;
var i__4731__auto___18221 = (0);
while(true){
if((i__4731__auto___18221 < len__4730__auto___18220)){
args__4736__auto__.push((arguments[i__4731__auto___18221]));

var G__18222 = (i__4731__auto___18221 + (1));
i__4731__auto___18221 = G__18222;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__18213_18223 = keyvals;
var vec__18214_18224 = G__18213_18223;
var seq__18215_18225 = cljs.core.seq.call(null,vec__18214_18224);
var first__18216_18226 = cljs.core.first.call(null,seq__18215_18225);
var seq__18215_18227__$1 = cljs.core.next.call(null,seq__18215_18225);
var k_18228 = first__18216_18226;
var first__18216_18229__$1 = cljs.core.first.call(null,seq__18215_18227__$1);
var seq__18215_18230__$2 = cljs.core.next.call(null,seq__18215_18227__$1);
var v_18231 = first__18216_18229__$1;
var keyvals_18232__$1 = seq__18215_18230__$2;
var G__18213_18233__$1 = G__18213_18223;
while(true){
var vec__18217_18234 = G__18213_18233__$1;
var seq__18218_18235 = cljs.core.seq.call(null,vec__18217_18234);
var first__18219_18236 = cljs.core.first.call(null,seq__18218_18235);
var seq__18218_18237__$1 = cljs.core.next.call(null,seq__18218_18235);
var k_18238__$1 = first__18219_18236;
var first__18219_18239__$1 = cljs.core.first.call(null,seq__18218_18237__$1);
var seq__18218_18240__$2 = cljs.core.next.call(null,seq__18218_18237__$1);
var v_18241__$1 = first__18219_18239__$1;
var keyvals_18242__$2 = seq__18218_18240__$2;
(obj[applied_science.js_interop.impl.wrap_key.call(null,k_18238__$1)] = v_18241__$1);

if(keyvals_18242__$2){
var G__18243 = keyvals_18242__$2;
G__18213_18233__$1 = G__18243;
continue;
} else {
}
break;
}

return obj;
});

applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq18208){
var G__18209 = cljs.core.first.call(null,seq18208);
var seq18208__$1 = cljs.core.next.call(null,seq18208);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18209,seq18208__$1);
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
var G__18245 = arguments.length;
switch (G__18245) {
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
var obj18246 = obj;
var k18247 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18246,k18247)){
return (obj18246[k18247]);
} else {
return null;
}
});

applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj18248 = obj;
var k18249 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18248,k18249)){
return (obj18248[k18249]);
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
var G__18252 = arguments.length;
switch (G__18252) {
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
var obj18254 = self__.obj;
var k18255 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18254,k18255)){
return (obj18254[k18255]);
} else {
return null;
}
});

applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj18256 = self__.obj;
var k18257 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18256,k18257)){
return (obj18256[k18257]);
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
var len__4730__auto___18270 = arguments.length;
var i__4731__auto___18271 = (0);
while(true){
if((i__4731__auto___18271 < len__4730__auto___18270)){
args__4736__auto__.push((arguments[i__4731__auto___18271]));

var G__18272 = (i__4731__auto___18271 + (1));
i__4731__auto___18271 = G__18272;
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
var G__18263 = keyvals;
var vec__18264 = G__18263;
var seq__18265 = cljs.core.seq.call(null,vec__18264);
var first__18266 = cljs.core.first.call(null,seq__18265);
var seq__18265__$1 = cljs.core.next.call(null,seq__18265);
var k = first__18266;
var first__18266__$1 = cljs.core.first.call(null,seq__18265__$1);
var seq__18265__$2 = cljs.core.next.call(null,seq__18265__$1);
var v = first__18266__$1;
var kvs = seq__18265__$2;
var G__18263__$1 = G__18263;
while(true){
var vec__18267 = G__18263__$1;
var seq__18268 = cljs.core.seq.call(null,vec__18267);
var first__18269 = cljs.core.first.call(null,seq__18268);
var seq__18268__$1 = cljs.core.next.call(null,seq__18268);
var k__$1 = first__18269;
var first__18269__$1 = cljs.core.first.call(null,seq__18268__$1);
var seq__18268__$2 = cljs.core.next.call(null,seq__18268__$1);
var v__$1 = first__18269__$1;
var kvs__$1 = seq__18268__$2;
applied_science.js_interop.unchecked_set.call(null,obj__$1,k__$1,v__$1);

if(kvs__$1){
var G__18273 = kvs__$1;
G__18263__$1 = G__18273;
continue;
} else {
return obj__$1;
}
break;
}
});

applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq18258){
var G__18259 = cljs.core.first.call(null,seq18258);
var seq18258__$1 = cljs.core.next.call(null,seq18258);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18259,seq18258__$1);
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
var len__4730__auto___18278 = arguments.length;
var i__4731__auto___18279 = (0);
while(true){
if((i__4731__auto___18279 < len__4730__auto___18278)){
args__4736__auto__.push((arguments[i__4731__auto___18279]));

var G__18280 = (i__4731__auto___18279 + (1));
i__4731__auto___18279 = G__18280;
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
applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq18274){
var G__18275 = cljs.core.first.call(null,seq18274);
var seq18274__$1 = cljs.core.next.call(null,seq18274);
var G__18276 = cljs.core.first.call(null,seq18274__$1);
var seq18274__$2 = cljs.core.next.call(null,seq18274__$1);
var G__18277 = cljs.core.first.call(null,seq18274__$2);
var seq18274__$3 = cljs.core.next.call(null,seq18274__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18275,G__18276,G__18277,seq18274__$3);
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
var len__4730__auto___18285 = arguments.length;
var i__4731__auto___18286 = (0);
while(true){
if((i__4731__auto___18286 < len__4730__auto___18285)){
args__4736__auto__.push((arguments[i__4731__auto___18286]));

var G__18287 = (i__4731__auto___18286 + (1));
i__4731__auto___18286 = G__18287;
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
applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq18281){
var G__18282 = cljs.core.first.call(null,seq18281);
var seq18281__$1 = cljs.core.next.call(null,seq18281);
var G__18283 = cljs.core.first.call(null,seq18281__$1);
var seq18281__$2 = cljs.core.next.call(null,seq18281__$1);
var G__18284 = cljs.core.first.call(null,seq18281__$2);
var seq18281__$3 = cljs.core.next.call(null,seq18281__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18282,G__18283,G__18284,seq18281__$3);
});

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__18288 = array;
G__18288.push(x);

return G__18288;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__18289 = array;
G__18289.unshift(x);

return G__18289;
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
var len__4730__auto___18295 = arguments.length;
var i__4731__auto___18296 = (0);
while(true){
if((i__4731__auto___18296 < len__4730__auto___18295)){
args__4736__auto__.push((arguments[i__4731__auto___18296]));

var G__18297 = (i__4731__auto___18296 + (1));
i__4731__auto___18296 = G__18297;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj18293 = obj;
var k18294 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18293,k18294)){
return (obj18293[k18294]);
} else {
return null;
}
})().apply(obj,cljs.core.to_array.call(null,args));
});

applied_science.js_interop.call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
applied_science.js_interop.call.cljs$lang$applyTo = (function (seq18290){
var G__18291 = cljs.core.first.call(null,seq18290);
var seq18290__$1 = cljs.core.next.call(null,seq18290);
var G__18292 = cljs.core.first.call(null,seq18290__$1);
var seq18290__$2 = cljs.core.next.call(null,seq18290__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18291,G__18292,seq18290__$2);
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
return (function (){var obj18298 = obj;
var k18299 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18298,k18299)){
return (obj18298[k18299]);
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
var len__4730__auto___18335 = arguments.length;
var i__4731__auto___18336 = (0);
while(true){
if((i__4731__auto___18336 < len__4730__auto___18335)){
args__4736__auto__.push((arguments[i__4731__auto___18336]));

var G__18337 = (i__4731__auto___18336 + (1));
i__4731__auto___18336 = G__18337;
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
var seq__18303_18338 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),keyvals));
var chunk__18304_18339 = null;
var count__18305_18340 = (0);
var i__18306_18341 = (0);
while(true){
if((i__18306_18341 < count__18305_18340)){
var vec__18321_18342 = cljs.core._nth.call(null,chunk__18304_18339,i__18306_18341);
var k_18343 = cljs.core.nth.call(null,vec__18321_18342,(0),null);
var v_18344 = cljs.core.nth.call(null,vec__18321_18342,(1),null);
var obj18324_18345 = obj;
var obj18325_18346 = (((obj18324_18345 == null))?({}):obj18324_18345);
(obj18325_18346[applied_science.js_interop.impl.wrap_key.call(null,k_18343)] = v_18344);



var G__18347 = seq__18303_18338;
var G__18348 = chunk__18304_18339;
var G__18349 = count__18305_18340;
var G__18350 = (i__18306_18341 + (1));
seq__18303_18338 = G__18347;
chunk__18304_18339 = G__18348;
count__18305_18340 = G__18349;
i__18306_18341 = G__18350;
continue;
} else {
var temp__5720__auto___18351 = cljs.core.seq.call(null,seq__18303_18338);
if(temp__5720__auto___18351){
var seq__18303_18352__$1 = temp__5720__auto___18351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18303_18352__$1)){
var c__4550__auto___18353 = cljs.core.chunk_first.call(null,seq__18303_18352__$1);
var G__18354 = cljs.core.chunk_rest.call(null,seq__18303_18352__$1);
var G__18355 = c__4550__auto___18353;
var G__18356 = cljs.core.count.call(null,c__4550__auto___18353);
var G__18357 = (0);
seq__18303_18338 = G__18354;
chunk__18304_18339 = G__18355;
count__18305_18340 = G__18356;
i__18306_18341 = G__18357;
continue;
} else {
var vec__18328_18358 = cljs.core.first.call(null,seq__18303_18352__$1);
var k_18359 = cljs.core.nth.call(null,vec__18328_18358,(0),null);
var v_18360 = cljs.core.nth.call(null,vec__18328_18358,(1),null);
var obj18331_18361 = obj;
var obj18332_18362 = (((obj18331_18361 == null))?({}):obj18331_18361);
(obj18332_18362[applied_science.js_interop.impl.wrap_key.call(null,k_18359)] = v_18360);



var G__18363 = cljs.core.next.call(null,seq__18303_18352__$1);
var G__18364 = null;
var G__18365 = (0);
var G__18366 = (0);
seq__18303_18338 = G__18363;
chunk__18304_18339 = G__18364;
count__18305_18340 = G__18365;
i__18306_18341 = G__18366;
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
applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq18300){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18300));
});


//# sourceMappingURL=js_interop.js.map
