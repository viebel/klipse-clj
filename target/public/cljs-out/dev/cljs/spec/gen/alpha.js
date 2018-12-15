// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__18502__auto__,writer__18503__auto__,opt__18504__auto__){
return cljs.core._write.call(null,writer__18503__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27677 = arguments.length;
var i__19135__auto___27678 = (0);
while(true){
if((i__19135__auto___27678 < len__19134__auto___27677)){
args__19144__auto__.push((arguments[i__19135__auto___27678]));

var G__27679 = (i__19135__auto___27678 + (1));
i__19135__auto___27678 = G__27679;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq27676){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27676));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27681 = arguments.length;
var i__19135__auto___27682 = (0);
while(true){
if((i__19135__auto___27682 < len__19134__auto___27681)){
args__19144__auto__.push((arguments[i__19135__auto___27682]));

var G__27683 = (i__19135__auto___27682 + (1));
i__19135__auto___27682 = G__27683;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq27680){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27680));
});

var g_QMARK__27684 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
var g_27685 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__27684){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
});})(g_QMARK__27684))
,null));
var mkg_27686 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__27684,g_27685){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
});})(g_QMARK__27684,g_27685))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__27684,g_27685,mkg_27686){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__27684).call(null,x);
});})(g_QMARK__27684,g_27685,mkg_27686))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__27684,g_27685,mkg_27686){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_27686).call(null,gfn);
});})(g_QMARK__27684,g_27685,mkg_27686))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__27684,g_27685,mkg_27686){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_27685).call(null,generator);
});})(g_QMARK__27684,g_27685,mkg_27686))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__27648__auto___27707 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__27648__auto___27707){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27708 = arguments.length;
var i__19135__auto___27709 = (0);
while(true){
if((i__19135__auto___27709 < len__19134__auto___27708)){
args__19144__auto__.push((arguments[i__19135__auto___27709]));

var G__27710 = (i__19135__auto___27709 + (1));
i__19135__auto___27709 = G__27710;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27707))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27707){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27707),args);
});})(g__27648__auto___27707))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__27648__auto___27707){
return (function (seq27687){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27687));
});})(g__27648__auto___27707))
;


var g__27648__auto___27711 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__27648__auto___27711){
return (function cljs$spec$gen$alpha$list(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27712 = arguments.length;
var i__19135__auto___27713 = (0);
while(true){
if((i__19135__auto___27713 < len__19134__auto___27712)){
args__19144__auto__.push((arguments[i__19135__auto___27713]));

var G__27714 = (i__19135__auto___27713 + (1));
i__19135__auto___27713 = G__27714;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27711))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27711){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27711),args);
});})(g__27648__auto___27711))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__27648__auto___27711){
return (function (seq27688){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27688));
});})(g__27648__auto___27711))
;


var g__27648__auto___27715 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__27648__auto___27715){
return (function cljs$spec$gen$alpha$map(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27716 = arguments.length;
var i__19135__auto___27717 = (0);
while(true){
if((i__19135__auto___27717 < len__19134__auto___27716)){
args__19144__auto__.push((arguments[i__19135__auto___27717]));

var G__27718 = (i__19135__auto___27717 + (1));
i__19135__auto___27717 = G__27718;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27715))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27715){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27715),args);
});})(g__27648__auto___27715))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__27648__auto___27715){
return (function (seq27689){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27689));
});})(g__27648__auto___27715))
;


var g__27648__auto___27719 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__27648__auto___27719){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27720 = arguments.length;
var i__19135__auto___27721 = (0);
while(true){
if((i__19135__auto___27721 < len__19134__auto___27720)){
args__19144__auto__.push((arguments[i__19135__auto___27721]));

var G__27722 = (i__19135__auto___27721 + (1));
i__19135__auto___27721 = G__27722;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27719))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27719){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27719),args);
});})(g__27648__auto___27719))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__27648__auto___27719){
return (function (seq27690){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27690));
});})(g__27648__auto___27719))
;


var g__27648__auto___27723 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__27648__auto___27723){
return (function cljs$spec$gen$alpha$set(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27724 = arguments.length;
var i__19135__auto___27725 = (0);
while(true){
if((i__19135__auto___27725 < len__19134__auto___27724)){
args__19144__auto__.push((arguments[i__19135__auto___27725]));

var G__27726 = (i__19135__auto___27725 + (1));
i__19135__auto___27725 = G__27726;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27723))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27723){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27723),args);
});})(g__27648__auto___27723))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__27648__auto___27723){
return (function (seq27691){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27691));
});})(g__27648__auto___27723))
;


var g__27648__auto___27727 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__27648__auto___27727){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27728 = arguments.length;
var i__19135__auto___27729 = (0);
while(true){
if((i__19135__auto___27729 < len__19134__auto___27728)){
args__19144__auto__.push((arguments[i__19135__auto___27729]));

var G__27730 = (i__19135__auto___27729 + (1));
i__19135__auto___27729 = G__27730;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27727))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27727){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27727),args);
});})(g__27648__auto___27727))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__27648__auto___27727){
return (function (seq27692){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27692));
});})(g__27648__auto___27727))
;


var g__27648__auto___27731 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__27648__auto___27731){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27732 = arguments.length;
var i__19135__auto___27733 = (0);
while(true){
if((i__19135__auto___27733 < len__19134__auto___27732)){
args__19144__auto__.push((arguments[i__19135__auto___27733]));

var G__27734 = (i__19135__auto___27733 + (1));
i__19135__auto___27733 = G__27734;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27731))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27731){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27731),args);
});})(g__27648__auto___27731))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__27648__auto___27731){
return (function (seq27693){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27693));
});})(g__27648__auto___27731))
;


var g__27648__auto___27735 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__27648__auto___27735){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27736 = arguments.length;
var i__19135__auto___27737 = (0);
while(true){
if((i__19135__auto___27737 < len__19134__auto___27736)){
args__19144__auto__.push((arguments[i__19135__auto___27737]));

var G__27738 = (i__19135__auto___27737 + (1));
i__19135__auto___27737 = G__27738;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27735))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27735){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27735),args);
});})(g__27648__auto___27735))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__27648__auto___27735){
return (function (seq27694){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27694));
});})(g__27648__auto___27735))
;


var g__27648__auto___27739 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__27648__auto___27739){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27740 = arguments.length;
var i__19135__auto___27741 = (0);
while(true){
if((i__19135__auto___27741 < len__19134__auto___27740)){
args__19144__auto__.push((arguments[i__19135__auto___27741]));

var G__27742 = (i__19135__auto___27741 + (1));
i__19135__auto___27741 = G__27742;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27739))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27739){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27739),args);
});})(g__27648__auto___27739))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__27648__auto___27739){
return (function (seq27695){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27695));
});})(g__27648__auto___27739))
;


var g__27648__auto___27743 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__27648__auto___27743){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27744 = arguments.length;
var i__19135__auto___27745 = (0);
while(true){
if((i__19135__auto___27745 < len__19134__auto___27744)){
args__19144__auto__.push((arguments[i__19135__auto___27745]));

var G__27746 = (i__19135__auto___27745 + (1));
i__19135__auto___27745 = G__27746;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27743))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27743){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27743),args);
});})(g__27648__auto___27743))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__27648__auto___27743){
return (function (seq27696){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27696));
});})(g__27648__auto___27743))
;


var g__27648__auto___27747 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__27648__auto___27747){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27748 = arguments.length;
var i__19135__auto___27749 = (0);
while(true){
if((i__19135__auto___27749 < len__19134__auto___27748)){
args__19144__auto__.push((arguments[i__19135__auto___27749]));

var G__27750 = (i__19135__auto___27749 + (1));
i__19135__auto___27749 = G__27750;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27747))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27747){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27747),args);
});})(g__27648__auto___27747))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__27648__auto___27747){
return (function (seq27697){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27697));
});})(g__27648__auto___27747))
;


var g__27648__auto___27751 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__27648__auto___27751){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27752 = arguments.length;
var i__19135__auto___27753 = (0);
while(true){
if((i__19135__auto___27753 < len__19134__auto___27752)){
args__19144__auto__.push((arguments[i__19135__auto___27753]));

var G__27754 = (i__19135__auto___27753 + (1));
i__19135__auto___27753 = G__27754;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27751))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27751){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27751),args);
});})(g__27648__auto___27751))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__27648__auto___27751){
return (function (seq27698){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27698));
});})(g__27648__auto___27751))
;


var g__27648__auto___27755 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__27648__auto___27755){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27756 = arguments.length;
var i__19135__auto___27757 = (0);
while(true){
if((i__19135__auto___27757 < len__19134__auto___27756)){
args__19144__auto__.push((arguments[i__19135__auto___27757]));

var G__27758 = (i__19135__auto___27757 + (1));
i__19135__auto___27757 = G__27758;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27755))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27755){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27755),args);
});})(g__27648__auto___27755))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__27648__auto___27755){
return (function (seq27699){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27699));
});})(g__27648__auto___27755))
;


var g__27648__auto___27759 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__27648__auto___27759){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27760 = arguments.length;
var i__19135__auto___27761 = (0);
while(true){
if((i__19135__auto___27761 < len__19134__auto___27760)){
args__19144__auto__.push((arguments[i__19135__auto___27761]));

var G__27762 = (i__19135__auto___27761 + (1));
i__19135__auto___27761 = G__27762;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27759))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27759){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27759),args);
});})(g__27648__auto___27759))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__27648__auto___27759){
return (function (seq27700){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27700));
});})(g__27648__auto___27759))
;


var g__27648__auto___27763 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__27648__auto___27763){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27764 = arguments.length;
var i__19135__auto___27765 = (0);
while(true){
if((i__19135__auto___27765 < len__19134__auto___27764)){
args__19144__auto__.push((arguments[i__19135__auto___27765]));

var G__27766 = (i__19135__auto___27765 + (1));
i__19135__auto___27765 = G__27766;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27763))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27763){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27763),args);
});})(g__27648__auto___27763))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__27648__auto___27763){
return (function (seq27701){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27701));
});})(g__27648__auto___27763))
;


var g__27648__auto___27767 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__27648__auto___27767){
return (function cljs$spec$gen$alpha$return(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27768 = arguments.length;
var i__19135__auto___27769 = (0);
while(true){
if((i__19135__auto___27769 < len__19134__auto___27768)){
args__19144__auto__.push((arguments[i__19135__auto___27769]));

var G__27770 = (i__19135__auto___27769 + (1));
i__19135__auto___27769 = G__27770;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27767))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27767){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27767),args);
});})(g__27648__auto___27767))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__27648__auto___27767){
return (function (seq27702){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27702));
});})(g__27648__auto___27767))
;


var g__27648__auto___27771 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__27648__auto___27771){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27772 = arguments.length;
var i__19135__auto___27773 = (0);
while(true){
if((i__19135__auto___27773 < len__19134__auto___27772)){
args__19144__auto__.push((arguments[i__19135__auto___27773]));

var G__27774 = (i__19135__auto___27773 + (1));
i__19135__auto___27773 = G__27774;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27771))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27771){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27771),args);
});})(g__27648__auto___27771))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27648__auto___27771){
return (function (seq27703){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27703));
});})(g__27648__auto___27771))
;


var g__27648__auto___27775 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__27648__auto___27775){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27776 = arguments.length;
var i__19135__auto___27777 = (0);
while(true){
if((i__19135__auto___27777 < len__19134__auto___27776)){
args__19144__auto__.push((arguments[i__19135__auto___27777]));

var G__27778 = (i__19135__auto___27777 + (1));
i__19135__auto___27777 = G__27778;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27775))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27775){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27775),args);
});})(g__27648__auto___27775))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__27648__auto___27775){
return (function (seq27704){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27704));
});})(g__27648__auto___27775))
;


var g__27648__auto___27779 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__27648__auto___27779){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27780 = arguments.length;
var i__19135__auto___27781 = (0);
while(true){
if((i__19135__auto___27781 < len__19134__auto___27780)){
args__19144__auto__.push((arguments[i__19135__auto___27781]));

var G__27782 = (i__19135__auto___27781 + (1));
i__19135__auto___27781 = G__27782;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27779))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27779){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27779),args);
});})(g__27648__auto___27779))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__27648__auto___27779){
return (function (seq27705){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27705));
});})(g__27648__auto___27779))
;


var g__27648__auto___27783 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = ((function (g__27648__auto___27783){
return (function cljs$spec$gen$alpha$shuffle(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27784 = arguments.length;
var i__19135__auto___27785 = (0);
while(true){
if((i__19135__auto___27785 < len__19134__auto___27784)){
args__19144__auto__.push((arguments[i__19135__auto___27785]));

var G__27786 = (i__19135__auto___27785 + (1));
i__19135__auto___27785 = G__27786;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27648__auto___27783))
;

cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27648__auto___27783){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27648__auto___27783),args);
});})(g__27648__auto___27783))
;

cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = ((function (g__27648__auto___27783){
return (function (seq27706){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27706));
});})(g__27648__auto___27783))
;

var g__27661__auto___27808 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__27661__auto___27808){
return (function cljs$spec$gen$alpha$any(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27809 = arguments.length;
var i__19135__auto___27810 = (0);
while(true){
if((i__19135__auto___27810 < len__19134__auto___27809)){
args__19144__auto__.push((arguments[i__19135__auto___27810]));

var G__27811 = (i__19135__auto___27810 + (1));
i__19135__auto___27810 = G__27811;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27808))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27808){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27808);
});})(g__27661__auto___27808))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__27661__auto___27808){
return (function (seq27787){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27787));
});})(g__27661__auto___27808))
;


var g__27661__auto___27812 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__27661__auto___27812){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27813 = arguments.length;
var i__19135__auto___27814 = (0);
while(true){
if((i__19135__auto___27814 < len__19134__auto___27813)){
args__19144__auto__.push((arguments[i__19135__auto___27814]));

var G__27815 = (i__19135__auto___27814 + (1));
i__19135__auto___27814 = G__27815;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27812))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27812){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27812);
});})(g__27661__auto___27812))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__27661__auto___27812){
return (function (seq27788){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27788));
});})(g__27661__auto___27812))
;


var g__27661__auto___27816 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__27661__auto___27816){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27817 = arguments.length;
var i__19135__auto___27818 = (0);
while(true){
if((i__19135__auto___27818 < len__19134__auto___27817)){
args__19144__auto__.push((arguments[i__19135__auto___27818]));

var G__27819 = (i__19135__auto___27818 + (1));
i__19135__auto___27818 = G__27819;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27816))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27816){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27816);
});})(g__27661__auto___27816))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__27661__auto___27816){
return (function (seq27789){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27789));
});})(g__27661__auto___27816))
;


var g__27661__auto___27820 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__27661__auto___27820){
return (function cljs$spec$gen$alpha$char(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27821 = arguments.length;
var i__19135__auto___27822 = (0);
while(true){
if((i__19135__auto___27822 < len__19134__auto___27821)){
args__19144__auto__.push((arguments[i__19135__auto___27822]));

var G__27823 = (i__19135__auto___27822 + (1));
i__19135__auto___27822 = G__27823;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27820))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27820){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27820);
});})(g__27661__auto___27820))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__27661__auto___27820){
return (function (seq27790){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27790));
});})(g__27661__auto___27820))
;


var g__27661__auto___27824 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__27661__auto___27824){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27825 = arguments.length;
var i__19135__auto___27826 = (0);
while(true){
if((i__19135__auto___27826 < len__19134__auto___27825)){
args__19144__auto__.push((arguments[i__19135__auto___27826]));

var G__27827 = (i__19135__auto___27826 + (1));
i__19135__auto___27826 = G__27827;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27824))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27824){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27824);
});})(g__27661__auto___27824))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__27661__auto___27824){
return (function (seq27791){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27791));
});})(g__27661__auto___27824))
;


var g__27661__auto___27828 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__27661__auto___27828){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27829 = arguments.length;
var i__19135__auto___27830 = (0);
while(true){
if((i__19135__auto___27830 < len__19134__auto___27829)){
args__19144__auto__.push((arguments[i__19135__auto___27830]));

var G__27831 = (i__19135__auto___27830 + (1));
i__19135__auto___27830 = G__27831;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27828))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27828){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27828);
});})(g__27661__auto___27828))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__27661__auto___27828){
return (function (seq27792){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27792));
});})(g__27661__auto___27828))
;


var g__27661__auto___27832 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__27661__auto___27832){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27833 = arguments.length;
var i__19135__auto___27834 = (0);
while(true){
if((i__19135__auto___27834 < len__19134__auto___27833)){
args__19144__auto__.push((arguments[i__19135__auto___27834]));

var G__27835 = (i__19135__auto___27834 + (1));
i__19135__auto___27834 = G__27835;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27832))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27832){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27832);
});})(g__27661__auto___27832))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__27661__auto___27832){
return (function (seq27793){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27793));
});})(g__27661__auto___27832))
;


var g__27661__auto___27836 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__27661__auto___27836){
return (function cljs$spec$gen$alpha$double(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27837 = arguments.length;
var i__19135__auto___27838 = (0);
while(true){
if((i__19135__auto___27838 < len__19134__auto___27837)){
args__19144__auto__.push((arguments[i__19135__auto___27838]));

var G__27839 = (i__19135__auto___27838 + (1));
i__19135__auto___27838 = G__27839;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27836))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27836){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27836);
});})(g__27661__auto___27836))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__27661__auto___27836){
return (function (seq27794){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27794));
});})(g__27661__auto___27836))
;


var g__27661__auto___27840 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__27661__auto___27840){
return (function cljs$spec$gen$alpha$int(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27841 = arguments.length;
var i__19135__auto___27842 = (0);
while(true){
if((i__19135__auto___27842 < len__19134__auto___27841)){
args__19144__auto__.push((arguments[i__19135__auto___27842]));

var G__27843 = (i__19135__auto___27842 + (1));
i__19135__auto___27842 = G__27843;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27840))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27840){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27840);
});})(g__27661__auto___27840))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__27661__auto___27840){
return (function (seq27795){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27795));
});})(g__27661__auto___27840))
;


var g__27661__auto___27844 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__27661__auto___27844){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27845 = arguments.length;
var i__19135__auto___27846 = (0);
while(true){
if((i__19135__auto___27846 < len__19134__auto___27845)){
args__19144__auto__.push((arguments[i__19135__auto___27846]));

var G__27847 = (i__19135__auto___27846 + (1));
i__19135__auto___27846 = G__27847;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27844))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27844){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27844);
});})(g__27661__auto___27844))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__27661__auto___27844){
return (function (seq27796){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27796));
});})(g__27661__auto___27844))
;


var g__27661__auto___27848 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__27661__auto___27848){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27849 = arguments.length;
var i__19135__auto___27850 = (0);
while(true){
if((i__19135__auto___27850 < len__19134__auto___27849)){
args__19144__auto__.push((arguments[i__19135__auto___27850]));

var G__27851 = (i__19135__auto___27850 + (1));
i__19135__auto___27850 = G__27851;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27848))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27848){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27848);
});})(g__27661__auto___27848))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__27661__auto___27848){
return (function (seq27797){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27797));
});})(g__27661__auto___27848))
;


var g__27661__auto___27852 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__27661__auto___27852){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27853 = arguments.length;
var i__19135__auto___27854 = (0);
while(true){
if((i__19135__auto___27854 < len__19134__auto___27853)){
args__19144__auto__.push((arguments[i__19135__auto___27854]));

var G__27855 = (i__19135__auto___27854 + (1));
i__19135__auto___27854 = G__27855;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27852))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27852){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27852);
});})(g__27661__auto___27852))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__27661__auto___27852){
return (function (seq27798){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27798));
});})(g__27661__auto___27852))
;


var g__27661__auto___27856 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__27661__auto___27856){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27857 = arguments.length;
var i__19135__auto___27858 = (0);
while(true){
if((i__19135__auto___27858 < len__19134__auto___27857)){
args__19144__auto__.push((arguments[i__19135__auto___27858]));

var G__27859 = (i__19135__auto___27858 + (1));
i__19135__auto___27858 = G__27859;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27856))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27856){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27856);
});})(g__27661__auto___27856))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__27661__auto___27856){
return (function (seq27799){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27799));
});})(g__27661__auto___27856))
;


var g__27661__auto___27860 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__27661__auto___27860){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27861 = arguments.length;
var i__19135__auto___27862 = (0);
while(true){
if((i__19135__auto___27862 < len__19134__auto___27861)){
args__19144__auto__.push((arguments[i__19135__auto___27862]));

var G__27863 = (i__19135__auto___27862 + (1));
i__19135__auto___27862 = G__27863;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27860))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27860){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27860);
});})(g__27661__auto___27860))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__27661__auto___27860){
return (function (seq27800){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27800));
});})(g__27661__auto___27860))
;


var g__27661__auto___27864 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__27661__auto___27864){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27865 = arguments.length;
var i__19135__auto___27866 = (0);
while(true){
if((i__19135__auto___27866 < len__19134__auto___27865)){
args__19144__auto__.push((arguments[i__19135__auto___27866]));

var G__27867 = (i__19135__auto___27866 + (1));
i__19135__auto___27866 = G__27867;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27864))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27864){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27864);
});})(g__27661__auto___27864))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__27661__auto___27864){
return (function (seq27801){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27801));
});})(g__27661__auto___27864))
;


var g__27661__auto___27868 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__27661__auto___27868){
return (function cljs$spec$gen$alpha$string(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27869 = arguments.length;
var i__19135__auto___27870 = (0);
while(true){
if((i__19135__auto___27870 < len__19134__auto___27869)){
args__19144__auto__.push((arguments[i__19135__auto___27870]));

var G__27871 = (i__19135__auto___27870 + (1));
i__19135__auto___27870 = G__27871;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27868))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27868){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27868);
});})(g__27661__auto___27868))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__27661__auto___27868){
return (function (seq27802){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27802));
});})(g__27661__auto___27868))
;


var g__27661__auto___27872 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__27661__auto___27872){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27873 = arguments.length;
var i__19135__auto___27874 = (0);
while(true){
if((i__19135__auto___27874 < len__19134__auto___27873)){
args__19144__auto__.push((arguments[i__19135__auto___27874]));

var G__27875 = (i__19135__auto___27874 + (1));
i__19135__auto___27874 = G__27875;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27872))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27872){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27872);
});})(g__27661__auto___27872))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__27661__auto___27872){
return (function (seq27803){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27803));
});})(g__27661__auto___27872))
;


var g__27661__auto___27876 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__27661__auto___27876){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27877 = arguments.length;
var i__19135__auto___27878 = (0);
while(true){
if((i__19135__auto___27878 < len__19134__auto___27877)){
args__19144__auto__.push((arguments[i__19135__auto___27878]));

var G__27879 = (i__19135__auto___27878 + (1));
i__19135__auto___27878 = G__27879;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27876))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27876){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27876);
});})(g__27661__auto___27876))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__27661__auto___27876){
return (function (seq27804){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27804));
});})(g__27661__auto___27876))
;


var g__27661__auto___27880 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__27661__auto___27880){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27881 = arguments.length;
var i__19135__auto___27882 = (0);
while(true){
if((i__19135__auto___27882 < len__19134__auto___27881)){
args__19144__auto__.push((arguments[i__19135__auto___27882]));

var G__27883 = (i__19135__auto___27882 + (1));
i__19135__auto___27882 = G__27883;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27880))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27880){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27880);
});})(g__27661__auto___27880))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__27661__auto___27880){
return (function (seq27805){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27805));
});})(g__27661__auto___27880))
;


var g__27661__auto___27884 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__27661__auto___27884){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27885 = arguments.length;
var i__19135__auto___27886 = (0);
while(true){
if((i__19135__auto___27886 < len__19134__auto___27885)){
args__19144__auto__.push((arguments[i__19135__auto___27886]));

var G__27887 = (i__19135__auto___27886 + (1));
i__19135__auto___27886 = G__27887;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27884))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27884){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27884);
});})(g__27661__auto___27884))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__27661__auto___27884){
return (function (seq27806){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27806));
});})(g__27661__auto___27884))
;


var g__27661__auto___27888 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__27661__auto___27888){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27889 = arguments.length;
var i__19135__auto___27890 = (0);
while(true){
if((i__19135__auto___27890 < len__19134__auto___27889)){
args__19144__auto__.push((arguments[i__19135__auto___27890]));

var G__27891 = (i__19135__auto___27890 + (1));
i__19135__auto___27890 = G__27891;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});})(g__27661__auto___27888))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27661__auto___27888){
return (function (args){
return cljs.core.deref.call(null,g__27661__auto___27888);
});})(g__27661__auto___27888))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__27661__auto___27888){
return (function (seq27807){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27807));
});})(g__27661__auto___27888))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__19144__auto__ = [];
var len__19134__auto___27894 = arguments.length;
var i__19135__auto___27895 = (0);
while(true){
if((i__19135__auto___27895 < len__19134__auto___27894)){
args__19144__auto__.push((arguments[i__19135__auto___27895]));

var G__27896 = (i__19135__auto___27895 + (1));
i__19135__auto___27895 = G__27896;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((0) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__19145__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__27892_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__27892_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq27893){
var self__19120__auto__ = this;
return self__19120__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27893));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__27898_SHARP_){
return (new Date(p1__27898_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__27897_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27897_SHARP_),".com"].join('')));
});})(simple))
,cljs.spec.gen.alpha.uuid.call(null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
