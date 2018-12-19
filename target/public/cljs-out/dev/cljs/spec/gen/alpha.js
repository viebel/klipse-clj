// Compiled by ClojureScript 1.10.492 {}
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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){
return cljs.core._write.call(null,writer__4246__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__4607__auto__ = [];
var len__4601__auto___16111 = arguments.length;
var i__4602__auto___16112 = (0);
while(true){
if((i__4602__auto___16112 < len__4601__auto___16111)){
args__4607__auto__.push((arguments[i__4602__auto___16112]));

var G__16113 = (i__4602__auto___16112 + (1));
i__4602__auto___16112 = G__16113;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq16110){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16110));
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
var args__4607__auto__ = [];
var len__4601__auto___16115 = arguments.length;
var i__4602__auto___16116 = (0);
while(true){
if((i__4602__auto___16116 < len__4601__auto___16115)){
args__4607__auto__.push((arguments[i__4602__auto___16116]));

var G__16117 = (i__4602__auto___16116 + (1));
i__4602__auto___16116 = G__16117;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq16114){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16114));
});

var g_QMARK__16118 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
var g_16119 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__16118){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
});})(g_QMARK__16118))
,null));
var mkg_16120 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__16118,g_16119){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
});})(g_QMARK__16118,g_16119))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__16118,g_16119,mkg_16120){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__16118).call(null,x);
});})(g_QMARK__16118,g_16119,mkg_16120))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__16118,g_16119,mkg_16120){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_16120).call(null,gfn);
});})(g_QMARK__16118,g_16119,mkg_16120))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__16118,g_16119,mkg_16120){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_16119).call(null,generator);
});})(g_QMARK__16118,g_16119,mkg_16120))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__7802__auto___16141 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__7802__auto___16141){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16142 = arguments.length;
var i__4602__auto___16143 = (0);
while(true){
if((i__4602__auto___16143 < len__4601__auto___16142)){
args__4607__auto__.push((arguments[i__4602__auto___16143]));

var G__16144 = (i__4602__auto___16143 + (1));
i__4602__auto___16143 = G__16144;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16141))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16141){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16141),args);
});})(g__7802__auto___16141))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__7802__auto___16141){
return (function (seq16121){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16121));
});})(g__7802__auto___16141))
;


var g__7802__auto___16145 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__7802__auto___16145){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16146 = arguments.length;
var i__4602__auto___16147 = (0);
while(true){
if((i__4602__auto___16147 < len__4601__auto___16146)){
args__4607__auto__.push((arguments[i__4602__auto___16147]));

var G__16148 = (i__4602__auto___16147 + (1));
i__4602__auto___16147 = G__16148;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16145))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16145){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16145),args);
});})(g__7802__auto___16145))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__7802__auto___16145){
return (function (seq16122){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16122));
});})(g__7802__auto___16145))
;


var g__7802__auto___16149 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__7802__auto___16149){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16150 = arguments.length;
var i__4602__auto___16151 = (0);
while(true){
if((i__4602__auto___16151 < len__4601__auto___16150)){
args__4607__auto__.push((arguments[i__4602__auto___16151]));

var G__16152 = (i__4602__auto___16151 + (1));
i__4602__auto___16151 = G__16152;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16149))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16149){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16149),args);
});})(g__7802__auto___16149))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__7802__auto___16149){
return (function (seq16123){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16123));
});})(g__7802__auto___16149))
;


var g__7802__auto___16153 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__7802__auto___16153){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16154 = arguments.length;
var i__4602__auto___16155 = (0);
while(true){
if((i__4602__auto___16155 < len__4601__auto___16154)){
args__4607__auto__.push((arguments[i__4602__auto___16155]));

var G__16156 = (i__4602__auto___16155 + (1));
i__4602__auto___16155 = G__16156;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16153))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16153){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16153),args);
});})(g__7802__auto___16153))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__7802__auto___16153){
return (function (seq16124){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16124));
});})(g__7802__auto___16153))
;


var g__7802__auto___16157 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__7802__auto___16157){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16158 = arguments.length;
var i__4602__auto___16159 = (0);
while(true){
if((i__4602__auto___16159 < len__4601__auto___16158)){
args__4607__auto__.push((arguments[i__4602__auto___16159]));

var G__16160 = (i__4602__auto___16159 + (1));
i__4602__auto___16159 = G__16160;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16157))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16157){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16157),args);
});})(g__7802__auto___16157))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__7802__auto___16157){
return (function (seq16125){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16125));
});})(g__7802__auto___16157))
;


var g__7802__auto___16161 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__7802__auto___16161){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16162 = arguments.length;
var i__4602__auto___16163 = (0);
while(true){
if((i__4602__auto___16163 < len__4601__auto___16162)){
args__4607__auto__.push((arguments[i__4602__auto___16163]));

var G__16164 = (i__4602__auto___16163 + (1));
i__4602__auto___16163 = G__16164;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16161))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16161){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16161),args);
});})(g__7802__auto___16161))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__7802__auto___16161){
return (function (seq16126){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16126));
});})(g__7802__auto___16161))
;


var g__7802__auto___16165 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__7802__auto___16165){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16166 = arguments.length;
var i__4602__auto___16167 = (0);
while(true){
if((i__4602__auto___16167 < len__4601__auto___16166)){
args__4607__auto__.push((arguments[i__4602__auto___16167]));

var G__16168 = (i__4602__auto___16167 + (1));
i__4602__auto___16167 = G__16168;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16165))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16165){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16165),args);
});})(g__7802__auto___16165))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__7802__auto___16165){
return (function (seq16127){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16127));
});})(g__7802__auto___16165))
;


var g__7802__auto___16169 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__7802__auto___16169){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16170 = arguments.length;
var i__4602__auto___16171 = (0);
while(true){
if((i__4602__auto___16171 < len__4601__auto___16170)){
args__4607__auto__.push((arguments[i__4602__auto___16171]));

var G__16172 = (i__4602__auto___16171 + (1));
i__4602__auto___16171 = G__16172;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16169))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16169){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16169),args);
});})(g__7802__auto___16169))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__7802__auto___16169){
return (function (seq16128){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16128));
});})(g__7802__auto___16169))
;


var g__7802__auto___16173 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__7802__auto___16173){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16174 = arguments.length;
var i__4602__auto___16175 = (0);
while(true){
if((i__4602__auto___16175 < len__4601__auto___16174)){
args__4607__auto__.push((arguments[i__4602__auto___16175]));

var G__16176 = (i__4602__auto___16175 + (1));
i__4602__auto___16175 = G__16176;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16173))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16173){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16173),args);
});})(g__7802__auto___16173))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__7802__auto___16173){
return (function (seq16129){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16129));
});})(g__7802__auto___16173))
;


var g__7802__auto___16177 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__7802__auto___16177){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16178 = arguments.length;
var i__4602__auto___16179 = (0);
while(true){
if((i__4602__auto___16179 < len__4601__auto___16178)){
args__4607__auto__.push((arguments[i__4602__auto___16179]));

var G__16180 = (i__4602__auto___16179 + (1));
i__4602__auto___16179 = G__16180;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16177))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16177){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16177),args);
});})(g__7802__auto___16177))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__7802__auto___16177){
return (function (seq16130){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16130));
});})(g__7802__auto___16177))
;


var g__7802__auto___16181 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__7802__auto___16181){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16182 = arguments.length;
var i__4602__auto___16183 = (0);
while(true){
if((i__4602__auto___16183 < len__4601__auto___16182)){
args__4607__auto__.push((arguments[i__4602__auto___16183]));

var G__16184 = (i__4602__auto___16183 + (1));
i__4602__auto___16183 = G__16184;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16181))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16181){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16181),args);
});})(g__7802__auto___16181))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__7802__auto___16181){
return (function (seq16131){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16131));
});})(g__7802__auto___16181))
;


var g__7802__auto___16185 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__7802__auto___16185){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16186 = arguments.length;
var i__4602__auto___16187 = (0);
while(true){
if((i__4602__auto___16187 < len__4601__auto___16186)){
args__4607__auto__.push((arguments[i__4602__auto___16187]));

var G__16188 = (i__4602__auto___16187 + (1));
i__4602__auto___16187 = G__16188;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16185))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16185){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16185),args);
});})(g__7802__auto___16185))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__7802__auto___16185){
return (function (seq16132){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16132));
});})(g__7802__auto___16185))
;


var g__7802__auto___16189 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__7802__auto___16189){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16190 = arguments.length;
var i__4602__auto___16191 = (0);
while(true){
if((i__4602__auto___16191 < len__4601__auto___16190)){
args__4607__auto__.push((arguments[i__4602__auto___16191]));

var G__16192 = (i__4602__auto___16191 + (1));
i__4602__auto___16191 = G__16192;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16189))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16189){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16189),args);
});})(g__7802__auto___16189))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__7802__auto___16189){
return (function (seq16133){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16133));
});})(g__7802__auto___16189))
;


var g__7802__auto___16193 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__7802__auto___16193){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16194 = arguments.length;
var i__4602__auto___16195 = (0);
while(true){
if((i__4602__auto___16195 < len__4601__auto___16194)){
args__4607__auto__.push((arguments[i__4602__auto___16195]));

var G__16196 = (i__4602__auto___16195 + (1));
i__4602__auto___16195 = G__16196;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16193))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16193){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16193),args);
});})(g__7802__auto___16193))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__7802__auto___16193){
return (function (seq16134){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16134));
});})(g__7802__auto___16193))
;


var g__7802__auto___16197 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__7802__auto___16197){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16198 = arguments.length;
var i__4602__auto___16199 = (0);
while(true){
if((i__4602__auto___16199 < len__4601__auto___16198)){
args__4607__auto__.push((arguments[i__4602__auto___16199]));

var G__16200 = (i__4602__auto___16199 + (1));
i__4602__auto___16199 = G__16200;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16197))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16197){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16197),args);
});})(g__7802__auto___16197))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__7802__auto___16197){
return (function (seq16135){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16135));
});})(g__7802__auto___16197))
;


var g__7802__auto___16201 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__7802__auto___16201){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16202 = arguments.length;
var i__4602__auto___16203 = (0);
while(true){
if((i__4602__auto___16203 < len__4601__auto___16202)){
args__4607__auto__.push((arguments[i__4602__auto___16203]));

var G__16204 = (i__4602__auto___16203 + (1));
i__4602__auto___16203 = G__16204;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16201))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16201){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16201),args);
});})(g__7802__auto___16201))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__7802__auto___16201){
return (function (seq16136){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16136));
});})(g__7802__auto___16201))
;


var g__7802__auto___16205 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__7802__auto___16205){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16206 = arguments.length;
var i__4602__auto___16207 = (0);
while(true){
if((i__4602__auto___16207 < len__4601__auto___16206)){
args__4607__auto__.push((arguments[i__4602__auto___16207]));

var G__16208 = (i__4602__auto___16207 + (1));
i__4602__auto___16207 = G__16208;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16205))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16205){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16205),args);
});})(g__7802__auto___16205))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__7802__auto___16205){
return (function (seq16137){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16137));
});})(g__7802__auto___16205))
;


var g__7802__auto___16209 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__7802__auto___16209){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16210 = arguments.length;
var i__4602__auto___16211 = (0);
while(true){
if((i__4602__auto___16211 < len__4601__auto___16210)){
args__4607__auto__.push((arguments[i__4602__auto___16211]));

var G__16212 = (i__4602__auto___16211 + (1));
i__4602__auto___16211 = G__16212;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16209))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16209){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16209),args);
});})(g__7802__auto___16209))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__7802__auto___16209){
return (function (seq16138){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16138));
});})(g__7802__auto___16209))
;


var g__7802__auto___16213 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__7802__auto___16213){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16214 = arguments.length;
var i__4602__auto___16215 = (0);
while(true){
if((i__4602__auto___16215 < len__4601__auto___16214)){
args__4607__auto__.push((arguments[i__4602__auto___16215]));

var G__16216 = (i__4602__auto___16215 + (1));
i__4602__auto___16215 = G__16216;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16213))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16213){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16213),args);
});})(g__7802__auto___16213))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__7802__auto___16213){
return (function (seq16139){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16139));
});})(g__7802__auto___16213))
;


var g__7802__auto___16217 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = ((function (g__7802__auto___16217){
return (function cljs$spec$gen$alpha$shuffle(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16218 = arguments.length;
var i__4602__auto___16219 = (0);
while(true){
if((i__4602__auto___16219 < len__4601__auto___16218)){
args__4607__auto__.push((arguments[i__4602__auto___16219]));

var G__16220 = (i__4602__auto___16219 + (1));
i__4602__auto___16219 = G__16220;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7802__auto___16217))
;

cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7802__auto___16217){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7802__auto___16217),args);
});})(g__7802__auto___16217))
;

cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = ((function (g__7802__auto___16217){
return (function (seq16140){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16140));
});})(g__7802__auto___16217))
;

var g__7815__auto___16242 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__7815__auto___16242){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16243 = arguments.length;
var i__4602__auto___16244 = (0);
while(true){
if((i__4602__auto___16244 < len__4601__auto___16243)){
args__4607__auto__.push((arguments[i__4602__auto___16244]));

var G__16245 = (i__4602__auto___16244 + (1));
i__4602__auto___16244 = G__16245;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16242))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16242){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16242);
});})(g__7815__auto___16242))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__7815__auto___16242){
return (function (seq16221){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16221));
});})(g__7815__auto___16242))
;


var g__7815__auto___16246 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__7815__auto___16246){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16247 = arguments.length;
var i__4602__auto___16248 = (0);
while(true){
if((i__4602__auto___16248 < len__4601__auto___16247)){
args__4607__auto__.push((arguments[i__4602__auto___16248]));

var G__16249 = (i__4602__auto___16248 + (1));
i__4602__auto___16248 = G__16249;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16246))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16246){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16246);
});})(g__7815__auto___16246))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__7815__auto___16246){
return (function (seq16222){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16222));
});})(g__7815__auto___16246))
;


var g__7815__auto___16250 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__7815__auto___16250){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16251 = arguments.length;
var i__4602__auto___16252 = (0);
while(true){
if((i__4602__auto___16252 < len__4601__auto___16251)){
args__4607__auto__.push((arguments[i__4602__auto___16252]));

var G__16253 = (i__4602__auto___16252 + (1));
i__4602__auto___16252 = G__16253;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16250))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16250){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16250);
});})(g__7815__auto___16250))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__7815__auto___16250){
return (function (seq16223){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16223));
});})(g__7815__auto___16250))
;


var g__7815__auto___16254 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__7815__auto___16254){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16255 = arguments.length;
var i__4602__auto___16256 = (0);
while(true){
if((i__4602__auto___16256 < len__4601__auto___16255)){
args__4607__auto__.push((arguments[i__4602__auto___16256]));

var G__16257 = (i__4602__auto___16256 + (1));
i__4602__auto___16256 = G__16257;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16254))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16254){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16254);
});})(g__7815__auto___16254))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__7815__auto___16254){
return (function (seq16224){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16224));
});})(g__7815__auto___16254))
;


var g__7815__auto___16258 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__7815__auto___16258){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16259 = arguments.length;
var i__4602__auto___16260 = (0);
while(true){
if((i__4602__auto___16260 < len__4601__auto___16259)){
args__4607__auto__.push((arguments[i__4602__auto___16260]));

var G__16261 = (i__4602__auto___16260 + (1));
i__4602__auto___16260 = G__16261;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16258))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16258){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16258);
});})(g__7815__auto___16258))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__7815__auto___16258){
return (function (seq16225){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16225));
});})(g__7815__auto___16258))
;


var g__7815__auto___16262 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__7815__auto___16262){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16263 = arguments.length;
var i__4602__auto___16264 = (0);
while(true){
if((i__4602__auto___16264 < len__4601__auto___16263)){
args__4607__auto__.push((arguments[i__4602__auto___16264]));

var G__16265 = (i__4602__auto___16264 + (1));
i__4602__auto___16264 = G__16265;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16262))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16262){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16262);
});})(g__7815__auto___16262))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__7815__auto___16262){
return (function (seq16226){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16226));
});})(g__7815__auto___16262))
;


var g__7815__auto___16266 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__7815__auto___16266){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16267 = arguments.length;
var i__4602__auto___16268 = (0);
while(true){
if((i__4602__auto___16268 < len__4601__auto___16267)){
args__4607__auto__.push((arguments[i__4602__auto___16268]));

var G__16269 = (i__4602__auto___16268 + (1));
i__4602__auto___16268 = G__16269;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16266))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16266){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16266);
});})(g__7815__auto___16266))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__7815__auto___16266){
return (function (seq16227){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16227));
});})(g__7815__auto___16266))
;


var g__7815__auto___16270 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__7815__auto___16270){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16271 = arguments.length;
var i__4602__auto___16272 = (0);
while(true){
if((i__4602__auto___16272 < len__4601__auto___16271)){
args__4607__auto__.push((arguments[i__4602__auto___16272]));

var G__16273 = (i__4602__auto___16272 + (1));
i__4602__auto___16272 = G__16273;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16270))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16270){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16270);
});})(g__7815__auto___16270))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__7815__auto___16270){
return (function (seq16228){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16228));
});})(g__7815__auto___16270))
;


var g__7815__auto___16274 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__7815__auto___16274){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16275 = arguments.length;
var i__4602__auto___16276 = (0);
while(true){
if((i__4602__auto___16276 < len__4601__auto___16275)){
args__4607__auto__.push((arguments[i__4602__auto___16276]));

var G__16277 = (i__4602__auto___16276 + (1));
i__4602__auto___16276 = G__16277;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16274))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16274){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16274);
});})(g__7815__auto___16274))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__7815__auto___16274){
return (function (seq16229){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16229));
});})(g__7815__auto___16274))
;


var g__7815__auto___16278 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__7815__auto___16278){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16279 = arguments.length;
var i__4602__auto___16280 = (0);
while(true){
if((i__4602__auto___16280 < len__4601__auto___16279)){
args__4607__auto__.push((arguments[i__4602__auto___16280]));

var G__16281 = (i__4602__auto___16280 + (1));
i__4602__auto___16280 = G__16281;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16278))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16278){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16278);
});})(g__7815__auto___16278))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__7815__auto___16278){
return (function (seq16230){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16230));
});})(g__7815__auto___16278))
;


var g__7815__auto___16282 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__7815__auto___16282){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16283 = arguments.length;
var i__4602__auto___16284 = (0);
while(true){
if((i__4602__auto___16284 < len__4601__auto___16283)){
args__4607__auto__.push((arguments[i__4602__auto___16284]));

var G__16285 = (i__4602__auto___16284 + (1));
i__4602__auto___16284 = G__16285;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16282))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16282){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16282);
});})(g__7815__auto___16282))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__7815__auto___16282){
return (function (seq16231){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16231));
});})(g__7815__auto___16282))
;


var g__7815__auto___16286 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__7815__auto___16286){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16287 = arguments.length;
var i__4602__auto___16288 = (0);
while(true){
if((i__4602__auto___16288 < len__4601__auto___16287)){
args__4607__auto__.push((arguments[i__4602__auto___16288]));

var G__16289 = (i__4602__auto___16288 + (1));
i__4602__auto___16288 = G__16289;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16286))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16286){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16286);
});})(g__7815__auto___16286))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__7815__auto___16286){
return (function (seq16232){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16232));
});})(g__7815__auto___16286))
;


var g__7815__auto___16290 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__7815__auto___16290){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16291 = arguments.length;
var i__4602__auto___16292 = (0);
while(true){
if((i__4602__auto___16292 < len__4601__auto___16291)){
args__4607__auto__.push((arguments[i__4602__auto___16292]));

var G__16293 = (i__4602__auto___16292 + (1));
i__4602__auto___16292 = G__16293;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16290))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16290){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16290);
});})(g__7815__auto___16290))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__7815__auto___16290){
return (function (seq16233){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16233));
});})(g__7815__auto___16290))
;


var g__7815__auto___16294 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__7815__auto___16294){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16295 = arguments.length;
var i__4602__auto___16296 = (0);
while(true){
if((i__4602__auto___16296 < len__4601__auto___16295)){
args__4607__auto__.push((arguments[i__4602__auto___16296]));

var G__16297 = (i__4602__auto___16296 + (1));
i__4602__auto___16296 = G__16297;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16294))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16294){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16294);
});})(g__7815__auto___16294))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__7815__auto___16294){
return (function (seq16234){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16234));
});})(g__7815__auto___16294))
;


var g__7815__auto___16298 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__7815__auto___16298){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16299 = arguments.length;
var i__4602__auto___16300 = (0);
while(true){
if((i__4602__auto___16300 < len__4601__auto___16299)){
args__4607__auto__.push((arguments[i__4602__auto___16300]));

var G__16301 = (i__4602__auto___16300 + (1));
i__4602__auto___16300 = G__16301;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16298))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16298){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16298);
});})(g__7815__auto___16298))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__7815__auto___16298){
return (function (seq16235){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16235));
});})(g__7815__auto___16298))
;


var g__7815__auto___16302 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__7815__auto___16302){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16303 = arguments.length;
var i__4602__auto___16304 = (0);
while(true){
if((i__4602__auto___16304 < len__4601__auto___16303)){
args__4607__auto__.push((arguments[i__4602__auto___16304]));

var G__16305 = (i__4602__auto___16304 + (1));
i__4602__auto___16304 = G__16305;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16302))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16302){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16302);
});})(g__7815__auto___16302))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__7815__auto___16302){
return (function (seq16236){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16236));
});})(g__7815__auto___16302))
;


var g__7815__auto___16306 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__7815__auto___16306){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16307 = arguments.length;
var i__4602__auto___16308 = (0);
while(true){
if((i__4602__auto___16308 < len__4601__auto___16307)){
args__4607__auto__.push((arguments[i__4602__auto___16308]));

var G__16309 = (i__4602__auto___16308 + (1));
i__4602__auto___16308 = G__16309;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16306))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16306){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16306);
});})(g__7815__auto___16306))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__7815__auto___16306){
return (function (seq16237){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16237));
});})(g__7815__auto___16306))
;


var g__7815__auto___16310 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__7815__auto___16310){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16311 = arguments.length;
var i__4602__auto___16312 = (0);
while(true){
if((i__4602__auto___16312 < len__4601__auto___16311)){
args__4607__auto__.push((arguments[i__4602__auto___16312]));

var G__16313 = (i__4602__auto___16312 + (1));
i__4602__auto___16312 = G__16313;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16310))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16310){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16310);
});})(g__7815__auto___16310))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__7815__auto___16310){
return (function (seq16238){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16238));
});})(g__7815__auto___16310))
;


var g__7815__auto___16314 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__7815__auto___16314){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16315 = arguments.length;
var i__4602__auto___16316 = (0);
while(true){
if((i__4602__auto___16316 < len__4601__auto___16315)){
args__4607__auto__.push((arguments[i__4602__auto___16316]));

var G__16317 = (i__4602__auto___16316 + (1));
i__4602__auto___16316 = G__16317;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16314))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16314){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16314);
});})(g__7815__auto___16314))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__7815__auto___16314){
return (function (seq16239){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16239));
});})(g__7815__auto___16314))
;


var g__7815__auto___16318 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__7815__auto___16318){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16319 = arguments.length;
var i__4602__auto___16320 = (0);
while(true){
if((i__4602__auto___16320 < len__4601__auto___16319)){
args__4607__auto__.push((arguments[i__4602__auto___16320]));

var G__16321 = (i__4602__auto___16320 + (1));
i__4602__auto___16320 = G__16321;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16318))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16318){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16318);
});})(g__7815__auto___16318))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__7815__auto___16318){
return (function (seq16240){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16240));
});})(g__7815__auto___16318))
;


var g__7815__auto___16322 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__7815__auto___16322){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16323 = arguments.length;
var i__4602__auto___16324 = (0);
while(true){
if((i__4602__auto___16324 < len__4601__auto___16323)){
args__4607__auto__.push((arguments[i__4602__auto___16324]));

var G__16325 = (i__4602__auto___16324 + (1));
i__4602__auto___16324 = G__16325;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});})(g__7815__auto___16322))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7815__auto___16322){
return (function (args){
return cljs.core.deref.call(null,g__7815__auto___16322);
});})(g__7815__auto___16322))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__7815__auto___16322){
return (function (seq16241){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16241));
});})(g__7815__auto___16322))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4607__auto__ = [];
var len__4601__auto___16328 = arguments.length;
var i__4602__auto___16329 = (0);
while(true){
if((i__4602__auto___16329 < len__4601__auto___16328)){
args__4607__auto__.push((arguments[i__4602__auto___16329]));

var G__16330 = (i__4602__auto___16329 + (1));
i__4602__auto___16329 = G__16330;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__16326_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__16326_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq16327){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16327));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__16332_SHARP_){
return (new Date(p1__16332_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__16331_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16331_SHARP_),".com"].join('')));
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
