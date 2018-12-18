// Compiled by ClojureScript 1.10.439 {}
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
klipse_clj.lang.clojure.io.load_ns = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (_,p__24317,src_cb){
var map__24318 = p__24317;
var map__24318__$1 = (((((!((map__24318 == null))))?(((((map__24318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24318):map__24318);
var name = cljs.core.get.call(null,map__24318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__24318__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__24318__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
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
var args__4647__auto__ = [];
var len__4641__auto___24434 = arguments.length;
var i__4642__auto___24435 = (0);
while(true){
if((i__4642__auto___24435 < len__4641__auto___24434)){
args__4647__auto__.push((arguments[i__4642__auto___24435]));

var G__24436 = (i__4642__auto___24435 + (1));
i__4642__auto___24435 = G__24436;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((4) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4648__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__24325){
var map__24326 = p__24325;
var map__24326__$1 = (((((!((map__24326 == null))))?(((((map__24326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24326):map__24326);
var transform = cljs.core.get.call(null,map__24326__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__24326__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__,map__24326,map__24326__$1,transform,can_recover_QMARK_){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__,map__24326,map__24326__$1,transform,can_recover_QMARK_){
return (function (state_24391){
var state_val_24392 = (state_24391[(1)]);
if((state_val_24392 === (7))){
var inst_24340 = (state_24391[(7)]);
var inst_24340__$1 = (state_24391[(2)]);
var inst_24342 = (inst_24340__$1 == null);
var inst_24343 = cljs.core.not.call(null,inst_24342);
var state_24391__$1 = (function (){var statearr_24393 = state_24391;
(statearr_24393[(7)] = inst_24340__$1);

return statearr_24393;
})();
if(inst_24343){
var statearr_24394_24437 = state_24391__$1;
(statearr_24394_24437[(1)] = (8));

} else {
var statearr_24395_24438 = state_24391__$1;
(statearr_24395_24438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (20))){
var state_24391__$1 = state_24391;
var statearr_24396_24439 = state_24391__$1;
(statearr_24396_24439[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_24396_24439[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (1))){
var inst_24328 = filenames;
var state_24391__$1 = (function (){var statearr_24397 = state_24391;
(statearr_24397[(8)] = inst_24328);

return statearr_24397;
})();
var statearr_24398_24440 = state_24391__$1;
(statearr_24398_24440[(2)] = null);

(statearr_24398_24440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (24))){
var inst_24385 = src_cb.call(null,null);
var state_24391__$1 = state_24391;
var statearr_24399_24441 = state_24391__$1;
(statearr_24399_24441[(2)] = inst_24385);

(statearr_24399_24441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (4))){
var inst_24328 = (state_24391[(8)]);
var inst_24333 = (state_24391[(9)]);
var inst_24333__$1 = cljs.core.first.call(null,inst_24328);
var inst_24334 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_24333__$1);
var inst_24335 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_24336 = [false];
var inst_24337 = cljs.core.PersistentHashMap.fromArrays(inst_24335,inst_24336);
var inst_24338 = cljs_http.client.get.call(null,inst_24334,inst_24337);
var state_24391__$1 = (function (){var statearr_24400 = state_24391;
(statearr_24400[(9)] = inst_24333__$1);

return statearr_24400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24391__$1,(7),inst_24338);
} else {
if((state_val_24392 === (15))){
var inst_24340 = (state_24391[(7)]);
var state_24391__$1 = state_24391;
var statearr_24401_24442 = state_24391__$1;
(statearr_24401_24442[(2)] = inst_24340);

(statearr_24401_24442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (21))){
var state_24391__$1 = state_24391;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_24402_24443 = state_24391__$1;
(statearr_24402_24443[(1)] = (23));

} else {
var statearr_24403_24444 = state_24391__$1;
(statearr_24403_24444[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (13))){
var inst_24353 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24404_24445 = state_24391__$1;
(statearr_24404_24445[(2)] = inst_24353);

(statearr_24404_24445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (22))){
var inst_24389 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24391__$1,inst_24389);
} else {
if((state_val_24392 === (6))){
var inst_24378 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24405_24446 = state_24391__$1;
(statearr_24405_24446[(2)] = inst_24378);

(statearr_24405_24446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (25))){
var inst_24387 = (state_24391[(2)]);
var state_24391__$1 = (function (){var statearr_24406 = state_24391;
(statearr_24406[(10)] = inst_24387);

return statearr_24406;
})();
var statearr_24407_24447 = state_24391__$1;
(statearr_24407_24447[(2)] = false);

(statearr_24407_24447[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (17))){
var inst_24363 = (state_24391[(11)]);
var inst_24333 = (state_24391[(9)]);
var inst_24366 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_24367 = transform.call(null,inst_24363);
var inst_24368 = [lang,inst_24367,inst_24333];
var inst_24369 = cljs.core.PersistentHashMap.fromArrays(inst_24366,inst_24368);
var inst_24370 = src_cb.call(null,inst_24369);
var state_24391__$1 = (function (){var statearr_24408 = state_24391;
(statearr_24408[(12)] = inst_24370);

return statearr_24408;
})();
var statearr_24409_24448 = state_24391__$1;
(statearr_24409_24448[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_24409_24448[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (3))){
var inst_24380 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
if(cljs.core.truth_(inst_24380)){
var statearr_24410_24449 = state_24391__$1;
(statearr_24410_24449[(1)] = (20));

} else {
var statearr_24411_24450 = state_24391__$1;
(statearr_24411_24450[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (12))){
var state_24391__$1 = state_24391;
var statearr_24412_24451 = state_24391__$1;
(statearr_24412_24451[(2)] = false);

(statearr_24412_24451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (2))){
var inst_24328 = (state_24391[(8)]);
var inst_24330 = cljs.core.seq.call(null,inst_24328);
var state_24391__$1 = state_24391;
if(inst_24330){
var statearr_24413_24452 = state_24391__$1;
(statearr_24413_24452[(1)] = (4));

} else {
var statearr_24414_24453 = state_24391__$1;
(statearr_24414_24453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (23))){
var state_24391__$1 = state_24391;
var statearr_24415_24454 = state_24391__$1;
(statearr_24415_24454[(2)] = null);

(statearr_24415_24454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (19))){
var inst_24375 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24416_24455 = state_24391__$1;
(statearr_24416_24455[(2)] = inst_24375);

(statearr_24416_24455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (11))){
var state_24391__$1 = state_24391;
var statearr_24417_24456 = state_24391__$1;
(statearr_24417_24456[(2)] = true);

(statearr_24417_24456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (9))){
var state_24391__$1 = state_24391;
var statearr_24418_24457 = state_24391__$1;
(statearr_24418_24457[(2)] = false);

(statearr_24418_24457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (5))){
var state_24391__$1 = state_24391;
var statearr_24419_24458 = state_24391__$1;
(statearr_24419_24458[(2)] = null);

(statearr_24419_24458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (14))){
var inst_24340 = (state_24391[(7)]);
var inst_24358 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24340);
var state_24391__$1 = state_24391;
var statearr_24420_24459 = state_24391__$1;
(statearr_24420_24459[(2)] = inst_24358);

(statearr_24420_24459[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (16))){
var inst_24361 = (state_24391[(2)]);
var inst_24362 = cljs.core.get.call(null,inst_24361,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_24363 = cljs.core.get.call(null,inst_24361,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_24364 = cljs.core._EQ_.call(null,(200),inst_24362);
var state_24391__$1 = (function (){var statearr_24421 = state_24391;
(statearr_24421[(11)] = inst_24363);

return statearr_24421;
})();
if(inst_24364){
var statearr_24422_24460 = state_24391__$1;
(statearr_24422_24460[(1)] = (17));

} else {
var statearr_24423_24461 = state_24391__$1;
(statearr_24423_24461[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (10))){
var inst_24356 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
if(cljs.core.truth_(inst_24356)){
var statearr_24424_24462 = state_24391__$1;
(statearr_24424_24462[(1)] = (14));

} else {
var statearr_24425_24463 = state_24391__$1;
(statearr_24425_24463[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (18))){
var inst_24328 = (state_24391[(8)]);
var inst_24372 = cljs.core.rest.call(null,inst_24328);
var inst_24328__$1 = inst_24372;
var state_24391__$1 = (function (){var statearr_24426 = state_24391;
(statearr_24426[(8)] = inst_24328__$1);

return statearr_24426;
})();
var statearr_24427_24464 = state_24391__$1;
(statearr_24427_24464[(2)] = null);

(statearr_24427_24464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (8))){
var inst_24340 = (state_24391[(7)]);
var inst_24345 = inst_24340.cljs$lang$protocol_mask$partition0$;
var inst_24346 = (inst_24345 & (64));
var inst_24347 = inst_24340.cljs$core$ISeq$;
var inst_24348 = (cljs.core.PROTOCOL_SENTINEL === inst_24347);
var inst_24349 = ((inst_24346) || (inst_24348));
var state_24391__$1 = state_24391;
if(cljs.core.truth_(inst_24349)){
var statearr_24428_24465 = state_24391__$1;
(statearr_24428_24465[(1)] = (11));

} else {
var statearr_24429_24466 = state_24391__$1;
(statearr_24429_24466[(1)] = (12));

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
});})(c__19107__auto__,map__24326,map__24326__$1,transform,can_recover_QMARK_))
;
return ((function (switch__18940__auto__,c__19107__auto__,map__24326,map__24326__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__18941__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__18941__auto____0 = (function (){
var statearr_24430 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24430[(0)] = klipse_clj$lang$clojure$io$state_machine__18941__auto__);

(statearr_24430[(1)] = (1));

return statearr_24430;
});
var klipse_clj$lang$clojure$io$state_machine__18941__auto____1 = (function (state_24391){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_24391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e24431){if((e24431 instanceof Object)){
var ex__18944__auto__ = e24431;
var statearr_24432_24467 = state_24391;
(statearr_24432_24467[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24468 = state_24391;
state_24391 = G__24468;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__18941__auto__ = function(state_24391){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__18941__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__18941__auto____1.call(this,state_24391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__18941__auto____0;
klipse_clj$lang$clojure$io$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__18941__auto____1;
return klipse_clj$lang$clojure$io$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__,map__24326,map__24326__$1,transform,can_recover_QMARK_))
})();
var state__19109__auto__ = (function (){var statearr_24433 = f__19108__auto__.call(null);
(statearr_24433[(6)] = c__19107__auto__);

return statearr_24433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__,map__24326,map__24326__$1,transform,can_recover_QMARK_))
);

return c__19107__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq24320){
var G__24321 = cljs.core.first.call(null,seq24320);
var seq24320__$1 = cljs.core.next.call(null,seq24320);
var G__24322 = cljs.core.first.call(null,seq24320__$1);
var seq24320__$2 = cljs.core.next.call(null,seq24320__$1);
var G__24323 = cljs.core.first.call(null,seq24320__$2);
var seq24320__$3 = cljs.core.next.call(null,seq24320__$2);
var G__24324 = cljs.core.first.call(null,seq24320__$3);
var seq24320__$4 = cljs.core.next.call(null,seq24320__$3);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24321,G__24322,G__24323,G__24324,seq24320__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4434__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__24469(s__24470){
return (new cljs.core.LazySeq(null,(function (){
var s__24470__$1 = s__24470;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__24470__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var lib = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4430__auto__ = ((function (s__24470__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__24469_$_iter__24471(s__24472){
return (new cljs.core.LazySeq(null,((function (s__24470__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__24472__$1 = s__24472;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__24472__$1);
if(temp__5720__auto____$1){
var s__24472__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24472__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__24472__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__24474 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__24473 = (0);
while(true){
if((i__24473 < size__4433__auto__)){
var suffix = cljs.core._nth.call(null,c__4432__auto__,i__24473);
cljs.core.chunk_append.call(null,b__24474,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__24475 = (i__24473 + (1));
i__24473 = G__24475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24474),klipse_clj$lang$clojure$io$external_libs_files_$_iter__24469_$_iter__24471.call(null,cljs.core.chunk_rest.call(null,s__24472__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24474),null);
}
} else {
var suffix = cljs.core.first.call(null,s__24472__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__24469_$_iter__24471.call(null,cljs.core.rest.call(null,s__24472__$2)));
}
} else {
return null;
}
break;
}
});})(s__24470__$1,lib,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__24470__$1,lib,xs__6277__auto__,temp__5720__auto__))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,suffixes));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__24469.call(null,cljs.core.rest.call(null,s__24470__$1)));
} else {
var G__24476 = cljs.core.rest.call(null,s__24470__$1);
s__24470__$1 = G__24476;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,external_libs);
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

var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__){
return (function (state_24521){
var state_val_24522 = (state_24521[(1)]);
if((state_val_24522 === (7))){
var inst_24500 = (state_24521[(7)]);
var inst_24493 = (state_24521[(8)]);
var inst_24509 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_24510 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24500);
var inst_24511 = klipse_clj.lang.clojure.io.edn.call(null,inst_24510);
var inst_24512 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24493);
var inst_24513 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_24511,inst_24512];
var inst_24514 = cljs.core.PersistentHashMap.fromArrays(inst_24509,inst_24513);
var inst_24515 = src_cb.call(null,inst_24514);
var state_24521__$1 = state_24521;
var statearr_24523_24539 = state_24521__$1;
(statearr_24523_24539[(2)] = inst_24515);

(statearr_24523_24539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (1))){
var inst_24478 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_24521__$1 = (function (){var statearr_24524 = state_24521;
(statearr_24524[(9)] = inst_24478);

return statearr_24524;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_24525_24540 = state_24521__$1;
(statearr_24525_24540[(1)] = (2));

} else {
var statearr_24526_24541 = state_24521__$1;
(statearr_24526_24541[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (4))){
var inst_24484 = (state_24521[(10)]);
var inst_24482 = (state_24521[(11)]);
var inst_24478 = (state_24521[(9)]);
var inst_24485 = (state_24521[(12)]);
var inst_24482__$1 = (state_24521[(2)]);
var inst_24483 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_24484__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24483),"/"].join('');
var inst_24485__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24484__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24478),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24482__$1),".js"].join('');
var inst_24486 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24484__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24478),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24482__$1),".cache.json"].join('');
var inst_24487 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_24485__$1);
var inst_24488 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_24489 = [false];
var inst_24490 = cljs.core.PersistentHashMap.fromArrays(inst_24488,inst_24489);
var inst_24491 = cljs_http.client.get.call(null,inst_24487,inst_24490);
var state_24521__$1 = (function (){var statearr_24527 = state_24521;
(statearr_24527[(10)] = inst_24484__$1);

(statearr_24527[(11)] = inst_24482__$1);

(statearr_24527[(13)] = inst_24486);

(statearr_24527[(12)] = inst_24485__$1);

return statearr_24527;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24521__$1,(5),inst_24491);
} else {
if((state_val_24522 === (6))){
var inst_24484 = (state_24521[(10)]);
var inst_24482 = (state_24521[(11)]);
var inst_24478 = (state_24521[(9)]);
var inst_24500 = (state_24521[(7)]);
var inst_24486 = (state_24521[(13)]);
var inst_24493 = (state_24521[(8)]);
var inst_24485 = (state_24521[(12)]);
var inst_24500__$1 = (state_24521[(2)]);
var inst_24501 = (function (){var nn = inst_24478;
var suffix = inst_24482;
var root = inst_24484;
var src_filename = inst_24485;
var cache_filename = inst_24486;
var src = inst_24493;
var cache = inst_24500__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_24484,inst_24482,inst_24478,inst_24500,inst_24486,inst_24493,inst_24485,inst_24500__$1,state_val_24522,c__19107__auto__){
return (function (p1__24477_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__24477_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_24484,inst_24482,inst_24478,inst_24500,inst_24486,inst_24493,inst_24485,inst_24500__$1,state_val_24522,c__19107__auto__))
})();
var inst_24502 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24503 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_24500__$1);
var inst_24504 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_24493);
var inst_24505 = [inst_24503,inst_24504];
var inst_24506 = (new cljs.core.PersistentVector(null,2,(5),inst_24502,inst_24505,null));
var inst_24507 = cljs.core.every_QMARK_.call(null,inst_24501,inst_24506);
var state_24521__$1 = (function (){var statearr_24528 = state_24521;
(statearr_24528[(7)] = inst_24500__$1);

return statearr_24528;
})();
if(inst_24507){
var statearr_24529_24542 = state_24521__$1;
(statearr_24529_24542[(1)] = (7));

} else {
var statearr_24530_24543 = state_24521__$1;
(statearr_24530_24543[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (3))){
var state_24521__$1 = state_24521;
var statearr_24531_24544 = state_24521__$1;
(statearr_24531_24544[(2)] = "");

(statearr_24531_24544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (2))){
var state_24521__$1 = state_24521;
var statearr_24532_24545 = state_24521__$1;
(statearr_24532_24545[(2)] = "$macros");

(statearr_24532_24545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24522 === (9))){
var inst_24519 = (state_24521[(2)]);
var state_24521__$1 = state_24521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24521__$1,inst_24519);
} else {
if((state_val_24522 === (5))){
var inst_24486 = (state_24521[(13)]);
var inst_24493 = (state_24521[(2)]);
var inst_24494 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_24486);
var inst_24495 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_24496 = [false];
var inst_24497 = cljs.core.PersistentHashMap.fromArrays(inst_24495,inst_24496);
var inst_24498 = cljs_http.client.get.call(null,inst_24494,inst_24497);
var state_24521__$1 = (function (){var statearr_24533 = state_24521;
(statearr_24533[(8)] = inst_24493);

return statearr_24533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24521__$1,(6),inst_24498);
} else {
if((state_val_24522 === (8))){
var inst_24517 = src_cb.call(null,null);
var state_24521__$1 = state_24521;
var statearr_24534_24546 = state_24521__$1;
(statearr_24534_24546[(2)] = inst_24517);

(statearr_24534_24546[(1)] = (9));


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
});})(c__19107__auto__))
;
return ((function (switch__18940__auto__,c__19107__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto____0 = (function (){
var statearr_24535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24535[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto__);

(statearr_24535[(1)] = (1));

return statearr_24535;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto____1 = (function (state_24521){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_24521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e24536){if((e24536 instanceof Object)){
var ex__18944__auto__ = e24536;
var statearr_24537_24547 = state_24521;
(statearr_24537_24547[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24548 = state_24521;
state_24521 = G__24548;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto__ = function(state_24521){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto____1.call(this,state_24521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__))
})();
var state__19109__auto__ = (function (){var statearr_24538 = f__19108__auto__.call(null);
(statearr_24538[(6)] = c__19107__auto__);

return statearr_24538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__))
);

return c__19107__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__){
return (function (state_24588){
var state_val_24589 = (state_24588[(1)]);
if((state_val_24589 === (7))){
var state_24588__$1 = state_24588;
var statearr_24590_24612 = state_24588__$1;
(statearr_24590_24612[(2)] = false);

(statearr_24590_24612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (1))){
var inst_24550 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_24551 = [false];
var inst_24552 = cljs.core.PersistentHashMap.fromArrays(inst_24550,inst_24551);
var inst_24553 = cljs_http.client.get.call(null,filename,inst_24552);
var state_24588__$1 = state_24588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24588__$1,(2),inst_24553);
} else {
if((state_val_24589 === (4))){
var state_24588__$1 = state_24588;
var statearr_24591_24613 = state_24588__$1;
(statearr_24591_24613[(2)] = false);

(statearr_24591_24613[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (13))){
var inst_24584 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_24588__$1 = state_24588;
var statearr_24592_24614 = state_24588__$1;
(statearr_24592_24614[(2)] = inst_24584);

(statearr_24592_24614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (6))){
var state_24588__$1 = state_24588;
var statearr_24593_24615 = state_24588__$1;
(statearr_24593_24615[(2)] = true);

(statearr_24593_24615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (3))){
var inst_24555 = (state_24588[(7)]);
var inst_24560 = inst_24555.cljs$lang$protocol_mask$partition0$;
var inst_24561 = (inst_24560 & (64));
var inst_24562 = inst_24555.cljs$core$ISeq$;
var inst_24563 = (cljs.core.PROTOCOL_SENTINEL === inst_24562);
var inst_24564 = ((inst_24561) || (inst_24563));
var state_24588__$1 = state_24588;
if(cljs.core.truth_(inst_24564)){
var statearr_24594_24616 = state_24588__$1;
(statearr_24594_24616[(1)] = (6));

} else {
var statearr_24595_24617 = state_24588__$1;
(statearr_24595_24617[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (12))){
var inst_24577 = (state_24588[(8)]);
var inst_24581 = klipse_clj.lang.clojure.io.edn.call(null,inst_24577);
var inst_24582 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_24581);
var state_24588__$1 = state_24588;
var statearr_24596_24618 = state_24588__$1;
(statearr_24596_24618[(2)] = inst_24582);

(statearr_24596_24618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (2))){
var inst_24555 = (state_24588[(7)]);
var inst_24555__$1 = (state_24588[(2)]);
var inst_24557 = (inst_24555__$1 == null);
var inst_24558 = cljs.core.not.call(null,inst_24557);
var state_24588__$1 = (function (){var statearr_24597 = state_24588;
(statearr_24597[(7)] = inst_24555__$1);

return statearr_24597;
})();
if(inst_24558){
var statearr_24598_24619 = state_24588__$1;
(statearr_24598_24619[(1)] = (3));

} else {
var statearr_24599_24620 = state_24588__$1;
(statearr_24599_24620[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (11))){
var inst_24576 = (state_24588[(2)]);
var inst_24577 = cljs.core.get.call(null,inst_24576,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_24578 = cljs.core.get.call(null,inst_24576,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_24579 = cljs.core._EQ_.call(null,(200),inst_24578);
var state_24588__$1 = (function (){var statearr_24600 = state_24588;
(statearr_24600[(8)] = inst_24577);

return statearr_24600;
})();
if(inst_24579){
var statearr_24601_24621 = state_24588__$1;
(statearr_24601_24621[(1)] = (12));

} else {
var statearr_24602_24622 = state_24588__$1;
(statearr_24602_24622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (9))){
var inst_24555 = (state_24588[(7)]);
var inst_24573 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24555);
var state_24588__$1 = state_24588;
var statearr_24603_24623 = state_24588__$1;
(statearr_24603_24623[(2)] = inst_24573);

(statearr_24603_24623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (5))){
var inst_24571 = (state_24588[(2)]);
var state_24588__$1 = state_24588;
if(cljs.core.truth_(inst_24571)){
var statearr_24604_24624 = state_24588__$1;
(statearr_24604_24624[(1)] = (9));

} else {
var statearr_24605_24625 = state_24588__$1;
(statearr_24605_24625[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (14))){
var inst_24586 = (state_24588[(2)]);
var state_24588__$1 = state_24588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24588__$1,inst_24586);
} else {
if((state_val_24589 === (10))){
var inst_24555 = (state_24588[(7)]);
var state_24588__$1 = state_24588;
var statearr_24606_24626 = state_24588__$1;
(statearr_24606_24626[(2)] = inst_24555);

(statearr_24606_24626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24589 === (8))){
var inst_24568 = (state_24588[(2)]);
var state_24588__$1 = state_24588;
var statearr_24607_24627 = state_24588__$1;
(statearr_24607_24627[(2)] = inst_24568);

(statearr_24607_24627[(1)] = (5));


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
});})(c__19107__auto__))
;
return ((function (switch__18940__auto__,c__19107__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto____0 = (function (){
var statearr_24608 = [null,null,null,null,null,null,null,null,null];
(statearr_24608[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto__);

(statearr_24608[(1)] = (1));

return statearr_24608;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto____1 = (function (state_24588){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_24588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e24609){if((e24609 instanceof Object)){
var ex__18944__auto__ = e24609;
var statearr_24610_24628 = state_24588;
(statearr_24610_24628[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24629 = state_24588;
state_24588 = G__24629;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto__ = function(state_24588){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto____1.call(this,state_24588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__))
})();
var state__19109__auto__ = (function (){var statearr_24611 = f__19108__auto__.call(null);
(statearr_24611[(6)] = c__19107__auto__);

return statearr_24611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__))
);

return c__19107__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__24630,src_cb_original){
var map__24631 = p__24630;
var map__24631__$1 = (((((!((map__24631 == null))))?(((((map__24631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24631):map__24631);
var name = cljs.core.get.call(null,map__24631__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__24631__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__24631,map__24631__$1,name,path){
return (function() { 
var G__24633__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__24633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24634__i = 0, G__24634__a = new Array(arguments.length -  0);
while (G__24634__i < G__24634__a.length) {G__24634__a[G__24634__i] = arguments[G__24634__i + 0]; ++G__24634__i;}
  args = new cljs.core.IndexedSeq(G__24634__a,0,null);
} 
return G__24633__delegate.call(this,args);};
G__24633.cljs$lang$maxFixedArity = 0;
G__24633.cljs$lang$applyTo = (function (arglist__24635){
var args = cljs.core.seq(arglist__24635);
return G__24633__delegate(args);
});
G__24633.cljs$core$IFn$_invoke$arity$variadic = G__24633__delegate;
return G__24633;
})()
;})(map__24631,map__24631__$1,name,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__24637,src_cb){
var map__24638 = p__24637;
var map__24638__$1 = (((((!((map__24638 == null))))?(((((map__24638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24638):map__24638);
var path = cljs.core.get.call(null,map__24638__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__24638,map__24638__$1,path){
return (function (p1__24636_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24636_SHARP_)].join('');
});})(path__$1,map__24638,map__24638__$1,path))
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
if(cljs.core.truth_((function (){var or__4047__auto__ = klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
var or__4047__auto__ = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__4036__auto__){
return (window["React"]);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__4036__auto__){
return (window["ReactDOMServer"]);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var and__4036__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__4036__auto__){
return (window["ReactDOM"]);
} else {
return and__4036__auto__;
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
var full_names = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join('')], null);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,full_names,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__24641,src_cb){
var map__24642 = p__24641;
var map__24642__$1 = (((((!((map__24642 == null))))?(((((map__24642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24642):map__24642);
var name = cljs.core.get.call(null,map__24642__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__24642__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var filenames = cljs.core.map.call(null,((function (_,map__24642,map__24642__$1,name,path){
return (function (p1__24640_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24640_SHARP_),".cache.json"].join('');
});})(_,map__24642,map__24642__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__,_,filenames,map__24642,map__24642__$1,name,path){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__,_,filenames,map__24642,map__24642__$1,name,path){
return (function (state_24656){
var state_val_24657 = (state_24656[(1)]);
if((state_val_24657 === (1))){
var inst_24644 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_24656__$1 = state_24656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24656__$1,(2),inst_24644);
} else {
if((state_val_24657 === (2))){
var inst_24646 = (state_24656[(2)]);
var state_24656__$1 = state_24656;
if(cljs.core.truth_(inst_24646)){
var statearr_24658_24709 = state_24656__$1;
(statearr_24658_24709[(1)] = (3));

} else {
var statearr_24659_24710 = state_24656__$1;
(statearr_24659_24710[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (3))){
var state_24656__$1 = state_24656;
var statearr_24660_24711 = state_24656__$1;
(statearr_24660_24711[(2)] = null);

(statearr_24660_24711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (4))){
var inst_24649 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_24650 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_24651 = cljs.core.PersistentHashMap.fromArrays(inst_24649,inst_24650);
var inst_24652 = src_cb.call(null,inst_24651);
var state_24656__$1 = state_24656;
var statearr_24661_24712 = state_24656__$1;
(statearr_24661_24712[(2)] = inst_24652);

(statearr_24661_24712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (5))){
var inst_24654 = (state_24656[(2)]);
var state_24656__$1 = state_24656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24656__$1,inst_24654);
} else {
return null;
}
}
}
}
}
});})(c__19107__auto__,_,filenames,map__24642,map__24642__$1,name,path))
;
return ((function (switch__18940__auto__,c__19107__auto__,_,filenames,map__24642,map__24642__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__18941__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__18941__auto____0 = (function (){
var statearr_24662 = [null,null,null,null,null,null,null];
(statearr_24662[(0)] = klipse_clj$lang$clojure$io$state_machine__18941__auto__);

(statearr_24662[(1)] = (1));

return statearr_24662;
});
var klipse_clj$lang$clojure$io$state_machine__18941__auto____1 = (function (state_24656){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_24656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e24663){if((e24663 instanceof Object)){
var ex__18944__auto__ = e24663;
var statearr_24664_24713 = state_24656;
(statearr_24664_24713[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24714 = state_24656;
state_24656 = G__24714;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__18941__auto__ = function(state_24656){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__18941__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__18941__auto____1.call(this,state_24656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__18941__auto____0;
klipse_clj$lang$clojure$io$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__18941__auto____1;
return klipse_clj$lang$clojure$io$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__,_,filenames,map__24642,map__24642__$1,name,path))
})();
var state__19109__auto__ = (function (){var statearr_24665 = f__19108__auto__.call(null);
(statearr_24665[(6)] = c__19107__auto__);

return statearr_24665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__,_,filenames,map__24642,map__24642__$1,name,path))
);

return c__19107__auto__;
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

var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__,prefix,filenames,map__24642,map__24642__$1,name,path){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__,prefix,filenames,map__24642,map__24642__$1,name,path){
return (function (state_24676){
var state_val_24677 = (state_24676[(1)]);
if((state_val_24677 === (1))){
var inst_24666 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_24676__$1 = state_24676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24676__$1,(2),inst_24666);
} else {
if((state_val_24677 === (2))){
var inst_24668 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
if(cljs.core.truth_(inst_24668)){
var statearr_24678_24715 = state_24676__$1;
(statearr_24678_24715[(1)] = (3));

} else {
var statearr_24679_24716 = state_24676__$1;
(statearr_24679_24716[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (3))){
var state_24676__$1 = state_24676;
var statearr_24680_24717 = state_24676__$1;
(statearr_24680_24717[(2)] = null);

(statearr_24680_24717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (4))){
var inst_24671 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".js"].join('');
var inst_24672 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_24671,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_24676__$1 = state_24676;
var statearr_24681_24718 = state_24676__$1;
(statearr_24681_24718[(2)] = inst_24672);

(statearr_24681_24718[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (5))){
var inst_24674 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24676__$1,inst_24674);
} else {
return null;
}
}
}
}
}
});})(c__19107__auto__,prefix,filenames,map__24642,map__24642__$1,name,path))
;
return ((function (switch__18940__auto__,c__19107__auto__,prefix,filenames,map__24642,map__24642__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__18941__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__18941__auto____0 = (function (){
var statearr_24682 = [null,null,null,null,null,null,null];
(statearr_24682[(0)] = klipse_clj$lang$clojure$io$state_machine__18941__auto__);

(statearr_24682[(1)] = (1));

return statearr_24682;
});
var klipse_clj$lang$clojure$io$state_machine__18941__auto____1 = (function (state_24676){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_24676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e24683){if((e24683 instanceof Object)){
var ex__18944__auto__ = e24683;
var statearr_24684_24719 = state_24676;
(statearr_24684_24719[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24720 = state_24676;
state_24676 = G__24720;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__18941__auto__ = function(state_24676){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__18941__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__18941__auto____1.call(this,state_24676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__18941__auto____0;
klipse_clj$lang$clojure$io$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__18941__auto____1;
return klipse_clj$lang$clojure$io$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__,prefix,filenames,map__24642,map__24642__$1,name,path))
})();
var state__19109__auto__ = (function (){var statearr_24685 = f__19108__auto__.call(null);
(statearr_24685[(6)] = c__19107__auto__);

return statearr_24685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__,prefix,filenames,map__24642,map__24642__$1,name,path))
);

return c__19107__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__,filenames,map__24642,map__24642__$1,name,path){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__,filenames,map__24642,map__24642__$1,name,path){
return (function (state_24699){
var state_val_24700 = (state_24699[(1)]);
if((state_val_24700 === (1))){
var inst_24686 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_24699__$1 = state_24699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24699__$1,(2),inst_24686);
} else {
if((state_val_24700 === (2))){
var inst_24688 = (state_24699[(2)]);
var state_24699__$1 = state_24699;
if(cljs.core.truth_(inst_24688)){
var statearr_24701_24721 = state_24699__$1;
(statearr_24701_24721[(1)] = (3));

} else {
var statearr_24702_24722 = state_24699__$1;
(statearr_24702_24722[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24700 === (3))){
var state_24699__$1 = state_24699;
var statearr_24703_24723 = state_24699__$1;
(statearr_24703_24723[(2)] = null);

(statearr_24703_24723[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24700 === (4))){
var inst_24691 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24692 = [".js"];
var inst_24693 = (new cljs.core.PersistentVector(null,1,(5),inst_24691,inst_24692,null));
var inst_24694 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_24693,path);
var inst_24695 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_24694,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_24699__$1 = state_24699;
var statearr_24704_24724 = state_24699__$1;
(statearr_24704_24724[(2)] = inst_24695);

(statearr_24704_24724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24700 === (5))){
var inst_24697 = (state_24699[(2)]);
var state_24699__$1 = state_24699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24699__$1,inst_24697);
} else {
return null;
}
}
}
}
}
});})(c__19107__auto__,filenames,map__24642,map__24642__$1,name,path))
;
return ((function (switch__18940__auto__,c__19107__auto__,filenames,map__24642,map__24642__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__18941__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__18941__auto____0 = (function (){
var statearr_24705 = [null,null,null,null,null,null,null];
(statearr_24705[(0)] = klipse_clj$lang$clojure$io$state_machine__18941__auto__);

(statearr_24705[(1)] = (1));

return statearr_24705;
});
var klipse_clj$lang$clojure$io$state_machine__18941__auto____1 = (function (state_24699){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_24699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e24706){if((e24706 instanceof Object)){
var ex__18944__auto__ = e24706;
var statearr_24707_24725 = state_24699;
(statearr_24707_24725[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24726 = state_24699;
state_24699 = G__24726;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__18941__auto__ = function(state_24699){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__18941__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__18941__auto____1.call(this,state_24699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__18941__auto____0;
klipse_clj$lang$clojure$io$state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__18941__auto____1;
return klipse_clj$lang$clojure$io$state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__,filenames,map__24642,map__24642__$1,name,path))
})();
var state__19109__auto__ = (function (){var statearr_24708 = f__19108__auto__.call(null);
(statearr_24708[(6)] = c__19107__auto__);

return statearr_24708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__,filenames,map__24642,map__24642__$1,name,path))
);

return c__19107__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__24728,src_cb){
var map__24729 = p__24728;
var map__24729__$1 = (((((!((map__24729 == null))))?(((((map__24729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24729):map__24729);
var name = cljs.core.get.call(null,map__24729__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__24729__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__24729,map__24729__$1,name,path){
return (function (p1__24727_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(closure_github_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24727_SHARP_),".js"].join('');
});})(closure_github_path,map__24729,map__24729__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
