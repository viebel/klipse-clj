// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse_clj.lang.clojure.io');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('clojure.string');
goog.require('klipse_clj.repl');
goog.require('cljs_http.client');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('applied_science.js_interop');
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
klipse_clj.lang.clojure.io.load_ns = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,p__18372,_src_cb){
var map__18373 = p__18372;
var map__18373__$1 = (((((!((map__18373 == null))))?(((((map__18373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18373):map__18373);
var name = cljs.core.get.call(null,map__18373__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__18373__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__18373__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
klipse_clj.lang.clojure.io.skip_ns_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"cljs.analyzer.macros","cljs.analyzer.macros",298494182,null),null,new cljs.core.Symbol(null,"cljs.env.macros","cljs.env.macros",1542748640,null),null,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),null,new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null),null,new cljs.core.Symbol(null,"cljs.compiler.macros","cljs.compiler.macros",750996207,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.js","cljs.js",474485962,null),null], null), null);
klipse_clj.lang.clojure.io.the_ns_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null),"https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs/",new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),"https://raw.githubusercontent.com/viebel/clojure/master/src/clj/"], null);
klipse_clj.lang.clojure.io.skip_ns_cljs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cljs.source-map","cljs.source-map",2108014936,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.env","cljs.env",-1810013139,null),null], null), null);
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
var args__4736__auto__ = [];
var len__4730__auto___18500 = arguments.length;
var i__4731__auto___18501 = (0);
while(true){
if((i__4731__auto___18501 < len__4730__auto___18500)){
args__4736__auto__.push((arguments[i__4731__auto___18501]));

var G__18502 = (i__4731__auto___18501 + (1));
i__4731__auto___18501 = G__18502;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__18380){
var map__18381 = p__18380;
var map__18381__$1 = (((((!((map__18381 == null))))?(((((map__18381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18381):map__18381);
var transform = cljs.core.get.call(null,map__18381__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__18381__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key));
} else {
}

var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,map__18381,map__18381__$1,transform,can_recover_QMARK_){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,map__18381,map__18381__$1,transform,can_recover_QMARK_){
return (function (state_18453){
var state_val_18454 = (state_18453[(1)]);
if((state_val_18454 === (7))){
var inst_18395 = (state_18453[(7)]);
var inst_18395__$1 = (state_18453[(2)]);
var inst_18397 = (inst_18395__$1 == null);
var inst_18398 = cljs.core.not.call(null,inst_18397);
var state_18453__$1 = (function (){var statearr_18455 = state_18453;
(statearr_18455[(7)] = inst_18395__$1);

return statearr_18455;
})();
if(inst_18398){
var statearr_18456_18503 = state_18453__$1;
(statearr_18456_18503[(1)] = (8));

} else {
var statearr_18457_18504 = state_18453__$1;
(statearr_18457_18504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (20))){
var inst_18388 = (state_18453[(8)]);
var inst_18422 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang);
var inst_18423 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key);
var inst_18424 = console.info("file loaded successfully",inst_18422,inst_18423,inst_18388);
var state_18453__$1 = state_18453;
var statearr_18458_18505 = state_18453__$1;
(statearr_18458_18505[(2)] = inst_18424);

(statearr_18458_18505[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (27))){
var inst_18447 = src_cb.call(null,null);
var state_18453__$1 = state_18453;
var statearr_18459_18506 = state_18453__$1;
(statearr_18459_18506[(2)] = inst_18447);

(statearr_18459_18506[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (1))){
var inst_18383 = filenames;
var state_18453__$1 = (function (){var statearr_18460 = state_18453;
(statearr_18460[(9)] = inst_18383);

return statearr_18460;
})();
var statearr_18461_18507 = state_18453__$1;
(statearr_18461_18507[(2)] = null);

(statearr_18461_18507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (24))){
var state_18453__$1 = state_18453;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_18462_18508 = state_18453__$1;
(statearr_18462_18508[(1)] = (26));

} else {
var statearr_18463_18509 = state_18453__$1;
(statearr_18463_18509[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (4))){
var inst_18388 = (state_18453[(8)]);
var inst_18383 = (state_18453[(9)]);
var inst_18388__$1 = cljs.core.first.call(null,inst_18383);
var inst_18389 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_18388__$1);
var inst_18390 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_18391 = [false];
var inst_18392 = cljs.core.PersistentHashMap.fromArrays(inst_18390,inst_18391);
var inst_18393 = cljs_http.client.get.call(null,inst_18389,inst_18392);
var state_18453__$1 = (function (){var statearr_18464 = state_18453;
(statearr_18464[(8)] = inst_18388__$1);

return statearr_18464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18453__$1,(7),inst_18393);
} else {
if((state_val_18454 === (15))){
var inst_18395 = (state_18453[(7)]);
var state_18453__$1 = state_18453;
var statearr_18465_18510 = state_18453__$1;
(statearr_18465_18510[(2)] = inst_18395);

(statearr_18465_18510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (21))){
var state_18453__$1 = state_18453;
var statearr_18466_18511 = state_18453__$1;
(statearr_18466_18511[(2)] = null);

(statearr_18466_18511[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (13))){
var inst_18408 = (state_18453[(2)]);
var state_18453__$1 = state_18453;
var statearr_18467_18512 = state_18453__$1;
(statearr_18467_18512[(2)] = inst_18408);

(statearr_18467_18512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (22))){
var inst_18388 = (state_18453[(8)]);
var inst_18418 = (state_18453[(10)]);
var inst_18427 = (state_18453[(2)]);
var inst_18428 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_18429 = transform.call(null,inst_18418);
var inst_18430 = [lang,inst_18429,inst_18388];
var inst_18431 = cljs.core.PersistentHashMap.fromArrays(inst_18428,inst_18430);
var inst_18432 = src_cb.call(null,inst_18431);
var state_18453__$1 = (function (){var statearr_18468 = state_18453;
(statearr_18468[(11)] = inst_18432);

(statearr_18468[(12)] = inst_18427);

return statearr_18468;
})();
var statearr_18469_18513 = state_18453__$1;
(statearr_18469_18513[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_18469_18513[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (6))){
var inst_18440 = (state_18453[(2)]);
var state_18453__$1 = state_18453;
var statearr_18470_18514 = state_18453__$1;
(statearr_18470_18514[(2)] = inst_18440);

(statearr_18470_18514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (28))){
var inst_18449 = (state_18453[(2)]);
var state_18453__$1 = (function (){var statearr_18471 = state_18453;
(statearr_18471[(13)] = inst_18449);

return statearr_18471;
})();
var statearr_18472_18515 = state_18453__$1;
(statearr_18472_18515[(2)] = false);

(statearr_18472_18515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (25))){
var inst_18451 = (state_18453[(2)]);
var state_18453__$1 = state_18453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18453__$1,inst_18451);
} else {
if((state_val_18454 === (17))){
var state_18453__$1 = state_18453;
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
var statearr_18473_18516 = state_18453__$1;
(statearr_18473_18516[(1)] = (20));

} else {
var statearr_18474_18517 = state_18453__$1;
(statearr_18474_18517[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (3))){
var inst_18442 = (state_18453[(2)]);
var state_18453__$1 = state_18453;
if(cljs.core.truth_(inst_18442)){
var statearr_18475_18518 = state_18453__$1;
(statearr_18475_18518[(1)] = (23));

} else {
var statearr_18476_18519 = state_18453__$1;
(statearr_18476_18519[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (12))){
var state_18453__$1 = state_18453;
var statearr_18477_18520 = state_18453__$1;
(statearr_18477_18520[(2)] = false);

(statearr_18477_18520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (2))){
var inst_18383 = (state_18453[(9)]);
var inst_18385 = cljs.core.seq.call(null,inst_18383);
var state_18453__$1 = state_18453;
if(inst_18385){
var statearr_18478_18521 = state_18453__$1;
(statearr_18478_18521[(1)] = (4));

} else {
var statearr_18479_18522 = state_18453__$1;
(statearr_18479_18522[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (23))){
var state_18453__$1 = state_18453;
var statearr_18480_18523 = state_18453__$1;
(statearr_18480_18523[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_18480_18523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (19))){
var inst_18437 = (state_18453[(2)]);
var state_18453__$1 = state_18453;
var statearr_18481_18524 = state_18453__$1;
(statearr_18481_18524[(2)] = inst_18437);

(statearr_18481_18524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (11))){
var state_18453__$1 = state_18453;
var statearr_18482_18525 = state_18453__$1;
(statearr_18482_18525[(2)] = true);

(statearr_18482_18525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (9))){
var state_18453__$1 = state_18453;
var statearr_18483_18526 = state_18453__$1;
(statearr_18483_18526[(2)] = false);

(statearr_18483_18526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (5))){
var state_18453__$1 = state_18453;
var statearr_18484_18527 = state_18453__$1;
(statearr_18484_18527[(2)] = null);

(statearr_18484_18527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (14))){
var inst_18395 = (state_18453[(7)]);
var inst_18413 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18395);
var state_18453__$1 = state_18453;
var statearr_18485_18528 = state_18453__$1;
(statearr_18485_18528[(2)] = inst_18413);

(statearr_18485_18528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (26))){
var state_18453__$1 = state_18453;
var statearr_18486_18529 = state_18453__$1;
(statearr_18486_18529[(2)] = null);

(statearr_18486_18529[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (16))){
var inst_18416 = (state_18453[(2)]);
var inst_18417 = cljs.core.get.call(null,inst_18416,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18418 = cljs.core.get.call(null,inst_18416,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18419 = cljs.core._EQ_.call(null,(200),inst_18417);
var state_18453__$1 = (function (){var statearr_18487 = state_18453;
(statearr_18487[(10)] = inst_18418);

return statearr_18487;
})();
if(inst_18419){
var statearr_18488_18530 = state_18453__$1;
(statearr_18488_18530[(1)] = (17));

} else {
var statearr_18489_18531 = state_18453__$1;
(statearr_18489_18531[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (10))){
var inst_18411 = (state_18453[(2)]);
var state_18453__$1 = state_18453;
if(cljs.core.truth_(inst_18411)){
var statearr_18490_18532 = state_18453__$1;
(statearr_18490_18532[(1)] = (14));

} else {
var statearr_18491_18533 = state_18453__$1;
(statearr_18491_18533[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (18))){
var inst_18383 = (state_18453[(9)]);
var inst_18434 = cljs.core.rest.call(null,inst_18383);
var inst_18383__$1 = inst_18434;
var state_18453__$1 = (function (){var statearr_18492 = state_18453;
(statearr_18492[(9)] = inst_18383__$1);

return statearr_18492;
})();
var statearr_18493_18534 = state_18453__$1;
(statearr_18493_18534[(2)] = null);

(statearr_18493_18534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18454 === (8))){
var inst_18395 = (state_18453[(7)]);
var inst_18400 = inst_18395.cljs$lang$protocol_mask$partition0$;
var inst_18401 = (inst_18400 & (64));
var inst_18402 = inst_18395.cljs$core$ISeq$;
var inst_18403 = (cljs.core.PROTOCOL_SENTINEL === inst_18402);
var inst_18404 = ((inst_18401) || (inst_18403));
var state_18453__$1 = state_18453;
if(cljs.core.truth_(inst_18404)){
var statearr_18494_18535 = state_18453__$1;
(statearr_18494_18535[(1)] = (11));

} else {
var statearr_18495_18536 = state_18453__$1;
(statearr_18495_18536[(1)] = (12));

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
});})(c__15634__auto__,map__18381,map__18381__$1,transform,can_recover_QMARK_))
;
return ((function (switch__15539__auto__,c__15634__auto__,map__18381,map__18381__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15540__auto____0 = (function (){
var statearr_18496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18496[(0)] = klipse_clj$lang$clojure$io$state_machine__15540__auto__);

(statearr_18496[(1)] = (1));

return statearr_18496;
});
var klipse_clj$lang$clojure$io$state_machine__15540__auto____1 = (function (state_18453){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_18453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e18497){if((e18497 instanceof Object)){
var ex__15543__auto__ = e18497;
var statearr_18498_18537 = state_18453;
(statearr_18498_18537[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18538 = state_18453;
state_18453 = G__18538;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15540__auto__ = function(state_18453){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15540__auto____1.call(this,state_18453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15540__auto____0;
klipse_clj$lang$clojure$io$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15540__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,map__18381,map__18381__$1,transform,can_recover_QMARK_))
})();
var state__15636__auto__ = (function (){var statearr_18499 = f__15635__auto__.call(null);
(statearr_18499[(6)] = c__15634__auto__);

return statearr_18499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,map__18381,map__18381__$1,transform,can_recover_QMARK_))
);

return c__15634__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq18375){
var G__18376 = cljs.core.first.call(null,seq18375);
var seq18375__$1 = cljs.core.next.call(null,seq18375);
var G__18377 = cljs.core.first.call(null,seq18375__$1);
var seq18375__$2 = cljs.core.next.call(null,seq18375__$1);
var G__18378 = cljs.core.first.call(null,seq18375__$2);
var seq18375__$3 = cljs.core.next.call(null,seq18375__$2);
var G__18379 = cljs.core.first.call(null,seq18375__$3);
var seq18375__$4 = cljs.core.next.call(null,seq18375__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18376,G__18377,G__18378,G__18379,seq18375__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4523__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__18539(s__18540){
return (new cljs.core.LazySeq(null,(function (){
var s__18540__$1 = s__18540;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__18540__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var lib = cljs.core.first.call(null,xs__6360__auto__);
var iterys__4519__auto__ = ((function (s__18540__$1,lib,xs__6360__auto__,temp__5804__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__18539_$_iter__18541(s__18542){
return (new cljs.core.LazySeq(null,((function (s__18540__$1,lib,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__18542__$1 = s__18542;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__18542__$1);
if(temp__5804__auto____$1){
var s__18542__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18542__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18542__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18544 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18543 = (0);
while(true){
if((i__18543 < size__4522__auto__)){
var suffix = cljs.core._nth.call(null,c__4521__auto__,i__18543);
cljs.core.chunk_append.call(null,b__18544,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__18545 = (i__18543 + (1));
i__18543 = G__18545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18544),klipse_clj$lang$clojure$io$external_libs_files_$_iter__18539_$_iter__18541.call(null,cljs.core.chunk_rest.call(null,s__18542__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18544),null);
}
} else {
var suffix = cljs.core.first.call(null,s__18542__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__18539_$_iter__18541.call(null,cljs.core.rest.call(null,s__18542__$2)));
}
} else {
return null;
}
break;
}
});})(s__18540__$1,lib,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__18540__$1,lib,xs__6360__auto__,temp__5804__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,suffixes));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__18539.call(null,cljs.core.rest.call(null,s__18540__$1)));
} else {
var G__18546 = cljs.core.rest.call(null,s__18540__$1);
s__18540__$1 = G__18546;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,external_libs);
});
klipse_clj.lang.clojure.io.name__GT_cached_resource = (function klipse_clj$lang$clojure$io$name__GT_cached_resource(name){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)),/\./,"_SLASH_");
});
klipse_clj.lang.clojure.io.cached_ns_root = (function klipse_clj$lang$clojure$io$cached_ns_root(){
return new cljs.core.Keyword(null,"cached_ns_root","cached_ns_root",-1077014575).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,"https://viebel.github.io/cljs-analysis-cache/cache/");
});
klipse_clj.lang.clojure.io.load_ns_from_cache = (function klipse_clj$lang$clojure$io$load_ns_from_cache(name,src_cb,macro_QMARK_,on_failure_cb){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-cache:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"macro: ",macro_QMARK_);
} else {
}

var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_18591){
var state_val_18592 = (state_18591[(1)]);
if((state_val_18592 === (7))){
var inst_18570 = (state_18591[(7)]);
var inst_18563 = (state_18591[(8)]);
var inst_18579 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_18580 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_18570);
var inst_18581 = klipse_clj.lang.clojure.io.edn.call(null,inst_18580);
var inst_18582 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_18563);
var inst_18583 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_18581,inst_18582];
var inst_18584 = cljs.core.PersistentHashMap.fromArrays(inst_18579,inst_18583);
var inst_18585 = src_cb.call(null,inst_18584);
var state_18591__$1 = state_18591;
var statearr_18593_18609 = state_18591__$1;
(statearr_18593_18609[(2)] = inst_18585);

(statearr_18593_18609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18592 === (1))){
var inst_18548 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_18591__$1 = (function (){var statearr_18594 = state_18591;
(statearr_18594[(9)] = inst_18548);

return statearr_18594;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_18595_18610 = state_18591__$1;
(statearr_18595_18610[(1)] = (2));

} else {
var statearr_18596_18611 = state_18591__$1;
(statearr_18596_18611[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18592 === (4))){
var inst_18554 = (state_18591[(10)]);
var inst_18552 = (state_18591[(11)]);
var inst_18548 = (state_18591[(9)]);
var inst_18555 = (state_18591[(12)]);
var inst_18552__$1 = (state_18591[(2)]);
var inst_18553 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_18554__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18553),"/"].join('');
var inst_18555__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18554__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18548),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18552__$1),".js"].join('');
var inst_18556 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18554__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18548),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18552__$1),".cache.json"].join('');
var inst_18557 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_18555__$1);
var inst_18558 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_18559 = [false];
var inst_18560 = cljs.core.PersistentHashMap.fromArrays(inst_18558,inst_18559);
var inst_18561 = cljs_http.client.get.call(null,inst_18557,inst_18560);
var state_18591__$1 = (function (){var statearr_18597 = state_18591;
(statearr_18597[(10)] = inst_18554__$1);

(statearr_18597[(13)] = inst_18556);

(statearr_18597[(11)] = inst_18552__$1);

(statearr_18597[(12)] = inst_18555__$1);

return statearr_18597;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18591__$1,(5),inst_18561);
} else {
if((state_val_18592 === (6))){
var inst_18554 = (state_18591[(10)]);
var inst_18556 = (state_18591[(13)]);
var inst_18552 = (state_18591[(11)]);
var inst_18570 = (state_18591[(7)]);
var inst_18563 = (state_18591[(8)]);
var inst_18548 = (state_18591[(9)]);
var inst_18555 = (state_18591[(12)]);
var inst_18570__$1 = (state_18591[(2)]);
var inst_18571 = (function (){var nn = inst_18548;
var suffix = inst_18552;
var root = inst_18554;
var src_filename = inst_18555;
var cache_filename = inst_18556;
var src = inst_18563;
var cache = inst_18570__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_18554,inst_18556,inst_18552,inst_18570,inst_18563,inst_18548,inst_18555,inst_18570__$1,state_val_18592,c__15634__auto__){
return (function (p1__18547_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__18547_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_18554,inst_18556,inst_18552,inst_18570,inst_18563,inst_18548,inst_18555,inst_18570__$1,state_val_18592,c__15634__auto__))
})();
var inst_18572 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18573 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_18570__$1);
var inst_18574 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_18563);
var inst_18575 = [inst_18573,inst_18574];
var inst_18576 = (new cljs.core.PersistentVector(null,2,(5),inst_18572,inst_18575,null));
var inst_18577 = cljs.core.every_QMARK_.call(null,inst_18571,inst_18576);
var state_18591__$1 = (function (){var statearr_18598 = state_18591;
(statearr_18598[(7)] = inst_18570__$1);

return statearr_18598;
})();
if(inst_18577){
var statearr_18599_18612 = state_18591__$1;
(statearr_18599_18612[(1)] = (7));

} else {
var statearr_18600_18613 = state_18591__$1;
(statearr_18600_18613[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18592 === (3))){
var state_18591__$1 = state_18591;
var statearr_18601_18614 = state_18591__$1;
(statearr_18601_18614[(2)] = "");

(statearr_18601_18614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18592 === (2))){
var state_18591__$1 = state_18591;
var statearr_18602_18615 = state_18591__$1;
(statearr_18602_18615[(2)] = "$macros");

(statearr_18602_18615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18592 === (9))){
var inst_18589 = (state_18591[(2)]);
var state_18591__$1 = state_18591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18591__$1,inst_18589);
} else {
if((state_val_18592 === (5))){
var inst_18556 = (state_18591[(13)]);
var inst_18563 = (state_18591[(2)]);
var inst_18564 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_18556);
var inst_18565 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_18566 = [false];
var inst_18567 = cljs.core.PersistentHashMap.fromArrays(inst_18565,inst_18566);
var inst_18568 = cljs_http.client.get.call(null,inst_18564,inst_18567);
var state_18591__$1 = (function (){var statearr_18603 = state_18591;
(statearr_18603[(8)] = inst_18563);

return statearr_18603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18591__$1,(6),inst_18568);
} else {
if((state_val_18592 === (8))){
var inst_18587 = on_failure_cb.call(null);
var state_18591__$1 = state_18591;
var statearr_18604_18616 = state_18591__$1;
(statearr_18604_18616[(2)] = inst_18587);

(statearr_18604_18616[(1)] = (9));


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
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto____0 = (function (){
var statearr_18605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18605[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto__);

(statearr_18605[(1)] = (1));

return statearr_18605;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto____1 = (function (state_18591){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_18591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e18606){if((e18606 instanceof Object)){
var ex__15543__auto__ = e18606;
var statearr_18607_18617 = state_18591;
(statearr_18607_18617[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18618 = state_18591;
state_18591 = G__18618;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto__ = function(state_18591){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto____1.call(this,state_18591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_18608 = f__15635__auto__.call(null);
(statearr_18608[(6)] = c__15634__auto__);

return statearr_18608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_18658){
var state_val_18659 = (state_18658[(1)]);
if((state_val_18659 === (7))){
var state_18658__$1 = state_18658;
var statearr_18660_18682 = state_18658__$1;
(statearr_18660_18682[(2)] = false);

(statearr_18660_18682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18659 === (1))){
var inst_18620 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_18621 = [false];
var inst_18622 = cljs.core.PersistentHashMap.fromArrays(inst_18620,inst_18621);
var inst_18623 = cljs_http.client.get.call(null,filename,inst_18622);
var state_18658__$1 = state_18658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18658__$1,(2),inst_18623);
} else {
if((state_val_18659 === (4))){
var state_18658__$1 = state_18658;
var statearr_18661_18683 = state_18658__$1;
(statearr_18661_18683[(2)] = false);

(statearr_18661_18683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18659 === (13))){
var inst_18654 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_18658__$1 = state_18658;
var statearr_18662_18684 = state_18658__$1;
(statearr_18662_18684[(2)] = inst_18654);

(statearr_18662_18684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18659 === (6))){
var state_18658__$1 = state_18658;
var statearr_18663_18685 = state_18658__$1;
(statearr_18663_18685[(2)] = true);

(statearr_18663_18685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18659 === (3))){
var inst_18625 = (state_18658[(7)]);
var inst_18630 = inst_18625.cljs$lang$protocol_mask$partition0$;
var inst_18631 = (inst_18630 & (64));
var inst_18632 = inst_18625.cljs$core$ISeq$;
var inst_18633 = (cljs.core.PROTOCOL_SENTINEL === inst_18632);
var inst_18634 = ((inst_18631) || (inst_18633));
var state_18658__$1 = state_18658;
if(cljs.core.truth_(inst_18634)){
var statearr_18664_18686 = state_18658__$1;
(statearr_18664_18686[(1)] = (6));

} else {
var statearr_18665_18687 = state_18658__$1;
(statearr_18665_18687[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18659 === (12))){
var inst_18647 = (state_18658[(8)]);
var inst_18651 = klipse_clj.lang.clojure.io.edn.call(null,inst_18647);
var inst_18652 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_18651);
var state_18658__$1 = state_18658;
var statearr_18666_18688 = state_18658__$1;
(statearr_18666_18688[(2)] = inst_18652);

(statearr_18666_18688[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18659 === (2))){
var inst_18625 = (state_18658[(7)]);
var inst_18625__$1 = (state_18658[(2)]);
var inst_18627 = (inst_18625__$1 == null);
var inst_18628 = cljs.core.not.call(null,inst_18627);
var state_18658__$1 = (function (){var statearr_18667 = state_18658;
(statearr_18667[(7)] = inst_18625__$1);

return statearr_18667;
})();
if(inst_18628){
var statearr_18668_18689 = state_18658__$1;
(statearr_18668_18689[(1)] = (3));

} else {
var statearr_18669_18690 = state_18658__$1;
(statearr_18669_18690[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18659 === (11))){
var inst_18646 = (state_18658[(2)]);
var inst_18647 = cljs.core.get.call(null,inst_18646,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18648 = cljs.core.get.call(null,inst_18646,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18649 = cljs.core._EQ_.call(null,(200),inst_18648);
var state_18658__$1 = (function (){var statearr_18670 = state_18658;
(statearr_18670[(8)] = inst_18647);

return statearr_18670;
})();
if(inst_18649){
var statearr_18671_18691 = state_18658__$1;
(statearr_18671_18691[(1)] = (12));

} else {
var statearr_18672_18692 = state_18658__$1;
(statearr_18672_18692[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18659 === (9))){
var inst_18625 = (state_18658[(7)]);
var inst_18643 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18625);
var state_18658__$1 = state_18658;
var statearr_18673_18693 = state_18658__$1;
(statearr_18673_18693[(2)] = inst_18643);

(statearr_18673_18693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18659 === (5))){
var inst_18641 = (state_18658[(2)]);
var state_18658__$1 = state_18658;
if(cljs.core.truth_(inst_18641)){
var statearr_18674_18694 = state_18658__$1;
(statearr_18674_18694[(1)] = (9));

} else {
var statearr_18675_18695 = state_18658__$1;
(statearr_18675_18695[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18659 === (14))){
var inst_18656 = (state_18658[(2)]);
var state_18658__$1 = state_18658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18658__$1,inst_18656);
} else {
if((state_val_18659 === (10))){
var inst_18625 = (state_18658[(7)]);
var state_18658__$1 = state_18658;
var statearr_18676_18696 = state_18658__$1;
(statearr_18676_18696[(2)] = inst_18625);

(statearr_18676_18696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18659 === (8))){
var inst_18638 = (state_18658[(2)]);
var state_18658__$1 = state_18658;
var statearr_18677_18697 = state_18658__$1;
(statearr_18677_18697[(2)] = inst_18638);

(statearr_18677_18697[(1)] = (5));


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
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto____0 = (function (){
var statearr_18678 = [null,null,null,null,null,null,null,null,null];
(statearr_18678[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto__);

(statearr_18678[(1)] = (1));

return statearr_18678;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto____1 = (function (state_18658){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_18658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e18679){if((e18679 instanceof Object)){
var ex__15543__auto__ = e18679;
var statearr_18680_18698 = state_18658;
(statearr_18680_18698[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18699 = state_18658;
state_18658 = G__18699;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto__ = function(state_18658){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto____1.call(this,state_18658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_18681 = f__15635__auto__.call(null);
(statearr_18681[(6)] = c__15634__auto__);

return statearr_18681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});
klipse_clj.lang.clojure.io.cached_macro_ns_regexp = (function klipse_clj$lang$clojure$io$cached_macro_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_macro_ns_regexp","clojure_cached_macro_ns_regexp",-771780299).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/.*/);
});
klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_macro_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_macro_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
klipse_clj.lang.clojure.io.cached_ns_regexp = (function klipse_clj$lang$clojure$io$cached_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_ns_regexp","clojure_cached_ns_regexp",-1735711110).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/.*/);
});
klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_cljs_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__18700,src_cb_original){
var map__18701 = p__18700;
var map__18701__$1 = (((((!((map__18701 == null))))?(((((map__18701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18701):map__18701);
var args = map__18701__$1;
var name = cljs.core.get.call(null,map__18701__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__18701__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__18701__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
var load_ns_skip_cache = ((function (map__18701,map__18701__$1,args,name,path,try_cache_QMARK_){
return (function (){
return klipse_clj.lang.clojure.io.load_ns.call(null,external_libs,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),false),src_cb_original);
});})(map__18701,map__18701__$1,args,name,path,try_cache_QMARK_))
;
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (load_ns_skip_cache,map__18701,map__18701__$1,args,name,path,try_cache_QMARK_){
return (function() { 
var G__18703__delegate = function (args__$1){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args__$1);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__18703 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__18704__i = 0, G__18704__a = new Array(arguments.length -  0);
while (G__18704__i < G__18704__a.length) {G__18704__a[G__18704__i] = arguments[G__18704__i + 0]; ++G__18704__i;}
  args__$1 = new cljs.core.IndexedSeq(G__18704__a,0,null);
} 
return G__18703__delegate.call(this,args__$1);};
G__18703.cljs$lang$maxFixedArity = 0;
G__18703.cljs$lang$applyTo = (function (arglist__18705){
var args__$1 = cljs.core.seq(arglist__18705);
return G__18703__delegate(args__$1);
});
G__18703.cljs$core$IFn$_invoke$arity$variadic = G__18703__delegate;
return G__18703;
})()
;})(load_ns_skip_cache,map__18701,map__18701__$1,args,name,path,try_cache_QMARK_))
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
if(cljs.core.truth_((function (){var and__4120__auto__ = try_cache_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_.call(null,name);
} else {
return and__4120__auto__;
}
})())){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro cached:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return klipse_clj.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,true,load_ns_skip_cache);
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (_external_libs,p__18707,src_cb){
var map__18708 = p__18707;
var map__18708__$1 = (((((!((map__18708 == null))))?(((((map__18708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18708):map__18708);
var path = cljs.core.get.call(null,map__18708__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__18708,map__18708__$1,path){
return (function (p1__18706_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18706_SHARP_)].join('');
});})(path__$1,map__18708,map__18708__$1,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}));
klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp = (function klipse_clj$lang$clojure$io$bundled_ns_ignore_regexp(){
return new cljs.core.Keyword(null,"clojure_bundled_ns_ignore_regexp","clojure_bundled_ns_ignore_regexp",-1479622333).cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_);
});
klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_ = (function klipse_clj$lang$clojure$io$custom_bundled_ns_ignore_QMARK_(name){
var temp__5804__auto__ = klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp.call(null);
if(cljs.core.truth_(temp__5804__auto__)){
var regexp = temp__5804__auto__;
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
if(cljs.core.truth_((function (){var or__4131__auto__ = klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_.call(null,name);
}
})())){
return false;
} else {
return (!(((function (){var obj__18170__auto__ = goog;
var f__18171__auto__ = (function (){var obj18710 = obj__18170__auto__;
var k18711 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18710,k18711)){
return (obj18710[k18711]);
} else {
return null;
}
})();
return f__18171__auto__.call(obj__18170__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)));
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
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__4120__auto__){
var obj18718 = window;
var k18719 = "React";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18718,k18719)){
return (obj18718[k18719]);
} else {
return null;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__4120__auto__){
var obj18726 = window;
var k18727 = "ReactDOMServer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18726,k18727)){
return (obj18726[k18727]);
} else {
return null;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__4120__auto__){
var obj18730 = window;
var k18731 = "ReactDOM";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18730,k18731)){
return (obj18730[k18731]);
} else {
return null;
}
} else {
return and__4120__auto__;
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
console.log("load-ns :cljs try-to-load-cljsjs-ns",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.bundled_cljsjs_ns_QMARK_.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns bundled-cljsjs-ns",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var root_path = "https://viebel.github.io/cljsjs-hosted/cljsjs/";
var lib_name = klipse_clj.lang.clojure.io.cljsjs_libname.call(null,name);
var full_names = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[root_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[root_path,"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[root_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join(''),[root_path,"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join('')], null);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,full_names,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__18733,src_cb){
var map__18734 = p__18733;
var map__18734__$1 = (((((!((map__18734 == null))))?(((((map__18734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18734):map__18734);
var args = map__18734__$1;
var name = cljs.core.get.call(null,map__18734__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__18734__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__18734__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"external-libs: ",external_libs);
} else {
}

var load_ns_skip_cache = ((function (map__18734,map__18734__$1,args,name,path,try_cache_QMARK_){
return (function (){
return klipse_clj.lang.clojure.io.load_ns.call(null,external_libs,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),false),src_cb);
});})(map__18734,map__18734__$1,args,name,path,try_cache_QMARK_))
;
if(cljs.core.truth_(klipse_clj.lang.clojure.io.skip_ns_cljs.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs skipping",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(klipse_clj.lang.clojure.io.bundled_ns_QMARK_.call(null,name)){
var _ = ((klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)?console.log("load-ns :cljs bundled",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):null);
var filenames = cljs.core.map.call(null,((function (_,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_){
return (function (p1__18732_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18732_SHARP_),".cache.json"].join('');
});})(_,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,_,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,_,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_){
return (function (state_18748){
var state_val_18749 = (state_18748[(1)]);
if((state_val_18749 === (1))){
var inst_18736 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_18748__$1 = state_18748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18748__$1,(2),inst_18736);
} else {
if((state_val_18749 === (2))){
var inst_18738 = (state_18748[(2)]);
var state_18748__$1 = state_18748;
if(cljs.core.truth_(inst_18738)){
var statearr_18750_18801 = state_18748__$1;
(statearr_18750_18801[(1)] = (3));

} else {
var statearr_18751_18802 = state_18748__$1;
(statearr_18751_18802[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18749 === (3))){
var state_18748__$1 = state_18748;
var statearr_18752_18803 = state_18748__$1;
(statearr_18752_18803[(2)] = null);

(statearr_18752_18803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18749 === (4))){
var inst_18741 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_18742 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_18743 = cljs.core.PersistentHashMap.fromArrays(inst_18741,inst_18742);
var inst_18744 = src_cb.call(null,inst_18743);
var state_18748__$1 = state_18748;
var statearr_18753_18804 = state_18748__$1;
(statearr_18753_18804[(2)] = inst_18744);

(statearr_18753_18804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18749 === (5))){
var inst_18746 = (state_18748[(2)]);
var state_18748__$1 = state_18748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18748__$1,inst_18746);
} else {
return null;
}
}
}
}
}
});})(c__15634__auto__,_,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_))
;
return ((function (switch__15539__auto__,c__15634__auto__,_,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15540__auto____0 = (function (){
var statearr_18754 = [null,null,null,null,null,null,null];
(statearr_18754[(0)] = klipse_clj$lang$clojure$io$state_machine__15540__auto__);

(statearr_18754[(1)] = (1));

return statearr_18754;
});
var klipse_clj$lang$clojure$io$state_machine__15540__auto____1 = (function (state_18748){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_18748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e18755){if((e18755 instanceof Object)){
var ex__15543__auto__ = e18755;
var statearr_18756_18805 = state_18748;
(statearr_18756_18805[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18806 = state_18748;
state_18748 = G__18806;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15540__auto__ = function(state_18748){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15540__auto____1.call(this,state_18748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15540__auto____0;
klipse_clj$lang$clojure$io$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15540__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,_,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_))
})();
var state__15636__auto__ = (function (){var statearr_18757 = f__15635__auto__.call(null);
(statearr_18757[(6)] = c__15634__auto__);

return statearr_18757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,_,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_))
);

return c__15634__auto__;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = try_cache_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_.call(null,name);
} else {
return and__4120__auto__;
}
})())){
return klipse_clj.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,false,load_ns_skip_cache);
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

var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,prefix,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,prefix,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_){
return (function (state_18768){
var state_val_18769 = (state_18768[(1)]);
if((state_val_18769 === (1))){
var inst_18758 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_18768__$1 = state_18768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18768__$1,(2),inst_18758);
} else {
if((state_val_18769 === (2))){
var inst_18760 = (state_18768[(2)]);
var state_18768__$1 = state_18768;
if(cljs.core.truth_(inst_18760)){
var statearr_18770_18807 = state_18768__$1;
(statearr_18770_18807[(1)] = (3));

} else {
var statearr_18771_18808 = state_18768__$1;
(statearr_18771_18808[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (3))){
var state_18768__$1 = state_18768;
var statearr_18772_18809 = state_18768__$1;
(statearr_18772_18809[(2)] = null);

(statearr_18772_18809[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (4))){
var inst_18763 = [prefix,".js"].join('');
var inst_18764 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_18763,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_18768__$1 = state_18768;
var statearr_18773_18810 = state_18768__$1;
(statearr_18773_18810[(2)] = inst_18764);

(statearr_18773_18810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18769 === (5))){
var inst_18766 = (state_18768[(2)]);
var state_18768__$1 = state_18768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18768__$1,inst_18766);
} else {
return null;
}
}
}
}
}
});})(c__15634__auto__,prefix,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_))
;
return ((function (switch__15539__auto__,c__15634__auto__,prefix,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15540__auto____0 = (function (){
var statearr_18774 = [null,null,null,null,null,null,null];
(statearr_18774[(0)] = klipse_clj$lang$clojure$io$state_machine__15540__auto__);

(statearr_18774[(1)] = (1));

return statearr_18774;
});
var klipse_clj$lang$clojure$io$state_machine__15540__auto____1 = (function (state_18768){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_18768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e18775){if((e18775 instanceof Object)){
var ex__15543__auto__ = e18775;
var statearr_18776_18811 = state_18768;
(statearr_18776_18811[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18812 = state_18768;
state_18768 = G__18812;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15540__auto__ = function(state_18768){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15540__auto____1.call(this,state_18768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15540__auto____0;
klipse_clj$lang$clojure$io$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15540__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,prefix,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_))
})();
var state__15636__auto__ = (function (){var statearr_18777 = f__15635__auto__.call(null);
(statearr_18777[(6)] = c__15634__auto__);

return statearr_18777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,prefix,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_))
);

return c__15634__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_){
return (function (state_18791){
var state_val_18792 = (state_18791[(1)]);
if((state_val_18792 === (1))){
var inst_18778 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_18791__$1 = state_18791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18791__$1,(2),inst_18778);
} else {
if((state_val_18792 === (2))){
var inst_18780 = (state_18791[(2)]);
var state_18791__$1 = state_18791;
if(cljs.core.truth_(inst_18780)){
var statearr_18793_18813 = state_18791__$1;
(statearr_18793_18813[(1)] = (3));

} else {
var statearr_18794_18814 = state_18791__$1;
(statearr_18794_18814[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18792 === (3))){
var state_18791__$1 = state_18791;
var statearr_18795_18815 = state_18791__$1;
(statearr_18795_18815[(2)] = null);

(statearr_18795_18815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18792 === (4))){
var inst_18783 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18784 = [".js"];
var inst_18785 = (new cljs.core.PersistentVector(null,1,(5),inst_18783,inst_18784,null));
var inst_18786 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_18785,path);
var inst_18787 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_18786,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_18791__$1 = state_18791;
var statearr_18796_18816 = state_18791__$1;
(statearr_18796_18816[(2)] = inst_18787);

(statearr_18796_18816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18792 === (5))){
var inst_18789 = (state_18791[(2)]);
var state_18791__$1 = state_18791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18791__$1,inst_18789);
} else {
return null;
}
}
}
}
}
});})(c__15634__auto__,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_))
;
return ((function (switch__15539__auto__,c__15634__auto__,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15540__auto____0 = (function (){
var statearr_18797 = [null,null,null,null,null,null,null];
(statearr_18797[(0)] = klipse_clj$lang$clojure$io$state_machine__15540__auto__);

(statearr_18797[(1)] = (1));

return statearr_18797;
});
var klipse_clj$lang$clojure$io$state_machine__15540__auto____1 = (function (state_18791){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_18791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e18798){if((e18798 instanceof Object)){
var ex__15543__auto__ = e18798;
var statearr_18799_18817 = state_18791;
(statearr_18799_18817[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18818 = state_18791;
state_18791 = G__18818;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15540__auto__ = function(state_18791){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15540__auto____1.call(this,state_18791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15540__auto____0;
klipse_clj$lang$clojure$io$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15540__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_))
})();
var state__15636__auto__ = (function (){var statearr_18800 = f__15635__auto__.call(null);
(statearr_18800[(6)] = c__15634__auto__);

return statearr_18800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,filenames,load_ns_skip_cache,map__18734,map__18734__$1,args,name,path,try_cache_QMARK_))
);

return c__15634__auto__;
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
var _last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,"",cljs.core.take_last.call(null,(2),parts))], null));
return clojure.string.join.call(null,"/",new_parts);
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__18820,src_cb){
var map__18821 = p__18820;
var map__18821__$1 = (((((!((map__18821 == null))))?(((((map__18821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18821):map__18821);
var name = cljs.core.get.call(null,map__18821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__18821__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj__18170__auto__ = goog;
var f__18171__auto__ = (function (){var obj18823 = obj__18170__auto__;
var k18824 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18823,k18824)){
return (obj18823[k18824]);
} else {
return null;
}
})();
return f__18171__auto__.call(obj__18170__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__18821,map__18821__$1,name,path){
return (function (p1__18819_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18819_SHARP_),".js"].join('');
});})(closure_github_path,map__18821,map__18821__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
