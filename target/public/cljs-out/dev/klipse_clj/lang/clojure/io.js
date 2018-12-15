// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('klipse_clj.lang.clojure.io');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('clojure.string');
goog.require('klipse_clj.repl');
goog.require('clojure.walk');
goog.require('cljs_http.client');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_ = false;
klipse_clj.lang.clojure.io._STAR_cache_buster_QMARK__STAR_ = false;
klipse_clj.lang.clojure.io.edn = (function klipse_clj$lang$clojure$io$edn(json){
return cljs_http.util.transit_decode.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,json)),new cljs.core.Keyword(null,"json","json",1279968570),null);
});
klipse_clj.lang.clojure.io.macro_suffixes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null);
klipse_clj.lang.clojure.io.cljs_suffixes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc"], null);
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.lang !== 'undefined') && (typeof klipse_clj.lang.clojure !== 'undefined') && (typeof klipse_clj.lang.clojure.io !== 'undefined') && (typeof klipse_clj.lang.clojure.io.load_ns !== 'undefined')){
} else {
/**
 * 
 *   Each runtime environment provides a different way to load a library.
 *   Received two arguments - a map and a callback function:
 *   The map will have the following keys:
 * 
 *  :name   - the name of the library (a symbol)
 *  :macros - modifier signaling a macros namespace load
 *  :path   - munged relative library path (a string)
 * 
 *  It is up to the implementor to correctly resolve the corresponding .cljs,
 *  .cljc, or .js resource (the order must be respected).
 *  If :macros is true, resolution should only consider .clj or .cljc resources (the order must be respected).
 *   Upon resolution the callback should be invoked with a map containing the following keys:
 * 
 *  :lang       - the language, :clj or :js
 *  :source     - the source of the library (a string)
 *  :file       - optional, the file path, it will be added to AST's :file keyword (but not in :meta)
 *  :cache      - optional, if a :clj namespace has been precompiled to :js, can give an analysis cache for faster loads.
 *  :source-map - optional, if a :clj namespace has been precompiled to :js, can give a V3 source map JSON
 * 
 *  If the resource could not be resolved, the callback should be invoked with
 *  nil.
 */
klipse_clj.lang.clojure.io.load_ns = (function (){var method_table__21319__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21321__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21322__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21323__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21324__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),((function (method_table__21319__auto__,prefer_table__21321__auto__,method_cache__21322__auto__,cached_hierarchy__21323__auto__,hierarchy__21324__auto__){
return (function (_,p__27359,src_cb){
var map__27360 = p__27359;
var map__27360__$1 = (((((!((map__27360 == null))))?(((((map__27360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27360):map__27360);
var name = cljs.core.get.call(null,map__27360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__27360__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__27360__$1,new cljs.core.Keyword(null,"path","path",-188191168));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,macros,path], null);

if(cljs.core.truth_(macros)){
return new cljs.core.Keyword(null,"macro","macro",-867863404);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\..*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return new cljs.core.Keyword(null,"goog","goog",-1711135452);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\.gist-.*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return new cljs.core.Keyword(null,"gist","gist",96143031);
} else {
return new cljs.core.Keyword(null,"cljs","cljs",1492417629);

}
}
}
});})(method_table__21319__auto__,prefer_table__21321__auto__,method_cache__21322__auto__,cached_hierarchy__21323__auto__,hierarchy__21324__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21324__auto__,method_table__21319__auto__,prefer_table__21321__auto__,method_cache__21322__auto__,cached_hierarchy__21323__auto__));
})();
}
klipse_clj.lang.clojure.io.skip_ns_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"cljs.analyzer.macros","cljs.analyzer.macros",298494182,null),null,new cljs.core.Symbol(null,"cljs.env.macros","cljs.env.macros",1542748640,null),null,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),null,new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null),null,new cljs.core.Symbol(null,"cljs.compiler.macros","cljs.compiler.macros",750996207,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.js","cljs.js",474485962,null),null], null), null);
klipse_clj.lang.clojure.io.the_ns_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null),"https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs/",new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),"https://raw.githubusercontent.com/viebel/clojure/master/src/clj/"], null);
klipse_clj.lang.clojure.io.skip_ns_cljs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"cljs.source-map","cljs.source-map",2108014936,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.tools.reader","cljs.tools.reader",-831293977,null),null,new cljs.core.Symbol(null,"cljs.tools.reader.reader-types","cljs.tools.reader.reader-types",-346100821,null),null,new cljs.core.Symbol(null,"cljs.env","cljs.env",-1810013139,null),null], null), null);
klipse_clj.lang.clojure.io.filename_of = (function klipse_clj$lang$clojure$io$filename_of(s){
if(klipse_clj.lang.clojure.io._STAR_cache_buster_QMARK__STAR_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join('');
} else {
return s;
}
});
/**
 * Tries to load one namespace from filenames.
 *   Will call the src-cb upon first success.
 *   If can-recover? is false, will call src-cb with nil if it cannot load any namespace.
 *   Returns :success if a nampespace was loaded otherwise, returns nil.
 *   
 */
klipse_clj.lang.clojure.io.try_to_load_ns = (function klipse_clj$lang$clojure$io$try_to_load_ns(var_args){
var args__21785__auto__ = [];
var len__21766__auto___27476 = arguments.length;
var i__21767__auto___27477 = (0);
while(true){
if((i__21767__auto___27477 < len__21766__auto___27476)){
args__21785__auto__.push((arguments[i__21767__auto___27477]));

var G__27478 = (i__21767__auto___27477 + (1));
i__21767__auto___27477 = G__27478;
continue;
} else {
}
break;
}

var argseq__21786__auto__ = ((((4) < args__21785__auto__.length))?(new cljs.core.IndexedSeq(args__21785__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21786__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__27367){
var map__27368 = p__27367;
var map__27368__$1 = (((((!((map__27368 == null))))?(((((map__27368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27368):map__27368);
var transform = cljs.core.get.call(null,map__27368__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__27368__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__26429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26429__auto__,map__27368,map__27368__$1,transform,can_recover_QMARK_){
return (function (){
var f__26430__auto__ = (function (){var switch__26406__auto__ = ((function (c__26429__auto__,map__27368,map__27368__$1,transform,can_recover_QMARK_){
return (function (state_27433){
var state_val_27434 = (state_27433[(1)]);
if((state_val_27434 === (7))){
var inst_27382 = (state_27433[(7)]);
var inst_27382__$1 = (state_27433[(2)]);
var inst_27384 = (inst_27382__$1 == null);
var inst_27385 = cljs.core.not.call(null,inst_27384);
var state_27433__$1 = (function (){var statearr_27435 = state_27433;
(statearr_27435[(7)] = inst_27382__$1);

return statearr_27435;
})();
if(inst_27385){
var statearr_27436_27479 = state_27433__$1;
(statearr_27436_27479[(1)] = (8));

} else {
var statearr_27437_27480 = state_27433__$1;
(statearr_27437_27480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (20))){
var state_27433__$1 = state_27433;
var statearr_27438_27481 = state_27433__$1;
(statearr_27438_27481[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_27438_27481[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (1))){
var inst_27370 = filenames;
var state_27433__$1 = (function (){var statearr_27439 = state_27433;
(statearr_27439[(8)] = inst_27370);

return statearr_27439;
})();
var statearr_27440_27482 = state_27433__$1;
(statearr_27440_27482[(2)] = null);

(statearr_27440_27482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (24))){
var inst_27427 = src_cb.call(null,null);
var state_27433__$1 = state_27433;
var statearr_27441_27483 = state_27433__$1;
(statearr_27441_27483[(2)] = inst_27427);

(statearr_27441_27483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (4))){
var inst_27375 = (state_27433[(9)]);
var inst_27370 = (state_27433[(8)]);
var inst_27375__$1 = cljs.core.first.call(null,inst_27370);
var inst_27376 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27375__$1);
var inst_27377 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27378 = [false];
var inst_27379 = cljs.core.PersistentHashMap.fromArrays(inst_27377,inst_27378);
var inst_27380 = cljs_http.client.get.call(null,inst_27376,inst_27379);
var state_27433__$1 = (function (){var statearr_27442 = state_27433;
(statearr_27442[(9)] = inst_27375__$1);

return statearr_27442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27433__$1,(7),inst_27380);
} else {
if((state_val_27434 === (15))){
var inst_27382 = (state_27433[(7)]);
var state_27433__$1 = state_27433;
var statearr_27443_27484 = state_27433__$1;
(statearr_27443_27484[(2)] = inst_27382);

(statearr_27443_27484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (21))){
var state_27433__$1 = state_27433;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_27444_27485 = state_27433__$1;
(statearr_27444_27485[(1)] = (23));

} else {
var statearr_27445_27486 = state_27433__$1;
(statearr_27445_27486[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (13))){
var inst_27395 = (state_27433[(2)]);
var state_27433__$1 = state_27433;
var statearr_27446_27487 = state_27433__$1;
(statearr_27446_27487[(2)] = inst_27395);

(statearr_27446_27487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (22))){
var inst_27431 = (state_27433[(2)]);
var state_27433__$1 = state_27433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27433__$1,inst_27431);
} else {
if((state_val_27434 === (6))){
var inst_27420 = (state_27433[(2)]);
var state_27433__$1 = state_27433;
var statearr_27447_27488 = state_27433__$1;
(statearr_27447_27488[(2)] = inst_27420);

(statearr_27447_27488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (25))){
var inst_27429 = (state_27433[(2)]);
var state_27433__$1 = (function (){var statearr_27448 = state_27433;
(statearr_27448[(10)] = inst_27429);

return statearr_27448;
})();
var statearr_27449_27489 = state_27433__$1;
(statearr_27449_27489[(2)] = false);

(statearr_27449_27489[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (17))){
var inst_27375 = (state_27433[(9)]);
var inst_27405 = (state_27433[(11)]);
var inst_27408 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_27409 = transform.call(null,inst_27405);
var inst_27410 = [lang,inst_27409,inst_27375];
var inst_27411 = cljs.core.PersistentHashMap.fromArrays(inst_27408,inst_27410);
var inst_27412 = src_cb.call(null,inst_27411);
var state_27433__$1 = (function (){var statearr_27450 = state_27433;
(statearr_27450[(12)] = inst_27412);

return statearr_27450;
})();
var statearr_27451_27490 = state_27433__$1;
(statearr_27451_27490[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_27451_27490[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (3))){
var inst_27422 = (state_27433[(2)]);
var state_27433__$1 = state_27433;
if(cljs.core.truth_(inst_27422)){
var statearr_27452_27491 = state_27433__$1;
(statearr_27452_27491[(1)] = (20));

} else {
var statearr_27453_27492 = state_27433__$1;
(statearr_27453_27492[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (12))){
var state_27433__$1 = state_27433;
var statearr_27454_27493 = state_27433__$1;
(statearr_27454_27493[(2)] = false);

(statearr_27454_27493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (2))){
var inst_27370 = (state_27433[(8)]);
var inst_27372 = cljs.core.seq.call(null,inst_27370);
var state_27433__$1 = state_27433;
if(inst_27372){
var statearr_27455_27494 = state_27433__$1;
(statearr_27455_27494[(1)] = (4));

} else {
var statearr_27456_27495 = state_27433__$1;
(statearr_27456_27495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (23))){
var state_27433__$1 = state_27433;
var statearr_27457_27496 = state_27433__$1;
(statearr_27457_27496[(2)] = null);

(statearr_27457_27496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (19))){
var inst_27417 = (state_27433[(2)]);
var state_27433__$1 = state_27433;
var statearr_27458_27497 = state_27433__$1;
(statearr_27458_27497[(2)] = inst_27417);

(statearr_27458_27497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (11))){
var state_27433__$1 = state_27433;
var statearr_27459_27498 = state_27433__$1;
(statearr_27459_27498[(2)] = true);

(statearr_27459_27498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (9))){
var state_27433__$1 = state_27433;
var statearr_27460_27499 = state_27433__$1;
(statearr_27460_27499[(2)] = false);

(statearr_27460_27499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (5))){
var state_27433__$1 = state_27433;
var statearr_27461_27500 = state_27433__$1;
(statearr_27461_27500[(2)] = null);

(statearr_27461_27500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (14))){
var inst_27382 = (state_27433[(7)]);
var inst_27400 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27382);
var state_27433__$1 = state_27433;
var statearr_27462_27501 = state_27433__$1;
(statearr_27462_27501[(2)] = inst_27400);

(statearr_27462_27501[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (16))){
var inst_27403 = (state_27433[(2)]);
var inst_27404 = cljs.core.get.call(null,inst_27403,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_27405 = cljs.core.get.call(null,inst_27403,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_27406 = cljs.core._EQ_.call(null,(200),inst_27404);
var state_27433__$1 = (function (){var statearr_27463 = state_27433;
(statearr_27463[(11)] = inst_27405);

return statearr_27463;
})();
if(inst_27406){
var statearr_27464_27502 = state_27433__$1;
(statearr_27464_27502[(1)] = (17));

} else {
var statearr_27465_27503 = state_27433__$1;
(statearr_27465_27503[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (10))){
var inst_27398 = (state_27433[(2)]);
var state_27433__$1 = state_27433;
if(cljs.core.truth_(inst_27398)){
var statearr_27466_27504 = state_27433__$1;
(statearr_27466_27504[(1)] = (14));

} else {
var statearr_27467_27505 = state_27433__$1;
(statearr_27467_27505[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (18))){
var inst_27370 = (state_27433[(8)]);
var inst_27414 = cljs.core.rest.call(null,inst_27370);
var inst_27370__$1 = inst_27414;
var state_27433__$1 = (function (){var statearr_27468 = state_27433;
(statearr_27468[(8)] = inst_27370__$1);

return statearr_27468;
})();
var statearr_27469_27506 = state_27433__$1;
(statearr_27469_27506[(2)] = null);

(statearr_27469_27506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (8))){
var inst_27382 = (state_27433[(7)]);
var inst_27387 = inst_27382.cljs$lang$protocol_mask$partition0$;
var inst_27388 = (inst_27387 & (64));
var inst_27389 = inst_27382.cljs$core$ISeq$;
var inst_27390 = (cljs.core.PROTOCOL_SENTINEL === inst_27389);
var inst_27391 = ((inst_27388) || (inst_27390));
var state_27433__$1 = state_27433;
if(cljs.core.truth_(inst_27391)){
var statearr_27470_27507 = state_27433__$1;
(statearr_27470_27507[(1)] = (11));

} else {
var statearr_27471_27508 = state_27433__$1;
(statearr_27471_27508[(1)] = (12));

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
});})(c__26429__auto__,map__27368,map__27368__$1,transform,can_recover_QMARK_))
;
return ((function (switch__26406__auto__,c__26429__auto__,map__27368,map__27368__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__26407__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__26407__auto____0 = (function (){
var statearr_27472 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27472[(0)] = klipse_clj$lang$clojure$io$state_machine__26407__auto__);

(statearr_27472[(1)] = (1));

return statearr_27472;
});
var klipse_clj$lang$clojure$io$state_machine__26407__auto____1 = (function (state_27433){
while(true){
var ret_value__26408__auto__ = (function (){try{while(true){
var result__26409__auto__ = switch__26406__auto__.call(null,state_27433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26409__auto__;
}
break;
}
}catch (e27473){if((e27473 instanceof Object)){
var ex__26410__auto__ = e27473;
var statearr_27474_27509 = state_27433;
(statearr_27474_27509[(5)] = ex__26410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27510 = state_27433;
state_27433 = G__27510;
continue;
} else {
return ret_value__26408__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__26407__auto__ = function(state_27433){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__26407__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__26407__auto____1.call(this,state_27433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__26407__auto____0;
klipse_clj$lang$clojure$io$state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__26407__auto____1;
return klipse_clj$lang$clojure$io$state_machine__26407__auto__;
})()
;})(switch__26406__auto__,c__26429__auto__,map__27368,map__27368__$1,transform,can_recover_QMARK_))
})();
var state__26431__auto__ = (function (){var statearr_27475 = f__26430__auto__.call(null);
(statearr_27475[(6)] = c__26429__auto__);

return statearr_27475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26431__auto__);
});})(c__26429__auto__,map__27368,map__27368__$1,transform,can_recover_QMARK_))
);

return c__26429__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq27362){
var G__27363 = cljs.core.first.call(null,seq27362);
var seq27362__$1 = cljs.core.next.call(null,seq27362);
var G__27364 = cljs.core.first.call(null,seq27362__$1);
var seq27362__$2 = cljs.core.next.call(null,seq27362__$1);
var G__27365 = cljs.core.first.call(null,seq27362__$2);
var seq27362__$3 = cljs.core.next.call(null,seq27362__$2);
var G__27366 = cljs.core.first.call(null,seq27362__$3);
var seq27362__$4 = cljs.core.next.call(null,seq27362__$3);
var self__21742__auto__ = this;
return self__21742__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27363,G__27364,G__27365,G__27366,seq27362__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__20981__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__27511(s__27512){
return (new cljs.core.LazySeq(null,(function (){
var s__27512__$1 = s__27512;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27512__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var lib = cljs.core.first.call(null,xs__6277__auto__);
var iterys__20976__auto__ = ((function (s__27512__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__27511_$_iter__27513(s__27514){
return (new cljs.core.LazySeq(null,((function (s__27512__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__27514__$1 = s__27514;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__27514__$1);
if(temp__5720__auto____$1){
var s__27514__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27514__$2)){
var c__20979__auto__ = cljs.core.chunk_first.call(null,s__27514__$2);
var size__20980__auto__ = cljs.core.count.call(null,c__20979__auto__);
var b__27516 = cljs.core.chunk_buffer.call(null,size__20980__auto__);
if((function (){var i__27515 = (0);
while(true){
if((i__27515 < size__20980__auto__)){
var suffix = cljs.core._nth.call(null,c__20979__auto__,i__27515);
cljs.core.chunk_append.call(null,b__27516,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__27517 = (i__27515 + (1));
i__27515 = G__27517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27516),klipse_clj$lang$clojure$io$external_libs_files_$_iter__27511_$_iter__27513.call(null,cljs.core.chunk_rest.call(null,s__27514__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27516),null);
}
} else {
var suffix = cljs.core.first.call(null,s__27514__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__27511_$_iter__27513.call(null,cljs.core.rest.call(null,s__27514__$2)));
}
} else {
return null;
}
break;
}
});})(s__27512__$1,lib,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__27512__$1,lib,xs__6277__auto__,temp__5720__auto__))
;
var fs__20977__auto__ = cljs.core.seq.call(null,iterys__20976__auto__.call(null,suffixes));
if(fs__20977__auto__){
return cljs.core.concat.call(null,fs__20977__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__27511.call(null,cljs.core.rest.call(null,s__27512__$1)));
} else {
var G__27518 = cljs.core.rest.call(null,s__27512__$1);
s__27512__$1 = G__27518;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20981__auto__.call(null,external_libs);
});
klipse_clj.lang.clojure.io.name__GT_cached_resource = (function klipse_clj$lang$clojure$io$name__GT_cached_resource(name){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)),/\./,"_SLASH_");
});
klipse_clj.lang.clojure.io.cached_ns_root = (function klipse_clj$lang$clojure$io$cached_ns_root(){
return new cljs.core.Keyword(null,"cached_ns_root","cached_ns_root",-1077014575).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,"https://viebel.github.io/cljs-analysis-cache/cache/");
});
klipse_clj.lang.clojure.io.load_ns_from_cache = (function klipse_clj$lang$clojure$io$load_ns_from_cache(name,src_cb,macro_QMARK_){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-cache:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"macro: ",macro_QMARK_);
} else {
}

var c__26429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26429__auto__){
return (function (){
var f__26430__auto__ = (function (){var switch__26406__auto__ = ((function (c__26429__auto__){
return (function (state_27563){
var state_val_27564 = (state_27563[(1)]);
if((state_val_27564 === (7))){
var inst_27542 = (state_27563[(7)]);
var inst_27535 = (state_27563[(8)]);
var inst_27551 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_27552 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27542);
var inst_27553 = klipse_clj.lang.clojure.io.edn.call(null,inst_27552);
var inst_27554 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27535);
var inst_27555 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_27553,inst_27554];
var inst_27556 = cljs.core.PersistentHashMap.fromArrays(inst_27551,inst_27555);
var inst_27557 = src_cb.call(null,inst_27556);
var state_27563__$1 = state_27563;
var statearr_27565_27581 = state_27563__$1;
(statearr_27565_27581[(2)] = inst_27557);

(statearr_27565_27581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (1))){
var inst_27520 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_27563__$1 = (function (){var statearr_27566 = state_27563;
(statearr_27566[(9)] = inst_27520);

return statearr_27566;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_27567_27582 = state_27563__$1;
(statearr_27567_27582[(1)] = (2));

} else {
var statearr_27568_27583 = state_27563__$1;
(statearr_27568_27583[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (4))){
var inst_27520 = (state_27563[(9)]);
var inst_27527 = (state_27563[(10)]);
var inst_27526 = (state_27563[(11)]);
var inst_27524 = (state_27563[(12)]);
var inst_27524__$1 = (state_27563[(2)]);
var inst_27525 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_27526__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27525),"/"].join('');
var inst_27527__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27526__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27520),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27524__$1),".js"].join('');
var inst_27528 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27526__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27520),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27524__$1),".cache.json"].join('');
var inst_27529 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27527__$1);
var inst_27530 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27531 = [false];
var inst_27532 = cljs.core.PersistentHashMap.fromArrays(inst_27530,inst_27531);
var inst_27533 = cljs_http.client.get.call(null,inst_27529,inst_27532);
var state_27563__$1 = (function (){var statearr_27569 = state_27563;
(statearr_27569[(10)] = inst_27527__$1);

(statearr_27569[(11)] = inst_27526__$1);

(statearr_27569[(12)] = inst_27524__$1);

(statearr_27569[(13)] = inst_27528);

return statearr_27569;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27563__$1,(5),inst_27533);
} else {
if((state_val_27564 === (6))){
var inst_27542 = (state_27563[(7)]);
var inst_27520 = (state_27563[(9)]);
var inst_27527 = (state_27563[(10)]);
var inst_27526 = (state_27563[(11)]);
var inst_27535 = (state_27563[(8)]);
var inst_27524 = (state_27563[(12)]);
var inst_27528 = (state_27563[(13)]);
var inst_27542__$1 = (state_27563[(2)]);
var inst_27543 = (function (){var nn = inst_27520;
var suffix = inst_27524;
var root = inst_27526;
var src_filename = inst_27527;
var cache_filename = inst_27528;
var src = inst_27535;
var cache = inst_27542__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_27542,inst_27520,inst_27527,inst_27526,inst_27535,inst_27524,inst_27528,inst_27542__$1,state_val_27564,c__26429__auto__){
return (function (p1__27519_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__27519_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_27542,inst_27520,inst_27527,inst_27526,inst_27535,inst_27524,inst_27528,inst_27542__$1,state_val_27564,c__26429__auto__))
})();
var inst_27544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27545 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27542__$1);
var inst_27546 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27535);
var inst_27547 = [inst_27545,inst_27546];
var inst_27548 = (new cljs.core.PersistentVector(null,2,(5),inst_27544,inst_27547,null));
var inst_27549 = cljs.core.every_QMARK_.call(null,inst_27543,inst_27548);
var state_27563__$1 = (function (){var statearr_27570 = state_27563;
(statearr_27570[(7)] = inst_27542__$1);

return statearr_27570;
})();
if(inst_27549){
var statearr_27571_27584 = state_27563__$1;
(statearr_27571_27584[(1)] = (7));

} else {
var statearr_27572_27585 = state_27563__$1;
(statearr_27572_27585[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (3))){
var state_27563__$1 = state_27563;
var statearr_27573_27586 = state_27563__$1;
(statearr_27573_27586[(2)] = "");

(statearr_27573_27586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (2))){
var state_27563__$1 = state_27563;
var statearr_27574_27587 = state_27563__$1;
(statearr_27574_27587[(2)] = "$macros");

(statearr_27574_27587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27564 === (9))){
var inst_27561 = (state_27563[(2)]);
var state_27563__$1 = state_27563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27563__$1,inst_27561);
} else {
if((state_val_27564 === (5))){
var inst_27528 = (state_27563[(13)]);
var inst_27535 = (state_27563[(2)]);
var inst_27536 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27528);
var inst_27537 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27538 = [false];
var inst_27539 = cljs.core.PersistentHashMap.fromArrays(inst_27537,inst_27538);
var inst_27540 = cljs_http.client.get.call(null,inst_27536,inst_27539);
var state_27563__$1 = (function (){var statearr_27575 = state_27563;
(statearr_27575[(8)] = inst_27535);

return statearr_27575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27563__$1,(6),inst_27540);
} else {
if((state_val_27564 === (8))){
var inst_27559 = src_cb.call(null,null);
var state_27563__$1 = state_27563;
var statearr_27576_27588 = state_27563__$1;
(statearr_27576_27588[(2)] = inst_27559);

(statearr_27576_27588[(1)] = (9));


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
});})(c__26429__auto__))
;
return ((function (switch__26406__auto__,c__26429__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto____0 = (function (){
var statearr_27577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27577[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto__);

(statearr_27577[(1)] = (1));

return statearr_27577;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto____1 = (function (state_27563){
while(true){
var ret_value__26408__auto__ = (function (){try{while(true){
var result__26409__auto__ = switch__26406__auto__.call(null,state_27563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26409__auto__;
}
break;
}
}catch (e27578){if((e27578 instanceof Object)){
var ex__26410__auto__ = e27578;
var statearr_27579_27589 = state_27563;
(statearr_27579_27589[(5)] = ex__26410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27590 = state_27563;
state_27563 = G__27590;
continue;
} else {
return ret_value__26408__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto__ = function(state_27563){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto____1.call(this,state_27563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26407__auto__;
})()
;})(switch__26406__auto__,c__26429__auto__))
})();
var state__26431__auto__ = (function (){var statearr_27580 = f__26430__auto__.call(null);
(statearr_27580[(6)] = c__26429__auto__);

return statearr_27580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26431__auto__);
});})(c__26429__auto__))
);

return c__26429__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__26429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26429__auto__){
return (function (){
var f__26430__auto__ = (function (){var switch__26406__auto__ = ((function (c__26429__auto__){
return (function (state_27630){
var state_val_27631 = (state_27630[(1)]);
if((state_val_27631 === (7))){
var state_27630__$1 = state_27630;
var statearr_27632_27654 = state_27630__$1;
(statearr_27632_27654[(2)] = false);

(statearr_27632_27654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (1))){
var inst_27592 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27593 = [false];
var inst_27594 = cljs.core.PersistentHashMap.fromArrays(inst_27592,inst_27593);
var inst_27595 = cljs_http.client.get.call(null,filename,inst_27594);
var state_27630__$1 = state_27630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27630__$1,(2),inst_27595);
} else {
if((state_val_27631 === (4))){
var state_27630__$1 = state_27630;
var statearr_27633_27655 = state_27630__$1;
(statearr_27633_27655[(2)] = false);

(statearr_27633_27655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (13))){
var inst_27626 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_27630__$1 = state_27630;
var statearr_27634_27656 = state_27630__$1;
(statearr_27634_27656[(2)] = inst_27626);

(statearr_27634_27656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (6))){
var state_27630__$1 = state_27630;
var statearr_27635_27657 = state_27630__$1;
(statearr_27635_27657[(2)] = true);

(statearr_27635_27657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (3))){
var inst_27597 = (state_27630[(7)]);
var inst_27602 = inst_27597.cljs$lang$protocol_mask$partition0$;
var inst_27603 = (inst_27602 & (64));
var inst_27604 = inst_27597.cljs$core$ISeq$;
var inst_27605 = (cljs.core.PROTOCOL_SENTINEL === inst_27604);
var inst_27606 = ((inst_27603) || (inst_27605));
var state_27630__$1 = state_27630;
if(cljs.core.truth_(inst_27606)){
var statearr_27636_27658 = state_27630__$1;
(statearr_27636_27658[(1)] = (6));

} else {
var statearr_27637_27659 = state_27630__$1;
(statearr_27637_27659[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (12))){
var inst_27619 = (state_27630[(8)]);
var inst_27623 = klipse_clj.lang.clojure.io.edn.call(null,inst_27619);
var inst_27624 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_27623);
var state_27630__$1 = state_27630;
var statearr_27638_27660 = state_27630__$1;
(statearr_27638_27660[(2)] = inst_27624);

(statearr_27638_27660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (2))){
var inst_27597 = (state_27630[(7)]);
var inst_27597__$1 = (state_27630[(2)]);
var inst_27599 = (inst_27597__$1 == null);
var inst_27600 = cljs.core.not.call(null,inst_27599);
var state_27630__$1 = (function (){var statearr_27639 = state_27630;
(statearr_27639[(7)] = inst_27597__$1);

return statearr_27639;
})();
if(inst_27600){
var statearr_27640_27661 = state_27630__$1;
(statearr_27640_27661[(1)] = (3));

} else {
var statearr_27641_27662 = state_27630__$1;
(statearr_27641_27662[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (11))){
var inst_27618 = (state_27630[(2)]);
var inst_27619 = cljs.core.get.call(null,inst_27618,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_27620 = cljs.core.get.call(null,inst_27618,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_27621 = cljs.core._EQ_.call(null,(200),inst_27620);
var state_27630__$1 = (function (){var statearr_27642 = state_27630;
(statearr_27642[(8)] = inst_27619);

return statearr_27642;
})();
if(inst_27621){
var statearr_27643_27663 = state_27630__$1;
(statearr_27643_27663[(1)] = (12));

} else {
var statearr_27644_27664 = state_27630__$1;
(statearr_27644_27664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (9))){
var inst_27597 = (state_27630[(7)]);
var inst_27615 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27597);
var state_27630__$1 = state_27630;
var statearr_27645_27665 = state_27630__$1;
(statearr_27645_27665[(2)] = inst_27615);

(statearr_27645_27665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (5))){
var inst_27613 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
if(cljs.core.truth_(inst_27613)){
var statearr_27646_27666 = state_27630__$1;
(statearr_27646_27666[(1)] = (9));

} else {
var statearr_27647_27667 = state_27630__$1;
(statearr_27647_27667[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (14))){
var inst_27628 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27630__$1,inst_27628);
} else {
if((state_val_27631 === (10))){
var inst_27597 = (state_27630[(7)]);
var state_27630__$1 = state_27630;
var statearr_27648_27668 = state_27630__$1;
(statearr_27648_27668[(2)] = inst_27597);

(statearr_27648_27668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (8))){
var inst_27610 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
var statearr_27649_27669 = state_27630__$1;
(statearr_27649_27669[(2)] = inst_27610);

(statearr_27649_27669[(1)] = (5));


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
});})(c__26429__auto__))
;
return ((function (switch__26406__auto__,c__26429__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto____0 = (function (){
var statearr_27650 = [null,null,null,null,null,null,null,null,null];
(statearr_27650[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto__);

(statearr_27650[(1)] = (1));

return statearr_27650;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto____1 = (function (state_27630){
while(true){
var ret_value__26408__auto__ = (function (){try{while(true){
var result__26409__auto__ = switch__26406__auto__.call(null,state_27630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26409__auto__;
}
break;
}
}catch (e27651){if((e27651 instanceof Object)){
var ex__26410__auto__ = e27651;
var statearr_27652_27670 = state_27630;
(statearr_27652_27670[(5)] = ex__26410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27671 = state_27630;
state_27630 = G__27671;
continue;
} else {
return ret_value__26408__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto__ = function(state_27630){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto____1.call(this,state_27630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26407__auto__;
})()
;})(switch__26406__auto__,c__26429__auto__))
})();
var state__26431__auto__ = (function (){var statearr_27653 = f__26430__auto__.call(null);
(statearr_27653[(6)] = c__26429__auto__);

return statearr_27653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26431__auto__);
});})(c__26429__auto__))
);

return c__26429__auto__;
});
klipse_clj.lang.clojure.io.cached_macro_ns_regexp = (function klipse_clj$lang$clojure$io$cached_macro_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_macro_ns_regexp","clojure_cached_macro_ns_regexp",-771780299).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/cljs.core.specs.alpha|klipse-clj\..*|klipse-clj\.repl|cljs\.reader|cljs\.core\.[async|match].*|clojure\.math\.macros|gadjett\.core|cljs\.test|clojure.test.check.*|reagent\..*|om\..*|cljs\.spec.*|cljs-time\..*|re-frame\..*|net\.cgrand\.macrovich|reagent-forms\..*|ajax\.macros|poppea|expound\..*/);
});
klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_macro_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_macro_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
klipse_clj.lang.clojure.io.cached_ns_regexp = (function klipse_clj$lang$clojure$io$cached_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_ns_regexp","clojure_cached_ns_regexp",-1735711110).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/cljs.core.specs.alpha|cljs\.stacktrace|cljs\.core\.[async|match].*|cljs\.spec.*|clojure.math\.combinatorics|clojure.test.check.*|reagent\..*|om\..*|clojure\.data|cljs-time\..*|re-frame\..*|day8\.re-frame\..*|reagent-forms\..*|re-frisk\..*|re-frisk-shell\..*|datafrisk\..*|ajax\..*|cljs\.tools\.reader\..*|expound\..*/);
});
klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_cljs_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__27672,src_cb_original){
var map__27673 = p__27672;
var map__27673__$1 = (((((!((map__27673 == null))))?(((((map__27673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27673):map__27673);
var name = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__27673,map__27673__$1,name,path){
return (function() { 
var G__27675__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__27675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27676__i = 0, G__27676__a = new Array(arguments.length -  0);
while (G__27676__i < G__27676__a.length) {G__27676__a[G__27676__i] = arguments[G__27676__i + 0]; ++G__27676__i;}
  args = new cljs.core.IndexedSeq(G__27676__a,0,null);
} 
return G__27675__delegate.call(this,args);};
G__27675.cljs$lang$maxFixedArity = 0;
G__27675.cljs$lang$applyTo = (function (arglist__27677){
var args = cljs.core.seq(arglist__27677);
return G__27675__delegate(args);
});
G__27675.cljs$core$IFn$_invoke$arity$variadic = G__27675__delegate;
return G__27675;
})()
;})(map__27673,map__27673__$1,name,path))
);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.skip_ns_macros.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro skipping:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro cached:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return klipse_clj.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,true);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.the_ns_map.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro known:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.the_ns_map.call(null,name)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse_clj.lang.clojure.io.macro_suffixes);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
} else {
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro external-libs:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.macro_suffixes,path);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}
}
}));
klipse_clj.lang.clojure.io.bundled_ns_root = (function klipse_clj$lang$clojure$io$bundled_ns_root(){
return new cljs.core.Keyword(null,"bundled_ns_root","bundled_ns_root",205057992).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,"https://viebel.github.io/klipse-clj/target/public/cljs-out/dev/");
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__27679,src_cb){
var map__27680 = p__27679;
var map__27680__$1 = (((((!((map__27680 == null))))?(((((map__27680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27680):map__27680);
var path = cljs.core.get.call(null,map__27680__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__27680,map__27680__$1,path){
return (function (p1__27678_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27678_SHARP_)].join('');
});})(path__$1,map__27680,map__27680__$1,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}));
klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp = (function klipse_clj$lang$clojure$io$bundled_ns_ignore_regexp(){
return new cljs.core.Keyword(null,"clojure_bundled_ns_ignore_regexp","clojure_bundled_ns_ignore_regexp",-1479622333).cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_);
});
klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_ = (function klipse_clj$lang$clojure$io$custom_bundled_ns_ignore_QMARK_(name){
var temp__5720__auto__ = klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var regexp = temp__5720__auto__;
return cljs.core.re_matches.call(null,regexp,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
return null;
}
});
klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_ = (function klipse_clj$lang$clojure$io$buggy_bundled_ns_ignore_QMARK_(name){
return cljs.core.re_matches.call(null,/.*reagent.*|cljs.core.async.*|cljs.core.specs.alpha/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
/**
 * Checks whether a namespace is present at run-time
 */
klipse_clj.lang.clojure.io.bundled_ns_QMARK_ = (function klipse_clj$lang$clojure$io$bundled_ns_QMARK_(name){
if(cljs.core.truth_((function (){var or__19423__auto__ = klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__19423__auto__)){
return or__19423__auto__;
} else {
return klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_.call(null,name);
}
})())){
return false;
} else {
return (!(((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)));
})() == null)));
}
});
klipse_clj.lang.clojure.io.cljsjs_QMARK_ = (function klipse_clj$lang$clojure$io$cljsjs_QMARK_(name){
return cljs.core.re_matches.call(null,/cljsjs\..*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
klipse_clj.lang.clojure.io.cljsjs_libname = (function klipse_clj$lang$clojure$io$cljsjs_libname(name){
var $ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(name);
var $__$1 = cljs.core.re_matches.call(null,/cljsjs\.(.*)/,$);
var $__$2 = cljs.core.second.call(null,$__$1);
return clojure.string.replace.call(null,$__$2,/\./,"-");
});
/**
 * some cljsjs packages are already loaded e.g react in klipse app
 */
klipse_clj.lang.clojure.io.bundled_cljsjs_ns_QMARK_ = (function klipse_clj$lang$clojure$io$bundled_cljsjs_ns_QMARK_(name){
var or__19423__auto__ = (function (){var and__19399__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__19399__auto__){
return (window["React"]);
} else {
return and__19399__auto__;
}
})();
if(cljs.core.truth_(or__19423__auto__)){
return or__19423__auto__;
} else {
var or__19423__auto____$1 = (function (){var and__19399__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__19399__auto__){
return (window["ReactDOMServer"]);
} else {
return and__19399__auto__;
}
})();
if(cljs.core.truth_(or__19423__auto____$1)){
return or__19423__auto____$1;
} else {
var and__19399__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__19399__auto__){
return (window["ReactDOM"]);
} else {
return and__19399__auto__;
}
}
}
});
/**
 * Try to load the js file corresponding to a cljsjs package.
 *   For that, we have to convert the package name into a full path - hosted on this git repo: https://github.com/viebel/cljsjs-hosted
 *   
 */
klipse_clj.lang.clojure.io.try_to_load_cljsjs_ns = (function klipse_clj$lang$clojure$io$try_to_load_cljsjs_ns(name,src_cb){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.log("load-ns :cljs try-to-load-cljsjs-ns",name);
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.bundled_cljsjs_ns_QMARK_.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns bundled-cljsjs-ns",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var root_path = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null),"null",new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null),"null",new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null),"null"], null), null).call(null,name))?"https://viebel.github.io/cljsjs-hosted/cljsjs-klipse-only/":"https://viebel.github.io/cljsjs-hosted/cljsjs/");
var lib_name = klipse_clj.lang.clojure.io.cljsjs_libname.call(null,name);
var full_names = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[root_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[root_path,"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[root_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join(''),[root_path,"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join('')], null);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,full_names,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__27683,src_cb){
var map__27684 = p__27683;
var map__27684__$1 = (((((!((map__27684 == null))))?(((((map__27684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27684):map__27684);
var name = cljs.core.get.call(null,map__27684__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__27684__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"external-libs: ",external_libs);
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.skip_ns_cljs.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs skipping",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(klipse_clj.lang.clojure.io.bundled_ns_QMARK_.call(null,name)){
var _ = ((klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)?console.log("load-ns :cljs bundled",name):null);
var filenames = cljs.core.map.call(null,((function (_,map__27684,map__27684__$1,name,path){
return (function (p1__27682_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27682_SHARP_),".cache.json"].join('');
});})(_,map__27684,map__27684__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__26429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26429__auto__,_,filenames,map__27684,map__27684__$1,name,path){
return (function (){
var f__26430__auto__ = (function (){var switch__26406__auto__ = ((function (c__26429__auto__,_,filenames,map__27684,map__27684__$1,name,path){
return (function (state_27698){
var state_val_27699 = (state_27698[(1)]);
if((state_val_27699 === (1))){
var inst_27686 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_27698__$1 = state_27698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27698__$1,(2),inst_27686);
} else {
if((state_val_27699 === (2))){
var inst_27688 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
if(cljs.core.truth_(inst_27688)){
var statearr_27700_27751 = state_27698__$1;
(statearr_27700_27751[(1)] = (3));

} else {
var statearr_27701_27752 = state_27698__$1;
(statearr_27701_27752[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (3))){
var state_27698__$1 = state_27698;
var statearr_27702_27753 = state_27698__$1;
(statearr_27702_27753[(2)] = null);

(statearr_27702_27753[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (4))){
var inst_27691 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_27692 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_27693 = cljs.core.PersistentHashMap.fromArrays(inst_27691,inst_27692);
var inst_27694 = src_cb.call(null,inst_27693);
var state_27698__$1 = state_27698;
var statearr_27703_27754 = state_27698__$1;
(statearr_27703_27754[(2)] = inst_27694);

(statearr_27703_27754[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (5))){
var inst_27696 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27698__$1,inst_27696);
} else {
return null;
}
}
}
}
}
});})(c__26429__auto__,_,filenames,map__27684,map__27684__$1,name,path))
;
return ((function (switch__26406__auto__,c__26429__auto__,_,filenames,map__27684,map__27684__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__26407__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__26407__auto____0 = (function (){
var statearr_27704 = [null,null,null,null,null,null,null];
(statearr_27704[(0)] = klipse_clj$lang$clojure$io$state_machine__26407__auto__);

(statearr_27704[(1)] = (1));

return statearr_27704;
});
var klipse_clj$lang$clojure$io$state_machine__26407__auto____1 = (function (state_27698){
while(true){
var ret_value__26408__auto__ = (function (){try{while(true){
var result__26409__auto__ = switch__26406__auto__.call(null,state_27698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26409__auto__;
}
break;
}
}catch (e27705){if((e27705 instanceof Object)){
var ex__26410__auto__ = e27705;
var statearr_27706_27755 = state_27698;
(statearr_27706_27755[(5)] = ex__26410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27756 = state_27698;
state_27698 = G__27756;
continue;
} else {
return ret_value__26408__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__26407__auto__ = function(state_27698){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__26407__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__26407__auto____1.call(this,state_27698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__26407__auto____0;
klipse_clj$lang$clojure$io$state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__26407__auto____1;
return klipse_clj$lang$clojure$io$state_machine__26407__auto__;
})()
;})(switch__26406__auto__,c__26429__auto__,_,filenames,map__27684,map__27684__$1,name,path))
})();
var state__26431__auto__ = (function (){var statearr_27707 = f__26430__auto__.call(null);
(statearr_27707[(6)] = c__26429__auto__);

return statearr_27707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26431__auto__);
});})(c__26429__auto__,_,filenames,map__27684,map__27684__$1,name,path))
);

return c__26429__auto__;
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_.call(null,name))){
return klipse_clj.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,false);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.cljsjs_QMARK_.call(null,name))){
return klipse_clj.lang.clojure.io.try_to_load_cljsjs_ns.call(null,name,src_cb);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.the_ns_map.call(null,name))){
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.the_ns_map.call(null,name)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse_clj.lang.clojure.io.cljs_suffixes);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs from external libs",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

var c__26429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26429__auto__,prefix,filenames,map__27684,map__27684__$1,name,path){
return (function (){
var f__26430__auto__ = (function (){var switch__26406__auto__ = ((function (c__26429__auto__,prefix,filenames,map__27684,map__27684__$1,name,path){
return (function (state_27718){
var state_val_27719 = (state_27718[(1)]);
if((state_val_27719 === (1))){
var inst_27708 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_27718__$1 = state_27718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27718__$1,(2),inst_27708);
} else {
if((state_val_27719 === (2))){
var inst_27710 = (state_27718[(2)]);
var state_27718__$1 = state_27718;
if(cljs.core.truth_(inst_27710)){
var statearr_27720_27757 = state_27718__$1;
(statearr_27720_27757[(1)] = (3));

} else {
var statearr_27721_27758 = state_27718__$1;
(statearr_27721_27758[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (3))){
var state_27718__$1 = state_27718;
var statearr_27722_27759 = state_27718__$1;
(statearr_27722_27759[(2)] = null);

(statearr_27722_27759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (4))){
var inst_27713 = [prefix,".js"].join('');
var inst_27714 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_27713,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_27718__$1 = state_27718;
var statearr_27723_27760 = state_27718__$1;
(statearr_27723_27760[(2)] = inst_27714);

(statearr_27723_27760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (5))){
var inst_27716 = (state_27718[(2)]);
var state_27718__$1 = state_27718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27718__$1,inst_27716);
} else {
return null;
}
}
}
}
}
});})(c__26429__auto__,prefix,filenames,map__27684,map__27684__$1,name,path))
;
return ((function (switch__26406__auto__,c__26429__auto__,prefix,filenames,map__27684,map__27684__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__26407__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__26407__auto____0 = (function (){
var statearr_27724 = [null,null,null,null,null,null,null];
(statearr_27724[(0)] = klipse_clj$lang$clojure$io$state_machine__26407__auto__);

(statearr_27724[(1)] = (1));

return statearr_27724;
});
var klipse_clj$lang$clojure$io$state_machine__26407__auto____1 = (function (state_27718){
while(true){
var ret_value__26408__auto__ = (function (){try{while(true){
var result__26409__auto__ = switch__26406__auto__.call(null,state_27718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26409__auto__;
}
break;
}
}catch (e27725){if((e27725 instanceof Object)){
var ex__26410__auto__ = e27725;
var statearr_27726_27761 = state_27718;
(statearr_27726_27761[(5)] = ex__26410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27762 = state_27718;
state_27718 = G__27762;
continue;
} else {
return ret_value__26408__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__26407__auto__ = function(state_27718){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__26407__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__26407__auto____1.call(this,state_27718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__26407__auto____0;
klipse_clj$lang$clojure$io$state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__26407__auto____1;
return klipse_clj$lang$clojure$io$state_machine__26407__auto__;
})()
;})(switch__26406__auto__,c__26429__auto__,prefix,filenames,map__27684,map__27684__$1,name,path))
})();
var state__26431__auto__ = (function (){var statearr_27727 = f__26430__auto__.call(null);
(statearr_27727[(6)] = c__26429__auto__);

return statearr_27727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26431__auto__);
});})(c__26429__auto__,prefix,filenames,map__27684,map__27684__$1,name,path))
);

return c__26429__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__26429__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26429__auto__,filenames,map__27684,map__27684__$1,name,path){
return (function (){
var f__26430__auto__ = (function (){var switch__26406__auto__ = ((function (c__26429__auto__,filenames,map__27684,map__27684__$1,name,path){
return (function (state_27741){
var state_val_27742 = (state_27741[(1)]);
if((state_val_27742 === (1))){
var inst_27728 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_27741__$1 = state_27741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27741__$1,(2),inst_27728);
} else {
if((state_val_27742 === (2))){
var inst_27730 = (state_27741[(2)]);
var state_27741__$1 = state_27741;
if(cljs.core.truth_(inst_27730)){
var statearr_27743_27763 = state_27741__$1;
(statearr_27743_27763[(1)] = (3));

} else {
var statearr_27744_27764 = state_27741__$1;
(statearr_27744_27764[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (3))){
var state_27741__$1 = state_27741;
var statearr_27745_27765 = state_27741__$1;
(statearr_27745_27765[(2)] = null);

(statearr_27745_27765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (4))){
var inst_27733 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27734 = [".js"];
var inst_27735 = (new cljs.core.PersistentVector(null,1,(5),inst_27733,inst_27734,null));
var inst_27736 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_27735,path);
var inst_27737 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_27736,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_27741__$1 = state_27741;
var statearr_27746_27766 = state_27741__$1;
(statearr_27746_27766[(2)] = inst_27737);

(statearr_27746_27766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (5))){
var inst_27739 = (state_27741[(2)]);
var state_27741__$1 = state_27741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27741__$1,inst_27739);
} else {
return null;
}
}
}
}
}
});})(c__26429__auto__,filenames,map__27684,map__27684__$1,name,path))
;
return ((function (switch__26406__auto__,c__26429__auto__,filenames,map__27684,map__27684__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__26407__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__26407__auto____0 = (function (){
var statearr_27747 = [null,null,null,null,null,null,null];
(statearr_27747[(0)] = klipse_clj$lang$clojure$io$state_machine__26407__auto__);

(statearr_27747[(1)] = (1));

return statearr_27747;
});
var klipse_clj$lang$clojure$io$state_machine__26407__auto____1 = (function (state_27741){
while(true){
var ret_value__26408__auto__ = (function (){try{while(true){
var result__26409__auto__ = switch__26406__auto__.call(null,state_27741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26409__auto__;
}
break;
}
}catch (e27748){if((e27748 instanceof Object)){
var ex__26410__auto__ = e27748;
var statearr_27749_27767 = state_27741;
(statearr_27749_27767[(5)] = ex__26410__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27768 = state_27741;
state_27741 = G__27768;
continue;
} else {
return ret_value__26408__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__26407__auto__ = function(state_27741){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__26407__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__26407__auto____1.call(this,state_27741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__26407__auto____0;
klipse_clj$lang$clojure$io$state_machine__26407__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__26407__auto____1;
return klipse_clj$lang$clojure$io$state_machine__26407__auto__;
})()
;})(switch__26406__auto__,c__26429__auto__,filenames,map__27684,map__27684__$1,name,path))
})();
var state__26431__auto__ = (function (){var statearr_27750 = f__26430__auto__.call(null);
(statearr_27750[(6)] = c__26429__auto__);

return statearr_27750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26431__auto__);
});})(c__26429__auto__,filenames,map__27684,map__27684__$1,name,path))
);

return c__26429__auto__;
} else {
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs nothing can be done",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,null);

}
}
}
}
}
}
}));
klipse_clj.lang.clojure.io.fix_goog_path = (function klipse_clj$lang$clojure$io$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
klipse_clj.lang.clojure.io.simple_goog_path = (function klipse_clj$lang$clojure$io$simple_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var butlast_parts = cljs.core.butlast.call(null,parts);
var new_parts = cljs.core.concat.call(null,butlast_parts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,butlast_parts)], null));
return clojure.string.join.call(null,"/",new_parts);
});
klipse_clj.lang.clojure.io.another_goog_path = (function klipse_clj$lang$clojure$io$another_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,"",cljs.core.take_last.call(null,(2),parts))], null));
return clojure.string.join.call(null,"/",new_parts);
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__27770,src_cb){
var map__27771 = p__27770;
var map__27771__$1 = (((((!((map__27771 == null))))?(((((map__27771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27771):map__27771);
var name = cljs.core.get.call(null,map__27771__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__27771__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__27771,map__27771__$1,name,path){
return (function (p1__27769_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27769_SHARP_),".js"].join('');
});})(closure_github_path,map__27771,map__27771__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
