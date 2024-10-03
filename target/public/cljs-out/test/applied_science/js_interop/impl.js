// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('applied_science.js_interop.impl');
goog.require('cljs.core');
/**
 * Returns `k` or, if it is a keyword, its name.
 */
applied_science.js_interop.impl.wrap_key = (function applied_science$js_interop$impl$wrap_key(k){
var G__27089 = k;
if((k instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,G__27089);
} else {
return G__27089;
}
});
applied_science.js_interop.impl.in_QMARK__STAR_ = (function applied_science$js_interop$impl$in_QMARK__STAR_(k_STAR_,obj){
return k_STAR_ in obj;
});
applied_science.js_interop.impl.contains_QMARK__STAR_ = (function applied_science$js_interop$impl$contains_QMARK__STAR_(obj,k_STAR_){
return (((!((obj == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_.call(null,k_STAR_,obj)));
});
applied_science.js_interop.impl.get_PLUS__BANG_ = (function applied_science$js_interop$impl$get_PLUS__BANG_(o,k_STAR_){
var temp__5825__auto__ = (o[k_STAR_]);
if((temp__5825__auto__ == null)){
return (o[k_STAR_] = ({}));
} else {
var child_obj = temp__5825__auto__;
return child_obj;
}
});
/**
 * Look up `ks` in `obj`, stopping at any nil
 */
applied_science.js_interop.impl.get_value_by_keys = (function applied_science$js_interop$impl$get_value_by_keys(obj,ks_STAR_){
if(cljs.core.truth_(obj)){
var end = cljs.core.count.call(null,ks_STAR_);
var i = (0);
var obj__$1 = obj;
while(true){
if(((cljs.core._EQ_.call(null,i,end)) || ((obj__$1 == null)))){
return obj__$1;
} else {
var G__27090 = (i + (1));
var G__27091 = (obj__$1[cljs.core.nth.call(null,ks_STAR_,i)]);
i = G__27090;
obj__$1 = G__27091;
continue;
}
break;
}
} else {
return null;
}
});
applied_science.js_interop.impl.get_in_STAR_ = (function applied_science$js_interop$impl$get_in_STAR_(var_args){
var G__27093 = arguments.length;
switch (G__27093) {
case 2:
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks_STAR_){
return applied_science.js_interop.impl.get_value_by_keys.call(null,obj,ks_STAR_);
}));

(applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks_STAR_,not_found){
var temp__5825__auto__ = applied_science.js_interop.impl.get_value_by_keys.call(null,obj,cljs.core.butlast.call(null,ks_STAR_));
if((temp__5825__auto__ == null)){
return not_found;
} else {
var last_obj = temp__5825__auto__;
var k = cljs.core.peek.call(null,ks_STAR_);
if(cljs.core.truth_(k in last_obj)){
return (last_obj[applied_science.js_interop.impl.wrap_key.call(null,k)]);
} else {
return not_found;
}
}
}));

(applied_science.js_interop.impl.get_in_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Returns an object containing only those entries in `o` whose key is in `ks`
 */
applied_science.js_interop.impl.select_keys_STAR_ = (function applied_science$js_interop$impl$select_keys_STAR_(obj,ks_STAR_){
return cljs.core.reduce.call(null,(function (m,k){
var G__27095 = m;
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj,k)){
var G__27096 = G__27095;
(G__27096[k] = (obj[k]));

return G__27096;
} else {
return G__27095;
}
}),({}),ks_STAR_);
});
applied_science.js_interop.impl.assoc_in_STAR_ = (function applied_science$js_interop$impl$assoc_in_STAR_(obj,ks_STAR_,v){
var obj__$1 = (((!((obj == null))))?obj:({}));
var inner_obj = cljs.core.reduce.call(null,applied_science.js_interop.impl.get_PLUS__BANG_,obj__$1,cljs.core.butlast.call(null,ks_STAR_));
(inner_obj[cljs.core.peek.call(null,ks_STAR_)] = v);

return obj__$1;
});
applied_science.js_interop.impl.update_in_STAR_ = (function applied_science$js_interop$impl$update_in_STAR_(obj,ks_STAR_,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var last_k_STAR_ = cljs.core.peek.call(null,ks_STAR_);
var inner_obj = cljs.core.reduce.call(null,applied_science.js_interop.impl.get_PLUS__BANG_,obj__$1,cljs.core.butlast.call(null,ks_STAR_));
var old_val = (inner_obj[last_k_STAR_]);
(inner_obj[last_k_STAR_] = cljs.core.apply.call(null,f,old_val,args));

return obj__$1;
});
applied_science.js_interop.impl.apply_in_STAR_ = (function applied_science$js_interop$impl$apply_in_STAR_(obj,ks_STAR_,arg_array){
var parent = applied_science.js_interop.impl.get_in_STAR_.call(null,obj,cljs.core.pop.call(null,ks_STAR_));
var f = (parent[cljs.core.peek.call(null,ks_STAR_)]);
return f.apply(parent,arg_array);
});

//# sourceMappingURL=impl.js.map
