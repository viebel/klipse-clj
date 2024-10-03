// Compiled by ClojureScript 1.11.132 {:optimizations :none}
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
klipse_clj.lang.clojure.io.load_ns = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),(function (_,p__27756,_src_cb){
var map__27757 = p__27756;
var map__27757__$1 = cljs.core.__destructure_map.call(null,map__27757);
var name = cljs.core.get.call(null,map__27757__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__27757__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__27757__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
klipse_clj.lang.clojure.io.skip_ns_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"cljs.analyzer.macros","cljs.analyzer.macros",298494182,null),null,new cljs.core.Symbol(null,"cljs.env.macros","cljs.env.macros",1542748640,null),null,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),null,new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null),null,new cljs.core.Symbol(null,"cljs.compiler.macros","cljs.compiler.macros",750996207,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.js","cljs.js",474485962,null),null], null), null);
klipse_clj.lang.clojure.io.the_ns_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null),"https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs/",new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),"https://raw.githubusercontent.com/viebel/clojure/master/src/clj/"], null);
klipse_clj.lang.clojure.io.skip_ns_cljs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cljs.source-map","cljs.source-map",2108014936,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.env","cljs.env",-1810013139,null),null], null), null);
klipse_clj.lang.clojure.io.filename_of = (function klipse_clj$lang$clojure$io$filename_of(s){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_cache_buster_QMARK__STAR_)){
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
var args__5732__auto__ = [];
var len__5726__auto___27851 = arguments.length;
var i__5727__auto___27852 = (0);
while(true){
if((i__5727__auto___27852 < len__5726__auto___27851)){
args__5732__auto__.push((arguments[i__5727__auto___27852]));

var G__27853 = (i__5727__auto___27852 + (1));
i__5727__auto___27852 = G__27853;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__27763){
var map__27764 = p__27763;
var map__27764__$1 = cljs.core.__destructure_map.call(null,map__27764);
var transform = cljs.core.get.call(null,map__27764__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__27764__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("try-to-load-ns ",filenames,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key));
} else {
}

var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_27816){
var state_val_27817 = (state_27816[(1)]);
if((state_val_27817 === (7))){
var inst_27778 = (state_27816[(2)]);
var inst_27779 = cljs.core.__destructure_map.call(null,inst_27778);
var inst_27780 = cljs.core.get.call(null,inst_27779,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_27781 = cljs.core.get.call(null,inst_27779,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_27782 = cljs.core._EQ_.call(null,(200),inst_27780);
var state_27816__$1 = (function (){var statearr_27818 = state_27816;
(statearr_27818[(7)] = inst_27781);

return statearr_27818;
})();
if(inst_27782){
var statearr_27819_27854 = state_27816__$1;
(statearr_27819_27854[(1)] = (8));

} else {
var statearr_27820_27855 = state_27816__$1;
(statearr_27820_27855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (1))){
var inst_27765 = filenames;
var inst_27766 = inst_27765;
var state_27816__$1 = (function (){var statearr_27821 = state_27816;
(statearr_27821[(8)] = inst_27766);

return statearr_27821;
})();
var statearr_27822_27856 = state_27816__$1;
(statearr_27822_27856[(2)] = null);

(statearr_27822_27856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (4))){
var inst_27766 = (state_27816[(8)]);
var inst_27771 = (state_27816[(9)]);
var inst_27771__$1 = cljs.core.first.call(null,inst_27766);
var inst_27772 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27771__$1);
var inst_27773 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27774 = [false];
var inst_27775 = cljs.core.PersistentHashMap.fromArrays(inst_27773,inst_27774);
var inst_27776 = cljs_http.client.get.call(null,inst_27772,inst_27775);
var state_27816__$1 = (function (){var statearr_27823 = state_27816;
(statearr_27823[(9)] = inst_27771__$1);

return statearr_27823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27816__$1,(7),inst_27776);
} else {
if((state_val_27817 === (15))){
var state_27816__$1 = state_27816;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_27824_27857 = state_27816__$1;
(statearr_27824_27857[(1)] = (17));

} else {
var statearr_27825_27858 = state_27816__$1;
(statearr_27825_27858[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (13))){
var inst_27781 = (state_27816[(7)]);
var inst_27771 = (state_27816[(9)]);
var inst_27790 = (state_27816[(2)]);
var inst_27791 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_27792 = transform.call(null,inst_27781);
var inst_27793 = [lang,inst_27792,inst_27771];
var inst_27794 = cljs.core.PersistentHashMap.fromArrays(inst_27791,inst_27793);
var inst_27795 = src_cb.call(null,inst_27794);
var state_27816__$1 = (function (){var statearr_27826 = state_27816;
(statearr_27826[(10)] = inst_27790);

(statearr_27826[(11)] = inst_27795);

return statearr_27826;
})();
var statearr_27827_27859 = state_27816__$1;
(statearr_27827_27859[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_27827_27859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (6))){
var inst_27803 = (state_27816[(2)]);
var state_27816__$1 = state_27816;
var statearr_27828_27860 = state_27816__$1;
(statearr_27828_27860[(2)] = inst_27803);

(statearr_27828_27860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (17))){
var state_27816__$1 = state_27816;
var statearr_27829_27861 = state_27816__$1;
(statearr_27829_27861[(2)] = null);

(statearr_27829_27861[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (3))){
var inst_27805 = (state_27816[(2)]);
var state_27816__$1 = state_27816;
if(cljs.core.truth_(inst_27805)){
var statearr_27830_27862 = state_27816__$1;
(statearr_27830_27862[(1)] = (14));

} else {
var statearr_27831_27863 = state_27816__$1;
(statearr_27831_27863[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (12))){
var state_27816__$1 = state_27816;
var statearr_27832_27864 = state_27816__$1;
(statearr_27832_27864[(2)] = null);

(statearr_27832_27864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (2))){
var inst_27766 = (state_27816[(8)]);
var inst_27768 = cljs.core.seq.call(null,inst_27766);
var state_27816__$1 = state_27816;
if(inst_27768){
var statearr_27833_27865 = state_27816__$1;
(statearr_27833_27865[(1)] = (4));

} else {
var statearr_27834_27866 = state_27816__$1;
(statearr_27834_27866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (19))){
var inst_27812 = (state_27816[(2)]);
var state_27816__$1 = (function (){var statearr_27835 = state_27816;
(statearr_27835[(12)] = inst_27812);

return statearr_27835;
})();
var statearr_27836_27867 = state_27816__$1;
(statearr_27836_27867[(2)] = false);

(statearr_27836_27867[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (11))){
var inst_27771 = (state_27816[(9)]);
var inst_27785 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang);
var inst_27786 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key);
var inst_27787 = console.info("file loaded successfully",inst_27785,inst_27786,inst_27771);
var state_27816__$1 = state_27816;
var statearr_27837_27868 = state_27816__$1;
(statearr_27837_27868[(2)] = inst_27787);

(statearr_27837_27868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (9))){
var inst_27766 = (state_27816[(8)]);
var inst_27797 = cljs.core.rest.call(null,inst_27766);
var inst_27766__$1 = inst_27797;
var state_27816__$1 = (function (){var statearr_27838 = state_27816;
(statearr_27838[(8)] = inst_27766__$1);

return statearr_27838;
})();
var statearr_27839_27869 = state_27816__$1;
(statearr_27839_27869[(2)] = null);

(statearr_27839_27869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (5))){
var state_27816__$1 = state_27816;
var statearr_27840_27870 = state_27816__$1;
(statearr_27840_27870[(2)] = null);

(statearr_27840_27870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (14))){
var state_27816__$1 = state_27816;
var statearr_27841_27871 = state_27816__$1;
(statearr_27841_27871[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_27841_27871[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (16))){
var inst_27814 = (state_27816[(2)]);
var state_27816__$1 = state_27816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27816__$1,inst_27814);
} else {
if((state_val_27817 === (10))){
var inst_27800 = (state_27816[(2)]);
var state_27816__$1 = state_27816;
var statearr_27842_27872 = state_27816__$1;
(statearr_27842_27872[(2)] = inst_27800);

(statearr_27842_27872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (18))){
var inst_27810 = src_cb.call(null,null);
var state_27816__$1 = state_27816;
var statearr_27843_27873 = state_27816__$1;
(statearr_27843_27873[(2)] = inst_27810);

(statearr_27843_27873[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27817 === (8))){
var state_27816__$1 = state_27816;
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
var statearr_27844_27874 = state_27816__$1;
(statearr_27844_27874[(1)] = (11));

} else {
var statearr_27845_27875 = state_27816__$1;
(statearr_27845_27875[(1)] = (12));

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
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21984__auto____0 = (function (){
var statearr_27846 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27846[(0)] = klipse_clj$lang$clojure$io$state_machine__21984__auto__);

(statearr_27846[(1)] = (1));

return statearr_27846;
});
var klipse_clj$lang$clojure$io$state_machine__21984__auto____1 = (function (state_27816){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_27816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e27847){var ex__21987__auto__ = e27847;
var statearr_27848_27876 = state_27816;
(statearr_27848_27876[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_27816[(4)]))){
var statearr_27849_27877 = state_27816;
(statearr_27849_27877[(1)] = cljs.core.first.call(null,(state_27816[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27878 = state_27816;
state_27816 = G__27878;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21984__auto__ = function(state_27816){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21984__auto____1.call(this,state_27816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21984__auto____0;
klipse_clj$lang$clojure$io$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21984__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_27850 = f__22109__auto__.call(null);
(statearr_27850[(6)] = c__22108__auto__);

return statearr_27850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
}));

(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq27758){
var G__27759 = cljs.core.first.call(null,seq27758);
var seq27758__$1 = cljs.core.next.call(null,seq27758);
var G__27760 = cljs.core.first.call(null,seq27758__$1);
var seq27758__$2 = cljs.core.next.call(null,seq27758__$1);
var G__27761 = cljs.core.first.call(null,seq27758__$2);
var seq27758__$3 = cljs.core.next.call(null,seq27758__$2);
var G__27762 = cljs.core.first.call(null,seq27758__$3);
var seq27758__$4 = cljs.core.next.call(null,seq27758__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27759,G__27760,G__27761,G__27762,seq27758__$4);
}));

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__5480__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__27879(s__27880){
return (new cljs.core.LazySeq(null,(function (){
var s__27880__$1 = s__27880;
while(true){
var temp__5823__auto__ = cljs.core.seq.call(null,s__27880__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var lib = cljs.core.first.call(null,xs__6383__auto__);
var iterys__5476__auto__ = ((function (s__27880__$1,lib,xs__6383__auto__,temp__5823__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__27879_$_iter__27881(s__27882){
return (new cljs.core.LazySeq(null,((function (s__27880__$1,lib,xs__6383__auto__,temp__5823__auto__){
return (function (){
var s__27882__$1 = s__27882;
while(true){
var temp__5823__auto____$1 = cljs.core.seq.call(null,s__27882__$1);
if(temp__5823__auto____$1){
var s__27882__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27882__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__27882__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__27884 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__27883 = (0);
while(true){
if((i__27883 < size__5479__auto__)){
var suffix = cljs.core._nth.call(null,c__5478__auto__,i__27883);
cljs.core.chunk_append.call(null,b__27884,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__27885 = (i__27883 + (1));
i__27883 = G__27885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27884),klipse_clj$lang$clojure$io$external_libs_files_$_iter__27879_$_iter__27881.call(null,cljs.core.chunk_rest.call(null,s__27882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27884),null);
}
} else {
var suffix = cljs.core.first.call(null,s__27882__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__27879_$_iter__27881.call(null,cljs.core.rest.call(null,s__27882__$2)));
}
} else {
return null;
}
break;
}
});})(s__27880__$1,lib,xs__6383__auto__,temp__5823__auto__))
,null,null));
});})(s__27880__$1,lib,xs__6383__auto__,temp__5823__auto__))
;
var fs__5477__auto__ = cljs.core.seq.call(null,iterys__5476__auto__.call(null,suffixes));
if(fs__5477__auto__){
return cljs.core.concat.call(null,fs__5477__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__27879.call(null,cljs.core.rest.call(null,s__27880__$1)));
} else {
var G__27886 = cljs.core.rest.call(null,s__27880__$1);
s__27880__$1 = G__27886;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,external_libs);
});
klipse_clj.lang.clojure.io.name__GT_cached_resource = (function klipse_clj$lang$clojure$io$name__GT_cached_resource(name){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)),/\./,"_SLASH_");
});
klipse_clj.lang.clojure.io.cached_ns_root = (function klipse_clj$lang$clojure$io$cached_ns_root(){
return new cljs.core.Keyword(null,"cached_ns_root","cached_ns_root",-1077014575).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,"https://viebel.github.io/cljs-analysis-cache/cache/");
});
klipse_clj.lang.clojure.io.load_ns_from_cache = (function klipse_clj$lang$clojure$io$load_ns_from_cache(name,src_cb,macro_QMARK_,on_failure_cb){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns-from-cache:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"macro: ",macro_QMARK_);
} else {
}

var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_27931){
var state_val_27932 = (state_27931[(1)]);
if((state_val_27932 === (7))){
var inst_27910 = (state_27931[(7)]);
var inst_27903 = (state_27931[(8)]);
var inst_27919 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_27920 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27910);
var inst_27921 = klipse_clj.lang.clojure.io.edn.call(null,inst_27920);
var inst_27922 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27903);
var inst_27923 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_27921,inst_27922];
var inst_27924 = cljs.core.PersistentHashMap.fromArrays(inst_27919,inst_27923);
var inst_27925 = src_cb.call(null,inst_27924);
var state_27931__$1 = state_27931;
var statearr_27933_27950 = state_27931__$1;
(statearr_27933_27950[(2)] = inst_27925);

(statearr_27933_27950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (1))){
var inst_27888 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_27931__$1 = (function (){var statearr_27934 = state_27931;
(statearr_27934[(9)] = inst_27888);

return statearr_27934;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_27935_27951 = state_27931__$1;
(statearr_27935_27951[(1)] = (2));

} else {
var statearr_27936_27952 = state_27931__$1;
(statearr_27936_27952[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (4))){
var inst_27894 = (state_27931[(10)]);
var inst_27888 = (state_27931[(9)]);
var inst_27892 = (state_27931[(11)]);
var inst_27895 = (state_27931[(12)]);
var inst_27892__$1 = (state_27931[(2)]);
var inst_27893 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_27894__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27893),"/"].join('');
var inst_27895__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27894__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27888),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27892__$1),".js"].join('');
var inst_27896 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27894__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27888),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27892__$1),".cache.json"].join('');
var inst_27897 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27895__$1);
var inst_27898 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27899 = [false];
var inst_27900 = cljs.core.PersistentHashMap.fromArrays(inst_27898,inst_27899);
var inst_27901 = cljs_http.client.get.call(null,inst_27897,inst_27900);
var state_27931__$1 = (function (){var statearr_27937 = state_27931;
(statearr_27937[(11)] = inst_27892__$1);

(statearr_27937[(10)] = inst_27894__$1);

(statearr_27937[(12)] = inst_27895__$1);

(statearr_27937[(13)] = inst_27896);

return statearr_27937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27931__$1,(5),inst_27901);
} else {
if((state_val_27932 === (6))){
var inst_27888 = (state_27931[(9)]);
var inst_27892 = (state_27931[(11)]);
var inst_27894 = (state_27931[(10)]);
var inst_27895 = (state_27931[(12)]);
var inst_27896 = (state_27931[(13)]);
var inst_27903 = (state_27931[(8)]);
var inst_27910 = (state_27931[(7)]);
var inst_27910__$1 = (state_27931[(2)]);
var inst_27911 = (function (){var nn = inst_27888;
var suffix = inst_27892;
var root = inst_27894;
var src_filename = inst_27895;
var cache_filename = inst_27896;
var src = inst_27903;
var cache = inst_27910__$1;
return (function (p1__27887_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__27887_SHARP_);
});
})();
var inst_27912 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27913 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27910__$1);
var inst_27914 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27903);
var inst_27915 = [inst_27913,inst_27914];
var inst_27916 = (new cljs.core.PersistentVector(null,2,(5),inst_27912,inst_27915,null));
var inst_27917 = cljs.core.every_QMARK_.call(null,inst_27911,inst_27916);
var state_27931__$1 = (function (){var statearr_27938 = state_27931;
(statearr_27938[(7)] = inst_27910__$1);

return statearr_27938;
})();
if(inst_27917){
var statearr_27939_27953 = state_27931__$1;
(statearr_27939_27953[(1)] = (7));

} else {
var statearr_27940_27954 = state_27931__$1;
(statearr_27940_27954[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (3))){
var state_27931__$1 = state_27931;
var statearr_27941_27955 = state_27931__$1;
(statearr_27941_27955[(2)] = "");

(statearr_27941_27955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (2))){
var state_27931__$1 = state_27931;
var statearr_27942_27956 = state_27931__$1;
(statearr_27942_27956[(2)] = "$macros");

(statearr_27942_27956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (9))){
var inst_27929 = (state_27931[(2)]);
var state_27931__$1 = state_27931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27931__$1,inst_27929);
} else {
if((state_val_27932 === (5))){
var inst_27896 = (state_27931[(13)]);
var inst_27903 = (state_27931[(2)]);
var inst_27904 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27896);
var inst_27905 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27906 = [false];
var inst_27907 = cljs.core.PersistentHashMap.fromArrays(inst_27905,inst_27906);
var inst_27908 = cljs_http.client.get.call(null,inst_27904,inst_27907);
var state_27931__$1 = (function (){var statearr_27943 = state_27931;
(statearr_27943[(8)] = inst_27903);

return statearr_27943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27931__$1,(6),inst_27908);
} else {
if((state_val_27932 === (8))){
var inst_27927 = on_failure_cb.call(null);
var state_27931__$1 = state_27931;
var statearr_27944_27957 = state_27931__$1;
(statearr_27944_27957[(2)] = inst_27927);

(statearr_27944_27957[(1)] = (9));


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
});
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto____0 = (function (){
var statearr_27945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27945[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto__);

(statearr_27945[(1)] = (1));

return statearr_27945;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto____1 = (function (state_27931){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_27931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e27946){var ex__21987__auto__ = e27946;
var statearr_27947_27958 = state_27931;
(statearr_27947_27958[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_27931[(4)]))){
var statearr_27948_27959 = state_27931;
(statearr_27948_27959[(1)] = cljs.core.first.call(null,(state_27931[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27960 = state_27931;
state_27931 = G__27960;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto__ = function(state_27931){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto____1.call(this,state_27931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_27949 = f__22109__auto__.call(null);
(statearr_27949[(6)] = c__22108__auto__);

return statearr_27949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns-from-file",filename);
} else {
}

var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_27980){
var state_val_27981 = (state_27980[(1)]);
if((state_val_27981 === (1))){
var inst_27962 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27963 = [false];
var inst_27964 = cljs.core.PersistentHashMap.fromArrays(inst_27962,inst_27963);
var inst_27965 = cljs_http.client.get.call(null,filename,inst_27964);
var state_27980__$1 = state_27980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27980__$1,(2),inst_27965);
} else {
if((state_val_27981 === (2))){
var inst_27967 = (state_27980[(2)]);
var inst_27968 = cljs.core.__destructure_map.call(null,inst_27967);
var inst_27969 = cljs.core.get.call(null,inst_27968,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_27970 = cljs.core.get.call(null,inst_27968,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_27971 = cljs.core._EQ_.call(null,(200),inst_27970);
var state_27980__$1 = (function (){var statearr_27982 = state_27980;
(statearr_27982[(7)] = inst_27969);

return statearr_27982;
})();
if(inst_27971){
var statearr_27983_27992 = state_27980__$1;
(statearr_27983_27992[(1)] = (3));

} else {
var statearr_27984_27993 = state_27980__$1;
(statearr_27984_27993[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (3))){
var inst_27969 = (state_27980[(7)]);
var inst_27973 = klipse_clj.lang.clojure.io.edn.call(null,inst_27969);
var inst_27974 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_27973);
var state_27980__$1 = state_27980;
var statearr_27985_27994 = state_27980__$1;
(statearr_27985_27994[(2)] = inst_27974);

(statearr_27985_27994[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (4))){
var inst_27976 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_27980__$1 = state_27980;
var statearr_27986_27995 = state_27980__$1;
(statearr_27986_27995[(2)] = inst_27976);

(statearr_27986_27995[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (5))){
var inst_27978 = (state_27980[(2)]);
var state_27980__$1 = state_27980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27980__$1,inst_27978);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto____0 = (function (){
var statearr_27987 = [null,null,null,null,null,null,null,null];
(statearr_27987[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto__);

(statearr_27987[(1)] = (1));

return statearr_27987;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto____1 = (function (state_27980){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_27980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e27988){var ex__21987__auto__ = e27988;
var statearr_27989_27996 = state_27980;
(statearr_27989_27996[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_27980[(4)]))){
var statearr_27990_27997 = state_27980;
(statearr_27990_27997[(1)] = cljs.core.first.call(null,(state_27980[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27998 = state_27980;
state_27980 = G__27998;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto__ = function(state_27980){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto____1.call(this,state_27980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_27991 = f__22109__auto__.call(null);
(statearr_27991[(6)] = c__22108__auto__);

return statearr_27991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__27999,src_cb_original){
var map__28000 = p__27999;
var map__28000__$1 = cljs.core.__destructure_map.call(null,map__28000);
var args = map__28000__$1;
var name = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
var load_ns_skip_cache = (function (){
return klipse_clj.lang.clojure.io.load_ns.call(null,external_libs,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),false),src_cb_original);
});
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:(function() { 
var G__28001__delegate = function (args__$1){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args__$1);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__28001 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__28002__i = 0, G__28002__a = new Array(arguments.length -  0);
while (G__28002__i < G__28002__a.length) {G__28002__a[G__28002__i] = arguments[G__28002__i + 0]; ++G__28002__i;}
  args__$1 = new cljs.core.IndexedSeq(G__28002__a,0,null);
} 
return G__28001__delegate.call(this,args__$1);};
G__28001.cljs$lang$maxFixedArity = 0;
G__28001.cljs$lang$applyTo = (function (arglist__28003){
var args__$1 = cljs.core.seq(arglist__28003);
return G__28001__delegate(args__$1);
});
G__28001.cljs$core$IFn$_invoke$arity$variadic = G__28001__delegate;
return G__28001;
})()
);
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :macro :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.skip_ns_macros.call(null,name))){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :macro skipping:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = try_cache_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_.call(null,name);
} else {
return and__5000__auto__;
}
})())){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :macro cached:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return klipse_clj.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,true,load_ns_skip_cache);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.the_ns_map.call(null,name))){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :macro known:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.the_ns_map.call(null,name)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse_clj.lang.clojure.io.macro_suffixes);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (_external_libs,p__28005,src_cb){
var map__28006 = p__28005;
var map__28006__$1 = cljs.core.__destructure_map.call(null,map__28006);
var path = cljs.core.get.call(null,map__28006__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,(function (p1__28004_SHARP_){
return ["https://gist.githubusercontent.com/",path__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28004_SHARP_)].join('');
}),klipse_clj.lang.clojure.io.cljs_suffixes);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}));
klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp = (function klipse_clj$lang$clojure$io$bundled_ns_ignore_regexp(){
return new cljs.core.Keyword(null,"clojure_bundled_ns_ignore_regexp","clojure_bundled_ns_ignore_regexp",-1479622333).cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_);
});
klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_ = (function klipse_clj$lang$clojure$io$custom_bundled_ns_ignore_QMARK_(name){
var temp__5823__auto__ = klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp.call(null);
if(cljs.core.truth_(temp__5823__auto__)){
var regexp = temp__5823__auto__;
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
if(cljs.core.truth_((function (){var or__5002__auto__ = klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_.call(null,name);
}
})())){
return false;
} else {
return (!(((function (){var obj__26943__auto__ = goog;
var f__26944__auto__ = (obj__26943__auto__["getObjectByName"]);
return f__26944__auto__.call(obj__26943__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)));
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
var or__5002__auto__ = (function (){var and__5000__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__5000__auto__){
var obj28007 = window;
if((!((obj28007 == null)))){
return (obj28007["React"]);
} else {
return undefined;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var and__5000__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__5000__auto__){
var obj28008 = window;
if((!((obj28008 == null)))){
return (obj28008["ReactDOMServer"]);
} else {
return undefined;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var and__5000__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__5000__auto__){
var obj28009 = window;
if((!((obj28009 == null)))){
return (obj28009["ReactDOM"]);
} else {
return undefined;
}
} else {
return and__5000__auto__;
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
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.log("load-ns :cljs try-to-load-cljsjs-ns",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.bundled_cljsjs_ns_QMARK_.call(null,name))){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns bundled-cljsjs-ns",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var root_path = "https://viebel.github.io/cljsjs-hosted/cljsjs/";
var lib_name = klipse_clj.lang.clojure.io.cljsjs_libname.call(null,name);
var full_names = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[root_path,lib_name,"/production/",lib_name,".min.inc.js"].join(''),[root_path,"/production/",lib_name,".min.inc.js"].join(''),[root_path,lib_name,"/development/",lib_name,".inc.js"].join(''),[root_path,"/development/",lib_name,".inc.js"].join('')], null);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,full_names,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__28011,src_cb){
var map__28012 = p__28011;
var map__28012__$1 = cljs.core.__destructure_map.call(null,map__28012);
var args = map__28012__$1;
var name = cljs.core.get.call(null,map__28012__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__28012__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__28012__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :cljs :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"external-libs: ",external_libs);
} else {
}

var load_ns_skip_cache = (function (){
return klipse_clj.lang.clojure.io.load_ns.call(null,external_libs,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),false),src_cb);
});
if(cljs.core.truth_(klipse_clj.lang.clojure.io.skip_ns_cljs.call(null,name))){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :cljs skipping",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(klipse_clj.lang.clojure.io.bundled_ns_QMARK_.call(null,name)){
var _ = (cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)?console.log("load-ns :cljs bundled",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):null);
var filenames = cljs.core.map.call(null,(function (p1__28010_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28010_SHARP_),".cache.json"].join('');
}),klipse_clj.lang.clojure.io.cljs_suffixes);
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_28025){
var state_val_28026 = (state_28025[(1)]);
if((state_val_28026 === (1))){
var inst_28013 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28025__$1,(2),inst_28013);
} else {
if((state_val_28026 === (2))){
var inst_28015 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
if(cljs.core.truth_(inst_28015)){
var statearr_28027_28081 = state_28025__$1;
(statearr_28027_28081[(1)] = (3));

} else {
var statearr_28028_28082 = state_28025__$1;
(statearr_28028_28082[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (3))){
var state_28025__$1 = state_28025;
var statearr_28029_28083 = state_28025__$1;
(statearr_28029_28083[(2)] = null);

(statearr_28029_28083[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (4))){
var inst_28018 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_28019 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_28020 = cljs.core.PersistentHashMap.fromArrays(inst_28018,inst_28019);
var inst_28021 = src_cb.call(null,inst_28020);
var state_28025__$1 = state_28025;
var statearr_28030_28084 = state_28025__$1;
(statearr_28030_28084[(2)] = inst_28021);

(statearr_28030_28084[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (5))){
var inst_28023 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28025__$1,inst_28023);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21984__auto____0 = (function (){
var statearr_28031 = [null,null,null,null,null,null,null];
(statearr_28031[(0)] = klipse_clj$lang$clojure$io$state_machine__21984__auto__);

(statearr_28031[(1)] = (1));

return statearr_28031;
});
var klipse_clj$lang$clojure$io$state_machine__21984__auto____1 = (function (state_28025){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_28025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e28032){var ex__21987__auto__ = e28032;
var statearr_28033_28085 = state_28025;
(statearr_28033_28085[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_28025[(4)]))){
var statearr_28034_28086 = state_28025;
(statearr_28034_28086[(1)] = cljs.core.first.call(null,(state_28025[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28087 = state_28025;
state_28025 = G__28087;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21984__auto__ = function(state_28025){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21984__auto____1.call(this,state_28025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21984__auto____0;
klipse_clj$lang$clojure$io$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21984__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_28035 = f__22109__auto__.call(null);
(statearr_28035[(6)] = c__22108__auto__);

return statearr_28035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = try_cache_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_.call(null,name);
} else {
return and__5000__auto__;
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
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :cljs from external libs",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_28046){
var state_val_28047 = (state_28046[(1)]);
if((state_val_28047 === (1))){
var inst_28036 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28046__$1,(2),inst_28036);
} else {
if((state_val_28047 === (2))){
var inst_28038 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
if(cljs.core.truth_(inst_28038)){
var statearr_28048_28088 = state_28046__$1;
(statearr_28048_28088[(1)] = (3));

} else {
var statearr_28049_28089 = state_28046__$1;
(statearr_28049_28089[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (3))){
var state_28046__$1 = state_28046;
var statearr_28050_28090 = state_28046__$1;
(statearr_28050_28090[(2)] = null);

(statearr_28050_28090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (4))){
var inst_28041 = [prefix,".js"].join('');
var inst_28042 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_28041,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_28046__$1 = state_28046;
var statearr_28051_28091 = state_28046__$1;
(statearr_28051_28091[(2)] = inst_28042);

(statearr_28051_28091[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (5))){
var inst_28044 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28046__$1,inst_28044);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21984__auto____0 = (function (){
var statearr_28052 = [null,null,null,null,null,null,null];
(statearr_28052[(0)] = klipse_clj$lang$clojure$io$state_machine__21984__auto__);

(statearr_28052[(1)] = (1));

return statearr_28052;
});
var klipse_clj$lang$clojure$io$state_machine__21984__auto____1 = (function (state_28046){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_28046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e28053){var ex__21987__auto__ = e28053;
var statearr_28054_28092 = state_28046;
(statearr_28054_28092[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_28046[(4)]))){
var statearr_28055_28093 = state_28046;
(statearr_28055_28093[(1)] = cljs.core.first.call(null,(state_28046[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28094 = state_28046;
state_28046 = G__28094;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21984__auto__ = function(state_28046){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21984__auto____1.call(this,state_28046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21984__auto____0;
klipse_clj$lang$clojure$io$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21984__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_28056 = f__22109__auto__.call(null);
(statearr_28056[(6)] = c__22108__auto__);

return statearr_28056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_28070){
var state_val_28071 = (state_28070[(1)]);
if((state_val_28071 === (1))){
var inst_28057 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_28070__$1 = state_28070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28070__$1,(2),inst_28057);
} else {
if((state_val_28071 === (2))){
var inst_28059 = (state_28070[(2)]);
var state_28070__$1 = state_28070;
if(cljs.core.truth_(inst_28059)){
var statearr_28072_28095 = state_28070__$1;
(statearr_28072_28095[(1)] = (3));

} else {
var statearr_28073_28096 = state_28070__$1;
(statearr_28073_28096[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (3))){
var state_28070__$1 = state_28070;
var statearr_28074_28097 = state_28070__$1;
(statearr_28074_28097[(2)] = null);

(statearr_28074_28097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (4))){
var inst_28062 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28063 = [".js"];
var inst_28064 = (new cljs.core.PersistentVector(null,1,(5),inst_28062,inst_28063,null));
var inst_28065 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_28064,path);
var inst_28066 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_28065,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_28070__$1 = state_28070;
var statearr_28075_28098 = state_28070__$1;
(statearr_28075_28098[(2)] = inst_28066);

(statearr_28075_28098[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28071 === (5))){
var inst_28068 = (state_28070[(2)]);
var state_28070__$1 = state_28070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28070__$1,inst_28068);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21984__auto____0 = (function (){
var statearr_28076 = [null,null,null,null,null,null,null];
(statearr_28076[(0)] = klipse_clj$lang$clojure$io$state_machine__21984__auto__);

(statearr_28076[(1)] = (1));

return statearr_28076;
});
var klipse_clj$lang$clojure$io$state_machine__21984__auto____1 = (function (state_28070){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_28070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e28077){var ex__21987__auto__ = e28077;
var statearr_28078_28099 = state_28070;
(statearr_28078_28099[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_28070[(4)]))){
var statearr_28079_28100 = state_28070;
(statearr_28079_28100[(1)] = cljs.core.first.call(null,(state_28070[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28101 = state_28070;
state_28070 = G__28101;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21984__auto__ = function(state_28070){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21984__auto____1.call(this,state_28070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21984__auto____0;
klipse_clj$lang$clojure$io$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21984__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_28080 = f__22109__auto__.call(null);
(statearr_28080[(6)] = c__22108__auto__);

return statearr_28080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__28103,src_cb){
var map__28104 = p__28103;
var map__28104__$1 = cljs.core.__destructure_map.call(null,map__28104);
var name = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj__26943__auto__ = goog;
var f__26944__auto__ = (obj__26943__auto__["getObjectByName"]);
return f__26944__auto__.call(obj__26943__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,(function (p1__28102_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28102_SHARP_),".js"].join('');
}),cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
