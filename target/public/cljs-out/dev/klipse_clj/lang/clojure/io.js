// Compiled by ClojureScript 1.10.238 {}
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
if(typeof klipse_clj.lang.clojure.io.load_ns !== 'undefined'){
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
klipse_clj.lang.clojure.io.load_ns = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (_,p__51191,src_cb){
var map__51192 = p__51191;
var map__51192__$1 = ((((!((map__51192 == null)))?(((((map__51192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51192):map__51192);
var name = cljs.core.get.call(null,map__51192__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__51192__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__51192__$1,new cljs.core.Keyword(null,"path","path",-188191168));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,macros,path], null);

if(cljs.core.truth_(macros)){
return new cljs.core.Keyword(null,"macro","macro",-867863404);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\..*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return new cljs.core.Keyword(null,"goog","goog",-1711135452);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\.gist-.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return new cljs.core.Keyword(null,"gist","gist",96143031);
} else {
return new cljs.core.Keyword(null,"cljs","cljs",1492417629);

}
}
}
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
klipse_clj.lang.clojure.io.skip_ns_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"cljs.analyzer.macros","cljs.analyzer.macros",298494182,null),null,new cljs.core.Symbol(null,"cljs.env.macros","cljs.env.macros",1542748640,null),null,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),null,new cljs.core.Symbol(null,"cljs.compiler.macros","cljs.compiler.macros",750996207,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.js","cljs.js",474485962,null),null], null), null);
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
var args__4502__auto__ = [];
var len__4499__auto___51316 = arguments.length;
var i__4500__auto___51317 = (0);
while(true){
if((i__4500__auto___51317 < len__4499__auto___51316)){
args__4502__auto__.push((arguments[i__4500__auto___51317]));

var G__51318 = (i__4500__auto___51317 + (1));
i__4500__auto___51317 = G__51318;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((4) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4503__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__51201){
var map__51202 = p__51201;
var map__51202__$1 = ((((!((map__51202 == null)))?(((((map__51202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51202):map__51202);
var transform = cljs.core.get.call(null,map__51202__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__51202__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__,map__51202,map__51202__$1,transform,can_recover_QMARK_){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__,map__51202,map__51202__$1,transform,can_recover_QMARK_){
return (function (state_51267){
var state_val_51268 = (state_51267[(1)]);
if((state_val_51268 === (7))){
var inst_51216 = (state_51267[(7)]);
var inst_51216__$1 = (state_51267[(2)]);
var inst_51218 = (inst_51216__$1 == null);
var inst_51219 = cljs.core.not.call(null,inst_51218);
var state_51267__$1 = (function (){var statearr_51269 = state_51267;
(statearr_51269[(7)] = inst_51216__$1);

return statearr_51269;
})();
if(inst_51219){
var statearr_51270_51320 = state_51267__$1;
(statearr_51270_51320[(1)] = (8));

} else {
var statearr_51271_51321 = state_51267__$1;
(statearr_51271_51321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (20))){
var state_51267__$1 = state_51267;
var statearr_51272_51322 = state_51267__$1;
(statearr_51272_51322[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_51272_51322[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (1))){
var inst_51204 = filenames;
var state_51267__$1 = (function (){var statearr_51273 = state_51267;
(statearr_51273[(8)] = inst_51204);

return statearr_51273;
})();
var statearr_51274_51325 = state_51267__$1;
(statearr_51274_51325[(2)] = null);

(statearr_51274_51325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (24))){
var inst_51261 = src_cb.call(null,null);
var state_51267__$1 = state_51267;
var statearr_51275_51329 = state_51267__$1;
(statearr_51275_51329[(2)] = inst_51261);

(statearr_51275_51329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (4))){
var inst_51209 = (state_51267[(9)]);
var inst_51204 = (state_51267[(8)]);
var inst_51209__$1 = cljs.core.first.call(null,inst_51204);
var inst_51210 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_51209__$1);
var inst_51211 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51212 = [false];
var inst_51213 = cljs.core.PersistentHashMap.fromArrays(inst_51211,inst_51212);
var inst_51214 = cljs_http.client.get.call(null,inst_51210,inst_51213);
var state_51267__$1 = (function (){var statearr_51276 = state_51267;
(statearr_51276[(9)] = inst_51209__$1);

return statearr_51276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51267__$1,(7),inst_51214);
} else {
if((state_val_51268 === (15))){
var inst_51216 = (state_51267[(7)]);
var state_51267__$1 = state_51267;
var statearr_51277_51331 = state_51267__$1;
(statearr_51277_51331[(2)] = inst_51216);

(statearr_51277_51331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (21))){
var state_51267__$1 = state_51267;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_51278_51332 = state_51267__$1;
(statearr_51278_51332[(1)] = (23));

} else {
var statearr_51279_51334 = state_51267__$1;
(statearr_51279_51334[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (13))){
var inst_51229 = (state_51267[(2)]);
var state_51267__$1 = state_51267;
var statearr_51280_51337 = state_51267__$1;
(statearr_51280_51337[(2)] = inst_51229);

(statearr_51280_51337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (22))){
var inst_51265 = (state_51267[(2)]);
var state_51267__$1 = state_51267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51267__$1,inst_51265);
} else {
if((state_val_51268 === (6))){
var inst_51254 = (state_51267[(2)]);
var state_51267__$1 = state_51267;
var statearr_51281_51338 = state_51267__$1;
(statearr_51281_51338[(2)] = inst_51254);

(statearr_51281_51338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (25))){
var inst_51263 = (state_51267[(2)]);
var state_51267__$1 = (function (){var statearr_51282 = state_51267;
(statearr_51282[(10)] = inst_51263);

return statearr_51282;
})();
var statearr_51283_51339 = state_51267__$1;
(statearr_51283_51339[(2)] = false);

(statearr_51283_51339[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (17))){
var inst_51209 = (state_51267[(9)]);
var inst_51239 = (state_51267[(11)]);
var inst_51242 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_51243 = transform.call(null,inst_51239);
var inst_51244 = [lang,inst_51243,inst_51209];
var inst_51245 = cljs.core.PersistentHashMap.fromArrays(inst_51242,inst_51244);
var inst_51246 = src_cb.call(null,inst_51245);
var state_51267__$1 = (function (){var statearr_51284 = state_51267;
(statearr_51284[(12)] = inst_51246);

return statearr_51284;
})();
var statearr_51285_51340 = state_51267__$1;
(statearr_51285_51340[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_51285_51340[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (3))){
var inst_51256 = (state_51267[(2)]);
var state_51267__$1 = state_51267;
if(cljs.core.truth_(inst_51256)){
var statearr_51286_51342 = state_51267__$1;
(statearr_51286_51342[(1)] = (20));

} else {
var statearr_51287_51343 = state_51267__$1;
(statearr_51287_51343[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (12))){
var state_51267__$1 = state_51267;
var statearr_51288_51344 = state_51267__$1;
(statearr_51288_51344[(2)] = false);

(statearr_51288_51344[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (2))){
var inst_51204 = (state_51267[(8)]);
var inst_51206 = cljs.core.seq.call(null,inst_51204);
var state_51267__$1 = state_51267;
if(inst_51206){
var statearr_51289_51345 = state_51267__$1;
(statearr_51289_51345[(1)] = (4));

} else {
var statearr_51290_51346 = state_51267__$1;
(statearr_51290_51346[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (23))){
var state_51267__$1 = state_51267;
var statearr_51291_51347 = state_51267__$1;
(statearr_51291_51347[(2)] = null);

(statearr_51291_51347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (19))){
var inst_51251 = (state_51267[(2)]);
var state_51267__$1 = state_51267;
var statearr_51292_51348 = state_51267__$1;
(statearr_51292_51348[(2)] = inst_51251);

(statearr_51292_51348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (11))){
var state_51267__$1 = state_51267;
var statearr_51293_51349 = state_51267__$1;
(statearr_51293_51349[(2)] = true);

(statearr_51293_51349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (9))){
var state_51267__$1 = state_51267;
var statearr_51294_51350 = state_51267__$1;
(statearr_51294_51350[(2)] = false);

(statearr_51294_51350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (5))){
var state_51267__$1 = state_51267;
var statearr_51295_51351 = state_51267__$1;
(statearr_51295_51351[(2)] = null);

(statearr_51295_51351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (14))){
var inst_51216 = (state_51267[(7)]);
var inst_51234 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51216);
var state_51267__$1 = state_51267;
var statearr_51297_51352 = state_51267__$1;
(statearr_51297_51352[(2)] = inst_51234);

(statearr_51297_51352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (16))){
var inst_51237 = (state_51267[(2)]);
var inst_51238 = cljs.core.get.call(null,inst_51237,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_51239 = cljs.core.get.call(null,inst_51237,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_51240 = cljs.core._EQ_.call(null,(200),inst_51238);
var state_51267__$1 = (function (){var statearr_51299 = state_51267;
(statearr_51299[(11)] = inst_51239);

return statearr_51299;
})();
if(inst_51240){
var statearr_51300_51353 = state_51267__$1;
(statearr_51300_51353[(1)] = (17));

} else {
var statearr_51301_51354 = state_51267__$1;
(statearr_51301_51354[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (10))){
var inst_51232 = (state_51267[(2)]);
var state_51267__$1 = state_51267;
if(cljs.core.truth_(inst_51232)){
var statearr_51306_51355 = state_51267__$1;
(statearr_51306_51355[(1)] = (14));

} else {
var statearr_51307_51356 = state_51267__$1;
(statearr_51307_51356[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (18))){
var inst_51204 = (state_51267[(8)]);
var inst_51248 = cljs.core.rest.call(null,inst_51204);
var inst_51204__$1 = inst_51248;
var state_51267__$1 = (function (){var statearr_51308 = state_51267;
(statearr_51308[(8)] = inst_51204__$1);

return statearr_51308;
})();
var statearr_51309_51357 = state_51267__$1;
(statearr_51309_51357[(2)] = null);

(statearr_51309_51357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51268 === (8))){
var inst_51216 = (state_51267[(7)]);
var inst_51221 = inst_51216.cljs$lang$protocol_mask$partition0$;
var inst_51222 = (inst_51221 & (64));
var inst_51223 = inst_51216.cljs$core$ISeq$;
var inst_51224 = (cljs.core.PROTOCOL_SENTINEL === inst_51223);
var inst_51225 = ((inst_51222) || (inst_51224));
var state_51267__$1 = state_51267;
if(cljs.core.truth_(inst_51225)){
var statearr_51310_51358 = state_51267__$1;
(statearr_51310_51358[(1)] = (11));

} else {
var statearr_51311_51359 = state_51267__$1;
(statearr_51311_51359[(1)] = (12));

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
});})(c__13946__auto__,map__51202,map__51202__$1,transform,can_recover_QMARK_))
;
return ((function (switch__13856__auto__,c__13946__auto__,map__51202,map__51202__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13857__auto____0 = (function (){
var statearr_51312 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51312[(0)] = klipse_clj$lang$clojure$io$state_machine__13857__auto__);

(statearr_51312[(1)] = (1));

return statearr_51312;
});
var klipse_clj$lang$clojure$io$state_machine__13857__auto____1 = (function (state_51267){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_51267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e51313){if((e51313 instanceof Object)){
var ex__13860__auto__ = e51313;
var statearr_51314_51360 = state_51267;
(statearr_51314_51360[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51361 = state_51267;
state_51267 = G__51361;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13857__auto__ = function(state_51267){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____1.call(this,state_51267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,map__51202,map__51202__$1,transform,can_recover_QMARK_))
})();
var state__13948__auto__ = (function (){var statearr_51315 = f__13947__auto__.call(null);
(statearr_51315[(6)] = c__13946__auto__);

return statearr_51315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__,map__51202,map__51202__$1,transform,can_recover_QMARK_))
);

return c__13946__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq51196){
var G__51197 = cljs.core.first.call(null,seq51196);
var seq51196__$1 = cljs.core.next.call(null,seq51196);
var G__51198 = cljs.core.first.call(null,seq51196__$1);
var seq51196__$2 = cljs.core.next.call(null,seq51196__$1);
var G__51199 = cljs.core.first.call(null,seq51196__$2);
var seq51196__$3 = cljs.core.next.call(null,seq51196__$2);
var G__51200 = cljs.core.first.call(null,seq51196__$3);
var seq51196__$4 = cljs.core.next.call(null,seq51196__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51197,G__51198,G__51199,G__51200,seq51196__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4292__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__51362(s__51363){
return (new cljs.core.LazySeq(null,(function (){
var s__51363__$1 = s__51363;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__51363__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var lib = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__51363__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__51362_$_iter__51364(s__51365){
return (new cljs.core.LazySeq(null,((function (s__51363__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__51365__$1 = s__51365;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__51365__$1);
if(temp__5457__auto____$1){
var s__51365__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51365__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__51365__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__51367 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__51366 = (0);
while(true){
if((i__51366 < size__4291__auto__)){
var suffix = cljs.core._nth.call(null,c__4290__auto__,i__51366);
cljs.core.chunk_append.call(null,b__51367,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__51370 = (i__51366 + (1));
i__51366 = G__51370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51367),klipse_clj$lang$clojure$io$external_libs_files_$_iter__51362_$_iter__51364.call(null,cljs.core.chunk_rest.call(null,s__51365__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51367),null);
}
} else {
var suffix = cljs.core.first.call(null,s__51365__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__51362_$_iter__51364.call(null,cljs.core.rest.call(null,s__51365__$2)));
}
} else {
return null;
}
break;
}
});})(s__51363__$1,lib,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__51363__$1,lib,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,suffixes));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__51362.call(null,cljs.core.rest.call(null,s__51363__$1)));
} else {
var G__51371 = cljs.core.rest.call(null,s__51363__$1);
s__51363__$1 = G__51371;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,external_libs);
});
klipse_clj.lang.clojure.io.name__GT_cached_resource = (function klipse_clj$lang$clojure$io$name__GT_cached_resource(name){
return clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name))].join(''),/\./,"_SLASH_");
});
klipse_clj.lang.clojure.io.cached_ns_root = (function klipse_clj$lang$clojure$io$cached_ns_root(){
return new cljs.core.Keyword(null,"cached_ns_root","cached_ns_root",-1077014575).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,"https://viebel.github.io/cljs-analysis-cache/cache/");
});
klipse_clj.lang.clojure.io.load_ns_from_cache = (function klipse_clj$lang$clojure$io$load_ns_from_cache(name,src_cb,macro_QMARK_){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-cache:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"macro: ",macro_QMARK_);
} else {
}

var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_51418){
var state_val_51419 = (state_51418[(1)]);
if((state_val_51419 === (1))){
var inst_51374 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_51418__$1 = (function (){var statearr_51420 = state_51418;
(statearr_51420[(7)] = inst_51374);

return statearr_51420;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_51421_51451 = state_51418__$1;
(statearr_51421_51451[(1)] = (2));

} else {
var statearr_51422_51452 = state_51418__$1;
(statearr_51422_51452[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51419 === (2))){
var state_51418__$1 = state_51418;
var statearr_51423_51453 = state_51418__$1;
(statearr_51423_51453[(2)] = "$macros");

(statearr_51423_51453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51419 === (3))){
var state_51418__$1 = state_51418;
var statearr_51424_51454 = state_51418__$1;
(statearr_51424_51454[(2)] = "");

(statearr_51424_51454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51419 === (4))){
var inst_51378 = (state_51418[(8)]);
var inst_51374 = (state_51418[(7)]);
var inst_51381 = (state_51418[(9)]);
var inst_51380 = (state_51418[(10)]);
var inst_51378__$1 = (state_51418[(2)]);
var inst_51379 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_51380__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51379),"/"].join('');
var inst_51381__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51380__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51374),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51378__$1),".js"].join('');
var inst_51382 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51380__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51374),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51378__$1),".cache.json"].join('');
var inst_51383 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_51381__$1);
var inst_51384 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51385 = [false];
var inst_51386 = cljs.core.PersistentHashMap.fromArrays(inst_51384,inst_51385);
var inst_51387 = cljs_http.client.get.call(null,inst_51383,inst_51386);
var state_51418__$1 = (function (){var statearr_51425 = state_51418;
(statearr_51425[(8)] = inst_51378__$1);

(statearr_51425[(9)] = inst_51381__$1);

(statearr_51425[(10)] = inst_51380__$1);

(statearr_51425[(11)] = inst_51382);

return statearr_51425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51418__$1,(5),inst_51387);
} else {
if((state_val_51419 === (5))){
var inst_51382 = (state_51418[(11)]);
var inst_51389 = (state_51418[(2)]);
var inst_51390 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_51382);
var inst_51391 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51392 = [false];
var inst_51393 = cljs.core.PersistentHashMap.fromArrays(inst_51391,inst_51392);
var inst_51394 = cljs_http.client.get.call(null,inst_51390,inst_51393);
var state_51418__$1 = (function (){var statearr_51426 = state_51418;
(statearr_51426[(12)] = inst_51389);

return statearr_51426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51418__$1,(6),inst_51394);
} else {
if((state_val_51419 === (6))){
var inst_51378 = (state_51418[(8)]);
var inst_51374 = (state_51418[(7)]);
var inst_51389 = (state_51418[(12)]);
var inst_51396 = (state_51418[(13)]);
var inst_51381 = (state_51418[(9)]);
var inst_51380 = (state_51418[(10)]);
var inst_51382 = (state_51418[(11)]);
var inst_51396__$1 = (state_51418[(2)]);
var inst_51397 = (function (){var nn = inst_51374;
var suffix = inst_51378;
var root = inst_51380;
var src_filename = inst_51381;
var cache_filename = inst_51382;
var src = inst_51389;
var cache = inst_51396__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_51378,inst_51374,inst_51389,inst_51396,inst_51381,inst_51380,inst_51382,inst_51396__$1,state_val_51419,c__13946__auto__){
return (function (p1__51373_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__51373_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_51378,inst_51374,inst_51389,inst_51396,inst_51381,inst_51380,inst_51382,inst_51396__$1,state_val_51419,c__13946__auto__))
})();
var inst_51398 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51399 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51396__$1);
var inst_51400 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51389);
var inst_51401 = [inst_51399,inst_51400];
var inst_51402 = (new cljs.core.PersistentVector(null,2,(5),inst_51398,inst_51401,null));
var inst_51403 = cljs.core.every_QMARK_.call(null,inst_51397,inst_51402);
var state_51418__$1 = (function (){var statearr_51428 = state_51418;
(statearr_51428[(13)] = inst_51396__$1);

return statearr_51428;
})();
if(inst_51403){
var statearr_51429_51483 = state_51418__$1;
(statearr_51429_51483[(1)] = (7));

} else {
var statearr_51430_51484 = state_51418__$1;
(statearr_51430_51484[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51419 === (7))){
var inst_51389 = (state_51418[(12)]);
var inst_51396 = (state_51418[(13)]);
var inst_51405 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_51406 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51396);
var inst_51407 = klipse_clj.lang.clojure.io.edn.call(null,inst_51406);
var inst_51408 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51389);
var inst_51409 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_51407,inst_51408];
var inst_51410 = cljs.core.PersistentHashMap.fromArrays(inst_51405,inst_51409);
var inst_51411 = src_cb.call(null,inst_51410);
var state_51418__$1 = state_51418;
var statearr_51431_51485 = state_51418__$1;
(statearr_51431_51485[(2)] = inst_51411);

(statearr_51431_51485[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51419 === (8))){
var inst_51413 = src_cb.call(null,null);
var state_51418__$1 = state_51418;
var statearr_51432_51486 = state_51418__$1;
(statearr_51432_51486[(2)] = inst_51413);

(statearr_51432_51486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51419 === (9))){
var inst_51415 = (state_51418[(2)]);
var state_51418__$1 = state_51418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51418__$1,inst_51415);
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
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto____0 = (function (){
var statearr_51433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51433[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto__);

(statearr_51433[(1)] = (1));

return statearr_51433;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto____1 = (function (state_51418){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_51418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e51434){if((e51434 instanceof Object)){
var ex__13860__auto__ = e51434;
var statearr_51435_51495 = state_51418;
(statearr_51435_51495[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51496 = state_51418;
state_51418 = G__51496;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto__ = function(state_51418){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto____1.call(this,state_51418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_51436 = f__13947__auto__.call(null);
(statearr_51436[(6)] = c__13946__auto__);

return statearr_51436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_51540){
var state_val_51541 = (state_51540[(1)]);
if((state_val_51541 === (7))){
var state_51540__$1 = state_51540;
var statearr_51542_51564 = state_51540__$1;
(statearr_51542_51564[(2)] = false);

(statearr_51542_51564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51541 === (1))){
var inst_51502 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51503 = [false];
var inst_51504 = cljs.core.PersistentHashMap.fromArrays(inst_51502,inst_51503);
var inst_51505 = cljs_http.client.get.call(null,filename,inst_51504);
var state_51540__$1 = state_51540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51540__$1,(2),inst_51505);
} else {
if((state_val_51541 === (4))){
var state_51540__$1 = state_51540;
var statearr_51543_51565 = state_51540__$1;
(statearr_51543_51565[(2)] = false);

(statearr_51543_51565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51541 === (13))){
var inst_51536 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_51540__$1 = state_51540;
var statearr_51544_51568 = state_51540__$1;
(statearr_51544_51568[(2)] = inst_51536);

(statearr_51544_51568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51541 === (6))){
var state_51540__$1 = state_51540;
var statearr_51545_51569 = state_51540__$1;
(statearr_51545_51569[(2)] = true);

(statearr_51545_51569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51541 === (3))){
var inst_51507 = (state_51540[(7)]);
var inst_51512 = inst_51507.cljs$lang$protocol_mask$partition0$;
var inst_51513 = (inst_51512 & (64));
var inst_51514 = inst_51507.cljs$core$ISeq$;
var inst_51515 = (cljs.core.PROTOCOL_SENTINEL === inst_51514);
var inst_51516 = ((inst_51513) || (inst_51515));
var state_51540__$1 = state_51540;
if(cljs.core.truth_(inst_51516)){
var statearr_51546_51570 = state_51540__$1;
(statearr_51546_51570[(1)] = (6));

} else {
var statearr_51547_51571 = state_51540__$1;
(statearr_51547_51571[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51541 === (12))){
var inst_51529 = (state_51540[(8)]);
var inst_51533 = klipse_clj.lang.clojure.io.edn.call(null,inst_51529);
var inst_51534 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_51533);
var state_51540__$1 = state_51540;
var statearr_51548_51572 = state_51540__$1;
(statearr_51548_51572[(2)] = inst_51534);

(statearr_51548_51572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51541 === (2))){
var inst_51507 = (state_51540[(7)]);
var inst_51507__$1 = (state_51540[(2)]);
var inst_51509 = (inst_51507__$1 == null);
var inst_51510 = cljs.core.not.call(null,inst_51509);
var state_51540__$1 = (function (){var statearr_51549 = state_51540;
(statearr_51549[(7)] = inst_51507__$1);

return statearr_51549;
})();
if(inst_51510){
var statearr_51550_51574 = state_51540__$1;
(statearr_51550_51574[(1)] = (3));

} else {
var statearr_51551_51575 = state_51540__$1;
(statearr_51551_51575[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51541 === (11))){
var inst_51528 = (state_51540[(2)]);
var inst_51529 = cljs.core.get.call(null,inst_51528,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_51530 = cljs.core.get.call(null,inst_51528,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_51531 = cljs.core._EQ_.call(null,(200),inst_51530);
var state_51540__$1 = (function (){var statearr_51552 = state_51540;
(statearr_51552[(8)] = inst_51529);

return statearr_51552;
})();
if(inst_51531){
var statearr_51553_51577 = state_51540__$1;
(statearr_51553_51577[(1)] = (12));

} else {
var statearr_51554_51578 = state_51540__$1;
(statearr_51554_51578[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51541 === (9))){
var inst_51507 = (state_51540[(7)]);
var inst_51525 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51507);
var state_51540__$1 = state_51540;
var statearr_51555_51579 = state_51540__$1;
(statearr_51555_51579[(2)] = inst_51525);

(statearr_51555_51579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51541 === (5))){
var inst_51523 = (state_51540[(2)]);
var state_51540__$1 = state_51540;
if(cljs.core.truth_(inst_51523)){
var statearr_51556_51580 = state_51540__$1;
(statearr_51556_51580[(1)] = (9));

} else {
var statearr_51557_51581 = state_51540__$1;
(statearr_51557_51581[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51541 === (14))){
var inst_51538 = (state_51540[(2)]);
var state_51540__$1 = state_51540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51540__$1,inst_51538);
} else {
if((state_val_51541 === (10))){
var inst_51507 = (state_51540[(7)]);
var state_51540__$1 = state_51540;
var statearr_51558_51582 = state_51540__$1;
(statearr_51558_51582[(2)] = inst_51507);

(statearr_51558_51582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51541 === (8))){
var inst_51520 = (state_51540[(2)]);
var state_51540__$1 = state_51540;
var statearr_51559_51583 = state_51540__$1;
(statearr_51559_51583[(2)] = inst_51520);

(statearr_51559_51583[(1)] = (5));


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
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto____0 = (function (){
var statearr_51560 = [null,null,null,null,null,null,null,null,null];
(statearr_51560[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto__);

(statearr_51560[(1)] = (1));

return statearr_51560;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto____1 = (function (state_51540){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_51540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e51561){if((e51561 instanceof Object)){
var ex__13860__auto__ = e51561;
var statearr_51562_51585 = state_51540;
(statearr_51562_51585[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51586 = state_51540;
state_51540 = G__51586;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto__ = function(state_51540){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto____1.call(this,state_51540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_51563 = f__13947__auto__.call(null);
(statearr_51563[(6)] = c__13946__auto__);

return statearr_51563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.io.cached_macro_ns_regexp = (function klipse_clj$lang$clojure$io$cached_macro_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_macro_ns_regexp","clojure_cached_macro_ns_regexp",-771780299).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/klipse-clj\..*|klipse-clj\.repl|cljs\.reader|cljs\.core\.[async|match].*|clojure\.math\.macros|gadjett\.core|cljs\.test|clojure.test.check.*|reagent\..*|om\..*|cljs\.spec.*|cljs-time\..*|re-frame\..*|net\.cgrand\.macrovich|reagent-forms\..*|ajax\.macros|poppea|expound\..*/);
});
klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_macro_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_macro_ns_regexp.call(null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
klipse_clj.lang.clojure.io.cached_ns_regexp = (function klipse_clj$lang$clojure$io$cached_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_ns_regexp","clojure_cached_ns_regexp",-1735711110).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/cljs\.stacktrace|cljs\.core\.[async|match].*|cljs\.spec.*|clojure.math\.combinatorics|clojure.test.check.*|reagent\..*|om\..*|clojure\.data|cljs-time\..*|re-frame\..*|day8\.re-frame\..*|reagent-forms\..*|re-frisk\..*|re-frisk-shell\..*|datafrisk\..*|ajax\..*|cljs\.tools\.reader\..*|expound\..*/);
});
klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_cljs_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_ns_regexp.call(null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__51601,src_cb_original){
var map__51602 = p__51601;
var map__51602__$1 = ((((!((map__51602 == null)))?(((((map__51602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51602):map__51602);
var name = cljs.core.get.call(null,map__51602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__51602__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__51602,map__51602__$1,name,path){
return (function() { 
var G__51613__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__51613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51615__i = 0, G__51615__a = new Array(arguments.length -  0);
while (G__51615__i < G__51615__a.length) {G__51615__a[G__51615__i] = arguments[G__51615__i + 0]; ++G__51615__i;}
  args = new cljs.core.IndexedSeq(G__51615__a,0,null);
} 
return G__51613__delegate.call(this,args);};
G__51613.cljs$lang$maxFixedArity = 0;
G__51613.cljs$lang$applyTo = (function (arglist__51620){
var args = cljs.core.seq(arglist__51620);
return G__51613__delegate(args);
});
G__51613.cljs$core$IFn$_invoke$arity$variadic = G__51613__delegate;
return G__51613;
})()
;})(map__51602,map__51602__$1,name,path))
);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro :",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.skip_ns_macros.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro skipping:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro cached:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return klipse_clj.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,true);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.the_ns_map.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro known:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.the_ns_map.call(null,name)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse_clj.lang.clojure.io.macro_suffixes);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
} else {
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :macro external-libs:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__51636,src_cb){
var map__51637 = p__51636;
var map__51637__$1 = ((((!((map__51637 == null)))?(((((map__51637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51637):map__51637);
var path = cljs.core.get.call(null,map__51637__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__51637,map__51637__$1,path){
return (function (p1__51635_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51635_SHARP_)].join('');
});})(path__$1,map__51637,map__51637__$1,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}));
klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp = (function klipse_clj$lang$clojure$io$bundled_ns_ignore_regexp(){
return new cljs.core.Keyword(null,"clojure_bundled_ns_ignore_regexp","clojure_bundled_ns_ignore_regexp",-1479622333).cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_);
});
klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_ = (function klipse_clj$lang$clojure$io$custom_bundled_ns_ignore_QMARK_(name){
var temp__5457__auto__ = klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var regexp = temp__5457__auto__;
return cljs.core.re_matches.call(null,regexp,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
return null;
}
});
klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_ = (function klipse_clj$lang$clojure$io$buggy_bundled_ns_ignore_QMARK_(name){
return cljs.core.re_matches.call(null,/.*reagent.*|cljs.core.async.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
/**
 * Checks whether a namespace is present at run-time
 */
klipse_clj.lang.clojure.io.bundled_ns_QMARK_ = (function klipse_clj$lang$clojure$io$bundled_ns_QMARK_(name){
if(cljs.core.truth_((function (){var or__3922__auto__ = klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_.call(null,name);
}
})())){
return false;
} else {
return !(((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name))].join(''));
})() == null));
}
});
klipse_clj.lang.clojure.io.cljsjs_QMARK_ = (function klipse_clj$lang$clojure$io$cljsjs_QMARK_(name){
return cljs.core.re_matches.call(null,/cljsjs\..*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
klipse_clj.lang.clojure.io.cljsjs_libname = (function klipse_clj$lang$clojure$io$cljsjs_libname(name){
var $ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var $__$1 = cljs.core.re_matches.call(null,/cljsjs\.(.*)/,$);
var $__$2 = cljs.core.second.call(null,$__$1);
return clojure.string.replace.call(null,$__$2,/\./,"-");
});
/**
 * some cljsjs packages are already loaded e.g react in klipse app
 */
klipse_clj.lang.clojure.io.bundled_cljsjs_ns_QMARK_ = (function klipse_clj$lang$clojure$io$bundled_cljsjs_ns_QMARK_(name){
var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__3911__auto__){
return (window["React"]);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__3911__auto__){
return (window["ReactDOMServer"]);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var and__3911__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__3911__auto__){
return (window["ReactDOM"]);
} else {
return and__3911__auto__;
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
console.info("load-ns bundled-cljsjs-ns",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var root_path = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null),null,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null),null,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null),null], null), null).call(null,name))?"https://viebel.github.io/cljsjs-hosted/cljsjs-klipse-only/":"https://viebel.github.io/cljsjs-hosted/cljsjs/");
var lib_name = klipse_clj.lang.clojure.io.cljsjs_libname.call(null,name);
var full_names = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),"/production/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".min.inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_path),"/development/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),".inc.js"].join('')], null);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,full_names,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__51654,src_cb){
var map__51655 = p__51654;
var map__51655__$1 = ((((!((map__51655 == null)))?(((((map__51655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51655):map__51655);
var name = cljs.core.get.call(null,map__51655__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__51655__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs :",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"external-libs: ",external_libs);
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.skip_ns_cljs.call(null,name))){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs skipping",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.bundled_ns_QMARK_.call(null,name))){
var _ = ((klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)?console.log("load-ns :cljs bundled",name):null);
var filenames = cljs.core.map.call(null,((function (_,map__51655,map__51655__$1,name,path){
return (function (p1__51653_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51653_SHARP_),".cache.json"].join('');
});})(_,map__51655,map__51655__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__,_,filenames,map__51655,map__51655__$1,name,path){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__,_,filenames,map__51655,map__51655__$1,name,path){
return (function (state_51669){
var state_val_51670 = (state_51669[(1)]);
if((state_val_51670 === (1))){
var inst_51657 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_51669__$1 = state_51669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51669__$1,(2),inst_51657);
} else {
if((state_val_51670 === (2))){
var inst_51659 = (state_51669[(2)]);
var state_51669__$1 = state_51669;
if(cljs.core.truth_(inst_51659)){
var statearr_51671_51733 = state_51669__$1;
(statearr_51671_51733[(1)] = (3));

} else {
var statearr_51672_51734 = state_51669__$1;
(statearr_51672_51734[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51670 === (3))){
var state_51669__$1 = state_51669;
var statearr_51673_51735 = state_51669__$1;
(statearr_51673_51735[(2)] = null);

(statearr_51673_51735[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51670 === (4))){
var inst_51662 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_51663 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_51664 = cljs.core.PersistentHashMap.fromArrays(inst_51662,inst_51663);
var inst_51665 = src_cb.call(null,inst_51664);
var state_51669__$1 = state_51669;
var statearr_51674_51744 = state_51669__$1;
(statearr_51674_51744[(2)] = inst_51665);

(statearr_51674_51744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51670 === (5))){
var inst_51667 = (state_51669[(2)]);
var state_51669__$1 = state_51669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51669__$1,inst_51667);
} else {
return null;
}
}
}
}
}
});})(c__13946__auto__,_,filenames,map__51655,map__51655__$1,name,path))
;
return ((function (switch__13856__auto__,c__13946__auto__,_,filenames,map__51655,map__51655__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13857__auto____0 = (function (){
var statearr_51675 = [null,null,null,null,null,null,null];
(statearr_51675[(0)] = klipse_clj$lang$clojure$io$state_machine__13857__auto__);

(statearr_51675[(1)] = (1));

return statearr_51675;
});
var klipse_clj$lang$clojure$io$state_machine__13857__auto____1 = (function (state_51669){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_51669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e51676){if((e51676 instanceof Object)){
var ex__13860__auto__ = e51676;
var statearr_51677_51746 = state_51669;
(statearr_51677_51746[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51747 = state_51669;
state_51669 = G__51747;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13857__auto__ = function(state_51669){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____1.call(this,state_51669);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,_,filenames,map__51655,map__51655__$1,name,path))
})();
var state__13948__auto__ = (function (){var statearr_51678 = f__13947__auto__.call(null);
(statearr_51678[(6)] = c__13946__auto__);

return statearr_51678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__,_,filenames,map__51655,map__51655__$1,name,path))
);

return c__13946__auto__;
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
console.info("load-ns :cljs from external libs",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__,prefix,filenames,map__51655,map__51655__$1,name,path){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__,prefix,filenames,map__51655,map__51655__$1,name,path){
return (function (state_51689){
var state_val_51690 = (state_51689[(1)]);
if((state_val_51690 === (1))){
var inst_51679 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_51689__$1 = state_51689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51689__$1,(2),inst_51679);
} else {
if((state_val_51690 === (2))){
var inst_51681 = (state_51689[(2)]);
var state_51689__$1 = state_51689;
if(cljs.core.truth_(inst_51681)){
var statearr_51691_51753 = state_51689__$1;
(statearr_51691_51753[(1)] = (3));

} else {
var statearr_51692_51754 = state_51689__$1;
(statearr_51692_51754[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51690 === (3))){
var state_51689__$1 = state_51689;
var statearr_51693_51755 = state_51689__$1;
(statearr_51693_51755[(2)] = null);

(statearr_51693_51755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51690 === (4))){
var inst_51684 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".js"].join('');
var inst_51685 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_51684,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_51689__$1 = state_51689;
var statearr_51694_51761 = state_51689__$1;
(statearr_51694_51761[(2)] = inst_51685);

(statearr_51694_51761[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51690 === (5))){
var inst_51687 = (state_51689[(2)]);
var state_51689__$1 = state_51689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51689__$1,inst_51687);
} else {
return null;
}
}
}
}
}
});})(c__13946__auto__,prefix,filenames,map__51655,map__51655__$1,name,path))
;
return ((function (switch__13856__auto__,c__13946__auto__,prefix,filenames,map__51655,map__51655__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13857__auto____0 = (function (){
var statearr_51695 = [null,null,null,null,null,null,null];
(statearr_51695[(0)] = klipse_clj$lang$clojure$io$state_machine__13857__auto__);

(statearr_51695[(1)] = (1));

return statearr_51695;
});
var klipse_clj$lang$clojure$io$state_machine__13857__auto____1 = (function (state_51689){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_51689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e51696){if((e51696 instanceof Object)){
var ex__13860__auto__ = e51696;
var statearr_51697_51762 = state_51689;
(statearr_51697_51762[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51763 = state_51689;
state_51689 = G__51763;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13857__auto__ = function(state_51689){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____1.call(this,state_51689);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,prefix,filenames,map__51655,map__51655__$1,name,path))
})();
var state__13948__auto__ = (function (){var statearr_51698 = f__13947__auto__.call(null);
(statearr_51698[(6)] = c__13946__auto__);

return statearr_51698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__,prefix,filenames,map__51655,map__51655__$1,name,path))
);

return c__13946__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__,filenames,map__51655,map__51655__$1,name,path){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__,filenames,map__51655,map__51655__$1,name,path){
return (function (state_51718){
var state_val_51719 = (state_51718[(1)]);
if((state_val_51719 === (1))){
var inst_51705 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_51718__$1 = state_51718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51718__$1,(2),inst_51705);
} else {
if((state_val_51719 === (2))){
var inst_51707 = (state_51718[(2)]);
var state_51718__$1 = state_51718;
if(cljs.core.truth_(inst_51707)){
var statearr_51720_51769 = state_51718__$1;
(statearr_51720_51769[(1)] = (3));

} else {
var statearr_51721_51770 = state_51718__$1;
(statearr_51721_51770[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (3))){
var state_51718__$1 = state_51718;
var statearr_51722_51771 = state_51718__$1;
(statearr_51722_51771[(2)] = null);

(statearr_51722_51771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (4))){
var inst_51710 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51711 = [".js"];
var inst_51712 = (new cljs.core.PersistentVector(null,1,(5),inst_51710,inst_51711,null));
var inst_51713 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_51712,path);
var inst_51714 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_51713,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_51718__$1 = state_51718;
var statearr_51723_51776 = state_51718__$1;
(statearr_51723_51776[(2)] = inst_51714);

(statearr_51723_51776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (5))){
var inst_51716 = (state_51718[(2)]);
var state_51718__$1 = state_51718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51718__$1,inst_51716);
} else {
return null;
}
}
}
}
}
});})(c__13946__auto__,filenames,map__51655,map__51655__$1,name,path))
;
return ((function (switch__13856__auto__,c__13946__auto__,filenames,map__51655,map__51655__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13857__auto____0 = (function (){
var statearr_51728 = [null,null,null,null,null,null,null];
(statearr_51728[(0)] = klipse_clj$lang$clojure$io$state_machine__13857__auto__);

(statearr_51728[(1)] = (1));

return statearr_51728;
});
var klipse_clj$lang$clojure$io$state_machine__13857__auto____1 = (function (state_51718){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_51718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e51730){if((e51730 instanceof Object)){
var ex__13860__auto__ = e51730;
var statearr_51731_51778 = state_51718;
(statearr_51731_51778[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51779 = state_51718;
state_51718 = G__51779;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13857__auto__ = function(state_51718){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____1.call(this,state_51718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,filenames,map__51655,map__51655__$1,name,path))
})();
var state__13948__auto__ = (function (){var statearr_51732 = f__13947__auto__.call(null);
(statearr_51732[(6)] = c__13946__auto__);

return statearr_51732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__,filenames,map__51655,map__51655__$1,name,path))
);

return c__13946__auto__;
} else {
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns :cljs nothing can be done",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__51792,src_cb){
var map__51793 = p__51792;
var map__51793__$1 = ((((!((map__51793 == null)))?(((((map__51793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51793):map__51793);
var name = cljs.core.get.call(null,map__51793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__51793__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__51793,map__51793__$1,name,path){
return (function (p1__51791_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(closure_github_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51791_SHARP_),".js"].join('');
});})(closure_github_path,map__51793,map__51793__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
