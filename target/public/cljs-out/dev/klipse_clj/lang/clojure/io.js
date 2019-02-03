// Compiled by ClojureScript 1.10.516 {}
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
klipse_clj.lang.clojure.io.load_ns = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,p__18843,src_cb){
var map__18844 = p__18843;
var map__18844__$1 = (((((!((map__18844 == null))))?(((((map__18844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18844):map__18844);
var name = cljs.core.get.call(null,map__18844__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__18844__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__18844__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var len__4730__auto___18960 = arguments.length;
var i__4731__auto___18961 = (0);
while(true){
if((i__4731__auto___18961 < len__4730__auto___18960)){
args__4736__auto__.push((arguments[i__4731__auto___18961]));

var G__18962 = (i__4731__auto___18961 + (1));
i__4731__auto___18961 = G__18962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__18851){
var map__18852 = p__18851;
var map__18852__$1 = (((((!((map__18852 == null))))?(((((map__18852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18852):map__18852);
var transform = cljs.core.get.call(null,map__18852__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__18852__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__,map__18852,map__18852__$1,transform,can_recover_QMARK_){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__,map__18852,map__18852__$1,transform,can_recover_QMARK_){
return (function (state_18917){
var state_val_18918 = (state_18917[(1)]);
if((state_val_18918 === (7))){
var inst_18866 = (state_18917[(7)]);
var inst_18866__$1 = (state_18917[(2)]);
var inst_18868 = (inst_18866__$1 == null);
var inst_18869 = cljs.core.not.call(null,inst_18868);
var state_18917__$1 = (function (){var statearr_18919 = state_18917;
(statearr_18919[(7)] = inst_18866__$1);

return statearr_18919;
})();
if(inst_18869){
var statearr_18920_18963 = state_18917__$1;
(statearr_18920_18963[(1)] = (8));

} else {
var statearr_18921_18964 = state_18917__$1;
(statearr_18921_18964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (20))){
var state_18917__$1 = state_18917;
var statearr_18922_18965 = state_18917__$1;
(statearr_18922_18965[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_18922_18965[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (1))){
var inst_18854 = filenames;
var state_18917__$1 = (function (){var statearr_18923 = state_18917;
(statearr_18923[(8)] = inst_18854);

return statearr_18923;
})();
var statearr_18924_18966 = state_18917__$1;
(statearr_18924_18966[(2)] = null);

(statearr_18924_18966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (24))){
var inst_18911 = src_cb.call(null,null);
var state_18917__$1 = state_18917;
var statearr_18925_18967 = state_18917__$1;
(statearr_18925_18967[(2)] = inst_18911);

(statearr_18925_18967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (4))){
var inst_18859 = (state_18917[(9)]);
var inst_18854 = (state_18917[(8)]);
var inst_18859__$1 = cljs.core.first.call(null,inst_18854);
var inst_18860 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_18859__$1);
var inst_18861 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_18862 = [false];
var inst_18863 = cljs.core.PersistentHashMap.fromArrays(inst_18861,inst_18862);
var inst_18864 = cljs_http.client.get.call(null,inst_18860,inst_18863);
var state_18917__$1 = (function (){var statearr_18926 = state_18917;
(statearr_18926[(9)] = inst_18859__$1);

return statearr_18926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18917__$1,(7),inst_18864);
} else {
if((state_val_18918 === (15))){
var inst_18866 = (state_18917[(7)]);
var state_18917__$1 = state_18917;
var statearr_18927_18968 = state_18917__$1;
(statearr_18927_18968[(2)] = inst_18866);

(statearr_18927_18968[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (21))){
var state_18917__$1 = state_18917;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_18928_18969 = state_18917__$1;
(statearr_18928_18969[(1)] = (23));

} else {
var statearr_18929_18970 = state_18917__$1;
(statearr_18929_18970[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (13))){
var inst_18879 = (state_18917[(2)]);
var state_18917__$1 = state_18917;
var statearr_18930_18971 = state_18917__$1;
(statearr_18930_18971[(2)] = inst_18879);

(statearr_18930_18971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (22))){
var inst_18915 = (state_18917[(2)]);
var state_18917__$1 = state_18917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18917__$1,inst_18915);
} else {
if((state_val_18918 === (6))){
var inst_18904 = (state_18917[(2)]);
var state_18917__$1 = state_18917;
var statearr_18931_18972 = state_18917__$1;
(statearr_18931_18972[(2)] = inst_18904);

(statearr_18931_18972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (25))){
var inst_18913 = (state_18917[(2)]);
var state_18917__$1 = (function (){var statearr_18932 = state_18917;
(statearr_18932[(10)] = inst_18913);

return statearr_18932;
})();
var statearr_18933_18973 = state_18917__$1;
(statearr_18933_18973[(2)] = false);

(statearr_18933_18973[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (17))){
var inst_18859 = (state_18917[(9)]);
var inst_18889 = (state_18917[(11)]);
var inst_18892 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_18893 = transform.call(null,inst_18889);
var inst_18894 = [lang,inst_18893,inst_18859];
var inst_18895 = cljs.core.PersistentHashMap.fromArrays(inst_18892,inst_18894);
var inst_18896 = src_cb.call(null,inst_18895);
var state_18917__$1 = (function (){var statearr_18934 = state_18917;
(statearr_18934[(12)] = inst_18896);

return statearr_18934;
})();
var statearr_18935_18974 = state_18917__$1;
(statearr_18935_18974[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_18935_18974[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (3))){
var inst_18906 = (state_18917[(2)]);
var state_18917__$1 = state_18917;
if(cljs.core.truth_(inst_18906)){
var statearr_18936_18975 = state_18917__$1;
(statearr_18936_18975[(1)] = (20));

} else {
var statearr_18937_18976 = state_18917__$1;
(statearr_18937_18976[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (12))){
var state_18917__$1 = state_18917;
var statearr_18938_18977 = state_18917__$1;
(statearr_18938_18977[(2)] = false);

(statearr_18938_18977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (2))){
var inst_18854 = (state_18917[(8)]);
var inst_18856 = cljs.core.seq.call(null,inst_18854);
var state_18917__$1 = state_18917;
if(inst_18856){
var statearr_18939_18978 = state_18917__$1;
(statearr_18939_18978[(1)] = (4));

} else {
var statearr_18940_18979 = state_18917__$1;
(statearr_18940_18979[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (23))){
var state_18917__$1 = state_18917;
var statearr_18941_18980 = state_18917__$1;
(statearr_18941_18980[(2)] = null);

(statearr_18941_18980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (19))){
var inst_18901 = (state_18917[(2)]);
var state_18917__$1 = state_18917;
var statearr_18942_18981 = state_18917__$1;
(statearr_18942_18981[(2)] = inst_18901);

(statearr_18942_18981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (11))){
var state_18917__$1 = state_18917;
var statearr_18943_18982 = state_18917__$1;
(statearr_18943_18982[(2)] = true);

(statearr_18943_18982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (9))){
var state_18917__$1 = state_18917;
var statearr_18944_18983 = state_18917__$1;
(statearr_18944_18983[(2)] = false);

(statearr_18944_18983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (5))){
var state_18917__$1 = state_18917;
var statearr_18945_18984 = state_18917__$1;
(statearr_18945_18984[(2)] = null);

(statearr_18945_18984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (14))){
var inst_18866 = (state_18917[(7)]);
var inst_18884 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18866);
var state_18917__$1 = state_18917;
var statearr_18946_18985 = state_18917__$1;
(statearr_18946_18985[(2)] = inst_18884);

(statearr_18946_18985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (16))){
var inst_18887 = (state_18917[(2)]);
var inst_18888 = cljs.core.get.call(null,inst_18887,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_18889 = cljs.core.get.call(null,inst_18887,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_18890 = cljs.core._EQ_.call(null,(200),inst_18888);
var state_18917__$1 = (function (){var statearr_18947 = state_18917;
(statearr_18947[(11)] = inst_18889);

return statearr_18947;
})();
if(inst_18890){
var statearr_18948_18986 = state_18917__$1;
(statearr_18948_18986[(1)] = (17));

} else {
var statearr_18949_18987 = state_18917__$1;
(statearr_18949_18987[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (10))){
var inst_18882 = (state_18917[(2)]);
var state_18917__$1 = state_18917;
if(cljs.core.truth_(inst_18882)){
var statearr_18950_18988 = state_18917__$1;
(statearr_18950_18988[(1)] = (14));

} else {
var statearr_18951_18989 = state_18917__$1;
(statearr_18951_18989[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (18))){
var inst_18854 = (state_18917[(8)]);
var inst_18898 = cljs.core.rest.call(null,inst_18854);
var inst_18854__$1 = inst_18898;
var state_18917__$1 = (function (){var statearr_18952 = state_18917;
(statearr_18952[(8)] = inst_18854__$1);

return statearr_18952;
})();
var statearr_18953_18990 = state_18917__$1;
(statearr_18953_18990[(2)] = null);

(statearr_18953_18990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18918 === (8))){
var inst_18866 = (state_18917[(7)]);
var inst_18871 = inst_18866.cljs$lang$protocol_mask$partition0$;
var inst_18872 = (inst_18871 & (64));
var inst_18873 = inst_18866.cljs$core$ISeq$;
var inst_18874 = (cljs.core.PROTOCOL_SENTINEL === inst_18873);
var inst_18875 = ((inst_18872) || (inst_18874));
var state_18917__$1 = state_18917;
if(cljs.core.truth_(inst_18875)){
var statearr_18954_18991 = state_18917__$1;
(statearr_18954_18991[(1)] = (11));

} else {
var statearr_18955_18992 = state_18917__$1;
(statearr_18955_18992[(1)] = (12));

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
});})(c__15734__auto__,map__18852,map__18852__$1,transform,can_recover_QMARK_))
;
return ((function (switch__15639__auto__,c__15734__auto__,map__18852,map__18852__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15640__auto____0 = (function (){
var statearr_18956 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18956[(0)] = klipse_clj$lang$clojure$io$state_machine__15640__auto__);

(statearr_18956[(1)] = (1));

return statearr_18956;
});
var klipse_clj$lang$clojure$io$state_machine__15640__auto____1 = (function (state_18917){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_18917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e18957){if((e18957 instanceof Object)){
var ex__15643__auto__ = e18957;
var statearr_18958_18993 = state_18917;
(statearr_18958_18993[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18994 = state_18917;
state_18917 = G__18994;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15640__auto__ = function(state_18917){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15640__auto____1.call(this,state_18917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15640__auto____0;
klipse_clj$lang$clojure$io$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15640__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__,map__18852,map__18852__$1,transform,can_recover_QMARK_))
})();
var state__15736__auto__ = (function (){var statearr_18959 = f__15735__auto__.call(null);
(statearr_18959[(6)] = c__15734__auto__);

return statearr_18959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__,map__18852,map__18852__$1,transform,can_recover_QMARK_))
);

return c__15734__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq18846){
var G__18847 = cljs.core.first.call(null,seq18846);
var seq18846__$1 = cljs.core.next.call(null,seq18846);
var G__18848 = cljs.core.first.call(null,seq18846__$1);
var seq18846__$2 = cljs.core.next.call(null,seq18846__$1);
var G__18849 = cljs.core.first.call(null,seq18846__$2);
var seq18846__$3 = cljs.core.next.call(null,seq18846__$2);
var G__18850 = cljs.core.first.call(null,seq18846__$3);
var seq18846__$4 = cljs.core.next.call(null,seq18846__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18847,G__18848,G__18849,G__18850,seq18846__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4523__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__18995(s__18996){
return (new cljs.core.LazySeq(null,(function (){
var s__18996__$1 = s__18996;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18996__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var lib = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__18996__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__18995_$_iter__18997(s__18998){
return (new cljs.core.LazySeq(null,((function (s__18996__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__18998__$1 = s__18998;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__18998__$1);
if(temp__5720__auto____$1){
var s__18998__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18998__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18998__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19000 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18999 = (0);
while(true){
if((i__18999 < size__4522__auto__)){
var suffix = cljs.core._nth.call(null,c__4521__auto__,i__18999);
cljs.core.chunk_append.call(null,b__19000,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__19001 = (i__18999 + (1));
i__18999 = G__19001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19000),klipse_clj$lang$clojure$io$external_libs_files_$_iter__18995_$_iter__18997.call(null,cljs.core.chunk_rest.call(null,s__18998__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19000),null);
}
} else {
var suffix = cljs.core.first.call(null,s__18998__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__18995_$_iter__18997.call(null,cljs.core.rest.call(null,s__18998__$2)));
}
} else {
return null;
}
break;
}
});})(s__18996__$1,lib,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__18996__$1,lib,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,suffixes));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__18995.call(null,cljs.core.rest.call(null,s__18996__$1)));
} else {
var G__19002 = cljs.core.rest.call(null,s__18996__$1);
s__18996__$1 = G__19002;
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
klipse_clj.lang.clojure.io.load_ns_from_cache = (function klipse_clj$lang$clojure$io$load_ns_from_cache(name,src_cb,macro_QMARK_){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-cache:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"macro: ",macro_QMARK_);
} else {
}

var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_19047){
var state_val_19048 = (state_19047[(1)]);
if((state_val_19048 === (7))){
var inst_19019 = (state_19047[(7)]);
var inst_19026 = (state_19047[(8)]);
var inst_19035 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_19036 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19026);
var inst_19037 = klipse_clj.lang.clojure.io.edn.call(null,inst_19036);
var inst_19038 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19019);
var inst_19039 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_19037,inst_19038];
var inst_19040 = cljs.core.PersistentHashMap.fromArrays(inst_19035,inst_19039);
var inst_19041 = src_cb.call(null,inst_19040);
var state_19047__$1 = state_19047;
var statearr_19049_19065 = state_19047__$1;
(statearr_19049_19065[(2)] = inst_19041);

(statearr_19049_19065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (1))){
var inst_19004 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_19047__$1 = (function (){var statearr_19050 = state_19047;
(statearr_19050[(9)] = inst_19004);

return statearr_19050;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_19051_19066 = state_19047__$1;
(statearr_19051_19066[(1)] = (2));

} else {
var statearr_19052_19067 = state_19047__$1;
(statearr_19052_19067[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (4))){
var inst_19004 = (state_19047[(9)]);
var inst_19011 = (state_19047[(10)]);
var inst_19008 = (state_19047[(11)]);
var inst_19010 = (state_19047[(12)]);
var inst_19008__$1 = (state_19047[(2)]);
var inst_19009 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_19010__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19009),"/"].join('');
var inst_19011__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19010__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19004),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19008__$1),".js"].join('');
var inst_19012 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19010__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19004),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19008__$1),".cache.json"].join('');
var inst_19013 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_19011__$1);
var inst_19014 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_19015 = [false];
var inst_19016 = cljs.core.PersistentHashMap.fromArrays(inst_19014,inst_19015);
var inst_19017 = cljs_http.client.get.call(null,inst_19013,inst_19016);
var state_19047__$1 = (function (){var statearr_19053 = state_19047;
(statearr_19053[(13)] = inst_19012);

(statearr_19053[(10)] = inst_19011__$1);

(statearr_19053[(11)] = inst_19008__$1);

(statearr_19053[(12)] = inst_19010__$1);

return statearr_19053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19047__$1,(5),inst_19017);
} else {
if((state_val_19048 === (6))){
var inst_19012 = (state_19047[(13)]);
var inst_19019 = (state_19047[(7)]);
var inst_19004 = (state_19047[(9)]);
var inst_19011 = (state_19047[(10)]);
var inst_19008 = (state_19047[(11)]);
var inst_19026 = (state_19047[(8)]);
var inst_19010 = (state_19047[(12)]);
var inst_19026__$1 = (state_19047[(2)]);
var inst_19027 = (function (){var nn = inst_19004;
var suffix = inst_19008;
var root = inst_19010;
var src_filename = inst_19011;
var cache_filename = inst_19012;
var src = inst_19019;
var cache = inst_19026__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_19012,inst_19019,inst_19004,inst_19011,inst_19008,inst_19026,inst_19010,inst_19026__$1,state_val_19048,c__15734__auto__){
return (function (p1__19003_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__19003_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_19012,inst_19019,inst_19004,inst_19011,inst_19008,inst_19026,inst_19010,inst_19026__$1,state_val_19048,c__15734__auto__))
})();
var inst_19028 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19029 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_19026__$1);
var inst_19030 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_19019);
var inst_19031 = [inst_19029,inst_19030];
var inst_19032 = (new cljs.core.PersistentVector(null,2,(5),inst_19028,inst_19031,null));
var inst_19033 = cljs.core.every_QMARK_.call(null,inst_19027,inst_19032);
var state_19047__$1 = (function (){var statearr_19054 = state_19047;
(statearr_19054[(8)] = inst_19026__$1);

return statearr_19054;
})();
if(inst_19033){
var statearr_19055_19068 = state_19047__$1;
(statearr_19055_19068[(1)] = (7));

} else {
var statearr_19056_19069 = state_19047__$1;
(statearr_19056_19069[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (3))){
var state_19047__$1 = state_19047;
var statearr_19057_19070 = state_19047__$1;
(statearr_19057_19070[(2)] = "");

(statearr_19057_19070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (2))){
var state_19047__$1 = state_19047;
var statearr_19058_19071 = state_19047__$1;
(statearr_19058_19071[(2)] = "$macros");

(statearr_19058_19071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (9))){
var inst_19045 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19047__$1,inst_19045);
} else {
if((state_val_19048 === (5))){
var inst_19012 = (state_19047[(13)]);
var inst_19019 = (state_19047[(2)]);
var inst_19020 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_19012);
var inst_19021 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_19022 = [false];
var inst_19023 = cljs.core.PersistentHashMap.fromArrays(inst_19021,inst_19022);
var inst_19024 = cljs_http.client.get.call(null,inst_19020,inst_19023);
var state_19047__$1 = (function (){var statearr_19059 = state_19047;
(statearr_19059[(7)] = inst_19019);

return statearr_19059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19047__$1,(6),inst_19024);
} else {
if((state_val_19048 === (8))){
var inst_19043 = src_cb.call(null,null);
var state_19047__$1 = state_19047;
var statearr_19060_19072 = state_19047__$1;
(statearr_19060_19072[(2)] = inst_19043);

(statearr_19060_19072[(1)] = (9));


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
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto____0 = (function (){
var statearr_19061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19061[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto__);

(statearr_19061[(1)] = (1));

return statearr_19061;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto____1 = (function (state_19047){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_19047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e19062){if((e19062 instanceof Object)){
var ex__15643__auto__ = e19062;
var statearr_19063_19073 = state_19047;
(statearr_19063_19073[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19074 = state_19047;
state_19047 = G__19074;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto__ = function(state_19047){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto____1.call(this,state_19047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_19064 = f__15735__auto__.call(null);
(statearr_19064[(6)] = c__15734__auto__);

return statearr_19064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_19114){
var state_val_19115 = (state_19114[(1)]);
if((state_val_19115 === (7))){
var state_19114__$1 = state_19114;
var statearr_19116_19138 = state_19114__$1;
(statearr_19116_19138[(2)] = false);

(statearr_19116_19138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (1))){
var inst_19076 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_19077 = [false];
var inst_19078 = cljs.core.PersistentHashMap.fromArrays(inst_19076,inst_19077);
var inst_19079 = cljs_http.client.get.call(null,filename,inst_19078);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19114__$1,(2),inst_19079);
} else {
if((state_val_19115 === (4))){
var state_19114__$1 = state_19114;
var statearr_19117_19139 = state_19114__$1;
(statearr_19117_19139[(2)] = false);

(statearr_19117_19139[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (13))){
var inst_19110 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_19114__$1 = state_19114;
var statearr_19118_19140 = state_19114__$1;
(statearr_19118_19140[(2)] = inst_19110);

(statearr_19118_19140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (6))){
var state_19114__$1 = state_19114;
var statearr_19119_19141 = state_19114__$1;
(statearr_19119_19141[(2)] = true);

(statearr_19119_19141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (3))){
var inst_19081 = (state_19114[(7)]);
var inst_19086 = inst_19081.cljs$lang$protocol_mask$partition0$;
var inst_19087 = (inst_19086 & (64));
var inst_19088 = inst_19081.cljs$core$ISeq$;
var inst_19089 = (cljs.core.PROTOCOL_SENTINEL === inst_19088);
var inst_19090 = ((inst_19087) || (inst_19089));
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19090)){
var statearr_19120_19142 = state_19114__$1;
(statearr_19120_19142[(1)] = (6));

} else {
var statearr_19121_19143 = state_19114__$1;
(statearr_19121_19143[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (12))){
var inst_19103 = (state_19114[(8)]);
var inst_19107 = klipse_clj.lang.clojure.io.edn.call(null,inst_19103);
var inst_19108 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_19107);
var state_19114__$1 = state_19114;
var statearr_19122_19144 = state_19114__$1;
(statearr_19122_19144[(2)] = inst_19108);

(statearr_19122_19144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (2))){
var inst_19081 = (state_19114[(7)]);
var inst_19081__$1 = (state_19114[(2)]);
var inst_19083 = (inst_19081__$1 == null);
var inst_19084 = cljs.core.not.call(null,inst_19083);
var state_19114__$1 = (function (){var statearr_19123 = state_19114;
(statearr_19123[(7)] = inst_19081__$1);

return statearr_19123;
})();
if(inst_19084){
var statearr_19124_19145 = state_19114__$1;
(statearr_19124_19145[(1)] = (3));

} else {
var statearr_19125_19146 = state_19114__$1;
(statearr_19125_19146[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (11))){
var inst_19102 = (state_19114[(2)]);
var inst_19103 = cljs.core.get.call(null,inst_19102,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_19104 = cljs.core.get.call(null,inst_19102,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_19105 = cljs.core._EQ_.call(null,(200),inst_19104);
var state_19114__$1 = (function (){var statearr_19126 = state_19114;
(statearr_19126[(8)] = inst_19103);

return statearr_19126;
})();
if(inst_19105){
var statearr_19127_19147 = state_19114__$1;
(statearr_19127_19147[(1)] = (12));

} else {
var statearr_19128_19148 = state_19114__$1;
(statearr_19128_19148[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (9))){
var inst_19081 = (state_19114[(7)]);
var inst_19099 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19081);
var state_19114__$1 = state_19114;
var statearr_19129_19149 = state_19114__$1;
(statearr_19129_19149[(2)] = inst_19099);

(statearr_19129_19149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (5))){
var inst_19097 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19097)){
var statearr_19130_19150 = state_19114__$1;
(statearr_19130_19150[(1)] = (9));

} else {
var statearr_19131_19151 = state_19114__$1;
(statearr_19131_19151[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (14))){
var inst_19112 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19114__$1,inst_19112);
} else {
if((state_val_19115 === (10))){
var inst_19081 = (state_19114[(7)]);
var state_19114__$1 = state_19114;
var statearr_19132_19152 = state_19114__$1;
(statearr_19132_19152[(2)] = inst_19081);

(statearr_19132_19152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (8))){
var inst_19094 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19133_19153 = state_19114__$1;
(statearr_19133_19153[(2)] = inst_19094);

(statearr_19133_19153[(1)] = (5));


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
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto____0 = (function (){
var statearr_19134 = [null,null,null,null,null,null,null,null,null];
(statearr_19134[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto__);

(statearr_19134[(1)] = (1));

return statearr_19134;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto____1 = (function (state_19114){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_19114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e19135){if((e19135 instanceof Object)){
var ex__15643__auto__ = e19135;
var statearr_19136_19154 = state_19114;
(statearr_19136_19154[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19155 = state_19114;
state_19114 = G__19155;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto__ = function(state_19114){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto____1.call(this,state_19114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_19137 = f__15735__auto__.call(null);
(statearr_19137[(6)] = c__15734__auto__);

return statearr_19137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__19156,src_cb_original){
var map__19157 = p__19156;
var map__19157__$1 = (((((!((map__19157 == null))))?(((((map__19157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19157):map__19157);
var name = cljs.core.get.call(null,map__19157__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__19157__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__19157,map__19157__$1,name,path){
return (function() { 
var G__19159__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__19159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19160__i = 0, G__19160__a = new Array(arguments.length -  0);
while (G__19160__i < G__19160__a.length) {G__19160__a[G__19160__i] = arguments[G__19160__i + 0]; ++G__19160__i;}
  args = new cljs.core.IndexedSeq(G__19160__a,0,null);
} 
return G__19159__delegate.call(this,args);};
G__19159.cljs$lang$maxFixedArity = 0;
G__19159.cljs$lang$applyTo = (function (arglist__19161){
var args = cljs.core.seq(arglist__19161);
return G__19159__delegate(args);
});
G__19159.cljs$core$IFn$_invoke$arity$variadic = G__19159__delegate;
return G__19159;
})()
;})(map__19157,map__19157__$1,name,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__19163,src_cb){
var map__19164 = p__19163;
var map__19164__$1 = (((((!((map__19164 == null))))?(((((map__19164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19164):map__19164);
var path = cljs.core.get.call(null,map__19164__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__19164,map__19164__$1,path){
return (function (p1__19162_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19162_SHARP_)].join('');
});})(path__$1,map__19164,map__19164__$1,path))
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
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__4120__auto__){
return (window["React"]);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__4120__auto__){
return (window["ReactDOMServer"]);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var and__4120__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__4120__auto__){
return (window["ReactDOM"]);
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__19167,src_cb){
var map__19168 = p__19167;
var map__19168__$1 = (((((!((map__19168 == null))))?(((((map__19168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19168):map__19168);
var name = cljs.core.get.call(null,map__19168__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__19168__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var filenames = cljs.core.map.call(null,((function (_,map__19168,map__19168__$1,name,path){
return (function (p1__19166_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19166_SHARP_),".cache.json"].join('');
});})(_,map__19168,map__19168__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__,_,filenames,map__19168,map__19168__$1,name,path){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__,_,filenames,map__19168,map__19168__$1,name,path){
return (function (state_19182){
var state_val_19183 = (state_19182[(1)]);
if((state_val_19183 === (1))){
var inst_19170 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_19182__$1 = state_19182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19182__$1,(2),inst_19170);
} else {
if((state_val_19183 === (2))){
var inst_19172 = (state_19182[(2)]);
var state_19182__$1 = state_19182;
if(cljs.core.truth_(inst_19172)){
var statearr_19184_19235 = state_19182__$1;
(statearr_19184_19235[(1)] = (3));

} else {
var statearr_19185_19236 = state_19182__$1;
(statearr_19185_19236[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19183 === (3))){
var state_19182__$1 = state_19182;
var statearr_19186_19237 = state_19182__$1;
(statearr_19186_19237[(2)] = null);

(statearr_19186_19237[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19183 === (4))){
var inst_19175 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_19176 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_19177 = cljs.core.PersistentHashMap.fromArrays(inst_19175,inst_19176);
var inst_19178 = src_cb.call(null,inst_19177);
var state_19182__$1 = state_19182;
var statearr_19187_19238 = state_19182__$1;
(statearr_19187_19238[(2)] = inst_19178);

(statearr_19187_19238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19183 === (5))){
var inst_19180 = (state_19182[(2)]);
var state_19182__$1 = state_19182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19182__$1,inst_19180);
} else {
return null;
}
}
}
}
}
});})(c__15734__auto__,_,filenames,map__19168,map__19168__$1,name,path))
;
return ((function (switch__15639__auto__,c__15734__auto__,_,filenames,map__19168,map__19168__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15640__auto____0 = (function (){
var statearr_19188 = [null,null,null,null,null,null,null];
(statearr_19188[(0)] = klipse_clj$lang$clojure$io$state_machine__15640__auto__);

(statearr_19188[(1)] = (1));

return statearr_19188;
});
var klipse_clj$lang$clojure$io$state_machine__15640__auto____1 = (function (state_19182){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_19182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e19189){if((e19189 instanceof Object)){
var ex__15643__auto__ = e19189;
var statearr_19190_19239 = state_19182;
(statearr_19190_19239[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19240 = state_19182;
state_19182 = G__19240;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15640__auto__ = function(state_19182){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15640__auto____1.call(this,state_19182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15640__auto____0;
klipse_clj$lang$clojure$io$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15640__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__,_,filenames,map__19168,map__19168__$1,name,path))
})();
var state__15736__auto__ = (function (){var statearr_19191 = f__15735__auto__.call(null);
(statearr_19191[(6)] = c__15734__auto__);

return statearr_19191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__,_,filenames,map__19168,map__19168__$1,name,path))
);

return c__15734__auto__;
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

var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__,prefix,filenames,map__19168,map__19168__$1,name,path){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__,prefix,filenames,map__19168,map__19168__$1,name,path){
return (function (state_19202){
var state_val_19203 = (state_19202[(1)]);
if((state_val_19203 === (1))){
var inst_19192 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_19202__$1 = state_19202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19202__$1,(2),inst_19192);
} else {
if((state_val_19203 === (2))){
var inst_19194 = (state_19202[(2)]);
var state_19202__$1 = state_19202;
if(cljs.core.truth_(inst_19194)){
var statearr_19204_19241 = state_19202__$1;
(statearr_19204_19241[(1)] = (3));

} else {
var statearr_19205_19242 = state_19202__$1;
(statearr_19205_19242[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (3))){
var state_19202__$1 = state_19202;
var statearr_19206_19243 = state_19202__$1;
(statearr_19206_19243[(2)] = null);

(statearr_19206_19243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (4))){
var inst_19197 = [prefix,".js"].join('');
var inst_19198 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_19197,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_19202__$1 = state_19202;
var statearr_19207_19244 = state_19202__$1;
(statearr_19207_19244[(2)] = inst_19198);

(statearr_19207_19244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (5))){
var inst_19200 = (state_19202[(2)]);
var state_19202__$1 = state_19202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19202__$1,inst_19200);
} else {
return null;
}
}
}
}
}
});})(c__15734__auto__,prefix,filenames,map__19168,map__19168__$1,name,path))
;
return ((function (switch__15639__auto__,c__15734__auto__,prefix,filenames,map__19168,map__19168__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15640__auto____0 = (function (){
var statearr_19208 = [null,null,null,null,null,null,null];
(statearr_19208[(0)] = klipse_clj$lang$clojure$io$state_machine__15640__auto__);

(statearr_19208[(1)] = (1));

return statearr_19208;
});
var klipse_clj$lang$clojure$io$state_machine__15640__auto____1 = (function (state_19202){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_19202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e19209){if((e19209 instanceof Object)){
var ex__15643__auto__ = e19209;
var statearr_19210_19245 = state_19202;
(statearr_19210_19245[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19246 = state_19202;
state_19202 = G__19246;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15640__auto__ = function(state_19202){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15640__auto____1.call(this,state_19202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15640__auto____0;
klipse_clj$lang$clojure$io$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15640__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__,prefix,filenames,map__19168,map__19168__$1,name,path))
})();
var state__15736__auto__ = (function (){var statearr_19211 = f__15735__auto__.call(null);
(statearr_19211[(6)] = c__15734__auto__);

return statearr_19211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__,prefix,filenames,map__19168,map__19168__$1,name,path))
);

return c__15734__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__,filenames,map__19168,map__19168__$1,name,path){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__,filenames,map__19168,map__19168__$1,name,path){
return (function (state_19225){
var state_val_19226 = (state_19225[(1)]);
if((state_val_19226 === (1))){
var inst_19212 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_19225__$1 = state_19225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19225__$1,(2),inst_19212);
} else {
if((state_val_19226 === (2))){
var inst_19214 = (state_19225[(2)]);
var state_19225__$1 = state_19225;
if(cljs.core.truth_(inst_19214)){
var statearr_19227_19247 = state_19225__$1;
(statearr_19227_19247[(1)] = (3));

} else {
var statearr_19228_19248 = state_19225__$1;
(statearr_19228_19248[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (3))){
var state_19225__$1 = state_19225;
var statearr_19229_19249 = state_19225__$1;
(statearr_19229_19249[(2)] = null);

(statearr_19229_19249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (4))){
var inst_19217 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19218 = [".js"];
var inst_19219 = (new cljs.core.PersistentVector(null,1,(5),inst_19217,inst_19218,null));
var inst_19220 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_19219,path);
var inst_19221 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_19220,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_19225__$1 = state_19225;
var statearr_19230_19250 = state_19225__$1;
(statearr_19230_19250[(2)] = inst_19221);

(statearr_19230_19250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (5))){
var inst_19223 = (state_19225[(2)]);
var state_19225__$1 = state_19225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19225__$1,inst_19223);
} else {
return null;
}
}
}
}
}
});})(c__15734__auto__,filenames,map__19168,map__19168__$1,name,path))
;
return ((function (switch__15639__auto__,c__15734__auto__,filenames,map__19168,map__19168__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15640__auto____0 = (function (){
var statearr_19231 = [null,null,null,null,null,null,null];
(statearr_19231[(0)] = klipse_clj$lang$clojure$io$state_machine__15640__auto__);

(statearr_19231[(1)] = (1));

return statearr_19231;
});
var klipse_clj$lang$clojure$io$state_machine__15640__auto____1 = (function (state_19225){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_19225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e19232){if((e19232 instanceof Object)){
var ex__15643__auto__ = e19232;
var statearr_19233_19251 = state_19225;
(statearr_19233_19251[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19252 = state_19225;
state_19225 = G__19252;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15640__auto__ = function(state_19225){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15640__auto____1.call(this,state_19225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15640__auto____0;
klipse_clj$lang$clojure$io$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15640__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__,filenames,map__19168,map__19168__$1,name,path))
})();
var state__15736__auto__ = (function (){var statearr_19234 = f__15735__auto__.call(null);
(statearr_19234[(6)] = c__15734__auto__);

return statearr_19234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__,filenames,map__19168,map__19168__$1,name,path))
);

return c__15734__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__19254,src_cb){
var map__19255 = p__19254;
var map__19255__$1 = (((((!((map__19255 == null))))?(((((map__19255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19255):map__19255);
var name = cljs.core.get.call(null,map__19255__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__19255__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__19255,map__19255__$1,name,path){
return (function (p1__19253_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19253_SHARP_),".js"].join('');
});})(closure_github_path,map__19255,map__19255__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
