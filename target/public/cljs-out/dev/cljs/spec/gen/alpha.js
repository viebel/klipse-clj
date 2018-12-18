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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__18493__auto__,writer__18494__auto__,opt__18495__auto__){
return cljs.core._write.call(null,writer__18494__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__19135__auto__ = [];
var len__19125__auto___27668 = arguments.length;
var i__19126__auto___27669 = (0);
while(true){
if((i__19126__auto___27669 < len__19125__auto___27668)){
args__19135__auto__.push((arguments[i__19126__auto___27669]));

var G__27670 = (i__19126__auto___27669 + (1));
i__19126__auto___27669 = G__27670;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq27667){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27667));
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
var args__19135__auto__ = [];
var len__19125__auto___27672 = arguments.length;
var i__19126__auto___27673 = (0);
while(true){
if((i__19126__auto___27673 < len__19125__auto___27672)){
args__19135__auto__.push((arguments[i__19126__auto___27673]));

var G__27674 = (i__19126__auto___27673 + (1));
i__19126__auto___27673 = G__27674;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq27671){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27671));
});

var g_QMARK__27675 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
var g_27676 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__27675){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
});})(g_QMARK__27675))
,null));
var mkg_27677 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__27675,g_27676){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
});})(g_QMARK__27675,g_27676))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__27675,g_27676,mkg_27677){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__27675).call(null,x);
});})(g_QMARK__27675,g_27676,mkg_27677))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__27675,g_27676,mkg_27677){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_27677).call(null,gfn);
});})(g_QMARK__27675,g_27676,mkg_27677))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__27675,g_27676,mkg_27677){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_27676).call(null,generator);
});})(g_QMARK__27675,g_27676,mkg_27677))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__27639__auto___27698 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__27639__auto___27698){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27699 = arguments.length;
var i__19126__auto___27700 = (0);
while(true){
if((i__19126__auto___27700 < len__19125__auto___27699)){
args__19135__auto__.push((arguments[i__19126__auto___27700]));

var G__27701 = (i__19126__auto___27700 + (1));
i__19126__auto___27700 = G__27701;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27698))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27698){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27698),args);
});})(g__27639__auto___27698))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__27639__auto___27698){
return (function (seq27678){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27678));
});})(g__27639__auto___27698))
;


var g__27639__auto___27702 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__27639__auto___27702){
return (function cljs$spec$gen$alpha$list(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27703 = arguments.length;
var i__19126__auto___27704 = (0);
while(true){
if((i__19126__auto___27704 < len__19125__auto___27703)){
args__19135__auto__.push((arguments[i__19126__auto___27704]));

var G__27705 = (i__19126__auto___27704 + (1));
i__19126__auto___27704 = G__27705;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27702))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27702){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27702),args);
});})(g__27639__auto___27702))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__27639__auto___27702){
return (function (seq27679){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27679));
});})(g__27639__auto___27702))
;


var g__27639__auto___27706 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__27639__auto___27706){
return (function cljs$spec$gen$alpha$map(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27707 = arguments.length;
var i__19126__auto___27708 = (0);
while(true){
if((i__19126__auto___27708 < len__19125__auto___27707)){
args__19135__auto__.push((arguments[i__19126__auto___27708]));

var G__27709 = (i__19126__auto___27708 + (1));
i__19126__auto___27708 = G__27709;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27706))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27706){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27706),args);
});})(g__27639__auto___27706))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__27639__auto___27706){
return (function (seq27680){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27680));
});})(g__27639__auto___27706))
;


var g__27639__auto___27710 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__27639__auto___27710){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27711 = arguments.length;
var i__19126__auto___27712 = (0);
while(true){
if((i__19126__auto___27712 < len__19125__auto___27711)){
args__19135__auto__.push((arguments[i__19126__auto___27712]));

var G__27713 = (i__19126__auto___27712 + (1));
i__19126__auto___27712 = G__27713;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27710))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27710){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27710),args);
});})(g__27639__auto___27710))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__27639__auto___27710){
return (function (seq27681){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27681));
});})(g__27639__auto___27710))
;


var g__27639__auto___27714 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__27639__auto___27714){
return (function cljs$spec$gen$alpha$set(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27715 = arguments.length;
var i__19126__auto___27716 = (0);
while(true){
if((i__19126__auto___27716 < len__19125__auto___27715)){
args__19135__auto__.push((arguments[i__19126__auto___27716]));

var G__27717 = (i__19126__auto___27716 + (1));
i__19126__auto___27716 = G__27717;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27714))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27714){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27714),args);
});})(g__27639__auto___27714))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__27639__auto___27714){
return (function (seq27682){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27682));
});})(g__27639__auto___27714))
;


var g__27639__auto___27718 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__27639__auto___27718){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27719 = arguments.length;
var i__19126__auto___27720 = (0);
while(true){
if((i__19126__auto___27720 < len__19125__auto___27719)){
args__19135__auto__.push((arguments[i__19126__auto___27720]));

var G__27721 = (i__19126__auto___27720 + (1));
i__19126__auto___27720 = G__27721;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27718))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27718){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27718),args);
});})(g__27639__auto___27718))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__27639__auto___27718){
return (function (seq27683){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27683));
});})(g__27639__auto___27718))
;


var g__27639__auto___27722 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__27639__auto___27722){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27723 = arguments.length;
var i__19126__auto___27724 = (0);
while(true){
if((i__19126__auto___27724 < len__19125__auto___27723)){
args__19135__auto__.push((arguments[i__19126__auto___27724]));

var G__27725 = (i__19126__auto___27724 + (1));
i__19126__auto___27724 = G__27725;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27722))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27722){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27722),args);
});})(g__27639__auto___27722))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__27639__auto___27722){
return (function (seq27684){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27684));
});})(g__27639__auto___27722))
;


var g__27639__auto___27726 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__27639__auto___27726){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27727 = arguments.length;
var i__19126__auto___27728 = (0);
while(true){
if((i__19126__auto___27728 < len__19125__auto___27727)){
args__19135__auto__.push((arguments[i__19126__auto___27728]));

var G__27729 = (i__19126__auto___27728 + (1));
i__19126__auto___27728 = G__27729;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27726))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27726){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27726),args);
});})(g__27639__auto___27726))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__27639__auto___27726){
return (function (seq27685){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27685));
});})(g__27639__auto___27726))
;


var g__27639__auto___27730 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__27639__auto___27730){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27731 = arguments.length;
var i__19126__auto___27732 = (0);
while(true){
if((i__19126__auto___27732 < len__19125__auto___27731)){
args__19135__auto__.push((arguments[i__19126__auto___27732]));

var G__27733 = (i__19126__auto___27732 + (1));
i__19126__auto___27732 = G__27733;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27730))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27730){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27730),args);
});})(g__27639__auto___27730))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__27639__auto___27730){
return (function (seq27686){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27686));
});})(g__27639__auto___27730))
;


var g__27639__auto___27734 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__27639__auto___27734){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27735 = arguments.length;
var i__19126__auto___27736 = (0);
while(true){
if((i__19126__auto___27736 < len__19125__auto___27735)){
args__19135__auto__.push((arguments[i__19126__auto___27736]));

var G__27737 = (i__19126__auto___27736 + (1));
i__19126__auto___27736 = G__27737;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27734))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27734){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27734),args);
});})(g__27639__auto___27734))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__27639__auto___27734){
return (function (seq27687){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27687));
});})(g__27639__auto___27734))
;


var g__27639__auto___27738 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__27639__auto___27738){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27739 = arguments.length;
var i__19126__auto___27740 = (0);
while(true){
if((i__19126__auto___27740 < len__19125__auto___27739)){
args__19135__auto__.push((arguments[i__19126__auto___27740]));

var G__27741 = (i__19126__auto___27740 + (1));
i__19126__auto___27740 = G__27741;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27738))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27738){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27738),args);
});})(g__27639__auto___27738))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__27639__auto___27738){
return (function (seq27688){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27688));
});})(g__27639__auto___27738))
;


var g__27639__auto___27742 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__27639__auto___27742){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27743 = arguments.length;
var i__19126__auto___27744 = (0);
while(true){
if((i__19126__auto___27744 < len__19125__auto___27743)){
args__19135__auto__.push((arguments[i__19126__auto___27744]));

var G__27745 = (i__19126__auto___27744 + (1));
i__19126__auto___27744 = G__27745;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27742))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27742){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27742),args);
});})(g__27639__auto___27742))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__27639__auto___27742){
return (function (seq27689){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27689));
});})(g__27639__auto___27742))
;


var g__27639__auto___27746 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__27639__auto___27746){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27747 = arguments.length;
var i__19126__auto___27748 = (0);
while(true){
if((i__19126__auto___27748 < len__19125__auto___27747)){
args__19135__auto__.push((arguments[i__19126__auto___27748]));

var G__27749 = (i__19126__auto___27748 + (1));
i__19126__auto___27748 = G__27749;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27746))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27746){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27746),args);
});})(g__27639__auto___27746))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__27639__auto___27746){
return (function (seq27690){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27690));
});})(g__27639__auto___27746))
;


var g__27639__auto___27750 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__27639__auto___27750){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27751 = arguments.length;
var i__19126__auto___27752 = (0);
while(true){
if((i__19126__auto___27752 < len__19125__auto___27751)){
args__19135__auto__.push((arguments[i__19126__auto___27752]));

var G__27753 = (i__19126__auto___27752 + (1));
i__19126__auto___27752 = G__27753;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27750))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27750){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27750),args);
});})(g__27639__auto___27750))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__27639__auto___27750){
return (function (seq27691){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27691));
});})(g__27639__auto___27750))
;


var g__27639__auto___27754 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__27639__auto___27754){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27755 = arguments.length;
var i__19126__auto___27756 = (0);
while(true){
if((i__19126__auto___27756 < len__19125__auto___27755)){
args__19135__auto__.push((arguments[i__19126__auto___27756]));

var G__27757 = (i__19126__auto___27756 + (1));
i__19126__auto___27756 = G__27757;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27754))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27754){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27754),args);
});})(g__27639__auto___27754))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__27639__auto___27754){
return (function (seq27692){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27692));
});})(g__27639__auto___27754))
;


var g__27639__auto___27758 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__27639__auto___27758){
return (function cljs$spec$gen$alpha$return(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27759 = arguments.length;
var i__19126__auto___27760 = (0);
while(true){
if((i__19126__auto___27760 < len__19125__auto___27759)){
args__19135__auto__.push((arguments[i__19126__auto___27760]));

var G__27761 = (i__19126__auto___27760 + (1));
i__19126__auto___27760 = G__27761;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27758))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27758){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27758),args);
});})(g__27639__auto___27758))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__27639__auto___27758){
return (function (seq27693){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27693));
});})(g__27639__auto___27758))
;


var g__27639__auto___27762 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__27639__auto___27762){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27763 = arguments.length;
var i__19126__auto___27764 = (0);
while(true){
if((i__19126__auto___27764 < len__19125__auto___27763)){
args__19135__auto__.push((arguments[i__19126__auto___27764]));

var G__27765 = (i__19126__auto___27764 + (1));
i__19126__auto___27764 = G__27765;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27762))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27762){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27762),args);
});})(g__27639__auto___27762))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27639__auto___27762){
return (function (seq27694){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27694));
});})(g__27639__auto___27762))
;


var g__27639__auto___27766 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__27639__auto___27766){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27767 = arguments.length;
var i__19126__auto___27768 = (0);
while(true){
if((i__19126__auto___27768 < len__19125__auto___27767)){
args__19135__auto__.push((arguments[i__19126__auto___27768]));

var G__27769 = (i__19126__auto___27768 + (1));
i__19126__auto___27768 = G__27769;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27766))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27766){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27766),args);
});})(g__27639__auto___27766))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__27639__auto___27766){
return (function (seq27695){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27695));
});})(g__27639__auto___27766))
;


var g__27639__auto___27770 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__27639__auto___27770){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27771 = arguments.length;
var i__19126__auto___27772 = (0);
while(true){
if((i__19126__auto___27772 < len__19125__auto___27771)){
args__19135__auto__.push((arguments[i__19126__auto___27772]));

var G__27773 = (i__19126__auto___27772 + (1));
i__19126__auto___27772 = G__27773;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27770))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27770){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27770),args);
});})(g__27639__auto___27770))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__27639__auto___27770){
return (function (seq27696){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27696));
});})(g__27639__auto___27770))
;


var g__27639__auto___27774 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = ((function (g__27639__auto___27774){
return (function cljs$spec$gen$alpha$shuffle(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27775 = arguments.length;
var i__19126__auto___27776 = (0);
while(true){
if((i__19126__auto___27776 < len__19125__auto___27775)){
args__19135__auto__.push((arguments[i__19126__auto___27776]));

var G__27777 = (i__19126__auto___27776 + (1));
i__19126__auto___27776 = G__27777;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27639__auto___27774))
;

cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27639__auto___27774){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27639__auto___27774),args);
});})(g__27639__auto___27774))
;

cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = ((function (g__27639__auto___27774){
return (function (seq27697){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27697));
});})(g__27639__auto___27774))
;

var g__27652__auto___27799 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__27652__auto___27799){
return (function cljs$spec$gen$alpha$any(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27800 = arguments.length;
var i__19126__auto___27801 = (0);
while(true){
if((i__19126__auto___27801 < len__19125__auto___27800)){
args__19135__auto__.push((arguments[i__19126__auto___27801]));

var G__27802 = (i__19126__auto___27801 + (1));
i__19126__auto___27801 = G__27802;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27799))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27799){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27799);
});})(g__27652__auto___27799))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__27652__auto___27799){
return (function (seq27778){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27778));
});})(g__27652__auto___27799))
;


var g__27652__auto___27803 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__27652__auto___27803){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27804 = arguments.length;
var i__19126__auto___27805 = (0);
while(true){
if((i__19126__auto___27805 < len__19125__auto___27804)){
args__19135__auto__.push((arguments[i__19126__auto___27805]));

var G__27806 = (i__19126__auto___27805 + (1));
i__19126__auto___27805 = G__27806;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27803))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27803){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27803);
});})(g__27652__auto___27803))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__27652__auto___27803){
return (function (seq27779){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27779));
});})(g__27652__auto___27803))
;


var g__27652__auto___27807 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__27652__auto___27807){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27808 = arguments.length;
var i__19126__auto___27809 = (0);
while(true){
if((i__19126__auto___27809 < len__19125__auto___27808)){
args__19135__auto__.push((arguments[i__19126__auto___27809]));

var G__27810 = (i__19126__auto___27809 + (1));
i__19126__auto___27809 = G__27810;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27807))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27807){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27807);
});})(g__27652__auto___27807))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__27652__auto___27807){
return (function (seq27780){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27780));
});})(g__27652__auto___27807))
;


var g__27652__auto___27811 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__27652__auto___27811){
return (function cljs$spec$gen$alpha$char(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27812 = arguments.length;
var i__19126__auto___27813 = (0);
while(true){
if((i__19126__auto___27813 < len__19125__auto___27812)){
args__19135__auto__.push((arguments[i__19126__auto___27813]));

var G__27814 = (i__19126__auto___27813 + (1));
i__19126__auto___27813 = G__27814;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27811))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27811){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27811);
});})(g__27652__auto___27811))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__27652__auto___27811){
return (function (seq27781){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27781));
});})(g__27652__auto___27811))
;


var g__27652__auto___27815 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__27652__auto___27815){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27816 = arguments.length;
var i__19126__auto___27817 = (0);
while(true){
if((i__19126__auto___27817 < len__19125__auto___27816)){
args__19135__auto__.push((arguments[i__19126__auto___27817]));

var G__27818 = (i__19126__auto___27817 + (1));
i__19126__auto___27817 = G__27818;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27815))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27815){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27815);
});})(g__27652__auto___27815))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__27652__auto___27815){
return (function (seq27782){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27782));
});})(g__27652__auto___27815))
;


var g__27652__auto___27819 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__27652__auto___27819){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27820 = arguments.length;
var i__19126__auto___27821 = (0);
while(true){
if((i__19126__auto___27821 < len__19125__auto___27820)){
args__19135__auto__.push((arguments[i__19126__auto___27821]));

var G__27822 = (i__19126__auto___27821 + (1));
i__19126__auto___27821 = G__27822;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27819))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27819){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27819);
});})(g__27652__auto___27819))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__27652__auto___27819){
return (function (seq27783){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27783));
});})(g__27652__auto___27819))
;


var g__27652__auto___27823 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__27652__auto___27823){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27824 = arguments.length;
var i__19126__auto___27825 = (0);
while(true){
if((i__19126__auto___27825 < len__19125__auto___27824)){
args__19135__auto__.push((arguments[i__19126__auto___27825]));

var G__27826 = (i__19126__auto___27825 + (1));
i__19126__auto___27825 = G__27826;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27823))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27823){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27823);
});})(g__27652__auto___27823))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__27652__auto___27823){
return (function (seq27784){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27784));
});})(g__27652__auto___27823))
;


var g__27652__auto___27827 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__27652__auto___27827){
return (function cljs$spec$gen$alpha$double(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27828 = arguments.length;
var i__19126__auto___27829 = (0);
while(true){
if((i__19126__auto___27829 < len__19125__auto___27828)){
args__19135__auto__.push((arguments[i__19126__auto___27829]));

var G__27830 = (i__19126__auto___27829 + (1));
i__19126__auto___27829 = G__27830;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27827))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27827){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27827);
});})(g__27652__auto___27827))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__27652__auto___27827){
return (function (seq27785){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27785));
});})(g__27652__auto___27827))
;


var g__27652__auto___27831 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__27652__auto___27831){
return (function cljs$spec$gen$alpha$int(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27832 = arguments.length;
var i__19126__auto___27833 = (0);
while(true){
if((i__19126__auto___27833 < len__19125__auto___27832)){
args__19135__auto__.push((arguments[i__19126__auto___27833]));

var G__27834 = (i__19126__auto___27833 + (1));
i__19126__auto___27833 = G__27834;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27831))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27831){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27831);
});})(g__27652__auto___27831))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__27652__auto___27831){
return (function (seq27786){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27786));
});})(g__27652__auto___27831))
;


var g__27652__auto___27835 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__27652__auto___27835){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27836 = arguments.length;
var i__19126__auto___27837 = (0);
while(true){
if((i__19126__auto___27837 < len__19125__auto___27836)){
args__19135__auto__.push((arguments[i__19126__auto___27837]));

var G__27838 = (i__19126__auto___27837 + (1));
i__19126__auto___27837 = G__27838;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27835))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27835){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27835);
});})(g__27652__auto___27835))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__27652__auto___27835){
return (function (seq27787){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27787));
});})(g__27652__auto___27835))
;


var g__27652__auto___27839 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__27652__auto___27839){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27840 = arguments.length;
var i__19126__auto___27841 = (0);
while(true){
if((i__19126__auto___27841 < len__19125__auto___27840)){
args__19135__auto__.push((arguments[i__19126__auto___27841]));

var G__27842 = (i__19126__auto___27841 + (1));
i__19126__auto___27841 = G__27842;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27839))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27839){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27839);
});})(g__27652__auto___27839))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__27652__auto___27839){
return (function (seq27788){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27788));
});})(g__27652__auto___27839))
;


var g__27652__auto___27843 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__27652__auto___27843){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27844 = arguments.length;
var i__19126__auto___27845 = (0);
while(true){
if((i__19126__auto___27845 < len__19125__auto___27844)){
args__19135__auto__.push((arguments[i__19126__auto___27845]));

var G__27846 = (i__19126__auto___27845 + (1));
i__19126__auto___27845 = G__27846;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27843))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27843){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27843);
});})(g__27652__auto___27843))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__27652__auto___27843){
return (function (seq27789){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27789));
});})(g__27652__auto___27843))
;


var g__27652__auto___27847 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__27652__auto___27847){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27848 = arguments.length;
var i__19126__auto___27849 = (0);
while(true){
if((i__19126__auto___27849 < len__19125__auto___27848)){
args__19135__auto__.push((arguments[i__19126__auto___27849]));

var G__27850 = (i__19126__auto___27849 + (1));
i__19126__auto___27849 = G__27850;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27847))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27847){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27847);
});})(g__27652__auto___27847))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__27652__auto___27847){
return (function (seq27790){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27790));
});})(g__27652__auto___27847))
;


var g__27652__auto___27851 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__27652__auto___27851){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27852 = arguments.length;
var i__19126__auto___27853 = (0);
while(true){
if((i__19126__auto___27853 < len__19125__auto___27852)){
args__19135__auto__.push((arguments[i__19126__auto___27853]));

var G__27854 = (i__19126__auto___27853 + (1));
i__19126__auto___27853 = G__27854;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27851))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27851){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27851);
});})(g__27652__auto___27851))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__27652__auto___27851){
return (function (seq27791){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27791));
});})(g__27652__auto___27851))
;


var g__27652__auto___27855 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__27652__auto___27855){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27856 = arguments.length;
var i__19126__auto___27857 = (0);
while(true){
if((i__19126__auto___27857 < len__19125__auto___27856)){
args__19135__auto__.push((arguments[i__19126__auto___27857]));

var G__27858 = (i__19126__auto___27857 + (1));
i__19126__auto___27857 = G__27858;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27855))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27855){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27855);
});})(g__27652__auto___27855))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__27652__auto___27855){
return (function (seq27792){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27792));
});})(g__27652__auto___27855))
;


var g__27652__auto___27859 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__27652__auto___27859){
return (function cljs$spec$gen$alpha$string(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27860 = arguments.length;
var i__19126__auto___27861 = (0);
while(true){
if((i__19126__auto___27861 < len__19125__auto___27860)){
args__19135__auto__.push((arguments[i__19126__auto___27861]));

var G__27862 = (i__19126__auto___27861 + (1));
i__19126__auto___27861 = G__27862;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27859))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27859){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27859);
});})(g__27652__auto___27859))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__27652__auto___27859){
return (function (seq27793){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27793));
});})(g__27652__auto___27859))
;


var g__27652__auto___27863 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__27652__auto___27863){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27864 = arguments.length;
var i__19126__auto___27865 = (0);
while(true){
if((i__19126__auto___27865 < len__19125__auto___27864)){
args__19135__auto__.push((arguments[i__19126__auto___27865]));

var G__27866 = (i__19126__auto___27865 + (1));
i__19126__auto___27865 = G__27866;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27863))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27863){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27863);
});})(g__27652__auto___27863))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__27652__auto___27863){
return (function (seq27794){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27794));
});})(g__27652__auto___27863))
;


var g__27652__auto___27867 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__27652__auto___27867){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27868 = arguments.length;
var i__19126__auto___27869 = (0);
while(true){
if((i__19126__auto___27869 < len__19125__auto___27868)){
args__19135__auto__.push((arguments[i__19126__auto___27869]));

var G__27870 = (i__19126__auto___27869 + (1));
i__19126__auto___27869 = G__27870;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27867))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27867){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27867);
});})(g__27652__auto___27867))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__27652__auto___27867){
return (function (seq27795){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27795));
});})(g__27652__auto___27867))
;


var g__27652__auto___27871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__27652__auto___27871){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27872 = arguments.length;
var i__19126__auto___27873 = (0);
while(true){
if((i__19126__auto___27873 < len__19125__auto___27872)){
args__19135__auto__.push((arguments[i__19126__auto___27873]));

var G__27874 = (i__19126__auto___27873 + (1));
i__19126__auto___27873 = G__27874;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27871))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27871){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27871);
});})(g__27652__auto___27871))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__27652__auto___27871){
return (function (seq27796){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27796));
});})(g__27652__auto___27871))
;


var g__27652__auto___27875 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__27652__auto___27875){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27876 = arguments.length;
var i__19126__auto___27877 = (0);
while(true){
if((i__19126__auto___27877 < len__19125__auto___27876)){
args__19135__auto__.push((arguments[i__19126__auto___27877]));

var G__27878 = (i__19126__auto___27877 + (1));
i__19126__auto___27877 = G__27878;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27875))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27875){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27875);
});})(g__27652__auto___27875))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__27652__auto___27875){
return (function (seq27797){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27797));
});})(g__27652__auto___27875))
;


var g__27652__auto___27879 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__27652__auto___27879){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27880 = arguments.length;
var i__19126__auto___27881 = (0);
while(true){
if((i__19126__auto___27881 < len__19125__auto___27880)){
args__19135__auto__.push((arguments[i__19126__auto___27881]));

var G__27882 = (i__19126__auto___27881 + (1));
i__19126__auto___27881 = G__27882;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});})(g__27652__auto___27879))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27652__auto___27879){
return (function (args){
return cljs.core.deref.call(null,g__27652__auto___27879);
});})(g__27652__auto___27879))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__27652__auto___27879){
return (function (seq27798){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27798));
});})(g__27652__auto___27879))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__19135__auto__ = [];
var len__19125__auto___27885 = arguments.length;
var i__19126__auto___27886 = (0);
while(true){
if((i__19126__auto___27886 < len__19125__auto___27885)){
args__19135__auto__.push((arguments[i__19126__auto___27886]));

var G__27887 = (i__19126__auto___27886 + (1));
i__19126__auto___27886 = G__27887;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__27883_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__27883_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq27884){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27884));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__27889_SHARP_){
return (new Date(p1__27889_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__27888_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27888_SHARP_),".com"].join('')));
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
