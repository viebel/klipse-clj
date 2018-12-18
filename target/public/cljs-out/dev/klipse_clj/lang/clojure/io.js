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
klipse_clj.lang.clojure.io.load_ns = (function (){var method_table__18897__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18898__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18899__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18900__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18901__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),((function (method_table__18897__auto__,prefer_table__18898__auto__,method_cache__18899__auto__,cached_hierarchy__18900__auto__,hierarchy__18901__auto__){
return (function (_,p__26396,src_cb){
var map__26397 = p__26396;
var map__26397__$1 = (((((!((map__26397 == null))))?(((((map__26397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26397):map__26397);
var name = cljs.core.get.call(null,map__26397__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__26397__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__26397__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
});})(method_table__18897__auto__,prefer_table__18898__auto__,method_cache__18899__auto__,cached_hierarchy__18900__auto__,hierarchy__18901__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18901__auto__,method_table__18897__auto__,prefer_table__18898__auto__,method_cache__18899__auto__,cached_hierarchy__18900__auto__));
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
var args__19138__auto__ = [];
var len__19128__auto___26513 = arguments.length;
var i__19129__auto___26514 = (0);
while(true){
if((i__19129__auto___26514 < len__19128__auto___26513)){
args__19138__auto__.push((arguments[i__19129__auto___26514]));

var G__26515 = (i__19129__auto___26514 + (1));
i__19129__auto___26514 = G__26515;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((4) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__19139__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__26404){
var map__26405 = p__26404;
var map__26405__$1 = (((((!((map__26405 == null))))?(((((map__26405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26405):map__26405);
var transform = cljs.core.get.call(null,map__26405__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__26405__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__,map__26405,map__26405__$1,transform,can_recover_QMARK_){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__,map__26405,map__26405__$1,transform,can_recover_QMARK_){
return (function (state_26470){
var state_val_26471 = (state_26470[(1)]);
if((state_val_26471 === (7))){
var inst_26419 = (state_26470[(7)]);
var inst_26419__$1 = (state_26470[(2)]);
var inst_26421 = (inst_26419__$1 == null);
var inst_26422 = cljs.core.not.call(null,inst_26421);
var state_26470__$1 = (function (){var statearr_26472 = state_26470;
(statearr_26472[(7)] = inst_26419__$1);

return statearr_26472;
})();
if(inst_26422){
var statearr_26473_26516 = state_26470__$1;
(statearr_26473_26516[(1)] = (8));

} else {
var statearr_26474_26517 = state_26470__$1;
(statearr_26474_26517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (20))){
var state_26470__$1 = state_26470;
var statearr_26475_26518 = state_26470__$1;
(statearr_26475_26518[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_26475_26518[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (1))){
var inst_26407 = filenames;
var state_26470__$1 = (function (){var statearr_26476 = state_26470;
(statearr_26476[(8)] = inst_26407);

return statearr_26476;
})();
var statearr_26477_26519 = state_26470__$1;
(statearr_26477_26519[(2)] = null);

(statearr_26477_26519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (24))){
var inst_26464 = src_cb.call(null,null);
var state_26470__$1 = state_26470;
var statearr_26478_26520 = state_26470__$1;
(statearr_26478_26520[(2)] = inst_26464);

(statearr_26478_26520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (4))){
var inst_26412 = (state_26470[(9)]);
var inst_26407 = (state_26470[(8)]);
var inst_26412__$1 = cljs.core.first.call(null,inst_26407);
var inst_26413 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_26412__$1);
var inst_26414 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26415 = [false];
var inst_26416 = cljs.core.PersistentHashMap.fromArrays(inst_26414,inst_26415);
var inst_26417 = cljs_http.client.get.call(null,inst_26413,inst_26416);
var state_26470__$1 = (function (){var statearr_26479 = state_26470;
(statearr_26479[(9)] = inst_26412__$1);

return statearr_26479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26470__$1,(7),inst_26417);
} else {
if((state_val_26471 === (15))){
var inst_26419 = (state_26470[(7)]);
var state_26470__$1 = state_26470;
var statearr_26480_26521 = state_26470__$1;
(statearr_26480_26521[(2)] = inst_26419);

(statearr_26480_26521[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (21))){
var state_26470__$1 = state_26470;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_26481_26522 = state_26470__$1;
(statearr_26481_26522[(1)] = (23));

} else {
var statearr_26482_26523 = state_26470__$1;
(statearr_26482_26523[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (13))){
var inst_26432 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26483_26524 = state_26470__$1;
(statearr_26483_26524[(2)] = inst_26432);

(statearr_26483_26524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (22))){
var inst_26468 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26470__$1,inst_26468);
} else {
if((state_val_26471 === (6))){
var inst_26457 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26484_26525 = state_26470__$1;
(statearr_26484_26525[(2)] = inst_26457);

(statearr_26484_26525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (25))){
var inst_26466 = (state_26470[(2)]);
var state_26470__$1 = (function (){var statearr_26485 = state_26470;
(statearr_26485[(10)] = inst_26466);

return statearr_26485;
})();
var statearr_26486_26526 = state_26470__$1;
(statearr_26486_26526[(2)] = false);

(statearr_26486_26526[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (17))){
var inst_26412 = (state_26470[(9)]);
var inst_26442 = (state_26470[(11)]);
var inst_26445 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_26446 = transform.call(null,inst_26442);
var inst_26447 = [lang,inst_26446,inst_26412];
var inst_26448 = cljs.core.PersistentHashMap.fromArrays(inst_26445,inst_26447);
var inst_26449 = src_cb.call(null,inst_26448);
var state_26470__$1 = (function (){var statearr_26487 = state_26470;
(statearr_26487[(12)] = inst_26449);

return statearr_26487;
})();
var statearr_26488_26527 = state_26470__$1;
(statearr_26488_26527[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_26488_26527[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (3))){
var inst_26459 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
if(cljs.core.truth_(inst_26459)){
var statearr_26489_26528 = state_26470__$1;
(statearr_26489_26528[(1)] = (20));

} else {
var statearr_26490_26529 = state_26470__$1;
(statearr_26490_26529[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (12))){
var state_26470__$1 = state_26470;
var statearr_26491_26530 = state_26470__$1;
(statearr_26491_26530[(2)] = false);

(statearr_26491_26530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (2))){
var inst_26407 = (state_26470[(8)]);
var inst_26409 = cljs.core.seq.call(null,inst_26407);
var state_26470__$1 = state_26470;
if(inst_26409){
var statearr_26492_26531 = state_26470__$1;
(statearr_26492_26531[(1)] = (4));

} else {
var statearr_26493_26532 = state_26470__$1;
(statearr_26493_26532[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (23))){
var state_26470__$1 = state_26470;
var statearr_26494_26533 = state_26470__$1;
(statearr_26494_26533[(2)] = null);

(statearr_26494_26533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (19))){
var inst_26454 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26495_26534 = state_26470__$1;
(statearr_26495_26534[(2)] = inst_26454);

(statearr_26495_26534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (11))){
var state_26470__$1 = state_26470;
var statearr_26496_26535 = state_26470__$1;
(statearr_26496_26535[(2)] = true);

(statearr_26496_26535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (9))){
var state_26470__$1 = state_26470;
var statearr_26497_26536 = state_26470__$1;
(statearr_26497_26536[(2)] = false);

(statearr_26497_26536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (5))){
var state_26470__$1 = state_26470;
var statearr_26498_26537 = state_26470__$1;
(statearr_26498_26537[(2)] = null);

(statearr_26498_26537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (14))){
var inst_26419 = (state_26470[(7)]);
var inst_26437 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26419);
var state_26470__$1 = state_26470;
var statearr_26499_26538 = state_26470__$1;
(statearr_26499_26538[(2)] = inst_26437);

(statearr_26499_26538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (16))){
var inst_26440 = (state_26470[(2)]);
var inst_26441 = cljs.core.get.call(null,inst_26440,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26442 = cljs.core.get.call(null,inst_26440,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26443 = cljs.core._EQ_.call(null,(200),inst_26441);
var state_26470__$1 = (function (){var statearr_26500 = state_26470;
(statearr_26500[(11)] = inst_26442);

return statearr_26500;
})();
if(inst_26443){
var statearr_26501_26539 = state_26470__$1;
(statearr_26501_26539[(1)] = (17));

} else {
var statearr_26502_26540 = state_26470__$1;
(statearr_26502_26540[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (10))){
var inst_26435 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
if(cljs.core.truth_(inst_26435)){
var statearr_26503_26541 = state_26470__$1;
(statearr_26503_26541[(1)] = (14));

} else {
var statearr_26504_26542 = state_26470__$1;
(statearr_26504_26542[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (18))){
var inst_26407 = (state_26470[(8)]);
var inst_26451 = cljs.core.rest.call(null,inst_26407);
var inst_26407__$1 = inst_26451;
var state_26470__$1 = (function (){var statearr_26505 = state_26470;
(statearr_26505[(8)] = inst_26407__$1);

return statearr_26505;
})();
var statearr_26506_26543 = state_26470__$1;
(statearr_26506_26543[(2)] = null);

(statearr_26506_26543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26471 === (8))){
var inst_26419 = (state_26470[(7)]);
var inst_26424 = inst_26419.cljs$lang$protocol_mask$partition0$;
var inst_26425 = (inst_26424 & (64));
var inst_26426 = inst_26419.cljs$core$ISeq$;
var inst_26427 = (cljs.core.PROTOCOL_SENTINEL === inst_26426);
var inst_26428 = ((inst_26425) || (inst_26427));
var state_26470__$1 = state_26470;
if(cljs.core.truth_(inst_26428)){
var statearr_26507_26544 = state_26470__$1;
(statearr_26507_26544[(1)] = (11));

} else {
var statearr_26508_26545 = state_26470__$1;
(statearr_26508_26545[(1)] = (12));

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
});})(c__24894__auto__,map__26405,map__26405__$1,transform,can_recover_QMARK_))
;
return ((function (switch__24871__auto__,c__24894__auto__,map__26405,map__26405__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__24872__auto____0 = (function (){
var statearr_26509 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26509[(0)] = klipse_clj$lang$clojure$io$state_machine__24872__auto__);

(statearr_26509[(1)] = (1));

return statearr_26509;
});
var klipse_clj$lang$clojure$io$state_machine__24872__auto____1 = (function (state_26470){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_26470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e26510){if((e26510 instanceof Object)){
var ex__24875__auto__ = e26510;
var statearr_26511_26546 = state_26470;
(statearr_26511_26546[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26547 = state_26470;
state_26470 = G__26547;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__24872__auto__ = function(state_26470){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__24872__auto____1.call(this,state_26470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__24872__auto____0;
klipse_clj$lang$clojure$io$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__24872__auto____1;
return klipse_clj$lang$clojure$io$state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__,map__26405,map__26405__$1,transform,can_recover_QMARK_))
})();
var state__24896__auto__ = (function (){var statearr_26512 = f__24895__auto__.call(null);
(statearr_26512[(6)] = c__24894__auto__);

return statearr_26512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__,map__26405,map__26405__$1,transform,can_recover_QMARK_))
);

return c__24894__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq26399){
var G__26400 = cljs.core.first.call(null,seq26399);
var seq26399__$1 = cljs.core.next.call(null,seq26399);
var G__26401 = cljs.core.first.call(null,seq26399__$1);
var seq26399__$2 = cljs.core.next.call(null,seq26399__$1);
var G__26402 = cljs.core.first.call(null,seq26399__$2);
var seq26399__$3 = cljs.core.next.call(null,seq26399__$2);
var G__26403 = cljs.core.first.call(null,seq26399__$3);
var seq26399__$4 = cljs.core.next.call(null,seq26399__$3);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26400,G__26401,G__26402,G__26403,seq26399__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__18727__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__26548(s__26549){
return (new cljs.core.LazySeq(null,(function (){
var s__26549__$1 = s__26549;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26549__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var lib = cljs.core.first.call(null,xs__6277__auto__);
var iterys__18723__auto__ = ((function (s__26549__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__26548_$_iter__26550(s__26551){
return (new cljs.core.LazySeq(null,((function (s__26549__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26551__$1 = s__26551;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__26551__$1);
if(temp__5720__auto____$1){
var s__26551__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26551__$2)){
var c__18725__auto__ = cljs.core.chunk_first.call(null,s__26551__$2);
var size__18726__auto__ = cljs.core.count.call(null,c__18725__auto__);
var b__26553 = cljs.core.chunk_buffer.call(null,size__18726__auto__);
if((function (){var i__26552 = (0);
while(true){
if((i__26552 < size__18726__auto__)){
var suffix = cljs.core._nth.call(null,c__18725__auto__,i__26552);
cljs.core.chunk_append.call(null,b__26553,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__26554 = (i__26552 + (1));
i__26552 = G__26554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26553),klipse_clj$lang$clojure$io$external_libs_files_$_iter__26548_$_iter__26550.call(null,cljs.core.chunk_rest.call(null,s__26551__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26553),null);
}
} else {
var suffix = cljs.core.first.call(null,s__26551__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__26548_$_iter__26550.call(null,cljs.core.rest.call(null,s__26551__$2)));
}
} else {
return null;
}
break;
}
});})(s__26549__$1,lib,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26549__$1,lib,xs__6277__auto__,temp__5720__auto__))
;
var fs__18724__auto__ = cljs.core.seq.call(null,iterys__18723__auto__.call(null,suffixes));
if(fs__18724__auto__){
return cljs.core.concat.call(null,fs__18724__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__26548.call(null,cljs.core.rest.call(null,s__26549__$1)));
} else {
var G__26555 = cljs.core.rest.call(null,s__26549__$1);
s__26549__$1 = G__26555;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18727__auto__.call(null,external_libs);
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

var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_26600){
var state_val_26601 = (state_26600[(1)]);
if((state_val_26601 === (7))){
var inst_26579 = (state_26600[(7)]);
var inst_26572 = (state_26600[(8)]);
var inst_26588 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_26589 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26579);
var inst_26590 = klipse_clj.lang.clojure.io.edn.call(null,inst_26589);
var inst_26591 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26572);
var inst_26592 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_26590,inst_26591];
var inst_26593 = cljs.core.PersistentHashMap.fromArrays(inst_26588,inst_26592);
var inst_26594 = src_cb.call(null,inst_26593);
var state_26600__$1 = state_26600;
var statearr_26602_26618 = state_26600__$1;
(statearr_26602_26618[(2)] = inst_26594);

(statearr_26602_26618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (1))){
var inst_26557 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_26600__$1 = (function (){var statearr_26603 = state_26600;
(statearr_26603[(9)] = inst_26557);

return statearr_26603;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_26604_26619 = state_26600__$1;
(statearr_26604_26619[(1)] = (2));

} else {
var statearr_26605_26620 = state_26600__$1;
(statearr_26605_26620[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (4))){
var inst_26561 = (state_26600[(10)]);
var inst_26564 = (state_26600[(11)]);
var inst_26563 = (state_26600[(12)]);
var inst_26557 = (state_26600[(9)]);
var inst_26561__$1 = (state_26600[(2)]);
var inst_26562 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_26563__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26562),"/"].join('');
var inst_26564__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26563__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26557),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26561__$1),".js"].join('');
var inst_26565 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26563__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26557),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26561__$1),".cache.json"].join('');
var inst_26566 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_26564__$1);
var inst_26567 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26568 = [false];
var inst_26569 = cljs.core.PersistentHashMap.fromArrays(inst_26567,inst_26568);
var inst_26570 = cljs_http.client.get.call(null,inst_26566,inst_26569);
var state_26600__$1 = (function (){var statearr_26606 = state_26600;
(statearr_26606[(10)] = inst_26561__$1);

(statearr_26606[(11)] = inst_26564__$1);

(statearr_26606[(12)] = inst_26563__$1);

(statearr_26606[(13)] = inst_26565);

return statearr_26606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26600__$1,(5),inst_26570);
} else {
if((state_val_26601 === (6))){
var inst_26561 = (state_26600[(10)]);
var inst_26564 = (state_26600[(11)]);
var inst_26563 = (state_26600[(12)]);
var inst_26565 = (state_26600[(13)]);
var inst_26557 = (state_26600[(9)]);
var inst_26579 = (state_26600[(7)]);
var inst_26572 = (state_26600[(8)]);
var inst_26579__$1 = (state_26600[(2)]);
var inst_26580 = (function (){var nn = inst_26557;
var suffix = inst_26561;
var root = inst_26563;
var src_filename = inst_26564;
var cache_filename = inst_26565;
var src = inst_26572;
var cache = inst_26579__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_26561,inst_26564,inst_26563,inst_26565,inst_26557,inst_26579,inst_26572,inst_26579__$1,state_val_26601,c__24894__auto__){
return (function (p1__26556_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__26556_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_26561,inst_26564,inst_26563,inst_26565,inst_26557,inst_26579,inst_26572,inst_26579__$1,state_val_26601,c__24894__auto__))
})();
var inst_26581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26582 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_26579__$1);
var inst_26583 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_26572);
var inst_26584 = [inst_26582,inst_26583];
var inst_26585 = (new cljs.core.PersistentVector(null,2,(5),inst_26581,inst_26584,null));
var inst_26586 = cljs.core.every_QMARK_.call(null,inst_26580,inst_26585);
var state_26600__$1 = (function (){var statearr_26607 = state_26600;
(statearr_26607[(7)] = inst_26579__$1);

return statearr_26607;
})();
if(inst_26586){
var statearr_26608_26621 = state_26600__$1;
(statearr_26608_26621[(1)] = (7));

} else {
var statearr_26609_26622 = state_26600__$1;
(statearr_26609_26622[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (3))){
var state_26600__$1 = state_26600;
var statearr_26610_26623 = state_26600__$1;
(statearr_26610_26623[(2)] = "");

(statearr_26610_26623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (2))){
var state_26600__$1 = state_26600;
var statearr_26611_26624 = state_26600__$1;
(statearr_26611_26624[(2)] = "$macros");

(statearr_26611_26624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26601 === (9))){
var inst_26598 = (state_26600[(2)]);
var state_26600__$1 = state_26600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26600__$1,inst_26598);
} else {
if((state_val_26601 === (5))){
var inst_26565 = (state_26600[(13)]);
var inst_26572 = (state_26600[(2)]);
var inst_26573 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_26565);
var inst_26574 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26575 = [false];
var inst_26576 = cljs.core.PersistentHashMap.fromArrays(inst_26574,inst_26575);
var inst_26577 = cljs_http.client.get.call(null,inst_26573,inst_26576);
var state_26600__$1 = (function (){var statearr_26612 = state_26600;
(statearr_26612[(8)] = inst_26572);

return statearr_26612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26600__$1,(6),inst_26577);
} else {
if((state_val_26601 === (8))){
var inst_26596 = src_cb.call(null,null);
var state_26600__$1 = state_26600;
var statearr_26613_26625 = state_26600__$1;
(statearr_26613_26625[(2)] = inst_26596);

(statearr_26613_26625[(1)] = (9));


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
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto____0 = (function (){
var statearr_26614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26614[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto__);

(statearr_26614[(1)] = (1));

return statearr_26614;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto____1 = (function (state_26600){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_26600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e26615){if((e26615 instanceof Object)){
var ex__24875__auto__ = e26615;
var statearr_26616_26626 = state_26600;
(statearr_26616_26626[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26627 = state_26600;
state_26600 = G__26627;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto__ = function(state_26600){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto____1.call(this,state_26600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_26617 = f__24895__auto__.call(null);
(statearr_26617[(6)] = c__24894__auto__);

return statearr_26617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_26667){
var state_val_26668 = (state_26667[(1)]);
if((state_val_26668 === (7))){
var state_26667__$1 = state_26667;
var statearr_26669_26691 = state_26667__$1;
(statearr_26669_26691[(2)] = false);

(statearr_26669_26691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (1))){
var inst_26629 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26630 = [false];
var inst_26631 = cljs.core.PersistentHashMap.fromArrays(inst_26629,inst_26630);
var inst_26632 = cljs_http.client.get.call(null,filename,inst_26631);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(2),inst_26632);
} else {
if((state_val_26668 === (4))){
var state_26667__$1 = state_26667;
var statearr_26670_26692 = state_26667__$1;
(statearr_26670_26692[(2)] = false);

(statearr_26670_26692[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (13))){
var inst_26663 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_26667__$1 = state_26667;
var statearr_26671_26693 = state_26667__$1;
(statearr_26671_26693[(2)] = inst_26663);

(statearr_26671_26693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (6))){
var state_26667__$1 = state_26667;
var statearr_26672_26694 = state_26667__$1;
(statearr_26672_26694[(2)] = true);

(statearr_26672_26694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (3))){
var inst_26634 = (state_26667[(7)]);
var inst_26639 = inst_26634.cljs$lang$protocol_mask$partition0$;
var inst_26640 = (inst_26639 & (64));
var inst_26641 = inst_26634.cljs$core$ISeq$;
var inst_26642 = (cljs.core.PROTOCOL_SENTINEL === inst_26641);
var inst_26643 = ((inst_26640) || (inst_26642));
var state_26667__$1 = state_26667;
if(cljs.core.truth_(inst_26643)){
var statearr_26673_26695 = state_26667__$1;
(statearr_26673_26695[(1)] = (6));

} else {
var statearr_26674_26696 = state_26667__$1;
(statearr_26674_26696[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (12))){
var inst_26656 = (state_26667[(8)]);
var inst_26660 = klipse_clj.lang.clojure.io.edn.call(null,inst_26656);
var inst_26661 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_26660);
var state_26667__$1 = state_26667;
var statearr_26675_26697 = state_26667__$1;
(statearr_26675_26697[(2)] = inst_26661);

(statearr_26675_26697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (2))){
var inst_26634 = (state_26667[(7)]);
var inst_26634__$1 = (state_26667[(2)]);
var inst_26636 = (inst_26634__$1 == null);
var inst_26637 = cljs.core.not.call(null,inst_26636);
var state_26667__$1 = (function (){var statearr_26676 = state_26667;
(statearr_26676[(7)] = inst_26634__$1);

return statearr_26676;
})();
if(inst_26637){
var statearr_26677_26698 = state_26667__$1;
(statearr_26677_26698[(1)] = (3));

} else {
var statearr_26678_26699 = state_26667__$1;
(statearr_26678_26699[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (11))){
var inst_26655 = (state_26667[(2)]);
var inst_26656 = cljs.core.get.call(null,inst_26655,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26657 = cljs.core.get.call(null,inst_26655,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26658 = cljs.core._EQ_.call(null,(200),inst_26657);
var state_26667__$1 = (function (){var statearr_26679 = state_26667;
(statearr_26679[(8)] = inst_26656);

return statearr_26679;
})();
if(inst_26658){
var statearr_26680_26700 = state_26667__$1;
(statearr_26680_26700[(1)] = (12));

} else {
var statearr_26681_26701 = state_26667__$1;
(statearr_26681_26701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (9))){
var inst_26634 = (state_26667[(7)]);
var inst_26652 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26634);
var state_26667__$1 = state_26667;
var statearr_26682_26702 = state_26667__$1;
(statearr_26682_26702[(2)] = inst_26652);

(statearr_26682_26702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (5))){
var inst_26650 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
if(cljs.core.truth_(inst_26650)){
var statearr_26683_26703 = state_26667__$1;
(statearr_26683_26703[(1)] = (9));

} else {
var statearr_26684_26704 = state_26667__$1;
(statearr_26684_26704[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (14))){
var inst_26665 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26667__$1,inst_26665);
} else {
if((state_val_26668 === (10))){
var inst_26634 = (state_26667[(7)]);
var state_26667__$1 = state_26667;
var statearr_26685_26705 = state_26667__$1;
(statearr_26685_26705[(2)] = inst_26634);

(statearr_26685_26705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (8))){
var inst_26647 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26686_26706 = state_26667__$1;
(statearr_26686_26706[(2)] = inst_26647);

(statearr_26686_26706[(1)] = (5));


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
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto____0 = (function (){
var statearr_26687 = [null,null,null,null,null,null,null,null,null];
(statearr_26687[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto__);

(statearr_26687[(1)] = (1));

return statearr_26687;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto____1 = (function (state_26667){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_26667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e26688){if((e26688 instanceof Object)){
var ex__24875__auto__ = e26688;
var statearr_26689_26707 = state_26667;
(statearr_26689_26707[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26708 = state_26667;
state_26667 = G__26708;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto__ = function(state_26667){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto____1.call(this,state_26667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_26690 = f__24895__auto__.call(null);
(statearr_26690[(6)] = c__24894__auto__);

return statearr_26690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__26709,src_cb_original){
var map__26710 = p__26709;
var map__26710__$1 = (((((!((map__26710 == null))))?(((((map__26710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26710):map__26710);
var name = cljs.core.get.call(null,map__26710__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__26710__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__26710,map__26710__$1,name,path){
return (function() { 
var G__26712__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__26712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26713__i = 0, G__26713__a = new Array(arguments.length -  0);
while (G__26713__i < G__26713__a.length) {G__26713__a[G__26713__i] = arguments[G__26713__i + 0]; ++G__26713__i;}
  args = new cljs.core.IndexedSeq(G__26713__a,0,null);
} 
return G__26712__delegate.call(this,args);};
G__26712.cljs$lang$maxFixedArity = 0;
G__26712.cljs$lang$applyTo = (function (arglist__26714){
var args = cljs.core.seq(arglist__26714);
return G__26712__delegate(args);
});
G__26712.cljs$core$IFn$_invoke$arity$variadic = G__26712__delegate;
return G__26712;
})()
;})(map__26710,map__26710__$1,name,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__26716,src_cb){
var map__26717 = p__26716;
var map__26717__$1 = (((((!((map__26717 == null))))?(((((map__26717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26717):map__26717);
var path = cljs.core.get.call(null,map__26717__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__26717,map__26717__$1,path){
return (function (p1__26715_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26715_SHARP_)].join('');
});})(path__$1,map__26717,map__26717__$1,path))
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
if(cljs.core.truth_((function (){var or__17819__auto__ = klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
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
var or__17819__auto__ = (function (){var and__17804__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__17804__auto__){
return (window["React"]);
} else {
return and__17804__auto__;
}
})();
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
var or__17819__auto____$1 = (function (){var and__17804__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__17804__auto__){
return (window["ReactDOMServer"]);
} else {
return and__17804__auto__;
}
})();
if(cljs.core.truth_(or__17819__auto____$1)){
return or__17819__auto____$1;
} else {
var and__17804__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__17804__auto__){
return (window["ReactDOM"]);
} else {
return and__17804__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__26720,src_cb){
var map__26721 = p__26720;
var map__26721__$1 = (((((!((map__26721 == null))))?(((((map__26721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26721):map__26721);
var name = cljs.core.get.call(null,map__26721__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__26721__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var filenames = cljs.core.map.call(null,((function (_,map__26721,map__26721__$1,name,path){
return (function (p1__26719_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26719_SHARP_),".cache.json"].join('');
});})(_,map__26721,map__26721__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__,_,filenames,map__26721,map__26721__$1,name,path){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__,_,filenames,map__26721,map__26721__$1,name,path){
return (function (state_26735){
var state_val_26736 = (state_26735[(1)]);
if((state_val_26736 === (1))){
var inst_26723 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_26735__$1 = state_26735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26735__$1,(2),inst_26723);
} else {
if((state_val_26736 === (2))){
var inst_26725 = (state_26735[(2)]);
var state_26735__$1 = state_26735;
if(cljs.core.truth_(inst_26725)){
var statearr_26737_26788 = state_26735__$1;
(statearr_26737_26788[(1)] = (3));

} else {
var statearr_26738_26789 = state_26735__$1;
(statearr_26738_26789[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (3))){
var state_26735__$1 = state_26735;
var statearr_26739_26790 = state_26735__$1;
(statearr_26739_26790[(2)] = null);

(statearr_26739_26790[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (4))){
var inst_26728 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_26729 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_26730 = cljs.core.PersistentHashMap.fromArrays(inst_26728,inst_26729);
var inst_26731 = src_cb.call(null,inst_26730);
var state_26735__$1 = state_26735;
var statearr_26740_26791 = state_26735__$1;
(statearr_26740_26791[(2)] = inst_26731);

(statearr_26740_26791[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (5))){
var inst_26733 = (state_26735[(2)]);
var state_26735__$1 = state_26735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26735__$1,inst_26733);
} else {
return null;
}
}
}
}
}
});})(c__24894__auto__,_,filenames,map__26721,map__26721__$1,name,path))
;
return ((function (switch__24871__auto__,c__24894__auto__,_,filenames,map__26721,map__26721__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__24872__auto____0 = (function (){
var statearr_26741 = [null,null,null,null,null,null,null];
(statearr_26741[(0)] = klipse_clj$lang$clojure$io$state_machine__24872__auto__);

(statearr_26741[(1)] = (1));

return statearr_26741;
});
var klipse_clj$lang$clojure$io$state_machine__24872__auto____1 = (function (state_26735){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_26735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e26742){if((e26742 instanceof Object)){
var ex__24875__auto__ = e26742;
var statearr_26743_26792 = state_26735;
(statearr_26743_26792[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26793 = state_26735;
state_26735 = G__26793;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__24872__auto__ = function(state_26735){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__24872__auto____1.call(this,state_26735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__24872__auto____0;
klipse_clj$lang$clojure$io$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__24872__auto____1;
return klipse_clj$lang$clojure$io$state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__,_,filenames,map__26721,map__26721__$1,name,path))
})();
var state__24896__auto__ = (function (){var statearr_26744 = f__24895__auto__.call(null);
(statearr_26744[(6)] = c__24894__auto__);

return statearr_26744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__,_,filenames,map__26721,map__26721__$1,name,path))
);

return c__24894__auto__;
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

var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__,prefix,filenames,map__26721,map__26721__$1,name,path){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__,prefix,filenames,map__26721,map__26721__$1,name,path){
return (function (state_26755){
var state_val_26756 = (state_26755[(1)]);
if((state_val_26756 === (1))){
var inst_26745 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_26755__$1 = state_26755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26755__$1,(2),inst_26745);
} else {
if((state_val_26756 === (2))){
var inst_26747 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
if(cljs.core.truth_(inst_26747)){
var statearr_26757_26794 = state_26755__$1;
(statearr_26757_26794[(1)] = (3));

} else {
var statearr_26758_26795 = state_26755__$1;
(statearr_26758_26795[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (3))){
var state_26755__$1 = state_26755;
var statearr_26759_26796 = state_26755__$1;
(statearr_26759_26796[(2)] = null);

(statearr_26759_26796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (4))){
var inst_26750 = [prefix,".js"].join('');
var inst_26751 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_26750,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_26755__$1 = state_26755;
var statearr_26760_26797 = state_26755__$1;
(statearr_26760_26797[(2)] = inst_26751);

(statearr_26760_26797[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (5))){
var inst_26753 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26755__$1,inst_26753);
} else {
return null;
}
}
}
}
}
});})(c__24894__auto__,prefix,filenames,map__26721,map__26721__$1,name,path))
;
return ((function (switch__24871__auto__,c__24894__auto__,prefix,filenames,map__26721,map__26721__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__24872__auto____0 = (function (){
var statearr_26761 = [null,null,null,null,null,null,null];
(statearr_26761[(0)] = klipse_clj$lang$clojure$io$state_machine__24872__auto__);

(statearr_26761[(1)] = (1));

return statearr_26761;
});
var klipse_clj$lang$clojure$io$state_machine__24872__auto____1 = (function (state_26755){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_26755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e26762){if((e26762 instanceof Object)){
var ex__24875__auto__ = e26762;
var statearr_26763_26798 = state_26755;
(statearr_26763_26798[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26799 = state_26755;
state_26755 = G__26799;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__24872__auto__ = function(state_26755){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__24872__auto____1.call(this,state_26755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__24872__auto____0;
klipse_clj$lang$clojure$io$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__24872__auto____1;
return klipse_clj$lang$clojure$io$state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__,prefix,filenames,map__26721,map__26721__$1,name,path))
})();
var state__24896__auto__ = (function (){var statearr_26764 = f__24895__auto__.call(null);
(statearr_26764[(6)] = c__24894__auto__);

return statearr_26764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__,prefix,filenames,map__26721,map__26721__$1,name,path))
);

return c__24894__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__,filenames,map__26721,map__26721__$1,name,path){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__,filenames,map__26721,map__26721__$1,name,path){
return (function (state_26778){
var state_val_26779 = (state_26778[(1)]);
if((state_val_26779 === (1))){
var inst_26765 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(2),inst_26765);
} else {
if((state_val_26779 === (2))){
var inst_26767 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
if(cljs.core.truth_(inst_26767)){
var statearr_26780_26800 = state_26778__$1;
(statearr_26780_26800[(1)] = (3));

} else {
var statearr_26781_26801 = state_26778__$1;
(statearr_26781_26801[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (3))){
var state_26778__$1 = state_26778;
var statearr_26782_26802 = state_26778__$1;
(statearr_26782_26802[(2)] = null);

(statearr_26782_26802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (4))){
var inst_26770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26771 = [".js"];
var inst_26772 = (new cljs.core.PersistentVector(null,1,(5),inst_26770,inst_26771,null));
var inst_26773 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_26772,path);
var inst_26774 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_26773,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_26778__$1 = state_26778;
var statearr_26783_26803 = state_26778__$1;
(statearr_26783_26803[(2)] = inst_26774);

(statearr_26783_26803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26779 === (5))){
var inst_26776 = (state_26778[(2)]);
var state_26778__$1 = state_26778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26778__$1,inst_26776);
} else {
return null;
}
}
}
}
}
});})(c__24894__auto__,filenames,map__26721,map__26721__$1,name,path))
;
return ((function (switch__24871__auto__,c__24894__auto__,filenames,map__26721,map__26721__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__24872__auto____0 = (function (){
var statearr_26784 = [null,null,null,null,null,null,null];
(statearr_26784[(0)] = klipse_clj$lang$clojure$io$state_machine__24872__auto__);

(statearr_26784[(1)] = (1));

return statearr_26784;
});
var klipse_clj$lang$clojure$io$state_machine__24872__auto____1 = (function (state_26778){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_26778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e26785){if((e26785 instanceof Object)){
var ex__24875__auto__ = e26785;
var statearr_26786_26804 = state_26778;
(statearr_26786_26804[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26805 = state_26778;
state_26778 = G__26805;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__24872__auto__ = function(state_26778){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__24872__auto____1.call(this,state_26778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__24872__auto____0;
klipse_clj$lang$clojure$io$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__24872__auto____1;
return klipse_clj$lang$clojure$io$state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__,filenames,map__26721,map__26721__$1,name,path))
})();
var state__24896__auto__ = (function (){var statearr_26787 = f__24895__auto__.call(null);
(statearr_26787[(6)] = c__24894__auto__);

return statearr_26787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__,filenames,map__26721,map__26721__$1,name,path))
);

return c__24894__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__26807,src_cb){
var map__26808 = p__26807;
var map__26808__$1 = (((((!((map__26808 == null))))?(((((map__26808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26808):map__26808);
var name = cljs.core.get.call(null,map__26808__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__26808__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__26808,map__26808__$1,name,path){
return (function (p1__26806_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26806_SHARP_),".js"].join('');
});})(closure_github_path,map__26808,map__26808__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
