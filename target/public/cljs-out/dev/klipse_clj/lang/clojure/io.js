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
klipse_clj.lang.clojure.io.load_ns = (function (){var method_table__21323__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21324__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21325__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21326__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21327__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),((function (method_table__21323__auto__,prefer_table__21324__auto__,method_cache__21325__auto__,cached_hierarchy__21326__auto__,hierarchy__21327__auto__){
return (function (_,p__31912,src_cb){
var map__31913 = p__31912;
var map__31913__$1 = (((((!((map__31913 == null))))?(((((map__31913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31913):map__31913);
var name = cljs.core.get.call(null,map__31913__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__31913__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__31913__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
});})(method_table__21323__auto__,prefer_table__21324__auto__,method_cache__21325__auto__,cached_hierarchy__21326__auto__,hierarchy__21327__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21327__auto__,method_table__21323__auto__,prefer_table__21324__auto__,method_cache__21325__auto__,cached_hierarchy__21326__auto__));
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
var args__21784__auto__ = [];
var len__21769__auto___32029 = arguments.length;
var i__21770__auto___32030 = (0);
while(true){
if((i__21770__auto___32030 < len__21769__auto___32029)){
args__21784__auto__.push((arguments[i__21770__auto___32030]));

var G__32031 = (i__21770__auto___32030 + (1));
i__21770__auto___32030 = G__32031;
continue;
} else {
}
break;
}

var argseq__21785__auto__ = ((((4) < args__21784__auto__.length))?(new cljs.core.IndexedSeq(args__21784__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21785__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__31920){
var map__31921 = p__31920;
var map__31921__$1 = (((((!((map__31921 == null))))?(((((map__31921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31921):map__31921);
var transform = cljs.core.get.call(null,map__31921__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__31921__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__26438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26438__auto__,map__31921,map__31921__$1,transform,can_recover_QMARK_){
return (function (){
var f__26439__auto__ = (function (){var switch__26415__auto__ = ((function (c__26438__auto__,map__31921,map__31921__$1,transform,can_recover_QMARK_){
return (function (state_31986){
var state_val_31987 = (state_31986[(1)]);
if((state_val_31987 === (7))){
var inst_31935 = (state_31986[(7)]);
var inst_31935__$1 = (state_31986[(2)]);
var inst_31937 = (inst_31935__$1 == null);
var inst_31938 = cljs.core.not.call(null,inst_31937);
var state_31986__$1 = (function (){var statearr_31988 = state_31986;
(statearr_31988[(7)] = inst_31935__$1);

return statearr_31988;
})();
if(inst_31938){
var statearr_31989_32032 = state_31986__$1;
(statearr_31989_32032[(1)] = (8));

} else {
var statearr_31990_32033 = state_31986__$1;
(statearr_31990_32033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (20))){
var state_31986__$1 = state_31986;
var statearr_31991_32034 = state_31986__$1;
(statearr_31991_32034[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_31991_32034[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (1))){
var inst_31923 = filenames;
var state_31986__$1 = (function (){var statearr_31992 = state_31986;
(statearr_31992[(8)] = inst_31923);

return statearr_31992;
})();
var statearr_31993_32035 = state_31986__$1;
(statearr_31993_32035[(2)] = null);

(statearr_31993_32035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (24))){
var inst_31980 = src_cb.call(null,null);
var state_31986__$1 = state_31986;
var statearr_31994_32036 = state_31986__$1;
(statearr_31994_32036[(2)] = inst_31980);

(statearr_31994_32036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (4))){
var inst_31923 = (state_31986[(8)]);
var inst_31928 = (state_31986[(9)]);
var inst_31928__$1 = cljs.core.first.call(null,inst_31923);
var inst_31929 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_31928__$1);
var inst_31930 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_31931 = [false];
var inst_31932 = cljs.core.PersistentHashMap.fromArrays(inst_31930,inst_31931);
var inst_31933 = cljs_http.client.get.call(null,inst_31929,inst_31932);
var state_31986__$1 = (function (){var statearr_31995 = state_31986;
(statearr_31995[(9)] = inst_31928__$1);

return statearr_31995;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31986__$1,(7),inst_31933);
} else {
if((state_val_31987 === (15))){
var inst_31935 = (state_31986[(7)]);
var state_31986__$1 = state_31986;
var statearr_31996_32037 = state_31986__$1;
(statearr_31996_32037[(2)] = inst_31935);

(statearr_31996_32037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (21))){
var state_31986__$1 = state_31986;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_31997_32038 = state_31986__$1;
(statearr_31997_32038[(1)] = (23));

} else {
var statearr_31998_32039 = state_31986__$1;
(statearr_31998_32039[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (13))){
var inst_31948 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
var statearr_31999_32040 = state_31986__$1;
(statearr_31999_32040[(2)] = inst_31948);

(statearr_31999_32040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (22))){
var inst_31984 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31986__$1,inst_31984);
} else {
if((state_val_31987 === (6))){
var inst_31973 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
var statearr_32000_32041 = state_31986__$1;
(statearr_32000_32041[(2)] = inst_31973);

(statearr_32000_32041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (25))){
var inst_31982 = (state_31986[(2)]);
var state_31986__$1 = (function (){var statearr_32001 = state_31986;
(statearr_32001[(10)] = inst_31982);

return statearr_32001;
})();
var statearr_32002_32042 = state_31986__$1;
(statearr_32002_32042[(2)] = false);

(statearr_32002_32042[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (17))){
var inst_31958 = (state_31986[(11)]);
var inst_31928 = (state_31986[(9)]);
var inst_31961 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_31962 = transform.call(null,inst_31958);
var inst_31963 = [lang,inst_31962,inst_31928];
var inst_31964 = cljs.core.PersistentHashMap.fromArrays(inst_31961,inst_31963);
var inst_31965 = src_cb.call(null,inst_31964);
var state_31986__$1 = (function (){var statearr_32003 = state_31986;
(statearr_32003[(12)] = inst_31965);

return statearr_32003;
})();
var statearr_32004_32043 = state_31986__$1;
(statearr_32004_32043[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_32004_32043[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (3))){
var inst_31975 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
if(cljs.core.truth_(inst_31975)){
var statearr_32005_32044 = state_31986__$1;
(statearr_32005_32044[(1)] = (20));

} else {
var statearr_32006_32045 = state_31986__$1;
(statearr_32006_32045[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (12))){
var state_31986__$1 = state_31986;
var statearr_32007_32046 = state_31986__$1;
(statearr_32007_32046[(2)] = false);

(statearr_32007_32046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (2))){
var inst_31923 = (state_31986[(8)]);
var inst_31925 = cljs.core.seq.call(null,inst_31923);
var state_31986__$1 = state_31986;
if(inst_31925){
var statearr_32008_32047 = state_31986__$1;
(statearr_32008_32047[(1)] = (4));

} else {
var statearr_32009_32048 = state_31986__$1;
(statearr_32009_32048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (23))){
var state_31986__$1 = state_31986;
var statearr_32010_32049 = state_31986__$1;
(statearr_32010_32049[(2)] = null);

(statearr_32010_32049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (19))){
var inst_31970 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
var statearr_32011_32050 = state_31986__$1;
(statearr_32011_32050[(2)] = inst_31970);

(statearr_32011_32050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (11))){
var state_31986__$1 = state_31986;
var statearr_32012_32051 = state_31986__$1;
(statearr_32012_32051[(2)] = true);

(statearr_32012_32051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (9))){
var state_31986__$1 = state_31986;
var statearr_32013_32052 = state_31986__$1;
(statearr_32013_32052[(2)] = false);

(statearr_32013_32052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (5))){
var state_31986__$1 = state_31986;
var statearr_32014_32053 = state_31986__$1;
(statearr_32014_32053[(2)] = null);

(statearr_32014_32053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (14))){
var inst_31935 = (state_31986[(7)]);
var inst_31953 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31935);
var state_31986__$1 = state_31986;
var statearr_32015_32054 = state_31986__$1;
(statearr_32015_32054[(2)] = inst_31953);

(statearr_32015_32054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (16))){
var inst_31956 = (state_31986[(2)]);
var inst_31957 = cljs.core.get.call(null,inst_31956,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_31958 = cljs.core.get.call(null,inst_31956,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_31959 = cljs.core._EQ_.call(null,(200),inst_31957);
var state_31986__$1 = (function (){var statearr_32016 = state_31986;
(statearr_32016[(11)] = inst_31958);

return statearr_32016;
})();
if(inst_31959){
var statearr_32017_32055 = state_31986__$1;
(statearr_32017_32055[(1)] = (17));

} else {
var statearr_32018_32056 = state_31986__$1;
(statearr_32018_32056[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (10))){
var inst_31951 = (state_31986[(2)]);
var state_31986__$1 = state_31986;
if(cljs.core.truth_(inst_31951)){
var statearr_32019_32057 = state_31986__$1;
(statearr_32019_32057[(1)] = (14));

} else {
var statearr_32020_32058 = state_31986__$1;
(statearr_32020_32058[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (18))){
var inst_31923 = (state_31986[(8)]);
var inst_31967 = cljs.core.rest.call(null,inst_31923);
var inst_31923__$1 = inst_31967;
var state_31986__$1 = (function (){var statearr_32021 = state_31986;
(statearr_32021[(8)] = inst_31923__$1);

return statearr_32021;
})();
var statearr_32022_32059 = state_31986__$1;
(statearr_32022_32059[(2)] = null);

(statearr_32022_32059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31987 === (8))){
var inst_31935 = (state_31986[(7)]);
var inst_31940 = inst_31935.cljs$lang$protocol_mask$partition0$;
var inst_31941 = (inst_31940 & (64));
var inst_31942 = inst_31935.cljs$core$ISeq$;
var inst_31943 = (cljs.core.PROTOCOL_SENTINEL === inst_31942);
var inst_31944 = ((inst_31941) || (inst_31943));
var state_31986__$1 = state_31986;
if(cljs.core.truth_(inst_31944)){
var statearr_32023_32060 = state_31986__$1;
(statearr_32023_32060[(1)] = (11));

} else {
var statearr_32024_32061 = state_31986__$1;
(statearr_32024_32061[(1)] = (12));

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
});})(c__26438__auto__,map__31921,map__31921__$1,transform,can_recover_QMARK_))
;
return ((function (switch__26415__auto__,c__26438__auto__,map__31921,map__31921__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__26416__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__26416__auto____0 = (function (){
var statearr_32025 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32025[(0)] = klipse_clj$lang$clojure$io$state_machine__26416__auto__);

(statearr_32025[(1)] = (1));

return statearr_32025;
});
var klipse_clj$lang$clojure$io$state_machine__26416__auto____1 = (function (state_31986){
while(true){
var ret_value__26417__auto__ = (function (){try{while(true){
var result__26418__auto__ = switch__26415__auto__.call(null,state_31986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26418__auto__;
}
break;
}
}catch (e32026){if((e32026 instanceof Object)){
var ex__26419__auto__ = e32026;
var statearr_32027_32062 = state_31986;
(statearr_32027_32062[(5)] = ex__26419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32063 = state_31986;
state_31986 = G__32063;
continue;
} else {
return ret_value__26417__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__26416__auto__ = function(state_31986){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__26416__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__26416__auto____1.call(this,state_31986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__26416__auto____0;
klipse_clj$lang$clojure$io$state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__26416__auto____1;
return klipse_clj$lang$clojure$io$state_machine__26416__auto__;
})()
;})(switch__26415__auto__,c__26438__auto__,map__31921,map__31921__$1,transform,can_recover_QMARK_))
})();
var state__26440__auto__ = (function (){var statearr_32028 = f__26439__auto__.call(null);
(statearr_32028[(6)] = c__26438__auto__);

return statearr_32028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26440__auto__);
});})(c__26438__auto__,map__31921,map__31921__$1,transform,can_recover_QMARK_))
);

return c__26438__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq31915){
var G__31916 = cljs.core.first.call(null,seq31915);
var seq31915__$1 = cljs.core.next.call(null,seq31915);
var G__31917 = cljs.core.first.call(null,seq31915__$1);
var seq31915__$2 = cljs.core.next.call(null,seq31915__$1);
var G__31918 = cljs.core.first.call(null,seq31915__$2);
var seq31915__$3 = cljs.core.next.call(null,seq31915__$2);
var G__31919 = cljs.core.first.call(null,seq31915__$3);
var seq31915__$4 = cljs.core.next.call(null,seq31915__$3);
var self__21743__auto__ = this;
return self__21743__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31916,G__31917,G__31918,G__31919,seq31915__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__20999__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__32064(s__32065){
return (new cljs.core.LazySeq(null,(function (){
var s__32065__$1 = s__32065;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32065__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var lib = cljs.core.first.call(null,xs__6012__auto__);
var iterys__20994__auto__ = ((function (s__32065__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__32064_$_iter__32066(s__32067){
return (new cljs.core.LazySeq(null,((function (s__32065__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__32067__$1 = s__32067;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__32067__$1);
if(temp__5457__auto____$1){
var s__32067__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32067__$2)){
var c__20997__auto__ = cljs.core.chunk_first.call(null,s__32067__$2);
var size__20998__auto__ = cljs.core.count.call(null,c__20997__auto__);
var b__32069 = cljs.core.chunk_buffer.call(null,size__20998__auto__);
if((function (){var i__32068 = (0);
while(true){
if((i__32068 < size__20998__auto__)){
var suffix = cljs.core._nth.call(null,c__20997__auto__,i__32068);
cljs.core.chunk_append.call(null,b__32069,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__32070 = (i__32068 + (1));
i__32068 = G__32070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32069),klipse_clj$lang$clojure$io$external_libs_files_$_iter__32064_$_iter__32066.call(null,cljs.core.chunk_rest.call(null,s__32067__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32069),null);
}
} else {
var suffix = cljs.core.first.call(null,s__32067__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__32064_$_iter__32066.call(null,cljs.core.rest.call(null,s__32067__$2)));
}
} else {
return null;
}
break;
}
});})(s__32065__$1,lib,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__32065__$1,lib,xs__6012__auto__,temp__5457__auto__))
;
var fs__20995__auto__ = cljs.core.seq.call(null,iterys__20994__auto__.call(null,suffixes));
if(fs__20995__auto__){
return cljs.core.concat.call(null,fs__20995__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__32064.call(null,cljs.core.rest.call(null,s__32065__$1)));
} else {
var G__32071 = cljs.core.rest.call(null,s__32065__$1);
s__32065__$1 = G__32071;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20999__auto__.call(null,external_libs);
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

var c__26438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26438__auto__){
return (function (){
var f__26439__auto__ = (function (){var switch__26415__auto__ = ((function (c__26438__auto__){
return (function (state_32116){
var state_val_32117 = (state_32116[(1)]);
if((state_val_32117 === (1))){
var inst_32073 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_32116__$1 = (function (){var statearr_32118 = state_32116;
(statearr_32118[(7)] = inst_32073);

return statearr_32118;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_32119_32134 = state_32116__$1;
(statearr_32119_32134[(1)] = (2));

} else {
var statearr_32120_32135 = state_32116__$1;
(statearr_32120_32135[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (2))){
var state_32116__$1 = state_32116;
var statearr_32121_32136 = state_32116__$1;
(statearr_32121_32136[(2)] = "$macros");

(statearr_32121_32136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (3))){
var state_32116__$1 = state_32116;
var statearr_32122_32137 = state_32116__$1;
(statearr_32122_32137[(2)] = "");

(statearr_32122_32137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (4))){
var inst_32079 = (state_32116[(8)]);
var inst_32080 = (state_32116[(9)]);
var inst_32073 = (state_32116[(7)]);
var inst_32077 = (state_32116[(10)]);
var inst_32077__$1 = (state_32116[(2)]);
var inst_32078 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_32079__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32078),"/"].join('');
var inst_32080__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32079__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32073),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32077__$1),".js"].join('');
var inst_32081 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32079__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32073),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32077__$1),".cache.json"].join('');
var inst_32082 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_32080__$1);
var inst_32083 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_32084 = [false];
var inst_32085 = cljs.core.PersistentHashMap.fromArrays(inst_32083,inst_32084);
var inst_32086 = cljs_http.client.get.call(null,inst_32082,inst_32085);
var state_32116__$1 = (function (){var statearr_32123 = state_32116;
(statearr_32123[(11)] = inst_32081);

(statearr_32123[(8)] = inst_32079__$1);

(statearr_32123[(9)] = inst_32080__$1);

(statearr_32123[(10)] = inst_32077__$1);

return statearr_32123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32116__$1,(5),inst_32086);
} else {
if((state_val_32117 === (5))){
var inst_32081 = (state_32116[(11)]);
var inst_32088 = (state_32116[(2)]);
var inst_32089 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_32081);
var inst_32090 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_32091 = [false];
var inst_32092 = cljs.core.PersistentHashMap.fromArrays(inst_32090,inst_32091);
var inst_32093 = cljs_http.client.get.call(null,inst_32089,inst_32092);
var state_32116__$1 = (function (){var statearr_32124 = state_32116;
(statearr_32124[(12)] = inst_32088);

return statearr_32124;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32116__$1,(6),inst_32093);
} else {
if((state_val_32117 === (6))){
var inst_32081 = (state_32116[(11)]);
var inst_32079 = (state_32116[(8)]);
var inst_32088 = (state_32116[(12)]);
var inst_32080 = (state_32116[(9)]);
var inst_32073 = (state_32116[(7)]);
var inst_32077 = (state_32116[(10)]);
var inst_32095 = (state_32116[(13)]);
var inst_32095__$1 = (state_32116[(2)]);
var inst_32096 = (function (){var nn = inst_32073;
var suffix = inst_32077;
var root = inst_32079;
var src_filename = inst_32080;
var cache_filename = inst_32081;
var src = inst_32088;
var cache = inst_32095__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_32081,inst_32079,inst_32088,inst_32080,inst_32073,inst_32077,inst_32095,inst_32095__$1,state_val_32117,c__26438__auto__){
return (function (p1__32072_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__32072_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_32081,inst_32079,inst_32088,inst_32080,inst_32073,inst_32077,inst_32095,inst_32095__$1,state_val_32117,c__26438__auto__))
})();
var inst_32097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32098 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_32095__$1);
var inst_32099 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_32088);
var inst_32100 = [inst_32098,inst_32099];
var inst_32101 = (new cljs.core.PersistentVector(null,2,(5),inst_32097,inst_32100,null));
var inst_32102 = cljs.core.every_QMARK_.call(null,inst_32096,inst_32101);
var state_32116__$1 = (function (){var statearr_32125 = state_32116;
(statearr_32125[(13)] = inst_32095__$1);

return statearr_32125;
})();
if(inst_32102){
var statearr_32126_32138 = state_32116__$1;
(statearr_32126_32138[(1)] = (7));

} else {
var statearr_32127_32139 = state_32116__$1;
(statearr_32127_32139[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (7))){
var inst_32088 = (state_32116[(12)]);
var inst_32095 = (state_32116[(13)]);
var inst_32104 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_32105 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32095);
var inst_32106 = klipse_clj.lang.clojure.io.edn.call(null,inst_32105);
var inst_32107 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32088);
var inst_32108 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_32106,inst_32107];
var inst_32109 = cljs.core.PersistentHashMap.fromArrays(inst_32104,inst_32108);
var inst_32110 = src_cb.call(null,inst_32109);
var state_32116__$1 = state_32116;
var statearr_32128_32140 = state_32116__$1;
(statearr_32128_32140[(2)] = inst_32110);

(statearr_32128_32140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (8))){
var inst_32112 = src_cb.call(null,null);
var state_32116__$1 = state_32116;
var statearr_32129_32141 = state_32116__$1;
(statearr_32129_32141[(2)] = inst_32112);

(statearr_32129_32141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (9))){
var inst_32114 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32116__$1,inst_32114);
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
});})(c__26438__auto__))
;
return ((function (switch__26415__auto__,c__26438__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto____0 = (function (){
var statearr_32130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32130[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto__);

(statearr_32130[(1)] = (1));

return statearr_32130;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto____1 = (function (state_32116){
while(true){
var ret_value__26417__auto__ = (function (){try{while(true){
var result__26418__auto__ = switch__26415__auto__.call(null,state_32116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26418__auto__;
}
break;
}
}catch (e32131){if((e32131 instanceof Object)){
var ex__26419__auto__ = e32131;
var statearr_32132_32142 = state_32116;
(statearr_32132_32142[(5)] = ex__26419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32143 = state_32116;
state_32116 = G__32143;
continue;
} else {
return ret_value__26417__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto__ = function(state_32116){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto____1.call(this,state_32116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__26416__auto__;
})()
;})(switch__26415__auto__,c__26438__auto__))
})();
var state__26440__auto__ = (function (){var statearr_32133 = f__26439__auto__.call(null);
(statearr_32133[(6)] = c__26438__auto__);

return statearr_32133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26440__auto__);
});})(c__26438__auto__))
);

return c__26438__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__26438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26438__auto__){
return (function (){
var f__26439__auto__ = (function (){var switch__26415__auto__ = ((function (c__26438__auto__){
return (function (state_32183){
var state_val_32184 = (state_32183[(1)]);
if((state_val_32184 === (7))){
var state_32183__$1 = state_32183;
var statearr_32185_32207 = state_32183__$1;
(statearr_32185_32207[(2)] = false);

(statearr_32185_32207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (1))){
var inst_32145 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_32146 = [false];
var inst_32147 = cljs.core.PersistentHashMap.fromArrays(inst_32145,inst_32146);
var inst_32148 = cljs_http.client.get.call(null,filename,inst_32147);
var state_32183__$1 = state_32183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32183__$1,(2),inst_32148);
} else {
if((state_val_32184 === (4))){
var state_32183__$1 = state_32183;
var statearr_32186_32208 = state_32183__$1;
(statearr_32186_32208[(2)] = false);

(statearr_32186_32208[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (13))){
var inst_32179 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_32183__$1 = state_32183;
var statearr_32187_32209 = state_32183__$1;
(statearr_32187_32209[(2)] = inst_32179);

(statearr_32187_32209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (6))){
var state_32183__$1 = state_32183;
var statearr_32188_32210 = state_32183__$1;
(statearr_32188_32210[(2)] = true);

(statearr_32188_32210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (3))){
var inst_32150 = (state_32183[(7)]);
var inst_32155 = inst_32150.cljs$lang$protocol_mask$partition0$;
var inst_32156 = (inst_32155 & (64));
var inst_32157 = inst_32150.cljs$core$ISeq$;
var inst_32158 = (cljs.core.PROTOCOL_SENTINEL === inst_32157);
var inst_32159 = ((inst_32156) || (inst_32158));
var state_32183__$1 = state_32183;
if(cljs.core.truth_(inst_32159)){
var statearr_32189_32211 = state_32183__$1;
(statearr_32189_32211[(1)] = (6));

} else {
var statearr_32190_32212 = state_32183__$1;
(statearr_32190_32212[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (12))){
var inst_32172 = (state_32183[(8)]);
var inst_32176 = klipse_clj.lang.clojure.io.edn.call(null,inst_32172);
var inst_32177 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_32176);
var state_32183__$1 = state_32183;
var statearr_32191_32213 = state_32183__$1;
(statearr_32191_32213[(2)] = inst_32177);

(statearr_32191_32213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (2))){
var inst_32150 = (state_32183[(7)]);
var inst_32150__$1 = (state_32183[(2)]);
var inst_32152 = (inst_32150__$1 == null);
var inst_32153 = cljs.core.not.call(null,inst_32152);
var state_32183__$1 = (function (){var statearr_32192 = state_32183;
(statearr_32192[(7)] = inst_32150__$1);

return statearr_32192;
})();
if(inst_32153){
var statearr_32193_32214 = state_32183__$1;
(statearr_32193_32214[(1)] = (3));

} else {
var statearr_32194_32215 = state_32183__$1;
(statearr_32194_32215[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (11))){
var inst_32171 = (state_32183[(2)]);
var inst_32172 = cljs.core.get.call(null,inst_32171,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_32173 = cljs.core.get.call(null,inst_32171,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_32174 = cljs.core._EQ_.call(null,(200),inst_32173);
var state_32183__$1 = (function (){var statearr_32195 = state_32183;
(statearr_32195[(8)] = inst_32172);

return statearr_32195;
})();
if(inst_32174){
var statearr_32196_32216 = state_32183__$1;
(statearr_32196_32216[(1)] = (12));

} else {
var statearr_32197_32217 = state_32183__$1;
(statearr_32197_32217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (9))){
var inst_32150 = (state_32183[(7)]);
var inst_32168 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32150);
var state_32183__$1 = state_32183;
var statearr_32198_32218 = state_32183__$1;
(statearr_32198_32218[(2)] = inst_32168);

(statearr_32198_32218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (5))){
var inst_32166 = (state_32183[(2)]);
var state_32183__$1 = state_32183;
if(cljs.core.truth_(inst_32166)){
var statearr_32199_32219 = state_32183__$1;
(statearr_32199_32219[(1)] = (9));

} else {
var statearr_32200_32220 = state_32183__$1;
(statearr_32200_32220[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (14))){
var inst_32181 = (state_32183[(2)]);
var state_32183__$1 = state_32183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32183__$1,inst_32181);
} else {
if((state_val_32184 === (10))){
var inst_32150 = (state_32183[(7)]);
var state_32183__$1 = state_32183;
var statearr_32201_32221 = state_32183__$1;
(statearr_32201_32221[(2)] = inst_32150);

(statearr_32201_32221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (8))){
var inst_32163 = (state_32183[(2)]);
var state_32183__$1 = state_32183;
var statearr_32202_32222 = state_32183__$1;
(statearr_32202_32222[(2)] = inst_32163);

(statearr_32202_32222[(1)] = (5));


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
});})(c__26438__auto__))
;
return ((function (switch__26415__auto__,c__26438__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto____0 = (function (){
var statearr_32203 = [null,null,null,null,null,null,null,null,null];
(statearr_32203[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto__);

(statearr_32203[(1)] = (1));

return statearr_32203;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto____1 = (function (state_32183){
while(true){
var ret_value__26417__auto__ = (function (){try{while(true){
var result__26418__auto__ = switch__26415__auto__.call(null,state_32183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26418__auto__;
}
break;
}
}catch (e32204){if((e32204 instanceof Object)){
var ex__26419__auto__ = e32204;
var statearr_32205_32223 = state_32183;
(statearr_32205_32223[(5)] = ex__26419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32224 = state_32183;
state_32183 = G__32224;
continue;
} else {
return ret_value__26417__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto__ = function(state_32183){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto____1.call(this,state_32183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__26416__auto__;
})()
;})(switch__26415__auto__,c__26438__auto__))
})();
var state__26440__auto__ = (function (){var statearr_32206 = f__26439__auto__.call(null);
(statearr_32206[(6)] = c__26438__auto__);

return statearr_32206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26440__auto__);
});})(c__26438__auto__))
);

return c__26438__auto__;
});
klipse_clj.lang.clojure.io.cached_macro_ns_regexp = (function klipse_clj$lang$clojure$io$cached_macro_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_macro_ns_regexp","clojure_cached_macro_ns_regexp",-771780299).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/klipse-clj\..*|klipse-clj\.repl|cljs\.reader|cljs\.core\.[async|match].*|clojure\.math\.macros|gadjett\.core|cljs\.test|clojure.test.check.*|reagent\..*|om\..*|cljs\.spec.*|cljs-time\..*|re-frame\..*|net\.cgrand\.macrovich|reagent-forms\..*|ajax\.macros|poppea|expound\..*/);
});
klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_macro_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_macro_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
klipse_clj.lang.clojure.io.cached_ns_regexp = (function klipse_clj$lang$clojure$io$cached_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_ns_regexp","clojure_cached_ns_regexp",-1735711110).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/cljs\.stacktrace|cljs\.core\.[async|match].*|cljs\.spec.*|clojure.math\.combinatorics|clojure.test.check.*|reagent\..*|om\..*|clojure\.data|cljs-time\..*|re-frame\..*|day8\.re-frame\..*|reagent-forms\..*|re-frisk\..*|re-frisk-shell\..*|datafrisk\..*|ajax\..*|cljs\.tools\.reader\..*|expound\..*/);
});
klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_cljs_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__32225,src_cb_original){
var map__32226 = p__32225;
var map__32226__$1 = (((((!((map__32226 == null))))?(((((map__32226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32226):map__32226);
var name = cljs.core.get.call(null,map__32226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__32226__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__32226,map__32226__$1,name,path){
return (function() { 
var G__32228__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__32228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32229__i = 0, G__32229__a = new Array(arguments.length -  0);
while (G__32229__i < G__32229__a.length) {G__32229__a[G__32229__i] = arguments[G__32229__i + 0]; ++G__32229__i;}
  args = new cljs.core.IndexedSeq(G__32229__a,0,null);
} 
return G__32228__delegate.call(this,args);};
G__32228.cljs$lang$maxFixedArity = 0;
G__32228.cljs$lang$applyTo = (function (arglist__32230){
var args = cljs.core.seq(arglist__32230);
return G__32228__delegate(args);
});
G__32228.cljs$core$IFn$_invoke$arity$variadic = G__32228__delegate;
return G__32228;
})()
;})(map__32226,map__32226__$1,name,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__32232,src_cb){
var map__32233 = p__32232;
var map__32233__$1 = (((((!((map__32233 == null))))?(((((map__32233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32233):map__32233);
var path = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__32233,map__32233__$1,path){
return (function (p1__32231_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32231_SHARP_)].join('');
});})(path__$1,map__32233,map__32233__$1,path))
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
return cljs.core.re_matches.call(null,regexp,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
return null;
}
});
klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_ = (function klipse_clj$lang$clojure$io$buggy_bundled_ns_ignore_QMARK_(name){
return cljs.core.re_matches.call(null,/.*reagent.*|cljs.core.async.*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
/**
 * Checks whether a namespace is present at run-time
 */
klipse_clj.lang.clojure.io.bundled_ns_QMARK_ = (function klipse_clj$lang$clojure$io$bundled_ns_QMARK_(name){
if(cljs.core.truth_((function (){var or__19429__auto__ = klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__19429__auto__)){
return or__19429__auto__;
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
var or__19429__auto__ = (function (){var and__19406__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__19406__auto__){
return (window["React"]);
} else {
return and__19406__auto__;
}
})();
if(cljs.core.truth_(or__19429__auto__)){
return or__19429__auto__;
} else {
var or__19429__auto____$1 = (function (){var and__19406__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__19406__auto__){
return (window["ReactDOMServer"]);
} else {
return and__19406__auto__;
}
})();
if(cljs.core.truth_(or__19429__auto____$1)){
return or__19429__auto____$1;
} else {
var and__19406__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__19406__auto__){
return (window["ReactDOM"]);
} else {
return and__19406__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__32236,src_cb){
var map__32237 = p__32236;
var map__32237__$1 = (((((!((map__32237 == null))))?(((((map__32237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32237):map__32237);
var name = cljs.core.get.call(null,map__32237__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__32237__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var filenames = cljs.core.map.call(null,((function (_,map__32237,map__32237__$1,name,path){
return (function (p1__32235_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32235_SHARP_),".cache.json"].join('');
});})(_,map__32237,map__32237__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__26438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26438__auto__,_,filenames,map__32237,map__32237__$1,name,path){
return (function (){
var f__26439__auto__ = (function (){var switch__26415__auto__ = ((function (c__26438__auto__,_,filenames,map__32237,map__32237__$1,name,path){
return (function (state_32251){
var state_val_32252 = (state_32251[(1)]);
if((state_val_32252 === (1))){
var inst_32239 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32251__$1,(2),inst_32239);
} else {
if((state_val_32252 === (2))){
var inst_32241 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
if(cljs.core.truth_(inst_32241)){
var statearr_32253_32304 = state_32251__$1;
(statearr_32253_32304[(1)] = (3));

} else {
var statearr_32254_32305 = state_32251__$1;
(statearr_32254_32305[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (3))){
var state_32251__$1 = state_32251;
var statearr_32255_32306 = state_32251__$1;
(statearr_32255_32306[(2)] = null);

(statearr_32255_32306[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (4))){
var inst_32244 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_32245 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_32246 = cljs.core.PersistentHashMap.fromArrays(inst_32244,inst_32245);
var inst_32247 = src_cb.call(null,inst_32246);
var state_32251__$1 = state_32251;
var statearr_32256_32307 = state_32251__$1;
(statearr_32256_32307[(2)] = inst_32247);

(statearr_32256_32307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (5))){
var inst_32249 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32251__$1,inst_32249);
} else {
return null;
}
}
}
}
}
});})(c__26438__auto__,_,filenames,map__32237,map__32237__$1,name,path))
;
return ((function (switch__26415__auto__,c__26438__auto__,_,filenames,map__32237,map__32237__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__26416__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__26416__auto____0 = (function (){
var statearr_32257 = [null,null,null,null,null,null,null];
(statearr_32257[(0)] = klipse_clj$lang$clojure$io$state_machine__26416__auto__);

(statearr_32257[(1)] = (1));

return statearr_32257;
});
var klipse_clj$lang$clojure$io$state_machine__26416__auto____1 = (function (state_32251){
while(true){
var ret_value__26417__auto__ = (function (){try{while(true){
var result__26418__auto__ = switch__26415__auto__.call(null,state_32251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26418__auto__;
}
break;
}
}catch (e32258){if((e32258 instanceof Object)){
var ex__26419__auto__ = e32258;
var statearr_32259_32308 = state_32251;
(statearr_32259_32308[(5)] = ex__26419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32309 = state_32251;
state_32251 = G__32309;
continue;
} else {
return ret_value__26417__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__26416__auto__ = function(state_32251){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__26416__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__26416__auto____1.call(this,state_32251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__26416__auto____0;
klipse_clj$lang$clojure$io$state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__26416__auto____1;
return klipse_clj$lang$clojure$io$state_machine__26416__auto__;
})()
;})(switch__26415__auto__,c__26438__auto__,_,filenames,map__32237,map__32237__$1,name,path))
})();
var state__26440__auto__ = (function (){var statearr_32260 = f__26439__auto__.call(null);
(statearr_32260[(6)] = c__26438__auto__);

return statearr_32260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26440__auto__);
});})(c__26438__auto__,_,filenames,map__32237,map__32237__$1,name,path))
);

return c__26438__auto__;
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

var c__26438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26438__auto__,prefix,filenames,map__32237,map__32237__$1,name,path){
return (function (){
var f__26439__auto__ = (function (){var switch__26415__auto__ = ((function (c__26438__auto__,prefix,filenames,map__32237,map__32237__$1,name,path){
return (function (state_32271){
var state_val_32272 = (state_32271[(1)]);
if((state_val_32272 === (1))){
var inst_32261 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_32271__$1 = state_32271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32271__$1,(2),inst_32261);
} else {
if((state_val_32272 === (2))){
var inst_32263 = (state_32271[(2)]);
var state_32271__$1 = state_32271;
if(cljs.core.truth_(inst_32263)){
var statearr_32273_32310 = state_32271__$1;
(statearr_32273_32310[(1)] = (3));

} else {
var statearr_32274_32311 = state_32271__$1;
(statearr_32274_32311[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (3))){
var state_32271__$1 = state_32271;
var statearr_32275_32312 = state_32271__$1;
(statearr_32275_32312[(2)] = null);

(statearr_32275_32312[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (4))){
var inst_32266 = [prefix,".js"].join('');
var inst_32267 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_32266,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_32271__$1 = state_32271;
var statearr_32276_32313 = state_32271__$1;
(statearr_32276_32313[(2)] = inst_32267);

(statearr_32276_32313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (5))){
var inst_32269 = (state_32271[(2)]);
var state_32271__$1 = state_32271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32271__$1,inst_32269);
} else {
return null;
}
}
}
}
}
});})(c__26438__auto__,prefix,filenames,map__32237,map__32237__$1,name,path))
;
return ((function (switch__26415__auto__,c__26438__auto__,prefix,filenames,map__32237,map__32237__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__26416__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__26416__auto____0 = (function (){
var statearr_32277 = [null,null,null,null,null,null,null];
(statearr_32277[(0)] = klipse_clj$lang$clojure$io$state_machine__26416__auto__);

(statearr_32277[(1)] = (1));

return statearr_32277;
});
var klipse_clj$lang$clojure$io$state_machine__26416__auto____1 = (function (state_32271){
while(true){
var ret_value__26417__auto__ = (function (){try{while(true){
var result__26418__auto__ = switch__26415__auto__.call(null,state_32271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26418__auto__;
}
break;
}
}catch (e32278){if((e32278 instanceof Object)){
var ex__26419__auto__ = e32278;
var statearr_32279_32314 = state_32271;
(statearr_32279_32314[(5)] = ex__26419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32315 = state_32271;
state_32271 = G__32315;
continue;
} else {
return ret_value__26417__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__26416__auto__ = function(state_32271){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__26416__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__26416__auto____1.call(this,state_32271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__26416__auto____0;
klipse_clj$lang$clojure$io$state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__26416__auto____1;
return klipse_clj$lang$clojure$io$state_machine__26416__auto__;
})()
;})(switch__26415__auto__,c__26438__auto__,prefix,filenames,map__32237,map__32237__$1,name,path))
})();
var state__26440__auto__ = (function (){var statearr_32280 = f__26439__auto__.call(null);
(statearr_32280[(6)] = c__26438__auto__);

return statearr_32280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26440__auto__);
});})(c__26438__auto__,prefix,filenames,map__32237,map__32237__$1,name,path))
);

return c__26438__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__26438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26438__auto__,filenames,map__32237,map__32237__$1,name,path){
return (function (){
var f__26439__auto__ = (function (){var switch__26415__auto__ = ((function (c__26438__auto__,filenames,map__32237,map__32237__$1,name,path){
return (function (state_32294){
var state_val_32295 = (state_32294[(1)]);
if((state_val_32295 === (1))){
var inst_32281 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_32294__$1 = state_32294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32294__$1,(2),inst_32281);
} else {
if((state_val_32295 === (2))){
var inst_32283 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
if(cljs.core.truth_(inst_32283)){
var statearr_32296_32316 = state_32294__$1;
(statearr_32296_32316[(1)] = (3));

} else {
var statearr_32297_32317 = state_32294__$1;
(statearr_32297_32317[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (3))){
var state_32294__$1 = state_32294;
var statearr_32298_32318 = state_32294__$1;
(statearr_32298_32318[(2)] = null);

(statearr_32298_32318[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (4))){
var inst_32286 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32287 = [".js"];
var inst_32288 = (new cljs.core.PersistentVector(null,1,(5),inst_32286,inst_32287,null));
var inst_32289 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_32288,path);
var inst_32290 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_32289,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_32294__$1 = state_32294;
var statearr_32299_32319 = state_32294__$1;
(statearr_32299_32319[(2)] = inst_32290);

(statearr_32299_32319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (5))){
var inst_32292 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32294__$1,inst_32292);
} else {
return null;
}
}
}
}
}
});})(c__26438__auto__,filenames,map__32237,map__32237__$1,name,path))
;
return ((function (switch__26415__auto__,c__26438__auto__,filenames,map__32237,map__32237__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__26416__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__26416__auto____0 = (function (){
var statearr_32300 = [null,null,null,null,null,null,null];
(statearr_32300[(0)] = klipse_clj$lang$clojure$io$state_machine__26416__auto__);

(statearr_32300[(1)] = (1));

return statearr_32300;
});
var klipse_clj$lang$clojure$io$state_machine__26416__auto____1 = (function (state_32294){
while(true){
var ret_value__26417__auto__ = (function (){try{while(true){
var result__26418__auto__ = switch__26415__auto__.call(null,state_32294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26418__auto__;
}
break;
}
}catch (e32301){if((e32301 instanceof Object)){
var ex__26419__auto__ = e32301;
var statearr_32302_32320 = state_32294;
(statearr_32302_32320[(5)] = ex__26419__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32321 = state_32294;
state_32294 = G__32321;
continue;
} else {
return ret_value__26417__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__26416__auto__ = function(state_32294){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__26416__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__26416__auto____1.call(this,state_32294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__26416__auto____0;
klipse_clj$lang$clojure$io$state_machine__26416__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__26416__auto____1;
return klipse_clj$lang$clojure$io$state_machine__26416__auto__;
})()
;})(switch__26415__auto__,c__26438__auto__,filenames,map__32237,map__32237__$1,name,path))
})();
var state__26440__auto__ = (function (){var statearr_32303 = f__26439__auto__.call(null);
(statearr_32303[(6)] = c__26438__auto__);

return statearr_32303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26440__auto__);
});})(c__26438__auto__,filenames,map__32237,map__32237__$1,name,path))
);

return c__26438__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__32323,src_cb){
var map__32324 = p__32323;
var map__32324__$1 = (((((!((map__32324 == null))))?(((((map__32324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32324):map__32324);
var name = cljs.core.get.call(null,map__32324__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__32324__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__32324,map__32324__$1,name,path){
return (function (p1__32322_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32322_SHARP_),".js"].join('');
});})(closure_github_path,map__32324,map__32324__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
