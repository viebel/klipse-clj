// Compiled by ClojureScript 1.10.492 {}
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
klipse_clj.lang.clojure.io.load_ns = (function (){var method_table__4484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),((function (method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__,hierarchy__4488__auto__){
return (function (_,p__48018,src_cb){
var map__48019 = p__48018;
var map__48019__$1 = (((((!((map__48019 == null))))?(((((map__48019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48019):map__48019);
var name = cljs.core.get.call(null,map__48019__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__48019__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__48019__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
});})(method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__,hierarchy__4488__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4488__auto__,method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__));
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
var args__4607__auto__ = [];
var len__4601__auto___48135 = arguments.length;
var i__4602__auto___48136 = (0);
while(true){
if((i__4602__auto___48136 < len__4601__auto___48135)){
args__4607__auto__.push((arguments[i__4602__auto___48136]));

var G__48137 = (i__4602__auto___48136 + (1));
i__4602__auto___48136 = G__48137;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((4) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4608__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__48026){
var map__48027 = p__48026;
var map__48027__$1 = (((((!((map__48027 == null))))?(((((map__48027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48027):map__48027);
var transform = cljs.core.get.call(null,map__48027__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__48027__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__,map__48027,map__48027__$1,transform,can_recover_QMARK_){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__,map__48027,map__48027__$1,transform,can_recover_QMARK_){
return (function (state_48092){
var state_val_48093 = (state_48092[(1)]);
if((state_val_48093 === (7))){
var inst_48041 = (state_48092[(7)]);
var inst_48041__$1 = (state_48092[(2)]);
var inst_48043 = (inst_48041__$1 == null);
var inst_48044 = cljs.core.not.call(null,inst_48043);
var state_48092__$1 = (function (){var statearr_48094 = state_48092;
(statearr_48094[(7)] = inst_48041__$1);

return statearr_48094;
})();
if(inst_48044){
var statearr_48095_48138 = state_48092__$1;
(statearr_48095_48138[(1)] = (8));

} else {
var statearr_48096_48139 = state_48092__$1;
(statearr_48096_48139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (20))){
var state_48092__$1 = state_48092;
var statearr_48097_48140 = state_48092__$1;
(statearr_48097_48140[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_48097_48140[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (1))){
var inst_48029 = filenames;
var state_48092__$1 = (function (){var statearr_48098 = state_48092;
(statearr_48098[(8)] = inst_48029);

return statearr_48098;
})();
var statearr_48099_48141 = state_48092__$1;
(statearr_48099_48141[(2)] = null);

(statearr_48099_48141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (24))){
var inst_48086 = src_cb.call(null,null);
var state_48092__$1 = state_48092;
var statearr_48100_48142 = state_48092__$1;
(statearr_48100_48142[(2)] = inst_48086);

(statearr_48100_48142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (4))){
var inst_48034 = (state_48092[(9)]);
var inst_48029 = (state_48092[(8)]);
var inst_48034__$1 = cljs.core.first.call(null,inst_48029);
var inst_48035 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_48034__$1);
var inst_48036 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_48037 = [false];
var inst_48038 = cljs.core.PersistentHashMap.fromArrays(inst_48036,inst_48037);
var inst_48039 = cljs_http.client.get.call(null,inst_48035,inst_48038);
var state_48092__$1 = (function (){var statearr_48101 = state_48092;
(statearr_48101[(9)] = inst_48034__$1);

return statearr_48101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48092__$1,(7),inst_48039);
} else {
if((state_val_48093 === (15))){
var inst_48041 = (state_48092[(7)]);
var state_48092__$1 = state_48092;
var statearr_48102_48143 = state_48092__$1;
(statearr_48102_48143[(2)] = inst_48041);

(statearr_48102_48143[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (21))){
var state_48092__$1 = state_48092;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_48103_48144 = state_48092__$1;
(statearr_48103_48144[(1)] = (23));

} else {
var statearr_48104_48145 = state_48092__$1;
(statearr_48104_48145[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (13))){
var inst_48054 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
var statearr_48105_48146 = state_48092__$1;
(statearr_48105_48146[(2)] = inst_48054);

(statearr_48105_48146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (22))){
var inst_48090 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48092__$1,inst_48090);
} else {
if((state_val_48093 === (6))){
var inst_48079 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
var statearr_48106_48147 = state_48092__$1;
(statearr_48106_48147[(2)] = inst_48079);

(statearr_48106_48147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (25))){
var inst_48088 = (state_48092[(2)]);
var state_48092__$1 = (function (){var statearr_48107 = state_48092;
(statearr_48107[(10)] = inst_48088);

return statearr_48107;
})();
var statearr_48108_48148 = state_48092__$1;
(statearr_48108_48148[(2)] = false);

(statearr_48108_48148[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (17))){
var inst_48034 = (state_48092[(9)]);
var inst_48064 = (state_48092[(11)]);
var inst_48067 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_48068 = transform.call(null,inst_48064);
var inst_48069 = [lang,inst_48068,inst_48034];
var inst_48070 = cljs.core.PersistentHashMap.fromArrays(inst_48067,inst_48069);
var inst_48071 = src_cb.call(null,inst_48070);
var state_48092__$1 = (function (){var statearr_48109 = state_48092;
(statearr_48109[(12)] = inst_48071);

return statearr_48109;
})();
var statearr_48110_48149 = state_48092__$1;
(statearr_48110_48149[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_48110_48149[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (3))){
var inst_48081 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
if(cljs.core.truth_(inst_48081)){
var statearr_48111_48150 = state_48092__$1;
(statearr_48111_48150[(1)] = (20));

} else {
var statearr_48112_48151 = state_48092__$1;
(statearr_48112_48151[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (12))){
var state_48092__$1 = state_48092;
var statearr_48113_48152 = state_48092__$1;
(statearr_48113_48152[(2)] = false);

(statearr_48113_48152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (2))){
var inst_48029 = (state_48092[(8)]);
var inst_48031 = cljs.core.seq.call(null,inst_48029);
var state_48092__$1 = state_48092;
if(inst_48031){
var statearr_48114_48153 = state_48092__$1;
(statearr_48114_48153[(1)] = (4));

} else {
var statearr_48115_48154 = state_48092__$1;
(statearr_48115_48154[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (23))){
var state_48092__$1 = state_48092;
var statearr_48116_48155 = state_48092__$1;
(statearr_48116_48155[(2)] = null);

(statearr_48116_48155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (19))){
var inst_48076 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
var statearr_48117_48156 = state_48092__$1;
(statearr_48117_48156[(2)] = inst_48076);

(statearr_48117_48156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (11))){
var state_48092__$1 = state_48092;
var statearr_48118_48157 = state_48092__$1;
(statearr_48118_48157[(2)] = true);

(statearr_48118_48157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (9))){
var state_48092__$1 = state_48092;
var statearr_48119_48158 = state_48092__$1;
(statearr_48119_48158[(2)] = false);

(statearr_48119_48158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (5))){
var state_48092__$1 = state_48092;
var statearr_48120_48159 = state_48092__$1;
(statearr_48120_48159[(2)] = null);

(statearr_48120_48159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (14))){
var inst_48041 = (state_48092[(7)]);
var inst_48059 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48041);
var state_48092__$1 = state_48092;
var statearr_48121_48160 = state_48092__$1;
(statearr_48121_48160[(2)] = inst_48059);

(statearr_48121_48160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (16))){
var inst_48062 = (state_48092[(2)]);
var inst_48063 = cljs.core.get.call(null,inst_48062,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_48064 = cljs.core.get.call(null,inst_48062,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_48065 = cljs.core._EQ_.call(null,(200),inst_48063);
var state_48092__$1 = (function (){var statearr_48122 = state_48092;
(statearr_48122[(11)] = inst_48064);

return statearr_48122;
})();
if(inst_48065){
var statearr_48123_48161 = state_48092__$1;
(statearr_48123_48161[(1)] = (17));

} else {
var statearr_48124_48162 = state_48092__$1;
(statearr_48124_48162[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (10))){
var inst_48057 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
if(cljs.core.truth_(inst_48057)){
var statearr_48125_48163 = state_48092__$1;
(statearr_48125_48163[(1)] = (14));

} else {
var statearr_48126_48164 = state_48092__$1;
(statearr_48126_48164[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (18))){
var inst_48029 = (state_48092[(8)]);
var inst_48073 = cljs.core.rest.call(null,inst_48029);
var inst_48029__$1 = inst_48073;
var state_48092__$1 = (function (){var statearr_48127 = state_48092;
(statearr_48127[(8)] = inst_48029__$1);

return statearr_48127;
})();
var statearr_48128_48165 = state_48092__$1;
(statearr_48128_48165[(2)] = null);

(statearr_48128_48165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (8))){
var inst_48041 = (state_48092[(7)]);
var inst_48046 = inst_48041.cljs$lang$protocol_mask$partition0$;
var inst_48047 = (inst_48046 & (64));
var inst_48048 = inst_48041.cljs$core$ISeq$;
var inst_48049 = (cljs.core.PROTOCOL_SENTINEL === inst_48048);
var inst_48050 = ((inst_48047) || (inst_48049));
var state_48092__$1 = state_48092;
if(cljs.core.truth_(inst_48050)){
var statearr_48129_48166 = state_48092__$1;
(statearr_48129_48166[(1)] = (11));

} else {
var statearr_48130_48167 = state_48092__$1;
(statearr_48130_48167[(1)] = (12));

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
});})(c__20620__auto__,map__48027,map__48027__$1,transform,can_recover_QMARK_))
;
return ((function (switch__20453__auto__,c__20620__auto__,map__48027,map__48027__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__20454__auto____0 = (function (){
var statearr_48131 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48131[(0)] = klipse_clj$lang$clojure$io$state_machine__20454__auto__);

(statearr_48131[(1)] = (1));

return statearr_48131;
});
var klipse_clj$lang$clojure$io$state_machine__20454__auto____1 = (function (state_48092){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48132){if((e48132 instanceof Object)){
var ex__20457__auto__ = e48132;
var statearr_48133_48168 = state_48092;
(statearr_48133_48168[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48169 = state_48092;
state_48092 = G__48169;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__20454__auto__ = function(state_48092){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__20454__auto____1.call(this,state_48092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__20454__auto____0;
klipse_clj$lang$clojure$io$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__20454__auto____1;
return klipse_clj$lang$clojure$io$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__,map__48027,map__48027__$1,transform,can_recover_QMARK_))
})();
var state__20622__auto__ = (function (){var statearr_48134 = f__20621__auto__.call(null);
(statearr_48134[(6)] = c__20620__auto__);

return statearr_48134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__,map__48027,map__48027__$1,transform,can_recover_QMARK_))
);

return c__20620__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq48021){
var G__48022 = cljs.core.first.call(null,seq48021);
var seq48021__$1 = cljs.core.next.call(null,seq48021);
var G__48023 = cljs.core.first.call(null,seq48021__$1);
var seq48021__$2 = cljs.core.next.call(null,seq48021__$1);
var G__48024 = cljs.core.first.call(null,seq48021__$2);
var seq48021__$3 = cljs.core.next.call(null,seq48021__$2);
var G__48025 = cljs.core.first.call(null,seq48021__$3);
var seq48021__$4 = cljs.core.next.call(null,seq48021__$3);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48022,G__48023,G__48024,G__48025,seq48021__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4394__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__48170(s__48171){
return (new cljs.core.LazySeq(null,(function (){
var s__48171__$1 = s__48171;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__48171__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var lib = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4390__auto__ = ((function (s__48171__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__48170_$_iter__48172(s__48173){
return (new cljs.core.LazySeq(null,((function (s__48171__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__48173__$1 = s__48173;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__48173__$1);
if(temp__5720__auto____$1){
var s__48173__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48173__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__48173__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__48175 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__48174 = (0);
while(true){
if((i__48174 < size__4393__auto__)){
var suffix = cljs.core._nth.call(null,c__4392__auto__,i__48174);
cljs.core.chunk_append.call(null,b__48175,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__48176 = (i__48174 + (1));
i__48174 = G__48176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48175),klipse_clj$lang$clojure$io$external_libs_files_$_iter__48170_$_iter__48172.call(null,cljs.core.chunk_rest.call(null,s__48173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48175),null);
}
} else {
var suffix = cljs.core.first.call(null,s__48173__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__48170_$_iter__48172.call(null,cljs.core.rest.call(null,s__48173__$2)));
}
} else {
return null;
}
break;
}
});})(s__48171__$1,lib,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__48171__$1,lib,xs__6277__auto__,temp__5720__auto__))
;
var fs__4391__auto__ = cljs.core.seq.call(null,iterys__4390__auto__.call(null,suffixes));
if(fs__4391__auto__){
return cljs.core.concat.call(null,fs__4391__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__48170.call(null,cljs.core.rest.call(null,s__48171__$1)));
} else {
var G__48177 = cljs.core.rest.call(null,s__48171__$1);
s__48171__$1 = G__48177;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,external_libs);
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

var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48222){
var state_val_48223 = (state_48222[(1)]);
if((state_val_48223 === (7))){
var inst_48194 = (state_48222[(7)]);
var inst_48201 = (state_48222[(8)]);
var inst_48210 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_48211 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_48201);
var inst_48212 = klipse_clj.lang.clojure.io.edn.call(null,inst_48211);
var inst_48213 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_48194);
var inst_48214 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_48212,inst_48213];
var inst_48215 = cljs.core.PersistentHashMap.fromArrays(inst_48210,inst_48214);
var inst_48216 = src_cb.call(null,inst_48215);
var state_48222__$1 = state_48222;
var statearr_48224_48240 = state_48222__$1;
(statearr_48224_48240[(2)] = inst_48216);

(statearr_48224_48240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48223 === (1))){
var inst_48179 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_48222__$1 = (function (){var statearr_48225 = state_48222;
(statearr_48225[(9)] = inst_48179);

return statearr_48225;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_48226_48241 = state_48222__$1;
(statearr_48226_48241[(1)] = (2));

} else {
var statearr_48227_48242 = state_48222__$1;
(statearr_48227_48242[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48223 === (4))){
var inst_48185 = (state_48222[(10)]);
var inst_48186 = (state_48222[(11)]);
var inst_48179 = (state_48222[(9)]);
var inst_48183 = (state_48222[(12)]);
var inst_48183__$1 = (state_48222[(2)]);
var inst_48184 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_48185__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48184),"/"].join('');
var inst_48186__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48185__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48179),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48183__$1),".js"].join('');
var inst_48187 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48185__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48179),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48183__$1),".cache.json"].join('');
var inst_48188 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_48186__$1);
var inst_48189 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_48190 = [false];
var inst_48191 = cljs.core.PersistentHashMap.fromArrays(inst_48189,inst_48190);
var inst_48192 = cljs_http.client.get.call(null,inst_48188,inst_48191);
var state_48222__$1 = (function (){var statearr_48228 = state_48222;
(statearr_48228[(10)] = inst_48185__$1);

(statearr_48228[(11)] = inst_48186__$1);

(statearr_48228[(13)] = inst_48187);

(statearr_48228[(12)] = inst_48183__$1);

return statearr_48228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48222__$1,(5),inst_48192);
} else {
if((state_val_48223 === (6))){
var inst_48185 = (state_48222[(10)]);
var inst_48186 = (state_48222[(11)]);
var inst_48179 = (state_48222[(9)]);
var inst_48194 = (state_48222[(7)]);
var inst_48201 = (state_48222[(8)]);
var inst_48187 = (state_48222[(13)]);
var inst_48183 = (state_48222[(12)]);
var inst_48201__$1 = (state_48222[(2)]);
var inst_48202 = (function (){var nn = inst_48179;
var suffix = inst_48183;
var root = inst_48185;
var src_filename = inst_48186;
var cache_filename = inst_48187;
var src = inst_48194;
var cache = inst_48201__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_48185,inst_48186,inst_48179,inst_48194,inst_48201,inst_48187,inst_48183,inst_48201__$1,state_val_48223,c__20620__auto__){
return (function (p1__48178_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__48178_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_48185,inst_48186,inst_48179,inst_48194,inst_48201,inst_48187,inst_48183,inst_48201__$1,state_val_48223,c__20620__auto__))
})();
var inst_48203 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48204 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_48201__$1);
var inst_48205 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_48194);
var inst_48206 = [inst_48204,inst_48205];
var inst_48207 = (new cljs.core.PersistentVector(null,2,(5),inst_48203,inst_48206,null));
var inst_48208 = cljs.core.every_QMARK_.call(null,inst_48202,inst_48207);
var state_48222__$1 = (function (){var statearr_48229 = state_48222;
(statearr_48229[(8)] = inst_48201__$1);

return statearr_48229;
})();
if(inst_48208){
var statearr_48230_48243 = state_48222__$1;
(statearr_48230_48243[(1)] = (7));

} else {
var statearr_48231_48244 = state_48222__$1;
(statearr_48231_48244[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48223 === (3))){
var state_48222__$1 = state_48222;
var statearr_48232_48245 = state_48222__$1;
(statearr_48232_48245[(2)] = "");

(statearr_48232_48245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48223 === (2))){
var state_48222__$1 = state_48222;
var statearr_48233_48246 = state_48222__$1;
(statearr_48233_48246[(2)] = "$macros");

(statearr_48233_48246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48223 === (9))){
var inst_48220 = (state_48222[(2)]);
var state_48222__$1 = state_48222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48222__$1,inst_48220);
} else {
if((state_val_48223 === (5))){
var inst_48187 = (state_48222[(13)]);
var inst_48194 = (state_48222[(2)]);
var inst_48195 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_48187);
var inst_48196 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_48197 = [false];
var inst_48198 = cljs.core.PersistentHashMap.fromArrays(inst_48196,inst_48197);
var inst_48199 = cljs_http.client.get.call(null,inst_48195,inst_48198);
var state_48222__$1 = (function (){var statearr_48234 = state_48222;
(statearr_48234[(7)] = inst_48194);

return statearr_48234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48222__$1,(6),inst_48199);
} else {
if((state_val_48223 === (8))){
var inst_48218 = src_cb.call(null,null);
var state_48222__$1 = state_48222;
var statearr_48235_48247 = state_48222__$1;
(statearr_48235_48247[(2)] = inst_48218);

(statearr_48235_48247[(1)] = (9));


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
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto____0 = (function (){
var statearr_48236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48236[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto__);

(statearr_48236[(1)] = (1));

return statearr_48236;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto____1 = (function (state_48222){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48237){if((e48237 instanceof Object)){
var ex__20457__auto__ = e48237;
var statearr_48238_48248 = state_48222;
(statearr_48238_48248[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48249 = state_48222;
state_48222 = G__48249;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto__ = function(state_48222){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto____1.call(this,state_48222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48239 = f__20621__auto__.call(null);
(statearr_48239[(6)] = c__20620__auto__);

return statearr_48239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48289){
var state_val_48290 = (state_48289[(1)]);
if((state_val_48290 === (7))){
var state_48289__$1 = state_48289;
var statearr_48291_48313 = state_48289__$1;
(statearr_48291_48313[(2)] = false);

(statearr_48291_48313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (1))){
var inst_48251 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_48252 = [false];
var inst_48253 = cljs.core.PersistentHashMap.fromArrays(inst_48251,inst_48252);
var inst_48254 = cljs_http.client.get.call(null,filename,inst_48253);
var state_48289__$1 = state_48289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48289__$1,(2),inst_48254);
} else {
if((state_val_48290 === (4))){
var state_48289__$1 = state_48289;
var statearr_48292_48314 = state_48289__$1;
(statearr_48292_48314[(2)] = false);

(statearr_48292_48314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (13))){
var inst_48285 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_48289__$1 = state_48289;
var statearr_48293_48315 = state_48289__$1;
(statearr_48293_48315[(2)] = inst_48285);

(statearr_48293_48315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (6))){
var state_48289__$1 = state_48289;
var statearr_48294_48316 = state_48289__$1;
(statearr_48294_48316[(2)] = true);

(statearr_48294_48316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (3))){
var inst_48256 = (state_48289[(7)]);
var inst_48261 = inst_48256.cljs$lang$protocol_mask$partition0$;
var inst_48262 = (inst_48261 & (64));
var inst_48263 = inst_48256.cljs$core$ISeq$;
var inst_48264 = (cljs.core.PROTOCOL_SENTINEL === inst_48263);
var inst_48265 = ((inst_48262) || (inst_48264));
var state_48289__$1 = state_48289;
if(cljs.core.truth_(inst_48265)){
var statearr_48295_48317 = state_48289__$1;
(statearr_48295_48317[(1)] = (6));

} else {
var statearr_48296_48318 = state_48289__$1;
(statearr_48296_48318[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (12))){
var inst_48278 = (state_48289[(8)]);
var inst_48282 = klipse_clj.lang.clojure.io.edn.call(null,inst_48278);
var inst_48283 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_48282);
var state_48289__$1 = state_48289;
var statearr_48297_48319 = state_48289__$1;
(statearr_48297_48319[(2)] = inst_48283);

(statearr_48297_48319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (2))){
var inst_48256 = (state_48289[(7)]);
var inst_48256__$1 = (state_48289[(2)]);
var inst_48258 = (inst_48256__$1 == null);
var inst_48259 = cljs.core.not.call(null,inst_48258);
var state_48289__$1 = (function (){var statearr_48298 = state_48289;
(statearr_48298[(7)] = inst_48256__$1);

return statearr_48298;
})();
if(inst_48259){
var statearr_48299_48320 = state_48289__$1;
(statearr_48299_48320[(1)] = (3));

} else {
var statearr_48300_48321 = state_48289__$1;
(statearr_48300_48321[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (11))){
var inst_48277 = (state_48289[(2)]);
var inst_48278 = cljs.core.get.call(null,inst_48277,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_48279 = cljs.core.get.call(null,inst_48277,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_48280 = cljs.core._EQ_.call(null,(200),inst_48279);
var state_48289__$1 = (function (){var statearr_48301 = state_48289;
(statearr_48301[(8)] = inst_48278);

return statearr_48301;
})();
if(inst_48280){
var statearr_48302_48322 = state_48289__$1;
(statearr_48302_48322[(1)] = (12));

} else {
var statearr_48303_48323 = state_48289__$1;
(statearr_48303_48323[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (9))){
var inst_48256 = (state_48289[(7)]);
var inst_48274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48256);
var state_48289__$1 = state_48289;
var statearr_48304_48324 = state_48289__$1;
(statearr_48304_48324[(2)] = inst_48274);

(statearr_48304_48324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (5))){
var inst_48272 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
if(cljs.core.truth_(inst_48272)){
var statearr_48305_48325 = state_48289__$1;
(statearr_48305_48325[(1)] = (9));

} else {
var statearr_48306_48326 = state_48289__$1;
(statearr_48306_48326[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (14))){
var inst_48287 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48289__$1,inst_48287);
} else {
if((state_val_48290 === (10))){
var inst_48256 = (state_48289[(7)]);
var state_48289__$1 = state_48289;
var statearr_48307_48327 = state_48289__$1;
(statearr_48307_48327[(2)] = inst_48256);

(statearr_48307_48327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (8))){
var inst_48269 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
var statearr_48308_48328 = state_48289__$1;
(statearr_48308_48328[(2)] = inst_48269);

(statearr_48308_48328[(1)] = (5));


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
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto____0 = (function (){
var statearr_48309 = [null,null,null,null,null,null,null,null,null];
(statearr_48309[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto__);

(statearr_48309[(1)] = (1));

return statearr_48309;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto____1 = (function (state_48289){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48310){if((e48310 instanceof Object)){
var ex__20457__auto__ = e48310;
var statearr_48311_48329 = state_48289;
(statearr_48311_48329[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48330 = state_48289;
state_48289 = G__48330;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto__ = function(state_48289){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto____1.call(this,state_48289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48312 = f__20621__auto__.call(null);
(statearr_48312[(6)] = c__20620__auto__);

return statearr_48312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});
klipse_clj.lang.clojure.io.cached_macro_ns_regexp = (function klipse_clj$lang$clojure$io$cached_macro_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_macro_ns_regexp","clojure_cached_macro_ns_regexp",-771780299).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/cljs.core.specs.alpha|klipse-clj\..*|klipse-clj\.repl|cljs\.reader|cljs\.core\.[async|match].*|clojure\.math\.macros|gadjett\.core|cljs\.test|cljs.tools.reader.*|clojure.test.check.*|reagent\..*|om\..*|cljs\.spec.*|cljs-time\..*|re-frame\..*|net\.cgrand\.macrovich|reagent-forms\..*|ajax\.macros|poppea|expound\..*/);
});
klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_macro_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_macro_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
klipse_clj.lang.clojure.io.cached_ns_regexp = (function klipse_clj$lang$clojure$io$cached_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_ns_regexp","clojure_cached_ns_regexp",-1735711110).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/cljs.core.specs.alpha|cljs\.stacktrace|cljs\.core\.[async|match].*|cljs\.spec.*|clojure.math\.combinatorics|clojure.test.check.*|reagent\..*|om\..*|clojure\.data|cljs.tools.reader.*|cljs-time\..*|re-frame\..*|day8\.re-frame\..*|reagent-forms\..*|re-frisk\..*|re-frisk-shell\..*|datafrisk\..*|ajax\..*|cljs\.tools\.reader\..*|expound\..*/);
});
klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_cljs_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__48331,src_cb_original){
var map__48332 = p__48331;
var map__48332__$1 = (((((!((map__48332 == null))))?(((((map__48332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48332):map__48332);
var name = cljs.core.get.call(null,map__48332__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__48332__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__48332,map__48332__$1,name,path){
return (function() { 
var G__48334__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__48334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48335__i = 0, G__48335__a = new Array(arguments.length -  0);
while (G__48335__i < G__48335__a.length) {G__48335__a[G__48335__i] = arguments[G__48335__i + 0]; ++G__48335__i;}
  args = new cljs.core.IndexedSeq(G__48335__a,0,null);
} 
return G__48334__delegate.call(this,args);};
G__48334.cljs$lang$maxFixedArity = 0;
G__48334.cljs$lang$applyTo = (function (arglist__48336){
var args = cljs.core.seq(arglist__48336);
return G__48334__delegate(args);
});
G__48334.cljs$core$IFn$_invoke$arity$variadic = G__48334__delegate;
return G__48334;
})()
;})(map__48332,map__48332__$1,name,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__48338,src_cb){
var map__48339 = p__48338;
var map__48339__$1 = (((((!((map__48339 == null))))?(((((map__48339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48339):map__48339);
var path = cljs.core.get.call(null,map__48339__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__48339,map__48339__$1,path){
return (function (p1__48337_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48337_SHARP_)].join('');
});})(path__$1,map__48339,map__48339__$1,path))
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
if(cljs.core.truth_((function (){var or__4002__auto__ = klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
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
var or__4002__auto__ = (function (){var and__3991__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__3991__auto__){
return (window["React"]);
} else {
return and__3991__auto__;
}
})();
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var or__4002__auto____$1 = (function (){var and__3991__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__3991__auto__){
return (window["ReactDOMServer"]);
} else {
return and__3991__auto__;
}
})();
if(cljs.core.truth_(or__4002__auto____$1)){
return or__4002__auto____$1;
} else {
var and__3991__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__3991__auto__){
return (window["ReactDOM"]);
} else {
return and__3991__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__48342,src_cb){
var map__48343 = p__48342;
var map__48343__$1 = (((((!((map__48343 == null))))?(((((map__48343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48343):map__48343);
var name = cljs.core.get.call(null,map__48343__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__48343__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var filenames = cljs.core.map.call(null,((function (_,map__48343,map__48343__$1,name,path){
return (function (p1__48341_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48341_SHARP_),".cache.json"].join('');
});})(_,map__48343,map__48343__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__,_,filenames,map__48343,map__48343__$1,name,path){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__,_,filenames,map__48343,map__48343__$1,name,path){
return (function (state_48357){
var state_val_48358 = (state_48357[(1)]);
if((state_val_48358 === (1))){
var inst_48345 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_48357__$1 = state_48357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48357__$1,(2),inst_48345);
} else {
if((state_val_48358 === (2))){
var inst_48347 = (state_48357[(2)]);
var state_48357__$1 = state_48357;
if(cljs.core.truth_(inst_48347)){
var statearr_48359_48410 = state_48357__$1;
(statearr_48359_48410[(1)] = (3));

} else {
var statearr_48360_48411 = state_48357__$1;
(statearr_48360_48411[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48358 === (3))){
var state_48357__$1 = state_48357;
var statearr_48361_48412 = state_48357__$1;
(statearr_48361_48412[(2)] = null);

(statearr_48361_48412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48358 === (4))){
var inst_48350 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_48351 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_48352 = cljs.core.PersistentHashMap.fromArrays(inst_48350,inst_48351);
var inst_48353 = src_cb.call(null,inst_48352);
var state_48357__$1 = state_48357;
var statearr_48362_48413 = state_48357__$1;
(statearr_48362_48413[(2)] = inst_48353);

(statearr_48362_48413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48358 === (5))){
var inst_48355 = (state_48357[(2)]);
var state_48357__$1 = state_48357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48357__$1,inst_48355);
} else {
return null;
}
}
}
}
}
});})(c__20620__auto__,_,filenames,map__48343,map__48343__$1,name,path))
;
return ((function (switch__20453__auto__,c__20620__auto__,_,filenames,map__48343,map__48343__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__20454__auto____0 = (function (){
var statearr_48363 = [null,null,null,null,null,null,null];
(statearr_48363[(0)] = klipse_clj$lang$clojure$io$state_machine__20454__auto__);

(statearr_48363[(1)] = (1));

return statearr_48363;
});
var klipse_clj$lang$clojure$io$state_machine__20454__auto____1 = (function (state_48357){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48364){if((e48364 instanceof Object)){
var ex__20457__auto__ = e48364;
var statearr_48365_48414 = state_48357;
(statearr_48365_48414[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48415 = state_48357;
state_48357 = G__48415;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__20454__auto__ = function(state_48357){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__20454__auto____1.call(this,state_48357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__20454__auto____0;
klipse_clj$lang$clojure$io$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__20454__auto____1;
return klipse_clj$lang$clojure$io$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__,_,filenames,map__48343,map__48343__$1,name,path))
})();
var state__20622__auto__ = (function (){var statearr_48366 = f__20621__auto__.call(null);
(statearr_48366[(6)] = c__20620__auto__);

return statearr_48366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__,_,filenames,map__48343,map__48343__$1,name,path))
);

return c__20620__auto__;
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

var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__,prefix,filenames,map__48343,map__48343__$1,name,path){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__,prefix,filenames,map__48343,map__48343__$1,name,path){
return (function (state_48377){
var state_val_48378 = (state_48377[(1)]);
if((state_val_48378 === (1))){
var inst_48367 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_48377__$1 = state_48377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48377__$1,(2),inst_48367);
} else {
if((state_val_48378 === (2))){
var inst_48369 = (state_48377[(2)]);
var state_48377__$1 = state_48377;
if(cljs.core.truth_(inst_48369)){
var statearr_48379_48416 = state_48377__$1;
(statearr_48379_48416[(1)] = (3));

} else {
var statearr_48380_48417 = state_48377__$1;
(statearr_48380_48417[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48378 === (3))){
var state_48377__$1 = state_48377;
var statearr_48381_48418 = state_48377__$1;
(statearr_48381_48418[(2)] = null);

(statearr_48381_48418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48378 === (4))){
var inst_48372 = [prefix,".js"].join('');
var inst_48373 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_48372,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_48377__$1 = state_48377;
var statearr_48382_48419 = state_48377__$1;
(statearr_48382_48419[(2)] = inst_48373);

(statearr_48382_48419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48378 === (5))){
var inst_48375 = (state_48377[(2)]);
var state_48377__$1 = state_48377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48377__$1,inst_48375);
} else {
return null;
}
}
}
}
}
});})(c__20620__auto__,prefix,filenames,map__48343,map__48343__$1,name,path))
;
return ((function (switch__20453__auto__,c__20620__auto__,prefix,filenames,map__48343,map__48343__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__20454__auto____0 = (function (){
var statearr_48383 = [null,null,null,null,null,null,null];
(statearr_48383[(0)] = klipse_clj$lang$clojure$io$state_machine__20454__auto__);

(statearr_48383[(1)] = (1));

return statearr_48383;
});
var klipse_clj$lang$clojure$io$state_machine__20454__auto____1 = (function (state_48377){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48384){if((e48384 instanceof Object)){
var ex__20457__auto__ = e48384;
var statearr_48385_48420 = state_48377;
(statearr_48385_48420[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48421 = state_48377;
state_48377 = G__48421;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__20454__auto__ = function(state_48377){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__20454__auto____1.call(this,state_48377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__20454__auto____0;
klipse_clj$lang$clojure$io$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__20454__auto____1;
return klipse_clj$lang$clojure$io$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__,prefix,filenames,map__48343,map__48343__$1,name,path))
})();
var state__20622__auto__ = (function (){var statearr_48386 = f__20621__auto__.call(null);
(statearr_48386[(6)] = c__20620__auto__);

return statearr_48386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__,prefix,filenames,map__48343,map__48343__$1,name,path))
);

return c__20620__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__,filenames,map__48343,map__48343__$1,name,path){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__,filenames,map__48343,map__48343__$1,name,path){
return (function (state_48400){
var state_val_48401 = (state_48400[(1)]);
if((state_val_48401 === (1))){
var inst_48387 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_48400__$1 = state_48400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48400__$1,(2),inst_48387);
} else {
if((state_val_48401 === (2))){
var inst_48389 = (state_48400[(2)]);
var state_48400__$1 = state_48400;
if(cljs.core.truth_(inst_48389)){
var statearr_48402_48422 = state_48400__$1;
(statearr_48402_48422[(1)] = (3));

} else {
var statearr_48403_48423 = state_48400__$1;
(statearr_48403_48423[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48401 === (3))){
var state_48400__$1 = state_48400;
var statearr_48404_48424 = state_48400__$1;
(statearr_48404_48424[(2)] = null);

(statearr_48404_48424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48401 === (4))){
var inst_48392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48393 = [".js"];
var inst_48394 = (new cljs.core.PersistentVector(null,1,(5),inst_48392,inst_48393,null));
var inst_48395 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_48394,path);
var inst_48396 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_48395,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_48400__$1 = state_48400;
var statearr_48405_48425 = state_48400__$1;
(statearr_48405_48425[(2)] = inst_48396);

(statearr_48405_48425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48401 === (5))){
var inst_48398 = (state_48400[(2)]);
var state_48400__$1 = state_48400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48400__$1,inst_48398);
} else {
return null;
}
}
}
}
}
});})(c__20620__auto__,filenames,map__48343,map__48343__$1,name,path))
;
return ((function (switch__20453__auto__,c__20620__auto__,filenames,map__48343,map__48343__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__20454__auto____0 = (function (){
var statearr_48406 = [null,null,null,null,null,null,null];
(statearr_48406[(0)] = klipse_clj$lang$clojure$io$state_machine__20454__auto__);

(statearr_48406[(1)] = (1));

return statearr_48406;
});
var klipse_clj$lang$clojure$io$state_machine__20454__auto____1 = (function (state_48400){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48407){if((e48407 instanceof Object)){
var ex__20457__auto__ = e48407;
var statearr_48408_48426 = state_48400;
(statearr_48408_48426[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48427 = state_48400;
state_48400 = G__48427;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__20454__auto__ = function(state_48400){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__20454__auto____1.call(this,state_48400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__20454__auto____0;
klipse_clj$lang$clojure$io$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__20454__auto____1;
return klipse_clj$lang$clojure$io$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__,filenames,map__48343,map__48343__$1,name,path))
})();
var state__20622__auto__ = (function (){var statearr_48409 = f__20621__auto__.call(null);
(statearr_48409[(6)] = c__20620__auto__);

return statearr_48409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__,filenames,map__48343,map__48343__$1,name,path))
);

return c__20620__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__48429,src_cb){
var map__48430 = p__48429;
var map__48430__$1 = (((((!((map__48430 == null))))?(((((map__48430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48430):map__48430);
var name = cljs.core.get.call(null,map__48430__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__48430__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__48430,map__48430__$1,name,path){
return (function (p1__48428_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48428_SHARP_),".js"].join('');
});})(closure_github_path,map__48430,map__48430__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
