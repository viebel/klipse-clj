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
return (function (_,p__18369,_src_cb){
var map__18370 = p__18369;
var map__18370__$1 = (((((!((map__18370 == null))))?(((((map__18370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18370):map__18370);
var name = cljs.core.get.call(null,map__18370__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__18370__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__18370__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var len__4730__auto___18497 = arguments.length;
var i__4731__auto___18498 = (0);
while(true){
if((i__4731__auto___18498 < len__4730__auto___18497)){
args__4736__auto__.push((arguments[i__4731__auto___18498]));

var G__18499 = (i__4731__auto___18498 + (1));
i__4731__auto___18498 = G__18499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__18377){
var map__18378 = p__18377;
var map__18378__$1 = (((((!((map__18378 == null))))?(((((map__18378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18378):map__18378);
var transform = cljs.core.get.call(null,map__18378__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__18378__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key));
} else {
}

var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__,map__18378,map__18378__$1,transform,can_recover_QMARK_){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__,map__18378,map__18378__$1,transform,can_recover_QMARK_){
return (function (state_18450){
var state_val_18451 = (state_18450[(1)]);
if((state_val_18451 === (7))){
var inst_18392 = (state_18450[(7)]);
var inst_18392__$1 = (state_18450[(2)]);
var inst_18394 = (inst_18392__$1 == null);
var inst_18395 = cljs.core.not.call(null,inst_18394);
var state_18450__$1 = (function (){var statearr_18452 = state_18450;
(statearr_18452[(7)] = inst_18392__$1);

return statearr_18452;
})();
if(inst_18395){
var statearr_18453_18500 = state_18450__$1;
(statearr_18453_18500[(1)] = (8));

} else {
var statearr_18454_18501 = state_18450__$1;
(statearr_18454_18501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (20))){
var inst_18385 = (state_18450[(8)]);
var inst_18419 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang);
var inst_18420 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key);
var inst_18421 = console.info("file loaded successfully",inst_18419,inst_18420,inst_18385);
var state_18450__$1 = state_18450;
var statearr_18455_18502 = state_18450__$1;
(statearr_18455_18502[(2)] = inst_18421);

(statearr_18455_18502[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (27))){
var inst_18444 = src_cb.call(null,null);
var state_18450__$1 = state_18450;
var statearr_18456_18503 = state_18450__$1;
(statearr_18456_18503[(2)] = inst_18444);

(statearr_18456_18503[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (1))){
var inst_18380 = filenames;
var state_18450__$1 = (function (){var statearr_18457 = state_18450;
(statearr_18457[(9)] = inst_18380);

return statearr_18457;
})();
var statearr_18458_18504 = state_18450__$1;
(statearr_18458_18504[(2)] = null);

(statearr_18458_18504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (24))){
var state_18450__$1 = state_18450;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_18459_18505 = state_18450__$1;
(statearr_18459_18505[(1)] = (26));

} else {
var statearr_18460_18506 = state_18450__$1;
(statearr_18460_18506[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (4))){
var inst_18380 = (state_18450[(9)]);
var inst_18385 = (state_18450[(8)]);
var inst_18385__$1 = cljs.core.first.call(null,inst_18380);
var inst_18386 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_18385__$1);
var inst_18387 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_18388 = [false];
var inst_18389 = cljs.core.PersistentHashMap.fromArrays(inst_18387,inst_18388);
var inst_18390 = cljs_http.client.get.call(null,inst_18386,inst_18389);
var state_18450__$1 = (function (){var statearr_18461 = state_18450;
(statearr_18461[(8)] = inst_18385__$1);

return statearr_18461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18450__$1,(7),inst_18390);
} else {
if((state_val_18451 === (15))){
var inst_18392 = (state_18450[(7)]);
var state_18450__$1 = state_18450;
var statearr_18462_18507 = state_18450__$1;
(statearr_18462_18507[(2)] = inst_18392);

(statearr_18462_18507[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (21))){
var state_18450__$1 = state_18450;
var statearr_18463_18508 = state_18450__$1;
(statearr_18463_18508[(2)] = null);

(statearr_18463_18508[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (13))){
var inst_18405 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
var statearr_18464_18509 = state_18450__$1;
(statearr_18464_18509[(2)] = inst_18405);

(statearr_18464_18509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (22))){
var inst_18415 = (state_18450[(10)]);
var inst_18385 = (state_18450[(8)]);
var inst_18424 = (state_18450[(2)]);
var inst_18425 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_18426 = transform.call(null,inst_18415);
var inst_18427 = [lang,inst_18426,inst_18385];
var inst_18428 = cljs.core.PersistentHashMap.fromArrays(inst_18425,inst_18427);
var inst_18429 = src_cb.call(null,inst_18428);
var state_18450__$1 = (function (){var statearr_18465 = state_18450;
(statearr_18465[(11)] = inst_18424);

(statearr_18465[(12)] = inst_18429);

return statearr_18465;
})();
var statearr_18466_18510 = state_18450__$1;
(statearr_18466_18510[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_18466_18510[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (6))){
var inst_18437 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
var statearr_18467_18511 = state_18450__$1;
(statearr_18467_18511[(2)] = inst_18437);

(statearr_18467_18511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (28))){
var inst_18446 = (state_18450[(2)]);
var state_18450__$1 = (function (){var statearr_18468 = state_18450;
(statearr_18468[(13)] = inst_18446);

return statearr_18468;
})();
var statearr_18469_18512 = state_18450__$1;
(statearr_18469_18512[(2)] = false);

(statearr_18469_18512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (25))){
var inst_18448 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18450__$1,inst_18448);
} else {
if((state_val_18451 === (17))){
var state_18450__$1 = state_18450;
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
var statearr_18470_18513 = state_18450__$1;
(statearr_18470_18513[(1)] = (20));

} else {
var statearr_18471_18514 = state_18450__$1;
(statearr_18471_18514[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (3))){
var inst_18439 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18439)){
var statearr_18472_18515 = state_18450__$1;
(statearr_18472_18515[(1)] = (23));

} else {
var statearr_18473_18516 = state_18450__$1;
(statearr_18473_18516[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (12))){
var state_18450__$1 = state_18450;
var statearr_18474_18517 = state_18450__$1;
(statearr_18474_18517[(2)] = false);

(statearr_18474_18517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (2))){
var inst_18380 = (state_18450[(9)]);
var inst_18382 = cljs.core.seq.call(null,inst_18380);
var state_18450__$1 = state_18450;
if(inst_18382){
var statearr_18475_18518 = state_18450__$1;
(statearr_18475_18518[(1)] = (4));

} else {
var statearr_18476_18519 = state_18450__$1;
(statearr_18476_18519[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (23))){
var state_18450__$1 = state_18450;
var statearr_18477_18520 = state_18450__$1;
(statearr_18477_18520[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_18477_18520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (19))){
var inst_18434 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
var statearr_18478_18521 = state_18450__$1;
(statearr_18478_18521[(2)] = inst_18434);

(statearr_18478_18521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (11))){
var state_18450__$1 = state_18450;
var statearr_18479_18522 = state_18450__$1;
(statearr_18479_18522[(2)] = true);

(statearr_18479_18522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (9))){
var state_18450__$1 = state_18450;
var statearr_18480_18523 = state_18450__$1;
(statearr_18480_18523[(2)] = false);

(statearr_18480_18523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (5))){
var state_18450__$1 = state_18450;
var statearr_18481_18524 = state_18450__$1;
(statearr_18481_18524[(2)] = null);

(statearr_18481_18524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (14))){
var inst_18392 = (state_18450[(7)]);
var inst_18410 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18392);
var state_18450__$1 = state_18450;
var statearr_18482_18525 = state_18450__$1;
(statearr_18482_18525[(2)] = inst_18410);

(statearr_18482_18525[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (26))){
var state_18450__$1 = state_18450;
var statearr_18483_18526 = state_18450__$1;
(statearr_18483_18526[(2)] = null);

(statearr_18483_18526[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (16))){
var inst_18413 = (state_18450[(2)]);
var inst_18414 = cljs.core.get.call(null,inst_18413,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18415 = cljs.core.get.call(null,inst_18413,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18416 = cljs.core._EQ_.call(null,(200),inst_18414);
var state_18450__$1 = (function (){var statearr_18484 = state_18450;
(statearr_18484[(10)] = inst_18415);

return statearr_18484;
})();
if(inst_18416){
var statearr_18485_18527 = state_18450__$1;
(statearr_18485_18527[(1)] = (17));

} else {
var statearr_18486_18528 = state_18450__$1;
(statearr_18486_18528[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (10))){
var inst_18408 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18408)){
var statearr_18487_18529 = state_18450__$1;
(statearr_18487_18529[(1)] = (14));

} else {
var statearr_18488_18530 = state_18450__$1;
(statearr_18488_18530[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (18))){
var inst_18380 = (state_18450[(9)]);
var inst_18431 = cljs.core.rest.call(null,inst_18380);
var inst_18380__$1 = inst_18431;
var state_18450__$1 = (function (){var statearr_18489 = state_18450;
(statearr_18489[(9)] = inst_18380__$1);

return statearr_18489;
})();
var statearr_18490_18531 = state_18450__$1;
(statearr_18490_18531[(2)] = null);

(statearr_18490_18531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18451 === (8))){
var inst_18392 = (state_18450[(7)]);
var inst_18397 = inst_18392.cljs$lang$protocol_mask$partition0$;
var inst_18398 = (inst_18397 & (64));
var inst_18399 = inst_18392.cljs$core$ISeq$;
var inst_18400 = (cljs.core.PROTOCOL_SENTINEL === inst_18399);
var inst_18401 = ((inst_18398) || (inst_18400));
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18401)){
var statearr_18491_18532 = state_18450__$1;
(statearr_18491_18532[(1)] = (11));

} else {
var statearr_18492_18533 = state_18450__$1;
(statearr_18492_18533[(1)] = (12));

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
});})(c__15631__auto__,map__18378,map__18378__$1,transform,can_recover_QMARK_))
;
return ((function (switch__15536__auto__,c__15631__auto__,map__18378,map__18378__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15537__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15537__auto____0 = (function (){
var statearr_18493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18493[(0)] = klipse_clj$lang$clojure$io$state_machine__15537__auto__);

(statearr_18493[(1)] = (1));

return statearr_18493;
});
var klipse_clj$lang$clojure$io$state_machine__15537__auto____1 = (function (state_18450){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_18450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e18494){if((e18494 instanceof Object)){
var ex__15540__auto__ = e18494;
var statearr_18495_18534 = state_18450;
(statearr_18495_18534[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18535 = state_18450;
state_18450 = G__18535;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15537__auto__ = function(state_18450){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15537__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15537__auto____1.call(this,state_18450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15537__auto____0;
klipse_clj$lang$clojure$io$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15537__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__,map__18378,map__18378__$1,transform,can_recover_QMARK_))
})();
var state__15633__auto__ = (function (){var statearr_18496 = f__15632__auto__.call(null);
(statearr_18496[(6)] = c__15631__auto__);

return statearr_18496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__,map__18378,map__18378__$1,transform,can_recover_QMARK_))
);

return c__15631__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq18372){
var G__18373 = cljs.core.first.call(null,seq18372);
var seq18372__$1 = cljs.core.next.call(null,seq18372);
var G__18374 = cljs.core.first.call(null,seq18372__$1);
var seq18372__$2 = cljs.core.next.call(null,seq18372__$1);
var G__18375 = cljs.core.first.call(null,seq18372__$2);
var seq18372__$3 = cljs.core.next.call(null,seq18372__$2);
var G__18376 = cljs.core.first.call(null,seq18372__$3);
var seq18372__$4 = cljs.core.next.call(null,seq18372__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18373,G__18374,G__18375,G__18376,seq18372__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4523__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__18536(s__18537){
return (new cljs.core.LazySeq(null,(function (){
var s__18537__$1 = s__18537;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18537__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var lib = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__18537__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__18536_$_iter__18538(s__18539){
return (new cljs.core.LazySeq(null,((function (s__18537__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__18539__$1 = s__18539;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__18539__$1);
if(temp__5720__auto____$1){
var s__18539__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18539__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18539__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18541 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18540 = (0);
while(true){
if((i__18540 < size__4522__auto__)){
var suffix = cljs.core._nth.call(null,c__4521__auto__,i__18540);
cljs.core.chunk_append.call(null,b__18541,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__18542 = (i__18540 + (1));
i__18540 = G__18542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18541),klipse_clj$lang$clojure$io$external_libs_files_$_iter__18536_$_iter__18538.call(null,cljs.core.chunk_rest.call(null,s__18539__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18541),null);
}
} else {
var suffix = cljs.core.first.call(null,s__18539__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__18536_$_iter__18538.call(null,cljs.core.rest.call(null,s__18539__$2)));
}
} else {
return null;
}
break;
}
});})(s__18537__$1,lib,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__18537__$1,lib,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,suffixes));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__18536.call(null,cljs.core.rest.call(null,s__18537__$1)));
} else {
var G__18543 = cljs.core.rest.call(null,s__18537__$1);
s__18537__$1 = G__18543;
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

var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__){
return (function (state_18588){
var state_val_18589 = (state_18588[(1)]);
if((state_val_18589 === (7))){
var inst_18567 = (state_18588[(7)]);
var inst_18560 = (state_18588[(8)]);
var inst_18576 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_18577 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_18567);
var inst_18578 = klipse_clj.lang.clojure.io.edn.call(null,inst_18577);
var inst_18579 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_18560);
var inst_18580 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_18578,inst_18579];
var inst_18581 = cljs.core.PersistentHashMap.fromArrays(inst_18576,inst_18580);
var inst_18582 = src_cb.call(null,inst_18581);
var state_18588__$1 = state_18588;
var statearr_18590_18606 = state_18588__$1;
(statearr_18590_18606[(2)] = inst_18582);

(statearr_18590_18606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (1))){
var inst_18545 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_18588__$1 = (function (){var statearr_18591 = state_18588;
(statearr_18591[(9)] = inst_18545);

return statearr_18591;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_18592_18607 = state_18588__$1;
(statearr_18592_18607[(1)] = (2));

} else {
var statearr_18593_18608 = state_18588__$1;
(statearr_18593_18608[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (4))){
var inst_18549 = (state_18588[(10)]);
var inst_18551 = (state_18588[(11)]);
var inst_18545 = (state_18588[(9)]);
var inst_18552 = (state_18588[(12)]);
var inst_18549__$1 = (state_18588[(2)]);
var inst_18550 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_18551__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18550),"/"].join('');
var inst_18552__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18551__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18549__$1),".js"].join('');
var inst_18553 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18551__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18549__$1),".cache.json"].join('');
var inst_18554 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_18552__$1);
var inst_18555 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_18556 = [false];
var inst_18557 = cljs.core.PersistentHashMap.fromArrays(inst_18555,inst_18556);
var inst_18558 = cljs_http.client.get.call(null,inst_18554,inst_18557);
var state_18588__$1 = (function (){var statearr_18594 = state_18588;
(statearr_18594[(13)] = inst_18553);

(statearr_18594[(10)] = inst_18549__$1);

(statearr_18594[(11)] = inst_18551__$1);

(statearr_18594[(12)] = inst_18552__$1);

return statearr_18594;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18588__$1,(5),inst_18558);
} else {
if((state_val_18589 === (6))){
var inst_18567 = (state_18588[(7)]);
var inst_18553 = (state_18588[(13)]);
var inst_18549 = (state_18588[(10)]);
var inst_18551 = (state_18588[(11)]);
var inst_18545 = (state_18588[(9)]);
var inst_18552 = (state_18588[(12)]);
var inst_18560 = (state_18588[(8)]);
var inst_18567__$1 = (state_18588[(2)]);
var inst_18568 = (function (){var nn = inst_18545;
var suffix = inst_18549;
var root = inst_18551;
var src_filename = inst_18552;
var cache_filename = inst_18553;
var src = inst_18560;
var cache = inst_18567__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_18567,inst_18553,inst_18549,inst_18551,inst_18545,inst_18552,inst_18560,inst_18567__$1,state_val_18589,c__15631__auto__){
return (function (p1__18544_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__18544_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_18567,inst_18553,inst_18549,inst_18551,inst_18545,inst_18552,inst_18560,inst_18567__$1,state_val_18589,c__15631__auto__))
})();
var inst_18569 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18570 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_18567__$1);
var inst_18571 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_18560);
var inst_18572 = [inst_18570,inst_18571];
var inst_18573 = (new cljs.core.PersistentVector(null,2,(5),inst_18569,inst_18572,null));
var inst_18574 = cljs.core.every_QMARK_.call(null,inst_18568,inst_18573);
var state_18588__$1 = (function (){var statearr_18595 = state_18588;
(statearr_18595[(7)] = inst_18567__$1);

return statearr_18595;
})();
if(inst_18574){
var statearr_18596_18609 = state_18588__$1;
(statearr_18596_18609[(1)] = (7));

} else {
var statearr_18597_18610 = state_18588__$1;
(statearr_18597_18610[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (3))){
var state_18588__$1 = state_18588;
var statearr_18598_18611 = state_18588__$1;
(statearr_18598_18611[(2)] = "");

(statearr_18598_18611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (2))){
var state_18588__$1 = state_18588;
var statearr_18599_18612 = state_18588__$1;
(statearr_18599_18612[(2)] = "$macros");

(statearr_18599_18612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18589 === (9))){
var inst_18586 = (state_18588[(2)]);
var state_18588__$1 = state_18588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18588__$1,inst_18586);
} else {
if((state_val_18589 === (5))){
var inst_18553 = (state_18588[(13)]);
var inst_18560 = (state_18588[(2)]);
var inst_18561 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_18553);
var inst_18562 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_18563 = [false];
var inst_18564 = cljs.core.PersistentHashMap.fromArrays(inst_18562,inst_18563);
var inst_18565 = cljs_http.client.get.call(null,inst_18561,inst_18564);
var state_18588__$1 = (function (){var statearr_18600 = state_18588;
(statearr_18600[(8)] = inst_18560);

return statearr_18600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18588__$1,(6),inst_18565);
} else {
if((state_val_18589 === (8))){
var inst_18584 = on_failure_cb.call(null);
var state_18588__$1 = state_18588;
var statearr_18601_18613 = state_18588__$1;
(statearr_18601_18613[(2)] = inst_18584);

(statearr_18601_18613[(1)] = (9));


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
});})(c__15631__auto__))
;
return ((function (switch__15536__auto__,c__15631__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto____0 = (function (){
var statearr_18602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18602[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto__);

(statearr_18602[(1)] = (1));

return statearr_18602;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto____1 = (function (state_18588){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_18588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e18603){if((e18603 instanceof Object)){
var ex__15540__auto__ = e18603;
var statearr_18604_18614 = state_18588;
(statearr_18604_18614[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18615 = state_18588;
state_18588 = G__18615;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto__ = function(state_18588){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto____1.call(this,state_18588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__))
})();
var state__15633__auto__ = (function (){var statearr_18605 = f__15632__auto__.call(null);
(statearr_18605[(6)] = c__15631__auto__);

return statearr_18605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__))
);

return c__15631__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__){
return (function (state_18655){
var state_val_18656 = (state_18655[(1)]);
if((state_val_18656 === (7))){
var state_18655__$1 = state_18655;
var statearr_18657_18679 = state_18655__$1;
(statearr_18657_18679[(2)] = false);

(statearr_18657_18679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18656 === (1))){
var inst_18617 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_18618 = [false];
var inst_18619 = cljs.core.PersistentHashMap.fromArrays(inst_18617,inst_18618);
var inst_18620 = cljs_http.client.get.call(null,filename,inst_18619);
var state_18655__$1 = state_18655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18655__$1,(2),inst_18620);
} else {
if((state_val_18656 === (4))){
var state_18655__$1 = state_18655;
var statearr_18658_18680 = state_18655__$1;
(statearr_18658_18680[(2)] = false);

(statearr_18658_18680[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18656 === (13))){
var inst_18651 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_18655__$1 = state_18655;
var statearr_18659_18681 = state_18655__$1;
(statearr_18659_18681[(2)] = inst_18651);

(statearr_18659_18681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18656 === (6))){
var state_18655__$1 = state_18655;
var statearr_18660_18682 = state_18655__$1;
(statearr_18660_18682[(2)] = true);

(statearr_18660_18682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18656 === (3))){
var inst_18622 = (state_18655[(7)]);
var inst_18627 = inst_18622.cljs$lang$protocol_mask$partition0$;
var inst_18628 = (inst_18627 & (64));
var inst_18629 = inst_18622.cljs$core$ISeq$;
var inst_18630 = (cljs.core.PROTOCOL_SENTINEL === inst_18629);
var inst_18631 = ((inst_18628) || (inst_18630));
var state_18655__$1 = state_18655;
if(cljs.core.truth_(inst_18631)){
var statearr_18661_18683 = state_18655__$1;
(statearr_18661_18683[(1)] = (6));

} else {
var statearr_18662_18684 = state_18655__$1;
(statearr_18662_18684[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18656 === (12))){
var inst_18644 = (state_18655[(8)]);
var inst_18648 = klipse_clj.lang.clojure.io.edn.call(null,inst_18644);
var inst_18649 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_18648);
var state_18655__$1 = state_18655;
var statearr_18663_18685 = state_18655__$1;
(statearr_18663_18685[(2)] = inst_18649);

(statearr_18663_18685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18656 === (2))){
var inst_18622 = (state_18655[(7)]);
var inst_18622__$1 = (state_18655[(2)]);
var inst_18624 = (inst_18622__$1 == null);
var inst_18625 = cljs.core.not.call(null,inst_18624);
var state_18655__$1 = (function (){var statearr_18664 = state_18655;
(statearr_18664[(7)] = inst_18622__$1);

return statearr_18664;
})();
if(inst_18625){
var statearr_18665_18686 = state_18655__$1;
(statearr_18665_18686[(1)] = (3));

} else {
var statearr_18666_18687 = state_18655__$1;
(statearr_18666_18687[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18656 === (11))){
var inst_18643 = (state_18655[(2)]);
var inst_18644 = cljs.core.get.call(null,inst_18643,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18645 = cljs.core.get.call(null,inst_18643,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18646 = cljs.core._EQ_.call(null,(200),inst_18645);
var state_18655__$1 = (function (){var statearr_18667 = state_18655;
(statearr_18667[(8)] = inst_18644);

return statearr_18667;
})();
if(inst_18646){
var statearr_18668_18688 = state_18655__$1;
(statearr_18668_18688[(1)] = (12));

} else {
var statearr_18669_18689 = state_18655__$1;
(statearr_18669_18689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18656 === (9))){
var inst_18622 = (state_18655[(7)]);
var inst_18640 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18622);
var state_18655__$1 = state_18655;
var statearr_18670_18690 = state_18655__$1;
(statearr_18670_18690[(2)] = inst_18640);

(statearr_18670_18690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18656 === (5))){
var inst_18638 = (state_18655[(2)]);
var state_18655__$1 = state_18655;
if(cljs.core.truth_(inst_18638)){
var statearr_18671_18691 = state_18655__$1;
(statearr_18671_18691[(1)] = (9));

} else {
var statearr_18672_18692 = state_18655__$1;
(statearr_18672_18692[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18656 === (14))){
var inst_18653 = (state_18655[(2)]);
var state_18655__$1 = state_18655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18655__$1,inst_18653);
} else {
if((state_val_18656 === (10))){
var inst_18622 = (state_18655[(7)]);
var state_18655__$1 = state_18655;
var statearr_18673_18693 = state_18655__$1;
(statearr_18673_18693[(2)] = inst_18622);

(statearr_18673_18693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18656 === (8))){
var inst_18635 = (state_18655[(2)]);
var state_18655__$1 = state_18655;
var statearr_18674_18694 = state_18655__$1;
(statearr_18674_18694[(2)] = inst_18635);

(statearr_18674_18694[(1)] = (5));


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
});})(c__15631__auto__))
;
return ((function (switch__15536__auto__,c__15631__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto____0 = (function (){
var statearr_18675 = [null,null,null,null,null,null,null,null,null];
(statearr_18675[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto__);

(statearr_18675[(1)] = (1));

return statearr_18675;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto____1 = (function (state_18655){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_18655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e18676){if((e18676 instanceof Object)){
var ex__15540__auto__ = e18676;
var statearr_18677_18695 = state_18655;
(statearr_18677_18695[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18696 = state_18655;
state_18655 = G__18696;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto__ = function(state_18655){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto____1.call(this,state_18655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__))
})();
var state__15633__auto__ = (function (){var statearr_18678 = f__15632__auto__.call(null);
(statearr_18678[(6)] = c__15631__auto__);

return statearr_18678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__))
);

return c__15631__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__18697,src_cb_original){
var map__18698 = p__18697;
var map__18698__$1 = (((((!((map__18698 == null))))?(((((map__18698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18698):map__18698);
var args = map__18698__$1;
var name = cljs.core.get.call(null,map__18698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__18698__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__18698__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
var load_ns_skip_cache = ((function (map__18698,map__18698__$1,args,name,path,try_cache_QMARK_){
return (function (){
return klipse_clj.lang.clojure.io.load_ns.call(null,external_libs,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),false),src_cb_original);
});})(map__18698,map__18698__$1,args,name,path,try_cache_QMARK_))
;
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (load_ns_skip_cache,map__18698,map__18698__$1,args,name,path,try_cache_QMARK_){
return (function() { 
var G__18700__delegate = function (args__$1){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args__$1);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__18700 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__18701__i = 0, G__18701__a = new Array(arguments.length -  0);
while (G__18701__i < G__18701__a.length) {G__18701__a[G__18701__i] = arguments[G__18701__i + 0]; ++G__18701__i;}
  args__$1 = new cljs.core.IndexedSeq(G__18701__a,0,null);
} 
return G__18700__delegate.call(this,args__$1);};
G__18700.cljs$lang$maxFixedArity = 0;
G__18700.cljs$lang$applyTo = (function (arglist__18702){
var args__$1 = cljs.core.seq(arglist__18702);
return G__18700__delegate(args__$1);
});
G__18700.cljs$core$IFn$_invoke$arity$variadic = G__18700__delegate;
return G__18700;
})()
;})(load_ns_skip_cache,map__18698,map__18698__$1,args,name,path,try_cache_QMARK_))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (_external_libs,p__18704,src_cb){
var map__18705 = p__18704;
var map__18705__$1 = (((((!((map__18705 == null))))?(((((map__18705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18705):map__18705);
var path = cljs.core.get.call(null,map__18705__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__18705,map__18705__$1,path){
return (function (p1__18703_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18703_SHARP_)].join('');
});})(path__$1,map__18705,map__18705__$1,path))
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
if(cljs.core.truth_((function (){var or__4131__auto__ = klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_.call(null,name);
}
})())){
return false;
} else {
return (!(((function (){var obj__18167__auto__ = goog;
var f__18168__auto__ = (function (){var obj18707 = obj__18167__auto__;
var k18708 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18707,k18708)){
return (obj18707[k18708]);
} else {
return null;
}
})();
return f__18168__auto__.call(obj__18167__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)));
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
var obj18715 = window;
var k18716 = "React";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18715,k18716)){
return (obj18715[k18716]);
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
var obj18723 = window;
var k18724 = "ReactDOMServer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18723,k18724)){
return (obj18723[k18724]);
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
var obj18727 = window;
var k18728 = "ReactDOM";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18727,k18728)){
return (obj18727[k18728]);
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__18730,src_cb){
var map__18731 = p__18730;
var map__18731__$1 = (((((!((map__18731 == null))))?(((((map__18731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18731):map__18731);
var args = map__18731__$1;
var name = cljs.core.get.call(null,map__18731__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__18731__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__18731__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"external-libs: ",external_libs);
} else {
}

var load_ns_skip_cache = ((function (map__18731,map__18731__$1,args,name,path,try_cache_QMARK_){
return (function (){
return klipse_clj.lang.clojure.io.load_ns.call(null,external_libs,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),false),src_cb);
});})(map__18731,map__18731__$1,args,name,path,try_cache_QMARK_))
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
var filenames = cljs.core.map.call(null,((function (_,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_){
return (function (p1__18729_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18729_SHARP_),".cache.json"].join('');
});})(_,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__,_,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__,_,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_){
return (function (state_18745){
var state_val_18746 = (state_18745[(1)]);
if((state_val_18746 === (1))){
var inst_18733 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_18745__$1 = state_18745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18745__$1,(2),inst_18733);
} else {
if((state_val_18746 === (2))){
var inst_18735 = (state_18745[(2)]);
var state_18745__$1 = state_18745;
if(cljs.core.truth_(inst_18735)){
var statearr_18747_18798 = state_18745__$1;
(statearr_18747_18798[(1)] = (3));

} else {
var statearr_18748_18799 = state_18745__$1;
(statearr_18748_18799[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (3))){
var state_18745__$1 = state_18745;
var statearr_18749_18800 = state_18745__$1;
(statearr_18749_18800[(2)] = null);

(statearr_18749_18800[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (4))){
var inst_18738 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_18739 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_18740 = cljs.core.PersistentHashMap.fromArrays(inst_18738,inst_18739);
var inst_18741 = src_cb.call(null,inst_18740);
var state_18745__$1 = state_18745;
var statearr_18750_18801 = state_18745__$1;
(statearr_18750_18801[(2)] = inst_18741);

(statearr_18750_18801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (5))){
var inst_18743 = (state_18745[(2)]);
var state_18745__$1 = state_18745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18745__$1,inst_18743);
} else {
return null;
}
}
}
}
}
});})(c__15631__auto__,_,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_))
;
return ((function (switch__15536__auto__,c__15631__auto__,_,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15537__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15537__auto____0 = (function (){
var statearr_18751 = [null,null,null,null,null,null,null];
(statearr_18751[(0)] = klipse_clj$lang$clojure$io$state_machine__15537__auto__);

(statearr_18751[(1)] = (1));

return statearr_18751;
});
var klipse_clj$lang$clojure$io$state_machine__15537__auto____1 = (function (state_18745){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_18745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e18752){if((e18752 instanceof Object)){
var ex__15540__auto__ = e18752;
var statearr_18753_18802 = state_18745;
(statearr_18753_18802[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18803 = state_18745;
state_18745 = G__18803;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15537__auto__ = function(state_18745){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15537__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15537__auto____1.call(this,state_18745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15537__auto____0;
klipse_clj$lang$clojure$io$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15537__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__,_,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_))
})();
var state__15633__auto__ = (function (){var statearr_18754 = f__15632__auto__.call(null);
(statearr_18754[(6)] = c__15631__auto__);

return statearr_18754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__,_,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_))
);

return c__15631__auto__;
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

var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__,prefix,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__,prefix,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_){
return (function (state_18765){
var state_val_18766 = (state_18765[(1)]);
if((state_val_18766 === (1))){
var inst_18755 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_18765__$1 = state_18765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18765__$1,(2),inst_18755);
} else {
if((state_val_18766 === (2))){
var inst_18757 = (state_18765[(2)]);
var state_18765__$1 = state_18765;
if(cljs.core.truth_(inst_18757)){
var statearr_18767_18804 = state_18765__$1;
(statearr_18767_18804[(1)] = (3));

} else {
var statearr_18768_18805 = state_18765__$1;
(statearr_18768_18805[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (3))){
var state_18765__$1 = state_18765;
var statearr_18769_18806 = state_18765__$1;
(statearr_18769_18806[(2)] = null);

(statearr_18769_18806[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (4))){
var inst_18760 = [prefix,".js"].join('');
var inst_18761 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_18760,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_18765__$1 = state_18765;
var statearr_18770_18807 = state_18765__$1;
(statearr_18770_18807[(2)] = inst_18761);

(statearr_18770_18807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (5))){
var inst_18763 = (state_18765[(2)]);
var state_18765__$1 = state_18765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18765__$1,inst_18763);
} else {
return null;
}
}
}
}
}
});})(c__15631__auto__,prefix,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_))
;
return ((function (switch__15536__auto__,c__15631__auto__,prefix,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15537__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15537__auto____0 = (function (){
var statearr_18771 = [null,null,null,null,null,null,null];
(statearr_18771[(0)] = klipse_clj$lang$clojure$io$state_machine__15537__auto__);

(statearr_18771[(1)] = (1));

return statearr_18771;
});
var klipse_clj$lang$clojure$io$state_machine__15537__auto____1 = (function (state_18765){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_18765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e18772){if((e18772 instanceof Object)){
var ex__15540__auto__ = e18772;
var statearr_18773_18808 = state_18765;
(statearr_18773_18808[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18809 = state_18765;
state_18765 = G__18809;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15537__auto__ = function(state_18765){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15537__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15537__auto____1.call(this,state_18765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15537__auto____0;
klipse_clj$lang$clojure$io$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15537__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__,prefix,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_))
})();
var state__15633__auto__ = (function (){var statearr_18774 = f__15632__auto__.call(null);
(statearr_18774[(6)] = c__15631__auto__);

return statearr_18774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__,prefix,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_))
);

return c__15631__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_){
return (function (state_18788){
var state_val_18789 = (state_18788[(1)]);
if((state_val_18789 === (1))){
var inst_18775 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_18788__$1 = state_18788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18788__$1,(2),inst_18775);
} else {
if((state_val_18789 === (2))){
var inst_18777 = (state_18788[(2)]);
var state_18788__$1 = state_18788;
if(cljs.core.truth_(inst_18777)){
var statearr_18790_18810 = state_18788__$1;
(statearr_18790_18810[(1)] = (3));

} else {
var statearr_18791_18811 = state_18788__$1;
(statearr_18791_18811[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18789 === (3))){
var state_18788__$1 = state_18788;
var statearr_18792_18812 = state_18788__$1;
(statearr_18792_18812[(2)] = null);

(statearr_18792_18812[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18789 === (4))){
var inst_18780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18781 = [".js"];
var inst_18782 = (new cljs.core.PersistentVector(null,1,(5),inst_18780,inst_18781,null));
var inst_18783 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_18782,path);
var inst_18784 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_18783,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_18788__$1 = state_18788;
var statearr_18793_18813 = state_18788__$1;
(statearr_18793_18813[(2)] = inst_18784);

(statearr_18793_18813[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18789 === (5))){
var inst_18786 = (state_18788[(2)]);
var state_18788__$1 = state_18788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18788__$1,inst_18786);
} else {
return null;
}
}
}
}
}
});})(c__15631__auto__,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_))
;
return ((function (switch__15536__auto__,c__15631__auto__,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15537__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15537__auto____0 = (function (){
var statearr_18794 = [null,null,null,null,null,null,null];
(statearr_18794[(0)] = klipse_clj$lang$clojure$io$state_machine__15537__auto__);

(statearr_18794[(1)] = (1));

return statearr_18794;
});
var klipse_clj$lang$clojure$io$state_machine__15537__auto____1 = (function (state_18788){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_18788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e18795){if((e18795 instanceof Object)){
var ex__15540__auto__ = e18795;
var statearr_18796_18814 = state_18788;
(statearr_18796_18814[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18815 = state_18788;
state_18788 = G__18815;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15537__auto__ = function(state_18788){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15537__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15537__auto____1.call(this,state_18788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15537__auto____0;
klipse_clj$lang$clojure$io$state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15537__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_))
})();
var state__15633__auto__ = (function (){var statearr_18797 = f__15632__auto__.call(null);
(statearr_18797[(6)] = c__15631__auto__);

return statearr_18797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__,filenames,load_ns_skip_cache,map__18731,map__18731__$1,args,name,path,try_cache_QMARK_))
);

return c__15631__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__18817,src_cb){
var map__18818 = p__18817;
var map__18818__$1 = (((((!((map__18818 == null))))?(((((map__18818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18818):map__18818);
var name = cljs.core.get.call(null,map__18818__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__18818__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj__18167__auto__ = goog;
var f__18168__auto__ = (function (){var obj18820 = obj__18167__auto__;
var k18821 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj18820,k18821)){
return (obj18820[k18821]);
} else {
return null;
}
})();
return f__18168__auto__.call(obj__18167__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__18818,map__18818__$1,name,path){
return (function (p1__18816_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18816_SHARP_),".js"].join('');
});})(closure_github_path,map__18818,map__18818__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
