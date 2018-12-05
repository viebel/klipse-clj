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
return (function (_,p__133699,src_cb){
var map__133700 = p__133699;
var map__133700__$1 = ((((!((map__133700 == null)))?(((((map__133700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__133700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133700):map__133700);
var name = cljs.core.get.call(null,map__133700__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__133700__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__133700__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var len__4499__auto___133860 = arguments.length;
var i__4500__auto___133861 = (0);
while(true){
if((i__4500__auto___133861 < len__4499__auto___133860)){
args__4502__auto__.push((arguments[i__4500__auto___133861]));

var G__133862 = (i__4500__auto___133861 + (1));
i__4500__auto___133861 = G__133862;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((4) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4503__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__133722){
var map__133723 = p__133722;
var map__133723__$1 = ((((!((map__133723 == null)))?(((((map__133723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__133723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133723):map__133723);
var transform = cljs.core.get.call(null,map__133723__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__133723__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__,map__133723,map__133723__$1,transform,can_recover_QMARK_){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__,map__133723,map__133723__$1,transform,can_recover_QMARK_){
return (function (state_133792){
var state_val_133793 = (state_133792[(1)]);
if((state_val_133793 === (7))){
var inst_133737 = (state_133792[(7)]);
var inst_133737__$1 = (state_133792[(2)]);
var inst_133739 = (inst_133737__$1 == null);
var inst_133740 = cljs.core.not.call(null,inst_133739);
var state_133792__$1 = (function (){var statearr_133794 = state_133792;
(statearr_133794[(7)] = inst_133737__$1);

return statearr_133794;
})();
if(inst_133740){
var statearr_133795_133869 = state_133792__$1;
(statearr_133795_133869[(1)] = (8));

} else {
var statearr_133796_133871 = state_133792__$1;
(statearr_133796_133871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (20))){
var state_133792__$1 = state_133792;
var statearr_133797_133874 = state_133792__$1;
(statearr_133797_133874[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_133797_133874[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (1))){
var inst_133725 = filenames;
var state_133792__$1 = (function (){var statearr_133798 = state_133792;
(statearr_133798[(8)] = inst_133725);

return statearr_133798;
})();
var statearr_133799_133878 = state_133792__$1;
(statearr_133799_133878[(2)] = null);

(statearr_133799_133878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (24))){
var inst_133782 = src_cb.call(null,null);
var state_133792__$1 = state_133792;
var statearr_133800_133879 = state_133792__$1;
(statearr_133800_133879[(2)] = inst_133782);

(statearr_133800_133879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (4))){
var inst_133730 = (state_133792[(9)]);
var inst_133725 = (state_133792[(8)]);
var inst_133730__$1 = cljs.core.first.call(null,inst_133725);
var inst_133731 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_133730__$1);
var inst_133732 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_133733 = [false];
var inst_133734 = cljs.core.PersistentHashMap.fromArrays(inst_133732,inst_133733);
var inst_133735 = cljs_http.client.get.call(null,inst_133731,inst_133734);
var state_133792__$1 = (function (){var statearr_133805 = state_133792;
(statearr_133805[(9)] = inst_133730__$1);

return statearr_133805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133792__$1,(7),inst_133735);
} else {
if((state_val_133793 === (15))){
var inst_133737 = (state_133792[(7)]);
var state_133792__$1 = state_133792;
var statearr_133809_133888 = state_133792__$1;
(statearr_133809_133888[(2)] = inst_133737);

(statearr_133809_133888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (21))){
var state_133792__$1 = state_133792;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_133810_133889 = state_133792__$1;
(statearr_133810_133889[(1)] = (23));

} else {
var statearr_133811_133890 = state_133792__$1;
(statearr_133811_133890[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (13))){
var inst_133750 = (state_133792[(2)]);
var state_133792__$1 = state_133792;
var statearr_133812_133891 = state_133792__$1;
(statearr_133812_133891[(2)] = inst_133750);

(statearr_133812_133891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (22))){
var inst_133786 = (state_133792[(2)]);
var state_133792__$1 = state_133792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133792__$1,inst_133786);
} else {
if((state_val_133793 === (6))){
var inst_133775 = (state_133792[(2)]);
var state_133792__$1 = state_133792;
var statearr_133818_133892 = state_133792__$1;
(statearr_133818_133892[(2)] = inst_133775);

(statearr_133818_133892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (25))){
var inst_133784 = (state_133792[(2)]);
var state_133792__$1 = (function (){var statearr_133820 = state_133792;
(statearr_133820[(10)] = inst_133784);

return statearr_133820;
})();
var statearr_133822_133893 = state_133792__$1;
(statearr_133822_133893[(2)] = false);

(statearr_133822_133893[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (17))){
var inst_133730 = (state_133792[(9)]);
var inst_133760 = (state_133792[(11)]);
var inst_133763 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_133764 = transform.call(null,inst_133760);
var inst_133765 = [lang,inst_133764,inst_133730];
var inst_133766 = cljs.core.PersistentHashMap.fromArrays(inst_133763,inst_133765);
var inst_133767 = src_cb.call(null,inst_133766);
var state_133792__$1 = (function (){var statearr_133823 = state_133792;
(statearr_133823[(12)] = inst_133767);

return statearr_133823;
})();
var statearr_133824_133899 = state_133792__$1;
(statearr_133824_133899[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_133824_133899[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (3))){
var inst_133777 = (state_133792[(2)]);
var state_133792__$1 = state_133792;
if(cljs.core.truth_(inst_133777)){
var statearr_133825_133900 = state_133792__$1;
(statearr_133825_133900[(1)] = (20));

} else {
var statearr_133826_133901 = state_133792__$1;
(statearr_133826_133901[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (12))){
var state_133792__$1 = state_133792;
var statearr_133827_133902 = state_133792__$1;
(statearr_133827_133902[(2)] = false);

(statearr_133827_133902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (2))){
var inst_133725 = (state_133792[(8)]);
var inst_133727 = cljs.core.seq.call(null,inst_133725);
var state_133792__$1 = state_133792;
if(inst_133727){
var statearr_133828_133905 = state_133792__$1;
(statearr_133828_133905[(1)] = (4));

} else {
var statearr_133830_133907 = state_133792__$1;
(statearr_133830_133907[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (23))){
var state_133792__$1 = state_133792;
var statearr_133832_133908 = state_133792__$1;
(statearr_133832_133908[(2)] = null);

(statearr_133832_133908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (19))){
var inst_133772 = (state_133792[(2)]);
var state_133792__$1 = state_133792;
var statearr_133834_133909 = state_133792__$1;
(statearr_133834_133909[(2)] = inst_133772);

(statearr_133834_133909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (11))){
var state_133792__$1 = state_133792;
var statearr_133835_133910 = state_133792__$1;
(statearr_133835_133910[(2)] = true);

(statearr_133835_133910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (9))){
var state_133792__$1 = state_133792;
var statearr_133836_133911 = state_133792__$1;
(statearr_133836_133911[(2)] = false);

(statearr_133836_133911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (5))){
var state_133792__$1 = state_133792;
var statearr_133840_133913 = state_133792__$1;
(statearr_133840_133913[(2)] = null);

(statearr_133840_133913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (14))){
var inst_133737 = (state_133792[(7)]);
var inst_133755 = cljs.core.apply.call(null,cljs.core.hash_map,inst_133737);
var state_133792__$1 = state_133792;
var statearr_133841_133916 = state_133792__$1;
(statearr_133841_133916[(2)] = inst_133755);

(statearr_133841_133916[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (16))){
var inst_133758 = (state_133792[(2)]);
var inst_133759 = cljs.core.get.call(null,inst_133758,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_133760 = cljs.core.get.call(null,inst_133758,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_133761 = cljs.core._EQ_.call(null,(200),inst_133759);
var state_133792__$1 = (function (){var statearr_133842 = state_133792;
(statearr_133842[(11)] = inst_133760);

return statearr_133842;
})();
if(inst_133761){
var statearr_133843_133924 = state_133792__$1;
(statearr_133843_133924[(1)] = (17));

} else {
var statearr_133844_133925 = state_133792__$1;
(statearr_133844_133925[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (10))){
var inst_133753 = (state_133792[(2)]);
var state_133792__$1 = state_133792;
if(cljs.core.truth_(inst_133753)){
var statearr_133845_133926 = state_133792__$1;
(statearr_133845_133926[(1)] = (14));

} else {
var statearr_133846_133927 = state_133792__$1;
(statearr_133846_133927[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (18))){
var inst_133725 = (state_133792[(8)]);
var inst_133769 = cljs.core.rest.call(null,inst_133725);
var inst_133725__$1 = inst_133769;
var state_133792__$1 = (function (){var statearr_133847 = state_133792;
(statearr_133847[(8)] = inst_133725__$1);

return statearr_133847;
})();
var statearr_133848_133930 = state_133792__$1;
(statearr_133848_133930[(2)] = null);

(statearr_133848_133930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_133793 === (8))){
var inst_133737 = (state_133792[(7)]);
var inst_133742 = inst_133737.cljs$lang$protocol_mask$partition0$;
var inst_133743 = (inst_133742 & (64));
var inst_133744 = inst_133737.cljs$core$ISeq$;
var inst_133745 = (cljs.core.PROTOCOL_SENTINEL === inst_133744);
var inst_133746 = ((inst_133743) || (inst_133745));
var state_133792__$1 = state_133792;
if(cljs.core.truth_(inst_133746)){
var statearr_133849_133935 = state_133792__$1;
(statearr_133849_133935[(1)] = (11));

} else {
var statearr_133850_133936 = state_133792__$1;
(statearr_133850_133936[(1)] = (12));

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
});})(c__15829__auto__,map__133723,map__133723__$1,transform,can_recover_QMARK_))
;
return ((function (switch__15806__auto__,c__15829__auto__,map__133723,map__133723__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15807__auto____0 = (function (){
var statearr_133851 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_133851[(0)] = klipse_clj$lang$clojure$io$state_machine__15807__auto__);

(statearr_133851[(1)] = (1));

return statearr_133851;
});
var klipse_clj$lang$clojure$io$state_machine__15807__auto____1 = (function (state_133792){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_133792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e133853){if((e133853 instanceof Object)){
var ex__15810__auto__ = e133853;
var statearr_133854_133941 = state_133792;
(statearr_133854_133941[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e133853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__133945 = state_133792;
state_133792 = G__133945;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15807__auto__ = function(state_133792){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15807__auto____1.call(this,state_133792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15807__auto____0;
klipse_clj$lang$clojure$io$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15807__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__,map__133723,map__133723__$1,transform,can_recover_QMARK_))
})();
var state__15831__auto__ = (function (){var statearr_133858 = f__15830__auto__.call(null);
(statearr_133858[(6)] = c__15829__auto__);

return statearr_133858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__,map__133723,map__133723__$1,transform,can_recover_QMARK_))
);

return c__15829__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq133713){
var G__133714 = cljs.core.first.call(null,seq133713);
var seq133713__$1 = cljs.core.next.call(null,seq133713);
var G__133715 = cljs.core.first.call(null,seq133713__$1);
var seq133713__$2 = cljs.core.next.call(null,seq133713__$1);
var G__133716 = cljs.core.first.call(null,seq133713__$2);
var seq133713__$3 = cljs.core.next.call(null,seq133713__$2);
var G__133717 = cljs.core.first.call(null,seq133713__$3);
var seq133713__$4 = cljs.core.next.call(null,seq133713__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__133714,G__133715,G__133716,G__133717,seq133713__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4292__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__133948(s__133949){
return (new cljs.core.LazySeq(null,(function (){
var s__133949__$1 = s__133949;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__133949__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var lib = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__133949__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__133948_$_iter__133950(s__133951){
return (new cljs.core.LazySeq(null,((function (s__133949__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__133951__$1 = s__133951;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__133951__$1);
if(temp__5457__auto____$1){
var s__133951__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__133951__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__133951__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__133953 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__133952 = (0);
while(true){
if((i__133952 < size__4291__auto__)){
var suffix = cljs.core._nth.call(null,c__4290__auto__,i__133952);
cljs.core.chunk_append.call(null,b__133953,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__133967 = (i__133952 + (1));
i__133952 = G__133967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__133953),klipse_clj$lang$clojure$io$external_libs_files_$_iter__133948_$_iter__133950.call(null,cljs.core.chunk_rest.call(null,s__133951__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__133953),null);
}
} else {
var suffix = cljs.core.first.call(null,s__133951__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__133948_$_iter__133950.call(null,cljs.core.rest.call(null,s__133951__$2)));
}
} else {
return null;
}
break;
}
});})(s__133949__$1,lib,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__133949__$1,lib,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,suffixes));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__133948.call(null,cljs.core.rest.call(null,s__133949__$1)));
} else {
var G__133968 = cljs.core.rest.call(null,s__133949__$1);
s__133949__$1 = G__133968;
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

var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_134016){
var state_val_134017 = (state_134016[(1)]);
if((state_val_134017 === (1))){
var inst_133973 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_134016__$1 = (function (){var statearr_134018 = state_134016;
(statearr_134018[(7)] = inst_133973);

return statearr_134018;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_134019_134045 = state_134016__$1;
(statearr_134019_134045[(1)] = (2));

} else {
var statearr_134020_134046 = state_134016__$1;
(statearr_134020_134046[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134017 === (2))){
var state_134016__$1 = state_134016;
var statearr_134021_134047 = state_134016__$1;
(statearr_134021_134047[(2)] = "$macros");

(statearr_134021_134047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134017 === (3))){
var state_134016__$1 = state_134016;
var statearr_134022_134048 = state_134016__$1;
(statearr_134022_134048[(2)] = "");

(statearr_134022_134048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134017 === (4))){
var inst_133979 = (state_134016[(8)]);
var inst_133973 = (state_134016[(7)]);
var inst_133980 = (state_134016[(9)]);
var inst_133977 = (state_134016[(10)]);
var inst_133977__$1 = (state_134016[(2)]);
var inst_133978 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_133979__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_133978),"/"].join('');
var inst_133980__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_133979__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_133973),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_133977__$1),".js"].join('');
var inst_133981 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_133979__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_133973),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_133977__$1),".cache.json"].join('');
var inst_133982 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_133980__$1);
var inst_133983 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_133984 = [false];
var inst_133985 = cljs.core.PersistentHashMap.fromArrays(inst_133983,inst_133984);
var inst_133986 = cljs_http.client.get.call(null,inst_133982,inst_133985);
var state_134016__$1 = (function (){var statearr_134027 = state_134016;
(statearr_134027[(8)] = inst_133979__$1);

(statearr_134027[(9)] = inst_133980__$1);

(statearr_134027[(11)] = inst_133981);

(statearr_134027[(10)] = inst_133977__$1);

return statearr_134027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134016__$1,(5),inst_133986);
} else {
if((state_val_134017 === (5))){
var inst_133981 = (state_134016[(11)]);
var inst_133988 = (state_134016[(2)]);
var inst_133989 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_133981);
var inst_133990 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_133991 = [false];
var inst_133992 = cljs.core.PersistentHashMap.fromArrays(inst_133990,inst_133991);
var inst_133993 = cljs_http.client.get.call(null,inst_133989,inst_133992);
var state_134016__$1 = (function (){var statearr_134029 = state_134016;
(statearr_134029[(12)] = inst_133988);

return statearr_134029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134016__$1,(6),inst_133993);
} else {
if((state_val_134017 === (6))){
var inst_133979 = (state_134016[(8)]);
var inst_133973 = (state_134016[(7)]);
var inst_133980 = (state_134016[(9)]);
var inst_133981 = (state_134016[(11)]);
var inst_133977 = (state_134016[(10)]);
var inst_133995 = (state_134016[(13)]);
var inst_133988 = (state_134016[(12)]);
var inst_133995__$1 = (state_134016[(2)]);
var inst_133996 = (function (){var nn = inst_133973;
var suffix = inst_133977;
var root = inst_133979;
var src_filename = inst_133980;
var cache_filename = inst_133981;
var src = inst_133988;
var cache = inst_133995__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_133979,inst_133973,inst_133980,inst_133981,inst_133977,inst_133995,inst_133988,inst_133995__$1,state_val_134017,c__15829__auto__){
return (function (p1__133972_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__133972_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_133979,inst_133973,inst_133980,inst_133981,inst_133977,inst_133995,inst_133988,inst_133995__$1,state_val_134017,c__15829__auto__))
})();
var inst_133997 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_133998 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_133995__$1);
var inst_133999 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_133988);
var inst_134000 = [inst_133998,inst_133999];
var inst_134001 = (new cljs.core.PersistentVector(null,2,(5),inst_133997,inst_134000,null));
var inst_134002 = cljs.core.every_QMARK_.call(null,inst_133996,inst_134001);
var state_134016__$1 = (function (){var statearr_134030 = state_134016;
(statearr_134030[(13)] = inst_133995__$1);

return statearr_134030;
})();
if(inst_134002){
var statearr_134031_134065 = state_134016__$1;
(statearr_134031_134065[(1)] = (7));

} else {
var statearr_134032_134066 = state_134016__$1;
(statearr_134032_134066[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134017 === (7))){
var inst_133995 = (state_134016[(13)]);
var inst_133988 = (state_134016[(12)]);
var inst_134004 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_134005 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_133995);
var inst_134006 = klipse_clj.lang.clojure.io.edn.call(null,inst_134005);
var inst_134007 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_133988);
var inst_134008 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_134006,inst_134007];
var inst_134009 = cljs.core.PersistentHashMap.fromArrays(inst_134004,inst_134008);
var inst_134010 = src_cb.call(null,inst_134009);
var state_134016__$1 = state_134016;
var statearr_134033_134067 = state_134016__$1;
(statearr_134033_134067[(2)] = inst_134010);

(statearr_134033_134067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134017 === (8))){
var inst_134012 = src_cb.call(null,null);
var state_134016__$1 = state_134016;
var statearr_134034_134071 = state_134016__$1;
(statearr_134034_134071[(2)] = inst_134012);

(statearr_134034_134071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134017 === (9))){
var inst_134014 = (state_134016[(2)]);
var state_134016__$1 = state_134016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134016__$1,inst_134014);
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
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto____0 = (function (){
var statearr_134035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_134035[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto__);

(statearr_134035[(1)] = (1));

return statearr_134035;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto____1 = (function (state_134016){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_134016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e134036){if((e134036 instanceof Object)){
var ex__15810__auto__ = e134036;
var statearr_134037_134081 = state_134016;
(statearr_134037_134081[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134082 = state_134016;
state_134016 = G__134082;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto__ = function(state_134016){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto____1.call(this,state_134016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_134044 = f__15830__auto__.call(null);
(statearr_134044[(6)] = c__15829__auto__);

return statearr_134044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_134122){
var state_val_134123 = (state_134122[(1)]);
if((state_val_134123 === (7))){
var state_134122__$1 = state_134122;
var statearr_134125_134154 = state_134122__$1;
(statearr_134125_134154[(2)] = false);

(statearr_134125_134154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134123 === (1))){
var inst_134084 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_134085 = [false];
var inst_134086 = cljs.core.PersistentHashMap.fromArrays(inst_134084,inst_134085);
var inst_134087 = cljs_http.client.get.call(null,filename,inst_134086);
var state_134122__$1 = state_134122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134122__$1,(2),inst_134087);
} else {
if((state_val_134123 === (4))){
var state_134122__$1 = state_134122;
var statearr_134127_134155 = state_134122__$1;
(statearr_134127_134155[(2)] = false);

(statearr_134127_134155[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134123 === (13))){
var inst_134118 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_134122__$1 = state_134122;
var statearr_134130_134156 = state_134122__$1;
(statearr_134130_134156[(2)] = inst_134118);

(statearr_134130_134156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134123 === (6))){
var state_134122__$1 = state_134122;
var statearr_134132_134161 = state_134122__$1;
(statearr_134132_134161[(2)] = true);

(statearr_134132_134161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134123 === (3))){
var inst_134089 = (state_134122[(7)]);
var inst_134094 = inst_134089.cljs$lang$protocol_mask$partition0$;
var inst_134095 = (inst_134094 & (64));
var inst_134096 = inst_134089.cljs$core$ISeq$;
var inst_134097 = (cljs.core.PROTOCOL_SENTINEL === inst_134096);
var inst_134098 = ((inst_134095) || (inst_134097));
var state_134122__$1 = state_134122;
if(cljs.core.truth_(inst_134098)){
var statearr_134133_134162 = state_134122__$1;
(statearr_134133_134162[(1)] = (6));

} else {
var statearr_134134_134163 = state_134122__$1;
(statearr_134134_134163[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134123 === (12))){
var inst_134111 = (state_134122[(8)]);
var inst_134115 = klipse_clj.lang.clojure.io.edn.call(null,inst_134111);
var inst_134116 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_134115);
var state_134122__$1 = state_134122;
var statearr_134135_134164 = state_134122__$1;
(statearr_134135_134164[(2)] = inst_134116);

(statearr_134135_134164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134123 === (2))){
var inst_134089 = (state_134122[(7)]);
var inst_134089__$1 = (state_134122[(2)]);
var inst_134091 = (inst_134089__$1 == null);
var inst_134092 = cljs.core.not.call(null,inst_134091);
var state_134122__$1 = (function (){var statearr_134136 = state_134122;
(statearr_134136[(7)] = inst_134089__$1);

return statearr_134136;
})();
if(inst_134092){
var statearr_134137_134167 = state_134122__$1;
(statearr_134137_134167[(1)] = (3));

} else {
var statearr_134138_134168 = state_134122__$1;
(statearr_134138_134168[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134123 === (11))){
var inst_134110 = (state_134122[(2)]);
var inst_134111 = cljs.core.get.call(null,inst_134110,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_134112 = cljs.core.get.call(null,inst_134110,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_134113 = cljs.core._EQ_.call(null,(200),inst_134112);
var state_134122__$1 = (function (){var statearr_134141 = state_134122;
(statearr_134141[(8)] = inst_134111);

return statearr_134141;
})();
if(inst_134113){
var statearr_134142_134169 = state_134122__$1;
(statearr_134142_134169[(1)] = (12));

} else {
var statearr_134143_134170 = state_134122__$1;
(statearr_134143_134170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134123 === (9))){
var inst_134089 = (state_134122[(7)]);
var inst_134107 = cljs.core.apply.call(null,cljs.core.hash_map,inst_134089);
var state_134122__$1 = state_134122;
var statearr_134144_134171 = state_134122__$1;
(statearr_134144_134171[(2)] = inst_134107);

(statearr_134144_134171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134123 === (5))){
var inst_134105 = (state_134122[(2)]);
var state_134122__$1 = state_134122;
if(cljs.core.truth_(inst_134105)){
var statearr_134145_134177 = state_134122__$1;
(statearr_134145_134177[(1)] = (9));

} else {
var statearr_134146_134178 = state_134122__$1;
(statearr_134146_134178[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134123 === (14))){
var inst_134120 = (state_134122[(2)]);
var state_134122__$1 = state_134122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134122__$1,inst_134120);
} else {
if((state_val_134123 === (10))){
var inst_134089 = (state_134122[(7)]);
var state_134122__$1 = state_134122;
var statearr_134147_134179 = state_134122__$1;
(statearr_134147_134179[(2)] = inst_134089);

(statearr_134147_134179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134123 === (8))){
var inst_134102 = (state_134122[(2)]);
var state_134122__$1 = state_134122;
var statearr_134148_134180 = state_134122__$1;
(statearr_134148_134180[(2)] = inst_134102);

(statearr_134148_134180[(1)] = (5));


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
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto____0 = (function (){
var statearr_134150 = [null,null,null,null,null,null,null,null,null];
(statearr_134150[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto__);

(statearr_134150[(1)] = (1));

return statearr_134150;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto____1 = (function (state_134122){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_134122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e134151){if((e134151 instanceof Object)){
var ex__15810__auto__ = e134151;
var statearr_134152_134185 = state_134122;
(statearr_134152_134185[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134186 = state_134122;
state_134122 = G__134186;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto__ = function(state_134122){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto____1.call(this,state_134122);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_134153 = f__15830__auto__.call(null);
(statearr_134153[(6)] = c__15829__auto__);

return statearr_134153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__134191,src_cb_original){
var map__134192 = p__134191;
var map__134192__$1 = ((((!((map__134192 == null)))?(((((map__134192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__134192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134192):map__134192);
var name = cljs.core.get.call(null,map__134192__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__134192__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__134192,map__134192__$1,name,path){
return (function() { 
var G__134198__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__134198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__134199__i = 0, G__134199__a = new Array(arguments.length -  0);
while (G__134199__i < G__134199__a.length) {G__134199__a[G__134199__i] = arguments[G__134199__i + 0]; ++G__134199__i;}
  args = new cljs.core.IndexedSeq(G__134199__a,0,null);
} 
return G__134198__delegate.call(this,args);};
G__134198.cljs$lang$maxFixedArity = 0;
G__134198.cljs$lang$applyTo = (function (arglist__134200){
var args = cljs.core.seq(arglist__134200);
return G__134198__delegate(args);
});
G__134198.cljs$core$IFn$_invoke$arity$variadic = G__134198__delegate;
return G__134198;
})()
;})(map__134192,map__134192__$1,name,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__134206,src_cb){
var map__134207 = p__134206;
var map__134207__$1 = ((((!((map__134207 == null)))?(((((map__134207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__134207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134207):map__134207);
var path = cljs.core.get.call(null,map__134207__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__134207,map__134207__$1,path){
return (function (p1__134205_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__134205_SHARP_)].join('');
});})(path__$1,map__134207,map__134207__$1,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__134231,src_cb){
var map__134232 = p__134231;
var map__134232__$1 = ((((!((map__134232 == null)))?(((((map__134232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__134232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134232):map__134232);
var name = cljs.core.get.call(null,map__134232__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__134232__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var filenames = cljs.core.map.call(null,((function (_,map__134232,map__134232__$1,name,path){
return (function (p1__134230_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__134230_SHARP_),".cache.json"].join('');
});})(_,map__134232,map__134232__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__,_,filenames,map__134232,map__134232__$1,name,path){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__,_,filenames,map__134232,map__134232__$1,name,path){
return (function (state_134249){
var state_val_134250 = (state_134249[(1)]);
if((state_val_134250 === (1))){
var inst_134235 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_134249__$1 = state_134249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134249__$1,(2),inst_134235);
} else {
if((state_val_134250 === (2))){
var inst_134237 = (state_134249[(2)]);
var state_134249__$1 = state_134249;
if(cljs.core.truth_(inst_134237)){
var statearr_134252_134325 = state_134249__$1;
(statearr_134252_134325[(1)] = (3));

} else {
var statearr_134253_134327 = state_134249__$1;
(statearr_134253_134327[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134250 === (3))){
var state_134249__$1 = state_134249;
var statearr_134254_134332 = state_134249__$1;
(statearr_134254_134332[(2)] = null);

(statearr_134254_134332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134250 === (4))){
var inst_134240 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_134242 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_134243 = cljs.core.PersistentHashMap.fromArrays(inst_134240,inst_134242);
var inst_134244 = src_cb.call(null,inst_134243);
var state_134249__$1 = state_134249;
var statearr_134255_134333 = state_134249__$1;
(statearr_134255_134333[(2)] = inst_134244);

(statearr_134255_134333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134250 === (5))){
var inst_134246 = (state_134249[(2)]);
var state_134249__$1 = state_134249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134249__$1,inst_134246);
} else {
return null;
}
}
}
}
}
});})(c__15829__auto__,_,filenames,map__134232,map__134232__$1,name,path))
;
return ((function (switch__15806__auto__,c__15829__auto__,_,filenames,map__134232,map__134232__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15807__auto____0 = (function (){
var statearr_134256 = [null,null,null,null,null,null,null];
(statearr_134256[(0)] = klipse_clj$lang$clojure$io$state_machine__15807__auto__);

(statearr_134256[(1)] = (1));

return statearr_134256;
});
var klipse_clj$lang$clojure$io$state_machine__15807__auto____1 = (function (state_134249){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_134249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e134257){if((e134257 instanceof Object)){
var ex__15810__auto__ = e134257;
var statearr_134258_134336 = state_134249;
(statearr_134258_134336[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134337 = state_134249;
state_134249 = G__134337;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15807__auto__ = function(state_134249){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15807__auto____1.call(this,state_134249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15807__auto____0;
klipse_clj$lang$clojure$io$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15807__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__,_,filenames,map__134232,map__134232__$1,name,path))
})();
var state__15831__auto__ = (function (){var statearr_134259 = f__15830__auto__.call(null);
(statearr_134259[(6)] = c__15829__auto__);

return statearr_134259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__,_,filenames,map__134232,map__134232__$1,name,path))
);

return c__15829__auto__;
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

var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__,prefix,filenames,map__134232,map__134232__$1,name,path){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__,prefix,filenames,map__134232,map__134232__$1,name,path){
return (function (state_134270){
var state_val_134271 = (state_134270[(1)]);
if((state_val_134271 === (1))){
var inst_134260 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_134270__$1 = state_134270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134270__$1,(2),inst_134260);
} else {
if((state_val_134271 === (2))){
var inst_134262 = (state_134270[(2)]);
var state_134270__$1 = state_134270;
if(cljs.core.truth_(inst_134262)){
var statearr_134272_134354 = state_134270__$1;
(statearr_134272_134354[(1)] = (3));

} else {
var statearr_134273_134355 = state_134270__$1;
(statearr_134273_134355[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134271 === (3))){
var state_134270__$1 = state_134270;
var statearr_134274_134357 = state_134270__$1;
(statearr_134274_134357[(2)] = null);

(statearr_134274_134357[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134271 === (4))){
var inst_134265 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".js"].join('');
var inst_134266 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_134265,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_134270__$1 = state_134270;
var statearr_134275_134361 = state_134270__$1;
(statearr_134275_134361[(2)] = inst_134266);

(statearr_134275_134361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134271 === (5))){
var inst_134268 = (state_134270[(2)]);
var state_134270__$1 = state_134270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134270__$1,inst_134268);
} else {
return null;
}
}
}
}
}
});})(c__15829__auto__,prefix,filenames,map__134232,map__134232__$1,name,path))
;
return ((function (switch__15806__auto__,c__15829__auto__,prefix,filenames,map__134232,map__134232__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15807__auto____0 = (function (){
var statearr_134276 = [null,null,null,null,null,null,null];
(statearr_134276[(0)] = klipse_clj$lang$clojure$io$state_machine__15807__auto__);

(statearr_134276[(1)] = (1));

return statearr_134276;
});
var klipse_clj$lang$clojure$io$state_machine__15807__auto____1 = (function (state_134270){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_134270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e134277){if((e134277 instanceof Object)){
var ex__15810__auto__ = e134277;
var statearr_134278_134364 = state_134270;
(statearr_134278_134364[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134372 = state_134270;
state_134270 = G__134372;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15807__auto__ = function(state_134270){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15807__auto____1.call(this,state_134270);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15807__auto____0;
klipse_clj$lang$clojure$io$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15807__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__,prefix,filenames,map__134232,map__134232__$1,name,path))
})();
var state__15831__auto__ = (function (){var statearr_134279 = f__15830__auto__.call(null);
(statearr_134279[(6)] = c__15829__auto__);

return statearr_134279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__,prefix,filenames,map__134232,map__134232__$1,name,path))
);

return c__15829__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__,filenames,map__134232,map__134232__$1,name,path){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__,filenames,map__134232,map__134232__$1,name,path){
return (function (state_134297){
var state_val_134298 = (state_134297[(1)]);
if((state_val_134298 === (1))){
var inst_134284 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_134297__$1 = state_134297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_134297__$1,(2),inst_134284);
} else {
if((state_val_134298 === (2))){
var inst_134286 = (state_134297[(2)]);
var state_134297__$1 = state_134297;
if(cljs.core.truth_(inst_134286)){
var statearr_134299_134374 = state_134297__$1;
(statearr_134299_134374[(1)] = (3));

} else {
var statearr_134300_134380 = state_134297__$1;
(statearr_134300_134380[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134298 === (3))){
var state_134297__$1 = state_134297;
var statearr_134301_134383 = state_134297__$1;
(statearr_134301_134383[(2)] = null);

(statearr_134301_134383[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134298 === (4))){
var inst_134289 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_134290 = [".js"];
var inst_134291 = (new cljs.core.PersistentVector(null,1,(5),inst_134289,inst_134290,null));
var inst_134292 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_134291,path);
var inst_134293 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_134292,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_134297__$1 = state_134297;
var statearr_134302_134389 = state_134297__$1;
(statearr_134302_134389[(2)] = inst_134293);

(statearr_134302_134389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_134298 === (5))){
var inst_134295 = (state_134297[(2)]);
var state_134297__$1 = state_134297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_134297__$1,inst_134295);
} else {
return null;
}
}
}
}
}
});})(c__15829__auto__,filenames,map__134232,map__134232__$1,name,path))
;
return ((function (switch__15806__auto__,c__15829__auto__,filenames,map__134232,map__134232__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15807__auto____0 = (function (){
var statearr_134305 = [null,null,null,null,null,null,null];
(statearr_134305[(0)] = klipse_clj$lang$clojure$io$state_machine__15807__auto__);

(statearr_134305[(1)] = (1));

return statearr_134305;
});
var klipse_clj$lang$clojure$io$state_machine__15807__auto____1 = (function (state_134297){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_134297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e134307){if((e134307 instanceof Object)){
var ex__15810__auto__ = e134307;
var statearr_134309_134391 = state_134297;
(statearr_134309_134391[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_134297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e134307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__134394 = state_134297;
state_134297 = G__134394;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15807__auto__ = function(state_134297){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15807__auto____1.call(this,state_134297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15807__auto____0;
klipse_clj$lang$clojure$io$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15807__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__,filenames,map__134232,map__134232__$1,name,path))
})();
var state__15831__auto__ = (function (){var statearr_134310 = f__15830__auto__.call(null);
(statearr_134310[(6)] = c__15829__auto__);

return statearr_134310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__,filenames,map__134232,map__134232__$1,name,path))
);

return c__15829__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__134407,src_cb){
var map__134411 = p__134407;
var map__134411__$1 = ((((!((map__134411 == null)))?(((((map__134411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__134411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134411):map__134411);
var name = cljs.core.get.call(null,map__134411__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__134411__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__134411,map__134411__$1,name,path){
return (function (p1__134406_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(closure_github_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__134406_SHARP_),".js"].join('');
});})(closure_github_path,map__134411,map__134411__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
