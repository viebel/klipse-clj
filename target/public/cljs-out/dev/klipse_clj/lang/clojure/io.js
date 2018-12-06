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
return (function (_,p__24744,src_cb){
var map__24745 = p__24744;
var map__24745__$1 = ((((!((map__24745 == null)))?(((((map__24745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24745):map__24745);
var name = cljs.core.get.call(null,map__24745__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__24745__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__24745__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var len__4499__auto___24861 = arguments.length;
var i__4500__auto___24862 = (0);
while(true){
if((i__4500__auto___24862 < len__4499__auto___24861)){
args__4502__auto__.push((arguments[i__4500__auto___24862]));

var G__24863 = (i__4500__auto___24862 + (1));
i__4500__auto___24862 = G__24863;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((4) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4503__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__24752){
var map__24753 = p__24752;
var map__24753__$1 = ((((!((map__24753 == null)))?(((((map__24753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24753):map__24753);
var transform = cljs.core.get.call(null,map__24753__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__24753__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__,map__24753,map__24753__$1,transform,can_recover_QMARK_){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__,map__24753,map__24753__$1,transform,can_recover_QMARK_){
return (function (state_24818){
var state_val_24819 = (state_24818[(1)]);
if((state_val_24819 === (7))){
var inst_24767 = (state_24818[(7)]);
var inst_24767__$1 = (state_24818[(2)]);
var inst_24769 = (inst_24767__$1 == null);
var inst_24770 = cljs.core.not.call(null,inst_24769);
var state_24818__$1 = (function (){var statearr_24820 = state_24818;
(statearr_24820[(7)] = inst_24767__$1);

return statearr_24820;
})();
if(inst_24770){
var statearr_24821_24864 = state_24818__$1;
(statearr_24821_24864[(1)] = (8));

} else {
var statearr_24822_24865 = state_24818__$1;
(statearr_24822_24865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (20))){
var state_24818__$1 = state_24818;
var statearr_24823_24866 = state_24818__$1;
(statearr_24823_24866[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_24823_24866[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (1))){
var inst_24755 = filenames;
var state_24818__$1 = (function (){var statearr_24824 = state_24818;
(statearr_24824[(8)] = inst_24755);

return statearr_24824;
})();
var statearr_24825_24867 = state_24818__$1;
(statearr_24825_24867[(2)] = null);

(statearr_24825_24867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (24))){
var inst_24812 = src_cb.call(null,null);
var state_24818__$1 = state_24818;
var statearr_24826_24868 = state_24818__$1;
(statearr_24826_24868[(2)] = inst_24812);

(statearr_24826_24868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (4))){
var inst_24755 = (state_24818[(8)]);
var inst_24760 = (state_24818[(9)]);
var inst_24760__$1 = cljs.core.first.call(null,inst_24755);
var inst_24761 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_24760__$1);
var inst_24762 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_24763 = [false];
var inst_24764 = cljs.core.PersistentHashMap.fromArrays(inst_24762,inst_24763);
var inst_24765 = cljs_http.client.get.call(null,inst_24761,inst_24764);
var state_24818__$1 = (function (){var statearr_24827 = state_24818;
(statearr_24827[(9)] = inst_24760__$1);

return statearr_24827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24818__$1,(7),inst_24765);
} else {
if((state_val_24819 === (15))){
var inst_24767 = (state_24818[(7)]);
var state_24818__$1 = state_24818;
var statearr_24828_24869 = state_24818__$1;
(statearr_24828_24869[(2)] = inst_24767);

(statearr_24828_24869[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (21))){
var state_24818__$1 = state_24818;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_24829_24870 = state_24818__$1;
(statearr_24829_24870[(1)] = (23));

} else {
var statearr_24830_24871 = state_24818__$1;
(statearr_24830_24871[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (13))){
var inst_24780 = (state_24818[(2)]);
var state_24818__$1 = state_24818;
var statearr_24831_24872 = state_24818__$1;
(statearr_24831_24872[(2)] = inst_24780);

(statearr_24831_24872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (22))){
var inst_24816 = (state_24818[(2)]);
var state_24818__$1 = state_24818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24818__$1,inst_24816);
} else {
if((state_val_24819 === (6))){
var inst_24805 = (state_24818[(2)]);
var state_24818__$1 = state_24818;
var statearr_24832_24873 = state_24818__$1;
(statearr_24832_24873[(2)] = inst_24805);

(statearr_24832_24873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (25))){
var inst_24814 = (state_24818[(2)]);
var state_24818__$1 = (function (){var statearr_24833 = state_24818;
(statearr_24833[(10)] = inst_24814);

return statearr_24833;
})();
var statearr_24834_24874 = state_24818__$1;
(statearr_24834_24874[(2)] = false);

(statearr_24834_24874[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (17))){
var inst_24790 = (state_24818[(11)]);
var inst_24760 = (state_24818[(9)]);
var inst_24793 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_24794 = transform.call(null,inst_24790);
var inst_24795 = [lang,inst_24794,inst_24760];
var inst_24796 = cljs.core.PersistentHashMap.fromArrays(inst_24793,inst_24795);
var inst_24797 = src_cb.call(null,inst_24796);
var state_24818__$1 = (function (){var statearr_24835 = state_24818;
(statearr_24835[(12)] = inst_24797);

return statearr_24835;
})();
var statearr_24836_24875 = state_24818__$1;
(statearr_24836_24875[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_24836_24875[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (3))){
var inst_24807 = (state_24818[(2)]);
var state_24818__$1 = state_24818;
if(cljs.core.truth_(inst_24807)){
var statearr_24837_24876 = state_24818__$1;
(statearr_24837_24876[(1)] = (20));

} else {
var statearr_24838_24877 = state_24818__$1;
(statearr_24838_24877[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (12))){
var state_24818__$1 = state_24818;
var statearr_24839_24878 = state_24818__$1;
(statearr_24839_24878[(2)] = false);

(statearr_24839_24878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (2))){
var inst_24755 = (state_24818[(8)]);
var inst_24757 = cljs.core.seq.call(null,inst_24755);
var state_24818__$1 = state_24818;
if(inst_24757){
var statearr_24840_24879 = state_24818__$1;
(statearr_24840_24879[(1)] = (4));

} else {
var statearr_24841_24880 = state_24818__$1;
(statearr_24841_24880[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (23))){
var state_24818__$1 = state_24818;
var statearr_24842_24881 = state_24818__$1;
(statearr_24842_24881[(2)] = null);

(statearr_24842_24881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (19))){
var inst_24802 = (state_24818[(2)]);
var state_24818__$1 = state_24818;
var statearr_24843_24882 = state_24818__$1;
(statearr_24843_24882[(2)] = inst_24802);

(statearr_24843_24882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (11))){
var state_24818__$1 = state_24818;
var statearr_24844_24883 = state_24818__$1;
(statearr_24844_24883[(2)] = true);

(statearr_24844_24883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (9))){
var state_24818__$1 = state_24818;
var statearr_24845_24884 = state_24818__$1;
(statearr_24845_24884[(2)] = false);

(statearr_24845_24884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (5))){
var state_24818__$1 = state_24818;
var statearr_24846_24885 = state_24818__$1;
(statearr_24846_24885[(2)] = null);

(statearr_24846_24885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (14))){
var inst_24767 = (state_24818[(7)]);
var inst_24785 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24767);
var state_24818__$1 = state_24818;
var statearr_24847_24886 = state_24818__$1;
(statearr_24847_24886[(2)] = inst_24785);

(statearr_24847_24886[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (16))){
var inst_24788 = (state_24818[(2)]);
var inst_24789 = cljs.core.get.call(null,inst_24788,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_24790 = cljs.core.get.call(null,inst_24788,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_24791 = cljs.core._EQ_.call(null,(200),inst_24789);
var state_24818__$1 = (function (){var statearr_24848 = state_24818;
(statearr_24848[(11)] = inst_24790);

return statearr_24848;
})();
if(inst_24791){
var statearr_24849_24887 = state_24818__$1;
(statearr_24849_24887[(1)] = (17));

} else {
var statearr_24850_24888 = state_24818__$1;
(statearr_24850_24888[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (10))){
var inst_24783 = (state_24818[(2)]);
var state_24818__$1 = state_24818;
if(cljs.core.truth_(inst_24783)){
var statearr_24851_24889 = state_24818__$1;
(statearr_24851_24889[(1)] = (14));

} else {
var statearr_24852_24890 = state_24818__$1;
(statearr_24852_24890[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (18))){
var inst_24755 = (state_24818[(8)]);
var inst_24799 = cljs.core.rest.call(null,inst_24755);
var inst_24755__$1 = inst_24799;
var state_24818__$1 = (function (){var statearr_24853 = state_24818;
(statearr_24853[(8)] = inst_24755__$1);

return statearr_24853;
})();
var statearr_24854_24891 = state_24818__$1;
(statearr_24854_24891[(2)] = null);

(statearr_24854_24891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24819 === (8))){
var inst_24767 = (state_24818[(7)]);
var inst_24772 = inst_24767.cljs$lang$protocol_mask$partition0$;
var inst_24773 = (inst_24772 & (64));
var inst_24774 = inst_24767.cljs$core$ISeq$;
var inst_24775 = (cljs.core.PROTOCOL_SENTINEL === inst_24774);
var inst_24776 = ((inst_24773) || (inst_24775));
var state_24818__$1 = state_24818;
if(cljs.core.truth_(inst_24776)){
var statearr_24855_24892 = state_24818__$1;
(statearr_24855_24892[(1)] = (11));

} else {
var statearr_24856_24893 = state_24818__$1;
(statearr_24856_24893[(1)] = (12));

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
});})(c__17125__auto__,map__24753,map__24753__$1,transform,can_recover_QMARK_))
;
return ((function (switch__16968__auto__,c__17125__auto__,map__24753,map__24753__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__16969__auto____0 = (function (){
var statearr_24857 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24857[(0)] = klipse_clj$lang$clojure$io$state_machine__16969__auto__);

(statearr_24857[(1)] = (1));

return statearr_24857;
});
var klipse_clj$lang$clojure$io$state_machine__16969__auto____1 = (function (state_24818){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_24818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e24858){if((e24858 instanceof Object)){
var ex__16972__auto__ = e24858;
var statearr_24859_24894 = state_24818;
(statearr_24859_24894[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24895 = state_24818;
state_24818 = G__24895;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__16969__auto__ = function(state_24818){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__16969__auto____1.call(this,state_24818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__16969__auto____0;
klipse_clj$lang$clojure$io$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__16969__auto____1;
return klipse_clj$lang$clojure$io$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__,map__24753,map__24753__$1,transform,can_recover_QMARK_))
})();
var state__17127__auto__ = (function (){var statearr_24860 = f__17126__auto__.call(null);
(statearr_24860[(6)] = c__17125__auto__);

return statearr_24860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__,map__24753,map__24753__$1,transform,can_recover_QMARK_))
);

return c__17125__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq24747){
var G__24748 = cljs.core.first.call(null,seq24747);
var seq24747__$1 = cljs.core.next.call(null,seq24747);
var G__24749 = cljs.core.first.call(null,seq24747__$1);
var seq24747__$2 = cljs.core.next.call(null,seq24747__$1);
var G__24750 = cljs.core.first.call(null,seq24747__$2);
var seq24747__$3 = cljs.core.next.call(null,seq24747__$2);
var G__24751 = cljs.core.first.call(null,seq24747__$3);
var seq24747__$4 = cljs.core.next.call(null,seq24747__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24748,G__24749,G__24750,G__24751,seq24747__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4292__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__24896(s__24897){
return (new cljs.core.LazySeq(null,(function (){
var s__24897__$1 = s__24897;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24897__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var lib = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__24897__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__24896_$_iter__24898(s__24899){
return (new cljs.core.LazySeq(null,((function (s__24897__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__24899__$1 = s__24899;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__24899__$1);
if(temp__5457__auto____$1){
var s__24899__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24899__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__24899__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__24901 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__24900 = (0);
while(true){
if((i__24900 < size__4291__auto__)){
var suffix = cljs.core._nth.call(null,c__4290__auto__,i__24900);
cljs.core.chunk_append.call(null,b__24901,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__24902 = (i__24900 + (1));
i__24900 = G__24902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24901),klipse_clj$lang$clojure$io$external_libs_files_$_iter__24896_$_iter__24898.call(null,cljs.core.chunk_rest.call(null,s__24899__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24901),null);
}
} else {
var suffix = cljs.core.first.call(null,s__24899__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__24896_$_iter__24898.call(null,cljs.core.rest.call(null,s__24899__$2)));
}
} else {
return null;
}
break;
}
});})(s__24897__$1,lib,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__24897__$1,lib,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,suffixes));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__24896.call(null,cljs.core.rest.call(null,s__24897__$1)));
} else {
var G__24903 = cljs.core.rest.call(null,s__24897__$1);
s__24897__$1 = G__24903;
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

var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_24948){
var state_val_24949 = (state_24948[(1)]);
if((state_val_24949 === (1))){
var inst_24905 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_24948__$1 = (function (){var statearr_24950 = state_24948;
(statearr_24950[(7)] = inst_24905);

return statearr_24950;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_24951_24966 = state_24948__$1;
(statearr_24951_24966[(1)] = (2));

} else {
var statearr_24952_24967 = state_24948__$1;
(statearr_24952_24967[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (2))){
var state_24948__$1 = state_24948;
var statearr_24953_24968 = state_24948__$1;
(statearr_24953_24968[(2)] = "$macros");

(statearr_24953_24968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (3))){
var state_24948__$1 = state_24948;
var statearr_24954_24969 = state_24948__$1;
(statearr_24954_24969[(2)] = "");

(statearr_24954_24969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (4))){
var inst_24912 = (state_24948[(8)]);
var inst_24909 = (state_24948[(9)]);
var inst_24905 = (state_24948[(7)]);
var inst_24911 = (state_24948[(10)]);
var inst_24909__$1 = (state_24948[(2)]);
var inst_24910 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_24911__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24910),"/"].join('');
var inst_24912__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24911__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24905),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24909__$1),".js"].join('');
var inst_24913 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24911__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24905),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24909__$1),".cache.json"].join('');
var inst_24914 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_24912__$1);
var inst_24915 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_24916 = [false];
var inst_24917 = cljs.core.PersistentHashMap.fromArrays(inst_24915,inst_24916);
var inst_24918 = cljs_http.client.get.call(null,inst_24914,inst_24917);
var state_24948__$1 = (function (){var statearr_24955 = state_24948;
(statearr_24955[(8)] = inst_24912__$1);

(statearr_24955[(9)] = inst_24909__$1);

(statearr_24955[(11)] = inst_24913);

(statearr_24955[(10)] = inst_24911__$1);

return statearr_24955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24948__$1,(5),inst_24918);
} else {
if((state_val_24949 === (5))){
var inst_24913 = (state_24948[(11)]);
var inst_24920 = (state_24948[(2)]);
var inst_24921 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_24913);
var inst_24922 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_24923 = [false];
var inst_24924 = cljs.core.PersistentHashMap.fromArrays(inst_24922,inst_24923);
var inst_24925 = cljs_http.client.get.call(null,inst_24921,inst_24924);
var state_24948__$1 = (function (){var statearr_24956 = state_24948;
(statearr_24956[(12)] = inst_24920);

return statearr_24956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24948__$1,(6),inst_24925);
} else {
if((state_val_24949 === (6))){
var inst_24912 = (state_24948[(8)]);
var inst_24909 = (state_24948[(9)]);
var inst_24905 = (state_24948[(7)]);
var inst_24913 = (state_24948[(11)]);
var inst_24911 = (state_24948[(10)]);
var inst_24920 = (state_24948[(12)]);
var inst_24927 = (state_24948[(13)]);
var inst_24927__$1 = (state_24948[(2)]);
var inst_24928 = (function (){var nn = inst_24905;
var suffix = inst_24909;
var root = inst_24911;
var src_filename = inst_24912;
var cache_filename = inst_24913;
var src = inst_24920;
var cache = inst_24927__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_24912,inst_24909,inst_24905,inst_24913,inst_24911,inst_24920,inst_24927,inst_24927__$1,state_val_24949,c__17125__auto__){
return (function (p1__24904_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__24904_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_24912,inst_24909,inst_24905,inst_24913,inst_24911,inst_24920,inst_24927,inst_24927__$1,state_val_24949,c__17125__auto__))
})();
var inst_24929 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24930 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_24927__$1);
var inst_24931 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_24920);
var inst_24932 = [inst_24930,inst_24931];
var inst_24933 = (new cljs.core.PersistentVector(null,2,(5),inst_24929,inst_24932,null));
var inst_24934 = cljs.core.every_QMARK_.call(null,inst_24928,inst_24933);
var state_24948__$1 = (function (){var statearr_24957 = state_24948;
(statearr_24957[(13)] = inst_24927__$1);

return statearr_24957;
})();
if(inst_24934){
var statearr_24958_24970 = state_24948__$1;
(statearr_24958_24970[(1)] = (7));

} else {
var statearr_24959_24971 = state_24948__$1;
(statearr_24959_24971[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (7))){
var inst_24920 = (state_24948[(12)]);
var inst_24927 = (state_24948[(13)]);
var inst_24936 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_24937 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24927);
var inst_24938 = klipse_clj.lang.clojure.io.edn.call(null,inst_24937);
var inst_24939 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24920);
var inst_24940 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_24938,inst_24939];
var inst_24941 = cljs.core.PersistentHashMap.fromArrays(inst_24936,inst_24940);
var inst_24942 = src_cb.call(null,inst_24941);
var state_24948__$1 = state_24948;
var statearr_24960_24972 = state_24948__$1;
(statearr_24960_24972[(2)] = inst_24942);

(statearr_24960_24972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (8))){
var inst_24944 = src_cb.call(null,null);
var state_24948__$1 = state_24948;
var statearr_24961_24973 = state_24948__$1;
(statearr_24961_24973[(2)] = inst_24944);

(statearr_24961_24973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (9))){
var inst_24946 = (state_24948[(2)]);
var state_24948__$1 = state_24948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24948__$1,inst_24946);
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
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto____0 = (function (){
var statearr_24962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24962[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto__);

(statearr_24962[(1)] = (1));

return statearr_24962;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto____1 = (function (state_24948){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_24948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e24963){if((e24963 instanceof Object)){
var ex__16972__auto__ = e24963;
var statearr_24964_24974 = state_24948;
(statearr_24964_24974[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24975 = state_24948;
state_24948 = G__24975;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto__ = function(state_24948){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto____1.call(this,state_24948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_24965 = f__17126__auto__.call(null);
(statearr_24965[(6)] = c__17125__auto__);

return statearr_24965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_25015){
var state_val_25016 = (state_25015[(1)]);
if((state_val_25016 === (7))){
var state_25015__$1 = state_25015;
var statearr_25017_25039 = state_25015__$1;
(statearr_25017_25039[(2)] = false);

(statearr_25017_25039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (1))){
var inst_24977 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_24978 = [false];
var inst_24979 = cljs.core.PersistentHashMap.fromArrays(inst_24977,inst_24978);
var inst_24980 = cljs_http.client.get.call(null,filename,inst_24979);
var state_25015__$1 = state_25015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25015__$1,(2),inst_24980);
} else {
if((state_val_25016 === (4))){
var state_25015__$1 = state_25015;
var statearr_25018_25040 = state_25015__$1;
(statearr_25018_25040[(2)] = false);

(statearr_25018_25040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (13))){
var inst_25011 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_25015__$1 = state_25015;
var statearr_25019_25041 = state_25015__$1;
(statearr_25019_25041[(2)] = inst_25011);

(statearr_25019_25041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (6))){
var state_25015__$1 = state_25015;
var statearr_25020_25042 = state_25015__$1;
(statearr_25020_25042[(2)] = true);

(statearr_25020_25042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (3))){
var inst_24982 = (state_25015[(7)]);
var inst_24987 = inst_24982.cljs$lang$protocol_mask$partition0$;
var inst_24988 = (inst_24987 & (64));
var inst_24989 = inst_24982.cljs$core$ISeq$;
var inst_24990 = (cljs.core.PROTOCOL_SENTINEL === inst_24989);
var inst_24991 = ((inst_24988) || (inst_24990));
var state_25015__$1 = state_25015;
if(cljs.core.truth_(inst_24991)){
var statearr_25021_25043 = state_25015__$1;
(statearr_25021_25043[(1)] = (6));

} else {
var statearr_25022_25044 = state_25015__$1;
(statearr_25022_25044[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (12))){
var inst_25004 = (state_25015[(8)]);
var inst_25008 = klipse_clj.lang.clojure.io.edn.call(null,inst_25004);
var inst_25009 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_25008);
var state_25015__$1 = state_25015;
var statearr_25023_25045 = state_25015__$1;
(statearr_25023_25045[(2)] = inst_25009);

(statearr_25023_25045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (2))){
var inst_24982 = (state_25015[(7)]);
var inst_24982__$1 = (state_25015[(2)]);
var inst_24984 = (inst_24982__$1 == null);
var inst_24985 = cljs.core.not.call(null,inst_24984);
var state_25015__$1 = (function (){var statearr_25024 = state_25015;
(statearr_25024[(7)] = inst_24982__$1);

return statearr_25024;
})();
if(inst_24985){
var statearr_25025_25046 = state_25015__$1;
(statearr_25025_25046[(1)] = (3));

} else {
var statearr_25026_25047 = state_25015__$1;
(statearr_25026_25047[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (11))){
var inst_25003 = (state_25015[(2)]);
var inst_25004 = cljs.core.get.call(null,inst_25003,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_25005 = cljs.core.get.call(null,inst_25003,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_25006 = cljs.core._EQ_.call(null,(200),inst_25005);
var state_25015__$1 = (function (){var statearr_25027 = state_25015;
(statearr_25027[(8)] = inst_25004);

return statearr_25027;
})();
if(inst_25006){
var statearr_25028_25048 = state_25015__$1;
(statearr_25028_25048[(1)] = (12));

} else {
var statearr_25029_25049 = state_25015__$1;
(statearr_25029_25049[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (9))){
var inst_24982 = (state_25015[(7)]);
var inst_25000 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24982);
var state_25015__$1 = state_25015;
var statearr_25030_25050 = state_25015__$1;
(statearr_25030_25050[(2)] = inst_25000);

(statearr_25030_25050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (5))){
var inst_24998 = (state_25015[(2)]);
var state_25015__$1 = state_25015;
if(cljs.core.truth_(inst_24998)){
var statearr_25031_25051 = state_25015__$1;
(statearr_25031_25051[(1)] = (9));

} else {
var statearr_25032_25052 = state_25015__$1;
(statearr_25032_25052[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (14))){
var inst_25013 = (state_25015[(2)]);
var state_25015__$1 = state_25015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25015__$1,inst_25013);
} else {
if((state_val_25016 === (10))){
var inst_24982 = (state_25015[(7)]);
var state_25015__$1 = state_25015;
var statearr_25033_25053 = state_25015__$1;
(statearr_25033_25053[(2)] = inst_24982);

(statearr_25033_25053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (8))){
var inst_24995 = (state_25015[(2)]);
var state_25015__$1 = state_25015;
var statearr_25034_25054 = state_25015__$1;
(statearr_25034_25054[(2)] = inst_24995);

(statearr_25034_25054[(1)] = (5));


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
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto____0 = (function (){
var statearr_25035 = [null,null,null,null,null,null,null,null,null];
(statearr_25035[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto__);

(statearr_25035[(1)] = (1));

return statearr_25035;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto____1 = (function (state_25015){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_25015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e25036){if((e25036 instanceof Object)){
var ex__16972__auto__ = e25036;
var statearr_25037_25055 = state_25015;
(statearr_25037_25055[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25056 = state_25015;
state_25015 = G__25056;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto__ = function(state_25015){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto____1.call(this,state_25015);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_25038 = f__17126__auto__.call(null);
(statearr_25038[(6)] = c__17125__auto__);

return statearr_25038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__25057,src_cb_original){
var map__25058 = p__25057;
var map__25058__$1 = ((((!((map__25058 == null)))?(((((map__25058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25058):map__25058);
var name = cljs.core.get.call(null,map__25058__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__25058__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__25058,map__25058__$1,name,path){
return (function() { 
var G__25060__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__25060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25061__i = 0, G__25061__a = new Array(arguments.length -  0);
while (G__25061__i < G__25061__a.length) {G__25061__a[G__25061__i] = arguments[G__25061__i + 0]; ++G__25061__i;}
  args = new cljs.core.IndexedSeq(G__25061__a,0,null);
} 
return G__25060__delegate.call(this,args);};
G__25060.cljs$lang$maxFixedArity = 0;
G__25060.cljs$lang$applyTo = (function (arglist__25062){
var args = cljs.core.seq(arglist__25062);
return G__25060__delegate(args);
});
G__25060.cljs$core$IFn$_invoke$arity$variadic = G__25060__delegate;
return G__25060;
})()
;})(map__25058,map__25058__$1,name,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__25064,src_cb){
var map__25065 = p__25064;
var map__25065__$1 = ((((!((map__25065 == null)))?(((((map__25065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25065):map__25065);
var path = cljs.core.get.call(null,map__25065__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__25065,map__25065__$1,path){
return (function (p1__25063_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25063_SHARP_)].join('');
});})(path__$1,map__25065,map__25065__$1,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__25068,src_cb){
var map__25069 = p__25068;
var map__25069__$1 = ((((!((map__25069 == null)))?(((((map__25069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25069):map__25069);
var name = cljs.core.get.call(null,map__25069__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__25069__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var filenames = cljs.core.map.call(null,((function (_,map__25069,map__25069__$1,name,path){
return (function (p1__25067_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25067_SHARP_),".cache.json"].join('');
});})(_,map__25069,map__25069__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__,_,filenames,map__25069,map__25069__$1,name,path){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__,_,filenames,map__25069,map__25069__$1,name,path){
return (function (state_25083){
var state_val_25084 = (state_25083[(1)]);
if((state_val_25084 === (1))){
var inst_25071 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25083__$1,(2),inst_25071);
} else {
if((state_val_25084 === (2))){
var inst_25073 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
if(cljs.core.truth_(inst_25073)){
var statearr_25085_25136 = state_25083__$1;
(statearr_25085_25136[(1)] = (3));

} else {
var statearr_25086_25137 = state_25083__$1;
(statearr_25086_25137[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (3))){
var state_25083__$1 = state_25083;
var statearr_25087_25138 = state_25083__$1;
(statearr_25087_25138[(2)] = null);

(statearr_25087_25138[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (4))){
var inst_25076 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_25077 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_25078 = cljs.core.PersistentHashMap.fromArrays(inst_25076,inst_25077);
var inst_25079 = src_cb.call(null,inst_25078);
var state_25083__$1 = state_25083;
var statearr_25088_25139 = state_25083__$1;
(statearr_25088_25139[(2)] = inst_25079);

(statearr_25088_25139[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (5))){
var inst_25081 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25083__$1,inst_25081);
} else {
return null;
}
}
}
}
}
});})(c__17125__auto__,_,filenames,map__25069,map__25069__$1,name,path))
;
return ((function (switch__16968__auto__,c__17125__auto__,_,filenames,map__25069,map__25069__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__16969__auto____0 = (function (){
var statearr_25089 = [null,null,null,null,null,null,null];
(statearr_25089[(0)] = klipse_clj$lang$clojure$io$state_machine__16969__auto__);

(statearr_25089[(1)] = (1));

return statearr_25089;
});
var klipse_clj$lang$clojure$io$state_machine__16969__auto____1 = (function (state_25083){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_25083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e25090){if((e25090 instanceof Object)){
var ex__16972__auto__ = e25090;
var statearr_25091_25140 = state_25083;
(statearr_25091_25140[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25141 = state_25083;
state_25083 = G__25141;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__16969__auto__ = function(state_25083){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__16969__auto____1.call(this,state_25083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__16969__auto____0;
klipse_clj$lang$clojure$io$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__16969__auto____1;
return klipse_clj$lang$clojure$io$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__,_,filenames,map__25069,map__25069__$1,name,path))
})();
var state__17127__auto__ = (function (){var statearr_25092 = f__17126__auto__.call(null);
(statearr_25092[(6)] = c__17125__auto__);

return statearr_25092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__,_,filenames,map__25069,map__25069__$1,name,path))
);

return c__17125__auto__;
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

var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__,prefix,filenames,map__25069,map__25069__$1,name,path){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__,prefix,filenames,map__25069,map__25069__$1,name,path){
return (function (state_25103){
var state_val_25104 = (state_25103[(1)]);
if((state_val_25104 === (1))){
var inst_25093 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25103__$1,(2),inst_25093);
} else {
if((state_val_25104 === (2))){
var inst_25095 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
if(cljs.core.truth_(inst_25095)){
var statearr_25105_25142 = state_25103__$1;
(statearr_25105_25142[(1)] = (3));

} else {
var statearr_25106_25143 = state_25103__$1;
(statearr_25106_25143[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (3))){
var state_25103__$1 = state_25103;
var statearr_25107_25144 = state_25103__$1;
(statearr_25107_25144[(2)] = null);

(statearr_25107_25144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (4))){
var inst_25098 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".js"].join('');
var inst_25099 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_25098,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_25103__$1 = state_25103;
var statearr_25108_25145 = state_25103__$1;
(statearr_25108_25145[(2)] = inst_25099);

(statearr_25108_25145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (5))){
var inst_25101 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25103__$1,inst_25101);
} else {
return null;
}
}
}
}
}
});})(c__17125__auto__,prefix,filenames,map__25069,map__25069__$1,name,path))
;
return ((function (switch__16968__auto__,c__17125__auto__,prefix,filenames,map__25069,map__25069__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__16969__auto____0 = (function (){
var statearr_25109 = [null,null,null,null,null,null,null];
(statearr_25109[(0)] = klipse_clj$lang$clojure$io$state_machine__16969__auto__);

(statearr_25109[(1)] = (1));

return statearr_25109;
});
var klipse_clj$lang$clojure$io$state_machine__16969__auto____1 = (function (state_25103){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_25103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e25110){if((e25110 instanceof Object)){
var ex__16972__auto__ = e25110;
var statearr_25111_25146 = state_25103;
(statearr_25111_25146[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25147 = state_25103;
state_25103 = G__25147;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__16969__auto__ = function(state_25103){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__16969__auto____1.call(this,state_25103);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__16969__auto____0;
klipse_clj$lang$clojure$io$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__16969__auto____1;
return klipse_clj$lang$clojure$io$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__,prefix,filenames,map__25069,map__25069__$1,name,path))
})();
var state__17127__auto__ = (function (){var statearr_25112 = f__17126__auto__.call(null);
(statearr_25112[(6)] = c__17125__auto__);

return statearr_25112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__,prefix,filenames,map__25069,map__25069__$1,name,path))
);

return c__17125__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__,filenames,map__25069,map__25069__$1,name,path){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__,filenames,map__25069,map__25069__$1,name,path){
return (function (state_25126){
var state_val_25127 = (state_25126[(1)]);
if((state_val_25127 === (1))){
var inst_25113 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_25126__$1 = state_25126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25126__$1,(2),inst_25113);
} else {
if((state_val_25127 === (2))){
var inst_25115 = (state_25126[(2)]);
var state_25126__$1 = state_25126;
if(cljs.core.truth_(inst_25115)){
var statearr_25128_25148 = state_25126__$1;
(statearr_25128_25148[(1)] = (3));

} else {
var statearr_25129_25149 = state_25126__$1;
(statearr_25129_25149[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (3))){
var state_25126__$1 = state_25126;
var statearr_25130_25150 = state_25126__$1;
(statearr_25130_25150[(2)] = null);

(statearr_25130_25150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (4))){
var inst_25118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25119 = [".js"];
var inst_25120 = (new cljs.core.PersistentVector(null,1,(5),inst_25118,inst_25119,null));
var inst_25121 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_25120,path);
var inst_25122 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_25121,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_25126__$1 = state_25126;
var statearr_25131_25151 = state_25126__$1;
(statearr_25131_25151[(2)] = inst_25122);

(statearr_25131_25151[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25127 === (5))){
var inst_25124 = (state_25126[(2)]);
var state_25126__$1 = state_25126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25126__$1,inst_25124);
} else {
return null;
}
}
}
}
}
});})(c__17125__auto__,filenames,map__25069,map__25069__$1,name,path))
;
return ((function (switch__16968__auto__,c__17125__auto__,filenames,map__25069,map__25069__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__16969__auto____0 = (function (){
var statearr_25132 = [null,null,null,null,null,null,null];
(statearr_25132[(0)] = klipse_clj$lang$clojure$io$state_machine__16969__auto__);

(statearr_25132[(1)] = (1));

return statearr_25132;
});
var klipse_clj$lang$clojure$io$state_machine__16969__auto____1 = (function (state_25126){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_25126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e25133){if((e25133 instanceof Object)){
var ex__16972__auto__ = e25133;
var statearr_25134_25152 = state_25126;
(statearr_25134_25152[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25153 = state_25126;
state_25126 = G__25153;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__16969__auto__ = function(state_25126){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__16969__auto____1.call(this,state_25126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__16969__auto____0;
klipse_clj$lang$clojure$io$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__16969__auto____1;
return klipse_clj$lang$clojure$io$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__,filenames,map__25069,map__25069__$1,name,path))
})();
var state__17127__auto__ = (function (){var statearr_25135 = f__17126__auto__.call(null);
(statearr_25135[(6)] = c__17125__auto__);

return statearr_25135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__,filenames,map__25069,map__25069__$1,name,path))
);

return c__17125__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__25155,src_cb){
var map__25156 = p__25155;
var map__25156__$1 = ((((!((map__25156 == null)))?(((((map__25156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25156):map__25156);
var name = cljs.core.get.call(null,map__25156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__25156__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__25156,map__25156__$1,name,path){
return (function (p1__25154_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(closure_github_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25154_SHARP_),".js"].join('');
});})(closure_github_path,map__25156,map__25156__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
